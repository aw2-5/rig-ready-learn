import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Smartphone, Apple, Download, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Install = () => {
  const { language, isRTL } = useLanguage();
  const navigate = useNavigate();

  const content = {
    ar: {
      title: 'تحميل التطبيق',
      subtitle: 'حمّل Drilla-Z على جهازك',
      android: {
        title: 'تحميل على Android',
        description: 'اضغط على الزر أدناه لتحميل التطبيق مباشرة',
        button: 'تحميل APK',
      },
      iphone: {
        title: 'تثبيت على iPhone',
        description: 'شاهد الفيديو التالي لمعرفة طريقة التثبيت على الايفون',
      },
      backToHome: 'العودة للرئيسية',
    },
    en: {
      title: 'Download App',
      subtitle: 'Download Drilla-Z on your device',
      android: {
        title: 'Download on Android',
        description: 'Tap the button below to download the app directly',
        button: 'Download APK',
      },
      iphone: {
        title: 'Install on iPhone',
        description: 'Watch the video below to learn how to install on iPhone',
      },
      backToHome: 'Back to Home',
    },
  };

  const t = content[language];

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
        <p className={`text-lg text-muted-foreground mb-8 ${isRTL ? 'text-right' : ''}`}>
          {t.subtitle}
        </p>

        {/* Android Download */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              {t.android.title}
            </CardTitle>
          </CardHeader>
          <CardContent className={`space-y-4 ${isRTL ? 'text-right' : ''}`}>
            <p className="text-muted-foreground">{t.android.description}</p>
            <a
              href="https://mediafire.com/file/ieytq8bfqc9a1k0/drill+A_Z.apk/file"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="gap-2 w-full sm:w-auto">
                <Download className="w-5 h-5" />
                {t.android.button}
              </Button>
            </a>
          </CardContent>
        </Card>

        {/* iPhone Video */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-800 to-gray-600 flex items-center justify-center">
                <Apple className="w-6 h-6 text-white" />
              </div>
              {t.iphone.title}
            </CardTitle>
          </CardHeader>
          <CardContent className={`space-y-4 ${isRTL ? 'text-right' : ''}`}>
            <p className="text-muted-foreground">{t.iphone.description}</p>
            <div className="rounded-xl overflow-hidden border bg-black flex justify-center">
              <video
                controls
                playsInline
                preload="metadata"
                className="w-full max-w-sm rounded-xl"
                style={{ maxHeight: '600px' }}
              >
                <source src="/videos/ios-install.mp4" type="video/mp4" />
              </video>
            </div>
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
