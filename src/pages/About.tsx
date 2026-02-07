import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import {
  ArrowLeft,
  ArrowRight,
  Globe,
  BookOpen,
  GraduationCap,
  Calendar,
  Languages,
  Bot,
  Trophy,
  WifiOff,
  Search,
  Droplets,
} from 'lucide-react';

const aboutContent = {
  en: {
    title: 'About Drill A to Z',
    subtitle: 'Your Complete Drilling Engineering Learning Platform',
    sections: [
      {
        icon: 'BookOpen',
        title: 'About the App',
        description:
          'Drill A to Z is a specialized educational platform designed for Petroleum Engineering students and professionals. It provides a comprehensive, structured curriculum covering all aspects of drilling engineering — from foundational concepts to professional-level expertise.',
      },
      {
        icon: 'GraduationCap',
        title: 'Curriculum Structure',
        description:
          'The curriculum spans 3 progressive levels with 39 total lessons:\n• Level 1 — Foundations (6 lessons): Introduction to Petroleum Engineering, Basics of Drilling, Types of Wells, Drilling Rig Overview, Units & Measurements, and Basic Terminology.\n• Level 2 — Advanced (13 lessons): Hoisting Systems, Rotary Systems, Drill String & BHA, Drill Bits, BOP Systems, Drilling Fluids, Hydraulics, Hole Cleaning, Pressure & ECD, Kick Detection, Casing & Cementing, Drilling Problems, and Directional Drilling.\n• Level 3 — Professional (20 lessons): Topics include MPD, HPHT Drilling, ERD, Multilateral Wells, Coiled Tubing, Deepwater Drilling, Automation, Well Integrity, and more.',
      },
      {
        icon: 'Calendar',
        title: '7-Day Study Program',
        description:
          'Each lesson follows a structured weekly cycle:\n• Days 1–5: In-depth theoretical content with key terms and a daily practice question.\n• Day 6: Comprehensive quiz with 10 questions to test your understanding.\n• Day 7: Hands-on mini project requiring text or image submission to apply what you learned.',
      },
      {
        icon: 'Languages',
        title: 'Bilingual Support',
        description:
          'Full Arabic and English support with instant language switching. The entire interface, content, quizzes, and projects are available in both languages with proper RTL layout for Arabic.',
      },
      {
        icon: 'Bot',
        title: 'AI Tutor',
        description:
          'An integrated AI assistant specialized in drilling engineering. Ask questions, get explanations, and deepen your understanding of any topic within the curriculum. Available directly inside each lesson for contextual help.',
      },
      {
        icon: 'Trophy',
        title: 'Gamification & Motivation',
        description:
          'Stay motivated with a comprehensive reward system:\n• XP Points: Earn experience for every activity.\n• Daily Streaks: Maintain consecutive study days.\n• Achievement Badges: Unlock milestones like Flame Starter, Week Warrior, Monthly Master, and more.\n• Daily Challenges: Fresh questions every day.\n• Speed Quiz: Race against time for bonus points.',
      },
      {
        icon: 'WifiOff',
        title: 'Offline Access',
        description:
          'Install the app on your device and study anytime, anywhere — even without internet. Your progress is saved locally and automatically syncs to the cloud when you reconnect.',
      },
      {
        icon: 'Search',
        title: 'Smart Search',
        description:
          'Powerful multi-language search across all lessons, terms, and content. Quickly find any topic or terminology in both Arabic and English.',
      },
    ],
  },
  ar: {
    title: 'حول Drill A to Z',
    subtitle: 'منصتك الشاملة لتعلم هندسة الحفر',
    sections: [
      {
        icon: 'BookOpen',
        title: 'عن التطبيق',
        description:
          'Drill A to Z هو منصة تعليمية متخصصة مصممة لطلاب ومهندسي هندسة النفط. يوفر منهجًا دراسيًا شاملاً ومنظمًا يغطي جميع جوانب هندسة الحفر — من المفاهيم الأساسية إلى المستوى الاحترافي.',
      },
      {
        icon: 'GraduationCap',
        title: 'المنهج الدراسي',
        description:
          'يمتد المنهج على 3 مستويات تدريجية بإجمالي 39 درسًا:\n• المستوى الأول — الأساسيات (6 دروس): مقدمة في هندسة النفط، أساسيات الحفر، أنواع الآبار، نظرة عامة على جهاز الحفر، الوحدات والقياسات، والمصطلحات الأساسية.\n• المستوى الثاني — المتقدم (13 درسًا): أنظمة الرفع، أنظمة الدوران، سلسلة الحفر و BHA، رؤوس الحفر، مانع الانفجار، سوائل الحفر، الهيدروليكا، تنظيف الحفرة، حسابات الضغط و ECD، كشف الكيك، التغليف والتسميت، مشاكل الحفر، والحفر الموجه.\n• المستوى الثالث — الاحترافي (20 درسًا): يشمل MPD، حفر HPHT، الحفر الممتد ERD، الآبار متعددة الفروع، الحفر بالأنبوب الملفوف، الحفر في المياه العميقة، الأتمتة، سلامة البئر، والمزيد.',
      },
      {
        icon: 'Calendar',
        title: 'برنامج الدراسة الأسبوعي',
        description:
          'كل درس يتبع دورة أسبوعية منظمة:\n• الأيام 1–5: محتوى نظري متعمق مع مصطلحات رئيسية وسؤال تدريبي يومي.\n• اليوم 6: اختبار شامل من 10 أسئلة لقياس فهمك.\n• اليوم 7: مشروع تطبيقي صغير يتطلب تقديم نص أو صورة لتطبيق ما تعلمته.',
      },
      {
        icon: 'Languages',
        title: 'دعم ثنائي اللغة',
        description:
          'دعم كامل للعربية والإنجليزية مع تبديل فوري بين اللغتين. الواجهة بالكامل، المحتوى، الاختبارات، والمشاريع متوفرة بكلتا اللغتين مع تخطيط RTL مناسب للعربية.',
      },
      {
        icon: 'Bot',
        title: 'المساعد الذكي',
        description:
          'مساعد ذكاء اصطناعي متكامل متخصص في هندسة الحفر. اسأل أسئلة، احصل على شروحات، وعمّق فهمك لأي موضوع في المنهج. متاح مباشرة داخل كل درس للمساعدة السياقية.',
      },
      {
        icon: 'Trophy',
        title: 'التحفيز والإنجازات',
        description:
          'ابقَ متحفزًا مع نظام مكافآت شامل:\n• نقاط XP: اكسب خبرة عن كل نشاط.\n• سلاسل يومية: حافظ على أيام دراسة متتالية.\n• شارات الإنجاز: افتح إنجازات مثل بداية اللهب، محارب الأسبوع، سيد الشهر، والمزيد.\n• تحديات يومية: أسئلة جديدة كل يوم.\n• اختبار السرعة: سابق الوقت واحصل على نقاط إضافية.',
      },
      {
        icon: 'WifiOff',
        title: 'العمل بدون إنترنت',
        description:
          'ثبّت التطبيق على جهازك وادرس في أي وقت وأي مكان — حتى بدون إنترنت. يتم حفظ تقدمك محليًا ومزامنته تلقائيًا مع السحابة عند إعادة الاتصال.',
      },
      {
        icon: 'Search',
        title: 'البحث المتقدم',
        description:
          'بحث قوي متعدد اللغات في جميع الدروس والمصطلحات والمحتوى. ابحث بسرعة عن أي موضوع أو مصطلح باللغتين العربية والإنجليزية.',
      },
    ],
  },
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BookOpen,
  GraduationCap,
  Calendar,
  Languages,
  Bot,
  Trophy,
  WifiOff,
  Search,
};

