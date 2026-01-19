import { WeeklyLesson } from '../weeklyContent';

export const wellboreStabilityLesson: WeeklyLesson = {
  lessonId: 'wellbore-stability',
  days: [
    {
      day: 1,
      type: 'learning',
      content: {
        ar: {
          title: 'استقرار جدار البئر - المفاهيم الأساسية',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 مقدمة في استقرار جدار البئر (Wellbore Stability)</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<p style="font-size: 1.1rem; line-height: 1.8;">
<strong>استقرار جدار البئر (Wellbore Stability)</strong> هو أحد أهم التحديات في عمليات الحفر، ويشير إلى قدرة جدار البئر على الحفاظ على شكله وسلامته الهيكلية أثناء وبعد الحفر. عدم الاستقرار يمكن أن يؤدي إلى مشاكل خطيرة تكلف ملايين الدولارات.
</p>
</div>

<div style="background: #fef2f2; padding: 1.25rem; border-radius: 10px; border-right: 4px solid #dc2626; margin: 1.5rem 0;">
<h4 style="color: #dc2626; margin-bottom: 0.75rem;">⚠️ الأثر الاقتصادي:</h4>
<ul style="margin: 0; padding-right: 1.25rem; color: #7f1d1d;">
<li>تكاليف عدم الاستقرار: 5-15% من إجمالي تكلفة البئر</li>
<li>خسائر عالمية سنوية: تتجاوز 1 مليار دولار</li>
<li>تأخيرات زمنية كبيرة وإمكانية فقدان البئر</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 أنواع مشاكل عدم الاستقرار</h3>

<div style="display: grid; gap: 1rem; margin-bottom: 1.5rem;">
<div style="background: #fef3c7; padding: 1.5rem; border-radius: 10px; border: 2px solid #f59e0b;">
<h4 style="color: #92400e; margin-bottom: 0.75rem; font-size: 1.1rem;">🔸 انهيار جدار البئر (Wellbore Collapse)</h4>
<p style="color: #78350f; line-height: 1.8;">يحدث عندما يتجاوز الإجهاد المحيط بالبئر قوة الصخر، مما يؤدي إلى انهيار المادة الصخرية داخل البئر. شائع في التكوينات الطينية (Shale) والتكوينات الضعيفة.</p>
</div>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 10px; border: 2px solid #3b82f6;">
<h4 style="color: #1e40af; margin-bottom: 0.75rem; font-size: 1.1rem;">🔹 تكسر التكوين (Formation Fracture)</h4>
<p style="color: #1e3a8a; line-height: 1.8;">يحدث عندما يتجاوز ضغط سائل الحفر قوة تماسك التكوين، مما يؤدي إلى فتح شقوق وفقدان سائل الحفر.</p>
</div>

<div style="background: #dcfce7; padding: 1.5rem; border-radius: 10px; border: 2px solid #22c55e;">
<h4 style="color: #166534; margin-bottom: 0.75rem; font-size: 1.1rem;">🔹 تضخم التكوين (Formation Swelling)</h4>
<p style="color: #14532d; line-height: 1.8;">يحدث في التكوينات الطينية التفاعلية عند تعرضها لسوائل حفر غير متوافقة. يؤدي إلى تضيق البئر وانحشار الأنابيب.</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 العوامل المؤثرة على الاستقرار</h3>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #1e3a5f; margin-bottom: 1rem;">1️⃣ الإجهادات في الموقع (In-Situ Stresses)</h4>
<ul style="margin: 0; padding-right: 1.25rem; line-height: 1.8;">
<li><strong>الإجهاد الرأسي (σv):</strong> ناتج عن وزن الطبقات الفوقية (Overburden)</li>
<li><strong>الإجهاد الأفقي الأقصى (σH):</strong> أكبر إجهاد أفقي</li>
<li><strong>الإجهاد الأفقي الأدنى (σh):</strong> أصغر إجهاد أفقي</li>
</ul>

<h4 style="color: #1e3a5f; margin: 1.5rem 0 1rem 0;">2️⃣ خصائص الصخر</h4>
<ul style="margin: 0; padding-right: 1.25rem; line-height: 1.8;">
<li><strong>قوة الضغط (UCS):</strong> Unconfined Compressive Strength</li>
<li><strong>زاوية الاحتكاك الداخلي:</strong> Internal Friction Angle</li>
<li><strong>معامل يونج (E):</strong> Young's Modulus - صلابة الصخر</li>
</ul>

<h4 style="color: #1e3a5f; margin: 1.5rem 0 1rem 0;">3️⃣ ضغط المسام (Pore Pressure)</h4>
<p style="line-height: 1.8;">ضغط السوائل داخل مسام التكوين. ضغط المسام العالي يقلل من الإجهاد الفعال ويضعف الصخر.</p>
</div>

<div style="background: #e8f4fd; padding: 1.25rem; border-radius: 10px; margin: 1.5rem 0;">
<h4 style="color: #1e40af; margin-bottom: 0.75rem;">💡 نافذة وزن الطين (Mud Weight Window):</h4>
<p style="color: #1e3a8a; line-height: 1.8;">
النطاق الآمن لوزن سائل الحفر يقع بين:<br/>
<strong>الحد الأدنى:</strong> ضغط الانهيار (Collapse Pressure) أو ضغط المسام<br/>
<strong>الحد الأقصى:</strong> ضغط التكسر (Fracture Pressure)
</p>
</div>
</section>`,
          keyTerms: [
            { term: 'Wellbore Stability', definition: 'قدرة جدار البئر على الحفاظ على شكله وسلامته' },
            { term: 'In-Situ Stress', definition: 'الإجهادات الطبيعية الموجودة في التكوين' },
            { term: 'Mud Weight Window', definition: 'نطاق وزن سائل الحفر الآمن' },
            { term: 'UCS', definition: 'قوة الضغط غير المحصورة للصخر' }
          ],
          practiceQuestion: {
            question: 'ما هو السبب الرئيسي لانهيار جدار البئر؟',
            options: [
              'ضغط سائل الحفر أعلى من ضغط التكسر',
              'الإجهاد المحيط بالبئر يتجاوز قوة الصخر',
              'سرعة الحفر العالية جداً',
              'درجة الحرارة المنخفضة'
            ],
            correctAnswer: 1
          }
        },
        en: {
          title: 'Wellbore Stability - Basic Concepts',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Introduction to Wellbore Stability</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<p style="font-size: 1.1rem; line-height: 1.8;">
<strong>Wellbore Stability</strong> is one of the most critical challenges in drilling operations, referring to the wellbore's ability to maintain its shape and structural integrity during and after drilling. Instability can lead to serious problems costing millions of dollars.
</p>
</div>

<div style="background: #fef2f2; padding: 1.25rem; border-radius: 10px; border-left: 4px solid #dc2626; margin: 1.5rem 0;">
<h4 style="color: #dc2626; margin-bottom: 0.75rem;">⚠️ Economic Impact:</h4>
<ul style="margin: 0; padding-left: 1.25rem; color: #7f1d1d;">
<li>Instability costs: 5-15% of total well cost</li>
<li>Annual global losses: exceed $1 billion</li>
<li>Significant delays and potential well loss</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 Types of Instability Problems</h3>

<div style="display: grid; gap: 1rem; margin-bottom: 1.5rem;">
<div style="background: #fef3c7; padding: 1.5rem; border-radius: 10px; border: 2px solid #f59e0b;">
<h4 style="color: #92400e; margin-bottom: 0.75rem; font-size: 1.1rem;">🔸 Wellbore Collapse</h4>
<p style="color: #78350f; line-height: 1.8;">Occurs when stress around the wellbore exceeds rock strength, causing rock material to fall into the well. Common in shale and weak formations.</p>
</div>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 10px; border: 2px solid #3b82f6;">
<h4 style="color: #1e40af; margin-bottom: 0.75rem; font-size: 1.1rem;">🔹 Formation Fracture</h4>
<p style="color: #1e3a8a; line-height: 1.8;">Occurs when mud pressure exceeds formation tensile strength, opening fractures and losing drilling fluid.</p>
</div>

<div style="background: #dcfce7; padding: 1.5rem; border-radius: 10px; border: 2px solid #22c55e;">
<h4 style="color: #166534; margin-bottom: 0.75rem; font-size: 1.1rem;">🔹 Formation Swelling</h4>
<p style="color: #14532d; line-height: 1.8;">Occurs in reactive shale formations when exposed to incompatible fluids. Leads to wellbore narrowing and stuck pipe.</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 Factors Affecting Stability</h3>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #1e3a5f; margin-bottom: 1rem;">1️⃣ In-Situ Stresses</h4>
<ul style="margin: 0; padding-left: 1.25rem; line-height: 1.8;">
<li><strong>Vertical Stress (σv):</strong> From overburden weight</li>
<li><strong>Maximum Horizontal Stress (σH):</strong> Largest horizontal stress</li>
<li><strong>Minimum Horizontal Stress (σh):</strong> Smallest horizontal stress</li>
</ul>

<h4 style="color: #1e3a5f; margin: 1.5rem 0 1rem 0;">2️⃣ Rock Properties</h4>
<ul style="margin: 0; padding-left: 1.25rem; line-height: 1.8;">
<li><strong>UCS:</strong> Unconfined Compressive Strength</li>
<li><strong>Internal Friction Angle</strong></li>
<li><strong>Young's Modulus (E):</strong> Rock stiffness</li>
</ul>

<h4 style="color: #1e3a5f; margin: 1.5rem 0 1rem 0;">3️⃣ Pore Pressure</h4>
<p style="line-height: 1.8;">Fluid pressure within formation pores. High pore pressure reduces effective stress and weakens rock.</p>
</div>

<div style="background: #e8f4fd; padding: 1.25rem; border-radius: 10px; margin: 1.5rem 0;">
<h4 style="color: #1e40af; margin-bottom: 0.75rem;">💡 Mud Weight Window:</h4>
<p style="color: #1e3a8a; line-height: 1.8;">
Safe drilling fluid weight range between:<br/>
<strong>Lower Limit:</strong> Collapse Pressure or Pore Pressure<br/>
<strong>Upper Limit:</strong> Fracture Pressure
</p>
</div>
</section>`,
          keyTerms: [
            { term: 'Wellbore Stability', definition: 'Wellbore ability to maintain shape and integrity' },
            { term: 'In-Situ Stress', definition: 'Natural stresses present in the formation' },
            { term: 'Mud Weight Window', definition: 'Safe drilling fluid weight range' },
            { term: 'UCS', definition: 'Unconfined Compressive Strength of rock' }
          ],
          practiceQuestion: {
            question: 'What is the main cause of wellbore collapse?',
            options: [
              'Mud pressure higher than fracture pressure',
              'Stress around wellbore exceeds rock strength',
              'Very high drilling speed',
              'Low temperature'
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
          title: 'ميكانيكا الصخور وتحليل الإجهادات',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 ميكانيكا الصخور (Rock Mechanics)</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<p style="font-size: 1.1rem; line-height: 1.8;">
فهم ميكانيكا الصخور ضروري للتنبؤ بسلوك التكوينات أثناء الحفر. عند حفر البئر، نغير حالة الإجهاد الطبيعية للتكوين، مما يخلق تركيزات إجهاد حول جدار البئر.
</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 إعادة توزيع الإجهادات حول البئر</h3>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
عند حفر البئر، تتركز الإجهادات على جدار البئر. الإجهادات الثلاثة الرئيسية على جدار البئر الرأسي:
</p>

<div style="background: #dbeafe; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<ul style="margin: 0; padding-right: 1.25rem; color: #1e3a8a;">
<li><strong>الإجهاد الشعاعي (σr):</strong> يساوي ضغط سائل الحفر (Pw)</li>
<li><strong>الإجهاد المماسي (σθ):</strong> يتغير حول محيط البئر</li>
<li><strong>الإجهاد المحوري (σz):</strong> موازي لمحور البئر</li>
</ul>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 معايير الفشل (Failure Criteria)</h3>

<div style="display: grid; gap: 1rem; margin-bottom: 1.5rem;">
<div style="background: #fef3c7; padding: 1.5rem; border-radius: 10px; border: 2px solid #f59e0b;">
<h4 style="color: #92400e; margin-bottom: 0.75rem; font-size: 1.1rem;">🔸 معيار موهر-كولوم (Mohr-Coulomb)</h4>
<p style="color: #78350f; line-height: 1.8;">
الأكثر استخداماً في تحليل استقرار البئر. يعتمد على قوة التماسك (Cohesion) وزاوية الاحتكاك الداخلي.
</p>
</div>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 10px; border: 2px solid #3b82f6;">
<h4 style="color: #1e40af; margin-bottom: 0.75rem; font-size: 1.1rem;">🔹 Breakouts و DIFs</h4>
<p style="color: #1e3a8a; line-height: 1.8;">
<strong>Breakouts:</strong> مناطق انهيار على جانبي البئر (اتجاه σh)<br/>
<strong>DIFs:</strong> شقوق ناتجة عن الحفر في اتجاه σH
</p>
</div>
</div>
</section>`,
          keyTerms: [
            { term: 'Stress Concentration', definition: 'تركز الإجهاد حول جدار البئر' },
            { term: 'Mohr-Coulomb', definition: 'معيار فشل الصخور الأكثر استخداماً' },
            { term: 'Breakout', definition: 'منطقة انهيار على جدار البئر' },
            { term: 'Tensile Failure', definition: 'فشل الصخر تحت إجهاد الشد' }
          ],
          practiceQuestion: {
            question: 'أين تحدث الـ Breakouts على جدار البئر؟',
            options: [
              'في اتجاه الإجهاد الأفقي الأقصى (σH)',
              'في اتجاه الإجهاد الأفقي الأدنى (σh)',
              'في الاتجاه الرأسي',
              'بشكل عشوائي حول البئر'
            ],
            correctAnswer: 1
          }
        },
        en: {
          title: 'Rock Mechanics and Stress Analysis',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Rock Mechanics</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<p style="font-size: 1.1rem; line-height: 1.8;">
Understanding rock mechanics is essential for predicting formation behavior during drilling. When drilling, we alter the natural stress state, creating stress concentrations around the wellbore wall.
</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 Stress Redistribution Around Wellbore</h3>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
When drilling, stresses concentrate on the wellbore wall. Three principal stresses on a vertical wellbore:
</p>

<div style="background: #dbeafe; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<ul style="margin: 0; padding-left: 1.25rem; color: #1e3a8a;">
<li><strong>Radial Stress (σr):</strong> Equals mud pressure (Pw)</li>
<li><strong>Tangential Stress (σθ):</strong> Varies around wellbore</li>
<li><strong>Axial Stress (σz):</strong> Parallel to wellbore axis</li>
</ul>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 Failure Criteria</h3>

<div style="display: grid; gap: 1rem; margin-bottom: 1.5rem;">
<div style="background: #fef3c7; padding: 1.5rem; border-radius: 10px; border: 2px solid #f59e0b;">
<h4 style="color: #92400e; margin-bottom: 0.75rem; font-size: 1.1rem;">🔸 Mohr-Coulomb Criterion</h4>
<p style="color: #78350f; line-height: 1.8;">
Most commonly used in wellbore stability. Based on cohesion and internal friction angle.
</p>
</div>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 10px; border: 2px solid #3b82f6;">
<h4 style="color: #1e40af; margin-bottom: 0.75rem; font-size: 1.1rem;">🔹 Breakouts & DIFs</h4>
<p style="color: #1e3a8a; line-height: 1.8;">
<strong>Breakouts:</strong> Collapse zones on wellbore sides (σh direction)<br/>
<strong>DIFs:</strong> Drilling-induced fractures in σH direction
</p>
</div>
</div>
</section>`,
          keyTerms: [
            { term: 'Stress Concentration', definition: 'Stress buildup around wellbore wall' },
            { term: 'Mohr-Coulomb', definition: 'Most commonly used rock failure criterion' },
            { term: 'Breakout', definition: 'Collapse zone on wellbore wall' },
            { term: 'Tensile Failure', definition: 'Rock failure under tensile stress' }
          ],
          practiceQuestion: {
            question: 'Where do breakouts occur on the wellbore?',
            options: [
              'In the direction of maximum horizontal stress (σH)',
              'In the direction of minimum horizontal stress (σh)',
              'In the vertical direction',
              'Randomly around the wellbore'
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
          title: 'التكوينات الطينية والتفاعلات الكيميائية',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 مشاكل التكوينات الطينية (Shale Instability)</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<p style="font-size: 1.1rem; line-height: 1.8;">
التكوينات الطينية (Shale) تشكل حوالي 75% من التكوينات المحفورة وتسبب أكثر من 90% من مشاكل عدم استقرار جدار البئر. فهم التفاعلات بين الطين وسائل الحفر أساسي لحل هذه المشاكل.
</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 أنواع المعادن الطينية</h3>

<div style="display: grid; gap: 1rem; margin-bottom: 1.5rem;">
<div style="background: #fef3c7; padding: 1.5rem; border-radius: 10px; border: 2px solid #f59e0b;">
<h4 style="color: #92400e; margin-bottom: 0.75rem; font-size: 1.1rem;">🔸 سمكتايت / مونتموريلونيت (Smectite)</h4>
<p style="color: #78350f; line-height: 1.8;">
الأكثر تفاعلاً وتضخماً. يمتص الماء بين طبقاته ويتضخم حتى 20 ضعف حجمه الأصلي.
</p>
</div>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 10px; border: 2px solid #3b82f6;">
<h4 style="color: #1e40af; margin-bottom: 0.75rem; font-size: 1.1rem;">🔹 إليت (Illite)</h4>
<p style="color: #1e3a8a; line-height: 1.8;">
أقل تفاعلاً من السمكتايت. بنية غير متوسعة لكن يمكن أن يتشتت في الماء.
</p>
</div>

<div style="background: #dcfce7; padding: 1.5rem; border-radius: 10px; border: 2px solid #22c55e;">
<h4 style="color: #166534; margin-bottom: 0.75rem; font-size: 1.1rem;">🔹 كاولينيت (Kaolinite)</h4>
<p style="color: #14532d; line-height: 1.8;">
الأقل تفاعلاً. بنية مستقرة ولا يتضخم.
</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 استراتيجيات المعالجة</h3>

<div style="background: #e8f4fd; padding: 1.25rem; border-radius: 10px; margin: 1.5rem 0;">
<h4 style="color: #1e40af; margin-bottom: 0.75rem;">💡 طرق تثبيت الطين:</h4>
<ul style="margin: 0; padding-right: 1.25rem; color: #1e3a8a; line-height: 1.8;">
<li><strong>سوائل زيتية (OBM):</strong> لا تتفاعل مع الطين - الخيار الأمثل</li>
<li><strong>أملاح البوتاسيوم (KCl):</strong> تقلل التضخم بتثبيت الطبقات</li>
<li><strong>البوليمرات (Polymers):</strong> تكون غلاف واقي على السطح</li>
<li><strong>السيليكات (Silicates):</strong> تتفاعل وتكون حاجز صلب</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Smectite', definition: 'معدن طيني تفاعلي يتضخم بالماء' },
            { term: 'Hydration', definition: 'امتصاص الماء بواسطة المعادن الطينية' },
            { term: 'Water Activity', definition: 'نشاطية الماء - قدرته على التفاعل' },
            { term: 'Shale Inhibitor', definition: 'مادة تمنع تفاعل الطين مع الماء' }
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
          title: 'Shale Formations and Chemical Interactions',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Shale Instability Problems</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<p style="font-size: 1.1rem; line-height: 1.8;">
Shale formations comprise about 75% of drilled formations and cause over 90% of wellbore instability problems. Understanding clay-fluid interactions is fundamental to solving these issues.
</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 Types of Clay Minerals</h3>

<div style="display: grid; gap: 1rem; margin-bottom: 1.5rem;">
<div style="background: #fef3c7; padding: 1.5rem; border-radius: 10px; border: 2px solid #f59e0b;">
<h4 style="color: #92400e; margin-bottom: 0.75rem; font-size: 1.1rem;">🔸 Smectite/Montmorillonite</h4>
<p style="color: #78350f; line-height: 1.8;">
Most reactive and swelling. Absorbs water between layers, swelling up to 20 times original volume.
</p>
</div>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 10px; border: 2px solid #3b82f6;">
<h4 style="color: #1e40af; margin-bottom: 0.75rem; font-size: 1.1rem;">🔹 Illite</h4>
<p style="color: #1e3a8a; line-height: 1.8;">
Less reactive than smectite. Non-expanding structure but can disperse in water.
</p>
</div>

<div style="background: #dcfce7; padding: 1.5rem; border-radius: 10px; border: 2px solid #22c55e;">
<h4 style="color: #166534; margin-bottom: 0.75rem; font-size: 1.1rem;">🔹 Kaolinite</h4>
<p style="color: #14532d; line-height: 1.8;">
Least reactive. Stable structure, doesn't swell.
</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 Treatment Strategies</h3>

<div style="background: #e8f4fd; padding: 1.25rem; border-radius: 10px; margin: 1.5rem 0;">
<h4 style="color: #1e40af; margin-bottom: 0.75rem;">💡 Shale Stabilization Methods:</h4>
<ul style="margin: 0; padding-left: 1.25rem; color: #1e3a8a; line-height: 1.8;">
<li><strong>Oil-Based Mud (OBM):</strong> Doesn't react with clay - optimal choice</li>
<li><strong>Potassium Salts (KCl):</strong> Reduce swelling by stabilizing layers</li>
<li><strong>Polymers:</strong> Form protective coating on surface</li>
<li><strong>Silicates:</strong> React to form solid barrier</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Smectite', definition: 'Reactive clay mineral that swells with water' },
            { term: 'Hydration', definition: 'Water absorption by clay minerals' },
            { term: 'Water Activity', definition: 'Water reactivity potential' },
            { term: 'Shale Inhibitor', definition: 'Chemical preventing clay-water reaction' }
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
          title: 'استراتيجيات المنع والتطبيقات الميدانية',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 استراتيجيات الحفاظ على استقرار جدار البئر</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<p style="font-size: 1.1rem; line-height: 1.8;">
الوقاية خير من العلاج! التخطيط المسبق واختيار سائل الحفر المناسب والممارسات التشغيلية الصحيحة يمكن أن تمنع معظم مشاكل عدم الاستقرار.
</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 التخطيط قبل الحفر</h3>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #1e3a5f; margin-bottom: 1rem;">1️⃣ بناء نموذج Geomechanical</h4>
<ul style="margin: 0; padding-right: 1.25rem; line-height: 1.8;">
<li>تحديد الإجهادات من سجلات الآبار المجاورة</li>
<li>تقدير خصائص الصخر (UCS, friction angle)</li>
<li>حساب ضغط المسام وضغط التكسر</li>
<li>تحديد نافذة وزن الطين الآمنة</li>
</ul>

<h4 style="color: #1e3a5f; margin: 1.5rem 0 1rem 0;">2️⃣ اختيار سائل الحفر</h4>
<ul style="margin: 0; padding-right: 1.25rem; line-height: 1.8;">
<li><strong>OBM/SBM:</strong> للتكوينات الطينية التفاعلية</li>
<li><strong>Inhibitive WBM:</strong> عند وجود قيود بيئية</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 الممارسات التشغيلية</h3>

<div style="background: #dcfce7; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #166534; margin-bottom: 0.75rem;">✅ أفضل الممارسات:</h4>
<ul style="margin: 0; padding-right: 1.25rem; color: #14532d; line-height: 1.8;">
<li>الحفاظ على وزن الطين ضمن النافذة الآمنة</li>
<li>تجنب ارتفاع ECD فوق ضغط التكسر</li>
<li>تنظيف البئر جيداً لمنع Packoff</li>
<li>تقليل وقت تعرض التكوين لسائل الحفر</li>
</ul>
</div>

<div style="background: #e8f4fd; padding: 1.25rem; border-radius: 10px; margin: 1.5rem 0;">
<h4 style="color: #1e40af; margin-bottom: 0.75rem;">💡 مؤشرات المراقبة الميدانية:</h4>
<ul style="margin: 0; padding-right: 1.25rem; color: #1e3a8a; line-height: 1.8;">
<li>زيادة في Torque & Drag</li>
<li>تغير في حجم الفتات (Cavings)</li>
<li>Overpull عند السحب</li>
<li>تغيرات في Caliper Log</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Geomechanical Model', definition: 'نموذج لتوقع سلوك الصخور أثناء الحفر' },
            { term: 'ECD', definition: 'الكثافة المكافئة للدورة - ضغط فعلي على التكوين' },
            { term: 'Cavings', definition: 'قطع صخرية منهارة من جدار البئر' },
            { term: 'Inhibitive Mud', definition: 'سائل حفر يمنع تفاعل الطين' }
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
          title: 'Prevention Strategies and Field Applications',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Wellbore Stability Strategies</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<p style="font-size: 1.1rem; line-height: 1.8;">
Prevention is better than cure! Pre-planning, proper mud selection, and correct operational practices can prevent most instability problems.
</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 Pre-Drilling Planning</h3>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #1e3a5f; margin-bottom: 1rem;">1️⃣ Building Geomechanical Model</h4>
<ul style="margin: 0; padding-left: 1.25rem; line-height: 1.8;">
<li>Determine stresses from offset well logs</li>
<li>Estimate rock properties (UCS, friction angle)</li>
<li>Calculate pore pressure and fracture pressure</li>
<li>Define safe mud weight window</li>
</ul>

<h4 style="color: #1e3a5f; margin: 1.5rem 0 1rem 0;">2️⃣ Drilling Fluid Selection</h4>
<ul style="margin: 0; padding-left: 1.25rem; line-height: 1.8;">
<li><strong>OBM/SBM:</strong> For reactive shale formations</li>
<li><strong>Inhibitive WBM:</strong> When environmental restrictions apply</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 Operational Practices</h3>

<div style="background: #dcfce7; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #166534; margin-bottom: 0.75rem;">✅ Best Practices:</h4>
<ul style="margin: 0; padding-left: 1.25rem; color: #14532d; line-height: 1.8;">
<li>Maintain mud weight within safe window</li>
<li>Avoid ECD exceeding fracture pressure</li>
<li>Clean hole properly to prevent packoff</li>
<li>Minimize formation exposure to drilling fluid</li>
</ul>
</div>

<div style="background: #e8f4fd; padding: 1.25rem; border-radius: 10px; margin: 1.5rem 0;">
<h4 style="color: #1e40af; margin-bottom: 0.75rem;">💡 Field Monitoring Indicators:</h4>
<ul style="margin: 0; padding-left: 1.25rem; color: #1e3a8a; line-height: 1.8;">
<li>Increased Torque & Drag</li>
<li>Changes in cavings size/shape</li>
<li>Overpull when pulling out</li>
<li>Caliper Log variations</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Geomechanical Model', definition: 'Model predicting rock behavior during drilling' },
            { term: 'ECD', definition: 'Equivalent Circulating Density - effective pressure on formation' },
            { term: 'Cavings', definition: 'Rock pieces collapsed from wellbore wall' },
            { term: 'Inhibitive Mud', definition: 'Drilling fluid preventing clay reaction' }
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
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 ملخص الأسبوع - استقرار جدار البئر</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<p style="font-size: 1.1rem; line-height: 1.8;">
في هذا الأسبوع، تعلمنا عن أحد أهم تحديات الحفر: الحفاظ على استقرار جدار البئر. إليك ملخص للنقاط الرئيسية.
</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 النقاط الرئيسية</h3>

<div style="background: #f8f9fa; padding: 1rem; border-radius: 10px; margin-bottom: 1rem;">
<ul style="margin: 0; padding-right: 1.25rem; line-height: 1.8;">
<li><strong>اليوم الأول:</strong> أنواع عدم الاستقرار ونافذة وزن الطين</li>
<li><strong>اليوم الثاني:</strong> ميكانيكا الصخور ومعايير الفشل</li>
<li><strong>اليوم الثالث:</strong> المعادن الطينية وطرق التثبيت</li>
<li><strong>اليوم الرابع:</strong> استراتيجيات المنع والمراقبة</li>
</ul>
</div>

<div style="background: #dcfce7; padding: 1.5rem; border-radius: 10px; margin-top: 1.5rem;">
<h4 style="color: #166534; margin-bottom: 0.75rem;">✅ النقاط الأساسية للتذكر:</h4>
<ol style="margin: 0; padding-right: 1.25rem; color: #14532d; line-height: 1.8;">
<li>استقرار البئر يعتمد على التوازن بين الإجهادات وقوة الصخر</li>
<li>الطين هو المسبب الأول لمشاكل عدم الاستقرار</li>
<li>الوقاية أفضل وأرخص من العلاج</li>
<li>اختيار سائل الحفر المناسب حسب نوع التكوين</li>
<li>المراقبة المستمرة ضرورية للكشف المبكر</li>
</ol>
</div>
</section>`,
          keyTerms: [
            { term: 'Mud Weight Window', definition: 'نطاق وزن الطين الآمن' },
            { term: 'Geomechanics', definition: 'علم دراسة سلوك الصخور' },
            { term: 'Shale Stability', definition: 'الحفاظ على استقرار التكوينات الطينية' },
            { term: 'Prevention', definition: 'منع المشاكل قبل حدوثها' }
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
This week, we learned about one of drilling's most critical challenges: maintaining wellbore stability. Here's a summary of key points.
</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 Key Points</h3>

<div style="background: #f8f9fa; padding: 1rem; border-radius: 10px; margin-bottom: 1rem;">
<ul style="margin: 0; padding-left: 1.25rem; line-height: 1.8;">
<li><strong>Day 1:</strong> Types of instability and mud weight window</li>
<li><strong>Day 2:</strong> Rock mechanics and failure criteria</li>
<li><strong>Day 3:</strong> Clay minerals and stabilization methods</li>
<li><strong>Day 4:</strong> Prevention strategies and monitoring</li>
</ul>
</div>

<div style="background: #dcfce7; padding: 1.5rem; border-radius: 10px; margin-top: 1.5rem;">
<h4 style="color: #166534; margin-bottom: 0.75rem;">✅ Key Points to Remember:</h4>
<ol style="margin: 0; padding-left: 1.25rem; color: #14532d; line-height: 1.8;">
<li>Wellbore stability depends on balance between stresses and rock strength</li>
<li>Shale is the primary cause of instability problems</li>
<li>Prevention is better and cheaper than cure</li>
<li>Select drilling fluid based on formation type</li>
<li>Continuous monitoring is essential for early detection</li>
</ol>
</div>
</section>`,
          keyTerms: [
            { term: 'Mud Weight Window', definition: 'Safe mud weight range' },
            { term: 'Geomechanics', definition: 'Study of rock behavior' },
            { term: 'Shale Stability', definition: 'Maintaining stability in shale formations' },
            { term: 'Prevention', definition: 'Preventing problems before they occur' }
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
        ar: {
          title: 'اختبار استقرار جدار البئر',
          explanation: 'اختبار شامل على مفاهيم استقرار جدار البئر',
          keyTerms: []
        },
        en: {
          title: 'Wellbore Stability Quiz',
          explanation: 'Comprehensive quiz on wellbore stability concepts',
          keyTerms: []
        }
      },
      quiz: {
        en: [
          { question: 'What is the primary cause of wellbore collapse?', options: ['High mud weight', 'Low mud weight causing shear failure', 'Fast drilling', 'High temperature'], correctAnswer: 1 },
          { question: 'Which clay mineral is most reactive and swells the most?', options: ['Kaolinite', 'Illite', 'Smectite/Montmorillonite', 'Chlorite'], correctAnswer: 2 },
          { question: 'What is the mud weight window?', options: ['Distance between locations', 'Range between collapse and fracture pressure', 'Volume of mud tanks', 'Time between changes'], correctAnswer: 1 },
          { question: 'Where do breakouts occur on the wellbore wall?', options: ['In direction of σH', 'In direction of σh', 'At random locations', 'At the bottom only'], correctAnswer: 1 },
          { question: 'Which mud type is best for reactive shale formations?', options: ['Simple water-based mud', 'Oil-based mud', 'Air drilling', 'Foam'], correctAnswer: 1 },
          { question: 'What is Mohr-Coulomb criterion used for?', options: ['Calculating mud volume', 'Predicting rock failure', 'Measuring temperature', 'Determining ROP'], correctAnswer: 1 },
          { question: 'What causes osmotic water transfer into shale?', options: ['High mud weight', 'Higher water activity in mud than formation', 'Fast circulation', 'Large drill bit'], correctAnswer: 1 },
          { question: 'What is a key indicator of wellbore instability?', options: ['Constant ROP', 'Increased torque and drag', 'Normal mud returns', 'Steady pump pressure'], correctAnswer: 1 },
          { question: 'What is the purpose of KCl in drilling fluid?', options: ['Increase viscosity', 'Inhibit clay swelling', 'Add color', 'Reduce density'], correctAnswer: 1 },
          { question: 'What are cavings?', options: ['Drill bit teeth', 'Rock pieces from wellbore wall', 'Mud additives', 'Casing sections'], correctAnswer: 1 }
        ],
        ar: [
          { question: 'ما هو السبب الرئيسي لانهيار جدار البئر؟', options: ['وزن طين عالي', 'وزن طين منخفض يسبب فشل القص', 'حفر سريع', 'درجة حرارة عالية'], correctAnswer: 1 },
          { question: 'أي معدن طيني هو الأكثر تفاعلاً وتضخماً؟', options: ['كاولينيت', 'إليت', 'سمكتايت/مونتموريلونيت', 'كلوريت'], correctAnswer: 2 },
          { question: 'ما هي نافذة وزن الطين؟', options: ['المسافة بين المواقع', 'النطاق بين ضغط الانهيار وضغط التكسر', 'حجم خزانات الطين', 'الوقت بين التغييرات'], correctAnswer: 1 },
          { question: 'أين تحدث الـ Breakouts على جدار البئر؟', options: ['في اتجاه σH', 'في اتجاه σh', 'في مواقع عشوائية', 'في القاع فقط'], correctAnswer: 1 },
          { question: 'أي نوع طين هو الأفضل للتكوينات الطينية التفاعلية؟', options: ['طين مائي بسيط', 'طين زيتي', 'حفر بالهواء', 'رغوة'], correctAnswer: 1 },
          { question: 'ما استخدام معيار موهر-كولوم؟', options: ['حساب حجم الطين', 'التنبؤ بفشل الصخر', 'قياس الحرارة', 'تحديد ROP'], correctAnswer: 1 },
          { question: 'ما الذي يسبب انتقال الماء الأسموزي إلى الطين؟', options: ['وزن طين عالي', 'نشاطية ماء أعلى في الطين من التكوين', 'دوران سريع', 'رأس حفر كبير'], correctAnswer: 1 },
          { question: 'ما هو المؤشر الرئيسي على عدم استقرار البئر؟', options: ['ROP ثابت', 'زيادة في العزم والسحب', 'عودة طين طبيعية', 'ضغط مضخة ثابت'], correctAnswer: 1 },
          { question: 'ما هو الغرض من KCl في سائل الحفر؟', options: ['زيادة اللزوجة', 'تثبيط تضخم الطين', 'إضافة لون', 'تقليل الكثافة'], correctAnswer: 1 },
          { question: 'ما هي الـ Cavings؟', options: ['أسنان رأس الحفر', 'قطع صخرية من جدار البئر', 'إضافات الطين', 'أقسام البطانة'], correctAnswer: 1 }
        ]
      }
    },
    {
      day: 7,
      type: 'project',
      content: {
        ar: {
          title: 'مشروع تحليل استقرار جدار البئر',
          explanation: 'تطبيق عملي لمفاهيم استقرار جدار البئر',
          keyTerms: []
        },
        en: {
          title: 'Wellbore Stability Analysis Project',
          explanation: 'Practical application of wellbore stability concepts',
          keyTerms: []
        }
      },
      project: {
        en: {
          title: 'Wellbore Stability Analysis Case Study',
          description: 'Analyze a wellbore stability scenario and develop a prevention strategy.',
          instructions: [
            'Identify the type of instability (collapse, fracture, or swelling)',
            'List the probable causes based on formation type and drilling conditions',
            'Propose a comprehensive prevention strategy including mud selection',
            'Create a monitoring checklist for early detection of instability indicators'
          ],
          submissionType: 'text'
        },
        ar: {
          title: 'دراسة حالة تحليل استقرار جدار البئر',
          description: 'تحليل سيناريو عدم استقرار جدار البئر ووضع استراتيجية وقاية.',
          instructions: [
            'حدد نوع عدم الاستقرار (انهيار، تكسر، أو تضخم)',
            'اذكر الأسباب المحتملة بناءً على نوع التكوين وظروف الحفر',
            'اقترح استراتيجية وقاية شاملة تتضمن اختيار الطين',
            'أنشئ قائمة مراقبة للكشف المبكر عن مؤشرات عدم الاستقرار'
          ],
          submissionType: 'text'
        }
      }
    }
  ]
};
