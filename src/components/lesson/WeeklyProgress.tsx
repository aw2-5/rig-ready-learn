import { Progress } from '@/components/ui/progress';
import { useLanguage } from '@/contexts/LanguageContext';
import { Trophy } from 'lucide-react';

interface WeeklyProgressProps {
  lessonId: string;
  getWeekProgress: (lessonId: string) => number;
}

export function WeeklyProgress({ lessonId, getWeekProgress }: WeeklyProgressProps) {
  const { t } = useLanguage();
  const progress = getWeekProgress(lessonId);

  return (
    <div className="bg-card/50 rounded-xl p-4 border border-border">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Trophy className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium text-foreground">{t('weekProgress')}</span>
        </div>
        <span className="text-sm text-muted-foreground">{progress}%</span>
      </div>
      <Progress value={progress} className="h-2" />
      <p className="text-xs text-muted-foreground mt-2">
        {progress === 100 ? t('weekComplete') : t('keepLearning')}
      </p>
    </div>
  );
}
