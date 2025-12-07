import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';

export interface DayProgress {
  completed: boolean;
  score?: number;
  submittedAt?: string;
}

export interface WeekProgress {
  [day: number]: DayProgress;
}

export interface LessonProgress {
  [lessonId: string]: WeekProgress;
}

const LOCAL_STORAGE_KEY = 'petrolearn-progress';

export function useProgress() {
  const { user, isGuest } = useAuth();
  const [progress, setProgress] = useState<LessonProgress>({});
  const [isSyncing, setIsSyncing] = useState(false);

  // Load local progress
  const loadLocalProgress = useCallback((): LessonProgress => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse local progress:', e);
      }
    }
    return {};
  }, []);

  // Save to local storage
  const saveLocalProgress = useCallback((newProgress: LessonProgress) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newProgress));
  }, []);

  // Fetch progress from cloud
  const fetchCloudProgress = useCallback(async (): Promise<LessonProgress> => {
    if (!user) return {};

    const { data, error } = await supabase
      .from('user_progress')
      .select('*')
      .eq('user_id', user.id);

    if (error) {
      console.error('Failed to fetch cloud progress:', error);
      return {};
    }

    // Convert to LessonProgress format
    const cloudProgress: LessonProgress = {};
    data?.forEach((item) => {
      if (!cloudProgress[item.lesson_id]) {
        cloudProgress[item.lesson_id] = {};
      }
      cloudProgress[item.lesson_id][item.day_number] = {
        completed: item.completed,
        score: item.score ?? undefined,
        submittedAt: item.submitted_at,
      };
    });

    return cloudProgress;
  }, [user]);

  // Merge local and cloud progress (take most recent)
  const mergeProgress = useCallback((local: LessonProgress, cloud: LessonProgress): LessonProgress => {
    const merged: LessonProgress = { ...cloud };

    Object.entries(local).forEach(([lessonId, weekProgress]) => {
      if (!merged[lessonId]) {
        merged[lessonId] = {};
      }
      Object.entries(weekProgress).forEach(([day, dayProgress]) => {
        const dayNum = parseInt(day);
        const cloudDay = merged[lessonId]?.[dayNum];
        
        // If local has progress and cloud doesn't, or local is more recent
        if (!cloudDay || 
            (dayProgress.submittedAt && cloudDay.submittedAt && 
             new Date(dayProgress.submittedAt) > new Date(cloudDay.submittedAt))) {
          merged[lessonId][dayNum] = dayProgress;
        }
      });
    });

    return merged;
  }, []);

  // Sync local progress to cloud
  const syncToCloud = useCallback(async (progressToSync: LessonProgress) => {
    if (!user || isSyncing) return;

    setIsSyncing(true);
    try {
      const entries: Array<{
        user_id: string;
        lesson_id: string;
        day_number: number;
        completed: boolean;
        score: number | null;
        submitted_at: string;
      }> = [];

      Object.entries(progressToSync).forEach(([lessonId, weekProgress]) => {
        Object.entries(weekProgress).forEach(([day, dayProgress]) => {
          entries.push({
            user_id: user.id,
            lesson_id: lessonId,
            day_number: parseInt(day),
            completed: dayProgress.completed,
            score: dayProgress.score ?? null,
            submitted_at: dayProgress.submittedAt || new Date().toISOString(),
          });
        });
      });

      if (entries.length > 0) {
        const { error } = await supabase
          .from('user_progress')
          .upsert(entries, { 
            onConflict: 'user_id,lesson_id,day_number',
            ignoreDuplicates: false 
          });

        if (error) {
          console.error('Failed to sync to cloud:', error);
        }
      }
    } finally {
      setIsSyncing(false);
    }
  }, [user, isSyncing]);

  // Initialize progress
  useEffect(() => {
    const initProgress = async () => {
      const localProgress = loadLocalProgress();

      if (user && !isGuest) {
        // Logged in user: merge local and cloud, then sync
        const cloudProgress = await fetchCloudProgress();
        const merged = mergeProgress(localProgress, cloudProgress);
        setProgress(merged);
        saveLocalProgress(merged);
        
        // Sync any local-only progress to cloud
        if (Object.keys(localProgress).length > 0) {
          await syncToCloud(merged);
        }
      } else {
        // Guest: use local only
        setProgress(localProgress);
      }
    };

    initProgress();
  }, [user, isGuest, loadLocalProgress, fetchCloudProgress, mergeProgress, saveLocalProgress, syncToCloud]);

  const markDayComplete = useCallback(async (lessonId: string, day: number, score?: number) => {
    const newDayProgress: DayProgress = {
      completed: true,
      score,
      submittedAt: new Date().toISOString(),
    };

    const newProgress = {
      ...progress,
      [lessonId]: {
        ...progress[lessonId],
        [day]: newDayProgress,
      },
    };

    setProgress(newProgress);
    saveLocalProgress(newProgress);

    // Sync to cloud if logged in
    if (user && !isGuest) {
      const { error } = await supabase
        .from('user_progress')
        .upsert({
          user_id: user.id,
          lesson_id: lessonId,
          day_number: day,
          completed: true,
          score: score ?? null,
          submitted_at: newDayProgress.submittedAt,
        }, { 
          onConflict: 'user_id,lesson_id,day_number' 
        });

      if (error) {
        console.error('Failed to save progress to cloud:', error);
      }
    }
  }, [progress, user, isGuest, saveLocalProgress]);

  const isDayComplete = useCallback((lessonId: string, day: number): boolean => {
    return progress[lessonId]?.[day]?.completed || false;
  }, [progress]);

  const getDayScore = useCallback((lessonId: string, day: number): number | undefined => {
    return progress[lessonId]?.[day]?.score;
  }, [progress]);

  const getWeekProgress = useCallback((lessonId: string): number => {
    const lessonProgress = progress[lessonId];
    if (!lessonProgress) return 0;
    const completedDays = Object.values(lessonProgress).filter(d => d.completed).length;
    return Math.round((completedDays / 7) * 100);
  }, [progress]);

  const getTotalProgress = useCallback((lessonIds: string[]): number => {
    let totalCompleted = 0;
    const totalDays = lessonIds.length * 7;
    
    lessonIds.forEach(lessonId => {
      const lessonProgress = progress[lessonId];
      if (lessonProgress) {
        totalCompleted += Object.values(lessonProgress).filter(d => d.completed).length;
      }
    });
    
    return totalDays > 0 ? Math.round((totalCompleted / totalDays) * 100) : 0;
  }, [progress]);

  const resetLessonProgress = useCallback(async (lessonId: string) => {
    const newProgress = { ...progress };
    delete newProgress[lessonId];
    setProgress(newProgress);
    saveLocalProgress(newProgress);

    // Delete from cloud if logged in
    if (user && !isGuest) {
      await supabase
        .from('user_progress')
        .delete()
        .eq('user_id', user.id)
        .eq('lesson_id', lessonId);
    }
  }, [progress, user, isGuest, saveLocalProgress]);

  return {
    progress,
    markDayComplete,
    isDayComplete,
    getDayScore,
    getWeekProgress,
    getTotalProgress,
    resetLessonProgress,
    isSyncing,
  };
}
