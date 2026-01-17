import { WeeklyLesson } from '../weeklyContent';

export const underbalancedDrillingLesson: WeeklyLesson = {
  lessonId: 'underbalanced-drilling',
  days: [
    {
      day: 1,
      type: 'learning',
      content: {
        ar: {
          title: 'الحفر تحت التوازن (UBD) - المفاهيم الأساسية',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 ما هو الحفر تحت التوازن؟</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
الحفر تحت التوازن (Underbalanced Drilling - UBD) هو تقنية حفر متقدمة يتم فيها الحفاظ على ضغط البئر القاعي (BHP) أقل من ضغط مسام التكوين (Formation Pore Pressure). هذا يسمح للسوائل (نفط/غاز/ماء) بالتدفق من التكوين إلى البئر أثناء الحفر.
</p>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="font-size: 1.25rem; margin-bottom: 1rem;">💡 لماذا نحفر تحت التوازن؟</h3>
<p style="line-height: 1.8;">في الحفر التقليدي (Overbalanced)، ضغط الطين يدفع السوائل بعيداً عن البئر ويخترق التكوين (Invasion). هذا قد يسبب تلف التكوين (Formation Damage) ويقلل الإنتاجية. في UBD، التكوين يبقى سليماً ويمكننا الإنتاج أثناء الحفر!</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 الفرق بين أنواع الحفر حسب التوازن</h3>
<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #64748b;">
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background: #e2e8f0;">
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: right;">النوع</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: right;">BHP مقارنة بـ Pore Pressure</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: right;">التدفق</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;"><strong>Overbalanced</strong></td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">BHP > Pore Pressure</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">الطين يدخل التكوين</td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 12px; border: 1px solid #cbd5e1;"><strong>Balanced</strong></td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">BHP = Pore Pressure</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">لا تدفق (نظرياً)</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;"><strong style="color: #059669;">Underbalanced</strong></td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">BHP < Pore Pressure</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">التكوين يدخل البئر</td>
</tr>
</tbody>
</table>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 فوائد الحفر تحت التوازن</h3>
<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #059669;">
<ul style="line-height: 2.2; padding-right: 1.5rem;">
<li><strong>تقليل تلف التكوين (Formation Damage):</strong> لا اختراق للطين أو الفلتر كيك في المسام</li>
<li><strong>زيادة معدل الاختراق (ROP):</strong> يمكن أن يتضاعف ROP بسبب غياب Chip Hold-Down Effect</li>
<li><strong>اكتشاف مبكر للمكمن:</strong> يمكن تقييم التكوين أثناء الحفر (إنتاج فوري)</li>
<li><strong>تقليل فقدان الطين:</strong> لا فقدان في التكوينات المفقودة لأن الضغط أقل</li>
<li><strong>تقليل انحشار الأنابيب (Differential Sticking):</strong> لا فرق ضغط يدفع الأنابيب للجدار</li>
<li><strong>إطالة عمر البت:</strong> تبريد أفضل بسبب تدفق سوائل التكوين</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 طرق تحقيق UBD</h3>
<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #2563eb;">
<p style="font-weight: bold; margin-bottom: 1rem;">هناك عدة طرق لتقليل BHP تحت ضغط المسام:</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #1e40af;">1️⃣ استخدام طين خفيف الوزن</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li>طين بكثافة أقل من الماء (Oil-based مع إضافات خاصة)</li>
<li>محدود بأقل كثافة ممكنة (~6.5-7 ppg)</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #1e40af;">2️⃣ حقن الغاز (Gas Injection)</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li>حقن النيتروجين أو الهواء في الطين لتقليل كثافته الفعالة</li>
<li>الأكثر شيوعاً في UBD</li>
<li>يمكن التحكم بكمية الغاز لضبط BHP</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #1e40af;">3️⃣ استخدام الرغوة (Foam)</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li>خليط من السائل والغاز والمواد الرغوية</li>
<li>كثافة منخفضة جداً (2-6 ppg)</li>
<li>قدرة حمل جيدة للقطع</li>
</ul>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 متطلبات السطح لـ UBD</h3>
<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #f59e0b;">
<ul style="line-height: 2.2; padding-right: 1.5rem;">
<li><strong>RCD (Rotating Control Device):</strong> لإغلاق البئر أثناء الحفر</li>
<li><strong>Choke Manifold:</strong> للتحكم بضغط السطح</li>
<li><strong>Separator (فاصل):</strong> لفصل الغاز والسوائل والقطع</li>
<li><strong>Flare Stack:</strong> لحرق الغازات الزائدة بأمان</li>
<li><strong>نظام حقن النيتروجين:</strong> مضخات ضغط عالي وخزانات</li>
<li><strong>أنظمة السلامة:</strong> كاشفات غاز، أنظمة إطفاء، تهوية</li>
</ul>
</div>

<div style="background: #fee2e2; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #dc2626;">
<h3 style="color: #dc2626; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">⚠️ مخاطر UBD</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li><strong>الحريق والانفجار:</strong> وجود هيدروكربونات على السطح يزيد المخاطر</li>
<li><strong>H2S:</strong> غاز كبريتيد الهيدروجين قاتل ويتطلب احتياطات خاصة</li>
<li><strong>استقرار البئر:</strong> غياب ضغط الطين قد يسبب انهيار الجدار</li>
<li><strong>التحكم بالبئر:</strong> أكثر تعقيداً من الحفر التقليدي</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>UBD يعني الحفر بضغط قاع أقل من ضغط التكوين</li>
<li>يحمي التكوين من التلف ويزيد الإنتاجية</li>
<li>يتحقق عادة بحقن الغاز أو استخدام الرغوة</li>
<li>يتطلب معدات سطحية خاصة للتعامل مع التدفق</li>
<li>المخاطر أعلى وتتطلب إجراءات سلامة صارمة</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'UBD', definition: 'الحفر تحت التوازن - ضغط البئر أقل من ضغط التكوين' },
            { term: 'Formation Damage', definition: 'تلف التكوين - انخفاض النفاذية بسبب اختراق الطين' },
            { term: 'Chip Hold-Down', definition: 'قوة تثبيت القطع - تقلل ROP في الحفر التقليدي' },
            { term: 'Nitrogen Injection', definition: 'حقن النيتروجين في الطين لتقليل كثافته' },
            { term: 'Separator', definition: 'فاصل سطحي لفصل الغاز والسوائل' },
          ],
          practiceQuestion: {
            question: 'ما هو السبب الرئيسي لاستخدام الحفر تحت التوازن؟',
            options: [
              'زيادة وزن الطين',
              'تقليل تلف التكوين وزيادة الإنتاجية',
              'تقليل تكلفة الطين',
              'تسريع عملية التغليف'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Underbalanced Drilling (UBD) - Basic Concepts',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 What is Underbalanced Drilling?</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
Underbalanced Drilling (UBD) is an advanced drilling technique where the bottomhole pressure (BHP) is maintained below the formation pore pressure. This allows reservoir fluids (oil/gas/water) to flow from the formation into the wellbore during drilling.
</p>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="font-size: 1.25rem; margin-bottom: 1rem;">💡 Why Drill Underbalanced?</h3>
<p style="line-height: 1.8;">In conventional (Overbalanced) drilling, mud pressure pushes fluids away from the wellbore and penetrates the formation (Invasion). This can cause Formation Damage and reduce productivity. In UBD, the formation remains intact and we can produce while drilling!</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Types of Drilling by Balance</h3>
<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #64748b;">
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background: #e2e8f0;">
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: left;">Type</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: left;">BHP vs Pore Pressure</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: left;">Flow</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;"><strong>Overbalanced</strong></td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">BHP > Pore Pressure</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Mud enters formation</td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 12px; border: 1px solid #cbd5e1;"><strong>Balanced</strong></td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">BHP = Pore Pressure</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">No flow (theoretically)</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;"><strong style="color: #059669;">Underbalanced</strong></td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">BHP < Pore Pressure</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Formation enters well</td>
</tr>
</tbody>
</table>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Benefits of Underbalanced Drilling</h3>
<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #059669;">
<ul style="line-height: 2.2; padding-left: 1.5rem;">
<li><strong>Reduced Formation Damage:</strong> No mud or filter cake invasion into pores</li>
<li><strong>Increased ROP:</strong> ROP can double due to absence of Chip Hold-Down Effect</li>
<li><strong>Early Reservoir Discovery:</strong> Can evaluate formation while drilling (immediate production)</li>
<li><strong>Reduced Mud Loss:</strong> No loss in lost circulation zones because pressure is lower</li>
<li><strong>Reduced Differential Sticking:</strong> No pressure differential pushing pipe to wall</li>
<li><strong>Extended Bit Life:</strong> Better cooling from formation fluid flow</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Methods to Achieve UBD</h3>
<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #2563eb;">
<p style="font-weight: bold; margin-bottom: 1rem;">Several methods to reduce BHP below pore pressure:</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #1e40af;">1️⃣ Light Weight Mud</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li>Mud with density below water (Oil-based with special additives)</li>
<li>Limited to lowest possible density (~6.5-7 ppg)</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #1e40af;">2️⃣ Gas Injection</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li>Inject nitrogen or air into mud to reduce effective density</li>
<li>Most common UBD method</li>
<li>Can control gas amount to adjust BHP</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #1e40af;">3️⃣ Foam</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li>Mixture of liquid, gas, and foaming agents</li>
<li>Very low density (2-6 ppg)</li>
<li>Good cuttings carrying capacity</li>
</ul>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Surface Requirements for UBD</h3>
<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #f59e0b;">
<ul style="line-height: 2.2; padding-left: 1.5rem;">
<li><strong>RCD (Rotating Control Device):</strong> To close well while drilling</li>
<li><strong>Choke Manifold:</strong> To control surface pressure</li>
<li><strong>Separator:</strong> To separate gas, liquids, and cuttings</li>
<li><strong>Flare Stack:</strong> To safely burn excess gases</li>
<li><strong>Nitrogen Injection System:</strong> High pressure pumps and tanks</li>
<li><strong>Safety Systems:</strong> Gas detectors, fire suppression, ventilation</li>
</ul>
</div>

<div style="background: #fee2e2; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #dc2626;">
<h3 style="color: #dc2626; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">⚠️ UBD Risks</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li><strong>Fire and Explosion:</strong> Hydrocarbons at surface increase risks</li>
<li><strong>H2S:</strong> Hydrogen sulfide is deadly and requires special precautions</li>
<li><strong>Wellbore Stability:</strong> Lack of mud pressure may cause wall collapse</li>
<li><strong>Well Control:</strong> More complex than conventional drilling</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>UBD means drilling with BHP less than formation pressure</li>
<li>Protects formation from damage and increases productivity</li>
<li>Usually achieved by gas injection or foam</li>
<li>Requires special surface equipment to handle flow</li>
<li>Risks are higher and require strict safety procedures</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'UBD', definition: 'Underbalanced Drilling - wellbore pressure less than formation pressure' },
            { term: 'Formation Damage', definition: 'Reduced permeability due to mud invasion' },
            { term: 'Chip Hold-Down', definition: 'Force holding cuttings - reduces ROP in conventional drilling' },
            { term: 'Nitrogen Injection', definition: 'Injecting nitrogen into mud to reduce density' },
            { term: 'Separator', definition: 'Surface equipment to separate gas and liquids' },
          ],
          practiceQuestion: {
            question: 'What is the main reason for using underbalanced drilling?',
            options: [
              'Increase mud weight',
              'Reduce formation damage and increase productivity',
              'Reduce mud cost',
              'Speed up casing operations'
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
          title: 'أنظمة سوائل UBD وتقنيات حقن الغاز',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 أنظمة سوائل الحفر تحت التوازن</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
اختيار نظام السائل المناسب لـ UBD يعتمد على عوامل متعددة منها: ضغط التكوين المتوقع، نوع السوائل في المكمن، عمق البئر، ومتطلبات السلامة.
</p>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 أنظمة السوائل الرئيسية</h3>

<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #059669;">
<h3 style="color: #059669; font-size: 1.3rem; font-weight: bold; margin-bottom: 1rem;">1️⃣ نظام الطين الهوائي (Gasified Mud / Aerated Mud)</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
يتم حقن غاز (عادة النيتروجين أو الهواء) في الطين التقليدي لتقليل كثافته الفعالة.
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<table style="width: 100%; border-collapse: collapse;">
<tr>
<td style="padding: 8px; border: 1px solid #ddd;"><strong>الكثافة الناتجة:</strong></td>
<td style="padding: 8px; border: 1px solid #ddd;">4-10 ppg (حسب نسبة الغاز)</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 8px; border: 1px solid #ddd;"><strong>الغاز المستخدم:</strong></td>
<td style="padding: 8px; border: 1px solid #ddd;">نيتروجين (الأفضل) أو هواء مضغوط</td>
</tr>
<tr>
<td style="padding: 8px; border: 1px solid #ddd;"><strong>معدل حقن الغاز:</strong></td>
<td style="padding: 8px; border: 1px solid #ddd;">500-3000 scfm</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 8px; border: 1px solid #ddd;"><strong>المميزات:</strong></td>
<td style="padding: 8px; border: 1px solid #ddd;">تحكم جيد، قدرة حمل للقطع</td>
</tr>
</table>
</div>
</div>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #2563eb;">
<h3 style="color: #1e40af; font-size: 1.3rem; font-weight: bold; margin-bottom: 1rem;">2️⃣ نظام الرغوة (Foam System)</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
خليط من الماء والغاز ومادة رغوية (Surfactant). يشكل بنية خلوية مستقرة.
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<table style="width: 100%; border-collapse: collapse;">
<tr>
<td style="padding: 8px; border: 1px solid #ddd;"><strong>الكثافة الناتجة:</strong></td>
<td style="padding: 8px; border: 1px solid #ddd;">2-6 ppg</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 8px; border: 1px solid #ddd;"><strong>نسبة الغاز (Foam Quality):</strong></td>
<td style="padding: 8px; border: 1px solid #ddd;">60-95% من الحجم</td>
</tr>
<tr>
<td style="padding: 8px; border: 1px solid #ddd;"><strong>المميزات:</strong></td>
<td style="padding: 8px; border: 1px solid #ddd;">كثافة منخفضة جداً، حمل قطع ممتاز</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 8px; border: 1px solid #ddd;"><strong>العيوب:</strong></td>
<td style="padding: 8px; border: 1px solid #ddd;">تتأثر بالحرارة والملوحة</td>
</tr>
</table>
</div>
</div>

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #f59e0b;">
<h3 style="color: #92400e; font-size: 1.3rem; font-weight: bold; margin-bottom: 1rem;">3️⃣ نظام الهواء/الغاز النقي (Air/Gas Drilling)</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
استخدام الغاز فقط (هواء أو نيتروجين) بدون سائل. أخف نظام ممكن.
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<table style="width: 100%; border-collapse: collapse;">
<tr>
<td style="padding: 8px; border: 1px solid #ddd;"><strong>الكثافة الناتجة:</strong></td>
<td style="padding: 8px; border: 1px solid #ddd;">~0.1 ppg</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 8px; border: 1px solid #ddd;"><strong>السرعة الحلقية:</strong></td>
<td style="padding: 8px; border: 1px solid #ddd;">3000+ fpm لرفع القطع</td>
</tr>
<tr>
<td style="padding: 8px; border: 1px solid #ddd;"><strong>المميزات:</strong></td>
<td style="padding: 8px; border: 1px solid #ddd;">أعلى ROP، لا تلف للتكوين</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 8px; border: 1px solid #ddd;"><strong>العيوب:</strong></td>
<td style="padding: 8px; border: 1px solid #ddd;">لا يعمل مع تدفق الماء</td>
</tr>
</table>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 تقنيات حقن الغاز</h3>
<div style="background: #e8f4f8; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<p style="font-weight: bold; margin-bottom: 1rem;">هناك طريقتان رئيسيتان لحقن الغاز:</p>

<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #0369a1; margin-bottom: 0.5rem;">1. الحقن في سلسلة الحفر (Drillstring Injection)</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li>الغاز يُحقن من السطح عبر الـ Standpipe</li>
<li>يختلط مع الطين داخل سلسلة الحفر</li>
<li>يوفر تأثير UBD من فوهات البت إلى السطح</li>
<li>يحتاج معدات خاصة لمنع الارتجاع</li>
</ul>
</div>

<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #0369a1; margin-bottom: 0.5rem;">2. الحقن الحلقي (Annular Injection / Parasite String)</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li>الغاز يُحقن في الفراغ الحلقي عبر أنبوب جانبي صغير</li>
<li>يمكن حقنه عند أي عمق</li>
<li>تحكم أفضل بموقع بداية التخفيف</li>
<li>يتجنب مشاكل الضخ في سلسلة الحفر</li>
</ul>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 حسابات معدل حقن الغاز</h3>
<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #059669;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
تحديد معدل الغاز المطلوب يعتمد على الكثافة الفعالة المطلوبة وظروف البئر:
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; margin-bottom: 1rem;">العوامل المؤثرة:</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li>كثافة الطين الأساسي ومعدل ضخه</li>
<li>العمق والضغط والحرارة في القاع</li>
<li>الكثافة الفعالة المطلوبة</li>
<li>نوع الغاز (N2, Air, Natural Gas)</li>
</ul>
</div>
<div style="background: #ecfdf5; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
<p style="font-weight: bold; color: #059669;">📊 قاعدة عملية:</p>
<p style="line-height: 1.8;">كل 100 scfm من النيتروجين تقلل كثافة الطين الفعالة بحوالي 0.1-0.2 ppg (تختلف حسب العمق والظروف)</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 مقارنة أنظمة UBD</h3>
<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #64748b;">
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background: #e2e8f0;">
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: right;">النظام</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: right;">الكثافة</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: right;">الاستخدام الأمثل</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: right;">التعقيد</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Gasified Mud</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">4-10 ppg</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">معظم تطبيقات UBD</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">متوسط</td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 12px; border: 1px solid #cbd5e1;">Foam</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">2-6 ppg</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">ضغوط منخفضة جداً</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">عالي</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Air/Gas</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">~0.1 ppg</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">تكوينات جافة، ROP عالي</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">منخفض-متوسط</td>
</tr>
</tbody>
</table>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>Gasified Mud الأكثر شيوعاً في UBD</li>
<li>الرغوة للضغوط المنخفضة جداً</li>
<li>حفر الهواء لأعلى ROP لكن في تكوينات جافة</li>
<li>يمكن حقن الغاز في الـ Drillstring أو الـ Annulus</li>
<li>معدل الغاز يُحسب حسب الكثافة الفعالة المطلوبة</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Gasified Mud', definition: 'طين محقون بالغاز لتقليل كثافته الفعالة' },
            { term: 'Foam Quality', definition: 'نسبة الغاز في الرغوة كنسبة مئوية من الحجم' },
            { term: 'Parasite String', definition: 'أنبوب جانبي لحقن الغاز في الفراغ الحلقي' },
            { term: 'SCFM', definition: 'Standard Cubic Feet per Minute - وحدة قياس معدل تدفق الغاز' },
            { term: 'Annular Velocity', definition: 'السرعة الحلقية - مهمة لرفع القطع في حفر الهواء' },
          ],
          practiceQuestion: {
            question: 'أي نظام UBD يوفر أقل كثافة ممكنة؟',
            options: [
              'Gasified Mud',
              'Foam System',
              'Air/Gas Drilling',
              'Water-based Mud'
            ],
            correctAnswer: 2,
          },
        },
        en: {
          title: 'UBD Fluid Systems and Gas Injection Techniques',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Underbalanced Drilling Fluid Systems</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
Choosing the appropriate fluid system for UBD depends on multiple factors including: expected formation pressure, type of reservoir fluids, well depth, and safety requirements.
</p>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Main Fluid Systems</h3>

<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #059669;">
<h3 style="color: #059669; font-size: 1.3rem; font-weight: bold; margin-bottom: 1rem;">1️⃣ Gasified/Aerated Mud System</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
Gas (usually nitrogen or air) is injected into conventional mud to reduce its effective density.
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<table style="width: 100%; border-collapse: collapse;">
<tr>
<td style="padding: 8px; border: 1px solid #ddd;"><strong>Resulting Density:</strong></td>
<td style="padding: 8px; border: 1px solid #ddd;">4-10 ppg (depending on gas ratio)</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 8px; border: 1px solid #ddd;"><strong>Gas Used:</strong></td>
<td style="padding: 8px; border: 1px solid #ddd;">Nitrogen (preferred) or compressed air</td>
</tr>
<tr>
<td style="padding: 8px; border: 1px solid #ddd;"><strong>Gas Injection Rate:</strong></td>
<td style="padding: 8px; border: 1px solid #ddd;">500-3000 scfm</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 8px; border: 1px solid #ddd;"><strong>Advantages:</strong></td>
<td style="padding: 8px; border: 1px solid #ddd;">Good control, cuttings carrying capacity</td>
</tr>
</table>
</div>
</div>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #2563eb;">
<h3 style="color: #1e40af; font-size: 1.3rem; font-weight: bold; margin-bottom: 1rem;">2️⃣ Foam System</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
Mixture of water, gas, and surfactant. Forms a stable cellular structure.
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<table style="width: 100%; border-collapse: collapse;">
<tr>
<td style="padding: 8px; border: 1px solid #ddd;"><strong>Resulting Density:</strong></td>
<td style="padding: 8px; border: 1px solid #ddd;">2-6 ppg</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 8px; border: 1px solid #ddd;"><strong>Foam Quality:</strong></td>
<td style="padding: 8px; border: 1px solid #ddd;">60-95% by volume</td>
</tr>
<tr>
<td style="padding: 8px; border: 1px solid #ddd;"><strong>Advantages:</strong></td>
<td style="padding: 8px; border: 1px solid #ddd;">Very low density, excellent cuttings transport</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 8px; border: 1px solid #ddd;"><strong>Disadvantages:</strong></td>
<td style="padding: 8px; border: 1px solid #ddd;">Affected by temperature and salinity</td>
</tr>
</table>
</div>
</div>

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #f59e0b;">
<h3 style="color: #92400e; font-size: 1.3rem; font-weight: bold; margin-bottom: 1rem;">3️⃣ Pure Air/Gas Drilling</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
Using gas only (air or nitrogen) without liquid. Lightest possible system.
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<table style="width: 100%; border-collapse: collapse;">
<tr>
<td style="padding: 8px; border: 1px solid #ddd;"><strong>Resulting Density:</strong></td>
<td style="padding: 8px; border: 1px solid #ddd;">~0.1 ppg</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 8px; border: 1px solid #ddd;"><strong>Annular Velocity:</strong></td>
<td style="padding: 8px; border: 1px solid #ddd;">3000+ fpm to lift cuttings</td>
</tr>
<tr>
<td style="padding: 8px; border: 1px solid #ddd;"><strong>Advantages:</strong></td>
<td style="padding: 8px; border: 1px solid #ddd;">Highest ROP, no formation damage</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 8px; border: 1px solid #ddd;"><strong>Disadvantages:</strong></td>
<td style="padding: 8px; border: 1px solid #ddd;">Doesn't work with water influx</td>
</tr>
</table>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Gas Injection Techniques</h3>
<div style="background: #e8f4f8; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<p style="font-weight: bold; margin-bottom: 1rem;">Two main methods for gas injection:</p>

<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #0369a1; margin-bottom: 0.5rem;">1. Drillstring Injection</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li>Gas is injected from surface through the Standpipe</li>
<li>Mixes with mud inside the drillstring</li>
<li>Provides UBD effect from bit nozzles to surface</li>
<li>Needs special equipment to prevent backflow</li>
</ul>
</div>

<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #0369a1; margin-bottom: 0.5rem;">2. Annular Injection (Parasite String)</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li>Gas is injected into annulus through a small side tubing</li>
<li>Can inject at any depth</li>
<li>Better control of lightening starting point</li>
<li>Avoids drillstring pumping issues</li>
</ul>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Gas Injection Rate Calculations</h3>
<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #059669;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
Determining required gas rate depends on target effective density and well conditions:
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; margin-bottom: 1rem;">Affecting Factors:</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li>Base mud density and pump rate</li>
<li>Depth, pressure, and temperature at bottom</li>
<li>Required effective density</li>
<li>Type of gas (N2, Air, Natural Gas)</li>
</ul>
</div>
<div style="background: #ecfdf5; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
<p style="font-weight: bold; color: #059669;">📊 Practical Rule:</p>
<p style="line-height: 1.8;">Every 100 scfm of nitrogen reduces effective mud density by about 0.1-0.2 ppg (varies with depth and conditions)</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 UBD Systems Comparison</h3>
<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #64748b;">
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background: #e2e8f0;">
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: left;">System</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: left;">Density</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: left;">Best Use</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: left;">Complexity</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Gasified Mud</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">4-10 ppg</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Most UBD applications</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Medium</td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 12px; border: 1px solid #cbd5e1;">Foam</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">2-6 ppg</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Very low pressures</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">High</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Air/Gas</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">~0.1 ppg</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Dry formations, high ROP</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Low-Medium</td>
</tr>
</tbody>
</table>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>Gasified Mud is most common in UBD</li>
<li>Foam for very low pressures</li>
<li>Air drilling for highest ROP in dry formations</li>
<li>Gas can be injected in Drillstring or Annulus</li>
<li>Gas rate calculated based on required effective density</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Gasified Mud', definition: 'Mud injected with gas to reduce effective density' },
            { term: 'Foam Quality', definition: 'Gas ratio in foam as percentage of volume' },
            { term: 'Parasite String', definition: 'Side tubing for gas injection into annulus' },
            { term: 'SCFM', definition: 'Standard Cubic Feet per Minute - gas flow rate unit' },
            { term: 'Annular Velocity', definition: 'Important for cuttings transport in air drilling' },
          ],
          practiceQuestion: {
            question: 'Which UBD system provides the lowest possible density?',
            options: [
              'Gasified Mud',
              'Foam System',
              'Air/Gas Drilling',
              'Water-based Mud'
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
          title: 'المعدات السطحية والتحكم بالبئر في UBD',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 المعدات السطحية لـ UBD</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
الحفر تحت التوازن يتطلب معدات سطحية متخصصة للتعامل مع تدفق السوائل والغازات من التكوين أثناء الحفر. هذه المعدات تشكل الفرق الرئيسي عن الحفر التقليدي.
</p>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 مكونات النظام السطحي</h3>

<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #059669;">
<h3 style="color: #059669; font-size: 1.3rem; font-weight: bold; margin-bottom: 1rem;">1️⃣ RCD (Rotating Control Device)</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
جهاز التحكم الدوار - يغلق البئر حول سلسلة الحفر مع السماح بالدوران والحركة الرأسية.
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<ul style="padding-right: 1.5rem; line-height: 2;">
<li><strong>الموقع:</strong> يُركب فوق الـ BOP Stack</li>
<li><strong>العنصر الختمي:</strong> Stripper Rubber أو Bearing Assembly</li>
<li><strong>قدرة الضغط:</strong> 1500-5000 psi حسب النوع</li>
<li><strong>قدرة الدوران:</strong> 100+ RPM</li>
<li><strong>الوظيفة:</strong> يحول البئر من "مفتوح" إلى "مغلق" مع الحفاظ على العمليات</li>
</ul>
</div>
</div>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #2563eb;">
<h3 style="color: #1e40af; font-size: 1.3rem; font-weight: bold; margin-bottom: 1rem;">2️⃣ Choke Manifold</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
نظام الخنق للتحكم بضغط السطح ومعدل التدفق.
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<ul style="padding-right: 1.5rem; line-height: 2;">
<li><strong>نوع الـ Choke:</strong> Fixed أو Adjustable أو Automatic</li>
<li><strong>ضغط العمل:</strong> يتناسب مع أقصى ضغط متوقع</li>
<li><strong>التحكم:</strong> يدوي أو آلي (PLC-controlled)</li>
<li><strong>الوظيفة:</strong> يحافظ على Back Pressure المطلوب</li>
</ul>
</div>
</div>

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #f59e0b;">
<h3 style="color: #92400e; font-size: 1.3rem; font-weight: bold; margin-bottom: 1rem;">3️⃣ Four-Phase Separator</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
فاصل رباعي المراحل لفصل الغاز والنفط والماء والقطع.
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<ul style="padding-right: 1.5rem; line-height: 2;">
<li><strong>المرحلة 1:</strong> فصل الغاز (يذهب للفحص أو الحرق)</li>
<li><strong>المرحلة 2:</strong> فصل النفط (يُخزن أو يُشحن)</li>
<li><strong>المرحلة 3:</strong> فصل الماء (يُعالج أو يُعاد للتكوين)</li>
<li><strong>المرحلة 4:</strong> فصل القطع (تُرسل للطين أو التخلص)</li>
</ul>
</div>
</div>

<div style="background: #e8f4f8; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #0369a1; font-size: 1.3rem; font-weight: bold; margin-bottom: 1rem;">4️⃣ Flare System</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
نظام حرق الغازات بأمان.
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<ul style="padding-right: 1.5rem; line-height: 2;">
<li><strong>Flare Stack:</strong> برج مرتفع لحرق الغاز بعيداً عن الموقع</li>
<li><strong>Ignition System:</strong> نظام إشعال مستمر أو تلقائي</li>
<li><strong>المسافة:</strong> 50-100 متر على الأقل من الحفارة</li>
<li><strong>البديل:</strong> في بعض الحالات يُمكن استخدام غاز التكوين كوقود</li>
</ul>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 مسار التدفق السطحي</h3>
<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #64748b;">
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; margin-bottom: 1rem; color: #1e3a5f;">مسار السوائل من البئر إلى المعالجة:</p>
<ol style="padding-right: 1.5rem; line-height: 2.2;">
<li><strong>البئر:</strong> الخليط (طين + غاز + نفط + ماء + قطع) يصعد للسطح</li>
<li><strong>RCD:</strong> يمر عبر الختم الدوار</li>
<li><strong>Choke Manifold:</strong> يُتحكم بالضغط والتدفق</li>
<li><strong>Separator:</strong> يُفصل إلى مكوناته</li>
<li><strong>الغاز:</strong> يذهب للفحص ثم الحرق أو الاستخدام</li>
<li><strong>السوائل:</strong> تُعالج أو تُخزن</li>
<li><strong>الطين والقطع:</strong> تعود لنظام الطين أو التخلص</li>
</ol>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 التحكم بالبئر في UBD</h3>
<div style="background: #fee2e2; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #dc2626;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
التحكم بالبئر في UBD مختلف عن الحفر التقليدي لأن البئر يتدفق طوال الوقت:
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; margin-bottom: 1rem; color: #dc2626;">الفرق الرئيسي:</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li>في الحفر التقليدي: التدفق = مشكلة (ركلة)</li>
<li>في UBD: التدفق = طبيعي ومتوقع</li>
<li>التحكم يعني: إدارة التدفق وليس إيقافه</li>
</ul>
</div>
</div>

<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #059669;">
<h3 style="color: #059669; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">متى نوقف UBD ونتحول لـ Overbalanced؟</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>تدفق غير متحكم به (خارج سعة المعدات)</li>
<li>اكتشاف H2S بتركيز خطير</li>
<li>انهيار البئر أو مشاكل استقرارية خطيرة</li>
<li>فشل معدات السلامة السطحية</li>
<li>طوارئ تتطلب إغلاق البئر فوراً</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 إجراء Snubbing</h3>
<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #2563eb;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
في UBD، قد نحتاج لإدخال سلسلة الحفر في البئر ضد ضغط التكوين (Snubbing):
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<ul style="padding-right: 1.5rem; line-height: 2;">
<li><strong>السبب:</strong> ضغط البئر يدفع الأنابيب للأعلى</li>
<li><strong>الحل:</strong> استخدام Snubbing Unit أو قوة الجاذبية</li>
<li><strong>نقطة التوازن:</strong> العمق الذي تتوازن فيه القوى</li>
<li><strong>تحت نقطة التوازن:</strong> الوزن يسحب الأنابيب للأسفل</li>
</ul>
</div>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>RCD يغلق البئر مع السماح بالحفر</li>
<li>Choke يتحكم بضغط السطح</li>
<li>Separator يفصل المكونات الأربعة</li>
<li>Flare يحرق الغازات بأمان</li>
<li>التحكم بالبئر في UBD = إدارة التدفق</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'RCD', definition: 'جهاز التحكم الدوار - يغلق البئر مع السماح بالحفر' },
            { term: 'Four-Phase Separator', definition: 'فاصل يفصل الغاز والنفط والماء والقطع' },
            { term: 'Flare Stack', definition: 'برج حرق الغازات بأمان بعيداً عن الموقع' },
            { term: 'Snubbing', definition: 'إدخال الأنابيب ضد ضغط البئر' },
            { term: 'Back Pressure', definition: 'الضغط الخلفي المطبق على السطح' },
          ],
          practiceQuestion: {
            question: 'ما وظيفة الـ Four-Phase Separator في نظام UBD؟',
            options: [
              'ضخ الطين للبئر',
              'فصل الغاز والنفط والماء والقطع',
              'قياس العمق',
              'تدوير سلسلة الحفر'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Surface Equipment and Well Control in UBD',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 UBD Surface Equipment</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
Underbalanced drilling requires specialized surface equipment to handle the flow of fluids and gases from the formation during drilling. This equipment is the main difference from conventional drilling.
</p>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Surface System Components</h3>

<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #059669;">
<h3 style="color: #059669; font-size: 1.3rem; font-weight: bold; margin-bottom: 1rem;">1️⃣ RCD (Rotating Control Device)</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
Seals the wellbore around the drillstring while allowing rotation and vertical movement.
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<ul style="padding-left: 1.5rem; line-height: 2;">
<li><strong>Location:</strong> Mounted above BOP Stack</li>
<li><strong>Sealing Element:</strong> Stripper Rubber or Bearing Assembly</li>
<li><strong>Pressure Rating:</strong> 1500-5000 psi depending on type</li>
<li><strong>Rotation Capacity:</strong> 100+ RPM</li>
<li><strong>Function:</strong> Converts well from "open" to "closed" while maintaining operations</li>
</ul>
</div>
</div>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #2563eb;">
<h3 style="color: #1e40af; font-size: 1.3rem; font-weight: bold; margin-bottom: 1rem;">2️⃣ Choke Manifold</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
Choke system for controlling surface pressure and flow rate.
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<ul style="padding-left: 1.5rem; line-height: 2;">
<li><strong>Choke Type:</strong> Fixed, Adjustable, or Automatic</li>
<li><strong>Working Pressure:</strong> Matched to maximum expected pressure</li>
<li><strong>Control:</strong> Manual or automatic (PLC-controlled)</li>
<li><strong>Function:</strong> Maintains required Back Pressure</li>
</ul>
</div>
</div>

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #f59e0b;">
<h3 style="color: #92400e; font-size: 1.3rem; font-weight: bold; margin-bottom: 1rem;">3️⃣ Four-Phase Separator</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
Separates gas, oil, water, and cuttings.
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<ul style="padding-left: 1.5rem; line-height: 2;">
<li><strong>Phase 1:</strong> Gas separation (goes to analysis or flare)</li>
<li><strong>Phase 2:</strong> Oil separation (stored or shipped)</li>
<li><strong>Phase 3:</strong> Water separation (treated or reinjected)</li>
<li><strong>Phase 4:</strong> Cuttings separation (sent to mud system or disposal)</li>
</ul>
</div>
</div>

<div style="background: #e8f4f8; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #0369a1; font-size: 1.3rem; font-weight: bold; margin-bottom: 1rem;">4️⃣ Flare System</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
Safe gas combustion system.
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<ul style="padding-left: 1.5rem; line-height: 2;">
<li><strong>Flare Stack:</strong> Elevated tower for burning gas away from location</li>
<li><strong>Ignition System:</strong> Continuous or automatic ignition</li>
<li><strong>Distance:</strong> At least 50-100 meters from rig</li>
<li><strong>Alternative:</strong> In some cases formation gas can be used as fuel</li>
</ul>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Surface Flow Path</h3>
<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #64748b;">
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; margin-bottom: 1rem; color: #1e3a5f;">Fluid path from well to processing:</p>
<ol style="padding-left: 1.5rem; line-height: 2.2;">
<li><strong>Well:</strong> Mixture (mud + gas + oil + water + cuttings) rises to surface</li>
<li><strong>RCD:</strong> Passes through rotating seal</li>
<li><strong>Choke Manifold:</strong> Pressure and flow controlled</li>
<li><strong>Separator:</strong> Separated into components</li>
<li><strong>Gas:</strong> Goes to analysis then flare or use</li>
<li><strong>Liquids:</strong> Treated or stored</li>
<li><strong>Mud and Cuttings:</strong> Return to mud system or disposal</li>
</ol>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Well Control in UBD</h3>
<div style="background: #fee2e2; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #dc2626;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
Well control in UBD is different from conventional drilling because the well flows continuously:
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; margin-bottom: 1rem; color: #dc2626;">Main Difference:</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li>In conventional drilling: Flow = problem (kick)</li>
<li>In UBD: Flow = normal and expected</li>
<li>Control means: Managing flow, not stopping it</li>
</ul>
</div>
</div>

<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #059669;">
<h3 style="color: #059669; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">When to Stop UBD and Convert to Overbalanced?</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>Uncontrolled flow (beyond equipment capacity)</li>
<li>Dangerous H2S concentration detected</li>
<li>Wellbore collapse or serious stability issues</li>
<li>Surface safety equipment failure</li>
<li>Emergency requiring immediate well shut-in</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Snubbing Procedure</h3>
<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #2563eb;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
In UBD, we may need to push drillstring into well against formation pressure (Snubbing):
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<ul style="padding-left: 1.5rem; line-height: 2;">
<li><strong>Reason:</strong> Well pressure pushes pipe upward</li>
<li><strong>Solution:</strong> Use Snubbing Unit or gravity force</li>
<li><strong>Balance Point:</strong> Depth where forces equalize</li>
<li><strong>Below Balance Point:</strong> Weight pulls pipe downward</li>
</ul>
</div>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>RCD closes well while allowing drilling</li>
<li>Choke controls surface pressure</li>
<li>Separator separates four components</li>
<li>Flare safely burns gases</li>
<li>Well control in UBD = flow management</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'RCD', definition: 'Rotating Control Device - closes well while allowing drilling' },
            { term: 'Four-Phase Separator', definition: 'Separates gas, oil, water, and cuttings' },
            { term: 'Flare Stack', definition: 'Tower for safely burning gases away from location' },
            { term: 'Snubbing', definition: 'Pushing pipe into well against pressure' },
            { term: 'Back Pressure', definition: 'Pressure applied at surface' },
          ],
          practiceQuestion: {
            question: 'What is the function of the Four-Phase Separator in UBD?',
            options: [
              'Pump mud into well',
              'Separate gas, oil, water, and cuttings',
              'Measure depth',
              'Rotate drillstring'
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
          title: 'السلامة والتطبيقات الميدانية في UBD',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 اعتبارات السلامة في UBD</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
الحفر تحت التوازن يحمل مخاطر إضافية مقارنة بالحفر التقليدي. وجود الهيدروكربونات على السطح أثناء الحفر يتطلب إجراءات سلامة صارمة.
</p>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 مخاطر UBD الرئيسية</h3>
<div style="background: #fee2e2; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #dc2626;">
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background: #fecaca;">
<th style="padding: 12px; border: 1px solid #fca5a5; text-align: right;">الخطر</th>
<th style="padding: 12px; border: 1px solid #fca5a5; text-align: right;">السبب</th>
<th style="padding: 12px; border: 1px solid #fca5a5; text-align: right;">الوقاية</th>
</tr>
</thead>
<tbody>
<tr style="background: #fff;">
<td style="padding: 12px; border: 1px solid #ddd;"><strong>الحريق والانفجار</strong></td>
<td style="padding: 12px; border: 1px solid #ddd;">وجود HC على السطح</td>
<td style="padding: 12px; border: 1px solid #ddd;">أنظمة إطفاء، مناطق آمنة</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;"><strong>H2S</strong></td>
<td style="padding: 12px; border: 1px solid #ddd;">غاز سام من التكوين</td>
<td style="padding: 12px; border: 1px solid #ddd;">كاشفات، معدات تنفس</td>
</tr>
<tr style="background: #fff;">
<td style="padding: 12px; border: 1px solid #ddd;"><strong>فقدان السيطرة</strong></td>
<td style="padding: 12px; border: 1px solid #ddd;">تدفق يفوق سعة المعدات</td>
<td style="padding: 12px; border: 1px solid #ddd;">تصميم صحيح، مراقبة مستمرة</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;"><strong>انهيار البئر</strong></td>
<td style="padding: 12px; border: 1px solid #ddd;">غياب دعم الطين</td>
<td style="padding: 12px; border: 1px solid #ddd;">دراسة استقرارية مسبقة</td>
</tr>
</tbody>
</table>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 متطلبات السلامة الإلزامية</h3>
<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #059669;">
<ul style="line-height: 2.2; padding-right: 1.5rem;">
<li><strong>كاشفات الغاز:</strong> H2S و LEL في جميع أنحاء الموقع</li>
<li><strong>معدات التنفس:</strong> SCBA متاحة لكل شخص</li>
<li><strong>نقاط التجمع:</strong> محددة ومعروفة للجميع</li>
<li><strong>أنظمة الإطفاء:</strong> تلقائية ويدوية</li>
<li><strong>إضاءة طوارئ:</strong> تعمل بالبطارية</li>
<li><strong>اتصالات:</strong> نظام إنذار وإخلاء واضح</li>
<li><strong>تدريب:</strong> تدريب خاص على UBD لجميع الطاقم</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 H2S في UBD</h3>
<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #f59e0b;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
كبريتيد الهيدروجين (H2S) من أخطر الغازات في UBD:
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background: #fef3c7;">
<th style="padding: 10px; border: 1px solid #ddd; text-align: right;">التركيز (ppm)</th>
<th style="padding: 10px; border: 1px solid #ddd; text-align: right;">التأثير</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">0.5-10</td>
<td style="padding: 10px; border: 1px solid #ddd;">رائحة بيض فاسد (يمكن شمها)</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 10px; border: 1px solid #ddd;">10-50</td>
<td style="padding: 10px; border: 1px solid #ddd;">تهيج العينين والجهاز التنفسي</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">100-200</td>
<td style="padding: 10px; border: 1px solid #ddd; color: #dc2626;">فقدان حاسة الشم (خطير!)</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 10px; border: 1px solid #ddd;">500+</td>
<td style="padding: 10px; border: 1px solid #ddd; color: #dc2626; font-weight: bold;">فقدان الوعي والوفاة السريعة</td>
</tr>
</tbody>
</table>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 معايير اختيار بئر UBD</h3>
<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #2563eb;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
ليس كل بئر مناسب لـ UBD. معايير الاختيار:
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #059669; margin-bottom: 1rem;">✅ UBD مناسب عندما:</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li>تكوين حساس للتلف (Damage-Sensitive)</li>
<li>مشاكل فقدان طين متكررة</li>
<li>معدل اختراق منخفض بالطريقة التقليدية</li>
<li>رغبة في تقييم المكمن أثناء الحفر</li>
<li>انحشار متكرر (Differential Sticking)</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
<p style="font-weight: bold; color: #dc2626; margin-bottom: 1rem;">❌ UBD غير مناسب عندما:</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li>مشاكل استقرارية خطيرة متوقعة</li>
<li>تركيز H2S عالي جداً</li>
<li>البنية التحتية للموقع غير كافية</li>
<li>عدم توفر طاقم مؤهل</li>
<li>تكلفة UBD لا تبررها الفوائد</li>
</ul>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 تطبيقات UBD الناجحة</h3>
<div style="background: #e8f4f8; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #0369a1; margin-bottom: 0.5rem;">1. المكامن ذات النفاذية المنخفضة (Tight Reservoirs)</p>
<p style="line-height: 1.8;">تجنب تلف التكوين يزيد الإنتاجية بشكل ملحوظ</p>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #0369a1; margin-bottom: 0.5rem;">2. المكامن المستنزفة (Depleted Reservoirs)</p>
<p style="line-height: 1.8;">تجنب فقدان الطين الكامل في الضغوط المنخفضة</p>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #0369a1; margin-bottom: 0.5rem;">3. حفر الآبار الأفقية في المكامن الحساسة</p>
<p style="line-height: 1.8;">قسم الإنتاج يبقى سليماً من التلف</p>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #0369a1; margin-bottom: 0.5rem;">4. الحفر في تكوينات Lost Circulation</p>
<p style="line-height: 1.8;">لا حاجة لمواد سد الفقدان المكلفة</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 مقارنة تكلفة UBD vs التقليدي</h3>
<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #64748b;">
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background: #e2e8f0;">
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: right;">البند</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: right;">UBD</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: right;">التقليدي</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;">المعدات السطحية</td>
<td style="padding: 12px; border: 1px solid #cbd5e1; color: #dc2626;">أعلى بكثير</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">أقل</td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 12px; border: 1px solid #cbd5e1;">وقت الحفر</td>
<td style="padding: 12px; border: 1px solid #cbd5e1; color: #059669;">أقل (ROP أعلى)</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">أطول</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;">مشاكل الفقدان</td>
<td style="padding: 12px; border: 1px solid #cbd5e1; color: #059669;">أقل بكثير</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">قد تكون مكلفة</td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 12px; border: 1px solid #cbd5e1;">إنتاجية البئر</td>
<td style="padding: 12px; border: 1px solid #cbd5e1; color: #059669;">أعلى</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">قد تتأثر بالتلف</td>
</tr>
</tbody>
</table>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>السلامة في UBD تتطلب إجراءات صارمة بسبب HC على السطح</li>
<li>H2S من أخطر المخاطر ويتطلب مراقبة مستمرة</li>
<li>اختيار البئر المناسب لـ UBD أساسي للنجاح</li>
<li>UBD مثالي للمكامن الحساسة والمستنزفة</li>
<li>التكلفة الأعلى للمعدات تُعوض بالفوائد الأخرى</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'H2S', definition: 'كبريتيد الهيدروجين - غاز سام قاتل بتركيزات عالية' },
            { term: 'LEL', definition: 'Lower Explosive Limit - الحد الأدنى للانفجار' },
            { term: 'SCBA', definition: 'جهاز تنفس ذاتي محتوى للطوارئ' },
            { term: 'Formation Damage', definition: 'تلف التكوين - انخفاض النفاذية' },
            { term: 'Tight Reservoir', definition: 'مكمن منخفض النفاذية' },
          ],
          practiceQuestion: {
            question: 'عند أي تركيز H2S يفقد الإنسان القدرة على شم الغاز؟',
            options: [
              '0.5-10 ppm',
              '10-50 ppm',
              '100-200 ppm',
              '500+ ppm'
            ],
            correctAnswer: 2,
          },
        },
        en: {
          title: 'Safety and Field Applications in UBD',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Safety Considerations in UBD</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
Underbalanced drilling carries additional risks compared to conventional drilling. The presence of hydrocarbons at surface during drilling requires strict safety procedures.
</p>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Main UBD Risks</h3>
<div style="background: #fee2e2; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #dc2626;">
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background: #fecaca;">
<th style="padding: 12px; border: 1px solid #fca5a5; text-align: left;">Risk</th>
<th style="padding: 12px; border: 1px solid #fca5a5; text-align: left;">Cause</th>
<th style="padding: 12px; border: 1px solid #fca5a5; text-align: left;">Prevention</th>
</tr>
</thead>
<tbody>
<tr style="background: #fff;">
<td style="padding: 12px; border: 1px solid #ddd;"><strong>Fire and Explosion</strong></td>
<td style="padding: 12px; border: 1px solid #ddd;">HC at surface</td>
<td style="padding: 12px; border: 1px solid #ddd;">Fire systems, safe zones</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;"><strong>H2S</strong></td>
<td style="padding: 12px; border: 1px solid #ddd;">Toxic gas from formation</td>
<td style="padding: 12px; border: 1px solid #ddd;">Detectors, breathing equipment</td>
</tr>
<tr style="background: #fff;">
<td style="padding: 12px; border: 1px solid #ddd;"><strong>Loss of Control</strong></td>
<td style="padding: 12px; border: 1px solid #ddd;">Flow exceeds equipment capacity</td>
<td style="padding: 12px; border: 1px solid #ddd;">Proper design, continuous monitoring</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;"><strong>Wellbore Collapse</strong></td>
<td style="padding: 12px; border: 1px solid #ddd;">Lack of mud support</td>
<td style="padding: 12px; border: 1px solid #ddd;">Prior stability study</td>
</tr>
</tbody>
</table>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Mandatory Safety Requirements</h3>
<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #059669;">
<ul style="line-height: 2.2; padding-left: 1.5rem;">
<li><strong>Gas Detectors:</strong> H2S and LEL throughout location</li>
<li><strong>Breathing Equipment:</strong> SCBA available for everyone</li>
<li><strong>Muster Points:</strong> Defined and known to all</li>
<li><strong>Fire Suppression:</strong> Automatic and manual systems</li>
<li><strong>Emergency Lighting:</strong> Battery-powered</li>
<li><strong>Communications:</strong> Clear alarm and evacuation system</li>
<li><strong>Training:</strong> Special UBD training for all crew</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 H2S in UBD</h3>
<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #f59e0b;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
Hydrogen Sulfide (H2S) is one of the most dangerous gases in UBD:
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background: #fef3c7;">
<th style="padding: 10px; border: 1px solid #ddd; text-align: left;">Concentration (ppm)</th>
<th style="padding: 10px; border: 1px solid #ddd; text-align: left;">Effect</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">0.5-10</td>
<td style="padding: 10px; border: 1px solid #ddd;">Rotten egg smell (detectable)</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 10px; border: 1px solid #ddd;">10-50</td>
<td style="padding: 10px; border: 1px solid #ddd;">Eye and respiratory irritation</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">100-200</td>
<td style="padding: 10px; border: 1px solid #ddd; color: #dc2626;">Loss of smell (dangerous!)</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 10px; border: 1px solid #ddd;">500+</td>
<td style="padding: 10px; border: 1px solid #ddd; color: #dc2626; font-weight: bold;">Loss of consciousness and rapid death</td>
</tr>
</tbody>
</table>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 UBD Well Selection Criteria</h3>
<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #2563eb;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
Not every well is suitable for UBD. Selection criteria:
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #059669; margin-bottom: 1rem;">✅ UBD is Suitable When:</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li>Damage-Sensitive formation</li>
<li>Recurring lost circulation problems</li>
<li>Low ROP with conventional method</li>
<li>Desire to evaluate reservoir while drilling</li>
<li>Recurring Differential Sticking</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
<p style="font-weight: bold; color: #dc2626; margin-bottom: 1rem;">❌ UBD Not Suitable When:</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li>Serious stability problems expected</li>
<li>Very high H2S concentration</li>
<li>Site infrastructure inadequate</li>
<li>Qualified crew unavailable</li>
<li>UBD cost not justified by benefits</li>
</ul>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Successful UBD Applications</h3>
<div style="background: #e8f4f8; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #0369a1; margin-bottom: 0.5rem;">1. Tight Reservoirs</p>
<p style="line-height: 1.8;">Avoiding formation damage significantly increases productivity</p>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #0369a1; margin-bottom: 0.5rem;">2. Depleted Reservoirs</p>
<p style="line-height: 1.8;">Avoid total mud loss in low pressure zones</p>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #0369a1; margin-bottom: 0.5rem;">3. Horizontal Wells in Sensitive Reservoirs</p>
<p style="line-height: 1.8;">Production section remains free from damage</p>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #0369a1; margin-bottom: 0.5rem;">4. Drilling in Lost Circulation Formations</p>
<p style="line-height: 1.8;">No need for expensive LCM materials</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 UBD vs Conventional Cost Comparison</h3>
<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #64748b;">
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background: #e2e8f0;">
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: left;">Item</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: left;">UBD</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: left;">Conventional</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Surface Equipment</td>
<td style="padding: 12px; border: 1px solid #cbd5e1; color: #dc2626;">Much Higher</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Lower</td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 12px; border: 1px solid #cbd5e1;">Drilling Time</td>
<td style="padding: 12px; border: 1px solid #cbd5e1; color: #059669;">Less (Higher ROP)</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Longer</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Loss Problems</td>
<td style="padding: 12px; border: 1px solid #cbd5e1; color: #059669;">Much Less</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Can be costly</td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 12px; border: 1px solid #cbd5e1;">Well Productivity</td>
<td style="padding: 12px; border: 1px solid #cbd5e1; color: #059669;">Higher</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">May be affected by damage</td>
</tr>
</tbody>
</table>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>UBD safety requires strict procedures due to HC at surface</li>
<li>H2S is one of the most dangerous risks requiring continuous monitoring</li>
<li>Proper well selection is essential for UBD success</li>
<li>UBD is ideal for sensitive and depleted reservoirs</li>
<li>Higher equipment cost is offset by other benefits</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'H2S', definition: 'Hydrogen Sulfide - deadly toxic gas at high concentrations' },
            { term: 'LEL', definition: 'Lower Explosive Limit' },
            { term: 'SCBA', definition: 'Self-Contained Breathing Apparatus for emergencies' },
            { term: 'Formation Damage', definition: 'Reduced permeability' },
            { term: 'Tight Reservoir', definition: 'Low permeability reservoir' },
          ],
          practiceQuestion: {
            question: 'At what H2S concentration does a person lose the ability to smell the gas?',
            options: [
              '0.5-10 ppm',
              '10-50 ppm',
              '100-200 ppm',
              '500+ ppm'
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
          title: 'مراجعة شاملة - الحفر تحت التوازن',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 مراجعة أسبوع الحفر تحت التوازن (UBD)</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="font-size: 1.25rem; margin-bottom: 1rem;">📚 ملخص المفاهيم الأساسية</h3>
<p style="line-height: 1.8;">UBD هو الحفر بضغط قاع أقل من ضغط التكوين، مما يسمح للسوائل بالتدفق من التكوين للبئر أثناء الحفر. الهدف الرئيسي: حماية المكمن من التلف وزيادة الإنتاجية.</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 اليوم الأول: المفاهيم الأساسية</h3>
<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #059669;">
<ul style="line-height: 2.2; padding-right: 1.5rem;">
<li>UBD: BHP < Pore Pressure (عكس الحفر التقليدي)</li>
<li>الفوائد: تقليل التلف، زيادة ROP، اكتشاف مبكر للمكمن</li>
<li>طرق التحقيق: طين خفيف، حقن غاز، رغوة</li>
<li>المخاطر: حريق، H2S، انهيار البئر</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 اليوم الثاني: أنظمة السوائل</h3>
<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #2563eb;">
<table style="width: 100%; border-collapse: collapse; background: #fff;">
<thead>
<tr style="background: #e2e8f0;">
<th style="padding: 10px; border: 1px solid #ddd;">النظام</th>
<th style="padding: 10px; border: 1px solid #ddd;">الكثافة</th>
<th style="padding: 10px; border: 1px solid #ddd;">الاستخدام</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">Gasified Mud</td>
<td style="padding: 10px; border: 1px solid #ddd;">4-10 ppg</td>
<td style="padding: 10px; border: 1px solid #ddd;">الأكثر شيوعاً</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">Foam</td>
<td style="padding: 10px; border: 1px solid #ddd;">2-6 ppg</td>
<td style="padding: 10px; border: 1px solid #ddd;">ضغوط منخفضة</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">Air/Gas</td>
<td style="padding: 10px; border: 1px solid #ddd;">~0.1 ppg</td>
<td style="padding: 10px; border: 1px solid #ddd;">تكوينات جافة</td>
</tr>
</tbody>
</table>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 اليوم الثالث: المعدات السطحية</h3>
<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #f59e0b;">
<ul style="line-height: 2.2; padding-right: 1.5rem;">
<li><strong>RCD:</strong> يغلق البئر مع السماح بالحفر</li>
<li><strong>Choke Manifold:</strong> يتحكم بضغط السطح</li>
<li><strong>Four-Phase Separator:</strong> يفصل الغاز/النفط/الماء/القطع</li>
<li><strong>Flare Stack:</strong> يحرق الغازات بأمان</li>
<li><strong>التحكم بالبئر:</strong> إدارة التدفق وليس إيقافه</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 اليوم الرابع: السلامة والتطبيقات</h3>
<div style="background: #fee2e2; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #dc2626;">
<p style="font-weight: bold; margin-bottom: 1rem;">مستويات H2S:</p>
<ul style="line-height: 2; padding-right: 1.5rem;">
<li>0.5-10 ppm: رائحة بيض فاسد</li>
<li>10-50 ppm: تهيج</li>
<li>100-200 ppm: فقدان الشم (خطير!)</li>
<li>500+ ppm: وفاة سريعة</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 متى نستخدم UBD؟</h3>
<div style="background: #e8f4f8; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
<div style="flex: 1; min-width: 200px; background: #dcfce7; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #059669;">✅ مناسب:</p>
<ul style="padding-right: 1rem; line-height: 1.8;">
<li>مكامن حساسة</li>
<li>فقدان طين</li>
<li>ROP منخفض</li>
<li>Differential Sticking</li>
</ul>
</div>
<div style="flex: 1; min-width: 200px; background: #fee2e2; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #dc2626;">❌ غير مناسب:</p>
<ul style="padding-right: 1rem; line-height: 1.8;">
<li>مشاكل استقرارية</li>
<li>H2S عالي جداً</li>
<li>طاقم غير مؤهل</li>
<li>بنية تحتية ضعيفة</li>
</ul>
</div>
</div>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 نقاط رئيسية للاختبار</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>UBD = ضغط قاع أقل من ضغط التكوين</li>
<li>الغرض الرئيسي: حماية التكوين من التلف</li>
<li>Air/Gas drilling يعطي أقل كثافة ممكنة</li>
<li>100-200 ppm H2S = فقدان حاسة الشم</li>
<li>Four-Phase Separator يفصل 4 مكونات</li>
</ul>
</div>
</section>`,
          keyTerms: [],
          practiceQuestion: {
            question: 'ما هو الهدف الرئيسي من الحفر تحت التوازن؟',
            options: [
              'زيادة وزن الطين',
              'حماية التكوين من التلف',
              'تقليل عمق البئر',
              'زيادة استهلاك الوقود'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Comprehensive Review - Underbalanced Drilling',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 UBD Week Review</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="font-size: 1.25rem; margin-bottom: 1rem;">📚 Key Concepts Summary</h3>
<p style="line-height: 1.8;">UBD is drilling with bottomhole pressure less than formation pressure, allowing fluids to flow from formation into wellbore while drilling. Main goal: Protect reservoir from damage and increase productivity.</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Day 1: Basic Concepts</h3>
<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #059669;">
<ul style="line-height: 2.2; padding-left: 1.5rem;">
<li>UBD: BHP < Pore Pressure (opposite of conventional)</li>
<li>Benefits: Reduce damage, increase ROP, early reservoir discovery</li>
<li>Methods: Light mud, gas injection, foam</li>
<li>Risks: Fire, H2S, wellbore collapse</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Day 2: Fluid Systems</h3>
<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #2563eb;">
<table style="width: 100%; border-collapse: collapse; background: #fff;">
<thead>
<tr style="background: #e2e8f0;">
<th style="padding: 10px; border: 1px solid #ddd;">System</th>
<th style="padding: 10px; border: 1px solid #ddd;">Density</th>
<th style="padding: 10px; border: 1px solid #ddd;">Use</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">Gasified Mud</td>
<td style="padding: 10px; border: 1px solid #ddd;">4-10 ppg</td>
<td style="padding: 10px; border: 1px solid #ddd;">Most common</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">Foam</td>
<td style="padding: 10px; border: 1px solid #ddd;">2-6 ppg</td>
<td style="padding: 10px; border: 1px solid #ddd;">Low pressures</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">Air/Gas</td>
<td style="padding: 10px; border: 1px solid #ddd;">~0.1 ppg</td>
<td style="padding: 10px; border: 1px solid #ddd;">Dry formations</td>
</tr>
</tbody>
</table>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Day 3: Surface Equipment</h3>
<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #f59e0b;">
<ul style="line-height: 2.2; padding-left: 1.5rem;">
<li><strong>RCD:</strong> Closes well while allowing drilling</li>
<li><strong>Choke Manifold:</strong> Controls surface pressure</li>
<li><strong>Four-Phase Separator:</strong> Separates gas/oil/water/cuttings</li>
<li><strong>Flare Stack:</strong> Safely burns gases</li>
<li><strong>Well Control:</strong> Managing flow, not stopping it</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Day 4: Safety and Applications</h3>
<div style="background: #fee2e2; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #dc2626;">
<p style="font-weight: bold; margin-bottom: 1rem;">H2S Levels:</p>
<ul style="line-height: 2; padding-left: 1.5rem;">
<li>0.5-10 ppm: Rotten egg smell</li>
<li>10-50 ppm: Irritation</li>
<li>100-200 ppm: Loss of smell (dangerous!)</li>
<li>500+ ppm: Rapid death</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 When to Use UBD?</h3>
<div style="background: #e8f4f8; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
<div style="flex: 1; min-width: 200px; background: #dcfce7; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #059669;">✅ Suitable:</p>
<ul style="padding-left: 1rem; line-height: 1.8;">
<li>Sensitive reservoirs</li>
<li>Lost circulation</li>
<li>Low ROP</li>
<li>Differential Sticking</li>
</ul>
</div>
<div style="flex: 1; min-width: 200px; background: #fee2e2; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #dc2626;">❌ Not Suitable:</p>
<ul style="padding-left: 1rem; line-height: 1.8;">
<li>Stability problems</li>
<li>Very high H2S</li>
<li>Unqualified crew</li>
<li>Weak infrastructure</li>
</ul>
</div>
</div>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Key Points for Quiz</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>UBD = BHP less than formation pressure</li>
<li>Main purpose: Protect formation from damage</li>
<li>Air/Gas drilling gives lowest possible density</li>
<li>100-200 ppm H2S = loss of smell</li>
<li>Four-Phase Separator separates 4 components</li>
</ul>
</div>
</section>`,
          keyTerms: [],
          practiceQuestion: {
            question: 'What is the main goal of underbalanced drilling?',
            options: [
              'Increase mud weight',
              'Protect formation from damage',
              'Reduce well depth',
              'Increase fuel consumption'
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
          title: 'اختبار الحفر تحت التوازن',
          explanation: 'اختبر معلوماتك حول الحفر تحت التوازن',
          keyTerms: [],
        },
        en: {
          title: 'Underbalanced Drilling Quiz',
          explanation: 'Test your knowledge of Underbalanced Drilling',
          keyTerms: [],
        },
      },
      quiz: {
        ar: [
          { question: 'ما هو تعريف الحفر تحت التوازن (UBD)؟', options: ['BHP > Pore Pressure', 'BHP < Pore Pressure', 'BHP = Pore Pressure', 'BHP = Fracture Pressure'], correctAnswer: 1 },
          { question: 'ما هو السبب الرئيسي لاستخدام UBD؟', options: ['زيادة وزن الطين', 'تقليل تلف التكوين', 'زيادة تكلفة الحفر', 'إبطاء معدل الاختراق'], correctAnswer: 1 },
          { question: 'أي نظام سائل يعطي أقل كثافة في UBD؟', options: ['Gasified Mud', 'Foam', 'Air/Gas Drilling', 'Water-based Mud'], correctAnswer: 2 },
          { question: 'ما هي وظيفة الـ RCD في UBD؟', options: ['ضخ الطين', 'إغلاق البئر مع السماح بالحفر', 'قياس العمق', 'فصل الغاز'], correctAnswer: 1 },
          { question: 'ما هي وظيفة الـ Four-Phase Separator؟', options: ['ضخ الطين', 'فصل الغاز والنفط والماء والقطع', 'قياس الضغط', 'حرق الغاز'], correctAnswer: 1 },
          { question: 'عند أي تركيز H2S يفقد الإنسان حاسة الشم؟', options: ['0.5-10 ppm', '10-50 ppm', '100-200 ppm', '500+ ppm'], correctAnswer: 2 },
          { question: 'ما هو Foam Quality في نظام الرغوة؟', options: ['كثافة الرغوة', 'نسبة الغاز من الحجم', 'ضغط الرغوة', 'لون الرغوة'], correctAnswer: 1 },
          { question: 'ما هو Snubbing في UBD؟', options: ['سحب الأنابيب للأعلى', 'إدخال الأنابيب ضد الضغط', 'دوران الأنابيب', 'قطع الأنابيب'], correctAnswer: 1 },
          { question: 'متى يكون UBD غير مناسب؟', options: ['مكامن حساسة', 'فقدان طين متكرر', 'مشاكل استقرارية خطيرة', 'ROP منخفض'], correctAnswer: 2 },
          { question: 'ما هي الفائدة الرئيسية لـ UBD في المكامن المستنزفة؟', options: ['زيادة الضغط', 'تجنب فقدان الطين الكامل', 'زيادة وزن الطين', 'تقليل الإنتاج'], correctAnswer: 1 },
        ],
        en: [
          { question: 'What is the definition of Underbalanced Drilling (UBD)?', options: ['BHP > Pore Pressure', 'BHP < Pore Pressure', 'BHP = Pore Pressure', 'BHP = Fracture Pressure'], correctAnswer: 1 },
          { question: 'What is the main reason for using UBD?', options: ['Increase mud weight', 'Reduce formation damage', 'Increase drilling cost', 'Slow down ROP'], correctAnswer: 1 },
          { question: 'Which fluid system provides the lowest density in UBD?', options: ['Gasified Mud', 'Foam', 'Air/Gas Drilling', 'Water-based Mud'], correctAnswer: 2 },
          { question: 'What is the function of the RCD in UBD?', options: ['Pump mud', 'Close well while allowing drilling', 'Measure depth', 'Separate gas'], correctAnswer: 1 },
          { question: 'What is the function of the Four-Phase Separator?', options: ['Pump mud', 'Separate gas, oil, water, and cuttings', 'Measure pressure', 'Burn gas'], correctAnswer: 1 },
          { question: 'At what H2S concentration does a person lose the sense of smell?', options: ['0.5-10 ppm', '10-50 ppm', '100-200 ppm', '500+ ppm'], correctAnswer: 2 },
          { question: 'What is Foam Quality in foam systems?', options: ['Foam density', 'Gas ratio by volume', 'Foam pressure', 'Foam color'], correctAnswer: 1 },
          { question: 'What is Snubbing in UBD?', options: ['Pulling pipe up', 'Pushing pipe in against pressure', 'Rotating pipe', 'Cutting pipe'], correctAnswer: 1 },
          { question: 'When is UBD not suitable?', options: ['Sensitive reservoirs', 'Recurring lost circulation', 'Serious stability problems', 'Low ROP'], correctAnswer: 2 },
          { question: 'What is the main benefit of UBD in depleted reservoirs?', options: ['Increase pressure', 'Avoid total mud loss', 'Increase mud weight', 'Reduce production'], correctAnswer: 1 },
        ],
      },
    },
    {
      day: 7,
      type: 'project',
      content: {
        ar: {
          title: 'مشروع الحفر تحت التوازن',
          explanation: 'طبق ما تعلمته في مشروع عملي',
          keyTerms: [],
        },
        en: {
          title: 'Underbalanced Drilling Project',
          explanation: 'Apply what you learned in a practical project',
          keyTerms: [],
        },
      },
      project: {
        ar: {
          title: 'تصميم خطة UBD لبئر صعب',
          description: 'أنت مهندس حفر مكلف بتصميم خطة للحفر تحت التوازن لبئر أفقي في مكمن مستنزف منخفض النفاذية. الضغط الحالي للمكمن 2500 psi عند عمق 8000 قدم. تاريخ البئر يظهر فقدان طين متكرر عند الحفر بالطريقة التقليدية.',
          instructions: [
            'حدد نظام السائل المناسب (Gasified Mud, Foam, أو Air) مع تبرير اختيارك',
            'اذكر المعدات السطحية الضرورية ووظيفة كل منها',
            'صف إجراءات السلامة الرئيسية المطلوبة',
            'حدد معايير التحول من UBD إلى الحفر التقليدي (متى نوقف UBD؟)',
            'اشرح كيف ستتعامل مع الوصلات (Connections) للحفاظ على حالة UBD',
          ],
          submissionType: 'text',
        },
        en: {
          title: 'Design UBD Plan for Difficult Well',
          description: 'You are a drilling engineer tasked with designing an underbalanced drilling plan for a horizontal well in a depleted, low-permeability reservoir. Current reservoir pressure is 2500 psi at 8000 ft depth. Well history shows frequent mud losses when drilling conventionally.',
          instructions: [
            'Determine the appropriate fluid system (Gasified Mud, Foam, or Air) with justification for your choice',
            'List the necessary surface equipment and function of each',
            'Describe the key safety procedures required',
            'Define criteria for converting from UBD to conventional drilling (when to stop UBD?)',
            'Explain how you will handle Connections to maintain UBD conditions',
          ],
          submissionType: 'text',
        },
      },
    },
  ],
};
