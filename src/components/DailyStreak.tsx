import { useDailyStreak } from '@/hooks/useDailyStreak';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Flame, Trophy, Crown, Star } from 'lucide-react';

export function DailyStreak() {
  const { language } = useLanguage();
  const { currentStreak, longestStreak, studiedToday, getStreakBadge } = useDailyStreak();
  const badge = getStreakBadge();

  const text = {
    en: {
      streak: 'Day Streak',
      days: 'days',
      longest: 'Best',
      studyToday: 'Study today to keep your streak!',
      keepGoing: 'Keep it up!',
      startStreak: 'Start your streak today!',
    },
    ar: {
      streak: 'سلسلة الأيام',
      days: 'أيام',
      longest: 'الأفضل',
      studyToday: 'ادرس اليوم للحفاظ على سلسلتك!',
      keepGoing: 'استمر!',
      startStreak: 'ابدأ سلسلتك اليوم!',
    },
  };

  const t = text[language as 'en' | 'ar'] || text.en;

  return (
    <Card variant="gradient" className="overflow-hidden">
      <CardContent className="p-4">
        <div className="flex items-center gap-4">
          {/* Flame Icon with Animation */}
          <div className={`relative w-14 h-14 rounded-full flex items-center justify-center ${
            currentStreak > 0 ? 'bg-gradient-to-br from-orange-500 to-red-500' : 'bg-muted'
          }`}>
            <Flame className={`w-8 h-8 ${currentStreak > 0 ? 'text-white animate-pulse' : 'text-muted-foreground'}`} />
            {badge && (
              <div className="absolute -top-1 -right-1 text-lg">
                {badge.emoji}
              </div>
            )}
          </div>

          {/* Streak Info */}
          <div className="flex-1">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-foreground">{currentStreak}</span>
              <span className="text-sm text-muted-foreground">{t.days}</span>
              {currentStreak > 0 && (
                <span className="text-lg">🔥</span>
              )}
            </div>
            <p className="text-xs text-muted-foreground">
              {currentStreak === 0 
                ? t.startStreak 
                : studiedToday 
                  ? t.keepGoing 
                  : t.studyToday
              }
            </p>
          </div>

          {/* Longest Streak */}
          <div className="text-center">
            <div className="flex items-center gap-1 text-accent">
              <Trophy className="w-4 h-4" />
              <span className="text-xs text-muted-foreground">{t.longest}</span>
            </div>
            <span className="text-lg font-bold text-foreground">{longestStreak}</span>
          </div>
        </div>

        {/* Progress to next badge */}
        {currentStreak > 0 && currentStreak < 100 && (
          <div className="mt-3 pt-3 border-t border-border/50">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              {currentStreak < 3 && (
                <>
                  <Flame className="w-3 h-3 text-orange-500" />
                  <span>{3 - currentStreak} {language === 'ar' ? 'أيام للشارة التالية' : 'days to Flame Starter'}</span>
                </>
              )}
              {currentStreak >= 3 && currentStreak < 7 && (
                <>
                  <Star className="w-3 h-3 text-blue-500" />
                  <span>{7 - currentStreak} {language === 'ar' ? 'أيام للشارة التالية' : 'days to Week Warrior'}</span>
                </>
              )}
              {currentStreak >= 7 && currentStreak < 30 && (
                <>
                  <Crown className="w-3 h-3 text-purple-500" />
                  <span>{30 - currentStreak} {language === 'ar' ? 'أيام للشارة التالية' : 'days to Monthly Master'}</span>
                </>
              )}
              {currentStreak >= 30 && currentStreak < 100 && (
                <>
                  <span>🌟</span>
                  <span>{100 - currentStreak} {language === 'ar' ? 'أيام للأسطورة' : 'days to Legendary'}</span>
                </>
              )}
            </div>
          </div>
        )}

        {/* Warning if streak at risk */}
        {currentStreak > 0 && !studiedToday && (
          <div className="mt-3 p-2 rounded-lg bg-destructive/10 border border-destructive/20">
            <p className="text-xs text-destructive font-medium text-center">
              ⚠️ {t.studyToday}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
