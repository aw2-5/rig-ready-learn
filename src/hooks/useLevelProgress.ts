import { useMemo } from 'react';
import { useProgress } from './useProgress';
import { lessons } from '@/data/lessons';
import { lessonsYear2 } from '@/data/lessonsYear2';

export function useLevelProgress() {
  const { getTotalProgress, getWeekProgress, getDayScore } = useProgress();

  const level1LessonIds = useMemo(() => lessons.map(l => l.id), []);
  const level2LessonIds = useMemo(() => lessonsYear2.map(l => l.id), []);

  const level1Progress = useMemo(() => 
    getTotalProgress(level1LessonIds), 
    [getTotalProgress, level1LessonIds]
  );

  const level2Progress = useMemo(() => 
    getTotalProgress(level2LessonIds), 
    [getTotalProgress, level2LessonIds]
  );

  const isLevel1Complete = level1Progress === 100;
  const isLevel2Unlocked = isLevel1Complete;
  const isLevel2Complete = level2Progress === 100;

  // Calculate average quiz score for a level
  const getAverageQuizScore = (lessonIds: string[]): number | undefined => {
    const scores: number[] = [];
    lessonIds.forEach(lessonId => {
      const score = getDayScore(lessonId, 6); // Day 6 is quiz day
      if (score !== undefined) {
        scores.push(score);
      }
    });
    if (scores.length === 0) return undefined;
    return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
  };

  const level1AverageScore = useMemo(() => 
    getAverageQuizScore(level1LessonIds), 
    [level1LessonIds, getDayScore]
  );

  const level2AverageScore = useMemo(() => 
    getAverageQuizScore(level2LessonIds), 
    [level2LessonIds, getDayScore]
  );

  // Check if a specific lesson is complete (all 7 days done)
  const isLessonComplete = (lessonId: string): boolean => {
    return getWeekProgress(lessonId) === 100;
  };

  // Get next lesson to work on in a level
  const getNextIncompleteLessonIndex = (lessonIds: string[]): number => {
    for (let i = 0; i < lessonIds.length; i++) {
      if (!isLessonComplete(lessonIds[i])) {
        return i;
      }
    }
    return -1; // All complete
  };

  return {
    level1Progress,
    level2Progress,
    isLevel1Complete,
    isLevel2Unlocked,
    isLevel2Complete,
    level1AverageScore,
    level2AverageScore,
    isLessonComplete,
    getNextIncompleteLessonIndex,
    level1LessonIds,
    level2LessonIds,
  };
}
