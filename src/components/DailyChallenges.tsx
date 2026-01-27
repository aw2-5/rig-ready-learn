import { useDailyChallenge } from '@/hooks/useDailyChallenge';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Target, CheckCircle, Zap, Trophy } from 'lucide-react';

export function DailyChallenges() {
  const { language } = useLanguage();
  const { challenge, progress, streakDays, totalXP } = useDailyChallenge();

  const text = {
    en: {
      title: "Today's Challenge",
      completed: 'Challenge Completed!',
      xp: 'XP',
      totalXP: 'Total XP',
      streak: 'Challenge Streak',
      days: 'days',
      reward: 'Reward',
    },
    ar: {
      title: 'تحدي اليوم',
      completed: 'اكتمل التحدي!',
      xp: 'نقطة',
      totalXP: 'مجموع النقاط',
      streak: 'سلسلة التحديات',
      days: 'أيام',
      reward: 'المكافأة',
    },
  };

  const t = text[language as 'en' | 'ar'] || text.en;

  if (!challenge || !progress) {
    return null;
  }

  const progressPercent = Math.min((progress.current / challenge.goal) * 100, 100);
  const isCompleted = progress.completed;

  return (
    <Card variant={isCompleted ? 'accent' : 'default'} className="overflow-hidden">
      <CardContent className="p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              isCompleted ? 'bg-accent text-accent-foreground' : 'bg-primary/20'
            }`}>
              {isCompleted ? (
                <CheckCircle className="w-4 h-4" />
              ) : (
                <Target className="w-4 h-4 text-primary" />
              )}
            </div>
            <span className="font-semibold text-foreground">{t.title}</span>
          </div>
          
          {/* XP Badge */}
          <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-accent/20">
            <Zap className="w-3 h-3 text-accent" />
            <span className="text-xs font-medium text-accent">+{challenge.xp} {t.xp}</span>
          </div>
        </div>

        {/* Challenge Description */}
        <div className="mb-3">
          <p className="text-sm text-foreground">
            {language === 'ar' ? challenge.targetAr : challenge.targetEn}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="space-y-1">
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>{t.reward}: {challenge.xp} {t.xp}</span>
            <span>
              {challenge.type === 'quiz_score' 
                ? `${progress.current}%` 
                : `${progress.current}/${challenge.goal}`
              }
            </span>
          </div>
          <Progress 
            value={progressPercent} 
            className={`h-2 ${isCompleted ? 'bg-accent/30' : ''}`}
          />
        </div>

        {/* Completed Message */}
        {isCompleted && (
          <div className="mt-3 p-2 rounded-lg bg-accent/20 flex items-center gap-2 justify-center">
            <CheckCircle className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">{t.completed}</span>
            <span className="text-lg">🎉</span>
          </div>
        )}

        {/* Stats Footer */}
        <div className="mt-3 pt-3 border-t border-border/50 flex items-center justify-between text-xs">
          <div className="flex items-center gap-1 text-muted-foreground">
            <Trophy className="w-3 h-3" />
            <span>{t.streak}: {streakDays} {t.days}</span>
          </div>
          <div className="flex items-center gap-1">
            <Zap className="w-3 h-3 text-accent" />
            <span className="font-medium text-foreground">{totalXP}</span>
            <span className="text-muted-foreground">{t.totalXP}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
