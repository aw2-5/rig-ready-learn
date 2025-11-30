import { QuizQuestion } from './lessons';

export interface DailyContent {
  day: number;
  type: 'learning' | 'quiz' | 'project';
  content: {
    en: {
      title: string;
      explanation: string;
      keyTerms: { term: string; definition: string }[];
      practiceQuestion?: {
        question: string;
        options: string[];
        correctAnswer: number;
      };
    };
    ar: {
      title: string;
      explanation: string;
      keyTerms: { term: string; definition: string }[];
      practiceQuestion?: {
        question: string;
        options: string[];
        correctAnswer: number;
      };
    };
  };
  quiz?: {
    en: QuizQuestion[];
    ar: QuizQuestion[];
  };
  project?: {
    en: {
      title: string;
      description: string;
      instructions: string[];
      submissionType: 'text' | 'image' | 'both';
    };
    ar: {
      title: string;
      description: string;
      instructions: string[];
      submissionType: 'text' | 'image' | 'both';
    };
  };
}

export interface WeeklyLesson {
  lessonId: string;
  days: DailyContent[];
}

export const weeklyContent: WeeklyLesson[] = [
  // Introduction to Petroleum Engineering
  {
    lessonId: 'intro',
    days: [
      {
        day: 1,
        type: 'learning',
        content: {
          en: {
            title: 'What is Petroleum Engineering?',
            explanation: 'Petroleum Engineering is a specialized field of engineering focused on the exploration, extraction, and production of crude oil and natural gas. It combines principles from geology, chemistry, physics, and mathematics to develop efficient methods for recovering hydrocarbons from underground reservoirs. Petroleum engineers work on designing drilling operations, optimizing production rates, and ensuring safe and environmentally responsible extraction processes.',
            keyTerms: [
              { term: 'Petroleum', definition: 'A naturally occurring liquid found beneath the Earth\'s surface that can be refined into fuel' },
              { term: 'Hydrocarbons', definition: 'Organic compounds consisting of hydrogen and carbon, the main components of oil and gas' },
              { term: 'Reservoir', definition: 'An underground formation of porous rock containing oil or gas' },
            ],
            practiceQuestion: {
              question: 'What are hydrocarbons primarily composed of?',
              options: ['Oxygen and nitrogen', 'Hydrogen and carbon', 'Sulfur and phosphorus', 'Iron and copper'],
              correctAnswer: 1,
            },
          },
          ar: {
            title: 'ما هي هندسة النفط؟',
            explanation: 'هندسة النفط هي مجال هندسي متخصص يركز على استكشاف واستخراج وإنتاج النفط الخام والغاز الطبيعي. تجمع بين مبادئ الجيولوجيا والكيمياء والفيزياء والرياضيات لتطوير طرق فعالة لاستخراج الهيدروكربونات من المخزونات الجوفية. يعمل مهندسو النفط على تصميم عمليات الحفر وتحسين معدلات الإنتاج وضمان عمليات استخراج آمنة ومسؤولة بيئياً.',
            keyTerms: [
              { term: 'النفط', definition: 'سائل طبيعي يوجد تحت سطح الأرض يمكن تكريره إلى وقود' },
              { term: 'الهيدروكربونات', definition: 'مركبات عضوية تتكون من الهيدروجين والكربون، المكونات الرئيسية للنفط والغاز' },
              { term: 'المخزون', definition: 'تكوين جوفي من الصخور المسامية يحتوي على النفط أو الغاز' },
            ],
            practiceQuestion: {
              question: 'مما تتكون الهيدروكربونات بشكل أساسي؟',
              options: ['الأكسجين والنيتروجين', 'الهيدروجين والكربون', 'الكبريت والفوسفور', 'الحديد والنحاس'],
              correctAnswer: 1,
            },
          },
        },
      },
      {
        day: 2,
        type: 'learning',
        content: {
          en: {
            title: 'History and Importance of Oil & Gas',
            explanation: 'The modern petroleum industry began in 1859 when Edwin Drake drilled the first commercial oil well in Pennsylvania, USA. Since then, oil and gas have become the primary energy sources powering global economies. Petroleum products are used in transportation, heating, electricity generation, and as raw materials for plastics, chemicals, and pharmaceuticals. Understanding this history helps appreciate the industry\'s evolution and future challenges.',
            keyTerms: [
              { term: 'Drake Well', definition: 'The first commercially successful oil well, drilled in 1859' },
              { term: 'Crude Oil', definition: 'Unrefined petroleum extracted directly from the ground' },
              { term: 'Petrochemicals', definition: 'Chemical products derived from petroleum' },
            ],
            practiceQuestion: {
              question: 'When was the first commercial oil well drilled?',
              options: ['1759', '1859', '1959', '1809'],
              correctAnswer: 1,
            },
          },
          ar: {
            title: 'تاريخ وأهمية النفط والغاز',
            explanation: 'بدأت صناعة النفط الحديثة في عام 1859 عندما حفر إدوين دريك أول بئر نفط تجاري في بنسلفانيا بالولايات المتحدة. منذ ذلك الحين، أصبح النفط والغاز المصادر الرئيسية للطاقة التي تدير الاقتصادات العالمية. تُستخدم المنتجات البترولية في النقل والتدفئة وتوليد الكهرباء وكمواد خام للبلاستيك والمواد الكيميائية والأدوية.',
            keyTerms: [
              { term: 'بئر دريك', definition: 'أول بئر نفط تجاري ناجح، حُفر في عام 1859' },
              { term: 'النفط الخام', definition: 'النفط غير المكرر المستخرج مباشرة من الأرض' },
              { term: 'البتروكيماويات', definition: 'المنتجات الكيميائية المشتقة من النفط' },
            ],
            practiceQuestion: {
              question: 'متى تم حفر أول بئر نفط تجاري؟',
              options: ['1759', '1859', '1959', '1809'],
              correctAnswer: 1,
            },
          },
        },
      },
      {
        day: 3,
        type: 'learning',
        content: {
          en: {
            title: 'Branches of Petroleum Engineering',
            explanation: 'Petroleum Engineering has four main branches: Drilling Engineering focuses on creating wellbores to access reservoirs. Reservoir Engineering analyzes reservoir properties and optimizes recovery. Production Engineering deals with bringing hydrocarbons to the surface efficiently. Formation Evaluation involves assessing rock and fluid properties. Each branch requires specialized knowledge and works together to maximize oil and gas recovery.',
            keyTerms: [
              { term: 'Drilling Engineering', definition: 'The branch focused on designing and executing drilling operations' },
              { term: 'Reservoir Engineering', definition: 'The branch that analyzes underground formations to maximize recovery' },
              { term: 'Production Engineering', definition: 'The branch dealing with surface facilities and well performance' },
            ],
            practiceQuestion: {
              question: 'Which branch focuses on analyzing underground formations?',
              options: ['Drilling Engineering', 'Reservoir Engineering', 'Production Engineering', 'Civil Engineering'],
              correctAnswer: 1,
            },
          },
          ar: {
            title: 'فروع هندسة النفط',
            explanation: 'لهندسة النفط أربعة فروع رئيسية: هندسة الحفر تركز على إنشاء الآبار للوصول إلى المخزونات. هندسة المخزونات تحلل خصائص المخزون وتحسن الاستخلاص. هندسة الإنتاج تتعامل مع إحضار الهيدروكربونات إلى السطح بكفاءة. تقييم التكوينات يتضمن تقييم خصائص الصخور والسوائل.',
            keyTerms: [
              { term: 'هندسة الحفر', definition: 'الفرع المركز على تصميم وتنفيذ عمليات الحفر' },
              { term: 'هندسة المخزونات', definition: 'الفرع الذي يحلل التكوينات الجوفية لتعظيم الاستخلاص' },
              { term: 'هندسة الإنتاج', definition: 'الفرع الذي يتعامل مع المرافق السطحية وأداء البئر' },
            ],
            practiceQuestion: {
              question: 'أي فرع يركز على تحليل التكوينات الجوفية؟',
              options: ['هندسة الحفر', 'هندسة المخزونات', 'هندسة الإنتاج', 'الهندسة المدنية'],
              correctAnswer: 1,
            },
          },
        },
      },
      {
        day: 4,
        type: 'learning',
        content: {
          en: {
            title: 'Career Paths in Petroleum Engineering',
            explanation: 'Petroleum engineers can work in various roles: Field Engineers work on drilling sites managing operations. Research Engineers develop new technologies and methods. Consulting Engineers provide expertise to multiple companies. Management positions oversee projects and teams. The industry offers competitive salaries and opportunities for global travel and advancement.',
            keyTerms: [
              { term: 'Field Engineer', definition: 'An engineer who works directly at drilling or production sites' },
              { term: 'Upstream', definition: 'The exploration and production sector of the oil industry' },
              { term: 'Downstream', definition: 'The refining and distribution sector of the oil industry' },
            ],
            practiceQuestion: {
              question: 'What does "upstream" refer to in the oil industry?',
              options: ['Refining operations', 'Exploration and production', 'Marketing and sales', 'Transportation'],
              correctAnswer: 1,
            },
          },
          ar: {
            title: 'المسارات المهنية في هندسة النفط',
            explanation: 'يمكن لمهندسي النفط العمل في أدوار مختلفة: مهندسو الميدان يعملون في مواقع الحفر لإدارة العمليات. مهندسو البحث يطورون تقنيات وطرق جديدة. المهندسون الاستشاريون يقدمون الخبرة لشركات متعددة. المناصب الإدارية تشرف على المشاريع والفرق.',
            keyTerms: [
              { term: 'مهندس ميداني', definition: 'مهندس يعمل مباشرة في مواقع الحفر أو الإنتاج' },
              { term: 'المنبع', definition: 'قطاع الاستكشاف والإنتاج في صناعة النفط' },
              { term: 'المصب', definition: 'قطاع التكرير والتوزيع في صناعة النفط' },
            ],
            practiceQuestion: {
              question: 'إلى ماذا يشير مصطلح "المنبع" في صناعة النفط؟',
              options: ['عمليات التكرير', 'الاستكشاف والإنتاج', 'التسويق والمبيعات', 'النقل'],
              correctAnswer: 1,
            },
          },
        },
      },
      {
        day: 5,
        type: 'learning',
        content: {
          en: {
            title: 'Environmental Considerations',
            explanation: 'Modern petroleum engineering emphasizes environmental responsibility. Engineers must minimize ecological impact through proper waste management, spill prevention, and emission controls. The industry is evolving toward cleaner technologies, including carbon capture and sustainable practices. Understanding environmental regulations is essential for all petroleum engineers.',
            keyTerms: [
              { term: 'Carbon Capture', definition: 'Technology to capture and store CO2 emissions' },
              { term: 'HSE', definition: 'Health, Safety, and Environment - key industry standards' },
              { term: 'Remediation', definition: 'The process of cleaning up contaminated sites' },
            ],
            practiceQuestion: {
              question: 'What does HSE stand for?',
              options: ['High Speed Equipment', 'Health, Safety, and Environment', 'Hydrocarbon Storage Estimate', 'Heavy Steel Engineering'],
              correctAnswer: 1,
            },
          },
          ar: {
            title: 'الاعتبارات البيئية',
            explanation: 'تؤكد هندسة النفط الحديثة على المسؤولية البيئية. يجب على المهندسين تقليل التأثير البيئي من خلال الإدارة السليمة للنفايات ومنع التسرب والتحكم في الانبعاثات. تتطور الصناعة نحو تقنيات أنظف، بما في ذلك احتجاز الكربون والممارسات المستدامة.',
            keyTerms: [
              { term: 'احتجاز الكربون', definition: 'تقنية لالتقاط وتخزين انبعاثات ثاني أكسيد الكربون' },
              { term: 'الصحة والسلامة والبيئة', definition: 'معايير الصناعة الرئيسية' },
              { term: 'المعالجة', definition: 'عملية تنظيف المواقع الملوثة' },
            ],
            practiceQuestion: {
              question: 'ماذا تعني HSE؟',
              options: ['معدات عالية السرعة', 'الصحة والسلامة والبيئة', 'تقدير تخزين الهيدروكربونات', 'هندسة الصلب الثقيل'],
              correctAnswer: 1,
            },
          },
        },
      },
      {
        day: 6,
        type: 'quiz',
        content: {
          en: { title: 'Weekly Quiz', explanation: 'Test your knowledge from this week\'s lessons.', keyTerms: [] },
          ar: { title: 'اختبار الأسبوع', explanation: 'اختبر معرفتك من دروس هذا الأسبوع.', keyTerms: [] },
        },
        quiz: {
          en: [
            { question: 'What is Petroleum Engineering primarily concerned with?', options: ['Building roads', 'Exploration and production of oil and gas', 'Manufacturing cars', 'Food processing'], correctAnswer: 1 },
            { question: 'When was the first commercial oil well drilled?', options: ['1759', '1859', '1959', '1909'], correctAnswer: 1 },
            { question: 'What are hydrocarbons composed of?', options: ['Oxygen and nitrogen', 'Hydrogen and carbon', 'Iron and copper', 'Sulfur and calcium'], correctAnswer: 1 },
            { question: 'Which branch of petroleum engineering focuses on creating wellbores?', options: ['Reservoir Engineering', 'Production Engineering', 'Drilling Engineering', 'Chemical Engineering'], correctAnswer: 2 },
            { question: 'What does "upstream" refer to?', options: ['Refining', 'Exploration and production', 'Marketing', 'Transportation'], correctAnswer: 1 },
            { question: 'What is a reservoir?', options: ['A storage tank', 'Underground rock formation with oil/gas', 'A type of drill', 'A refinery unit'], correctAnswer: 1 },
            { question: 'Who drilled the first commercial oil well?', options: ['John Rockefeller', 'Edwin Drake', 'Henry Ford', 'Thomas Edison'], correctAnswer: 1 },
            { question: 'What does HSE stand for?', options: ['High Speed Equipment', 'Health, Safety, Environment', 'Heavy Steel Engineering', 'Hydrocarbon Storage Estimate'], correctAnswer: 1 },
            { question: 'What is carbon capture?', options: ['Mining carbon', 'Capturing and storing CO2', 'Burning carbon', 'Measuring carbon'], correctAnswer: 1 },
            { question: 'What are petrochemicals?', options: ['Petroleum rocks', 'Chemicals from petroleum', 'Petroleum containers', 'Petroleum colors'], correctAnswer: 1 },
          ],
          ar: [
            { question: 'ما هو الاهتمام الرئيسي لهندسة النفط؟', options: ['بناء الطرق', 'استكشاف وإنتاج النفط والغاز', 'تصنيع السيارات', 'معالجة الأغذية'], correctAnswer: 1 },
            { question: 'متى تم حفر أول بئر نفط تجاري؟', options: ['1759', '1859', '1959', '1909'], correctAnswer: 1 },
            { question: 'مما تتكون الهيدروكربونات؟', options: ['الأكسجين والنيتروجين', 'الهيدروجين والكربون', 'الحديد والنحاس', 'الكبريت والكالسيوم'], correctAnswer: 1 },
            { question: 'أي فرع من هندسة النفط يركز على إنشاء الآبار؟', options: ['هندسة المخزونات', 'هندسة الإنتاج', 'هندسة الحفر', 'الهندسة الكيميائية'], correctAnswer: 2 },
            { question: 'إلى ماذا يشير "المنبع"؟', options: ['التكرير', 'الاستكشاف والإنتاج', 'التسويق', 'النقل'], correctAnswer: 1 },
            { question: 'ما هو المخزون؟', options: ['خزان تخزين', 'تكوين صخري جوفي به نفط/غاز', 'نوع من المثاقب', 'وحدة تكرير'], correctAnswer: 1 },
            { question: 'من حفر أول بئر نفط تجاري؟', options: ['جون روكفلر', 'إدوين دريك', 'هنري فورد', 'توماس إديسون'], correctAnswer: 1 },
            { question: 'ماذا تعني HSE؟', options: ['معدات عالية السرعة', 'الصحة والسلامة والبيئة', 'هندسة الصلب الثقيل', 'تقدير تخزين الهيدروكربونات'], correctAnswer: 1 },
            { question: 'ما هو احتجاز الكربون؟', options: ['تعدين الكربون', 'التقاط وتخزين ثاني أكسيد الكربون', 'حرق الكربون', 'قياس الكربون'], correctAnswer: 1 },
            { question: 'ما هي البتروكيماويات؟', options: ['صخور النفط', 'مواد كيميائية من النفط', 'حاويات النفط', 'ألوان النفط'], correctAnswer: 1 },
          ],
        },
      },
      {
        day: 7,
        type: 'project',
        content: {
          en: { title: 'Mini Project', explanation: 'Apply what you learned this week.', keyTerms: [] },
          ar: { title: 'مشروع صغير', explanation: 'طبق ما تعلمته هذا الأسبوع.', keyTerms: [] },
        },
        project: {
          en: {
            title: 'Petroleum Industry Research',
            description: 'Research and describe a major oil company or oil field in your region or globally.',
            instructions: [
              'Choose a well-known oil company (e.g., Saudi Aramco, ExxonMobil, BP) or oil field',
              'Research its history, operations, and significance',
              'Write a 200-word summary covering: founding date, main operations, production capacity, and environmental initiatives',
              'You may include an image of the company logo or oil field',
            ],
            submissionType: 'both',
          },
          ar: {
            title: 'بحث عن صناعة النفط',
            description: 'ابحث وصف شركة نفط كبرى أو حقل نفطي في منطقتك أو عالمياً.',
            instructions: [
              'اختر شركة نفط معروفة (مثل أرامكو السعودية، إكسون موبيل، بي بي) أو حقل نفطي',
              'ابحث عن تاريخها وعملياتها وأهميتها',
              'اكتب ملخصاً من 200 كلمة يغطي: تاريخ التأسيس، العمليات الرئيسية، القدرة الإنتاجية، والمبادرات البيئية',
              'يمكنك إضافة صورة لشعار الشركة أو الحقل النفطي',
            ],
            submissionType: 'both',
          },
        },
      },
    ],
  },
  // Basics of Drilling
  {
    lessonId: 'drilling',
    days: [
      {
        day: 1,
        type: 'learning',
        content: {
          en: {
            title: 'Introduction to Drilling Operations',
            explanation: 'Drilling is the process of creating a borehole in the earth to reach underground oil and gas reservoirs. This operation requires careful planning, specialized equipment, and skilled personnel. The drilling process involves rotating a drill bit attached to a drill string, which penetrates rock formations layer by layer until reaching the target depth.',
            keyTerms: [
              { term: 'Borehole', definition: 'The hole created by drilling into the earth' },
              { term: 'Drill String', definition: 'The connected series of drill pipes that transmit rotation and weight to the drill bit' },
              { term: 'Drill Bit', definition: 'The cutting tool at the end of the drill string that breaks rock' },
            ],
            practiceQuestion: {
              question: 'What is the cutting tool at the end of the drill string called?',
              options: ['Drill pipe', 'Drill bit', 'Casing', 'Derrick'],
              correctAnswer: 1,
            },
          },
          ar: {
            title: 'مقدمة في عمليات الحفر',
            explanation: 'الحفر هو عملية إنشاء ثقب في الأرض للوصول إلى مخزونات النفط والغاز الجوفية. تتطلب هذه العملية تخطيطاً دقيقاً ومعدات متخصصة وكوادر ماهرة. تتضمن عملية الحفر تدوير رأس حفر متصل بسلسلة الحفر، والذي يخترق طبقات الصخور حتى الوصول إلى العمق المستهدف.',
            keyTerms: [
              { term: 'فتحة البئر', definition: 'الثقب الناتج عن الحفر في الأرض' },
              { term: 'سلسلة الحفر', definition: 'السلسلة المتصلة من أنابيب الحفر التي تنقل الدوران والوزن إلى رأس الحفر' },
              { term: 'رأس الحفر', definition: 'أداة القطع في نهاية سلسلة الحفر التي تكسر الصخور' },
            ],
            practiceQuestion: {
              question: 'ماذا تسمى أداة القطع في نهاية سلسلة الحفر؟',
              options: ['أنبوب الحفر', 'رأس الحفر', 'الغلاف', 'البرج'],
              correctAnswer: 1,
            },
          },
        },
      },
      {
        day: 2,
        type: 'learning',
        content: {
          en: {
            title: 'Drilling Fluids (Mud)',
            explanation: 'Drilling fluid, commonly called mud, is essential for drilling operations. It circulates from the surface, down through the drill string, out through the bit, and back up the annulus. Mud serves multiple purposes: cooling and lubricating the bit, carrying rock cuttings to surface, maintaining hydrostatic pressure to prevent blowouts, and stabilizing the wellbore walls.',
            keyTerms: [
              { term: 'Drilling Mud', definition: 'A fluid circulated during drilling to cool the bit and remove cuttings' },
              { term: 'Annulus', definition: 'The space between the drill string and the wellbore wall' },
              { term: 'Cuttings', definition: 'Rock fragments produced by the drilling process' },
            ],
            practiceQuestion: {
              question: 'What is the main purpose of drilling mud?',
              options: ['To make the hole muddy', 'To cool the bit and carry cuttings', 'To fill the oil tank', 'To lubricate the derrick'],
              correctAnswer: 1,
            },
          },
          ar: {
            title: 'سوائل الحفر (الطين)',
            explanation: 'سائل الحفر، المعروف بالطين، ضروري لعمليات الحفر. يدور من السطح، نزولاً عبر سلسلة الحفر، خروجاً عبر الرأس، وصعوداً عبر الفراغ الحلقي. يخدم الطين أغراضاً متعددة: تبريد وتزييت الرأس، نقل فتات الصخور للسطح، الحفاظ على الضغط الهيدروستاتيكي لمنع الانفجارات، وتثبيت جدران البئر.',
            keyTerms: [
              { term: 'طين الحفر', definition: 'سائل يدور أثناء الحفر لتبريد الرأس وإزالة الفتات' },
              { term: 'الفراغ الحلقي', definition: 'المساحة بين سلسلة الحفر وجدار البئر' },
              { term: 'الفتات', definition: 'شظايا الصخور الناتجة عن عملية الحفر' },
            ],
            practiceQuestion: {
              question: 'ما هو الغرض الرئيسي من طين الحفر؟',
              options: ['لجعل الحفرة موحلة', 'لتبريد الرأس ونقل الفتات', 'لملء خزان النفط', 'لتزييت البرج'],
              correctAnswer: 1,
            },
          },
        },
      },
      {
        day: 3,
        type: 'learning',
        content: {
          en: {
            title: 'Types of Drilling Methods',
            explanation: 'There are several drilling methods used in petroleum operations. Rotary drilling is most common, using a rotating bit. Cable tool drilling uses a heavy bit that pounds the rock. Directional drilling allows wells to deviate from vertical. Horizontal drilling extends wells parallel to reservoir layers. Each method has specific applications based on geology and target objectives.',
            keyTerms: [
              { term: 'Rotary Drilling', definition: 'Drilling method using continuous rotation of the bit' },
              { term: 'Directional Drilling', definition: 'Drilling at angles other than vertical' },
              { term: 'Horizontal Drilling', definition: 'Drilling parallel to rock layers to maximize contact' },
            ],
            practiceQuestion: {
              question: 'Which drilling method uses continuous rotation of the bit?',
              options: ['Cable tool drilling', 'Rotary drilling', 'Manual drilling', 'Explosive drilling'],
              correctAnswer: 1,
            },
          },
          ar: {
            title: 'أنواع طرق الحفر',
            explanation: 'هناك عدة طرق حفر مستخدمة في عمليات النفط. الحفر الدوار هو الأكثر شيوعاً، باستخدام رأس دوار. حفر الكابل يستخدم رأساً ثقيلاً يطرق الصخر. الحفر الموجه يسمح للآبار بالانحراف عن العمودي. الحفر الأفقي يمد الآبار موازية لطبقات المخزون.',
            keyTerms: [
              { term: 'الحفر الدوار', definition: 'طريقة حفر تستخدم الدوران المستمر للرأس' },
              { term: 'الحفر الموجه', definition: 'الحفر بزوايا غير عمودية' },
              { term: 'الحفر الأفقي', definition: 'الحفر الموازي لطبقات الصخور لتعظيم التلامس' },
            ],
            practiceQuestion: {
              question: 'أي طريقة حفر تستخدم الدوران المستمر للرأس؟',
              options: ['حفر الكابل', 'الحفر الدوار', 'الحفر اليدوي', 'الحفر المتفجر'],
              correctAnswer: 1,
            },
          },
        },
      },
      {
        day: 4,
        type: 'learning',
        content: {
          en: {
            title: 'Well Control and Safety',
            explanation: 'Well control is critical for safe drilling operations. The Blowout Preventer (BOP) is the primary safety device that can seal the well if formation fluids unexpectedly enter the wellbore (a kick). Maintaining proper mud weight ensures the hydrostatic pressure exceeds formation pressure. Regular drills and training prepare crews for emergency situations.',
            keyTerms: [
              { term: 'BOP', definition: 'Blowout Preventer - equipment that seals the well in emergencies' },
              { term: 'Kick', definition: 'Unexpected entry of formation fluids into the wellbore' },
              { term: 'Mud Weight', definition: 'The density of drilling fluid, measured in pounds per gallon (ppg)' },
            ],
            practiceQuestion: {
              question: 'What is a "kick" in drilling?',
              options: ['A type of drill bit', 'Unexpected entry of formation fluids', 'A drilling technique', 'A safety meeting'],
              correctAnswer: 1,
            },
          },
          ar: {
            title: 'التحكم في البئر والسلامة',
            explanation: 'التحكم في البئر أمر حاسم لعمليات الحفر الآمنة. مانع الانفجار هو جهاز السلامة الرئيسي الذي يمكنه إغلاق البئر إذا دخلت سوائل التكوين بشكل غير متوقع (ركلة). الحفاظ على وزن الطين المناسب يضمن أن الضغط الهيدروستاتيكي يتجاوز ضغط التكوين.',
            keyTerms: [
              { term: 'مانع الانفجار', definition: 'معدات تغلق البئر في حالات الطوارئ' },
              { term: 'الركلة', definition: 'دخول غير متوقع لسوائل التكوين إلى فتحة البئر' },
              { term: 'وزن الطين', definition: 'كثافة سائل الحفر، تُقاس بالرطل لكل غالون' },
            ],
            practiceQuestion: {
              question: 'ما هي "الركلة" في الحفر؟',
              options: ['نوع من رؤوس الحفر', 'دخول غير متوقع لسوائل التكوين', 'تقنية حفر', 'اجتماع سلامة'],
              correctAnswer: 1,
            },
          },
        },
      },
      {
        day: 5,
        type: 'learning',
        content: {
          en: {
            title: 'Drilling Optimization',
            explanation: 'Rate of Penetration (ROP) measures drilling speed in feet per hour. Optimizing ROP reduces costs and time. Factors affecting ROP include bit type, weight on bit (WOB), rotary speed (RPM), and mud properties. Modern wells use real-time data monitoring and optimization software to maximize efficiency while maintaining safety.',
            keyTerms: [
              { term: 'ROP', definition: 'Rate of Penetration - drilling speed measured in feet/hour' },
              { term: 'WOB', definition: 'Weight on Bit - downward force applied to the drill bit' },
              { term: 'RPM', definition: 'Rotations Per Minute - speed of drill string rotation' },
            ],
            practiceQuestion: {
              question: 'What does ROP measure?',
              options: ['Mud pressure', 'Drilling speed', 'Well depth', 'Pipe weight'],
              correctAnswer: 1,
            },
          },
          ar: {
            title: 'تحسين الحفر',
            explanation: 'معدل الاختراق يقيس سرعة الحفر بالقدم في الساعة. تحسين المعدل يقلل التكاليف والوقت. العوامل المؤثرة تشمل نوع الرأس، الوزن على الرأس، السرعة الدورانية، وخصائص الطين. الآبار الحديثة تستخدم مراقبة البيانات في الوقت الفعلي وبرامج التحسين.',
            keyTerms: [
              { term: 'معدل الاختراق', definition: 'سرعة الحفر تُقاس بالقدم/الساعة' },
              { term: 'الوزن على الرأس', definition: 'القوة الهابطة المطبقة على رأس الحفر' },
              { term: 'الدورات في الدقيقة', definition: 'سرعة دوران سلسلة الحفر' },
            ],
            practiceQuestion: {
              question: 'ماذا يقيس معدل الاختراق؟',
              options: ['ضغط الطين', 'سرعة الحفر', 'عمق البئر', 'وزن الأنبوب'],
              correctAnswer: 1,
            },
          },
        },
      },
      {
        day: 6,
        type: 'quiz',
        content: {
          en: { title: 'Drilling Basics Quiz', explanation: 'Test your knowledge of drilling fundamentals.', keyTerms: [] },
          ar: { title: 'اختبار أساسيات الحفر', explanation: 'اختبر معرفتك بأساسيات الحفر.', keyTerms: [] },
        },
        quiz: {
          en: [
            { question: 'What creates a borehole in drilling operations?', options: ['Explosives', 'Rotating drill bit', 'Water pressure', 'Chemicals'], correctAnswer: 1 },
            { question: 'What is drilling mud primarily used for?', options: ['Making cement', 'Cooling bit and removing cuttings', 'Painting equipment', 'Cleaning workers'], correctAnswer: 1 },
            { question: 'What is the annulus?', options: ['A type of drill bit', 'Space between drill string and wellbore', 'A safety valve', 'The derrick top'], correctAnswer: 1 },
            { question: 'Which drilling method is most common?', options: ['Cable tool', 'Rotary drilling', 'Manual', 'Sonic'], correctAnswer: 1 },
            { question: 'What does BOP stand for?', options: ['Basic Oil Pump', 'Blowout Preventer', 'Bit Operating Power', 'Bottom Of Pipe'], correctAnswer: 1 },
            { question: 'What is a kick?', options: ['Breaking the bit', 'Formation fluids entering wellbore', 'Starting the drill', 'Ending operations'], correctAnswer: 1 },
            { question: 'What does ROP measure?', options: ['Mud weight', 'Drilling speed', 'Pressure', 'Temperature'], correctAnswer: 1 },
            { question: 'What affects Rate of Penetration?', options: ['Weather only', 'Bit type and WOB', 'Time of day', 'Crew size'], correctAnswer: 1 },
            { question: 'What is directional drilling?', options: ['Drilling only up', 'Drilling at angles from vertical', 'Drilling in circles', 'Random drilling'], correctAnswer: 1 },
            { question: 'Why is mud weight important?', options: ['For color', 'To control formation pressure', 'For taste', 'For smell'], correctAnswer: 1 },
          ],
          ar: [
            { question: 'ما الذي ينشئ فتحة البئر في عمليات الحفر؟', options: ['المتفجرات', 'رأس الحفر الدوار', 'ضغط الماء', 'المواد الكيميائية'], correctAnswer: 1 },
            { question: 'ما هو الاستخدام الرئيسي لطين الحفر؟', options: ['صنع الأسمنت', 'تبريد الرأس وإزالة الفتات', 'طلاء المعدات', 'تنظيف العمال'], correctAnswer: 1 },
            { question: 'ما هو الفراغ الحلقي؟', options: ['نوع من رؤوس الحفر', 'المساحة بين سلسلة الحفر والبئر', 'صمام أمان', 'قمة البرج'], correctAnswer: 1 },
            { question: 'أي طريقة حفر هي الأكثر شيوعاً؟', options: ['أداة الكابل', 'الحفر الدوار', 'اليدوي', 'الصوتي'], correctAnswer: 1 },
            { question: 'ماذا يعني BOP؟', options: ['مضخة نفط أساسية', 'مانع الانفجار', 'قوة تشغيل الرأس', 'أسفل الأنبوب'], correctAnswer: 1 },
            { question: 'ما هي الركلة؟', options: ['كسر الرأس', 'دخول سوائل التكوين للبئر', 'بدء الحفر', 'إنهاء العمليات'], correctAnswer: 1 },
            { question: 'ماذا يقيس معدل الاختراق؟', options: ['وزن الطين', 'سرعة الحفر', 'الضغط', 'الحرارة'], correctAnswer: 1 },
            { question: 'ما الذي يؤثر على معدل الاختراق؟', options: ['الطقس فقط', 'نوع الرأس والوزن عليه', 'وقت اليوم', 'حجم الطاقم'], correctAnswer: 1 },
            { question: 'ما هو الحفر الموجه؟', options: ['الحفر للأعلى فقط', 'الحفر بزوايا من العمودي', 'الحفر بشكل دائري', 'الحفر العشوائي'], correctAnswer: 1 },
            { question: 'لماذا وزن الطين مهم؟', options: ['للون', 'للتحكم في ضغط التكوين', 'للطعم', 'للرائحة'], correctAnswer: 1 },
          ],
        },
      },
      {
        day: 7,
        type: 'project',
        content: {
          en: { title: 'Drilling Project', explanation: 'Apply your drilling knowledge.', keyTerms: [] },
          ar: { title: 'مشروع الحفر', explanation: 'طبق معرفتك بالحفر.', keyTerms: [] },
        },
        project: {
          en: {
            title: 'Design a Simple Well Plan',
            description: 'Create a basic well plan diagram showing the major components of a drilling operation.',
            instructions: [
              'Draw or describe a simple wellbore showing: surface casing, intermediate casing, and production casing',
              'Label the key components: derrick, drill string, drill bit, BOP, and mud system',
              'Explain the purpose of each component in 2-3 sentences',
              'Include the target depth and one drilling challenge you might face',
            ],
            submissionType: 'both',
          },
          ar: {
            title: 'تصميم خطة بئر بسيطة',
            description: 'أنشئ رسماً بيانياً لخطة بئر أساسية تُظهر المكونات الرئيسية لعملية الحفر.',
            instructions: [
              'ارسم أو صف فتحة بئر بسيطة تُظهر: الغلاف السطحي، الغلاف الوسيط، وغلاف الإنتاج',
              'ضع علامات على المكونات الرئيسية: البرج، سلسلة الحفر، رأس الحفر، مانع الانفجار، ونظام الطين',
              'اشرح غرض كل مكون في 2-3 جمل',
              'أضف العمق المستهدف وتحدٍ حفر واحد قد تواجهه',
            ],
            submissionType: 'both',
          },
        },
      },
    ],
  },
  // Types of Wells
  {
    lessonId: 'wells',
    days: [
      {
        day: 1,
        type: 'learning',
        content: {
          en: {
            title: 'Classification of Wells by Purpose',
            explanation: 'Wells are classified based on their purpose. Exploration wells (wildcats) are drilled to discover new hydrocarbon reservoirs in unproven areas. Appraisal wells help determine the size and commercial viability of a discovery. Development wells are drilled after a field is confirmed to produce hydrocarbons commercially.',
            keyTerms: [
              { term: 'Wildcat Well', definition: 'An exploration well drilled in an unproven area' },
              { term: 'Appraisal Well', definition: 'A well drilled to evaluate the extent of a discovered reservoir' },
              { term: 'Development Well', definition: 'A well drilled to produce hydrocarbons from a proven field' },
            ],
            practiceQuestion: {
              question: 'What is a wildcat well?',
              options: ['A well with wild animals', 'An exploration well in an unproven area', 'A damaged well', 'A very deep well'],
              correctAnswer: 1,
            },
          },
          ar: {
            title: 'تصنيف الآبار حسب الغرض',
            explanation: 'تُصنف الآبار بناءً على غرضها. آبار الاستكشاف تُحفر لاكتشاف مخزونات هيدروكربونية جديدة في مناطق غير مثبتة. آبار التقييم تساعد في تحديد حجم الاكتشاف وجدواه التجارية. آبار التطوير تُحفر بعد تأكيد الحقل لإنتاج الهيدروكربونات تجارياً.',
            keyTerms: [
              { term: 'بئر استكشافي', definition: 'بئر استكشاف يُحفر في منطقة غير مثبتة' },
              { term: 'بئر تقييم', definition: 'بئر يُحفر لتقييم مدى المخزون المكتشف' },
              { term: 'بئر تطوير', definition: 'بئر يُحفر لإنتاج الهيدروكربونات من حقل مثبت' },
            ],
            practiceQuestion: {
              question: 'ما هو البئر الاستكشافي؟',
              options: ['بئر به حيوانات برية', 'بئر استكشاف في منطقة غير مثبتة', 'بئر تالف', 'بئر عميق جداً'],
              correctAnswer: 1,
            },
          },
        },
      },
      {
        day: 2,
        type: 'learning',
        content: {
          en: {
            title: 'Wells by Trajectory',
            explanation: 'Well trajectory refers to the path of the wellbore. Vertical wells go straight down and are simplest to drill. Deviated wells angle away from vertical to reach targets offset from the surface location. Horizontal wells run parallel to reservoir layers, maximizing contact area. Multilateral wells have multiple branches from a single main wellbore.',
            keyTerms: [
              { term: 'Vertical Well', definition: 'A well drilled straight down from surface' },
              { term: 'Deviated Well', definition: 'A well drilled at an angle from vertical' },
              { term: 'Multilateral Well', definition: 'A well with multiple branches from one main bore' },
            ],
            practiceQuestion: {
              question: 'What is a horizontal well?',
              options: ['A well that goes straight down', 'A well parallel to reservoir layers', 'A well that goes up', 'A well on flat ground'],
              correctAnswer: 1,
            },
          },
          ar: {
            title: 'الآبار حسب المسار',
            explanation: 'مسار البئر يشير إلى طريق فتحة البئر. الآبار العمودية تذهب مباشرة للأسفل وهي الأبسط حفراً. الآبار المنحرفة تميل بعيداً عن العمودي للوصول إلى أهداف بعيدة عن موقع السطح. الآبار الأفقية تسير موازية لطبقات المخزون. الآبار متعددة الفروع لها فروع متعددة من فتحة رئيسية واحدة.',
            keyTerms: [
              { term: 'بئر عمودي', definition: 'بئر يُحفر مباشرة للأسفل من السطح' },
              { term: 'بئر منحرف', definition: 'بئر يُحفر بزاوية من العمودي' },
              { term: 'بئر متعدد الفروع', definition: 'بئر بفروع متعددة من فتحة رئيسية واحدة' },
            ],
            practiceQuestion: {
              question: 'ما هو البئر الأفقي؟',
              options: ['بئر يذهب مباشرة للأسفل', 'بئر موازٍ لطبقات المخزون', 'بئر يذهب للأعلى', 'بئر على أرض مسطحة'],
              correctAnswer: 1,
            },
          },
        },
      },
      {
        day: 3,
        type: 'learning',
        content: {
          en: {
            title: 'Production and Injection Wells',
            explanation: 'Production wells bring oil and gas to the surface. They can produce naturally (flowing wells) or require artificial lift methods like pumps. Injection wells are used for Enhanced Oil Recovery (EOR) by injecting water, gas, or chemicals to maintain reservoir pressure and push oil toward production wells.',
            keyTerms: [
              { term: 'Production Well', definition: 'A well that brings hydrocarbons to the surface' },
              { term: 'Injection Well', definition: 'A well used to inject fluids into the reservoir' },
              { term: 'EOR', definition: 'Enhanced Oil Recovery - methods to increase oil extraction' },
            ],
            practiceQuestion: {
              question: 'What is the purpose of an injection well?',
              options: ['To produce oil', 'To inject fluids for pressure maintenance', 'To explore new areas', 'To store equipment'],
              correctAnswer: 1,
            },
          },
          ar: {
            title: 'آبار الإنتاج والحقن',
            explanation: 'آبار الإنتاج تجلب النفط والغاز إلى السطح. يمكن أن تنتج طبيعياً (آبار متدفقة) أو تتطلب طرق رفع اصطناعي مثل المضخات. آبار الحقن تُستخدم لتحسين استخلاص النفط بحقن الماء أو الغاز أو المواد الكيميائية للحفاظ على ضغط المخزون ودفع النفط نحو آبار الإنتاج.',
            keyTerms: [
              { term: 'بئر إنتاج', definition: 'بئر يجلب الهيدروكربونات إلى السطح' },
              { term: 'بئر حقن', definition: 'بئر يُستخدم لحقن السوائل في المخزون' },
              { term: 'تحسين الاستخلاص', definition: 'طرق لزيادة استخراج النفط' },
            ],
            practiceQuestion: {
              question: 'ما هو غرض بئر الحقن؟',
              options: ['لإنتاج النفط', 'لحقن السوائل للحفاظ على الضغط', 'لاستكشاف مناطق جديدة', 'لتخزين المعدات'],
              correctAnswer: 1,
            },
          },
        },
      },
      {
        day: 4,
        type: 'learning',
        content: {
          en: {
            title: 'Onshore vs Offshore Wells',
            explanation: 'Onshore wells are drilled on land and are generally simpler and less expensive. Offshore wells are drilled in marine environments using platforms, jack-up rigs, semi-submersibles, or drillships. Offshore drilling is more complex due to water depth, weather conditions, and logistics, but often accesses larger reserves.',
            keyTerms: [
              { term: 'Onshore', definition: 'Drilling operations conducted on land' },
              { term: 'Offshore', definition: 'Drilling operations in marine environments' },
              { term: 'Platform', definition: 'A fixed structure for offshore drilling and production' },
            ],
            practiceQuestion: {
              question: 'What makes offshore drilling more complex?',
              options: ['Simpler equipment', 'Water depth and weather', 'Shorter distances', 'Fewer regulations'],
              correctAnswer: 1,
            },
          },
          ar: {
            title: 'الآبار البرية مقابل البحرية',
            explanation: 'الآبار البرية تُحفر على اليابسة وهي عموماً أبسط وأقل تكلفة. الآبار البحرية تُحفر في البيئات البحرية باستخدام المنصات أو أجهزة الجاك أب أو شبه الغاطسة أو سفن الحفر. الحفر البحري أكثر تعقيداً بسبب عمق المياه والظروف الجوية والخدمات اللوجستية.',
            keyTerms: [
              { term: 'بري', definition: 'عمليات حفر تُجرى على اليابسة' },
              { term: 'بحري', definition: 'عمليات حفر في البيئات البحرية' },
              { term: 'منصة', definition: 'هيكل ثابت للحفر والإنتاج البحري' },
            ],
            practiceQuestion: {
              question: 'ما الذي يجعل الحفر البحري أكثر تعقيداً؟',
              options: ['معدات أبسط', 'عمق المياه والطقس', 'مسافات أقصر', 'لوائح أقل'],
              correctAnswer: 1,
            },
          },
        },
      },
      {
        day: 5,
        type: 'learning',
        content: {
          en: {
            title: 'Well Completion and Workover',
            explanation: 'Well completion prepares a drilled well for production by installing casing, cementing, and perforating the production zone. Workover operations are performed on existing wells to restore or enhance production, fix problems, or convert well use. Both are essential for maximizing well productivity throughout its lifecycle.',
            keyTerms: [
              { term: 'Completion', definition: 'Process of preparing a well for production' },
              { term: 'Perforation', definition: 'Creating holes through casing to allow fluid flow' },
              { term: 'Workover', definition: 'Operations to maintain or improve an existing well' },
            ],
            practiceQuestion: {
              question: 'What is well completion?',
              options: ['Abandoning a well', 'Preparing a well for production', 'Starting to drill', 'Destroying a well'],
              correctAnswer: 1,
            },
          },
          ar: {
            title: 'إكمال البئر والصيانة',
            explanation: 'إكمال البئر يُحضر البئر المحفور للإنتاج بتركيب الغلاف والتسميت وثقب منطقة الإنتاج. عمليات الصيانة تُجرى على الآبار الموجودة لاستعادة أو تحسين الإنتاج أو إصلاح المشاكل أو تحويل استخدام البئر.',
            keyTerms: [
              { term: 'الإكمال', definition: 'عملية تحضير البئر للإنتاج' },
              { term: 'الثقب', definition: 'إنشاء ثقوب عبر الغلاف للسماح بتدفق السوائل' },
              { term: 'الصيانة', definition: 'عمليات للحفاظ على بئر موجود أو تحسينه' },
            ],
            practiceQuestion: {
              question: 'ما هو إكمال البئر؟',
              options: ['التخلي عن البئر', 'تحضير البئر للإنتاج', 'بدء الحفر', 'تدمير البئر'],
              correctAnswer: 1,
            },
          },
        },
      },
      {
        day: 6,
        type: 'quiz',
        content: {
          en: { title: 'Types of Wells Quiz', explanation: 'Test your knowledge of well types.', keyTerms: [] },
          ar: { title: 'اختبار أنواع الآبار', explanation: 'اختبر معرفتك بأنواع الآبار.', keyTerms: [] },
        },
        quiz: {
          en: [
            { question: 'What is a wildcat well?', options: ['A production well', 'An exploration well in unproven area', 'An injection well', 'A horizontal well'], correctAnswer: 1 },
            { question: 'What determines an appraisal well?', options: ['It produces oil', 'It evaluates discovery size', 'It injects water', 'It is abandoned'], correctAnswer: 1 },
            { question: 'What is a vertical well?', options: ['Drilled at 45 degrees', 'Drilled straight down', 'Drilled horizontally', 'Drilled in circles'], correctAnswer: 1 },
            { question: 'What is the purpose of injection wells?', options: ['Produce gas', 'Maintain reservoir pressure', 'Store equipment', 'Train workers'], correctAnswer: 1 },
            { question: 'Where is offshore drilling done?', options: ['Mountains', 'Marine environments', 'Deserts only', 'Underground caves'], correctAnswer: 1 },
            { question: 'What is well completion?', options: ['Drilling start', 'Preparing well for production', 'Well abandonment', 'Equipment storage'], correctAnswer: 1 },
            { question: 'What is a multilateral well?', options: ['Multiple wells', 'One well with multiple branches', 'A straight well', 'A water well'], correctAnswer: 1 },
            { question: 'What does EOR stand for?', options: ['End of Resources', 'Enhanced Oil Recovery', 'Emergency Oil Response', 'Early Oil Removal'], correctAnswer: 1 },
            { question: 'What is perforation?', options: ['Drilling deeper', 'Creating holes in casing', 'Cleaning the well', 'Cementing'], correctAnswer: 1 },
            { question: 'What is a workover?', options: ['New drilling', 'Maintaining existing wells', 'Building platforms', 'Training exercise'], correctAnswer: 1 },
          ],
          ar: [
            { question: 'ما هو البئر الاستكشافي؟', options: ['بئر إنتاج', 'بئر استكشاف في منطقة غير مثبتة', 'بئر حقن', 'بئر أفقي'], correctAnswer: 1 },
            { question: 'ما الذي يحدد بئر التقييم؟', options: ['ينتج النفط', 'يقيم حجم الاكتشاف', 'يحقن الماء', 'مهجور'], correctAnswer: 1 },
            { question: 'ما هو البئر العمودي؟', options: ['يُحفر بزاوية 45 درجة', 'يُحفر مباشرة للأسفل', 'يُحفر أفقياً', 'يُحفر بشكل دائري'], correctAnswer: 1 },
            { question: 'ما هو غرض آبار الحقن؟', options: ['إنتاج الغاز', 'الحفاظ على ضغط المخزون', 'تخزين المعدات', 'تدريب العمال'], correctAnswer: 1 },
            { question: 'أين يُجرى الحفر البحري؟', options: ['الجبال', 'البيئات البحرية', 'الصحاري فقط', 'الكهوف الجوفية'], correctAnswer: 1 },
            { question: 'ما هو إكمال البئر؟', options: ['بدء الحفر', 'تحضير البئر للإنتاج', 'التخلي عن البئر', 'تخزين المعدات'], correctAnswer: 1 },
            { question: 'ما هو البئر متعدد الفروع؟', options: ['آبار متعددة', 'بئر واحد بفروع متعددة', 'بئر مستقيم', 'بئر ماء'], correctAnswer: 1 },
            { question: 'ماذا يعني EOR؟', options: ['نهاية الموارد', 'تحسين استخلاص النفط', 'استجابة طوارئ النفط', 'إزالة النفط المبكرة'], correctAnswer: 1 },
            { question: 'ما هو الثقب؟', options: ['الحفر أعمق', 'إنشاء ثقوب في الغلاف', 'تنظيف البئر', 'التسميت'], correctAnswer: 1 },
            { question: 'ما هي الصيانة؟', options: ['حفر جديد', 'صيانة الآبار الموجودة', 'بناء المنصات', 'تمرين تدريبي'], correctAnswer: 1 },
          ],
        },
      },
      {
        day: 7,
        type: 'project',
        content: {
          en: { title: 'Well Types Project', explanation: 'Apply your knowledge of well types.', keyTerms: [] },
          ar: { title: 'مشروع أنواع الآبار', explanation: 'طبق معرفتك بأنواع الآبار.', keyTerms: [] },
        },
        project: {
          en: {
            title: 'Well Classification Chart',
            description: 'Create a comprehensive chart or diagram showing different well types and their purposes.',
            instructions: [
              'Create a visual chart showing at least 6 different well types',
              'Include: Purpose (exploration, production, injection), Trajectory (vertical, horizontal, deviated), and Location (onshore, offshore)',
              'For each type, write one sentence explaining when it would be used',
              'You may draw the chart or create it digitally',
            ],
            submissionType: 'both',
          },
          ar: {
            title: 'مخطط تصنيف الآبار',
            description: 'أنشئ مخططاً أو رسماً بيانياً شاملاً يُظهر أنواع الآبار المختلفة وأغراضها.',
            instructions: [
              'أنشئ مخططاً بصرياً يُظهر على الأقل 6 أنواع مختلفة من الآبار',
              'أضف: الغرض (استكشاف، إنتاج، حقن)، المسار (عمودي، أفقي، منحرف)، والموقع (بري، بحري)',
              'لكل نوع، اكتب جملة واحدة تشرح متى سيُستخدم',
              'يمكنك رسم المخطط أو إنشاؤه رقمياً',
            ],
            submissionType: 'both',
          },
        },
      },
    ],
  },
  // Drilling Rig Overview
  {
    lessonId: 'rig',
    days: [
      {
        day: 1,
        type: 'learning',
        content: {
          en: {
            title: 'Introduction to Drilling Rigs',
            explanation: 'A drilling rig is a complex integrated system designed to drill boreholes into the earth. It includes mechanical, hydraulic, and electrical systems working together. The rig must handle the weight of miles of drill pipe, rotate the drill string, pump mud, and provide safety controls. Rigs range from small land units to massive offshore platforms.',
            keyTerms: [
              { term: 'Drilling Rig', definition: 'A machine used to create boreholes in the earth' },
              { term: 'Land Rig', definition: 'A drilling rig designed for onshore operations' },
              { term: 'Offshore Rig', definition: 'A drilling rig designed for marine environments' },
            ],
            practiceQuestion: {
              question: 'What is the main purpose of a drilling rig?',
              options: ['To pump water', 'To create boreholes in the earth', 'To transport oil', 'To refine petroleum'],
              correctAnswer: 1,
            },
          },
          ar: {
            title: 'مقدمة في أجهزة الحفر',
            explanation: 'جهاز الحفر هو نظام متكامل معقد مصمم لحفر ثقوب في الأرض. يشمل أنظمة ميكانيكية وهيدروليكية وكهربائية تعمل معاً. يجب أن يتعامل الجهاز مع وزن أميال من أنابيب الحفر، ويدير سلسلة الحفر، ويضخ الطين، ويوفر ضوابط السلامة.',
            keyTerms: [
              { term: 'جهاز الحفر', definition: 'آلة تُستخدم لإنشاء ثقوب في الأرض' },
              { term: 'جهاز بري', definition: 'جهاز حفر مصمم للعمليات البرية' },
              { term: 'جهاز بحري', definition: 'جهاز حفر مصمم للبيئات البحرية' },
            ],
            practiceQuestion: {
              question: 'ما هو الغرض الرئيسي من جهاز الحفر؟',
              options: ['ضخ المياه', 'إنشاء ثقوب في الأرض', 'نقل النفط', 'تكرير النفط'],
              correctAnswer: 1,
            },
          },
        },
      },
      {
        day: 2,
        type: 'learning',
        content: {
          en: {
            title: 'The Derrick and Mast',
            explanation: 'The derrick (or mast) is the tall structure that supports the hoisting equipment. Traditional derricks are permanently erected, while masts can be raised and lowered for transportation. The crown block sits at the top, and the traveling block moves up and down. Together they form the block and tackle system for lifting heavy loads.',
            keyTerms: [
              { term: 'Derrick', definition: 'The tall tower structure on a drilling rig' },
              { term: 'Crown Block', definition: 'The fixed pulley system at the top of the derrick' },
              { term: 'Traveling Block', definition: 'The movable pulley system that raises and lowers equipment' },
            ],
            practiceQuestion: {
              question: 'Where is the crown block located?',
              options: ['At the bottom of the well', 'At the top of the derrick', 'Underground', 'In the mud pit'],
              correctAnswer: 1,
            },
          },
          ar: {
            title: 'البرج والصاري',
            explanation: 'البرج (أو الصاري) هو الهيكل الطويل الذي يدعم معدات الرفع. الأبراج التقليدية تُنصب بشكل دائم، بينما الصواري يمكن رفعها وخفضها للنقل. البكرة العلوية توجد في الأعلى، والبكرة المتحركة تتحرك صعوداً ونزولاً.',
            keyTerms: [
              { term: 'البرج', definition: 'هيكل البرج الطويل على جهاز الحفر' },
              { term: 'البكرة العلوية', definition: 'نظام البكرة الثابت في أعلى البرج' },
              { term: 'البكرة المتحركة', definition: 'نظام البكرة المتحرك الذي يرفع ويخفض المعدات' },
            ],
            practiceQuestion: {
              question: 'أين توجد البكرة العلوية؟',
              options: ['في قاع البئر', 'في أعلى البرج', 'تحت الأرض', 'في حوض الطين'],
              correctAnswer: 1,
            },
          },
        },
      },
      {
        day: 3,
        type: 'learning',
        content: {
          en: {
            title: 'Power and Hoisting Systems',
            explanation: 'The drawworks is the main hoisting equipment, using powerful motors to raise and lower the drill string. Power is typically provided by diesel engines or electric motors. The rotary table or top drive provides rotation to the drill string. Modern rigs often use top drives for better efficiency and safety.',
            keyTerms: [
              { term: 'Drawworks', definition: 'The main hoisting mechanism on a drilling rig' },
              { term: 'Top Drive', definition: 'A motor that rotates the drill string from above' },
              { term: 'Rotary Table', definition: 'A rotating platform that turns the drill string' },
            ],
            practiceQuestion: {
              question: 'What is the function of the drawworks?',
              options: ['To circulate mud', 'To hoist the drill string', 'To prevent blowouts', 'To store pipe'],
              correctAnswer: 1,
            },
          },
          ar: {
            title: 'أنظمة الطاقة والرفع',
            explanation: 'الرافعة هي معدات الرفع الرئيسية، تستخدم محركات قوية لرفع وخفض سلسلة الحفر. الطاقة تُوفر عادة بمحركات الديزل أو المحركات الكهربائية. الطاولة الدوارة أو المحرك العلوي يوفر الدوران لسلسلة الحفر.',
            keyTerms: [
              { term: 'الرافعة', definition: 'آلية الرفع الرئيسية على جهاز الحفر' },
              { term: 'المحرك العلوي', definition: 'محرك يدير سلسلة الحفر من الأعلى' },
              { term: 'الطاولة الدوارة', definition: 'منصة دوارة تدير سلسلة الحفر' },
            ],
            practiceQuestion: {
              question: 'ما هي وظيفة الرافعة؟',
              options: ['تدوير الطين', 'رفع سلسلة الحفر', 'منع الانفجارات', 'تخزين الأنابيب'],
              correctAnswer: 1,
            },
          },
        },
      },
      {
        day: 4,
        type: 'learning',
        content: {
          en: {
            title: 'Mud System and Circulation',
            explanation: 'The mud system includes mud tanks, mud pumps, and circulation equipment. Mud pumps pressurize drilling fluid and send it down the drill string. The mud exits through the bit, cools it, and carries cuttings up the annulus. At surface, cuttings are removed by shale shakers, and clean mud is recirculated.',
            keyTerms: [
              { term: 'Mud Pump', definition: 'Pumps that pressurize and circulate drilling fluid' },
              { term: 'Mud Tank', definition: 'Storage containers for drilling fluid' },
              { term: 'Shale Shaker', definition: 'Equipment that separates cuttings from drilling mud' },
            ],
            practiceQuestion: {
              question: 'What does a shale shaker do?',
              options: ['Pumps mud', 'Separates cuttings from mud', 'Rotates the drill string', 'Prevents blowouts'],
              correctAnswer: 1,
            },
          },
          ar: {
            title: 'نظام الطين والتدوير',
            explanation: 'نظام الطين يشمل خزانات الطين ومضخات الطين ومعدات التدوير. مضخات الطين تضغط سائل الحفر وترسله عبر سلسلة الحفر. يخرج الطين عبر الرأس، يبرده، ويحمل الفتات عبر الفراغ الحلقي. على السطح، يُزال الفتات بالغرابيل.',
            keyTerms: [
              { term: 'مضخة الطين', definition: 'مضخات تضغط وتدور سائل الحفر' },
              { term: 'خزان الطين', definition: 'حاويات تخزين لسائل الحفر' },
              { term: 'غربال الصخر', definition: 'معدات تفصل الفتات عن طين الحفر' },
            ],
            practiceQuestion: {
              question: 'ماذا يفعل غربال الصخر؟',
              options: ['يضخ الطين', 'يفصل الفتات عن الطين', 'يدير سلسلة الحفر', 'يمنع الانفجارات'],
              correctAnswer: 1,
            },
          },
        },
      },
      {
        day: 5,
        type: 'learning',
        content: {
          en: {
            title: 'Well Control Equipment',
            explanation: 'The Blowout Preventer (BOP) stack is the primary well control equipment. It includes annular preventers that can seal around any shape, and ram preventers that can close on pipe or shear it in emergencies. The BOP is tested regularly and is essential for preventing uncontrolled releases of formation fluids.',
            keyTerms: [
              { term: 'BOP Stack', definition: 'Assembly of blowout preventers for well control' },
              { term: 'Annular Preventer', definition: 'A BOP that seals around any size drill pipe' },
              { term: 'Ram Preventer', definition: 'A BOP with rams that close to seal the well' },
            ],
            practiceQuestion: {
              question: 'What can an annular preventer seal around?',
              options: ['Only large pipe', 'Any size or shape', 'Only when empty', 'Only metal objects'],
              correctAnswer: 1,
            },
          },
          ar: {
            title: 'معدات التحكم في البئر',
            explanation: 'مجموعة مانع الانفجار هي معدات التحكم الرئيسية في البئر. تشمل موانع حلقية يمكنها الإغلاق حول أي شكل، وموانع كبس يمكنها الإغلاق على الأنبوب أو قصه في حالات الطوارئ. يُختبر مانع الانفجار بانتظام وهو ضروري لمنع الإطلاقات غير المتحكمة.',
            keyTerms: [
              { term: 'مجموعة مانع الانفجار', definition: 'تجميع موانع الانفجار للتحكم في البئر' },
              { term: 'المانع الحلقي', definition: 'مانع انفجار يغلق حول أي حجم أنبوب' },
              { term: 'مانع الكبس', definition: 'مانع انفجار بكباسات تغلق لإحكام البئر' },
            ],
            practiceQuestion: {
              question: 'حول ماذا يمكن للمانع الحلقي الإغلاق؟',
              options: ['الأنابيب الكبيرة فقط', 'أي حجم أو شكل', 'فقط عندما يكون فارغاً', 'الأجسام المعدنية فقط'],
              correctAnswer: 1,
            },
          },
        },
      },
      {
        day: 6,
        type: 'quiz',
        content: {
          en: { title: 'Drilling Rig Quiz', explanation: 'Test your knowledge of rig components.', keyTerms: [] },
          ar: { title: 'اختبار جهاز الحفر', explanation: 'اختبر معرفتك بمكونات الجهاز.', keyTerms: [] },
        },
        quiz: {
          en: [
            { question: 'What is the tall structure on a rig called?', options: ['Pump house', 'Derrick/Mast', 'Mud tank', 'Generator'], correctAnswer: 1 },
            { question: 'Where is the crown block?', options: ['Underground', 'Top of derrick', 'In the mud', 'On the ground'], correctAnswer: 1 },
            { question: 'What does the drawworks do?', options: ['Pumps mud', 'Hoists drill string', 'Generates power', 'Stores pipe'], correctAnswer: 1 },
            { question: 'What is a top drive?', options: ['A vehicle', 'Motor that rotates drill string from above', 'A pump', 'A safety valve'], correctAnswer: 1 },
            { question: 'What do mud pumps do?', options: ['Store mud', 'Circulate drilling fluid', 'Clean the rig', 'Power the derrick'], correctAnswer: 1 },
            { question: 'What does a shale shaker remove?', options: ['Oil', 'Cuttings from mud', 'Water', 'Gas'], correctAnswer: 1 },
            { question: 'What does BOP stand for?', options: ['Bottom Of Pipe', 'Blowout Preventer', 'Basic Oil Pump', 'Bit Operation Power'], correctAnswer: 1 },
            { question: 'What can an annular preventer seal?', options: ['Only empty hole', 'Any size pipe', 'Only casing', 'Only tubing'], correctAnswer: 1 },
            { question: 'What type of rig works in the ocean?', options: ['Land rig', 'Offshore rig', 'Mountain rig', 'Desert rig'], correctAnswer: 1 },
            { question: 'What does the rotary table do?', options: ['Stores tools', 'Rotates drill string', 'Pumps water', 'Houses crew'], correctAnswer: 1 },
          ],
          ar: [
            { question: 'ماذا يُسمى الهيكل الطويل على الجهاز؟', options: ['بيت المضخات', 'البرج/الصاري', 'خزان الطين', 'المولد'], correctAnswer: 1 },
            { question: 'أين توجد البكرة العلوية؟', options: ['تحت الأرض', 'أعلى البرج', 'في الطين', 'على الأرض'], correctAnswer: 1 },
            { question: 'ماذا تفعل الرافعة؟', options: ['تضخ الطين', 'ترفع سلسلة الحفر', 'تولد الطاقة', 'تخزن الأنابيب'], correctAnswer: 1 },
            { question: 'ما هو المحرك العلوي؟', options: ['مركبة', 'محرك يدير سلسلة الحفر من الأعلى', 'مضخة', 'صمام أمان'], correctAnswer: 1 },
            { question: 'ماذا تفعل مضخات الطين؟', options: ['تخزن الطين', 'تدور سائل الحفر', 'تنظف الجهاز', 'تشغل البرج'], correctAnswer: 1 },
            { question: 'ماذا يُزيل غربال الصخر؟', options: ['النفط', 'الفتات من الطين', 'الماء', 'الغاز'], correctAnswer: 1 },
            { question: 'ماذا يعني BOP؟', options: ['أسفل الأنبوب', 'مانع الانفجار', 'مضخة نفط أساسية', 'قوة تشغيل الرأس'], correctAnswer: 1 },
            { question: 'ماذا يمكن للمانع الحلقي إغلاقه؟', options: ['الفتحة الفارغة فقط', 'أي حجم أنبوب', 'الغلاف فقط', 'الأنابيب فقط'], correctAnswer: 1 },
            { question: 'أي نوع جهاز يعمل في المحيط؟', options: ['جهاز بري', 'جهاز بحري', 'جهاز جبلي', 'جهاز صحراوي'], correctAnswer: 1 },
            { question: 'ماذا تفعل الطاولة الدوارة؟', options: ['تخزن الأدوات', 'تدير سلسلة الحفر', 'تضخ الماء', 'تأوي الطاقم'], correctAnswer: 1 },
          ],
        },
      },
      {
        day: 7,
        type: 'project',
        content: {
          en: { title: 'Rig Components Project', explanation: 'Apply your knowledge of rig equipment.', keyTerms: [] },
          ar: { title: 'مشروع مكونات الجهاز', explanation: 'طبق معرفتك بمعدات الجهاز.', keyTerms: [] },
        },
        project: {
          en: {
            title: 'Label a Drilling Rig Diagram',
            description: 'Create a labeled diagram of a drilling rig showing all major components.',
            instructions: [
              'Draw or find a simple diagram of a drilling rig',
              'Label at least 10 components: derrick, crown block, traveling block, drawworks, rotary table or top drive, mud pumps, mud tanks, shale shaker, BOP stack, and drill string',
              'For each component, write a brief (1-2 sentence) description of its function',
              'Include whether each component is part of the hoisting, rotation, circulation, or safety system',
            ],
            submissionType: 'both',
          },
          ar: {
            title: 'تسمية مخطط جهاز الحفر',
            description: 'أنشئ مخططاً مُعلَّماً لجهاز حفر يُظهر جميع المكونات الرئيسية.',
            instructions: [
              'ارسم أو ابحث عن مخطط بسيط لجهاز حفر',
              'ضع علامات على 10 مكونات على الأقل: البرج، البكرة العلوية، البكرة المتحركة، الرافعة، الطاولة الدوارة أو المحرك العلوي، مضخات الطين، خزانات الطين، غربال الصخر، مجموعة مانع الانفجار، وسلسلة الحفر',
              'لكل مكون، اكتب وصفاً موجزاً (1-2 جملة) لوظيفته',
              'أضف ما إذا كان كل مكون جزءاً من نظام الرفع أو الدوران أو التدوير أو السلامة',
            ],
            submissionType: 'both',
          },
        },
      },
    ],
  },
  // Units & Measurements
  {
    lessonId: 'units',
    days: [
      {
        day: 1,
        type: 'learning',
        content: {
          en: {
            title: 'Introduction to Petroleum Measurements',
            explanation: 'The petroleum industry uses specific measurement units that differ from everyday units. Understanding these units is crucial for communication and calculations. The industry operates globally, so both metric and imperial units are used depending on region. Conversions between systems are essential skills for petroleum engineers.',
            keyTerms: [
              { term: 'Imperial Units', definition: 'Measurement system using feet, pounds, gallons (common in US oilfields)' },
              { term: 'Metric Units', definition: 'Measurement system using meters, kilograms, liters' },
              { term: 'Oilfield Units', definition: 'Specialized units used specifically in petroleum operations' },
            ],
            practiceQuestion: {
              question: 'Why are both metric and imperial units used in the oil industry?',
              options: ['For confusion', 'Because it operates globally', 'For historical reasons only', 'They are the same'],
              correctAnswer: 1,
            },
          },
          ar: {
            title: 'مقدمة في قياسات النفط',
            explanation: 'تستخدم صناعة النفط وحدات قياس محددة تختلف عن الوحدات اليومية. فهم هذه الوحدات أمر حاسم للتواصل والحسابات. تعمل الصناعة عالمياً، لذا تُستخدم الوحدات المترية والإمبريالية حسب المنطقة. التحويلات بين الأنظمة مهارات أساسية لمهندسي النفط.',
            keyTerms: [
              { term: 'الوحدات الإمبريالية', definition: 'نظام قياس يستخدم الأقدام والأرطال والغالونات' },
              { term: 'الوحدات المترية', definition: 'نظام قياس يستخدم الأمتار والكيلوغرامات واللترات' },
              { term: 'وحدات حقول النفط', definition: 'وحدات متخصصة تُستخدم خصيصاً في عمليات النفط' },
            ],
            practiceQuestion: {
              question: 'لماذا تُستخدم الوحدات المترية والإمبريالية في صناعة النفط؟',
              options: ['للإرباك', 'لأنها تعمل عالمياً', 'لأسباب تاريخية فقط', 'هي نفسها'],
              correctAnswer: 1,
            },
          },
        },
      },
      {
        day: 2,
        type: 'learning',
        content: {
          en: {
            title: 'Volume Measurements',
            explanation: 'The barrel (bbl) is the standard unit for oil volume. One barrel equals 42 US gallons or approximately 159 liters. Production is often reported in barrels per day (bpd) or thousands of barrels per day (Mbpd). Gas is measured in cubic feet (cf) or cubic meters, and often reported as MCF (thousand cubic feet) or BCF (billion cubic feet).',
            keyTerms: [
              { term: 'Barrel (bbl)', definition: '42 US gallons or 159 liters of oil' },
              { term: 'BPD', definition: 'Barrels Per Day - daily production rate' },
              { term: 'MCF', definition: 'Thousand Cubic Feet - gas volume measurement' },
            ],
            practiceQuestion: {
              question: 'How many US gallons are in one barrel of oil?',
              options: ['32', '42', '52', '100'],
              correctAnswer: 1,
            },
          },
          ar: {
            title: 'قياسات الحجم',
            explanation: 'البرميل هو الوحدة القياسية لحجم النفط. برميل واحد يساوي 42 غالون أمريكي أو حوالي 159 لتر. غالباً ما يُبلغ عن الإنتاج بالبراميل في اليوم أو آلاف البراميل في اليوم. يُقاس الغاز بالأقدام المكعبة أو الأمتار المكعبة.',
            keyTerms: [
              { term: 'البرميل', definition: '42 غالون أمريكي أو 159 لتر من النفط' },
              { term: 'براميل في اليوم', definition: 'معدل الإنتاج اليومي' },
              { term: 'ألف قدم مكعب', definition: 'قياس حجم الغاز' },
            ],
            practiceQuestion: {
              question: 'كم غالون أمريكي في برميل نفط واحد؟',
              options: ['32', '42', '52', '100'],
              correctAnswer: 1,
            },
          },
        },
      },
      {
        day: 3,
        type: 'learning',
        content: {
          en: {
            title: 'Pressure Measurements',
            explanation: 'Pressure is critical in drilling and production. PSI (pounds per square inch) is common in US operations. Bar and Pascal are used in metric systems. Hydrostatic pressure increases with depth due to fluid column weight. Formation pressure, mud weight pressure, and wellhead pressure must be carefully monitored and controlled.',
            keyTerms: [
              { term: 'PSI', definition: 'Pounds per Square Inch - pressure measurement' },
              { term: 'Bar', definition: 'Metric pressure unit (1 bar ≈ 14.5 psi)' },
              { term: 'Hydrostatic Pressure', definition: 'Pressure exerted by a fluid column due to gravity' },
            ],
            practiceQuestion: {
              question: 'What unit is commonly used for pressure in US oilfields?',
              options: ['Meters', 'PSI', 'Gallons', 'Feet'],
              correctAnswer: 1,
            },
          },
          ar: {
            title: 'قياسات الضغط',
            explanation: 'الضغط أمر حاسم في الحفر والإنتاج. رطل لكل بوصة مربعة شائع في العمليات الأمريكية. البار والباسكال يُستخدمان في الأنظمة المترية. الضغط الهيدروستاتيكي يزيد مع العمق بسبب وزن عمود السائل.',
            keyTerms: [
              { term: 'رطل/بوصة مربعة', definition: 'قياس الضغط' },
              { term: 'بار', definition: 'وحدة ضغط مترية (1 بار ≈ 14.5 رطل/بوصة)' },
              { term: 'الضغط الهيدروستاتيكي', definition: 'الضغط الذي يمارسه عمود السائل بسبب الجاذبية' },
            ],
            practiceQuestion: {
              question: 'أي وحدة تُستخدم عادة للضغط في حقول النفط الأمريكية؟',
              options: ['أمتار', 'رطل/بوصة مربعة', 'غالونات', 'أقدام'],
              correctAnswer: 1,
            },
          },
        },
      },
      {
        day: 4,
        type: 'learning',
        content: {
          en: {
            title: 'Depth and Length Measurements',
            explanation: 'Depth is measured from a reference point (usually kelly bushing or rotary table). Feet are standard in US operations; meters in most other countries. Measured Depth (MD) is the actual length of the wellbore. True Vertical Depth (TVD) is the vertical distance. These differ in directional wells.',
            keyTerms: [
              { term: 'Measured Depth (MD)', definition: 'The actual length along the wellbore path' },
              { term: 'True Vertical Depth (TVD)', definition: 'The vertical distance from surface' },
              { term: 'Kelly Bushing (KB)', definition: 'Common reference point for depth measurements' },
            ],
            practiceQuestion: {
              question: 'What is the difference between MD and TVD?',
              options: ['They are always the same', 'MD is along wellbore, TVD is vertical distance', 'TVD is longer', 'MD is measured from sea level'],
              correctAnswer: 1,
            },
          },
          ar: {
            title: 'قياسات العمق والطول',
            explanation: 'يُقاس العمق من نقطة مرجعية (عادة جلبة الكيلي أو الطاولة الدوارة). الأقدام قياسية في العمليات الأمريكية؛ الأمتار في معظم البلدان الأخرى. العمق المقاس هو الطول الفعلي لفتحة البئر. العمق العمودي الحقيقي هو المسافة العمودية.',
            keyTerms: [
              { term: 'العمق المقاس', definition: 'الطول الفعلي على طول مسار البئر' },
              { term: 'العمق العمودي الحقيقي', definition: 'المسافة العمودية من السطح' },
              { term: 'جلبة الكيلي', definition: 'نقطة مرجعية شائعة لقياسات العمق' },
            ],
            practiceQuestion: {
              question: 'ما الفرق بين العمق المقاس والعمق العمودي الحقيقي؟',
              options: ['دائماً متساويان', 'المقاس على طول البئر، العمودي هو المسافة العمودية', 'العمودي أطول', 'المقاس يُقاس من مستوى البحر'],
              correctAnswer: 1,
            },
          },
        },
      },
      {
        day: 5,
        type: 'learning',
        content: {
          en: {
            title: 'Drilling Fluid Properties',
            explanation: 'Mud weight is measured in pounds per gallon (ppg) or specific gravity (SG). Viscosity is measured using a Marsh funnel (seconds) or with a viscometer (centipoise). Proper mud weight maintains wellbore stability and prevents kicks. Too heavy causes lost circulation; too light risks blowouts.',
            keyTerms: [
              { term: 'PPG', definition: 'Pounds Per Gallon - mud weight measurement' },
              { term: 'Specific Gravity', definition: 'Ratio of fluid density to water density' },
              { term: 'Viscosity', definition: 'A fluid\'s resistance to flow' },
            ],
            practiceQuestion: {
              question: 'What unit is used for mud weight?',
              options: ['PSI', 'PPG', 'BPD', 'MCF'],
              correctAnswer: 1,
            },
          },
          ar: {
            title: 'خصائص سوائل الحفر',
            explanation: 'وزن الطين يُقاس بالرطل لكل غالون أو الكثافة النوعية. اللزوجة تُقاس باستخدام قمع مارش (ثواني) أو مقياس اللزوجة (سنتيبواز). وزن الطين المناسب يحافظ على استقرار البئر ويمنع الركلات.',
            keyTerms: [
              { term: 'رطل/غالون', definition: 'قياس وزن الطين' },
              { term: 'الكثافة النوعية', definition: 'نسبة كثافة السائل إلى كثافة الماء' },
              { term: 'اللزوجة', definition: 'مقاومة السائل للتدفق' },
            ],
            practiceQuestion: {
              question: 'أي وحدة تُستخدم لوزن الطين؟',
              options: ['رطل/بوصة', 'رطل/غالون', 'براميل/يوم', 'ألف قدم مكعب'],
              correctAnswer: 1,
            },
          },
        },
      },
      {
        day: 6,
        type: 'quiz',
        content: {
          en: { title: 'Units & Measurements Quiz', explanation: 'Test your knowledge of petroleum measurements.', keyTerms: [] },
          ar: { title: 'اختبار الوحدات والقياسات', explanation: 'اختبر معرفتك بقياسات النفط.', keyTerms: [] },
        },
        quiz: {
          en: [
            { question: 'How many US gallons in one barrel?', options: ['32', '42', '52', '62'], correctAnswer: 1 },
            { question: 'What does BPD stand for?', options: ['Big Pressure Device', 'Barrels Per Day', 'Bottom Pipe Depth', 'Basic Production Data'], correctAnswer: 1 },
            { question: 'How many liters in one barrel?', options: ['100', '159', '200', '250'], correctAnswer: 1 },
            { question: 'What unit measures pressure in US oilfields?', options: ['Meters', 'PSI', 'Gallons', 'Barrels'], correctAnswer: 1 },
            { question: 'What is hydrostatic pressure?', options: ['Water pressure only', 'Pressure from fluid column weight', 'Air pressure', 'Rock pressure'], correctAnswer: 1 },
            { question: 'What is Measured Depth (MD)?', options: ['Vertical distance', 'Length along wellbore', 'Surface elevation', 'Sea level depth'], correctAnswer: 1 },
            { question: 'What unit measures mud weight?', options: ['PSI', 'PPG', 'BPD', 'TVD'], correctAnswer: 1 },
            { question: 'What does MCF measure?', options: ['Oil volume', 'Gas volume', 'Pressure', 'Temperature'], correctAnswer: 1 },
            { question: 'What is True Vertical Depth?', options: ['Along the wellbore', 'Vertical distance from surface', 'Horizontal distance', 'Total length'], correctAnswer: 1 },
            { question: '1 bar equals approximately how many PSI?', options: ['5', '14.5', '100', '42'], correctAnswer: 1 },
          ],
          ar: [
            { question: 'كم غالون أمريكي في برميل واحد؟', options: ['32', '42', '52', '62'], correctAnswer: 1 },
            { question: 'ماذا يعني BPD؟', options: ['جهاز ضغط كبير', 'براميل في اليوم', 'عمق أنبوب القاع', 'بيانات إنتاج أساسية'], correctAnswer: 1 },
            { question: 'كم لتر في برميل واحد؟', options: ['100', '159', '200', '250'], correctAnswer: 1 },
            { question: 'أي وحدة تقيس الضغط في حقول النفط الأمريكية؟', options: ['أمتار', 'رطل/بوصة مربعة', 'غالونات', 'براميل'], correctAnswer: 1 },
            { question: 'ما هو الضغط الهيدروستاتيكي؟', options: ['ضغط الماء فقط', 'الضغط من وزن عمود السائل', 'ضغط الهواء', 'ضغط الصخور'], correctAnswer: 1 },
            { question: 'ما هو العمق المقاس؟', options: ['المسافة العمودية', 'الطول على طول البئر', 'ارتفاع السطح', 'عمق مستوى البحر'], correctAnswer: 1 },
            { question: 'أي وحدة تقيس وزن الطين؟', options: ['رطل/بوصة', 'رطل/غالون', 'براميل/يوم', 'عمق عمودي'], correctAnswer: 1 },
            { question: 'ماذا يقيس MCF؟', options: ['حجم النفط', 'حجم الغاز', 'الضغط', 'الحرارة'], correctAnswer: 1 },
            { question: 'ما هو العمق العمودي الحقيقي؟', options: ['على طول البئر', 'المسافة العمودية من السطح', 'المسافة الأفقية', 'الطول الإجمالي'], correctAnswer: 1 },
            { question: '1 بار يساوي تقريباً كم رطل/بوصة؟', options: ['5', '14.5', '100', '42'], correctAnswer: 1 },
          ],
        },
      },
      {
        day: 7,
        type: 'project',
        content: {
          en: { title: 'Units Conversion Project', explanation: 'Practice converting petroleum units.', keyTerms: [] },
          ar: { title: 'مشروع تحويل الوحدات', explanation: 'تدرب على تحويل وحدات النفط.', keyTerms: [] },
        },
        project: {
          en: {
            title: 'Unit Conversion Calculator',
            description: 'Create a reference sheet or simple calculator for common petroleum unit conversions.',
            instructions: [
              'Create a conversion reference table including: barrels to liters, feet to meters, PSI to bar, PPG to specific gravity',
              'Solve these conversion problems: (1) A well produces 5,000 BPD. How many liters per day? (2) A well is 10,000 feet deep. How many meters? (3) Formation pressure is 3,000 PSI. How many bar?',
              'Show your work and formulas used',
              'Create 3 of your own conversion problems with solutions',
            ],
            submissionType: 'text',
          },
          ar: {
            title: 'حاسبة تحويل الوحدات',
            description: 'أنشئ ورقة مرجعية أو حاسبة بسيطة لتحويلات وحدات النفط الشائعة.',
            instructions: [
              'أنشئ جدول تحويل مرجعي يشمل: براميل إلى لترات، أقدام إلى أمتار، رطل/بوصة إلى بار، رطل/غالون إلى كثافة نوعية',
              'حل مسائل التحويل التالية: (1) بئر ينتج 5,000 برميل/يوم. كم لتر في اليوم؟ (2) بئر عمقه 10,000 قدم. كم متر؟ (3) ضغط التكوين 3,000 رطل/بوصة. كم بار؟',
              'أظهر عملك والصيغ المستخدمة',
              'أنشئ 3 مسائل تحويل خاصة بك مع الحلول',
            ],
            submissionType: 'text',
          },
        },
      },
    ],
  },
  // Basic Drilling Terminology
  {
    lessonId: 'terminology',
    days: [
      {
        day: 1,
        type: 'learning',
        content: {
          en: {
            title: 'Basic Drilling Operations Terms',
            explanation: 'Understanding drilling terminology is essential for communication on the rig. Spudding is the act of starting to drill a new well. Making a connection involves adding a new joint of drill pipe. A trip refers to pulling the drill string out of the hole (trip out) or running it back in (trip in). These basic operations happen constantly during drilling.',
            keyTerms: [
              { term: 'Spud', definition: 'To begin drilling a new well' },
              { term: 'Connection', definition: 'Adding a new section of drill pipe as the hole deepens' },
              { term: 'Trip', definition: 'The process of pulling out or running in the drill string' },
            ],
            practiceQuestion: {
              question: 'What does "spud" mean in drilling?',
              options: ['To end drilling', 'To begin drilling a new well', 'To repair equipment', 'To test the mud'],
              correctAnswer: 1,
            },
          },
          ar: {
            title: 'مصطلحات عمليات الحفر الأساسية',
            explanation: 'فهم مصطلحات الحفر أمر ضروري للتواصل في الجهاز. البدء هو فعل بدء حفر بئر جديد. عمل التوصيل يتضمن إضافة قطعة جديدة من أنبوب الحفر. الرحلة تشير إلى سحب سلسلة الحفر من الحفرة أو إعادتها.',
            keyTerms: [
              { term: 'البدء', definition: 'بدء حفر بئر جديد' },
              { term: 'التوصيل', definition: 'إضافة قسم جديد من أنبوب الحفر مع تعمق الحفرة' },
              { term: 'الرحلة', definition: 'عملية السحب أو الإنزال لسلسلة الحفر' },
            ],
            practiceQuestion: {
              question: 'ماذا يعني "البدء" في الحفر؟',
              options: ['إنهاء الحفر', 'بدء حفر بئر جديد', 'إصلاح المعدات', 'اختبار الطين'],
              correctAnswer: 1,
            },
          },
        },
      },
      {
        day: 2,
        type: 'learning',
        content: {
          en: {
            title: 'Wellbore Construction Terms',
            explanation: 'Casing is steel pipe installed in the wellbore to maintain integrity. Cementing secures the casing in place and isolates formations. The annulus is the space between the casing and wellbore wall or between two strings. A liner is casing that doesn\'t extend to surface. These elements protect the well and environment.',
            keyTerms: [
              { term: 'Casing', definition: 'Steel pipe installed to line the wellbore' },
              { term: 'Cementing', definition: 'Pumping cement to secure casing and seal formations' },
              { term: 'Liner', definition: 'Casing string that does not extend to surface' },
            ],
            practiceQuestion: {
              question: 'What is the purpose of casing?',
              options: ['To carry oil', 'To line and protect the wellbore', 'To pump mud', 'To rotate the bit'],
              correctAnswer: 1,
            },
          },
          ar: {
            title: 'مصطلحات بناء فتحة البئر',
            explanation: 'الغلاف هو أنبوب فولاذي يُركب في فتحة البئر للحفاظ على السلامة. التسميت يثبت الغلاف في مكانه ويعزل التكوينات. الفراغ الحلقي هو المساحة بين الغلاف وجدار البئر. البطانة هي غلاف لا يمتد إلى السطح.',
            keyTerms: [
              { term: 'الغلاف', definition: 'أنبوب فولاذي يُركب لتبطين فتحة البئر' },
              { term: 'التسميت', definition: 'ضخ الأسمنت لتثبيت الغلاف وإحكام التكوينات' },
              { term: 'البطانة', definition: 'سلسلة غلاف لا تمتد إلى السطح' },
            ],
            practiceQuestion: {
              question: 'ما هو غرض الغلاف؟',
              options: ['نقل النفط', 'تبطين وحماية فتحة البئر', 'ضخ الطين', 'تدوير الرأس'],
              correctAnswer: 1,
            },
          },
        },
      },
      {
        day: 3,
        type: 'learning',
        content: {
          en: {
            title: 'Drilling Problems Terminology',
            explanation: 'A kick occurs when formation pressure exceeds mud pressure, causing formation fluids to enter the wellbore. Lost circulation is when drilling fluid flows into the formation instead of returning to surface. Stuck pipe occurs when the drill string cannot be moved. These problems require immediate attention and specific procedures.',
            keyTerms: [
              { term: 'Kick', definition: 'Influx of formation fluids into the wellbore' },
              { term: 'Lost Circulation', definition: 'Loss of drilling fluid into the formation' },
              { term: 'Stuck Pipe', definition: 'Drill string that cannot be moved up, down, or rotated' },
            ],
            practiceQuestion: {
              question: 'What causes a kick?',
              options: ['Too much mud', 'Formation pressure exceeds mud pressure', 'Broken equipment', 'Bad weather'],
              correctAnswer: 1,
            },
          },
          ar: {
            title: 'مصطلحات مشاكل الحفر',
            explanation: 'تحدث الركلة عندما يتجاوز ضغط التكوين ضغط الطين، مما يسبب دخول سوائل التكوين إلى البئر. فقدان الدوران هو عندما يتدفق سائل الحفر إلى التكوين بدلاً من العودة إلى السطح. الأنبوب العالق يحدث عندما لا يمكن تحريك سلسلة الحفر.',
            keyTerms: [
              { term: 'الركلة', definition: 'تدفق سوائل التكوين إلى فتحة البئر' },
              { term: 'فقدان الدوران', definition: 'فقدان سائل الحفر في التكوين' },
              { term: 'الأنبوب العالق', definition: 'سلسلة حفر لا يمكن تحريكها للأعلى أو للأسفل أو تدويرها' },
            ],
            practiceQuestion: {
              question: 'ما الذي يسبب الركلة؟',
              options: ['طين كثير', 'ضغط التكوين يتجاوز ضغط الطين', 'معدات مكسورة', 'طقس سيء'],
              correctAnswer: 1,
            },
          },
        },
      },
      {
        day: 4,
        type: 'learning',
        content: {
          en: {
            title: 'Drilling Equipment Terms',
            explanation: 'The kelly is a square or hexagonal pipe that transfers rotation from the rotary table to the drill string. Drill collars are heavy, thick-walled pipes that add weight to the bit. Stabilizers center the drill string in the hole. Together with the bit, these make up the Bottom Hole Assembly (BHA).',
            keyTerms: [
              { term: 'Kelly', definition: 'Pipe that transmits rotation to the drill string' },
              { term: 'Drill Collar', definition: 'Heavy pipe sections that add weight on bit' },
              { term: 'BHA', definition: 'Bottom Hole Assembly - the lower part of the drill string' },
            ],
            practiceQuestion: {
              question: 'What is the purpose of drill collars?',
              options: ['To cool the bit', 'To add weight on the bit', 'To pump mud', 'To prevent kicks'],
              correctAnswer: 1,
            },
          },
          ar: {
            title: 'مصطلحات معدات الحفر',
            explanation: 'الكيلي هو أنبوب مربع أو سداسي ينقل الدوران من الطاولة الدوارة إلى سلسلة الحفر. أطواق الحفر هي أنابيب ثقيلة سميكة الجدران تضيف وزناً للرأس. المثبتات تُمركز سلسلة الحفر في الحفرة.',
            keyTerms: [
              { term: 'الكيلي', definition: 'أنبوب ينقل الدوران إلى سلسلة الحفر' },
              { term: 'طوق الحفر', definition: 'قطع أنابيب ثقيلة تضيف وزناً على الرأس' },
              { term: 'تجميعة قاع الحفرة', definition: 'الجزء السفلي من سلسلة الحفر' },
            ],
            practiceQuestion: {
              question: 'ما هو غرض أطواق الحفر؟',
              options: ['تبريد الرأس', 'إضافة وزن على الرأس', 'ضخ الطين', 'منع الركلات'],
              correctAnswer: 1,
            },
          },
        },
      },
      {
        day: 5,
        type: 'learning',
        content: {
          en: {
            title: 'Production and Completion Terms',
            explanation: 'Perforation creates holes through casing to allow formation fluids to enter the well. Production tubing is smaller pipe inside casing through which oil flows. A packer seals the annular space. Artificial lift methods like rod pumps or gas lift help produce wells that don\'t flow naturally.',
            keyTerms: [
              { term: 'Perforation', definition: 'Creating holes in casing to allow flow' },
              { term: 'Tubing', definition: 'Small diameter pipe for producing fluids' },
              { term: 'Artificial Lift', definition: 'Methods to help produce non-flowing wells' },
            ],
            practiceQuestion: {
              question: 'What is perforation?',
              options: ['Drilling deeper', 'Creating holes in casing for flow', 'Installing pumps', 'Cementing'],
              correctAnswer: 1,
            },
          },
          ar: {
            title: 'مصطلحات الإنتاج والإكمال',
            explanation: 'الثقب ينشئ فتحات عبر الغلاف للسماح لسوائل التكوين بدخول البئر. أنابيب الإنتاج هي أنابيب أصغر داخل الغلاف يتدفق من خلالها النفط. الحاشية تغلق الفراغ الحلقي. طرق الرفع الاصطناعي مثل المضخات العمودية تساعد في إنتاج الآبار غير المتدفقة.',
            keyTerms: [
              { term: 'الثقب', definition: 'إنشاء فتحات في الغلاف للسماح بالتدفق' },
              { term: 'الأنابيب', definition: 'أنبوب صغير القطر لإنتاج السوائل' },
              { term: 'الرفع الاصطناعي', definition: 'طرق للمساعدة في إنتاج الآبار غير المتدفقة' },
            ],
            practiceQuestion: {
              question: 'ما هو الثقب؟',
              options: ['الحفر أعمق', 'إنشاء فتحات في الغلاف للتدفق', 'تركيب المضخات', 'التسميت'],
              correctAnswer: 1,
            },
          },
        },
      },
      {
        day: 6,
        type: 'quiz',
        content: {
          en: { title: 'Drilling Terminology Quiz', explanation: 'Test your knowledge of drilling terms.', keyTerms: [] },
          ar: { title: 'اختبار مصطلحات الحفر', explanation: 'اختبر معرفتك بمصطلحات الحفر.', keyTerms: [] },
        },
        quiz: {
          en: [
            { question: 'What does "spud" mean?', options: ['End drilling', 'Begin drilling a new well', 'Repair pump', 'Test mud'], correctAnswer: 1 },
            { question: 'What is a trip?', options: ['A vacation', 'Pulling out or running in drill string', 'A type of bit', 'A mud test'], correctAnswer: 1 },
            { question: 'What is casing used for?', options: ['Pumping mud', 'Lining the wellbore', 'Rotating the bit', 'Measuring depth'], correctAnswer: 1 },
            { question: 'What is a kick?', options: ['A sports move', 'Formation fluids entering wellbore', 'A type of pump', 'A safety drill'], correctAnswer: 1 },
            { question: 'What is lost circulation?', options: ['Broken pump', 'Drilling fluid lost into formation', 'Missing pipe', 'Power outage'], correctAnswer: 1 },
            { question: 'What is the kelly?', options: ['A person', 'Pipe transmitting rotation', 'A type of mud', 'A safety valve'], correctAnswer: 1 },
            { question: 'What adds weight to the bit?', options: ['Mud', 'Drill collars', 'Casing', 'Cement'], correctAnswer: 1 },
            { question: 'What is BHA?', options: ['Big Heavy Apparatus', 'Bottom Hole Assembly', 'Basic Hole Analysis', 'Bit Handling Area'], correctAnswer: 1 },
            { question: 'What is perforation?', options: ['Making the hole bigger', 'Creating holes in casing', 'Cementing', 'Tripping out'], correctAnswer: 1 },
            { question: 'What is artificial lift?', options: ['A crane', 'Methods to help produce non-flowing wells', 'Elevator', 'Manual labor'], correctAnswer: 1 },
          ],
          ar: [
            { question: 'ماذا يعني "البدء"؟', options: ['إنهاء الحفر', 'بدء حفر بئر جديد', 'إصلاح المضخة', 'اختبار الطين'], correctAnswer: 1 },
            { question: 'ما هي الرحلة؟', options: ['إجازة', 'سحب أو إنزال سلسلة الحفر', 'نوع من الرؤوس', 'اختبار طين'], correctAnswer: 1 },
            { question: 'لماذا يُستخدم الغلاف؟', options: ['ضخ الطين', 'تبطين فتحة البئر', 'تدوير الرأس', 'قياس العمق'], correctAnswer: 1 },
            { question: 'ما هي الركلة؟', options: ['حركة رياضية', 'سوائل التكوين تدخل البئر', 'نوع من المضخات', 'تمرين سلامة'], correctAnswer: 1 },
            { question: 'ما هو فقدان الدوران؟', options: ['مضخة مكسورة', 'فقدان سائل الحفر في التكوين', 'أنبوب مفقود', 'انقطاع الكهرباء'], correctAnswer: 1 },
            { question: 'ما هو الكيلي؟', options: ['شخص', 'أنبوب ينقل الدوران', 'نوع من الطين', 'صمام أمان'], correctAnswer: 1 },
            { question: 'ما الذي يضيف وزناً للرأس؟', options: ['الطين', 'أطواق الحفر', 'الغلاف', 'الأسمنت'], correctAnswer: 1 },
            { question: 'ما هي BHA؟', options: ['جهاز ثقيل كبير', 'تجميعة قاع الحفرة', 'تحليل الحفرة الأساسي', 'منطقة مناولة الرأس'], correctAnswer: 1 },
            { question: 'ما هو الثقب؟', options: ['جعل الحفرة أكبر', 'إنشاء فتحات في الغلاف', 'التسميت', 'السحب للخارج'], correctAnswer: 1 },
            { question: 'ما هو الرفع الاصطناعي؟', options: ['رافعة', 'طرق للمساعدة في إنتاج الآبار غير المتدفقة', 'مصعد', 'عمل يدوي'], correctAnswer: 1 },
          ],
        },
      },
      {
        day: 7,
        type: 'project',
        content: {
          en: { title: 'Terminology Project', explanation: 'Create your own drilling terminology guide.', keyTerms: [] },
          ar: { title: 'مشروع المصطلحات', explanation: 'أنشئ دليل مصطلحات الحفر الخاص بك.', keyTerms: [] },
        },
        project: {
          en: {
            title: 'Drilling Terminology Glossary',
            description: 'Create a comprehensive glossary of drilling terms you have learned.',
            instructions: [
              'Compile a glossary of at least 25 drilling terms from all lessons',
              'Organize them into categories: Operations, Equipment, Problems, Measurements, Completion',
              'For each term, provide: Definition (in your own words), Example of use in a sentence',
              'Include 5 terms not covered in the lessons that you researched independently',
            ],
            submissionType: 'text',
          },
          ar: {
            title: 'قاموس مصطلحات الحفر',
            description: 'أنشئ قاموساً شاملاً لمصطلحات الحفر التي تعلمتها.',
            instructions: [
              'اجمع قاموساً من 25 مصطلح حفر على الأقل من جميع الدروس',
              'نظمها في فئات: العمليات، المعدات، المشاكل، القياسات، الإكمال',
              'لكل مصطلح، قدم: التعريف (بكلماتك الخاصة)، مثال على استخدامه في جملة',
              'أضف 5 مصطلحات لم تُغطَّ في الدروس بحثت عنها بشكل مستقل',
            ],
            submissionType: 'text',
          },
        },
      },
    ],
  },
];
