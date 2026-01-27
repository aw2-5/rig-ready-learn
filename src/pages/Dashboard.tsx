import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';
import { useLevelProgress } from '@/hooks/useLevelProgress';
import { useDailyStreak } from '@/hooks/useDailyStreak';
import { useDailyChallenge } from '@/hooks/useDailyChallenge';
import { BadgeSystem } from '@/components/BadgeSystem';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  BarChart3, 
  ArrowLeft,
  TrendingUp,
  Target,
  BookOpen,
  Clock,
  Trophy,
  Zap,
  Flame
} from 'lucide-react';

export default function Dashboard() {
  const { language, isRTL } = useLanguage();
  const { user, profile } = useAuth();
  const navigate = useNavigate();
  const {
    level1Progress,
    level2Progress,
    level3Progress,
    level1AverageScore,
    level2AverageScore,
    level3AverageScore,
    level1LessonIds,
    level2LessonIds,
    level3LessonIds,
    isLessonComplete,
  } = useLevelProgress();
  
  // Streak and Challenge data
  const { currentStreak, longestStreak } = useDailyStreak();
  const { totalXP, streakDays: challengeStreak } = useDailyChallenge();

  // Calculate stats
  const level1Completed = level1LessonIds.filter(id => isLessonComplete(id)).length;
  const level2Completed = level2LessonIds.filter(id => isLessonComplete(id)).length;
  const level3Completed = level3LessonIds.filter(id => isLessonComplete(id)).length;
  const totalCompleted = level1Completed + level2Completed + level3Completed;
  const totalLessons = level1LessonIds.length + level2LessonIds.length + level3LessonIds.length;

  const overallProgress = Math.round(
    (level1Progress + level2Progress + level3Progress) / 3
  );

  const scores = [level1AverageScore, level2AverageScore, level3AverageScore].filter(
    (s): s is number => s !== undefined
  );
  const overallScore = scores.length > 0 
    ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) 
    : undefined;

  const text = {
    en: {
      title: 'Dashboard',
      subtitle: 'Your Learning Statistics',
      overallProgress: 'Overall Progress',
      averageScore: 'Average Score',
      lessonsCompleted: 'Lessons Completed',
      levelsProgress: 'Levels Progress',
      level1: 'Level 1 - Fundamentals',
      level2: 'Level 2 - Intermediate',
      level3: 'Level 3 - Advanced',
      back: 'Back',
      noScore: 'N/A',
      quizScore: 'Quiz Score',
      streak: 'Day Streak',
      best: 'Best',
      totalXP: 'Total XP',
      challenges: 'Challenge Streak',
    },
    ar: {
      title: 'لوحة التحكم',
      subtitle: 'إحصائيات التعلم الخاصة بك',
      overallProgress: 'التقدم الإجمالي',
      averageScore: 'متوسط الدرجات',
      lessonsCompleted: 'الدروس المكتملة',
      levelsProgress: 'تقدم المستويات',
      level1: 'المستوى 1 - الأساسيات',
      level2: 'المستوى 2 - المتوسط',
      level3: 'المستوى 3 - المتقدم',
      back: 'رجوع',
      noScore: 'غير متاح',
      quizScore: 'درجة الاختبار',
      streak: 'سلسلة الأيام',
      best: 'الأفضل',
      totalXP: 'مجموع النقاط',
      challenges: 'سلسلة التحديات',
    },
  };

  const t = text[language as 'en' | 'ar'] || text.en;

  const levelData = [
    {
      name: t.level1,
      progress: level1Progress,
      completed: level1Completed,
      total: level1LessonIds.length,
      score: level1AverageScore,
      color: 'bg-primary',
    },
    {
      name: t.level2,
      progress: level2Progress,
      completed: level2Completed,
      total: level2LessonIds.length,
      score: level2AverageScore,
      color: 'bg-accent',
    },
    {
      name: t.level3,
      progress: level3Progress,
      completed: level3Completed,
      total: level3LessonIds.length,
      score: level3AverageScore,
      color: 'bg-destructive',
    },
  ];

  return (
    <div className="min-h-screen bg-background" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Header */}
      <header className="sticky top-0 z-50 glass-header">
        <div className="container max-w-lg mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" onClick={() => navigate('/home')}>
                <ArrowLeft className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
              </Button>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl gradient-accent flex items-center justify-center shadow-md">
                  <BarChart3 className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <h1 className="font-bold text-foreground text-lg">{t.title}</h1>
                  <p className="text-xs text-muted-foreground">{t.subtitle}</p>
                </div>
              </div>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container max-w-lg mx-auto px-4 py-6 space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3">
          <Card variant="gradient">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{t.overallProgress}</p>
                  <p className="text-2xl font-bold text-foreground">{overallProgress}%</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card variant="gradient">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <Target className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{t.averageScore}</p>
                  <p className="text-2xl font-bold text-foreground">
                    {overallScore !== undefined ? `${overallScore}%` : t.noScore}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card variant="gradient" className="col-span-2">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-secondary-foreground" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground">{t.lessonsCompleted}</p>
                  <div className="flex items-center gap-2">
                    <p className="text-2xl font-bold text-foreground">{totalCompleted}</p>
                    <span className="text-muted-foreground">/ {totalLessons}</span>
                  </div>
                </div>
                <div className="w-24">
                  <Progress value={(totalCompleted / totalLessons) * 100} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Streak & XP Stats */}
        <div className="grid grid-cols-3 gap-3">
          <Card variant="gradient">
            <CardContent className="p-3 text-center">
              <Flame className="w-5 h-5 text-orange-500 mx-auto mb-1" />
              <p className="text-xs text-muted-foreground">{t.streak}</p>
              <p className="text-xl font-bold text-foreground">{currentStreak}</p>
              <p className="text-[10px] text-muted-foreground">{t.best}: {longestStreak}</p>
            </CardContent>
          </Card>
          
          <Card variant="gradient">
            <CardContent className="p-3 text-center">
              <Zap className="w-5 h-5 text-accent mx-auto mb-1" />
              <p className="text-xs text-muted-foreground">{t.totalXP}</p>
              <p className="text-xl font-bold text-foreground">{totalXP}</p>
            </CardContent>
          </Card>
          
          <Card variant="gradient">
            <CardContent className="p-3 text-center">
              <Target className="w-5 h-5 text-emerald-500 mx-auto mb-1" />
              <p className="text-xs text-muted-foreground">{t.challenges}</p>
              <p className="text-xl font-bold text-foreground">{challengeStreak}</p>
            </CardContent>
          </Card>
        </div>

        {/* Levels Progress */}
        <Card variant="default">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Zap className="w-5 h-5 text-accent" />
              {t.levelsProgress}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {levelData.map((level, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">{level.name}</span>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{level.completed}/{level.total}</span>
                    {level.score !== undefined && (
                      <>
                        <span>•</span>
                        <span className="text-accent">{level.score}%</span>
                      </>
                    )}
                  </div>
                </div>
                <div className="relative h-3 rounded-full bg-muted overflow-hidden">
                  <div
                    className={`absolute inset-y-0 left-0 rounded-full transition-all duration-500 ${level.color}`}
                    style={{ width: `${level.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Badge System */}
        <BadgeSystem />
      </main>
    </div>
  );
}
