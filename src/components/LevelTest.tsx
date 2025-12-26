import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useLanguage } from '@/contexts/LanguageContext';
import { useProgress } from '@/hooks/useProgress';
import { lessons, QuizQuestion } from '@/data/lessons';
import { lessonsYear2 } from '@/data/lessonsYear2';
import { lessonsYear3 } from '@/data/lessonsYear3';
import { useShuffledQuiz } from '@/hooks/useShuffledQuiz';
import {
  ArrowLeft,
  ArrowRight,
  XCircle,
  RotateCcw,
  Trophy,
  GraduationCap,
  AlertTriangle,
} from 'lucide-react';

interface LevelTestProps {
  level: 1 | 2 | 3;
  onComplete: (passed: boolean, score: number) => void;
  onCancel: () => void;
}

export function LevelTest({ level, onComplete, onCancel }: LevelTestProps) {
  const { language, t, isRTL } = useLanguage();
  const navigate = useNavigate();
  const { markDayComplete } = useProgress();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  // Generate session seed once per test instance
  const [sessionSeed] = useState(() => Math.floor(Math.random() * 100000));

  // Get all quiz questions from all lessons in the level
  const levelLessons = level === 1 ? lessons : level === 2 ? lessonsYear2 : lessonsYear3;

  // Collect questions from all lessons in the level
  const allQuestions: QuizQuestion[] = useMemo(() => {
    const questions: QuizQuestion[] = [];
    levelLessons.forEach(lesson => {
      if (lesson.quiz && lesson.quiz[language]) {
        questions.push(...lesson.quiz[language]);
      }
    });
    return questions;
  }, [levelLessons, language]);

  // Select a subset of questions (30 questions max or all if less)
  const selectedQuestions = useMemo(() => {
    const numQuestions = Math.min(30, allQuestions.length);
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, numQuestions);
  }, [allQuestions]);

  // Use shuffled questions
  const shuffledQuestions = useShuffledQuiz(selectedQuestions, sessionSeed);

  const passingScore = 80; // Need 80% to pass

  const handleAnswer = (index: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = index;
    setAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion < shuffledQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
      const score = calculateScore();
      const percentage = (score / shuffledQuestions.length) * 100;
      const passed = percentage >= passingScore;
      
      if (passed) {
        // Mark all days in all lessons as complete
        levelLessons.forEach(lesson => {
          for (let day = 1; day <= 7; day++) {
            markDayComplete(lesson.id, day, day === 6 ? Math.round(percentage) : undefined);
          }
        });
      }
      
      onComplete(passed, Math.round(percentage));
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
    setHasStarted(false);
  };

  const calculateScore = () => {
    return answers.reduce((score, answer, index) => {
      return score + (answer === shuffledQuestions[index]?.correctAnswer ? 1 : 0);
    }, 0);
  };

  const getLevelName = () => {
    if (level === 1) return language === 'ar' ? 'المستوى الأول' : 'Level 1';
    if (level === 2) return language === 'ar' ? 'المستوى الثاني' : 'Level 2';
    return language === 'ar' ? 'المستوى الثالث' : 'Level 3';
  };

  // Start screen
  if (!hasStarted) {
    return (
      <Card variant="default" className="animate-scale-in">
        <CardContent className="p-6 text-center">
          <div className="w-20 h-20 mx-auto rounded-full bg-accent/20 flex items-center justify-center mb-4">
            <GraduationCap className="w-10 h-10 text-accent" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-2">
            {language === 'ar' ? 'اختبار تخطي' : 'Skip Test'} {getLevelName()}
          </h3>
          <p className="text-muted-foreground mb-6">
            {language === 'ar' 
              ? `هذا الاختبار يتكون من ${shuffledQuestions.length} سؤال من جميع دروس ${getLevelName()}. يجب الحصول على ${passingScore}% للنجاح وتخطي المستوى.`
              : `This test consists of ${shuffledQuestions.length} questions from all ${getLevelName()} lessons. You need ${passingScore}% to pass and skip the level.`
            }
          </p>
          
          <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 mb-6">
            <div className="flex items-center gap-2 text-destructive mb-2">
              <AlertTriangle className="w-5 h-5" />
              <span className="font-semibold">
                {language === 'ar' ? 'تنبيه مهم' : 'Important Notice'}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              {language === 'ar'
                ? 'هذا الاختبار للطلاب الذين لديهم معرفة مسبقة بالمواد. إذا لم تكن متأكداً من معلوماتك، ننصحك بدراسة الدروس أولاً.'
                : 'This test is for students who already have prior knowledge of the material. If you are unsure, we recommend studying the lessons first.'
              }
            </p>
          </div>

          <div className="flex gap-3">
            <Button variant="secondary" className="flex-1" onClick={onCancel}>
              {language === 'ar' ? 'إلغاء' : 'Cancel'}
            </Button>
            <Button variant="accent" className="flex-1" onClick={() => setHasStarted(true)}>
              {language === 'ar' ? 'بدء الاختبار' : 'Start Test'}
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Results screen
  if (showResults) {
    const score = calculateScore();
    const percentage = (score / shuffledQuestions.length) * 100;
    const passed = percentage >= passingScore;

    return (
      <Card variant="default" className="animate-scale-in">
        <CardContent className="p-6 text-center">
          <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4 ${
            passed ? 'bg-green-500/20' : 'bg-destructive/20'
          }`}>
            {passed ? (
              <Trophy className="w-10 h-10 text-green-500" />
            ) : (
              <XCircle className="w-10 h-10 text-destructive" />
            )}
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-2">
            {passed 
              ? (language === 'ar' ? 'مبروك! نجحت في الاختبار' : 'Congratulations! You passed!')
              : (language === 'ar' ? 'للأسف، لم تنجح' : 'Sorry, you did not pass')
            }
          </h3>
          <p className="text-4xl font-bold text-gradient mb-2">
            {score}/{shuffledQuestions.length}
          </p>
          <p className="text-lg text-muted-foreground mb-4">
            {percentage.toFixed(0)}%
          </p>
          <p className="text-muted-foreground mb-6">
            {passed 
              ? (language === 'ar' 
                  ? `🎉 تم تخطي ${getLevelName()} بنجاح!` 
                  : `🎉 ${getLevelName()} skipped successfully!`
                )
              : (language === 'ar' 
                  ? `تحتاج ${passingScore}% للنجاح. ننصحك بدراسة الدروس والمحاولة مرة أخرى.`
                  : `You need ${passingScore}% to pass. We recommend studying the lessons and trying again.`
                )
            }
          </p>
          <div className="flex gap-3">
            {!passed && (
              <Button variant="secondary" className="flex-1" onClick={resetQuiz}>
                <RotateCcw className="w-4 h-4" />
                {t('tryAgain')}
              </Button>
            )}
            <Button 
              variant="accent" 
              className="flex-1" 
              onClick={() => navigate('/home')}
            >
              {t('backToHome')}
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Quiz screen
  const currentQ = shuffledQuestions[currentQuestion];

  if (!currentQ) {
    return (
      <Card variant="default">
        <CardContent className="p-6 text-center">
          <p className="text-muted-foreground">
            {language === 'ar' ? 'لا توجد أسئلة متاحة' : 'No questions available'}
          </p>
          <Button variant="secondary" onClick={onCancel} className="mt-4">
            {language === 'ar' ? 'العودة' : 'Go Back'}
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4 animate-fade-in">
      <Card variant="gradient">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-foreground">
              {language === 'ar' ? 'اختبار تخطي' : 'Skip Test'} {getLevelName()}
            </span>
            <span className="text-sm text-muted-foreground">
              {currentQuestion + 1}/{shuffledQuestions.length}
            </span>
          </div>
          <Progress 
            value={((currentQuestion + 1) / shuffledQuestions.length) * 100} 
            className="h-2"
          />
        </CardContent>
      </Card>

      <Card variant="default">
        <CardContent className="p-4">
          <p className="text-xs text-muted-foreground mb-2">
            {t('question')} {currentQuestion + 1}
          </p>
          <h4 className="text-lg font-semibold text-foreground mb-4">
            {currentQ.question}
          </h4>
          <div className="space-y-2">
            {currentQ.options.map((option, index) => (
              <Button
                key={index}
                variant={answers[currentQuestion] === index ? 'accent' : 'secondary'}
                className="w-full justify-start text-start h-auto py-3 px-4"
                onClick={() => handleAnswer(index)}
              >
                <span className="w-6 h-6 rounded-full bg-background/50 flex items-center justify-center text-sm font-medium mr-3">
                  {String.fromCharCode(65 + index)}
                </span>
                {option}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-3">
        <Button 
          variant="secondary" 
          className="flex-1"
          onClick={prevQuestion}
          disabled={currentQuestion === 0}
        >
          {isRTL ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
          {t('previous')}
        </Button>
        <Button 
          variant="accent" 
          className="flex-1"
          onClick={nextQuestion}
          disabled={answers[currentQuestion] === undefined}
        >
          {currentQuestion === shuffledQuestions.length - 1 ? t('finish') : t('next')}
          {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
        </Button>
      </div>
    </div>
  );
}
