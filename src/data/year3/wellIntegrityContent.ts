import { WeeklyLesson } from '../weeklyContent';

export const wellIntegrityLesson: WeeklyLesson = {
  lessonId: 'well-integrity',
  days: [
    {
      day: 1,
      type: 'learning',
      content: {
        ar: {
          title: 'إدارة سلامة البئر - المفاهيم الأساسية وفلسفة الحواجز',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 مقدمة في سلامة البئر - Well Integrity Fundamentals</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<p style="font-size: 1.1rem; margin: 0;">
<strong>سلامة البئر (Well Integrity)</strong> هي تطبيق الحلول التقنية والتشغيلية والتنظيمية لضمان احتواء السوائل داخل البئر طوال دورة حياته - من الحفر حتى الإغلاق النهائي - مع حماية الأفراد والبيئة والأصول.
</p>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">📊 تعريف NORSOK D-010</h3>
<div style="background: #fff3e0; padding: 1.25rem; border-radius: 10px; border-right: 4px solid #ff6b35; margin-bottom: 1.5rem;">
<p style="margin: 0; line-height: 1.8;">
معيار <strong>NORSOK D-010</strong> يُعرّف سلامة البئر بأنها: "تطبيق الحلول التقنية والتشغيلية والتنظيمية للحد من مخاطر التسرب غير المنضبط للسوائل من التكوين خلال دورة حياة البئر." هذا يشمل ثلاثة محاور: <strong>التصميم (Design)</strong>، <strong>التشغيل (Operations)</strong>، و<strong>الإدارة (Management)</strong>.
</p>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">🛡️ فلسفة الحواجز المزدوجة - Dual Barrier Philosophy</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
المبدأ الأساسي في سلامة البئر هو وجود <strong>حاجزين مستقلين</strong> على الأقل بين مصدر الضغط (التكوين) والبيئة الخارجية في جميع الأوقات:
</p>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">
<div style="background: #e3f2fd; padding: 1.25rem; border-radius: 10px; border-top: 4px solid #1976d2;">
<h4 style="color: #1976d2; margin-bottom: 0.75rem;">🔵 الحاجز الأولي - Primary Barrier</h4>
<ul style="margin: 0; padding-right: 1.25rem; line-height: 1.8;">
<li>أول خط دفاع ضد التدفق غير المنضبط</li>
<li>يشمل: سائل الحفر، Cement، أنابيب التغليف</li>
<li>يتحمل الضغط بشكل مباشر</li>
<li>فشله يؤدي لتفعيل الحاجز الثانوي</li>
</ul>
</div>
<div style="background: #fce4ec; padding: 1.25rem; border-radius: 10px; border-top: 4px solid #c2185b;">
<h4 style="color: #c2185b; margin-bottom: 0.75rem;">🔴 الحاجز الثانوي - Secondary Barrier</h4>
<ul style="margin: 0; padding-right: 1.25rem; line-height: 1.8;">
<li>خط الدفاع الاحتياطي</li>
<li>يشمل: BOP، Casing، Wellhead</li>
<li>يعمل عند فشل الحاجز الأولي</li>
<li>يجب أن يكون مستقلاً تماماً</li>
</ul>
</div>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">📐 عناصر الحاجز - Barrier Elements</h3>
<div style="background: #f5f5f5; padding: 1.25rem; border-radius: 10px; margin-bottom: 1.5rem;">
<p style="margin-bottom: 1rem; line-height: 1.8;">
<strong>عنصر الحاجز (Barrier Element)</strong> هو أي مكون يساهم في منع التدفق غير المنضبط. يجب أن يكون كل عنصر:
</p>
<ul style="margin: 0; padding-right: 1.25rem; line-height: 1.8;">
<li><strong>قابل للاختبار (Testable):</strong> يمكن التحقق من سلامته بطريقة موضوعية</li>
<li><strong>قابل للتحقق (Verifiable):</strong> يمكن مراقبة حالته أثناء التشغيل</li>
<li><strong>مستقل (Independent):</strong> لا يعتمد على عناصر أخرى في نفس الحاجز</li>
<li><strong>موثوق (Reliable):</strong> يؤدي وظيفته المطلوبة عند الحاجة</li>
</ul>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">🔄 دورة حياة البئر - Well Life Cycle Phases</h3>
<table style="width: 100%; border-collapse: collapse; margin-bottom: 1.5rem; font-size: 0.95rem;">
<thead>
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 0.75rem; text-align: right; border: 1px solid #ddd;">المرحلة</th>
<th style="padding: 0.75rem; text-align: right; border: 1px solid #ddd;">Phase</th>
<th style="padding: 0.75rem; text-align: right; border: 1px solid #ddd;">متطلبات السلامة الرئيسية</th>
</tr>
</thead>
<tbody>
<tr style="background: #f8f9fa;">
<td style="padding: 0.75rem; border: 1px solid #ddd;">التصميم</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Design</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">تحديد الحواجز، اختيار المواد، تصميم Casing</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ddd;">الحفر</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Drilling</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">التحكم في الضغط، اختبار BOP، جودة الإسمنت</td>
</tr>
<tr style="background: #f8f9fa;">
<td style="padding: 0.75rem; border: 1px solid #ddd;">الإكمال</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Completion</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">اختبار Tubing، تركيب Packer، اختبار الضغط</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ddd;">الإنتاج</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Production</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">مراقبة الحلقات، فحص التآكل، صيانة الصمامات</td>
</tr>
<tr style="background: #f8f9fa;">
<td style="padding: 0.75rem; border: 1px solid #ddd;">التدخل</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Intervention</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">إدارة التغيير، تقييم المخاطر، استعادة الحواجز</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ddd;">الإغلاق</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">P&A</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">سدادات إسمنتية دائمة، إزالة المعدات، التحقق النهائي</td>
</tr>
</tbody>
</table>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">⚠️ تصنيف حالات فشل السلامة - Integrity Failure Categories</h3>
<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 1.5rem;">
<div style="background: #c8e6c9; padding: 1rem; border-radius: 10px; text-align: center;">
<h4 style="color: #2e7d32; margin-bottom: 0.5rem;">🟢 أخضر - Green</h4>
<p style="margin: 0; font-size: 0.9rem;">حاجزان سليمان ومُختَبران</p>
<p style="margin: 0.5rem 0 0; font-size: 0.85rem; color: #555;">العمليات الطبيعية مستمرة</p>
</div>
<div style="background: #fff9c4; padding: 1rem; border-radius: 10px; text-align: center;">
<h4 style="color: #f9a825; margin-bottom: 0.5rem;">🟡 أصفر - Yellow</h4>
<p style="margin: 0; font-size: 0.9rem;">حاجز واحد مُشكوك فيه</p>
<p style="margin: 0.5rem 0 0; font-size: 0.85rem; color: #555;">يتطلب تقييم وإجراء تصحيحي</p>
</div>
<div style="background: #ffcdd2; padding: 1rem; border-radius: 10px; text-align: center;">
<h4 style="color: #c62828; margin-bottom: 0.5rem;">🔴 أحمر - Red</h4>
<p style="margin: 0; font-size: 0.9rem;">فشل حاجز أو أكثر</p>
<p style="margin: 0.5rem 0 0; font-size: 0.85rem; color: #555;">إيقاف فوري وإجراءات طوارئ</p>
</div>
</div>

<div style="background: #e8f5e9; padding: 1.25rem; border-radius: 10px; margin-top: 1.5rem;">
<h4 style="color: #2e7d32; margin-bottom: 0.75rem;">📌 ملخص اليوم الأول</h4>
<ul style="margin: 0; padding-right: 1.25rem; line-height: 1.8;">
<li>سلامة البئر تعني احتواء السوائل من التكوين حتى السطح طوال عمر البئر</li>
<li>فلسفة الحواجز المزدوجة تتطلب حاجزين مستقلين دائماً</li>
<li>كل عنصر حاجز يجب أن يكون قابلاً للاختبار والتحقق</li>
<li>تصنيف الحالة (أخضر/أصفر/أحمر) يحدد الإجراءات المطلوبة</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Well Integrity', definition: 'تطبيق الحلول للحد من مخاطر التسرب غير المنضبط من البئر' },
            { term: 'Dual Barrier Philosophy', definition: 'مبدأ وجود حاجزين مستقلين بين مصدر الضغط والبيئة' },
            { term: 'Primary Barrier', definition: 'خط الدفاع الأول ضد التدفق غير المنضبط' },
            { term: 'Secondary Barrier', definition: 'خط الدفاع الاحتياطي عند فشل الحاجز الأولي' },
            { term: 'Barrier Element', definition: 'أي مكون يساهم في منع التدفق غير المنضبط' },
          ],
          practiceQuestion: {
            question: 'ما هو المبدأ الأساسي في فلسفة سلامة البئر وفقاً لمعيار NORSOK D-010؟',
            options: [
              'وجود حاجز واحد قوي',
              'وجود حاجزين مستقلين على الأقل',
              'الاعتماد على BOP فقط',
              'استخدام سائل حفر ثقيل'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Well Integrity Management - Fundamentals and Barrier Philosophy',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Well Integrity Fundamentals</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<p style="font-size: 1.1rem; margin: 0;">
<strong>Well Integrity</strong> is the application of technical, operational, and organizational solutions to ensure fluid containment within the wellbore throughout its life cycle - from drilling to final abandonment - while protecting people, environment, and assets.
</p>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">📊 NORSOK D-010 Definition</h3>
<div style="background: #fff3e0; padding: 1.25rem; border-radius: 10px; border-left: 4px solid #ff6b35; margin-bottom: 1.5rem;">
<p style="margin: 0; line-height: 1.8;">
The <strong>NORSOK D-010</strong> standard defines well integrity as: "Application of technical, operational, and organizational solutions to reduce risk of uncontrolled release of formation fluids throughout the well life cycle." This encompasses three pillars: <strong>Design</strong>, <strong>Operations</strong>, and <strong>Management</strong>.
</p>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">🛡️ Dual Barrier Philosophy</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
The fundamental principle in well integrity is having <strong>at least two independent barriers</strong> between the pressure source (formation) and the external environment at all times:
</p>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">
<div style="background: #e3f2fd; padding: 1.25rem; border-radius: 10px; border-top: 4px solid #1976d2;">
<h4 style="color: #1976d2; margin-bottom: 0.75rem;">🔵 Primary Barrier</h4>
<ul style="margin: 0; padding-left: 1.25rem; line-height: 1.8;">
<li>First line of defense against uncontrolled flow</li>
<li>Includes: drilling fluid, cement, casing</li>
<li>Directly contains formation pressure</li>
<li>Failure activates secondary barrier</li>
</ul>
</div>
<div style="background: #fce4ec; padding: 1.25rem; border-radius: 10px; border-top: 4px solid #c2185b;">
<h4 style="color: #c2185b; margin-bottom: 0.75rem;">🔴 Secondary Barrier</h4>
<ul style="margin: 0; padding-left: 1.25rem; line-height: 1.8;">
<li>Backup line of defense</li>
<li>Includes: BOP, casing, wellhead</li>
<li>Activates when primary barrier fails</li>
<li>Must be completely independent</li>
</ul>
</div>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">📐 Barrier Elements</h3>
<div style="background: #f5f5f5; padding: 1.25rem; border-radius: 10px; margin-bottom: 1.5rem;">
<p style="margin-bottom: 1rem; line-height: 1.8;">
A <strong>Barrier Element</strong> is any component contributing to preventing uncontrolled flow. Each element must be:
</p>
<ul style="margin: 0; padding-left: 1.25rem; line-height: 1.8;">
<li><strong>Testable:</strong> Can be objectively verified for integrity</li>
<li><strong>Verifiable:</strong> Status can be monitored during operations</li>
<li><strong>Independent:</strong> Does not rely on other elements in same barrier</li>
<li><strong>Reliable:</strong> Performs required function when needed</li>
</ul>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">🔄 Well Life Cycle Phases</h3>
<table style="width: 100%; border-collapse: collapse; margin-bottom: 1.5rem; font-size: 0.95rem;">
<thead>
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Phase</th>
<th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Key Integrity Requirements</th>
</tr>
</thead>
<tbody>
<tr style="background: #f8f9fa;">
<td style="padding: 0.75rem; border: 1px solid #ddd;">Design</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Barrier identification, material selection, casing design</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Drilling</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Pressure control, BOP testing, cement quality</td>
</tr>
<tr style="background: #f8f9fa;">
<td style="padding: 0.75rem; border: 1px solid #ddd;">Completion</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Tubing testing, packer installation, pressure testing</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Production</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Annulus monitoring, corrosion inspection, valve maintenance</td>
</tr>
<tr style="background: #f8f9fa;">
<td style="padding: 0.75rem; border: 1px solid #ddd;">Intervention</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Management of change, risk assessment, barrier restoration</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ddd;">P&A</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Permanent cement plugs, equipment removal, final verification</td>
</tr>
</tbody>
</table>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">⚠️ Integrity Failure Categories</h3>
<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 1.5rem;">
<div style="background: #c8e6c9; padding: 1rem; border-radius: 10px; text-align: center;">
<h4 style="color: #2e7d32; margin-bottom: 0.5rem;">🟢 Green</h4>
<p style="margin: 0; font-size: 0.9rem;">Two barriers intact and tested</p>
<p style="margin: 0.5rem 0 0; font-size: 0.85rem; color: #555;">Normal operations continue</p>
</div>
<div style="background: #fff9c4; padding: 1rem; border-radius: 10px; text-align: center;">
<h4 style="color: #f9a825; margin-bottom: 0.5rem;">🟡 Yellow</h4>
<p style="margin: 0; font-size: 0.9rem;">One barrier questionable</p>
<p style="margin: 0.5rem 0 0; font-size: 0.85rem; color: #555;">Requires assessment and corrective action</p>
</div>
<div style="background: #ffcdd2; padding: 1rem; border-radius: 10px; text-align: center;">
<h4 style="color: #c62828; margin-bottom: 0.5rem;">🔴 Red</h4>
<p style="margin: 0; font-size: 0.9rem;">One or more barriers failed</p>
<p style="margin: 0.5rem 0 0; font-size: 0.85rem; color: #555;">Immediate shutdown and emergency actions</p>
</div>
</div>

<div style="background: #e8f5e9; padding: 1.25rem; border-radius: 10px; margin-top: 1.5rem;">
<h4 style="color: #2e7d32; margin-bottom: 0.75rem;">📌 Day 1 Summary</h4>
<ul style="margin: 0; padding-left: 1.25rem; line-height: 1.8;">
<li>Well integrity means containing formation fluids throughout well life</li>
<li>Dual barrier philosophy requires two independent barriers at all times</li>
<li>Each barrier element must be testable and verifiable</li>
<li>Status classification (green/yellow/red) determines required actions</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Well Integrity', definition: 'Application of solutions to reduce risk of uncontrolled release from the well' },
            { term: 'Dual Barrier Philosophy', definition: 'Principle of having two independent barriers between pressure source and environment' },
            { term: 'Primary Barrier', definition: 'First line of defense against uncontrolled flow' },
            { term: 'Secondary Barrier', definition: 'Backup defense line when primary barrier fails' },
            { term: 'Barrier Element', definition: 'Any component contributing to preventing uncontrolled flow' },
          ],
          practiceQuestion: {
            question: 'What is the fundamental principle of well integrity according to NORSOK D-010?',
            options: [
              'Having one strong barrier',
              'Having at least two independent barriers',
              'Relying on BOP only',
              'Using heavy drilling fluid'
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
          title: 'مخططات الحواجز وإدارة ضغط الحلقات',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 مخططات الحواجز - Barrier Diagrams</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<p style="font-size: 1.1rem; margin: 0;">
<strong>مخطط الحواجز (Barrier Diagram)</strong> هو تمثيل رسومي يوضح جميع عناصر الحواجز الأولية والثانوية في البئر، ويُستخدم للتحقق من استيفاء متطلبات الحواجز المزدوجة في كل مرحلة من مراحل حياة البئر.
</p>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">📊 أنواع مخططات الحواجز</h3>
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">
<div style="background: #e3f2fd; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #1976d2; margin-bottom: 0.75rem;">🔷 Bow-Tie Diagram</h4>
<ul style="margin: 0; padding-right: 1.25rem; line-height: 1.8;">
<li>يُظهر العلاقة بين المخاطر والحواجز</li>
<li>الجانب الأيسر: أسباب محتملة للفشل</li>
<li>المركز: الحدث الخطير (Loss of Containment)</li>
<li>الجانب الأيمن: عواقب محتملة</li>
</ul>
</div>
<div style="background: #fff3e0; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #ff6b35; margin-bottom: 0.75rem;">📐 Well Barrier Schematic</h4>
<ul style="margin: 0; padding-right: 1.25rem; line-height: 1.8;">
<li>مقطع رأسي للبئر يوضح الحواجز</li>
<li>الحاجز الأولي بلون مميز (أحمر عادة)</li>
<li>الحاجز الثانوي بلون مختلف (أزرق عادة)</li>
<li>يوضح تداخل العناصر ونقاط الاتصال</li>
</ul>
</div>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">🔄 عناصر الحاجز في مراحل البئر المختلفة</h3>

<h4 style="color: #1e3a5f; font-size: 1.1rem; margin: 1rem 0;">خلال الحفر - During Drilling:</h4>
<table style="width: 100%; border-collapse: collapse; margin-bottom: 1.5rem; font-size: 0.95rem;">
<thead>
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 0.75rem; text-align: right; border: 1px solid #ddd;">الحاجز الأولي</th>
<th style="padding: 0.75rem; text-align: right; border: 1px solid #ddd;">الحاجز الثانوي</th>
</tr>
</thead>
<tbody>
<tr style="background: #ffebee;">
<td style="padding: 0.75rem; border: 1px solid #ddd;">Drilling Fluid (Hydrostatic Pressure)</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">BOP Stack</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Casing Cement</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Casing String</td>
</tr>
<tr style="background: #ffebee;">
<td style="padding: 0.75rem; border: 1px solid #ddd;">Openhole Formation</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Wellhead Housing</td>
</tr>
</tbody>
</table>

<h4 style="color: #1e3a5f; font-size: 1.1rem; margin: 1rem 0;">خلال الإنتاج - During Production:</h4>
<table style="width: 100%; border-collapse: collapse; margin-bottom: 1.5rem; font-size: 0.95rem;">
<thead>
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 0.75rem; text-align: right; border: 1px solid #ddd;">الحاجز الأولي</th>
<th style="padding: 0.75rem; text-align: right; border: 1px solid #ddd;">الحاجز الثانوي</th>
</tr>
</thead>
<tbody>
<tr style="background: #e3f2fd;">
<td style="padding: 0.75rem; border: 1px solid #ddd;">Production Tubing</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Production Casing</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Production Packer</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Annulus Fluid</td>
</tr>
<tr style="background: #e3f2fd;">
<td style="padding: 0.75rem; border: 1px solid #ddd;">Tubing Hanger</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Casing Hanger</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Surface Safety Valve (SSV)</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Wellhead & Christmas Tree</td>
</tr>
<tr style="background: #e3f2fd;">
<td style="padding: 0.75rem; border: 1px solid #ddd;">DHSV (Downhole Safety Valve)</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Cement behind Casing</td>
</tr>
</tbody>
</table>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">📏 إدارة ضغط الحلقات - Annulus Pressure Management</h3>

<div style="background: #fff3e0; padding: 1.25rem; border-radius: 10px; border-right: 4px solid #ff6b35; margin-bottom: 1.5rem;">
<h4 style="color: #e65100; margin-bottom: 0.75rem;">⚠️ Sustained Casing Pressure (SCP)</h4>
<p style="margin: 0; line-height: 1.8;">
<strong>SCP</strong> هو ضغط في حلقة واحدة أو أكثر يتراكم بعد التنفيس ولا يمكن نزفه بشكل كامل. يشير إلى وجود تسرب في أحد عناصر الحاجز ويتطلب تقييماً فورياً لتحديد مصدر التسرب.
</p>
</div>

<h4 style="color: #1e3a5f; font-size: 1.1rem; margin: 1rem 0;">تصنيف الحلقات - Annulus Classification:</h4>
<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-bottom: 1.5rem;">
<div style="background: #e8f5e9; padding: 1rem; border-radius: 8px;">
<h5 style="color: #2e7d32; margin-bottom: 0.5rem;">A-Annulus (Tubing-Casing)</h5>
<p style="margin: 0; font-size: 0.9rem;">بين Tubing و Production Casing - الأكثر مراقبة</p>
</div>
<div style="background: #e3f2fd; padding: 1rem; border-radius: 8px;">
<h5 style="color: #1976d2; margin-bottom: 0.5rem;">B-Annulus</h5>
<p style="margin: 0; font-size: 0.9rem;">بين Production Casing و Intermediate Casing</p>
</div>
<div style="background: #fff3e0; padding: 1rem; border-radius: 8px;">
<h5 style="color: #ff6b35; margin-bottom: 0.5rem;">C-Annulus</h5>
<p style="margin: 0; font-size: 0.9rem;">بين Intermediate و Surface Casing</p>
</div>
<div style="background: #fce4ec; padding: 1rem; border-radius: 8px;">
<h5 style="color: #c2185b; margin-bottom: 0.5rem;">D-Annulus وأبعد</h5>
<p style="margin: 0; font-size: 0.9rem;">الحلقات الخارجية الإضافية</p>
</div>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">📊 معايير تقييم SCP</h3>
<div style="background: #f5f5f5; padding: 1.25rem; border-radius: 10px; margin-bottom: 1.5rem;">
<table style="width: 100%; border-collapse: collapse; font-size: 0.95rem;">
<thead>
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 0.75rem; text-align: right; border: 1px solid #ddd;">المعيار</th>
<th style="padding: 0.75rem; text-align: right; border: 1px solid #ddd;">القيمة الحرجة</th>
<th style="padding: 0.75rem; text-align: right; border: 1px solid #ddd;">الإجراء المطلوب</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ddd;">معدل التراكم</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">> 100 psi/24hr</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">تحقيق فوري</td>
</tr>
<tr style="background: #f8f9fa;">
<td style="padding: 0.75rem; border: 1px solid #ddd;">الضغط الأقصى</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">> 80% MAASP</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">إجراء تصحيحي</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ddd;">نوع السائل المتسرب</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">غاز (خاصة H₂S)</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">أولوية قصوى</td>
</tr>
</tbody>
</table>
</div>

<div style="background: #ffebee; padding: 1.25rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #c62828; margin-bottom: 0.75rem;">🔴 MAASP - Maximum Allowable Annulus Surface Pressure</h4>
<p style="margin: 0; line-height: 1.8;">
أقصى ضغط سطحي مسموح به في الحلقة = أقل قيمة من:
</p>
<ul style="margin: 0.5rem 0 0; padding-right: 1.25rem; line-height: 1.8;">
<li>80% من ضغط انفجار الأنبوب الداخلي</li>
<li>80% من ضغط انهيار الأنبوب الخارجي</li>
<li>ضغط التكسير للتكوين المكشوف - الضغط الهيدروستاتيكي</li>
</ul>
</div>

<div style="background: #e8f5e9; padding: 1.25rem; border-radius: 10px; margin-top: 1.5rem;">
<h4 style="color: #2e7d32; margin-bottom: 0.75rem;">📌 ملخص اليوم الثاني</h4>
<ul style="margin: 0; padding-right: 1.25rem; line-height: 1.8;">
<li>مخططات الحواجز توفر رؤية واضحة لجميع عناصر السلامة</li>
<li>تختلف عناصر الحواجز حسب مرحلة حياة البئر</li>
<li>SCP يشير إلى مشكلة سلامة تتطلب تقييماً</li>
<li>MAASP يحدد الحد الأقصى للضغط المسموح في كل حلقة</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Barrier Diagram', definition: 'تمثيل رسومي لعناصر الحواجز الأولية والثانوية في البئر' },
            { term: 'Sustained Casing Pressure', definition: 'ضغط متراكم في الحلقة لا يمكن نزفه بالكامل' },
            { term: 'MAASP', definition: 'أقصى ضغط سطحي مسموح به في الحلقة' },
            { term: 'A-Annulus', definition: 'الحلقة بين أنبوب الإنتاج وغلاف الإنتاج' },
            { term: 'Bow-Tie Diagram', definition: 'مخطط يوضح العلاقة بين المخاطر والحواجز والعواقب' },
          ],
          practiceQuestion: {
            question: 'ماذا يعني وجود Sustained Casing Pressure (SCP) في حلقة البئر؟',
            options: [
              'الضغط الطبيعي للحلقة',
              'وجود تسرب في أحد عناصر الحاجز',
              'ضغط الإنتاج المرتفع',
              'حالة تشغيلية طبيعية'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Barrier Diagrams and Annulus Pressure Management',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Barrier Diagrams</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<p style="font-size: 1.1rem; margin: 0;">
A <strong>Barrier Diagram</strong> is a graphical representation showing all primary and secondary barrier elements in the well, used to verify dual barrier requirements are met at each phase of the well's life cycle.
</p>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">📊 Types of Barrier Diagrams</h3>
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">
<div style="background: #e3f2fd; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #1976d2; margin-bottom: 0.75rem;">🔷 Bow-Tie Diagram</h4>
<ul style="margin: 0; padding-left: 1.25rem; line-height: 1.8;">
<li>Shows relationship between hazards and barriers</li>
<li>Left side: potential failure causes</li>
<li>Center: hazardous event (Loss of Containment)</li>
<li>Right side: potential consequences</li>
</ul>
</div>
<div style="background: #fff3e0; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #ff6b35; margin-bottom: 0.75rem;">📐 Well Barrier Schematic</h4>
<ul style="margin: 0; padding-left: 1.25rem; line-height: 1.8;">
<li>Vertical well section showing barriers</li>
<li>Primary barrier in distinct color (usually red)</li>
<li>Secondary barrier in different color (usually blue)</li>
<li>Shows element overlap and connection points</li>
</ul>
</div>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">🔄 Barrier Elements in Different Well Phases</h3>

<h4 style="color: #1e3a5f; font-size: 1.1rem; margin: 1rem 0;">During Drilling:</h4>
<table style="width: 100%; border-collapse: collapse; margin-bottom: 1.5rem; font-size: 0.95rem;">
<thead>
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Primary Barrier</th>
<th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Secondary Barrier</th>
</tr>
</thead>
<tbody>
<tr style="background: #ffebee;">
<td style="padding: 0.75rem; border: 1px solid #ddd;">Drilling Fluid (Hydrostatic Pressure)</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">BOP Stack</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Casing Cement</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Casing String</td>
</tr>
<tr style="background: #ffebee;">
<td style="padding: 0.75rem; border: 1px solid #ddd;">Openhole Formation</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Wellhead Housing</td>
</tr>
</tbody>
</table>

<h4 style="color: #1e3a5f; font-size: 1.1rem; margin: 1rem 0;">During Production:</h4>
<table style="width: 100%; border-collapse: collapse; margin-bottom: 1.5rem; font-size: 0.95rem;">
<thead>
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Primary Barrier</th>
<th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Secondary Barrier</th>
</tr>
</thead>
<tbody>
<tr style="background: #e3f2fd;">
<td style="padding: 0.75rem; border: 1px solid #ddd;">Production Tubing</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Production Casing</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Production Packer</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Annulus Fluid</td>
</tr>
<tr style="background: #e3f2fd;">
<td style="padding: 0.75rem; border: 1px solid #ddd;">Tubing Hanger</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Casing Hanger</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Surface Safety Valve (SSV)</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Wellhead & Christmas Tree</td>
</tr>
<tr style="background: #e3f2fd;">
<td style="padding: 0.75rem; border: 1px solid #ddd;">DHSV (Downhole Safety Valve)</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Cement behind Casing</td>
</tr>
</tbody>
</table>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">📏 Annulus Pressure Management</h3>

<div style="background: #fff3e0; padding: 1.25rem; border-radius: 10px; border-left: 4px solid #ff6b35; margin-bottom: 1.5rem;">
<h4 style="color: #e65100; margin-bottom: 0.75rem;">⚠️ Sustained Casing Pressure (SCP)</h4>
<p style="margin: 0; line-height: 1.8;">
<strong>SCP</strong> is pressure in one or more annuli that rebuilds after bleeding and cannot be fully bled down. It indicates a leak in one of the barrier elements and requires immediate assessment to identify the leak source.
</p>
</div>

<h4 style="color: #1e3a5f; font-size: 1.1rem; margin: 1rem 0;">Annulus Classification:</h4>
<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-bottom: 1.5rem;">
<div style="background: #e8f5e9; padding: 1rem; border-radius: 8px;">
<h5 style="color: #2e7d32; margin-bottom: 0.5rem;">A-Annulus (Tubing-Casing)</h5>
<p style="margin: 0; font-size: 0.9rem;">Between Tubing and Production Casing - most monitored</p>
</div>
<div style="background: #e3f2fd; padding: 1rem; border-radius: 8px;">
<h5 style="color: #1976d2; margin-bottom: 0.5rem;">B-Annulus</h5>
<p style="margin: 0; font-size: 0.9rem;">Between Production and Intermediate Casing</p>
</div>
<div style="background: #fff3e0; padding: 1rem; border-radius: 8px;">
<h5 style="color: #ff6b35; margin-bottom: 0.5rem;">C-Annulus</h5>
<p style="margin: 0; font-size: 0.9rem;">Between Intermediate and Surface Casing</p>
</div>
<div style="background: #fce4ec; padding: 1rem; border-radius: 8px;">
<h5 style="color: #c2185b; margin-bottom: 0.5rem;">D-Annulus and beyond</h5>
<p style="margin: 0; font-size: 0.9rem;">Additional outer annuli</p>
</div>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">📊 SCP Evaluation Criteria</h3>
<div style="background: #f5f5f5; padding: 1.25rem; border-radius: 10px; margin-bottom: 1.5rem;">
<table style="width: 100%; border-collapse: collapse; font-size: 0.95rem;">
<thead>
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Criterion</th>
<th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Critical Value</th>
<th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Required Action</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Buildup Rate</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">> 100 psi/24hr</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Immediate investigation</td>
</tr>
<tr style="background: #f8f9fa;">
<td style="padding: 0.75rem; border: 1px solid #ddd;">Maximum Pressure</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">> 80% MAASP</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Corrective action</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Leak Fluid Type</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Gas (especially H₂S)</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Highest priority</td>
</tr>
</tbody>
</table>
</div>

<div style="background: #ffebee; padding: 1.25rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #c62828; margin-bottom: 0.75rem;">🔴 MAASP - Maximum Allowable Annulus Surface Pressure</h4>
<p style="margin: 0; line-height: 1.8;">
Maximum allowable annulus surface pressure = lowest value of:
</p>
<ul style="margin: 0.5rem 0 0; padding-left: 1.25rem; line-height: 1.8;">
<li>80% of inner string burst pressure</li>
<li>80% of outer string collapse pressure</li>
<li>Exposed formation fracture pressure - hydrostatic pressure</li>
</ul>
</div>

<div style="background: #e8f5e9; padding: 1.25rem; border-radius: 10px; margin-top: 1.5rem;">
<h4 style="color: #2e7d32; margin-bottom: 0.75rem;">📌 Day 2 Summary</h4>
<ul style="margin: 0; padding-left: 1.25rem; line-height: 1.8;">
<li>Barrier diagrams provide clear visualization of all safety elements</li>
<li>Barrier elements differ based on well life cycle phase</li>
<li>SCP indicates an integrity issue requiring assessment</li>
<li>MAASP determines maximum allowable pressure in each annulus</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Barrier Diagram', definition: 'Graphical representation of primary and secondary barrier elements in the well' },
            { term: 'Sustained Casing Pressure', definition: 'Accumulated pressure in annulus that cannot be fully bled' },
            { term: 'MAASP', definition: 'Maximum Allowable Annulus Surface Pressure' },
            { term: 'A-Annulus', definition: 'Annulus between production tubing and production casing' },
            { term: 'Bow-Tie Diagram', definition: 'Diagram showing relationship between hazards, barriers, and consequences' },
          ],
          practiceQuestion: {
            question: 'What does the presence of Sustained Casing Pressure (SCP) in a well annulus indicate?',
            options: [
              'Normal annulus pressure',
              'A leak in one of the barrier elements',
              'High production pressure',
              'Normal operating condition'
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
          title: 'التآكل وآليات التدهور في سلامة البئر',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 آليات التآكل والتدهور - Corrosion and Degradation Mechanisms</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<p style="font-size: 1.1rem; margin: 0;">
التآكل هو السبب الرئيسي لفشل سلامة البئر على المدى الطويل. فهم آليات التآكل المختلفة يمكّن من تصميم برامج مراقبة فعالة واختيار المواد المناسبة لإطالة عمر البئر.
</p>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">⚗️ أنواع التآكل الرئيسية - Main Corrosion Types</h3>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">
<div style="background: #ffebee; padding: 1.25rem; border-radius: 10px; border-top: 4px solid #c62828;">
<h4 style="color: #c62828; margin-bottom: 0.75rem;">🔴 CO₂ Corrosion (Sweet Corrosion)</h4>
<ul style="margin: 0; padding-right: 1.25rem; line-height: 1.8;">
<li>يحدث عند وجود CO₂ مذاب في الماء</li>
<li>يُنتج حمض الكربونيك H₂CO₃</li>
<li>معدل التآكل يزداد مع الضغط الجزئي لـ CO₂</li>
<li>يُنتج طبقات FeCO₃ واقية أحياناً</li>
<li>خطر عالي عند درجات حرارة 60-80°C</li>
</ul>
</div>
<div style="background: #fff8e1; padding: 1.25rem; border-radius: 10px; border-top: 4px solid #f9a825;">
<h4 style="color: #f9a825; margin-bottom: 0.75rem;">🟡 H₂S Corrosion (Sour Corrosion)</h4>
<ul style="margin: 0; padding-right: 1.25rem; line-height: 1.8;">
<li>أخطر أنواع التآكل في آبار النفط</li>
<li>يُسبب SSC (Sulfide Stress Cracking)</li>
<li>يُسبب HIC (Hydrogen Induced Cracking)</li>
<li>يتطلب مواد NACE MR0175 compliant</li>
<li>يزداد الخطر مع زيادة صلابة الفولاذ</li>
</ul>
</div>
</div>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">
<div style="background: #e3f2fd; padding: 1.25rem; border-radius: 10px; border-top: 4px solid #1976d2;">
<h4 style="color: #1976d2; margin-bottom: 0.75rem;">🔵 Oxygen Corrosion</h4>
<ul style="margin: 0; padding-right: 1.25rem; line-height: 1.8;">
<li>يحدث عند دخول الأكسجين للبئر</li>
<li>شائع في آبار حقن الماء</li>
<li>معدل تآكل سريع جداً</li>
<li>يُعالج بإزالة الأكسجين (Deaeration)</li>
<li>إضافة Oxygen Scavengers</li>
</ul>
</div>
<div style="background: #f3e5f5; padding: 1.25rem; border-radius: 10px; border-top: 4px solid #7b1fa2;">
<h4 style="color: #7b1fa2; margin-bottom: 0.75rem;">🟣 Microbiologically Influenced Corrosion (MIC)</h4>
<ul style="margin: 0; padding-right: 1.25rem; line-height: 1.8;">
<li>تسببه البكتيريا المختزلة للكبريتات (SRB)</li>
<li>يُنتج H₂S كمنتج ثانوي</li>
<li>شائع في مياه الحقن</li>
<li>يُعالج بالـ Biocides</li>
<li>صعب الكشف المبكر</li>
</ul>
</div>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">📊 عوامل تسريع التآكل - Corrosion Accelerating Factors</h3>
<div style="background: #f5f5f5; padding: 1.25rem; border-radius: 10px; margin-bottom: 1.5rem;">
<table style="width: 100%; border-collapse: collapse; font-size: 0.95rem;">
<thead>
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 0.75rem; text-align: right; border: 1px solid #ddd;">العامل</th>
<th style="padding: 0.75rem; text-align: right; border: 1px solid #ddd;">التأثير على التآكل</th>
<th style="padding: 0.75rem; text-align: right; border: 1px solid #ddd;">إجراء التخفيف</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ddd;">درجة الحرارة العالية</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">يُضاعف المعدل كل 15°C</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">CRA materials</td>
</tr>
<tr style="background: #f8f9fa;">
<td style="padding: 0.75rem; border: 1px solid #ddd;">سرعة التدفق</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Erosion-Corrosion</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Velocity limits</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ddd;">الكلوريدات</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Pitting & Crevice corrosion</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">High-Ni alloys</td>
</tr>
<tr style="background: #f8f9fa;">
<td style="padding: 0.75rem; border: 1px solid #ddd;">انخفاض pH</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">يُزيد الذوبانية</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">pH control</td>
</tr>
</tbody>
</table>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">🛡️ استراتيجيات مقاومة التآكل - Corrosion Mitigation Strategies</h3>

<div style="background: #e8f5e9; padding: 1.25rem; border-radius: 10px; margin-bottom: 1rem;">
<h4 style="color: #2e7d32; margin-bottom: 0.75rem;">1️⃣ اختيار المواد - Material Selection</h4>
<ul style="margin: 0; padding-right: 1.25rem; line-height: 1.8;">
<li><strong>Carbon Steel:</strong> للبيئات غير الحمضية، منخفض التكلفة</li>
<li><strong>13Cr Stainless:</strong> مقاوم لـ CO₂، محدود ضد Cl⁻</li>
<li><strong>Super Duplex:</strong> مقاوم عالي لـ CO₂ و Cl⁻</li>
<li><strong>Nickel Alloys (625, 825):</strong> للبيئات القاسية جداً</li>
</ul>
</div>

<div style="background: #e3f2fd; padding: 1.25rem; border-radius: 10px; margin-bottom: 1rem;">
<h4 style="color: #1976d2; margin-bottom: 0.75rem;">2️⃣ المثبطات الكيميائية - Chemical Inhibitors</h4>
<ul style="margin: 0; padding-right: 1.25rem; line-height: 1.8;">
<li><strong>Film-Forming Inhibitors:</strong> تُشكل طبقة واقية على السطح</li>
<li><strong>Neutralizing Inhibitors:</strong> ترفع pH السائل</li>
<li><strong>Scavengers:</strong> تُزيل O₂ أو H₂S من النظام</li>
<li><strong>Biocides:</strong> تقتل البكتيريا المسببة للتآكل</li>
</ul>
</div>

<div style="background: #fff3e0; padding: 1.25rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #ff6b35; margin-bottom: 0.75rem;">3️⃣ الحماية الكاثودية - Cathodic Protection</h4>
<ul style="margin: 0; padding-right: 1.25rem; line-height: 1.8;">
<li><strong>Sacrificial Anodes:</strong> أنودات Zinc أو Mg</li>
<li><strong>Impressed Current:</strong> تيار خارجي مُطبق</li>
<li>فعالة للأسطح الخارجية المدفونة أو المغمورة</li>
<li>تتطلب مراقبة منتظمة للجهد</li>
</ul>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">📉 تدهور المواد الأخرى - Other Material Degradation</h3>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">
<div style="background: #fce4ec; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #c2185b; margin-bottom: 0.75rem;">🔧 تدهور الإسمنت</h4>
<ul style="margin: 0; padding-right: 1.25rem; line-height: 1.8;">
<li>CO₂ Attack (Carbonation)</li>
<li>Sulfate Attack</li>
<li>Acid Attack (H₂S, organic acids)</li>
<li>Mechanical Damage</li>
</ul>
</div>
<div style="background: #e0f7fa; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #00838f; margin-bottom: 0.75rem;">🔩 تدهور المطاط (Elastomers)</h4>
<ul style="margin: 0; padding-right: 1.25rem; line-height: 1.8;">
<li>Explosive Decompression</li>
<li>Chemical Swelling</li>
<li>Thermal Degradation</li>
<li>Aging & Hardening</li>
</ul>
</div>
</div>

<div style="background: #e8f5e9; padding: 1.25rem; border-radius: 10px; margin-top: 1.5rem;">
<h4 style="color: #2e7d32; margin-bottom: 0.75rem;">📌 ملخص اليوم الثالث</h4>
<ul style="margin: 0; padding-right: 1.25rem; line-height: 1.8;">
<li>CO₂ و H₂S هما أخطر أنواع التآكل في آبار النفط والغاز</li>
<li>H₂S يتطلب مواد خاصة متوافقة مع NACE MR0175</li>
<li>اختيار المواد المناسبة هو خط الدفاع الأول ضد التآكل</li>
<li>المثبطات الكيميائية والحماية الكاثودية توفر حماية إضافية</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Sweet Corrosion', definition: 'تآكل ناتج عن CO₂ المذاب في الماء' },
            { term: 'Sour Corrosion', definition: 'تآكل ناتج عن H₂S، أخطر أنواع التآكل' },
            { term: 'SSC', definition: 'Sulfide Stress Cracking - تشقق إجهادي بسبب الكبريتيد' },
            { term: 'MIC', definition: 'تآكل مُحفَّز بالميكروبات' },
            { term: 'CRA', definition: 'Corrosion Resistant Alloys - سبائك مقاومة للتآكل' },
          ],
          practiceQuestion: {
            question: 'ما هو المعيار الذي يحدد متطلبات المواد للبيئات الحمضية (Sour Service)؟',
            options: [
              'API 5CT',
              'NACE MR0175',
              'ISO 9001',
              'ASME B31.3'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Corrosion and Degradation Mechanisms in Well Integrity',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Corrosion and Degradation Mechanisms</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<p style="font-size: 1.1rem; margin: 0;">
Corrosion is the primary cause of long-term well integrity failure. Understanding different corrosion mechanisms enables designing effective monitoring programs and selecting appropriate materials to extend well life.
</p>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">⚗️ Main Corrosion Types</h3>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">
<div style="background: #ffebee; padding: 1.25rem; border-radius: 10px; border-top: 4px solid #c62828;">
<h4 style="color: #c62828; margin-bottom: 0.75rem;">🔴 CO₂ Corrosion (Sweet Corrosion)</h4>
<ul style="margin: 0; padding-left: 1.25rem; line-height: 1.8;">
<li>Occurs when CO₂ dissolves in water</li>
<li>Produces carbonic acid H₂CO₃</li>
<li>Corrosion rate increases with CO₂ partial pressure</li>
<li>Sometimes produces protective FeCO₃ layers</li>
<li>High risk at temperatures 60-80°C</li>
</ul>
</div>
<div style="background: #fff8e1; padding: 1.25rem; border-radius: 10px; border-top: 4px solid #f9a825;">
<h4 style="color: #f9a825; margin-bottom: 0.75rem;">🟡 H₂S Corrosion (Sour Corrosion)</h4>
<ul style="margin: 0; padding-left: 1.25rem; line-height: 1.8;">
<li>Most dangerous corrosion type in oil wells</li>
<li>Causes SSC (Sulfide Stress Cracking)</li>
<li>Causes HIC (Hydrogen Induced Cracking)</li>
<li>Requires NACE MR0175 compliant materials</li>
<li>Risk increases with steel hardness</li>
</ul>
</div>
</div>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">
<div style="background: #e3f2fd; padding: 1.25rem; border-radius: 10px; border-top: 4px solid #1976d2;">
<h4 style="color: #1976d2; margin-bottom: 0.75rem;">🔵 Oxygen Corrosion</h4>
<ul style="margin: 0; padding-left: 1.25rem; line-height: 1.8;">
<li>Occurs when oxygen enters the well</li>
<li>Common in water injection wells</li>
<li>Very fast corrosion rate</li>
<li>Treated by deaeration</li>
<li>Adding oxygen scavengers</li>
</ul>
</div>
<div style="background: #f3e5f5; padding: 1.25rem; border-radius: 10px; border-top: 4px solid #7b1fa2;">
<h4 style="color: #7b1fa2; margin-bottom: 0.75rem;">🟣 Microbiologically Influenced Corrosion (MIC)</h4>
<ul style="margin: 0; padding-left: 1.25rem; line-height: 1.8;">
<li>Caused by sulfate-reducing bacteria (SRB)</li>
<li>Produces H₂S as byproduct</li>
<li>Common in injection water</li>
<li>Treated with biocides</li>
<li>Difficult to detect early</li>
</ul>
</div>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">📊 Corrosion Accelerating Factors</h3>
<div style="background: #f5f5f5; padding: 1.25rem; border-radius: 10px; margin-bottom: 1.5rem;">
<table style="width: 100%; border-collapse: collapse; font-size: 0.95rem;">
<thead>
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Factor</th>
<th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Effect on Corrosion</th>
<th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Mitigation Action</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ddd;">High Temperature</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Doubles rate every 15°C</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">CRA materials</td>
</tr>
<tr style="background: #f8f9fa;">
<td style="padding: 0.75rem; border: 1px solid #ddd;">Flow Velocity</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Erosion-Corrosion</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Velocity limits</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Chlorides</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Pitting & Crevice corrosion</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">High-Ni alloys</td>
</tr>
<tr style="background: #f8f9fa;">
<td style="padding: 0.75rem; border: 1px solid #ddd;">Low pH</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Increases solubility</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">pH control</td>
</tr>
</tbody>
</table>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">🛡️ Corrosion Mitigation Strategies</h3>

<div style="background: #e8f5e9; padding: 1.25rem; border-radius: 10px; margin-bottom: 1rem;">
<h4 style="color: #2e7d32; margin-bottom: 0.75rem;">1️⃣ Material Selection</h4>
<ul style="margin: 0; padding-left: 1.25rem; line-height: 1.8;">
<li><strong>Carbon Steel:</strong> For non-sour environments, low cost</li>
<li><strong>13Cr Stainless:</strong> CO₂ resistant, limited Cl⁻ resistance</li>
<li><strong>Super Duplex:</strong> High resistance to CO₂ and Cl⁻</li>
<li><strong>Nickel Alloys (625, 825):</strong> For very harsh environments</li>
</ul>
</div>

<div style="background: #e3f2fd; padding: 1.25rem; border-radius: 10px; margin-bottom: 1rem;">
<h4 style="color: #1976d2; margin-bottom: 0.75rem;">2️⃣ Chemical Inhibitors</h4>
<ul style="margin: 0; padding-left: 1.25rem; line-height: 1.8;">
<li><strong>Film-Forming Inhibitors:</strong> Create protective layer on surface</li>
<li><strong>Neutralizing Inhibitors:</strong> Raise fluid pH</li>
<li><strong>Scavengers:</strong> Remove O₂ or H₂S from system</li>
<li><strong>Biocides:</strong> Kill corrosion-causing bacteria</li>
</ul>
</div>

<div style="background: #fff3e0; padding: 1.25rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #ff6b35; margin-bottom: 0.75rem;">3️⃣ Cathodic Protection</h4>
<ul style="margin: 0; padding-left: 1.25rem; line-height: 1.8;">
<li><strong>Sacrificial Anodes:</strong> Zinc or Mg anodes</li>
<li><strong>Impressed Current:</strong> External applied current</li>
<li>Effective for buried or submerged external surfaces</li>
<li>Requires regular voltage monitoring</li>
</ul>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">📉 Other Material Degradation</h3>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">
<div style="background: #fce4ec; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #c2185b; margin-bottom: 0.75rem;">🔧 Cement Degradation</h4>
<ul style="margin: 0; padding-left: 1.25rem; line-height: 1.8;">
<li>CO₂ Attack (Carbonation)</li>
<li>Sulfate Attack</li>
<li>Acid Attack (H₂S, organic acids)</li>
<li>Mechanical Damage</li>
</ul>
</div>
<div style="background: #e0f7fa; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #00838f; margin-bottom: 0.75rem;">🔩 Elastomer Degradation</h4>
<ul style="margin: 0; padding-left: 1.25rem; line-height: 1.8;">
<li>Explosive Decompression</li>
<li>Chemical Swelling</li>
<li>Thermal Degradation</li>
<li>Aging & Hardening</li>
</ul>
</div>
</div>

<div style="background: #e8f5e9; padding: 1.25rem; border-radius: 10px; margin-top: 1.5rem;">
<h4 style="color: #2e7d32; margin-bottom: 0.75rem;">📌 Day 3 Summary</h4>
<ul style="margin: 0; padding-left: 1.25rem; line-height: 1.8;">
<li>CO₂ and H₂S are the most dangerous corrosion types in oil and gas wells</li>
<li>H₂S requires special NACE MR0175 compliant materials</li>
<li>Proper material selection is the first line of defense against corrosion</li>
<li>Chemical inhibitors and cathodic protection provide additional protection</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Sweet Corrosion', definition: 'Corrosion caused by CO₂ dissolved in water' },
            { term: 'Sour Corrosion', definition: 'Corrosion caused by H₂S, most dangerous type' },
            { term: 'SSC', definition: 'Sulfide Stress Cracking - stress cracking due to sulfide' },
            { term: 'MIC', definition: 'Microbiologically Influenced Corrosion' },
            { term: 'CRA', definition: 'Corrosion Resistant Alloys' },
          ],
          practiceQuestion: {
            question: 'Which standard specifies material requirements for sour service environments?',
            options: [
              'API 5CT',
              'NACE MR0175',
              'ISO 9001',
              'ASME B31.3'
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
          title: 'برامج المراقبة والفحص الدوري',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 برامج مراقبة سلامة البئر - Well Integrity Monitoring Programs</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<p style="font-size: 1.1rem; margin: 0;">
برنامج مراقبة سلامة البئر يشمل مجموعة من الفحوصات والاختبارات الدورية المصممة للكشف المبكر عن أي تدهور في عناصر الحواجز، مما يتيح اتخاذ إجراءات تصحيحية قبل فقدان السلامة.
</p>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">📊 هرم المراقبة - Monitoring Hierarchy</h3>

<div style="background: #f5f5f5; padding: 1.25rem; border-radius: 10px; margin-bottom: 1.5rem;">
<div style="text-align: center; margin-bottom: 1rem;">
<div style="background: #c62828; color: white; padding: 0.75rem; border-radius: 8px 8px 0 0; width: 40%; margin: 0 auto;">المستوى 1: مراقبة مستمرة</div>
<div style="background: #f9a825; color: white; padding: 0.75rem; width: 60%; margin: 0 auto;">المستوى 2: فحوصات دورية</div>
<div style="background: #2e7d32; color: white; padding: 0.75rem; border-radius: 0 0 8px 8px; width: 80%; margin: 0 auto;">المستوى 3: تقييمات شاملة</div>
</div>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">🔄 المراقبة المستمرة - Continuous Monitoring</h3>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">
<div style="background: #e3f2fd; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #1976d2; margin-bottom: 0.75rem;">📈 ضغوط الحلقات - Annulus Pressures</h4>
<ul style="margin: 0; padding-right: 1.25rem; line-height: 1.8;">
<li>قراءات يومية أو مستمرة (SCADA)</li>
<li>تتبع معدلات التراكم والتنفيس</li>
<li>مقارنة مع MAASP</li>
<li>تحليل الاتجاهات (Trending)</li>
</ul>
</div>
<div style="background: #fff3e0; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #ff6b35; margin-bottom: 0.75rem;">🌡️ درجات الحرارة - Temperatures</h4>
<ul style="margin: 0; padding-right: 1.25rem; line-height: 1.8;">
<li>Wellhead و Tree temperatures</li>
<li>مؤشر على التدفق غير الطبيعي</li>
<li>DTS (Distributed Temperature Sensing)</li>
<li>كشف تسربات خلف الأنابيب</li>
</ul>
</div>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">🔧 الفحوصات الدورية - Periodic Inspections</h3>

<table style="width: 100%; border-collapse: collapse; margin-bottom: 1.5rem; font-size: 0.95rem;">
<thead>
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 0.75rem; text-align: right; border: 1px solid #ddd;">نوع الفحص</th>
<th style="padding: 0.75rem; text-align: right; border: 1px solid #ddd;">التردد النموذجي</th>
<th style="padding: 0.75rem; text-align: right; border: 1px solid #ddd;">الغرض</th>
</tr>
</thead>
<tbody>
<tr style="background: #f8f9fa;">
<td style="padding: 0.75rem; border: 1px solid #ddd;">DHSV Function Test</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">شهرياً أو ربع سنوي</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">التحقق من إغلاق الصمام</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ddd;">SSV/USV Leak Test</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">سنوياً</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">قياس معدل التسرب</td>
</tr>
<tr style="background: #f8f9fa;">
<td style="padding: 0.75rem; border: 1px solid #ddd;">Wellhead Inspection</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">سنوياً</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">فحص بصري وقياس السماكة</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Casing Caliper Log</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">كل 5-10 سنوات</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">قياس التآكل الداخلي</td>
</tr>
<tr style="background: #f8f9fa;">
<td style="padding: 0.75rem; border: 1px solid #ddd;">Cement Evaluation Log</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">عند الحاجة</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">تقييم جودة الإسمنت</td>
</tr>
</tbody>
</table>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">📋 اختبارات سلامة الصمامات - Valve Integrity Testing</h3>

<div style="background: #e8f5e9; padding: 1.25rem; border-radius: 10px; margin-bottom: 1rem;">
<h4 style="color: #2e7d32; margin-bottom: 0.75rem;">✅ DHSV (Downhole Safety Valve) Testing</h4>
<ul style="margin: 0; padding-right: 1.25rem; line-height: 1.8;">
<li><strong>Function Test:</strong> إغلاق الصمام بتنفيس ضغط التحكم</li>
<li><strong>Inflow Test:</strong> قياس معدل التسرب عبر الصمام المغلق</li>
<li><strong>معيار القبول:</strong> تسرب &lt; 15 scf/min (API 14B)</li>
<li><strong>الإجراء عند الفشل:</strong> إصلاح أو استبدال الصمام</li>
</ul>
</div>

<div style="background: #fff3e0; padding: 1.25rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #ff6b35; margin-bottom: 0.75rem;">🔒 Surface Safety Valve (SSV) Testing</h4>
<ul style="margin: 0; padding-right: 1.25rem; line-height: 1.8;">
<li><strong>Stroke Test:</strong> التحقق من الحركة الكاملة</li>
<li><strong>Leak Test:</strong> قياس التسرب عند الضغط التشغيلي</li>
<li><strong>ESD Test:</strong> اختبار الإغلاق الطارئ</li>
<li><strong>Response Time:</strong> &lt; 30 ثانية للإغلاق الكامل</li>
</ul>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">🔬 تقنيات الفحص المتقدمة - Advanced Inspection Technologies</h3>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">
<div style="background: #e3f2fd; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #1976d2; margin-bottom: 0.75rem;">📡 Casing Inspection Logs</h4>
<ul style="margin: 0; padding-right: 1.25rem; line-height: 1.8;">
<li><strong>EMIT:</strong> Electromagnetic Inspection Tool</li>
<li><strong>USIT:</strong> Ultrasonic Imaging Tool</li>
<li><strong>Caliper:</strong> Multi-finger mechanical</li>
<li><strong>MFL:</strong> Magnetic Flux Leakage</li>
</ul>
</div>
<div style="background: #fce4ec; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #c2185b; margin-bottom: 0.75rem;">🔊 Cement Evaluation</h4>
<ul style="margin: 0; padding-right: 1.25rem; line-height: 1.8;">
<li><strong>CBL/VDL:</strong> Cement Bond Log</li>
<li><strong>USIT:</strong> للإسمنت والتغليف معاً</li>
<li><strong>Isolation Scanner:</strong> تقييم 3D للإسمنت</li>
<li><strong>Noise Log:</strong> كشف التسربات النشطة</li>
</ul>
</div>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">📊 نظام إدارة سلامة البئر - WIMS</h3>
<div style="background: #f5f5f5; padding: 1.25rem; border-radius: 10px; margin-bottom: 1.5rem;">
<p style="margin-bottom: 1rem; line-height: 1.8;">
<strong>Well Integrity Management System (WIMS)</strong> هو نظام متكامل لإدارة بيانات سلامة البئر ويشمل:
</p>
<ul style="margin: 0; padding-right: 1.25rem; line-height: 1.8;">
<li><strong>قاعدة بيانات:</strong> تخزين جميع بيانات الآبار والفحوصات</li>
<li><strong>مخططات الحواجز:</strong> تحديث تلقائي لحالة الحواجز</li>
<li><strong>جدولة الفحوصات:</strong> تذكيرات تلقائية</li>
<li><strong>تتبع الانحرافات:</strong> إدارة الحالات غير المطابقة</li>
<li><strong>التقارير:</strong> KPIs وتحليلات الأداء</li>
</ul>
</div>

<div style="background: #e8f5e9; padding: 1.25rem; border-radius: 10px; margin-top: 1.5rem;">
<h4 style="color: #2e7d32; margin-bottom: 0.75rem;">📌 ملخص اليوم الرابع</h4>
<ul style="margin: 0; padding-right: 1.25rem; line-height: 1.8;">
<li>برنامج المراقبة يشمل مراقبة مستمرة وفحوصات دورية</li>
<li>اختبارات DHSV و SSV ضرورية للتحقق من عمل صمامات الأمان</li>
<li>تقنيات الفحص المتقدمة تكشف التآكل ومشاكل الإسمنت</li>
<li>WIMS يوفر إدارة متكاملة لجميع بيانات سلامة البئر</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'DHSV', definition: 'Downhole Safety Valve - صمام أمان تحت السطحي' },
            { term: 'SSV', definition: 'Surface Safety Valve - صمام أمان سطحي' },
            { term: 'EMIT', definition: 'Electromagnetic Inspection Tool - أداة فحص كهرومغناطيسية' },
            { term: 'CBL', definition: 'Cement Bond Log - سجل ترابط الإسمنت' },
            { term: 'WIMS', definition: 'Well Integrity Management System - نظام إدارة سلامة البئر' },
          ],
          practiceQuestion: {
            question: 'ما هو معيار القبول لاختبار تسرب DHSV وفقاً لـ API 14B؟',
            options: [
              'صفر تسرب',
              '< 15 scf/min',
              '< 100 psi انخفاض',
              '< 5% من معدل الإنتاج'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Monitoring and Periodic Inspection Programs',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Well Integrity Monitoring Programs</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<p style="font-size: 1.1rem; margin: 0;">
A well integrity monitoring program includes a set of periodic inspections and tests designed for early detection of any degradation in barrier elements, enabling corrective actions before integrity loss.
</p>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">📊 Monitoring Hierarchy</h3>

<div style="background: #f5f5f5; padding: 1.25rem; border-radius: 10px; margin-bottom: 1.5rem;">
<div style="text-align: center; margin-bottom: 1rem;">
<div style="background: #c62828; color: white; padding: 0.75rem; border-radius: 8px 8px 0 0; width: 40%; margin: 0 auto;">Level 1: Continuous Monitoring</div>
<div style="background: #f9a825; color: white; padding: 0.75rem; width: 60%; margin: 0 auto;">Level 2: Periodic Inspections</div>
<div style="background: #2e7d32; color: white; padding: 0.75rem; border-radius: 0 0 8px 8px; width: 80%; margin: 0 auto;">Level 3: Comprehensive Assessments</div>
</div>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">🔄 Continuous Monitoring</h3>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">
<div style="background: #e3f2fd; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #1976d2; margin-bottom: 0.75rem;">📈 Annulus Pressures</h4>
<ul style="margin: 0; padding-left: 1.25rem; line-height: 1.8;">
<li>Daily or continuous readings (SCADA)</li>
<li>Track buildup and bleed rates</li>
<li>Compare with MAASP</li>
<li>Trending analysis</li>
</ul>
</div>
<div style="background: #fff3e0; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #ff6b35; margin-bottom: 0.75rem;">🌡️ Temperatures</h4>
<ul style="margin: 0; padding-left: 1.25rem; line-height: 1.8;">
<li>Wellhead and tree temperatures</li>
<li>Indicator of abnormal flow</li>
<li>DTS (Distributed Temperature Sensing)</li>
<li>Behind-casing leak detection</li>
</ul>
</div>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">🔧 Periodic Inspections</h3>

<table style="width: 100%; border-collapse: collapse; margin-bottom: 1.5rem; font-size: 0.95rem;">
<thead>
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Inspection Type</th>
<th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Typical Frequency</th>
<th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Purpose</th>
</tr>
</thead>
<tbody>
<tr style="background: #f8f9fa;">
<td style="padding: 0.75rem; border: 1px solid #ddd;">DHSV Function Test</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Monthly or Quarterly</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Verify valve closure</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ddd;">SSV/USV Leak Test</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Annually</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Measure leak rate</td>
</tr>
<tr style="background: #f8f9fa;">
<td style="padding: 0.75rem; border: 1px solid #ddd;">Wellhead Inspection</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Annually</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Visual and thickness measurement</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Casing Caliper Log</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Every 5-10 years</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Internal corrosion measurement</td>
</tr>
<tr style="background: #f8f9fa;">
<td style="padding: 0.75rem; border: 1px solid #ddd;">Cement Evaluation Log</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">As needed</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Cement quality assessment</td>
</tr>
</tbody>
</table>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">📋 Valve Integrity Testing</h3>

<div style="background: #e8f5e9; padding: 1.25rem; border-radius: 10px; margin-bottom: 1rem;">
<h4 style="color: #2e7d32; margin-bottom: 0.75rem;">✅ DHSV (Downhole Safety Valve) Testing</h4>
<ul style="margin: 0; padding-left: 1.25rem; line-height: 1.8;">
<li><strong>Function Test:</strong> Close valve by bleeding control pressure</li>
<li><strong>Inflow Test:</strong> Measure leak rate through closed valve</li>
<li><strong>Acceptance Criteria:</strong> Leak &lt; 15 scf/min (API 14B)</li>
<li><strong>Failure Action:</strong> Repair or replace valve</li>
</ul>
</div>

<div style="background: #fff3e0; padding: 1.25rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #ff6b35; margin-bottom: 0.75rem;">🔒 Surface Safety Valve (SSV) Testing</h4>
<ul style="margin: 0; padding-left: 1.25rem; line-height: 1.8;">
<li><strong>Stroke Test:</strong> Verify full travel</li>
<li><strong>Leak Test:</strong> Measure leak at operating pressure</li>
<li><strong>ESD Test:</strong> Emergency shutdown test</li>
<li><strong>Response Time:</strong> &lt; 30 seconds for full closure</li>
</ul>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">🔬 Advanced Inspection Technologies</h3>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">
<div style="background: #e3f2fd; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #1976d2; margin-bottom: 0.75rem;">📡 Casing Inspection Logs</h4>
<ul style="margin: 0; padding-left: 1.25rem; line-height: 1.8;">
<li><strong>EMIT:</strong> Electromagnetic Inspection Tool</li>
<li><strong>USIT:</strong> Ultrasonic Imaging Tool</li>
<li><strong>Caliper:</strong> Multi-finger mechanical</li>
<li><strong>MFL:</strong> Magnetic Flux Leakage</li>
</ul>
</div>
<div style="background: #fce4ec; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #c2185b; margin-bottom: 0.75rem;">🔊 Cement Evaluation</h4>
<ul style="margin: 0; padding-left: 1.25rem; line-height: 1.8;">
<li><strong>CBL/VDL:</strong> Cement Bond Log</li>
<li><strong>USIT:</strong> For cement and casing together</li>
<li><strong>Isolation Scanner:</strong> 3D cement evaluation</li>
<li><strong>Noise Log:</strong> Active leak detection</li>
</ul>
</div>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">📊 Well Integrity Management System - WIMS</h3>
<div style="background: #f5f5f5; padding: 1.25rem; border-radius: 10px; margin-bottom: 1.5rem;">
<p style="margin-bottom: 1rem; line-height: 1.8;">
<strong>Well Integrity Management System (WIMS)</strong> is an integrated system for managing well integrity data and includes:
</p>
<ul style="margin: 0; padding-left: 1.25rem; line-height: 1.8;">
<li><strong>Database:</strong> Storage of all well and inspection data</li>
<li><strong>Barrier Diagrams:</strong> Automatic barrier status updates</li>
<li><strong>Inspection Scheduling:</strong> Automatic reminders</li>
<li><strong>Deviation Tracking:</strong> Non-conformance management</li>
<li><strong>Reporting:</strong> KPIs and performance analytics</li>
</ul>
</div>

<div style="background: #e8f5e9; padding: 1.25rem; border-radius: 10px; margin-top: 1.5rem;">
<h4 style="color: #2e7d32; margin-bottom: 0.75rem;">📌 Day 4 Summary</h4>
<ul style="margin: 0; padding-left: 1.25rem; line-height: 1.8;">
<li>Monitoring program includes continuous monitoring and periodic inspections</li>
<li>DHSV and SSV tests are essential to verify safety valve function</li>
<li>Advanced inspection technologies detect corrosion and cement issues</li>
<li>WIMS provides integrated management of all well integrity data</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'DHSV', definition: 'Downhole Safety Valve - subsurface safety valve' },
            { term: 'SSV', definition: 'Surface Safety Valve - surface safety valve' },
            { term: 'EMIT', definition: 'Electromagnetic Inspection Tool' },
            { term: 'CBL', definition: 'Cement Bond Log' },
            { term: 'WIMS', definition: 'Well Integrity Management System' },
          ],
          practiceQuestion: {
            question: 'What is the acceptance criteria for DHSV leak test according to API 14B?',
            options: [
              'Zero leak',
              '< 15 scf/min',
              '< 100 psi drop',
              '< 5% of production rate'
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
          title: 'إصلاح السلامة والإغلاق الدائم (P&A)',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 إصلاح مشاكل السلامة - Integrity Remediation</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<p style="font-size: 1.1rem; margin: 0;">
عند اكتشاف مشكلة في سلامة البئر، يجب تقييم الخيارات المتاحة للإصلاح بناءً على طبيعة المشكلة، تكلفة الإصلاح، والعمر المتبقي للبئر. الهدف هو استعادة الحاجزين المستقلين أو إغلاق البئر بشكل دائم.
</p>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">🔧 خيارات إصلاح السلامة - Remediation Options</h3>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">
<div style="background: #e3f2fd; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #1976d2; margin-bottom: 0.75rem;">🔩 إصلاح التسربات - Leak Repair</h4>
<ul style="margin: 0; padding-right: 1.25rem; line-height: 1.8;">
<li><strong>Squeeze Cementing:</strong> حقن إسمنت لسد التسربات</li>
<li><strong>Casing Patches:</strong> رقع معدنية داخل التغليف</li>
<li><strong>Liner Installation:</strong> تركيب Liner جديد</li>
<li><strong>Sealant Injection:</strong> حقن مواد مانعة للتسرب</li>
</ul>
</div>
<div style="background: #fff3e0; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #ff6b35; margin-bottom: 0.75rem;">🔄 استبدال المكونات - Component Replacement</h4>
<ul style="margin: 0; padding-right: 1.25rem; line-height: 1.8;">
<li><strong>DHSV Replacement:</strong> استبدال صمام الأمان</li>
<li><strong>Tubing Workover:</strong> سحب وتركيب Tubing جديد</li>
<li><strong>Packer Change:</strong> استبدال Packer التالف</li>
<li><strong>Wellhead Repair:</strong> إصلاح أو استبدال رأس البئر</li>
</ul>
</div>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">📐 Squeeze Cementing - تقنيات حقن الإسمنت</h3>

<div style="background: #f5f5f5; padding: 1.25rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #1e3a5f; margin-bottom: 0.75rem;">أنواع Squeeze Operations:</h4>
<table style="width: 100%; border-collapse: collapse; font-size: 0.95rem;">
<thead>
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 0.75rem; text-align: right; border: 1px solid #ddd;">النوع</th>
<th style="padding: 0.75rem; text-align: right; border: 1px solid #ddd;">التطبيق</th>
<th style="padding: 0.75rem; text-align: right; border: 1px solid #ddd;">الضغط</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Low-Pressure Squeeze</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">قنوات صغيرة في الإسمنت</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">أقل من ضغط التكسير</td>
</tr>
<tr style="background: #f8f9fa;">
<td style="padding: 0.75rem; border: 1px solid #ddd;">High-Pressure Squeeze</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">سد الثقوب والشقوق</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">أعلى من ضغط التكسير</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Hesitation Squeeze</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">تكسير متحكم به</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">ضغط متقطع</td>
</tr>
</tbody>
</table>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">🏗️ Casing Repair Technologies</h3>

<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 1.5rem;">
<div style="background: #e8f5e9; padding: 1rem; border-radius: 8px;">
<h5 style="color: #2e7d32; margin-bottom: 0.5rem;">Expandable Liner</h5>
<p style="margin: 0; font-size: 0.9rem;">أنبوب يتمدد ميكانيكياً للالتصاق بجدار التغليف</p>
</div>
<div style="background: #e3f2fd; padding: 1rem; border-radius: 8px;">
<h5 style="color: #1976d2; margin-bottom: 0.5rem;">Scab Liner</h5>
<p style="margin: 0; font-size: 0.9rem;">Liner قصير يغطي منطقة التلف فقط</p>
</div>
<div style="background: #fff3e0; padding: 1rem; border-radius: 8px;">
<h5 style="color: #ff6b35; margin-bottom: 0.5rem;">Metal Patches</h5>
<p style="margin: 0; font-size: 0.9rem;">رقع معدنية تُثبت بالضغط أو اللحام</p>
</div>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">🔒 الإغلاق الدائم - Plug & Abandonment (P&A)</h3>

<div style="background: #ffebee; padding: 1.25rem; border-radius: 10px; border-right: 4px solid #c62828; margin-bottom: 1.5rem;">
<h4 style="color: #c62828; margin-bottom: 0.75rem;">⚠️ أهمية P&A الصحيح</h4>
<p style="margin: 0; line-height: 1.8;">
الإغلاق غير السليم للآبار يمثل خطراً بيئياً طويل الأمد. البئر المُغلق يجب أن يحتوي على حواجز دائمة تمنع أي تسرب للسوائل من التكوين إلى السطح أو المياه الجوفية لمئات السنين.
</p>
</div>

<h4 style="color: #1e3a5f; font-size: 1.1rem; margin: 1rem 0;">متطلبات P&A الأساسية:</h4>
<div style="background: #f5f5f5; padding: 1.25rem; border-radius: 10px; margin-bottom: 1.5rem;">
<ul style="margin: 0; padding-right: 1.25rem; line-height: 1.8;">
<li><strong>Primary Barrier:</strong> سدادة إسمنتية داخل التغليف (الحد الأدنى 100 ft)</li>
<li><strong>Secondary Barrier:</strong> إسمنت خلف التغليف (Verified by logs)</li>
<li><strong>Cross-Flow Prevention:</strong> عزل جميع المناطق المنتجة</li>
<li><strong>Fresh Water Protection:</strong> سدادة إضافية فوق المياه العذبة</li>
<li><strong>Surface Restoration:</strong> إزالة المعدات السطحية</li>
</ul>
</div>

<h4 style="color: #1e3a5f; font-size: 1.1rem; margin: 1rem 0;">تسلسل عمليات P&A النموذجي:</h4>
<div style="background: #e3f2fd; padding: 1.25rem; border-radius: 10px; margin-bottom: 1.5rem;">
<ol style="margin: 0; padding-right: 1.5rem; line-height: 2;">
<li>Kill the well - إيقاف التدفق</li>
<li>Pull tubing and accessories - سحب الأنابيب</li>
<li>Set cement plug across perforations - سدادة فوق الثقوب</li>
<li>Verify plug integrity - اختبار السدادة</li>
<li>Set intermediate plugs - سدادات وسيطة</li>
<li>Set surface plug - سدادة سطحية</li>
<li>Cut casing below surface - قطع التغليف</li>
<li>Install surface cap - تركيب غطاء</li>
</ol>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">📊 معايير نجاح P&A</h3>

<table style="width: 100%; border-collapse: collapse; margin-bottom: 1.5rem; font-size: 0.95rem;">
<thead>
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 0.75rem; text-align: right; border: 1px solid #ddd;">العنصر</th>
<th style="padding: 0.75rem; text-align: right; border: 1px solid #ddd;">المتطلب</th>
<th style="padding: 0.75rem; text-align: right; border: 1px solid #ddd;">التحقق</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ddd;">طول السدادة</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">≥ 100 ft (بعض الأنظمة ≥ 50 m)</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Tagging + CBL</td>
</tr>
<tr style="background: #f8f9fa;">
<td style="padding: 0.75rem; border: 1px solid #ddd;">اختبار الضغط</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">500 psi + Well pressure</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Pressure test</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ddd;">وقت الانتظار</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">24-72 ساعة</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">WOC time</td>
</tr>
</tbody>
</table>

<div style="background: #e8f5e9; padding: 1.25rem; border-radius: 10px; margin-top: 1.5rem;">
<h4 style="color: #2e7d32; margin-bottom: 0.75rem;">📌 ملخص اليوم الخامس</h4>
<ul style="margin: 0; padding-right: 1.25rem; line-height: 1.8;">
<li>Squeeze cementing و Casing patches هي تقنيات رئيسية لإصلاح التسربات</li>
<li>اختيار طريقة الإصلاح يعتمد على طبيعة المشكلة والتكلفة</li>
<li>P&A يتطلب سدادات إسمنتية دائمة وتحقق من سلامتها</li>
<li>حماية المياه الجوفية هي الأولوية القصوى في P&A</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Squeeze Cementing', definition: 'حقن الإسمنت تحت الضغط لسد التسربات' },
            { term: 'Casing Patch', definition: 'رقعة معدنية داخل التغليف لإصلاح التلف' },
            { term: 'P&A', definition: 'Plug & Abandonment - الإغلاق الدائم للبئر' },
            { term: 'Expandable Liner', definition: 'أنبوب يتمدد للالتصاق بجدار التغليف' },
            { term: 'WOC', definition: 'Wait On Cement - وقت انتظار تصلب الإسمنت' },
          ],
          practiceQuestion: {
            question: 'ما هو الحد الأدنى المطلوب لطول سدادة الإسمنت في عمليات P&A؟',
            options: [
              '25 ft',
              '50 ft',
              '100 ft',
              '200 ft'
            ],
            correctAnswer: 2,
          },
        },
        en: {
          title: 'Integrity Remediation and Plug & Abandonment (P&A)',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Integrity Remediation</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<p style="font-size: 1.1rem; margin: 0;">
When a well integrity issue is discovered, available repair options must be evaluated based on the nature of the problem, repair cost, and remaining well life. The goal is to restore two independent barriers or permanently abandon the well.
</p>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">🔧 Remediation Options</h3>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">
<div style="background: #e3f2fd; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #1976d2; margin-bottom: 0.75rem;">🔩 Leak Repair</h4>
<ul style="margin: 0; padding-left: 1.25rem; line-height: 1.8;">
<li><strong>Squeeze Cementing:</strong> Inject cement to seal leaks</li>
<li><strong>Casing Patches:</strong> Metal patches inside casing</li>
<li><strong>Liner Installation:</strong> Install new liner</li>
<li><strong>Sealant Injection:</strong> Inject sealing materials</li>
</ul>
</div>
<div style="background: #fff3e0; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #ff6b35; margin-bottom: 0.75rem;">🔄 Component Replacement</h4>
<ul style="margin: 0; padding-left: 1.25rem; line-height: 1.8;">
<li><strong>DHSV Replacement:</strong> Replace safety valve</li>
<li><strong>Tubing Workover:</strong> Pull and install new tubing</li>
<li><strong>Packer Change:</strong> Replace damaged packer</li>
<li><strong>Wellhead Repair:</strong> Repair or replace wellhead</li>
</ul>
</div>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">📐 Squeeze Cementing Techniques</h3>

<div style="background: #f5f5f5; padding: 1.25rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #1e3a5f; margin-bottom: 0.75rem;">Types of Squeeze Operations:</h4>
<table style="width: 100%; border-collapse: collapse; font-size: 0.95rem;">
<thead>
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Type</th>
<th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Application</th>
<th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Pressure</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Low-Pressure Squeeze</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Small channels in cement</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Below fracture pressure</td>
</tr>
<tr style="background: #f8f9fa;">
<td style="padding: 0.75rem; border: 1px solid #ddd;">High-Pressure Squeeze</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Seal holes and cracks</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Above fracture pressure</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Hesitation Squeeze</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Controlled fracturing</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Intermittent pressure</td>
</tr>
</tbody>
</table>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">🏗️ Casing Repair Technologies</h3>

<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 1.5rem;">
<div style="background: #e8f5e9; padding: 1rem; border-radius: 8px;">
<h5 style="color: #2e7d32; margin-bottom: 0.5rem;">Expandable Liner</h5>
<p style="margin: 0; font-size: 0.9rem;">Tube that expands mechanically to adhere to casing wall</p>
</div>
<div style="background: #e3f2fd; padding: 1rem; border-radius: 8px;">
<h5 style="color: #1976d2; margin-bottom: 0.5rem;">Scab Liner</h5>
<p style="margin: 0; font-size: 0.9rem;">Short liner covering only the damaged area</p>
</div>
<div style="background: #fff3e0; padding: 1rem; border-radius: 8px;">
<h5 style="color: #ff6b35; margin-bottom: 0.5rem;">Metal Patches</h5>
<p style="margin: 0; font-size: 0.9rem;">Metal patches fixed by pressure or welding</p>
</div>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">🔒 Plug & Abandonment (P&A)</h3>

<div style="background: #ffebee; padding: 1.25rem; border-radius: 10px; border-left: 4px solid #c62828; margin-bottom: 1.5rem;">
<h4 style="color: #c62828; margin-bottom: 0.75rem;">⚠️ Importance of Proper P&A</h4>
<p style="margin: 0; line-height: 1.8;">
Improper well abandonment poses a long-term environmental risk. An abandoned well must contain permanent barriers that prevent any fluid leakage from the formation to the surface or groundwater for hundreds of years.
</p>
</div>

<h4 style="color: #1e3a5f; font-size: 1.1rem; margin: 1rem 0;">Basic P&A Requirements:</h4>
<div style="background: #f5f5f5; padding: 1.25rem; border-radius: 10px; margin-bottom: 1.5rem;">
<ul style="margin: 0; padding-left: 1.25rem; line-height: 1.8;">
<li><strong>Primary Barrier:</strong> Cement plug inside casing (minimum 100 ft)</li>
<li><strong>Secondary Barrier:</strong> Cement behind casing (Verified by logs)</li>
<li><strong>Cross-Flow Prevention:</strong> Isolate all producing zones</li>
<li><strong>Fresh Water Protection:</strong> Additional plug above fresh water</li>
<li><strong>Surface Restoration:</strong> Remove surface equipment</li>
</ul>
</div>

<h4 style="color: #1e3a5f; font-size: 1.1rem; margin: 1rem 0;">Typical P&A Sequence:</h4>
<div style="background: #e3f2fd; padding: 1.25rem; border-radius: 10px; margin-bottom: 1.5rem;">
<ol style="margin: 0; padding-left: 1.5rem; line-height: 2;">
<li>Kill the well - Stop flow</li>
<li>Pull tubing and accessories</li>
<li>Set cement plug across perforations</li>
<li>Verify plug integrity</li>
<li>Set intermediate plugs</li>
<li>Set surface plug</li>
<li>Cut casing below surface</li>
<li>Install surface cap</li>
</ol>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">📊 P&A Success Criteria</h3>

<table style="width: 100%; border-collapse: collapse; margin-bottom: 1.5rem; font-size: 0.95rem;">
<thead>
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Element</th>
<th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Requirement</th>
<th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Verification</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Plug Length</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">≥ 100 ft (some regulations ≥ 50 m)</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Tagging + CBL</td>
</tr>
<tr style="background: #f8f9fa;">
<td style="padding: 0.75rem; border: 1px solid #ddd;">Pressure Test</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">500 psi + Well pressure</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Pressure test</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Wait Time</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">24-72 hours</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">WOC time</td>
</tr>
</tbody>
</table>

<div style="background: #e8f5e9; padding: 1.25rem; border-radius: 10px; margin-top: 1.5rem;">
<h4 style="color: #2e7d32; margin-bottom: 0.75rem;">📌 Day 5 Summary</h4>
<ul style="margin: 0; padding-left: 1.25rem; line-height: 1.8;">
<li>Squeeze cementing and casing patches are key techniques for leak repair</li>
<li>Repair method selection depends on problem nature and cost</li>
<li>P&A requires permanent cement plugs and integrity verification</li>
<li>Groundwater protection is the top priority in P&A</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Squeeze Cementing', definition: 'Injecting cement under pressure to seal leaks' },
            { term: 'Casing Patch', definition: 'Metal patch inside casing to repair damage' },
            { term: 'P&A', definition: 'Plug & Abandonment - permanent well closure' },
            { term: 'Expandable Liner', definition: 'Tube that expands to adhere to casing wall' },
            { term: 'WOC', definition: 'Wait On Cement - cement setting time' },
          ],
          practiceQuestion: {
            question: 'What is the minimum required cement plug length for P&A operations?',
            options: [
              '25 ft',
              '50 ft',
              '100 ft',
              '200 ft'
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
          title: 'اختبار إدارة سلامة البئر',
          explanation: 'اختبر معلوماتك في إدارة سلامة البئر والفحوصات الدورية',
          keyTerms: [],
        },
        en: {
          title: 'Well Integrity Management Quiz',
          explanation: 'Test your knowledge of well integrity management and periodic inspections',
          keyTerms: [],
        },
      },
      quiz: {
        ar: [
          {
            question: 'ما هو المبدأ الأساسي في فلسفة سلامة البئر وفقاً لـ NORSOK D-010؟',
            options: ['حاجز واحد قوي', 'حاجزان مستقلان على الأقل', 'ثلاثة حواجز متداخلة', 'حاجز واحد مع احتياطي'],
            correctAnswer: 1,
          },
          {
            question: 'ما هو Sustained Casing Pressure (SCP)؟',
            options: ['ضغط الإنتاج الطبيعي', 'ضغط يتراكم بعد التنفيس ولا يمكن نزفه', 'ضغط اختبار التغليف', 'ضغط حقن الماء'],
            correctAnswer: 1,
          },
          {
            question: 'أي نوع من التآكل يتطلب مواد متوافقة مع NACE MR0175؟',
            options: ['CO₂ Corrosion', 'H₂S Corrosion', 'Oxygen Corrosion', 'Galvanic Corrosion'],
            correctAnswer: 1,
          },
          {
            question: 'ما هو معيار قبول تسرب DHSV وفقاً لـ API 14B؟',
            options: ['صفر تسرب', '< 5 scf/min', '< 15 scf/min', '< 50 scf/min'],
            correctAnswer: 2,
          },
          {
            question: 'ما هو MAASP؟',
            options: ['أقصى ضغط إنتاج', 'أقصى ضغط سطحي مسموح في الحلقة', 'أقصى ضغط حفر', 'أقصى ضغط اختبار'],
            correctAnswer: 1,
          },
          {
            question: 'أي تقنية تُستخدم لإصلاح التسربات في الإسمنت خلف التغليف؟',
            options: ['Casing Patch', 'Squeeze Cementing', 'Liner Installation', 'Packer Change'],
            correctAnswer: 1,
          },
          {
            question: 'ما هو الحد الأدنى لطول سدادة الإسمنت في P&A؟',
            options: ['25 ft', '50 ft', '100 ft', '150 ft'],
            correctAnswer: 2,
          },
          {
            question: 'ما هو A-Annulus؟',
            options: ['الحلقة الخارجية', 'الحلقة بين Tubing و Production Casing', 'الحلقة بين Surface و Intermediate Casing', 'حلقة الحفر'],
            correctAnswer: 1,
          },
          {
            question: 'أي أداة تُستخدم لتقييم جودة الإسمنت خلف التغليف؟',
            options: ['EMIT', 'Caliper', 'CBL/VDL', 'MFL'],
            correctAnswer: 2,
          },
          {
            question: 'ما هو الهدف الرئيسي من برنامج WIMS؟',
            options: ['زيادة الإنتاج', 'إدارة متكاملة لبيانات سلامة البئر', 'تقليل تكاليف الحفر', 'تحسين معدل الاختراق'],
            correctAnswer: 1,
          },
        ],
        en: [
          {
            question: 'What is the fundamental principle of well integrity according to NORSOK D-010?',
            options: ['One strong barrier', 'At least two independent barriers', 'Three overlapping barriers', 'One barrier with backup'],
            correctAnswer: 1,
          },
          {
            question: 'What is Sustained Casing Pressure (SCP)?',
            options: ['Normal production pressure', 'Pressure that rebuilds after bleeding and cannot be fully bled', 'Casing test pressure', 'Water injection pressure'],
            correctAnswer: 1,
          },
          {
            question: 'Which type of corrosion requires NACE MR0175 compliant materials?',
            options: ['CO₂ Corrosion', 'H₂S Corrosion', 'Oxygen Corrosion', 'Galvanic Corrosion'],
            correctAnswer: 1,
          },
          {
            question: 'What is the DHSV leak acceptance criteria according to API 14B?',
            options: ['Zero leak', '< 5 scf/min', '< 15 scf/min', '< 50 scf/min'],
            correctAnswer: 2,
          },
          {
            question: 'What is MAASP?',
            options: ['Maximum production pressure', 'Maximum Allowable Annulus Surface Pressure', 'Maximum drilling pressure', 'Maximum test pressure'],
            correctAnswer: 1,
          },
          {
            question: 'Which technique is used to repair cement leaks behind casing?',
            options: ['Casing Patch', 'Squeeze Cementing', 'Liner Installation', 'Packer Change'],
            correctAnswer: 1,
          },
          {
            question: 'What is the minimum cement plug length required for P&A?',
            options: ['25 ft', '50 ft', '100 ft', '150 ft'],
            correctAnswer: 2,
          },
          {
            question: 'What is A-Annulus?',
            options: ['Outer annulus', 'Annulus between Tubing and Production Casing', 'Annulus between Surface and Intermediate Casing', 'Drilling annulus'],
            correctAnswer: 1,
          },
          {
            question: 'Which tool is used to evaluate cement quality behind casing?',
            options: ['EMIT', 'Caliper', 'CBL/VDL', 'MFL'],
            correctAnswer: 2,
          },
          {
            question: 'What is the main purpose of a WIMS program?',
            options: ['Increase production', 'Integrated management of well integrity data', 'Reduce drilling costs', 'Improve ROP'],
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
          title: 'مشروع إدارة سلامة البئر',
          explanation: 'طبق معرفتك في تحليل حالة سلامة بئر وتطوير خطة إصلاح',
          keyTerms: [],
        },
        en: {
          title: 'Well Integrity Management Project',
          explanation: 'Apply your knowledge to analyze a well integrity case and develop a remediation plan',
          keyTerms: [],
        },
      },
      project: {
        ar: {
          title: 'تحليل حالة سلامة بئر وتطوير خطة إصلاح',
          description: `لديك بئر إنتاج عمره 15 عاماً يُظهر المؤشرات التالية:
• ضغط متزايد في B-Annulus يصل إلى 800 psi ويتراكم خلال 48 ساعة بعد التنفيس
• MAASP للـ B-Annulus = 1,200 psi
• تحليل السائل المنزف: غاز مع آثار CO₂
• آخر CBL (قبل 10 سنوات) أظهر ترابط جيد
• البئر ينتج 2,000 bbl/day من النفط
• العمر الإنتاجي المتوقع المتبقي: 10 سنوات`,
          instructions: [
            'حدد تصنيف حالة البئر (أخضر/أصفر/أحمر) مع التبرير',
            'حدد المصادر المحتملة للتسرب',
            'اقترح خطة فحص تشخيصي',
            'طور خيارات الإصلاح مع تحليل التكلفة/الفائدة',
            'قدم توصيتك النهائية مع المبررات',
          ],
          submissionType: 'text' as const,
        },
        en: {
          title: 'Well Integrity Case Analysis and Remediation Plan',
          description: `You have a 15-year-old production well showing the following indicators:
• Increasing B-Annulus pressure reaching 800 psi, rebuilding within 48 hours after bleeding
• B-Annulus MAASP = 1,200 psi
• Bled fluid analysis: gas with CO₂ traces
• Last CBL (10 years ago) showed good bonding
• Well producing 2,000 bbl/day of oil
• Expected remaining production life: 10 years`,
          instructions: [
            'Determine the well status classification (green/yellow/red) with justification',
            'Identify potential leak sources',
            'Propose a diagnostic inspection plan',
            'Develop remediation options with cost/benefit analysis',
            'Provide your final recommendation with justifications',
          ],
          submissionType: 'text' as const,
        },
      },
    },
  ],
};
