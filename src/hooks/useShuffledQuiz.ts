import { useMemo } from 'react';
import { QuizQuestion } from '@/data/lessons';

interface ShuffledQuestion {
  question: string;
  options: string[];
  correctAnswer: number; // Updated index after shuffling
  originalIndex: number;
}

// Fisher-Yates shuffle algorithm
function shuffleArray<T>(array: T[], seed?: number): T[] {
  const shuffled = [...array];
  let currentIndex = shuffled.length;
  
  // Use seeded random for consistent results per session
  const random = seed !== undefined 
    ? () => {
        seed = (seed * 9301 + 49297) % 233280;
        return seed / 233280;
      }
    : Math.random;

  while (currentIndex > 0) {
    const randomIndex = Math.floor(random() * currentIndex);
    currentIndex--;
    [shuffled[currentIndex], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[currentIndex]];
  }

  return shuffled;
}

function shuffleQuestionOptions(question: QuizQuestion, seed: number): ShuffledQuestion {
  // Create array of option indices
  const optionIndices = question.options.map((_, i) => i);
  const shuffledIndices = shuffleArray(optionIndices, seed);
  
  // Shuffle options
  const shuffledOptions = shuffledIndices.map(i => question.options[i]);
  
  // Find new correct answer index
  const newCorrectAnswer = shuffledIndices.indexOf(question.correctAnswer);

  return {
    question: question.question,
    options: shuffledOptions,
    correctAnswer: newCorrectAnswer,
    originalIndex: question.correctAnswer,
  };
}

export function useShuffledQuiz(
  questions: QuizQuestion[],
  sessionSeed: number
): ShuffledQuestion[] {
  return useMemo(() => {
    // Shuffle question order
    const questionIndices = questions.map((_, i) => i);
    const shuffledQuestionIndices = shuffleArray(questionIndices, sessionSeed);
    
    // Shuffle each question's options with unique seed
    return shuffledQuestionIndices.map((originalIdx, newIdx) => {
      const optionSeed = sessionSeed + originalIdx * 1000 + newIdx;
      return shuffleQuestionOptions(questions[originalIdx], optionSeed);
    });
  }, [questions, sessionSeed]);
}

export type { ShuffledQuestion };
