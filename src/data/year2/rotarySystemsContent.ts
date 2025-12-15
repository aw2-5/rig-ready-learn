import { WeeklyLesson } from '../weeklyContent';

export const rotarySystemsLesson: WeeklyLesson = {
  lessonId: 'rotary-systems',
  days: [
    {
      day: 1,
      type: 'learning',
      content: {
        ar: {
          title: 'أنظمة الدوران - مقدمة وأنواع الأنظمة',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 مقدمة في أنظمة الدوران (Rotary Systems)</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
نظام الدوران هو أحد الأنظمة الرئيسية الخمسة في جهاز الحفر، ووظيفته الأساسية هي توفير الحركة الدورانية اللازمة لتدوير سلسلة الحفر ورأس الحفر (Drill Bit) لتفتيت الصخور. بدون نظام الدوران، لا يمكن إتمام عملية الحفر الدوراني التي تُعد الطريقة الأكثر استخداماً في صناعة النفط والغاز.
</p>

<div style="background: linear-gradient(135deg, #1e3a5f15, #f9731620); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #f97316;">
<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">📌 وظائف نظام الدوران</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>تدوير سلسلة الحفر ورأس الحفر بالسرعة والعزم المطلوبين</li>
<li>نقل الطاقة من السطح إلى قاع البئر</li>
<li>التحكم في سرعة الدوران (RPM) حسب نوع التكوين الصخري</li>
<li>توفير العزم (Torque) الكافي لتفتيت الصخور</li>
<li>السماح بمرور سائل الحفر عبر سلسلة الحفر</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 أنواع أنظمة الدوران</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
تطورت أنظمة الدوران عبر السنين، وتوجد ثلاثة أنواع رئيسية مستخدمة في صناعة الحفر:
</p>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">1️⃣ نظام الطاولة الدوارة (Rotary Table System)</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
هو النظام التقليدي الذي استُخدم لعقود طويلة. يتكون من طاولة دوارة مثبتة في أرضية الجهاز، تدور لنقل الحركة عبر Kelly إلى سلسلة الحفر.
</p>

<div style="background: #1e3a5f10; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<strong style="color: #1e3a5f;">مميزات نظام الطاولة الدوارة:</strong>
<ul style="list-style-type: circle; padding-right: 1.5rem; margin-top: 0.5rem; line-height: 1.8;">
<li>تكلفة أولية أقل</li>
<li>صيانة بسيطة نسبياً</li>
<li>موثوقية عالية</li>
<li>مناسب للآبار الضحلة والمتوسطة</li>
</ul>
<strong style="color: #dc2626; display: block; margin-top: 1rem;">عيوب النظام:</strong>
<ul style="list-style-type: circle; padding-right: 1.5rem; margin-top: 0.5rem; line-height: 1.8;">
<li>يتطلب إيقاف الدوران عند كل وصلة</li>
<li>طول الحفر محدود بطول Kelly</li>
<li>خطر أعلى على الطاقم أثناء الربط</li>
</ul>
</div>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">2️⃣ نظام القيادة العلوية (Top Drive System)</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
هو النظام الحديث الأكثر انتشاراً حالياً. يتكون من محرك كهربائي أو هيدروليكي معلق من البكرة المتنقلة، يدور سلسلة الحفر مباشرة من الأعلى.
</p>

<div style="background: #10b98115; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<strong style="color: #10b981;">مميزات نظام القيادة العلوية:</strong>
<ul style="list-style-type: circle; padding-right: 1.5rem; margin-top: 0.5rem; line-height: 1.8;">
<li>إمكانية الحفر بوصلات 3 أنابيب (90 قدم) بدلاً من وصلة واحدة</li>
<li>الدوران المستمر أثناء الرحلات</li>
<li>سلامة أعلى للطاقم</li>
<li>كفاءة أعلى وتقليل زمن الرحلة</li>
<li>إمكانية معالجة المشاكل أثناء الدوران</li>
</ul>
</div>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">3️⃣ محرك قاع البئر (Downhole Motor / Mud Motor)</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
محرك يعمل بطاقة ضخ سائل الحفر، يُركب أسفل سلسلة الحفر مباشرة فوق رأس الحفر. يُستخدم بشكل أساسي في الحفر الموجه والأفقي.
</p>

<div style="background: #1e3a5f10; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<strong style="color: #1e3a5f;">استخدامات محرك قاع البئر:</strong>
<ul style="list-style-type: circle; padding-right: 1.5rem; margin-top: 0.5rem; line-height: 1.8;">
<li>الحفر الموجه (Directional Drilling)</li>
<li>الحفر الأفقي</li>
<li>زيادة RPM في القاع مع الحفاظ على سلسلة الحفر ثابتة</li>
<li>الحفر في التكوينات الصعبة</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 مقارنة بين الأنظمة</h2>

<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; overflow-x: auto;">
<table style="width: 100%; border-collapse: collapse; text-align: center; min-width: 400px;">
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 0.75rem; border: 1px solid #ccc;">المعيار</th>
<th style="padding: 0.75rem; border: 1px solid #ccc;">الطاولة الدوارة</th>
<th style="padding: 0.75rem; border: 1px solid #ccc;">القيادة العلوية</th>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ccc;">التكلفة الأولية</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">منخفضة</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">عالية</td>
</tr>
<tr style="background: #f5f5f5;">
<td style="padding: 0.75rem; border: 1px solid #ccc;">الكفاءة</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">متوسطة</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">عالية</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ccc;">السلامة</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">مخاطر أعلى</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">أكثر أماناً</td>
</tr>
<tr style="background: #f5f5f5;">
<td style="padding: 0.75rem; border: 1px solid #ccc;">طول الوصلة</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">~30 قدم</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">~90 قدم</td>
</tr>
</table>
</div>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>نظام الدوران مسؤول عن تدوير رأس الحفر لتفتيت الصخور</li>
<li>ثلاثة أنواع رئيسية: الطاولة الدوارة، القيادة العلوية، ومحرك قاع البئر</li>
<li>القيادة العلوية هي الأكثر انتشاراً حالياً لمميزاتها العديدة</li>
<li>كل نظام له استخداماته المناسبة حسب نوع البئر والعملية</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'الطاولة الدوارة (Rotary Table)', definition: 'طاولة دائرية تدور لنقل الحركة إلى سلسلة الحفر عبر Kelly' },
            { term: 'القيادة العلوية (Top Drive)', definition: 'محرك معلق من البكرة المتنقلة يدور سلسلة الحفر مباشرة من الأعلى' },
            { term: 'محرك قاع البئر (Mud Motor)', definition: 'محرك يعمل بضغط سائل الحفر يُركب أسفل سلسلة الحفر' },
            { term: 'العزم (Torque)', definition: 'قوة الدوران اللازمة لتفتيت الصخور، تُقاس بـ ft-lb أو N.m' },
          ],
          practiceQuestion: {
            question: 'أي نظام دوران يسمح بالحفر بوصلات 90 قدم بدلاً من 30 قدم؟',
            options: ['الطاولة الدوارة', 'القيادة العلوية', 'محرك قاع البئر', 'Kelly'],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Rotary Systems - Introduction and System Types',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Introduction to Rotary Systems</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
The rotary system is one of the five main systems in a drilling rig, and its primary function is to provide the rotational motion needed to rotate the drill string and drill bit to break up rocks. Without the rotary system, rotary drilling—the most common method in the oil and gas industry—cannot be performed.
</p>

<div style="background: linear-gradient(135deg, #1e3a5f15, #f9731620); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #f97316;">
<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">📌 Functions of the Rotary System</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>Rotate drill string and bit at required speed and torque</li>
<li>Transfer energy from surface to bottom of well</li>
<li>Control rotation speed (RPM) based on formation type</li>
<li>Provide sufficient torque to break up rocks</li>
<li>Allow drilling fluid passage through drill string</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Types of Rotary Systems</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
Rotary systems have evolved over the years, and three main types are used in the drilling industry:
</p>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">1️⃣ Rotary Table System</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
This is the traditional system used for decades. It consists of a rotary table mounted on the rig floor that rotates to transfer motion through the Kelly to the drill string.
</p>

<div style="background: #1e3a5f10; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<strong style="color: #1e3a5f;">Advantages of Rotary Table System:</strong>
<ul style="list-style-type: circle; padding-left: 1.5rem; margin-top: 0.5rem; line-height: 1.8;">
<li>Lower initial cost</li>
<li>Relatively simple maintenance</li>
<li>High reliability</li>
<li>Suitable for shallow and medium wells</li>
</ul>
<strong style="color: #dc2626; display: block; margin-top: 1rem;">Disadvantages:</strong>
<ul style="list-style-type: circle; padding-left: 1.5rem; margin-top: 0.5rem; line-height: 1.8;">
<li>Requires stopping rotation at each connection</li>
<li>Drilling length limited by Kelly length</li>
<li>Higher risk to crew during connections</li>
</ul>
</div>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">2️⃣ Top Drive System</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
This is the modern system most commonly used today. It consists of an electric or hydraulic motor suspended from the traveling block that directly rotates the drill string from above.
</p>

<div style="background: #10b98115; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<strong style="color: #10b981;">Advantages of Top Drive System:</strong>
<ul style="list-style-type: circle; padding-left: 1.5rem; margin-top: 0.5rem; line-height: 1.8;">
<li>Can drill with 3-joint stands (90 ft) instead of singles</li>
<li>Continuous rotation during trips</li>
<li>Higher crew safety</li>
<li>Higher efficiency and reduced trip time</li>
<li>Ability to handle problems while rotating</li>
</ul>
</div>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">3️⃣ Downhole Motor (Mud Motor)</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
A motor powered by drilling fluid pressure, installed below the drill string directly above the bit. Primarily used in directional and horizontal drilling.
</p>

<div style="background: #1e3a5f10; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<strong style="color: #1e3a5f;">Downhole Motor Applications:</strong>
<ul style="list-style-type: circle; padding-left: 1.5rem; margin-top: 0.5rem; line-height: 1.8;">
<li>Directional Drilling</li>
<li>Horizontal drilling</li>
<li>Increasing downhole RPM while keeping drill string stationary</li>
<li>Drilling in difficult formations</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 System Comparison</h2>

<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; overflow-x: auto;">
<table style="width: 100%; border-collapse: collapse; text-align: center; min-width: 400px;">
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 0.75rem; border: 1px solid #ccc;">Criteria</th>
<th style="padding: 0.75rem; border: 1px solid #ccc;">Rotary Table</th>
<th style="padding: 0.75rem; border: 1px solid #ccc;">Top Drive</th>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ccc;">Initial Cost</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">Low</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">High</td>
</tr>
<tr style="background: #f5f5f5;">
<td style="padding: 0.75rem; border: 1px solid #ccc;">Efficiency</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">Medium</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">High</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ccc;">Safety</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">Higher Risks</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">Safer</td>
</tr>
<tr style="background: #f5f5f5;">
<td style="padding: 0.75rem; border: 1px solid #ccc;">Stand Length</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">~30 ft</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">~90 ft</td>
</tr>
</table>
</div>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>The rotary system is responsible for rotating the bit to break up rocks</li>
<li>Three main types: Rotary Table, Top Drive, and Downhole Motor</li>
<li>Top Drive is currently most common due to its many advantages</li>
<li>Each system has appropriate applications based on well type and operation</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Rotary Table', definition: 'A circular table that rotates to transfer motion to drill string via Kelly' },
            { term: 'Top Drive', definition: 'Motor suspended from traveling block that rotates drill string directly from above' },
            { term: 'Mud Motor', definition: 'Motor powered by drilling fluid pressure installed below drill string' },
            { term: 'Torque', definition: 'Rotational force needed to break up rocks, measured in ft-lb or N.m' },
          ],
          practiceQuestion: {
            question: 'Which rotary system allows drilling with 90 ft stands instead of 30 ft?',
            options: ['Rotary Table', 'Top Drive', 'Mud Motor', 'Kelly'],
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
          title: 'نظام الطاولة الدوارة ومكوناته',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 نظام الطاولة الدوارة (Rotary Table System)</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
نظام الطاولة الدوارة هو النظام التقليدي للدوران الذي استُخدم منذ بدايات صناعة الحفر. على الرغم من انتشار القيادة العلوية، لا يزال هذا النظام مستخدماً في العديد من الأجهزة، خاصة للآبار البسيطة والعمليات ذات الميزانية المحدودة.
</p>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 مكونات نظام الطاولة الدوارة</h2>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">1️⃣ الطاولة الدوارة (Rotary Table)</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
الطاولة الدوارة هي القلب النابض لهذا النظام. تتكون من قرص دائري كبير مثبت في أرضية الجهاز، يحتوي على فتحة مركزية مربعة أو سداسية تستقبل Kelly Bushing.
</p>

<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<strong style="color: #1e3a5f;">مواصفات الطاولة الدوارة:</strong>
<ul style="list-style-type: circle; padding-right: 1.5rem; margin-top: 0.5rem; line-height: 1.8;">
<li><strong>القطر:</strong> يتراوح من 17.5 إلى 49.5 بوصة</li>
<li><strong>فتحة المركز:</strong> 17.5، 20.5، 27.5، أو 37.5 بوصة</li>
<li><strong>سعة التحميل الثابت:</strong> 250 - 1000 طن</li>
<li><strong>سعة التحميل الدوراني:</strong> 150 - 500 طن</li>
<li><strong>نطاق السرعة:</strong> 0 - 300 RPM</li>
</ul>
</div>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">2️⃣ Kelly</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
Kelly هو أنبوب فولاذي طويل بمقطع مربع أو سداسي (وأحياناً مثلث)، يمرر العزم من الطاولة الدوارة إلى سلسلة الحفر. يبلغ طوله عادة 40 قدم ويسمح بمرور سائل الحفر عبره.
</p>

<div style="background: linear-gradient(135deg, #1e3a5f15, #f9731620); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #f97316;">
<h3 style="color: #f97316; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">📌 أنواع Kelly:</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li><strong>Kelly مربع (Square Kelly):</strong> الأكثر شيوعاً، مقطع 3×3 أو 4.25×4.25 بوصة</li>
<li><strong>Kelly سداسي (Hexagonal Kelly):</strong> يوفر توزيعاً أفضل للإجهاد، مقطع 4.25 أو 5.25 بوصة</li>
<li><strong>Kelly مثلث (Triangle Kelly):</strong> نادر الاستخدام حالياً</li>
</ul>
</div>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">3️⃣ Kelly Bushing</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
هي القطعة الوسيطة التي تربط Kelly بالطاولة الدوارة. تجلس في فتحة الطاولة وتسمح لـ Kelly بالحركة العمودية أثناء الدوران.
</p>

<div style="background: #1e3a5f10; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<strong style="color: #1e3a5f;">أنواع Kelly Bushing:</strong>
<ul style="list-style-type: circle; padding-right: 1.5rem; margin-top: 0.5rem; line-height: 1.8;">
<li><strong>Split Type:</strong> يمكن فكه إلى نصفين لسهولة التركيب والإزالة</li>
<li><strong>Pin Drive:</strong> يستخدم أسنان لنقل العزم</li>
<li><strong>Square Drive:</strong> فتحة مربعة تتطابق مع Kelly المربع</li>
</ul>
</div>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">4️⃣ Master Bushing</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
القطعة التي تستقر في فتحة الطاولة الدوارة وتحمل Kelly Bushing أو Slips عند عدم الحفر. تحتوي على Bowl يستقبل Slips لإمساك الأنابيب.
</p>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">5️⃣ المحور الدوار (Swivel)</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
يربط بين الجزء الثابت (Traveling Block/Hook) والجزء الدوار (Kelly/Drill String). يسمح بدوران السلسلة مع بقائه ثابتاً، ويوفر مدخلاً لسائل الحفر.
</p>

<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<strong style="color: #1e3a5f;">مكونات Swivel:</strong>
<ul style="list-style-type: circle; padding-right: 1.5rem; margin-top: 0.5rem; line-height: 1.8;">
<li><strong>Bail:</strong> الحلقة العلوية للتعليق على الخطاف</li>
<li><strong>Gooseneck:</strong> أنبوب منحني يتصل بخرطوم سائل الحفر</li>
<li><strong>Stem:</strong> العمود الدوار المتصل بـ Kelly</li>
<li><strong>Wash Pipe:</strong> يمنع تسرب سائل الحفر</li>
<li><strong>Bearings:</strong> محامل لتقليل الاحتكاك</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 آلية عمل النظام</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
تتدفق الطاقة في نظام الطاولة الدوارة كالتالي:
</p>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; text-align: center;">
<p style="font-size: 1.1rem; font-weight: bold; color: #1e3a5f;">
المحرك ← صندوق التروس ← الطاولة الدوارة ← Kelly Bushing ← Kelly ← سلسلة الحفر ← رأس الحفر
</p>
</div>

<div style="background: #dc262615; padding: 1rem; border-radius: 8px; margin: 1rem 0; border-right: 4px solid #dc2626;">
<strong style="color: #dc2626;">⚠️ احتياطات السلامة:</strong>
<ul style="list-style-type: disc; padding-right: 1.5rem; margin-top: 0.5rem; line-height: 1.8;">
<li>يجب إبقاء أيدي العمال بعيداً عن الطاولة الدوارة أثناء الدوران</li>
<li>فحص Kelly Bushing بانتظام للتأكد من سلامة التعشيق</li>
<li>عدم الوقوف فوق الطاولة الدوارة أثناء التشغيل</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>الطاولة الدوارة هي القرص الدوار في أرضية الجهاز</li>
<li>Kelly ينقل العزم من الطاولة لسلسلة الحفر (مربع أو سداسي)</li>
<li>Swivel يسمح بالدوران مع إدخال سائل الحفر</li>
<li>Kelly Bushing و Master Bushing يربطان المكونات ببعضها</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Kelly', definition: 'أنبوب بمقطع مربع أو سداسي ينقل العزم من الطاولة الدوارة لسلسلة الحفر' },
            { term: 'Kelly Bushing', definition: 'القطعة الوسيطة بين Kelly والطاولة الدوارة، تسمح بالحركة العمودية' },
            { term: 'Swivel', definition: 'يربط الجزء الثابت بالجزء الدوار ويسمح بدخول سائل الحفر' },
            { term: 'Master Bushing', definition: 'قطعة تجلس في الطاولة الدوارة وتحمل Kelly Bushing أو Slips' },
          ],
          practiceQuestion: {
            question: 'ما هو المكون الذي يسمح بدوران سلسلة الحفر مع إدخال سائل الحفر في نفس الوقت؟',
            options: ['Kelly', 'Kelly Bushing', 'Swivel', 'Master Bushing'],
            correctAnswer: 2,
          },
        },
        en: {
          title: 'Rotary Table System and Components',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Rotary Table System</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
The rotary table system is the traditional rotation system used since the early days of the drilling industry. Despite the spread of top drives, this system is still used on many rigs, especially for simple wells and budget-constrained operations.
</p>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Rotary Table System Components</h2>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">1️⃣ Rotary Table</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
The rotary table is the heart of this system. It consists of a large circular disc mounted on the rig floor, containing a square or hexagonal center opening that receives the Kelly Bushing.
</p>

<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<strong style="color: #1e3a5f;">Rotary Table Specifications:</strong>
<ul style="list-style-type: circle; padding-left: 1.5rem; margin-top: 0.5rem; line-height: 1.8;">
<li><strong>Diameter:</strong> Ranges from 17.5 to 49.5 inches</li>
<li><strong>Center Opening:</strong> 17.5, 20.5, 27.5, or 37.5 inches</li>
<li><strong>Static Load Capacity:</strong> 250 - 1000 tons</li>
<li><strong>Rotating Load Capacity:</strong> 150 - 500 tons</li>
<li><strong>Speed Range:</strong> 0 - 300 RPM</li>
</ul>
</div>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">2️⃣ Kelly</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
Kelly is a long steel pipe with a square or hexagonal (sometimes triangular) cross-section that transmits torque from the rotary table to the drill string. It is typically 40 feet long and allows drilling fluid to pass through.
</p>

<div style="background: linear-gradient(135deg, #1e3a5f15, #f9731620); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #f97316;">
<h3 style="color: #f97316; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">📌 Kelly Types:</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li><strong>Square Kelly:</strong> Most common, 3×3 or 4.25×4.25 inch cross-section</li>
<li><strong>Hexagonal Kelly:</strong> Better stress distribution, 4.25 or 5.25 inch</li>
<li><strong>Triangle Kelly:</strong> Rarely used today</li>
</ul>
</div>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">3️⃣ Kelly Bushing</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
The intermediate piece connecting Kelly to the rotary table. It sits in the table opening and allows Kelly to move vertically while rotating.
</p>

<div style="background: #1e3a5f10; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<strong style="color: #1e3a5f;">Kelly Bushing Types:</strong>
<ul style="list-style-type: circle; padding-left: 1.5rem; margin-top: 0.5rem; line-height: 1.8;">
<li><strong>Split Type:</strong> Can be separated into halves for easy installation</li>
<li><strong>Pin Drive:</strong> Uses teeth to transmit torque</li>
<li><strong>Square Drive:</strong> Square opening matching square Kelly</li>
</ul>
</div>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">4️⃣ Master Bushing</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
The piece that sits in the rotary table opening and holds Kelly Bushing or Slips when not drilling. Contains a bowl to receive Slips for holding pipe.
</p>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">5️⃣ Swivel</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
Connects the stationary part (Traveling Block/Hook) to the rotating part (Kelly/Drill String). Allows string rotation while remaining stationary and provides drilling fluid entry.
</p>

<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<strong style="color: #1e3a5f;">Swivel Components:</strong>
<ul style="list-style-type: circle; padding-left: 1.5rem; margin-top: 0.5rem; line-height: 1.8;">
<li><strong>Bail:</strong> Upper loop for hook suspension</li>
<li><strong>Gooseneck:</strong> Curved pipe connecting to mud hose</li>
<li><strong>Stem:</strong> Rotating shaft connected to Kelly</li>
<li><strong>Wash Pipe:</strong> Prevents drilling fluid leakage</li>
<li><strong>Bearings:</strong> Reduce friction</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 System Operation</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
Power flows in the rotary table system as follows:
</p>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; text-align: center;">
<p style="font-size: 1.1rem; font-weight: bold; color: #1e3a5f;">
Engine → Transmission → Rotary Table → Kelly Bushing → Kelly → Drill String → Bit
</p>
</div>

<div style="background: #dc262615; padding: 1rem; border-radius: 8px; margin: 1rem 0; border-left: 4px solid #dc2626;">
<strong style="color: #dc2626;">⚠️ Safety Precautions:</strong>
<ul style="list-style-type: disc; padding-left: 1.5rem; margin-top: 0.5rem; line-height: 1.8;">
<li>Keep hands away from rotary table during rotation</li>
<li>Regularly inspect Kelly Bushing for proper engagement</li>
<li>Never stand on rotary table during operation</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>Rotary table is the rotating disc on the rig floor</li>
<li>Kelly transmits torque from table to drill string (square or hex)</li>
<li>Swivel allows rotation while introducing drilling fluid</li>
<li>Kelly Bushing and Master Bushing connect components together</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Kelly', definition: 'Square or hexagonal pipe transmitting torque from rotary table to drill string' },
            { term: 'Kelly Bushing', definition: 'Intermediate piece between Kelly and rotary table, allows vertical movement' },
            { term: 'Swivel', definition: 'Connects stationary and rotating parts while allowing drilling fluid entry' },
            { term: 'Master Bushing', definition: 'Piece sitting in rotary table holding Kelly Bushing or Slips' },
          ],
          practiceQuestion: {
            question: 'Which component allows drill string rotation while introducing drilling fluid at the same time?',
            options: ['Kelly', 'Kelly Bushing', 'Swivel', 'Master Bushing'],
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
          title: 'نظام القيادة العلوية (Top Drive)',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 نظام القيادة العلوية (Top Drive System)</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
نظام القيادة العلوية هو التطور الأهم في تقنية الدوران خلال العقود الأخيرة. أحدث ثورة في صناعة الحفر من خلال زيادة الكفاءة والسلامة بشكل كبير. اليوم، أكثر من 80% من أجهزة الحفر الحديثة تستخدم هذا النظام.
</p>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 تصميم القيادة العلوية</h2>

<div style="background: linear-gradient(135deg, #1e3a5f15, #f9731620); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #f97316;">
<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">📌 المكونات الرئيسية</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li><strong>المحرك (Motor):</strong> كهربائي DC/AC أو هيدروليكي</li>
<li><strong>صندوق التروس (Gearbox):</strong> لتغيير السرعة والعزم</li>
<li><strong>العمود الرئيسي (Main Shaft):</strong> ينقل الدوران للسلسلة</li>
<li><strong>نظام الإمساك (Pipe Handler):</strong> لربط وفك الأنابيب</li>
<li><strong>Torque Wrench:</strong> مفتاح عزم لربط الوصلات</li>
<li><strong>IBOP (Internal BOP):</strong> صمام أمان داخلي</li>
<li><strong>نظام التوجيه (Guide Rails):</strong> يوجه الحركة العمودية</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 أنواع محركات القيادة العلوية</h2>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">1️⃣ المحرك الكهربائي DC</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
المحرك الأكثر شيوعاً تاريخياً. يوفر تحكماً ممتازاً في السرعة والعزم. يتطلب نظام SCR للتحكم في الطاقة.
</p>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">2️⃣ المحرك الكهربائي AC</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
الأحدث والأكثر كفاءة. يستخدم Variable Frequency Drive (VFD) للتحكم. صيانة أقل وكفاءة طاقة أعلى من DC.
</p>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">3️⃣ المحرك الهيدروليكي</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
يستخدم ضغط السوائل لتوليد الحركة. أقل شيوعاً حالياً لكنه مفيد في بعض التطبيقات الخاصة.
</p>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 مواصفات القيادة العلوية</h2>

<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<table style="width: 100%; border-collapse: collapse; text-align: center;">
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 0.75rem; border: 1px solid #ccc;">المواصفة</th>
<th style="padding: 0.75rem; border: 1px solid #ccc;">النطاق النموذجي</th>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ccc;">سعة التعليق</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">250 - 750 طن</td>
</tr>
<tr style="background: #f5f5f5;">
<td style="padding: 0.75rem; border: 1px solid #ccc;">العزم المستمر</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">15,000 - 50,000 ft-lb</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ccc;">العزم الأقصى (Make-up)</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">25,000 - 80,000 ft-lb</td>
</tr>
<tr style="background: #f5f5f5;">
<td style="padding: 0.75rem; border: 1px solid #ccc;">نطاق السرعة</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">0 - 250 RPM</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ccc;">قوة المحرك</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">500 - 1500 HP</td>
</tr>
</table>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 مميزات القيادة العلوية</h2>

<div style="background: #10b98115; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">✅ المميزات التشغيلية:</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li><strong>الحفر بوصلات 3 أنابيب (Stands):</strong> يقلل عدد الوصلات بـ 66%</li>
<li><strong>Back Reaming أثناء السحب:</strong> الدوران أثناء رفع السلسلة لتنظيف الحفرة</li>
<li><strong>Circulation أثناء الوصل:</strong> ضخ السائل أثناء ربط الأنابيب</li>
<li><strong>معالجة Stuck Pipe:</strong> إمكانية الدوران والسحب معاً</li>
<li><strong>تقليل زمن الرحلات بنسبة 30-40%</strong></li>
</ul>
</div>

<div style="background: #f9731620; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #f97316; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">✅ مميزات السلامة:</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>تقليل تواجد العمال في منطقة الخطر (Red Zone)</li>
<li>ربط آلي للأنابيب بدون تدخل يدوي</li>
<li>IBOP للتحكم السريع في الضغط</li>
<li>إمكانية إغلاق البئر أثناء الدوران</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 تشغيل القيادة العلوية</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
يتم التحكم في القيادة العلوية من كرسي الحفار (Driller's Console) عبر:
</p>

<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2; margin-bottom: 1rem;">
<li>ذراع التحكم بالسرعة (RPM Joystick)</li>
<li>مفتاح اتجاه الدوران (CW/CCW)</li>
<li>مفتاح IBOP</li>
<li>شاشة عرض العزم والسرعة</li>
</ul>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>القيادة العلوية محرك معلق يدور السلسلة من الأعلى</li>
<li>توفر كفاءة أعلى بنسبة 30-40% مقارنة بالطاولة الدوارة</li>
<li>تحسن السلامة بتقليل العمل اليدوي</li>
<li>تسمح بـ Back Reaming والدوران أثناء الرحلات</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'IBOP (Internal BOP)', definition: 'صمام أمان داخلي في القيادة العلوية للتحكم في ضغط البئر' },
            { term: 'Back Reaming', definition: 'الدوران أثناء سحب السلسلة لتنظيف جدار الحفرة وتوسيعه' },
            { term: 'Stand', definition: 'وصلة من 3 أنابيب حفر (حوالي 90 قدم) تُحفر دفعة واحدة مع Top Drive' },
            { term: 'VFD (Variable Frequency Drive)', definition: 'جهاز للتحكم في سرعة المحرك الكهربائي AC' },
          ],
          practiceQuestion: {
            question: 'ما هي النسبة المئوية التقريبية لتقليل زمن الرحلات باستخدام القيادة العلوية؟',
            options: ['10-15%', '20-25%', '30-40%', '50-60%'],
            correctAnswer: 2,
          },
        },
        en: {
          title: 'Top Drive System',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Top Drive System</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
The top drive system is the most important advancement in rotation technology in recent decades. It revolutionized the drilling industry by significantly increasing efficiency and safety. Today, over 80% of modern drilling rigs use this system.
</p>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Top Drive Design</h2>

<div style="background: linear-gradient(135deg, #1e3a5f15, #f9731620); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #f97316;">
<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">📌 Main Components</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li><strong>Motor:</strong> DC/AC electric or hydraulic</li>
<li><strong>Gearbox:</strong> For speed and torque changes</li>
<li><strong>Main Shaft:</strong> Transmits rotation to string</li>
<li><strong>Pipe Handler:</strong> For making/breaking connections</li>
<li><strong>Torque Wrench:</strong> For connection make-up</li>
<li><strong>IBOP (Internal BOP):</strong> Internal safety valve</li>
<li><strong>Guide Rails:</strong> Guide vertical movement</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Top Drive Motor Types</h2>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">1️⃣ DC Electric Motor</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
Historically the most common motor. Provides excellent speed and torque control. Requires SCR system for power control.
</p>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">2️⃣ AC Electric Motor</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
Newer and more efficient. Uses Variable Frequency Drive (VFD) for control. Less maintenance and higher energy efficiency than DC.
</p>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">3️⃣ Hydraulic Motor</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
Uses fluid pressure to generate motion. Less common today but useful in some special applications.
</p>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Top Drive Specifications</h2>

<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<table style="width: 100%; border-collapse: collapse; text-align: center;">
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 0.75rem; border: 1px solid #ccc;">Specification</th>
<th style="padding: 0.75rem; border: 1px solid #ccc;">Typical Range</th>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ccc;">Hanging Capacity</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">250 - 750 tons</td>
</tr>
<tr style="background: #f5f5f5;">
<td style="padding: 0.75rem; border: 1px solid #ccc;">Continuous Torque</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">15,000 - 50,000 ft-lb</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ccc;">Maximum Torque (Make-up)</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">25,000 - 80,000 ft-lb</td>
</tr>
<tr style="background: #f5f5f5;">
<td style="padding: 0.75rem; border: 1px solid #ccc;">Speed Range</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">0 - 250 RPM</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ccc;">Motor Power</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">500 - 1500 HP</td>
</tr>
</table>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Top Drive Advantages</h2>

<div style="background: #10b98115; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">✅ Operational Advantages:</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li><strong>Drilling with 3-joint stands:</strong> Reduces connections by 66%</li>
<li><strong>Back Reaming while tripping:</strong> Rotating while pulling to clean hole</li>
<li><strong>Circulation during connections:</strong> Pumping while making up</li>
<li><strong>Stuck pipe handling:</strong> Ability to rotate and pull together</li>
<li><strong>30-40% reduction in trip time</strong></li>
</ul>
</div>

<div style="background: #f9731620; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #f97316; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">✅ Safety Advantages:</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>Reduced personnel in danger zone (Red Zone)</li>
<li>Automated pipe handling without manual intervention</li>
<li>IBOP for quick pressure control</li>
<li>Ability to close well while rotating</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Top Drive Operation</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
Top drive is controlled from the Driller's Console via:
</p>

<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2; margin-bottom: 1rem;">
<li>Speed control joystick (RPM)</li>
<li>Rotation direction switch (CW/CCW)</li>
<li>IBOP switch</li>
<li>Torque and speed display screen</li>
</ul>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>Top drive is a suspended motor rotating string from above</li>
<li>Provides 30-40% higher efficiency than rotary table</li>
<li>Improves safety by reducing manual work</li>
<li>Allows back reaming and rotation during trips</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'IBOP (Internal BOP)', definition: 'Internal safety valve in top drive for well pressure control' },
            { term: 'Back Reaming', definition: 'Rotating while pulling string to clean and enlarge hole wall' },
            { term: 'Stand', definition: 'A 3-joint connection (about 90 ft) drilled at once with top drive' },
            { term: 'VFD (Variable Frequency Drive)', definition: 'Device for controlling AC electric motor speed' },
          ],
          practiceQuestion: {
            question: 'What is the approximate percentage reduction in trip time using top drive?',
            options: ['10-15%', '20-25%', '30-40%', '50-60%'],
            correctAnswer: 2,
          },
        },
      },
    },
    {
      day: 4,
      type: 'learning',
      content: {
        ar: {
          title: 'حسابات العزم وسرعة الدوران',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 حسابات العزم وسرعة الدوران</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
فهم حسابات العزم (Torque) وسرعة الدوران (RPM) ضروري لتحسين أداء الحفر وحماية المعدات. هذه الحسابات تساعد في اختيار المعاملات المثلى لكل تكوين صخري.
</p>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 العزم (Torque)</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
العزم هو قوة الدوران اللازمة لتدوير سلسلة الحفر ورأس الحفر. يُقاس بوحدات ft-lb أو N.m ويتأثر بعدة عوامل:
</p>

<div style="background: linear-gradient(135deg, #1e3a5f15, #f9731620); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #f97316;">
<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">📌 عوامل تؤثر على العزم:</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>عمق البئر وطول سلسلة الحفر</li>
<li>قطر الحفرة وقطر السلسلة</li>
<li>نوع وخصائص سائل الحفر</li>
<li>زاوية ميل البئر (Inclination)</li>
<li>حالة جدار الحفرة (Hole Condition)</li>
<li>الوزن على رأس الحفر (WOB)</li>
<li>نوع رأس الحفر</li>
</ul>
</div>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">مكونات العزم الكلي</h3>

<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<p style="line-height: 1.8; margin-bottom: 1rem;"><strong>العزم الكلي = عزم رأس الحفر + عزم احتكاك السلسلة</strong></p>

<p style="line-height: 1.8; margin-bottom: 0.5rem;"><strong style="color: #f97316;">1. عزم رأس الحفر (Bit Torque):</strong></p>
<div style="background: #f9731620; padding: 0.75rem; border-radius: 6px; margin-bottom: 1rem; text-align: center; direction: ltr;">
T_bit = μ × WOB × D_bit / 36
</div>
<p style="line-height: 1.8; margin-bottom: 1rem;">حيث: μ = معامل الاحتكاك، WOB = الوزن على الرأس (lb)، D_bit = قطر الرأس (in)</p>

<p style="line-height: 1.8; margin-bottom: 0.5rem;"><strong style="color: #f97316;">2. عزم احتكاك السلسلة (String Torque):</strong></p>
<p style="line-height: 1.8;">يعتمد على طول السلسلة واحتكاكها مع جدار الحفرة. يزداد بشكل كبير في الآبار المائلة والأفقية.</p>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 سرعة الدوران (RPM)</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
سرعة الدوران تؤثر مباشرة على معدل الاختراق (ROP) وعمر رأس الحفر. الاختيار الصحيح يعتمد على نوع التكوين ورأس الحفر.
</p>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">إرشادات اختيار RPM</h3>

<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<table style="width: 100%; border-collapse: collapse; text-align: center;">
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 0.75rem; border: 1px solid #ccc;">نوع التكوين</th>
<th style="padding: 0.75rem; border: 1px solid #ccc;">RPM الموصى به</th>
<th style="padding: 0.75rem; border: 1px solid #ccc;">نوع الرأس</th>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ccc;">صخور لينة</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">100 - 200</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">PDC</td>
</tr>
<tr style="background: #f5f5f5;">
<td style="padding: 0.75rem; border: 1px solid #ccc;">صخور متوسطة</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">60 - 120</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">PDC / Roller Cone</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ccc;">صخور صلبة</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">40 - 80</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">Roller Cone</td>
</tr>
</table>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 حساب القدرة المطلوبة</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
القدرة اللازمة للدوران تُحسب من العزم والسرعة:
</p>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; text-align: center;">
<p style="font-size: 1.2rem; font-weight: bold; color: #1e3a5f; direction: ltr; margin-bottom: 1rem;">
HP = (Torque × RPM) / 5252
</p>
<p style="line-height: 1.8;">
حيث: HP = القدرة بالحصان، Torque بـ ft-lb، RPM = لفة/دقيقة
</p>
</div>

<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #f97316; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">📌 مثال محلول:</h3>
<p style="line-height: 1.8; margin-bottom: 0.5rem;"><strong>المعطيات:</strong></p>
<ul style="list-style-type: circle; padding-right: 1.5rem; line-height: 1.8; margin-bottom: 1rem;">
<li>العزم = 25,000 ft-lb</li>
<li>السرعة = 120 RPM</li>
</ul>
<p style="line-height: 1.8;"><strong>الحل:</strong></p>
<p style="line-height: 1.8; direction: ltr;">HP = (25,000 × 120) / 5252 = 571 HP</p>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Critical RPM (السرعة الحرجة)</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
السرعة الحرجة هي سرعة الدوران التي تسبب اهتزازات رنينية في سلسلة الحفر. يجب تجنب التشغيل عند هذه السرعات لمنع التلف.
</p>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; text-align: center;">
<p style="font-size: 1.2rem; font-weight: bold; color: #1e3a5f; direction: ltr; margin-bottom: 1rem;">
N_c = 4760000 × √(I / (W × L⁴))
</p>
<p style="line-height: 1.8;">
حيث: I = عزم القصور، W = الوزن/القدم، L = الطول
</p>
</div>

<div style="background: #dc262615; padding: 1rem; border-radius: 8px; margin: 1rem 0; border-right: 4px solid #dc2626;">
<strong style="color: #dc2626;">⚠️ تحذير:</strong>
<p style="margin-top: 0.5rem; line-height: 1.8;">
التشغيل عند السرعة الحرجة يسبب اهتزازات عنيفة قد تؤدي إلى:
</p>
<ul style="list-style-type: disc; padding-right: 1.5rem; margin-top: 0.5rem; line-height: 1.8;">
<li>كسر سلسلة الحفر</li>
<li>تلف رأس الحفر</li>
<li>تآكل جدار الحفرة</li>
<li>فشل أدوات القياس (MWD/LWD)</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>العزم الكلي = عزم رأس الحفر + عزم احتكاك السلسلة</li>
<li>اختيار RPM يعتمد على نوع التكوين ورأس الحفر</li>
<li>القدرة = (العزم × السرعة) / 5252</li>
<li>يجب تجنب التشغيل عند السرعات الحرجة</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'العزم (Torque)', definition: 'قوة الدوران اللازمة لتدوير السلسلة ورأس الحفر، تُقاس بـ ft-lb' },
            { term: 'السرعة الحرجة (Critical RPM)', definition: 'سرعة الدوران التي تسبب اهتزازات رنينية في السلسلة' },
            { term: 'ROP (Rate of Penetration)', definition: 'معدل الاختراق أو سرعة الحفر، تُقاس بـ ft/hr' },
            { term: 'معامل الاحتكاك (Friction Factor)', definition: 'نسبة تمثل مقاومة الاحتكاك بين السلسلة وجدار الحفرة' },
          ],
          practiceQuestion: {
            question: 'إذا كان العزم 20,000 ft-lb وسرعة الدوران 100 RPM، ما هي القدرة المطلوبة؟',
            options: ['281 HP', '381 HP', '481 HP', '581 HP'],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Torque and RPM Calculations',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Torque and RPM Calculations</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
Understanding torque and RPM (Revolutions Per Minute) calculations is essential for optimizing drilling performance and protecting equipment. These calculations help select optimal parameters for each rock formation.
</p>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Torque</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
Torque is the rotational force needed to rotate the drill string and bit. It is measured in ft-lb or N.m and is affected by several factors:
</p>

<div style="background: linear-gradient(135deg, #1e3a5f15, #f9731620); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #f97316;">
<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">📌 Factors Affecting Torque:</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>Well depth and drill string length</li>
<li>Hole diameter and string diameter</li>
<li>Drilling fluid type and properties</li>
<li>Well inclination angle</li>
<li>Hole condition</li>
<li>Weight on Bit (WOB)</li>
<li>Bit type</li>
</ul>
</div>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">Total Torque Components</h3>

<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<p style="line-height: 1.8; margin-bottom: 1rem;"><strong>Total Torque = Bit Torque + String Friction Torque</strong></p>

<p style="line-height: 1.8; margin-bottom: 0.5rem;"><strong style="color: #f97316;">1. Bit Torque:</strong></p>
<div style="background: #f9731620; padding: 0.75rem; border-radius: 6px; margin-bottom: 1rem; text-align: center;">
T_bit = μ × WOB × D_bit / 36
</div>
<p style="line-height: 1.8; margin-bottom: 1rem;">Where: μ = friction coefficient, WOB = Weight on Bit (lb), D_bit = bit diameter (in)</p>

<p style="line-height: 1.8; margin-bottom: 0.5rem;"><strong style="color: #f97316;">2. String Friction Torque:</strong></p>
<p style="line-height: 1.8;">Depends on string length and friction with hole wall. Increases significantly in deviated and horizontal wells.</p>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Rotation Speed (RPM)</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
Rotation speed directly affects Rate of Penetration (ROP) and bit life. Correct selection depends on formation type and bit type.
</p>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">RPM Selection Guidelines</h3>

<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<table style="width: 100%; border-collapse: collapse; text-align: center;">
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 0.75rem; border: 1px solid #ccc;">Formation Type</th>
<th style="padding: 0.75rem; border: 1px solid #ccc;">Recommended RPM</th>
<th style="padding: 0.75rem; border: 1px solid #ccc;">Bit Type</th>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ccc;">Soft Rock</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">100 - 200</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">PDC</td>
</tr>
<tr style="background: #f5f5f5;">
<td style="padding: 0.75rem; border: 1px solid #ccc;">Medium Rock</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">60 - 120</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">PDC / Roller Cone</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ccc;">Hard Rock</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">40 - 80</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">Roller Cone</td>
</tr>
</table>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Required Power Calculation</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
Power required for rotation is calculated from torque and speed:
</p>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; text-align: center;">
<p style="font-size: 1.2rem; font-weight: bold; color: #1e3a5f; margin-bottom: 1rem;">
HP = (Torque × RPM) / 5252
</p>
<p style="line-height: 1.8;">
Where: HP = Horsepower, Torque in ft-lb, RPM = revolutions/minute
</p>
</div>

<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #f97316; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">📌 Solved Example:</h3>
<p style="line-height: 1.8; margin-bottom: 0.5rem;"><strong>Given:</strong></p>
<ul style="list-style-type: circle; padding-left: 1.5rem; line-height: 1.8; margin-bottom: 1rem;">
<li>Torque = 25,000 ft-lb</li>
<li>Speed = 120 RPM</li>
</ul>
<p style="line-height: 1.8;"><strong>Solution:</strong></p>
<p style="line-height: 1.8;">HP = (25,000 × 120) / 5252 = 571 HP</p>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Critical RPM</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
Critical RPM is the rotation speed that causes resonant vibrations in the drill string. Operating at these speeds must be avoided to prevent damage.
</p>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; text-align: center;">
<p style="font-size: 1.2rem; font-weight: bold; color: #1e3a5f; margin-bottom: 1rem;">
N_c = 4760000 × √(I / (W × L⁴))
</p>
<p style="line-height: 1.8;">
Where: I = moment of inertia, W = weight/ft, L = length
</p>
</div>

<div style="background: #dc262615; padding: 1rem; border-radius: 8px; margin: 1rem 0; border-left: 4px solid #dc2626;">
<strong style="color: #dc2626;">⚠️ Warning:</strong>
<p style="margin-top: 0.5rem; line-height: 1.8;">
Operating at critical speed causes severe vibrations that can lead to:
</p>
<ul style="list-style-type: disc; padding-left: 1.5rem; margin-top: 0.5rem; line-height: 1.8;">
<li>Drill string failure</li>
<li>Bit damage</li>
<li>Hole wall erosion</li>
<li>MWD/LWD tool failure</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>Total Torque = Bit Torque + String Friction Torque</li>
<li>RPM selection depends on formation and bit type</li>
<li>Power = (Torque × Speed) / 5252</li>
<li>Operating at critical speeds must be avoided</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Torque', definition: 'Rotational force needed to rotate string and bit, measured in ft-lb' },
            { term: 'Critical RPM', definition: 'Rotation speed causing resonant vibrations in the string' },
            { term: 'ROP (Rate of Penetration)', definition: 'Drilling rate or penetration speed, measured in ft/hr' },
            { term: 'Friction Factor', definition: 'Ratio representing friction resistance between string and hole wall' },
          ],
          practiceQuestion: {
            question: 'If torque is 20,000 ft-lb and rotation speed is 100 RPM, what is the required power?',
            options: ['281 HP', '381 HP', '481 HP', '581 HP'],
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
          title: 'محرك قاع البئر وصيانة أنظمة الدوران',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 محرك قاع البئر (Downhole Motor / Mud Motor)</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
محرك قاع البئر هو جهاز يحول طاقة ضخ سائل الحفر إلى طاقة دورانية في قاع البئر. يُستخدم بشكل أساسي في الحفر الموجه والأفقي حيث يتطلب الأمر دوران رأس الحفر بشكل مستقل عن سلسلة الحفر.
</p>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 أنواع محركات قاع البئر</h2>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">1️⃣ المحرك الحلزوني (Positive Displacement Motor - PDM)</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
الأكثر شيوعاً في الصناعة. يعتمد على مبدأ Moineau (الدوار الحلزوني داخل الساكن). يتكون من:
</p>

<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li><strong>Power Section:</strong> يحتوي على Rotor (دوار) و Stator (ساكن) - يحول تدفق السائل لدوران</li>
<li><strong>Transmission (Universal Joint):</strong> ينقل الحركة من Power Section للرأس</li>
<li><strong>Bearing Section:</strong> يتحمل الأحمال المحورية والجانبية</li>
<li><strong>Bit Sub:</strong> يتصل برأس الحفر</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #1e3a5f15, #f9731620); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #f97316;">
<h3 style="color: #f97316; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">📌 تصنيف محركات PDM:</h3>
<p style="line-height: 1.8; margin-bottom: 0.5rem;">يُرمز للمحرك بأرقام مثل <strong>7:8 Lobe</strong> حيث:</p>
<ul style="list-style-type: circle; padding-right: 1.5rem; line-height: 2;">
<li>الرقم الأول (7): عدد فصوص الدوار (Rotor Lobes)</li>
<li>الرقم الثاني (8): عدد فصوص الساكن (Stator Lobes) = Rotor + 1</li>
<li>كلما زاد عدد الفصوص، زاد العزم وقلت السرعة</li>
</ul>
</div>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">2️⃣ التوربين (Turbine)</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
يستخدم شفرات توربينية لتحويل طاقة السائل لدوران. يوفر سرعات عالية جداً (500-1500 RPM) لكن عزم منخفض. مناسب للصخور الصلبة جداً.
</p>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 معاملات أداء محرك PDM</h2>

<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<table style="width: 100%; border-collapse: collapse; text-align: center;">
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 0.75rem; border: 1px solid #ccc;">المعامل</th>
<th style="padding: 0.75rem; border: 1px solid #ccc;">النطاق النموذجي</th>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ccc;">سرعة الدوران (بدون حمل)</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">50 - 500 RPM</td>
</tr>
<tr style="background: #f5f5f5;">
<td style="padding: 0.75rem; border: 1px solid #ccc;">العزم الأقصى</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">1,000 - 15,000 ft-lb</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ccc;">فرق الضغط</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">200 - 600 psi</td>
</tr>
<tr style="background: #f5f5f5;">
<td style="padding: 0.75rem; border: 1px solid #ccc;">معدل التدفق</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">150 - 800 GPM</td>
</tr>
</table>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 استخدام المحرك في الحفر الموجه</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
يحتوي المحرك على <strong>Bent Housing</strong> (غلاف منحني) بزاوية محددة (عادة 0.5° - 3°). هذا الانحناء يسمح بتغيير اتجاه الحفرة:
</p>

<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2; margin-bottom: 1rem;">
<li><strong>وضع التوجيه (Sliding Mode):</strong> السلسلة ثابتة والمحرك يدور الرأس - يبني زاوية</li>
<li><strong>وضع الدوران (Rotating Mode):</strong> السلسلة والمحرك يدوران معاً - يحافظ على الاتجاه</li>
</ul>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 صيانة أنظمة الدوران</h2>

<div style="background: linear-gradient(135deg, #1e3a5f15, #f9731620); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #f97316;">
<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">📌 صيانة الطاولة الدوارة:</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>فحص وتشحيم المحامل يومياً</li>
<li>فحص تروس النقل للتآكل</li>
<li>التأكد من سلامة Master Bushing وKelly Bushing</li>
<li>فحص أختام الزيت ومنع التسرب</li>
</ul>
</div>

<div style="background: #10b98115; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">📌 صيانة القيادة العلوية:</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>فحص Torque Wrench والتأكد من العزم الصحيح</li>
<li>اختبار IBOP بشكل دوري</li>
<li>فحص Guide Rails للتآكل</li>
<li>مراقبة مستوى زيت Gearbox</li>
<li>فحص الكابلات الكهربائية والوصلات</li>
</ul>
</div>

<div style="background: #dc262615; padding: 1rem; border-radius: 8px; margin: 1rem 0; border-right: 4px solid #dc2626;">
<strong style="color: #dc2626;">⚠️ علامات تحتاج صيانة فورية:</strong>
<ul style="list-style-type: disc; padding-right: 1.5rem; margin-top: 0.5rem; line-height: 1.8;">
<li>اهتزازات غير طبيعية</li>
<li>أصوات طحن أو صرير</li>
<li>ارتفاع درجة حرارة المحامل</li>
<li>تسرب الزيت أو السوائل</li>
<li>فقدان العزم أو السرعة</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>محرك PDM يحول طاقة ضخ السائل لدوران في قاع البئر</li>
<li>يُستخدم بشكل أساسي في الحفر الموجه والأفقي</li>
<li>Bent Housing يسمح بتغيير اتجاه الحفرة</li>
<li>الصيانة الدورية ضرورية لجميع أنظمة الدوران</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'PDM (Positive Displacement Motor)', definition: 'محرك حلزوني يحول تدفق سائل الحفر إلى دوران ميكانيكي' },
            { term: 'Bent Housing', definition: 'غلاف منحني في المحرك يسمح بتوجيه الحفرة في الحفر الموجه' },
            { term: 'Sliding Mode', definition: 'وضع توجيه حيث السلسلة ثابتة والمحرك فقط يدور' },
            { term: 'Power Section', definition: 'جزء المحرك الذي يحتوي على Rotor وStator ويولد الدوران' },
          ],
          practiceQuestion: {
            question: 'ما هو وضع التشغيل المستخدم لتغيير اتجاه الحفرة في الحفر الموجه؟',
            options: ['Rotating Mode', 'Sliding Mode', 'Hybrid Mode', 'Static Mode'],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Downhole Motor and Rotary System Maintenance',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Downhole Motor (Mud Motor)</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
A downhole motor is a device that converts drilling fluid pumping energy into rotational energy at the bottom of the well. It is primarily used in directional and horizontal drilling where the bit needs to rotate independently of the drill string.
</p>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Types of Downhole Motors</h2>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">1️⃣ Positive Displacement Motor (PDM)</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
Most common in the industry. Based on the Moineau principle (helical rotor inside stator). Consists of:
</p>

<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li><strong>Power Section:</strong> Contains Rotor and Stator - converts fluid flow to rotation</li>
<li><strong>Transmission (Universal Joint):</strong> Transfers motion from power section to bit</li>
<li><strong>Bearing Section:</strong> Handles axial and radial loads</li>
<li><strong>Bit Sub:</strong> Connects to drill bit</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #1e3a5f15, #f9731620); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #f97316;">
<h3 style="color: #f97316; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">📌 PDM Motor Classification:</h3>
<p style="line-height: 1.8; margin-bottom: 0.5rem;">Motors are designated by numbers like <strong>7:8 Lobe</strong> where:</p>
<ul style="list-style-type: circle; padding-left: 1.5rem; line-height: 2;">
<li>First number (7): Number of rotor lobes</li>
<li>Second number (8): Number of stator lobes = Rotor + 1</li>
<li>More lobes = higher torque, lower speed</li>
</ul>
</div>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">2️⃣ Turbine</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
Uses turbine blades to convert fluid energy to rotation. Provides very high speeds (500-1500 RPM) but low torque. Suitable for very hard rocks.
</p>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 PDM Motor Performance Parameters</h2>

<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<table style="width: 100%; border-collapse: collapse; text-align: center;">
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 0.75rem; border: 1px solid #ccc;">Parameter</th>
<th style="padding: 0.75rem; border: 1px solid #ccc;">Typical Range</th>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ccc;">Rotation Speed (no load)</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">50 - 500 RPM</td>
</tr>
<tr style="background: #f5f5f5;">
<td style="padding: 0.75rem; border: 1px solid #ccc;">Maximum Torque</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">1,000 - 15,000 ft-lb</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ccc;">Differential Pressure</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">200 - 600 psi</td>
</tr>
<tr style="background: #f5f5f5;">
<td style="padding: 0.75rem; border: 1px solid #ccc;">Flow Rate</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">150 - 800 GPM</td>
</tr>
</table>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Motor Use in Directional Drilling</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
The motor contains a <strong>Bent Housing</strong> at a specific angle (typically 0.5° - 3°). This bend allows changing hole direction:
</p>

<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2; margin-bottom: 1rem;">
<li><strong>Sliding Mode:</strong> String stationary, motor rotates bit - builds angle</li>
<li><strong>Rotating Mode:</strong> String and motor rotate together - maintains direction</li>
</ul>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Rotary System Maintenance</h2>

<div style="background: linear-gradient(135deg, #1e3a5f15, #f9731620); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #f97316;">
<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">📌 Rotary Table Maintenance:</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>Daily bearing inspection and lubrication</li>
<li>Check transmission gears for wear</li>
<li>Ensure Master Bushing and Kelly Bushing integrity</li>
<li>Check oil seals and prevent leaks</li>
</ul>
</div>

<div style="background: #10b98115; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">📌 Top Drive Maintenance:</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>Inspect Torque Wrench and verify correct torque</li>
<li>Periodically test IBOP</li>
<li>Check Guide Rails for wear</li>
<li>Monitor Gearbox oil level</li>
<li>Inspect electrical cables and connections</li>
</ul>
</div>

<div style="background: #dc262615; padding: 1rem; border-radius: 8px; margin: 1rem 0; border-left: 4px solid #dc2626;">
<strong style="color: #dc2626;">⚠️ Signs Requiring Immediate Maintenance:</strong>
<ul style="list-style-type: disc; padding-left: 1.5rem; margin-top: 0.5rem; line-height: 1.8;">
<li>Abnormal vibrations</li>
<li>Grinding or squealing sounds</li>
<li>Elevated bearing temperature</li>
<li>Oil or fluid leaks</li>
<li>Loss of torque or speed</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>PDM motor converts fluid pumping energy to downhole rotation</li>
<li>Primarily used in directional and horizontal drilling</li>
<li>Bent Housing allows changing hole direction</li>
<li>Regular maintenance is essential for all rotary systems</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'PDM (Positive Displacement Motor)', definition: 'Helical motor converting drilling fluid flow to mechanical rotation' },
            { term: 'Bent Housing', definition: 'Angled housing in motor allowing hole direction control in directional drilling' },
            { term: 'Sliding Mode', definition: 'Steering mode where string is stationary and only motor rotates' },
            { term: 'Power Section', definition: 'Motor section containing Rotor and Stator that generates rotation' },
          ],
          practiceQuestion: {
            question: 'What operating mode is used to change hole direction in directional drilling?',
            options: ['Rotating Mode', 'Sliding Mode', 'Hybrid Mode', 'Static Mode'],
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
          title: 'اختبار أنظمة الدوران',
          explanation: 'اختبر معلوماتك في أنظمة الدوران',
          keyTerms: [],
        },
        en: {
          title: 'Rotary Systems Quiz',
          explanation: 'Test your knowledge on Rotary Systems',
          keyTerms: [],
        },
      },
      quiz: {
        ar: [
          { question: 'أي نظام دوران يسمح بالحفر بوصلات 90 قدم؟', options: ['الطاولة الدوارة', 'القيادة العلوية', 'Kelly فقط', 'Swivel'], correctAnswer: 1 },
          { question: 'ما هو المكون الذي يسمح بدوران السلسلة مع إدخال سائل الحفر؟', options: ['Kelly', 'Kelly Bushing', 'Swivel', 'Master Bushing'], correctAnswer: 2 },
          { question: 'ما هو شكل مقطع Kelly الأكثر شيوعاً؟', options: ['دائري', 'مربع', 'مثلث', 'بيضاوي'], correctAnswer: 1 },
          { question: 'ما هو IBOP في القيادة العلوية؟', options: ['محرك كهربائي', 'صمام أمان داخلي', 'نظام فرامل', 'مؤشر عزم'], correctAnswer: 1 },
          { question: 'ما هي النسبة التقريبية لتقليل زمن الرحلات باستخدام Top Drive؟', options: ['10-15%', '20-25%', '30-40%', '50-60%'], correctAnswer: 2 },
          { question: 'ما هي المعادلة الصحيحة لحساب قدرة الدوران؟', options: ['HP = Torque / RPM', 'HP = Torque × RPM', 'HP = (Torque × RPM) / 5252', 'HP = 5252 / (Torque × RPM)'], correctAnswer: 2 },
          { question: 'في محرك PDM بتصنيف 5:6 Lobe، كم عدد فصوص الدوار؟', options: ['4', '5', '6', '11'], correctAnswer: 1 },
          { question: 'ما هو وضع التشغيل المستخدم لبناء زاوية في الحفر الموجه؟', options: ['Rotating Mode', 'Sliding Mode', 'Combined Mode', 'Static Mode'], correctAnswer: 1 },
          { question: 'أي نوع محرك يوفر سرعات تصل 1500 RPM؟', options: ['PDM', 'Turbine', 'Electric', 'Hydraulic'], correctAnswer: 1 },
          { question: 'ما هو Back Reaming؟', options: ['الحفر للأمام', 'الدوران أثناء السحب', 'إيقاف الدوران', 'زيادة WOB'], correctAnswer: 1 },
        ],
        en: [
          { question: 'Which rotary system allows drilling with 90 ft stands?', options: ['Rotary Table', 'Top Drive', 'Kelly only', 'Swivel'], correctAnswer: 1 },
          { question: 'Which component allows string rotation while introducing drilling fluid?', options: ['Kelly', 'Kelly Bushing', 'Swivel', 'Master Bushing'], correctAnswer: 2 },
          { question: 'What is the most common Kelly cross-section shape?', options: ['Round', 'Square', 'Triangle', 'Oval'], correctAnswer: 1 },
          { question: 'What is IBOP in Top Drive?', options: ['Electric motor', 'Internal safety valve', 'Brake system', 'Torque indicator'], correctAnswer: 1 },
          { question: 'What is the approximate trip time reduction using Top Drive?', options: ['10-15%', '20-25%', '30-40%', '50-60%'], correctAnswer: 2 },
          { question: 'What is the correct formula for rotation power?', options: ['HP = Torque / RPM', 'HP = Torque × RPM', 'HP = (Torque × RPM) / 5252', 'HP = 5252 / (Torque × RPM)'], correctAnswer: 2 },
          { question: 'In a 5:6 Lobe PDM motor, how many rotor lobes are there?', options: ['4', '5', '6', '11'], correctAnswer: 1 },
          { question: 'What operating mode is used to build angle in directional drilling?', options: ['Rotating Mode', 'Sliding Mode', 'Combined Mode', 'Static Mode'], correctAnswer: 1 },
          { question: 'Which motor type provides speeds up to 1500 RPM?', options: ['PDM', 'Turbine', 'Electric', 'Hydraulic'], correctAnswer: 1 },
          { question: 'What is Back Reaming?', options: ['Drilling forward', 'Rotating while pulling', 'Stopping rotation', 'Increasing WOB'], correctAnswer: 1 },
        ],
      },
    },
    {
      day: 7,
      type: 'project',
      content: {
        ar: {
          title: 'مشروع أنظمة الدوران',
          explanation: 'طبق ما تعلمته في هذا المشروع التطبيقي',
          keyTerms: [],
        },
        en: {
          title: 'Rotary Systems Project',
          explanation: 'Apply what you learned in this practical project',
          keyTerms: [],
        },
      },
      project: {
        ar: {
          title: 'مقارنة تفصيلية بين أنظمة الدوران',
          description: 'في هذا المشروع، ستقوم بإعداد تقرير مقارنة شامل بين نظام الطاولة الدوارة ونظام القيادة العلوية، مع حسابات للقدرة والعزم.',
          instructions: [
            'قارن بين نظام الطاولة الدوارة والقيادة العلوية من حيث: المكونات، آلية العمل، المميزات والعيوب، التكلفة، السلامة، والكفاءة',
            'لحالة حفر بعمق 15,000 قدم، احسب القدرة المطلوبة إذا كان العزم المتوقع 30,000 ft-lb وسرعة الدوران 80 RPM',
            'اشرح متى تفضل استخدام كل نظام ولماذا (أعط 3 سيناريوهات لكل نظام)',
            'اشرح كيف يُستخدم محرك قاع البئر في الحفر الموجه مع رسم توضيحي بسيط',
            'قدم توصياتك لجهاز حفر جديد: أي نظام تختار ولماذا؟',
          ],
          submissionType: 'text',
        },
        en: {
          title: 'Detailed Comparison of Rotary Systems',
          description: 'In this project, you will prepare a comprehensive comparison report between the rotary table system and top drive system, with power and torque calculations.',
          instructions: [
            'Compare rotary table and top drive systems in terms of: components, operating mechanism, advantages and disadvantages, cost, safety, and efficiency',
            'For a 15,000 ft well, calculate required power if expected torque is 30,000 ft-lb and rotation speed is 80 RPM',
            'Explain when you would prefer each system and why (give 3 scenarios for each system)',
            'Explain how downhole motor is used in directional drilling with a simple diagram',
            'Provide your recommendations for a new drilling rig: which system would you choose and why?',
          ],
          submissionType: 'text',
        },
      },
    },
  ],
};
