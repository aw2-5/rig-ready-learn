import { QuizQuestion } from './lessons';
import { DailyContent, WeeklyLesson } from './weeklyContent';

// ============================================
// LESSON: Drilling Fluids - Level 1 (سوائل الحفر - المستوى الأول)
// ============================================

export const drillingFluidsLesson: WeeklyLesson = {
  lessonId: 'drilling-fluids',
  days: [
    {
      day: 1,
      type: 'learning',
      content: {
        ar: {
          title: 'مقدمة في سوائل الحفر',
          explanation: `<section>
<h2 class="text-primary text-xl font-bold mb-4">🔷 ما هي سوائل الحفر؟</h2>

<div class="bg-accent/10 border-r-4 border-accent p-4 my-6">
<p class="font-semibold text-lg mb-2">🎯 السؤال الأساسي:</p>
<p>لماذا لا يمكننا الحفر بدون سائل؟ وما الذي يفعله هذا السائل بالضبط؟</p>
</div>

<p class="mb-4">سوائل الحفر (Drilling Fluids) أو "الطين" (Mud) كما يُسمى في الميدان، هي السوائل التي تُضخ في البئر أثناء عملية الحفر. هذه السوائل ليست مجرد ماء - بل هي خليط معقد مصمم بعناية لأداء عدة وظائف حيوية.</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 لماذا نسميها "طين"؟</h3>

<p class="mb-4">تاريخياً، كان أول سائل حفر يُستخدم هو الماء الممزوج بالطين الطبيعي. ومن هنا جاءت التسمية. اليوم، أصبحت سوائل الحفر أكثر تعقيداً بكثير، لكن الاسم بقي.</p>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 الوظائف الأساسية لسوائل الحفر</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 1. تبريد وتزييت رأس الحفر (Cooling & Lubrication)</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>رأس الحفر يدور بسرعة عالية ويحتك بالصخور</li>
<li>الاحتكاك يولد حرارة عالية جداً</li>
<li>بدون تبريد، سيحترق رأس الحفر ويتلف</li>
<li>السائل يمتص الحرارة وينقلها للسطح</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 2. رفع فتات الصخور (Cuttings Removal)</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>عندما يحفر الرأس، يكسر الصخور إلى قطع صغيرة</li>
<li>هذه القطع تُسمى "الفتات" (Cuttings)</li>
<li>لازم نرفع هذا الفتات للسطح</li>
<li>السائل يحمل الفتات ويرفعها من خلال الفراغ الحلقي</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 3. التحكم في ضغط البئر (Pressure Control)</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>تحت الأرض توجد ضغوط عالية من السوائل والغازات</li>
<li>سائل الحفر يضغط على جدران البئر</li>
<li>هذا الضغط يمنع السوائل من الدخول للبئر</li>
<li>التحكم بالضغط يمنع الانفجارات (Blowouts)</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 4. دعم جدران البئر (Wellbore Stability)</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>بعض الصخور ضعيفة وممكن تنهار</li>
<li>السائل يكوّن طبقة رقيقة على الجدران</li>
<li>هذه الطبقة تُسمى "الكعكة الطينية" (Mud Cake)</li>
<li>تحمي الجدران وتمنع الانهيار</li>
</ul>

<div class="bg-destructive/10 border-r-4 border-destructive p-4 my-6">
<p class="text-destructive font-semibold">⚠️ ماذا يحدث بدون سائل حفر؟</p>
<ul class="list-disc list-inside space-y-1 mt-2">
<li>رأس الحفر يحترق خلال دقائق</li>
<li>الفتات يتراكم ويعلق في البئر</li>
<li>السوائل تدخل للبئر وقد تسبب انفجار</li>
<li>جدران البئر تنهار</li>
<li>خسارة ملايين الدولارات</li>
</ul>
</div>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 ملخص القسم</h3>

<div class="bg-secondary/50 p-4 rounded-lg">
<p>سوائل الحفر هي شريان الحياة لعملية الحفر. بدونها، لا يمكن حفر أي بئر. وظائفها الأربع الأساسية: التبريد والتزييت، رفع الفتات، التحكم بالضغط، ودعم جدران البئر.</p>
</div>
</section>`,
          keyTerms: [
            { term: 'سائل الحفر', definition: 'السائل الذي يُضخ في البئر أثناء الحفر لأداء وظائف متعددة' },
            { term: 'الطين', definition: 'الاسم الشائع لسائل الحفر في الميدان' },
            { term: 'الفتات', definition: 'قطع الصخور الصغيرة الناتجة عن عملية الحفر' },
            { term: 'الكعكة الطينية', definition: 'طبقة رقيقة تتكون على جدران البئر من ترسب مواد السائل' },
          ],
          practiceQuestion: {
            question: 'ما هي الوظيفة الأساسية التي يؤديها سائل الحفر لمنع الانفجارات؟',
            options: ['تبريد رأس الحفر', 'رفع الفتات', 'التحكم في ضغط البئر', 'تزييت الأدوات'],
            correctAnswer: 2,
          },
        },
        en: {
          title: 'Introduction to Drilling Fluids',
          explanation: `<section>
<h2 class="text-primary text-xl font-bold mb-4">🔷 What are Drilling Fluids?</h2>

<div class="bg-accent/10 border-l-4 border-accent p-4 my-6">
<p class="font-semibold text-lg mb-2">🎯 The Key Question:</p>
<p>Why can't we drill without fluid? And what exactly does this fluid do?</p>
</div>

<p class="mb-4">Drilling fluids or "Mud" as it's called in the field, are the fluids pumped into the well during drilling operations. These fluids are not just water - they are complex mixtures carefully designed to perform several vital functions.</p>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Why Do We Call It "Mud"?</h3>

<p class="mb-4">Historically, the first drilling fluid used was water mixed with natural clay. Hence the name. Today, drilling fluids have become much more complex, but the name stuck.</p>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 Primary Functions of Drilling Fluids</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 1. Cooling & Lubrication</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>The drill bit rotates at high speed and rubs against rocks</li>
<li>Friction generates very high heat</li>
<li>Without cooling, the bit will burn and get damaged</li>
<li>The fluid absorbs heat and carries it to the surface</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 2. Cuttings Removal</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>When the bit drills, it breaks rocks into small pieces</li>
<li>These pieces are called "Cuttings"</li>
<li>We need to lift these cuttings to the surface</li>
<li>The fluid carries the cuttings up through the annulus</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 3. Pressure Control</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>High pressures from fluids and gases exist underground</li>
<li>Drilling fluid exerts pressure on well walls</li>
<li>This pressure prevents fluids from entering the well</li>
<li>Pressure control prevents blowouts</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 4. Wellbore Stability</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>Some rocks are weak and may collapse</li>
<li>The fluid forms a thin layer on the walls</li>
<li>This layer is called the "Mud Cake"</li>
<li>It protects the walls and prevents collapse</li>
</ul>

<div class="bg-destructive/10 border-l-4 border-destructive p-4 my-6">
<p class="text-destructive font-semibold">⚠️ What Happens Without Drilling Fluid?</p>
<ul class="list-disc list-inside space-y-1 mt-2">
<li>Drill bit burns within minutes</li>
<li>Cuttings accumulate and get stuck in the well</li>
<li>Fluids enter the well and may cause a blowout</li>
<li>Well walls collapse</li>
<li>Loss of millions of dollars</li>
</ul>
</div>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Section Summary</h3>

<div class="bg-secondary/50 p-4 rounded-lg">
<p>Drilling fluids are the lifeblood of drilling operations. Without them, no well can be drilled. Their four basic functions are: cooling and lubrication, cuttings removal, pressure control, and wellbore support.</p>
</div>
</section>`,
          keyTerms: [
            { term: 'Drilling Fluid', definition: 'The fluid pumped into the well during drilling to perform multiple functions' },
            { term: 'Mud', definition: 'The common field name for drilling fluid' },
            { term: 'Cuttings', definition: 'Small rock pieces produced by the drilling process' },
            { term: 'Mud Cake', definition: 'A thin layer formed on well walls from fluid material deposition' },
          ],
          practiceQuestion: {
            question: 'What is the primary function of drilling fluid to prevent blowouts?',
            options: ['Cooling the drill bit', 'Removing cuttings', 'Pressure control', 'Lubricating tools'],
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
          title: 'أنواع سوائل الحفر',
          explanation: `<section>
<h2 class="text-primary text-xl font-bold mb-4">🔷 التصنيف الرئيسي لسوائل الحفر</h2>

<div class="bg-accent/10 border-r-4 border-accent p-4 my-6">
<p class="font-semibold text-lg mb-2">🎯 السؤال الأساسي:</p>
<p>لماذا لا نستخدم نوع واحد من سائل الحفر لكل الآبار؟</p>
</div>

<p class="mb-4">تُصنف سوائل الحفر بناءً على المكون الأساسي (Base) الذي يشكل معظم السائل. هناك ثلاثة أنواع رئيسية:</p>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 1. السوائل ذات الأساس المائي (Water-Based Mud - WBM)</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 المكونات</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>الماء هو المكون الأساسي (70-90%)</li>
<li>الطين (البنتونايت) لزيادة اللزوجة</li>
<li>مواد كيميائية للتحكم بالخصائص</li>
<li>مواد ثقيلة (الباريت) للتحكم بالوزن</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 المميزات</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>الأرخص ثمناً</li>
<li>صديق للبيئة نسبياً</li>
<li>سهل التحضير والتعديل</li>
<li>الأكثر استخداماً في العالم</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 العيوب</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>يتفاعل مع الصخور الطينية (Shale)</li>
<li>قد يسبب انتفاخ وانهيار البئر</li>
<li>أداء أقل في درجات الحرارة العالية</li>
</ul>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 2. السوائل ذات الأساس الزيتي (Oil-Based Mud - OBM)</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 المكونات</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>الزيت (ديزل أو زيت معدني) هو المكون الأساسي</li>
<li>قد يحتوي على نسبة صغيرة من الماء (مستحلب)</li>
<li>مواد استحلاب لخلط الماء بالزيت</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 المميزات</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>لا يتفاعل مع الصخور الطينية</li>
<li>تزييت ممتاز - يقلل الاحتكاك</li>
<li>مستقر في درجات الحرارة العالية</li>
<li>مثالي للحفر الموجه والأفقي</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 العيوب</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>مكلف جداً</li>
<li>مشاكل بيئية في التخلص منه</li>
<li>خطر الحريق</li>
<li>قيود قانونية في بعض المناطق</li>
</ul>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 3. السوائل الاصطناعية (Synthetic-Based Mud - SBM)</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 المكونات</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>زيوت اصطناعية بدلاً من النفطية</li>
<li>أكثر صداقة للبيئة من OBM</li>
<li>تجمع مميزات WBM و OBM</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 متى نستخدمها؟</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>الحفر البحري (قوانين بيئية صارمة)</li>
<li>الآبار العميقة (حرارة عالية)</li>
<li>الصخور الحساسة للماء</li>
</ul>

<div class="overflow-x-auto">
<table class="w-full border-collapse border border-border my-4">
<thead>
<tr class="bg-muted">
<th class="border border-border p-2 text-right">النوع</th>
<th class="border border-border p-2 text-right">التكلفة</th>
<th class="border border-border p-2 text-right">البيئة</th>
<th class="border border-border p-2 text-right">الاستخدام</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-border p-2">WBM</td>
<td class="border border-border p-2">منخفضة</td>
<td class="border border-border p-2">جيدة</td>
<td class="border border-border p-2">80% من الآبار</td>
</tr>
<tr>
<td class="border border-border p-2">OBM</td>
<td class="border border-border p-2">عالية</td>
<td class="border border-border p-2">سيئة</td>
<td class="border border-border p-2">آبار صعبة</td>
</tr>
<tr>
<td class="border border-border p-2">SBM</td>
<td class="border border-border p-2">عالية جداً</td>
<td class="border border-border p-2">متوسطة</td>
<td class="border border-border p-2">بحري/عميق</td>
</tr>
</tbody>
</table>
</div>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 ملخص القسم</h3>

<div class="bg-secondary/50 p-4 rounded-lg">
<p>يُختار نوع سائل الحفر بناءً على ظروف البئر والتكلفة والاعتبارات البيئية. معظم الآبار تستخدم WBM، لكن الآبار الصعبة قد تحتاج OBM أو SBM.</p>
</div>
</section>`,
          keyTerms: [
            { term: 'WBM', definition: 'سائل حفر ذو أساس مائي - الأكثر شيوعاً واستخداماً' },
            { term: 'OBM', definition: 'سائل حفر ذو أساس زيتي - للظروف الصعبة' },
            { term: 'SBM', definition: 'سائل حفر ذو أساس اصطناعي - بديل صديق للبيئة لـ OBM' },
            { term: 'البنتونايت', definition: 'نوع من الطين يُستخدم لزيادة لزوجة سائل الحفر' },
          ],
          practiceQuestion: {
            question: 'أي نوع من سوائل الحفر هو الأكثر استخداماً في العالم؟',
            options: ['OBM - ذو الأساس الزيتي', 'SBM - الاصطناعي', 'WBM - ذو الأساس المائي', 'الهواء'],
            correctAnswer: 2,
          },
        },
        en: {
          title: 'Types of Drilling Fluids',
          explanation: `<section>
<h2 class="text-primary text-xl font-bold mb-4">🔷 Main Classification of Drilling Fluids</h2>

<div class="bg-accent/10 border-l-4 border-accent p-4 my-6">
<p class="font-semibold text-lg mb-2">🎯 The Key Question:</p>
<p>Why don't we use one type of drilling fluid for all wells?</p>
</div>

<p class="mb-4">Drilling fluids are classified based on the main component (Base) that makes up most of the fluid. There are three main types:</p>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 1. Water-Based Mud (WBM)</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Components</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>Water is the main component (70-90%)</li>
<li>Clay (Bentonite) to increase viscosity</li>
<li>Chemicals to control properties</li>
<li>Weighting materials (Barite) for weight control</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Advantages</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>Least expensive</li>
<li>Relatively environmentally friendly</li>
<li>Easy to prepare and modify</li>
<li>Most commonly used worldwide</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Disadvantages</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>Reacts with shale formations</li>
<li>May cause swelling and wellbore collapse</li>
<li>Lower performance at high temperatures</li>
</ul>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 2. Oil-Based Mud (OBM)</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Components</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>Oil (diesel or mineral oil) is the main component</li>
<li>May contain a small percentage of water (emulsion)</li>
<li>Emulsifiers to mix water with oil</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Advantages</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>Does not react with shale</li>
<li>Excellent lubrication - reduces friction</li>
<li>Stable at high temperatures</li>
<li>Ideal for directional and horizontal drilling</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Disadvantages</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>Very expensive</li>
<li>Environmental disposal issues</li>
<li>Fire hazard</li>
<li>Legal restrictions in some areas</li>
</ul>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 3. Synthetic-Based Mud (SBM)</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Components</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>Synthetic oils instead of petroleum-based</li>
<li>More environmentally friendly than OBM</li>
<li>Combines advantages of WBM and OBM</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 When to Use?</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>Offshore drilling (strict environmental regulations)</li>
<li>Deep wells (high temperature)</li>
<li>Water-sensitive formations</li>
</ul>

<div class="overflow-x-auto">
<table class="w-full border-collapse border border-border my-4">
<thead>
<tr class="bg-muted">
<th class="border border-border p-2 text-left">Type</th>
<th class="border border-border p-2 text-left">Cost</th>
<th class="border border-border p-2 text-left">Environment</th>
<th class="border border-border p-2 text-left">Usage</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-border p-2">WBM</td>
<td class="border border-border p-2">Low</td>
<td class="border border-border p-2">Good</td>
<td class="border border-border p-2">80% of wells</td>
</tr>
<tr>
<td class="border border-border p-2">OBM</td>
<td class="border border-border p-2">High</td>
<td class="border border-border p-2">Poor</td>
<td class="border border-border p-2">Difficult wells</td>
</tr>
<tr>
<td class="border border-border p-2">SBM</td>
<td class="border border-border p-2">Very High</td>
<td class="border border-border p-2">Moderate</td>
<td class="border border-border p-2">Offshore/Deep</td>
</tr>
</tbody>
</table>
</div>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Section Summary</h3>

<div class="bg-secondary/50 p-4 rounded-lg">
<p>Drilling fluid type is chosen based on well conditions, cost, and environmental considerations. Most wells use WBM, but difficult wells may require OBM or SBM.</p>
</div>
</section>`,
          keyTerms: [
            { term: 'WBM', definition: 'Water-Based Mud - the most common and widely used' },
            { term: 'OBM', definition: 'Oil-Based Mud - for difficult conditions' },
            { term: 'SBM', definition: 'Synthetic-Based Mud - environmentally friendly alternative to OBM' },
            { term: 'Bentonite', definition: 'A type of clay used to increase drilling fluid viscosity' },
          ],
          practiceQuestion: {
            question: 'Which type of drilling fluid is most commonly used worldwide?',
            options: ['OBM - Oil-Based Mud', 'SBM - Synthetic-Based', 'WBM - Water-Based Mud', 'Air'],
            correctAnswer: 2,
          },
        },
      },
    },
    {
      day: 3,
      type: 'learning',
      content: {
        ar: {
          title: 'خصائص سوائل الحفر',
          explanation: `<section>
<h2 class="text-primary text-xl font-bold mb-4">🔷 لماذا نقيس خصائص سائل الحفر؟</h2>

<div class="bg-accent/10 border-r-4 border-accent p-4 my-6">
<p class="font-semibold text-lg mb-2">🎯 السؤال الأساسي:</p>
<p>كيف نعرف أن سائل الحفر يعمل بشكل صحيح؟ وما هي القياسات المهمة؟</p>
</div>

<p class="mb-4">مثل الطبيب الذي يفحص المريض بقياس الحرارة والضغط، مهندس سوائل الحفر يفحص السائل بقياسات محددة للتأكد من صحته.</p>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 1. الكثافة (Density / Mud Weight)</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 ما هي الكثافة؟</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>وزن السائل لكل وحدة حجم</li>
<li>تُقاس بـ PPG (رطل لكل غالون) أو SG (الكثافة النوعية)</li>
<li>تتراوح عادة بين 8.5-18 PPG</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 لماذا مهمة؟</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>تتحكم في الضغط الهيدروستاتيكي في البئر</li>
<li>تمنع دخول السوائل من التكوينات</li>
<li>تحمي من الانفجارات (Kicks/Blowouts)</li>
</ul>

<div class="bg-destructive/10 border-r-4 border-destructive p-4 my-6">
<p class="text-destructive font-semibold">⚠️ ماذا لو كانت الكثافة خاطئة؟</p>
<ul class="list-disc list-inside space-y-1 mt-2">
<li>منخفضة جداً: دخول سوائل للبئر (Kick)</li>
<li>عالية جداً: كسر التكوين وفقدان السائل (Lost Circulation)</li>
</ul>
</div>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 2. اللزوجة (Viscosity)</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 ما هي اللزوجة؟</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>مقاومة السائل للتدفق</li>
<li>العسل لزج، الماء خفيف</li>
<li>تُقاس بـ Funnel Viscosity (ثواني في قمع مارش)</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 لماذا مهمة؟</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>تحدد قدرة السائل على حمل الفتات</li>
<li>لزوجة عالية = حمل أفضل للفتات</li>
<li>لزوجة منخفضة = ضخ أسهل</li>
</ul>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 3. قوة الجل (Gel Strength)</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 ما هي قوة الجل؟</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>قدرة السائل على التماسك عند التوقف</li>
<li>السائل يصبح أكثر سماكة عند السكون</li>
<li>ويصبح أخف عند الحركة (Thixotropic)</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 لماذا مهمة؟</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>تمنع سقوط الفتات عند توقف الضخ</li>
<li>تحافظ على المواد الثقيلة معلقة</li>
</ul>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 4. الترشيح (Filtration / Fluid Loss)</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 ما هو الترشيح؟</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>كمية السائل التي تتسرب للتكوين</li>
<li>يُقاس بـ API Fluid Loss (مل/30 دقيقة)</li>
<li>القيمة المثالية: أقل من 10 مل</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 لماذا مهم؟</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>ترشيح عالي = تلف التكوين</li>
<li>ترشيح عالي = انتفاخ الصخور الطينية</li>
<li>ترشيح منخفض = كعكة طينية رقيقة وقوية</li>
</ul>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 5. الرقم الهيدروجيني (pH)</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 ما هو pH؟</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>مقياس حموضة أو قلوية السائل</li>
<li>المقياس من 0 (حمضي) إلى 14 (قلوي)</li>
<li>معظم سوائل الحفر قلوية (pH 9-11)</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 لماذا مهم؟</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>يؤثر على أداء المواد الكيميائية</li>
<li>يحمي المعدات من التآكل</li>
<li>يحافظ على خصائص الطين</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 ملخص القسم</h3>

<div class="bg-secondary/50 p-4 rounded-lg">
<p>خصائص سائل الحفر الخمس الأساسية: الكثافة (للتحكم بالضغط)، اللزوجة (لحمل الفتات)، قوة الجل (للتعليق)، الترشيح (لحماية التكوين)، و pH (لحماية المعدات والكيمياء).</p>
</div>
</section>`,
          keyTerms: [
            { term: 'الكثافة', definition: 'وزن السائل لكل وحدة حجم - تتحكم بضغط البئر' },
            { term: 'اللزوجة', definition: 'مقاومة السائل للتدفق - تحدد قدرة حمل الفتات' },
            { term: 'قوة الجل', definition: 'قدرة السائل على التماسك عند السكون' },
            { term: 'الترشيح', definition: 'كمية السائل المتسربة للتكوين' },
          ],
          practiceQuestion: {
            question: 'ماذا يحدث إذا كانت كثافة سائل الحفر منخفضة جداً؟',
            options: ['فقدان السائل للتكوين', 'دخول سوائل للبئر (Kick)', 'انسداد المضخات', 'تآكل المعدات'],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Drilling Fluid Properties',
          explanation: `<section>
<h2 class="text-primary text-xl font-bold mb-4">🔷 Why Do We Measure Drilling Fluid Properties?</h2>

<div class="bg-accent/10 border-l-4 border-accent p-4 my-6">
<p class="font-semibold text-lg mb-2">🎯 The Key Question:</p>
<p>How do we know the drilling fluid is working correctly? And what are the important measurements?</p>
</div>

<p class="mb-4">Like a doctor examining a patient by measuring temperature and blood pressure, a drilling fluids engineer examines the fluid with specific measurements to ensure its health.</p>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 1. Density (Mud Weight)</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 What is Density?</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>Weight of fluid per unit volume</li>
<li>Measured in PPG (pounds per gallon) or SG (specific gravity)</li>
<li>Typically ranges from 8.5-18 PPG</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Why is it Important?</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>Controls hydrostatic pressure in the well</li>
<li>Prevents formation fluids from entering</li>
<li>Protects against kicks and blowouts</li>
</ul>

<div class="bg-destructive/10 border-l-4 border-destructive p-4 my-6">
<p class="text-destructive font-semibold">⚠️ What if Density is Wrong?</p>
<ul class="list-disc list-inside space-y-1 mt-2">
<li>Too low: Formation fluid influx (Kick)</li>
<li>Too high: Formation fracture and fluid loss (Lost Circulation)</li>
</ul>
</div>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 2. Viscosity</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 What is Viscosity?</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>Resistance of fluid to flow</li>
<li>Honey is viscous, water is thin</li>
<li>Measured with Funnel Viscosity (seconds in Marsh funnel)</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Why is it Important?</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>Determines cutting carrying capacity</li>
<li>High viscosity = better cuttings transport</li>
<li>Low viscosity = easier pumping</li>
</ul>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 3. Gel Strength</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 What is Gel Strength?</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>Fluid's ability to solidify when stationary</li>
<li>Fluid becomes thicker at rest</li>
<li>Becomes thinner when moving (Thixotropic)</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Why is it Important?</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>Prevents cuttings from settling when pumping stops</li>
<li>Keeps heavy materials suspended</li>
</ul>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 4. Filtration (Fluid Loss)</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 What is Filtration?</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>Amount of fluid that leaks into the formation</li>
<li>Measured as API Fluid Loss (ml/30 min)</li>
<li>Ideal value: less than 10 ml</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Why is it Important?</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>High filtration = formation damage</li>
<li>High filtration = shale swelling</li>
<li>Low filtration = thin, strong mud cake</li>
</ul>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 5. pH (Acidity/Alkalinity)</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 What is pH?</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>Measure of fluid acidity or alkalinity</li>
<li>Scale from 0 (acidic) to 14 (alkaline)</li>
<li>Most drilling fluids are alkaline (pH 9-11)</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Why is it Important?</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>Affects chemical performance</li>
<li>Protects equipment from corrosion</li>
<li>Maintains clay properties</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Section Summary</h3>

<div class="bg-secondary/50 p-4 rounded-lg">
<p>The five essential drilling fluid properties: Density (for pressure control), Viscosity (for cuttings transport), Gel Strength (for suspension), Filtration (for formation protection), and pH (for equipment and chemical protection).</p>
</div>
</section>`,
          keyTerms: [
            { term: 'Density', definition: 'Weight of fluid per unit volume - controls well pressure' },
            { term: 'Viscosity', definition: 'Resistance to flow - determines cutting carrying capacity' },
            { term: 'Gel Strength', definition: 'Ability to solidify when stationary' },
            { term: 'Filtration', definition: 'Amount of fluid lost to the formation' },
          ],
          practiceQuestion: {
            question: 'What happens if drilling fluid density is too low?',
            options: ['Fluid loss to formation', 'Formation fluid influx (Kick)', 'Pump blockage', 'Equipment corrosion'],
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
          title: 'دورة سائل الحفر',
          explanation: `<section>
<h2 class="text-primary text-xl font-bold mb-4">🔷 كيف يتحرك سائل الحفر في البئر؟</h2>

<div class="bg-accent/10 border-r-4 border-accent p-4 my-6">
<p class="font-semibold text-lg mb-2">🎯 السؤال الأساسي:</p>
<p>من أين يبدأ السائل رحلته؟ وأين ينتهي؟ وماذا يحدث في كل مرحلة؟</p>
</div>

<p class="mb-4">سائل الحفر يدور في دورة مستمرة - يُضخ للأسفل، يخرج من رأس الحفر، ويعود للسطح حاملاً الفتات. هذه الدورة تسمى "دورة الدوران" (Circulation).</p>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 مراحل دورة سائل الحفر</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 المرحلة 1: التخزين والتحضير</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>يُخزن السائل في أحواض فولاذية (Mud Pits/Tanks)</li>
<li>عادة 3-4 أحواض متصلة</li>
<li>المهندسون يضيفون ويعدلون المواد هنا</li>
<li>يُخلط السائل باستمرار بواسطة خلاطات</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 المرحلة 2: الضخ</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>مضخات الطين (Mud Pumps) تسحب السائل</li>
<li>عادة 2-3 مضخات كبيرة</li>
<li>تضخ بمعدل 400-1200 غالون/دقيقة</li>
<li>الضغط يصل إلى 3000-5000 psi</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 المرحلة 3: النزول في سلسلة الحفر</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>السائل يدخل من خلال Standpipe</li>
<li>يمر عبر الخرطوم المرن (Kelly Hose)</li>
<li>ينزل داخل سلسلة الحفر (Drill String)</li>
<li>التجويف الداخلي ضيق = سرعة عالية</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 المرحلة 4: الخروج من رأس الحفر</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>السائل يخرج من فتحات رأس الحفر (Nozzles)</li>
<li>يخرج بسرعة عالية جداً (Jets)</li>
<li>يبرد رأس الحفر ويزيل الفتات</li>
<li>يضرب قاع البئر وينظفه</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 المرحلة 5: الصعود في الفراغ الحلقي</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>السائل يصعد في المسافة بين سلسلة الحفر وجدار البئر</li>
<li>هذه المسافة تُسمى الفراغ الحلقي (Annulus)</li>
<li>السرعة أبطأ = الفتات يبقى معلقاً</li>
<li>يحمل الفتات معه للسطح</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 المرحلة 6: المعالجة والتنظيف</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>السائل يخرج من البئر عبر خط التدفق (Flow Line)</li>
<li>يمر على المناخل الاهتزازية (Shale Shakers)</li>
<li>تُزيل المناخل الفتات الكبير</li>
<li>يمر على معدات إضافية: Desander, Desilter, Centrifuge</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 المرحلة 7: العودة للأحواض</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>السائل النظيف يعود للأحواض</li>
<li>يُفحص ويُعدل إذا لزم الأمر</li>
<li>يُعاد ضخه - الدورة تستمر</li>
</ul>

<div class="bg-secondary/50 p-4 rounded-lg my-6">
<p class="font-semibold mb-2">📊 مثال عملي:</p>
<p>في بئر عمقها 3000 متر، السائل يستغرق حوالي 20-30 دقيقة ليكمل دورة كاملة!</p>
</div>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 ملخص القسم</h3>

<div class="bg-secondary/50 p-4 rounded-lg">
<p>دورة سائل الحفر: التخزين → الضخ → النزول داخل سلسلة الحفر → الخروج من رأس الحفر → الصعود في الفراغ الحلقي → المعالجة → العودة للأحواض. دورة مستمرة لا تتوقف أثناء الحفر.</p>
</div>
</section>`,
          keyTerms: [
            { term: 'أحواض الطين', definition: 'خزانات فولاذية لتخزين وتحضير سائل الحفر' },
            { term: 'مضخات الطين', definition: 'مضخات قوية لضخ السائل في البئر' },
            { term: 'الفراغ الحلقي', definition: 'المسافة بين سلسلة الحفر وجدار البئر' },
            { term: 'المناخل الاهتزازية', definition: 'معدات لفصل الفتات عن السائل' },
          ],
          practiceQuestion: {
            question: 'أين يخرج سائل الحفر من سلسلة الحفر؟',
            options: ['من أعلى البئر', 'من فتحات رأس الحفر (Nozzles)', 'من جدار البئر', 'من المضخات'],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Drilling Fluid Circulation',
          explanation: `<section>
<h2 class="text-primary text-xl font-bold mb-4">🔷 How Does Drilling Fluid Move in the Well?</h2>

<div class="bg-accent/10 border-l-4 border-accent p-4 my-6">
<p class="font-semibold text-lg mb-2">🎯 The Key Question:</p>
<p>Where does the fluid start its journey? Where does it end? And what happens at each stage?</p>
</div>

<p class="mb-4">Drilling fluid circulates in a continuous cycle - pumped down, exits from the drill bit, and returns to surface carrying cuttings. This cycle is called "Circulation."</p>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 Stages of Drilling Fluid Circulation</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Stage 1: Storage and Preparation</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>Fluid is stored in steel tanks (Mud Pits/Tanks)</li>
<li>Usually 3-4 connected tanks</li>
<li>Engineers add and adjust materials here</li>
<li>Fluid is continuously mixed by agitators</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Stage 2: Pumping</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>Mud Pumps draw the fluid</li>
<li>Usually 2-3 large pumps</li>
<li>Pump at 400-1200 gallons/minute</li>
<li>Pressure reaches 3000-5000 psi</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Stage 3: Descending Through Drill String</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>Fluid enters through the Standpipe</li>
<li>Passes through the flexible Kelly Hose</li>
<li>Descends inside the Drill String</li>
<li>Narrow internal bore = high velocity</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Stage 4: Exiting Through Drill Bit</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>Fluid exits through bit nozzles</li>
<li>Exits at very high velocity (Jets)</li>
<li>Cools the bit and removes cuttings</li>
<li>Hits the well bottom and cleans it</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Stage 5: Rising Through the Annulus</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>Fluid rises in the space between drill string and wellbore</li>
<li>This space is called the Annulus</li>
<li>Slower speed = cuttings stay suspended</li>
<li>Carries cuttings to the surface</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Stage 6: Processing and Cleaning</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>Fluid exits the well through the Flow Line</li>
<li>Passes over Shale Shakers</li>
<li>Shakers remove large cuttings</li>
<li>Passes through additional equipment: Desander, Desilter, Centrifuge</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Stage 7: Return to Pits</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>Clean fluid returns to the pits</li>
<li>Tested and adjusted if necessary</li>
<li>Re-pumped - the cycle continues</li>
</ul>

<div class="bg-secondary/50 p-4 rounded-lg my-6">
<p class="font-semibold mb-2">📊 Practical Example:</p>
<p>In a 3000-meter deep well, fluid takes about 20-30 minutes to complete one full cycle!</p>
</div>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Section Summary</h3>

<div class="bg-secondary/50 p-4 rounded-lg">
<p>Drilling fluid cycle: Storage → Pumping → Down through drill string → Out through drill bit → Up through annulus → Processing → Return to pits. A continuous cycle that never stops during drilling.</p>
</div>
</section>`,
          keyTerms: [
            { term: 'Mud Pits', definition: 'Steel tanks for storing and preparing drilling fluid' },
            { term: 'Mud Pumps', definition: 'Powerful pumps for circulating fluid in the well' },
            { term: 'Annulus', definition: 'The space between the drill string and wellbore wall' },
            { term: 'Shale Shakers', definition: 'Equipment for separating cuttings from fluid' },
          ],
          practiceQuestion: {
            question: 'Where does drilling fluid exit the drill string?',
            options: ['From the top of the well', 'Through bit nozzles', 'Through the wellbore wall', 'From the pumps'],
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
          title: 'مشاكل سوائل الحفر وحلولها',
          explanation: `<section>
<h2 class="text-primary text-xl font-bold mb-4">🔷 المشاكل الشائعة في سوائل الحفر</h2>

<div class="bg-accent/10 border-r-4 border-accent p-4 my-6">
<p class="font-semibold text-lg mb-2">🎯 السؤال الأساسي:</p>
<p>ما هي المشاكل التي قد تواجهنا مع سائل الحفر؟ وكيف نتعامل معها؟</p>
</div>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 المشكلة 1: فقدان الدوران (Lost Circulation)</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 ما هي؟</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>السائل يتسرب للتكوين بدلاً من العودة للسطح</li>
<li>قد نفقد جزء من السائل أو كله</li>
<li>من أكثر المشاكل تكلفة في الحفر</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 الأسباب</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>تكوينات مسامية أو متشققة</li>
<li>كثافة السائل عالية جداً</li>
<li>ضغط الضخ عالي جداً</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 الحلول</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>إضافة مواد سد الفجوات (LCM - Lost Circulation Material)</li>
<li>تقليل كثافة السائل</li>
<li>تقليل معدل الضخ</li>
</ul>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 المشكلة 2: التصاق الأنابيب (Stuck Pipe)</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 ما هي؟</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>سلسلة الحفر تعلق ولا تتحرك</li>
<li>قد نضطر لقطع السلسلة وخسارتها</li>
<li>تكلفة ضخمة ووقت ضائع</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 أنواع الالتصاق</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li><strong>التصاق تفاضلي:</strong> الكعكة الطينية تمسك السلسلة</li>
<li><strong>التصاق ميكانيكي:</strong> انهيار الصخور أو تراكم الفتات</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 الوقاية والعلاج</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>تقليل فقدان السائل (كعكة أرق)</li>
<li>زيادة التزييت بالمواد الكيميائية</li>
<li>تحريك السلسلة باستمرار</li>
<li>ضخ سوائل تحرير خاصة</li>
</ul>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 المشكلة 3: عدم استقرار البئر (Wellbore Instability)</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 الأعراض</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>انهيار جدران البئر</li>
<li>تضيق قطر البئر</li>
<li>زيادة في كمية الفتات</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 الأسباب</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>الصخور الطينية تمتص الماء وتنتفخ</li>
<li>كثافة السائل منخفضة جداً</li>
<li>عدم توافق كيميائي</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 الحلول</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>استخدام سائل زيتي أو اصطناعي</li>
<li>إضافة مثبطات الطين</li>
<li>زيادة كثافة السائل</li>
</ul>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 المشكلة 4: التلوث (Contamination)</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 أنواع الملوثات</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li><strong>الأسمنت:</strong> يرفع pH ويخرب الخصائص</li>
<li><strong>الملح:</strong> يقلل فعالية الطين</li>
<li><strong>الغاز:</strong> يقلل كثافة السائل</li>
<li><strong>الجبس/الأنهيدرايت:</strong> يخرب الطين</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 الكشف والعلاج</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>فحوصات كيميائية منتظمة</li>
<li>إضافة مواد معالجة محددة لكل ملوث</li>
<li>أحياناً: التخلص من السائل وتحضير جديد</li>
</ul>

<div class="bg-destructive/10 border-r-4 border-destructive p-4 my-6">
<p class="text-destructive font-semibold">⚠️ قاعدة ذهبية:</p>
<p>الوقاية دائماً أرخص وأسهل من العلاج! المراقبة المستمرة للخصائص تمنع معظم المشاكل.</p>
</div>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 ملخص القسم</h3>

<div class="bg-secondary/50 p-4 rounded-lg">
<p>المشاكل الأربع الرئيسية: فقدان الدوران (نستخدم LCM)، التصاق الأنابيب (نزيد التزييت)، عدم استقرار البئر (نعدل نوع السائل)، والتلوث (نعالج كيميائياً). المراقبة المستمرة هي أفضل وقاية.</p>
</div>
</section>`,
          keyTerms: [
            { term: 'فقدان الدوران', definition: 'تسرب سائل الحفر للتكوين بدلاً من عودته للسطح' },
            { term: 'LCM', definition: 'مواد سد الفجوات لعلاج فقدان الدوران' },
            { term: 'التصاق الأنابيب', definition: 'علوق سلسلة الحفر في البئر' },
            { term: 'عدم استقرار البئر', definition: 'انهيار أو تضيق جدران البئر' },
          ],
          practiceQuestion: {
            question: 'ما هو العلاج الأساسي لمشكلة فقدان الدوران؟',
            options: ['زيادة كثافة السائل', 'إضافة مواد سد الفجوات (LCM)', 'زيادة معدل الضخ', 'تغيير نوع رأس الحفر'],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Drilling Fluid Problems and Solutions',
          explanation: `<section>
<h2 class="text-primary text-xl font-bold mb-4">🔷 Common Problems in Drilling Fluids</h2>

<div class="bg-accent/10 border-l-4 border-accent p-4 my-6">
<p class="font-semibold text-lg mb-2">🎯 The Key Question:</p>
<p>What problems might we face with drilling fluid? And how do we handle them?</p>
</div>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 Problem 1: Lost Circulation</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 What is it?</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>Fluid leaks into formation instead of returning to surface</li>
<li>May lose part or all of the fluid</li>
<li>One of the most costly drilling problems</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Causes</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>Porous or fractured formations</li>
<li>Fluid density too high</li>
<li>Pump pressure too high</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Solutions</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>Add LCM (Lost Circulation Material)</li>
<li>Reduce fluid density</li>
<li>Reduce pump rate</li>
</ul>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 Problem 2: Stuck Pipe</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 What is it?</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>Drill string gets stuck and won't move</li>
<li>May need to cut and lose the string</li>
<li>Huge cost and lost time</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Types of Sticking</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li><strong>Differential sticking:</strong> Mud cake holds the string</li>
<li><strong>Mechanical sticking:</strong> Rock collapse or cuttings buildup</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Prevention and Treatment</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>Reduce fluid loss (thinner cake)</li>
<li>Increase lubrication with chemicals</li>
<li>Keep pipe moving continuously</li>
<li>Pump special freeing fluids</li>
</ul>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 Problem 3: Wellbore Instability</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Symptoms</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>Wellbore wall collapse</li>
<li>Wellbore diameter reduction</li>
<li>Increase in cuttings volume</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Causes</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>Shale absorbs water and swells</li>
<li>Fluid density too low</li>
<li>Chemical incompatibility</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Solutions</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>Use oil-based or synthetic fluid</li>
<li>Add shale inhibitors</li>
<li>Increase fluid density</li>
</ul>

<h2 class="text-primary text-xl font-bold mt-8 mb-4">🔷 Problem 4: Contamination</h2>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Types of Contaminants</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li><strong>Cement:</strong> Raises pH and damages properties</li>
<li><strong>Salt:</strong> Reduces clay effectiveness</li>
<li><strong>Gas:</strong> Reduces fluid density</li>
<li><strong>Gypsum/Anhydrite:</strong> Damages clay</li>
</ul>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Detection and Treatment</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>Regular chemical testing</li>
<li>Add specific treatment chemicals for each contaminant</li>
<li>Sometimes: Dispose of fluid and prepare new</li>
</ul>

<div class="bg-destructive/10 border-l-4 border-destructive p-4 my-6">
<p class="text-destructive font-semibold">⚠️ Golden Rule:</p>
<p>Prevention is always cheaper and easier than cure! Continuous property monitoring prevents most problems.</p>
</div>

<h3 class="text-accent text-lg font-semibold mt-6 mb-3">🔶 Section Summary</h3>

<div class="bg-secondary/50 p-4 rounded-lg">
<p>The four main problems: Lost circulation (use LCM), Stuck pipe (increase lubrication), Wellbore instability (adjust fluid type), and Contamination (chemical treatment). Continuous monitoring is the best prevention.</p>
</div>
</section>`,
          keyTerms: [
            { term: 'Lost Circulation', definition: 'Drilling fluid leaking into formation instead of returning to surface' },
            { term: 'LCM', definition: 'Lost Circulation Material used to seal fractures' },
            { term: 'Stuck Pipe', definition: 'Drill string getting stuck in the wellbore' },
            { term: 'Wellbore Instability', definition: 'Collapse or narrowing of wellbore walls' },
          ],
          practiceQuestion: {
            question: 'What is the primary treatment for lost circulation?',
            options: ['Increase fluid density', 'Add LCM (Lost Circulation Material)', 'Increase pump rate', 'Change the drill bit'],
            correctAnswer: 1,
          },
        },
      },
    },
    {
      day: 6,
      type: 'quiz',
      content: {
        ar: {
          title: 'اختبار سوائل الحفر',
          explanation: 'اختبر معلوماتك عن سوائل الحفر',
          keyTerms: [],
        },
        en: {
          title: 'Drilling Fluids Quiz',
          explanation: 'Test your knowledge of drilling fluids',
          keyTerms: [],
        },
      },
      quiz: {
        ar: [
          {
            question: 'ما هو الاسم الشائع لسائل الحفر في الميدان؟',
            options: ['الزيت', 'الماء', 'الطين', 'الغاز'],
            correctAnswer: 2,
          },
          {
            question: 'أي من التالي ليس وظيفة أساسية لسائل الحفر؟',
            options: ['تبريد رأس الحفر', 'رفع الفتات', 'إنتاج النفط', 'التحكم بالضغط'],
            correctAnswer: 2,
          },
          {
            question: 'ما هو نوع سائل الحفر الأكثر استخداماً في العالم؟',
            options: ['OBM', 'SBM', 'WBM', 'الهواء'],
            correctAnswer: 2,
          },
          {
            question: 'ماذا يحدث إذا كانت كثافة السائل عالية جداً؟',
            options: ['Kick', 'Lost Circulation', 'تبريد أفضل', 'لا شيء'],
            correctAnswer: 1,
          },
          {
            question: 'ما هي الكعكة الطينية (Mud Cake)؟',
            options: ['طعام للعمال', 'طبقة على جدار البئر', 'نوع من رأس الحفر', 'مادة كيميائية'],
            correctAnswer: 1,
          },
          {
            question: 'أين يُخزن سائل الحفر على السطح؟',
            options: ['في رأس الحفر', 'في أحواض الطين', 'في البئر', 'في الشاحنات'],
            correctAnswer: 1,
          },
          {
            question: 'ما هو الفراغ الحلقي (Annulus)؟',
            options: ['داخل سلسلة الحفر', 'المسافة بين السلسلة وجدار البئر', 'فتحة رأس الحفر', 'حوض الطين'],
            correctAnswer: 1,
          },
          {
            question: 'ما هو LCM؟',
            options: ['نوع من المضخات', 'مادة لسد الفجوات', 'جهاز قياس', 'نوع من الطين'],
            correctAnswer: 1,
          },
          {
            question: 'أي ملوث يرفع pH السائل؟',
            options: ['الملح', 'الأسمنت', 'الغاز', 'الماء'],
            correctAnswer: 1,
          },
          {
            question: 'ما هي المناخل الاهتزازية (Shale Shakers)؟',
            options: ['لخلط السائل', 'لفصل الفتات', 'لقياس الكثافة', 'لضخ السائل'],
            correctAnswer: 1,
          },
        ],
        en: [
          {
            question: 'What is the common field name for drilling fluid?',
            options: ['Oil', 'Water', 'Mud', 'Gas'],
            correctAnswer: 2,
          },
          {
            question: 'Which is NOT a primary function of drilling fluid?',
            options: ['Cooling the bit', 'Removing cuttings', 'Producing oil', 'Pressure control'],
            correctAnswer: 2,
          },
          {
            question: 'What type of drilling fluid is most commonly used worldwide?',
            options: ['OBM', 'SBM', 'WBM', 'Air'],
            correctAnswer: 2,
          },
          {
            question: 'What happens if fluid density is too high?',
            options: ['Kick', 'Lost Circulation', 'Better cooling', 'Nothing'],
            correctAnswer: 1,
          },
          {
            question: 'What is Mud Cake?',
            options: ['Food for workers', 'Layer on wellbore wall', 'Type of drill bit', 'Chemical additive'],
            correctAnswer: 1,
          },
          {
            question: 'Where is drilling fluid stored at the surface?',
            options: ['In the drill bit', 'In mud pits', 'In the well', 'In trucks'],
            correctAnswer: 1,
          },
          {
            question: 'What is the Annulus?',
            options: ['Inside the drill string', 'Space between string and wellbore', 'Bit opening', 'Mud tank'],
            correctAnswer: 1,
          },
          {
            question: 'What is LCM?',
            options: ['Type of pump', 'Lost circulation material', 'Measuring device', 'Type of clay'],
            correctAnswer: 1,
          },
          {
            question: 'Which contaminant raises fluid pH?',
            options: ['Salt', 'Cement', 'Gas', 'Water'],
            correctAnswer: 1,
          },
          {
            question: 'What are Shale Shakers for?',
            options: ['Mixing fluid', 'Separating cuttings', 'Measuring density', 'Pumping fluid'],
            correctAnswer: 1,
          },
        ],
      },
    },
    {
      day: 7,
      type: 'project',
      content: {
        ar: {
          title: 'مشروع: تصميم برنامج سوائل حفر',
          explanation: 'طبق ما تعلمته في مشروع عملي',
          keyTerms: [],
        },
        en: {
          title: 'Project: Design a Drilling Fluid Program',
          explanation: 'Apply what you learned in a practical project',
          keyTerms: [],
        },
      },
      project: {
        ar: {
          title: 'تصميم برنامج سوائل حفر لبئر افتراضي',
          description: 'لديك بئر بعمق 3000 متر في منطقة تحتوي على طبقات صخرية طينية حساسة وطبقة مسامية في الأسفل. صمم برنامج سوائل الحفر المناسب.',
          instructions: [
            'حدد نوع سائل الحفر المناسب لكل قسم من البئر مع التبرير',
            'اذكر الخصائص المطلوبة (الكثافة، اللزوجة، الترشيح) لكل قسم',
            'حدد المشاكل المتوقعة وكيف ستتعامل معها',
            'اشرح كيف ستراقب وتختبر السائل أثناء الحفر',
          ],
          submissionType: 'text',
        },
        en: {
          title: 'Design a Drilling Fluid Program for a Hypothetical Well',
          description: 'You have a 3000-meter deep well in an area containing sensitive shale layers and a porous layer at the bottom. Design the appropriate drilling fluid program.',
          instructions: [
            'Identify the appropriate drilling fluid type for each section with justification',
            'Specify the required properties (density, viscosity, filtration) for each section',
            'Identify expected problems and how you will handle them',
            'Explain how you will monitor and test the fluid during drilling',
          ],
          submissionType: 'text',
        },
      },
    },
  ],
};
