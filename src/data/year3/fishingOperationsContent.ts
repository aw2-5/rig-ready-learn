import { WeeklyLesson } from '../weeklyContent';

export const fishingOperationsLesson: WeeklyLesson = {
  lessonId: 'fishing-operations',
  days: [
    {
      day: 1,
      type: 'learning',
      content: {
        ar: {
          title: 'عمليات الاسترداد (Fishing) - المفاهيم الأساسية وأنواع المعدات المفقودة',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 مقدمة في عمليات الاسترداد (Fishing Operations)</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<p style="font-size: 1.1rem; line-height: 1.8;">
<strong>عمليات الاسترداد (Fishing Operations)</strong> هي العمليات المتخصصة التي تُجرى لانتشال وإخراج الأجسام الغريبة أو المعدات المفقودة أو العالقة من داخل البئر. تعتبر من أكثر العمليات تعقيداً وتكلفة في صناعة الحفر، وتتطلب خبرة عالية ومعدات متخصصة.
</p>
</div>

<div style="background: #e8f4fd; padding: 1.25rem; border-radius: 10px; border-right: 4px solid #3b82f6; margin: 1.5rem 0;">
<p style="margin: 0; color: #1e40af;">
<strong>💡 ملاحظة لغوية:</strong> مصطلح "Fishing" في صناعة الحفر لا يعني "صيد السمك"، بل هو مصطلح تقني يعني "استرداد أو انتشال" المعدات المفقودة من البئر. المصطلح مشتق من فكرة "اصطياد" أو التقاط الأجسام من الأعماق.
</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 ما هو الـ "Fish" (الجسم المستهدف للاسترداد)؟</h3>

<p style="margin-bottom: 1rem; line-height: 1.8;">
في مصطلحات الحفر، <strong>Fish</strong> هو أي جسم أو قطعة من المعدات تُفقد أو تنفصل أو تنحشر داخل البئر ويجب استردادها أو تجاوزها للاستمرار في العمليات. قد يكون الـ Fish جزءاً من أنبوب الحفر، أداة قياس، رأس حفر، أو أي معدات أخرى.
</p>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; border-right: 4px solid #1e3a5f; margin: 1.5rem 0;">
<h4 style="color: #1e3a5f; margin-bottom: 1rem;">أمثلة شائعة على الـ Fish (المعدات المستهدفة للاسترداد):</h4>
<ul style="list-style-type: none; padding: 0;">
<li style="margin-bottom: 0.75rem;">🔹 <strong>أنابيب الحفر المنفصلة:</strong> نتيجة الكسر أو فشل الوصلات</li>
<li style="margin-bottom: 0.75rem;">🔹 <strong>رؤوس الحفر (Drill Bits):</strong> التي تنفصل عن مجموعة القاع</li>
<li style="margin-bottom: 0.75rem;">🔹 <strong>أدوات القياس (MWD/LWD):</strong> الباهظة الثمن</li>
<li style="margin-bottom: 0.75rem;">🔹 <strong>المثبتات والموسعات:</strong> التي تنحشر وتنفصل</li>
<li style="margin-bottom: 0.75rem;">🔹 <strong>أجسام معدنية صغيرة:</strong> براغي، حلقات، قطع من المعدات</li>
<li style="margin-bottom: 0.75rem;">🔹 <strong>كابلات السلكلاين:</strong> التي تنقطع داخل البئر</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 أسباب الحاجة لعمليات الاسترداد</h3>

<div style="display: grid; gap: 1rem; margin-bottom: 1.5rem;">

<div style="background: #fff5f5; padding: 1.25rem; border-radius: 10px; border: 1px solid #feb2b2;">
<h4 style="color: #c53030; margin-bottom: 0.75rem;">1️⃣ الأسباب الميكانيكية</h4>
<ul style="margin: 0; padding-right: 1.25rem;">
<li>إجهاد المعدن (Metal Fatigue) بسبب الدوران المتكرر</li>
<li>فشل الوصلات الملولبة نتيجة الربط الزائد أو الناقص</li>
<li>التآكل والصدأ الذي يضعف المعدن</li>
<li>عيوب التصنيع في المعدات</li>
</ul>
</div>

<div style="background: #f0fff4; padding: 1.25rem; border-radius: 10px; border: 1px solid #9ae6b4;">
<h4 style="color: #276749; margin-bottom: 0.75rem;">2️⃣ الأسباب التشغيلية</h4>
<ul style="margin: 0; padding-right: 1.25rem;">
<li>التحميل الزائد على المعدات</li>
<li>سوء استخدام الأدوات</li>
<li>عدم اتباع إجراءات التشغيل الصحيحة</li>
<li>انحشار الأنابيب (Stuck Pipe) يليه محاولات تحرير خاطئة</li>
</ul>
</div>

<div style="background: #fffaf0; padding: 1.25rem; border-radius: 10px; border: 1px solid #fbd38d;">
<h4 style="color: #c05621; margin-bottom: 0.75rem;">3️⃣ الأسباب الجيولوجية</h4>
<ul style="margin: 0; padding-right: 1.25rem;">
<li>التكوينات غير المستقرة</li>
<li>انهيار جدار البئر</li>
<li>التضيقات (Key Seating)</li>
<li>وجود مناطق ضغط غير طبيعي</li>
</ul>
</div>

</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 تصنيف الـ Fish حسب النوع</h3>

<div style="background: #e8f4fd; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 0.75rem; text-align: right; border-radius: 8px 0 0 0;">نوع الـ Fish</th>
<th style="padding: 0.75rem; text-align: right;">الوصف</th>
<th style="padding: 0.75rem; text-align: right; border-radius: 0 8px 0 0;">صعوبة الاسترداد</th>
</tr>
</thead>
<tbody>
<tr style="background: white;">
<td style="padding: 0.75rem; border-bottom: 1px solid #e2e8f0;"><strong>أنبوبية (Tubular)</strong></td>
<td style="padding: 0.75rem; border-bottom: 1px solid #e2e8f0;">أنابيب الحفر، التبطين، التواينغ</td>
<td style="padding: 0.75rem; border-bottom: 1px solid #e2e8f0;">متوسطة</td>
</tr>
<tr style="background: #f7fafc;">
<td style="padding: 0.75rem; border-bottom: 1px solid #e2e8f0;"><strong>صلبة (Solid)</strong></td>
<td style="padding: 0.75rem; border-bottom: 1px solid #e2e8f0;">رؤوس الحفر، المثبتات</td>
<td style="padding: 0.75rem; border-bottom: 1px solid #e2e8f0;">صعبة</td>
</tr>
<tr style="background: white;">
<td style="padding: 0.75rem; border-bottom: 1px solid #e2e8f0;"><strong>سلكية (Wireline)</strong></td>
<td style="padding: 0.75rem; border-bottom: 1px solid #e2e8f0;">كابلات السلكلاين، أدوات التسجيل</td>
<td style="padding: 0.75rem; border-bottom: 1px solid #e2e8f0;">متوسطة</td>
</tr>
<tr style="background: #f7fafc;">
<td style="padding: 0.75rem;"><strong>أجسام صغيرة (Junk)</strong></td>
<td style="padding: 0.75rem;">براغي، قطع معدنية، كرات</td>
<td style="padding: 0.75rem;">سهلة - متوسطة</td>
</tr>
</tbody>
</table>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 التكلفة والأثر الاقتصادي</h3>

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<p style="font-size: 1.1rem; margin-bottom: 1rem;">
<strong>💰 التأثير المالي:</strong> عمليات الاسترداد يمكن أن تكلف من عشرات الآلاف إلى ملايين الدولارات حسب:
</p>
<ul style="margin: 0; padding-right: 1.25rem;">
<li>نوع الحفارة ومعدل الإيجار اليومي</li>
<li>مدة العملية (قد تستغرق أيام إلى أسابيع)</li>
<li>تكلفة المعدات المتخصصة</li>
<li>تكلفة الخبراء المتخصصين</li>
</ul>
</div>

<div style="background: #fff3cd; padding: 1.25rem; border-radius: 10px; border-right: 4px solid #ffc107; margin: 1.5rem 0;">
<h4 style="color: #856404; margin-bottom: 0.75rem;">⚠️ ملاحظة مهمة:</h4>
<p style="margin: 0; color: #856404;">
الوقاية من مشاكل الاسترداد أقل تكلفة بكثير من حلها. الفحص الدوري للمعدات واتباع إجراءات التشغيل الصحيحة يقللان من احتمالية حدوث هذه المشاكل بشكل كبير.
</p>
</div>

</section>`,
          keyTerms: [
            { term: 'Fish (الجسم المستهدف)', definition: 'أي معدات مفقودة أو عالقة داخل البئر تحتاج للاسترداد - ليس لها علاقة بالسمك' },
            { term: 'Fishing Operations (عمليات الاسترداد)', definition: 'العمليات المتخصصة لانتشال المعدات المفقودة من البئر' },
            { term: 'Metal Fatigue (إجهاد المعدن)', definition: 'ضعف المعدن نتيجة الإجهاد المتكرر' },
            { term: 'Junk (الحطام المعدني)', definition: 'الأجسام المعدنية الصغيرة المفقودة في البئر' },
          ],
          practiceQuestion: {
            question: 'ما هو التعريف الصحيح لـ "Fish" في عمليات الحفر؟',
            options: [
              'نوع من الكائنات البحرية في الآبار البحرية',
              'أي جسم أو معدات مفقودة داخل البئر تحتاج للاسترداد',
              'أداة خاصة لتنظيف البئر',
              'نوع من سوائل الحفر'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Fishing Operations - Basic Concepts and Types of Fish',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Introduction to Fishing Operations</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<p style="font-size: 1.1rem; line-height: 1.8;">
<strong>Fishing Operations</strong> are operations conducted to retrieve foreign objects or lost equipment from inside the well. They are among the most complex and costly operations in the drilling industry, requiring high expertise and specialized equipment.
</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 What is a "Fish"?</h3>

<p style="margin-bottom: 1rem; line-height: 1.8;">
In drilling terminology, a <strong>Fish</strong> is any object or piece of equipment that is lost or separated inside the well and must be retrieved or bypassed to continue operations. The fish may be part of the drill pipe, a tool, or any other foreign object.
</p>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; border-left: 4px solid #1e3a5f; margin: 1.5rem 0;">
<h4 style="color: #1e3a5f; margin-bottom: 1rem;">Examples of Common Fish:</h4>
<ul style="list-style-type: none; padding: 0;">
<li style="margin-bottom: 0.75rem;">🔹 <strong>Separated Drill Pipe:</strong> Due to breakage or connection failure</li>
<li style="margin-bottom: 0.75rem;">🔹 <strong>Drill Bits:</strong> That separate from the BHA</li>
<li style="margin-bottom: 0.75rem;">🔹 <strong>Survey Tools (MWD/LWD):</strong> Expensive measurement tools</li>
<li style="margin-bottom: 0.75rem;">🔹 <strong>Stabilizers and Reamers:</strong> That become stuck and separate</li>
<li style="margin-bottom: 0.75rem;">🔹 <strong>Small Metal Objects:</strong> Bolts, rings, equipment pieces</li>
<li style="margin-bottom: 0.75rem;">🔹 <strong>Wireline Cables:</strong> That break inside the well</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 Causes of Fishing Operations</h3>

<div style="display: grid; gap: 1rem; margin-bottom: 1.5rem;">

<div style="background: #fff5f5; padding: 1.25rem; border-radius: 10px; border: 1px solid #feb2b2;">
<h4 style="color: #c53030; margin-bottom: 0.75rem;">1️⃣ Mechanical Causes</h4>
<ul style="margin: 0; padding-left: 1.25rem;">
<li>Metal Fatigue due to repeated rotation</li>
<li>Threaded connection failure from over or under-torquing</li>
<li>Corrosion and rust weakening the metal</li>
<li>Manufacturing defects in equipment</li>
</ul>
</div>

<div style="background: #f0fff4; padding: 1.25rem; border-radius: 10px; border: 1px solid #9ae6b4;">
<h4 style="color: #276749; margin-bottom: 0.75rem;">2️⃣ Operational Causes</h4>
<ul style="margin: 0; padding-left: 1.25rem;">
<li>Overloading equipment</li>
<li>Improper tool use</li>
<li>Not following correct operating procedures</li>
<li>Stuck pipe followed by incorrect freeing attempts</li>
</ul>
</div>

<div style="background: #fffaf0; padding: 1.25rem; border-radius: 10px; border: 1px solid #fbd38d;">
<h4 style="color: #c05621; margin-bottom: 0.75rem;">3️⃣ Geological Causes</h4>
<ul style="margin: 0; padding-left: 1.25rem;">
<li>Unstable formations</li>
<li>Wellbore collapse</li>
<li>Key seating</li>
<li>Abnormal pressure zones</li>
</ul>
</div>

</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 Fish Classification by Type</h3>

<div style="background: #e8f4fd; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 0.75rem; text-align: left; border-radius: 8px 0 0 0;">Fish Type</th>
<th style="padding: 0.75rem; text-align: left;">Description</th>
<th style="padding: 0.75rem; text-align: left; border-radius: 0 8px 0 0;">Recovery Difficulty</th>
</tr>
</thead>
<tbody>
<tr style="background: white;">
<td style="padding: 0.75rem; border-bottom: 1px solid #e2e8f0;"><strong>Tubular</strong></td>
<td style="padding: 0.75rem; border-bottom: 1px solid #e2e8f0;">Drill pipe, casing, tubing</td>
<td style="padding: 0.75rem; border-bottom: 1px solid #e2e8f0;">Medium</td>
</tr>
<tr style="background: #f7fafc;">
<td style="padding: 0.75rem; border-bottom: 1px solid #e2e8f0;"><strong>Solid</strong></td>
<td style="padding: 0.75rem; border-bottom: 1px solid #e2e8f0;">Drill bits, stabilizers</td>
<td style="padding: 0.75rem; border-bottom: 1px solid #e2e8f0;">Difficult</td>
</tr>
<tr style="background: white;">
<td style="padding: 0.75rem; border-bottom: 1px solid #e2e8f0;"><strong>Wireline</strong></td>
<td style="padding: 0.75rem; border-bottom: 1px solid #e2e8f0;">Wireline cables, logging tools</td>
<td style="padding: 0.75rem; border-bottom: 1px solid #e2e8f0;">Medium</td>
</tr>
<tr style="background: #f7fafc;">
<td style="padding: 0.75rem;"><strong>Junk</strong></td>
<td style="padding: 0.75rem;">Bolts, metal pieces, balls</td>
<td style="padding: 0.75rem;">Easy - Medium</td>
</tr>
</tbody>
</table>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 Cost and Economic Impact</h3>

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<p style="font-size: 1.1rem; margin-bottom: 1rem;">
<strong>💰 Financial Impact:</strong> Fishing operations can cost from tens of thousands to millions of dollars depending on:
</p>
<ul style="margin: 0; padding-left: 1.25rem;">
<li>Rig type and daily rental rate</li>
<li>Operation duration (may take days to weeks)</li>
<li>Specialized equipment costs</li>
<li>Specialist personnel costs</li>
</ul>
</div>

<div style="background: #fff3cd; padding: 1.25rem; border-radius: 10px; border-left: 4px solid #ffc107; margin: 1.5rem 0;">
<h4 style="color: #856404; margin-bottom: 0.75rem;">⚠️ Important Note:</h4>
<p style="margin: 0; color: #856404;">
Preventing fishing problems is far less expensive than solving them. Regular equipment inspection and following correct operating procedures significantly reduce the likelihood of these problems occurring.
</p>
</div>

</section>`,
          keyTerms: [
            { term: 'Fish', definition: 'Any lost object or equipment inside the well that needs to be retrieved' },
            { term: 'Fishing Operations', definition: 'Specialized operations to retrieve lost objects from the well' },
            { term: 'Metal Fatigue', definition: 'Weakening of metal due to repeated stress' },
            { term: 'Junk', definition: 'Small metal objects lost in the well' },
          ],
          practiceQuestion: {
            question: 'What is the correct definition of a "Fish" in drilling operations?',
            options: [
              'A type of marine life in offshore wells',
              'Any lost object or equipment inside the well that needs to be retrieved',
              'A special tool for cleaning the well',
              'A type of drilling fluid'
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
          title: 'أدوات الصيد الرئيسية - الماسكات والمغناطيسات',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 أدوات الصيد للأسماك الأنبوبية</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
تتنوع أدوات الصيد حسب نوع السمكة المراد استردادها. سنتناول في هذا اليوم الأدوات الرئيسية المستخدمة لاسترداد الأسماك الأنبوبية والأجسام المعدنية الصغيرة.
</p>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 الماسكات الخارجية (Overshots)</h3>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<p style="margin-bottom: 1rem;">
<strong>الأوفرشوت (Overshot)</strong> هو أداة صيد تُستخدم لاسترداد الأسماك الأنبوبية عن طريق الإمساك بها من الخارج. يتكون من:
</p>

<div style="display: grid; gap: 1rem;">
<div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #e2e8f0;">
<h4 style="color: #1e3a5f;">1. الصدفة (Bowl)</h4>
<p>الجزء الخارجي الذي يحتوي على آلية الإمساك</p>
</div>

<div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #e2e8f0;">
<h4 style="color: #1e3a5f;">2. السلة (Grapple)</h4>
<p>الجزء الذي يمسك بالسمكة - له أسنان مائلة تسمح بالدخول وتمنع الخروج</p>
</div>

<div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #e2e8f0;">
<h4 style="color: #1e3a5f;">3. الدليل (Guide)</h4>
<p>يوجه الأداة للدخول على السمكة بشكل صحيح</p>
</div>

<div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #e2e8f0;">
<h4 style="color: #1e3a5f;">4. حلقة التحكم (Control Ring)</h4>
<p>تتحكم في قوة الإمساك وتسمح بالتحرير عند الحاجة</p>
</div>
</div>
</div>

<div style="background: #e8f4fd; padding: 1.25rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #1e3a5f; margin-bottom: 0.75rem;">🔧 أنواع الأوفرشوت:</h4>
<ul style="margin: 0; padding-right: 1.25rem;">
<li><strong>Full Strength:</strong> للسحب بقوة كاملة</li>
<li><strong>Releasing:</strong> يمكن تحريره بسهولة</li>
<li><strong>Spiral Grapple:</strong> للأسطح التالفة</li>
<li><strong>Basket Grapple:</strong> للقطع القصيرة</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 الماسكات الداخلية (Spears)</h3>

<div style="background: #f0fff4; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<p style="margin-bottom: 1rem;">
<strong>السبير (Spear)</strong> هو أداة صيد تدخل داخل السمكة الأنبوبية وتمسكها من الداخل. يُستخدم عندما لا يمكن الوصول للجزء الخارجي من السمكة.
</p>

<h4 style="color: #276749; margin-bottom: 0.75rem;">مكونات السبير:</h4>
<ul style="margin: 0; padding-right: 1.25rem;">
<li><strong>المخروط (Mandrel):</strong> الجزء الذي يدخل داخل السمكة</li>
<li><strong>الشرائح (Slips):</strong> تتمدد للإمساك بالجدار الداخلي</li>
<li><strong>آلية التحرير:</strong> للتحرر من السمكة عند الحاجة</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 أدوات استرداد الأجسام الصغيرة (Junk Fishing)</h3>

<div style="display: grid; gap: 1rem; margin-bottom: 1.5rem;">

<div style="background: #fff5f5; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #c53030; margin-bottom: 0.75rem;">🧲 المغناطيس (Fishing Magnet)</h4>
<p>يجذب الأجسام المعدنية الحديدية من قاع البئر</p>
<ul style="margin-top: 0.5rem; padding-right: 1rem;">
<li>مغناطيس دائم: لا يحتاج طاقة</li>
<li>مغناطيس كهربائي: أقوى لكن يحتاج طاقة</li>
</ul>
</div>

<div style="background: #fffaf0; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #c05621; margin-bottom: 0.75rem;">🧺 سلة الصيد (Junk Basket)</h4>
<p>تجمع الأجسام الصغيرة في سلة شبكية</p>
<ul style="margin-top: 0.5rem; padding-right: 1rem;">
<li>Boot Basket: للأجسام المتوسطة</li>
<li>Circulation Junk Basket: تستخدم ضغط الطين</li>
</ul>
</div>

<div style="background: #f0fff4; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #276749; margin-bottom: 0.75rem;">🔩 أداة الانطباع (Impression Block)</h4>
<p>تُنزل لأخذ انطباع عن شكل السمكة قبل اختيار أداة الصيد المناسبة</p>
<ul style="margin-top: 0.5rem; padding-right: 1rem;">
<li>مصنوعة من الرصاص أو الألومنيوم</li>
<li>تعطي صورة واضحة عن حالة رأس السمكة</li>
</ul>
</div>

</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 اختيار أداة الصيد المناسبة</h3>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<p style="margin-bottom: 1rem;">يعتمد الاختيار على:</p>
<ol style="margin: 0; padding-right: 1.25rem;">
<li style="margin-bottom: 0.5rem;"><strong>حجم السمكة:</strong> القطر الداخلي والخارجي</li>
<li style="margin-bottom: 0.5rem;"><strong>نوع السمكة:</strong> أنبوبية، صلبة، أو سلكية</li>
<li style="margin-bottom: 0.5rem;"><strong>حالة رأس السمكة:</strong> سليم، تالف، أو مشوه</li>
<li style="margin-bottom: 0.5rem;"><strong>عمق السمكة:</strong> يؤثر على القوة المطلوبة</li>
<li><strong>ظروف البئر:</strong> درجة الحرارة، الضغط، نوع السائل</li>
</ol>
</div>

<div style="background: #fff3cd; padding: 1.25rem; border-radius: 10px; border-right: 4px solid #ffc107; margin: 1.5rem 0;">
<h4 style="color: #856404; margin-bottom: 0.75rem;">⚠️ نصيحة عملية:</h4>
<p style="margin: 0; color: #856404;">
قبل إنزال أي أداة صيد، يجب دائماً إنزال أداة الانطباع (Impression Block) لتحديد حالة رأس السمكة واختيار الأداة المناسبة بدقة.
</p>
</div>

</section>`,
          keyTerms: [
            { term: 'الأوفرشوت (Overshot)', definition: 'أداة صيد تمسك بالسمكة من الخارج' },
            { term: 'السبير (Spear)', definition: 'أداة صيد تدخل وتمسك بالسمكة من الداخل' },
            { term: 'السلة (Grapple)', definition: 'الجزء من الأوفرشوت الذي يمسك بالسمكة' },
            { term: 'أداة الانطباع (Impression Block)', definition: 'أداة لأخذ انطباع عن شكل رأس السمكة' },
            { term: 'مغناطيس الصيد (Fishing Magnet)', definition: 'يجذب الأجسام المعدنية الصغيرة من البئر' },
          ],
          practiceQuestion: {
            question: 'متى يُفضل استخدام السبير (Spear) بدلاً من الأوفرشوت (Overshot)؟',
            options: [
              'عندما تكون السمكة صغيرة جداً',
              'عندما لا يمكن الوصول للجزء الخارجي من السمكة',
              'عندما تكون السمكة غير معدنية',
              'عندما تكون درجة الحرارة عالية'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Main Fishing Tools - Catchers and Magnets',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Fishing Tools for Tubular Fish</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
Fishing tools vary according to the type of fish to be retrieved. Today we will cover the main tools used to retrieve tubular fish and small metal objects.
</p>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 External Catchers (Overshots)</h3>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<p style="margin-bottom: 1rem;">
An <strong>Overshot</strong> is a fishing tool used to retrieve tubular fish by gripping them from the outside. It consists of:
</p>

<div style="display: grid; gap: 1rem;">
<div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #e2e8f0;">
<h4 style="color: #1e3a5f;">1. Bowl</h4>
<p>The outer part that contains the gripping mechanism</p>
</div>

<div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #e2e8f0;">
<h4 style="color: #1e3a5f;">2. Grapple</h4>
<p>The part that grips the fish - has angled teeth that allow entry and prevent exit</p>
</div>

<div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #e2e8f0;">
<h4 style="color: #1e3a5f;">3. Guide</h4>
<p>Guides the tool to enter on the fish correctly</p>
</div>

<div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #e2e8f0;">
<h4 style="color: #1e3a5f;">4. Control Ring</h4>
<p>Controls gripping force and allows release when needed</p>
</div>
</div>
</div>

<div style="background: #e8f4fd; padding: 1.25rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #1e3a5f; margin-bottom: 0.75rem;">🔧 Types of Overshots:</h4>
<ul style="margin: 0; padding-left: 1.25rem;">
<li><strong>Full Strength:</strong> For full pull strength</li>
<li><strong>Releasing:</strong> Can be easily released</li>
<li><strong>Spiral Grapple:</strong> For damaged surfaces</li>
<li><strong>Basket Grapple:</strong> For short pieces</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 Internal Catchers (Spears)</h3>

<div style="background: #f0fff4; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<p style="margin-bottom: 1rem;">
A <strong>Spear</strong> is a fishing tool that enters inside the tubular fish and grips it from the inside. It is used when the outer part of the fish cannot be accessed.
</p>

<h4 style="color: #276749; margin-bottom: 0.75rem;">Spear Components:</h4>
<ul style="margin: 0; padding-left: 1.25rem;">
<li><strong>Mandrel:</strong> The part that enters inside the fish</li>
<li><strong>Slips:</strong> Expand to grip the inner wall</li>
<li><strong>Release Mechanism:</strong> To release from the fish when needed</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 Small Object Retrieval Tools (Junk Fishing)</h3>

<div style="display: grid; gap: 1rem; margin-bottom: 1.5rem;">

<div style="background: #fff5f5; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #c53030; margin-bottom: 0.75rem;">🧲 Fishing Magnet</h4>
<p>Attracts ferrous metal objects from the bottom of the well</p>
<ul style="margin-top: 0.5rem; padding-left: 1rem;">
<li>Permanent Magnet: No power required</li>
<li>Electromagnetic: Stronger but requires power</li>
</ul>
</div>

<div style="background: #fffaf0; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #c05621; margin-bottom: 0.75rem;">🧺 Junk Basket</h4>
<p>Collects small objects in a mesh basket</p>
<ul style="margin-top: 0.5rem; padding-left: 1rem;">
<li>Boot Basket: For medium objects</li>
<li>Circulation Junk Basket: Uses mud pressure</li>
</ul>
</div>

<div style="background: #f0fff4; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #276749; margin-bottom: 0.75rem;">🔩 Impression Block</h4>
<p>Lowered to take an impression of the fish shape before selecting the appropriate fishing tool</p>
<ul style="margin-top: 0.5rem; padding-left: 1rem;">
<li>Made of lead or aluminum</li>
<li>Provides a clear picture of the fish top condition</li>
</ul>
</div>

</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 Selecting the Right Fishing Tool</h3>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<p style="margin-bottom: 1rem;">Selection depends on:</p>
<ol style="margin: 0; padding-left: 1.25rem;">
<li style="margin-bottom: 0.5rem;"><strong>Fish Size:</strong> Inner and outer diameter</li>
<li style="margin-bottom: 0.5rem;"><strong>Fish Type:</strong> Tubular, solid, or wireline</li>
<li style="margin-bottom: 0.5rem;"><strong>Fish Top Condition:</strong> Intact, damaged, or deformed</li>
<li style="margin-bottom: 0.5rem;"><strong>Fish Depth:</strong> Affects required force</li>
<li><strong>Well Conditions:</strong> Temperature, pressure, fluid type</li>
</ol>
</div>

<div style="background: #fff3cd; padding: 1.25rem; border-radius: 10px; border-left: 4px solid #ffc107; margin: 1.5rem 0;">
<h4 style="color: #856404; margin-bottom: 0.75rem;">⚠️ Practical Tip:</h4>
<p style="margin: 0; color: #856404;">
Before running any fishing tool, always run an Impression Block to determine the fish top condition and accurately select the appropriate tool.
</p>
</div>

</section>`,
          keyTerms: [
            { term: 'Overshot', definition: 'A fishing tool that grips the fish from the outside' },
            { term: 'Spear', definition: 'A fishing tool that enters and grips the fish from the inside' },
            { term: 'Grapple', definition: 'The part of the overshot that grips the fish' },
            { term: 'Impression Block', definition: 'A tool to take an impression of the fish top shape' },
            { term: 'Fishing Magnet', definition: 'Attracts small metal objects from the well' },
          ],
          practiceQuestion: {
            question: 'When is it preferable to use a Spear instead of an Overshot?',
            options: [
              'When the fish is very small',
              'When the outer part of the fish cannot be accessed',
              'When the fish is non-metallic',
              'When the temperature is high'
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
          title: 'أدوات الصيد المتقدمة - الجارات والقاطعات',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 أدوات تحرير السمكة المنحشرة</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
عندما تكون السمكة منحشرة بشدة ولا يمكن سحبها مباشرة، تُستخدم أدوات متخصصة لتحريرها أو قطعها. هذه الأدوات تتطلب خبرة عالية في التشغيل.
</p>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 الجارات (Jars)</h3>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<p style="margin-bottom: 1rem;">
<strong>الجار (Jar)</strong> هو أداة تُولد ضربات قوية (صدمات) للأعلى أو للأسفل لتحرير السمكة المنحشرة. تعمل على مبدأ تراكم الطاقة ثم إطلاقها بشكل مفاجئ.
</p>

<div style="display: grid; gap: 1rem;">

<div style="background: #e8f4fd; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #1e3a5f; margin-bottom: 0.75rem;">1️⃣ الجار الميكانيكي (Mechanical Jar)</h4>
<ul style="margin: 0; padding-right: 1rem;">
<li>يعمل بآلية إطلاق ميكانيكية</li>
<li>يتطلب ضبط الشد المناسب قبل الإطلاق</li>
<li>موثوق ولا يحتاج صيانة معقدة</li>
<li>مناسب للضربات المتوسطة</li>
</ul>
</div>

<div style="background: #f0fff4; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #276749; margin-bottom: 0.75rem;">2️⃣ الجار الهيدروليكي (Hydraulic Jar)</h4>
<ul style="margin: 0; padding-right: 1rem;">
<li>يستخدم الزيت الهيدروليكي لتوليد الضربة</li>
<li>يمكن ضبط قوة الضربة</li>
<li>ضربات أقوى وأكثر تحكماً</li>
<li>يتطلب صيانة دورية</li>
</ul>
</div>

<div style="background: #fffaf0; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #c05621; margin-bottom: 0.75rem;">3️⃣ جار الانزلاق (Bumper Sub)</h4>
<ul style="margin: 0; padding-right: 1rem;">
<li>يوفر ضربات للأسفل</li>
<li>أبسط من الجارات الأخرى</li>
<li>يُستخدم غالباً مع أدوات الصيد الأخرى</li>
</ul>
</div>

</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 تسريع الجار (Jar Accelerator)</h3>

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<p style="margin-bottom: 1rem;">
<strong>مسرع الجار (Jar Accelerator)</strong> يُوضع فوق الجار مباشرة لزيادة قوة الضربة بشكل كبير. يعمل على:
</p>
<ul style="margin: 0; padding-right: 1.25rem;">
<li>تخزين طاقة إضافية أثناء السحب</li>
<li>إطلاق الطاقة المخزنة مع طاقة الجار</li>
<li>مضاعفة قوة الضربة الفعالة</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 أدوات القطع (Cutters)</h3>

<p style="margin-bottom: 1rem; line-height: 1.8;">
عندما يفشل تحرير السمكة، قد يكون القطع هو الحل الوحيد لتقليل الخسائر واسترداد أكبر قدر ممكن من المعدات.
</p>

<div style="display: grid; gap: 1rem; margin-bottom: 1.5rem;">

<div style="background: #fff5f5; padding: 1.25rem; border-radius: 10px; border: 1px solid #feb2b2;">
<h4 style="color: #c53030; margin-bottom: 0.75rem;">🔪 القاطع الكيميائي (Chemical Cutter)</h4>
<p style="margin-bottom: 0.5rem;">يستخدم تفاعلاً كيميائياً حارقاً لقطع الأنبوب</p>
<ul style="margin: 0; padding-right: 1rem;">
<li>سريع وفعال</li>
<li>لا يحتاج دوران</li>
<li>يتطلب دقة في تحديد موقع القطع</li>
</ul>
</div>

<div style="background: #f0fff4; padding: 1.25rem; border-radius: 10px; border: 1px solid #9ae6b4;">
<h4 style="color: #276749; margin-bottom: 0.75rem;">⚙️ القاطع الميكانيكي (Mechanical Cutter)</h4>
<p style="margin-bottom: 0.5rem;">يقطع الأنبوب بشفرات دوارة أو هيدروليكية</p>
<ul style="margin: 0; padding-right: 1rem;">
<li>يعطي قطعاً نظيفاً</li>
<li>يمكن التحكم في مكان القطع بدقة</li>
<li>يتطلب وقتاً أطول</li>
</ul>
</div>

<div style="background: #fffaf0; padding: 1.25rem; border-radius: 10px; border: 1px solid #fbd38d;">
<h4 style="color: #c05621; margin-bottom: 0.75rem;">💥 القاطع المتفجر (Explosive Cutter)</h4>
<p style="margin-bottom: 0.5rem;">يستخدم شحنة متفجرة موجهة</p>
<ul style="margin: 0; padding-right: 1rem;">
<li>للحالات الصعبة جداً</li>
<li>يتطلب إجراءات سلامة صارمة</li>
<li>يُستخدم كملاذ أخير</li>
</ul>
</div>

</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 أدوات الطحن والتوسيع</h3>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">

<div style="margin-bottom: 1rem;">
<h4 style="color: #1e3a5f;">المطاحن (Mills)</h4>
<p>تُستخدم لطحن السمكة إلى قطع صغيرة يمكن تدويرها للسطح مع سائل الحفر</p>
</div>

<div style="margin-bottom: 1rem;">
<h4 style="color: #1e3a5f;">حذاء الجنك (Junk Mill)</h4>
<p>يطحن الأجسام الصلبة مثل رؤوس الحفر المكسورة</p>
</div>

<div>
<h4 style="color: #1e3a5f;">موسع القيادة (Pilot Mill)</h4>
<p>يُستخدم للدخول على السمكة وتوسيطها قبل عملية الصيد</p>
</div>

</div>

<div style="background: #fff3cd; padding: 1.25rem; border-radius: 10px; border-right: 4px solid #ffc107; margin: 1.5rem 0;">
<h4 style="color: #856404; margin-bottom: 0.75rem;">⚠️ قرار القطع:</h4>
<p style="margin: 0; color: #856404;">
قرار قطع السمكة يُتخذ بعد فشل جميع محاولات التحرير. يجب حساب التكلفة والوقت بدقة، فأحياناً يكون ترك جزء من السمكة في البئر (Sidetrack) أقل تكلفة من محاولات الاسترداد المتكررة.
</p>
</div>

</section>`,
          keyTerms: [
            { term: 'الجار (Jar)', definition: 'أداة تولد ضربات قوية لتحرير السمكة المنحشرة' },
            { term: 'مسرع الجار (Jar Accelerator)', definition: 'يزيد من قوة ضربة الجار' },
            { term: 'القاطع الكيميائي (Chemical Cutter)', definition: 'يقطع الأنبوب بتفاعل كيميائي حارق' },
            { term: 'المطحنة (Mill)', definition: 'تطحن السمكة إلى قطع صغيرة' },
            { term: 'Bumper Sub', definition: 'جار يوفر ضربات للأسفل' },
          ],
          practiceQuestion: {
            question: 'ما هي وظيفة مسرع الجار (Jar Accelerator)؟',
            options: [
              'قطع السمكة المنحشرة',
              'تخزين وإطلاق طاقة إضافية لزيادة قوة الضربة',
              'توجيه الجار نحو السمكة',
              'حماية الجار من التلف'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Advanced Fishing Tools - Jars and Cutters',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Tools for Freeing Stuck Fish</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
When the fish is severely stuck and cannot be pulled directly, specialized tools are used to free or cut it. These tools require high expertise in operation.
</p>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 Jars</h3>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<p style="margin-bottom: 1rem;">
A <strong>Jar</strong> is a tool that generates powerful blows (impacts) upward or downward to free a stuck fish. It works on the principle of accumulating energy and then releasing it suddenly.
</p>

<div style="display: grid; gap: 1rem;">

<div style="background: #e8f4fd; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #1e3a5f; margin-bottom: 0.75rem;">1️⃣ Mechanical Jar</h4>
<ul style="margin: 0; padding-left: 1rem;">
<li>Works with mechanical release mechanism</li>
<li>Requires proper tension adjustment before firing</li>
<li>Reliable and doesn't need complex maintenance</li>
<li>Suitable for medium impacts</li>
</ul>
</div>

<div style="background: #f0fff4; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #276749; margin-bottom: 0.75rem;">2️⃣ Hydraulic Jar</h4>
<ul style="margin: 0; padding-left: 1rem;">
<li>Uses hydraulic oil to generate the blow</li>
<li>Impact force can be adjusted</li>
<li>Stronger and more controlled impacts</li>
<li>Requires periodic maintenance</li>
</ul>
</div>

<div style="background: #fffaf0; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #c05621; margin-bottom: 0.75rem;">3️⃣ Bumper Sub</h4>
<ul style="margin: 0; padding-left: 1rem;">
<li>Provides downward impacts</li>
<li>Simpler than other jars</li>
<li>Often used with other fishing tools</li>
</ul>
</div>

</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 Jar Accelerator</h3>

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<p style="margin-bottom: 1rem;">
A <strong>Jar Accelerator</strong> is placed directly above the jar to significantly increase impact force. It works by:
</p>
<ul style="margin: 0; padding-left: 1.25rem;">
<li>Storing additional energy during pull</li>
<li>Releasing stored energy with jar energy</li>
<li>Doubling the effective impact force</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 Cutters</h3>

<p style="margin-bottom: 1rem; line-height: 1.8;">
When freeing the fish fails, cutting may be the only solution to minimize losses and recover as much equipment as possible.
</p>

<div style="display: grid; gap: 1rem; margin-bottom: 1.5rem;">

<div style="background: #fff5f5; padding: 1.25rem; border-radius: 10px; border: 1px solid #feb2b2;">
<h4 style="color: #c53030; margin-bottom: 0.75rem;">🔪 Chemical Cutter</h4>
<p style="margin-bottom: 0.5rem;">Uses a burning chemical reaction to cut the pipe</p>
<ul style="margin: 0; padding-left: 1rem;">
<li>Fast and effective</li>
<li>No rotation needed</li>
<li>Requires precision in determining cut location</li>
</ul>
</div>

<div style="background: #f0fff4; padding: 1.25rem; border-radius: 10px; border: 1px solid #9ae6b4;">
<h4 style="color: #276749; margin-bottom: 0.75rem;">⚙️ Mechanical Cutter</h4>
<p style="margin-bottom: 0.5rem;">Cuts the pipe with rotating or hydraulic blades</p>
<ul style="margin: 0; padding-left: 1rem;">
<li>Gives a clean cut</li>
<li>Cut location can be precisely controlled</li>
<li>Takes longer time</li>
</ul>
</div>

<div style="background: #fffaf0; padding: 1.25rem; border-radius: 10px; border: 1px solid #fbd38d;">
<h4 style="color: #c05621; margin-bottom: 0.75rem;">💥 Explosive Cutter</h4>
<p style="margin-bottom: 0.5rem;">Uses a directed explosive charge</p>
<ul style="margin: 0; padding-left: 1rem;">
<li>For very difficult cases</li>
<li>Requires strict safety procedures</li>
<li>Used as last resort</li>
</ul>
</div>

</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 Milling and Reaming Tools</h3>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">

<div style="margin-bottom: 1rem;">
<h4 style="color: #1e3a5f;">Mills</h4>
<p>Used to grind the fish into small pieces that can be circulated to surface with drilling fluid</p>
</div>

<div style="margin-bottom: 1rem;">
<h4 style="color: #1e3a5f;">Junk Mill</h4>
<p>Grinds solid objects like broken drill bits</p>
</div>

<div>
<h4 style="color: #1e3a5f;">Pilot Mill</h4>
<p>Used to enter on the fish and center it before the fishing operation</p>
</div>

</div>

<div style="background: #fff3cd; padding: 1.25rem; border-radius: 10px; border-left: 4px solid #ffc107; margin: 1.5rem 0;">
<h4 style="color: #856404; margin-bottom: 0.75rem;">⚠️ Cutting Decision:</h4>
<p style="margin: 0; color: #856404;">
The decision to cut the fish is made after all freeing attempts fail. Cost and time must be calculated precisely, as sometimes leaving part of the fish in the well (Sidetrack) is less costly than repeated recovery attempts.
</p>
</div>

</section>`,
          keyTerms: [
            { term: 'Jar', definition: 'A tool that generates powerful blows to free a stuck fish' },
            { term: 'Jar Accelerator', definition: 'Increases the jar impact force' },
            { term: 'Chemical Cutter', definition: 'Cuts the pipe with a burning chemical reaction' },
            { term: 'Mill', definition: 'Grinds the fish into small pieces' },
            { term: 'Bumper Sub', definition: 'A jar that provides downward impacts' },
          ],
          practiceQuestion: {
            question: 'What is the function of a Jar Accelerator?',
            options: [
              'Cutting the stuck fish',
              'Storing and releasing additional energy to increase impact force',
              'Guiding the jar toward the fish',
              'Protecting the jar from damage'
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
          title: 'تخطيط وتنفيذ عمليات الصيد',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 خطوات التخطيط لعملية الصيد</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
النجاح في عمليات الصيد يعتمد بشكل كبير على التخطيط الدقيق وجمع المعلومات الكافية قبل البدء. كل دقيقة من التخطيط توفر ساعات من العمل غير المثمر.
</p>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 المرحلة الأولى: جمع المعلومات</h3>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">

<div style="display: grid; gap: 1rem;">

<div style="background: white; padding: 1rem; border-radius: 8px; border-right: 4px solid #1e3a5f;">
<h4 style="color: #1e3a5f; margin-bottom: 0.5rem;">1. معلومات السمكة</h4>
<ul style="margin: 0; padding-right: 1rem;">
<li>نوع المعدات المفقودة</li>
<li>الأبعاد (القطر الداخلي والخارجي، الطول)</li>
<li>المادة المصنوعة منها</li>
<li>موقع الفصل أو الكسر</li>
</ul>
</div>

<div style="background: white; padding: 1rem; border-radius: 8px; border-right: 4px solid #e67e22;">
<h4 style="color: #e67e22; margin-bottom: 0.5rem;">2. معلومات البئر</h4>
<ul style="margin: 0; padding-right: 1rem;">
<li>عمق السمكة</li>
<li>حجم وحالة الثقب</li>
<li>نوع وكثافة سائل الحفر</li>
<li>درجة الحرارة والضغط</li>
<li>زاوية الميل والاتجاه</li>
</ul>
</div>

<div style="background: white; padding: 1rem; border-radius: 8px; border-right: 4px solid #276749;">
<h4 style="color: #276749; margin-bottom: 0.5rem;">3. ظروف الانحشار</h4>
<ul style="margin: 0; padding-right: 1rem;">
<li>سبب الانحشار أو الفقدان</li>
<li>الوقت منذ الحادث</li>
<li>محاولات التحرير السابقة</li>
<li>القوى المطبقة سابقاً</li>
</ul>
</div>

</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 المرحلة الثانية: تحديد حالة السمكة</h3>

<div style="background: #e8f4fd; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #1e3a5f; margin-bottom: 1rem;">إجراءات التحقق:</h4>

<ol style="padding-right: 1.25rem;">
<li style="margin-bottom: 1rem;">
<strong>إنزال أداة الانطباع (Impression Block):</strong>
<p>لأخذ انطباع عن شكل رأس السمكة وحالتها</p>
</li>
<li style="margin-bottom: 1rem;">
<strong>تحليل الانطباع:</strong>
<p>تحديد ما إذا كان الرأس سليماً أو تالفاً أو مائلاً</p>
</li>
<li style="margin-bottom: 1rem;">
<strong>قياس العمق الحقيقي:</strong>
<p>التأكد من العمق الفعلي للسمكة</p>
</li>
<li>
<strong>تقييم حالة الثقب:</strong>
<p>هل هناك انهيارات أو تضيقات فوق السمكة؟</p>
</li>
</ol>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 المرحلة الثالثة: اختيار استراتيجية الصيد</h3>

<div style="display: grid; gap: 1rem; margin-bottom: 1.5rem;">

<div style="background: #f0fff4; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #276749; margin-bottom: 0.75rem;">🔄 استراتيجية 1: الاسترداد المباشر</h4>
<p>إذا كانت السمكة حرة أو منحشرة بشكل خفيف:</p>
<ul style="margin-top: 0.5rem; padding-right: 1rem;">
<li>استخدام Overshot أو Spear</li>
<li>سحب مباشر مع دوران خفيف</li>
<li>الخيار الأسرع والأقل تكلفة</li>
</ul>
</div>

<div style="background: #fffaf0; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #c05621; margin-bottom: 0.75rem;">⚡ استراتيجية 2: التحرير بالضرب (Jarring)</h4>
<p>إذا كانت السمكة منحشرة:</p>
<ul style="margin-top: 0.5rem; padding-right: 1rem;">
<li>إضافة Jar و Accelerator للتجميعة</li>
<li>تطبيق ضربات متكررة للأعلى</li>
<li>قد يستغرق ساعات إلى أيام</li>
</ul>
</div>

<div style="background: #fff5f5; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #c53030; margin-bottom: 0.75rem;">✂️ استراتيجية 3: القطع والاسترداد</h4>
<p>إذا فشلت محاولات التحرير:</p>
<ul style="margin-top: 0.5rem; padding-right: 1rem;">
<li>قطع السمكة فوق نقطة الانحشار</li>
<li>استرداد الجزء العلوي</li>
<li>طحن أو تجاوز الجزء السفلي</li>
</ul>
</div>

<div style="background: #e8f4fd; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #1e3a5f; margin-bottom: 0.75rem;">↗️ استراتيجية 4: الانحراف (Sidetrack)</h4>
<p>إذا كان الاسترداد غير اقتصادي:</p>
<ul style="margin-top: 0.5rem; padding-right: 1rem;">
<li>حفر مسار جانبي حول السمكة</li>
<li>يُستخدم عندما تكون السمكة عميقة جداً</li>
<li>قرار اقتصادي أكثر منه تقني</li>
</ul>
</div>

</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 تصميم تجميعة الصيد (Fishing BHA)</h3>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<p style="margin-bottom: 1rem;"><strong>مكونات تجميعة الصيد النموذجية (من الأسفل للأعلى):</strong></p>
<ol style="margin: 0; padding-right: 1.25rem;">
<li style="margin-bottom: 0.5rem;">أداة الصيد (Overshot/Spear)</li>
<li style="margin-bottom: 0.5rem;">وصلة الأمان (Safety Joint)</li>
<li style="margin-bottom: 0.5rem;">الجار (Jar)</li>
<li style="margin-bottom: 0.5rem;">مسرع الجار (Jar Accelerator)</li>
<li style="margin-bottom: 0.5rem;">أثقال الحفر (Drill Collars) - للوزن</li>
<li>أنابيب الحفر الثقيلة (HWDP)</li>
</ol>
</div>

<div style="background: #fff3cd; padding: 1.25rem; border-radius: 10px; border-right: 4px solid #ffc107; margin: 1.5rem 0;">
<h4 style="color: #856404; margin-bottom: 0.75rem;">⚠️ وصلة الأمان (Safety Joint):</h4>
<p style="margin: 0; color: #856404;">
توضع دائماً فوق أداة الصيد مباشرة. تسمح بفصل تجميعة الصيد من السمكة في حالة فشل العملية، لتجنب فقدان التجميعة كاملة.
</p>
</div>

</section>`,
          keyTerms: [
            { term: 'تجميعة الصيد (Fishing BHA)', definition: 'مجموعة الأدوات المستخدمة في عملية الصيد' },
            { term: 'وصلة الأمان (Safety Joint)', definition: 'تسمح بفصل التجميعة في حالة الفشل' },
            { term: 'الانحراف (Sidetrack)', definition: 'حفر مسار جانبي حول السمكة' },
            { term: 'الضرب (Jarring)', definition: 'تطبيق ضربات لتحرير السمكة' },
          ],
          practiceQuestion: {
            question: 'ما هي الخطوة الأولى قبل اختيار أداة الصيد المناسبة؟',
            options: [
              'البدء مباشرة بالسحب',
              'إنزال أداة الانطباع لتحديد حالة رأس السمكة',
              'قطع السمكة',
              'حفر مسار جانبي'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Planning and Executing Fishing Operations',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Steps for Planning a Fishing Operation</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
Success in fishing operations depends heavily on careful planning and gathering sufficient information before starting. Every minute of planning saves hours of unproductive work.
</p>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 Phase One: Gathering Information</h3>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">

<div style="display: grid; gap: 1rem;">

<div style="background: white; padding: 1rem; border-radius: 8px; border-left: 4px solid #1e3a5f;">
<h4 style="color: #1e3a5f; margin-bottom: 0.5rem;">1. Fish Information</h4>
<ul style="margin: 0; padding-left: 1rem;">
<li>Type of lost equipment</li>
<li>Dimensions (ID, OD, length)</li>
<li>Material it's made of</li>
<li>Location of separation or break</li>
</ul>
</div>

<div style="background: white; padding: 1rem; border-radius: 8px; border-left: 4px solid #e67e22;">
<h4 style="color: #e67e22; margin-bottom: 0.5rem;">2. Well Information</h4>
<ul style="margin: 0; padding-left: 1rem;">
<li>Fish depth</li>
<li>Hole size and condition</li>
<li>Drilling fluid type and density</li>
<li>Temperature and pressure</li>
<li>Inclination angle and azimuth</li>
</ul>
</div>

<div style="background: white; padding: 1rem; border-radius: 8px; border-left: 4px solid #276749;">
<h4 style="color: #276749; margin-bottom: 0.5rem;">3. Stuck Conditions</h4>
<ul style="margin: 0; padding-left: 1rem;">
<li>Cause of sticking or loss</li>
<li>Time since incident</li>
<li>Previous freeing attempts</li>
<li>Previously applied forces</li>
</ul>
</div>

</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 Phase Two: Determining Fish Condition</h3>

<div style="background: #e8f4fd; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #1e3a5f; margin-bottom: 1rem;">Verification Procedures:</h4>

<ol style="padding-left: 1.25rem;">
<li style="margin-bottom: 1rem;">
<strong>Running Impression Block:</strong>
<p>To take an impression of the fish top shape and condition</p>
</li>
<li style="margin-bottom: 1rem;">
<strong>Impression Analysis:</strong>
<p>Determine if the top is intact, damaged, or tilted</p>
</li>
<li style="margin-bottom: 1rem;">
<strong>Measuring True Depth:</strong>
<p>Confirm the actual depth of the fish</p>
</li>
<li>
<strong>Hole Condition Assessment:</strong>
<p>Are there collapses or restrictions above the fish?</p>
</li>
</ol>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 Phase Three: Selecting Fishing Strategy</h3>

<div style="display: grid; gap: 1rem; margin-bottom: 1.5rem;">

<div style="background: #f0fff4; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #276749; margin-bottom: 0.75rem;">🔄 Strategy 1: Direct Retrieval</h4>
<p>If the fish is free or lightly stuck:</p>
<ul style="margin-top: 0.5rem; padding-left: 1rem;">
<li>Use Overshot or Spear</li>
<li>Direct pull with light rotation</li>
<li>Fastest and least costly option</li>
</ul>
</div>

<div style="background: #fffaf0; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #c05621; margin-bottom: 0.75rem;">⚡ Strategy 2: Freeing by Jarring</h4>
<p>If the fish is stuck:</p>
<ul style="margin-top: 0.5rem; padding-left: 1rem;">
<li>Add Jar and Accelerator to the assembly</li>
<li>Apply repeated upward impacts</li>
<li>May take hours to days</li>
</ul>
</div>

<div style="background: #fff5f5; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #c53030; margin-bottom: 0.75rem;">✂️ Strategy 3: Cut and Retrieve</h4>
<p>If freeing attempts fail:</p>
<ul style="margin-top: 0.5rem; padding-left: 1rem;">
<li>Cut the fish above the stuck point</li>
<li>Retrieve the upper portion</li>
<li>Mill or bypass the lower portion</li>
</ul>
</div>

<div style="background: #e8f4fd; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #1e3a5f; margin-bottom: 0.75rem;">↗️ Strategy 4: Sidetrack</h4>
<p>If retrieval is not economical:</p>
<ul style="margin-top: 0.5rem; padding-left: 1rem;">
<li>Drill a side path around the fish</li>
<li>Used when fish is very deep</li>
<li>An economic decision more than technical</li>
</ul>
</div>

</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 Designing the Fishing BHA</h3>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<p style="margin-bottom: 1rem;"><strong>Typical Fishing BHA Components (bottom to top):</strong></p>
<ol style="margin: 0; padding-left: 1.25rem;">
<li style="margin-bottom: 0.5rem;">Fishing Tool (Overshot/Spear)</li>
<li style="margin-bottom: 0.5rem;">Safety Joint</li>
<li style="margin-bottom: 0.5rem;">Jar</li>
<li style="margin-bottom: 0.5rem;">Jar Accelerator</li>
<li style="margin-bottom: 0.5rem;">Drill Collars - for weight</li>
<li>Heavy Weight Drill Pipe (HWDP)</li>
</ol>
</div>

<div style="background: #fff3cd; padding: 1.25rem; border-radius: 10px; border-left: 4px solid #ffc107; margin: 1.5rem 0;">
<h4 style="color: #856404; margin-bottom: 0.75rem;">⚠️ Safety Joint:</h4>
<p style="margin: 0; color: #856404;">
Always placed directly above the fishing tool. It allows separation of the fishing assembly from the fish in case of operation failure, to avoid losing the entire assembly.
</p>
</div>

</section>`,
          keyTerms: [
            { term: 'Fishing BHA', definition: 'The set of tools used in fishing operations' },
            { term: 'Safety Joint', definition: 'Allows assembly separation in case of failure' },
            { term: 'Sidetrack', definition: 'Drilling a side path around the fish' },
            { term: 'Jarring', definition: 'Applying impacts to free the fish' },
          ],
          practiceQuestion: {
            question: 'What is the first step before selecting the appropriate fishing tool?',
            options: [
              'Start pulling directly',
              'Run an impression block to determine fish top condition',
              'Cut the fish',
              'Drill a sidetrack'
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
          title: 'مراجعة شاملة - عمليات الصيد',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 ملخص الأسبوع: عمليات الصيد</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<p style="font-size: 1.1rem;">
راجعنا خلال هذا الأسبوع كل ما يتعلق بعمليات الصيد من المفاهيم الأساسية إلى التخطيط والتنفيذ. إليك ملخصاً شاملاً للنقاط الرئيسية.
</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 اليوم الأول: المفاهيم الأساسية</h3>

<div style="background: #f8f9fa; padding: 1.25rem; border-radius: 10px; margin-bottom: 1rem;">
<ul style="margin: 0; padding-right: 1.25rem;">
<li><strong>السمكة:</strong> أي جسم مفقود داخل البئر يحتاج للاسترداد</li>
<li><strong>أسباب الصيد:</strong> ميكانيكية، تشغيلية، جيولوجية</li>
<li><strong>أنواع الأسماك:</strong> أنبوبية، صلبة، سلكية، نفايات معدنية</li>
<li><strong>التأثير الاقتصادي:</strong> قد تكلف ملايين الدولارات</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 اليوم الثاني: أدوات الصيد الرئيسية</h3>

<div style="background: #e8f4fd; padding: 1.25rem; border-radius: 10px; margin-bottom: 1rem;">
<table style="width: 100%; border-collapse: collapse;">
<tr>
<td style="padding: 0.5rem; border-bottom: 1px solid #cbd5e0;"><strong>Overshot</strong></td>
<td style="padding: 0.5rem; border-bottom: 1px solid #cbd5e0;">يمسك من الخارج</td>
</tr>
<tr>
<td style="padding: 0.5rem; border-bottom: 1px solid #cbd5e0;"><strong>Spear</strong></td>
<td style="padding: 0.5rem; border-bottom: 1px solid #cbd5e0;">يمسك من الداخل</td>
</tr>
<tr>
<td style="padding: 0.5rem; border-bottom: 1px solid #cbd5e0;"><strong>Fishing Magnet</strong></td>
<td style="padding: 0.5rem; border-bottom: 1px solid #cbd5e0;">يجذب الأجسام الحديدية</td>
</tr>
<tr>
<td style="padding: 0.5rem; border-bottom: 1px solid #cbd5e0;"><strong>Junk Basket</strong></td>
<td style="padding: 0.5rem; border-bottom: 1px solid #cbd5e0;">يجمع الأجسام الصغيرة</td>
</tr>
<tr>
<td style="padding: 0.5rem;"><strong>Impression Block</strong></td>
<td style="padding: 0.5rem;">يحدد حالة رأس السمكة</td>
</tr>
</table>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 اليوم الثالث: الأدوات المتقدمة</h3>

<div style="background: #f0fff4; padding: 1.25rem; border-radius: 10px; margin-bottom: 1rem;">
<ul style="margin: 0; padding-right: 1.25rem;">
<li><strong>الجارات:</strong> ميكانيكية وهيدروليكية - لتوليد ضربات التحرير</li>
<li><strong>Jar Accelerator:</strong> يضاعف قوة الضربة</li>
<li><strong>القواطع:</strong> كيميائية، ميكانيكية، متفجرة</li>
<li><strong>المطاحن:</strong> لطحن الأجسام الصلبة</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 اليوم الرابع: التخطيط والتنفيذ</h3>

<div style="background: #fffaf0; padding: 1.25rem; border-radius: 10px; margin-bottom: 1rem;">
<ol style="margin: 0; padding-right: 1.25rem;">
<li style="margin-bottom: 0.5rem;"><strong>جمع المعلومات:</strong> عن السمكة والبئر وظروف الانحشار</li>
<li style="margin-bottom: 0.5rem;"><strong>تحديد الحالة:</strong> باستخدام Impression Block</li>
<li style="margin-bottom: 0.5rem;"><strong>اختيار الاستراتيجية:</strong> استرداد، ضرب، قطع، أو انحراف</li>
<li><strong>تصميم تجميعة الصيد:</strong> مع وصلة الأمان</li>
</ol>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 النقاط الحرجة للتذكر</h3>

<div style="display: grid; gap: 1rem; margin-bottom: 1.5rem;">

<div style="background: #fff5f5; padding: 1rem; border-radius: 8px; border-right: 4px solid #c53030;">
<p style="margin: 0;"><strong>⚠️ دائماً:</strong> استخدم Impression Block قبل اختيار أداة الصيد</p>
</div>

<div style="background: #fff5f5; padding: 1rem; border-radius: 8px; border-right: 4px solid #c53030;">
<p style="margin: 0;"><strong>⚠️ دائماً:</strong> ضع Safety Joint فوق أداة الصيد</p>
</div>

<div style="background: #fff5f5; padding: 1rem; border-radius: 8px; border-right: 4px solid #c53030;">
<p style="margin: 0;"><strong>⚠️ لا تنسَ:</strong> الوقاية أفضل من العلاج - الفحص الدوري يمنع مشاكل الصيد</p>
</div>

</div>

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<h4 style="margin-bottom: 1rem;">🎯 هل أنت مستعد للاختبار؟</h4>
<p style="margin: 0;">
غداً سيكون اختبار شامل من 10 أسئلة يغطي جميع مواضيع هذا الأسبوع. راجع المفاهيم والمصطلحات جيداً!
</p>
</div>

</section>`,
          keyTerms: [],
        },
        en: {
          title: 'Comprehensive Review - Fishing Operations',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Week Summary: Fishing Operations</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<p style="font-size: 1.1rem;">
This week we reviewed everything related to fishing operations from basic concepts to planning and execution. Here is a comprehensive summary of the key points.
</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 Day One: Basic Concepts</h3>

<div style="background: #f8f9fa; padding: 1.25rem; border-radius: 10px; margin-bottom: 1rem;">
<ul style="margin: 0; padding-left: 1.25rem;">
<li><strong>Fish:</strong> Any lost object inside the well that needs to be retrieved</li>
<li><strong>Fishing Causes:</strong> Mechanical, operational, geological</li>
<li><strong>Fish Types:</strong> Tubular, solid, wireline, junk</li>
<li><strong>Economic Impact:</strong> Can cost millions of dollars</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 Day Two: Main Fishing Tools</h3>

<div style="background: #e8f4fd; padding: 1.25rem; border-radius: 10px; margin-bottom: 1rem;">
<table style="width: 100%; border-collapse: collapse;">
<tr>
<td style="padding: 0.5rem; border-bottom: 1px solid #cbd5e0;"><strong>Overshot</strong></td>
<td style="padding: 0.5rem; border-bottom: 1px solid #cbd5e0;">Grips from outside</td>
</tr>
<tr>
<td style="padding: 0.5rem; border-bottom: 1px solid #cbd5e0;"><strong>Spear</strong></td>
<td style="padding: 0.5rem; border-bottom: 1px solid #cbd5e0;">Grips from inside</td>
</tr>
<tr>
<td style="padding: 0.5rem; border-bottom: 1px solid #cbd5e0;"><strong>Fishing Magnet</strong></td>
<td style="padding: 0.5rem; border-bottom: 1px solid #cbd5e0;">Attracts ferrous objects</td>
</tr>
<tr>
<td style="padding: 0.5rem; border-bottom: 1px solid #cbd5e0;"><strong>Junk Basket</strong></td>
<td style="padding: 0.5rem; border-bottom: 1px solid #cbd5e0;">Collects small objects</td>
</tr>
<tr>
<td style="padding: 0.5rem;"><strong>Impression Block</strong></td>
<td style="padding: 0.5rem;">Determines fish top condition</td>
</tr>
</table>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 Day Three: Advanced Tools</h3>

<div style="background: #f0fff4; padding: 1.25rem; border-radius: 10px; margin-bottom: 1rem;">
<ul style="margin: 0; padding-left: 1.25rem;">
<li><strong>Jars:</strong> Mechanical and hydraulic - generate freeing impacts</li>
<li><strong>Jar Accelerator:</strong> Doubles impact force</li>
<li><strong>Cutters:</strong> Chemical, mechanical, explosive</li>
<li><strong>Mills:</strong> For grinding solid objects</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 Day Four: Planning and Execution</h3>

<div style="background: #fffaf0; padding: 1.25rem; border-radius: 10px; margin-bottom: 1rem;">
<ol style="margin: 0; padding-left: 1.25rem;">
<li style="margin-bottom: 0.5rem;"><strong>Gathering Information:</strong> About fish, well, and stuck conditions</li>
<li style="margin-bottom: 0.5rem;"><strong>Determining Condition:</strong> Using Impression Block</li>
<li style="margin-bottom: 0.5rem;"><strong>Selecting Strategy:</strong> Retrieve, jar, cut, or sidetrack</li>
<li><strong>Designing Fishing BHA:</strong> With Safety Joint</li>
</ol>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📌 Critical Points to Remember</h3>

<div style="display: grid; gap: 1rem; margin-bottom: 1.5rem;">

<div style="background: #fff5f5; padding: 1rem; border-radius: 8px; border-left: 4px solid #c53030;">
<p style="margin: 0;"><strong>⚠️ Always:</strong> Use Impression Block before selecting fishing tool</p>
</div>

<div style="background: #fff5f5; padding: 1rem; border-radius: 8px; border-left: 4px solid #c53030;">
<p style="margin: 0;"><strong>⚠️ Always:</strong> Place Safety Joint above fishing tool</p>
</div>

<div style="background: #fff5f5; padding: 1rem; border-radius: 8px; border-left: 4px solid #c53030;">
<p style="margin: 0;"><strong>⚠️ Don't Forget:</strong> Prevention is better than cure - regular inspection prevents fishing problems</p>
</div>

</div>

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<h4 style="margin-bottom: 1rem;">🎯 Are You Ready for the Test?</h4>
<p style="margin: 0;">
Tomorrow there will be a comprehensive 10-question test covering all topics from this week. Review the concepts and terminology well!
</p>
</div>

</section>`,
          keyTerms: [],
        },
      },
    },
    {
      day: 6,
      type: 'quiz',
      content: {
        ar: {
          title: 'اختبار عمليات الصيد',
          explanation: 'اختبار شامل من 10 أسئلة حول عمليات الصيد',
          keyTerms: [],
        },
        en: {
          title: 'Fishing Operations Quiz',
          explanation: 'Comprehensive 10-question quiz on Fishing Operations',
          keyTerms: [],
        },
      },
      quiz: {
        ar: [
          {
            question: 'ما هو التعريف الصحيح لـ "السمكة" في عمليات الحفر؟',
            options: ['نوع من سوائل الحفر', 'أي جسم مفقود داخل البئر يحتاج للاسترداد', 'أداة لقياس عمق البئر', 'نوع من التكوينات الصخرية'],
            correctAnswer: 1
          },
          {
            question: 'أي أداة تُستخدم لأخذ انطباع عن شكل رأس السمكة؟',
            options: ['Overshot', 'Spear', 'Impression Block', 'Jar'],
            correctAnswer: 2
          },
          {
            question: 'ما الفرق الرئيسي بين Overshot و Spear؟',
            options: ['Overshot للأجسام الكبيرة فقط', 'Overshot يمسك من الخارج و Spear من الداخل', 'Spear أقوى من Overshot', 'لا يوجد فرق بينهما'],
            correctAnswer: 1
          },
          {
            question: 'ما هي وظيفة Jar Accelerator؟',
            options: ['قطع السمكة', 'زيادة قوة ضربة الجار', 'توجيه أداة الصيد', 'تنظيف البئر'],
            correctAnswer: 1
          },
          {
            question: 'أين توضع وصلة الأمان (Safety Joint) في تجميعة الصيد؟',
            options: ['في أعلى التجميعة', 'فوق أداة الصيد مباشرة', 'تحت الجار', 'في منتصف أنابيب الحفر'],
            correctAnswer: 1
          },
          {
            question: 'ما هو الخيار الأفضل عندما تفشل جميع محاولات استرداد السمكة؟',
            options: ['الاستمرار في الضرب لأيام', 'Sidetrack أو طحن السمكة', 'ترك البئر', 'زيادة كثافة سائل الحفر'],
            correctAnswer: 1
          },
          {
            question: 'أي نوع من القواطع يستخدم تفاعلاً كيميائياً حارقاً؟',
            options: ['القاطع الميكانيكي', 'القاطع الكيميائي', 'القاطع المتفجر', 'القاطع الهيدروليكي'],
            correctAnswer: 1
          },
          {
            question: 'ما هي أداة الصيد المناسبة لاسترداد الأجسام الحديدية الصغيرة؟',
            options: ['Overshot', 'Spear', 'Fishing Magnet', 'Mill'],
            correctAnswer: 2
          },
          {
            question: 'ما الذي يسبب إجهاد المعدن (Metal Fatigue) في أنابيب الحفر؟',
            options: ['درجة الحرارة العالية فقط', 'الدوران المتكرر والإجهاد المتكرر', 'نوع سائل الحفر', 'عمق البئر'],
            correctAnswer: 1
          },
          {
            question: 'لماذا يُنصح بإنزال Impression Block قبل عملية الصيد؟',
            options: ['لتنظيف رأس السمكة', 'لتحديد حالة رأس السمكة واختيار الأداة المناسبة', 'لقطع السمكة', 'لزيادة الوزن على السمكة'],
            correctAnswer: 1
          }
        ],
        en: [
          {
            question: 'What is the correct definition of a "Fish" in drilling operations?',
            options: ['A type of drilling fluid', 'Any lost object inside the well that needs to be retrieved', 'A tool for measuring well depth', 'A type of rock formation'],
            correctAnswer: 1
          },
          {
            question: 'Which tool is used to take an impression of the fish top shape?',
            options: ['Overshot', 'Spear', 'Impression Block', 'Jar'],
            correctAnswer: 2
          },
          {
            question: 'What is the main difference between Overshot and Spear?',
            options: ['Overshot is for large objects only', 'Overshot grips from outside and Spear from inside', 'Spear is stronger than Overshot', 'There is no difference between them'],
            correctAnswer: 1
          },
          {
            question: 'What is the function of a Jar Accelerator?',
            options: ['Cutting the fish', 'Increasing jar impact force', 'Guiding the fishing tool', 'Cleaning the well'],
            correctAnswer: 1
          },
          {
            question: 'Where is the Safety Joint placed in the fishing BHA?',
            options: ['At the top of the assembly', 'Directly above the fishing tool', 'Below the jar', 'In the middle of drill pipe'],
            correctAnswer: 1
          },
          {
            question: 'What is the best option when all fish retrieval attempts fail?',
            options: ['Continue jarring for days', 'Sidetrack or mill the fish', 'Abandon the well', 'Increase drilling fluid density'],
            correctAnswer: 1
          },
          {
            question: 'Which type of cutter uses a burning chemical reaction?',
            options: ['Mechanical Cutter', 'Chemical Cutter', 'Explosive Cutter', 'Hydraulic Cutter'],
            correctAnswer: 1
          },
          {
            question: 'What is the appropriate fishing tool for retrieving small ferrous objects?',
            options: ['Overshot', 'Spear', 'Fishing Magnet', 'Mill'],
            correctAnswer: 2
          },
          {
            question: 'What causes Metal Fatigue in drill pipe?',
            options: ['High temperature only', 'Repeated rotation and cyclic stress', 'Type of drilling fluid', 'Well depth'],
            correctAnswer: 1
          },
          {
            question: 'Why is it recommended to run an Impression Block before fishing?',
            options: ['To clean the fish top', 'To determine fish top condition and select appropriate tool', 'To cut the fish', 'To add weight on the fish'],
            correctAnswer: 1
          }
        ],
      },
    },
    {
      day: 7,
      type: 'project',
      content: {
        ar: {
          title: 'مشروع عمليات الصيد',
          explanation: 'طبق ما تعلمته في مشروع عملي',
          keyTerms: [],
        },
        en: {
          title: 'Fishing Operations Project',
          explanation: 'Apply what you learned in a practical project',
          keyTerms: [],
        },
      },
      project: {
        ar: {
          title: 'مشروع تطبيقي: تخطيط عملية صيد',
          description: `أنت مهندس حفر في موقع بئر بعمق 12,000 قدم. أثناء عملية الرحلة، انفصل جزء من أنابيب الحفر (200 قدم من الأنابيب مع BHA) على عمق 11,500 قدم. المعلومات المتوفرة:
          
• قطر الأنبوب الخارجي: 5 بوصة
• قطر الثقب: 8.5 بوصة
• كثافة سائل الحفر: 12.5 ppg
• درجة الحرارة: 280°F
• الوقت منذ الحادث: 6 ساعات
• محاولة سحب سابقة: 150,000 رطل (فشلت)`,
          instructions: [
            'حدد الخطوات الأولى التي ستتخذها لتقييم الوضع',
            'اقترح تجميعة الصيد المناسبة مع تبرير اختياراتك',
            'ضع خطة احتياطية في حالة فشل المحاولة الأولى',
            'قدم توصياتك للوقاية من حدوث مشاكل مماثلة مستقبلاً'
          ],
          submissionType: 'text',
        },
        en: {
          title: 'Practical Project: Planning a Fishing Operation',
          description: `You are a drilling engineer at a 12,000 ft well site. During a trip operation, part of the drill string (200 ft of pipe with BHA) separated at 11,500 ft depth. Available information:
          
• Pipe OD: 5 inches
• Hole diameter: 8.5 inches
• Drilling fluid density: 12.5 ppg
• Temperature: 280°F
• Time since incident: 6 hours
• Previous pull attempt: 150,000 lbs (failed)`,
          instructions: [
            'Identify the first steps you would take to assess the situation',
            'Suggest an appropriate fishing BHA with justification for your choices',
            'Develop a backup plan in case the first attempt fails',
            'Provide your recommendations to prevent similar problems in the future'
          ],
          submissionType: 'text',
        },
      },
    },
  ],
};
