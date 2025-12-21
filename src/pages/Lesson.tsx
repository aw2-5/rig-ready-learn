import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { lessons } from '@/data/lessons';
import { lessonsYear2 } from '@/data/lessonsYear2';
import { weeklyContent } from '@/data/weeklyContent';
import { weeklyContentYear2 } from '@/data/weeklyContentYear2';
import { useProgress } from '@/hooks/useProgress';
import { useLevelProgress } from '@/hooks/useLevelProgress';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { DaySelector } from '@/components/lesson/DaySelector';
import { WeeklyProgress } from '@/components/lesson/WeeklyProgress';
import { DayContent } from '@/components/lesson/DayContent';
import { DayQuiz } from '@/components/lesson/DayQuiz';
import { DayProject } from '@/components/lesson/DayProject';
import { LessonCompletionCard } from '@/components/LessonCompletionCard';
import { LevelCompletionModal } from '@/components/LevelCompletionModal';
import { ArrowLeft, ArrowRight, Globe, Home, BookOpen } from 'lucide-react';
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
  const [selectedDay, setSelectedDay] = useState(1);
  const [showLevelCompleteModal, setShowLevelCompleteModal] = useState(false);

  // Find lesson in both levels
  const allLessons = [...lessons, ...lessonsYear2];
  const allWeeklyContent = [...weeklyContent, ...weeklyContentYear2];
  const lesson = allLessons.find(l => l.id === id);
  const weeklyLesson = allWeeklyContent.find(w => w.lessonId === id);

  // Determine which level this lesson belongs to
  const isLevel1Lesson = lessons.some(l => l.id === id);
  const currentLevelLessons = isLevel1Lesson ? lessons : lessonsYear2;
  const currentLessonIndex = currentLevelLessons.findIndex(l => l.id === id);
  const nextLesson = currentLevelLessons[currentLessonIndex + 1];
  const isLastLessonInLevel = currentLessonIndex === currentLevelLessons.length - 1;
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
      if (selectedDay < 7) {
        setSelectedDay(selectedDay + 1);
      }
    }
  };
  const handleCompleteQuiz = (score: number) => {
    if (id) {
      markDayComplete(id, selectedDay, score);
      if (selectedDay < 7) {
        setSelectedDay(selectedDay + 1);
      }
    }
  };
  const handleCompleteProject = () => {
    if (id) {
      markDayComplete(id, 7);
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
            <Button variant="ghost" size="sm" onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}>
              <Globe className="w-4 h-4" />
            </Button>
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
    </div>;
}