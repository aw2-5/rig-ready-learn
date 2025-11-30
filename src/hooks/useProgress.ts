import { useState, useEffect } from 'react';

export interface DayProgress {
  completed: boolean;
  score?: number; // for quiz days
  submittedAt?: string;
}

export interface WeekProgress {
  [day: number]: DayProgress;
}

export interface LessonProgress {
  [lessonId: string]: WeekProgress;
}

const STORAGE_KEY = 'petrolearn-progress';

export function useProgress() {
  const [progress, setProgress] = useState<LessonProgress>({});

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setProgress(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse progress:', e);
      }
    }
  }, []);

  const saveProgress = (newProgress: LessonProgress) => {
    setProgress(newProgress);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newProgress));
  };

  const markDayComplete = (lessonId: string, day: number, score?: number) => {
    const newProgress = {
      ...progress,
      [lessonId]: {
        ...progress[lessonId],
        [day]: {
          completed: true,
          score,
          submittedAt: new Date().toISOString(),
        },
      },
    };
    saveProgress(newProgress);
  };

  const isDayComplete = (lessonId: string, day: number): boolean => {
    return progress[lessonId]?.[day]?.completed || false;
  };

  const getDayScore = (lessonId: string, day: number): number | undefined => {
    return progress[lessonId]?.[day]?.score;
  };

  const getWeekProgress = (lessonId: string): number => {
    const lessonProgress = progress[lessonId];
    if (!lessonProgress) return 0;
    const completedDays = Object.values(lessonProgress).filter(d => d.completed).length;
    return Math.round((completedDays / 7) * 100);
  };

  const getTotalProgress = (lessonIds: string[]): number => {
    let totalCompleted = 0;
    let totalDays = lessonIds.length * 7;
    
    lessonIds.forEach(lessonId => {
      const lessonProgress = progress[lessonId];
      if (lessonProgress) {
        totalCompleted += Object.values(lessonProgress).filter(d => d.completed).length;
      }
    });
    
    return totalDays > 0 ? Math.round((totalCompleted / totalDays) * 100) : 0;
  };

  const resetLessonProgress = (lessonId: string) => {
    const newProgress = { ...progress };
    delete newProgress[lessonId];
    saveProgress(newProgress);
  };

  return {
    progress,
    markDayComplete,
    isDayComplete,
    getDayScore,
    getWeekProgress,
    getTotalProgress,
    resetLessonProgress,
  };
}
