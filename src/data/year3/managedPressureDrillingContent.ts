import { WeeklyLesson } from '../weeklyContent';

export const managedPressureDrillingLesson: WeeklyLesson = {
  lessonId: 'managed-pressure-drilling',
  days: [
    {
      day: 1,
      type: 'learning',
      content: {
        ar: {
          title: 'الحفر بالضغط المُدار (MPD) - اليوم الأول: المفاهيم الأساسية',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">🔷 مقدمة في الحفر بالضغط المُدار</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="font-size: 1.25rem; margin-bottom: 1rem;">💡 لماذا نحتاج الحفر بالضغط المُدار؟</h3>
<p style="line-height: 1.8;">في الحفر التقليدي، نواجه تحديات كبيرة عند وجود نافذة ضغط ضيقة (Narrow Pressure Window) بين ضغط المسام (Pore Pressure) وضغط الكسر (Fracture Pressure). الحفر بالضغط المُدار يوفر حلاً هندسياً متقدماً للتحكم الدقيق في الضغط قاع البئر (BHP - Bottom Hole Pressure) مما يسمح بالحفر في ظروف كانت مستحيلة سابقاً.</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 تعريف الحفر بالضغط المُدار (MPD Definition)</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">وفقاً لمنظمة IADC (International Association of Drilling Contractors)، الحفر بالضغط المُدار هو:</p>
<div style="background: #f8fafc; border-right: 4px solid #3498db; padding: 1rem; margin: 1rem 0; border-radius: 8px;">
<p style="font-style: italic; line-height: 1.8;">"عملية حفر تكيفية تُستخدم للتحكم بشكل أكثر دقة في ملف الضغط الحلقي (Annular Pressure Profile) على طول البئر. تشمل أهدافها التحكم في ضغط قاع البئر، إدارة نافذة الضغط المتاحة، والتحكم في تدفق السوائل من وإلى البئر."</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 الفرق بين الحفر التقليدي والحفر بالضغط المُدار</h3>
<table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
<thead>
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 12px; text-align: right; border: 1px solid #ddd;">الجانب</th>
<th style="padding: 12px; text-align: right; border: 1px solid #ddd;">الحفر التقليدي</th>
<th style="padding: 12px; text-align: right; border: 1px solid #ddd;">الحفر بالضغط المُدار (MPD)</th>
</tr>
</thead>
<tbody>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #ddd;"><strong>التحكم بالضغط</strong></td>
<td style="padding: 12px; border: 1px solid #ddd;">يعتمد على وزن الطين فقط</td>
<td style="padding: 12px; border: 1px solid #ddd;">وزن الطين + الضغط السطحي المُطبق</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;"><strong>نظام الدورة</strong></td>
<td style="padding: 12px; border: 1px solid #ddd;">نظام مفتوح للغلاف الجوي</td>
<td style="padding: 12px; border: 1px solid #ddd;">نظام مغلق مع Rotating Control Device (RCD)</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #ddd;"><strong>المرونة</strong></td>
<td style="padding: 12px; border: 1px solid #ddd;">محدودة بكثافة الطين</td>
<td style="padding: 12px; border: 1px solid #ddd;">تعديل فوري للضغط دون تغيير الطين</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;"><strong>الاستجابة للـ Kick</strong></td>
<td style="padding: 12px; border: 1px solid #ddd;">بطيئة (تحتاج تغيير وزن الطين)</td>
<td style="padding: 12px; border: 1px solid #ddd;">فورية (تعديل الضغط السطحي)</td>
</tr>
</tbody>
</table>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 المكونات الأساسية لنظام MPD</h3>
<div style="display: grid; gap: 1rem; margin: 1rem 0;">
<div style="background: #e8f4f8; padding: 1rem; border-radius: 8px; border-right: 4px solid #1e3a5f;">
<h4 style="color: #1e3a5f; margin-bottom: 0.5rem;">1️⃣ جهاز التحكم الدوار (RCD - Rotating Control Device)</h4>
<p style="line-height: 1.7;">يُركب فوق الـ BOP ويسمح بدوران عمود الحفر مع الحفاظ على إحكام الغلق. يتحمل ضغوطاً تصل إلى 5,000 psi ويحتوي على حشوات مطاطية خاصة تتحمل الدوران والضغط معاً.</p>
</div>
<div style="background: #fef9e7; padding: 1rem; border-radius: 8px; border-right: 4px solid #e67e22;">
<h4 style="color: #e67e22; margin-bottom: 0.5rem;">2️⃣ صمام الخنق الآلي (Automated Choke Manifold)</h4>
<p style="line-height: 1.7;">يتحكم بالضغط الخلفي (Back Pressure) تلقائياً للحفاظ على BHP ثابت. يستجيب للتغييرات في ثوانٍ ويمكن برمجته للحفاظ على ضغط محدد.</p>
</div>
<div style="background: #e8f8f5; padding: 1rem; border-radius: 8px; border-right: 4px solid #27ae60;">
<h4 style="color: #27ae60; margin-bottom: 0.5rem;">3️⃣ نظام قياس الضغط والتدفق (Pressure & Flow Monitoring)</h4>
<p style="line-height: 1.7;">مستشعرات عالية الدقة لقياس الضغط في نقاط متعددة، مع أنظمة كشف تدفق حساسة تكتشف تغييرات بسيطة تصل إلى 0.5 bbl/min.</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 مبدأ عمل الضغط المكافئ (Equivalent Circulating Density)</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">في نظام MPD، الضغط في قاع البئر (BHP) يُحسب كالتالي:</p>
<div style="background: #1e3a5f; color: white; padding: 1.5rem; border-radius: 12px; text-align: center; margin: 1rem 0;">
<p style="font-size: 1.1rem; font-weight: bold;">BHP = ضغط العمود الهيدروستاتيكي + ضغط الاحتكاك الحلقي + الضغط السطحي المُطبق</p>
<p style="margin-top: 1rem;">BHP = Hydrostatic Pressure + Annular Friction Pressure (AFP) + Surface Back Pressure (SBP)</p>
</div>

<div style="background: #fff3cd; border-right: 4px solid #f39c12; padding: 1rem; margin: 1.5rem 0; border-radius: 8px;">
<h4 style="color: #856404; margin-bottom: 0.5rem;">⚠️ نقطة مهمة</h4>
<p style="line-height: 1.7;">عند إيقاف المضخات في الحفر التقليدي، يفقد البئر ضغط AFP مما قد يسبب Kick. في MPD، يُعوض النظام تلقائياً بزيادة SBP للحفاظ على BHP ثابتاً.</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 التطبيقات الرئيسية لـ MPD</h3>
<ul style="list-style-type: none; padding: 0; margin: 1rem 0;">
<li style="padding: 0.75rem; margin: 0.5rem 0; background: #f8fafc; border-radius: 8px; border-right: 3px solid #3498db;">
<strong>🎯 الحفر في نوافذ ضغط ضيقة:</strong> حيث الفرق بين Pore Pressure و Fracture Pressure صغير جداً
</li>
<li style="padding: 0.75rem; margin: 0.5rem 0; background: #f8fafc; border-radius: 8px; border-right: 3px solid #27ae60;">
<strong>🎯 تقليل فقدان الدورة (Lost Circulation):</strong> بالتحكم الدقيق بالضغط لتجنب تجاوز ضغط الكسر
</li>
<li style="padding: 0.75rem; margin: 0.5rem 0; background: #f8fafc; border-radius: 8px; border-right: 3px solid #e67e22;">
<strong>🎯 الكشف المبكر عن الـ Kick:</strong> أنظمة المراقبة الحساسة تكتشف أي تدفق غير طبيعي
</li>
<li style="padding: 0.75rem; margin: 0.5rem 0; background: #f8fafc; border-radius: 8px; border-right: 3px solid #9b59b6;">
<strong>🎯 الآبار المستنفدة (Depleted Reservoirs):</strong> حيث انخفض ضغط المكمن بشكل كبير
</li>
</ul>

</section>`,
          keyTerms: [
            { term: 'MPD - Managed Pressure Drilling', definition: 'الحفر بالضغط المُدار - تقنية للتحكم الدقيق بضغط قاع البئر' },
            { term: 'RCD - Rotating Control Device', definition: 'جهاز التحكم الدوار - يُغلق الحلقي مع السماح بدوران عمود الحفر' },
            { term: 'Surface Back Pressure (SBP)', definition: 'الضغط السطحي المُطبق على البئر للتحكم بـ BHP' },
            { term: 'Narrow Pressure Window', definition: 'نافذة ضغط ضيقة - فرق صغير بين ضغط المسام وضغط الكسر' },
          ],
          practiceQuestion: {
            question: 'ما هو المكون الذي يسمح بالحفر في نظام مغلق مع الحفاظ على دوران عمود الحفر؟',
            options: [
              'صمام الخنق (Choke Valve)',
              'جهاز التحكم الدوار (RCD)',
              'مانع الانفجار (BOP)',
              'المضخة الطينية (Mud Pump)'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Managed Pressure Drilling (MPD) - Day 1: Fundamental Concepts',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">🔷 Introduction to Managed Pressure Drilling</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="font-size: 1.25rem; margin-bottom: 1rem;">💡 Why Do We Need Managed Pressure Drilling?</h3>
<p style="line-height: 1.8;">In conventional drilling, we face significant challenges when dealing with a Narrow Pressure Window between Pore Pressure and Fracture Pressure. MPD provides an advanced engineering solution for precise control of Bottom Hole Pressure (BHP), enabling drilling in conditions that were previously impossible.</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 MPD Definition (IADC)</h3>
<div style="background: #f8fafc; border-left: 4px solid #3498db; padding: 1rem; margin: 1rem 0; border-radius: 8px;">
<p style="font-style: italic; line-height: 1.8;">"An adaptive drilling process used to precisely control the annular pressure profile throughout the wellbore. Its objectives include controlling BHP, managing the available pressure window, and controlling fluid influx/outflux from the wellbore."</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Key MPD System Components</h3>
<div style="display: grid; gap: 1rem; margin: 1rem 0;">
<div style="background: #e8f4f8; padding: 1rem; border-radius: 8px; border-left: 4px solid #1e3a5f;">
<h4 style="color: #1e3a5f; margin-bottom: 0.5rem;">1️⃣ Rotating Control Device (RCD)</h4>
<p style="line-height: 1.7;">Mounted above the BOP, allows drill string rotation while maintaining annular seal. Can handle pressures up to 5,000 psi with specialized rubber elements.</p>
</div>
<div style="background: #fef9e7; padding: 1rem; border-radius: 8px; border-left: 4px solid #e67e22;">
<h4 style="color: #e67e22; margin-bottom: 0.5rem;">2️⃣ Automated Choke Manifold</h4>
<p style="line-height: 1.7;">Automatically controls back pressure to maintain constant BHP. Responds to changes within seconds and can be programmed for specific pressure targets.</p>
</div>
<div style="background: #e8f8f5; padding: 1rem; border-radius: 8px; border-left: 4px solid #27ae60;">
<h4 style="color: #27ae60; margin-bottom: 0.5rem;">3️⃣ Pressure & Flow Monitoring System</h4>
<p style="line-height: 1.7;">High-precision sensors measuring pressure at multiple points, with sensitive flow detection systems capable of detecting changes as small as 0.5 bbl/min.</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 BHP Calculation in MPD</h3>
<div style="background: #1e3a5f; color: white; padding: 1.5rem; border-radius: 12px; text-align: center; margin: 1rem 0;">
<p style="font-size: 1.1rem; font-weight: bold;">BHP = Hydrostatic Pressure + Annular Friction Pressure (AFP) + Surface Back Pressure (SBP)</p>
</div>

</section>`,
          keyTerms: [
            { term: 'MPD - Managed Pressure Drilling', definition: 'Technique for precise control of bottom hole pressure' },
            { term: 'RCD - Rotating Control Device', definition: 'Seals the annulus while allowing drill string rotation' },
            { term: 'Surface Back Pressure (SBP)', definition: 'Surface pressure applied to control BHP' },
            { term: 'Narrow Pressure Window', definition: 'Small margin between pore pressure and fracture pressure' },
          ],
          practiceQuestion: {
            question: 'Which component allows drilling in a closed system while maintaining drill string rotation?',
            options: [
              'Choke Valve',
              'Rotating Control Device (RCD)',
              'Blowout Preventer (BOP)',
              'Mud Pump'
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
          title: 'الحفر بالضغط المُدار - اليوم الثاني: أنواع وتقنيات MPD',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">🔷 تصنيفات الحفر بالضغط المُدار</h2>

<p style="margin-bottom: 1.5rem; line-height: 1.8;">توجد عدة تقنيات مختلفة للحفر بالضغط المُدار، كل منها مصمم لمواجهة تحديات محددة. فهم هذه التقنيات يساعد المهندس على اختيار الأنسب لكل حالة.</p>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 1. الضغط الخلفي الثابت (Constant Bottom Hole Pressure - CBHP)</h3>
<div style="background: #e8f4f8; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<p style="line-height: 1.8; margin-bottom: 1rem;">هذه هي التقنية الأكثر شيوعاً في MPD. الهدف هو الحفاظ على ضغط قاع البئر (BHP) ثابتاً بغض النظر عن حالة الضخ.</p>
<h4 style="color: #1e3a5f; margin: 1rem 0 0.5rem;">كيف يعمل؟</h4>
<ul style="line-height: 1.8; padding-right: 1.5rem;">
<li><strong>أثناء الضخ:</strong> BHP = وزن الطين الهيدروستاتيكي + AFP (ضغط الاحتكاك)</li>
<li><strong>عند إيقاف الضخ:</strong> يُفقد AFP، فيقوم النظام بتطبيق SBP لتعويض الفرق</li>
<li><strong>النتيجة:</strong> BHP يبقى ثابتاً طوال العملية</li>
</ul>
<div style="background: #fff3cd; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
<p><strong>💡 مثال عملي:</strong> إذا كان AFP = 200 psi أثناء الضخ، عند إيقاف المضخات، يُطبق النظام SBP = 200 psi للحفاظ على نفس BHP.</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 2. الغطاء الطيني (Mud Cap Drilling - MCD)</h3>
<div style="background: #fef9e7; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<p style="line-height: 1.8; margin-bottom: 1rem;">تُستخدم في التكوينات شديدة التشقق حيث يوجد فقدان كامل للدورة (Total Lost Circulation).</p>
<h4 style="color: #e67e22; margin: 1rem 0 0.5rem;">خصائص النظام:</h4>
<ul style="line-height: 1.8; padding-right: 1.5rem;">
<li>يُضخ سائل ثقيل (غطاء طيني) في الحلقي لتوفير الضغط الهيدروستاتيكي</li>
<li>سائل الحفر يذهب مباشرة للتكوين (لا يعود للسطح)</li>
<li>يُستخدم ماء أو سائل رخيص للحفر بدلاً من الطين المكلف</li>
<li>مناسب للتكوينات الكربوناتية المتكهفة</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 3. الغطاء الطيني المضغوط (Pressurized Mud Cap Drilling - PMCD)</h3>
<div style="background: #e8f8f5; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<p style="line-height: 1.8; margin-bottom: 1rem;">تطور من MCD مع إضافة ضغط سطحي على الغطاء الطيني.</p>
<h4 style="color: #27ae60; margin: 1rem 0 0.5rem;">المميزات:</h4>
<ul style="line-height: 1.8; padding-right: 1.5rem;">
<li>يُطبق ضغط سطحي على الحلقي للتحكم بأي تدفق</li>
<li>يسمح بالتعامل مع تكوينات تحتوي على غاز أو سوائل</li>
<li>أكثر أماناً من MCD التقليدي</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 4. التحكم بنسبة التدفق (Dual Gradient Drilling - DGD)</h3>
<div style="background: #f5e6ff; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<p style="line-height: 1.8; margin-bottom: 1rem;">تقنية متقدمة تُستخدم أساساً في الحفر البحري العميق (Deepwater Drilling).</p>
<h4 style="color: #9b59b6; margin: 1rem 0 0.5rem;">المبدأ:</h4>
<ul style="line-height: 1.8; padding-right: 1.5rem;">
<li>استخدام كثافتين مختلفتين للسائل: واحدة في الـ Riser وأخرى في البئر</li>
<li>في الـ Riser: سائل خفيف (مثل ماء البحر)</li>
<li>في البئر: طين ثقيل للتحكم بضغط التكوين</li>
<li>يحاكي حالة لو كان قاع البحر هو نقطة الصفر للضغط</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 مقارنة بين التقنيات</h3>
<table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
<thead>
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 12px; text-align: right; border: 1px solid #ddd;">التقنية</th>
<th style="padding: 12px; text-align: right; border: 1px solid #ddd;">الاستخدام الرئيسي</th>
<th style="padding: 12px; text-align: right; border: 1px solid #ddd;">التعقيد</th>
</tr>
</thead>
<tbody>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #ddd;"><strong>CBHP</strong></td>
<td style="padding: 12px; border: 1px solid #ddd;">نوافذ ضغط ضيقة، الآبار المستنفدة</td>
<td style="padding: 12px; border: 1px solid #ddd;">متوسط</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;"><strong>MCD</strong></td>
<td style="padding: 12px; border: 1px solid #ddd;">فقدان دورة كامل</td>
<td style="padding: 12px; border: 1px solid #ddd;">منخفض</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #ddd;"><strong>PMCD</strong></td>
<td style="padding: 12px; border: 1px solid #ddd;">فقدان دورة مع تدفق غاز</td>
<td style="padding: 12px; border: 1px solid #ddd;">متوسط-عالي</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;"><strong>DGD</strong></td>
<td style="padding: 12px; border: 1px solid #ddd;">الحفر في المياه العميقة</td>
<td style="padding: 12px; border: 1px solid #ddd;">عالي جداً</td>
</tr>
</tbody>
</table>

</section>`,
          keyTerms: [
            { term: 'CBHP - Constant Bottom Hole Pressure', definition: 'تقنية للحفاظ على ضغط قاع البئر ثابتاً' },
            { term: 'Mud Cap Drilling (MCD)', definition: 'الحفر باستخدام غطاء طيني ثقيل في الحلقي' },
            { term: 'PMCD - Pressurized Mud Cap Drilling', definition: 'غطاء طيني مضغوط للتحكم بالتدفقات' },
            { term: 'Dual Gradient Drilling (DGD)', definition: 'استخدام كثافتين مختلفتين للسوائل في المياه العميقة' },
          ],
          practiceQuestion: {
            question: 'أي تقنية MPD تُستخدم في حالة الفقدان الكامل للدورة مع احتمال تدفق غاز؟',
            options: [
              'CBHP',
              'MCD',
              'PMCD',
              'DGD'
            ],
            correctAnswer: 2,
          },
        },
        en: {
          title: 'Managed Pressure Drilling - Day 2: MPD Types and Techniques',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">🔷 MPD Classifications</h2>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 1. Constant Bottom Hole Pressure (CBHP)</h3>
<div style="background: #e8f4f8; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<p style="line-height: 1.8;">The most common MPD technique. The goal is to maintain constant BHP regardless of pumping status.</p>
<h4 style="color: #1e3a5f; margin: 1rem 0 0.5rem;">How it works:</h4>
<ul style="line-height: 1.8; padding-left: 1.5rem;">
<li><strong>While pumping:</strong> BHP = Hydrostatic + AFP</li>
<li><strong>Pumps off:</strong> AFP is lost, system applies SBP to compensate</li>
<li><strong>Result:</strong> BHP remains constant throughout</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 2. Mud Cap Drilling (MCD)</h3>
<div style="background: #fef9e7; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<p style="line-height: 1.8;">Used in highly fractured formations with total lost circulation. Heavy mud cap in annulus provides hydrostatic pressure while drilling fluid goes directly to formation.</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 3. Pressurized Mud Cap Drilling (PMCD)</h3>
<div style="background: #e8f8f5; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<p style="line-height: 1.8;">Evolution of MCD with surface pressure applied on the mud cap. Allows handling formations containing gas or fluids safely.</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 4. Dual Gradient Drilling (DGD)</h3>
<div style="background: #f5e6ff; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<p style="line-height: 1.8;">Advanced technique primarily used in deepwater drilling. Uses two different fluid densities: light fluid in riser, heavy mud in wellbore.</p>
</div>

</section>`,
          keyTerms: [
            { term: 'CBHP - Constant Bottom Hole Pressure', definition: 'Technique to maintain constant BHP' },
            { term: 'Mud Cap Drilling (MCD)', definition: 'Drilling with heavy mud cap in annulus' },
            { term: 'PMCD - Pressurized Mud Cap Drilling', definition: 'Pressurized mud cap for flow control' },
            { term: 'Dual Gradient Drilling (DGD)', definition: 'Using two fluid densities in deepwater drilling' },
          ],
          practiceQuestion: {
            question: 'Which MPD technique is used for total lost circulation with potential gas influx?',
            options: [
              'CBHP',
              'MCD',
              'PMCD',
              'DGD'
            ],
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
          title: 'الحفر بالضغط المُدار - اليوم الثالث: المعدات والأنظمة',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">🔷 المعدات المتخصصة لنظام MPD</h2>

<p style="margin-bottom: 1.5rem; line-height: 1.8;">نجاح عملية MPD يعتمد على معدات متخصصة عالية الجودة. سنتناول كل مكون بالتفصيل.</p>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 1. جهاز التحكم الدوار (RCD) بالتفصيل</h3>
<div style="background: #e8f4f8; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<h4 style="color: #1e3a5f; margin-bottom: 1rem;">التصميم والمكونات:</h4>
<ul style="line-height: 2; padding-right: 1.5rem;">
<li><strong>الحشوة المطاطية (Stripper Rubber):</strong> تتحمل الدوران والضغط، عمرها 50-200 ساعة حسب الظروف</li>
<li><strong>المحمل الرئيسي (Main Bearing):</strong> يتحمل أحمال تصل 500,000 رطل</li>
<li><strong>نظام التبريد:</strong> يحافظ على حرارة الحشوة ضمن الحدود الآمنة</li>
<li><strong>الإطار الداخلي (Inner Barrel):</strong> يسمح بمرور الأدوات والـ BHA</li>
</ul>

<h4 style="color: #1e3a5f; margin: 1.5rem 0 1rem;">تصنيفات RCD:</h4>
<table style="width: 100%; border-collapse: collapse;">
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 10px; border: 1px solid #ddd;">النوع</th>
<th style="padding: 10px; border: 1px solid #ddd;">ضغط العمل</th>
<th style="padding: 10px; border: 1px solid #ddd;">الاستخدام</th>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 10px; border: 1px solid #ddd;">Active RCD</td>
<td style="padding: 10px; border: 1px solid #ddd;">2,500-5,000 psi</td>
<td style="padding: 10px; border: 1px solid #ddd;">MPD/UBD مع ضغط عالي</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">Passive RCD</td>
<td style="padding: 10px; border: 1px solid #ddd;">500-1,500 psi</td>
<td style="padding: 10px; border: 1px solid #ddd;">MPD أساسي</td>
</tr>
</table>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 2. نظام صمام الخنق الآلي (Automated Choke System)</h3>
<div style="background: #fef9e7; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<h4 style="color: #e67e22; margin-bottom: 1rem;">المكونات الرئيسية:</h4>
<div style="display: grid; gap: 1rem;">
<div style="background: white; padding: 1rem; border-radius: 8px; border-right: 3px solid #e67e22;">
<strong>صمام الخنق المتغير (Variable Choke):</strong>
<p style="margin-top: 0.5rem; line-height: 1.7;">يتحكم بفتحة التدفق بشكل دقيق (0-100%). يستجيب للأوامر الإلكترونية خلال أجزاء من الثانية.</p>
</div>
<div style="background: white; padding: 1rem; border-radius: 8px; border-right: 3px solid #e67e22;">
<strong>وحدة التحكم (Control Unit):</strong>
<p style="margin-top: 0.5rem; line-height: 1.7;">كمبيوتر متخصص يحسب الضغط المطلوب ويُعدل الخنق تلقائياً. يعمل بخوارزميات PID للتحكم الدقيق.</p>
</div>
<div style="background: white; padding: 1rem; border-radius: 8px; border-right: 3px solid #e67e22;">
<strong>مستشعرات الضغط والتدفق:</strong>
<p style="margin-top: 0.5rem; line-height: 1.7;">تقيس الضغط بدقة ±0.1% وتكتشف تغييرات التدفق بحساسية 0.25 bbl/min.</p>
</div>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 3. نظام الفصل (Separation System)</h3>
<div style="background: #e8f8f5; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<p style="line-height: 1.8; margin-bottom: 1rem;">في MPD، نحتاج فاصل مضغوط يعمل تحت ضغط بدلاً من الفاصل الجوي التقليدي.</p>
<h4 style="color: #27ae60; margin: 1rem 0 0.5rem;">مكونات الفاصل المضغوط:</h4>
<ul style="line-height: 2; padding-right: 1.5rem;">
<li>وعاء ضغط مصنف لـ 500-1,500 psi</li>
<li>صمامات تصريف السوائل والغاز</li>
<li>مستشعرات مستوى السائل</li>
<li>نظام إشعال للغازات المنفصلة (Flare System)</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 4. نظام المراقبة والتحكم (SCADA/DCS)</h3>
<div style="background: #f5e6ff; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<h4 style="color: #9b59b6; margin-bottom: 1rem;">الوظائف الرئيسية:</h4>
<ul style="line-height: 2; padding-right: 1.5rem;">
<li><strong>جمع البيانات:</strong> من جميع المستشعرات بشكل لحظي</li>
<li><strong>العرض:</strong> شاشات توضح حالة البئر والضغوط والتدفقات</li>
<li><strong>الإنذارات:</strong> تنبيهات فورية عند تجاوز الحدود المحددة</li>
<li><strong>التسجيل:</strong> حفظ جميع البيانات للتحليل اللاحق</li>
<li><strong>التحكم الآلي:</strong> استجابة تلقائية للمواقف المحددة مسبقاً</li>
</ul>
</div>

<div style="background: #fff3cd; border-right: 4px solid #f39c12; padding: 1rem; margin: 1.5rem 0; border-radius: 8px;">
<h4 style="color: #856404; margin-bottom: 0.5rem;">⚠️ الصيانة الحرجة</h4>
<p style="line-height: 1.7;">حشوات RCD تحتاج فحص كل 8-12 ساعة من العمل المتواصل. صمامات الخنق تحتاج معايرة يومية. أي إهمال قد يؤدي لفشل النظام بالكامل.</p>
</div>

</section>`,
          keyTerms: [
            { term: 'Stripper Rubber', definition: 'الحشوة المطاطية في RCD التي تُغلق حول عمود الحفر' },
            { term: 'PID Control', definition: 'نظام تحكم آلي يستخدم النسبي-التكاملي-التفاضلي' },
            { term: 'Pressurized Separator', definition: 'فاصل يعمل تحت ضغط لفصل السوائل والغازات' },
            { term: 'SCADA', definition: 'نظام التحكم الإشرافي وجمع البيانات' },
          ],
          practiceQuestion: {
            question: 'كم يبلغ عمر حشوة RCD التقريبي قبل الحاجة للاستبدال؟',
            options: [
              '10-20 ساعة',
              '50-200 ساعة',
              '500-1000 ساعة',
              '2000+ ساعة'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Managed Pressure Drilling - Day 3: Equipment and Systems',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">🔷 Specialized MPD Equipment</h2>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 1. Rotating Control Device (RCD) in Detail</h3>
<div style="background: #e8f4f8; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<h4 style="color: #1e3a5f; margin-bottom: 1rem;">Design and Components:</h4>
<ul style="line-height: 2; padding-left: 1.5rem;">
<li><strong>Stripper Rubber:</strong> Handles rotation and pressure, 50-200 hour lifespan</li>
<li><strong>Main Bearing:</strong> Supports loads up to 500,000 lbs</li>
<li><strong>Cooling System:</strong> Maintains rubber temperature within safe limits</li>
<li><strong>Inner Barrel:</strong> Allows tools and BHA passage</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 2. Automated Choke System</h3>
<div style="background: #fef9e7; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<p style="line-height: 1.8;">Variable choke with electronic control, response time in fractions of a second. Control unit uses PID algorithms for precise pressure management.</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 3. Pressurized Separation System</h3>
<div style="background: #e8f8f5; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<p style="line-height: 1.8;">Pressure vessel rated for 500-1,500 psi with liquid/gas discharge valves, level sensors, and flare system for separated gases.</p>
</div>

</section>`,
          keyTerms: [
            { term: 'Stripper Rubber', definition: 'RCD rubber element that seals around drill string' },
            { term: 'PID Control', definition: 'Proportional-Integral-Derivative control system' },
            { term: 'Pressurized Separator', definition: 'Separator operating under pressure' },
            { term: 'SCADA', definition: 'Supervisory Control and Data Acquisition' },
          ],
          practiceQuestion: {
            question: 'What is the approximate lifespan of an RCD stripper rubber before replacement?',
            options: [
              '10-20 hours',
              '50-200 hours',
              '500-1000 hours',
              '2000+ hours'
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
          title: 'الحفر بالضغط المُدار - اليوم الرابع: التخطيط والحسابات',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">🔷 التخطيط لعملية MPD</h2>

<p style="margin-bottom: 1.5rem; line-height: 1.8;">التخطيط الدقيق لعملية MPD يتطلب فهماً عميقاً لظروف البئر والحسابات الهيدروليكية المعقدة.</p>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 1. تحديد نافذة الضغط (Pressure Window)</h3>
<div style="background: #e8f4f8; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<p style="line-height: 1.8; margin-bottom: 1rem;">الخطوة الأولى في التخطيط هي تحديد الحدود الآمنة للضغط:</p>
<div style="background: #1e3a5f; color: white; padding: 1rem; border-radius: 8px; text-align: center; margin: 1rem 0;">
<p style="font-weight: bold;">الحد الأدنى = ضغط المسام (Pore Pressure) + هامش أمان (عادة 100-200 psi)</p>
<p style="margin-top: 0.5rem;">الحد الأعلى = ضغط الكسر (Fracture Pressure) - هامش أمان</p>
</div>
<div style="background: #fff3cd; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
<p><strong>💡 مثال:</strong> إذا كان ضغط المسام = 3,500 psi وضغط الكسر = 3,800 psi، فالنافذة = 300 psi فقط! هذا يتطلب MPD للتحكم الدقيق.</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 2. حساب ECD والضغط المكافئ</h3>
<div style="background: #fef9e7; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<h4 style="color: #e67e22; margin-bottom: 1rem;">معادلات أساسية:</h4>

<div style="background: white; padding: 1rem; border-radius: 8px; margin: 1rem 0; border-right: 3px solid #e67e22;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">الضغط الهيدروستاتيكي (Hydrostatic Pressure):</p>
<p style="font-family: monospace; font-size: 1.1rem;">P_h = 0.052 × MW × TVD</p>
<p style="font-size: 0.9rem; color: #666; margin-top: 0.5rem;">حيث MW = وزن الطين (ppg)، TVD = العمق الحقيقي (ft)</p>
</div>

<div style="background: white; padding: 1rem; border-radius: 8px; margin: 1rem 0; border-right: 3px solid #e67e22;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">كثافة الدورة المكافئة (ECD):</p>
<p style="font-family: monospace; font-size: 1.1rem;">ECD = MW + (AFP / (0.052 × TVD))</p>
<p style="font-size: 0.9rem; color: #666; margin-top: 0.5rem;">حيث AFP = ضغط الاحتكاك الحلقي (psi)</p>
</div>

<div style="background: white; padding: 1rem; border-radius: 8px; margin: 1rem 0; border-right: 3px solid #e67e22;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">الضغط الكلي في قاع البئر (BHP) في MPD:</p>
<p style="font-family: monospace; font-size: 1.1rem;">BHP = P_h + AFP + SBP</p>
<p style="font-size: 0.9rem; color: #666; margin-top: 0.5rem;">حيث SBP = الضغط السطحي المُطبق</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 3. مثال حسابي شامل</h3>
<div style="background: #e8f8f5; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<h4 style="color: #27ae60; margin-bottom: 1rem;">المعطيات:</h4>
<ul style="line-height: 1.8; padding-right: 1.5rem; margin-bottom: 1rem;">
<li>العمق الحقيقي (TVD) = 12,000 ft</li>
<li>وزن الطين (MW) = 10.5 ppg</li>
<li>ضغط الاحتكاك الحلقي (AFP) عند الضخ = 180 psi</li>
<li>ضغط المسام = 6,550 psi</li>
<li>ضغط الكسر = 6,800 psi</li>
</ul>

<h4 style="color: #27ae60; margin-bottom: 0.5rem;">الحل:</h4>
<div style="background: white; padding: 1rem; border-radius: 8px;">
<p style="margin-bottom: 0.5rem;"><strong>1. الضغط الهيدروستاتيكي:</strong></p>
<p style="font-family: monospace; margin-bottom: 1rem;">P_h = 0.052 × 10.5 × 12,000 = 6,552 psi</p>

<p style="margin-bottom: 0.5rem;"><strong>2. BHP أثناء الضخ:</strong></p>
<p style="font-family: monospace; margin-bottom: 1rem;">BHP = 6,552 + 180 = 6,732 psi ✓ (ضمن النافذة)</p>

<p style="margin-bottom: 0.5rem;"><strong>3. عند إيقاف المضخات (بدون SBP):</strong></p>
<p style="font-family: monospace; margin-bottom: 1rem;">BHP = 6,552 psi ✗ (أقل من ضغط المسام!)</p>

<p style="margin-bottom: 0.5rem;"><strong>4. SBP المطلوب عند إيقاف المضخات:</strong></p>
<p style="font-family: monospace;">SBP ≥ 6,550 - 6,552 + هامش أمان = 100 psi على الأقل</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 4. جدول تعويض الضغط (Pressure Compensation Schedule)</h3>
<div style="background: #f5e6ff; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<p style="line-height: 1.8; margin-bottom: 1rem;">يجب إعداد جدول مسبق يوضح SBP المطلوب لكل معدل ضخ:</p>
<table style="width: 100%; border-collapse: collapse;">
<tr style="background: #9b59b6; color: white;">
<th style="padding: 10px; border: 1px solid #ddd;">معدل الضخ (gpm)</th>
<th style="padding: 10px; border: 1px solid #ddd;">AFP (psi)</th>
<th style="padding: 10px; border: 1px solid #ddd;">SBP المطلوب (psi)</th>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 10px; text-align: center; border: 1px solid #ddd;">0 (متوقف)</td>
<td style="padding: 10px; text-align: center; border: 1px solid #ddd;">0</td>
<td style="padding: 10px; text-align: center; border: 1px solid #ddd;">180</td>
</tr>
<tr>
<td style="padding: 10px; text-align: center; border: 1px solid #ddd;">200</td>
<td style="padding: 10px; text-align: center; border: 1px solid #ddd;">90</td>
<td style="padding: 10px; text-align: center; border: 1px solid #ddd;">90</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 10px; text-align: center; border: 1px solid #ddd;">400</td>
<td style="padding: 10px; text-align: center; border: 1px solid #ddd;">180</td>
<td style="padding: 10px; text-align: center; border: 1px solid #ddd;">0</td>
</tr>
</table>
</div>

</section>`,
          keyTerms: [
            { term: 'Pressure Window', definition: 'الفرق بين ضغط المسام وضغط الكسر' },
            { term: 'ECD - Equivalent Circulating Density', definition: 'كثافة الدورة المكافئة التي تشمل تأثير الاحتكاك' },
            { term: 'Compensation Schedule', definition: 'جدول يوضح SBP المطلوب لكل معدل ضخ' },
          ],
          practiceQuestion: {
            question: 'إذا كان AFP = 200 psi أثناء الضخ، كم يجب أن يكون SBP عند إيقاف المضخات للحفاظ على نفس BHP؟',
            options: [
              '0 psi',
              '100 psi',
              '200 psi',
              '400 psi'
            ],
            correctAnswer: 2,
          },
        },
        en: {
          title: 'Managed Pressure Drilling - Day 4: Planning and Calculations',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">🔷 MPD Planning</h2>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Key Equations</h3>
<div style="background: #fef9e7; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<div style="background: white; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<p style="font-weight: bold;">Hydrostatic Pressure: P_h = 0.052 × MW × TVD</p>
<p style="font-weight: bold; margin-top: 1rem;">ECD = MW + (AFP / (0.052 × TVD))</p>
<p style="font-weight: bold; margin-top: 1rem;">BHP (MPD) = P_h + AFP + SBP</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Pressure Compensation Schedule</h3>
<p style="line-height: 1.8;">A pre-calculated table showing required SBP for each pump rate to maintain constant BHP throughout drilling operations.</p>

</section>`,
          keyTerms: [
            { term: 'Pressure Window', definition: 'Difference between pore pressure and fracture pressure' },
            { term: 'ECD', definition: 'Equivalent Circulating Density including friction effects' },
            { term: 'Compensation Schedule', definition: 'Table showing required SBP for each pump rate' },
          ],
          practiceQuestion: {
            question: 'If AFP = 200 psi while pumping, what should SBP be when pumps are off to maintain the same BHP?',
            options: [
              '0 psi',
              '100 psi',
              '200 psi',
              '400 psi'
            ],
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
          title: 'الحفر بالضغط المُدار - اليوم الخامس: التشغيل والتحديات',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">🔷 تشغيل نظام MPD والتحديات العملية</h2>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 إجراءات بدء التشغيل (Start-up Procedures)</h3>
<div style="background: #e8f4f8; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<ol style="line-height: 2; padding-right: 1.5rem;">
<li><strong>فحص المعدات:</strong> التأكد من سلامة RCD، صمامات الخنق، والمستشعرات</li>
<li><strong>اختبار الضغط:</strong> فحص تحمل الخطوط للضغط المتوقع + 500 psi</li>
<li><strong>معايرة الأجهزة:</strong> ضبط مستشعرات الضغط والتدفق</li>
<li><strong>برمجة النظام:</strong> إدخال جدول التعويض وحدود الإنذار</li>
<li><strong>اختبار وظيفي:</strong> تشغيل النظام بدون ضغط للتأكد من الاستجابة</li>
</ol>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 عمليات الاتصال والفصل (Connections)</h3>
<div style="background: #fef9e7; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<p style="line-height: 1.8; margin-bottom: 1rem;">عملية إضافة أنبوب جديد (Connection) هي الأكثر حساسية في MPD لأنها تتطلب إيقاف المضخات.</p>
<h4 style="color: #e67e22; margin: 1rem 0 0.5rem;">خطوات الاتصال الآمن:</h4>
<ol style="line-height: 2; padding-right: 1.5rem;">
<li>خفض معدل الضخ تدريجياً (ramp down)</li>
<li>زيادة SBP بالتناسب مع انخفاض الضخ</li>
<li>إيقاف المضخات مع الوصول لـ SBP الكامل</li>
<li>إجراء الاتصال مع مراقبة الضغط</li>
<li>استئناف الضخ مع خفض SBP تدريجياً</li>
</ol>
<div style="background: #fff3cd; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
<p><strong>⚠️ تحذير:</strong> أي تأخير في زيادة SBP عند إيقاف المضخات قد يسبب Kick!</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 التحديات الشائعة والحلول</h3>
<div style="display: grid; gap: 1rem; margin: 1rem 0;">
<div style="background: #ffebee; padding: 1rem; border-radius: 8px; border-right: 4px solid #c0392b;">
<h4 style="color: #c0392b; margin-bottom: 0.5rem;">1️⃣ تآكل حشوة RCD</h4>
<p style="line-height: 1.7;"><strong>الأعراض:</strong> تسرب حول عمود الحفر، صعوبة الحفاظ على الضغط</p>
<p style="line-height: 1.7;"><strong>الحل:</strong> استبدال الحشوة، استخدام أنواع مقاومة للتآكل، تقليل سرعة الدوران</p>
</div>
<div style="background: #fff3e0; padding: 1rem; border-radius: 8px; border-right: 4px solid #e67e22;">
<h4 style="color: #e67e22; margin-bottom: 0.5rem;">2️⃣ انسداد صمام الخنق</h4>
<p style="line-height: 1.7;"><strong>الأعراض:</strong> عدم استجابة الضغط للأوامر</p>
<p style="line-height: 1.7;"><strong>الحل:</strong> التبديل للخنق الاحتياطي، تنظيف الفلاتر، تحسين نظافة الطين</p>
</div>
<div style="background: #e3f2fd; padding: 1rem; border-radius: 8px; border-right: 4px solid #1976d2;">
<h4 style="color: #1976d2; margin-bottom: 0.5rem;">3️⃣ فشل المستشعرات</h4>
<p style="line-height: 1.7;"><strong>الأعراض:</strong> قراءات غير منطقية أو ثابتة</p>
<p style="line-height: 1.7;"><strong>الحل:</strong> التبديل للمستشعر الاحتياطي، إعادة المعايرة، التحقق من الأسلاك</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 الاستجابة للطوارئ</h3>
<div style="background: #e8f8f5; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<h4 style="color: #27ae60; margin-bottom: 1rem;">في حالة الـ Kick:</h4>
<ol style="line-height: 2; padding-right: 1.5rem;">
<li>زيادة SBP فوراً لوقف التدفق</li>
<li>إيقاف المضخات إذا لزم الأمر</li>
<li>تقييم حجم الـ Kick من بيانات التدفق</li>
<li>البدء بإجراءات القتل المناسبة</li>
</ol>
<div style="background: #c8e6c9; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
<p><strong>✅ ميزة MPD:</strong> القدرة على زيادة الضغط فوراً دون انتظار تغيير وزن الطين!</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 مؤشرات الأداء الرئيسية (KPIs)</h3>
<table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
<thead>
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 12px; text-align: right; border: 1px solid #ddd;">المؤشر</th>
<th style="padding: 12px; text-align: right; border: 1px solid #ddd;">الهدف</th>
<th style="padding: 12px; text-align: right; border: 1px solid #ddd;">علامة الخطر</th>
</tr>
</thead>
<tbody>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #ddd;">تذبذب BHP</td>
<td style="padding: 12px; border: 1px solid #ddd;">±25 psi</td>
<td style="padding: 12px; border: 1px solid #ddd;">&gt;50 psi</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;">زمن استجابة الخنق</td>
<td style="padding: 12px; border: 1px solid #ddd;">&lt;2 ثانية</td>
<td style="padding: 12px; border: 1px solid #ddd;">&gt;5 ثواني</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #ddd;">عمر حشوة RCD</td>
<td style="padding: 12px; border: 1px solid #ddd;">&gt;100 ساعة</td>
<td style="padding: 12px; border: 1px solid #ddd;">&lt;50 ساعة</td>
</tr>
</tbody>
</table>

</section>`,
          keyTerms: [
            { term: 'Ramp Down/Up', definition: 'تغيير تدريجي لمعدل الضخ مع تعويض الضغط' },
            { term: 'Connection Procedure', definition: 'إجراءات إضافة أنبوب جديد أثناء MPD' },
            { term: 'KPI - Key Performance Indicator', definition: 'مؤشرات قياس أداء العملية' },
          ],
          practiceQuestion: {
            question: 'ما هو أهم إجراء عند إيقاف المضخات لإضافة أنبوب جديد في نظام MPD؟',
            options: [
              'تقليل وزن الطين',
              'زيادة SBP لتعويض فقدان AFP',
              'إغلاق BOP',
              'إيقاف الدوران فقط'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Managed Pressure Drilling - Day 5: Operations and Challenges',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">🔷 MPD Operations and Practical Challenges</h2>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Connection Procedure</h3>
<div style="background: #fef9e7; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<ol style="line-height: 2; padding-left: 1.5rem;">
<li>Ramp down pump rate gradually</li>
<li>Increase SBP proportionally as pumping decreases</li>
<li>Stop pumps with full SBP applied</li>
<li>Make connection while monitoring pressure</li>
<li>Resume pumping while gradually reducing SBP</li>
</ol>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Common Challenges</h3>
<p style="line-height: 1.8;">RCD element wear, choke plugging, and sensor failures are the most common issues requiring backup systems and preventive maintenance.</p>

</section>`,
          keyTerms: [
            { term: 'Ramp Down/Up', definition: 'Gradual pump rate change with pressure compensation' },
            { term: 'Connection Procedure', definition: 'Steps to add new pipe during MPD' },
            { term: 'KPI', definition: 'Key Performance Indicator for operation monitoring' },
          ],
          practiceQuestion: {
            question: 'What is the most important action when stopping pumps to make a connection in MPD?',
            options: [
              'Reduce mud weight',
              'Increase SBP to compensate for AFP loss',
              'Close BOP',
              'Stop rotation only'
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
          title: 'اختبار الحفر بالضغط المُدار',
          explanation: 'اختبر معلوماتك حول تقنيات ومعدات MPD',
          keyTerms: [],
        },
        en: {
          title: 'Managed Pressure Drilling Quiz',
          explanation: 'Test your knowledge of MPD techniques and equipment',
          keyTerms: [],
        },
      },
      quiz: {
        ar: [
          {
            question: 'ما هو المكون الرئيسي الذي يُميز نظام MPD عن الحفر التقليدي؟',
            options: [
              'المضخة الطينية',
              'جهاز التحكم الدوار (RCD)',
              'رأس الحفر',
              'عمود الحفر'
            ],
            correctAnswer: 1
          },
          {
            question: 'ما هي تقنية CBHP؟',
            options: [
              'تقنية لزيادة سرعة الحفر',
              'تقنية للحفاظ على ضغط قاع البئر ثابتاً',
              'تقنية لتبريد رأس الحفر',
              'تقنية لتنظيف البئر'
            ],
            correctAnswer: 1
          },
          {
            question: 'عند إيقاف المضخات في نظام MPD، ماذا يحدث لـ AFP؟',
            options: [
              'يزداد',
              'يبقى ثابتاً',
              'ينخفض إلى صفر',
              'يتضاعف'
            ],
            correctAnswer: 2
          },
          {
            question: 'أي تقنية MPD تُستخدم في الحفر البحري العميق؟',
            options: [
              'CBHP',
              'MCD',
              'PMCD',
              'Dual Gradient Drilling (DGD)'
            ],
            correctAnswer: 3
          },
          {
            question: 'ما هو عمر حشوة RCD التقريبي؟',
            options: [
              '5-10 ساعات',
              '50-200 ساعة',
              '500-1000 ساعة',
              '5000+ ساعة'
            ],
            correctAnswer: 1
          },
          {
            question: 'ما هي الوظيفة الرئيسية لصمام الخنق الآلي في MPD؟',
            options: [
              'ضخ الطين',
              'التحكم بالضغط السطحي المُطبق',
              'تبريد رأس الحفر',
              'قياس العمق'
            ],
            correctAnswer: 1
          },
          {
            question: 'إذا كان AFP = 150 psi أثناء الضخ، كم يجب أن يكون SBP عند إيقاف المضخات؟',
            options: [
              '0 psi',
              '75 psi',
              '150 psi',
              '300 psi'
            ],
            correctAnswer: 2
          },
          {
            question: 'ما هي "نافذة الضغط الضيقة"؟',
            options: [
              'فتحة في BOP',
              'فرق صغير بين ضغط المسام وضغط الكسر',
              'نوع من صمامات الخنق',
              'جزء من RCD'
            ],
            correctAnswer: 1
          },
          {
            question: 'في تقنية Mud Cap Drilling، أين يذهب سائل الحفر؟',
            options: [
              'يعود للسطح',
              'يبقى في الحلقي',
              'يذهب مباشرة للتكوين',
              'يُعاد تدويره'
            ],
            correctAnswer: 2
          },
          {
            question: 'ما هي ميزة MPD الرئيسية عند حدوث Kick؟',
            options: [
              'لا حاجة لأي إجراء',
              'القدرة على زيادة الضغط فوراً دون تغيير الطين',
              'إغلاق البئر تلقائياً',
              'تقليل العمق تلقائياً'
            ],
            correctAnswer: 1
          }
        ],
        en: [
          {
            question: 'What is the main component that distinguishes MPD from conventional drilling?',
            options: [
              'Mud pump',
              'Rotating Control Device (RCD)',
              'Drill bit',
              'Drill string'
            ],
            correctAnswer: 1
          },
          {
            question: 'What is CBHP technique?',
            options: [
              'Technique to increase drilling speed',
              'Technique to maintain constant bottom hole pressure',
              'Technique to cool the drill bit',
              'Technique to clean the wellbore'
            ],
            correctAnswer: 1
          },
          {
            question: 'When pumps are stopped in MPD system, what happens to AFP?',
            options: [
              'Increases',
              'Remains constant',
              'Drops to zero',
              'Doubles'
            ],
            correctAnswer: 2
          },
          {
            question: 'Which MPD technique is used in deepwater drilling?',
            options: [
              'CBHP',
              'MCD',
              'PMCD',
              'Dual Gradient Drilling (DGD)'
            ],
            correctAnswer: 3
          },
          {
            question: 'What is the approximate lifespan of an RCD element?',
            options: [
              '5-10 hours',
              '50-200 hours',
              '500-1000 hours',
              '5000+ hours'
            ],
            correctAnswer: 1
          },
          {
            question: 'What is the main function of the automated choke in MPD?',
            options: [
              'Pump mud',
              'Control surface back pressure',
              'Cool the drill bit',
              'Measure depth'
            ],
            correctAnswer: 1
          },
          {
            question: 'If AFP = 150 psi while pumping, what should SBP be when pumps are off?',
            options: [
              '0 psi',
              '75 psi',
              '150 psi',
              '300 psi'
            ],
            correctAnswer: 2
          },
          {
            question: 'What is a "narrow pressure window"?',
            options: [
              'An opening in the BOP',
              'Small difference between pore pressure and fracture pressure',
              'A type of choke valve',
              'Part of the RCD'
            ],
            correctAnswer: 1
          },
          {
            question: 'In Mud Cap Drilling technique, where does the drilling fluid go?',
            options: [
              'Returns to surface',
              'Stays in annulus',
              'Goes directly to formation',
              'Gets recirculated'
            ],
            correctAnswer: 2
          },
          {
            question: 'What is the main MPD advantage during a kick?',
            options: [
              'No action needed',
              'Ability to increase pressure immediately without changing mud',
              'Automatic well shut-in',
              'Automatic depth reduction'
            ],
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
          title: 'مشروع تطبيقي - الحفر بالضغط المُدار',
          explanation: 'طبق ما تعلمته في مشروع عملي',
          keyTerms: [],
        },
        en: {
          title: 'Practical Project - Managed Pressure Drilling',
          explanation: 'Apply what you learned in a practical project',
          keyTerms: [],
        },
      },
      project: {
        ar: {
          title: 'تصميم خطة MPD لبئر بنافذة ضغط ضيقة',
          description: `أنت مهندس حفر تعمل على بئر في حقل ناضج (Depleted Reservoir) حيث:
- العمق المستهدف: 14,000 ft TVD
- ضغط المسام المتوقع: 5,800 psi
- ضغط الكسر: 6,100 psi
- نافذة الضغط: 300 psi فقط!

مطلوب منك تصميم خطة MPD شاملة.`,
          instructions: [
            'احسب وزن الطين الأمثل وECD المتوقع',
            'حدد تقنية MPD المناسبة مع التبرير',
            'أعد جدول تعويض الضغط (SBP vs Pump Rate)',
            'حدد المعدات المطلوبة ومواصفاتها',
            'اكتب إجراءات الاتصال (Connection Procedure)',
            'حدد مؤشرات الأداء الرئيسية (KPIs) للمراقبة'
          ],
          submissionType: 'text',
        },
        en: {
          title: 'Design an MPD Plan for a Narrow Pressure Window Well',
          description: `You are a drilling engineer working on a well in a depleted reservoir where:
- Target depth: 14,000 ft TVD
- Expected pore pressure: 5,800 psi
- Fracture pressure: 6,100 psi
- Pressure window: Only 300 psi!

You are required to design a comprehensive MPD plan.`,
          instructions: [
            'Calculate optimal mud weight and expected ECD',
            'Select appropriate MPD technique with justification',
            'Prepare pressure compensation schedule (SBP vs Pump Rate)',
            'Specify required equipment and specifications',
            'Write connection procedure',
            'Define KPIs for monitoring'
          ],
          submissionType: 'text',
        },
      },
    },
  ],
};
