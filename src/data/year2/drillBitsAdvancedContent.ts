import { WeeklyLesson } from '../weeklyContent';

export const drillBitsAdvancedLesson: WeeklyLesson = {
  lessonId: 'drill-bits-advanced',
  days: [
    {
      day: 1,
      type: 'learning',
      content: {
        ar: {
          title: 'رؤوس الحفر المتقدمة - مقدمة وتصنيف شامل',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 مقدمة في رؤوس الحفر المتقدمة (Advanced Drill Bits)</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
رأس الحفر (Drill Bit) هو العنصر الأهم في عملية الحفر، فهو الأداة التي تتلامس مباشرة مع التكوين الصخري وتقوم بتفتيته. يُعد اختيار رأس الحفر المناسب من أهم القرارات الهندسية التي تؤثر بشكل مباشر على كفاءة الحفر، التكلفة، وجودة البئر.
</p>

<div style="background: linear-gradient(135deg, #1e3a5f15, #f9731620); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #f97316;">
<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">📌 أهمية رأس الحفر في العملية</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>تفتيت الصخور وإنشاء البئر</li>
<li>التأثير المباشر على معدل الاختراق (ROP)</li>
<li>تحديد تكلفة الحفر الإجمالية</li>
<li>التأثير على استقرار جدار البئر</li>
<li>التحكم في جودة الحفرة</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 التصنيف الرئيسي لرؤوس الحفر</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
تُصنف رؤوس الحفر إلى مجموعتين رئيسيتين بناءً على آلية العمل:
</p>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">1️⃣ رؤوس الحفر الدوارة (Roller Cone Bits)</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
تُعرف أيضاً برؤوس Rock Bits أو Tricone Bits. تتكون من مخاريط دوارة (عادة 3 مخاريط) مثبتة على محامل، تدور أثناء دوران رأس الحفر وتُفتت الصخور بالسحق والتقشير.
</p>

<div style="background: #1e3a5f10; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<strong style="color: #1e3a5f;">أنواع رؤوس Roller Cone:</strong>
<ul style="list-style-type: circle; padding-right: 1.5rem; margin-top: 0.5rem; line-height: 1.8;">
<li><strong>رؤوس الأسنان الفولاذية (Milled Tooth):</strong> للتكوينات اللينة والمتوسطة</li>
<li><strong>رؤوس الإدخالات (Insert/TCI):</strong> للتكوينات الصلبة والكاشطة</li>
</ul>
</div>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">2️⃣ رؤوس الحفر الثابتة (Fixed Cutter Bits)</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
تُعرف أيضاً برؤوس Drag Bits. لا تحتوي على أجزاء متحركة، وتقوم بتفتيت الصخور عن طريق القص والحلق.
</p>

<div style="background: #10b98115; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<strong style="color: #10b981;">أنواع رؤوس Fixed Cutter:</strong>
<ul style="list-style-type: circle; padding-right: 1.5rem; margin-top: 0.5rem; line-height: 1.8;">
<li><strong>رؤوس PDC (Polycrystalline Diamond Compact):</strong> الأكثر استخداماً حالياً</li>
<li><strong>رؤوس الماس الطبيعي (Natural Diamond):</strong> للتكوينات شديدة الصلابة</li>
<li><strong>رؤوس TSP (Thermally Stable Polycrystalline):</strong> للحرارات العالية</li>
<li><strong>رؤوس Impregnated:</strong> للتكوينات الصلبة جداً والكاشطة</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 نظام تصنيف IADC</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
وضعت الجمعية الدولية لمقاولي الحفر (IADC) نظام تصنيف موحد لرؤوس الحفر يتكون من 4 خانات:
</p>

<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<strong style="color: #1e3a5f;">لرؤوس Roller Cone (مثال: 5-1-7):</strong>
<ul style="list-style-type: none; padding-right: 1rem; margin-top: 0.5rem; line-height: 2;">
<li>• <strong>الخانة الأولى (1-8):</strong> نوع التكوين (1-3 للأسنان الفولاذية، 4-8 للإدخالات)</li>
<li>• <strong>الخانة الثانية (1-4):</strong> صلابة التكوين ضمن المجموعة</li>
<li>• <strong>الخانة الثالثة (1-7):</strong> خصائص تصميم المحامل والقياس</li>
<li>• <strong>الخانة الرابعة (حروف):</strong> مميزات إضافية</li>
</ul>
</div>

<div style="background: #f9731615; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<strong style="color: #f97316;">لرؤوس Fixed Cutter (مثال: M-4-2-2):</strong>
<ul style="list-style-type: none; padding-right: 1rem; margin-top: 0.5rem; line-height: 2;">
<li>• <strong>الخانة الأولى (حرف):</strong> نوع جسم الرأس (S=فولاذ، M=مصفوفة)</li>
<li>• <strong>الخانة الثانية (1-9):</strong> كثافة القواطع</li>
<li>• <strong>الخانة الثالثة (1-4):</strong> حجم القواطع</li>
<li>• <strong>الخانة الرابعة (1-4):</strong> شكل الوجه</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>رأس الحفر هو العنصر الأهم في تفتيت الصخور</li>
<li>نوعان رئيسيان: Roller Cone (دوارة) و Fixed Cutter (ثابتة)</li>
<li>نظام IADC يوفر تصنيفاً موحداً عالمياً</li>
<li>اختيار الرأس يعتمد على نوع التكوين الصخري</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'رأس الحفر (Drill Bit)', definition: 'الأداة التي تتلامس مع التكوين الصخري وتفتته لإنشاء البئر' },
            { term: 'رؤوس Roller Cone', definition: 'رؤوس حفر ذات مخاريط دوارة تفتت الصخر بالسحق' },
            { term: 'رؤوس Fixed Cutter', definition: 'رؤوس حفر ثابتة بدون أجزاء متحركة تقص الصخر' },
            { term: 'تصنيف IADC', definition: 'نظام تصنيف دولي موحد لرؤوس الحفر' },
          ],
          practiceQuestion: {
            question: 'ما هو النوع الرئيسي لرؤوس الحفر التي تحتوي على مخاريط دوارة؟',
            options: ['PDC Bits', 'Roller Cone Bits', 'Diamond Bits', 'Impregnated Bits'],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Advanced Drill Bits - Introduction and Comprehensive Classification',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Introduction to Advanced Drill Bits</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
The drill bit is the most important element in the drilling operation, as it is the tool that directly contacts the rock formation and breaks it up. Selecting the appropriate drill bit is one of the most critical engineering decisions that directly affects drilling efficiency, cost, and well quality.
</p>

<div style="background: linear-gradient(135deg, #1e3a5f15, #f9731620); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #f97316;">
<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">📌 Importance of Drill Bit in Operations</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>Breaking up rocks and creating the wellbore</li>
<li>Direct impact on Rate of Penetration (ROP)</li>
<li>Determining overall drilling cost</li>
<li>Affecting wellbore stability</li>
<li>Controlling hole quality</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Main Classification of Drill Bits</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
Drill bits are classified into two main groups based on their operating mechanism:
</p>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">1️⃣ Roller Cone Bits</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
Also known as Rock Bits or Tricone Bits. They consist of rotating cones (usually 3 cones) mounted on bearings that rotate as the bit turns, breaking rocks through crushing and gouging.
</p>

<div style="background: #1e3a5f10; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<strong style="color: #1e3a5f;">Types of Roller Cone Bits:</strong>
<ul style="list-style-type: circle; padding-left: 1.5rem; margin-top: 0.5rem; line-height: 1.8;">
<li><strong>Milled Tooth Bits:</strong> For soft to medium formations</li>
<li><strong>Insert/TCI Bits:</strong> For hard and abrasive formations</li>
</ul>
</div>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">2️⃣ Fixed Cutter Bits</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
Also known as Drag Bits. They have no moving parts and break rocks through shearing and scraping action.
</p>

<div style="background: #10b98115; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<strong style="color: #10b981;">Types of Fixed Cutter Bits:</strong>
<ul style="list-style-type: circle; padding-left: 1.5rem; margin-top: 0.5rem; line-height: 1.8;">
<li><strong>PDC (Polycrystalline Diamond Compact):</strong> Most commonly used today</li>
<li><strong>Natural Diamond Bits:</strong> For extremely hard formations</li>
<li><strong>TSP (Thermally Stable Polycrystalline):</strong> For high temperatures</li>
<li><strong>Impregnated Bits:</strong> For very hard and abrasive formations</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 IADC Classification System</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
The International Association of Drilling Contractors (IADC) established a standardized classification system for drill bits consisting of 4 characters:
</p>

<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<strong style="color: #1e3a5f;">For Roller Cone Bits (Example: 5-1-7):</strong>
<ul style="list-style-type: none; padding-left: 1rem; margin-top: 0.5rem; line-height: 2;">
<li>• <strong>First Character (1-8):</strong> Formation type (1-3 for milled tooth, 4-8 for inserts)</li>
<li>• <strong>Second Character (1-4):</strong> Formation hardness within group</li>
<li>• <strong>Third Character (1-7):</strong> Bearing and gauge design features</li>
<li>• <strong>Fourth Character (letters):</strong> Additional features</li>
</ul>
</div>

<div style="background: #f9731615; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<strong style="color: #f97316;">For Fixed Cutter Bits (Example: M-4-2-2):</strong>
<ul style="list-style-type: none; padding-left: 1rem; margin-top: 0.5rem; line-height: 2;">
<li>• <strong>First Character (letter):</strong> Body type (S=steel, M=matrix)</li>
<li>• <strong>Second Character (1-9):</strong> Cutter density</li>
<li>• <strong>Third Character (1-4):</strong> Cutter size</li>
<li>• <strong>Fourth Character (1-4):</strong> Face profile</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>The drill bit is the most important element in rock breaking</li>
<li>Two main types: Roller Cone and Fixed Cutter</li>
<li>IADC system provides unified global classification</li>
<li>Bit selection depends on rock formation type</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Drill Bit', definition: 'Tool that contacts rock formation and breaks it to create the wellbore' },
            { term: 'Roller Cone Bits', definition: 'Drill bits with rotating cones that crush rock' },
            { term: 'Fixed Cutter Bits', definition: 'Stationary drill bits with no moving parts that shear rock' },
            { term: 'IADC Classification', definition: 'International standardized classification system for drill bits' },
          ],
          practiceQuestion: {
            question: 'What is the main type of drill bits that contain rotating cones?',
            options: ['PDC Bits', 'Roller Cone Bits', 'Diamond Bits', 'Impregnated Bits'],
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
          title: 'رؤوس Roller Cone - التصميم والأنواع',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 رؤوس Roller Cone بالتفصيل</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
رؤوس Roller Cone هي أقدم أنواع رؤوس الحفر الحديثة، اخترعها Howard Hughes Sr. عام 1909. تتميز بوجود مخاريط دوارة (عادة 3) تدور على محامل أثناء دوران الرأس، مما يُنتج حركة تدحرج وانزلاق تُفتت الصخر.
</p>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 مكونات رأس Roller Cone</h2>

<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #1e3a5f; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">المكونات الرئيسية:</h3>
<ul style="list-style-type: none; padding-right: 1rem; line-height: 2.2;">
<li>🔹 <strong>الجسم (Body):</strong> يحمل المخاريط ويوفر الوصلة اللولبية</li>
<li>🔹 <strong>المخاريط (Cones):</strong> 3 مخاريط دوارة تحمل الأسنان/الإدخالات</li>
<li>🔹 <strong>المحامل (Bearings):</strong> تسمح بدوران المخاريط بسلاسة</li>
<li>🔹 <strong>الأسنان/الإدخالات (Teeth/Inserts):</strong> عناصر القطع الفعلية</li>
<li>🔹 <strong>فوهات الطرد (Nozzles):</strong> لتوجيه سائل الحفر</li>
<li>🔹 <strong>نظام الإحكام (Seal System):</strong> لحماية المحامل</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 أنواع رؤوس Roller Cone</h2>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">1️⃣ رؤوس الأسنان الفولاذية (Milled Tooth Bits)</h3>

<div style="background: linear-gradient(135deg, #1e3a5f15, #f9731620); padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border-right: 4px solid #f97316;">
<p style="margin-bottom: 1rem; line-height: 1.8;">
تُصنع الأسنان من جسم المخروط نفسه (فولاذ) بالتشغيل الآلي. مناسبة للتكوينات اللينة إلى المتوسطة الصلابة.
</p>
<strong style="color: #1e3a5f;">الخصائص:</strong>
<ul style="list-style-type: disc; padding-right: 1.5rem; margin-top: 0.5rem; line-height: 1.8;">
<li>أسنان طويلة ومتباعدة للتكوينات اللينة</li>
<li>أسنان قصيرة ومتقاربة للتكوينات الأصلب</li>
<li>عزم دوران عالي مطلوب</li>
<li>ROP عالي في التكوينات المناسبة</li>
<li>تكلفة أقل من Insert Bits</li>
</ul>
</div>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">2️⃣ رؤوس الإدخالات (Insert/TCI Bits)</h3>

<div style="background: #10b98115; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<p style="margin-bottom: 1rem; line-height: 1.8;">
TCI = Tungsten Carbide Insert. تُضغط إدخالات من كربيد التنغستن في ثقوب مُعدة في المخاريط. مناسبة للتكوينات الصلبة والكاشطة.
</p>
<strong style="color: #10b981;">الخصائص:</strong>
<ul style="list-style-type: disc; padding-right: 1.5rem; margin-top: 0.5rem; line-height: 1.8;">
<li>مقاومة تآكل أعلى بكثير</li>
<li>عمر أطول في التكوينات الصلبة</li>
<li>إدخالات بأشكال مختلفة حسب التطبيق</li>
<li>تكلفة أعلى لكن أداء أفضل</li>
<li>مناسبة للأعماق الكبيرة</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 أنظمة المحامل (Bearing Systems)</h2>

<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #1e3a5f; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">أنواع المحامل:</h3>
<ul style="list-style-type: none; padding-right: 1rem; line-height: 2.2;">
<li>🔹 <strong>محامل مفتوحة (Non-sealed):</strong> بسيطة، تُبرد بسائل الحفر، عمر قصير</li>
<li>🔹 <strong>محامل محكمة (Sealed):</strong> محمية بأختام، شحم داخلي، عمر أطول</li>
<li>🔹 <strong>محامل Journal:</strong> للتكوينات الصلبة، قدرة تحميل عالية</li>
<li>🔹 <strong>محامل Roller:</strong> للتكوينات اللينة، سرعات عالية</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 هندسة المخروط (Cone Geometry)</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
زاوية المخروط وإزاحته عن مركز الرأس تؤثران على آلية الحفر:
</p>

<div style="background: #f9731615; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<ul style="list-style-type: none; padding-right: 1rem; line-height: 2.2;">
<li>📐 <strong>إزاحة صفرية (No Offset):</strong> حركة تدحرج نقية، للتكوينات الصلبة</li>
<li>📐 <strong>إزاحة كبيرة (High Offset):</strong> حركة انزلاق وحلق، للتكوينات اللينة</li>
<li>📐 <strong>Oversize:</strong> حفر أكبر من القطر الاسمي</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>رؤوس Roller Cone تتكون من مخاريط دوارة على محامل</li>
<li>نوعان: Milled Tooth (للّين) و Insert/TCI (للصلب)</li>
<li>المحامل المحكمة توفر عمراً أطول</li>
<li>هندسة المخروط تحدد آلية التفتيت</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Milled Tooth Bits', definition: 'رؤوس بأسنان فولاذية مُشغلة من جسم المخروط للتكوينات اللينة' },
            { term: 'TCI (Tungsten Carbide Insert)', definition: 'رؤوس بإدخالات كربيد التنغستن للتكوينات الصلبة' },
            { term: 'محامل محكمة (Sealed Bearings)', definition: 'محامل محمية بأختام وشحم داخلي لعمر أطول' },
            { term: 'إزاحة المخروط (Cone Offset)', definition: 'إزاحة محور المخروط عن مركز الرأس للتحكم في آلية الحفر' },
          ],
          practiceQuestion: {
            question: 'أي نوع من رؤوس Roller Cone مناسب للتكوينات الصلبة والكاشطة؟',
            options: ['Milled Tooth', 'Insert/TCI', 'Non-sealed', 'High Offset'],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Roller Cone Bits - Design and Types',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Roller Cone Bits in Detail</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
Roller Cone bits are the oldest type of modern drill bits, invented by Howard Hughes Sr. in 1909. They feature rotating cones (usually 3) that spin on bearings as the bit rotates, producing rolling and sliding motion that breaks up rock.
</p>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Roller Cone Bit Components</h2>

<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #1e3a5f; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">Main Components:</h3>
<ul style="list-style-type: none; padding-left: 1rem; line-height: 2.2;">
<li>🔹 <strong>Body:</strong> Holds cones and provides threaded connection</li>
<li>🔹 <strong>Cones:</strong> 3 rotating cones carrying teeth/inserts</li>
<li>🔹 <strong>Bearings:</strong> Allow smooth cone rotation</li>
<li>🔹 <strong>Teeth/Inserts:</strong> Actual cutting elements</li>
<li>🔹 <strong>Nozzles:</strong> Direct drilling fluid flow</li>
<li>🔹 <strong>Seal System:</strong> Protects bearings</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Types of Roller Cone Bits</h2>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">1️⃣ Milled Tooth Bits</h3>

<div style="background: linear-gradient(135deg, #1e3a5f15, #f9731620); padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border-left: 4px solid #f97316;">
<p style="margin-bottom: 1rem; line-height: 1.8;">
Teeth are machined from the cone body itself (steel). Suitable for soft to medium-hard formations.
</p>
<strong style="color: #1e3a5f;">Characteristics:</strong>
<ul style="list-style-type: disc; padding-left: 1.5rem; margin-top: 0.5rem; line-height: 1.8;">
<li>Long, widely-spaced teeth for soft formations</li>
<li>Short, closely-spaced teeth for harder formations</li>
<li>High torque required</li>
<li>High ROP in suitable formations</li>
<li>Lower cost than Insert Bits</li>
</ul>
</div>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">2️⃣ Insert/TCI Bits</h3>

<div style="background: #10b98115; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<p style="margin-bottom: 1rem; line-height: 1.8;">
TCI = Tungsten Carbide Insert. Tungsten carbide inserts are pressed into pre-drilled holes in the cones. Suitable for hard and abrasive formations.
</p>
<strong style="color: #10b981;">Characteristics:</strong>
<ul style="list-style-type: disc; padding-left: 1.5rem; margin-top: 0.5rem; line-height: 1.8;">
<li>Much higher wear resistance</li>
<li>Longer life in hard formations</li>
<li>Various insert shapes for different applications</li>
<li>Higher cost but better performance</li>
<li>Suitable for deep wells</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Bearing Systems</h2>

<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #1e3a5f; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">Bearing Types:</h3>
<ul style="list-style-type: none; padding-left: 1rem; line-height: 2.2;">
<li>🔹 <strong>Non-sealed Bearings:</strong> Simple, cooled by mud, short life</li>
<li>🔹 <strong>Sealed Bearings:</strong> Protected by seals, internal grease, longer life</li>
<li>🔹 <strong>Journal Bearings:</strong> For hard formations, high load capacity</li>
<li>🔹 <strong>Roller Bearings:</strong> For soft formations, high speeds</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Cone Geometry</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
Cone angle and offset from bit center affect drilling mechanism:
</p>

<div style="background: #f9731615; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<ul style="list-style-type: none; padding-left: 1rem; line-height: 2.2;">
<li>📐 <strong>No Offset:</strong> Pure rolling action, for hard formations</li>
<li>📐 <strong>High Offset:</strong> Sliding and gouging action, for soft formations</li>
<li>📐 <strong>Oversize:</strong> Drills larger than nominal diameter</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>Roller Cone bits consist of rotating cones on bearings</li>
<li>Two types: Milled Tooth (soft) and Insert/TCI (hard)</li>
<li>Sealed bearings provide longer life</li>
<li>Cone geometry determines breaking mechanism</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Milled Tooth Bits', definition: 'Bits with steel teeth machined from cone body for soft formations' },
            { term: 'TCI (Tungsten Carbide Insert)', definition: 'Bits with tungsten carbide inserts for hard formations' },
            { term: 'Sealed Bearings', definition: 'Bearings protected by seals with internal grease for longer life' },
            { term: 'Cone Offset', definition: 'Displacement of cone axis from bit center to control drilling mechanism' },
          ],
          practiceQuestion: {
            question: 'Which type of Roller Cone bit is suitable for hard and abrasive formations?',
            options: ['Milled Tooth', 'Insert/TCI', 'Non-sealed', 'High Offset'],
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
          title: 'رؤوس PDC - التقنية والتصميم',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 رؤوس PDC (Polycrystalline Diamond Compact)</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
رؤوس PDC هي الأكثر استخداماً حالياً في صناعة الحفر، وتُشكل أكثر من 70% من إجمالي رؤوس الحفر المستخدمة عالمياً. تم تطويرها في السبعينيات وتطورت بشكل كبير لتصبح الخيار الأول للعديد من التطبيقات.
</p>

<div style="background: linear-gradient(135deg, #1e3a5f15, #f9731620); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #f97316;">
<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">📌 مميزات رؤوس PDC</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>معدل اختراق (ROP) عالي جداً</li>
<li>لا أجزاء متحركة - موثوقية عالية</li>
<li>عمر طويل في التكوينات المناسبة</li>
<li>تكلفة لكل قدم منخفضة</li>
<li>مناسبة لمعظم التكوينات</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 تقنية PDC Cutter</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
قاطع PDC يتكون من طبقة رقيقة من الماس متعدد البلورات (حوالي 0.5-3 مم) ملتصقة بقاعدة من كربيد التنغستن تحت ضغط وحرارة عاليين جداً.
</p>

<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #1e3a5f; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">مكونات قاطع PDC:</h3>
<ul style="list-style-type: none; padding-right: 1rem; line-height: 2.2;">
<li>💎 <strong>طبقة الماس (Diamond Table):</strong> السطح القاطع الفعلي</li>
<li>🔧 <strong>قاعدة كربيد التنغستن (Substrate):</strong> توفر الدعم الهيكلي</li>
<li>🔗 <strong>منطقة الربط (Interface):</strong> تربط الطبقتين معاً</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 أنواع أجسام رؤوس PDC</h2>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">1️⃣ جسم فولاذي (Steel Body)</h3>
<div style="background: #1e3a5f10; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 1.8;">
<li>القواطع ملحومة بالجسم</li>
<li>أسهل في التصنيع والإصلاح</li>
<li>تكلفة أقل</li>
<li>مقاومة تآكل أقل</li>
<li>كود IADC: يبدأ بـ "S"</li>
</ul>
</div>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">2️⃣ جسم مصفوفة (Matrix Body)</h3>
<div style="background: #10b98115; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 1.8;">
<li>مصنوع من مسحوق كربيد التنغستن المضغوط</li>
<li>القواطع مثبتة ميكانيكياً في جيوب</li>
<li>مقاومة تآكل عالية جداً</li>
<li>مناسب للتكوينات الكاشطة</li>
<li>كود IADC: يبدأ بـ "M"</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 تصميم وجه الرأس (Bit Face Design)</h2>

<div style="background: #f9731615; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #f97316; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">عناصر التصميم الرئيسية:</h3>
<ul style="list-style-type: none; padding-right: 1rem; line-height: 2.2;">
<li>📐 <strong>شكل الوجه (Profile):</strong> مسطح، مخروطي، مقعر، أو مدبب</li>
<li>🔄 <strong>الشفرات (Blades):</strong> تحمل القواطع وتوجه الفتات</li>
<li>💧 <strong>قنوات السائل (Junk Slots):</strong> لتدفق سائل الحفر</li>
<li>⚡ <strong>زاوية الهجوم (Back Rake):</strong> زاوية القاطع مع السطح</li>
<li>↔️ <strong>زاوية الجانب (Side Rake):</strong> زاوية القاطع الجانبية</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 آلية القطع في PDC</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
تعمل رؤوس PDC بآلية القص (Shearing) على عكس السحق في Roller Cone. القاطع يقص شرائح رقيقة من الصخر بزاوية محددة، مما ينتج فتاتاً ناعماً.
</p>

<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<strong style="color: #1e3a5f;">العوامل المؤثرة على كفاءة القطع:</strong>
<ul style="list-style-type: disc; padding-right: 1.5rem; margin-top: 0.5rem; line-height: 1.8;">
<li><strong>WOB (Weight on Bit):</strong> الحمل على الرأس</li>
<li><strong>RPM:</strong> سرعة الدوران</li>
<li><strong>زاوية Back Rake:</strong> تتراوح 5°-30°</li>
<li><strong>حجم القاطع:</strong> 8-19 مم قطر</li>
<li><strong>الهيدروليكا:</strong> تبريد وتنظيف القواطع</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>PDC هي الأكثر استخداماً حالياً (>70% من السوق)</li>
<li>قاطع PDC = طبقة ماس + قاعدة كربيد تنغستن</li>
<li>جسمان: فولاذي (S) ومصفوفة (M)</li>
<li>تعمل بآلية القص وليس السحق</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'PDC Cutter', definition: 'قاطع من الماس متعدد البلورات على قاعدة كربيد التنغستن' },
            { term: 'Steel Body', definition: 'جسم رأس PDC من الفولاذ، القواطع ملحومة' },
            { term: 'Matrix Body', definition: 'جسم من كربيد التنغستن المضغوط، مقاومة تآكل عالية' },
            { term: 'Back Rake Angle', definition: 'زاوية ميل القاطع للخلف، تتحكم في عدوانية القطع' },
          ],
          practiceQuestion: {
            question: 'ما هي آلية عمل رؤوس PDC في تفتيت الصخور؟',
            options: ['السحق (Crushing)', 'القص (Shearing)', 'التدحرج (Rolling)', 'الطرق (Impact)'],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'PDC Bits - Technology and Design',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 PDC Bits (Polycrystalline Diamond Compact)</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
PDC bits are currently the most widely used in the drilling industry, accounting for more than 70% of all drill bits used globally. Developed in the 1970s, they have evolved significantly to become the first choice for many applications.
</p>

<div style="background: linear-gradient(135deg, #1e3a5f15, #f9731620); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #f97316;">
<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">📌 PDC Bit Advantages</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>Very high Rate of Penetration (ROP)</li>
<li>No moving parts - high reliability</li>
<li>Long life in suitable formations</li>
<li>Low cost per foot</li>
<li>Suitable for most formations</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 PDC Cutter Technology</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
A PDC cutter consists of a thin layer of polycrystalline diamond (about 0.5-3 mm) bonded to a tungsten carbide substrate under very high pressure and temperature.
</p>

<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #1e3a5f; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">PDC Cutter Components:</h3>
<ul style="list-style-type: none; padding-left: 1rem; line-height: 2.2;">
<li>💎 <strong>Diamond Table:</strong> The actual cutting surface</li>
<li>🔧 <strong>Tungsten Carbide Substrate:</strong> Provides structural support</li>
<li>🔗 <strong>Interface:</strong> Bonds the two layers together</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Types of PDC Bit Bodies</h2>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">1️⃣ Steel Body</h3>
<div style="background: #1e3a5f10; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 1.8;">
<li>Cutters are brazed to the body</li>
<li>Easier to manufacture and repair</li>
<li>Lower cost</li>
<li>Less erosion resistance</li>
<li>IADC Code: starts with "S"</li>
</ul>
</div>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">2️⃣ Matrix Body</h3>
<div style="background: #10b98115; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 1.8;">
<li>Made from compressed tungsten carbide powder</li>
<li>Cutters mechanically fixed in pockets</li>
<li>Very high erosion resistance</li>
<li>Suitable for abrasive formations</li>
<li>IADC Code: starts with "M"</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Bit Face Design</h2>

<div style="background: #f9731615; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #f97316; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">Key Design Elements:</h3>
<ul style="list-style-type: none; padding-left: 1rem; line-height: 2.2;">
<li>📐 <strong>Profile:</strong> Flat, conical, concave, or pointed</li>
<li>🔄 <strong>Blades:</strong> Carry cutters and direct cuttings</li>
<li>💧 <strong>Junk Slots:</strong> For drilling fluid flow</li>
<li>⚡ <strong>Back Rake:</strong> Cutter angle with surface</li>
<li>↔️ <strong>Side Rake:</strong> Lateral cutter angle</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 PDC Cutting Mechanism</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
PDC bits work by shearing, unlike crushing in Roller Cone. The cutter shears thin slices of rock at a specific angle, producing fine cuttings.
</p>

<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<strong style="color: #1e3a5f;">Factors Affecting Cutting Efficiency:</strong>
<ul style="list-style-type: disc; padding-left: 1.5rem; margin-top: 0.5rem; line-height: 1.8;">
<li><strong>WOB (Weight on Bit):</strong> Load on the bit</li>
<li><strong>RPM:</strong> Rotation speed</li>
<li><strong>Back Rake Angle:</strong> Ranges 5°-30°</li>
<li><strong>Cutter Size:</strong> 8-19 mm diameter</li>
<li><strong>Hydraulics:</strong> Cutter cooling and cleaning</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>PDC is currently most used (>70% of market)</li>
<li>PDC cutter = diamond layer + tungsten carbide base</li>
<li>Two bodies: Steel (S) and Matrix (M)</li>
<li>Works by shearing, not crushing</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'PDC Cutter', definition: 'Polycrystalline diamond cutter on tungsten carbide substrate' },
            { term: 'Steel Body', definition: 'Steel PDC bit body with brazed cutters' },
            { term: 'Matrix Body', definition: 'Compressed tungsten carbide body with high erosion resistance' },
            { term: 'Back Rake Angle', definition: 'Cutter backward tilt angle controlling cutting aggressiveness' },
          ],
          practiceQuestion: {
            question: 'What is the working mechanism of PDC bits in breaking rocks?',
            options: ['Crushing', 'Shearing', 'Rolling', 'Impact'],
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
          title: 'رؤوس الماس والرؤوس المتخصصة',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 رؤوس الماس الطبيعي (Natural Diamond Bits)</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
رؤوس الماس الطبيعي هي أقدم أنواع رؤوس Fixed Cutter، تستخدم حبيبات الماس الطبيعي المثبتة في مصفوفة معدنية. تُستخدم في التكوينات شديدة الصلابة والكاشطة حيث تفشل الرؤوس الأخرى.
</p>

<div style="background: linear-gradient(135deg, #1e3a5f15, #f9731620); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #f97316;">
<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">📌 خصائص رؤوس الماس الطبيعي</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>صلابة عالية جداً (10 على مقياس موهس)</li>
<li>مقاومة حرارية ممتازة</li>
<li>مناسبة للتكوينات فائقة الصلابة</li>
<li>تكلفة عالية جداً</li>
<li>ROP منخفض نسبياً</li>
</ul>
</div>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">أنواع رؤوس الماس الطبيعي:</h3>

<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<ul style="list-style-type: none; padding-right: 1rem; line-height: 2.2;">
<li>💎 <strong>Surface Set:</strong> ماس كبير على السطح فقط</li>
<li>💎 <strong>Impregnated:</strong> ماس صغير موزع في المصفوفة بالكامل</li>
<li>💎 <strong>TSP (Thermally Stable Polycrystalline):</strong> ماس صناعي مستقر حرارياً</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 رؤوس Impregnated</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
تحتوي على حبيبات ماس صغيرة (30-60 حبة/قيراط) موزعة في مصفوفة معدنية. تتآكل المصفوفة تدريجياً لكشف ماس جديد، مما يوفر تجديداً ذاتياً للسطح القاطع.
</p>

<div style="background: #10b98115; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<strong style="color: #10b981;">استخدامات Impregnated Bits:</strong>
<ul style="list-style-type: disc; padding-right: 1.5rem; margin-top: 0.5rem; line-height: 1.8;">
<li>الصخور البركانية والمتحولة</li>
<li>الحفر في الجرانيت والبازلت</li>
<li>التكوينات شديدة الكشط</li>
<li>عمليات الـ Coring (استخراج العينات)</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 الرؤوس الهجينة (Hybrid Bits)</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
تجمع بين تقنيتي Roller Cone و PDC في رأس واحد للاستفادة من مزايا كلا النوعين. تُستخدم في التكوينات المتنوعة والصعبة.
</p>

<div style="background: #f9731615; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #f97316; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">مكونات الرأس الهجين:</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 1.8;">
<li>مخاريط Roller Cone في المركز</li>
<li>قواطع PDC على الشفرات الخارجية</li>
<li>نظام هيدروليكي متقدم</li>
<li>تصميم مُحسَّن للاستقرار</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 رؤوس Bi-Center</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
رؤوس مصممة لحفر حفرة أكبر من قطر الرأس نفسه. تُستخدم عند الحاجة لتوسيع البئر أو حفر مقطع أكبر مع بقاء القدرة على المرور عبر مقطع أصغر.
</p>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 رؤوس الحفر الموجه (Directional Bits)</h2>

<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #1e3a5f; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">مميزات خاصة:</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 1.8;">
<li>تصميم Gauge Pad محسَّن للتوجيه</li>
<li>استجابة سريعة لأوامر التوجيه</li>
<li>توافق مع أنظمة RSS و Motor</li>
<li>استقرار عالي في الحفر المائل</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 رؤوس الـ Coring</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
رؤوس مجوفة تقطع حلقة حول العينة الصخرية دون تفتيتها، مما يسمح باستخراج عينات أسطوانية للتحليل الجيولوجي.
</p>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>رؤوس الماس الطبيعي للتكوينات فائقة الصلابة</li>
<li>Impregnated توفر تجديداً ذاتياً للسطح القاطع</li>
<li>الرؤوس الهجينة تجمع مزايا Roller Cone و PDC</li>
<li>رؤوس متخصصة للتوجيه والـ Coring</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Natural Diamond Bits', definition: 'رؤوس تستخدم حبيبات الماس الطبيعي للتكوينات فائقة الصلابة' },
            { term: 'Impregnated Bits', definition: 'رؤوس بماس موزع في المصفوفة مع تجديد ذاتي للسطح' },
            { term: 'Hybrid Bits', definition: 'رؤوس تجمع بين تقنيتي Roller Cone و PDC' },
            { term: 'Coring Bits', definition: 'رؤوس مجوفة لاستخراج عينات صخرية أسطوانية' },
          ],
          practiceQuestion: {
            question: 'أي نوع من الرؤوس يوفر تجديداً ذاتياً للسطح القاطع بتآكل المصفوفة؟',
            options: ['PDC Bits', 'Roller Cone Bits', 'Impregnated Bits', 'Hybrid Bits'],
            correctAnswer: 2,
          },
        },
        en: {
          title: 'Diamond Bits and Specialized Bits',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Natural Diamond Bits</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
Natural diamond bits are the oldest type of Fixed Cutter bits, using natural diamond particles embedded in a metal matrix. They are used in extremely hard and abrasive formations where other bits fail.
</p>

<div style="background: linear-gradient(135deg, #1e3a5f15, #f9731620); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #f97316;">
<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">📌 Natural Diamond Bit Characteristics</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>Very high hardness (10 on Mohs scale)</li>
<li>Excellent thermal resistance</li>
<li>Suitable for ultra-hard formations</li>
<li>Very high cost</li>
<li>Relatively low ROP</li>
</ul>
</div>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">Types of Natural Diamond Bits:</h3>

<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<ul style="list-style-type: none; padding-left: 1rem; line-height: 2.2;">
<li>💎 <strong>Surface Set:</strong> Large diamonds on surface only</li>
<li>💎 <strong>Impregnated:</strong> Small diamonds distributed throughout matrix</li>
<li>💎 <strong>TSP (Thermally Stable Polycrystalline):</strong> Thermally stable synthetic diamond</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Impregnated Bits</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
Contain small diamond particles (30-60 stones/carat) distributed in a metal matrix. The matrix gradually wears to expose new diamonds, providing self-renewing cutting surface.
</p>

<div style="background: #10b98115; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<strong style="color: #10b981;">Impregnated Bits Applications:</strong>
<ul style="list-style-type: disc; padding-left: 1.5rem; margin-top: 0.5rem; line-height: 1.8;">
<li>Volcanic and metamorphic rocks</li>
<li>Drilling in granite and basalt</li>
<li>Highly abrasive formations</li>
<li>Coring operations</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Hybrid Bits</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
Combine Roller Cone and PDC technologies in one bit to benefit from advantages of both types. Used in varied and challenging formations.
</p>

<div style="background: #f9731615; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #f97316; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">Hybrid Bit Components:</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 1.8;">
<li>Roller Cone cones in center</li>
<li>PDC cutters on outer blades</li>
<li>Advanced hydraulic system</li>
<li>Optimized stability design</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Bi-Center Bits</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
Bits designed to drill a hole larger than the bit diameter itself. Used when needing to enlarge the wellbore or drill a larger section while maintaining ability to pass through a smaller section.
</p>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Directional Bits</h2>

<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #1e3a5f; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">Special Features:</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 1.8;">
<li>Optimized Gauge Pad design for steering</li>
<li>Quick response to steering commands</li>
<li>Compatible with RSS and Motor systems</li>
<li>High stability in deviated drilling</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Coring Bits</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
Hollow bits that cut a ring around the rock sample without destroying it, allowing extraction of cylindrical samples for geological analysis.
</p>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>Natural diamond bits for ultra-hard formations</li>
<li>Impregnated provide self-renewing cutting surface</li>
<li>Hybrid bits combine Roller Cone and PDC advantages</li>
<li>Specialized bits for directional drilling and coring</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Natural Diamond Bits', definition: 'Bits using natural diamond particles for ultra-hard formations' },
            { term: 'Impregnated Bits', definition: 'Bits with diamonds distributed in matrix with self-renewing surface' },
            { term: 'Hybrid Bits', definition: 'Bits combining Roller Cone and PDC technologies' },
            { term: 'Coring Bits', definition: 'Hollow bits for extracting cylindrical rock samples' },
          ],
          practiceQuestion: {
            question: 'Which type of bit provides self-renewing cutting surface through matrix wear?',
            options: ['PDC Bits', 'Roller Cone Bits', 'Impregnated Bits', 'Hybrid Bits'],
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
          title: 'اختيار رأس الحفر وتقييم الأداء',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 معايير اختيار رأس الحفر</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
اختيار رأس الحفر المناسب يتطلب تحليلاً دقيقاً لعدة عوامل. القرار الصحيح يمكن أن يوفر الملايين في تكاليف الحفر، بينما القرار الخاطئ قد يؤدي لمشاكل مكلفة.
</p>

<div style="background: linear-gradient(135deg, #1e3a5f15, #f9731620); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #f97316;">
<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">📌 العوامل الرئيسية للاختيار</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>نوع التكوين الصخري وصلابته</li>
<li>عمق البئر ودرجة الحرارة</li>
<li>خصائص سائل الحفر</li>
<li>قدرات جهاز الحفر (WOB, RPM)</li>
<li>الهدف: سرعة أم عمر الرأس</li>
<li>البيانات التاريخية من الآبار المجاورة</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 جدول اختيار الرأس حسب التكوين</h2>

<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; overflow-x: auto;">
<table style="width: 100%; border-collapse: collapse; text-align: center; min-width: 500px;">
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 0.75rem; border: 1px solid #ccc;">التكوين</th>
<th style="padding: 0.75rem; border: 1px solid #ccc;">الخيار الأول</th>
<th style="padding: 0.75rem; border: 1px solid #ccc;">البديل</th>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ccc;">لين (Shale, Clay)</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">PDC</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">Milled Tooth</td>
</tr>
<tr style="background: #f5f5f5;">
<td style="padding: 0.75rem; border: 1px solid #ccc;">متوسط (Limestone)</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">PDC</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">TCI</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ccc;">صلب (Sandstone)</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">TCI / PDC</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">Diamond</td>
</tr>
<tr style="background: #f5f5f5;">
<td style="padding: 0.75rem; border: 1px solid #ccc;">صلب جداً (Granite)</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">Impregnated</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">Natural Diamond</td>
</tr>
</table>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 مؤشرات أداء رأس الحفر (KPIs)</h2>

<div style="background: #10b98115; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">المؤشرات الرئيسية:</h3>
<ul style="list-style-type: none; padding-right: 1rem; line-height: 2.2;">
<li>📊 <strong>ROP (Rate of Penetration):</strong> معدل الاختراق - ft/hr أو m/hr</li>
<li>📊 <strong>Cost per Foot:</strong> التكلفة لكل قدم محفور</li>
<li>📊 <strong>Footage:</strong> إجمالي الأقدام المحفورة</li>
<li>📊 <strong>Rotating Hours:</strong> ساعات الدوران الفعلية</li>
<li>📊 <strong>Bit Life:</strong> العمر الافتراضي للرأس</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 حساب التكلفة لكل قدم</h2>

<div style="background: #f9731615; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<p style="margin-bottom: 1rem; line-height: 1.8; font-weight: bold; text-align: center; font-size: 1.2rem;">
Cost/ft = (Cb + Cr × (Tt + Td)) / F
</p>
<ul style="list-style-type: none; padding-right: 1rem; line-height: 2;">
<li><strong>Cb:</strong> تكلفة رأس الحفر</li>
<li><strong>Cr:</strong> تكلفة التشغيل بالساعة ($/hr)</li>
<li><strong>Tt:</strong> زمن الرحلة (ساعات)</li>
<li><strong>Td:</strong> زمن الحفر (ساعات)</li>
<li><strong>F:</strong> الأقدام المحفورة</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 نظام تدريج حالة الرأس (IADC Dull Grading)</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
نظام موحد لتقييم حالة رأس الحفر بعد الاستخدام، يتكون من 8 خانات:
</p>

<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<ul style="list-style-type: none; padding-right: 1rem; line-height: 2.2;">
<li>1️⃣ <strong>Inner Cutting Structure (I):</strong> 0-8</li>
<li>2️⃣ <strong>Outer Cutting Structure (O):</strong> 0-8</li>
<li>3️⃣ <strong>Dull Characteristic (D):</strong> نوع التآكل الرئيسي</li>
<li>4️⃣ <strong>Location (L):</strong> موقع التآكل</li>
<li>5️⃣ <strong>Bearing/Seal (B):</strong> حالة المحامل (Roller Cone)</li>
<li>6️⃣ <strong>Gauge (G):</strong> حالة القياس</li>
<li>7️⃣ <strong>Other Dull (O):</strong> تآكل ثانوي</li>
<li>8️⃣ <strong>Reason Pulled (R):</strong> سبب سحب الرأس</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 أنواع التآكل الشائعة</h2>

<div style="background: #dc262615; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<ul style="list-style-type: none; padding-right: 1rem; line-height: 2.2;">
<li>⚠️ <strong>BT (Broken Teeth):</strong> كسر الأسنان</li>
<li>⚠️ <strong>WT (Worn Teeth):</strong> تآكل الأسنان</li>
<li>⚠️ <strong>CT (Chipped Teeth):</strong> تشظي الأسنان</li>
<li>⚠️ <strong>LT (Lost Teeth):</strong> فقدان الأسنان</li>
<li>⚠️ <strong>ER (Erosion):</strong> تآكل بالسائل</li>
<li>⚠️ <strong>HC (Heat Checking):</strong> تشققات حرارية</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>اختيار الرأس يعتمد على التكوين وظروف الحفر</li>
<li>Cost per Foot هو المقياس الأهم للأداء</li>
<li>نظام IADC Dull Grading لتقييم حالة الرأس</li>
<li>تحليل التآكل يساعد في تحسين الاختيارات المستقبلية</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'ROP (Rate of Penetration)', definition: 'معدل الاختراق - السرعة التي يحفر بها الرأس، بالقدم/ساعة' },
            { term: 'Cost per Foot', definition: 'التكلفة الإجمالية لحفر قدم واحد، المقياس الأهم للأداء' },
            { term: 'IADC Dull Grading', definition: 'نظام تقييم موحد لحالة رأس الحفر بعد الاستخدام' },
            { term: 'Footage', definition: 'إجمالي الأقدام المحفورة بالرأس الواحد' },
          ],
          practiceQuestion: {
            question: 'ما هو المقياس الأهم لتقييم أداء رأس الحفر اقتصادياً؟',
            options: ['ROP فقط', 'Footage فقط', 'Cost per Foot', 'Rotating Hours'],
            correctAnswer: 2,
          },
        },
        en: {
          title: 'Drill Bit Selection and Performance Evaluation',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Drill Bit Selection Criteria</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
Selecting the appropriate drill bit requires careful analysis of several factors. The right decision can save millions in drilling costs, while the wrong choice can lead to costly problems.
</p>

<div style="background: linear-gradient(135deg, #1e3a5f15, #f9731620); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #f97316;">
<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">📌 Main Selection Factors</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>Rock formation type and hardness</li>
<li>Well depth and temperature</li>
<li>Drilling fluid properties</li>
<li>Rig capabilities (WOB, RPM)</li>
<li>Goal: speed vs. bit life</li>
<li>Historical data from offset wells</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Bit Selection Guide by Formation</h2>

<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; overflow-x: auto;">
<table style="width: 100%; border-collapse: collapse; text-align: center; min-width: 500px;">
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 0.75rem; border: 1px solid #ccc;">Formation</th>
<th style="padding: 0.75rem; border: 1px solid #ccc;">First Choice</th>
<th style="padding: 0.75rem; border: 1px solid #ccc;">Alternative</th>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ccc;">Soft (Shale, Clay)</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">PDC</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">Milled Tooth</td>
</tr>
<tr style="background: #f5f5f5;">
<td style="padding: 0.75rem; border: 1px solid #ccc;">Medium (Limestone)</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">PDC</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">TCI</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ccc;">Hard (Sandstone)</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">TCI / PDC</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">Diamond</td>
</tr>
<tr style="background: #f5f5f5;">
<td style="padding: 0.75rem; border: 1px solid #ccc;">Very Hard (Granite)</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">Impregnated</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">Natural Diamond</td>
</tr>
</table>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Drill Bit Performance KPIs</h2>

<div style="background: #10b98115; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">Key Indicators:</h3>
<ul style="list-style-type: none; padding-left: 1rem; line-height: 2.2;">
<li>📊 <strong>ROP (Rate of Penetration):</strong> ft/hr or m/hr</li>
<li>📊 <strong>Cost per Foot:</strong> Total cost per foot drilled</li>
<li>📊 <strong>Footage:</strong> Total feet drilled</li>
<li>📊 <strong>Rotating Hours:</strong> Actual rotation hours</li>
<li>📊 <strong>Bit Life:</strong> Expected bit lifespan</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Cost per Foot Calculation</h2>

<div style="background: #f9731615; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<p style="margin-bottom: 1rem; line-height: 1.8; font-weight: bold; text-align: center; font-size: 1.2rem;">
Cost/ft = (Cb + Cr × (Tt + Td)) / F
</p>
<ul style="list-style-type: none; padding-left: 1rem; line-height: 2;">
<li><strong>Cb:</strong> Bit cost</li>
<li><strong>Cr:</strong> Rig cost per hour ($/hr)</li>
<li><strong>Tt:</strong> Trip time (hours)</li>
<li><strong>Td:</strong> Drilling time (hours)</li>
<li><strong>F:</strong> Footage drilled</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 IADC Dull Grading System</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
A standardized system for evaluating bit condition after use, consisting of 8 characters:
</p>

<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<ul style="list-style-type: none; padding-left: 1rem; line-height: 2.2;">
<li>1️⃣ <strong>Inner Cutting Structure (I):</strong> 0-8</li>
<li>2️⃣ <strong>Outer Cutting Structure (O):</strong> 0-8</li>
<li>3️⃣ <strong>Dull Characteristic (D):</strong> Primary wear type</li>
<li>4️⃣ <strong>Location (L):</strong> Wear location</li>
<li>5️⃣ <strong>Bearing/Seal (B):</strong> Bearing condition (Roller Cone)</li>
<li>6️⃣ <strong>Gauge (G):</strong> Gauge condition</li>
<li>7️⃣ <strong>Other Dull (O):</strong> Secondary wear</li>
<li>8️⃣ <strong>Reason Pulled (R):</strong> Reason for pulling bit</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Common Wear Types</h2>

<div style="background: #dc262615; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<ul style="list-style-type: none; padding-left: 1rem; line-height: 2.2;">
<li>⚠️ <strong>BT (Broken Teeth):</strong> Teeth breakage</li>
<li>⚠️ <strong>WT (Worn Teeth):</strong> Teeth wear</li>
<li>⚠️ <strong>CT (Chipped Teeth):</strong> Teeth chipping</li>
<li>⚠️ <strong>LT (Lost Teeth):</strong> Lost teeth</li>
<li>⚠️ <strong>ER (Erosion):</strong> Fluid erosion</li>
<li>⚠️ <strong>HC (Heat Checking):</strong> Thermal cracking</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>Bit selection depends on formation and drilling conditions</li>
<li>Cost per Foot is the most important performance metric</li>
<li>IADC Dull Grading system for bit condition evaluation</li>
<li>Wear analysis helps improve future selections</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'ROP (Rate of Penetration)', definition: 'Rate at which bit drills, measured in ft/hr' },
            { term: 'Cost per Foot', definition: 'Total cost to drill one foot, most important performance metric' },
            { term: 'IADC Dull Grading', definition: 'Standardized evaluation system for used bit condition' },
            { term: 'Footage', definition: 'Total feet drilled with one bit' },
          ],
          practiceQuestion: {
            question: 'What is the most important metric for evaluating drill bit performance economically?',
            options: ['ROP only', 'Footage only', 'Cost per Foot', 'Rotating Hours'],
            correctAnswer: 2,
          },
        },
      },
    },
    {
      day: 6,
      type: 'quiz',
      quiz: {
        ar: [
            {
              question: 'ما هما النوعان الرئيسيان لرؤوس الحفر بناءً على آلية العمل؟',
              options: ['PDC و Diamond', 'Roller Cone و Fixed Cutter', 'Milled Tooth و Insert', 'Steel و Matrix'],
              correctAnswer: 1,
            },
            {
              question: 'أي نوع من رؤوس Roller Cone مناسب للتكوينات اللينة؟',
              options: ['TCI Bits', 'Milled Tooth Bits', 'Sealed Bearing Bits', 'Journal Bearing Bits'],
              correctAnswer: 1,
            },
            {
              question: 'ماذا يعني TCI في سياق رؤوس الحفر؟',
              options: ['Total Cone Insert', 'Tungsten Carbide Insert', 'Thermal Cutting Insert', 'Triple Cone Insert'],
              correctAnswer: 1,
            },
            {
              question: 'ما هي آلية عمل رؤوس PDC؟',
              options: ['السحق (Crushing)', 'التدحرج (Rolling)', 'القص (Shearing)', 'الطرق (Impact)'],
              correctAnswer: 2,
            },
            {
              question: 'أي نوع جسم PDC يوفر مقاومة تآكل أعلى؟',
              options: ['Steel Body', 'Matrix Body', 'كلاهما متساويان', 'لا يوجد فرق'],
              correctAnswer: 1,
            },
            {
              question: 'ما هي زاوية Back Rake في رؤوس PDC؟',
              options: ['زاوية دوران الرأس', 'زاوية ميل القاطع للخلف', 'زاوية الشفرات', 'زاوية الفوهات'],
              correctAnswer: 1,
            },
            {
              question: 'أي نوع من الرؤوس يوفر تجديداً ذاتياً للسطح القاطع؟',
              options: ['PDC Bits', 'Roller Cone Bits', 'Impregnated Bits', 'Steel Body Bits'],
              correctAnswer: 2,
            },
            {
              question: 'ما هو المقياس الأهم لتقييم أداء رأس الحفر اقتصادياً؟',
              options: ['ROP فقط', 'Footage فقط', 'Cost per Foot', 'Bit Life'],
              correctAnswer: 2,
            },
            {
              question: 'في نظام IADC للـ Dull Grading، ماذا يعني BT؟',
              options: ['Bit Temperature', 'Broken Teeth', 'Bottom Torque', 'Bearing Type'],
              correctAnswer: 1,
            },
            {
              question: 'أي نوع من الرؤوس يجمع بين تقنيتي Roller Cone و PDC؟',
              options: ['Impregnated Bits', 'Diamond Bits', 'Hybrid Bits', 'Coring Bits'],
              correctAnswer: 2,
          },
        ],
        en: [
            {
              question: 'What are the two main types of drill bits based on operating mechanism?',
              options: ['PDC and Diamond', 'Roller Cone and Fixed Cutter', 'Milled Tooth and Insert', 'Steel and Matrix'],
              correctAnswer: 1,
            },
            {
              question: 'Which type of Roller Cone bit is suitable for soft formations?',
              options: ['TCI Bits', 'Milled Tooth Bits', 'Sealed Bearing Bits', 'Journal Bearing Bits'],
              correctAnswer: 1,
            },
            {
              question: 'What does TCI stand for in drill bit context?',
              options: ['Total Cone Insert', 'Tungsten Carbide Insert', 'Thermal Cutting Insert', 'Triple Cone Insert'],
              correctAnswer: 1,
            },
            {
              question: 'What is the working mechanism of PDC bits?',
              options: ['Crushing', 'Rolling', 'Shearing', 'Impact'],
              correctAnswer: 2,
            },
            {
              question: 'Which PDC body type provides higher erosion resistance?',
              options: ['Steel Body', 'Matrix Body', 'Both are equal', 'No difference'],
              correctAnswer: 1,
            },
            {
              question: 'What is the Back Rake angle in PDC bits?',
              options: ['Bit rotation angle', 'Cutter backward tilt angle', 'Blade angle', 'Nozzle angle'],
              correctAnswer: 1,
            },
            {
              question: 'Which bit type provides self-renewing cutting surface?',
              options: ['PDC Bits', 'Roller Cone Bits', 'Impregnated Bits', 'Steel Body Bits'],
              correctAnswer: 2,
            },
            {
              question: 'What is the most important metric for evaluating bit performance economically?',
              options: ['ROP only', 'Footage only', 'Cost per Foot', 'Bit Life'],
              correctAnswer: 2,
            },
            {
              question: 'In the IADC Dull Grading system, what does BT mean?',
              options: ['Bit Temperature', 'Broken Teeth', 'Bottom Torque', 'Bearing Type'],
              correctAnswer: 1,
            },
            {
              question: 'Which bit type combines Roller Cone and PDC technologies?',
              options: ['Impregnated Bits', 'Diamond Bits', 'Hybrid Bits', 'Coring Bits'],
              correctAnswer: 2,
          },
        ],
      },
    },
    {
      day: 7,
      type: 'project',
      project: {
        ar: {
          title: 'مشروع تحليل واختيار رأس الحفر',
          description: `في هذا المشروع، ستقوم بتحليل سيناريو حفر واختيار رأس الحفر المناسب.`,
          instructions: [
            'حدد نوع رأس الحفر المناسب لكل مقطع مع التبرير',
            'اقترح معايير التشغيل (WOB, RPM) لكل رأس',
            'احسب Cost per Foot',
            'صف أنواع التآكل المتوقعة لكل رأس',
          ],
          submissionType: 'both' as const,
        },
        en: {
          title: 'Drill Bit Analysis and Selection Project',
          description: `In this project, you will analyze a drilling scenario and select the appropriate drill bit.`,
          instructions: [
            'Identify the appropriate drill bit type for each section with justification',
            'Suggest operating parameters (WOB, RPM) for each bit',
            'Calculate Cost per Foot',
            'Describe expected wear types for each bit',
          ],
          submissionType: 'both' as const,
        },
      },
    },
  ],
};

