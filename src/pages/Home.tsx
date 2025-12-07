import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { lessons } from '@/data/lessons';
import { useProgress } from '@/hooks/useProgress';
import { 
  BookOpen, 
  GraduationCap, 
  LogOut, 
  Globe,
  ChevronRight,
  Droplets,
  Cloud,
  CloudOff
} from 'lucide-react';

export default function Home() {
  const { t, language, setLanguage, isRTL } = useLanguage();
  const { user, profile, isGuest, logout } = useAuth();
  const { getTotalProgress } = useProgress();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleLessonClick = (lessonId: string) => {
    navigate(`/lesson/${lessonId}`);
  };

  // Get real progress from useProgress hook
  const lessonIds = lessons.map(l => l.id);
  const progressPercentage = getTotalProgress(lessonIds);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
        <div className="container max-w-lg mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl gradient-accent flex items-center justify-center shadow-md">
                <Droplets className="w-5 h-5 text-accent-foreground" />
              </div>
              <div>
                <h1 className="font-bold text-foreground text-lg">{t('appName')}</h1>
                <p className="text-xs text-muted-foreground">{t('firstYear')}</p>
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
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs bg-secondary rounded-full text-secondary-foreground">
                      <CloudOff className="w-3 h-3" />
                      {t('guest')}
                    </span>
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

        {/* Progress Card */}
        <Card variant="default" className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-foreground">{t('progress')}</span>
              <span className="text-sm text-muted-foreground">
                {progressPercentage}%
              </span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </CardContent>
        </Card>

        {/* Subjects Section */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-accent" />
            <h3 className="text-lg font-semibold text-foreground">{t('subjects')}</h3>
          </div>

          <div className="grid gap-3">
            {lessons.map((lesson, index) => (
              <Card 
                key={lesson.id}
                variant="interactive"
                className="animate-slide-up"
                style={{ animationDelay: `${0.15 + index * 0.05}s` }}
                onClick={() => handleLessonClick(lesson.id)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-2xl">
                      {lesson.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-foreground truncate">
                        {t(lesson.titleKey)}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        5 {t('quiz')} {t('question')}s
                      </p>
                    </div>
                    <ChevronRight className={`w-5 h-5 text-muted-foreground ${isRTL ? 'rotate-180' : ''}`} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Stage Indicator */}
        <Card variant="accent" className="animate-slide-up" style={{ animationDelay: '0.5s' }}>
          <CardContent className="p-4 text-center">
            <p className="text-sm text-muted-foreground mb-1">{t('petroleumEngineering')}</p>
            <p className="font-bold text-gradient">{t('firstYear')}</p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
