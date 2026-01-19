import { WeeklyLesson } from '../weeklyContent';

export const coiledTubingDrillingLesson: WeeklyLesson = {
  lessonId: 'coiled-tubing-drilling',
  days: [
    {
      day: 1,
      type: 'learning',
      content: {
        ar: {
          title: 'الحفر بالأنابيب الملفوفة (Coiled Tubing Drilling) - المفاهيم الأساسية',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 ما هو الحفر بالأنابيب الملفوفة؟</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
الحفر بالأنابيب الملفوفة (Coiled Tubing Drilling - CTD) هو تقنية حفر تستخدم أنبوباً معدنياً مستمراً ملفوفاً على بكرة كبيرة بدلاً من أنابيب الحفر التقليدية المجزأة. يُستخدم هذا الأنبوب للحفر، التنظيف، التحفيز، وعمليات التدخل في الآبار.
</p>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="font-size: 1.25rem; margin-bottom: 1rem;">💡 لماذا CTD؟</h3>
<p style="line-height: 1.8;">الأنابيب الملفوفة تسمح بعمليات مستمرة دون توقف لربط الوصلات، مما يوفر الوقت ويقلل المخاطر. مثالية للآبار تحت الضغط (Live Wells) حيث يمكن الحفر والضخ بشكل مستمر مع الحفاظ على التحكم بالبئر.</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 مكونات نظام الأنابيب الملفوفة</h3>
<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #059669;">
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #059669;">1️⃣ البكرة (Reel)</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li><strong>الوظيفة:</strong> تخزين ولف الأنبوب الملفوف</li>
<li><strong>السعة:</strong> 15,000-30,000 قدم من الأنبوب</li>
<li><strong>القطر:</strong> عادةً 12-20 قدم</li>
<li><strong>تشمل:</strong> نظام الدوران ومحركات اللف</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #059669;">2️⃣ الحاقن (Injector Head)</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li><strong>الوظيفة:</strong> دفع وسحب الأنبوب من/إلى البئر</li>
<li><strong>القوة:</strong> 40,000-100,000 رطل قوة دفع/سحب</li>
<li><strong>سلاسل القيادة:</strong> تمسك الأنبوب بإحكام</li>
<li><strong>التحكم:</strong> سرعة دقيقة للإدخال والسحب</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #059669;">3️⃣ الأنبوب الملفوف (Coiled Tubing)</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li><strong>الأقطار الشائعة:</strong> 1" إلى 3.5"</li>
<li><strong>المادة:</strong> فولاذ عالي القوة أو سبائك خاصة</li>
<li><strong>الطول:</strong> قطعة واحدة متصلة (15,000-30,000 قدم)</li>
<li><strong>العمر الافتراضي:</strong> محدود بسبب إجهاد الانحناء</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #059669;">4️⃣ معدات التحكم بالبئر (Well Control)</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li><strong>BOP Stack:</strong> مانعات انفجار متعددة</li>
<li><strong>Stripper/Packer:</strong> إحكام حول الأنبوب أثناء الحركة</li>
<li><strong>Lubricator:</strong> لإدخال الأدوات تحت الضغط</li>
</ul>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 مقارنة CTD مع الحفر التقليدي</h3>
<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #64748b;">
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background: #e2e8f0;">
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: right;">الجانب</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: right;">الحفر التقليدي</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: right;">CTD</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;">الوصلات</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">أنابيب مجزأة (30-45 قدم)</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">أنبوب مستمر</td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 12px; border: 1px solid #cbd5e1;">وقت الرحلة</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">طويل (ربط/فك)</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">قصير جداً</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;">الحفر تحت الضغط</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">صعب ومعقد</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">ممكن بسهولة</td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 12px; border: 1px solid #cbd5e1;">الدوران</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">من السطح</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">محرك قاع البئر (Mud Motor)</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;">القطر</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">3.5"-6.5"</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">1"-3.5"</td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 12px; border: 1px solid #cbd5e1;">العمق</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">غير محدود تقريباً</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">محدود (15,000-25,000 قدم)</td>
</tr>
</tbody>
</table>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 تطبيقات CTD</h3>
<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #2563eb;">
<ul style="line-height: 2.2; padding-right: 1.5rem;">
<li><strong>حفر الآبار الجانبية (Sidetrack):</strong> حفر فرع جديد من بئر موجود</li>
<li><strong>إعادة الدخول (Re-entry):</strong> الدخول لآبار قديمة وحفر أقسام جديدة</li>
<li><strong>الحفر تحت الضغط (Underbalanced):</strong> الحفاظ على ضغط أقل من المكمن</li>
<li><strong>تنظيف الآبار:</strong> إزالة الرمال والترسبات</li>
<li><strong>التحفيز:</strong> التحميض والتكسير</li>
<li><strong>التسجيل:</strong> إنزال أدوات القياس</li>
<li><strong>الصيد:</strong> استرجاع الأدوات المفقودة</li>
</ul>
</div>

<div style="background: #fee2e2; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #dc2626;">
<h3 style="color: #dc2626; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">⚠️ محددات CTD</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li><strong>لا دوران من السطح:</strong> يعتمد على محركات قاع البئر</li>
<li><strong>قطر محدود:</strong> حفرة أصغر من التقليدي</li>
<li><strong>عمق محدود:</strong> بسبب قوة الأنبوب ووزنه</li>
<li><strong>إجهاد الانحناء:</strong> عمر افتراضي محدود للأنبوب</li>
<li><strong>WOB محدود:</strong> صعوبة نقل الوزن في الأقسام الأفقية</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>CTD يستخدم أنبوباً مستمراً ملفوفاً على بكرة</li>
<li>المكونات: البكرة، الحاقن، الأنبوب، معدات التحكم</li>
<li>مثالي للعمليات تحت الضغط وإعادة الدخول</li>
<li>يعتمد على محركات قاع البئر للدوران</li>
<li>محدود بالقطر والعمق مقارنة بالتقليدي</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Coiled Tubing', definition: 'أنبوب معدني مستمر ملفوف على بكرة' },
            { term: 'Injector Head', definition: 'جهاز دفع وسحب الأنبوب من/إلى البئر' },
            { term: 'Reel', definition: 'بكرة تخزين الأنبوب الملفوف' },
            { term: 'Stripper', definition: 'جهاز إحكام حول الأنبوب أثناء الحركة' },
            { term: 'Mud Motor', definition: 'محرك قاع البئر يعمل بضغط السائل' },
          ],
          practiceQuestion: {
            question: 'لماذا يُستخدم محرك قاع البئر (Mud Motor) في CTD؟',
            options: [
              'لزيادة سرعة الضخ',
              'لأن الأنبوب الملفوف لا يمكن تدويره من السطح',
              'لتقليل التكلفة',
              'لزيادة العمق'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Coiled Tubing Drilling (CTD) - Basic Concepts',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 What is Coiled Tubing Drilling?</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
Coiled Tubing Drilling (CTD) is a drilling technique that uses a continuous metal tube wound on a large reel instead of conventional jointed drill pipe. This tube is used for drilling, cleaning, stimulation, and well intervention operations.
</p>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="font-size: 1.25rem; margin-bottom: 1rem;">💡 Why CTD?</h3>
<p style="line-height: 1.8;">Coiled tubing allows continuous operations without stopping to make connections, saving time and reducing risks. Ideal for live wells where drilling and pumping can continue while maintaining well control.</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Coiled Tubing System Components</h3>
<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #059669;">
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #059669;">1️⃣ Reel</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li><strong>Function:</strong> Store and wind the coiled tubing</li>
<li><strong>Capacity:</strong> 15,000-30,000 ft of tubing</li>
<li><strong>Diameter:</strong> Typically 12-20 ft</li>
<li><strong>Includes:</strong> Rotation system and winding motors</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #059669;">2️⃣ Injector Head</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li><strong>Function:</strong> Push and pull tubing in/out of well</li>
<li><strong>Force:</strong> 40,000-100,000 lbs push/pull force</li>
<li><strong>Drive Chains:</strong> Grip tubing firmly</li>
<li><strong>Control:</strong> Precise speed for insertion and extraction</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #059669;">3️⃣ Coiled Tubing</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li><strong>Common Diameters:</strong> 1" to 3.5"</li>
<li><strong>Material:</strong> High-strength steel or special alloys</li>
<li><strong>Length:</strong> Single continuous piece (15,000-30,000 ft)</li>
<li><strong>Service Life:</strong> Limited due to bending fatigue</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #059669;">4️⃣ Well Control Equipment</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li><strong>BOP Stack:</strong> Multiple blowout preventers</li>
<li><strong>Stripper/Packer:</strong> Seal around tubing during movement</li>
<li><strong>Lubricator:</strong> For inserting tools under pressure</li>
</ul>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 CTD vs Conventional Drilling</h3>
<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #64748b;">
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background: #e2e8f0;">
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: left;">Aspect</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: left;">Conventional</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: left;">CTD</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Connections</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Jointed pipe (30-45 ft)</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Continuous tube</td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 12px; border: 1px solid #cbd5e1;">Trip Time</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Long (make/break)</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Very short</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Underbalanced Drilling</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Difficult and complex</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Easily possible</td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 12px; border: 1px solid #cbd5e1;">Rotation</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">From surface</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Downhole motor (Mud Motor)</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Diameter</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">3.5"-6.5"</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">1"-3.5"</td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 12px; border: 1px solid #cbd5e1;">Depth</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Nearly unlimited</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Limited (15,000-25,000 ft)</td>
</tr>
</tbody>
</table>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 CTD Applications</h3>
<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #2563eb;">
<ul style="line-height: 2.2; padding-left: 1.5rem;">
<li><strong>Sidetrack Drilling:</strong> Drilling new branch from existing well</li>
<li><strong>Re-entry:</strong> Entering old wells and drilling new sections</li>
<li><strong>Underbalanced Drilling:</strong> Maintaining pressure below reservoir</li>
<li><strong>Well Cleaning:</strong> Removing sand and deposits</li>
<li><strong>Stimulation:</strong> Acidizing and fracturing</li>
<li><strong>Logging:</strong> Running measurement tools</li>
<li><strong>Fishing:</strong> Retrieving lost tools</li>
</ul>
</div>

<div style="background: #fee2e2; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #dc2626;">
<h3 style="color: #dc2626; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">⚠️ CTD Limitations</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li><strong>No Surface Rotation:</strong> Relies on downhole motors</li>
<li><strong>Limited Diameter:</strong> Smaller hole than conventional</li>
<li><strong>Limited Depth:</strong> Due to tubing strength and weight</li>
<li><strong>Bending Fatigue:</strong> Limited tubing service life</li>
<li><strong>Limited WOB:</strong> Difficulty transferring weight in horizontal sections</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>CTD uses continuous tube wound on a reel</li>
<li>Components: Reel, Injector, Tubing, Well Control</li>
<li>Ideal for live well operations and re-entry</li>
<li>Relies on downhole motors for rotation</li>
<li>Limited in diameter and depth compared to conventional</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Coiled Tubing', definition: 'Continuous metal tube wound on a reel' },
            { term: 'Injector Head', definition: 'Device for pushing/pulling tubing in/out of well' },
            { term: 'Reel', definition: 'Storage drum for coiled tubing' },
            { term: 'Stripper', definition: 'Seal device around tubing during movement' },
            { term: 'Mud Motor', definition: 'Downhole motor powered by fluid pressure' },
          ],
          practiceQuestion: {
            question: 'Why is a Mud Motor used in CTD?',
            options: [
              'To increase pumping speed',
              'Because coiled tubing cannot be rotated from surface',
              'To reduce cost',
              'To increase depth'
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
          title: 'تجميعة قاع البئر (BHA) في CTD',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 BHA المستخدمة في CTD</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
تجميعة قاع البئر في CTD تختلف عن التقليدية لأنها يجب أن تكون مدمجة (Slim) لتتناسب مع القطر الصغير للأنبوب الملفوف، وتتضمن محرك قاع البئر لتوفير الدوران.
</p>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 مكونات BHA للحفر بـ CTD</h3>
<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #059669;">
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #059669;">1️⃣ البت (Drill Bit)</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li><strong>الأنواع:</strong> PDC, Tricone, أو Impregnated</li>
<li><strong>القطر:</strong> 2-7/8" إلى 6" (أصغر من التقليدي)</li>
<li><strong>اختيار البت:</strong> حسب نوع التكوين</li>
<li><strong>التحمل:</strong> عمر طويل لتقليل الرحلات</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #059669;">2️⃣ محرك قاع البئر (Mud Motor)</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li><strong>النوع:</strong> Positive Displacement Motor (PDM)</li>
<li><strong>الوظيفة:</strong> تحويل ضغط السائل إلى دوران</li>
<li><strong>السرعة:</strong> 50-400 RPM حسب التصميم</li>
<li><strong>العزم:</strong> 500-3000 ft-lbs</li>
<li><strong>Bent Housing:</strong> للتوجيه (0.5-3°)</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #059669;">3️⃣ نظام القياس (MWD)</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li><strong>الميل والاتجاه:</strong> Inclination & Azimuth</li>
<li><strong>Toolface:</strong> اتجاه البناء</li>
<li><strong>Gamma Ray:</strong> للـ Geosteering</li>
<li><strong>الإرسال:</strong> Mud Pulse أو EM Telemetry</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #059669;">4️⃣ أدوات إضافية</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li><strong>Orienting Tool:</strong> لتوجيه الـ Motor</li>
<li><strong>Disconnect:</strong> للفصل في حالة الانحشار</li>
<li><strong>Check Valve:</strong> منع التدفق العكسي</li>
<li><strong>Circulating Sub:</strong> للضخ الجانبي</li>
</ul>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 محرك قاع البئر بالتفصيل</h3>
<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #2563eb;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
محرك PDM هو قلب نظام CTD للحفر. يعمل بمبدأ Moineau pump معكوساً:
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #1e40af;">⚙️ مبدأ العمل:</p>
<ol style="padding-right: 1.5rem; line-height: 2.2;">
<li>السائل يدخل من الأعلى تحت ضغط</li>
<li>يمر عبر Stator (مطاط) و Rotor (معدن) حلزونيين</li>
<li>فرق عدد الفصوص يسبب دوران الـ Rotor</li>
<li>الدوران ينتقل للبت عبر Transmission Shaft</li>
</ol>
</div>
<div style="background: #e0f2fe; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #1e40af;">📊 علاقات مهمة:</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li><strong>زيادة التدفق → زيادة السرعة</strong></li>
<li><strong>زيادة فرق الضغط → زيادة العزم</strong></li>
<li><strong>عدد مراحل أكثر → عزم أعلى</strong></li>
</ul>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 التوجيه في CTD</h3>
<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #f59e0b;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
لأن CTD لا يمكن تدويره من السطح، التوجيه يتم بطرق خاصة:
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #92400e;">🔄 Orienting Tool:</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li>أداة تدور داخلياً لتوجيه الـ Bent Housing</li>
<li>تعمل بالضغط الهيدروليكي أو كهربائياً</li>
<li>تسمح بتغيير الاتجاه دون سحب السلسلة</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #92400e;">📍 أنماط الحفر:</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li><strong>Sliding:</strong> Motor يعمل بدون دوران للسلسلة - للبناء</li>
<li><strong>Rotating (محدود):</strong> بعض الأنظمة تسمح بدوران بطيء للـ CT</li>
</ul>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 ترتيب BHA النموذجي</h3>
<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #64748b;">
<p style="font-weight: bold; margin-bottom: 1rem;">من الأسفل للأعلى:</p>
<ol style="line-height: 2.5; padding-right: 1.5rem;">
<li>Bit (البت)</li>
<li>Bit Sub</li>
<li>Mud Motor</li>
<li>Float Sub (Check Valve)</li>
<li>MWD/LWD</li>
<li>Orienting Tool</li>
<li>Disconnect</li>
<li>Circulating Sub</li>
<li>CT Connector</li>
</ol>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>BHA في CTD يجب أن تكون مدمجة (Slim)</li>
<li>محرك PDM يوفر الدوران بتحويل ضغط السائل</li>
<li>Orienting Tool يسمح بتغيير اتجاه الحفر</li>
<li>MWD ضروري للقياسات والتوجيه</li>
<li>Disconnect مهم للتعامل مع الانحشار</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'PDM', definition: 'Positive Displacement Motor - محرك إزاحة موجبة' },
            { term: 'Orienting Tool', definition: 'أداة لتوجيه الـ Bent Housing دون سحب السلسلة' },
            { term: 'Stator/Rotor', definition: 'مكونات المحرك الحلزونية' },
            { term: 'Disconnect', definition: 'أداة للفصل في حالة الانحشار' },
            { term: 'Sliding Mode', definition: 'الحفر بالمحرك فقط دون دوران السلسلة' },
          ],
          practiceQuestion: {
            question: 'كيف يتم توجيه الحفر في CTD؟',
            options: [
              'بتدوير الأنبوب من السطح',
              'باستخدام Orienting Tool لتوجيه Bent Housing',
              'بتغيير ضغط الطين',
              'بسحب السلسلة وإعادة إدخالها'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Bottom Hole Assembly (BHA) in CTD',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 BHA Used in CTD</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
The bottom hole assembly in CTD differs from conventional because it must be slim to fit the small diameter coiled tubing, and includes a downhole motor to provide rotation.
</p>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 CTD Drilling BHA Components</h3>
<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #059669;">
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #059669;">1️⃣ Drill Bit</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li><strong>Types:</strong> PDC, Tricone, or Impregnated</li>
<li><strong>Diameter:</strong> 2-7/8" to 6" (smaller than conventional)</li>
<li><strong>Bit Selection:</strong> Based on formation type</li>
<li><strong>Durability:</strong> Long life to minimize trips</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #059669;">2️⃣ Mud Motor</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li><strong>Type:</strong> Positive Displacement Motor (PDM)</li>
<li><strong>Function:</strong> Convert fluid pressure to rotation</li>
<li><strong>Speed:</strong> 50-400 RPM depending on design</li>
<li><strong>Torque:</strong> 500-3000 ft-lbs</li>
<li><strong>Bent Housing:</strong> For steering (0.5-3°)</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #059669;">3️⃣ MWD System</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li><strong>Inclination & Azimuth:</strong> Well direction</li>
<li><strong>Toolface:</strong> Build direction</li>
<li><strong>Gamma Ray:</strong> For Geosteering</li>
<li><strong>Transmission:</strong> Mud Pulse or EM Telemetry</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #059669;">4️⃣ Additional Tools</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li><strong>Orienting Tool:</strong> To orient the Motor</li>
<li><strong>Disconnect:</strong> For release in case of stuck</li>
<li><strong>Check Valve:</strong> Prevent backflow</li>
<li><strong>Circulating Sub:</strong> For side pumping</li>
</ul>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Mud Motor in Detail</h3>
<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #2563eb;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
PDM motor is the heart of CTD drilling system. Works on reverse Moineau pump principle:
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #1e40af;">⚙️ Working Principle:</p>
<ol style="padding-left: 1.5rem; line-height: 2.2;">
<li>Fluid enters from top under pressure</li>
<li>Passes through helical Stator (rubber) and Rotor (metal)</li>
<li>Lobe difference causes Rotor rotation</li>
<li>Rotation transfers to bit via Transmission Shaft</li>
</ol>
</div>
<div style="background: #e0f2fe; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #1e40af;">📊 Important Relationships:</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li><strong>Increased Flow → Increased Speed</strong></li>
<li><strong>Increased Differential Pressure → Increased Torque</strong></li>
<li><strong>More Stages → Higher Torque</strong></li>
</ul>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Steering in CTD</h3>
<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #f59e0b;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
Because CTD cannot be rotated from surface, steering is done by special methods:
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #92400e;">🔄 Orienting Tool:</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li>Tool rotates internally to orient Bent Housing</li>
<li>Works hydraulically or electrically</li>
<li>Allows direction change without pulling string</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #92400e;">📍 Drilling Modes:</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li><strong>Sliding:</strong> Motor runs without string rotation - for building</li>
<li><strong>Rotating (limited):</strong> Some systems allow slow CT rotation</li>
</ul>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Typical BHA Arrangement</h3>
<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #64748b;">
<p style="font-weight: bold; margin-bottom: 1rem;">From Bottom to Top:</p>
<ol style="line-height: 2.5; padding-left: 1.5rem;">
<li>Bit</li>
<li>Bit Sub</li>
<li>Mud Motor</li>
<li>Float Sub (Check Valve)</li>
<li>MWD/LWD</li>
<li>Orienting Tool</li>
<li>Disconnect</li>
<li>Circulating Sub</li>
<li>CT Connector</li>
</ol>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>BHA in CTD must be slim</li>
<li>PDM motor provides rotation by converting fluid pressure</li>
<li>Orienting Tool allows changing drilling direction</li>
<li>MWD essential for measurements and steering</li>
<li>Disconnect important for stuck situations</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'PDM', definition: 'Positive Displacement Motor' },
            { term: 'Orienting Tool', definition: 'Tool to orient Bent Housing without pulling string' },
            { term: 'Stator/Rotor', definition: 'Helical motor components' },
            { term: 'Disconnect', definition: 'Tool for release in stuck situations' },
            { term: 'Sliding Mode', definition: 'Drilling with motor only without string rotation' },
          ],
          practiceQuestion: {
            question: 'How is drilling directed in CTD?',
            options: [
              'By rotating tubing from surface',
              'Using Orienting Tool to orient Bent Housing',
              'By changing mud pressure',
              'By pulling and re-inserting string'
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
          title: 'عمليات CTD وإدارة إجهاد الأنبوب',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 إدارة إجهاد الأنبوب الملفوف</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
الأنبوب الملفوف يتعرض لإجهاد فريد بسبب الانحناء المتكرر أثناء اللف والفرد. فهم وإدارة هذا الإجهاد ضروري لسلامة العمليات وإطالة عمر الأنبوب.
</p>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 أنواع الإجهاد في CT</h3>
<div style="background: #fee2e2; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #dc2626;">
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #dc2626;">1️⃣ إجهاد الانحناء (Bending Fatigue)</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li>يحدث عند لف وفرد الأنبوب على البكرة والـ Gooseneck</li>
<li>كل دورة لف/فرد = دورة إجهاد واحدة</li>
<li>السبب الرئيسي لفشل الأنبوب</li>
<li>يُقاس بـ Fatigue Life (عدد الدورات المتبقية)</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #dc2626;">2️⃣ الضغط الداخلي (Internal Pressure)</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li>ضغط السائل داخل الأنبوب</li>
<li>يزيد من إجهاد الجدار</li>
<li>يؤثر على العمر الافتراضي</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #dc2626;">3️⃣ الشد المحوري (Axial Tension)</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li>وزن الأنبوب والأدوات معلقين في البئر</li>
<li>قوى السحب والاحتكاك</li>
<li>يضاف لإجهاد الانحناء</li>
</ul>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 نظام تتبع الإجهاد (Fatigue Tracking)</h3>
<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #059669;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
يُستخدم نظام محوسب لتتبع الإجهاد على طول الأنبوب:
</p>
<ul style="line-height: 2.2; padding-right: 1.5rem;">
<li><strong>تقسيم الأنبوب:</strong> يُقسم لأقسام (مثلاً كل 100 قدم)</li>
<li><strong>تسجيل الدورات:</strong> كل قسم له عداد دورات انحناء</li>
<li><strong>ضغط التشغيل:</strong> يُسجل ضغط كل عملية</li>
<li><strong>حساب العمر المتبقي:</strong> مقارنة الدورات المستهلكة بالإجمالي المسموح</li>
<li><strong>تحديد مناطق الخطر:</strong> الأقسام التي اقتربت من نهاية عمرها</li>
</ul>
<div style="background: #dcfce7; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
<p style="font-weight: bold; color: #059669;">⚠️ قاعدة مهمة:</p>
<p style="line-height: 1.8;">عند وصول أي قسم إلى حد الإجهاد، يجب قطعه واستبداله أو إخراج الأنبوب بالكامل من الخدمة!</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 حدود التشغيل</h3>
<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #2563eb;">
<table style="width: 100%; border-collapse: collapse; background: #fff;">
<thead>
<tr style="background: #e2e8f0;">
<th style="padding: 10px; border: 1px solid #ddd;">الحد</th>
<th style="padding: 10px; border: 1px solid #ddd;">قيمة نموذجية (2" CT)</th>
<th style="padding: 10px; border: 1px solid #ddd;">ملاحظات</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">ضغط الانفجار</td>
<td style="padding: 10px; border: 1px solid #ddd;">12,000-15,000 psi</td>
<td style="padding: 10px; border: 1px solid #ddd;">يقل مع الإجهاد</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">قوة الشد</td>
<td style="padding: 10px; border: 1px solid #ddd;">50,000-80,000 lbs</td>
<td style="padding: 10px; border: 1px solid #ddd;">حسب سماكة الجدار</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">دورات الانحناء</td>
<td style="padding: 10px; border: 1px solid #ddd;">100-500 دورة</td>
<td style="padding: 10px; border: 1px solid #ddd;">حسب الضغط والقطر</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">درجة الحرارة</td>
<td style="padding: 10px; border: 1px solid #ddd;">350-450°F</td>
<td style="padding: 10px; border: 1px solid #ddd;">يؤثر على القوة</td>
</tr>
</tbody>
</table>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 عمليات CTD الميدانية</h3>
<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #f59e0b;">
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #92400e;">🔧 ما قبل العملية:</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li>مراجعة سجل الإجهاد للأنبوب</li>
<li>اختبار الضغط للأنبوب والمعدات</li>
<li>فحص الحاقن والبكرة</li>
<li>تجميع BHA واختبارها</li>
<li>إعداد نظام التحكم بالبئر</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #92400e;">⬇️ أثناء الإدخال:</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li>مراقبة الوزن والضغط باستمرار</li>
<li>تسجيل عمق الأنبوب</li>
<li>الحفاظ على سرعة إدخال مناسبة</li>
<li>مراقبة علامات الانحشار</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #92400e;">⬆️ أثناء السحب:</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li>مراقبة قوة السحب</li>
<li>فحص الأنبوب بصرياً للتآكل أو التلف</li>
<li>تنظيف الأنبوب من الترسبات</li>
<li>تحديث سجل الإجهاد</li>
</ul>
</div>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>إجهاد الانحناء هو السبب الرئيسي لفشل CT</li>
<li>نظام تتبع الإجهاد ضروري لسلامة العمليات</li>
<li>كل قسم من الأنبوب له عمر افتراضي محدود</li>
<li>حدود التشغيل تقل مع تراكم الإجهاد</li>
<li>الفحص والمراقبة المستمرة ضرورية</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Fatigue Life', definition: 'العمر الافتراضي المتبقي للأنبوب بالدورات' },
            { term: 'Bending Cycle', definition: 'دورة لف/فرد واحدة للأنبوب' },
            { term: 'Gooseneck', definition: 'القوس المنحني فوق الحاقن' },
            { term: 'Burst Pressure', definition: 'ضغط الانفجار للأنبوب' },
            { term: 'Fatigue Tracking', definition: 'نظام تتبع إجهاد الأنبوب' },
          ],
          practiceQuestion: {
            question: 'ما هو السبب الرئيسي لفشل الأنبوب الملفوف؟',
            options: [
              'الضغط الداخلي العالي',
              'إجهاد الانحناء المتكرر',
              'التآكل الكيميائي',
              'درجة الحرارة العالية'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'CTD Operations and Tubing Fatigue Management',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Coiled Tubing Fatigue Management</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
Coiled tubing experiences unique fatigue stress due to repeated bending during spooling and unspooling. Understanding and managing this fatigue is essential for operational safety and extending tubing life.
</p>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Types of Stress in CT</h3>
<div style="background: #fee2e2; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #dc2626;">
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #dc2626;">1️⃣ Bending Fatigue</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li>Occurs when spooling/unspooling over reel and Gooseneck</li>
<li>Each spool/unspool cycle = one fatigue cycle</li>
<li>Primary cause of tubing failure</li>
<li>Measured by Fatigue Life (remaining cycles)</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #dc2626;">2️⃣ Internal Pressure</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li>Fluid pressure inside tubing</li>
<li>Increases wall stress</li>
<li>Affects service life</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #dc2626;">3️⃣ Axial Tension</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li>Weight of tubing and tools hanging in well</li>
<li>Drag and friction forces</li>
<li>Adds to bending stress</li>
</ul>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Fatigue Tracking System</h3>
<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #059669;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
A computerized system tracks fatigue along the tubing:
</p>
<ul style="line-height: 2.2; padding-left: 1.5rem;">
<li><strong>Tubing Segmentation:</strong> Divided into sections (e.g., every 100 ft)</li>
<li><strong>Cycle Recording:</strong> Each section has bending cycle counter</li>
<li><strong>Operating Pressure:</strong> Pressure of each operation recorded</li>
<li><strong>Remaining Life Calculation:</strong> Compare consumed cycles to total allowed</li>
<li><strong>Danger Zone Identification:</strong> Sections approaching end of life</li>
</ul>
<div style="background: #dcfce7; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
<p style="font-weight: bold; color: #059669;">⚠️ Important Rule:</p>
<p style="line-height: 1.8;">When any section reaches fatigue limit, it must be cut and replaced or entire tubing retired from service!</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Operating Limits</h3>
<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #2563eb;">
<table style="width: 100%; border-collapse: collapse; background: #fff;">
<thead>
<tr style="background: #e2e8f0;">
<th style="padding: 10px; border: 1px solid #ddd;">Limit</th>
<th style="padding: 10px; border: 1px solid #ddd;">Typical Value (2" CT)</th>
<th style="padding: 10px; border: 1px solid #ddd;">Notes</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">Burst Pressure</td>
<td style="padding: 10px; border: 1px solid #ddd;">12,000-15,000 psi</td>
<td style="padding: 10px; border: 1px solid #ddd;">Decreases with fatigue</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">Tensile Strength</td>
<td style="padding: 10px; border: 1px solid #ddd;">50,000-80,000 lbs</td>
<td style="padding: 10px; border: 1px solid #ddd;">Depends on wall thickness</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">Bending Cycles</td>
<td style="padding: 10px; border: 1px solid #ddd;">100-500 cycles</td>
<td style="padding: 10px; border: 1px solid #ddd;">Depends on pressure and OD</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">Temperature</td>
<td style="padding: 10px; border: 1px solid #ddd;">350-450°F</td>
<td style="padding: 10px; border: 1px solid #ddd;">Affects strength</td>
</tr>
</tbody>
</table>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Field CTD Operations</h3>
<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #f59e0b;">
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #92400e;">🔧 Pre-Job:</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li>Review tubing fatigue record</li>
<li>Pressure test tubing and equipment</li>
<li>Inspect injector and reel</li>
<li>Assemble and test BHA</li>
<li>Rig up well control equipment</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #92400e;">⬇️ During RIH:</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li>Monitor weight and pressure continuously</li>
<li>Record tubing depth</li>
<li>Maintain appropriate running speed</li>
<li>Watch for stuck indicators</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #92400e;">⬆️ During POOH:</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li>Monitor pull force</li>
<li>Visually inspect tubing for wear or damage</li>
<li>Clean tubing of deposits</li>
<li>Update fatigue record</li>
</ul>
</div>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>Bending fatigue is primary cause of CT failure</li>
<li>Fatigue tracking system essential for safety</li>
<li>Each tubing section has limited service life</li>
<li>Operating limits decrease with accumulated fatigue</li>
<li>Continuous inspection and monitoring essential</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Fatigue Life', definition: 'Remaining service life of tubing in cycles' },
            { term: 'Bending Cycle', definition: 'One spool/unspool cycle of tubing' },
            { term: 'Gooseneck', definition: 'Curved arch above injector' },
            { term: 'Burst Pressure', definition: 'Tubing burst pressure' },
            { term: 'Fatigue Tracking', definition: 'Tubing fatigue tracking system' },
          ],
          practiceQuestion: {
            question: 'What is the primary cause of coiled tubing failure?',
            options: [
              'High internal pressure',
              'Repeated bending fatigue',
              'Chemical corrosion',
              'High temperature'
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
          title: 'تطبيقات CTD المتقدمة والتقنيات الخاصة',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 تطبيقات CTD المتقدمة</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
CTD يُستخدم في تطبيقات متنوعة تتجاوز الحفر البسيط. فهم هذه التطبيقات يوسع نطاق استخدام هذه التقنية.
</p>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 CTD مع الحفر تحت الضغط (UBD)</h3>
<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #059669;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
CTD مثالي للحفر تحت الضغط لأنه يسمح بالعمليات المستمرة مع الحفاظ على التحكم:
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #059669;">المزايا في UBD:</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li><strong>الضخ المستمر:</strong> لا توقف لربط الوصلات</li>
<li><strong>Stripper:</strong> يحافظ على الإحكام أثناء الحركة</li>
<li><strong>التحكم السريع:</strong> يمكن السحب بسرعة إذا لزم الأمر</li>
<li><strong>حقن النيتروجين:</strong> لتخفيف وزن السائل</li>
</ul>
</div>
<div style="background: #dcfce7; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #059669;">النظام المتكامل:</p>
<p style="line-height: 1.8;">CT + Snubbing Unit + Separator + Flare = نظام UBD متكامل</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Thru-Tubing Drilling</h3>
<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #2563eb;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
الحفر من خلال أنابيب الإنتاج الموجودة دون إزالتها:
</p>
<ul style="line-height: 2.2; padding-right: 1.5rem;">
<li><strong>الفكرة:</strong> إدخال CT عبر Tubing موجود (مثلاً 2-7/8")</li>
<li><strong>الهدف:</strong> حفر فرع جديد (Sidetrack) أو تعميق البئر</li>
<li><strong>الميزة:</strong> لا حاجة لإزالة Completion الموجود</li>
<li><strong>التحدي:</strong> قطر محدود جداً للـ BHA</li>
<li><strong>البت:</strong> قد يصل لـ 2-3/8" فقط</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Tractors وأنظمة الجر</h3>
<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #f59e0b;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
في الأقسام الأفقية، وزن CT قد لا يكفي للوصول للـ TD. الحل:
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #92400e;">🚜 CT Tractors:</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li>أجهزة ميكانيكية/هيدروليكية تسحب الـ BHA للأمام</li>
<li>تعمل بضغط السائل</li>
<li>عجلات أو أرجل تتمسك بالجدار</li>
<li>قوة جر: 2,000-10,000 lbs</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #92400e;">🔧 Agitators:</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li>اهتزاز لتقليل الاحتكاك</li>
<li>تسمح بتقدم أكثر</li>
<li>مفيدة في الأقسام الأفقية الطويلة</li>
</ul>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 E-Coil (الأنبوب الملفوف الكهربائي)</h3>
<div style="background: #e8f4f8; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
تقنية متقدمة تجمع كابل كهربائي داخل الأنبوب:
</p>
<ul style="line-height: 2.2; padding-right: 1.5rem;">
<li><strong>الفكرة:</strong> كابل كهربائي ممدود داخل CT</li>
<li><strong>المزايا:</strong> طاقة كهربائية لأدوات قاع البئر</li>
<li><strong>الاتصال:</strong> بيانات عالية السرعة (Real-Time)</li>
<li><strong>التطبيقات:</strong> LWD متقدم، أدوات كهربائية</li>
<li><strong>التحدي:</strong> تكلفة عالية، صيانة معقدة</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 تطبيقات أخرى</h3>
<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #64748b;">
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background: #e2e8f0;">
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: right;">التطبيق</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: right;">الوصف</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;"><strong>تنظيف الآبار</strong></td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">إزالة الرمال، الشمع، الأملاح</td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 12px; border: 1px solid #cbd5e1;"><strong>التحميض</strong></td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">ضخ الحمض لتحفيز المكمن</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;"><strong>التكسير</strong></td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">التكسير الهيدروليكي بالـ CT</td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 12px; border: 1px solid #cbd5e1;"><strong>الصيد</strong></td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">استرجاع الأدوات المفقودة</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;"><strong>الطحن</strong></td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">إزالة السدادات والعوائق</td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 12px; border: 1px solid #cbd5e1;"><strong>التسجيل</strong></td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">إنزال أدوات Logging</td>
</tr>
</tbody>
</table>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>CTD مثالي للحفر تحت الضغط (UBD)</li>
<li>Thru-Tubing يسمح بالحفر دون إزالة الإكمال</li>
<li>Tractors تحل مشكلة الوصول في الأفقي</li>
<li>E-Coil يوفر طاقة وبيانات عالية السرعة</li>
<li>تطبيقات CTD متنوعة: تنظيف، تحفيز، صيد</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Thru-Tubing', definition: 'الحفر من خلال أنابيب الإنتاج الموجودة' },
            { term: 'CT Tractor', definition: 'جهاز جر ميكانيكي للـ BHA' },
            { term: 'E-Coil', definition: 'أنبوب ملفوف مع كابل كهربائي داخلي' },
            { term: 'Snubbing Unit', definition: 'وحدة للعمل تحت الضغط' },
            { term: 'Agitator', definition: 'أداة اهتزاز لتقليل الاحتكاك' },
          ],
          practiceQuestion: {
            question: 'ما هو الحل للوصول بـ CTD في الأقسام الأفقية الطويلة؟',
            options: [
              'زيادة الضغط',
              'استخدام Tractors',
              'تقليل وزن الطين',
              'زيادة سرعة الإدخال'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Advanced CTD Applications and Special Techniques',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Advanced CTD Applications</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
CTD is used in diverse applications beyond simple drilling. Understanding these applications expands the scope of this technology.
</p>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 CTD with Underbalanced Drilling (UBD)</h3>
<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #059669;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
CTD is ideal for underbalanced drilling as it allows continuous operations while maintaining control:
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #059669;">UBD Advantages:</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li><strong>Continuous Pumping:</strong> No stops for connections</li>
<li><strong>Stripper:</strong> Maintains seal during movement</li>
<li><strong>Quick Control:</strong> Can pull quickly if needed</li>
<li><strong>Nitrogen Injection:</strong> For lightening fluid weight</li>
</ul>
</div>
<div style="background: #dcfce7; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #059669;">Integrated System:</p>
<p style="line-height: 1.8;">CT + Snubbing Unit + Separator + Flare = Integrated UBD System</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Thru-Tubing Drilling</h3>
<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #2563eb;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
Drilling through existing production tubing without removing it:
</p>
<ul style="line-height: 2.2; padding-left: 1.5rem;">
<li><strong>Concept:</strong> Insert CT through existing Tubing (e.g., 2-7/8")</li>
<li><strong>Goal:</strong> Drill new branch (Sidetrack) or deepen well</li>
<li><strong>Advantage:</strong> No need to remove existing Completion</li>
<li><strong>Challenge:</strong> Very limited BHA diameter</li>
<li><strong>Bit:</strong> May only reach 2-3/8"</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Tractors and Pulling Systems</h3>
<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #f59e0b;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
In horizontal sections, CT weight may not be enough to reach TD. Solution:
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #92400e;">🚜 CT Tractors:</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li>Mechanical/hydraulic devices that pull BHA forward</li>
<li>Powered by fluid pressure</li>
<li>Wheels or legs grip the wall</li>
<li>Pull force: 2,000-10,000 lbs</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #92400e;">🔧 Agitators:</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li>Vibration to reduce friction</li>
<li>Allow further advancement</li>
<li>Useful in long horizontal sections</li>
</ul>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 E-Coil (Electric Coiled Tubing)</h3>
<div style="background: #e8f4f8; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
Advanced technology combining electrical cable inside tubing:
</p>
<ul style="line-height: 2.2; padding-left: 1.5rem;">
<li><strong>Concept:</strong> Electrical cable running inside CT</li>
<li><strong>Advantages:</strong> Electrical power for downhole tools</li>
<li><strong>Communication:</strong> High-speed data (Real-Time)</li>
<li><strong>Applications:</strong> Advanced LWD, electrical tools</li>
<li><strong>Challenge:</strong> High cost, complex maintenance</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Other Applications</h3>
<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #64748b;">
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background: #e2e8f0;">
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: left;">Application</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: left;">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;"><strong>Well Cleaning</strong></td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Removing sand, wax, scale</td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 12px; border: 1px solid #cbd5e1;"><strong>Acidizing</strong></td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Pumping acid for reservoir stimulation</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;"><strong>Fracturing</strong></td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Hydraulic fracturing with CT</td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 12px; border: 1px solid #cbd5e1;"><strong>Fishing</strong></td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Retrieving lost tools</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;"><strong>Milling</strong></td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Removing plugs and obstructions</td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 12px; border: 1px solid #cbd5e1;"><strong>Logging</strong></td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Running logging tools</td>
</tr>
</tbody>
</table>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>CTD ideal for Underbalanced Drilling (UBD)</li>
<li>Thru-Tubing allows drilling without removing completion</li>
<li>Tractors solve reaching problem in horizontal</li>
<li>E-Coil provides power and high-speed data</li>
<li>CTD applications diverse: cleaning, stimulation, fishing</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Thru-Tubing', definition: 'Drilling through existing production tubing' },
            { term: 'CT Tractor', definition: 'Mechanical pulling device for BHA' },
            { term: 'E-Coil', definition: 'Coiled tubing with internal electrical cable' },
            { term: 'Snubbing Unit', definition: 'Unit for working under pressure' },
            { term: 'Agitator', definition: 'Vibration tool to reduce friction' },
          ],
          practiceQuestion: {
            question: 'What is the solution for reaching with CTD in long horizontal sections?',
            options: [
              'Increase pressure',
              'Use Tractors',
              'Reduce mud weight',
              'Increase running speed'
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
          title: 'مراجعة شاملة - الحفر بالأنابيب الملفوفة',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 مراجعة أسبوع CTD</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="font-size: 1.25rem; margin-bottom: 1rem;">📚 ملخص المفاهيم الأساسية</h3>
<p style="line-height: 1.8;">الحفر بالأنابيب الملفوفة (CTD) تقنية تستخدم أنبوباً معدنياً مستمراً ملفوفاً على بكرة. مثالية للعمليات تحت الضغط وإعادة الدخول للآبار. تعتمد على محركات قاع البئر للدوران.</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 اليوم الأول: المفاهيم الأساسية</h3>
<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #059669;">
<ul style="line-height: 2.2; padding-right: 1.5rem;">
<li><strong>المكونات:</strong> البكرة، الحاقن، الأنبوب، معدات التحكم</li>
<li><strong>الأقطار:</strong> 1" إلى 3.5"</li>
<li><strong>الميزة الرئيسية:</strong> عمليات مستمرة دون ربط وصلات</li>
<li><strong>القيد:</strong> لا دوران من السطح - يعتمد على Mud Motor</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 اليوم الثاني: BHA</h3>
<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #2563eb;">
<table style="width: 100%; border-collapse: collapse; background: #fff;">
<thead>
<tr style="background: #e2e8f0;">
<th style="padding: 10px; border: 1px solid #ddd;">المكون</th>
<th style="padding: 10px; border: 1px solid #ddd;">الوظيفة</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">Mud Motor (PDM)</td>
<td style="padding: 10px; border: 1px solid #ddd;">توفير الدوران للبت</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">Orienting Tool</td>
<td style="padding: 10px; border: 1px solid #ddd;">توجيه الحفر</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">MWD</td>
<td style="padding: 10px; border: 1px solid #ddd;">القياسات والتوجيه</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">Disconnect</td>
<td style="padding: 10px; border: 1px solid #ddd;">الفصل عند الانحشار</td>
</tr>
</tbody>
</table>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 اليوم الثالث: إدارة الإجهاد</h3>
<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #f59e0b;">
<ul style="line-height: 2.2; padding-right: 1.5rem;">
<li><strong>السبب الرئيسي للفشل:</strong> إجهاد الانحناء المتكرر</li>
<li><strong>التتبع:</strong> نظام محوسب يتتبع كل قسم</li>
<li><strong>الحد:</strong> 100-500 دورة انحناء حسب الظروف</li>
<li><strong>القاعدة:</strong> قطع واستبدال الأقسام المجهدة</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 اليوم الرابع: التطبيقات المتقدمة</h3>
<div style="background: #fee2e2; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #dc2626;">
<ul style="line-height: 2.2; padding-right: 1.5rem;">
<li><strong>UBD:</strong> مثالي للحفر تحت الضغط</li>
<li><strong>Thru-Tubing:</strong> الحفر من خلال الإكمال الموجود</li>
<li><strong>Tractors:</strong> لحل مشكلة الوصول في الأفقي</li>
<li><strong>E-Coil:</strong> طاقة وبيانات عالية السرعة</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 نقاط رئيسية للاختبار</h3>
<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #7c3aed;">
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>CTD يستخدم Mud Motor للدوران (لا دوران من السطح)</li>
<li>Orienting Tool للتوجيه دون سحب السلسلة</li>
<li>إجهاد الانحناء = السبب الرئيسي للفشل</li>
<li>Tractors للوصول في الأقسام الأفقية</li>
<li>مثالي لـ UBD والعمليات تحت الضغط</li>
</ul>
</div>
</section>`,
          keyTerms: [],
          practiceQuestion: {
            question: 'ما هي الميزة الرئيسية لـ CTD مقارنة بالحفر التقليدي؟',
            options: [
              'قطر أكبر للحفرة',
              'عمق أكبر',
              'عمليات مستمرة دون ربط وصلات',
              'دوران أسرع'
            ],
            correctAnswer: 2,
          },
        },
        en: {
          title: 'Comprehensive Review - Coiled Tubing Drilling',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 CTD Week Review</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="font-size: 1.25rem; margin-bottom: 1rem;">📚 Key Concepts Summary</h3>
<p style="line-height: 1.8;">Coiled Tubing Drilling (CTD) is a technique using continuous metal tube wound on a reel. Ideal for live well operations and well re-entry. Relies on downhole motors for rotation.</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Day 1: Basic Concepts</h3>
<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #059669;">
<ul style="line-height: 2.2; padding-left: 1.5rem;">
<li><strong>Components:</strong> Reel, Injector, Tubing, Well Control</li>
<li><strong>Diameters:</strong> 1" to 3.5"</li>
<li><strong>Main Advantage:</strong> Continuous operations without connections</li>
<li><strong>Limitation:</strong> No surface rotation - relies on Mud Motor</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Day 2: BHA</h3>
<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #2563eb;">
<table style="width: 100%; border-collapse: collapse; background: #fff;">
<thead>
<tr style="background: #e2e8f0;">
<th style="padding: 10px; border: 1px solid #ddd;">Component</th>
<th style="padding: 10px; border: 1px solid #ddd;">Function</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">Mud Motor (PDM)</td>
<td style="padding: 10px; border: 1px solid #ddd;">Provide bit rotation</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">Orienting Tool</td>
<td style="padding: 10px; border: 1px solid #ddd;">Steer drilling</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">MWD</td>
<td style="padding: 10px; border: 1px solid #ddd;">Measurements and steering</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">Disconnect</td>
<td style="padding: 10px; border: 1px solid #ddd;">Release when stuck</td>
</tr>
</tbody>
</table>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Day 3: Fatigue Management</h3>
<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #f59e0b;">
<ul style="line-height: 2.2; padding-left: 1.5rem;">
<li><strong>Primary Failure Cause:</strong> Repeated bending fatigue</li>
<li><strong>Tracking:</strong> Computerized system tracks each section</li>
<li><strong>Limit:</strong> 100-500 bending cycles depending on conditions</li>
<li><strong>Rule:</strong> Cut and replace fatigued sections</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Day 4: Advanced Applications</h3>
<div style="background: #fee2e2; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #dc2626;">
<ul style="line-height: 2.2; padding-left: 1.5rem;">
<li><strong>UBD:</strong> Ideal for underbalanced drilling</li>
<li><strong>Thru-Tubing:</strong> Drilling through existing completion</li>
<li><strong>Tractors:</strong> Solve reaching problem in horizontal</li>
<li><strong>E-Coil:</strong> Power and high-speed data</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Key Points for Quiz</h3>
<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #7c3aed;">
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>CTD uses Mud Motor for rotation (no surface rotation)</li>
<li>Orienting Tool for steering without pulling string</li>
<li>Bending fatigue = primary failure cause</li>
<li>Tractors for reaching in horizontal sections</li>
<li>Ideal for UBD and live well operations</li>
</ul>
</div>
</section>`,
          keyTerms: [],
          practiceQuestion: {
            question: 'What is the main advantage of CTD compared to conventional drilling?',
            options: [
              'Larger hole diameter',
              'Greater depth',
              'Continuous operations without connections',
              'Faster rotation'
            ],
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
          title: 'اختبار الحفر بالأنابيب الملفوفة',
          explanation: 'اختبر معلوماتك حول CTD',
          keyTerms: [],
        },
        en: {
          title: 'Coiled Tubing Drilling Quiz',
          explanation: 'Test your knowledge of CTD',
          keyTerms: [],
        },
      },
      quiz: {
        ar: [
          { question: 'لماذا يُستخدم Mud Motor في CTD؟', options: ['لزيادة الضغط', 'لأن الأنبوب لا يمكن تدويره من السطح', 'لتقليل التكلفة', 'لزيادة العمق'], correctAnswer: 1 },
          { question: 'ما هو السبب الرئيسي لفشل الأنبوب الملفوف؟', options: ['الضغط العالي', 'إجهاد الانحناء المتكرر', 'التآكل', 'الحرارة'], correctAnswer: 1 },
          { question: 'ما هي وظيفة Orienting Tool؟', options: ['قياس الضغط', 'توجيه الحفر دون سحب السلسلة', 'زيادة السرعة', 'تقليل الاحتكاك'], correctAnswer: 1 },
          { question: 'ما هو الحل للوصول في الأقسام الأفقية بـ CTD؟', options: ['زيادة الضغط', 'استخدام Tractors', 'تقليل الوزن', 'زيادة السرعة'], correctAnswer: 1 },
          { question: 'ما هي الميزة الرئيسية لـ CTD في UBD؟', options: ['قطر أكبر', 'عمليات مستمرة مع التحكم بالبئر', 'تكلفة أقل', 'عمق أكبر'], correctAnswer: 1 },
          { question: 'ما هي وظيفة الحاقن (Injector)؟', options: ['ضخ السائل', 'دفع وسحب الأنبوب', 'تخزين الأنبوب', 'التحكم بالضغط'], correctAnswer: 1 },
          { question: 'ما هو E-Coil؟', options: ['نوع من البت', 'أنبوب ملفوف مع كابل كهربائي', 'محرك خاص', 'أداة قياس'], correctAnswer: 1 },
          { question: 'ما هو Thru-Tubing Drilling؟', options: ['الحفر العميق', 'الحفر من خلال أنابيب الإنتاج الموجودة', 'الحفر السريع', 'الحفر الأفقي'], correctAnswer: 1 },
          { question: 'كم عدد دورات الانحناء النموذجي للأنبوب؟', options: ['10-50', '100-500', '1000-5000', '10000+'], correctAnswer: 1 },
          { question: 'ما هي وظيفة Disconnect في BHA؟', options: ['زيادة السرعة', 'الفصل في حالة الانحشار', 'توجيه الحفر', 'قياس الضغط'], correctAnswer: 1 },
        ],
        en: [
          { question: 'Why is Mud Motor used in CTD?', options: ['To increase pressure', 'Because tubing cannot be rotated from surface', 'To reduce cost', 'To increase depth'], correctAnswer: 1 },
          { question: 'What is the primary cause of coiled tubing failure?', options: ['High pressure', 'Repeated bending fatigue', 'Corrosion', 'Heat'], correctAnswer: 1 },
          { question: 'What is the function of Orienting Tool?', options: ['Measure pressure', 'Steer drilling without pulling string', 'Increase speed', 'Reduce friction'], correctAnswer: 1 },
          { question: 'What is the solution for reaching in horizontal sections with CTD?', options: ['Increase pressure', 'Use Tractors', 'Reduce weight', 'Increase speed'], correctAnswer: 1 },
          { question: 'What is the main advantage of CTD in UBD?', options: ['Larger diameter', 'Continuous operations with well control', 'Lower cost', 'Greater depth'], correctAnswer: 1 },
          { question: 'What is the function of Injector?', options: ['Pump fluid', 'Push and pull tubing', 'Store tubing', 'Control pressure'], correctAnswer: 1 },
          { question: 'What is E-Coil?', options: ['Type of bit', 'Coiled tubing with electrical cable', 'Special motor', 'Measurement tool'], correctAnswer: 1 },
          { question: 'What is Thru-Tubing Drilling?', options: ['Deep drilling', 'Drilling through existing production tubing', 'Fast drilling', 'Horizontal drilling'], correctAnswer: 1 },
          { question: 'What is typical number of bending cycles for tubing?', options: ['10-50', '100-500', '1000-5000', '10000+'], correctAnswer: 1 },
          { question: 'What is the function of Disconnect in BHA?', options: ['Increase speed', 'Release when stuck', 'Steer drilling', 'Measure pressure'], correctAnswer: 1 },
        ],
      },
    },
    {
      day: 7,
      type: 'project',
      content: {
        ar: {
          title: 'مشروع CTD',
          explanation: 'طبق ما تعلمته في مشروع عملي',
          keyTerms: [],
        },
        en: {
          title: 'CTD Project',
          explanation: 'Apply what you learned in a practical project',
          keyTerms: [],
        },
      },
      project: {
        ar: {
          title: 'تخطيط عملية إعادة دخول بـ CTD',
          description: 'أنت مهندس مكلف بتخطيط عملية إعادة دخول لبئر قديم باستخدام CTD. البئر بعمق 12,000 قدم TVD مع قسم أفقي 3,000 قدم. الهدف هو حفر Sidetrack جديد بطول 2,000 قدم.',
          instructions: [
            'حدد مواصفات الأنبوب الملفوف المطلوب (القطر، الطول)',
            'صمم BHA المناسبة مع شرح وظيفة كل مكون',
            'اشرح كيف ستتعامل مع الوصول للقسم الأفقي',
            'حدد اعتبارات إدارة إجهاد الأنبوب',
            'اذكر المخاطر المحتملة وإجراءات السلامة',
          ],
          submissionType: 'text',
        },
        en: {
          title: 'Planning CTD Re-entry Operation',
          description: 'You are an engineer tasked with planning a well re-entry operation using CTD. The well is 12,000 ft TVD with a 3,000 ft horizontal section. Goal is to drill a new 2,000 ft sidetrack.',
          instructions: [
            'Specify required coiled tubing specifications (diameter, length)',
            'Design appropriate BHA with explanation of each component function',
            'Explain how you will handle reaching the horizontal section',
            'Identify tubing fatigue management considerations',
            'List potential risks and safety procedures',
          ],
          submissionType: 'text',
        },
      },
    },
  ],
};
