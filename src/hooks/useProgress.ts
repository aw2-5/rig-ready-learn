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

const LOCAL_STORAGE_KEY_PREFIX = 'petrolearn-progress';
const GUEST_STORAGE_KEY = 'petrolearn-progress-guest';

export function useProgress() {
  const { user, isGuest } = useAuth();
  const [progress, setProgress] = useState<LessonProgress>({});
  const [isSyncing, setIsSyncing] = useState(false);

  // Get user-specific storage key
  const getStorageKey = useCallback(() => {
    if (user && !isGuest) {
      return `${LOCAL_STORAGE_KEY_PREFIX}-${user.id}`;
    }
    return GUEST_STORAGE_KEY;
  }, [user, isGuest]);

  // Load local progress for current user
  const loadLocalProgress = useCallback((): LessonProgress => {
    const key = getStorageKey();
    const saved = localStorage.getItem(key);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse local progress:', e);
      }
    }
    return {};
  }, [getStorageKey]);

  // Save to local storage for current user
  const saveLocalProgress = useCallback((newProgress: LessonProgress) => {
    const key = getStorageKey();
    localStorage.setItem(key, JSON.stringify(newProgress));
  }, [getStorageKey]);

  // Fetch progress from cloud (returns null if offline/error)
  const fetchCloudProgress = useCallback(async (): Promise<LessonProgress | null> => {
    if (!user) return null;

    try {
      const { data, error } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', user.id);

      if (error) {
        console.error('Failed to fetch cloud progress:', error);
        return null; // Return null to indicate failure (offline/error)
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
    } catch (err) {
      console.error('Network error fetching progress:', err);
      return null; // Offline or network error
    }
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
      if (user && !isGuest) {
        // Always load local progress first (for offline support)
        const localProgress = loadLocalProgress();
        
        // Try to fetch cloud progress
        const cloudProgress = await fetchCloudProgress();
        
        if (cloudProgress === null) {
          // Offline or error - use local progress
          console.log('Offline mode: using local progress');
          setProgress(localProgress);
          return;
        }
        
        // Online: check for guest data to migrate
        const guestProgress = localStorage.getItem(GUEST_STORAGE_KEY);
        
        if (guestProgress && Object.keys(cloudProgress).length === 0) {
          // Migrate guest progress to new user account
          try {
            const parsedGuest = JSON.parse(guestProgress);
            const merged = mergeProgress(parsedGuest, cloudProgress);
            setProgress(merged);
            saveLocalProgress(merged);
            await syncToCloud(merged);
            // Clear guest progress after migration
            localStorage.removeItem(GUEST_STORAGE_KEY);
          } catch (e) {
            console.error('Failed to migrate guest progress:', e);
            setProgress(cloudProgress);
            saveLocalProgress(cloudProgress);
          }
        } else {
          // Merge cloud with local (in case there are offline changes)
          const merged = mergeProgress(localProgress, cloudProgress);
          setProgress(merged);
          saveLocalProgress(merged);
          
          // Sync any local changes that weren't in cloud
          if (Object.keys(localProgress).length > 0) {
            await syncToCloud(merged);
          }
        }
      } else {
        // Guest: use guest storage only
        const localProgress = loadLocalProgress();
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(progress)]);

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
