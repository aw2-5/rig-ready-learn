import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronRight, CheckCircle, Star } from 'lucide-react';

interface LessonCompletionCardProps {
  onNextLesson: () => void;
  nextLessonTitle?: string;
  isLastLesson?: boolean;
}

export function LessonCompletionCard({
  onNextLesson,
  nextLessonTitle,
  isLastLesson,
}: LessonCompletionCardProps) {
  const { language, isRTL } = useLanguage();

  const texts = {
    ar: {
      greatJob: '🎉 أحسنت!',
      completed: 'أكملت هذا الدرس بنجاح',
      nextLesson: 'الدرس التالي',
      goToNext: 'انتقل للدرس التالي',
      levelComplete: 'أكملت جميع دروس هذا المستوى!',
      backToHome: 'العودة للرئيسية',
    },
    en: {
      greatJob: '🎉 Great Job!',
      completed: 'You have completed this lesson',
      nextLesson: 'Next Lesson',
      goToNext: 'Go to Next Lesson',
      levelComplete: 'You completed all lessons in this level!',
      backToHome: 'Back to Home',
    },
  };

  const t = texts[language];

  return (
    <Card variant="accent" className="mt-6 animate-fade-in">
      <CardContent className="p-6 text-center">
        <div className="flex justify-center mb-3">
          <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
            {isLastLesson ? (
              <Star className="w-8 h-8 text-accent" />
            ) : (
              <CheckCircle className="w-8 h-8 text-accent" />
            )}
          </div>
        </div>
        
        <h3 className="text-lg font-bold text-foreground mb-1">
          {t.greatJob}
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          {isLastLesson ? t.levelComplete : t.completed}
        </p>

        {!isLastLesson && nextLessonTitle && (
          <div className="bg-secondary/50 rounded-lg p-3 mb-4">
            <p className="text-xs text-muted-foreground">{t.nextLesson}</p>
            <p className="font-medium text-foreground truncate">{nextLessonTitle}</p>
          </div>
        )}

        <Button onClick={onNextLesson} className="w-full gap-2">
          {isLastLesson ? t.backToHome : t.goToNext}
          <ChevronRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
        </Button>
      </CardContent>
    </Card>
  );
}
