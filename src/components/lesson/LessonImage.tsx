import { useLanguage } from '@/contexts/LanguageContext';

// Lesson images mapping
import introPetroleumImage from '@/assets/lessons/intro-petroleum-engineering.jpg';
import drillingBasicsImage from '@/assets/lessons/drilling-basics.jpg';
import typesOfWellsImage from '@/assets/lessons/types-of-wells.jpg';
import drillingRigImage from '@/assets/lessons/drilling-rig-overview.jpg';
import unitsMeasurementsImage from '@/assets/lessons/units-measurements.jpg';
import drillingTerminologyImage from '@/assets/lessons/drilling-terminology.jpg';

const lessonImages: Record<string, string> = {
  'intro': introPetroleumImage,
  'drilling': drillingBasicsImage,
  'wells': typesOfWellsImage,
  'rig': drillingRigImage,
  'units': unitsMeasurementsImage,
  'terminology': drillingTerminologyImage,
};

const lessonImageAlt: Record<string, { ar: string; en: string }> = {
  'intro': {
    ar: 'رسم توضيحي لمراحل هندسة النفط: الاستكشاف والحفر والإنتاج',
    en: 'Petroleum Engineering Overview: Exploration, Drilling, and Production stages'
  },
  'drilling': {
    ar: 'رسم توضيحي لعملية الحفر ودورة سائل الحفر',
    en: 'Drilling Process Illustration showing mud circulation system'
  },
  'wells': {
    ar: 'أنواع الآبار: العمودي والموجه والأفقي ومتعدد الفروع',
    en: 'Types of Wells: Vertical, Directional, Horizontal, and Multilateral'
  },
  'rig': {
    ar: 'مكونات جهاز الحفر الرئيسية',
    en: 'Main Drilling Rig Components'
  },
  'units': {
    ar: 'وحدات القياس في هندسة النفط',
    en: 'Petroleum Engineering Units and Measurements'
  },
  'terminology': {
    ar: 'المصطلحات الأساسية في الحفر',
    en: 'Basic Drilling Terminology Visual Glossary'
  },
};

interface LessonImageProps {
  lessonId: string;
  className?: string;
}

export function LessonImage({ lessonId, className = '' }: LessonImageProps) {
  const { language } = useLanguage();
  
  const imageSrc = lessonImages[lessonId];
  const altText = lessonImageAlt[lessonId];
  
  if (!imageSrc || !altText) {
    return null;
  }

  return (
    <div className={`rounded-xl overflow-hidden border border-border shadow-lg ${className}`}>
      <img
        src={imageSrc}
        alt={altText[language]}
        className="w-full h-auto object-cover"
        loading="lazy"
      />
      <div className="bg-card/80 backdrop-blur-sm px-3 py-2 border-t border-border">
        <p className="text-xs text-muted-foreground text-center">
          {altText[language]}
        </p>
      </div>
    </div>
  );
}
