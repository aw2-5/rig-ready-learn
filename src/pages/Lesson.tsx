import { useState, useEffect, lazy, Suspense } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { lessons } from '@/data/lessons';
import { lessonsYear2 } from '@/data/lessonsYear2';
import { lessonsYear3 } from '@/data/lessonsYear3';
import { weeklyContent } from '@/data/weeklyContent';
import { weeklyContentYear2 } from '@/data/weeklyContentYear2';
import { weeklyContentYear3 } from '@/data/weeklyContentYear3';
import { useProgress } from '@/hooks/useProgress';
import { useLevelProgress } from '@/hooks/useLevelProgress';
import { useDailyStreak } from '@/hooks/useDailyStreak';
import { useDailyChallenge } from '@/hooks/useDailyChallenge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { DaySelector } from '@/components/lesson/DaySelector';
import { WeeklyProgress } from '@/components/lesson/WeeklyProgress';
import { DayContent } from '@/components/lesson/DayContent';
import { DayQuiz } from '@/components/lesson/DayQuiz';
import { DayProject } from '@/components/lesson/DayProject';
import { LessonCompletionCard } from '@/components/LessonCompletionCard';
import { LevelCompletionModal } from '@/components/LevelCompletionModal';
import { ThemeToggle } from '@/components/ThemeToggle';
import { ArrowLeft, ArrowRight, Globe, Home, BookOpen, Bot } from 'lucide-react';

// Lazy load AI Assistant
const AIAssistant = lazy(() => import('@/components/AIAssistant').then(m => ({ default: m.AIAssistant })));

