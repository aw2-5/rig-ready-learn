import { WeeklyLesson } from '../weeklyContent';

export const pressureEcdLesson: WeeklyLesson = {
  lessonId: 'pressure-ecd',
  days: [
    {
      day: 1,
      type: 'learning',
      content: {
        ar: {
          title: 'مفاهيم الضغط الأساسية',
          explanation: `<section>
<h2 style="color: #1a365d;" class="text-xl font-bold mb-4">مفاهيم الضغط الأساسية في عمليات الحفر</h2>

<p class="mb-4">يُعد فهم مفاهيم الضغط من الركائز الأساسية في هندسة الحفر، حيث يؤثر الضغط بشكل مباشر على سلامة العمليات واستقرار البئر. إن التحكم الدقيق في الضغوط المختلفة داخل البئر وخارجه يُمكّن المهندسين من تجنب المشاكل الخطيرة مثل تدفق التكوين (Kick) أو فقدان الدورة (Lost Circulation).</p>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">الضغط الهيدروستاتيكي (Hydrostatic Pressure)</h3>

<p class="mb-4"><strong>التعريف:</strong> الضغط الهيدروستاتيكي هو الضغط الناتج عن عمود السائل الساكن بسبب وزنه. يعتمد على كثافة السائل وارتفاع عمود السائل.</p>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">معادلة الضغط الهيدروستاتيكي</h4>
<p class="mb-2"><strong>بالوحدات الميدانية (Field Units):</strong></p>
<p style="background-color: #f0f4f8; padding: 10px; border-radius: 5px; direction: ltr;" class="mb-4">
P (psi) = 0.052 × MW (ppg) × TVD (ft)
</p>

<p class="mb-2"><strong>بالوحدات المترية (Metric Units):</strong></p>
<p style="background-color: #f0f4f8; padding: 10px; border-radius: 5px; direction: ltr;" class="mb-4">
P (kPa) = 0.00981 × MW (kg/m³) × TVD (m)
</p>

<p class="mb-2"><strong>حيث:</strong></p>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>P = الضغط الهيدروستاتيكي</li>
<li>MW = وزن الطين أو كثافة السائل</li>
<li>TVD = العمق الرأسي الحقيقي</li>
<li>0.052 = ثابت التحويل للوحدات الميدانية</li>
</ul>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">مثال عملي</h4>
<p class="mb-2"><strong>المعطيات:</strong> وزن الطين = 10 ppg، العمق الرأسي = 10,000 ft</p>
<p style="background-color: #e6fffa; padding: 10px; border-radius: 5px; direction: ltr;" class="mb-4">
P = 0.052 × 10 × 10,000 = 5,200 psi
</p>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">ضغط التكوين (ضغط المسام - Pore Pressure)</h3>

<p class="mb-4"><strong>التعريف:</strong> هو الضغط الموجود داخل مسام الصخور والذي تمارسه السوائل المحتجزة في التكوين الصخري.</p>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">أنواع ضغط التكوين</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li><strong>الضغط الطبيعي (Normal Pressure):</strong> يساوي الضغط الهيدروستاتيكي لعمود الماء من السطح إلى العمق (8.5-9.0 ppg EMW)</li>
<li><strong>الضغط غير الطبيعي المرتفع (Overpressure):</strong> أعلى من الضغط الطبيعي (> 9.0 ppg EMW)</li>
<li><strong>الضغط المنخفض (Underpressure):</strong> أقل من الضغط الطبيعي (< 8.5 ppg EMW)</li>
</ul>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">ضغط التكسير (Fracture Pressure)</h3>

<p class="mb-4"><strong>التعريف:</strong> هو الضغط الذي يبدأ عنده التكوين الصخري بالتكسر والانفتاح، مما يسمح بفقدان سائل الحفر.</p>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">أهمية ضغط التكسير</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>يحدد الحد الأعلى لوزن الطين المسموح به</li>
<li>يُستخدم في تصميم برنامج التغليف (Casing Program)</li>
<li>يؤثر على اختيار عمق تركيب الأنابيب</li>
</ul>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">نافذة وزن الطين (Mud Weight Window)</h3>

<p class="mb-4">نافذة وزن الطين هي النطاق الآمن لوزن الطين بين ضغط المسام وضغط التكسير. يجب أن يكون وزن الطين:</p>
<ul class="list-disc list-inside space-y-2 mb-4">
<li><strong>أعلى من:</strong> ضغط المسام + هامش أمان (لمنع تدفق التكوين)</li>
<li><strong>أقل من:</strong> ضغط التكسير - هامش أمان (لمنع فقدان الدورة)</li>
</ul>

<p style="color: #c53030;" class="mb-4"><strong>ملاحظة هامة:</strong> في بعض الآبار العميقة أو المعقدة، قد تكون نافذة وزن الطين ضيقة جداً، مما يتطلب تقنيات خاصة مثل الحفر بالضغط المتحكم (MPD).</p>
</section>`,
          keyTerms: [
            { term: 'الضغط الهيدروستاتيكي', definition: 'الضغط الناتج عن وزن عمود السائل الساكن' },
            { term: 'ضغط المسام', definition: 'الضغط الموجود داخل مسام الصخور من السوائل المحتجزة' },
            { term: 'ضغط التكسير', definition: 'الضغط الذي يبدأ عنده التكوين بالتكسر' },
            { term: 'نافذة وزن الطين', definition: 'النطاق الآمن لوزن الطين بين ضغط المسام وضغط التكسير' },
            { term: 'العمق الرأسي الحقيقي', definition: 'المسافة الرأسية من السطح إلى نقطة في البئر' }
          ],
          practiceQuestion: {
            question: 'إذا كان وزن الطين 12 ppg والعمق الرأسي 8,000 ft، ما هو الضغط الهيدروستاتيكي؟',
            options: ['3,744 psi', '4,992 psi', '4,160 psi', '5,200 psi'],
            correctAnswer: 1
          }
        },
        en: {
          title: 'Basic Pressure Concepts',
          explanation: `<section>
<h2 style="color: #1a365d;" class="text-xl font-bold mb-4">Basic Pressure Concepts in Drilling Operations</h2>

<p class="mb-4">Understanding pressure concepts is fundamental in drilling engineering, as pressure directly affects operational safety and wellbore stability. Precise control of various pressures inside and outside the wellbore enables engineers to avoid serious problems such as formation kicks or lost circulation.</p>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">Hydrostatic Pressure</h3>

<p class="mb-4"><strong>Definition:</strong> Hydrostatic pressure is the pressure exerted by a static fluid column due to its weight. It depends on fluid density and the height of the fluid column.</p>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">Hydrostatic Pressure Equation</h4>
<p class="mb-2"><strong>Field Units:</strong></p>
<p style="background-color: #f0f4f8; padding: 10px; border-radius: 5px;" class="mb-4">
P (psi) = 0.052 × MW (ppg) × TVD (ft)
</p>

<p class="mb-2"><strong>Metric Units:</strong></p>
<p style="background-color: #f0f4f8; padding: 10px; border-radius: 5px;" class="mb-4">
P (kPa) = 0.00981 × MW (kg/m³) × TVD (m)
</p>

<p class="mb-2"><strong>Where:</strong></p>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>P = Hydrostatic Pressure</li>
<li>MW = Mud Weight / Fluid Density</li>
<li>TVD = True Vertical Depth</li>
<li>0.052 = Conversion constant for field units</li>
</ul>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">Practical Example</h4>
<p class="mb-2"><strong>Given:</strong> Mud Weight = 10 ppg, TVD = 10,000 ft</p>
<p style="background-color: #e6fffa; padding: 10px; border-radius: 5px;" class="mb-4">
P = 0.052 × 10 × 10,000 = 5,200 psi
</p>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">Formation Pressure (Pore Pressure)</h3>

<p class="mb-4"><strong>Definition:</strong> The pressure existing within rock pores, exerted by fluids trapped in the formation.</p>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">Types of Formation Pressure</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li><strong>Normal Pressure:</strong> Equals hydrostatic pressure of water column from surface to depth (8.5-9.0 ppg EMW)</li>
<li><strong>Abnormal/Overpressure:</strong> Higher than normal pressure (> 9.0 ppg EMW)</li>
<li><strong>Subnormal/Underpressure:</strong> Lower than normal pressure (< 8.5 ppg EMW)</li>
</ul>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">Fracture Pressure</h3>

<p class="mb-4"><strong>Definition:</strong> The pressure at which the formation begins to fracture and open, allowing drilling fluid loss.</p>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">Importance of Fracture Pressure</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>Determines the upper limit of allowable mud weight</li>
<li>Used in designing the casing program</li>
<li>Affects selection of casing setting depth</li>
</ul>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">Mud Weight Window</h3>

<p class="mb-4">The mud weight window is the safe range between pore pressure and fracture pressure. Mud weight must be:</p>
<ul class="list-disc list-inside space-y-2 mb-4">
<li><strong>Higher than:</strong> Pore pressure + safety margin (to prevent formation influx)</li>
<li><strong>Lower than:</strong> Fracture pressure - safety margin (to prevent lost circulation)</li>
</ul>

<p style="color: #c53030;" class="mb-4"><strong>Important Note:</strong> In some deep or complex wells, the mud weight window may be very narrow, requiring special techniques such as Managed Pressure Drilling (MPD).</p>
</section>`,
          keyTerms: [
            { term: 'Hydrostatic Pressure', definition: 'Pressure exerted by the weight of a static fluid column' },
            { term: 'Pore Pressure', definition: 'Pressure within rock pores from trapped fluids' },
            { term: 'Fracture Pressure', definition: 'Pressure at which formation begins to fracture' },
            { term: 'Mud Weight Window', definition: 'Safe mud weight range between pore and fracture pressures' },
            { term: 'True Vertical Depth (TVD)', definition: 'Vertical distance from surface to a point in the well' }
          ],
          practiceQuestion: {
            question: 'If mud weight is 12 ppg and TVD is 8,000 ft, what is the hydrostatic pressure?',
            options: ['3,744 psi', '4,992 psi', '4,160 psi', '5,200 psi'],
            correctAnswer: 1
          }
        }
      }
    },
    {
      day: 2,
      type: 'learning',
      content: {
        ar: {
          title: 'كثافة الدورة المكافئة (ECD)',
          explanation: `<section>
<h2 style="color: #1a365d;" class="text-xl font-bold mb-4">كثافة الدورة المكافئة (ECD)</h2>

<p class="mb-4">كثافة الدورة المكافئة (ECD) هي الكثافة الفعالة التي يمارسها سائل الحفر على التكوين أثناء الدورة. تزداد عن الكثافة الساكنة بسبب فقدان الضغط الناتج عن احتكاك السائل أثناء التدفق في الحيز الحلقي.</p>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">معادلة ECD</h3>
<p style="background-color: #f0f4f8; padding: 10px; border-radius: 5px; direction: ltr;" class="mb-4">
ECD (ppg) = MW (ppg) + [APL (psi) / (0.052 × TVD (ft))]
</p>

<p class="mb-2"><strong>حيث:</strong></p>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>ECD = كثافة الدورة المكافئة</li>
<li>MW = وزن الطين الساكن</li>
<li>APL = فقدان الضغط في الحيز الحلقي</li>
<li>TVD = العمق الرأسي الحقيقي</li>
</ul>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">مثال حسابي</h4>
<p class="mb-2"><strong>المعطيات:</strong></p>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>وزن الطين = 11.5 ppg</li>
<li>فقدان الضغط الحلقي = 400 psi</li>
<li>العمق الرأسي = 12,000 ft</li>
</ul>

<p style="background-color: #e6fffa; padding: 10px; border-radius: 5px; direction: ltr;" class="mb-4">
ECD = 11.5 + [400 / (0.052 × 12,000)]<br/>
ECD = 11.5 + [400 / 624]<br/>
ECD = 11.5 + 0.64 = 12.14 ppg
</p>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">العوامل المؤثرة على ECD</h3>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">1. معدل الضخ (Pump Rate)</h4>
<p class="mb-4">زيادة معدل الضخ تزيد من سرعة التدفق في الحيز الحلقي، مما يرفع فقدان الضغط وبالتالي ECD.</p>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">2. خصائص الطين الريولوجية</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li><strong>اللزوجة البلاستيكية (PV):</strong> زيادتها ترفع ECD</li>
<li><strong>نقطة الخضوع (YP):</strong> تأثير كبير على ECD خاصة في المعدلات المنخفضة</li>
<li><strong>قوة الجل (Gel Strength):</strong> تؤثر عند بدء الدورة بعد التوقف</li>
</ul>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">3. هندسة البئر</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li><strong>قطر الحفرة:</strong> الحفرة الأصغر = فجوة حلقية أضيق = ECD أعلى</li>
<li><strong>قطر سلسلة الحفر:</strong> أدوات أكبر تقلل الفجوة وترفع ECD</li>
</ul>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">4. نسبة تحميل الفتات</h4>
<p class="mb-4">وجود الفتات في الحيز الحلقي يزيد من الكثافة الفعالة والاحتكاك، مما يرفع ECD.</p>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">أهمية مراقبة ECD</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li><strong>تجنب فقدان الدورة:</strong> إذا تجاوز ECD ضغط التكسير</li>
<li><strong>تجنب عدم استقرار البئر:</strong> التحكم في الضغط على جدران الحفرة</li>
<li><strong>تحسين معدل الاختراق:</strong> ECD مرتفع جداً يقلل ROP</li>
</ul>
</section>`,
          keyTerms: [
            { term: 'كثافة الدورة المكافئة (ECD)', definition: 'الكثافة الفعالة أثناء الدورة بما فيها فقدان الضغط الحلقي' },
            { term: 'فقدان الضغط الحلقي', definition: 'انخفاض الضغط الناتج عن احتكاك السائل في الحيز الحلقي' },
            { term: 'اللزوجة البلاستيكية', definition: 'مقاومة السائل للتدفق بعد تجاوز نقطة الخضوع' },
            { term: 'نقطة الخضوع', definition: 'الإجهاد المطلوب لبدء تدفق السائل' },
            { term: 'قوة الجل', definition: 'قوة بنية السائل المتكونة عند السكون' }
          ],
          practiceQuestion: {
            question: 'إذا كان وزن الطين 11 ppg وفقدان الضغط الحلقي 312 psi والعمق 10,000 ft، ما هو ECD؟',
            options: ['11.3 ppg', '11.6 ppg', '12.0 ppg', '11.9 ppg'],
            correctAnswer: 1
          }
        },
        en: {
          title: 'Equivalent Circulating Density (ECD)',
          explanation: `<section>
<h2 style="color: #1a365d;" class="text-xl font-bold mb-4">Equivalent Circulating Density (ECD)</h2>

<p class="mb-4">Equivalent Circulating Density (ECD) is the effective density exerted by drilling fluid on the formation during circulation. It increases above static density due to pressure losses from fluid friction while flowing in the annulus.</p>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">ECD Equation</h3>
<p style="background-color: #f0f4f8; padding: 10px; border-radius: 5px;" class="mb-4">
ECD (ppg) = MW (ppg) + [APL (psi) / (0.052 × TVD (ft))]
</p>

<p class="mb-2"><strong>Where:</strong></p>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>ECD = Equivalent Circulating Density</li>
<li>MW = Static Mud Weight</li>
<li>APL = Annular Pressure Loss</li>
<li>TVD = True Vertical Depth</li>
</ul>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">Calculation Example</h4>
<p class="mb-2"><strong>Given:</strong></p>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>Mud Weight = 11.5 ppg</li>
<li>Annular Pressure Loss = 400 psi</li>
<li>TVD = 12,000 ft</li>
</ul>

<p style="background-color: #e6fffa; padding: 10px; border-radius: 5px;" class="mb-4">
ECD = 11.5 + [400 / (0.052 × 12,000)]<br/>
ECD = 11.5 + [400 / 624]<br/>
ECD = 11.5 + 0.64 = 12.14 ppg
</p>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">Factors Affecting ECD</h3>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">1. Pump Rate</h4>
<p class="mb-4">Increasing pump rate increases annular flow velocity, raising pressure loss and thus ECD.</p>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">2. Mud Rheological Properties</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li><strong>Plastic Viscosity (PV):</strong> Increasing it raises ECD</li>
<li><strong>Yield Point (YP):</strong> Significant effect on ECD especially at low rates</li>
<li><strong>Gel Strength:</strong> Affects ECD when starting circulation after stops</li>
</ul>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">3. Wellbore Geometry</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li><strong>Hole Diameter:</strong> Smaller hole = narrower annulus = higher ECD</li>
<li><strong>Drillstring Diameter:</strong> Larger tools reduce clearance and raise ECD</li>
</ul>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">4. Cuttings Loading</h4>
<p class="mb-4">Presence of cuttings in the annulus increases effective density and friction, raising ECD.</p>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">Importance of ECD Monitoring</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li><strong>Avoid Lost Circulation:</strong> If ECD exceeds fracture pressure</li>
<li><strong>Avoid Wellbore Instability:</strong> Control pressure on hole walls</li>
<li><strong>Optimize Penetration Rate:</strong> Very high ECD reduces ROP</li>
</ul>
</section>`,
          keyTerms: [
            { term: 'Equivalent Circulating Density (ECD)', definition: 'Effective density during circulation including annular pressure loss' },
            { term: 'Annular Pressure Loss', definition: 'Pressure drop from fluid friction in the annulus' },
            { term: 'Plastic Viscosity', definition: 'Fluid resistance to flow after exceeding yield point' },
            { term: 'Yield Point', definition: 'Stress required to initiate fluid flow' },
            { term: 'Gel Strength', definition: 'Strength of fluid structure formed at rest' }
          ],
          practiceQuestion: {
            question: 'If mud weight is 11 ppg, annular pressure loss is 312 psi, and depth is 10,000 ft, what is ECD?',
            options: ['11.3 ppg', '11.6 ppg', '12.0 ppg', '11.9 ppg'],
            correctAnswer: 1
          }
        }
      }
    },
    {
      day: 3,
      type: 'learning',
      content: {
        ar: {
          title: 'ضغوط Surge و Swab',
          explanation: `<section>
<h2 style="color: #1a365d;" class="text-xl font-bold mb-4">ضغوط Surge و Swab في عمليات الحفر</h2>

<p class="mb-4">ضغوط Surge و Swab هي ضغوط ديناميكية مؤقتة تنشأ أثناء تحريك سلسلة الحفر أو التغليف داخل البئر. فهم هذه الضغوط ضروري لتجنب المشاكل الخطيرة.</p>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">ضغط Surge (الارتفاع)</h3>

<p class="mb-4"><strong>التعريف:</strong> هو الزيادة المؤقتة في الضغط قاع البئر الناتجة عن إنزال الأنابيب أو سلسلة الحفر. يحدث بسبب إزاحة السائل للأعلى في الحيز الحلقي.</p>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">مخاطر ضغط Surge المرتفع</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>تكسير التكوين وفقدان الدورة</li>
<li>إضعاف جدران البئر</li>
<li>تلف مناطق الإنتاج</li>
</ul>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">ضغط Swab (الانخفاض)</h3>

<p class="mb-4"><strong>التعريف:</strong> هو الانخفاض المؤقت في الضغط قاع البئر الناتج عن سحب الأنابيب. يحدث بسبب سحب السائل للأسفل مما يخلق فراغاً نسبياً.</p>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">مخاطر ضغط Swab المنخفض</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>تدفق التكوين (Kick) إذا انخفض الضغط تحت ضغط المسام</li>
<li>انهيار جدران البئر</li>
<li>دخول سوائل التكوين للبئر</li>
</ul>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">العوامل المؤثرة على Surge و Swab</h3>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">1. سرعة الرحلة (Tripping Speed)</h4>
<p class="mb-4">كلما زادت سرعة تحريك الأنابيب، زاد تأثير Surge/Swab.</p>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">2. خصائص الطين</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>لزوجة أعلى = تأثير أكبر</li>
<li>قوة جل أعلى = تأثير أكبر عند بدء الحركة</li>
</ul>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">3. هندسة البئر والأدوات</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>فجوة حلقية أضيق = تأثير أكبر</li>
<li>أدوات مغلقة (بدون فتحات) = تأثير أكبر</li>
</ul>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">طرق التحكم</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>تقليل سرعة الرحلة خاصة في المناطق الحرجة</li>
<li>استخدام أدوات بها فتحات تدفق</li>
<li>مراقبة مستوى الطين في الحوض باستمرار</li>
<li>ملء البئر بانتظام أثناء السحب</li>
</ul>

<p style="color: #c53030;" class="mb-4"><strong>قاعدة ذهبية:</strong> إذا انخفض مستوى الطين في الحوض أثناء السحب أكثر من المتوقع، توقف فوراً وتحقق من وجود Swab أو تدفق.</p>
</section>`,
          keyTerms: [
            { term: 'ضغط Surge', definition: 'زيادة مؤقتة في الضغط قاع البئر عند إنزال الأنابيب' },
            { term: 'ضغط Swab', definition: 'انخفاض مؤقت في الضغط قاع البئر عند سحب الأنابيب' },
            { term: 'سرعة الرحلة', definition: 'سرعة تحريك الأنابيب داخل وخارج البئر' },
            { term: 'تدفق التكوين (Kick)', definition: 'دخول سوائل التكوين للبئر بسبب انخفاض الضغط' },
            { term: 'فقدان الدورة', definition: 'تسرب سائل الحفر للتكوين بسبب ارتفاع الضغط' }
          ],
          practiceQuestion: {
            question: 'ما الذي يحدث إذا كان ضغط Swab كبيراً جداً أثناء سحب الأنابيب؟',
            options: ['فقدان الدورة', 'تدفق التكوين (Kick)', 'انسداد الرأس الحفار', 'زيادة معدل الاختراق'],
            correctAnswer: 1
          }
        },
        en: {
          title: 'Surge and Swab Pressures',
          explanation: `<section>
<h2 style="color: #1a365d;" class="text-xl font-bold mb-4">Surge and Swab Pressures in Drilling Operations</h2>

<p class="mb-4">Surge and Swab pressures are temporary dynamic pressures that occur when moving the drillstring or casing inside the wellbore. Understanding these pressures is essential to avoid serious problems.</p>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">Surge Pressure</h3>

<p class="mb-4"><strong>Definition:</strong> A temporary increase in bottomhole pressure resulting from running pipe or drillstring into the well. It occurs due to fluid displacement upward in the annulus.</p>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">Risks of High Surge Pressure</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>Formation fracturing and lost circulation</li>
<li>Weakening wellbore walls</li>
<li>Damaging productive zones</li>
</ul>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">Swab Pressure</h3>

<p class="mb-4"><strong>Definition:</strong> A temporary decrease in bottomhole pressure resulting from pulling pipe out of the well. It occurs due to fluid being pulled down, creating a relative vacuum.</p>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">Risks of Low Swab Pressure</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>Formation kick if pressure drops below pore pressure</li>
<li>Wellbore wall collapse</li>
<li>Formation fluids entering the well</li>
</ul>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">Factors Affecting Surge and Swab</h3>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">1. Tripping Speed</h4>
<p class="mb-4">The faster the pipe movement, the greater the Surge/Swab effect.</p>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">2. Mud Properties</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>Higher viscosity = greater effect</li>
<li>Higher gel strength = greater effect when starting movement</li>
</ul>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">3. Wellbore and Tool Geometry</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>Narrower annular clearance = greater effect</li>
<li>Closed tools (no bypass) = greater effect</li>
</ul>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">Control Methods</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>Reduce tripping speed especially in critical zones</li>
<li>Use tools with flow bypass ports</li>
<li>Monitor mud tank levels continuously</li>
<li>Fill the well regularly during pulling operations</li>
</ul>

<p style="color: #c53030;" class="mb-4"><strong>Golden Rule:</strong> If mud tank level drops more than expected during pulling, stop immediately and check for swab or flow.</p>
</section>`,
          keyTerms: [
            { term: 'Surge Pressure', definition: 'Temporary pressure increase at bottomhole when running pipe' },
            { term: 'Swab Pressure', definition: 'Temporary pressure decrease at bottomhole when pulling pipe' },
            { term: 'Tripping Speed', definition: 'Speed of moving pipe in and out of the well' },
            { term: 'Kick', definition: 'Formation fluids entering the wellbore due to low pressure' },
            { term: 'Lost Circulation', definition: 'Drilling fluid loss to formation due to high pressure' }
          ],
          practiceQuestion: {
            question: 'What happens if Swab pressure is too high during pulling pipe?',
            options: ['Lost circulation', 'Formation kick', 'Bit plugging', 'Increased ROP'],
            correctAnswer: 1
          }
        }
      }
    },
    {
      day: 4,
      type: 'learning',
      content: {
        ar: {
          title: 'حسابات الضغط العملية',
          explanation: `<section>
<h2 style="color: #1a365d;" class="text-xl font-bold mb-4">حسابات الضغط العملية في الحفر</h2>

<p class="mb-4">إتقان حسابات الضغط هو مهارة أساسية لمهندس الحفر. سنتناول الحسابات الأكثر استخداماً في العمليات اليومية.</p>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">1. حساب وزن الطين المطلوب</h3>

<p class="mb-4">لتحقيق ضغط قاع بئر معين:</p>
<p style="background-color: #f0f4f8; padding: 10px; border-radius: 5px; direction: ltr;" class="mb-4">
MW (ppg) = BHP (psi) / (0.052 × TVD (ft))
</p>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">مثال:</h4>
<p class="mb-2">ضغط قاع البئر المطلوب = 6,500 psi، العمق = 12,000 ft</p>
<p style="background-color: #e6fffa; padding: 10px; border-radius: 5px; direction: ltr;" class="mb-4">
MW = 6,500 / (0.052 × 12,000) = 10.42 ppg
</p>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">2. حساب EMW (وزن الطين المكافئ)</h3>

<p class="mb-4">لتحويل أي ضغط إلى وزن طين مكافئ:</p>
<p style="background-color: #f0f4f8; padding: 10px; border-radius: 5px; direction: ltr;" class="mb-4">
EMW (ppg) = Pressure (psi) / (0.052 × TVD (ft))
</p>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">3. حساب تدرج الضغط (Pressure Gradient)</h3>

<p style="background-color: #f0f4f8; padding: 10px; border-radius: 5px; direction: ltr;" class="mb-4">
تدرج الضغط (psi/ft) = 0.052 × MW (ppg)
</p>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">أمثلة على تدرجات الضغط:</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>الماء العذب (8.33 ppg): 0.433 psi/ft</li>
<li>ماء البحر (8.6 ppg): 0.447 psi/ft</li>
<li>طين 10 ppg: 0.52 psi/ft</li>
<li>طين 12 ppg: 0.624 psi/ft</li>
</ul>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">4. حساب هامش الرحلة (Trip Margin)</h3>

<p class="mb-4">هامش إضافي لوزن الطين لمواجهة تأثيرات Swab:</p>
<p style="background-color: #f0f4f8; padding: 10px; border-radius: 5px; direction: ltr;" class="mb-4">
Trip Margin = 0.3 to 0.5 ppg (typically)
</p>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">5. حساب MAASP</h3>

<p class="mb-4">أقصى ضغط سطحي مسموح به في الحيز الحلقي:</p>
<p style="background-color: #f0f4f8; padding: 10px; border-radius: 5px; direction: ltr;" class="mb-4">
MAASP (psi) = (Fracture Gradient - MW) × 0.052 × TVD (at shoe)
</p>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">مثال:</h4>
<p class="mb-2">تدرج التكسير = 14.5 ppg، وزن الطين = 11 ppg، عمق الحذاء = 8,000 ft</p>
<p style="background-color: #e6fffa; padding: 10px; border-radius: 5px; direction: ltr;" class="mb-4">
MAASP = (14.5 - 11) × 0.052 × 8,000 = 1,456 psi
</p>

<p style="color: #c53030;" class="mb-4"><strong>تحذير:</strong> تجاوز MAASP قد يؤدي إلى تكسير التكوين عند حذاء التغليف وفقدان السيطرة على البئر.</p>
</section>`,
          keyTerms: [
            { term: 'وزن الطين المكافئ (EMW)', definition: 'تحويل أي ضغط إلى ما يعادله من وزن الطين' },
            { term: 'تدرج الضغط', definition: 'معدل تغير الضغط مع العمق (psi/ft)' },
            { term: 'هامش الرحلة', definition: 'وزن طين إضافي لمواجهة تأثيرات Swab' },
            { term: 'MAASP', definition: 'أقصى ضغط سطحي مسموح به في الحيز الحلقي' },
            { term: 'حذاء التغليف', definition: 'النقطة السفلية للتغليف حيث يكون التكوين أضعف' }
          ],
          practiceQuestion: {
            question: 'إذا كان تدرج التكسير 15 ppg ووزن الطين 12 ppg وعمق الحذاء 6,000 ft، ما هو MAASP؟',
            options: ['936 psi', '1,248 psi', '780 psi', '1,560 psi'],
            correctAnswer: 0
          }
        },
        en: {
          title: 'Practical Pressure Calculations',
          explanation: `<section>
<h2 style="color: #1a365d;" class="text-xl font-bold mb-4">Practical Pressure Calculations in Drilling</h2>

<p class="mb-4">Mastering pressure calculations is an essential skill for a drilling engineer. We will cover the most commonly used calculations in daily operations.</p>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">1. Calculating Required Mud Weight</h3>

<p class="mb-4">To achieve a specific bottomhole pressure:</p>
<p style="background-color: #f0f4f8; padding: 10px; border-radius: 5px;" class="mb-4">
MW (ppg) = BHP (psi) / (0.052 × TVD (ft))
</p>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">Example:</h4>
<p class="mb-2">Required BHP = 6,500 psi, Depth = 12,000 ft</p>
<p style="background-color: #e6fffa; padding: 10px; border-radius: 5px;" class="mb-4">
MW = 6,500 / (0.052 × 12,000) = 10.42 ppg
</p>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">2. Calculating EMW (Equivalent Mud Weight)</h3>

<p class="mb-4">To convert any pressure to equivalent mud weight:</p>
<p style="background-color: #f0f4f8; padding: 10px; border-radius: 5px;" class="mb-4">
EMW (ppg) = Pressure (psi) / (0.052 × TVD (ft))
</p>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">3. Calculating Pressure Gradient</h3>

<p style="background-color: #f0f4f8; padding: 10px; border-radius: 5px;" class="mb-4">
Pressure Gradient (psi/ft) = 0.052 × MW (ppg)
</p>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">Examples of Pressure Gradients:</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>Fresh water (8.33 ppg): 0.433 psi/ft</li>
<li>Seawater (8.6 ppg): 0.447 psi/ft</li>
<li>10 ppg mud: 0.52 psi/ft</li>
<li>12 ppg mud: 0.624 psi/ft</li>
</ul>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">4. Calculating Trip Margin</h3>

<p class="mb-4">Additional mud weight margin to counter Swab effects:</p>
<p style="background-color: #f0f4f8; padding: 10px; border-radius: 5px;" class="mb-4">
Trip Margin = 0.3 to 0.5 ppg (typically)
</p>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">5. Calculating MAASP</h3>

<p class="mb-4">Maximum Allowable Annular Surface Pressure:</p>
<p style="background-color: #f0f4f8; padding: 10px; border-radius: 5px;" class="mb-4">
MAASP (psi) = (Fracture Gradient - MW) × 0.052 × TVD (at shoe)
</p>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">Example:</h4>
<p class="mb-2">Fracture Gradient = 14.5 ppg, MW = 11 ppg, Shoe depth = 8,000 ft</p>
<p style="background-color: #e6fffa; padding: 10px; border-radius: 5px;" class="mb-4">
MAASP = (14.5 - 11) × 0.052 × 8,000 = 1,456 psi
</p>

<p style="color: #c53030;" class="mb-4"><strong>Warning:</strong> Exceeding MAASP may fracture the formation at the casing shoe and result in loss of well control.</p>
</section>`,
          keyTerms: [
            { term: 'Equivalent Mud Weight (EMW)', definition: 'Converting any pressure to its mud weight equivalent' },
            { term: 'Pressure Gradient', definition: 'Rate of pressure change with depth (psi/ft)' },
            { term: 'Trip Margin', definition: 'Additional mud weight to counter Swab effects' },
            { term: 'MAASP', definition: 'Maximum Allowable Annular Surface Pressure' },
            { term: 'Casing Shoe', definition: 'Bottom point of casing where formation is weakest' }
          ],
          practiceQuestion: {
            question: 'If fracture gradient is 15 ppg, mud weight is 12 ppg, and shoe depth is 6,000 ft, what is MAASP?',
            options: ['936 psi', '1,248 psi', '780 psi', '1,560 psi'],
            correctAnswer: 0
          }
        }
      }
    },
    {
      day: 5,
      type: 'learning',
      content: {
        ar: {
          title: 'إدارة الضغط المتقدمة',
          explanation: `<section>
<h2 style="color: #1a365d;" class="text-xl font-bold mb-4">تقنيات إدارة الضغط المتقدمة</h2>

<p class="mb-4">مع تزايد تعقيد الآبار، تطورت تقنيات إدارة الضغط لمواجهة التحديات الجديدة مثل الآبار العميقة ذات نوافذ وزن الطين الضيقة.</p>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">الحفر بالضغط المتحكم (MPD)</h3>

<p class="mb-4">نظام حفر يستخدم التحكم الدقيق في ضغط قاع البئر للعمل ضمن نوافذ ضيقة جداً.</p>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">مكونات نظام MPD</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li><strong>جهاز التحكم الدوار (RCD):</strong> لإغلاق الحيز الحلقي</li>
<li><strong>منظم الضغط الخلفي:</strong> للتحكم في ضغط السطح</li>
<li><strong>أنظمة القياس الآني:</strong> لمراقبة الضغط والتدفق</li>
</ul>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">فوائد MPD</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>حفر آبار كانت مستحيلة بالطرق التقليدية</li>
<li>تقليل المشاكل المرتبطة بالضغط</li>
<li>تحسين معدل الاختراق</li>
<li>تقليل فقدان الدورة</li>
</ul>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">الحفر بالضغط المنخفض (UBD)</h3>

<p class="mb-4">حفر بضغط قاع بئر أقل من ضغط التكوين عمداً.</p>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">مميزات UBD</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>تحسين معدل الاختراق بشكل كبير</li>
<li>تقليل تضرر منطقة الإنتاج</li>
<li>إمكانية الإنتاج أثناء الحفر</li>
</ul>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">تحديات UBD</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>معدات أمان إضافية مطلوبة</li>
<li>معالجة السوائل المنتجة</li>
<li>استقرار جدار البئر</li>
</ul>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">مراقبة ECD في الوقت الحقيقي</h3>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">أدوات القياس أثناء الحفر (PWD)</h4>
<p class="mb-4">مجسات خاصة في سلسلة الحفر تقيس الضغط قاع البئر مباشرة وترسل البيانات للسطح.</p>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">فوائد PWD</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>قياس ECD الفعلي وليس المحسوب</li>
<li>كشف مبكر للمشاكل</li>
<li>تحسين قرارات التشغيل</li>
</ul>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">إدارة الضغط في الآبار المعقدة</h3>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">الآبار العميقة (HPHT)</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>تأثير الحرارة على كثافة الطين</li>
<li>نوافذ ضيقة بسبب الضغوط العالية</li>
<li>حاجة لمعدات خاصة</li>
</ul>

<p style="color: #c53030;" class="mb-4"><strong>ملاحظة:</strong> إدارة الضغط المتقدمة تتطلب تدريباً متخصصاً وخبرة عملية كبيرة.</p>
</section>`,
          keyTerms: [
            { term: 'الحفر بالضغط المتحكم (MPD)', definition: 'نظام للتحكم الدقيق في ضغط قاع البئر' },
            { term: 'الحفر بالضغط المنخفض (UBD)', definition: 'الحفر بضغط أقل من ضغط التكوين' },
            { term: 'جهاز التحكم الدوار (RCD)', definition: 'جهاز لإغلاق الحيز الحلقي مع السماح بالدوران' },
            { term: 'PWD', definition: 'أداة قياس الضغط أثناء الحفر في سلسلة الحفر' },
            { term: 'HPHT', definition: 'آبار الضغط العالي والحرارة العالية' }
          ],
          practiceQuestion: {
            question: 'ما هو الغرض الرئيسي من نظام الحفر بالضغط المتحكم (MPD)؟',
            options: ['زيادة سرعة الحفر فقط', 'العمل ضمن نوافذ وزن طين ضيقة', 'تقليل تكلفة الطين', 'إلغاء الحاجة لمعدات الأمان'],
            correctAnswer: 1
          }
        },
        en: {
          title: 'Advanced Pressure Management',
          explanation: `<section>
<h2 style="color: #1a365d;" class="text-xl font-bold mb-4">Advanced Pressure Management Techniques</h2>

<p class="mb-4">As wells become more complex, pressure management techniques have evolved to address new challenges such as deep wells with narrow mud weight windows.</p>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">Managed Pressure Drilling (MPD)</h3>

<p class="mb-4">A drilling system that uses precise bottomhole pressure control to operate within very narrow windows.</p>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">MPD System Components</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li><strong>Rotating Control Device (RCD):</strong> To seal the annulus</li>
<li><strong>Backpressure Regulator:</strong> To control surface pressure</li>
<li><strong>Real-time Monitoring Systems:</strong> To monitor pressure and flow</li>
</ul>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">Benefits of MPD</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>Drilling wells impossible with conventional methods</li>
<li>Reducing pressure-related problems</li>
<li>Improving rate of penetration</li>
<li>Reducing lost circulation</li>
</ul>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">Underbalanced Drilling (UBD)</h3>

<p class="mb-4">Drilling with bottomhole pressure intentionally lower than formation pressure.</p>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">Advantages of UBD</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>Significantly improved rate of penetration</li>
<li>Reduced formation damage</li>
<li>Ability to produce while drilling</li>
</ul>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">Challenges of UBD</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>Additional safety equipment required</li>
<li>Handling produced fluids</li>
<li>Wellbore stability</li>
</ul>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">Real-time ECD Monitoring</h3>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">Pressure While Drilling (PWD) Tools</h4>
<p class="mb-4">Special sensors in the drillstring that measure bottomhole pressure directly and transmit data to surface.</p>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">Benefits of PWD</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>Measuring actual ECD, not calculated</li>
<li>Early problem detection</li>
<li>Improved operational decisions</li>
</ul>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">Pressure Management in Complex Wells</h3>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">Deep Wells (HPHT)</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>Temperature effect on mud density</li>
<li>Narrow windows due to high pressures</li>
<li>Need for special equipment</li>
</ul>

<p style="color: #c53030;" class="mb-4"><strong>Note:</strong> Advanced pressure management requires specialized training and significant practical experience.</p>
</section>`,
          keyTerms: [
            { term: 'Managed Pressure Drilling (MPD)', definition: 'System for precise bottomhole pressure control' },
            { term: 'Underbalanced Drilling (UBD)', definition: 'Drilling with pressure below formation pressure' },
            { term: 'Rotating Control Device (RCD)', definition: 'Device to seal annulus while allowing rotation' },
            { term: 'PWD', definition: 'Pressure While Drilling tool in the drillstring' },
            { term: 'HPHT', definition: 'High Pressure High Temperature wells' }
          ],
          practiceQuestion: {
            question: 'What is the main purpose of Managed Pressure Drilling (MPD)?',
            options: ['Increase drilling speed only', 'Operate within narrow mud weight windows', 'Reduce mud costs', 'Eliminate need for safety equipment'],
            correctAnswer: 1
          }
        }
      }
    },
    {
      day: 6,
      type: 'quiz',
      content: {
        ar: {
          title: 'اختبار حسابات الضغط و ECD',
          explanation: 'اختبر معلوماتك حول مفاهيم الضغط وحسابات ECD',
          keyTerms: []
        },
        en: {
          title: 'Pressure & ECD Calculations Quiz',
          explanation: 'Test your knowledge of pressure concepts and ECD calculations',
          keyTerms: []
        }
      },
      quiz: {
        ar: [
          {
            question: 'ما هي معادلة الضغط الهيدروستاتيكي بالوحدات الميدانية؟',
            options: ['P = MW × TVD', 'P = 0.052 × MW × TVD', 'P = 0.433 × MW × TVD', 'P = MW / TVD'],
            correctAnswer: 1
          },
          {
            question: 'إذا كان وزن الطين 11 ppg والعمق 10,000 ft، ما هو الضغط الهيدروستاتيكي؟',
            options: ['5,200 psi', '5,720 psi', '4,330 psi', '6,240 psi'],
            correctAnswer: 1
          },
          {
            question: 'ما الذي يسبب زيادة ECD عن وزن الطين الساكن؟',
            options: ['العمق فقط', 'فقدان الضغط في الحيز الحلقي', 'درجة الحرارة', 'نوع الرأس الحفار'],
            correctAnswer: 1
          },
          {
            question: 'ما هو ضغط Surge؟',
            options: ['انخفاض الضغط عند السحب', 'زيادة الضغط عند الإنزال', 'الضغط الثابت', 'ضغط المضخة'],
            correctAnswer: 1
          },
          {
            question: 'ما هي نافذة وزن الطين؟',
            options: ['النطاق بين ضغط المسام وضغط التكسير', 'وزن الطين الأمثل فقط', 'كثافة الماء', 'ضغط السطح'],
            correctAnswer: 0
          },
          {
            question: 'ما هو MAASP؟',
            options: ['أقل ضغط مسموح', 'أقصى ضغط سطحي حلقي مسموح', 'ضغط المضخة الأقصى', 'ضغط التكوين'],
            correctAnswer: 1
          },
          {
            question: 'ما الذي يحدث إذا تجاوز ECD ضغط التكسير؟',
            options: ['تدفق التكوين', 'فقدان الدورة', 'زيادة ROP', 'لا شيء'],
            correctAnswer: 1
          },
          {
            question: 'ما هو الغرض من هامش الرحلة (Trip Margin)؟',
            options: ['زيادة سرعة الحفر', 'مواجهة تأثيرات Swab', 'تقليل تكلفة الطين', 'تحسين التنظيف'],
            correctAnswer: 1
          },
          {
            question: 'ما هو نظام MPD؟',
            options: ['حفر تقليدي', 'حفر بالضغط المتحكم', 'حفر أفقي', 'حفر بحري فقط'],
            correctAnswer: 1
          },
          {
            question: 'ما الذي يقيسه جهاز PWD؟',
            options: ['وزن على الرأس', 'الضغط قاع البئر', 'سرعة الدوران', 'عزم الدوران'],
            correctAnswer: 1
          }
        ],
        en: [
          {
            question: 'What is the hydrostatic pressure equation in field units?',
            options: ['P = MW × TVD', 'P = 0.052 × MW × TVD', 'P = 0.433 × MW × TVD', 'P = MW / TVD'],
            correctAnswer: 1
          },
          {
            question: 'If mud weight is 11 ppg and depth is 10,000 ft, what is the hydrostatic pressure?',
            options: ['5,200 psi', '5,720 psi', '4,330 psi', '6,240 psi'],
            correctAnswer: 1
          },
          {
            question: 'What causes ECD to be higher than static mud weight?',
            options: ['Depth only', 'Annular pressure loss', 'Temperature', 'Bit type'],
            correctAnswer: 1
          },
          {
            question: 'What is Surge pressure?',
            options: ['Pressure decrease when pulling', 'Pressure increase when running in', 'Static pressure', 'Pump pressure'],
            correctAnswer: 1
          },
          {
            question: 'What is the mud weight window?',
            options: ['Range between pore and fracture pressure', 'Optimum mud weight only', 'Water density', 'Surface pressure'],
            correctAnswer: 0
          },
          {
            question: 'What is MAASP?',
            options: ['Minimum allowable pressure', 'Maximum allowable annular surface pressure', 'Maximum pump pressure', 'Formation pressure'],
            correctAnswer: 1
          },
          {
            question: 'What happens if ECD exceeds fracture pressure?',
            options: ['Formation kick', 'Lost circulation', 'Increased ROP', 'Nothing'],
            correctAnswer: 1
          },
          {
            question: 'What is the purpose of Trip Margin?',
            options: ['Increase drilling speed', 'Counter Swab effects', 'Reduce mud cost', 'Improve hole cleaning'],
            correctAnswer: 1
          },
          {
            question: 'What is MPD system?',
            options: ['Conventional drilling', 'Managed pressure drilling', 'Horizontal drilling', 'Offshore drilling only'],
            correctAnswer: 1
          },
          {
            question: 'What does PWD tool measure?',
            options: ['Weight on bit', 'Bottomhole pressure', 'Rotary speed', 'Torque'],
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
          title: 'مشروع حسابات الضغط',
          explanation: 'تطبيق عملي لحسابات الضغط و ECD',
          keyTerms: []
        },
        en: {
          title: 'Pressure Calculations Project',
          explanation: 'Practical application of pressure and ECD calculations',
          keyTerms: []
        }
      },
      project: {
        ar: {
          title: 'تحليل ضغوط بئر حقيقي',
          description: 'قم بتحليل بيانات ضغط لبئر افتراضي وحساب المعاملات الهامة.',
          instructions: [
            'احسب الضغط الهيدروستاتيكي لوزن طين 10.5 ppg وعمق 15,000 ft',
            'احسب ECD إذا كان فقدان الضغط الحلقي 520 psi',
            'حدد MAASP إذا كان تدرج التكسير 16 ppg وعمق الحذاء 9,000 ft',
            'اقترح نافذة وزن الطين الآمنة إذا كان ضغط المسام 9.2 ppg EMW',
            'ناقش المخاطر المحتملة وكيفية تجنبها'
          ],
          submissionType: 'both'
        },
        en: {
          title: 'Real Well Pressure Analysis',
          description: 'Analyze pressure data for a hypothetical well and calculate important parameters.',
          instructions: [
            'Calculate hydrostatic pressure for 10.5 ppg mud weight and 15,000 ft depth',
            'Calculate ECD if annular pressure loss is 520 psi',
            'Determine MAASP if fracture gradient is 16 ppg and shoe depth is 9,000 ft',
            'Suggest safe mud weight window if pore pressure is 9.2 ppg EMW',
            'Discuss potential risks and how to avoid them'
          ],
          submissionType: 'both'
        }
      }
    }
  ]
};
