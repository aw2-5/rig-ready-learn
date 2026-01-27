import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '@/contexts/AuthContext';

export interface Challenge {
  id: string;
  type: 'complete_lesson' | 'answer_questions' | 'study_time' | 'complete_days' | 'quiz_score';
  targetEn: string;
  targetAr: string;
  goal: number;
  xp: number;
}

interface ChallengeProgress {
  challengeId: string;
  current: number;
  completed: boolean;
  completedAt?: string;
}

interface DailyChallengeData {
  date: string;
  challenge: Challenge;
  progress: ChallengeProgress;
  streakDays: number; // Consecutive challenge days
}

const CHALLENGE_STORAGE_KEY = 'petrolearn-daily-challenge';

// Available challenges pool
const challengePool: Challenge[] = [
  {
    id: 'complete_1_day',
    type: 'complete_lesson',
    targetEn: 'Complete 1 lesson day',
    targetAr: 'أكمل يوم واحد من الدروس',
    goal: 1,
    xp: 50,
  },
  {
    id: 'complete_3_days',
    type: 'complete_days',
    targetEn: 'Complete 3 lesson days',
    targetAr: 'أكمل 3 أيام من الدروس',
    goal: 3,
    xp: 100,
  },
  {
    id: 'answer_5_correct',
    type: 'answer_questions',
    targetEn: 'Answer 5 questions correctly',
    targetAr: 'أجب على 5 أسئلة بشكل صحيح',
    goal: 5,
    xp: 75,
  },
  {
    id: 'quiz_80_percent',
    type: 'quiz_score',
    targetEn: 'Score 80%+ in a quiz',
    targetAr: 'احصل على 80%+ في اختبار',
    goal: 80,
    xp: 100,
  },
  {
    id: 'answer_10_correct',
    type: 'answer_questions',
    targetEn: 'Answer 10 questions correctly',
    targetAr: 'أجب على 10 أسئلة بشكل صحيح',
    goal: 10,
    xp: 150,
  },
];

// Generate daily challenge based on date
function getDailyChallenge(date: string): Challenge {
  const dayIndex = new Date(date).getDate() % challengePool.length;
  return challengePool[dayIndex];
}

export function useDailyChallenge() {
  const { user, isGuest } = useAuth();
  const [data, setData] = useState<DailyChallengeData | null>(null);
  const [totalXP, setTotalXP] = useState(0);

  const getStorageKey = useCallback(() => {
    if (user && !isGuest) {
      return `${CHALLENGE_STORAGE_KEY}-${user.id}`;
    }
    return `${CHALLENGE_STORAGE_KEY}-guest`;
  }, [user, isGuest]);

  const getTotalXPKey = useCallback(() => {
    if (user && !isGuest) {
      return `petrolearn-total-xp-${user.id}`;
    }
    return 'petrolearn-total-xp-guest';
  }, [user, isGuest]);

  // Load or initialize daily challenge
  useEffect(() => {
    const key = getStorageKey();
    const xpKey = getTotalXPKey();
    const today = new Date().toISOString().split('T')[0];
    const saved = localStorage.getItem(key);
    const savedXP = localStorage.getItem(xpKey);

    if (savedXP) {
      setTotalXP(parseInt(savedXP, 10) || 0);
    }

    if (saved) {
      try {
        const parsed = JSON.parse(saved) as DailyChallengeData;
        
        if (parsed.date === today) {
          // Same day, use existing challenge
          setData(parsed);
        } else {
          // New day, generate new challenge
          const yesterday = new Date();
          yesterday.setDate(yesterday.getDate() - 1);
          const yesterdayStr = yesterday.toISOString().split('T')[0];
          
          // Check if yesterday's challenge was completed for streak
          const newStreakDays = parsed.date === yesterdayStr && parsed.progress.completed
            ? parsed.streakDays + 1
            : 0;

          const newChallenge = getDailyChallenge(today);
          const newData: DailyChallengeData = {
            date: today,
            challenge: newChallenge,
            progress: {
              challengeId: newChallenge.id,
              current: 0,
              completed: false,
            },
            streakDays: newStreakDays,
          };
          setData(newData);
          localStorage.setItem(key, JSON.stringify(newData));
        }
      } catch (e) {
        console.error('Failed to parse challenge data:', e);
        initializeNewChallenge();
      }
    } else {
      initializeNewChallenge();
    }

    function initializeNewChallenge() {
      const newChallenge = getDailyChallenge(today);
      const newData: DailyChallengeData = {
        date: today,
        challenge: newChallenge,
        progress: {
          challengeId: newChallenge.id,
          current: 0,
          completed: false,
        },
        streakDays: 0,
      };
      setData(newData);
      localStorage.setItem(key, JSON.stringify(newData));
    }
  }, [getStorageKey, getTotalXPKey]);

  // Update challenge progress
  const updateProgress = useCallback((type: Challenge['type'], value: number = 1) => {
    if (!data || data.progress.completed) return;
    if (data.challenge.type !== type) return;

    const key = getStorageKey();
    const xpKey = getTotalXPKey();

    setData((prev) => {
      if (!prev || prev.progress.completed) return prev;

      let newCurrent = prev.progress.current;
      
      // For quiz_score, we use the value directly (the score)
      if (type === 'quiz_score') {
        newCurrent = value;
      } else {
        newCurrent = prev.progress.current + value;
      }

      const completed = newCurrent >= prev.challenge.goal;

      if (completed && !prev.progress.completed) {
        // Award XP
        setTotalXP((prevXP) => {
          const newXP = prevXP + prev.challenge.xp;
          localStorage.setItem(xpKey, newXP.toString());
          return newXP;
        });
      }

      const newData: DailyChallengeData = {
        ...prev,
        progress: {
          ...prev.progress,
          current: newCurrent,
          completed,
          completedAt: completed ? new Date().toISOString() : undefined,
        },
      };

      localStorage.setItem(key, JSON.stringify(newData));
      return newData;
    });
  }, [data, getStorageKey, getTotalXPKey]);

  // Record lesson day completion
  const recordLessonComplete = useCallback(() => {
    updateProgress('complete_lesson', 1);
    updateProgress('complete_days', 1);
  }, [updateProgress]);

  // Record correct answer
  const recordCorrectAnswer = useCallback(() => {
    updateProgress('answer_questions', 1);
  }, [updateProgress]);

  // Record quiz score
  const recordQuizScore = useCallback((score: number) => {
    updateProgress('quiz_score', score);
  }, [updateProgress]);

  return {
    challenge: data?.challenge ?? null,
    progress: data?.progress ?? null,
    streakDays: data?.streakDays ?? 0,
    totalXP,
    recordLessonComplete,
    recordCorrectAnswer,
    recordQuizScore,
  };
}
