import { WeeklyLesson } from '../weeklyContent';

export const extendedReachDrillingLesson: WeeklyLesson = {
  lessonId: 'extended-reach-drilling',
  days: [
    {
      day: 1,
      type: 'learning',
      content: {
        ar: {
          title: 'الحفر الممتد المدى (ERD) - المفاهيم الأساسية',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 ما هو الحفر الممتد المدى؟</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
الحفر الممتد المدى (Extended Reach Drilling - ERD) هو تقنية حفر موجه تهدف للوصول إلى أهداف بعيدة أفقياً من موقع الحفارة. يُعرّف عادةً بأنه الحفر حيث نسبة الإزاحة الأفقية إلى العمق الرأسي الحقيقي (HD/TVD) تتجاوز 2:1.
</p>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="font-size: 1.25rem; margin-bottom: 1rem;">💡 لماذا نحتاج ERD؟</h3>
<p style="line-height: 1.8;">في كثير من الحالات، لا يمكننا وضع الحفارة فوق الهدف مباشرة. قد يكون الهدف تحت البحر، أو تحت مناطق محمية بيئياً، أو تحت مدن ومنشآت. ERD يسمح لنا بالوصول لهذه الأهداف من موقع بعيد.</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 تصنيف آبار ERD</h3>
<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #64748b;">
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background: #e2e8f0;">
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: right;">التصنيف</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: right;">نسبة HD/TVD</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: right;">مثال</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;">موجه عادي</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">< 2:1</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">HD=3000m, TVD=2000m</td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 12px; border: 1px solid #cbd5e1;"><strong>ERD</strong></td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">2:1 - 3:1</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">HD=6000m, TVD=2500m</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;"><strong>Ultra-ERD</strong></td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">> 3:1</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">HD=12000m, TVD=3000m</td>
</tr>
</tbody>
</table>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 الأرقام القياسية العالمية</h3>
<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #059669;">
<ul style="line-height: 2.2; padding-right: 1.5rem;">
<li><strong>أطول بئر ERD:</strong> حقل Sakhalin في روسيا - إزاحة أفقية تجاوزت 15 كم!</li>
<li><strong>أعلى نسبة HD/TVD:</strong> تجاوزت 6:1 في بعض الآبار</li>
<li><strong>الطول الكلي (MD):</strong> تجاوز 40,000 قدم في بعض الآبار</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 تطبيقات ERD</h3>
<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #2563eb;">
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #1e40af;">1️⃣ الحفر من الشاطئ للأهداف البحرية</p>
<p style="line-height: 1.8;">الوصول لمكامن تحت البحر من منصة برية - يوفر تكلفة المنصات البحرية الضخمة</p>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #1e40af;">2️⃣ تقليل عدد المنصات</p>
<p style="line-height: 1.8;">منصة واحدة يمكنها الوصول لعدة مكامن متباعدة بدلاً من عدة منصات</p>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #1e40af;">3️⃣ المناطق المحمية</p>
<p style="line-height: 1.8;">الوصول لأهداف تحت محميات طبيعية أو مناطق سكنية دون التأثير عليها</p>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #1e40af;">4️⃣ تطوير الحقول الهامشية</p>
<p style="line-height: 1.8;">مكامن صغيرة لا تبرر تكلفة منصة مستقلة يمكن الوصول إليها من منصة موجودة</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 التحديات الرئيسية في ERD</h3>
<div style="background: #fee2e2; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #dc2626;">
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background: #fecaca;">
<th style="padding: 12px; border: 1px solid #fca5a5; text-align: right;">التحدي</th>
<th style="padding: 12px; border: 1px solid #fca5a5; text-align: right;">السبب</th>
<th style="padding: 12px; border: 1px solid #fca5a5; text-align: right;">التأثير</th>
</tr>
</thead>
<tbody>
<tr style="background: #fff;">
<td style="padding: 12px; border: 1px solid #ddd;"><strong>العزم والسحب</strong></td>
<td style="padding: 12px; border: 1px solid #ddd;">الاحتكاك الكبير على طول المسار</td>
<td style="padding: 12px; border: 1px solid #ddd;">صعوبة الدوران والرفع</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;"><strong>تنظيف الحفرة</strong></td>
<td style="padding: 12px; border: 1px solid #ddd;">القطع تترسب في الأقسام الأفقية</td>
<td style="padding: 12px; border: 1px solid #ddd;">انسداد وانحشار</td>
</tr>
<tr style="background: #fff;">
<td style="padding: 12px; border: 1px solid #ddd;"><strong>ECD العالي</strong></td>
<td style="padding: 12px; border: 1px solid #ddd;">فقدان الضغط الكبير في الطول</td>
<td style="padding: 12px; border: 1px solid #ddd;">كسر التكوين أو فقدان طين</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;"><strong>إنزال التغليف</strong></td>
<td style="padding: 12px; border: 1px solid #ddd;">الاحتكاك يمنع الوصول للقاع</td>
<td style="padding: 12px; border: 1px solid #ddd;">عدم اكتمال التغليف</td>
</tr>
</tbody>
</table>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>ERD عندما تتجاوز نسبة HD/TVD نسبة 2:1</li>
<li>يُستخدم للوصول لأهداف بعيدة من موقع واحد</li>
<li>يوفر تكاليف المنصات ويحمي البيئة</li>
<li>التحديات الرئيسية: العزم، السحب، تنظيف الحفرة، ECD</li>
<li>الأرقام القياسية تجاوزت 15 كم إزاحة أفقية</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'ERD', definition: 'Extended Reach Drilling - الحفر الممتد المدى' },
            { term: 'HD/TVD Ratio', definition: 'نسبة الإزاحة الأفقية إلى العمق الرأسي الحقيقي' },
            { term: 'Torque', definition: 'العزم - مقاومة الدوران بسبب الاحتكاك' },
            { term: 'Drag', definition: 'السحب - مقاومة الحركة الرأسية' },
            { term: 'Ultra-ERD', definition: 'حفر ممتد فائق - نسبة HD/TVD أكبر من 3:1' },
          ],
          practiceQuestion: {
            question: 'متى يُصنف البئر كـ ERD؟',
            options: [
              'عندما يكون العمق أكثر من 5000 متر',
              'عندما تتجاوز نسبة HD/TVD نسبة 2:1',
              'عندما يكون البئر أفقياً فقط',
              'عندما يكون في البحر'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Extended Reach Drilling (ERD) - Basic Concepts',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 What is Extended Reach Drilling?</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
Extended Reach Drilling (ERD) is a directional drilling technique aimed at reaching targets that are far horizontally from the rig location. It's typically defined as drilling where the horizontal displacement to true vertical depth ratio (HD/TVD) exceeds 2:1.
</p>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="font-size: 1.25rem; margin-bottom: 1rem;">💡 Why Do We Need ERD?</h3>
<p style="line-height: 1.8;">In many cases, we cannot place the rig directly above the target. The target may be under the sea, under environmentally protected areas, or under cities and facilities. ERD allows us to reach these targets from a distant location.</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 ERD Well Classification</h3>
<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #64748b;">
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background: #e2e8f0;">
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: left;">Classification</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: left;">HD/TVD Ratio</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: left;">Example</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Standard Directional</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">< 2:1</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">HD=3000m, TVD=2000m</td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 12px; border: 1px solid #cbd5e1;"><strong>ERD</strong></td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">2:1 - 3:1</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">HD=6000m, TVD=2500m</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;"><strong>Ultra-ERD</strong></td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">> 3:1</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">HD=12000m, TVD=3000m</td>
</tr>
</tbody>
</table>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 World Records</h3>
<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #059669;">
<ul style="line-height: 2.2; padding-left: 1.5rem;">
<li><strong>Longest ERD Well:</strong> Sakhalin Field in Russia - horizontal displacement exceeded 15 km!</li>
<li><strong>Highest HD/TVD Ratio:</strong> Exceeded 6:1 in some wells</li>
<li><strong>Total Length (MD):</strong> Exceeded 40,000 ft in some wells</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 ERD Applications</h3>
<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #2563eb;">
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #1e40af;">1️⃣ Drilling from Shore to Offshore Targets</p>
<p style="line-height: 1.8;">Reaching reservoirs under the sea from an onshore platform - saves cost of massive offshore platforms</p>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #1e40af;">2️⃣ Reducing Platform Count</p>
<p style="line-height: 1.8;">One platform can reach multiple scattered reservoirs instead of multiple platforms</p>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #1e40af;">3️⃣ Protected Areas</p>
<p style="line-height: 1.8;">Reaching targets under nature reserves or residential areas without affecting them</p>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #1e40af;">4️⃣ Marginal Field Development</p>
<p style="line-height: 1.8;">Small reservoirs that don't justify a standalone platform can be reached from an existing platform</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Main ERD Challenges</h3>
<div style="background: #fee2e2; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #dc2626;">
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background: #fecaca;">
<th style="padding: 12px; border: 1px solid #fca5a5; text-align: left;">Challenge</th>
<th style="padding: 12px; border: 1px solid #fca5a5; text-align: left;">Cause</th>
<th style="padding: 12px; border: 1px solid #fca5a5; text-align: left;">Impact</th>
</tr>
</thead>
<tbody>
<tr style="background: #fff;">
<td style="padding: 12px; border: 1px solid #ddd;"><strong>Torque & Drag</strong></td>
<td style="padding: 12px; border: 1px solid #ddd;">High friction along the path</td>
<td style="padding: 12px; border: 1px solid #ddd;">Difficulty rotating and lifting</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;"><strong>Hole Cleaning</strong></td>
<td style="padding: 12px; border: 1px solid #ddd;">Cuttings settle in horizontal sections</td>
<td style="padding: 12px; border: 1px solid #ddd;">Blockage and stuck pipe</td>
</tr>
<tr style="background: #fff;">
<td style="padding: 12px; border: 1px solid #ddd;"><strong>High ECD</strong></td>
<td style="padding: 12px; border: 1px solid #ddd;">Large pressure loss over length</td>
<td style="padding: 12px; border: 1px solid #ddd;">Formation fracture or mud loss</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;"><strong>Casing Running</strong></td>
<td style="padding: 12px; border: 1px solid #ddd;">Friction prevents reaching bottom</td>
<td style="padding: 12px; border: 1px solid #ddd;">Incomplete casing</td>
</tr>
</tbody>
</table>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>ERD when HD/TVD ratio exceeds 2:1</li>
<li>Used to reach distant targets from one location</li>
<li>Saves platform costs and protects environment</li>
<li>Main challenges: Torque, Drag, Hole Cleaning, ECD</li>
<li>World records exceeded 15 km horizontal displacement</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'ERD', definition: 'Extended Reach Drilling' },
            { term: 'HD/TVD Ratio', definition: 'Horizontal Displacement to True Vertical Depth ratio' },
            { term: 'Torque', definition: 'Rotational resistance due to friction' },
            { term: 'Drag', definition: 'Axial movement resistance' },
            { term: 'Ultra-ERD', definition: 'Ultra Extended Reach - HD/TVD ratio greater than 3:1' },
          ],
          practiceQuestion: {
            question: 'When is a well classified as ERD?',
            options: [
              'When depth exceeds 5000 meters',
              'When HD/TVD ratio exceeds 2:1',
              'When the well is only horizontal',
              'When it is offshore'
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
          title: 'العزم والسحب (Torque & Drag) في ERD',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 فهم العزم والسحب</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
العزم والسحب (T&D) هما أهم التحديات في ERD. كلما زاد طول البئر وزاوية الميل، زاد الاحتكاك بين سلسلة الحفر وجدار البئر.
</p>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="font-size: 1.25rem; margin-bottom: 1rem;">💡 ما هو الفرق؟</h3>
<ul style="line-height: 2; padding-right: 1.5rem;">
<li><strong>العزم (Torque):</strong> المقاومة عند دوران سلسلة الحفر</li>
<li><strong>السحب (Drag):</strong> المقاومة عند سحب أو إنزال سلسلة الحفر</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 العوامل المؤثرة على T&D</h3>
<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #64748b;">
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background: #e2e8f0;">
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: right;">العامل</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: right;">التأثير</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: right;">ملاحظات</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;">معامل الاحتكاك (μ)</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">زيادة μ = زيادة T&D</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">0.15-0.25 طبيعي، >0.35 مشكلة</td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 12px; border: 1px solid #cbd5e1;">وزن سلسلة الحفر</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">زيادة الوزن = زيادة T&D</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">الألومنيوم أخف من الفولاذ</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;">زاوية الميل</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">زيادة الزاوية = زيادة T&D</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">الأقسام الأفقية الأصعب</td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 12px; border: 1px solid #cbd5e1;">Dogleg Severity</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">DLS عالي = T&D عالي</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">يجب تقليل DLS في ERD</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;">حالة البئر</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">تراكم القطع يزيد T&D</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">تنظيف الحفرة ضروري</td>
</tr>
</tbody>
</table>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 حدود العزم والسحب</h3>
<div style="background: #fee2e2; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #dc2626;">
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #dc2626; margin-bottom: 0.5rem;">⚠️ حد العزم:</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li><strong>Top Drive:</strong> عادة 60,000-80,000 ft-lbs</li>
<li><strong>Drill Pipe:</strong> قد ينكسر أو يتلوى إذا تجاوز Make-up Torque</li>
<li><strong>النتيجة:</strong> عدم القدرة على الدوران أو تلف المعدات</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #dc2626; margin-bottom: 0.5rem;">⚠️ حد السحب:</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li><strong>عند السحب (POOH):</strong> قد يتجاوز قدرة الرافعة</li>
<li><strong>عند الإنزال (RIH):</strong> قد لا يصل للقاع (الوزن لا يكفي)</li>
<li><strong>النتيجة:</strong> انحشار أو عدم الوصول للهدف</li>
</ul>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 استراتيجيات تقليل T&D</h3>
<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #059669;">
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #059669;">1️⃣ تصميم مسار البئر</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li>تقليل DLS إلى أقل من 3°/100ft</li>
<li>استخدام مسار Catenary أو Slant بدلاً من S-curve</li>
<li>تجنب التغييرات المفاجئة في الاتجاه</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #059669;">2️⃣ تقليل الاحتكاك</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li>استخدام مواد تزليق (Lubricants) في الطين</li>
<li>طين Oil-based أقل احتكاكاً من Water-based</li>
<li>استخدام Friction Reducers</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #059669;">3️⃣ تخفيف الوزن</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li>Aluminum Drill Pipe بدلاً من الفولاذ (أخف 65%)</li>
<li>Titanium Drill Pipe للحالات الصعبة جداً</li>
<li>تقليل عدد الـ Heavy Weight Drill Pipe</li>
</ul>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 نمذجة T&D</h3>
<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #2563eb;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
برامج الحاسب تستخدم نموذج Soft String أو Stiff String لحساب T&D المتوقع:
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<ul style="padding-right: 1.5rem; line-height: 2;">
<li><strong>Soft String Model:</strong> بسيط، يفترض أن الأنبوب مرن تماماً</li>
<li><strong>Stiff String Model:</strong> أدق، يأخذ صلابة الأنبوب بالاعتبار</li>
<li><strong>المخرجات:</strong> Hook Load، Surface Torque، Tension/Compression على طول البئر</li>
<li><strong>الاستخدام:</strong> مقارنة القيم المحسوبة بالفعلية لمعرفة حالة البئر</li>
</ul>
</div>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>العزم = مقاومة الدوران، السحب = مقاومة الحركة المحورية</li>
<li>معامل الاحتكاك والوزن والميل هي العوامل الرئيسية</li>
<li>تجاوز الحدود يسبب تلف المعدات أو انحشار</li>
<li>التصميم الجيد للمسار وتقليل الاحتكاك ضروريان</li>
<li>نمذجة T&D تتنبأ بالمشاكل قبل حدوثها</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Friction Factor', definition: 'معامل الاحتكاك (μ) - يحدد مقدار الاحتكاك بين الأنابيب والجدار' },
            { term: 'DLS', definition: 'Dogleg Severity - معدل تغير الاتجاه بالدرجات لكل 100 قدم' },
            { term: 'Soft String Model', definition: 'نموذج حسابي يفترض مرونة كاملة للأنبوب' },
            { term: 'Hook Load', definition: 'الحمل على الرافعة - يتأثر بالسحب' },
            { term: 'Lubricants', definition: 'مواد تزليق تُضاف للطين لتقليل الاحتكاك' },
          ],
          practiceQuestion: {
            question: 'ما هو الحل الأفضل لتقليل السحب في بئر ERD؟',
            options: [
              'زيادة وزن الطين',
              'استخدام مواد تزليق وتقليل DLS',
              'زيادة سرعة الضخ',
              'زيادة وزن سلسلة الحفر'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Torque & Drag in ERD',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Understanding Torque & Drag</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
Torque and Drag (T&D) are the most important challenges in ERD. As well length and inclination angle increase, friction between the drillstring and wellbore wall increases.
</p>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="font-size: 1.25rem; margin-bottom: 1rem;">💡 What's the Difference?</h3>
<ul style="line-height: 2; padding-left: 1.5rem;">
<li><strong>Torque:</strong> Resistance when rotating the drillstring</li>
<li><strong>Drag:</strong> Resistance when pulling or running the drillstring</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Factors Affecting T&D</h3>
<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #64748b;">
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background: #e2e8f0;">
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: left;">Factor</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: left;">Effect</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: left;">Notes</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Friction Factor (μ)</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Higher μ = Higher T&D</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">0.15-0.25 normal, >0.35 problem</td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 12px; border: 1px solid #cbd5e1;">Drillstring Weight</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Higher weight = Higher T&D</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Aluminum lighter than steel</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Inclination Angle</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Higher angle = Higher T&D</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Horizontal sections hardest</td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 12px; border: 1px solid #cbd5e1;">Dogleg Severity</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">High DLS = High T&D</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Must minimize DLS in ERD</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Hole Condition</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Cuttings buildup increases T&D</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Hole cleaning essential</td>
</tr>
</tbody>
</table>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Torque & Drag Limits</h3>
<div style="background: #fee2e2; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #dc2626;">
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #dc2626; margin-bottom: 0.5rem;">⚠️ Torque Limit:</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li><strong>Top Drive:</strong> Typically 60,000-80,000 ft-lbs</li>
<li><strong>Drill Pipe:</strong> May break or twist if exceeds Make-up Torque</li>
<li><strong>Result:</strong> Unable to rotate or equipment damage</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #dc2626; margin-bottom: 0.5rem;">⚠️ Drag Limit:</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li><strong>While POOH:</strong> May exceed drawworks capacity</li>
<li><strong>While RIH:</strong> May not reach bottom (weight insufficient)</li>
<li><strong>Result:</strong> Stuck pipe or not reaching target</li>
</ul>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 T&D Reduction Strategies</h3>
<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #059669;">
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #059669;">1️⃣ Well Path Design</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li>Reduce DLS to less than 3°/100ft</li>
<li>Use Catenary or Slant path instead of S-curve</li>
<li>Avoid sudden direction changes</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #059669;">2️⃣ Friction Reduction</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li>Use lubricants in mud</li>
<li>Oil-based mud has less friction than Water-based</li>
<li>Use Friction Reducers</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #059669;">3️⃣ Weight Reduction</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li>Aluminum Drill Pipe instead of steel (65% lighter)</li>
<li>Titanium Drill Pipe for very difficult cases</li>
<li>Reduce Heavy Weight Drill Pipe count</li>
</ul>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 T&D Modeling</h3>
<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #2563eb;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
Computer programs use Soft String or Stiff String models to calculate expected T&D:
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<ul style="padding-left: 1.5rem; line-height: 2;">
<li><strong>Soft String Model:</strong> Simple, assumes pipe is completely flexible</li>
<li><strong>Stiff String Model:</strong> More accurate, considers pipe stiffness</li>
<li><strong>Outputs:</strong> Hook Load, Surface Torque, Tension/Compression along well</li>
<li><strong>Use:</strong> Compare calculated vs actual values to know hole condition</li>
</ul>
</div>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>Torque = rotational resistance, Drag = axial resistance</li>
<li>Friction factor, weight, and inclination are main factors</li>
<li>Exceeding limits causes equipment damage or stuck pipe</li>
<li>Good path design and friction reduction are essential</li>
<li>T&D modeling predicts problems before they occur</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Friction Factor', definition: 'Coefficient (μ) determining friction between pipe and wall' },
            { term: 'DLS', definition: 'Dogleg Severity - rate of direction change in degrees per 100ft' },
            { term: 'Soft String Model', definition: 'Computational model assuming completely flexible pipe' },
            { term: 'Hook Load', definition: 'Load on the hook - affected by drag' },
            { term: 'Lubricants', definition: 'Materials added to mud to reduce friction' },
          ],
          practiceQuestion: {
            question: 'What is the best solution to reduce drag in an ERD well?',
            options: [
              'Increase mud weight',
              'Use lubricants and reduce DLS',
              'Increase pump rate',
              'Increase drillstring weight'
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
          title: 'تنظيف الحفرة في ERD',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 تحدي تنظيف الحفرة في الآبار الممتدة</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
تنظيف الحفرة (Hole Cleaning) في آبار ERD أصعب بكثير من الآبار العمودية. في الأقسام ذات الميل العالي والأفقية، تميل القطع للترسب على الجانب السفلي من البئر بدلاً من الصعود مع الطين.
</p>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="font-size: 1.25rem; margin-bottom: 1rem;">💡 لماذا التنظيف صعب في ERD؟</h3>
<p style="line-height: 1.8;">في البئر العمودي، الجاذبية تساعد القطع على السقوط للقاع ثم الطين يرفعها. في البئر الأفقي، الجاذبية تسحب القطع للجانب السفلي وتشكل "سرير قطع" (Cuttings Bed) يتراكم ويسبب مشاكل.</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 مناطق الميل الحرجة</h3>
<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #64748b;">
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background: #e2e8f0;">
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: right;">زاوية الميل</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: right;">سلوك القطع</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: right;">صعوبة التنظيف</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;">0° - 30°</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">تسقط للقاع وتُرفع</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">سهل</td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 12px; border: 1px solid #cbd5e1; color: #dc2626; font-weight: bold;">30° - 60°</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">تنزلق على الجدار</td>
<td style="padding: 12px; border: 1px solid #cbd5e1; color: #dc2626; font-weight: bold;">الأصعب!</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;">60° - 90°</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">تترسب وتشكل سريراً</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">صعب لكن متوقع</td>
</tr>
</tbody>
</table>
</div>

<div style="background: #fee2e2; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #dc2626;">
<h3 style="color: #dc2626; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">⚠️ منطقة 30°-60° الحرجة</h3>
<p style="line-height: 1.8;">في هذه المنطقة، القطع تنزلق على الجانب السفلي باتجاه القاع (لا تبقى ساكنة ولا تُرفع بسهولة). هذا الانزلاق العكسي يجعل التنظيف صعباً جداً.</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 عوامل تحسين تنظيف الحفرة</h3>
<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #059669;">
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #059669;">1️⃣ معدل الضخ (Flow Rate)</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li>أهم عامل في التنظيف</li>
<li>زيادة المعدل تزيد السرعة الحلقية</li>
<li>الحد: قدرة المضخات و ECD المسموح</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #059669;">2️⃣ دوران سلسلة الحفر (Rotation)</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li>الدوران يُحرك القطع ويمنع ترسبها</li>
<li>150+ RPM موصى بها في ERD</li>
<li>الدوران مع الضخ أفضل من الضخ وحده</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #059669;">3️⃣ خصائص الطين</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li>لزوجة عالية (High Viscosity) لحمل القطع</li>
<li>Yield Point مرتفع للحفاظ على القطع معلقة</li>
<li>تنظيف منتظم للطين من القطع الناعمة</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #059669;">4️⃣ تصميم سلسلة الحفر</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li>استخدام Spiral Drill Collar لتحسين التدفق</li>
<li>تجنب المناطق ذات المساحة الحلقية الكبيرة</li>
</ul>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 ممارسات التنظيف في ERD</h3>
<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #2563eb;">
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #1e40af;">Wiper Trips (رحلات التنظيف)</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li>سحب وإنزال سلسلة الحفر لتحريك القطع</li>
<li>تُجرى بانتظام كل عمق معين</li>
<li>الدوران والضخ أثناء الرحلة ضروري</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #1e40af;">Sweep Pills</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li>حبات طين عالية اللزوجة تُضخ دورياً</li>
<li>High-Vis Sweep: لحمل القطع الكبيرة</li>
<li>Tandem Sweep: حبة ثقيلة تتبعها حبة خفيفة</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #1e40af;">مراقبة مؤشرات التنظيف</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li>كمية القطع على الـ Shakers</li>
<li>زيادة T&D = تراكم قطع</li>
<li>ECD مرتفع = حفرة غير نظيفة</li>
</ul>
</div>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>منطقة 30°-60° هي الأصعب في التنظيف</li>
<li>معدل الضخ والدوران هما الأهم</li>
<li>Wiper Trips و Sweep Pills ضروريان</li>
<li>مراقبة T&D و ECD تكشف مشاكل التنظيف</li>
<li>تراكم القطع يسبب انحشار وتلف</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Cuttings Bed', definition: 'سرير القطع - تراكم القطع على الجانب السفلي' },
            { term: 'Annular Velocity', definition: 'السرعة الحلقية - سرعة الطين في الفراغ الحلقي' },
            { term: 'Wiper Trip', definition: 'رحلة تنظيف - سحب وإنزال لتحريك القطع' },
            { term: 'High-Vis Sweep', definition: 'حبة طين عالية اللزوجة لحمل القطع' },
            { term: 'Yield Point', definition: 'نقطة الخضوع - قدرة الطين على إبقاء القطع معلقة' },
          ],
          practiceQuestion: {
            question: 'أي منطقة ميل هي الأصعب في تنظيف الحفرة؟',
            options: [
              '0° - 30°',
              '30° - 60°',
              '60° - 90°',
              '90° فقط'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Hole Cleaning in ERD',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Hole Cleaning Challenge in Extended Reach Wells</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
Hole Cleaning in ERD wells is much harder than in vertical wells. In high-inclination and horizontal sections, cuttings tend to settle on the low side of the wellbore instead of being carried up with the mud.
</p>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="font-size: 1.25rem; margin-bottom: 1rem;">💡 Why is Cleaning Difficult in ERD?</h3>
<p style="line-height: 1.8;">In a vertical well, gravity helps cuttings fall to the bottom and then mud lifts them. In a horizontal well, gravity pulls cuttings to the low side forming a "Cuttings Bed" that accumulates and causes problems.</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Critical Inclination Zones</h3>
<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #64748b;">
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background: #e2e8f0;">
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: left;">Inclination</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: left;">Cuttings Behavior</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: left;">Cleaning Difficulty</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;">0° - 30°</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Fall to bottom and lifted</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Easy</td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 12px; border: 1px solid #cbd5e1; color: #dc2626; font-weight: bold;">30° - 60°</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Slide on wall</td>
<td style="padding: 12px; border: 1px solid #cbd5e1; color: #dc2626; font-weight: bold;">Hardest!</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;">60° - 90°</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Settle and form bed</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Hard but predictable</td>
</tr>
</tbody>
</table>
</div>

<div style="background: #fee2e2; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #dc2626;">
<h3 style="color: #dc2626; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">⚠️ Critical 30°-60° Zone</h3>
<p style="line-height: 1.8;">In this zone, cuttings slide down the low side toward bottom (they don't stay still nor are easily lifted). This reverse sliding makes cleaning very difficult.</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Factors Improving Hole Cleaning</h3>
<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #059669;">
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #059669;">1️⃣ Flow Rate</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li>Most important cleaning factor</li>
<li>Higher rate increases annular velocity</li>
<li>Limit: Pump capacity and allowable ECD</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #059669;">2️⃣ Drillstring Rotation</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li>Rotation agitates cuttings and prevents settling</li>
<li>150+ RPM recommended in ERD</li>
<li>Rotation with pumping better than pumping alone</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #059669;">3️⃣ Mud Properties</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li>High Viscosity to carry cuttings</li>
<li>High Yield Point to keep cuttings suspended</li>
<li>Regular mud cleaning from fine solids</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #059669;">4️⃣ Drillstring Design</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li>Use Spiral Drill Collar to improve flow</li>
<li>Avoid areas with large annular space</li>
</ul>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 ERD Cleaning Practices</h3>
<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #2563eb;">
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #1e40af;">Wiper Trips</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li>Pulling and running drillstring to agitate cuttings</li>
<li>Performed regularly at certain depth intervals</li>
<li>Rotation and pumping during trip essential</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #1e40af;">Sweep Pills</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li>High viscosity mud pills pumped periodically</li>
<li>High-Vis Sweep: to carry large cuttings</li>
<li>Tandem Sweep: heavy pill followed by light pill</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #1e40af;">Monitoring Cleaning Indicators</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li>Cuttings quantity on Shakers</li>
<li>T&D increase = cuttings buildup</li>
<li>High ECD = dirty hole</li>
</ul>
</div>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>30°-60° zone is hardest to clean</li>
<li>Flow rate and rotation are most important</li>
<li>Wiper Trips and Sweep Pills are essential</li>
<li>Monitoring T&D and ECD reveals cleaning problems</li>
<li>Cuttings buildup causes stuck pipe and damage</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Cuttings Bed', definition: 'Accumulation of cuttings on low side' },
            { term: 'Annular Velocity', definition: 'Mud velocity in annular space' },
            { term: 'Wiper Trip', definition: 'Cleaning trip - pulling and running to agitate cuttings' },
            { term: 'High-Vis Sweep', definition: 'High viscosity mud pill to carry cuttings' },
            { term: 'Yield Point', definition: 'Ability of mud to keep cuttings suspended' },
          ],
          practiceQuestion: {
            question: 'Which inclination zone is hardest for hole cleaning?',
            options: [
              '0° - 30°',
              '30° - 60°',
              '60° - 90°',
              '90° only'
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
          title: 'إنزال التغليف والإسمنت في ERD',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 تحديات إنزال التغليف في آبار ERD</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
إنزال التغليف (Casing Running) في آبار ERD من أصعب العمليات. الاحتكاك الكبير قد يمنع وصول التغليف للعمق المطلوب، وإذا توقف التغليف في منتصف الطريق، قد نضطر لسحبه وإعادة المحاولة أو حتى تغيير تصميم البئر.
</p>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="font-size: 1.25rem; margin-bottom: 1rem;">💡 لماذا إنزال التغليف صعب في ERD؟</h3>
<ul style="line-height: 2; padding-right: 1.5rem;">
<li>وزن التغليف قد لا يكفي للتغلب على الاحتكاك</li>
<li>في الأقسام الأفقية، الوزن لا يساعد (لا مكون رأسي)</li>
<li>Buckling (التواء) قد يحدث تحت الضغط</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 تقنيات إنزال التغليف في ERD</h3>
<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #059669;">
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #059669;">1️⃣ الدوران أثناء الإنزال (Rotating While Running)</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li>تحويل الاحتكاك من سحب (Drag) إلى عزم (Torque)</li>
<li>يقلل المقاومة المحورية بشكل كبير</li>
<li>يتطلب وصلات خاصة (Casing Connections) تتحمل الدوران</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #059669;">2️⃣ التعويم (Floatation / Buoyancy)</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li>إنزال التغليف فارغاً أو بسائل خفيف</li>
<li>يقلل القوة الطبيعية على الجدار</li>
<li>Float Collar يمنع دخول الطين</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #059669;">3️⃣ أدوات الدفع (Casing Flotation Devices)</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li>أدوات تُولد قوة دفع للتغليف</li>
<li>تستخدم ضغط الضخ لدفع التغليف للأمام</li>
<li>Hydraulic Tractor هو الأكثر شيوعاً</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #059669;">4️⃣ تقليل الاحتكاك</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li>Centralizers بتصميم منخفض الاحتكاك</li>
<li>مواد تزليق خاصة للتغليف</li>
<li>طين Oil-based لاحتكاك أقل</li>
</ul>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 تحديات الإسمنت في ERD</h3>
<div style="background: #fee2e2; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #dc2626;">
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background: #fecaca;">
<th style="padding: 12px; border: 1px solid #fca5a5; text-align: right;">التحدي</th>
<th style="padding: 12px; border: 1px solid #fca5a5; text-align: right;">السبب</th>
<th style="padding: 12px; border: 1px solid #fca5a5; text-align: right;">الحل</th>
</tr>
</thead>
<tbody>
<tr style="background: #fff;">
<td style="padding: 12px; border: 1px solid #ddd;">فقدان الضغط الكبير</td>
<td style="padding: 12px; border: 1px solid #ddd;">الطول الكبير للبئر</td>
<td style="padding: 12px; border: 1px solid #ddd;">مضخات قوية، Stage Cementing</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;">Free Water</td>
<td style="padding: 12px; border: 1px solid #ddd;">الماء يتجمع في الأعلى</td>
<td style="padding: 12px; border: 1px solid #ddd;">إسمنت Zero Free Water</td>
</tr>
<tr style="background: #fff;">
<td style="padding: 12px; border: 1px solid #ddd;">Channeling</td>
<td style="padding: 12px; border: 1px solid #ddd;">الإسمنت لا يحل محل الطين</td>
<td style="padding: 12px; border: 1px solid #ddd;">Spacers فعالة، الدوران</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;">ECD عالي</td>
<td style="padding: 12px; border: 1px solid #ddd;">الإسمنت أثقل من الطين</td>
<td style="padding: 12px; border: 1px solid #ddd;">إسمنت خفيف، ضخ بطيء</td>
</tr>
</tbody>
</table>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 تصميم الإسمنت في ERD</h3>
<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #2563eb;">
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #1e40af;">خصائص الإسمنت المطلوبة:</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li><strong>Zero Free Water:</strong> لمنع تجمع الماء في الجانب العلوي</li>
<li><strong>كثافة مناسبة:</strong> لتجنب كسر التكوين</li>
<li><strong>وقت ضخ كافي:</strong> لإكمال العملية الطويلة</li>
<li><strong>Anti-Gas Migration:</strong> لمنع هجرة الغاز</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #1e40af;">تسلسل السوائل:</p>
<ol style="padding-right: 1.5rem; line-height: 2;">
<li>Spacer للفصل والتنظيف</li>
<li>Lead Slurry (إسمنت خفيف)</li>
<li>Tail Slurry (إسمنت ثقيل للقاع)</li>
</ol>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 المركزات (Centralizers) في ERD</h3>
<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #f59e0b;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
المركزات ضرورية لتوسيط التغليف وضمان إسمنت متجانس، لكنها تزيد الاحتكاك:
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<ul style="padding-right: 1.5rem; line-height: 2;">
<li><strong>Bow-Spring Centralizers:</strong> مرنة لكن قد تنكسر في الميل العالي</li>
<li><strong>Rigid Centralizers:</strong> أقوى لكن احتكاك أعلى</li>
<li><strong>Roller Centralizers:</strong> احتكاك منخفض جداً (الأفضل لـ ERD)</li>
<li><strong>التوزيع:</strong> أكثر كثافة في مناطق Build و Drop</li>
</ul>
</div>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>الدوران والتعويم يساعدان في إنزال التغليف</li>
<li>Hydraulic Tractors للحالات الصعبة</li>
<li>الإسمنت يجب أن يكون Zero Free Water</li>
<li>Roller Centralizers الأفضل لـ ERD</li>
<li>ECD يجب مراقبته بعناية أثناء الإسمنت</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Casing Flotation', definition: 'تقنية تعويم التغليف لتقليل الاحتكاك' },
            { term: 'Hydraulic Tractor', definition: 'أداة تستخدم الضغط الهيدروليكي لدفع التغليف' },
            { term: 'Zero Free Water', definition: 'إسمنت لا يفصل ماء عند الثبات' },
            { term: 'Channeling', definition: 'قنوات طين تبقى في الإسمنت' },
            { term: 'Roller Centralizers', definition: 'مركزات بعجلات لتقليل الاحتكاك' },
          ],
          practiceQuestion: {
            question: 'ما هي أفضل تقنية لإنزال التغليف في بئر ERD طويل؟',
            options: [
              'الإنزال بدون دوران',
              'الدوران أثناء الإنزال مع التعويم',
              'استخدام وزن ثقيل فقط',
              'زيادة وزن الطين'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Casing Running and Cementing in ERD',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Casing Running Challenges in ERD Wells</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
Casing Running in ERD wells is one of the most difficult operations. High friction may prevent casing from reaching target depth, and if casing stops midway, we may have to pull it and retry or even change well design.
</p>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="font-size: 1.25rem; margin-bottom: 1rem;">💡 Why is Casing Running Difficult in ERD?</h3>
<ul style="line-height: 2; padding-left: 1.5rem;">
<li>Casing weight may not overcome friction</li>
<li>In horizontal sections, weight doesn't help (no vertical component)</li>
<li>Buckling may occur under compression</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 ERD Casing Running Techniques</h3>
<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #059669;">
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #059669;">1️⃣ Rotating While Running</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li>Converts friction from Drag to Torque</li>
<li>Significantly reduces axial resistance</li>
<li>Requires special Casing Connections that handle rotation</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #059669;">2️⃣ Floatation / Buoyancy</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li>Running casing empty or with light fluid</li>
<li>Reduces normal force on wall</li>
<li>Float Collar prevents mud entry</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #059669;">3️⃣ Casing Pushing Devices</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li>Tools that generate pushing force for casing</li>
<li>Use pumping pressure to push casing forward</li>
<li>Hydraulic Tractor is most common</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #059669;">4️⃣ Friction Reduction</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li>Low-friction Centralizer design</li>
<li>Special casing lubricants</li>
<li>Oil-based mud for less friction</li>
</ul>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Cementing Challenges in ERD</h3>
<div style="background: #fee2e2; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #dc2626;">
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background: #fecaca;">
<th style="padding: 12px; border: 1px solid #fca5a5; text-align: left;">Challenge</th>
<th style="padding: 12px; border: 1px solid #fca5a5; text-align: left;">Cause</th>
<th style="padding: 12px; border: 1px solid #fca5a5; text-align: left;">Solution</th>
</tr>
</thead>
<tbody>
<tr style="background: #fff;">
<td style="padding: 12px; border: 1px solid #ddd;">High Pressure Loss</td>
<td style="padding: 12px; border: 1px solid #ddd;">Long well length</td>
<td style="padding: 12px; border: 1px solid #ddd;">Strong pumps, Stage Cementing</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;">Free Water</td>
<td style="padding: 12px; border: 1px solid #ddd;">Water collects on top</td>
<td style="padding: 12px; border: 1px solid #ddd;">Zero Free Water cement</td>
</tr>
<tr style="background: #fff;">
<td style="padding: 12px; border: 1px solid #ddd;">Channeling</td>
<td style="padding: 12px; border: 1px solid #ddd;">Cement doesn't displace mud</td>
<td style="padding: 12px; border: 1px solid #ddd;">Effective Spacers, Rotation</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;">High ECD</td>
<td style="padding: 12px; border: 1px solid #ddd;">Cement heavier than mud</td>
<td style="padding: 12px; border: 1px solid #ddd;">Light cement, slow pumping</td>
</tr>
</tbody>
</table>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Cement Design in ERD</h3>
<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #2563eb;">
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #1e40af;">Required Cement Properties:</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li><strong>Zero Free Water:</strong> Prevent water accumulation on high side</li>
<li><strong>Appropriate Density:</strong> Avoid fracturing formation</li>
<li><strong>Sufficient Thickening Time:</strong> Complete the long operation</li>
<li><strong>Anti-Gas Migration:</strong> Prevent gas migration</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #1e40af;">Fluid Sequence:</p>
<ol style="padding-left: 1.5rem; line-height: 2;">
<li>Spacer for separation and cleaning</li>
<li>Lead Slurry (light cement)</li>
<li>Tail Slurry (heavy cement for bottom)</li>
</ol>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Centralizers in ERD</h3>
<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #f59e0b;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
Centralizers are essential for centering casing and ensuring uniform cement, but they increase friction:
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<ul style="padding-left: 1.5rem; line-height: 2;">
<li><strong>Bow-Spring Centralizers:</strong> Flexible but may break in high inclination</li>
<li><strong>Rigid Centralizers:</strong> Stronger but higher friction</li>
<li><strong>Roller Centralizers:</strong> Very low friction (best for ERD)</li>
<li><strong>Distribution:</strong> More dense in Build and Drop sections</li>
</ul>
</div>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>Rotation and floatation help casing running</li>
<li>Hydraulic Tractors for difficult cases</li>
<li>Cement must be Zero Free Water</li>
<li>Roller Centralizers best for ERD</li>
<li>ECD must be monitored carefully during cementing</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Casing Flotation', definition: 'Technique to float casing to reduce friction' },
            { term: 'Hydraulic Tractor', definition: 'Tool using hydraulic pressure to push casing' },
            { term: 'Zero Free Water', definition: 'Cement that doesn\'t separate water when static' },
            { term: 'Channeling', definition: 'Mud channels remaining in cement' },
            { term: 'Roller Centralizers', definition: 'Centralizers with rollers to reduce friction' },
          ],
          practiceQuestion: {
            question: 'What is the best technique for running casing in a long ERD well?',
            options: [
              'Running without rotation',
              'Rotating while running with floatation',
              'Using heavy weight only',
              'Increasing mud weight'
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
          title: 'مراجعة شاملة - الحفر الممتد المدى',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 مراجعة أسبوع الحفر الممتد المدى (ERD)</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="font-size: 1.25rem; margin-bottom: 1rem;">📚 ملخص المفاهيم الأساسية</h3>
<p style="line-height: 1.8;">ERD هو الحفر الموجه حيث تتجاوز نسبة الإزاحة الأفقية إلى العمق الرأسي (HD/TVD) نسبة 2:1. يُستخدم للوصول لأهداف بعيدة من موقع واحد، مما يوفر تكاليف المنصات ويحمي البيئة.</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 اليوم الأول: المفاهيم الأساسية</h3>
<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #059669;">
<ul style="line-height: 2.2; padding-right: 1.5rem;">
<li><strong>ERD:</strong> HD/TVD > 2:1</li>
<li><strong>Ultra-ERD:</strong> HD/TVD > 3:1</li>
<li><strong>الأرقام القياسية:</strong> أكثر من 15 كم إزاحة أفقية</li>
<li><strong>التطبيقات:</strong> الحفر من الشاطئ، تقليل المنصات، المناطق المحمية</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 اليوم الثاني: العزم والسحب</h3>
<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #2563eb;">
<table style="width: 100%; border-collapse: collapse; background: #fff;">
<thead>
<tr style="background: #e2e8f0;">
<th style="padding: 10px; border: 1px solid #ddd;">المفهوم</th>
<th style="padding: 10px; border: 1px solid #ddd;">التعريف</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">العزم (Torque)</td>
<td style="padding: 10px; border: 1px solid #ddd;">مقاومة الدوران</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">السحب (Drag)</td>
<td style="padding: 10px; border: 1px solid #ddd;">مقاومة الحركة المحورية</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">معامل الاحتكاك (μ)</td>
<td style="padding: 10px; border: 1px solid #ddd;">0.15-0.25 طبيعي</td>
</tr>
</tbody>
</table>
<p style="margin-top: 1rem; font-weight: bold;">الحلول: تقليل DLS، مواد تزليق، Aluminum Drill Pipe</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 اليوم الثالث: تنظيف الحفرة</h3>
<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #f59e0b;">
<ul style="line-height: 2.2; padding-right: 1.5rem;">
<li><strong>المنطقة الحرجة:</strong> 30°-60° (الأصعب)</li>
<li><strong>الحل الرئيسي:</strong> معدل ضخ عالي + دوران 150+ RPM</li>
<li><strong>الممارسات:</strong> Wiper Trips، High-Vis Sweeps</li>
<li><strong>المراقبة:</strong> T&D، ECD، كمية القطع</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 اليوم الرابع: التغليف والإسمنت</h3>
<div style="background: #fee2e2; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #dc2626;">
<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
<div style="flex: 1; min-width: 200px; background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #dc2626;">تقنيات إنزال التغليف:</p>
<ul style="padding-right: 1rem; line-height: 1.8;">
<li>الدوران أثناء الإنزال</li>
<li>التعويم (Floatation)</li>
<li>Hydraulic Tractor</li>
</ul>
</div>
<div style="flex: 1; min-width: 200px; background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #dc2626;">متطلبات الإسمنت:</p>
<ul style="padding-right: 1rem; line-height: 1.8;">
<li>Zero Free Water</li>
<li>Roller Centralizers</li>
<li>مراقبة ECD</li>
</ul>
</div>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 التحديات الأربعة الرئيسية في ERD</h3>
<div style="background: #e8f4f8; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<ol style="padding-right: 1.5rem; line-height: 2.5;">
<li><strong>العزم والسحب:</strong> يمنع الحفر والإنزال</li>
<li><strong>تنظيف الحفرة:</strong> تراكم القطع يسبب انحشار</li>
<li><strong>ECD:</strong> قد يكسر التكوين</li>
<li><strong>إنزال التغليف:</strong> قد لا يصل للقاع</li>
</ol>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 نقاط رئيسية للاختبار</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>ERD = HD/TVD > 2:1</li>
<li>منطقة 30°-60° الأصعب في التنظيف</li>
<li>الدوران يحول Drag إلى Torque</li>
<li>Zero Free Water ضروري للإسمنت</li>
<li>Roller Centralizers الأفضل لـ ERD</li>
</ul>
</div>
</section>`,
          keyTerms: [],
          practiceQuestion: {
            question: 'ما هي نسبة HD/TVD التي تُصنف البئر كـ ERD؟',
            options: [
              '> 1:1',
              '> 2:1',
              '> 3:1',
              '> 4:1'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Comprehensive Review - Extended Reach Drilling',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 ERD Week Review</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="font-size: 1.25rem; margin-bottom: 1rem;">📚 Key Concepts Summary</h3>
<p style="line-height: 1.8;">ERD is directional drilling where the horizontal displacement to true vertical depth ratio (HD/TVD) exceeds 2:1. Used to reach distant targets from one location, saving platform costs and protecting the environment.</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Day 1: Basic Concepts</h3>
<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #059669;">
<ul style="line-height: 2.2; padding-left: 1.5rem;">
<li><strong>ERD:</strong> HD/TVD > 2:1</li>
<li><strong>Ultra-ERD:</strong> HD/TVD > 3:1</li>
<li><strong>World Records:</strong> Over 15 km horizontal displacement</li>
<li><strong>Applications:</strong> Shore to offshore, platform reduction, protected areas</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Day 2: Torque & Drag</h3>
<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #2563eb;">
<table style="width: 100%; border-collapse: collapse; background: #fff;">
<thead>
<tr style="background: #e2e8f0;">
<th style="padding: 10px; border: 1px solid #ddd;">Concept</th>
<th style="padding: 10px; border: 1px solid #ddd;">Definition</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">Torque</td>
<td style="padding: 10px; border: 1px solid #ddd;">Rotational resistance</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">Drag</td>
<td style="padding: 10px; border: 1px solid #ddd;">Axial movement resistance</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">Friction Factor (μ)</td>
<td style="padding: 10px; border: 1px solid #ddd;">0.15-0.25 normal</td>
</tr>
</tbody>
</table>
<p style="margin-top: 1rem; font-weight: bold;">Solutions: Reduce DLS, Lubricants, Aluminum Drill Pipe</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Day 3: Hole Cleaning</h3>
<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #f59e0b;">
<ul style="line-height: 2.2; padding-left: 1.5rem;">
<li><strong>Critical Zone:</strong> 30°-60° (hardest)</li>
<li><strong>Main Solution:</strong> High flow rate + 150+ RPM rotation</li>
<li><strong>Practices:</strong> Wiper Trips, High-Vis Sweeps</li>
<li><strong>Monitoring:</strong> T&D, ECD, cuttings volume</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Day 4: Casing & Cementing</h3>
<div style="background: #fee2e2; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #dc2626;">
<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
<div style="flex: 1; min-width: 200px; background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #dc2626;">Casing Running Techniques:</p>
<ul style="padding-left: 1rem; line-height: 1.8;">
<li>Rotating while running</li>
<li>Floatation</li>
<li>Hydraulic Tractor</li>
</ul>
</div>
<div style="flex: 1; min-width: 200px; background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #dc2626;">Cement Requirements:</p>
<ul style="padding-left: 1rem; line-height: 1.8;">
<li>Zero Free Water</li>
<li>Roller Centralizers</li>
<li>ECD monitoring</li>
</ul>
</div>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Four Main ERD Challenges</h3>
<div style="background: #e8f4f8; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<ol style="padding-left: 1.5rem; line-height: 2.5;">
<li><strong>Torque & Drag:</strong> Prevents drilling and running</li>
<li><strong>Hole Cleaning:</strong> Cuttings buildup causes stuck pipe</li>
<li><strong>ECD:</strong> May fracture formation</li>
<li><strong>Casing Running:</strong> May not reach bottom</li>
</ol>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Key Points for Quiz</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>ERD = HD/TVD > 2:1</li>
<li>30°-60° zone hardest to clean</li>
<li>Rotation converts Drag to Torque</li>
<li>Zero Free Water essential for cement</li>
<li>Roller Centralizers best for ERD</li>
</ul>
</div>
</section>`,
          keyTerms: [],
          practiceQuestion: {
            question: 'What HD/TVD ratio classifies a well as ERD?',
            options: [
              '> 1:1',
              '> 2:1',
              '> 3:1',
              '> 4:1'
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
          title: 'اختبار الحفر الممتد المدى',
          explanation: 'اختبر معلوماتك حول الحفر الممتد المدى',
          keyTerms: [],
        },
        en: {
          title: 'Extended Reach Drilling Quiz',
          explanation: 'Test your knowledge of Extended Reach Drilling',
          keyTerms: [],
        },
      },
      quiz: {
        ar: [
          { question: 'متى يُصنف البئر كـ ERD؟', options: ['HD/TVD > 1:1', 'HD/TVD > 2:1', 'HD/TVD > 3:1', 'الطول > 10000 قدم'], correctAnswer: 1 },
          { question: 'ما هو الرقم القياسي للإزاحة الأفقية في ERD؟', options: ['5 كم', '10 كم', 'أكثر من 15 كم', '20 كم'], correctAnswer: 2 },
          { question: 'ما هو العزم (Torque)؟', options: ['مقاومة الحركة الرأسية', 'مقاومة الدوران', 'ضغط الطين', 'سرعة الحفر'], correctAnswer: 1 },
          { question: 'أي منطقة ميل هي الأصعب في تنظيف الحفرة؟', options: ['0-30°', '30-60°', '60-90°', '90° فقط'], correctAnswer: 1 },
          { question: 'ما هو الحل الأفضل لتقليل السحب؟', options: ['زيادة الوزن', 'مواد تزليق وتقليل DLS', 'زيادة الطين', 'تقليل الدوران'], correctAnswer: 1 },
          { question: 'ما هي وظيفة Wiper Trip؟', options: ['قياس العمق', 'تحريك القطع المترسبة', 'زيادة الضغط', 'تبريد البت'], correctAnswer: 1 },
          { question: 'ما هي أفضل تقنية لإنزال التغليف في ERD؟', options: ['الإنزال بدون دوران', 'الدوران مع التعويم', 'زيادة الوزن فقط', 'تقليل الطين'], correctAnswer: 1 },
          { question: 'ما هي خاصية الإسمنت الضرورية في ERD؟', options: ['كثافة عالية', 'Zero Free Water', 'وقت ضخ قصير', 'لزوجة منخفضة'], correctAnswer: 1 },
          { question: 'ما هو أفضل نوع Centralizers لـ ERD؟', options: ['Bow-Spring', 'Rigid', 'Roller', 'Semi-Rigid'], correctAnswer: 2 },
          { question: 'ما سبب ارتفاع ECD في ERD؟', options: ['قصر البئر', 'فقدان الضغط الكبير في الطول', 'برودة الطين', 'قلة القطع'], correctAnswer: 1 },
        ],
        en: [
          { question: 'When is a well classified as ERD?', options: ['HD/TVD > 1:1', 'HD/TVD > 2:1', 'HD/TVD > 3:1', 'Length > 10000 ft'], correctAnswer: 1 },
          { question: 'What is the world record for horizontal displacement in ERD?', options: ['5 km', '10 km', 'Over 15 km', '20 km'], correctAnswer: 2 },
          { question: 'What is Torque?', options: ['Vertical movement resistance', 'Rotational resistance', 'Mud pressure', 'Drilling speed'], correctAnswer: 1 },
          { question: 'Which inclination zone is hardest for hole cleaning?', options: ['0-30°', '30-60°', '60-90°', '90° only'], correctAnswer: 1 },
          { question: 'What is the best solution to reduce drag?', options: ['Increase weight', 'Lubricants and reduce DLS', 'Increase mud', 'Reduce rotation'], correctAnswer: 1 },
          { question: 'What is the function of a Wiper Trip?', options: ['Measure depth', 'Agitate settled cuttings', 'Increase pressure', 'Cool the bit'], correctAnswer: 1 },
          { question: 'What is the best technique for running casing in ERD?', options: ['Running without rotation', 'Rotation with floatation', 'Increase weight only', 'Reduce mud'], correctAnswer: 1 },
          { question: 'What cement property is essential in ERD?', options: ['High density', 'Zero Free Water', 'Short pumping time', 'Low viscosity'], correctAnswer: 1 },
          { question: 'What is the best type of Centralizers for ERD?', options: ['Bow-Spring', 'Rigid', 'Roller', 'Semi-Rigid'], correctAnswer: 2 },
          { question: 'Why is ECD high in ERD?', options: ['Short well', 'Large pressure loss over length', 'Cold mud', 'Few cuttings'], correctAnswer: 1 },
        ],
      },
    },
    {
      day: 7,
      type: 'project',
      content: {
        ar: {
          title: 'مشروع الحفر الممتد المدى',
          explanation: 'طبق ما تعلمته في مشروع عملي',
          keyTerms: [],
        },
        en: {
          title: 'Extended Reach Drilling Project',
          explanation: 'Apply what you learned in a practical project',
          keyTerms: [],
        },
      },
      project: {
        ar: {
          title: 'تصميم بئر ERD للوصول لهدف بحري من الشاطئ',
          description: 'أنت مهندس حفر في شركة نفط تخطط لتطوير مكمن بحري يقع على بعد 8 كم من الشاطئ. العمق الرأسي للمكمن 2500 متر. القرار الاستراتيجي هو الحفر من الشاطئ بدلاً من بناء منصة بحرية. صمم خطة لهذا البئر.',
          instructions: [
            'احسب نسبة HD/TVD وصنف البئر',
            'حدد التحديات المتوقعة (T&D، تنظيف، ECD) واقترح حلولاً',
            'صمم تكوين سلسلة الحفر (نوع الأنابيب، الوزن)',
            'ضع خطة لتنظيف الحفرة (معدل الضخ، RPM، Sweeps)',
            'صف استراتيجية إنزال التغليف والإسمنت',
          ],
          submissionType: 'text',
        },
        en: {
          title: 'Design ERD Well to Reach Offshore Target from Shore',
          description: 'You are a drilling engineer at an oil company planning to develop an offshore reservoir located 8 km from shore. The vertical depth of the reservoir is 2500 meters. The strategic decision is to drill from shore instead of building an offshore platform. Design a plan for this well.',
          instructions: [
            'Calculate HD/TVD ratio and classify the well',
            'Identify expected challenges (T&D, cleaning, ECD) and suggest solutions',
            'Design drillstring configuration (pipe type, weight)',
            'Create a hole cleaning plan (flow rate, RPM, Sweeps)',
            'Describe casing running and cementing strategy',
          ],
          submissionType: 'text',
        },
      },
    },
  ],
};
