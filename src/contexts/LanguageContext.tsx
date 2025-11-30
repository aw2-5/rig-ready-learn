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
    'tryAgain': 'Try Again',
    'backToHome': 'Back to Home',
    'switchLanguage': 'العربية',
    
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
    'tryAgain': 'حاول مرة أخرى',
    'backToHome': 'العودة للرئيسية',
    'switchLanguage': 'English',
    
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
