import { WeeklyLesson } from '../weeklyContent';

export const horizontalDrillingLesson: WeeklyLesson = {
  lessonId: 'horizontal-drilling',
  days: [
    {
      day: 1,
      type: 'learning',
      content: {
        ar: {
          title: 'الحفر الأفقي (Horizontal Drilling) - المفاهيم الأساسية',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 ما هو الحفر الأفقي؟</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
الحفر الأفقي (Horizontal Drilling) هو تقنية حفر موجه يتم فيها حفر قسم من البئر بزاوية ميل تتراوح بين 80° و100° (أي شبه أفقي أو أفقي تماماً). يُستخدم هذا النوع من الحفر لتعظيم التعرض للمكمن وزيادة الإنتاجية بشكل كبير مقارنة بالآبار العمودية.
</p>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="font-size: 1.25rem; margin-bottom: 1rem;">💡 لماذا نحفر أفقياً؟</h3>
<p style="line-height: 1.8;">البئر العمودي يخترق المكمن بسماكته فقط (مثلاً 30 متر). البئر الأفقي يمكنه البقاء داخل المكمن لمسافات طويلة (1000+ متر)، مما يزيد مساحة التلامس مع الصخور المنتجة بشكل هائل ويضاعف الإنتاج عدة مرات.</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 الفرق بين البئر العمودي والأفقي</h3>
<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #64748b;">
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background: #e2e8f0;">
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: right;">الجانب</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: right;">البئر العمودي</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: right;">البئر الأفقي</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;">التعرض للمكمن</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">سماكة المكمن فقط (10-50 م)</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">طول القسم الأفقي (500-3000+ م)</td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 12px; border: 1px solid #cbd5e1;">الإنتاجية النسبية</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">1x (مرجع)</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">3-10x أو أكثر</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;">التكلفة</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">أقل</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">أعلى 30-50%</td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 12px; border: 1px solid #cbd5e1;">التعقيد</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">بسيط نسبياً</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">يتطلب Geosteering وتقنيات متقدمة</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;">مثال (نفط/يوم)</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">500 برميل</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">2000-5000 برميل</td>
</tr>
</tbody>
</table>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 أقسام البئر الأفقي</h3>
<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #059669;">
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #059669;">1️⃣ القسم العمودي (Vertical Section)</p>
<p style="line-height: 1.8;">من السطح حتى KOP (Kickoff Point). يُحفر عمودياً لتثبيت التغليفات السطحية.</p>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #059669;">2️⃣ قسم البناء (Build Section)</p>
<p style="line-height: 1.8;">من KOP حتى الوصول للزاوية الأفقية (~90°). يُستخدم معدل بناء (Build Rate) يتراوح بين 3-8°/100ft حسب التصميم.</p>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #059669;">3️⃣ القسم المماسي (Tangent/Hold Section) - اختياري</p>
<p style="line-height: 1.8;">قسم بزاوية ثابتة قبل الوصول للأفقي، يُستخدم أحياناً للملاحة نحو الهدف.</p>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #059669;">4️⃣ القسم الأفقي (Horizontal/Lateral Section)</p>
<p style="line-height: 1.8;">القسم الرئيسي داخل المكمن بزاوية 85-95°. طوله يحدد مدى التعرض للمكمن. قد يصل لـ 3000 متر أو أكثر.</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 تطبيقات الحفر الأفقي</h3>
<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #2563eb;">
<ul style="line-height: 2.2; padding-right: 1.5rem;">
<li><strong>المكامن ذات النفاذية المنخفضة (Tight Reservoirs):</strong> زيادة التعرض تعوض ضعف النفاذية</li>
<li><strong>الصخر الزيتي (Shale Oil/Gas):</strong> أساسي لاستخراج النفط والغاز الصخري</li>
<li><strong>المكامن الرقيقة:</strong> البقاء داخل طبقة رقيقة (5-15 م) لمسافة طويلة</li>
<li><strong>تجنب المخروط (Coning Prevention):</strong> الإنتاج بعيداً عن تلامس الماء/الغاز</li>
<li><strong>المكامن المتشققة:</strong> اختراق أكبر عدد من الشقوق الطبيعية</li>
<li><strong>الحقول البحرية:</strong> زيادة الإنتاج لكل بئر لتبرير تكلفة المنصة</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 أنواع تصميم القسم الأفقي</h3>
<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #f59e0b;">
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background: #fef3c7;">
<th style="padding: 12px; border: 1px solid #f59e0b; text-align: right;">النوع</th>
<th style="padding: 12px; border: 1px solid #f59e0b; text-align: right;">Build Rate</th>
<th style="padding: 12px; border: 1px solid #f59e0b; text-align: right;">نصف قطر الانحناء</th>
<th style="padding: 12px; border: 1px solid #f59e0b; text-align: right;">الاستخدام</th>
</tr>
</thead>
<tbody>
<tr style="background: #fff;">
<td style="padding: 12px; border: 1px solid #ddd;"><strong>Long Radius</strong></td>
<td style="padding: 12px; border: 1px solid #ddd;">2-6°/100ft</td>
<td style="padding: 12px; border: 1px solid #ddd;">300-1000 م</td>
<td style="padding: 12px; border: 1px solid #ddd;">معظم التطبيقات، أسهل</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;"><strong>Medium Radius</strong></td>
<td style="padding: 12px; border: 1px solid #ddd;">8-20°/100ft</td>
<td style="padding: 12px; border: 1px solid #ddd;">60-300 م</td>
<td style="padding: 12px; border: 1px solid #ddd;">مساحة محدودة</td>
</tr>
<tr style="background: #fff;">
<td style="padding: 12px; border: 1px solid #ddd;"><strong>Short Radius</strong></td>
<td style="padding: 12px; border: 1px solid #ddd;">1.5-3°/ft</td>
<td style="padding: 12px; border: 1px solid #ddd;">6-20 م</td>
<td style="padding: 12px; border: 1px solid #ddd;">إعادة دخول، مساحة ضيقة جداً</td>
</tr>
</tbody>
</table>
</div>

<div style="background: #fee2e2; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #dc2626;">
<h3 style="color: #dc2626; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">⚠️ تحديات الحفر الأفقي</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li><strong>تنظيف الحفرة:</strong> القطع تترسب في الجانب السفلي</li>
<li><strong>العزم والسحب:</strong> احتكاك عالي في القسم الأفقي</li>
<li><strong>Geosteering:</strong> البقاء داخل المكمن يتطلب توجيهاً دقيقاً</li>
<li><strong>إنزال التغليف:</strong> صعوبة وصول التغليف لنهاية القسم الأفقي</li>
<li><strong>الإكمال:</strong> تحديات خاصة في التثقيب والتحفيز</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>الحفر الأفقي يزيد التعرض للمكمن 10-100 ضعف</li>
<li>يتكون من 4 أقسام: عمودي، بناء، مماسي، أفقي</li>
<li>يُستخدم في الصخر الزيتي والمكامن الرقيقة والمتشققة</li>
<li>Long Radius هو الأكثر شيوعاً (2-6°/100ft)</li>
<li>التحديات: تنظيف، T&D، Geosteering، إنزال التغليف</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Horizontal Well', definition: 'بئر بقسم أفقي (ميل 80-100°) داخل المكمن' },
            { term: 'KOP', definition: 'Kickoff Point - نقطة بداية الانحراف عن العمودي' },
            { term: 'Build Rate', definition: 'معدل زيادة الزاوية بالدرجات لكل 100 قدم' },
            { term: 'Lateral', definition: 'القسم الأفقي داخل المكمن' },
            { term: 'Long Radius', definition: 'تصميم بنصف قطر انحناء كبير (300-1000 م)' },
          ],
          practiceQuestion: {
            question: 'ما هو السبب الرئيسي لاستخدام الحفر الأفقي؟',
            options: [
              'تقليل تكلفة الحفر',
              'زيادة التعرض للمكمن وتحسين الإنتاجية',
              'تجنب الطبقات الصخرية',
              'تقليل وقت الحفر'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Horizontal Drilling - Basic Concepts',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 What is Horizontal Drilling?</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
Horizontal Drilling is a directional drilling technique where a section of the well is drilled at an inclination angle between 80° and 100° (near-horizontal or fully horizontal). This type of drilling is used to maximize reservoir exposure and significantly increase productivity compared to vertical wells.
</p>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="font-size: 1.25rem; margin-bottom: 1rem;">💡 Why Drill Horizontally?</h3>
<p style="line-height: 1.8;">A vertical well only penetrates the reservoir thickness (e.g., 30 meters). A horizontal well can stay within the reservoir for long distances (1000+ meters), massively increasing contact area with producing rocks and multiplying production several times.</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Vertical vs Horizontal Well Comparison</h3>
<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #64748b;">
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background: #e2e8f0;">
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: left;">Aspect</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: left;">Vertical Well</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: left;">Horizontal Well</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Reservoir Exposure</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Reservoir thickness only (10-50 m)</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Lateral length (500-3000+ m)</td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 12px; border: 1px solid #cbd5e1;">Relative Productivity</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">1x (reference)</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">3-10x or more</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Cost</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Lower</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">30-50% higher</td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 12px; border: 1px solid #cbd5e1;">Complexity</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Relatively simple</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Requires Geosteering and advanced techniques</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Example (oil/day)</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">500 barrels</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">2000-5000 barrels</td>
</tr>
</tbody>
</table>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Horizontal Well Sections</h3>
<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #059669;">
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #059669;">1️⃣ Vertical Section</p>
<p style="line-height: 1.8;">From surface to KOP (Kickoff Point). Drilled vertically to set surface casings.</p>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #059669;">2️⃣ Build Section</p>
<p style="line-height: 1.8;">From KOP until reaching horizontal angle (~90°). Uses Build Rate between 3-8°/100ft depending on design.</p>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #059669;">3️⃣ Tangent/Hold Section - Optional</p>
<p style="line-height: 1.8;">Section at constant angle before reaching horizontal, sometimes used for navigating to target.</p>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #059669;">4️⃣ Horizontal/Lateral Section</p>
<p style="line-height: 1.8;">Main section within reservoir at 85-95° angle. Its length determines reservoir exposure. Can reach 3000+ meters.</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Horizontal Drilling Applications</h3>
<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #2563eb;">
<ul style="line-height: 2.2; padding-left: 1.5rem;">
<li><strong>Tight Reservoirs:</strong> Increased exposure compensates for low permeability</li>
<li><strong>Shale Oil/Gas:</strong> Essential for extracting shale oil and gas</li>
<li><strong>Thin Reservoirs:</strong> Staying within thin layer (5-15 m) for long distance</li>
<li><strong>Coning Prevention:</strong> Producing away from water/gas contact</li>
<li><strong>Fractured Reservoirs:</strong> Penetrating maximum natural fractures</li>
<li><strong>Offshore Fields:</strong> Increasing production per well to justify platform cost</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Horizontal Section Design Types</h3>
<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #f59e0b;">
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background: #fef3c7;">
<th style="padding: 12px; border: 1px solid #f59e0b; text-align: left;">Type</th>
<th style="padding: 12px; border: 1px solid #f59e0b; text-align: left;">Build Rate</th>
<th style="padding: 12px; border: 1px solid #f59e0b; text-align: left;">Radius of Curvature</th>
<th style="padding: 12px; border: 1px solid #f59e0b; text-align: left;">Use</th>
</tr>
</thead>
<tbody>
<tr style="background: #fff;">
<td style="padding: 12px; border: 1px solid #ddd;"><strong>Long Radius</strong></td>
<td style="padding: 12px; border: 1px solid #ddd;">2-6°/100ft</td>
<td style="padding: 12px; border: 1px solid #ddd;">300-1000 m</td>
<td style="padding: 12px; border: 1px solid #ddd;">Most applications, easiest</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;"><strong>Medium Radius</strong></td>
<td style="padding: 12px; border: 1px solid #ddd;">8-20°/100ft</td>
<td style="padding: 12px; border: 1px solid #ddd;">60-300 m</td>
<td style="padding: 12px; border: 1px solid #ddd;">Limited space</td>
</tr>
<tr style="background: #fff;">
<td style="padding: 12px; border: 1px solid #ddd;"><strong>Short Radius</strong></td>
<td style="padding: 12px; border: 1px solid #ddd;">1.5-3°/ft</td>
<td style="padding: 12px; border: 1px solid #ddd;">6-20 m</td>
<td style="padding: 12px; border: 1px solid #ddd;">Re-entry, very tight space</td>
</tr>
</tbody>
</table>
</div>

<div style="background: #fee2e2; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #dc2626;">
<h3 style="color: #dc2626; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">⚠️ Horizontal Drilling Challenges</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li><strong>Hole Cleaning:</strong> Cuttings settle on low side</li>
<li><strong>Torque & Drag:</strong> High friction in horizontal section</li>
<li><strong>Geosteering:</strong> Staying within reservoir requires precise steering</li>
<li><strong>Casing Running:</strong> Difficulty getting casing to end of lateral</li>
<li><strong>Completion:</strong> Special challenges in perforation and stimulation</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>Horizontal drilling increases reservoir exposure 10-100 times</li>
<li>Consists of 4 sections: vertical, build, tangent, horizontal</li>
<li>Used in shale, thin, and fractured reservoirs</li>
<li>Long Radius is most common (2-6°/100ft)</li>
<li>Challenges: cleaning, T&D, Geosteering, casing running</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Horizontal Well', definition: 'Well with horizontal section (80-100° inclination) within reservoir' },
            { term: 'KOP', definition: 'Kickoff Point - point where deviation from vertical begins' },
            { term: 'Build Rate', definition: 'Rate of angle increase in degrees per 100 feet' },
            { term: 'Lateral', definition: 'Horizontal section within reservoir' },
            { term: 'Long Radius', definition: 'Design with large radius of curvature (300-1000 m)' },
          ],
          practiceQuestion: {
            question: 'What is the main reason for using horizontal drilling?',
            options: [
              'Reduce drilling cost',
              'Increase reservoir exposure and improve productivity',
              'Avoid rock formations',
              'Reduce drilling time'
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
          title: 'التوجيه الجيولوجي (Geosteering) في الحفر الأفقي',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 ما هو التوجيه الجيولوجي؟</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
التوجيه الجيولوجي (Geosteering) هو عملية توجيه البئر في الوقت الحقيقي بناءً على البيانات الجيولوجية لضمان بقاء القسم الأفقي داخل المنطقة المنتجة (Pay Zone) من المكمن. إنها مهارة تجمع بين الجيولوجيا والحفر الموجه.
</p>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="font-size: 1.25rem; margin-bottom: 1rem;">💡 لماذا نحتاج Geosteering؟</h3>
<p style="line-height: 1.8;">المكامن ليست طبقات أفقية مثالية! قد تميل، تتموج، أو تتقطع بالصدوع. بدون Geosteering، قد يخرج البئر من المكمن للطبقات غير المنتجة (Shale أو Water Zone) دون أن ندري حتى فوات الأوان.</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 أدوات Geosteering</h3>
<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #059669;">
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #059669;">1️⃣ LWD (Logging While Drilling)</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li><strong>Gamma Ray:</strong> يميز بين الـ Sand (منتج) والـ Shale (غير منتج)</li>
<li><strong>Resistivity:</strong> يكتشف وجود الهيدروكربونات مقابل الماء</li>
<li><strong>Density/Neutron:</strong> يحدد نوع السوائل والمسامية</li>
<li><strong>Azimuthal Tools:</strong> توفر صورة 360° حول البئر لمعرفة الاتجاه</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #059669;">2️⃣ MWD (Measurement While Drilling)</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li><strong>Inclination:</strong> زاوية ميل البئر</li>
<li><strong>Azimuth:</strong> اتجاه البئر (بوصلة)</li>
<li><strong>Toolface:</strong> اتجاه الـ Bent Housing للتوجيه</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #059669;">3️⃣ Seismic While Drilling</p>
<p style="line-height: 1.8;">في بعض الحالات المتقدمة، يُستخدم السيزميك في الوقت الحقيقي لرؤية التراكيب أمام البت</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 مؤشرات الخروج من المكمن</h3>
<div style="background: #fee2e2; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #dc2626;">
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background: #fecaca;">
<th style="padding: 12px; border: 1px solid #fca5a5; text-align: right;">المؤشر</th>
<th style="padding: 12px; border: 1px solid #fca5a5; text-align: right;">القراءة الطبيعية (في المكمن)</th>
<th style="padding: 12px; border: 1px solid #fca5a5; text-align: right;">عند الخروج للـ Shale</th>
<th style="padding: 12px; border: 1px solid #fca5a5; text-align: right;">عند الخروج للماء</th>
</tr>
</thead>
<tbody>
<tr style="background: #fff;">
<td style="padding: 12px; border: 1px solid #ddd;">Gamma Ray</td>
<td style="padding: 12px; border: 1px solid #ddd;">منخفض (20-60 API)</td>
<td style="padding: 12px; border: 1px solid #ddd;">يرتفع (100+ API)</td>
<td style="padding: 12px; border: 1px solid #ddd;">يبقى منخفضاً</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;">Resistivity</td>
<td style="padding: 12px; border: 1px solid #ddd;">عالي (HC)</td>
<td style="padding: 12px; border: 1px solid #ddd;">منخفض</td>
<td style="padding: 12px; border: 1px solid #ddd;">منخفض جداً</td>
</tr>
<tr style="background: #fff;">
<td style="padding: 12px; border: 1px solid #ddd;">ROP</td>
<td style="padding: 12px; border: 1px solid #ddd;">متوسط-عالي (Sand)</td>
<td style="padding: 12px; border: 1px solid #ddd;">بطيء (Shale)</td>
<td style="padding: 12px; border: 1px solid #ddd;">عالي (Sand مشبع)</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;">القطع</td>
<td style="padding: 12px; border: 1px solid #ddd;">رمل نظيف</td>
<td style="padding: 12px; border: 1px solid #ddd;">شظايا طينية</td>
<td style="padding: 12px; border: 1px solid #ddd;">رمل مع علامات الماء</td>
</tr>
</tbody>
</table>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 قرارات Geosteering</h3>
<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #2563eb;">
<p style="font-weight: bold; margin-bottom: 1rem;">عند اكتشاف الخروج من المكمن، الخيارات هي:</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #1e40af;">📈 إذا خرجنا للأعلى (Roof):</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li>زيادة الزاوية (Drop) للعودة للمكمن</li>
<li>قد نرى زيادة في Gamma Ray (Shale ceiling)</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #1e40af;">📉 إذا خرجنا للأسفل (Floor):</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li>تقليل الزاوية (Build) للعودة للمكمن</li>
<li>خطر الوصول لـ Water Contact!</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #1e40af;">↔️ الانحراف الجانبي (Azimuth Change):</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li>تغيير الاتجاه إذا كان المكمن يميل جانبياً</li>
<li>يُستخدم مع الأدوات الـ Azimuthal</li>
</ul>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Sweet Spot Targeting</h3>
<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #f59e0b;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
ليس كل المكمن متساوياً في الإنتاجية. الهدف هو البقاء في "Sweet Spot" - المنطقة الأفضل من المكمن:
</p>
<ul style="line-height: 2.2; padding-right: 1.5rem;">
<li><strong>في الصخر الزيتي:</strong> المنطقة الأعلى في TOC (Total Organic Carbon) والهشاشة</li>
<li><strong>في المكامن التقليدية:</strong> المنطقة الأعلى في المسامية والنفاذية</li>
<li><strong>في المكامن المتشققة:</strong> المنطقة بأكبر كثافة شقوق</li>
<li><strong>البعد عن OWC/GWC:</strong> تجنب مناطق تلامس الماء أو الغاز</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>Geosteering يضمن بقاء البئر داخل المكمن</li>
<li>LWD يوفر بيانات جيولوجية في الوقت الحقيقي</li>
<li>Gamma Ray و Resistivity هما المؤشران الرئيسيان</li>
<li>يمكن Build أو Drop أو تغيير Azimuth حسب الحاجة</li>
<li>Sweet Spot هو الهدف الأمثل داخل المكمن</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Geosteering', definition: 'توجيه البئر بناءً على البيانات الجيولوجية في الوقت الحقيقي' },
            { term: 'LWD', definition: 'Logging While Drilling - قياسات جيولوجية أثناء الحفر' },
            { term: 'Azimuthal', definition: 'أدوات توفر صورة 360° حول البئر' },
            { term: 'Pay Zone', definition: 'المنطقة المنتجة من المكمن' },
            { term: 'Sweet Spot', definition: 'أفضل منطقة في المكمن للإنتاج' },
          ],
          practiceQuestion: {
            question: 'ماذا يعني ارتفاع قراءة Gamma Ray أثناء الحفر الأفقي؟',
            options: [
              'دخول منطقة غنية بالنفط',
              'الخروج من المكمن إلى Shale',
              'زيادة في المسامية',
              'انخفاض الضغط'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Geosteering in Horizontal Drilling',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 What is Geosteering?</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
Geosteering is the process of steering the well in real-time based on geological data to ensure the horizontal section stays within the productive zone (Pay Zone) of the reservoir. It's a skill combining geology and directional drilling.
</p>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="font-size: 1.25rem; margin-bottom: 1rem;">💡 Why Do We Need Geosteering?</h3>
<p style="line-height: 1.8;">Reservoirs aren't perfect horizontal layers! They may dip, undulate, or be cut by faults. Without Geosteering, the well may exit the reservoir into non-productive zones (Shale or Water Zone) without knowing until it's too late.</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Geosteering Tools</h3>
<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #059669;">
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #059669;">1️⃣ LWD (Logging While Drilling)</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li><strong>Gamma Ray:</strong> Distinguishes Sand (productive) from Shale (non-productive)</li>
<li><strong>Resistivity:</strong> Detects hydrocarbons vs water</li>
<li><strong>Density/Neutron:</strong> Determines fluid type and porosity</li>
<li><strong>Azimuthal Tools:</strong> Provides 360° image around wellbore for direction</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #059669;">2️⃣ MWD (Measurement While Drilling)</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li><strong>Inclination:</strong> Well angle</li>
<li><strong>Azimuth:</strong> Well direction (compass)</li>
<li><strong>Toolface:</strong> Bent Housing direction for steering</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #059669;">3️⃣ Seismic While Drilling</p>
<p style="line-height: 1.8;">In advanced cases, real-time seismic is used to see structures ahead of the bit</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Indicators of Exiting Reservoir</h3>
<div style="background: #fee2e2; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #dc2626;">
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background: #fecaca;">
<th style="padding: 12px; border: 1px solid #fca5a5; text-align: left;">Indicator</th>
<th style="padding: 12px; border: 1px solid #fca5a5; text-align: left;">Normal (in reservoir)</th>
<th style="padding: 12px; border: 1px solid #fca5a5; text-align: left;">Exiting to Shale</th>
<th style="padding: 12px; border: 1px solid #fca5a5; text-align: left;">Exiting to Water</th>
</tr>
</thead>
<tbody>
<tr style="background: #fff;">
<td style="padding: 12px; border: 1px solid #ddd;">Gamma Ray</td>
<td style="padding: 12px; border: 1px solid #ddd;">Low (20-60 API)</td>
<td style="padding: 12px; border: 1px solid #ddd;">Increases (100+ API)</td>
<td style="padding: 12px; border: 1px solid #ddd;">Stays low</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;">Resistivity</td>
<td style="padding: 12px; border: 1px solid #ddd;">High (HC)</td>
<td style="padding: 12px; border: 1px solid #ddd;">Low</td>
<td style="padding: 12px; border: 1px solid #ddd;">Very low</td>
</tr>
<tr style="background: #fff;">
<td style="padding: 12px; border: 1px solid #ddd;">ROP</td>
<td style="padding: 12px; border: 1px solid #ddd;">Medium-High (Sand)</td>
<td style="padding: 12px; border: 1px solid #ddd;">Slow (Shale)</td>
<td style="padding: 12px; border: 1px solid #ddd;">High (saturated Sand)</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;">Cuttings</td>
<td style="padding: 12px; border: 1px solid #ddd;">Clean sand</td>
<td style="padding: 12px; border: 1px solid #ddd;">Clay fragments</td>
<td style="padding: 12px; border: 1px solid #ddd;">Sand with water signs</td>
</tr>
</tbody>
</table>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Geosteering Decisions</h3>
<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #2563eb;">
<p style="font-weight: bold; margin-bottom: 1rem;">When detecting exit from reservoir, options are:</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #1e40af;">📈 If exited upward (Roof):</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li>Increase angle (Drop) to return to reservoir</li>
<li>May see increased Gamma Ray (Shale ceiling)</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #1e40af;">📉 If exited downward (Floor):</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li>Decrease angle (Build) to return to reservoir</li>
<li>Risk of reaching Water Contact!</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #1e40af;">↔️ Lateral deviation (Azimuth Change):</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li>Change direction if reservoir dips laterally</li>
<li>Used with Azimuthal tools</li>
</ul>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Sweet Spot Targeting</h3>
<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #f59e0b;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
Not all reservoir is equal in productivity. The goal is staying in "Sweet Spot" - the best zone:
</p>
<ul style="line-height: 2.2; padding-left: 1.5rem;">
<li><strong>In Shale:</strong> Zone highest in TOC (Total Organic Carbon) and brittleness</li>
<li><strong>In Conventional:</strong> Zone highest in porosity and permeability</li>
<li><strong>In Fractured:</strong> Zone with highest fracture density</li>
<li><strong>Distance from OWC/GWC:</strong> Avoid water or gas contact zones</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>Geosteering ensures well stays within reservoir</li>
<li>LWD provides real-time geological data</li>
<li>Gamma Ray and Resistivity are main indicators</li>
<li>Can Build, Drop, or change Azimuth as needed</li>
<li>Sweet Spot is optimal target within reservoir</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Geosteering', definition: 'Steering well based on real-time geological data' },
            { term: 'LWD', definition: 'Logging While Drilling - geological measurements during drilling' },
            { term: 'Azimuthal', definition: 'Tools providing 360° image around wellbore' },
            { term: 'Pay Zone', definition: 'Productive zone of reservoir' },
            { term: 'Sweet Spot', definition: 'Best zone in reservoir for production' },
          ],
          practiceQuestion: {
            question: 'What does an increase in Gamma Ray reading during horizontal drilling mean?',
            options: [
              'Entering oil-rich zone',
              'Exiting reservoir into Shale',
              'Increase in porosity',
              'Pressure decrease'
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
          title: 'تحديات الحفر الأفقي وحلولها',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 التحديات التقنية في الحفر الأفقي</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
الحفر الأفقي يواجه تحديات فريدة تختلف عن الحفر العمودي. فهم هذه التحديات وحلولها أساسي لنجاح العملية.
</p>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 التحدي الأول: تنظيف الحفرة</h3>
<div style="background: #fee2e2; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #dc2626;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
في الأقسام الأفقية، تترسب القطع على الجانب السفلي وتشكل "سرير قطع" (Cuttings Bed) يتراكم ويسبب مشاكل خطيرة:
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #dc2626;">المشاكل المحتملة:</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li>انحشار سلسلة الحفر (Stuck Pipe)</li>
<li>زيادة العزم والسحب</li>
<li>عدم القدرة على إنزال التغليف</li>
<li>انسداد الفوهات وارتفاع ECD</li>
</ul>
</div>
<div style="background: #dcfce7; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #059669;">✅ الحلول:</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li><strong>دوران عالي (150+ RPM):</strong> يُحرك القطع ويمنع ترسبها</li>
<li><strong>تدفق عالي:</strong> سرعة حلقية كافية لحمل القطع</li>
<li><strong>Wiper Trips:</strong> رحلات تنظيف دورية</li>
<li><strong>High-Vis Sweeps:</strong> ضخ طين عالي اللزوجة</li>
<li><strong>Rotary Steerable:</strong> يسمح بالدوران المستمر أثناء التوجيه</li>
</ul>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 التحدي الثاني: العزم والسحب</h3>
<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #2563eb;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
الاحتكاك بين سلسلة الحفر والجدار يزداد بشكل كبير في الأقسام الأفقية:
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #1e40af;">التأثيرات:</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li>صعوبة نقل الوزن للبت (Weight Transfer)</li>
<li>استهلاك العزم في الاحتكاك بدلاً من الحفر</li>
<li>صعوبة رفع أو إنزال السلسلة</li>
</ul>
</div>
<div style="background: #dbeafe; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #1e40af;">✅ الحلول:</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li><strong>مواد التزليق:</strong> تقليل معامل الاحتكاك</li>
<li><strong>طين Oil-Based:</strong> أقل احتكاكاً من Water-Based</li>
<li><strong>Aluminum Drill Pipe:</strong> تخفيف الوزن في الأقسام الأفقية</li>
<li><strong>تقليل DLS:</strong> تجنب الانحناءات الحادة</li>
<li><strong>Agitator Tools:</strong> اهتزاز لتقليل الاحتكاك الساكن</li>
</ul>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 التحدي الثالث: إنزال التغليف</h3>
<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #f59e0b;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
إنزال التغليف في القسم الأفقي من أصعب المراحل بسبب الاحتكاك الكبير:
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #92400e;">التحديات:</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li>وزن التغليف لا يكفي لتجاوز الاحتكاك</li>
<li>قد يتوقف التغليف قبل الوصول للـ TD</li>
<li>الاحتكاك يزداد مع الطول</li>
</ul>
</div>
<div style="background: #fef3c7; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #92400e;">✅ الحلول:</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li><strong>Floatation (التعويم):</strong> ملء التغليف بهواء أو نيتروجين لتخفيف الوزن على الجانب السفلي</li>
<li><strong>Rotation while Running:</strong> الدوران أثناء الإنزال يقلل الاحتكاك</li>
<li><strong>Casing Flotation Collar:</strong> صمام يسمح بالتعويم ثم الملء</li>
<li><strong>Hydraulic Tractor:</strong> جر التغليف ميكانيكياً</li>
<li><strong>Liner بدلاً من Full Casing:</strong> أقصر وأخف</li>
</ul>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 التحدي الرابع: الإسمنت في الأفقي</h3>
<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #059669;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
تحقيق إسمنت جيد في الأقسام الأفقية صعب لأسباب عدة:
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #059669;">المشاكل:</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li>التغليف يميل للجانب السفلي (Eccentricity)</li>
<li>الإسمنت يتجمع في الأسفل ويترك فراغات في الأعلى</li>
<li>صعوبة إزاحة الطين بالكامل</li>
</ul>
</div>
<div style="background: #dcfce7; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #059669;">✅ الحلول:</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li><strong>Roller Centralizers:</strong> تمركز التغليف مع السماح بالحركة</li>
<li><strong>Rotation during Cementing:</strong> توزيع الإسمنت بالتساوي</li>
<li><strong>Foam Cement:</strong> أخف ويملأ الفراغات أفضل</li>
<li><strong>Spacers & Washes:</strong> تنظيف جدار البئر قبل الإسمنت</li>
</ul>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 التحدي الخامس: استقرار البئر</h3>
<div style="background: #e8f4f8; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
القسم الأفقي يتعرض لضغوط مختلفة عن العمودي:
</p>
<ul style="line-height: 2.2; padding-right: 1.5rem;">
<li><strong>تأثير الجاذبية:</strong> الجانب العلوي قد ينهار بدون دعم كافي</li>
<li><strong>اتجاه الإجهادات:</strong> البئر الأفقي يواجه إجهادات مختلفة</li>
<li><strong>تفاعل الطين:</strong> التعرض الطويل للـ Shale يسبب تضخماً</li>
<li><strong>الحل:</strong> طين مناسب (Inhibitive)، وزن طين كافي، تقليل وقت التعرض</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>تنظيف الحفرة يحتاج دوران عالي وتدفق عالي</li>
<li>T&D يُحل بمواد التزليق وتصميم المسار</li>
<li>إنزال التغليف يحتاج تقنيات خاصة (تعويم، دوران)</li>
<li>الإسمنت يحتاج تمركز ودوران للتوزيع المتساوي</li>
<li>الاستقرارية تحتاج طيناً مناسباً ووقت تعرض قصير</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Cuttings Bed', definition: 'تراكم القطع على الجانب السفلي من البئر الأفقي' },
            { term: 'Floatation', definition: 'تقنية تعويم التغليف لتسهيل إنزاله' },
            { term: 'Roller Centralizers', definition: 'أجهزة تمركز تسمح بالحركة والدوران' },
            { term: 'Weight Transfer', definition: 'نقل الوزن من السطح إلى البت للحفر' },
            { term: 'Agitator', definition: 'أداة اهتزاز لتقليل الاحتكاك الساكن' },
          ],
          practiceQuestion: {
            question: 'ما هي أفضل طريقة لتحسين تنظيف الحفرة في القسم الأفقي؟',
            options: [
              'تقليل سرعة الدوران',
              'استخدام دوران عالي (150+ RPM) وتدفق عالي',
              'تقليل وزن الطين',
              'إيقاف الضخ'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Horizontal Drilling Challenges and Solutions',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Technical Challenges in Horizontal Drilling</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
Horizontal drilling faces unique challenges different from vertical drilling. Understanding these challenges and their solutions is essential for operational success.
</p>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Challenge 1: Hole Cleaning</h3>
<div style="background: #fee2e2; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #dc2626;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
In horizontal sections, cuttings settle on the low side forming a "Cuttings Bed" that accumulates and causes serious problems:
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #dc2626;">Potential Problems:</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li>Stuck Pipe</li>
<li>Increased Torque and Drag</li>
<li>Unable to run casing</li>
<li>Nozzle plugging and ECD increase</li>
</ul>
</div>
<div style="background: #dcfce7; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #059669;">✅ Solutions:</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li><strong>High Rotation (150+ RPM):</strong> Agitates cuttings and prevents settling</li>
<li><strong>High Flow Rate:</strong> Sufficient annular velocity to carry cuttings</li>
<li><strong>Wiper Trips:</strong> Periodic cleaning trips</li>
<li><strong>High-Vis Sweeps:</strong> Pump high viscosity mud pills</li>
<li><strong>Rotary Steerable:</strong> Allows continuous rotation while steering</li>
</ul>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Challenge 2: Torque and Drag</h3>
<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #2563eb;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
Friction between drillstring and wellbore wall increases significantly in horizontal sections:
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #1e40af;">Effects:</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li>Difficulty transferring weight to bit (Weight Transfer)</li>
<li>Torque consumed by friction instead of drilling</li>
<li>Difficulty raising or lowering string</li>
</ul>
</div>
<div style="background: #dbeafe; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #1e40af;">✅ Solutions:</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li><strong>Lubricants:</strong> Reduce friction coefficient</li>
<li><strong>Oil-Based Mud:</strong> Less friction than Water-Based</li>
<li><strong>Aluminum Drill Pipe:</strong> Weight reduction in horizontal sections</li>
<li><strong>Minimize DLS:</strong> Avoid sharp bends</li>
<li><strong>Agitator Tools:</strong> Vibration to reduce static friction</li>
</ul>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Challenge 3: Running Casing</h3>
<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #f59e0b;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
Running casing in horizontal section is one of the most difficult stages due to high friction:
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #92400e;">Challenges:</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li>Casing weight insufficient to overcome friction</li>
<li>Casing may stop before reaching TD</li>
<li>Friction increases with length</li>
</ul>
</div>
<div style="background: #fef3c7; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #92400e;">✅ Solutions:</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li><strong>Floatation:</strong> Fill casing with air or nitrogen to reduce weight on low side</li>
<li><strong>Rotation while Running:</strong> Rotation during running reduces friction</li>
<li><strong>Casing Flotation Collar:</strong> Valve allows floatation then fill</li>
<li><strong>Hydraulic Tractor:</strong> Mechanically pull casing</li>
<li><strong>Liner instead of Full Casing:</strong> Shorter and lighter</li>
</ul>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Challenge 4: Cementing in Horizontal</h3>
<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #059669;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
Achieving good cement in horizontal sections is difficult for several reasons:
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #059669;">Problems:</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li>Casing tends to lie on low side (Eccentricity)</li>
<li>Cement accumulates at bottom leaving gaps on top</li>
<li>Difficulty completely displacing mud</li>
</ul>
</div>
<div style="background: #dcfce7; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #059669;">✅ Solutions:</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li><strong>Roller Centralizers:</strong> Center casing while allowing movement</li>
<li><strong>Rotation during Cementing:</strong> Distribute cement evenly</li>
<li><strong>Foam Cement:</strong> Lighter and fills gaps better</li>
<li><strong>Spacers & Washes:</strong> Clean wellbore before cement</li>
</ul>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Challenge 5: Wellbore Stability</h3>
<div style="background: #e8f4f8; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
Horizontal section experiences different stresses than vertical:
</p>
<ul style="line-height: 2.2; padding-left: 1.5rem;">
<li><strong>Gravity Effect:</strong> Top side may collapse without sufficient support</li>
<li><strong>Stress Direction:</strong> Horizontal well faces different stresses</li>
<li><strong>Mud Interaction:</strong> Long Shale exposure causes swelling</li>
<li><strong>Solution:</strong> Appropriate (Inhibitive) mud, sufficient mud weight, minimize exposure time</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>Hole cleaning needs high rotation and high flow</li>
<li>T&D solved with lubricants and path design</li>
<li>Casing running needs special techniques (floatation, rotation)</li>
<li>Cement needs centralization and rotation for even distribution</li>
<li>Stability needs appropriate mud and short exposure time</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Cuttings Bed', definition: 'Accumulation of cuttings on low side of horizontal well' },
            { term: 'Floatation', definition: 'Technique of floating casing to ease running' },
            { term: 'Roller Centralizers', definition: 'Centralizers allowing movement and rotation' },
            { term: 'Weight Transfer', definition: 'Transferring weight from surface to bit for drilling' },
            { term: 'Agitator', definition: 'Vibration tool to reduce static friction' },
          ],
          practiceQuestion: {
            question: 'What is the best way to improve hole cleaning in the horizontal section?',
            options: [
              'Reduce rotation speed',
              'Use high rotation (150+ RPM) and high flow',
              'Reduce mud weight',
              'Stop pumping'
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
          title: 'إكمال وتحفيز الآبار الأفقية',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 إكمال الآبار الأفقية</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
إكمال البئر الأفقي يختلف عن العمودي بسبب طول القسم الأفقي والحاجة لتحفيز المكمن على مساحة واسعة. اختيار نوع الإكمال يؤثر بشكل كبير على الإنتاجية.
</p>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 أنواع إكمال الآبار الأفقية</h3>
<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #64748b;">
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background: #e2e8f0;">
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: right;">النوع</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: right;">الوصف</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: right;">الاستخدام</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: right;">التكلفة</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;"><strong>Open Hole</strong></td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">بدون تغليف في القسم الأفقي</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">مكامن مستقرة، متجانسة</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">الأقل</td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 12px; border: 1px solid #cbd5e1;"><strong>Slotted Liner</strong></td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">أنبوب مشقق للترشيح</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">منع انهيار الجدار</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">منخفضة</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;"><strong>Pre-Perforated Liner</strong></td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">أنبوب مثقب مسبقاً</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">مرونة أكثر من Slotted</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">منخفضة</td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 12px; border: 1px solid #cbd5e1;"><strong>Cemented & Perforated</strong></td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">تغليف مُسمنت ثم مُثقب</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">تحكم في مناطق الإنتاج</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">متوسطة-عالية</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;"><strong>Multi-Stage Frac</strong></td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">عزل وتكسير متعدد المراحل</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">الصخر الزيتي</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">الأعلى</td>
</tr>
</tbody>
</table>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 التكسير الهيدروليكي متعدد المراحل</h3>
<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #059669;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
في المكامن منخفضة النفاذية (مثل الصخر الزيتي)، التكسير الهيدروليكي ضروري لتحقيق إنتاج اقتصادي:
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #059669;">خطوات العملية:</p>
<ol style="padding-right: 1.5rem; line-height: 2.2;">
<li>عزل قسم من القسم الأفقي (Stage) باستخدام Packers أو Plugs</li>
<li>ضخ سائل التكسير بضغط عالي (5000-10000 psi)</li>
<li>إنشاء شقوق في الصخر تمتد مئات الأقدام</li>
<li>ضخ Proppant (رمل أو سيراميك) لإبقاء الشقوق مفتوحة</li>
<li>الانتقال للمرحلة التالية وتكرار العملية</li>
</ol>
</div>
<div style="background: #dcfce7; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #059669;">📊 أرقام نموذجية:</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li><strong>عدد المراحل:</strong> 20-60 مرحلة أو أكثر</li>
<li><strong>طول كل مرحلة:</strong> 100-300 قدم</li>
<li><strong>كمية الماء:</strong> 5-15 مليون جالون للبئر</li>
<li><strong>كمية الـ Proppant:</strong> 5000-15000 طن للبئر</li>
</ul>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 أنظمة العزل (Isolation Systems)</h3>
<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #2563eb;">
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #1e40af;">1️⃣ Plug and Perf</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li>إنزال سدادة (Plug) بعد كل مرحلة</li>
<li>ثقب المرحلة التالية</li>
<li>الأكثر شيوعاً ومرونة</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #1e40af;">2️⃣ Sliding Sleeve</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li>فتحات مُركبة مسبقاً تُفتح بالكرات أو الأدوات</li>
<li>أسرع ولا تحتاج Wireline</li>
<li>أقل مرونة في عدد المراحل</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #1e40af;">3️⃣ Dissolvable Plugs</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li>سدادات تذوب بعد الإكمال</li>
<li>لا حاجة لطحنها أو إزالتها</li>
<li>تكلفة أعلى لكن توفر وقتاً</li>
</ul>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 اعتبارات إنتاج الآبار الأفقية</h3>
<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #f59e0b;">
<ul style="line-height: 2.2; padding-right: 1.5rem;">
<li><strong>توزيع التدفق:</strong> الجزء الأقرب للـ Heel ينتج أكثر من الـ Toe</li>
<li><strong>Inflow Control Devices (ICD):</strong> تُوازن الإنتاج على طول القسم الأفقي</li>
<li><strong>Toe-to-Heel Completion:</strong> البدء بالتكسير من الـ Toe للـ Heel</li>
<li><strong>Artificial Lift:</strong> قد نحتاج ESPs أو Gas Lift مصممة للأفقي</li>
<li><strong>مراقبة الإنتاج:</strong> Distributed Temperature/Acoustic Sensing (DTS/DAS)</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>أنواع الإكمال: Open Hole, Slotted Liner, Cemented, Multi-Stage</li>
<li>التكسير متعدد المراحل أساسي للصخر الزيتي</li>
<li>Plug and Perf الأكثر شيوعاً ومرونة</li>
<li>ICDs تُوازن الإنتاج على طول القسم الأفقي</li>
<li>المراقبة بـ DTS/DAS توفر بيانات قيمة</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Multi-Stage Frac', definition: 'التكسير الهيدروليكي متعدد المراحل' },
            { term: 'Plug and Perf', definition: 'طريقة إكمال بالسدادات والتثقيب' },
            { term: 'Proppant', definition: 'مادة تُبقي الشقوق مفتوحة (رمل أو سيراميك)' },
            { term: 'ICD', definition: 'Inflow Control Device - جهاز موازنة التدفق' },
            { term: 'Toe/Heel', definition: 'نهاية/بداية القسم الأفقي' },
          ],
          practiceQuestion: {
            question: 'ما هي طريقة الإكمال الأكثر استخداماً في آبار الصخر الزيتي؟',
            options: [
              'Open Hole',
              'Slotted Liner',
              'Multi-Stage Fracturing',
              'Gravel Pack'
            ],
            correctAnswer: 2,
          },
        },
        en: {
          title: 'Horizontal Well Completion and Stimulation',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Horizontal Well Completion</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
Horizontal well completion differs from vertical due to the length of the horizontal section and the need to stimulate the reservoir over a large area. Completion type choice significantly affects productivity.
</p>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Types of Horizontal Well Completions</h3>
<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #64748b;">
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background: #e2e8f0;">
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: left;">Type</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: left;">Description</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: left;">Use</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: left;">Cost</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;"><strong>Open Hole</strong></td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">No casing in horizontal section</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Stable, homogeneous reservoirs</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Lowest</td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 12px; border: 1px solid #cbd5e1;"><strong>Slotted Liner</strong></td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Slotted pipe for filtering</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Prevent wall collapse</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Low</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;"><strong>Pre-Perforated Liner</strong></td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Pre-perforated pipe</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">More flexibility than Slotted</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Low</td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 12px; border: 1px solid #cbd5e1;"><strong>Cemented & Perforated</strong></td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Cemented casing then perforated</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Control production zones</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Medium-High</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;"><strong>Multi-Stage Frac</strong></td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Multi-stage isolation and fracturing</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Shale</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Highest</td>
</tr>
</tbody>
</table>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Multi-Stage Hydraulic Fracturing</h3>
<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #059669;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
In low permeability reservoirs (like shale), hydraulic fracturing is essential to achieve economic production:
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #059669;">Process Steps:</p>
<ol style="padding-left: 1.5rem; line-height: 2.2;">
<li>Isolate a section of horizontal (Stage) using Packers or Plugs</li>
<li>Pump fracturing fluid at high pressure (5000-10000 psi)</li>
<li>Create fractures in rock extending hundreds of feet</li>
<li>Pump Proppant (sand or ceramic) to keep fractures open</li>
<li>Move to next stage and repeat</li>
</ol>
</div>
<div style="background: #dcfce7; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #059669;">📊 Typical Numbers:</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li><strong>Number of Stages:</strong> 20-60+ stages</li>
<li><strong>Stage Length:</strong> 100-300 ft</li>
<li><strong>Water Volume:</strong> 5-15 million gallons per well</li>
<li><strong>Proppant Volume:</strong> 5000-15000 tons per well</li>
</ul>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Isolation Systems</h3>
<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #2563eb;">
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #1e40af;">1️⃣ Plug and Perf</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li>Set a Plug after each stage</li>
<li>Perforate next stage</li>
<li>Most common and flexible</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #1e40af;">2️⃣ Sliding Sleeve</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li>Pre-installed ports opened with balls or tools</li>
<li>Faster, no Wireline needed</li>
<li>Less flexibility in stage count</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #1e40af;">3️⃣ Dissolvable Plugs</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li>Plugs that dissolve after completion</li>
<li>No need to mill or remove</li>
<li>Higher cost but saves time</li>
</ul>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Horizontal Well Production Considerations</h3>
<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #f59e0b;">
<ul style="line-height: 2.2; padding-left: 1.5rem;">
<li><strong>Flow Distribution:</strong> Part near Heel produces more than Toe</li>
<li><strong>Inflow Control Devices (ICD):</strong> Balance production along horizontal</li>
<li><strong>Toe-to-Heel Completion:</strong> Start fracturing from Toe to Heel</li>
<li><strong>Artificial Lift:</strong> May need ESPs or Gas Lift designed for horizontal</li>
<li><strong>Production Monitoring:</strong> Distributed Temperature/Acoustic Sensing (DTS/DAS)</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>Completion types: Open Hole, Slotted Liner, Cemented, Multi-Stage</li>
<li>Multi-Stage Frac essential for shale</li>
<li>Plug and Perf most common and flexible</li>
<li>ICDs balance production along horizontal</li>
<li>DTS/DAS monitoring provides valuable data</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Multi-Stage Frac', definition: 'Multi-stage hydraulic fracturing' },
            { term: 'Plug and Perf', definition: 'Completion method with plugs and perforating' },
            { term: 'Proppant', definition: 'Material keeping fractures open (sand or ceramic)' },
            { term: 'ICD', definition: 'Inflow Control Device - flow balancing device' },
            { term: 'Toe/Heel', definition: 'End/Beginning of horizontal section' },
          ],
          practiceQuestion: {
            question: 'What completion method is most used in shale oil wells?',
            options: [
              'Open Hole',
              'Slotted Liner',
              'Multi-Stage Fracturing',
              'Gravel Pack'
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
          title: 'مراجعة شاملة - الحفر الأفقي',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 مراجعة أسبوع الحفر الأفقي</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="font-size: 1.25rem; margin-bottom: 1rem;">📚 ملخص المفاهيم الأساسية</h3>
<p style="line-height: 1.8;">الحفر الأفقي هو تقنية تزيد التعرض للمكمن بشكل هائل عبر البقاء داخل الطبقة المنتجة لمسافات طويلة. يُستخدم في الصخر الزيتي والمكامن الرقيقة والمتشققة لتحقيق إنتاجية عالية.</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 اليوم الأول: المفاهيم الأساسية</h3>
<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #059669;">
<ul style="line-height: 2.2; padding-right: 1.5rem;">
<li><strong>الهدف:</strong> زيادة التعرض للمكمن 10-100 ضعف</li>
<li><strong>الأقسام:</strong> عمودي → بناء → مماسي → أفقي</li>
<li><strong>أنواع التصميم:</strong> Long (2-6°), Medium (8-20°), Short (1.5-3°/ft)</li>
<li><strong>التطبيقات:</strong> صخر زيتي، مكامن رقيقة، متشققة</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 اليوم الثاني: Geosteering</h3>
<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #2563eb;">
<table style="width: 100%; border-collapse: collapse; background: #fff;">
<thead>
<tr style="background: #e2e8f0;">
<th style="padding: 10px; border: 1px solid #ddd;">الأداة</th>
<th style="padding: 10px; border: 1px solid #ddd;">الوظيفة</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">Gamma Ray</td>
<td style="padding: 10px; border: 1px solid #ddd;">Sand vs Shale</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">Resistivity</td>
<td style="padding: 10px; border: 1px solid #ddd;">HC vs Water</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">Azimuthal</td>
<td style="padding: 10px; border: 1px solid #ddd;">صورة 360°</td>
</tr>
</tbody>
</table>
<p style="margin-top: 1rem; font-weight: bold;">الهدف: البقاء في Sweet Spot داخل المكمن</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 اليوم الثالث: التحديات والحلول</h3>
<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #f59e0b;">
<table style="width: 100%; border-collapse: collapse; background: #fff;">
<thead>
<tr style="background: #fef3c7;">
<th style="padding: 10px; border: 1px solid #ddd;">التحدي</th>
<th style="padding: 10px; border: 1px solid #ddd;">الحل</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">تنظيف الحفرة</td>
<td style="padding: 10px; border: 1px solid #ddd;">دوران 150+ RPM، تدفق عالي</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">T&D</td>
<td style="padding: 10px; border: 1px solid #ddd;">مواد تزليق، Aluminum DP</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">إنزال التغليف</td>
<td style="padding: 10px; border: 1px solid #ddd;">تعويم، دوران</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">الإسمنت</td>
<td style="padding: 10px; border: 1px solid #ddd;">Roller Centralizers، دوران</td>
</tr>
</tbody>
</table>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 اليوم الرابع: الإكمال والتحفيز</h3>
<div style="background: #fee2e2; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #dc2626;">
<ul style="line-height: 2.2; padding-right: 1.5rem;">
<li><strong>أنواع الإكمال:</strong> Open Hole, Slotted Liner, Cemented, Multi-Stage</li>
<li><strong>التكسير:</strong> 20-60 مرحلة، Plug and Perf الأكثر شيوعاً</li>
<li><strong>Proppant:</strong> رمل أو سيراميك لإبقاء الشقوق مفتوحة</li>
<li><strong>ICD:</strong> موازنة الإنتاج على طول القسم الأفقي</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 نقاط رئيسية للاختبار</h3>
<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #7c3aed;">
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>زيادة Gamma Ray = خروج للـ Shale</li>
<li>Long Radius = 2-6°/100ft (الأكثر شيوعاً)</li>
<li>تنظيف الحفرة = دوران عالي + تدفق عالي</li>
<li>Multi-Stage Frac أساسي للصخر الزيتي</li>
<li>Plug and Perf الأكثر مرونة</li>
</ul>
</div>
</section>`,
          keyTerms: [],
          practiceQuestion: {
            question: 'ما هو الهدف الرئيسي من الحفر الأفقي؟',
            options: [
              'تقليل تكلفة الحفر',
              'زيادة التعرض للمكمن',
              'تجنب الصدوع',
              'تقليل وقت الحفر'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Comprehensive Review - Horizontal Drilling',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Horizontal Drilling Week Review</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="font-size: 1.25rem; margin-bottom: 1rem;">📚 Key Concepts Summary</h3>
<p style="line-height: 1.8;">Horizontal drilling is a technique that massively increases reservoir exposure by staying within the productive layer for long distances. Used in shale, thin, and fractured reservoirs to achieve high productivity.</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Day 1: Basic Concepts</h3>
<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #059669;">
<ul style="line-height: 2.2; padding-left: 1.5rem;">
<li><strong>Goal:</strong> Increase reservoir exposure 10-100 times</li>
<li><strong>Sections:</strong> Vertical → Build → Tangent → Horizontal</li>
<li><strong>Design Types:</strong> Long (2-6°), Medium (8-20°), Short (1.5-3°/ft)</li>
<li><strong>Applications:</strong> Shale, thin reservoirs, fractured</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Day 2: Geosteering</h3>
<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #2563eb;">
<table style="width: 100%; border-collapse: collapse; background: #fff;">
<thead>
<tr style="background: #e2e8f0;">
<th style="padding: 10px; border: 1px solid #ddd;">Tool</th>
<th style="padding: 10px; border: 1px solid #ddd;">Function</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">Gamma Ray</td>
<td style="padding: 10px; border: 1px solid #ddd;">Sand vs Shale</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">Resistivity</td>
<td style="padding: 10px; border: 1px solid #ddd;">HC vs Water</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">Azimuthal</td>
<td style="padding: 10px; border: 1px solid #ddd;">360° image</td>
</tr>
</tbody>
</table>
<p style="margin-top: 1rem; font-weight: bold;">Goal: Stay in Sweet Spot within reservoir</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Day 3: Challenges and Solutions</h3>
<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #f59e0b;">
<table style="width: 100%; border-collapse: collapse; background: #fff;">
<thead>
<tr style="background: #fef3c7;">
<th style="padding: 10px; border: 1px solid #ddd;">Challenge</th>
<th style="padding: 10px; border: 1px solid #ddd;">Solution</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">Hole Cleaning</td>
<td style="padding: 10px; border: 1px solid #ddd;">150+ RPM rotation, high flow</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">T&D</td>
<td style="padding: 10px; border: 1px solid #ddd;">Lubricants, Aluminum DP</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">Casing Running</td>
<td style="padding: 10px; border: 1px solid #ddd;">Floatation, rotation</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">Cement</td>
<td style="padding: 10px; border: 1px solid #ddd;">Roller Centralizers, rotation</td>
</tr>
</tbody>
</table>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Day 4: Completion and Stimulation</h3>
<div style="background: #fee2e2; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #dc2626;">
<ul style="line-height: 2.2; padding-left: 1.5rem;">
<li><strong>Completion Types:</strong> Open Hole, Slotted Liner, Cemented, Multi-Stage</li>
<li><strong>Fracturing:</strong> 20-60 stages, Plug and Perf most common</li>
<li><strong>Proppant:</strong> Sand or ceramic to keep fractures open</li>
<li><strong>ICD:</strong> Balance production along horizontal</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Key Points for Quiz</h3>
<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #7c3aed;">
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>Gamma Ray increase = exiting to Shale</li>
<li>Long Radius = 2-6°/100ft (most common)</li>
<li>Hole cleaning = high rotation + high flow</li>
<li>Multi-Stage Frac essential for shale</li>
<li>Plug and Perf most flexible</li>
</ul>
</div>
</section>`,
          keyTerms: [],
          practiceQuestion: {
            question: 'What is the main goal of horizontal drilling?',
            options: [
              'Reduce drilling cost',
              'Increase reservoir exposure',
              'Avoid faults',
              'Reduce drilling time'
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
          title: 'اختبار الحفر الأفقي',
          explanation: 'اختبر معلوماتك حول الحفر الأفقي',
          keyTerms: [],
        },
        en: {
          title: 'Horizontal Drilling Quiz',
          explanation: 'Test your knowledge of Horizontal Drilling',
          keyTerms: [],
        },
      },
      quiz: {
        ar: [
          { question: 'ما هو السبب الرئيسي لاستخدام الحفر الأفقي؟', options: ['تقليل التكلفة', 'زيادة التعرض للمكمن', 'تسريع الحفر', 'تجنب الماء'], correctAnswer: 1 },
          { question: 'ما هو Build Rate في تصميم Long Radius؟', options: ['8-20°/100ft', '2-6°/100ft', '1.5-3°/ft', '30-50°/100ft'], correctAnswer: 1 },
          { question: 'ماذا يعني ارتفاع Gamma Ray أثناء الحفر الأفقي؟', options: ['دخول منطقة نفطية', 'الخروج للـ Shale', 'زيادة المسامية', 'انخفاض الضغط'], correctAnswer: 1 },
          { question: 'ما هي أفضل طريقة لتحسين تنظيف الحفرة في القسم الأفقي؟', options: ['تقليل الدوران', 'دوران عالي وتدفق عالي', 'إيقاف الضخ', 'تقليل وزن الطين'], correctAnswer: 1 },
          { question: 'ما هي وظيفة ICD؟', options: ['زيادة الضغط', 'موازنة الإنتاج على طول القسم الأفقي', 'تقليل التكلفة', 'تسريع الحفر'], correctAnswer: 1 },
          { question: 'ما هي طريقة الإكمال الأكثر شيوعاً في الصخر الزيتي؟', options: ['Open Hole', 'Slotted Liner', 'Multi-Stage Fracturing', 'Gravel Pack'], correctAnswer: 2 },
          { question: 'ما هو Proppant؟', options: ['سائل التكسير', 'مادة تُبقي الشقوق مفتوحة', 'نوع من الطين', 'أداة قياس'], correctAnswer: 1 },
          { question: 'ما هي تقنية Floatation في إنزال التغليف؟', options: ['زيادة الوزن', 'ملء التغليف بالهواء لتخفيف الوزن', 'استخدام طين ثقيل', 'إيقاف الضخ'], correctAnswer: 1 },
          { question: 'ما هو Sweet Spot؟', options: ['نهاية البئر', 'أفضل منطقة في المكمن للإنتاج', 'بداية القسم الأفقي', 'منطقة الماء'], correctAnswer: 1 },
          { question: 'كم عدد المراحل النموذجي في Multi-Stage Frac؟', options: ['5-10', '20-60+', '100-200', '1-3'], correctAnswer: 1 },
        ],
        en: [
          { question: 'What is the main reason for horizontal drilling?', options: ['Cost reduction', 'Increase reservoir exposure', 'Speed up drilling', 'Avoid water'], correctAnswer: 1 },
          { question: 'What is the Build Rate in Long Radius design?', options: ['8-20°/100ft', '2-6°/100ft', '1.5-3°/ft', '30-50°/100ft'], correctAnswer: 1 },
          { question: 'What does increased Gamma Ray during horizontal drilling mean?', options: ['Entering oil zone', 'Exiting to Shale', 'Increased porosity', 'Pressure drop'], correctAnswer: 1 },
          { question: 'What is the best way to improve hole cleaning in horizontal section?', options: ['Reduce rotation', 'High rotation and high flow', 'Stop pumping', 'Reduce mud weight'], correctAnswer: 1 },
          { question: 'What is the function of ICD?', options: ['Increase pressure', 'Balance production along horizontal', 'Reduce cost', 'Speed up drilling'], correctAnswer: 1 },
          { question: 'What is the most common completion method in shale?', options: ['Open Hole', 'Slotted Liner', 'Multi-Stage Fracturing', 'Gravel Pack'], correctAnswer: 2 },
          { question: 'What is Proppant?', options: ['Fracturing fluid', 'Material keeping fractures open', 'Type of mud', 'Measurement tool'], correctAnswer: 1 },
          { question: 'What is Floatation technique in casing running?', options: ['Increase weight', 'Fill casing with air to reduce weight', 'Use heavy mud', 'Stop pumping'], correctAnswer: 1 },
          { question: 'What is Sweet Spot?', options: ['End of well', 'Best zone in reservoir for production', 'Start of horizontal', 'Water zone'], correctAnswer: 1 },
          { question: 'What is typical number of stages in Multi-Stage Frac?', options: ['5-10', '20-60+', '100-200', '1-3'], correctAnswer: 1 },
        ],
      },
    },
    {
      day: 7,
      type: 'project',
      content: {
        ar: {
          title: 'مشروع الحفر الأفقي',
          explanation: 'طبق ما تعلمته في مشروع عملي',
          keyTerms: [],
        },
        en: {
          title: 'Horizontal Drilling Project',
          explanation: 'Apply what you learned in a practical project',
          keyTerms: [],
        },
      },
      project: {
        ar: {
          title: 'تصميم بئر أفقي في مكمن صخر زيتي',
          description: 'أنت مهندس حفر مكلف بتصميم بئر أفقي في مكمن صخر زيتي. سماكة المكمن 80 قدم فقط، والهدف هو حفر قسم أفقي بطول 8000 قدم مع التكسير الهيدروليكي متعدد المراحل.',
          instructions: [
            'حدد نوع التصميم (Long/Medium/Short Radius) مع تبرير اختيارك',
            'اشرح خطة Geosteering للبقاء داخل المكمن الرقيق',
            'صف إجراءات تنظيف الحفرة المطلوبة للقسم الأفقي الطويل',
            'حدد نوع الإكمال وعدد مراحل التكسير التقريبي',
            'اذكر التحديات المتوقعة وكيف ستتعامل معها',
          ],
          submissionType: 'text',
        },
        en: {
          title: 'Design Horizontal Well in Shale Reservoir',
          description: 'You are a drilling engineer tasked with designing a horizontal well in a shale reservoir. The reservoir thickness is only 80 ft, and the goal is to drill an 8000 ft horizontal section with multi-stage hydraulic fracturing.',
          instructions: [
            'Determine design type (Long/Medium/Short Radius) with justification',
            'Explain Geosteering plan to stay within thin reservoir',
            'Describe hole cleaning procedures required for long horizontal section',
            'Specify completion type and approximate number of frac stages',
            'List expected challenges and how you will handle them',
          ],
          submissionType: 'text',
        },
      },
    },
  ],
};
