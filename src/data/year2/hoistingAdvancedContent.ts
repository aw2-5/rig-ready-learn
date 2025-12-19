import { WeeklyLesson } from '../weeklyContent';

export const hoistingAdvancedLesson: WeeklyLesson = {
  lessonId: 'hoisting-advanced',
  days: [
    {
      day: 1,
      type: 'learning',
      content: {
        ar: {
          title: 'حسابات الحمل على نظام الرفع - Hook Load',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🎯 الهدف من اليوم</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
تفهم كيف تحسب الحمل على الخطاف (Hook Load) ولماذا هذا الرقم حاسم في كل قرار تاخذه أثناء الحفر والرحلات.
</p>

<div style="background: linear-gradient(135deg, #dc262615, #dc262610); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #dc2626;">
<h3 style="color: #dc2626; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">⚠️ سيناريو من الموقع</h3>
<p style="line-height: 1.8;">
أنت مهندس موقع، والدريلر يقول: "Hook Load 450,000 lbs وأنا شاك ليش عالي!"<br/>
<strong>شنو تسوي؟</strong> لازم تعرف منين إجا هالرقم عشان تفهم إذا طبيعي أو فيه مشكلة.
</p>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">📐 المعادلة الأساسية</h2>

<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #1e3a5f;">
<p style="font-size: 1.3rem; font-weight: bold; text-align: center; color: #1e3a5f; direction: ltr;">
Hook Load = (Weight of String in Air) - (Buoyancy Effect)
</p>
<p style="font-size: 1.2rem; text-align: center; color: #1e3a5f; margin-top: 0.5rem; direction: ltr;">
HL = Wair × BF
</p>
</div>

<h3 style="color: #059669; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">🔍 منين إجت هالمعادلة؟</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li><strong>Wair:</strong> وزن سلسلة الحفر بالهواء = طول المواسير × وزن القدم الواحد</li>
<li><strong>BF (Buoyancy Factor):</strong> لما المواسير تنزل بالطين، الطين يدفعها لفوق (مثل ما يصير لك بالمسبح)</li>
<li>الطين كل ما ثقل، كل ما خفف الحمل على الخطاف</li>
</ul>

<div style="background: linear-gradient(135deg, #1e3a5f15, #1e3a5f10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #1e3a5f; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">📊 معادلة Buoyancy Factor</h3>
<p style="font-size: 1.2rem; text-align: center; color: #1e3a5f; direction: ltr;">
BF = 1 - (Mud Weight / Steel Density)
</p>
<p style="font-size: 1.1rem; text-align: center; color: #1e3a5f; direction: ltr;">
BF = 1 - (MW / 65.4)
</p>
<p style="margin-top: 0.75rem; font-size: 0.95rem;">
* كثافة الحديد = 65.4 ppg (ثابت)
</p>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🧮 مثال حسابي كامل</h2>

<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #059669;">
<h4 style="color: #059669; font-weight: bold; margin-bottom: 1rem;">المعطيات:</h4>
<ul style="list-style: none; padding: 0; line-height: 2;">
<li>• طول الـ Drill Pipe = 10,000 ft</li>
<li>• وزن القدم = 19.5 lb/ft (5" DP)</li>
<li>• طول الـ Drill Collars = 600 ft</li>
<li>• وزن القدم = 147 lb/ft (8" DC)</li>
<li>• وزن الطين = 12 ppg</li>
</ul>

<h4 style="color: #059669; font-weight: bold; margin: 1.5rem 0 1rem;">الحل خطوة بخطوة:</h4>

<p style="margin-bottom: 0.5rem;"><strong>1. وزن String بالهواء:</strong></p>
<p style="padding-right: 1rem; direction: ltr; margin-bottom: 1rem;">
Wair = (10,000 × 19.5) + (600 × 147) = 195,000 + 88,200 = 283,200 lbs
</p>

<p style="margin-bottom: 0.5rem;"><strong>2. حساب BF:</strong></p>
<p style="padding-right: 1rem; direction: ltr; margin-bottom: 1rem;">
BF = 1 - (12 / 65.4) = 1 - 0.183 = 0.817
</p>

<p style="margin-bottom: 0.5rem;"><strong>3. Hook Load:</strong></p>
<p style="padding-right: 1rem; direction: ltr; margin-bottom: 1rem;">
HL = 283,200 × 0.817 = <strong style="color: #059669;">231,374 lbs</strong>
</p>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🎓 شنو تفهم من هالرقم ميدانياً؟</h2>

<div style="display: grid; gap: 1rem; margin: 1rem 0;">
<div style="background: #fef3c7; padding: 1rem; border-radius: 8px; border-right: 4px solid #f59e0b;">
<p style="font-weight: bold; color: #92400e;">إذا Hook Load أعلى من المتوقع:</p>
<ul style="margin-top: 0.5rem; padding-right: 1.5rem; line-height: 1.8;">
<li>احتمال String عالق (Stuck Pipe)</li>
<li>احتمال Tight Hole أو Ledges</li>
<li>لازم تتأكد من الحفرة قبل تكمل</li>
</ul>
</div>

<div style="background: #dbeafe; padding: 1rem; border-radius: 8px; border-right: 4px solid #2563eb;">
<p style="font-weight: bold; color: #1e40af;">إذا Hook Load أقل من المتوقع:</p>
<ul style="margin-top: 0.5rem; padding-right: 1.5rem; line-height: 1.8;">
<li>احتمال String يرتكز على قاع البئر</li>
<li>أو الـ BHA داخل في Washout</li>
<li>لازم تتابع الوزن بدقة</li>
</ul>
</div>
</div>

<h2 style="color: #dc2626; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">⚡ قرار: متى تقلق من Hook Load؟</h2>

<table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 12px; text-align: right;">الحالة</th>
<th style="padding: 12px; text-align: right;">القرار</th>
<th style="padding: 12px; text-align: right;">السبب</th>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #e2e8f0;">زيادة مفاجئة > 30,000 lbs</td>
<td style="padding: 12px; border: 1px solid #e2e8f0;">وقف فوري + Work String</td>
<td style="padding: 12px; border: 1px solid #e2e8f0;">احتمال Stuck عالي</td>
</tr>
<tr style="background: #ffffff;">
<td style="padding: 12px; border: 1px solid #e2e8f0;">نقصان تدريجي</td>
<td style="padding: 12px; border: 1px solid #e2e8f0;">راقب + سجل</td>
<td style="padding: 12px; border: 1px solid #e2e8f0;">قد يكون طبيعي (Hole Washout)</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #e2e8f0;">قفز متكرر</td>
<td style="padding: 12px; border: 1px solid #e2e8f0;">Short Trip + تنظيف</td>
<td style="padding: 12px; border: 1px solid #e2e8f0;">Ledges أو Cuttings</td>
</tr>
</table>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ربط الأنظمة</h3>
<p style="line-height: 1.8;">
Hook Load مرتبط بـ:
</p>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li><strong>وزن الطين:</strong> طين أثقل = BF أقل = Hook Load أقل</li>
<li><strong>تنظيف الحفرة:</strong> حفرة نظيفة = حركة سلسة = Hook Load ثابت</li>
<li><strong>Torque:</strong> Torque عالي مع Hook Load عالي = علامة Stuck</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Hook Load', definition: 'الوزن الفعلي المقاس على الخطاف' },
            { term: 'Buoyancy Factor', definition: 'معامل الطفو - تأثير الطين على تخفيف الوزن' },
            { term: 'String Weight', definition: 'الوزن الإجمالي لسلسلة الحفر' },
            { term: 'Overpull', definition: 'الزيادة في Hook Load عن المتوقع - علامة مقاومة' }
          ],
          practiceQuestion: {
            question: 'إذا كان Hook Load المتوقع 200,000 lbs والقراءة الفعلية 235,000 lbs، شنو أول شي تسويه؟',
            options: [
              'أكمل السحب بقوة أكبر',
              'أوقف وأعمل Work String (رفع وإنزال خفيف)',
              'أزيد وزن الطين',
              'أتجاهل الفرق وأكمل'
            ],
            correctAnswer: 1
          }
        },
        en: {
          title: 'Hook Load Calculations',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🎯 Today's Goal</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
Understand how to calculate Hook Load and why this number is critical for every decision you make during drilling and tripping.
</p>

<div style="background: linear-gradient(135deg, #dc262615, #dc262610); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #dc2626;">
<h3 style="color: #dc2626; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">⚠️ Field Scenario</h3>
<p style="line-height: 1.8;">
You're the site engineer, and the driller says: "Hook Load is 450,000 lbs and I'm not sure why it's high!"<br/>
<strong>What do you do?</strong> You need to know where this number came from to understand if it's normal or problematic.
</p>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">📐 Basic Formula</h2>

<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #1e3a5f;">
<p style="font-size: 1.3rem; font-weight: bold; text-align: center; color: #1e3a5f;">
Hook Load = (Weight of String in Air) × (Buoyancy Factor)
</p>
<p style="font-size: 1.2rem; text-align: center; color: #1e3a5f; margin-top: 0.5rem;">
HL = Wair × BF
</p>
</div>

<h3 style="color: #059669; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">🔍 Where does this formula come from?</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li><strong>Wair:</strong> Weight of drill string in air = pipe length × weight per foot</li>
<li><strong>BF (Buoyancy Factor):</strong> When pipes go into mud, the mud pushes them up (like swimming pool effect)</li>
<li>Heavier mud = less weight on hook</li>
</ul>

<div style="background: linear-gradient(135deg, #1e3a5f15, #1e3a5f10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #1e3a5f; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">📊 Buoyancy Factor Formula</h3>
<p style="font-size: 1.2rem; text-align: center; color: #1e3a5f;">
BF = 1 - (Mud Weight / Steel Density)
</p>
<p style="font-size: 1.1rem; text-align: center; color: #1e3a5f;">
BF = 1 - (MW / 65.4)
</p>
<p style="margin-top: 0.75rem; font-size: 0.95rem;">
* Steel density = 65.4 ppg (constant)
</p>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🧮 Complete Calculation Example</h2>

<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #059669;">
<h4 style="color: #059669; font-weight: bold; margin-bottom: 1rem;">Given Data:</h4>
<ul style="list-style: none; padding: 0; line-height: 2;">
<li>• Drill Pipe length = 10,000 ft</li>
<li>• Weight per foot = 19.5 lb/ft (5" DP)</li>
<li>• Drill Collars length = 600 ft</li>
<li>• Weight per foot = 147 lb/ft (8" DC)</li>
<li>• Mud weight = 12 ppg</li>
</ul>

<h4 style="color: #059669; font-weight: bold; margin: 1.5rem 0 1rem;">Step-by-Step Solution:</h4>

<p style="margin-bottom: 0.5rem;"><strong>1. String Weight in Air:</strong></p>
<p style="padding-left: 1rem; margin-bottom: 1rem;">
Wair = (10,000 × 19.5) + (600 × 147) = 195,000 + 88,200 = 283,200 lbs
</p>

<p style="margin-bottom: 0.5rem;"><strong>2. Calculate BF:</strong></p>
<p style="padding-left: 1rem; margin-bottom: 1rem;">
BF = 1 - (12 / 65.4) = 1 - 0.183 = 0.817
</p>

<p style="margin-bottom: 0.5rem;"><strong>3. Hook Load:</strong></p>
<p style="padding-left: 1rem; margin-bottom: 1rem;">
HL = 283,200 × 0.817 = <strong style="color: #059669;">231,374 lbs</strong>
</p>
</div>

<h2 style="color: #dc2626; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">⚡ Decision: When to Worry About Hook Load?</h2>

<table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 12px; text-align: left;">Situation</th>
<th style="padding: 12px; text-align: left;">Decision</th>
<th style="padding: 12px; text-align: left;">Reason</th>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #e2e8f0;">Sudden increase > 30,000 lbs</td>
<td style="padding: 12px; border: 1px solid #e2e8f0;">Stop + Work String</td>
<td style="padding: 12px; border: 1px solid #e2e8f0;">High stuck pipe probability</td>
</tr>
<tr style="background: #ffffff;">
<td style="padding: 12px; border: 1px solid #e2e8f0;">Gradual decrease</td>
<td style="padding: 12px; border: 1px solid #e2e8f0;">Monitor + Record</td>
<td style="padding: 12px; border: 1px solid #e2e8f0;">Could be normal (Hole Washout)</td>
</tr>
</table>
</section>`,
          keyTerms: [
            { term: 'Hook Load', definition: 'Actual weight measured at the hook' },
            { term: 'Buoyancy Factor', definition: 'Buoyancy coefficient - effect of mud on reducing weight' },
            { term: 'String Weight', definition: 'Total weight of drill string' },
            { term: 'Overpull', definition: 'Increase in Hook Load above expected - sign of resistance' }
          ],
          practiceQuestion: {
            question: 'If expected Hook Load is 200,000 lbs and actual reading is 235,000 lbs, what do you do first?',
            options: [
              'Continue pulling with more force',
              'Stop and work the string (gentle up/down movement)',
              'Increase mud weight',
              'Ignore the difference and continue'
            ],
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
          title: 'Derrick Load وسعة البرج - متى نوصل للخطر؟',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🎯 الهدف من اليوم</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
تفهم الفرق بين Hook Load و Derrick Load، وكيف تحسب إذا البرج يتحمل الحمل أو لا.
</p>

<div style="background: linear-gradient(135deg, #dc262615, #dc262610); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #dc2626;">
<h3 style="color: #dc2626; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">⚠️ سيناريو من الموقع</h3>
<p style="line-height: 1.8;">
الشركة تبي تستخدم Drill Collars إضافية (وزن إضافي 150,000 lbs).<br/>
المشرف يسأل: "البرج يتحمل؟"<br/>
<strong>شلون تجاوب بثقة؟</strong>
</p>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔄 الفرق الجوهري</h2>

<div style="display: grid; gap: 1rem; margin: 1rem 0;">
<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; border-right: 4px solid #2563eb;">
<h4 style="color: #1e40af; font-weight: bold; margin-bottom: 0.75rem;">Hook Load</h4>
<p>الوزن المعلق على الخطاف فقط</p>
<p style="font-size: 0.9rem; color: #64748b; margin-top: 0.5rem;">= String Weight × BF</p>
</div>

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; border-right: 4px solid #f59e0b;">
<h4 style="color: #92400e; font-weight: bold; margin-bottom: 0.75rem;">Derrick Load</h4>
<p>الوزن الكلي على البرج = Hook Load + وزن المعدات الثابتة</p>
<p style="font-size: 0.9rem; color: #64748b; margin-top: 0.5rem;">= Hook Load + Crown Block + Travelling Block + Deadline Anchor</p>
</div>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">📐 المعادلة الرئيسية</h2>

<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #1e3a5f;">
<p style="font-size: 1.2rem; font-weight: bold; text-align: center; color: #1e3a5f; direction: ltr;">
Derrick Load = Hook Load × (n + 2) / n
</p>
<p style="text-align: center; margin-top: 1rem; font-size: 0.95rem;">
حيث n = عدد خطوط الـ Drilling Line
</p>
</div>

<h3 style="color: #059669; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">🔍 منين إجت هالمعادلة؟</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
نظام البكرات يوزع الحمل على عدة خطوط:
</p>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li><strong>n خطوط:</strong> تشيل Hook Load موزع</li>
<li><strong>+2:</strong> خط Fast Line + خط Dead Line (إضافي على البرج)</li>
<li>كل ما زادت الخطوط، قل الحمل على كل خط، لكن الحمل الكلي على البرج يبقى</li>
</ul>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🧮 مثال حسابي</h2>

<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #059669;">
<h4 style="color: #059669; font-weight: bold; margin-bottom: 1rem;">المعطيات:</h4>
<ul style="list-style: none; padding: 0; line-height: 2;">
<li>• Hook Load = 400,000 lbs</li>
<li>• عدد الخطوط n = 10</li>
<li>• سعة البرج = 500,000 lbs</li>
</ul>

<h4 style="color: #059669; font-weight: bold; margin: 1.5rem 0 1rem;">الحل:</h4>
<p style="direction: ltr; margin-bottom: 0.5rem;">
Derrick Load = 400,000 × (10 + 2) / 10
</p>
<p style="direction: ltr; margin-bottom: 0.5rem;">
= 400,000 × 12 / 10
</p>
<p style="direction: ltr; margin-bottom: 1rem;">
= <strong style="color: #059669;">480,000 lbs</strong>
</p>

<div style="background: #dcfce7; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
<p style="font-weight: bold; color: #166534;">✅ آمن!</p>
<p>480,000 < 500,000 (سعة البرج)</p>
<p style="font-size: 0.9rem; margin-top: 0.5rem;">لكن الهامش فقط 20,000 lbs - لازم حذر!</p>
</div>
</div>

<h2 style="color: #dc2626; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">📊 قراءة المؤشرات</h2>

<table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 12px; text-align: right;">المؤشر</th>
<th style="padding: 12px; text-align: right;">شنو يدل؟</th>
<th style="padding: 12px; text-align: right;">القرار</th>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #e2e8f0;">Derrick Load > 90% من السعة</td>
<td style="padding: 12px; border: 1px solid #e2e8f0;">منطقة خطر قريبة</td>
<td style="padding: 12px; border: 1px solid #e2e8f0;">قلل الحمل أو زد خطوط</td>
</tr>
<tr style="background: #ffffff;">
<td style="padding: 12px; border: 1px solid #e2e8f0;">صوت غير طبيعي من البرج</td>
<td style="padding: 12px; border: 1px solid #e2e8f0;">إجهاد هيكلي</td>
<td style="padding: 12px; border: 1px solid #e2e8f0;">وقف فوري + فحص</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #e2e8f0;">اهتزاز مفرط أثناء الرفع</td>
<td style="padding: 12px; border: 1px solid #e2e8f0;">توزيع حمل غير متساوي</td>
<td style="padding: 12px; border: 1px solid #e2e8f0;">فحص الخطوط + التوازن</td>
</tr>
</table>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ربط الأنظمة</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li><strong>عدد الخطوط ↔ كفاءة الرفع:</strong> خطوط أكثر = رفع أبطأ لكن حمل موزع</li>
<li><strong>وزن الطين ↔ Hook Load:</strong> طين أثقل = Hook Load أقل = Derrick Load أقل</li>
<li><strong>عمق البئر ↔ تحميل البرج:</strong> كل ما زاد العمق، زاد الحمل</li>
</ul>
</div>

<h2 style="color: #dc2626; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">⚡ قرار: متى نزيد عدد الخطوط؟</h2>

<div style="background: #fef2f2; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<p style="font-weight: bold; color: #dc2626; margin-bottom: 1rem;">نزيد من 10 إلى 12 خط إذا:</p>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>Hook Load المتوقع سيتجاوز 85% من سعة البرج</li>
<li>عمليات Casing ثقيلة قادمة</li>
<li>احتمال Stuck Pipe عالي (نحتاج قوة سحب إضافية)</li>
</ul>

<p style="font-weight: bold; color: #059669; margin: 1rem 0 0.5rem;">الثمن:</p>
<p>سرعة الرفع تقل بنسبة ~17%</p>
</div>
</section>`,
          keyTerms: [
            { term: 'Derrick Load', definition: 'الحمل الكلي على البرج شامل كل المعدات' },
            { term: 'Crown Block', definition: 'مجموعة البكرات الثابتة أعلى البرج' },
            { term: 'Travelling Block', definition: 'مجموعة البكرات المتحركة المرتبطة بالخطاف' },
            { term: 'Drilling Line', definition: 'الكيبل الفولاذي المستخدم في الرفع' }
          ],
          practiceQuestion: {
            question: 'البرج سعته 600,000 lbs، Hook Load = 450,000 lbs، عدد الخطوط = 8. هل الوضع آمن؟',
            options: [
              'نعم آمن - Derrick Load = 506,250 lbs',
              'لا خطير - Derrick Load = 562,500 lbs',
              'نعم آمن - Derrick Load = 450,000 lbs',
              'لا خطير - Derrick Load = 675,000 lbs'
            ],
            correctAnswer: 1
          }
        },
        en: {
          title: 'Derrick Load and Tower Capacity - When Do We Reach Danger?',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🎯 Today's Goal</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
Understand the difference between Hook Load and Derrick Load, and how to calculate if the derrick can handle the load.
</p>

<div style="background: linear-gradient(135deg, #dc262615, #dc262610); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #dc2626;">
<h3 style="color: #dc2626; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">⚠️ Field Scenario</h3>
<p style="line-height: 1.8;">
The company wants to use additional Drill Collars (extra weight 150,000 lbs).<br/>
The supervisor asks: "Can the derrick handle it?"<br/>
<strong>How do you answer with confidence?</strong>
</p>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">📐 Main Formula</h2>

<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #1e3a5f;">
<p style="font-size: 1.2rem; font-weight: bold; text-align: center; color: #1e3a5f;">
Derrick Load = Hook Load × (n + 2) / n
</p>
<p style="text-align: center; margin-top: 1rem; font-size: 0.95rem;">
Where n = number of Drilling Lines
</p>
</div>

<h3 style="color: #059669; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">🔍 Where does this formula come from?</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li><strong>n lines:</strong> Carry distributed Hook Load</li>
<li><strong>+2:</strong> Fast Line + Dead Line (additional on derrick)</li>
<li>More lines = less load per line, but total derrick load remains</li>
</ul>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🧮 Calculation Example</h2>

<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #059669;">
<h4 style="color: #059669; font-weight: bold; margin-bottom: 1rem;">Given:</h4>
<ul style="list-style: none; padding: 0; line-height: 2;">
<li>• Hook Load = 400,000 lbs</li>
<li>• Number of lines n = 10</li>
<li>• Derrick capacity = 500,000 lbs</li>
</ul>

<h4 style="color: #059669; font-weight: bold; margin: 1.5rem 0 1rem;">Solution:</h4>
<p style="margin-bottom: 0.5rem;">
Derrick Load = 400,000 × (10 + 2) / 10 = <strong style="color: #059669;">480,000 lbs</strong>
</p>

<div style="background: #dcfce7; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
<p style="font-weight: bold; color: #166534;">✅ Safe!</p>
<p>480,000 < 500,000 (derrick capacity)</p>
</div>
</div>
</section>`,
          keyTerms: [
            { term: 'Derrick Load', definition: 'Total load on the derrick including all equipment' },
            { term: 'Crown Block', definition: 'Fixed sheave assembly at top of derrick' },
            { term: 'Travelling Block', definition: 'Moving sheave assembly connected to hook' },
            { term: 'Drilling Line', definition: 'Steel cable used for hoisting' }
          ],
          practiceQuestion: {
            question: 'Derrick capacity is 600,000 lbs, Hook Load = 450,000 lbs, lines = 8. Is it safe?',
            options: [
              'Yes safe - Derrick Load = 506,250 lbs',
              'No dangerous - Derrick Load = 562,500 lbs',
              'Yes safe - Derrick Load = 450,000 lbs',
              'No dangerous - Derrick Load = 675,000 lbs'
            ],
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
          title: 'Ton-Miles وعمر الكيبل - حسابات الصيانة',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🎯 الهدف من اليوم</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
تتعلم كيف تحسب استهلاك الكيبل (Drilling Line) ومتى لازم تغيره قبل ما ينقطع.
</p>

<div style="background: linear-gradient(135deg, #dc262615, #dc262610); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #dc2626;">
<h3 style="color: #dc2626; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">⚠️ سيناريو من الموقع</h3>
<p style="line-height: 1.8;">
الكيبل شغال من 3 أسابيع. المشرف يسأل: "متى نغيره؟"<br/>
ما تقدر تقول "لما يبين عليه التعب" - هذا قرار يبنى على <strong>حسابات</strong>.
</p>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">📐 مفهوم Ton-Miles</h2>

<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #1e3a5f;">
<p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1rem;">
<strong>Ton-Mile:</strong> وحدة قياس الشغل على الكيبل
</p>
<p style="font-size: 1.1rem; line-height: 1.8;">
= (الحمل بالطن) × (المسافة بالميل)
</p>
</div>

<h3 style="color: #059669; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">🔍 ليش نستخدم Ton-Miles؟</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>الكيبل ما يتعب من الوقت - يتعب من <strong>الشغل</strong></li>
<li>حمل ثقيل لمسافة قصيرة = حمل خفيف لمسافة طويلة (نفس التأثير)</li>
<li>كل كيبل له عمر محدد بـ Ton-Miles (من المصنع)</li>
</ul>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">📊 أنواع العمليات و Ton-Miles</h2>

<div style="background: linear-gradient(135deg, #1e3a5f15, #1e3a5f10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h4 style="color: #1e3a5f; font-weight: bold; margin-bottom: 1rem;">1. Round Trip (رحلة كاملة - سحب + إنزال)</h4>
<p style="direction: ltr; font-size: 1.1rem; margin-bottom: 0.5rem;">
T = (D × W × 2) / (n × 10,560,000)
</p>
<p style="font-size: 0.9rem; color: #64748b;">
D = عمق البئر (ft) | W = وزن الـ String (lbs) | n = عدد الخطوط
</p>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🧮 مثال حسابي</h2>

<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #059669;">
<h4 style="color: #059669; font-weight: bold; margin-bottom: 1rem;">المعطيات:</h4>
<ul style="list-style: none; padding: 0; line-height: 2;">
<li>• عمق البئر = 12,000 ft</li>
<li>• وزن String بالهواء = 300,000 lbs</li>
<li>• عدد الخطوط = 10</li>
<li>• عمر الكيبل المصنعي = 800 Ton-Miles</li>
</ul>

<h4 style="color: #059669; font-weight: bold; margin: 1.5rem 0 1rem;">الحساب:</h4>
<p style="direction: ltr; margin-bottom: 0.5rem;">
T per trip = (12,000 × 300,000 × 2) / (10 × 10,560,000)
</p>
<p style="direction: ltr; margin-bottom: 1rem;">
= 7,200,000,000 / 105,600,000 = <strong style="color: #059669;">68.2 Ton-Miles</strong> لكل رحلة
</p>

<div style="background: #dcfce7; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
<p style="font-weight: bold;">عدد الرحلات المسموحة:</p>
<p>800 ÷ 68.2 = <strong>~11.7 رحلة</strong></p>
<p style="font-size: 0.9rem; margin-top: 0.5rem; color: #166534;">بعد 11 رحلة كاملة، لازم نغير الكيبل!</p>
</div>
</div>

<h2 style="color: #dc2626; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">📈 قراءة المؤشرات</h2>

<table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 12px; text-align: right;">المؤشر</th>
<th style="padding: 12px; text-align: right;">شنو يدل؟</th>
<th style="padding: 12px; text-align: right;">القرار</th>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #e2e8f0;">Ton-Miles > 80% من العمر</td>
<td style="padding: 12px; border: 1px solid #e2e8f0;">كيبل قارب ينتهي</td>
<td style="padding: 12px; border: 1px solid #e2e8f0;">جدول للتغيير قريباً</td>
</tr>
<tr style="background: #ffffff;">
<td style="padding: 12px; border: 1px solid #e2e8f0;">أسلاك مكسورة ظاهرة</td>
<td style="padding: 12px; border: 1px solid #e2e8f0;">تلف ميكانيكي</td>
<td style="padding: 12px; border: 1px solid #e2e8f0;">تغيير فوري</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #e2e8f0;">قطر الكيبل نقص > 5%</td>
<td style="padding: 12px; border: 1px solid #e2e8f0;">تآكل/إجهاد</td>
<td style="padding: 12px; border: 1px solid #e2e8f0;">تغيير + فحص البكرات</td>
</tr>
</table>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ربط الأنظمة</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li><strong>عدد الرحلات ↔ تخطيط الحفر:</strong> كل رحلة = استهلاك من عمر الكيبل</li>
<li><strong>وزن الطين ↔ Ton-Miles:</strong> طين خفيف = Hook Load أعلى = استهلاك أسرع</li>
<li><strong>نوع الحفرة ↔ عدد الرحلات:</strong> حفرة مشاكلها كثيرة = رحلات أكثر = تغيير كيبل أسرع</li>
</ul>
</div>

<h2 style="color: #dc2626; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">⚡ قرار: Slip & Cut</h2>

<div style="background: #fef2f2; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<p style="font-weight: bold; color: #dc2626; margin-bottom: 1rem;">بدل ما نغير الكيبل كامل، نسوي Slip & Cut:</p>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>نسحب قطعة جديدة من البكرة</li>
<li>نقطع الجزء المستهلك (عند البكرات)</li>
<li>يطول عمر الكيبل بتكلفة أقل</li>
</ul>

<p style="font-weight: bold; color: #1e3a5f; margin: 1rem 0 0.5rem;">متى نسوي Slip & Cut؟</p>
<p>كل 300-400 Ton-Miles تقريباً (حسب توصيات المصنع)</p>
</div>
</section>`,
          keyTerms: [
            { term: 'Ton-Mile', definition: 'وحدة قياس الشغل المنجز على الكيبل' },
            { term: 'Slip & Cut', definition: 'عملية تحريك الكيبل وقطع الجزء المستهلك' },
            { term: 'Round Trip', definition: 'رحلة كاملة = سحب + إنزال سلسلة الحفر' },
            { term: 'Service Life', definition: 'العمر الافتراضي للكيبل بـ Ton-Miles' }
          ],
          practiceQuestion: {
            question: 'كيبل عمره 800 Ton-Miles، استهلكنا 650 Ton-Miles. شنو القرار؟',
            options: [
              'نكمل - باقي 150 Ton-Miles',
              'نسوي Slip & Cut ونتابع',
              'نغير الكيبل فوراً',
              'نوقف الحفر'
            ],
            correctAnswer: 1
          }
        },
        en: {
          title: 'Ton-Miles and Cable Life - Maintenance Calculations',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🎯 Today's Goal</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
Learn how to calculate drilling line consumption and when to replace it before it breaks.
</p>

<div style="background: linear-gradient(135deg, #dc262615, #dc262610); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #dc2626;">
<h3 style="color: #dc2626; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">⚠️ Field Scenario</h3>
<p style="line-height: 1.8;">
The cable has been running for 3 weeks. Supervisor asks: "When do we change it?"<br/>
You can't say "when it looks tired" - this decision is based on <strong>calculations</strong>.
</p>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">📐 Ton-Miles Concept</h2>

<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #1e3a5f;">
<p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1rem;">
<strong>Ton-Mile:</strong> Unit measuring work done on the cable
</p>
<p style="font-size: 1.1rem; line-height: 1.8;">
= (Load in tons) × (Distance in miles)
</p>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🧮 Calculation Example</h2>

<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #059669;">
<h4 style="color: #059669; font-weight: bold; margin-bottom: 1rem;">Given:</h4>
<ul style="list-style: none; padding: 0; line-height: 2;">
<li>• Well depth = 12,000 ft</li>
<li>• String weight in air = 300,000 lbs</li>
<li>• Number of lines = 10</li>
<li>• Cable service life = 800 Ton-Miles</li>
</ul>

<h4 style="color: #059669; font-weight: bold; margin: 1.5rem 0 1rem;">Calculation:</h4>
<p style="margin-bottom: 0.5rem;">
T per trip = (12,000 × 300,000 × 2) / (10 × 10,560,000)
</p>
<p style="margin-bottom: 1rem;">
= <strong style="color: #059669;">68.2 Ton-Miles</strong> per trip
</p>

<div style="background: #dcfce7; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
<p style="font-weight: bold;">Allowed trips:</p>
<p>800 ÷ 68.2 = <strong>~11.7 trips</strong></p>
</div>
</div>
</section>`,
          keyTerms: [
            { term: 'Ton-Mile', definition: 'Unit measuring work done on the cable' },
            { term: 'Slip & Cut', definition: 'Process of moving cable and cutting worn section' },
            { term: 'Round Trip', definition: 'Complete trip = pulling + running drill string' },
            { term: 'Service Life', definition: 'Expected cable life in Ton-Miles' }
          ],
          practiceQuestion: {
            question: 'Cable life is 800 Ton-Miles, we used 650 Ton-Miles. What\'s the decision?',
            options: [
              'Continue - 150 Ton-Miles remaining',
              'Do Slip & Cut and continue',
              'Replace cable immediately',
              'Stop drilling'
            ],
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
          title: 'Drawworks Power - حسابات قدرة السحب',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🎯 الهدف من اليوم</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
تفهم كيف تحسب قدرة الـ Drawworks المطلوبة وتقرر إذا الوينش يتحمل العملية أو لا.
</p>

<div style="background: linear-gradient(135deg, #dc262615, #dc262610); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #dc2626;">
<h3 style="color: #dc2626; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">⚠️ سيناريو من الموقع</h3>
<p style="line-height: 1.8;">
البئر عميق (15,000 ft) والـ Casing ثقيل. الدريلر يشتكي: "الوينش بطيء جداً!"<br/>
<strong>شنو المشكلة؟ وشنو الحل؟</strong>
</p>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">📐 معادلة القدرة</h2>

<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #1e3a5f;">
<p style="font-size: 1.2rem; font-weight: bold; text-align: center; color: #1e3a5f; direction: ltr;">
Power (HP) = (Hook Load × Hoisting Speed) / 33,000
</p>
<p style="text-align: center; margin-top: 0.75rem; font-size: 0.95rem;">
Hook Load بـ lbs | Speed بـ ft/min | 33,000 = ثابت التحويل
</p>
</div>

<h3 style="color: #059669; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">🔍 منين إجت هالمعادلة؟</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li><strong>القدرة = القوة × السرعة:</strong> قانون فيزيائي أساسي</li>
<li><strong>33,000:</strong> تحويل ft-lbs/min إلى Horsepower</li>
<li>كل ما زاد الحمل أو السرعة، احتجنا قدرة أكبر</li>
</ul>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🧮 مثال حسابي</h2>

<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #059669;">
<h4 style="color: #059669; font-weight: bold; margin-bottom: 1rem;">المعطيات:</h4>
<ul style="list-style: none; padding: 0; line-height: 2;">
<li>• Hook Load = 400,000 lbs</li>
<li>• السرعة المطلوبة = 60 ft/min</li>
<li>• قدرة الـ Drawworks = 1,500 HP</li>
<li>• كفاءة النظام = 85%</li>
</ul>

<h4 style="color: #059669; font-weight: bold; margin: 1.5rem 0 1rem;">الحساب:</h4>
<p style="margin-bottom: 0.5rem;"><strong>1. القدرة المطلوبة نظرياً:</strong></p>
<p style="direction: ltr; margin-bottom: 1rem;">
P = (400,000 × 60) / 33,000 = 727 HP
</p>

<p style="margin-bottom: 0.5rem;"><strong>2. القدرة الفعلية المطلوبة (مع الكفاءة):</strong></p>
<p style="direction: ltr; margin-bottom: 1rem;">
P actual = 727 / 0.85 = <strong style="color: #059669;">855 HP</strong>
</p>

<div style="background: #dcfce7; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
<p style="font-weight: bold; color: #166534;">✅ الوينش يتحمل!</p>
<p>855 HP < 1,500 HP (قدرة الوينش)</p>
<p style="font-size: 0.9rem; margin-top: 0.5rem;">الهامش = 645 HP للطوارئ</p>
</div>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">📊 العلاقة العكسية: الحمل vs السرعة</h2>

<div style="background: linear-gradient(135deg, #f59e0b15, #f59e0b10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #f59e0b;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
بقدرة ثابتة، لازم توازن بين:
</p>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li><strong>حمل عالي:</strong> سرعة رفع أبطأ</li>
<li><strong>سرعة عالية:</strong> حمل أقل فقط</li>
</ul>

<table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 10px; text-align: right;">Hook Load (lbs)</th>
<th style="padding: 10px; text-align: right;">Max Speed (ft/min)</th>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 10px; border: 1px solid #e2e8f0;">200,000</td>
<td style="padding: 10px; border: 1px solid #e2e8f0;">120</td>
</tr>
<tr style="background: #ffffff;">
<td style="padding: 10px; border: 1px solid #e2e8f0;">400,000</td>
<td style="padding: 10px; border: 1px solid #e2e8f0;">60</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 10px; border: 1px solid #e2e8f0;">600,000</td>
<td style="padding: 10px; border: 1px solid #e2e8f0;">40</td>
</tr>
</table>
</div>

<h2 style="color: #dc2626; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">⚡ قرارات عملية</h2>

<table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 12px; text-align: right;">الموقف</th>
<th style="padding: 12px; text-align: right;">المشكلة</th>
<th style="padding: 12px; text-align: right;">الحل</th>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #e2e8f0;">رحلة بطيئة جداً</td>
<td style="padding: 12px; border: 1px solid #e2e8f0;">الحمل قريب من الحد الأقصى</td>
<td style="padding: 12px; border: 1px solid #e2e8f0;">زيادة وزن الطين (يقلل Hook Load)</td>
</tr>
<tr style="background: #ffffff;">
<td style="padding: 12px; border: 1px solid #e2e8f0;">Drawworks يسخن</td>
<td style="padding: 12px; border: 1px solid #e2e8f0;">تجاوز القدرة المستمرة</td>
<td style="padding: 12px; border: 1px solid #e2e8f0;">إبطاء + فترات راحة</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #e2e8f0;">إنزال Casing ثقيل</td>
<td style="padding: 12px; border: 1px solid #e2e8f0;">سرعة إنزال محدودة</td>
<td style="padding: 12px; border: 1px solid #e2e8f0;">استخدام البريك بكفاءة</td>
</tr>
</table>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ربط الأنظمة</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li><strong>Drawworks ↔ برنامج الحفر:</strong> عمق أكبر = String أثقل = رحلات أبطأ</li>
<li><strong>القدرة ↔ Rig Selection:</strong> بئر عميق يحتاج Drawworks أقوى</li>
<li><strong>السرعة ↔ التكلفة:</strong> رحلة أبطأ = وقت أكثر = تكلفة أعلى</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Drawworks', definition: 'الوينش الرئيسي للرفع والإنزال' },
            { term: 'Horsepower (HP)', definition: 'وحدة قياس القدرة' },
            { term: 'Hoisting Speed', definition: 'سرعة الرفع (ft/min)' },
            { term: 'Mechanical Efficiency', definition: 'نسبة القدرة المستفادة من الإجمالية' }
          ],
          practiceQuestion: {
            question: 'Drawworks قدرته 2,000 HP، Hook Load = 500,000 lbs. شنو أقصى سرعة رفع (كفاءة 80%)؟',
            options: [
              '132 ft/min',
              '106 ft/min',
              '85 ft/min',
              '66 ft/min'
            ],
            correctAnswer: 1
          }
        },
        en: {
          title: 'Drawworks Power - Hoisting Capacity Calculations',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🎯 Today's Goal</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
Understand how to calculate required Drawworks power and decide if the winch can handle the operation.
</p>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">📐 Power Formula</h2>

<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #1e3a5f;">
<p style="font-size: 1.2rem; font-weight: bold; text-align: center; color: #1e3a5f;">
Power (HP) = (Hook Load × Hoisting Speed) / 33,000
</p>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🧮 Calculation Example</h2>

<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #059669;">
<h4 style="color: #059669; font-weight: bold; margin-bottom: 1rem;">Given:</h4>
<ul style="list-style: none; padding: 0; line-height: 2;">
<li>• Hook Load = 400,000 lbs</li>
<li>• Required speed = 60 ft/min</li>
<li>• Drawworks capacity = 1,500 HP</li>
<li>• System efficiency = 85%</li>
</ul>

<h4 style="color: #059669; font-weight: bold; margin: 1.5rem 0 1rem;">Solution:</h4>
<p style="margin-bottom: 0.5rem;"><strong>1. Theoretical power:</strong></p>
<p style="margin-bottom: 1rem;">
P = (400,000 × 60) / 33,000 = 727 HP
</p>

<p style="margin-bottom: 0.5rem;"><strong>2. Actual power (with efficiency):</strong></p>
<p style="margin-bottom: 1rem;">
P actual = 727 / 0.85 = <strong style="color: #059669;">855 HP</strong>
</p>

<div style="background: #dcfce7; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
<p style="font-weight: bold; color: #166534;">✅ Drawworks can handle it!</p>
<p>855 HP < 1,500 HP capacity</p>
</div>
</div>
</section>`,
          keyTerms: [
            { term: 'Drawworks', definition: 'Main hoisting winch' },
            { term: 'Horsepower (HP)', definition: 'Unit of power measurement' },
            { term: 'Hoisting Speed', definition: 'Lifting speed (ft/min)' },
            { term: 'Mechanical Efficiency', definition: 'Ratio of useful power to total power' }
          ],
          practiceQuestion: {
            question: 'Drawworks capacity is 2,000 HP, Hook Load = 500,000 lbs. Max hoisting speed (80% efficiency)?',
            options: [
              '132 ft/min',
              '106 ft/min',
              '85 ft/min',
              '66 ft/min'
            ],
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
          title: 'تحليل سيناريو شامل - مشكلة رفع في الموقع',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🎯 الهدف من اليوم</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
تطبق كل ما تعلمته على سيناريو واقعي وتتخذ قرارات مبنية على الحسابات.
</p>

<div style="background: linear-gradient(135deg, #dc262615, #dc262610); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #dc2626;">
<h3 style="color: #dc2626; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">📋 السيناريو</h3>
<p style="line-height: 1.8;">
أنت مهندس موقع في بئر بعمق 14,000 ft. أثناء سحب الـ String لتغيير البت:
</p>
<ul style="list-style-type: disc; padding-right: 1.5rem; margin-top: 0.75rem; line-height: 2;">
<li>Hook Load المتوقع = 280,000 lbs</li>
<li>القراءة الفعلية = 340,000 lbs</li>
<li>الدريلر يقول: "الـ String ما يتحرك!"</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔍 الخطوة 1: تحليل الفرق</h2>

<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #059669;">
<p style="margin-bottom: 1rem;"><strong>الفرق (Overpull):</strong></p>
<p style="direction: ltr; font-size: 1.2rem; margin-bottom: 1rem;">
340,000 - 280,000 = <strong style="color: #dc2626;">60,000 lbs overpull</strong>
</p>

<p style="font-weight: bold; color: #dc2626;">⚠️ هذا رقم خطير! يدل على مقاومة عالية.</p>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🤔 الخطوة 2: شنو الاحتمالات؟</h2>

<div style="display: grid; gap: 1rem; margin: 1rem 0;">
<div style="background: #fef3c7; padding: 1rem; border-radius: 8px; border-right: 4px solid #f59e0b;">
<p style="font-weight: bold; color: #92400e;">1. Differential Sticking</p>
<p style="font-size: 0.95rem; margin-top: 0.5rem;">الـ String لصق بالجدار بسبب فرق الضغط</p>
<p style="font-size: 0.9rem; color: #64748b; margin-top: 0.25rem;">يصير في مناطق Permeable مع Overbalance عالي</p>
</div>

<div style="background: #dbeafe; padding: 1rem; border-radius: 8px; border-right: 4px solid #2563eb;">
<p style="font-weight: bold; color: #1e40af;">2. Mechanical Sticking</p>
<p style="font-size: 0.95rem; margin-top: 0.5rem;">الـ String علق في Keyseating أو Ledge</p>
<p style="font-size: 0.9rem; color: #64748b; margin-top: 0.25rem;">يصير في Deviated holes أو formations متغيرة</p>
</div>

<div style="background: #f3e8ff; padding: 1rem; border-radius: 8px; border-right: 4px solid #7c3aed;">
<p style="font-weight: bold; color: #6b21a8;">3. Pack-off</p>
<p style="font-size: 0.95rem; margin-top: 0.5rem;">Cuttings تراكمت حول الـ BHA</p>
<p style="font-size: 0.9rem; color: #64748b; margin-top: 0.25rem;">يصير مع Hole Cleaning ضعيف</p>
</div>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">📊 الخطوة 3: قراءة المؤشرات الإضافية</h2>

<table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 12px; text-align: right;">المؤشر</th>
<th style="padding: 12px; text-align: right;">إذا عالي</th>
<th style="padding: 12px; text-align: right;">يدل على</th>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #e2e8f0;">Torque</td>
<td style="padding: 12px; border: 1px solid #e2e8f0;">يزيد مع المقاومة</td>
<td style="padding: 12px; border: 1px solid #e2e8f0;">Mechanical Sticking</td>
</tr>
<tr style="background: #ffffff;">
<td style="padding: 12px; border: 1px solid #e2e8f0;">Pump Pressure</td>
<td style="padding: 12px; border: 1px solid #e2e8f0;">يرتفع فجأة</td>
<td style="padding: 12px; border: 1px solid #e2e8f0;">Pack-off حول BHA</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #e2e8f0;">Free Point</td>
<td style="padding: 12px; border: 1px solid #e2e8f0;">قريب من القاع</td>
<td style="padding: 12px; border: 1px solid #e2e8f0;">Diff. Sticking</td>
</tr>
</table>

<h2 style="color: #dc2626; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">⚡ الخطوة 4: شجرة القرار</h2>

<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<p style="font-weight: bold; margin-bottom: 1rem;">إذا الـ String عالق:</p>

<div style="padding-right: 1rem;">
<p style="margin-bottom: 0.75rem;"><strong>1. أول شي:</strong> Work String (رفع/إنزال 5-10 ft)</p>
<p style="margin-bottom: 0.75rem;"><strong>2. إذا ما تحرك:</strong> Pump + Rotate (إذا ممكن)</p>
<p style="margin-bottom: 0.75rem;"><strong>3. إذا Diff. Stick:</strong> Spotting Fluid (زيت أو سائل تحرير)</p>
<p style="margin-bottom: 0.75rem;"><strong>4. إذا كل شي فشل:</strong> Free Point Survey + Back-off</p>
</div>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🧮 حساب: كم نقدر نسحب؟</h2>

<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #059669;">
<h4 style="color: #059669; font-weight: bold; margin-bottom: 1rem;">المعطيات:</h4>
<ul style="list-style: none; padding: 0; line-height: 2;">
<li>• سعة البرج = 650,000 lbs</li>
<li>• عدد الخطوط = 10</li>
<li>• قوة الشد للـ DP = 500,000 lbs</li>
</ul>

<h4 style="color: #059669; font-weight: bold; margin: 1.5rem 0 1rem;">الحسابات:</h4>

<p style="margin-bottom: 0.5rem;"><strong>1. أقصى Hook Load من البرج:</strong></p>
<p style="direction: ltr; margin-bottom: 1rem;">
Max HL = Derrick Capacity × n / (n+2) = 650,000 × 10/12 = 541,667 lbs
</p>

<p style="margin-bottom: 0.5rem;"><strong>2. حد السحب الآمن (80% من قوة الشد):</strong></p>
<p style="direction: ltr; margin-bottom: 1rem;">
Safe Pull = 500,000 × 0.80 = 400,000 lbs
</p>

<div style="background: #fef3c7; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
<p style="font-weight: bold; color: #92400e;">⚠️ الحد الأقصى للسحب = 400,000 lbs</p>
<p style="font-size: 0.9rem; margin-top: 0.5rem;">(الأقل بين قدرة البرج وقوة الشد)</p>
</div>

<p style="margin-top: 1rem;"><strong>الـ Overpull المسموح:</strong></p>
<p style="direction: ltr;">
400,000 - 280,000 = <strong style="color: #059669;">120,000 lbs overpull</strong>
</p>
</div>

<div style="background: linear-gradient(135deg, #059669, #047857); color: white; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">✅ القرار النهائي</h3>
<p style="line-height: 1.8;">
نقدر نسحب بـ 60,000 lbs overpull إضافية (الحالي 60k، مسموح 120k).<br/>
لكن لازم نحاول Work String أولاً قبل ما نزيد السحب.
</p>
</div>
</section>`,
          keyTerms: [
            { term: 'Overpull', definition: 'القوة الإضافية فوق Hook Load الطبيعي' },
            { term: 'Differential Sticking', definition: 'التصاق بسبب فرق الضغط' },
            { term: 'Work String', definition: 'تحريك خفيف للتحرير' },
            { term: 'Free Point', definition: 'النقطة اللي الـ String حر فوقها' }
          ],
          practiceQuestion: {
            question: 'في السيناريو: Overpull = 60,000 lbs، Pump Pressure طبيعي، Torque عالي. شنو التشخيص الأرجح؟',
            options: [
              'Differential Sticking',
              'Mechanical Sticking (Keyseating)',
              'Pack-off',
              'Wellbore Collapse'
            ],
            correctAnswer: 1
          }
        },
        en: {
          title: 'Comprehensive Scenario Analysis - Field Hoisting Problem',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🎯 Today's Goal</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
Apply everything you learned to a realistic scenario and make decisions based on calculations.
</p>

<div style="background: linear-gradient(135deg, #dc262615, #dc262610); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #dc2626;">
<h3 style="color: #dc2626; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">📋 The Scenario</h3>
<p style="line-height: 1.8;">
You're a site engineer at a 14,000 ft well. While pulling the String to change the bit:
</p>
<ul style="list-style-type: disc; padding-left: 1.5rem; margin-top: 0.75rem; line-height: 2;">
<li>Expected Hook Load = 280,000 lbs</li>
<li>Actual reading = 340,000 lbs</li>
<li>Driller says: "The String won't move!"</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔍 Step 1: Analyze the Difference</h2>

<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #059669;">
<p style="margin-bottom: 1rem;"><strong>Overpull:</strong></p>
<p style="font-size: 1.2rem; margin-bottom: 1rem;">
340,000 - 280,000 = <strong style="color: #dc2626;">60,000 lbs overpull</strong>
</p>

<p style="font-weight: bold; color: #dc2626;">⚠️ This is dangerous! Indicates high resistance.</p>
</div>

<h2 style="color: #dc2626; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">⚡ Decision Tree</h2>

<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<p style="font-weight: bold; margin-bottom: 1rem;">If String is stuck:</p>

<div style="padding-left: 1rem;">
<p style="margin-bottom: 0.75rem;"><strong>1. First:</strong> Work String (up/down 5-10 ft)</p>
<p style="margin-bottom: 0.75rem;"><strong>2. If no movement:</strong> Pump + Rotate (if possible)</p>
<p style="margin-bottom: 0.75rem;"><strong>3. If Diff. Stick:</strong> Spotting Fluid</p>
<p style="margin-bottom: 0.75rem;"><strong>4. If all fails:</strong> Free Point Survey + Back-off</p>
</div>
</div>
</section>`,
          keyTerms: [
            { term: 'Overpull', definition: 'Extra force above normal Hook Load' },
            { term: 'Differential Sticking', definition: 'Sticking due to pressure differential' },
            { term: 'Work String', definition: 'Light movement to free pipe' },
            { term: 'Free Point', definition: 'Point above which the string is free' }
          ],
          practiceQuestion: {
            question: 'In scenario: Overpull = 60,000 lbs, Pump Pressure normal, Torque high. Most likely diagnosis?',
            options: [
              'Differential Sticking',
              'Mechanical Sticking (Keyseating)',
              'Pack-off',
              'Wellbore Collapse'
            ],
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
          title: 'اختبار: حسابات وقرارات نظام الرفع',
          explanation: 'اختبار شامل على حسابات Hook Load، Derrick Load، Ton-Miles، وقدرة الـ Drawworks.',
          keyTerms: [],
          practiceQuestion: {
            question: '',
            options: [],
            correctAnswer: 0
          }
        },
        en: {
          title: 'Quiz: Hoisting System Calculations and Decisions',
          explanation: 'Comprehensive test on Hook Load, Derrick Load, Ton-Miles, and Drawworks power calculations.',
          keyTerms: [],
          practiceQuestion: {
            question: '',
            options: [],
            correctAnswer: 0
          }
        }
      },
      quiz: {
        ar: [
          {
            question: 'String وزنه بالهواء 250,000 lbs، وزن الطين 14 ppg. كم Hook Load؟',
            options: ['196,483 lbs', '214,679 lbs', '250,000 lbs', '303,030 lbs'],
            correctAnswer: 0
          },
          {
            question: 'Hook Load = 350,000 lbs، عدد الخطوط = 8. كم Derrick Load؟',
            options: ['350,000 lbs', '393,750 lbs', '437,500 lbs', '525,000 lbs'],
            correctAnswer: 2
          },
          {
            question: 'Drawworks 1,800 HP، كفاءة 85%، Hook Load 400,000 lbs. أقصى سرعة رفع؟',
            options: ['126 ft/min', '107 ft/min', '91 ft/min', '76 ft/min'],
            correctAnswer: 0
          },
          {
            question: 'Hook Load المتوقع 200k، الفعلي 270k. شنو أول إجراء؟',
            options: ['زيادة السحب', 'Work String', 'Spot Oil', 'Back-off'],
            correctAnswer: 1
          },
          {
            question: 'كيبل عمره 1,000 Ton-Miles، كل رحلة 80 T-M. بعد 10 رحلات، شنو الوضع؟',
            options: ['آمن - باقي 200 T-M', 'لازم Slip & Cut', 'خطر - توقف فوري', 'نكمل 2 رحلة'],
            correctAnswer: 1
          },
          {
            question: 'زيادة وزن الطين من 10 إلى 12 ppg، شنو يصير للـ Hook Load؟',
            options: ['يزيد', 'يقل', 'ما يتغير', 'يتضاعف'],
            correctAnswer: 1
          },
          {
            question: 'Overpull عالي + Torque طبيعي + Pump Pressure عالي. التشخيص؟',
            options: ['Differential Stick', 'Keyseating', 'Pack-off', 'Undergauge Hole'],
            correctAnswer: 2
          },
          {
            question: 'سعة البرج 500,000 lbs. كم أقصى Hook Load بـ 10 خطوط؟',
            options: ['416,667 lbs', '450,000 lbs', '500,000 lbs', '600,000 lbs'],
            correctAnswer: 0
          },
          {
            question: 'ليش نزيد عدد الخطوط من 10 إلى 12؟',
            options: ['زيادة سرعة الرفع', 'تقليل الحمل على الكيبل', 'زيادة قدرة السحب', 'تقليل استهلاك الوقود'],
            correctAnswer: 1
          },
          {
            question: 'String علق، Free Point عند 12,000 ft، العمق الكلي 14,000 ft. وين العلقة؟',
            options: ['فوق 12,000 ft', 'تحت 12,000 ft', 'عند السطح', 'ما نقدر نحدد'],
            correctAnswer: 1
          }
        ],
        en: [
          {
            question: 'String weight in air 250,000 lbs, mud weight 14 ppg. Hook Load?',
            options: ['196,483 lbs', '214,679 lbs', '250,000 lbs', '303,030 lbs'],
            correctAnswer: 0
          },
          {
            question: 'Hook Load = 350,000 lbs, lines = 8. Derrick Load?',
            options: ['350,000 lbs', '393,750 lbs', '437,500 lbs', '525,000 lbs'],
            correctAnswer: 2
          },
          {
            question: 'Drawworks 1,800 HP, 85% efficiency, Hook Load 400,000 lbs. Max hoisting speed?',
            options: ['126 ft/min', '107 ft/min', '91 ft/min', '76 ft/min'],
            correctAnswer: 0
          },
          {
            question: 'Expected Hook Load 200k, actual 270k. First action?',
            options: ['Increase pull', 'Work String', 'Spot Oil', 'Back-off'],
            correctAnswer: 1
          },
          {
            question: 'Cable life 1,000 Ton-Miles, each trip 80 T-M. After 10 trips, status?',
            options: ['Safe - 200 T-M left', 'Need Slip & Cut', 'Danger - stop now', 'Continue 2 trips'],
            correctAnswer: 1
          },
          {
            question: 'Mud weight increase from 10 to 12 ppg, what happens to Hook Load?',
            options: ['Increases', 'Decreases', 'No change', 'Doubles'],
            correctAnswer: 1
          },
          {
            question: 'High Overpull + Normal Torque + High Pump Pressure. Diagnosis?',
            options: ['Differential Stick', 'Keyseating', 'Pack-off', 'Undergauge Hole'],
            correctAnswer: 2
          },
          {
            question: 'Derrick capacity 500,000 lbs. Max Hook Load with 10 lines?',
            options: ['416,667 lbs', '450,000 lbs', '500,000 lbs', '600,000 lbs'],
            correctAnswer: 0
          },
          {
            question: 'Why increase lines from 10 to 12?',
            options: ['Increase hoisting speed', 'Reduce load per line', 'Increase pulling capacity', 'Reduce fuel consumption'],
            correctAnswer: 1
          },
          {
            question: 'String stuck, Free Point at 12,000 ft, total depth 14,000 ft. Where is the stuck point?',
            options: ['Above 12,000 ft', 'Below 12,000 ft', 'At surface', 'Cannot determine'],
            correctAnswer: 1
          }
        ]
      }
    },
    {
      day: 7,
      type: 'project',
      content: {
        ar: {
          title: 'مشروع: تحليل حالة علقة وتقديم توصيات',
          explanation: 'طبق ما تعلمته في تحليل حالة واقعية واتخذ قرارات مبنية على الحسابات.',
          keyTerms: [],
          practiceQuestion: {
            question: '',
            options: [],
            correctAnswer: 0
          }
        },
        en: {
          title: 'Project: Stuck Pipe Analysis and Recommendations',
          explanation: 'Apply what you learned to analyze a realistic case and make calculation-based decisions.',
          keyTerms: [],
          practiceQuestion: {
            question: '',
            options: [],
            correctAnswer: 0
          }
        }
      },
      project: {
        ar: {
          title: 'تحليل حالة علقة Stuck Pipe',
          description: 'أنت مهندس موقع وتلقيت التقرير التالي:\n\n• عمق البئر: 13,500 ft\n• String: 12,800 ft DP (5", 19.5 lb/ft) + 700 ft DC (8", 147 lb/ft)\n• وزن الطين: 11.5 ppg\n• Hook Load المتوقع: ?\n• Hook Load الفعلي: 295,000 lbs\n• Torque: مرتفع 15% عن الطبيعي\n• Pump Pressure: طبيعي\n• سعة البرج: 600,000 lbs\n• عدد الخطوط: 10\n• قوة شد الـ DP: 500,000 lbs',
          instructions: [
            '1. احسب Hook Load المتوقع (اعرض خطوات الحساب)',
            '2. احسب الـ Overpull الحالي',
            '3. بناءً على المؤشرات (Torque, Pump Pressure)، شنو التشخيص الأرجح؟',
            '4. احسب أقصى Overpull مسموح (من البرج ومن قوة الشد)',
            '5. اكتب خطة الإجراءات المقترحة (3-5 خطوات مرتبة)',
            '6. إذا فشلت كل المحاولات، شنو الخيارات؟'
          ],
          submissionType: 'text'
        },
        en: {
          title: 'Stuck Pipe Case Analysis',
          description: 'You are a site engineer and received this report:\n\n• Well depth: 13,500 ft\n• String: 12,800 ft DP (5", 19.5 lb/ft) + 700 ft DC (8", 147 lb/ft)\n• Mud weight: 11.5 ppg\n• Expected Hook Load: ?\n• Actual Hook Load: 295,000 lbs\n• Torque: 15% above normal\n• Pump Pressure: normal\n• Derrick capacity: 600,000 lbs\n• Lines: 10\n• DP tensile strength: 500,000 lbs',
          instructions: [
            '1. Calculate expected Hook Load (show calculation steps)',
            '2. Calculate current Overpull',
            '3. Based on indicators (Torque, Pump Pressure), what is the likely diagnosis?',
            '4. Calculate maximum allowed Overpull (from derrick and tensile strength)',
            '5. Write proposed action plan (3-5 ordered steps)',
            '6. If all attempts fail, what are the options?'
          ],
          submissionType: 'text'
        }
      }
    }
  ]
};
