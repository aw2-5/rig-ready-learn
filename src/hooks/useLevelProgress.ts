import { useMemo, useCallback } from 'react';
import { useProgress } from './useProgress';
import { lessons } from '@/data/lessons';
import { lessonsYear2 } from '@/data/lessonsYear2';
import { lessonsYear3 } from '@/data/lessonsYear3';

// Static lesson IDs to avoid recreating on every render
const level1LessonIds = lessons.map(l => l.id);
const level2LessonIds = lessonsYear2.map(l => l.id);
const level3LessonIds = lessonsYear3.map(l => l.id);

export function useLevelProgress() {
  const { progress } = useProgress();

  // Calculate progress directly from progress object to avoid dependency issues
  const level1Progress = useMemo(() => {
    let totalCompleted = 0;
    const totalDays = level1LessonIds.length * 7;
    
    level1LessonIds.forEach(lessonId => {
      const lessonProgress = progress[lessonId];
      if (lessonProgress) {
        totalCompleted += Object.values(lessonProgress).filter(d => d.completed).length;
      }
    });
    
    return totalDays > 0 ? Math.round((totalCompleted / totalDays) * 100) : 0;
  }, [progress]);

  const level2Progress = useMemo(() => {
    let totalCompleted = 0;
    const totalDays = level2LessonIds.length * 7;
    
    level2LessonIds.forEach(lessonId => {
      const lessonProgress = progress[lessonId];
      if (lessonProgress) {
        totalCompleted += Object.values(lessonProgress).filter(d => d.completed).length;
      }
    });
    
    return totalDays > 0 ? Math.round((totalCompleted / totalDays) * 100) : 0;
  }, [progress]);

  const level3Progress = useMemo(() => {
    let totalCompleted = 0;
    const totalDays = level3LessonIds.length * 7;
    
    level3LessonIds.forEach(lessonId => {
      const lessonProgress = progress[lessonId];
      if (lessonProgress) {
        totalCompleted += Object.values(lessonProgress).filter(d => d.completed).length;
      }
    });
    
    return totalDays > 0 ? Math.round((totalCompleted / totalDays) * 100) : 0;
  }, [progress]);

  const isLevel1Complete = level1Progress === 100;
  const isLevel2Unlocked = level1Progress >= 80;
  const isLevel2Complete = level2Progress === 100;
  const isLevel3Unlocked = level2Progress >= 80;
  const isLevel3Complete = level3Progress === 100;

  // Calculate average quiz score for a level
  const level1AverageScore = useMemo(() => {
    const scores: number[] = [];
    level1LessonIds.forEach(lessonId => {
      const score = progress[lessonId]?.[6]?.score;
      if (score !== undefined) {
        scores.push(score);
      }
    });
    if (scores.length === 0) return undefined;
    return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
  }, [progress]);

  const level2AverageScore = useMemo(() => {
    const scores: number[] = [];
    level2LessonIds.forEach(lessonId => {
      const score = progress[lessonId]?.[6]?.score;
      if (score !== undefined) {
        scores.push(score);
      }
    });
    if (scores.length === 0) return undefined;
    return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
  }, [progress]);

  const level3AverageScore = useMemo(() => {
    const scores: number[] = [];
    level3LessonIds.forEach(lessonId => {
      const score = progress[lessonId]?.[6]?.score;
      if (score !== undefined) {
        scores.push(score);
      }
    });
    if (scores.length === 0) return undefined;
    return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
  }, [progress]);

  // Check if a specific lesson is complete (all 7 days done)
  const isLessonComplete = useCallback((lessonId: string): boolean => {
    const lessonProgress = progress[lessonId];
    if (!lessonProgress) return false;
    const completedDays = Object.values(lessonProgress).filter(d => d.completed).length;
    return Math.round((completedDays / 7) * 100) === 100;
  }, [progress]);

  // Get next lesson to work on in a level
  const getNextIncompleteLessonIndex = useCallback((lessonIds: string[]): number => {
    for (let i = 0; i < lessonIds.length; i++) {
      const lessonProgress = progress[lessonIds[i]];
      if (!lessonProgress) return i;
      const completedDays = Object.values(lessonProgress).filter(d => d.completed).length;
      if (Math.round((completedDays / 7) * 100) !== 100) {
        return i;
      }
    }
    return -1;
  }, [progress]);

  return {
    level1Progress,
    level2Progress,
    level3Progress,
    isLevel1Complete,
    isLevel2Unlocked,
    isLevel2Complete,
    isLevel3Unlocked,
    isLevel3Complete,
    level1AverageScore,
    level2AverageScore,
    level3AverageScore,
    isLessonComplete,
    getNextIncompleteLessonIndex,
    level1LessonIds,
    level2LessonIds,
    level3LessonIds,
  };
}
