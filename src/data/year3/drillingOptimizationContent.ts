import { WeeklyLesson } from '../weeklyContent';

export const drillingOptimizationLesson: WeeklyLesson = {
  lessonId: 'drilling-optimization',
  days: [
    {
      day: 1,
      type: 'learning',
      content: {
        ar: {
          title: 'تحسين أداء الحفر - المفاهيم الأساسية ومؤشرات الأداء',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 مقدمة شاملة في تحسين أداء الحفر (Drilling Optimization)</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<p style="font-size: 1.1rem; line-height: 1.8;">
<strong>تحسين أداء الحفر (Drilling Optimization)</strong> هو عملية منهجية تهدف إلى تحقيق أقصى كفاءة في عمليات الحفر مع تقليل التكاليف والمخاطر. يعتمد على تحليل البيانات في الوقت الفعلي، فهم ميكانيكا الحفر، وتطبيق أفضل الممارسات لتحقيق معدلات اختراق عالية وتقليل الزمن غير المنتج (NPT - Non-Productive Time).
</p>
</div>

<div style="background: #ecfdf5; padding: 1.5rem; border-radius: 10px; border-right: 4px solid #10b981; margin: 1.5rem 0;">
<h4 style="color: #059669; margin-bottom: 0.75rem; font-size: 1.15rem;">💰 الأثر الاقتصادي للتحسين:</h4>
<ul style="margin: 0; padding-right: 1.25rem; color: #065f46; line-height: 2;">
<li><strong>تكلفة الحفارة اليومية:</strong> تتراوح بين 100,000 - 1,000,000 دولار يومياً حسب النوع والموقع</li>
<li><strong>توفير 10% من الوقت:</strong> يعني توفير ملايين الدولارات في البئر الواحد</li>
<li><strong>تقليل NPT:</strong> يمكن أن يوفر 20-30% من إجمالي تكلفة البئر</li>
<li><strong>تحسين عمر الرأس:</strong> تقليل عدد الرحلات (Trips) وتوفير وقت كبير</li>
<li><strong>العائد على الاستثمار:</strong> برامج التحسين تحقق عوائد 5-10 أضعاف تكلفتها</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 مؤشرات الأداء الرئيسية (Key Performance Indicators - KPIs)</h3>

<div style="display: grid; gap: 1.25rem; margin-bottom: 1.5rem;">
<div style="background: #fef3c7; padding: 1.5rem; border-radius: 10px; border: 2px solid #f59e0b;">
<h4 style="color: #92400e; margin-bottom: 0.75rem; font-size: 1.1rem;">🔸 معدل الاختراق (ROP - Rate of Penetration)</h4>
<p style="color: #78350f; line-height: 1.8; margin-bottom: 0.75rem;">
المؤشر الأهم في قياس أداء الحفر، يُقاس بالقدم أو المتر لكل ساعة (ft/hr أو m/hr). يتأثر بعدة عوامل:
</p>
<ul style="margin: 0; padding-right: 1.25rem; color: #78350f; line-height: 1.8;">
<li><strong>Weight on Bit (WOB):</strong> الوزن المطبق على الرأس</li>
<li><strong>Rotary Speed (RPM):</strong> سرعة الدوران</li>
<li><strong>Hydraulics:</strong> قوة التنظيف بسائل الحفر</li>
<li><strong>Bit Type:</strong> نوع وتصميم رأس الحفر</li>
<li><strong>Formation Properties:</strong> صلابة وخصائص التكوين</li>
</ul>
<div style="background: #fcd34d; padding: 0.75rem; border-radius: 6px; margin-top: 0.75rem;">
<p style="color: #78350f; margin: 0; font-weight: bold;">
📊 معادلة تقديرية: ROP ∝ (WOB × RPM) / (Formation Strength)
</p>
</div>
</div>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 10px; border: 2px solid #3b82f6;">
<h4 style="color: #1e40af; margin-bottom: 0.75rem; font-size: 1.1rem;">🔹 الزمن غير المنتج (NPT - Non-Productive Time)</h4>
<p style="color: #1e3a8a; line-height: 1.8; margin-bottom: 0.75rem;">
الوقت الضائع في مشاكل غير مخططة. تقليل NPT هو الهدف الرئيسي للتحسين:
</p>
<ul style="margin: 0; padding-right: 1.25rem; color: #1e3a8a; line-height: 1.8;">
<li><strong>انحشار الأنابيب (Stuck Pipe):</strong> قد يستهلك أيام</li>
<li><strong>مشاكل استقرار البئر:</strong> تتطلب علاج وتكييف</li>
<li><strong>فقدان الدورة (Lost Circulation):</strong> يستهلك وقت ومواد</li>
<li><strong>أعطال المعدات:</strong> إصلاحات غير مخططة</li>
<li><strong>الظروف الجوية:</strong> في العمليات البحرية</li>
</ul>
<div style="background: #60a5fa; padding: 0.75rem; border-radius: 6px; margin-top: 0.75rem;">
<p style="color: #1e3a8a; margin: 0; font-weight: bold;">
🎯 الهدف المثالي: NPT أقل من 5% من إجمالي وقت الحفر
</p>
</div>
</div>

<div style="background: #dcfce7; padding: 1.5rem; border-radius: 10px; border: 2px solid #22c55e;">
<h4 style="color: #166534; margin-bottom: 0.75rem; font-size: 1.1rem;">🔹 تكلفة القدم (Cost per Foot)</h4>
<p style="color: #14532d; line-height: 1.8; margin-bottom: 0.75rem;">
المقياس الاقتصادي الشامل الذي يجمع كل عوامل الكفاءة في رقم واحد:
</p>
<div style="background: #86efac; padding: 1rem; border-radius: 6px;">
<p style="color: #14532d; line-height: 1.8; margin: 0;">
<strong>المعادلة:</strong><br/>
Cost/ft = (Bit Cost + Rig Cost × Trip Time + Rig Cost × Drilling Time) / Footage Drilled
</p>
</div>
<p style="color: #14532d; line-height: 1.8; margin-top: 0.75rem;">
هذه المعادلة توازن بين تكلفة الرأس، وقت الرحلات، ووقت الحفر الفعلي. أحياناً رأس أغلى يعطي تكلفة/قدم أقل بسبب العمر الأطول.
</p>
</div>

<div style="background: #fce7f3; padding: 1.5rem; border-radius: 10px; border: 2px solid #ec4899;">
<h4 style="color: #be185d; margin-bottom: 0.75rem; font-size: 1.1rem;">🔹 مؤشرات الأداء الفرعية</h4>
<ul style="margin: 0; padding-right: 1.25rem; color: #9d174d; line-height: 2;">
<li><strong>Connection Time:</strong> وقت الوصلة - يجب أن يكون 3-5 دقائق</li>
<li><strong>Trip Speed:</strong> سرعة الرحلة - تُقاس بالوقف/قدم</li>
<li><strong>Bit Life:</strong> عمر الرأس بالأقدام أو الساعات</li>
<li><strong>MSE (Mechanical Specific Energy):</strong> الطاقة لكل حجم صخر محفور</li>
<li><strong>Downhole Tool Reliability:</strong> موثوقية أدوات القاع</li>
</ul>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 الطاقة الميكانيكية النوعية (MSE - Mechanical Specific Energy)</h3>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
MSE هو المؤشر الأكثر تقدماً لتحسين الحفر. يُعرّف بأنه الطاقة المطلوبة لحفر حجم وحدة من الصخر:
</p>

<div style="background: #dbeafe; padding: 1rem; border-radius: 8px; margin: 0.75rem 0;">
<p style="color: #1e3a8a; line-height: 1.8; margin: 0;">
<strong>معادلة MSE:</strong><br/>
MSE = (480 × T × RPM) / (D² × ROP) + (4 × WOB) / (π × D²)<br/><br/>
حيث: T = Torque, D = Bit Diameter, ROP = Rate of Penetration, WOB = Weight on Bit
</p>
</div>

<h4 style="color: #1e3a5f; margin: 1rem 0 0.75rem 0; font-size: 1.05rem;">كيفية استخدام MSE:</h4>
<ul style="margin: 0; padding-right: 1.25rem; line-height: 2;">
<li><strong>MSE المثالية:</strong> قريبة من قوة ضغط الصخر (CCS - Confined Compressive Strength)</li>
<li><strong>MSE عالية:</strong> تشير إلى عدم كفاءة - مشاكل في الرأس، Bit Balling، أو Vibrations</li>
<li><strong>نسبة MSE/CCS:</strong> أقل من 2-3 تعتبر ممتازة</li>
<li><strong>المراقبة المستمرة:</strong> ارتفاع MSE المفاجئ يشير لمشكلة تحتاج تدخل</li>
</ul>
</div>

<div style="background: #fef2f2; padding: 1.5rem; border-radius: 10px; border-right: 4px solid #dc2626; margin: 1.5rem 0;">
<h4 style="color: #dc2626; margin-bottom: 0.75rem; font-size: 1.15rem;">⚠️ علامات عدم الكفاءة في الميدان:</h4>
<ul style="margin: 0; padding-right: 1.25rem; color: #7f1d1d; line-height: 2;">
<li>ROP أقل من المتوقع للتكوين</li>
<li>MSE أعلى بكثير من CCS المتوقع</li>
<li>Torque متذبذب أو غير مستقر</li>
<li>Vibrations ظاهرة في قراءات Surface أو Downhole</li>
<li>استهلاك سريع غير طبيعي للرأس</li>
</ul>
</div>

</section>`,
          keyTerms: [
            { term: 'ROP (Rate of Penetration)', definition: 'معدل الاختراق - سرعة حفر الرأس مقاسة بالقدم/ساعة أو م/ساعة' },
            { term: 'NPT (Non-Productive Time)', definition: 'الزمن غير المنتج - الوقت الضائع في مشاكل غير مخططة' },
            { term: 'MSE (Mechanical Specific Energy)', definition: 'الطاقة الميكانيكية النوعية - الطاقة المطلوبة لحفر وحدة حجم من الصخر' },
            { term: 'Cost per Foot', definition: 'تكلفة القدم - المقياس الاقتصادي الشامل لكفاءة الحفر' },
            { term: 'WOB (Weight on Bit)', definition: 'الوزن على الرأس - القوة الرأسية المطبقة على رأس الحفر' },
          ],
          practiceQuestion: {
            question: 'ما هو المؤشر الذي يوازن بين تكلفة الرأس ووقت الرحلات ووقت الحفر؟',
            options: ['ROP', 'Cost per Foot', 'MSE', 'NPT'],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Drilling Optimization - Fundamentals and Performance Indicators',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Comprehensive Introduction to Drilling Optimization</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<p style="font-size: 1.1rem; line-height: 1.8;">
<strong>Drilling Optimization</strong> is a systematic process aimed at achieving maximum efficiency in drilling operations while minimizing costs and risks. It relies on real-time data analysis, understanding drilling mechanics, and applying best practices to achieve high penetration rates and minimize Non-Productive Time (NPT).
</p>
</div>

<div style="background: #ecfdf5; padding: 1.5rem; border-radius: 10px; border-left: 4px solid #10b981; margin: 1.5rem 0;">
<h4 style="color: #059669; margin-bottom: 0.75rem; font-size: 1.15rem;">💰 Economic Impact of Optimization:</h4>
<ul style="margin: 0; padding-left: 1.25rem; color: #065f46; line-height: 2;">
<li><strong>Daily rig cost:</strong> Ranges from $100,000 - $1,000,000 depending on type and location</li>
<li><strong>Saving 10% time:</strong> Means saving millions of dollars per well</li>
<li><strong>Reducing NPT:</strong> Can save 20-30% of total well cost</li>
<li><strong>Improving bit life:</strong> Reduces trips and saves significant time</li>
<li><strong>ROI:</strong> Optimization programs achieve 5-10x returns on investment</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 Key Performance Indicators (KPIs)</h3>

<div style="display: grid; gap: 1.25rem; margin-bottom: 1.5rem;">
<div style="background: #fef3c7; padding: 1.5rem; border-radius: 10px; border: 2px solid #f59e0b;">
<h4 style="color: #92400e; margin-bottom: 0.75rem; font-size: 1.1rem;">🔸 Rate of Penetration (ROP)</h4>
<p style="color: #78350f; line-height: 1.8; margin-bottom: 0.75rem;">
The most important drilling performance indicator, measured in feet or meters per hour. Affected by several factors:
</p>
<ul style="margin: 0; padding-left: 1.25rem; color: #78350f; line-height: 1.8;">
<li><strong>Weight on Bit (WOB):</strong> The force applied to the bit</li>
<li><strong>Rotary Speed (RPM):</strong> Rotation speed</li>
<li><strong>Hydraulics:</strong> Cleaning power of drilling fluid</li>
<li><strong>Bit Type:</strong> Type and design of drill bit</li>
<li><strong>Formation Properties:</strong> Hardness and characteristics</li>
</ul>
<div style="background: #fcd34d; padding: 0.75rem; border-radius: 6px; margin-top: 0.75rem;">
<p style="color: #78350f; margin: 0; font-weight: bold;">
📊 Estimation: ROP ∝ (WOB × RPM) / (Formation Strength)
</p>
</div>
</div>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 10px; border: 2px solid #3b82f6;">
<h4 style="color: #1e40af; margin-bottom: 0.75rem; font-size: 1.1rem;">🔹 Non-Productive Time (NPT)</h4>
<p style="color: #1e3a8a; line-height: 1.8; margin-bottom: 0.75rem;">
Time lost on unplanned problems. Reducing NPT is the primary optimization goal:
</p>
<ul style="margin: 0; padding-left: 1.25rem; color: #1e3a8a; line-height: 1.8;">
<li><strong>Stuck Pipe:</strong> Can consume days</li>
<li><strong>Wellbore Stability Issues:</strong> Require treatment</li>
<li><strong>Lost Circulation:</strong> Consumes time and materials</li>
<li><strong>Equipment Failures:</strong> Unplanned repairs</li>
<li><strong>Weather Conditions:</strong> For offshore operations</li>
</ul>
<div style="background: #60a5fa; padding: 0.75rem; border-radius: 6px; margin-top: 0.75rem;">
<p style="color: #1e3a8a; margin: 0; font-weight: bold;">
🎯 Target: NPT less than 5% of total drilling time
</p>
</div>
</div>

<div style="background: #dcfce7; padding: 1.5rem; border-radius: 10px; border: 2px solid #22c55e;">
<h4 style="color: #166534; margin-bottom: 0.75rem; font-size: 1.1rem;">🔹 Cost per Foot</h4>
<p style="color: #14532d; line-height: 1.8; margin-bottom: 0.75rem;">
The comprehensive economic metric that combines all efficiency factors:
</p>
<div style="background: #86efac; padding: 1rem; border-radius: 6px;">
<p style="color: #14532d; line-height: 1.8; margin: 0;">
<strong>Formula:</strong><br/>
Cost/ft = (Bit Cost + Rig Cost × Trip Time + Rig Cost × Drilling Time) / Footage Drilled
</p>
</div>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 Mechanical Specific Energy (MSE)</h3>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
MSE is the most advanced drilling optimization indicator. Defined as the energy required to drill a unit volume of rock:
</p>

<div style="background: #dbeafe; padding: 1rem; border-radius: 8px; margin: 0.75rem 0;">
<p style="color: #1e3a8a; line-height: 1.8; margin: 0;">
<strong>MSE Equation:</strong><br/>
MSE = (480 × T × RPM) / (D² × ROP) + (4 × WOB) / (π × D²)<br/><br/>
Where: T = Torque, D = Bit Diameter, ROP = Rate of Penetration, WOB = Weight on Bit
</p>
</div>

<h4 style="color: #1e3a5f; margin: 1rem 0 0.75rem 0; font-size: 1.05rem;">How to Use MSE:</h4>
<ul style="margin: 0; padding-left: 1.25rem; line-height: 2;">
<li><strong>Ideal MSE:</strong> Close to rock Confined Compressive Strength (CCS)</li>
<li><strong>High MSE:</strong> Indicates inefficiency - bit problems, balling, or vibrations</li>
<li><strong>MSE/CCS Ratio:</strong> Less than 2-3 is excellent</li>
<li><strong>Continuous Monitoring:</strong> Sudden MSE increase signals problems</li>
</ul>
</div>

</section>`,
          keyTerms: [
            { term: 'ROP (Rate of Penetration)', definition: 'The speed at which the bit drills, measured in ft/hr or m/hr' },
            { term: 'NPT (Non-Productive Time)', definition: 'Time lost on unplanned problems and delays' },
            { term: 'MSE (Mechanical Specific Energy)', definition: 'Energy required to drill a unit volume of rock' },
            { term: 'Cost per Foot', definition: 'Comprehensive economic metric for drilling efficiency' },
            { term: 'WOB (Weight on Bit)', definition: 'The vertical force applied to the drill bit' },
          ],
          practiceQuestion: {
            question: 'Which indicator balances bit cost, trip time, and drilling time?',
            options: ['ROP', 'Cost per Foot', 'MSE', 'NPT'],
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
          title: 'تحسين معاملات الحفر - WOB, RPM, والهيدروليكا',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 تحسين معاملات الحفر الأساسية</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<p style="font-size: 1.1rem; line-height: 1.8;">
تحسين معاملات الحفر يتطلب فهماً عميقاً للتفاعل بين الوزن على الرأس (WOB)، سرعة الدوران (RPM)، والهيدروليكا. هذه المعاملات الثلاثة تشكل المثلث الأساسي للتحكم في ROP وكفاءة الحفر. التوازن الصحيح بينها هو مفتاح النجاح.
</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 الوزن على الرأس (WOB - Weight on Bit)</h3>

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 10px; border: 2px solid #f59e0b; margin-bottom: 1.5rem;">
<p style="color: #78350f; line-height: 1.8; margin-bottom: 1rem;">
WOB هو القوة الرأسية المطبقة على رأس الحفر لتحقيق الاختراق. يُنتج من وزن عمود الحفر (Drill Collars) ويُتحكم به عبر Hook Load:
</p>

<div style="background: #fcd34d; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<p style="color: #78350f; line-height: 1.8; margin: 0;">
<strong>WOB = String Weight in Air - Hook Load - Buoyancy Effect</strong>
</p>
</div>

<h4 style="color: #92400e; margin: 1rem 0 0.75rem 0; font-size: 1.05rem;">تأثير WOB على ROP:</h4>
<ul style="margin: 0; padding-right: 1.25rem; color: #78350f; line-height: 2;">
<li><strong>WOB منخفض جداً:</strong> رأس الحفر يدور دون اختراق فعال (Bit Skating)</li>
<li><strong>WOB مثالي:</strong> اختراق فعال مع عمر رأس مقبول</li>
<li><strong>WOB عالي جداً:</strong> تآكل سريع للرأس، مخاطر Vibrations، احتمال انحناء العمود</li>
</ul>

<div style="background: #fff7ed; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
<h5 style="color: #9a3412; margin-bottom: 0.5rem;">📊 اختيار WOB المناسب:</h5>
<table style="width: 100%; border-collapse: collapse; color: #78350f;">
<tr style="border-bottom: 1px solid #fed7aa;">
<td style="padding: 0.5rem;"><strong>نوع الرأس</strong></td>
<td style="padding: 0.5rem;"><strong>WOB النموذجي</strong></td>
</tr>
<tr style="border-bottom: 1px solid #fed7aa;">
<td style="padding: 0.5rem;">PDC Bits</td>
<td style="padding: 0.5rem;">1,000 - 5,000 lbs/inch diameter</td>
</tr>
<tr style="border-bottom: 1px solid #fed7aa;">
<td style="padding: 0.5rem;">Roller Cone</td>
<td style="padding: 0.5rem;">3,000 - 8,000 lbs/inch diameter</td>
</tr>
<tr>
<td style="padding: 0.5rem;">Diamond/TSP</td>
<td style="padding: 0.5rem;">500 - 2,000 lbs/inch diameter</td>
</tr>
</table>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 سرعة الدوران (RPM - Rotary Speed)</h3>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 10px; border: 2px solid #3b82f6; margin-bottom: 1.5rem;">
<p style="color: #1e3a8a; line-height: 1.8; margin-bottom: 1rem;">
RPM يمكن توفيره من مصدرين: الدوار السطحي (Rotary Table/Top Drive) أو محرك القاع (Downhole Motor/Turbine). في كثير من الأحيان يُستخدم كلاهما معاً.
</p>

<h4 style="color: #1e40af; margin: 1rem 0 0.75rem 0; font-size: 1.05rem;">⚡ Bit RPM الكلي:</h4>
<div style="background: #60a5fa; padding: 1rem; border-radius: 8px;">
<p style="color: #1e3a8a; margin: 0; font-weight: bold;">
Total Bit RPM = Surface RPM + Motor RPM
</p>
</div>

<h4 style="color: #1e40af; margin: 1rem 0 0.75rem 0; font-size: 1.05rem;">تأثيرات RPM:</h4>
<ul style="margin: 0; padding-right: 1.25rem; color: #1e3a8a; line-height: 2;">
<li><strong>زيادة RPM:</strong> تزيد ROP لكن تزيد تآكل الرأس وخطر Vibrations</li>
<li><strong>RPM عالي جداً:</strong> مشاكل Whirl و Stick-Slip في PDC bits</li>
<li><strong>RPM منخفض:</strong> قد لا يكون كافياً لتفعيل بعض أنواع الرؤوس</li>
</ul>

<div style="background: #bfdbfe; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
<h5 style="color: #1e40af; margin-bottom: 0.5rem;">📊 نطاقات RPM الموصى بها:</h5>
<ul style="margin: 0; padding-right: 1.25rem; color: #1e3a8a; line-height: 1.8;">
<li><strong>PDC Bits:</strong> 60 - 200 RPM (حسب التكوين)</li>
<li><strong>Roller Cone:</strong> 40 - 150 RPM</li>
<li><strong>مع Motor:</strong> Surface RPM منخفض (0-60) + Motor (0-300)</li>
</ul>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 تحسين الهيدروليكا (Hydraulics Optimization)</h3>

<div style="background: #dcfce7; padding: 1.5rem; border-radius: 10px; border: 2px solid #22c55e; margin-bottom: 1.5rem;">
<p style="color: #14532d; line-height: 1.8; margin-bottom: 1rem;">
الهيدروليكا الفعالة ضرورية لتنظيف الرأس وإزالة الفتات. يجب تحقيق التوازن بين:
</p>

<ul style="margin: 0 0 1rem 0; padding-right: 1.25rem; color: #14532d; line-height: 2;">
<li><strong>Bit Hydraulic Horsepower (HSI):</strong> قوة التنظيف عند الرأس</li>
<li><strong>Jet Impact Force:</strong> قوة تأثير النفاثات على القاع</li>
<li><strong>Annular Velocity:</strong> سرعة تدفق في الحلقة لرفع الفتات</li>
</ul>

<div style="background: #86efac; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<p style="color: #14532d; line-height: 1.8; margin: 0;">
<strong>HSI (Hydraulic Horsepower per Square Inch):</strong><br/>
HSI = (Pressure Drop × Flow Rate) / (1714 × Bit Area)<br/><br/>
<strong>الهدف:</strong> HSI = 2-5 hp/in² للتكوينات العادية، أعلى للتكوينات اللزجة
</p>
</div>

<h4 style="color: #166534; margin: 1rem 0 0.75rem 0; font-size: 1.05rem;">اختيار حجم النفاثات (Nozzle Selection):</h4>
<ul style="margin: 0; padding-right: 1.25rem; color: #14532d; line-height: 2;">
<li>نفاثات أصغر = Pressure Drop أعلى = HSI أعلى</li>
<li>نفاثات أكبر = Flow Rate أعلى = تنظيف أفضل للفتات الكبير</li>
<li>التوازن يعتمد على نوع التكوين وحجم الفتات المتوقع</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 التفاعل بين المعاملات (Parameter Interaction)</h3>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
المعاملات الثلاثة مترابطة ولا يمكن تحسين أي منها بمعزل:
</p>

<div style="background: #e0e7ff; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<ul style="margin: 0; padding-right: 1.25rem; color: #3730a3; line-height: 2;">
<li><strong>WOB + RPM:</strong> زيادة أي منهما تزيد ROP لكن أيضاً تزيد Vibrations</li>
<li><strong>Hydraulics + ROP:</strong> ROP عالي يتطلب تنظيف أفضل لمنع تراكم الفتات</li>
<li><strong>WOB + Hydraulics:</strong> WOB عالي قد يتطلب Flow Rate أعلى للتبريد</li>
</ul>
</div>

<div style="background: #fef2f2; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
<h5 style="color: #dc2626; margin-bottom: 0.5rem;">⚠️ نقطة مهمة:</h5>
<p style="color: #7f1d1d; margin: 0; line-height: 1.8;">
لا تغير أكثر من معامل واحد في كل مرة! التغيير التدريجي يسمح بفهم تأثير كل معامل على حدة.
</p>
</div>
</div>

</section>`,
          keyTerms: [
            { term: 'WOB (Weight on Bit)', definition: 'الوزن على الرأس - القوة الرأسية المطبقة على رأس الحفر' },
            { term: 'RPM (Rotary Speed)', definition: 'سرعة الدوران - عدد دورات الرأس في الدقيقة' },
            { term: 'HSI (Hydraulic Horsepower per Square Inch)', definition: 'القدرة الهيدروليكية لكل بوصة مربعة من مساحة الرأس' },
            { term: 'Jet Impact Force', definition: 'قوة تأثير النفاثات على قاع البئر لتنظيف الفتات' },
            { term: 'Bit Skating', definition: 'دوران الرأس دون اختراق فعال بسبب WOB منخفض' },
          ],
          practiceQuestion: {
            question: 'عند استخدام محرك قاعي مع دوران سطحي، كيف يُحسب RPM الكلي للرأس؟',
            options: ['Surface RPM فقط', 'Motor RPM فقط', 'Surface RPM + Motor RPM', 'أكبر قيمة منهما'],
            correctAnswer: 2,
          },
        },
        en: {
          title: 'Optimizing Drilling Parameters - WOB, RPM, and Hydraulics',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Optimizing Fundamental Drilling Parameters</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<p style="font-size: 1.1rem; line-height: 1.8;">
Optimizing drilling parameters requires deep understanding of the interaction between Weight on Bit (WOB), Rotary Speed (RPM), and Hydraulics. These three parameters form the fundamental triangle for controlling ROP and drilling efficiency. The right balance between them is the key to success.
</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 Weight on Bit (WOB)</h3>

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 10px; border: 2px solid #f59e0b; margin-bottom: 1.5rem;">
<p style="color: #78350f; line-height: 1.8; margin-bottom: 1rem;">
WOB is the vertical force applied to the drill bit to achieve penetration. It's generated from the weight of drill collars and controlled via Hook Load:
</p>

<div style="background: #fcd34d; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<p style="color: #78350f; line-height: 1.8; margin: 0;">
<strong>WOB = String Weight in Air - Hook Load - Buoyancy Effect</strong>
</p>
</div>

<h4 style="color: #92400e; margin: 1rem 0 0.75rem 0; font-size: 1.05rem;">WOB Effect on ROP:</h4>
<ul style="margin: 0; padding-left: 1.25rem; color: #78350f; line-height: 2;">
<li><strong>Too Low WOB:</strong> Bit rotates without effective penetration (Bit Skating)</li>
<li><strong>Optimal WOB:</strong> Effective penetration with acceptable bit life</li>
<li><strong>Too High WOB:</strong> Rapid bit wear, vibration risks, potential string bending</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 Rotary Speed (RPM)</h3>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 10px; border: 2px solid #3b82f6; margin-bottom: 1.5rem;">
<p style="color: #1e3a8a; line-height: 1.8; margin-bottom: 1rem;">
RPM can be provided from two sources: Surface Rotary (Rotary Table/Top Drive) or Downhole Motor/Turbine. Often both are used together.
</p>

<h4 style="color: #1e40af; margin: 1rem 0 0.75rem 0; font-size: 1.05rem;">⚡ Total Bit RPM:</h4>
<div style="background: #60a5fa; padding: 1rem; border-radius: 8px;">
<p style="color: #1e3a8a; margin: 0; font-weight: bold;">
Total Bit RPM = Surface RPM + Motor RPM
</p>
</div>

<h4 style="color: #1e40af; margin: 1rem 0 0.75rem 0; font-size: 1.05rem;">RPM Effects:</h4>
<ul style="margin: 0; padding-left: 1.25rem; color: #1e3a8a; line-height: 2;">
<li><strong>Increasing RPM:</strong> Increases ROP but also increases bit wear and vibration risk</li>
<li><strong>Too High RPM:</strong> Whirl and Stick-Slip problems in PDC bits</li>
<li><strong>Low RPM:</strong> May not be sufficient to activate some bit types</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 Hydraulics Optimization</h3>

<div style="background: #dcfce7; padding: 1.5rem; border-radius: 10px; border: 2px solid #22c55e; margin-bottom: 1.5rem;">
<p style="color: #14532d; line-height: 1.8; margin-bottom: 1rem;">
Effective hydraulics are essential for bit cleaning and cuttings removal. Balance must be achieved between:
</p>

<ul style="margin: 0 0 1rem 0; padding-left: 1.25rem; color: #14532d; line-height: 2;">
<li><strong>Bit Hydraulic Horsepower (HSI):</strong> Cleaning power at the bit</li>
<li><strong>Jet Impact Force:</strong> Force of jets impacting the bottom</li>
<li><strong>Annular Velocity:</strong> Flow velocity in annulus for cuttings transport</li>
</ul>

<div style="background: #86efac; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<p style="color: #14532d; line-height: 1.8; margin: 0;">
<strong>HSI (Hydraulic Horsepower per Square Inch):</strong><br/>
HSI = (Pressure Drop × Flow Rate) / (1714 × Bit Area)<br/><br/>
<strong>Target:</strong> HSI = 2-5 hp/in² for normal formations, higher for sticky formations
</p>
</div>
</div>

</section>`,
          keyTerms: [
            { term: 'WOB (Weight on Bit)', definition: 'The vertical force applied to the drill bit' },
            { term: 'RPM (Rotary Speed)', definition: 'Number of bit rotations per minute' },
            { term: 'HSI (Hydraulic Horsepower per Square Inch)', definition: 'Hydraulic power per square inch of bit area' },
            { term: 'Jet Impact Force', definition: 'Force of jets impacting the bottom for cuttings cleaning' },
            { term: 'Bit Skating', definition: 'Bit rotating without effective penetration due to low WOB' },
          ],
          practiceQuestion: {
            question: 'When using a downhole motor with surface rotation, how is total bit RPM calculated?',
            options: ['Surface RPM only', 'Motor RPM only', 'Surface RPM + Motor RPM', 'Maximum of both'],
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
          title: 'الاهتزازات وديناميكا عمود الحفر',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 الاهتزازات في الحفر (Drilling Vibrations)</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<p style="font-size: 1.1rem; line-height: 1.8;">
<strong>الاهتزازات (Vibrations)</strong> هي العدو الخفي لكفاءة الحفر. تستهلك الطاقة، تُتلف المعدات، تقلل ROP، وتزيد التكاليف. فهم أنواع الاهتزازات وكيفية التحكم بها أساسي لكل مهندس حفر. الاهتزازات الشديدة يمكن أن تقلل عمر الرأس بنسبة 50% أو أكثر.
</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 أنواع الاهتزازات الثلاثة الرئيسية</h3>

<div style="display: grid; gap: 1.25rem; margin-bottom: 1.5rem;">
<div style="background: #fef3c7; padding: 1.5rem; border-radius: 10px; border: 2px solid #f59e0b;">
<h4 style="color: #92400e; margin-bottom: 0.75rem; font-size: 1.1rem;">🔸 الاهتزاز المحوري (Axial Vibration / Bit Bounce)</h4>
<p style="color: #78350f; line-height: 1.8; margin-bottom: 0.75rem;">
حركة عمود الحفر لأعلى ولأسفل. يحدث عندما يرتد الرأس عن التكوين:
</p>
<ul style="margin: 0; padding-right: 1.25rem; color: #78350f; line-height: 1.8;">
<li><strong>الأسباب:</strong> تكوينات صلبة متقطعة، WOB غير مناسب، Roller Cone bits في تكوينات صلبة</li>
<li><strong>العلامات:</strong> تذبذب في WOB و Hook Load، صوت طرق في Rotary Table</li>
<li><strong>الأضرار:</strong> تلف Bit teeth، إجهاد Connections، تآكل Drill Collars</li>
<li><strong>العلاج:</strong> تعديل WOB، تغيير RPM، استخدام Shock Sub</li>
</ul>
</div>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 10px; border: 2px solid #3b82f6;">
<h4 style="color: #1e40af; margin-bottom: 0.75rem; font-size: 1.1rem;">🔹 الاهتزاز الدوراني (Torsional Vibration / Stick-Slip)</h4>
<p style="color: #1e3a8a; line-height: 1.8; margin-bottom: 0.75rem;">
أخطر أنواع الاهتزازات وأكثرها شيوعاً مع PDC bits. يحدث عندما:
</p>
<ul style="margin: 0; padding-right: 1.25rem; color: #1e3a8a; line-height: 1.8;">
<li><strong>Stick Phase:</strong> الرأس يتوقف مؤقتاً بينما العمود يستمر في الدوران (يخزن طاقة)</li>
<li><strong>Slip Phase:</strong> الرأس يتحرر فجأة ويدور بسرعة عالية جداً (تحرير الطاقة)</li>
<li><strong>النتيجة:</strong> RPM الرأس يتذبذب بين 0 و3-5 أضعاف Surface RPM</li>
</ul>
<div style="background: #60a5fa; padding: 0.75rem; border-radius: 6px; margin-top: 0.75rem;">
<p style="color: #1e3a8a; margin: 0; line-height: 1.8;">
<strong>⚠️ خطر Stick-Slip:</strong> يمكن أن يصل Bit RPM إلى 400-600 RPM مؤقتاً مما يدمر PDC cutters!
</p>
</div>
</div>

<div style="background: #dcfce7; padding: 1.5rem; border-radius: 10px; border: 2px solid #22c55e;">
<h4 style="color: #166534; margin-bottom: 0.75rem; font-size: 1.1rem;">🔹 الاهتزاز الجانبي (Lateral Vibration / Whirl)</h4>
<p style="color: #14532d; line-height: 1.8; margin-bottom: 0.75rem;">
حركة دائرية جانبية للرأس أو BHA داخل البئر. يسبب تآكل غير متساوٍ وتلف الأدوات:
</p>
<ul style="margin: 0; padding-right: 1.25rem; color: #14532d; line-height: 1.8;">
<li><strong>Forward Whirl:</strong> الرأس يدور في نفس اتجاه الدوران</li>
<li><strong>Backward Whirl:</strong> الرأس يدور عكس اتجاه الدوران (أكثر ضرراً)</li>
<li><strong>الأسباب:</strong> عدم توازن BHA، Hole enlargement، RPM قريب من Resonance</li>
<li><strong>العلامات:</strong> تآكل غير متساوٍ على الرأس، Spiral marks على جدار البئر</li>
</ul>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 الكشف عن الاهتزازات</h3>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #1e3a5f; margin-bottom: 1rem; font-size: 1.1rem;">📡 أدوات الكشف:</h4>

<div style="background: #e0e7ff; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<h5 style="color: #3730a3; margin-bottom: 0.5rem;">Surface Indicators:</h5>
<ul style="margin: 0; padding-right: 1.25rem; color: #3730a3; line-height: 1.8;">
<li>تذبذب Torque (دليل على Stick-Slip)</li>
<li>تذبذب WOB/Hook Load (دليل على Bit Bounce)</li>
<li>اهتزاز Rotary Table أو Top Drive</li>
<li>ارتفاع MSE مع انخفاض ROP</li>
</ul>
</div>

<div style="background: #d1fae5; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<h5 style="color: #065f46; margin-bottom: 0.5rem;">Downhole Sensors (MWD/LWD):</h5>
<ul style="margin: 0; padding-right: 1.25rem; color: #065f46; line-height: 1.8;">
<li>Accelerometers - قياس مباشر للاهتزازات</li>
<li>Magnetometers - كشف RPM الفعلي للرأس</li>
<li>Vibration Severity Index - مؤشر شدة موحد</li>
<li>Real-time alerts عند تجاوز الحدود</li>
</ul>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 استراتيجيات التحكم في الاهتزازات</h3>

<div style="background: #fef2f2; padding: 1.5rem; border-radius: 10px; border-right: 4px solid #dc2626; margin: 1.5rem 0;">
<h4 style="color: #dc2626; margin-bottom: 0.75rem; font-size: 1.15rem;">🛠️ حلول للتحكم:</h4>
<table style="width: 100%; border-collapse: collapse; color: #7f1d1d; font-size: 0.95rem;">
<tr style="border-bottom: 2px solid #fecaca; background: #fee2e2;">
<th style="padding: 0.75rem; text-align: right;">نوع الاهتزاز</th>
<th style="padding: 0.75rem; text-align: right;">الحل الأساسي</th>
</tr>
<tr style="border-bottom: 1px solid #fecaca;">
<td style="padding: 0.75rem;">Bit Bounce</td>
<td style="padding: 0.75rem;">تقليل WOB، Shock Sub، تغيير نوع الرأس</td>
</tr>
<tr style="border-bottom: 1px solid #fecaca;">
<td style="padding: 0.75rem;">Stick-Slip</td>
<td style="padding: 0.75rem;">زيادة RPM، تقليل WOB، Anti-Stick-Slip software</td>
</tr>
<tr>
<td style="padding: 0.75rem;">Whirl</td>
<td style="padding: 0.75rem;">Stabilizers، تجنب Critical RPM، Packed BHA</td>
</tr>
</table>
</div>

</section>`,
          keyTerms: [
            { term: 'Bit Bounce', definition: 'الاهتزاز المحوري - ارتداد الرأس عن التكوين' },
            { term: 'Stick-Slip', definition: 'الاهتزاز الدوراني - توقف ثم انطلاق مفاجئ للرأس' },
            { term: 'Whirl', definition: 'الاهتزاز الجانبي - حركة دائرية للرأس داخل البئر' },
            { term: 'Critical RPM', definition: 'سرعة الرنين التي تضخم الاهتزازات' },
            { term: 'Shock Sub', definition: 'أداة لامتصاص الاهتزازات المحورية' },
          ],
          practiceQuestion: {
            question: 'ما هو نوع الاهتزاز الذي يسبب تذبذب Torque على السطح؟',
            options: ['Bit Bounce', 'Stick-Slip', 'Forward Whirl', 'Backward Whirl'],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Vibrations and Drillstring Dynamics',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Drilling Vibrations</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<p style="font-size: 1.1rem; line-height: 1.8;">
<strong>Vibrations</strong> are the hidden enemy of drilling efficiency. They consume energy, damage equipment, reduce ROP, and increase costs. Understanding vibration types and control methods is fundamental for every drilling engineer. Severe vibrations can reduce bit life by 50% or more.
</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 Three Main Types of Vibrations</h3>

<div style="display: grid; gap: 1.25rem; margin-bottom: 1.5rem;">
<div style="background: #fef3c7; padding: 1.5rem; border-radius: 10px; border: 2px solid #f59e0b;">
<h4 style="color: #92400e; margin-bottom: 0.75rem; font-size: 1.1rem;">🔸 Axial Vibration (Bit Bounce)</h4>
<p style="color: #78350f; line-height: 1.8; margin-bottom: 0.75rem;">
Up and down movement of the drillstring. Occurs when the bit bounces off the formation:
</p>
<ul style="margin: 0; padding-left: 1.25rem; color: #78350f; line-height: 1.8;">
<li><strong>Causes:</strong> Intermittent hard formations, improper WOB, Roller Cone bits in hard formations</li>
<li><strong>Signs:</strong> WOB and Hook Load fluctuation, knocking sound at Rotary Table</li>
<li><strong>Damage:</strong> Bit teeth damage, Connection fatigue, Drill Collar wear</li>
<li><strong>Solution:</strong> Adjust WOB, change RPM, use Shock Sub</li>
</ul>
</div>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 10px; border: 2px solid #3b82f6;">
<h4 style="color: #1e40af; margin-bottom: 0.75rem; font-size: 1.1rem;">🔹 Torsional Vibration (Stick-Slip)</h4>
<p style="color: #1e3a8a; line-height: 1.8; margin-bottom: 0.75rem;">
Most dangerous and common vibration type with PDC bits. Occurs when:
</p>
<ul style="margin: 0; padding-left: 1.25rem; color: #1e3a8a; line-height: 1.8;">
<li><strong>Stick Phase:</strong> Bit momentarily stops while string continues rotating (stores energy)</li>
<li><strong>Slip Phase:</strong> Bit suddenly releases and rotates at very high speed (releases energy)</li>
<li><strong>Result:</strong> Bit RPM oscillates between 0 and 3-5 times Surface RPM</li>
</ul>
<div style="background: #60a5fa; padding: 0.75rem; border-radius: 6px; margin-top: 0.75rem;">
<p style="color: #1e3a8a; margin: 0; line-height: 1.8;">
<strong>⚠️ Stick-Slip Danger:</strong> Bit RPM can temporarily reach 400-600 RPM, destroying PDC cutters!
</p>
</div>
</div>

<div style="background: #dcfce7; padding: 1.5rem; border-radius: 10px; border: 2px solid #22c55e;">
<h4 style="color: #166534; margin-bottom: 0.75rem; font-size: 1.1rem;">🔹 Lateral Vibration (Whirl)</h4>
<p style="color: #14532d; line-height: 1.8; margin-bottom: 0.75rem;">
Circular lateral movement of the bit or BHA inside the wellbore. Causes uneven wear and tool damage:
</p>
<ul style="margin: 0; padding-left: 1.25rem; color: #14532d; line-height: 1.8;">
<li><strong>Forward Whirl:</strong> Bit rotates in same direction as rotation</li>
<li><strong>Backward Whirl:</strong> Bit rotates opposite to rotation direction (more damaging)</li>
<li><strong>Causes:</strong> BHA imbalance, Hole enlargement, RPM near Resonance</li>
<li><strong>Signs:</strong> Uneven bit wear, Spiral marks on wellbore wall</li>
</ul>
</div>
</div>

</section>`,
          keyTerms: [
            { term: 'Bit Bounce', definition: 'Axial vibration - bit bouncing off the formation' },
            { term: 'Stick-Slip', definition: 'Torsional vibration - bit stopping then suddenly releasing' },
            { term: 'Whirl', definition: 'Lateral vibration - circular bit movement inside the wellbore' },
            { term: 'Critical RPM', definition: 'Resonance speed that amplifies vibrations' },
            { term: 'Shock Sub', definition: 'Tool to absorb axial vibrations' },
          ],
          practiceQuestion: {
            question: 'What type of vibration causes Torque fluctuation at surface?',
            options: ['Bit Bounce', 'Stick-Slip', 'Forward Whirl', 'Backward Whirl'],
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
          title: 'تحسين عمر رأس الحفر واختيار الرأس المناسب',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 تحسين عمر رأس الحفر (Bit Life Optimization)</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<p style="font-size: 1.1rem; line-height: 1.8;">
اختيار رأس الحفر المناسب وتشغيله بشكل صحيح يمكن أن يوفر مئات الآلاف من الدولارات في البئر الواحد. الهدف ليس مجرد تحقيق أعلى ROP، بل تحقيق أقل Cost per Foot من خلال توازن بين ROP وعمر الرأس وعدد الرحلات.
</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 أنواع رؤوس الحفر الرئيسية</h3>

<div style="display: grid; gap: 1.25rem; margin-bottom: 1.5rem;">
<div style="background: #fef3c7; padding: 1.5rem; border-radius: 10px; border: 2px solid #f59e0b;">
<h4 style="color: #92400e; margin-bottom: 0.75rem; font-size: 1.1rem;">🔸 رؤوس PDC (Polycrystalline Diamond Compact)</h4>
<p style="color: #78350f; line-height: 1.8; margin-bottom: 0.75rem;">
الأكثر استخداماً في الحفر الحديث. تعمل بالقص (Shearing):
</p>
<ul style="margin: 0; padding-right: 1.25rem; color: #78350f; line-height: 1.8;">
<li><strong>المميزات:</strong> ROP عالي، عمر طويل في التكوينات المناسبة، لا أجزاء متحركة</li>
<li><strong>العيوب:</strong> حساسة للاهتزازات، ضعيفة في التكوينات الصلبة جداً</li>
<li><strong>التطبيقات:</strong> Shales, Sandstones, Limestones, Anhydrite</li>
<li><strong>WOB:</strong> 1,000-5,000 lbs/inch</li>
<li><strong>RPM:</strong> 60-200 RPM</li>
</ul>
</div>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 10px; border: 2px solid #3b82f6;">
<h4 style="color: #1e40af; margin-bottom: 0.75rem; font-size: 1.1rem;">🔹 رؤوس Roller Cone (Tricone)</h4>
<p style="color: #1e3a8a; line-height: 1.8; margin-bottom: 0.75rem;">
تعمل بالتكسير والطحن (Crushing). ثلاثة مخاريط دوارة:
</p>
<ul style="margin: 0; padding-right: 1.25rem; color: #1e3a8a; line-height: 1.8;">
<li><strong>المميزات:</strong> أقل حساسية للاهتزازات، جيدة في التكوينات الصلبة</li>
<li><strong>العيوب:</strong> أجزاء متحركة (Bearings)، ROP أقل من PDC</li>
<li><strong>Milled Tooth:</strong> للتكوينات اللينة - أسنان فولاذية كبيرة</li>
<li><strong>Insert (TCI):</strong> للتكوينات الصلبة - Tungsten Carbide inserts</li>
</ul>
</div>

<div style="background: #dcfce7; padding: 1.5rem; border-radius: 10px; border: 2px solid #22c55e;">
<h4 style="color: #166534; margin-bottom: 0.75rem; font-size: 1.1rem;">🔹 رؤوس Diamond (Impregnated / Natural)</h4>
<p style="color: #14532d; line-height: 1.8; margin-bottom: 0.75rem;">
للتكوينات الصلبة جداً والكاشطة:
</p>
<ul style="margin: 0; padding-right: 1.25rem; color: #14532d; line-height: 1.8;">
<li><strong>Impregnated:</strong> جزيئات ماس صغيرة في Matrix معدني</li>
<li><strong>Natural Diamond:</strong> أحجار ماس طبيعية</li>
<li><strong>التطبيقات:</strong> Granite, Quartzite, very hard formations</li>
<li><strong>WOB:</strong> منخفض (500-2,000 lbs/inch)</li>
<li><strong>RPM:</strong> عالي مع Turbines</li>
</ul>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 نظام تصنيف تآكل الرأس (IADC Dull Grading)</h3>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
نظام موحد من 8 خانات لوصف حالة الرأس بعد الاستخدام:
</p>

<div style="background: #e0e7ff; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<p style="color: #3730a3; line-height: 1.8; margin: 0; font-family: monospace;">
<strong>Format:</strong> I/O - D - L - B - G - O - R<br/><br/>
I = Inner Rows Wear (0-8)<br/>
O = Outer Rows Wear (0-8)<br/>
D = Dull Characteristic (BT, CT, WT, etc.)<br/>
L = Location (N, M, G, A)<br/>
B = Bearing/Seal (0-8 for Roller Cone)<br/>
G = Gauge (I = In Gauge, 1/16" increments)<br/>
O = Other Dull Characteristic<br/>
R = Reason Pulled (BHA, DMF, DTF, etc.)
</p>
</div>

<h4 style="color: #1e3a5f; margin: 1rem 0 0.75rem 0; font-size: 1.05rem;">أهم Dull Characteristics:</h4>
<ul style="margin: 0; padding-right: 1.25rem; line-height: 2;">
<li><strong>BT (Broken Teeth):</strong> أسنان مكسورة - WOB عالي أو Vibrations</li>
<li><strong>CT (Chipped Teeth):</strong> تشقق الأسنان - Impact أو تكوين صلب</li>
<li><strong>WT (Worn Teeth):</strong> تآكل طبيعي - نهاية عمر الرأس</li>
<li><strong>RO (Ring Out):</strong> تآكل دائري - Whirl</li>
<li><strong>PN (Plugged Nozzles):</strong> انسداد النفاثات</li>
<li><strong>BU (Balled Up):</strong> تراكم الطين على الرأس</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 استراتيجيات تحسين عمر الرأس</h3>

<div style="background: #ecfdf5; padding: 1.5rem; border-radius: 10px; border-right: 4px solid #10b981; margin: 1.5rem 0;">
<h4 style="color: #059669; margin-bottom: 0.75rem; font-size: 1.15rem;">✅ أفضل الممارسات:</h4>
<ul style="margin: 0; padding-right: 1.25rem; color: #065f46; line-height: 2;">
<li><strong>Break-in Period:</strong> ابدأ بـ WOB منخفض أول 30 دقيقة</li>
<li><strong>Monitor MSE:</strong> ارتفاع MSE يشير لبداية تآكل الرأس</li>
<li><strong>Control Vibrations:</strong> الاهتزازات تقلل عمر الرأس بشكل كبير</li>
<li><strong>Proper Hydraulics:</strong> تنظيف جيد يمنع Balling</li>
<li><strong>Formation Changes:</strong> عدّل المعاملات عند تغير التكوين</li>
<li><strong>Trip Criteria:</strong> حدد معايير واضحة لسحب الرأس (ROP decline, hours)</li>
</ul>
</div>

<div style="background: #fef2f2; padding: 1.5rem; border-radius: 10px; border-right: 4px solid #dc2626; margin: 1.5rem 0;">
<h4 style="color: #dc2626; margin-bottom: 0.75rem; font-size: 1.15rem;">⚠️ متى تسحب الرأس؟</h4>
<ul style="margin: 0; padding-right: 1.25rem; color: #7f1d1d; line-height: 2;">
<li>انخفاض ROP بنسبة 30-50% عن المعدل</li>
<li>ارتفاع MSE بشكل مستمر</li>
<li>تذبذب غير طبيعي في Torque</li>
<li>انخفاض Standpipe Pressure (نفاثة مفقودة)</li>
<li>وصول الساعات للحد المخطط</li>
</ul>
</div>

</section>`,
          keyTerms: [
            { term: 'PDC Bit', definition: 'رأس الماس متعدد البلورات - يعمل بالقص' },
            { term: 'Roller Cone Bit', definition: 'رأس المخاريط الدوارة - يعمل بالتكسير' },
            { term: 'IADC Dull Grading', definition: 'نظام موحد لتصنيف تآكل رأس الحفر' },
            { term: 'Bit Balling', definition: 'تراكم الطين على سطح الرأس مما يقلل كفاءته' },
            { term: 'Break-in Period', definition: 'فترة البداية بمعاملات منخفضة لحماية الرأس الجديد' },
          ],
          practiceQuestion: {
            question: 'ما هو رمز تآكل الرأس الذي يشير إلى مشكلة Whirl؟',
            options: ['BT (Broken Teeth)', 'RO (Ring Out)', 'BU (Balled Up)', 'WT (Worn Teeth)'],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Bit Life Optimization and Proper Bit Selection',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Bit Life Optimization</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<p style="font-size: 1.1rem; line-height: 1.8;">
Selecting the right drill bit and operating it correctly can save hundreds of thousands of dollars per well. The goal isn't just achieving the highest ROP, but achieving the lowest Cost per Foot through a balance between ROP, bit life, and number of trips.
</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 Main Drill Bit Types</h3>

<div style="display: grid; gap: 1.25rem; margin-bottom: 1.5rem;">
<div style="background: #fef3c7; padding: 1.5rem; border-radius: 10px; border: 2px solid #f59e0b;">
<h4 style="color: #92400e; margin-bottom: 0.75rem; font-size: 1.1rem;">🔸 PDC Bits (Polycrystalline Diamond Compact)</h4>
<p style="color: #78350f; line-height: 1.8; margin-bottom: 0.75rem;">
Most commonly used in modern drilling. Work by shearing:
</p>
<ul style="margin: 0; padding-left: 1.25rem; color: #78350f; line-height: 1.8;">
<li><strong>Advantages:</strong> High ROP, long life in suitable formations, no moving parts</li>
<li><strong>Disadvantages:</strong> Sensitive to vibrations, weak in very hard formations</li>
<li><strong>Applications:</strong> Shales, Sandstones, Limestones, Anhydrite</li>
</ul>
</div>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 10px; border: 2px solid #3b82f6;">
<h4 style="color: #1e40af; margin-bottom: 0.75rem; font-size: 1.1rem;">🔹 Roller Cone Bits (Tricone)</h4>
<p style="color: #1e3a8a; line-height: 1.8; margin-bottom: 0.75rem;">
Work by crushing and grinding. Three rotating cones:
</p>
<ul style="margin: 0; padding-left: 1.25rem; color: #1e3a8a; line-height: 1.8;">
<li><strong>Advantages:</strong> Less sensitive to vibrations, good in hard formations</li>
<li><strong>Disadvantages:</strong> Moving parts (Bearings), lower ROP than PDC</li>
<li><strong>Milled Tooth:</strong> For soft formations - large steel teeth</li>
<li><strong>Insert (TCI):</strong> For hard formations - Tungsten Carbide inserts</li>
</ul>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 IADC Dull Grading System</h3>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
Standardized 8-character system to describe bit condition after use:
</p>

<div style="background: #e0e7ff; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<p style="color: #3730a3; line-height: 1.8; margin: 0; font-family: monospace;">
<strong>Format:</strong> I/O - D - L - B - G - O - R<br/><br/>
I = Inner Rows Wear (0-8)<br/>
O = Outer Rows Wear (0-8)<br/>
D = Dull Characteristic (BT, CT, WT, etc.)<br/>
L = Location (N, M, G, A)<br/>
B = Bearing/Seal (0-8 for Roller Cone)<br/>
G = Gauge (I = In Gauge, 1/16" increments)<br/>
O = Other Dull Characteristic<br/>
R = Reason Pulled (BHA, DMF, DTF, etc.)
</p>
</div>
</div>

</section>`,
          keyTerms: [
            { term: 'PDC Bit', definition: 'Polycrystalline Diamond Compact bit - works by shearing' },
            { term: 'Roller Cone Bit', definition: 'Rotating cone bit - works by crushing' },
            { term: 'IADC Dull Grading', definition: 'Standardized system for grading bit wear' },
            { term: 'Bit Balling', definition: 'Clay accumulation on bit surface reducing efficiency' },
            { term: 'Break-in Period', definition: 'Initial period with low parameters to protect new bit' },
          ],
          practiceQuestion: {
            question: 'Which dull grading code indicates a Whirl problem?',
            options: ['BT (Broken Teeth)', 'RO (Ring Out)', 'BU (Balled Up)', 'WT (Worn Teeth)'],
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
          title: 'مراجعة شاملة - التحليل المتكامل واتخاذ القرار',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 مراجعة شاملة: تحسين أداء الحفر المتكامل</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<p style="font-size: 1.1rem; line-height: 1.8;">
تحسين الحفر الفعّال يتطلب نظرة شاملة تجمع بين جميع العناصر: المعاملات، المعدات، الهيدروليكا، والمراقبة المستمرة. في هذه المراجعة، نربط كل ما تعلمناه في إطار عملي موحد للتطبيق الميداني.
</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 ملخص مؤشرات الأداء الأساسية</h3>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<table style="width: 100%; border-collapse: collapse; font-size: 0.95rem;">
<tr style="border-bottom: 2px solid #d1d5db; background: #e5e7eb;">
<th style="padding: 0.75rem; text-align: right; color: #1e3a5f;">المؤشر</th>
<th style="padding: 0.75rem; text-align: right; color: #1e3a5f;">التعريف</th>
<th style="padding: 0.75rem; text-align: right; color: #1e3a5f;">الهدف</th>
</tr>
<tr style="border-bottom: 1px solid #e5e7eb;">
<td style="padding: 0.75rem; font-weight: bold;">ROP</td>
<td style="padding: 0.75rem;">معدل الاختراق (ft/hr)</td>
<td style="padding: 0.75rem;">أعلى ما يمكن مع الحفاظ على الاستقرار</td>
</tr>
<tr style="border-bottom: 1px solid #e5e7eb;">
<td style="padding: 0.75rem; font-weight: bold;">NPT</td>
<td style="padding: 0.75rem;">الزمن غير المنتج</td>
<td style="padding: 0.75rem;">أقل من 5%</td>
</tr>
<tr style="border-bottom: 1px solid #e5e7eb;">
<td style="padding: 0.75rem; font-weight: bold;">Cost/ft</td>
<td style="padding: 0.75rem;">تكلفة القدم الواحد</td>
<td style="padding: 0.75rem;">أقل ما يمكن</td>
</tr>
<tr style="border-bottom: 1px solid #e5e7eb;">
<td style="padding: 0.75rem; font-weight: bold;">MSE</td>
<td style="padding: 0.75rem;">الطاقة الميكانيكية النوعية</td>
<td style="padding: 0.75rem;">قريبة من CCS (نسبة 1-3)</td>
</tr>
<tr>
<td style="padding: 0.75rem; font-weight: bold;">Bit Life</td>
<td style="padding: 0.75rem;">عمر الرأس</td>
<td style="padding: 0.75rem;">توازن مع ROP لأقل Cost/ft</td>
</tr>
</table>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 خطوات التحسين العملية</h3>

<div style="background: #ecfdf5; padding: 1.5rem; border-radius: 10px; border-right: 4px solid #10b981; margin: 1.5rem 0;">
<h4 style="color: #059669; margin-bottom: 0.75rem; font-size: 1.15rem;">🔄 دورة التحسين المستمر:</h4>
<ol style="margin: 0; padding-right: 1.5rem; color: #065f46; line-height: 2;">
<li><strong>التخطيط:</strong> دراسة بيانات الآبار المجاورة، اختيار الرأس والمعاملات المبدئية</li>
<li><strong>المراقبة:</strong> متابعة ROP, MSE, Torque, Vibrations في الوقت الفعلي</li>
<li><strong>التحليل:</strong> مقارنة الأداء مع المتوقع وتحديد الانحرافات</li>
<li><strong>التعديل:</strong> تغيير معامل واحد في كل مرة ومراقبة النتيجة</li>
<li><strong>التوثيق:</strong> تسجيل كل التغييرات والنتائج للآبار المستقبلية</li>
</ol>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 شجرة اتخاذ القرار للمشاكل الشائعة</h3>

<div style="background: #fff7ed; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #9a3412; margin-bottom: 1rem;">🔍 ROP منخفض - ماذا تفعل؟</h4>
<div style="background: #ffedd5; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<ol style="margin: 0; padding-right: 1.5rem; color: #9a3412; line-height: 2;">
<li>تحقق من MSE - هل هي عالية؟ (مشكلة كفاءة)</li>
<li>راجع Vibrations - هل هناك Stick-Slip أو Whirl؟</li>
<li>فحص Hydraulics - هل HSI كافي؟ هل هناك Balling؟</li>
<li>جرب زيادة WOB تدريجياً (مع مراقبة Torque)</li>
<li>جرب تغيير RPM (أعلى أو أقل حسب نوع الرأس)</li>
<li>إذا استمرت المشكلة - قد يكون الرأس متآكلاً أو غير مناسب</li>
</ol>
</div>

<h4 style="color: #9a3412; margin-bottom: 1rem;">🔍 اهتزازات شديدة - ماذا تفعل؟</h4>
<div style="background: #ffedd5; padding: 1rem; border-radius: 8px;">
<ul style="margin: 0; padding-right: 1.25rem; color: #9a3412; line-height: 2;">
<li><strong>Stick-Slip:</strong> زيادة RPM، تقليل WOB، تفعيل Anti-Stick-Slip</li>
<li><strong>Bit Bounce:</strong> تقليل WOB، Shock Sub، تغيير نوع الرأس</li>
<li><strong>Whirl:</strong> تعديل RPM بعيداً عن Critical، إضافة Stabilizers</li>
</ul>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 التقنيات المتقدمة في تحسين الحفر</h3>

<div style="display: grid; gap: 1.25rem; margin-bottom: 1.5rem;">
<div style="background: #dbeafe; padding: 1.5rem; border-radius: 10px; border: 2px solid #3b82f6;">
<h4 style="color: #1e40af; margin-bottom: 0.75rem; font-size: 1.1rem;">🤖 الأتمتة والذكاء الاصطناعي</h4>
<ul style="margin: 0; padding-right: 1.25rem; color: #1e3a8a; line-height: 1.8;">
<li><strong>Auto-Driller:</strong> تحكم آلي في WOB للحفاظ على ROP ثابت</li>
<li><strong>RSS Steering:</strong> توجيه آلي للمسار</li>
<li><strong>ML/AI Optimization:</strong> تحليل بيانات متقدم للتنبؤ بالمشاكل</li>
<li><strong>Digital Twin:</strong> نموذج رقمي للبئر للمحاكاة والتحسين</li>
</ul>
</div>

<div style="background: #dcfce7; padding: 1.5rem; border-radius: 10px; border: 2px solid #22c55e;">
<h4 style="color: #166534; margin-bottom: 0.75rem; font-size: 1.1rem;">📊 Real-Time Optimization Centers</h4>
<ul style="margin: 0; padding-right: 1.25rem; color: #14532d; line-height: 1.8;">
<li>مراكز تحكم عن بعد مع خبراء متخصصين</li>
<li>مراقبة 24/7 لعدة آبار في وقت واحد</li>
<li>تحليل فوري للبيانات واقتراح التعديلات</li>
<li>مقارنة الأداء مع قاعدة بيانات ضخمة</li>
</ul>
</div>
</div>

<div style="background: #fef2f2; padding: 1.5rem; border-radius: 10px; border-right: 4px solid #dc2626; margin: 1.5rem 0;">
<h4 style="color: #dc2626; margin-bottom: 0.75rem; font-size: 1.15rem;">⚠️ أخطاء شائعة يجب تجنبها:</h4>
<ul style="margin: 0; padding-right: 1.25rem; color: #7f1d1d; line-height: 2;">
<li>تغيير عدة معاملات في وقت واحد (يصعب تحديد السبب والنتيجة)</li>
<li>تجاهل علامات الاهتزازات لتحقيق ROP أعلى</li>
<li>عدم توثيق التغييرات والنتائج</li>
<li>استخدام نفس المعاملات لكل التكوينات</li>
<li>التأخر في سحب الرأس المتآكل (يرفع Cost/ft)</li>
</ul>
</div>

</section>`,
          keyTerms: [
            { term: 'Optimization Cycle', definition: 'دورة التحسين المستمر: تخطيط، مراقبة، تحليل، تعديل، توثيق' },
            { term: 'Auto-Driller', definition: 'نظام تحكم آلي في WOB للحفاظ على ROP مستهدف' },
            { term: 'Real-Time Center', definition: 'مركز تحكم عن بعد لمراقبة وتحسين عمليات الحفر' },
            { term: 'Digital Twin', definition: 'نموذج رقمي للبئر للمحاكاة والتحسين' },
            { term: 'Offset Well Data', definition: 'بيانات الآبار المجاورة المستخدمة للتخطيط' },
          ],
          practiceQuestion: {
            question: 'ما هو الخطأ الشائع في عملية تحسين الحفر؟',
            options: ['توثيق جميع التغييرات', 'تغيير معامل واحد في كل مرة', 'تغيير عدة معاملات في وقت واحد', 'مراقبة MSE باستمرار'],
            correctAnswer: 2,
          },
        },
        en: {
          title: 'Comprehensive Review - Integrated Analysis and Decision Making',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Comprehensive Review: Integrated Drilling Optimization</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<p style="font-size: 1.1rem; line-height: 1.8;">
Effective drilling optimization requires a comprehensive view that combines all elements: parameters, equipment, hydraulics, and continuous monitoring. In this review, we connect everything learned into a unified practical framework for field application.
</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 Key Performance Indicators Summary</h3>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<table style="width: 100%; border-collapse: collapse; font-size: 0.95rem;">
<tr style="border-bottom: 2px solid #d1d5db; background: #e5e7eb;">
<th style="padding: 0.75rem; text-align: left; color: #1e3a5f;">Indicator</th>
<th style="padding: 0.75rem; text-align: left; color: #1e3a5f;">Definition</th>
<th style="padding: 0.75rem; text-align: left; color: #1e3a5f;">Target</th>
</tr>
<tr style="border-bottom: 1px solid #e5e7eb;">
<td style="padding: 0.75rem; font-weight: bold;">ROP</td>
<td style="padding: 0.75rem;">Rate of Penetration (ft/hr)</td>
<td style="padding: 0.75rem;">Maximize while maintaining stability</td>
</tr>
<tr style="border-bottom: 1px solid #e5e7eb;">
<td style="padding: 0.75rem; font-weight: bold;">NPT</td>
<td style="padding: 0.75rem;">Non-Productive Time</td>
<td style="padding: 0.75rem;">Less than 5%</td>
</tr>
<tr style="border-bottom: 1px solid #e5e7eb;">
<td style="padding: 0.75rem; font-weight: bold;">Cost/ft</td>
<td style="padding: 0.75rem;">Cost per foot drilled</td>
<td style="padding: 0.75rem;">Minimize</td>
</tr>
<tr style="border-bottom: 1px solid #e5e7eb;">
<td style="padding: 0.75rem; font-weight: bold;">MSE</td>
<td style="padding: 0.75rem;">Mechanical Specific Energy</td>
<td style="padding: 0.75rem;">Close to CCS (ratio 1-3)</td>
</tr>
<tr>
<td style="padding: 0.75rem; font-weight: bold;">Bit Life</td>
<td style="padding: 0.75rem;">Bit operational life</td>
<td style="padding: 0.75rem;">Balance with ROP for lowest Cost/ft</td>
</tr>
</table>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 Practical Optimization Steps</h3>

<div style="background: #ecfdf5; padding: 1.5rem; border-radius: 10px; border-left: 4px solid #10b981; margin: 1.5rem 0;">
<h4 style="color: #059669; margin-bottom: 0.75rem; font-size: 1.15rem;">🔄 Continuous Optimization Cycle:</h4>
<ol style="margin: 0; padding-left: 1.5rem; color: #065f46; line-height: 2;">
<li><strong>Plan:</strong> Study offset well data, select bit and initial parameters</li>
<li><strong>Monitor:</strong> Track ROP, MSE, Torque, Vibrations in real-time</li>
<li><strong>Analyze:</strong> Compare performance to expectations, identify deviations</li>
<li><strong>Adjust:</strong> Change one parameter at a time, monitor results</li>
<li><strong>Document:</strong> Record all changes and results for future wells</li>
</ol>
</div>

</section>`,
          keyTerms: [
            { term: 'Optimization Cycle', definition: 'Continuous improvement cycle: plan, monitor, analyze, adjust, document' },
            { term: 'Auto-Driller', definition: 'Automatic WOB control system to maintain target ROP' },
            { term: 'Real-Time Center', definition: 'Remote control center for monitoring and optimizing drilling operations' },
            { term: 'Digital Twin', definition: 'Digital model of the well for simulation and optimization' },
            { term: 'Offset Well Data', definition: 'Data from nearby wells used for planning' },
          ],
          practiceQuestion: {
            question: 'What is a common mistake in drilling optimization?',
            options: ['Documenting all changes', 'Changing one parameter at a time', 'Changing multiple parameters at once', 'Continuously monitoring MSE'],
            correctAnswer: 2,
          },
        },
      },
    },
    {
      day: 6,
      type: 'quiz',
      content: {
        ar: { title: 'اختبار تحسين أداء الحفر', explanation: 'اختبر معرفتك في تحسين أداء الحفر', keyTerms: [] },
        en: { title: 'Drilling Optimization Quiz', explanation: 'Test your knowledge on drilling optimization', keyTerms: [] },
      },
      quiz: {
        en: [
          {
            question: 'What does MSE stand for in drilling optimization?',
            options: ['Maximum Surface Energy', 'Mechanical Specific Energy', 'Minimum Stress Efficiency', 'Motor Speed Evaluation'],
            correctAnswer: 1,
          },
          {
            question: 'Which indicator represents time lost on unplanned problems?',
            options: ['ROP', 'MSE', 'NPT', 'HSI'],
            correctAnswer: 2,
          },
          {
            question: 'What is the target NPT percentage for efficient drilling?',
            options: ['Less than 5%', 'Less than 15%', 'Less than 25%', 'Less than 50%'],
            correctAnswer: 0,
          },
          {
            question: 'What causes Stick-Slip vibration?',
            options: ['Low WOB', 'Bit bouncing off formation', 'Bit stopping then suddenly releasing', 'Lateral bit movement'],
            correctAnswer: 2,
          },
          {
            question: 'What type of drill bit works by shearing action?',
            options: ['Roller Cone', 'PDC', 'Milled Tooth', 'Natural Diamond'],
            correctAnswer: 1,
          },
          {
            question: 'What does the RO code in IADC dull grading indicate?',
            options: ['Broken teeth', 'Ring Out (Whirl damage)', 'Balled up bit', 'Worn teeth'],
            correctAnswer: 1,
          },
          {
            question: 'What is the formula for total bit RPM when using a downhole motor?',
            options: ['Surface RPM only', 'Motor RPM only', 'Surface RPM + Motor RPM', 'Surface RPM × Motor RPM'],
            correctAnswer: 2,
          },
          {
            question: 'What is the purpose of HSI in hydraulics optimization?',
            options: ['Measure torque', 'Measure bit cleaning power', 'Measure vibration', 'Measure ROP'],
            correctAnswer: 1,
          },
          {
            question: 'What is a common mistake during drilling optimization?',
            options: ['Monitoring MSE', 'Changing one parameter at a time', 'Changing multiple parameters simultaneously', 'Documenting changes'],
            correctAnswer: 2,
          },
          {
            question: 'What indicates that a bit should be pulled?',
            options: ['High ROP', 'Low MSE', 'ROP decline of 30-50%', 'Stable torque'],
            correctAnswer: 2,
          },
        ],
        ar: [
          {
            question: 'ماذا تعني MSE في تحسين الحفر؟',
            options: ['الطاقة السطحية القصوى', 'الطاقة الميكانيكية النوعية', 'كفاءة الإجهاد الأدنى', 'تقييم سرعة المحرك'],
            correctAnswer: 1,
          },
          {
            question: 'أي مؤشر يمثل الوقت الضائع في المشاكل غير المخططة؟',
            options: ['ROP', 'MSE', 'NPT', 'HSI'],
            correctAnswer: 2,
          },
          {
            question: 'ما هي نسبة NPT المستهدفة للحفر الفعال؟',
            options: ['أقل من 5%', 'أقل من 15%', 'أقل من 25%', 'أقل من 50%'],
            correctAnswer: 0,
          },
          {
            question: 'ما الذي يسبب اهتزاز Stick-Slip؟',
            options: ['WOB منخفض', 'ارتداد الرأس عن التكوين', 'توقف الرأس ثم انطلاقه فجأة', 'حركة جانبية للرأس'],
            correctAnswer: 2,
          },
          {
            question: 'أي نوع من رؤوس الحفر يعمل بالقص؟',
            options: ['Roller Cone', 'PDC', 'Milled Tooth', 'Natural Diamond'],
            correctAnswer: 1,
          },
          {
            question: 'ماذا يشير رمز RO في تصنيف IADC؟',
            options: ['أسنان مكسورة', 'تآكل دائري (ضرر Whirl)', 'تراكم الطين', 'تآكل الأسنان'],
            correctAnswer: 1,
          },
          {
            question: 'ما هي معادلة RPM الكلي للرأس عند استخدام محرك قاعي؟',
            options: ['Surface RPM فقط', 'Motor RPM فقط', 'Surface RPM + Motor RPM', 'Surface RPM × Motor RPM'],
            correctAnswer: 2,
          },
          {
            question: 'ما هو الغرض من HSI في تحسين الهيدروليكا؟',
            options: ['قياس العزم', 'قياس قوة تنظيف الرأس', 'قياس الاهتزازات', 'قياس ROP'],
            correctAnswer: 1,
          },
          {
            question: 'ما هو الخطأ الشائع في تحسين الحفر؟',
            options: ['مراقبة MSE', 'تغيير معامل واحد في كل مرة', 'تغيير عدة معاملات في وقت واحد', 'توثيق التغييرات'],
            correctAnswer: 2,
          },
          {
            question: 'ما الذي يشير إلى ضرورة سحب الرأس؟',
            options: ['ROP عالي', 'MSE منخفض', 'انخفاض ROP بنسبة 30-50%', 'Torque مستقر'],
            correctAnswer: 2,
          },
        ],
      },
    },
    {
      day: 7,
      type: 'project',
      content: {
        ar: { title: 'مشروع: تحليل وتحسين أداء الحفر', explanation: 'طبق ما تعلمته', keyTerms: [] },
        en: { title: 'Project: Drilling Performance Analysis and Optimization', explanation: 'Apply what you learned', keyTerms: [] },
      },
      project: {
        en: {
          title: 'Drilling Optimization Case Study',
          description: 'You are a drilling optimization engineer reviewing real-time data from an ongoing well. The 12-1/4" section is being drilled with a PDC bit. Current parameters: WOB = 25,000 lbs, RPM = 120, Flow Rate = 650 gpm. The ROP has dropped from 85 ft/hr to 45 ft/hr over the last 200 feet. Surface torque shows significant fluctuation.',
          instructions: [
            'Identify the most likely cause of the ROP decline based on the symptoms described',
            'Propose a systematic troubleshooting approach - what would you check first, second, third?',
            'Recommend specific parameter adjustments and explain the expected outcome of each',
            'Calculate the approximate MSE change if ROP dropped from 85 to 45 ft/hr with same WOB and RPM',
            'Develop criteria for deciding when to trip out and change the bit versus continue drilling',
          ],
          submissionType: 'text',
        },
        ar: {
          title: 'دراسة حالة تحسين الحفر',
          description: 'أنت مهندس تحسين حفر تراجع بيانات الوقت الفعلي من بئر جارية. يتم حفر مقطع 12-1/4" برأس PDC. المعاملات الحالية: WOB = 25,000 lbs، RPM = 120، Flow Rate = 650 gpm. انخفض ROP من 85 ft/hr إلى 45 ft/hr خلال آخر 200 قدم. يُظهر Torque السطحي تذبذباً كبيراً.',
          instructions: [
            'حدد السبب الأكثر احتمالاً لانخفاض ROP بناءً على الأعراض الموصوفة',
            'اقترح نهج استكشاف أخطاء منهجي - ماذا ستفحص أولاً، ثانياً، ثالثاً؟',
            'أوصِ بتعديلات محددة للمعاملات واشرح النتيجة المتوقعة لكل منها',
            'احسب التغير التقريبي في MSE إذا انخفض ROP من 85 إلى 45 ft/hr مع نفس WOB و RPM',
            'طور معايير لاتخاذ قرار متى تسحب وتغير الرأس مقابل الاستمرار في الحفر',
          ],
          submissionType: 'text',
        },
      },
    },
  ],
};
