import { WeeklyLesson } from '../weeklyContent';

export const drillBitsAdvancedLesson: WeeklyLesson = {
  lessonId: 'drill-bits-advanced',
  days: [
    {
      day: 1,
      type: 'learning',
      content: {
        ar: {
          title: 'رؤوس الحفر المتقدمة - مقدمة وتصنيف رؤوس الحفر',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 مقدمة في رؤوس الحفر (Drill Bits)</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
رأس الحفر هو الأداة المعدنية الموجودة في أسفل سلسلة الحفر والمسؤولة مباشرة عن تفتيت وقطع الصخور لتكوين البئر. يُعتبر رأس الحفر أحد أهم العناصر في عملية الحفر، حيث يؤثر بشكل مباشر على معدل الاختراق (ROP)، وتكلفة الحفر، وجودة البئر. اختيار رأس الحفر المناسب يتطلب فهماً عميقاً لخصائص التكوينات الصخرية وظروف الحفر.
</p>

<div style="background: linear-gradient(135deg, #1e3a5f15, #f9731620); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #f97316;">
<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">📌 أهمية رأس الحفر</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>تفتيت وإزالة الصخور لتكوين ثقب البئر</li>
<li>تحديد معدل الاختراق (Rate of Penetration - ROP)</li>
<li>التأثير المباشر على تكلفة الحفر الإجمالية</li>
<li>ضمان استقرار جدران البئر</li>
<li>التكيف مع أنواع التكوينات الصخرية المختلفة</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 التصنيف الرئيسي لرؤوس الحفر</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
تُصنف رؤوس الحفر إلى فئتين رئيسيتين بناءً على آلية القطع وتصميمها:
</p>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">1️⃣ رؤوس الحفر الدوارة (Roller Cone Bits)</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
تتكون من مخاريط دوارة (عادة 2 أو 3 مخاريط) مثبتة على محاور تسمح لها بالدوران عند ملامسة قاع البئر. تعمل على مبدأ السحق والتكسير للصخور. تُستخدم في مجموعة واسعة من التكوينات من الناعمة إلى الصلبة للغاية.
</p>

<div style="background: #1e3a5f10; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<strong style="color: #1e3a5f;">أنواع رؤوس الحفر الدوارة:</strong>
<ul style="list-style-type: circle; padding-right: 1.5rem; margin-top: 0.5rem; line-height: 1.8;">
<li><strong>رؤوس الأسنان الفولاذية (Milled Tooth / Steel Tooth):</strong> أسنان مشكّلة من جسم المخروط، للتكوينات الناعمة</li>
<li><strong>رؤوس الأسنان الكربيدية (Tungsten Carbide Insert - TCI):</strong> أسنان من كربيد التنغستن مثبتة في المخروط، للتكوينات الصلبة</li>
</ul>
</div>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">2️⃣ رؤوس الحفر الثابتة (Fixed Cutter Bits)</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
لا تحتوي على أجزاء متحركة، وتعمل على مبدأ القص والحفر. تتميز بالمتانة العالية وعمر خدمة أطول. تشمل رؤوس PDC ورؤوس الماس الطبيعي والصناعي.
</p>

<div style="background: #1e3a5f10; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<strong style="color: #1e3a5f;">أنواع رؤوس الحفر الثابتة:</strong>
<ul style="list-style-type: circle; padding-right: 1.5rem; margin-top: 0.5rem; line-height: 1.8;">
<li><strong>رؤوس PDC (Polycrystalline Diamond Compact):</strong> الأكثر شيوعاً، تستخدم قواطع ماسية متعددة البلورات</li>
<li><strong>رؤوس الماس الطبيعي (Natural Diamond):</strong> للتكوينات شديدة الصلابة والكاشطة</li>
<li><strong>رؤوس TSP (Thermally Stable Polycrystalline):</strong> مقاومة للحرارة العالية</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 معايير اختيار رأس الحفر</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
يعتمد اختيار رأس الحفر المناسب على عدة عوامل حاسمة:
</p>

<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2; margin-bottom: 1rem;">
<li><strong>نوع التكوين الصخري:</strong> صلابة الصخور، قابلية التآكل، البنية الجيولوجية</li>
<li><strong>عمق البئر:</strong> ظروف الضغط والحرارة</li>
<li><strong>قطر البئر:</strong> الحجم المطلوب للرأس</li>
<li><strong>سائل الحفر:</strong> التوافق مع نوع سائل الحفر المستخدم</li>
<li><strong>التكلفة والاقتصاديات:</strong> الموازنة بين الأداء والتكلفة</li>
</ul>

<div style="background: #dc262615; padding: 1rem; border-radius: 8px; margin: 1rem 0; border-right: 4px solid #dc2626;">
<strong style="color: #dc2626;">⚠️ ملاحظة هامة:</strong>
<p style="margin-top: 0.5rem; line-height: 1.8;">
الاختيار الخاطئ لرأس الحفر قد يؤدي إلى: انخفاض معدل الاختراق، تآكل سريع، مشاكل في استقرار البئر، وزيادة كبيرة في التكاليف. لذلك يجب دراسة البيانات الجيولوجية والتجارب السابقة بعناية.
</p>
</div>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>رأس الحفر هو الأداة المسؤولة مباشرة عن تفتيت الصخور</li>
<li>التصنيف الرئيسي: رؤوس دوارة (Roller Cone) ورؤوس ثابتة (Fixed Cutter)</li>
<li>الرؤوس الدوارة تعمل بالسحق، والثابتة تعمل بالقص</li>
<li>اختيار الرأس يعتمد على التكوين الصخري وظروف الحفر</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'رأس الحفر (Drill Bit)', definition: 'الأداة المعدنية في نهاية سلسلة الحفر المسؤولة عن تفتيت الصخور' },
            { term: 'معدل الاختراق (ROP)', definition: 'Rate of Penetration - سرعة تقدم الحفر عبر الصخور، تُقاس بالقدم/الساعة' },
            { term: 'رؤوس دوارة (Roller Cone)', definition: 'رؤوس حفر تحتوي على مخاريط دوارة تسحق الصخور' },
            { term: 'رؤوس ثابتة (Fixed Cutter)', definition: 'رؤوس حفر بدون أجزاء متحركة تقص الصخور مباشرة' },
          ],
          practiceQuestion: {
            question: 'ما هو الفرق الأساسي بين رؤوس الحفر الدوارة والثابتة؟',
            options: ['الحجم فقط', 'آلية القطع - السحق مقابل القص', 'اللون', 'السعر فقط'],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Advanced Drill Bits - Introduction and Classification',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Introduction to Drill Bits</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
The drill bit is the metal tool at the bottom of the drill string directly responsible for breaking and cutting rock to form the wellbore. The drill bit is one of the most important elements in drilling operations, as it directly affects the Rate of Penetration (ROP), drilling costs, and well quality. Selecting the appropriate drill bit requires a deep understanding of rock formation characteristics and drilling conditions.
</p>

<div style="background: linear-gradient(135deg, #1e3a5f15, #f9731620); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #f97316;">
<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">📌 Importance of Drill Bits</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>Breaking and removing rock to form the wellbore</li>
<li>Determining Rate of Penetration (ROP)</li>
<li>Direct impact on overall drilling costs</li>
<li>Ensuring wellbore stability</li>
<li>Adapting to different rock formation types</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Main Classification of Drill Bits</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
Drill bits are classified into two main categories based on cutting mechanism and design:
</p>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">1️⃣ Roller Cone Bits</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
These consist of rotating cones (usually 2 or 3) mounted on bearings that allow them to rotate when contacting the wellbore bottom. They work on the principle of crushing and breaking rock. Used in a wide range of formations from soft to extremely hard.
</p>

<div style="background: #1e3a5f10; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<strong style="color: #1e3a5f;">Types of Roller Cone Bits:</strong>
<ul style="list-style-type: circle; padding-left: 1.5rem; margin-top: 0.5rem; line-height: 1.8;">
<li><strong>Milled Tooth / Steel Tooth:</strong> Teeth machined from the cone body, for soft formations</li>
<li><strong>Tungsten Carbide Insert (TCI):</strong> Tungsten carbide teeth inserted into the cone, for hard formations</li>
</ul>
</div>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">2️⃣ Fixed Cutter Bits</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
These contain no moving parts and work on the principle of shearing and scraping. They feature high durability and longer service life. They include PDC bits, natural diamond bits, and synthetic diamond bits.
</p>

<div style="background: #1e3a5f10; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<strong style="color: #1e3a5f;">Types of Fixed Cutter Bits:</strong>
<ul style="list-style-type: circle; padding-left: 1.5rem; margin-top: 0.5rem; line-height: 1.8;">
<li><strong>PDC (Polycrystalline Diamond Compact):</strong> Most common, uses polycrystalline diamond cutters</li>
<li><strong>Natural Diamond:</strong> For extremely hard and abrasive formations</li>
<li><strong>TSP (Thermally Stable Polycrystalline):</strong> Resistant to high temperatures</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Drill Bit Selection Criteria</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
Selecting the appropriate drill bit depends on several critical factors:
</p>

<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2; margin-bottom: 1rem;">
<li><strong>Rock Formation Type:</strong> Rock hardness, abrasiveness, geological structure</li>
<li><strong>Well Depth:</strong> Pressure and temperature conditions</li>
<li><strong>Wellbore Diameter:</strong> Required bit size</li>
<li><strong>Drilling Fluid:</strong> Compatibility with drilling fluid type</li>
<li><strong>Cost and Economics:</strong> Balancing performance and cost</li>
</ul>

<div style="background: #dc262615; padding: 1rem; border-radius: 8px; margin: 1rem 0; border-left: 4px solid #dc2626;">
<strong style="color: #dc2626;">⚠️ Important Note:</strong>
<p style="margin-top: 0.5rem; line-height: 1.8;">
Incorrect drill bit selection can lead to: decreased ROP, rapid wear, wellbore stability problems, and significant cost increases. Therefore, geological data and previous experience must be carefully studied.
</p>
</div>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>The drill bit is the tool directly responsible for breaking rock</li>
<li>Main classification: Roller Cone and Fixed Cutter bits</li>
<li>Roller cone bits crush rock; fixed cutter bits shear rock</li>
<li>Bit selection depends on rock formation and drilling conditions</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Drill Bit', definition: 'The metal tool at the end of the drill string responsible for breaking rock' },
            { term: 'ROP (Rate of Penetration)', definition: 'The speed of drilling progress through rock, measured in feet per hour' },
            { term: 'Roller Cone Bits', definition: 'Drill bits containing rotating cones that crush rock' },
            { term: 'Fixed Cutter Bits', definition: 'Drill bits without moving parts that shear rock directly' },
          ],
          practiceQuestion: {
            question: 'What is the fundamental difference between roller cone and fixed cutter bits?',
            options: ['Size only', 'Cutting mechanism - crushing vs shearing', 'Color', 'Price only'],
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
          title: 'رؤوس الحفر الدوارة - التصميم والمكونات',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 رؤوس الحفر الدوارة (Roller Cone Bits)</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
رؤوس الحفر الدوارة، والمعروفة أيضاً برؤوس Rock Bits أو Tri-Cone Bits، هي من أقدم أنواع رؤوس الحفر وأكثرها انتشاراً. تم اختراعها عام 1909 بواسطة Howard Hughes Sr. وأحدثت ثورة في صناعة الحفر. تتميز بتصميم فريد يتضمن مخاريط دوارة تسحق الصخور بكفاءة عالية.
</p>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 المكونات الرئيسية</h2>

<div style="background: linear-gradient(135deg, #1e3a5f15, #f9731620); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #f97316;">
<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">📌 أجزاء رأس الحفر الدوار</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li><strong>الجسم (Body):</strong> الجزء الرئيسي الذي يربط الرأس بسلسلة الحفر</li>
<li><strong>المخاريط (Cones):</strong> الأجزاء الدوارة التي تحمل عناصر القطع</li>
<li><strong>المحامل (Bearings):</strong> تسمح للمخاريط بالدوران بسلاسة</li>
<li><strong>عناصر القطع (Cutting Elements):</strong> الأسنان أو المداخل التي تفتت الصخور</li>
<li><strong>فوهات السائل (Nozzles):</strong> لتوجيه سائل الحفر نحو قاع البئر</li>
</ul>
</div>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">1️⃣ رؤوس الأسنان الفولاذية (Milled Tooth Bits)</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
تتكون الأسنان من نفس مادة المخروط (الفولاذ) ويتم تشكيلها بالقطع الآلي. تتميز بأسنان طويلة وحادة مصممة للتكوينات الناعمة إلى المتوسطة الصلابة.
</p>

<div style="background: #1e3a5f10; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<strong style="color: #1e3a5f;">خصائص رؤوس الأسنان الفولاذية:</strong>
<ul style="list-style-type: circle; padding-right: 1.5rem; margin-top: 0.5rem; line-height: 1.8;">
<li>أسنان طويلة ومتباعدة للتكوينات الناعمة</li>
<li>أسنان أقصر ومتقاربة للتكوينات الأكثر صلابة</li>
<li>تكلفة أقل مقارنة برؤوس TCI</li>
<li>معدل اختراق عالي في التكوينات المناسبة</li>
<li>عمر خدمة أقصر نسبياً</li>
</ul>
</div>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">2️⃣ رؤوس كربيد التنغستن (TCI Bits)</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
تحتوي على مداخل (Inserts) من كربيد التنغستن مثبتة في المخاريط. كربيد التنغستن مادة شديدة الصلابة تتحمل الضغوط العالية والتكوينات الكاشطة.
</p>

<div style="background: #1e3a5f10; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<strong style="color: #1e3a5f;">خصائص رؤوس TCI:</strong>
<ul style="list-style-type: circle; padding-right: 1.5rem; margin-top: 0.5rem; line-height: 1.8;">
<li>مداخل كروية أو إسفينية أو مخروطية الشكل</li>
<li>مقاومة عالية للتآكل والكشط</li>
<li>عمر خدمة أطول بكثير</li>
<li>مناسبة للتكوينات الصلبة والكاشطة</li>
<li>تكلفة أعلى لكن اقتصادية على المدى الطويل</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 أنظمة المحامل (Bearing Systems)</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
المحامل هي العنصر الحاسم في رؤوس الحفر الدوارة، وتحدد عمر الرأس وأدائه:
</p>

<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2; margin-bottom: 1rem;">
<li><strong>المحامل المفتوحة (Open Bearings):</strong> تُشحّم بسائل الحفر، أبسط وأرخص</li>
<li><strong>المحامل المغلقة (Sealed Bearings):</strong> مغلقة ومعبأة بالشحم، عمر أطول</li>
<li><strong>المحامل المحكمة (Journal Bearings):</strong> تصميم محسّن للأحمال الثقيلة</li>
</ul>

<div style="background: #dc262615; padding: 1rem; border-radius: 8px; margin: 1rem 0; border-right: 4px solid #dc2626;">
<strong style="color: #dc2626;">⚠️ تحذير:</strong>
<p style="margin-top: 0.5rem; line-height: 1.8;">
فشل المحامل هو السبب الأكثر شيوعاً لفشل رؤوس الحفر الدوارة. يجب مراقبة عزم الدوران والاهتزازات بعناية للكشف المبكر عن مشاكل المحامل.
</p>
</div>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>رؤوس الحفر الدوارة تتكون من مخاريط دوارة ومحامل وعناصر قطع</li>
<li>رؤوس الأسنان الفولاذية للتكوينات الناعمة، ورؤوس TCI للصلبة</li>
<li>المحامل حاسمة لعمر الرأس وقد تكون مفتوحة أو مغلقة</li>
<li>اختيار النوع يعتمد على صلابة التكوين وظروف الحفر</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'المخاريط (Cones)', definition: 'الأجزاء الدوارة في رأس الحفر التي تحمل عناصر القطع' },
            { term: 'أسنان فولاذية (Milled Tooth)', definition: 'أسنان مشكّلة من جسم المخروط للتكوينات الناعمة' },
            { term: 'كربيد التنغستن (TCI)', definition: 'مداخل صلبة جداً مثبتة في المخروط للتكوينات الصلبة' },
            { term: 'المحامل (Bearings)', definition: 'الأجزاء التي تسمح للمخاريط بالدوران بسلاسة' },
          ],
          practiceQuestion: {
            question: 'ما هو النوع الأنسب لحفر تكوين صخري صلب وكاشط؟',
            options: ['رأس أسنان فولاذية طويلة', 'رأس TCI بمداخل كربيد التنغستن', 'رأس PDC', 'أي نوع يعمل بنفس الكفاءة'],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Roller Cone Bits - Design and Components',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Roller Cone Bits</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
Roller cone bits, also known as Rock Bits or Tri-Cone Bits, are among the oldest and most widely used drill bit types. Invented in 1909 by Howard Hughes Sr., they revolutionized the drilling industry. They feature a unique design with rotating cones that efficiently crush rock.
</p>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Main Components</h2>

<div style="background: linear-gradient(135deg, #1e3a5f15, #f9731620); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #f97316;">
<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">📌 Roller Cone Bit Parts</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li><strong>Body:</strong> The main part connecting the bit to the drill string</li>
<li><strong>Cones:</strong> The rotating parts carrying cutting elements</li>
<li><strong>Bearings:</strong> Allow cones to rotate smoothly</li>
<li><strong>Cutting Elements:</strong> Teeth or inserts that break rock</li>
<li><strong>Nozzles:</strong> Direct drilling fluid toward the wellbore bottom</li>
</ul>
</div>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">1️⃣ Milled Tooth Bits</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
The teeth are made from the same material as the cone (steel) and are machined. They feature long, sharp teeth designed for soft to medium-hard formations.
</p>

<div style="background: #1e3a5f10; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<strong style="color: #1e3a5f;">Milled Tooth Bit Characteristics:</strong>
<ul style="list-style-type: circle; padding-left: 1.5rem; margin-top: 0.5rem; line-height: 1.8;">
<li>Long, widely spaced teeth for soft formations</li>
<li>Shorter, closer teeth for harder formations</li>
<li>Lower cost compared to TCI bits</li>
<li>High ROP in suitable formations</li>
<li>Relatively shorter service life</li>
</ul>
</div>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">2️⃣ Tungsten Carbide Insert (TCI) Bits</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
These contain tungsten carbide inserts fixed into the cones. Tungsten carbide is an extremely hard material that withstands high pressures and abrasive formations.
</p>

<div style="background: #1e3a5f10; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<strong style="color: #1e3a5f;">TCI Bit Characteristics:</strong>
<ul style="list-style-type: circle; padding-left: 1.5rem; margin-top: 0.5rem; line-height: 1.8;">
<li>Spherical, chisel, or conical shaped inserts</li>
<li>High resistance to wear and abrasion</li>
<li>Much longer service life</li>
<li>Suitable for hard and abrasive formations</li>
<li>Higher cost but economical long-term</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Bearing Systems</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
Bearings are critical components in roller cone bits, determining bit life and performance:
</p>

<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2; margin-bottom: 1rem;">
<li><strong>Open Bearings:</strong> Lubricated by drilling fluid, simpler and cheaper</li>
<li><strong>Sealed Bearings:</strong> Sealed and grease-packed, longer life</li>
<li><strong>Journal Bearings:</strong> Enhanced design for heavy loads</li>
</ul>

<div style="background: #dc262615; padding: 1rem; border-radius: 8px; margin: 1rem 0; border-left: 4px solid #dc2626;">
<strong style="color: #dc2626;">⚠️ Warning:</strong>
<p style="margin-top: 0.5rem; line-height: 1.8;">
Bearing failure is the most common cause of roller cone bit failure. Torque and vibrations must be carefully monitored for early detection of bearing problems.
</p>
</div>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>Roller cone bits consist of rotating cones, bearings, and cutting elements</li>
<li>Milled tooth bits for soft formations, TCI bits for hard formations</li>
<li>Bearings are critical and may be open or sealed</li>
<li>Type selection depends on formation hardness and drilling conditions</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Cones', definition: 'The rotating parts in the drill bit that carry cutting elements' },
            { term: 'Milled Tooth', definition: 'Teeth machined from the cone body for soft formations' },
            { term: 'TCI (Tungsten Carbide Insert)', definition: 'Very hard inserts fixed into the cone for hard formations' },
            { term: 'Bearings', definition: 'Parts that allow cones to rotate smoothly' },
          ],
          practiceQuestion: {
            question: 'What type is most suitable for drilling hard, abrasive rock formations?',
            options: ['Long steel tooth bit', 'TCI bit with tungsten carbide inserts', 'PDC bit', 'Any type works equally well'],
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
          title: 'رؤوس PDC - التصميم والتطبيقات',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 رؤوس PDC (Polycrystalline Diamond Compact)</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
رؤوس PDC هي الجيل الأحدث والأكثر تطوراً من رؤوس الحفر الثابتة. تستخدم قواطع ماسية متعددة البلورات (PDC Cutters) المصنعة بتقنية عالية الضغط والحرارة. أصبحت رؤوس PDC الخيار المفضل في معظم عمليات الحفر الحديثة بسبب كفاءتها العالية وعمرها الطويل.
</p>

<div style="background: linear-gradient(135deg, #1e3a5f15, #f9731620); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #f97316;">
<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">📌 مميزات رؤوس PDC</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>معدل اختراق (ROP) أعلى بكثير من الرؤوس الدوارة</li>
<li>لا توجد أجزاء متحركة - موثوقية أعلى</li>
<li>عمر خدمة أطول في التكوينات المناسبة</li>
<li>كفاءة استخدام الطاقة أعلى</li>
<li>جودة ثقب أفضل واستقرار أعلى</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 تركيب قاطع PDC</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
يتكون قاطع PDC من طبقتين رئيسيتين:
</p>

<div style="background: #1e3a5f10; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<ul style="list-style-type: circle; padding-right: 1.5rem; line-height: 2;">
<li><strong>الطبقة الماسية (Diamond Table):</strong> طبقة رقيقة من الماس متعدد البلورات، سمكها حوالي 0.5-2 مم</li>
<li><strong>القاعدة الكربيدية (Carbide Substrate):</strong> قاعدة من كربيد التنغستن توفر الدعم الميكانيكي</li>
</ul>
</div>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">آلية القطع في PDC</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
تعمل قواطع PDC على مبدأ <strong>القص (Shearing)</strong> حيث تقطع الصخور كما يقطع المقص الورق، وليس بالسحق مثل الرؤوس الدوارة. هذه الآلية أكثر كفاءة في استخدام الطاقة وتنتج فتاتاً صخرياً أكبر وأسهل للتنظيف.
</p>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 تصميم رأس PDC</h2>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">1️⃣ ملف القاطع (Cutter Profile)</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2; margin-bottom: 1rem;">
<li><strong>الملف المسطح (Flat Profile):</strong> للتكوينات الناعمة المتجانسة</li>
<li><strong>الملف الطويل المدبب (Long Parabolic):</strong> للتكوينات الناعمة إلى المتوسطة</li>
<li><strong>الملف المتوسط (Medium Profile):</strong> تصميم متعدد الاستخدامات</li>
<li><strong>الملف القصير (Short Parabolic):</strong> للتكوينات الصلبة</li>
</ul>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">2️⃣ ترتيب القواطع (Cutter Layout)</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
يتم ترتيب القواطع في شفرات (Blades) بأنماط هندسية محسوبة بدقة لضمان:
</p>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2; margin-bottom: 1rem;">
<li>تغطية كاملة لقاع البئر</li>
<li>توزيع متساوٍ للحمل على القواطع</li>
<li>تدفق سلس للفتات الصخري</li>
<li>تبريد فعال للقواطع</li>
</ul>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 التطبيقات والقيود</h2>

<div style="background: #10b98115; padding: 1rem; border-radius: 8px; margin: 1rem 0; border-right: 4px solid #10b981;">
<strong style="color: #10b981;">✅ التكوينات المناسبة:</strong>
<ul style="list-style-type: disc; padding-right: 1.5rem; margin-top: 0.5rem; line-height: 1.8;">
<li>الطفلة (Shale) والطين (Clay)</li>
<li>الحجر الرملي الناعم إلى المتوسط</li>
<li>الحجر الجيري الناعم</li>
<li>الأملاح (Evaporites)</li>
</ul>
</div>

<div style="background: #dc262615; padding: 1rem; border-radius: 8px; margin: 1rem 0; border-right: 4px solid #dc2626;">
<strong style="color: #dc2626;">❌ التكوينات الصعبة:</strong>
<ul style="list-style-type: disc; padding-right: 1.5rem; margin-top: 0.5rem; line-height: 1.8;">
<li>الحصى والتكوينات غير المتجانسة</li>
<li>التكوينات شديدة الكشط</li>
<li>التكوينات ذات التباين العالي في الصلابة</li>
<li>درجات الحرارة العالية جداً (أكثر من 250°C)</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>رؤوس PDC تستخدم قواطع ماسية متعددة البلورات</li>
<li>تعمل بآلية القص وليس السحق</li>
<li>لا توجد أجزاء متحركة مما يزيد الموثوقية</li>
<li>مناسبة للتكوينات الناعمة إلى المتوسطة</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'PDC (Polycrystalline Diamond Compact)', definition: 'قواطع ماسية متعددة البلورات مصنعة بتقنية عالية الضغط والحرارة' },
            { term: 'الطبقة الماسية (Diamond Table)', definition: 'الطبقة السطحية من الماس المتعدد البلورات في قاطع PDC' },
            { term: 'القص (Shearing)', definition: 'آلية قطع الصخور عن طريق القص وليس السحق' },
            { term: 'الشفرات (Blades)', definition: 'الأجزاء البارزة من رأس PDC التي تحمل القواطع' },
          ],
          practiceQuestion: {
            question: 'ما هي آلية القطع الرئيسية في رؤوس PDC؟',
            options: ['السحق والتكسير', 'القص والحفر', 'الطحن الدوار', 'الاهتزاز'],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'PDC Bits - Design and Applications',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 PDC Bits (Polycrystalline Diamond Compact)</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
PDC bits represent the latest and most advanced generation of fixed cutter bits. They use polycrystalline diamond compact cutters manufactured using high-pressure, high-temperature technology. PDC bits have become the preferred choice in most modern drilling operations due to their high efficiency and long life.
</p>

<div style="background: linear-gradient(135deg, #1e3a5f15, #f9731620); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #f97316;">
<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">📌 PDC Bit Advantages</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>Much higher ROP compared to roller cone bits</li>
<li>No moving parts - higher reliability</li>
<li>Longer service life in suitable formations</li>
<li>Higher energy efficiency</li>
<li>Better hole quality and stability</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 PDC Cutter Construction</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
A PDC cutter consists of two main layers:
</p>

<div style="background: #1e3a5f10; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<ul style="list-style-type: circle; padding-left: 1.5rem; line-height: 2;">
<li><strong>Diamond Table:</strong> A thin layer of polycrystalline diamond, approximately 0.5-2 mm thick</li>
<li><strong>Carbide Substrate:</strong> A tungsten carbide base providing mechanical support</li>
</ul>
</div>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">PDC Cutting Mechanism</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
PDC cutters work on the principle of <strong>shearing</strong>, cutting rock like scissors cut paper, not by crushing like roller cone bits. This mechanism is more energy-efficient and produces larger cuttings that are easier to clean.
</p>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 PDC Bit Design</h2>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">1️⃣ Cutter Profile</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2; margin-bottom: 1rem;">
<li><strong>Flat Profile:</strong> For homogeneous soft formations</li>
<li><strong>Long Parabolic:</strong> For soft to medium formations</li>
<li><strong>Medium Profile:</strong> Versatile design</li>
<li><strong>Short Parabolic:</strong> For hard formations</li>
</ul>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">2️⃣ Cutter Layout</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
Cutters are arranged on blades in precisely calculated geometric patterns to ensure:
</p>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2; margin-bottom: 1rem;">
<li>Complete coverage of the wellbore bottom</li>
<li>Even load distribution on cutters</li>
<li>Smooth cuttings flow</li>
<li>Effective cutter cooling</li>
</ul>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Applications and Limitations</h2>

<div style="background: #10b98115; padding: 1rem; border-radius: 8px; margin: 1rem 0; border-left: 4px solid #10b981;">
<strong style="color: #10b981;">✅ Suitable Formations:</strong>
<ul style="list-style-type: disc; padding-left: 1.5rem; margin-top: 0.5rem; line-height: 1.8;">
<li>Shale and Clay</li>
<li>Soft to medium sandstone</li>
<li>Soft limestone</li>
<li>Evaporites</li>
</ul>
</div>

<div style="background: #dc262615; padding: 1rem; border-radius: 8px; margin: 1rem 0; border-left: 4px solid #dc2626;">
<strong style="color: #dc2626;">❌ Challenging Formations:</strong>
<ul style="list-style-type: disc; padding-left: 1.5rem; margin-top: 0.5rem; line-height: 1.8;">
<li>Gravel and heterogeneous formations</li>
<li>Highly abrasive formations</li>
<li>Formations with high hardness variation</li>
<li>Very high temperatures (above 250°C)</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>PDC bits use polycrystalline diamond compact cutters</li>
<li>They work by shearing, not crushing</li>
<li>No moving parts increases reliability</li>
<li>Suitable for soft to medium formations</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'PDC (Polycrystalline Diamond Compact)', definition: 'Polycrystalline diamond cutters manufactured using high-pressure, high-temperature technology' },
            { term: 'Diamond Table', definition: 'The surface layer of polycrystalline diamond in a PDC cutter' },
            { term: 'Shearing', definition: 'Cutting mechanism that cuts rock by shearing rather than crushing' },
            { term: 'Blades', definition: 'Protruding parts of PDC bits that carry the cutters' },
          ],
          practiceQuestion: {
            question: 'What is the primary cutting mechanism in PDC bits?',
            options: ['Crushing and breaking', 'Shearing and scraping', 'Rotary grinding', 'Vibration'],
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
          title: 'نظام تصنيف IADC لرؤوس الحفر',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 نظام تصنيف IADC</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
نظام تصنيف IADC (International Association of Drilling Contractors) هو النظام المعياري العالمي لتصنيف رؤوس الحفر. يوفر هذا النظام لغة موحدة للتواصل بين مصنعي الرؤوس وشركات الحفر ومهندسي الحفر، مما يسهل اختيار ومقارنة رؤوس الحفر المختلفة.
</p>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 تصنيف IADC للرؤوس الدوارة</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
يتكون كود IADC للرؤوس الدوارة من <strong>4 أحرف/أرقام</strong>:
</p>

<div style="background: linear-gradient(135deg, #1e3a5f15, #f9731620); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #f97316;">
<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">📌 هيكل الكود (مثال: 5-1-7-G)</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li><strong>الرقم الأول (1-8):</strong> سلسلة التكوين - يحدد نوع التكوين الصخري</li>
<li><strong>الرقم الثاني (1-4):</strong> النوع/الدرجة - صلابة التكوين ضمن السلسلة</li>
<li><strong>الرقم الثالث (1-7):</strong> ميزات المحامل والمقياس</li>
<li><strong>الحرف الرابع:</strong> ميزات إضافية (اختياري)</li>
</ul>
</div>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">الرقم الأول - سلسلة التكوين:</h3>
<div style="background: #1e3a5f10; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<ul style="list-style-type: none; padding-right: 1rem; line-height: 2;">
<li><strong>1-3:</strong> رؤوس أسنان فولاذية (Milled Tooth)</li>
<li style="padding-right: 2rem;">• 1: تكوينات ناعمة جداً</li>
<li style="padding-right: 2rem;">• 2: تكوينات ناعمة إلى متوسطة</li>
<li style="padding-right: 2rem;">• 3: تكوينات متوسطة إلى صلبة</li>
<li><strong>4-8:</strong> رؤوس TCI (Tungsten Carbide Insert)</li>
<li style="padding-right: 2rem;">• 4: تكوينات ناعمة</li>
<li style="padding-right: 2rem;">• 5-6: تكوينات متوسطة</li>
<li style="padding-right: 2rem;">• 7-8: تكوينات صلبة جداً</li>
</ul>
</div>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">الرقم الثالث - المحامل والمقياس:</h3>
<div style="background: #1e3a5f10; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<ul style="list-style-type: none; padding-right: 1rem; line-height: 2;">
<li><strong>1:</strong> محامل قياسية، مقياس قياسي</li>
<li><strong>2:</strong> محامل هوائية للهواء</li>
<li><strong>3:</strong> محامل مغلقة بالشحم</li>
<li><strong>4:</strong> محامل مغلقة + حماية المقياس</li>
<li><strong>5:</strong> محامل محكمة مغلقة</li>
<li><strong>6:</strong> محامل محكمة + حماية المقياس</li>
<li><strong>7:</strong> محامل محكمة مغلقة + حماية المقياس المعززة</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 تصنيف IADC لرؤوس PDC</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
يتكون كود IADC لرؤوس الحفر الثابتة من <strong>4 أحرف</strong>:
</p>

<div style="background: linear-gradient(135deg, #1e3a5f15, #f9731620); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #f97316;">
<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">📌 هيكل كود PDC (مثال: M-4-3-3)</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li><strong>الحرف الأول:</strong> نوع جسم الرأس (M=Matrix, S=Steel)</li>
<li><strong>الرقم الثاني (1-9):</strong> الملف الشكلي وكثافة القواطع</li>
<li><strong>الرقم الثالث (1-4):</strong> نوع الهيدروليكا</li>
<li><strong>الرقم الرابع (0-9):</strong> حجم القواطع</li>
</ul>
</div>

<div style="background: #dc262615; padding: 1rem; border-radius: 8px; margin: 1rem 0; border-right: 4px solid #dc2626;">
<strong style="color: #dc2626;">⚠️ ملاحظة مهمة:</strong>
<p style="margin-top: 0.5rem; line-height: 1.8;">
كود IADC يوفر معلومات عامة عن الرأس، لكن المواصفات التفصيلية تختلف بين المصنعين. يجب دائماً الرجوع إلى كتالوج المصنع للحصول على المواصفات الدقيقة.
</p>
</div>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>نظام IADC هو المعيار العالمي لتصنيف رؤوس الحفر</li>
<li>كود الرؤوس الدوارة: 4 أرقام/أحرف تصف التكوين والمحامل</li>
<li>كود PDC: 4 أحرف/أرقام تصف الجسم والملف والهيدروليكا</li>
<li>الكود يسهل المقارنة واختيار الرأس المناسب</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'IADC', definition: 'International Association of Drilling Contractors - الجمعية الدولية لمقاولي الحفر' },
            { term: 'سلسلة التكوين (Series)', definition: 'الرقم الأول في كود IADC يحدد نوع التكوين الصخري' },
            { term: 'المحامل المغلقة (Sealed Bearings)', definition: 'محامل معزولة ومعبأة بالشحم لعمر أطول' },
            { term: 'جسم Matrix', definition: 'جسم رأس PDC مصنوع من مصفوفة كربيد التنغستن' },
          ],
          practiceQuestion: {
            question: 'في كود IADC للرؤوس الدوارة 5-2-7-G، ماذا يعني الرقم 5؟',
            options: ['عدد المخاريط', 'رأس TCI لتكوينات متوسطة', 'حجم الرأس', 'نوع المحامل'],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'IADC Classification System for Drill Bits',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 IADC Classification System</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
The IADC (International Association of Drilling Contractors) classification system is the global standard for classifying drill bits. This system provides a unified language for communication between bit manufacturers, drilling companies, and drilling engineers, facilitating the selection and comparison of different drill bits.
</p>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 IADC Classification for Roller Cone Bits</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
The IADC code for roller cone bits consists of <strong>4 characters/numbers</strong>:
</p>

<div style="background: linear-gradient(135deg, #1e3a5f15, #f9731620); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #f97316;">
<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">📌 Code Structure (Example: 5-1-7-G)</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li><strong>First Number (1-8):</strong> Formation Series - defines rock formation type</li>
<li><strong>Second Number (1-4):</strong> Type/Grade - formation hardness within series</li>
<li><strong>Third Number (1-7):</strong> Bearing and gauge features</li>
<li><strong>Fourth Letter:</strong> Additional features (optional)</li>
</ul>
</div>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">First Number - Formation Series:</h3>
<div style="background: #1e3a5f10; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<ul style="list-style-type: none; padding-left: 1rem; line-height: 2;">
<li><strong>1-3:</strong> Milled Tooth Bits</li>
<li style="padding-left: 2rem;">• 1: Very soft formations</li>
<li style="padding-left: 2rem;">• 2: Soft to medium formations</li>
<li style="padding-left: 2rem;">• 3: Medium to hard formations</li>
<li><strong>4-8:</strong> TCI Bits (Tungsten Carbide Insert)</li>
<li style="padding-left: 2rem;">• 4: Soft formations</li>
<li style="padding-left: 2rem;">• 5-6: Medium formations</li>
<li style="padding-left: 2rem;">• 7-8: Very hard formations</li>
</ul>
</div>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">Third Number - Bearings and Gauge:</h3>
<div style="background: #1e3a5f10; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<ul style="list-style-type: none; padding-left: 1rem; line-height: 2;">
<li><strong>1:</strong> Standard bearings, standard gauge</li>
<li><strong>2:</strong> Air bearings for air drilling</li>
<li><strong>3:</strong> Sealed grease bearings</li>
<li><strong>4:</strong> Sealed bearings + gauge protection</li>
<li><strong>5:</strong> Sealed journal bearings</li>
<li><strong>6:</strong> Journal bearings + gauge protection</li>
<li><strong>7:</strong> Sealed journal + enhanced gauge protection</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 IADC Classification for PDC Bits</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
The IADC code for fixed cutter bits consists of <strong>4 characters</strong>:
</p>

<div style="background: linear-gradient(135deg, #1e3a5f15, #f9731620); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #f97316;">
<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">📌 PDC Code Structure (Example: M-4-3-3)</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li><strong>First Letter:</strong> Body type (M=Matrix, S=Steel)</li>
<li><strong>Second Number (1-9):</strong> Profile and cutter density</li>
<li><strong>Third Number (1-4):</strong> Hydraulics type</li>
<li><strong>Fourth Number (0-9):</strong> Cutter size</li>
</ul>
</div>

<div style="background: #dc262615; padding: 1rem; border-radius: 8px; margin: 1rem 0; border-left: 4px solid #dc2626;">
<strong style="color: #dc2626;">⚠️ Important Note:</strong>
<p style="margin-top: 0.5rem; line-height: 1.8;">
The IADC code provides general information about the bit, but detailed specifications vary between manufacturers. Always refer to the manufacturer's catalog for exact specifications.
</p>
</div>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>IADC system is the global standard for drill bit classification</li>
<li>Roller cone code: 4 numbers/letters describing formation and bearings</li>
<li>PDC code: 4 characters describing body, profile, and hydraulics</li>
<li>The code facilitates comparison and appropriate bit selection</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'IADC', definition: 'International Association of Drilling Contractors - the global body setting drilling standards' },
            { term: 'Formation Series', definition: 'The first number in IADC code defining rock formation type' },
            { term: 'Sealed Bearings', definition: 'Isolated bearings packed with grease for longer life' },
            { term: 'Matrix Body', definition: 'PDC bit body made of tungsten carbide matrix' },
          ],
          practiceQuestion: {
            question: 'In the IADC roller cone code 5-2-7-G, what does the number 5 indicate?',
            options: ['Number of cones', 'TCI bit for medium formations', 'Bit size', 'Bearing type'],
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
          title: 'تقييم تآكل رؤوس الحفر وتحسين الأداء',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 تقييم تآكل رؤوس الحفر (Bit Grading)</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
تقييم تآكل رأس الحفر (Dull Grading) هو عملية منهجية لفحص وتوثيق حالة الرأس بعد استخراجه من البئر. يوفر هذا التقييم معلومات قيمة لتحسين اختيار الرؤوس المستقبلية وفهم ظروف الحفر الفعلية.
</p>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 نظام تقييم IADC للتآكل</h2>

<div style="background: linear-gradient(135deg, #1e3a5f15, #f9731620); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #f97316;">
<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">📌 هيكل كود التآكل (8 خانات)</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li><strong>I - الصف الداخلي (Inner):</strong> تآكل القواطع الداخلية (0-8)</li>
<li><strong>O - الصف الخارجي (Outer):</strong> تآكل القواطع الخارجية (0-8)</li>
<li><strong>D - خاصية التآكل (Dull):</strong> رمز يصف نوع التآكل الرئيسي</li>
<li><strong>L - الموقع (Location):</strong> مكان التآكل الأكثر حدة</li>
<li><strong>B - المحامل/الختم (Bearings):</strong> حالة المحامل (0-8 أو حرف)</li>
<li><strong>G - المقياس (Gauge):</strong> تآكل المقياس</li>
<li><strong>O - خاصية أخرى (Other):</strong> ميزة تآكل ثانوية</li>
<li><strong>R - السبب (Reason):</strong> سبب سحب الرأس</li>
</ul>
</div>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">أنواع التآكل الشائعة (Dull Characteristics):</h3>
<div style="background: #1e3a5f10; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<ul style="list-style-type: none; padding-right: 1rem; line-height: 2;">
<li><strong>BT:</strong> أسنان مكسورة (Broken Teeth)</li>
<li><strong>CT:</strong> أسنان متشققة (Chipped Teeth)</li>
<li><strong>ER:</strong> تآكل (Erosion)</li>
<li><strong>FC:</strong> قواطع مسطحة (Flat Cutters)</li>
<li><strong>LT:</strong> أسنان مفقودة (Lost Teeth)</li>
<li><strong>WT:</strong> أسنان متآكلة (Worn Teeth)</li>
<li><strong>RO:</strong> حلقة خارجية (Ring Out)</li>
<li><strong>NO:</strong> لا يوجد تآكل ملحوظ (No Dull)</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 أسباب سحب الرأس (Pull Reasons)</h2>

<div style="background: #1e3a5f10; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<ul style="list-style-type: none; padding-right: 1rem; line-height: 2;">
<li><strong>BHA:</strong> تغيير تجميعة قاع البئر</li>
<li><strong>DMF:</strong> فشل محرك قاع البئر</li>
<li><strong>DTF:</strong> فشل أداة قاع البئر</li>
<li><strong>HR:</strong> وصول ساعات التشغيل المحددة</li>
<li><strong>PP:</strong> انخفاض معدل الاختراق</li>
<li><strong>PR:</strong> معدل الاختراق</li>
<li><strong>TD:</strong> الوصول للعمق المستهدف</li>
<li><strong>TQ:</strong> مشاكل عزم الدوران</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 تحسين أداء رأس الحفر</h2>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">عوامل تحسين الأداء:</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2; margin-bottom: 1rem;">
<li><strong>الوزن على الرأس (WOB):</strong> ضبط الوزن الأمثل لكل نوع رأس وتكوين</li>
<li><strong>سرعة الدوران (RPM):</strong> التوازن بين ROP وعمر الرأس</li>
<li><strong>الهيدروليكا:</strong> تدفق كافٍ لتبريد وتنظيف الرأس</li>
<li><strong>خصائص سائل الحفر:</strong> اللزوجة والكثافة المناسبة</li>
</ul>

<div style="background: #dc262615; padding: 1rem; border-radius: 8px; margin: 1rem 0; border-right: 4px solid #dc2626;">
<strong style="color: #dc2626;">⚠️ علامات تحذيرية أثناء الحفر:</strong>
<ul style="list-style-type: disc; padding-right: 1.5rem; margin-top: 0.5rem; line-height: 1.8;">
<li>انخفاض مفاجئ في معدل الاختراق</li>
<li>زيادة غير طبيعية في عزم الدوران</li>
<li>اهتزازات غير عادية</li>
<li>تغير في ضغط الضخ</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>تقييم التآكل يوفر معلومات لتحسين الاختيار المستقبلي</li>
<li>نظام IADC يستخدم 8 خانات لتوثيق حالة الرأس</li>
<li>تحسين الأداء يتطلب ضبط WOB وRPM والهيدروليكا</li>
<li>مراقبة العلامات التحذيرية تمنع الأضرار الكبيرة</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'تقييم التآكل (Dull Grading)', definition: 'عملية فحص وتوثيق حالة رأس الحفر بعد الاستخراج' },
            { term: 'الصف الداخلي/الخارجي (I/O)', definition: 'مقياس تآكل القواطع من 0 (جديد) إلى 8 (تالف تماماً)' },
            { term: 'معدل الاختراق (ROP)', definition: 'Rate of Penetration - سرعة تقدم الحفر' },
            { term: 'الوزن على الرأس (WOB)', definition: 'Weight on Bit - القوة المطبقة على رأس الحفر' },
          ],
          practiceQuestion: {
            question: 'ماذا يعني الرمز PP في أسباب سحب الرأس؟',
            options: ['ضغط الضخ', 'انخفاض معدل الاختراق', 'مشكلة في المضخة', 'الوصول للعمق'],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Drill Bit Wear Evaluation and Performance Optimization',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Drill Bit Wear Evaluation (Bit Grading)</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
Dull bit grading is a systematic process for inspecting and documenting the bit condition after retrieval from the wellbore. This evaluation provides valuable information for improving future bit selection and understanding actual drilling conditions.
</p>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 IADC Dull Grading System</h2>

<div style="background: linear-gradient(135deg, #1e3a5f15, #f9731620); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #f97316;">
<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">📌 Dull Code Structure (8 Fields)</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li><strong>I - Inner:</strong> Inner cutter wear (0-8)</li>
<li><strong>O - Outer:</strong> Outer cutter wear (0-8)</li>
<li><strong>D - Dull Characteristic:</strong> Code describing main wear type</li>
<li><strong>L - Location:</strong> Location of most severe wear</li>
<li><strong>B - Bearings/Seals:</strong> Bearing condition (0-8 or letter)</li>
<li><strong>G - Gauge:</strong> Gauge wear</li>
<li><strong>O - Other:</strong> Secondary wear feature</li>
<li><strong>R - Reason:</strong> Reason for pulling bit</li>
</ul>
</div>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">Common Dull Characteristics:</h3>
<div style="background: #1e3a5f10; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<ul style="list-style-type: none; padding-left: 1rem; line-height: 2;">
<li><strong>BT:</strong> Broken Teeth</li>
<li><strong>CT:</strong> Chipped Teeth</li>
<li><strong>ER:</strong> Erosion</li>
<li><strong>FC:</strong> Flat Cutters</li>
<li><strong>LT:</strong> Lost Teeth</li>
<li><strong>WT:</strong> Worn Teeth</li>
<li><strong>RO:</strong> Ring Out</li>
<li><strong>NO:</strong> No Dull</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Pull Reasons</h2>

<div style="background: #1e3a5f10; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<ul style="list-style-type: none; padding-left: 1rem; line-height: 2;">
<li><strong>BHA:</strong> Bottom Hole Assembly change</li>
<li><strong>DMF:</strong> Downhole Motor Failure</li>
<li><strong>DTF:</strong> Downhole Tool Failure</li>
<li><strong>HR:</strong> Hours Reached</li>
<li><strong>PP:</strong> Pump Pressure (penetration rate drop)</li>
<li><strong>PR:</strong> Penetration Rate</li>
<li><strong>TD:</strong> Total Depth reached</li>
<li><strong>TQ:</strong> Torque issues</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Bit Performance Optimization</h2>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">Performance Optimization Factors:</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2; margin-bottom: 1rem;">
<li><strong>Weight on Bit (WOB):</strong> Optimal weight for each bit type and formation</li>
<li><strong>Rotary Speed (RPM):</strong> Balance between ROP and bit life</li>
<li><strong>Hydraulics:</strong> Sufficient flow for cooling and cleaning</li>
<li><strong>Drilling Fluid Properties:</strong> Appropriate viscosity and density</li>
</ul>

<div style="background: #dc262615; padding: 1rem; border-radius: 8px; margin: 1rem 0; border-left: 4px solid #dc2626;">
<strong style="color: #dc2626;">⚠️ Warning Signs During Drilling:</strong>
<ul style="list-style-type: disc; padding-left: 1.5rem; margin-top: 0.5rem; line-height: 1.8;">
<li>Sudden drop in penetration rate</li>
<li>Abnormal increase in torque</li>
<li>Unusual vibrations</li>
<li>Change in pump pressure</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>Dull grading provides information to improve future selection</li>
<li>IADC system uses 8 fields to document bit condition</li>
<li>Performance optimization requires adjusting WOB, RPM, and hydraulics</li>
<li>Monitoring warning signs prevents major damage</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Dull Grading', definition: 'Process of inspecting and documenting bit condition after retrieval' },
            { term: 'Inner/Outer (I/O)', definition: 'Cutter wear scale from 0 (new) to 8 (completely worn)' },
            { term: 'ROP (Rate of Penetration)', definition: 'Drilling progress speed, measured in feet per hour' },
            { term: 'WOB (Weight on Bit)', definition: 'The force applied to the drill bit' },
          ],
          practiceQuestion: {
            question: 'What does the code PP mean in bit pull reasons?',
            options: ['Pump Pressure', 'Poor Penetration rate', 'Pump Problem', 'Planned Pull'],
            correctAnswer: 1,
          },
        },
      },
    },
    {
      day: 6,
      type: 'quiz',
      quiz: [
        {
          question: { ar: 'ما هو التصنيف الرئيسي لرؤوس الحفر؟', en: 'What is the main classification of drill bits?' },
          options: { ar: ['دوارة وثابتة', 'صغيرة وكبيرة', 'فولاذية وبلاستيكية', 'يدوية وآلية'], en: ['Roller cone and fixed cutter', 'Small and large', 'Steel and plastic', 'Manual and automatic'] },
          correctAnswer: 0,
        },
        {
          question: { ar: 'ما هي آلية عمل رؤوس الحفر الدوارة؟', en: 'What is the working mechanism of roller cone bits?' },
          options: { ar: ['القص', 'السحق والتكسير', 'الاهتزاز', 'الليزر'], en: ['Shearing', 'Crushing and breaking', 'Vibration', 'Laser'] },
          correctAnswer: 1,
        },
        {
          question: { ar: 'ما هو نوع الرأس المناسب للتكوينات الصلبة جداً؟', en: 'What type of bit is suitable for very hard formations?' },
          options: { ar: ['أسنان فولاذية طويلة', 'TCI بمداخل كربيد التنغستن', 'PDC', 'أسنان بلاستيكية'], en: ['Long steel teeth', 'TCI with tungsten carbide inserts', 'PDC', 'Plastic teeth'] },
          correctAnswer: 1,
        },
        {
          question: { ar: 'ما الذي يميز رؤوس PDC عن الرؤوس الدوارة؟', en: 'What distinguishes PDC bits from roller cone bits?' },
          options: { ar: ['أرخص ثمناً', 'لا توجد أجزاء متحركة', 'أكبر حجماً', 'أثقل وزناً'], en: ['Cheaper', 'No moving parts', 'Larger size', 'Heavier weight'] },
          correctAnswer: 1,
        },
        {
          question: { ar: 'ما هي آلية القطع في رؤوس PDC؟', en: 'What is the cutting mechanism in PDC bits?' },
          options: { ar: ['السحق', 'القص', 'الطحن', 'التفجير'], en: ['Crushing', 'Shearing', 'Grinding', 'Blasting'] },
          correctAnswer: 1,
        },
        {
          question: { ar: 'في كود IADC للرؤوس الدوارة، ماذا تعني الأرقام 1-3 في الخانة الأولى؟', en: 'In IADC roller cone code, what do numbers 1-3 in the first position indicate?' },
          options: { ar: ['رؤوس TCI', 'رؤوس أسنان فولاذية', 'رؤوس PDC', 'رؤوس ماسية'], en: ['TCI bits', 'Milled tooth bits', 'PDC bits', 'Diamond bits'] },
          correctAnswer: 1,
        },
        {
          question: { ar: 'ما هو العنصر الأكثر عرضة للفشل في رؤوس الحفر الدوارة؟', en: 'What is the most failure-prone element in roller cone bits?' },
          options: { ar: ['الجسم', 'المحامل', 'الفوهات', 'الوصلة'], en: ['Body', 'Bearings', 'Nozzles', 'Connection'] },
          correctAnswer: 1,
        },
        {
          question: { ar: 'ماذا يعني مقياس التآكل 8 في نظام IADC؟', en: 'What does a wear grade of 8 mean in the IADC system?' },
          options: { ar: ['جديد تماماً', 'تآكل خفيف', 'تآكل متوسط', 'تالف تماماً'], en: ['Brand new', 'Light wear', 'Medium wear', 'Completely worn'] },
          correctAnswer: 3,
        },
        {
          question: { ar: 'أي من التالي ليس من عوامل تحسين أداء رأس الحفر؟', en: 'Which of the following is NOT a bit performance optimization factor?' },
          options: { ar: ['الوزن على الرأس', 'سرعة الدوران', 'لون الرأس', 'الهيدروليكا'], en: ['Weight on Bit', 'Rotary Speed', 'Bit Color', 'Hydraulics'] },
          correctAnswer: 2,
        },
        {
          question: { ar: 'ما هو الحرف الأول في كود IADC لرأس PDC بجسم Matrix؟', en: 'What is the first letter in IADC code for a Matrix body PDC bit?' },
          options: { ar: ['S', 'M', 'P', 'D'], en: ['S', 'M', 'P', 'D'] },
          correctAnswer: 1,
        },
      ],
    },
    {
      day: 7,
      type: 'project',
      project: {
        ar: {
          title: 'مشروع الأسبوع - تحليل واختيار رأس الحفر',
          description: 'قم بإعداد تقرير تحليلي لاختيار رأس الحفر المناسب لبئر استكشافي بتكوينات متنوعة.',
          instructions: [
            'اختر نوع رأس الحفر المناسب لكل قسم (0-500م طين ناعم، 500-1500م حجر رملي متوسط، 1500-2500م حجر جيري صلب)',
            'حدد كود IADC المتوقع لكل رأس',
            'اقترح معاملات الحفر الأولية (WOB, RPM) لكل قسم',
            'حدد العلامات التحذيرية التي يجب مراقبتها',
          ],
          submissionType: 'both',
        },
        en: {
          title: 'Weekly Project - Drill Bit Analysis and Selection',
          description: 'Prepare an analytical report for selecting the appropriate drill bit for an exploration well with varied formations.',
          instructions: [
            'Select appropriate drill bit type for each section (0-500m soft clay, 500-1500m medium sandstone, 1500-2500m hard limestone)',
            'Specify expected IADC code for each bit',
            'Suggest initial drilling parameters (WOB, RPM) for each section',
            'Identify warning signs to monitor',
          ],
          submissionType: 'both',
        },
      },
    },
  ],
};
