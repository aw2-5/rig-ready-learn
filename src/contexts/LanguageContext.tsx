import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Auth
    'welcome': 'Welcome to',
    'appName': 'PetroLearn',
    'appTagline': 'Your gateway to Petroleum Engineering',
    'selectLanguage': 'Select your language',
    'continueAsGuest': 'Continue as Guest',
    'loginWithEmail': 'Login with Email',
    'email': 'Email',
    'password': 'Password',
    'login': 'Login',
    'orContinueWith': 'or continue with',
    'guest': 'Guest Mode',
    // Home
    'firstYear': 'First Year',
    'petroleumEngineering': 'Petroleum Engineering',
    'welcomeBack': 'Welcome back',
    'student': 'Student',
    'subjects': 'Subjects',
    'progress': 'Progress',
    'lessons': 'lessons',
    // Subjects
    'intro': 'Introduction to Petroleum Engineering',
    'drilling': 'Basics of Drilling',
    'wells': 'Types of Wells',
    'rig': 'Drilling Rig Overview',
    'units': 'Units & Measurements',
    'terminology': 'Basic Drilling Terminology',
    // Level 2 Lessons
    'hoistingAdvanced': 'Hoisting System – Advanced',
    'rotarySystems': 'Rotary Systems',
    'drillstringBHA': 'Drill String & BHA Design',
    'drillBitsAdvanced': 'Drill Bits – Advanced',
    'bopSystems': 'BOP Systems & Testing',
    'drillingFluids2': 'Drilling Fluids – Level 2',
    'hydraulicsFlow': 'Hydraulics & Drillstring Flow',
    'holeCleaning': 'Hole Cleaning & Cuttings Handling',
    'pressureECD': 'Pressure & ECD Calculations',
    'kickDetection': 'Kick Detection & Well Control',
    'casingCementing': 'Casing, Cementing & QA/QC',
    'drillingProblems': 'Drilling Problems & Remedial Actions',
    'directionalDrilling': 'Directional & Horizontal Drilling',
    // Year selector
    'secondYear': 'Second Year',
    'level': 'Level',
    'comingSoon': 'Coming Soon',
    'contentPlaceholder': 'Content will be added soon',
    // Lesson
    'definition': 'Definition',
    'explanation': 'Explanation',
    'summary': 'Summary',
    'quiz': 'Quiz',
    'question': 'Question',
    'of': 'of',
    'next': 'Next',
    'previous': 'Previous',
    'finish': 'Finish Quiz',
    'score': 'Your Score',
    'correct': 'Correct',
    'incorrect': 'Incorrect',
    'tryAgain': 'Try Again',
    'backToHome': 'Back to Home',
    'switchLanguage': 'العربية',
    // Weekly
    'day': 'Day',
    'project': 'Project',
    'weekProgress': 'Week Progress',
    'weekComplete': 'Week completed! Great job!',
    'keepLearning': 'Keep learning to complete the week',
    'keyTerms': 'Key Terms',
    'practiceQuestion': 'Practice Question',
    'completeDay': 'Complete Day',
    'dayCompleted': 'Day Completed',
    'weeklyQuiz': 'Weekly Quiz',
    'quizComplete': 'Quiz Complete',
    'greatJob': 'Great job!',
    'keepPracticing': 'Keep practicing to improve',
    'miniProject': 'Mini Project',
    'instructions': 'Instructions',
    'textSubmission': 'Text Submission',
    'imageSubmission': 'Image Submission',
    'writeYourAnswer': 'Write your answer here...',
    'characters': 'characters',
    'minimum': 'minimum',
    'uploadImage': 'Click or drag to upload image',
    'submitProject': 'Submit Project',
    'projectSubmitted': 'Project Submitted!',
    'projectSubmittedDesc': 'Your project has been saved successfully.',
    // Navigation
    'home': 'Home',
    'profile': 'Profile',
    'settings': 'Settings',
    'logout': 'Logout',
  },
  ar: {
    // Auth
    'welcome': 'مرحباً بك في',
    'appName': 'بترو ليرن',
    'appTagline': 'بوابتك إلى هندسة النفط',
    'selectLanguage': 'اختر لغتك',
    'continueAsGuest': 'المتابعة كضيف',
    'loginWithEmail': 'تسجيل الدخول بالبريد',
    'email': 'البريد الإلكتروني',
    'password': 'كلمة المرور',
    'login': 'دخول',
    'orContinueWith': 'أو تابع بـ',
    'guest': 'وضع الضيف',
    // Home
    'firstYear': 'السنة الأولى',
    'petroleumEngineering': 'هندسة النفط',
    'welcomeBack': 'مرحباً بعودتك',
    'student': 'طالب',
    'subjects': 'المواد',
    'progress': 'التقدم',
    'lessons': 'دروس',
    // Subjects
    'intro': 'مقدمة في هندسة النفط',
    'drilling': 'أساسيات الحفر',
    'wells': 'أنواع الآبار',
    'rig': 'نظرة عامة على جهاز الحفر',
    'units': 'الوحدات والقياسات',
    'terminology': 'مصطلحات الحفر الأساسية',
    // Level 2 Lessons
    'hoistingAdvanced': 'نظام الرفع – متقدم',
    'rotarySystems': 'أنظمة الدوران',
    'drillstringBHA': 'تصميم سلسلة الحفر و BHA',
    'drillBitsAdvanced': 'رؤوس الحفر – متقدم',
    'bopSystems': 'أنظمة مانع الانفجار والاختبار',
    'drillingFluids2': 'سوائل الحفر – المستوى 2',
    'hydraulicsFlow': 'الهيدروليكا وتدفق سلسلة الحفر',
    'holeCleaning': 'تنظيف الحفرة ومعالجة الفتات',
    'pressureECD': 'حسابات الضغط و ECD',
    'kickDetection': 'كشف الكيك والتحكم بالبئر',
    'casingCementing': 'التغليف والتسميت وضمان الجودة',
    'drillingProblems': 'مشاكل الحفر والإجراءات العلاجية',
    'directionalDrilling': 'الحفر الموجه والأفقي',
    // Year selector
    'secondYear': 'السنة الثانية',
    'level': 'المستوى',
    'comingSoon': 'قريباً',
    'contentPlaceholder': 'سيتم إضافة المحتوى قريباً',
    // Lesson
    'definition': 'التعريف',
    'explanation': 'الشرح',
    'summary': 'الملخص',
    'quiz': 'اختبار',
    'question': 'السؤال',
    'of': 'من',
    'next': 'التالي',
    'previous': 'السابق',
    'finish': 'إنهاء الاختبار',
    'score': 'نتيجتك',
    'correct': 'صحيح',
    'incorrect': 'خطأ',
    'tryAgain': 'حاول مرة أخرى',
    'backToHome': 'العودة للرئيسية',
    'switchLanguage': 'English',
    // Weekly
    'day': 'اليوم',
    'project': 'مشروع',
    'weekProgress': 'تقدم الأسبوع',
    'weekComplete': 'اكتمل الأسبوع! أحسنت!',
    'keepLearning': 'استمر في التعلم لإكمال الأسبوع',
    'keyTerms': 'المصطلحات الرئيسية',
    'practiceQuestion': 'سؤال تدريبي',
    'completeDay': 'إكمال اليوم',
    'dayCompleted': 'اكتمل اليوم',
    'weeklyQuiz': 'اختبار الأسبوع',
    'quizComplete': 'اكتمل الاختبار',
    'greatJob': 'أحسنت!',
    'keepPracticing': 'استمر في التدرب للتحسن',
    'miniProject': 'مشروع صغير',
    'instructions': 'التعليمات',
    'textSubmission': 'تقديم نصي',
    'imageSubmission': 'تقديم صورة',
    'writeYourAnswer': 'اكتب إجابتك هنا...',
    'characters': 'حرف',
    'minimum': 'الحد الأدنى',
    'uploadImage': 'انقر أو اسحب لرفع صورة',
    'submitProject': 'تقديم المشروع',
    'projectSubmitted': 'تم تقديم المشروع!',
    'projectSubmittedDesc': 'تم حفظ مشروعك بنجاح.',
    // Navigation
    'home': 'الرئيسية',
    'profile': 'الملف الشخصي',
    'settings': 'الإعدادات',
    'logout': 'خروج',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    const saved = localStorage.getItem('petrolearn-language') as Language;
    if (saved) {
      setLanguageState(saved);
    }
  }, []);

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    localStorage.setItem('petrolearn-language', language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const isRTL = language === 'ar';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
