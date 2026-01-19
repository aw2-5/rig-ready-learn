import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const defaultMeta = {
  en: {
    title: 'Drilla-Z - Drilling Engineering Learning Platform',
    description: 'Master petroleum and drilling engineering with interactive bilingual lessons in Arabic and English. 3 levels, 60+ lessons, quizzes, and projects.',
    keywords: 'drilling engineering, petroleum engineering, oil and gas education, drilling fundamentals, well control, Arabic engineering courses, تعلم هندسة الحفر'
  },
  ar: {
    title: 'Drilla-Z - منصة تعلم هندسة الحفر',
    description: 'أتقن هندسة النفط والحفر مع دروس تفاعلية ثنائية اللغة بالعربية والإنجليزية. 3 مستويات، أكثر من 60 درس، اختبارات ومشاريع.',
    keywords: 'هندسة الحفر، هندسة النفط، تعليم النفط والغاز، أساسيات الحفر، التحكم بالبئر، drilling engineering'
  }
};

export function SEOHead({ 
  title, 
  description, 
  keywords,
  image = 'https://drilla-z.lovable.app/favicon.png',
  url = 'https://drilla-z.lovable.app',
  type = 'website'
}: SEOHeadProps) {
  const { language } = useLanguage();
  const defaults = defaultMeta[language];
  
  const pageTitle = title ? `${title} | Drilla-Z` : defaults.title;
  const pageDescription = description || defaults.description;
  const pageKeywords = keywords || defaults.keywords;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="title" content={pageTitle} />
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      <meta name="language" content={language} />
      <html lang={language} dir={language === 'ar' ? 'rtl' : 'ltr'} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content={language === 'ar' ? 'ar_SA' : 'en_US'} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Drilla-Z" />
      <link rel="canonical" href={url} />
    </Helmet>
  );
}
