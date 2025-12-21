import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { lessons } from '@/data/lessons';
import { lessonsYear2 } from '@/data/lessonsYear2';
import { useLevelProgress } from '@/hooks/useLevelProgress';
import { LevelCompletionModal } from '@/components/LevelCompletionModal';
import { UpgradeAccountModal } from '@/components/UpgradeAccountModal';
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
  Sparkles
} from 'lucide-react';
import { toast } from 'sonner';

export default function Home() {
  const { t, language, setLanguage, isRTL } = useLanguage();
  const { user, profile, isGuest, logout } = useAuth();
  const { 
    level1Progress, 
    level2Progress,
    isLevel1Complete,
    isLevel2Unlocked,
    level1AverageScore,
    isLessonComplete,
  } = useLevelProgress();
  const navigate = useNavigate();
  const [selectedYear, setSelectedYear] = useState(1);
  const [showLevel1CompleteModal, setShowLevel1CompleteModal] = useState(false);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  // Check if level 1 was just completed
  useEffect(() => {
    if (isLevel1Complete && selectedYear === 1) {
      const hasSeenModal = localStorage.getItem('level1-complete-modal-seen');
      if (!hasSeenModal) {
        setShowLevel1CompleteModal(true);
        localStorage.setItem('level1-complete-modal-seen', 'true');
      }
    }
  }, [isLevel1Complete, selectedYear]);

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
          ? 'أكمل المستوى الأول أولاً لفتح المستوى الثاني' 
          : 'Complete Level 1 first to unlock Level 2'
      );
      return;
    }
    setSelectedYear(year);
  };

  const handleGoToLevel2 = () => {
    setShowLevel1CompleteModal(false);
    setSelectedYear(2);
  };

  // Get lessons based on selected year
  const currentLessons = selectedYear === 1 ? lessons : lessonsYear2;
  const currentProgress = selectedYear === 1 ? level1Progress : level2Progress;

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
                  {selectedYear === 1 ? t('firstYear') : t('secondYear')}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
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
            className="flex-1 gap-2"
            onClick={() => handleYearSelect(1)}
          >
            {isLevel1Complete && <CheckCircle className="w-4 h-4" />}
            {t('firstYear')}
            {isLevel1Complete && <span className="text-xs opacity-75">✓</span>}
          </Button>
          <Button
            variant={selectedYear === 2 ? "default" : "outline"}
            className={`flex-1 gap-2 ${!isLevel2Unlocked ? 'opacity-60' : ''}`}
            onClick={() => handleYearSelect(2)}
          >
            {!isLevel2Unlocked ? (
              <Lock className="w-4 h-4" />
            ) : (
              <Star className="w-4 h-4" />
            )}
            {t('secondYear')}
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
                  {language === 'ar' ? 'أكمل المستوى الأول' : 'Complete Level 1'}
                </p>
                <p className="text-xs text-muted-foreground">
                  {language === 'ar' 
                    ? `${level1Progress}% مكتمل - ${100 - level1Progress}% متبقي`
                    : `${level1Progress}% complete - ${100 - level1Progress}% remaining`
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
              {selectedYear === 1 ? t('firstYear') : t('secondYear')}
            </p>
          </CardContent>
        </Card>
      </main>

      {/* Level 1 Completion Modal */}
      <LevelCompletionModal
        isOpen={showLevel1CompleteModal}
        onClose={() => setShowLevel1CompleteModal(false)}
        level={1}
        averageScore={level1AverageScore}
        onGoToNextLevel={handleGoToLevel2}
      />

      {/* Upgrade Account Modal */}
      <UpgradeAccountModal
        isOpen={showUpgradeModal}
        onClose={() => setShowUpgradeModal(false)}
      />
    </div>
  );
}
