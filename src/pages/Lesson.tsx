import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { lessons } from '@/data/lessons';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { 
  ArrowLeft, 
  ArrowRight, 
  Globe, 
  BookOpen, 
  Lightbulb, 
  FileText,
  HelpCircle,
  CheckCircle,
  XCircle,
  Home,
  RotateCcw
} from 'lucide-react';

type Tab = 'definition' | 'explanation' | 'summary' | 'quiz';

export default function Lesson() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { language, setLanguage, t, isRTL } = useLanguage();
  const [activeTab, setActiveTab] = useState<Tab>('definition');
  const [quizState, setQuizState] = useState({
    currentQuestion: 0,
    answers: [] as number[],
    showResults: false,
  });

  const lesson = lessons.find(l => l.id === id);

  if (!lesson) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card variant="default" className="max-w-md mx-4">
          <CardContent className="p-6 text-center">
            <h2 className="text-xl font-bold text-foreground mb-4">Lesson not found</h2>
            <Button onClick={() => navigate('/home')}>
              <Home className="w-4 h-4" />
              {t('backToHome')}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const content = lesson.content[language];
  const quiz = lesson.quiz[language];

  const tabs: { key: Tab; icon: React.ReactNode; label: string }[] = [
    { key: 'definition', icon: <BookOpen className="w-4 h-4" />, label: t('definition') },
    { key: 'explanation', icon: <Lightbulb className="w-4 h-4" />, label: t('explanation') },
    { key: 'summary', icon: <FileText className="w-4 h-4" />, label: t('summary') },
    { key: 'quiz', icon: <HelpCircle className="w-4 h-4" />, label: t('quiz') },
  ];

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...quizState.answers];
    newAnswers[quizState.currentQuestion] = answerIndex;
    setQuizState({ ...quizState, answers: newAnswers });
  };

  const nextQuestion = () => {
    if (quizState.currentQuestion < quiz.length - 1) {
      setQuizState({ ...quizState, currentQuestion: quizState.currentQuestion + 1 });
    } else {
      setQuizState({ ...quizState, showResults: true });
    }
  };

  const prevQuestion = () => {
    if (quizState.currentQuestion > 0) {
      setQuizState({ ...quizState, currentQuestion: quizState.currentQuestion - 1 });
    }
  };

  const resetQuiz = () => {
    setQuizState({ currentQuestion: 0, answers: [], showResults: false });
  };

  const calculateScore = () => {
    return quizState.answers.reduce((score, answer, index) => {
      return score + (answer === quiz[index].correctAnswer ? 1 : 0);
    }, 0);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'definition':
        return (
          <Card variant="default" className="animate-fade-in">
            <CardContent className="p-6">
              <p className="text-foreground leading-relaxed text-lg">
                {content.definition}
              </p>
            </CardContent>
          </Card>
        );
      case 'explanation':
        return (
          <Card variant="default" className="animate-fade-in">
            <CardContent className="p-6">
              <p className="text-foreground leading-relaxed">
                {content.explanation}
              </p>
            </CardContent>
          </Card>
        );
      case 'summary':
        return (
          <Card variant="accent" className="animate-fade-in">
            <CardContent className="p-6">
              <p className="text-foreground leading-relaxed font-medium">
                {content.summary}
              </p>
            </CardContent>
          </Card>
        );
      case 'quiz':
        if (quizState.showResults) {
          const score = calculateScore();
          const percentage = (score / quiz.length) * 100;
          return (
            <Card variant="default" className="animate-scale-in">
              <CardContent className="p-6 text-center">
                <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4 ${
                  percentage >= 60 ? 'bg-green-500/20' : 'bg-destructive/20'
                }`}>
                  {percentage >= 60 ? (
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  ) : (
                    <XCircle className="w-10 h-10 text-destructive" />
                  )}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{t('score')}</h3>
                <p className="text-4xl font-bold text-gradient mb-4">
                  {score}/{quiz.length}
                </p>
                <p className="text-muted-foreground mb-6">
                  {percentage >= 60 ? '🎉 Great job!' : 'Keep practicing!'}
                </p>
                <div className="flex gap-3 justify-center">
                  <Button variant="secondary" onClick={resetQuiz}>
                    <RotateCcw className="w-4 h-4" />
                    {t('tryAgain')}
                  </Button>
                  <Button variant="accent" onClick={() => navigate('/home')}>
                    <Home className="w-4 h-4" />
                    {t('backToHome')}
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        }

        const currentQ = quiz[quizState.currentQuestion];
        return (
          <div className="space-y-4 animate-fade-in">
            <Card variant="default">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-muted-foreground">
                    {t('question')} {quizState.currentQuestion + 1} {t('of')} {quiz.length}
                  </span>
                  <Progress 
                    value={((quizState.currentQuestion + 1) / quiz.length) * 100} 
                    className="w-24 h-2"
                  />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  {currentQ.question}
                </h4>
                <div className="space-y-3">
                  {currentQ.options.map((option, index) => (
                    <Button
                      key={index}
                      variant={quizState.answers[quizState.currentQuestion] === index ? 'accent' : 'secondary'}
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
                disabled={quizState.currentQuestion === 0}
              >
                {isRTL ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
                {t('previous')}
              </Button>
              <Button 
                variant="accent" 
                className="flex-1"
                onClick={nextQuestion}
                disabled={quizState.answers[quizState.currentQuestion] === undefined}
              >
                {quizState.currentQuestion === quiz.length - 1 ? t('finish') : t('next')}
                {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </Button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
        <div className="container max-w-lg mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="icon" onClick={() => navigate('/home')}>
              {isRTL ? <ArrowRight className="w-5 h-5" /> : <ArrowLeft className="w-5 h-5" />}
            </Button>
            <h1 className="font-bold text-foreground truncate max-w-[200px]">
              {content.title}
            </h1>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
            >
              <Globe className="w-4 h-4 mr-1" />
              {t('switchLanguage')}
            </Button>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="sticky top-[73px] z-40 bg-background border-b border-border">
        <div className="container max-w-lg mx-auto px-4">
          <div className="flex overflow-x-auto scrollbar-hide -mx-4 px-4">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === tab.key
                    ? 'border-accent text-accent'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="container max-w-lg mx-auto px-4 py-6">
        {renderContent()}
      </main>
    </div>
  );
}
