import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { lessons } from '@/data/lessons';
import { weeklyContent } from '@/data/weeklyContent';
import { useProgress } from '@/hooks/useProgress';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { DaySelector } from '@/components/lesson/DaySelector';
import { WeeklyProgress } from '@/components/lesson/WeeklyProgress';
import { DayContent } from '@/components/lesson/DayContent';
import { DayQuiz } from '@/components/lesson/DayQuiz';
import { DayProject } from '@/components/lesson/DayProject';
import { ArrowLeft, ArrowRight, Globe, Home, BookOpen } from 'lucide-react';

export default function Lesson() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { language, setLanguage, t, isRTL } = useLanguage();
  const { markDayComplete, isDayComplete, getDayScore, getWeekProgress } = useProgress();
  
  const [selectedDay, setSelectedDay] = useState(1);

  const lesson = lessons.find(l => l.id === id);
  const weeklyLesson = weeklyContent.find(w => w.lessonId === id);

  useEffect(() => {
    if (id) {
      const firstIncomplete = [1, 2, 3, 4, 5, 6, 7].find(
        day => !isDayComplete(id, day)
      );
      if (firstIncomplete) {
        setSelectedDay(firstIncomplete);
      }
    }
  }, [id]);

  if (!lesson || !weeklyLesson) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
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
      </div>
    );
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
      markDayComplete(id, 6, score);
      setSelectedDay(7);
    }
  };

  const handleCompleteProject = () => {
    if (id) {
      markDayComplete(id, 7);
    }
  };

  const renderDayContent = () => {
    if (!currentDayContent || !id) return null;

    const dayComplete = isDayComplete(id, selectedDay);

    if (currentDayContent.type === 'quiz' && currentDayContent.quiz) {
      return (
        <DayQuiz
          quiz={currentDayContent.quiz}
          onComplete={handleCompleteQuiz}
          isComplete={dayComplete}
          previousScore={getDayScore(id, 6)}
        />
      );
    }

    if (currentDayContent.type === 'project') {
      return (
        <DayProject
          dayContent={currentDayContent}
          onComplete={handleCompleteProject}
          isComplete={dayComplete}
        />
      );
    }

    return (
      <DayContent
        dayContent={currentDayContent}
        onComplete={handleCompleteDay}
        isComplete={dayComplete}
        lessonId={id}
      />
    );
  };

  return (
    <div className="min-h-screen bg-background" dir={isRTL ? 'rtl' : 'ltr'}>
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
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
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
            >
              <Globe className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="container max-w-lg mx-auto px-4 py-4">
        <WeeklyProgress
          lessonId={id!}
          getWeekProgress={getWeekProgress}
        />
      </div>

      <div className="container max-w-lg mx-auto px-4 pb-4">
        <DaySelector
          currentDay={selectedDay}
          onDaySelect={setSelectedDay}
          isDayComplete={(day) => isDayComplete(id!, day)}
          getDayScore={(day) => getDayScore(id!, day)}
        />
      </div>

      <main className="container max-w-lg mx-auto px-4 pb-8">
        {renderDayContent()}
      </main>
    </div>
  );
}