import { WeeklyLesson } from '../weeklyContent';

export const drillingFluidsLevel2Lesson: WeeklyLesson = {
  lessonId: 'drilling-fluids-2',
  days: [
    {
      day: 1,
      type: 'learning',
      content: {
        ar: {
          title: 'سوائل الحفر المستوى 2 - اليوم الأول: التركيب الكيميائي المتقدم لسوائل الحفر',
          explanation: `<section>
<h2 style="color: #1e3a5f;" class="text-xl font-bold mb-4">🔷 مقدمة في كيمياء سوائل الحفر المتقدمة</h2>
<p class="mb-4">في المستوى الثاني من دراسة سوائل الحفر، نتعمق في الجوانب الكيميائية المعقدة التي تحكم سلوك هذه السوائل الحيوية. فهم التركيب الكيميائي الدقيق يمكّن مهندس الحفر من تصميم سوائل مخصصة للتحديات الفريدة لكل بئر، سواء كانت درجات حرارة عالية، ضغوط شاذة، أو تشكيلات جيولوجية حساسة.</p>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); padding: 20px; border-radius: 12px; margin: 20px 0; color: white;">
<h3 style="color: #fbbf24;" class="font-bold mb-2">💡 أهمية فهم كيمياء سوائل الحفر</h3>
<p>يُقدر أن 70% من مشاكل الحفر مرتبطة بشكل مباشر أو غير مباشر بسوائل الحفر، مما يجعل الفهم الكيميائي العميق ضرورة وليس ترفاً.</p>
</div>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 البوليمرات في سوائل الحفر (Polymers in Drilling Fluids)</h3>
<p class="mb-4">البوليمرات هي سلاسل جزيئية طويلة تتكون من وحدات متكررة، وتلعب دوراً محورياً في تعديل خصائص سوائل الحفر:</p>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">أولاً: بوليمرات طبيعية (Natural Polymers)</h4>
<ul class="list-disc pr-6 mb-4 space-y-2">
<li><strong>النشا (Starch):</strong> يُستخدم للتحكم في فقدان السوائل، يُستخرج من الذرة أو البطاطس، فعال حتى 120°C</li>
<li><strong>صمغ الزانثان (Xanthan Gum - XC Polymer):</strong> أفضل بوليمر لزيادة اللزوجة، ينتج من تخمير بكتيري، ممتاز للتعليق</li>
<li><strong>صمغ الغوار (Guar Gum):</strong> يُستخرج من نبات الغوار، أرخص من XC، يتأثر بالبكتيريا</li>
<li><strong>السليلوز ومشتقاته (Cellulose Derivatives):</strong> CMC, PAC, HEC - كل منها له خصائص فريدة</li>
</ul>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">ثانياً: بوليمرات صناعية (Synthetic Polymers)</h4>
<ul class="list-disc pr-6 mb-4 space-y-2">
<li><strong>البولي أكريلاميد (Polyacrylamide - PHPA):</strong> يوفر تثبيتاً ممتازاً للصخور الطفلية، يعمل عن طريق التغليف</li>
<li><strong>البوليمرات المشتركة (Copolymers):</strong> مزيج من مونومرات مختلفة لخصائص محسنة</li>
<li><strong>البوليمرات المقاومة للحرارة:</strong> AMPS-based polymers للآبار العميقة جداً</li>
</ul>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 كيمياء الطين (Clay Chemistry)</h3>
<p class="mb-4">الأطيان هي معادن سيليكاتية طبقية ذات خصائص فريدة:</p>

<div style="background: #f8fafc; padding: 16px; border-radius: 8px; border-right: 4px solid #ff6b35; margin: 16px 0;">
<h4 style="color: #1e3a5f;" class="font-bold mb-2">بنية الطين الأساسية</h4>
<ul class="list-disc pr-6 space-y-1">
<li>طبقات رباعية السطوح (Tetrahedral) - سيليكون وأكسجين</li>
<li>طبقات ثمانية السطوح (Octahedral) - ألومنيوم وأكسجين</li>
<li>كاتيونات قابلة للتبادل بين الطبقات</li>
<li>القدرة على التبادل الأيوني (CEC) تحدد النشاط</li>
</ul>
</div>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">أنواع الأطيان الرئيسية:</h4>
<table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 12px; border: 1px solid #ddd;">نوع الطين</th>
<th style="padding: 12px; border: 1px solid #ddd;">CEC (meq/100g)</th>
<th style="padding: 12px; border: 1px solid #ddd;">الاستخدام</th>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #ddd;">البنتونايت (Bentonite)</td>
<td style="padding: 12px; border: 1px solid #ddd;">80-120</td>
<td style="padding: 12px; border: 1px solid #ddd;">لزوجة، ترشيح</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;">الأتابولجايت (Attapulgite)</td>
<td style="padding: 12px; border: 1px solid #ddd;">25-30</td>
<td style="padding: 12px; border: 1px solid #ddd;">المياه المالحة</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #ddd;">السيبيولايت (Sepiolite)</td>
<td style="padding: 12px; border: 1px solid #ddd;">20-30</td>
<td style="padding: 12px; border: 1px solid #ddd;">درجات حرارة عالية</td>
</tr>
</table>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 التفاعلات الكيميائية في سائل الحفر</h3>
<p class="mb-4">عدة تفاعلات كيميائية تحدث باستمرار في سائل الحفر:</p>

<ol class="list-decimal pr-6 mb-4 space-y-3">
<li><strong>التحلل المائي (Hydrolysis):</strong> تفكك البوليمرات بفعل الماء، يتسارع بالحرارة</li>
<li><strong>الأكسدة (Oxidation):</strong> تدهور البوليمرات بالأكسجين، يُعالج بإضافة مزيلات الأكسجين</li>
<li><strong>التبادل الأيوني (Ion Exchange):</strong> استبدال الكاتيونات على سطح الطين</li>
<li><strong>التلبد (Flocculation):</strong> تجمع جزيئات الطين، قد يكون مطلوباً أو غير مرغوب</li>
<li><strong>التفرق (Deflocculation):</strong> توزيع جزيئات الطين، يحسن الانسياب</li>
</ol>

<div style="background: #fef3c7; padding: 16px; border-radius: 8px; border-right: 4px solid #f59e0b; margin: 16px 0;">
<h4 style="color: #92400e;" class="font-bold mb-2">⚠️ تحذير مهم</h4>
<p>التلوث الكيميائي من التشكيلات (كالجبس والملح) يمكن أن يغير خصائص السائل بشكل جذري. المراقبة المستمرة ضرورية.</p>
</div>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 الأس الهيدروجيني (pH) وأهميته</h3>
<p class="mb-4">الـ pH يؤثر على كل جانب من جوانب سائل الحفر:</p>
<ul class="list-disc pr-6 mb-4 space-y-2">
<li>النطاق الأمثل للطين: 9.0 - 10.5</li>
<li>pH منخفض (< 8): تلبد الطين، زيادة اللزوجة</li>
<li>pH مرتفع (> 11): تفرق مفرط، ترقق الكيك</li>
<li>يؤثر على ذوبانية الأملاح والإضافات</li>
<li>يتحكم في نشاط بعض البوليمرات</li>
</ul>
</section>`,
          keyTerms: [
            { term: 'بوليمر (Polymer)', definition: 'جزيء كبير يتكون من سلسلة من الوحدات المتكررة المرتبطة كيميائياً' },
            { term: 'التبادل الأيوني (Ion Exchange)', definition: 'عملية استبدال الأيونات على سطح الطين بأيونات أخرى من المحلول' },
            { term: 'قدرة التبادل الكاتيوني CEC', definition: 'مقياس لعدد الكاتيونات التي يمكن للطين تبادلها، تُقاس بـ meq/100g' },
            { term: 'التلبد (Flocculation)', definition: 'تجمع جزيئات الطين معاً لتكوين كتل أكبر' },
          ],
          practiceQuestion: {
            question: 'أي من البوليمرات التالية يُعتبر الأفضل لزيادة لزوجة سائل الحفر مع الحفاظ على خصائص تعليق ممتازة؟',
            options: ['النشا (Starch)', 'صمغ الزانثان (Xanthan Gum)', 'صمغ الغوار (Guar Gum)', 'البولي أكريلاميد (PHPA)'],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Drilling Fluids Level 2 - Day 1: Advanced Chemical Composition',
          explanation: `<section>
<h2 style="color: #1e3a5f;" class="text-xl font-bold mb-4">🔷 Introduction to Advanced Drilling Fluid Chemistry</h2>
<p class="mb-4">In Level 2 of drilling fluids study, we delve into the complex chemical aspects that govern the behavior of these vital fluids. Understanding the precise chemical composition enables the drilling engineer to design custom fluids for each well's unique challenges, whether high temperatures, abnormal pressures, or sensitive geological formations.</p>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); padding: 20px; border-radius: 12px; margin: 20px 0; color: white;">
<h3 style="color: #fbbf24;" class="font-bold mb-2">💡 Importance of Understanding Drilling Fluid Chemistry</h3>
<p>It's estimated that 70% of drilling problems are directly or indirectly related to drilling fluids, making deep chemical understanding a necessity, not a luxury.</p>
</div>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 Polymers in Drilling Fluids</h3>
<p class="mb-4">Polymers are long molecular chains consisting of repeating units, playing a pivotal role in modifying drilling fluid properties:</p>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">First: Natural Polymers</h4>
<ul class="list-disc pl-6 mb-4 space-y-2">
<li><strong>Starch:</strong> Used for fluid loss control, extracted from corn or potatoes, effective up to 120°C</li>
<li><strong>Xanthan Gum (XC Polymer):</strong> Best polymer for viscosity increase, produced by bacterial fermentation, excellent for suspension</li>
<li><strong>Guar Gum:</strong> Extracted from guar plant, cheaper than XC, susceptible to bacteria</li>
<li><strong>Cellulose Derivatives:</strong> CMC, PAC, HEC - each has unique properties</li>
</ul>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">Second: Synthetic Polymers</h4>
<ul class="list-disc pl-6 mb-4 space-y-2">
<li><strong>Polyacrylamide (PHPA):</strong> Provides excellent shale stabilization, works by encapsulation</li>
<li><strong>Copolymers:</strong> Mixture of different monomers for enhanced properties</li>
<li><strong>Heat-Resistant Polymers:</strong> AMPS-based polymers for very deep wells</li>
</ul>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 Clay Chemistry</h3>
<p class="mb-4">Clays are layered silicate minerals with unique properties:</p>

<div style="background: #f8fafc; padding: 16px; border-radius: 8px; border-left: 4px solid #ff6b35; margin: 16px 0;">
<h4 style="color: #1e3a5f;" class="font-bold mb-2">Basic Clay Structure</h4>
<ul class="list-disc pl-6 space-y-1">
<li>Tetrahedral layers - silicon and oxygen</li>
<li>Octahedral layers - aluminum and oxygen</li>
<li>Exchangeable cations between layers</li>
<li>Cation Exchange Capacity (CEC) determines activity</li>
</ul>
</div>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">Main Clay Types:</h4>
<table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 12px; border: 1px solid #ddd;">Clay Type</th>
<th style="padding: 12px; border: 1px solid #ddd;">CEC (meq/100g)</th>
<th style="padding: 12px; border: 1px solid #ddd;">Usage</th>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #ddd;">Bentonite</td>
<td style="padding: 12px; border: 1px solid #ddd;">80-120</td>
<td style="padding: 12px; border: 1px solid #ddd;">Viscosity, filtration</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;">Attapulgite</td>
<td style="padding: 12px; border: 1px solid #ddd;">25-30</td>
<td style="padding: 12px; border: 1px solid #ddd;">Salt water</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #ddd;">Sepiolite</td>
<td style="padding: 12px; border: 1px solid #ddd;">20-30</td>
<td style="padding: 12px; border: 1px solid #ddd;">High temperatures</td>
</tr>
</table>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 Chemical Reactions in Drilling Fluid</h3>
<p class="mb-4">Several chemical reactions occur continuously in drilling fluid:</p>

<ol class="list-decimal pl-6 mb-4 space-y-3">
<li><strong>Hydrolysis:</strong> Polymer breakdown by water, accelerated by heat</li>
<li><strong>Oxidation:</strong> Polymer degradation by oxygen, treated by adding oxygen scavengers</li>
<li><strong>Ion Exchange:</strong> Replacement of cations on clay surface</li>
<li><strong>Flocculation:</strong> Clay particle aggregation, may be required or undesired</li>
<li><strong>Deflocculation:</strong> Clay particle dispersion, improves flow</li>
</ol>

<div style="background: #fef3c7; padding: 16px; border-radius: 8px; border-left: 4px solid #f59e0b; margin: 16px 0;">
<h4 style="color: #92400e;" class="font-bold mb-2">⚠️ Important Warning</h4>
<p>Chemical contamination from formations (like gypsum and salt) can radically change fluid properties. Continuous monitoring is essential.</p>
</div>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 pH and Its Importance</h3>
<p class="mb-4">pH affects every aspect of drilling fluid:</p>
<ul class="list-disc pl-6 mb-4 space-y-2">
<li>Optimal range for clay: 9.0 - 10.5</li>
<li>Low pH (< 8): Clay flocculation, viscosity increase</li>
<li>High pH (> 11): Excessive deflocculation, cake thinning</li>
<li>Affects solubility of salts and additives</li>
<li>Controls activity of some polymers</li>
</ul>
</section>`,
          keyTerms: [
            { term: 'Polymer', definition: 'A large molecule consisting of a chain of chemically bonded repeating units' },
            { term: 'Ion Exchange', definition: 'Process of replacing ions on clay surface with other ions from solution' },
            { term: 'Cation Exchange Capacity (CEC)', definition: 'Measure of the number of cations a clay can exchange, measured in meq/100g' },
            { term: 'Flocculation', definition: 'Aggregation of clay particles together to form larger clusters' },
          ],
          practiceQuestion: {
            question: 'Which of the following polymers is considered best for increasing drilling fluid viscosity while maintaining excellent suspension properties?',
            options: ['Starch', 'Xanthan Gum', 'Guar Gum', 'Polyacrylamide (PHPA)'],
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
          title: 'سوائل الحفر المستوى 2 - اليوم الثاني: أنظمة سوائل الحفر المتخصصة',
          explanation: `<section>
<h2 style="color: #1e3a5f;" class="text-xl font-bold mb-4">🔷 أنظمة سوائل الحفر المتخصصة</h2>
<p class="mb-4">مع تزايد تعقيد عمليات الحفر وحفر الآبار في بيئات أكثر تحدياً، تطورت أنظمة سوائل حفر متخصصة لمواجهة هذه التحديات. كل نظام مصمم لظروف محددة ويتطلب فهماً عميقاً لآلية عمله.</p>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 أنظمة السوائل ذات الأساس الزيتي (Oil-Based Mud Systems - OBM)</h3>
<p class="mb-4">تُستخدم عندما تفشل السوائل المائية في توفير الأداء المطلوب:</p>

<div style="background: #f0fdf4; padding: 16px; border-radius: 8px; border-right: 4px solid #22c55e; margin: 16px 0;">
<h4 style="color: #166534;" class="font-bold mb-2">✅ مميزات OBM</h4>
<ul class="list-disc pr-6 space-y-1">
<li>استقرار ممتاز للصخور الطفلية</li>
<li>تشحيم فائق - يقلل عزم الدوران والسحب</li>
<li>مقاومة عالية للحرارة (حتى 260°C)</li>
<li>عدم تأثر بالتلوث الملحي</li>
<li>معدلات اختراق أعلى في بعض التشكيلات</li>
</ul>
</div>

<div style="background: #fef2f2; padding: 16px; border-radius: 8px; border-right: 4px solid #ef4444; margin: 16px 0;">
<h4 style="color: #991b1b;" class="font-bold mb-2">❌ عيوب OBM</h4>
<ul class="list-disc pr-6 space-y-1">
<li>تكلفة عالية (3-5 أضعاف WBM)</li>
<li>مخاوف بيئية - التخلص مكلف</li>
<li>صعوبة اكتشاف التدفقات الغازية</li>
<li>مشاكل في تقييم التشكيلات (logging)</li>
<li>خطر الحريق والسلامة</li>
</ul>
</div>

<h4 style="color: #1e3a5f;" class="font-bold mb-2 mt-4">أنواع OBM:</h4>
<ol class="list-decimal pr-6 mb-4 space-y-2">
<li><strong>طين الزيت الكامل (All-Oil Mud):</strong> لا يحتوي ماء، نادر الاستخدام</li>
<li><strong>مستحلب معكوس (Invert Emulsion):</strong> ماء في زيت، الأكثر شيوعاً (O/W ratio: 70/30 - 90/10)</li>
<li><strong>أنظمة الزيوت الاصطناعية (Synthetic-Based Mud - SBM):</strong> بديل صديق للبيئة</li>
</ol>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 أنظمة الكثافة العالية (High-Density Systems)</h3>
<p class="mb-4">للتحكم في الضغوط العالية جداً (HPHT wells):</p>

<table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 12px; border: 1px solid #ddd;">مادة الثقل</th>
<th style="padding: 12px; border: 1px solid #ddd;">الكثافة النوعية</th>
<th style="padding: 12px; border: 1px solid #ddd;">الحد الأقصى للطين</th>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #ddd;">الباريت (Barite)</td>
<td style="padding: 12px; border: 1px solid #ddd;">4.2</td>
<td style="padding: 12px; border: 1px solid #ddd;">21 ppg</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;">الهيماتيت (Hematite)</td>
<td style="padding: 12px; border: 1px solid #ddd;">5.0</td>
<td style="padding: 12px; border: 1px solid #ddd;">24 ppg</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #ddd;">إيلمينايت (Ilmenite)</td>
<td style="padding: 12px; border: 1px solid #ddd;">4.6</td>
<td style="padding: 12px; border: 1px solid #ddd;">22 ppg</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;">جالينا (Galena)</td>
<td style="padding: 12px; border: 1px solid #ddd;">7.5</td>
<td style="padding: 12px; border: 1px solid #ddd;">35 ppg</td>
</tr>
</table>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 أنظمة التثبيط (Inhibitive Systems)</h3>
<p class="mb-4">مصممة لمنع تفاعل الصخور الطفلية:</p>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">1. نظام البوتاسيوم (KCl System)</h4>
<ul class="list-disc pr-6 mb-4 space-y-2">
<li>تركيز KCl: 3-15% وزناً</li>
<li>أيون K+ يحل محل Na+ في الطين</li>
<li>يقلل انتفاخ الصخور الطفلية بنسبة 60-80%</li>
<li>يُضاف مع بوليمرات PHPA للتأثير المزدوج</li>
</ul>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">2. نظام السيليكات (Silicate System)</h4>
<ul class="list-disc pr-6 mb-4 space-y-2">
<li>سيليكات الصوديوم أو البوتاسيوم</li>
<li>تتفاعل مع Ca++ لتكوين طبقة واقية</li>
<li>فعالة جداً في الطفل الناعم</li>
<li>صديقة للبيئة نسبياً</li>
</ul>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">3. نظام الجليكول (Glycol System)</h4>
<ul class="list-disc pr-6 mb-4 space-y-2">
<li>بولي إيثيلين جليكول (PEG) أو بولي بروبيلين جليكول (PPG)</li>
<li>يعمل عن طريق "Cloud Point" - التشبع الحراري</li>
<li>فعال في نطاق درجات حرارة محدد</li>
</ul>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 أنظمة الفقاعات الدقيقة (Foam/Aerated Systems)</h3>
<p class="mb-4">للمناطق ذات الضغط المنخفض:</p>
<ul class="list-disc pr-6 mb-4 space-y-2">
<li><strong>الطين المهواة (Aerated Mud):</strong> كثافة 4-8 ppg</li>
<li><strong>الرغوة المستقرة (Stable Foam):</strong> كثافة 2-5 ppg</li>
<li><strong>الضباب (Mist):</strong> كثافة < 2 ppg</li>
<li>تتطلب معدات خاصة للتحكم والسلامة</li>
</ul>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); padding: 20px; border-radius: 12px; margin: 20px 0; color: white;">
<h3 style="color: #fbbf24;" class="font-bold mb-2">💡 نصيحة الخبراء</h3>
<p>اختيار نظام سائل الحفر يجب أن يوازن بين الأداء الفني، التكلفة، والاعتبارات البيئية. لا يوجد نظام "أفضل" - فقط النظام الأنسب للظروف المحددة.</p>
</div>
</section>`,
          keyTerms: [
            { term: 'مستحلب معكوس (Invert Emulsion)', definition: 'نظام زيتي يحتوي على قطرات ماء مشتتة في الطور الزيتي المستمر' },
            { term: 'نظام التثبيط (Inhibitive System)', definition: 'نظام سائل حفر مصمم لمنع أو تقليل تفاعل الصخور الطفلية مع الماء' },
            { term: 'Cloud Point', definition: 'درجة الحرارة التي يصبح عندها الجليكول غير قابل للذوبان ويترسب على الصخر' },
            { term: 'HPHT', definition: 'آبار الضغط العالي ودرجة الحرارة العالية - عادة > 300°F و > 10,000 psi' },
          ],
          practiceQuestion: {
            question: 'ما هي نسبة O/W الشائعة في أنظمة المستحلب المعكوس؟',
            options: ['50/50 - 60/40', '70/30 - 90/10', '95/5 - 99/1', '30/70 - 40/60'],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Drilling Fluids Level 2 - Day 2: Specialized Drilling Fluid Systems',
          explanation: `<section>
<h2 style="color: #1e3a5f;" class="text-xl font-bold mb-4">🔷 Specialized Drilling Fluid Systems</h2>
<p class="mb-4">With increasing drilling operation complexity and drilling wells in more challenging environments, specialized drilling fluid systems have evolved to meet these challenges. Each system is designed for specific conditions and requires deep understanding of its mechanism.</p>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 Oil-Based Mud Systems (OBM)</h3>
<p class="mb-4">Used when water-based fluids fail to provide required performance:</p>

<div style="background: #f0fdf4; padding: 16px; border-radius: 8px; border-left: 4px solid #22c55e; margin: 16px 0;">
<h4 style="color: #166534;" class="font-bold mb-2">✅ OBM Advantages</h4>
<ul class="list-disc pl-6 space-y-1">
<li>Excellent shale stability</li>
<li>Superior lubrication - reduces torque and drag</li>
<li>High temperature resistance (up to 260°C)</li>
<li>Unaffected by salt contamination</li>
<li>Higher penetration rates in some formations</li>
</ul>
</div>

<div style="background: #fef2f2; padding: 16px; border-radius: 8px; border-left: 4px solid #ef4444; margin: 16px 0;">
<h4 style="color: #991b1b;" class="font-bold mb-2">❌ OBM Disadvantages</h4>
<ul class="list-disc pl-6 space-y-1">
<li>High cost (3-5 times WBM)</li>
<li>Environmental concerns - expensive disposal</li>
<li>Difficulty detecting gas kicks</li>
<li>Problems in formation evaluation (logging)</li>
<li>Fire and safety hazards</li>
</ul>
</div>

<h4 style="color: #1e3a5f;" class="font-bold mb-2 mt-4">OBM Types:</h4>
<ol class="list-decimal pl-6 mb-4 space-y-2">
<li><strong>All-Oil Mud:</strong> Contains no water, rarely used</li>
<li><strong>Invert Emulsion:</strong> Water-in-oil, most common (O/W ratio: 70/30 - 90/10)</li>
<li><strong>Synthetic-Based Mud (SBM):</strong> Environmentally friendly alternative</li>
</ol>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 High-Density Systems</h3>
<p class="mb-4">For controlling very high pressures (HPHT wells):</p>

<table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 12px; border: 1px solid #ddd;">Weighting Material</th>
<th style="padding: 12px; border: 1px solid #ddd;">Specific Gravity</th>
<th style="padding: 12px; border: 1px solid #ddd;">Max Mud Weight</th>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #ddd;">Barite</td>
<td style="padding: 12px; border: 1px solid #ddd;">4.2</td>
<td style="padding: 12px; border: 1px solid #ddd;">21 ppg</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;">Hematite</td>
<td style="padding: 12px; border: 1px solid #ddd;">5.0</td>
<td style="padding: 12px; border: 1px solid #ddd;">24 ppg</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #ddd;">Ilmenite</td>
<td style="padding: 12px; border: 1px solid #ddd;">4.6</td>
<td style="padding: 12px; border: 1px solid #ddd;">22 ppg</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;">Galena</td>
<td style="padding: 12px; border: 1px solid #ddd;">7.5</td>
<td style="padding: 12px; border: 1px solid #ddd;">35 ppg</td>
</tr>
</table>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 Inhibitive Systems</h3>
<p class="mb-4">Designed to prevent shale reaction:</p>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">1. Potassium System (KCl)</h4>
<ul class="list-disc pl-6 mb-4 space-y-2">
<li>KCl concentration: 3-15% by weight</li>
<li>K+ ion replaces Na+ in clay</li>
<li>Reduces shale swelling by 60-80%</li>
<li>Added with PHPA polymers for dual effect</li>
</ul>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">2. Silicate System</h4>
<ul class="list-disc pl-6 mb-4 space-y-2">
<li>Sodium or potassium silicate</li>
<li>Reacts with Ca++ to form protective layer</li>
<li>Very effective in soft shales</li>
<li>Relatively environmentally friendly</li>
</ul>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">3. Glycol System</h4>
<ul class="list-disc pl-6 mb-4 space-y-2">
<li>Polyethylene glycol (PEG) or polypropylene glycol (PPG)</li>
<li>Works through "Cloud Point" - thermal saturation</li>
<li>Effective in limited temperature range</li>
</ul>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 Foam/Aerated Systems</h3>
<p class="mb-4">For low-pressure zones:</p>
<ul class="list-disc pl-6 mb-4 space-y-2">
<li><strong>Aerated Mud:</strong> Density 4-8 ppg</li>
<li><strong>Stable Foam:</strong> Density 2-5 ppg</li>
<li><strong>Mist:</strong> Density < 2 ppg</li>
<li>Require special equipment for control and safety</li>
</ul>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); padding: 20px; border-radius: 12px; margin: 20px 0; color: white;">
<h3 style="color: #fbbf24;" class="font-bold mb-2">💡 Expert Tip</h3>
<p>Drilling fluid system selection must balance technical performance, cost, and environmental considerations. There is no "best" system - only the most suitable system for specific conditions.</p>
</div>
</section>`,
          keyTerms: [
            { term: 'Invert Emulsion', definition: 'An oil-based system containing water droplets dispersed in a continuous oil phase' },
            { term: 'Inhibitive System', definition: 'A drilling fluid system designed to prevent or reduce shale reaction with water' },
            { term: 'Cloud Point', definition: 'Temperature at which glycol becomes insoluble and precipitates on rock' },
            { term: 'HPHT', definition: 'High Pressure High Temperature wells - typically > 300°F and > 10,000 psi' },
          ],
          practiceQuestion: {
            question: 'What is the common O/W ratio in invert emulsion systems?',
            options: ['50/50 - 60/40', '70/30 - 90/10', '95/5 - 99/1', '30/70 - 40/60'],
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
          title: 'سوائل الحفر المستوى 2 - اليوم الثالث: الخصائص الريولوجية المتقدمة',
          explanation: `<section>
<h2 style="color: #1e3a5f;" class="text-xl font-bold mb-4">🔷 الريولوجيا المتقدمة لسوائل الحفر</h2>
<p class="mb-4">الريولوجيا هي علم دراسة تدفق وتشوه المواد. في سوائل الحفر، الفهم العميق للريولوجيا ضروري لتحسين التنظيف، التحكم في ECD، وتقليل مشاكل الحفر.</p>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 نماذج التدفق الريولوجية (Rheological Flow Models)</h3>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">1. نموذج بنجهام البلاستيكي (Bingham Plastic)</h4>
<div style="background: #f8fafc; padding: 16px; border-radius: 8px; margin: 16px 0;">
<p class="mb-2"><strong>المعادلة:</strong> τ = YP + (PV × γ)</p>
<ul class="list-disc pr-6 space-y-1">
<li>τ = إجهاد القص (Shear Stress)</li>
<li>YP = نقطة الخضوع (Yield Point)</li>
<li>PV = اللزوجة البلاستيكية (Plastic Viscosity)</li>
<li>γ = معدل القص (Shear Rate)</li>
</ul>
<p class="mt-2 text-sm">مناسب لمعدلات القص العالية، لكنه يبالغ في YP عند معدلات منخفضة</p>
</div>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">2. نموذج قانون القوة (Power Law)</h4>
<div style="background: #f8fafc; padding: 16px; border-radius: 8px; margin: 16px 0;">
<p class="mb-2"><strong>المعادلة:</strong> τ = K × γⁿ</p>
<ul class="list-disc pr-6 space-y-1">
<li>K = مؤشر الاتساق (Consistency Index)</li>
<li>n = مؤشر السلوك (Flow Behavior Index)</li>
<li>n < 1: سائل قصي التخفيف (Shear-thinning)</li>
<li>n = 1: سائل نيوتوني</li>
<li>n > 1: سائل قصي التثخين (Shear-thickening)</li>
</ul>
</div>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">3. نموذج هيرشل-بولكلي (Herschel-Bulkley)</h4>
<div style="background: #f0fdf4; padding: 16px; border-radius: 8px; border-right: 4px solid #22c55e; margin: 16px 0;">
<p class="mb-2"><strong>المعادلة:</strong> τ = τ₀ + K × γⁿ</p>
<p>الأكثر دقة لسوائل الحفر - يجمع بين YP الحقيقي وسلوك قانون القوة</p>
<ul class="list-disc pr-6 mt-2 space-y-1">
<li>τ₀ = إجهاد الخضوع الحقيقي</li>
<li>أفضل لحسابات ECD</li>
<li>يتطلب قياسات متعددة النقاط</li>
</ul>
</div>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 قياسات الفيسكوميتر (Viscometer Readings)</h3>
<p class="mb-4">جهاز Fann VG متعدد السرعات يقيس عند 6 سرعات قياسية:</p>

<table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 12px; border: 1px solid #ddd;">السرعة (RPM)</th>
<th style="padding: 12px; border: 1px solid #ddd;">معدل القص (sec⁻¹)</th>
<th style="padding: 12px; border: 1px solid #ddd;">الاستخدام</th>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #ddd;">600</td>
<td style="padding: 12px; border: 1px solid #ddd;">1022</td>
<td style="padding: 12px; border: 1px solid #ddd;">PV, YP</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;">300</td>
<td style="padding: 12px; border: 1px solid #ddd;">511</td>
<td style="padding: 12px; border: 1px solid #ddd;">PV, YP</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #ddd;">200</td>
<td style="padding: 12px; border: 1px solid #ddd;">341</td>
<td style="padding: 12px; border: 1px solid #ddd;">نموذج H-B</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;">100</td>
<td style="padding: 12px; border: 1px solid #ddd;">170</td>
<td style="padding: 12px; border: 1px solid #ddd;">نموذج H-B</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #ddd;">6</td>
<td style="padding: 12px; border: 1px solid #ddd;">10.2</td>
<td style="padding: 12px; border: 1px solid #ddd;">LSYP</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;">3</td>
<td style="padding: 12px; border: 1px solid #ddd;">5.1</td>
<td style="padding: 12px; border: 1px solid #ddd;">LSYP, Gel</td>
</tr>
</table>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">حسابات API القياسية:</h4>
<ul class="list-disc pr-6 mb-4 space-y-2">
<li><strong>PV (cP) = θ600 - θ300</strong></li>
<li><strong>YP (lb/100ft²) = θ300 - PV</strong></li>
<li><strong>AV (cP) = θ600 / 2</strong></li>
</ul>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 قوة الجل (Gel Strength)</h3>
<p class="mb-4">قياس بنية السائل عند السكون:</p>

<div style="background: #fef3c7; padding: 16px; border-radius: 8px; border-right: 4px solid #f59e0b; margin: 16px 0;">
<h4 style="color: #92400e;" class="font-bold mb-2">أنواع سلوك الجل:</h4>
<ul class="list-disc pr-6 space-y-2">
<li><strong>جل مسطح (Flat Gel):</strong> 10 sec ≈ 10 min - مرغوب للتعليق</li>
<li><strong>جل تقدمي (Progressive Gel):</strong> 10 min >> 10 sec - مشاكل في استئناف الدوران</li>
<li><strong>جل هش (Fragile Gel):</strong> يتكسر بسهولة - قد لا يعلق الفتات</li>
</ul>
</div>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 نقطة الخضوع منخفضة القص (LSYP)</h3>
<p class="mb-4">مؤشر مهم لأداء التنظيف والتعليق:</p>
<ul class="list-disc pr-6 mb-4 space-y-2">
<li><strong>الحساب:</strong> LSYP = (2 × θ3) - θ6</li>
<li>يجب أن يكون موجباً للتعليق الجيد</li>
<li>قيمة سالبة تشير لمشاكل في تعليق الباريت</li>
<li>الهدف: 5-15 lb/100ft² للتعليق الأمثل</li>
</ul>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 تأثير درجة الحرارة والضغط (HPHT Rheology)</h3>
<p class="mb-4">الخصائص الريولوجية تتغير بشكل كبير مع الظروف:</p>

<div style="background: #f8fafc; padding: 16px; border-radius: 8px; margin: 16px 0;">
<h4 style="color: #1e3a5f;" class="font-bold mb-2">تأثير الحرارة:</h4>
<ul class="list-disc pr-6 space-y-1">
<li>PV تنخفض مع زيادة الحرارة</li>
<li>YP قد يزيد أو ينخفض حسب النظام</li>
<li>تدهور البوليمرات عند درجات عالية</li>
</ul>

<h4 style="color: #1e3a5f;" class="font-bold mb-2 mt-3">تأثير الضغط:</h4>
<ul class="list-disc pr-6 space-y-1">
<li>زيادة طفيفة في اللزوجة مع الضغط</li>
<li>يعوض جزئياً تأثير الحرارة</li>
<li>مهم لحسابات ECD الدقيقة</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); padding: 20px; border-radius: 12px; margin: 20px 0; color: white;">
<h3 style="color: #fbbf24;" class="font-bold mb-2">💡 تطبيق عملي</h3>
<p>استخدم نموذج Herschel-Bulkley لحسابات ECD وهيدروليكا أكثر دقة، خاصة في الآبار العميقة حيث الفرق بين النماذج يصبح كبيراً.</p>
</div>
</section>`,
          keyTerms: [
            { term: 'نموذج هيرشل-بولكلي', definition: 'نموذج ريولوجي يجمع بين إجهاد خضوع حقيقي وسلوك قانون القوة، الأكثر دقة لسوائل الحفر' },
            { term: 'LSYP', definition: 'نقطة الخضوع منخفضة القص - مؤشر لقدرة السائل على تعليق المواد الصلبة عند معدلات قص منخفضة' },
            { term: 'قوة الجل (Gel Strength)', definition: 'قياس لقوة البنية الداخلية للسائل عند السكون' },
            { term: 'مؤشر السلوك n', definition: 'معامل في نموذج قانون القوة يحدد ما إذا كان السائل قصي التخفيف أو التثخين' },
          ],
          practiceQuestion: {
            question: 'إذا كانت قراءة θ600 = 65 و θ300 = 40، ما قيمة اللزوجة البلاستيكية PV؟',
            options: ['25 cP', '40 cP', '65 cP', '105 cP'],
            correctAnswer: 0,
          },
        },
        en: {
          title: 'Drilling Fluids Level 2 - Day 3: Advanced Rheological Properties',
          explanation: `<section>
<h2 style="color: #1e3a5f;" class="text-xl font-bold mb-4">🔷 Advanced Rheology of Drilling Fluids</h2>
<p class="mb-4">Rheology is the science of studying flow and deformation of materials. In drilling fluids, deep understanding of rheology is essential for optimizing hole cleaning, controlling ECD, and reducing drilling problems.</p>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 Rheological Flow Models</h3>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">1. Bingham Plastic Model</h4>
<div style="background: #f8fafc; padding: 16px; border-radius: 8px; margin: 16px 0;">
<p class="mb-2"><strong>Equation:</strong> τ = YP + (PV × γ)</p>
<ul class="list-disc pl-6 space-y-1">
<li>τ = Shear Stress</li>
<li>YP = Yield Point</li>
<li>PV = Plastic Viscosity</li>
<li>γ = Shear Rate</li>
</ul>
<p class="mt-2 text-sm">Suitable for high shear rates, but overestimates YP at low rates</p>
</div>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">2. Power Law Model</h4>
<div style="background: #f8fafc; padding: 16px; border-radius: 8px; margin: 16px 0;">
<p class="mb-2"><strong>Equation:</strong> τ = K × γⁿ</p>
<ul class="list-disc pl-6 space-y-1">
<li>K = Consistency Index</li>
<li>n = Flow Behavior Index</li>
<li>n < 1: Shear-thinning fluid</li>
<li>n = 1: Newtonian fluid</li>
<li>n > 1: Shear-thickening fluid</li>
</ul>
</div>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">3. Herschel-Bulkley Model</h4>
<div style="background: #f0fdf4; padding: 16px; border-radius: 8px; border-left: 4px solid #22c55e; margin: 16px 0;">
<p class="mb-2"><strong>Equation:</strong> τ = τ₀ + K × γⁿ</p>
<p>Most accurate for drilling fluids - combines true YP with power law behavior</p>
<ul class="list-disc pl-6 mt-2 space-y-1">
<li>τ₀ = True yield stress</li>
<li>Best for ECD calculations</li>
<li>Requires multi-point measurements</li>
</ul>
</div>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 Viscometer Readings</h3>
<p class="mb-4">Fann VG multi-speed device measures at 6 standard speeds:</p>

<table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 12px; border: 1px solid #ddd;">Speed (RPM)</th>
<th style="padding: 12px; border: 1px solid #ddd;">Shear Rate (sec⁻¹)</th>
<th style="padding: 12px; border: 1px solid #ddd;">Usage</th>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #ddd;">600</td>
<td style="padding: 12px; border: 1px solid #ddd;">1022</td>
<td style="padding: 12px; border: 1px solid #ddd;">PV, YP</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;">300</td>
<td style="padding: 12px; border: 1px solid #ddd;">511</td>
<td style="padding: 12px; border: 1px solid #ddd;">PV, YP</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #ddd;">200</td>
<td style="padding: 12px; border: 1px solid #ddd;">341</td>
<td style="padding: 12px; border: 1px solid #ddd;">H-B Model</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;">100</td>
<td style="padding: 12px; border: 1px solid #ddd;">170</td>
<td style="padding: 12px; border: 1px solid #ddd;">H-B Model</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #ddd;">6</td>
<td style="padding: 12px; border: 1px solid #ddd;">10.2</td>
<td style="padding: 12px; border: 1px solid #ddd;">LSYP</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;">3</td>
<td style="padding: 12px; border: 1px solid #ddd;">5.1</td>
<td style="padding: 12px; border: 1px solid #ddd;">LSYP, Gel</td>
</tr>
</table>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">Standard API Calculations:</h4>
<ul class="list-disc pl-6 mb-4 space-y-2">
<li><strong>PV (cP) = θ600 - θ300</strong></li>
<li><strong>YP (lb/100ft²) = θ300 - PV</strong></li>
<li><strong>AV (cP) = θ600 / 2</strong></li>
</ul>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 Gel Strength</h3>
<p class="mb-4">Measurement of fluid structure at rest:</p>

<div style="background: #fef3c7; padding: 16px; border-radius: 8px; border-left: 4px solid #f59e0b; margin: 16px 0;">
<h4 style="color: #92400e;" class="font-bold mb-2">Gel Behavior Types:</h4>
<ul class="list-disc pl-6 space-y-2">
<li><strong>Flat Gel:</strong> 10 sec ≈ 10 min - desired for suspension</li>
<li><strong>Progressive Gel:</strong> 10 min >> 10 sec - problems resuming circulation</li>
<li><strong>Fragile Gel:</strong> Breaks easily - may not suspend cuttings</li>
</ul>
</div>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 Low Shear Yield Point (LSYP)</h3>
<p class="mb-4">Important indicator for cleaning and suspension performance:</p>
<ul class="list-disc pl-6 mb-4 space-y-2">
<li><strong>Calculation:</strong> LSYP = (2 × θ3) - θ6</li>
<li>Should be positive for good suspension</li>
<li>Negative value indicates barite sag problems</li>
<li>Target: 5-15 lb/100ft² for optimal suspension</li>
</ul>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 Temperature and Pressure Effects (HPHT Rheology)</h3>
<p class="mb-4">Rheological properties change significantly with conditions:</p>

<div style="background: #f8fafc; padding: 16px; border-radius: 8px; margin: 16px 0;">
<h4 style="color: #1e3a5f;" class="font-bold mb-2">Temperature Effect:</h4>
<ul class="list-disc pl-6 space-y-1">
<li>PV decreases with increasing temperature</li>
<li>YP may increase or decrease depending on system</li>
<li>Polymer degradation at high temperatures</li>
</ul>

<h4 style="color: #1e3a5f;" class="font-bold mb-2 mt-3">Pressure Effect:</h4>
<ul class="list-disc pl-6 space-y-1">
<li>Slight viscosity increase with pressure</li>
<li>Partially compensates temperature effect</li>
<li>Important for accurate ECD calculations</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); padding: 20px; border-radius: 12px; margin: 20px 0; color: white;">
<h3 style="color: #fbbf24;" class="font-bold mb-2">💡 Practical Application</h3>
<p>Use Herschel-Bulkley model for more accurate ECD and hydraulics calculations, especially in deep wells where the difference between models becomes significant.</p>
</div>
</section>`,
          keyTerms: [
            { term: 'Herschel-Bulkley Model', definition: 'Rheological model combining true yield stress with power law behavior, most accurate for drilling fluids' },
            { term: 'LSYP', definition: 'Low Shear Yield Point - indicator of fluid ability to suspend solids at low shear rates' },
            { term: 'Gel Strength', definition: 'Measurement of internal structure strength of fluid at rest' },
            { term: 'Flow Behavior Index n', definition: 'Parameter in power law model determining if fluid is shear-thinning or thickening' },
          ],
          practiceQuestion: {
            question: 'If θ600 = 65 and θ300 = 40, what is the Plastic Viscosity PV?',
            options: ['25 cP', '40 cP', '65 cP', '105 cP'],
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
          title: 'سوائل الحفر المستوى 2 - اليوم الرابع: التحكم في الترشيح وفقدان السوائل',
          explanation: `<section>
<h2 style="color: #1e3a5f;" class="text-xl font-bold mb-4">🔷 التحكم المتقدم في الترشيح وفقدان السوائل</h2>
<p class="mb-4">التحكم في فقدان السوائل من أهم وظائف سائل الحفر. الفقدان غير المتحكم فيه يؤدي لمشاكل خطيرة تشمل تلف التشكيلات، فقدان الدوران، والتصاق الأنابيب.</p>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 أنواع فقدان السوائل (Types of Fluid Loss)</h3>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">1. الترشيح الساكن (Static Filtration)</h4>
<ul class="list-disc pr-6 mb-4 space-y-2">
<li>يحدث عند توقف الدوران</li>
<li>يُقاس باختبار API القياسي (30 دقيقة، 100 psi)</li>
<li>يُشكل كيك ترشيح سميك نسبياً</li>
<li>القيمة المقبولة: < 10 ml/30min للآبار العادية</li>
</ul>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">2. الترشيح الديناميكي (Dynamic Filtration)</h4>
<ul class="list-disc pr-6 mb-4 space-y-2">
<li>يحدث أثناء الدوران والضخ</li>
<li>القص يمنع تراكم الكيك السميك</li>
<li>عادة أقل من الساكن بـ 30-50%</li>
<li>الأهم لأداء الحفر الفعلي</li>
</ul>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">3. الترشيح HPHT</h4>
<ul class="list-disc pr-6 mb-4 space-y-2">
<li>يُقاس عند 500 psi و 300°F</li>
<li>يمثل الظروف الحقيقية بشكل أفضل</li>
<li>القيمة المقبولة: < 2× قيمة API</li>
</ul>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 آلية تكوين كيك الترشيح (Filter Cake Formation)</h3>
<div style="background: #f8fafc; padding: 16px; border-radius: 8px; margin: 16px 0;">
<p class="mb-3">كيك الترشيح يتكون من ثلاث مناطق:</p>
<ol class="list-decimal pr-6 space-y-2">
<li><strong>المنطقة الخارجية:</strong> جزيئات كبيرة، مسامية عالية</li>
<li><strong>المنطقة الوسطى:</strong> جزيئات متوسطة، مسامية متوسطة</li>
<li><strong>المنطقة الداخلية:</strong> جزيئات دقيقة، مسامية منخفضة - تتحكم في الترشيح</li>
</ol>
</div>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">خصائص الكيك المثالي:</h4>
<table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 12px; border: 1px solid #ddd;">الخاصية</th>
<th style="padding: 12px; border: 1px solid #ddd;">القيمة المثالية</th>
<th style="padding: 12px; border: 1px solid #ddd;">السبب</th>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #ddd;">السماكة</td>
<td style="padding: 12px; border: 1px solid #ddd;">< 2/32"</td>
<td style="padding: 12px; border: 1px solid #ddd;">تقليل الالتصاق</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;">النفاذية</td>
<td style="padding: 12px; border: 1px solid #ddd;">< 0.01 md</td>
<td style="padding: 12px; border: 1px solid #ddd;">منع التسرب</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #ddd;">معامل الاحتكاك</td>
<td style="padding: 12px; border: 1px solid #ddd;">< 0.1</td>
<td style="padding: 12px; border: 1px solid #ddd;">تقليل العزم</td>
</tr>
</table>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 مواد التحكم في الترشيح (Filtration Control Materials)</h3>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">البوليمرات:</h4>
<ul class="list-disc pr-6 mb-4 space-y-2">
<li><strong>CMC (Carboxymethyl Cellulose):</strong>
  <ul class="list-disc pr-6 mt-1">
    <li>CMC-LV: منخفض اللزوجة، الأفضل للترشيح</li>
    <li>CMC-HV: عالي اللزوجة، للترشيح واللزوجة معاً</li>
  </ul>
</li>
<li><strong>PAC (Polyanionic Cellulose):</strong> أكثر مقاومة للملوحة من CMC</li>
<li><strong>النشا المعدل:</strong> اقتصادي، فعال حتى 120°C</li>
<li><strong>بوليمرات AMPS:</strong> للحرارة العالية جداً (> 180°C)</li>
</ul>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">المواد الجسيمية:</h4>
<ul class="list-disc pr-6 mb-4 space-y-2">
<li><strong>البنتونايت:</strong> يشكل كيك منخفض النفاذية</li>
<li><strong>كربونات الكالسيوم:</strong> قابلة للإزالة بالحمض، مثالية للمكمن</li>
<li><strong>الجرافيت:</strong> يقلل الاحتكاك أيضاً</li>
<li><strong>الأسفلت:</strong> يسد المسام الدقيقة</li>
</ul>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 فقدان الدوران (Lost Circulation)</h3>
<p class="mb-4">عندما يتسرب سائل الحفر للتشكيل بكميات كبيرة:</p>

<div style="background: #fef2f2; padding: 16px; border-radius: 8px; border-right: 4px solid #ef4444; margin: 16px 0;">
<h4 style="color: #991b1b;" class="font-bold mb-2">درجات الخطورة:</h4>
<ul class="list-disc pr-6 space-y-2">
<li><strong>طفيف:</strong> < 10 bbl/hr - يُعالج بمواد LCM عادية</li>
<li><strong>متوسط:</strong> 10-50 bbl/hr - يتطلب LCM مكثف</li>
<li><strong>شديد:</strong> 50-200 bbl/hr - قد يتطلب أسمنت أو مواد خاصة</li>
<li><strong>كامل:</strong> لا عودة للسائل - يتطلب تدخل كبير</li>
</ul>
</div>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">مواد منع فقدان الدوران (LCM):</h4>
<table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 12px; border: 1px solid #ddd;">النوع</th>
<th style="padding: 12px; border: 1px solid #ddd;">المواد</th>
<th style="padding: 12px; border: 1px solid #ddd;">حجم الفتحات</th>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #ddd;">متقشرة (Flaky)</td>
<td style="padding: 12px; border: 1px solid #ddd;">الميكا، السلوفان</td>
<td style="padding: 12px; border: 1px solid #ddd;">صغيرة-متوسطة</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;">حبيبية (Granular)</td>
<td style="padding: 12px; border: 1px solid #ddd;">قشور الجوز، Cite-Seal</td>
<td style="padding: 12px; border: 1px solid #ddd;">متوسطة-كبيرة</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #ddd;">ليفية (Fibrous)</td>
<td style="padding: 12px; border: 1px solid #ddd;">الألياف، السيزال</td>
<td style="padding: 12px; border: 1px solid #ddd;">كبيرة جداً</td>
</tr>
</table>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); padding: 20px; border-radius: 12px; margin: 20px 0; color: white;">
<h3 style="color: #fbbf24;" class="font-bold mb-2">💡 مبدأ التدريج الجسيمي</h3>
<p>للسد الفعال، يجب أن يكون متوسط حجم الجسيمات (D50) ≈ 1/3 حجم الفتحة المراد سدها. استخدم مزيج من الأحجام للحصول على أفضل أداء.</p>
</div>
</section>`,
          keyTerms: [
            { term: 'الترشيح الساكن', definition: 'فقدان السوائل عبر جدار البئر عند توقف الدوران، يُقاس باختبار API' },
            { term: 'كيك الترشيح (Filter Cake)', definition: 'طبقة من المواد الصلبة تتكون على جدار البئر نتيجة ترشيح السائل' },
            { term: 'LCM', definition: 'مواد منع فقدان الدوران - مواد تُضاف لسد الشقوق والفتحات في التشكيل' },
            { term: 'HPHT Filtration', definition: 'اختبار الترشيح عند ضغط وحرارة عاليين لمحاكاة الظروف الحقيقية' },
          ],
          practiceQuestion: {
            question: 'ما هي السماكة المثالية لكيك الترشيح؟',
            options: ['< 1/32"', '< 2/32"', '< 4/32"', '< 8/32"'],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Drilling Fluids Level 2 - Day 4: Filtration and Fluid Loss Control',
          explanation: `<section>
<h2 style="color: #1e3a5f;" class="text-xl font-bold mb-4">🔷 Advanced Filtration and Fluid Loss Control</h2>
<p class="mb-4">Controlling fluid loss is one of the most important drilling fluid functions. Uncontrolled loss leads to serious problems including formation damage, lost circulation, and differential sticking.</p>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 Types of Fluid Loss</h3>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">1. Static Filtration</h4>
<ul class="list-disc pl-6 mb-4 space-y-2">
<li>Occurs when circulation stops</li>
<li>Measured by standard API test (30 minutes, 100 psi)</li>
<li>Forms relatively thick filter cake</li>
<li>Acceptable value: < 10 ml/30min for normal wells</li>
</ul>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">2. Dynamic Filtration</h4>
<ul class="list-disc pl-6 mb-4 space-y-2">
<li>Occurs during rotation and pumping</li>
<li>Shear prevents thick cake buildup</li>
<li>Usually 30-50% less than static</li>
<li>Most important for actual drilling performance</li>
</ul>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">3. HPHT Filtration</h4>
<ul class="list-disc pl-6 mb-4 space-y-2">
<li>Measured at 500 psi and 300°F</li>
<li>Better represents actual conditions</li>
<li>Acceptable value: < 2× API value</li>
</ul>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 Filter Cake Formation Mechanism</h3>
<div style="background: #f8fafc; padding: 16px; border-radius: 8px; margin: 16px 0;">
<p class="mb-3">Filter cake consists of three zones:</p>
<ol class="list-decimal pl-6 space-y-2">
<li><strong>Outer Zone:</strong> Large particles, high porosity</li>
<li><strong>Middle Zone:</strong> Medium particles, medium porosity</li>
<li><strong>Inner Zone:</strong> Fine particles, low porosity - controls filtration</li>
</ol>
</div>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">Ideal Cake Properties:</h4>
<table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 12px; border: 1px solid #ddd;">Property</th>
<th style="padding: 12px; border: 1px solid #ddd;">Ideal Value</th>
<th style="padding: 12px; border: 1px solid #ddd;">Reason</th>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #ddd;">Thickness</td>
<td style="padding: 12px; border: 1px solid #ddd;">< 2/32"</td>
<td style="padding: 12px; border: 1px solid #ddd;">Reduce sticking</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;">Permeability</td>
<td style="padding: 12px; border: 1px solid #ddd;">< 0.01 md</td>
<td style="padding: 12px; border: 1px solid #ddd;">Prevent invasion</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #ddd;">Friction Coefficient</td>
<td style="padding: 12px; border: 1px solid #ddd;">< 0.1</td>
<td style="padding: 12px; border: 1px solid #ddd;">Reduce torque</td>
</tr>
</table>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 Filtration Control Materials</h3>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">Polymers:</h4>
<ul class="list-disc pl-6 mb-4 space-y-2">
<li><strong>CMC (Carboxymethyl Cellulose):</strong>
  <ul class="list-disc pl-6 mt-1">
    <li>CMC-LV: Low viscosity, best for filtration</li>
    <li>CMC-HV: High viscosity, for filtration and viscosity</li>
  </ul>
</li>
<li><strong>PAC (Polyanionic Cellulose):</strong> More salt-tolerant than CMC</li>
<li><strong>Modified Starch:</strong> Economical, effective up to 120°C</li>
<li><strong>AMPS Polymers:</strong> For very high temperature (> 180°C)</li>
</ul>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">Particulate Materials:</h4>
<ul class="list-disc pl-6 mb-4 space-y-2">
<li><strong>Bentonite:</strong> Forms low-permeability cake</li>
<li><strong>Calcium Carbonate:</strong> Acid-soluble, ideal for reservoir</li>
<li><strong>Graphite:</strong> Also reduces friction</li>
<li><strong>Asphalt:</strong> Seals fine pores</li>
</ul>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 Lost Circulation</h3>
<p class="mb-4">When drilling fluid escapes into formation in large quantities:</p>

<div style="background: #fef2f2; padding: 16px; border-radius: 8px; border-left: 4px solid #ef4444; margin: 16px 0;">
<h4 style="color: #991b1b;" class="font-bold mb-2">Severity Levels:</h4>
<ul class="list-disc pl-6 space-y-2">
<li><strong>Seepage:</strong> < 10 bbl/hr - treat with normal LCM</li>
<li><strong>Moderate:</strong> 10-50 bbl/hr - requires intensive LCM</li>
<li><strong>Severe:</strong> 50-200 bbl/hr - may need cement or special materials</li>
<li><strong>Total:</strong> No fluid returns - requires major intervention</li>
</ul>
</div>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">Lost Circulation Materials (LCM):</h4>
<table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 12px; border: 1px solid #ddd;">Type</th>
<th style="padding: 12px; border: 1px solid #ddd;">Materials</th>
<th style="padding: 12px; border: 1px solid #ddd;">Opening Size</th>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #ddd;">Flaky</td>
<td style="padding: 12px; border: 1px solid #ddd;">Mica, Cellophane</td>
<td style="padding: 12px; border: 1px solid #ddd;">Small-Medium</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;">Granular</td>
<td style="padding: 12px; border: 1px solid #ddd;">Nut shells, Cite-Seal</td>
<td style="padding: 12px; border: 1px solid #ddd;">Medium-Large</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #ddd;">Fibrous</td>
<td style="padding: 12px; border: 1px solid #ddd;">Fibers, Sisal</td>
<td style="padding: 12px; border: 1px solid #ddd;">Very Large</td>
</tr>
</table>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); padding: 20px; border-radius: 12px; margin: 20px 0; color: white;">
<h3 style="color: #fbbf24;" class="font-bold mb-2">💡 Particle Size Distribution Principle</h3>
<p>For effective bridging, median particle size (D50) should be ≈ 1/3 of the opening to be sealed. Use a mixture of sizes for best performance.</p>
</div>
</section>`,
          keyTerms: [
            { term: 'Static Filtration', definition: 'Fluid loss through wellbore wall when circulation stops, measured by API test' },
            { term: 'Filter Cake', definition: 'Layer of solids formed on wellbore wall from fluid filtration' },
            { term: 'LCM', definition: 'Lost Circulation Materials - materials added to seal fractures and openings in formation' },
            { term: 'HPHT Filtration', definition: 'Filtration test at high pressure and temperature to simulate actual conditions' },
          ],
          practiceQuestion: {
            question: 'What is the ideal thickness for filter cake?',
            options: ['< 1/32"', '< 2/32"', '< 4/32"', '< 8/32"'],
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
          title: 'سوائل الحفر المستوى 2 - اليوم الخامس: معالجة التلوث والمشاكل الميدانية',
          explanation: `<section>
<h2 style="color: #1e3a5f;" class="text-xl font-bold mb-4">🔷 معالجة التلوث والمشاكل الميدانية</h2>
<p class="mb-4">في الميدان، يتعرض سائل الحفر لملوثات متنوعة تؤثر على أدائه. القدرة على تشخيص ومعالجة هذه المشاكل بسرعة هي مهارة أساسية لمهندس سوائل الحفر.</p>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 تلوث الكالسيوم (Calcium Contamination)</h3>
<p class="mb-4">من أكثر أنواع التلوث شيوعاً:</p>

<div style="background: #f8fafc; padding: 16px; border-radius: 8px; margin: 16px 0;">
<h4 style="color: #1e3a5f;" class="font-bold mb-2">مصادر الكالسيوم:</h4>
<ul class="list-disc pr-6 space-y-1">
<li>حفر طبقات الجبس (CaSO₄)</li>
<li>حفر طبقات الأنهيدريت</li>
<li>تلوث من الأسمنت</li>
<li>الماء المستخدم (Hard Water)</li>
</ul>
</div>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">أعراض تلوث الكالسيوم:</h4>
<ul class="list-disc pr-6 mb-4 space-y-2">
<li>زيادة في YP و Gel Strength</li>
<li>زيادة في فقدان السوائل</li>
<li>سماكة زائدة في كيك الترشيح</li>
<li>انخفاض pH</li>
<li>ارتفاع الصلابة الكلية (Total Hardness)</li>
</ul>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">العلاج:</h4>
<table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 12px; border: 1px solid #ddd;">المعالجة</th>
<th style="padding: 12px; border: 1px solid #ddd;">الكمية</th>
<th style="padding: 12px; border: 1px solid #ddd;">الآلية</th>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #ddd;">كربونات الصوديوم (Soda Ash)</td>
<td style="padding: 12px; border: 1px solid #ddd;">0.93 lb لكل 1 lb Ca++</td>
<td style="padding: 12px; border: 1px solid #ddd;">ترسيب CaCO₃</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;">بيكربونات الصوديوم</td>
<td style="padding: 12px; border: 1px solid #ddd;">0.74 lb لكل 1 lb Ca++</td>
<td style="padding: 12px; border: 1px solid #ddd;">ترسيب + خفض pH</td>
</tr>
</table>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 تلوث الملح (Salt Contamination)</h3>
<p class="mb-4">يحدث عند حفر طبقات الملح الصخري:</p>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">التأثيرات:</h4>
<ul class="list-disc pr-6 mb-4 space-y-2">
<li>تلبد البنتونايت (فقدان اللزوجة)</li>
<li>زيادة فقدان السوائل</li>
<li>انهيار خصائص البوليمرات الحساسة</li>
<li>زيادة معدل التآكل</li>
</ul>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">استراتيجيات المعالجة:</h4>
<ol class="list-decimal pr-6 mb-4 space-y-2">
<li><strong>تشبيع مسبق:</strong> إضافة NaCl للوصول لتشبع قبل حفر الملح</li>
<li><strong>استبدال المواد:</strong> استخدام أتابولجايت بدل البنتونايت</li>
<li><strong>بوليمرات مقاومة:</strong> PAC, Xanthan يتحملان ملوحة عالية</li>
<li><strong>التحويل لـ OBM:</strong> في الحالات الشديدة</li>
</ol>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 التلوث بثاني أكسيد الكربون (CO₂ Contamination)</h3>
<div style="background: #fef3c7; padding: 16px; border-radius: 8px; border-right: 4px solid #f59e0b; margin: 16px 0;">
<h4 style="color: #92400e;" class="font-bold mb-2">⚠️ تحذير</h4>
<p>CO₂ يتفاعل مع الماء ليكوّن حمض الكربونيك الذي يخفض pH ويترسب كربونات الكالسيوم، مما قد يؤدي لتلبد شديد.</p>
</div>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">العلامات:</h4>
<ul class="list-disc pr-6 mb-4 space-y-2">
<li>انخفاض pH مستمر</li>
<li>ارتفاع Mf و Pf</li>
<li>زيادة اللزوجة والجيل</li>
<li>علاقة Pm/Pf غير طبيعية</li>
</ul>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">العلاج:</h4>
<ul class="list-disc pr-6 mb-4 space-y-2">
<li>إضافة الجير (Ca(OH)₂) لرفع pH وترسيب الكربونات</li>
<li>استخدام الكاوستك (NaOH) بحذر</li>
<li>تهوية السائل لطرد CO₂</li>
</ul>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 تراكم المواد الصلبة (Solids Buildup)</h3>
<p class="mb-4">المواد الصلبة الحفرية تتراكم وتؤثر على الأداء:</p>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">التأثيرات السلبية:</h4>
<ul class="list-disc pr-6 mb-4 space-y-2">
<li>زيادة PV (تقليل ROP)</li>
<li>زيادة ECD</li>
<li>تآكل المعدات</li>
<li>صعوبة التحكم في الكثافة</li>
</ul>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">معدات التحكم في المواد الصلبة:</h4>
<table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 12px; border: 1px solid #ddd;">المعدة</th>
<th style="padding: 12px; border: 1px solid #ddd;">نقطة الفصل</th>
<th style="padding: 12px; border: 1px solid #ddd;">الوظيفة</th>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #ddd;">الشيكر (Shale Shaker)</td>
<td style="padding: 12px; border: 1px solid #ddd;">> 74 ميكرون</td>
<td style="padding: 12px; border: 1px solid #ddd;">الفصل الأولي</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;">الهيدروسيكلون (Hydrocyclone)</td>
<td style="padding: 12px; border: 1px solid #ddd;">15-74 ميكرون</td>
<td style="padding: 12px; border: 1px solid #ddd;">الرمل والطمي</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #ddd;">الطرد المركزي (Centrifuge)</td>
<td style="padding: 12px; border: 1px solid #ddd;">2-10 ميكرون</td>
<td style="padding: 12px; border: 1px solid #ddd;">الدقائق + استعادة الباريت</td>
</tr>
</table>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 مشاكل التشحيم والالتصاق</h3>
<p class="mb-4">الالتصاق التفاضلي (Differential Sticking) من أخطر المشاكل:</p>

<div style="background: #f0fdf4; padding: 16px; border-radius: 8px; border-right: 4px solid #22c55e; margin: 16px 0;">
<h4 style="color: #166534;" class="font-bold mb-2">✅ الوقاية:</h4>
<ul class="list-disc pr-6 space-y-1">
<li>الحفاظ على كيك ترشيح رقيق وزلق</li>
<li>إضافة مواد تشحيم (زيوت، جرافيت)</li>
<li>تقليل زمن التوقف في المناطق النفاذة</li>
<li>الحفاظ على Overbalance منخفض</li>
</ul>
</div>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">مواد التشحيم الشائعة:</h4>
<ul class="list-disc pr-6 mb-4 space-y-2">
<li><strong>الزيوت المعدنية:</strong> 2-5% - فعالة لكن بيئياً مقلقة</li>
<li><strong>الإسترات الاصطناعية:</strong> صديقة للبيئة</li>
<li><strong>الجرافيت:</strong> 1-3 lb/bbl - ممتاز للحرارة العالية</li>
<li><strong>حبيبات البولي إيثيلين:</strong> تقلل الاحتكاك الميكانيكي</li>
</ul>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); padding: 20px; border-radius: 12px; margin: 20px 0; color: white;">
<h3 style="color: #fbbf24;" class="font-bold mb-2">💡 نصيحة ميدانية</h3>
<p>دائماً احتفظ بسجل تفصيلي لخصائص السائل ومعالجاته. التغيرات التدريجية قد تشير لتلوث قادم قبل أن تصبح المشكلة خطيرة.</p>
</div>
</section>`,
          keyTerms: [
            { term: 'تلوث الكالسيوم', definition: 'دخول أيونات الكالسيوم للسائل من الجبس أو الأسمنت، يسبب تلبد وزيادة فقدان السوائل' },
            { term: 'الالتصاق التفاضلي', definition: 'التصاق سلسلة الحفر بجدار البئر بسبب فرق الضغط عبر كيك الترشيح' },
            { term: 'Soda Ash', definition: 'كربونات الصوديوم - تُستخدم لترسيب الكالسيوم الزائد من السائل' },
            { term: 'الطرد المركزي (Centrifuge)', definition: 'جهاز لفصل الجسيمات الدقيقة جداً واستعادة الباريت من السائل' },
          ],
          practiceQuestion: {
            question: 'ما هي كمية كربونات الصوديوم (Soda Ash) اللازمة لمعالجة 1 رطل من الكالسيوم؟',
            options: ['0.50 lb', '0.74 lb', '0.93 lb', '1.25 lb'],
            correctAnswer: 2,
          },
        },
        en: {
          title: 'Drilling Fluids Level 2 - Day 5: Contamination Treatment and Field Problems',
          explanation: `<section>
<h2 style="color: #1e3a5f;" class="text-xl font-bold mb-4">🔷 Contamination Treatment and Field Problems</h2>
<p class="mb-4">In the field, drilling fluid is exposed to various contaminants that affect its performance. The ability to quickly diagnose and treat these problems is an essential skill for a drilling fluids engineer.</p>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 Calcium Contamination</h3>
<p class="mb-4">One of the most common types of contamination:</p>

<div style="background: #f8fafc; padding: 16px; border-radius: 8px; margin: 16px 0;">
<h4 style="color: #1e3a5f;" class="font-bold mb-2">Calcium Sources:</h4>
<ul class="list-disc pl-6 space-y-1">
<li>Drilling gypsum layers (CaSO₄)</li>
<li>Drilling anhydrite layers</li>
<li>Cement contamination</li>
<li>Hard water used</li>
</ul>
</div>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">Calcium Contamination Symptoms:</h4>
<ul class="list-disc pl-6 mb-4 space-y-2">
<li>Increase in YP and Gel Strength</li>
<li>Increase in fluid loss</li>
<li>Excessive filter cake thickness</li>
<li>pH decrease</li>
<li>Elevated Total Hardness</li>
</ul>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">Treatment:</h4>
<table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 12px; border: 1px solid #ddd;">Treatment</th>
<th style="padding: 12px; border: 1px solid #ddd;">Amount</th>
<th style="padding: 12px; border: 1px solid #ddd;">Mechanism</th>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #ddd;">Soda Ash (Na₂CO₃)</td>
<td style="padding: 12px; border: 1px solid #ddd;">0.93 lb per 1 lb Ca++</td>
<td style="padding: 12px; border: 1px solid #ddd;">Precipitates CaCO₃</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;">Sodium Bicarbonate</td>
<td style="padding: 12px; border: 1px solid #ddd;">0.74 lb per 1 lb Ca++</td>
<td style="padding: 12px; border: 1px solid #ddd;">Precipitates + lowers pH</td>
</tr>
</table>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 Salt Contamination</h3>
<p class="mb-4">Occurs when drilling rock salt layers:</p>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">Effects:</h4>
<ul class="list-disc pl-6 mb-4 space-y-2">
<li>Bentonite flocculation (viscosity loss)</li>
<li>Increased fluid loss</li>
<li>Collapse of sensitive polymer properties</li>
<li>Increased corrosion rate</li>
</ul>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">Treatment Strategies:</h4>
<ol class="list-decimal pl-6 mb-4 space-y-2">
<li><strong>Pre-saturation:</strong> Add NaCl to reach saturation before drilling salt</li>
<li><strong>Material replacement:</strong> Use attapulgite instead of bentonite</li>
<li><strong>Resistant polymers:</strong> PAC, Xanthan tolerate high salinity</li>
<li><strong>Convert to OBM:</strong> In severe cases</li>
</ol>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 CO₂ Contamination</h3>
<div style="background: #fef3c7; padding: 16px; border-radius: 8px; border-left: 4px solid #f59e0b; margin: 16px 0;">
<h4 style="color: #92400e;" class="font-bold mb-2">⚠️ Warning</h4>
<p>CO₂ reacts with water to form carbonic acid which lowers pH and precipitates calcium carbonate, potentially causing severe flocculation.</p>
</div>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">Signs:</h4>
<ul class="list-disc pl-6 mb-4 space-y-2">
<li>Continuous pH decrease</li>
<li>Elevated Mf and Pf</li>
<li>Increased viscosity and gel</li>
<li>Abnormal Pm/Pf relationship</li>
</ul>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">Treatment:</h4>
<ul class="list-disc pl-6 mb-4 space-y-2">
<li>Add lime (Ca(OH)₂) to raise pH and precipitate carbonate</li>
<li>Use caustic (NaOH) carefully</li>
<li>Aerate fluid to expel CO₂</li>
</ul>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 Solids Buildup</h3>
<p class="mb-4">Drilled solids accumulate and affect performance:</p>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">Negative Effects:</h4>
<ul class="list-disc pl-6 mb-4 space-y-2">
<li>Increased PV (reduced ROP)</li>
<li>Increased ECD</li>
<li>Equipment wear</li>
<li>Difficulty controlling density</li>
</ul>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">Solids Control Equipment:</h4>
<table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 12px; border: 1px solid #ddd;">Equipment</th>
<th style="padding: 12px; border: 1px solid #ddd;">Cut Point</th>
<th style="padding: 12px; border: 1px solid #ddd;">Function</th>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #ddd;">Shale Shaker</td>
<td style="padding: 12px; border: 1px solid #ddd;">> 74 microns</td>
<td style="padding: 12px; border: 1px solid #ddd;">Primary separation</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;">Hydrocyclone</td>
<td style="padding: 12px; border: 1px solid #ddd;">15-74 microns</td>
<td style="padding: 12px; border: 1px solid #ddd;">Sand and silt</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #ddd;">Centrifuge</td>
<td style="padding: 12px; border: 1px solid #ddd;">2-10 microns</td>
<td style="padding: 12px; border: 1px solid #ddd;">Fines + barite recovery</td>
</tr>
</table>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 Lubrication and Sticking Problems</h3>
<p class="mb-4">Differential sticking is one of the most serious problems:</p>

<div style="background: #f0fdf4; padding: 16px; border-radius: 8px; border-left: 4px solid #22c55e; margin: 16px 0;">
<h4 style="color: #166534;" class="font-bold mb-2">✅ Prevention:</h4>
<ul class="list-disc pl-6 space-y-1">
<li>Maintain thin, slick filter cake</li>
<li>Add lubricants (oils, graphite)</li>
<li>Reduce stationary time in permeable zones</li>
<li>Maintain low overbalance</li>
</ul>
</div>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">Common Lubricants:</h4>
<ul class="list-disc pl-6 mb-4 space-y-2">
<li><strong>Mineral oils:</strong> 2-5% - effective but environmentally concerning</li>
<li><strong>Synthetic esters:</strong> Environmentally friendly</li>
<li><strong>Graphite:</strong> 1-3 lb/bbl - excellent for high temperature</li>
<li><strong>Polyethylene beads:</strong> Reduce mechanical friction</li>
</ul>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); padding: 20px; border-radius: 12px; margin: 20px 0; color: white;">
<h3 style="color: #fbbf24;" class="font-bold mb-2">💡 Field Tip</h3>
<p>Always keep detailed records of fluid properties and treatments. Gradual changes may indicate incoming contamination before the problem becomes serious.</p>
</div>
</section>`,
          keyTerms: [
            { term: 'Calcium Contamination', definition: 'Entry of calcium ions into fluid from gypsum or cement, causes flocculation and increased fluid loss' },
            { term: 'Differential Sticking', definition: 'Drill string sticking to wellbore wall due to pressure differential across filter cake' },
            { term: 'Soda Ash', definition: 'Sodium carbonate - used to precipitate excess calcium from fluid' },
            { term: 'Centrifuge', definition: 'Device for separating very fine particles and recovering barite from fluid' },
          ],
          practiceQuestion: {
            question: 'How much Soda Ash is needed to treat 1 lb of calcium?',
            options: ['0.50 lb', '0.74 lb', '0.93 lb', '1.25 lb'],
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
          title: 'اختبار سوائل الحفر المستوى 2',
          explanation: 'اختبر معلوماتك في سوائل الحفر المتقدمة',
          keyTerms: [],
        },
        en: {
          title: 'Drilling Fluids Level 2 Quiz',
          explanation: 'Test your knowledge on advanced drilling fluids',
          keyTerms: [],
        },
      },
      quiz: {
        ar: [
          { question: 'أي بوليمر هو الأفضل لزيادة اللزوجة مع خصائص تعليق ممتازة؟', options: ['النشا', 'صمغ الزانثان', 'صمغ الغوار', 'CMC'], correctAnswer: 1 },
          { question: 'ما هو نطاق pH الأمثل لطين البنتونايت؟', options: ['7.0 - 8.0', '8.0 - 9.0', '9.0 - 10.5', '11.0 - 12.0'], correctAnswer: 2 },
          { question: 'ما هي نسبة O/W الشائعة في أنظمة المستحلب المعكوس؟', options: ['50/50', '70/30 - 90/10', '95/5', '30/70'], correctAnswer: 1 },
          { question: 'إذا كانت θ600 = 70 و θ300 = 45، ما قيمة PV؟', options: ['25 cP', '35 cP', '45 cP', '70 cP'], correctAnswer: 0 },
          { question: 'ما هي السماكة المثالية لكيك الترشيح؟', options: ['< 1/32"', '< 2/32"', '< 4/32"', '< 6/32"'], correctAnswer: 1 },
          { question: 'أي مادة ثقل يمكنها الوصول لكثافة 35 ppg؟', options: ['الباريت', 'الهيماتيت', 'الإيلمينايت', 'الجالينا'], correctAnswer: 3 },
          { question: 'كم تحتاج من Soda Ash لمعالجة 1 رطل كالسيوم؟', options: ['0.50 lb', '0.74 lb', '0.93 lb', '1.20 lb'], correctAnswer: 2 },
          { question: 'ما هو نوع الجل المرغوب للتعليق الجيد؟', options: ['جل تقدمي', 'جل مسطح', 'جل هش', 'لا جل'], correctAnswer: 1 },
          { question: 'أي معدة تفصل الجسيمات الأدق (2-10 ميكرون)؟', options: ['الشيكر', 'الهيدروسيكلون', 'الديساندر', 'الطرد المركزي'], correctAnswer: 3 },
          { question: 'ما هو نموذج التدفق الأكثر دقة لسوائل الحفر؟', options: ['نيوتوني', 'بنجهام', 'قانون القوة', 'هيرشل-بولكلي'], correctAnswer: 3 },
        ],
        en: [
          { question: 'Which polymer is best for increasing viscosity with excellent suspension properties?', options: ['Starch', 'Xanthan Gum', 'Guar Gum', 'CMC'], correctAnswer: 1 },
          { question: 'What is the optimal pH range for bentonite clay?', options: ['7.0 - 8.0', '8.0 - 9.0', '9.0 - 10.5', '11.0 - 12.0'], correctAnswer: 2 },
          { question: 'What is the common O/W ratio in invert emulsion systems?', options: ['50/50', '70/30 - 90/10', '95/5', '30/70'], correctAnswer: 1 },
          { question: 'If θ600 = 70 and θ300 = 45, what is PV?', options: ['25 cP', '35 cP', '45 cP', '70 cP'], correctAnswer: 0 },
          { question: 'What is the ideal thickness for filter cake?', options: ['< 1/32"', '< 2/32"', '< 4/32"', '< 6/32"'], correctAnswer: 1 },
          { question: 'Which weighting material can reach 35 ppg density?', options: ['Barite', 'Hematite', 'Ilmenite', 'Galena'], correctAnswer: 3 },
          { question: 'How much Soda Ash is needed to treat 1 lb of calcium?', options: ['0.50 lb', '0.74 lb', '0.93 lb', '1.20 lb'], correctAnswer: 2 },
          { question: 'What type of gel is desired for good suspension?', options: ['Progressive gel', 'Flat gel', 'Fragile gel', 'No gel'], correctAnswer: 1 },
          { question: 'Which equipment separates the finest particles (2-10 microns)?', options: ['Shaker', 'Hydrocyclone', 'Desander', 'Centrifuge'], correctAnswer: 3 },
          { question: 'What is the most accurate flow model for drilling fluids?', options: ['Newtonian', 'Bingham', 'Power Law', 'Herschel-Bulkley'], correctAnswer: 3 },
        ],
      },
    },
    {
      day: 7,
      type: 'project',
      content: {
        ar: {
          title: 'مشروع سوائل الحفر المستوى 2',
          explanation: 'طبق ما تعلمته عن سوائل الحفر المتقدمة في هذا المشروع التطبيقي',
          keyTerms: [],
        },
        en: {
          title: 'Drilling Fluids Level 2 Project',
          explanation: 'Apply what you learned about advanced drilling fluids in this practical project',
          keyTerms: [],
        },
      },
      project: {
        ar: {
          title: 'تصميم نظام سائل حفر لبئر HPHT',
          description: 'صمم نظام سائل حفر متكامل لبئر بدرجة حرارة قاع 350°F وضغط متوقع يتطلب كثافة 16.5 ppg، مع وجود طبقات طفلية حساسة.',
          instructions: [
            'اختر نوع النظام (WBM, OBM, أو SBM) مع تبرير الاختيار',
            'حدد مكونات السائل والتركيزات المقترحة',
            'اشرح استراتيجية التحكم في الترشيح والريولوجيا',
            'ضع خطة للتعامل مع التلوث المحتمل',
          ],
          submissionType: 'both',
        },
        en: {
          title: 'Design a Drilling Fluid System for HPHT Well',
          description: 'Design a complete drilling fluid system for a well with bottom hole temperature of 350°F and expected pressure requiring 16.5 ppg density, with sensitive shale layers present.',
          instructions: [
            'Select the system type (WBM, OBM, or SBM) with justification',
            'Identify fluid components and proposed concentrations',
            'Explain filtration and rheology control strategy',
            'Develop a plan for handling potential contamination',
          ],
          submissionType: 'both',
        },
      },
    },
  ],
};
