import { WeeklyLesson } from '@/data/weeklyContent';

export const wellboreStabilityLesson: WeeklyLesson = {
  lessonId: 'wellbore-stability',
  days: [
    // Day 1: Introduction to Wellbore Stability
    {
      day: 1,
      title: {
        en: 'Introduction to Wellbore Stability',
        ar: 'مقدمة في استقرار جدار البئر'
      },
      content: {
        en: `
<div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; line-height: 1.8;">

<h1 style="color: #1e3a5f; font-size: 28px; border-bottom: 3px solid #ff6b35; padding-bottom: 10px; margin-bottom: 25px;">
  Day 1: Introduction to Wellbore Stability
</h1>

<div style="background: linear-gradient(135deg, #e8f4f8 0%, #d1e8ff 100%); padding: 20px; border-radius: 12px; margin-bottom: 25px; border-left: 5px solid #1e3a5f;">
  <h3 style="color: #1e3a5f; margin: 0 0 10px 0;">🎯 Learning Objectives</h3>
  <ul style="color: #2d5a7b; margin: 0; padding-left: 20px;">
    <li>Understand the fundamental concepts of wellbore stability</li>
    <li>Learn about the mechanical and chemical causes of instability</li>
    <li>Recognize field indicators of wellbore problems</li>
    <li>Appreciate the economic impact of stability issues</li>
  </ul>
</div>

<h2 style="color: #ff6b35; font-size: 22px; margin-top: 30px; display: flex; align-items: center; gap: 10px;">
  📐 What is Wellbore Stability?
</h2>

<p style="color: #444; font-size: 16px; text-align: justify;">
  <strong>Wellbore stability</strong> refers to the ability of the drilled hole to maintain its original size, shape, and structural integrity throughout drilling and completion operations. When a wellbore is stable, the formation rocks surrounding the hole do not collapse, cave, or swell excessively.
</p>

<div style="background: #fff3e6; padding: 20px; border-radius: 10px; margin: 20px 0; border: 2px solid #ff6b35;">
  <h4 style="color: #e55a1c; margin: 0 0 10px 0;">⚠️ Why Does Instability Occur?</h4>
  <p style="color: #444; margin: 0;">
    When we drill a well, we remove rock that was supporting the surrounding formation. This creates a stress concentration around the wellbore. If the rock cannot withstand these new stress conditions, it will fail—leading to various problems from simple washouts to complete hole collapse.
  </p>
</div>

<h2 style="color: #ff6b35; font-size: 22px; margin-top: 30px;">
  🔬 Types of Wellbore Instability
</h2>

<div style="display: grid; gap: 15px; margin: 20px 0;">
  <div style="background: #f0f8ff; padding: 20px; border-radius: 10px; border-left: 4px solid #2196f3;">
    <h4 style="color: #1976d2; margin: 0 0 10px 0;">1. Mechanical Instability</h4>
    <p style="color: #444; margin: 0;">
      Caused by stress imbalances around the wellbore. Includes shear failure (breakouts), tensile failure (fracturing), and compaction. Controlled primarily by mud weight and hole angle.
    </p>
  </div>
  
  <div style="background: #f0fff0; padding: 20px; border-radius: 10px; border-left: 4px solid #4caf50;">
    <h4 style="color: #388e3c; margin: 0 0 10px 0;">2. Chemical Instability</h4>
    <p style="color: #444; margin: 0;">
      Results from chemical interactions between drilling fluid and reactive formations (especially shales). Water absorption causes swelling, weakening, and disintegration of the rock.
    </p>
  </div>
  
  <div style="background: #fff0f5; padding: 20px; border-radius: 10px; border-left: 4px solid #e91e63;">
    <h4 style="color: #c2185b; margin: 0 0 10px 0;">3. Time-Dependent Instability</h4>
    <p style="color: #444; margin: 0;">
      Some formations weaken over time due to continued exposure to drilling fluids (creep behavior). Salt formations and some shales exhibit this behavior, requiring timely casing installation.
    </p>
  </div>
</div>

<h2 style="color: #ff6b35; font-size: 22px; margin-top: 30px;">
  📊 Field Indicators of Instability
</h2>

<table style="width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 15px;">
  <thead>
    <tr style="background: #1e3a5f; color: white;">
      <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Indicator</th>
      <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Description</th>
      <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Likely Cause</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f9f9f9;">
      <td style="padding: 10px; border: 1px solid #ddd;"><strong>Cavings at Surface</strong></td>
      <td style="padding: 10px; border: 1px solid #ddd;">Rock fragments in shaker</td>
      <td style="padding: 10px; border: 1px solid #ddd;">Mechanical failure, washout</td>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid #ddd;"><strong>Overpull on Trips</strong></td>
      <td style="padding: 10px; border: 1px solid #ddd;">Increased hookload when pulling up</td>
      <td style="padding: 10px; border: 1px solid #ddd;">Tight spots, swelling shales</td>
    </tr>
    <tr style="background: #f9f9f9;">
      <td style="padding: 10px; border: 1px solid #ddd;"><strong>Increased Torque/Drag</strong></td>
      <td style="padding: 10px; border: 1px solid #ddd;">Higher rotary resistance</td>
      <td style="padding: 10px; border: 1px solid #ddd;">Hole narrowing, ledges</td>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid #ddd;"><strong>Stuck Pipe</strong></td>
      <td style="padding: 10px; border: 1px solid #ddd;">Cannot move string</td>
      <td style="padding: 10px; border: 1px solid #ddd;">Severe instability, collapse</td>
    </tr>
    <tr style="background: #f9f9f9;">
      <td style="padding: 10px; border: 1px solid #ddd;"><strong>Fill on Connections</strong></td>
      <td style="padding: 10px; border: 1px solid #ddd;">Debris at bottom after stops</td>
      <td style="padding: 10px; border: 1px solid #ddd;">Continuous caving</td>
    </tr>
  </tbody>
</table>

<h2 style="color: #ff6b35; font-size: 22px; margin-top: 30px;">
  💰 Economic Impact
</h2>

<p style="color: #444; font-size: 16px; text-align: justify;">
  Wellbore instability is estimated to cost the global drilling industry <strong>$500-800 million annually</strong> in direct costs. These include:
</p>

<ul style="color: #444; font-size: 16px; line-height: 2;">
  <li><strong>Non-Productive Time (NPT)</strong>: Reaming, backreaming, wiper trips</li>
  <li><strong>Stuck Pipe Events</strong>: Fishing operations, sidetracks</li>
  <li><strong>Lost Circulation</strong>: When fractures are induced</li>
  <li><strong>Casing Complications</strong>: Difficult runs, damage</li>
  <li><strong>Additional Chemicals</strong>: Stabilizing additives</li>
</ul>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a7b 100%); color: white; padding: 20px; border-radius: 12px; margin-top: 30px;">
  <h3 style="margin: 0 0 15px 0; color: #ffd700;">📝 Key Takeaways - Day 1</h3>
  <ul style="margin: 0; padding-left: 20px; line-height: 2;">
    <li>Wellbore stability = maintaining hole integrity during drilling</li>
    <li>Three types: mechanical, chemical, and time-dependent</li>
    <li>Field indicators include cavings, overpull, high torque/drag</li>
    <li>Instability is a major cost driver in drilling operations</li>
  </ul>
</div>

</div>
        `,
        ar: `
<div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; line-height: 2; direction: rtl;">

<h1 style="color: #1e3a5f; font-size: 28px; border-bottom: 3px solid #ff6b35; padding-bottom: 10px; margin-bottom: 25px;">
  اليوم الأول: مقدمة في استقرار جدار البئر
</h1>

<div style="background: linear-gradient(135deg, #e8f4f8 0%, #d1e8ff 100%); padding: 20px; border-radius: 12px; margin-bottom: 25px; border-right: 5px solid #1e3a5f;">
  <h3 style="color: #1e3a5f; margin: 0 0 10px 0;">🎯 أهداف التعلم</h3>
  <ul style="color: #2d5a7b; margin: 0; padding-right: 20px;">
    <li>فهم المفاهيم الأساسية لاستقرار جدار البئر</li>
    <li>التعرف على الأسباب الميكانيكية والكيميائية لعدم الاستقرار</li>
    <li>التعرف على المؤشرات الحقلية لمشاكل جدار البئر</li>
    <li>فهم التأثير الاقتصادي لمشاكل الاستقرار</li>
  </ul>
</div>

<h2 style="color: #ff6b35; font-size: 22px; margin-top: 30px; display: flex; align-items: center; gap: 10px;">
  📐 ما هو استقرار جدار البئر (Wellbore Stability)؟
</h2>

<p style="color: #444; font-size: 16px; text-align: justify;">
  <strong>استقرار جدار البئر</strong> يشير إلى قدرة الحفرة المحفورة على الحفاظ على حجمها وشكلها وسلامتها الهيكلية الأصلية طوال عمليات الحفر والإكمال. عندما يكون جدار البئر مستقراً، فإن صخور التكوين المحيطة بالحفرة لا تنهار أو تتآكل أو تنتفخ بشكل مفرط.
</p>

<div style="background: #fff3e6; padding: 20px; border-radius: 10px; margin: 20px 0; border: 2px solid #ff6b35;">
  <h4 style="color: #e55a1c; margin: 0 0 10px 0;">⚠️ لماذا يحدث عدم الاستقرار؟</h4>
  <p style="color: #444; margin: 0;">
    عندما نحفر بئراً، نزيل الصخور التي كانت تدعم التكوين المحيط. هذا يُنشئ تركيز إجهادات حول جدار البئر. إذا لم تتمكن الصخور من تحمل ظروف الإجهاد الجديدة هذه، فإنها ستنهار - مما يؤدي إلى مشاكل مختلفة من التوسعات البسيطة إلى الانهيار الكامل للحفرة.
  </p>
</div>

<h2 style="color: #ff6b35; font-size: 22px; margin-top: 30px;">
  🔬 أنواع عدم استقرار جدار البئر
</h2>

<div style="display: grid; gap: 15px; margin: 20px 0;">
  <div style="background: #f0f8ff; padding: 20px; border-radius: 10px; border-right: 4px solid #2196f3;">
    <h4 style="color: #1976d2; margin: 0 0 10px 0;">1. عدم الاستقرار الميكانيكي (Mechanical Instability)</h4>
    <p style="color: #444; margin: 0;">
      ينتج عن اختلال توازن الإجهادات حول جدار البئر. يشمل الفشل القصي (Breakouts)، الفشل الشدي (التكسير)، والانضغاط. يُتحكم فيه بشكل أساسي من خلال وزن الطين وزاوية الحفرة.
    </p>
  </div>
  
  <div style="background: #f0fff0; padding: 20px; border-radius: 10px; border-right: 4px solid #4caf50;">
    <h4 style="color: #388e3c; margin: 0 0 10px 0;">2. عدم الاستقرار الكيميائي (Chemical Instability)</h4>
    <p style="color: #444; margin: 0;">
      ينتج عن التفاعلات الكيميائية بين سائل الحفر والتكوينات التفاعلية (خاصة الطفلة/Shale). امتصاص الماء يسبب الانتفاخ والضعف وتفكك الصخور.
    </p>
  </div>
  
  <div style="background: #fff0f5; padding: 20px; border-radius: 10px; border-right: 4px solid #e91e63;">
    <h4 style="color: #c2185b; margin: 0 0 10px 0;">3. عدم الاستقرار المعتمد على الزمن (Time-Dependent)</h4>
    <p style="color: #444; margin: 0;">
      بعض التكوينات تضعف مع الوقت بسبب التعرض المستمر لسوائل الحفر (سلوك الزحف/Creep). تُظهر تكوينات الملح وبعض الطفلات هذا السلوك، مما يتطلب تركيب البطانة في الوقت المناسب.
    </p>
  </div>
</div>

<h2 style="color: #ff6b35; font-size: 22px; margin-top: 30px;">
  📊 المؤشرات الحقلية لعدم الاستقرار
</h2>

<table style="width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 15px;">
  <thead>
    <tr style="background: #1e3a5f; color: white;">
      <th style="padding: 12px; text-align: right; border: 1px solid #ddd;">المؤشر</th>
      <th style="padding: 12px; text-align: right; border: 1px solid #ddd;">الوصف</th>
      <th style="padding: 12px; text-align: right; border: 1px solid #ddd;">السبب المحتمل</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f9f9f9;">
      <td style="padding: 10px; border: 1px solid #ddd;"><strong>الفتات السطحية (Cavings)</strong></td>
      <td style="padding: 10px; border: 1px solid #ddd;">قطع صخرية على الشيكر</td>
      <td style="padding: 10px; border: 1px solid #ddd;">فشل ميكانيكي، توسع</td>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid #ddd;"><strong>السحب الزائد (Overpull)</strong></td>
      <td style="padding: 10px; border: 1px solid #ddd;">زيادة حمل الخطاف عند السحب</td>
      <td style="padding: 10px; border: 1px solid #ddd;">نقاط ضيقة، انتفاخ الطفلة</td>
    </tr>
    <tr style="background: #f9f9f9;">
      <td style="padding: 10px; border: 1px solid #ddd;"><strong>زيادة العزم والسحب</strong></td>
      <td style="padding: 10px; border: 1px solid #ddd;">مقاومة دورانية أعلى</td>
      <td style="padding: 10px; border: 1px solid #ddd;">تضييق الحفرة، حافات</td>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid #ddd;"><strong>انحشار الأنابيب (Stuck Pipe)</strong></td>
      <td style="padding: 10px; border: 1px solid #ddd;">عدم القدرة على تحريك السلسلة</td>
      <td style="padding: 10px; border: 1px solid #ddd;">عدم استقرار شديد، انهيار</td>
    </tr>
    <tr style="background: #f9f9f9;">
      <td style="padding: 10px; border: 1px solid #ddd;"><strong>الترسبات عند الوصلات</strong></td>
      <td style="padding: 10px; border: 1px solid #ddd;">حطام في القاع بعد التوقف</td>
      <td style="padding: 10px; border: 1px solid #ddd;">انهيار مستمر</td>
    </tr>
  </tbody>
</table>

<h2 style="color: #ff6b35; font-size: 22px; margin-top: 30px;">
  💰 التأثير الاقتصادي
</h2>

<p style="color: #444; font-size: 16px; text-align: justify;">
  يُقدر أن عدم استقرار جدار البئر يكلف صناعة الحفر العالمية <strong>500-800 مليون دولار سنوياً</strong> كتكاليف مباشرة. تشمل هذه:
</p>

<ul style="color: #444; font-size: 16px; line-height: 2.2;">
  <li><strong>وقت غير إنتاجي (NPT)</strong>: التوسيع، السحب مع التوسيع، رحلات التنظيف</li>
  <li><strong>أحداث انحشار الأنابيب</strong>: عمليات الاسترداد، الانحراف الجانبي</li>
  <li><strong>فقدان الدورة</strong>: عند حدوث التكسير</li>
  <li><strong>مضاعفات البطانة</strong>: صعوبة الإنزال، التلف</li>
  <li><strong>مواد كيميائية إضافية</strong>: إضافات التثبيت</li>
</ul>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a7b 100%); color: white; padding: 20px; border-radius: 12px; margin-top: 30px;">
  <h3 style="margin: 0 0 15px 0; color: #ffd700;">📝 النقاط الرئيسية - اليوم الأول</h3>
  <ul style="margin: 0; padding-right: 20px; line-height: 2.2;">
    <li>استقرار جدار البئر = الحفاظ على سلامة الحفرة أثناء الحفر</li>
    <li>ثلاثة أنواع: ميكانيكي، كيميائي، ومعتمد على الزمن</li>
    <li>المؤشرات الحقلية تشمل الفتات، السحب الزائد، العزم/السحب العالي</li>
    <li>عدم الاستقرار محرك تكلفة رئيسي في عمليات الحفر</li>
  </ul>
</div>

</div>
        `
      },
      quiz: {
        question: {
          en: 'What is the primary cause of MECHANICAL wellbore instability?',
          ar: 'ما هو السبب الرئيسي لعدم الاستقرار الميكانيكي لجدار البئر؟'
        },
        options: {
          en: [
            'Chemical reactions with drilling fluid',
            'Stress imbalances around the wellbore',
            'High formation temperature',
            'Low pump rate'
          ],
          ar: [
            'التفاعلات الكيميائية مع سائل الحفر',
            'اختلال توازن الإجهادات حول جدار البئر',
            'ارتفاع حرارة التكوين',
            'معدل ضخ منخفض'
          ]
        },
        correctAnswer: 1
      }
    },
    // Day 2: Stress Analysis and Rock Mechanics
    {
      day: 2,
      title: {
        en: 'Stress Analysis and Rock Mechanics',
        ar: 'تحليل الإجهادات وميكانيكا الصخور'
      },
      content: {
        en: `
<div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; line-height: 1.8;">

<h1 style="color: #1e3a5f; font-size: 28px; border-bottom: 3px solid #ff6b35; padding-bottom: 10px; margin-bottom: 25px;">
  Day 2: Stress Analysis and Rock Mechanics
</h1>

<div style="background: linear-gradient(135deg, #e8f4f8 0%, #d1e8ff 100%); padding: 20px; border-radius: 12px; margin-bottom: 25px; border-left: 5px solid #1e3a5f;">
  <h3 style="color: #1e3a5f; margin: 0 0 10px 0;">🎯 Learning Objectives</h3>
  <ul style="color: #2d5a7b; margin: 0; padding-left: 20px;">
    <li>Understand in-situ stress components and their significance</li>
    <li>Learn about stress concentration around the wellbore</li>
    <li>Understand the concept of the Safe Mud Weight Window</li>
    <li>Recognize different failure modes (shear and tensile)</li>
  </ul>
</div>

<h2 style="color: #ff6b35; font-size: 22px; margin-top: 30px;">
  🌍 In-Situ Stress State
</h2>

<p style="color: #444; font-size: 16px; text-align: justify;">
  Before drilling, rock formations exist in a state of <strong>equilibrium</strong> under natural stresses. Understanding these stresses is fundamental to predicting wellbore stability.
</p>

<div style="display: grid; gap: 15px; margin: 20px 0;">
  <div style="background: #e3f2fd; padding: 20px; border-radius: 10px;">
    <h4 style="color: #1565c0; margin: 0 0 10px 0;">σv - Vertical Stress (Overburden)</h4>
    <p style="color: #444; margin: 0;">
      The weight of overlying rock and fluid. Increases with depth at approximately <strong>1.0-1.1 psi/ft</strong> (22.6-25 kPa/m). This is the most predictable stress component.
    </p>
  </div>
  
  <div style="background: #e8f5e9; padding: 20px; border-radius: 10px;">
    <h4 style="color: #2e7d32; margin: 0 0 10px 0;">σH - Maximum Horizontal Stress</h4>
    <p style="color: #444; margin: 0;">
      The largest horizontal stress, oriented in a specific direction related to tectonic forces. Determines the direction of induced fractures.
    </p>
  </div>
  
  <div style="background: #fce4ec; padding: 20px; border-radius: 10px;">
    <h4 style="color: #c2185b; margin: 0 0 10px 0;">σh - Minimum Horizontal Stress</h4>
    <p style="color: #444; margin: 0;">
      The smallest horizontal stress, perpendicular to σH. Critical for determining fracture gradient and lost circulation risk.
    </p>
  </div>
</div>

<h2 style="color: #ff6b35; font-size: 22px; margin-top: 30px;">
  🎯 Stress Concentration Effect
</h2>

<div style="background: #fff8e1; padding: 20px; border-radius: 10px; margin: 20px 0; border: 2px solid #ffc107;">
  <p style="color: #444; margin: 0;">
    When we drill a hole, we create a <strong>stress concentration</strong> around the wellbore. The stresses at the wellbore wall can be 2-3 times higher than the far-field stresses. This is why even formations that seem stable before drilling can become unstable once penetrated.
  </p>
</div>

<p style="color: #444; font-size: 16px;">
  The stress distribution around a vertical wellbore in a uniform stress field shows:
</p>

<ul style="color: #444; font-size: 16px; line-height: 2;">
  <li><strong>Maximum tangential stress</strong>: At positions perpendicular to σH</li>
  <li><strong>Minimum tangential stress</strong>: At positions parallel to σH</li>
  <li>Stress effects decay rapidly with distance (within 3 hole diameters)</li>
</ul>

<h2 style="color: #ff6b35; font-size: 22px; margin-top: 30px;">
  ⚖️ The Safe Mud Weight Window
</h2>

<p style="color: #444; font-size: 16px; text-align: justify;">
  The <strong>Safe Mud Weight Window</strong> (SMWW) defines the range of mud weights that will prevent wellbore failure. This window is bounded by:
</p>

<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
  <tr style="background: #ffebee;">
    <td style="padding: 15px; border: 1px solid #ddd; width: 40%;">
      <strong style="color: #c62828;">Lower Bound</strong>
    </td>
    <td style="padding: 15px; border: 1px solid #ddd;">
      <strong>Collapse Pressure</strong> - Below this, shear failure (breakouts) occur
    </td>
  </tr>
  <tr style="background: #e8f5e9;">
    <td style="padding: 15px; border: 1px solid #ddd;">
      <strong style="color: #2e7d32;">Upper Bound</strong>
    </td>
    <td style="padding: 15px; border: 1px solid #ddd;">
      <strong>Fracture Pressure</strong> - Above this, tensile fractures form (lost circulation)
    </td>
  </tr>
</table>

<div style="background: #f3e5f5; padding: 20px; border-radius: 10px; margin: 20px 0;">
  <h4 style="color: #7b1fa2; margin: 0 0 10px 0;">📊 Practical Window Considerations</h4>
  <ul style="color: #444; margin: 0; line-height: 2;">
    <li><strong>Pore Pressure</strong>: Must exceed to prevent influx (kick)</li>
    <li><strong>Collapse Pressure</strong>: Must exceed to prevent breakouts</li>
    <li><strong>Minimum Horizontal Stress</strong>: Must not exceed to prevent fracturing</li>
    <li><strong>Safety Margins</strong>: Typically 0.3-0.5 ppg on each side</li>
  </ul>
</div>

<h2 style="color: #ff6b35; font-size: 22px; margin-top: 30px;">
  💥 Failure Modes
</h2>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0;">
  <div style="background: #ffebee; padding: 20px; border-radius: 10px; border: 2px solid #ef5350;">
    <h4 style="color: #c62828; margin: 0 0 15px 0;">Shear Failure (Breakouts)</h4>
    <ul style="color: #444; margin: 0; padding-left: 15px; font-size: 14px;">
      <li>Occurs when mud weight too LOW</li>
      <li>Forms elongated hole sections</li>
      <li>Rock pieces (cavings) come to surface</li>
      <li>Oriented parallel to σh direction</li>
      <li>Can lead to stuck pipe, poor logs</li>
    </ul>
  </div>
  
  <div style="background: #e3f2fd; padding: 20px; border-radius: 10px; border: 2px solid #42a5f5;">
    <h4 style="color: #1565c0; margin: 0 0 15px 0;">Tensile Failure (Fracturing)</h4>
    <ul style="color: #444; margin: 0; padding-left: 15px; font-size: 14px;">
      <li>Occurs when mud weight too HIGH</li>
      <li>Creates fractures in formation</li>
      <li>Lost circulation results</li>
      <li>Oriented perpendicular to σh</li>
      <li>Can lead to well control issues</li>
    </ul>
  </div>
</div>

<h2 style="color: #ff6b35; font-size: 22px; margin-top: 30px;">
  📈 Factors Affecting the Mud Weight Window
</h2>

<ul style="color: #444; font-size: 16px; line-height: 2;">
  <li><strong>Hole Angle</strong>: Deviated wells have narrower windows</li>
  <li><strong>Hole Direction</strong>: Drilling parallel to σH may widen window</li>
  <li><strong>Depth</strong>: Window typically narrows with depth</li>
  <li><strong>Rock Strength</strong>: Stronger rocks allow wider windows</li>
  <li><strong>Pore Pressure</strong>: Abnormal pressures narrow the window</li>
  <li><strong>Depletion</strong>: Producing reservoirs have reduced stresses</li>
</ul>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a7b 100%); color: white; padding: 20px; border-radius: 12px; margin-top: 30px;">
  <h3 style="margin: 0 0 15px 0; color: #ffd700;">📝 Key Takeaways - Day 2</h3>
  <ul style="margin: 0; padding-left: 20px; line-height: 2;">
    <li>Three principal stresses: σv (vertical), σH and σh (horizontal)</li>
    <li>Drilling creates stress concentration at wellbore wall</li>
    <li>Safe Mud Weight Window bounded by collapse and fracture pressures</li>
    <li>Two failure modes: shear (breakouts) and tensile (fracturing)</li>
  </ul>
</div>

</div>
        `,
        ar: `
<div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; line-height: 2; direction: rtl;">

<h1 style="color: #1e3a5f; font-size: 28px; border-bottom: 3px solid #ff6b35; padding-bottom: 10px; margin-bottom: 25px;">
  اليوم الثاني: تحليل الإجهادات وميكانيكا الصخور
</h1>

<div style="background: linear-gradient(135deg, #e8f4f8 0%, #d1e8ff 100%); padding: 20px; border-radius: 12px; margin-bottom: 25px; border-right: 5px solid #1e3a5f;">
  <h3 style="color: #1e3a5f; margin: 0 0 10px 0;">🎯 أهداف التعلم</h3>
  <ul style="color: #2d5a7b; margin: 0; padding-right: 20px;">
    <li>فهم مكونات الإجهاد الموقعي وأهميتها</li>
    <li>التعرف على تركيز الإجهادات حول جدار البئر</li>
    <li>فهم مفهوم نافذة وزن الطين الآمنة</li>
    <li>التعرف على أنماط الفشل المختلفة (القص والشد)</li>
  </ul>
</div>

<h2 style="color: #ff6b35; font-size: 22px; margin-top: 30px;">
  🌍 حالة الإجهاد الموقعي (In-Situ Stress)
</h2>

<p style="color: #444; font-size: 16px; text-align: justify;">
  قبل الحفر، توجد التكوينات الصخرية في حالة <strong>توازن</strong> تحت الإجهادات الطبيعية. فهم هذه الإجهادات أساسي للتنبؤ باستقرار جدار البئر.
</p>

<div style="display: grid; gap: 15px; margin: 20px 0;">
  <div style="background: #e3f2fd; padding: 20px; border-radius: 10px;">
    <h4 style="color: #1565c0; margin: 0 0 10px 0;">σv - الإجهاد الرأسي (Overburden)</h4>
    <p style="color: #444; margin: 0;">
      وزن الصخور والسوائل العلوية. يزداد مع العمق بمعدل تقريبي <strong>1.0-1.1 psi/ft</strong>. هذا أكثر مكونات الإجهاد قابلية للتنبؤ.
    </p>
  </div>
  
  <div style="background: #e8f5e9; padding: 20px; border-radius: 10px;">
    <h4 style="color: #2e7d32; margin: 0 0 10px 0;">σH - الإجهاد الأفقي الأقصى (Maximum Horizontal)</h4>
    <p style="color: #444; margin: 0;">
      أكبر إجهاد أفقي، موجه في اتجاه محدد مرتبط بالقوى التكتونية. يحدد اتجاه الكسور المُحدثة.
    </p>
  </div>
  
  <div style="background: #fce4ec; padding: 20px; border-radius: 10px;">
    <h4 style="color: #c2185b; margin: 0 0 10px 0;">σh - الإجهاد الأفقي الأدنى (Minimum Horizontal)</h4>
    <p style="color: #444; margin: 0;">
      أصغر إجهاد أفقي، عمودي على σH. حاسم لتحديد gradient الكسر وخطر فقدان الدورة.
    </p>
  </div>
</div>

<h2 style="color: #ff6b35; font-size: 22px; margin-top: 30px;">
  🎯 تأثير تركيز الإجهاد
</h2>

<div style="background: #fff8e1; padding: 20px; border-radius: 10px; margin: 20px 0; border: 2px solid #ffc107;">
  <p style="color: #444; margin: 0;">
    عندما نحفر حفرة، نُنشئ <strong>تركيز إجهاد</strong> حول جدار البئر. الإجهادات عند جدار البئر يمكن أن تكون 2-3 أضعاف الإجهادات البعيدة. لهذا حتى التكوينات التي تبدو مستقرة قبل الحفر يمكن أن تصبح غير مستقرة بمجرد اختراقها.
  </p>
</div>

<h2 style="color: #ff6b35; font-size: 22px; margin-top: 30px;">
  ⚖️ نافذة وزن الطين الآمنة (Safe Mud Weight Window)
</h2>

<p style="color: #444; font-size: 16px; text-align: justify;">
  تحدد <strong>نافذة وزن الطين الآمنة</strong> (SMWW) نطاق أوزان الطين التي ستمنع فشل جدار البئر. هذه النافذة محدودة بـ:
</p>

<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
  <tr style="background: #ffebee;">
    <td style="padding: 15px; border: 1px solid #ddd; width: 40%;">
      <strong style="color: #c62828;">الحد الأدنى</strong>
    </td>
    <td style="padding: 15px; border: 1px solid #ddd;">
      <strong>ضغط الانهيار</strong> - دون هذا، يحدث فشل القص (Breakouts)
    </td>
  </tr>
  <tr style="background: #e8f5e9;">
    <td style="padding: 15px; border: 1px solid #ddd;">
      <strong style="color: #2e7d32;">الحد الأعلى</strong>
    </td>
    <td style="padding: 15px; border: 1px solid #ddd;">
      <strong>ضغط التكسير</strong> - فوق هذا، تتكون كسور شدية (فقدان دورة)
    </td>
  </tr>
</table>

<h2 style="color: #ff6b35; font-size: 22px; margin-top: 30px;">
  💥 أنماط الفشل
</h2>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0;">
  <div style="background: #ffebee; padding: 20px; border-radius: 10px; border: 2px solid #ef5350;">
    <h4 style="color: #c62828; margin: 0 0 15px 0;">فشل القص (Breakouts)</h4>
    <ul style="color: #444; margin: 0; padding-right: 15px; font-size: 14px;">
      <li>يحدث عندما يكون وزن الطين منخفضاً جداً</li>
      <li>يُشكل أقساماً مستطيلة من الحفرة</li>
      <li>قطع صخرية (Cavings) تصعد للسطح</li>
      <li>موجهة موازية لاتجاه σh</li>
      <li>قد تؤدي لانحشار الأنابيب، سجلات ضعيفة</li>
    </ul>
  </div>
  
  <div style="background: #e3f2fd; padding: 20px; border-radius: 10px; border: 2px solid #42a5f5;">
    <h4 style="color: #1565c0; margin: 0 0 15px 0;">فشل الشد (Fracturing)</h4>
    <ul style="color: #444; margin: 0; padding-right: 15px; font-size: 14px;">
      <li>يحدث عندما يكون وزن الطين مرتفعاً جداً</li>
      <li>يُنشئ كسوراً في التكوين</li>
      <li>ينتج عنه فقدان الدورة</li>
      <li>موجهة عمودياً على σh</li>
      <li>قد تؤدي لمشاكل التحكم بالبئر</li>
    </ul>
  </div>
</div>

<h2 style="color: #ff6b35; font-size: 22px; margin-top: 30px;">
  📈 العوامل المؤثرة على نافذة وزن الطين
</h2>

<ul style="color: #444; font-size: 16px; line-height: 2.2;">
  <li><strong>زاوية الحفرة</strong>: الآبار المائلة لها نوافذ أضيق</li>
  <li><strong>اتجاه الحفرة</strong>: الحفر موازياً لـ σH قد يوسع النافذة</li>
  <li><strong>العمق</strong>: النافذة تضيق عادةً مع العمق</li>
  <li><strong>قوة الصخور</strong>: الصخور الأقوى تسمح بنوافذ أوسع</li>
  <li><strong>ضغط المسام</strong>: الضغوط غير الطبيعية تضيق النافذة</li>
  <li><strong>الاستنزاف</strong>: المكامن المنتجة لها إجهادات منخفضة</li>
</ul>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a7b 100%); color: white; padding: 20px; border-radius: 12px; margin-top: 30px;">
  <h3 style="margin: 0 0 15px 0; color: #ffd700;">📝 النقاط الرئيسية - اليوم الثاني</h3>
  <ul style="margin: 0; padding-right: 20px; line-height: 2.2;">
    <li>ثلاثة إجهادات رئيسية: σv (رأسي)، σH و σh (أفقية)</li>
    <li>الحفر يُنشئ تركيز إجهاد عند جدار البئر</li>
    <li>نافذة وزن الطين الآمنة محدودة بضغطي الانهيار والتكسير</li>
    <li>نمطان للفشل: القص (breakouts) والشد (fracturing)</li>
  </ul>
</div>

</div>
        `
      },
      quiz: {
        question: {
          en: 'What happens when mud weight is BELOW the collapse pressure?',
          ar: 'ماذا يحدث عندما يكون وزن الطين أقل من ضغط الانهيار؟'
        },
        options: {
          en: [
            'Lost circulation occurs',
            'Shear failure (breakouts) develop',
            'The hole is perfectly stable',
            'Tensile fractures form'
          ],
          ar: [
            'يحدث فقدان الدورة',
            'يتطور فشل القص (انهيارات)',
            'الحفرة مستقرة تماماً',
            'تتكون كسور شدية'
          ]
        },
        correctAnswer: 1
      }
    },
    // Day 3: Shale Instability and Chemical Effects
    {
      day: 3,
      title: {
        en: 'Shale Instability and Chemical Effects',
        ar: 'عدم استقرار الطفلة والتأثيرات الكيميائية'
      },
      content: {
        en: `
<div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; line-height: 1.8;">

<h1 style="color: #1e3a5f; font-size: 28px; border-bottom: 3px solid #ff6b35; padding-bottom: 10px; margin-bottom: 25px;">
  Day 3: Shale Instability and Chemical Effects
</h1>

<div style="background: linear-gradient(135deg, #e8f4f8 0%, #d1e8ff 100%); padding: 20px; border-radius: 12px; margin-bottom: 25px; border-left: 5px solid #1e3a5f;">
  <h3 style="color: #1e3a5f; margin: 0 0 10px 0;">🎯 Learning Objectives</h3>
  <ul style="color: #2d5a7b; margin: 0; padding-left: 20px;">
    <li>Understand why shales are the most problematic formations</li>
    <li>Learn about clay mineralogy and swelling mechanisms</li>
    <li>Recognize different types of shale instability</li>
    <li>Master drilling fluid solutions for shale stability</li>
  </ul>
</div>

<h2 style="color: #ff6b35; font-size: 22px; margin-top: 30px;">
  🧱 Why Shales Are Problematic
</h2>

<p style="color: #444; font-size: 16px; text-align: justify;">
  <strong>Shales</strong> account for approximately <strong>75% of all drilled formations</strong> and cause more than <strong>90% of wellbore instability problems</strong>. This is because shales are:
</p>

<ul style="color: #444; font-size: 16px; line-height: 2;">
  <li><strong>Fine-grained</strong>: Very low permeability, slow pressure equilibration</li>
  <li><strong>Clay-rich</strong>: Contains reactive clay minerals that interact with water</li>
  <li><strong>Laminated</strong>: Planes of weakness that can slide or separate</li>
  <li><strong>Variable</strong>: Properties change significantly between formations</li>
</ul>

<h2 style="color: #ff6b35; font-size: 22px; margin-top: 30px;">
  🔬 Clay Mineralogy
</h2>

<p style="color: #444; font-size: 16px; text-align: justify;">
  The key to understanding shale behavior lies in its <strong>clay mineral content</strong>. Different clays have vastly different reactivity:
</p>

<div style="display: grid; gap: 15px; margin: 20px 0;">
  <div style="background: #ffebee; padding: 20px; border-radius: 10px; border-left: 4px solid #f44336;">
    <h4 style="color: #c62828; margin: 0 0 10px 0;">Smectite (Montmorillonite) - Most Reactive</h4>
    <p style="color: #444; margin: 0; font-size: 15px;">
      Can swell up to <strong>20 times</strong> its original volume. Water molecules enter between clay layers. Common in bentonite and many troublesome shales. Requires inhibition!
    </p>
  </div>
  
  <div style="background: #fff3e0; padding: 20px; border-radius: 10px; border-left: 4px solid #ff9800;">
    <h4 style="color: #e65100; margin: 0 0 10px 0;">Illite - Moderately Reactive</h4>
    <p style="color: #444; margin: 0; font-size: 15px;">
      Limited swelling (up to 2x). More stable than smectite but can still cause problems. Common in many sedimentary basins.
    </p>
  </div>
  
  <div style="background: #e8f5e9; padding: 20px; border-radius: 10px; border-left: 4px solid #4caf50;">
    <h4 style="color: #2e7d32; margin: 0 0 10px 0;">Kaolinite - Least Reactive</h4>
    <p style="color: #444; margin: 0; font-size: 15px;">
      Minimal swelling, relatively stable. Often found in sandstones and weathered formations. Generally not a stability concern.
    </p>
  </div>
  
  <div style="background: #e3f2fd; padding: 20px; border-radius: 10px; border-left: 4px solid #2196f3;">
    <h4 style="color: #1565c0; margin: 0 0 10px 0;">Chlorite - Variable</h4>
    <p style="color: #444; margin: 0; font-size: 15px;">
      Low swelling but can be mechanically weak. Sometimes associated with fault zones.
    </p>
  </div>
</div>

<h2 style="color: #ff6b35; font-size: 22px; margin-top: 30px;">
  💧 Mechanisms of Shale Instability
</h2>

<table style="width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 15px;">
  <thead>
    <tr style="background: #1e3a5f; color: white;">
      <th style="padding: 12px; text-align: left;">Mechanism</th>
      <th style="padding: 12px; text-align: left;">Description</th>
      <th style="padding: 12px; text-align: left;">Solution</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f9f9f9;">
      <td style="padding: 10px; border: 1px solid #ddd;"><strong>Osmotic Swelling</strong></td>
      <td style="padding: 10px; border: 1px solid #ddd;">Water moves into shale due to salinity difference</td>
      <td style="padding: 10px; border: 1px solid #ddd;">Match mud water activity to shale</td>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid #ddd;"><strong>Crystalline Swelling</strong></td>
      <td style="padding: 10px; border: 1px solid #ddd;">Water layers between clay sheets</td>
      <td style="padding: 10px; border: 1px solid #ddd;">Use inhibitors (KCl, glycols)</td>
    </tr>
    <tr style="background: #f9f9f9;">
      <td style="padding: 10px; border: 1px solid #ddd;"><strong>Pressure Transmission</strong></td>
      <td style="padding: 10px; border: 1px solid #ddd;">Mud pressure invades near-wellbore</td>
      <td style="padding: 10px; border: 1px solid #ddd;">Seal the wellbore surface</td>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid #ddd;"><strong>Capillary Effects</strong></td>
      <td style="padding: 10px; border: 1px solid #ddd;">Fluid invasion through micro-fractures</td>
      <td style="padding: 10px; border: 1px solid #ddd;">Plugging agents, OBM</td>
    </tr>
  </tbody>
</table>

<h2 style="color: #ff6b35; font-size: 22px; margin-top: 30px;">
  🛠️ Drilling Fluid Solutions
</h2>

<div style="background: #e8f5e9; padding: 20px; border-radius: 10px; margin: 20px 0;">
  <h4 style="color: #2e7d32; margin: 0 0 15px 0;">🏆 Best Practice Hierarchy</h4>
  <ol style="color: #444; margin: 0; line-height: 2.2;">
    <li><strong>Oil-Based Mud (OBM)</strong>: Best inhibition, no water contact with shale</li>
    <li><strong>Synthetic-Based Mud (SBM)</strong>: Environmental alternative to OBM</li>
    <li><strong>High-Performance WBM</strong>: With potassium, glycols, amines</li>
    <li><strong>Salt-Saturated WBM</strong>: For salt sections and some shales</li>
    <li><strong>Conventional WBM</strong>: Only for non-reactive formations</li>
  </ol>
</div>

<h3 style="color: #1e3a5f; font-size: 18px; margin-top: 25px;">
  Key Inhibitors and Their Functions
</h3>

<ul style="color: #444; font-size: 16px; line-height: 2;">
  <li><strong>KCl (Potassium Chloride)</strong>: K+ exchanges with Na+ in clays, reduces swelling</li>
  <li><strong>Glycols (PHPA)</strong>: Cloud-point glycols coat shale surfaces</li>
  <li><strong>Polyamines</strong>: Positively charged, adsorb onto negative clay surfaces</li>
  <li><strong>Silicates</strong>: Form protective film, seal micro-fractures</li>
  <li><strong>Asphaltic Materials</strong>: Physical sealing of shale pores</li>
</ul>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a7b 100%); color: white; padding: 20px; border-radius: 12px; margin-top: 30px;">
  <h3 style="margin: 0 0 15px 0; color: #ffd700;">📝 Key Takeaways - Day 3</h3>
  <ul style="margin: 0; padding-left: 20px; line-height: 2;">
    <li>Shales cause 90%+ of wellbore instability problems</li>
    <li>Smectite clays are most reactive (swell up to 20x)</li>
    <li>Water interaction is the main cause of chemical instability</li>
    <li>OBM provides best protection; inhibited WBM is the alternative</li>
  </ul>
</div>

</div>
        `,
        ar: `
<div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; line-height: 2; direction: rtl;">

<h1 style="color: #1e3a5f; font-size: 28px; border-bottom: 3px solid #ff6b35; padding-bottom: 10px; margin-bottom: 25px;">
  اليوم الثالث: عدم استقرار الطفلة والتأثيرات الكيميائية
</h1>

<div style="background: linear-gradient(135deg, #e8f4f8 0%, #d1e8ff 100%); padding: 20px; border-radius: 12px; margin-bottom: 25px; border-right: 5px solid #1e3a5f;">
  <h3 style="color: #1e3a5f; margin: 0 0 10px 0;">🎯 أهداف التعلم</h3>
  <ul style="color: #2d5a7b; margin: 0; padding-right: 20px;">
    <li>فهم لماذا الطفلة هي أكثر التكوينات إشكالية</li>
    <li>التعرف على معدنية الطين وآليات الانتفاخ</li>
    <li>التعرف على أنواع عدم استقرار الطفلة المختلفة</li>
    <li>إتقان حلول سائل الحفر لاستقرار الطفلة</li>
  </ul>
</div>

<h2 style="color: #ff6b35; font-size: 22px; margin-top: 30px;">
  🧱 لماذا الطفلة (Shale) مشكلة؟
</h2>

<p style="color: #444; font-size: 16px; text-align: justify;">
  تشكل <strong>الطفلة</strong> ما يقارب <strong>75% من جميع التكوينات المحفورة</strong> وتسبب أكثر من <strong>90% من مشاكل عدم استقرار جدار البئر</strong>. هذا لأن الطفلة:
</p>

<ul style="color: #444; font-size: 16px; line-height: 2.2;">
  <li><strong>دقيقة الحبيبات</strong>: نفاذية منخفضة جداً، توازن ضغط بطيء</li>
  <li><strong>غنية بالطين</strong>: تحتوي معادن طينية تفاعلية تتفاعل مع الماء</li>
  <li><strong>رقائقية</strong>: مستويات ضعف يمكنها الانزلاق أو الانفصال</li>
  <li><strong>متغيرة</strong>: الخصائص تتغير بشكل كبير بين التكوينات</li>
</ul>

<h2 style="color: #ff6b35; font-size: 22px; margin-top: 30px;">
  🔬 معدنية الطين (Clay Mineralogy)
</h2>

<p style="color: #444; font-size: 16px; text-align: justify;">
  مفتاح فهم سلوك الطفلة يكمن في <strong>محتواها من معادن الطين</strong>. للأطيان المختلفة تفاعلية مختلفة تماماً:
</p>

<div style="display: grid; gap: 15px; margin: 20px 0;">
  <div style="background: #ffebee; padding: 20px; border-radius: 10px; border-right: 4px solid #f44336;">
    <h4 style="color: #c62828; margin: 0 0 10px 0;">السمكتيت (Montmorillonite) - الأكثر تفاعلية</h4>
    <p style="color: #444; margin: 0; font-size: 15px;">
      يمكن أن ينتفخ حتى <strong>20 ضعفاً</strong> من حجمه الأصلي. جزيئات الماء تدخل بين طبقات الطين. شائع في البنتونيت والعديد من الطفلات المشكلة. يتطلب تثبيطاً!
    </p>
  </div>
  
  <div style="background: #fff3e0; padding: 20px; border-radius: 10px; border-right: 4px solid #ff9800;">
    <h4 style="color: #e65100; margin: 0 0 10px 0;">الإيلايت (Illite) - تفاعلية متوسطة</h4>
    <p style="color: #444; margin: 0; font-size: 15px;">
      انتفاخ محدود (حتى 2 ضعف). أكثر استقراراً من السمكتيت لكن يمكن أن يسبب مشاكل. شائع في العديد من الأحواض الرسوبية.
    </p>
  </div>
  
  <div style="background: #e8f5e9; padding: 20px; border-radius: 10px; border-right: 4px solid #4caf50;">
    <h4 style="color: #2e7d32; margin: 0 0 10px 0;">الكاؤلينيت (Kaolinite) - الأقل تفاعلية</h4>
    <p style="color: #444; margin: 0; font-size: 15px;">
      انتفاخ أدنى، مستقر نسبياً. يوجد غالباً في الحجر الرملي والتكوينات المتجوية. عموماً ليس مصدر قلق للاستقرار.
    </p>
  </div>
</div>

<h2 style="color: #ff6b35; font-size: 22px; margin-top: 30px;">
  💧 آليات عدم استقرار الطفلة
</h2>

<table style="width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 15px;">
  <thead>
    <tr style="background: #1e3a5f; color: white;">
      <th style="padding: 12px; text-align: right;">الآلية</th>
      <th style="padding: 12px; text-align: right;">الوصف</th>
      <th style="padding: 12px; text-align: right;">الحل</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f9f9f9;">
      <td style="padding: 10px; border: 1px solid #ddd;"><strong>الانتفاخ الأسموزي</strong></td>
      <td style="padding: 10px; border: 1px solid #ddd;">الماء يتحرك للطفلة بسبب اختلاف الملوحة</td>
      <td style="padding: 10px; border: 1px solid #ddd;">مطابقة نشاط ماء الطين للطفلة</td>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid #ddd;"><strong>الانتفاخ البلوري</strong></td>
      <td style="padding: 10px; border: 1px solid #ddd;">طبقات ماء بين صفائح الطين</td>
      <td style="padding: 10px; border: 1px solid #ddd;">استخدام مثبطات (KCl، glycols)</td>
    </tr>
    <tr style="background: #f9f9f9;">
      <td style="padding: 10px; border: 1px solid #ddd;"><strong>انتقال الضغط</strong></td>
      <td style="padding: 10px; border: 1px solid #ddd;">ضغط الطين يغزو قرب جدار البئر</td>
      <td style="padding: 10px; border: 1px solid #ddd;">إغلاق سطح جدار البئر</td>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid #ddd;"><strong>التأثيرات الشعرية</strong></td>
      <td style="padding: 10px; border: 1px solid #ddd;">غزو السائل عبر الكسور الدقيقة</td>
      <td style="padding: 10px; border: 1px solid #ddd;">عوامل سد، OBM</td>
    </tr>
  </tbody>
</table>

<h2 style="color: #ff6b35; font-size: 22px; margin-top: 30px;">
  🛠️ حلول سائل الحفر
</h2>

<div style="background: #e8f5e9; padding: 20px; border-radius: 10px; margin: 20px 0;">
  <h4 style="color: #2e7d32; margin: 0 0 15px 0;">🏆 تسلسل أفضل الممارسات</h4>
  <ol style="color: #444; margin: 0; line-height: 2.2;">
    <li><strong>طين أساس زيتي (OBM)</strong>: أفضل تثبيط، لا تلامس مع الماء</li>
    <li><strong>طين أساس تركيبي (SBM)</strong>: بديل بيئي لـ OBM</li>
    <li><strong>WBM عالي الأداء</strong>: مع البوتاسيوم، الجلايكولات، الأمينات</li>
    <li><strong>WBM مشبع بالملح</strong>: لأقسام الملح وبعض الطفلات</li>
    <li><strong>WBM تقليدي</strong>: فقط للتكوينات غير التفاعلية</li>
  </ol>
</div>

<h3 style="color: #1e3a5f; font-size: 18px; margin-top: 25px;">
  المثبطات الرئيسية ووظائفها
</h3>

<ul style="color: #444; font-size: 16px; line-height: 2.2;">
  <li><strong>KCl (كلوريد البوتاسيوم)</strong>: K+ يتبادل مع Na+ في الأطيان، يقلل الانتفاخ</li>
  <li><strong>الجلايكولات (PHPA)</strong>: جلايكولات نقطة الغيمة تغطي أسطح الطفلة</li>
  <li><strong>البولي أمينات</strong>: موجبة الشحنة، تُمتز على أسطح الطين السالبة</li>
  <li><strong>السيليكات</strong>: تشكل غشاء واقي، تسد الكسور الدقيقة</li>
  <li><strong>المواد الأسفلتية</strong>: سد فيزيائي لمسام الطفلة</li>
</ul>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a7b 100%); color: white; padding: 20px; border-radius: 12px; margin-top: 30px;">
  <h3 style="margin: 0 0 15px 0; color: #ffd700;">📝 النقاط الرئيسية - اليوم الثالث</h3>
  <ul style="margin: 0; padding-right: 20px; line-height: 2.2;">
    <li>الطفلة تسبب أكثر من 90% من مشاكل عدم استقرار جدار البئر</li>
    <li>أطيان السمكتيت الأكثر تفاعلية (تنتفخ حتى 20 ضعف)</li>
    <li>تفاعل الماء السبب الرئيسي لعدم الاستقرار الكيميائي</li>
    <li>OBM يوفر أفضل حماية؛ WBM المثبط هو البديل</li>
  </ul>
</div>

</div>
        `
      },
      quiz: {
        question: {
          en: 'Which clay mineral shows the HIGHEST swelling potential?',
          ar: 'أي معدن طيني يُظهر أعلى إمكانية للانتفاخ؟'
        },
        options: {
          en: [
            'Kaolinite',
            'Illite',
            'Smectite (Montmorillonite)',
            'Chlorite'
          ],
          ar: [
            'الكاؤلينيت',
            'الإيلايت',
            'السمكتيت (المونتموريلونيت)',
            'الكلوريت'
          ]
        },
        correctAnswer: 2
      }
    },
    // Day 4: Practical Stability Management
    {
      day: 4,
      title: {
        en: 'Practical Stability Management',
        ar: 'الإدارة العملية للاستقرار'
      },
      content: {
        en: `
<div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; line-height: 1.8;">

<h1 style="color: #1e3a5f; font-size: 28px; border-bottom: 3px solid #ff6b35; padding-bottom: 10px; margin-bottom: 25px;">
  Day 4: Practical Stability Management
</h1>

<div style="background: linear-gradient(135deg, #e8f4f8 0%, #d1e8ff 100%); padding: 20px; border-radius: 12px; margin-bottom: 25px; border-left: 5px solid #1e3a5f;">
  <h3 style="color: #1e3a5f; margin: 0 0 10px 0;">🎯 Learning Objectives</h3>
  <ul style="color: #2d5a7b; margin: 0; padding-left: 20px;">
    <li>Develop a comprehensive stability management plan</li>
    <li>Learn operational best practices for hole stability</li>
    <li>Understand real-time monitoring and response strategies</li>
    <li>Master decision-making under instability conditions</li>
  </ul>
</div>

<h2 style="color: #ff6b35; font-size: 22px; margin-top: 30px;">
  📋 Pre-Drilling Stability Analysis
</h2>

<p style="color: #444; font-size: 16px; text-align: justify;">
  A comprehensive <strong>geomechanical study</strong> should be conducted before drilling to predict potential stability issues and design appropriate mitigation strategies.
</p>

<div style="background: #f5f5f5; padding: 20px; border-radius: 10px; margin: 20px 0;">
  <h4 style="color: #1e3a5f; margin: 0 0 15px 0;">📊 Key Data Requirements</h4>
  <ul style="color: #444; margin: 0; line-height: 2;">
    <li><strong>Offset Well Data</strong>: Previous drilling problems, hole conditions</li>
    <li><strong>Log Data</strong>: Sonic, density, resistivity, caliper</li>
    <li><strong>Core Data</strong>: Rock strength tests, clay mineralogy (XRD)</li>
    <li><strong>Seismic Data</strong>: Structural complexity, fault locations</li>
    <li><strong>Pore Pressure</strong>: Measured or predicted from logs</li>
    <li><strong>Stress Orientations</strong>: From borehole breakouts, LOT/XLOT</li>
  </ul>
</div>

<h2 style="color: #ff6b35; font-size: 22px; margin-top: 30px;">
  🛠️ Operational Best Practices
</h2>

<div style="display: grid; gap: 15px; margin: 20px 0;">
  <div style="background: #e8f5e9; padding: 20px; border-radius: 10px; border-left: 4px solid #4caf50;">
    <h4 style="color: #2e7d32; margin: 0 0 10px 0;">1. Mud Weight Management</h4>
    <ul style="color: #444; margin: 0; font-size: 15px; line-height: 1.8;">
      <li>Stay within the Safe Mud Weight Window</li>
      <li>Increase MW gradually when entering unstable sections</li>
      <li>Avoid sudden MW changes that stress the formation</li>
      <li>Monitor ECD closely - it represents actual downhole pressure</li>
    </ul>
  </div>
  
  <div style="background: #e3f2fd; padding: 20px; border-radius: 10px; border-left: 4px solid #2196f3;">
    <h4 style="color: #1565c0; margin: 0 0 10px 0;">2. Minimize Open Hole Time</h4>
    <ul style="color: #444; margin: 0; font-size: 15px; line-height: 1.8;">
      <li>Shales deteriorate with time - plan for quick casing runs</li>
      <li>Consider intermediate casing points through problem zones</li>
      <li>Keep trip times to minimum in reactive formations</li>
      <li>Run casing as soon as practical after reaching TD</li>
    </ul>
  </div>
  
  <div style="background: #fff3e0; padding: 20px; border-radius: 10px; border-left: 4px solid #ff9800;">
    <h4 style="color: #e65100; margin: 0 0 10px 0;">3. Hole Conditioning</h4>
    <ul style="color: #444; margin: 0; font-size: 15px; line-height: 1.8;">
      <li>Regular wiper trips through problem sections</li>
      <li>Circulate bottoms up before trips</li>
      <li>Maintain good hole cleaning at all times</li>
      <li>Backream out of tight spots - don't force the string</li>
    </ul>
  </div>
  
  <div style="background: #fce4ec; padding: 20px; border-radius: 10px; border-left: 4px solid #e91e63;">
    <h4 style="color: #c2185b; margin: 0 0 10px 0;">4. Drilling Parameters</h4>
    <ul style="color: #444; margin: 0; font-size: 15px; line-height: 1.8;">
      <li>Control ROP in shales - fast penetration = poor hole cleaning</li>
      <li>Maintain smooth drilling - avoid sudden changes</li>
      <li>Optimize flow rate for ECD and hole cleaning balance</li>
      <li>Use torque/drag trends for early warning</li>
    </ul>
  </div>
</div>

<h2 style="color: #ff6b35; font-size: 22px; margin-top: 30px;">
  📡 Real-Time Monitoring
</h2>

<table style="width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 15px;">
  <thead>
    <tr style="background: #1e3a5f; color: white;">
      <th style="padding: 12px; text-align: left;">Parameter</th>
      <th style="padding: 12px; text-align: left;">Indication</th>
      <th style="padding: 12px; text-align: left;">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f9f9f9;">
      <td style="padding: 10px; border: 1px solid #ddd;"><strong>Torque Trend ↑</strong></td>
      <td style="padding: 10px; border: 1px solid #ddd;">Hole narrowing, swelling</td>
      <td style="padding: 10px; border: 1px solid #ddd;">Wiper trip, check MW</td>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid #ddd;"><strong>Drag Trend ↑</strong></td>
      <td style="padding: 10px; border: 1px solid #ddd;">Tight spots, ledges</td>
      <td style="padding: 10px; border: 1px solid #ddd;">Ream, lubricate mud</td>
    </tr>
    <tr style="background: #f9f9f9;">
      <td style="padding: 10px; border: 1px solid #ddd;"><strong>Cavings at Shakers</strong></td>
      <td style="padding: 10px; border: 1px solid #ddd;">Mechanical failure</td>
      <td style="padding: 10px; border: 1px solid #ddd;">Increase MW, evaluate</td>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid #ddd;"><strong>Fill on Connections</strong></td>
      <td style="padding: 10px; border: 1px solid #ddd;">Continuous sloughing</td>
      <td style="padding: 10px; border: 1px solid #ddd;">Increase MW, circulate</td>
    </tr>
    <tr style="background: #f9f9f9;">
      <td style="padding: 10px; border: 1px solid #ddd;"><strong>Lost Returns</strong></td>
      <td style="padding: 10px; border: 1px solid #ddd;">Fractures induced</td>
      <td style="padding: 10px; border: 1px solid #ddd;">Reduce MW, LCM pill</td>
    </tr>
  </tbody>
</table>

<h2 style="color: #ff6b35; font-size: 22px; margin-top: 30px;">
  ⚡ Decision Tree for Instability Response
</h2>

<div style="background: #fff8e1; padding: 20px; border-radius: 10px; margin: 20px 0; border: 2px solid #ffc107;">
  <ol style="color: #444; margin: 0; line-height: 2.2;">
    <li><strong>Identify the symptom</strong>: Cavings, tight hole, stuck pipe?</li>
    <li><strong>Diagnose the cause</strong>: Mechanical or chemical instability?</li>
    <li><strong>Assess severity</strong>: Can we continue or must we act now?</li>
    <li><strong>Select intervention</strong>: MW change, inhibitor, wiper trip, casing?</li>
    <li><strong>Execute and monitor</strong>: Track results, adjust as needed</li>
    <li><strong>Document and learn</strong>: Update the well plan for future reference</li>
  </ol>
</div>

<h2 style="color: #ff6b35; font-size: 22px; margin-top: 30px;">
  🚨 Emergency Response
</h2>

<p style="color: #444; font-size: 16px; text-align: justify;">
  When severe instability threatens operations:
</p>

<ul style="color: #444; font-size: 16px; line-height: 2;">
  <li><strong>Stuck Pipe Risk</strong>: Work pipe continuously, consider spotting pills</li>
  <li><strong>Massive Cavings</strong>: Pump sweeps, increase MW, consider casing early</li>
  <li><strong>Hole Collapse</strong>: May need to sidetrack if hole cannot be stabilized</li>
  <li><strong>Lost Circulation with Kick</strong>: Dual gradient response needed</li>
</ul>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a7b 100%); color: white; padding: 20px; border-radius: 12px; margin-top: 30px;">
  <h3 style="margin: 0 0 15px 0; color: #ffd700;">📝 Key Takeaways - Day 4</h3>
  <ul style="margin: 0; padding-left: 20px; line-height: 2;">
    <li>Pre-drilling geomechanical analysis is essential</li>
    <li>Stay within the Safe Mud Weight Window</li>
    <li>Minimize open hole exposure time in reactive formations</li>
    <li>Monitor torque, drag, and cavings as early warning indicators</li>
    <li>Have contingency plans ready for escalating instability</li>
  </ul>
</div>

</div>
        `,
        ar: `
<div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; line-height: 2; direction: rtl;">

<h1 style="color: #1e3a5f; font-size: 28px; border-bottom: 3px solid #ff6b35; padding-bottom: 10px; margin-bottom: 25px;">
  اليوم الرابع: الإدارة العملية للاستقرار
</h1>

<div style="background: linear-gradient(135deg, #e8f4f8 0%, #d1e8ff 100%); padding: 20px; border-radius: 12px; margin-bottom: 25px; border-right: 5px solid #1e3a5f;">
  <h3 style="color: #1e3a5f; margin: 0 0 10px 0;">🎯 أهداف التعلم</h3>
  <ul style="color: #2d5a7b; margin: 0; padding-right: 20px;">
    <li>تطوير خطة شاملة لإدارة الاستقرار</li>
    <li>تعلم أفضل الممارسات التشغيلية لاستقرار الحفرة</li>
    <li>فهم المراقبة الآنية واستراتيجيات الاستجابة</li>
    <li>إتقان اتخاذ القرار في ظروف عدم الاستقرار</li>
  </ul>
</div>

<h2 style="color: #ff6b35; font-size: 22px; margin-top: 30px;">
  📋 تحليل الاستقرار قبل الحفر
</h2>

<p style="color: #444; font-size: 16px; text-align: justify;">
  يجب إجراء <strong>دراسة جيوميكانيكية</strong> شاملة قبل الحفر للتنبؤ بمشاكل الاستقرار المحتملة وتصميم استراتيجيات التخفيف المناسبة.
</p>

<div style="background: #f5f5f5; padding: 20px; border-radius: 10px; margin: 20px 0;">
  <h4 style="color: #1e3a5f; margin: 0 0 15px 0;">📊 متطلبات البيانات الرئيسية</h4>
  <ul style="color: #444; margin: 0; line-height: 2.2;">
    <li><strong>بيانات الآبار المرجعية</strong>: مشاكل الحفر السابقة، ظروف الحفرة</li>
    <li><strong>بيانات السجلات</strong>: الصوتية، الكثافة، المقاومية، الكاليبر</li>
    <li><strong>بيانات العينات اللبابية</strong>: اختبارات قوة الصخور، معدنية الطين (XRD)</li>
    <li><strong>البيانات الزلزالية</strong>: التعقيد الهيكلي، مواقع الفوالق</li>
    <li><strong>ضغط المسام</strong>: مقاس أو متنبأ به من السجلات</li>
    <li><strong>اتجاهات الإجهاد</strong>: من breakouts جدار البئر، LOT/XLOT</li>
  </ul>
</div>

<h2 style="color: #ff6b35; font-size: 22px; margin-top: 30px;">
  🛠️ أفضل الممارسات التشغيلية
</h2>

<div style="display: grid; gap: 15px; margin: 20px 0;">
  <div style="background: #e8f5e9; padding: 20px; border-radius: 10px; border-right: 4px solid #4caf50;">
    <h4 style="color: #2e7d32; margin: 0 0 10px 0;">1. إدارة وزن الطين</h4>
    <ul style="color: #444; margin: 0; font-size: 15px; line-height: 2;">
      <li>ابقَ ضمن نافذة وزن الطين الآمنة</li>
      <li>زِد MW تدريجياً عند الدخول في أقسام غير مستقرة</li>
      <li>تجنب التغييرات المفاجئة في MW التي تُجهد التكوين</li>
      <li>راقب ECD عن كثب - يمثل الضغط الفعلي في القاع</li>
    </ul>
  </div>
  
  <div style="background: #e3f2fd; padding: 20px; border-radius: 10px; border-right: 4px solid #2196f3;">
    <h4 style="color: #1565c0; margin: 0 0 10px 0;">2. تقليل وقت الحفرة المفتوحة</h4>
    <ul style="color: #444; margin: 0; font-size: 15px; line-height: 2;">
      <li>الطفلة تتدهور مع الوقت - خطط لإنزال بطانة سريع</li>
      <li>فكر في نقاط بطانة وسيطة عبر المناطق المشكلة</li>
      <li>حافظ على أوقات الرحلات لأدنى حد في التكوينات التفاعلية</li>
      <li>أنزل البطانة في أقرب وقت عملي بعد الوصول لـ TD</li>
    </ul>
  </div>
  
  <div style="background: #fff3e0; padding: 20px; border-radius: 10px; border-right: 4px solid #ff9800;">
    <h4 style="color: #e65100; margin: 0 0 10px 0;">3. تكييف الحفرة</h4>
    <ul style="color: #444; margin: 0; font-size: 15px; line-height: 2;">
      <li>رحلات تنظيف منتظمة عبر الأقسام المشكلة</li>
      <li>دوران القاع للأعلى قبل الرحلات</li>
      <li>حافظ على تنظيف جيد للحفرة في جميع الأوقات</li>
      <li>وسّع للخلف من النقاط الضيقة - لا تفرض السلسلة</li>
    </ul>
  </div>
  
  <div style="background: #fce4ec; padding: 20px; border-radius: 10px; border-right: 4px solid #e91e63;">
    <h4 style="color: #c2185b; margin: 0 0 10px 0;">4. معلمات الحفر</h4>
    <ul style="color: #444; margin: 0; font-size: 15px; line-height: 2;">
      <li>تحكم في ROP في الطفلة - اختراق سريع = تنظيف ضعيف</li>
      <li>حافظ على حفر سلس - تجنب التغييرات المفاجئة</li>
      <li>حسّن معدل التدفق لتوازن ECD وتنظيف الحفرة</li>
      <li>استخدم اتجاهات العزم/السحب للإنذار المبكر</li>
    </ul>
  </div>
</div>

<h2 style="color: #ff6b35; font-size: 22px; margin-top: 30px;">
  📡 المراقبة الآنية
</h2>

<table style="width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 15px;">
  <thead>
    <tr style="background: #1e3a5f; color: white;">
      <th style="padding: 12px; text-align: right;">المعلمة</th>
      <th style="padding: 12px; text-align: right;">الدلالة</th>
      <th style="padding: 12px; text-align: right;">الإجراء</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f9f9f9;">
      <td style="padding: 10px; border: 1px solid #ddd;"><strong>اتجاه العزم ↑</strong></td>
      <td style="padding: 10px; border: 1px solid #ddd;">تضييق الحفرة، انتفاخ</td>
      <td style="padding: 10px; border: 1px solid #ddd;">رحلة تنظيف، فحص MW</td>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid #ddd;"><strong>اتجاه السحب ↑</strong></td>
      <td style="padding: 10px; border: 1px solid #ddd;">نقاط ضيقة، حافات</td>
      <td style="padding: 10px; border: 1px solid #ddd;">توسيع، تزليق الطين</td>
    </tr>
    <tr style="background: #f9f9f9;">
      <td style="padding: 10px; border: 1px solid #ddd;"><strong>فتات على الشيكرات</strong></td>
      <td style="padding: 10px; border: 1px solid #ddd;">فشل ميكانيكي</td>
      <td style="padding: 10px; border: 1px solid #ddd;">زيادة MW، تقييم</td>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid #ddd;"><strong>ترسب عند الوصلات</strong></td>
      <td style="padding: 10px; border: 1px solid #ddd;">تساقط مستمر</td>
      <td style="padding: 10px; border: 1px solid #ddd;">زيادة MW، دوران</td>
    </tr>
    <tr style="background: #f9f9f9;">
      <td style="padding: 10px; border: 1px solid #ddd;"><strong>فقدان العوائد</strong></td>
      <td style="padding: 10px; border: 1px solid #ddd;">كسور مُحدثة</td>
      <td style="padding: 10px; border: 1px solid #ddd;">تقليل MW، حبة LCM</td>
    </tr>
  </tbody>
</table>

<h2 style="color: #ff6b35; font-size: 22px; margin-top: 30px;">
  ⚡ شجرة القرار للاستجابة لعدم الاستقرار
</h2>

<div style="background: #fff8e1; padding: 20px; border-radius: 10px; margin: 20px 0; border: 2px solid #ffc107;">
  <ol style="color: #444; margin: 0; line-height: 2.4;">
    <li><strong>حدد العرض</strong>: فتات، حفرة ضيقة، أنبوب منحشر؟</li>
    <li><strong>شخّص السبب</strong>: عدم استقرار ميكانيكي أم كيميائي؟</li>
    <li><strong>قيّم الخطورة</strong>: هل يمكننا الاستمرار أم يجب أن نتصرف الآن؟</li>
    <li><strong>اختر التدخل</strong>: تغيير MW، مثبط، رحلة تنظيف، بطانة؟</li>
    <li><strong>نفذ وراقب</strong>: تتبع النتائج، عدّل حسب الحاجة</li>
    <li><strong>وثّق وتعلم</strong>: حدّث خطة البئر للمرجع المستقبلي</li>
  </ol>
</div>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a7b 100%); color: white; padding: 20px; border-radius: 12px; margin-top: 30px;">
  <h3 style="margin: 0 0 15px 0; color: #ffd700;">📝 النقاط الرئيسية - اليوم الرابع</h3>
  <ul style="margin: 0; padding-right: 20px; line-height: 2.2;">
    <li>التحليل الجيوميكانيكي قبل الحفر ضروري</li>
    <li>ابقَ ضمن نافذة وزن الطين الآمنة</li>
    <li>قلل وقت تعرض الحفرة المفتوحة في التكوينات التفاعلية</li>
    <li>راقب العزم والسحب والفتات كمؤشرات إنذار مبكر</li>
    <li>جهّز خطط طوارئ لعدم الاستقرار المتصاعد</li>
  </ul>
</div>

</div>
        `
      },
      quiz: {
        question: {
          en: 'What is the FIRST action when detecting increasing torque trends in shale sections?',
          ar: 'ما هو الإجراء الأول عند اكتشاف زيادة اتجاهات العزم في أقسام الطفلة؟'
        },
        options: {
          en: [
            'Immediately increase mud weight by 1 ppg',
            'Perform a wiper trip and check mud weight',
            'Set casing immediately',
            'Stop drilling and wait for instructions'
          ],
          ar: [
            'زيادة وزن الطين فوراً بمقدار 1 ppg',
            'إجراء رحلة تنظيف وفحص وزن الطين',
            'إنزال البطانة فوراً',
            'إيقاف الحفر وانتظار التعليمات'
          ]
        },
        correctAnswer: 1
      }
    },
    // Day 5: Weekly Review
    {
      day: 5,
      title: {
        en: 'Weekly Review: Wellbore Stability',
        ar: 'المراجعة الأسبوعية: استقرار جدار البئر'
      },
      content: {
        en: `
<div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; line-height: 1.8;">

<h1 style="color: #1e3a5f; font-size: 28px; border-bottom: 3px solid #ff6b35; padding-bottom: 10px; margin-bottom: 25px;">
  Day 5: Weekly Review - Wellbore Stability
</h1>

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 25px; border-radius: 12px; margin-bottom: 30px;">
  <h2 style="margin: 0 0 15px 0;">📚 Week Summary</h2>
  <p style="margin: 0; opacity: 0.95;">
    This week we covered the comprehensive topic of wellbore stability - from understanding stress mechanics to practical field management strategies.
  </p>
</div>

<h2 style="color: #ff6b35; font-size: 22px; margin-top: 30px;">📋 Day-by-Day Recap</h2>

<div style="display: grid; gap: 20px; margin: 20px 0;">
  <div style="background: #e3f2fd; padding: 20px; border-radius: 10px; border-left: 4px solid #1976d2;">
    <h4 style="color: #1565c0; margin: 0 0 10px 0;">Day 1: Introduction to Wellbore Stability</h4>
    <ul style="color: #444; margin: 0; padding-left: 20px;">
      <li>Definition: Ability of the hole to maintain integrity</li>
      <li>Three types: Mechanical, Chemical, Time-dependent</li>
      <li>Field indicators: Cavings, overpull, high torque/drag</li>
      <li>Economic impact: $500-800M annually in the industry</li>
    </ul>
  </div>

  <div style="background: #e8f5e9; padding: 20px; border-radius: 10px; border-left: 4px solid #388e3c;">
    <h4 style="color: #2e7d32; margin: 0 0 10px 0;">Day 2: Stress Analysis and Rock Mechanics</h4>
    <ul style="color: #444; margin: 0; padding-left: 20px;">
      <li>Three principal stresses: σv, σH, σh</li>
      <li>Stress concentration around the wellbore (2-3x higher)</li>
      <li>Safe Mud Weight Window: Between collapse and fracture pressures</li>
      <li>Failure modes: Shear (breakouts) and Tensile (fracturing)</li>
    </ul>
  </div>

  <div style="background: #fff3e0; padding: 20px; border-radius: 10px; border-left: 4px solid #f57c00;">
    <h4 style="color: #e65100; margin: 0 0 10px 0;">Day 3: Shale Instability and Chemical Effects</h4>
    <ul style="color: #444; margin: 0; padding-left: 20px;">
      <li>Shales cause 90%+ of instability problems</li>
      <li>Clay types: Smectite (most reactive), Illite, Kaolinite</li>
      <li>Mechanisms: Osmotic swelling, crystalline swelling, pressure transmission</li>
      <li>Solutions: OBM best, then SBM, then inhibited WBM</li>
    </ul>
  </div>

  <div style="background: #fce4ec; padding: 20px; border-radius: 10px; border-left: 4px solid #c2185b;">
    <h4 style="color: #ad1457; margin: 0 0 10px 0;">Day 4: Practical Stability Management</h4>
    <ul style="color: #444; margin: 0; padding-left: 20px;">
      <li>Pre-drilling geomechanical analysis is essential</li>
      <li>Best practices: MW management, minimize open hole time</li>
      <li>Monitor: Torque, drag, cavings as early warnings</li>
      <li>Decision tree for instability response</li>
    </ul>
  </div>
</div>

<h2 style="color: #ff6b35; font-size: 22px; margin-top: 30px;">🔑 Critical Concepts to Remember</h2>

<div style="background: #f5f5f5; padding: 20px; border-radius: 10px; margin: 20px 0;">
  <table style="width: 100%; border-collapse: collapse;">
    <tr>
      <td style="padding: 10px; border-bottom: 1px solid #ddd; width: 40%;"><strong>Mud Weight Too Low</strong></td>
      <td style="padding: 10px; border-bottom: 1px solid #ddd;">→ Shear Failure (Breakouts)</td>
    </tr>
    <tr>
      <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Mud Weight Too High</strong></td>
      <td style="padding: 10px; border-bottom: 1px solid #ddd;">→ Tensile Failure (Fracturing/Lost Circulation)</td>
    </tr>
    <tr>
      <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Water Contact with Shale</strong></td>
      <td style="padding: 10px; border-bottom: 1px solid #ddd;">→ Chemical Instability (Swelling)</td>
    </tr>
    <tr>
      <td style="padding: 10px;"><strong>Extended Open Hole Time</strong></td>
      <td style="padding: 10px;">→ Time-Dependent Deterioration</td>
    </tr>
  </table>
</div>

<h2 style="color: #ff6b35; font-size: 22px; margin-top: 30px;">✅ Self-Assessment Questions</h2>

<ol style="color: #444; font-size: 16px; line-height: 2.5;">
  <li>Can you explain the difference between mechanical and chemical instability?</li>
  <li>What are the three principal stresses and how do they affect wellbore stability?</li>
  <li>Why is smectite clay more problematic than kaolinite?</li>
  <li>What is the Safe Mud Weight Window and what bounds it?</li>
  <li>What are the key real-time indicators of developing instability?</li>
  <li>When would you choose OBM over WBM for shale stability?</li>
</ol>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a7b 100%); color: white; padding: 20px; border-radius: 12px; margin-top: 30px;">
  <h3 style="margin: 0 0 15px 0; color: #ffd700;">🎯 Ready for the Quiz?</h3>
  <p style="margin: 0; line-height: 1.8;">
    Tomorrow you'll take a 10-question quiz covering all the concepts from this week. Review the key points above and make sure you understand the relationships between stress, rock mechanics, fluid chemistry, and operational practices.
  </p>
</div>

</div>
        `,
        ar: `
<div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; line-height: 2; direction: rtl;">

<h1 style="color: #1e3a5f; font-size: 28px; border-bottom: 3px solid #ff6b35; padding-bottom: 10px; margin-bottom: 25px;">
  اليوم الخامس: المراجعة الأسبوعية - استقرار جدار البئر
</h1>

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 25px; border-radius: 12px; margin-bottom: 30px;">
  <h2 style="margin: 0 0 15px 0;">📚 ملخص الأسبوع</h2>
  <p style="margin: 0; opacity: 0.95;">
    هذا الأسبوع غطينا موضوع استقرار جدار البئر الشامل - من فهم ميكانيكا الإجهاد إلى استراتيجيات الإدارة الحقلية العملية.
  </p>
</div>

<h2 style="color: #ff6b35; font-size: 22px; margin-top: 30px;">📋 ملخص يوم بيوم</h2>

<div style="display: grid; gap: 20px; margin: 20px 0;">
  <div style="background: #e3f2fd; padding: 20px; border-radius: 10px; border-right: 4px solid #1976d2;">
    <h4 style="color: #1565c0; margin: 0 0 10px 0;">اليوم 1: مقدمة في استقرار جدار البئر</h4>
    <ul style="color: #444; margin: 0; padding-right: 20px;">
      <li>التعريف: قدرة الحفرة على الحفاظ على سلامتها</li>
      <li>ثلاثة أنواع: ميكانيكي، كيميائي، معتمد على الزمن</li>
      <li>المؤشرات الحقلية: الفتات، السحب الزائد، العزم/السحب العالي</li>
      <li>التأثير الاقتصادي: 500-800 مليون دولار سنوياً في الصناعة</li>
    </ul>
  </div>

  <div style="background: #e8f5e9; padding: 20px; border-radius: 10px; border-right: 4px solid #388e3c;">
    <h4 style="color: #2e7d32; margin: 0 0 10px 0;">اليوم 2: تحليل الإجهادات وميكانيكا الصخور</h4>
    <ul style="color: #444; margin: 0; padding-right: 20px;">
      <li>ثلاثة إجهادات رئيسية: σv، σH، σh</li>
      <li>تركيز الإجهاد حول جدار البئر (2-3 أضعاف)</li>
      <li>نافذة وزن الطين الآمنة: بين ضغطي الانهيار والتكسير</li>
      <li>أنماط الفشل: القص (breakouts) والشد (fracturing)</li>
    </ul>
  </div>

  <div style="background: #fff3e0; padding: 20px; border-radius: 10px; border-right: 4px solid #f57c00;">
    <h4 style="color: #e65100; margin: 0 0 10px 0;">اليوم 3: عدم استقرار الطفلة والتأثيرات الكيميائية</h4>
    <ul style="color: #444; margin: 0; padding-right: 20px;">
      <li>الطفلة تسبب أكثر من 90% من مشاكل عدم الاستقرار</li>
      <li>أنواع الطين: السمكتيت (الأكثر تفاعلية)، الإيلايت، الكاؤلينيت</li>
      <li>الآليات: الانتفاخ الأسموزي، البلوري، انتقال الضغط</li>
      <li>الحلول: OBM الأفضل، ثم SBM، ثم WBM المثبط</li>
    </ul>
  </div>

  <div style="background: #fce4ec; padding: 20px; border-radius: 10px; border-right: 4px solid #c2185b;">
    <h4 style="color: #ad1457; margin: 0 0 10px 0;">اليوم 4: الإدارة العملية للاستقرار</h4>
    <ul style="color: #444; margin: 0; padding-right: 20px;">
      <li>التحليل الجيوميكانيكي قبل الحفر ضروري</li>
      <li>أفضل الممارسات: إدارة MW، تقليل وقت الحفرة المفتوحة</li>
      <li>المراقبة: العزم، السحب، الفتات كإنذارات مبكرة</li>
      <li>شجرة قرار للاستجابة لعدم الاستقرار</li>
    </ul>
  </div>
</div>

<h2 style="color: #ff6b35; font-size: 22px; margin-top: 30px;">🔑 المفاهيم الحرجة للتذكر</h2>

<div style="background: #f5f5f5; padding: 20px; border-radius: 10px; margin: 20px 0;">
  <table style="width: 100%; border-collapse: collapse;">
    <tr>
      <td style="padding: 10px; border-bottom: 1px solid #ddd; width: 40%;"><strong>وزن الطين منخفض جداً</strong></td>
      <td style="padding: 10px; border-bottom: 1px solid #ddd;">← فشل القص (Breakouts)</td>
    </tr>
    <tr>
      <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>وزن الطين مرتفع جداً</strong></td>
      <td style="padding: 10px; border-bottom: 1px solid #ddd;">← فشل الشد (التكسير/فقدان الدورة)</td>
    </tr>
    <tr>
      <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>تلامس الماء مع الطفلة</strong></td>
      <td style="padding: 10px; border-bottom: 1px solid #ddd;">← عدم استقرار كيميائي (انتفاخ)</td>
    </tr>
    <tr>
      <td style="padding: 10px;"><strong>وقت حفرة مفتوحة ممتد</strong></td>
      <td style="padding: 10px;">← تدهور معتمد على الزمن</td>
    </tr>
  </table>
</div>

<h2 style="color: #ff6b35; font-size: 22px; margin-top: 30px;">✅ أسئلة التقييم الذاتي</h2>

<ol style="color: #444; font-size: 16px; line-height: 2.8;">
  <li>هل يمكنك شرح الفرق بين عدم الاستقرار الميكانيكي والكيميائي؟</li>
  <li>ما هي الإجهادات الرئيسية الثلاثة وكيف تؤثر على استقرار جدار البئر؟</li>
  <li>لماذا طين السمكتيت أكثر إشكالية من الكاؤلينيت؟</li>
  <li>ما هي نافذة وزن الطين الآمنة وما الذي يحدها؟</li>
  <li>ما هي المؤشرات الآنية الرئيسية لعدم الاستقرار النامي؟</li>
  <li>متى ستختار OBM على WBM لاستقرار الطفلة؟</li>
</ol>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a7b 100%); color: white; padding: 20px; border-radius: 12px; margin-top: 30px;">
  <h3 style="margin: 0 0 15px 0; color: #ffd700;">🎯 مستعد للاختبار؟</h3>
  <p style="margin: 0; line-height: 2;">
    غداً ستأخذ اختباراً من 10 أسئلة يغطي جميع المفاهيم من هذا الأسبوع. راجع النقاط الرئيسية أعلاه وتأكد من فهمك للعلاقات بين الإجهاد، ميكانيكا الصخور، كيمياء السوائل، والممارسات التشغيلية.
  </p>
</div>

</div>
        `
      },
      quiz: {
        question: {
          en: 'Which clay type can swell up to 20 times its original volume?',
          ar: 'أي نوع من الطين يمكنه الانتفاخ حتى 20 ضعف حجمه الأصلي؟'
        },
        options: {
          en: ['Kaolinite', 'Illite', 'Smectite', 'Chlorite'],
          ar: ['الكاؤلينيت', 'الإيلايت', 'السمكتيت', 'الكلوريت']
        },
        correctAnswer: 2
      }
    },
    // Day 6: Quiz
    {
      day: 6,
      title: {
        en: 'Weekly Quiz: Wellbore Stability',
        ar: 'الاختبار الأسبوعي: استقرار جدار البئر'
      },
      content: {
        en: '<div style="text-align: center; padding: 40px;"><h2>📝 Weekly Quiz</h2><p>Test your knowledge of Wellbore Stability concepts!</p></div>',
        ar: '<div style="text-align: center; padding: 40px; direction: rtl;"><h2>📝 الاختبار الأسبوعي</h2><p>اختبر معلوماتك عن مفاهيم استقرار جدار البئر!</p></div>'
      },
      quiz: {
        question: { en: '', ar: '' },
        options: { en: [], ar: [] },
        correctAnswer: 0
      },
      weeklyQuiz: [
        {
          question: {
            en: 'What percentage of drilled formations are shales?',
            ar: 'ما نسبة التكوينات المحفورة التي هي طفلة؟'
          },
          options: {
            en: ['25%', '50%', '75%', '90%'],
            ar: ['25%', '50%', '75%', '90%']
          },
          correctAnswer: 2
        },
        {
          question: {
            en: 'Which stress component is created by the weight of overlying rock?',
            ar: 'أي مكون من الإجهاد يُنشأ بوزن الصخور العلوية؟'
          },
          options: {
            en: ['σH - Maximum horizontal stress', 'σh - Minimum horizontal stress', 'σv - Vertical stress', 'Pore pressure'],
            ar: ['σH - الإجهاد الأفقي الأقصى', 'σh - الإجهاد الأفقي الأدنى', 'σv - الإجهاد الرأسي', 'ضغط المسام']
          },
          correctAnswer: 2
        },
        {
          question: {
            en: 'What happens when mud weight exceeds the fracture pressure?',
            ar: 'ماذا يحدث عندما يتجاوز وزن الطين ضغط التكسير؟'
          },
          options: {
            en: ['Breakouts occur', 'Lost circulation', 'Perfect stability', 'Cavings increase'],
            ar: ['تحدث الانهيارات', 'فقدان الدورة', 'استقرار تام', 'زيادة الفتات']
          },
          correctAnswer: 1
        },
        {
          question: {
            en: 'Which drilling fluid type provides the BEST shale inhibition?',
            ar: 'أي نوع من سوائل الحفر يوفر أفضل تثبيط للطفلة؟'
          },
          options: {
            en: ['Conventional WBM', 'Salt-saturated WBM', 'Oil-Based Mud (OBM)', 'Fresh water'],
            ar: ['WBM تقليدي', 'WBM مشبع بالملح', 'طين أساس زيتي (OBM)', 'ماء عذب']
          },
          correctAnswer: 2
        },
        {
          question: {
            en: 'What is the main function of KCl in drilling fluids?',
            ar: 'ما هي الوظيفة الرئيسية لـ KCl في سوائل الحفر؟'
          },
          options: {
            en: ['Increase viscosity', 'Reduce clay swelling', 'Add weight', 'Improve lubricity'],
            ar: ['زيادة اللزوجة', 'تقليل انتفاخ الطين', 'إضافة الوزن', 'تحسين التزليق']
          },
          correctAnswer: 1
        },
        {
          question: {
            en: 'What does increasing overpull on trips typically indicate?',
            ar: 'على ماذا يدل عادةً زيادة السحب الزائد عند الرحلات؟'
          },
          options: {
            en: ['Good hole condition', 'Tight spots or swelling shales', 'Low mud weight', 'Lost circulation'],
            ar: ['حالة حفرة جيدة', 'نقاط ضيقة أو انتفاخ الطفلة', 'وزن طين منخفض', 'فقدان دورة']
          },
          correctAnswer: 1
        },
        {
          question: {
            en: 'Stress concentration at the wellbore wall can be how many times higher than far-field stress?',
            ar: 'تركيز الإجهاد عند جدار البئر يمكن أن يكون كم مرة أعلى من الإجهاد البعيد؟'
          },
          options: {
            en: ['Same as far-field', '1.5 times', '2-3 times', '10 times'],
            ar: ['نفس البعيد', '1.5 مرة', '2-3 مرات', '10 مرات']
          },
          correctAnswer: 2
        },
        {
          question: {
            en: 'Which type of wellbore instability is caused by water absorption in clays?',
            ar: 'أي نوع من عدم استقرار جدار البئر يسببه امتصاص الماء في الأطيان؟'
          },
          options: {
            en: ['Mechanical instability', 'Chemical instability', 'Time-dependent instability', 'Thermal instability'],
            ar: ['عدم استقرار ميكانيكي', 'عدم استقرار كيميائي', 'عدم استقرار معتمد على الزمن', 'عدم استقرار حراري']
          },
          correctAnswer: 1
        },
        {
          question: {
            en: 'What is the best practice regarding open hole exposure time in reactive shales?',
            ar: 'ما هي أفضل الممارسات بخصوص وقت تعرض الحفرة المفتوحة في الطفلات التفاعلية؟'
          },
          options: {
            en: ['Maximize it for better evaluation', 'Minimize it - run casing quickly', 'It does not matter', 'Wait for natural consolidation'],
            ar: ['زيادته لتقييم أفضل', 'تقليله - إنزال البطانة بسرعة', 'لا يهم', 'انتظار التماسك الطبيعي']
          },
          correctAnswer: 1
        },
        {
          question: {
            en: 'What is the annual estimated cost of wellbore instability to the drilling industry?',
            ar: 'ما هي التكلفة السنوية المقدرة لعدم استقرار جدار البئر على صناعة الحفر؟'
          },
          options: {
            en: ['$50-100 million', '$100-200 million', '$500-800 million', '$2-3 billion'],
            ar: ['50-100 مليون دولار', '100-200 مليون دولار', '500-800 مليون دولار', '2-3 مليار دولار']
          },
          correctAnswer: 2
        }
      ]
    },
    // Day 7: Project
    {
      day: 7,
      title: {
        en: 'Practical Project: Wellbore Stability Analysis',
        ar: 'المشروع العملي: تحليل استقرار جدار البئر'
      },
      content: {
        en: `
<div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; line-height: 1.8;">

<h1 style="color: #1e3a5f; font-size: 28px; border-bottom: 3px solid #ff6b35; padding-bottom: 10px; margin-bottom: 25px;">
  Day 7: Practical Project
</h1>

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 25px; border-radius: 12px; margin-bottom: 30px;">
  <h2 style="margin: 0 0 15px 0;">🎯 Project: Wellbore Stability Analysis</h2>
  <p style="margin: 0; opacity: 0.95;">
    Apply your knowledge by analyzing a case study and developing a stability management plan.
  </p>
</div>

<h2 style="color: #ff6b35; font-size: 22px; margin-top: 30px;">📋 Case Study Scenario</h2>

<div style="background: #f5f5f5; padding: 20px; border-radius: 10px; margin: 20px 0;">
  <p style="color: #444; margin: 0 0 15px 0;">
    <strong>Well Information:</strong>
  </p>
  <ul style="color: #444; margin: 0; line-height: 2;">
    <li><strong>Location:</strong> Offshore development well</li>
    <li><strong>Target Depth:</strong> 12,000 ft MD</li>
    <li><strong>Formation:</strong> 3,000 ft of reactive shale (70% smectite) between 8,000-11,000 ft</li>
    <li><strong>Pore Pressure:</strong> 10.5 ppg equivalent</li>
    <li><strong>Fracture Gradient:</strong> 14.0 ppg at top of shale</li>
    <li><strong>Offset Well Issues:</strong> Severe cavings, 2 stuck pipe events, 15 days NPT</li>
  </ul>
</div>

<h2 style="color: #ff6b35; font-size: 22px; margin-top: 30px;">📝 Project Requirements</h2>

<p style="color: #444; font-size: 16px;">
  Develop a comprehensive wellbore stability management plan that includes:
</p>

<div style="display: grid; gap: 15px; margin: 20px 0;">
  <div style="background: #e3f2fd; padding: 15px; border-radius: 8px;">
    <strong>1. Risk Assessment</strong>
    <ul style="margin: 10px 0 0 0; font-size: 14px;">
      <li>Identify specific stability risks for this well</li>
      <li>Classify as mechanical, chemical, or both</li>
      <li>Estimate probability and impact</li>
    </ul>
  </div>
  
  <div style="background: #e8f5e9; padding: 15px; border-radius: 8px;">
    <strong>2. Drilling Fluid Recommendation</strong>
    <ul style="margin: 10px 0 0 0; font-size: 14px;">
      <li>Select appropriate fluid type with justification</li>
      <li>Recommend mud weight strategy</li>
      <li>Suggest key additives and their functions</li>
    </ul>
  </div>
  
  <div style="background: #fff3e0; padding: 15px; border-radius: 8px;">
    <strong>3. Operational Guidelines</strong>
    <ul style="margin: 10px 0 0 0; font-size: 14px;">
      <li>Recommended drilling parameters (ROP, flow rate)</li>
      <li>Trip procedures through the shale section</li>
      <li>Hole conditioning frequency</li>
    </ul>
  </div>
  
  <div style="background: #fce4ec; padding: 15px; border-radius: 8px;">
    <strong>4. Monitoring Plan</strong>
    <ul style="margin: 10px 0 0 0; font-size: 14px;">
      <li>Key parameters to monitor</li>
      <li>Trigger values for action</li>
      <li>Escalation procedures</li>
    </ul>
  </div>
  
  <div style="background: #f3e5f5; padding: 15px; border-radius: 8px;">
    <strong>5. Contingency Plan</strong>
    <ul style="margin: 10px 0 0 0; font-size: 14px;">
      <li>Response to developing instability</li>
      <li>Stuck pipe prevention measures</li>
      <li>Emergency casing point considerations</li>
    </ul>
  </div>
</div>

<h2 style="color: #ff6b35; font-size: 22px; margin-top: 30px;">📤 Submission Guidelines</h2>

<ul style="color: #444; font-size: 16px; line-height: 2;">
  <li>Write a 500-800 word stability management plan</li>
  <li>Structure your response with clear sections</li>
  <li>Justify your recommendations with technical reasoning</li>
  <li>Consider both prevention and mitigation strategies</li>
</ul>

<div style="background: #fff8e1; padding: 20px; border-radius: 10px; margin: 30px 0; border: 2px solid #ffc107;">
  <h4 style="color: #f57c00; margin: 0 0 10px 0;">💡 Tips for Success</h4>
  <ul style="color: #444; margin: 0; line-height: 2;">
    <li>Reference the 70% smectite content when selecting fluid type</li>
    <li>Calculate approximate mud weight window</li>
    <li>Learn from offset well problems</li>
    <li>Consider time-dependent effects in your planning</li>
  </ul>
</div>

</div>
        `,
        ar: `
<div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; line-height: 2; direction: rtl;">

<h1 style="color: #1e3a5f; font-size: 28px; border-bottom: 3px solid #ff6b35; padding-bottom: 10px; margin-bottom: 25px;">
  اليوم السابع: المشروع العملي
</h1>

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 25px; border-radius: 12px; margin-bottom: 30px;">
  <h2 style="margin: 0 0 15px 0;">🎯 المشروع: تحليل استقرار جدار البئر</h2>
  <p style="margin: 0; opacity: 0.95;">
    طبّق معرفتك من خلال تحليل دراسة حالة وتطوير خطة إدارة استقرار.
  </p>
</div>

<h2 style="color: #ff6b35; font-size: 22px; margin-top: 30px;">📋 سيناريو دراسة الحالة</h2>

<div style="background: #f5f5f5; padding: 20px; border-radius: 10px; margin: 20px 0;">
  <p style="color: #444; margin: 0 0 15px 0;">
    <strong>معلومات البئر:</strong>
  </p>
  <ul style="color: #444; margin: 0; line-height: 2.2;">
    <li><strong>الموقع:</strong> بئر تطوير بحري</li>
    <li><strong>العمق المستهدف:</strong> 12,000 قدم MD</li>
    <li><strong>التكوين:</strong> 3,000 قدم من طفلة تفاعلية (70% سمكتيت) بين 8,000-11,000 قدم</li>
    <li><strong>ضغط المسام:</strong> 10.5 ppg مكافئ</li>
    <li><strong>gradient التكسير:</strong> 14.0 ppg عند قمة الطفلة</li>
    <li><strong>مشاكل البئر المرجعي:</strong> فتات شديد، حادثتي انحشار أنابيب، 15 يوم NPT</li>
  </ul>
</div>

<h2 style="color: #ff6b35; font-size: 22px; margin-top: 30px;">📝 متطلبات المشروع</h2>

<p style="color: #444; font-size: 16px;">
  طوّر خطة إدارة استقرار جدار بئر شاملة تتضمن:
</p>

<div style="display: grid; gap: 15px; margin: 20px 0;">
  <div style="background: #e3f2fd; padding: 15px; border-radius: 8px;">
    <strong>1. تقييم المخاطر</strong>
    <ul style="margin: 10px 0 0 0; font-size: 14px;">
      <li>تحديد مخاطر الاستقرار المحددة لهذا البئر</li>
      <li>تصنيفها كميكانيكية أو كيميائية أو كليهما</li>
      <li>تقدير الاحتمالية والتأثير</li>
    </ul>
  </div>
  
  <div style="background: #e8f5e9; padding: 15px; border-radius: 8px;">
    <strong>2. توصية سائل الحفر</strong>
    <ul style="margin: 10px 0 0 0; font-size: 14px;">
      <li>اختيار نوع السائل المناسب مع التبرير</li>
      <li>التوصية باستراتيجية وزن الطين</li>
      <li>اقتراح المضافات الرئيسية ووظائفها</li>
    </ul>
  </div>
  
  <div style="background: #fff3e0; padding: 15px; border-radius: 8px;">
    <strong>3. الإرشادات التشغيلية</strong>
    <ul style="margin: 10px 0 0 0; font-size: 14px;">
      <li>معلمات الحفر الموصى بها (ROP، معدل التدفق)</li>
      <li>إجراءات الرحلات عبر قسم الطفلة</li>
      <li>تكرار تكييف الحفرة</li>
    </ul>
  </div>
  
  <div style="background: #fce4ec; padding: 15px; border-radius: 8px;">
    <strong>4. خطة المراقبة</strong>
    <ul style="margin: 10px 0 0 0; font-size: 14px;">
      <li>المعلمات الرئيسية للمراقبة</li>
      <li>القيم المحفزة للعمل</li>
      <li>إجراءات التصعيد</li>
    </ul>
  </div>
  
  <div style="background: #f3e5f5; padding: 15px; border-radius: 8px;">
    <strong>5. خطة الطوارئ</strong>
    <ul style="margin: 10px 0 0 0; font-size: 14px;">
      <li>الاستجابة لعدم الاستقرار النامي</li>
      <li>تدابير منع انحشار الأنابيب</li>
      <li>اعتبارات نقطة بطانة الطوارئ</li>
    </ul>
  </div>
</div>

<h2 style="color: #ff6b35; font-size: 22px; margin-top: 30px;">📤 إرشادات التسليم</h2>

<ul style="color: #444; font-size: 16px; line-height: 2.2;">
  <li>اكتب خطة إدارة استقرار من 500-800 كلمة</li>
  <li>هيكل إجابتك بأقسام واضحة</li>
  <li>برر توصياتك بتفكير تقني</li>
  <li>فكر في استراتيجيات الوقاية والتخفيف</li>
</ul>

<div style="background: #fff8e1; padding: 20px; border-radius: 10px; margin: 30px 0; border: 2px solid #ffc107;">
  <h4 style="color: #f57c00; margin: 0 0 10px 0;">💡 نصائح للنجاح</h4>
  <ul style="color: #444; margin: 0; line-height: 2.2;">
    <li>أشر إلى محتوى السمكتيت 70% عند اختيار نوع السائل</li>
    <li>احسب نافذة وزن الطين التقريبية</li>
    <li>تعلم من مشاكل البئر المرجعي</li>
    <li>فكر في التأثيرات المعتمدة على الزمن في تخطيطك</li>
  </ul>
</div>

</div>
        `
      },
      quiz: {
        question: { en: '', ar: '' },
        options: { en: [], ar: [] },
        correctAnswer: 0
      }
    }
  ]
};