export default function Lesson() {
  const {
    id
  } = useParams<{
    id: string;
  }>();
  const navigate = useNavigate();
  const {
    language,
    setLanguage,
    t,
    isRTL
  } = useLanguage();
  const {
    markDayComplete,
    isDayComplete,
    getDayScore,
    getWeekProgress
  } = useProgress();
  const {
    isLevel1Complete,
    level1AverageScore,
    isLessonComplete,
    level1LessonIds
  } = useLevelProgress();
  
  // Streak and challenge hooks
  const { recordStudy } = useDailyStreak();
  const { recordLessonComplete, recordQuizScore, recordCorrectAnswer } = useDailyChallenge();
  
  const [selectedDay, setSelectedDay] = useState(1);
  const [showLevelCompleteModal, setShowLevelCompleteModal] = useState(false);

  // Find lesson in all levels
  const allLessons = [...lessons, ...lessonsYear2, ...lessonsYear3];
  const allWeeklyContent = [...weeklyContent, ...weeklyContentYear2, ...weeklyContentYear3];
  const lesson = allLessons.find(l => l.id === id);
  const weeklyLesson = allWeeklyContent.find(w => w.lessonId === id);

  // Determine which level this lesson belongs to
  const isLevel1Lesson = lessons.some(l => l.id === id);
  const isLevel2Lesson = lessonsYear2.some(l => l.id === id);
  const isLevel3Lesson = lessonsYear3.some(l => l.id === id);
  const currentLevel = isLevel1Lesson ? 1 : isLevel2Lesson ? 2 : 3;
  const currentLevelLessons = isLevel1Lesson ? lessons : isLevel2Lesson ? lessonsYear2 : lessonsYear3;
  const currentLessonIndex = currentLevelLessons.findIndex(l => l.id === id);
  const nextLesson = currentLevelLessons[currentLessonIndex + 1];
  const isLastLessonInLevel = currentLessonIndex === currentLevelLessons.length - 1;

  // Save current level to localStorage so Home page can restore it
  useEffect(() => {
    localStorage.setItem('petrolearn-selected-level', String(currentLevel));
  }, [currentLevel]);
  useEffect(() => {
    if (id) {
      const firstIncomplete = [1, 2, 3, 4, 5, 6, 7].find(day => !isDayComplete(id, day));
      if (firstIncomplete) {
        setSelectedDay(firstIncomplete);
      }
    }
  }, [id]);
  if (!lesson || !weeklyLesson) {
    return <div className="min-h-screen bg-background flex items-center justify-center">
        <Card variant="default" className="max-w-md mx-4">
          <CardContent className="p-6 text-center">
            <h2 className="text-xl font-bold text-foreground mb-4">
              {language === 'ar' ? 'الدرس غير موجود' : 'Lesson not found'}
            </h2>
            <Button onClick={() => navigate('/home')}>
              <Home className="w-4 h-4" />
              {t('backToHome')}
            </Button>
          </CardContent>
        </Card>
      </div>;
  }
  const content = lesson.content[language];
  const currentDayContent = weeklyLesson.days.find(d => d.day === selectedDay);
  const handleCompleteDay = () => {
    if (id) {
      markDayComplete(id, selectedDay);
      recordStudy(); // Record streak
      recordLessonComplete(); // Record challenge progress
      if (selectedDay < 7) {
        setSelectedDay(selectedDay + 1);
      }
    }
  };
  const handleCompleteQuiz = (score: number) => {
    if (id) {
      markDayComplete(id, selectedDay, score);
      recordStudy(); // Record streak
      recordLessonComplete(); // Record challenge progress
      recordQuizScore(score); // Record quiz score for challenges
      if (selectedDay < 7) {
        setSelectedDay(selectedDay + 1);
      }
    }
  };
  const handleCompleteProject = () => {
    if (id) {
      markDayComplete(id, 7);
      recordStudy(); // Record streak
      recordLessonComplete(); // Record challenge progress
      // Check if this completes Level 1
      if (isLevel1Lesson && isLastLessonInLevel) {
        // Small delay to let state update
        setTimeout(() => {
          if (isLevel1Complete) {
            setShowLevelCompleteModal(true);
          }
        }, 500);
      }
    }
  };
  const handleNextLesson = () => {
    if (isLastLessonInLevel) {
      navigate('/home');
    } else if (nextLesson) {
      navigate(`/lesson/${nextLesson.id}`);
    }
  };
  const handleGoToLevel2 = () => {
    setShowLevelCompleteModal(false);
    navigate('/home');
  };

  // Check if current lesson is fully complete
  const isCurrentLessonComplete = id ? isLessonComplete(id) : false;
  const renderDayContent = () => {
    if (!currentDayContent || !id) return null;

    const dayComplete = isDayComplete(id, selectedDay);

    if (currentDayContent.type === 'quiz' && currentDayContent.quiz) {
      return (
        <DayQuiz
          key={`quiz-${id}-${selectedDay}`}
          quiz={currentDayContent.quiz}
          onComplete={handleCompleteQuiz}
          isComplete={dayComplete}
          previousScore={getDayScore(id, selectedDay)}
        />
      );
    }

    if (currentDayContent.type === 'project') {
      return <DayProject dayContent={currentDayContent} onComplete={handleCompleteProject} isComplete={dayComplete} />;
    }

    return <DayContent dayContent={currentDayContent} onComplete={handleCompleteDay} isComplete={dayComplete} />;
  };
  return <div className="min-h-screen bg-background" dir={isRTL ? 'rtl' : 'ltr'}>
      <header className="sticky top-0 z-50 glass-header">
        <div className="container max-w-lg mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="icon" onClick={() => navigate('/home')}>
              {isRTL ? <ArrowRight className="w-5 h-5" /> : <ArrowLeft className="w-5 h-5" />}
            </Button>
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-accent" />
              <h1 className="font-bold text-foreground truncate max-w-[180px]">
                {content.title}
              </h1>
            </div>
            <div className="flex items-center gap-1">
              <ThemeToggle />
              <Button variant="ghost" size="sm" onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}>
                <Globe className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container max-w-lg mx-auto px-4 py-4">
        <WeeklyProgress lessonId={id!} getWeekProgress={getWeekProgress} />
      </div>

      <div className="container max-w-lg mx-auto px-4 pb-4">
        <DaySelector currentDay={selectedDay} onDaySelect={setSelectedDay} isDayComplete={day => isDayComplete(id!, day)} getDayScore={day => getDayScore(id!, day)} />
      </div>

      <main className="container max-w-lg mx-auto px-4 pb-8 text-destructive">
        {renderDayContent()}
        
        {/* Show completion card when lesson is done */}
        {isCurrentLessonComplete && <LessonCompletionCard onNextLesson={handleNextLesson} nextLessonTitle={nextLesson?.content[language].title} isLastLesson={isLastLessonInLevel} />}
      </main>

      {/* Level Completion Modal */}
      <LevelCompletionModal isOpen={showLevelCompleteModal} onClose={() => setShowLevelCompleteModal(false)} level={1} averageScore={level1AverageScore} onGoToNextLevel={handleGoToLevel2} />

      {/* AI Assistant */}
      <Suspense fallback={null}>
        <AIAssistant />
      </Suspense>
    </div>;
}