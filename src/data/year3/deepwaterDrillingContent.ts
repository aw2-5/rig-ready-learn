import { WeeklyLesson } from '../weeklyContent';

export const deepwaterDrillingLesson: WeeklyLesson = {
  lessonId: 'deepwater-drilling',
  days: [
    {
      day: 1,
      type: 'learning',
      content: {
        ar: {
          title: 'أساسيات الحفر في المياه العميقة - اليوم الأول',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">🔷 مقدمة شاملة في الحفر في المياه العميقة</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="color: #fbbf24; margin-bottom: 1rem;">🌊 Deepwater Drilling: التعريف والأهمية</h3>
<p style="font-size: 1.1rem; line-height: 1.8;">
الحفر في المياه العميقة (Deepwater Drilling) يشير إلى عمليات الحفر التي تتم في أعماق مائية تتجاوز 1,000 قدم (305 متر). تمثل هذه العمليات قمة التحدي الهندسي في صناعة النفط والغاز، حيث تجمع بين الضغوط الهائلة والظروف البيئية القاسية والتعقيد التشغيلي.
</p>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">📊 تصنيف أعماق المياه (Water Depth Classification)</h3>

<div style="display: grid; gap: 1rem; margin-bottom: 2rem;">
<div style="background: #e8f5e9; padding: 1.2rem; border-radius: 10px; border-right: 4px solid #4caf50;">
<h4 style="color: #2e7d32; margin-bottom: 0.5rem;">Shallow Water - المياه الضحلة</h4>
<p><strong>العمق:</strong> 0 - 500 قدم (0 - 152 م)</p>
<p><strong>المنصات:</strong> Jackup Rigs</p>
<p><strong>الخصائص:</strong> منصات ثابتة ترتكز على قاع البحر</p>
</div>

<div style="background: #e3f2fd; padding: 1.2rem; border-radius: 10px; border-right: 4px solid #2196f3;">
<h4 style="color: #1565c0; margin-bottom: 0.5rem;">Deepwater - المياه العميقة</h4>
<p><strong>العمق:</strong> 1,000 - 5,000 قدم (305 - 1,524 م)</p>
<p><strong>المنصات:</strong> Semisubmersibles, Drillships</p>
<p><strong>الخصائص:</strong> منصات عائمة مع Dynamic Positioning أو Mooring</p>
</div>

<div style="background: #fce4ec; padding: 1.2rem; border-radius: 10px; border-right: 4px solid #e91e63;">
<h4 style="color: #c2185b; margin-bottom: 0.5rem;">Ultra-Deepwater - المياه فائقة العمق</h4>
<p><strong>العمق:</strong> أكثر من 5,000 قدم (> 1,524 م)</p>
<p><strong>المنصات:</strong> 6th/7th Generation Drillships</p>
<p><strong>الخصائص:</strong> أحدث التقنيات وأعلى التكاليف</p>
</div>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">🌍 أهم مناطق الحفر في المياه العميقة عالمياً</h3>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<table style="width: 100%; border-collapse: collapse;">
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 0.8rem; text-align: right;">المنطقة</th>
<th style="padding: 0.8rem; text-align: center;">أقصى عمق مائي</th>
<th style="padding: 0.8rem; text-align: right;">الخصائص</th>
</tr>
<tr style="background: #ffffff;">
<td style="padding: 0.8rem; border-bottom: 1px solid #ddd;">خليج المكسيك (GoM)</td>
<td style="padding: 0.8rem; text-align: center;">10,000+ قدم</td>
<td style="padding: 0.8rem;">Pre-salt formations, Salt canopies</td>
</tr>
<tr style="background: #f5f5f5;">
<td style="padding: 0.8rem; border-bottom: 1px solid #ddd;">البرازيل (Pre-Salt)</td>
<td style="padding: 0.8rem; text-align: center;">9,000+ قدم</td>
<td style="padding: 0.8rem;">Massive reservoirs under salt</td>
</tr>
<tr style="background: #ffffff;">
<td style="padding: 0.8rem; border-bottom: 1px solid #ddd;">غرب أفريقيا</td>
<td style="padding: 0.8rem; text-align: center;">8,000+ قدم</td>
<td style="padding: 0.8rem;">Angola, Nigeria - Turbidite sands</td>
</tr>
<tr style="background: #f5f5f5;">
<td style="padding: 0.8rem;">شرق البحر المتوسط</td>
<td style="padding: 0.8rem; text-align: center;">6,000+ قدم</td>
<td style="padding: 0.8rem;">Gas discoveries (Zohr, Leviathan)</td>
</tr>
</table>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">⚙️ المكونات الأساسية لنظام الحفر في المياه العميقة</h3>

<div style="background: #fff3e0; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #e65100; margin-bottom: 1rem;">1. Subsea BOP Stack (مجموعة صمامات منع الانفجار تحت سطح البحر)</h4>
<ul style="list-style: none; padding: 0;">
<li style="padding: 0.5rem 0; border-bottom: 1px solid #ffe0b2;">📌 <strong>Annular Preventers:</strong> للإغلاق حول أي حجم من الأنابيب</li>
<li style="padding: 0.5rem 0; border-bottom: 1px solid #ffe0b2;">📌 <strong>Ram Preventers:</strong> Pipe Rams, Blind Rams, Shear Rams</li>
<li style="padding: 0.5rem 0; border-bottom: 1px solid #ffe0b2;">📌 <strong>Choke & Kill Lines:</strong> للتحكم في الضغط وضخ السوائل</li>
<li style="padding: 0.5rem 0;">📌 <strong>LMRP (Lower Marine Riser Package):</strong> للفصل الطارئ</li>
</ul>
</div>

<div style="background: #e8eaf6; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #3f51b5; margin-bottom: 1rem;">2. Marine Riser System (نظام الناهض البحري)</h4>
<ul style="list-style: none; padding: 0;">
<li style="padding: 0.5rem 0; border-bottom: 1px solid #c5cae9;">📌 <strong>Riser Joints:</strong> أنابيب تربط السطح بقاع البحر (21" OD نموذجي)</li>
<li style="padding: 0.5rem 0; border-bottom: 1px solid #c5cae9;">📌 <strong>Telescopic Joint:</strong> لامتصاص حركة الـ Heave</li>
<li style="padding: 0.5rem 0; border-bottom: 1px solid #c5cae9;">📌 <strong>Flex Joints:</strong> للسماح بالميل الزاوي</li>
<li style="padding: 0.5rem 0;">📌 <strong>Riser Tensioners:</strong> للحفاظ على الشد المناسب</li>
</ul>
</div>

<div style="background: #fce4ec; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #c2185b; margin-bottom: 1rem;">3. Dynamic Positioning System (نظام التموضع الديناميكي)</h4>
<p style="margin-bottom: 1rem;">نظام يستخدم الدفاعات (Thrusters) للحفاظ على موقع المنصة فوق البئر:</p>
<ul style="list-style: none; padding: 0;">
<li style="padding: 0.5rem 0; border-bottom: 1px solid #f8bbd0;">📌 <strong>DP Class 2:</strong> نظامان مستقلان - قياسي للمياه العميقة</li>
<li style="padding: 0.5rem 0; border-bottom: 1px solid #f8bbd0;">📌 <strong>DP Class 3:</strong> ثلاثة أنظمة مستقلة - للعمليات الحرجة</li>
<li style="padding: 0.5rem 0;">📌 <strong>Position Reference:</strong> GPS, Acoustic, Taut Wire</li>
</ul>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">📈 تحديات الضغط في المياه العميقة</h3>

<div style="background: linear-gradient(to right, #fff8e1, #ffecb3); padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #ff8f00; margin-bottom: 1rem;">Hydrostatic Pressure من عمود الماء</h4>
<p style="margin-bottom: 1rem;">كل 1,000 قدم من الماء تضيف حوالي <strong>445 psi</strong> من الضغط:</p>
<div style="background: white; padding: 1rem; border-radius: 8px; font-family: monospace; text-align: center;">
<strong>P<sub>hydrostatic</sub> = 0.445 × Water Depth (ft)</strong>
</div>
<p style="margin-top: 1rem;">مثال: عند عمق 8,000 قدم = <strong>3,560 psi</strong> ضغط إضافي على المعدات</p>
</div>

<div style="background: #ffebee; padding: 1.2rem; border-radius: 10px; border-right: 4px solid #f44336;">
<h4 style="color: #c62828;">⚠️ تأثير الضغط على العمليات:</h4>
<ul style="margin-top: 0.5rem;">
<li>زيادة متطلبات تصنيف ضغط الـ BOP (15,000 - 20,000 psi)</li>
<li>الحاجة لـ Riser Margin إضافي في تصميم كثافة سائل الحفر</li>
<li>تعقيد حسابات ECD بسبب طول عمود السائل</li>
</ul>
</div>

<div style="background: #e8f5e9; padding: 1.2rem; border-radius: 10px; margin-top: 1.5rem;">
<h4 style="color: #2e7d32;">💡 نقطة مهمة:</h4>
<p>درجة الحرارة عند قاع البحر العميق تكون منخفضة جداً (حوالي 35-40°F أو 2-4°C)، مما يخلق تحديات في لزوجة سائل الحفر وتكوين الهيدرات.</p>
</div>
</section>`,
          keyTerms: [
            { term: 'Deepwater', definition: 'المياه العميقة - أعماق مائية 1,000-5,000 قدم' },
            { term: 'Ultra-Deepwater', definition: 'المياه فائقة العمق - أكثر من 5,000 قدم' },
            { term: 'Subsea BOP', definition: 'مجموعة صمامات منع الانفجار المثبتة على قاع البحر' },
            { term: 'Marine Riser', definition: 'الناهض البحري - أنبوب يربط المنصة بالـ BOP' },
            { term: 'Dynamic Positioning', definition: 'نظام التموضع الديناميكي للحفاظ على موقع المنصة' },
          ],
          practiceQuestion: {
            question: 'ما هو الحد الأدنى لعمق المياه ليصنف الحفر كـ "المياه العميقة" (Deepwater)؟',
            options: [
              '500 قدم',
              '1,000 قدم',
              '2,500 قدم',
              '5,000 قدم'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Deepwater Drilling Fundamentals - Day 1',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">🔷 Comprehensive Introduction to Deepwater Drilling</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="color: #fbbf24; margin-bottom: 1rem;">🌊 Deepwater Drilling: Definition and Significance</h3>
<p style="font-size: 1.1rem; line-height: 1.8;">
Deepwater Drilling refers to drilling operations conducted in water depths exceeding 1,000 feet (305 meters). These operations represent the pinnacle of engineering challenges in the oil and gas industry, combining immense pressures, harsh environmental conditions, and operational complexity.
</p>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">📊 Water Depth Classification</h3>

<div style="display: grid; gap: 1rem; margin-bottom: 2rem;">
<div style="background: #e8f5e9; padding: 1.2rem; border-radius: 10px; border-left: 4px solid #4caf50;">
<h4 style="color: #2e7d32; margin-bottom: 0.5rem;">Shallow Water</h4>
<p><strong>Depth:</strong> 0 - 500 ft (0 - 152 m)</p>
<p><strong>Rigs:</strong> Jackup Rigs</p>
<p><strong>Characteristics:</strong> Bottom-founded rigs resting on seabed</p>
</div>

<div style="background: #e3f2fd; padding: 1.2rem; border-radius: 10px; border-left: 4px solid #2196f3;">
<h4 style="color: #1565c0; margin-bottom: 0.5rem;">Deepwater</h4>
<p><strong>Depth:</strong> 1,000 - 5,000 ft (305 - 1,524 m)</p>
<p><strong>Rigs:</strong> Semisubmersibles, Drillships</p>
<p><strong>Characteristics:</strong> Floating rigs with Dynamic Positioning or Mooring</p>
</div>

<div style="background: #fce4ec; padding: 1.2rem; border-radius: 10px; border-left: 4px solid #e91e63;">
<h4 style="color: #c2185b; margin-bottom: 0.5rem;">Ultra-Deepwater</h4>
<p><strong>Depth:</strong> Greater than 5,000 ft (> 1,524 m)</p>
<p><strong>Rigs:</strong> 6th/7th Generation Drillships</p>
<p><strong>Characteristics:</strong> Latest technology and highest costs</p>
</div>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">🌍 Major Global Deepwater Drilling Regions</h3>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<table style="width: 100%; border-collapse: collapse;">
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 0.8rem; text-align: left;">Region</th>
<th style="padding: 0.8rem; text-align: center;">Max Water Depth</th>
<th style="padding: 0.8rem; text-align: left;">Characteristics</th>
</tr>
<tr style="background: #ffffff;">
<td style="padding: 0.8rem; border-bottom: 1px solid #ddd;">Gulf of Mexico (GoM)</td>
<td style="padding: 0.8rem; text-align: center;">10,000+ ft</td>
<td style="padding: 0.8rem;">Pre-salt formations, Salt canopies</td>
</tr>
<tr style="background: #f5f5f5;">
<td style="padding: 0.8rem; border-bottom: 1px solid #ddd;">Brazil (Pre-Salt)</td>
<td style="padding: 0.8rem; text-align: center;">9,000+ ft</td>
<td style="padding: 0.8rem;">Massive reservoirs under salt</td>
</tr>
<tr style="background: #ffffff;">
<td style="padding: 0.8rem; border-bottom: 1px solid #ddd;">West Africa</td>
<td style="padding: 0.8rem; text-align: center;">8,000+ ft</td>
<td style="padding: 0.8rem;">Angola, Nigeria - Turbidite sands</td>
</tr>
<tr style="background: #f5f5f5;">
<td style="padding: 0.8rem;">Eastern Mediterranean</td>
<td style="padding: 0.8rem; text-align: center;">6,000+ ft</td>
<td style="padding: 0.8rem;">Gas discoveries (Zohr, Leviathan)</td>
</tr>
</table>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">⚙️ Essential Components of Deepwater Drilling Systems</h3>

<div style="background: #fff3e0; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #e65100; margin-bottom: 1rem;">1. Subsea BOP Stack</h4>
<ul style="list-style: none; padding: 0;">
<li style="padding: 0.5rem 0; border-bottom: 1px solid #ffe0b2;">📌 <strong>Annular Preventers:</strong> Seals around any pipe size</li>
<li style="padding: 0.5rem 0; border-bottom: 1px solid #ffe0b2;">📌 <strong>Ram Preventers:</strong> Pipe Rams, Blind Rams, Shear Rams</li>
<li style="padding: 0.5rem 0; border-bottom: 1px solid #ffe0b2;">📌 <strong>Choke & Kill Lines:</strong> For pressure control and fluid pumping</li>
<li style="padding: 0.5rem 0;">📌 <strong>LMRP (Lower Marine Riser Package):</strong> For emergency disconnect</li>
</ul>
</div>

<div style="background: #e8eaf6; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #3f51b5; margin-bottom: 1rem;">2. Marine Riser System</h4>
<ul style="list-style: none; padding: 0;">
<li style="padding: 0.5rem 0; border-bottom: 1px solid #c5cae9;">📌 <strong>Riser Joints:</strong> Pipes connecting surface to seabed (typically 21" OD)</li>
<li style="padding: 0.5rem 0; border-bottom: 1px solid #c5cae9;">📌 <strong>Telescopic Joint:</strong> Absorbs heave motion</li>
<li style="padding: 0.5rem 0; border-bottom: 1px solid #c5cae9;">📌 <strong>Flex Joints:</strong> Allow angular deflection</li>
<li style="padding: 0.5rem 0;">📌 <strong>Riser Tensioners:</strong> Maintain proper tension</li>
</ul>
</div>

<div style="background: #fce4ec; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #c2185b; margin-bottom: 1rem;">3. Dynamic Positioning System</h4>
<p style="margin-bottom: 1rem;">System using thrusters to maintain vessel position over the well:</p>
<ul style="list-style: none; padding: 0;">
<li style="padding: 0.5rem 0; border-bottom: 1px solid #f8bbd0;">📌 <strong>DP Class 2:</strong> Two independent systems - standard for deepwater</li>
<li style="padding: 0.5rem 0; border-bottom: 1px solid #f8bbd0;">📌 <strong>DP Class 3:</strong> Three independent systems - for critical operations</li>
<li style="padding: 0.5rem 0;">📌 <strong>Position Reference:</strong> GPS, Acoustic, Taut Wire</li>
</ul>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">📈 Pressure Challenges in Deepwater</h3>

<div style="background: linear-gradient(to right, #fff8e1, #ffecb3); padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #ff8f00; margin-bottom: 1rem;">Hydrostatic Pressure from Water Column</h4>
<p style="margin-bottom: 1rem;">Every 1,000 feet of water adds approximately <strong>445 psi</strong> of pressure:</p>
<div style="background: white; padding: 1rem; border-radius: 8px; font-family: monospace; text-align: center;">
<strong>P<sub>hydrostatic</sub> = 0.445 × Water Depth (ft)</strong>
</div>
<p style="margin-top: 1rem;">Example: At 8,000 ft depth = <strong>3,560 psi</strong> additional pressure on equipment</p>
</div>

<div style="background: #ffebee; padding: 1.2rem; border-radius: 10px; border-left: 4px solid #f44336;">
<h4 style="color: #c62828;">⚠️ Impact on Operations:</h4>
<ul style="margin-top: 0.5rem;">
<li>Increased BOP pressure rating requirements (15,000 - 20,000 psi)</li>
<li>Need for additional Riser Margin in mud weight design</li>
<li>Complex ECD calculations due to long fluid column</li>
</ul>
</div>

<div style="background: #e8f5e9; padding: 1.2rem; border-radius: 10px; margin-top: 1.5rem;">
<h4 style="color: #2e7d32;">💡 Key Point:</h4>
<p>Temperature at deep seabed is very low (approximately 35-40°F or 2-4°C), creating challenges with drilling fluid viscosity and hydrate formation.</p>
</div>
</section>`,
          keyTerms: [
            { term: 'Deepwater', definition: 'Water depths between 1,000-5,000 feet' },
            { term: 'Ultra-Deepwater', definition: 'Water depths greater than 5,000 feet' },
            { term: 'Subsea BOP', definition: 'Blowout preventer stack installed on seabed' },
            { term: 'Marine Riser', definition: 'Conduit connecting floating rig to subsea BOP' },
            { term: 'Dynamic Positioning', definition: 'System to maintain vessel position over well' },
          ],
          practiceQuestion: {
            question: 'What is the minimum water depth to classify drilling as "Deepwater"?',
            options: [
              '500 feet',
              '1,000 feet',
              '2,500 feet',
              '5,000 feet'
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
          title: 'منصات الحفر العائمة وأنظمة التثبيت - اليوم الثاني',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">🔷 أنواع منصات الحفر في المياه العميقة</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="color: #fbbf24; margin-bottom: 1rem;">🚢 Floating Drilling Units (وحدات الحفر العائمة)</h3>
<p style="font-size: 1.1rem; line-height: 1.8;">
في المياه العميقة، لا يمكن استخدام المنصات الثابتة. تعتمد العمليات على منصات عائمة قادرة على الحفاظ على موقعها فوق البئر رغم التيارات والرياح والأمواج. النوعان الرئيسيان هما: Semisubmersibles و Drillships.
</p>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">🔶 Semisubmersible Rigs (المنصات شبه الغاطسة)</h3>

<div style="background: #e3f2fd; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #1565c0; margin-bottom: 1rem;">التصميم والهيكل:</h4>
<ul style="list-style: none; padding: 0;">
<li style="padding: 0.8rem 0; border-bottom: 1px solid #bbdefb;">
<strong>🔹 Pontoons:</strong> عوامات أفقية كبيرة مغمورة تحت سطح الماء توفر الطفو الرئيسي
</li>
<li style="padding: 0.8rem 0; border-bottom: 1px solid #bbdefb;">
<strong>🔹 Columns:</strong> أعمدة رأسية تربط العوامات بسطح العمل
</li>
<li style="padding: 0.8rem 0; border-bottom: 1px solid #bbdefb;">
<strong>🔹 Deck:</strong> سطح العمل الرئيسي فوق الماء
</li>
<li style="padding: 0.8rem 0;">
<strong>🔹 Moon Pool:</strong> فتحة في وسط السطح لمرور معدات الحفر
</li>
</ul>
</div>

<div style="background: #fff3e0; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #e65100; margin-bottom: 1rem;">⚡ مميزات Semisubmersibles:</h4>
<ul style="margin: 0; padding-right: 1.5rem;">
<li style="margin-bottom: 0.5rem;">استقرار ممتاز في الأمواج العالية - مناسبة للمناطق القاسية (North Sea)</li>
<li style="margin-bottom: 0.5rem;">Heave motion منخفض - حركة رأسية قليلة</li>
<li style="margin-bottom: 0.5rem;">يمكن تثبيتها بـ Mooring أو DP</li>
<li>قدرة عالية على التحمل (Variable Deck Load)</li>
</ul>
</div>

<div style="background: #ffebee; padding: 1.2rem; border-radius: 10px; margin-bottom: 2rem;">
<h4 style="color: #c62828; margin-bottom: 0.5rem;">❌ محددات Semisubmersibles:</h4>
<ul style="margin: 0; padding-right: 1.5rem;">
<li style="margin-bottom: 0.3rem;">سرعة تنقل أبطأ من الـ Drillships</li>
<li style="margin-bottom: 0.3rem;">تكلفة يومية عالية</li>
<li>محدودية في الأعماق فائقة العمق (Ultra-deepwater)</li>
</ul>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">🔷 Drillships (سفن الحفر)</h3>

<div style="background: #e8f5e9; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #2e7d32; margin-bottom: 1rem;">التصميم والخصائص:</h4>
<p style="margin-bottom: 1rem;">سفن مصممة خصيصاً للحفر مع شكل هيكل السفينة التقليدي:</p>
<ul style="list-style: none; padding: 0;">
<li style="padding: 0.8rem 0; border-bottom: 1px solid #c8e6c9;">
<strong>🔹 Derrick:</strong> برج الحفر مثبت في منتصف السفينة
</li>
<li style="padding: 0.8rem 0; border-bottom: 1px solid #c8e6c9;">
<strong>🔹 Dual Activity:</strong> القدرة على تنفيذ عمليتين متزامنتين
</li>
<li style="padding: 0.8rem 0; border-bottom: 1px solid #c8e6c9;">
<strong>🔹 Large Deck Space:</strong> مساحة تخزين كبيرة للمعدات
</li>
<li style="padding: 0.8rem 0;">
<strong>🔹 Self-Propelled:</strong> ذاتية الدفع - لا تحتاج سفن سحب
</li>
</ul>
</div>

<div style="background: #e8eaf6; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #3f51b5; margin-bottom: 1rem;">أجيال سفن الحفر (Drillship Generations):</h4>
<table style="width: 100%; border-collapse: collapse;">
<tr style="background: #3f51b5; color: white;">
<th style="padding: 0.8rem;">الجيل</th>
<th style="padding: 0.8rem;">عمق المياه</th>
<th style="padding: 0.8rem;">الخصائص</th>
</tr>
<tr style="background: white;">
<td style="padding: 0.8rem; border-bottom: 1px solid #ddd;">5th Generation</td>
<td style="padding: 0.8rem; border-bottom: 1px solid #ddd;">7,500 ft</td>
<td style="padding: 0.8rem; border-bottom: 1px solid #ddd;">DP2, Single Activity</td>
</tr>
<tr style="background: #f5f5f5;">
<td style="padding: 0.8rem; border-bottom: 1px solid #ddd;">6th Generation</td>
<td style="padding: 0.8rem; border-bottom: 1px solid #ddd;">10,000 ft</td>
<td style="padding: 0.8rem; border-bottom: 1px solid #ddd;">DP2/DP3, Dual Activity</td>
</tr>
<tr style="background: white;">
<td style="padding: 0.8rem;">7th Generation</td>
<td style="padding: 0.8rem;">12,000+ ft</td>
<td style="padding: 0.8rem;">Enhanced DP3, 20K BOP, MPD-Ready</td>
</tr>
</table>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">⚓ أنظمة التثبيت (Station Keeping Systems)</h3>

<div style="background: #fce4ec; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #c2185b; margin-bottom: 1rem;">1. Mooring Systems (أنظمة الإرساء)</h4>
<p style="margin-bottom: 1rem;">استخدام مراسي وسلاسل/حبال لتثبيت المنصة:</p>
<ul style="list-style: none; padding: 0;">
<li style="padding: 0.5rem 0; border-bottom: 1px solid #f8bbd0;">
<strong>Catenary Mooring:</strong> خطوط ترسو بشكل منحني - للأعماق المتوسطة
</li>
<li style="padding: 0.5rem 0; border-bottom: 1px solid #f8bbd0;">
<strong>Taut Leg Mooring:</strong> خطوط مشدودة بزاوية - للمياه العميقة
</li>
<li style="padding: 0.5rem 0;">
<strong>Spread Mooring:</strong> 8-12 خط موزعة حول المنصة
</li>
</ul>
</div>

<div style="background: #fff8e1; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #ff8f00; margin-bottom: 1rem;">2. Dynamic Positioning - DP (التموضع الديناميكي)</h4>
<p style="margin-bottom: 1rem;">استخدام محركات دفع (Thrusters) للحفاظ على الموقع:</p>

<div style="display: grid; gap: 1rem; margin-top: 1rem;">
<div style="background: white; padding: 1rem; border-radius: 8px; border-right: 4px solid #4caf50;">
<h5 style="color: #2e7d32; margin-bottom: 0.5rem;">DP Class 1</h5>
<p>نظام واحد - فقدان الموقع عند أي عطل</p>
<p><em>الاستخدام: عمليات غير حرجة</em></p>
</div>

<div style="background: white; padding: 1rem; border-radius: 8px; border-right: 4px solid #2196f3;">
<h5 style="color: #1565c0; margin-bottom: 0.5rem;">DP Class 2</h5>
<p>نظامان مستقلان - يحافظ على الموقع عند عطل واحد</p>
<p><em>الاستخدام: معظم عمليات المياه العميقة</em></p>
</div>

<div style="background: white; padding: 1rem; border-radius: 8px; border-right: 4px solid #9c27b0;">
<h5 style="color: #7b1fa2; margin-bottom: 0.5rem;">DP Class 3</h5>
<p>ثلاثة أنظمة مستقلة تماماً - أقصى موثوقية</p>
<p><em>الاستخدام: العمليات الحرجة، HPHT، Ultra-deepwater</em></p>
</div>
</div>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">🎯 مكونات نظام DP</h3>

<div style="background: #f3e5f5; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<ul style="list-style: none; padding: 0;">
<li style="padding: 0.8rem 0; border-bottom: 1px solid #e1bee7;">
<strong>Position Reference Systems:</strong>
<ul style="margin-top: 0.5rem; padding-right: 1.5rem;">
<li>DGPS - Global Positioning</li>
<li>Acoustic Systems (HPR, USBL)</li>
<li>Taut Wire Reference</li>
<li>Laser/RADius Systems</li>
</ul>
</li>
<li style="padding: 0.8rem 0; border-bottom: 1px solid #e1bee7;">
<strong>Thrusters:</strong>
<ul style="margin-top: 0.5rem; padding-right: 1.5rem;">
<li>Azimuth Thrusters (360° قابلة للدوران)</li>
<li>Tunnel Thrusters</li>
<li>Main Propellers</li>
</ul>
</li>
<li style="padding: 0.8rem 0;">
<strong>DP Control System:</strong>
<ul style="margin-top: 0.5rem; padding-right: 1.5rem;">
<li>DP Computers (Redundant)</li>
<li>Operator Consoles</li>
<li>Power Management</li>
</ul>
</li>
</ul>
</div>

<div style="background: #ffebee; padding: 1.2rem; border-radius: 10px; margin-top: 1.5rem;">
<h4 style="color: #c62828;">⚠️ DP Footprint و Watch Circles:</h4>
<p style="margin-top: 0.5rem;">يجب مراقبة موقع المنصة ضمن دوائر محددة:</p>
<ul style="margin-top: 0.5rem;">
<li><strong>Green Circle:</strong> المنطقة الآمنة - عمليات عادية</li>
<li><strong>Yellow Circle:</strong> تنبيه - زيادة الانتباه</li>
<li><strong>Red Circle:</strong> حرجة - بدء إجراءات الانفصال (EDS)</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Semisubmersible', definition: 'منصة شبه غاطسة بعوامات تحت الماء' },
            { term: 'Drillship', definition: 'سفينة مصممة للحفر ذاتية الدفع' },
            { term: 'Mooring', definition: 'نظام تثبيت بالمراسي والسلاسل' },
            { term: 'DP Class', definition: 'تصنيف مستوى موثوقية التموضع الديناميكي' },
            { term: 'Thrusters', definition: 'محركات دفع للتحكم بموقع المنصة' },
          ],
          practiceQuestion: {
            question: 'أي تصنيف DP يتطلب ثلاثة أنظمة مستقلة تماماً؟',
            options: [
              'DP Class 1',
              'DP Class 2',
              'DP Class 3',
              'DP Class 4'
            ],
            correctAnswer: 2,
          },
        },
        en: {
          title: 'Floating Drilling Rigs and Station Keeping - Day 2',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">🔷 Types of Deepwater Drilling Rigs</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="color: #fbbf24; margin-bottom: 1rem;">🚢 Floating Drilling Units</h3>
<p style="font-size: 1.1rem; line-height: 1.8;">
In deepwater, bottom-founded rigs cannot be used. Operations rely on floating platforms capable of maintaining position over the well despite currents, winds, and waves. The two main types are: Semisubmersibles and Drillships.
</p>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">🔶 Semisubmersible Rigs</h3>

<div style="background: #e3f2fd; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #1565c0; margin-bottom: 1rem;">Design and Structure:</h4>
<ul style="list-style: none; padding: 0;">
<li style="padding: 0.8rem 0; border-bottom: 1px solid #bbdefb;">
<strong>🔹 Pontoons:</strong> Large horizontal floats submerged below water surface providing main buoyancy
</li>
<li style="padding: 0.8rem 0; border-bottom: 1px solid #bbdefb;">
<strong>🔹 Columns:</strong> Vertical columns connecting pontoons to work deck
</li>
<li style="padding: 0.8rem 0; border-bottom: 1px solid #bbdefb;">
<strong>🔹 Deck:</strong> Main work deck above water
</li>
<li style="padding: 0.8rem 0;">
<strong>🔹 Moon Pool:</strong> Opening in center of deck for drilling equipment passage
</li>
</ul>
</div>

<div style="background: #fff3e0; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #e65100; margin-bottom: 1rem;">⚡ Semisubmersible Advantages:</h4>
<ul style="margin: 0; padding-left: 1.5rem;">
<li style="margin-bottom: 0.5rem;">Excellent stability in high waves - suitable for harsh environments (North Sea)</li>
<li style="margin-bottom: 0.5rem;">Low heave motion - minimal vertical movement</li>
<li style="margin-bottom: 0.5rem;">Can be moored or DP-positioned</li>
<li>High variable deck load capacity</li>
</ul>
</div>

<div style="background: #ffebee; padding: 1.2rem; border-radius: 10px; margin-bottom: 2rem;">
<h4 style="color: #c62828; margin-bottom: 0.5rem;">❌ Semisubmersible Limitations:</h4>
<ul style="margin: 0; padding-left: 1.5rem;">
<li style="margin-bottom: 0.3rem;">Slower transit speed than drillships</li>
<li style="margin-bottom: 0.3rem;">High day rates</li>
<li>Limited in ultra-deepwater depths</li>
</ul>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">🔷 Drillships</h3>

<div style="background: #e8f5e9; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #2e7d32; margin-bottom: 1rem;">Design and Characteristics:</h4>
<p style="margin-bottom: 1rem;">Purpose-built vessels with traditional ship hull shape:</p>
<ul style="list-style: none; padding: 0;">
<li style="padding: 0.8rem 0; border-bottom: 1px solid #c8e6c9;">
<strong>🔹 Derrick:</strong> Drilling tower mounted amidships
</li>
<li style="padding: 0.8rem 0; border-bottom: 1px solid #c8e6c9;">
<strong>🔹 Dual Activity:</strong> Capability to perform two simultaneous operations
</li>
<li style="padding: 0.8rem 0; border-bottom: 1px solid #c8e6c9;">
<strong>🔹 Large Deck Space:</strong> Extensive equipment storage area
</li>
<li style="padding: 0.8rem 0;">
<strong>🔹 Self-Propelled:</strong> No towing vessels needed
</li>
</ul>
</div>

<div style="background: #e8eaf6; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #3f51b5; margin-bottom: 1rem;">Drillship Generations:</h4>
<table style="width: 100%; border-collapse: collapse;">
<tr style="background: #3f51b5; color: white;">
<th style="padding: 0.8rem;">Generation</th>
<th style="padding: 0.8rem;">Water Depth</th>
<th style="padding: 0.8rem;">Features</th>
</tr>
<tr style="background: white;">
<td style="padding: 0.8rem; border-bottom: 1px solid #ddd;">5th Generation</td>
<td style="padding: 0.8rem; border-bottom: 1px solid #ddd;">7,500 ft</td>
<td style="padding: 0.8rem; border-bottom: 1px solid #ddd;">DP2, Single Activity</td>
</tr>
<tr style="background: #f5f5f5;">
<td style="padding: 0.8rem; border-bottom: 1px solid #ddd;">6th Generation</td>
<td style="padding: 0.8rem; border-bottom: 1px solid #ddd;">10,000 ft</td>
<td style="padding: 0.8rem; border-bottom: 1px solid #ddd;">DP2/DP3, Dual Activity</td>
</tr>
<tr style="background: white;">
<td style="padding: 0.8rem;">7th Generation</td>
<td style="padding: 0.8rem;">12,000+ ft</td>
<td style="padding: 0.8rem;">Enhanced DP3, 20K BOP, MPD-Ready</td>
</tr>
</table>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">⚓ Station Keeping Systems</h3>

<div style="background: #fce4ec; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #c2185b; margin-bottom: 1rem;">1. Mooring Systems</h4>
<p style="margin-bottom: 1rem;">Using anchors and chains/lines to secure the platform:</p>
<ul style="list-style: none; padding: 0;">
<li style="padding: 0.5rem 0; border-bottom: 1px solid #f8bbd0;">
<strong>Catenary Mooring:</strong> Lines forming a curve - for moderate depths
</li>
<li style="padding: 0.5rem 0; border-bottom: 1px solid #f8bbd0;">
<strong>Taut Leg Mooring:</strong> Tensioned lines at an angle - for deepwater
</li>
<li style="padding: 0.5rem 0;">
<strong>Spread Mooring:</strong> 8-12 lines distributed around platform
</li>
</ul>
</div>

<div style="background: #fff8e1; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #ff8f00; margin-bottom: 1rem;">2. Dynamic Positioning - DP</h4>
<p style="margin-bottom: 1rem;">Using thrusters to maintain position:</p>

<div style="display: grid; gap: 1rem; margin-top: 1rem;">
<div style="background: white; padding: 1rem; border-radius: 8px; border-left: 4px solid #4caf50;">
<h5 style="color: #2e7d32; margin-bottom: 0.5rem;">DP Class 1</h5>
<p>Single system - loses position on any failure</p>
<p><em>Use: Non-critical operations</em></p>
</div>

<div style="background: white; padding: 1rem; border-radius: 8px; border-left: 4px solid #2196f3;">
<h5 style="color: #1565c0; margin-bottom: 0.5rem;">DP Class 2</h5>
<p>Two independent systems - maintains position with single failure</p>
<p><em>Use: Most deepwater operations</em></p>
</div>

<div style="background: white; padding: 1rem; border-radius: 8px; border-left: 4px solid #9c27b0;">
<h5 style="color: #7b1fa2; margin-bottom: 0.5rem;">DP Class 3</h5>
<p>Three fully independent systems - maximum reliability</p>
<p><em>Use: Critical operations, HPHT, Ultra-deepwater</em></p>
</div>
</div>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">🎯 DP System Components</h3>

<div style="background: #f3e5f5; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<ul style="list-style: none; padding: 0;">
<li style="padding: 0.8rem 0; border-bottom: 1px solid #e1bee7;">
<strong>Position Reference Systems:</strong>
<ul style="margin-top: 0.5rem; padding-left: 1.5rem;">
<li>DGPS - Global Positioning</li>
<li>Acoustic Systems (HPR, USBL)</li>
<li>Taut Wire Reference</li>
<li>Laser/RADius Systems</li>
</ul>
</li>
<li style="padding: 0.8rem 0; border-bottom: 1px solid #e1bee7;">
<strong>Thrusters:</strong>
<ul style="margin-top: 0.5rem; padding-left: 1.5rem;">
<li>Azimuth Thrusters (360° rotatable)</li>
<li>Tunnel Thrusters</li>
<li>Main Propellers</li>
</ul>
</li>
<li style="padding: 0.8rem 0;">
<strong>DP Control System:</strong>
<ul style="margin-top: 0.5rem; padding-left: 1.5rem;">
<li>DP Computers (Redundant)</li>
<li>Operator Consoles</li>
<li>Power Management</li>
</ul>
</li>
</ul>
</div>

<div style="background: #ffebee; padding: 1.2rem; border-radius: 10px; margin-top: 1.5rem;">
<h4 style="color: #c62828;">⚠️ DP Footprint and Watch Circles:</h4>
<p style="margin-top: 0.5rem;">Vessel position must be monitored within defined circles:</p>
<ul style="margin-top: 0.5rem;">
<li><strong>Green Circle:</strong> Safe zone - normal operations</li>
<li><strong>Yellow Circle:</strong> Advisory - increased attention</li>
<li><strong>Red Circle:</strong> Critical - initiate disconnect procedures (EDS)</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Semisubmersible', definition: 'Semi-submersible platform with underwater pontoons' },
            { term: 'Drillship', definition: 'Self-propelled vessel designed for drilling' },
            { term: 'Mooring', definition: 'Anchoring system using chains and lines' },
            { term: 'DP Class', definition: 'Classification of dynamic positioning reliability' },
            { term: 'Thrusters', definition: 'Propulsion units for position control' },
          ],
          practiceQuestion: {
            question: 'Which DP classification requires three fully independent systems?',
            options: [
              'DP Class 1',
              'DP Class 2',
              'DP Class 3',
              'DP Class 4'
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
          title: 'نظام الناهض البحري والـ BOP تحت سطح البحر - اليوم الثالث',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">🔷 Marine Riser System (نظام الناهض البحري)</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="color: #fbbf24; margin-bottom: 1rem;">🔗 الوصلة الحيوية بين السطح والقاع</h3>
<p style="font-size: 1.1rem; line-height: 1.8;">
الناهض البحري (Marine Riser) هو أنبوب كبير القطر يربط المنصة العائمة بمجموعة الـ BOP على قاع البحر. يوفر مساراً مغلقاً لسائل الحفر والعائد، ويحمي سلسلة الحفر، ويدعم خطوط التحكم في البئر.
</p>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">📐 مكونات نظام الناهض</h3>

<div style="background: #e3f2fd; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #1565c0; margin-bottom: 1rem;">1. Riser Joints (وصلات الناهض)</h4>
<ul style="list-style: none; padding: 0;">
<li style="padding: 0.8rem 0; border-bottom: 1px solid #bbdefb;">
<strong>القطر:</strong> 21" OD هو الأكثر شيوعاً (16"-24" متاح)
</li>
<li style="padding: 0.8rem 0; border-bottom: 1px solid #bbdefb;">
<strong>الطول:</strong> 75-90 قدم لكل وصلة
</li>
<li style="padding: 0.8rem 0; border-bottom: 1px solid #bbdefb;">
<strong>الوصلات:</strong> Flanged أو Quick-Connect
</li>
<li style="padding: 0.8rem 0;">
<strong>الخطوط الإضافية:</strong> Choke & Kill, Booster, Hydraulic Lines
</li>
</ul>
</div>

<div style="background: #fff3e0; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #e65100; margin-bottom: 1rem;">2. Telescopic Joint - TJ (الوصلة التلسكوبية)</h4>
<p style="margin-bottom: 1rem;">تقع في الجزء العلوي من الناهض وتمتص حركة الـ Heave:</p>
<ul style="list-style: none; padding: 0;">
<li style="padding: 0.5rem 0; border-bottom: 1px solid #ffe0b2;">
<strong>Inner Barrel:</strong> الجزء الداخلي المتحرك
</li>
<li style="padding: 0.5rem 0; border-bottom: 1px solid #ffe0b2;">
<strong>Outer Barrel:</strong> الجزء الخارجي الثابت
</li>
<li style="padding: 0.5rem 0;">
<strong>Stroke:</strong> 50-60 قدم نموذجياً
</li>
</ul>
</div>

<div style="background: #e8f5e9; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #2e7d32; margin-bottom: 1rem;">3. Flex Joints (وصلات المرونة)</h4>
<p style="margin-bottom: 1rem;">تسمح بالميل الزاوي للناهض:</p>
<ul style="list-style: none; padding: 0;">
<li style="padding: 0.5rem 0; border-bottom: 1px solid #c8e6c9;">
<strong>Upper Flex Joint:</strong> أسفل الـ Telescopic Joint (±10°)
</li>
<li style="padding: 0.5rem 0;">
<strong>Lower Flex Joint:</strong> فوق الـ LMRP (±10°)
</li>
</ul>
</div>

<div style="background: #fce4ec; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #c2185b; margin-bottom: 1rem;">4. Riser Tensioner System (نظام شد الناهض)</h4>
<p style="margin-bottom: 1rem;">يحافظ على شد الناهض لمنع الانحناء والانهيار:</p>
<ul style="list-style: none; padding: 0;">
<li style="padding: 0.5rem 0; border-bottom: 1px solid #f8bbd0;">
<strong>Hydro-Pneumatic Tensioners:</strong> الأكثر شيوعاً
</li>
<li style="padding: 0.5rem 0; border-bottom: 1px solid #f8bbd0;">
<strong>Tension Requirements:</strong> 500,000 - 2,000,000 lbs
</li>
<li style="padding: 0.5rem 0;">
<strong>Compensation:</strong> تعويض حركة الـ Heave آلياً
</li>
</ul>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">⚙️ Subsea BOP Stack (مجموعة BOP تحت سطح البحر)</h3>

<div style="background: linear-gradient(to right, #fff8e1, #ffecb3); padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #ff8f00; margin-bottom: 1rem;">مكونات Subsea BOP Stack:</h4>

<div style="background: white; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<h5 style="color: #e65100;">LMRP - Lower Marine Riser Package</h5>
<p>الجزء العلوي القابل للفصل:</p>
<ul style="margin-top: 0.5rem;">
<li>Annular Preventer</li>
<li>Connector للـ BOP Stack</li>
<li>Riser Connection</li>
<li>Control Pods</li>
</ul>
</div>

<div style="background: white; padding: 1rem; border-radius: 8px;">
<h5 style="color: #e65100;">Lower BOP Stack</h5>
<p>الجزء الثابت على رأس البئر:</p>
<ul style="margin-top: 0.5rem;">
<li>Ram Preventers (Pipe, Blind, Shear)</li>
<li>Wellhead Connector</li>
<li>Choke & Kill Outlets</li>
</ul>
</div>
</div>

<div style="background: #e8eaf6; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #3f51b5; margin-bottom: 1rem;">📊 تكوين BOP النموذجي للمياه العميقة</h4>
<p style="margin-bottom: 1rem;">من الأعلى إلى الأسفل:</p>
<ol style="padding-right: 1.5rem;">
<li style="padding: 0.5rem 0;"><strong>Annular BOP</strong> - في LMRP</li>
<li style="padding: 0.5rem 0;"><strong>Upper Pipe Rams</strong></li>
<li style="padding: 0.5rem 0;"><strong>Blind Shear Rams (BSR)</strong> - القطع الطارئ</li>
<li style="padding: 0.5rem 0;"><strong>Casing Shear Rams</strong> - لقطع الكيسنج</li>
<li style="padding: 0.5rem 0;"><strong>Middle Pipe Rams</strong></li>
<li style="padding: 0.5rem 0;"><strong>Variable Bore Rams (VBR)</strong></li>
<li style="padding: 0.5rem 0;"><strong>Lower Pipe Rams</strong></li>
</ol>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">🔌 أنظمة التحكم في Subsea BOP</h3>

<div style="background: #f3e5f5; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #7b1fa2; margin-bottom: 1rem;">Multiplex (MUX) Control System</h4>
<p style="margin-bottom: 1rem;">النظام الأكثر استخداماً في المياه العميقة:</p>
<ul style="list-style: none; padding: 0;">
<li style="padding: 0.5rem 0; border-bottom: 1px solid #e1bee7;">
<strong>🔹 MUX Cables:</strong> كابلات كهربائية للإشارات
</li>
<li style="padding: 0.5rem 0; border-bottom: 1px solid #e1bee7;">
<strong>🔹 Subsea Control Pods:</strong> وحدات تحكم مزدوجة (Blue & Yellow)
</li>
<li style="padding: 0.5rem 0; border-bottom: 1px solid #e1bee7;">
<strong>🔹 Subsea Electronics Module (SEM):</strong> المعالج تحت الماء
</li>
<li style="padding: 0.5rem 0;">
<strong>🔹 HPU (Hydraulic Power Unit):</strong> على السطح لتوفير الضغط الهيدروليكي
</li>
</ul>
</div>

<div style="background: #ffebee; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #c62828; margin-bottom: 1rem;">⚠️ Emergency Disconnect Sequence (EDS)</h4>
<p style="margin-bottom: 1rem;">تسلسل الفصل الطارئ عند فقدان التموضع:</p>
<ol style="padding-right: 1.5rem;">
<li style="padding: 0.5rem 0;">إغلاق BSR (Blind Shear Ram) لقطع الـ Drill Pipe</li>
<li style="padding: 0.5rem 0;">فصل LMRP Connector</li>
<li style="padding: 0.5rem 0;">رفع الناهض وإبعاد المنصة</li>
</ol>
<p style="margin-top: 1rem; font-weight: bold;">الوقت المستهدف: أقل من 60 ثانية</p>
</div>

<div style="background: #e8f5e9; padding: 1.2rem; border-radius: 10px; margin-top: 1.5rem;">
<h4 style="color: #2e7d32;">💡 Autoshear و Deadman Systems:</h4>
<p style="margin-top: 0.5rem;">أنظمة احتياطية تعمل تلقائياً عند فقدان الاتصال:</p>
<ul style="margin-top: 0.5rem;">
<li><strong>Autoshear:</strong> يُفعّل عند فصل الـ LMRP غير المقصود</li>
<li><strong>Deadman:</strong> يُفعّل عند فقدان الطاقة والاتصالات</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Marine Riser', definition: 'الناهض البحري - أنبوب يربط المنصة بالـ BOP' },
            { term: 'LMRP', definition: 'Lower Marine Riser Package - الجزء القابل للفصل من الـ BOP' },
            { term: 'Telescopic Joint', definition: 'الوصلة التلسكوبية لامتصاص حركة الـ Heave' },
            { term: 'BSR', definition: 'Blind Shear Ram - لقطع أنابيب الحفر في الطوارئ' },
            { term: 'EDS', definition: 'Emergency Disconnect Sequence - تسلسل الفصل الطارئ' },
          ],
          practiceQuestion: {
            question: 'ما هو الغرض الرئيسي من الـ Telescopic Joint في نظام الناهض؟',
            options: [
              'توفير المرونة الزاوية',
              'امتصاص حركة الـ Heave',
              'ربط الناهض بالـ BOP',
              'التحكم في ضغط البئر'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Marine Riser System and Subsea BOP - Day 3',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">🔷 Marine Riser System</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="color: #fbbf24; margin-bottom: 1rem;">🔗 The Vital Link Between Surface and Seabed</h3>
<p style="font-size: 1.1rem; line-height: 1.8;">
The Marine Riser is a large-diameter conduit connecting the floating rig to the BOP stack on the seabed. It provides a closed pathway for drilling fluid and returns, protects the drill string, and supports well control lines.
</p>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">📐 Riser System Components</h3>

<div style="background: #e3f2fd; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #1565c0; margin-bottom: 1rem;">1. Riser Joints</h4>
<ul style="list-style: none; padding: 0;">
<li style="padding: 0.8rem 0; border-bottom: 1px solid #bbdefb;">
<strong>Diameter:</strong> 21" OD most common (16"-24" available)
</li>
<li style="padding: 0.8rem 0; border-bottom: 1px solid #bbdefb;">
<strong>Length:</strong> 75-90 feet per joint
</li>
<li style="padding: 0.8rem 0; border-bottom: 1px solid #bbdefb;">
<strong>Connections:</strong> Flanged or Quick-Connect
</li>
<li style="padding: 0.8rem 0;">
<strong>Auxiliary Lines:</strong> Choke & Kill, Booster, Hydraulic Lines
</li>
</ul>
</div>

<div style="background: #fff3e0; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #e65100; margin-bottom: 1rem;">2. Telescopic Joint - TJ</h4>
<p style="margin-bottom: 1rem;">Located at top of riser, absorbs heave motion:</p>
<ul style="list-style: none; padding: 0;">
<li style="padding: 0.5rem 0; border-bottom: 1px solid #ffe0b2;">
<strong>Inner Barrel:</strong> Moving inner section
</li>
<li style="padding: 0.5rem 0; border-bottom: 1px solid #ffe0b2;">
<strong>Outer Barrel:</strong> Fixed outer section
</li>
<li style="padding: 0.5rem 0;">
<strong>Stroke:</strong> Typically 50-60 feet
</li>
</ul>
</div>

<div style="background: #e8f5e9; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #2e7d32; margin-bottom: 1rem;">3. Flex Joints</h4>
<p style="margin-bottom: 1rem;">Allow angular deflection of riser:</p>
<ul style="list-style: none; padding: 0;">
<li style="padding: 0.5rem 0; border-bottom: 1px solid #c8e6c9;">
<strong>Upper Flex Joint:</strong> Below Telescopic Joint (±10°)
</li>
<li style="padding: 0.5rem 0;">
<strong>Lower Flex Joint:</strong> Above LMRP (±10°)
</li>
</ul>
</div>

<div style="background: #fce4ec; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #c2185b; margin-bottom: 1rem;">4. Riser Tensioner System</h4>
<p style="margin-bottom: 1rem;">Maintains riser tension to prevent buckling and collapse:</p>
<ul style="list-style: none; padding: 0;">
<li style="padding: 0.5rem 0; border-bottom: 1px solid #f8bbd0;">
<strong>Hydro-Pneumatic Tensioners:</strong> Most common type
</li>
<li style="padding: 0.5rem 0; border-bottom: 1px solid #f8bbd0;">
<strong>Tension Requirements:</strong> 500,000 - 2,000,000 lbs
</li>
<li style="padding: 0.5rem 0;">
<strong>Compensation:</strong> Automatic heave compensation
</li>
</ul>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">⚙️ Subsea BOP Stack</h3>

<div style="background: linear-gradient(to right, #fff8e1, #ffecb3); padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #ff8f00; margin-bottom: 1rem;">Subsea BOP Stack Components:</h4>

<div style="background: white; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<h5 style="color: #e65100;">LMRP - Lower Marine Riser Package</h5>
<p>Upper disconnectable section:</p>
<ul style="margin-top: 0.5rem;">
<li>Annular Preventer</li>
<li>Connector to BOP Stack</li>
<li>Riser Connection</li>
<li>Control Pods</li>
</ul>
</div>

<div style="background: white; padding: 1rem; border-radius: 8px;">
<h5 style="color: #e65100;">Lower BOP Stack</h5>
<p>Fixed section on wellhead:</p>
<ul style="margin-top: 0.5rem;">
<li>Ram Preventers (Pipe, Blind, Shear)</li>
<li>Wellhead Connector</li>
<li>Choke & Kill Outlets</li>
</ul>
</div>
</div>

<div style="background: #e8eaf6; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #3f51b5; margin-bottom: 1rem;">📊 Typical Deepwater BOP Configuration</h4>
<p style="margin-bottom: 1rem;">From top to bottom:</p>
<ol style="padding-left: 1.5rem;">
<li style="padding: 0.5rem 0;"><strong>Annular BOP</strong> - in LMRP</li>
<li style="padding: 0.5rem 0;"><strong>Upper Pipe Rams</strong></li>
<li style="padding: 0.5rem 0;"><strong>Blind Shear Rams (BSR)</strong> - emergency shearing</li>
<li style="padding: 0.5rem 0;"><strong>Casing Shear Rams</strong> - for cutting casing</li>
<li style="padding: 0.5rem 0;"><strong>Middle Pipe Rams</strong></li>
<li style="padding: 0.5rem 0;"><strong>Variable Bore Rams (VBR)</strong></li>
<li style="padding: 0.5rem 0;"><strong>Lower Pipe Rams</strong></li>
</ol>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">🔌 Subsea BOP Control Systems</h3>

<div style="background: #f3e5f5; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #7b1fa2; margin-bottom: 1rem;">Multiplex (MUX) Control System</h4>
<p style="margin-bottom: 1rem;">Most widely used in deepwater:</p>
<ul style="list-style: none; padding: 0;">
<li style="padding: 0.5rem 0; border-bottom: 1px solid #e1bee7;">
<strong>🔹 MUX Cables:</strong> Electrical cables for signals
</li>
<li style="padding: 0.5rem 0; border-bottom: 1px solid #e1bee7;">
<strong>🔹 Subsea Control Pods:</strong> Dual pods (Blue & Yellow)
</li>
<li style="padding: 0.5rem 0; border-bottom: 1px solid #e1bee7;">
<strong>🔹 Subsea Electronics Module (SEM):</strong> Underwater processor
</li>
<li style="padding: 0.5rem 0;">
<strong>🔹 HPU (Hydraulic Power Unit):</strong> Surface unit providing hydraulic pressure
</li>
</ul>
</div>

<div style="background: #ffebee; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #c62828; margin-bottom: 1rem;">⚠️ Emergency Disconnect Sequence (EDS)</h4>
<p style="margin-bottom: 1rem;">Disconnect sequence upon loss of position:</p>
<ol style="padding-left: 1.5rem;">
<li style="padding: 0.5rem 0;">Close BSR (Blind Shear Ram) to cut drill pipe</li>
<li style="padding: 0.5rem 0;">Disconnect LMRP Connector</li>
<li style="padding: 0.5rem 0;">Pull riser and move rig away</li>
</ol>
<p style="margin-top: 1rem; font-weight: bold;">Target time: Less than 60 seconds</p>
</div>

<div style="background: #e8f5e9; padding: 1.2rem; border-radius: 10px; margin-top: 1.5rem;">
<h4 style="color: #2e7d32;">💡 Autoshear and Deadman Systems:</h4>
<p style="margin-top: 0.5rem;">Backup systems that activate automatically upon loss of communication:</p>
<ul style="margin-top: 0.5rem;">
<li><strong>Autoshear:</strong> Activates on unintentional LMRP disconnect</li>
<li><strong>Deadman:</strong> Activates on loss of power and communications</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Marine Riser', definition: 'Conduit connecting floating rig to subsea BOP' },
            { term: 'LMRP', definition: 'Lower Marine Riser Package - disconnectable BOP section' },
            { term: 'Telescopic Joint', definition: 'Heave-compensating joint at top of riser' },
            { term: 'BSR', definition: 'Blind Shear Ram - for emergency pipe cutting' },
            { term: 'EDS', definition: 'Emergency Disconnect Sequence' },
          ],
          practiceQuestion: {
            question: 'What is the main purpose of the Telescopic Joint in the riser system?',
            options: [
              'Provide angular flexibility',
              'Absorb heave motion',
              'Connect riser to BOP',
              'Control well pressure'
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
          title: 'تحديات سوائل الحفر والتحكم في البئر في المياه العميقة - اليوم الرابع',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">🔷 تحديات سوائل الحفر في المياه العميقة</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="color: #fbbf24; margin-bottom: 1rem;">🌡️ التحديات الفريدة للمياه العميقة</h3>
<p style="font-size: 1.1rem; line-height: 1.8;">
الحفر في المياه العميقة يواجه تحديات فريدة في تصميم وإدارة سوائل الحفر بسبب التدرج الحراري المعكوس، والضغوط الهائلة، وهوامش الحفر الضيقة، وخطر تكوين الهيدرات.
</p>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">🌡️ التدرج الحراري في المياه العميقة</h3>

<div style="background: #e3f2fd; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #1565c0; margin-bottom: 1rem;">Dual Temperature Gradient (التدرج الحراري المزدوج)</h4>
<p style="margin-bottom: 1rem;">في المياه العميقة، نواجه تدرجين حراريين متعاكسين:</p>
<ul style="list-style: none; padding: 0;">
<li style="padding: 0.8rem 0; border-bottom: 1px solid #bbdefb;">
<strong>🔹 عبر عمود الماء:</strong> درجة الحرارة تنخفض من السطح (~75°F) إلى قاع البحر (~35-40°F)
</li>
<li style="padding: 0.8rem 0;">
<strong>🔹 تحت قاع البحر:</strong> درجة الحرارة ترتفع مع العمق (1.2-1.8°F/100ft)
</li>
</ul>
</div>

<div style="background: #fff3e0; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #e65100; margin-bottom: 1rem;">⚡ التأثيرات على سائل الحفر:</h4>
<ul style="margin: 0; padding-right: 1.5rem;">
<li style="margin-bottom: 0.8rem;">
<strong>زيادة اللزوجة:</strong> في المنطقة الباردة قرب قاع البحر - تزيد ECD
</li>
<li style="margin-bottom: 0.8rem;">
<strong>انخفاض Gel Strength:</strong> يؤثر على قدرة تعليق الفتات
</li>
<li style="margin-bottom: 0.8rem;">
<strong>Barite Settling:</strong> ترسب الباريت في المناطق الباردة
</li>
<li>
<strong>تغير الكثافة:</strong> تمدد/انكماش حراري للسائل
</li>
</ul>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">❄️ تكوين الهيدرات (Hydrate Formation)</h3>

<div style="background: #ffebee; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #c62828; margin-bottom: 1rem;">⚠️ خطر الهيدرات في المياه العميقة</h4>
<p style="margin-bottom: 1rem;">
الهيدرات هي مركبات بلورية تتكون عندما يتفاعل الماء مع الغاز (CH₄ غالباً) عند:
</p>
<ul style="list-style: none; padding: 0;">
<li style="padding: 0.5rem 0; border-bottom: 1px solid #ffcdd2;">
<strong>درجة حرارة منخفضة:</strong> أقل من 68°F (20°C)
</li>
<li style="padding: 0.5rem 0; border-bottom: 1px solid #ffcdd2;">
<strong>ضغط عالي:</strong> أكثر من 200 psi
</li>
<li style="padding: 0.5rem 0;">
<strong>وجود الماء والغاز:</strong> ماء حر + غاز هيدروكربوني
</li>
</ul>
</div>

<div style="background: #e8f5e9; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #2e7d32; margin-bottom: 1rem;">✅ استراتيجيات منع الهيدرات:</h4>
<ul style="list-style: none; padding: 0;">
<li style="padding: 0.8rem 0; border-bottom: 1px solid #c8e6c9;">
<strong>1. Thermodynamic Inhibitors:</strong>
<p style="margin-top: 0.3rem;">- Methanol (MeOH) - الأكثر فعالية</p>
<p>- Glycols (MEG, DEG) - أقل تطايراً</p>
</li>
<li style="padding: 0.8rem 0; border-bottom: 1px solid #c8e6c9;">
<strong>2. Low Dosage Hydrate Inhibitors (LDHI):</strong>
<p style="margin-top: 0.3rem;">- Kinetic Inhibitors (KHI) - يبطئ التكوين</p>
<p>- Anti-Agglomerants (AA) - يمنع التجمع</p>
</li>
<li style="padding: 0.8rem 0;">
<strong>3. Synthetic Based Mud (SBM):</strong>
<p style="margin-top: 0.3rem;">تمنع تكوين الهيدرات طبيعياً بسبب غياب الماء الحر</p>
</li>
</ul>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">⚖️ Narrow Drilling Window (نافذة الحفر الضيقة)</h3>

<div style="background: linear-gradient(to right, #fff8e1, #ffecb3); padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #ff8f00; margin-bottom: 1rem;">تحدي الهامش الضيق:</h4>
<p style="margin-bottom: 1rem;">
في الطبقات الضحلة تحت قاع البحر، الفرق بين Pore Pressure و Fracture Gradient صغير جداً:
</p>
<div style="background: white; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<ul style="margin: 0; padding-right: 1.5rem;">
<li style="margin-bottom: 0.5rem;">Overburden Gradient منخفض (لا يوجد تكوينات صخرية ثقيلة)</li>
<li style="margin-bottom: 0.5rem;">Fracture Gradient قريب جداً من Pore Pressure</li>
<li>هامش الحفر قد يكون 0.2-0.5 ppg فقط!</li>
</ul>
</div>
</div>

<div style="background: #fce4ec; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #c2185b; margin-bottom: 1rem;">💡 الحلول التقنية:</h4>
<ul style="list-style: none; padding: 0;">
<li style="padding: 0.8rem 0; border-bottom: 1px solid #f8bbd0;">
<strong>🔹 Dual Gradient Drilling (DGD):</strong>
<p style="margin-top: 0.3rem;">استخدام كثافتين مختلفتين - أخف في الناهض وأثقل في البئر</p>
</li>
<li style="padding: 0.8rem 0; border-bottom: 1px solid #f8bbd0;">
<strong>🔹 Managed Pressure Drilling (MPD):</strong>
<p style="margin-top: 0.3rem;">التحكم الدقيق في الضغط القاعي باستخدام Surface Back Pressure</p>
</li>
<li style="padding: 0.8rem 0;">
<strong>🔹 Riser Boost System:</strong>
<p style="margin-top: 0.3rem;">ضخ سائل أخف في الناهض لتقليل ECD</p>
</li>
</ul>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">🛡️ التحكم في البئر في المياه العميقة</h3>

<div style="background: #e8eaf6; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #3f51b5; margin-bottom: 1rem;">التحديات الخاصة:</h4>
<ul style="list-style: none; padding: 0;">
<li style="padding: 0.8rem 0; border-bottom: 1px solid #c5cae9;">
<strong>Choke Line Friction:</strong> الاحتكاك في خطوط الـ Choke الطويلة يؤثر على القراءات
</li>
<li style="padding: 0.8rem 0; border-bottom: 1px solid #c5cae9;">
<strong>Gas Expansion:</strong> تمدد الغاز الهائل عند الصعود من أعماق كبيرة
</li>
<li style="padding: 0.8rem 0; border-bottom: 1px solid #c5cae9;">
<strong>Riser Gas:</strong> خطر وصول الغاز للناهض
</li>
<li style="padding: 0.8rem 0;">
<strong>Shallow Water Flow:</strong> تدفق الماء أو الغاز من طبقات ضحلة غير مثبتة
</li>
</ul>
</div>

<div style="background: #f3e5f5; padding: 1.5rem; border-radius: 10px;">
<h4 style="color: #7b1fa2; margin-bottom: 1rem;">Riser Margin Concept:</h4>
<p style="margin-bottom: 1rem;">
يجب إضافة هامش أمان لكثافة سائل الحفر لمراعاة فقدان ضغط عمود الماء عند الانفصال الطارئ:
</p>
<div style="background: white; padding: 1rem; border-radius: 8px; font-family: monospace; text-align: center;">
<strong>Riser Margin = (0.445 × Water Depth) / TVD × 8.33</strong>
</div>
<p style="margin-top: 1rem; font-size: 0.9rem;">
عند 5,000 قدم ماء و 15,000 قدم TVD = حوالي 0.25 ppg إضافية مطلوبة
</p>
</div>
</section>`,
          keyTerms: [
            { term: 'Hydrates', definition: 'الهيدرات - بلورات جليدية من الماء والغاز' },
            { term: 'Riser Margin', definition: 'هامش كثافة إضافي لتعويض فقدان ضغط الماء' },
            { term: 'Dual Gradient', definition: 'الحفر بتدرج مزدوج - كثافتين مختلفتين' },
            { term: 'Shallow Water Flow', definition: 'تدفق من طبقات ضحلة غير مثبتة' },
            { term: 'LDHI', definition: 'Low Dosage Hydrate Inhibitors - مثبطات بجرعات منخفضة' },
          ],
          practiceQuestion: {
            question: 'ما هو الخطر الرئيسي المرتبط بدرجات الحرارة المنخفضة عند قاع البحر العميق؟',
            options: [
              'زيادة سرعة الحفر',
              'تكوين الهيدرات',
              'انخفاض ضغط البئر',
              'تآكل المعدات'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Drilling Fluid and Well Control Challenges in Deepwater - Day 4',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">🔷 Drilling Fluid Challenges in Deepwater</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="color: #fbbf24; margin-bottom: 1rem;">🌡️ Unique Deepwater Challenges</h3>
<p style="font-size: 1.1rem; line-height: 1.8;">
Deepwater drilling faces unique challenges in drilling fluid design and management due to the inverted temperature gradient, immense pressures, narrow drilling margins, and hydrate formation risk.
</p>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">🌡️ Temperature Gradient in Deepwater</h3>

<div style="background: #e3f2fd; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #1565c0; margin-bottom: 1rem;">Dual Temperature Gradient</h4>
<p style="margin-bottom: 1rem;">In deepwater, we encounter two opposing temperature gradients:</p>
<ul style="list-style: none; padding: 0;">
<li style="padding: 0.8rem 0; border-bottom: 1px solid #bbdefb;">
<strong>🔹 Through Water Column:</strong> Temperature decreases from surface (~75°F) to seabed (~35-40°F)
</li>
<li style="padding: 0.8rem 0;">
<strong>🔹 Below Seabed:</strong> Temperature increases with depth (1.2-1.8°F/100ft)
</li>
</ul>
</div>

<div style="background: #fff3e0; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #e65100; margin-bottom: 1rem;">⚡ Effects on Drilling Fluid:</h4>
<ul style="margin: 0; padding-left: 1.5rem;">
<li style="margin-bottom: 0.8rem;">
<strong>Increased Viscosity:</strong> In cold zone near seabed - increases ECD
</li>
<li style="margin-bottom: 0.8rem;">
<strong>Reduced Gel Strength:</strong> Affects cuttings suspension capability
</li>
<li style="margin-bottom: 0.8rem;">
<strong>Barite Settling:</strong> Settling in cold zones
</li>
<li>
<strong>Density Changes:</strong> Thermal expansion/contraction of fluid
</li>
</ul>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">❄️ Hydrate Formation</h3>

<div style="background: #ffebee; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #c62828; margin-bottom: 1rem;">⚠️ Hydrate Risk in Deepwater</h4>
<p style="margin-bottom: 1rem;">
Hydrates are crystalline compounds formed when water reacts with gas (usually CH₄) under:
</p>
<ul style="list-style: none; padding: 0;">
<li style="padding: 0.5rem 0; border-bottom: 1px solid #ffcdd2;">
<strong>Low Temperature:</strong> Below 68°F (20°C)
</li>
<li style="padding: 0.5rem 0; border-bottom: 1px solid #ffcdd2;">
<strong>High Pressure:</strong> Above 200 psi
</li>
<li style="padding: 0.5rem 0;">
<strong>Water and Gas Presence:</strong> Free water + hydrocarbon gas
</li>
</ul>
</div>

<div style="background: #e8f5e9; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #2e7d32; margin-bottom: 1rem;">✅ Hydrate Prevention Strategies:</h4>
<ul style="list-style: none; padding: 0;">
<li style="padding: 0.8rem 0; border-bottom: 1px solid #c8e6c9;">
<strong>1. Thermodynamic Inhibitors:</strong>
<p style="margin-top: 0.3rem;">- Methanol (MeOH) - Most effective</p>
<p>- Glycols (MEG, DEG) - Less volatile</p>
</li>
<li style="padding: 0.8rem 0; border-bottom: 1px solid #c8e6c9;">
<strong>2. Low Dosage Hydrate Inhibitors (LDHI):</strong>
<p style="margin-top: 0.3rem;">- Kinetic Inhibitors (KHI) - Slows formation</p>
<p>- Anti-Agglomerants (AA) - Prevents aggregation</p>
</li>
<li style="padding: 0.8rem 0;">
<strong>3. Synthetic Based Mud (SBM):</strong>
<p style="margin-top: 0.3rem;">Naturally prevents hydrate formation due to absence of free water</p>
</li>
</ul>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">⚖️ Narrow Drilling Window</h3>

<div style="background: linear-gradient(to right, #fff8e1, #ffecb3); padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #ff8f00; margin-bottom: 1rem;">The Narrow Margin Challenge:</h4>
<p style="margin-bottom: 1rem;">
In shallow formations below seabed, the difference between Pore Pressure and Fracture Gradient is very small:
</p>
<div style="background: white; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<ul style="margin: 0; padding-left: 1.5rem;">
<li style="margin-bottom: 0.5rem;">Low Overburden Gradient (no heavy rock formations)</li>
<li style="margin-bottom: 0.5rem;">Fracture Gradient very close to Pore Pressure</li>
<li>Drilling margin may be only 0.2-0.5 ppg!</li>
</ul>
</div>
</div>

<div style="background: #fce4ec; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #c2185b; margin-bottom: 1rem;">💡 Technical Solutions:</h4>
<ul style="list-style: none; padding: 0;">
<li style="padding: 0.8rem 0; border-bottom: 1px solid #f8bbd0;">
<strong>🔹 Dual Gradient Drilling (DGD):</strong>
<p style="margin-top: 0.3rem;">Using two different densities - lighter in riser and heavier in wellbore</p>
</li>
<li style="padding: 0.8rem 0; border-bottom: 1px solid #f8bbd0;">
<strong>🔹 Managed Pressure Drilling (MPD):</strong>
<p style="margin-top: 0.3rem;">Precise bottomhole pressure control using Surface Back Pressure</p>
</li>
<li style="padding: 0.8rem 0;">
<strong>🔹 Riser Boost System:</strong>
<p style="margin-top: 0.3rem;">Pumping lighter fluid in riser to reduce ECD</p>
</li>
</ul>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">🛡️ Well Control in Deepwater</h3>

<div style="background: #e8eaf6; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #3f51b5; margin-bottom: 1rem;">Special Challenges:</h4>
<ul style="list-style: none; padding: 0;">
<li style="padding: 0.8rem 0; border-bottom: 1px solid #c5cae9;">
<strong>Choke Line Friction:</strong> Friction in long choke lines affects readings
</li>
<li style="padding: 0.8rem 0; border-bottom: 1px solid #c5cae9;">
<strong>Gas Expansion:</strong> Massive gas expansion when rising from great depths
</li>
<li style="padding: 0.8rem 0; border-bottom: 1px solid #c5cae9;">
<strong>Riser Gas:</strong> Risk of gas reaching the riser
</li>
<li style="padding: 0.8rem 0;">
<strong>Shallow Water Flow:</strong> Water or gas flow from shallow unconsolidated zones
</li>
</ul>
</div>

<div style="background: #f3e5f5; padding: 1.5rem; border-radius: 10px;">
<h4 style="color: #7b1fa2; margin-bottom: 1rem;">Riser Margin Concept:</h4>
<p style="margin-bottom: 1rem;">
A safety margin must be added to drilling fluid density to account for loss of water column pressure during emergency disconnect:
</p>
<div style="background: white; padding: 1rem; border-radius: 8px; font-family: monospace; text-align: center;">
<strong>Riser Margin = (0.445 × Water Depth) / TVD × 8.33</strong>
</div>
<p style="margin-top: 1rem; font-size: 0.9rem;">
At 5,000 ft water and 15,000 ft TVD = approximately 0.25 ppg additional required
</p>
</div>
</section>`,
          keyTerms: [
            { term: 'Hydrates', definition: 'Ice-like crystals of water and gas' },
            { term: 'Riser Margin', definition: 'Additional density margin to compensate for water pressure loss' },
            { term: 'Dual Gradient', definition: 'Drilling with two different densities' },
            { term: 'Shallow Water Flow', definition: 'Flow from shallow unconsolidated zones' },
            { term: 'LDHI', definition: 'Low Dosage Hydrate Inhibitors' },
          ],
          practiceQuestion: {
            question: 'What is the main hazard associated with low temperatures at deep seabed?',
            options: [
              'Increased drilling rate',
              'Hydrate formation',
              'Reduced well pressure',
              'Equipment corrosion'
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
          title: 'عمليات ما تحت سطح البحر والتقنيات المتقدمة - اليوم الخامس',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">🔷 Subsea Operations (عمليات ما تحت سطح البحر)</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="color: #fbbf24; margin-bottom: 1rem;">🔧 التعقيد التشغيلي في المياه العميقة</h3>
<p style="font-size: 1.1rem; line-height: 1.8;">
العمليات تحت سطح البحر في المياه العميقة تتطلب تقنيات متخصصة وأدوات عالية التقنية للتعامل مع المعدات على أعماق يصعب الوصول إليها مباشرة. تشمل هذه العمليات التركيب، الصيانة، التفتيش، والإصلاح.
</p>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">🤖 Remotely Operated Vehicles - ROVs</h3>

<div style="background: #e3f2fd; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #1565c0; margin-bottom: 1rem;">أنواع الـ ROV:</h4>
<div style="display: grid; gap: 1rem;">
<div style="background: white; padding: 1rem; border-radius: 8px; border-right: 4px solid #4caf50;">
<h5 style="color: #2e7d32; margin-bottom: 0.5rem;">Observation Class</h5>
<p>للمراقبة والتفتيش البصري - قدرات محدودة للتدخل</p>
<p><em>العمق: حتى 3,000 م</em></p>
</div>

<div style="background: white; padding: 1rem; border-radius: 8px; border-right: 4px solid #2196f3;">
<h5 style="color: #1565c0; margin-bottom: 0.5rem;">Work Class</h5>
<p>للتدخل والعمليات الميكانيكية - أذرع مناولة (Manipulators)</p>
<p><em>العمق: حتى 4,000 م | الحمولة: 100-150 HP</em></p>
</div>

<div style="background: white; padding: 1rem; border-radius: 8px; border-right: 4px solid #9c27b0;">
<h5 style="color: #7b1fa2; margin-bottom: 0.5rem;">Heavy Work Class</h5>
<p>للعمليات الثقيلة والتركيبات الكبيرة</p>
<p><em>العمق: حتى 6,000 م | الحمولة: 200+ HP</em></p>
</div>
</div>
</div>

<div style="background: #fff3e0; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #e65100; margin-bottom: 1rem;">⚡ مهام ROV في الحفر:</h4>
<ul style="margin: 0; padding-right: 1.5rem;">
<li style="margin-bottom: 0.5rem;">مراقبة حالة الناهض والـ BOP</li>
<li style="margin-bottom: 0.5rem;">تفتيش خطوط الـ Choke & Kill</li>
<li style="margin-bottom: 0.5rem;">تشغيل صمامات التدخل (Intervention Valves)</li>
<li style="margin-bottom: 0.5rem;">قطع وتوصيل الكابلات والخراطيم</li>
<li>دعم عمليات الإنزال والرفع</li>
</ul>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">🔩 Subsea Wellhead Systems</h3>

<div style="background: #e8f5e9; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #2e7d32; margin-bottom: 1rem;">مكونات نظام رأس البئر تحت سطح البحر:</h4>
<ul style="list-style: none; padding: 0;">
<li style="padding: 0.8rem 0; border-bottom: 1px solid #c8e6c9;">
<strong>🔹 Conductor Housing:</strong>
<p style="margin-top: 0.3rem;">يتم تثبيته في قاع البحر - يوفر الأساس الهيكلي</p>
</li>
<li style="padding: 0.8rem 0; border-bottom: 1px solid #c8e6c9;">
<strong>🔹 High Pressure Housing:</strong>
<p style="margin-top: 0.3rem;">يستقبل Casing Hangers لأحجام الكيسنج المختلفة</p>
</li>
<li style="padding: 0.8rem 0; border-bottom: 1px solid #c8e6c9;">
<strong>🔹 Casing Hangers:</strong>
<p style="margin-top: 0.3rem;">علاقات لتعليق أعمدة الكيسنج مع Seal Assemblies</p>
</li>
<li style="padding: 0.8rem 0;">
<strong>🔹 Tubing Hanger:</strong>
<p style="margin-top: 0.3rem;">علاقة الإنتاج مع توصيلات التحكم والكيماويات</p>
</li>
</ul>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">🚀 تقنيات الحفر المتقدمة في المياه العميقة</h3>

<div style="background: #fce4ec; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #c2185b; margin-bottom: 1rem;">1. Dual Activity Drilling</h4>
<p style="margin-bottom: 1rem;">تنفيذ عمليتين متزامنتين لتقليل وقت البئر:</p>
<ul style="list-style: none; padding: 0;">
<li style="padding: 0.5rem 0; border-bottom: 1px solid #f8bbd0;">
تركيب الناهض أثناء تجهيز سلسلة الحفر
</li>
<li style="padding: 0.5rem 0; border-bottom: 1px solid #f8bbd0;">
إنزال الكيسنج أثناء خلط الأسمنت
</li>
<li style="padding: 0.5rem 0;">
تشغيل Trips متوازية على برجين
</li>
</ul>
</div>

<div style="background: #e8eaf6; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #3f51b5; margin-bottom: 1rem;">2. Riserless Drilling</h4>
<p style="margin-bottom: 1rem;">الحفر بدون ناهض للمراحل الأولية:</p>
<ul style="list-style: none; padding: 0;">
<li style="padding: 0.5rem 0; border-bottom: 1px solid #c5cae9;">
سائل الحفر يعود مباشرة إلى قاع البحر
</li>
<li style="padding: 0.5rem 0; border-bottom: 1px solid #c5cae9;">
يستخدم لحفر Conductor و Surface Casing
</li>
<li style="padding: 0.5rem 0;">
يتطلب Pump and Dump أو Seawater مع Gel Sweeps
</li>
</ul>
</div>

<div style="background: #fff8e1; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #ff8f00; margin-bottom: 1rem;">3. Subsea Mudlift Drilling (SMD)</h4>
<p style="margin-bottom: 1rem;">تقنية Dual Gradient المتقدمة:</p>
<ul style="list-style: none; padding: 0;">
<li style="padding: 0.5rem 0; border-bottom: 1px solid #ffe0b2;">
<strong>Mudlift Pump:</strong> مضخة على قاع البحر ترفع العائد للسطح
</li>
<li style="padding: 0.5rem 0; border-bottom: 1px solid #ffe0b2;">
<strong>Riser مملوء بالماء:</strong> كثافة أخف في الناهض
</li>
<li style="padding: 0.5rem 0;">
<strong>الفائدة:</strong> توسيع نافذة الحفر الضيقة بشكل كبير
</li>
</ul>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">📊 اعتبارات التكلفة والتخطيط</h3>

<div style="background: linear-gradient(to right, #e8f5e9, #c8e6c9); padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #2e7d32; margin-bottom: 1rem;">عوامل تكلفة المياه العميقة:</h4>
<table style="width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden;">
<tr style="background: #2e7d32; color: white;">
<th style="padding: 0.8rem; text-align: right;">البند</th>
<th style="padding: 0.8rem; text-align: center;">التكلفة التقريبية</th>
</tr>
<tr>
<td style="padding: 0.8rem; border-bottom: 1px solid #ddd;">Day Rate (7th Gen Drillship)</td>
<td style="padding: 0.8rem; text-align: center; border-bottom: 1px solid #ddd;">$350,000 - $500,000/day</td>
</tr>
<tr style="background: #f5f5f5;">
<td style="padding: 0.8rem; border-bottom: 1px solid #ddd;">متوسط مدة البئر</td>
<td style="padding: 0.8rem; text-align: center; border-bottom: 1px solid #ddd;">60-120 يوم</td>
</tr>
<tr>
<td style="padding: 0.8rem; border-bottom: 1px solid #ddd;">Subsea BOP Rental</td>
<td style="padding: 0.8rem; text-align: center; border-bottom: 1px solid #ddd;">$50,000 - $100,000/day</td>
</tr>
<tr style="background: #f5f5f5;">
<td style="padding: 0.8rem;">تكلفة البئر الإجمالية</td>
<td style="padding: 0.8rem; text-align: center;">$50M - $200M+</td>
</tr>
</table>
</div>

<div style="background: #ffebee; padding: 1.2rem; border-radius: 10px; margin-top: 1.5rem;">
<h4 style="color: #c62828;">⚠️ عوامل الخطر الرئيسية:</h4>
<ul style="margin-top: 0.5rem;">
<li><strong>الطقس:</strong> Hurricane Season في خليج المكسيك (يونيو-نوفمبر)</li>
<li><strong>Metocean:</strong> التيارات القوية والأمواج العالية</li>
<li><strong>المسافة:</strong> بُعد عن الشاطئ - تحديات الإمداد والإخلاء</li>
<li><strong>التعقيد الجيولوجي:</strong> Salt، Pre-salt، Shallow Hazards</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'ROV', definition: 'Remotely Operated Vehicle - مركبة تشغيل عن بعد' },
            { term: 'Work Class ROV', definition: 'ROV للتدخل والعمليات الميكانيكية' },
            { term: 'Dual Activity', definition: 'تنفيذ عمليتين متزامنتين لتوفير الوقت' },
            { term: 'Riserless Drilling', definition: 'الحفر بدون ناهض للمراحل الأولية' },
            { term: 'SMD', definition: 'Subsea Mudlift Drilling - تقنية Dual Gradient' },
          ],
          practiceQuestion: {
            question: 'ما هو الغرض الرئيسي من نظام Subsea Mudlift Drilling (SMD)؟',
            options: [
              'تقليل تكلفة سائل الحفر',
              'توسيع نافذة الحفر الضيقة',
              'زيادة سرعة الحفر',
              'تقليل حجم الناهض'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Subsea Operations and Advanced Technologies - Day 5',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">🔷 Subsea Operations</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="color: #fbbf24; margin-bottom: 1rem;">🔧 Operational Complexity in Deepwater</h3>
<p style="font-size: 1.1rem; line-height: 1.8;">
Subsea operations in deepwater require specialized techniques and high-tech tools to handle equipment at depths that cannot be directly accessed. These operations include installation, maintenance, inspection, and repair.
</p>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">🤖 Remotely Operated Vehicles - ROVs</h3>

<div style="background: #e3f2fd; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #1565c0; margin-bottom: 1rem;">ROV Types:</h4>
<div style="display: grid; gap: 1rem;">
<div style="background: white; padding: 1rem; border-radius: 8px; border-left: 4px solid #4caf50;">
<h5 style="color: #2e7d32; margin-bottom: 0.5rem;">Observation Class</h5>
<p>For visual monitoring and inspection - limited intervention capabilities</p>
<p><em>Depth: up to 3,000 m</em></p>
</div>

<div style="background: white; padding: 1rem; border-radius: 8px; border-left: 4px solid #2196f3;">
<h5 style="color: #1565c0; margin-bottom: 0.5rem;">Work Class</h5>
<p>For intervention and mechanical operations - with manipulator arms</p>
<p><em>Depth: up to 4,000 m | Power: 100-150 HP</em></p>
</div>

<div style="background: white; padding: 1rem; border-radius: 8px; border-left: 4px solid #9c27b0;">
<h5 style="color: #7b1fa2; margin-bottom: 0.5rem;">Heavy Work Class</h5>
<p>For heavy operations and large installations</p>
<p><em>Depth: up to 6,000 m | Power: 200+ HP</em></p>
</div>
</div>
</div>

<div style="background: #fff3e0; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #e65100; margin-bottom: 1rem;">⚡ ROV Tasks in Drilling:</h4>
<ul style="margin: 0; padding-left: 1.5rem;">
<li style="margin-bottom: 0.5rem;">Monitoring riser and BOP condition</li>
<li style="margin-bottom: 0.5rem;">Inspecting Choke & Kill lines</li>
<li style="margin-bottom: 0.5rem;">Operating intervention valves</li>
<li style="margin-bottom: 0.5rem;">Cutting and connecting cables and hoses</li>
<li>Supporting running and pulling operations</li>
</ul>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">🔩 Subsea Wellhead Systems</h3>

<div style="background: #e8f5e9; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #2e7d32; margin-bottom: 1rem;">Subsea Wellhead Components:</h4>
<ul style="list-style: none; padding: 0;">
<li style="padding: 0.8rem 0; border-bottom: 1px solid #c8e6c9;">
<strong>🔹 Conductor Housing:</strong>
<p style="margin-top: 0.3rem;">Installed in seabed - provides structural foundation</p>
</li>
<li style="padding: 0.8rem 0; border-bottom: 1px solid #c8e6c9;">
<strong>🔹 High Pressure Housing:</strong>
<p style="margin-top: 0.3rem;">Receives casing hangers for various casing sizes</p>
</li>
<li style="padding: 0.8rem 0; border-bottom: 1px solid #c8e6c9;">
<strong>🔹 Casing Hangers:</strong>
<p style="margin-top: 0.3rem;">Hangers for suspending casing strings with seal assemblies</p>
</li>
<li style="padding: 0.8rem 0;">
<strong>🔹 Tubing Hanger:</strong>
<p style="margin-top: 0.3rem;">Production hanger with control and chemical connections</p>
</li>
</ul>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">🚀 Advanced Deepwater Drilling Technologies</h3>

<div style="background: #fce4ec; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #c2185b; margin-bottom: 1rem;">1. Dual Activity Drilling</h4>
<p style="margin-bottom: 1rem;">Executing two simultaneous operations to reduce well time:</p>
<ul style="list-style: none; padding: 0;">
<li style="padding: 0.5rem 0; border-bottom: 1px solid #f8bbd0;">
Installing riser while preparing drill string
</li>
<li style="padding: 0.5rem 0; border-bottom: 1px solid #f8bbd0;">
Running casing while mixing cement
</li>
<li style="padding: 0.5rem 0;">
Parallel trips on two derricks
</li>
</ul>
</div>

<div style="background: #e8eaf6; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #3f51b5; margin-bottom: 1rem;">2. Riserless Drilling</h4>
<p style="margin-bottom: 1rem;">Drilling without riser for initial sections:</p>
<ul style="list-style: none; padding: 0;">
<li style="padding: 0.5rem 0; border-bottom: 1px solid #c5cae9;">
Drilling fluid returns directly to seabed
</li>
<li style="padding: 0.5rem 0; border-bottom: 1px solid #c5cae9;">
Used for drilling conductor and surface casing
</li>
<li style="padding: 0.5rem 0;">
Requires pump and dump or seawater with gel sweeps
</li>
</ul>
</div>

<div style="background: #fff8e1; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #ff8f00; margin-bottom: 1rem;">3. Subsea Mudlift Drilling (SMD)</h4>
<p style="margin-bottom: 1rem;">Advanced Dual Gradient technology:</p>
<ul style="list-style: none; padding: 0;">
<li style="padding: 0.5rem 0; border-bottom: 1px solid #ffe0b2;">
<strong>Mudlift Pump:</strong> Seabed pump lifting returns to surface
</li>
<li style="padding: 0.5rem 0; border-bottom: 1px solid #ffe0b2;">
<strong>Water-filled Riser:</strong> Lighter density in riser
</li>
<li style="padding: 0.5rem 0;">
<strong>Benefit:</strong> Significantly expands narrow drilling window
</li>
</ul>
</div>

<h3 style="color: #ff6b35; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">📊 Cost and Planning Considerations</h3>

<div style="background: linear-gradient(to right, #e8f5e9, #c8e6c9); padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #2e7d32; margin-bottom: 1rem;">Deepwater Cost Factors:</h4>
<table style="width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden;">
<tr style="background: #2e7d32; color: white;">
<th style="padding: 0.8rem; text-align: left;">Item</th>
<th style="padding: 0.8rem; text-align: center;">Approximate Cost</th>
</tr>
<tr>
<td style="padding: 0.8rem; border-bottom: 1px solid #ddd;">Day Rate (7th Gen Drillship)</td>
<td style="padding: 0.8rem; text-align: center; border-bottom: 1px solid #ddd;">$350,000 - $500,000/day</td>
</tr>
<tr style="background: #f5f5f5;">
<td style="padding: 0.8rem; border-bottom: 1px solid #ddd;">Average Well Duration</td>
<td style="padding: 0.8rem; text-align: center; border-bottom: 1px solid #ddd;">60-120 days</td>
</tr>
<tr>
<td style="padding: 0.8rem; border-bottom: 1px solid #ddd;">Subsea BOP Rental</td>
<td style="padding: 0.8rem; text-align: center; border-bottom: 1px solid #ddd;">$50,000 - $100,000/day</td>
</tr>
<tr style="background: #f5f5f5;">
<td style="padding: 0.8rem;">Total Well Cost</td>
<td style="padding: 0.8rem; text-align: center;">$50M - $200M+</td>
</tr>
</table>
</div>

<div style="background: #ffebee; padding: 1.2rem; border-radius: 10px; margin-top: 1.5rem;">
<h4 style="color: #c62828;">⚠️ Key Risk Factors:</h4>
<ul style="margin-top: 0.5rem;">
<li><strong>Weather:</strong> Hurricane Season in GoM (June-November)</li>
<li><strong>Metocean:</strong> Strong currents and high waves</li>
<li><strong>Distance:</strong> Far from shore - supply and evacuation challenges</li>
<li><strong>Geological Complexity:</strong> Salt, Pre-salt, Shallow Hazards</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'ROV', definition: 'Remotely Operated Vehicle for subsea work' },
            { term: 'Work Class ROV', definition: 'ROV for intervention and mechanical operations' },
            { term: 'Dual Activity', definition: 'Simultaneous operations to save time' },
            { term: 'Riserless Drilling', definition: 'Drilling without riser for initial sections' },
            { term: 'SMD', definition: 'Subsea Mudlift Drilling - Dual Gradient technique' },
          ],
          practiceQuestion: {
            question: 'What is the main purpose of Subsea Mudlift Drilling (SMD)?',
            options: [
              'Reduce drilling fluid cost',
              'Expand narrow drilling window',
              'Increase drilling speed',
              'Reduce riser size'
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
          title: 'اختبار الحفر في المياه العميقة',
          explanation: 'اختبر معلوماتك حول الحفر في المياه العميقة',
          keyTerms: [],
        },
        en: {
          title: 'Deepwater Drilling Quiz',
          explanation: 'Test your knowledge of deepwater drilling',
          keyTerms: [],
        },
      },
      quiz: {
        ar: [
          {
            question: 'ما هو الحد الأدنى لعمق المياه ليصنف الحفر كـ "Ultra-Deepwater"؟',
            options: ['1,000 قدم', '3,000 قدم', '5,000 قدم', '7,500 قدم'],
            correctAnswer: 2,
          },
          {
            question: 'ما هو الغرض الرئيسي من الـ LMRP في نظام Subsea BOP؟',
            options: [
              'توفير الضغط الهيدروليكي',
              'السماح بالفصل الطارئ من البئر',
              'مراقبة ضغط التكوين',
              'تعليق سلسلة الحفر'
            ],
            correctAnswer: 1,
          },
          {
            question: 'أي تصنيف DP يُستخدم عادةً لمعظم عمليات الحفر في المياه العميقة؟',
            options: ['DP Class 1', 'DP Class 2', 'DP Class 3', 'DP Class 4'],
            correctAnswer: 1,
          },
          {
            question: 'ما هي الظروف التي تؤدي إلى تكوين الهيدرات؟',
            options: [
              'درجة حرارة عالية وضغط منخفض',
              'درجة حرارة منخفضة وضغط عالي',
              'درجة حرارة عالية وضغط عالي',
              'درجة حرارة منخفضة وضغط منخفض'
            ],
            correctAnswer: 1,
          },
          {
            question: 'ما هو Riser Margin في الحفر في المياه العميقة؟',
            options: [
              'طول الناهض الإضافي',
              'كثافة إضافية لتعويض فقدان ضغط الماء عند الانفصال',
              'المسافة بين الناهض والـ BOP',
              'سمك جدار الناهض'
            ],
            correctAnswer: 1,
          },
          {
            question: 'ما هي وظيفة الـ Telescopic Joint في نظام الناهض؟',
            options: [
              'ربط الناهض بالـ BOP',
              'امتصاص حركة الـ Heave',
              'توفير المرونة الزاوية',
              'الحفاظ على ضغط الناهض'
            ],
            correctAnswer: 1,
          },
          {
            question: 'أي نوع من الـ ROV يُستخدم للعمليات الميكانيكية الثقيلة؟',
            options: [
              'Observation Class',
              'Light Work Class',
              'Work Class',
              'Survey Class'
            ],
            correctAnswer: 2,
          },
          {
            question: 'ما هو التحدي الرئيسي للنافذة الضيقة في المياه العميقة؟',
            options: [
              'ارتفاع تكلفة سائل الحفر',
              'الفرق الصغير بين Pore Pressure و Fracture Gradient',
              'صعوبة تشغيل الـ BOP',
              'طول الناهض'
            ],
            correctAnswer: 1,
          },
          {
            question: 'ما هي تقنية Dual Activity Drilling؟',
            options: [
              'حفر بئرين في نفس الوقت',
              'استخدام نوعين من سائل الحفر',
              'تنفيذ عمليتين متزامنتين على نفس المنصة',
              'الحفر بسرعتين مختلفتين'
            ],
            correctAnswer: 2,
          },
          {
            question: 'ما هو نظام Deadman في Subsea BOP؟',
            options: [
              'نظام مراقبة حالة الطاقم',
              'نظام احتياطي يُفعّل عند فقدان الطاقة والاتصالات',
              'نظام إزالة الضغط',
              'نظام تسجيل البيانات'
            ],
            correctAnswer: 1,
          },
        ],
        en: [
          {
            question: 'What is the minimum water depth for drilling to be classified as "Ultra-Deepwater"?',
            options: ['1,000 feet', '3,000 feet', '5,000 feet', '7,500 feet'],
            correctAnswer: 2,
          },
          {
            question: 'What is the main purpose of the LMRP in the Subsea BOP system?',
            options: [
              'Provide hydraulic pressure',
              'Allow emergency disconnect from well',
              'Monitor formation pressure',
              'Suspend drill string'
            ],
            correctAnswer: 1,
          },
          {
            question: 'Which DP classification is typically used for most deepwater drilling operations?',
            options: ['DP Class 1', 'DP Class 2', 'DP Class 3', 'DP Class 4'],
            correctAnswer: 1,
          },
          {
            question: 'What conditions lead to hydrate formation?',
            options: [
              'High temperature and low pressure',
              'Low temperature and high pressure',
              'High temperature and high pressure',
              'Low temperature and low pressure'
            ],
            correctAnswer: 1,
          },
          {
            question: 'What is Riser Margin in deepwater drilling?',
            options: [
              'Additional riser length',
              'Extra density to compensate for water pressure loss during disconnect',
              'Distance between riser and BOP',
              'Riser wall thickness'
            ],
            correctAnswer: 1,
          },
          {
            question: 'What is the function of the Telescopic Joint in the riser system?',
            options: [
              'Connect riser to BOP',
              'Absorb heave motion',
              'Provide angular flexibility',
              'Maintain riser pressure'
            ],
            correctAnswer: 1,
          },
          {
            question: 'Which type of ROV is used for heavy mechanical operations?',
            options: [
              'Observation Class',
              'Light Work Class',
              'Work Class',
              'Survey Class'
            ],
            correctAnswer: 2,
          },
          {
            question: 'What is the main challenge of narrow window in deepwater?',
            options: [
              'High drilling fluid cost',
              'Small difference between Pore Pressure and Fracture Gradient',
              'Difficulty operating BOP',
              'Riser length'
            ],
            correctAnswer: 1,
          },
          {
            question: 'What is Dual Activity Drilling?',
            options: [
              'Drilling two wells simultaneously',
              'Using two types of drilling fluid',
              'Executing two simultaneous operations on the same rig',
              'Drilling at two different speeds'
            ],
            correctAnswer: 2,
          },
          {
            question: 'What is the Deadman system in Subsea BOP?',
            options: [
              'Crew status monitoring system',
              'Backup system activated upon loss of power and communications',
              'Pressure relief system',
              'Data recording system'
            ],
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
          title: 'مشروع الحفر في المياه العميقة',
          explanation: 'طبق معرفتك في تخطيط عملية حفر في المياه العميقة',
          keyTerms: [],
        },
        en: {
          title: 'Deepwater Drilling Project',
          explanation: 'Apply your knowledge in planning a deepwater drilling operation',
          keyTerms: [],
        },
      },
      project: {
        ar: {
          title: 'تخطيط عملية حفر في المياه العميقة',
          description: 'أنت مهندس حفر مكلف بالتخطيط لحفر بئر استكشافي في خليج المكسيك على عمق مائي 7,500 قدم. قم بإعداد خطة شاملة تغطي الجوانب التقنية والتشغيلية.',
          instructions: [
            'اختر نوع منصة الحفر المناسبة (Semisubmersible أو Drillship) وبرر اختيارك',
            'حدد نظام التثبيت المناسب (DP Class) مع الأسباب',
            'صمم برنامج سائل الحفر للتعامل مع التدرج الحراري المزدوج ومنع الهيدرات',
            'حدد استراتيجية التعامل مع النافذة الضيقة في الطبقات الضحلة',
            'اكتب إجراءات الفصل الطارئ (EDS) المطلوبة',
            'قدم تقديراً للتكلفة اليومية والإجمالية للعملية',
          ],
          submissionType: 'text',
        },
        en: {
          title: 'Deepwater Drilling Operation Planning',
          description: 'You are a drilling engineer tasked with planning an exploration well in the Gulf of Mexico at 7,500 feet water depth. Prepare a comprehensive plan covering technical and operational aspects.',
          instructions: [
            'Select the appropriate drilling rig type (Semisubmersible or Drillship) and justify your choice',
            'Determine the appropriate station keeping system (DP Class) with reasons',
            'Design a drilling fluid program to handle dual temperature gradient and prevent hydrates',
            'Identify strategy for dealing with narrow window in shallow formations',
            'Write required Emergency Disconnect Sequence (EDS) procedures',
            'Provide daily and total cost estimate for the operation',
          ],
          submissionType: 'text',
        },
      },
    },
  ],
};
