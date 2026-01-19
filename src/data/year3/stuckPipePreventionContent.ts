import { WeeklyLesson } from '../weeklyContent';

export const stuckPipePreventionLesson: WeeklyLesson = {
  lessonId: 'stuck-pipe-prevention',
  days: [
    {
      day: 1,
      type: 'learning',
      content: {
        ar: {
          title: 'انحشار الأنابيب (Stuck Pipe) - المفاهيم الأساسية وآليات الحدوث',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 مقدمة في انحشار الأنابيب (Stuck Pipe)</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<p style="font-size: 1.1rem; line-height: 1.8;">
<strong>انحشار الأنابيب (Stuck Pipe)</strong> هو أحد أخطر مشاكل الحفر وأكثرها تكلفة، ويحدث عندما تصبح سلسلة الحفر (Drillstring) أو أي معدات أخرى غير قادرة على الحركة بحرية داخل البئر - سواء للأعلى أو الأسفل أو الدوران. يمكن أن يتسبب في خسائر مالية ضخمة تصل إلى ملايين الدولارات وأسابيع من التأخير.
</p>
</div>

<div style="background: #fef2f2; padding: 1.25rem; border-radius: 10px; border-right: 4px solid #dc2626; margin: 1.5rem 0;">
<h4 style="color: #dc2626; margin-bottom: 0.75rem;">⚠️ الأثر الاقتصادي والتشغيلي:</h4>
<ul style="margin: 0; padding-right: 1.25rem; color: #7f1d1d;">
<li>تكلفة يومية للحفارة: $100,000 - $1,000,000+</li>
<li>مدة الحل: من ساعات إلى أسابيع</li>
<li>احتمالية فقدان المعدات وضرورة حفر Sidetrack</li>
<li>مخاطر على سلامة الطاقم والبيئة</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 التصنيف الرئيسي لأنواع الانحشار</h3>

<p style="margin-bottom: 1rem; line-height: 1.8;">
ينقسم انحشار الأنابيب إلى فئتين رئيسيتين بناءً على آلية الحدوث:
</p>

<div style="display: grid; gap: 1rem; margin-bottom: 1.5rem;">

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 10px; border: 2px solid #f59e0b;">
<h4 style="color: #92400e; margin-bottom: 0.75rem; font-size: 1.1rem;">🔸 النوع الأول: الانحشار الميكانيكي (Mechanical Sticking)</h4>
<p style="margin-bottom: 0.75rem; color: #78350f;">يحدث بسبب عائق فيزيائي يمنع حركة الأنابيب:</p>
<ul style="margin: 0; padding-right: 1.25rem; color: #78350f;">
<li><strong>Key Seating (التحزز):</strong> تآكل جانبي في جدار البئر يحبس الـ BHA</li>
<li><strong>Undergauge Hole:</strong> تضيق قطر البئر أقل من قطر الأدوات</li>
<li><strong>Ledges (الحافات):</strong> بروزات في جدار البئر</li>
<li><strong>Junk in Hole:</strong> أجسام معدنية ساقطة في البئر</li>
<li><strong>Packoff (الانسداد):</strong> تراكم الفتات حول الأنابيب</li>
<li><strong>Wellbore Geometry:</strong> مشاكل هندسة مسار البئر</li>
</ul>
</div>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 10px; border: 2px solid #3b82f6;">
<h4 style="color: #1e40af; margin-bottom: 0.75rem; font-size: 1.1rem;">🔹 النوع الثاني: الانحشار التفاضلي (Differential Sticking)</h4>
<p style="margin-bottom: 0.75rem; color: #1e3a8a;">يحدث بسبب فرق الضغط بين سائل الحفر والتكوين:</p>
<ul style="margin: 0; padding-right: 1.25rem; color: #1e3a8a;">
<li><strong>Differential Pressure:</strong> ضغط سائل الحفر أعلى من ضغط التكوين</li>
<li><strong>Filter Cake Contact:</strong> التصاق الأنابيب بطبقة الترشيح</li>
<li><strong>Permeable Formation:</strong> تكوينات نفاذة (رمال، كربونات)</li>
<li><strong>Static Conditions:</strong> توقف الحركة لفترة طويلة</li>
</ul>
</div>

</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 الانحشار الميكانيكي بالتفصيل</h3>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">

<h4 style="color: #1e3a5f; margin-bottom: 1rem;">1️⃣ Key Seating (التحزز أو الأخدود الجانبي)</h4>

<p style="margin-bottom: 1rem; line-height: 1.8;">
يحدث في الآبار الموجهة عندما يحتك أنبوب الحفر بجدار البئر في نقطة ثابتة (عادة عند تغيير زاوية الميل - Dogleg). مع الدوران المستمر، يتآكل جدار البئر ويتشكل أخدود ضيق بحجم أنبوب الحفر. عند السحب، تنحشر أدوات الـ BHA الأكبر قطراً في هذا الأخدود.
</p>

<div style="background: #e8f4fd; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<p style="margin: 0; color: #1e40af;"><strong>💡 علامات التحذير:</strong></p>
<ul style="margin: 0.5rem 0 0 0; padding-right: 1.25rem; color: #1e40af;">
<li>زيادة في Overpull عند نقطة معينة من البئر</li>
<li>وجود Dogleg Severity عالية (> 3°/100ft)</li>
<li>تكرار المشكلة في نفس العمق</li>
</ul>
</div>

<h4 style="color: #1e3a5f; margin: 1.5rem 0 1rem 0;">2️⃣ Undergauge Hole (تضيق البئر)</h4>

<p style="margin-bottom: 1rem; line-height: 1.8;">
يحدث عندما تتقلص التكوينات الطينية (Shale) بسبب تفاعلها مع سائل الحفر أو نتيجة لضغوط التكوين. يمكن أن يحدث أيضاً بسبب تآكل رأس الحفر وعدم حفر القطر المطلوب.
</p>

<h4 style="color: #1e3a5f; margin: 1.5rem 0 1rem 0;">3️⃣ Packoff / Bridges (الانسداد والجسور)</h4>

<p style="margin-bottom: 1rem; line-height: 1.8;">
يحدث بسبب تراكم الفتات (Cuttings) أو انهيار جدار البئر حول الأنابيب. شائع في:
</p>
<ul style="margin: 0; padding-right: 1.25rem;">
<li>الآبار ذات الميل العالي (High Angle Wells)</li>
<li>التكوينات غير المستقرة</li>
<li>ضعف تنظيف البئر (Poor Hole Cleaning)</li>
</ul>

</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 الانحشار التفاضلي (Differential Sticking)</h3>

<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">

<p style="margin-bottom: 1rem; line-height: 1.8;">
يعتبر من أكثر أنواع الانحشار شيوعاً وخطورة. يحدث عندما:
</p>

<ol style="margin: 0; padding-right: 1.25rem; line-height: 2;">
<li>يكون ضغط عمود سائل الحفر (Hydrostatic Pressure) أعلى من ضغط التكوين (Formation Pressure)</li>
<li>تتكون طبقة ترشيح (Filter Cake) على جدار البئر في التكوينات النفاذة</li>
<li>تلامس الأنابيب طبقة الترشيح وتتوقف عن الحركة</li>
<li>يدفع فرق الضغط الأنابيب نحو جدار البئر ويلصقها بطبقة الترشيح</li>
</ol>

<div style="background: #dcfce7; padding: 1rem; border-radius: 8px; margin: 1.5rem 0;">
<h4 style="color: #166534; margin-bottom: 0.5rem;">📐 معادلة قوة الالتصاق التفاضلي:</h4>
<p style="font-family: monospace; font-size: 1.1rem; color: #166534; margin: 0;">
F = ΔP × A × μ
</p>
<p style="margin-top: 0.5rem; color: #15803d;">
حيث: F = قوة الالتصاق، ΔP = فرق الضغط، A = مساحة التلامس، μ = معامل الاحتكاك
</p>
</div>

<div style="background: #fef3c7; padding: 1rem; border-radius: 8px;">
<p style="margin: 0; color: #92400e;"><strong>⚠️ العوامل المؤثرة:</strong></p>
<ul style="margin: 0.5rem 0 0 0; padding-right: 1.25rem; color: #78350f;">
<li>كلما زاد Overbalance (فرق الضغط) زادت قوة الالتصاق</li>
<li>كلما زادت مساحة التلامس زادت القوة</li>
<li>كلما طالت فترة التوقف زاد الالتصاق</li>
<li>سماكة طبقة الترشيح تؤثر على قوة الالتصاق</li>
</ul>
</div>

</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 كيفية التمييز بين أنواع الانحشار</h3>

<div style="background: #e8f4fd; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 0.75rem; text-align: right; border-radius: 8px 0 0 0;">المعيار</th>
<th style="padding: 0.75rem; text-align: center;">انحشار ميكانيكي</th>
<th style="padding: 0.75rem; text-align: center; border-radius: 0 8px 0 0;">انحشار تفاضلي</th>
</tr>
</thead>
<tbody>
<tr style="background: white;">
<td style="padding: 0.75rem; border-bottom: 1px solid #e2e8f0;"><strong>الدوران</strong></td>
<td style="padding: 0.75rem; text-align: center; border-bottom: 1px solid #e2e8f0;">غير ممكن عادة</td>
<td style="padding: 0.75rem; text-align: center; border-bottom: 1px solid #e2e8f0;">ممكن غالباً (حر)</td>
</tr>
<tr style="background: #f7fafc;">
<td style="padding: 0.75rem; border-bottom: 1px solid #e2e8f0;"><strong>الضخ</strong></td>
<td style="padding: 0.75rem; text-align: center; border-bottom: 1px solid #e2e8f0;">قد يكون محدوداً</td>
<td style="padding: 0.75rem; text-align: center; border-bottom: 1px solid #e2e8f0;">طبيعي</td>
</tr>
<tr style="background: white;">
<td style="padding: 0.75rem; border-bottom: 1px solid #e2e8f0;"><strong>بداية المشكلة</strong></td>
<td style="padding: 0.75rem; text-align: center; border-bottom: 1px solid #e2e8f0;">أثناء الحركة (Trip)</td>
<td style="padding: 0.75rem; text-align: center; border-bottom: 1px solid #e2e8f0;">بعد التوقف (Static)</td>
</tr>
<tr style="background: #f7fafc;">
<td style="padding: 0.75rem;"><strong>نوع التكوين</strong></td>
<td style="padding: 0.75rem; text-align: center;">أي تكوين</td>
<td style="padding: 0.75rem; text-align: center;">تكوينات نفاذة</td>
</tr>
</tbody>
</table>
</div>

</section>`,
          keyTerms: [
            { term: 'Stuck Pipe (انحشار الأنابيب)', definition: 'عدم قدرة سلسلة الحفر على الحركة بحرية داخل البئر' },
            { term: 'Mechanical Sticking (الانحشار الميكانيكي)', definition: 'انحشار بسبب عائق فيزيائي في مسار البئر' },
            { term: 'Differential Sticking (الانحشار التفاضلي)', definition: 'انحشار بسبب فرق الضغط بين سائل الحفر والتكوين' },
            { term: 'Key Seating (التحزز)', definition: 'أخدود جانبي في جدار البئر يحبس أدوات الـ BHA' },
            { term: 'Filter Cake (طبقة الترشيح)', definition: 'طبقة من جزيئات سائل الحفر تترسب على جدار البئر' },
          ],
          practiceQuestion: {
            question: 'ما الفرق الرئيسي بين الانحشار الميكانيكي والانحشار التفاضلي من حيث إمكانية الدوران؟',
            options: [
              'الانحشار الميكانيكي يسمح بالدوران الحر، التفاضلي لا يسمح',
              'الانحشار التفاضلي يسمح بالدوران الحر غالباً، الميكانيكي لا يسمح عادة',
              'كلاهما لا يسمح بالدوران',
              'كلاهما يسمح بالدوران الحر'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Stuck Pipe - Basic Concepts and Mechanisms',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Introduction to Stuck Pipe</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<p style="font-size: 1.1rem; line-height: 1.8;">
<strong>Stuck Pipe</strong> is one of the most dangerous and costly drilling problems, occurring when the drillstring or any other equipment becomes unable to move freely inside the well - whether up, down, or rotating. It can result in enormous financial losses reaching millions of dollars and weeks of delay.
</p>
</div>

<div style="background: #fef2f2; padding: 1.25rem; border-radius: 10px; border-left: 4px solid #dc2626; margin: 1.5rem 0;">
<h4 style="color: #dc2626; margin-bottom: 0.75rem;">⚠️ Economic and Operational Impact:</h4>
<ul style="margin: 0; padding-left: 1.25rem; color: #7f1d1d;">
<li>Daily rig cost: $100,000 - $1,000,000+</li>
<li>Resolution time: hours to weeks</li>
<li>Potential for equipment loss and sidetrack requirement</li>
<li>Risks to crew safety and environment</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 Main Classification of Stuck Pipe Types</h3>

<p style="margin-bottom: 1rem; line-height: 1.8;">
Stuck pipe is divided into two main categories based on the mechanism of occurrence:
</p>

<div style="display: grid; gap: 1rem; margin-bottom: 1.5rem;">

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 10px; border: 2px solid #f59e0b;">
<h4 style="color: #92400e; margin-bottom: 0.75rem; font-size: 1.1rem;">🔸 Type 1: Mechanical Sticking</h4>
<p style="margin-bottom: 0.75rem; color: #78350f;">Occurs due to a physical obstruction preventing pipe movement:</p>
<ul style="margin: 0; padding-left: 1.25rem; color: #78350f;">
<li><strong>Key Seating:</strong> Side erosion in wellbore that traps BHA</li>
<li><strong>Undergauge Hole:</strong> Wellbore diameter smaller than tools</li>
<li><strong>Ledges:</strong> Protrusions in wellbore wall</li>
<li><strong>Junk in Hole:</strong> Metal objects fallen in well</li>
<li><strong>Packoff:</strong> Cuttings accumulation around pipe</li>
<li><strong>Wellbore Geometry:</strong> Well path geometry issues</li>
</ul>
</div>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 10px; border: 2px solid #3b82f6;">
<h4 style="color: #1e40af; margin-bottom: 0.75rem; font-size: 1.1rem;">🔹 Type 2: Differential Sticking</h4>
<p style="margin-bottom: 0.75rem; color: #1e3a8a;">Occurs due to pressure differential between drilling fluid and formation:</p>
<ul style="margin: 0; padding-left: 1.25rem; color: #1e3a8a;">
<li><strong>Differential Pressure:</strong> Mud pressure higher than formation pressure</li>
<li><strong>Filter Cake Contact:</strong> Pipe adhering to filter cake layer</li>
<li><strong>Permeable Formation:</strong> Permeable formations (sands, carbonates)</li>
<li><strong>Static Conditions:</strong> Movement stopped for extended period</li>
</ul>
</div>

</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 Mechanical Sticking in Detail</h3>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">

<h4 style="color: #1e3a5f; margin-bottom: 1rem;">1️⃣ Key Seating</h4>

<p style="margin-bottom: 1rem; line-height: 1.8;">
Occurs in directional wells when drill pipe rubs against the wellbore wall at a fixed point (usually at inclination change - Dogleg). With continuous rotation, the wellbore wall erodes and a narrow groove forms the size of the drill pipe. When pulling out, larger diameter BHA tools become stuck in this groove.
</p>

<div style="background: #e8f4fd; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<p style="margin: 0; color: #1e40af;"><strong>💡 Warning Signs:</strong></p>
<ul style="margin: 0.5rem 0 0 0; padding-left: 1.25rem; color: #1e40af;">
<li>Increased Overpull at specific well depth</li>
<li>High Dogleg Severity (> 3°/100ft)</li>
<li>Problem recurring at same depth</li>
</ul>
</div>

<h4 style="color: #1e3a5f; margin: 1.5rem 0 1rem 0;">2️⃣ Undergauge Hole</h4>

<p style="margin-bottom: 1rem; line-height: 1.8;">
Occurs when shale formations swell due to reaction with drilling fluid or due to formation stresses. Can also occur due to bit wear and failure to drill the required diameter.
</p>

<h4 style="color: #1e3a5f; margin: 1.5rem 0 1rem 0;">3️⃣ Packoff / Bridges</h4>

<p style="margin-bottom: 1rem; line-height: 1.8;">
Occurs due to cuttings accumulation or wellbore collapse around the pipe. Common in:
</p>
<ul style="margin: 0; padding-left: 1.25rem;">
<li>High Angle Wells</li>
<li>Unstable formations</li>
<li>Poor Hole Cleaning</li>
</ul>

</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 Differential Sticking</h3>

<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">

<p style="margin-bottom: 1rem; line-height: 1.8;">
Considered one of the most common and dangerous types of sticking. Occurs when:
</p>

<ol style="margin: 0; padding-left: 1.25rem; line-height: 2;">
<li>Hydrostatic Pressure of drilling fluid is higher than Formation Pressure</li>
<li>Filter Cake forms on wellbore wall in permeable formations</li>
<li>Pipe contacts filter cake and stops moving</li>
<li>Pressure differential pushes pipe toward wellbore wall and adheres it to filter cake</li>
</ol>

<div style="background: #dcfce7; padding: 1rem; border-radius: 8px; margin: 1.5rem 0;">
<h4 style="color: #166534; margin-bottom: 0.5rem;">📐 Differential Sticking Force Equation:</h4>
<p style="font-family: monospace; font-size: 1.1rem; color: #166534; margin: 0;">
F = ΔP × A × μ
</p>
<p style="margin-top: 0.5rem; color: #15803d;">
Where: F = Sticking force, ΔP = Differential pressure, A = Contact area, μ = Friction coefficient
</p>
</div>

</div>

</section>`,
          keyTerms: [
            { term: 'Stuck Pipe', definition: 'Inability of drillstring to move freely inside the well' },
            { term: 'Mechanical Sticking', definition: 'Sticking caused by physical obstruction in wellbore path' },
            { term: 'Differential Sticking', definition: 'Sticking caused by pressure differential between mud and formation' },
            { term: 'Key Seating', definition: 'Side groove in wellbore wall that traps BHA tools' },
            { term: 'Filter Cake', definition: 'Layer of mud particles deposited on wellbore wall' },
          ],
          practiceQuestion: {
            question: 'What is the main difference between mechanical and differential sticking regarding rotation ability?',
            options: [
              'Mechanical sticking allows free rotation, differential does not',
              'Differential sticking usually allows free rotation, mechanical usually does not',
              'Both do not allow rotation',
              'Both allow free rotation'
            ],
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
          title: 'استراتيجيات الوقاية من انحشار الأنابيب',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 الوقاية خير من العلاج</h2>

<div style="background: linear-gradient(135deg, #059669 0%, #10b981 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<p style="font-size: 1.1rem; line-height: 1.8;">
<strong>الوقاية من انحشار الأنابيب</strong> هي أكثر فعالية وأقل تكلفة بكثير من محاولة تحرير أنابيب منحشرة. تكلفة الوقاية لا تتجاوز آلاف الدولارات، بينما تكلفة الانحشار قد تصل إلى الملايين. في هذا اليوم سنتعلم الاستراتيجيات العملية للوقاية.
</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 الوقاية من الانحشار الميكانيكي</h3>

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">

<h4 style="color: #92400e; margin-bottom: 1rem;">1️⃣ الوقاية من Key Seating</h4>

<div style="background: white; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<ul style="margin: 0; padding-right: 1.25rem; line-height: 2;">
<li><strong>تصميم المسار بعناية:</strong> الحفاظ على Dogleg Severity أقل من 3°/100ft</li>
<li><strong>استخدام String Reamers:</strong> موسعات في سلسلة الحفر لتوسيع الأخاديد</li>
<li><strong>Wiper Trips دورية:</strong> رحلات تنظيف منتظمة في المناطق المشتبه بها</li>
<li><strong>مراقبة Overpull:</strong> تسجيل أي زيادة في قوة السحب ومعالجتها فوراً</li>
<li><strong>حفر Pilot Hole:</strong> في المناطق عالية الخطورة</li>
</ul>
</div>

<h4 style="color: #92400e; margin: 1.5rem 0 1rem 0;">2️⃣ الوقاية من Undergauge Hole</h4>

<div style="background: white; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<ul style="margin: 0; padding-right: 1.25rem; line-height: 2;">
<li><strong>استخدام سوائل حفر متوافقة:</strong> تقليل تفاعل الطين مع التكوينات الحساسة</li>
<li><strong>KCl أو سوائل أساس زيتي:</strong> للتكوينات الطينية التفاعلية</li>
<li><strong>الحفر المتوازن:</strong> تجنب ضغوط زائدة على التكوين</li>
<li><strong>فحص رأس الحفر:</strong> مراقبة تآكل القطر وتبديله في الوقت المناسب</li>
</ul>
</div>

<h4 style="color: #92400e; margin: 1.5rem 0 1rem 0;">3️⃣ الوقاية من Packoff</h4>

<div style="background: white; padding: 1rem; border-radius: 8px;">
<ul style="margin: 0; padding-right: 1.25rem; line-height: 2;">
<li><strong>تنظيف البئر الجيد:</strong> معدل تدفق كافٍ ولزوجة مناسبة</li>
<li><strong>Circulate Bottoms Up:</strong> قبل أي رحلة (Trip)</li>
<li><strong>Short Trips:</strong> رحلات قصيرة دورية في الآبار العميقة أو المائلة</li>
<li><strong>تحسين خصائص السائل:</strong> زيادة قدرة حمل الفتات</li>
<li><strong>تقليل ROP:</strong> عند الحاجة لتحسين التنظيف</li>
</ul>
</div>

</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 الوقاية من الانحشار التفاضلي</h3>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">

<h4 style="color: #1e40af; margin-bottom: 1rem;">1️⃣ التحكم في Overbalance</h4>

<div style="background: white; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<ul style="margin: 0; padding-right: 1.25rem; line-height: 2;">
<li><strong>تقليل وزن السائل:</strong> استخدام أقل وزن ممكن مع الحفاظ على التحكم بالبئر</li>
<li><strong>مراقبة ECD:</strong> التحكم في الضغط الديناميكي المكافئ</li>
<li><strong>استخدام MPD:</strong> الحفر بالضغط المُدار عند الحاجة</li>
<li><strong>تجنب الـ Overbalance الزائد:</strong> خاصة في التكوينات النفاذة</li>
</ul>
</div>

<h4 style="color: #1e40af; margin: 1.5rem 0 1rem 0;">2️⃣ تحسين خصائص طبقة الترشيح</h4>

<div style="background: white; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<ul style="margin: 0; padding-right: 1.25rem; line-height: 2;">
<li><strong>تقليل سماكة Filter Cake:</strong> استخدام مواد مضافة مناسبة</li>
<li><strong>تحسين الـ Lubricity:</strong> إضافة مواد تشحيم للسائل</li>
<li><strong>استخدام سوائل أساس زيتي:</strong> filter cake أرق وأكثر زلقاً</li>
<li><strong>مراقبة HPHT Filtrate:</strong> اختبار الترشيح في درجات حرارة عالية</li>
</ul>
</div>

<h4 style="color: #1e40af; margin: 1.5rem 0 1rem 0;">3️⃣ الممارسات التشغيلية</h4>

<div style="background: white; padding: 1rem; border-radius: 8px;">
<ul style="margin: 0; padding-right: 1.25rem; line-height: 2;">
<li><strong>🔴 تجنب التوقف:</strong> أهم قاعدة - الحركة المستمرة في التكوينات النفاذة</li>
<li><strong>الدوران والتردد:</strong> حتى أثناء التوقف القسري</li>
<li><strong>تقليل وقت الاتصالات:</strong> عدم ترك الأنابيب ساكنة</li>
<li><strong>Pump Picks:</strong> رفعات متكررة مع الضخ</li>
<li><strong>وضع Spotting Fluid:</strong> قبل التوقفات المتوقعة</li>
</ul>
</div>

</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 مؤشرات التحذير المبكر</h3>

<div style="background: #fef2f2; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<p style="margin-bottom: 1rem; font-weight: bold; color: #991b1b;">⚠️ علامات يجب الانتباه لها فوراً:</p>

<div style="display: grid; gap: 0.75rem;">
<div style="background: white; padding: 1rem; border-radius: 8px; border-right: 3px solid #dc2626;">
<strong>زيادة في Drag / Overpull:</strong> مقاومة متزايدة عند السحب أو الإنزال
</div>
<div style="background: white; padding: 1rem; border-radius: 8px; border-right: 3px solid #dc2626;">
<strong>تذبذب في Torque:</strong> تغيرات غير طبيعية في عزم الدوران
</div>
<div style="background: white; padding: 1rem; border-radius: 8px; border-right: 3px solid #dc2626;">
<strong>مشاكل في الضخ:</strong> زيادة في ضغط المضخة أو انخفاض في التدفق
</div>
<div style="background: white; padding: 1rem; border-radius: 8px; border-right: 3px solid #dc2626;">
<strong>فتات غير طبيعي:</strong> كمية أو شكل أو حجم غير متوقع
</div>
<div style="background: white; padding: 1rem; border-radius: 8px; border-right: 3px solid #dc2626;">
<strong>انهيارات:</strong> علامات عدم استقرار جدار البئر
</div>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 القاعدة الذهبية: Keep the Pipe Moving!</h3>

<div style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<p style="font-size: 1.1rem; line-height: 1.8; margin: 0;">
<strong>🔑 القاعدة الذهبية:</strong> في التكوينات عالية الخطورة، أبقِ الأنابيب متحركة دائماً. إذا اضطررت للتوقف، اضخ وحرّك (Rotate & Reciprocate). لا تترك الأنابيب ساكنة لأكثر من 3-5 دقائق في المناطق النفاذة.
</p>
</div>

</section>`,
          keyTerms: [
            { term: 'Wiper Trip', definition: 'رحلة تنظيف قصيرة لإزالة التضيقات والفتات' },
            { term: 'String Reamer', definition: 'أداة توسيع في سلسلة الحفر لتوسيع الأخاديد' },
            { term: 'Overbalance', definition: 'فرق الضغط الإيجابي بين سائل الحفر وضغط التكوين' },
            { term: 'Lubricity', definition: 'قدرة السائل على التشحيم وتقليل الاحتكاك' },
            { term: 'Spotting Fluid', definition: 'سائل متخصص يُضخ في منطقة الانحشار لتحرير الأنابيب' },
          ],
          practiceQuestion: {
            question: 'ما هي أهم قاعدة للوقاية من الانحشار التفاضلي في التكوينات النفاذة؟',
            options: [
              'زيادة وزن سائل الحفر',
              'إبقاء الأنابيب متحركة دائماً',
              'استخدام رؤوس حفر أصغر',
              'زيادة سرعة الضخ فقط'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Stuck Pipe Prevention Strategies',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Prevention is Better Than Cure</h2>

<div style="background: linear-gradient(135deg, #059669 0%, #10b981 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<p style="font-size: 1.1rem; line-height: 1.8;">
<strong>Stuck pipe prevention</strong> is far more effective and less costly than attempting to free stuck pipe. Prevention costs thousands of dollars, while stuck pipe incidents can cost millions. Today we'll learn practical prevention strategies.
</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 Mechanical Sticking Prevention</h3>

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">

<h4 style="color: #92400e; margin-bottom: 1rem;">1️⃣ Key Seating Prevention</h4>

<div style="background: white; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<ul style="margin: 0; padding-left: 1.25rem; line-height: 2;">
<li><strong>Careful well path design:</strong> Maintain Dogleg Severity below 3°/100ft</li>
<li><strong>Use String Reamers:</strong> Reamers in drillstring to widen grooves</li>
<li><strong>Regular Wiper Trips:</strong> Regular cleaning trips in suspected areas</li>
<li><strong>Monitor Overpull:</strong> Record any increase in pull force and address immediately</li>
<li><strong>Drill Pilot Hole:</strong> In high-risk areas</li>
</ul>
</div>

<h4 style="color: #92400e; margin: 1.5rem 0 1rem 0;">2️⃣ Undergauge Hole Prevention</h4>

<div style="background: white; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<ul style="margin: 0; padding-left: 1.25rem; line-height: 2;">
<li><strong>Use compatible drilling fluids:</strong> Reduce mud reaction with sensitive formations</li>
<li><strong>KCl or oil-based fluids:</strong> For reactive shale formations</li>
<li><strong>Balanced drilling:</strong> Avoid excessive formation pressure</li>
<li><strong>Bit inspection:</strong> Monitor gauge wear and replace timely</li>
</ul>
</div>

<h4 style="color: #92400e; margin: 1.5rem 0 1rem 0;">3️⃣ Packoff Prevention</h4>

<div style="background: white; padding: 1rem; border-radius: 8px;">
<ul style="margin: 0; padding-left: 1.25rem; line-height: 2;">
<li><strong>Good hole cleaning:</strong> Sufficient flow rate and proper viscosity</li>
<li><strong>Circulate Bottoms Up:</strong> Before any trip</li>
<li><strong>Short Trips:</strong> Regular short trips in deep or deviated wells</li>
<li><strong>Improve fluid properties:</strong> Increase cuttings carrying capacity</li>
<li><strong>Reduce ROP:</strong> When needed to improve cleaning</li>
</ul>
</div>

</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 Differential Sticking Prevention</h3>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">

<h4 style="color: #1e40af; margin-bottom: 1rem;">1️⃣ Overbalance Control</h4>

<div style="background: white; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<ul style="margin: 0; padding-left: 1.25rem; line-height: 2;">
<li><strong>Reduce mud weight:</strong> Use minimum weight while maintaining well control</li>
<li><strong>Monitor ECD:</strong> Control equivalent circulating density</li>
<li><strong>Use MPD:</strong> Managed Pressure Drilling when needed</li>
<li><strong>Avoid excessive Overbalance:</strong> Especially in permeable formations</li>
</ul>
</div>

<h4 style="color: #1e40af; margin: 1.5rem 0 1rem 0;">2️⃣ Filter Cake Properties Improvement</h4>

<div style="background: white; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<ul style="margin: 0; padding-left: 1.25rem; line-height: 2;">
<li><strong>Reduce Filter Cake thickness:</strong> Use appropriate additives</li>
<li><strong>Improve Lubricity:</strong> Add lubricants to the fluid</li>
<li><strong>Use oil-based fluids:</strong> Thinner and more slippery filter cake</li>
<li><strong>Monitor HPHT Filtrate:</strong> High temperature filtration testing</li>
</ul>
</div>

<h4 style="color: #1e40af; margin: 1.5rem 0 1rem 0;">3️⃣ Operational Practices</h4>

<div style="background: white; padding: 1rem; border-radius: 8px;">
<ul style="margin: 0; padding-left: 1.25rem; line-height: 2;">
<li><strong>🔴 Avoid stopping:</strong> Most important rule - continuous movement in permeable formations</li>
<li><strong>Rotate and reciprocate:</strong> Even during forced stops</li>
<li><strong>Reduce connection time:</strong> Don't leave pipe static</li>
<li><strong>Pump Picks:</strong> Frequent lifts with pumping</li>
<li><strong>Place Spotting Fluid:</strong> Before expected stops</li>
</ul>
</div>

</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 The Golden Rule: Keep the Pipe Moving!</h3>

<div style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<p style="font-size: 1.1rem; line-height: 1.8; margin: 0;">
<strong>🔑 Golden Rule:</strong> In high-risk formations, always keep the pipe moving. If you must stop, pump and move (Rotate & Reciprocate). Never leave pipe static for more than 3-5 minutes in permeable zones.
</p>
</div>

</section>`,
          keyTerms: [
            { term: 'Wiper Trip', definition: 'Short cleaning trip to remove restrictions and cuttings' },
            { term: 'String Reamer', definition: 'Reaming tool in drillstring to widen grooves' },
            { term: 'Overbalance', definition: 'Positive pressure differential between mud and formation pressure' },
            { term: 'Lubricity', definition: 'Fluid ability to lubricate and reduce friction' },
            { term: 'Spotting Fluid', definition: 'Specialized fluid pumped to stuck zone to free pipe' },
          ],
          practiceQuestion: {
            question: 'What is the most important rule for preventing differential sticking in permeable formations?',
            options: [
              'Increase mud weight',
              'Keep the pipe moving at all times',
              'Use smaller drill bits',
              'Increase pump rate only'
            ],
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
          title: 'تقنيات تحرير الأنابيب المنحشرة',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 الاستجابة الأولية للانحشار</h2>

<div style="background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<p style="font-size: 1.1rem; line-height: 1.8;">
<strong>⏱️ الوقت حاسم!</strong> كل دقيقة تمر والأنابيب منحشرة تزيد من صعوبة التحرير. الإجراء السريع والمدروس في الدقائق الأولى قد يكون الفرق بين التحرير السريع وأسابيع من العمليات المكلفة.
</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 خطوات الاستجابة الفورية</h3>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">

<div style="display: grid; gap: 1rem;">

<div style="background: #fee2e2; padding: 1rem; border-radius: 8px; border-right: 4px solid #dc2626;">
<h4 style="color: #991b1b; margin-bottom: 0.5rem;">الخطوة 1: لا تتوقف عن المحاولة!</h4>
<p style="margin: 0; color: #7f1d1d;">استمر في محاولة التحريك (سحب، دفع، دوران) مع الضخ. الأنابيب المتحركة أسهل في التحرير.</p>
</div>

<div style="background: #fef3c7; padding: 1rem; border-radius: 8px; border-right: 4px solid #f59e0b;">
<h4 style="color: #92400e; margin-bottom: 0.5rem;">الخطوة 2: سجّل البيانات</h4>
<p style="margin: 0; color: #78350f;">• عمق الانحشار • الوزن على الأنابيب • عزم الدوران • ضغط الضخ • آخر عملية قبل الانحشار</p>
</div>

<div style="background: #dbeafe; padding: 1rem; border-radius: 8px; border-right: 4px solid #3b82f6;">
<h4 style="color: #1e40af; margin-bottom: 0.5rem;">الخطوة 3: حدد نوع الانحشار</h4>
<p style="margin: 0; color: #1e3a8a;">• هل يمكن الدوران؟ • هل يمكن الضخ؟ • أين حدث (عمق)؟ • متى حدث (أثناء الحركة أم بعد التوقف)؟</p>
</div>

<div style="background: #dcfce7; padding: 1rem; border-radius: 8px; border-right: 4px solid #22c55e;">
<h4 style="color: #166534; margin-bottom: 0.5rem;">الخطوة 4: اختر طريقة التحرير المناسبة</h4>
<p style="margin: 0; color: #15803d;">بناءً على نوع الانحشار، اختر التقنية الأنسب من الخيارات المتاحة.</p>
</div>

</div>

</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 تقنيات تحرير الانحشار الميكانيكي</h3>

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">

<h4 style="color: #92400e; margin-bottom: 1rem;">1️⃣ Jarring (استخدام المطارق)</h4>

<div style="background: white; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="margin-bottom: 0.75rem;"><strong>الـ Jar</strong> هو أداة ميكانيكية أو هيدروليكية في سلسلة الحفر توجه ضربات قوية لتحرير الأنابيب.</p>
<ul style="margin: 0; padding-right: 1.25rem;">
<li><strong>Up Jar:</strong> ضربات للأعلى - الأكثر شيوعاً</li>
<li><strong>Down Jar:</strong> ضربات للأسفل - للانحشار في القاع</li>
<li><strong>Hydraulic Jar:</strong> يعمل تلقائياً عند الشد</li>
<li><strong>Mechanical Jar:</strong> يحتاج لتفعيل يدوي</li>
</ul>
</div>

<div style="background: #fef2f2; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="margin: 0; color: #991b1b;"><strong>⚠️ تحذير:</strong> الـ Jarring المفرط قد يتسبب في كسر الأنابيب أو إتلاف المعدات. التزم بحدود القوة الموصى بها.</p>
</div>

<h4 style="color: #92400e; margin: 1.5rem 0 1rem 0;">2️⃣ Working the Pipe (تشغيل الأنابيب)</h4>

<div style="background: white; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<ul style="margin: 0; padding-right: 1.25rem; line-height: 2;">
<li><strong>Rotation:</strong> دوران متقطع أو مستمر</li>
<li><strong>Reciprocation:</strong> تردد للأعلى والأسفل</li>
<li><strong>Pumping:</strong> ضخ مستمر لتنظيف المنطقة</li>
<li><strong>Combined Actions:</strong> جمع كل الحركات معاً</li>
</ul>
</div>

<h4 style="color: #92400e; margin: 1.5rem 0 1rem 0;">3️⃣ Washing Over (الغسل الخارجي)</h4>

<div style="background: white; padding: 1rem; border-radius: 8px;">
<p style="margin-bottom: 0.75rem;">استخدام Washover Pipe لحفر حول الأنابيب المنحشرة وتحريرها من الخارج. يستخدم عندما تفشل الطرق الأخرى.</p>
</div>

</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 تقنيات تحرير الانحشار التفاضلي</h3>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">

<h4 style="color: #1e40af; margin-bottom: 1rem;">1️⃣ Spotting Fluid (سائل التحرير)</h4>

<div style="background: white; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="margin-bottom: 1rem;">الطريقة الأكثر فعالية للانحشار التفاضلي. يتم ضخ سائل خاص حول منطقة الانحشار لتقليل قوة الالتصاق.</p>

<div style="display: grid; gap: 0.75rem;">
<div style="background: #f0fdf4; padding: 0.75rem; border-radius: 6px;">
<strong>Oil-Based Spotting Fluid:</strong> الأكثر شيوعاً - يخترق طبقة الترشيح ويقلل الاحتكاك
</div>
<div style="background: #f0fdf4; padding: 0.75rem; border-radius: 6px;">
<strong>Acid Spotting Fluid:</strong> للتكوينات الكربوناتية - يذيب طبقة الترشيح
</div>
<div style="background: #f0fdf4; padding: 0.75rem; border-radius: 6px;">
<strong>Weighted Spotting Fluid:</strong> لتقليل الـ Overbalance موضعياً
</div>
</div>
</div>

<div style="background: #e8f4fd; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<h5 style="color: #1e40af; margin-bottom: 0.5rem;">إجراءات Spotting:</h5>
<ol style="margin: 0; padding-right: 1.25rem; color: #1e3a8a;">
<li>حساب حجم السائل المطلوب لتغطية منطقة الانحشار</li>
<li>ضخ السائل ببطء لوضعه في المكان الصحيح</li>
<li>الانتظار (Soak Time) - عادة 2-8 ساعات</li>
<li>محاولة التحريك بشكل دوري</li>
<li>تكرار العملية إذا لزم الأمر</li>
</ol>
</div>

<h4 style="color: #1e40af; margin: 1.5rem 0 1rem 0;">2️⃣ Reducing Overbalance</h4>

<div style="background: white; padding: 1rem; border-radius: 8px;">
<ul style="margin: 0; padding-right: 1.25rem; line-height: 2;">
<li><strong>تخفيف وزن السائل:</strong> بحذر شديد لتجنب الـ Kick</li>
<li><strong>ضخ سائل أخف:</strong> حول منطقة الانحشار</li>
<li><strong>استخدام Nitrogen:</strong> لتخفيف عمود السائل (متقدم)</li>
</ul>
</div>

</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 متى نقرر القطع والتخلي؟</h3>

<div style="background: #fef2f2; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<p style="margin-bottom: 1rem; color: #991b1b;">
<strong>القرار الصعب:</strong> أحياناً يكون التخلي عن جزء من الأنابيب (Backoff) أفضل من الاستمرار في المحاولات الفاشلة.
</p>

<ul style="margin: 0; padding-right: 1.25rem; color: #7f1d1d;">
<li>فشل جميع محاولات التحرير لأيام</li>
<li>تكلفة الاستمرار تتجاوز تكلفة Sidetrack</li>
<li>خطر على سلامة البئر أو المعدات</li>
<li>تلف في الأنابيب يمنع الاستمرار</li>
</ul>
</div>

</section>`,
          keyTerms: [
            { term: 'Jar (المطرقة)', definition: 'أداة في سلسلة الحفر توجه ضربات لتحرير الأنابيب المنحشرة' },
            { term: 'Spotting Fluid (سائل التحرير)', definition: 'سائل متخصص يُضخ حول منطقة الانحشار لتقليل قوة الالتصاق' },
            { term: 'Soak Time', definition: 'فترة انتظار سائل التحرير ليعمل على إذابة طبقة الترشيح' },
            { term: 'Backoff', definition: 'فك الوصلة الملولبة لفصل الأنابيب الحرة عن المنحشرة' },
            { term: 'Washover', definition: 'حفر حول الأنابيب المنحشرة من الخارج لتحريرها' },
          ],
          practiceQuestion: {
            question: 'ما هي أفضل تقنية لتحرير الانحشار التفاضلي؟',
            options: [
              'استخدام Jar فقط',
              'زيادة وزن السائل',
              'ضخ Spotting Fluid والانتظار',
              'السحب بأقصى قوة'
            ],
            correctAnswer: 2,
          },
        },
        en: {
          title: 'Stuck Pipe Freeing Techniques',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Initial Stuck Pipe Response</h2>

<div style="background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<p style="font-size: 1.1rem; line-height: 1.8;">
<strong>⏱️ Time is Critical!</strong> Every minute the pipe remains stuck increases freeing difficulty. Quick and calculated action in the first minutes can be the difference between quick release and weeks of costly operations.
</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 Immediate Response Steps</h3>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">

<div style="display: grid; gap: 1rem;">

<div style="background: #fee2e2; padding: 1rem; border-radius: 8px; border-left: 4px solid #dc2626;">
<h4 style="color: #991b1b; margin-bottom: 0.5rem;">Step 1: Don't Stop Trying!</h4>
<p style="margin: 0; color: #7f1d1d;">Continue attempting movement (pull, push, rotate) while pumping. Moving pipe is easier to free.</p>
</div>

<div style="background: #fef3c7; padding: 1rem; border-radius: 8px; border-left: 4px solid #f59e0b;">
<h4 style="color: #92400e; margin-bottom: 0.5rem;">Step 2: Record Data</h4>
<p style="margin: 0; color: #78350f;">• Stuck depth • Weight on pipe • Torque • Pump pressure • Last operation before sticking</p>
</div>

<div style="background: #dbeafe; padding: 1rem; border-radius: 8px; border-left: 4px solid #3b82f6;">
<h4 style="color: #1e40af; margin-bottom: 0.5rem;">Step 3: Identify Sticking Type</h4>
<p style="margin: 0; color: #1e3a8a;">• Can rotate? • Can pump? • Where (depth)? • When (during movement or after stop)?</p>
</div>

<div style="background: #dcfce7; padding: 1rem; border-radius: 8px; border-left: 4px solid #22c55e;">
<h4 style="color: #166534; margin-bottom: 0.5rem;">Step 4: Choose Appropriate Freeing Method</h4>
<p style="margin: 0; color: #15803d;">Based on sticking type, select the most suitable technique from available options.</p>
</div>

</div>

</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 Mechanical Sticking Freeing Techniques</h3>

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">

<h4 style="color: #92400e; margin-bottom: 1rem;">1️⃣ Jarring</h4>

<div style="background: white; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="margin-bottom: 0.75rem;"><strong>The Jar</strong> is a mechanical or hydraulic tool in the drillstring that delivers powerful blows to free pipe.</p>
<ul style="margin: 0; padding-left: 1.25rem;">
<li><strong>Up Jar:</strong> Upward blows - most common</li>
<li><strong>Down Jar:</strong> Downward blows - for bottom sticking</li>
<li><strong>Hydraulic Jar:</strong> Works automatically under tension</li>
<li><strong>Mechanical Jar:</strong> Requires manual activation</li>
</ul>
</div>

<h4 style="color: #92400e; margin: 1.5rem 0 1rem 0;">2️⃣ Working the Pipe</h4>

<div style="background: white; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<ul style="margin: 0; padding-left: 1.25rem; line-height: 2;">
<li><strong>Rotation:</strong> Intermittent or continuous rotation</li>
<li><strong>Reciprocation:</strong> Up and down movement</li>
<li><strong>Pumping:</strong> Continuous pumping to clean area</li>
<li><strong>Combined Actions:</strong> Combine all movements together</li>
</ul>
</div>

</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 Differential Sticking Freeing Techniques</h3>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">

<h4 style="color: #1e40af; margin-bottom: 1rem;">1️⃣ Spotting Fluid</h4>

<div style="background: white; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="margin-bottom: 1rem;">Most effective method for differential sticking. Special fluid is pumped around the stuck zone to reduce adhesion force.</p>

<div style="display: grid; gap: 0.75rem;">
<div style="background: #f0fdf4; padding: 0.75rem; border-radius: 6px;">
<strong>Oil-Based Spotting Fluid:</strong> Most common - penetrates filter cake and reduces friction
</div>
<div style="background: #f0fdf4; padding: 0.75rem; border-radius: 6px;">
<strong>Acid Spotting Fluid:</strong> For carbonate formations - dissolves filter cake
</div>
<div style="background: #f0fdf4; padding: 0.75rem; border-radius: 6px;">
<strong>Weighted Spotting Fluid:</strong> To locally reduce Overbalance
</div>
</div>
</div>

</div>

</section>`,
          keyTerms: [
            { term: 'Jar', definition: 'Tool in drillstring that delivers blows to free stuck pipe' },
            { term: 'Spotting Fluid', definition: 'Specialized fluid pumped around stuck zone to reduce adhesion' },
            { term: 'Soak Time', definition: 'Waiting period for spotting fluid to dissolve filter cake' },
            { term: 'Backoff', definition: 'Unscrewing threaded connection to separate free pipe from stuck' },
            { term: 'Washover', definition: 'Drilling around stuck pipe from outside to free it' },
          ],
          practiceQuestion: {
            question: 'What is the best technique for freeing differential sticking?',
            options: [
              'Using Jar only',
              'Increasing mud weight',
              'Pumping Spotting Fluid and waiting',
              'Pulling with maximum force'
            ],
            correctAnswer: 2,
          },
        },
      },
    },
    {
      day: 4,
      type: 'learning',
      content: {
        ar: {
          title: 'تحليل الحالات ودراسات ميدانية',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 التعلم من الحالات الحقيقية</h2>

<div style="background: linear-gradient(135deg, #7c3aed 0%, #8b5cf6 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<p style="font-size: 1.1rem; line-height: 1.8;">
تحليل الحالات الميدانية الحقيقية هو أفضل طريقة لفهم تعقيدات انحشار الأنابيب وتطوير القدرة على اتخاذ القرارات السريعة والصحيحة في المواقف الحرجة.
</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 الحالة الأولى: انحشار تفاضلي في بئر استكشافي</h3>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem; border-right: 4px solid #3b82f6;">

<h4 style="color: #1e3a5f; margin-bottom: 1rem;">🔍 الوضع:</h4>
<ul style="margin: 0 0 1rem 0; padding-right: 1.25rem; line-height: 1.8;">
<li>بئر استكشافي في الخليج العربي</li>
<li>العمق: 4,200 متر</li>
<li>التكوين: رمال نفاذة عالية (Sandstone)</li>
<li>وزن السائل: 12.5 ppg (Overbalance ~800 psi)</li>
<li>توقف الحفر لاتصالات لمدة 15 دقيقة</li>
</ul>

<h4 style="color: #1e3a5f; margin-bottom: 1rem;">⚠️ ما حدث:</h4>
<p style="margin-bottom: 1rem;">بعد الانتهاء من الاتصالات، لم تتمكن الأنابيب من التحرك للأسفل. الدوران كان حراً لكن السحب مقيد بـ 50,000 lbs overpull.</p>

<h4 style="color: #1e3a5f; margin-bottom: 1rem;">✅ الحل:</h4>
<ol style="margin: 0; padding-right: 1.25rem; line-height: 2;">
<li>تشخيص: انحشار تفاضلي (دوران حر + توقف سابق + تكوين نفاذ)</li>
<li>ضخ 30 برميل Oil-Based Spotting Fluid</li>
<li>انتظار 4 ساعات مع تحريك دوري</li>
<li>تحرير ناجح بعد المحاولة الثانية</li>
</ol>

<h4 style="color: #1e3a5f; margin: 1rem 0;">📚 الدروس المستفادة:</h4>
<div style="background: #dcfce7; padding: 1rem; border-radius: 8px;">
<ul style="margin: 0; padding-right: 1.25rem; color: #166534;">
<li>15 دقيقة توقف كافية لحدوث الانحشار التفاضلي</li>
<li>يجب تحريك الأنابيب حتى أثناء الاتصالات</li>
<li>الـ Spotting Fluid فعال جداً إذا استُخدم مبكراً</li>
</ul>
</div>

</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 الحالة الثانية: Key Seating في بئر موجه</h3>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem; border-right: 4px solid #f59e0b;">

<h4 style="color: #1e3a5f; margin-bottom: 1rem;">🔍 الوضع:</h4>
<ul style="margin: 0 0 1rem 0; padding-right: 1.25rem; line-height: 1.8;">
<li>بئر موجه بميل 45°</li>
<li>Dogleg Severity: 5°/100ft عند عمق 2,800 متر</li>
<li>تكرار مشاكل Overpull عند نفس العمق</li>
</ul>

<h4 style="color: #1e3a5f; margin-bottom: 1rem;">⚠️ ما حدث:</h4>
<p style="margin-bottom: 1rem;">أثناء السحب، انحشرت الـ BHA (قطر 6.75") عند نقطة الـ Dogleg. لم يكن الدوران ممكناً.</p>

<h4 style="color: #1e3a5f; margin-bottom: 1rem;">✅ الحل:</h4>
<ol style="margin: 0; padding-right: 1.25rem; line-height: 2;">
<li>تشخيص: Key Seating (دوران مقيد + موقع Dogleg)</li>
<li>Jarring Down لإرجاع الـ BHA للخلف</li>
<li>Reaming لتوسيع منطقة الأخدود</li>
<li>تركيب String Reamer للرحلات القادمة</li>
</ol>

<h4 style="color: #1e3a5f; margin: 1rem 0;">📚 الدروس المستفادة:</h4>
<div style="background: #fef3c7; padding: 1rem; border-radius: 8px;">
<ul style="margin: 0; padding-right: 1.25rem; color: #78350f;">
<li>Dogleg > 3°/100ft يزيد خطر Key Seating بشكل كبير</li>
<li>String Reamer وقائي ضروري في الآبار الموجهة</li>
<li>Wiper Trips منتظمة تمنع تشكل الأخاديد</li>
</ul>
</div>

</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 الحالة الثالثة: Packoff بسبب ضعف تنظيف البئر</h3>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem; border-right: 4px solid #22c55e;">

<h4 style="color: #1e3a5f; margin-bottom: 1rem;">🔍 الوضع:</h4>
<ul style="margin: 0 0 1rem 0; padding-right: 1.25rem; line-height: 1.8;">
<li>بئر أفقي بميل 85°</li>
<li>ROP عالي: 45 m/hr</li>
<li>معدل تدفق: 550 gpm (أقل من الموصى)</li>
<li>تراكم فتات على Shale Shaker</li>
</ul>

<h4 style="color: #1e3a5f; margin-bottom: 1rem;">⚠️ ما حدث:</h4>
<p style="margin-bottom: 1rem;">انسداد حول الأنابيب بسبب تراكم الفتات. ارتفاع في ضغط المضخة وفقدان القدرة على الحركة.</p>

<h4 style="color: #1e3a5f; margin-bottom: 1rem;">✅ الحل:</h4>
<ol style="margin: 0; padding-right: 1.25rem; line-height: 2;">
<li>تشخيص: Packoff (ميل عالي + ROP مرتفع + تدفق ضعيف)</li>
<li>ضخ High-Viscosity Pill لرفع الفتات</li>
<li>زيادة التدفق وتحسين خصائص السائل</li>
<li>تقليل ROP لحين استقرار التنظيف</li>
</ol>

<h4 style="color: #1e3a5f; margin: 1rem 0;">📚 الدروس المستفادة:</h4>
<div style="background: #dcfce7; padding: 1rem; border-radius: 8px;">
<ul style="margin: 0; padding-right: 1.25rem; color: #166534;">
<li>الآبار عالية الميل تحتاج تنظيف مكثف</li>
<li>ROP يجب أن يتناسب مع قدرة التنظيف</li>
<li>علامات التحذير (Shaker loading) يجب عدم تجاهلها</li>
</ul>
</div>

</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 ملخص أفضل الممارسات</h3>

<div style="background: linear-gradient(135deg, #059669 0%, #10b981 100%); color: white; padding: 1.5rem; border-radius: 12px;">
<div style="display: grid; gap: 0.75rem;">
<div style="background: rgba(255,255,255,0.15); padding: 1rem; border-radius: 8px;">
<strong>🎯 التخطيط:</strong> دراسة التكوينات قبل الحفر وتحديد المناطق عالية الخطورة
</div>
<div style="background: rgba(255,255,255,0.15); padding: 1rem; border-radius: 8px;">
<strong>👁️ المراقبة:</strong> مراقبة مستمرة للمؤشرات (Drag, Torque, Pump Pressure)
</div>
<div style="background: rgba(255,255,255,0.15); padding: 1rem; border-radius: 8px;">
<strong>⚡ الاستجابة:</strong> إجراء سريع عند أول علامة تحذير
</div>
<div style="background: rgba(255,255,255,0.15); padding: 1rem; border-radius: 8px;">
<strong>📖 التعلم:</strong> توثيق كل حادثة والتعلم منها
</div>
</div>
</div>

</section>`,
          keyTerms: [
            { term: 'Case Study', definition: 'دراسة وتحليل حالة واقعية لاستخلاص الدروس والتوصيات' },
            { term: 'Root Cause Analysis', definition: 'تحليل السبب الجذري للمشكلة لمنع تكرارها' },
            { term: 'Lessons Learned', definition: 'الدروس المستفادة من الحوادث لتحسين العمليات المستقبلية' },
            { term: 'High-Viscosity Pill', definition: 'حبة سائل عالية اللزوجة لرفع الفتات المتراكم' },
            { term: 'Shaker Loading', definition: 'تراكم الفتات على المنخل، علامة على ضعف تنظيف البئر' },
          ],
          practiceQuestion: {
            question: 'في حالة Key Seating، ما هو الإجراء الوقائي الأكثر فعالية للرحلات المستقبلية؟',
            options: [
              'زيادة وزن السائل',
              'تركيب String Reamer في سلسلة الحفر',
              'تقليل سرعة السحب',
              'استخدام Spotting Fluid'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Case Analysis and Field Studies',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Learning from Real Cases</h2>

<div style="background: linear-gradient(135deg, #7c3aed 0%, #8b5cf6 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<p style="font-size: 1.1rem; line-height: 1.8;">
Analyzing real field cases is the best way to understand stuck pipe complexities and develop the ability to make quick and correct decisions in critical situations.
</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 Case 1: Differential Sticking in Exploration Well</h3>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem; border-left: 4px solid #3b82f6;">

<h4 style="color: #1e3a5f; margin-bottom: 1rem;">🔍 Situation:</h4>
<ul style="margin: 0 0 1rem 0; padding-left: 1.25rem; line-height: 1.8;">
<li>Exploration well in Arabian Gulf</li>
<li>Depth: 4,200 meters</li>
<li>Formation: Highly permeable sandstone</li>
<li>Mud weight: 12.5 ppg (Overbalance ~800 psi)</li>
<li>Drilling stopped for connections for 15 minutes</li>
</ul>

<h4 style="color: #1e3a5f; margin-bottom: 1rem;">⚠️ What Happened:</h4>
<p style="margin-bottom: 1rem;">After completing connections, pipe couldn't move down. Rotation was free but pulling was limited by 50,000 lbs overpull.</p>

<h4 style="color: #1e3a5f; margin-bottom: 1rem;">✅ Solution:</h4>
<ol style="margin: 0; padding-left: 1.25rem; line-height: 2;">
<li>Diagnosis: Differential sticking (free rotation + prior stop + permeable formation)</li>
<li>Pumped 30 barrels Oil-Based Spotting Fluid</li>
<li>Waited 4 hours with periodic movement</li>
<li>Successful release after second attempt</li>
</ol>

<h4 style="color: #1e3a5f; margin: 1rem 0;">📚 Lessons Learned:</h4>
<div style="background: #dcfce7; padding: 1rem; border-radius: 8px;">
<ul style="margin: 0; padding-left: 1.25rem; color: #166534;">
<li>15 minutes stop is enough for differential sticking</li>
<li>Pipe must be moved even during connections</li>
<li>Spotting Fluid is very effective if used early</li>
</ul>
</div>

</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 Summary of Best Practices</h3>

<div style="background: linear-gradient(135deg, #059669 0%, #10b981 100%); color: white; padding: 1.5rem; border-radius: 12px;">
<div style="display: grid; gap: 0.75rem;">
<div style="background: rgba(255,255,255,0.15); padding: 1rem; border-radius: 8px;">
<strong>🎯 Planning:</strong> Study formations before drilling and identify high-risk zones
</div>
<div style="background: rgba(255,255,255,0.15); padding: 1rem; border-radius: 8px;">
<strong>👁️ Monitoring:</strong> Continuous monitoring of indicators (Drag, Torque, Pump Pressure)
</div>
<div style="background: rgba(255,255,255,0.15); padding: 1rem; border-radius: 8px;">
<strong>⚡ Response:</strong> Quick action at first warning sign
</div>
<div style="background: rgba(255,255,255,0.15); padding: 1rem; border-radius: 8px;">
<strong>📖 Learning:</strong> Document every incident and learn from it
</div>
</div>
</div>

</section>`,
          keyTerms: [
            { term: 'Case Study', definition: 'Study and analysis of real case to extract lessons and recommendations' },
            { term: 'Root Cause Analysis', definition: 'Analysis of problem root cause to prevent recurrence' },
            { term: 'Lessons Learned', definition: 'Lessons learned from incidents to improve future operations' },
            { term: 'High-Viscosity Pill', definition: 'High viscosity fluid pill to lift accumulated cuttings' },
            { term: 'Shaker Loading', definition: 'Cuttings buildup on shaker, sign of poor hole cleaning' },
          ],
          practiceQuestion: {
            question: 'In case of Key Seating, what is the most effective preventive measure for future trips?',
            options: [
              'Increase mud weight',
              'Install String Reamer in drillstring',
              'Reduce pulling speed',
              'Use Spotting Fluid'
            ],
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
          title: 'مراجعة شاملة - منع ومعالجة انحشار الأنابيب',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 ملخص الأسبوع</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<p style="font-size: 1.1rem; line-height: 1.8;">
في هذا الأسبوع تعلمنا المفاهيم الأساسية لانحشار الأنابيب (Stuck Pipe)، أنواعه، طرق الوقاية، وتقنيات التحرير. هذا الملخص يجمع أهم النقاط للمراجعة السريعة.
</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 أنواع الانحشار - تذكير سريع</h3>

<div style="display: grid; gap: 1rem; margin-bottom: 1.5rem;">
<div style="background: #fef3c7; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #92400e; margin-bottom: 0.5rem;">الانحشار الميكانيكي</h4>
<p style="margin: 0; color: #78350f;">Key Seating، Undergauge، Packoff، Ledges - عائق فيزيائي يمنع الحركة</p>
</div>
<div style="background: #dbeafe; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #1e40af; margin-bottom: 0.5rem;">الانحشار التفاضلي</h4>
<p style="margin: 0; color: #1e3a8a;">فرق الضغط يلصق الأنابيب بـ Filter Cake في التكوينات النفاذة</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 قواعد الوقاية الذهبية</h3>

<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<ol style="margin: 0; padding-right: 1.25rem; line-height: 2.2; font-size: 1.05rem;">
<li><strong>🔄 Keep the Pipe Moving:</strong> الحركة المستمرة هي أفضل وقاية</li>
<li><strong>⚖️ Control Overbalance:</strong> أقل ضغط زائد ممكن مع الحفاظ على التحكم</li>
<li><strong>🧹 Maintain Hole Cleaning:</strong> تنظيف البئر الجيد يمنع Packoff</li>
<li><strong>📊 Monitor Indicators:</strong> مراقبة Drag و Torque باستمرار</li>
<li><strong>🛡️ Design for Prevention:</strong> Dogleg منخفض، String Reamers</li>
</ol>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 شجرة القرار السريعة للتحرير</h3>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<div style="text-align: center; font-weight: bold; margin-bottom: 1rem;">هل يمكن الدوران؟</div>
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
<div style="background: #dbeafe; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #1e40af; margin-bottom: 0.5rem;">نعم ✅</p>
<p style="margin: 0; color: #1e3a8a;">احتمال كبير: <strong>انحشار تفاضلي</strong></p>
<p style="margin: 0.5rem 0 0 0; color: #1e3a8a;">→ Spotting Fluid</p>
</div>
<div style="background: #fef3c7; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #92400e; margin-bottom: 0.5rem;">لا ❌</p>
<p style="margin: 0; color: #78350f;">احتمال كبير: <strong>انحشار ميكانيكي</strong></p>
<p style="margin: 0.5rem 0 0 0; color: #78350f;">→ Jarring + Working Pipe</p>
</div>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 جدول المقارنة الشامل</h3>

<div style="background: #e8f4fd; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem; overflow-x: auto;">
<table style="width: 100%; border-collapse: collapse; min-width: 500px;">
<thead>
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 0.75rem; text-align: right;">الجانب</th>
<th style="padding: 0.75rem; text-align: center;">ميكانيكي</th>
<th style="padding: 0.75rem; text-align: center;">تفاضلي</th>
</tr>
</thead>
<tbody>
<tr style="background: white;">
<td style="padding: 0.75rem; border-bottom: 1px solid #e2e8f0;"><strong>السبب</strong></td>
<td style="padding: 0.75rem; text-align: center; border-bottom: 1px solid #e2e8f0;">عائق فيزيائي</td>
<td style="padding: 0.75rem; text-align: center; border-bottom: 1px solid #e2e8f0;">فرق الضغط</td>
</tr>
<tr style="background: #f7fafc;">
<td style="padding: 0.75rem; border-bottom: 1px solid #e2e8f0;"><strong>الدوران</strong></td>
<td style="padding: 0.75rem; text-align: center; border-bottom: 1px solid #e2e8f0;">مقيد</td>
<td style="padding: 0.75rem; text-align: center; border-bottom: 1px solid #e2e8f0;">حر</td>
</tr>
<tr style="background: white;">
<td style="padding: 0.75rem; border-bottom: 1px solid #e2e8f0;"><strong>التوقيت</strong></td>
<td style="padding: 0.75rem; text-align: center; border-bottom: 1px solid #e2e8f0;">أثناء الحركة</td>
<td style="padding: 0.75rem; text-align: center; border-bottom: 1px solid #e2e8f0;">بعد التوقف</td>
</tr>
<tr style="background: #f7fafc;">
<td style="padding: 0.75rem; border-bottom: 1px solid #e2e8f0;"><strong>الوقاية</strong></td>
<td style="padding: 0.75rem; text-align: center; border-bottom: 1px solid #e2e8f0;">Reamers، تصميم المسار</td>
<td style="padding: 0.75rem; text-align: center; border-bottom: 1px solid #e2e8f0;">الحركة، تقليل Overbalance</td>
</tr>
<tr style="background: white;">
<td style="padding: 0.75rem;"><strong>العلاج</strong></td>
<td style="padding: 0.75rem; text-align: center;">Jarring، Washover</td>
<td style="padding: 0.75rem; text-align: center;">Spotting Fluid</td>
</tr>
</tbody>
</table>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 نقاط للتذكر</h3>

<div style="background: linear-gradient(135deg, #059669 0%, #10b981 100%); color: white; padding: 1.5rem; border-radius: 12px;">
<ul style="margin: 0; padding-right: 1.25rem; line-height: 2;">
<li>الوقاية أرخص 100 مرة من العلاج</li>
<li>الاستجابة السريعة في الدقائق الأولى حاسمة</li>
<li>التشخيص الصحيح نصف الحل</li>
<li>لا تتوقف عن المحاولة حتى يتم التحرير</li>
<li>وثّق كل حادثة للتعلم منها</li>
</ul>
</div>

</section>`,
          keyTerms: [],
        },
        en: {
          title: 'Comprehensive Review - Stuck Pipe Prevention & Remediation',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Week Summary</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<p style="font-size: 1.1rem; line-height: 1.8;">
This week we learned the basic concepts of Stuck Pipe, its types, prevention methods, and freeing techniques. This summary combines the key points for quick review.
</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 Sticking Types - Quick Reminder</h3>

<div style="display: grid; gap: 1rem; margin-bottom: 1.5rem;">
<div style="background: #fef3c7; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #92400e; margin-bottom: 0.5rem;">Mechanical Sticking</h4>
<p style="margin: 0; color: #78350f;">Key Seating, Undergauge, Packoff, Ledges - physical obstruction preventing movement</p>
</div>
<div style="background: #dbeafe; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #1e40af; margin-bottom: 0.5rem;">Differential Sticking</h4>
<p style="margin: 0; color: #1e3a8a;">Pressure differential sticks pipe to Filter Cake in permeable formations</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 Golden Prevention Rules</h3>

<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<ol style="margin: 0; padding-left: 1.25rem; line-height: 2.2; font-size: 1.05rem;">
<li><strong>🔄 Keep the Pipe Moving:</strong> Continuous movement is the best prevention</li>
<li><strong>⚖️ Control Overbalance:</strong> Minimum overbalance while maintaining control</li>
<li><strong>🧹 Maintain Hole Cleaning:</strong> Good hole cleaning prevents Packoff</li>
<li><strong>📊 Monitor Indicators:</strong> Continuous Drag and Torque monitoring</li>
<li><strong>🛡️ Design for Prevention:</strong> Low Dogleg, String Reamers</li>
</ol>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 Points to Remember</h3>

<div style="background: linear-gradient(135deg, #059669 0%, #10b981 100%); color: white; padding: 1.5rem; border-radius: 12px;">
<ul style="margin: 0; padding-left: 1.25rem; line-height: 2;">
<li>Prevention is 100 times cheaper than cure</li>
<li>Quick response in first minutes is critical</li>
<li>Correct diagnosis is half the solution</li>
<li>Don't stop trying until freed</li>
<li>Document every incident to learn from it</li>
</ul>
</div>

</section>`,
          keyTerms: [],
        },
      },
    },
    {
      day: 6,
      type: 'quiz',
      content: {
        ar: { title: 'اختبار انحشار الأنابيب', explanation: 'اختبر معرفتك', keyTerms: [] },
        en: { title: 'Stuck Pipe Quiz', explanation: 'Test your knowledge', keyTerms: [] },
      },
      quiz: {
        ar: [
          { question: 'ما هو أكثر أنواع انحشار الأنابيب شيوعاً؟', options: ['Key Seating', 'الانحشار التفاضلي', 'Packoff', 'Undergauge Hole'], correctAnswer: 1 },
          { question: 'ما هي العلامة الرئيسية للانحشار التفاضلي؟', options: ['عدم القدرة على الدوران', 'القدرة على الدوران بحرية', 'ارتفاع ضغط المضخة', 'انخفاض الوزن'], correctAnswer: 1 },
          { question: 'أين يحدث Key Seating عادة؟', options: ['في التكوينات الرملية', 'عند نقاط Dogleg العالية', 'في قاع البئر', 'عند سطح البئر'], correctAnswer: 1 },
          { question: 'ما هو أفضل علاج للانحشار التفاضلي؟', options: ['Jarring', 'Spotting Fluid', 'زيادة الضخ', 'السحب بقوة'], correctAnswer: 1 },
          { question: 'كم المدة الكافية للتوقف لحدوث الانحشار التفاضلي؟', options: ['ساعة واحدة', '30 دقيقة', '5-15 دقيقة', 'يوم كامل'], correctAnswer: 2 },
          { question: 'ما هي القاعدة الذهبية للوقاية من الانحشار؟', options: ['زيادة وزن السائل', 'إبقاء الأنابيب متحركة', 'تقليل سرعة الحفر', 'زيادة عمق البئر'], correctAnswer: 1 },
          { question: 'ما هو Dogleg Severity الآمن لتجنب Key Seating؟', options: ['أكثر من 5°/100ft', 'أقل من 3°/100ft', '10°/100ft', 'لا يهم'], correctAnswer: 1 },
          { question: 'ماذا يعني Packoff؟', options: ['انسداد حول الأنابيب بالفتات', 'التصاق بطبقة الترشيح', 'كسر الأنابيب', 'انهيار البئر'], correctAnswer: 0 },
          { question: 'ما هو Jar؟', options: ['نوع من سوائل الحفر', 'أداة لتوجيه ضربات لتحرير الأنابيب', 'جهاز قياس', 'رأس حفر'], correctAnswer: 1 },
          { question: 'متى نقرر التخلي عن الأنابيب (Backoff)؟', options: ['فوراً عند الانحشار', 'بعد فشل جميع المحاولات', 'أبداً', 'بعد ساعة واحدة'], correctAnswer: 1 },
        ],
        en: [
          { question: 'What is the most common type of stuck pipe?', options: ['Key Seating', 'Differential Sticking', 'Packoff', 'Undergauge Hole'], correctAnswer: 1 },
          { question: 'What is the main sign of differential sticking?', options: ['Unable to rotate', 'Able to rotate freely', 'High pump pressure', 'Weight decrease'], correctAnswer: 1 },
          { question: 'Where does Key Seating usually occur?', options: ['In sand formations', 'At high Dogleg points', 'At well bottom', 'At well surface'], correctAnswer: 1 },
          { question: 'What is the best treatment for differential sticking?', options: ['Jarring', 'Spotting Fluid', 'Increase pumping', 'Pull with force'], correctAnswer: 1 },
          { question: 'How long is enough stop time for differential sticking to occur?', options: ['One hour', '30 minutes', '5-15 minutes', 'Full day'], correctAnswer: 2 },
          { question: 'What is the golden rule for stuck pipe prevention?', options: ['Increase mud weight', 'Keep the pipe moving', 'Reduce drilling speed', 'Increase well depth'], correctAnswer: 1 },
          { question: 'What is safe Dogleg Severity to avoid Key Seating?', options: ['More than 5°/100ft', 'Less than 3°/100ft', '10°/100ft', 'Does not matter'], correctAnswer: 1 },
          { question: 'What does Packoff mean?', options: ['Cuttings accumulation around pipe', 'Adhesion to filter cake', 'Pipe breakage', 'Wellbore collapse'], correctAnswer: 0 },
          { question: 'What is a Jar?', options: ['Type of drilling fluid', 'Tool for delivering blows to free pipe', 'Measurement device', 'Drill bit'], correctAnswer: 1 },
          { question: 'When do we decide to abandon pipe (Backoff)?', options: ['Immediately upon sticking', 'After all attempts fail', 'Never', 'After one hour'], correctAnswer: 1 },
        ],
      },
    },
    {
      day: 7,
      type: 'project',
      content: {
        ar: { title: 'مشروع: تحليل حالة انحشار', explanation: 'طبق ما تعلمته', keyTerms: [] },
        en: { title: 'Project: Stuck Pipe Case Analysis', explanation: 'Apply what you learned', keyTerms: [] },
      },
      project: {
        ar: {
          title: 'تحليل حالة انحشار أنابيب وتطوير خطة استجابة',
          description: 'في هذا المشروع، ستحلل حالة انحشار أنابيب افتراضية وتطور خطة كاملة للاستجابة والتحرير.',
          instructions: [
            '📋 السيناريو: بئر موجه بميل 55°، عمق 3,500 متر، تكوين رملي نفاذ، وزن السائل 13 ppg. توقف الحفر لمدة 20 دقيقة لإصلاح معدات السطح. بعد استئناف العمل، الأنابيب لا تتحرك للأسفل لكن الدوران ممكن.',
            '1. حدد نوع الانحشار المحتمل مع تبرير إجابتك',
            '2. اذكر 3 عوامل ساهمت في حدوث الانحشار',
            '3. ضع خطة تحرير مفصلة (الخطوات بالترتيب)',
            '4. ما هي الإجراءات الوقائية التي كان يجب اتخاذها؟',
            '5. كيف ستوثق هذه الحادثة للتعلم منها مستقبلاً؟',
          ],
          submissionType: 'text',
        },
        en: {
          title: 'Stuck Pipe Case Analysis and Response Plan Development',
          description: 'In this project, you will analyze a hypothetical stuck pipe case and develop a complete response and freeing plan.',
          instructions: [
            '📋 Scenario: Directional well at 55° inclination, 3,500 meters depth, permeable sand formation, mud weight 13 ppg. Drilling stopped for 20 minutes for surface equipment repair. After resuming, pipe won\'t move down but rotation is possible.',
            '1. Identify the likely sticking type with justification',
            '2. List 3 factors that contributed to the sticking',
            '3. Develop a detailed freeing plan (steps in order)',
            '4. What preventive measures should have been taken?',
            '5. How would you document this incident for future learning?',
          ],
          submissionType: 'text',
        },
      },
    },
  ],
};
