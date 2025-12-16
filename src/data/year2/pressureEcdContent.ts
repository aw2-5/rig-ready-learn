import { WeeklyLesson } from '../weeklyContent';

export const pressureEcdLesson: WeeklyLesson = {
  lessonId: 'pressure-ecd',
  days: [
    {
      day: 1,
      title: 'مفاهيم الضغط الأساسية',
      titleEn: 'Basic Pressure Concepts',
      explanation: `
<h1 style="color: #1a365d;">مفاهيم الضغط الأساسية في عمليات الحفر</h1>
<h1 style="color: #1a365d;">Basic Pressure Concepts in Drilling Operations</h1>

<h2 style="color: #ed8936;">مقدمة | Introduction</h2>
<p>يُعد فهم مفاهيم الضغط من الركائز الأساسية في هندسة الحفر، حيث يؤثر الضغط بشكل مباشر على سلامة العمليات واستقرار البئر. إن التحكم الدقيق في الضغوط المختلفة داخل البئر وخارجه يُمكّن المهندسين من تجنب المشاكل الخطيرة مثل تدفق التكوين (Kick) أو فقدان الدورة (Lost Circulation).</p>
<p>Understanding pressure concepts is fundamental in drilling engineering, as pressure directly affects operational safety and wellbore stability. Precise control of various pressures inside and outside the wellbore enables engineers to avoid serious problems such as formation kicks or lost circulation.</p>

<h2 style="color: #ed8936;">الضغط الهيدروستاتيكي | Hydrostatic Pressure</h2>
<p><strong>التعريف:</strong> الضغط الهيدروستاتيكي هو الضغط الناتج عن عمود السائل الساكن بسبب وزنه. يعتمد على كثافة السائل وارتفاع عمود السائل.</p>
<p><strong>Definition:</strong> Hydrostatic pressure is the pressure exerted by a static fluid column due to its weight. It depends on fluid density and the height of the fluid column.</p>

<h3 style="color: #2c5282;">معادلة الضغط الهيدروستاتيكي | Hydrostatic Pressure Equation</h3>
<p><strong>بالوحدات الميدانية (Field Units):</strong></p>
<p style="background-color: #f0f4f8; padding: 10px; border-radius: 5px; direction: ltr;">
P (psi) = 0.052 × MW (ppg) × TVD (ft)
</p>
<p><strong>بالوحدات المترية (Metric Units):</strong></p>
<p style="background-color: #f0f4f8; padding: 10px; border-radius: 5px; direction: ltr;">
P (kPa) = 0.00981 × MW (kg/m³) × TVD (m)
</p>

<p><strong>حيث:</strong></p>
<ul>
<li>P = الضغط الهيدروستاتيكي (Hydrostatic Pressure)</li>
<li>MW = وزن الطين أو كثافة السائل (Mud Weight / Fluid Density)</li>
<li>TVD = العمق الرأسي الحقيقي (True Vertical Depth)</li>
<li>0.052 = ثابت التحويل للوحدات الميدانية (Conversion constant for field units)</li>
</ul>

<h3 style="color: #2c5282;">مثال عملي | Practical Example</h3>
<p><strong>المعطيات:</strong> وزن الطين = 10 ppg، العمق الرأسي = 10,000 ft</p>
<p><strong>Given:</strong> Mud Weight = 10 ppg, TVD = 10,000 ft</p>
<p style="background-color: #e6fffa; padding: 10px; border-radius: 5px; direction: ltr;">
P = 0.052 × 10 × 10,000 = 5,200 psi
</p>

<h2 style="color: #ed8936;">ضغط التكوين (ضغط المسام) | Formation Pressure (Pore Pressure)</h2>
<p><strong>التعريف:</strong> هو الضغط الموجود داخل مسام الصخور والذي تمارسه السوائل المحتجزة في التكوين الصخري.</p>
<p><strong>Definition:</strong> The pressure existing within rock pores, exerted by fluids trapped in the formation.</p>

<h3 style="color: #2c5282;">أنواع ضغط التكوين | Types of Formation Pressure</h3>
<ul>
<li><strong>الضغط الطبيعي (Normal Pressure):</strong> يساوي الضغط الهيدروستاتيكي لعمود الماء من السطح إلى العمق (8.5-9.0 ppg EMW)</li>
<li><strong>Normal Pressure:</strong> Equals hydrostatic pressure of water column from surface to depth (8.5-9.0 ppg EMW)</li>
<li><strong>الضغط غير الطبيعي المرتفع (Abnormal/Overpressure):</strong> أعلى من الضغط الطبيعي (> 9.0 ppg EMW)</li>
<li><strong>Abnormal/Overpressure:</strong> Higher than normal pressure (> 9.0 ppg EMW)</li>
<li><strong>الضغط المنخفض (Subnormal/Underpressure):</strong> أقل من الضغط الطبيعي (< 8.5 ppg EMW)</li>
<li><strong>Subnormal/Underpressure:</strong> Lower than normal pressure (< 8.5 ppg EMW)</li>
</ul>

<h2 style="color: #ed8936;">ضغط التكسير | Fracture Pressure</h2>
<p><strong>التعريف:</strong> هو الضغط الذي يبدأ عنده التكوين الصخري بالتكسر والانفتاح، مما يسمح بفقدان سائل الحفر.</p>
<p><strong>Definition:</strong> The pressure at which the formation begins to fracture and open, allowing drilling fluid loss.</p>

<h3 style="color: #2c5282;">أهمية ضغط التكسير | Importance of Fracture Pressure</h3>
<ul>
<li>يحدد الحد الأعلى لوزن الطين المسموح به</li>
<li>Determines the upper limit of allowable mud weight</li>
<li>يُستخدم في تصميم برنامج التغليف (Casing Program)</li>
<li>Used in designing the casing program</li>
<li>يؤثر على اختيار عمق تركيب الأنابيب</li>
<li>Affects selection of casing setting depth</li>
</ul>

<h2 style="color: #ed8936;">نافذة وزن الطين | Mud Weight Window</h2>
<p>نافذة وزن الطين هي النطاق الآمن لوزن الطين بين ضغط المسام وضغط التكسير. يجب أن يكون وزن الطين:</p>
<p>The mud weight window is the safe range between pore pressure and fracture pressure. Mud weight must be:</p>
<ul>
<li><strong>أعلى من:</strong> ضغط المسام + هامش أمان (لمنع تدفق التكوين)</li>
<li><strong>Higher than:</strong> Pore pressure + safety margin (to prevent formation influx)</li>
<li><strong>أقل من:</strong> ضغط التكسير - هامش أمان (لمنع فقدان الدورة)</li>
<li><strong>Lower than:</strong> Fracture pressure - safety margin (to prevent lost circulation)</li>
</ul>

<p style="color: #c53030;"><strong>ملاحظة هامة:</strong> في بعض الآبار العميقة أو المعقدة، قد تكون نافذة وزن الطين ضيقة جداً، مما يتطلب تقنيات خاصة مثل الحفر بالضغط المتحكم (MPD).</p>
<p style="color: #c53030;"><strong>Important Note:</strong> In some deep or complex wells, the mud weight window may be very narrow, requiring special techniques such as Managed Pressure Drilling (MPD).</p>
`,
      keyTerms: [
        { term: 'الضغط الهيدروستاتيكي', definition: 'الضغط الناتج عن وزن عمود السائل الساكن', termEn: 'Hydrostatic Pressure', definitionEn: 'Pressure exerted by the weight of a static fluid column' },
        { term: 'ضغط المسام', definition: 'الضغط الموجود داخل مسام الصخور من السوائل المحتجزة', termEn: 'Pore Pressure', definitionEn: 'Pressure within rock pores from trapped fluids' },
        { term: 'ضغط التكسير', definition: 'الضغط الذي يبدأ عنده التكوين بالتكسر', termEn: 'Fracture Pressure', definitionEn: 'Pressure at which formation begins to fracture' },
        { term: 'نافذة وزن الطين', definition: 'النطاق الآمن لوزن الطين بين ضغط المسام وضغط التكسير', termEn: 'Mud Weight Window', definitionEn: 'Safe mud weight range between pore and fracture pressures' },
        { term: 'العمق الرأسي الحقيقي', definition: 'المسافة الرأسية من السطح إلى نقطة في البئر', termEn: 'True Vertical Depth (TVD)', definitionEn: 'Vertical distance from surface to a point in the well' }
      ],
      practiceQuestion: {
        question: 'إذا كان وزن الطين 12 ppg والعمق الرأسي 8,000 ft، ما هو الضغط الهيدروستاتيكي؟',
        questionEn: 'If mud weight is 12 ppg and TVD is 8,000 ft, what is the hydrostatic pressure?',
        options: ['3,744 psi', '4,992 psi', '4,160 psi', '5,200 psi'],
        correctAnswer: 1,
        explanation: 'P = 0.052 × 12 × 8,000 = 4,992 psi',
        explanationEn: 'P = 0.052 × 12 × 8,000 = 4,992 psi'
      }
    },
    {
      day: 2,
      title: 'كثافة الدورة المكافئة (ECD)',
      titleEn: 'Equivalent Circulating Density (ECD)',
      explanation: `
<h1 style="color: #1a365d;">كثافة الدورة المكافئة (ECD)</h1>
<h1 style="color: #1a365d;">Equivalent Circulating Density (ECD)</h1>

<h2 style="color: #ed8936;">مقدمة | Introduction</h2>
<p>كثافة الدورة المكافئة (ECD) هي الكثافة الفعالة التي يمارسها سائل الحفر على التكوين أثناء الدورة. تزداد عن الكثافة الساكنة بسبب فقدان الضغط الناتج عن احتكاك السائل أثناء التدفق في الحيز الحلقي.</p>
<p>Equivalent Circulating Density (ECD) is the effective density exerted by drilling fluid on the formation during circulation. It increases above static density due to pressure losses from fluid friction while flowing in the annulus.</p>

<h2 style="color: #ed8936;">معادلة ECD | ECD Equation</h2>
<p style="background-color: #f0f4f8; padding: 10px; border-radius: 5px; direction: ltr;">
ECD (ppg) = MW (ppg) + [APL (psi) / (0.052 × TVD (ft))]
</p>

<p><strong>حيث:</strong></p>
<ul>
<li>ECD = كثافة الدورة المكافئة (Equivalent Circulating Density)</li>
<li>MW = وزن الطين الساكن (Static Mud Weight)</li>
<li>APL = فقدان الضغط في الحيز الحلقي (Annular Pressure Loss)</li>
<li>TVD = العمق الرأسي الحقيقي (True Vertical Depth)</li>
</ul>

<h3 style="color: #2c5282;">مثال حسابي | Calculation Example</h3>
<p><strong>المعطيات:</strong></p>
<ul>
<li>وزن الطين = 11.5 ppg</li>
<li>فقدان الضغط الحلقي = 400 psi</li>
<li>العمق الرأسي = 12,000 ft</li>
</ul>
<p><strong>Given:</strong></p>
<ul>
<li>Mud Weight = 11.5 ppg</li>
<li>Annular Pressure Loss = 400 psi</li>
<li>TVD = 12,000 ft</li>
</ul>

<p style="background-color: #e6fffa; padding: 10px; border-radius: 5px; direction: ltr;">
ECD = 11.5 + [400 / (0.052 × 12,000)]<br>
ECD = 11.5 + [400 / 624]<br>
ECD = 11.5 + 0.64 = 12.14 ppg
</p>

<h2 style="color: #ed8936;">العوامل المؤثرة على ECD | Factors Affecting ECD</h2>

<h3 style="color: #2c5282;">1. معدل الضخ (Pump Rate)</h3>
<p>زيادة معدل الضخ تزيد من سرعة التدفق في الحيز الحلقي، مما يرفع فقدان الضغط وبالتالي ECD.</p>
<p>Increasing pump rate increases annular flow velocity, raising pressure loss and thus ECD.</p>

<h3 style="color: #2c5282;">2. خصائص الطين الريولوجية (Mud Rheological Properties)</h3>
<ul>
<li><strong>اللزوجة البلاستيكية (PV):</strong> زيادتها ترفع ECD</li>
<li><strong>Plastic Viscosity (PV):</strong> Increasing it raises ECD</li>
<li><strong>نقطة الخضوع (YP):</strong> تأثير كبير على ECD خاصة في المعدلات المنخفضة</li>
<li><strong>Yield Point (YP):</strong> Significant effect on ECD especially at low rates</li>
<li><strong>قوة الجل (Gel Strength):</strong> تؤثر عند بدء الدورة بعد التوقف</li>
<li><strong>Gel Strength:</strong> Affects ECD when starting circulation after stops</li>
</ul>

<h3 style="color: #2c5282;">3. هندسة البئر (Wellbore Geometry)</h3>
<ul>
<li><strong>قطر الحفرة:</strong> الحفرة الأصغر = فجوة حلقية أضيق = ECD أعلى</li>
<li><strong>Hole Diameter:</strong> Smaller hole = narrower annulus = higher ECD</li>
<li><strong>قطر سلسلة الحفر:</strong> أدوات أكبر تقلل الفجوة وترفع ECD</li>
<li><strong>Drillstring Diameter:</strong> Larger tools reduce clearance and raise ECD</li>
</ul>

<h3 style="color: #2c5282;">4. نسبة تحميل الفتات (Cuttings Loading)</h3>
<p>وجود الفتات في الحيز الحلقي يزيد من الكثافة الفعالة والاحتكاك، مما يرفع ECD.</p>
<p>Presence of cuttings in the annulus increases effective density and friction, raising ECD.</p>

<h2 style="color: #ed8936;">أهمية مراقبة ECD | Importance of ECD Monitoring</h2>
<ul>
<li><strong>تجنب فقدان الدورة:</strong> إذا تجاوز ECD ضغط التكسير</li>
<li><strong>Avoid Lost Circulation:</strong> If ECD exceeds fracture pressure</li>
<li><strong>تجنب عدم استقرار البئر:</strong> التحكم في الضغط على جدران الحفرة</li>
<li><strong>Avoid Wellbore Instability:</strong> Control pressure on hole walls</li>
<li><strong>تحسين معدل الاختراق:</strong> ECD مرتفع جداً يقلل ROP</li>
<li><strong>Optimize Penetration Rate:</strong> Very high ECD reduces ROP</li>
</ul>

<h2 style="color: #ed8936;">ECD أثناء العمليات المختلفة | ECD During Various Operations</h2>
<table style="width: 100%; border-collapse: collapse; margin: 10px 0;">
<tr style="background-color: #2c5282; color: white;">
<th style="border: 1px solid #ddd; padding: 8px;">العملية | Operation</th>
<th style="border: 1px solid #ddd; padding: 8px;">تأثير على ECD | Effect on ECD</th>
</tr>
<tr>
<td style="border: 1px solid #ddd; padding: 8px;">الحفر العادي | Normal Drilling</td>
<td style="border: 1px solid #ddd; padding: 8px;">ECD معتدل | Moderate ECD</td>
</tr>
<tr style="background-color: #f7fafc;">
<td style="border: 1px solid #ddd; padding: 8px;">إنزال الأنابيب | Running Pipe</td>
<td style="border: 1px solid #ddd; padding: 8px;">ارتفاع مؤقت (Surge) | Temporary increase (Surge)</td>
</tr>
<tr>
<td style="border: 1px solid #ddd; padding: 8px;">سحب الأنابيب | Pulling Pipe</td>
<td style="border: 1px solid #ddd; padding: 8px;">انخفاض مؤقت (Swab) | Temporary decrease (Swab)</td>
</tr>
<tr style="background-color: #f7fafc;">
<td style="border: 1px solid #ddd; padding: 8px;">توقف الدورة | Circulation Stop</td>
<td style="border: 1px solid #ddd; padding: 8px;">يعود إلى الكثافة الساكنة | Returns to static density</td>
</tr>
</table>

<p style="color: #c53030;"><strong>تحذير:</strong> يجب مراقبة ECD باستمرار خاصة في الآبار ذات نافذة وزن الطين الضيقة لتجنب المشاكل الخطيرة.</p>
<p style="color: #c53030;"><strong>Warning:</strong> ECD must be monitored continuously especially in wells with narrow mud weight windows to avoid serious problems.</p>
`,
      keyTerms: [
        { term: 'كثافة الدورة المكافئة', definition: 'الكثافة الفعالة أثناء الدورة تشمل تأثير فقدان الضغط', termEn: 'Equivalent Circulating Density (ECD)', definitionEn: 'Effective density during circulation including pressure loss effect' },
        { term: 'فقدان الضغط الحلقي', definition: 'فقدان الضغط الناتج عن احتكاك السائل في الحيز الحلقي', termEn: 'Annular Pressure Loss (APL)', definitionEn: 'Pressure loss from fluid friction in the annulus' },
        { term: 'ضغط الاندفاع', definition: 'الزيادة المؤقتة في ضغط قاع البئر عند إنزال الأنابيب', termEn: 'Surge Pressure', definitionEn: 'Temporary increase in bottomhole pressure when running pipe' },
        { term: 'ضغط السحب', definition: 'الانخفاض المؤقت في ضغط قاع البئر عند سحب الأنابيب', termEn: 'Swab Pressure', definitionEn: 'Temporary decrease in bottomhole pressure when pulling pipe' }
      ],
      practiceQuestion: {
        question: 'إذا كان وزن الطين 10 ppg وفقدان الضغط الحلقي 300 psi والعمق 10,000 ft، ما هو ECD؟',
        questionEn: 'If mud weight is 10 ppg, annular pressure loss is 300 psi, and depth is 10,000 ft, what is ECD?',
        options: ['10.58 ppg', '10.42 ppg', '11.00 ppg', '10.30 ppg'],
        correctAnswer: 0,
        explanation: 'ECD = 10 + [300 / (0.052 × 10,000)] = 10 + 0.577 = 10.58 ppg',
        explanationEn: 'ECD = 10 + [300 / (0.052 × 10,000)] = 10 + 0.577 = 10.58 ppg'
      }
    },
    {
      day: 3,
      title: 'حسابات فقدان الضغط',
      titleEn: 'Pressure Loss Calculations',
      explanation: `
<h1 style="color: #1a365d;">حسابات فقدان الضغط في نظام الدورة</h1>
<h1 style="color: #1a365d;">Pressure Loss Calculations in the Circulating System</h1>

<h2 style="color: #ed8936;">مقدمة | Introduction</h2>
<p>يتعرض سائل الحفر لفقدان ضغط أثناء مروره عبر مكونات نظام الدورة المختلفة. فهم هذه الفقودات ضروري لتصميم البرنامج الهيدروليكي وتحسين أداء الحفر.</p>
<p>Drilling fluid experiences pressure losses as it passes through various components of the circulation system. Understanding these losses is essential for designing the hydraulic program and optimizing drilling performance.</p>

<h2 style="color: #ed8936;">مكونات فقدان الضغط الكلي | Total Pressure Loss Components</h2>
<p style="background-color: #f0f4f8; padding: 10px; border-radius: 5px; direction: ltr;">
ΔP<sub>total</sub> = ΔP<sub>surface</sub> + ΔP<sub>drillstring</sub> + ΔP<sub>bit</sub> + ΔP<sub>annulus</sub>
</p>

<h3 style="color: #2c5282;">1. فقدان الضغط السطحي (Surface Pressure Loss)</h3>
<p>يشمل الفقدان في:</p>
<ul>
<li>خطوط السطح (Surface Lines)</li>
<li>الرأس الدوار أو Top Drive</li>
<li>المعدات السطحية الأخرى</li>
</ul>
<p>عادة يُقدر بـ 50-150 psi حسب المعدات.</p>
<p>Usually estimated at 50-150 psi depending on equipment.</p>

<h3 style="color: #2c5282;">2. فقدان الضغط في سلسلة الحفر (Drillstring Pressure Loss)</h3>
<p>يشمل الفقدان في:</p>
<ul>
<li><strong>أنابيب الحفر (Drill Pipe):</strong> الجزء الأكبر من الفقدان الداخلي</li>
<li><strong>الأنابيب الثقيلة (Heavy Weight Drill Pipe)</strong></li>
<li><strong>أطواق الحفر (Drill Collars):</strong> قطر داخلي أصغر = فقدان أعلى لكل قدم</li>
<li><strong>المحرك القاعي (Downhole Motor):</strong> إذا وجد</li>
</ul>

<h3 style="color: #2c5282;">3. فقدان الضغط في الدقاق (Bit Pressure Loss)</h3>
<p>الفقدان الأهم للتحكم به لتحسين تنظيف قاع البئر. يُحسب من:</p>
<p style="background-color: #f0f4f8; padding: 10px; border-radius: 5px; direction: ltr;">
ΔP<sub>bit</sub> = (ρ × Q²) / (12,032 × C<sub>d</sub>² × TFA²)
</p>
<p><strong>حيث:</strong></p>
<ul>
<li>ρ = كثافة الطين (ppg)</li>
<li>Q = معدل التدفق (gpm)</li>
<li>C<sub>d</sub> = معامل التصريف (عادة 0.95)</li>
<li>TFA = المساحة الكلية للفتحات (in²)</li>
</ul>

<h3 style="color: #2c5282;">4. فقدان الضغط في الحيز الحلقي (Annular Pressure Loss)</h3>
<p>الفقدان الذي يؤثر مباشرة على ECD. يعتمد على:</p>
<ul>
<li>خصائص الطين الريولوجية</li>
<li>سرعة التدفق الحلقي</li>
<li>هندسة الحيز الحلقي</li>
<li>خشونة السطح</li>
</ul>

<h2 style="color: #ed8936;">نماذج حساب فقدان الضغط | Pressure Loss Calculation Models</h2>

<h3 style="color: #2c5282;">نموذج بينغهام البلاستيكي | Bingham Plastic Model</h3>
<p>للتدفق الصفائحي (Laminar Flow) في الأنابيب:</p>
<p style="background-color: #f0f4f8; padding: 10px; border-radius: 5px; direction: ltr;">
ΔP = (PV × L × V) / (1,500 × D²) + (YP × L) / (225 × D)
</p>

<h3 style="color: #2c5282;">نموذج قانون القوة | Power Law Model</h3>
<p>أكثر دقة للسوائل غير النيوتونية:</p>
<p style="background-color: #f0f4f8; padding: 10px; border-radius: 5px; direction: ltr;">
n = 3.32 × log(θ<sub>600</sub>/θ<sub>300</sub>)<br>
K = θ<sub>300</sub> / 511<sup>n</sup>
</p>

<h2 style="color: #ed8936;">توزيع فقدان الضغط النموذجي | Typical Pressure Loss Distribution</h2>
<table style="width: 100%; border-collapse: collapse; margin: 10px 0;">
<tr style="background-color: #2c5282; color: white;">
<th style="border: 1px solid #ddd; padding: 8px;">المكون | Component</th>
<th style="border: 1px solid #ddd; padding: 8px;">النسبة المئوية | Percentage</th>
</tr>
<tr>
<td style="border: 1px solid #ddd; padding: 8px;">المعدات السطحية | Surface Equipment</td>
<td style="border: 1px solid #ddd; padding: 8px;">3-5%</td>
</tr>
<tr style="background-color: #f7fafc;">
<td style="border: 1px solid #ddd; padding: 8px;">أنابيب الحفر | Drill Pipe</td>
<td style="border: 1px solid #ddd; padding: 8px;">15-25%</td>
</tr>
<tr>
<td style="border: 1px solid #ddd; padding: 8px;">أطواق الحفر | Drill Collars</td>
<td style="border: 1px solid #ddd; padding: 8px;">5-10%</td>
</tr>
<tr style="background-color: #f7fafc;">
<td style="border: 1px solid #ddd; padding: 8px;">الدقاق | Bit</td>
<td style="border: 1px solid #ddd; padding: 8px;">50-65%</td>
</tr>
<tr>
<td style="border: 1px solid #ddd; padding: 8px;">الحيز الحلقي | Annulus</td>
<td style="border: 1px solid #ddd; padding: 8px;">10-20%</td>
</tr>
</table>

<h2 style="color: #ed8936;">تحسين فقدان الضغط في الدقاق | Optimizing Bit Pressure Loss</h2>
<p>للحصول على أقصى قوة تأثير هيدروليكية (Hydraulic Impact Force):</p>
<ul>
<li>يجب أن يكون فقدان الضغط في الدقاق ≈ 65% من الضغط الكلي</li>
<li>Bit pressure loss should be ≈ 65% of total pressure</li>
</ul>
<p>للحصول على أقصى قدرة هيدروليكية (Hydraulic Horsepower):</p>
<ul>
<li>يجب أن يكون فقدان الضغط في الدقاق ≈ 50% من الضغط الكلي</li>
<li>Bit pressure loss should be ≈ 50% of total pressure</li>
</ul>

<p style="color: #c53030;"><strong>ملاحظة:</strong> يتم التحكم في فقدان الضغط في الدقاق عن طريق تغيير حجم الفوهات (Nozzles).</p>
<p style="color: #c53030;"><strong>Note:</strong> Bit pressure loss is controlled by changing nozzle sizes.</p>
`,
      keyTerms: [
        { term: 'فقدان الضغط الكلي', definition: 'مجموع كل فقودات الضغط في نظام الدورة', termEn: 'Total Pressure Loss', definitionEn: 'Sum of all pressure losses in circulation system' },
        { term: 'نموذج بينغهام البلاستيكي', definition: 'نموذج ريولوجي يستخدم PV و YP لوصف سلوك السائل', termEn: 'Bingham Plastic Model', definitionEn: 'Rheological model using PV and YP to describe fluid behavior' },
        { term: 'نموذج قانون القوة', definition: 'نموذج ريولوجي يستخدم n و K لوصف السوائل غير النيوتونية', termEn: 'Power Law Model', definitionEn: 'Rheological model using n and K for non-Newtonian fluids' },
        { term: 'المساحة الكلية للفتحات', definition: 'مجموع مساحات فتحات فوهات الدقاق', termEn: 'Total Flow Area (TFA)', definitionEn: 'Sum of bit nozzle areas' }
      ],
      practiceQuestion: {
        question: 'ما هي النسبة المثلى لفقدان الضغط في الدقاق للحصول على أقصى قدرة هيدروليكية؟',
        questionEn: 'What is the optimal bit pressure loss percentage for maximum hydraulic horsepower?',
        options: ['35%', '50%', '65%', '80%'],
        correctAnswer: 1,
        explanation: 'للحصول على أقصى قدرة هيدروليكية، يجب أن يكون فقدان الضغط في الدقاق حوالي 50% من الضغط الكلي',
        explanationEn: 'For maximum hydraulic horsepower, bit pressure loss should be approximately 50% of total pressure'
      }
    },
    {
      day: 4,
      title: 'ضغط قاع البئر وتوازن الآبار',
      titleEn: 'Bottomhole Pressure and Well Balance',
      explanation: `
<h1 style="color: #1a365d;">ضغط قاع البئر وتوازن الآبار</h1>
<h1 style="color: #1a365d;">Bottomhole Pressure and Well Balance</h1>

<h2 style="color: #ed8936;">مقدمة | Introduction</h2>
<p>ضغط قاع البئر (BHP) هو الضغط الكلي عند أعمق نقطة في البئر المكشوفة. التحكم الدقيق في هذا الضغط أساسي للحفاظ على سلامة البئر ومنع المشاكل.</p>
<p>Bottomhole Pressure (BHP) is the total pressure at the deepest open point in the well. Precise control of this pressure is fundamental for maintaining well safety and preventing problems.</p>

<h2 style="color: #ed8936;">أنواع ضغط قاع البئر | Types of Bottomhole Pressure</h2>

<h3 style="color: #2c5282;">1. ضغط قاع البئر الساكن (Static BHP)</h3>
<p>الضغط عند قاع البئر بدون دورة (المضخات متوقفة):</p>
<p style="background-color: #f0f4f8; padding: 10px; border-radius: 5px; direction: ltr;">
BHP<sub>static</sub> = 0.052 × MW × TVD
</p>

<h3 style="color: #2c5282;">2. ضغط قاع البئر الديناميكي (Dynamic BHP)</h3>
<p>الضغط عند قاع البئر أثناء الدورة:</p>
<p style="background-color: #f0f4f8; padding: 10px; border-radius: 5px; direction: ltr;">
BHP<sub>dynamic</sub> = 0.052 × ECD × TVD
</p>
<p>أو:</p>
<p style="background-color: #f0f4f8; padding: 10px; border-radius: 5px; direction: ltr;">
BHP<sub>dynamic</sub> = BHP<sub>static</sub> + APL
</p>

<h2 style="color: #ed8936;">حالات توازن البئر | Well Balance Conditions</h2>

<h3 style="color: #2c5282;">1. البئر المتوازن (Balanced Well)</h3>
<p>عندما يكون: BHP = ضغط التكوين</p>
<p>When: BHP = Formation Pressure</p>
<ul>
<li>لا يوجد تدفق من التكوين</li>
<li>No flow from formation</li>
<li>لا يوجد فقدان للسائل في التكوين</li>
<li>No fluid loss to formation</li>
</ul>

<h3 style="color: #2c5282;">2. البئر المفرط التوازن (Overbalanced Well)</h3>
<p>عندما يكون: BHP > ضغط التكوين</p>
<p>When: BHP > Formation Pressure</p>
<ul>
<li><strong>المزايا:</strong> منع تدفق التكوين، استقرار جدار البئر</li>
<li><strong>Advantages:</strong> Prevent formation influx, wellbore stability</li>
<li><strong>العيوب:</strong> احتمال فقدان الدورة، تقليل معدل الاختراق، تلف التكوين</li>
<li><strong>Disadvantages:</strong> Possible lost circulation, reduced ROP, formation damage</li>
</ul>

<h3 style="color: #2c5282;">3. البئر ناقص التوازن (Underbalanced Well)</h3>
<p>عندما يكون: BHP < ضغط التكوين</p>
<p>When: BHP < Formation Pressure</p>
<ul>
<li><strong>المزايا:</strong> زيادة معدل الاختراق، تقليل تلف التكوين، تحسين الإنتاج</li>
<li><strong>Advantages:</strong> Increased ROP, reduced formation damage, improved production</li>
<li><strong>العيوب:</strong> خطر تدفق التكوين، يتطلب معدات خاصة</li>
<li><strong>Disadvantages:</strong> Risk of formation influx, requires special equipment</li>
</ul>

<h2 style="color: #ed8936;">هامش الأفراط في التوازن | Overbalance Margin</h2>
<p style="background-color: #f0f4f8; padding: 10px; border-radius: 5px; direction: ltr;">
Overbalance = BHP - Formation Pressure
</p>

<h3 style="color: #2c5282;">القيم الموصى بها | Recommended Values</h3>
<table style="width: 100%; border-collapse: collapse; margin: 10px 0;">
<tr style="background-color: #2c5282; color: white;">
<th style="border: 1px solid #ddd; padding: 8px;">نوع البئر | Well Type</th>
<th style="border: 1px solid #ddd; padding: 8px;">الهامش الموصى (psi) | Recommended Margin</th>
</tr>
<tr>
<td style="border: 1px solid #ddd; padding: 8px;">آبار عادية | Normal Wells</td>
<td style="border: 1px solid #ddd; padding: 8px;">200-500 psi</td>
</tr>
<tr style="background-color: #f7fafc;">
<td style="border: 1px solid #ddd; padding: 8px;">آبار ضغط عالي | High Pressure Wells</td>
<td style="border: 1px solid #ddd; padding: 8px;">500-1000 psi</td>
</tr>
<tr>
<td style="border: 1px solid #ddd; padding: 8px;">آبار حرجة | Critical Wells</td>
<td style="border: 1px solid #ddd; padding: 8px;">حسب التقييم | As per evaluation</td>
</tr>
</table>

<h2 style="color: #ed8936;">التعبير عن الضغط بوحدة EMW | Expressing Pressure as EMW</h2>
<p>الوزن المكافئ للطين (EMW) يحول أي ضغط إلى كثافة مكافئة:</p>
<p>Equivalent Mud Weight (EMW) converts any pressure to equivalent density:</p>
<p style="background-color: #f0f4f8; padding: 10px; border-radius: 5px; direction: ltr;">
EMW (ppg) = P (psi) / (0.052 × TVD (ft))
</p>

<h3 style="color: #2c5282;">مثال | Example</h3>
<p><strong>المعطيات:</strong> ضغط التكوين = 6,000 psi، العمق = 12,000 ft</p>
<p><strong>Given:</strong> Formation Pressure = 6,000 psi, TVD = 12,000 ft</p>
<p style="background-color: #e6fffa; padding: 10px; border-radius: 5px; direction: ltr;">
EMW = 6,000 / (0.052 × 12,000) = 9.62 ppg
</p>

<h2 style="color: #ed8936;">تأثير حركة الأنابيب على BHP | Effect of Pipe Movement on BHP</h2>

<h3 style="color: #2c5282;">ضغط الاندفاع (Surge)</h3>
<p>زيادة مؤقتة في BHP عند إنزال الأنابيب بسبب:</p>
<p>Temporary BHP increase when running pipe due to:</p>
<ul>
<li>إزاحة السائل أمام الأنابيب</li>
<li>Fluid displacement ahead of pipe</li>
<li>يمكن أن يسبب تكسير التكوين</li>
<li>Can cause formation fracturing</li>
</ul>

<h3 style="color: #2c5282;">ضغط السحب (Swab)</h3>
<p>انخفاض مؤقت في BHP عند سحب الأنابيب بسبب:</p>
<p>Temporary BHP decrease when pulling pipe due to:</p>
<ul>
<li>سحب السائل خلف الأنابيب</li>
<li>Fluid being pulled behind pipe</li>
<li>يمكن أن يسبب تدفق التكوين (Kick)</li>
<li>Can cause formation influx (Kick)</li>
</ul>

<h3 style="color: #2c5282;">تقليل ضغط Surge/Swab | Reducing Surge/Swab</h3>
<ul>
<li>تقليل سرعة حركة الأنابيب</li>
<li>Reduce pipe running/pulling speed</li>
<li>استخدام أنابيب مع فتحات تعبئة (Float Subs)</li>
<li>Use pipe with fill-up subs</li>
<li>تقليل لزوجة الطين</li>
<li>Reduce mud viscosity</li>
</ul>

<p style="color: #c53030;"><strong>تحذير:</strong> يجب حساب ضغوط Surge و Swab دائماً قبل عمليات إنزال وسحب الأنابيب للتأكد من البقاء ضمن نافذة وزن الطين.</p>
<p style="color: #c53030;"><strong>Warning:</strong> Surge and Swab pressures must always be calculated before running and pulling operations to ensure staying within the mud weight window.</p>
`,
      keyTerms: [
        { term: 'ضغط قاع البئر', definition: 'الضغط الكلي عند أعمق نقطة مكشوفة في البئر', termEn: 'Bottomhole Pressure (BHP)', definitionEn: 'Total pressure at deepest open point in well' },
        { term: 'البئر المفرط التوازن', definition: 'حالة يكون فيها ضغط قاع البئر أعلى من ضغط التكوين', termEn: 'Overbalanced Well', definitionEn: 'Condition where BHP exceeds formation pressure' },
        { term: 'الوزن المكافئ للطين', definition: 'تحويل الضغط إلى كثافة طين مكافئة', termEn: 'Equivalent Mud Weight (EMW)', definitionEn: 'Converting pressure to equivalent mud density' },
        { term: 'ضغط الاندفاع والسحب', definition: 'تغيرات مؤقتة في BHP بسبب حركة الأنابيب', termEn: 'Surge and Swab Pressure', definitionEn: 'Temporary BHP changes due to pipe movement' }
      ],
      practiceQuestion: {
        question: 'إذا كان ضغط التكوين 5,200 psi على عمق 10,000 ft، ما هو الوزن المكافئ للطين (EMW)؟',
        questionEn: 'If formation pressure is 5,200 psi at 10,000 ft depth, what is the EMW?',
        options: ['9.0 ppg', '10.0 ppg', '10.5 ppg', '11.0 ppg'],
        correctAnswer: 1,
        explanation: 'EMW = 5,200 / (0.052 × 10,000) = 5,200 / 520 = 10.0 ppg',
        explanationEn: 'EMW = 5,200 / (0.052 × 10,000) = 5,200 / 520 = 10.0 ppg'
      }
    },
    {
      day: 5,
      title: 'التطبيقات العملية والحسابات المتكاملة',
      titleEn: 'Practical Applications and Integrated Calculations',
      explanation: `
<h1 style="color: #1a365d;">التطبيقات العملية وحسابات الضغط المتكاملة</h1>
<h1 style="color: #1a365d;">Practical Applications and Integrated Pressure Calculations</h1>

<h2 style="color: #ed8936;">مقدمة | Introduction</h2>
<p>في هذا الدرس، سنجمع كل المفاهيم السابقة ونطبقها في سيناريوهات واقعية من الميدان، مع أمثلة حسابية شاملة.</p>
<p>In this lesson, we will combine all previous concepts and apply them in realistic field scenarios, with comprehensive calculation examples.</p>

<h2 style="color: #ed8936;">مثال شامل 1: تصميم وزن الطين | Example 1: Mud Weight Design</h2>

<h3 style="color: #2c5282;">المعطيات | Given Data</h3>
<ul>
<li>العمق الرأسي (TVD) = 15,000 ft</li>
<li>ضغط المسام = 7,020 psi (EMW = 9.0 ppg)</li>
<li>ضغط التكسير = 11,700 psi (EMW = 15.0 ppg)</li>
<li>فقدان الضغط الحلقي المتوقع = 350 psi</li>
</ul>

<h3 style="color: #2c5282;">المطلوب | Required</h3>
<ol>
<li>تحديد نافذة وزن الطين</li>
<li>اختيار وزن الطين المناسب</li>
<li>حساب ECD والتحقق من عدم تجاوز ضغط التكسير</li>
</ol>

<h3 style="color: #2c5282;">الحل | Solution</h3>
<p><strong>الخطوة 1: نافذة وزن الطين</strong></p>
<ul>
<li>الحد الأدنى = ضغط المسام EMW + هامش أمان = 9.0 + 0.3 = 9.3 ppg</li>
<li>الحد الأعلى = ضغط التكسير EMW - هامش أمان = 15.0 - 0.5 = 14.5 ppg</li>
</ul>

<p><strong>الخطوة 2: اختيار وزن الطين</strong></p>
<p>نختار وزن طين = 10.0 ppg (ضمن النافذة مع هامش آمن)</p>
<p>We select mud weight = 10.0 ppg (within window with safe margin)</p>

<p><strong>الخطوة 3: حساب ECD</strong></p>
<p style="background-color: #e6fffa; padding: 10px; border-radius: 5px; direction: ltr;">
ECD = MW + APL/(0.052 × TVD)<br>
ECD = 10.0 + 350/(0.052 × 15,000)<br>
ECD = 10.0 + 0.45 = 10.45 ppg
</p>
<p>✓ ECD (10.45 ppg) < ضغط التكسير EMW (15.0 ppg) - آمن!</p>
<p>✓ ECD (10.45 ppg) < Fracture EMW (15.0 ppg) - Safe!</p>

<h2 style="color: #ed8936;">مثال شامل 2: تحليل عملية الحفر | Example 2: Drilling Operation Analysis</h2>

<h3 style="color: #2c5282;">السيناريو | Scenario</h3>
<p>أثناء الحفر على عمق 12,000 ft بوزن طين 11.0 ppg، لوحظ انخفاض في مستوى حوض الطين وزيادة في معدل الاختراق.</p>
<p>While drilling at 12,000 ft with 11.0 ppg mud, a pit level decrease and ROP increase were observed.</p>

<h3 style="color: #2c5282;">التحليل | Analysis</h3>
<p><strong>الأعراض تشير إلى:</strong> فقدان جزئي للدورة (Partial Lost Circulation)</p>
<p><strong>Symptoms indicate:</strong> Partial Lost Circulation</p>

<p><strong>الحسابات:</strong></p>
<ul>
<li>BHP الحالي = 0.052 × 11.0 × 12,000 = 6,864 psi</li>
<li>Current BHP = 0.052 × 11.0 × 12,000 = 6,864 psi</li>
<li>هذا يعني أن ضغط التكسير للتكوين الحالي < 6,864 psi</li>
<li>This means current formation fracture pressure < 6,864 psi</li>
</ul>

<p><strong>الإجراءات المقترحة:</strong></p>
<ol>
<li>تقليل معدل الضخ لتقليل ECD</li>
<li>Reduce pump rate to lower ECD</li>
<li>النظر في تقليل وزن الطين إذا أمكن</li>
<li>Consider reducing mud weight if possible</li>
<li>إضافة مواد سد الفقدان (LCM)</li>
<li>Add Lost Circulation Material (LCM)</li>
</ol>

<h2 style="color: #ed8936;">جدول الحسابات السريعة | Quick Calculation Reference</h2>
<table style="width: 100%; border-collapse: collapse; margin: 10px 0;">
<tr style="background-color: #2c5282; color: white;">
<th style="border: 1px solid #ddd; padding: 8px;">الحساب | Calculation</th>
<th style="border: 1px solid #ddd; padding: 8px;">المعادلة | Equation</th>
</tr>
<tr>
<td style="border: 1px solid #ddd; padding: 8px;">الضغط الهيدروستاتيكي</td>
<td style="border: 1px solid #ddd; padding: 8px; direction: ltr;">P = 0.052 × MW × TVD</td>
</tr>
<tr style="background-color: #f7fafc;">
<td style="border: 1px solid #ddd; padding: 8px;">ECD</td>
<td style="border: 1px solid #ddd; padding: 8px; direction: ltr;">ECD = MW + APL/(0.052 × TVD)</td>
</tr>
<tr>
<td style="border: 1px solid #ddd; padding: 8px;">EMW</td>
<td style="border: 1px solid #ddd; padding: 8px; direction: ltr;">EMW = P/(0.052 × TVD)</td>
</tr>
<tr style="background-color: #f7fafc;">
<td style="border: 1px solid #ddd; padding: 8px;">التدرج الهيدروستاتيكي</td>
<td style="border: 1px solid #ddd; padding: 8px; direction: ltr;">Gradient = 0.052 × MW (psi/ft)</td>
</tr>
<tr>
<td style="border: 1px solid #ddd; padding: 8px;">هامش الإفراط</td>
<td style="border: 1px solid #ddd; padding: 8px; direction: ltr;">Overbalance = BHP - Pore Pressure</td>
</tr>
</table>

<h2 style="color: #ed8936;">أدوات القياس الميداني | Field Measurement Tools</h2>

<h3 style="color: #2c5282;">1. مستشعرات الضغط أثناء الحفر (PWD)</h3>
<p>Pressure While Drilling sensors توفر قراءات لحظية لـ:</p>
<ul>
<li>ضغط قاع البئر الفعلي</li>
<li>Actual bottomhole pressure</li>
<li>ECD الحقيقي (وليس المحسوب)</li>
<li>Real ECD (not calculated)</li>
<li>درجة الحرارة</li>
<li>Temperature</li>
</ul>

<h3 style="color: #2c5282;">2. اختبار تسرب التكوين (FIT/LOT)</h3>
<p>Formation Integrity Test / Leak-Off Test:</p>
<ul>
<li>يُجرى بعد حفر حذاء التغليف</li>
<li>Performed after drilling out casing shoe</li>
<li>يحدد ضغط التكسير الفعلي</li>
<li>Determines actual fracture pressure</li>
<li>يُستخدم لتأكيد نافذة وزن الطين</li>
<li>Used to confirm mud weight window</li>
</ul>

<h2 style="color: #ed8936;">نصائح عملية | Practical Tips</h2>
<ul>
<li><strong>راقب مستوى الحوض باستمرار:</strong> أي تغير يشير لمشكلة</li>
<li><strong>Monitor pit level continuously:</strong> Any change indicates a problem</li>
<li><strong>احسب ECD قبل رفع معدل الضخ:</strong> تجنب تجاوز ضغط التكسير</li>
<li><strong>Calculate ECD before increasing pump rate:</strong> Avoid exceeding fracture pressure</li>
<li><strong>اعرف نافذة وزن الطين دائماً:</strong> هي خط الدفاع الأول</li>
<li><strong>Always know your mud weight window:</strong> It's your first line of defense</li>
</ul>

<p style="color: #c53030;"><strong>القاعدة الذهبية:</strong> عند الشك، توقف وتحقق. حساب سريع قد ينقذ البئر.</p>
<p style="color: #c53030;"><strong>Golden Rule:</strong> When in doubt, stop and verify. A quick calculation may save the well.</p>
`,
      keyTerms: [
        { term: 'مستشعرات الضغط أثناء الحفر', definition: 'أدوات قياس توفر قراءات لحظية للضغط ودرجة الحرارة قاع البئر', termEn: 'Pressure While Drilling (PWD)', definitionEn: 'Measurement tools providing real-time bottomhole pressure and temperature' },
        { term: 'اختبار تسرب التكوين', definition: 'اختبار لتحديد ضغط التكسير الفعلي للتكوين', termEn: 'Leak-Off Test (LOT)', definitionEn: 'Test to determine actual formation fracture pressure' },
        { term: 'مواد سد الفقدان', definition: 'مواد تُضاف للطين لسد التكسرات ومنع فقدان الدورة', termEn: 'Lost Circulation Material (LCM)', definitionEn: 'Materials added to mud to seal fractures and prevent lost circulation' },
        { term: 'التدرج الهيدروستاتيكي', definition: 'معدل زيادة الضغط مع العمق (psi/ft)', termEn: 'Hydrostatic Gradient', definitionEn: 'Rate of pressure increase with depth (psi/ft)' }
      ],
      practiceQuestion: {
        question: 'في بئر بعمق 10,000 ft مع وزن طين 9.5 ppg و APL = 260 psi، ما هو ECD؟',
        questionEn: 'In a well at 10,000 ft with 9.5 ppg mud and APL = 260 psi, what is ECD?',
        options: ['9.5 ppg', '10.0 ppg', '10.5 ppg', '11.0 ppg'],
        correctAnswer: 1,
        explanation: 'ECD = 9.5 + 260/(0.052 × 10,000) = 9.5 + 0.5 = 10.0 ppg',
        explanationEn: 'ECD = 9.5 + 260/(0.052 × 10,000) = 9.5 + 0.5 = 10.0 ppg'
      }
    }
  ],
  quiz: {
    questions: [
      {
        question: 'ما هي معادلة الضغط الهيدروستاتيكي بالوحدات الميدانية؟',
        questionEn: 'What is the hydrostatic pressure equation in field units?',
        options: [
          'P = 0.052 × MW × MD',
          'P = 0.052 × MW × TVD',
          'P = 0.433 × MW × TVD',
          'P = MW × TVD / 19.25'
        ],
        correctAnswer: 1,
        explanation: 'المعادلة الصحيحة هي P = 0.052 × MW (ppg) × TVD (ft) حيث 0.052 هو ثابت التحويل',
        explanationEn: 'The correct equation is P = 0.052 × MW (ppg) × TVD (ft) where 0.052 is the conversion constant'
      },
      {
        question: 'ما هو ECD؟',
        questionEn: 'What is ECD?',
        options: [
          'كثافة الطين المعدلة',
          'الكثافة الفعالة أثناء الدورة تشمل فقدان الضغط الحلقي',
          'كثافة الطين الساكنة',
          'معدل تدفق الطين'
        ],
        correctAnswer: 1,
        explanation: 'ECD هي كثافة الدورة المكافئة وتمثل الكثافة الفعالة التي يمارسها الطين أثناء الدورة',
        explanationEn: 'ECD is Equivalent Circulating Density representing effective density exerted by mud during circulation'
      },
      {
        question: 'إذا كان وزن الطين 10 ppg والعمق 10,000 ft، ما هو الضغط الهيدروستاتيكي؟',
        questionEn: 'If mud weight is 10 ppg and depth is 10,000 ft, what is the hydrostatic pressure?',
        options: ['4,800 psi', '5,000 psi', '5,200 psi', '5,500 psi'],
        correctAnswer: 2,
        explanation: 'P = 0.052 × 10 × 10,000 = 5,200 psi',
        explanationEn: 'P = 0.052 × 10 × 10,000 = 5,200 psi'
      },
      {
        question: 'ما هو تأثير ضغط الاندفاع (Surge)؟',
        questionEn: 'What is the effect of Surge pressure?',
        options: [
          'انخفاض مؤقت في ضغط قاع البئر',
          'زيادة مؤقتة في ضغط قاع البئر عند إنزال الأنابيب',
          'زيادة دائمة في وزن الطين',
          'انخفاض في معدل التدفق'
        ],
        correctAnswer: 1,
        explanation: 'ضغط الاندفاع يسبب زيادة مؤقتة في BHP عند إنزال الأنابيب بسبب إزاحة السائل',
        explanationEn: 'Surge pressure causes temporary BHP increase when running pipe due to fluid displacement'
      },
      {
        question: 'ما هي نافذة وزن الطين؟',
        questionEn: 'What is the mud weight window?',
        options: [
          'الفرق بين وزن الطين القديم والجديد',
          'النطاق الآمن بين ضغط المسام وضغط التكسير',
          'سعة خزان الطين',
          'وقت الدورة الكاملة'
        ],
        correctAnswer: 1,
        explanation: 'نافذة وزن الطين هي النطاق الآمن الذي يجب أن يكون فيه وزن الطين بين ضغط المسام وضغط التكسير',
        explanationEn: 'Mud weight window is the safe range where mud weight must stay between pore and fracture pressures'
      },
      {
        question: 'ما هي النسبة المثلى لفقدان الضغط في الدقاق لأقصى قوة تأثير هيدروليكية؟',
        questionEn: 'What is the optimal bit pressure loss percentage for maximum hydraulic impact force?',
        options: ['35%', '50%', '65%', '80%'],
        correctAnswer: 2,
        explanation: 'للحصول على أقصى قوة تأثير هيدروليكية، يجب أن يكون فقدان الضغط في الدقاق حوالي 65%',
        explanationEn: 'For maximum hydraulic impact force, bit pressure loss should be approximately 65%'
      },
      {
        question: 'ما نوع الضغط عندما يكون EMW = 12 ppg وضغط التكوين الطبيعي = 9 ppg EMW؟',
        questionEn: 'What type of pressure when EMW = 12 ppg and normal formation pressure = 9 ppg EMW?',
        options: [
          'ضغط طبيعي',
          'ضغط منخفض',
          'ضغط مرتفع غير طبيعي',
          'لا يمكن تحديده'
        ],
        correctAnswer: 2,
        explanation: 'لأن 12 ppg > 9 ppg، فهذا ضغط تكوين مرتفع غير طبيعي (Overpressure)',
        explanationEn: 'Since 12 ppg > 9 ppg, this is abnormally high formation pressure (Overpressure)'
      },
      {
        question: 'كيف يمكن تقليل ECD أثناء الحفر؟',
        questionEn: 'How can ECD be reduced during drilling?',
        options: [
          'زيادة معدل الضخ',
          'تقليل معدل الضخ وخفض لزوجة الطين',
          'زيادة وزن الطين',
          'زيادة عمق الحفر'
        ],
        correctAnswer: 1,
        explanation: 'تقليل معدل الضخ يقلل فقدان الضغط الحلقي، وخفض اللزوجة يقلل الاحتكاك',
        explanationEn: 'Reducing pump rate lowers annular pressure loss, and lowering viscosity reduces friction'
      },
      {
        question: 'ما هو اختبار LOT؟',
        questionEn: 'What is a LOT test?',
        options: [
          'اختبار كثافة الطين',
          'اختبار لتحديد ضغط تكسير التكوين الفعلي',
          'اختبار سرعة الحفر',
          'اختبار حجم الفتات'
        ],
        correctAnswer: 1,
        explanation: 'اختبار تسرب التكوين (LOT) يُجرى لتحديد الضغط الذي يبدأ عنده التكوين بالتكسر',
        explanationEn: 'Leak-Off Test (LOT) is performed to determine the pressure at which formation starts to fracture'
      },
      {
        question: 'في بئر بعمق 8,000 ft، إذا كان الضغط الهيدروستاتيكي 4,160 psi، ما هو وزن الطين؟',
        questionEn: 'In a well at 8,000 ft, if hydrostatic pressure is 4,160 psi, what is the mud weight?',
        options: ['9.0 ppg', '9.5 ppg', '10.0 ppg', '10.5 ppg'],
        correctAnswer: 2,
        explanation: 'MW = P / (0.052 × TVD) = 4,160 / (0.052 × 8,000) = 4,160 / 416 = 10.0 ppg',
        explanationEn: 'MW = P / (0.052 × TVD) = 4,160 / (0.052 × 8,000) = 4,160 / 416 = 10.0 ppg'
      }
    ]
  },
  project: {
    title: 'حساب برنامج الضغط لبئر حفر',
    titleEn: 'Calculate Pressure Program for a Drilling Well',
    description: `
      <h3 style="color: #1a365d;">وصف المشروع | Project Description</h3>
      <p>قم بإعداد تحليل شامل للضغوط لبئر حفر مقترح بالمعطيات التالية:</p>
      <p>Prepare a comprehensive pressure analysis for a proposed drilling well with the following data:</p>
      
      <h4 style="color: #ed8936;">المعطيات | Given Data:</h4>
      <ul>
        <li>العمق الكلي المستهدف (TVD): 14,000 ft</li>
        <li>Target Total Depth (TVD): 14,000 ft</li>
        <li>ضغط المسام المتوقع: 8.8 ppg EMW (سطح) إلى 11.5 ppg EMW (قاع)</li>
        <li>Expected Pore Pressure: 8.8 ppg EMW (surface) to 11.5 ppg EMW (bottom)</li>
        <li>ضغط التكسير: 14.5 ppg EMW عند 3,000 ft، 16.0 ppg EMW عند 14,000 ft</li>
        <li>Fracture Pressure: 14.5 ppg EMW at 3,000 ft, 16.0 ppg EMW at 14,000 ft</li>
        <li>فقدان الضغط الحلقي المتوقع: 450 psi</li>
        <li>Expected Annular Pressure Loss: 450 psi</li>
      </ul>
      
      <h4 style="color: #ed8936;">المطلوب | Requirements:</h4>
      <ol>
        <li>ارسم مخطط الضغط مقابل العمق (Pressure vs Depth Plot) يوضح ضغط المسام وضغط التكسير</li>
        <li>Draw Pressure vs Depth Plot showing pore and fracture pressures</li>
        <li>حدد نافذة وزن الطين لكل مرحلة من الحفر</li>
        <li>Determine mud weight window for each drilling section</li>
        <li>اقترح برنامج وزن الطين المناسب مع حساب ECD لكل مرحلة</li>
        <li>Propose appropriate mud weight program with ECD calculation for each section</li>
        <li>حدد أعماق تركيب التغليف المقترحة بناءً على تحليل الضغط</li>
        <li>Determine proposed casing setting depths based on pressure analysis</li>
        <li>اشرح المخاطر المحتملة وكيفية التعامل معها</li>
        <li>Explain potential risks and how to handle them</li>
      </ol>
      
      <p style="color: #c53030;"><strong>ملاحظة:</strong> يمكنك استخدام Excel أو رسم يدوي لإنشاء المخطط، ثم تصوير العمل وإرفاقه.</p>
      <p style="color: #c53030;"><strong>Note:</strong> You can use Excel or hand drawing to create the plot, then photograph your work and attach it.</p>
    `
  }
};