export default function About() {
  const { language, setLanguage, isRTL } = useLanguage();
  const navigate = useNavigate();
  const content = aboutContent[language];
  const BackArrow = isRTL ? ArrowRight : ArrowLeft;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 glass-header">
        <div className="container max-w-lg mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
              <BackArrow className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg gradient-accent flex items-center justify-center">
                <Droplets className="w-4 h-4 text-accent-foreground" />
              </div>
              <span className="font-bold text-foreground text-sm">Drill A to Z</span>
            </div>
            <div className="flex items-center gap-1">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              >
                <Globe className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container max-w-lg mx-auto px-4 py-6 space-y-6">
        {/* Hero */}
        <div className="text-center space-y-2 animate-fade-in">
          <div className="w-16 h-16 rounded-2xl gradient-accent flex items-center justify-center mx-auto shadow-glow">
            <Droplets className="w-8 h-8 text-accent-foreground" />
          </div>
          <h1 className="text-2xl font-bold text-foreground">{content.title}</h1>
          <p className="text-sm text-muted-foreground">{content.subtitle}</p>
        </div>

        {/* Feature Cards */}
        {content.sections.map((section, index) => {
          const Icon = iconMap[section.icon] || BookOpen;
          return (
            <Card
              key={index}
              variant="glass"
              className="animate-fade-in"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <CardContent className="p-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl gradient-accent flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-foreground mb-2">{section.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                      {section.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}

        {/* Footer */}
        <div className="text-center py-4">
          <p className="text-xs text-muted-foreground">
            {language === 'ar'
              ? '© 2025 Drill A to Z — جميع الحقوق محفوظة'
              : '© 2025 Drill A to Z — All Rights Reserved'}
          </p>
        </div>
      </main>
    </div>
  );
}
