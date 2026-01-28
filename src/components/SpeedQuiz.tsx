import { useState, useEffect, useCallback, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useDailyStreak } from '@/hooks/useDailyStreak';
import { useDailyChallenge } from '@/hooks/useDailyChallenge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Zap, Clock, Trophy, Flame, X, CheckCircle, XCircle } from 'lucide-react';
import { playCorrectSound, playWrongSound, playAchievementSound } from '@/lib/sounds';
import { correctAnswerConfetti, bigCelebration, speedBonusConfetti } from '@/lib/confetti';

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
}

interface SpeedQuizProps {
  isOpen: boolean;
  onClose: () => void;
  questions: QuizQuestion[];
  level: number;
}

const TIME_PER_QUESTION = 15; // seconds
const BASE_POINTS = 10;

export function SpeedQuiz({ isOpen, onClose, questions, level }: SpeedQuizProps) {
  const { language, isRTL } = useLanguage();
  const { recordStudy } = useDailyStreak();
  const { recordCorrectAnswer, recordQuizScore } = useDailyChallenge();
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TIME_PER_QUESTION);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [totalCorrect, setTotalCorrect] = useState(0);
  
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(0);

  const text = {
    en: {
      title: 'Speed Quiz',
      timeUp: 'Time Up!',
      correct: 'Correct!',
      incorrect: 'Incorrect!',
      next: 'Next',
      finish: 'Finish',
      score: 'Final Score',
      streak: 'Best Streak',
      correct_answers: 'Correct Answers',
      points: 'points',
      multiplier: 'Multiplier',
      playAgain: 'Play Again',
      close: 'Close',
      question: 'Question',
      of: 'of',
      fastBonus: 'Speed Bonus!',
    },
    ar: {
      title: 'اختبار السرعة',
      timeUp: 'انتهى الوقت!',
      correct: 'صحيح!',
      incorrect: 'خطأ!',
      next: 'التالي',
      finish: 'إنهاء',
      score: 'النتيجة النهائية',
      streak: 'أفضل سلسلة',
      correct_answers: 'الإجابات الصحيحة',
      points: 'نقطة',
      multiplier: 'المضاعف',
      playAgain: 'العب مرة أخرى',
      close: 'إغلاق',
      question: 'السؤال',
      of: 'من',
      fastBonus: 'مكافأة السرعة!',
    },
  };

  const t = text[language as 'en' | 'ar'] || text.en;

  // Reset state when opening
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
      setTimeLeft(TIME_PER_QUESTION);
      setScore(0);
      setStreak(0);
      setMultiplier(1);
      setSelectedAnswer(null);
      setShowResult(false);
      setIsCorrect(false);
      setIsFinished(false);
      setTotalCorrect(0);
      startTimeRef.current = Date.now();
    }
  }, [isOpen]);

  // Timer countdown
  useEffect(() => {
    if (!isOpen || showResult || isFinished) return;

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isOpen, showResult, isFinished, currentIndex]);

  const handleTimeUp = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setShowResult(true);
    setIsCorrect(false);
    setStreak(0);
    setMultiplier(1);
  }, []);

  const handleAnswer = useCallback((answerIndex: number) => {
    if (showResult || selectedAnswer !== null) return;

    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    const timeUsed = TIME_PER_QUESTION - timeLeft;
    const correct = answerIndex === questions[currentIndex].correctAnswer;
    
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    setIsCorrect(correct);

    if (correct) {
      // Play sound and show confetti
      playCorrectSound();
      
      // Speed bonus confetti for fast answers
      if (timeUsed <= 5) {
        speedBonusConfetti();
      } else {
        correctAnswerConfetti();
      }
      
      // Calculate points based on speed
      const speedBonus = Math.max(0, TIME_PER_QUESTION - timeUsed) * 2;
      const points = (BASE_POINTS + speedBonus) * multiplier;
      
      setScore((prev) => prev + Math.round(points));
      setStreak((prev) => prev + 1);
      setTotalCorrect((prev) => prev + 1);
      
      // Increase multiplier every 3 correct answers
      if ((streak + 1) % 3 === 0) {
        setMultiplier((prev) => Math.min(prev + 0.5, 3));
      }
      
      // Record for challenges
      recordCorrectAnswer();
    } else {
      playWrongSound();
      setStreak(0);
      setMultiplier(1);
    }
  }, [showResult, selectedAnswer, timeLeft, questions, currentIndex, multiplier, streak, recordCorrectAnswer]);

  const handleNext = useCallback(() => {
    if (currentIndex >= questions.length - 1) {
      // Quiz finished - celebration!
      setIsFinished(true);
      playAchievementSound();
      bigCelebration();
      recordStudy();
      
      // Calculate and record quiz score
      const finalScore = Math.round((totalCorrect / questions.length) * 100);
      recordQuizScore(finalScore);
    } else {
      setCurrentIndex((prev) => prev + 1);
      setTimeLeft(TIME_PER_QUESTION);
      setSelectedAnswer(null);
      setShowResult(false);
      setIsCorrect(false);
      startTimeRef.current = Date.now();
    }
  }, [currentIndex, questions.length, totalCorrect, recordStudy, recordQuizScore]);

  const handlePlayAgain = useCallback(() => {
    setCurrentIndex(0);
    setTimeLeft(TIME_PER_QUESTION);
    setScore(0);
    setStreak(0);
    setMultiplier(1);
    setSelectedAnswer(null);
    setShowResult(false);
    setIsCorrect(false);
    setIsFinished(false);
    setTotalCorrect(0);
    startTimeRef.current = Date.now();
  }, []);

  if (!isOpen || questions.length === 0) return null;

  const currentQuestion = questions[currentIndex];
  const timerPercent = (timeLeft / TIME_PER_QUESTION) * 100;
  const timerColor = timeLeft <= 5 ? 'bg-destructive' : timeLeft <= 10 ? 'bg-yellow-500' : 'bg-primary';

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg p-0 gap-0" dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-accent" />
            <span className="font-bold text-foreground">{t.title}</span>
            <span className="text-xs text-muted-foreground">
              {t.question} {currentIndex + 1} {t.of} {questions.length}
            </span>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </div>

        {/* Content */}
        {!isFinished ? (
          <div className="p-4 space-y-4">
            {/* Timer & Stats Bar */}
            <div className="flex items-center gap-4">
              {/* Timer */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className={`w-4 h-4 ${timeLeft <= 5 ? 'text-destructive animate-pulse' : 'text-muted-foreground'}`} />
                  <span className={`text-sm font-bold ${timeLeft <= 5 ? 'text-destructive' : 'text-foreground'}`}>
                    {timeLeft}s
                  </span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <div 
                    className={`h-full transition-all duration-1000 ${timerColor}`}
                    style={{ width: `${timerPercent}%` }}
                  />
                </div>
              </div>

              {/* Multiplier */}
              {multiplier > 1 && (
                <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-accent/20 animate-pulse">
                  <Flame className="w-3 h-3 text-accent" />
                  <span className="text-xs font-bold text-accent">×{multiplier}</span>
                </div>
              )}

              {/* Score */}
              <div className="text-right">
                <p className="text-xs text-muted-foreground">{t.points}</p>
                <p className="text-lg font-bold text-foreground">{score}</p>
              </div>
            </div>

            {/* Question */}
            <Card variant="default">
              <CardContent className="p-4">
                <p className="text-lg font-medium text-foreground leading-relaxed">
                  {currentQuestion.question}
                </p>
              </CardContent>
            </Card>

            {/* Options */}
            <div className="grid gap-2">
              {currentQuestion.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrectAnswer = index === currentQuestion.correctAnswer;
                
                let buttonClass = 'w-full justify-start text-left h-auto py-3 px-4';
                
                if (showResult) {
                  if (isCorrectAnswer) {
                    buttonClass += ' bg-green-500/20 border-green-500 text-green-700 dark:text-green-300';
                  } else if (isSelected && !isCorrectAnswer) {
                    buttonClass += ' bg-destructive/20 border-destructive text-destructive';
                  }
                }

                return (
                  <Button
                    key={index}
                    variant={isSelected && !showResult ? 'default' : 'outline'}
                    className={buttonClass}
                    onClick={() => handleAnswer(index)}
                    disabled={showResult}
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-xs font-bold">
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span>{option}</span>
                      {showResult && isCorrectAnswer && (
                        <CheckCircle className="w-4 h-4 text-green-500 ml-auto" />
                      )}
                      {showResult && isSelected && !isCorrectAnswer && (
                        <XCircle className="w-4 h-4 text-destructive ml-auto" />
                      )}
                    </span>
                  </Button>
                );
              })}
            </div>

            {/* Result Message */}
            {showResult && (
              <div className={`p-3 rounded-lg text-center ${
                isCorrect ? 'bg-green-500/20' : 'bg-destructive/20'
              }`}>
                <p className={`font-bold ${isCorrect ? 'text-green-600 dark:text-green-400' : 'text-destructive'}`}>
                  {isCorrect ? `✨ ${t.correct}` : `😔 ${t.incorrect}`}
                </p>
                {isCorrect && timeLeft > 10 && (
                  <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                    ⚡ {t.fastBonus}
                  </p>
                )}
              </div>
            )}

            {/* Next Button */}
            {showResult && (
              <Button onClick={handleNext} className="w-full">
                {currentIndex >= questions.length - 1 ? t.finish : t.next}
              </Button>
            )}
          </div>
        ) : (
          /* Finished Screen */
          <div className="p-6 text-center space-y-4">
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center">
              <Trophy className="w-10 h-10 text-white" />
            </div>
            
            <div>
              <p className="text-sm text-muted-foreground">{t.score}</p>
              <p className="text-4xl font-bold text-foreground">{score}</p>
              <p className="text-sm text-muted-foreground">{t.points}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card variant="gradient">
                <CardContent className="p-3 text-center">
                  <CheckCircle className="w-5 h-5 text-accent mx-auto mb-1" />
                  <p className="text-xs text-muted-foreground">{t.correct_answers}</p>
                  <p className="text-lg font-bold text-foreground">
                    {totalCorrect}/{questions.length}
                  </p>
                </CardContent>
              </Card>
              
              <Card variant="gradient">
                <CardContent className="p-3 text-center">
                  <Flame className="w-5 h-5 text-orange-500 mx-auto mb-1" />
                  <p className="text-xs text-muted-foreground">{t.streak}</p>
                  <p className="text-lg font-bold text-foreground">{streak}</p>
                </CardContent>
              </Card>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" onClick={onClose} className="flex-1">
                {t.close}
              </Button>
              <Button onClick={handlePlayAgain} className="flex-1 gap-2">
                <Zap className="w-4 h-4" />
                {t.playAgain}
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
