import { WeeklyLesson } from '../weeklyContent';

export const wellControlAdvancedLesson: WeeklyLesson = {
  lessonId: 'well-control-advanced',
  days: [
    {
      day: 1,
      type: 'learning',
      content: {
        ar: {
          title: 'التحكم المتقدم بالبئر - ديناميكيات الضغط والتكوين',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 المفاهيم المتقدمة في ديناميكيات التحكم بالبئر</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
في المستوى المتقدم من التحكم بالبئر، نتجاوز المفاهيم الأساسية لنفهم الديناميكيات المعقدة للضغط والتدفق. هذا يتطلب فهماً عميقاً للعلاقات بين الضغط الهيدروستاتيكي، ECD، ونافذة الطين (Mud Window).
</p>

<div style="background: linear-gradient(135deg, #dc262615, #dc262610); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #dc2626;">
<h3 style="color: #dc2626; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">⚠️ نافذة الطين (Mud Window) - أهم مفهوم</h3>
<p style="line-height: 1.8;">
نافذة الطين هي النطاق الآمن للعمل بين ضغط المسام (Pore Pressure) وضغط الكسر (Fracture Pressure). كلما كانت النافذة أضيق، زادت صعوبة التحكم بالبئر.
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">📌 ماذا يحدث عند تجاوز الحدود؟</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li><strong>أقل من ضغط المسام:</strong> ركلة (Kick) - دخول سوائل التكوين للبئر</li>
<li><strong>أعلى من ضغط الكسر:</strong> تكسير التكوين وفقدان الطين (Lost Circulation)</li>
</ul>
</div>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 MAASP - حد الأمان للضغط السطحي</h2>

<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #059669;">
<h3 style="color: #059669; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">ما هو MAASP ولماذا هو مهم؟</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
MAASP (Maximum Allowable Annular Surface Pressure) هو أقصى ضغط يمكن تطبيقه على الفتحة الحلقية دون تكسير أضعف نقطة في البئر (عادةً عند الكيسنج).
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">💡 لماذا يجب مراقبته دائماً؟</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li>تجاوز MAASP يسبب تكسير التكوين عند الحذاء (Shoe)</li>
<li>يمكن أن يؤدي لـ Underground Blowout</li>
<li>يجب إعادة حسابه كلما تغيرت كثافة الطين</li>
</ul>
</div>
</div>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #2563eb;">
<h3 style="color: #1e40af; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">ECD - الكثافة الفعالة أثناء الضخ</h3>
<p style="line-height: 1.8;">
ECD (Equivalent Circulating Density) هي الكثافة الفعلية التي يشعر بها التكوين أثناء الضخ. تكون دائماً أعلى من كثافة الطين الساكن بسبب فقد الاحتكاك.
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">📌 نقاط عملية مهمة:</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li><strong>أثناء الضخ:</strong> ECD أعلى من MW → قد يسبب تكسير</li>
<li><strong>عند إيقاف المضخات:</strong> الضغط ينخفض فجأة → قد يسبب ركلة</li>
<li><strong>الفتحات الضيقة:</strong> ECD يرتفع بشكل أكبر بسبب زيادة الاحتكاك</li>
</ul>
</div>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 سلوك الغاز في البئر</h2>

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #f59e0b;">
<h3 style="color: #92400e; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">لماذا الغاز خطير جداً؟</h3>
<p style="line-height: 1.8;">
الغاز يتمدد بشكل هائل عند صعوده للسطح. فقاعة غاز صغيرة في القاع يمكن أن تملأ البئر بالكامل عند وصولها للسطح!
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">📌 حقائق مهمة عن الغاز:</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li><strong>معدل الهجرة:</strong> 500-1000 قدم/ساعة (يعتمد على لزوجة الطين)</li>
<li><strong>التمدد:</strong> الحجم يتضاعف مع كل نصف انخفاض في الضغط</li>
<li><strong>أكبر خطر:</strong> آخر 1000-2000 قدم قبل السطح</li>
</ul>
</div>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 تحديد نوع السائل الداخل (الركلة)</h2>

<div style="background: #fae8ff; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #a855f7;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">كيف نعرف نوع الركلة؟</h3>
<p style="line-height: 1.8;">
الفرق بين SIDPP و SICP يكشف نوع السائل الداخل:
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background: #f3e8ff;">
<th style="padding: 10px; border: 1px solid #ddd; text-align: right;">نوع الركلة</th>
<th style="padding: 10px; border: 1px solid #ddd; text-align: right;">الفرق بين SICP و SIDPP</th>
<th style="padding: 10px; border: 1px solid #ddd; text-align: right;">الخطورة</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">غاز</td>
<td style="padding: 10px; border: 1px solid #ddd;">فرق كبير جداً</td>
<td style="padding: 10px; border: 1px solid #ddd; color: #dc2626; font-weight: bold;">عالية جداً ⚠️</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 10px; border: 1px solid #ddd;">نفط</td>
<td style="padding: 10px; border: 1px solid #ddd;">فرق متوسط</td>
<td style="padding: 10px; border: 1px solid #ddd; color: #f59e0b;">متوسطة</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">ماء مالح</td>
<td style="padding: 10px; border: 1px solid #ddd;">فرق صغير</td>
<td style="padding: 10px; border: 1px solid #ddd; color: #22c55e;">أقل خطورة</td>
</tr>
</tbody>
</table>
</div>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>نافذة الطين تحدد نطاق العمل الآمن</li>
<li>MAASP يحمي من تكسير التكوين عند الحذاء</li>
<li>ECD أعلى من MW أثناء الضخ - انتبه عند التوقف</li>
<li>الغاز أخطر أنواع الركلات بسبب تمدده الهائل</li>
<li>الفرق بين SIDPP و SICP يكشف نوع الركلة</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Mud Window', definition: 'النطاق الآمن بين ضغط المسام وضغط الكسر - كلما ضاقت النافذة زادت صعوبة التحكم' },
            { term: 'MAASP', definition: 'أقصى ضغط سطحي مسموح على الفتحة الحلقية دون تكسير التكوين' },
            { term: 'ECD', definition: 'الكثافة الفعالة أثناء الضخ - أعلى من كثافة الطين الساكن' },
            { term: 'Gas Migration', definition: 'صعود الغاز في البئر المغلق بمعدل 500-1000 قدم/ساعة' },
            { term: 'SIDPP vs SICP', definition: 'الفرق بينهما يحدد نوع السائل الداخل (غاز، نفط، ماء)' },
          ],
          practiceQuestion: {
            question: 'ما هو أخطر نوع من الركلات ولماذا؟',
            options: [
              'ماء مالح لأنه يسبب تآكل المعدات',
              'نفط لأنه قابل للاشتعال',
              'غاز لأنه يتمدد بشكل هائل عند الصعود',
              'جميعها بنفس الخطورة'
            ],
            correctAnswer: 2,
          },
        },
        en: {
          title: 'Advanced Well Control - Pressure Dynamics & Formation Behavior',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Advanced Concepts in Well Control Dynamics</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
At the advanced level of well control, we go beyond basic concepts to understand the complex dynamics of pressure and flow. This requires a deep understanding of relationships between hydrostatic pressure, ECD, and the mud window.
</p>

<div style="background: linear-gradient(135deg, #dc262615, #dc262610); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #dc2626;">
<h3 style="color: #dc2626; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">⚠️ Mud Window - The Most Important Concept</h3>
<p style="line-height: 1.8;">
The mud window is the safe operating range between Pore Pressure and Fracture Pressure. The narrower the window, the more difficult well control becomes.
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">📌 What happens when limits are exceeded?</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li><strong>Below Pore Pressure:</strong> Kick - formation fluids enter the wellbore</li>
<li><strong>Above Fracture Pressure:</strong> Formation breakdown and lost circulation</li>
</ul>
</div>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 MAASP - Surface Pressure Safety Limit</h2>

<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #059669;">
<h3 style="color: #059669; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">What is MAASP and why is it important?</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
MAASP (Maximum Allowable Annular Surface Pressure) is the maximum pressure that can be applied to the annulus without fracturing the weakest point in the well (usually at the casing shoe).
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">💡 Why must it always be monitored?</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li>Exceeding MAASP causes formation breakdown at the shoe</li>
<li>Can lead to Underground Blowout</li>
<li>Must be recalculated whenever mud weight changes</li>
</ul>
</div>
</div>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #2563eb;">
<h3 style="color: #1e40af; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">ECD - Effective Density While Pumping</h3>
<p style="line-height: 1.8;">
ECD (Equivalent Circulating Density) is the actual density felt by the formation during pumping. It's always higher than static mud weight due to friction losses.
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">📌 Important practical points:</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li><strong>While pumping:</strong> ECD higher than MW → may cause fracturing</li>
<li><strong>When pumps stop:</strong> Pressure drops suddenly → may cause kick</li>
<li><strong>Narrow holes:</strong> ECD increases more due to higher friction</li>
</ul>
</div>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Gas Behavior in the Well</h2>

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #f59e0b;">
<h3 style="color: #92400e; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">Why is gas so dangerous?</h3>
<p style="line-height: 1.8;">
Gas expands enormously as it rises to surface. A small gas bubble at bottom can fill the entire well when it reaches surface!
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">📌 Important facts about gas:</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li><strong>Migration rate:</strong> 500-1000 ft/hr (depends on mud viscosity)</li>
<li><strong>Expansion:</strong> Volume doubles with each halving of pressure</li>
<li><strong>Greatest danger:</strong> Last 1000-2000 ft before surface</li>
</ul>
</div>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Identifying Influx Type</h2>

<div style="background: #fae8ff; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #a855f7;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">How do we know the kick type?</h3>
<p style="line-height: 1.8;">
The difference between SIDPP and SICP reveals the influx type:
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background: #f3e8ff;">
<th style="padding: 10px; border: 1px solid #ddd; text-align: left;">Kick Type</th>
<th style="padding: 10px; border: 1px solid #ddd; text-align: left;">SICP - SIDPP Difference</th>
<th style="padding: 10px; border: 1px solid #ddd; text-align: left;">Danger Level</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">Gas</td>
<td style="padding: 10px; border: 1px solid #ddd;">Very large difference</td>
<td style="padding: 10px; border: 1px solid #ddd; color: #dc2626; font-weight: bold;">Very High ⚠️</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 10px; border: 1px solid #ddd;">Oil</td>
<td style="padding: 10px; border: 1px solid #ddd;">Medium difference</td>
<td style="padding: 10px; border: 1px solid #ddd; color: #f59e0b;">Medium</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">Salt Water</td>
<td style="padding: 10px; border: 1px solid #ddd;">Small difference</td>
<td style="padding: 10px; border: 1px solid #ddd; color: #22c55e;">Lower risk</td>
</tr>
</tbody>
</table>
</div>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>Mud window determines safe operating range</li>
<li>MAASP protects against formation breakdown at shoe</li>
<li>ECD is higher than MW while pumping - watch when stopping</li>
<li>Gas is the most dangerous kick type due to massive expansion</li>
<li>SIDPP vs SICP difference reveals kick type</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Mud Window', definition: 'Safe range between pore pressure and fracture pressure - narrower window = harder control' },
            { term: 'MAASP', definition: 'Maximum surface pressure allowed on annulus without fracturing formation' },
            { term: 'ECD', definition: 'Effective density while pumping - higher than static mud weight' },
            { term: 'Gas Migration', definition: 'Gas rising in shut-in well at 500-1000 ft/hr rate' },
            { term: 'SIDPP vs SICP', definition: 'Difference determines influx type (gas, oil, water)' },
          ],
          practiceQuestion: {
            question: 'What is the most dangerous kick type and why?',
            options: [
              'Salt water because it causes equipment corrosion',
              'Oil because it is flammable',
              'Gas because it expands enormously as it rises',
              'All are equally dangerous'
            ],
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
          title: 'طرق قتل البئر التقليدية والمتقدمة',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 طرق قتل البئر (Well Kill Methods)</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
عند حدوث ركلة، يجب "قتل" البئر - أي إعادة التوازن الهيدروستاتيكي. هناك عدة طرق، ولكل منها استخداماتها ومميزاتها.
</p>

<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #059669;">
<h3 style="color: #059669; font-size: 1.3rem; font-weight: bold; margin-bottom: 1rem;">1️⃣ طريقة الحفار (Driller's Method)</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
أبسط وأسرع طريقة للبدء. تتم على دورتين: الأولى لإخراج الركلة، والثانية لضخ الطين الثقيل.
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">📌 متى نستخدمها؟</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li>عندما لا يتوفر وقت لحساب الطين الثقيل</li>
<li>ركلات صغيرة ونوافذ طين واسعة</li>
<li>الطاقم أقل خبرة (أسهل في التنفيذ)</li>
</ul>
<p style="font-weight: bold; margin: 1rem 0 0.5rem;">⚠️ العيوب:</p>
<ul style="padding-right: 1.5rem; line-height: 2; color: #dc2626;">
<li>ضغوط أعلى خلال الدورة الأولى</li>
<li>وقت أطول (دورتان كاملتان)</li>
</ul>
</div>
</div>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #2563eb;">
<h3 style="color: #1e40af; font-size: 1.3rem; font-weight: bold; margin-bottom: 1rem;">2️⃣ طريقة الانتظار والوزن (Wait & Weight)</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
الطريقة المفضلة عند توفر الوقت. يتم تحضير الطين الثقيل أولاً، ثم يُضخ في دورة واحدة.
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">📌 المميزات:</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li>ضغوط أقل على البئر والمعدات</li>
<li>دورة واحدة فقط = وقت أقصر إجمالاً</li>
<li>أكثر أماناً للتكوينات الضعيفة</li>
</ul>
<p style="font-weight: bold; margin: 1rem 0 0.5rem;">⚠️ التحديات:</p>
<ul style="padding-right: 1.5rem; line-height: 2; color: #e67e22;">
<li>يتطلب وقت لتحضير الطين الثقيل</li>
<li>هجرة الغاز أثناء الانتظار قد تكون مشكلة</li>
</ul>
</div>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 مقارنة بين الطريقتين</h2>

<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #64748b;">
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background: #e2e8f0;">
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: right;">المعيار</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: right;">Driller's Method</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: right;">Wait & Weight</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;">سرعة البدء</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">✅ فوري</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">⏳ يحتاج تحضير</td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 12px; border: 1px solid #cbd5e1;">عدد الدورات</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">دورتان</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">✅ دورة واحدة</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;">الضغوط على البئر</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">⚠️ أعلى</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">✅ أقل</td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 12px; border: 1px solid #cbd5e1;">سهولة التنفيذ</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">✅ أسهل</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">تحتاج حسابات</td>
</tr>
</tbody>
</table>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 مبادئ أساسية لكلا الطريقتين</h2>

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #f59e0b;">
<h3 style="color: #92400e; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">القواعد الذهبية للتحكم بالبئر</h3>
<ol style="padding-right: 1.5rem; line-height: 2.2;">
<li><strong>الحفاظ على ضغط القاع ثابتاً:</strong> BHP = ثابت طوال العملية</li>
<li><strong>مراقبة MAASP:</strong> لا تتجاوز الحد الأقصى المسموح</li>
<li><strong>الصبر:</strong> لا تتسرع - التسرع يسبب كوارث</li>
<li><strong>المراقبة المستمرة:</strong> Pit Level، الضغوط، معدل التدفق</li>
</ol>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>Driller's Method: سريعة البدء لكن ضغوط أعلى</li>
<li>Wait & Weight: ضغوط أقل لكن تحتاج تحضير</li>
<li>اختيار الطريقة يعتمد على الظروف والمعدات</li>
<li>الهدف دائماً: الحفاظ على BHP ثابت</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: "Driller's Method", definition: 'طريقة بدورتين - إخراج الركلة أولاً ثم ضخ الطين الثقيل' },
            { term: 'Wait & Weight', definition: 'تحضير الطين الثقيل ثم ضخه في دورة واحدة - ضغوط أقل' },
            { term: 'Kill Mud Weight', definition: 'كثافة الطين المطلوبة لموازنة ضغط التكوين' },
            { term: 'Constant BHP', definition: 'الحفاظ على ضغط القاع ثابتاً طوال عملية القتل' },
            { term: 'ICP/FCP', definition: 'ضغط الضخ المبدئي والنهائي - يتناقص تدريجياً' },
          ],
          practiceQuestion: {
            question: 'أي طريقة تُفضل عند التعامل مع تكوينات ضعيفة ونافذة طين ضيقة؟',
            options: [
              "Driller's Method لأنها أسرع",
              'Wait & Weight لأن ضغوطها أقل',
              'لا فرق بين الطريقتين',
              'لا تُستخدم أي منهما'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Conventional and Advanced Well Kill Methods',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Well Kill Methods</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
When a kick occurs, the well must be "killed" - meaning restoring hydrostatic balance. There are several methods, each with its uses and advantages.
</p>

<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #059669;">
<h3 style="color: #059669; font-size: 1.3rem; font-weight: bold; margin-bottom: 1rem;">1️⃣ Driller's Method</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
The simplest and fastest method to start. Done in two circulations: first to remove the kick, second to pump heavy mud.
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">📌 When to use?</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li>When there's no time to weight up mud</li>
<li>Small kicks and wide mud windows</li>
<li>Less experienced crew (easier to execute)</li>
</ul>
<p style="font-weight: bold; margin: 1rem 0 0.5rem;">⚠️ Disadvantages:</p>
<ul style="padding-left: 1.5rem; line-height: 2; color: #dc2626;">
<li>Higher pressures during first circulation</li>
<li>Longer time (two full circulations)</li>
</ul>
</div>
</div>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #2563eb;">
<h3 style="color: #1e40af; font-size: 1.3rem; font-weight: bold; margin-bottom: 1rem;">2️⃣ Wait & Weight Method</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
The preferred method when time is available. Heavy mud is prepared first, then pumped in one circulation.
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">📌 Advantages:</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li>Lower pressures on well and equipment</li>
<li>Only one circulation = shorter total time</li>
<li>Safer for weak formations</li>
</ul>
<p style="font-weight: bold; margin: 1rem 0 0.5rem;">⚠️ Challenges:</p>
<ul style="padding-left: 1.5rem; line-height: 2; color: #e67e22;">
<li>Requires time to prepare heavy mud</li>
<li>Gas migration during waiting may be a problem</li>
</ul>
</div>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Comparison Between Methods</h2>

<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #64748b;">
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background: #e2e8f0;">
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: left;">Criteria</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: left;">Driller's Method</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: left;">Wait & Weight</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Start Speed</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">✅ Immediate</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">⏳ Needs preparation</td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 12px; border: 1px solid #cbd5e1;">Number of Circulations</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Two</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">✅ One</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Well Pressures</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">⚠️ Higher</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">✅ Lower</td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 12px; border: 1px solid #cbd5e1;">Ease of Execution</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">✅ Easier</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Needs calculations</td>
</tr>
</tbody>
</table>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Fundamental Principles for Both Methods</h2>

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #f59e0b;">
<h3 style="color: #92400e; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">Golden Rules of Well Control</h3>
<ol style="padding-left: 1.5rem; line-height: 2.2;">
<li><strong>Keep BHP constant:</strong> Bottomhole pressure = constant throughout operation</li>
<li><strong>Monitor MAASP:</strong> Never exceed maximum allowable</li>
<li><strong>Patience:</strong> Don't rush - rushing causes disasters</li>
<li><strong>Continuous monitoring:</strong> Pit Level, pressures, flow rate</li>
</ol>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>Driller's Method: Quick to start but higher pressures</li>
<li>Wait & Weight: Lower pressures but needs preparation</li>
<li>Method choice depends on conditions and equipment</li>
<li>Goal always: Keep BHP constant</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: "Driller's Method", definition: 'Two-circulation method - remove kick first then pump heavy mud' },
            { term: 'Wait & Weight', definition: 'Prepare heavy mud then pump in one circulation - lower pressures' },
            { term: 'Kill Mud Weight', definition: 'Mud density required to balance formation pressure' },
            { term: 'Constant BHP', definition: 'Maintaining constant bottomhole pressure throughout kill operation' },
            { term: 'ICP/FCP', definition: 'Initial and Final Circulating Pressures - decrease gradually' },
          ],
          practiceQuestion: {
            question: 'Which method is preferred when dealing with weak formations and narrow mud windows?',
            options: [
              "Driller's Method because it's faster",
              'Wait & Weight because it has lower pressures',
              'No difference between methods',
              'Neither is used'
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
          title: 'تقنيات القتل غير التقليدية',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 متى نحتاج تقنيات غير تقليدية؟</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
أحياناً لا تنجح الطرق التقليدية بسبب ظروف استثنائية. هنا نلجأ لتقنيات متقدمة مصممة لمواقف محددة.
</p>

<div style="background: linear-gradient(135deg, #dc262615, #dc262610); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #dc2626;">
<h3 style="color: #dc2626; font-size: 1.3rem; font-weight: bold; margin-bottom: 1rem;">1️⃣ طريقة التشحيم والتنفيس (Lubricate & Bleed)</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
تُستخدم عندما لا يمكن الضخ العادي (انسداد الأنابيب أو عطل المضخات).
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">📌 كيف تعمل؟</p>
<ol style="padding-right: 1.5rem; line-height: 2.2;">
<li>ضخ كمية صغيرة من الطين (5-10 براميل)</li>
<li>الانتظار ليستقر الطين فوق الغاز</li>
<li>تنفيس الغاز من الأعلى</li>
<li>تكرار العملية حتى إخراج كل الغاز</li>
</ol>
<p style="margin-top: 1rem; background: #fef2f2; padding: 0.75rem; border-radius: 6px;">
<strong>⚠️ تحذير:</strong> بطيئة جداً - قد تستغرق ساعات طويلة
</p>
</div>
</div>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #2563eb;">
<h3 style="color: #1e40af; font-size: 1.3rem; font-weight: bold; margin-bottom: 1rem;">2️⃣ القتل العكسي (Bullheading)</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
دفع السائل الداخل عائداً للتكوين بالضغط العالي. خطيرة لكن ضرورية أحياناً.
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">📌 متى نستخدمها؟</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li>وجود غازات سامة (H₂S) - خطر على الطاقم</li>
<li>معدات معالجة الغاز غير كافية</li>
<li>خطر انفجار سطحي عالي</li>
</ul>
<p style="margin-top: 1rem; background: #fef2f2; padding: 0.75rem; border-radius: 6px;">
<strong>⚠️ خطر:</strong> قد تسبب تكسير التكوين إذا تجاوز الضغط LOT
</p>
</div>
</div>

<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #059669;">
<h3 style="color: #059669; font-size: 1.3rem; font-weight: bold; margin-bottom: 1rem;">3️⃣ الطريقة الحجمية (Volumetric Method)</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
للحالات التي لا يمكن فيها الضخ إطلاقاً. نسيطر على هجرة الغاز بالتنفيس فقط.
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">📌 مبدأ العمل:</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li>الغاز يهاجر للأعلى ويزيد الضغط السطحي</li>
<li>نسمح بزيادة محدودة (هامش أمان)</li>
<li>ننفس لخفض الضغط</li>
<li>نكرر حتى يخرج كل الغاز</li>
</ul>
</div>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 مقارنة سريعة</h2>

<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #64748b;">
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background: #e2e8f0;">
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: right;">التقنية</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: right;">متى نستخدمها</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: right;">الخطر الرئيسي</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Lubricate & Bleed</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">انسداد الأنابيب/عطل المضخات</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">بطيئة جداً</td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 12px; border: 1px solid #cbd5e1;">Bullheading</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">غازات سامة/خطر سطحي</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">تكسير التكوين</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Volumetric</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">لا يمكن الضخ إطلاقاً</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">تحتاج دقة عالية</td>
</tr>
</tbody>
</table>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>التقنيات غير التقليدية للحالات الاستثنائية فقط</li>
<li>Lubricate & Bleed: بطيئة لكن آمنة عند عدم القدرة على الضخ</li>
<li>Bullheading: خطيرة لكن ضرورية مع الغازات السامة</li>
<li>Volumetric: بدون ضخ - تنفيس محسوب فقط</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Lubricate & Bleed', definition: 'ضخ كميات صغيرة وتنفيس الغاز بالتناوب - للحالات التي لا يمكن فيها الضخ العادي' },
            { term: 'Bullheading', definition: 'دفع الركلة للتكوين بالضغط - للغازات السامة والخطر السطحي' },
            { term: 'Volumetric Method', definition: 'السيطرة على هجرة الغاز بالتنفيس فقط - بدون ضخ' },
            { term: 'Safety Margin', definition: 'هامش الأمان المسموح به قبل التنفيس (50-100 psi)' },
            { term: 'LOT', definition: 'اختبار تحديد ضغط تكسير التكوين - الحد الأقصى للضغط' },
          ],
          practiceQuestion: {
            question: 'ما هي الطريقة المناسبة عند اكتشاف وجود H₂S في الركلة؟',
            options: [
              'الاستمرار بالطريقة التقليدية',
              'Bullheading لتجنب خروج الغاز للسطح',
              'Lubricate & Bleed',
              'إيقاف كل شيء وانتظار الخبراء'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Non-Conventional Kill Techniques',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 When Do We Need Non-Conventional Techniques?</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
Sometimes conventional methods don't work due to exceptional circumstances. Here we resort to advanced techniques designed for specific situations.
</p>

<div style="background: linear-gradient(135deg, #dc262615, #dc262610); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #dc2626;">
<h3 style="color: #dc2626; font-size: 1.3rem; font-weight: bold; margin-bottom: 1rem;">1️⃣ Lubricate & Bleed Method</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
Used when normal pumping is not possible (plugged pipe or pump failure).
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">📌 How does it work?</p>
<ol style="padding-left: 1.5rem; line-height: 2.2;">
<li>Pump small amount of mud (5-10 barrels)</li>
<li>Wait for mud to settle above gas</li>
<li>Bleed gas from top</li>
<li>Repeat until all gas is removed</li>
</ol>
<p style="margin-top: 1rem; background: #fef2f2; padding: 0.75rem; border-radius: 6px;">
<strong>⚠️ Warning:</strong> Very slow - may take many hours
</p>
</div>
</div>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #2563eb;">
<h3 style="color: #1e40af; font-size: 1.3rem; font-weight: bold; margin-bottom: 1rem;">2️⃣ Bullheading (Reverse Kill)</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
Pushing the influx back into formation with high pressure. Dangerous but sometimes necessary.
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">📌 When to use?</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li>Presence of toxic gases (H₂S) - crew hazard</li>
<li>Insufficient gas handling equipment</li>
<li>High surface explosion risk</li>
</ul>
<p style="margin-top: 1rem; background: #fef2f2; padding: 0.75rem; border-radius: 6px;">
<strong>⚠️ Danger:</strong> May fracture formation if pressure exceeds LOT
</p>
</div>
</div>

<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #059669;">
<h3 style="color: #059669; font-size: 1.3rem; font-weight: bold; margin-bottom: 1rem;">3️⃣ Volumetric Method</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
For cases when pumping is absolutely impossible. Control gas migration by bleeding only.
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">📌 Working Principle:</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li>Gas migrates upward, increasing surface pressure</li>
<li>Allow limited increase (safety margin)</li>
<li>Bleed to reduce pressure</li>
<li>Repeat until all gas exits</li>
</ul>
</div>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Quick Comparison</h2>

<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #64748b;">
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background: #e2e8f0;">
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: left;">Technique</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: left;">When to Use</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: left;">Main Risk</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Lubricate & Bleed</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Plugged pipe/pump failure</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Very slow</td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 12px; border: 1px solid #cbd5e1;">Bullheading</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Toxic gas/surface hazard</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Formation fracturing</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Volumetric</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Cannot pump at all</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Requires high precision</td>
</tr>
</tbody>
</table>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>Non-conventional techniques for exceptional cases only</li>
<li>Lubricate & Bleed: Slow but safe when pumping is impossible</li>
<li>Bullheading: Dangerous but necessary with toxic gases</li>
<li>Volumetric: No pumping - calculated bleeding only</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Lubricate & Bleed', definition: 'Pump small amounts and bleed gas alternately - when normal pumping impossible' },
            { term: 'Bullheading', definition: 'Push kick into formation with pressure - for toxic gases and surface hazard' },
            { term: 'Volumetric Method', definition: 'Control gas migration by bleeding only - no pumping' },
            { term: 'Safety Margin', definition: 'Allowable pressure increase before bleeding (50-100 psi)' },
            { term: 'LOT', definition: 'Leak-Off Test to determine formation fracture pressure - maximum limit' },
          ],
          practiceQuestion: {
            question: 'What is the appropriate method when H₂S is detected in the kick?',
            options: [
              'Continue with conventional method',
              'Bullheading to prevent gas from reaching surface',
              'Lubricate & Bleed',
              'Stop everything and wait for experts'
            ],
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
          title: 'تقنيات متقدمة: Dynamic Kill و Stripping',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 تقنيات القتل الديناميكي</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
هناك حالات تتطلب تقنيات أكثر تطوراً تعتمد على الاحتكاك والحركة بدلاً من الوزن فقط.
</p>

<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #059669;">
<h3 style="color: #059669; font-size: 1.3rem; font-weight: bold; margin-bottom: 1rem;">1️⃣ القتل الديناميكي (Dynamic Kill)</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
استخدام فقد الاحتكاك للسيطرة على البئر بدلاً من كثافة الطين فقط. مفيد جداً في حالات محددة.
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">📌 متى نستخدمه؟</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li>تدفق قوي لا يمكن السيطرة عليه بالوزن</li>
<li>عدم توفر طين ثقيل كافي</li>
<li>البئر يتدفق بشكل مستمر</li>
</ul>
<p style="font-weight: bold; margin: 1rem 0 0.5rem;">💡 الفكرة:</p>
<p style="line-height: 1.8;">الضخ بمعدل عالي يُنتج فقد احتكاك كبير يُضاف للضغط الهيدروستاتيكي ويتغلب على ضغط التكوين.</p>
</div>
</div>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #2563eb;">
<h3 style="color: #1e40af; font-size: 1.3rem; font-weight: bold; margin-bottom: 1rem;">2️⃣ القتل من خارج القاع (Off-Bottom Kill)</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
عندما يكون البت ليس في القاع وقت حدوث الركلة. يتطلب اعتبارات خاصة.
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">📌 التحديات:</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li>الركلة قد تكون تحت البت (في الفتحة المفتوحة)</li>
<li>عدم القدرة على الدوران بسبب موقع البت</li>
<li>تعقيد حسابات Kill Mud</li>
</ul>
<p style="font-weight: bold; margin: 1rem 0 0.5rem;">الحل:</p>
<p style="line-height: 1.8;">العودة للقاع بحذر مع مراقبة الضغوط، أو استخدام طرق بديلة.</p>
</div>
</div>

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #f59e0b;">
<h3 style="color: #92400e; font-size: 1.3rem; font-weight: bold; margin-bottom: 1rem;">3️⃣ الـ Stripping (إدخال الأنابيب تحت الضغط)</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
إدخال أو إخراج الأنابيب والبئر تحت الضغط - عملية حساسة جداً.
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">📌 لماذا نحتاجها؟</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li>الوصول للقاع بعد ركلة بينما البت في الأعلى</li>
<li>إخراج الأنابيب لإصلاح أو تغيير البت</li>
<li>التعامل مع Stuck Pipe تحت ظروف الركلة</li>
</ul>
<p style="margin-top: 1rem; background: #fef2f2; padding: 0.75rem; border-radius: 6px;">
<strong>⚠️ خطر:</strong> يجب تعويض حجم الأنابيب المُدخلة بتنفيس طين متساوي للحفاظ على BHP ثابت
</p>
</div>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 تقنية Snubbing</h2>

<div style="background: #fae8ff; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #a855f7;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">ما الفرق بين Stripping و Snubbing؟</h3>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background: #f3e8ff;">
<th style="padding: 10px; border: 1px solid #ddd; text-align: right;">المعيار</th>
<th style="padding: 10px; border: 1px solid #ddd; text-align: right;">Stripping</th>
<th style="padding: 10px; border: 1px solid #ddd; text-align: right;">Snubbing</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">وزن الأنابيب</td>
<td style="padding: 10px; border: 1px solid #ddd;">أثقل من قوة الرفع</td>
<td style="padding: 10px; border: 1px solid #ddd;">أخف من قوة الرفع</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 10px; border: 1px solid #ddd;">الحركة</td>
<td style="padding: 10px; border: 1px solid #ddd;">بالجاذبية</td>
<td style="padding: 10px; border: 1px solid #ddd;">بقوة ميكانيكية</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">المعدات</td>
<td style="padding: 10px; border: 1px solid #ddd;">BOP عادي</td>
<td style="padding: 10px; border: 1px solid #ddd;">وحدة Snubbing خاصة</td>
</tr>
</tbody>
</table>
</div>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>Dynamic Kill: يستخدم الاحتكاك للسيطرة على التدفق القوي</li>
<li>Off-Bottom Kill: تحديات خاصة عندما البت ليس في القاع</li>
<li>Stripping: إدخال الأنابيب تحت الضغط مع التعويض</li>
<li>Snubbing: مثل Stripping لكن يحتاج قوة دفع ميكانيكية</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Dynamic Kill', definition: 'استخدام فقد الاحتكاك من الضخ العالي للسيطرة على البئر' },
            { term: 'Off-Bottom Kill', definition: 'قتل البئر عندما يكون البت ليس في القاع - يحتاج اعتبارات خاصة' },
            { term: 'Stripping', definition: 'إدخال الأنابيب تحت الضغط مع تعويض الحجم بتنفيس الطين' },
            { term: 'Snubbing', definition: 'مثل Stripping لكن الأنابيب أخف من قوة الرفع فتحتاج دفع ميكانيكي' },
            { term: 'Volume Compensation', definition: 'تعويض حجم الأنابيب المُدخلة للحفاظ على ثبات الضغط' },
          ],
          practiceQuestion: {
            question: 'ما الفرق الرئيسي بين Stripping و Snubbing؟',
            options: [
              'Stripping أسرع من Snubbing',
              'Snubbing يحتاج قوة ميكانيكية لدفع الأنابيب للأسفل',
              'Stripping للآبار البحرية فقط',
              'لا يوجد فرق'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Advanced Techniques: Dynamic Kill & Stripping',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Dynamic Kill Techniques</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
Some situations require more sophisticated techniques that rely on friction and movement rather than weight alone.
</p>

<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #059669;">
<h3 style="color: #059669; font-size: 1.3rem; font-weight: bold; margin-bottom: 1rem;">1️⃣ Dynamic Kill</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
Using friction loss to control the well instead of mud density alone. Very useful in specific cases.
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">📌 When to use?</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li>Strong flow that cannot be controlled by weight</li>
<li>Insufficient heavy mud available</li>
<li>Well is flowing continuously</li>
</ul>
<p style="font-weight: bold; margin: 1rem 0 0.5rem;">💡 The Idea:</p>
<p style="line-height: 1.8;">High pumping rate produces large friction loss that adds to hydrostatic pressure and overcomes formation pressure.</p>
</div>
</div>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #2563eb;">
<h3 style="color: #1e40af; font-size: 1.3rem; font-weight: bold; margin-bottom: 1rem;">2️⃣ Off-Bottom Kill</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
When the bit is not at bottom when kick occurs. Requires special considerations.
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">📌 Challenges:</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li>Kick may be below bit (in open hole)</li>
<li>Cannot circulate due to bit position</li>
<li>Complex Kill Mud calculations</li>
</ul>
<p style="font-weight: bold; margin: 1rem 0 0.5rem;">Solution:</p>
<p style="line-height: 1.8;">Return to bottom carefully while monitoring pressures, or use alternative methods.</p>
</div>
</div>

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #f59e0b;">
<h3 style="color: #92400e; font-size: 1.3rem; font-weight: bold; margin-bottom: 1rem;">3️⃣ Stripping (Running Pipe Under Pressure)</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
Running pipe in or out while well is under pressure - very sensitive operation.
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">📌 Why do we need it?</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li>Reach bottom after kick while bit is up</li>
<li>Pull pipe to repair or change bit</li>
<li>Deal with Stuck Pipe under kick conditions</li>
</ul>
<p style="margin-top: 1rem; background: #fef2f2; padding: 0.75rem; border-radius: 6px;">
<strong>⚠️ Danger:</strong> Must compensate volume of pipe run in by bleeding equal mud to maintain constant BHP
</p>
</div>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Snubbing Technique</h2>

<div style="background: #fae8ff; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #a855f7;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">What's the difference between Stripping and Snubbing?</h3>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background: #f3e8ff;">
<th style="padding: 10px; border: 1px solid #ddd; text-align: left;">Criteria</th>
<th style="padding: 10px; border: 1px solid #ddd; text-align: left;">Stripping</th>
<th style="padding: 10px; border: 1px solid #ddd; text-align: left;">Snubbing</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">Pipe Weight</td>
<td style="padding: 10px; border: 1px solid #ddd;">Heavier than buoyancy</td>
<td style="padding: 10px; border: 1px solid #ddd;">Lighter than buoyancy</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 10px; border: 1px solid #ddd;">Movement</td>
<td style="padding: 10px; border: 1px solid #ddd;">By gravity</td>
<td style="padding: 10px; border: 1px solid #ddd;">By mechanical force</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">Equipment</td>
<td style="padding: 10px; border: 1px solid #ddd;">Standard BOP</td>
<td style="padding: 10px; border: 1px solid #ddd;">Special Snubbing unit</td>
</tr>
</tbody>
</table>
</div>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>Dynamic Kill: Uses friction to control strong flow</li>
<li>Off-Bottom Kill: Special challenges when bit not at bottom</li>
<li>Stripping: Running pipe under pressure with compensation</li>
<li>Snubbing: Like Stripping but needs mechanical push force</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Dynamic Kill', definition: 'Using high pump rate friction loss to control the well' },
            { term: 'Off-Bottom Kill', definition: 'Killing well when bit is not at bottom - needs special considerations' },
            { term: 'Stripping', definition: 'Running pipe under pressure with volume compensation by bleeding mud' },
            { term: 'Snubbing', definition: 'Like Stripping but pipe is lighter than buoyancy so needs mechanical push' },
            { term: 'Volume Compensation', definition: 'Compensating pipe volume run in to maintain constant pressure' },
          ],
          practiceQuestion: {
            question: 'What is the main difference between Stripping and Snubbing?',
            options: [
              'Stripping is faster than Snubbing',
              'Snubbing requires mechanical force to push pipe down',
              'Stripping is for offshore wells only',
              'There is no difference'
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
          title: 'سيناريوهات معقدة وقرارات حرجة',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 السيناريوهات المعقدة في التحكم بالبئر</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
في الواقع العملي، نادراً ما تكون الحالات "مثالية". فهم السيناريوهات المعقدة يُحضرك للتعامل مع الطوارئ الحقيقية.
</p>

<div style="background: linear-gradient(135deg, #dc262615, #dc262610); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #dc2626;">
<h3 style="color: #dc2626; font-size: 1.3rem; font-weight: bold; margin-bottom: 1rem;">⚠️ السيناريو 1: Underground Blowout</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
أخطر الحالات: التدفق من تكوين لآخر داخل البئر دون وصوله للسطح.
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">📌 علامات التحذير:</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li>فقدان طين مستمر مع عدم تغير الضغوط السطحية</li>
<li>صوت تدفق تحت السطح</li>
<li>تغيرات في قراءات MWD/LWD غير مفسرة</li>
</ul>
<p style="font-weight: bold; margin: 1rem 0 0.5rem;">الإجراء:</p>
<p style="line-height: 1.8;">إغلاق البئر فوراً ← تقييم ← قد نحتاج حفر Relief Well</p>
</div>
</div>

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #f59e0b;">
<h3 style="color: #92400e; font-size: 1.3rem; font-weight: bold; margin-bottom: 1rem;">السيناريو 2: Swabbed Kick أثناء الرحلة</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
ركلة ناتجة عن سحب الأنابيب بسرعة (Swabbing) - شائعة جداً.
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">📌 الوقاية:</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li>سرعة سحب مناسبة (لا تتجاوز 3 stands/min)</li>
<li>مراقبة Trip Tank باستمرار</li>
<li>استخدام Pill قبل الرحلة إذا لزم</li>
</ul>
<p style="font-weight: bold; margin: 1rem 0 0.5rem;">إذا حدثت:</p>
<p style="line-height: 1.8;">إنزال الأنابيب فوراً ← Space Out ← إغلاق البئر</p>
</div>
</div>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #2563eb;">
<h3 style="color: #1e40af; font-size: 1.3rem; font-weight: bold; margin-bottom: 1rem;">السيناريو 3: Lost Circulation مع Kick</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
أصعب الحالات: تخسر طين من الأسفل وتستقبل ركلة في نفس الوقت!
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">📌 لماذا يحدث؟</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li>نافذة طين ضيقة جداً (HPHT)</li>
<li>طبقات متعددة بضغوط مختلفة</li>
<li>ECD مرتفع يكسر طبقة بينما طبقة أخرى تتدفق</li>
</ul>
<p style="font-weight: bold; margin: 1rem 0 0.5rem;">الحل:</p>
<p style="line-height: 1.8;">MPD (Managed Pressure Drilling) أو الكيسنق الوسيط للفصل بين الطبقات</p>
</div>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 مصفوفة القرار السريع</h2>

<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #64748b;">
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background: #e2e8f0;">
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: right;">الموقف</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: right;">الإجراء الفوري</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: right;">الأولوية</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;">ركلة غاز</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">إغلاق فوري + W&W</td>
<td style="padding: 12px; border: 1px solid #cbd5e1; color: #dc2626;">عالية جداً</td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 12px; border: 1px solid #cbd5e1;">تجاوز MAASP</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">خفض معدل الضخ</td>
<td style="padding: 12px; border: 1px solid #cbd5e1; color: #dc2626;">عالية جداً</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;">H₂S مُكتشف</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Bullhead + إخلاء</td>
<td style="padding: 12px; border: 1px solid #cbd5e1; color: #dc2626;">طوارئ</td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 12px; border: 1px solid #cbd5e1;">عطل BOP</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Secondary barrier</td>
<td style="padding: 12px; border: 1px solid #cbd5e1; color: #dc2626;">حرجة</td>
</tr>
</tbody>
</table>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>Underground Blowout: تدفق داخلي خفي - الأخطر</li>
<li>Swabbed Kick: شائعة ويمكن تجنبها بالسرعة المناسبة</li>
<li>Lost + Kick: تحتاج MPD أو كيسنق وسيط</li>
<li>القرارات السريعة الصحيحة تنقذ الأرواح والمعدات</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Underground Blowout', definition: 'تدفق من تكوين لآخر داخل البئر دون وصوله للسطح - أخطر الحالات' },
            { term: 'Swabbed Kick', definition: 'ركلة ناتجة عن سحب الأنابيب بسرعة مما يسبب انخفاض الضغط مؤقتاً' },
            { term: 'Lost + Kick', definition: 'فقدان طين وركلة معاً - من أصعب الحالات' },
            { term: 'Relief Well', definition: 'بئر إغاثة يُحفر للسيطرة على بئر خارج السيطرة' },
            { term: 'Space Out', definition: 'تحريك الأنابيب ليكون Tool Joint في موضع مناسب للإغلاق' },
          ],
          practiceQuestion: {
            question: 'ما هي أخطر حالة في التحكم بالبئر؟',
            options: [
              'ركلة غاز عادية',
              'Underground Blowout',
              'فقدان طين بسيط',
              'Swabbed Kick'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Complex Scenarios and Critical Decisions',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Complex Well Control Scenarios</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
In real operations, situations are rarely "ideal." Understanding complex scenarios prepares you for real emergencies.
</p>

<div style="background: linear-gradient(135deg, #dc262615, #dc262610); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #dc2626;">
<h3 style="color: #dc2626; font-size: 1.3rem; font-weight: bold; margin-bottom: 1rem;">⚠️ Scenario 1: Underground Blowout</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
Most dangerous case: Flow from one formation to another inside the well without reaching surface.
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">📌 Warning Signs:</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li>Continuous mud loss with no surface pressure change</li>
<li>Underground flow sounds</li>
<li>Unexplained MWD/LWD reading changes</li>
</ul>
<p style="font-weight: bold; margin: 1rem 0 0.5rem;">Action:</p>
<p style="line-height: 1.8;">Shut in immediately ← Evaluate ← May need Relief Well</p>
</div>
</div>

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #f59e0b;">
<h3 style="color: #92400e; font-size: 1.3rem; font-weight: bold; margin-bottom: 1rem;">Scenario 2: Swabbed Kick During Trip</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
Kick caused by pulling pipe too fast (Swabbing) - very common.
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">📌 Prevention:</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li>Appropriate pulling speed (don't exceed 3 stands/min)</li>
<li>Continuous Trip Tank monitoring</li>
<li>Use Pill before trip if needed</li>
</ul>
<p style="font-weight: bold; margin: 1rem 0 0.5rem;">If it happens:</p>
<p style="line-height: 1.8;">Run pipe down immediately ← Space Out ← Shut in</p>
</div>
</div>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #2563eb;">
<h3 style="color: #1e40af; font-size: 1.3rem; font-weight: bold; margin-bottom: 1rem;">Scenario 3: Lost Circulation with Kick</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
Most difficult case: Losing mud downhole while receiving a kick simultaneously!
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">📌 Why does it happen?</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li>Very narrow mud window (HPHT)</li>
<li>Multiple formations with different pressures</li>
<li>High ECD fractures one zone while another flows</li>
</ul>
<p style="font-weight: bold; margin: 1rem 0 0.5rem;">Solution:</p>
<p style="line-height: 1.8;">MPD (Managed Pressure Drilling) or intermediate casing to isolate zones</p>
</div>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Quick Decision Matrix</h2>

<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #64748b;">
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background: #e2e8f0;">
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: left;">Situation</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: left;">Immediate Action</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: left;">Priority</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Gas Kick</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Immediate shut-in + W&W</td>
<td style="padding: 12px; border: 1px solid #cbd5e1; color: #dc2626;">Very High</td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 12px; border: 1px solid #cbd5e1;">MAASP Exceeded</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Reduce pump rate</td>
<td style="padding: 12px; border: 1px solid #cbd5e1; color: #dc2626;">Very High</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;">H₂S Detected</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Bullhead + Evacuate</td>
<td style="padding: 12px; border: 1px solid #cbd5e1; color: #dc2626;">Emergency</td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 12px; border: 1px solid #cbd5e1;">BOP Failure</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Secondary barrier</td>
<td style="padding: 12px; border: 1px solid #cbd5e1; color: #dc2626;">Critical</td>
</tr>
</tbody>
</table>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>Underground Blowout: Hidden internal flow - most dangerous</li>
<li>Swabbed Kick: Common and preventable with proper speed</li>
<li>Lost + Kick: Needs MPD or intermediate casing</li>
<li>Correct quick decisions save lives and equipment</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Underground Blowout', definition: 'Flow from one formation to another inside well without reaching surface - most dangerous' },
            { term: 'Swabbed Kick', definition: 'Kick caused by pulling pipe too fast, temporarily reducing pressure' },
            { term: 'Lost + Kick', definition: 'Mud loss and kick simultaneously - one of the most difficult cases' },
            { term: 'Relief Well', definition: 'Relief well drilled to control an out-of-control well' },
            { term: 'Space Out', definition: 'Moving pipe so tool joint is in appropriate position for shut-in' },
          ],
          practiceQuestion: {
            question: 'What is the most dangerous well control situation?',
            options: [
              'Normal gas kick',
              'Underground Blowout',
              'Minor mud loss',
              'Swabbed Kick'
            ],
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
          title: 'اختبار التحكم المتقدم بالبئر',
          explanation: '',
          keyTerms: [],
        },
        en: {
          title: 'Advanced Well Control Quiz',
          explanation: '',
          keyTerms: [],
        },
      },
      quiz: {
        ar: [
          {
            question: 'ما هي نافذة الطين (Mud Window)؟',
            options: ['الفرق بين ضغط المسام وضغط الكسر', 'كثافة الطين المستخدمة', 'عمق البئر', 'قطر الفتحة'],
            correctAnswer: 0,
          },
          {
            question: 'لماذا يُعتبر الغاز أخطر أنواع الركلات؟',
            options: ['لأنه سام', 'لأنه يتمدد بشكل هائل عند الصعود', 'لأنه خفيف', 'لأنه قابل للاشتعال فقط'],
            correctAnswer: 1,
          },
          {
            question: 'ما هو MAASP؟',
            options: ['كثافة الطين القاتل', 'أقصى ضغط سطحي مسموح على الفتحة الحلقية', 'معدل الضخ', 'عمق الكيسنق'],
            correctAnswer: 1,
          },
          {
            question: 'متى نستخدم طريقة Bullheading؟',
            options: ['في كل الركلات', 'عند وجود غازات سامة', 'عند عدم توفر طين', 'في الآبار الضحلة فقط'],
            correctAnswer: 1,
          },
          {
            question: 'ما الفرق بين Stripping و Snubbing؟',
            options: ['لا فرق', 'Snubbing يحتاج قوة ميكانيكية لدفع الأنابيب', 'Stripping أسرع', 'Snubbing للآبار البحرية فقط'],
            correctAnswer: 1,
          },
          {
            question: 'ما هو Underground Blowout؟',
            options: ['انفجار سطحي', 'تدفق من تكوين لآخر داخل البئر', 'ركلة عادية', 'فقدان طين'],
            correctAnswer: 1,
          },
          {
            question: 'ما سبب Swabbed Kick؟',
            options: ['كثافة طين منخفضة', 'سحب الأنابيب بسرعة عالية', 'ضغط تكوين عالي', 'عطل BOP'],
            correctAnswer: 1,
          },
          {
            question: 'ما هو معدل هجرة الغاز التقريبي؟',
            options: ['100-200 قدم/ساعة', '500-1000 قدم/ساعة', '2000-3000 قدم/ساعة', '50 قدم/ساعة'],
            correctAnswer: 1,
          },
          {
            question: 'متى نستخدم Dynamic Kill؟',
            options: ['في كل الحالات', 'عند تدفق قوي لا يمكن السيطرة عليه بالوزن', 'في الآبار الضحلة', 'عند عدم وجود ركلة'],
            correctAnswer: 1,
          },
          {
            question: 'ما أول إجراء عند اكتشاف H₂S في الركلة؟',
            options: ['الاستمرار بالضخ', 'Bullhead وإخلاء المنطقة', 'الانتظار', 'زيادة كثافة الطين فقط'],
            correctAnswer: 1,
          },
        ],
        en: [
          {
            question: 'What is the Mud Window?',
            options: ['Difference between pore pressure and fracture pressure', 'Mud weight used', 'Well depth', 'Hole diameter'],
            correctAnswer: 0,
          },
          {
            question: 'Why is gas considered the most dangerous kick type?',
            options: ['Because it is toxic', 'Because it expands enormously as it rises', 'Because it is light', 'Because it is flammable only'],
            correctAnswer: 1,
          },
          {
            question: 'What is MAASP?',
            options: ['Kill mud weight', 'Maximum allowable annular surface pressure', 'Pump rate', 'Casing depth'],
            correctAnswer: 1,
          },
          {
            question: 'When do we use Bullheading?',
            options: ['For all kicks', 'When toxic gases are present', 'When mud is unavailable', 'In shallow wells only'],
            correctAnswer: 1,
          },
          {
            question: 'What is the difference between Stripping and Snubbing?',
            options: ['No difference', 'Snubbing requires mechanical force to push pipe', 'Stripping is faster', 'Snubbing is for offshore only'],
            correctAnswer: 1,
          },
          {
            question: 'What is Underground Blowout?',
            options: ['Surface explosion', 'Flow from one formation to another inside well', 'Normal kick', 'Mud loss'],
            correctAnswer: 1,
          },
          {
            question: 'What causes Swabbed Kick?',
            options: ['Low mud weight', 'Pulling pipe too fast', 'High formation pressure', 'BOP failure'],
            correctAnswer: 1,
          },
          {
            question: 'What is the approximate gas migration rate?',
            options: ['100-200 ft/hr', '500-1000 ft/hr', '2000-3000 ft/hr', '50 ft/hr'],
            correctAnswer: 1,
          },
          {
            question: 'When do we use Dynamic Kill?',
            options: ['In all cases', 'When strong flow cannot be controlled by weight', 'In shallow wells', 'When there is no kick'],
            correctAnswer: 1,
          },
          {
            question: 'What is the first action when H₂S is detected in a kick?',
            options: ['Continue pumping', 'Bullhead and evacuate area', 'Wait', 'Just increase mud weight'],
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
          title: 'مشروع: تحليل سيناريو تحكم بالبئر',
          explanation: '',
          keyTerms: [],
        },
        en: {
          title: 'Project: Well Control Scenario Analysis',
          explanation: '',
          keyTerms: [],
        },
      },
      project: {
        ar: {
          title: 'مشروع: تحليل سيناريو تحكم بالبئر',
          description: 'قم بتحليل سيناريو ركلة غاز في بئر HPHT. حدد: نوع الركلة، الطريقة المناسبة للقتل، والإجراءات الوقائية.',
          instructions: [
            'تحديد علامات الركلة وكيفية اكتشافها',
            'اختيار طريقة القتل المناسبة مع التبرير',
            'وصف الإجراءات خطوة بخطوة',
            'ذكر المخاطر المحتملة وكيفية تجنبها',
          ],
          submissionType: 'both',
        },
        en: {
          title: 'Project: Well Control Scenario Analysis',
          description: 'Analyze a gas kick scenario in an HPHT well. Identify: kick type, appropriate kill method, and preventive measures.',
          instructions: [
            'Identify kick indicators and how to detect them',
            'Select appropriate kill method with justification',
            'Describe step-by-step procedures',
            'Mention potential risks and how to avoid them',
          ],
          submissionType: 'both',
        },
      },
    },
  ],
};
