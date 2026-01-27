import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '@/contexts/AuthContext';

interface StreakData {
  currentStreak: number;
  longestStreak: number;
  lastStudyDate: string | null;
  studiedToday: boolean;
}

const STREAK_STORAGE_KEY = 'petrolearn-streak';

export function useDailyStreak() {
  const { user, isGuest } = useAuth();
  const [streakData, setStreakData] = useState<StreakData>({
    currentStreak: 0,
    longestStreak: 0,
    lastStudyDate: null,
    studiedToday: false,
  });

  const getStorageKey = useCallback(() => {
    if (user && !isGuest) {
      return `${STREAK_STORAGE_KEY}-${user.id}`;
    }
    return `${STREAK_STORAGE_KEY}-guest`;
  }, [user, isGuest]);

  // Check if two dates are consecutive days
  const isConsecutiveDay = useCallback((date1: string, date2: string): boolean => {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    d1.setHours(0, 0, 0, 0);
    d2.setHours(0, 0, 0, 0);
    const diffTime = d2.getTime() - d1.getTime();
    const diffDays = diffTime / (1000 * 60 * 60 * 24);
    return diffDays === 1;
  }, []);

  // Check if date is today
  const isToday = useCallback((dateString: string): boolean => {
    const date = new Date(dateString);
    const today = new Date();
    return date.toDateString() === today.toDateString();
  }, []);

  // Check if date was yesterday
  const isYesterday = useCallback((dateString: string): boolean => {
    const date = new Date(dateString);
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return date.toDateString() === yesterday.toDateString();
  }, []);

  // Load streak data
  useEffect(() => {
    const key = getStorageKey();
    const saved = localStorage.getItem(key);
    
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as StreakData;
        const today = new Date().toISOString().split('T')[0];
        
        // Check if the streak is still valid
        if (parsed.lastStudyDate) {
          const studiedToday = isToday(parsed.lastStudyDate);
          const studiedYesterday = isYesterday(parsed.lastStudyDate);
          
          if (studiedToday) {
            // Already studied today
            setStreakData({ ...parsed, studiedToday: true });
          } else if (studiedYesterday) {
            // Streak is still active but not studied today
            setStreakData({ ...parsed, studiedToday: false });
          } else {
            // Streak is broken
            setStreakData({
              currentStreak: 0,
              longestStreak: parsed.longestStreak,
              lastStudyDate: parsed.lastStudyDate,
              studiedToday: false,
            });
          }
        } else {
          setStreakData(parsed);
        }
      } catch (e) {
        console.error('Failed to parse streak data:', e);
      }
    }
  }, [getStorageKey, isToday, isYesterday]);

  // Record study activity
  const recordStudy = useCallback(() => {
    const today = new Date().toISOString().split('T')[0];
    const key = getStorageKey();
    
    setStreakData((prev) => {
      // Already studied today
      if (prev.studiedToday) {
        return prev;
      }

      let newStreak = 1;
      
      if (prev.lastStudyDate) {
        if (isYesterday(prev.lastStudyDate)) {
          // Continuing streak
          newStreak = prev.currentStreak + 1;
        } else if (isToday(prev.lastStudyDate)) {
          // Already counted today
          return prev;
        }
        // If more than 1 day gap, streak resets to 1
      }

      const newLongest = Math.max(prev.longestStreak, newStreak);
      
      const newData: StreakData = {
        currentStreak: newStreak,
        longestStreak: newLongest,
        lastStudyDate: today,
        studiedToday: true,
      };

      localStorage.setItem(key, JSON.stringify(newData));
      return newData;
    });
  }, [getStorageKey, isYesterday, isToday]);

  // Get streak badge info
  const getStreakBadge = useCallback(() => {
    const { currentStreak } = streakData;
    if (currentStreak >= 100) return { name: 'Legendary', emoji: '🌟', color: 'text-yellow-400' };
    if (currentStreak >= 30) return { name: 'Monthly Master', emoji: '👑', color: 'text-purple-500' };
    if (currentStreak >= 7) return { name: 'Week Warrior', emoji: '🏆', color: 'text-blue-500' };
    if (currentStreak >= 3) return { name: 'Flame Starter', emoji: '🔥', color: 'text-orange-500' };
    return null;
  }, [streakData]);

  return {
    ...streakData,
    recordStudy,
    getStreakBadge,
  };
}
