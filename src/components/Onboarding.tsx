import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  BookOpen, 
  Trophy, 
  Bell, 
  ChevronRight, 
  ChevronLeft,
  Rocket,
  Target,
  Sparkles,
  GraduationCap
} from 'lucide-react';

interface OnboardingProps {
  onComplete: () => void;
}

const steps = [
  {
    icon: GraduationCap,
    titleEn: 'Welcome to Drilla-Z!',
    titleAr: 'مرحباً بك في Drilla-Z!',
    descEn: 'Your journey to mastering drilling engineering starts here. Learn at your own pace with our structured curriculum.',
    descAr: 'رحلتك لإتقان هندسة الحفر تبدأ من هنا. تعلّم بوتيرتك الخاصة مع منهجنا المنظم.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: BookOpen,
    titleEn: '3 Levels of Learning',
    titleAr: '3 مستويات تعليمية',
    descEn: 'Progress through Level 1 (Fundamentals), Level 2 (Intermediate), and Level 3 (Advanced) with 20+ lessons each.',
    descAr: 'تقدم عبر المستوى الأول (أساسيات)، الثاني (متوسط)، والثالث (متقدم) مع أكثر من 20 درساً لكل مستوى.',
    color: 'from-green-500 to-emerald-600'
  },
  {
    icon: Target,
    titleEn: '7-Day Weekly Structure',
    titleAr: 'برنامج أسبوعي من 7 أيام',
    descEn: 'Each lesson spans 7 days: 4 days of learning, 1 review day, 1 quiz day, and 1 project day.',
    descAr: 'كل درس يمتد على 7 أيام: 4 أيام تعلم، يوم مراجعة، يوم اختبار، ويوم مشروع.',
    color: 'from-orange-500 to-amber-600'
  },
  {
    icon: Trophy,
    titleEn: 'Earn Badges & Track Progress',
    titleAr: 'اكسب الشارات وتتبع تقدمك',
    descEn: 'Complete lessons to earn achievement badges. Your progress syncs across all your devices.',
    descAr: 'أكمل الدروس لكسب شارات الإنجاز. يتزامن تقدمك عبر جميع أجهزتك.',
    color: 'from-purple-500 to-violet-600'
  },
  {
    icon: Rocket,
    titleEn: 'Ready to Start?',
    titleAr: 'مستعد للبدء؟',
    descEn: 'Begin your drilling engineering journey now. Set daily reminders to stay consistent!',
    descAr: 'ابدأ رحلتك في هندسة الحفر الآن. قم بتفعيل التذكيرات اليومية للاستمرارية!',
    color: 'from-pink-500 to-rose-600'
  }
];

export function Onboarding({ onComplete }: OnboardingProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const { language, isRTL } = useLanguage();

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      localStorage.setItem('onboarding-complete', 'true');
      onComplete();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkip = () => {
    localStorage.setItem('onboarding-complete', 'true');
    onComplete();
  };

  const step = steps[currentStep];
  const StepIcon = step.icon;

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md animate-fade-in">
        <CardContent className="p-6 space-y-6">
          {/* Progress dots */}
          <div className="flex justify-center gap-2">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentStep 
                    ? 'w-6 bg-primary' 
                    : index < currentStep 
                      ? 'bg-primary/50' 
                      : 'bg-muted'
                }`}
              />
            ))}
          </div>

          {/* Icon */}
          <div className="flex justify-center">
            <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
              <StepIcon className="w-12 h-12 text-white" />
            </div>
          </div>

          {/* Content */}
          <div className="text-center space-y-3">
            <h2 className="text-2xl font-bold text-foreground">
              {language === 'ar' ? step.titleAr : step.titleEn}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {language === 'ar' ? step.descAr : step.descEn}
            </p>
          </div>

          {/* Notification toggle on last step */}
          {currentStep === steps.length - 1 && (
            <Card variant="accent" className="cursor-pointer hover:bg-accent/60 transition-colors" onClick={() => {
              if ('Notification' in window) {
                Notification.requestPermission();
              }
            }}>
              <CardContent className="p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Bell className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">
                    {language === 'ar' ? 'تفعيل التذكيرات اليومية' : 'Enable Daily Reminders'}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {language === 'ar' ? 'اضغط هنا للسماح بالإشعارات' : 'Tap here to allow notifications'}
                  </p>
                </div>
                <Sparkles className="w-5 h-5 text-primary" />
              </CardContent>
            </Card>
          )}

          {/* Navigation buttons */}
          <div className="flex gap-3">
            {currentStep > 0 && (
              <Button 
                variant="outline" 
                onClick={handlePrev}
                className="flex-1"
              >
                {isRTL ? <ChevronRight className="w-4 h-4 mr-2" /> : <ChevronLeft className="w-4 h-4 mr-2" />}
                {language === 'ar' ? 'السابق' : 'Back'}
              </Button>
            )}
            <Button 
              onClick={handleNext}
              className={`flex-1 ${currentStep === 0 ? 'w-full' : ''}`}
            >
              {currentStep === steps.length - 1 
                ? (language === 'ar' ? 'ابدأ التعلم!' : "Let's Go!")
                : (language === 'ar' ? 'التالي' : 'Next')
              }
              {currentStep < steps.length - 1 && (
                isRTL ? <ChevronLeft className="w-4 h-4 ml-2" /> : <ChevronRight className="w-4 h-4 ml-2" />
              )}
            </Button>
          </div>

          {/* Skip button */}
          {currentStep < steps.length - 1 && (
            <Button 
              variant="ghost" 
              className="w-full text-muted-foreground"
              onClick={handleSkip}
            >
              {language === 'ar' ? 'تخطي المقدمة' : 'Skip Introduction'}
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
