import { WeeklyLesson } from '../weeklyContent';

export const rotarySteerableSystemsLesson: WeeklyLesson = {
  lessonId: 'rotary-steerable-systems',
  days: [
    // Day 1: RSS Fundamentals & Classification
    {
      day: 1,
      type: 'learning',
      content: {
        ar: {
          title: 'أساسيات أنظمة التوجيه الدوارة RSS - اليوم الأول',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">🔷 مقدمة في أنظمة التوجيه الدوارة (Rotary Steerable Systems)</h2>

<p style="margin-bottom: 1.5rem; line-height: 1.8; font-size: 1.1rem;">
أنظمة التوجيه الدوارة <strong>Rotary Steerable Systems (RSS)</strong> تمثل ثورة في تقنية الحفر الموجه. على عكس محركات الطين التقليدية (Mud Motors) التي تتطلب توجيه الـ Bent Housing مع إيقاف دوران عمود الحفر أثناء عملية التوجيه (Sliding)، تتيح أنظمة RSS التوجيه المستمر مع <strong>الدوران الكامل</strong> لعمود الحفر طوال الوقت.
</p>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="font-size: 1.2rem; margin-bottom: 1rem;">⚡ المبدأ الأساسي لـ RSS</h3>
<p style="line-height: 1.8;">
تحقيق <strong>التوجيه أثناء الدوران المستمر</strong> من خلال التحكم في القوى الجانبية المطبقة على البطانة أو الـ Bit بينما يستمر عمود الحفر بالدوران. هذا يُلغي الحاجة للـ Sliding الذي يسبب:
</p>
<ul style="margin-top: 0.5rem; padding-left: 1.5rem;">
<li>انخفاض ROP</li>
<li>Hole Cleaning ضعيف</li>
<li>Wellbore Tortuosity عالية</li>
<li>مشاكل Differential Sticking</li>
</ul>
</div>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin-top: 2rem; margin-bottom: 1rem;">📊 التصنيف الرئيسي لأنظمة RSS</h3>

<p style="margin-bottom: 1rem; line-height: 1.8;">
تنقسم أنظمة RSS إلى فئتين رئيسيتين بناءً على <strong>آلية تطبيق قوة التوجيه</strong>:
</p>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
<div style="background: #f0f9ff; padding: 1.5rem; border-radius: 10px; border-left: 4px solid #0369a1;">
<h4 style="color: #0369a1; font-size: 1.1rem; margin-bottom: 0.75rem;">🔹 Push-the-Bit Systems</h4>
<p style="font-size: 0.95rem; line-height: 1.7;">
تطبق <strong>قوى جانبية على جسم الأداة</strong> بالقرب من الـ Bit لدفعها نحو الاتجاه المطلوب. القوة تضغط الـ Bit ضد جدار البئر من الجانب المقابل لاتجاه التوجيه.
</p>
</div>
<div style="background: #fef3c7; padding: 1.5rem; border-radius: 10px; border-left: 4px solid #d97706;">
<h4 style="color: #d97706; font-size: 1.1rem; margin-bottom: 0.75rem;">🔸 Point-the-Bit Systems</h4>
<p style="font-size: 0.95rem; line-height: 1.7;">
تميل <strong>محور الـ Bit نفسه</strong> في الاتجاه المطلوب، مشابهة لمبدأ Bent Housing لكن بشكل ديناميكي ومستمر أثناء الدوران.
</p>
</div>
</div>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin-top: 2rem; margin-bottom: 1rem;">🔧 مقارنة RSS مع Motor Assemblies التقليدية</h3>

<table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem; font-size: 0.95rem;">
<thead>
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 1rem; text-align: center; border: 1px solid #334155;">المعيار</th>
<th style="padding: 1rem; text-align: center; border: 1px solid #334155;">Mud Motor + Sliding</th>
<th style="padding: 1rem; text-align: center; border: 1px solid #334155;">RSS</th>
</tr>
</thead>
<tbody>
<tr style="background: #f8fafc;">
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; font-weight: bold;">ROP</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; text-align: center;">منخفض أثناء Sliding (30-50% من Rotating)</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; text-align: center; color: #059669;">عالي ومستمر ✓</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; font-weight: bold;">Hole Quality</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; text-align: center;">Tortuous, Ledges, Doglegs</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; text-align: center; color: #059669;">Smooth, Gauge Hole ✓</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; font-weight: bold;">Hole Cleaning</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; text-align: center;">ضعيف بدون Rotation</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; text-align: center; color: #059669;">ممتاز بسبب Continuous Rotation ✓</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; font-weight: bold;">Wellbore Torque & Drag</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; text-align: center;">عالي بسبب Spiraling و Tortuosity</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; text-align: center; color: #059669;">منخفض ✓</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; font-weight: bold;">ERD Capability</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; text-align: center;">محدود</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; text-align: center; color: #059669;">ممتاز لـ Extended Reach ✓</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; font-weight: bold;">التكلفة الأولية</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; text-align: center; color: #059669;">منخفضة ✓</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; text-align: center;">عالية</td>
</tr>
</tbody>
</table>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin-top: 2rem; margin-bottom: 1rem;">🎯 متطلبات التوجيه في RSS</h3>

<p style="margin-bottom: 1rem; line-height: 1.8;">
لتحقيق التوجيه أثناء الدوران، يجب على نظام RSS أن يحل مشكلة أساسية: <strong>كيف تطبق قوة في اتجاه ثابت بينما الأداة تدور؟</strong>
</p>

<div style="background: #ecfdf5; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem; border-left: 4px solid #059669;">
<h4 style="color: #047857; margin-bottom: 0.75rem;">✅ الحلول المستخدمة:</h4>
<ul style="padding-left: 1.5rem; line-height: 1.8;">
<li><strong>Counter-Rotating Mechanism:</strong> جزء من الأداة يدور عكس اتجاه عمود الحفر ليبقى ثابتاً جيوستاتيكياً (Geostationary)</li>
<li><strong>Pads Activation Timing:</strong> تفعيل Pads بتوقيت محدد خلال كل دورة لتطبيق القوة في الاتجاه المطلوب فقط</li>
<li><strong>Internal Shaft Deflection:</strong> انحراف عمود داخلي مع الحفاظ على ثباته النسبي للتكوين</li>
</ul>
</div>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin-top: 2rem; margin-bottom: 1rem;">📡 مكونات نظام RSS الأساسية</h3>

<div style="background: #f8fafc; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<ol style="padding-left: 1.5rem; line-height: 2;">
<li><strong>Steering Unit:</strong> وحدة التوجيه التي تطبق القوى الجانبية</li>
<li><strong>Control Unit:</strong> المعالج الإلكتروني الذي يحسب اتجاه التوجيه المطلوب</li>
<li><strong>Sensors Package:</strong> حساسات Inclination و Azimuth و Toolface</li>
<li><strong>Power Section:</strong> مصدر الطاقة (Turbine أو Battery) لتشغيل الإلكترونيات والميكانيكا</li>
<li><strong>Telemetry Interface:</strong> اتصال مع نظام MWD/LWD لنقل البيانات للسطح</li>
</ol>
</div>

<div style="background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-top: 2rem;">
<h3 style="font-size: 1.2rem; margin-bottom: 1rem;">💡 لماذا RSS ضرورية للآبار المعقدة؟</h3>
<ul style="padding-left: 1.5rem; line-height: 1.8;">
<li>ERD Wells: تقليل Torque & Drag يتيح الوصول لمسافات أبعد</li>
<li>Multilateral Wells: دقة أعلى في الـ Sidetracking</li>
<li>3D Complex Trajectories: مرونة في تغيير الاتجاه بسلاسة</li>
<li>HPHT Wells: تقليل وقت الـ Exposure في الظروف القاسية</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Rotary Steerable System (RSS)', definition: 'نظام توجيه يتيح تغيير مسار البئر مع استمرار دوران عمود الحفر الكامل' },
            { term: 'Push-the-Bit', definition: 'نوع RSS يدفع جسم الأداة جانبياً لتوجيه الـ Bit' },
            { term: 'Point-the-Bit', definition: 'نوع RSS يميل محور الـ Bit مباشرة في اتجاه التوجيه' },
            { term: 'Sliding', definition: 'وضع الحفر بدون دوران عمود الحفر لتوجيه Motor Assembly' },
            { term: 'Geostationary', definition: 'ثبات جزء من الأداة بالنسبة للتكوين أثناء دوران باقي الـ BHA' },
          ],
          practiceQuestion: {
            question: 'ما هي الميزة الرئيسية لأنظمة RSS مقارنة بـ Mud Motors التقليدية؟',
            options: [
              'تكلفة أقل',
              'التوجيه مع استمرار دوران عمود الحفر',
              'عدم الحاجة لـ MWD',
              'سرعة أبطأ للتحكم الأفضل'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'RSS Fundamentals - Day 1',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">🔷 Introduction to Rotary Steerable Systems (RSS)</h2>

<p style="margin-bottom: 1.5rem; line-height: 1.8; font-size: 1.1rem;">
<strong>Rotary Steerable Systems (RSS)</strong> represent a revolution in directional drilling technology. Unlike conventional mud motors that require orienting the bent housing while stopping drillstring rotation during steering (Sliding), RSS enables continuous steering with <strong>full drillstring rotation</strong> at all times.
</p>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="font-size: 1.2rem; margin-bottom: 1rem;">⚡ Core RSS Principle</h3>
<p style="line-height: 1.8;">
Achieve <strong>steering during continuous rotation</strong> by controlling lateral forces applied to the housing or bit while the drillstring continues rotating. This eliminates Sliding which causes:
</p>
<ul style="margin-top: 0.5rem; padding-left: 1.5rem;">
<li>Reduced ROP</li>
<li>Poor Hole Cleaning</li>
<li>High Wellbore Tortuosity</li>
<li>Differential Sticking risks</li>
</ul>
</div>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin-top: 2rem; margin-bottom: 1rem;">📊 Main RSS Classification</h3>

<p style="margin-bottom: 1rem; line-height: 1.8;">
RSS are classified into two main categories based on <strong>steering force application mechanism</strong>:
</p>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
<div style="background: #f0f9ff; padding: 1.5rem; border-radius: 10px; border-left: 4px solid #0369a1;">
<h4 style="color: #0369a1; font-size: 1.1rem; margin-bottom: 0.75rem;">🔹 Push-the-Bit Systems</h4>
<p style="font-size: 0.95rem; line-height: 1.7;">
Apply <strong>lateral forces on the tool body</strong> near the bit to push it toward the desired direction. The force presses the bit against the wellbore wall on the side opposite to the steering direction.
</p>
</div>
<div style="background: #fef3c7; padding: 1.5rem; border-radius: 10px; border-left: 4px solid #d97706;">
<h4 style="color: #d97706; font-size: 1.1rem; margin-bottom: 0.75rem;">🔸 Point-the-Bit Systems</h4>
<p style="font-size: 0.95rem; line-height: 1.7;">
Tilt the <strong>bit axis itself</strong> in the desired direction, similar to the bent housing principle but dynamically and continuously during rotation.
</p>
</div>
</div>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin-top: 2rem; margin-bottom: 1rem;">🔧 RSS vs Traditional Motor Assemblies</h3>

<table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem; font-size: 0.95rem;">
<thead>
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 1rem; text-align: center; border: 1px solid #334155;">Criteria</th>
<th style="padding: 1rem; text-align: center; border: 1px solid #334155;">Mud Motor + Sliding</th>
<th style="padding: 1rem; text-align: center; border: 1px solid #334155;">RSS</th>
</tr>
</thead>
<tbody>
<tr style="background: #f8fafc;">
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; font-weight: bold;">ROP</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; text-align: center;">Low during Sliding (30-50% of Rotating)</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; text-align: center; color: #059669;">High and continuous ✓</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; font-weight: bold;">Hole Quality</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; text-align: center;">Tortuous, Ledges, Doglegs</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; text-align: center; color: #059669;">Smooth, Gauge Hole ✓</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; font-weight: bold;">Hole Cleaning</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; text-align: center;">Poor without Rotation</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; text-align: center; color: #059669;">Excellent due to Continuous Rotation ✓</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; font-weight: bold;">Wellbore Torque & Drag</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; text-align: center;">High due to Spiraling & Tortuosity</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; text-align: center; color: #059669;">Low ✓</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; font-weight: bold;">ERD Capability</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; text-align: center;">Limited</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; text-align: center; color: #059669;">Excellent for Extended Reach ✓</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; font-weight: bold;">Initial Cost</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; text-align: center; color: #059669;">Low ✓</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; text-align: center;">High</td>
</tr>
</tbody>
</table>

<div style="background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-top: 2rem;">
<h3 style="font-size: 1.2rem; margin-bottom: 1rem;">💡 Why RSS is Essential for Complex Wells</h3>
<ul style="padding-left: 1.5rem; line-height: 1.8;">
<li>ERD Wells: Reduced Torque & Drag enables longer reach</li>
<li>Multilateral Wells: Higher precision in Sidetracking</li>
<li>3D Complex Trajectories: Flexibility in smooth direction changes</li>
<li>HPHT Wells: Reduced exposure time in harsh conditions</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Rotary Steerable System (RSS)', definition: 'A steering system that enables wellbore trajectory changes while maintaining full drillstring rotation' },
            { term: 'Push-the-Bit', definition: 'RSS type that pushes the tool body laterally to steer the bit' },
            { term: 'Point-the-Bit', definition: 'RSS type that tilts the bit axis directly in the steering direction' },
            { term: 'Sliding', definition: 'Drilling mode without drillstring rotation to orient motor assembly' },
            { term: 'Geostationary', definition: 'Part of the tool remaining stationary relative to formation while rest of BHA rotates' },
          ],
          practiceQuestion: {
            question: 'What is the main advantage of RSS compared to conventional mud motors?',
            options: [
              'Lower cost',
              'Steering while maintaining drillstring rotation',
              'No need for MWD',
              'Slower speed for better control'
            ],
            correctAnswer: 1,
          },
        },
      },
    },
    // Day 2: Push-the-Bit Systems
    {
      day: 2,
      type: 'learning',
      content: {
        ar: {
          title: 'أنظمة Push-the-Bit - اليوم الثاني',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">🔷 أنظمة Push-the-Bit بالتفصيل</h2>

<p style="margin-bottom: 1.5rem; line-height: 1.8; font-size: 1.1rem;">
أنظمة <strong>Push-the-Bit</strong> تعتمد على مبدأ تطبيق قوة جانبية على جسم الأداة بالقرب من الـ Bit. هذه القوة "تدفع" الـ Bit نحو جدار البئر في الجانب المقابل لاتجاه التوجيه المطلوب، مما يخلق <strong>Reactive Side Force</strong> تحرف مسار الحفر.
</p>

<div style="background: linear-gradient(135deg, #0369a1 0%, #0284c7 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="font-size: 1.2rem; margin-bottom: 1rem;">⚙️ مبدأ العمل الأساسي</h3>
<p style="line-height: 1.8;">
عند تفعيل Pad على جانب معين من الأداة، يتم دفع الجانب المقابل من الـ Bit ضد جدار البئر. هذا يخلق نقطة ارتكاز (Fulcrum) تحرف مسار الحفر في اتجاه الـ Pad المُفعَّل. يعمل الـ Pad كـ <strong>Variable Gauge Stabilizer</strong>.
</p>
</div>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin-top: 2rem; margin-bottom: 1rem;">🔧 آليات Push-the-Bit الرئيسية</h3>

<div style="background: #f0f9ff; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem; border-left: 4px solid #0369a1;">
<h4 style="color: #0369a1; font-size: 1.15rem; margin-bottom: 1rem;">1️⃣ Bias Unit (External Pads)</h4>
<p style="line-height: 1.8; margin-bottom: 1rem;">
تستخدم <strong>3 أو 4 Pads خارجية</strong> تعمل بالضغط الهيدروليكي. كل Pad يمكن أن يمتد بشكل مستقل لتطبيق القوة الجانبية. يتم تفعيل الـ Pads بتوقيت دقيق خلال كل دورة لتطبيق القوة في الاتجاه المطلوب فقط.
</p>
<ul style="padding-left: 1.5rem; line-height: 1.8;">
<li><strong>النوع:</strong> Hydraulically Actuated Pads</li>
<li><strong>التحكم:</strong> تفعيل متزامن مع دورة الـ Tool</li>
<li><strong>مثال:</strong> Schlumberger PowerDrive، Baker Hughes AutoTrak</li>
</ul>
</div>

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem; border-left: 4px solid #d97706;">
<h4 style="color: #d97706; font-size: 1.15rem; margin-bottom: 1rem;">2️⃣ Counter-Rotating Sleeve</h4>
<p style="line-height: 1.8; margin-bottom: 1rem;">
تستخدم <strong>غلاف يدور عكس اتجاه عمود الحفر</strong> بنفس السرعة تقريباً، مما يجعله ثابتاً جيوستاتيكياً. الـ Pads المثبتة على هذا الغلاف تظل في نفس الموقع بالنسبة للتكوين.
</p>
<ul style="padding-left: 1.5rem; line-height: 1.8;">
<li><strong>النوع:</strong> Geostationary Sleeve with Fixed Pads</li>
<li><strong>التحكم:</strong> القوة ثابتة الاتجاه باستمرار</li>
<li><strong>الميزة:</strong> قوة توجيه أكثر استقراراً</li>
</ul>
</div>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin-top: 2rem; margin-bottom: 1rem;">📊 أنظمة Push-the-Bit الشائعة</h3>

<table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem; font-size: 0.95rem;">
<thead>
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 1rem; text-align: center; border: 1px solid #334155;">النظام</th>
<th style="padding: 1rem; text-align: center; border: 1px solid #334155;">الشركة</th>
<th style="padding: 1rem; text-align: center; border: 1px solid #334155;">الآلية</th>
<th style="padding: 1rem; text-align: center; border: 1px solid #334155;">الميزات</th>
</tr>
</thead>
<tbody>
<tr style="background: #f8fafc;">
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; font-weight: bold;">PowerDrive X6</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">Schlumberger</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">3 Pads + Modulation</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">High Build Rates, ERD</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; font-weight: bold;">AutoTrak G3</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">Baker Hughes</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">Counter-Rotating Sleeve</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">Smooth Wellbore, Low Vibration</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; font-weight: bold;">Geo-Pilot</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">Halliburton</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">3 Bias Pads</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">All Formation Types</td>
</tr>
</tbody>
</table>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin-top: 2rem; margin-bottom: 1rem;">⚡ ديناميكية التوجيه في Push-the-Bit</h3>

<div style="background: #ecfdf5; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #047857; margin-bottom: 1rem;">📐 حساب قوة التوجيه:</h4>
<p style="line-height: 1.8; margin-bottom: 1rem;">
قوة التوجيه الفعالة تعتمد على:
</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li><strong>Pad Extension:</strong> مقدار امتداد الـ Pad (عادة 0.25" - 1.0")</li>
<li><strong>WOB:</strong> كلما زاد الوزن، زادت Reactive Force</li>
<li><strong>Formation Hardness:</strong> التكوينات الصلبة توفر نقطة ارتكاز أفضل</li>
<li><strong>Bit-to-Pad Distance:</strong> المسافة بين الـ Bit والـ Pads</li>
</ul>
</div>

<div style="background: #f0f9ff; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #0369a1; margin-bottom: 1rem;">🎯 Dogleg Severity (DLS) المتوقع:</h4>
<p style="line-height: 1.8;">
أنظمة Push-the-Bit عادة توفر DLS من <strong>3°/100ft إلى 10°/100ft</strong> حسب:
</p>
<ul style="padding-left: 1.5rem; line-height: 1.8; margin-top: 0.5rem;">
<li>حجم الأداة (Tool Size)</li>
<li>نوع التكوين</li>
<li>معاملات الحفر (WOB, RPM)</li>
<li>تصميم BHA</li>
</ul>
</div>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin-top: 2rem; margin-bottom: 1rem;">⚠️ تحديات Push-the-Bit</h3>

<div style="background: #fef2f2; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem; border-left: 4px solid #dc2626;">
<ul style="padding-left: 1.5rem; line-height: 2;">
<li><strong>Formation Dependent:</strong> الأداء يتغير كثيراً بين التكوينات الناعمة والصلبة</li>
<li><strong>Pad Wear:</strong> تآكل الـ Pads في التكوينات الكاشطة (Abrasive)</li>
<li><strong>Hole Enlargement:</strong> احتمال توسيع البئر في التكوينات الضعيفة</li>
<li><strong>Limited in Soft Formations:</strong> صعوبة إنشاء نقطة ارتكاز فعالة</li>
<li><strong>Reactive to WOB Changes:</strong> حساسية عالية لتغيرات الوزن</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #059669 0%, #10b981 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-top: 2rem;">
<h3 style="font-size: 1.2rem; margin-bottom: 1rem;">✅ أفضل تطبيقات Push-the-Bit</h3>
<ul style="padding-left: 1.5rem; line-height: 1.8;">
<li>التكوينات المتوسطة إلى الصلبة</li>
<li>آبار ERD التي تتطلب Build Rates عالية</li>
<li>التطبيقات التي تتطلب DLS مرتفع</li>
<li>المشاريع التي تتطلب تكلفة أقل من Point-the-Bit</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Bias Unit', definition: 'وحدة التوجيه التي تحتوي على Pads الهيدروليكية في أنظمة Push-the-Bit' },
            { term: 'Counter-Rotating Sleeve', definition: 'غلاف يدور عكس اتجاه عمود الحفر ليبقى ثابتاً جيوستاتيكياً' },
            { term: 'Reactive Side Force', definition: 'القوة الجانبية الناتجة عن دفع الـ Bit ضد جدار البئر' },
            { term: 'Pad Extension', definition: 'مقدار امتداد الـ Pad خارج جسم الأداة لتطبيق قوة التوجيه' },
            { term: 'Fulcrum Point', definition: 'نقطة الارتكاز التي تتشكل عند تلامس الـ Bit مع جدار البئر' },
          ],
          practiceQuestion: {
            question: 'في أنظمة Push-the-Bit، أين يتم تطبيق القوة الجانبية؟',
            options: [
              'مباشرة على محور الـ Bit',
              'على جسم الأداة بالقرب من الـ Bit',
              'على عمود الحفر فقط',
              'على Stabilizer فوق الأداة'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Push-the-Bit Systems - Day 2',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">🔷 Push-the-Bit Systems in Detail</h2>

<p style="margin-bottom: 1.5rem; line-height: 1.8; font-size: 1.1rem;">
<strong>Push-the-Bit</strong> systems rely on applying lateral force to the tool body near the bit. This force "pushes" the bit toward the wellbore wall on the opposite side of the desired steering direction, creating a <strong>Reactive Side Force</strong> that deflects the drilling path.
</p>

<div style="background: linear-gradient(135deg, #0369a1 0%, #0284c7 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="font-size: 1.2rem; margin-bottom: 1rem;">⚙️ Basic Working Principle</h3>
<p style="line-height: 1.8;">
When a pad is activated on one side of the tool, the opposite side of the bit is pushed against the wellbore wall. This creates a fulcrum point that deflects the drilling path toward the activated pad direction. The pad acts as a <strong>Variable Gauge Stabilizer</strong>.
</p>
</div>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin-top: 2rem; margin-bottom: 1rem;">🔧 Main Push-the-Bit Mechanisms</h3>

<div style="background: #f0f9ff; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem; border-left: 4px solid #0369a1;">
<h4 style="color: #0369a1; font-size: 1.15rem; margin-bottom: 1rem;">1️⃣ Bias Unit (External Pads)</h4>
<p style="line-height: 1.8; margin-bottom: 1rem;">
Uses <strong>3 or 4 external pads</strong> operated by hydraulic pressure. Each pad can extend independently to apply lateral force. Pads are activated with precise timing during each rotation to apply force only in the desired direction.
</p>
<ul style="padding-left: 1.5rem; line-height: 1.8;">
<li><strong>Type:</strong> Hydraulically Actuated Pads</li>
<li><strong>Control:</strong> Synchronized with tool rotation</li>
<li><strong>Example:</strong> Schlumberger PowerDrive, Baker Hughes AutoTrak</li>
</ul>
</div>

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem; border-left: 4px solid #d97706;">
<h4 style="color: #d97706; font-size: 1.15rem; margin-bottom: 1rem;">2️⃣ Counter-Rotating Sleeve</h4>
<p style="line-height: 1.8; margin-bottom: 1rem;">
Uses a <strong>sleeve that rotates opposite to the drillstring</strong> at approximately the same speed, making it geostationary. Pads mounted on this sleeve remain in the same position relative to the formation.
</p>
<ul style="padding-left: 1.5rem; line-height: 1.8;">
<li><strong>Type:</strong> Geostationary Sleeve with Fixed Pads</li>
<li><strong>Control:</strong> Force direction remains constant</li>
<li><strong>Advantage:</strong> More stable steering force</li>
</ul>
</div>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin-top: 2rem; margin-bottom: 1rem;">⚡ Steering Dynamics in Push-the-Bit</h3>

<div style="background: #ecfdf5; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #047857; margin-bottom: 1rem;">📐 Steering Force Calculation:</h4>
<p style="line-height: 1.8; margin-bottom: 1rem;">
Effective steering force depends on:
</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li><strong>Pad Extension:</strong> Amount of pad extension (typically 0.25" - 1.0")</li>
<li><strong>WOB:</strong> Higher weight increases Reactive Force</li>
<li><strong>Formation Hardness:</strong> Hard formations provide better fulcrum point</li>
<li><strong>Bit-to-Pad Distance:</strong> Distance between bit and pads</li>
</ul>
</div>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin-top: 2rem; margin-bottom: 1rem;">⚠️ Push-the-Bit Challenges</h3>

<div style="background: #fef2f2; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem; border-left: 4px solid #dc2626;">
<ul style="padding-left: 1.5rem; line-height: 2;">
<li><strong>Formation Dependent:</strong> Performance varies significantly between soft and hard formations</li>
<li><strong>Pad Wear:</strong> Pad erosion in abrasive formations</li>
<li><strong>Hole Enlargement:</strong> Potential wellbore enlargement in weak formations</li>
<li><strong>Limited in Soft Formations:</strong> Difficulty establishing effective fulcrum</li>
<li><strong>Reactive to WOB Changes:</strong> High sensitivity to weight variations</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #059669 0%, #10b981 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-top: 2rem;">
<h3 style="font-size: 1.2rem; margin-bottom: 1rem;">✅ Best Applications for Push-the-Bit</h3>
<ul style="padding-left: 1.5rem; line-height: 1.8;">
<li>Medium to hard formations</li>
<li>ERD wells requiring high build rates</li>
<li>Applications requiring high DLS</li>
<li>Projects requiring lower cost than Point-the-Bit</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Bias Unit', definition: 'Steering unit containing hydraulic pads in Push-the-Bit systems' },
            { term: 'Counter-Rotating Sleeve', definition: 'Sleeve rotating opposite to drillstring to remain geostationary' },
            { term: 'Reactive Side Force', definition: 'Lateral force resulting from pushing bit against wellbore wall' },
            { term: 'Pad Extension', definition: 'Amount of pad protrusion from tool body to apply steering force' },
            { term: 'Fulcrum Point', definition: 'Pivot point formed when bit contacts wellbore wall' },
          ],
          practiceQuestion: {
            question: 'In Push-the-Bit systems, where is the lateral force applied?',
            options: [
              'Directly on the bit axis',
              'On the tool body near the bit',
              'On the drillstring only',
              'On stabilizer above the tool'
            ],
            correctAnswer: 1,
          },
        },
      },
    },
    // Day 3: Point-the-Bit Systems
    {
      day: 3,
      type: 'learning',
      content: {
        ar: {
          title: 'أنظمة Point-the-Bit - اليوم الثالث',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">🔷 أنظمة Point-the-Bit بالتفصيل</h2>

<p style="margin-bottom: 1.5rem; line-height: 1.8; font-size: 1.1rem;">
أنظمة <strong>Point-the-Bit</strong> تعمل بمبدأ مختلف تماماً عن Push-the-Bit. بدلاً من دفع الأداة جانبياً، يتم <strong>إمالة محور الـ Bit نفسه</strong> في اتجاه التوجيه المطلوب. هذا يشبه مبدأ Bent Housing في محركات الطين لكن بشكل ديناميكي ومستمر أثناء الدوران.
</p>

<div style="background: linear-gradient(135deg, #d97706 0%, #f59e0b 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="font-size: 1.2rem; margin-bottom: 1rem;">⚙️ مبدأ العمل الأساسي</h3>
<p style="line-height: 1.8;">
يحتوي النظام على <strong>عمود داخلي (Internal Shaft)</strong> يمكن أن ينحني أو يميل بزاوية صغيرة بالنسبة للغلاف الخارجي. الـ Bit متصل بهذا العمود الداخلي، فعند إمالته، يتجه الـ Bit مباشرة نحو الاتجاه المطلوب دون الحاجة لقوة جانبية خارجية.
</p>
</div>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin-top: 2rem; margin-bottom: 1rem;">🔧 آليات Point-the-Bit الرئيسية</h3>

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem; border-left: 4px solid #d97706;">
<h4 style="color: #d97706; font-size: 1.15rem; margin-bottom: 1rem;">1️⃣ Eccentric Rings (حلقات غير متمركزة)</h4>
<p style="line-height: 1.8; margin-bottom: 1rem;">
تستخدم <strong>حلقتين أو أكثر غير متمركزتين</strong> (Eccentric) يمكن تدويرهما بالنسبة لبعضهما. عند تدوير الحلقات، يتغير اتجاه ومقدار الإمالة. هذا يتيح التحكم الدقيق في اتجاه التوجيه و DLS.
</p>
<ul style="padding-left: 1.5rem; line-height: 1.8;">
<li><strong>مثال:</strong> Halliburton Geo-Pilot Rotary</li>
<li><strong>الميزة:</strong> تحكم دقيق في الإمالة</li>
<li><strong>التعقيد:</strong> ميكانيكا معقدة</li>
</ul>
</div>

<div style="background: #f0f9ff; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem; border-left: 4px solid #0369a1;">
<h4 style="color: #0369a1; font-size: 1.15rem; margin-bottom: 1rem;">2️⃣ Flex Shaft with Internal Actuators</h4>
<p style="line-height: 1.8; margin-bottom: 1rem;">
يستخدم <strong>عمود مرن داخلي</strong> يتم ثنيه بواسطة محركات داخلية (Actuators). يبقى العمود الداخلي ثابتاً جيوستاتيكياً بينما يدور الغلاف الخارجي، أو العكس.
</p>
<ul style="padding-left: 1.5rem; line-height: 1.8;">
<li><strong>مثال:</strong> Schlumberger PowerDrive Orbit</li>
<li><strong>الميزة:</strong> استجابة سريعة للتوجيه</li>
<li><strong>التحكم:</strong> إلكتروني بالكامل</li>
</ul>
</div>

<div style="background: #ecfdf5; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem; border-left: 4px solid #059669;">
<h4 style="color: #047857; font-size: 1.15rem; margin-bottom: 1rem;">3️⃣ Offset Mandrel (عمود منزاح)</h4>
<p style="line-height: 1.8; margin-bottom: 1rem;">
يستخدم <strong>عمود منزاح محورياً</strong> عن مركز الغلاف. يتم التحكم في موقع الإزاحة للتوجيه. عندما يدور الغلاف الخارجي، يبقى العمود المنزاح ثابتاً أو يتم التحكم في موقعه.
</p>
<ul style="padding-left: 1.5rem; line-height: 1.8;">
<li><strong>مثال:</strong> NOV Vector Series</li>
<li><strong>الميزة:</strong> بساطة نسبية</li>
<li><strong>التطبيق:</strong> آبار متوسطة التعقيد</li>
</ul>
</div>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin-top: 2rem; margin-bottom: 1rem;">📊 مقارنة أنظمة Point-the-Bit الشائعة</h3>

<table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem; font-size: 0.95rem;">
<thead>
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 1rem; text-align: center; border: 1px solid #334155;">النظام</th>
<th style="padding: 1rem; text-align: center; border: 1px solid #334155;">الشركة</th>
<th style="padding: 1rem; text-align: center; border: 1px solid #334155;">الآلية</th>
<th style="padding: 1rem; text-align: center; border: 1px solid #334155;">DLS القصوى</th>
</tr>
</thead>
<tbody>
<tr style="background: #f8fafc;">
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; font-weight: bold;">PowerDrive Orbit</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">Schlumberger</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">Flex Shaft + Actuators</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">15°/100ft</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; font-weight: bold;">Xceed</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">Schlumberger</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">High Build Specialized</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">18°/100ft</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; font-weight: bold;">TerraSteer</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">Weatherford</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">Eccentric Rings</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">12°/100ft</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; font-weight: bold;">SureSteer</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">Baker Hughes</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">Internal Deflection</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">14°/100ft</td>
</tr>
</tbody>
</table>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin-top: 2rem; margin-bottom: 1rem;">⚡ مميزات Point-the-Bit</h3>

<div style="background: #ecfdf5; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<ul style="padding-left: 1.5rem; line-height: 2;">
<li><strong>Formation Independent:</strong> الأداء ثابت نسبياً في جميع أنواع التكوينات</li>
<li><strong>Smooth Wellbore:</strong> جودة بئر أفضل بسبب الإمالة المباشرة</li>
<li><strong>Less Hole Enlargement:</strong> لا تعتمد على الضغط ضد جدار البئر</li>
<li><strong>Higher DLS Capability:</strong> قدرة على تحقيق معدلات بناء أعلى</li>
<li><strong>Predictable Response:</strong> استجابة أكثر قابلية للتنبؤ</li>
<li><strong>Soft Formation Performance:</strong> أداء ممتاز في التكوينات الناعمة</li>
</ul>
</div>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin-top: 2rem; margin-bottom: 1rem;">⚠️ تحديات Point-the-Bit</h3>

<div style="background: #fef2f2; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem; border-left: 4px solid #dc2626;">
<ul style="padding-left: 1.5rem; line-height: 2;">
<li><strong>Mechanical Complexity:</strong> تعقيد ميكانيكي أعلى من Push-the-Bit</li>
<li><strong>Higher Cost:</strong> تكلفة إيجار وصيانة أعلى</li>
<li><strong>Bearing Wear:</strong> تآكل المحامل الداخلية</li>
<li><strong>Limited Rotary Speed:</strong> بعض الأنظمة تتطلب RPM محدود</li>
<li><strong>Repair Complexity:</strong> صيانة ميدانية أكثر صعوبة</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-top: 2rem;">
<h3 style="font-size: 1.2rem; margin-bottom: 1rem;">💡 متى نختار Point-the-Bit؟</h3>
<ul style="padding-left: 1.5rem; line-height: 1.8;">
<li>التكوينات الناعمة أو غير المتجانسة</li>
<li>الآبار التي تتطلب DLS عالي جداً</li>
<li>Geosteering دقيق في الطبقات الرقيقة</li>
<li>3D Complex Trajectories مع تغييرات اتجاه متعددة</li>
<li>عندما تكون جودة البئر أولوية قصوى</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Eccentric Rings', definition: 'حلقات غير متمركزة تُستخدم لإمالة العمود الداخلي في أنظمة Point-the-Bit' },
            { term: 'Flex Shaft', definition: 'عمود مرن داخلي يمكن ثنيه لتوجيه الـ Bit' },
            { term: 'Internal Actuators', definition: 'محركات داخلية تتحكم في انحناء العمود المرن' },
            { term: 'Offset Mandrel', definition: 'عمود منزاح عن المركز يُستخدم لإنشاء زاوية التوجيه' },
            { term: 'Bit Tilt Angle', definition: 'زاوية إمالة الـ Bit عن محور الأداة في اتجاه التوجيه' },
          ],
          practiceQuestion: {
            question: 'ما هي الميزة الرئيسية لأنظمة Point-the-Bit في التكوينات الناعمة؟',
            options: [
              'تكلفة أقل',
              'لا تعتمد على نقطة ارتكاز في جدار البئر',
              'سرعة دوران أعلى',
              'لا تحتاج MWD'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Point-the-Bit Systems - Day 3',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">🔷 Point-the-Bit Systems in Detail</h2>

<p style="margin-bottom: 1.5rem; line-height: 1.8; font-size: 1.1rem;">
<strong>Point-the-Bit</strong> systems work on a completely different principle than Push-the-Bit. Instead of pushing the tool laterally, the <strong>bit axis itself is tilted</strong> in the desired steering direction. This is similar to the bent housing principle in mud motors but done dynamically and continuously during rotation.
</p>

<div style="background: linear-gradient(135deg, #d97706 0%, #f59e0b 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="font-size: 1.2rem; margin-bottom: 1rem;">⚙️ Basic Working Principle</h3>
<p style="line-height: 1.8;">
The system contains an <strong>internal shaft</strong> that can bend or tilt at a small angle relative to the outer housing. The bit is connected to this internal shaft, so when tilted, the bit points directly toward the desired direction without needing external lateral force.
</p>
</div>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin-top: 2rem; margin-bottom: 1rem;">🔧 Main Point-the-Bit Mechanisms</h3>

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem; border-left: 4px solid #d97706;">
<h4 style="color: #d97706; font-size: 1.15rem; margin-bottom: 1rem;">1️⃣ Eccentric Rings</h4>
<p style="line-height: 1.8; margin-bottom: 1rem;">
Uses <strong>two or more eccentric rings</strong> that can be rotated relative to each other. When rings rotate, the direction and magnitude of tilt changes. This allows precise control of steering direction and DLS.
</p>
<ul style="padding-left: 1.5rem; line-height: 1.8;">
<li><strong>Example:</strong> Halliburton Geo-Pilot Rotary</li>
<li><strong>Advantage:</strong> Precise tilt control</li>
<li><strong>Complexity:</strong> Complex mechanics</li>
</ul>
</div>

<div style="background: #f0f9ff; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem; border-left: 4px solid #0369a1;">
<h4 style="color: #0369a1; font-size: 1.15rem; margin-bottom: 1rem;">2️⃣ Flex Shaft with Internal Actuators</h4>
<p style="line-height: 1.8; margin-bottom: 1rem;">
Uses a <strong>flexible internal shaft</strong> bent by internal actuators. The internal shaft remains geostationary while the outer housing rotates, or vice versa.
</p>
<ul style="padding-left: 1.5rem; line-height: 1.8;">
<li><strong>Example:</strong> Schlumberger PowerDrive Orbit</li>
<li><strong>Advantage:</strong> Fast steering response</li>
<li><strong>Control:</strong> Fully electronic</li>
</ul>
</div>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin-top: 2rem; margin-bottom: 1rem;">⚡ Point-the-Bit Advantages</h3>

<div style="background: #ecfdf5; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<ul style="padding-left: 1.5rem; line-height: 2;">
<li><strong>Formation Independent:</strong> Relatively consistent performance across all formation types</li>
<li><strong>Smooth Wellbore:</strong> Better hole quality due to direct tilting</li>
<li><strong>Less Hole Enlargement:</strong> Doesn't rely on pressing against wellbore wall</li>
<li><strong>Higher DLS Capability:</strong> Ability to achieve higher build rates</li>
<li><strong>Predictable Response:</strong> More predictable steering response</li>
<li><strong>Soft Formation Performance:</strong> Excellent performance in soft formations</li>
</ul>
</div>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin-top: 2rem; margin-bottom: 1rem;">⚠️ Point-the-Bit Challenges</h3>

<div style="background: #fef2f2; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem; border-left: 4px solid #dc2626;">
<ul style="padding-left: 1.5rem; line-height: 2;">
<li><strong>Mechanical Complexity:</strong> Higher mechanical complexity than Push-the-Bit</li>
<li><strong>Higher Cost:</strong> Higher rental and maintenance costs</li>
<li><strong>Bearing Wear:</strong> Internal bearing erosion</li>
<li><strong>Limited Rotary Speed:</strong> Some systems require limited RPM</li>
<li><strong>Repair Complexity:</strong> More difficult field maintenance</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-top: 2rem;">
<h3 style="font-size: 1.2rem; margin-bottom: 1rem;">💡 When to Choose Point-the-Bit?</h3>
<ul style="padding-left: 1.5rem; line-height: 1.8;">
<li>Soft or heterogeneous formations</li>
<li>Wells requiring very high DLS</li>
<li>Precise geosteering in thin layers</li>
<li>3D complex trajectories with multiple direction changes</li>
<li>When wellbore quality is top priority</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Eccentric Rings', definition: 'Off-center rings used to tilt internal shaft in Point-the-Bit systems' },
            { term: 'Flex Shaft', definition: 'Flexible internal shaft that can be bent to steer the bit' },
            { term: 'Internal Actuators', definition: 'Internal motors controlling flex shaft bending' },
            { term: 'Offset Mandrel', definition: 'Off-center shaft used to create steering angle' },
            { term: 'Bit Tilt Angle', definition: 'Angle of bit tilt from tool axis in steering direction' },
          ],
          practiceQuestion: {
            question: 'What is the main advantage of Point-the-Bit systems in soft formations?',
            options: [
              'Lower cost',
              'Does not rely on fulcrum point in wellbore wall',
              'Higher rotation speed',
              'No need for MWD'
            ],
            correctAnswer: 1,
          },
        },
      },
    },
    // Day 4: RSS Operations & Troubleshooting
    {
      day: 4,
      type: 'learning',
      content: {
        ar: {
          title: 'تشغيل RSS واستكشاف الأخطاء - اليوم الرابع',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">🔷 تشغيل أنظمة RSS في الميدان</h2>

<p style="margin-bottom: 1.5rem; line-height: 1.8; font-size: 1.1rem;">
تشغيل أنظمة RSS يتطلب فهماً عميقاً للأداة ومعاملات الحفر والتكوينات الجيولوجية. النجاح يعتمد على <strong>التخطيط الدقيق</strong> و<strong>المراقبة المستمرة</strong> و<strong>الاستجابة السريعة</strong> للمشاكل.
</p>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin-top: 2rem; margin-bottom: 1rem;">🔧 إعداد BHA مع RSS</h3>

<div style="background: #f0f9ff; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem; border-left: 4px solid #0369a1;">
<h4 style="color: #0369a1; margin-bottom: 1rem;">📐 تصميم BHA النموذجي:</h4>
<ol style="padding-left: 1.5rem; line-height: 2;">
<li><strong>Bit:</strong> PDC أو Roller Cone حسب التكوين</li>
<li><strong>RSS Tool:</strong> الأداة الموجهة</li>
<li><strong>Near-Bit Stabilizer:</strong> (اختياري حسب التصميم)</li>
<li><strong>MWD/LWD:</strong> أنظمة القياس والتسجيل</li>
<li><strong>String Stabilizer:</strong> لتثبيت الـ BHA</li>
<li><strong>Non-Magnetic Drill Collars:</strong> لدقة المغناطيسية</li>
<li><strong>Drill Collars / HWDP:</strong> لتوفير WOB</li>
</ol>
</div>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin-top: 2rem; margin-bottom: 1rem;">⚡ معاملات التشغيل الحرجة</h3>

<table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem; font-size: 0.95rem;">
<thead>
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 1rem; text-align: center; border: 1px solid #334155;">المعامل</th>
<th style="padding: 1rem; text-align: center; border: 1px solid #334155;">النطاق النموذجي</th>
<th style="padding: 1rem; text-align: center; border: 1px solid #334155;">التأثير على الأداء</th>
</tr>
</thead>
<tbody>
<tr style="background: #f8fafc;">
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; font-weight: bold;">WOB</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">5-35 klbs (حسب حجم الأداة)</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">Push-the-Bit: حساسية عالية | Point-the-Bit: أقل حساسية</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; font-weight: bold;">RPM</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">60-180 RPM</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">بعض الأنظمة لها حدود قصوى للـ RPM</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; font-weight: bold;">Flow Rate</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">300-700 GPM</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">مطلوب لتشغيل Turbine وتبريد الإلكترونيات</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; font-weight: bold;">Mud Weight</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">8-18 ppg</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">يؤثر على ضغط التشغيل الداخلي</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; font-weight: bold;">LCM Content</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">محدود جداً</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">قد يسد القنوات الداخلية</td>
</tr>
</tbody>
</table>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin-top: 2rem; margin-bottom: 1rem;">📡 التحكم والتوجيه من السطح</h3>

<div style="background: #ecfdf5; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #047857; margin-bottom: 1rem;">🎯 طرق التحكم:</h4>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li><strong>Downlink Commands:</strong> إرسال أوامر للأداة عبر:
  <ul style="margin-top: 0.5rem; padding-left: 1rem;">
    <li>Flow Rate Modulation (تغيير معدل التدفق)</li>
    <li>RPM Variation (تغيير سرعة الدوران)</li>
    <li>Pipe Rotation Patterns (أنماط دوران محددة)</li>
  </ul>
</li>
<li><strong>Steering Ratio:</strong> نسبة بين القوة في اتجاه معين (0-100%)</li>
<li><strong>Proportional Steering:</strong> تحكم نسبي في DLS</li>
<li><strong>Auto-Hold Mode:</strong> الحفاظ على الاتجاه الحالي تلقائياً</li>
</ul>
</div>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin-top: 2rem; margin-bottom: 1rem;">⚠️ المشاكل الشائعة والحلول</h3>

<div style="background: #fef2f2; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem; border-left: 4px solid #dc2626;">
<h4 style="color: #991b1b; margin-bottom: 1rem;">🔴 مشكلة: عدم استجابة التوجيه (No Steering Response)</h4>
<p style="line-height: 1.8; margin-bottom: 0.5rem;"><strong>الأسباب المحتملة:</strong></p>
<ul style="padding-left: 1.5rem; line-height: 1.8;">
<li>انخفاض Flow Rate تحت الحد الأدنى</li>
<li>تآكل Pads أو خلل ميكانيكي</li>
<li>مشكلة في الاتصال (Downlink/Uplink)</li>
<li>Formation effect (تأثير التكوين على Push-the-Bit)</li>
</ul>
<p style="line-height: 1.8; margin-top: 0.75rem;"><strong style="color: #059669;">الحل:</strong> تحقق من Flow Rate، راجع بيانات الأداة، اختبر Downlink</p>
</div>

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem; border-left: 4px solid #d97706;">
<h4 style="color: #92400e; margin-bottom: 1rem;">🟠 مشكلة: Erratic Steering (توجيه غير منتظم)</h4>
<p style="line-height: 1.8; margin-bottom: 0.5rem;"><strong>الأسباب المحتملة:</strong></p>
<ul style="padding-left: 1.5rem; line-height: 1.8;">
<li>Vibrations عالية تؤثر على الحساسات</li>
<li>Interbedded formations (طبقات متعاقبة)</li>
<li>Bit Bounce أو Stick-Slip</li>
<li>WOB غير مستقر</li>
</ul>
<p style="line-height: 1.8; margin-top: 0.75rem;"><strong style="color: #059669;">الحل:</strong> قلل RPM، عدّل WOB، راقب Vibration data</p>
</div>

<div style="background: #f0f9ff; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem; border-left: 4px solid #0369a1;">
<h4 style="color: #0369a1; margin-bottom: 1rem;">🔵 مشكلة: Tool Failure (فشل الأداة)</h4>
<p style="line-height: 1.8; margin-bottom: 0.5rem;"><strong>المؤشرات:</strong></p>
<ul style="padding-left: 1.5rem; line-height: 1.8;">
<li>فقدان كامل للاتصال</li>
<li>ضغط مضخة غير طبيعي</li>
<li>توقف التوجيه تماماً</li>
<li>قراءات خاطئة من الحساسات</li>
</ul>
<p style="line-height: 1.8; margin-top: 0.75rem;"><strong style="color: #059669;">الإجراء:</strong> POOH للفحص، استبدال الأداة إذا لزم الأمر</p>
</div>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin-top: 2rem; margin-bottom: 1rem;">📊 مراقبة أداء RSS</h3>

<div style="background: #f8fafc; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #1e3a5f; margin-bottom: 1rem;">مؤشرات الأداء الرئيسية (KPIs):</h4>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li><strong>Toolface Accuracy:</strong> دقة Toolface المحققة مقابل المطلوبة</li>
<li><strong>DLS Achieved vs. Commanded:</strong> DLS الفعلي مقابل المطلوب</li>
<li><strong>Steering Efficiency:</strong> نسبة وقت التوجيه الفعال</li>
<li><strong>ROP Comparison:</strong> مقارنة ROP مع Motor runs سابقة</li>
<li><strong>Wellbore Quality:</strong> Caliper log بعد الحفر</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #059669 0%, #10b981 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-top: 2rem;">
<h3 style="font-size: 1.2rem; margin-bottom: 1rem;">✅ أفضل الممارسات للتشغيل</h3>
<ul style="padding-left: 1.5rem; line-height: 1.8;">
<li>ابدأ بـ Low Steering Ratio وزد تدريجياً</li>
<li>راقب Vibration data باستمرار</li>
<li>حافظ على Flow Rate ضمن النطاق الموصى به</li>
<li>استخدم Auto-Hold في الأقسام المستقيمة</li>
<li>وثّق استجابة الأداة لكل تكوين</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Downlink', definition: 'إرسال أوامر من السطح إلى أداة RSS عبر تغيير معاملات الحفر' },
            { term: 'Steering Ratio', definition: 'نسبة قوة التوجيه المطبقة من 0% (مستقيم) إلى 100% (أقصى توجيه)' },
            { term: 'Auto-Hold Mode', definition: 'وضع تلقائي للحفاظ على الميل والاتجاه الحالي' },
            { term: 'Toolface Accuracy', definition: 'دقة توجيه الـ Toolface مقارنة بالقيمة المطلوبة' },
            { term: 'Flow Rate Modulation', definition: 'تقنية إرسال أوامر للأداة عبر تغيير معدل تدفق الطين' },
          ],
          practiceQuestion: {
            question: 'عند فقدان استجابة التوجيه في RSS، ما هو أول إجراء يجب اتخاذه؟',
            options: [
              'POOH فوراً لفحص الأداة',
              'زيادة WOB لأقصى حد',
              'التحقق من Flow Rate وبيانات الأداة',
              'إيقاف الحفر نهائياً'
            ],
            correctAnswer: 2,
          },
        },
        en: {
          title: 'RSS Operations & Troubleshooting - Day 4',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">🔷 RSS Field Operations</h2>

<p style="margin-bottom: 1.5rem; line-height: 1.8; font-size: 1.1rem;">
Operating RSS requires deep understanding of the tool, drilling parameters, and geological formations. Success depends on <strong>careful planning</strong>, <strong>continuous monitoring</strong>, and <strong>quick response</strong> to problems.
</p>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin-top: 2rem; margin-bottom: 1rem;">🔧 BHA Setup with RSS</h3>

<div style="background: #f0f9ff; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem; border-left: 4px solid #0369a1;">
<h4 style="color: #0369a1; margin-bottom: 1rem;">📐 Typical BHA Design:</h4>
<ol style="padding-left: 1.5rem; line-height: 2;">
<li><strong>Bit:</strong> PDC or Roller Cone depending on formation</li>
<li><strong>RSS Tool:</strong> The steering tool</li>
<li><strong>Near-Bit Stabilizer:</strong> (Optional depending on design)</li>
<li><strong>MWD/LWD:</strong> Measurement and logging systems</li>
<li><strong>String Stabilizer:</strong> For BHA stabilization</li>
<li><strong>Non-Magnetic Drill Collars:</strong> For magnetic accuracy</li>
<li><strong>Drill Collars / HWDP:</strong> For WOB provision</li>
</ol>
</div>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin-top: 2rem; margin-bottom: 1rem;">⚡ Critical Operating Parameters</h3>

<table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem; font-size: 0.95rem;">
<thead>
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 1rem; text-align: center; border: 1px solid #334155;">Parameter</th>
<th style="padding: 1rem; text-align: center; border: 1px solid #334155;">Typical Range</th>
<th style="padding: 1rem; text-align: center; border: 1px solid #334155;">Performance Impact</th>
</tr>
</thead>
<tbody>
<tr style="background: #f8fafc;">
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; font-weight: bold;">WOB</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">5-35 klbs (tool size dependent)</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">Push-the-Bit: High sensitivity | Point-the-Bit: Less sensitive</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; font-weight: bold;">RPM</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">60-180 RPM</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">Some systems have maximum RPM limits</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; font-weight: bold;">Flow Rate</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">300-700 GPM</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">Required for Turbine operation and electronics cooling</td>
</tr>
</tbody>
</table>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin-top: 2rem; margin-bottom: 1rem;">⚠️ Common Problems and Solutions</h3>

<div style="background: #fef2f2; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem; border-left: 4px solid #dc2626;">
<h4 style="color: #991b1b; margin-bottom: 1rem;">🔴 Problem: No Steering Response</h4>
<p style="line-height: 1.8; margin-bottom: 0.5rem;"><strong>Possible Causes:</strong></p>
<ul style="padding-left: 1.5rem; line-height: 1.8;">
<li>Flow Rate below minimum threshold</li>
<li>Pad wear or mechanical malfunction</li>
<li>Communication issue (Downlink/Uplink)</li>
<li>Formation effect (on Push-the-Bit)</li>
</ul>
<p style="line-height: 1.8; margin-top: 0.75rem;"><strong style="color: #059669;">Solution:</strong> Check Flow Rate, review tool data, test Downlink</p>
</div>

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem; border-left: 4px solid #d97706;">
<h4 style="color: #92400e; margin-bottom: 1rem;">🟠 Problem: Erratic Steering</h4>
<p style="line-height: 1.8; margin-bottom: 0.5rem;"><strong>Possible Causes:</strong></p>
<ul style="padding-left: 1.5rem; line-height: 1.8;">
<li>High vibrations affecting sensors</li>
<li>Interbedded formations</li>
<li>Bit Bounce or Stick-Slip</li>
<li>Unstable WOB</li>
</ul>
<p style="line-height: 1.8; margin-top: 0.75rem;"><strong style="color: #059669;">Solution:</strong> Reduce RPM, adjust WOB, monitor Vibration data</p>
</div>

<div style="background: linear-gradient(135deg, #059669 0%, #10b981 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-top: 2rem;">
<h3 style="font-size: 1.2rem; margin-bottom: 1rem;">✅ Best Operating Practices</h3>
<ul style="padding-left: 1.5rem; line-height: 1.8;">
<li>Start with low Steering Ratio and increase gradually</li>
<li>Monitor Vibration data continuously</li>
<li>Maintain Flow Rate within recommended range</li>
<li>Use Auto-Hold in tangent sections</li>
<li>Document tool response for each formation</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Downlink', definition: 'Sending commands from surface to RSS tool via drilling parameter changes' },
            { term: 'Steering Ratio', definition: 'Percentage of steering force applied from 0% (straight) to 100% (maximum steering)' },
            { term: 'Auto-Hold Mode', definition: 'Automatic mode to maintain current inclination and azimuth' },
            { term: 'Toolface Accuracy', definition: 'Accuracy of Toolface orientation compared to commanded value' },
            { term: 'Flow Rate Modulation', definition: 'Technique to send commands to tool via mud flow rate changes' },
          ],
          practiceQuestion: {
            question: 'When losing steering response in RSS, what is the first action to take?',
            options: [
              'POOH immediately to inspect tool',
              'Increase WOB to maximum',
              'Check Flow Rate and tool data',
              'Stop drilling completely'
            ],
            correctAnswer: 2,
          },
        },
      },
    },
    // Day 5: RSS Maintenance and Economic Analysis
    {
      day: 5,
      type: 'learning',
      content: {
        ar: {
          title: 'صيانة RSS والتحليل الاقتصادي - اليوم الخامس',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">🔷 صيانة أنظمة RSS (RSS Maintenance)</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="color: #f4a261; margin-bottom: 1rem;">📌 أهمية الصيانة الوقائية</h3>
<p style="line-height: 1.8;">
أنظمة RSS استثمار مكلف، وصيانتها السليمة تضمن أداءً موثوقاً وعمراً تشغيلياً طويلاً. الصيانة الوقائية تقلل وقت التوقف غير المخطط وتتجنب التكاليف الكارثية لفشل الأداة أثناء الحفر.
</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">🔧 عمليات Redress الميدانية</h3>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<p style="margin-bottom: 1rem;">Redress هو إعادة تأهيل الأداة بعد كل رحلة حفر:</p>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin-top: 1rem;">
<div style="background: #e8f5e9; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #27ae60; margin-bottom: 0.75rem;">✅ فحوصات ما بعد الرحلة</h4>
<ul style="margin: 0; padding-right: 1.25rem; line-height: 1.8;">
<li>فحص بصري للتآكل والأضرار</li>
<li>قياس أبعاد الـ Pads والـ Stabilizers</li>
<li>اختبار الإلكترونيات والحساسات</li>
<li>فحص الـ Seals والـ Bearings</li>
<li>تحميل واختبار البرنامج</li>
</ul>
</div>
<div style="background: #fff3e0; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #f39c12; margin-bottom: 0.75rem;">⚙️ جدول الاستبدال</h4>
<ul style="margin: 0; padding-right: 1.25rem; line-height: 1.8;">
<li><strong>Pads:</strong> كل 50-100 ساعة حسب التآكل</li>
<li><strong>Bearings:</strong> كل 200-300 ساعة</li>
<li><strong>Seals:</strong> كل رحلة أو حسب الفحص</li>
<li><strong>Electronics:</strong> عند ظهور أعطال</li>
<li><strong>Batteries:</strong> حسب ساعات التشغيل</li>
</ul>
</div>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">🔍 تحليل الأعطال (Failure Analysis)</h3>

<div style="background: #fef2f2; padding: 1.5rem; border-radius: 12px; border-left: 4px solid #dc2626; margin-bottom: 2rem;">
<h4 style="color: #991b1b; margin-bottom: 1rem;">أنواع الأعطال الشائعة</h4>

<div style="overflow-x: auto;">
<table style="width: 100%; border-collapse: collapse; font-size: 0.95rem;">
<thead>
<tr style="background: #991b1b; color: white;">
<th style="padding: 1rem; text-align: center; border: 1px solid #7f1d1d;">نوع العطل</th>
<th style="padding: 1rem; text-align: right; border: 1px solid #7f1d1d;">الأسباب الشائعة</th>
<th style="padding: 1rem; text-align: right; border: 1px solid #7f1d1d;">الوقاية</th>
</tr>
</thead>
<tbody>
<tr style="background: #fef2f2;">
<td style="padding: 0.75rem; border: 1px solid #fecaca; text-align: center; font-weight: bold;">كهربائي</td>
<td style="padding: 0.75rem; border: 1px solid #fecaca;">ارتفاع الحرارة، تسرب السوائل، الاهتزازات</td>
<td style="padding: 0.75rem; border: 1px solid #fecaca;">الحفاظ على Flow Rate، فحص Seals</td>
</tr>
<tr style="background: #fff;">
<td style="padding: 0.75rem; border: 1px solid #fecaca; text-align: center; font-weight: bold;">ميكانيكي</td>
<td style="padding: 0.75rem; border: 1px solid #fecaca;">تآكل Pads، كسر Bearings، Washout</td>
<td style="padding: 0.75rem; border: 1px solid #fecaca;">Redress منتظم، تجنب Vibrations</td>
</tr>
<tr style="background: #fef2f2;">
<td style="padding: 0.75rem; border: 1px solid #fecaca; text-align: center; font-weight: bold;">هيدروليكي</td>
<td style="padding: 0.75rem; border: 1px solid #fecaca;">انسداد Nozzles، تلف Seals، تسرب</td>
<td style="padding: 0.75rem; border: 1px solid #fecaca;">ترشيح الطين، صيانة Seals</td>
</tr>
<tr style="background: #fff;">
<td style="padding: 0.75rem; border: 1px solid #fecaca; text-align: center; font-weight: bold;">اتصالات</td>
<td style="padding: 0.75rem; border: 1px solid #fecaca;">فشل Downlink، تشويش الإشارة</td>
<td style="padding: 0.75rem; border: 1px solid #fecaca;">اختبار الاتصال قبل RIH</td>
</tr>
</tbody>
</table>
</div>
</div>

<h4 style="color: #2c3e50; margin: 1.5rem 0 1rem 0;">Root Cause Analysis (RCA)</h4>

<div style="background: #e3f2fd; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<p style="margin-bottom: 1rem;">عند حدوث عطل، يجب إجراء تحليل السبب الجذري:</p>
<ol style="margin: 0; padding-right: 1.25rem; line-height: 2;">
<li><strong>جمع البيانات:</strong> سجلات الحفر، بيانات الأداة، ظروف التشغيل</li>
<li><strong>تحديد التسلسل:</strong> ما الذي حدث قبل العطل مباشرة؟</li>
<li><strong>تحليل السبب:</strong> لماذا حدث العطل (5 Whys)</li>
<li><strong>التوصيات:</strong> إجراءات تصحيحية ووقائية</li>
<li><strong>التوثيق:</strong> تسجيل للرجوع المستقبلي</li>
</ol>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">💰 التحليل الاقتصادي (Economic Analysis)</h3>

<div style="background: linear-gradient(135deg, #059669 0%, #10b981 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<h4 style="margin-bottom: 1rem;">RSS vs Mud Motor: مقارنة التكاليف</h4>
<p style="line-height: 1.8;">
قرار استخدام RSS أو Mud Motor يعتمد على التحليل الاقتصادي الشامل، وليس فقط على تكلفة الأداة اليومية.
</p>
</div>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
<div style="background: #f0f9ff; padding: 1.5rem; border-radius: 12px; border-left: 4px solid #3498db;">
<h4 style="color: #3498db; margin-bottom: 1rem;">💵 التكاليف المباشرة</h4>
<ul style="margin: 0; padding-right: 1.25rem; line-height: 1.8;">
<li><strong>RSS Daily Rate:</strong> $15,000-40,000/day</li>
<li><strong>Mud Motor Rate:</strong> $3,000-8,000/day</li>
<li><strong>Redress Cost:</strong> $5,000-15,000 per run</li>
<li><strong>LWD/MWD:</strong> تكلفة إضافية مماثلة</li>
</ul>
</div>
<div style="background: #ecfdf5; padding: 1.5rem; border-radius: 12px; border-left: 4px solid #27ae60;">
<h4 style="color: #27ae60; margin-bottom: 1rem;">📈 القيمة المضافة بـ RSS</h4>
<ul style="margin: 0; padding-right: 1.25rem; line-height: 1.8;">
<li><strong>ROP أعلى:</strong> 20-40% زيادة = أيام أقل</li>
<li><strong>Hole Quality:</strong> تقليل Reaming و Washouts</li>
<li><strong>Casing Running:</strong> أسهل وأسرع</li>
<li><strong>Completion:</strong> أداء إنتاجي أفضل</li>
</ul>
</div>
</div>

<h4 style="color: #2c3e50; margin: 1.5rem 0 1rem 0;">Break-Even Analysis</h4>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<p style="margin-bottom: 1rem;">حساب النقطة التي يصبح فيها RSS مجدياً اقتصادياً:</p>

<div style="background: #fff3e0; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-family: monospace; margin: 0;">
<strong>توفير RSS = </strong>(Days Saved × Rig Rate) - (RSS Cost Premium)<br>
<strong>Break-Even عندما:</strong> Days Saved × Rig Rate = RSS Cost Premium
</p>
</div>

<p style="margin-bottom: 0.5rem;"><strong>مثال:</strong></p>
<ul style="margin: 0; padding-right: 1.25rem; line-height: 1.8;">
<li>Rig Rate: $100,000/day</li>
<li>RSS Premium: $30,000/day (فوق Mud Motor)</li>
<li>RSS توفر 3 أيام في قسم 5,000 ft</li>
<li>التوفير = (3 × $100,000) - (5 × $30,000) = $150,000</li>
<li><strong>النتيجة:</strong> RSS مجدي اقتصادياً في هذا السيناريو</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📊 معايير اختيار RSS</h3>

<div style="background: #f3e5f5; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<h4 style="color: #8e24aa; margin-bottom: 1rem;">متى نختار RSS؟</h4>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
<div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #e1bee7;">
<h5 style="color: #27ae60; margin-bottom: 0.5rem;">✅ RSS مفضل</h5>
<ul style="margin: 0; padding-right: 1rem; font-size: 0.9rem;">
<li>ERD Wells (MD/TVD > 2)</li>
<li>Horizontal wells > 3,000 ft</li>
<li>High Rig Rate (> $80,000/day)</li>
<li>جودة البئر أولوية</li>
<li>تكوينات متغيرة</li>
</ul>
</div>
<div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #e1bee7;">
<h5 style="color: #f39c12; margin-bottom: 0.5rem;">⚠️ Mud Motor قد يكون أفضل</h5>
<ul style="margin: 0; padding-right: 1rem; font-size: 0.9rem;">
<li>آبار رأسية أو J-Type بسيطة</li>
<li>Rig Rate منخفض</li>
<li>أقسام قصيرة (< 2,000 ft)</li>
<li>تكوينات مستقرة صلبة</li>
<li>ميزانية محدودة جداً</li>
</ul>
</div>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">🚀 مقارنة موردي RSS</h3>

<div style="overflow-x: auto; margin-bottom: 1.5rem;">
<table style="width: 100%; border-collapse: collapse; font-size: 0.95rem;">
<thead>
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 1rem; text-align: center; border: 1px solid #334155;">المورد</th>
<th style="padding: 1rem; text-align: center; border: 1px solid #334155;">النظام</th>
<th style="padding: 1rem; text-align: center; border: 1px solid #334155;">النوع</th>
<th style="padding: 1rem; text-align: center; border: 1px solid #334155;">الميزة الرئيسية</th>
</tr>
</thead>
<tbody>
<tr style="background: #f8fafc;">
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">SLB</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">PowerDrive</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">Push & Point</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">تكامل مع LWD</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">Halliburton</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">Geo-Pilot</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">Point-the-Bit</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">DLS عالي</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">Baker Hughes</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">AutoTrak</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">Push-the-Bit</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">موثوقية عالية</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">NOV</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">Vector</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">Hybrid</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">تعدد الأحجام</td>
</tr>
</tbody>
</table>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">🔮 مستقبل تقنية RSS</h3>

<div style="background: #e0f2f1; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<ul style="margin: 0; padding-right: 1.25rem; line-height: 2;">
<li><strong>At-Bit RSS:</strong> الحساسات والتوجيه عند الـ Bit مباشرة</li>
<li><strong>Closed-Loop Geosteering:</strong> توجيه تلقائي بناءً على بيانات LWD</li>
<li><strong>AI Integration:</strong> تحسين المعاملات بالذكاء الاصطناعي</li>
<li><strong>Extended Temperature:</strong> تشغيل في درجات حرارة أعلى (> 175°C)</li>
<li><strong>Smaller Sizes:</strong> أنظمة لأقطار أصغر (< 4")</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-top: 2rem;">
<h4 style="color: #ffd700; margin-bottom: 1rem;">💡 نصيحة للمهندس</h4>
<p style="margin: 0; line-height: 1.8;">
لا تنظر فقط للتكلفة اليومية عند اختيار RSS أو Mud Motor. احسب التكلفة الإجمالية للقسم بما فيها الوقت المتوقع، جودة البئر، ومخاطر المشاكل. في كثير من الحالات، RSS "الأغلى" يوفر المال في المحصلة النهائية.
</p>
</div>
</section>`,
          keyTerms: [
            { term: 'Redress', definition: 'إعادة تأهيل وصيانة أداة RSS بعد كل رحلة حفر' },
            { term: 'Root Cause Analysis (RCA)', definition: 'منهجية تحليل لتحديد السبب الجذري للأعطال' },
            { term: 'Break-Even Point', definition: 'النقطة التي تتساوى فيها تكلفة RSS مع التوفير المحقق' },
            { term: 'At-Bit RSS', definition: 'تقنية مستقبلية تضع الحساسات والتوجيه عند البت مباشرة' },
          ],
          practiceQuestion: {
            question: 'عند مقارنة RSS بـ Mud Motor اقتصادياً، ما هو العامل الأهم في تحديد الجدوى؟',
            options: [
              'تكلفة الأداة اليومية فقط',
              'إجمالي الأيام الموفرة مضروباً في Rig Rate',
              'سعر البترول الحالي',
              'عدد الوصلات في الرحلة'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'RSS Maintenance and Economic Analysis - Day 5',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">🔷 RSS Maintenance</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="color: #f4a261; margin-bottom: 1rem;">📌 Importance of Preventive Maintenance</h3>
<p style="line-height: 1.8;">
RSS systems are expensive investments, and proper maintenance ensures reliable performance and extended operational life. Preventive maintenance reduces unplanned downtime and avoids catastrophic costs of tool failure during drilling.
</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">🔧 Field Redress Operations</h3>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<p style="margin-bottom: 1rem;">Redress is tool rehabilitation after each drilling run:</p>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin-top: 1rem;">
<div style="background: #e8f5e9; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #27ae60; margin-bottom: 0.75rem;">✅ Post-Run Inspections</h4>
<ul style="margin: 0; padding-left: 1.25rem; line-height: 1.8;">
<li>Visual inspection for wear and damage</li>
<li>Measure Pads and Stabilizers dimensions</li>
<li>Test electronics and sensors</li>
<li>Inspect Seals and Bearings</li>
<li>Download and test software</li>
</ul>
</div>
<div style="background: #fff3e0; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #f39c12; margin-bottom: 0.75rem;">⚙️ Replacement Schedule</h4>
<ul style="margin: 0; padding-left: 1.25rem; line-height: 1.8;">
<li><strong>Pads:</strong> Every 50-100 hours based on wear</li>
<li><strong>Bearings:</strong> Every 200-300 hours</li>
<li><strong>Seals:</strong> Every run or as inspected</li>
<li><strong>Electronics:</strong> When faults appear</li>
<li><strong>Batteries:</strong> Based on operating hours</li>
</ul>
</div>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">🔍 Failure Analysis</h3>

<div style="background: #fef2f2; padding: 1.5rem; border-radius: 12px; border-left: 4px solid #dc2626; margin-bottom: 2rem;">
<h4 style="color: #991b1b; margin-bottom: 1rem;">Common Failure Types</h4>

<div style="overflow-x: auto;">
<table style="width: 100%; border-collapse: collapse; font-size: 0.95rem;">
<thead>
<tr style="background: #991b1b; color: white;">
<th style="padding: 1rem; text-align: center; border: 1px solid #7f1d1d;">Failure Type</th>
<th style="padding: 1rem; text-align: left; border: 1px solid #7f1d1d;">Common Causes</th>
<th style="padding: 1rem; text-align: left; border: 1px solid #7f1d1d;">Prevention</th>
</tr>
</thead>
<tbody>
<tr style="background: #fef2f2;">
<td style="padding: 0.75rem; border: 1px solid #fecaca; text-align: center; font-weight: bold;">Electrical</td>
<td style="padding: 0.75rem; border: 1px solid #fecaca;">Overheating, fluid ingress, vibrations</td>
<td style="padding: 0.75rem; border: 1px solid #fecaca;">Maintain Flow Rate, check Seals</td>
</tr>
<tr style="background: #fff;">
<td style="padding: 0.75rem; border: 1px solid #fecaca; text-align: center; font-weight: bold;">Mechanical</td>
<td style="padding: 0.75rem; border: 1px solid #fecaca;">Pad wear, Bearing failure, Washout</td>
<td style="padding: 0.75rem; border: 1px solid #fecaca;">Regular Redress, avoid Vibrations</td>
</tr>
<tr style="background: #fef2f2;">
<td style="padding: 0.75rem; border: 1px solid #fecaca; text-align: center; font-weight: bold;">Hydraulic</td>
<td style="padding: 0.75rem; border: 1px solid #fecaca;">Nozzle plugging, Seal damage, leaks</td>
<td style="padding: 0.75rem; border: 1px solid #fecaca;">Mud filtration, Seal maintenance</td>
</tr>
<tr style="background: #fff;">
<td style="padding: 0.75rem; border: 1px solid #fecaca; text-align: center; font-weight: bold;">Communication</td>
<td style="padding: 0.75rem; border: 1px solid #fecaca;">Downlink failure, signal interference</td>
<td style="padding: 0.75rem; border: 1px solid #fecaca;">Test communication before RIH</td>
</tr>
</tbody>
</table>
</div>
</div>

<h4 style="color: #2c3e50; margin: 1.5rem 0 1rem 0;">Root Cause Analysis (RCA)</h4>

<div style="background: #e3f2fd; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<p style="margin-bottom: 1rem;">When failure occurs, root cause analysis must be performed:</p>
<ol style="margin: 0; padding-left: 1.25rem; line-height: 2;">
<li><strong>Data Collection:</strong> Drilling logs, tool data, operating conditions</li>
<li><strong>Sequence Identification:</strong> What happened immediately before failure?</li>
<li><strong>Cause Analysis:</strong> Why did failure occur (5 Whys)</li>
<li><strong>Recommendations:</strong> Corrective and preventive actions</li>
<li><strong>Documentation:</strong> Record for future reference</li>
</ol>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">💰 Economic Analysis</h3>

<div style="background: linear-gradient(135deg, #059669 0%, #10b981 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<h4 style="margin-bottom: 1rem;">RSS vs Mud Motor: Cost Comparison</h4>
<p style="line-height: 1.8;">
The decision to use RSS or Mud Motor depends on comprehensive economic analysis, not just daily tool cost.
</p>
</div>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
<div style="background: #f0f9ff; padding: 1.5rem; border-radius: 12px; border-left: 4px solid #3498db;">
<h4 style="color: #3498db; margin-bottom: 1rem;">💵 Direct Costs</h4>
<ul style="margin: 0; padding-left: 1.25rem; line-height: 1.8;">
<li><strong>RSS Daily Rate:</strong> $15,000-40,000/day</li>
<li><strong>Mud Motor Rate:</strong> $3,000-8,000/day</li>
<li><strong>Redress Cost:</strong> $5,000-15,000 per run</li>
<li><strong>LWD/MWD:</strong> Similar additional cost</li>
</ul>
</div>
<div style="background: #ecfdf5; padding: 1.5rem; border-radius: 12px; border-left: 4px solid #27ae60;">
<h4 style="color: #27ae60; margin-bottom: 1rem;">📈 RSS Value Added</h4>
<ul style="margin: 0; padding-left: 1.25rem; line-height: 1.8;">
<li><strong>Higher ROP:</strong> 20-40% increase = fewer days</li>
<li><strong>Hole Quality:</strong> Reduced Reaming & Washouts</li>
<li><strong>Casing Running:</strong> Easier and faster</li>
<li><strong>Completion:</strong> Better production performance</li>
</ul>
</div>
</div>

<h4 style="color: #2c3e50; margin: 1.5rem 0 1rem 0;">Break-Even Analysis</h4>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<p style="margin-bottom: 1rem;">Calculating the point where RSS becomes economically viable:</p>

<div style="background: #fff3e0; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-family: monospace; margin: 0;">
<strong>RSS Savings = </strong>(Days Saved × Rig Rate) - (RSS Cost Premium)<br>
<strong>Break-Even when:</strong> Days Saved × Rig Rate = RSS Cost Premium
</p>
</div>

<p style="margin-bottom: 0.5rem;"><strong>Example:</strong></p>
<ul style="margin: 0; padding-left: 1.25rem; line-height: 1.8;">
<li>Rig Rate: $100,000/day</li>
<li>RSS Premium: $30,000/day (over Mud Motor)</li>
<li>RSS saves 3 days in 5,000 ft section</li>
<li>Savings = (3 × $100,000) - (5 × $30,000) = $150,000</li>
<li><strong>Result:</strong> RSS is economically viable in this scenario</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📊 RSS Selection Criteria</h3>

<div style="background: #f3e5f5; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<h4 style="color: #8e24aa; margin-bottom: 1rem;">When to Choose RSS?</h4>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
<div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #e1bee7;">
<h5 style="color: #27ae60; margin-bottom: 0.5rem;">✅ RSS Preferred</h5>
<ul style="margin: 0; padding-left: 1rem; font-size: 0.9rem;">
<li>ERD Wells (MD/TVD > 2)</li>
<li>Horizontal wells > 3,000 ft</li>
<li>High Rig Rate (> $80,000/day)</li>
<li>Hole quality is priority</li>
<li>Variable formations</li>
</ul>
</div>
<div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #e1bee7;">
<h5 style="color: #f39c12; margin-bottom: 0.5rem;">⚠️ Mud Motor May Be Better</h5>
<ul style="margin: 0; padding-left: 1rem; font-size: 0.9rem;">
<li>Vertical or simple J-Type wells</li>
<li>Low Rig Rate</li>
<li>Short sections (< 2,000 ft)</li>
<li>Stable hard formations</li>
<li>Very limited budget</li>
</ul>
</div>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">🚀 RSS Vendor Comparison</h3>

<div style="overflow-x: auto; margin-bottom: 1.5rem;">
<table style="width: 100%; border-collapse: collapse; font-size: 0.95rem;">
<thead>
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 1rem; text-align: center; border: 1px solid #334155;">Vendor</th>
<th style="padding: 1rem; text-align: center; border: 1px solid #334155;">System</th>
<th style="padding: 1rem; text-align: center; border: 1px solid #334155;">Type</th>
<th style="padding: 1rem; text-align: center; border: 1px solid #334155;">Key Advantage</th>
</tr>
</thead>
<tbody>
<tr style="background: #f8fafc;">
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">SLB</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">PowerDrive</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">Push & Point</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">LWD Integration</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">Halliburton</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">Geo-Pilot</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">Point-the-Bit</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">High DLS</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">Baker Hughes</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">AutoTrak</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">Push-the-Bit</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">High Reliability</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">NOV</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">Vector</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">Hybrid</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">Size Variety</td>
</tr>
</tbody>
</table>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">🔮 Future of RSS Technology</h3>

<div style="background: #e0f2f1; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<ul style="margin: 0; padding-left: 1.25rem; line-height: 2;">
<li><strong>At-Bit RSS:</strong> Sensors and steering at the Bit itself</li>
<li><strong>Closed-Loop Geosteering:</strong> Automatic steering based on LWD data</li>
<li><strong>AI Integration:</strong> Parameter optimization with AI</li>
<li><strong>Extended Temperature:</strong> Operation at higher temperatures (> 175°C)</li>
<li><strong>Smaller Sizes:</strong> Systems for smaller diameters (< 4")</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-top: 2rem;">
<h4 style="color: #ffd700; margin-bottom: 1rem;">💡 Engineer's Tip</h4>
<p style="margin: 0; line-height: 1.8;">
Don't just look at daily cost when choosing RSS or Mud Motor. Calculate total section cost including expected time, hole quality, and problem risks. In many cases, the "more expensive" RSS saves money in the final outcome.
</p>
</div>
</section>`,
          keyTerms: [
            { term: 'Redress', definition: 'RSS tool rehabilitation and maintenance after each drilling run' },
            { term: 'Root Cause Analysis (RCA)', definition: 'Analysis methodology to determine the root cause of failures' },
            { term: 'Break-Even Point', definition: 'Point where RSS cost equals the savings achieved' },
            { term: 'At-Bit RSS', definition: 'Future technology placing sensors and steering at the bit itself' },
          ],
          practiceQuestion: {
            question: 'When comparing RSS to Mud Motor economically, what is the most important factor in determining viability?',
            options: [
              'Daily tool cost only',
              'Total days saved multiplied by Rig Rate',
              'Current oil price',
              'Number of connections per run'
            ],
            correctAnswer: 1,
          },
        },
      },
    },
    // Day 6: Quiz
    {
      day: 6,
      type: 'quiz',
      content: {
        ar: {
          title: 'اختبار أنظمة التوجيه الدوارة RSS',
          explanation: 'اختبر معلوماتك حول أنظمة Push-the-Bit و Point-the-Bit',
          keyTerms: [],
        },
        en: {
          title: 'Rotary Steerable Systems (RSS) Quiz',
          explanation: 'Test your knowledge of Push-the-Bit and Point-the-Bit systems',
          keyTerms: [],
        },
      },
      quiz: {
        ar: [
          {
            question: 'ما هو المبدأ الأساسي الذي يميز RSS عن Mud Motors التقليدية؟',
            options: [
              'التوجيه أثناء Sliding فقط',
              'التوجيه أثناء الدوران المستمر لعمود الحفر',
              'استخدام طاقة كهربائية بدلاً من هيدروليكية',
              'عدم الحاجة لأي Stabilizers'
            ],
            correctAnswer: 1,
          },
          {
            question: 'في أنظمة Push-the-Bit، ما الذي يخلق Reactive Side Force؟',
            options: [
              'إمالة محور الـ Bit',
              'دفع الـ Bit ضد جدار البئر من الجانب المقابل للتوجيه',
              'تدوير حلقات غير متمركزة',
              'ثني عمود مرن داخلي'
            ],
            correctAnswer: 1,
          },
          {
            question: 'ما هي الميزة الرئيسية لأنظمة Point-the-Bit في التكوينات الناعمة؟',
            options: [
              'تكلفة أقل',
              'لا تحتاج لتشكيل نقطة ارتكاز (Fulcrum) في جدار البئر',
              'سرعة دوران أعلى',
              'لا تحتاج MWD'
            ],
            correctAnswer: 1,
          },
          {
            question: 'ما هو النطاق النموذجي لـ DLS في أنظمة Push-the-Bit؟',
            options: [
              '1-3°/100ft',
              '3-10°/100ft',
              '15-25°/100ft',
              '30-40°/100ft'
            ],
            correctAnswer: 1,
          },
          {
            question: 'ما هي تقنية Downlink في أنظمة RSS؟',
            options: [
              'إرسال بيانات من الأداة للسطح',
              'إرسال أوامر من السطح للأداة عبر تغيير معاملات الحفر',
              'تحميل الأداة في البئر',
              'قياس عمق البئر'
            ],
            correctAnswer: 1,
          },
          {
            question: 'Counter-Rotating Sleeve في بعض أنظمة Push-the-Bit يستخدم لـ:',
            options: [
              'زيادة سرعة الحفر',
              'الحفاظ على الـ Pads في موقع ثابت جيوستاتيكياً',
              'تقليل تآكل الـ Bit',
              'زيادة Flow Rate'
            ],
            correctAnswer: 1,
          },
          {
            question: 'ما هو أول إجراء عند فقدان استجابة التوجيه في RSS؟',
            options: [
              'POOH فوراً',
              'زيادة WOB لأقصى حد',
              'التحقق من Flow Rate وبيانات الأداة',
              'إيقاف الحفر والانتظار'
            ],
            correctAnswer: 2,
          },
          {
            question: 'Eccentric Rings تستخدم في أي نوع من أنظمة RSS؟',
            options: [
              'Push-the-Bit فقط',
              'Point-the-Bit',
              'كلا النوعين',
              'لا تستخدم في RSS'
            ],
            correctAnswer: 1,
          },
          {
            question: 'ما هو تأثير Sliding المستخدم مع Mud Motors على Hole Cleaning؟',
            options: [
              'يحسن Hole Cleaning',
              'لا تأثير',
              'يقلل Hole Cleaning بسبب عدم الدوران',
              'يعتمد على نوع الطين فقط'
            ],
            correctAnswer: 2,
          },
          {
            question: 'Auto-Hold Mode في RSS يستخدم لـ:',
            options: [
              'زيادة سرعة التوجيه',
              'الحفاظ على الميل والاتجاه الحالي تلقائياً',
              'إيقاف الأداة في حالة الطوارئ',
              'تقليل استهلاك الطاقة'
            ],
            correctAnswer: 1,
          },
        ],
        en: [
          {
            question: 'What is the fundamental principle that distinguishes RSS from conventional Mud Motors?',
            options: [
              'Steering during Sliding only',
              'Steering during continuous drillstring rotation',
              'Using electrical power instead of hydraulic',
              'No need for any Stabilizers'
            ],
            correctAnswer: 1,
          },
          {
            question: 'In Push-the-Bit systems, what creates the Reactive Side Force?',
            options: [
              'Tilting the bit axis',
              'Pushing the bit against wellbore wall opposite to steering direction',
              'Rotating eccentric rings',
              'Bending a flexible internal shaft'
            ],
            correctAnswer: 1,
          },
          {
            question: 'What is the main advantage of Point-the-Bit systems in soft formations?',
            options: [
              'Lower cost',
              'No need to form a fulcrum point in the wellbore wall',
              'Higher rotation speed',
              'No need for MWD'
            ],
            correctAnswer: 1,
          },
          {
            question: 'What is the typical DLS range for Push-the-Bit systems?',
            options: [
              '1-3°/100ft',
              '3-10°/100ft',
              '15-25°/100ft',
              '30-40°/100ft'
            ],
            correctAnswer: 1,
          },
          {
            question: 'What is Downlink technique in RSS systems?',
            options: [
              'Sending data from tool to surface',
              'Sending commands from surface to tool via drilling parameter changes',
              'Running the tool into the well',
              'Measuring well depth'
            ],
            correctAnswer: 1,
          },
          {
            question: 'Counter-Rotating Sleeve in some Push-the-Bit systems is used to:',
            options: [
              'Increase drilling speed',
              'Keep Pads in a fixed geostationary position',
              'Reduce bit wear',
              'Increase Flow Rate'
            ],
            correctAnswer: 1,
          },
          {
            question: 'What is the first action when losing steering response in RSS?',
            options: [
              'POOH immediately',
              'Increase WOB to maximum',
              'Check Flow Rate and tool data',
              'Stop drilling and wait'
            ],
            correctAnswer: 2,
          },
          {
            question: 'Eccentric Rings are used in which type of RSS systems?',
            options: [
              'Push-the-Bit only',
              'Point-the-Bit',
              'Both types',
              'Not used in RSS'
            ],
            correctAnswer: 1,
          },
          {
            question: 'What is the effect of Sliding used with Mud Motors on Hole Cleaning?',
            options: [
              'Improves Hole Cleaning',
              'No effect',
              'Reduces Hole Cleaning due to no rotation',
              'Depends only on mud type'
            ],
            correctAnswer: 2,
          },
          {
            question: 'Auto-Hold Mode in RSS is used to:',
            options: [
              'Increase steering speed',
              'Automatically maintain current inclination and azimuth',
              'Stop the tool in emergency',
              'Reduce power consumption'
            ],
            correctAnswer: 1,
          },
        ],
      },
    },
    // Day 7: Project
    {
      day: 7,
      type: 'project',
      content: {
        ar: {
          title: 'مشروع أنظمة التوجيه الدوارة RSS',
          explanation: 'طبق معرفتك باختيار وتشغيل أنظمة RSS',
          keyTerms: [],
        },
        en: {
          title: 'Rotary Steerable Systems Project',
          explanation: 'Apply your knowledge of RSS selection and operation',
          keyTerms: [],
        },
      },
      project: {
        ar: {
          title: 'دراسة حالة: اختيار نظام RSS للبئر الأفقي',
          description: `لديك بئر أفقي بالمواصفات التالية:
          
• Vertical Section: 3,000 ft في تكوينات صلبة (Limestone/Sandstone)
• Build Section: من 3,000 ft إلى 5,500 ft مع DLS مطلوب 8°/100ft
• Tangent Section: من 5,500 ft إلى 8,000 ft عند Inclination 85°
• Horizontal Section: من 8,000 ft إلى 12,000 ft في تكوين ناعم (Shale) مع Geosteering في طبقة رقيقة (15 ft)
• Target Departure: 9,500 ft
• الميزانية: متوسطة

المطلوب تحليل شامل يتضمن:
1. اختيار نوع RSS المناسب لكل قسم مع التبرير
2. هل ستستخدم نظام واحد لكل البئر أم أكثر؟
3. معاملات التشغيل المقترحة (WOB, RPM, Flow Rate)
4. التحديات المتوقعة في كل قسم وخطة التعامل معها
5. مقارنة تكلفة ووقت مع استخدام Mud Motor + Sliding`,
          instructions: [
            'حلل متطلبات كل قسم من البئر',
            'اختر نظام RSS المناسب (Push-the-Bit أو Point-the-Bit) مع التبرير',
            'حدد معاملات التشغيل لكل قسم',
            'توقع المشاكل المحتملة واقترح حلولاً',
            'قدم مقارنة مع البديل التقليدي',
          ],
          submissionType: 'text',
        },
        en: {
          title: 'Case Study: RSS Selection for Horizontal Well',
          description: `You have a horizontal well with the following specifications:
          
• Vertical Section: 3,000 ft in hard formations (Limestone/Sandstone)
• Build Section: from 3,000 ft to 5,500 ft with required DLS 8°/100ft
• Tangent Section: from 5,500 ft to 8,000 ft at Inclination 85°
• Horizontal Section: from 8,000 ft to 12,000 ft in soft formation (Shale) with Geosteering in thin layer (15 ft)
• Target Departure: 9,500 ft
• Budget: Medium

Required comprehensive analysis including:
1. Select appropriate RSS type for each section with justification
2. Will you use one system for entire well or multiple?
3. Proposed operating parameters (WOB, RPM, Flow Rate)
4. Expected challenges in each section and mitigation plan
5. Cost and time comparison with Mud Motor + Sliding`,
          instructions: [
            'Analyze requirements for each well section',
            'Select appropriate RSS system (Push-the-Bit or Point-the-Bit) with justification',
            'Specify operating parameters for each section',
            'Anticipate potential problems and propose solutions',
            'Provide comparison with conventional alternative',
          ],
          submissionType: 'text',
        },
      },
    },
  ],
};
