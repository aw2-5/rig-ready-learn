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

// ============================================
// LESSON 1: Introduction to Petroleum Engineering
// ============================================

const introLesson: WeeklyLesson = {
  lessonId: 'intro',
  days: [
    {
      day: 1,
      type: 'learning',
      content: {
        ar: {
          title: 'ما هي هندسة النفط؟',
          explanation: `<section>
<h2 class="text-primary text-xl font-bold mb-4">🔷 المقدمة العامة</h2>

<p class="mb-4">هندسة النفط (Petroleum Engineering) هي أحد أهم فروع الهندسة التطبيقية في العالم الحديث. تُعنى هذه الهندسة بدراسة وتطوير الطرق المثلى لاستكشاف واستخراج وإنتاج النفط الخام والغاز الطبيعي من باطن الأرض.</p>

<p class="mb-4">يُعتبر النفط والغاز من أهم مصادر الطاقة التي تُحرك عجلة الاقتصاد العالمي، حيث يعتمد عليهما أكثر من 60% من احتياجات الطاقة العالمية. لذلك، فإن مهندسي النفط يلعبون دوراً حيوياً في توفير هذه الطاقة للعالم.</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 لماذا ندرس هندسة النفط؟</h3>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>النفط والغاز يُشكلان العمود الفقري للاقتصاد العالمي</li>
<li>الطلب على الطاقة يتزايد باستمرار مع نمو السكان والصناعة</li>
<li>تحتاج الدول إلى مهندسين متخصصين لإدارة ثرواتها النفطية</li>
<li>الرواتب في هذا المجال من أعلى الرواتب الهندسية عالمياً</li>
<li>فرص العمل متنوعة ومنتشرة في جميع أنحاء العالم</li>
</ul>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 ما الذي يفعله مهندس النفط؟</h2>

<p class="mb-4">يعمل مهندس النفط في عدة مجالات متخصصة، وكل مجال يتطلب مهارات ومعرفة محددة:</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 1. الاستكشاف (Exploration)</h3>

<p class="mb-4">في هذه المرحلة، يتعاون مهندسو النفط مع الجيولوجيين والجيوفيزيائيين للبحث عن مواقع تجمع النفط والغاز تحت سطح الأرض. يستخدمون تقنيات متقدمة مثل:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>المسح الزلزالي (Seismic Survey) لرسم خرائط الطبقات الصخرية</li>
<li>تحليل العينات الصخرية والسوائل</li>
<li>دراسة التاريخ الجيولوجي للمنطقة</li>
<li>استخدام الأقمار الصناعية والتصوير الجوي</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 2. الحفر (Drilling)</h3>

<p class="mb-4">بعد تحديد موقع المخزون، يبدأ مهندسو الحفر بتصميم وتنفيذ عملية الحفر. هذه المرحلة تشمل:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>اختيار نوع جهاز الحفر المناسب</li>
<li>تصميم مسار البئر (عمودي، مائل، أو أفقي)</li>
<li>اختيار سوائل الحفر المناسبة</li>
<li>مراقبة الضغوط ودرجات الحرارة أثناء الحفر</li>
<li>تثبيت أنابيب التغليف (Casing) لحماية البئر</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 3. الإنتاج (Production)</h3>

<p class="mb-4">بعد اكتمال الحفر، يبدأ مهندسو الإنتاج بإدارة عملية استخراج النفط والغاز:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>تصميم معدات رأس البئر</li>
<li>تحسين معدلات التدفق</li>
<li>معالجة المشاكل مثل تراكم الرواسب</li>
<li>تطبيق تقنيات الاستخلاص المُحسّن (EOR)</li>
</ul>

<div class="bg-destructive/10 border-l-4 border-destructive p-4 my-6">
<p class="text-destructive font-semibold">⚠️ ملاحظة مهمة:</p>
<p>هندسة النفط ليست مجرد استخراج النفط، بل تشمل أيضاً الحفاظ على البيئة والسلامة المهنية. المهندس الناجح هو من يوازن بين الإنتاج والمسؤولية البيئية.</p>
</div>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 أهمية هندسة النفط في الاقتصاد</h2>

<p class="mb-4">تُعد صناعة النفط والغاز من أكبر الصناعات في العالم من حيث القيمة السوقية. بعض الحقائق المهمة:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>يُنتج العالم حوالي 100 مليون برميل نفط يومياً</li>
<li>قيمة سوق النفط والغاز تتجاوز 3 تريليون دولار سنوياً</li>
<li>توظف الصناعة ملايين الأشخاص حول العالم</li>
<li>الدول المنتجة للنفط تعتمد بشكل كبير على عائداته</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 ملخص القسم</h3>

<div class="bg-secondary/50 p-4 rounded-lg">
<p>هندسة النفط هي تخصص هندسي يجمع بين العلوم والتطبيق العملي لاستكشاف واستخراج وإنتاج الموارد الهيدروكربونية. يعمل مهندسو النفط في بيئات متنوعة ويواجهون تحديات تقنية وبيئية متعددة.</p>
</div>
</section>`,
          keyTerms: [
            { term: 'هندسة النفط', definition: 'فرع هندسي متخصص في استكشاف واستخراج وإنتاج النفط والغاز الطبيعي' },
            { term: 'النفط الخام', definition: 'سائل طبيعي أسود اللون يوجد في باطن الأرض ويُستخرج للحصول على الوقود والمنتجات البترولية' },
            { term: 'الغاز الطبيعي', definition: 'خليط من الغازات الهيدروكربونية يتكون أساساً من الميثان ويُستخدم كوقود نظيف' },
            { term: 'المخزون النفطي', definition: 'تجمع من النفط أو الغاز في طبقة صخرية مسامية تحت سطح الأرض' },
          ],
          practiceQuestion: {
            question: 'ما هي النسبة التقريبية لاعتماد العالم على النفط والغاز كمصدر للطاقة؟',
            options: ['أقل من 30%', 'حوالي 40%', 'أكثر من 60%', 'حوالي 90%'],
            correctAnswer: 2,
          },
        },
        en: {
          title: 'What is Petroleum Engineering?',
          explanation: `<section>
<h2 class="text-primary text-xl font-bold mb-4">🔷 General Introduction</h2>

<p class="mb-4">Petroleum Engineering is one of the most important branches of applied engineering in the modern world. This engineering discipline focuses on studying and developing optimal methods for exploring, extracting, and producing crude oil and natural gas from underground formations.</p>

<p class="mb-4">Oil and gas are among the most vital energy sources that drive the global economy, with more than 60% of the world's energy needs depending on them. Therefore, petroleum engineers play a crucial role in providing this energy to the world.</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Why Study Petroleum Engineering?</h3>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>Oil and gas form the backbone of the global economy</li>
<li>Energy demand continuously increases with population and industrial growth</li>
<li>Countries need specialized engineers to manage their petroleum resources</li>
<li>Salaries in this field are among the highest in engineering globally</li>
<li>Job opportunities are diverse and spread across the world</li>
</ul>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 What Does a Petroleum Engineer Do?</h2>

<p class="mb-4">A petroleum engineer works in several specialized areas, each requiring specific skills and knowledge:</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 1. Exploration</h3>

<p class="mb-4">In this phase, petroleum engineers collaborate with geologists and geophysicists to search for oil and gas accumulation sites underground. They use advanced techniques such as:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>Seismic Surveys to map rock layers</li>
<li>Analysis of rock and fluid samples</li>
<li>Study of the geological history of the area</li>
<li>Use of satellites and aerial imaging</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 2. Drilling</h3>

<p class="mb-4">After identifying the reservoir location, drilling engineers begin designing and executing the drilling operation. This phase includes:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>Selecting the appropriate drilling rig type</li>
<li>Designing the well path (vertical, directional, or horizontal)</li>
<li>Choosing suitable drilling fluids</li>
<li>Monitoring pressures and temperatures during drilling</li>
<li>Installing casing to protect the well</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 3. Production</h3>

<p class="mb-4">After drilling is complete, production engineers manage the oil and gas extraction process:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>Designing wellhead equipment</li>
<li>Optimizing flow rates</li>
<li>Addressing issues like scale buildup</li>
<li>Applying Enhanced Oil Recovery (EOR) techniques</li>
</ul>

<div class="bg-destructive/10 border-l-4 border-destructive p-4 my-6">
<p class="text-destructive font-semibold">⚠️ Important Note:</p>
<p>Petroleum engineering is not just about extracting oil; it also involves environmental protection and occupational safety. A successful engineer balances production with environmental responsibility.</p>
</div>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 Importance of Petroleum Engineering in the Economy</h2>

<p class="mb-4">The oil and gas industry is one of the largest industries in the world by market value. Some important facts:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>The world produces about 100 million barrels of oil daily</li>
<li>The oil and gas market value exceeds $3 trillion annually</li>
<li>The industry employs millions of people worldwide</li>
<li>Oil-producing countries heavily depend on its revenues</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Section Summary</h3>

<div class="bg-secondary/50 p-4 rounded-lg">
<p>Petroleum engineering is an engineering specialty that combines science and practical application to explore, extract, and produce hydrocarbon resources. Petroleum engineers work in diverse environments and face multiple technical and environmental challenges.</p>
</div>
</section>`,
          keyTerms: [
            { term: 'Petroleum Engineering', definition: 'An engineering branch specialized in exploring, extracting, and producing oil and natural gas' },
            { term: 'Crude Oil', definition: 'A naturally occurring black liquid found underground, extracted for fuel and petroleum products' },
            { term: 'Natural Gas', definition: 'A mixture of hydrocarbon gases mainly consisting of methane, used as clean fuel' },
            { term: 'Reservoir', definition: 'An accumulation of oil or gas in a porous rock formation underground' },
          ],
          practiceQuestion: {
            question: 'What is the approximate percentage of global energy dependence on oil and gas?',
            options: ['Less than 30%', 'About 40%', 'More than 60%', 'About 90%'],
            correctAnswer: 2,
          },
        },
      },
    },
    {
      day: 2,
      type: 'learning',
      content: {
        ar: {
          title: 'تاريخ صناعة النفط والغاز',
          explanation: `<section>
<h2 class="text-primary text-xl font-bold mb-4">🔷 البدايات الأولى لاستخدام النفط</h2>

<p class="mb-4">يعود استخدام الإنسان للنفط إلى آلاف السنين. فقد استخدم سكان بلاد ما بين النهرين (العراق الحالي) القار الطبيعي في البناء وصناعة السفن منذ أكثر من 5000 عام. كما استخدم المصريون القدماء مواد بترولية في تحنيط الموتى.</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 الاستخدامات القديمة للنفط</h3>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>استخدام القار في بناء أسوار بابل</li>
<li>إضاءة المشاعل باستخدام النفط الخام</li>
<li>استخدامه كدواء ومرهم في الطب القديم</li>
<li>تزييت العجلات والآلات البدائية</li>
<li>صناعة الأسلحة الحارقة في الحروب</li>
</ul>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 بداية العصر الحديث للنفط</h2>

<p class="mb-4">يُعتبر عام 1859 نقطة تحول تاريخية في صناعة النفط، حيث نجح الكولونيل إدوين دريك في حفر أول بئر نفط تجاري ناجح في تيتوسفيل، بنسلفانيا، الولايات المتحدة الأمريكية.</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 قصة بئر دريك</h3>

<p class="mb-4">قبل بئر دريك، كان النفط يُجمع من الينابيع الطبيعية أو يُستخرج بطرق بدائية. لكن دريك استخدم تقنية الحفر الإيقاعي (Cable-tool Drilling) وهي نفس التقنية المستخدمة في حفر آبار المياه.</p>

<p class="mb-4">وصل دريك إلى النفط على عمق 69 قدماً (21 متراً) تقريباً، وأنتج البئر حوالي 25 برميلاً يومياً. هذا الحدث أشعل "حمى النفط" في أمريكا وبدأت عصراً جديداً.</p>

<div class="bg-destructive/10 border-l-4 border-destructive p-4 my-6">
<p class="text-destructive font-semibold">⚠️ معلومة مهمة:</p>
<p>رغم نجاح دريك في حفر البئر، إلا أنه لم يستفد مالياً وتوفي فقيراً. بينما أصبح آخرون مثل جون روكفلر من أغنى الناس في التاريخ من صناعة النفط.</p>
</div>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 تطور الصناعة النفطية في القرن العشرين</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 اكتشاف حقل سبيندلتوب (1901)</h3>

<p class="mb-4">في عام 1901، اندفع النفط من بئر سبيندلتوب في تكساس بقوة هائلة، منتجاً أكثر من 100,000 برميل يومياً. هذا الاكتشاف أثبت وجود كميات ضخمة من النفط وبدأ عصر النفط الأمريكي.</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 اكتشاف النفط في الشرق الأوسط</h3>

<p class="mb-4">شهد القرن العشرين اكتشافات نفطية ضخمة في الشرق الأوسط:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>1908: اكتشاف النفط في إيران (أول اكتشاف في الشرق الأوسط)</li>
<li>1932: اكتشاف النفط في البحرين</li>
<li>1938: اكتشاف حقل الدمام في السعودية</li>
<li>1938: اكتشاف حقل برقان في الكويت</li>
<li>1958: اكتشاف النفط في الجزائر وليبيا</li>
</ul>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 أحداث مهمة في تاريخ النفط</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 تأسيس أوبك (1960)</h3>

<p class="mb-4">تأسست منظمة الدول المصدرة للبترول (أوبك) في بغداد عام 1960 بواسطة خمس دول مؤسسة: السعودية، إيران، العراق، الكويت، وفنزويلا. الهدف كان تنسيق السياسات النفطية وحماية مصالح الدول المنتجة.</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 أزمة النفط (1973)</h3>

<p class="mb-4">خلال حرب أكتوبر 1973، قررت الدول العربية فرض حظر نفطي على الدول الداعمة لإسرائيل. أدى ذلك إلى:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>ارتفاع أسعار النفط من 3 دولارات إلى 12 دولاراً للبرميل</li>
<li>أزمة اقتصادية عالمية</li>
<li>إعادة تقييم سياسات الطاقة في الدول الغربية</li>
<li>البحث عن مصادر طاقة بديلة</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 ملخص القسم</h3>

<div class="bg-secondary/50 p-4 rounded-lg">
<p>تطورت صناعة النفط من استخدامات بدائية قديمة إلى صناعة عالمية ضخمة. بدأ العصر الحديث ببئر دريك 1859، وشهد القرن العشرون اكتشافات هائلة خاصة في الشرق الأوسط. أصبح النفط سلعة استراتيجية تؤثر في السياسة والاقتصاد العالمي.</p>
</div>
</section>`,
          keyTerms: [
            { term: 'بئر دريك', definition: 'أول بئر نفط تجاري ناجح، حُفر عام 1859 في بنسلفانيا على يد إدوين دريك' },
            { term: 'أوبك (OPEC)', definition: 'منظمة الدول المصدرة للبترول، تأسست 1960 لتنسيق السياسات النفطية بين الدول المنتجة' },
            { term: 'سبيندلتوب', definition: 'حقل نفطي اكتُشف في تكساس عام 1901، أثبت وجود احتياطيات نفطية ضخمة' },
            { term: 'حمى النفط', definition: 'فترة اندفاع الناس للبحث عن النفط واستثماره بعد اكتشاف بئر دريك' },
          ],
          practiceQuestion: {
            question: 'في أي عام حُفر أول بئر نفط تجاري ناجح؟',
            options: ['1849', '1859', '1869', '1879'],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'History of the Oil and Gas Industry',
          explanation: `<section>
<h2 class="text-primary text-xl font-bold mb-4">🔷 Early Uses of Oil</h2>

<p class="mb-4">Human use of oil dates back thousands of years. Inhabitants of Mesopotamia (modern Iraq) used natural bitumen in construction and shipbuilding more than 5,000 years ago. Ancient Egyptians also used petroleum-based materials in mummification.</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Ancient Uses of Oil</h3>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>Using bitumen in building the walls of Babylon</li>
<li>Lighting torches with crude oil</li>
<li>Using it as medicine and ointment in ancient medicine</li>
<li>Lubricating wheels and primitive machinery</li>
<li>Manufacturing incendiary weapons in warfare</li>
</ul>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 The Beginning of the Modern Oil Era</h2>

<p class="mb-4">The year 1859 is considered a historic turning point in the oil industry when Colonel Edwin Drake successfully drilled the first commercial oil well in Titusville, Pennsylvania, USA.</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 The Drake Well Story</h3>

<p class="mb-4">Before Drake's well, oil was collected from natural seeps or extracted by primitive methods. Drake used cable-tool drilling technique, the same technology used for drilling water wells.</p>

<p class="mb-4">Drake reached oil at a depth of approximately 69 feet (21 meters), and the well produced about 25 barrels per day. This event sparked "oil fever" in America and began a new era.</p>

<div class="bg-destructive/10 border-l-4 border-destructive p-4 my-6">
<p class="text-destructive font-semibold">⚠️ Important Information:</p>
<p>Despite Drake's success in drilling the well, he did not benefit financially and died poor. Meanwhile, others like John D. Rockefeller became among the richest people in history from the oil industry.</p>
</div>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 Oil Industry Development in the 20th Century</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Spindletop Discovery (1901)</h3>

<p class="mb-4">In 1901, oil gushed from the Spindletop well in Texas with tremendous force, producing more than 100,000 barrels per day. This discovery proved the existence of massive oil quantities and began the American oil age.</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Oil Discovery in the Middle East</h3>

<p class="mb-4">The 20th century witnessed massive oil discoveries in the Middle East:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>1908: Oil discovery in Iran (first discovery in the Middle East)</li>
<li>1932: Oil discovery in Bahrain</li>
<li>1938: Discovery of Dammam field in Saudi Arabia</li>
<li>1938: Discovery of Burgan field in Kuwait</li>
<li>1958: Oil discovery in Algeria and Libya</li>
</ul>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 Important Events in Oil History</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 OPEC Formation (1960)</h3>

<p class="mb-4">The Organization of Petroleum Exporting Countries (OPEC) was founded in Baghdad in 1960 by five founding countries: Saudi Arabia, Iran, Iraq, Kuwait, and Venezuela. The goal was to coordinate oil policies and protect the interests of producing countries.</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Oil Crisis (1973)</h3>

<p class="mb-4">During the October 1973 war, Arab countries decided to impose an oil embargo on countries supporting Israel. This led to:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>Oil prices rising from $3 to $12 per barrel</li>
<li>A global economic crisis</li>
<li>Reassessment of energy policies in Western countries</li>
<li>Search for alternative energy sources</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Section Summary</h3>

<div class="bg-secondary/50 p-4 rounded-lg">
<p>The oil industry evolved from ancient primitive uses to a massive global industry. The modern era began with Drake's well in 1859, and the 20th century witnessed huge discoveries, especially in the Middle East. Oil became a strategic commodity affecting global politics and economics.</p>
</div>
</section>`,
          keyTerms: [
            { term: 'Drake Well', definition: 'The first successful commercial oil well, drilled in 1859 in Pennsylvania by Edwin Drake' },
            { term: 'OPEC', definition: 'Organization of Petroleum Exporting Countries, founded in 1960 to coordinate oil policies among producing nations' },
            { term: 'Spindletop', definition: 'An oil field discovered in Texas in 1901, proving the existence of massive oil reserves' },
            { term: 'Oil Fever', definition: 'A period of rush by people to search for and invest in oil after Drake\'s well discovery' },
          ],
          practiceQuestion: {
            question: 'In what year was the first successful commercial oil well drilled?',
            options: ['1849', '1859', '1869', '1879'],
            correctAnswer: 1,
          },
        },
      },
    },
    {
      day: 3,
      type: 'learning',
      content: {
        ar: {
          title: 'فروع هندسة النفط الأربعة',
          explanation: `<section>
<h2 class="text-primary text-xl font-bold mb-4">🔷 نظرة عامة على فروع هندسة النفط</h2>

<p class="mb-4">تنقسم هندسة النفط إلى أربعة فروع رئيسية، كل فرع يركز على جانب محدد من عمليات استخراج النفط والغاز. هذه الفروع تعمل معاً بشكل متكامل لضمان إنتاج آمن وفعال.</p>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 الفرع الأول: هندسة الحفر (Drilling Engineering)</h2>

<p class="mb-4">هندسة الحفر هي الفرع المسؤول عن إنشاء الآبار للوصول إلى المخزونات النفطية تحت سطح الأرض. يُعتبر هذا الفرع من أكثر الفروع تحدياً وأهمية.</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 مهام مهندس الحفر</h3>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>تصميم مسار البئر ومواصفاته الهندسية</li>
<li>اختيار أجهزة الحفر المناسبة</li>
<li>تحديد سوائل الحفر وخصائصها</li>
<li>تصميم برنامج أنابيب التغليف والإسمنت</li>
<li>مراقبة الضغوط ومنع الانفجارات</li>
<li>التعامل مع المشاكل أثناء الحفر</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 تحديات هندسة الحفر</h3>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>الحفر في أعماق كبيرة قد تتجاوز 10 كيلومترات</li>
<li>درجات حرارة عالية تصل إلى 200 درجة مئوية</li>
<li>ضغوط هائلة تصل إلى 1000 بار</li>
<li>تكوينات صخرية معقدة ومتنوعة</li>
<li>الحفر في البيئات البحرية والقطبية</li>
</ul>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 الفرع الثاني: هندسة المخزونات (Reservoir Engineering)</h2>

<p class="mb-4">هندسة المخزونات تركز على دراسة وتحليل التكوينات الصخرية التي تحتوي على النفط والغاز. الهدف الأساسي هو تحقيق أقصى استخلاص ممكن من المخزون.</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 مهام مهندس المخزونات</h3>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>تقدير كميات النفط والغاز المتوفرة (الاحتياطيات)</li>
<li>دراسة خصائص الصخور: المسامية والنفاذية</li>
<li>تحليل خصائص السوائل: اللزوجة، الكثافة، التركيب</li>
<li>محاكاة سلوك المخزون باستخدام برامج حاسوبية</li>
<li>تصميم خطط تطوير الحقول</li>
<li>تحديد عدد الآبار الأمثل ومواقعها</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 مفاهيم مهمة في هندسة المخزونات</h3>

<p class="mb-4"><strong>المسامية (Porosity):</strong> نسبة الفراغات في الصخر إلى الحجم الكلي. تتراوح عادة بين 5-30%.</p>

<p class="mb-4"><strong>النفاذية (Permeability):</strong> قدرة الصخر على السماح بمرور السوائل خلاله. تُقاس بوحدة الميلي دارسي.</p>

<p class="mb-4"><strong>معامل الاستخلاص (Recovery Factor):</strong> نسبة النفط المُستخرج إلى النفط الموجود أصلاً. يتراوح عادة بين 20-60%.</p>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 الفرع الثالث: هندسة الإنتاج (Production Engineering)</h2>

<p class="mb-4">هندسة الإنتاج مسؤولة عن كل ما يتعلق بإحضار النفط والغاز من المخزون إلى السطح وتجهيزه للنقل والبيع.</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 مهام مهندس الإنتاج</h3>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>تصميم معدات الإنتاج والإكمال</li>
<li>تحسين أداء الآبار ومعدلات الإنتاج</li>
<li>معالجة مشاكل الإنتاج (تراكم الشمع، الترسبات)</li>
<li>تصميم أنظمة الرفع الاصطناعي</li>
<li>مراقبة ضغوط ودرجات حرارة الآبار</li>
<li>تصميم مرافق المعالجة السطحية</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 طرق الرفع الاصطناعي</h3>

<p class="mb-4">عندما ينخفض الضغط الطبيعي للمخزون، يُستخدم الرفع الاصطناعي:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>المضخات الغاطسة الكهربائية (ESP)</li>
<li>مضخات العصا (Rod Pump)</li>
<li>الرفع بالغاز (Gas Lift)</li>
<li>المضخات الهيدروليكية</li>
</ul>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 الفرع الرابع: تقييم التكوينات (Formation Evaluation)</h2>

<p class="mb-4">تقييم التكوينات يختص بجمع وتحليل البيانات عن الطبقات الصخرية والسوائل الموجودة فيها.</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 أدوات تقييم التكوينات</h3>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>التسجيلات السلكية (Wireline Logging)</li>
<li>أخذ العينات الصخرية (Coring)</li>
<li>اختبارات الآبار (Well Testing)</li>
<li>تحليل السوائل المكمنية</li>
<li>التصوير بالموجات الصوتية</li>
</ul>

<div class="bg-destructive/10 border-l-4 border-destructive p-4 my-6">
<p class="text-destructive font-semibold">⚠️ ملاحظة مهمة:</p>
<p>الفروع الأربعة تعمل معاً كفريق واحد. فمهندس المخزونات يعتمد على بيانات تقييم التكوينات، ومهندس الحفر يُنفذ تصميمات مهندس المخزونات، ومهندس الإنتاج يُكمل العمل بعد الحفر.</p>
</div>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 ملخص القسم</h3>

<div class="bg-secondary/50 p-4 rounded-lg">
<p>هندسة النفط تتكون من أربعة فروع متكاملة: هندسة الحفر (إنشاء الآبار)، هندسة المخزونات (تحليل وتحسين الاستخلاص)، هندسة الإنتاج (إنتاج ومعالجة النفط)، وتقييم التكوينات (جمع وتحليل البيانات). كل فرع ضروري لنجاح العمليات النفطية.</p>
</div>
</section>`,
          keyTerms: [
            { term: 'هندسة الحفر', definition: 'الفرع المسؤول عن تصميم وتنفيذ عمليات حفر الآبار' },
            { term: 'هندسة المخزونات', definition: 'الفرع المختص بدراسة وتحليل خصائص الصخور والسوائل لتحقيق أقصى استخلاص' },
            { term: 'المسامية', definition: 'نسبة حجم الفراغات في الصخر إلى الحجم الكلي، تُعبر عن قدرة الصخر على تخزين السوائل' },
            { term: 'النفاذية', definition: 'قدرة الصخر على السماح بتدفق السوائل خلاله، تُقاس بوحدة الدارسي' },
          ],
          practiceQuestion: {
            question: 'أي فرع من فروع هندسة النفط مسؤول عن تقدير كميات النفط في المخزون؟',
            options: ['هندسة الحفر', 'هندسة المخزونات', 'هندسة الإنتاج', 'تقييم التكوينات'],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'The Four Branches of Petroleum Engineering',
          explanation: `<section>
<h2 class="text-primary text-xl font-bold mb-4">🔷 Overview of Petroleum Engineering Branches</h2>

<p class="mb-4">Petroleum engineering is divided into four main branches, each focusing on a specific aspect of oil and gas extraction operations. These branches work together in an integrated manner to ensure safe and efficient production.</p>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 First Branch: Drilling Engineering</h2>

<p class="mb-4">Drilling engineering is the branch responsible for creating wells to access underground oil reservoirs. This branch is considered one of the most challenging and important.</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Drilling Engineer Tasks</h3>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>Designing well path and engineering specifications</li>
<li>Selecting appropriate drilling rigs</li>
<li>Determining drilling fluids and their properties</li>
<li>Designing casing and cement programs</li>
<li>Monitoring pressures and preventing blowouts</li>
<li>Handling problems during drilling</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Drilling Engineering Challenges</h3>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>Drilling at great depths exceeding 10 kilometers</li>
<li>High temperatures reaching 200°C</li>
<li>Enormous pressures reaching 1000 bar</li>
<li>Complex and diverse rock formations</li>
<li>Drilling in offshore and polar environments</li>
</ul>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 Second Branch: Reservoir Engineering</h2>

<p class="mb-4">Reservoir engineering focuses on studying and analyzing rock formations containing oil and gas. The primary goal is to achieve maximum possible recovery from the reservoir.</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Reservoir Engineer Tasks</h3>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>Estimating available oil and gas quantities (reserves)</li>
<li>Studying rock properties: porosity and permeability</li>
<li>Analyzing fluid properties: viscosity, density, composition</li>
<li>Simulating reservoir behavior using computer programs</li>
<li>Designing field development plans</li>
<li>Determining optimal number and location of wells</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Important Concepts in Reservoir Engineering</h3>

<p class="mb-4"><strong>Porosity:</strong> The ratio of void spaces in rock to total volume. Usually ranges between 5-30%.</p>

<p class="mb-4"><strong>Permeability:</strong> The rock's ability to allow fluid flow through it. Measured in millidarcy units.</p>

<p class="mb-4"><strong>Recovery Factor:</strong> The ratio of extracted oil to original oil in place. Usually ranges between 20-60%.</p>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 Third Branch: Production Engineering</h2>

<p class="mb-4">Production engineering is responsible for everything related to bringing oil and gas from the reservoir to the surface and preparing it for transport and sale.</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Production Engineer Tasks</h3>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>Designing production and completion equipment</li>
<li>Optimizing well performance and production rates</li>
<li>Addressing production problems (wax buildup, scale)</li>
<li>Designing artificial lift systems</li>
<li>Monitoring well pressures and temperatures</li>
<li>Designing surface processing facilities</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Artificial Lift Methods</h3>

<p class="mb-4">When natural reservoir pressure decreases, artificial lift is used:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>Electric Submersible Pumps (ESP)</li>
<li>Rod Pumps (Beam Pumps)</li>
<li>Gas Lift</li>
<li>Hydraulic Pumps</li>
</ul>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 Fourth Branch: Formation Evaluation</h2>

<p class="mb-4">Formation evaluation specializes in collecting and analyzing data about rock layers and the fluids they contain.</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Formation Evaluation Tools</h3>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>Wireline Logging</li>
<li>Coring (rock sampling)</li>
<li>Well Testing</li>
<li>Reservoir fluid analysis</li>
<li>Acoustic imaging</li>
</ul>

<div class="bg-destructive/10 border-l-4 border-destructive p-4 my-6">
<p class="text-destructive font-semibold">⚠️ Important Note:</p>
<p>The four branches work together as one team. The reservoir engineer relies on formation evaluation data, the drilling engineer implements reservoir engineer designs, and the production engineer completes the work after drilling.</p>
</div>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Section Summary</h3>

<div class="bg-secondary/50 p-4 rounded-lg">
<p>Petroleum engineering consists of four integrated branches: Drilling Engineering (well construction), Reservoir Engineering (analysis and recovery optimization), Production Engineering (oil production and processing), and Formation Evaluation (data collection and analysis). Each branch is essential for successful petroleum operations.</p>
</div>
</section>`,
          keyTerms: [
            { term: 'Drilling Engineering', definition: 'The branch responsible for designing and executing well drilling operations' },
            { term: 'Reservoir Engineering', definition: 'The branch specialized in studying rock and fluid properties to achieve maximum recovery' },
            { term: 'Porosity', definition: 'The ratio of void volume in rock to total volume, expressing the rock\'s ability to store fluids' },
            { term: 'Permeability', definition: 'The rock\'s ability to allow fluid flow through it, measured in darcy units' },
          ],
          practiceQuestion: {
            question: 'Which branch of petroleum engineering is responsible for estimating oil quantities in the reservoir?',
            options: ['Drilling Engineering', 'Reservoir Engineering', 'Production Engineering', 'Formation Evaluation'],
            correctAnswer: 1,
          },
        },
      },
    },
    {
      day: 4,
      type: 'learning',
      content: {
        ar: {
          title: 'المسارات الوظيفية في هندسة النفط',
          explanation: `<section>
<h2 class="text-primary text-xl font-bold mb-4">🔷 فرص العمل المتنوعة</h2>

<p class="mb-4">توفر هندسة النفط مجموعة واسعة من الفرص الوظيفية في شركات ومنظمات متنوعة. يمكن لمهندس النفط العمل في الميدان أو المكتب، في البر أو البحر، محلياً أو دولياً.</p>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 أنواع الشركات التي توظف مهندسي النفط</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 1. شركات النفط الوطنية (NOCs)</h3>

<p class="mb-4">هي الشركات المملوكة للدول والتي تدير الموارد النفطية الوطنية. أمثلة:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>أرامكو السعودية (السعودية)</li>
<li>شركة نفط الكويت (الكويت)</li>
<li>أدنوك (الإمارات)</li>
<li>سوناطراك (الجزائر)</li>
<li>شركة النفط الوطنية العراقية</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 2. شركات النفط العالمية (IOCs)</h3>

<p class="mb-4">شركات خاصة تعمل في جميع أنحاء العالم:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>إكسون موبيل (ExxonMobil)</li>
<li>شيفرون (Chevron)</li>
<li>شل (Shell)</li>
<li>بريتش بتروليوم (BP)</li>
<li>توتال إنرجيز (TotalEnergies)</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 3. شركات الخدمات النفطية</h3>

<p class="mb-4">شركات متخصصة تقدم خدمات لشركات النفط:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>شلمبرجير (Schlumberger) - خدمات تقييم وتكنولوجيا</li>
<li>هاليبرتون (Halliburton) - خدمات الحفر والإكمال</li>
<li>بيكر هيوز (Baker Hughes) - معدات وخدمات</li>
<li>ويذرفورد (Weatherford) - خدمات متنوعة</li>
</ul>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 الوظائف الميدانية</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 مهندس حفر ميداني (Field Drilling Engineer)</h3>

<p class="mb-4">يعمل مباشرة في موقع الحفر ويشرف على العمليات اليومية:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>يتابع تقدم الحفر على مدار الساعة</li>
<li>يتخذ قرارات فورية عند حدوث مشاكل</li>
<li>يتواصل مع الفريق والإدارة</li>
<li>يضمن تطبيق معايير السلامة</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 مهندس إنتاج ميداني (Field Production Engineer)</h3>

<p class="mb-4">يدير عمليات الإنتاج في الحقل:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>يراقب أداء الآبار يومياً</li>
<li>يُجري الصيانة الدورية</li>
<li>يحل مشاكل الإنتاج</li>
<li>يُعد التقارير اليومية</li>
</ul>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 الوظائف المكتبية</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 مهندس تصميم (Design Engineer)</h3>

<p class="mb-4">يعمل في المكتب على تصميم الآبار والمرافق:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>يستخدم برامج حاسوبية متقدمة</li>
<li>يُعد خطط الحفر التفصيلية</li>
<li>يحسب التكاليف والجداول الزمنية</li>
<li>يتعاون مع فرق متعددة التخصصات</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 مهندس محاكاة (Simulation Engineer)</h3>

<p class="mb-4">متخصص في نمذجة المخزونات باستخدام الحاسوب:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>يبني نماذج ثلاثية الأبعاد للمخزونات</li>
<li>يتنبأ بسلوك الإنتاج مستقبلاً</li>
<li>يقترح سيناريوهات تطوير مختلفة</li>
<li>يُحدّث النماذج ببيانات جديدة</li>
</ul>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 التدرج الوظيفي</h2>

<p class="mb-4">يتدرج مهندس النفط عادة في المناصب التالية:</p>

<ol class="list-decimal list-inside space-y-2 mb-4">
<li>مهندس مبتدئ (Junior Engineer) - 0-3 سنوات</li>
<li>مهندس (Engineer) - 3-7 سنوات</li>
<li>مهندس أول (Senior Engineer) - 7-12 سنة</li>
<li>مهندس رئيسي (Lead Engineer) - 12-18 سنة</li>
<li>مدير هندسي (Engineering Manager) - 18+ سنة</li>
<li>مدير عام/تنفيذي (General Manager/Executive)</li>
</ol>

<div class="bg-destructive/10 border-l-4 border-destructive p-4 my-6">
<p class="text-destructive font-semibold">⚠️ نصيحة مهمة:</p>
<p>لتحقيق النجاح في هندسة النفط، يُنصح بالعمل الميداني في السنوات الأولى لاكتساب الخبرة العملية، ثم الانتقال تدريجياً إلى المناصب المكتبية والإدارية.</p>
</div>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 ملخص القسم</h3>

<div class="bg-secondary/50 p-4 rounded-lg">
<p>تتنوع فرص العمل في هندسة النفط بين الشركات الوطنية والعالمية وشركات الخدمات. تشمل الوظائف العمل الميداني في مواقع الحفر والإنتاج، والعمل المكتبي في التصميم والمحاكاة. التدرج الوظيفي يبدأ من مهندس مبتدئ ويصل إلى مناصب إدارية عليا.</p>
</div>
</section>`,
          keyTerms: [
            { term: 'شركات النفط الوطنية', definition: 'شركات مملوكة للدول تدير الموارد النفطية الوطنية مثل أرامكو وأدنوك' },
            { term: 'شركات الخدمات النفطية', definition: 'شركات متخصصة تقدم خدمات تقنية لشركات النفط مثل شلمبرجير وهاليبرتون' },
            { term: 'المنبع (Upstream)', definition: 'قطاع الاستكشاف والإنتاج في صناعة النفط' },
            { term: 'المصب (Downstream)', definition: 'قطاع التكرير والتوزيع والتسويق في صناعة النفط' },
          ],
          practiceQuestion: {
            question: 'أي نوع من الشركات التالية تُصنف كشركة خدمات نفطية؟',
            options: ['أرامكو السعودية', 'شلمبرجير', 'شركة نفط الكويت', 'إكسون موبيل'],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Career Paths in Petroleum Engineering',
          explanation: `<section>
<h2 class="text-primary text-xl font-bold mb-4">🔷 Diverse Job Opportunities</h2>

<p class="mb-4">Petroleum engineering offers a wide range of job opportunities in various companies and organizations. A petroleum engineer can work in the field or office, onshore or offshore, locally or internationally.</p>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 Types of Companies Employing Petroleum Engineers</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 1. National Oil Companies (NOCs)</h3>

<p class="mb-4">State-owned companies that manage national petroleum resources. Examples:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>Saudi Aramco (Saudi Arabia)</li>
<li>Kuwait Oil Company (Kuwait)</li>
<li>ADNOC (UAE)</li>
<li>Sonatrach (Algeria)</li>
<li>Iraq National Oil Company</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 2. International Oil Companies (IOCs)</h3>

<p class="mb-4">Private companies operating worldwide:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>ExxonMobil</li>
<li>Chevron</li>
<li>Shell</li>
<li>BP (British Petroleum)</li>
<li>TotalEnergies</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 3. Oilfield Service Companies</h3>

<p class="mb-4">Specialized companies providing services to oil companies:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>Schlumberger - evaluation and technology services</li>
<li>Halliburton - drilling and completion services</li>
<li>Baker Hughes - equipment and services</li>
<li>Weatherford - various services</li>
</ul>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 Field Positions</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Field Drilling Engineer</h3>

<p class="mb-4">Works directly at the drilling site and supervises daily operations:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>Monitors drilling progress around the clock</li>
<li>Makes immediate decisions when problems occur</li>
<li>Communicates with team and management</li>
<li>Ensures safety standards are applied</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Field Production Engineer</h3>

<p class="mb-4">Manages production operations in the field:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>Monitors well performance daily</li>
<li>Performs routine maintenance</li>
<li>Solves production problems</li>
<li>Prepares daily reports</li>
</ul>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 Office Positions</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Design Engineer</h3>

<p class="mb-4">Works in the office on well and facility design:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>Uses advanced computer software</li>
<li>Prepares detailed drilling plans</li>
<li>Calculates costs and schedules</li>
<li>Collaborates with multidisciplinary teams</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Simulation Engineer</h3>

<p class="mb-4">Specializes in computer reservoir modeling:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>Builds 3D reservoir models</li>
<li>Predicts future production behavior</li>
<li>Proposes different development scenarios</li>
<li>Updates models with new data</li>
</ul>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 Career Progression</h2>

<p class="mb-4">Petroleum engineers typically progress through these positions:</p>

<ol class="list-decimal list-inside space-y-2 mb-4">
<li>Junior Engineer - 0-3 years</li>
<li>Engineer - 3-7 years</li>
<li>Senior Engineer - 7-12 years</li>
<li>Lead Engineer - 12-18 years</li>
<li>Engineering Manager - 18+ years</li>
<li>General Manager/Executive</li>
</ol>

<div class="bg-destructive/10 border-l-4 border-destructive p-4 my-6">
<p class="text-destructive font-semibold">⚠️ Important Advice:</p>
<p>To achieve success in petroleum engineering, it's recommended to work in the field during the early years to gain practical experience, then gradually transition to office and management positions.</p>
</div>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Section Summary</h3>

<div class="bg-secondary/50 p-4 rounded-lg">
<p>Job opportunities in petroleum engineering vary among national companies, international companies, and service companies. Jobs include field work at drilling and production sites, and office work in design and simulation. Career progression starts from junior engineer and reaches senior management positions.</p>
</div>
</section>`,
          keyTerms: [
            { term: 'National Oil Companies', definition: 'State-owned companies managing national petroleum resources like Aramco and ADNOC' },
            { term: 'Oilfield Service Companies', definition: 'Specialized companies providing technical services to oil companies like Schlumberger and Halliburton' },
            { term: 'Upstream', definition: 'The exploration and production sector of the oil industry' },
            { term: 'Downstream', definition: 'The refining, distribution, and marketing sector of the oil industry' },
          ],
          practiceQuestion: {
            question: 'Which of the following companies is classified as an oilfield service company?',
            options: ['Saudi Aramco', 'Schlumberger', 'Kuwait Oil Company', 'ExxonMobil'],
            correctAnswer: 1,
          },
        },
      },
    },
    {
      day: 5,
      type: 'learning',
      content: {
        ar: {
          title: 'البيئة والسلامة في صناعة النفط',
          explanation: `<section>
<h2 class="text-primary text-xl font-bold mb-4">🔷 أهمية السلامة والبيئة (HSE)</h2>

<p class="mb-4">تُعد السلامة والصحة المهنية وحماية البيئة (HSE - Health, Safety, and Environment) من أهم الأولويات في صناعة النفط والغاز. فهذه الصناعة تتعامل مع مواد قابلة للاشتعال وضغوط عالية ومعدات ثقيلة.</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 لماذا HSE مهم جداً؟</h3>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>حماية أرواح العاملين والمجتمعات المجاورة</li>
<li>الحفاظ على البيئة للأجيال القادمة</li>
<li>تجنب الخسائر المالية الضخمة من الحوادث</li>
<li>الامتثال للقوانين والأنظمة الدولية</li>
<li>الحفاظ على سمعة الشركة</li>
</ul>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 مخاطر العمل في صناعة النفط</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 1. مخاطر الحريق والانفجار</h3>

<p class="mb-4">النفط والغاز مواد شديدة الاشتعال. أي شرارة يمكن أن تسبب كارثة:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>انفجارات في مرافق المعالجة</li>
<li>حرائق الآبار (Blowouts)</li>
<li>تسرب الغازات القابلة للاشتعال</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 2. مخاطر الضغط العالي</h3>

<p class="mb-4">تعمل معدات النفط تحت ضغوط هائلة:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>انفجار الأنابيب والصمامات</li>
<li>خطر من المعدات المضغوطة</li>
<li>إصابات من تسرب السوائل تحت الضغط</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 3. المخاطر الكيميائية</h3>

<p class="mb-4">التعرض للمواد الكيميائية الضارة:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>غاز كبريتيد الهيدروجين (H2S) السام</li>
<li>المواد الكيميائية المستخدمة في الحفر</li>
<li>المذيبات والمنظفات الصناعية</li>
</ul>

<div class="bg-destructive/10 border-l-4 border-destructive p-4 my-6">
<p class="text-destructive font-semibold">⚠️ تحذير خطير:</p>
<p>غاز كبريتيد الهيدروجين (H2S) قاتل في تركيزات منخفضة. يمكن أن يسبب الوفاة خلال ثوانٍ. يجب ارتداء أجهزة الكشف دائماً في المناطق المعرضة.</p>
</div>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 إجراءات السلامة الأساسية</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 معدات الحماية الشخصية (PPE)</h3>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>خوذة السلامة (Hard Hat) - حماية الرأس</li>
<li>نظارات السلامة (Safety Glasses) - حماية العيون</li>
<li>أحذية السلامة (Safety Boots) - حماية القدمين</li>
<li>قفازات العمل (Work Gloves) - حماية اليدين</li>
<li>ملابس مقاومة للحريق (FR Clothing)</li>
<li>سدادات الأذن (Ear Plugs) - حماية السمع</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 تصاريح العمل (Work Permits)</h3>

<p class="mb-4">قبل أي عمل خطير، يجب الحصول على تصريح يحدد:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>طبيعة العمل والمخاطر المتوقعة</li>
<li>إجراءات السلامة المطلوبة</li>
<li>المعدات الوقائية اللازمة</li>
<li>خطة الطوارئ</li>
</ul>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 حماية البيئة</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 مصادر التلوث المحتملة</h3>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>تسرب النفط في البحار والأراضي</li>
<li>انبعاثات الغازات في الجو</li>
<li>مياه الإنتاج الملوثة</li>
<li>النفايات الصناعية</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 تقنيات حماية البيئة</h3>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>أنظمة منع التسرب المتقدمة</li>
<li>معالجة مياه الإنتاج قبل التخلص منها</li>
<li>احتجاز الكربون وتخزينه (CCS)</li>
<li>حرق الغاز المتوافق مع البيئة</li>
<li>إعادة تأهيل المواقع بعد الإنتاج</li>
</ul>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 الكوارث التاريخية ودروسها</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 حادثة ديب ووتر هورايزن (2010)</h3>

<p class="mb-4">أكبر تسرب نفطي بحري في التاريخ:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>انفجار في خليج المكسيك قتل 11 عاملاً</li>
<li>تسرب 4.9 مليون برميل نفط</li>
<li>أضرار بيئية هائلة استمرت لسنوات</li>
<li>غرامات وتعويضات تجاوزت 65 مليار دولار</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 الدروس المستفادة</h3>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>أهمية صيانة معدات السلامة</li>
<li>ضرورة وجود خطط طوارئ فعالة</li>
<li>تدريب العاملين المستمر</li>
<li>الرقابة الصارمة على العمليات</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 ملخص القسم</h3>

<div class="bg-secondary/50 p-4 rounded-lg">
<p>السلامة والبيئة (HSE) هما أولوية قصوى في صناعة النفط. تشمل المخاطر الحريق والضغط العالي والمواد الكيميائية. الوقاية تتطلب معدات حماية شخصية، تصاريح عمل، وتدريب مستمر. حماية البيئة ضرورية لتجنب كوارث مثل ديب ووتر هورايزن.</p>
</div>
</section>`,
          keyTerms: [
            { term: 'HSE', definition: 'الصحة والسلامة والبيئة - المعايير والإجراءات التي تحمي العاملين والبيئة' },
            { term: 'معدات الحماية الشخصية', definition: 'المعدات التي يرتديها العامل لحمايته من المخاطر مثل الخوذة والنظارات' },
            { term: 'كبريتيد الهيدروجين', definition: 'غاز سام عديم اللون برائحة البيض الفاسد، قاتل في تركيزات عالية' },
            { term: 'احتجاز الكربون', definition: 'تقنية لالتقاط وتخزين انبعاثات ثاني أكسيد الكربون لتقليل التلوث' },
          ],
          practiceQuestion: {
            question: 'ما هو الغاز السام الأكثر خطورة في صناعة النفط؟',
            options: ['ثاني أكسيد الكربون (CO2)', 'كبريتيد الهيدروجين (H2S)', 'الميثان (CH4)', 'النيتروجين (N2)'],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Environment and Safety in the Oil Industry',
          explanation: `<section>
<h2 class="text-primary text-xl font-bold mb-4">🔷 Importance of Health, Safety, and Environment (HSE)</h2>

<p class="mb-4">Health, Safety, and Environment (HSE) are among the most important priorities in the oil and gas industry. This industry deals with flammable materials, high pressures, and heavy equipment.</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Why is HSE So Important?</h3>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>Protecting workers' lives and neighboring communities</li>
<li>Preserving the environment for future generations</li>
<li>Avoiding huge financial losses from accidents</li>
<li>Compliance with international laws and regulations</li>
<li>Maintaining company reputation</li>
</ul>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 Risks of Working in the Oil Industry</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 1. Fire and Explosion Risks</h3>

<p class="mb-4">Oil and gas are highly flammable materials. Any spark can cause a disaster:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>Explosions at processing facilities</li>
<li>Well fires (Blowouts)</li>
<li>Flammable gas leaks</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 2. High Pressure Risks</h3>

<p class="mb-4">Oil equipment operates under enormous pressures:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>Pipe and valve explosions</li>
<li>Danger from pressurized equipment</li>
<li>Injuries from fluid leaks under pressure</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 3. Chemical Hazards</h3>

<p class="mb-4">Exposure to harmful chemicals:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>Toxic hydrogen sulfide (H2S) gas</li>
<li>Chemicals used in drilling</li>
<li>Industrial solvents and cleaners</li>
</ul>

<div class="bg-destructive/10 border-l-4 border-destructive p-4 my-6">
<p class="text-destructive font-semibold">⚠️ Serious Warning:</p>
<p>Hydrogen sulfide (H2S) gas is lethal at low concentrations. It can cause death within seconds. Detection devices must always be worn in exposed areas.</p>
</div>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 Basic Safety Procedures</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Personal Protective Equipment (PPE)</h3>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>Hard Hat - head protection</li>
<li>Safety Glasses - eye protection</li>
<li>Safety Boots - foot protection</li>
<li>Work Gloves - hand protection</li>
<li>FR Clothing - fire-resistant clothing</li>
<li>Ear Plugs - hearing protection</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Work Permits</h3>

<p class="mb-4">Before any hazardous work, a permit must be obtained specifying:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>Nature of work and expected hazards</li>
<li>Required safety procedures</li>
<li>Necessary protective equipment</li>
<li>Emergency plan</li>
</ul>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 Environmental Protection</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Potential Pollution Sources</h3>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>Oil spills in seas and lands</li>
<li>Gas emissions into the atmosphere</li>
<li>Contaminated production water</li>
<li>Industrial waste</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Environmental Protection Technologies</h3>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>Advanced leak prevention systems</li>
<li>Production water treatment before disposal</li>
<li>Carbon Capture and Storage (CCS)</li>
<li>Environmentally compliant gas flaring</li>
<li>Site rehabilitation after production</li>
</ul>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 Historical Disasters and Their Lessons</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Deepwater Horizon Incident (2010)</h3>

<p class="mb-4">The largest offshore oil spill in history:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>Explosion in the Gulf of Mexico killed 11 workers</li>
<li>Leaked 4.9 million barrels of oil</li>
<li>Massive environmental damage lasting years</li>
<li>Fines and compensation exceeded $65 billion</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Lessons Learned</h3>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>Importance of safety equipment maintenance</li>
<li>Need for effective emergency plans</li>
<li>Continuous worker training</li>
<li>Strict oversight of operations</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Section Summary</h3>

<div class="bg-secondary/50 p-4 rounded-lg">
<p>Safety and environment (HSE) are top priorities in the oil industry. Risks include fire, high pressure, and chemicals. Prevention requires personal protective equipment, work permits, and continuous training. Environmental protection is essential to avoid disasters like Deepwater Horizon.</p>
</div>
</section>`,
          keyTerms: [
            { term: 'HSE', definition: 'Health, Safety, and Environment - standards and procedures that protect workers and the environment' },
            { term: 'PPE', definition: 'Personal Protective Equipment worn by workers for protection such as helmets and glasses' },
            { term: 'Hydrogen Sulfide', definition: 'A colorless toxic gas with a rotten egg smell, lethal at high concentrations' },
            { term: 'Carbon Capture', definition: 'Technology to capture and store carbon dioxide emissions to reduce pollution' },
          ],
          practiceQuestion: {
            question: 'What is the most dangerous toxic gas in the oil industry?',
            options: ['Carbon Dioxide (CO2)', 'Hydrogen Sulfide (H2S)', 'Methane (CH4)', 'Nitrogen (N2)'],
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
          { question: 'What percentage of global energy needs depend on oil and gas?', options: ['Less than 30%', 'About 40%', 'More than 60%', 'About 90%'], correctAnswer: 2 },
          { question: 'Who drilled the first successful commercial oil well?', options: ['John Rockefeller', 'Edwin Drake', 'Henry Ford', 'Thomas Edison'], correctAnswer: 1 },
          { question: 'In what year was OPEC founded?', options: ['1950', '1960', '1970', '1980'], correctAnswer: 1 },
          { question: 'Which branch of petroleum engineering focuses on maximizing oil recovery?', options: ['Drilling Engineering', 'Reservoir Engineering', 'Production Engineering', 'Chemical Engineering'], correctAnswer: 1 },
          { question: 'What is porosity?', options: ['Rock hardness', 'Void space ratio in rock', 'Rock color', 'Rock age'], correctAnswer: 1 },
          { question: 'Which company is classified as an oilfield service company?', options: ['Saudi Aramco', 'Halliburton', 'Kuwait Oil Company', 'Shell'], correctAnswer: 1 },
          { question: 'What does HSE stand for?', options: ['High Speed Equipment', 'Health, Safety, Environment', 'Heavy Steel Engineering', 'Hydrocarbon Storage Estimate'], correctAnswer: 1 },
          { question: 'What is the most dangerous toxic gas in oil operations?', options: ['CO2', 'H2S', 'CH4', 'N2'], correctAnswer: 1 },
          { question: 'What was the Deepwater Horizon incident?', options: ['A successful discovery', 'A major oil spill', 'A new drilling technology', 'An oil company'], correctAnswer: 1 },
          { question: 'What is carbon capture technology used for?', options: ['Increasing production', 'Reducing emissions', 'Drilling deeper', 'Refining oil'], correctAnswer: 1 },
        ],
        ar: [
          { question: 'ما هي النسبة المئوية لاحتياجات الطاقة العالمية التي تعتمد على النفط والغاز؟', options: ['أقل من 30%', 'حوالي 40%', 'أكثر من 60%', 'حوالي 90%'], correctAnswer: 2 },
          { question: 'من حفر أول بئر نفط تجاري ناجح؟', options: ['جون روكفلر', 'إدوين دريك', 'هنري فورد', 'توماس إديسون'], correctAnswer: 1 },
          { question: 'في أي عام تأسست أوبك؟', options: ['1950', '1960', '1970', '1980'], correctAnswer: 1 },
          { question: 'أي فرع من هندسة النفط يركز على تعظيم استخلاص النفط؟', options: ['هندسة الحفر', 'هندسة المخزونات', 'هندسة الإنتاج', 'الهندسة الكيميائية'], correctAnswer: 1 },
          { question: 'ما هي المسامية؟', options: ['صلابة الصخر', 'نسبة الفراغات في الصخر', 'لون الصخر', 'عمر الصخر'], correctAnswer: 1 },
          { question: 'أي شركة تُصنف كشركة خدمات نفطية؟', options: ['أرامكو السعودية', 'هاليبرتون', 'شركة نفط الكويت', 'شل'], correctAnswer: 1 },
          { question: 'ماذا تعني HSE؟', options: ['معدات عالية السرعة', 'الصحة والسلامة والبيئة', 'هندسة الصلب الثقيل', 'تقدير تخزين الهيدروكربونات'], correctAnswer: 1 },
          { question: 'ما هو أخطر غاز سام في عمليات النفط؟', options: ['CO2', 'H2S', 'CH4', 'N2'], correctAnswer: 1 },
          { question: 'ما هي حادثة ديب ووتر هورايزن؟', options: ['اكتشاف ناجح', 'تسرب نفطي كبير', 'تقنية حفر جديدة', 'شركة نفط'], correctAnswer: 1 },
          { question: 'ما هو استخدام تقنية احتجاز الكربون؟', options: ['زيادة الإنتاج', 'تقليل الانبعاثات', 'الحفر أعمق', 'تكرير النفط'], correctAnswer: 1 },
        ],
      },
    },
    {
      day: 7,
      type: 'project',
      content: {
        en: { title: 'Mini Project', explanation: 'Apply what you learned this week.', keyTerms: [] },
        ar: { title: 'مشروع صغير', explanation: 'طبّق ما تعلمته هذا الأسبوع.', keyTerms: [] },
      },
      project: {
        en: {
          title: 'Petroleum Engineering Essay',
          description: 'Write a comprehensive essay about petroleum engineering and its importance in the modern world.',
          instructions: [
            'Define petroleum engineering in your own words',
            'Explain the four main branches and their roles',
            'Discuss the importance of oil and gas in the global economy',
            'Mention environmental considerations and safety practices',
            'Include your thoughts on the future of the industry',
          ],
          submissionType: 'text',
        },
        ar: {
          title: 'مقال عن هندسة النفط',
          description: 'اكتب مقالاً شاملاً عن هندسة النفط وأهميتها في العالم الحديث.',
          instructions: [
            'عرّف هندسة النفط بأسلوبك الخاص',
            'اشرح الفروع الأربعة الرئيسية وأدوارها',
            'ناقش أهمية النفط والغاز في الاقتصاد العالمي',
            'اذكر الاعتبارات البيئية وممارسات السلامة',
            'أضف رأيك حول مستقبل الصناعة',
          ],
          submissionType: 'text',
        },
      },
    },
  ],
};

// ============================================
// LESSON 2: Basics of Drilling
// ============================================

const drillingLesson: WeeklyLesson = {
  lessonId: 'drilling',
  days: [
    {
      day: 1,
      type: 'learning',
      content: {
        ar: {
          title: 'مفهوم الحفر وأهميته',
          explanation: `<section>
<h2 class="text-primary text-xl font-bold mb-4">🔷 ليش نحتاج الحفر؟ (المشكلة أولاً)</h2>

<div class="bg-amber-500/10 border-l-4 border-amber-500 p-4 my-4">
<p class="font-bold text-lg mb-2">💡 السؤال الأول: شلون نوصل للنفط؟</p>
<p>النفط موجود على أعماق كبيرة (من 1000 متر إلى أكثر من 10 كيلومتر تحت الأرض). ما نكدر نحفر بإيدينا أو نستخدم أدوات بسيطة. نحتاج تقنية متطورة توصلنا لهذا العمق بأمان.</p>
</div>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 شنو يصير لو ما عندنا تقنية حفر؟</h3>

<ul class="list-disc list-inside space-y-2 mb-4">
<li><strong>النفط يبقى محبوس:</strong> كل الاحتياطيات تحت الأرض ما نكدر نستخرجها</li>
<li><strong>لا وقود للسيارات والطائرات:</strong> العالم يتوقف عن الحركة</li>
<li><strong>لا كهرباء:</strong> أكثر من 60% من الكهرباء تعتمد على النفط والغاز</li>
<li><strong>لا صناعات بلاستيكية:</strong> البلاستك والأدوية والأسمدة كلها من النفط</li>
</ul>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 ما هو الحفر النفطي؟ (التعريف)</h2>

<p class="mb-4">الحفر النفطي (Oil Well Drilling) هو عملية إنشاء ثقب (بئر) في الأرض للوصول إلى مخزونات النفط والغاز. هذي العملية تشبه حفر بئر ماء لكن بتقنيات أعقد بكثير بسبب:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>الأعماق الكبيرة (أحياناً أكثر من 10 كم)</li>
<li>الضغوط العالية جداً تحت الأرض</li>
<li>الحرارة المرتفعة (تزيد 3°C كل 100 متر)</li>
<li>الصخور الصلبة والمتنوعة</li>
</ul>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 تسلسل العملية: من الفكرة للإنتاج</h2>

<div class="bg-secondary/30 p-4 rounded-lg mb-4">
<p class="font-bold mb-2">📋 المراحل بالترتيب:</p>
<ol class="list-decimal list-inside space-y-2">
<li><strong>الاستكشاف:</strong> نبحث وين ممكن يكون نفط (مسح زلزالي + جيولوجيا)</li>
<li><strong>التقييم:</strong> نحفر بئر استكشافي نشوف إذا فعلاً موجود نفط</li>
<li><strong>التطوير:</strong> إذا لقينا نفط، نحفر آبار إنتاجية</li>
<li><strong>الإنتاج:</strong> نستخرج النفط ونبيعه</li>
</ol>
</div>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 أنواع الآبار حسب الغرض</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 1. بئر الاستكشاف (Exploration / Wildcat Well)</h3>

<p class="mb-4"><strong>الغرض:</strong> نشوف إذا موجود نفط ولا لا</p>
<p class="mb-4"><strong>المخاطرة:</strong> عالية جداً - ممكن نصرف 50 مليون دولار وما نلقى شي!</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 2. بئر التقييم (Appraisal Well)</h3>

<p class="mb-4"><strong>الغرض:</strong> بعد ما لقينا نفط، نحتاج نعرف كم الكمية وشلون نطورها</p>
<p class="mb-4"><strong>المخاطرة:</strong> أقل - لأن عرفنا موجود نفط</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 3. بئر الإنتاج (Production Well)</h3>

<p class="mb-4"><strong>الغرض:</strong> استخراج النفط للبيع - هذا اللي يجيب الفلوس!</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 4. بئر الحقن (Injection Well)</h3>

<p class="mb-4"><strong>الغرض:</strong> نحقن ماء أو غاز لندفع النفط نحو آبار الإنتاج</p>
<p class="mb-4"><strong>ليش مهم؟</strong> بدونه نستخرج بس 20-30% من النفط، ومعاه نكدر نوصل 50-60%</p>

<div class="bg-destructive/10 border-l-4 border-destructive p-4 my-6">
<p class="text-destructive font-semibold">⚠️ شنو يصير لو فشل الحفر؟</p>
<ul class="list-disc list-inside space-y-1 mt-2">
<li><strong>انفجار البئر (Blowout):</strong> النفط يندفع بقوة للسطح - كارثة بيئية وخسائر بشرية</li>
<li><strong>علوق الأدوات:</strong> نخسر ملايين الدولارات ووقت طويل</li>
<li><strong>انهيار البئر:</strong> نضطر نترك البئر ونبدأ من جديد</li>
<li><strong>تسرب للمياه الجوفية:</strong> تلوث مصادر مياه الشرب</li>
</ul>
</div>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 أخطاء شائعة عند المبتدئين</h2>

<div class="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 my-4">
<table class="w-full text-sm">
<thead>
<tr class="border-b border-blue-500/30">
<th class="text-right p-2">❌ الخطأ</th>
<th class="text-right p-2">❓ ليش خطأ</th>
<th class="text-right p-2">⚠️ النتيجة بالحقل</th>
</tr>
</thead>
<tbody>
<tr class="border-b border-blue-500/20">
<td class="p-2">الاعتقاد إن كل بئر يلقى نفط</td>
<td class="p-2">آبار الاستكشاف نسبة نجاحها 20-30% فقط</td>
<td class="p-2">توقعات غير واقعية وقرارات خاطئة</td>
</tr>
<tr class="border-b border-blue-500/20">
<td class="p-2">الخلط بين بئر الإنتاج والحقن</td>
<td class="p-2">كل واحد له تصميم مختلف تماماً</td>
<td class="p-2">استخدام معدات خاطئة وفشل البئر</td>
</tr>
<tr>
<td class="p-2">إهمال مرحلة التقييم</td>
<td class="p-2">بدون تقييم ما نعرف حجم المخزون</td>
<td class="p-2">استثمار ضخم في حقل صغير غير مجدي</td>
</tr>
</tbody>
</table>
</div>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 ملخص القسم</h3>

<div class="bg-secondary/50 p-4 rounded-lg">
<p><strong>النقطة الأساسية:</strong> الحفر هو الطريقة الوحيدة للوصول للنفط في باطن الأرض. بدونه، كل الاحتياطيات النفطية تبقى محبوسة. أنواع الآبار مختلفة حسب الغرض: استكشاف (نبحث)، تقييم (نقيّم)، إنتاج (نستخرج)، حقن (ندعم الإنتاج).</p>
</div>
</section>`,
          keyTerms: [
            { term: 'الحفر النفطي (Oil Well Drilling)', definition: 'عملية إنشاء ثقب في الأرض للوصول إلى مخزونات النفط والغاز' },
            { term: 'بئر الاستكشاف (Wildcat Well)', definition: 'بئر يُحفر للبحث عن النفط في منطقة جديدة - مخاطرة عالية' },
            { term: 'بئر الحقن (Injection Well)', definition: 'بئر لحقن الماء أو الغاز لدفع النفط نحو آبار الإنتاج' },
            { term: 'الانفجار (Blowout)', definition: 'اندفاع النفط أو الغاز بشكل غير متحكم به - من أخطر الحوادث' },
          ],
          practiceQuestion: {
            question: 'ليش نحتاج آبار الحقن؟',
            options: ['للبحث عن نفط جديد', 'لتقييم حجم المخزون', 'لدفع النفط نحو آبار الإنتاج وزيادة الاستخلاص', 'لنقل النفط للسطح'],
            correctAnswer: 2,
          },
        },
        en: {
          title: 'Drilling Concept and Importance',
          explanation: `<section>
<h2 class="text-primary text-xl font-bold mb-4">🔷 What is Oil Well Drilling?</h2>

<p class="mb-4">Oil Well Drilling is the fundamental process of reaching oil and gas reservoirs located deep underground. This process is considered one of the most complex and costly engineering operations in the oil industry.</p>

<p class="mb-4">Without drilling, oil and gas cannot be extracted from underground. Therefore, drilling is the first and most important step in the hydrocarbon production chain.</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Importance of Drilling in the Oil Industry</h3>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>Accessing underground petroleum reservoirs</li>
<li>Evaluating potential of discovered oil fields</li>
<li>Producing oil and gas economically</li>
<li>Injecting water or gas to improve recovery</li>
<li>Collecting geological and petrophysical data</li>
</ul>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 Types of Oil Wells by Purpose</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 1. Exploration Wells</h3>

<p class="mb-4">Drilled to search for oil and gas in new areas where oil has not been discovered before. Characterized by:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>High risks (may not find oil)</li>
<li>High costs</li>
<li>Collection of large amounts of data</li>
<li>Also called "Wildcat Wells"</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 2. Appraisal Wells</h3>

<p class="mb-4">Drilled after oil discovery to determine reservoir size and characteristics:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>Determining reservoir boundaries</li>
<li>Evaluating recoverable oil quantity</li>
<li>Studying fluid and rock properties</li>
<li>Determining commercial development feasibility</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 3. Production Wells</h3>

<p class="mb-4">Drilled to extract oil and gas commercially:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>Main goal: Production at lowest cost</li>
<li>Long-term design</li>
<li>Advanced production equipment</li>
<li>Continuous periodic maintenance</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 4. Injection Wells</h3>

<p class="mb-4">Used to inject water or gas into the reservoir to push oil toward production wells:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>Increasing recovery factor</li>
<li>Maintaining reservoir pressure</li>
<li>Improving oil movement in rocks</li>
</ul>

<div class="bg-destructive/10 border-l-4 border-destructive p-4 my-6">
<p class="text-destructive font-semibold">⚠️ Important Information:</p>
<p>The cost of drilling a single well can range from one million dollars for simple onshore wells to more than 100 million dollars for deep offshore wells.</p>
</div>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 Basic Drilling Stages</h2>

<ol class="list-decimal list-inside space-y-2 mb-4">
<li>Planning and design</li>
<li>Site preparation and rig installation</li>
<li>Drilling the surface section</li>
<li>Drilling intermediate sections</li>
<li>Drilling the production section</li>
<li>Completion and preparing the well for production</li>
</ol>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Section Summary</h3>

<div class="bg-secondary/50 p-4 rounded-lg">
<p>Drilling is the fundamental process for accessing petroleum reservoirs. Different types of wells exist based on purpose: exploration, appraisal, production, and injection. Each type has its characteristics, costs, and risks.</p>
</div>
</section>`,
          keyTerms: [
            { term: 'Oil Well Drilling', definition: 'The process of creating a hole in the earth to access oil and gas reservoirs' },
            { term: 'Exploration Well', definition: 'A well drilled to search for oil in a new, unproven area' },
            { term: 'Injection Well', definition: 'A well used to inject water or gas to increase oil recovery' },
            { term: 'Wildcat Well', definition: 'A term for high-risk exploration wells' },
          ],
          practiceQuestion: {
            question: 'What is the main purpose of drilling appraisal wells?',
            options: ['Search for new oil', 'Determine discovered reservoir size', 'Produce oil commercially', 'Inject water'],
            correctAnswer: 1,
          },
        },
      },
    },
    {
      day: 2,
      type: 'learning',
      content: {
        ar: {
          title: 'آلية عمل الحفر الدوراني',
          explanation: `<section>
<h2 class="text-primary text-xl font-bold mb-4">🔷 ليش نحتاج الحفر الدوراني؟ (المشكلة أولاً)</h2>

<div class="bg-amber-500/10 border-l-4 border-amber-500 p-4 my-4">
<p class="font-bold text-lg mb-2">💡 السؤال: شلون نخترق صخور صلبة على أعماق كبيرة؟</p>
<p>الصخور تحت الأرض صلبة جداً. لو استخدمنا الطرق القديمة (الضرب بالمطرقة) ممكن نحتاج سنين لحفر بئر واحد! نحتاج طريقة سريعة وفعالة.</p>
</div>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 مقارنة الطرق: ليش الدوراني أفضل؟</h3>

<table class="w-full text-sm mb-4 border border-border/30 rounded">
<thead>
<tr class="bg-secondary/30">
<th class="p-2 text-right border-b">الطريقة</th>
<th class="p-2 text-right border-b">السرعة</th>
<th class="p-2 text-right border-b">العمق</th>
<th class="p-2 text-right border-b">الاستخدام</th>
</tr>
</thead>
<tbody>
<tr class="border-b border-border/20">
<td class="p-2">الحفر الإيقاعي (Cable Tool)</td>
<td class="p-2">بطيء جداً</td>
<td class="p-2">أقل من 1000م</td>
<td class="p-2">تاريخياً فقط</td>
</tr>
<tr>
<td class="p-2"><strong>الحفر الدوراني (Rotary)</strong></td>
<td class="p-2"><strong>سريع</strong></td>
<td class="p-2"><strong>أكثر من 10,000م</strong></td>
<td class="p-2"><strong>معظم الآبار اليوم</strong></td>
</tr>
</tbody>
</table>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 مبدأ العمل: ثلاث عمليات معاً</h2>

<p class="mb-4">الحفر الدوراني (Rotary Drilling) يعمل مثل المثقاب الكهربائي اللي نستخدمه بالبيت، بس أكبر ب 1000 مرة! يعتمد على:</p>

<div class="bg-secondary/30 p-4 rounded-lg mb-4">
<ol class="list-decimal list-inside space-y-3">
<li><strong>الدوران (Rotation):</strong> رأس الحفر يدور بسرعة 50-200 دورة بالدقيقة</li>
<li><strong>الضغط (Weight on Bit - WOB):</strong> نضغط على رأس الحفر بقوة - ممكن توصل 20 طن!</li>
<li><strong>التنظيف (Circulation):</strong> سائل الحفر يشيل الفتات ويرفعه للسطح</li>
</ol>
</div>

<div class="bg-destructive/10 border-l-4 border-destructive p-4 my-6">
<p class="text-destructive font-semibold">⚠️ شنو يصير لو توقف أي عنصر؟</p>
<ul class="list-disc list-inside space-y-1 mt-2">
<li><strong>لو توقف الدوران:</strong> رأس الحفر ما يقدر يكسر الصخر = الحفر يتوقف</li>
<li><strong>لو قل الضغط:</strong> رأس الحفر يزحلق على الصخر بدل ما يكسره = هدر وقت ومال</li>
<li><strong>لو توقف سائل الحفر:</strong> الفتات يتراكم ويعلّق رأس الحفر = علوق الأدوات (Stuck Pipe)</li>
</ul>
</div>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 أنظمة جهاز الحفر الدوراني</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 1. نظام الرفع (Hoisting System)</h3>

<p class="mb-4"><strong>الوظيفة:</strong> يرفع وينزل سلسلة الحفر - تخيل رافعة عملاقة!</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li><strong>البرج (Derrick):</strong> الهيكل المعدني الضخم - ارتفاعه 40-50 متر</li>
<li><strong>الرافعة (Drawworks):</strong> المحرك الرئيسي - أقوى جزء بالجهاز</li>
<li><strong>الحبل الفولاذي (Drilling Line):</strong> يتحمل أوزان ضخمة</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 2. نظام الدوران (Rotating System)</h3>

<p class="mb-4"><strong>الوظيفة:</strong> يُدير سلسلة الحفر لتفتيت الصخر</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li><strong>المحرك العلوي (Top Drive):</strong> التقنية الحديثة - أسرع وأكفأ</li>
<li><strong>الطاولة الدوارة (Rotary Table):</strong> الطريقة التقليدية</li>
<li><strong>أنابيب الحفر (Drill Pipe):</strong> تنقل الدوران للأسفل</li>
<li><strong>الأطواق الثقيلة (Drill Collars):</strong> أنابيب ثقيلة توفر الوزن</li>
<li><strong>رأس الحفر (Drill Bit):</strong> اللي يكسر الصخر - أهم جزء!</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 3. نظام دوران السوائل (Circulating System)</h3>

<p class="mb-4"><strong>الوظيفة:</strong> ضخ سائل الحفر (الطين) - مثل دم الجهاز!</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li><strong>مضخات الطين (Mud Pumps):</strong> تضخ بقوة كبيرة</li>
<li><strong>المنخل الهزاز (Shale Shaker):</strong> يفصل الفتات من السائل</li>
<li><strong>نازعات الغاز (Degassers):</strong> يشيل الغازات الخطرة</li>
</ul>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 دورة سائل الحفر (مهمة جداً!)</h2>

<div class="bg-primary/10 border border-primary/30 rounded-lg p-4 mb-4">
<p class="font-bold mb-2">🔄 المسار الدائري:</p>
<ol class="list-decimal list-inside space-y-1">
<li>السائل يُضخ من الخزانات</li>
<li>ينزل داخل أنابيب الحفر ← للأسفل</li>
<li>يخرج من فتحات رأس الحفر</li>
<li>يصعد مع الفتات بين الأنابيب والبئر ← للأعلى</li>
<li>يمر بالمناخل لتنظيفه</li>
<li>يرجع للخزانات ← يتكرر!</li>
</ol>
</div>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 أنواع رؤوس الحفر</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 1. رؤوس البكرات (Roller Cone Bits)</h3>
<p class="mb-4">مخاريط دوارة مع أسنان - للصخور اللينة والمتوسطة - أرخص</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 2. رؤوس PDC (Polycrystalline Diamond Compact)</h3>
<p class="mb-4">قطع ماس صناعي - للصخور الصلبة - أغلى لكن أسرع وأطول عمراً</p>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 أخطاء شائعة عند المبتدئين</h2>

<div class="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 my-4">
<table class="w-full text-sm">
<thead>
<tr class="border-b border-blue-500/30">
<th class="text-right p-2">❌ الخطأ</th>
<th class="text-right p-2">❓ ليش خطأ</th>
<th class="text-right p-2">⚠️ النتيجة بالحقل</th>
</tr>
</thead>
<tbody>
<tr class="border-b border-blue-500/20">
<td class="p-2">زيادة الوزن على رأس الحفر كثير</td>
<td class="p-2">رأس الحفر يتكسر أو يتآكل بسرعة</td>
<td class="p-2">نوقف الحفر ونغير الرأس = خسارة وقت ومال</td>
</tr>
<tr class="border-b border-blue-500/20">
<td class="p-2">إهمال مراقبة سائل الحفر</td>
<td class="p-2">السائل وظائفه متعددة ومهمة</td>
<td class="p-2">انهيار البئر أو علوق الأدوات</td>
</tr>
<tr>
<td class="p-2">استخدام رأس PDC بصخور لينة</td>
<td class="p-2">مصمم للصخور الصلبة</td>
<td class="p-2">هدر مال - رأس غالي لصخر سهل</td>
</tr>
</tbody>
</table>
</div>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 ملخص القسم</h3>

<div class="bg-secondary/50 p-4 rounded-lg">
<p><strong>النقطة الأساسية:</strong> الحفر الدوراني يعتمد على 3 عناصر تعمل معاً: الدوران + الضغط + التنظيف. لو فشل أي عنصر، العملية كلها تفشل. جهاز الحفر يتكون من 3 أنظمة: الرفع (يرفع وينزل)، الدوران (يُدير)، ودوران السوائل (ينظف).</p>
</div>
</section>`,
          keyTerms: [
            { term: 'الحفر الدوراني (Rotary Drilling)', definition: 'طريقة الحفر التي تعتمد على دوران رأس الحفر لتفتيت الصخور - الأكثر استخداماً' },
            { term: 'رأس الحفر (Drill Bit)', definition: 'الأداة في نهاية سلسلة الحفر التي تقطع الصخور' },
            { term: 'سائل الحفر (Drilling Mud)', definition: 'السائل المُضخ في البئر لتبريد رأس الحفر وإزالة الفتات والتحكم بالضغط' },
            { term: 'المحرك العلوي (Top Drive)', definition: 'محرك حديث يُدير سلسلة الحفر من الأعلى - أسرع من الطاولة الدوارة' },
            { term: 'علوق الأدوات (Stuck Pipe)', definition: 'مشكلة خطيرة تحدث عندما تعلق سلسلة الحفر ولا تتحرك' },
          ],
          practiceQuestion: {
            question: 'شنو يصير لو توقف ضخ سائل الحفر أثناء الحفر؟',
            options: ['ما شي، نكمل حفر عادي', 'رأس الحفر يبرد أكثر', 'الفتات يتراكم وتعلق الأدوات', 'البئر ينظف تلقائياً'],
            correctAnswer: 2,
          },
        },
        en: {
          title: 'Rotary Drilling Mechanism',
          explanation: `<section>
<h2 class="text-primary text-xl font-bold mb-4">🔷 Introduction to Rotary Drilling</h2>

<p class="mb-4">Rotary Drilling is the most commonly used method in the oil industry today. It relies on rotating the drill bit to break up rocks while pumping drilling fluid to remove cuttings and bring them to the surface.</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Basic Operating Principle</h3>

<p class="mb-4">Drilling occurs through three simultaneous operations:</p>

<ol class="list-decimal list-inside space-y-2 mb-4">
<li><strong>Rotation:</strong> Rotating the drill bit at high speeds (50-200 RPM)</li>
<li><strong>Pressure:</strong> Applying weight on the drill bit (WOB - Weight on Bit)</li>
<li><strong>Pumping:</strong> Pumping drilling fluid to clean and cool the drill bit</li>
</ol>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 Components of Rotary Drilling System</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 1. Hoisting System</h3>

<p class="mb-4">Responsible for raising and lowering the drill string:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>Derrick/Mast: The massive steel structure</li>
<li>Drawworks: Main lifting engine</li>
<li>Crown Block: At the top of the derrick</li>
<li>Traveling Block: The moving block</li>
<li>Drilling Line: Steel wire rope</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 2. Rotating System</h3>

<p class="mb-4">Provides rotational motion to the drill string:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>Rotary Table: Traditional method</li>
<li>Top Drive: Modern technology</li>
<li>Drill Pipe: Transmits rotation</li>
<li>Drill Collars: Provide weight</li>
<li>Drill Bit: Cuts the rock</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 3. Circulating System</h3>

<p class="mb-4">Pumps and treats drilling fluid:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>Mud Pumps: Pump the fluid</li>
<li>Mud Tanks: Storage</li>
<li>Shale Shaker: Separate cuttings</li>
<li>Degassers: Remove gases</li>
<li>Desanders: Remove sand</li>
</ul>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 Drilling Fluid Cycle</h2>

<p class="mb-4">Drilling fluid follows a circular path:</p>

<ol class="list-decimal list-inside space-y-2 mb-4">
<li>Pumped from mud tanks</li>
<li>Goes down inside drill pipe</li>
<li>Exits through drill bit nozzles</li>
<li>Rises in the space between pipe and wellbore wall</li>
<li>Passes through cleaning equipment</li>
<li>Returns to tanks</li>
</ol>

<div class="bg-destructive/10 border-l-4 border-destructive p-4 my-6">
<p class="text-destructive font-semibold">⚠️ Technical Note:</p>
<p>Drilling fluid pump rate is critical. Too slow doesn't lift cuttings, too fast may erode the wellbore walls.</p>
</div>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 Types of Drill Bits</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 1. Roller Cone Bits</h3>

<p class="mb-4">Contain rotating cones with teeth:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>Suitable for soft and medium rocks</li>
<li>Steel or tungsten carbide teeth</li>
<li>Relatively cheaper</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 2. PDC Bits (Polycrystalline Diamond Compact)</h3>

<p class="mb-4">Use synthetic diamond cutters:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>High efficiency in hard rocks</li>
<li>Longer life</li>
<li>Higher drilling speed</li>
<li>Higher cost</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Section Summary</h3>

<div class="bg-secondary/50 p-4 rounded-lg">
<p>Rotary drilling relies on three systems: hoisting, rotating, and circulating. The drill bit breaks rock through rotation and pressure, and drilling fluid cleans the well and lifts cuttings. Drill bit selection depends on rock type.</p>
</div>
</section>`,
          keyTerms: [
            { term: 'Rotary Drilling', definition: 'A drilling method that relies on rotating the drill bit to break up rocks' },
            { term: 'Drill Bit', definition: 'The tool at the end of the drill string that cuts the rocks' },
            { term: 'Drilling Fluid', definition: 'The fluid pumped into the well to cool the drill bit and remove cuttings' },
            { term: 'Top Drive', definition: 'An electric or hydraulic motor that rotates the drill string from above' },
          ],
          practiceQuestion: {
            question: 'What is the function of the Shale Shaker?',
            options: ['Pump drilling fluid', 'Separate cuttings from drilling fluid', 'Rotate drill bit', 'Store drilling fluid'],
            correctAnswer: 1,
          },
        },
      },
    },
    {
      day: 3,
      type: 'learning',
      content: {
        ar: {
          title: 'سوائل الحفر (طين الحفر)',
          explanation: `<section>
<h2 class="text-primary text-xl font-bold mb-4">🔷 ما هو سائل الحفر؟</h2>

<p class="mb-4">سائل الحفر (Drilling Fluid)، المعروف أيضاً بطين الحفر (Drilling Mud)، هو سائل خاص يُضخ في البئر أثناء عملية الحفر. يُعتبر من أهم العناصر في نجاح عملية الحفر.</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 وظائف سائل الحفر الأساسية</h3>

<ol class="list-decimal list-inside space-y-2 mb-4">
<li><strong>رفع الفتات:</strong> نقل قطع الصخر المحفورة إلى السطح</li>
<li><strong>تبريد رأس الحفر:</strong> امتصاص الحرارة الناتجة عن الاحتكاك</li>
<li><strong>تشحيم سلسلة الحفر:</strong> تقليل الاحتكاك مع جدار البئر</li>
<li><strong>التحكم في الضغط:</strong> منع تدفق السوائل من المخزون</li>
<li><strong>دعم جدار البئر:</strong> منع انهيار الجدران</li>
<li><strong>نقل البيانات:</strong> في أنظمة القياس أثناء الحفر</li>
</ol>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 أنواع سوائل الحفر</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 1. سوائل مائية القاعدة (Water-Based Mud - WBM)</h3>

<p class="mb-4">الماء هو المكون الأساسي:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>الأكثر استخداماً (90% من الآبار)</li>
<li>صديقة للبيئة نسبياً</li>
<li>تكلفة منخفضة</li>
<li>سهولة التحضير والصيانة</li>
<li>قد تسبب تفاعلات مع بعض الطبقات الطينية</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 2. سوائل زيتية القاعدة (Oil-Based Mud - OBM)</h3>

<p class="mb-4">الزيت (ديزل أو زيت معدني) هو المكون الأساسي:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>استقرار ممتاز في الطبقات الحساسة للماء</li>
<li>تشحيم أفضل</li>
<li>مقاومة لدرجات الحرارة العالية</li>
<li>تكلفة أعلى</li>
<li>تتطلب معاملة خاصة للنفايات</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 3. سوائل تركيبية (Synthetic-Based Mud - SBM)</h3>

<p class="mb-4">تستخدم زيوتاً صناعية بديلة:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>أداء مشابه للزيتية</li>
<li>أقل ضرراً على البيئة</li>
<li>قابلة للتحلل البيولوجي</li>
<li>تكلفة عالية جداً</li>
</ul>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 خصائص سائل الحفر المهمة</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 1. الكثافة (Density/Mud Weight)</h3>

<p class="mb-4">تُقاس بوحدات مختلفة:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>رطل/غالون (ppg) - الأكثر استخداماً</li>
<li>غرام/سم³ (g/cc)</li>
<li>كيلوغرام/متر³ (kg/m³)</li>
</ul>

<p class="mb-4">يتراوح عادة بين 8.5 - 18 رطل/غالون حسب ضغط المخزون.</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 2. اللزوجة (Viscosity)</h3>

<p class="mb-4">قدرة السائل على حمل الفتات:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>لزوجة عالية = حمل أفضل للفتات</li>
<li>لزوجة منخفضة جداً = سقوط الفتات</li>
<li>تُقاس بقمع مارش (Marsh Funnel)</li>
</ul>

<div class="bg-destructive/10 border-l-4 border-destructive p-4 my-6">
<p class="text-destructive font-semibold">⚠️ تحذير مهم:</p>
<p>إذا كانت كثافة سائل الحفر أقل من ضغط المخزون، قد يحدث تدفق للنفط أو الغاز إلى البئر (Kick) مما قد يؤدي إلى انفجار (Blowout).</p>
</div>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 المضافات الشائعة</h2>

<ul class="list-disc list-inside space-y-2 mb-4">
<li><strong>الباريت (Barite):</strong> زيادة الكثافة</li>
<li><strong>البنتونايت:</strong> زيادة اللزوجة</li>
<li><strong>مانعات فقدان السوائل:</strong> منع تسرب السائل للصخور</li>
<li><strong>مضادات الرغوة:</strong> منع تكون الفقاعات</li>
<li><strong>مبيدات البكتيريا:</strong> منع نمو الكائنات الدقيقة</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 ملخص القسم</h3>

<div class="bg-secondary/50 p-4 rounded-lg">
<p>سائل الحفر له وظائف حيوية متعددة: رفع الفتات، تبريد رأس الحفر، والتحكم في الضغط. هناك ثلاثة أنواع رئيسية: مائي، زيتي، وتركيبي. اختيار النوع يعتمد على ظروف البئر والاعتبارات البيئية والتكلفة.</p>
</div>
</section>`,
          keyTerms: [
            { term: 'سائل الحفر', definition: 'سائل خاص يُضخ في البئر لتبريد رأس الحفر ورفع الفتات والتحكم في الضغط' },
            { term: 'الباريت', definition: 'معدن كبريتات الباريوم يُستخدم لزيادة كثافة سائل الحفر' },
            { term: 'كثافة الطين', definition: 'وزن سائل الحفر لكل وحدة حجم، حرجة للتحكم في ضغط البئر' },
            { term: 'Kick', definition: 'تدفق غير مرغوب للسوائل من المخزون إلى البئر' },
          ],
          practiceQuestion: {
            question: 'ما هي المادة المُستخدمة عادةً لزيادة كثافة سائل الحفر؟',
            options: ['البنتونايت', 'الباريت', 'الماء', 'الرمل'],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Drilling Fluids (Drilling Mud)',
          explanation: `<section>
<h2 class="text-primary text-xl font-bold mb-4">🔷 What is Drilling Fluid?</h2>

<p class="mb-4">Drilling Fluid, also known as Drilling Mud, is a special fluid pumped into the well during drilling operations. It is one of the most important elements in successful drilling operations.</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Basic Functions of Drilling Fluid</h3>

<ol class="list-decimal list-inside space-y-2 mb-4">
<li><strong>Lifting cuttings:</strong> Transporting drilled rock pieces to the surface</li>
<li><strong>Cooling drill bit:</strong> Absorbing heat generated by friction</li>
<li><strong>Lubricating drill string:</strong> Reducing friction with wellbore wall</li>
<li><strong>Pressure control:</strong> Preventing fluid flow from the reservoir</li>
<li><strong>Supporting wellbore wall:</strong> Preventing wall collapse</li>
<li><strong>Data transmission:</strong> In measurement while drilling systems</li>
</ol>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 Types of Drilling Fluids</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 1. Water-Based Mud (WBM)</h3>

<p class="mb-4">Water is the main component:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>Most commonly used (90% of wells)</li>
<li>Relatively environmentally friendly</li>
<li>Low cost</li>
<li>Easy to prepare and maintain</li>
<li>May cause reactions with some clay formations</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 2. Oil-Based Mud (OBM)</h3>

<p class="mb-4">Oil (diesel or mineral oil) is the main component:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>Excellent stability in water-sensitive formations</li>
<li>Better lubrication</li>
<li>Resistant to high temperatures</li>
<li>Higher cost</li>
<li>Requires special waste handling</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 3. Synthetic-Based Mud (SBM)</h3>

<p class="mb-4">Uses alternative synthetic oils:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>Performance similar to oil-based</li>
<li>Less harmful to the environment</li>
<li>Biodegradable</li>
<li>Very high cost</li>
</ul>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 Important Drilling Fluid Properties</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 1. Density (Mud Weight)</h3>

<p class="mb-4">Measured in different units:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>Pounds per gallon (ppg) - most common</li>
<li>Grams per cubic centimeter (g/cc)</li>
<li>Kilograms per cubic meter (kg/m³)</li>
</ul>

<p class="mb-4">Usually ranges between 8.5 - 18 ppg depending on reservoir pressure.</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 2. Viscosity</h3>

<p class="mb-4">The fluid's ability to carry cuttings:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>High viscosity = better cutting carrying</li>
<li>Too low viscosity = cuttings fall</li>
<li>Measured with Marsh Funnel</li>
</ul>

<div class="bg-destructive/10 border-l-4 border-destructive p-4 my-6">
<p class="text-destructive font-semibold">⚠️ Important Warning:</p>
<p>If drilling fluid density is less than reservoir pressure, oil or gas may flow into the well (Kick) which can lead to a Blowout.</p>
</div>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 Common Additives</h2>

<ul class="list-disc list-inside space-y-2 mb-4">
<li><strong>Barite:</strong> Increase density</li>
<li><strong>Bentonite:</strong> Increase viscosity</li>
<li><strong>Fluid loss additives:</strong> Prevent fluid loss to rock</li>
<li><strong>Defoamers:</strong> Prevent bubble formation</li>
<li><strong>Biocides:</strong> Prevent microorganism growth</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Section Summary</h3>

<div class="bg-secondary/50 p-4 rounded-lg">
<p>Drilling fluid has multiple vital functions: lifting cuttings, cooling the drill bit, and pressure control. There are three main types: water-based, oil-based, and synthetic. Type selection depends on well conditions, environmental considerations, and cost.</p>
</div>
</section>`,
          keyTerms: [
            { term: 'Drilling Fluid', definition: 'A special fluid pumped into the well to cool the drill bit, lift cuttings, and control pressure' },
            { term: 'Barite', definition: 'Barium sulfate mineral used to increase drilling fluid density' },
            { term: 'Mud Weight', definition: 'Drilling fluid weight per unit volume, critical for well pressure control' },
            { term: 'Kick', definition: 'Unwanted flow of fluids from the reservoir into the well' },
          ],
          practiceQuestion: {
            question: 'What material is commonly used to increase drilling fluid density?',
            options: ['Bentonite', 'Barite', 'Water', 'Sand'],
            correctAnswer: 1,
          },
        },
      },
    },
    {
      day: 4,
      type: 'learning',
      content: {
        ar: {
          title: 'أنابيب التغليف والإسمنت',
          explanation: `<section>
<h2 class="text-primary text-xl font-bold mb-4">🔷 ما هي أنابيب التغليف؟</h2>

<p class="mb-4">أنابيب التغليف (Casing) هي أنابيب فولاذية تُثبت داخل البئر لحماية جدرانه ومنع انهيارها. تُشكل هذه الأنابيب الهيكل الدائم للبئر وتضمن سلامة العمليات.</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 وظائف أنابيب التغليف</h3>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>منع انهيار جدران البئر</li>
<li>عزل طبقات المياه الجوفية من التلوث</li>
<li>فصل مناطق الضغط المختلفة</li>
<li>توفير مسار آمن لسوائل الإنتاج</li>
<li>تثبيت معدات التحكم في البئر</li>
</ul>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 أنواع أنابيب التغليف</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 1. أنبوب الموجه (Conductor Casing)</h3>

<p class="mb-4">أول أنبوب يُثبت، عادة بقطر 30-36 بوصة:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>يُثبت في أول 30-100 متر</li>
<li>يحمي الطبقات السطحية الرخوة</li>
<li>يوفر أساساً لمعدات الحفر</li>
<li>قد يُدق بدون حفر في بعض الأحيان</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 2. أنبوب السطح (Surface Casing)</h3>

<p class="mb-4">يحمي طبقات المياه الجوفية، قطر 13⅜ - 20 بوصة:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>يمتد عادة 300-600 متر</li>
<li>يعزل المياه الجوفية تماماً</li>
<li>يُثبت عليه صمام التحكم في الانفجارات (BOP)</li>
<li>يجب إسمنته بالكامل للسطح</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 3. الأنبوب الوسيط (Intermediate Casing)</h3>

<p class="mb-4">يُستخدم في الآبار العميقة، قطر 9⅝ - 13⅜ بوصة:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>يعزل مناطق الضغط الشاذ</li>
<li>يحمي من التكوينات غير المستقرة</li>
<li>قد يُثبت أكثر من أنبوب وسيط</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 4. أنبوب الإنتاج (Production Casing)</h3>

<p class="mb-4">يصل إلى منطقة المخزون، قطر 5½ - 9⅝ بوصة:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>يعزل المخزون عن باقي الطبقات</li>
<li>يُثقب للسماح بدخول النفط</li>
<li>يتحمل ضغوط الإنتاج</li>
</ul>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 عملية الإسمنت</h2>

<p class="mb-4">الإسمنت (Cementing) يُضخ في الفراغ بين الأنابيب وجدار البئر لتثبيتها:</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 خطوات عملية الإسمنت</h3>

<ol class="list-decimal list-inside space-y-2 mb-4">
<li>إنزال الأنابيب في البئر</li>
<li>ضخ سائل تنظيف (Spacer)</li>
<li>ضخ ملاط الإسمنت</li>
<li>ضخ سائل إزاحة خلف الإسمنت</li>
<li>انتظار تصلب الإسمنت (12-24 ساعة)</li>
<li>اختبار جودة الإسمنت</li>
</ol>

<div class="bg-destructive/10 border-l-4 border-destructive p-4 my-6">
<p class="text-destructive font-semibold">⚠️ أهمية حرجة:</p>
<p>فشل عملية الإسمنت قد يؤدي إلى تسرب الغاز بين الطبقات، تلوث المياه الجوفية، أو حتى انفجار البئر. لذلك تُجرى اختبارات صارمة بعد كل عملية إسمنت.</p>
</div>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 أنواع الإسمنت البترولي</h2>

<p class="mb-4">يُصنف الإسمنت حسب معهد البترول الأمريكي (API) إلى فئات:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li><strong>فئة A:</strong> للاستخدام السطحي حتى 1800م</li>
<li><strong>فئة G:</strong> الأكثر استخداماً، متعدد الأغراض</li>
<li><strong>فئة H:</strong> للأعماق الكبيرة ودرجات الحرارة العالية</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 ملخص القسم</h3>

<div class="bg-secondary/50 p-4 rounded-lg">
<p>أنابيب التغليف تحمي البئر وتعزل الطبقات المختلفة. تشمل: الموجه، السطحي، الوسيط، والإنتاج. الإسمنت يثبت الأنابيب ويمنع التسربات. جودة الإسمنت حرجة لسلامة البئر على المدى الطويل.</p>
</div>
</section>`,
          keyTerms: [
            { term: 'أنبوب التغليف', definition: 'أنابيب فولاذية تُثبت داخل البئر لحماية جدرانه وعزل الطبقات' },
            { term: 'أنبوب السطح', definition: 'الأنبوب المسؤول عن حماية طبقات المياه الجوفية' },
            { term: 'الإسمنت البترولي', definition: 'إسمنت خاص يُضخ لتثبيت أنابيب التغليف في البئر' },
            { term: 'BOP', definition: 'صمام التحكم في الانفجارات - جهاز أمان حرج يُثبت على أنبوب السطح' },
          ],
          practiceQuestion: {
            question: 'أي أنبوب تغليف مسؤول بشكل رئيسي عن حماية المياه الجوفية؟',
            options: ['أنبوب الموجه', 'أنبوب السطح', 'الأنبوب الوسيط', 'أنبوب الإنتاج'],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Casing and Cementing',
          explanation: `<section>
<h2 class="text-primary text-xl font-bold mb-4">🔷 What is Casing?</h2>

<p class="mb-4">Casing consists of steel pipes installed inside the well to protect its walls and prevent collapse. These pipes form the permanent structure of the well and ensure operational safety.</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Functions of Casing</h3>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>Prevent wellbore collapse</li>
<li>Isolate groundwater from contamination</li>
<li>Separate different pressure zones</li>
<li>Provide safe path for production fluids</li>
<li>Anchor well control equipment</li>
</ul>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 Types of Casing</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 1. Conductor Casing</h3>

<p class="mb-4">First pipe installed, usually 30-36 inches diameter:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>Set in first 30-100 meters</li>
<li>Protects soft surface formations</li>
<li>Provides foundation for drilling equipment</li>
<li>May be driven without drilling sometimes</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 2. Surface Casing</h3>

<p class="mb-4">Protects groundwater, 13⅜ - 20 inches diameter:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>Usually extends 300-600 meters</li>
<li>Completely isolates groundwater</li>
<li>BOP is installed on it</li>
<li>Must be cemented fully to surface</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 3. Intermediate Casing</h3>

<p class="mb-4">Used in deep wells, 9⅝ - 13⅜ inches diameter:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>Isolates abnormal pressure zones</li>
<li>Protects from unstable formations</li>
<li>More than one may be set</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 4. Production Casing</h3>

<p class="mb-4">Reaches the reservoir zone, 5½ - 9⅝ inches diameter:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>Isolates reservoir from other zones</li>
<li>Perforated to allow oil entry</li>
<li>Withstands production pressures</li>
</ul>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 Cementing Process</h2>

<p class="mb-4">Cement is pumped into the annulus between casing and wellbore to secure it:</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Cementing Steps</h3>

<ol class="list-decimal list-inside space-y-2 mb-4">
<li>Run casing into well</li>
<li>Pump spacer fluid</li>
<li>Pump cement slurry</li>
<li>Pump displacement fluid behind cement</li>
<li>Wait for cement to set (12-24 hours)</li>
<li>Test cement quality</li>
</ol>

<div class="bg-destructive/10 border-l-4 border-destructive p-4 my-6">
<p class="text-destructive font-semibold">⚠️ Critical Importance:</p>
<p>Cement job failure may lead to gas migration between zones, groundwater contamination, or even well blowout. Therefore, strict tests are conducted after every cement job.</p>
</div>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 Types of Petroleum Cement</h2>

<p class="mb-4">Cement is classified by the American Petroleum Institute (API):</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li><strong>Class A:</strong> For surface use up to 1800m</li>
<li><strong>Class G:</strong> Most common, multipurpose</li>
<li><strong>Class H:</strong> For deep wells and high temperatures</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Section Summary</h3>

<div class="bg-secondary/50 p-4 rounded-lg">
<p>Casing protects the well and isolates different zones. Types include: conductor, surface, intermediate, and production. Cement secures casing and prevents leaks. Cement quality is critical for long-term well integrity.</p>
</div>
</section>`,
          keyTerms: [
            { term: 'Casing', definition: 'Steel pipes installed inside the well to protect walls and isolate zones' },
            { term: 'Surface Casing', definition: 'The casing responsible for protecting groundwater zones' },
            { term: 'Petroleum Cement', definition: 'Special cement pumped to secure casing in the well' },
            { term: 'BOP', definition: 'Blowout Preventer - critical safety device installed on surface casing' },
          ],
          practiceQuestion: {
            question: 'Which casing is primarily responsible for protecting groundwater?',
            options: ['Conductor Casing', 'Surface Casing', 'Intermediate Casing', 'Production Casing'],
            correctAnswer: 1,
          },
        },
      },
    },
    {
      day: 5,
      type: 'learning',
      content: {
        ar: {
          title: 'التحكم في ضغط البئر والسلامة',
          explanation: `<section>
<h2 class="text-primary text-xl font-bold mb-4">🔷 أهمية التحكم في الضغط</h2>

<p class="mb-4">التحكم في ضغط البئر هو الجانب الأكثر أهمية في سلامة عمليات الحفر. الفشل في التحكم بالضغط قد يؤدي إلى كوارث مدمرة مثل الانفجارات والحرائق وفقدان الأرواح.</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 مفهوم التوازن الهيدروستاتيكي</h3>

<p class="mb-4">يجب أن يكون ضغط عمود سائل الحفر كافياً لمقاومة ضغط السوائل في المخزون:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>ضغط سائل الحفر > ضغط المخزون = البئر تحت السيطرة</li>
<li>ضغط سائل الحفر < ضغط المخزون = خطر تدفق (Kick)</li>
<li>ضغط سائل الحفر > > ضغط المخزون = خطر فقدان الدوران</li>
</ul>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 أنواع مشاكل الضغط</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 1. التدفق (Kick)</h3>

<p class="mb-4">دخول غير مرغوب لسوائل المخزون (نفط، غاز، ماء) إلى البئر:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li><strong>الأسباب:</strong></li>
<li>كثافة طين غير كافية</li>
<li>عدم ملء البئر بالكامل أثناء الرحلات</li>
<li>فقدان الدوران في طبقة مسامية</li>
<li>سحب سريع لأنابيب الحفر</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 علامات التدفق (Kick Indicators)</h3>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>زيادة حجم حوض الطين</li>
<li>زيادة معدل تدفق الطين العائد</li>
<li>انخفاض ضغط الضخ</li>
<li>زيادة سرعة الحفر فجأة</li>
<li>ظهور غاز في الطين</li>
</ul>

<div class="bg-destructive/10 border-l-4 border-destructive p-4 my-6">
<p class="text-destructive font-semibold">⚠️ تحذير خطير:</p>
<p>إذا لم يُعالج التدفق فوراً، قد يتطور إلى انفجار (Blowout) وهو خروج غير مُتحكم به للنفط أو الغاز من البئر، مما قد يسبب حرائق وخسائر بشرية ومادية هائلة.</p>
</div>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 معدات التحكم في الانفجارات (BOP)</h2>

<p class="mb-4">صمام التحكم في الانفجارات (Blowout Preventer) هو خط الدفاع الأخير:</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 أنواع صمامات BOP</h3>

<ul class="list-disc list-inside space-y-2 mb-4">
<li><strong>Annular BOP:</strong> يغلق حول أي شيء (أنابيب، أسلاك، أو حتى فارغ)</li>
<li><strong>Pipe Rams:</strong> يغلق حول أنابيب بقطر محدد</li>
<li><strong>Blind Rams:</strong> يغلق البئر الفارغ تماماً</li>
<li><strong>Shear Rams:</strong> يقطع الأنابيب ويغلق البئر</li>
</ul>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 إجراءات قتل البئر (Well Kill)</h2>

<p class="mb-4">عند حدوث تدفق، يجب إيقافه وإعادة السيطرة على البئر:</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 طريقة المهندس (Driller's Method)</h3>

<ol class="list-decimal list-inside space-y-2 mb-4">
<li>إغلاق BOP فوراً</li>
<li>تسجيل الضغوط (SIDPP, SICP)</li>
<li>ضخ الطين الأصلي لإخراج التدفق</li>
<li>تحضير طين بكثافة أعلى</li>
<li>ضخ الطين الثقيل لقتل البئر</li>
</ol>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 طريقة الانتظار والوزن (Wait and Weight)</h3>

<ol class="list-decimal list-inside space-y-2 mb-4">
<li>إغلاق BOP فوراً</li>
<li>تحضير طين بالكثافة المطلوبة</li>
<li>ضخ الطين الثقيل في دورة واحدة</li>
</ol>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 ثقافة السلامة في الحفر</h2>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>تدريبات منتظمة على التعامل مع الطوارئ</li>
<li>فحص معدات السلامة يومياً</li>
<li>صلاحيات إيقاف العمل لأي شخص يلاحظ خطراً</li>
<li>تقارير الحوادث الوشيكة (Near Miss Reports)</li>
<li>اجتماعات السلامة اليومية</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 ملخص القسم</h3>

<div class="bg-secondary/50 p-4 rounded-lg">
<p>التحكم في ضغط البئر أساسي للسلامة. التدفق (Kick) هو دخول سوائل المخزون للبئر ويجب معالجته فوراً لمنع الانفجار. معدات BOP هي خط الدفاع الأخير، وطرق قتل البئر تُستخدم لإعادة السيطرة.</p>
</div>
</section>`,
          keyTerms: [
            { term: 'التدفق (Kick)', definition: 'دخول غير مرغوب لسوائل المخزون إلى البئر بسبب نقص الضغط الهيدروستاتيكي' },
            { term: 'الانفجار (Blowout)', definition: 'خروج غير متحكم به للنفط أو الغاز من البئر' },
            { term: 'BOP', definition: 'صمام التحكم في الانفجارات - معدة أمان لإغلاق البئر في حالات الطوارئ' },
            { term: 'قتل البئر', definition: 'إجراء إعادة السيطرة على البئر بعد حدوث تدفق' },
          ],
          practiceQuestion: {
            question: 'ما هو أول إجراء يجب اتخاذه عند اكتشاف تدفق (Kick)؟',
            options: ['زيادة سرعة الضخ', 'إغلاق BOP', 'إخلاء الموقع', 'الاتصال بالمكتب'],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Well Pressure Control and Safety',
          explanation: `<section>
<h2 class="text-primary text-xl font-bold mb-4">🔷 Importance of Pressure Control</h2>

<p class="mb-4">Well pressure control is the most critical aspect of drilling operations safety. Failure to control pressure can lead to devastating disasters such as blowouts, fires, and loss of life.</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Hydrostatic Balance Concept</h3>

<p class="mb-4">Drilling fluid column pressure must be sufficient to resist reservoir fluid pressure:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>Drilling fluid pressure > Reservoir pressure = Well under control</li>
<li>Drilling fluid pressure < Reservoir pressure = Kick risk</li>
<li>Drilling fluid pressure >> Reservoir pressure = Lost circulation risk</li>
</ul>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 Types of Pressure Problems</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 1. Kick</h3>

<p class="mb-4">Unwanted entry of reservoir fluids (oil, gas, water) into the well:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li><strong>Causes:</strong></li>
<li>Insufficient mud weight</li>
<li>Not keeping well full during trips</li>
<li>Lost circulation in porous zone</li>
<li>Swabbing (rapid pipe pull)</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Kick Indicators</h3>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>Increase in mud pit volume</li>
<li>Increase in return flow rate</li>
<li>Decrease in pump pressure</li>
<li>Sudden increase in drilling rate</li>
<li>Gas in the mud</li>
</ul>

<div class="bg-destructive/10 border-l-4 border-destructive p-4 my-6">
<p class="text-destructive font-semibold">⚠️ Serious Warning:</p>
<p>If a kick is not treated immediately, it may develop into a Blowout - an uncontrolled release of oil or gas from the well, which can cause fires and massive human and material losses.</p>
</div>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 Blowout Prevention Equipment (BOP)</h2>

<p class="mb-4">The Blowout Preventer is the last line of defense:</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Types of BOP</h3>

<ul class="list-disc list-inside space-y-2 mb-4">
<li><strong>Annular BOP:</strong> Closes around anything (pipe, wire, or empty)</li>
<li><strong>Pipe Rams:</strong> Closes around specific pipe diameter</li>
<li><strong>Blind Rams:</strong> Closes completely empty well</li>
<li><strong>Shear Rams:</strong> Cuts pipe and seals well</li>
</ul>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 Well Kill Procedures</h2>

<p class="mb-4">When a kick occurs, it must be stopped and well control regained:</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Driller's Method</h3>

<ol class="list-decimal list-inside space-y-2 mb-4">
<li>Close BOP immediately</li>
<li>Record pressures (SIDPP, SICP)</li>
<li>Pump original mud to circulate out kick</li>
<li>Prepare heavier mud</li>
<li>Pump heavy mud to kill well</li>
</ol>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Wait and Weight Method</h3>

<ol class="list-decimal list-inside space-y-2 mb-4">
<li>Close BOP immediately</li>
<li>Prepare mud at required weight</li>
<li>Pump heavy mud in one circulation</li>
</ol>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 Safety Culture in Drilling</h2>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>Regular emergency response drills</li>
<li>Daily safety equipment inspection</li>
<li>Stop work authority for anyone noticing hazards</li>
<li>Near Miss Reports</li>
<li>Daily safety meetings</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Section Summary</h3>

<div class="bg-secondary/50 p-4 rounded-lg">
<p>Well pressure control is fundamental to safety. A Kick is reservoir fluid entry into the well and must be treated immediately to prevent blowout. BOP equipment is the last line of defense, and well kill methods are used to regain control.</p>
</div>
</section>`,
          keyTerms: [
            { term: 'Kick', definition: 'Unwanted entry of reservoir fluids into the well due to insufficient hydrostatic pressure' },
            { term: 'Blowout', definition: 'Uncontrolled release of oil or gas from the well' },
            { term: 'BOP', definition: 'Blowout Preventer - safety equipment to close the well in emergencies' },
            { term: 'Well Kill', definition: 'Procedure to regain control of the well after a kick' },
          ],
          practiceQuestion: {
            question: 'What is the first action to take when detecting a Kick?',
            options: ['Increase pump speed', 'Close BOP', 'Evacuate location', 'Call the office'],
            correctAnswer: 1,
          },
        },
      },
    },
    {
      day: 6,
      type: 'quiz',
      content: {
        en: { title: 'Weekly Quiz', explanation: 'Test your knowledge of drilling basics.', keyTerms: [] },
        ar: { title: 'اختبار الأسبوع', explanation: 'اختبر معرفتك بأساسيات الحفر.', keyTerms: [] },
      },
      quiz: {
        en: [
          { question: 'What is the purpose of exploration wells?', options: ['Production', 'Search for new oil', 'Water injection', 'Testing equipment'], correctAnswer: 1 },
          { question: 'What are the three main operations in rotary drilling?', options: ['Mixing, heating, cooling', 'Rotation, pressure, pumping', 'Lifting, lowering, stopping', 'Cutting, grinding, polishing'], correctAnswer: 1 },
          { question: 'What is the function of barite in drilling fluid?', options: ['Increase viscosity', 'Increase density', 'Cool the bit', 'Lubricate pipes'], correctAnswer: 1 },
          { question: 'Which casing protects groundwater?', options: ['Conductor', 'Surface', 'Intermediate', 'Production'], correctAnswer: 1 },
          { question: 'What is a Kick in drilling?', options: ['Equipment failure', 'Reservoir fluid entering well', 'Pipe breaking', 'Mud loss'], correctAnswer: 1 },
          { question: 'What does BOP stand for?', options: ['Basic Operating Procedure', 'Blowout Preventer', 'Bit Optimization Program', 'Bore Observation Point'], correctAnswer: 1 },
          { question: 'What is the most common type of drilling fluid?', options: ['Oil-based', 'Water-based', 'Synthetic', 'Air'], correctAnswer: 1 },
          { question: 'What type of bit uses synthetic diamond cutters?', options: ['Roller cone', 'PDC', 'Diamond', 'Tricone'], correctAnswer: 1 },
          { question: 'What is the first action when a kick is detected?', options: ['Increase pump rate', 'Close BOP', 'Pull out of hole', 'Add barite'], correctAnswer: 1 },
          { question: 'What is the function of cement in wells?', options: ['Cool the bit', 'Lubricate casing', 'Secure casing and prevent leaks', 'Clean the well'], correctAnswer: 2 },
        ],
        ar: [
          { question: 'ما هو الغرض من آبار الاستكشاف؟', options: ['الإنتاج', 'البحث عن نفط جديد', 'حقن المياه', 'اختبار المعدات'], correctAnswer: 1 },
          { question: 'ما هي العمليات الثلاث الرئيسية في الحفر الدوراني؟', options: ['الخلط والتسخين والتبريد', 'الدوران والضغط والضخ', 'الرفع والإنزال والتوقف', 'القطع والطحن والتلميع'], correctAnswer: 1 },
          { question: 'ما وظيفة الباريت في سائل الحفر؟', options: ['زيادة اللزوجة', 'زيادة الكثافة', 'تبريد رأس الحفر', 'تشحيم الأنابيب'], correctAnswer: 1 },
          { question: 'أي أنبوب تغليف يحمي المياه الجوفية؟', options: ['الموجه', 'السطحي', 'الوسيط', 'الإنتاج'], correctAnswer: 1 },
          { question: 'ما هو التدفق (Kick) في الحفر؟', options: ['عطل في المعدات', 'دخول سوائل المخزون للبئر', 'كسر الأنابيب', 'فقدان الطين'], correctAnswer: 1 },
          { question: 'ماذا يعني BOP؟', options: ['إجراء التشغيل الأساسي', 'صمام منع الانفجار', 'برنامج تحسين رأس الحفر', 'نقطة مراقبة الثقب'], correctAnswer: 1 },
          { question: 'ما هو النوع الأكثر شيوعاً من سوائل الحفر؟', options: ['زيتي القاعدة', 'مائي القاعدة', 'تركيبي', 'هوائي'], correctAnswer: 1 },
          { question: 'أي نوع من رؤوس الحفر يستخدم قطع الماس الصناعي؟', options: ['البكرات', 'PDC', 'الماسي', 'ثلاثي المخاريط'], correctAnswer: 1 },
          { question: 'ما هو أول إجراء عند اكتشاف تدفق؟', options: ['زيادة معدل الضخ', 'إغلاق BOP', 'سحب الأنابيب', 'إضافة الباريت'], correctAnswer: 1 },
          { question: 'ما وظيفة الإسمنت في الآبار؟', options: ['تبريد رأس الحفر', 'تشحيم الأنابيب', 'تثبيت الأنابيب ومنع التسرب', 'تنظيف البئر'], correctAnswer: 2 },
        ],
      },
    },
    {
      day: 7,
      type: 'project',
      content: {
        en: { title: 'Mini Project', explanation: 'Apply your drilling knowledge.', keyTerms: [] },
        ar: { title: 'مشروع صغير', explanation: 'طبّق معرفتك بالحفر.', keyTerms: [] },
      },
      project: {
        en: {
          title: 'Drilling Components Diagram',
          description: 'Create a labeled diagram showing the main components of a rotary drilling rig.',
          instructions: [
            'Draw or describe a drilling rig showing at least 10 major components',
            'Include the hoisting system, rotating system, and circulating system',
            'Label each component clearly',
            'Briefly explain the function of each component',
            'You can draw by hand and upload a photo, or describe in detail',
          ],
          submissionType: 'both',
        },
        ar: {
          title: 'رسم مكونات جهاز الحفر',
          description: 'أنشئ رسماً توضيحياً يُظهر المكونات الرئيسية لجهاز الحفر الدوراني.',
          instructions: [
            'ارسم أو صف جهاز حفر يُظهر 10 مكونات رئيسية على الأقل',
            'تضمين نظام الرفع ونظام الدوران ونظام دوران السوائل',
            'ضع تسمية واضحة لكل مكون',
            'اشرح وظيفة كل مكون بإيجاز',
            'يمكنك الرسم يدوياً ورفع صورة، أو الوصف بالتفصيل',
          ],
          submissionType: 'both',
        },
      },
    },
  ],
};

// Remaining lessons with similar structure...
// For brevity, I'll create simplified versions

const wellTypesLesson: WeeklyLesson = {
  lessonId: 'wells',
  days: [
    {
      day: 1,
      type: 'learning',
      content: {
        ar: {
          title: 'تصنيف الآبار النفطية',
          explanation: `<section>
<h2 class="text-primary text-xl font-bold mb-4">🔷 مقدمة شاملة عن أنواع الآبار النفطية</h2>

<p class="mb-4">تُعتبر الآبار النفطية الوسيلة الأساسية للوصول إلى المخزونات الهيدروكربونية تحت سطح الأرض. يختلف تصميم البئر حسب عدة عوامل منها طبيعة المخزون، والظروف الجيولوجية، والموقع الجغرافي، والاعتبارات الاقتصادية.</p>

<p class="mb-4">فهم أنواع الآبار المختلفة يُعد أساسياً لأي مهندس نفط، حيث يؤثر اختيار نوع البئر بشكل مباشر على تكلفة المشروع، ومعدلات الإنتاج، وعمر البئر الافتراضي.</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 أهمية تصنيف الآبار</h3>

<p class="mb-4">تصنيف الآبار ليس مجرد تقسيم أكاديمي، بل هو أداة عملية تساعد في:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>اتخاذ قرارات التصميم الهندسي المناسبة</li>
<li>تقدير التكاليف والميزانيات بدقة</li>
<li>اختيار المعدات والتقنيات المطلوبة</li>
<li>التخطيط لعمليات الإنتاج المستقبلية</li>
<li>تقييم المخاطر المحتملة وإدارتها</li>
</ul>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 التصنيف حسب مسار البئر (Well Trajectory)</h2>

<p class="mb-4">يُعد تصنيف الآبار حسب مسارها من أهم التصنيفات وأكثرها استخداماً في الصناعة النفطية:</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 1. الآبار العمودية (Vertical Wells)</h3>

<p class="mb-4">هي أبسط أنواع الآبار وأقدمها تاريخياً. تُحفر بشكل مستقيم من السطح نحو المخزون دون انحراف يُذكر. تتميز بـ:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>سهولة التصميم والتنفيذ</li>
<li>تكلفة أقل مقارنة بالآبار المعقدة</li>
<li>مناسبة للمخزونات السميكة والواسعة</li>
<li>صيانة أسهل وأقل تعقيداً</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 2. الآبار المائلة (Directional Wells)</h3>

<p class="mb-4">تُحفر بزاوية مع الخط العمودي للوصول إلى أهداف لا يمكن الوصول إليها بالحفر العمودي. أسباب استخدامها:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>الوصول لمخزونات تحت مناطق يصعب الحفر فيها (مدن، بحيرات)</li>
<li>حفر عدة آبار من منصة واحدة</li>
<li>تجنب الطبقات الصخرية المشكلة</li>
<li>التحكم في اتجاه البئر المنحرف</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 3. الآبار الأفقية (Horizontal Wells)</h3>

<p class="mb-4">تبدأ عمودياً ثم تنحني تدريجياً حتى تصبح أفقية داخل المخزون. مميزاتها:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>زيادة مساحة التماس مع المخزون بشكل كبير</li>
<li>مثالية للمخزونات الرقيقة</li>
<li>تقليل مشاكل تداخل المياه والغاز</li>
<li>إنتاجية أعلى من الآبار العمودية</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 4. الآبار متعددة الفروع (Multilateral Wells)</h3>

<p class="mb-4">بئر رئيسي تتفرع منه عدة آبار فرعية للوصول لأكثر من منطقة في المخزون من بئر واحد.</p>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 التصنيف حسب الغرض (Well Purpose)</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 آبار الاستكشاف (Exploration Wells)</h3>

<p class="mb-4">تُحفر للتأكد من وجود النفط أو الغاز في منطقة جديدة. تُسمى أيضاً "Wildcat Wells" وتحمل مخاطر عالية.</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 آبار التطوير (Development Wells)</h3>

<p class="mb-4">تُحفر في حقول مثبتة لزيادة الإنتاج. تكون المخاطر أقل لأن المخزون معروف.</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 آبار الحقن (Injection Wells)</h3>

<p class="mb-4">تُستخدم لحقن الماء أو الغاز في المخزون للحفاظ على الضغط وتحسين الاستخلاص.</p>

<div class="bg-destructive/10 border-l-4 border-destructive p-4 my-6">
<p class="text-destructive font-semibold">⚠️ ملاحظة مهمة:</p>
<p>اختيار نوع البئر الخاطئ قد يؤدي إلى خسائر مالية ضخمة وفشل المشروع بالكامل. لذا يجب دراسة جميع العوامل بعناية قبل اتخاذ القرار.</p>
</div>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 ملخص القسم</h3>

<div class="bg-secondary/50 p-4 rounded-lg">
<p>تُصنف الآبار النفطية بطرق متعددة حسب المسار والغرض والموقع. فهم هذه التصنيفات ضروري لاختيار التقنية المثلى لكل حالة وتحقيق أعلى كفاءة اقتصادية وإنتاجية.</p>
</div>
</section>`,
          keyTerms: [
            { term: 'البئر العمودي', definition: 'بئر يُحفر بشكل مستقيم من السطح إلى المخزون دون انحراف' },
            { term: 'البئر المائل', definition: 'بئر يُحفر بزاوية مع الخط العمودي للوصول لأهداف محددة' },
            { term: 'البئر الأفقي', definition: 'بئر يبدأ عمودياً ثم ينحني ليصبح أفقياً داخل المخزون' },
            { term: 'بئر الاستكشاف', definition: 'أول بئر يُحفر في منطقة جديدة للتأكد من وجود النفط' },
          ],
          practiceQuestion: {
            question: 'أي نوع من الآبار يُحفر بزاوية مع الخط العمودي؟',
            options: ['البئر العمودي', 'البئر المائل', 'بئر الحقن', 'البئر السطحي'],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Classification of Oil Wells',
          explanation: `<section>
<h2 class="text-primary text-xl font-bold mb-4">🔷 Comprehensive Introduction to Oil Well Types</h2>

<p class="mb-4">Oil wells are the primary means of accessing hydrocarbon reservoirs beneath the earth's surface. Well design varies according to several factors including reservoir characteristics, geological conditions, geographic location, and economic considerations.</p>

<p class="mb-4">Understanding different well types is fundamental for any petroleum engineer, as the choice of well type directly impacts project cost, production rates, and expected well lifespan.</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Importance of Well Classification</h3>

<p class="mb-4">Well classification is not merely an academic division but a practical tool that helps in:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>Making appropriate engineering design decisions</li>
<li>Accurately estimating costs and budgets</li>
<li>Selecting required equipment and technologies</li>
<li>Planning future production operations</li>
<li>Assessing and managing potential risks</li>
</ul>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 Classification by Well Trajectory</h2>

<p class="mb-4">Classifying wells by their trajectory is one of the most important and widely used classifications in the petroleum industry:</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 1. Vertical Wells</h3>

<p class="mb-4">These are the simplest and historically oldest type of wells. They are drilled straight from the surface toward the reservoir without significant deviation. They are characterized by:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>Easy design and execution</li>
<li>Lower cost compared to complex wells</li>
<li>Suitable for thick and extensive reservoirs</li>
<li>Easier and less complex maintenance</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 2. Directional Wells</h3>

<p class="mb-4">Drilled at an angle to the vertical line to reach targets that cannot be accessed by vertical drilling. Reasons for use:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>Reaching reservoirs under difficult-to-drill areas (cities, lakes)</li>
<li>Drilling multiple wells from a single platform</li>
<li>Avoiding problematic rock formations</li>
<li>Controlling the direction of deviated wells</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 3. Horizontal Wells</h3>

<p class="mb-4">Start vertically then gradually curve until they become horizontal within the reservoir. Their advantages:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>Significantly increased contact area with the reservoir</li>
<li>Ideal for thin reservoirs</li>
<li>Reduced water and gas coning problems</li>
<li>Higher productivity than vertical wells</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 4. Multilateral Wells</h3>

<p class="mb-4">A main well from which several branch wells diverge to access multiple zones in the reservoir from a single wellbore.</p>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 Classification by Well Purpose</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Exploration Wells</h3>

<p class="mb-4">Drilled to confirm the presence of oil or gas in a new area. Also called "Wildcat Wells" and carry high risk.</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Development Wells</h3>

<p class="mb-4">Drilled in proven fields to increase production. Risk is lower because the reservoir is known.</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Injection Wells</h3>

<p class="mb-4">Used to inject water or gas into the reservoir to maintain pressure and improve recovery.</p>

<div class="bg-destructive/10 border-l-4 border-destructive p-4 my-6">
<p class="text-destructive font-semibold">⚠️ Important Note:</p>
<p>Choosing the wrong well type can lead to huge financial losses and complete project failure. Therefore, all factors must be carefully studied before making a decision.</p>
</div>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Section Summary</h3>

<div class="bg-secondary/50 p-4 rounded-lg">
<p>Oil wells are classified in multiple ways based on trajectory, purpose, and location. Understanding these classifications is essential for selecting the optimal technique for each case and achieving the highest economic and production efficiency.</p>
</div>
</section>`,
          keyTerms: [
            { term: 'Vertical Well', definition: 'A well drilled straight from the surface to the reservoir without deviation' },
            { term: 'Directional Well', definition: 'A well drilled at an angle to the vertical line to reach specific targets' },
            { term: 'Horizontal Well', definition: 'A well that starts vertically then curves to become horizontal within the reservoir' },
            { term: 'Exploration Well', definition: 'The first well drilled in a new area to confirm the presence of oil' },
          ],
          practiceQuestion: {
            question: 'Which type of well is drilled at an angle to the vertical line?',
            options: ['Vertical Well', 'Directional Well', 'Injection Well', 'Surface Well'],
            correctAnswer: 1,
          },
        },
      },
    },
    {
      day: 2,
      type: 'learning',
      content: {
        ar: {
          title: 'الآبار العمودية والمائلة بالتفصيل',
          explanation: `<section>
<h2 class="text-primary text-xl font-bold mb-4">🔷 الآبار العمودية (Vertical Wells)</h2>

<p class="mb-4">الآبار العمودية هي الأساس الذي بُنيت عليه صناعة النفط الحديثة. منذ بئر دريك عام 1859، ظلت الآبار العمودية الخيار الأول لعقود طويلة. تُحفر هذه الآبار بشكل مستقيم من السطح إلى المخزون مع السماح بانحراف طفيف لا يتجاوز عادة 5 درجات.</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 خصائص الآبار العمودية</h3>

<ul class="list-disc list-inside space-y-2 mb-4">
<li><strong>البساطة:</strong> أقل تعقيداً في التصميم والتنفيذ</li>
<li><strong>التكلفة:</strong> أرخص من الآبار المائلة والأفقية</li>
<li><strong>المعدات:</strong> تتطلب معدات قياسية متوفرة</li>
<li><strong>السرعة:</strong> زمن حفر أقصر عادةً</li>
<li><strong>الصيانة:</strong> أسهل في الصيانة والإصلاح</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 متى نستخدم الآبار العمودية؟</h3>

<p class="mb-4">تُفضل الآبار العمودية في الحالات التالية:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>المخزونات السميكة (أكثر من 30 متراً)</li>
<li>عندما يكون الموقع السطحي مناسباً للحفر</li>
<li>المخزونات ذات النفاذية العالية</li>
<li>الميزانيات المحدودة</li>
<li>آبار الاستكشاف الأولية</li>
</ul>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 الآبار المائلة (Directional Wells)</h2>

<p class="mb-4">الحفر المائل أو الاتجاهي هو تقنية حفر تسمح بالتحكم في اتجاه وميل البئر للوصول إلى أهداف لا يمكن الوصول إليها مباشرة من موقع الحفر السطحي.</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 تاريخ تطور الحفر المائل</h3>

<p class="mb-4">بدأ الحفر المائل في ثلاثينيات القرن العشرين، وتطور بشكل كبير مع تقدم تقنيات التوجيه والقياس. اليوم، يُستخدم في معظم العمليات البحرية وكثير من العمليات البرية.</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 أسباب استخدام الحفر المائل</h3>

<ul class="list-disc list-inside space-y-2 mb-4">
<li><strong>العوائق السطحية:</strong> الوصول لمخزونات تحت مدن، مباني، بحيرات، أو محميات طبيعية</li>
<li><strong>الحفر من منصة واحدة:</strong> حفر عدة آبار للوصول لمناطق مختلفة من المخزون</li>
<li><strong>السيطرة على البئر المنفجر:</strong> حفر بئر إغاثة للسيطرة على بئر خارج عن السيطرة</li>
<li><strong>تجنب المشاكل الجيولوجية:</strong> الابتعاد عن طبقات صعبة أو مناطق ضغط عالي</li>
<li><strong>زيادة التماس:</strong> زيادة طول البئر داخل المخزون</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 مكونات نظام الحفر المائل</h3>

<ul class="list-disc list-inside space-y-2 mb-4">
<li><strong>محرك الحفر القاعي (Mud Motor):</strong> يدور رأس الحفر دون دوران سلسلة الحفر</li>
<li><strong>أداة الانحناء (Bent Sub/Housing):</strong> توفر الزاوية اللازمة للانحراف</li>
<li><strong>أدوات القياس (MWD/LWD):</strong> قياس الاتجاه والميل أثناء الحفر</li>
<li><strong>المثبتات (Stabilizers):</strong> للتحكم في مسار البئر</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 مصطلحات مهمة في الحفر المائل</h3>

<ul class="list-disc list-inside space-y-2 mb-4">
<li><strong>الميل (Inclination):</strong> الزاوية بين محور البئر والخط العمودي</li>
<li><strong>السمت (Azimuth):</strong> اتجاه البئر بالنسبة للشمال</li>
<li><strong>نقطة البداية (KOP - Kickoff Point):</strong> النقطة التي يبدأ فيها الانحراف</li>
<li><strong>معدل البناء (Build Rate):</strong> معدل زيادة الميل لكل 30 متراً</li>
</ul>

<div class="bg-destructive/10 border-l-4 border-destructive p-4 my-6">
<p class="text-destructive font-semibold">⚠️ تحذير:</p>
<p>الحفر المائل يتطلب خبرة عالية ومراقبة مستمرة. الأخطاء في التوجيه قد تؤدي إلى عدم الوصول للهدف أو حتى تصادم مع آبار مجاورة.</p>
</div>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 ملخص القسم</h3>

<div class="bg-secondary/50 p-4 rounded-lg">
<p>الآبار العمودية هي الأساس والأبسط والأرخص، بينما الآبار المائلة توفر مرونة للوصول لأهداف صعبة. الاختيار بينهما يعتمد على الظروف الجيولوجية والاقتصادية.</p>
</div>
</section>`,
          keyTerms: [
            { term: 'الميل (Inclination)', definition: 'الزاوية بين محور البئر والخط العمودي' },
            { term: 'السمت (Azimuth)', definition: 'اتجاه البئر بالنسبة للشمال الجغرافي أو المغناطيسي' },
            { term: 'نقطة البداية (KOP)', definition: 'النقطة التي يبدأ فيها انحراف البئر عن المسار العمودي' },
            { term: 'محرك الحفر القاعي', definition: 'جهاز يدور رأس الحفر باستخدام قوة ضخ سائل الحفر' },
          ],
          practiceQuestion: {
            question: 'ما الميزة الرئيسية للآبار العمودية؟',
            options: ['أسرع حفراً', 'أقل تكلفة وأبسط تصميماً', 'أكثر إنتاجاً', 'أعمق وصولاً'],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Vertical and Directional Wells in Detail',
          explanation: `<section>
<h2 class="text-primary text-xl font-bold mb-4">🔷 Vertical Wells</h2>

<p class="mb-4">Vertical wells are the foundation upon which the modern oil industry was built. Since Drake's well in 1859, vertical wells remained the primary choice for many decades. These wells are drilled straight from the surface to the reservoir, allowing only slight deviation typically not exceeding 5 degrees.</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Characteristics of Vertical Wells</h3>

<ul class="list-disc list-inside space-y-2 mb-4">
<li><strong>Simplicity:</strong> Less complex in design and execution</li>
<li><strong>Cost:</strong> Cheaper than directional and horizontal wells</li>
<li><strong>Equipment:</strong> Requires standard, readily available equipment</li>
<li><strong>Speed:</strong> Usually shorter drilling time</li>
<li><strong>Maintenance:</strong> Easier to maintain and repair</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 When to Use Vertical Wells?</h3>

<p class="mb-4">Vertical wells are preferred in the following cases:</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>Thick reservoirs (more than 30 meters)</li>
<li>When the surface location is suitable for drilling</li>
<li>High permeability reservoirs</li>
<li>Limited budgets</li>
<li>Initial exploration wells</li>
</ul>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 Directional Wells</h2>

<p class="mb-4">Directional drilling is a drilling technique that allows control of the direction and inclination of the well to reach targets that cannot be directly accessed from the surface drilling location.</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 History of Directional Drilling</h3>

<p class="mb-4">Directional drilling began in the 1930s and has evolved significantly with advances in steering and measurement technologies. Today, it is used in most offshore operations and many onshore operations.</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Reasons for Using Directional Drilling</h3>

<ul class="list-disc list-inside space-y-2 mb-4">
<li><strong>Surface Obstacles:</strong> Reaching reservoirs under cities, buildings, lakes, or nature reserves</li>
<li><strong>Drilling from One Platform:</strong> Drilling multiple wells to access different areas of the reservoir</li>
<li><strong>Well Control:</strong> Drilling a relief well to control a blowout</li>
<li><strong>Avoiding Geological Problems:</strong> Steering away from difficult formations or high-pressure zones</li>
<li><strong>Increasing Contact:</strong> Extending well length within the reservoir</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Directional Drilling System Components</h3>

<ul class="list-disc list-inside space-y-2 mb-4">
<li><strong>Mud Motor:</strong> Rotates the drill bit without rotating the drill string</li>
<li><strong>Bent Sub/Housing:</strong> Provides the necessary angle for deviation</li>
<li><strong>MWD/LWD Tools:</strong> Measuring direction and inclination while drilling</li>
<li><strong>Stabilizers:</strong> For controlling the well path</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Important Directional Drilling Terms</h3>

<ul class="list-disc list-inside space-y-2 mb-4">
<li><strong>Inclination:</strong> The angle between the wellbore axis and the vertical line</li>
<li><strong>Azimuth:</strong> The direction of the well relative to north</li>
<li><strong>KOP (Kickoff Point):</strong> The point where deviation begins</li>
<li><strong>Build Rate:</strong> Rate of inclination increase per 30 meters (100 feet)</li>
</ul>

<div class="bg-destructive/10 border-l-4 border-destructive p-4 my-6">
<p class="text-destructive font-semibold">⚠️ Warning:</p>
<p>Directional drilling requires high expertise and continuous monitoring. Steering errors can lead to missing the target or even collision with adjacent wells.</p>
</div>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Section Summary</h3>

<div class="bg-secondary/50 p-4 rounded-lg">
<p>Vertical wells are the foundation, simplest, and cheapest, while directional wells provide flexibility to reach difficult targets. The choice between them depends on geological and economic conditions.</p>
</div>
</section>`,
          keyTerms: [
            { term: 'Inclination', definition: 'The angle between the wellbore axis and the vertical line' },
            { term: 'Azimuth', definition: 'The direction of the well relative to geographic or magnetic north' },
            { term: 'KOP (Kickoff Point)', definition: 'The point where the well begins to deviate from vertical' },
            { term: 'Mud Motor', definition: 'A device that rotates the drill bit using drilling fluid pumping force' },
          ],
          practiceQuestion: {
            question: 'What is the main advantage of vertical wells?',
            options: ['Faster drilling', 'Lower cost and simpler design', 'Higher production', 'Deeper reach'],
            correctAnswer: 1,
          },
        },
      },
    },
    {
      day: 3,
      type: 'learning',
      content: {
        ar: {
          title: 'الآبار الأفقية - ثورة في صناعة النفط',
          explanation: `<section>
<h2 class="text-primary text-xl font-bold mb-4">🔷 مقدمة عن الآبار الأفقية</h2>

<p class="mb-4">تُعتبر الآبار الأفقية من أهم التطورات التقنية في صناعة النفط والغاز خلال العقود الأخيرة. هذه التقنية غيّرت قواعد اللعبة وجعلت من الممكن استخراج النفط من مخزونات كان يُعتقد أنها غير اقتصادية.</p>

<p class="mb-4">البئر الأفقي يبدأ عمودياً من السطح، ثم ينحني تدريجياً في منطقة تُسمى "منطقة البناء" (Build Section) حتى يصل إلى الزاوية المطلوبة، ثم يستمر أفقياً داخل المخزون.</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 تاريخ تطور الحفر الأفقي</h3>

<ul class="list-disc list-inside space-y-2 mb-4">
<li><strong>1929:</strong> أول محاولات الحفر الأفقي في تكساس</li>
<li><strong>1980s:</strong> بداية الاستخدام التجاري مع تطور تقنيات التوجيه</li>
<li><strong>1990s:</strong> انتشار واسع في حقول النفط العالمية</li>
<li><strong>2000s:</strong> ثورة النفط الصخري بفضل الجمع بين الحفر الأفقي والتكسير الهيدروليكي</li>
</ul>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 مميزات الآبار الأفقية</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 1. زيادة مساحة التماس مع المخزون</h3>

<p class="mb-4">البئر الأفقي يمكن أن يمتد لعدة كيلومترات داخل المخزون، مما يزيد مساحة التماس بشكل هائل مقارنة بالبئر العمودي الذي يخترق المخزون بسمكه فقط.</p>

<p class="mb-4">مثال: إذا كان سمك المخزون 10 أمتار فقط، البئر العمودي يتماس مع 10 أمتار، بينما البئر الأفقي قد يتماس مع 1000 متر أو أكثر!</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 2. مثالية للمخزونات الرقيقة</h3>

<p class="mb-4">المخزونات ذات السماكة القليلة (أقل من 10 أمتار) قد لا تكون اقتصادية بالآبار العمودية، لكنها تصبح مُجدية جداً بالحفر الأفقي.</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 3. تقليل مشاكل تداخل المياه والغاز</h3>

<p class="mb-4">في الآبار العمودية، قد يتداخل الماء من الأسفل أو الغاز من الأعلى بسرعة. البئر الأفقي يوزع الإنتاج على مساحة أكبر، مما يؤخر هذه المشاكل.</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 4. إنتاجية أعلى</h3>

<p class="mb-4">البئر الأفقي الواحد قد يُنتج ما يعادل 3-5 آبار عمودية أو أكثر، مما يقلل عدد الآبار المطلوبة وتكاليف البنية التحتية.</p>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 أقسام البئر الأفقي</h2>

<ul class="list-disc list-inside space-y-2 mb-4">
<li><strong>القسم العمودي (Vertical Section):</strong> من السطح حتى نقطة البداية</li>
<li><strong>قسم البناء (Build Section):</strong> منطقة الانحناء التدريجي</li>
<li><strong>القسم المماسي (Tangent Section):</strong> قسم اختياري بميل ثابت</li>
<li><strong>القسم الأفقي (Horizontal Section):</strong> الجزء الأفقي داخل المخزون</li>
</ul>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 تحديات الحفر الأفقي</h2>

<ul class="list-disc list-inside space-y-2 mb-4">
<li><strong>التكلفة:</strong> أعلى من الآبار العمودية بسبب التعقيد</li>
<li><strong>تنظيف البئر:</strong> صعوبة إخراج الفتات من القسم الأفقي</li>
<li><strong>عزم الدوران والاحتكاك:</strong> قوى أعلى على سلسلة الحفر</li>
<li><strong>وضع الأنابيب:</strong> تحديات في إنزال التغليف الأفقي</li>
<li><strong>الإكمال:</strong> تقنيات إكمال خاصة للآبار الأفقية</li>
</ul>

<div class="bg-destructive/10 border-l-4 border-destructive p-4 my-6">
<p class="text-destructive font-semibold">⚠️ معلومة مهمة:</p>
<p>الحفر الأفقي مع التكسير الهيدروليكي أحدث ثورة في إنتاج النفط الصخري، مما جعل أمريكا أكبر منتج للنفط في العالم.</p>
</div>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 ملخص القسم</h3>

<div class="bg-secondary/50 p-4 rounded-lg">
<p>الآبار الأفقية توفر مساحة تماس هائلة مع المخزون، مما يزيد الإنتاجية بشكل كبير. رغم تكلفتها الأعلى، فإن العائد يبرر الاستثمار في معظم الحالات.</p>
</div>
</section>`,
          keyTerms: [
            { term: 'قسم البناء', definition: 'المنطقة التي ينحني فيها البئر تدريجياً من العمودي إلى الأفقي' },
            { term: 'معدل البناء', definition: 'معدل تغير الزاوية لكل 30 متراً من الحفر' },
            { term: 'القسم الأفقي', definition: 'الجزء من البئر الذي يمتد أفقياً داخل المخزون' },
            { term: 'التكسير الهيدروليكي', definition: 'تقنية ضخ سوائل تحت ضغط عالي لكسر الصخور وتحرير النفط' },
          ],
          practiceQuestion: {
            question: 'متى تُستخدم الآبار الأفقية بشكل مثالي؟',
            options: ['المخزونات الرقيقة', 'المخزونات العميقة جداً', 'المخزونات السطحية فقط', 'آبار الحقن فقط'],
            correctAnswer: 0,
          },
        },
        en: {
          title: 'Horizontal Wells - A Revolution in the Oil Industry',
          explanation: `<section>
<h2 class="text-primary text-xl font-bold mb-4">🔷 Introduction to Horizontal Wells</h2>

<p class="mb-4">Horizontal wells are considered one of the most important technical developments in the oil and gas industry in recent decades. This technology has changed the rules of the game and made it possible to extract oil from reservoirs that were thought to be uneconomical.</p>

<p class="mb-4">A horizontal well starts vertically from the surface, then gradually curves in an area called the "Build Section" until it reaches the required angle, then continues horizontally within the reservoir.</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 History of Horizontal Drilling Development</h3>

<ul class="list-disc list-inside space-y-2 mb-4">
<li><strong>1929:</strong> First horizontal drilling attempts in Texas</li>
<li><strong>1980s:</strong> Beginning of commercial use with development of steering technologies</li>
<li><strong>1990s:</strong> Widespread adoption in global oil fields</li>
<li><strong>2000s:</strong> Shale oil revolution thanks to combining horizontal drilling with hydraulic fracturing</li>
</ul>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 Advantages of Horizontal Wells</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 1. Increased Contact Area with Reservoir</h3>

<p class="mb-4">A horizontal well can extend for several kilometers within the reservoir, dramatically increasing the contact area compared to a vertical well that only penetrates the reservoir through its thickness.</p>

<p class="mb-4">Example: If the reservoir thickness is only 10 meters, a vertical well contacts 10 meters, while a horizontal well may contact 1000 meters or more!</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 2. Ideal for Thin Reservoirs</h3>

<p class="mb-4">Thin reservoirs (less than 10 meters thick) may not be economical with vertical wells, but they become very viable with horizontal drilling.</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 3. Reducing Water and Gas Coning Problems</h3>

<p class="mb-4">In vertical wells, water may cone up from below or gas down from above quickly. Horizontal wells distribute production over a larger area, delaying these problems.</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 4. Higher Productivity</h3>

<p class="mb-4">A single horizontal well may produce the equivalent of 3-5 or more vertical wells, reducing the number of wells required and infrastructure costs.</p>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 Sections of a Horizontal Well</h2>

<ul class="list-disc list-inside space-y-2 mb-4">
<li><strong>Vertical Section:</strong> From surface to the kickoff point</li>
<li><strong>Build Section:</strong> Area of gradual curving</li>
<li><strong>Tangent Section:</strong> Optional section with constant inclination</li>
<li><strong>Horizontal Section:</strong> The horizontal portion within the reservoir</li>
</ul>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 Challenges of Horizontal Drilling</h2>

<ul class="list-disc list-inside space-y-2 mb-4">
<li><strong>Cost:</strong> Higher than vertical wells due to complexity</li>
<li><strong>Hole Cleaning:</strong> Difficulty removing cuttings from horizontal section</li>
<li><strong>Torque and Drag:</strong> Higher forces on the drill string</li>
<li><strong>Casing Running:</strong> Challenges in running horizontal casing</li>
<li><strong>Completion:</strong> Special completion techniques for horizontal wells</li>
</ul>

<div class="bg-destructive/10 border-l-4 border-destructive p-4 my-6">
<p class="text-destructive font-semibold">⚠️ Important Information:</p>
<p>Horizontal drilling combined with hydraulic fracturing revolutionized shale oil production, making America the world's largest oil producer.</p>
</div>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Section Summary</h3>

<div class="bg-secondary/50 p-4 rounded-lg">
<p>Horizontal wells provide enormous contact area with the reservoir, significantly increasing productivity. Despite their higher cost, the return justifies the investment in most cases.</p>
</div>
</section>`,
          keyTerms: [
            { term: 'Build Section', definition: 'The area where the well gradually curves from vertical to horizontal' },
            { term: 'Build Rate', definition: 'Rate of angle change per 30 meters (100 feet) of drilling' },
            { term: 'Horizontal Section', definition: 'The part of the well that extends horizontally within the reservoir' },
            { term: 'Hydraulic Fracturing', definition: 'A technique of pumping fluids under high pressure to fracture rocks and release oil' },
          ],
          practiceQuestion: {
            question: 'When are horizontal wells ideally used?',
            options: ['Thin reservoirs', 'Very deep reservoirs', 'Surface reservoirs only', 'Injection wells only'],
            correctAnswer: 0,
          },
        },
      },
    },
    {
      day: 4,
      type: 'learning',
      content: {
        ar: {
          title: 'الآبار البحرية - الحفر في أعماق المحيطات',
          explanation: `<section>
<h2 class="text-primary text-xl font-bold mb-4">🔷 مقدمة عن الحفر البحري</h2>

<p class="mb-4">يُعد الحفر البحري (Offshore Drilling) من أكثر العمليات الهندسية تعقيداً وتحدياً في صناعة النفط. يتطلب التعامل مع بيئة قاسية تشمل الأمواج، الرياح، التيارات المائية، وأعماق المياه التي قد تصل إلى أكثر من 3000 متر.</p>

<p class="mb-4">بدأ الحفر البحري في أواخر القرن التاسع عشر في المياه الضحلة، وتطور ليصل اليوم إلى أعماق مذهلة بفضل التقنيات المتقدمة.</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 تاريخ الحفر البحري</h3>

<ul class="list-disc list-inside space-y-2 mb-4">
<li><strong>1897:</strong> أول بئر بحري في كاليفورنيا على رصيف خشبي</li>
<li><strong>1947:</strong> أول بئر خارج مرمى البصر من الشاطئ (خليج المكسيك)</li>
<li><strong>1960s:</strong> تطوير منصات جاك أب</li>
<li><strong>1970s:</strong> المنصات شبه الغاطسة وسفن الحفر</li>
<li><strong>2000s:</strong> الحفر في أعماق تتجاوز 3000 متر</li>
</ul>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 أنواع منصات الحفر البحرية</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 1. المنصات الثابتة (Fixed Platforms)</h3>

<p class="mb-4">هياكل فولاذية أو خرسانية مثبتة على قاع البحر. تُستخدم في المياه الضحلة حتى 500 متر تقريباً. تتميز بالاستقرار العالي وتُستخدم للإنتاج طويل المدى.</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 2. منصات جاك أب (Jack-up Rigs)</h3>

<p class="mb-4">منصات متحركة ترتكز على أرجل قابلة للرفع والخفض. تُنقل عائمة ثم تُرفع فوق سطح الماء. مناسبة للمياه حتى 150 متراً.</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>قابلة للنقل والتحريك</li>
<li>مستقرة جداً عند الرفع</li>
<li>تكلفة تشغيل أقل من المنصات العائمة</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 3. المنصات شبه الغاطسة (Semi-submersibles)</h3>

<p class="mb-4">منصات عائمة على أعمدة مغمورة جزئياً تحت الماء. توفر استقراراً ممتازاً في الأمواج العالية. تُستخدم في أعماق 200-3000 متر.</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 4. سفن الحفر (Drillships)</h3>

<p class="mb-4">سفن مجهزة بمعدات حفر كاملة. الأكثر قدرة على الحركة والعمل في الأعماق الكبيرة. تُستخدم في المياه العميقة جداً (أكثر من 3000 متر).</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>مرونة عالية في التنقل</li>
<li>قدرة على حمل معدات ومؤن كبيرة</li>
<li>أنظمة تثبيت ديناميكية متقدمة</li>
</ul>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 تحديات الحفر البحري</h2>

<ul class="list-disc list-inside space-y-2 mb-4">
<li><strong>الظروف الجوية:</strong> العواصف والأمواج العالية قد توقف العمليات</li>
<li><strong>الضغط العالي:</strong> ضغط المياه يزداد مع العمق</li>
<li><strong>درجات الحرارة:</strong> تغيرات كبيرة من السطح للقاع</li>
<li><strong>اللوجستيات:</strong> صعوبة نقل المعدات والعمال</li>
<li><strong>التكلفة:</strong> أضعاف تكلفة الحفر البري</li>
<li><strong>السلامة:</strong> مخاطر أعلى تتطلب إجراءات صارمة</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 نظام الارتفاع البحري (Marine Riser)</h3>

<p class="mb-4">أنبوب يصل بين المنصة وقاع البحر، يوفر مساراً لسلسلة الحفر وسائل الحفر. يجب أن يتحمل حركة المنصة والتيارات المائية.</p>

<div class="bg-destructive/10 border-l-4 border-destructive p-4 my-6">
<p class="text-destructive font-semibold">⚠️ تحذير أمني:</p>
<p>حادثة Deepwater Horizon عام 2010 أظهرت مخاطر الحفر في المياه العميقة. السلامة في الحفر البحري ليست خياراً بل ضرورة حتمية.</p>
</div>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 ملخص القسم</h3>

<div class="bg-secondary/50 p-4 rounded-lg">
<p>الحفر البحري يوفر الوصول لاحتياطيات نفطية ضخمة، لكنه يتطلب تقنيات متقدمة وتكاليف عالية. اختيار نوع المنصة يعتمد على عمق المياه والظروف البيئية.</p>
</div>
</section>`,
          keyTerms: [
            { term: 'منصة جاك أب', definition: 'منصة حفر متحركة ترتكز على أرجل قابلة للرفع فوق سطح الماء' },
            { term: 'المنصة شبه الغاطسة', definition: 'منصة عائمة على أعمدة مغمورة جزئياً توفر استقراراً عالياً' },
            { term: 'سفينة الحفر', definition: 'سفينة مجهزة بمعدات حفر كاملة للعمل في المياه العميقة جداً' },
            { term: 'نظام الارتفاع البحري', definition: 'أنبوب يصل بين المنصة وقاع البحر لمرور معدات الحفر' },
          ],
          practiceQuestion: {
            question: 'ما التحدي الرئيسي في الحفر البحري؟',
            options: ['التكلفة العالية فقط', 'البعد عن الشاطئ', 'عمق المياه والظروف الجوية القاسية', 'نوع الصخور فقط'],
            correctAnswer: 2,
          },
        },
        en: {
          title: 'Offshore Wells - Drilling in Ocean Depths',
          explanation: `<section>
<h2 class="text-primary text-xl font-bold mb-4">🔷 Introduction to Offshore Drilling</h2>

<p class="mb-4">Offshore drilling is one of the most complex and challenging engineering operations in the oil industry. It requires dealing with a harsh environment including waves, winds, water currents, and water depths that can exceed 3000 meters.</p>

<p class="mb-4">Offshore drilling began in the late 19th century in shallow waters and has evolved to reach amazing depths today thanks to advanced technologies.</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 History of Offshore Drilling</h3>

<ul class="list-disc list-inside space-y-2 mb-4">
<li><strong>1897:</strong> First offshore well in California on a wooden pier</li>
<li><strong>1947:</strong> First well out of sight of land (Gulf of Mexico)</li>
<li><strong>1960s:</strong> Development of jack-up platforms</li>
<li><strong>1970s:</strong> Semi-submersibles and drillships</li>
<li><strong>2000s:</strong> Drilling in depths exceeding 3000 meters</li>
</ul>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 Types of Offshore Drilling Platforms</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 1. Fixed Platforms</h3>

<p class="mb-4">Steel or concrete structures fixed to the seabed. Used in shallow waters up to approximately 500 meters. Characterized by high stability and used for long-term production.</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 2. Jack-up Rigs</h3>

<p class="mb-4">Mobile platforms resting on legs that can be raised and lowered. Transported floating then raised above water surface. Suitable for waters up to 150 meters.</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>Transportable and movable</li>
<li>Very stable when jacked up</li>
<li>Lower operating costs than floating platforms</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 3. Semi-submersibles</h3>

<p class="mb-4">Platforms floating on columns partially submerged underwater. Provide excellent stability in high waves. Used in depths of 200-3000 meters.</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 4. Drillships</h3>

<p class="mb-4">Ships equipped with complete drilling equipment. Most capable of movement and working in great depths. Used in very deep water (more than 3000 meters).</p>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>High mobility flexibility</li>
<li>Capability to carry large equipment and supplies</li>
<li>Advanced dynamic positioning systems</li>
</ul>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 Offshore Drilling Challenges</h2>

<ul class="list-disc list-inside space-y-2 mb-4">
<li><strong>Weather Conditions:</strong> Storms and high waves may halt operations</li>
<li><strong>High Pressure:</strong> Water pressure increases with depth</li>
<li><strong>Temperatures:</strong> Large variations from surface to bottom</li>
<li><strong>Logistics:</strong> Difficulty transporting equipment and workers</li>
<li><strong>Cost:</strong> Multiple times the cost of onshore drilling</li>
<li><strong>Safety:</strong> Higher risks requiring strict procedures</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Marine Riser System</h3>

<p class="mb-4">A pipe connecting the platform to the seabed, providing a path for the drill string and drilling fluid. Must withstand platform movement and water currents.</p>

<div class="bg-destructive/10 border-l-4 border-destructive p-4 my-6">
<p class="text-destructive font-semibold">⚠️ Safety Warning:</p>
<p>The Deepwater Horizon incident in 2010 demonstrated the risks of deep water drilling. Safety in offshore drilling is not an option but an absolute necessity.</p>
</div>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Section Summary</h3>

<div class="bg-secondary/50 p-4 rounded-lg">
<p>Offshore drilling provides access to huge oil reserves, but requires advanced technologies and high costs. Platform type selection depends on water depth and environmental conditions.</p>
</div>
</section>`,
          keyTerms: [
            { term: 'Jack-up Platform', definition: 'A mobile drilling platform resting on legs that can be raised above water surface' },
            { term: 'Semi-submersible', definition: 'A platform floating on partially submerged columns providing high stability' },
            { term: 'Drillship', definition: 'A ship equipped with complete drilling equipment for very deep water operations' },
            { term: 'Marine Riser', definition: 'A pipe connecting the platform to the seabed for drilling equipment passage' },
          ],
          practiceQuestion: {
            question: 'What is the main challenge in offshore drilling?',
            options: ['High cost only', 'Distance from shore', 'Water depth and harsh weather conditions', 'Rock type only'],
            correctAnswer: 2,
          },
        },
      },
    },
    {
      day: 5,
      type: 'learning',
      content: {
        ar: {
          title: 'اختيار نوع البئر المناسب',
          explanation: `<section>
<h2 class="text-primary text-xl font-bold mb-4">🔷 عملية اتخاذ قرار نوع البئر</h2>

<p class="mb-4">اختيار نوع البئر المناسب هو قرار هندسي واقتصادي بالغ الأهمية. القرار الصحيح يمكن أن يوفر ملايين الدولارات ويضاعف الإنتاج، بينما القرار الخاطئ قد يؤدي لفشل المشروع.</p>

<p class="mb-4">يجب على مهندسي النفط النظر في مجموعة شاملة من العوامل قبل اتخاذ هذا القرار الحاسم.</p>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 العوامل الجيولوجية</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 1. سمك المخزون</h3>

<ul class="list-disc list-inside space-y-2 mb-4">
<li><strong>مخزون سميك (> 50 م):</strong> الآبار العمودية غالباً كافية ومناسبة</li>
<li><strong>مخزون متوسط (10-50 م):</strong> الآبار المائلة أو الأفقية قد تكون أفضل</li>
<li><strong>مخزون رقيق (< 10 م):</strong> الآبار الأفقية ضرورية للجدوى الاقتصادية</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 2. نفاذية الصخور</h3>

<ul class="list-disc list-inside space-y-2 mb-4">
<li><strong>نفاذية عالية:</strong> الآبار العمودية قد تكون كافية</li>
<li><strong>نفاذية منخفضة:</strong> الآبار الأفقية مع التكسير الهيدروليكي</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 3. وجود طبقات مياه أو غاز</h3>

<p class="mb-4">وجود ماء تحت المخزون أو غاز فوقه يؤثر على اختيار نوع البئر لتقليل مشاكل التداخل.</p>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 العوامل السطحية</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 1. طبيعة الموقع</h3>

<ul class="list-disc list-inside space-y-2 mb-4">
<li><strong>بري مفتوح:</strong> مرونة في اختيار موقع الحفر ونوع البئر</li>
<li><strong>بحري:</strong> يُفضل الحفر المائل لحفر عدة آبار من منصة واحدة</li>
<li><strong>مناطق حضرية:</strong> الحفر المائل للوصول لمخزونات تحت المباني</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 2. القيود البيئية</h3>

<p class="mb-4">المحميات الطبيعية، مصادر المياه، والمناطق السكنية قد تحد من مواقع الحفر المباشر.</p>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 العوامل الاقتصادية</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 1. تكلفة الحفر</h3>

<table class="w-full border-collapse my-4">
<tr class="bg-secondary/30">
<td class="border p-2 font-bold">نوع البئر</td>
<td class="border p-2 font-bold">التكلفة النسبية</td>
</tr>
<tr>
<td class="border p-2">عمودي</td>
<td class="border p-2">1x (المرجع)</td>
</tr>
<tr>
<td class="border p-2">مائل</td>
<td class="border p-2">1.3x - 1.5x</td>
</tr>
<tr>
<td class="border p-2">أفقي</td>
<td class="border p-2">1.5x - 3x</td>
</tr>
<tr>
<td class="border p-2">بحري</td>
<td class="border p-2">5x - 20x</td>
</tr>
</table>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 2. العائد المتوقع</h3>

<p class="mb-4">يجب مقارنة تكلفة الحفر بالإنتاج المتوقع. بئر أفقي يكلف ضعفين لكنه ينتج 4 أضعاف = قرار مربح.</p>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 مخطط اتخاذ القرار</h2>

<ul class="list-disc list-inside space-y-2 mb-4">
<li><strong>الخطوة 1:</strong> تحليل بيانات المخزون (سمك، نفاذية، ضغط)</li>
<li><strong>الخطوة 2:</strong> تقييم الموقع السطحي والقيود</li>
<li><strong>الخطوة 3:</strong> حساب التكاليف لكل خيار</li>
<li><strong>الخطوة 4:</strong> تقدير الإنتاج لكل خيار</li>
<li><strong>الخطوة 5:</strong> حساب العائد الاقتصادي</li>
<li><strong>الخطوة 6:</strong> تقييم المخاطر</li>
<li><strong>الخطوة 7:</strong> اتخاذ القرار النهائي</li>
</ul>

<div class="bg-destructive/10 border-l-4 border-destructive p-4 my-6">
<p class="text-destructive font-semibold">⚠️ نصيحة مهمة:</p>
<p>لا تختر الخيار الأرخص دائماً. أحياناً البئر الأغلى يحقق عائداً أفضل. القرار يجب أن يعتمد على التحليل الاقتصادي الشامل.</p>
</div>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 ملخص القسم</h3>

<div class="bg-secondary/50 p-4 rounded-lg">
<p>اختيار نوع البئر قرار معقد يتطلب موازنة عوامل جيولوجية وسطحية واقتصادية. الهدف هو تعظيم العائد الاقتصادي مع تقليل المخاطر.</p>
</div>
</section>`,
          keyTerms: [
            { term: 'الجدوى الاقتصادية', definition: 'تحليل ما إذا كان المشروع سيحقق أرباحاً تبرر التكاليف' },
            { term: 'معدل العائد', definition: 'نسبة الأرباح إلى رأس المال المستثمر' },
            { term: 'تحليل المخاطر', definition: 'دراسة احتمالات الفشل وتأثيرها على المشروع' },
            { term: 'التكلفة الرأسمالية', definition: 'التكاليف الأولية لحفر وإكمال البئر' },
          ],
          practiceQuestion: {
            question: 'أي عامل ليس مهماً في اختيار نوع البئر؟',
            options: ['شكل وسمك المخزون', 'التكلفة والعائد المتوقع', 'لون النفط المنتج', 'الموقع الجغرافي والقيود البيئية'],
            correctAnswer: 2,
          },
        },
        en: {
          title: 'Selecting the Right Well Type',
          explanation: `<section>
<h2 class="text-primary text-xl font-bold mb-4">🔷 Well Type Decision Process</h2>

<p class="mb-4">Choosing the appropriate well type is a critically important engineering and economic decision. The right decision can save millions of dollars and multiply production, while the wrong decision can lead to project failure.</p>

<p class="mb-4">Petroleum engineers must consider a comprehensive set of factors before making this crucial decision.</p>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 Geological Factors</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 1. Reservoir Thickness</h3>

<ul class="list-disc list-inside space-y-2 mb-4">
<li><strong>Thick reservoir (> 50 m):</strong> Vertical wells are often sufficient and appropriate</li>
<li><strong>Medium reservoir (10-50 m):</strong> Directional or horizontal wells may be better</li>
<li><strong>Thin reservoir (< 10 m):</strong> Horizontal wells are necessary for economic viability</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 2. Rock Permeability</h3>

<ul class="list-disc list-inside space-y-2 mb-4">
<li><strong>High permeability:</strong> Vertical wells may be sufficient</li>
<li><strong>Low permeability:</strong> Horizontal wells with hydraulic fracturing</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 3. Presence of Water or Gas Zones</h3>

<p class="mb-4">Water below the reservoir or gas above it affects well type selection to minimize coning problems.</p>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 Surface Factors</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 1. Location Nature</h3>

<ul class="list-disc list-inside space-y-2 mb-4">
<li><strong>Open land:</strong> Flexibility in choosing drilling location and well type</li>
<li><strong>Offshore:</strong> Directional drilling preferred to drill multiple wells from one platform</li>
<li><strong>Urban areas:</strong> Directional drilling to reach reservoirs under buildings</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 2. Environmental Constraints</h3>

<p class="mb-4">Nature reserves, water sources, and residential areas may limit direct drilling locations.</p>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 Economic Factors</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 1. Drilling Cost</h3>

<table class="w-full border-collapse my-4">
<tr class="bg-secondary/30">
<td class="border p-2 font-bold">Well Type</td>
<td class="border p-2 font-bold">Relative Cost</td>
</tr>
<tr>
<td class="border p-2">Vertical</td>
<td class="border p-2">1x (Reference)</td>
</tr>
<tr>
<td class="border p-2">Directional</td>
<td class="border p-2">1.3x - 1.5x</td>
</tr>
<tr>
<td class="border p-2">Horizontal</td>
<td class="border p-2">1.5x - 3x</td>
</tr>
<tr>
<td class="border p-2">Offshore</td>
<td class="border p-2">5x - 20x</td>
</tr>
</table>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 2. Expected Return</h3>

<p class="mb-4">Drilling cost must be compared with expected production. A horizontal well costs 2x but produces 4x = profitable decision.</p>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 Decision-Making Framework</h2>

<ul class="list-disc list-inside space-y-2 mb-4">
<li><strong>Step 1:</strong> Analyze reservoir data (thickness, permeability, pressure)</li>
<li><strong>Step 2:</strong> Evaluate surface location and constraints</li>
<li><strong>Step 3:</strong> Calculate costs for each option</li>
<li><strong>Step 4:</strong> Estimate production for each option</li>
<li><strong>Step 5:</strong> Calculate economic return</li>
<li><strong>Step 6:</strong> Assess risks</li>
<li><strong>Step 7:</strong> Make final decision</li>
</ul>

<div class="bg-destructive/10 border-l-4 border-destructive p-4 my-6">
<p class="text-destructive font-semibold">⚠️ Important Tip:</p>
<p>Don't always choose the cheapest option. Sometimes the more expensive well achieves better returns. The decision should be based on comprehensive economic analysis.</p>
</div>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Section Summary</h3>

<div class="bg-secondary/50 p-4 rounded-lg">
<p>Well type selection is a complex decision requiring balancing geological, surface, and economic factors. The goal is to maximize economic return while minimizing risks.</p>
</div>
</section>`,
          keyTerms: [
            { term: 'Economic Viability', definition: 'Analysis of whether the project will generate profits justifying costs' },
            { term: 'Rate of Return', definition: 'Ratio of profits to invested capital' },
            { term: 'Risk Analysis', definition: 'Study of failure probabilities and their impact on the project' },
            { term: 'Capital Cost', definition: 'Initial costs for drilling and completing the well' },
          ],
          practiceQuestion: {
            question: 'Which factor is NOT important in well type selection?',
            options: ['Reservoir shape and thickness', 'Cost and expected return', 'Produced oil color', 'Geographic location and environmental constraints'],
            correctAnswer: 2,
          },
        },
      },
    },
    {
      day: 6,
      type: 'quiz',
      content: {
        ar: {
          title: 'اختبار الأسبوع - أنواع الآبار',
          explanation: 'اختبر معرفتك بأنواع الآبار النفطية وخصائصها وتطبيقاتها.',
          keyTerms: [],
        },
        en: {
          title: 'Weekly Quiz - Well Types',
          explanation: 'Test your knowledge of oil well types, their characteristics, and applications.',
          keyTerms: [],
        },
      },
      quiz: {
        ar: [
          { question: 'ما هو البئر المائل؟', options: ['بئر يُحفر عمودياً فقط', 'بئر يُحفر بزاوية مع الخط العمودي', 'بئر للماء فقط', 'بئر سطحي'], correctAnswer: 1 },
          { question: 'لماذا تُستخدم الآبار الأفقية؟', options: ['لأنها أرخص', 'لزيادة مساحة التماس مع المخزون', 'لأنها أسهل حفراً', 'لأنها أقل عمقاً'], correctAnswer: 1 },
          { question: 'أي نوع من المنصات يُستخدم في المياه العميقة؟', options: ['منصة جاك أب', 'شبه غاطسة أو سفينة حفر', 'جهاز بري', 'منصة ثابتة'], correctAnswer: 1 },
          { question: 'ما هو البئر متعدد الفروع؟', options: ['بئر له عدة فروع من بئر رئيسي واحد', 'بئر عميق جداً', 'بئر أفقي فقط', 'بئر للحقن'], correctAnswer: 0 },
          { question: 'ما الميزة الرئيسية للحفر المائل؟', options: ['تكلفة أقل', 'الوصول لأهداف ليست مباشرة تحت موقع الحفر', 'سرعة أعلى', 'بساطة أكبر'], correctAnswer: 1 },
          { question: 'أين تُستخدم منصات جاك أب؟', options: ['المياه العميقة جداً', 'المياه الضحلة', 'البر فقط', 'القطب الشمالي'], correctAnswer: 1 },
          { question: 'ما هو الحفر الممتد (ERD)؟', options: ['آبار قصيرة جداً', 'آبار تمتد أفقياً لمسافات بعيدة', 'آبار سطحية', 'آبار عمودية عميقة'], correctAnswer: 1 },
          { question: 'لماذا نختار الآبار العمودية؟', options: ['إنتاج أعلى دائماً', 'أبسط وأرخص للمخزونات المناسبة', 'تغطي مساحة أكبر', 'أفضل للمخزونات الرقيقة'], correctAnswer: 1 },
          { question: 'ما يحد من عمق الحفر البحري؟', options: ['عمق المياه والتقنية المتاحة', 'جودة النفط', 'البعد عن الميناء فقط', 'الطقس فقط'], correctAnswer: 0 },
          { question: 'ما هو بئر التطوير؟', options: ['بئر استكشاف', 'بئر يُحفر في منطقة مثبتة للإنتاج', 'بئر اختبار', 'بئر مهجور'], correctAnswer: 1 },
        ],
        en: [
          { question: 'What is a directional well?', options: ['A well drilled only vertically', 'A well drilled at an angle to the vertical', 'A well for water only', 'A surface well'], correctAnswer: 1 },
          { question: 'Why are horizontal wells used?', options: ['Because they are cheaper', 'To increase contact area with the reservoir', 'Because they are easier to drill', 'Because they are shallower'], correctAnswer: 1 },
          { question: 'Which platform type is used in deep water?', options: ['Jack-up platform', 'Semi-submersible or drillship', 'Land rig', 'Fixed platform'], correctAnswer: 1 },
          { question: 'What is a multilateral well?', options: ['A well with multiple branches from one main wellbore', 'A very deep well', 'A horizontal well only', 'An injection well'], correctAnswer: 0 },
          { question: 'What is the main advantage of directional drilling?', options: ['Lower cost', 'Reaching targets not directly below drilling location', 'Higher speed', 'Greater simplicity'], correctAnswer: 1 },
          { question: 'Where are jack-up rigs used?', options: ['Very deep water', 'Shallow water', 'Land only', 'Arctic'], correctAnswer: 1 },
          { question: 'What is Extended Reach Drilling (ERD)?', options: ['Very short wells', 'Wells extending horizontally over long distances', 'Surface wells', 'Deep vertical wells'], correctAnswer: 1 },
          { question: 'Why choose vertical wells?', options: ['Always higher production', 'Simpler and cheaper for suitable reservoirs', 'Cover larger area', 'Better for thin reservoirs'], correctAnswer: 1 },
          { question: 'What limits offshore drilling depth?', options: ['Water depth and available technology', 'Oil quality', 'Distance from port only', 'Weather only'], correctAnswer: 0 },
          { question: 'What is a development well?', options: ['An exploration well', 'A well drilled in a proven area for production', 'A test well', 'An abandoned well'], correctAnswer: 1 },
        ],
      },
    },
    {
      day: 7,
      type: 'project',
      content: {
        ar: {
          title: 'مشروع الأسبوع - مقارنة أنواع الآبار',
          explanation: 'طبّق ما تعلمته عن أنواع الآبار في مشروع عملي.',
          keyTerms: [],
        },
        en: {
          title: 'Weekly Project - Well Type Comparison',
          explanation: 'Apply what you learned about well types in a practical project.',
          keyTerms: [],
        },
      },
      project: {
        ar: {
          title: 'تحليل ومقارنة أنواع الآبار النفطية',
          description: 'قم بإنشاء تقرير مقارنة شامل يوضح الفروقات بين أنواع الآبار المختلفة ومتى يُستخدم كل نوع.',
          instructions: [
            'قارن بين الآبار العمودية والمائلة والأفقية من حيث: التصميم، التكلفة، التطبيقات، المميزات والعيوب',
            'اشرح متى يُفضل استخدام كل نوع مع أمثلة عملية',
            'ناقش العوامل المؤثرة في اختيار نوع البئر (جيولوجية، اقتصادية، بيئية)',
            'قدم مثالاً على حقل نفطي واقعي واشرح لماذا تم اختيار نوع معين من الآبار',
            'اختم بتوصياتك الشخصية لمهندس يواجه قرار اختيار نوع البئر',
          ],
          submissionType: 'text',
        },
        en: {
          title: 'Analysis and Comparison of Oil Well Types',
          description: 'Create a comprehensive comparison report showing the differences between different well types and when each is used.',
          instructions: [
            'Compare vertical, directional, and horizontal wells in terms of: design, cost, applications, advantages, and disadvantages',
            'Explain when each type is preferred with practical examples',
            'Discuss factors affecting well type selection (geological, economic, environmental)',
            'Provide an example of a real oil field and explain why a specific well type was chosen',
            'Conclude with your personal recommendations for an engineer facing a well type selection decision',
          ],
          submissionType: 'text',
        },
      },
    },
  ],
};

const rigOverviewLesson: WeeklyLesson = {
  lessonId: 'rig',
  days: [
    { day: 1, type: 'learning', content: { ar: { title: 'مكونات جهاز الحفر الرئيسية', explanation: '<section class="mb-8"><h2 class="text-2xl font-bold text-blue-800 mb-6">🔷 نظرة عامة شاملة على جهاز الحفر</h2><div class="mb-6"><p class="text-lg leading-relaxed mb-4">جهاز الحفر (Drilling Rig) هو مجموعة متكاملة ومعقدة من المعدات والأنظمة الميكانيكية والكهربائية والهيدروليكية التي تعمل معاً بتناسق تام لتحقيق هدف واحد: إنشاء بئر نفطي أو غازي يخترق طبقات الأرض حتى يصل إلى المكمن الحاوي للهيدروكربونات. يعتبر جهاز الحفر من أكثر الآلات تعقيداً في الصناعة، ويمثل استثماراً ضخماً قد يتجاوز عشرات أو مئات الملايين من الدولارات.</p><p class="text-lg leading-relaxed mb-4">يتكون جهاز الحفر من خمسة أنظمة رئيسية متكاملة:</p></div><h3 class="text-xl font-bold text-orange-600 mb-4">🔶 الأنظمة الرئيسية الخمسة:</h3><div class="mb-6"><h4 class="font-bold text-lg mb-2">1. نظام الطاقة (Power System):</h4><ul class="list-disc pr-6 space-y-2 mb-4"><li><strong>الوظيفة:</strong> توليد وتوزيع الطاقة الكهربائية لجميع معدات الجهاز</li><li><strong>المكونات:</strong> محركات ديزل كبيرة (عادة 3-4 محركات)، مولدات كهربائية</li><li><strong>القدرة:</strong> 1000-3000 حصان حسب حجم الجهاز</li></ul><h4 class="font-bold text-lg mb-2">2. نظام الرفع (Hoisting System):</h4><ul class="list-disc pr-6 space-y-2 mb-4"><li><strong>الوظيفة:</strong> رفع وإنزال سلسلة الحفر والأنابيب</li><li><strong>المكونات:</strong> البرج، الرافعة، الكتلة المتنقلة، خطاف الرفع</li></ul><h4 class="font-bold text-lg mb-2">3. نظام الدوران (Rotary System):</h4><ul class="list-disc pr-6 space-y-2 mb-4"><li><strong>الوظيفة:</strong> تدوير سلسلة الحفر ورأس الحفر</li><li><strong>المكونات:</strong> الطاولة الدوارة أو المحرك العلوي</li></ul><h4 class="font-bold text-lg mb-2">4. نظام دوران السوائل (Circulating System):</h4><ul class="list-disc pr-6 space-y-2 mb-4"><li><strong>الوظيفة:</strong> ضخ ومعالجة سائل الحفر</li><li><strong>المكونات:</strong> مضخات الطين، خزانات الطين، معدات التحكم بالمواد الصلبة</li></ul><h4 class="font-bold text-lg mb-2">5. نظام التحكم بالبئر (Well Control):</h4><ul class="list-disc pr-6 space-y-2 mb-4"><li><strong>الوظيفة:</strong> منع الانفجارات والسيطرة على ضغوط البئر</li><li><strong>المكونات:</strong> مانعات الانفجار (BOPs)، الصمامات</li></ul></div><div class="bg-red-50 border-r-4 border-red-500 p-4 mb-6"><h4 class="font-bold text-red-700 mb-2">⚠️ ملاحظة مهمة:</h4><p>تعطل أي نظام من الأنظمة الخمسة يوقف عملية الحفر بالكامل.</p></div></section>', keyTerms: [{ term: 'جهاز الحفر', definition: 'مجموعة متكاملة من المعدات لحفر الآبار' }, { term: 'نظام الطاقة', definition: 'المحركات والمولدات التي توفر الكهرباء' }, { term: 'نظام الرفع', definition: 'المعدات المسؤولة عن رفع وإنزال الأنابيب' }, { term: 'نظام الدوران', definition: 'المعدات التي تدير سلسلة الحفر' }, { term: 'نظام التحكم بالبئر', definition: 'معدات منع الانفجارات والسيطرة على الضغط' }], practiceQuestion: { question: 'كم عدد الأنظمة الرئيسية في جهاز الحفر؟', options: ['ثلاثة أنظمة', 'أربعة أنظمة', 'خمسة أنظمة', 'ستة أنظمة'], correctAnswer: 2 } }, en: { title: 'Main Drilling Rig Components', explanation: '<section class="mb-8"><h2 class="text-2xl font-bold text-blue-800 mb-6">🔷 Comprehensive Overview of Drilling Rigs</h2><div class="mb-6"><p class="text-lg leading-relaxed mb-4">A Drilling Rig is an integrated and complex collection of mechanical, electrical, and hydraulic equipment and systems that work together in perfect harmony to achieve a single goal: creating an oil or gas well that penetrates Earth layers until reaching the hydrocarbon-bearing reservoir. The drilling rig is one of the most complex machines in the industry, representing a massive investment that may exceed tens or hundreds of millions of dollars.</p><p class="text-lg leading-relaxed mb-4">A drilling rig consists of five main integrated systems:</p></div><h3 class="text-xl font-bold text-orange-600 mb-4">🔶 The Five Main Systems:</h3><div class="mb-6"><h4 class="font-bold text-lg mb-2">1. Power System:</h4><ul class="list-disc pl-6 space-y-2 mb-4"><li><strong>Function:</strong> Generate and distribute electrical power to all rig equipment</li><li><strong>Components:</strong> Large diesel engines (typically 3-4), electric generators</li><li><strong>Capacity:</strong> 1,000-3,000 horsepower depending on rig size</li></ul><h4 class="font-bold text-lg mb-2">2. Hoisting System:</h4><ul class="list-disc pl-6 space-y-2 mb-4"><li><strong>Function:</strong> Raise and lower drill string and casing</li><li><strong>Components:</strong> Derrick, Drawworks, Traveling Block, Hook</li></ul><h4 class="font-bold text-lg mb-2">3. Rotary System:</h4><ul class="list-disc pl-6 space-y-2 mb-4"><li><strong>Function:</strong> Rotate drill string and bit</li><li><strong>Components:</strong> Rotary Table or Top Drive</li></ul><h4 class="font-bold text-lg mb-2">4. Circulating System:</h4><ul class="list-disc pl-6 space-y-2 mb-4"><li><strong>Function:</strong> Pump and treat drilling fluid</li><li><strong>Components:</strong> Mud pumps, mud tanks, solids control equipment</li></ul><h4 class="font-bold text-lg mb-2">5. Well Control System:</h4><ul class="list-disc pl-6 space-y-2 mb-4"><li><strong>Function:</strong> Prevent blowouts and control well pressures</li><li><strong>Components:</strong> Blowout Preventers (BOPs), valves</li></ul></div><div class="bg-red-50 border-l-4 border-red-500 p-4 mb-6"><h4 class="font-bold text-red-700 mb-2">⚠️ Important Note:</h4><p>Failure of any of the five systems stops the entire drilling operation.</p></div></section>', keyTerms: [{ term: 'Drilling Rig', definition: 'Integrated equipment assembly for drilling wells' }, { term: 'Power System', definition: 'Engines and generators providing electricity' }, { term: 'Hoisting System', definition: 'Equipment for raising and lowering pipes' }, { term: 'Rotary System', definition: 'Equipment that rotates the drill string' }, { term: 'Well Control System', definition: 'Equipment to prevent blowouts and control pressure' }], practiceQuestion: { question: 'How many main systems are there in a drilling rig?', options: ['Three systems', 'Four systems', 'Five systems', 'Six systems'], correctAnswer: 2 } } } },
    { day: 2, type: 'learning', content: { ar: { title: 'نظام الرفع والبرج', explanation: '<section class="mb-8"><h2 class="text-2xl font-bold text-blue-800 mb-6">🔷 نظام الرفع - العمود الفقري لجهاز الحفر</h2><div class="mb-6"><p class="text-lg leading-relaxed mb-4">نظام الرفع (Hoisting System) هو القلب النابض لجهاز الحفر، المسؤول عن جميع عمليات الرفع والإنزال للأنابيب والمعدات. يتعامل مع أحمال هائلة قد تصل إلى مئات الأطنان.</p></div><h3 class="text-xl font-bold text-orange-600 mb-4">🔶 مكونات نظام الرفع:</h3><div class="mb-6"><h4 class="font-bold text-lg mb-2">1. البرج (Derrick/Mast):</h4><ul class="list-disc pr-6 space-y-2 mb-4"><li><strong>الارتفاع:</strong> 80-200 قدم (24-60 متر)</li><li><strong>الأنواع:</strong> البرج القياسي (ثابت) أو الصاري (قابل للطي)</li><li><strong>قدرة التحمل:</strong> تصل إلى 2 مليون رطل</li></ul><h4 class="font-bold text-lg mb-2">2. الرافعة (Drawworks):</h4><ul class="list-disc pr-6 space-y-2 mb-4"><li><strong>الموقع:</strong> على أرضية الحفر</li><li><strong>القدرة:</strong> 500-3000 حصان</li><li><strong>الوظيفة:</strong> لف وفك كابل الحفر للرفع والإنزال</li></ul><h4 class="font-bold text-lg mb-2">3. الكتلة الثابتة (Crown Block):</h4><ul class="list-disc pr-6 space-y-2 mb-4"><li><strong>الموقع:</strong> أعلى البرج (القمة)</li><li><strong>التركيب:</strong> مجموعة بكرات ثابتة (4-8 بكرات)</li></ul><h4 class="font-bold text-lg mb-2">4. الكتلة المتنقلة (Traveling Block):</h4><ul class="list-disc pr-6 space-y-2 mb-4"><li><strong>الموقع:</strong> تتحرك صعوداً وهبوطاً داخل البرج</li><li><strong>الوزن:</strong> قد يصل إلى 25 طن</li></ul><h4 class="font-bold text-lg mb-2">5. كابل الحفر (Drilling Line):</h4><ul class="list-disc pr-6 space-y-2 mb-4"><li><strong>المادة:</strong> سلك فولاذي مجدول</li><li><strong>القطر:</strong> 1-1.5 بوصة</li><li><strong>عدد الخطوط:</strong> 8-12 خط لتوزيع الحمل</li></ul></div><div class="bg-blue-50 border-r-4 border-blue-500 p-4 mb-6"><h4 class="font-bold text-blue-700 mb-2">💡 مبدأ العمل:</h4><p>يعمل النظام على مبدأ البكرة المركبة - مع 10 خطوط: رفع 500,000 رطل يتطلب 50,000 رطل فقط على الكابل.</p></div></section>', keyTerms: [{ term: 'البرج (Derrick)', definition: 'الهيكل الفولاذي الطويل الذي يدعم نظام الرفع' }, { term: 'الرافعة (Drawworks)', definition: 'المعدة الرئيسية التي تلف وتفك كابل الحفر' }, { term: 'الكتلة الثابتة (Crown Block)', definition: 'مجموعة البكرات في أعلى البرج' }, { term: 'الكتلة المتنقلة (Traveling Block)', definition: 'البكرات المتحركة التي تحمل سلسلة الحفر' }], practiceQuestion: { question: 'أين تقع الكتلة الثابتة (Crown Block)؟', options: ['على أرضية الحفر', 'في أعلى البرج', 'تحت الأرض', 'في غرفة التحكم'], correctAnswer: 1 } }, en: { title: 'Hoisting System and Derrick', explanation: '<section class="mb-8"><h2 class="text-2xl font-bold text-blue-800 mb-6">🔷 Hoisting System - The Backbone of the Drilling Rig</h2><div class="mb-6"><p class="text-lg leading-relaxed mb-4">The Hoisting System is the beating heart of the drilling rig, responsible for all lifting and lowering operations of pipes and equipment. This system handles enormous loads that can reach hundreds of tons.</p></div><h3 class="text-xl font-bold text-orange-600 mb-4">🔶 Hoisting System Components:</h3><div class="mb-6"><h4 class="font-bold text-lg mb-2">1. Derrick/Mast:</h4><ul class="list-disc pl-6 space-y-2 mb-4"><li><strong>Height:</strong> 80-200 feet (24-60 meters)</li><li><strong>Types:</strong> Standard Derrick (fixed) or Mast (foldable)</li><li><strong>Load Capacity:</strong> Up to 2 million pounds</li></ul><h4 class="font-bold text-lg mb-2">2. Drawworks:</h4><ul class="list-disc pl-6 space-y-2 mb-4"><li><strong>Location:</strong> On the rig floor</li><li><strong>Capacity:</strong> 500-3,000 HP</li><li><strong>Function:</strong> Wind and unwind drilling line for lifting/lowering</li></ul><h4 class="font-bold text-lg mb-2">3. Crown Block:</h4><ul class="list-disc pl-6 space-y-2 mb-4"><li><strong>Location:</strong> Top of the derrick (crown)</li><li><strong>Configuration:</strong> Set of fixed sheaves (4-8 sheaves)</li></ul><h4 class="font-bold text-lg mb-2">4. Traveling Block:</h4><ul class="list-disc pl-6 space-y-2 mb-4"><li><strong>Location:</strong> Moves up and down inside derrick</li><li><strong>Weight:</strong> Can reach up to 25 tons</li></ul><h4 class="font-bold text-lg mb-2">5. Drilling Line:</h4><ul class="list-disc pl-6 space-y-2 mb-4"><li><strong>Material:</strong> Braided steel wire</li><li><strong>Diameter:</strong> 1-1.5 inches</li><li><strong>Number of Lines:</strong> 8-12 lines to distribute load</li></ul></div><div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6"><h4 class="font-bold text-blue-700 mb-2">💡 Operating Principle:</h4><p>The system works on the Block and Tackle principle - with 10 lines: lifting 500,000 lbs requires only 50,000 lbs on the line.</p></div></section>', keyTerms: [{ term: 'Derrick', definition: 'The tall steel structure supporting the hoisting system' }, { term: 'Drawworks', definition: 'Main equipment that winds and unwinds drilling line' }, { term: 'Crown Block', definition: 'Set of sheaves at the top of the derrick' }, { term: 'Traveling Block', definition: 'Moving sheaves that carry the drill string' }], practiceQuestion: { question: 'Where is the Crown Block located?', options: ['On the rig floor', 'At the top of the derrick', 'Underground', 'In the control room'], correctAnswer: 1 } } } },
    { day: 3, type: 'learning', content: { ar: { title: 'نظام دوران السوائل', explanation: '<section class="mb-8"><h2 class="text-2xl font-bold text-blue-800 mb-6">🔷 نظام دوران السوائل - شريان الحياة</h2><div class="mb-6"><p class="text-lg leading-relaxed mb-4">نظام دوران السوائل (Circulating System) يضمن تدفق سائل الحفر (الطين) في دورة مستمرة من السطح إلى قاع البئر وعودته.</p></div><h3 class="text-xl font-bold text-orange-600 mb-4">🔶 وظائف سائل الحفر:</h3><ol class="list-decimal pr-6 space-y-2 mb-6"><li><strong>إزالة الفتات:</strong> حمل قطع الصخور من قاع البئر</li><li><strong>تبريد رأس الحفر:</strong> امتصاص الحرارة الناتجة عن الاحتكاك</li><li><strong>التحكم بالضغط:</strong> موازنة ضغط التكوينات</li><li><strong>تثبيت جدار البئر:</strong> تشكيل طبقة كعكة الطين</li><li><strong>تعليق الفتات:</strong> إبقاء الفتات معلقاً عند توقف الضخ</li></ol><h3 class="text-xl font-bold text-orange-600 mb-4">🔶 مكونات النظام:</h3><div class="mb-6"><h4 class="font-bold text-lg mb-2">1. مضخات الطين (Mud Pumps):</h4><ul class="list-disc pr-6 space-y-2 mb-4"><li><strong>الأنواع:</strong> مضخات ثلاثية المكابس (Triplex)</li><li><strong>القدرة:</strong> 1000-2000 حصان</li><li><strong>الضغط:</strong> حتى 7500 psi</li><li><strong>معدل التدفق:</strong> 200-1000 غالون/دقيقة</li></ul><h4 class="font-bold text-lg mb-2">2. خزانات الطين:</h4><ul class="list-disc pr-6 space-y-2 mb-4"><li>خزان السحب (Suction Tank)</li><li>خزان الخلط (Mixing Tank)</li><li>خزان الاحتياط (Reserve Tank)</li></ul><h4 class="font-bold text-lg mb-2">3. نظام التحكم بالمواد الصلبة:</h4><ul class="list-disc pr-6 space-y-2 mb-4"><li><strong>المناخل الهزازة (Shale Shakers):</strong> إزالة الفتات الكبير</li><li><strong>مزيلات الغازات (Degassers):</strong> إزالة الغازات المذابة</li><li><strong>مزيلات الرمال (Desanders):</strong> إزالة الجسيمات المتوسطة</li><li><strong>مزيلات الطمي (Desilters):</strong> إزالة الجسيمات الدقيقة</li><li><strong>أجهزة الطرد المركزي (Centrifuges):</strong> إزالة الجسيمات الأدق</li></ul></div><div class="bg-blue-50 border-r-4 border-blue-500 p-4 mb-6"><h4 class="font-bold text-blue-700 mb-2">🔄 مسار دورة الطين:</h4><p>الخزانات ← المضخات ← سلسلة الحفر ← رأس الحفر ← الفراغ الحلقي ← المناخل ← الخزانات</p></div></section>', keyTerms: [{ term: 'مضخات الطين', definition: 'المضخات القوية التي تدفع سائل الحفر' }, { term: 'المناخل الهزازة', definition: 'أول معدة لفصل الفتات من الطين' }, { term: 'الفراغ الحلقي', definition: 'المسافة بين أنابيب الحفر وجدار البئر' }, { term: 'كعكة الطين', definition: 'الطبقة التي يتركها الطين على جدار البئر' }], practiceQuestion: { question: 'ما هي أول معدة يمر بها الطين الخارج من البئر؟', options: ['الخزانات', 'المضخات', 'المناخل الهزازة', 'أجهزة الطرد المركزي'], correctAnswer: 2 } }, en: { title: 'Circulating System', explanation: '<section class="mb-8"><h2 class="text-2xl font-bold text-blue-800 mb-6">🔷 Circulating System - The Lifeline</h2><div class="mb-6"><p class="text-lg leading-relaxed mb-4">The Circulating System ensures continuous flow of drilling fluid (mud) from surface to bottom of the well and back.</p></div><h3 class="text-xl font-bold text-orange-600 mb-4">🔶 Drilling Mud Functions:</h3><ol class="list-decimal pl-6 space-y-2 mb-6"><li><strong>Cuttings Removal:</strong> Carrying rock pieces from bottom</li><li><strong>Bit Cooling:</strong> Absorbing friction heat</li><li><strong>Pressure Control:</strong> Balancing formation pressures</li><li><strong>Wellbore Stabilization:</strong> Forming mud cake</li><li><strong>Cuttings Suspension:</strong> Keeping cuttings suspended when circulation stops</li></ol><h3 class="text-xl font-bold text-orange-600 mb-4">🔶 System Components:</h3><div class="mb-6"><h4 class="font-bold text-lg mb-2">1. Mud Pumps:</h4><ul class="list-disc pl-6 space-y-2 mb-4"><li><strong>Types:</strong> Triplex pumps</li><li><strong>Capacity:</strong> 1000-2000 HP</li><li><strong>Pressure:</strong> Up to 7500 psi</li><li><strong>Flow Rate:</strong> 200-1000 GPM</li></ul><h4 class="font-bold text-lg mb-2">2. Mud Tanks:</h4><ul class="list-disc pl-6 space-y-2 mb-4"><li>Suction Tank</li><li>Mixing Tank</li><li>Reserve Tank</li></ul><h4 class="font-bold text-lg mb-2">3. Solids Control System:</h4><ul class="list-disc pl-6 space-y-2 mb-4"><li><strong>Shale Shakers:</strong> Remove large cuttings</li><li><strong>Degassers:</strong> Remove dissolved gases</li><li><strong>Desanders:</strong> Remove medium particles</li><li><strong>Desilters:</strong> Remove fine particles</li><li><strong>Centrifuges:</strong> Remove finest particles</li></ul></div><div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6"><h4 class="font-bold text-blue-700 mb-2">🔄 Mud Circulation Path:</h4><p>Tanks ← Pumps ← Drill String ← Bit ← Annulus ← Shakers ← Tanks</p></div></section>', keyTerms: [{ term: 'Mud Pumps', definition: 'Powerful pumps driving drilling fluid' }, { term: 'Shale Shakers', definition: 'First equipment to separate cuttings from mud' }, { term: 'Annulus', definition: 'Space between drill pipe and wellbore wall' }, { term: 'Mud Cake', definition: 'Layer mud deposits on wellbore wall' }], practiceQuestion: { question: 'What is the first equipment mud passes through when exiting the well?', options: ['Tanks', 'Pumps', 'Shale shakers', 'Centrifuges'], correctAnswer: 2 } } } },
    { day: 4, type: 'learning', content: { ar: { title: 'أنواع أجهزة الحفر', explanation: '<section class="mb-8"><h2 class="text-2xl font-bold text-blue-800 mb-6">🔷 التصنيف الشامل لأجهزة الحفر</h2><div class="mb-6"><p class="text-lg leading-relaxed mb-4">تتنوع أجهزة الحفر حسب بيئة العمل والقدرات والتصميم. اختيار النوع المناسب يعتمد على: موقع البئر، العمق المستهدف، الظروف الجيولوجية، والميزانية.</p></div><h3 class="text-xl font-bold text-orange-600 mb-4">🔶 أجهزة الحفر البرية (Land Rigs):</h3><div class="mb-6"><h4 class="font-bold text-lg mb-2">1. الأجهزة التقليدية:</h4><ul class="list-disc pr-6 space-y-2 mb-4"><li>العمق: 25,000+ قدم</li><li>للآبار العميقة والمعقدة</li></ul><h4 class="font-bold text-lg mb-2">2. الأجهزة المحمولة:</h4><ul class="list-disc pr-6 space-y-2 mb-4"><li>العمق: 5,000-15,000 قدم</li><li>سريعة النقل والتركيب</li></ul><h4 class="font-bold text-lg mb-2">3. أجهزة الصيانة:</h4><ul class="list-disc pr-6 space-y-2 mb-4"><li>أصغر وأخف</li><li>لإصلاح وصيانة الآبار</li></ul></div><h3 class="text-xl font-bold text-orange-600 mb-4">🔶 أجهزة الحفر البحرية (Offshore):</h3><div class="mb-6"><h4 class="font-bold text-lg mb-2">1. جاك-أب (Jack-up):</h4><ul class="list-disc pr-6 space-y-2 mb-4"><li>عمق المياه: حتى 400 قدم</li><li>أرجل قابلة للإنزال على القاع</li><li>التكلفة: 100,000-200,000 $/يوم</li></ul><h4 class="font-bold text-lg mb-2">2. شبه الغاطسة (Semi-submersible):</h4><ul class="list-disc pr-6 space-y-2 mb-4"><li>عمق المياه: 200-10,000+ قدم</li><li>طوافات مغمورة جزئياً للاستقرار</li><li>التكلفة: 200,000-500,000 $/يوم</li></ul><h4 class="font-bold text-lg mb-2">3. سفن الحفر (Drillships):</h4><ul class="list-disc pr-6 space-y-2 mb-4"><li>عمق المياه: 12,000+ قدم</li><li>قدرة عالية على التنقل</li><li>نظام تحديد موقع ديناميكي (DP)</li><li>التكلفة: 400,000-700,000 $/يوم</li></ul><h4 class="font-bold text-lg mb-2">4. المنصات الثابتة:</h4><ul class="list-disc pr-6 space-y-2 mb-4"><li>هيكل ثابت على القاع</li><li>للإنتاج طويل الأمد</li></ul></div></section>', keyTerms: [{ term: 'جاك-أب', definition: 'منصة بحرية ترفع نفسها بأرجل' }, { term: 'شبه غاطسة', definition: 'منصة تطفو بطوافات مغمورة جزئياً' }, { term: 'سفينة حفر', definition: 'سفينة مجهزة للحفر في المياه العميقة' }, { term: 'تحديد الموقع الديناميكي', definition: 'نظام حاسوبي للحفاظ على موقع السفينة بدون مراسي' }], practiceQuestion: { question: 'أي نوع يعمل في مياه أعمق من 10,000 قدم؟', options: ['جاك-أب', 'جهاز بري', 'سفينة حفر', 'جهاز صيانة'], correctAnswer: 2 } }, en: { title: 'Types of Drilling Rigs', explanation: '<section class="mb-8"><h2 class="text-2xl font-bold text-blue-800 mb-6">🔷 Comprehensive Classification of Drilling Rigs</h2><div class="mb-6"><p class="text-lg leading-relaxed mb-4">Drilling rigs vary according to work environment, capabilities, and design. Selection depends on: well location, target depth, geological conditions, and budget.</p></div><h3 class="text-xl font-bold text-orange-600 mb-4">🔶 Land Rigs:</h3><div class="mb-6"><h4 class="font-bold text-lg mb-2">1. Conventional Rigs:</h4><ul class="list-disc pl-6 space-y-2 mb-4"><li>Depth: 25,000+ feet</li><li>For deep and complex wells</li></ul><h4 class="font-bold text-lg mb-2">2. Portable Rigs:</h4><ul class="list-disc pl-6 space-y-2 mb-4"><li>Depth: 5,000-15,000 feet</li><li>Quick transport and setup</li></ul><h4 class="font-bold text-lg mb-2">3. Workover Rigs:</h4><ul class="list-disc pl-6 space-y-2 mb-4"><li>Smaller and lighter</li><li>For well repair and maintenance</li></ul></div><h3 class="text-xl font-bold text-orange-600 mb-4">🔶 Offshore Rigs:</h3><div class="mb-6"><h4 class="font-bold text-lg mb-2">1. Jack-up:</h4><ul class="list-disc pl-6 space-y-2 mb-4"><li>Water depth: Up to 400 feet</li><li>Retractable legs to seabed</li><li>Cost: $100,000-200,000/day</li></ul><h4 class="font-bold text-lg mb-2">2. Semi-submersible:</h4><ul class="list-disc pl-6 space-y-2 mb-4"><li>Water depth: 200-10,000+ feet</li><li>Partially submerged pontoons for stability</li><li>Cost: $200,000-500,000/day</li></ul><h4 class="font-bold text-lg mb-2">3. Drillships:</h4><ul class="list-disc pl-6 space-y-2 mb-4"><li>Water depth: 12,000+ feet</li><li>High mobility</li><li>Dynamic Positioning (DP) system</li><li>Cost: $400,000-700,000/day</li></ul><h4 class="font-bold text-lg mb-2">4. Fixed Platforms:</h4><ul class="list-disc pl-6 space-y-2 mb-4"><li>Fixed structure on seabed</li><li>For long-term production</li></ul></div></section>', keyTerms: [{ term: 'Jack-up', definition: 'Offshore platform that raises itself on legs' }, { term: 'Semi-submersible', definition: 'Platform floating on partially submerged pontoons' }, { term: 'Drillship', definition: 'Ship equipped for deepwater drilling' }, { term: 'Dynamic Positioning', definition: 'Computer system maintaining vessel position without anchors' }], practiceQuestion: { question: 'Which type operates in water deeper than 10,000 feet?', options: ['Jack-up', 'Land rig', 'Drillship', 'Workover rig'], correctAnswer: 2 } } } },
    { day: 5, type: 'learning', content: { ar: { title: 'طاقم جهاز الحفر', explanation: '<section class="mb-8"><h2 class="text-2xl font-bold text-blue-800 mb-6">🔷 فريق العمل على جهاز الحفر</h2><div class="mb-6"><p class="text-lg leading-relaxed mb-4">يعمل على جهاز الحفر فريق متكامل من المتخصصين. يعمل الفريق بنظام الورديات (12 ساعة عمل / 12 ساعة راحة) على مدار الساعة.</p></div><h3 class="text-xl font-bold text-orange-600 mb-4">🔶 الهيكل التنظيمي:</h3><div class="mb-6"><h4 class="font-bold text-lg mb-2">1. ممثل الشركة (Company Man):</h4><ul class="list-disc pr-6 space-y-2 mb-4"><li>أعلى سلطة من الشركة المالكة للبئر</li><li>اتخاذ القرارات الرئيسية</li><li>مراقبة التكاليف والجدول</li></ul><h4 class="font-bold text-lg mb-2">2. مدير الجهاز (Toolpusher):</h4><ul class="list-disc pr-6 space-y-2 mb-4"><li>المسؤول الأول عن الجهاز وطاقمه</li><li>إدارة جميع عمليات الجهاز</li></ul><h4 class="font-bold text-lg mb-2">3. المشرف/الحفّار (Driller):</h4><ul class="list-disc pr-6 space-y-2 mb-4"><li>قائد الوردية</li><li>يشغل معدات الحفر من كابينة التحكم</li><li>مراقبة جميع معايير الحفر</li><li>اتخاذ قرارات فورية في الطوارئ</li></ul><h4 class="font-bold text-lg mb-2">4. مساعد المشرف (Derrickhand):</h4><ul class="list-disc pr-6 space-y-2 mb-4"><li>يعمل في أعلى البرج أثناء السحب</li><li>مراقبة خزانات الطين</li></ul><h4 class="font-bold text-lg mb-2">5. عمال الأرضية (Roughnecks):</h4><ul class="list-disc pr-6 space-y-2 mb-4"><li>2-4 عمال لكل وردية</li><li>ربط وفك الأنابيب</li><li>الصيانة اليومية</li></ul><h4 class="font-bold text-lg mb-2">6. عامل الخدمات (Roustabout):</h4><ul class="list-disc pr-6 space-y-2 mb-4"><li>مستوى المبتدئين</li><li>النظافة ونقل المواد</li></ul></div><h3 class="text-xl font-bold text-orange-600 mb-4">🔶 فرق متخصصة أخرى:</h3><ul class="list-disc pr-6 space-y-2 mb-4"><li>مهندسو الطين</li><li>مهندسو القياس (MWD/LWD)</li><li>مهندسو الاتجاه</li><li>جيولوجيو الموقع</li></ul></section>', keyTerms: [{ term: 'ممثل الشركة', definition: 'أعلى سلطة من الشركة المالكة' }, { term: 'المشرف (Driller)', definition: 'يشغل معدات الحفر ويقود الوردية' }, { term: 'مساعد المشرف', definition: 'يعمل في أعلى البرج ويراقب الطين' }, { term: 'عامل الأرضية', definition: 'يعمل على أرضية الحفر' }], practiceQuestion: { question: 'من يشغل معدات الحفر من كابينة التحكم؟', options: ['ممثل الشركة', 'مدير الجهاز', 'المشرف (Driller)', 'عامل الأرضية'], correctAnswer: 2 } }, en: { title: 'Drilling Rig Crew', explanation: '<section class="mb-8"><h2 class="text-2xl font-bold text-blue-800 mb-6">🔷 The Drilling Rig Team</h2><div class="mb-6"><p class="text-lg leading-relaxed mb-4">A drilling rig operates with an integrated team of specialists. The team works in shifts (12 hours on / 12 hours off) around the clock.</p></div><h3 class="text-xl font-bold text-orange-600 mb-4">🔶 Organizational Structure:</h3><div class="mb-6"><h4 class="font-bold text-lg mb-2">1. Company Man:</h4><ul class="list-disc pl-6 space-y-2 mb-4"><li>Highest authority from well owner</li><li>Making major decisions</li><li>Monitoring costs and schedule</li></ul><h4 class="font-bold text-lg mb-2">2. Toolpusher:</h4><ul class="list-disc pl-6 space-y-2 mb-4"><li>Primary person responsible for rig and crew</li><li>Managing all rig operations</li></ul><h4 class="font-bold text-lg mb-2">3. Driller:</h4><ul class="list-disc pl-6 space-y-2 mb-4"><li>Shift leader</li><li>Operates drilling equipment from control cabin</li><li>Monitors all drilling parameters</li><li>Makes immediate decisions in emergencies</li></ul><h4 class="font-bold text-lg mb-2">4. Derrickhand:</h4><ul class="list-disc pl-6 space-y-2 mb-4"><li>Works at top of derrick during tripping</li><li>Monitors mud tanks</li></ul><h4 class="font-bold text-lg mb-2">5. Roughnecks:</h4><ul class="list-disc pl-6 space-y-2 mb-4"><li>2-4 workers per shift</li><li>Making up and breaking out pipe</li><li>Daily maintenance</li></ul><h4 class="font-bold text-lg mb-2">6. Roustabout:</h4><ul class="list-disc pl-6 space-y-2 mb-4"><li>Entry level</li><li>Cleaning and material handling</li></ul></div><h3 class="text-xl font-bold text-orange-600 mb-4">🔶 Other Specialized Teams:</h3><ul class="list-disc pl-6 space-y-2 mb-4"><li>Mud Engineers</li><li>MWD/LWD Engineers</li><li>Directional Drillers</li><li>Wellsite Geologists</li></ul></section>', keyTerms: [{ term: 'Company Man', definition: 'Highest authority from well owner' }, { term: 'Driller', definition: 'Operates drilling equipment and leads shift' }, { term: 'Derrickhand', definition: 'Works at top of derrick and monitors mud' }, { term: 'Roughneck', definition: 'Works on drill floor' }], practiceQuestion: { question: 'Who operates drilling equipment from the control cabin?', options: ['Company Man', 'Rig Manager', 'Driller', 'Roughneck'], correctAnswer: 2 } } } },
    { day: 6, type: 'quiz', content: { ar: { title: 'اختبار الأسبوع: جهاز الحفر', explanation: 'اختبر معرفتك بمكونات جهاز الحفر وأنظمته وأنواعه وطاقمه.', keyTerms: [] }, en: { title: 'Weekly Quiz: Drilling Rig', explanation: 'Test your knowledge of drilling rig components, systems, types, and crew.', keyTerms: [] } }, quiz: { ar: [{ question: 'كم عدد الأنظمة الرئيسية في جهاز الحفر؟', options: ['3 أنظمة', '4 أنظمة', '5 أنظمة', '6 أنظمة'], correctAnswer: 2 }, { question: 'أين تقع الكتلة الثابتة (Crown Block)؟', options: ['على الأرض', 'في أعلى البرج', 'في منتصف البرج', 'تحت الأرض'], correctAnswer: 1 }, { question: 'ما هي أول معدة يمر بها الطين العائد من البئر؟', options: ['المضخات', 'الخزانات', 'المناخل الهزازة', 'أجهزة الطرد المركزي'], correctAnswer: 2 }, { question: 'أي نوع من الأجهزة البحرية يعمل في المياه الضحلة فقط؟', options: ['سفينة الحفر', 'شبه الغاطسة', 'جاك-أب', 'المنصة الثابتة'], correctAnswer: 2 }, { question: 'من يشغل معدات الحفر من كابينة التحكم؟', options: ['ممثل الشركة', 'مدير الجهاز', 'المشرف (Driller)', 'عامل الأرضية'], correctAnswer: 2 }, { question: 'ما وظيفة الرافعة (Drawworks)؟', options: ['ضخ الطين', 'رفع وإنزال الأنابيب', 'دوران رأس الحفر', 'تخزين الطين'], correctAnswer: 1 }, { question: 'كم ساعة تستمر الوردية عادة؟', options: ['6 ساعات', '8 ساعات', '12 ساعة', '24 ساعة'], correctAnswer: 2 }, { question: 'ما هو نظام تحديد الموقع الديناميكي (DP)؟', options: ['نظام حفر', 'نظام للحفاظ على موقع السفينة بدون مراسي', 'نظام ضخ', 'نظام تبريد'], correctAnswer: 1 }, { question: 'أين يعمل مساعد المشرف (Derrickhand) أثناء السحب؟', options: ['في كابينة التحكم', 'على الأرض', 'في أعلى البرج', 'في غرفة المضخات'], correctAnswer: 2 }, { question: 'ما هو الفراغ الحلقي (Annulus)؟', options: ['داخل أنابيب الحفر', 'المسافة بين الأنابيب وجدار البئر', 'خزان الطين', 'قمة البرج'], correctAnswer: 1 }], en: [{ question: 'How many main systems are there in a drilling rig?', options: ['3 systems', '4 systems', '5 systems', '6 systems'], correctAnswer: 2 }, { question: 'Where is the Crown Block located?', options: ['On the ground', 'At the top of the derrick', 'In the middle of the derrick', 'Underground'], correctAnswer: 1 }, { question: 'What is the first equipment mud passes through when returning from the well?', options: ['Pumps', 'Tanks', 'Shale shakers', 'Centrifuges'], correctAnswer: 2 }, { question: 'Which offshore rig type works only in shallow water?', options: ['Drillship', 'Semi-submersible', 'Jack-up', 'Fixed platform'], correctAnswer: 2 }, { question: 'Who operates drilling equipment from the control cabin?', options: ['Company Man', 'Rig Manager', 'Driller', 'Roughneck'], correctAnswer: 2 }, { question: 'What is the function of the Drawworks?', options: ['Pump mud', 'Raise and lower pipes', 'Rotate the bit', 'Store mud'], correctAnswer: 1 }, { question: 'How many hours does a typical rig shift last?', options: ['6 hours', '8 hours', '12 hours', '24 hours'], correctAnswer: 2 }, { question: 'What is Dynamic Positioning (DP)?', options: ['A drilling system', 'A system to maintain vessel position without anchors', 'A pumping system', 'A cooling system'], correctAnswer: 1 }, { question: 'Where does the Derrickhand work during tripping?', options: ['In control cabin', 'On the ground', 'At the top of the derrick', 'In pump room'], correctAnswer: 2 }, { question: 'What is the Annulus?', options: ['Inside drill pipe', 'Space between pipe and wellbore wall', 'Mud tank', 'Top of derrick'], correctAnswer: 1 }] } },
    { day: 7, type: 'project', content: { ar: { title: 'مشروع الأسبوع', explanation: 'قم بإعداد تقرير شامل عن جهاز الحفر.', keyTerms: [] }, en: { title: 'Weekly Project', explanation: 'Prepare a comprehensive report about a drilling rig.', keyTerms: [] } }, project: { ar: { title: 'تقرير تفصيلي عن جهاز الحفر', description: 'قم بإعداد تقرير شامل يصف جهاز حفر ومكوناته وأنظمته وطاقمه.', instructions: ['اختر نوعاً من أجهزة الحفر واشرح سبب اختيارك', 'صف الأنظمة الخمسة الرئيسية ووظيفة كل منها', 'اشرح مسار دوران سائل الحفر بالتفصيل', 'صف الهيكل التنظيمي للطاقم', 'قارن بين نوعين من الأجهزة البحرية', 'ناقش اعتبارات السلامة'], submissionType: 'text' }, en: { title: 'Detailed Drilling Rig Report', description: 'Prepare a comprehensive report describing a drilling rig, its components, systems, and crew.', instructions: ['Choose a type of drilling rig and explain your choice', 'Describe the five main systems and their functions', 'Explain the drilling fluid circulation path in detail', 'Describe the crew organizational structure', 'Compare two types of offshore rigs', 'Discuss main safety considerations'], submissionType: 'text' } } }
  ]
};

const unitsLesson: WeeklyLesson = {
  lessonId: 'units',
  days: [
    { day: 1, type: 'learning', content: { ar: { title: 'أنظمة الوحدات في صناعة النفط', explanation: '<section class="mb-8"><h2 class="text-[#1e3a5f] text-2xl font-bold mb-4">أنظمة القياس في صناعة النفط والغاز</h2><p class="mb-4 leading-relaxed">تُعد أنظمة القياس من أهم الأسس التي تقوم عليها صناعة النفط والغاز، حيث تعتمد جميع العمليات الهندسية على قياسات دقيقة لضمان السلامة والكفاءة. تستخدم هذه الصناعة نظامين رئيسيين للقياس: النظام الحقلي (Field Units أو Oilfield Units) والنظام الدولي للوحدات (SI - Système International).</p><h3 class="text-[#e67e22] text-xl font-semibold mb-3">النظام الحقلي (Oilfield Units)</h3><p class="mb-4 leading-relaxed">نشأ هذا النظام في الولايات المتحدة الأمريكية حيث بدأت صناعة النفط الحديثة. يُعرف أيضاً بالنظام الإمبراطوري أو الأمريكي، وهو الأكثر استخداماً في حقول النفط حول العالم رغم عدم اعتماده رسمياً في معظم الدول. يشمل وحدات مثل: القدم (foot) للطول، والرطل (pound) للوزن، والبرميل (barrel) للحجم، وpsi للضغط.</p><p class="mb-4 leading-relaxed"><strong>أسباب استمرار استخدام النظام الحقلي:</strong></p><ul class="list-disc pr-6 mb-4 space-y-2"><li>الإرث التاريخي: معظم المعدات والمعايير تم تطويرها بهذا النظام</li><li>التوحيد العالمي: يسهل التواصل بين المهندسين من دول مختلفة</li><li>البيانات المرجعية: ملايين الآبار موثقة بهذا النظام</li><li>المعادلات الهندسية: كثير من المعادلات مشتقة بوحدات حقلية</li></ul><h3 class="text-[#e67e22] text-xl font-semibold mb-3">النظام الدولي للوحدات (SI Units)</h3><p class="mb-4 leading-relaxed">هو النظام المتري المعتمد دولياً في العلوم والهندسة. يتميز بالترابط المنطقي بين الوحدات وسهولة التحويل (مضاعفات العشرة). يشمل: المتر (meter) للطول، والكيلوغرام (kilogram) للكتلة، والباسكال (Pascal) للضغط، واللتر أو المتر المكعب للحجم.</p><h3 class="text-[#e67e22] text-xl font-semibold mb-3">المقارنة بين النظامين</h3><div class="bg-muted/50 p-4 rounded-lg mb-4"><table class="w-full text-sm"><tr class="border-b"><th class="text-right p-2">الكمية</th><th class="text-right p-2">الوحدة الحقلية</th><th class="text-right p-2">الوحدة الدولية</th></tr><tr class="border-b"><td class="p-2">الطول</td><td class="p-2">قدم (ft)</td><td class="p-2">متر (m)</td></tr><tr class="border-b"><td class="p-2">الضغط</td><td class="p-2">psi</td><td class="p-2">باسكال (Pa) أو بار</td></tr><tr class="border-b"><td class="p-2">الحجم (سوائل)</td><td class="p-2">برميل (bbl)</td><td class="p-2">متر مكعب (m³)</td></tr><tr><td class="p-2">درجة الحرارة</td><td class="p-2">فهرنهايت (°F)</td><td class="p-2">مئوية (°C)</td></tr></table></div><p class="mb-4 leading-relaxed text-[#c0392b]"><strong>ملاحظة مهمة:</strong> يجب على مهندس النفط إتقان كلا النظامين والتحويل بينهما بدقة، فالخطأ في الوحدات قد يؤدي إلى كوارث. حادثة Mars Climate Orbiter عام 1999 مثال شهير على كارثة سببها خلط الوحدات!</p></section>', keyTerms: [{ term: 'النظام الحقلي', definition: 'نظام الوحدات المستخدم تقليدياً في صناعة النفط' }, { term: 'SI Units', definition: 'النظام الدولي للوحدات المتري' }, { term: 'معامل التحويل', definition: 'القيمة المستخدمة للتحويل بين نظامي الوحدات' }], practiceQuestion: { question: 'أي نظام هو الأكثر استخداماً في حقول النفط عالمياً؟', options: ['النظام المتري فقط', 'النظام الحقلي (الإمبراطوري)', 'النظام اليوناني القديم', 'لا يوجد نظام موحد'], correctAnswer: 1 } }, en: { title: 'Unit Systems in the Oil Industry', explanation: '<section class="mb-8"><h2 class="text-[#1e3a5f] text-2xl font-bold mb-4">Measurement Systems in Oil and Gas Industry</h2><p class="mb-4 leading-relaxed">Measurement systems are fundamental to the oil and gas industry, where all engineering operations rely on precise measurements to ensure safety and efficiency. The industry primarily uses two measurement systems: Oilfield Units (Field Units) and the International System of Units (SI - Système International).</p><h3 class="text-[#e67e22] text-xl font-semibold mb-3">Oilfield Units (Field Units)</h3><p class="mb-4 leading-relaxed">This system originated in the United States where the modern petroleum industry began. Also known as the Imperial or American system, it remains the most commonly used in oil fields worldwide despite not being officially adopted in most countries. It includes units such as: foot (ft) for length, pound (lb) for weight, barrel (bbl) for volume, and psi for pressure.</p><p class="mb-4 leading-relaxed"><strong>Reasons for continued use of Oilfield Units:</strong></p><ul class="list-disc pl-6 mb-4 space-y-2"><li>Historical legacy: Most equipment and standards were developed using this system</li><li>Global standardization: Facilitates communication between engineers from different countries</li><li>Reference data: Millions of wells are documented in this system</li><li>Engineering equations: Many formulas are derived in field units</li></ul><h3 class="text-[#e67e22] text-xl font-semibold mb-3">International System of Units (SI Units)</h3><p class="mb-4 leading-relaxed">This is the internationally adopted metric system for science and engineering. It features logical relationships between units and easy conversions (multiples of ten). It includes: meter (m) for length, kilogram (kg) for mass, Pascal (Pa) for pressure, and liter or cubic meter for volume.</p><h3 class="text-[#e67e22] text-xl font-semibold mb-3">Comparison Between Systems</h3><div class="bg-muted/50 p-4 rounded-lg mb-4"><table class="w-full text-sm"><tr class="border-b"><th class="text-left p-2">Quantity</th><th class="text-left p-2">Field Unit</th><th class="text-left p-2">SI Unit</th></tr><tr class="border-b"><td class="p-2">Length</td><td class="p-2">foot (ft)</td><td class="p-2">meter (m)</td></tr><tr class="border-b"><td class="p-2">Pressure</td><td class="p-2">psi</td><td class="p-2">Pascal (Pa) or bar</td></tr><tr class="border-b"><td class="p-2">Volume (liquids)</td><td class="p-2">barrel (bbl)</td><td class="p-2">cubic meter (m³)</td></tr><tr><td class="p-2">Temperature</td><td class="p-2">Fahrenheit (°F)</td><td class="p-2">Celsius (°C)</td></tr></table></div><p class="mb-4 leading-relaxed text-[#c0392b]"><strong>Important Note:</strong> Petroleum engineers must master both systems and convert between them accurately. Unit errors can lead to disasters. The Mars Climate Orbiter incident in 1999 is a famous example of a catastrophe caused by unit confusion!</p></section>', keyTerms: [{ term: 'Oilfield Units', definition: 'Traditional unit system used in the petroleum industry' }, { term: 'SI Units', definition: 'International System of metric units' }, { term: 'Conversion Factor', definition: 'Value used to convert between unit systems' }], practiceQuestion: { question: 'Which system is most commonly used in oil fields globally?', options: ['Metric system only', 'Oilfield (Imperial) system', 'Ancient Greek system', 'No unified system exists'], correctAnswer: 1 } } } },
    { day: 2, type: 'learning', content: { ar: { title: 'وحدات الطول والعمق', explanation: '<section class="mb-8"><h2 class="text-[#1e3a5f] text-2xl font-bold mb-4">قياس الطول والعمق في عمليات الحفر</h2><p class="mb-4 leading-relaxed">تُعد قياسات الطول والعمق من أهم القياسات في عمليات الحفر، حيث تحدد موقع رأس الحفر، وعمق الطبقات الجيولوجية، وطول أعمدة الحفر والتغليف. الدقة في هذه القياسات ضرورية للوصول إلى الهدف الجيولوجي وتجنب المشاكل.</p><h3 class="text-[#e67e22] text-xl font-semibold mb-3">وحدات الطول الأساسية</h3><p class="mb-4 leading-relaxed"><strong>القدم (Foot - ft):</strong> الوحدة الأساسية للأعماق في النظام الحقلي. القدم = 0.3048 متر بالضبط. تُستخدم لقياس أعماق الآبار التي قد تصل إلى 30,000 قدم أو أكثر.</p><p class="mb-4 leading-relaxed"><strong>البوصة (Inch - in):</strong> تُستخدم للأبعاد الصغيرة مثل أقطار الأنابيب ورؤوس الحفر. البوصة = 2.54 سم. القدم = 12 بوصة.</p><p class="mb-4 leading-relaxed"><strong>الياردة (Yard - yd):</strong> نادراً ما تُستخدم. الياردة = 3 أقدام = 0.9144 متر.</p><p class="mb-4 leading-relaxed"><strong>الميل (Mile - mi):</strong> للمسافات الأفقية الطويلة. الميل = 5,280 قدم = 1.609 كيلومتر.</p><h3 class="text-[#e67e22] text-xl font-semibold mb-3">أنواع قياسات العمق</h3><p class="mb-4 leading-relaxed"><strong>العمق المقاس (Measured Depth - MD):</strong> الطول الفعلي لمسار البئر من السطح إلى نقطة معينة. يتبع انحناءات البئر، لذا قد يكون أطول من العمق الرأسي الحقيقي.</p><p class="mb-4 leading-relaxed"><strong>العمق الرأسي الحقيقي (True Vertical Depth - TVD):</strong> المسافة الرأسية من السطح إلى نقطة معينة. مهم لحسابات الضغط الهيدروستاتيكي.</p><p class="mb-4 leading-relaxed"><strong>العلاقة بين MD و TVD:</strong> في البئر الرأسي: MD = TVD. في البئر المائل أو الأفقي: MD > TVD دائماً.</p><h3 class="text-[#e67e22] text-xl font-semibold mb-3">نقاط المرجع (Reference Points)</h3><ul class="list-disc pr-6 mb-4 space-y-2"><li><strong>KB (Kelly Bushing):</strong> المرجع الأكثر شيوعاً، أعلى الطاولة الدوارة</li><li><strong>DF (Derrick Floor):</strong> أرضية برج الحفر</li><li><strong>RT (Rotary Table):</strong> الطاولة الدوارة</li><li><strong>MSL (Mean Sea Level):</strong> متوسط مستوى سطح البحر</li><li><strong>GL (Ground Level):</strong> مستوى سطح الأرض</li></ul><h3 class="text-[#e67e22] text-xl font-semibold mb-3">معاملات التحويل الأساسية</h3><div class="bg-muted/50 p-4 rounded-lg mb-4"><ul class="space-y-2"><li>1 قدم = 0.3048 متر (بالضبط)</li><li>1 متر = 3.2808 قدم</li><li>1 بوصة = 2.54 سنتيمتر</li><li>1 ميل = 1.609 كيلومتر</li><li>1 ميل = 5,280 قدم</li></ul></div><p class="mb-4 leading-relaxed text-[#c0392b]"><strong>تطبيق عملي:</strong> إذا كان عمق البئر المقاس 15,000 قدم وزاوية الميل 30 درجة متوسطة، فإن TVD ≈ MD × cos(30°) ≈ 15,000 × 0.866 ≈ 12,990 قدم.</p></section>', keyTerms: [{ term: 'MD - العمق المقاس', definition: 'الطول الفعلي لمسار البئر' }, { term: 'TVD - العمق الرأسي الحقيقي', definition: 'المسافة الرأسية من السطح' }, { term: 'KB - Kelly Bushing', definition: 'نقطة المرجع الأكثر استخداماً' }], practiceQuestion: { question: 'كم قدم في الميل الواحد؟', options: ['1,000 قدم', '3,280 قدم', '5,280 قدم', '10,000 قدم'], correctAnswer: 2 } }, en: { title: 'Length and Depth Units', explanation: '<section class="mb-8"><h2 class="text-[#1e3a5f] text-2xl font-bold mb-4">Measuring Length and Depth in Drilling Operations</h2><p class="mb-4 leading-relaxed">Length and depth measurements are among the most critical in drilling operations. They determine drill bit location, geological formation depths, and drill string and casing lengths. Accuracy in these measurements is essential for reaching geological targets and avoiding problems.</p><h3 class="text-[#e67e22] text-xl font-semibold mb-3">Basic Length Units</h3><p class="mb-4 leading-relaxed"><strong>Foot (ft):</strong> The primary depth unit in the oilfield system. 1 foot = 0.3048 meters exactly. Used to measure well depths that may reach 30,000 feet or more.</p><p class="mb-4 leading-relaxed"><strong>Inch (in):</strong> Used for small dimensions such as pipe and bit diameters. 1 inch = 2.54 cm. 1 foot = 12 inches.</p><p class="mb-4 leading-relaxed"><strong>Yard (yd):</strong> Rarely used. 1 yard = 3 feet = 0.9144 meters.</p><p class="mb-4 leading-relaxed"><strong>Mile (mi):</strong> For long horizontal distances. 1 mile = 5,280 feet = 1.609 kilometers.</p><h3 class="text-[#e67e22] text-xl font-semibold mb-3">Types of Depth Measurements</h3><p class="mb-4 leading-relaxed"><strong>Measured Depth (MD):</strong> The actual length of the wellbore path from surface to a specific point. It follows well curvatures, so it may be longer than true vertical depth.</p><p class="mb-4 leading-relaxed"><strong>True Vertical Depth (TVD):</strong> The vertical distance from surface to a specific point. Important for hydrostatic pressure calculations.</p><p class="mb-4 leading-relaxed"><strong>Relationship between MD and TVD:</strong> In a vertical well: MD = TVD. In deviated or horizontal wells: MD > TVD always.</p><h3 class="text-[#e67e22] text-xl font-semibold mb-3">Reference Points</h3><ul class="list-disc pl-6 mb-4 space-y-2"><li><strong>KB (Kelly Bushing):</strong> The most common reference, top of rotary table</li><li><strong>DF (Derrick Floor):</strong> The drilling rig floor</li><li><strong>RT (Rotary Table):</strong> The rotary table surface</li><li><strong>MSL (Mean Sea Level):</strong> Average sea level</li><li><strong>GL (Ground Level):</strong> Ground surface level</li></ul><h3 class="text-[#e67e22] text-xl font-semibold mb-3">Basic Conversion Factors</h3><div class="bg-muted/50 p-4 rounded-lg mb-4"><ul class="space-y-2"><li>1 foot = 0.3048 meters (exactly)</li><li>1 meter = 3.2808 feet</li><li>1 inch = 2.54 centimeters</li><li>1 mile = 1.609 kilometers</li><li>1 mile = 5,280 feet</li></ul></div><p class="mb-4 leading-relaxed text-[#c0392b]"><strong>Practical Application:</strong> If measured depth is 15,000 ft and average inclination is 30°, then TVD ≈ MD × cos(30°) ≈ 15,000 × 0.866 ≈ 12,990 ft.</p></section>', keyTerms: [{ term: 'MD - Measured Depth', definition: 'Actual length of wellbore path' }, { term: 'TVD - True Vertical Depth', definition: 'Vertical distance from surface' }, { term: 'KB - Kelly Bushing', definition: 'Most commonly used reference point' }], practiceQuestion: { question: 'How many feet are in one mile?', options: ['1,000 feet', '3,280 feet', '5,280 feet', '10,000 feet'], correctAnswer: 2 } } } },
    { day: 3, type: 'learning', content: { ar: { title: 'وحدات الضغط', explanation: '<section class="mb-8"><h2 class="text-[#1e3a5f] text-2xl font-bold mb-4">قياس الضغط في عمليات الحفر والإنتاج</h2><p class="mb-4 leading-relaxed">الضغط هو القوة المؤثرة على وحدة المساحة، وهو من أهم المتغيرات في هندسة النفط. يؤثر الضغط على كل جانب من جوانب العمليات: من تصميم البئر إلى السلامة، ومن اختيار سائل الحفر إلى معدلات الإنتاج.</p><h3 class="text-[#e67e22] text-xl font-semibold mb-3">وحدات الضغط الرئيسية</h3><p class="mb-4 leading-relaxed"><strong>psi (Pounds per Square Inch):</strong> الوحدة الأكثر استخداماً في الحقول. تعني رطل قوة لكل بوصة مربعة. ضغط 1 psi = قوة رطل واحد موزعة على بوصة مربعة.</p><p class="mb-4 leading-relaxed"><strong>البار (bar):</strong> وحدة شائعة في أوروبا والشرق الأوسط. 1 bar ≈ 14.5 psi ≈ الضغط الجوي عند سطح البحر.</p><p class="mb-4 leading-relaxed"><strong>الباسكال (Pascal - Pa):</strong> الوحدة الدولية SI. 1 Pa = 1 نيوتن/متر مربع. صغيرة جداً، لذا يُستخدم كيلو باسكال (kPa) أو ميغا باسكال (MPa). 1 MPa = 145 psi.</p><p class="mb-4 leading-relaxed"><strong>الجو (Atmosphere - atm):</strong> تمثل الضغط الجوي القياسي. 1 atm = 14.7 psi = 101.325 kPa = 1.01325 bar.</p><h3 class="text-[#e67e22] text-xl font-semibold mb-3">أنواع الضغط في هندسة النفط</h3><p class="mb-4 leading-relaxed"><strong>الضغط المطلق (Absolute Pressure - psia):</strong> يُقاس من الصفر المطلق (الفراغ التام). يُستخدم في حسابات PVT للغازات.</p><p class="mb-4 leading-relaxed"><strong>الضغط المقياسي (Gauge Pressure - psig):</strong> يُقاس نسبة للضغط الجوي. معظم أجهزة القياس تعطي ضغطاً مقياسياً. psia = psig + 14.7</p><p class="mb-4 leading-relaxed"><strong>الضغط الهيدروستاتيكي:</strong> الضغط الناتج عن عمود السائل. P = ρ × g × h أو P(psi) = 0.052 × ρ(ppg) × TVD(ft)</p><p class="mb-4 leading-relaxed"><strong>ضغط المسام (Pore Pressure):</strong> ضغط الموائع داخل مسام الصخور.</p><p class="mb-4 leading-relaxed"><strong>ضغط التكسير (Fracture Pressure):</strong> الضغط اللازم لكسر الصخور.</p><h3 class="text-[#e67e22] text-xl font-semibold mb-3">معاملات التحويل</h3><div class="bg-muted/50 p-4 rounded-lg mb-4"><ul class="space-y-2"><li>1 bar = 14.5038 psi</li><li>1 atm = 14.696 psi = 101.325 kPa</li><li>1 MPa = 145.038 psi = 10 bar</li><li>1 kPa = 0.145 psi</li><li>1 psi = 6.895 kPa = 0.0689 bar</li></ul></div><h3 class="text-[#e67e22] text-xl font-semibold mb-3">تدرج الضغط (Pressure Gradient)</h3><p class="mb-4 leading-relaxed">تدرج الضغط هو معدل تغير الضغط مع العمق، ويُقاس بـ psi/ft. الماء العذب: 0.433 psi/ft. ماء البحر: 0.445 psi/ft. طين الحفر: يعتمد على كثافته.</p><p class="mb-4 leading-relaxed text-[#c0392b]"><strong>مثال عملي:</strong> لحساب الضغط الهيدروستاتيكي لعمود طين كثافته 12 ppg على عمق 10,000 قدم: P = 0.052 × 12 × 10,000 = 6,240 psi</p></section>', keyTerms: [{ term: 'psi', definition: 'رطل لكل بوصة مربعة - الوحدة الأكثر استخداماً' }, { term: 'الضغط الهيدروستاتيكي', definition: 'الضغط الناتج عن وزن عمود السائل' }, { term: 'تدرج الضغط', definition: 'معدل تغير الضغط مع العمق' }], practiceQuestion: { question: 'ما هي وحدة الضغط الأكثر استخداماً في حقول النفط؟', options: ['بار (bar)', 'باسكال (Pa)', 'psi', 'أجواء (atm)'], correctAnswer: 2 } }, en: { title: 'Pressure Units', explanation: '<section class="mb-8"><h2 class="text-[#1e3a5f] text-2xl font-bold mb-4">Measuring Pressure in Drilling and Production Operations</h2><p class="mb-4 leading-relaxed">Pressure is force acting on a unit area and is one of the most important variables in petroleum engineering. It affects every aspect of operations: from well design to safety, from drilling fluid selection to production rates.</p><h3 class="text-[#e67e22] text-xl font-semibold mb-3">Main Pressure Units</h3><p class="mb-4 leading-relaxed"><strong>psi (Pounds per Square Inch):</strong> The most commonly used unit in oilfields. It means pounds of force per square inch. 1 psi = force of one pound distributed over one square inch.</p><p class="mb-4 leading-relaxed"><strong>bar:</strong> Common unit in Europe and Middle East. 1 bar ≈ 14.5 psi ≈ atmospheric pressure at sea level.</p><p class="mb-4 leading-relaxed"><strong>Pascal (Pa):</strong> The SI international unit. 1 Pa = 1 Newton/square meter. Very small, so kilopascal (kPa) or megapascal (MPa) are used. 1 MPa = 145 psi.</p><p class="mb-4 leading-relaxed"><strong>Atmosphere (atm):</strong> Represents standard atmospheric pressure. 1 atm = 14.7 psi = 101.325 kPa = 1.01325 bar.</p><h3 class="text-[#e67e22] text-xl font-semibold mb-3">Types of Pressure in Petroleum Engineering</h3><p class="mb-4 leading-relaxed"><strong>Absolute Pressure (psia):</strong> Measured from absolute zero (perfect vacuum). Used in PVT gas calculations.</p><p class="mb-4 leading-relaxed"><strong>Gauge Pressure (psig):</strong> Measured relative to atmospheric pressure. Most gauges give gauge pressure. psia = psig + 14.7</p><p class="mb-4 leading-relaxed"><strong>Hydrostatic Pressure:</strong> Pressure resulting from a fluid column. P = ρ × g × h or P(psi) = 0.052 × ρ(ppg) × TVD(ft)</p><p class="mb-4 leading-relaxed"><strong>Pore Pressure:</strong> Pressure of fluids inside rock pores.</p><p class="mb-4 leading-relaxed"><strong>Fracture Pressure:</strong> Pressure required to fracture rocks.</p><h3 class="text-[#e67e22] text-xl font-semibold mb-3">Conversion Factors</h3><div class="bg-muted/50 p-4 rounded-lg mb-4"><ul class="space-y-2"><li>1 bar = 14.5038 psi</li><li>1 atm = 14.696 psi = 101.325 kPa</li><li>1 MPa = 145.038 psi = 10 bar</li><li>1 kPa = 0.145 psi</li><li>1 psi = 6.895 kPa = 0.0689 bar</li></ul></div><h3 class="text-[#e67e22] text-xl font-semibold mb-3">Pressure Gradient</h3><p class="mb-4 leading-relaxed">Pressure gradient is the rate of pressure change with depth, measured in psi/ft. Fresh water: 0.433 psi/ft. Sea water: 0.445 psi/ft. Drilling mud: depends on its density.</p><p class="mb-4 leading-relaxed text-[#c0392b]"><strong>Practical Example:</strong> To calculate hydrostatic pressure of 12 ppg mud at 10,000 ft depth: P = 0.052 × 12 × 10,000 = 6,240 psi</p></section>', keyTerms: [{ term: 'psi', definition: 'Pounds per square inch - most commonly used unit' }, { term: 'Hydrostatic Pressure', definition: 'Pressure from fluid column weight' }, { term: 'Pressure Gradient', definition: 'Rate of pressure change with depth' }], practiceQuestion: { question: 'What is the most commonly used pressure unit in oil fields?', options: ['bar', 'Pascal (Pa)', 'psi', 'atmospheres (atm)'], correctAnswer: 2 } } } },
    { day: 4, type: 'learning', content: { ar: { title: 'وحدات الحجم والتدفق', explanation: '<section class="mb-8"><h2 class="text-[#1e3a5f] text-2xl font-bold mb-4">قياس الحجم ومعدلات التدفق في صناعة النفط</h2><p class="mb-4 leading-relaxed">قياس الحجم ومعدلات التدفق أساسي في صناعة النفط لتقدير الاحتياطيات، ومراقبة الإنتاج، وحساب كميات المواد المستخدمة في الحفر. تختلف الوحدات حسب نوع المائع (نفط، غاز، ماء) والتطبيق.</p><h3 class="text-[#e67e22] text-xl font-semibold mb-3">وحدات حجم السوائل</h3><p class="mb-4 leading-relaxed"><strong>البرميل (Barrel - bbl):</strong> الوحدة الأساسية لقياس النفط والسوائل. 1 برميل = 42 غالون أمريكي = 159 لتر ≈ 0.159 متر مكعب. اختير هذا الحجم تاريخياً لأنه كان حجم براميل الويسكي المتوفرة!</p><p class="mb-4 leading-relaxed"><strong>الغالون (Gallon - gal):</strong> يُستخدم للكميات الصغيرة والمواد الكيميائية. الغالون الأمريكي = 3.785 لتر. الغالون البريطاني = 4.546 لتر (انتبه للفرق!).</p><p class="mb-4 leading-relaxed"><strong>المتر المكعب (Cubic Meter - m³):</strong> الوحدة الدولية. 1 m³ = 6.29 برميل = 264 غالون = 1000 لتر.</p><h3 class="text-[#e67e22] text-xl font-semibold mb-3">وحدات حجم الغاز</h3><p class="mb-4 leading-relaxed"><strong>القدم المكعب القياسي (Standard Cubic Foot - SCF):</strong> حجم الغاز عند الظروف القياسية (60°F و 14.7 psia). الظروف القياسية تختلف حسب البلد!</p><p class="mb-4 leading-relaxed"><strong>MCF:</strong> ألف قدم مكعب (M = ألف باللاتينية). MMCF = مليون قدم مكعب. BCF = بليون قدم مكعب. TCF = تريليون قدم مكعب.</p><p class="mb-4 leading-relaxed"><strong>المتر المكعب القياسي (Sm³):</strong> عند 15°C و 101.325 kPa. 1 Sm³ = 35.3 SCF.</p><h3 class="text-[#e67e22] text-xl font-semibold mb-3">وحدات معدل التدفق</h3><p class="mb-4 leading-relaxed"><strong>للسوائل:</strong></p><ul class="list-disc pr-6 mb-4 space-y-2"><li>BOPD (Barrels of Oil Per Day): براميل النفط يومياً</li><li>BWPD (Barrels of Water Per Day): براميل الماء يومياً</li><li>BLPD (Barrels of Liquid Per Day): إجمالي السوائل</li><li>GPM (Gallons Per Minute): للمضخات وسائل الحفر</li><li>m³/day: الوحدة الدولية</li></ul><p class="mb-4 leading-relaxed"><strong>للغاز:</strong></p><ul class="list-disc pr-6 mb-4 space-y-2"><li>MCFD: ألف قدم مكعب يومياً</li><li>MMCFD: مليون قدم مكعب يومياً</li><li>Sm³/day: متر مكعب قياسي يومياً</li></ul><h3 class="text-[#e67e22] text-xl font-semibold mb-3">نسب مهمة</h3><p class="mb-4 leading-relaxed"><strong>GOR (Gas-Oil Ratio):</strong> نسبة الغاز للنفط = SCF/bbl. تدل على طبيعة المكمن.</p><p class="mb-4 leading-relaxed"><strong>WOR (Water-Oil Ratio):</strong> نسبة الماء للنفط. تزداد مع عمر البئر.</p><p class="mb-4 leading-relaxed"><strong>Water Cut:</strong> نسبة الماء من إجمالي السوائل المنتجة (%).</p><div class="bg-muted/50 p-4 rounded-lg mb-4"><h4 class="font-semibold mb-2">معاملات التحويل:</h4><ul class="space-y-2"><li>1 برميل = 42 غالون أمريكي</li><li>1 برميل = 159 لتر = 0.159 m³</li><li>1 m³ = 6.29 برميل</li><li>1 Sm³ غاز = 35.3 SCF</li></ul></div><p class="mb-4 leading-relaxed text-[#c0392b]"><strong>مثال:</strong> بئر ينتج 500 BOPD و 1,500 BWPD. Water Cut = 1500/(500+1500) × 100 = 75%</p></section>', keyTerms: [{ term: 'البرميل (bbl)', definition: '42 غالون أمريكي - وحدة قياس النفط الأساسية' }, { term: 'SCF', definition: 'قدم مكعب قياسي - وحدة قياس الغاز' }, { term: 'GOR', definition: 'نسبة الغاز للنفط' }], practiceQuestion: { question: 'كم غالون أمريكي في البرميل الواحد؟', options: ['32 غالون', '42 غالون', '52 غالون', '62 غالون'], correctAnswer: 1 } }, en: { title: 'Volume and Flow Units', explanation: '<section class="mb-8"><h2 class="text-[#1e3a5f] text-2xl font-bold mb-4">Measuring Volume and Flow Rates in the Oil Industry</h2><p class="mb-4 leading-relaxed">Measuring volume and flow rates is fundamental in the oil industry for estimating reserves, monitoring production, and calculating quantities of materials used in drilling. Units differ based on fluid type (oil, gas, water) and application.</p><h3 class="text-[#e67e22] text-xl font-semibold mb-3">Liquid Volume Units</h3><p class="mb-4 leading-relaxed"><strong>Barrel (bbl):</strong> The primary unit for measuring oil and liquids. 1 barrel = 42 US gallons = 159 liters ≈ 0.159 cubic meters. This volume was historically chosen because it was the size of available whiskey barrels!</p><p class="mb-4 leading-relaxed"><strong>Gallon (gal):</strong> Used for small quantities and chemicals. US gallon = 3.785 liters. British gallon = 4.546 liters (note the difference!).</p><p class="mb-4 leading-relaxed"><strong>Cubic Meter (m³):</strong> The international unit. 1 m³ = 6.29 barrels = 264 gallons = 1000 liters.</p><h3 class="text-[#e67e22] text-xl font-semibold mb-3">Gas Volume Units</h3><p class="mb-4 leading-relaxed"><strong>Standard Cubic Foot (SCF):</strong> Gas volume at standard conditions (60°F and 14.7 psia). Note: Standard conditions vary by country!</p><p class="mb-4 leading-relaxed"><strong>MCF:</strong> Thousand cubic feet (M = thousand in Latin). MMCF = million cubic feet. BCF = billion cubic feet. TCF = trillion cubic feet.</p><p class="mb-4 leading-relaxed"><strong>Standard Cubic Meter (Sm³):</strong> At 15°C and 101.325 kPa. 1 Sm³ = 35.3 SCF.</p><h3 class="text-[#e67e22] text-xl font-semibold mb-3">Flow Rate Units</h3><p class="mb-4 leading-relaxed"><strong>For Liquids:</strong></p><ul class="list-disc pl-6 mb-4 space-y-2"><li>BOPD (Barrels of Oil Per Day): Oil production rate</li><li>BWPD (Barrels of Water Per Day): Water production rate</li><li>BLPD (Barrels of Liquid Per Day): Total liquids</li><li>GPM (Gallons Per Minute): For pumps and drilling fluid</li><li>m³/day: International unit</li></ul><p class="mb-4 leading-relaxed"><strong>For Gas:</strong></p><ul class="list-disc pl-6 mb-4 space-y-2"><li>MCFD: Thousand cubic feet per day</li><li>MMCFD: Million cubic feet per day</li><li>Sm³/day: Standard cubic meters per day</li></ul><h3 class="text-[#e67e22] text-xl font-semibold mb-3">Important Ratios</h3><p class="mb-4 leading-relaxed"><strong>GOR (Gas-Oil Ratio):</strong> Gas to oil ratio = SCF/bbl. Indicates reservoir characteristics.</p><p class="mb-4 leading-relaxed"><strong>WOR (Water-Oil Ratio):</strong> Water to oil ratio. Increases with well age.</p><p class="mb-4 leading-relaxed"><strong>Water Cut:</strong> Water percentage of total produced liquids (%).</p><div class="bg-muted/50 p-4 rounded-lg mb-4"><h4 class="font-semibold mb-2">Conversion Factors:</h4><ul class="space-y-2"><li>1 barrel = 42 US gallons</li><li>1 barrel = 159 liters = 0.159 m³</li><li>1 m³ = 6.29 barrels</li><li>1 Sm³ gas = 35.3 SCF</li></ul></div><p class="mb-4 leading-relaxed text-[#c0392b]"><strong>Example:</strong> A well produces 500 BOPD and 1,500 BWPD. Water Cut = 1500/(500+1500) × 100 = 75%</p></section>', keyTerms: [{ term: 'Barrel (bbl)', definition: '42 US gallons - primary oil measurement unit' }, { term: 'SCF', definition: 'Standard Cubic Foot - gas measurement unit' }, { term: 'GOR', definition: 'Gas-Oil Ratio' }], practiceQuestion: { question: 'How many US gallons are in one barrel?', options: ['32 gallons', '42 gallons', '52 gallons', '62 gallons'], correctAnswer: 1 } } } },
    { day: 5, type: 'learning', content: { ar: { title: 'التحويل بين الوحدات والوحدات المتخصصة', explanation: '<section class="mb-8"><h2 class="text-[#1e3a5f] text-2xl font-bold mb-4">التحويل بين الوحدات والوحدات المتخصصة في هندسة النفط</h2><p class="mb-4 leading-relaxed">التحويل الصحيح بين الوحدات مهارة أساسية لمهندس النفط. الأخطاء في التحويل قد تؤدي إلى قرارات خاطئة مكلفة أو حتى كوارث. بالإضافة للوحدات الأساسية، هناك وحدات متخصصة فريدة في صناعة النفط.</p><h3 class="text-[#e67e22] text-xl font-semibold mb-3">وحدات كثافة سائل الحفر (Mud Weight)</h3><p class="mb-4 leading-relaxed"><strong>ppg (Pounds per Gallon):</strong> الأكثر استخداماً. الماء العذب = 8.33 ppg. سائل الحفر: 9-18 ppg حسب الحاجة.</p><p class="mb-4 leading-relaxed"><strong>lb/ft³ (Pounds per Cubic Foot):</strong> الماء = 62.4 lb/ft³.</p><p class="mb-4 leading-relaxed"><strong>kg/m³:</strong> الوحدة الدولية. الماء = 1000 kg/m³.</p><p class="mb-4 leading-relaxed"><strong>SG (Specific Gravity):</strong> نسبة كثافة المادة لكثافة الماء. الماء = 1.0.</p><p class="mb-4 leading-relaxed"><strong>معاملات التحويل:</strong> ppg × 119.8 = kg/m³ | ppg × 7.48 = lb/ft³ | ppg ÷ 8.33 = SG</p><h3 class="text-[#e67e22] text-xl font-semibold mb-3">وحدات درجة الحرارة</h3><p class="mb-4 leading-relaxed"><strong>فهرنهايت (°F):</strong> المستخدمة في أمريكا. الماء يتجمد عند 32°F ويغلي عند 212°F.</p><p class="mb-4 leading-relaxed"><strong>مئوية/سيلسيوس (°C):</strong> المستخدمة عالمياً. الماء يتجمد عند 0°C ويغلي عند 100°C.</p><p class="mb-4 leading-relaxed"><strong>كلفن (K):</strong> للحسابات العلمية. K = °C + 273.15. لا توجد قيم سالبة.</p><p class="mb-4 leading-relaxed"><strong>رانكين (°R):</strong> المقياس المطلق للفهرنهايت. °R = °F + 459.67.</p><p class="mb-4 leading-relaxed"><strong>معادلات التحويل:</strong></p><div class="bg-muted/50 p-4 rounded-lg mb-4"><ul class="space-y-2"><li>°F = (°C × 9/5) + 32</li><li>°C = (°F - 32) × 5/9</li><li>K = °C + 273.15</li><li>°R = °F + 459.67</li></ul></div><h3 class="text-[#e67e22] text-xl font-semibold mb-3">وحدات اللزوجة (Viscosity)</h3><p class="mb-4 leading-relaxed"><strong>سنتي بواز (cP - centipoise):</strong> وحدة اللزوجة الديناميكية الشائعة. الماء ≈ 1 cP عند 20°C.</p><p class="mb-4 leading-relaxed"><strong>ثانية مارش (Marsh Funnel Seconds):</strong> قياس ميداني بسيط للزوجة. الماء = 26 ثانية.</p><h3 class="text-[#e67e22] text-xl font-semibold mb-3">وحدات النفاذية (Permeability)</h3><p class="mb-4 leading-relaxed"><strong>دارسي (Darcy - D):</strong> وحدة النفاذية. كبيرة جداً للاستخدام العملي.</p><p class="mb-4 leading-relaxed"><strong>ميلي دارسي (mD):</strong> الأكثر استخداماً. 1 D = 1000 mD. مكمن جيد: 100-1000 mD. مكمن ضعيف: < 1 mD.</p><h3 class="text-[#e67e22] text-xl font-semibold mb-3">وحدات API للنفط</h3><p class="mb-4 leading-relaxed"><strong>°API (API Gravity):</strong> مقياس كثافة النفط. كلما زاد الرقم كان النفط أخف وأغلى. °API = (141.5/SG) - 131.5</p><ul class="list-disc pr-6 mb-4 space-y-2"><li>نفط خفيف: > 31° API</li><li>نفط متوسط: 22-31° API</li><li>نفط ثقيل: 10-22° API</li><li>نفط فائق الثقل: < 10° API</li></ul><p class="mb-4 leading-relaxed text-[#c0392b]"><strong>نصيحة مهمة:</strong> عند التحويل، تأكد دائماً من الوحدات قبل وبعد، واستخدم تحليل الأبعاد للتحقق من صحة النتيجة!</p></section>', keyTerms: [{ term: 'ppg', definition: 'رطل لكل غالون - وحدة كثافة سائل الحفر' }, { term: 'mD', definition: 'ميلي دارسي - وحدة النفاذية' }, { term: '°API', definition: 'مقياس كثافة النفط - كلما زاد كان أخف' }], practiceQuestion: { question: 'كم متر في القدم الواحد؟', options: ['0.1 متر', '0.3048 متر', '0.5 متر', '1.0 متر'], correctAnswer: 1 } }, en: { title: 'Unit Conversions and Specialized Units', explanation: '<section class="mb-8"><h2 class="text-[#1e3a5f] text-2xl font-bold mb-4">Unit Conversions and Specialized Units in Petroleum Engineering</h2><p class="mb-4 leading-relaxed">Correct unit conversion is an essential skill for petroleum engineers. Conversion errors can lead to costly wrong decisions or even disasters. Besides basic units, there are specialized units unique to the oil industry.</p><h3 class="text-[#e67e22] text-xl font-semibold mb-3">Drilling Fluid Density Units (Mud Weight)</h3><p class="mb-4 leading-relaxed"><strong>ppg (Pounds per Gallon):</strong> Most commonly used. Fresh water = 8.33 ppg. Drilling fluid: 9-18 ppg as needed.</p><p class="mb-4 leading-relaxed"><strong>lb/ft³ (Pounds per Cubic Foot):</strong> Water = 62.4 lb/ft³.</p><p class="mb-4 leading-relaxed"><strong>kg/m³:</strong> International unit. Water = 1000 kg/m³.</p><p class="mb-4 leading-relaxed"><strong>SG (Specific Gravity):</strong> Ratio of material density to water density. Water = 1.0.</p><p class="mb-4 leading-relaxed"><strong>Conversion Factors:</strong> ppg × 119.8 = kg/m³ | ppg × 7.48 = lb/ft³ | ppg ÷ 8.33 = SG</p><h3 class="text-[#e67e22] text-xl font-semibold mb-3">Temperature Units</h3><p class="mb-4 leading-relaxed"><strong>Fahrenheit (°F):</strong> Used in America. Water freezes at 32°F and boils at 212°F.</p><p class="mb-4 leading-relaxed"><strong>Celsius (°C):</strong> Used globally. Water freezes at 0°C and boils at 100°C.</p><p class="mb-4 leading-relaxed"><strong>Kelvin (K):</strong> For scientific calculations. K = °C + 273.15. No negative values.</p><p class="mb-4 leading-relaxed"><strong>Rankine (°R):</strong> Absolute scale for Fahrenheit. °R = °F + 459.67.</p><p class="mb-4 leading-relaxed"><strong>Conversion Equations:</strong></p><div class="bg-muted/50 p-4 rounded-lg mb-4"><ul class="space-y-2"><li>°F = (°C × 9/5) + 32</li><li>°C = (°F - 32) × 5/9</li><li>K = °C + 273.15</li><li>°R = °F + 459.67</li></ul></div><h3 class="text-[#e67e22] text-xl font-semibold mb-3">Viscosity Units</h3><p class="mb-4 leading-relaxed"><strong>centipoise (cP):</strong> Common dynamic viscosity unit. Water ≈ 1 cP at 20°C.</p><p class="mb-4 leading-relaxed"><strong>Marsh Funnel Seconds:</strong> Simple field viscosity measurement. Water = 26 seconds.</p><h3 class="text-[#e67e22] text-xl font-semibold mb-3">Permeability Units</h3><p class="mb-4 leading-relaxed"><strong>Darcy (D):</strong> Permeability unit. Too large for practical use.</p><p class="mb-4 leading-relaxed"><strong>millidarcy (mD):</strong> Most commonly used. 1 D = 1000 mD. Good reservoir: 100-1000 mD. Poor reservoir: < 1 mD.</p><h3 class="text-[#e67e22] text-xl font-semibold mb-3">API Oil Units</h3><p class="mb-4 leading-relaxed"><strong>°API (API Gravity):</strong> Oil density measure. Higher number means lighter, more valuable oil. °API = (141.5/SG) - 131.5</p><ul class="list-disc pl-6 mb-4 space-y-2"><li>Light oil: > 31° API</li><li>Medium oil: 22-31° API</li><li>Heavy oil: 10-22° API</li><li>Extra heavy oil: < 10° API</li></ul><p class="mb-4 leading-relaxed text-[#c0392b]"><strong>Important Tip:</strong> When converting, always verify units before and after, and use dimensional analysis to check your result!</p></section>', keyTerms: [{ term: 'ppg', definition: 'Pounds per gallon - drilling fluid density unit' }, { term: 'mD', definition: 'Millidarcy - permeability unit' }, { term: '°API', definition: 'Oil density measure - higher means lighter' }], practiceQuestion: { question: 'How many meters are in one foot?', options: ['0.1 meters', '0.3048 meters', '0.5 meters', '1.0 meters'], correctAnswer: 1 } } } },
    { day: 6, type: 'quiz', content: { ar: { title: 'اختبار الأسبوع: الوحدات والقياسات', explanation: 'اختبر معرفتك بأنظمة الوحدات والتحويلات المستخدمة في صناعة النفط.', keyTerms: [] }, en: { title: 'Weekly Quiz: Units and Measurements', explanation: 'Test your knowledge of unit systems and conversions used in the oil industry.', keyTerms: [] } }, quiz: { ar: [{ question: 'كم غالون أمريكي في برميل النفط؟', options: ['35 غالون', '42 غالون', '55 غالون', '100 غالون'], correctAnswer: 1 }, { question: 'ما الوحدة المستخدمة لقياس عمق البئر في الحقول الأمريكية؟', options: ['أمتار', 'أقدام', 'ياردات', 'أميال'], correctAnswer: 1 }, { question: 'ماذا تعني psi؟', options: ['مؤشر الضغط القياسي', 'رطل لكل بوصة مربعة', 'باسكال دولي قياسي', 'مؤشر نظام الضغط'], correctAnswer: 1 }, { question: 'كم قدم في المتر الواحد؟', options: ['2.28 قدم', '3.28 قدم', '4.28 قدم', '5.28 قدم'], correctAnswer: 1 }, { question: 'ما الوحدة المستخدمة لقياس كثافة سائل الحفر؟', options: ['psi', 'ppg', 'bar', 'SCF'], correctAnswer: 1 }, { question: 'كم تساوي 1 بار تقريباً بوحدة psi؟', options: ['10 psi', '14.5 psi', '20 psi', '100 psi'], correctAnswer: 1 }, { question: 'ما هي SCF؟', options: ['أقدام مكعبة قياسية', 'معامل تحويل قياسي', 'صيغة حساب بسيطة', 'ميزة تحكم السلامة'], correctAnswer: 0 }, { question: 'ما الفرق بين MD و TVD؟', options: ['لا فرق بينهما', 'MD هو الطول الفعلي للمسار وTVD هو العمق الرأسي', 'TVD أكبر دائماً من MD', 'MD يُستخدم للغاز وTVD للنفط'], correctAnswer: 1 }, { question: 'درجة API العالية تدل على:', options: ['نفط ثقيل', 'نفط خفيف', 'نفط عالي الكبريت', 'نفط منخفض الجودة'], correctAnswer: 1 }, { question: 'لماذا التحويل الصحيح بين الوحدات مهم؟', options: ['للتقارير فقط', 'لتجنب أخطاء الحساب والحوادث الكارثية', 'لأسباب قانونية فقط', 'للتسويق'], correctAnswer: 1 }], en: [{ question: 'How many US gallons are in a barrel of oil?', options: ['35 gallons', '42 gallons', '55 gallons', '100 gallons'], correctAnswer: 1 }, { question: 'What unit is used for well depth in US oil fields?', options: ['Meters', 'Feet', 'Yards', 'Miles'], correctAnswer: 1 }, { question: 'What does psi stand for?', options: ['Pressure standard index', 'Pounds per square inch', 'Pascal standard international', 'Pressure system indicator'], correctAnswer: 1 }, { question: 'How many feet are in one meter?', options: ['2.28 feet', '3.28 feet', '4.28 feet', '5.28 feet'], correctAnswer: 1 }, { question: 'What unit is used to measure drilling fluid density?', options: ['psi', 'ppg', 'bar', 'SCF'], correctAnswer: 1 }, { question: '1 bar equals approximately how many psi?', options: ['10 psi', '14.5 psi', '20 psi', '100 psi'], correctAnswer: 1 }, { question: 'What is SCF?', options: ['Standard Cubic Feet', 'Standard Conversion Factor', 'Simple Calculation Formula', 'Safety Control Feature'], correctAnswer: 0 }, { question: 'What is the difference between MD and TVD?', options: ['No difference', 'MD is actual path length, TVD is vertical depth', 'TVD is always greater than MD', 'MD is for gas, TVD is for oil'], correctAnswer: 1 }, { question: 'High API gravity indicates:', options: ['Heavy oil', 'Light oil', 'High sulfur oil', 'Low quality oil'], correctAnswer: 1 }, { question: 'Why is correct unit conversion important?', options: ['For reports only', 'To avoid calculation errors and catastrophic accidents', 'For legal reasons only', 'For marketing'], correctAnswer: 1 }] } },
    { day: 7, type: 'project', content: { ar: { title: 'مشروع الأسبوع: تمارين تحويل الوحدات', explanation: 'تطبيق عملي على تحويل الوحدات المستخدمة في هندسة النفط.', keyTerms: [] }, en: { title: 'Weekly Project: Unit Conversion Exercises', explanation: 'Practical application of unit conversions used in petroleum engineering.', keyTerms: [] } }, project: { ar: { title: 'تمارين شاملة في تحويل الوحدات', description: 'حل مجموعة من مسائل تحويل الوحدات الشائعة في هندسة النفط مع إظهار خطوات الحل.', instructions: ['الجزء الأول - الطول والعمق: حول عمق بئر 15,000 قدم إلى أمتار، ثم احسب TVD إذا كان متوسط زاوية الميل 25 درجة', 'الجزء الثاني - الضغط: بئر عمقه TVD = 10,000 قدم مملوء بسائل حفر كثافته 11.5 ppg، احسب الضغط الهيدروستاتيكي بـ psi ثم حوله إلى بار', 'الجزء الثالث - الحجم: مكمن يحتوي 50 مليون برميل نفط، حولها إلى متر مكعب ولتر', 'الجزء الرابع - كثافة النفط: نفط كثافته النوعية SG = 0.85، احسب درجة API', 'الجزء الخامس - درجة الحرارة: درجة حرارة المكمن 250°F، حولها إلى مئوية وكلفن', 'الجزء السادس - كثافة الطين: طين كثافته 12.5 ppg، حولها إلى kg/m³ و SG'], submissionType: 'text' }, en: { title: 'Comprehensive Unit Conversion Exercises', description: 'Solve a set of unit conversion problems common in petroleum engineering, showing your calculation steps.', instructions: ['Part 1 - Length and Depth: Convert well depth of 15,000 feet to meters, then calculate TVD if average inclination is 25 degrees', 'Part 2 - Pressure: A well with TVD = 10,000 ft is filled with 11.5 ppg drilling fluid, calculate hydrostatic pressure in psi then convert to bar', 'Part 3 - Volume: A reservoir contains 50 million barrels of oil, convert to cubic meters and liters', 'Part 4 - Oil Density: Oil with specific gravity SG = 0.85, calculate API gravity', 'Part 5 - Temperature: Reservoir temperature is 250°F, convert to Celsius and Kelvin', 'Part 6 - Mud Density: Mud weight is 12.5 ppg, convert to kg/m³ and SG'], submissionType: 'text' } } }
  ]
};

const terminologyLesson: WeeklyLesson = {
  lessonId: 'terminology',
  days: [
    { 
      day: 1, 
      type: 'learning', 
      content: { 
        ar: { 
          title: 'مقدمة في المصطلحات النفطية وتقسيمات صناعة النفط', 
          explanation: `
<section class="mb-8">
  <h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 أهمية المصطلحات في صناعة النفط والغاز</h2>
  
  <p class="mb-4" style="line-height: 1.8;">تُعد صناعة النفط والغاز من أكثر الصناعات تعقيداً وتخصصاً في العالم، وتستخدم لغة فنية خاصة تطورت عبر أكثر من 150 عاماً منذ بداية الصناعة في عام 1859 في بنسلفانيا. هذه المصطلحات ليست مجرد كلمات، بل هي وسيلة التواصل الأساسية بين المهندسين والفنيين والمشغلين في جميع أنحاء العالم. فعندما يتحدث مهندس حفر في الكويت مع زميله في تكساس أو بحر الشمال، يستخدمون نفس المصطلحات الإنجليزية لضمان الفهم الدقيق والآمن.</p>

  <p class="mb-4" style="line-height: 1.8;">إن إتقان هذه المصطلحات ليس ترفاً أكاديمياً، بل ضرورة مهنية حقيقية. فسوء الفهم في حقل نفطي قد يؤدي إلى كوارث بيئية أو خسائر بشرية أو اقتصادية ضخمة. تخيل أن مهندساً أساء فهم مصطلح يتعلق بضغط البئر - النتيجة قد تكون انفجار البئر (Blowout) الذي شهدناه في كوارث مثل Deepwater Horizon عام 2010.</p>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 لماذا تحتاج لإتقان المصطلحات النفطية؟</h3>
  
  <ul class="mb-4" style="line-height: 2;">
    <li><strong>التواصل الآمن:</strong> المصطلحات الدقيقة تمنع سوء الفهم الذي قد يسبب حوادث خطيرة</li>
    <li><strong>قراءة التقارير:</strong> التقارير اليومية للحفر (DDR) والتقارير الجيولوجية مكتوبة بالمصطلحات الفنية</li>
    <li><strong>الاجتماعات والتخطيط:</strong> اجتماعات تخطيط البئر تستخدم مصطلحات متخصصة بكثافة</li>
    <li><strong>التوظيف والمقابلات:</strong> شركات النفط تختبر معرفتك بالمصطلحات في المقابلات</li>
    <li><strong>التعلم المستمر:</strong> الكتب والدورات والأبحاث كلها بالإنجليزية وتستخدم هذه المصطلحات</li>
    <li><strong>العمل الدولي:</strong> حقول النفط متعددة الجنسيات والمصطلحات هي اللغة المشتركة</li>
  </ul>
</section>

<section class="mb-8">
  <h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 التقسيم الرئيسي لصناعة النفط: Upstream, Midstream, Downstream</h2>
  
  <p class="mb-4" style="line-height: 1.8;">تُقسم صناعة النفط والغاز تقليدياً إلى ثلاثة قطاعات رئيسية، وهذا التقسيم أساسي لفهم كيفية عمل الصناعة ككل. كل قطاع له شركاته المتخصصة ومهندسوه ومصطلحاته الخاصة.</p>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 القطاع الأول: Upstream (المنبع) - الاستكشاف والإنتاج</h3>
  
  <p class="mb-4" style="line-height: 1.8;">يُسمى أيضاً <strong>E&P (Exploration and Production)</strong>، وهو القطاع الذي يركز عليه معظم مهندسي البترول. يشمل:</p>
  
  <ul class="mb-4" style="line-height: 2;">
    <li><strong>الاستكشاف (Exploration):</strong>
      <ul style="margin-right: 1.5rem; margin-top: 0.5rem;">
        <li>المسح الجيولوجي (Geological Survey) لدراسة الصخور السطحية</li>
        <li>المسح الزلزالي (Seismic Survey) باستخدام الموجات الصوتية لتصوير الطبقات تحت الأرض</li>
        <li>تحليل البيانات الجيوفيزيائية (Geophysical Analysis)</li>
        <li>تحديد مواقع الحفر المحتملة (Prospect Evaluation)</li>
        <li>حفر آبار الاستكشاف (Exploration Wells / Wildcats)</li>
      </ul>
    </li>
    <li><strong>التقييم (Appraisal):</strong>
      <ul style="margin-right: 1.5rem; margin-top: 0.5rem;">
        <li>حفر آبار التقييم (Appraisal Wells) لتحديد حجم المكتشف</li>
        <li>اختبارات الإنتاج (Production Tests)</li>
        <li>تقدير الاحتياطيات (Reserves Estimation)</li>
        <li>دراسة الجدوى الاقتصادية (Economic Feasibility)</li>
      </ul>
    </li>
    <li><strong>التطوير (Development):</strong>
      <ul style="margin-right: 1.5rem; margin-top: 0.5rem;">
        <li>تصميم خطة تطوير الحقل (Field Development Plan - FDP)</li>
        <li>حفر آبار التطوير (Development Wells)</li>
        <li>بناء المنشآت السطحية (Surface Facilities)</li>
        <li>مد خطوط الأنابيب الداخلية (Flowlines)</li>
      </ul>
    </li>
    <li><strong>الإنتاج (Production):</strong>
      <ul style="margin-right: 1.5rem; margin-top: 0.5rem;">
        <li>استخراج النفط والغاز من الآبار</li>
        <li>الفصل الأولي (Primary Separation) للنفط والغاز والماء</li>
        <li>المعالجة الأولية (Initial Treatment)</li>
        <li>إدارة المكمن (Reservoir Management)</li>
        <li>الاستخلاص المعزز (Enhanced Oil Recovery - EOR)</li>
      </ul>
    </li>
  </ul>

  <p class="mb-4" style="background: #fef3c7; padding: 1rem; border-radius: 0.5rem;"><strong>💡 معلومة مهمة:</strong> شركات Upstream الكبرى تشمل: Saudi Aramco, ExxonMobil, Shell, BP, Chevron, TotalEnergies, Kuwait Oil Company (KOC), Abu Dhabi National Oil Company (ADNOC).</p>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 القطاع الثاني: Midstream (الوسط) - النقل والتخزين</h3>
  
  <p class="mb-4" style="line-height: 1.8;">هذا القطاع يمثل الحلقة الوسطى بين الإنتاج والتكرير:</p>
  
  <ul class="mb-4" style="line-height: 2;">
    <li><strong>خطوط الأنابيب (Pipelines):</strong> نقل النفط الخام والغاز لمسافات طويلة</li>
    <li><strong>ناقلات النفط (Tankers):</strong> السفن العملاقة لنقل النفط بحراً</li>
    <li><strong>الخزانات (Storage Tanks):</strong> تخزين النفط الخام والمنتجات</li>
    <li><strong>محطات الضخ (Pumping Stations):</strong> دفع النفط عبر الأنابيب</li>
    <li><strong>محطات الضغط (Compression Stations):</strong> ضغط الغاز للنقل</li>
    <li><strong>محطات التحميل والتفريغ (Loading/Unloading Terminals):</strong> موانئ نفطية متخصصة</li>
    <li><strong>معالجة الغاز (Gas Processing):</strong> إزالة الشوائب وفصل السوائل</li>
    <li><strong>تسييل الغاز (LNG - Liquefied Natural Gas):</strong> تحويل الغاز لسائل للنقل بالسفن</li>
  </ul>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 القطاع الثالث: Downstream (المصب) - التكرير والتسويق</h3>
  
  <p class="mb-4" style="line-height: 1.8;">هذا القطاع يحول النفط الخام إلى منتجات قابلة للاستخدام:</p>
  
  <ul class="mb-4" style="line-height: 2;">
    <li><strong>التكرير (Refining):</strong>
      <ul style="margin-right: 1.5rem; margin-top: 0.5rem;">
        <li>التقطير الجوي (Atmospheric Distillation)</li>
        <li>التقطير الفراغي (Vacuum Distillation)</li>
        <li>التكسير الحفزي (Catalytic Cracking - FCC)</li>
        <li>التكسير الهيدروجيني (Hydrocracking)</li>
        <li>إعادة التشكيل (Reforming)</li>
      </ul>
    </li>
    <li><strong>المنتجات البترولية (Petroleum Products):</strong>
      <ul style="margin-right: 1.5rem; margin-top: 0.5rem;">
        <li>البنزين (Gasoline / Petrol)</li>
        <li>الديزل (Diesel)</li>
        <li>وقود الطائرات (Jet Fuel / Kerosene)</li>
        <li>زيوت التشحيم (Lubricants)</li>
        <li>الأسفلت (Asphalt / Bitumen)</li>
        <li>البتروكيماويات (Petrochemicals)</li>
      </ul>
    </li>
    <li><strong>التسويق والتوزيع (Marketing and Distribution):</strong>
      <ul style="margin-right: 1.5rem; margin-top: 0.5rem;">
        <li>محطات الوقود (Gas Stations)</li>
        <li>البيع بالجملة للصناعات</li>
        <li>التصدير الدولي</li>
      </ul>
    </li>
  </ul>
</section>

<section class="mb-8">
  <h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 الشركات المتكاملة والمتخصصة</h2>
  
  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 الشركات المتكاملة (Integrated Oil Companies - IOCs)</h3>
  
  <p class="mb-4" style="line-height: 1.8;">هذه الشركات تعمل في جميع القطاعات الثلاثة:</p>
  <ul class="mb-4" style="line-height: 2;">
    <li><strong>Supermajors:</strong> ExxonMobil, Shell, BP, Chevron, TotalEnergies</li>
    <li><strong>شركات النفط الوطنية (NOCs):</strong> Saudi Aramco, ADNOC, KPC, Qatar Energy, NIOC</li>
  </ul>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 شركات الخدمات النفطية (Oilfield Service Companies)</h3>
  
  <p class="mb-4" style="line-height: 1.8;">هذه الشركات توفر الخدمات والمعدات لشركات النفط:</p>
  <ul class="mb-4" style="line-height: 2;">
    <li><strong>الكبرى:</strong> Schlumberger (SLB), Halliburton, Baker Hughes</li>
    <li><strong>شركات الحفر:</strong> Transocean, Noble, Nabors, Patterson-UTI</li>
    <li><strong>الخدمات المتخصصة:</strong> Weatherford, National Oilwell Varco (NOV)</li>
  </ul>
</section>

<section class="mb-8">
  <h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 ملخص اليوم الأول</h2>
  <ul class="mb-4" style="line-height: 2;">
    <li>المصطلحات النفطية هي لغة التواصل العالمية في الصناعة</li>
    <li>صناعة النفط تنقسم إلى: Upstream (استكشاف وإنتاج)، Midstream (نقل وتخزين)، Downstream (تكرير وتسويق)</li>
    <li>مهندسو البترول يعملون غالباً في قطاع Upstream</li>
    <li>هناك شركات متكاملة (IOCs) وشركات خدمات (Service Companies)</li>
  </ul>
</section>
`, 
          keyTerms: [
            { term: 'Upstream', definition: 'قطاع المنبع - الاستكشاف والإنتاج (E&P)' },
            { term: 'Midstream', definition: 'القطاع الوسط - النقل والتخزين' },
            { term: 'Downstream', definition: 'قطاع المصب - التكرير والتسويق' },
            { term: 'E&P', definition: 'Exploration and Production - الاستكشاف والإنتاج' },
            { term: 'IOC', definition: 'Integrated Oil Company - شركة نفط متكاملة' },
            { term: 'NOC', definition: 'National Oil Company - شركة نفط وطنية' },
            { term: 'Oilfield Services', definition: 'شركات الخدمات النفطية التي توفر المعدات والخدمات' }
          ], 
          practiceQuestion: { 
            question: 'أي قطاع يركز على الاستكشاف وحفر الآبار وإنتاج النفط؟', 
            options: ['Downstream', 'Upstream', 'Midstream', 'Refining'], 
            correctAnswer: 1 
          } 
        }, 
        en: { 
          title: 'Introduction to Oil & Gas Terminology and Industry Sectors', 
          explanation: `
<section class="mb-8">
  <h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 The Importance of Terminology in the Oil and Gas Industry</h2>
  
  <p class="mb-4" style="line-height: 1.8;">The oil and gas industry is one of the most complex and specialized industries in the world, using a technical language that has evolved over 150 years since the industry began in 1859 in Pennsylvania. These terms are not just words; they are the primary means of communication between engineers, technicians, and operators worldwide. When a drilling engineer in Kuwait speaks with a colleague in Texas or the North Sea, they use the same English terminology to ensure precise and safe understanding.</p>

  <p class="mb-4" style="line-height: 1.8;">Mastering this terminology is not an academic luxury but a real professional necessity. Miscommunication in an oil field can lead to environmental disasters or massive human and economic losses. Imagine an engineer misunderstanding a term related to well pressure - the result could be a blowout like the Deepwater Horizon disaster in 2010.</p>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Why You Need to Master Oil & Gas Terminology?</h3>
  
  <ul class="mb-4" style="line-height: 2;">
    <li><strong>Safe Communication:</strong> Precise terminology prevents misunderstandings that could cause serious accidents</li>
    <li><strong>Reading Reports:</strong> Daily Drilling Reports (DDR) and geological reports are written in technical terms</li>
    <li><strong>Meetings and Planning:</strong> Well planning meetings use specialized terminology extensively</li>
    <li><strong>Employment and Interviews:</strong> Oil companies test your knowledge of terminology in interviews</li>
    <li><strong>Continuous Learning:</strong> Books, courses, and research all use these terms</li>
    <li><strong>International Work:</strong> Oil fields are multinational and terminology is the common language</li>
  </ul>
</section>

<section class="mb-8">
  <h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Main Divisions of the Oil Industry: Upstream, Midstream, Downstream</h2>
  
  <p class="mb-4" style="line-height: 1.8;">The oil and gas industry is traditionally divided into three main sectors. This division is fundamental to understanding how the industry works as a whole. Each sector has its specialized companies, engineers, and specific terminology.</p>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 First Sector: Upstream - Exploration and Production</h3>
  
  <p class="mb-4" style="line-height: 1.8;">Also called <strong>E&P (Exploration and Production)</strong>, this is the sector most petroleum engineers focus on. It includes:</p>
  
  <ul class="mb-4" style="line-height: 2;">
    <li><strong>Exploration:</strong>
      <ul style="margin-left: 1.5rem; margin-top: 0.5rem;">
        <li>Geological Survey to study surface rocks</li>
        <li>Seismic Survey using sound waves to image subsurface layers</li>
        <li>Geophysical Analysis</li>
        <li>Prospect Evaluation to identify potential drilling locations</li>
        <li>Drilling Exploration Wells (Wildcats)</li>
      </ul>
    </li>
    <li><strong>Appraisal:</strong>
      <ul style="margin-left: 1.5rem; margin-top: 0.5rem;">
        <li>Drilling Appraisal Wells to determine discovery size</li>
        <li>Production Tests</li>
        <li>Reserves Estimation</li>
        <li>Economic Feasibility Studies</li>
      </ul>
    </li>
    <li><strong>Development:</strong>
      <ul style="margin-left: 1.5rem; margin-top: 0.5rem;">
        <li>Field Development Plan (FDP) design</li>
        <li>Drilling Development Wells</li>
        <li>Building Surface Facilities</li>
        <li>Installing Flowlines</li>
      </ul>
    </li>
    <li><strong>Production:</strong>
      <ul style="margin-left: 1.5rem; margin-top: 0.5rem;">
        <li>Extracting oil and gas from wells</li>
        <li>Primary Separation of oil, gas, and water</li>
        <li>Initial Treatment</li>
        <li>Reservoir Management</li>
        <li>Enhanced Oil Recovery (EOR)</li>
      </ul>
    </li>
  </ul>

  <p class="mb-4" style="background: #fef3c7; padding: 1rem; border-radius: 0.5rem;"><strong>💡 Important Note:</strong> Major Upstream companies include: Saudi Aramco, ExxonMobil, Shell, BP, Chevron, TotalEnergies, Kuwait Oil Company (KOC), Abu Dhabi National Oil Company (ADNOC).</p>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Second Sector: Midstream - Transportation and Storage</h3>
  
  <p class="mb-4" style="line-height: 1.8;">This sector represents the middle link between production and refining:</p>
  
  <ul class="mb-4" style="line-height: 2;">
    <li><strong>Pipelines:</strong> Transporting crude oil and gas over long distances</li>
    <li><strong>Tankers:</strong> Giant ships for maritime oil transport</li>
    <li><strong>Storage Tanks:</strong> Storing crude oil and products</li>
    <li><strong>Pumping Stations:</strong> Pushing oil through pipelines</li>
    <li><strong>Compression Stations:</strong> Compressing gas for transport</li>
    <li><strong>Loading/Unloading Terminals:</strong> Specialized oil ports</li>
    <li><strong>Gas Processing:</strong> Removing impurities and separating liquids</li>
    <li><strong>LNG (Liquefied Natural Gas):</strong> Converting gas to liquid for ship transport</li>
  </ul>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Third Sector: Downstream - Refining and Marketing</h3>
  
  <p class="mb-4" style="line-height: 1.8;">This sector converts crude oil into usable products:</p>
  
  <ul class="mb-4" style="line-height: 2;">
    <li><strong>Refining:</strong>
      <ul style="margin-left: 1.5rem; margin-top: 0.5rem;">
        <li>Atmospheric Distillation</li>
        <li>Vacuum Distillation</li>
        <li>Catalytic Cracking (FCC)</li>
        <li>Hydrocracking</li>
        <li>Reforming</li>
      </ul>
    </li>
    <li><strong>Petroleum Products:</strong>
      <ul style="margin-left: 1.5rem; margin-top: 0.5rem;">
        <li>Gasoline (Petrol)</li>
        <li>Diesel</li>
        <li>Jet Fuel (Kerosene)</li>
        <li>Lubricants</li>
        <li>Asphalt (Bitumen)</li>
        <li>Petrochemicals</li>
      </ul>
    </li>
    <li><strong>Marketing and Distribution:</strong>
      <ul style="margin-left: 1.5rem; margin-top: 0.5rem;">
        <li>Gas Stations</li>
        <li>Wholesale to industries</li>
        <li>International export</li>
      </ul>
    </li>
  </ul>
</section>

<section class="mb-8">
  <h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Integrated and Specialized Companies</h2>
  
  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Integrated Oil Companies (IOCs)</h3>
  
  <p class="mb-4" style="line-height: 1.8;">These companies operate across all three sectors:</p>
  <ul class="mb-4" style="line-height: 2;">
    <li><strong>Supermajors:</strong> ExxonMobil, Shell, BP, Chevron, TotalEnergies</li>
    <li><strong>National Oil Companies (NOCs):</strong> Saudi Aramco, ADNOC, KPC, Qatar Energy, NIOC</li>
  </ul>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Oilfield Service Companies</h3>
  
  <p class="mb-4" style="line-height: 1.8;">These companies provide services and equipment to oil companies:</p>
  <ul class="mb-4" style="line-height: 2;">
    <li><strong>Major Players:</strong> Schlumberger (SLB), Halliburton, Baker Hughes</li>
    <li><strong>Drilling Contractors:</strong> Transocean, Noble, Nabors, Patterson-UTI</li>
    <li><strong>Specialized Services:</strong> Weatherford, National Oilwell Varco (NOV)</li>
  </ul>
</section>

<section class="mb-8">
  <h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Day 1 Summary</h2>
  <ul class="mb-4" style="line-height: 2;">
    <li>Oil & gas terminology is the global communication language in the industry</li>
    <li>The industry divides into: Upstream (exploration & production), Midstream (transportation & storage), Downstream (refining & marketing)</li>
    <li>Petroleum engineers primarily work in the Upstream sector</li>
    <li>There are Integrated Oil Companies (IOCs) and Service Companies</li>
  </ul>
</section>
`, 
          keyTerms: [
            { term: 'Upstream', definition: 'Exploration and Production sector (E&P)' },
            { term: 'Midstream', definition: 'Transportation and Storage sector' },
            { term: 'Downstream', definition: 'Refining and Marketing sector' },
            { term: 'E&P', definition: 'Exploration and Production' },
            { term: 'IOC', definition: 'Integrated Oil Company - operates in all sectors' },
            { term: 'NOC', definition: 'National Oil Company - government-owned' },
            { term: 'Oilfield Services', definition: 'Companies providing equipment and services to oil companies' }
          ], 
          practiceQuestion: { 
            question: 'Which sector focuses on exploration, drilling wells, and oil production?', 
            options: ['Downstream', 'Upstream', 'Midstream', 'Refining'], 
            correctAnswer: 1 
          } 
        } 
      } 
    },
    { 
      day: 2, 
      type: 'learning', 
      content: { 
        ar: { 
          title: 'مصطلحات الحفر الأساسية - الجزء الأول', 
          explanation: `
<section class="mb-8">
  <h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 مقدمة في مصطلحات الحفر</h2>
  
  <p class="mb-4" style="line-height: 1.8;">الحفر هو قلب صناعة النفط، وبدونه لا يمكن الوصول للنفط والغاز المحبوسين في أعماق الأرض. لذلك، تطورت مصطلحات الحفر لتكون دقيقة جداً، حيث أن أي سوء فهم قد يكلف ملايين الدولارات أو أرواحاً بشرية. في هذا الدرس سنتعلم أهم المصطلحات التي ستسمعها يومياً في حقول النفط.</p>

  <p class="mb-4" style="line-height: 1.8;">معظم هذه المصطلحات اختصارات (Acronyms) لأن المهندسين والفنيين يستخدمونها مئات المرات يومياً، فالاختصار يوفر الوقت ويمنع الالتباس.</p>
</section>

<section class="mb-8">
  <h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 مصطلحات قياسات عمق البئر</h2>
  
  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 TD - Total Depth (العمق الكلي)</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>التعريف:</strong> العمق النهائي المخطط أو المحفور للبئر، يُقاس عادةً من Kelly Bushing أو Rotary Table على سطح منصة الحفر.</p>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>الاستخدام العملي:</strong></p>
  <ul class="mb-4" style="line-height: 2;">
    <li>"The well reached TD at 15,000 feet" - البئر وصل للعمق الكلي 15,000 قدم</li>
    <li>"We are 500 feet from TD" - نحن على بعد 500 قدم من العمق المستهدف</li>
    <li>"TD was achieved ahead of schedule" - تم الوصول للعمق الكلي قبل الموعد المحدد</li>
  </ul>
  
  <p class="mb-4" style="background: #fee2e2; padding: 1rem; border-radius: 0.5rem;"><strong>⚠️ تنبيه:</strong> TD يمكن أن يكون مخططاً (Planned TD) أو فعلياً (Actual TD). أحياناً يتوقف الحفر قبل TD المخطط بسبب مشاكل تقنية أو وصول مبكر للهدف.</p>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 MD - Measured Depth (العمق المقاس)</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>التعريف:</strong> الطول الفعلي لمسار البئر من السطح إلى نقطة معينة، يُقاس على طول محور البئر. هذا هو العمق الذي ستراه في تقارير الحفر اليومية.</p>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>لماذا نستخدم MD؟</strong></p>
  <ul class="mb-4" style="line-height: 2;">
    <li>لحساب كمية أنابيب الحفر (Drill Pipe) المطلوبة</li>
    <li>لتحديد موقع الأدوات في البئر</li>
    <li>لحساب الوقت المطلوب لسحب أو إنزال المعدات (Trip Time)</li>
  </ul>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>مثال:</strong> بئر مائل (Deviated Well) قد يكون MD = 12,000 قدم بينما TVD = 10,000 قدم فقط.</p>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 TVD - True Vertical Depth (العمق العمودي الحقيقي)</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>التعريف:</strong> المسافة العمودية من نقطة مرجعية على السطح إلى نقطة في البئر. هذا العمق يتجاهل أي ميل أو انحراف في مسار البئر.</p>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>لماذا TVD مهم جداً؟</strong></p>
  <ul class="mb-4" style="line-height: 2;">
    <li><strong>حسابات الضغط:</strong> الضغط الهيدروستاتيكي يعتمد على TVD وليس MD</li>
    <li><strong>الخرائط الجيولوجية:</strong> الطبقات الجيولوجية ترسم حسب TVD</li>
    <li><strong>تصميم البئر:</strong> أعماق أنابيب التغليف (Casing) تُحدد بناءً على TVD</li>
  </ul>
  
  <p class="mb-4" style="background: #fef3c7; padding: 1rem; border-radius: 0.5rem;"><strong>💡 معادلة مهمة:</strong> TVD = MD × cos(θ) حيث θ هي زاوية الميل. في البئر العمودي المثالي: MD = TVD</p>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 TVDSS - True Vertical Depth Subsea (العمق العمودي تحت سطح البحر)</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>التعريف:</strong> العمق العمودي مقاساً من مستوى سطح البحر (Mean Sea Level - MSL). هذا هو المرجع القياسي العالمي للمقارنة بين الآبار.</p>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>الاستخدام:</strong></p>
  <ul class="mb-4" style="line-height: 2;">
    <li>مقارنة أعماق الطبقات الجيولوجية بين آبار مختلفة</li>
    <li>رسم الخرائط الهيكلية (Structural Maps)</li>
    <li>تحديد تماسات الموائع (Fluid Contacts) مثل OWC و GOC</li>
  </ul>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>مثال:</strong> منصة بحرية ارتفاعها 100 قدم فوق سطح البحر، وعمق البحر 300 قدم:<br/>
  إذا كان TVD من Rotary Table = 10,000 قدم<br/>
  فإن TVDSS = 10,000 - 100 = 9,900 قدم (تحت سطح البحر)</p>
</section>

<section class="mb-8">
  <h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 مصطلحات معايير أداء الحفر</h2>
  
  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 ROP - Rate of Penetration (معدل الاختراق)</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>التعريف:</strong> السرعة التي يخترق بها رأس الحفر (Drill Bit) الصخور، تُقاس بالأقدام أو الأمتار في الساعة (ft/hr أو m/hr).</p>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>العوامل المؤثرة على ROP:</strong></p>
  <ul class="mb-4" style="line-height: 2;">
    <li><strong>نوع الصخور:</strong> الصخور اللينة (Shale) = ROP عالي، الصخور الصلبة (Granite) = ROP منخفض</li>
    <li><strong>WOB - Weight on Bit:</strong> زيادة الوزن تزيد ROP حتى حد معين</li>
    <li><strong>RPM:</strong> سرعة دوران رأس الحفر</li>
    <li><strong>نوع رأس الحفر:</strong> PDC bits أسرع من Roller Cone في بعض التكوينات</li>
    <li><strong>خصائص سائل الحفر:</strong> الكثافة واللزوجة تؤثران على الأداء</li>
    <li><strong>قوة الدفع الهيدروليكي:</strong> Hydraulic Horsepower عند رأس الحفر</li>
  </ul>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>قيم نموذجية:</strong></p>
  <ul class="mb-4" style="line-height: 2;">
    <li>طبقات لينة: 50-200 ft/hr</li>
    <li>طبقات متوسطة: 10-50 ft/hr</li>
    <li>طبقات صلبة جداً: 1-10 ft/hr</li>
  </ul>
  
  <p class="mb-4" style="background: #fef3c7; padding: 1rem; border-radius: 0.5rem;"><strong>💡 نصيحة عملية:</strong> تتبع ROP يساعد في تحديد الطبقات الجيولوجية (Formation Tops) لأن التغير المفاجئ في ROP يشير لتغير نوع الصخور.</p>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 WOB - Weight on Bit (الوزن على رأس الحفر)</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>التعريف:</strong> القوة العمودية المطبقة على رأس الحفر لدفعه في الصخور، تُقاس بآلاف الأرطال (klbs أو Klbf).</p>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>كيف يتم التحكم في WOB؟</strong></p>
  <ul class="mb-4" style="line-height: 2;">
    <li>يأتي الوزن من Drill Collars (أطواق الحفر الثقيلة)</li>
    <li>يتحكم السائق (Driller) في الوزن عبر نظام الفرامل</li>
    <li>زيادة الوزن تزيد ROP لكن قد تتلف رأس الحفر</li>
    <li>وزن قليل جداً يسبب اهتزازات ضارة</li>
  </ul>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>قيم نموذجية:</strong> 5,000 - 60,000 lbs حسب حجم ونوع رأس الحفر والتكوين</p>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 RPM - Rotations Per Minute (دورات في الدقيقة)</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>التعريف:</strong> سرعة دوران سلسلة الحفر ورأس الحفر، تُقاس بعدد الدورات الكاملة في الدقيقة.</p>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>مصادر الدوران:</strong></p>
  <ul class="mb-4" style="line-height: 2;">
    <li><strong>Top Drive:</strong> محرك علوي يدور سلسلة الحفر من الأعلى (الأكثر شيوعاً حالياً)</li>
    <li><strong>Rotary Table:</strong> طاولة دوارة تقليدية</li>
    <li><strong>Mud Motor:</strong> محرك طيني يعمل بضغط سائل الحفر في أسفل البئر</li>
  </ul>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>قيم نموذجية:</strong></p>
  <ul class="mb-4" style="line-height: 2;">
    <li>Rotary Table / Top Drive: 60-200 RPM</li>
    <li>Mud Motor: 100-400 RPM (إضافية)</li>
    <li>إجمالي RPM عند رأس الحفر قد يصل 400+ RPM</li>
  </ul>
</section>

<section class="mb-8">
  <h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 مصطلحات تجميعة قاع البئر</h2>
  
  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 BHA - Bottom Hole Assembly (تجميعة قاع البئر)</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>التعريف:</strong> مجموعة المكونات الموجودة في الجزء السفلي من سلسلة الحفر، من رأس الحفر حتى نهاية Drill Collars أو HWDP.</p>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>مكونات BHA النموذجية:</strong></p>
  <ul class="mb-4" style="line-height: 2;">
    <li><strong>Bit:</strong> رأس الحفر</li>
    <li><strong>Bit Sub:</strong> وصلة بين رأس الحفر والمكونات الأخرى</li>
    <li><strong>Mud Motor:</strong> محرك طيني (في الحفر الموجه)</li>
    <li><strong>Stabilizers:</strong> مثبتات للتحكم في مسار البئر</li>
    <li><strong>MWD/LWD Tools:</strong> أدوات القياس أثناء الحفر</li>
    <li><strong>Drill Collars:</strong> أطواق حفر ثقيلة توفر الوزن</li>
    <li><strong>HWDP:</strong> أنابيب حفر ثقيلة الوزن</li>
    <li><strong>Jars:</strong> أدوات التحرير عند علوق سلسلة الحفر</li>
    <li><strong>Shock Sub:</strong> ممتص الصدمات</li>
  </ul>
  
  <p class="mb-4" style="background: #fef3c7; padding: 1rem; border-radius: 0.5rem;"><strong>💡 معلومة:</strong> تصميم BHA يحدد سلوك البئر - هل سيميل للأعلى (Build) أو للأسفل (Drop) أو يحافظ على زاويته (Hold).</p>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Drill String (سلسلة الحفر)</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>التعريف:</strong> كامل الأنابيب والأدوات من السطح إلى رأس الحفر، تشمل:</p>
  <ul class="mb-4" style="line-height: 2;">
    <li><strong>Kelly أو Top Drive:</strong> في الأعلى</li>
    <li><strong>Drill Pipe:</strong> الأنابيب الرئيسية (5" أو 5-1/2" قطر)</li>
    <li><strong>HWDP:</strong> Heavy Weight Drill Pipe - انتقالية</li>
    <li><strong>BHA:</strong> في الأسفل</li>
  </ul>
</section>

<section class="mb-8">
  <h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 ملخص اليوم الثاني</h2>
  <ul class="mb-4" style="line-height: 2;">
    <li>TD: العمق الكلي المستهدف للبئر</li>
    <li>MD: العمق المقاس على طول مسار البئر</li>
    <li>TVD: العمق العمودي الحقيقي (مهم للضغط)</li>
    <li>ROP: معدل الاختراق (سرعة الحفر)</li>
    <li>WOB: الوزن على رأس الحفر</li>
    <li>RPM: سرعة الدوران</li>
    <li>BHA: تجميعة قاع البئر التي تحتوي أدوات الحفر</li>
  </ul>
</section>
`, 
          keyTerms: [
            { term: 'TD', definition: 'Total Depth - العمق الكلي المخطط أو المحفور للبئر' },
            { term: 'MD', definition: 'Measured Depth - الطول الفعلي لمسار البئر' },
            { term: 'TVD', definition: 'True Vertical Depth - العمق العمودي الحقيقي' },
            { term: 'TVDSS', definition: 'True Vertical Depth Subsea - العمق تحت سطح البحر' },
            { term: 'ROP', definition: 'Rate of Penetration - معدل الاختراق (ft/hr)' },
            { term: 'WOB', definition: 'Weight on Bit - الوزن المطبق على رأس الحفر' },
            { term: 'RPM', definition: 'Rotations Per Minute - سرعة دوران سلسلة الحفر' },
            { term: 'BHA', definition: 'Bottom Hole Assembly - تجميعة قاع البئر' }
          ], 
          practiceQuestion: { 
            question: 'في بئر مائل، أي قياس يُستخدم لحساب الضغط الهيدروستاتيكي؟', 
            options: ['MD - العمق المقاس', 'TVD - العمق العمودي الحقيقي', 'TD - العمق الكلي', 'ROP - معدل الاختراق'], 
            correctAnswer: 1 
          } 
        }, 
        en: { 
          title: 'Basic Drilling Terminology - Part 1', 
          explanation: `
<section class="mb-8">
  <h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Introduction to Drilling Terminology</h2>
  
  <p class="mb-4" style="line-height: 1.8;">Drilling is the heart of the oil industry, without which we cannot access oil and gas trapped deep underground. Therefore, drilling terminology has evolved to be extremely precise, as any misunderstanding could cost millions of dollars or human lives. In this lesson, we will learn the most important terms you will hear daily in oil fields.</p>

  <p class="mb-4" style="line-height: 1.8;">Most of these terms are acronyms because engineers and technicians use them hundreds of times daily, so abbreviations save time and prevent confusion.</p>
</section>

<section class="mb-8">
  <h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Well Depth Measurement Terms</h2>
  
  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 TD - Total Depth</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>Definition:</strong> The final planned or drilled depth of the well, usually measured from the Kelly Bushing or Rotary Table on the rig floor surface.</p>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>Practical Usage:</strong></p>
  <ul class="mb-4" style="line-height: 2;">
    <li>"The well reached TD at 15,000 feet"</li>
    <li>"We are 500 feet from TD"</li>
    <li>"TD was achieved ahead of schedule"</li>
  </ul>
  
  <p class="mb-4" style="background: #fee2e2; padding: 1rem; border-radius: 0.5rem;"><strong>⚠️ Note:</strong> TD can be planned (Planned TD) or actual (Actual TD). Sometimes drilling stops before planned TD due to technical issues or early target achievement.</p>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 MD - Measured Depth</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>Definition:</strong> The actual length of the wellbore path from surface to a specific point, measured along the well axis. This is the depth you will see in daily drilling reports.</p>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>Why do we use MD?</strong></p>
  <ul class="mb-4" style="line-height: 2;">
    <li>To calculate the amount of Drill Pipe required</li>
    <li>To determine tool locations in the well</li>
    <li>To calculate time required for trips (Trip Time)</li>
  </ul>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>Example:</strong> A deviated well may have MD = 12,000 feet while TVD = only 10,000 feet.</p>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 TVD - True Vertical Depth</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>Definition:</strong> The vertical distance from a reference point on surface to a point in the well. This depth ignores any inclination or deviation in the wellbore path.</p>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>Why is TVD so important?</strong></p>
  <ul class="mb-4" style="line-height: 2;">
    <li><strong>Pressure Calculations:</strong> Hydrostatic pressure depends on TVD, not MD</li>
    <li><strong>Geological Maps:</strong> Geological layers are mapped according to TVD</li>
    <li><strong>Well Design:</strong> Casing depths are determined based on TVD</li>
  </ul>
  
  <p class="mb-4" style="background: #fef3c7; padding: 1rem; border-radius: 0.5rem;"><strong>💡 Important Formula:</strong> TVD = MD × cos(θ) where θ is the inclination angle. In an ideal vertical well: MD = TVD</p>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 TVDSS - True Vertical Depth Subsea</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>Definition:</strong> The vertical depth measured from Mean Sea Level (MSL). This is the global standard reference for comparing wells.</p>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>Usage:</strong></p>
  <ul class="mb-4" style="line-height: 2;">
    <li>Comparing geological layer depths between different wells</li>
    <li>Drawing structural maps</li>
    <li>Determining fluid contacts (OWC and GOC)</li>
  </ul>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>Example:</strong> An offshore platform 100 feet above sea level, water depth 300 feet:<br/>
  If TVD from Rotary Table = 10,000 feet<br/>
  Then TVDSS = 10,000 - 100 = 9,900 feet (below sea level)</p>
</section>

<section class="mb-8">
  <h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Drilling Performance Parameter Terms</h2>
  
  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 ROP - Rate of Penetration</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>Definition:</strong> The speed at which the drill bit penetrates the rock, measured in feet or meters per hour (ft/hr or m/hr).</p>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>Factors Affecting ROP:</strong></p>
  <ul class="mb-4" style="line-height: 2;">
    <li><strong>Rock Type:</strong> Soft rocks (Shale) = high ROP, Hard rocks (Granite) = low ROP</li>
    <li><strong>WOB - Weight on Bit:</strong> Increasing weight increases ROP up to a limit</li>
    <li><strong>RPM:</strong> Drill bit rotation speed</li>
    <li><strong>Bit Type:</strong> PDC bits are faster than Roller Cone in some formations</li>
    <li><strong>Drilling Fluid Properties:</strong> Density and viscosity affect performance</li>
    <li><strong>Hydraulic Horsepower:</strong> Power at the bit</li>
  </ul>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>Typical Values:</strong></p>
  <ul class="mb-4" style="line-height: 2;">
    <li>Soft formations: 50-200 ft/hr</li>
    <li>Medium formations: 10-50 ft/hr</li>
    <li>Very hard formations: 1-10 ft/hr</li>
  </ul>
  
  <p class="mb-4" style="background: #fef3c7; padding: 1rem; border-radius: 0.5rem;"><strong>💡 Practical Tip:</strong> Tracking ROP helps identify formation tops because sudden ROP changes indicate rock type changes.</p>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 WOB - Weight on Bit</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>Definition:</strong> The vertical force applied to the drill bit to push it into the rock, measured in thousands of pounds (klbs or Klbf).</p>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>How is WOB controlled?</strong></p>
  <ul class="mb-4" style="line-height: 2;">
    <li>Weight comes from Drill Collars (heavy drilling pipes)</li>
    <li>The Driller controls weight via the brake system</li>
    <li>Increasing weight increases ROP but may damage the bit</li>
    <li>Too little weight causes harmful vibrations</li>
  </ul>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>Typical Values:</strong> 5,000 - 60,000 lbs depending on bit size, type, and formation</p>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 RPM - Rotations Per Minute</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>Definition:</strong> The rotation speed of the drill string and drill bit, measured in complete rotations per minute.</p>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>Rotation Sources:</strong></p>
  <ul class="mb-4" style="line-height: 2;">
    <li><strong>Top Drive:</strong> Upper motor rotating the drill string from above (most common now)</li>
    <li><strong>Rotary Table:</strong> Traditional rotating table</li>
    <li><strong>Mud Motor:</strong> Downhole motor powered by drilling fluid pressure</li>
  </ul>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>Typical Values:</strong></p>
  <ul class="mb-4" style="line-height: 2;">
    <li>Rotary Table / Top Drive: 60-200 RPM</li>
    <li>Mud Motor: 100-400 RPM (additional)</li>
    <li>Total RPM at bit can reach 400+ RPM</li>
  </ul>
</section>

<section class="mb-8">
  <h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Bottom Hole Assembly Terms</h2>
  
  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 BHA - Bottom Hole Assembly</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>Definition:</strong> The collection of components at the lower part of the drill string, from the drill bit to the end of Drill Collars or HWDP.</p>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>Typical BHA Components:</strong></p>
  <ul class="mb-4" style="line-height: 2;">
    <li><strong>Bit:</strong> The drill bit</li>
    <li><strong>Bit Sub:</strong> Connection between bit and other components</li>
    <li><strong>Mud Motor:</strong> For directional drilling</li>
    <li><strong>Stabilizers:</strong> Control wellbore trajectory</li>
    <li><strong>MWD/LWD Tools:</strong> Measurement while drilling tools</li>
    <li><strong>Drill Collars:</strong> Heavy pipes providing weight</li>
    <li><strong>HWDP:</strong> Heavy Weight Drill Pipe</li>
    <li><strong>Jars:</strong> Release tools when stuck</li>
    <li><strong>Shock Sub:</strong> Shock absorber</li>
  </ul>
  
  <p class="mb-4" style="background: #fef3c7; padding: 1rem; border-radius: 0.5rem;"><strong>💡 Note:</strong> BHA design determines well behavior - whether it will build angle, drop, or hold.</p>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Drill String</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>Definition:</strong> The complete tubulars and tools from surface to drill bit, including:</p>
  <ul class="mb-4" style="line-height: 2;">
    <li><strong>Kelly or Top Drive:</strong> At the top</li>
    <li><strong>Drill Pipe:</strong> Main pipes (5" or 5-1/2" diameter)</li>
    <li><strong>HWDP:</strong> Heavy Weight Drill Pipe - transitional</li>
    <li><strong>BHA:</strong> At the bottom</li>
  </ul>
</section>

<section class="mb-8">
  <h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Day 2 Summary</h2>
  <ul class="mb-4" style="line-height: 2;">
    <li>TD: Total target depth of the well</li>
    <li>MD: Measured depth along the wellbore path</li>
    <li>TVD: True vertical depth (important for pressure)</li>
    <li>ROP: Rate of penetration (drilling speed)</li>
    <li>WOB: Weight on bit</li>
    <li>RPM: Rotation speed</li>
    <li>BHA: Bottom hole assembly containing drilling tools</li>
  </ul>
</section>
`, 
          keyTerms: [
            { term: 'TD', definition: 'Total Depth - The final planned or drilled depth of the well' },
            { term: 'MD', definition: 'Measured Depth - The actual length of the wellbore path' },
            { term: 'TVD', definition: 'True Vertical Depth - The vertical distance from surface' },
            { term: 'TVDSS', definition: 'True Vertical Depth Subsea - Depth below sea level' },
            { term: 'ROP', definition: 'Rate of Penetration - Drilling speed (ft/hr)' },
            { term: 'WOB', definition: 'Weight on Bit - Force applied to the drill bit' },
            { term: 'RPM', definition: 'Rotations Per Minute - Drill string rotation speed' },
            { term: 'BHA', definition: 'Bottom Hole Assembly - Lower drill string components' }
          ], 
          practiceQuestion: { 
            question: 'In a deviated well, which measurement is used to calculate hydrostatic pressure?', 
            options: ['MD - Measured Depth', 'TVD - True Vertical Depth', 'TD - Total Depth', 'ROP - Rate of Penetration'], 
            correctAnswer: 1 
          } 
        } 
      } 
    },
    { 
      day: 3, 
      type: 'learning', 
      content: { 
        ar: { 
          title: 'مصطلحات المكمن والإنتاج', 
          explanation: `
<section class="mb-8">
  <h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 مقدمة في مصطلحات المكمن</h2>
  
  <p class="mb-4" style="line-height: 1.8;">مهندس المكامن (Reservoir Engineer) هو الذي يحدد كمية النفط الموجودة وكيفية استخراجها بأفضل طريقة. لذلك، مصطلحات المكامن تركز على قياس وتقدير الموارد والاحتياطيات وسلوك الموائع في باطن الأرض.</p>
</section>

<section class="mb-8">
  <h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 مصطلحات تقدير الموارد والاحتياطيات</h2>
  
  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 STOIIP - Stock Tank Oil Initially In Place (النفط الأصلي في المكان)</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>التعريف:</strong> إجمالي كمية النفط الموجودة أصلاً في المكمن قبل أي إنتاج، محسوبة عند ظروف السطح القياسية (60°F و 14.7 psia). تُقاس بالبراميل (STB) أو متر مكعب.</p>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>معادلة Volumetric STOIIP:</strong></p>
  <p class="mb-4" style="background: #e0f2fe; padding: 1rem; border-radius: 0.5rem; font-family: monospace;">
  STOIIP = (7758 × A × h × φ × (1-Sw)) / Bo<br/><br/>
  حيث:<br/>
  • A = مساحة المكمن (acres)<br/>
  • h = السماكة الصافية المنتجة (Net Pay) بالأقدام<br/>
  • φ = المسامية (Porosity) كنسبة عشرية<br/>
  • Sw = تشبع الماء (Water Saturation)<br/>
  • Bo = عامل حجم التكوين للنفط (Oil Formation Volume Factor)
  </p>
  
  <p class="mb-4" style="background: #fef3c7; padding: 1rem; border-radius: 0.5rem;"><strong>💡 ملاحظة مهمة:</strong> STOIIP ≠ الاحتياطيات! ليس كل النفط في المكان يمكن استخراجه.</p>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 GIIP - Gas Initially In Place (الغاز الأصلي في المكان)</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>التعريف:</strong> إجمالي كمية الغاز في المكمن قبل الإنتاج، تُقاس بالقدم المكعب القياسي (SCF) أو بوحدة BCF (مليار قدم مكعب).</p>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 RF - Recovery Factor (عامل الاستخلاص)</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>التعريف:</strong> نسبة النفط أو الغاز التي يمكن استخراجها من المكمن، تُعبر كنسبة مئوية من STOIIP أو GIIP.</p>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>قيم نموذجية لعامل الاستخلاص:</strong></p>
  <ul class="mb-4" style="line-height: 2;">
    <li><strong>الدفع بالماء (Water Drive):</strong> 35-75%</li>
    <li><strong>الدفع بالغاز المذاب (Solution Gas Drive):</strong> 10-30%</li>
    <li><strong>الدفع بتمدد الغطاء الغازي (Gas Cap Expansion):</strong> 20-40%</li>
    <li><strong>مكامن الغاز:</strong> 70-90%</li>
    <li><strong>مع EOR:</strong> يمكن زيادة RF بـ 10-30% إضافية</li>
  </ul>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 EUR - Estimated Ultimate Recovery (الإنتاج النهائي المقدر)</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>التعريف:</strong> إجمالي كمية النفط أو الغاز المتوقع إنتاجها من بئر أو حقل على مدى عمره الإنتاجي.</p>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>EUR = STOIIP × RF</strong></p>
  
  <p class="mb-4" style="line-height: 1.8;">EUR يُستخدم لـ:</p>
  <ul class="mb-4" style="line-height: 2;">
    <li>تقييم جدوى المشروع الاقتصادية</li>
    <li>مقارنة الآبار والحقول</li>
    <li>التخطيط طويل المدى</li>
  </ul>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 تصنيف الاحتياطيات (Reserves Classification)</h3>
  
  <p class="mb-4" style="line-height: 1.8;">حسب نظام SPE-PRMS:</p>
  <ul class="mb-4" style="line-height: 2;">
    <li><strong>Proved Reserves (1P):</strong> احتياطيات مؤكدة بثقة ≥90%</li>
    <li><strong>Probable Reserves (2P):</strong> مؤكدة + محتملة بثقة ≥50%</li>
    <li><strong>Possible Reserves (3P):</strong> مؤكدة + محتملة + ممكنة بثقة ≥10%</li>
  </ul>
</section>

<section class="mb-8">
  <h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 مصطلحات أداء البئر والمكمن</h2>
  
  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 PI - Productivity Index (مؤشر الإنتاجية)</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>التعريف:</strong> مقياس لقدرة البئر على الإنتاج، يُحسب كنسبة معدل الإنتاج إلى فرق الضغط (Drawdown).</p>
  
  <p class="mb-4" style="background: #e0f2fe; padding: 1rem; border-radius: 0.5rem; font-family: monospace;">
  PI = q / (Pr - Pwf)<br/><br/>
  حيث:<br/>
  • q = معدل الإنتاج (STB/day أو Mscf/day)<br/>
  • Pr = ضغط المكمن (Reservoir Pressure)<br/>
  • Pwf = ضغط قاع البئر المتدفق (Flowing Bottomhole Pressure)
  </p>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>الوحدة:</strong> STB/day/psi أو m³/day/kPa</p>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 IPR - Inflow Performance Relationship (علاقة أداء التدفق)</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>التعريف:</strong> العلاقة بين معدل إنتاج البئر وضغط قاع البئر المتدفق. ترسم كمنحنى يوضح أداء البئر عند ظروف تشغيل مختلفة.</p>
  
  <p class="mb-4" style="line-height: 1.8;">نماذج IPR الشائعة:</p>
  <ul class="mb-4" style="line-height: 2;">
    <li><strong>PI الخطي:</strong> للنفط فوق ضغط نقطة الفقاعة</li>
    <li><strong>Vogel:</strong> للنفط تحت ضغط نقطة الفقاعة (two-phase flow)</li>
    <li><strong>Fetkovich:</strong> للغاز والنفط</li>
  </ul>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 OWC - Oil Water Contact (حد تماس النفط والماء)</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>التعريف:</strong> العمق أو المستوى الذي يفصل بين منطقة النفط ومنطقة الماء في المكمن. يُحدد عادةً بـ TVDSS.</p>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>أهمية OWC:</strong></p>
  <ul class="mb-4" style="line-height: 2;">
    <li>تحديد السماكة المنتجة للنفط</li>
    <li>تصميم مواقع الإكمال</li>
    <li>مراقبة تقدم الماء مع الإنتاج</li>
  </ul>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 GOC - Gas Oil Contact (حد تماس الغاز والنفط)</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>التعريف:</strong> العمق الذي يفصل بين الغطاء الغازي (Gas Cap) ومنطقة النفط في المكمن.</p>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 GWC - Gas Water Contact (حد تماس الغاز والماء)</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>التعريف:</strong> في مكامن الغاز بدون نفط، هو العمق الفاصل بين منطقة الغاز والماء.</p>
</section>

<section class="mb-8">
  <h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 مصطلحات معدلات الإنتاج</h2>
  
  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 BOPD - Barrels of Oil Per Day (براميل النفط يومياً)</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>التعريف:</strong> معدل إنتاج النفط اليومي، الوحدة الأكثر شيوعاً في الصناعة.</p>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>مصطلحات مرتبطة:</strong></p>
  <ul class="mb-4" style="line-height: 2;">
    <li><strong>BFPD:</strong> Barrels of Fluid Per Day - إجمالي السوائل (نفط + ماء)</li>
    <li><strong>BWPD:</strong> Barrels of Water Per Day - براميل الماء المنتج</li>
    <li><strong>BLPD:</strong> Barrels of Liquid Per Day - مرادف لـ BFPD</li>
  </ul>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 GOR - Gas Oil Ratio (نسبة الغاز للنفط)</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>التعريف:</strong> كمية الغاز المنتج لكل برميل نفط، تُقاس بـ scf/STB.</p>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>أنواع GOR:</strong></p>
  <ul class="mb-4" style="line-height: 2;">
    <li><strong>Solution GOR (Rs):</strong> الغاز المذاب في النفط عند ظروف المكمن</li>
    <li><strong>Producing GOR:</strong> النسبة الفعلية عند الإنتاج</li>
    <li><strong>Cumulative GOR:</strong> المتراكم على مدى عمر البئر</li>
  </ul>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>قيم نموذجية:</strong></p>
  <ul class="mb-4" style="line-height: 2;">
    <li>نفط ثقيل: 100-500 scf/STB</li>
    <li>نفط متوسط: 500-2,000 scf/STB</li>
    <li>نفط خفيف / مكثفات: 2,000-10,000+ scf/STB</li>
  </ul>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 WOR / Water Cut (نسبة الماء للنفط / نسبة القطع المائي)</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>Water Cut = BWPD / BFPD × 100%</strong></p>
  
  <p class="mb-4" style="line-height: 1.8;">ارتفاع Water Cut يشير إلى:</p>
  <ul class="mb-4" style="line-height: 2;">
    <li>تقدم جبهة الماء (Water Coning أو Water Breakthrough)</li>
    <li>نضوب المكمن</li>
    <li>قد يتطلب إجراءات مثل Water Shutoff</li>
  </ul>
</section>

<section class="mb-8">
  <h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 ملخص اليوم الثالث</h2>
  <ul class="mb-4" style="line-height: 2;">
    <li>STOIIP/GIIP: إجمالي الهيدروكربونات في المكمن</li>
    <li>RF: نسبة ما يمكن استخراجه</li>
    <li>EUR: الإنتاج المتوقع على عمر البئر/الحقل</li>
    <li>PI/IPR: أداء البئر الإنتاجي</li>
    <li>OWC/GOC: حدود تماس الموائع</li>
    <li>BOPD, GOR, Water Cut: معايير الإنتاج اليومية</li>
  </ul>
</section>
`, 
          keyTerms: [
            { term: 'STOIIP', definition: 'Stock Tank Oil Initially In Place - النفط الأصلي في المكان' },
            { term: 'GIIP', definition: 'Gas Initially In Place - الغاز الأصلي في المكان' },
            { term: 'RF', definition: 'Recovery Factor - عامل الاستخلاص (نسبة مئوية)' },
            { term: 'EUR', definition: 'Estimated Ultimate Recovery - الإنتاج النهائي المقدر' },
            { term: 'PI', definition: 'Productivity Index - مؤشر إنتاجية البئر' },
            { term: 'IPR', definition: 'Inflow Performance Relationship - علاقة أداء التدفق' },
            { term: 'OWC', definition: 'Oil Water Contact - حد تماس النفط والماء' },
            { term: 'GOC', definition: 'Gas Oil Contact - حد تماس الغاز والنفط' },
            { term: 'BOPD', definition: 'Barrels of Oil Per Day - براميل النفط يومياً' },
            { term: 'GOR', definition: 'Gas Oil Ratio - نسبة الغاز للنفط' }
          ], 
          practiceQuestion: { 
            question: 'ما هو STOIIP؟', 
            options: ['النفط المنتج فعلياً', 'النفط الأصلي الكلي في المكمن', 'النفط المتبقي بعد الإنتاج', 'النفط في خزانات السطح'], 
            correctAnswer: 1 
          } 
        }, 
        en: { 
          title: 'Reservoir and Production Terminology', 
          explanation: `
<section class="mb-8">
  <h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Introduction to Reservoir Terminology</h2>
  
  <p class="mb-4" style="line-height: 1.8;">The Reservoir Engineer determines how much oil exists and how to extract it most efficiently. Therefore, reservoir terminology focuses on measuring and estimating resources and reserves, and understanding fluid behavior underground.</p>
</section>

<section class="mb-8">
  <h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Resource and Reserves Estimation Terms</h2>
  
  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 STOIIP - Stock Tank Oil Initially In Place</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>Definition:</strong> The total amount of oil originally in the reservoir before any production, calculated at standard surface conditions (60°F and 14.7 psia). Measured in STB or cubic meters.</p>
  
  <p class="mb-4" style="background: #e0f2fe; padding: 1rem; border-radius: 0.5rem; font-family: monospace;">
  Volumetric STOIIP = (7758 × A × h × φ × (1-Sw)) / Bo<br/><br/>
  Where:<br/>
  • A = Reservoir area (acres)<br/>
  • h = Net Pay thickness (feet)<br/>
  • φ = Porosity (decimal)<br/>
  • Sw = Water Saturation<br/>
  • Bo = Oil Formation Volume Factor
  </p>
  
  <p class="mb-4" style="background: #fef3c7; padding: 1rem; border-radius: 0.5rem;"><strong>💡 Important Note:</strong> STOIIP ≠ Reserves! Not all oil in place can be extracted.</p>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 GIIP - Gas Initially In Place</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>Definition:</strong> The total amount of gas in the reservoir before production, measured in SCF or BCF (billion cubic feet).</p>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 RF - Recovery Factor</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>Definition:</strong> The percentage of oil or gas that can be extracted from the reservoir, expressed as a percentage of STOIIP or GIIP.</p>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>Typical Recovery Factor Values:</strong></p>
  <ul class="mb-4" style="line-height: 2;">
    <li><strong>Water Drive:</strong> 35-75%</li>
    <li><strong>Solution Gas Drive:</strong> 10-30%</li>
    <li><strong>Gas Cap Expansion:</strong> 20-40%</li>
    <li><strong>Gas Reservoirs:</strong> 70-90%</li>
    <li><strong>With EOR:</strong> Can add 10-30% additional</li>
  </ul>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 EUR - Estimated Ultimate Recovery</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>Definition:</strong> The total amount of oil or gas expected to be produced from a well or field over its productive life.</p>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>EUR = STOIIP × RF</strong></p>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Reserves Classification</h3>
  
  <p class="mb-4" style="line-height: 1.8;">According to SPE-PRMS:</p>
  <ul class="mb-4" style="line-height: 2;">
    <li><strong>Proved Reserves (1P):</strong> Confirmed reserves with ≥90% confidence</li>
    <li><strong>Probable Reserves (2P):</strong> Proved + probable with ≥50% confidence</li>
    <li><strong>Possible Reserves (3P):</strong> Proved + probable + possible with ≥10% confidence</li>
  </ul>
</section>

<section class="mb-8">
  <h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Well and Reservoir Performance Terms</h2>
  
  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 PI - Productivity Index</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>Definition:</strong> A measure of well production capability, calculated as the ratio of production rate to pressure drawdown.</p>
  
  <p class="mb-4" style="background: #e0f2fe; padding: 1rem; border-radius: 0.5rem; font-family: monospace;">
  PI = q / (Pr - Pwf)<br/><br/>
  Where:<br/>
  • q = Production rate (STB/day or Mscf/day)<br/>
  • Pr = Reservoir Pressure<br/>
  • Pwf = Flowing Bottomhole Pressure
  </p>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 IPR - Inflow Performance Relationship</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>Definition:</strong> The relationship between well production rate and flowing bottomhole pressure. Plotted as a curve showing well performance at different operating conditions.</p>
  
  <p class="mb-4" style="line-height: 1.8;">Common IPR Models:</p>
  <ul class="mb-4" style="line-height: 2;">
    <li><strong>Linear PI:</strong> For oil above bubble point pressure</li>
    <li><strong>Vogel:</strong> For oil below bubble point (two-phase flow)</li>
    <li><strong>Fetkovich:</strong> For gas and oil</li>
  </ul>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 OWC - Oil Water Contact</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>Definition:</strong> The depth or level separating the oil zone from the water zone in the reservoir. Usually determined in TVDSS.</p>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 GOC - Gas Oil Contact</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>Definition:</strong> The depth separating the gas cap from the oil zone in the reservoir.</p>
</section>

<section class="mb-8">
  <h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Production Rate Terms</h2>
  
  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 BOPD - Barrels of Oil Per Day</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>Definition:</strong> Daily oil production rate, the most common unit in the industry.</p>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>Related Terms:</strong></p>
  <ul class="mb-4" style="line-height: 2;">
    <li><strong>BFPD:</strong> Barrels of Fluid Per Day - total liquids (oil + water)</li>
    <li><strong>BWPD:</strong> Barrels of Water Per Day</li>
    <li><strong>BLPD:</strong> Barrels of Liquid Per Day - synonym for BFPD</li>
  </ul>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 GOR - Gas Oil Ratio</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>Definition:</strong> Amount of gas produced per barrel of oil, measured in scf/STB.</p>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>Typical Values:</strong></p>
  <ul class="mb-4" style="line-height: 2;">
    <li>Heavy oil: 100-500 scf/STB</li>
    <li>Medium oil: 500-2,000 scf/STB</li>
    <li>Light oil/Condensate: 2,000-10,000+ scf/STB</li>
  </ul>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Water Cut</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>Water Cut = BWPD / BFPD × 100%</strong></p>
  
  <p class="mb-4" style="line-height: 1.8;">High Water Cut indicates:</p>
  <ul class="mb-4" style="line-height: 2;">
    <li>Water coning or water breakthrough</li>
    <li>Reservoir depletion</li>
    <li>May require Water Shutoff interventions</li>
  </ul>
</section>

<section class="mb-8">
  <h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Day 3 Summary</h2>
  <ul class="mb-4" style="line-height: 2;">
    <li>STOIIP/GIIP: Total hydrocarbons in place</li>
    <li>RF: Percentage that can be extracted</li>
    <li>EUR: Expected lifetime production</li>
    <li>PI/IPR: Well production performance</li>
    <li>OWC/GOC: Fluid contact boundaries</li>
    <li>BOPD, GOR, Water Cut: Daily production metrics</li>
  </ul>
</section>
`, 
          keyTerms: [
            { term: 'STOIIP', definition: 'Stock Tank Oil Initially In Place - Total oil in reservoir' },
            { term: 'GIIP', definition: 'Gas Initially In Place - Total gas in reservoir' },
            { term: 'RF', definition: 'Recovery Factor - Percentage recoverable' },
            { term: 'EUR', definition: 'Estimated Ultimate Recovery - Expected total production' },
            { term: 'PI', definition: 'Productivity Index - Well production capability' },
            { term: 'IPR', definition: 'Inflow Performance Relationship - Flow vs pressure curve' },
            { term: 'OWC', definition: 'Oil Water Contact - Depth separating oil and water' },
            { term: 'GOC', definition: 'Gas Oil Contact - Depth separating gas and oil' },
            { term: 'BOPD', definition: 'Barrels of Oil Per Day - Daily oil production' },
            { term: 'GOR', definition: 'Gas Oil Ratio - Gas per barrel of oil' }
          ], 
          practiceQuestion: { 
            question: 'What is STOIIP?', 
            options: ['Actually produced oil', 'Total original oil in the reservoir', 'Remaining oil after production', 'Oil in surface tanks'], 
            correctAnswer: 1 
          } 
        } 
      } 
    },
    { 
      day: 4, 
      type: 'learning', 
      content: { 
        ar: { 
          title: 'مصطلحات عمليات الحفر والتقارير', 
          explanation: `
<section class="mb-8">
  <h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 مصطلحات حركة سلسلة الحفر</h2>
  
  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Trip (الرحلة)</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>التعريف:</strong> عملية سحب أو إنزال سلسلة الحفر من/إلى البئر.</p>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>أنواع الرحلات:</strong></p>
  <ul class="mb-4" style="line-height: 2;">
    <li><strong>Round Trip:</strong> سحب كامل وإنزال كامل لسلسلة الحفر</li>
    <li><strong>Short Trip:</strong> سحب جزئي (عادة لتنظيف البئر)</li>
    <li><strong>Wiper Trip:</strong> رحلة لتنظيف جدار البئر</li>
  </ul>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 POOH - Pull Out Of Hole (السحب من البئر)</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>التعريف:</strong> عملية سحب سلسلة الحفر أو أي أداة من البئر. تُكتب في التقارير كـ "POOH".</p>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>أسباب POOH:</strong></p>
  <ul class="mb-4" style="line-height: 2;">
    <li>تغيير رأس الحفر البالي</li>
    <li>تغيير BHA</li>
    <li>إنزال أنابيب التغليف (Casing)</li>
    <li>إجراء تسجيلات سلكية (Wireline Logs)</li>
    <li>مشاكل تقنية</li>
  </ul>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 RIH - Run In Hole (الإنزال في البئر)</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>التعريف:</strong> عملية إنزال سلسلة الحفر أو أي أداة في البئر.</p>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>احتياطات RIH:</strong></p>
  <ul class="mb-4" style="line-height: 2;">
    <li>مراقبة وزن السلسلة (String Weight)</li>
    <li>ملء البئر بسائل الحفر</li>
    <li>مراقبة ضغط الضخ إن وجد</li>
    <li>الحذر من Tight Spots</li>
  </ul>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Trip Speed / Connection Time</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>Trip Speed:</strong> سرعة سحب أو إنزال سلسلة الحفر، تُقاس بالأقدام أو الوصلات في الساعة.</p>
  <p class="mb-4" style="line-height: 1.8;"><strong>Connection Time:</strong> الوقت المستغرق لإضافة أو فك وصلة حفر واحدة (يجب أن يكون 2-4 دقائق للطاقم الماهر).</p>
</section>

<section class="mb-8">
  <h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 مصطلحات الوقت والكفاءة</h2>
  
  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 NPT - Non-Productive Time (الوقت غير المنتج)</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>التعريف:</strong> أي وقت لا يساهم في تقدم حفر البئر أو إكماله. هذا المصطلح بالغ الأهمية لأن شركات النفط تراقبه بدقة.</p>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>أمثلة على NPT:</strong></p>
  <ul class="mb-4" style="line-height: 2;">
    <li><strong>مشاكل ميكانيكية:</strong> أعطال المعدات، إصلاحات</li>
    <li><strong>مشاكل البئر:</strong> علوق سلسلة الحفر (Stuck Pipe)، فقدان الدورة (Lost Circulation)</li>
    <li><strong>تأخير الطقس:</strong> خاصة في المنصات البحرية</li>
    <li><strong>انتظار المعدات:</strong> Waiting on Equipment (WOE)</li>
    <li><strong>انتظار الطقس:</strong> Waiting on Weather (WOW)</li>
    <li><strong>أعمال الصيد:</strong> Fishing operations</li>
  </ul>
  
  <p class="mb-4" style="background: #fee2e2; padding: 1rem; border-radius: 0.5rem;"><strong>⚠️ تكلفة NPT:</strong> تكلفة جهاز الحفر قد تكون $500,000 - $1,000,000 يومياً للمنصات البحرية العميقة. كل ساعة NPT = خسارة مالية كبيرة!</p>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 ILT - Invisible Lost Time (الوقت الضائع غير المرئي)</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>التعريف:</strong> الفرق بين الوقت الفعلي والوقت المثالي لإنجاز مهمة. هذا الوقت لا يُسجل كـ NPT لكنه يمثل فرصة للتحسين.</p>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>أمثلة:</strong></p>
  <ul class="mb-4" style="line-height: 2;">
    <li>Connection Time أطول من المثالي</li>
    <li>Trip Speed أبطأ من الممكن</li>
    <li>ROP أقل من الأمثل بسبب معاملات غير مثالية</li>
  </ul>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 WOC - Wait On Cement (انتظار تصلب الإسمنت)</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>التعريف:</strong> فترة الانتظار بعد ضخ الإسمنت حتى يتصلب بما يكفي لاستئناف العمليات. عادة 8-24 ساعة حسب نوع الإسمنت والظروف.</p>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 WOW - Waiting On Weather</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>التعريف:</strong> توقف العمليات بسبب سوء الأحوال الجوية، شائع في المنصات البحرية.</p>
</section>

<section class="mb-8">
  <h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 مصطلحات التقارير اليومية</h2>
  
  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 DDR - Daily Drilling Report (تقرير الحفر اليومي)</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>التعريف:</strong> التقرير الرسمي اليومي الذي يوثق جميع أنشطة الحفر خلال 24 ساعة.</p>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>محتويات DDR النموذجية:</strong></p>
  <ul class="mb-4" style="line-height: 2;">
    <li>ملخص العمليات (Operations Summary)</li>
    <li>العمق الحالي (Current Depth)</li>
    <li>التقدم المحرز (Footage Drilled)</li>
    <li>معاملات الحفر (Drilling Parameters)</li>
    <li>خصائص سائل الحفر (Mud Properties)</li>
    <li>BHA المستخدم</li>
    <li>المشاكل والحلول</li>
    <li>توقعات اليوم التالي</li>
  </ul>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Morning Report</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>التعريف:</strong> ملخص موجز يُرسل صباحاً للإدارة يتضمن أهم الأحداث والتقدم.</p>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Bit Record</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>التعريف:</strong> سجل تفصيلي لأداء كل رأس حفر:</p>
  <ul class="mb-4" style="line-height: 2;">
    <li>Bit Number and Size</li>
    <li>Footage Drilled (المسافة المحفورة)</li>
    <li>Hours on Bottom (ساعات الحفر)</li>
    <li>Dull Grading (تقييم البلى)</li>
    <li>Reason Pulled (سبب السحب)</li>
  </ul>
</section>

<section class="mb-8">
  <h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 مصطلحات السلامة والبيئة</h2>
  
  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 HSE - Health, Safety, and Environment</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>التعريف:</strong> قسم ومجموعة معايير تهتم بصحة العمال وسلامتهم وحماية البيئة.</p>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>مؤشرات HSE الرئيسية:</strong></p>
  <ul class="mb-4" style="line-height: 2;">
    <li><strong>LTI - Lost Time Injury:</strong> إصابة تسببت في غياب عن العمل</li>
    <li><strong>TRIR - Total Recordable Incident Rate:</strong> معدل الحوادث المسجلة</li>
    <li><strong>Near Miss:</strong> حادث وشيك لم يقع</li>
    <li><strong>Safety Stand-Down:</strong> توقف للمراجعة الأمنية</li>
  </ul>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 PTW - Permit To Work (تصريح العمل)</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>التعريف:</strong> نظام رسمي للتحكم في الأعمال الخطرة، يتطلب موافقات مكتوبة قبل البدء.</p>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 JSA - Job Safety Analysis</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>التعريف:</strong> تحليل مخاطر العمل قبل البدء، يحدد المخاطر والإجراءات الوقائية.</p>
</section>

<section class="mb-8">
  <h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 ملخص اليوم الرابع</h2>
  <ul class="mb-4" style="line-height: 2;">
    <li>POOH/RIH: سحب وإنزال سلسلة الحفر</li>
    <li>NPT: الوقت غير المنتج (مكلف جداً)</li>
    <li>ILT: الوقت الضائع غير المرئي</li>
    <li>WOC: انتظار تصلب الإسمنت</li>
    <li>DDR: تقرير الحفر اليومي</li>
    <li>HSE: معايير الصحة والسلامة والبيئة</li>
  </ul>
</section>
`, 
          keyTerms: [
            { term: 'POOH', definition: 'Pull Out Of Hole - سحب سلسلة الحفر من البئر' },
            { term: 'RIH', definition: 'Run In Hole - إنزال سلسلة الحفر في البئر' },
            { term: 'NPT', definition: 'Non-Productive Time - الوقت غير المنتج' },
            { term: 'ILT', definition: 'Invisible Lost Time - الوقت الضائع غير المرئي' },
            { term: 'WOC', definition: 'Wait On Cement - انتظار تصلب الإسمنت' },
            { term: 'WOW', definition: 'Waiting On Weather - الانتظار بسبب الطقس' },
            { term: 'DDR', definition: 'Daily Drilling Report - تقرير الحفر اليومي' },
            { term: 'HSE', definition: 'Health, Safety, Environment - الصحة والسلامة والبيئة' },
            { term: 'LTI', definition: 'Lost Time Injury - إصابة تسببت في غياب عن العمل' },
            { term: 'PTW', definition: 'Permit To Work - تصريح العمل' }
          ], 
          practiceQuestion: { 
            question: 'ما معنى NPT؟', 
            options: ['وقت الإنتاج الصافي', 'الوقت غير المنتج', 'اختبار ضغط جديد', 'وقت الحفر الطبيعي'], 
            correctAnswer: 1 
          } 
        }, 
        en: { 
          title: 'Drilling Operations and Reporting Terminology', 
          explanation: `
<section class="mb-8">
  <h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Drill String Movement Terms</h2>
  
  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Trip</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>Definition:</strong> The operation of pulling or running the drill string out of or into the well.</p>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>Types of Trips:</strong></p>
  <ul class="mb-4" style="line-height: 2;">
    <li><strong>Round Trip:</strong> Full pull out and run in of drill string</li>
    <li><strong>Short Trip:</strong> Partial pull (usually for hole cleaning)</li>
    <li><strong>Wiper Trip:</strong> Trip to clean wellbore wall</li>
  </ul>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 POOH - Pull Out Of Hole</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>Definition:</strong> The operation of pulling the drill string or any tool from the well. Written in reports as "POOH".</p>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>Reasons for POOH:</strong></p>
  <ul class="mb-4" style="line-height: 2;">
    <li>Changing worn drill bit</li>
    <li>Changing BHA</li>
    <li>Running casing</li>
    <li>Running wireline logs</li>
    <li>Technical problems</li>
  </ul>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 RIH - Run In Hole</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>Definition:</strong> The operation of running the drill string or any tool into the well.</p>
</section>

<section class="mb-8">
  <h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Time and Efficiency Terms</h2>
  
  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 NPT - Non-Productive Time</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>Definition:</strong> Any time that does not contribute to drilling or completing the well. This term is critically important as oil companies monitor it closely.</p>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>Examples of NPT:</strong></p>
  <ul class="mb-4" style="line-height: 2;">
    <li><strong>Mechanical problems:</strong> Equipment failures, repairs</li>
    <li><strong>Well problems:</strong> Stuck pipe, Lost circulation</li>
    <li><strong>Weather delays:</strong> Especially on offshore platforms</li>
    <li><strong>Waiting on equipment:</strong> WOE</li>
    <li><strong>Fishing operations</strong></li>
  </ul>
  
  <p class="mb-4" style="background: #fee2e2; padding: 1rem; border-radius: 0.5rem;"><strong>⚠️ NPT Cost:</strong> Rig cost can be $500,000 - $1,000,000 daily for deepwater platforms. Every hour of NPT = significant financial loss!</p>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 ILT - Invisible Lost Time</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>Definition:</strong> The difference between actual time and ideal time to complete a task. Not recorded as NPT but represents improvement opportunity.</p>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 WOC - Wait On Cement</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>Definition:</strong> The waiting period after pumping cement until it hardens enough to resume operations. Usually 8-24 hours depending on cement type and conditions.</p>
</section>

<section class="mb-8">
  <h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Daily Reporting Terms</h2>
  
  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 DDR - Daily Drilling Report</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>Definition:</strong> The official daily report documenting all drilling activities during 24 hours.</p>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>Typical DDR Contents:</strong></p>
  <ul class="mb-4" style="line-height: 2;">
    <li>Operations Summary</li>
    <li>Current Depth</li>
    <li>Footage Drilled</li>
    <li>Drilling Parameters</li>
    <li>Mud Properties</li>
    <li>BHA Used</li>
    <li>Problems and Solutions</li>
    <li>Next Day Forecast</li>
  </ul>
</section>

<section class="mb-8">
  <h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Safety and Environment Terms</h2>
  
  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 HSE - Health, Safety, and Environment</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>Definition:</strong> Department and set of standards focused on worker health and safety and environmental protection.</p>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>Key HSE Indicators:</strong></p>
  <ul class="mb-4" style="line-height: 2;">
    <li><strong>LTI - Lost Time Injury:</strong> Injury causing work absence</li>
    <li><strong>TRIR - Total Recordable Incident Rate:</strong> Recorded incident rate</li>
    <li><strong>Near Miss:</strong> Incident that almost happened</li>
    <li><strong>Safety Stand-Down:</strong> Stop for safety review</li>
  </ul>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 PTW - Permit To Work</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>Definition:</strong> Formal system for controlling hazardous work, requiring written approvals before starting.</p>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 JSA - Job Safety Analysis</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>Definition:</strong> Pre-job hazard analysis identifying risks and preventive measures.</p>
</section>

<section class="mb-8">
  <h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Day 4 Summary</h2>
  <ul class="mb-4" style="line-height: 2;">
    <li>POOH/RIH: Pull out and run in drill string</li>
    <li>NPT: Non-productive time (very costly)</li>
    <li>ILT: Invisible lost time</li>
    <li>WOC: Wait on cement</li>
    <li>DDR: Daily drilling report</li>
    <li>HSE: Health, safety, and environment standards</li>
  </ul>
</section>
`, 
          keyTerms: [
            { term: 'POOH', definition: 'Pull Out Of Hole - Pulling drill string from well' },
            { term: 'RIH', definition: 'Run In Hole - Running drill string into well' },
            { term: 'NPT', definition: 'Non-Productive Time - Unproductive time' },
            { term: 'ILT', definition: 'Invisible Lost Time - Hidden inefficiency time' },
            { term: 'WOC', definition: 'Wait On Cement - Waiting for cement to set' },
            { term: 'WOW', definition: 'Waiting On Weather - Weather-related delays' },
            { term: 'DDR', definition: 'Daily Drilling Report - Official daily report' },
            { term: 'HSE', definition: 'Health, Safety, Environment' },
            { term: 'LTI', definition: 'Lost Time Injury - Injury causing work absence' },
            { term: 'PTW', definition: 'Permit To Work - Work authorization system' }
          ], 
          practiceQuestion: { 
            question: 'What does NPT stand for?', 
            options: ['Net Production Time', 'Non-Productive Time', 'New Pressure Test', 'Normal Penetration Time'], 
            correctAnswer: 1 
          } 
        } 
      } 
    },
    { 
      day: 5, 
      type: 'learning', 
      content: { 
        ar: { 
          title: 'مصطلحات أنظمة الرفع الصناعي والتقنيات المتقدمة', 
          explanation: `
<section class="mb-8">
  <h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 أنظمة الرفع الصناعي (Artificial Lift Systems)</h2>
  
  <p class="mb-4" style="line-height: 1.8;">عندما ينخفض ضغط المكمن ولا يستطيع النفط التدفق للسطح بشكل طبيعي، نحتاج لأنظمة الرفع الصناعي. فهم هذه المصطلحات ضروري لمهندس الإنتاج.</p>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 ESP - Electric Submersible Pump (المضخة الغاطسة الكهربائية)</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>التعريف:</strong> مضخة طرد مركزي متعددة المراحل تُنزل في البئر وتُشغل بالكهرباء لرفع السوائل للسطح.</p>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>مكونات نظام ESP:</strong></p>
  <ul class="mb-4" style="line-height: 2;">
    <li><strong>Motor:</strong> محرك كهربائي في قاع البئر</li>
    <li><strong>Seal Section (Protector):</strong> يحمي المحرك من السوائل</li>
    <li><strong>Pump:</strong> مراحل متعددة من المضخات الطاردة</li>
    <li><strong>Gas Separator:</strong> فاصل الغاز (إن وجد)</li>
    <li><strong>Cable:</strong> كابل كهربائي على طول أنبوب الإنتاج</li>
    <li><strong>VSD:</strong> Variable Speed Drive للتحكم في السرعة</li>
  </ul>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>مميزات ESP:</strong> معدل إنتاج عالي، مناسب للآبار ذات الحجم الكبير</p>
  <p class="mb-4" style="line-height: 1.8;"><strong>عيوب:</strong> استهلاك كهربائي عالي، حساس للغاز والرمل</p>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 GL - Gas Lift (الرفع بالغاز)</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>التعريف:</strong> نظام يستخدم حقن الغاز المضغوط في البئر لتخفيف كثافة عمود السائل وبالتالي رفعه للسطح.</p>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>مكونات Gas Lift:</strong></p>
  <ul class="mb-4" style="line-height: 2;">
    <li><strong>Gas Lift Valves:</strong> صمامات على طول أنبوب الإنتاج</li>
    <li><strong>Mandrels:</strong> حوامل الصمامات</li>
    <li><strong>Injection Gas:</strong> غاز مضغوط من مصدر خارجي</li>
  </ul>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>أنواع Gas Lift:</strong></p>
  <ul class="mb-4" style="line-height: 2;">
    <li><strong>Continuous Gas Lift:</strong> حقن مستمر للغاز</li>
    <li><strong>Intermittent Gas Lift:</strong> حقن متقطع للآبار ذات الإنتاج المنخفض</li>
  </ul>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 SRP - Sucker Rod Pump / Beam Pump (مضخة القضبان)</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>التعريف:</strong> النظام الكلاسيكي للرفع الصناعي، يستخدم حركة ترددية عمودية من وحدة سطحية (Pumpjack) لتشغيل مضخة في قاع البئر.</p>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>مكونات النظام:</strong></p>
  <ul class="mb-4" style="line-height: 2;">
    <li><strong>Pumpjack (Beam Unit):</strong> الوحدة السطحية المعروفة شكلها</li>
    <li><strong>Sucker Rods:</strong> قضبان فولاذية تنقل الحركة</li>
    <li><strong>Downhole Pump:</strong> المضخة في قاع البئر</li>
    <li><strong>Barrel and Plunger:</strong> أسطوانة ومكبس</li>
    <li><strong>Valves:</strong> صمامات ثابتة ومتحركة</li>
  </ul>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 PCP - Progressive Cavity Pump (مضخة التجويف المتقدم)</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>التعريف:</strong> مضخة إزاحة موجبة تستخدم حلزوناً دواراً داخل تجويف مطاطي لرفع السوائل.</p>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>مميزات:</strong> مناسبة للنفط الثقيل واللزج، تتحمل الرمل</p>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Jet Pump (مضخة النفث)</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>التعريف:</strong> تستخدم سائل مضغوط (Power Fluid) لخلق فراغ يسحب سوائل البئر.</p>
</section>

<section class="mb-8">
  <h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 مصطلحات الحفر الموجه والأفقي</h2>
  
  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 MWD - Measurement While Drilling (القياس أثناء الحفر)</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>التعريف:</strong> أدوات إلكترونية في BHA ترسل بيانات في الوقت الفعلي عن:</p>
  <ul class="mb-4" style="line-height: 2;">
    <li>Inclination (الميل)</li>
    <li>Azimuth (الاتجاه)</li>
    <li>Toolface (اتجاه أداة الحفر)</li>
    <li>Gamma Ray (أشعة غاما للتعرف على الطبقات)</li>
    <li>Downhole Weight and Torque</li>
  </ul>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 LWD - Logging While Drilling (التسجيل أثناء الحفر)</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>التعريف:</strong> أدوات أكثر تقدماً تقيس خصائص التكوين في الوقت الفعلي:</p>
  <ul class="mb-4" style="line-height: 2;">
    <li>Resistivity (المقاومية)</li>
    <li>Density (الكثافة)</li>
    <li>Porosity (المسامية)</li>
    <li>Sonic (الصوتي)</li>
    <li>Formation Pressure</li>
  </ul>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 RSS - Rotary Steerable System (نظام التوجيه الدوار)</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>التعريف:</strong> تقنية متقدمة للحفر الموجه تسمح بتوجيه مسار البئر أثناء الدوران المستمر.</p>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>أنواع RSS:</strong></p>
  <ul class="mb-4" style="line-height: 2;">
    <li><strong>Push-the-Bit:</strong> يدفع رأس الحفر جانبياً</li>
    <li><strong>Point-the-Bit:</strong> يوجه رأس الحفر</li>
  </ul>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Geosteering (التوجيه الجيولوجي)</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>التعريف:</strong> توجيه مسار البئر بناءً على بيانات LWD في الوقت الفعلي للبقاء داخل المكمن المستهدف.</p>
</section>

<section class="mb-8">
  <h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 مصطلحات الاستخلاص المعزز</h2>
  
  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 EOR - Enhanced Oil Recovery (الاستخلاص المعزز للنفط)</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>التعريف:</strong> تقنيات متقدمة لاستخراج النفط الذي لا يمكن إنتاجه بالطرق التقليدية.</p>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>أنواع EOR:</strong></p>
  <ul class="mb-4" style="line-height: 2;">
    <li><strong>Thermal EOR:</strong>
      <ul style="margin-right: 1.5rem;">
        <li>Steam Injection (حقن البخار)</li>
        <li>SAGD - Steam Assisted Gravity Drainage</li>
        <li>In-Situ Combustion (الاحتراق الموضعي)</li>
      </ul>
    </li>
    <li><strong>Chemical EOR:</strong>
      <ul style="margin-right: 1.5rem;">
        <li>Polymer Flooding (حقن البوليمر)</li>
        <li>Surfactant Flooding</li>
        <li>ASP - Alkali-Surfactant-Polymer</li>
      </ul>
    </li>
    <li><strong>Gas EOR:</strong>
      <ul style="margin-right: 1.5rem;">
        <li>CO2 Injection</li>
        <li>Miscible Gas Injection</li>
        <li>WAG - Water Alternating Gas</li>
      </ul>
    </li>
  </ul>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 IOR - Improved Oil Recovery</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>التعريف:</strong> مصطلح أوسع يشمل جميع طرق تحسين الاستخلاص بما فيها Secondary Recovery.</p>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Waterflooding (الإغمار المائي)</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>التعريف:</strong> حقن الماء في المكمن لدفع النفط نحو آبار الإنتاج. هذا Secondary Recovery وليس EOR.</p>
</section>

<section class="mb-8">
  <h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 ملخص اليوم الخامس</h2>
  <ul class="mb-4" style="line-height: 2;">
    <li>ESP: مضخة غاطسة كهربائية - الأكثر شيوعاً للإنتاج العالي</li>
    <li>GL: رفع بالغاز - مناسب للآبار البحرية</li>
    <li>SRP: مضخة القضبان التقليدية</li>
    <li>MWD/LWD: قياس وتسجيل أثناء الحفر</li>
    <li>RSS: نظام التوجيه الدوار المتقدم</li>
    <li>EOR: تقنيات الاستخلاص المعزز</li>
  </ul>
</section>
`, 
          keyTerms: [
            { term: 'ESP', definition: 'Electric Submersible Pump - مضخة غاطسة كهربائية' },
            { term: 'GL', definition: 'Gas Lift - الرفع بالغاز' },
            { term: 'SRP', definition: 'Sucker Rod Pump - مضخة القضبان' },
            { term: 'PCP', definition: 'Progressive Cavity Pump - مضخة التجويف المتقدم' },
            { term: 'MWD', definition: 'Measurement While Drilling - القياس أثناء الحفر' },
            { term: 'LWD', definition: 'Logging While Drilling - التسجيل أثناء الحفر' },
            { term: 'RSS', definition: 'Rotary Steerable System - نظام التوجيه الدوار' },
            { term: 'EOR', definition: 'Enhanced Oil Recovery - الاستخلاص المعزز للنفط' },
            { term: 'IOR', definition: 'Improved Oil Recovery - تحسين الاستخلاص' },
            { term: 'SAGD', definition: 'Steam Assisted Gravity Drainage - الصرف بالجاذبية بمساعدة البخار' }
          ], 
          practiceQuestion: { 
            question: 'ما هو نظام الرفع الصناعي الأكثر استخداماً للآبار ذات الإنتاج العالي؟', 
            options: ['Gas Lift', 'ESP', 'Sucker Rod Pump', 'Jet Pump'], 
            correctAnswer: 1 
          } 
        }, 
        en: { 
          title: 'Artificial Lift Systems and Advanced Technologies', 
          explanation: `
<section class="mb-8">
  <h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Artificial Lift Systems</h2>
  
  <p class="mb-4" style="line-height: 1.8;">When reservoir pressure drops and oil cannot flow to surface naturally, we need artificial lift systems. Understanding these terms is essential for production engineers.</p>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 ESP - Electric Submersible Pump</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>Definition:</strong> A multi-stage centrifugal pump run downhole, powered by electricity to lift fluids to surface.</p>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>ESP System Components:</strong></p>
  <ul class="mb-4" style="line-height: 2;">
    <li><strong>Motor:</strong> Electric motor at well bottom</li>
    <li><strong>Seal Section (Protector):</strong> Protects motor from fluids</li>
    <li><strong>Pump:</strong> Multiple centrifugal pump stages</li>
    <li><strong>Gas Separator:</strong> If present</li>
    <li><strong>Cable:</strong> Power cable along tubing</li>
    <li><strong>VSD:</strong> Variable Speed Drive for speed control</li>
  </ul>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>ESP Advantages:</strong> High production rate, suitable for high-volume wells</p>
  <p class="mb-4" style="line-height: 1.8;"><strong>Disadvantages:</strong> High power consumption, sensitive to gas and sand</p>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 GL - Gas Lift</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>Definition:</strong> A system that uses compressed gas injection into the well to lighten the fluid column and thus lift it to surface.</p>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>Types:</strong></p>
  <ul class="mb-4" style="line-height: 2;">
    <li><strong>Continuous Gas Lift:</strong> Continuous gas injection</li>
    <li><strong>Intermittent Gas Lift:</strong> Intermittent injection for low-rate wells</li>
  </ul>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 SRP - Sucker Rod Pump / Beam Pump</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>Definition:</strong> The classic artificial lift system, using vertical reciprocating motion from a surface unit (Pumpjack) to operate a pump at well bottom.</p>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 PCP - Progressive Cavity Pump</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>Definition:</strong> A positive displacement pump using a rotating helix inside a rubber stator to lift fluids.</p>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>Advantages:</strong> Suitable for heavy, viscous oil; tolerates sand</p>
</section>

<section class="mb-8">
  <h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Directional and Horizontal Drilling Terms</h2>
  
  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 MWD - Measurement While Drilling</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>Definition:</strong> Electronic tools in the BHA sending real-time data about:</p>
  <ul class="mb-4" style="line-height: 2;">
    <li>Inclination</li>
    <li>Azimuth</li>
    <li>Toolface</li>
    <li>Gamma Ray</li>
    <li>Downhole Weight and Torque</li>
  </ul>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 LWD - Logging While Drilling</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>Definition:</strong> More advanced tools measuring formation properties in real-time:</p>
  <ul class="mb-4" style="line-height: 2;">
    <li>Resistivity</li>
    <li>Density</li>
    <li>Porosity</li>
    <li>Sonic</li>
    <li>Formation Pressure</li>
  </ul>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 RSS - Rotary Steerable System</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>Definition:</strong> Advanced directional drilling technology allowing wellbore steering while rotating continuously.</p>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>RSS Types:</strong></p>
  <ul class="mb-4" style="line-height: 2;">
    <li><strong>Push-the-Bit:</strong> Pushes bit sideways</li>
    <li><strong>Point-the-Bit:</strong> Points the bit direction</li>
  </ul>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Geosteering</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>Definition:</strong> Steering the wellbore path based on real-time LWD data to stay within the target reservoir.</p>
</section>

<section class="mb-8">
  <h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Enhanced Recovery Terms</h2>
  
  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 EOR - Enhanced Oil Recovery</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>Definition:</strong> Advanced techniques for extracting oil that cannot be produced by conventional methods.</p>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>EOR Types:</strong></p>
  <ul class="mb-4" style="line-height: 2;">
    <li><strong>Thermal EOR:</strong> Steam Injection, SAGD, In-Situ Combustion</li>
    <li><strong>Chemical EOR:</strong> Polymer, Surfactant, ASP Flooding</li>
    <li><strong>Gas EOR:</strong> CO2 Injection, Miscible Gas, WAG</li>
  </ul>

  <h3 style="color: #f97316; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Waterflooding</h3>
  
  <p class="mb-4" style="line-height: 1.8;"><strong>Definition:</strong> Injecting water into reservoir to push oil toward production wells. This is Secondary Recovery, not EOR.</p>
</section>

<section class="mb-8">
  <h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Day 5 Summary</h2>
  <ul class="mb-4" style="line-height: 2;">
    <li>ESP: Electric submersible pump - most common for high production</li>
    <li>GL: Gas lift - suitable for offshore wells</li>
    <li>SRP: Traditional rod pump</li>
    <li>MWD/LWD: Measurement and logging while drilling</li>
    <li>RSS: Advanced rotary steerable system</li>
    <li>EOR: Enhanced oil recovery techniques</li>
  </ul>
</section>
`, 
          keyTerms: [
            { term: 'ESP', definition: 'Electric Submersible Pump' },
            { term: 'GL', definition: 'Gas Lift' },
            { term: 'SRP', definition: 'Sucker Rod Pump' },
            { term: 'PCP', definition: 'Progressive Cavity Pump' },
            { term: 'MWD', definition: 'Measurement While Drilling' },
            { term: 'LWD', definition: 'Logging While Drilling' },
            { term: 'RSS', definition: 'Rotary Steerable System' },
            { term: 'EOR', definition: 'Enhanced Oil Recovery' },
            { term: 'IOR', definition: 'Improved Oil Recovery' },
            { term: 'SAGD', definition: 'Steam Assisted Gravity Drainage' }
          ], 
          practiceQuestion: { 
            question: 'What is the most common artificial lift system for high-rate wells?', 
            options: ['Gas Lift', 'ESP', 'Sucker Rod Pump', 'Jet Pump'], 
            correctAnswer: 1 
          } 
        } 
      } 
    },
    { 
      day: 6, 
      type: 'quiz', 
      content: { 
        ar: { 
          title: 'اختبار شامل في المصطلحات النفطية', 
          explanation: 'اختبار شامل يغطي جميع المصطلحات التي تعلمتها هذا الأسبوع.',
          keyTerms: [] 
        }, 
        en: { 
          title: 'Comprehensive Oil & Gas Terminology Quiz', 
          explanation: 'A comprehensive quiz covering all the terminology you learned this week.',
          keyTerms: [] 
        } 
      }, 
      quiz: { 
        ar: [
          { question: 'ما هو القطاع الذي يشمل الاستكشاف والحفر والإنتاج؟', options: ['Downstream', 'Midstream', 'Upstream', 'Refining'], correctAnswer: 2 },
          { question: 'أي مصطلح يصف العمق العمودي الحقيقي المستخدم لحسابات الضغط؟', options: ['MD', 'TD', 'TVD', 'ROP'], correctAnswer: 2 },
          { question: 'ما معنى STOIIP؟', options: ['النفط المنتج', 'النفط الأصلي في المكان', 'النفط المكرر', 'النفط المباع'], correctAnswer: 1 },
          { question: 'ما هو المصطلح الذي يصف سرعة اختراق رأس الحفر للصخور؟', options: ['WOB', 'RPM', 'ROP', 'BHA'], correctAnswer: 2 },
          { question: 'ما معنى NPT؟', options: ['وقت الإنتاج الصافي', 'الوقت غير المنتج', 'اختبار الضغط الجديد', 'التقنية الطبيعية للضغط'], correctAnswer: 1 },
          { question: 'أي نظام رفع صناعي يستخدم مضخة طرد مركزي كهربائية في قاع البئر؟', options: ['Gas Lift', 'ESP', 'Sucker Rod Pump', 'Jet Pump'], correctAnswer: 1 },
          { question: 'ما معنى GOR؟', options: ['معدل النفط العام', 'نسبة الغاز للنفط', 'نطاق التشغيل الجيد', 'التحسين العام'], correctAnswer: 1 },
          { question: 'ما هو الاختصار الذي يصف عملية سحب سلسلة الحفر من البئر؟', options: ['RIH', 'POOH', 'WOC', 'DDR'], correctAnswer: 1 },
          { question: 'ما هو OWC؟', options: ['تكلفة عمليات البئر', 'حد تماس النفط والماء', 'إكمال البئر المفتوح', 'أنبوب التغليف الخارجي'], correctAnswer: 1 },
          { question: 'ما معنى MWD؟', options: ['عمق البئر الأقصى', 'القياس أثناء الحفر', 'كثافة الطين والوزن', 'التوجيه للأسفل'], correctAnswer: 1 },
          { question: 'ما هو Recovery Factor؟', options: ['معامل استرداد التكلفة', 'نسبة النفط القابل للاستخراج', 'معدل التعافي من المشاكل', 'عامل إعادة التدوير'], correctAnswer: 1 },
          { question: 'ما معنى HSE؟', options: ['معدات السلامة العالية', 'الصحة والسلامة والبيئة', 'هندسة النظم الهيدروليكية', 'تقييم السلامة الهيدروستاتيكية'], correctAnswer: 1 },
          { question: 'ما هو EOR؟', options: ['نهاية التقرير', 'الاستخلاص المعزز للنفط', 'معدات التشغيل الطارئة', 'قراءة البئر المقدرة'], correctAnswer: 1 },
          { question: 'ما معنى PI في هندسة المكامن؟', options: ['مؤشر الضغط', 'مؤشر الإنتاجية', 'مؤشر الأداء', 'مؤشر الطاقة'], correctAnswer: 1 },
          { question: 'أي مصطلح يصف التقرير اليومي الرسمي لعمليات الحفر؟', options: ['NPT Report', 'Morning Report', 'DDR', 'BHA Report'], correctAnswer: 2 }
        ],
        en: [
          { question: 'Which sector includes exploration, drilling, and production?', options: ['Downstream', 'Midstream', 'Upstream', 'Refining'], correctAnswer: 2 },
          { question: 'Which term describes the true vertical depth used for pressure calculations?', options: ['MD', 'TD', 'TVD', 'ROP'], correctAnswer: 2 },
          { question: 'What does STOIIP stand for?', options: ['Produced oil', 'Stock Tank Oil Initially In Place', 'Refined oil', 'Sold oil'], correctAnswer: 1 },
          { question: 'What term describes the speed at which the drill bit penetrates rock?', options: ['WOB', 'RPM', 'ROP', 'BHA'], correctAnswer: 2 },
          { question: 'What does NPT mean?', options: ['Net Production Time', 'Non-Productive Time', 'New Pressure Test', 'Natural Pressure Technique'], correctAnswer: 1 },
          { question: 'Which artificial lift system uses an electric centrifugal pump downhole?', options: ['Gas Lift', 'ESP', 'Sucker Rod Pump', 'Jet Pump'], correctAnswer: 1 },
          { question: 'What does GOR stand for?', options: ['General Oil Rate', 'Gas Oil Ratio', 'Good Operating Range', 'General Optimization'], correctAnswer: 1 },
          { question: 'What abbreviation describes pulling the drill string out of the well?', options: ['RIH', 'POOH', 'WOC', 'DDR'], correctAnswer: 1 },
          { question: 'What is OWC?', options: ['Operating Well Cost', 'Oil Water Contact', 'Open Well Completion', 'Outer Well Casing'], correctAnswer: 1 },
          { question: 'What does MWD mean?', options: ['Maximum Well Depth', 'Measurement While Drilling', 'Mud Weight and Density', 'Moving Downward'], correctAnswer: 1 },
          { question: 'What is Recovery Factor?', options: ['Cost recovery coefficient', 'Percentage of extractable oil', 'Problem recovery rate', 'Recycling factor'], correctAnswer: 1 },
          { question: 'What does HSE stand for?', options: ['High Safety Equipment', 'Health, Safety, and Environment', 'Hydraulic System Engineering', 'Hydrostatic Safety Evaluation'], correctAnswer: 1 },
          { question: 'What is EOR?', options: ['End of Report', 'Enhanced Oil Recovery', 'Emergency Operating Equipment', 'Estimated Oil Reading'], correctAnswer: 1 },
          { question: 'What does PI mean in reservoir engineering?', options: ['Pressure Index', 'Productivity Index', 'Performance Index', 'Power Index'], correctAnswer: 1 },
          { question: 'Which term describes the official daily drilling operations report?', options: ['NPT Report', 'Morning Report', 'DDR', 'BHA Report'], correctAnswer: 2 }
        ]
      } 
    },
    { 
      day: 7, 
      type: 'project', 
      content: { 
        ar: { 
          title: 'مشروع الأسبوع: إنشاء قاموس مصطلحات نفطية شامل', 
          explanation: 'في هذا المشروع ستُنشئ قاموساً شخصياً شاملاً للمصطلحات النفطية يمكنك الرجوع إليه طوال مسيرتك المهنية.',
          keyTerms: [] 
        }, 
        en: { 
          title: 'Weekly Project: Create a Comprehensive Oil & Gas Glossary', 
          explanation: 'In this project, you will create a comprehensive personal glossary of oil and gas terminology that you can reference throughout your career.',
          keyTerms: [] 
        } 
      }, 
      project: { 
        ar: { 
          title: 'قاموس المصطلحات النفطية الشامل', 
          description: 'قم بإنشاء قاموس شخصي يحتوي على 50 مصطلحاً نفطياً على الأقل، منظم حسب الفئات مع تعريفات دقيقة وأمثلة عملية.',
          instructions: [
            'قسم المصطلحات إلى 6 فئات على الأقل: (1) قطاعات الصناعة (Upstream/Midstream/Downstream)، (2) قياسات العمق والبئر، (3) مصطلحات الحفر وأدائه، (4) مصطلحات المكامن والإنتاج، (5) أنظمة الرفع الصناعي، (6) السلامة والتقارير',
            'لكل مصطلح اكتب: الاختصار (إن وجد)، الاسم الكامل بالإنجليزية، الترجمة العربية، التعريف (2-3 جمل)، مثال عملي أو سياق استخدام',
            'أضف قسماً للمعادلات الأساسية مع شرح كل متغير (مثل: STOIIP, Hydrostatic Pressure, PI)',
            'أضف قسماً للقيم النموذجية (مثل: ROP نموذجي، RPM نموذجي، Recovery Factor حسب آلية الدفع)',
            'اختتم بجدول يربط بين المصطلحات المتشابهة أو المرتبطة (مثل: MD vs TVD vs TVDSS)',
            'تأكد من أن كل تعريف دقيق علمياً ومكتوب بأسلوبك الخاص وليس منسوخاً',
            'الحد الأدنى: 50 مصطلحاً، المثالي: 75+ مصطلحاً'
          ],
          submissionType: 'text'
        },
        en: {
          title: 'Comprehensive Oil & Gas Terminology Glossary',
          description: 'Create a personal glossary containing at least 50 oil and gas terms, organized by categories with precise definitions and practical examples.',
          instructions: [
            'Divide terms into at least 6 categories: (1) Industry Sectors (Upstream/Midstream/Downstream), (2) Depth and Well Measurements, (3) Drilling Terms and Performance, (4) Reservoir and Production Terms, (5) Artificial Lift Systems, (6) Safety and Reporting',
            'For each term write: Abbreviation (if any), Full English name, Arabic translation, Definition (2-3 sentences), Practical example or usage context',
            'Add a section for basic formulas with explanation of each variable (e.g., STOIIP, Hydrostatic Pressure, PI)',
            'Add a section for typical values (e.g., typical ROP, typical RPM, Recovery Factor by drive mechanism)',
            'Conclude with a table linking similar or related terms (e.g., MD vs TVD vs TVDSS)',
            'Ensure each definition is scientifically accurate and written in your own words, not copied',
            'Minimum: 50 terms, Ideal: 75+ terms'
          ],
          submissionType: 'text'
        }
      } 
    }
  ]
};

// Export all lessons
export const weeklyContent: WeeklyLesson[] = [
  introLesson,
  drillingLesson,
  wellTypesLesson,
  rigOverviewLesson,
  unitsLesson,
  terminologyLesson,
];
