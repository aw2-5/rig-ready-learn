import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Trophy, Star, ArrowRight, Sparkles } from 'lucide-react';

interface LevelCompletionModalProps {
  isOpen: boolean;
  onClose: () => void;
  level: number;
  averageScore?: number;
  onGoToNextLevel: () => void;
}

export function LevelCompletionModal({
  isOpen,
  onClose,
  level,
  averageScore,
  onGoToNextLevel,
}: LevelCompletionModalProps) {
  const { language } = useLanguage();

  const texts = {
    ar: {
      congratulations: '🎉 مبروك!',
      completedLevel: `أكملت المستوى ${level === 1 ? 'الأول' : 'الثاني'} بنجاح!`,
      averageScore: 'متوسط درجاتك',
      goToNextLevel: 'انتقل للمستوى الثاني',
      close: 'إغلاق',
      achievement: 'إنجاز رائع! أنت مستعد للمرحلة التالية',
      allLevelsComplete: 'أكملت جميع المستويات المتاحة!',
    },
    en: {
      congratulations: '🎉 Congratulations!',
      completedLevel: `You have completed Level ${level}!`,
      averageScore: 'Your average score',
      goToNextLevel: 'Go to Level 2',
      close: 'Close',
      achievement: 'Great achievement! You are ready for the next stage',
      allLevelsComplete: 'You have completed all available levels!',
    },
  };

  const t = texts[language];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-sm mx-auto bg-card border-border">
        <DialogHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center animate-pulse">
                <Trophy className="w-12 h-12 text-accent-foreground" />
              </div>
              <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-accent animate-bounce" />
              <Star className="absolute -bottom-1 -left-1 w-6 h-6 text-primary animate-bounce" style={{ animationDelay: '0.2s' }} />
            </div>
          </div>
          <DialogTitle className="text-2xl font-bold text-foreground">
            {t.congratulations}
          </DialogTitle>
        </DialogHeader>

        <div className="text-center space-y-4 py-4">
          <p className="text-lg text-foreground font-medium">
            {t.completedLevel}
          </p>
          
          {averageScore !== undefined && (
            <div className="bg-secondary/50 rounded-xl p-4">
              <p className="text-sm text-muted-foreground">{t.averageScore}</p>
              <p className="text-3xl font-bold text-gradient">{averageScore}%</p>
            </div>
          )}

          <p className="text-sm text-muted-foreground">
            {level === 1 ? t.achievement : t.allLevelsComplete}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          {level === 1 && (
            <Button onClick={onGoToNextLevel} className="w-full gap-2">
              {t.goToNextLevel}
              <ArrowRight className="w-4 h-4" />
            </Button>
          )}
          <Button variant="outline" onClick={onClose} className="w-full">
            {t.close}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
