export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface Lesson {
  id: string;
  titleKey: string;
  icon: string;
  year: number;
  content: {
    en: { title: string; definition: string; explanation: string; summary: string };
    ar: { title: string; definition: string; explanation: string; summary: string };
  };
  quiz: {
    en: QuizQuestion[];
    ar: QuizQuestion[];
  };
}

// Level 3 - Advanced Drilling Operations (20 Topics)
export const lessonsYear3: Lesson[] = [
  {
    id: 'well-control-advanced',
    titleKey: 'التحكم المتقدم بالبئر',
    icon: '🛡️',
    year: 3,
    content: {
      en: { title: 'Advanced Well Control', definition: '', explanation: '', summary: '' },
      ar: { title: 'التحكم المتقدم بالبئر', definition: '', explanation: '', summary: '' }
    },
    quiz: { en: [], ar: [] }
  },
  {
    id: 'managed-pressure-drilling',
    titleKey: 'الحفر بالضغط المُدار',
    icon: '🎯',
    year: 3,
    content: {
      en: { title: 'Managed Pressure Drilling (MPD)', definition: '', explanation: '', summary: '' },
      ar: { title: 'الحفر بالضغط المُدار', definition: '', explanation: '', summary: '' }
    },
    quiz: { en: [], ar: [] }
  },
  {
    id: 'underbalanced-drilling',
    titleKey: 'الحفر تحت التوازن',
    icon: '⚖️',
    year: 3,
    content: {
      en: { title: 'Underbalanced Drilling (UBD)', definition: '', explanation: '', summary: '' },
      ar: { title: 'الحفر تحت التوازن', definition: '', explanation: '', summary: '' }
    },
    quiz: { en: [], ar: [] }
  },
  {
    id: 'extended-reach-drilling',
    titleKey: 'الحفر الممتد المدى',
    icon: '📏',
    year: 3,
    content: {
      en: { title: 'Extended Reach Drilling (ERD)', definition: '', explanation: '', summary: '' },
      ar: { title: 'الحفر الممتد المدى', definition: '', explanation: '', summary: '' }
    },
    quiz: { en: [], ar: [] }
  },
  {
    id: 'horizontal-drilling',
    titleKey: 'الحفر الأفقي',
    icon: '↔️',
    year: 3,
    content: {
      en: { title: 'Horizontal Drilling', definition: '', explanation: '', summary: '' },
      ar: { title: 'الحفر الأفقي', definition: '', explanation: '', summary: '' }
    },
    quiz: { en: [], ar: [] }
  },
  {
    id: 'multilateral-wells',
    titleKey: 'الآبار متعددة الفروع',
    icon: '🌿',
    year: 3,
    content: {
      en: { title: 'Multilateral Wells', definition: '', explanation: '', summary: '' },
      ar: { title: 'الآبار متعددة الفروع', definition: '', explanation: '', summary: '' }
    },
    quiz: { en: [], ar: [] }
  },
  {
    id: 'coiled-tubing-drilling',
    titleKey: 'الحفر بالأنابيب الملفوفة',
    icon: '🔄',
    year: 3,
    content: {
      en: { title: 'Coiled Tubing Drilling', definition: '', explanation: '', summary: '' },
      ar: { title: 'الحفر بالأنابيب الملفوفة', definition: '', explanation: '', summary: '' }
    },
    quiz: { en: [], ar: [] }
  },
  {
    id: 'fishing-operations',
    titleKey: 'عمليات الصيد',
    icon: '🎣',
    year: 3,
    content: {
      en: { title: 'Fishing Operations', definition: '', explanation: '', summary: '' },
      ar: { title: 'عمليات الصيد', definition: '', explanation: '', summary: '' }
    },
    quiz: { en: [], ar: [] }
  },
  {
    id: 'stuck-pipe-prevention',
    titleKey: 'منع انحشار الأنابيب',
    icon: '🚫',
    year: 3,
    content: {
      en: { title: 'Stuck Pipe Prevention & Remediation', definition: '', explanation: '', summary: '' },
      ar: { title: 'منع ومعالجة انحشار الأنابيب', definition: '', explanation: '', summary: '' }
    },
    quiz: { en: [], ar: [] }
  },
  {
    id: 'wellbore-stability',
    titleKey: 'استقرار جدار البئر',
    icon: '🏔️',
    year: 3,
    content: {
      en: { title: 'Wellbore Stability', definition: '', explanation: '', summary: '' },
      ar: { title: 'استقرار جدار البئر', definition: '', explanation: '', summary: '' }
    },
    quiz: { en: [], ar: [] }
  },
  {
    id: 'drilling-optimization',
    titleKey: 'تحسين أداء الحفر',
    icon: '📈',
    year: 3,
    content: {
      en: { title: 'Drilling Optimization', definition: '', explanation: '', summary: '' },
      ar: { title: 'تحسين أداء الحفر', definition: '', explanation: '', summary: '' }
    },
    quiz: { en: [], ar: [] }
  },
  {
    id: 'rop-optimization',
    titleKey: 'تحسين معدل الاختراق',
    icon: '⚡',
    year: 3,
    content: {
      en: { title: 'Rate of Penetration (ROP) Optimization', definition: '', explanation: '', summary: '' },
      ar: { title: 'تحسين معدل الاختراق', definition: '', explanation: '', summary: '' }
    },
    quiz: { en: [], ar: [] }
  },
  {
    id: 'mwd-lwd',
    titleKey: 'القياس والتسجيل أثناء الحفر',
    icon: '📡',
    year: 3,
    content: {
      en: { title: 'MWD & LWD Systems', definition: '', explanation: '', summary: '' },
      ar: { title: 'أنظمة القياس والتسجيل أثناء الحفر', definition: '', explanation: '', summary: '' }
    },
    quiz: { en: [], ar: [] }
  },
  {
    id: 'rotary-steerable-systems',
    titleKey: 'أنظمة التوجيه الدوارة',
    icon: '🧭',
    year: 3,
    content: {
      en: { title: 'Rotary Steerable Systems (RSS)', definition: '', explanation: '', summary: '' },
      ar: { title: 'أنظمة التوجيه الدوارة', definition: '', explanation: '', summary: '' }
    },
    quiz: { en: [], ar: [] }
  },
  {
    id: 'drilling-automation',
    titleKey: 'أتمتة الحفر',
    icon: '🤖',
    year: 3,
    content: {
      en: { title: 'Drilling Automation', definition: '', explanation: '', summary: '' },
      ar: { title: 'أتمتة الحفر', definition: '', explanation: '', summary: '' }
    },
    quiz: { en: [], ar: [] }
  },
  {
    id: 'hpht-drilling',
    titleKey: 'الحفر في الضغط والحرارة العالية',
    icon: '🔥',
    year: 3,
    content: {
      en: { title: 'HPHT Drilling', definition: '', explanation: '', summary: '' },
      ar: { title: 'الحفر في الضغط والحرارة العالية', definition: '', explanation: '', summary: '' }
    },
    quiz: { en: [], ar: [] }
  },
  {
    id: 'deepwater-drilling',
    titleKey: 'الحفر في المياه العميقة',
    icon: '🌊',
    year: 3,
    content: {
      en: { title: 'Deepwater Drilling', definition: '', explanation: '', summary: '' },
      ar: { title: 'الحفر في المياه العميقة', definition: '', explanation: '', summary: '' }
    },
    quiz: { en: [], ar: [] }
  },
  {
    id: 'offshore-drilling-systems',
    titleKey: 'أنظمة الحفر البحري',
    icon: '🚢',
    year: 3,
    content: {
      en: { title: 'Offshore Drilling Systems', definition: '', explanation: '', summary: '' },
      ar: { title: 'أنظمة الحفر البحري', definition: '', explanation: '', summary: '' }
    },
    quiz: { en: [], ar: [] }
  },
  {
    id: 'well-integrity',
    titleKey: 'سلامة البئر',
    icon: '🔒',
    year: 3,
    content: {
      en: { title: 'Well Integrity Management', definition: '', explanation: '', summary: '' },
      ar: { title: 'إدارة سلامة البئر', definition: '', explanation: '', summary: '' }
    },
    quiz: { en: [], ar: [] }
  },
  {
    id: 'drilling-hse',
    titleKey: 'السلامة والصحة والبيئة',
    icon: '⛑️',
    year: 3,
    content: {
      en: { title: 'HSE in Drilling Operations', definition: '', explanation: '', summary: '' },
      ar: { title: 'السلامة والصحة والبيئة في الحفر', definition: '', explanation: '', summary: '' }
    },
    quiz: { en: [], ar: [] }
  }
];
