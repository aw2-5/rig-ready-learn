import { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { lessons } from '@/data/lessons';
import { lessonsYear2 } from '@/data/lessonsYear2';
import { lessonsYear3 } from '@/data/lessonsYear3';
import { useLevelProgress } from '@/hooks/useLevelProgress';
import { ThemeToggle } from '@/components/ThemeToggle';
import { sendLevelCompletionEmail } from '@/lib/emailNotifications';
import { Onboarding } from '@/components/Onboarding';

// Lazy load heavy components for code splitting
const LevelCompletionModal = lazy(() => import('@/components/LevelCompletionModal').then(m => ({ default: m.LevelCompletionModal })));
const UpgradeAccountModal = lazy(() => import('@/components/UpgradeAccountModal').then(m => ({ default: m.UpgradeAccountModal })));
const LevelTest = lazy(() => import('@/components/LevelTest').then(m => ({ default: m.LevelTest })));
const SearchModal = lazy(() => import('@/components/SearchModal').then(m => ({ default: m.SearchModal })));
const AIAssistant = lazy(() => import('@/components/AIAssistant').then(m => ({ default: m.AIAssistant })));
import { 
  BookOpen, 
  GraduationCap, 
  LogOut, 
  Globe,
  ChevronRight,
  Droplets,
  Cloud,
  CloudOff,
  Lock,
  CheckCircle,
  Star,
  Sparkles,
  Trophy,
  User,
  Zap,
  Search,
  BarChart3,
  Download
} from 'lucide-react';
import { toast } from 'sonner';

export default function Home() {
  const { t, language, setLanguage, isRTL } = useLanguage();
  const { user, profile, isGuest, logout } = useAuth();
  const { 
    level1Progress, 
    level2Progress,
    level3Progress,
    isLevel1Complete,
    isLevel2Unlocked,
    isLevel2Complete,
    isLevel3Unlocked,
    isLevel3Complete,
    level1AverageScore,
    level2AverageScore,
    level3AverageScore,
    isLessonComplete,
  } = useLevelProgress();
  const navigate = useNavigate();
  const [selectedYear, setSelectedYear] = useState(1);
  const [showOnboarding, setShowOnboarding] = useState(() => {
    return !localStorage.getItem('onboarding-complete');
  });
  const [showLevel1CompleteModal, setShowLevel1CompleteModal] = useState(false);
  const [showLevel2CompleteModal, setShowLevel2CompleteModal] = useState(false);
  const [showLevel3CompleteModal, setShowLevel3CompleteModal] = useState(false);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [showLevelTest, setShowLevelTest] = useState<1 | 2 | 3 | null>(null);
  const [showSearch, setShowSearch] = useState(false);
  
  // Track if email was sent to prevent duplicate sends
  const emailSentRef = useRef<{ [key: number]: boolean }>({});

  // Send email notification when level is completed
  const sendEmailNotification = async (level: number, averageScore?: number) => {
    if (!user || isGuest || !user.email) return;
    if (emailSentRef.current[level]) return;
    
    const emailSentKey = `level${level}-email-sent-${user.id}`;
    if (localStorage.getItem(emailSentKey)) return;
    
    emailSentRef.current[level] = true;
    localStorage.setItem(emailSentKey, 'true');
    
    const success = await sendLevelCompletionEmail({
      email: user.email,
      userName: profile?.full_name || user.email.split('@')[0],
      level,
      averageScore,
      language,
    });
    
    if (success) {
      toast.success(
        language === 'ar' 
          ? 'تم إرسال إشعار إكمال المستوى إلى بريدك الإلكتروني!' 
          : 'Level completion notification sent to your email!'
      );
    }
  };

  // Check if level 1 was just completed
  useEffect(() => {
    if (isLevel1Complete && selectedYear === 1) {
      const hasSeenModal = localStorage.getItem('level1-complete-modal-seen');
      if (!hasSeenModal) {
        setShowLevel1CompleteModal(true);
        localStorage.setItem('level1-complete-modal-seen', 'true');
        sendEmailNotification(1, level1AverageScore);
      }
    }
  }, [isLevel1Complete, selectedYear]);

  // Check if level 2 was just completed
  useEffect(() => {
    if (isLevel2Complete && selectedYear === 2) {
      const hasSeenModal = localStorage.getItem('level2-complete-modal-seen');
      if (!hasSeenModal) {
        setShowLevel2CompleteModal(true);
        localStorage.setItem('level2-complete-modal-seen', 'true');
        sendEmailNotification(2, level2AverageScore);
      }
    }
  }, [isLevel2Complete, selectedYear]);

  // Check if level 3 was just completed
  useEffect(() => {
    if (isLevel3Complete && selectedYear === 3) {
      const hasSeenModal = localStorage.getItem('level3-complete-modal-seen');
      if (!hasSeenModal) {
        setShowLevel3CompleteModal(true);
        localStorage.setItem('level3-complete-modal-seen', 'true');
        sendEmailNotification(3, level3AverageScore);
      }
    }
  }, [isLevel3Complete, selectedYear]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleLessonClick = (lessonId: string) => {
    navigate(`/lesson/${lessonId}`);
  };

  const handleYearSelect = (year: number) => {
    if (year === 2 && !isLevel2Unlocked) {
      toast.error(
        language === 'ar' 
          ? 'أكمل 80% من المستوى الأول لفتح المستوى الثاني' 
          : 'Complete 80% of Level 1 to unlock Level 2'
      );
      return;
    }
    if (year === 3 && !isLevel3Unlocked) {
      toast.error(
        language === 'ar' 
          ? 'أكمل 80% من المستوى الثاني لفتح المستوى الثالث' 
          : 'Complete 80% of Level 2 to unlock Level 3'
      );
      return;
    }
    setSelectedYear(year);
  };

  const handleGoToLevel2 = () => {
    setShowLevel1CompleteModal(false);
    setSelectedYear(2);
  };

  const handleGoToLevel3 = () => {
    setShowLevel2CompleteModal(false);
    setSelectedYear(3);
  };

  // Handle level test completion
  const handleLevelTestComplete = (passed: boolean, score: number) => {
    if (passed) {
      toast.success(
        language === 'ar' 
          ? `تم تخطي المستوى ${showLevelTest} بنجاح!`
          : `Level ${showLevelTest} skipped successfully!`
      );
      // Trigger level completion modal if needed
      if (showLevelTest === 1) {
        setShowLevel1CompleteModal(true);
        sendEmailNotification(1, score);
      } else if (showLevelTest === 2) {
        setShowLevel2CompleteModal(true);
        sendEmailNotification(2, score);
      } else if (showLevelTest === 3) {
        setShowLevel3CompleteModal(true);
        sendEmailNotification(3, score);
      }
    }
    setShowLevelTest(null);
  };

  // Get lessons based on selected year
  const currentLessons = selectedYear === 1 ? lessons : selectedYear === 2 ? lessonsYear2 : lessonsYear3;
  const currentProgress = selectedYear === 1 ? level1Progress : selectedYear === 2 ? level2Progress : level3Progress;
  const isCurrentLevelComplete = selectedYear === 1 ? isLevel1Complete : selectedYear === 2 ? isLevel2Complete : isLevel3Complete;

  const getYearLabel = () => {
    if (selectedYear === 1) return t('firstYear');
    if (selectedYear === 2) return t('secondYear');
    return language === 'ar' ? 'المستوى الثالث' : 'Level 3';
  };

  // Show onboarding for new users
  if (showOnboarding) {
    return <Onboarding onComplete={() => setShowOnboarding(false)} />;
  }

  // Show level test if active
  if (showLevelTest) {
    return (
      <div className="min-h-screen bg-background">
        <header className="sticky top-0 z-50 glass-header">
          <div className="container max-w-lg mx-auto px-4 py-4">
            <div className="flex items-center justify-center">
              <div className="w-10 h-10 rounded-xl gradient-accent flex items-center justify-center shadow-md">
                <Zap className="w-5 h-5 text-accent-foreground" />
              </div>
              <div className="ml-3">
                <h1 className="font-bold text-foreground text-lg">
                  {language === 'ar' ? 'اختبار التخطي' : 'Skip Test'}
                </h1>
              </div>
            </div>
          </div>
        </header>
        <main className="container max-w-lg mx-auto px-4 py-6">
          <Suspense fallback={<div className="flex items-center justify-center p-8"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div>}>
            <LevelTest
              level={showLevelTest}
              onComplete={handleLevelTestComplete}
              onCancel={() => setShowLevelTest(null)}
            />
          </Suspense>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 glass-header">
        <div className="container max-w-lg mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl gradient-accent flex items-center justify-center shadow-md">
                <Droplets className="w-5 h-5 text-accent-foreground" />
              </div>
              <div>
                <h1 className="font-bold text-foreground text-lg">{t('appName')}</h1>
                <p className="text-xs text-muted-foreground">
                  {getYearLabel()}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowSearch(true)}
              >
                <Search className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate('/dashboard')}
              >
                <BarChart3 className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate('/install')}
                title={language === 'ar' ? 'تثبيت التطبيق' : 'Install App'}
              >
                <Download className="w-5 h-5" />
              </Button>
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate('/profile')}
              >
                <User className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              >
                <Globe className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleLogout}
              >
                <LogOut className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container max-w-lg mx-auto px-4 py-6 space-y-6">
        {/* Welcome Card */}
        <Card variant="gradient" className="animate-fade-in">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-accent" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">{t('welcomeBack')}</p>
                <h2 className="text-xl font-bold text-foreground">
                  {profile?.full_name || user?.email?.split('@')[0] || t('student')}
                </h2>
                <div className="flex items-center gap-2 mt-1">
                  {isGuest ? (
                    <button 
                      onClick={() => setShowUpgradeModal(true)}
                      className="inline-flex items-center gap-1 px-2 py-0.5 text-xs bg-secondary rounded-full text-secondary-foreground hover:bg-secondary/80 transition-colors"
                    >
                      <CloudOff className="w-3 h-3" />
                      {t('guest')}
                    </button>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs bg-accent/20 rounded-full text-accent">
                      <Cloud className="w-3 h-3" />
                      {language === 'ar' ? 'متصل بالسحابة' : 'Cloud Synced'}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Guest Upgrade Banner */}
        {isGuest && (
          <Card variant="accent" className="animate-fade-in cursor-pointer" onClick={() => setShowUpgradeModal(true)}>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-accent-foreground" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">
                    {language === 'ar' ? 'رقِّ حسابك الآن!' : 'Upgrade Your Account!'}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {language === 'ar' ? 'احفظ تقدمك وزامن بين أجهزتك' : 'Save your progress and sync across devices'}
                  </p>
                </div>
                <ChevronRight className={`w-5 h-5 text-muted-foreground ${isRTL ? 'rotate-180' : ''}`} />
              </div>
            </CardContent>
          </Card>
        )}

        {/* Year Selector with Lock Status */}
        <div className="flex gap-2">
          <Button
            variant={selectedYear === 1 ? "default" : "outline"}
            className="flex-1 gap-1 text-xs px-2"
            onClick={() => handleYearSelect(1)}
          >
            {isLevel1Complete && <CheckCircle className="w-3 h-3" />}
            {language === 'ar' ? 'المستوى 1' : 'Level 1'}
          </Button>
          <Button
            variant={selectedYear === 2 ? "default" : "outline"}
            className={`flex-1 gap-1 text-xs px-2 ${!isLevel2Unlocked ? 'opacity-60' : ''}`}
            onClick={() => handleYearSelect(2)}
          >
            {!isLevel2Unlocked ? (
              <Lock className="w-3 h-3" />
            ) : isLevel2Complete ? (
              <CheckCircle className="w-3 h-3" />
            ) : (
              <Star className="w-3 h-3" />
            )}
            {language === 'ar' ? 'المستوى 2' : 'Level 2'}
          </Button>
          <Button
            variant={selectedYear === 3 ? "default" : "outline"}
            className={`flex-1 gap-1 text-xs px-2 ${!isLevel3Unlocked ? 'opacity-60' : ''}`}
            onClick={() => handleYearSelect(3)}
          >
            {!isLevel3Unlocked ? (
              <Lock className="w-3 h-3" />
            ) : (
              <Trophy className="w-3 h-3" />
            )}
            {language === 'ar' ? 'المستوى 3' : 'Level 3'}
          </Button>
        </div>

        {/* Level Status Message */}
        {!isLevel2Unlocked && selectedYear === 1 && (
          <Card variant="accent" className="animate-fade-in">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                <Lock className="w-5 h-5 text-accent" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">
                  {language === 'ar' ? 'أكمل 80% لفتح المستوى الثاني' : 'Complete 80% to unlock Level 2'}
                </p>
                <p className="text-xs text-muted-foreground">
                  {language === 'ar' 
                    ? `${level1Progress}% مكتمل - ${Math.max(0, 80 - level1Progress)}% متبقي`
                    : `${level1Progress}% complete - ${Math.max(0, 80 - level1Progress)}% remaining`
                  }
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {!isLevel3Unlocked && selectedYear === 2 && (
          <Card variant="accent" className="animate-fade-in">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                <Lock className="w-5 h-5 text-accent" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">
                  {language === 'ar' ? 'أكمل 80% لفتح المستوى الثالث' : 'Complete 80% to unlock Level 3'}
                </p>
                <p className="text-xs text-muted-foreground">
                  {language === 'ar' 
                    ? `${level2Progress}% مكتمل - ${Math.max(0, 80 - level2Progress)}% متبقي`
                    : `${level2Progress}% complete - ${Math.max(0, 80 - level2Progress)}% remaining`
                  }
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Progress Card */}
        <Card variant="default" className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-foreground">{t('progress')}</span>
              <span className="text-sm text-muted-foreground">
                {currentProgress}%
              </span>
            </div>
            <Progress value={currentProgress} className="h-2" />
            
            {/* Skip Test Button - only show if level not complete */}
            {!isCurrentLevelComplete && currentProgress < 100 && (
              <Button
                variant="outline"
                size="sm"
                className="w-full mt-4 gap-2"
                onClick={() => setShowLevelTest(selectedYear as 1 | 2 | 3)}
              >
                <Zap className="w-4 h-4" />
                {language === 'ar' ? 'اختبار تخطي المستوى' : 'Take Skip Test'}
              </Button>
            )}
          </CardContent>
        </Card>

        {/* Subjects Section */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-accent" />
            <h3 className="text-lg font-semibold text-foreground">{t('subjects')}</h3>
            <span className="text-sm text-muted-foreground">({currentLessons.length})</span>
          </div>

          <div className="grid gap-3">
            {currentLessons.map((lesson, index) => {
              const lessonComplete = isLessonComplete(lesson.id);
              return (
                <Card 
                  key={lesson.id}
                  variant="interactive"
                  className="animate-slide-up"
                  style={{ animationDelay: `${0.15 + index * 0.05}s` }}
                  onClick={() => handleLessonClick(lesson.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl relative ${lessonComplete ? 'bg-accent/20' : 'bg-secondary'}`}>
                        {lesson.icon}
                        {lessonComplete && (
                          <CheckCircle className="absolute -bottom-1 -right-1 w-5 h-5 text-accent bg-card rounded-full" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-foreground truncate">
                          {t(lesson.titleKey)}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {lessonComplete 
                            ? (language === 'ar' ? '✓ مكتمل' : '✓ Completed')
                            : `7 ${t('day')}s • ${t('quiz')} • ${t('project')}`
                          }
                        </p>
                      </div>
                      <ChevronRight className={`w-5 h-5 text-muted-foreground ${isRTL ? 'rotate-180' : ''}`} />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Stage Indicator */}
        <Card variant="accent" className="animate-slide-up" style={{ animationDelay: '0.5s' }}>
          <CardContent className="p-4 text-center">
            <p className="text-sm text-muted-foreground mb-1">{t('petroleumEngineering')}</p>
            <p className="font-bold text-gradient">
              {getYearLabel()}
            </p>
          </CardContent>
        </Card>
      </main>

      {/* Lazy loaded modals with Suspense */}
      <Suspense fallback={null}>
        {/* Level 1 Completion Modal */}
        <LevelCompletionModal
          isOpen={showLevel1CompleteModal}
          onClose={() => setShowLevel1CompleteModal(false)}
          level={1}
          averageScore={level1AverageScore}
          onGoToNextLevel={handleGoToLevel2}
        />

        {/* Level 2 Completion Modal */}
        <LevelCompletionModal
          isOpen={showLevel2CompleteModal}
          onClose={() => setShowLevel2CompleteModal(false)}
          level={2}
          averageScore={level2AverageScore}
          onGoToNextLevel={handleGoToLevel3}
        />

        {/* Level 3 Completion Modal */}
        <LevelCompletionModal
          isOpen={showLevel3CompleteModal}
          onClose={() => setShowLevel3CompleteModal(false)}
          level={3}
          averageScore={level3AverageScore}
          onGoToNextLevel={() => setShowLevel3CompleteModal(false)}
        />

        {/* Upgrade Account Modal */}
        <UpgradeAccountModal
          isOpen={showUpgradeModal}
          onClose={() => setShowUpgradeModal(false)}
        />

        {/* Search Modal */}
        <SearchModal open={showSearch} onOpenChange={setShowSearch} />

        {/* AI Assistant */}
        <AIAssistant />
      </Suspense>
    </div>
  );
}
