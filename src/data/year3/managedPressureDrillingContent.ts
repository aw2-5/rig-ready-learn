import { WeeklyLesson } from '../weeklyContent';

export const managedPressureDrillingLesson: WeeklyLesson = {
  lessonId: 'managed-pressure-drilling',
  days: [
    {
      day: 1,
      type: 'learning',
      content: {
        ar: {
          title: 'الحفر بالضغط المُدار (MPD) - المفاهيم الأساسية المتقدمة',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 ما هو الحفر بالضغط المُدار؟</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
الحفر بالضغط المُدار (MPD) هو تقنية متقدمة للحفر في الظروف الصعبة حيث نافذة الطين ضيقة جداً. يعتمد على التحكم الدقيق بالضغط في الوقت الحقيقي.
</p>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="font-size: 1.25rem; margin-bottom: 1rem;">💡 لماذا نحتاج MPD؟</h3>
<p style="line-height: 1.8;">في بعض الآبار، الفرق بين ضغط المسام وضغط الكسر صغير جداً (أحياناً أقل من 0.5 ppg). الطريقة التقليدية لا تعمل هنا - نحتاج تحكماً دقيقاً بالضغط.</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 المكونات الرئيسية لنظام MPD</h3>
<div style="background: #e8f4f8; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<ul style="line-height: 2.2; padding-right: 1.5rem;">
<li><strong>RCD (Rotating Control Device):</strong> يغلق البئر حول سلسلة الحفر مع السماح بالدوران</li>
<li><strong>نظام الخنق الآلي:</strong> يتحكم بالضغط الخلفي تلقائياً</li>
<li><strong>مستشعرات الضغط:</strong> قياسات لحظية في عدة نقاط</li>
<li><strong>نظام التحكم:</strong> برنامج يدير كل المتغيرات</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 مفهوم SBP (Surface Back Pressure)</h3>
<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #059669;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
SBP هو الضغط الإضافي المطبق على السطح للتحكم بضغط القاع. هذا هو جوهر MPD!
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">📌 كيف يعمل؟</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li><strong>أثناء الضخ:</strong> ECD مرتفع → SBP منخفض أو صفر</li>
<li><strong>عند إيقاف الضخ:</strong> ECD ينخفض → نزيد SBP للتعويض</li>
<li><strong>النتيجة:</strong> BHP ثابت طوال الوقت!</li>
</ul>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 متى نستخدم MPD؟</h3>
<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #f59e0b;">
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background: #fef3c7;">
<th style="padding: 12px; border: 1px solid #f59e0b; text-align: right;">الحالة</th>
<th style="padding: 12px; border: 1px solid #f59e0b; text-align: right;">السبب</th>
</tr>
</thead>
<tbody>
<tr style="background: #fff;">
<td style="padding: 12px; border: 1px solid #ddd;">نافذة طين ضيقة جداً</td>
<td style="padding: 12px; border: 1px solid #ddd;">التحكم التقليدي غير كافي</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;">آبار HPHT</td>
<td style="padding: 12px; border: 1px solid #ddd;">ضغوط ودرجات حرارة عالية</td>
</tr>
<tr style="background: #fff;">
<td style="padding: 12px; border: 1px solid #ddd;">تكوينات مستنزفة</td>
<td style="padding: 12px; border: 1px solid #ddd;">ضغط منخفض يسبب فقدان طين</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;">طبقات متعددة الضغوط</td>
<td style="padding: 12px; border: 1px solid #ddd;">لا يوجد وزن طين واحد يناسب الكل</td>
</tr>
</tbody>
</table>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>MPD للآبار ذات النوافذ الضيقة والظروف الصعبة</li>
<li>RCD يسمح بالحفر مع البئر مغلق</li>
<li>SBP يعوض فقدان ECD عند إيقاف المضخات</li>
<li>الهدف: الحفاظ على BHP ثابت</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'MPD', definition: 'الحفر بالضغط المُدار - تقنية للتحكم الدقيق بالضغط في الآبار الصعبة' },
            { term: 'RCD', definition: 'جهاز التحكم الدوار - يغلق البئر حول سلسلة الحفر مع السماح بالدوران' },
            { term: 'SBP', definition: 'الضغط السطحي الخلفي - يُضاف للتعويض عن فقدان الاحتكاك' },
            { term: 'Narrow Window', definition: 'نافذة طين ضيقة - فرق صغير بين ضغط المسام وضغط الكسر' },
            { term: 'Constant BHP', definition: 'الحفاظ على ضغط القاع ثابتاً رغم تغير ظروف الضخ' },
          ],
          practiceQuestion: {
            question: 'ما هو الغرض الرئيسي من SBP في نظام MPD؟',
            options: [
              'زيادة سرعة الحفر',
              'تعويض فقدان ECD عند إيقاف المضخات',
              'تقليل استهلاك الطين',
              'تبريد البت'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Managed Pressure Drilling (MPD) - Advanced Basic Concepts',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 What is Managed Pressure Drilling?</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
Managed Pressure Drilling (MPD) is an advanced technique for drilling in difficult conditions where the mud window is very narrow. It relies on precise real-time pressure control.
</p>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="font-size: 1.25rem; margin-bottom: 1rem;">💡 Why do we need MPD?</h3>
<p style="line-height: 1.8;">In some wells, the difference between pore pressure and fracture pressure is very small (sometimes less than 0.5 ppg). Conventional methods don't work here - we need precise pressure control.</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Main Components of MPD System</h3>
<div style="background: #e8f4f8; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<ul style="line-height: 2.2; padding-left: 1.5rem;">
<li><strong>RCD (Rotating Control Device):</strong> Seals well around drillstring while allowing rotation</li>
<li><strong>Automated Choke System:</strong> Automatically controls back pressure</li>
<li><strong>Pressure Sensors:</strong> Real-time measurements at multiple points</li>
<li><strong>Control System:</strong> Software managing all variables</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 SBP (Surface Back Pressure) Concept</h3>
<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #059669;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
SBP is the additional pressure applied at surface to control bottomhole pressure. This is the essence of MPD!
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">📌 How does it work?</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li><strong>While pumping:</strong> ECD is high → SBP low or zero</li>
<li><strong>When pumps stop:</strong> ECD drops → We increase SBP to compensate</li>
<li><strong>Result:</strong> BHP stays constant throughout!</li>
</ul>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 When to Use MPD?</h3>
<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #f59e0b;">
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background: #fef3c7;">
<th style="padding: 12px; border: 1px solid #f59e0b; text-align: left;">Situation</th>
<th style="padding: 12px; border: 1px solid #f59e0b; text-align: left;">Reason</th>
</tr>
</thead>
<tbody>
<tr style="background: #fff;">
<td style="padding: 12px; border: 1px solid #ddd;">Very narrow mud window</td>
<td style="padding: 12px; border: 1px solid #ddd;">Conventional control insufficient</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;">HPHT wells</td>
<td style="padding: 12px; border: 1px solid #ddd;">High pressures and temperatures</td>
</tr>
<tr style="background: #fff;">
<td style="padding: 12px; border: 1px solid #ddd;">Depleted formations</td>
<td style="padding: 12px; border: 1px solid #ddd;">Low pressure causes mud loss</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;">Multi-pressure zones</td>
<td style="padding: 12px; border: 1px solid #ddd;">No single mud weight fits all</td>
</tr>
</tbody>
</table>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>MPD for narrow window wells and difficult conditions</li>
<li>RCD allows drilling with well closed</li>
<li>SBP compensates for ECD loss when pumps stop</li>
<li>Goal: Maintain constant BHP</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'MPD', definition: 'Managed Pressure Drilling - technique for precise pressure control in difficult wells' },
            { term: 'RCD', definition: 'Rotating Control Device - seals well around drillstring while allowing rotation' },
            { term: 'SBP', definition: 'Surface Back Pressure - added to compensate for friction loss' },
            { term: 'Narrow Window', definition: 'Narrow mud window - small difference between pore and fracture pressure' },
            { term: 'Constant BHP', definition: 'Maintaining constant bottomhole pressure despite changing pump conditions' },
          ],
          practiceQuestion: {
            question: 'What is the main purpose of SBP in MPD system?',
            options: [
              'Increase drilling speed',
              'Compensate for ECD loss when pumps stop',
              'Reduce mud consumption',
              'Cool the bit'
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
          title: 'تقنيات MPD المختلفة',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 أنواع تقنيات الحفر بالضغط المُدار</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
هناك عدة تقنيات مختلفة تحت مظلة MPD، كل منها مصمم لحالة معينة.
</p>

<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #059669;">
<h3 style="color: #059669; font-size: 1.3rem; font-weight: bold; margin-bottom: 1rem;">1️⃣ CBHP (Constant Bottom Hole Pressure)</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
الأكثر شيوعاً. الهدف: الحفاظ على ضغط القاع ثابتاً بغض النظر عن حالة الضخ.
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">📌 كيف يعمل؟</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li>أثناء الضخ: ECD يوفر جزء من الضغط</li>
<li>عند التوقف: SBP يعوض فقدان ECD</li>
<li>الانتقال سلس وآلي</li>
</ul>
<p style="font-weight: bold; margin: 1rem 0 0.5rem;">متى نستخدمه؟</p>
<p style="line-height: 1.8;">نافذة ضيقة، خطر ركلة أو فقدان طين عند التوقف</p>
</div>
</div>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #2563eb;">
<h3 style="color: #1e40af; font-size: 1.3rem; font-weight: bold; margin-bottom: 1rem;">2️⃣ DGD (Dual Gradient Drilling)</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
يستخدم سائلين بكثافتين مختلفتين لتحسين توزيع الضغط. شائع في الآبار البحرية العميقة.
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">📌 الفكرة:</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li>طين خفيف في الرايزر (قريب من كثافة ماء البحر)</li>
<li>طين أثقل في البئر تحت قاع البحر</li>
<li>يحاكي التدرج الطبيعي للضغط</li>
</ul>
<p style="font-weight: bold; margin: 1rem 0 0.5rem;">الفائدة:</p>
<p style="line-height: 1.8;">يوسع نافذة الطين المتاحة بشكل كبير</p>
</div>
</div>

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #f59e0b;">
<h3 style="color: #92400e; font-size: 1.3rem; font-weight: bold; margin-bottom: 1rem;">3️⃣ HSE-MPD (Returns to Surface)</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
نظام MPD مع عودة السوائل للسطح - يسمح بالتعامل مع الغازات والتدفقات.
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">📌 المميزات:</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li>اكتشاف مبكر للركلات الصغيرة</li>
<li>معالجة الغازات على السطح</li>
<li>تحكم أفضل بظروف البئر</li>
</ul>
</div>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 مقارنة التقنيات</h2>

<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #64748b;">
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background: #e2e8f0;">
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: right;">التقنية</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: right;">الاستخدام الرئيسي</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: right;">التعقيد</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;">CBHP</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">نوافذ ضيقة عامة</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">متوسط</td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 12px; border: 1px solid #cbd5e1;">DGD</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">آبار بحرية عميقة</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">عالي</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;">HSE-MPD</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">آبار مع مخاطر غاز</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">متوسط-عالي</td>
</tr>
</tbody>
</table>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>CBHP: الأكثر شيوعاً - ضغط قاع ثابت</li>
<li>DGD: للآبار البحرية العميقة - سائلين بكثافتين</li>
<li>اختيار التقنية يعتمد على ظروف البئر والمتطلبات</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'CBHP', definition: 'الحفاظ على ضغط قاع البئر ثابتاً - الأكثر شيوعاً في MPD' },
            { term: 'DGD', definition: 'الحفر بتدرج مزدوج - سائلين بكثافتين للآبار البحرية العميقة' },
            { term: 'HSE-MPD', definition: 'MPD مع عودة السوائل للسطح - للتعامل مع الغازات' },
            { term: 'Pressure Gradient', definition: 'معدل تغير الضغط مع العمق' },
            { term: 'Riser', definition: 'الأنبوب الواصل بين قاع البحر والمنصة' },
          ],
          practiceQuestion: {
            question: 'أي تقنية MPD الأفضل للآبار البحرية العميقة؟',
            options: [
              'CBHP',
              'DGD (Dual Gradient Drilling)',
              'الحفر التقليدي',
              'Underbalanced Drilling'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Different MPD Techniques',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Types of Managed Pressure Drilling Techniques</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
There are several different techniques under the MPD umbrella, each designed for specific situations.
</p>

<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #059669;">
<h3 style="color: #059669; font-size: 1.3rem; font-weight: bold; margin-bottom: 1rem;">1️⃣ CBHP (Constant Bottom Hole Pressure)</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
Most common. Goal: Maintain constant bottomhole pressure regardless of pumping state.
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">📌 How does it work?</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li>While pumping: ECD provides part of pressure</li>
<li>When stopped: SBP compensates for ECD loss</li>
<li>Transition is smooth and automatic</li>
</ul>
<p style="font-weight: bold; margin: 1rem 0 0.5rem;">When to use?</p>
<p style="line-height: 1.8;">Narrow window, risk of kick or mud loss when stopping</p>
</div>
</div>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #2563eb;">
<h3 style="color: #1e40af; font-size: 1.3rem; font-weight: bold; margin-bottom: 1rem;">2️⃣ DGD (Dual Gradient Drilling)</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
Uses two fluids with different densities to improve pressure distribution. Common in deepwater wells.
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">📌 The Idea:</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li>Light fluid in riser (close to seawater density)</li>
<li>Heavier mud in well below seabed</li>
<li>Mimics natural pressure gradient</li>
</ul>
<p style="font-weight: bold; margin: 1rem 0 0.5rem;">Benefit:</p>
<p style="line-height: 1.8;">Significantly widens available mud window</p>
</div>
</div>

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #f59e0b;">
<h3 style="color: #92400e; font-size: 1.3rem; font-weight: bold; margin-bottom: 1rem;">3️⃣ HSE-MPD (Returns to Surface)</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
MPD system with fluids returning to surface - allows handling gases and flows.
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">📌 Advantages:</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li>Early detection of small kicks</li>
<li>Gas processing at surface</li>
<li>Better control of well conditions</li>
</ul>
</div>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Technique Comparison</h2>

<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #64748b;">
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background: #e2e8f0;">
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: left;">Technique</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: left;">Main Use</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: left;">Complexity</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;">CBHP</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">General narrow windows</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Medium</td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 12px; border: 1px solid #cbd5e1;">DGD</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Deepwater wells</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">High</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;">HSE-MPD</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Wells with gas risks</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Medium-High</td>
</tr>
</tbody>
</table>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>CBHP: Most common - constant bottomhole pressure</li>
<li>DGD: For deepwater wells - two fluids with different densities</li>
<li>Technique selection depends on well conditions and requirements</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'CBHP', definition: 'Constant Bottom Hole Pressure - most common MPD technique' },
            { term: 'DGD', definition: 'Dual Gradient Drilling - two fluids with different densities for deepwater' },
            { term: 'HSE-MPD', definition: 'MPD with returns to surface - for handling gases' },
            { term: 'Pressure Gradient', definition: 'Rate of pressure change with depth' },
            { term: 'Riser', definition: 'Pipe connecting seabed to platform' },
          ],
          practiceQuestion: {
            question: 'Which MPD technique is best for deepwater wells?',
            options: [
              'CBHP',
              'DGD (Dual Gradient Drilling)',
              'Conventional drilling',
              'Underbalanced Drilling'
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
          title: 'تشغيل وإدارة نظام MPD',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 التشغيل اليومي لنظام MPD</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
تشغيل MPD يتطلب فهماً عميقاً للتفاعل بين المتغيرات المختلفة والقدرة على الاستجابة السريعة.
</p>

<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #059669;">
<h3 style="color: #059669; font-size: 1.3rem; font-weight: bold; margin-bottom: 1rem;">جدول تعويض الضغط (Pressure Schedule)</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
يجب إعداد جدول يحدد SBP المطلوب لكل معدل ضخ للحفاظ على BHP ثابت.
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background: #dcfce7;">
<th style="padding: 10px; border: 1px solid #ddd;">معدل الضخ (GPM)</th>
<th style="padding: 10px; border: 1px solid #ddd;">ECD المتوقع</th>
<th style="padding: 10px; border: 1px solid #ddd;">SBP المطلوب</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">0 (متوقف)</td>
<td style="padding: 10px; border: 1px solid #ddd;">= MW</td>
<td style="padding: 10px; border: 1px solid #ddd;">أقصى SBP</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 10px; border: 1px solid #ddd;">متوسط</td>
<td style="padding: 10px; border: 1px solid #ddd;">MW + متوسط</td>
<td style="padding: 10px; border: 1px solid #ddd;">متوسط SBP</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">أقصى</td>
<td style="padding: 10px; border: 1px solid #ddd;">أقصى ECD</td>
<td style="padding: 10px; border: 1px solid #ddd;">صفر أو أدنى</td>
</tr>
</tbody>
</table>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 التحكم أثناء الرحلات (Connections/Trips)</h3>
<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #f59e0b;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
أكثر الأوقات حساسية في MPD هي عند إيقاف المضخات للوصلات أو الرحلات.
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">📌 الإجراء الصحيح:</p>
<ol style="padding-right: 1.5rem; line-height: 2.2;">
<li>قبل إيقاف المضخات: تأكد من جاهزية نظام SBP</li>
<li>خفض معدل الضخ تدريجياً</li>
<li>مراقبة BHP - يجب أن يبقى ثابتاً</li>
<li>زيادة SBP تلقائياً مع انخفاض الضخ</li>
<li>عند استئناف الضخ: عكس العملية</li>
</ol>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 مؤشرات الأداء الرئيسية (KPIs)</h3>
<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #2563eb;">
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background: #dbeafe;">
<th style="padding: 10px; border: 1px solid #ddd; text-align: right;">المؤشر</th>
<th style="padding: 10px; border: 1px solid #ddd; text-align: right;">الهدف</th>
<th style="padding: 10px; border: 1px solid #ddd; text-align: right;">علامة الخطر</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">تذبذب BHP</td>
<td style="padding: 10px; border: 1px solid #ddd;">± 50 psi</td>
<td style="padding: 10px; border: 1px solid #ddd; color: #dc2626;">± 150 psi</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 10px; border: 1px solid #ddd;">وقت الاستجابة</td>
<td style="padding: 10px; border: 1px solid #ddd;">< 5 ثوان</td>
<td style="padding: 10px; border: 1px solid #ddd; color: #dc2626;">> 15 ثانية</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">دقة SBP</td>
<td style="padding: 10px; border: 1px solid #ddd;">± 25 psi</td>
<td style="padding: 10px; border: 1px solid #ddd; color: #dc2626;">± 75 psi</td>
</tr>
</tbody>
</table>
</div>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>جدول التعويض ضروري لكل معدل ضخ</li>
<li>الوصلات والرحلات أكثر الأوقات حساسية</li>
<li>الانتقال التدريجي والسلس هو المفتاح</li>
<li>مراقبة مؤشرات الأداء باستمرار</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Pressure Schedule', definition: 'جدول يحدد SBP المطلوب لكل معدل ضخ' },
            { term: 'Connection Procedure', definition: 'إجراء التحكم بالضغط أثناء إضافة أو إزالة أنبوب' },
            { term: 'Response Time', definition: 'الوقت اللازم لتعديل SBP عند تغير معدل الضخ' },
            { term: 'BHP Fluctuation', definition: 'تذبذب ضغط القاع - يجب أن يكون أدنى ما يمكن' },
            { term: 'KPIs', definition: 'مؤشرات الأداء الرئيسية لتقييم نجاح تشغيل MPD' },
          ],
          practiceQuestion: {
            question: 'ما هو الهدف المثالي لتذبذب BHP أثناء تشغيل MPD؟',
            options: [
              '± 200 psi',
              '± 50 psi',
              '± 500 psi',
              'لا يهم التذبذب'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Operating and Managing MPD System',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Daily MPD System Operation</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
Operating MPD requires deep understanding of the interaction between different variables and ability to respond quickly.
</p>

<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #059669;">
<h3 style="color: #059669; font-size: 1.3rem; font-weight: bold; margin-bottom: 1rem;">Pressure Compensation Schedule</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
A schedule must be prepared specifying required SBP for each pump rate to maintain constant BHP.
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background: #dcfce7;">
<th style="padding: 10px; border: 1px solid #ddd;">Pump Rate (GPM)</th>
<th style="padding: 10px; border: 1px solid #ddd;">Expected ECD</th>
<th style="padding: 10px; border: 1px solid #ddd;">Required SBP</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">0 (Stopped)</td>
<td style="padding: 10px; border: 1px solid #ddd;">= MW</td>
<td style="padding: 10px; border: 1px solid #ddd;">Maximum SBP</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 10px; border: 1px solid #ddd;">Medium</td>
<td style="padding: 10px; border: 1px solid #ddd;">MW + Medium</td>
<td style="padding: 10px; border: 1px solid #ddd;">Medium SBP</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">Maximum</td>
<td style="padding: 10px; border: 1px solid #ddd;">Maximum ECD</td>
<td style="padding: 10px; border: 1px solid #ddd;">Zero or Minimum</td>
</tr>
</tbody>
</table>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Control During Connections/Trips</h3>
<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #f59e0b;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
Most sensitive times in MPD are when stopping pumps for connections or trips.
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">📌 Correct Procedure:</p>
<ol style="padding-left: 1.5rem; line-height: 2.2;">
<li>Before stopping pumps: Ensure SBP system is ready</li>
<li>Reduce pump rate gradually</li>
<li>Monitor BHP - must stay constant</li>
<li>SBP increases automatically as pumping decreases</li>
<li>When resuming: Reverse the process</li>
</ol>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Key Performance Indicators (KPIs)</h3>
<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #2563eb;">
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background: #dbeafe;">
<th style="padding: 10px; border: 1px solid #ddd; text-align: left;">Indicator</th>
<th style="padding: 10px; border: 1px solid #ddd; text-align: left;">Target</th>
<th style="padding: 10px; border: 1px solid #ddd; text-align: left;">Danger Sign</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">BHP Fluctuation</td>
<td style="padding: 10px; border: 1px solid #ddd;">± 50 psi</td>
<td style="padding: 10px; border: 1px solid #ddd; color: #dc2626;">± 150 psi</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 10px; border: 1px solid #ddd;">Response Time</td>
<td style="padding: 10px; border: 1px solid #ddd;">< 5 seconds</td>
<td style="padding: 10px; border: 1px solid #ddd; color: #dc2626;">> 15 seconds</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">SBP Accuracy</td>
<td style="padding: 10px; border: 1px solid #ddd;">± 25 psi</td>
<td style="padding: 10px; border: 1px solid #ddd; color: #dc2626;">± 75 psi</td>
</tr>
</tbody>
</table>
</div>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>Compensation schedule essential for each pump rate</li>
<li>Connections and trips are most sensitive times</li>
<li>Gradual smooth transition is key</li>
<li>Continuous monitoring of KPIs</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Pressure Schedule', definition: 'Schedule specifying required SBP for each pump rate' },
            { term: 'Connection Procedure', definition: 'Pressure control procedure during adding or removing pipe' },
            { term: 'Response Time', definition: 'Time needed to adjust SBP when pump rate changes' },
            { term: 'BHP Fluctuation', definition: 'Bottomhole pressure variation - must be minimal' },
            { term: 'KPIs', definition: 'Key Performance Indicators for evaluating MPD operation success' },
          ],
          practiceQuestion: {
            question: 'What is the ideal target for BHP fluctuation during MPD operation?',
            options: [
              '± 200 psi',
              '± 50 psi',
              '± 500 psi',
              'Fluctuation does not matter'
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
          title: 'حالات الطوارئ في MPD',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 التعامل مع الطوارئ في نظام MPD</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
نظام MPD المعقد يعني أن الطوارئ أيضاً أكثر تعقيداً. الاستعداد والتدريب ضروريان.
</p>

<div style="background: linear-gradient(135deg, #dc262615, #dc262610); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #dc2626;">
<h3 style="color: #dc2626; font-size: 1.3rem; font-weight: bold; margin-bottom: 1rem;">⚠️ السيناريو 1: فشل نظام الخنق</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
إذا فشل الخنق الآلي، نفقد القدرة على التحكم بـ SBP.
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">📌 الإجراءات:</p>
<ol style="padding-right: 1.5rem; line-height: 2.2;">
<li><strong>فشل مفتوح:</strong> التحويل للخنق الاحتياطي فوراً</li>
<li><strong>فشل مغلق:</strong> فتح Bypass لتجنب ارتفاع الضغط</li>
<li>الانتقال للتحكم اليدوي إذا لزم</li>
<li>النظر في زيادة كثافة الطين إذا استمر العطل</li>
</ol>
<p style="margin-top: 1rem; background: #fef2f2; padding: 0.75rem; border-radius: 6px;">
<strong>⏱️ وقت الاستجابة الحرج:</strong> < 30 ثانية
</p>
</div>
</div>

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #f59e0b;">
<h3 style="color: #92400e; font-size: 1.3rem; font-weight: bold; margin-bottom: 1rem;">السيناريو 2: فشل RCD</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
RCD هو قلب نظام MPD. فشله يعني فقدان الإغلاق.
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">📌 علامات فشل RCD:</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li>انخفاض مفاجئ في SBP رغم ثبات الخنق</li>
<li>ظهور سوائل من حول السلسلة</li>
<li>صوت تسريب غير عادي</li>
</ul>
<p style="font-weight: bold; margin: 1rem 0 0.5rem;">الإجراء:</p>
<p style="line-height: 1.8;">زيادة كثافة الطين للتعويض ← الانتقال لحفر تقليدي مؤقتاً</p>
</div>
</div>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #2563eb;">
<h3 style="color: #1e40af; font-size: 1.3rem; font-weight: bold; margin-bottom: 1rem;">السيناريو 3: ركلة أثناء MPD</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
حتى مع MPD، الركلات ممكنة. لكن الاكتشاف أسرع والاستجابة مختلفة.
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">📌 المميزات:</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li>اكتشاف مبكر جداً (تغير طفيف في التدفق)</li>
<li>القدرة على احتواء ركلات صغيرة بزيادة SBP</li>
<li>لا حاجة دائماً لإغلاق كامل</li>
</ul>
<p style="font-weight: bold; margin: 1rem 0 0.5rem;">الإجراء:</p>
<p style="line-height: 1.8;">زيادة SBP ← مراقبة ← إذا استمر التدفق: إجراءات قتل البئر التقليدية</p>
</div>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 شجرة القرار السريع</h2>

<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #64748b;">
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background: #e2e8f0;">
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: right;">المشكلة</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: right;">الإجراء الأول</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: right;">الخطة البديلة</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;">فشل الخنق</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">خنق احتياطي</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">زيادة MW</td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 12px; border: 1px solid #cbd5e1;">فشل RCD</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">زيادة MW</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">حفر تقليدي</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;">ركلة صغيرة</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">زيادة SBP</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">قتل البئر</td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 12px; border: 1px solid #cbd5e1;">فقدان طاقة</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">UPS/مولد</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">تحكم يدوي</td>
</tr>
</tbody>
</table>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>فشل الخنق: تحويل سريع للاحتياطي</li>
<li>فشل RCD: الانتقال للحفر التقليدي</li>
<li>ركلات في MPD: يمكن احتواء الصغيرة بزيادة SBP</li>
<li>الاستعداد والتدريب هما الأساس</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Backup Choke', definition: 'خنق احتياطي يُستخدم عند فشل الخنق الرئيسي' },
            { term: 'RCD Failure', definition: 'فشل جهاز التحكم الدوار - يفقد الإغلاق حول السلسلة' },
            { term: 'Kick Detection', definition: 'اكتشاف الركلة - أسرع في MPD بسبب المراقبة الدقيقة' },
            { term: 'UPS', definition: 'مصدر طاقة غير منقطع للحفاظ على التحكم عند انقطاع الكهرباء' },
            { term: 'Manual Override', definition: 'التحكم اليدوي عند فشل النظام الآلي' },
          ],
          practiceQuestion: {
            question: 'ماذا تفعل أولاً عند اكتشاف ركلة صغيرة أثناء MPD؟',
            options: [
              'إغلاق البئر فوراً',
              'زيادة SBP لاحتواء الركلة',
              'إيقاف الحفر والانتظار',
              'الاتصال بالمكتب الرئيسي'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Emergency Situations in MPD',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Handling Emergencies in MPD System</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
Complex MPD system means emergencies are also more complex. Preparation and training are essential.
</p>

<div style="background: linear-gradient(135deg, #dc262615, #dc262610); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #dc2626;">
<h3 style="color: #dc2626; font-size: 1.3rem; font-weight: bold; margin-bottom: 1rem;">⚠️ Scenario 1: Choke System Failure</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
If automated choke fails, we lose ability to control SBP.
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">📌 Actions:</p>
<ol style="padding-left: 1.5rem; line-height: 2.2;">
<li><strong>Fail open:</strong> Switch to backup choke immediately</li>
<li><strong>Fail closed:</strong> Open Bypass to prevent pressure buildup</li>
<li>Switch to manual control if needed</li>
<li>Consider increasing mud weight if failure continues</li>
</ol>
<p style="margin-top: 1rem; background: #fef2f2; padding: 0.75rem; border-radius: 6px;">
<strong>⏱️ Critical response time:</strong> < 30 seconds
</p>
</div>
</div>

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #f59e0b;">
<h3 style="color: #92400e; font-size: 1.3rem; font-weight: bold; margin-bottom: 1rem;">Scenario 2: RCD Failure</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
RCD is the heart of MPD system. Its failure means loss of seal.
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">📌 Signs of RCD failure:</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li>Sudden SBP drop despite constant choke position</li>
<li>Fluids appearing around drillstring</li>
<li>Unusual leak sounds</li>
</ul>
<p style="font-weight: bold; margin: 1rem 0 0.5rem;">Action:</p>
<p style="line-height: 1.8;">Increase mud weight to compensate ← Switch to conventional drilling temporarily</p>
</div>
</div>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #2563eb;">
<h3 style="color: #1e40af; font-size: 1.3rem; font-weight: bold; margin-bottom: 1rem;">Scenario 3: Kick During MPD</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
Even with MPD, kicks are possible. But detection is faster and response is different.
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">📌 Advantages:</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li>Very early detection (slight flow change)</li>
<li>Ability to contain small kicks by increasing SBP</li>
<li>Full shut-in not always needed</li>
</ul>
<p style="font-weight: bold; margin: 1rem 0 0.5rem;">Action:</p>
<p style="line-height: 1.8;">Increase SBP ← Monitor ← If flow continues: conventional well kill procedures</p>
</div>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Quick Decision Tree</h2>

<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #64748b;">
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background: #e2e8f0;">
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: left;">Problem</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: left;">First Action</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: left;">Backup Plan</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Choke Failure</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Backup choke</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Increase MW</td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 12px; border: 1px solid #cbd5e1;">RCD Failure</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Increase MW</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Conventional drilling</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Small Kick</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Increase SBP</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Well kill</td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 12px; border: 1px solid #cbd5e1;">Power Loss</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">UPS/Generator</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Manual control</td>
</tr>
</tbody>
</table>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>Choke failure: Quick switch to backup</li>
<li>RCD failure: Switch to conventional drilling</li>
<li>Kicks in MPD: Small ones can be contained by increasing SBP</li>
<li>Preparation and training are fundamental</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Backup Choke', definition: 'Backup choke used when primary choke fails' },
            { term: 'RCD Failure', definition: 'Rotating Control Device failure - loses seal around drillstring' },
            { term: 'Kick Detection', definition: 'Kick detection - faster in MPD due to precise monitoring' },
            { term: 'UPS', definition: 'Uninterruptible Power Supply to maintain control during power outage' },
            { term: 'Manual Override', definition: 'Manual control when automated system fails' },
          ],
          practiceQuestion: {
            question: 'What do you do first when detecting a small kick during MPD?',
            options: [
              'Shut in well immediately',
              'Increase SBP to contain the kick',
              'Stop drilling and wait',
              'Call main office'
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
          title: 'تطبيقات MPD في الحقل',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 تطبيقات عملية لـ MPD</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
MPD ليست مجرد نظرية - إنها تقنية تُستخدم يومياً في آلاف الآبار حول العالم. فيما يلي أهم التطبيقات.
</p>

<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #059669;">
<h3 style="color: #059669; font-size: 1.3rem; font-weight: bold; margin-bottom: 1rem;">1️⃣ آبار HPHT (High Pressure High Temperature)</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
الضغوط والحرارات العالية تخلق نوافذ طين ضيقة جداً.
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">📌 التحديات:</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li>تأثير الحرارة على كثافة الطين</li>
<li>ضغوط تكوين عالية جداً</li>
<li>نوافذ أقل من 0.5 ppg أحياناً</li>
</ul>
<p style="font-weight: bold; margin: 1rem 0 0.5rem;">حل MPD:</p>
<p style="line-height: 1.8;">تحكم دقيق بالضغط يسمح بالحفر حيث الطريقة التقليدية مستحيلة</p>
</div>
</div>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #2563eb;">
<h3 style="color: #1e40af; font-size: 1.3rem; font-weight: bold; margin-bottom: 1rem;">2️⃣ التكوينات المستنزفة (Depleted Reservoirs)</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
الحقول القديمة التي انخفض ضغطها بعد سنوات من الإنتاج.
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">📌 المشكلة:</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li>ضغط التكوين أقل من المتوقع</li>
<li>أي طين عادي يسبب فقدان كبير</li>
<li>صعوبة الوصول للهدف</li>
</ul>
<p style="font-weight: bold; margin: 1rem 0 0.5rem;">حل MPD:</p>
<p style="line-height: 1.8;">استخدام طين خفيف مع SBP للتوازن - يقلل الفقدان بشكل كبير</p>
</div>
</div>

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #f59e0b;">
<h3 style="color: #92400e; font-size: 1.3rem; font-weight: bold; margin-bottom: 1rem;">3️⃣ الآبار البحرية العميقة (Deepwater)</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
عمود الماء الطويل يخلق تحديات فريدة.
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">📌 لماذا MPD ضروري؟</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li>عمود الطين في الرايزر يضيف ضغطاً غير مرغوب</li>
<li>التكوينات السطحية ضعيفة</li>
<li>تكلفة الفشل عالية جداً</li>
</ul>
<p style="font-weight: bold; margin: 1rem 0 0.5rem;">التقنية المفضلة:</p>
<p style="line-height: 1.8;">DGD أو Riser-less MPD</p>
</div>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 فوائد MPD المثبتة</h2>

<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #64748b;">
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background: #e2e8f0;">
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: right;">الفائدة</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: right;">التحسن النموذجي</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;">تقليل NPT (وقت غير منتج)</td>
<td style="padding: 12px; border: 1px solid #cbd5e1; color: #059669; font-weight: bold;">30-50%</td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 12px; border: 1px solid #cbd5e1;">تقليل فقدان الطين</td>
<td style="padding: 12px; border: 1px solid #cbd5e1; color: #059669; font-weight: bold;">50-80%</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;">زيادة ROP</td>
<td style="padding: 12px; border: 1px solid #cbd5e1; color: #059669; font-weight: bold;">10-30%</td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 12px; border: 1px solid #cbd5e1;">تقليل عدد الكيسنقات</td>
<td style="padding: 12px; border: 1px solid #cbd5e1; color: #059669; font-weight: bold;">1-2 أقل</td>
</tr>
</tbody>
</table>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>MPD ضروري لآبار HPHT والنوافذ الضيقة</li>
<li>يقلل الفقدان في التكوينات المستنزفة</li>
<li>DGD الخيار الأفضل للآبار البحرية العميقة</li>
<li>الفوائد الاقتصادية مثبتة ومهمة</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'HPHT', definition: 'آبار الضغط العالي والحرارة العالية - من أصعب التحديات في الحفر' },
            { term: 'Depleted Reservoir', definition: 'مكمن مستنزف - انخفض ضغطه بعد الإنتاج' },
            { term: 'Deepwater', definition: 'حفر في المياه العميقة - تحديات فريدة بسبب عمود الماء' },
            { term: 'NPT', definition: 'Non-Productive Time - الوقت الضائع غير المنتج' },
            { term: 'ROP', definition: 'Rate of Penetration - سرعة الاختراق' },
          ],
          practiceQuestion: {
            question: 'ما هي النسبة النموذجية لتقليل فقدان الطين عند استخدام MPD؟',
            options: [
              '5-10%',
              '20-30%',
              '50-80%',
              '100%'
            ],
            correctAnswer: 2,
          },
        },
        en: {
          title: 'MPD Field Applications',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Practical MPD Applications</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
MPD is not just theory - it's a technique used daily in thousands of wells worldwide. Here are the main applications.
</p>

<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #059669;">
<h3 style="color: #059669; font-size: 1.3rem; font-weight: bold; margin-bottom: 1rem;">1️⃣ HPHT Wells (High Pressure High Temperature)</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
High pressures and temperatures create very narrow mud windows.
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">📌 Challenges:</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li>Temperature effect on mud density</li>
<li>Very high formation pressures</li>
<li>Windows less than 0.5 ppg sometimes</li>
</ul>
<p style="font-weight: bold; margin: 1rem 0 0.5rem;">MPD Solution:</p>
<p style="line-height: 1.8;">Precise pressure control allows drilling where conventional method is impossible</p>
</div>
</div>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #2563eb;">
<h3 style="color: #1e40af; font-size: 1.3rem; font-weight: bold; margin-bottom: 1rem;">2️⃣ Depleted Reservoirs</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
Old fields whose pressure has decreased after years of production.
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">📌 The Problem:</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li>Formation pressure lower than expected</li>
<li>Any normal mud causes significant losses</li>
<li>Difficulty reaching target</li>
</ul>
<p style="font-weight: bold; margin: 1rem 0 0.5rem;">MPD Solution:</p>
<p style="line-height: 1.8;">Use light mud with SBP for balance - significantly reduces losses</p>
</div>
</div>

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #f59e0b;">
<h3 style="color: #92400e; font-size: 1.3rem; font-weight: bold; margin-bottom: 1rem;">3️⃣ Deepwater Wells</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
Long water column creates unique challenges.
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">📌 Why is MPD necessary?</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li>Mud column in riser adds unwanted pressure</li>
<li>Shallow formations are weak</li>
<li>Cost of failure is very high</li>
</ul>
<p style="font-weight: bold; margin: 1rem 0 0.5rem;">Preferred Technique:</p>
<p style="line-height: 1.8;">DGD or Riser-less MPD</p>
</div>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Proven MPD Benefits</h2>

<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #64748b;">
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background: #e2e8f0;">
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: left;">Benefit</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: left;">Typical Improvement</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;">NPT Reduction</td>
<td style="padding: 12px; border: 1px solid #cbd5e1; color: #059669; font-weight: bold;">30-50%</td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 12px; border: 1px solid #cbd5e1;">Mud Loss Reduction</td>
<td style="padding: 12px; border: 1px solid #cbd5e1; color: #059669; font-weight: bold;">50-80%</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;">ROP Increase</td>
<td style="padding: 12px; border: 1px solid #cbd5e1; color: #059669; font-weight: bold;">10-30%</td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 12px; border: 1px solid #cbd5e1;">Casing String Reduction</td>
<td style="padding: 12px; border: 1px solid #cbd5e1; color: #059669; font-weight: bold;">1-2 fewer</td>
</tr>
</tbody>
</table>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>MPD essential for HPHT wells and narrow windows</li>
<li>Reduces losses in depleted formations</li>
<li>DGD best choice for deepwater wells</li>
<li>Economic benefits are proven and significant</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'HPHT', definition: 'High Pressure High Temperature wells - among the toughest drilling challenges' },
            { term: 'Depleted Reservoir', definition: 'Depleted reservoir - pressure decreased after production' },
            { term: 'Deepwater', definition: 'Drilling in deep water - unique challenges due to water column' },
            { term: 'NPT', definition: 'Non-Productive Time - wasted unproductive time' },
            { term: 'ROP', definition: 'Rate of Penetration - drilling speed' },
          ],
          practiceQuestion: {
            question: 'What is the typical mud loss reduction percentage when using MPD?',
            options: [
              '5-10%',
              '20-30%',
              '50-80%',
              '100%'
            ],
            correctAnswer: 2,
          },
        },
      },
    },
    {
      day: 6,
      type: 'quiz',
      quiz: {
        ar: {
          title: 'اختبار الحفر بالضغط المُدار',
          questions: [
            {
              question: 'ما هو الغرض الرئيسي من SBP في نظام MPD؟',
              options: ['تبريد البت', 'تعويض فقدان ECD عند إيقاف المضخات', 'زيادة سرعة الحفر', 'تقليل كثافة الطين'],
              correctAnswer: 1,
            },
            {
              question: 'ما هو RCD؟',
              options: ['جهاز قياس العمق', 'جهاز إغلاق دوار حول سلسلة الحفر', 'مضخة الطين', 'صمام الأمان'],
              correctAnswer: 1,
            },
            {
              question: 'أي تقنية MPD الأفضل للآبار البحرية العميقة؟',
              options: ['CBHP', 'DGD', 'الحفر التقليدي', 'Underbalanced'],
              correctAnswer: 1,
            },
            {
              question: 'ماذا يحدث لـ SBP عند زيادة معدل الضخ؟',
              options: ['يزداد', 'ينخفض', 'يبقى ثابتاً', 'يتذبذب'],
              correctAnswer: 1,
            },
            {
              question: 'ما هو الهدف المثالي لتذبذب BHP؟',
              options: ['± 200 psi', '± 50 psi', '± 500 psi', 'لا يهم'],
              correctAnswer: 1,
            },
            {
              question: 'ماذا تفعل أولاً عند فشل الخنق الآلي؟',
              options: ['إيقاف الحفر', 'التحويل للخنق الاحتياطي', 'زيادة كثافة الطين', 'الاتصال بالمكتب'],
              correctAnswer: 1,
            },
            {
              question: 'متى يُستخدم MPD بشكل أساسي؟',
              options: ['في كل الآبار', 'عند نافذة طين ضيقة', 'في الآبار الضحلة فقط', 'عند عدم توفر طين'],
              correctAnswer: 1,
            },
            {
              question: 'ما هي نسبة تقليل فقدان الطين النموذجية مع MPD؟',
              options: ['5-10%', '20-30%', '50-80%', '100%'],
              correctAnswer: 2,
            },
            {
              question: 'ما أهم وقت حساس في تشغيل MPD؟',
              options: ['أثناء الحفر', 'عند الوصلات والرحلات', 'أثناء تغيير البت', 'عند بداية البئر'],
              correctAnswer: 1,
            },
            {
              question: 'كيف يتم التعامل مع ركلة صغيرة في MPD؟',
              options: ['إغلاق فوري', 'زيادة SBP لاحتوائها', 'تجاهلها', 'إيقاف الحفر فقط'],
              correctAnswer: 1,
            },
          ],
        },
        en: {
          title: 'Managed Pressure Drilling Quiz',
          questions: [
            {
              question: 'What is the main purpose of SBP in MPD system?',
              options: ['Cool the bit', 'Compensate for ECD loss when pumps stop', 'Increase drilling speed', 'Reduce mud weight'],
              correctAnswer: 1,
            },
            {
              question: 'What is RCD?',
              options: ['Depth measurement device', 'Rotating seal device around drillstring', 'Mud pump', 'Safety valve'],
              correctAnswer: 1,
            },
            {
              question: 'Which MPD technique is best for deepwater wells?',
              options: ['CBHP', 'DGD', 'Conventional drilling', 'Underbalanced'],
              correctAnswer: 1,
            },
            {
              question: 'What happens to SBP when pump rate increases?',
              options: ['Increases', 'Decreases', 'Stays constant', 'Oscillates'],
              correctAnswer: 1,
            },
            {
              question: 'What is the ideal target for BHP fluctuation?',
              options: ['± 200 psi', '± 50 psi', '± 500 psi', 'Does not matter'],
              correctAnswer: 1,
            },
            {
              question: 'What do you do first when automated choke fails?',
              options: ['Stop drilling', 'Switch to backup choke', 'Increase mud weight', 'Call office'],
              correctAnswer: 1,
            },
            {
              question: 'When is MPD primarily used?',
              options: ['In all wells', 'With narrow mud window', 'In shallow wells only', 'When mud unavailable'],
              correctAnswer: 1,
            },
            {
              question: 'What is typical mud loss reduction with MPD?',
              options: ['5-10%', '20-30%', '50-80%', '100%'],
              correctAnswer: 2,
            },
            {
              question: 'What is the most sensitive time in MPD operation?',
              options: ['During drilling', 'During connections and trips', 'During bit change', 'At well start'],
              correctAnswer: 1,
            },
            {
              question: 'How is a small kick handled in MPD?',
              options: ['Immediate shut-in', 'Increase SBP to contain it', 'Ignore it', 'Just stop drilling'],
              correctAnswer: 1,
            },
          ],
        },
      },
    },
    {
      day: 7,
      type: 'project',
      project: {
        ar: {
          title: 'مشروع: تصميم خطة MPD لبئر صعب',
          description: 'قم بتصميم خطة MPD لبئر HPHT بنافذة طين ضيقة (0.8 ppg). حدد التقنية المناسبة وإجراءات التشغيل.',
          requirements: [
            'اختيار تقنية MPD المناسبة مع التبرير',
            'إعداد جدول تعويض الضغط المبسط',
            'وصف إجراءات الوصلات',
            'تحديد مؤشرات الأداء المستهدفة',
          ],
        },
        en: {
          title: 'Project: Design MPD Plan for Difficult Well',
          description: 'Design an MPD plan for an HPHT well with narrow mud window (0.8 ppg). Specify appropriate technique and operating procedures.',
          requirements: [
            'Select appropriate MPD technique with justification',
            'Prepare simplified pressure compensation schedule',
            'Describe connection procedures',
            'Define target performance indicators',
          ],
        },
      },
    },
  ],
};
