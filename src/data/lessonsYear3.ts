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
    titleKey: 'Advanced Well Control',
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
    titleKey: 'Managed Pressure Drilling (MPD)',
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
    titleKey: 'Underbalanced Drilling (UBD)',
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
    titleKey: 'Extended Reach Drilling (ERD)',
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
    titleKey: 'Horizontal Drilling',
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
    titleKey: 'Multilateral Wells',
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
    titleKey: 'Coiled Tubing Drilling',
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
    titleKey: 'Fishing Operations',
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
    titleKey: 'Stuck Pipe Prevention',
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
    titleKey: 'Wellbore Stability',
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
    titleKey: 'Drilling Optimization',
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
    titleKey: 'ROP Optimization',
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
    titleKey: 'MWD & LWD Systems',
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
    titleKey: 'Rotary Steerable Systems (RSS)',
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
    titleKey: 'Drilling Automation',
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
    titleKey: 'HPHT Drilling',
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
    titleKey: 'Deepwater Drilling',
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
    titleKey: 'Offshore Drilling Systems',
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
    titleKey: 'Well Integrity Management',
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
    titleKey: 'HSE in Drilling',
    icon: '⛑️',
    year: 3,
    content: {
      en: { title: 'HSE in Drilling Operations', definition: '', explanation: '', summary: '' },
      ar: { title: 'السلامة والصحة والبيئة في الحفر', definition: '', explanation: '', summary: '' }
    },
    quiz: { en: [], ar: [] }
  }
];
