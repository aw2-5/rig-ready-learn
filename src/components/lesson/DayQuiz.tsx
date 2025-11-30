import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useLanguage } from '@/contexts/LanguageContext';
import { QuizQuestion } from '@/data/lessons';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle, 
  XCircle, 
  RotateCcw,
  Trophy
} from 'lucide-react';

interface DayQuizProps {
  quiz: {
    en: QuizQuestion[];
    ar: QuizQuestion[];
  };
  onComplete: (score: number) => void;
  isComplete: boolean;
  previousScore?: number;
}

export function DayQuiz({ quiz, onComplete, isComplete, previousScore }: DayQuizProps) {
  const { language, t, isRTL } = useLanguage();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const questions = quiz[language];

  const handleAnswer = (index: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = index;
    setAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
      const score = calculateScore();
      onComplete(score);
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
  };

  const calculateScore = () => {
    return answers.reduce((score, answer, index) => {
      return score + (answer === questions[index].correctAnswer ? 1 : 0);
    }, 0);
  };

  if (showResults || isComplete) {
    const score = showResults ? calculateScore() : (previousScore || 0);
    const percentage = (score / questions.length) * 100;
    const passed = percentage >= 60;

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
          <h3 className="text-2xl font-bold text-foreground mb-2">{t('quizComplete')}</h3>
          <p className="text-4xl font-bold text-gradient mb-2">
            {score}/{questions.length}
          </p>
          <p className="text-lg text-muted-foreground mb-4">
            {percentage.toFixed(0)}%
          </p>
          <p className="text-muted-foreground mb-6">
            {passed ? '🎉 ' + t('greatJob') : t('keepPracticing')}
          </p>
          {!passed && (
            <Button variant="secondary" onClick={resetQuiz}>
              <RotateCcw className="w-4 h-4" />
              {t('tryAgain')}
            </Button>
          )}
        </CardContent>
      </Card>
    );
  }

  const currentQ = questions[currentQuestion];

  return (
    <div className="space-y-4 animate-fade-in">
      <Card variant="gradient">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-foreground">
              {t('weeklyQuiz')}
            </span>
            <span className="text-sm text-muted-foreground">
              {currentQuestion + 1}/{questions.length}
            </span>
          </div>
          <Progress 
            value={((currentQuestion + 1) / questions.length) * 100} 
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
          {currentQuestion === questions.length - 1 ? t('finish') : t('next')}
          {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
        </Button>
      </div>
    </div>
  );
}
