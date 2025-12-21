export interface Lesson {
  id: string;
  titleKey: string;
  icon: string;
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

export const lessons: Lesson[] = [
  {
    id: 'drilling-fluids',
    titleKey: 'drilling-fluids',
    icon: '🧪',
    content: {
      en: {
        title: 'Drilling Fluids Basics',
        definition: 'Drilling fluids (mud) are fluids pumped into the well during drilling to perform multiple critical functions.',
        explanation: 'Drilling fluids cool and lubricate the drill bit, carry rock cuttings to the surface, control formation pressure, and stabilize the wellbore. There are three main types: Water-Based Mud (WBM), Oil-Based Mud (OBM), and Synthetic-Based Mud (SBM). Each type has specific advantages and is chosen based on well conditions, cost, and environmental factors.',
        summary: 'Drilling fluids are essential for safe and efficient drilling operations, performing cooling, cuttings transport, pressure control, and wellbore stabilization functions.',
      },
      ar: {
        title: 'أساسيات سوائل الحفر',
        definition: 'سوائل الحفر (الطين) هي السوائل التي تُضخ في البئر أثناء الحفر لأداء وظائف حيوية متعددة.',
        explanation: 'سوائل الحفر تبرد وتزيت رأس الحفر، وترفع فتات الصخور للسطح، وتتحكم في ضغط التكوين، وتثبت جدران البئر. هناك ثلاثة أنواع رئيسية: سائل مائي (WBM)، سائل زيتي (OBM)، وسائل اصطناعي (SBM). يُختار كل نوع بناءً على ظروف البئر والتكلفة والعوامل البيئية.',
        summary: 'سوائل الحفر ضرورية لعمليات الحفر الآمنة والفعالة، وتؤدي وظائف التبريد ونقل الفتات والتحكم بالضغط وتثبيت البئر.',
      },
    },
    quiz: {
      en: [
        {
          question: 'What is the common field name for drilling fluid?',
          options: ['Oil', 'Water', 'Mud', 'Gas'],
          correctAnswer: 2,
        },
        {
          question: 'Which is the most commonly used drilling fluid type?',
          options: ['OBM', 'SBM', 'WBM', 'Air'],
          correctAnswer: 2,
        },
        {
          question: 'What happens if drilling fluid density is too low?',
          options: ['Lost circulation', 'Formation fluid influx (Kick)', 'Better cooling', 'Nothing'],
          correctAnswer: 1,
        },
        {
          question: 'What is the Annulus?',
          options: ['Inside drill string', 'Space between drill string and wellbore', 'Drill bit opening', 'Mud tank'],
          correctAnswer: 1,
        },
        {
          question: 'What is the purpose of Shale Shakers?',
          options: ['Mix fluid', 'Separate cuttings from fluid', 'Measure density', 'Pump fluid'],
          correctAnswer: 1,
        },
      ],
      ar: [
        {
          question: 'ما هو الاسم الشائع لسائل الحفر في الميدان؟',
          options: ['الزيت', 'الماء', 'الطين', 'الغاز'],
          correctAnswer: 2,
        },
        {
          question: 'ما هو نوع سائل الحفر الأكثر استخداماً؟',
          options: ['OBM', 'SBM', 'WBM', 'الهواء'],
          correctAnswer: 2,
        },
        {
          question: 'ماذا يحدث إذا كانت كثافة سائل الحفر منخفضة جداً؟',
          options: ['فقدان الدوران', 'دخول سوائل للبئر (Kick)', 'تبريد أفضل', 'لا شيء'],
          correctAnswer: 1,
        },
        {
          question: 'ما هو الفراغ الحلقي (Annulus)؟',
          options: ['داخل سلسلة الحفر', 'المسافة بين السلسلة وجدار البئر', 'فتحة رأس الحفر', 'حوض الطين'],
          correctAnswer: 1,
        },
        {
          question: 'ما هي وظيفة المناخل الاهتزازية؟',
          options: ['خلط السائل', 'فصل الفتات عن السائل', 'قياس الكثافة', 'ضخ السائل'],
          correctAnswer: 1,
        },
      ],
    },
  },
  {
    id: 'intro',
    titleKey: 'intro',
    icon: '🛢️',
    content: {
      en: {
        title: 'Introduction to Petroleum Engineering',
        definition: 'Petroleum Engineering is the branch of engineering concerned with the exploration, drilling, and production of oil and gas from underground formations.',
        explanation: 'Petroleum engineers work to develop and improve methods for extracting oil and natural gas from deposits below the Earth\'s surface. They design equipment and processes that maximize oil and gas recovery while minimizing costs and environmental impact. The field combines principles from geology, physics, chemistry, and mathematics to solve complex problems related to hydrocarbon extraction.',
        summary: 'Petroleum Engineering focuses on the efficient extraction of oil and gas resources from the earth, combining multiple scientific disciplines to develop sustainable extraction methods.',
      },
      ar: {
        title: 'مقدمة في هندسة النفط',
        definition: 'هندسة النفط هي فرع من فروع الهندسة يهتم باستكشاف وحفر وإنتاج النفط والغاز من باطن الأرض، إضافة إلى معالجتهما ونقلهما.',
        explanation: 'يعمل مهندسو النفط على تطوير وتحسين طرق استخراج النفط والغاز الطبيعي من الرواسب الموجودة تحت سطح الأرض. يقومون بتصميم المعدات والعمليات التي تزيد من استخلاص النفط والغاز مع تقليل التكاليف والأثر البيئي. يجمع هذا المجال بين مبادئ الجيولوجيا والفيزياء والكيمياء والرياضيات لحل المشكلات المعقدة المتعلقة باستخراج الهيدروكربونات.',
        summary: 'تركز هندسة النفط على الاستخراج الفعال لموارد النفط والغاز من الأرض، وتجمع بين عدة تخصصات علمية لتطوير طرق استخراج مستدامة.',
      },
    },
    quiz: {
      en: [
        {
          question: 'What is Petroleum Engineering primarily concerned with?',
          options: ['Building roads', 'Exploration and production of oil and gas', 'Manufacturing cars', 'Food processing'],
          correctAnswer: 1,
        },
        {
          question: 'Which scientific disciplines are combined in Petroleum Engineering?',
          options: ['Only geology', 'Geology, physics, chemistry, and mathematics', 'Only chemistry', 'Biology and botany'],
          correctAnswer: 1,
        },
        {
          question: 'What do petroleum engineers aim to maximize?',
          options: ['Environmental damage', 'Oil and gas recovery', 'Extraction costs', 'Water pollution'],
          correctAnswer: 1,
        },
        {
          question: 'Where are oil and gas deposits typically found?',
          options: ['In the atmosphere', 'Below the Earth\'s surface', 'In the ocean surface', 'In space'],
          correctAnswer: 1,
        },
        {
          question: 'What is a key goal of petroleum engineers?',
          options: ['Increase costs', 'Minimize environmental impact', 'Reduce efficiency', 'Waste resources'],
          correctAnswer: 1,
        },
      ],
      ar: [
        {
          question: 'ما هو الاهتمام الرئيسي لهندسة النفط؟',
          options: ['بناء الطرق', 'استكشاف وإنتاج النفط والغاز', 'تصنيع السيارات', 'معالجة الأغذية'],
          correctAnswer: 1,
        },
        {
          question: 'ما هي التخصصات العلمية المجتمعة في هندسة النفط؟',
          options: ['الجيولوجيا فقط', 'الجيولوجيا والفيزياء والكيمياء والرياضيات', 'الكيمياء فقط', 'البيولوجيا وعلم النبات'],
          correctAnswer: 1,
        },
        {
          question: 'ما الذي يهدف مهندسو النفط إلى تعظيمه؟',
          options: ['الضرر البيئي', 'استخلاص النفط والغاز', 'تكاليف الاستخراج', 'تلوث المياه'],
          correctAnswer: 1,
        },
        {
          question: 'أين توجد رواسب النفط والغاز عادة؟',
          options: ['في الغلاف الجوي', 'تحت سطح الأرض', 'على سطح المحيط', 'في الفضاء'],
          correctAnswer: 1,
        },
        {
          question: 'ما هو الهدف الرئيسي لمهندسي النفط؟',
          options: ['زيادة التكاليف', 'تقليل الأثر البيئي', 'تقليل الكفاءة', 'إهدار الموارد'],
          correctAnswer: 1,
        },
      ],
    },
  },
  {
    id: 'drilling',
    titleKey: 'drilling',
    icon: '⚙️',
    content: {
      en: {
        title: 'Basics of Drilling',
        definition: 'Drilling is the process of creating a hole in the earth\'s surface to access underground oil and gas reservoirs.',
        explanation: 'The drilling process involves using a rotating drill bit attached to a drill string to penetrate rock formations. Drilling fluid (mud) is circulated to cool the bit, carry rock cuttings to the surface, and maintain pressure control. Modern drilling techniques include directional drilling, which allows accessing reservoirs that are not directly below the drilling site.',
        summary: 'Drilling uses specialized equipment to create access points to underground hydrocarbon reservoirs, employing various techniques for efficiency and safety.',
      },
      ar: {
        title: 'أساسيات الحفر',
        definition: 'الحفر هو عملية إنشاء ثقب في سطح الأرض للوصول إلى مخزونات النفط والغاز تحت الأرض.',
        explanation: 'تتضمن عملية الحفر استخدام رأس حفر دوار متصل بسلسلة الحفر لاختراق التكوينات الصخرية. يتم تدوير سائل الحفر (الطين) لتبريد رأس الحفر ونقل فتات الصخور إلى السطح والحفاظ على التحكم في الضغط. تشمل تقنيات الحفر الحديثة الحفر الموجه الذي يسمح بالوصول إلى المخزونات غير الموجودة مباشرة تحت موقع الحفر.',
        summary: 'يستخدم الحفر معدات متخصصة لإنشاء نقاط وصول إلى مخزونات الهيدروكربونات تحت الأرض، باستخدام تقنيات متنوعة للكفاءة والسلامة.',
      },
    },
    quiz: {
      en: [
        {
          question: 'What is the primary purpose of drilling in petroleum engineering?',
          options: ['To find water', 'To access underground oil and gas reservoirs', 'To build foundations', 'To plant trees'],
          correctAnswer: 1,
        },
        {
          question: 'What is drilling fluid commonly called?',
          options: ['Water', 'Oil', 'Mud', 'Gas'],
          correctAnswer: 2,
        },
        {
          question: 'What does drilling fluid help with?',
          options: ['Cooking', 'Cooling the bit and carrying rock cuttings', 'Painting', 'Heating'],
          correctAnswer: 1,
        },
        {
          question: 'What is directional drilling?',
          options: ['Drilling only vertically', 'Drilling to access reservoirs not directly below', 'Drilling in circles', 'Drilling backwards'],
          correctAnswer: 1,
        },
        {
          question: 'What tool is used to penetrate rock formations?',
          options: ['Hammer', 'Drill bit', 'Shovel', 'Pickaxe'],
          correctAnswer: 1,
        },
      ],
      ar: [
        {
          question: 'ما هو الغرض الرئيسي من الحفر في هندسة النفط؟',
          options: ['للعثور على الماء', 'للوصول إلى مخزونات النفط والغاز', 'لبناء الأساسات', 'لزراعة الأشجار'],
          correctAnswer: 1,
        },
        {
          question: 'ما هو الاسم الشائع لسائل الحفر؟',
          options: ['ماء', 'نفط', 'طين', 'غاز'],
          correctAnswer: 2,
        },
        {
          question: 'فيما يساعد سائل الحفر؟',
          options: ['الطبخ', 'تبريد رأس الحفر ونقل فتات الصخور', 'الطلاء', 'التسخين'],
          correctAnswer: 1,
        },
        {
          question: 'ما هو الحفر الموجه؟',
          options: ['الحفر عموديًا فقط', 'الحفر للوصول إلى مخزونات ليست مباشرة تحت الموقع', 'الحفر بشكل دائري', 'الحفر للخلف'],
          correctAnswer: 1,
        },
        {
          question: 'ما هي الأداة المستخدمة لاختراق التكوينات الصخرية؟',
          options: ['مطرقة', 'رأس الحفر', 'مجرفة', 'معول'],
          correctAnswer: 1,
        },
      ],
    },
  },
  {
    id: 'wells',
    titleKey: 'wells',
    icon: '🕳️',
    content: {
      en: {
        title: 'Types of Wells',
        definition: 'Wells are classified based on their purpose, trajectory, and the type of hydrocarbons they produce.',
        explanation: 'There are several types of wells: Exploration wells (wildcats) are drilled to discover new reservoirs. Development wells are drilled after discovery to produce hydrocarbons. Injection wells inject water or gas to maintain reservoir pressure. Based on trajectory, wells can be vertical, deviated, horizontal, or multilateral. Production wells can produce oil, gas, or both.',
        summary: 'Wells are categorized by their function (exploration, development, injection) and trajectory (vertical, horizontal, directional), each serving specific purposes in hydrocarbon extraction.',
      },
      ar: {
        title: 'أنواع الآبار',
        definition: 'تُصنف الآبار بناءً على غرضها ومسارها ونوع الهيدروكربونات التي تنتجها.',
        explanation: 'هناك عدة أنواع من الآبار: آبار الاستكشاف تُحفر لاكتشاف مخزونات جديدة. آبار التطوير تُحفر بعد الاكتشاف لإنتاج الهيدروكربونات. آبار الحقن تضخ الماء أو الغاز للحفاظ على ضغط المخزون. بناءً على المسار، يمكن أن تكون الآبار عمودية أو منحرفة أو أفقية أو متعددة الفروع. آبار الإنتاج يمكن أن تنتج نفطًا أو غازًا أو كليهما.',
        summary: 'تُصنف الآبار حسب وظيفتها (استكشاف، تطوير، حقن) ومسارها (عمودي، أفقي، موجه)، كل منها يخدم أغراضًا محددة في استخراج الهيدروكربونات.',
      },
    },
    quiz: {
      en: [
        {
          question: 'What is an exploration well also called?',
          options: ['Tame well', 'Wildcat', 'Pet well', 'Domestic well'],
          correctAnswer: 1,
        },
        {
          question: 'What is the purpose of injection wells?',
          options: ['To produce oil', 'To maintain reservoir pressure', 'To explore new areas', 'To store equipment'],
          correctAnswer: 1,
        },
        {
          question: 'When are development wells drilled?',
          options: ['Before exploration', 'After discovery of hydrocarbons', 'Never', 'Randomly'],
          correctAnswer: 1,
        },
        {
          question: 'Which is NOT a well trajectory type?',
          options: ['Vertical', 'Horizontal', 'Diagonal upward', 'Multilateral'],
          correctAnswer: 2,
        },
        {
          question: 'What can production wells produce?',
          options: ['Only water', 'Oil, gas, or both', 'Only electricity', 'Only minerals'],
          correctAnswer: 1,
        },
      ],
      ar: [
        {
          question: 'ما هو الاسم الآخر لبئر الاستكشاف؟',
          options: ['بئر أليف', 'بئر استطلاعي', 'بئر منزلي', 'بئر محلي'],
          correctAnswer: 1,
        },
        {
          question: 'ما هو غرض آبار الحقن؟',
          options: ['إنتاج النفط', 'الحفاظ على ضغط المخزون', 'استكشاف مناطق جديدة', 'تخزين المعدات'],
          correctAnswer: 1,
        },
        {
          question: 'متى تُحفر آبار التطوير؟',
          options: ['قبل الاستكشاف', 'بعد اكتشاف الهيدروكربونات', 'أبدًا', 'عشوائيًا'],
          correctAnswer: 1,
        },
        {
          question: 'أي من التالي ليس نوعًا من مسارات الآبار؟',
          options: ['عمودي', 'أفقي', 'قطري صعودي', 'متعدد الفروع'],
          correctAnswer: 2,
        },
        {
          question: 'ماذا يمكن أن تنتج آبار الإنتاج؟',
          options: ['ماء فقط', 'نفط أو غاز أو كليهما', 'كهرباء فقط', 'معادن فقط'],
          correctAnswer: 1,
        },
      ],
    },
  },
  {
    id: 'rig',
    titleKey: 'rig',
    icon: '🏗️',
    content: {
      en: {
        title: 'Drilling Rig Overview',
        definition: 'A drilling rig is a complex machine that creates boreholes in the earth to extract oil and gas.',
        explanation: 'Key components include: The derrick/mast provides structural support. The drawworks handles the hoisting system. The rotary table or top drive rotates the drill string. The mud pumps circulate drilling fluid. The blowout preventer (BOP) provides well control. Rigs can be land-based or offshore (jack-up, semi-submersible, drillship).',
        summary: 'Drilling rigs are sophisticated systems with multiple components working together, available in various configurations for land and offshore operations.',
      },
      ar: {
        title: 'نظرة عامة على جهاز الحفر',
        definition: 'جهاز الحفر هو آلة معقدة تُنشئ ثقوبًا في الأرض لاستخراج النفط والغاز.',
        explanation: 'المكونات الرئيسية تشمل: برج الحفر يوفر الدعم الهيكلي. نظام الرفع يتعامل مع عمليات السحب والإنزال. الطاولة الدوارة أو المحرك العلوي يدير سلسلة الحفر. مضخات الطين تدور سائل الحفر. مانع الانفجار يوفر التحكم في البئر. يمكن أن تكون أجهزة الحفر برية أو بحرية.',
        summary: 'أجهزة الحفر هي أنظمة متطورة ذات مكونات متعددة تعمل معًا، متوفرة في تكوينات مختلفة للعمليات البرية والبحرية.',
      },
    },
    quiz: {
      en: [
        {
          question: 'What does a drilling rig do?',
          options: ['Makes food', 'Creates boreholes to extract oil and gas', 'Builds houses', 'Generates electricity'],
          correctAnswer: 1,
        },
        {
          question: 'What provides structural support in a drilling rig?',
          options: ['Mud pump', 'Derrick/Mast', 'BOP', 'Rotary table'],
          correctAnswer: 1,
        },
        {
          question: 'What does BOP stand for?',
          options: ['Big Oil Pump', 'Blowout Preventer', 'Basic Oil Producer', 'Bottom of Pipe'],
          correctAnswer: 1,
        },
        {
          question: 'Which is an offshore rig type?',
          options: ['Land rig', 'Jack-up', 'Mountain rig', 'Desert rig'],
          correctAnswer: 1,
        },
        {
          question: 'What do mud pumps do?',
          options: ['Make mud', 'Circulate drilling fluid', 'Clean the rig', 'Pump oil'],
          correctAnswer: 1,
        },
      ],
      ar: [
        {
          question: 'ماذا يفعل جهاز الحفر؟',
          options: ['يصنع الطعام', 'ينشئ ثقوبًا لاستخراج النفط والغاز', 'يبني المنازل', 'يولد الكهرباء'],
          correctAnswer: 1,
        },
        {
          question: 'ما الذي يوفر الدعم الهيكلي في جهاز الحفر؟',
          options: ['مضخة الطين', 'برج الحفر', 'مانع الانفجار', 'الطاولة الدوارة'],
          correctAnswer: 1,
        },
        {
          question: 'ما معنى BOP؟',
          options: ['مضخة نفط كبيرة', 'مانع الانفجار', 'منتج نفط أساسي', 'أسفل الأنبوب'],
          correctAnswer: 1,
        },
        {
          question: 'أي من التالي نوع جهاز حفر بحري؟',
          options: ['جهاز بري', 'جاك أب', 'جهاز جبلي', 'جهاز صحراوي'],
          correctAnswer: 1,
        },
        {
          question: 'ماذا تفعل مضخات الطين؟',
          options: ['تصنع الطين', 'تدور سائل الحفر', 'تنظف الجهاز', 'تضخ النفط'],
          correctAnswer: 1,
        },
      ],
    },
  },
  {
    id: 'units',
    titleKey: 'units',
    icon: '📐',
    content: {
      en: {
        title: 'Units & Measurements',
        definition: 'Petroleum engineering uses specific units for measuring depth, pressure, volume, and flow rates.',
        explanation: 'Common units include: Depth is measured in feet or meters. Pressure is measured in psi (pounds per square inch) or bar. Volume is measured in barrels (bbl) or cubic meters. Flow rate is measured in barrels per day (bpd) or cubic meters per day. Understanding unit conversions is essential: 1 barrel = 42 US gallons = 159 liters.',
        summary: 'Standardized measurements in petroleum engineering ensure consistent communication and accurate calculations across global operations.',
      },
      ar: {
        title: 'الوحدات والقياسات',
        definition: 'تستخدم هندسة النفط وحدات محددة لقياس العمق والضغط والحجم ومعدلات التدفق.',
        explanation: 'الوحدات الشائعة تشمل: العمق يُقاس بالأقدام أو الأمتار. الضغط يُقاس بالرطل لكل بوصة مربعة أو البار. الحجم يُقاس بالبراميل أو الأمتار المكعبة. معدل التدفق يُقاس بالبراميل في اليوم أو الأمتار المكعبة في اليوم. فهم تحويلات الوحدات ضروري: 1 برميل = 42 غالون أمريكي = 159 لتر.',
        summary: 'القياسات الموحدة في هندسة النفط تضمن التواصل المتسق والحسابات الدقيقة عبر العمليات العالمية.',
      },
    },
    quiz: {
      en: [
        {
          question: 'How many US gallons are in one barrel of oil?',
          options: ['32', '42', '52', '62'],
          correctAnswer: 1,
        },
        {
          question: 'What unit is commonly used for pressure?',
          options: ['Gallons', 'PSI', 'Meters', 'Barrels'],
          correctAnswer: 1,
        },
        {
          question: 'What does bpd stand for?',
          options: ['Barrels per day', 'Bits per drive', 'Blocks per distance', 'Bars per depth'],
          correctAnswer: 0,
        },
        {
          question: 'How many liters are in one barrel?',
          options: ['100', '159', '200', '250'],
          correctAnswer: 1,
        },
        {
          question: 'Depth can be measured in:',
          options: ['Gallons', 'PSI', 'Feet or meters', 'Barrels'],
          correctAnswer: 2,
        },
      ],
      ar: [
        {
          question: 'كم غالون أمريكي في برميل النفط الواحد؟',
          options: ['32', '42', '52', '62'],
          correctAnswer: 1,
        },
        {
          question: 'ما هي الوحدة المستخدمة عادة للضغط؟',
          options: ['غالون', 'رطل لكل بوصة مربعة', 'متر', 'برميل'],
          correctAnswer: 1,
        },
        {
          question: 'ما معنى bpd؟',
          options: ['براميل في اليوم', 'بتات لكل محرك', 'كتل لكل مسافة', 'بارات لكل عمق'],
          correctAnswer: 0,
        },
        {
          question: 'كم لتر في البرميل الواحد؟',
          options: ['100', '159', '200', '250'],
          correctAnswer: 1,
        },
        {
          question: 'يمكن قياس العمق بـ:',
          options: ['غالون', 'رطل لكل بوصة مربعة', 'أقدام أو أمتار', 'براميل'],
          correctAnswer: 2,
        },
      ],
    },
  },
  {
    id: 'terminology',
    titleKey: 'terminology',
    icon: '📚',
    content: {
      en: {
        title: 'Basic Drilling Terminology',
        definition: 'Key terms used in drilling operations that every petroleum engineer must understand.',
        explanation: 'Essential terms: Spud - starting to drill a well. Trip - pulling out or running in the drill string. Casing - steel pipe installed in the wellbore. Cementing - pumping cement to secure casing. Kick - unexpected influx of formation fluids. Lost circulation - loss of drilling fluid into the formation. ROP - Rate of Penetration, how fast we drill.',
        summary: 'Mastering drilling terminology is fundamental for effective communication and safe operations in the petroleum industry.',
      },
      ar: {
        title: 'مصطلحات الحفر الأساسية',
        definition: 'المصطلحات الرئيسية المستخدمة في عمليات الحفر التي يجب على كل مهندس نفط فهمها.',
        explanation: 'المصطلحات الأساسية: Spud - بدء حفر البئر. Trip - سحب أو إنزال سلسلة الحفر. Casing - أنبوب فولاذي يُركب في فتحة البئر. Cementing - ضخ الأسمنت لتثبيت الغلاف. Kick - تدفق غير متوقع لسوائل التكوين. Lost circulation - فقدان سائل الحفر في التكوين. ROP - معدل الاختراق، سرعة الحفر.',
        summary: 'إتقان مصطلحات الحفر أمر أساسي للتواصل الفعال والعمليات الآمنة في صناعة النفط.',
      },
    },
    quiz: {
      en: [
        {
          question: 'What does "Spud" mean in drilling?',
          options: ['Ending drilling', 'Starting to drill a well', 'A type of potato', 'A drilling problem'],
          correctAnswer: 1,
        },
        {
          question: 'What is casing?',
          options: ['A carrying case', 'Steel pipe in the wellbore', 'A type of drill bit', 'A drilling fluid'],
          correctAnswer: 1,
        },
        {
          question: 'What is a "kick"?',
          options: ['A sports move', 'Unexpected influx of formation fluids', 'A type of pump', 'A drilling technique'],
          correctAnswer: 1,
        },
        {
          question: 'What does ROP stand for?',
          options: ['Rate of Production', 'Rate of Penetration', 'Range of Pressure', 'Risk of Problems'],
          correctAnswer: 1,
        },
        {
          question: 'What is cementing used for?',
          options: ['Building houses', 'Securing casing', 'Making roads', 'Cleaning equipment'],
          correctAnswer: 1,
        },
      ],
      ar: [
        {
          question: 'ماذا يعني "Spud" في الحفر؟',
          options: ['إنهاء الحفر', 'بدء حفر البئر', 'نوع من البطاطس', 'مشكلة حفر'],
          correctAnswer: 1,
        },
        {
          question: 'ما هو الـ Casing؟',
          options: ['حقيبة حمل', 'أنبوب فولاذي في فتحة البئر', 'نوع من رؤوس الحفر', 'سائل حفر'],
          correctAnswer: 1,
        },
        {
          question: 'ما هو الـ "Kick"؟',
          options: ['حركة رياضية', 'تدفق غير متوقع لسوائل التكوين', 'نوع من المضخات', 'تقنية حفر'],
          correctAnswer: 1,
        },
        {
          question: 'ماذا يعني ROP؟',
          options: ['معدل الإنتاج', 'معدل الاختراق', 'نطاق الضغط', 'خطر المشاكل'],
          correctAnswer: 1,
        },
        {
          question: 'لماذا يُستخدم الإسمنت؟',
          options: ['بناء المنازل', 'تثبيت الغلاف', 'صنع الطرق', 'تنظيف المعدات'],
          correctAnswer: 1,
        },
      ],
    },
  },
];