**السيناريو:**
أنت مهندس حفر مسؤول عن اختيار رأس الحفر لحفر مقطع 12.25" من العمق 3000 قدم إلى 8000 قدم.

**معلومات التكوين:**
- 3000-4500 قدم: Shale لين
- 4500-6000 قدم: Limestone متوسط الصلابة
- 6000-8000 قدم: Sandstone صلب وكاشط

**المطلوب:**
1. حدد نوع رأس الحفر المناسب لكل مقطع مع التبرير
2. اقترح معايير التشغيل (WOB, RPM) لكل رأس
3. احسب Cost per Foot إذا كانت:
   - تكلفة رأس PDC = $50,000
   - تكلفة رأس TCI = $25,000
   - تكلفة التشغيل = $10,000/hr
   - زمن الرحلة = 4 ساعات

4. صف أنواع التآكل المتوقعة لكل رأس

**التسليم:**
قدم تقريراً مختصراً (300-500 كلمة) يتضمن توصياتك مع الحسابات والتبريرات.`,
        },
        en: {
          title: 'Drill Bit Analysis and Selection Project',
          description: `In this project, you will analyze a drilling scenario and select the appropriate drill bit.

**Scenario:**
You are a drilling engineer responsible for selecting drill bits to drill a 12.25" section from 3000 ft to 8000 ft.

**Formation Information:**
- 3000-4500 ft: Soft Shale
- 4500-6000 ft: Medium-hard Limestone
- 6000-8000 ft: Hard and abrasive Sandstone

**Requirements:**
1. Identify the appropriate drill bit type for each section with justification
2. Suggest operating parameters (WOB, RPM) for each bit
3. Calculate Cost per Foot if:
   - PDC bit cost = $50,000
   - TCI bit cost = $25,000
   - Rig cost = $10,000/hr
   - Trip time = 4 hours

4. Describe expected wear types for each bit

**Deliverable:**
Submit a brief report (300-500 words) including your recommendations with calculations and justifications.`,
        },
      },
    },
  ],
};
