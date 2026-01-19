import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Smartphone, Monitor, Apple, Chrome, Share2, MoreVertical, Plus, Download, Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Install = () => {
  const { language, isRTL } = useLanguage();
  const navigate = useNavigate();

  const content = {
    ar: {
      title: 'تثبيت التطبيق',
      subtitle: 'ثبّت Drilla-Z على جهازك للوصول السريع والعمل بدون إنترنت',
      benefits: {
        title: 'مميزات التثبيت',
        items: [
          'الوصول السريع من الشاشة الرئيسية',
          'العمل بدون اتصال بالإنترنت',
          'تجربة أسرع وأكثر سلاسة',
          'إشعارات فورية',
        ],
      },
      iphone: {
        title: 'تثبيت على iPhone',
        steps: [
          {
            title: 'افتح Safari',
            description: 'يجب استخدام متصفح Safari (لا يعمل مع Chrome أو Firefox)',
            icon: 'safari',
          },
          {
            title: 'اضغط على زر المشاركة',
            description: 'اضغط على أيقونة المشاركة في شريط الأدوات السفلي',
            icon: 'share',
          },
          {
            title: 'اختر "إضافة إلى الشاشة الرئيسية"',
            description: 'مرر لأسفل في القائمة واختر "Add to Home Screen"',
            icon: 'add',
          },
          {
            title: 'اضغط "إضافة"',
            description: 'اختر اسماً للتطبيق واضغط "Add" في الزاوية العليا',
            icon: 'confirm',
          },
        ],
      },
      android: {
        title: 'تثبيت على Android',
        steps: [
          {
            title: 'افتح Chrome',
            description: 'استخدم متصفح Chrome للحصول على أفضل تجربة',
            icon: 'chrome',
          },
          {
            title: 'اضغط على القائمة',
            description: 'اضغط على النقاط الثلاث في الزاوية العليا',
            icon: 'menu',
          },
          {
            title: 'اختر "تثبيت التطبيق"',
            description: 'أو "Add to Home Screen" إذا لم يظهر خيار التثبيت',
            icon: 'install',
          },
          {
            title: 'أكد التثبيت',
            description: 'اضغط "Install" لإضافة التطبيق لشاشتك الرئيسية',
            icon: 'confirm',
          },
        ],
      },
      desktop: {
        title: 'تثبيت على الكمبيوتر',
        steps: [
          {
            title: 'افتح Chrome أو Edge',
            description: 'استخدم متصفح يدعم تثبيت التطبيقات',
            icon: 'browser',
          },
          {
            title: 'ابحث عن أيقونة التثبيت',
            description: 'ستظهر أيقونة في شريط العنوان أو اضغط على القائمة',
            icon: 'search',
          },
          {
            title: 'اضغط "تثبيت"',
            description: 'اختر "Install" من النافذة المنبثقة',
            icon: 'install',
          },
          {
            title: 'افتح من سطح المكتب',
            description: 'ستجد التطبيق في قائمة البرامج أو سطح المكتب',
            icon: 'desktop',
          },
        ],
      },
      backToHome: 'العودة للرئيسية',
    },
    en: {
      title: 'Install App',
      subtitle: 'Install Drilla-Z on your device for quick access and offline use',
      benefits: {
        title: 'Installation Benefits',
        items: [
          'Quick access from home screen',
          'Works without internet connection',
          'Faster and smoother experience',
          'Instant notifications',
        ],
      },
      iphone: {
        title: 'Install on iPhone',
        steps: [
          {
            title: 'Open Safari',
            description: 'Must use Safari browser (not Chrome or Firefox)',
            icon: 'safari',
          },
          {
            title: 'Tap the Share button',
            description: 'Tap the share icon in the bottom toolbar',
            icon: 'share',
          },
          {
            title: 'Select "Add to Home Screen"',
            description: 'Scroll down in the menu and select "Add to Home Screen"',
            icon: 'add',
          },
          {
            title: 'Tap "Add"',
            description: 'Choose a name for the app and tap "Add" in the top corner',
            icon: 'confirm',
          },
        ],
      },
      android: {
        title: 'Install on Android',
        steps: [
          {
            title: 'Open Chrome',
            description: 'Use Chrome browser for the best experience',
            icon: 'chrome',
          },
          {
            title: 'Tap the Menu',
            description: 'Tap the three dots in the top corner',
            icon: 'menu',
          },
          {
            title: 'Select "Install App"',
            description: 'Or "Add to Home Screen" if install option not shown',
            icon: 'install',
          },
          {
            title: 'Confirm Installation',
            description: 'Tap "Install" to add the app to your home screen',
            icon: 'confirm',
          },
        ],
      },
      desktop: {
        title: 'Install on Desktop',
        steps: [
          {
            title: 'Open Chrome or Edge',
            description: 'Use a browser that supports app installation',
            icon: 'browser',
          },
          {
            title: 'Look for the Install Icon',
            description: 'An icon will appear in the address bar or tap the menu',
            icon: 'search',
          },
          {
            title: 'Click "Install"',
            description: 'Select "Install" from the popup window',
            icon: 'install',
          },
          {
            title: 'Open from Desktop',
            description: 'Find the app in your programs menu or desktop',
            icon: 'desktop',
          },
        ],
      },
      backToHome: 'Back to Home',
    },
  };

  const t = content[language];

  const getStepIcon = (icon: string) => {
    const iconClass = "w-6 h-6";
    switch (icon) {
      case 'safari':
        return <div className={`${iconClass} bg-blue-500 rounded-lg flex items-center justify-center text-white text-xs font-bold`}>S</div>;
      case 'share':
        return <Share2 className={`${iconClass} text-blue-500`} />;
      case 'add':
        return <Plus className={`${iconClass} text-green-500`} />;
      case 'confirm':
        return <div className={`${iconClass} bg-green-500 rounded-full flex items-center justify-center text-white text-xs`}>✓</div>;
      case 'chrome':
        return <Chrome className={`${iconClass} text-yellow-500`} />;
      case 'menu':
        return <MoreVertical className={`${iconClass} text-gray-600`} />;
      case 'install':
        return <Download className={`${iconClass} text-blue-500`} />;
      case 'browser':
        return <Monitor className={`${iconClass} text-gray-600`} />;
      case 'search':
        return <div className={`${iconClass} bg-gray-200 rounded flex items-center justify-center text-gray-600 text-xs`}>+</div>;
      case 'desktop':
        return <Monitor className={`${iconClass} text-green-500`} />;
      default:
        return null;
    }
  };

  const InstallSteps = ({ steps, platform }: { steps: typeof t.iphone.steps, platform: string }) => (
    <div className="space-y-4">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`flex items-start gap-4 p-4 bg-muted/50 rounded-lg ${isRTL ? 'flex-row-reverse text-right' : ''}`}
        >
          <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm`}>
            {index + 1}
          </div>
          <div className="flex-1">
            <div className={`flex items-center gap-2 mb-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
              {getStepIcon(step.icon)}
              <h4 className="font-semibold text-foreground">{step.title}</h4>
            </div>
            <p className="text-muted-foreground text-sm">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/')}
            className={isRTL ? 'rotate-180' : ''}
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-bold text-foreground">{t.title}</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Subtitle */}
        <p className={`text-lg text-muted-foreground mb-8 ${isRTL ? 'text-right' : ''}`}>
          {t.subtitle}
        </p>

        {/* Benefits */}
        <Card className="mb-8 border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Smartphone className="w-5 h-5 text-primary" />
              {t.benefits.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-3 ${isRTL ? 'text-right' : ''}`}>
              {t.benefits.items.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* iPhone Instructions */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-800 to-gray-600 flex items-center justify-center">
                <Apple className="w-6 h-6 text-white" />
              </div>
              {t.iphone.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <InstallSteps steps={t.iphone.steps} platform="iphone" />
          </CardContent>
        </Card>

        {/* Android Instructions */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              {t.android.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <InstallSteps steps={t.android.steps} platform="android" />
          </CardContent>
        </Card>

        {/* Desktop Instructions */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <Monitor className="w-6 h-6 text-white" />
              </div>
              {t.desktop.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <InstallSteps steps={t.desktop.steps} platform="desktop" />
          </CardContent>
        </Card>

        {/* Back Button */}
        <div className="text-center">
          <Button onClick={() => navigate('/')} size="lg">
            {t.backToHome}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Install;
