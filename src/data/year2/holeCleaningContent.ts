import { WeeklyLesson } from '../weeklyContent';

export const holeCleaningLesson: WeeklyLesson = {
  lessonId: 'hole-cleaning',
  days: [
    {
      day: 1,
      type: 'learning',
      content: {
        ar: {
          title: 'تنظيف الحفرة - اليوم الأول: مقدمة في تنظيف الحفرة',
          explanation: `<section>
<h2 style="color: #1e3a5f;" class="text-xl font-bold mb-4">🔷 مقدمة في تنظيف الحفرة</h2>
<p class="mb-4">تنظيف الحفرة (Hole Cleaning) هو عملية إزالة الفتات الصخرية (Cuttings) الناتجة عن عملية الحفر من قاع البئر إلى السطح باستخدام سائل الحفر. يعتبر تنظيف الحفرة من أهم العمليات في الحفر لأن تراكم الفتات يسبب مشاكل خطيرة.</p>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); padding: 20px; border-radius: 12px; margin: 20px 0; color: white;">
<h3 style="color: #fbbf24;" class="font-bold mb-2">💡 أهمية تنظيف الحفرة</h3>
<ul class="space-y-2">
<li>• منع التصاق الأنابيب</li>
<li>• الحفاظ على سلامة البئر</li>
<li>• تحسين معدل الاختراق</li>
<li>• تقليل التآكل وتوفير التكاليف</li>
</ul>
</div>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 آلية نقل الفتات</h3>
<p class="mb-4">تُنقل الفتات من قاع البئر إلى السطح عبر الفراغ الحلقي (Annulus). تعتمد كفاءة النقل على:</p>
<ul class="list-disc pr-6 mb-4 space-y-2">
<li><strong>السرعة الحلقية (Annular Velocity):</strong> يجب أن تكون كافية لرفع الفتات</li>
<li><strong>خصائص سائل الحفر:</strong> اللزوجة والكثافة تؤثران على قدرة الحمل</li>
<li><strong>حجم وشكل الفتات:</strong> الفتات الكبيرة أصعب في النقل</li>
<li><strong>زاوية ميل الحفرة:</strong> الآبار المائلة تحتاج عناية خاصة</li>
</ul>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 سرعة الانزلاق (Slip Velocity)</h3>
<p class="mb-4">سرعة الانزلاق هي السرعة التي تسقط بها الفتات في سائل الحفر بفعل الجاذبية:</p>
<div style="background: #f0fdf4; padding: 16px; border-radius: 8px; border-right: 4px solid #22c55e; margin: 16px 0;">
<p class="font-mono text-center"><strong>سرعة النقل الصافية = السرعة الحلقية - سرعة الانزلاق</strong></p>
</div>

<div style="background: #fef2f2; padding: 16px; border-radius: 8px; border-right: 4px solid #ef4444; margin: 16px 0;">
<p class="font-bold">⚠️ إذا كانت سرعة النقل الصافية سالبة، ستتراكم الفتات في الحفرة!</p>
</div>
</section>`,
          keyTerms: [
            { term: 'تنظيف الحفرة', definition: 'عملية إزالة الفتات من البئر باستخدام سائل الحفر' },
            { term: 'الفتات', definition: 'قطع الصخور الناتجة عن عملية الحفر' },
            { term: 'الفراغ الحلقي', definition: 'المسافة بين سلسلة الحفر وجدار الحفرة' },
            { term: 'السرعة الحلقية', definition: 'سرعة سائل الحفر في الفراغ الحلقي' },
            { term: 'سرعة الانزلاق', definition: 'سرعة سقوط الفتات في السائل بفعل الجاذبية' },
          ],
          practiceQuestion: {
            question: 'ما هو الشرط الأساسي لنقل الفتات من قاع البئر إلى السطح؟',
            options: ['أن تكون السرعة الحلقية أكبر من سرعة الانزلاق', 'أن تكون اللزوجة منخفضة جداً', 'أن يكون قطر الحفرة صغيراً', 'أن تكون الفتات كبيرة الحجم'],
            correctAnswer: 0,
          },
        },
        en: {
          title: 'Hole Cleaning - Day 1: Introduction to Hole Cleaning',
          explanation: `<section>
<h2 style="color: #1e3a5f;" class="text-xl font-bold mb-4">🔷 Introduction to Hole Cleaning</h2>
<p class="mb-4">Hole cleaning is the process of removing rock cuttings generated during drilling from the bottom of the well to the surface using drilling fluid. It is one of the most critical operations because cuttings accumulation causes serious problems.</p>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); padding: 20px; border-radius: 12px; margin: 20px 0; color: white;">
<h3 style="color: #fbbf24;" class="font-bold mb-2">💡 Importance of Hole Cleaning</h3>
<ul class="space-y-2">
<li>• Prevent pipe sticking</li>
<li>• Maintain wellbore integrity</li>
<li>• Improve rate of penetration</li>
<li>• Reduce wear and save costs</li>
</ul>
</div>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 Cuttings Transport Mechanism</h3>
<p class="mb-4">Cuttings are transported through the annulus. Transport efficiency depends on:</p>
<ul class="list-disc pl-6 mb-4 space-y-2">
<li><strong>Annular Velocity:</strong> Must be sufficient to lift cuttings</li>
<li><strong>Drilling Fluid Properties:</strong> Viscosity and density affect carrying capacity</li>
<li><strong>Cuttings Size and Shape:</strong> Large cuttings are harder to transport</li>
<li><strong>Hole Inclination:</strong> Deviated wells need special attention</li>
</ul>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 Slip Velocity</h3>
<p class="mb-4">Slip velocity is the rate at which cuttings fall through the drilling fluid due to gravity:</p>
<div style="background: #f0fdf4; padding: 16px; border-radius: 8px; border-left: 4px solid #22c55e; margin: 16px 0;">
<p class="font-mono text-center" style="color: #166534;"><strong>Net Transport Velocity = Annular Velocity - Slip Velocity</strong></p>
</div>

<div style="background: #fef2f2; padding: 16px; border-radius: 8px; border-left: 4px solid #ef4444; margin: 16px 0;">
<p class="font-bold">⚠️ If net transport velocity is negative, cuttings will accumulate in the hole!</p>
</div>
</section>`,
          keyTerms: [
            { term: 'Hole Cleaning', definition: 'Process of removing cuttings from the well using drilling fluid' },
            { term: 'Cuttings', definition: 'Rock pieces generated by drilling' },
            { term: 'Annulus', definition: 'Space between drillstring and wellbore' },
            { term: 'Annular Velocity', definition: 'Drilling fluid speed in the annulus' },
            { term: 'Slip Velocity', definition: 'Rate of cuttings falling in fluid due to gravity' },
          ],
          practiceQuestion: {
            question: 'What is the basic requirement for transporting cuttings from bottom to surface?',
            options: ['Annular velocity must exceed slip velocity', 'Viscosity must be very low', 'Hole diameter must be small', 'Cuttings must be large'],
            correctAnswer: 0,
          },
        },
      },
    },
    {
      day: 2,
      type: 'learning',
      content: {
        ar: {
          title: 'تنظيف الحفرة - اليوم الثاني: العوامل المؤثرة في التنظيف',
          explanation: `<section>
<h2 style="color: #1e3a5f;" class="text-xl font-bold mb-4">🔷 العوامل المؤثرة في تنظيف الحفرة</h2>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 1. معدل تدفق سائل الحفر</h3>
<p class="mb-4">معدل التدفق هو العامل الأكثر أهمية. كلما زاد معدل التدفق، زادت السرعة الحلقية:</p>
<ul class="list-disc pr-6 mb-4 space-y-2">
<li><strong>الحد الأدنى:</strong> يجب أن يكون كافياً لرفع الفتات</li>
<li><strong>الحد الأقصى:</strong> محدود بقدرة المضخات والضغط المسموح</li>
<li><strong>القيمة المثلى:</strong> 100-200 قدم/دقيقة للآبار العمودية</li>
</ul>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 2. خصائص سائل الحفر</h3>
<div style="background: #f8fafc; padding: 16px; border-radius: 8px; margin: 16px 0;">
<ul class="list-disc pr-6 space-y-2">
<li><strong>اللزوجة:</strong> لزوجة أعلى = قدرة حمل أفضل لكن ضغط أعلى</li>
<li><strong>الكثافة:</strong> كثافة أعلى تسهل حمل الفتات</li>
<li><strong>قوة الهلام:</strong> تحافظ على الفتات معلقة عند التوقف</li>
<li><strong>نقطة الخضوع:</strong> تحدد قدرة بدء تحريك الفتات</li>
</ul>
</div>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 3. هندسة الحفرة</h3>
<ul class="list-disc pr-6 mb-4 space-y-2">
<li><strong>قطر الحفرة:</strong> حفرة أكبر = سرعة حلقية أقل</li>
<li><strong>زاوية الميل:</strong> الآبار المائلة (30-60°) الأصعب في التنظيف</li>
<li><strong>انحراف السلسلة:</strong> يخلق مناطق منخفضة السرعة</li>
<li><strong>تضخم الحفرة:</strong> يقلل السرعة الحلقية</li>
</ul>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 4. دوران سلسلة الحفر</h3>
<p class="mb-4">دوران السلسلة يساعد في التنظيف:</p>
<ul class="list-disc pr-6 mb-4 space-y-2">
<li>تحريك الفتات المترسبة في الآبار المائلة</li>
<li>خلط السائل وتوزيع السرعة بشكل أفضل</li>
<li>منع تكون طبقات ثابتة من الفتات</li>
</ul>
</section>`,
          keyTerms: [
            { term: 'معدل التدفق', definition: 'كمية السائل المضخوخة في وحدة الزمن' },
            { term: 'قوة الهلام', definition: 'قدرة السائل على تعليق الفتات عند التوقف' },
            { term: 'نقطة الخضوع', definition: 'الإجهاد اللازم لبدء تدفق السائل' },
            { term: 'تضخم الحفرة', definition: 'زيادة قطر الحفرة عن القطر الاسمي' },
          ],
          practiceQuestion: {
            question: 'ما هي زاوية ميل الحفرة الأصعب في التنظيف؟',
            options: ['0° (عمودية)', '30-60° (مائلة)', '90° (أفقية)', '15° (شبه عمودية)'],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Hole Cleaning - Day 2: Factors Affecting Cleaning',
          explanation: `<section>
<h2 style="color: #1e3a5f;" class="text-xl font-bold mb-4">🔷 Factors Affecting Hole Cleaning</h2>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 1. Drilling Fluid Flow Rate</h3>
<p class="mb-4">Flow rate is the most important factor. Higher flow rate means higher annular velocity:</p>
<ul class="list-disc pl-6 mb-4 space-y-2">
<li><strong>Minimum:</strong> Must be sufficient to lift cuttings</li>
<li><strong>Maximum:</strong> Limited by pump capacity and allowable pressure</li>
<li><strong>Optimal Value:</strong> 100-200 ft/min for vertical wells</li>
</ul>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 2. Drilling Fluid Properties</h3>
<div style="background: #f8fafc; padding: 16px; border-radius: 8px; margin: 16px 0;">
<ul class="list-disc pl-6 space-y-2">
<li><strong>Viscosity:</strong> Higher viscosity = better carrying capacity but higher pressure</li>
<li><strong>Density:</strong> Higher density eases cuttings transport</li>
<li><strong>Gel Strength:</strong> Keeps cuttings suspended when stopped</li>
<li><strong>Yield Point:</strong> Determines ability to initiate cuttings movement</li>
</ul>
</div>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 3. Hole Geometry</h3>
<ul class="list-disc pl-6 mb-4 space-y-2">
<li><strong>Hole Diameter:</strong> Larger hole = lower annular velocity</li>
<li><strong>Inclination Angle:</strong> Deviated wells (30-60°) hardest to clean</li>
<li><strong>String Eccentricity:</strong> Creates low-velocity zones</li>
<li><strong>Hole Washout:</strong> Reduces annular velocity</li>
</ul>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 4. Drillstring Rotation</h3>
<p class="mb-4">String rotation aids cleaning:</p>
<ul class="list-disc pl-6 mb-4 space-y-2">
<li>Agitates settled cuttings in deviated wells</li>
<li>Mixes fluid and distributes velocity better</li>
<li>Prevents formation of stationary cuttings beds</li>
</ul>
</section>`,
          keyTerms: [
            { term: 'Flow Rate', definition: 'Volume of fluid pumped per unit time' },
            { term: 'Gel Strength', definition: 'Fluid ability to suspend cuttings when static' },
            { term: 'Yield Point', definition: 'Stress required to initiate fluid flow' },
            { term: 'Washout', definition: 'Hole enlargement beyond nominal diameter' },
          ],
          practiceQuestion: {
            question: 'What hole inclination angle is hardest to clean?',
            options: ['0° (vertical)', '30-60° (deviated)', '90° (horizontal)', '15° (near vertical)'],
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
          title: 'تنظيف الحفرة - اليوم الثالث: تنظيف الآبار المائلة والأفقية',
          explanation: `<section>
<h2 style="color: #1e3a5f;" class="text-xl font-bold mb-4">🔷 تنظيف الآبار المائلة والأفقية</h2>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 تحديات الآبار المائلة</h3>
<p class="mb-4">في الآبار المائلة:</p>
<ul class="list-disc pr-6 mb-4 space-y-2">
<li>الفتات تسقط على الجانب السفلي من الحفرة (Low Side)</li>
<li>تتشكل طبقات من الفتات (Cuttings Beds)</li>
<li>التدفق يكون في الجزء العلوي</li>
<li>سلسلة الحفر تستقر على الجانب السفلي</li>
</ul>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 الزاوية الحرجة (30°-60°)</h3>
<div style="background: #fef3c7; padding: 16px; border-radius: 8px; border-right: 4px solid #f59e0b; margin: 16px 0;">
<p class="mb-2">عند هذه الزوايا:</p>
<ul class="list-disc pr-6 space-y-1">
<li>الفتات تميل للانزلاق على الجانب السفلي</li>
<li>السرعة الحلقية غير كافية لإعادة التعليق</li>
<li>تتشكل طبقات يصعب إزالتها</li>
</ul>
</div>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 تقنيات التنظيف</h3>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">1. دوران السلسلة (100-150 RPM)</h4>
<p class="mb-4">يحرك الفتات من الجانب السفلي ويعلقها في التيار</p>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">2. رفع معدل التدفق</h4>
<p class="mb-4">قد يتطلب سرعة 150-200+ قدم/دقيقة</p>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">3. حبوب الاحتكاك (Sweep Pills)</h4>
<ul class="list-disc pr-6 mb-4 space-y-2">
<li><strong>Hi-Vis Sweep:</strong> لزوجة عالية لحمل الفتات الكبيرة</li>
<li><strong>Lo-Vis Sweep:</strong> لزوجة منخفضة لتحريك الطبقات</li>
<li><strong>Tandem Sweep:</strong> حبة منخفضة ثم عالية اللزوجة</li>
</ul>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">4. التنقل للخلف (Back Reaming)</h4>
<p class="mb-4">رفع السلسلة مع الدوران والضخ لتنظيف المناطق المشكلة</p>
</section>`,
          keyTerms: [
            { term: 'الجانب السفلي', definition: 'الجزء السفلي من الحفرة في الآبار المائلة' },
            { term: 'طبقة الفتات', definition: 'تراكم الفتات على الجانب السفلي' },
            { term: 'الزاوية الحرجة', definition: 'زاوية الميل الأصعب في التنظيف (30-60°)' },
            { term: 'حبة كاسحة', definition: 'حبة سائل خاصة لإزالة الفتات' },
            { term: 'التنقل للخلف', definition: 'رفع السلسلة مع الدوران والضخ' },
          ],
          practiceQuestion: {
            question: 'ما هي أفضل تقنية لتحريك الفتات المترسبة في بئر مائل؟',
            options: ['زيادة كثافة السائل', 'دوران سلسلة الحفر', 'تقليل معدل التدفق', 'إيقاف الضخ'],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Hole Cleaning - Day 3: Deviated and Horizontal Well Cleaning',
          explanation: `<section>
<h2 style="color: #1e3a5f;" class="text-xl font-bold mb-4">🔷 Deviated and Horizontal Well Cleaning</h2>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 Challenges in Deviated Wells</h3>
<p class="mb-4">In deviated wells:</p>
<ul class="list-disc pl-6 mb-4 space-y-2">
<li>Cuttings fall to the low side of the hole</li>
<li>Cuttings beds form on the low side</li>
<li>Flow occurs in the upper portion</li>
<li>Drillstring rests on the low side</li>
</ul>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 Critical Angle (30°-60°)</h3>
<div style="background: #fef3c7; padding: 16px; border-radius: 8px; border-left: 4px solid #f59e0b; margin: 16px 0;">
<p class="mb-2">At these angles:</p>
<ul class="list-disc pl-6 space-y-1">
<li>Cuttings tend to slide down the low side</li>
<li>Annular velocity is insufficient to re-suspend</li>
<li>Beds form that are difficult to remove</li>
</ul>
</div>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 Cleaning Techniques</h3>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">1. String Rotation (100-150 RPM)</h4>
<p class="mb-4">Agitates cuttings from low side and suspends them in flow</p>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">2. Increase Flow Rate</h4>
<p class="mb-4">May require 150-200+ ft/min velocity</p>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">3. Sweep Pills</h4>
<ul class="list-disc pl-6 mb-4 space-y-2">
<li><strong>Hi-Vis Sweep:</strong> High viscosity to carry large cuttings</li>
<li><strong>Lo-Vis Sweep:</strong> Low viscosity to disturb beds</li>
<li><strong>Tandem Sweep:</strong> Low-vis followed by high-vis pill</li>
</ul>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">4. Back Reaming</h4>
<p class="mb-4">Pulling up while rotating and pumping to clean problem areas</p>
</section>`,
          keyTerms: [
            { term: 'Low Side', definition: 'Lower portion of hole in deviated wells' },
            { term: 'Cuttings Bed', definition: 'Accumulation of cuttings on low side' },
            { term: 'Critical Angle', definition: 'Inclination angle hardest to clean (30-60°)' },
            { term: 'Sweep Pill', definition: 'Special fluid pill to remove cuttings' },
            { term: 'Back Reaming', definition: 'Pulling up while rotating and pumping' },
          ],
          practiceQuestion: {
            question: 'What is the best technique to agitate cuttings in a deviated well?',
            options: ['Increase fluid density', 'Drillstring rotation', 'Reduce flow rate', 'Stop pumping'],
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
          title: 'تنظيف الحفرة - اليوم الرابع: معدات معالجة الفتات السطحية',
          explanation: `<section>
<h2 style="color: #1e3a5f;" class="text-xl font-bold mb-4">🔷 معدات معالجة الفتات السطحية</h2>
<p class="mb-4">نظام التحكم في المواد الصلبة (Solids Control System) يفصل الفتات عن سائل الحفر قبل إعادة ضخه.</p>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 1. المنخل الاهتزازي (Shale Shaker)</h3>
<div style="background: #f8fafc; padding: 16px; border-radius: 8px; margin: 16px 0;">
<ul class="list-disc pr-6 space-y-2">
<li><strong>الوظيفة:</strong> فصل الفتات الكبيرة (أكبر من 74 ميكرون)</li>
<li><strong>المبدأ:</strong> شاشات مثقبة تهتز بتردد عالٍ</li>
<li><strong>أحجام الشاشات:</strong> 20-325 mesh</li>
<li><strong>كفاءة الفصل:</strong> 60-80% من المواد الصلبة</li>
</ul>
</div>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 2. مزيل الغاز (Degasser)</h3>
<p class="mb-4">يزيل الغازات المذابة من السائل (فراغي أو طرد مركزي)</p>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 3. مزيل الرمل (Desander)</h3>
<ul class="list-disc pr-6 mb-4 space-y-2">
<li><strong>نطاق الفصل:</strong> 45-74 ميكرون</li>
<li><strong>قطر المخروط:</strong> 6-12 بوصة</li>
<li><strong>المبدأ:</strong> القوة الطاردة المركزية في الهيدروسيكلون</li>
</ul>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 4. مزيل الطمي (Desilter)</h3>
<ul class="list-disc pr-6 mb-4 space-y-2">
<li><strong>نطاق الفصل:</strong> 15-45 ميكرون</li>
<li><strong>قطر المخروط:</strong> 4-5 بوصة</li>
</ul>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 5. الطرد المركزي (Centrifuge)</h3>
<ul class="list-disc pr-6 mb-4 space-y-2">
<li><strong>نطاق الفصل:</strong> 2-10 ميكرون</li>
<li><strong>السرعة:</strong> 1800-3000 دورة/دقيقة</li>
<li>الأكثر كفاءة والأعلى تكلفة</li>
</ul>
</section>`,
          keyTerms: [
            { term: 'المنخل الاهتزازي', definition: 'معدة فصل الفتات الكبيرة بالاهتزاز' },
            { term: 'الهيدروسيكلون', definition: 'مخروط يفصل الجسيمات بالقوة الطاردة المركزية' },
            { term: 'مزيل الرمل', definition: 'معدة فصل الجسيمات 45-74 ميكرون' },
            { term: 'مزيل الطمي', definition: 'معدة فصل الجسيمات 15-45 ميكرون' },
            { term: 'الطرد المركزي', definition: 'معدة فصل الجسيمات الدقيقة جداً بالدوران السريع' },
          ],
          practiceQuestion: {
            question: 'ما هي المعدة الأولى التي يمر عليها سائل الحفر عند وصوله للسطح؟',
            options: ['مزيل الرمل', 'الطرد المركزي', 'المنخل الاهتزازي', 'مزيل الطمي'],
            correctAnswer: 2,
          },
        },
        en: {
          title: 'Hole Cleaning - Day 4: Surface Cuttings Processing Equipment',
          explanation: `<section>
<h2 style="color: #1e3a5f;" class="text-xl font-bold mb-4">🔷 Surface Cuttings Processing Equipment</h2>
<p class="mb-4">The Solids Control System separates cuttings from drilling fluid before recirculating it.</p>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 1. Shale Shaker</h3>
<div style="background: #f8fafc; padding: 16px; border-radius: 8px; margin: 16px 0;">
<ul class="list-disc pl-6 space-y-2">
<li><strong>Function:</strong> Separate large cuttings (>74 microns)</li>
<li><strong>Principle:</strong> Vibrating perforated screens</li>
<li><strong>Screen Sizes:</strong> 20-325 mesh</li>
<li><strong>Separation Efficiency:</strong> 60-80% of solids</li>
</ul>
</div>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 2. Degasser</h3>
<p class="mb-4">Removes dissolved gases from fluid (vacuum or centrifugal)</p>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 3. Desander</h3>
<ul class="list-disc pl-6 mb-4 space-y-2">
<li><strong>Separation Range:</strong> 45-74 microns</li>
<li><strong>Cone Diameter:</strong> 6-12 inches</li>
<li><strong>Principle:</strong> Centrifugal force in hydrocyclone</li>
</ul>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 4. Desilter</h3>
<ul class="list-disc pl-6 mb-4 space-y-2">
<li><strong>Separation Range:</strong> 15-45 microns</li>
<li><strong>Cone Diameter:</strong> 4-5 inches</li>
</ul>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 5. Centrifuge</h3>
<ul class="list-disc pl-6 mb-4 space-y-2">
<li><strong>Separation Range:</strong> 2-10 microns</li>
<li><strong>Speed:</strong> 1800-3000 RPM</li>
<li>Most efficient but highest cost</li>
</ul>
</section>`,
          keyTerms: [
            { term: 'Shale Shaker', definition: 'Equipment separating large cuttings by vibration' },
            { term: 'Hydrocyclone', definition: 'Cone separating particles by centrifugal force' },
            { term: 'Desander', definition: 'Equipment separating 45-74 micron particles' },
            { term: 'Desilter', definition: 'Equipment separating 15-45 micron particles' },
            { term: 'Centrifuge', definition: 'Equipment separating very fine particles by rapid rotation' },
          ],
          practiceQuestion: {
            question: 'What is the first equipment drilling fluid passes through at surface?',
            options: ['Desander', 'Centrifuge', 'Shale Shaker', 'Desilter'],
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
          title: 'تنظيف الحفرة - اليوم الخامس: مؤشرات ومشاكل التنظيف',
          explanation: `<section>
<h2 style="color: #1e3a5f;" class="text-xl font-bold mb-4">🔷 مؤشرات ومشاكل تنظيف الحفرة</h2>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 مؤشرات جودة التنظيف</h3>
<ul class="list-disc pr-6 mb-4 space-y-2">
<li><strong>كمية الفتات:</strong> يجب أن تتناسب مع معدل الاختراق</li>
<li><strong>شكل الفتات:</strong> حادة = حفر طازج، مستديرة = إعادة طحن</li>
<li><strong>وقت الفارق:</strong> تأخر الفتات يشير لتنظيف ضعيف</li>
<li><strong>العزم والسحب:</strong> زيادتهما تشير لتراكم الفتات</li>
</ul>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 مشاكل سوء التنظيف</h3>

<div style="background: #fef2f2; padding: 16px; border-radius: 8px; border-right: 4px solid #ef4444; margin: 16px 0;">
<h4 style="color: #991b1b;" class="font-bold mb-2">1. التصاق الأنابيب (Stuck Pipe)</h4>
<ul class="list-disc pr-6 space-y-1">
<li><strong>الالتصاق الميكانيكي:</strong> الفتات تحيط بالسلسلة</li>
<li><strong>الالتصاق التفاضلي:</strong> فرق الضغط يضغط السلسلة</li>
<li>ساعات إلى أيام من التوقف المكلف</li>
</ul>
</div>

<div style="background: #fef3c7; padding: 16px; border-radius: 8px; border-right: 4px solid #f59e0b; margin: 16px 0;">
<h4 style="color: #92400e;" class="font-bold mb-2">2. حزم الحفرة (Pack-off)</h4>
<p>انسداد الفراغ الحلقي يسبب ارتفاع مفاجئ في الضغط</p>
</div>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 الإجراءات التصحيحية</h3>
<ul class="list-disc pr-6 mb-4 space-y-2">
<li>زيادة معدل التدفق وسرعة الدوران</li>
<li>ضخ حبوب كاسحة (Sweep Pills)</li>
<li>التنقل للخلف (Back Reaming)</li>
<li>تعديل خصائص سائل الحفر</li>
<li>تقليل معدل الاختراق مؤقتاً</li>
</ul>
</section>`,
          keyTerms: [
            { term: 'وقت الفارق', definition: 'الوقت بين الحفر ووصول الفتات للسطح' },
            { term: 'التصاق الأنابيب', definition: 'عدم قدرة سلسلة الحفر على الحركة' },
            { term: 'حزم الحفرة', definition: 'انسداد الفراغ الحلقي بالفتات' },
            { term: 'العزم', definition: 'قوة الدوران المطلوبة لتدوير السلسلة' },
            { term: 'السحب', definition: 'المقاومة عند رفع أو إنزال السلسلة' },
          ],
          practiceQuestion: {
            question: 'ما المؤشر الذي يدل على إعادة طحن الفتات في قاع البئر؟',
            options: ['فتات حادة الحواف', 'فتات مستديرة', 'زيادة كمية الفتات', 'فتات ملونة'],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Hole Cleaning - Day 5: Cleaning Indicators and Problems',
          explanation: `<section>
<h2 style="color: #1e3a5f;" class="text-xl font-bold mb-4">🔷 Hole Cleaning Indicators and Problems</h2>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 Cleaning Quality Indicators</h3>
<ul class="list-disc pl-6 mb-4 space-y-2">
<li><strong>Cuttings Volume:</strong> Should match penetration rate</li>
<li><strong>Cuttings Shape:</strong> Sharp = fresh drilling, Rounded = re-grinding</li>
<li><strong>Lag Time:</strong> Delayed cuttings indicate poor cleaning</li>
<li><strong>Torque & Drag:</strong> Increase indicates cuttings accumulation</li>
</ul>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 Poor Cleaning Problems</h3>

<div style="background: #fef2f2; padding: 16px; border-radius: 8px; border-left: 4px solid #ef4444; margin: 16px 0;">
<h4 style="color: #991b1b;" class="font-bold mb-2">1. Stuck Pipe</h4>
<ul class="list-disc pl-6 space-y-1">
<li><strong>Mechanical Sticking:</strong> Cuttings surround string</li>
<li><strong>Differential Sticking:</strong> Pressure differential pushes string</li>
<li>Hours to days of costly downtime</li>
</ul>
</div>

<div style="background: #fef3c7; padding: 16px; border-radius: 8px; border-left: 4px solid #f59e0b; margin: 16px 0;">
<h4 style="color: #92400e;" class="font-bold mb-2">2. Pack-off</h4>
<p>Annulus blockage causes sudden pressure increase</p>
</div>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 Corrective Actions</h3>
<ul class="list-disc pl-6 mb-4 space-y-2">
<li>Increase flow rate and rotation speed</li>
<li>Pump sweep pills</li>
<li>Back ream problem areas</li>
<li>Modify drilling fluid properties</li>
<li>Temporarily reduce penetration rate</li>
</ul>
</section>`,
          keyTerms: [
            { term: 'Lag Time', definition: 'Time between drilling and cuttings reaching surface' },
            { term: 'Stuck Pipe', definition: 'Drillstring inability to move' },
            { term: 'Pack-off', definition: 'Annulus blockage by cuttings' },
            { term: 'Torque', definition: 'Rotational force required to turn the string' },
            { term: 'Drag', definition: 'Resistance when raising or lowering the string' },
          ],
          practiceQuestion: {
            question: 'What indicates cuttings are being re-ground at the bottom?',
            options: ['Sharp-edged cuttings', 'Rounded cuttings', 'Increase in cuttings volume', 'Colored cuttings'],
            correctAnswer: 1,
          },
        },
      },
    },
    {
      day: 6,
      type: 'quiz',
      content: {
        ar: { title: 'اختبار تنظيف الحفرة ومعالجة الفتات', explanation: 'اختبر معلوماتك', keyTerms: [] },
        en: { title: 'Hole Cleaning & Cuttings Handling Quiz', explanation: 'Test your knowledge', keyTerms: [] },
      },
      quiz: {
        ar: [
          { question: 'ما هو الشرط الأساسي لنقل الفتات من قاع البئر؟', options: ['السرعة الحلقية > سرعة الانزلاق', 'السرعة الحلقية < سرعة الانزلاق', 'كثافة السائل = كثافة الفتات', 'اللزوجة = صفر'], correctAnswer: 0 },
          { question: 'ما هي الزاوية الحرجة الأصعب في التنظيف؟', options: ['0-15°', '30-60°', '80-90°', '15-30°'], correctAnswer: 1 },
          { question: 'ما وظيفة المنخل الاهتزازي؟', options: ['إزالة الغاز', 'فصل الفتات الكبيرة', 'استعادة البارايت', 'زيادة اللزوجة'], correctAnswer: 1 },
          { question: 'ما نطاق فصل مزيل الطمي؟', options: ['74-150 ميكرون', '45-74 ميكرون', '15-45 ميكرون', '2-10 ميكرون'], correctAnswer: 2 },
          { question: 'ما هي حبة Tandem Sweep؟', options: ['حبة عالية اللزوجة', 'حبة منخفضة ثم عالية اللزوجة', 'حبة ثقيلة الوزن', 'حبة كيميائية'], correctAnswer: 1 },
          { question: 'ما المؤشر على تراكم الفتات في الحفرة؟', options: ['زيادة كمية الفتات', 'انخفاض مفاجئ في كمية الفتات', 'انخفاض العزم', 'زيادة معدل الاختراق'], correctAnswer: 1 },
          { question: 'ما هو قطر مخاريط مزيل الرمل النموذجي؟', options: ['2-4 بوصة', '4-5 بوصة', '6-12 بوصة', '15-20 بوصة'], correctAnswer: 2 },
          { question: 'كيف يساعد دوران السلسلة في تنظيف الآبار المائلة؟', options: ['يزيد كثافة السائل', 'يحرك الفتات من الجانب السفلي', 'يقلل سرعة الحفر', 'يزيد ضغط الضخ'], correctAnswer: 1 },
          { question: 'ما سبب الالتصاق التفاضلي للأنابيب؟', options: ['تراكم الفتات', 'فرق الضغط يضغط السلسلة على طبقة مسامية', 'انكسار السلسلة', 'سوء نوعية السائل'], correctAnswer: 1 },
          { question: 'ما المعدة الأكثر كفاءة لفصل الجسيمات 2-10 ميكرون؟', options: ['المنخل الاهتزازي', 'مزيل الرمل', 'مزيل الطمي', 'الطرد المركزي'], correctAnswer: 3 },
        ],
        en: [
          { question: 'What is the basic requirement for transporting cuttings?', options: ['Annular velocity > Slip velocity', 'Annular velocity < Slip velocity', 'Fluid density = Cuttings density', 'Viscosity = zero'], correctAnswer: 0 },
          { question: 'What is the critical angle hardest to clean?', options: ['0-15°', '30-60°', '80-90°', '15-30°'], correctAnswer: 1 },
          { question: 'What is the function of the shale shaker?', options: ['Remove gas', 'Separate large cuttings', 'Recover barite', 'Increase viscosity'], correctAnswer: 1 },
          { question: 'What is the separation range of the desilter?', options: ['74-150 microns', '45-74 microns', '15-45 microns', '2-10 microns'], correctAnswer: 2 },
          { question: 'What is a Tandem Sweep?', options: ['Single high-viscosity pill', 'Low-vis followed by high-vis pill', 'Heavy-weight pill', 'Chemical pill'], correctAnswer: 1 },
          { question: 'What indicates cuttings accumulation in the hole?', options: ['Increased cuttings at shaker', 'Sudden decrease in cuttings returns', 'Decreased torque', 'Increased penetration rate'], correctAnswer: 1 },
          { question: 'What is the typical desander cone diameter?', options: ['2-4 inches', '4-5 inches', '6-12 inches', '15-20 inches'], correctAnswer: 2 },
          { question: 'How does string rotation help clean deviated wells?', options: ['Increases fluid density', 'Agitates cuttings from low side', 'Reduces drilling speed', 'Increases pump pressure'], correctAnswer: 1 },
          { question: 'What causes differential pipe sticking?', options: ['Cuttings accumulation', 'Pressure differential pushing string against permeable bed', 'String breakage', 'Poor fluid quality'], correctAnswer: 1 },
          { question: 'What equipment is most efficient for separating 2-10 micron particles?', options: ['Shale shaker', 'Desander', 'Desilter', 'Centrifuge'], correctAnswer: 3 },
        ],
      },
    },
    {
      day: 7,
      type: 'project',
      content: {
        ar: { title: 'مشروع تنظيف الحفرة', explanation: 'طبق ما تعلمته', keyTerms: [] },
        en: { title: 'Hole Cleaning Project', explanation: 'Apply what you learned', keyTerms: [] },
      },
      project: {
        ar: {
          title: 'تصميم برنامج تنظيف لبئر مائل',
          description: 'لديك بئر بزاوية ميل 45° وعمق 3000 متر. صمم برنامج تنظيف شامل يتضمن: معدل التدفق والسرعة الحلقية، خصائص سائل الحفر المثلى، جدول ضخ الحبوب الكاسحة، إجراءات المراقبة، والإجراءات التصحيحية.',
          instructions: ['حدد معدل التدفق والسرعة الحلقية المطلوبة', 'اختر خصائص سائل الحفر المثلى', 'صمم جدول ضخ الحبوب الكاسحة', 'حدد مؤشرات المراقبة والتحذير', 'اكتب الإجراءات التصحيحية للمشاكل المحتملة'],
          submissionType: 'text',
        },
        en: {
          title: 'Design a Cleaning Program for a Deviated Well',
          description: 'You have a well with 45° inclination and 3000m depth. Design a comprehensive cleaning program including: flow rate and annular velocity, optimal fluid properties, sweep pill schedule, monitoring procedures, and corrective actions.',
          instructions: ['Determine required flow rate and annular velocity', 'Select optimal drilling fluid properties', 'Design sweep pill pumping schedule', 'Define monitoring indicators and warnings', 'Write corrective actions for potential problems'],
          submissionType: 'text',
        },
      },
    },
  ],
};
