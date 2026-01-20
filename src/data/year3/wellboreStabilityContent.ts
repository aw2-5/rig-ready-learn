import { WeeklyLesson } from '../weeklyContent';

export const wellboreStabilityLesson: WeeklyLesson = {
  lessonId: 'wellbore-stability',
  days: [
    {
      day: 1,
      type: 'learning',
      content: {
        ar: {
          title: 'استقرار جدار البئر - المفاهيم الأساسية والأثر الاقتصادي',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 مقدمة شاملة في استقرار جدار البئر (Wellbore Stability)</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<p style="font-size: 1.1rem; line-height: 1.8;">
<strong>استقرار جدار البئر (Wellbore Stability)</strong> هو أحد أهم وأعقد التحديات في صناعة حفر الآبار النفطية والغازية. يُعرّف بأنه قدرة جدار البئر على الحفاظ على شكله الأسطواني وسلامته الهيكلية أثناء وبعد عمليات الحفر. عدم الاستقرار يمثل تهديداً خطيراً لسلامة العمليات ويكلف الصناعة مليارات الدولارات سنوياً.
</p>
</div>

<div style="background: #fef2f2; padding: 1.5rem; border-radius: 10px; border-right: 4px solid #dc2626; margin: 1.5rem 0;">
<h4 style="color: #dc2626; margin-bottom: 0.75rem; font-size: 1.15rem;">⚠️ الأثر الاقتصادي الهائل:</h4>
<ul style="margin: 0; padding-right: 1.25rem; color: #7f1d1d; line-height: 2;">
<li><strong>تكاليف عدم الاستقرار:</strong> تتراوح بين 5-15% من إجمالي تكلفة البئر</li>
<li><strong>الخسائر العالمية السنوية:</strong> تتجاوز 1-2 مليار دولار</li>
<li><strong>التأخيرات الزمنية:</strong> يمكن أن تضيف أسابيع إلى جدول الحفر</li>
<li><strong>أسوأ السيناريوهات:</strong> فقدان البئر بالكامل وتكلفة إعادة الحفر</li>
<li><strong>التكاليف غير المباشرة:</strong> تأخر الإنتاج، إصلاح المعدات، المسؤولية البيئية</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 أنواع مشاكل عدم الاستقرار الرئيسية</h3>

<div style="display: grid; gap: 1.25rem; margin-bottom: 1.5rem;">
<div style="background: #fef3c7; padding: 1.5rem; border-radius: 10px; border: 2px solid #f59e0b;">
<h4 style="color: #92400e; margin-bottom: 0.75rem; font-size: 1.1rem;">🔸 انهيار جدار البئر (Wellbore Collapse / Breakout)</h4>
<p style="color: #78350f; line-height: 1.8; margin-bottom: 0.75rem;">
يحدث عندما يتجاوز الإجهاد الضاغط (Compressive Stress) المحيط بالبئر قوة الصخر، مما يؤدي إلى انهيار المادة الصخرية داخل تجويف البئر. هذا النوع شائع جداً في:
</p>
<ul style="margin: 0; padding-right: 1.25rem; color: #78350f; line-height: 1.8;">
<li>التكوينات الطينية (Shale) خاصة الضعيفة منها</li>
<li>التكوينات غير المتماسكة (Unconsolidated Formations)</li>
<li>مناطق الضغوط الشاذة (Abnormal Pressure Zones)</li>
<li>الآبار العميقة ذات الإجهادات العالية</li>
</ul>
<p style="color: #78350f; line-height: 1.8; margin-top: 0.75rem;">
<strong>العلامات الميدانية:</strong> زيادة الفتات (Cavings)، ارتفاع Torque، صعوبة تدوير الأنابيب.
</p>
</div>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 10px; border: 2px solid #3b82f6;">
<h4 style="color: #1e40af; margin-bottom: 0.75rem; font-size: 1.1rem;">🔹 تكسر التكوين (Formation Fracture / Tensile Failure)</h4>
<p style="color: #1e3a8a; line-height: 1.8; margin-bottom: 0.75rem;">
يحدث عندما يتجاوز ضغط سائل الحفر (Mud Pressure) قوة تماسك التكوين (Tensile Strength)، مما يؤدي إلى فتح شقوق في الصخر وفقدان سائل الحفر إلى التكوين.
</p>
<ul style="margin: 0; padding-right: 1.25rem; color: #1e3a8a; line-height: 1.8;">
<li>أكثر شيوعاً في التكوينات الضعيفة والهشة</li>
<li>يزداد خطره عند زيادة وزن سائل الحفر</li>
<li>يتسبب في فقدان الدورة (Lost Circulation)</li>
<li>قد يؤدي لمشاكل ضغط وتدفق التكوين</li>
</ul>
<p style="color: #1e3a8a; line-height: 1.8; margin-top: 0.75rem;">
<strong>العلامات:</strong> انخفاض مستوى الحوض، انخفاض الضغط، فقدان سائل الحفر.
</p>
</div>

<div style="background: #dcfce7; padding: 1.5rem; border-radius: 10px; border: 2px solid #22c55e;">
<h4 style="color: #166534; margin-bottom: 0.75rem; font-size: 1.1rem;">🔹 تضخم التكوين (Formation Swelling / Hydration)</h4>
<p style="color: #14532d; line-height: 1.8; margin-bottom: 0.75rem;">
يحدث في التكوينات الطينية التفاعلية (Reactive Shales) عند تعرضها لسوائل حفر مائية غير متوافقة. الطين يمتص الماء ويتضخم، مما يضيّق قطر البئر.
</p>
<ul style="margin: 0; padding-right: 1.25rem; color: #14532d; line-height: 1.8;">
<li>معدن السمكتايت (Smectite) الأكثر تضخماً</li>
<li>يؤدي إلى تضيق البئر (Hole Closure)</li>
<li>يسبب انحشار الأنابيب (Stuck Pipe)</li>
<li>يتطلب استخدام سوائل مثبطة (Inhibitive Muds)</li>
</ul>
</div>

<div style="background: #fce7f3; padding: 1.5rem; border-radius: 10px; border: 2px solid #ec4899;">
<h4 style="color: #be185d; margin-bottom: 0.75rem; font-size: 1.1rem;">🔹 انزلاق الطبقات (Sloughing / Spalling)</h4>
<p style="color: #9d174d; line-height: 1.8;">
سقوط قطع صخرية كبيرة من جدار البئر نتيجة ضعف التماسك أو التعرض الطويل لسائل الحفر. يختلف عن الانهيار بأنه يحدث على شكل قطع كبيرة متقطعة.
</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 العوامل الأساسية المؤثرة على الاستقرار</h3>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #1e3a5f; margin-bottom: 1rem; font-size: 1.1rem;">1️⃣ الإجهادات في الموقع (In-Situ Stresses)</h4>
<p style="line-height: 1.8; margin-bottom: 1rem;">
الإجهادات الطبيعية الموجودة في التكوين قبل الحفر. تتكون من ثلاثة إجهادات رئيسية:
</p>
<div style="background: #dbeafe; padding: 1rem; border-radius: 8px; margin: 0.75rem 0;">
<ul style="margin: 0; padding-right: 1.25rem; color: #1e3a8a; line-height: 2;">
<li><strong>الإجهاد الرأسي (σv - Vertical/Overburden Stress):</strong> ناتج عن وزن الطبقات الفوقية. يُحسب من كثافة الصخور × العمق × الجاذبية. عادة أكبر الإجهادات الثلاثة.</li>
<li><strong>الإجهاد الأفقي الأقصى (σH - Maximum Horizontal Stress):</strong> أكبر إجهاد أفقي، يحدد اتجاه الشقوق المحتملة.</li>
<li><strong>الإجهاد الأفقي الأدنى (σh - Minimum Horizontal Stress):</strong> أصغر إجهاد أفقي، يحدد ضغط التكسر.</li>
</ul>
</div>

<h4 style="color: #1e3a5f; margin: 1.5rem 0 1rem 0; font-size: 1.1rem;">2️⃣ خصائص الصخر الميكانيكية</h4>
<div style="background: #f0fdf4; padding: 1rem; border-radius: 8px; margin: 0.75rem 0;">
<ul style="margin: 0; padding-right: 1.25rem; line-height: 2;">
<li><strong>قوة الضغط غير المحصورة (UCS):</strong> قوة الصخر تحت الضغط. قيم منخفضة تعني صخر ضعيف.</li>
<li><strong>زاوية الاحتكاك الداخلي (φ):</strong> مقاومة الصخر للانزلاق. تتراوح 20-45 درجة.</li>
<li><strong>معامل يونج (E):</strong> صلابة الصخر ومقاومته للتشوه.</li>
<li><strong>نسبة بواسون (ν):</strong> نسبة التشوه الجانبي للطولي.</li>
<li><strong>قوة الشد (Tensile Strength):</strong> عادة 1/10 من UCS.</li>
</ul>
</div>

<h4 style="color: #1e3a5f; margin: 1.5rem 0 1rem 0; font-size: 1.1rem;">3️⃣ ضغط المسام (Pore Pressure)</h4>
<p style="line-height: 1.8;">
ضغط السوائل داخل مسام التكوين. له تأثير كبير على الاستقرار:
</p>
<ul style="margin: 0; padding-right: 1.25rem; line-height: 1.8;">
<li>ضغط المسام العالي يقلل من الإجهاد الفعال ويضعف الصخر</li>
<li>يحدد الحد الأدنى لوزن سائل الحفر</li>
<li>الضغوط الشاذة تتطلب وزن طين أعلى</li>
</ul>
</div>

<div style="background: #e8f4fd; padding: 1.5rem; border-radius: 10px; margin: 1.5rem 0;">
<h4 style="color: #1e40af; margin-bottom: 0.75rem; font-size: 1.15rem;">💡 نافذة وزن الطين (Mud Weight Window) - المفهوم الأهم:</h4>
<p style="color: #1e3a8a; line-height: 1.8; margin-bottom: 1rem;">
النطاق الآمن لوزن سائل الحفر الذي يحقق استقرار البئر:
</p>
<div style="background: white; padding: 1rem; border-radius: 8px; text-align: center; margin: 1rem 0;">
<p style="font-size: 1.1rem; font-weight: bold; color: #1e3a5f;">
ضغط الانهيار ≤ وزن الطين ≤ ضغط التكسر
</p>
<p style="color: #64748b; font-size: 0.9rem;">
Collapse Pressure ≤ Mud Weight ≤ Fracture Pressure
</p>
</div>
<ul style="margin: 0; padding-right: 1.25rem; color: #1e3a8a; line-height: 1.8;">
<li><strong>الحد الأدنى:</strong> أعلى قيمة بين ضغط الانهيار وضغط المسام</li>
<li><strong>الحد الأقصى:</strong> ضغط التكسر (Fracture Gradient)</li>
<li><strong>النافذة الضيقة:</strong> تتطلب تقنيات متقدمة مثل MPD</li>
</ul>
</div>

<div style="background: #fff7ed; padding: 1.5rem; border-radius: 10px; border: 2px solid #f97316; margin: 1.5rem 0;">
<h4 style="color: #c2410c; margin-bottom: 0.75rem;">⚡ حقيقة ميدانية:</h4>
<p style="color: #9a3412; line-height: 1.8;">
في بعض الآبار العميقة والمعقدة، قد تكون نافذة وزن الطين ضيقة جداً (أقل من 0.5 ppg)، مما يجعل الحفاظ على الاستقرار تحدياً هندسياً كبيراً يتطلب مراقبة دقيقة وتعديلات مستمرة.
</p>
</div>
</section>`,
          keyTerms: [
            { term: 'Wellbore Stability', definition: 'قدرة جدار البئر على الحفاظ على شكله وسلامته الهيكلية أثناء وبعد الحفر' },
            { term: 'In-Situ Stress', definition: 'الإجهادات الطبيعية الموجودة في التكوين قبل الحفر (σv, σH, σh)' },
            { term: 'Mud Weight Window', definition: 'النطاق الآمن لوزن سائل الحفر بين ضغط الانهيار وضغط التكسر' },
            { term: 'UCS', definition: 'قوة الضغط غير المحصورة - مقياس قوة الصخر تحت الضغط' },
            { term: 'Pore Pressure', definition: 'ضغط السوائل داخل مسام التكوين' },
            { term: 'Breakout', definition: 'منطقة انهيار على جدار البئر ناتجة عن إجهاد ضاغط' }
          ],
          practiceQuestion: {
            question: 'ما هو السبب الرئيسي لانهيار جدار البئر (Wellbore Collapse)؟',
            options: [
              'ضغط سائل الحفر أعلى من ضغط التكسر',
              'الإجهاد الضاغط المحيط بالبئر يتجاوز قوة الصخر',
              'سرعة دوران رأس الحفر العالية جداً',
              'درجة الحرارة المنخفضة في التكوين'
            ],
            correctAnswer: 1
          }
        },
        en: {
          title: 'Wellbore Stability - Fundamental Concepts and Economic Impact',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Comprehensive Introduction to Wellbore Stability</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<p style="font-size: 1.1rem; line-height: 1.8;">
<strong>Wellbore Stability</strong> is one of the most important and complex challenges in oil and gas drilling. It's defined as the wellbore's ability to maintain its cylindrical shape and structural integrity during and after drilling operations. Instability poses serious threats to operational safety and costs the industry billions of dollars annually.
</p>
</div>

<div style="background: #fef2f2; padding: 1.5rem; border-radius: 10px; border-left: 4px solid #dc2626; margin: 1.5rem 0;">
<h4 style="color: #dc2626; margin-bottom: 0.75rem; font-size: 1.15rem;">⚠️ Massive Economic Impact:</h4>
<ul style="margin: 0; padding-left: 1.25rem; color: #7f1d1d; line-height: 2;">
<li><strong>Instability Costs:</strong> Range from 5-15% of total well cost</li>
<li><strong>Annual Global Losses:</strong> Exceed $1-2 billion</li>
<li><strong>Time Delays:</strong> Can add weeks to drilling schedule</li>
<li><strong>Worst Scenarios:</strong> Complete well loss and redrilling costs</li>
<li><strong>Indirect Costs:</strong> Delayed production, equipment repairs, environmental liability</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 Main Types of Instability Problems</h3>

<div style="display: grid; gap: 1.25rem; margin-bottom: 1.5rem;">
<div style="background: #fef3c7; padding: 1.5rem; border-radius: 10px; border: 2px solid #f59e0b;">
<h4 style="color: #92400e; margin-bottom: 0.75rem; font-size: 1.1rem;">🔸 Wellbore Collapse / Breakout</h4>
<p style="color: #78350f; line-height: 1.8; margin-bottom: 0.75rem;">
Occurs when compressive stress around the wellbore exceeds rock strength, causing rock material to collapse into the wellbore cavity. This type is very common in:
</p>
<ul style="margin: 0; padding-left: 1.25rem; color: #78350f; line-height: 1.8;">
<li>Shale formations, especially weak ones</li>
<li>Unconsolidated Formations</li>
<li>Abnormal Pressure Zones</li>
<li>Deep wells with high stresses</li>
</ul>
<p style="color: #78350f; line-height: 1.8; margin-top: 0.75rem;">
<strong>Field Signs:</strong> Increased cavings, elevated torque, difficulty rotating pipe.
</p>
</div>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 10px; border: 2px solid #3b82f6;">
<h4 style="color: #1e40af; margin-bottom: 0.75rem; font-size: 1.1rem;">🔹 Formation Fracture / Tensile Failure</h4>
<p style="color: #1e3a8a; line-height: 1.8; margin-bottom: 0.75rem;">
Occurs when mud pressure exceeds formation tensile strength, opening fractures and losing drilling fluid into the formation.
</p>
<ul style="margin: 0; padding-left: 1.25rem; color: #1e3a8a; line-height: 1.8;">
<li>More common in weak and brittle formations</li>
<li>Risk increases with higher mud weight</li>
<li>Causes lost circulation</li>
<li>May lead to pressure and kick problems</li>
</ul>
<p style="color: #1e3a8a; line-height: 1.8; margin-top: 0.75rem;">
<strong>Signs:</strong> Pit level drop, pressure decrease, mud losses.
</p>
</div>

<div style="background: #dcfce7; padding: 1.5rem; border-radius: 10px; border: 2px solid #22c55e;">
<h4 style="color: #166534; margin-bottom: 0.75rem; font-size: 1.1rem;">🔹 Formation Swelling / Hydration</h4>
<p style="color: #14532d; line-height: 1.8; margin-bottom: 0.75rem;">
Occurs in reactive shale formations when exposed to incompatible water-based drilling fluids. Clay absorbs water and swells, narrowing the wellbore diameter.
</p>
<ul style="margin: 0; padding-left: 1.25rem; color: #14532d; line-height: 1.8;">
<li>Smectite mineral is the most swelling</li>
<li>Leads to hole closure</li>
<li>Causes stuck pipe</li>
<li>Requires inhibitive muds</li>
</ul>
</div>

<div style="background: #fce7f3; padding: 1.5rem; border-radius: 10px; border: 2px solid #ec4899;">
<h4 style="color: #be185d; margin-bottom: 0.75rem; font-size: 1.1rem;">🔹 Sloughing / Spalling</h4>
<p style="color: #9d174d; line-height: 1.8;">
Large rock pieces falling from wellbore wall due to weak bonding or prolonged exposure to drilling fluid. Differs from collapse as it occurs as large intermittent pieces.
</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 Fundamental Factors Affecting Stability</h3>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #1e3a5f; margin-bottom: 1rem; font-size: 1.1rem;">1️⃣ In-Situ Stresses</h4>
<p style="line-height: 1.8; margin-bottom: 1rem;">
Natural stresses present in the formation before drilling. Composed of three principal stresses:
</p>
<div style="background: #dbeafe; padding: 1rem; border-radius: 8px; margin: 0.75rem 0;">
<ul style="margin: 0; padding-left: 1.25rem; color: #1e3a8a; line-height: 2;">
<li><strong>Vertical Stress (σv - Overburden):</strong> From overlying rock weight. Calculated from rock density × depth × gravity. Usually the largest of the three.</li>
<li><strong>Maximum Horizontal Stress (σH):</strong> Largest horizontal stress, determines potential fracture direction.</li>
<li><strong>Minimum Horizontal Stress (σh):</strong> Smallest horizontal stress, determines fracture pressure.</li>
</ul>
</div>

<h4 style="color: #1e3a5f; margin: 1.5rem 0 1rem 0; font-size: 1.1rem;">2️⃣ Mechanical Rock Properties</h4>
<div style="background: #f0fdf4; padding: 1rem; border-radius: 8px; margin: 0.75rem 0;">
<ul style="margin: 0; padding-left: 1.25rem; line-height: 2;">
<li><strong>Unconfined Compressive Strength (UCS):</strong> Rock strength under compression. Low values mean weak rock.</li>
<li><strong>Internal Friction Angle (φ):</strong> Rock resistance to sliding. Ranges 20-45 degrees.</li>
<li><strong>Young's Modulus (E):</strong> Rock stiffness and resistance to deformation.</li>
<li><strong>Poisson's Ratio (ν):</strong> Ratio of lateral to longitudinal strain.</li>
<li><strong>Tensile Strength:</strong> Usually 1/10 of UCS.</li>
</ul>
</div>

<h4 style="color: #1e3a5f; margin: 1.5rem 0 1rem 0; font-size: 1.1rem;">3️⃣ Pore Pressure</h4>
<p style="line-height: 1.8;">
Fluid pressure within formation pores. Significant impact on stability:
</p>
<ul style="margin: 0; padding-left: 1.25rem; line-height: 1.8;">
<li>High pore pressure reduces effective stress and weakens rock</li>
<li>Determines minimum mud weight</li>
<li>Abnormal pressures require higher mud weight</li>
</ul>
</div>

<div style="background: #e8f4fd; padding: 1.5rem; border-radius: 10px; margin: 1.5rem 0;">
<h4 style="color: #1e40af; margin-bottom: 0.75rem; font-size: 1.15rem;">💡 Mud Weight Window - The Most Important Concept:</h4>
<p style="color: #1e3a8a; line-height: 1.8; margin-bottom: 1rem;">
The safe range for drilling fluid weight that maintains wellbore stability:
</p>
<div style="background: white; padding: 1rem; border-radius: 8px; text-align: center; margin: 1rem 0;">
<p style="font-size: 1.1rem; font-weight: bold; color: #1e3a5f;">
Collapse Pressure ≤ Mud Weight ≤ Fracture Pressure
</p>
</div>
<ul style="margin: 0; padding-left: 1.25rem; color: #1e3a8a; line-height: 1.8;">
<li><strong>Lower Limit:</strong> Higher of collapse pressure or pore pressure</li>
<li><strong>Upper Limit:</strong> Fracture Gradient</li>
<li><strong>Narrow Window:</strong> Requires advanced techniques like MPD</li>
</ul>
</div>

<div style="background: #fff7ed; padding: 1.5rem; border-radius: 10px; border: 2px solid #f97316; margin: 1.5rem 0;">
<h4 style="color: #c2410c; margin-bottom: 0.75rem;">⚡ Field Fact:</h4>
<p style="color: #9a3412; line-height: 1.8;">
In some deep and complex wells, the mud weight window may be very narrow (less than 0.5 ppg), making stability maintenance a significant engineering challenge requiring precise monitoring and continuous adjustments.
</p>
</div>
</section>`,
          keyTerms: [
            { term: 'Wellbore Stability', definition: 'Wellbore ability to maintain shape and structural integrity during and after drilling' },
            { term: 'In-Situ Stress', definition: 'Natural stresses present in formation before drilling (σv, σH, σh)' },
            { term: 'Mud Weight Window', definition: 'Safe drilling fluid weight range between collapse and fracture pressures' },
            { term: 'UCS', definition: 'Unconfined Compressive Strength - measure of rock strength under compression' },
            { term: 'Pore Pressure', definition: 'Fluid pressure within formation pores' },
            { term: 'Breakout', definition: 'Collapse zone on wellbore wall caused by compressive stress' }
          ],
          practiceQuestion: {
            question: 'What is the main cause of wellbore collapse?',
            options: [
              'Mud pressure higher than fracture pressure',
              'Compressive stress around wellbore exceeds rock strength',
              'Very high drill bit rotation speed',
              'Low formation temperature'
            ],
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
          title: 'ميكانيكا الصخور وتحليل الإجهادات المتقدم',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 ميكانيكا الصخور (Rock Mechanics) - أساس فهم الاستقرار</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<p style="font-size: 1.1rem; line-height: 1.8;">
فهم ميكانيكا الصخور ضروري للتنبؤ بسلوك التكوينات أثناء الحفر. عند حفر البئر، نزيل المادة الصخرية التي كانت تدعم التكوين، مما يغير حالة الإجهاد الطبيعية ويخلق تركيزات إجهاد حول جدار البئر يجب موازنتها بضغط سائل الحفر.
</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 إعادة توزيع الإجهادات حول البئر (Stress Redistribution)</h3>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
عند حفر البئر الرأسي، تتركز الإجهادات على جدار البئر وتتحول إلى نظام إحداثيات أسطواني. الإجهادات الثلاثة الرئيسية على جدار البئر الرأسي:
</p>

<div style="display: grid; gap: 1rem; margin: 1rem 0;">
<div style="background: #dbeafe; padding: 1.25rem; border-radius: 8px;">
<h4 style="color: #1e40af; margin-bottom: 0.5rem;">🔹 الإجهاد الشعاعي (Radial Stress - σr)</h4>
<p style="color: #1e3a8a; line-height: 1.8;">
على جدار البئر، يساوي ضغط سائل الحفر (Pw). هذا الإجهاد يوفر الدعم لجدار البئر ويمنع الانهيار.
</p>
</div>

<div style="background: #fef3c7; padding: 1.25rem; border-radius: 8px;">
<h4 style="color: #92400e; margin-bottom: 0.5rem;">🔹 الإجهاد المماسي (Tangential/Hoop Stress - σθ)</h4>
<p style="color: #78350f; line-height: 1.8;">
يتغير حول محيط البئر ويعتمد على الإجهادات الأفقية الأصلية. أقصى قيمة عند اتجاه σh (حيث تحدث Breakouts)، وأدنى قيمة عند اتجاه σH (حيث تحدث DIFs).
</p>
</div>

<div style="background: #dcfce7; padding: 1.25rem; border-radius: 8px;">
<h4 style="color: #166534; margin-bottom: 0.5rem;">🔹 الإجهاد المحوري (Axial Stress - σz)</h4>
<p style="color: #14532d; line-height: 1.8;">
موازي لمحور البئر، يعتمد على إجهاد الـ Overburden وتأثير بواسون من الإجهادات الأفقية.
</p>
</div>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 معايير الفشل (Failure Criteria)</h3>

<div style="display: grid; gap: 1.25rem; margin-bottom: 1.5rem;">
<div style="background: #fef3c7; padding: 1.5rem; border-radius: 10px; border: 2px solid #f59e0b;">
<h4 style="color: #92400e; margin-bottom: 0.75rem; font-size: 1.1rem;">🔸 معيار موهر-كولوم (Mohr-Coulomb Criterion)</h4>
<p style="color: #78350f; line-height: 1.8; margin-bottom: 0.75rem;">
الأكثر استخداماً في تحليل استقرار البئر. يعتمد على معلمتين أساسيتين:
</p>
<ul style="margin: 0; padding-right: 1.25rem; color: #78350f; line-height: 1.8;">
<li><strong>التماسك (Cohesion - C):</strong> قوة الصخر عند عدم وجود ضغط</li>
<li><strong>زاوية الاحتكاك الداخلي (φ):</strong> زيادة القوة مع الضغط المحيط</li>
</ul>
<div style="background: white; padding: 0.75rem; border-radius: 6px; margin-top: 0.75rem; text-align: center;">
<p style="font-weight: bold; color: #1e3a5f;">τ = C + σn × tan(φ)</p>
<p style="font-size: 0.85rem; color: #64748b;">حيث τ = إجهاد القص، σn = الإجهاد العمودي</p>
</div>
</div>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 10px; border: 2px solid #3b82f6;">
<h4 style="color: #1e40af; margin-bottom: 0.75rem; font-size: 1.1rem;">🔹 معيار دركر-براجر (Drucker-Prager)</h4>
<p style="color: #1e3a8a; line-height: 1.8;">
توسيع لمعيار Von Mises ليشمل تأثير الضغط المحيط. يستخدم في التحليلات ثلاثية الأبعاد وأكثر واقعية للصخور.
</p>
</div>

<div style="background: #dcfce7; padding: 1.5rem; border-radius: 10px; border: 2px solid #22c55e;">
<h4 style="color: #166534; margin-bottom: 0.75rem; font-size: 1.1rem;">🔹 معيار موجي-كولوم (Mogi-Coulomb)</h4>
<p style="color: #14532d; line-height: 1.8;">
يأخذ بعين الاعتبار تأثير الإجهاد الوسيط (σ2)، مما يعطي تنبؤات أكثر دقة لقوة الصخر، خاصة في الآبار الأفقية والمائلة.
</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 Breakouts و DIFs - مؤشرات الفشل</h3>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<div style="display: grid; gap: 1.25rem;">
<div style="background: #fef2f2; padding: 1.25rem; border-radius: 8px; border-right: 3px solid #dc2626;">
<h4 style="color: #dc2626; margin-bottom: 0.5rem;">🔴 Breakouts (انهيارات القص)</h4>
<p style="color: #7f1d1d; line-height: 1.8;">
مناطق انهيار على جانبي البئر في اتجاه الإجهاد الأفقي الأدنى (σh). تحدث نتيجة فشل القص عندما يكون الإجهاد المماسي أكبر من قوة الصخر. شكلها مميز (Dog-ear shape) ويمكن رؤيتها في سجلات Caliper.
</p>
</div>

<div style="background: #f0fdf4; padding: 1.25rem; border-radius: 8px; border-right: 3px solid #22c55e;">
<h4 style="color: #166534; margin-bottom: 0.5rem;">🟢 DIFs - Drilling Induced Fractures (شقوق ناتجة عن الحفر)</h4>
<p style="color: #14532d; line-height: 1.8;">
شقوق شد تتكون في اتجاه الإجهاد الأفقي الأقصى (σH). تحدث عندما يتجاوز ضغط سائل الحفر مقاومة الشد للصخر. مؤشر على ضغط طين مرتفع وإمكانية فقدان الدورة.
</p>
</div>
</div>

<div style="background: #e8f4fd; padding: 1.25rem; border-radius: 10px; margin-top: 1rem;">
<h4 style="color: #1e40af; margin-bottom: 0.75rem;">💡 الأهمية التشخيصية:</h4>
<p style="color: #1e3a8a; line-height: 1.8;">
تحديد اتجاه Breakouts و DIFs من سجلات الصور (Image Logs) يساعد في:
</p>
<ul style="margin: 0.5rem 0 0 0; padding-right: 1.25rem; color: #1e3a8a; line-height: 1.8;">
<li>تحديد اتجاهات الإجهادات الأفقية في التكوين</li>
<li>تقدير حجم نافذة وزن الطين</li>
<li>التخطيط لاتجاه الآبار الأفقية والمائلة</li>
<li>تحسين استراتيجية الحفر للمنطقة</li>
</ul>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 تأثير ميل البئر على الاستقرار</h3>

<div style="background: #fff7ed; padding: 1.5rem; border-radius: 10px; border: 2px solid #f97316; margin: 1.5rem 0;">
<p style="color: #9a3412; line-height: 1.8; margin-bottom: 1rem;">
ميل البئر واتجاهه (Azimuth) يؤثران بشكل كبير على توزيع الإجهادات ومتطلبات وزن الطين:
</p>
<ul style="margin: 0; padding-right: 1.25rem; color: #9a3412; line-height: 2;">
<li><strong>الآبار الرأسية:</strong> أبسط حالة، الإجهادات متماثلة نسبياً</li>
<li><strong>الآبار المائلة:</strong> تركيز الإجهاد يتغير مع زاوية الميل</li>
<li><strong>الآبار الأفقية:</strong> أعلى تركيز إجهاد، تتطلب وزن طين أعلى</li>
<li><strong>اتجاه الحفر:</strong> الحفر باتجاه σH أكثر استقراراً من اتجاه σh</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Stress Concentration', definition: 'تركز الإجهادات حول جدار البئر نتيجة إزالة المادة الصخرية' },
            { term: 'Mohr-Coulomb', definition: 'معيار فشل الصخور الأكثر استخداماً، يعتمد على التماسك وزاوية الاحتكاك' },
            { term: 'Breakout', definition: 'منطقة انهيار قص على جدار البئر في اتجاه σh' },
            { term: 'DIF', definition: 'شق ناتج عن الحفر في اتجاه σH نتيجة فشل الشد' },
            { term: 'Hoop Stress', definition: 'الإجهاد المماسي حول محيط البئر' },
            { term: 'Tensile Failure', definition: 'فشل الصخر تحت إجهاد الشد' }
          ],
          practiceQuestion: {
            question: 'أين تحدث الـ Breakouts على جدار البئر؟',
            options: [
              'في اتجاه الإجهاد الأفقي الأقصى (σH)',
              'في اتجاه الإجهاد الأفقي الأدنى (σh)',
              'في الاتجاه الرأسي فقط',
              'بشكل عشوائي حول محيط البئر'
            ],
            correctAnswer: 1
          }
        },
        en: {
          title: 'Rock Mechanics and Advanced Stress Analysis',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Rock Mechanics - Foundation of Stability Understanding</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<p style="font-size: 1.1rem; line-height: 1.8;">
Understanding rock mechanics is essential for predicting formation behavior during drilling. When drilling a well, we remove rock material that was supporting the formation, altering the natural stress state and creating stress concentrations around the wellbore wall that must be balanced by mud pressure.
</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 Stress Redistribution Around Wellbore</h3>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
When drilling a vertical well, stresses concentrate on the wellbore wall and transform to a cylindrical coordinate system. Three principal stresses on a vertical wellbore:
</p>

<div style="display: grid; gap: 1rem; margin: 1rem 0;">
<div style="background: #dbeafe; padding: 1.25rem; border-radius: 8px;">
<h4 style="color: #1e40af; margin-bottom: 0.5rem;">🔹 Radial Stress (σr)</h4>
<p style="color: #1e3a8a; line-height: 1.8;">
At the wellbore wall, equals mud pressure (Pw). This stress provides support to the wellbore wall and prevents collapse.
</p>
</div>

<div style="background: #fef3c7; padding: 1.25rem; border-radius: 8px;">
<h4 style="color: #92400e; margin-bottom: 0.5rem;">🔹 Tangential/Hoop Stress (σθ)</h4>
<p style="color: #78350f; line-height: 1.8;">
Varies around wellbore circumference and depends on original horizontal stresses. Maximum at σh direction (where Breakouts occur), minimum at σH direction (where DIFs occur).
</p>
</div>

<div style="background: #dcfce7; padding: 1.25rem; border-radius: 8px;">
<h4 style="color: #166534; margin-bottom: 0.5rem;">🔹 Axial Stress (σz)</h4>
<p style="color: #14532d; line-height: 1.8;">
Parallel to wellbore axis, depends on overburden stress and Poisson's effect from horizontal stresses.
</p>
</div>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 Failure Criteria</h3>

<div style="display: grid; gap: 1.25rem; margin-bottom: 1.5rem;">
<div style="background: #fef3c7; padding: 1.5rem; border-radius: 10px; border: 2px solid #f59e0b;">
<h4 style="color: #92400e; margin-bottom: 0.75rem; font-size: 1.1rem;">🔸 Mohr-Coulomb Criterion</h4>
<p style="color: #78350f; line-height: 1.8; margin-bottom: 0.75rem;">
Most commonly used in wellbore stability analysis. Based on two fundamental parameters:
</p>
<ul style="margin: 0; padding-left: 1.25rem; color: #78350f; line-height: 1.8;">
<li><strong>Cohesion (C):</strong> Rock strength at zero confining pressure</li>
<li><strong>Internal Friction Angle (φ):</strong> Strength increase with confining pressure</li>
</ul>
<div style="background: white; padding: 0.75rem; border-radius: 6px; margin-top: 0.75rem; text-align: center;">
<p style="font-weight: bold; color: #1e3a5f;">τ = C + σn × tan(φ)</p>
<p style="font-size: 0.85rem; color: #64748b;">where τ = shear stress, σn = normal stress</p>
</div>
</div>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 10px; border: 2px solid #3b82f6;">
<h4 style="color: #1e40af; margin-bottom: 0.75rem; font-size: 1.1rem;">🔹 Drucker-Prager Criterion</h4>
<p style="color: #1e3a8a; line-height: 1.8;">
Extension of Von Mises criterion to include confining pressure effect. Used in 3D analyses and more realistic for rocks.
</p>
</div>

<div style="background: #dcfce7; padding: 1.5rem; border-radius: 10px; border: 2px solid #22c55e;">
<h4 style="color: #166534; margin-bottom: 0.75rem; font-size: 1.1rem;">🔹 Mogi-Coulomb Criterion</h4>
<p style="color: #14532d; line-height: 1.8;">
Accounts for intermediate stress (σ2) effect, giving more accurate rock strength predictions, especially in horizontal and deviated wells.
</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 Breakouts & DIFs - Failure Indicators</h3>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<div style="display: grid; gap: 1.25rem;">
<div style="background: #fef2f2; padding: 1.25rem; border-radius: 8px; border-left: 3px solid #dc2626;">
<h4 style="color: #dc2626; margin-bottom: 0.5rem;">🔴 Breakouts (Shear Failures)</h4>
<p style="color: #7f1d1d; line-height: 1.8;">
Collapse zones on wellbore sides in minimum horizontal stress (σh) direction. Result from shear failure when tangential stress exceeds rock strength. Distinctive dog-ear shape visible in caliper logs.
</p>
</div>

<div style="background: #f0fdf4; padding: 1.25rem; border-radius: 8px; border-left: 3px solid #22c55e;">
<h4 style="color: #166534; margin-bottom: 0.5rem;">🟢 DIFs - Drilling Induced Fractures</h4>
<p style="color: #14532d; line-height: 1.8;">
Tensile fractures forming in maximum horizontal stress (σH) direction. Occur when mud pressure exceeds rock tensile strength. Indicator of high mud weight and potential lost circulation.
</p>
</div>
</div>

<div style="background: #e8f4fd; padding: 1.25rem; border-radius: 10px; margin-top: 1rem;">
<h4 style="color: #1e40af; margin-bottom: 0.75rem;">💡 Diagnostic Importance:</h4>
<p style="color: #1e3a8a; line-height: 1.8;">
Identifying Breakout and DIF directions from image logs helps in:
</p>
<ul style="margin: 0.5rem 0 0 0; padding-left: 1.25rem; color: #1e3a8a; line-height: 1.8;">
<li>Determining horizontal stress directions in formation</li>
<li>Estimating mud weight window size</li>
<li>Planning horizontal and deviated well directions</li>
<li>Optimizing drilling strategy for the area</li>
</ul>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 Effect of Well Deviation on Stability</h3>

<div style="background: #fff7ed; padding: 1.5rem; border-radius: 10px; border: 2px solid #f97316; margin: 1.5rem 0;">
<p style="color: #9a3412; line-height: 1.8; margin-bottom: 1rem;">
Well inclination and azimuth significantly affect stress distribution and mud weight requirements:
</p>
<ul style="margin: 0; padding-left: 1.25rem; color: #9a3412; line-height: 2;">
<li><strong>Vertical Wells:</strong> Simplest case, relatively symmetric stresses</li>
<li><strong>Deviated Wells:</strong> Stress concentration changes with inclination angle</li>
<li><strong>Horizontal Wells:</strong> Highest stress concentration, require higher mud weight</li>
<li><strong>Drilling Direction:</strong> Drilling toward σH more stable than toward σh</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Stress Concentration', definition: 'Stress buildup around wellbore wall due to rock removal' },
            { term: 'Mohr-Coulomb', definition: 'Most commonly used rock failure criterion, based on cohesion and friction angle' },
            { term: 'Breakout', definition: 'Shear failure zone on wellbore wall in σh direction' },
            { term: 'DIF', definition: 'Drilling-induced fracture in σH direction from tensile failure' },
            { term: 'Hoop Stress', definition: 'Tangential stress around wellbore circumference' },
            { term: 'Tensile Failure', definition: 'Rock failure under tensile stress' }
          ],
          practiceQuestion: {
            question: 'Where do breakouts occur on the wellbore?',
            options: [
              'In the direction of maximum horizontal stress (σH)',
              'In the direction of minimum horizontal stress (σh)',
              'Only in the vertical direction',
              'Randomly around wellbore circumference'
            ],
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
          title: 'التكوينات الطينية والتفاعلات الكيميائية - التحدي الأكبر',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 مشاكل التكوينات الطينية (Shale Instability) - التحدي الأكبر</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<p style="font-size: 1.1rem; line-height: 1.8;">
التكوينات الطينية (Shale) تشكل حوالي <strong>75%</strong> من التكوينات المحفورة عالمياً وتسبب أكثر من <strong>90%</strong> من مشاكل عدم استقرار جدار البئر. فهم التفاعلات الكيميائية والفيزيائية بين الطين وسائل الحفر أساسي لحل هذه المشاكل وتوفير مليارات الدولارات.
</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 أنواع المعادن الطينية وخصائصها</h3>

<div style="display: grid; gap: 1.25rem; margin-bottom: 1.5rem;">
<div style="background: #fef3c7; padding: 1.5rem; border-radius: 10px; border: 2px solid #f59e0b;">
<h4 style="color: #92400e; margin-bottom: 0.75rem; font-size: 1.1rem;">🔸 سمكتايت / مونتموريلونيت (Smectite/Montmorillonite)</h4>
<p style="color: #78350f; line-height: 1.8; margin-bottom: 0.75rem;">
<strong>الأكثر تفاعلاً وخطورة!</strong> يمتص الماء بين طبقاته البلورية ويتضخم حتى 20 ضعف حجمه الأصلي.
</p>
<ul style="margin: 0; padding-right: 1.25rem; color: #78350f; line-height: 1.8;">
<li><strong>البنية:</strong> طبقات 2:1 (Si-Al-Si) مع ماء بين الطبقات</li>
<li><strong>سعة التبادل:</strong> 80-150 meq/100g (عالية جداً)</li>
<li><strong>التضخم:</strong> ينتج من دخول الماء بين الطبقات</li>
<li><strong>المشاكل:</strong> تضيق البئر، انحشار الأنابيب، تكوين كرات الطين</li>
</ul>
</div>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 10px; border: 2px solid #3b82f6;">
<h4 style="color: #1e40af; margin-bottom: 0.75rem; font-size: 1.1rem;">🔹 إليت (Illite)</h4>
<p style="color: #1e3a8a; line-height: 1.8; margin-bottom: 0.75rem;">
أقل تفاعلاً من السمكتايت. بنية غير متوسعة لكن يمكن أن يتشتت في الماء ويسبب مشاكل.
</p>
<ul style="margin: 0; padding-right: 1.25rem; color: #1e3a8a; line-height: 1.8;">
<li><strong>البنية:</strong> طبقات 2:1 مع بوتاسيوم يربط الطبقات</li>
<li><strong>سعة التبادل:</strong> 10-40 meq/100g (متوسطة)</li>
<li><strong>المشاكل:</strong> تشتت في الماء، زيادة لزوجة الطين</li>
</ul>
</div>

<div style="background: #dcfce7; padding: 1.5rem; border-radius: 10px; border: 2px solid #22c55e;">
<h4 style="color: #166534; margin-bottom: 0.75rem; font-size: 1.1rem;">🔹 كاولينيت (Kaolinite)</h4>
<p style="color: #14532d; line-height: 1.8; margin-bottom: 0.75rem;">
الأقل تفاعلاً والأكثر استقراراً. بنية مستقرة ولا يتضخم.
</p>
<ul style="margin: 0; padding-right: 1.25rem; color: #14532d; line-height: 1.8;">
<li><strong>البنية:</strong> طبقات 1:1 (Si-Al) مترابطة بإحكام</li>
<li><strong>سعة التبادل:</strong> 3-15 meq/100g (منخفضة)</li>
<li><strong>المشاكل:</strong> قليلة، لكن يمكن أن يتحرك كجزيئات دقيقة</li>
</ul>
</div>

<div style="background: #fce7f3; padding: 1.5rem; border-radius: 10px; border: 2px solid #ec4899;">
<h4 style="color: #be185d; margin-bottom: 0.75rem; font-size: 1.1rem;">🔹 كلوريت (Chlorite)</h4>
<p style="color: #9d174d; line-height: 1.8;">
مستقر نسبياً مع بنية 2:1:1. أقل شيوعاً ولكن قد يوجد مع معادن طينية أخرى.
</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 آليات عدم استقرار الطين</h3>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<div style="display: grid; gap: 1rem;">
<div style="background: #fef2f2; padding: 1.25rem; border-radius: 8px;">
<h4 style="color: #dc2626; margin-bottom: 0.5rem;">1️⃣ الترطيب والتضخم (Hydration & Swelling)</h4>
<p style="color: #7f1d1d; line-height: 1.8;">
دخول الماء بين طبقات المعادن الطينية يسبب تضخم الحجم. العوامل المؤثرة: نوع المعدن، ملوحة سائل الحفر، الضغط التناضحي.
</p>
</div>

<div style="background: #fff7ed; padding: 1.25rem; border-radius: 8px;">
<h4 style="color: #c2410c; margin-bottom: 0.5rem;">2️⃣ الضغط التناضحي (Osmotic Pressure)</h4>
<p style="color: #9a3412; line-height: 1.8;">
فرق التركيز الملحي بين ماء المسام وسائل الحفر يسبب حركة الماء. إذا كان سائل الحفر أقل ملوحة، يدخل الماء للتكوين ويضعفه.
</p>
</div>

<div style="background: #dbeafe; padding: 1.25rem; border-radius: 8px;">
<h4 style="color: #1e40af; margin-bottom: 0.5rem;">3️⃣ الضغط الشعيري (Capillary Pressure)</h4>
<p style="color: #1e3a8a; line-height: 1.8;">
في السوائل الزيتية، يمنع الفرق في الضغط الشعيري دخول الماء للتكوين، مما يجعل OBM أفضل للتكوينات التفاعلية.
</p>
</div>

<div style="background: #f0fdf4; padding: 1.25rem; border-radius: 8px;">
<h4 style="color: #166534; margin-bottom: 0.5rem;">4️⃣ التفاعل الكيميائي المباشر</h4>
<p style="color: #14532d; line-height: 1.8;">
بعض المواد الكيميائية في سائل الحفر تتفاعل مباشرة مع الطين وتسبب تغيرات في البنية والقوة.
</p>
</div>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 استراتيجيات تثبيت الطين</h3>

<div style="background: #e8f4fd; padding: 1.5rem; border-radius: 10px; margin: 1.5rem 0;">
<h4 style="color: #1e40af; margin-bottom: 1rem; font-size: 1.1rem;">💡 طرق تثبيت الطين الرئيسية:</h4>

<div style="display: grid; gap: 1rem;">
<div style="background: white; padding: 1rem; border-radius: 8px;">
<h5 style="color: #1e3a5f; margin-bottom: 0.5rem;">🛢️ سوائل زيتية (OBM/SBM)</h5>
<p style="color: #334155; line-height: 1.8;">
<strong>الخيار الأمثل للطين التفاعلي.</strong> الزيت لا يتفاعل مع الطين ولا يسبب ترطيب. الضغط الشعيري يمنع دخول الماء. عيبها: التكلفة العالية والقيود البيئية.
</p>
</div>

<div style="background: white; padding: 1rem; border-radius: 8px;">
<h5 style="color: #1e3a5f; margin-bottom: 0.5rem;">🧂 أملاح البوتاسيوم (KCl)</h5>
<p style="color: #334155; line-height: 1.8;">
أيون البوتاسيوم (K+) يدخل بين طبقات الطين ويثبتها. يقلل التضخم بشكل كبير. تركيز 3-7% شائع الاستخدام.
</p>
</div>

<div style="background: white; padding: 1rem; border-radius: 8px;">
<h5 style="color: #1e3a5f; margin-bottom: 0.5rem;">🔗 البوليمرات (Polymers)</h5>
<p style="color: #334155; line-height: 1.8;">
تكون غلاف واقي على سطح الطين. أنواع شائعة: PHPA (Partially Hydrolyzed Polyacrylamide)، بوليجلايكول (Polyglycol).
</p>
</div>

<div style="background: white; padding: 1rem; border-radius: 8px;">
<h5 style="color: #1e3a5f; margin-bottom: 0.5rem;">🪨 السيليكات (Silicates)</h5>
<p style="color: #334155; line-height: 1.8;">
تتفاعل مع الطين وتكون حاجز صلب غير منفذ. فعالة جداً لكن تحتاج ضبط دقيق لـ pH والتركيز.
</p>
</div>

<div style="background: white; padding: 1rem; border-radius: 8px;">
<h5 style="color: #1e3a5f; margin-bottom: 0.5rem;">💧 ضبط نشاطية الماء (Water Activity)</h5>
<p style="color: #334155; line-height: 1.8;">
زيادة ملوحة سائل الحفر (NaCl, CaCl2, formate) تقلل نشاطية الماء وتمنع الترطيب بالتناضح.
</p>
</div>
</div>
</div>

<div style="background: #fff7ed; padding: 1.5rem; border-radius: 10px; border: 2px solid #f97316; margin: 1.5rem 0;">
<h4 style="color: #c2410c; margin-bottom: 0.75rem;">⚡ نصيحة ميدانية:</h4>
<p style="color: #9a3412; line-height: 1.8;">
اختبار عينات الطين في المختبر (Shale Characterization Tests) قبل الحفر يساعد في اختيار أفضل نظام سائل حفر. اختبارات مثل Swelling Test، Dispersion Test، و Capillary Suction Time توفر معلومات قيمة.
</p>
</div>
</section>`,
          keyTerms: [
            { term: 'Smectite', definition: 'معدن طيني تفاعلي جداً يتضخم بامتصاص الماء بين طبقاته' },
            { term: 'Hydration', definition: 'امتصاص الماء بواسطة المعادن الطينية مسبباً التضخم' },
            { term: 'Water Activity', definition: 'نشاطية الماء - قدرته على التفاعل، تتحكم في التناضح' },
            { term: 'Shale Inhibitor', definition: 'مادة كيميائية تمنع تفاعل الطين مع الماء' },
            { term: 'Osmotic Pressure', definition: 'ضغط ناتج عن فرق التركيز الملحي يسبب حركة الماء' },
            { term: 'CEC', definition: 'سعة التبادل الكاتيوني - مقياس تفاعلية الطين' }
          ],
          practiceQuestion: {
            question: 'أي معدن طيني هو الأكثر تضخماً بالماء؟',
            options: [
              'Kaolinite',
              'Illite',
              'Smectite/Montmorillonite',
              'Chlorite'
            ],
            correctAnswer: 2
          }
        },
        en: {
          title: 'Shale Formations and Chemical Interactions - The Biggest Challenge',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Shale Instability Problems - The Biggest Challenge</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<p style="font-size: 1.1rem; line-height: 1.8;">
Shale formations comprise approximately <strong>75%</strong> of drilled formations globally and cause over <strong>90%</strong> of wellbore instability problems. Understanding chemical and physical interactions between clay and drilling fluid is fundamental to solving these problems and saving billions of dollars.
</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 Types of Clay Minerals and Their Properties</h3>

<div style="display: grid; gap: 1.25rem; margin-bottom: 1.5rem;">
<div style="background: #fef3c7; padding: 1.5rem; border-radius: 10px; border: 2px solid #f59e0b;">
<h4 style="color: #92400e; margin-bottom: 0.75rem; font-size: 1.1rem;">🔸 Smectite/Montmorillonite</h4>
<p style="color: #78350f; line-height: 1.8; margin-bottom: 0.75rem;">
<strong>Most reactive and dangerous!</strong> Absorbs water between crystal layers and swells up to 20 times original volume.
</p>
<ul style="margin: 0; padding-left: 1.25rem; color: #78350f; line-height: 1.8;">
<li><strong>Structure:</strong> 2:1 layers (Si-Al-Si) with water between layers</li>
<li><strong>Exchange Capacity:</strong> 80-150 meq/100g (very high)</li>
<li><strong>Swelling:</strong> Results from water entering between layers</li>
<li><strong>Problems:</strong> Hole closure, stuck pipe, mud ball formation</li>
</ul>
</div>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 10px; border: 2px solid #3b82f6;">
<h4 style="color: #1e40af; margin-bottom: 0.75rem; font-size: 1.1rem;">🔹 Illite</h4>
<p style="color: #1e3a8a; line-height: 1.8; margin-bottom: 0.75rem;">
Less reactive than smectite. Non-expanding structure but can disperse in water and cause problems.
</p>
<ul style="margin: 0; padding-left: 1.25rem; color: #1e3a8a; line-height: 1.8;">
<li><strong>Structure:</strong> 2:1 layers with potassium bonding layers</li>
<li><strong>Exchange Capacity:</strong> 10-40 meq/100g (medium)</li>
<li><strong>Problems:</strong> Dispersion in water, increased mud viscosity</li>
</ul>
</div>

<div style="background: #dcfce7; padding: 1.5rem; border-radius: 10px; border: 2px solid #22c55e;">
<h4 style="color: #166534; margin-bottom: 0.75rem; font-size: 1.1rem;">🔹 Kaolinite</h4>
<p style="color: #14532d; line-height: 1.8; margin-bottom: 0.75rem;">
Least reactive and most stable. Stable structure and doesn't swell.
</p>
<ul style="margin: 0; padding-left: 1.25rem; color: #14532d; line-height: 1.8;">
<li><strong>Structure:</strong> 1:1 layers (Si-Al) tightly bonded</li>
<li><strong>Exchange Capacity:</strong> 3-15 meq/100g (low)</li>
<li><strong>Problems:</strong> Few, but can migrate as fine particles</li>
</ul>
</div>

<div style="background: #fce7f3; padding: 1.5rem; border-radius: 10px; border: 2px solid #ec4899;">
<h4 style="color: #be185d; margin-bottom: 0.75rem; font-size: 1.1rem;">🔹 Chlorite</h4>
<p style="color: #9d174d; line-height: 1.8;">
Relatively stable with 2:1:1 structure. Less common but may exist with other clay minerals.
</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 Shale Instability Mechanisms</h3>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<div style="display: grid; gap: 1rem;">
<div style="background: #fef2f2; padding: 1.25rem; border-radius: 8px;">
<h4 style="color: #dc2626; margin-bottom: 0.5rem;">1️⃣ Hydration & Swelling</h4>
<p style="color: #7f1d1d; line-height: 1.8;">
Water entering between clay mineral layers causes volume expansion. Factors: mineral type, mud salinity, osmotic pressure.
</p>
</div>

<div style="background: #fff7ed; padding: 1.25rem; border-radius: 8px;">
<h4 style="color: #c2410c; margin-bottom: 0.5rem;">2️⃣ Osmotic Pressure</h4>
<p style="color: #9a3412; line-height: 1.8;">
Salt concentration difference between pore water and drilling fluid causes water movement. If mud is less saline, water enters formation and weakens it.
</p>
</div>

<div style="background: #dbeafe; padding: 1.25rem; border-radius: 8px;">
<h4 style="color: #1e40af; margin-bottom: 0.5rem;">3️⃣ Capillary Pressure</h4>
<p style="color: #1e3a8a; line-height: 1.8;">
In oil-based fluids, capillary pressure difference prevents water from entering formation, making OBM better for reactive formations.
</p>
</div>

<div style="background: #f0fdf4; padding: 1.25rem; border-radius: 8px;">
<h4 style="color: #166534; margin-bottom: 0.5rem;">4️⃣ Direct Chemical Reaction</h4>
<p style="color: #14532d; line-height: 1.8;">
Some chemicals in drilling fluid react directly with clay causing changes in structure and strength.
</p>
</div>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 Shale Stabilization Strategies</h3>

<div style="background: #e8f4fd; padding: 1.5rem; border-radius: 10px; margin: 1.5rem 0;">
<h4 style="color: #1e40af; margin-bottom: 1rem; font-size: 1.1rem;">💡 Main Shale Stabilization Methods:</h4>

<div style="display: grid; gap: 1rem;">
<div style="background: white; padding: 1rem; border-radius: 8px;">
<h5 style="color: #1e3a5f; margin-bottom: 0.5rem;">🛢️ Oil-Based Mud (OBM/SBM)</h5>
<p style="color: #334155; line-height: 1.8;">
<strong>Optimal choice for reactive shale.</strong> Oil doesn't react with clay and doesn't cause hydration. Capillary pressure prevents water entry. Drawback: high cost and environmental restrictions.
</p>
</div>

<div style="background: white; padding: 1rem; border-radius: 8px;">
<h5 style="color: #1e3a5f; margin-bottom: 0.5rem;">🧂 Potassium Salts (KCl)</h5>
<p style="color: #334155; line-height: 1.8;">
Potassium ion (K+) enters between clay layers and stabilizes them. Significantly reduces swelling. 3-7% concentration commonly used.
</p>
</div>

<div style="background: white; padding: 1rem; border-radius: 8px;">
<h5 style="color: #1e3a5f; margin-bottom: 0.5rem;">🔗 Polymers</h5>
<p style="color: #334155; line-height: 1.8;">
Form protective coating on clay surface. Common types: PHPA (Partially Hydrolyzed Polyacrylamide), Polyglycol.
</p>
</div>

<div style="background: white; padding: 1rem; border-radius: 8px;">
<h5 style="color: #1e3a5f; margin-bottom: 0.5rem;">🪨 Silicates</h5>
<p style="color: #334155; line-height: 1.8;">
React with clay to form solid impermeable barrier. Very effective but needs precise pH and concentration control.
</p>
</div>

<div style="background: white; padding: 1rem; border-radius: 8px;">
<h5 style="color: #1e3a5f; margin-bottom: 0.5rem;">💧 Water Activity Control</h5>
<p style="color: #334155; line-height: 1.8;">
Increasing mud salinity (NaCl, CaCl2, formate) reduces water activity and prevents osmotic hydration.
</p>
</div>
</div>
</div>

<div style="background: #fff7ed; padding: 1.5rem; border-radius: 10px; border: 2px solid #f97316; margin: 1.5rem 0;">
<h4 style="color: #c2410c; margin-bottom: 0.75rem;">⚡ Field Tip:</h4>
<p style="color: #9a3412; line-height: 1.8;">
Laboratory testing of shale samples (Shale Characterization Tests) before drilling helps select the best drilling fluid system. Tests like Swelling Test, Dispersion Test, and Capillary Suction Time provide valuable information.
</p>
</div>
</section>`,
          keyTerms: [
            { term: 'Smectite', definition: 'Highly reactive clay mineral that swells by absorbing water between layers' },
            { term: 'Hydration', definition: 'Water absorption by clay minerals causing swelling' },
            { term: 'Water Activity', definition: 'Water reactivity potential, controls osmosis' },
            { term: 'Shale Inhibitor', definition: 'Chemical preventing clay-water reaction' },
            { term: 'Osmotic Pressure', definition: 'Pressure from salt concentration difference causing water movement' },
            { term: 'CEC', definition: 'Cation Exchange Capacity - measure of clay reactivity' }
          ],
          practiceQuestion: {
            question: 'Which clay mineral swells most with water?',
            options: [
              'Kaolinite',
              'Illite',
              'Smectite/Montmorillonite',
              'Chlorite'
            ],
            correctAnswer: 2
          }
        }
      }
    },
    {
      day: 4,
      type: 'learning',
      content: {
        ar: {
          title: 'استراتيجيات الوقاية والتطبيقات الميدانية المتقدمة',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 استراتيجيات الحفاظ على استقرار جدار البئر</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<p style="font-size: 1.1rem; line-height: 1.8;">
<strong>الوقاية خير من العلاج!</strong> التخطيط المسبق الجيد واختيار سائل الحفر المناسب والممارسات التشغيلية الصحيحة يمكن أن تمنع معظم مشاكل عدم الاستقرار وتوفر ملايين الدولارات في تكاليف المعالجة والتأخير.
</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 التخطيط قبل الحفر (Pre-Drilling Planning)</h3>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #1e3a5f; margin-bottom: 1rem; font-size: 1.1rem;">1️⃣ بناء نموذج الجيوميكانيكا (Geomechanical Model - GMM)</h4>
<p style="line-height: 1.8; margin-bottom: 1rem;">
النموذج الجيوميكانيكي هو أداة التنبؤ الأساسية لاستقرار البئر. يتطلب:
</p>
<div style="display: grid; gap: 0.75rem;">
<div style="background: #dbeafe; padding: 1rem; border-radius: 8px;">
<p style="color: #1e3a8a; line-height: 1.8;"><strong>تحديد الإجهادات:</strong> من سجلات الآبار المجاورة (Offset Wells)، اختبارات LOT/FIT، بيانات الإنتاج</p>
</div>
<div style="background: #dcfce7; padding: 1rem; border-radius: 8px;">
<p style="color: #14532d; line-height: 1.8;"><strong>تقدير خصائص الصخر:</strong> UCS، زاوية الاحتكاك، معامل يونج من السجلات الصوتية والكثافة</p>
</div>
<div style="background: #fef3c7; padding: 1rem; border-radius: 8px;">
<p style="color: #78350f; line-height: 1.8;"><strong>حساب الضغوط:</strong> ضغط المسام وضغط التكسر لكل عمق</p>
</div>
<div style="background: #fce7f3; padding: 1rem; border-radius: 8px;">
<p style="color: #9d174d; line-height: 1.8;"><strong>تحديد نافذة الطين:</strong> المدى الآمن لوزن سائل الحفر</p>
</div>
</div>

<h4 style="color: #1e3a5f; margin: 1.5rem 0 1rem 0; font-size: 1.1rem;">2️⃣ اختيار سائل الحفر المناسب</h4>
<div style="display: grid; gap: 1rem;">
<div style="background: #e8f4fd; padding: 1rem; border-radius: 8px;">
<h5 style="color: #1e40af; margin-bottom: 0.5rem;">🛢️ OBM/SBM (زيتي/صناعي)</h5>
<p style="color: #1e3a8a; line-height: 1.8;">للتكوينات الطينية التفاعلية، الآبار العميقة ذات الحرارة العالية، نوافذ الطين الضيقة. <strong>أفضل أداء للاستقرار.</strong></p>
</div>
<div style="background: #f0fdf4; padding: 1rem; border-radius: 8px;">
<h5 style="color: #166534; margin-bottom: 0.5rem;">💧 Inhibitive WBM (مائي مثبط)</h5>
<p style="color: #14532d; line-height: 1.8;">عند وجود قيود بيئية. يحتوي على KCl أو بوليمرات أو سيليكات للتحكم في تفاعل الطين.</p>
</div>
</div>

<h4 style="color: #1e3a5f; margin: 1.5rem 0 1rem 0; font-size: 1.1rem;">3️⃣ تصميم مسار البئر (Well Trajectory)</h4>
<p style="line-height: 1.8;">
اختيار اتجاه الحفر الأمثل بناءً على اتجاهات الإجهادات. الحفر باتجاه σH عادة أكثر استقراراً.
</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 الممارسات التشغيلية المثلى</h3>

<div style="background: #dcfce7; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #166534; margin-bottom: 0.75rem; font-size: 1.1rem;">✅ أفضل الممارسات الميدانية:</h4>
<div style="display: grid; gap: 0.75rem;">
<div style="background: white; padding: 1rem; border-radius: 8px;">
<p style="color: #334155; line-height: 1.8;"><strong>1. الحفاظ على وزن الطين ضمن النافذة الآمنة:</strong> مراقبة مستمرة وتعديل فوري عند الحاجة</p>
</div>
<div style="background: white; padding: 1rem; border-radius: 8px;">
<p style="color: #334155; line-height: 1.8;"><strong>2. التحكم في ECD:</strong> تجنب ارتفاع ECD فوق ضغط التكسر، خاصة عند التوصيلات وبدء الضخ</p>
</div>
<div style="background: white; padding: 1rem; border-radius: 8px;">
<p style="color: #334155; line-height: 1.8;"><strong>3. تنظيف البئر:</strong> إزالة الفتات بكفاءة لمنع Packoff وتراكم الفتات</p>
</div>
<div style="background: white; padding: 1rem; border-radius: 8px;">
<p style="color: #334155; line-height: 1.8;"><strong>4. تقليل وقت التعرض:</strong> تقليل الوقت الذي يتعرض فيه التكوين لسائل الحفر</p>
</div>
<div style="background: white; padding: 1rem; border-radius: 8px;">
<p style="color: #334155; line-height: 1.8;"><strong>5. التغليف السريع:</strong> إنزال الغلاف في أقرب وقت ممكن للتكوينات غير المستقرة</p>
</div>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 مؤشرات المراقبة الميدانية (Real-Time Monitoring)</h3>

<div style="background: #e8f4fd; padding: 1.5rem; border-radius: 10px; margin: 1.5rem 0;">
<h4 style="color: #1e40af; margin-bottom: 1rem; font-size: 1.1rem;">💡 العلامات التحذيرية لعدم الاستقرار:</h4>
<div style="display: grid; gap: 1rem;">
<div style="background: #fef2f2; padding: 1rem; border-radius: 8px; border-right: 3px solid #dc2626;">
<h5 style="color: #dc2626; margin-bottom: 0.5rem;">🔴 علامات خطيرة</h5>
<ul style="margin: 0; padding-right: 1.25rem; color: #7f1d1d; line-height: 1.8;">
<li>زيادة مفاجئة في Torque & Drag</li>
<li>ظهور فتات كبير أو بشكل غير طبيعي (Angular/Splintery Cavings)</li>
<li>Overpull كبير عند السحب</li>
<li>صعوبة تدوير الأنابيب أو توقف الدوران</li>
</ul>
</div>

<div style="background: #fff7ed; padding: 1rem; border-radius: 8px; border-right: 3px solid #f97316;">
<h5 style="color: #c2410c; margin-bottom: 0.5rem;">🟠 علامات تحذيرية</h5>
<ul style="margin: 0; padding-right: 1.25rem; color: #9a3412; line-height: 1.8;">
<li>تغيرات في Caliper Log (توسع أو تضيق البئر)</li>
<li>زيادة تدريجية في ضغط الضخ</li>
<li>تغير في شكل أو حجم الفتات</li>
<li>زيادة نسبة المواد الصلبة في سائل الحفر</li>
</ul>
</div>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 الإجراءات التصحيحية</h3>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<div style="display: grid; gap: 1rem;">
<div style="background: #dbeafe; padding: 1.25rem; border-radius: 8px;">
<h5 style="color: #1e40af; margin-bottom: 0.5rem;">عند ظهور علامات الانهيار:</h5>
<ul style="margin: 0; padding-right: 1.25rem; color: #1e3a8a; line-height: 1.8;">
<li>زيادة وزن سائل الحفر تدريجياً (0.2-0.3 ppg في المرة)</li>
<li>تحسين التنظيف (زيادة الضخ، تحسين الخصائص الريولوجية)</li>
<li>تقليل الـ Tripping Speed</li>
</ul>
</div>

<div style="background: #dcfce7; padding: 1.25rem; border-radius: 8px;">
<h5 style="color: #166534; margin-bottom: 0.5rem;">عند ظهور علامات التكسر:</h5>
<ul style="margin: 0; padding-right: 1.25rem; color: #14532d; line-height: 1.8;">
<li>تقليل وزن سائل الحفر (بحذر لتجنب الانهيار)</li>
<li>إضافة مواد سد الشقوق (LCM)</li>
<li>تقليل معدل الضخ وسرعة الـ Tripping</li>
</ul>
</div>
</div>
</div>

<div style="background: #fff7ed; padding: 1.5rem; border-radius: 10px; border: 2px solid #f97316; margin: 1.5rem 0;">
<h4 style="color: #c2410c; margin-bottom: 0.75rem;">⚡ خبرة ميدانية:</h4>
<p style="color: #9a3412; line-height: 1.8;">
في الآبار ذات النوافذ الضيقة، تقنيات مثل <strong>Managed Pressure Drilling (MPD)</strong> توفر تحكماً دقيقاً في ضغط قاع البئر، مما يسمح بالحفر في ظروف كانت تعتبر مستحيلة سابقاً.
</p>
</div>
</section>`,
          keyTerms: [
            { term: 'Geomechanical Model', definition: 'نموذج رياضي لتوقع سلوك الصخور والإجهادات أثناء الحفر' },
            { term: 'ECD', definition: 'الكثافة المكافئة للدورة - الضغط الفعلي على التكوين أثناء الضخ' },
            { term: 'Cavings', definition: 'قطع صخرية منهارة من جدار البئر، شكلها يدل على نوع المشكلة' },
            { term: 'Inhibitive Mud', definition: 'سائل حفر يحتوي على مواد تمنع تفاعل الطين' },
            { term: 'LCM', definition: 'مواد سد فقدان الدورة لمعالجة الشقوق' },
            { term: 'MPD', definition: 'الحفر بالضغط المتحكم - تقنية متقدمة للتحكم الدقيق' }
          ],
          practiceQuestion: {
            question: 'ما هو أفضل نوع سائل حفر للتكوينات الطينية التفاعلية؟',
            options: [
              'سائل مائي بسيط (Simple WBM)',
              'سائل زيتي أو صناعي (OBM/SBM)',
              'ماء عذب فقط',
              'هواء مضغوط'
            ],
            correctAnswer: 1
          }
        },
        en: {
          title: 'Prevention Strategies and Advanced Field Applications',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Wellbore Stability Maintenance Strategies</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<p style="font-size: 1.1rem; line-height: 1.8;">
<strong>Prevention is better than cure!</strong> Good pre-planning, proper drilling fluid selection, and correct operational practices can prevent most instability problems and save millions of dollars in treatment and delay costs.
</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 Pre-Drilling Planning</h3>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #1e3a5f; margin-bottom: 1rem; font-size: 1.1rem;">1️⃣ Building Geomechanical Model (GMM)</h4>
<p style="line-height: 1.8; margin-bottom: 1rem;">
The geomechanical model is the primary prediction tool for wellbore stability. Requires:
</p>
<div style="display: grid; gap: 0.75rem;">
<div style="background: #dbeafe; padding: 1rem; border-radius: 8px;">
<p style="color: #1e3a8a; line-height: 1.8;"><strong>Stress Determination:</strong> From offset well logs, LOT/FIT tests, production data</p>
</div>
<div style="background: #dcfce7; padding: 1rem; border-radius: 8px;">
<p style="color: #14532d; line-height: 1.8;"><strong>Rock Property Estimation:</strong> UCS, friction angle, Young's modulus from sonic and density logs</p>
</div>
<div style="background: #fef3c7; padding: 1rem; border-radius: 8px;">
<p style="color: #78350f; line-height: 1.8;"><strong>Pressure Calculations:</strong> Pore pressure and fracture pressure for each depth</p>
</div>
<div style="background: #fce7f3; padding: 1rem; border-radius: 8px;">
<p style="color: #9d174d; line-height: 1.8;"><strong>Mud Window Definition:</strong> Safe drilling fluid weight range</p>
</div>
</div>

<h4 style="color: #1e3a5f; margin: 1.5rem 0 1rem 0; font-size: 1.1rem;">2️⃣ Proper Drilling Fluid Selection</h4>
<div style="display: grid; gap: 1rem;">
<div style="background: #e8f4fd; padding: 1rem; border-radius: 8px;">
<h5 style="color: #1e40af; margin-bottom: 0.5rem;">🛢️ OBM/SBM (Oil/Synthetic)</h5>
<p style="color: #1e3a8a; line-height: 1.8;">For reactive shale, deep HPHT wells, narrow mud windows. <strong>Best stability performance.</strong></p>
</div>
<div style="background: #f0fdf4; padding: 1rem; border-radius: 8px;">
<h5 style="color: #166534; margin-bottom: 0.5rem;">💧 Inhibitive WBM</h5>
<p style="color: #14532d; line-height: 1.8;">When environmental restrictions apply. Contains KCl, polymers, or silicates to control clay reaction.</p>
</div>
</div>

<h4 style="color: #1e3a5f; margin: 1.5rem 0 1rem 0; font-size: 1.1rem;">3️⃣ Well Trajectory Design</h4>
<p style="line-height: 1.8;">
Selecting optimal drilling direction based on stress orientations. Drilling toward σH is usually more stable.
</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 Optimal Operational Practices</h3>

<div style="background: #dcfce7; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #166534; margin-bottom: 0.75rem; font-size: 1.1rem;">✅ Best Field Practices:</h4>
<div style="display: grid; gap: 0.75rem;">
<div style="background: white; padding: 1rem; border-radius: 8px;">
<p style="color: #334155; line-height: 1.8;"><strong>1. Maintain mud weight within safe window:</strong> Continuous monitoring and immediate adjustment when needed</p>
</div>
<div style="background: white; padding: 1rem; border-radius: 8px;">
<p style="color: #334155; line-height: 1.8;"><strong>2. Control ECD:</strong> Avoid ECD exceeding fracture pressure, especially during connections and pump startup</p>
</div>
<div style="background: white; padding: 1rem; border-radius: 8px;">
<p style="color: #334155; line-height: 1.8;"><strong>3. Hole cleaning:</strong> Efficient cuttings removal to prevent packoff and accumulation</p>
</div>
<div style="background: white; padding: 1rem; border-radius: 8px;">
<p style="color: #334155; line-height: 1.8;"><strong>4. Minimize exposure time:</strong> Reduce formation exposure to drilling fluid</p>
</div>
<div style="background: white; padding: 1rem; border-radius: 8px;">
<p style="color: #334155; line-height: 1.8;"><strong>5. Quick casing:</strong> Run casing ASAP for unstable formations</p>
</div>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 Real-Time Monitoring Indicators</h3>

<div style="background: #e8f4fd; padding: 1.5rem; border-radius: 10px; margin: 1.5rem 0;">
<h4 style="color: #1e40af; margin-bottom: 1rem; font-size: 1.1rem;">💡 Warning Signs of Instability:</h4>
<div style="display: grid; gap: 1rem;">
<div style="background: #fef2f2; padding: 1rem; border-radius: 8px; border-left: 3px solid #dc2626;">
<h5 style="color: #dc2626; margin-bottom: 0.5rem;">🔴 Critical Signs</h5>
<ul style="margin: 0; padding-left: 1.25rem; color: #7f1d1d; line-height: 1.8;">
<li>Sudden increase in Torque & Drag</li>
<li>Large or abnormal cavings (Angular/Splintery)</li>
<li>Significant overpull when pulling out</li>
<li>Difficulty rotating pipe or rotation stoppage</li>
</ul>
</div>

<div style="background: #fff7ed; padding: 1rem; border-radius: 8px; border-left: 3px solid #f97316;">
<h5 style="color: #c2410c; margin-bottom: 0.5rem;">🟠 Warning Signs</h5>
<ul style="margin: 0; padding-left: 1.25rem; color: #9a3412; line-height: 1.8;">
<li>Caliper Log changes (wellbore enlargement or closure)</li>
<li>Gradual increase in pump pressure</li>
<li>Changes in cavings shape or size</li>
<li>Increased solids content in drilling fluid</li>
</ul>
</div>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 Corrective Actions</h3>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<div style="display: grid; gap: 1rem;">
<div style="background: #dbeafe; padding: 1.25rem; border-radius: 8px;">
<h5 style="color: #1e40af; margin-bottom: 0.5rem;">When collapse signs appear:</h5>
<ul style="margin: 0; padding-left: 1.25rem; color: #1e3a8a; line-height: 1.8;">
<li>Gradually increase mud weight (0.2-0.3 ppg at a time)</li>
<li>Improve cleaning (increase flow rate, improve rheology)</li>
<li>Reduce tripping speed</li>
</ul>
</div>

<div style="background: #dcfce7; padding: 1.25rem; border-radius: 8px;">
<h5 style="color: #166534; margin-bottom: 0.5rem;">When fracture signs appear:</h5>
<ul style="margin: 0; padding-left: 1.25rem; color: #14532d; line-height: 1.8;">
<li>Reduce mud weight (carefully to avoid collapse)</li>
<li>Add LCM (Lost Circulation Material)</li>
<li>Reduce flow rate and tripping speed</li>
</ul>
</div>
</div>
</div>

<div style="background: #fff7ed; padding: 1.5rem; border-radius: 10px; border: 2px solid #f97316; margin: 1.5rem 0;">
<h4 style="color: #c2410c; margin-bottom: 0.75rem;">⚡ Field Experience:</h4>
<p style="color: #9a3412; line-height: 1.8;">
In narrow-window wells, techniques like <strong>Managed Pressure Drilling (MPD)</strong> provide precise bottomhole pressure control, enabling drilling in conditions previously considered impossible.
</p>
</div>
</section>`,
          keyTerms: [
            { term: 'Geomechanical Model', definition: 'Mathematical model predicting rock behavior and stresses during drilling' },
            { term: 'ECD', definition: 'Equivalent Circulating Density - effective pressure on formation during pumping' },
            { term: 'Cavings', definition: 'Rock pieces collapsed from wellbore wall, shape indicates problem type' },
            { term: 'Inhibitive Mud', definition: 'Drilling fluid containing clay reaction inhibitors' },
            { term: 'LCM', definition: 'Lost Circulation Material for treating fractures' },
            { term: 'MPD', definition: 'Managed Pressure Drilling - advanced precision control technique' }
          ],
          practiceQuestion: {
            question: 'What is the best mud type for reactive shale formations?',
            options: [
              'Simple Water-Based Mud (WBM)',
              'Oil-Based or Synthetic Mud (OBM/SBM)',
              'Fresh water only',
              'Compressed air'
            ],
            correctAnswer: 1
          }
        }
      }
    },
    {
      day: 5,
      type: 'learning',
      content: {
        ar: {
          title: 'مراجعة شاملة - استقرار جدار البئر',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 ملخص الأسبوع - استقرار جدار البئر (Wellbore Stability)</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<p style="font-size: 1.1rem; line-height: 1.8;">
في هذا الأسبوع، تعلمنا عن أحد أهم تحديات الحفر: الحفاظ على استقرار جدار البئر. هذا الملخص يغطي النقاط الرئيسية من كل يوم لمساعدتك على التحضير للاختبار وتطبيق المعرفة في الميدان.
</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 ملخص اليوم الأول: المفاهيم الأساسية</h3>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 1rem;">
<ul style="margin: 0; padding-right: 1.25rem; line-height: 2;">
<li><strong>تعريف:</strong> استقرار جدار البئر = قدرة البئر على الحفاظ على شكله</li>
<li><strong>أنواع المشاكل:</strong> انهيار (Collapse)، تكسر (Fracture)، تضخم (Swelling)، انزلاق (Sloughing)</li>
<li><strong>العوامل:</strong> الإجهادات (σv, σH, σh)، خصائص الصخر (UCS)، ضغط المسام</li>
<li><strong>نافذة الطين:</strong> النطاق بين ضغط الانهيار وضغط التكسر</li>
<li><strong>الأثر الاقتصادي:</strong> 5-15% من تكلفة البئر، مليارات سنوياً</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 ملخص اليوم الثاني: ميكانيكا الصخور</h3>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 10px; margin-bottom: 1rem;">
<ul style="margin: 0; padding-right: 1.25rem; line-height: 2;">
<li><strong>تركز الإجهاد:</strong> يحدث عند إزالة الصخر من مكانه</li>
<li><strong>الإجهادات على جدار البئر:</strong> شعاعي (σr)، مماسي (σθ)، محوري (σz)</li>
<li><strong>معيار Mohr-Coulomb:</strong> τ = C + σn × tan(φ)</li>
<li><strong>Breakouts:</strong> انهيارات في اتجاه σh (الإجهاد الأدنى)</li>
<li><strong>DIFs:</strong> شقوق في اتجاه σH (الإجهاد الأقصى)</li>
<li><strong>تأثير الميل:</strong> الآبار الأفقية تحتاج وزن طين أعلى</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 ملخص اليوم الثالث: التكوينات الطينية</h3>

<div style="background: #dcfce7; padding: 1.5rem; border-radius: 10px; margin-bottom: 1rem;">
<ul style="margin: 0; padding-right: 1.25rem; line-height: 2;">
<li><strong>الطين:</strong> 75% من التكوينات، 90% من مشاكل الاستقرار</li>
<li><strong>أنواع المعادن:</strong> Smectite (الأكثر تفاعلاً) > Illite > Kaolinite (الأقل)</li>
<li><strong>آليات الضعف:</strong> ترطيب، ضغط تناضحي، ضغط شعيري</li>
<li><strong>طرق التثبيت:</strong> OBM (الأفضل)، KCl، بوليمرات، سيليكات</li>
<li><strong>نشاطية الماء:</strong> زيادة الملوحة تقلل الترطيب</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 ملخص اليوم الرابع: الوقاية والتطبيق</h3>

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 10px; margin-bottom: 1rem;">
<ul style="margin: 0; padding-right: 1.25rem; line-height: 2;">
<li><strong>GMM:</strong> نموذج جيوميكانيكي للتنبؤ بالاستقرار</li>
<li><strong>اختيار السائل:</strong> OBM للطين التفاعلي، Inhibitive WBM للقيود البيئية</li>
<li><strong>المراقبة:</strong> Torque & Drag، Cavings، Caliper</li>
<li><strong>علامات الانهيار:</strong> زيادة Torque، فتات كبير، Overpull</li>
<li><strong>علامات التكسر:</strong> انخفاض الضغط، فقدان السائل</li>
<li><strong>التصحيح:</strong> تعديل وزن الطين، تحسين التنظيف، LCM</li>
</ul>
</div>

<div style="background: #e8f4fd; padding: 1.5rem; border-radius: 10px; margin: 1.5rem 0;">
<h4 style="color: #1e40af; margin-bottom: 0.75rem; font-size: 1.15rem;">💡 النقاط الأساسية للتذكر:</h4>
<ol style="margin: 0; padding-right: 1.25rem; color: #1e3a8a; line-height: 2;">
<li>استقرار البئر = التوازن بين الإجهادات وقوة الصخر وضغط سائل الحفر</li>
<li>التكوينات الطينية هي المسبب الأول لمشاكل عدم الاستقرار</li>
<li>الوقاية (التخطيط الجيد) أفضل وأرخص من العلاج</li>
<li>اختيار سائل الحفر يعتمد على نوع التكوين والقيود البيئية</li>
<li>المراقبة المستمرة ضرورية للكشف المبكر عن المشاكل</li>
<li>نافذة وزن الطين الضيقة تتطلب تقنيات متقدمة (MPD)</li>
</ol>
</div>

<div style="background: #fff7ed; padding: 1.5rem; border-radius: 10px; border: 2px solid #f97316; margin: 1.5rem 0;">
<h4 style="color: #c2410c; margin-bottom: 0.75rem;">⚡ استعد للاختبار!</h4>
<p style="color: #9a3412; line-height: 1.8;">
راجع المصطلحات الفنية وافهم العلاقات بين المفاهيم. الاختبار غداً سيغطي جميع المواضيع من هذا الأسبوع. تأكد من فهمك لنافذة وزن الطين، أنواع المعادن الطينية، ومؤشرات عدم الاستقرار!
</p>
</div>
</section>`,
          keyTerms: [
            { term: 'Mud Weight Window', definition: 'نطاق وزن الطين الآمن بين ضغط الانهيار وضغط التكسر' },
            { term: 'Geomechanics', definition: 'علم دراسة سلوك الصخور تحت الإجهادات' },
            { term: 'Shale Stability', definition: 'الحفاظ على استقرار التكوينات الطينية ومنع تفاعلها' },
            { term: 'Prevention', definition: 'منع المشاكل قبل حدوثها من خلال التخطيط والتصميم' }
          ],
          practiceQuestion: {
            question: 'ما هو العامل الأهم في الحفاظ على استقرار جدار البئر؟',
            options: [
              'سرعة الحفر العالية',
              'التوازن بين ضغط سائل الحفر والإجهادات',
              'استخدام رأس حفر كبير',
              'الحفر في الليل فقط'
            ],
            correctAnswer: 1
          }
        },
        en: {
          title: 'Comprehensive Review - Wellbore Stability',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Week Summary - Wellbore Stability</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<p style="font-size: 1.1rem; line-height: 1.8;">
This week, we learned about one of the most important drilling challenges: maintaining wellbore stability. This summary covers key points from each day to help you prepare for the quiz and apply knowledge in the field.
</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 Day 1 Summary: Basic Concepts</h3>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 1rem;">
<ul style="margin: 0; padding-left: 1.25rem; line-height: 2;">
<li><strong>Definition:</strong> Wellbore stability = wellbore's ability to maintain shape</li>
<li><strong>Problem Types:</strong> Collapse, Fracture, Swelling, Sloughing</li>
<li><strong>Factors:</strong> Stresses (σv, σH, σh), Rock properties (UCS), Pore pressure</li>
<li><strong>Mud Window:</strong> Range between collapse and fracture pressure</li>
<li><strong>Economic Impact:</strong> 5-15% of well cost, billions annually</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 Day 2 Summary: Rock Mechanics</h3>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 10px; margin-bottom: 1rem;">
<ul style="margin: 0; padding-left: 1.25rem; line-height: 2;">
<li><strong>Stress Concentration:</strong> Occurs when rock is removed</li>
<li><strong>Wellbore Wall Stresses:</strong> Radial (σr), Tangential (σθ), Axial (σz)</li>
<li><strong>Mohr-Coulomb Criterion:</strong> τ = C + σn × tan(φ)</li>
<li><strong>Breakouts:</strong> Failures in σh direction (minimum stress)</li>
<li><strong>DIFs:</strong> Fractures in σH direction (maximum stress)</li>
<li><strong>Deviation Effect:</strong> Horizontal wells need higher mud weight</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 Day 3 Summary: Shale Formations</h3>

<div style="background: #dcfce7; padding: 1.5rem; border-radius: 10px; margin-bottom: 1rem;">
<ul style="margin: 0; padding-left: 1.25rem; line-height: 2;">
<li><strong>Shale:</strong> 75% of formations, 90% of stability problems</li>
<li><strong>Mineral Types:</strong> Smectite (most reactive) > Illite > Kaolinite (least)</li>
<li><strong>Failure Mechanisms:</strong> Hydration, Osmotic pressure, Capillary pressure</li>
<li><strong>Stabilization Methods:</strong> OBM (best), KCl, Polymers, Silicates</li>
<li><strong>Water Activity:</strong> Increasing salinity reduces hydration</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 Day 4 Summary: Prevention & Application</h3>

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 10px; margin-bottom: 1rem;">
<ul style="margin: 0; padding-left: 1.25rem; line-height: 2;">
<li><strong>GMM:</strong> Geomechanical model for stability prediction</li>
<li><strong>Fluid Selection:</strong> OBM for reactive shale, Inhibitive WBM for environmental restrictions</li>
<li><strong>Monitoring:</strong> Torque & Drag, Cavings, Caliper</li>
<li><strong>Collapse Signs:</strong> Increased Torque, large cavings, Overpull</li>
<li><strong>Fracture Signs:</strong> Pressure drop, fluid losses</li>
<li><strong>Correction:</strong> Adjust mud weight, improve cleaning, add LCM</li>
</ul>
</div>

<div style="background: #e8f4fd; padding: 1.5rem; border-radius: 10px; margin: 1.5rem 0;">
<h4 style="color: #1e40af; margin-bottom: 0.75rem; font-size: 1.15rem;">💡 Key Points to Remember:</h4>
<ol style="margin: 0; padding-left: 1.25rem; color: #1e3a8a; line-height: 2;">
<li>Wellbore stability = Balance between stresses, rock strength, and mud pressure</li>
<li>Shale formations are the primary cause of instability problems</li>
<li>Prevention (good planning) is better and cheaper than treatment</li>
<li>Drilling fluid selection depends on formation type and environmental constraints</li>
<li>Continuous monitoring is essential for early problem detection</li>
<li>Narrow mud weight windows require advanced techniques (MPD)</li>
</ol>
</div>

<div style="background: #fff7ed; padding: 1.5rem; border-radius: 10px; border: 2px solid #f97316; margin: 1.5rem 0;">
<h4 style="color: #c2410c; margin-bottom: 0.75rem;">⚡ Get Ready for the Quiz!</h4>
<p style="color: #9a3412; line-height: 1.8;">
Review technical terms and understand relationships between concepts. Tomorrow's quiz will cover all topics from this week. Make sure you understand mud weight window, clay mineral types, and instability indicators!
</p>
</div>
</section>`,
          keyTerms: [
            { term: 'Mud Weight Window', definition: 'Safe mud weight range between collapse and fracture pressures' },
            { term: 'Geomechanics', definition: 'Science studying rock behavior under stresses' },
            { term: 'Shale Stability', definition: 'Maintaining shale formation stability and preventing reaction' },
            { term: 'Prevention', definition: 'Preventing problems before occurrence through planning and design' }
          ],
          practiceQuestion: {
            question: 'What is the most important factor in maintaining wellbore stability?',
            options: [
              'High drilling speed',
              'Balance between mud pressure and stresses',
              'Using a large drill bit',
              'Drilling only at night'
            ],
            correctAnswer: 1
          }
        }
      }
    },
    {
      day: 6,
      type: 'quiz',
      content: {
        ar: { title: 'اختبار استقرار جدار البئر', explanation: 'اختبر معرفتك في استقرار جدار البئر', keyTerms: [] },
        en: { title: 'Wellbore Stability Quiz', explanation: 'Test your knowledge on wellbore stability', keyTerms: [] },
      },
      quiz: {
        en: [
          {
            question: 'What percentage of drilling formations are typically shale?',
            options: ['25%', '50%', '75%', '95%'],
            correctAnswer: 2
          },
          {
            question: 'What causes wellbore breakouts?',
            options: [
              'Tensile failure from high mud pressure',
              'Shear failure from compressive stress exceeding rock strength',
              'Chemical reaction with drilling fluid',
              'Temperature changes in the formation'
            ],
            correctAnswer: 1
          },
          {
            question: 'Which clay mineral is most reactive and causes the most swelling?',
            options: ['Kaolinite', 'Illite', 'Smectite/Montmorillonite', 'Chlorite'],
            correctAnswer: 2
          },
          {
            question: 'What defines the mud weight window?',
            options: [
              'Range between flow rate limits',
              'Range between collapse pressure and fracture pressure',
              'Range between surface and bottom hole pressure',
              'Range between oil and water content'
            ],
            correctAnswer: 1
          },
          {
            question: 'In which direction do breakouts occur on a vertical wellbore?',
            options: [
              'Maximum horizontal stress (σH) direction',
              'Minimum horizontal stress (σh) direction',
              'Vertical direction',
              'Randomly around the wellbore'
            ],
            correctAnswer: 1
          },
          {
            question: 'What is the best drilling fluid type for reactive shale formations?',
            options: [
              'Simple water-based mud',
              'Oil-based or synthetic-based mud',
              'Air drilling',
              'Foam'
            ],
            correctAnswer: 1
          },
          {
            question: 'What are DIFs (Drilling Induced Fractures)?',
            options: [
              'Shear failures from low mud weight',
              'Tensile fractures in σH direction from high mud pressure',
              'Natural formation fractures',
              'Casing failures during drilling'
            ],
            correctAnswer: 1
          },
          {
            question: 'How does potassium chloride (KCl) stabilize shale?',
            options: [
              'By increasing water activity',
              'By entering between clay layers and stabilizing them',
              'By dissolving the clay minerals',
              'By increasing mud viscosity'
            ],
            correctAnswer: 1
          },
          {
            question: 'What is the typical economic impact of wellbore instability on well cost?',
            options: ['1-2%', '5-15%', '25-35%', '50-60%'],
            correctAnswer: 1
          },
          {
            question: 'What field indication suggests wellbore collapse is occurring?',
            options: [
              'Decreasing torque and drag',
              'Increased angular/splintery cavings and elevated torque',
              'Lost circulation',
              'Decreased pump pressure'
            ],
            correctAnswer: 1
          }
        ],
        ar: [
          {
            question: 'ما نسبة التكوينات الطينية (Shale) من إجمالي التكوينات المحفورة عادةً؟',
            options: ['25%', '50%', '75%', '95%'],
            correctAnswer: 2
          },
          {
            question: 'ما الذي يسبب انهيارات جدار البئر (Breakouts)؟',
            options: [
              'فشل الشد من ضغط طين مرتفع',
              'فشل القص من إجهاد ضاغط يتجاوز قوة الصخر',
              'تفاعل كيميائي مع سائل الحفر',
              'تغيرات درجة الحرارة في التكوين'
            ],
            correctAnswer: 1
          },
          {
            question: 'أي معدن طيني هو الأكثر تفاعلاً ويسبب أكبر تضخم؟',
            options: ['Kaolinite', 'Illite', 'Smectite/Montmorillonite', 'Chlorite'],
            correctAnswer: 2
          },
          {
            question: 'ما الذي يحدد نافذة وزن الطين؟',
            options: [
              'النطاق بين حدود معدل الضخ',
              'النطاق بين ضغط الانهيار وضغط التكسر',
              'النطاق بين ضغط السطح وضغط قاع البئر',
              'النطاق بين محتوى الزيت والماء'
            ],
            correctAnswer: 1
          },
          {
            question: 'في أي اتجاه تحدث Breakouts على بئر رأسي؟',
            options: [
              'اتجاه الإجهاد الأفقي الأقصى (σH)',
              'اتجاه الإجهاد الأفقي الأدنى (σh)',
              'الاتجاه الرأسي',
              'عشوائياً حول البئر'
            ],
            correctAnswer: 1
          },
          {
            question: 'ما هو أفضل نوع سائل حفر للتكوينات الطينية التفاعلية؟',
            options: [
              'سائل مائي بسيط',
              'سائل زيتي أو صناعي',
              'حفر بالهواء',
              'رغوة'
            ],
            correctAnswer: 1
          },
          {
            question: 'ما هي الـ DIFs (شقوق ناتجة عن الحفر)؟',
            options: [
              'فشل قص من وزن طين منخفض',
              'شقوق شد في اتجاه σH من ضغط طين مرتفع',
              'شقوق طبيعية في التكوين',
              'فشل الغلاف أثناء الحفر'
            ],
            correctAnswer: 1
          },
          {
            question: 'كيف يثبت كلوريد البوتاسيوم (KCl) الطين؟',
            options: [
              'بزيادة نشاطية الماء',
              'بالدخول بين طبقات الطين وتثبيتها',
              'بإذابة المعادن الطينية',
              'بزيادة لزوجة الطين'
            ],
            correctAnswer: 1
          },
          {
            question: 'ما هو الأثر الاقتصادي النموذجي لعدم استقرار البئر على تكلفة البئر؟',
            options: ['1-2%', '5-15%', '25-35%', '50-60%'],
            correctAnswer: 1
          },
          {
            question: 'ما المؤشر الميداني الذي يدل على حدوث انهيار جدار البئر؟',
            options: [
              'انخفاض Torque و Drag',
              'زيادة الفتات الحاد/المتشظي وارتفاع Torque',
              'فقدان الدورة',
              'انخفاض ضغط الضخ'
            ],
            correctAnswer: 1
          }
        ]
      }
    },
    {
      day: 7,
      type: 'project',
      content: {
        ar: { title: 'مشروع: تحليل استقرار جدار البئر', explanation: 'طبق ما تعلمته', keyTerms: [] },
        en: { title: 'Project: Wellbore Stability Case Analysis', explanation: 'Apply what you learned', keyTerms: [] },
      },
      project: {
        en: {
          title: 'Wellbore Stability Case Study Analysis',
          description: 'You are a drilling engineer working on a new well in a challenging shale formation. Based on offset well data, the formation contains high smectite content (40%), and the previous well experienced severe stuck pipe due to wellbore instability.',
          instructions: [
            'Analyze the potential instability mechanisms for this high-smectite shale formation',
            'Recommend a drilling fluid system with specific additives and explain your reasoning',
            'Identify at least 5 real-time monitoring parameters you would track and their warning thresholds',
            'Develop a contingency plan: What corrective actions would you take if you observe increasing torque and angular cavings?',
            'Explain how you would optimize the well trajectory to minimize stability issues'
          ],
          submissionType: 'text',
        },
        ar: {
          title: 'تحليل دراسة حالة استقرار جدار البئر',
          description: 'أنت مهندس حفر تعمل على بئر جديد في تكوين طيني صعب. بناءً على بيانات الآبار المجاورة، يحتوي التكوين على نسبة عالية من السمكتايت (40%)، وقد عانى البئر السابق من انحشار شديد للأنابيب بسبب عدم استقرار جدار البئر.',
          instructions: [
            'حلل آليات عدم الاستقرار المحتملة لهذا التكوين الطيني عالي السمكتايت',
            'اقترح نظام سائل حفر مع إضافات محددة واشرح أسباب اختيارك',
            'حدد على الأقل 5 معاملات مراقبة آنية ستتبعها وعتبات التحذير الخاصة بها',
            'طور خطة طوارئ: ما الإجراءات التصحيحية التي ستتخذها إذا لاحظت زيادة في Torque وظهور فتات حاد؟',
            'اشرح كيف ستحسن مسار البئر لتقليل مشاكل الاستقرار'
          ],
          submissionType: 'text',
        },
      },
    },
  ],
};
