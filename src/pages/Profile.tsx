import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { useProgress } from '@/hooks/useProgress';
import { useLevelProgress } from '@/hooks/useLevelProgress';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ThemeToggle } from '@/components/ThemeToggle';
import { 
  ArrowLeft, 
  User, 
  Trophy, 
  Target, 
  RotateCcw, 
  CheckCircle2,
  BookOpen,
  Award,
  TrendingUp
} from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from 'sonner';

export default function Profile() {
  const navigate = useNavigate();
  const { user, profile, isGuest } = useAuth();
  const { language, t } = useLanguage();
  const { resetLessonProgress } = useProgress();
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
    isLevel1Complete,
    isLevel2Complete,
    isLevel3Complete,
  } = useLevelProgress();

  const isRTL = language === 'ar';

  const texts = {
    en: {
      profile: 'Profile',
      back: 'Back',
      guestUser: 'Guest User',
      statistics: 'Statistics',
      overallProgress: 'Overall Progress',
      completedLevels: 'Completed Levels',
      averageScore: 'Average Score',
      lessonsCompleted: 'Lessons Completed',
      levelProgress: 'Level Progress',
      level1: 'Level 1 - Fundamentals',
      level2: 'Level 2 - Intermediate',
      level3: 'Level 3 - Advanced',
      resetProgress: 'Reset Progress',
      resetConfirmTitle: 'Reset Level Progress?',
      resetConfirmDesc: 'This will delete all your progress for this level. This action cannot be undone.',
      cancel: 'Cancel',
      confirm: 'Reset',
      progressReset: 'Progress has been reset successfully',
      notStarted: 'Not started',
      complete: 'Complete',
      quizScore: 'Quiz Average',
      noScore: 'No scores yet',
    },
    ar: {
      profile: 'الملف الشخصي',
      back: 'رجوع',
      guestUser: 'مستخدم زائر',
      statistics: 'الإحصائيات',
      overallProgress: 'التقدم الكلي',
      completedLevels: 'المستويات المكتملة',
      averageScore: 'متوسط الدرجات',
      lessonsCompleted: 'الدروس المكتملة',
      levelProgress: 'تقدم المستويات',
      level1: 'المستوى الأول - الأساسيات',
      level2: 'المستوى الثاني - المتوسط',
      level3: 'المستوى الثالث - المتقدم',
      resetProgress: 'إعادة التقدم',
      resetConfirmTitle: 'إعادة تعيين تقدم المستوى؟',
      resetConfirmDesc: 'سيتم حذف جميع تقدمك في هذا المستوى. لا يمكن التراجع عن هذا الإجراء.',
      cancel: 'إلغاء',
      confirm: 'إعادة',
      progressReset: 'تم إعادة تعيين التقدم بنجاح',
      notStarted: 'لم يبدأ',
      complete: 'مكتمل',
      quizScore: 'متوسط الاختبارات',
      noScore: 'لا توجد درجات بعد',
    }
  };

  const txt = texts[language];

  const handleResetLevel = async (levelIds: string[], levelName: string) => {
    for (const lessonId of levelIds) {
      await resetLessonProgress(lessonId);
    }
    toast.success(txt.progressReset);
  };

  const completedLevelsCount = [isLevel1Complete, isLevel2Complete, isLevel3Complete].filter(Boolean).length;
  
  const overallProgress = Math.round((level1Progress + level2Progress + level3Progress) / 3);
  
  const allScores = [level1AverageScore, level2AverageScore, level3AverageScore].filter(s => s !== undefined) as number[];
  const overallAverageScore = allScores.length > 0 
    ? Math.round(allScores.reduce((a, b) => a + b, 0) / allScores.length) 
    : undefined;

  const totalLessons = level1LessonIds.length + level2LessonIds.length + level3LessonIds.length;
  const completedLessons = Math.round(
    (level1Progress / 100 * level1LessonIds.length) +
    (level2Progress / 100 * level2LessonIds.length) +
    (level3Progress / 100 * level3LessonIds.length)
  );

  const LevelCard = ({ 
    title, 
    progress, 
    score, 
    lessonIds, 
    isComplete,
    levelNumber 
  }: { 
    title: string; 
    progress: number; 
    score: number | undefined; 
    lessonIds: string[];
    isComplete: boolean;
    levelNumber: number;
  }) => (
    <Card className="relative overflow-hidden">
      {isComplete && (
        <div className="absolute top-2 right-2">
          <CheckCircle2 className="h-6 w-6 text-green-500" />
        </div>
      )}
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-primary" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-muted-foreground">{txt.overallProgress}</span>
            <span className="font-medium">{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        
        <div className="flex justify-between items-center text-sm">
          <span className="text-muted-foreground">{txt.quizScore}</span>
          <span className="font-medium">
            {score !== undefined ? `${score}%` : txt.noScore}
          </span>
        </div>

        <div className="flex justify-between items-center text-sm">
          <span className="text-muted-foreground">{txt.lessonsCompleted}</span>
          <span className="font-medium">
            {Math.round(progress / 100 * lessonIds.length)} / {lessonIds.length}
          </span>
        </div>

        {progress > 0 && (
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline" size="sm" className="w-full mt-2 text-destructive hover:text-destructive">
                <RotateCcw className="h-4 w-4 mr-2" />
                {txt.resetProgress}
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>{txt.resetConfirmTitle}</AlertDialogTitle>
                <AlertDialogDescription>
                  {txt.resetConfirmDesc}
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>{txt.cancel}</AlertDialogCancel>
                <AlertDialogAction 
                  onClick={() => handleResetLevel(lessonIds, title)}
                  className="bg-destructive hover:bg-destructive/90"
                >
                  {txt.confirm}
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className={`min-h-screen bg-background ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/home')}
            className="gap-2"
          >
            <ArrowLeft className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
            {txt.back}
          </Button>
          <h1 className="text-xl font-bold">{txt.profile}</h1>
          <ThemeToggle />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* User Info Card */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">
                  {isGuest ? txt.guestUser : (profile?.full_name || user?.email)}
                </h2>
                {!isGuest && user?.email && (
                  <p className="text-muted-foreground">{user.email}</p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Statistics Overview */}
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          {txt.statistics}
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6 text-center">
              <Target className="h-8 w-8 mx-auto mb-2 text-primary" />
              <p className="text-3xl font-bold">{overallProgress}%</p>
              <p className="text-sm text-muted-foreground">{txt.overallProgress}</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6 text-center">
              <Trophy className="h-8 w-8 mx-auto mb-2 text-yellow-500" />
              <p className="text-3xl font-bold">{completedLevelsCount}/3</p>
              <p className="text-sm text-muted-foreground">{txt.completedLevels}</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6 text-center">
              <Award className="h-8 w-8 mx-auto mb-2 text-green-500" />
              <p className="text-3xl font-bold">
                {overallAverageScore !== undefined ? `${overallAverageScore}%` : '-'}
              </p>
              <p className="text-sm text-muted-foreground">{txt.averageScore}</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6 text-center">
              <BookOpen className="h-8 w-8 mx-auto mb-2 text-blue-500" />
              <p className="text-3xl font-bold">{completedLessons}/{totalLessons}</p>
              <p className="text-sm text-muted-foreground">{txt.lessonsCompleted}</p>
            </CardContent>
          </Card>
        </div>

        {/* Level Progress */}
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-primary" />
          {txt.levelProgress}
        </h2>
        
        <div className="grid md:grid-cols-3 gap-4">
          <LevelCard
            title={txt.level1}
            progress={level1Progress}
            score={level1AverageScore}
            lessonIds={level1LessonIds}
            isComplete={isLevel1Complete}
            levelNumber={1}
          />
          <LevelCard
            title={txt.level2}
            progress={level2Progress}
            score={level2AverageScore}
            lessonIds={level2LessonIds}
            isComplete={isLevel2Complete}
            levelNumber={2}
          />
          <LevelCard
            title={txt.level3}
            progress={level3Progress}
            score={level3AverageScore}
            lessonIds={level3LessonIds}
            isComplete={isLevel3Complete}
            levelNumber={3}
          />
        </div>
      </main>
    </div>
  );
}
