import { useMemo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLevelProgress } from '@/hooks/useLevelProgress';
import { useDailyStreak } from '@/hooks/useDailyStreak';
import { useDailyChallenge } from '@/hooks/useDailyChallenge';
import { 
  Trophy, 
  Star, 
  Flame, 
  Award, 
  Medal, 
  Crown,
  Target,
  Zap,
  BookOpen,
  GraduationCap
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface BadgeInfo {
  id: string;
  nameEn: string;
  nameAr: string;
  descriptionEn: string;
  descriptionAr: string;
  icon: React.ElementType;
  earned: boolean;
  progress?: number;
  maxProgress?: number;
  color: string;
}

export function BadgeSystem() {
  const { language, isRTL } = useLanguage();
  const { 
    level1Progress, 
    level2Progress, 
    level3Progress,
    isLevel1Complete,
    isLevel2Complete,
    isLevel3Complete,
    level1AverageScore,
    level2AverageScore,
    level3AverageScore,
    level1LessonIds,
    level2LessonIds,
    level3LessonIds,
    isLessonComplete,
  } = useLevelProgress();
  
  // Daily streak and challenge data
  const { currentStreak, longestStreak } = useDailyStreak();
  const { streakDays: challengeStreak, totalXP } = useDailyChallenge();

  const badges = useMemo((): BadgeInfo[] => {
    // Count completed lessons
    const level1Completed = level1LessonIds.filter(id => isLessonComplete(id)).length;
    const level2Completed = level2LessonIds.filter(id => isLessonComplete(id)).length;
    const level3Completed = level3LessonIds.filter(id => isLessonComplete(id)).length;
    const totalCompleted = level1Completed + level2Completed + level3Completed;
    const totalLessons = level1LessonIds.length + level2LessonIds.length + level3LessonIds.length;

    // Check for perfect scores
    const hasPerfectLevel1 = level1AverageScore === 100;
    const hasPerfectLevel2 = level2AverageScore === 100;
    const hasPerfectLevel3 = level3AverageScore === 100;

    return [
      {
        id: 'first-lesson',
        nameEn: 'First Step',
        nameAr: 'الخطوة الأولى',
        descriptionEn: 'Complete your first lesson',
        descriptionAr: 'أكمل درسك الأول',
        icon: BookOpen,
        earned: totalCompleted >= 1,
        progress: Math.min(totalCompleted, 1),
        maxProgress: 1,
        color: 'text-green-500',
      },
      {
        id: 'level1-complete',
        nameEn: 'Fundamentals Master',
        nameAr: 'سيد الأساسيات',
        descriptionEn: 'Complete all Level 1 lessons',
        descriptionAr: 'أكمل جميع دروس المستوى الأول',
        icon: Trophy,
        earned: isLevel1Complete,
        progress: level1Progress,
        maxProgress: 100,
        color: 'text-primary',
      },
      {
        id: 'level2-complete',
        nameEn: 'Intermediate Expert',
        nameAr: 'خبير المستوى المتوسط',
        descriptionEn: 'Complete all Level 2 lessons',
        descriptionAr: 'أكمل جميع دروس المستوى الثاني',
        icon: Star,
        earned: isLevel2Complete,
        progress: level2Progress,
        maxProgress: 100,
        color: 'text-accent',
      },
      {
        id: 'level3-complete',
        nameEn: 'Advanced Scholar',
        nameAr: 'عالم المستوى المتقدم',
        descriptionEn: 'Complete all Level 3 lessons',
        descriptionAr: 'أكمل جميع دروس المستوى الثالث',
        icon: Crown,
        earned: isLevel3Complete,
        progress: level3Progress,
        maxProgress: 100,
        color: 'text-destructive',
      },
      {
        id: 'perfectionist-1',
        nameEn: 'Perfectionist I',
        nameAr: 'متقن المستوى الأول',
        descriptionEn: 'Get 100% average in Level 1 quizzes',
        descriptionAr: 'احصل على معدل 100% في اختبارات المستوى الأول',
        icon: Target,
        earned: hasPerfectLevel1,
        progress: level1AverageScore || 0,
        maxProgress: 100,
        color: 'text-blue-500',
      },
      {
        id: 'perfectionist-2',
        nameEn: 'Perfectionist II',
        nameAr: 'متقن المستوى الثاني',
        descriptionEn: 'Get 100% average in Level 2 quizzes',
        descriptionAr: 'احصل على معدل 100% في اختبارات المستوى الثاني',
        icon: Medal,
        earned: hasPerfectLevel2,
        progress: level2AverageScore || 0,
        maxProgress: 100,
        color: 'text-purple-500',
      },
      {
        id: 'half-way',
        nameEn: 'Half Way There',
        nameAr: 'في منتصف الطريق',
        descriptionEn: 'Complete 50% of all lessons',
        descriptionAr: 'أكمل 50% من جميع الدروس',
        icon: Zap,
        earned: totalCompleted >= totalLessons / 2,
        progress: totalCompleted,
        maxProgress: Math.ceil(totalLessons / 2),
        color: 'text-yellow-500',
      },
      {
        id: 'drilling-master',
        nameEn: 'Drilling Master',
        nameAr: 'سيد الحفر',
        descriptionEn: 'Complete all three levels',
        descriptionAr: 'أكمل المستويات الثلاثة',
        icon: GraduationCap,
        earned: isLevel1Complete && isLevel2Complete && isLevel3Complete,
        color: 'text-amber-500',
      },
      {
        id: 'overachiever',
        nameEn: 'Overachiever',
        nameAr: 'المتفوق',
        descriptionEn: 'Get 100% in all quizzes across all levels',
        descriptionAr: 'احصل على 100% في جميع الاختبارات',
        icon: Award,
        earned: hasPerfectLevel1 && hasPerfectLevel2 && hasPerfectLevel3,
        color: 'text-pink-500',
      },
      // Streak Badges
      {
        id: 'flame-starter',
        nameEn: 'Flame Starter',
        nameAr: 'شرارة البداية',
        descriptionEn: '3 day study streak',
        descriptionAr: 'سلسلة دراسة 3 أيام',
        icon: Flame,
        earned: longestStreak >= 3,
        progress: Math.min(longestStreak, 3),
        maxProgress: 3,
        color: 'text-orange-500',
      },
      {
        id: 'week-warrior',
        nameEn: 'Week Warrior',
        nameAr: 'محارب الأسبوع',
        descriptionEn: '7 day study streak',
        descriptionAr: 'سلسلة دراسة 7 أيام',
        icon: Star,
        earned: longestStreak >= 7,
        progress: Math.min(longestStreak, 7),
        maxProgress: 7,
        color: 'text-blue-500',
      },
      {
        id: 'monthly-master',
        nameEn: 'Monthly Master',
        nameAr: 'سيد الشهر',
        descriptionEn: '30 day study streak',
        descriptionAr: 'سلسلة دراسة 30 يوم',
        icon: Crown,
        earned: longestStreak >= 30,
        progress: Math.min(longestStreak, 30),
        maxProgress: 30,
        color: 'text-purple-500',
      },
      // Challenge Badge
      {
        id: 'challenge-champion',
        nameEn: 'Challenge Champion',
        nameAr: 'بطل التحديات',
        descriptionEn: 'Complete 7 daily challenges in a row',
        descriptionAr: 'أكمل 7 تحديات يومية متتالية',
        icon: Target,
        earned: challengeStreak >= 7,
        progress: Math.min(challengeStreak, 7),
        maxProgress: 7,
        color: 'text-emerald-500',
      },
      // XP Badge
      {
        id: 'xp-collector',
        nameEn: 'XP Collector',
        nameAr: 'جامع النقاط',
        descriptionEn: 'Earn 500 total XP',
        descriptionAr: 'اجمع 500 نقطة XP',
        icon: Zap,
        earned: totalXP >= 500,
        progress: Math.min(totalXP, 500),
        maxProgress: 500,
        color: 'text-yellow-400',
      },
    ];
  }, [
    level1Progress, level2Progress, level3Progress,
    isLevel1Complete, isLevel2Complete, isLevel3Complete,
    level1AverageScore, level2AverageScore, level3AverageScore,
    level1LessonIds, level2LessonIds, level3LessonIds,
    isLessonComplete, longestStreak, challengeStreak, totalXP
  ]);

  const earnedCount = badges.filter(b => b.earned).length;

  return (
    <Card variant="default">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Trophy className="w-5 h-5 text-accent" />
          {language === 'ar' ? 'الشارات والإنجازات' : 'Badges & Achievements'}
          <Badge variant="secondary" className="ml-auto">
            {earnedCount}/{badges.length}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-3">
          {badges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div
                key={badge.id}
                className={`relative flex flex-col items-center p-3 rounded-xl transition-all ${
                  badge.earned 
                    ? 'bg-accent/10 shadow-sm' 
                    : 'bg-muted/50 opacity-50 grayscale'
                }`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                  badge.earned ? 'bg-accent/20' : 'bg-muted'
                }`}>
                  <Icon className={`w-5 h-5 ${badge.earned ? badge.color : 'text-muted-foreground'}`} />
                </div>
                <span className="text-xs font-medium text-center text-foreground line-clamp-2">
                  {language === 'ar' ? badge.nameAr : badge.nameEn}
                </span>
                {badge.progress !== undefined && badge.maxProgress && !badge.earned && (
                  <span className="text-[10px] text-muted-foreground mt-1">
                    {Math.round(badge.progress)}/{badge.maxProgress}
                  </span>
                )}
                {badge.earned && (
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-[10px]">✓</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
