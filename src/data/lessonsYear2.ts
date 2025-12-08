export interface Lesson {
  id: string;
  titleKey: string;
  icon: string;
  year: number;
  content: {
    en: {
      title: string;
      definition: string;
      explanation: string;
      summary: string;
    };
    ar: {
      title: string;
      definition: string;
      explanation: string;
      summary: string;
    };
  };
  quiz: {
    en: QuizQuestion[];
    ar: QuizQuestion[];
  };
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
}

// Level 2 Lessons - Placeholder structure for detailed content to be added later
export const lessonsYear2: Lesson[] = [
  {
    id: 'hoisting-advanced',
    titleKey: 'hoistingAdvanced',
    icon: '🏗️',
    year: 2,
    content: {
      en: {
        title: 'Hoisting System – Advanced',
        definition: 'The hoisting system is the mechanical assembly that provides the means of raising and lowering the drill string, casing, and other equipment in and out of the well.',
        explanation: 'Advanced topics include: Crown block and traveling block mechanics, drilling line calculations, deadline and fastline concepts, drawworks power requirements, hook load calculations, and safety factors in hoisting operations.',
        summary: 'Master the hoisting system components and calculations essential for safe and efficient drilling operations.',
      },
      ar: {
        title: 'نظام الرفع – متقدم',
        definition: 'نظام الرفع هو التجميع الميكانيكي الذي يوفر وسائل رفع وإنزال سلسلة الحفر والتغليف والمعدات الأخرى داخل وخارج البئر.',
        explanation: 'تشمل الموضوعات المتقدمة: ميكانيكا البكرة التاجية والبكرة المتنقلة، حسابات كابل الحفر، مفاهيم خط الثبات والخط السريع، متطلبات قوة رافعة الحفر، حسابات حمولة الخطاف، وعوامل الأمان في عمليات الرفع.',
        summary: 'إتقان مكونات نظام الرفع والحسابات الأساسية لعمليات الحفر الآمنة والفعالة.',
      },
    },
    quiz: {
      en: [
        { question: 'What is the main function of the crown block?', options: ['To rotate the drill string', 'To support the drilling line at the top of the derrick', 'To pump drilling fluid', 'To prevent blowouts'], correctAnswer: 1 },
        { question: 'What is the deadline in a hoisting system?', options: ['The moving line', 'The stationary end of the drilling line', 'The emergency stop', 'The drill bit'], correctAnswer: 1 },
        { question: 'How is mechanical advantage calculated in a block and tackle system?', options: ['By the number of lines strung', 'By the depth of the well', 'By the drill bit size', 'By the mud weight'], correctAnswer: 0 },
        { question: 'What does hook load represent?', options: ['The weight of the derrick', 'The total weight suspended from the hook', 'The mud pump pressure', 'The rotary table speed'], correctAnswer: 1 },
        { question: 'What is a typical safety factor for drilling lines?', options: ['1.5', '2.0', '3.0 or higher', '0.5'], correctAnswer: 2 },
      ],
      ar: [
        { question: 'ما هي الوظيفة الرئيسية للبكرة التاجية؟', options: ['دوران سلسلة الحفر', 'دعم كابل الحفر في أعلى برج الحفر', 'ضخ سائل الحفر', 'منع الانفجارات'], correctAnswer: 1 },
        { question: 'ما هو خط الثبات في نظام الرفع؟', options: ['الخط المتحرك', 'الطرف الثابت من كابل الحفر', 'التوقف الطارئ', 'رأس الحفر'], correctAnswer: 1 },
        { question: 'كيف تُحسب الميزة الميكانيكية في نظام البكرات؟', options: ['بعدد الخطوط المشدودة', 'بعمق البئر', 'بحجم رأس الحفر', 'بوزن الطين'], correctAnswer: 0 },
        { question: 'ماذا تمثل حمولة الخطاف؟', options: ['وزن برج الحفر', 'إجمالي الوزن المعلق من الخطاف', 'ضغط مضخة الطين', 'سرعة الطاولة الدوارة'], correctAnswer: 1 },
        { question: 'ما هو عامل الأمان النموذجي لكابلات الحفر؟', options: ['1.5', '2.0', '3.0 أو أعلى', '0.5'], correctAnswer: 2 },
      ],
    },
  },
  {
    id: 'rotary-systems',
    titleKey: 'rotarySystems',
    icon: '🔄',
    year: 2,
    content: {
      en: {
        title: 'Rotary Systems',
        definition: 'The rotary system provides the rotational force to the drill string and bit, enabling the cutting and removal of formation rock.',
        explanation: 'Covers rotary table operations, kelly drive systems, top drive systems, power swivels, torque and RPM calculations, and the advantages of each rotation method.',
        summary: 'Understand the different rotary systems and their applications in modern drilling operations.',
      },
      ar: {
        title: 'أنظمة الدوران',
        definition: 'يوفر نظام الدوران القوة الدورانية لسلسلة الحفر ورأس الحفر، مما يتيح قطع وإزالة صخور التكوين.',
        explanation: 'يغطي عمليات الطاولة الدوارة، أنظمة قيادة الكيلي، أنظمة القيادة العلوية، المحاور الدوارة، حسابات العزم والدورات في الدقيقة، ومزايا كل طريقة دوران.',
        summary: 'فهم أنظمة الدوران المختلفة وتطبيقاتها في عمليات الحفر الحديثة.',
      },
    },
    quiz: {
      en: [
        { question: 'What is the main advantage of a top drive over rotary table?', options: ['Lower cost', 'Ability to rotate while tripping', 'Smaller size', 'Less maintenance'], correctAnswer: 1 },
        { question: 'What is the kelly?', options: ['A type of drill bit', 'A hexagonal or square pipe that transmits rotation', 'A drilling fluid additive', 'A pressure gauge'], correctAnswer: 1 },
        { question: 'What does RPM stand for?', options: ['Rotations Per Minute', 'Rate of Penetration Maximum', 'Rig Power Motor', 'Reverse Pump Mode'], correctAnswer: 0 },
        { question: 'What transmits rotation from the rotary table to the kelly?', options: ['Drill collars', 'Kelly bushing', 'Swivel', 'Crown block'], correctAnswer: 1 },
        { question: 'Which system is preferred for directional drilling?', options: ['Rotary table', 'Top drive', 'Manual rotation', 'Cable tool'], correctAnswer: 1 },
      ],
      ar: [
        { question: 'ما هي الميزة الرئيسية للقيادة العلوية مقارنة بالطاولة الدوارة؟', options: ['تكلفة أقل', 'القدرة على الدوران أثناء السحب', 'حجم أصغر', 'صيانة أقل'], correctAnswer: 1 },
        { question: 'ما هو الكيلي؟', options: ['نوع من رؤوس الحفر', 'أنبوب سداسي أو مربع ينقل الدوران', 'إضافة لسائل الحفر', 'مقياس ضغط'], correctAnswer: 1 },
        { question: 'ماذا يعني RPM؟', options: ['دورات في الدقيقة', 'أقصى معدل اختراق', 'محرك طاقة الجهاز', 'وضع المضخة العكسي'], correctAnswer: 0 },
        { question: 'ما الذي ينقل الدوران من الطاولة الدوارة إلى الكيلي؟', options: ['أطواق الحفر', 'جلبة الكيلي', 'المحور الدوار', 'البكرة التاجية'], correctAnswer: 1 },
        { question: 'أي نظام مفضل للحفر الموجه؟', options: ['الطاولة الدوارة', 'القيادة العلوية', 'الدوران اليدوي', 'أداة الكابل'], correctAnswer: 1 },
      ],
    },
  },
  {
    id: 'drillstring-bha',
    titleKey: 'drillstringBHA',
    icon: '🔧',
    year: 2,
    content: {
      en: {
        title: 'Drill String & BHA Design',
        definition: 'The drill string is the column of drill pipe that connects the surface equipment to the bottom hole assembly (BHA), which includes specialized components for drilling, stabilization, and directional control.',
        explanation: 'Topics include: Drill pipe specifications and grades, tool joints, drill collars, stabilizers, reamers, jars, crossovers, and BHA design for different well profiles.',
        summary: 'Learn to design effective drill strings and bottom hole assemblies for various drilling applications.',
      },
      ar: {
        title: 'تصميم سلسلة الحفر و BHA',
        definition: 'سلسلة الحفر هي عمود أنابيب الحفر الذي يربط معدات السطح بتجميعة القاع (BHA)، والتي تتضمن مكونات متخصصة للحفر والتثبيت والتحكم الاتجاهي.',
        explanation: 'تشمل الموضوعات: مواصفات ودرجات أنابيب الحفر، وصلات الأدوات، أطواق الحفر، المثبتات، الموسعات، الصدامات، وتصميم BHA لمختلف أشكال الآبار.',
        summary: 'تعلم تصميم سلاسل الحفر وتجميعات القاع الفعالة لمختلف تطبيقات الحفر.',
      },
    },
    quiz: {
      en: [
        { question: 'What is the primary function of drill collars?', options: ['To increase flexibility', 'To provide weight on bit (WOB)', 'To pump mud', 'To rotate the bit'], correctAnswer: 1 },
        { question: 'What are stabilizers used for?', options: ['Increasing drilling speed', 'Maintaining hole gauge and wellbore stability', 'Pumping cement', 'Measuring depth'], correctAnswer: 1 },
        { question: 'What is a crossover?', options: ['A drilling technique', 'A connector between different thread types', 'A type of mud', 'A safety device'], correctAnswer: 1 },
        { question: 'What are jars used for?', options: ['Mixing drilling mud', 'Freeing stuck pipe', 'Cementing', 'Logging'], correctAnswer: 1 },
        { question: 'What does BHA stand for?', options: ['Bottom Hole Assembly', 'Basic Hydraulic Analysis', 'Bore Hole Anchor', 'Bit Holder Adapter'], correctAnswer: 0 },
      ],
      ar: [
        { question: 'ما هي الوظيفة الأساسية لأطواق الحفر؟', options: ['زيادة المرونة', 'توفير الوزن على رأس الحفر', 'ضخ الطين', 'دوران رأس الحفر'], correctAnswer: 1 },
        { question: 'ما استخدام المثبتات؟', options: ['زيادة سرعة الحفر', 'الحفاظ على قطر الحفرة واستقرار جدار البئر', 'ضخ الإسمنت', 'قياس العمق'], correctAnswer: 1 },
        { question: 'ما هو الكروس أوفر؟', options: ['تقنية حفر', 'موصل بين أنواع اللوالب المختلفة', 'نوع من الطين', 'جهاز أمان'], correctAnswer: 1 },
        { question: 'ما استخدام الصدامات (Jars)؟', options: ['خلط طين الحفر', 'تحرير الأنابيب العالقة', 'التسميت', 'التسجيل'], correctAnswer: 1 },
        { question: 'ماذا يعني BHA؟', options: ['تجميعة القاع', 'تحليل هيدروليكي أساسي', 'مرساة فتحة البئر', 'محول حامل رأس الحفر'], correctAnswer: 0 },
      ],
    },
  },
  {
    id: 'drill-bits-advanced',
    titleKey: 'drillBitsAdvanced',
    icon: '⚡',
    year: 2,
    content: {
      en: {
        title: 'Drill Bits – Advanced',
        definition: 'Advanced drill bit technology encompasses various bit types, selection criteria, and optimization techniques for different formations.',
        explanation: 'Covers roller cone bits, PDC bits, diamond bits, hybrid bits, IADC classification, bit selection based on formation properties, bit records analysis, and dull grading.',
        summary: 'Master advanced drill bit selection and optimization for improved drilling performance.',
      },
      ar: {
        title: 'رؤوس الحفر – متقدم',
        definition: 'تشمل تقنية رؤوس الحفر المتقدمة أنواعاً مختلفة من الرؤوس ومعايير الاختيار وتقنيات التحسين للتكوينات المختلفة.',
        explanation: 'يغطي رؤوس المخروط الدوار، رؤوس PDC، رؤوس الماس، الرؤوس الهجينة، تصنيف IADC، اختيار الرأس بناءً على خصائص التكوين، تحليل سجلات الرؤوس، وتصنيف التآكل.',
        summary: 'إتقان اختيار وتحسين رؤوس الحفر المتقدمة لتحسين أداء الحفر.',
      },
    },
    quiz: {
      en: [
        { question: 'What does PDC stand for?', options: ['Poly Diamond Cutter', 'Polycrystalline Diamond Compact', 'Pressure Drilling Component', 'Primary Drill Core'], correctAnswer: 1 },
        { question: 'Which bit type is best for soft formations?', options: ['Mill tooth roller cone', 'Insert roller cone', 'Natural diamond', 'TSP bit'], correctAnswer: 0 },
        { question: 'What is IADC?', options: ['A type of drill bit', 'International Association of Drilling Contractors', 'An Arabian drilling company', 'Integrated Automated Drilling Control'], correctAnswer: 1 },
        { question: 'What does dull grading evaluate?', options: ['Bit sharpness before use', 'Bit wear after use', 'Formation hardness', 'Mud properties'], correctAnswer: 1 },
        { question: 'What are PDC cutters made of?', options: ['Steel only', 'Tungsten carbide', 'Synthetic diamond on tungsten carbide substrate', 'Natural diamond'], correctAnswer: 2 },
      ],
      ar: [
        { question: 'ماذا يعني PDC؟', options: ['قاطع بولي ماسي', 'ماس متعدد البلورات مضغوط', 'مكون حفر ضغطي', 'قلب حفر أساسي'], correctAnswer: 1 },
        { question: 'أي نوع رأس أفضل للتكوينات اللينة؟', options: ['مخروط دوار بأسنان مطحنة', 'مخروط دوار بإدخالات', 'ماس طبيعي', 'رأس TSP'], correctAnswer: 0 },
        { question: 'ما هو IADC؟', options: ['نوع من رؤوس الحفر', 'الرابطة الدولية لمقاولي الحفر', 'شركة حفر عربية', 'تحكم حفر آلي متكامل'], correctAnswer: 1 },
        { question: 'ماذا يُقيّم تصنيف التآكل؟', options: ['حدة الرأس قبل الاستخدام', 'تآكل الرأس بعد الاستخدام', 'صلابة التكوين', 'خصائص الطين'], correctAnswer: 1 },
        { question: 'مما تُصنع قواطع PDC؟', options: ['فولاذ فقط', 'كربيد التنغستن', 'ماس صناعي على ركيزة كربيد التنغستن', 'ماس طبيعي'], correctAnswer: 2 },
      ],
    },
  },
  {
    id: 'bop-systems',
    titleKey: 'bopSystems',
    icon: '🛡️',
    year: 2,
    content: {
      en: {
        title: 'BOP Systems & Testing',
        definition: 'Blowout Preventers (BOPs) are critical safety devices that seal the wellbore to prevent uncontrolled release of formation fluids.',
        explanation: 'Covers annular preventers, ram preventers (blind, pipe, shear), BOP stack configurations, control systems, testing procedures (pressure tests, function tests), and regulatory requirements.',
        summary: 'Understand BOP systems and testing protocols essential for well control and drilling safety.',
      },
      ar: {
        title: 'أنظمة مانع الانفجار والاختبار',
        definition: 'مانعات الانفجار (BOPs) هي أجهزة سلامة حرجة تُغلق فتحة البئر لمنع الإطلاق غير المنضبط لسوائل التكوين.',
        explanation: 'يغطي المانعات الحلقية، مانعات الكبس (عمياء، أنبوبية، قاطعة)، تكوينات مكدس BOP، أنظمة التحكم، إجراءات الاختبار (اختبارات الضغط، اختبارات الوظيفة)، والمتطلبات التنظيمية.',
        summary: 'فهم أنظمة BOP وبروتوكولات الاختبار الأساسية للتحكم بالبئر وسلامة الحفر.',
      },
    },
    quiz: {
      en: [
        { question: 'What is the purpose of a BOP?', options: ['To increase drilling speed', 'To prevent uncontrolled flow from the well', 'To mix drilling mud', 'To measure depth'], correctAnswer: 1 },
        { question: 'What type of ram can cut the drill pipe?', options: ['Pipe rams', 'Blind rams', 'Shear rams', 'Variable bore rams'], correctAnswer: 2 },
        { question: 'What is an annular preventer?', options: ['A ram type BOP', 'A doughnut-shaped rubber sealing element', 'A choke manifold', 'A kill line'], correctAnswer: 1 },
        { question: 'How often should BOPs be pressure tested?', options: ['Once a year', 'According to regulations, typically every 14-21 days', 'Every hour', 'Never'], correctAnswer: 1 },
        { question: 'What are blind rams used for?', options: ['Sealing around drill pipe', 'Sealing an open hole with no pipe', 'Cutting pipe', 'Pumping mud'], correctAnswer: 1 },
      ],
      ar: [
        { question: 'ما هو الغرض من مانع الانفجار؟', options: ['زيادة سرعة الحفر', 'منع التدفق غير المنضبط من البئر', 'خلط طين الحفر', 'قياس العمق'], correctAnswer: 1 },
        { question: 'أي نوع من الكباسات يمكنه قطع أنبوب الحفر؟', options: ['كباسات الأنبوب', 'الكباسات العمياء', 'الكباسات القاطعة', 'كباسات القطر المتغير'], correctAnswer: 2 },
        { question: 'ما هو المانع الحلقي؟', options: ['مانع نوع كبس', 'عنصر إغلاق مطاطي بشكل دونات', 'مشعب الخانق', 'خط القتل'], correctAnswer: 1 },
        { question: 'كم مرة يجب اختبار ضغط مانعات الانفجار؟', options: ['مرة في السنة', 'وفقاً للوائح، عادة كل 14-21 يوماً', 'كل ساعة', 'أبداً'], correctAnswer: 1 },
        { question: 'ما استخدام الكباسات العمياء؟', options: ['الإغلاق حول أنبوب الحفر', 'إغلاق حفرة مفتوحة بدون أنبوب', 'قطع الأنبوب', 'ضخ الطين'], correctAnswer: 1 },
      ],
    },
  },
  {
    id: 'drilling-fluids-2',
    titleKey: 'drillingFluids2',
    icon: '💧',
    year: 2,
    content: {
      en: {
        title: 'Drilling Fluids – Level 2',
        definition: 'Advanced drilling fluid engineering covers the formulation, properties, and optimization of mud systems for challenging drilling conditions.',
        explanation: 'Topics include: Mud types (WBM, OBM, SBM), rheological properties, filtration control, weighting materials, shale inhibition, lost circulation materials, contamination treatment, and environmental considerations.',
        summary: 'Master advanced drilling fluid properties and their optimization for various drilling challenges.',
      },
      ar: {
        title: 'سوائل الحفر – المستوى 2',
        definition: 'تغطي هندسة سوائل الحفر المتقدمة تركيب وخصائص وتحسين أنظمة الطين لظروف الحفر الصعبة.',
        explanation: 'تشمل الموضوعات: أنواع الطين (WBM، OBM، SBM)، الخصائص الريولوجية، التحكم في الترشيح، مواد الثقل، تثبيط الصخور الطينية، مواد فقدان الدوران، معالجة التلوث، والاعتبارات البيئية.',
        summary: 'إتقان خصائص سوائل الحفر المتقدمة وتحسينها لمختلف تحديات الحفر.',
      },
    },
    quiz: {
      en: [
        { question: 'What does WBM stand for?', options: ['Water Based Mud', 'Well Bore Measurement', 'Weight Balance Method', 'Wireline Bottom Marker'], correctAnswer: 0 },
        { question: 'What is the purpose of weighting material?', options: ['To reduce viscosity', 'To increase mud weight for well control', 'To improve lubrication', 'To reduce filtration'], correctAnswer: 1 },
        { question: 'What is barite used for?', options: ['Reducing mud weight', 'Increasing mud weight', 'Improving viscosity', 'Killing bacteria'], correctAnswer: 1 },
        { question: 'What property measures mud thickness?', options: ['Density', 'Viscosity', 'pH', 'Salinity'], correctAnswer: 1 },
        { question: 'What is the main advantage of OBM?', options: ['Lower cost', 'Better shale inhibition', 'No environmental concerns', 'Higher water content'], correctAnswer: 1 },
      ],
      ar: [
        { question: 'ماذا يعني WBM؟', options: ['طين أساسه الماء', 'قياس فتحة البئر', 'طريقة توازن الوزن', 'علامة قاع الكابل'], correctAnswer: 0 },
        { question: 'ما هو الغرض من مواد الثقل؟', options: ['تقليل اللزوجة', 'زيادة وزن الطين للتحكم بالبئر', 'تحسين التشحيم', 'تقليل الترشيح'], correctAnswer: 1 },
        { question: 'ما استخدام الباريت؟', options: ['تقليل وزن الطين', 'زيادة وزن الطين', 'تحسين اللزوجة', 'قتل البكتيريا'], correctAnswer: 1 },
        { question: 'أي خاصية تقيس سُمك الطين؟', options: ['الكثافة', 'اللزوجة', 'الأس الهيدروجيني', 'الملوحة'], correctAnswer: 1 },
        { question: 'ما هي الميزة الرئيسية لطين OBM؟', options: ['تكلفة أقل', 'تثبيط أفضل للصخور الطينية', 'لا توجد مخاوف بيئية', 'محتوى مائي أعلى'], correctAnswer: 1 },
      ],
    },
  },
  {
    id: 'hydraulics-flow',
    titleKey: 'hydraulicsFlow',
    icon: '🌊',
    year: 2,
    content: {
      en: {
        title: 'Hydraulics & Drillstring Flow',
        definition: 'Drilling hydraulics deals with the flow of drilling fluid through the circulating system and its effects on drilling performance.',
        explanation: 'Covers: Pressure loss calculations (surface, drillstring, bit, annulus), jet impact force, hydraulic horsepower optimization, ECD management, surge and swab pressures, and pump selection.',
        summary: 'Understand hydraulic calculations and optimization for efficient drilling operations.',
      },
      ar: {
        title: 'الهيدروليكا وتدفق سلسلة الحفر',
        definition: 'تتعامل هيدروليكا الحفر مع تدفق سائل الحفر عبر نظام الدوران وتأثيراته على أداء الحفر.',
        explanation: 'يغطي: حسابات فقدان الضغط (السطح، سلسلة الحفر، رأس الحفر، الحلقي)، قوة تأثير النفاثة، تحسين القدرة الهيدروليكية الحصانية، إدارة ECD، ضغوط الاندفاع والسحب، واختيار المضخة.',
        summary: 'فهم الحسابات الهيدروليكية والتحسين لعمليات الحفر الفعالة.',
      },
    },
    quiz: {
      en: [
        { question: 'Where does most pressure loss occur in the circulating system?', options: ['Surface equipment', 'Drill pipe', 'Bit nozzles', 'Annulus'], correctAnswer: 2 },
        { question: 'What is ECD?', options: ['Equivalent Circulating Density', 'Emergency Control Device', 'Electronic Current Display', 'External Casing Diameter'], correctAnswer: 0 },
        { question: 'What causes surge pressure?', options: ['Pulling pipe out', 'Running pipe into the hole', 'Rotating the bit', 'Mixing mud'], correctAnswer: 1 },
        { question: 'What is swab pressure?', options: ['Pressure increase from running pipe in', 'Pressure decrease from pulling pipe out', 'Static pressure', 'Pump pressure'], correctAnswer: 1 },
        { question: 'What do bit nozzles control?', options: ['Rotation speed', 'Jet velocity and hydraulic efficiency', 'Weight on bit', 'Mud weight'], correctAnswer: 1 },
      ],
      ar: [
        { question: 'أين يحدث معظم فقدان الضغط في نظام الدوران؟', options: ['معدات السطح', 'أنبوب الحفر', 'فوهات رأس الحفر', 'الحلقي'], correctAnswer: 2 },
        { question: 'ما هو ECD؟', options: ['كثافة الدوران المكافئة', 'جهاز تحكم طوارئ', 'شاشة تيار إلكترونية', 'قطر الغلاف الخارجي'], correctAnswer: 0 },
        { question: 'ما الذي يسبب ضغط الاندفاع؟', options: ['سحب الأنبوب للخارج', 'إدخال الأنبوب في الحفرة', 'دوران رأس الحفر', 'خلط الطين'], correctAnswer: 1 },
        { question: 'ما هو ضغط السحب؟', options: ['زيادة الضغط من إدخال الأنبوب', 'انخفاض الضغط من سحب الأنبوب', 'الضغط الساكن', 'ضغط المضخة'], correctAnswer: 1 },
        { question: 'ماذا تتحكم فوهات رأس الحفر؟', options: ['سرعة الدوران', 'سرعة النفاثة والكفاءة الهيدروليكية', 'الوزن على رأس الحفر', 'وزن الطين'], correctAnswer: 1 },
      ],
    },
  },
  {
    id: 'hole-cleaning',
    titleKey: 'holeCleaning',
    icon: '🧹',
    year: 2,
    content: {
      en: {
        title: 'Hole Cleaning & Cuttings Handling',
        definition: 'Hole cleaning is the process of efficiently removing drilled cuttings from the wellbore to the surface.',
        explanation: 'Topics include: Cutting transport theory, annular velocity requirements, mud properties for hole cleaning, high-angle and horizontal well challenges, cuttings bed formation, and solids control equipment.',
        summary: 'Learn the principles and practices of effective hole cleaning in various well configurations.',
      },
      ar: {
        title: 'تنظيف الحفرة ومعالجة الفتات',
        definition: 'تنظيف الحفرة هو عملية إزالة فتات الحفر بكفاءة من فتحة البئر إلى السطح.',
        explanation: 'تشمل الموضوعات: نظرية نقل الفتات، متطلبات السرعة الحلقية، خصائص الطين لتنظيف الحفرة، تحديات الآبار عالية الزاوية والأفقية، تكوين طبقة الفتات، ومعدات التحكم بالمواد الصلبة.',
        summary: 'تعلم مبادئ وممارسات تنظيف الحفرة الفعال في تكوينات الآبار المختلفة.',
      },
    },
    quiz: {
      en: [
        { question: 'What is the main factor affecting cutting transport?', options: ['Bit size', 'Annular velocity', 'Drill pipe weight', 'Formation type'], correctAnswer: 1 },
        { question: 'What happens if hole cleaning is poor?', options: ['Faster drilling', 'Stuck pipe, pack-offs', 'Lower mud cost', 'Improved ROP'], correctAnswer: 1 },
        { question: 'Where are cuttings beds most problematic?', options: ['Vertical wells', 'High-angle and horizontal wells', 'Shallow wells', 'Gas wells'], correctAnswer: 1 },
        { question: 'What is the typical minimum annular velocity for hole cleaning?', options: ['50 ft/min', '100-150 ft/min', '500 ft/min', '10 ft/min'], correctAnswer: 1 },
        { question: 'What equipment removes cuttings from mud at surface?', options: ['BOP', 'Shale shakers', 'Rotary table', 'Kelly'], correctAnswer: 1 },
      ],
      ar: [
        { question: 'ما هو العامل الرئيسي المؤثر على نقل الفتات؟', options: ['حجم رأس الحفر', 'السرعة الحلقية', 'وزن أنبوب الحفر', 'نوع التكوين'], correctAnswer: 1 },
        { question: 'ماذا يحدث إذا كان تنظيف الحفرة ضعيفاً؟', options: ['حفر أسرع', 'أنبوب عالق، انسدادات', 'تكلفة طين أقل', 'تحسين ROP'], correctAnswer: 1 },
        { question: 'أين تكون طبقات الفتات أكثر إشكالية؟', options: ['الآبار العمودية', 'الآبار عالية الزاوية والأفقية', 'الآبار الضحلة', 'آبار الغاز'], correctAnswer: 1 },
        { question: 'ما هي السرعة الحلقية الدنيا النموذجية لتنظيف الحفرة؟', options: ['50 قدم/دقيقة', '100-150 قدم/دقيقة', '500 قدم/دقيقة', '10 قدم/دقيقة'], correctAnswer: 1 },
        { question: 'ما المعدات التي تزيل الفتات من الطين على السطح؟', options: ['مانع الانفجار', 'غرابيل الصخور الطينية', 'الطاولة الدوارة', 'الكيلي'], correctAnswer: 1 },
      ],
    },
  },
  {
    id: 'pressure-ecd',
    titleKey: 'pressureECD',
    icon: '📊',
    year: 2,
    content: {
      en: {
        title: 'Pressure & ECD Calculations',
        definition: 'Understanding formation pressures and Equivalent Circulating Density (ECD) is critical for maintaining wellbore stability and preventing well control incidents.',
        explanation: 'Covers: Hydrostatic pressure calculations, pore pressure, fracture pressure, mud weight selection, ECD calculations, pressure gradients, and operating within the drilling window.',
        summary: 'Master pressure calculations essential for safe and effective well planning and execution.',
      },
      ar: {
        title: 'حسابات الضغط و ECD',
        definition: 'فهم ضغوط التكوين وكثافة الدوران المكافئة (ECD) أمر حاسم للحفاظ على استقرار فتحة البئر ومنع حوادث التحكم بالبئر.',
        explanation: 'يغطي: حسابات الضغط الهيدروستاتيكي، ضغط المسام، ضغط التكسير، اختيار وزن الطين، حسابات ECD، تدرجات الضغط، والعمل ضمن نافذة الحفر.',
        summary: 'إتقان حسابات الضغط الأساسية للتخطيط والتنفيذ الآمن والفعال للآبار.',
      },
    },
    quiz: {
      en: [
        { question: 'What is hydrostatic pressure proportional to?', options: ['Flow rate', 'Mud weight and true vertical depth', 'Pipe size', 'Rotation speed'], correctAnswer: 1 },
        { question: 'What is pore pressure?', options: ['Pressure inside the drill pipe', 'Pressure of fluids in formation pores', 'Surface pump pressure', 'BOP closing pressure'], correctAnswer: 1 },
        { question: 'What happens if mud weight is too low?', options: ['Lost circulation', 'Wellbore influx (kick)', 'Stuck pipe from differential sticking', 'Slower drilling'], correctAnswer: 1 },
        { question: 'What happens if mud weight is too high?', options: ['Kick', 'Lost circulation, formation damage', 'Faster drilling', 'Better hole cleaning'], correctAnswer: 1 },
        { question: 'What is the drilling window?', options: ['Time to drill a well', 'Range between pore pressure and fracture pressure', 'Size of the rig floor', 'Depth of the well'], correctAnswer: 1 },
      ],
      ar: [
        { question: 'ما الذي يتناسب معه الضغط الهيدروستاتيكي؟', options: ['معدل التدفق', 'وزن الطين والعمق الحقيقي العمودي', 'حجم الأنبوب', 'سرعة الدوران'], correctAnswer: 1 },
        { question: 'ما هو ضغط المسام؟', options: ['الضغط داخل أنبوب الحفر', 'ضغط السوائل في مسام التكوين', 'ضغط مضخة السطح', 'ضغط إغلاق BOP'], correctAnswer: 1 },
        { question: 'ماذا يحدث إذا كان وزن الطين منخفضاً جداً؟', options: ['فقدان دوران', 'تدفق داخل فتحة البئر (كيك)', 'أنبوب عالق من الالتصاق التفاضلي', 'حفر أبطأ'], correctAnswer: 1 },
        { question: 'ماذا يحدث إذا كان وزن الطين مرتفعاً جداً؟', options: ['كيك', 'فقدان دوران، تلف التكوين', 'حفر أسرع', 'تنظيف حفرة أفضل'], correctAnswer: 1 },
        { question: 'ما هي نافذة الحفر؟', options: ['وقت حفر البئر', 'النطاق بين ضغط المسام وضغط التكسير', 'حجم أرضية الجهاز', 'عمق البئر'], correctAnswer: 1 },
      ],
    },
  },
  {
    id: 'kick-detection',
    titleKey: 'kickDetection',
    icon: '🚨',
    year: 2,
    content: {
      en: {
        title: 'Kick Detection & Well Control Procedures',
        definition: 'A kick is an unplanned influx of formation fluids into the wellbore. Well control procedures are the methods used to safely contain and circulate out the influx.',
        explanation: 'Covers: Primary and secondary well control, kick indicators (pit gain, flow increases, drilling breaks), shut-in procedures, kill methods (Driller\'s method, Wait and Weight), and pressure calculations during well control.',
        summary: 'Learn to recognize kicks early and apply proper well control procedures to maintain safety.',
      },
      ar: {
        title: 'كشف الكيك وإجراءات التحكم بالبئر',
        definition: 'الكيك هو تدفق غير مخطط لسوائل التكوين إلى فتحة البئر. إجراءات التحكم بالبئر هي الطرق المستخدمة لاحتواء وتدوير التدفق بأمان.',
        explanation: 'يغطي: التحكم الأولي والثانوي بالبئر، مؤشرات الكيك (زيادة الحفرة، زيادة التدفق، توقفات الحفر)، إجراءات الإغلاق، طرق القتل (طريقة الحفار، الانتظار والوزن)، وحسابات الضغط أثناء التحكم بالبئر.',
        summary: 'تعلم التعرف على الكيك مبكراً وتطبيق إجراءات التحكم بالبئر المناسبة للحفاظ على السلامة.',
      },
    },
    quiz: {
      en: [
        { question: 'What is the first sign of a kick?', options: ['Decrease in pump pressure', 'Increase in pit volume', 'Slower drilling', 'Higher torque'], correctAnswer: 1 },
        { question: 'What is primary well control?', options: ['Using BOPs', 'Maintaining hydrostatic pressure above pore pressure', 'Circulating out a kick', 'Killing the well'], correctAnswer: 1 },
        { question: 'What should you do first when detecting a kick?', options: ['Keep drilling', 'Shut in the well', 'Increase pump rate', 'Pull out of hole'], correctAnswer: 1 },
        { question: 'What is the Driller\'s Method?', options: ['A drilling technique', 'Two-circulation well kill method', 'A type of drill bit', 'A mud mixing procedure'], correctAnswer: 1 },
        { question: 'What is SIDPP?', options: ['Shut-In Drill Pipe Pressure', 'Standard Industrial Drilling Practice', 'Safety Indicator During Pump Process', 'Surface Injection Differential Pressure'], correctAnswer: 0 },
      ],
      ar: [
        { question: 'ما هي أول علامة على الكيك؟', options: ['انخفاض ضغط المضخة', 'زيادة حجم الحفرة', 'حفر أبطأ', 'عزم أعلى'], correctAnswer: 1 },
        { question: 'ما هو التحكم الأولي بالبئر؟', options: ['استخدام مانعات الانفجار', 'الحفاظ على الضغط الهيدروستاتيكي فوق ضغط المسام', 'تدوير الكيك للخارج', 'قتل البئر'], correctAnswer: 1 },
        { question: 'ماذا يجب أن تفعل أولاً عند اكتشاف كيك؟', options: ['الاستمرار بالحفر', 'إغلاق البئر', 'زيادة معدل المضخة', 'السحب من الحفرة'], correctAnswer: 1 },
        { question: 'ما هي طريقة الحفار؟', options: ['تقنية حفر', 'طريقة قتل البئر بدورتين', 'نوع من رأس الحفر', 'إجراء خلط الطين'], correctAnswer: 1 },
        { question: 'ما هو SIDPP؟', options: ['ضغط أنبوب الحفر المغلق', 'ممارسة حفر صناعية قياسية', 'مؤشر السلامة أثناء عملية الضخ', 'ضغط الحقن التفاضلي السطحي'], correctAnswer: 0 },
      ],
    },
  },
  {
    id: 'casing-cementing',
    titleKey: 'casingCementing',
    icon: '🔩',
    year: 2,
    content: {
      en: {
        title: 'Casing, Cementing & QA/QC',
        definition: 'Casing provides wellbore support and isolation, while cementing secures the casing and provides zonal isolation. Quality assurance ensures successful operations.',
        explanation: 'Covers: Casing types and functions, casing design principles, centralizers, float equipment, cement types and additives, cementing procedures, cement bond logging, and quality control practices.',
        summary: 'Understand casing and cementing operations essential for wellbore integrity.',
      },
      ar: {
        title: 'التغليف والتسميت وضمان الجودة',
        definition: 'يوفر التغليف دعم وعزل فتحة البئر، بينما يثبت التسميت التغليف ويوفر العزل المنطقي. ضمان الجودة يضمن نجاح العمليات.',
        explanation: 'يغطي: أنواع ووظائف التغليف، مبادئ تصميم التغليف، المركزات، معدات العوامة، أنواع وإضافات الإسمنت، إجراءات التسميت، تسجيل ترابط الإسمنت، وممارسات ضبط الجودة.',
        summary: 'فهم عمليات التغليف والتسميت الأساسية لسلامة فتحة البئر.',
      },
    },
    quiz: {
      en: [
        { question: 'What is the main purpose of casing?', options: ['To drill faster', 'To prevent wellbore collapse and isolate formations', 'To mix mud', 'To measure depth'], correctAnswer: 1 },
        { question: 'What are centralizers used for?', options: ['Rotating the casing', 'Centering casing for uniform cement coverage', 'Pumping cement', 'Measuring cement'], correctAnswer: 1 },
        { question: 'What is a float collar?', options: ['A type of casing', 'A one-way valve that prevents backflow', 'A cementing additive', 'A depth marker'], correctAnswer: 1 },
        { question: 'What is cement bond log (CBL)?', options: ['A cement mixing guide', 'A log to evaluate cement quality behind casing', 'A casing inspection', 'A drilling log'], correctAnswer: 1 },
        { question: 'What is the purpose of retarders in cement?', options: ['Speed up setting', 'Slow down cement setting time', 'Increase cement weight', 'Reduce cement cost'], correctAnswer: 1 },
      ],
      ar: [
        { question: 'ما هو الغرض الرئيسي من التغليف؟', options: ['للحفر أسرع', 'لمنع انهيار فتحة البئر وعزل التكوينات', 'لخلط الطين', 'لقياس العمق'], correctAnswer: 1 },
        { question: 'ما استخدام المركزات؟', options: ['دوران التغليف', 'توسيط التغليف لتغطية إسمنتية موحدة', 'ضخ الإسمنت', 'قياس الإسمنت'], correctAnswer: 1 },
        { question: 'ما هي طوق العوامة؟', options: ['نوع من التغليف', 'صمام أحادي الاتجاه يمنع الارتداد', 'إضافة للتسميت', 'علامة عمق'], correctAnswer: 1 },
        { question: 'ما هو سجل ترابط الإسمنت (CBL)؟', options: ['دليل خلط الإسمنت', 'سجل لتقييم جودة الإسمنت خلف التغليف', 'فحص التغليف', 'سجل حفر'], correctAnswer: 1 },
        { question: 'ما هو الغرض من المبطئات في الإسمنت؟', options: ['تسريع التصلب', 'إبطاء وقت تصلب الإسمنت', 'زيادة وزن الإسمنت', 'تقليل تكلفة الإسمنت'], correctAnswer: 1 },
      ],
    },
  },
  {
    id: 'drilling-problems',
    titleKey: 'drillingProblems',
    icon: '⚠️',
    year: 2,
    content: {
      en: {
        title: 'Drilling Problems & Remedial Actions',
        definition: 'Drilling problems are complications that occur during drilling operations, requiring identification and appropriate remedial actions.',
        explanation: 'Covers: Stuck pipe (differential, mechanical, keyseating), lost circulation, wellbore instability, drilling breaks, tight hole, torque and drag issues, and remedial techniques including fishing operations.',
        summary: 'Learn to identify common drilling problems and apply effective remedial actions.',
      },
      ar: {
        title: 'مشاكل الحفر والإجراءات العلاجية',
        definition: 'مشاكل الحفر هي المضاعفات التي تحدث أثناء عمليات الحفر، والتي تتطلب التعرف عليها وتطبيق الإجراءات العلاجية المناسبة.',
        explanation: 'يغطي: الأنبوب العالق (تفاضلي، ميكانيكي، حز المفتاح)، فقدان الدوران، عدم استقرار فتحة البئر، توقفات الحفر، الحفرة الضيقة، مشاكل العزم والسحب، والتقنيات العلاجية بما في ذلك عمليات الصيد.',
        summary: 'تعلم تحديد مشاكل الحفر الشائعة وتطبيق الإجراءات العلاجية الفعالة.',
      },
    },
    quiz: {
      en: [
        { question: 'What is differential sticking?', options: ['Pipe stuck due to mud cake in permeable zones under overbalanced conditions', 'Pipe stuck due to rock fall', 'Pipe stuck due to equipment failure', 'Pipe stuck due to cement'], correctAnswer: 0 },
        { question: 'What is the first step when pipe gets stuck?', options: ['Pull harder', 'Slack off weight, attempt to rotate', 'Cut the pipe', 'Abandon the well'], correctAnswer: 1 },
        { question: 'What causes lost circulation?', options: ['Pump failure', 'Fractures, vugs, or high-permeability zones', 'Bit wear', 'Slow ROP'], correctAnswer: 1 },
        { question: 'What is keyseating?', options: ['A type of drill bit', 'A groove worn in the wellbore wall causing stuck pipe', 'A cementing problem', 'A mud issue'], correctAnswer: 1 },
        { question: 'What are fishing operations?', options: ['Deep sea fishing', 'Retrieving lost or stuck equipment from the wellbore', 'Testing BOPs', 'Logging operations'], correctAnswer: 1 },
      ],
      ar: [
        { question: 'ما هو الالتصاق التفاضلي؟', options: ['أنبوب عالق بسبب كعكة الطين في المناطق النفاذة تحت ظروف الموازنة الزائدة', 'أنبوب عالق بسبب سقوط صخور', 'أنبوب عالق بسبب فشل المعدات', 'أنبوب عالق بسبب الإسمنت'], correctAnswer: 0 },
        { question: 'ما هي الخطوة الأولى عند انحشار الأنبوب؟', options: ['السحب بقوة أكبر', 'تخفيف الوزن، محاولة الدوران', 'قطع الأنبوب', 'التخلي عن البئر'], correctAnswer: 1 },
        { question: 'ما الذي يسبب فقدان الدوران؟', options: ['فشل المضخة', 'الشقوق أو الفجوات أو المناطق عالية النفاذية', 'تآكل رأس الحفر', 'ROP بطيء'], correctAnswer: 1 },
        { question: 'ما هو حز المفتاح؟', options: ['نوع من رأس الحفر', 'أخدود متآكل في جدار البئر يسبب انحشار الأنبوب', 'مشكلة تسميت', 'مشكلة طين'], correctAnswer: 1 },
        { question: 'ما هي عمليات الصيد؟', options: ['صيد أعماق البحار', 'استرجاع المعدات المفقودة أو العالقة من فتحة البئر', 'اختبار مانعات الانفجار', 'عمليات التسجيل'], correctAnswer: 1 },
      ],
    },
  },
  {
    id: 'directional-drilling',
    titleKey: 'directionalDrilling',
    icon: '🧭',
    year: 2,
    content: {
      en: {
        title: 'Directional & Horizontal Drilling',
        definition: 'Directional drilling is the technique of drilling wells at planned angles to reach targets not directly below the surface location.',
        explanation: 'Covers: Reasons for directional drilling, well profiles (J-curve, S-curve, horizontal), directional tools (bent housing motors, rotary steerable systems), survey instruments (MWD, gyro), wellpath planning, and horizontal drilling techniques.',
        summary: 'Master directional and horizontal drilling concepts for accessing complex reservoir targets.',
      },
      ar: {
        title: 'الحفر الموجه والأفقي',
        definition: 'الحفر الموجه هو تقنية حفر الآبار بزوايا مخططة للوصول إلى أهداف ليست مباشرة تحت موقع السطح.',
        explanation: 'يغطي: أسباب الحفر الموجه، أشكال الآبار (منحنى J، منحنى S، أفقي)، أدوات التوجيه (محركات السكن المثني، أنظمة التوجيه الدوراني)، أدوات المسح (MWD، جيروسكوب)، تخطيط مسار البئر، وتقنيات الحفر الأفقي.',
        summary: 'إتقان مفاهيم الحفر الموجه والأفقي للوصول إلى أهداف المخزون المعقدة.',
      },
    },
    quiz: {
      en: [
        { question: 'Why is directional drilling used?', options: ['Only to save time', 'To reach targets under obstacles, extended reach, multiple targets from one location', 'To reduce mud cost', 'To eliminate casing'], correctAnswer: 1 },
        { question: 'What is a bent housing motor?', options: ['A broken motor', 'A downhole motor with an angled housing for steering', 'A surface pump', 'A type of bit'], correctAnswer: 1 },
        { question: 'What does MWD stand for?', options: ['Mud Weight Density', 'Measurement While Drilling', 'Motor With Direction', 'Maximum Well Depth'], correctAnswer: 1 },
        { question: 'What is inclination?', options: ['The angle of the wellbore from vertical', 'The depth of the well', 'The mud weight', 'The formation type'], correctAnswer: 0 },
        { question: 'What is a horizontal well?', options: ['A well with 0° inclination', 'A well drilled at approximately 90° from vertical', 'A surface pipeline', 'A shallow well'], correctAnswer: 1 },
      ],
      ar: [
        { question: 'لماذا يُستخدم الحفر الموجه؟', options: ['فقط لتوفير الوقت', 'للوصول إلى أهداف تحت العوائق، الوصول الممتد، أهداف متعددة من موقع واحد', 'لتقليل تكلفة الطين', 'لإلغاء التغليف'], correctAnswer: 1 },
        { question: 'ما هو محرك السكن المثني؟', options: ['محرك مكسور', 'محرك تحت السطح بسكن بزاوية للتوجيه', 'مضخة سطحية', 'نوع من الرؤوس'], correctAnswer: 1 },
        { question: 'ماذا يعني MWD؟', options: ['كثافة وزن الطين', 'القياس أثناء الحفر', 'محرك مع اتجاه', 'أقصى عمق للبئر'], correctAnswer: 1 },
        { question: 'ما هو الميل؟', options: ['زاوية فتحة البئر من العمودي', 'عمق البئر', 'وزن الطين', 'نوع التكوين'], correctAnswer: 0 },
        { question: 'ما هو البئر الأفقي؟', options: ['بئر بميل 0°', 'بئر محفور بزاوية حوالي 90° من العمودي', 'خط أنابيب سطحي', 'بئر ضحل'], correctAnswer: 1 },
      ],
    },
  },
];
