import { WeeklyLesson } from '../weeklyContent';

export const drillstringBhaLesson: WeeklyLesson = {
  lessonId: 'drillstring-bha',
  days: [
    {
      day: 1,
      type: 'learning',
      content: {
        ar: {
          title: 'مقدمة في سلسلة الحفر ومكوناتها',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 مقدمة في سلسلة الحفر (Drill String)</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
سلسلة الحفر هي العمود الفقري لعملية الحفر، وهي مجموعة الأنابيب والمعدات التي تربط بين سطح الأرض ورأس الحفر في قاع البئر. تؤدي سلسلة الحفر عدة وظائف حيوية تجعلها من أهم مكونات جهاز الحفر.
</p>

<div style="background: linear-gradient(135deg, #1e3a5f15, #f9731620); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #f97316;">
<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">📌 وظائف سلسلة الحفر</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>نقل العزم (Torque) من السطح لرأس الحفر لتدويره</li>
<li>نقل الوزن على رأس الحفر (WOB) لتفتيت الصخور</li>
<li>توصيل سائل الحفر (Mud) من السطح إلى قاع البئر</li>
<li>رفع وإنزال رأس الحفر ومعدات القياس</li>
<li>نقل بيانات القياس أثناء الحفر (MWD/LWD)</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 المكونات الرئيسية لسلسلة الحفر</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
تتكون سلسلة الحفر من عدة أجزاء مرتبة من الأعلى للأسفل:
</p>

<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<ol style="padding-right: 1.5rem; line-height: 2.2;">
<li style="margin-bottom: 0.5rem;"><strong style="color: #f97316;">Kelly / Top Drive Sub:</strong> يربط السلسلة بنظام الدوران</li>
<li style="margin-bottom: 0.5rem;"><strong style="color: #f97316;">أنابيب الحفر (Drill Pipe):</strong> الجزء الأطول، تنقل العزم والسائل</li>
<li style="margin-bottom: 0.5rem;"><strong style="color: #f97316;">أنابيب الحفر الثقيلة (HWDP):</strong> منطقة انتقالية بين الأنابيب والأطواق</li>
<li style="margin-bottom: 0.5rem;"><strong style="color: #f97316;">أطواق الحفر (Drill Collars):</strong> توفر الوزن على رأس الحفر</li>
<li style="margin-bottom: 0.5rem;"><strong style="color: #f97316;">تجميعة القاع (BHA):</strong> تشمل المثبتات وأدوات القياس</li>
<li style="margin-bottom: 0.5rem;"><strong style="color: #f97316;">رأس الحفر (Bit):</strong> يفتت الصخور في قاع البئر</li>
</ol>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 أنابيب الحفر (Drill Pipe)</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
أنابيب الحفر هي المكون الأطول في السلسلة، وتتكون من جسم الأنبوب (Tube) ووصلات الأدوات (Tool Joints) الملحومة في طرفيه.
</p>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">مواصفات أنابيب الحفر</h3>

<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<table style="width: 100%; border-collapse: collapse; text-align: center;">
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 0.75rem; border: 1px solid #ccc;">القطر الخارجي (OD)</th>
<th style="padding: 0.75rem; border: 1px solid #ccc;">الوزن (lb/ft)</th>
<th style="padding: 0.75rem; border: 1px solid #ccc;">الاستخدام</th>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ccc;">2-7/8"</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">6.65 - 10.4</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">آبار ضحلة وصيانة</td>
</tr>
<tr style="background: #f5f5f5;">
<td style="padding: 0.75rem; border: 1px solid #ccc;">3-1/2"</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">9.5 - 15.5</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">آبار متوسطة العمق</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ccc;">4-1/2"</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">16.6 - 20</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">آبار متوسطة لعميقة</td>
</tr>
<tr style="background: #f5f5f5;">
<td style="padding: 0.75rem; border: 1px solid #ccc;">5"</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">19.5 - 25.6</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">آبار عميقة</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ccc;">5-7/8" - 6-5/8"</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">23.4 - 34</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">آبار عميقة جداً</td>
</tr>
</table>
</div>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">درجات الفولاذ (Steel Grades)</h3>

<div style="background: linear-gradient(135deg, #1e3a5f15, #f9731620); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li><strong>Grade E:</strong> قوة خضوع 75,000 psi - الأقل تكلفة، للآبار البسيطة</li>
<li><strong>Grade X:</strong> قوة خضوع 95,000 psi - استخدام عام</li>
<li><strong>Grade G:</strong> قوة خضوع 105,000 psi - آبار عميقة</li>
<li><strong>Grade S:</strong> قوة خضوع 135,000 psi - الأقوى، للظروف القاسية</li>
</ul>
</div>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">وصلات الأدوات (Tool Joints)</h3>

<p style="margin-bottom: 1rem; line-height: 1.8;">
Tool Joints هي الأجزاء السميكة الملحومة في طرفي أنبوب الحفر. تحتوي على اللولب (Thread) الذي يسمح بربط الأنابيب ببعضها.
</p>

<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2; margin-bottom: 1rem;">
<li><strong>Pin (الذكر):</strong> الطرف السفلي باللولب الخارجي</li>
<li><strong>Box (الأنثى):</strong> الطرف العلوي باللولب الداخلي</li>
<li><strong>Tong Space:</strong> المنطقة الملساء لإمساك مفاتيح الربط</li>
</ul>

<div style="background: #dc262615; padding: 1rem; border-radius: 8px; margin: 1rem 0; border-right: 4px solid #dc2626;">
<strong style="color: #dc2626;">⚠️ تحذير:</strong>
<p style="margin-top: 0.5rem; line-height: 1.8;">
يجب فحص Tool Joints بانتظام للتأكد من سلامة اللولب وعدم وجود تآكل أو تشققات. الفشل في الوصلة قد يؤدي لفقدان جزء من السلسلة في البئر.
</p>
</div>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>سلسلة الحفر تنقل العزم والوزن وسائل الحفر من السطح للقاع</li>
<li>المكونات: أنابيب حفر، HWDP، أطواق حفر، BHA، ورأس الحفر</li>
<li>أنابيب الحفر تُصنف حسب القطر والوزن ودرجة الفولاذ</li>
<li>Tool Joints تربط الأنابيب وتحتاج فحصاً دورياً</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'سلسلة الحفر (Drill String)', definition: 'مجموعة الأنابيب والمعدات الممتدة من السطح لرأس الحفر في قاع البئر' },
            { term: 'وصلات الأدوات (Tool Joints)', definition: 'الأجزاء السميكة الملحومة في طرفي أنبوب الحفر تحتوي على اللولب للربط' },
            { term: 'قوة الخضوع (Yield Strength)', definition: 'الإجهاد الذي يبدأ عنده المعدن بالتشوه الدائم، تُقاس بـ psi' },
            { term: 'WOB (Weight on Bit)', definition: 'الوزن المطبق على رأس الحفر لتفتيت الصخور' },
          ],
          practiceQuestion: {
            question: 'أي درجة فولاذ لأنابيب الحفر لها أعلى قوة خضوع؟',
            options: ['Grade E', 'Grade X', 'Grade G', 'Grade S'],
            correctAnswer: 3,
          },
        },
        en: {
          title: 'Introduction to Drill String and Components',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Introduction to Drill String</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
The drill string is the backbone of the drilling operation, consisting of pipes and equipment connecting the surface to the drill bit at the bottom of the well. The drill string performs several vital functions that make it one of the most important components of the drilling rig.
</p>

<div style="background: linear-gradient(135deg, #1e3a5f15, #f9731620); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #f97316;">
<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">📌 Drill String Functions</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>Transmit torque from surface to bit for rotation</li>
<li>Apply Weight on Bit (WOB) to break rock</li>
<li>Deliver drilling fluid (mud) from surface to bottom</li>
<li>Raise and lower drill bit and measurement tools</li>
<li>Transmit MWD/LWD measurement data</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Main Drill String Components</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
The drill string consists of several parts arranged from top to bottom:
</p>

<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<ol style="padding-left: 1.5rem; line-height: 2.2;">
<li style="margin-bottom: 0.5rem;"><strong style="color: #f97316;">Kelly / Top Drive Sub:</strong> Connects string to rotary system</li>
<li style="margin-bottom: 0.5rem;"><strong style="color: #f97316;">Drill Pipe:</strong> Longest part, transmits torque and fluid</li>
<li style="margin-bottom: 0.5rem;"><strong style="color: #f97316;">Heavy Weight Drill Pipe (HWDP):</strong> Transition zone between pipe and collars</li>
<li style="margin-bottom: 0.5rem;"><strong style="color: #f97316;">Drill Collars:</strong> Provide weight on bit</li>
<li style="margin-bottom: 0.5rem;"><strong style="color: #f97316;">Bottom Hole Assembly (BHA):</strong> Includes stabilizers and measurement tools</li>
<li style="margin-bottom: 0.5rem;"><strong style="color: #f97316;">Drill Bit:</strong> Breaks rock at bottom of well</li>
</ol>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Drill Pipe</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
Drill pipe is the longest component in the string, consisting of a tube body with tool joints welded at both ends.
</p>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">Drill Pipe Specifications</h3>

<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<table style="width: 100%; border-collapse: collapse; text-align: center;">
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 0.75rem; border: 1px solid #ccc;">OD (inches)</th>
<th style="padding: 0.75rem; border: 1px solid #ccc;">Weight (lb/ft)</th>
<th style="padding: 0.75rem; border: 1px solid #ccc;">Application</th>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ccc;">2-7/8"</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">6.65 - 10.4</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">Shallow wells & workover</td>
</tr>
<tr style="background: #f5f5f5;">
<td style="padding: 0.75rem; border: 1px solid #ccc;">3-1/2"</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">9.5 - 15.5</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">Medium depth wells</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ccc;">4-1/2"</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">16.6 - 20</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">Medium to deep wells</td>
</tr>
<tr style="background: #f5f5f5;">
<td style="padding: 0.75rem; border: 1px solid #ccc;">5"</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">19.5 - 25.6</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">Deep wells</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ccc;">5-7/8" - 6-5/8"</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">23.4 - 34</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">Very deep wells</td>
</tr>
</table>
</div>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">Steel Grades</h3>

<div style="background: linear-gradient(135deg, #1e3a5f15, #f9731620); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li><strong>Grade E:</strong> 75,000 psi yield - Lowest cost, for simple wells</li>
<li><strong>Grade X:</strong> 95,000 psi yield - General use</li>
<li><strong>Grade G:</strong> 105,000 psi yield - Deep wells</li>
<li><strong>Grade S:</strong> 135,000 psi yield - Strongest, for harsh conditions</li>
</ul>
</div>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">Tool Joints</h3>

<p style="margin-bottom: 1rem; line-height: 1.8;">
Tool Joints are the thick sections welded to both ends of the drill pipe. They contain the threads that allow pipes to be connected.
</p>

<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2; margin-bottom: 1rem;">
<li><strong>Pin (Male):</strong> Bottom end with external threads</li>
<li><strong>Box (Female):</strong> Top end with internal threads</li>
<li><strong>Tong Space:</strong> Smooth area for wrench grip</li>
</ul>

<div style="background: #dc262615; padding: 1rem; border-radius: 8px; margin: 1rem 0; border-left: 4px solid #dc2626;">
<strong style="color: #dc2626;">⚠️ Warning:</strong>
<p style="margin-top: 0.5rem; line-height: 1.8;">
Tool Joints must be regularly inspected for thread integrity and absence of wear or cracks. Joint failure can result in losing part of the string in the well.
</p>
</div>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>Drill string transmits torque, weight, and fluid from surface to bottom</li>
<li>Components: drill pipe, HWDP, drill collars, BHA, and bit</li>
<li>Drill pipe is classified by diameter, weight, and steel grade</li>
<li>Tool Joints connect pipes and need regular inspection</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Drill String', definition: 'Assembly of pipes and equipment extending from surface to bit at bottom of well' },
            { term: 'Tool Joints', definition: 'Thick sections welded to pipe ends containing threads for connection' },
            { term: 'Yield Strength', definition: 'Stress at which metal begins permanent deformation, measured in psi' },
            { term: 'WOB (Weight on Bit)', definition: 'Weight applied to drill bit to break rock' },
          ],
          practiceQuestion: {
            question: 'Which drill pipe steel grade has the highest yield strength?',
            options: ['Grade E', 'Grade X', 'Grade G', 'Grade S'],
            correctAnswer: 3,
          },
        },
      },
    },
    {
      day: 2,
      type: 'learning',
      content: {
        ar: {
          title: 'أطواق الحفر وأنابيب الحفر الثقيلة',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 أطواق الحفر (Drill Collars)</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
أطواق الحفر هي أنابيب فولاذية ثقيلة جداً سميكة الجدران، تُشكل الجزء السفلي من سلسلة الحفر فوق رأس الحفر مباشرة. وظيفتها الأساسية هي توفير الوزن اللازم لتطبيق WOB (الوزن على رأس الحفر) لتفتيت الصخور.
</p>

<div style="background: linear-gradient(135deg, #1e3a5f15, #f9731620); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #f97316;">
<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">📌 وظائف أطواق الحفر</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>توفير الوزن على رأس الحفر (WOB) لتفتيت الصخور</li>
<li>إبقاء أنابيب الحفر تحت شد (Tension) لمنع الانحناء</li>
<li>توفير صلابة للـ BHA للتحكم في اتجاه الحفرة</li>
<li>مقاومة الانحناء والالتواء (Buckling)</li>
</ul>
</div>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">أنواع أطواق الحفر</h3>

<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<p style="line-height: 1.8; margin-bottom: 1rem;"><strong style="color: #1e3a5f;">1. الأطواق العادية (Standard/Slick Collars):</strong></p>
<ul style="list-style-type: circle; padding-right: 1.5rem; line-height: 1.8; margin-bottom: 1rem;">
<li>سطح خارجي أملس</li>
<li>تُستخدم لتوفير الوزن فقط</li>
<li>قطر خارجي: 4.75" - 11"</li>
</ul>

<p style="line-height: 1.8; margin-bottom: 1rem;"><strong style="color: #1e3a5f;">2. الأطواق الحلزونية (Spiral Collars):</strong></p>
<ul style="list-style-type: circle; padding-right: 1.5rem; line-height: 1.8; margin-bottom: 1rem;">
<li>أخاديد حلزونية على السطح الخارجي</li>
<li>تقلل مساحة التلامس مع جدار الحفرة</li>
<li>تقلل احتمالية الالتصاق التفاضلي (Differential Sticking)</li>
</ul>

<p style="line-height: 1.8; margin-bottom: 1rem;"><strong style="color: #1e3a5f;">3. أطواق غير مغناطيسية (Non-Magnetic Collars):</strong></p>
<ul style="list-style-type: circle; padding-right: 1.5rem; line-height: 1.8;">
<li>مصنوعة من سبائك غير مغناطيسية</li>
<li>تُستخدم حول أدوات MWD/LWD</li>
<li>تمنع التداخل مع قراءات البوصلة</li>
</ul>
</div>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">مواصفات أطواق الحفر الشائعة</h3>

<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<table style="width: 100%; border-collapse: collapse; text-align: center;">
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 0.75rem; border: 1px solid #ccc;">OD (بوصة)</th>
<th style="padding: 0.75rem; border: 1px solid #ccc;">ID (بوصة)</th>
<th style="padding: 0.75rem; border: 1px solid #ccc;">الوزن (lb/ft)</th>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ccc;">6-1/4"</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">2-13/16"</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">83</td>
</tr>
<tr style="background: #f5f5f5;">
<td style="padding: 0.75rem; border: 1px solid #ccc;">8"</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">2-13/16"</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">147</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ccc;">9-1/2"</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">3"</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">220</td>
</tr>
</table>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 أنابيب الحفر الثقيلة (Heavy Weight Drill Pipe - HWDP)</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
HWDP هي أنابيب بسمك جدار أكبر من أنابيب الحفر العادية لكن أخف من أطواق الحفر. تُستخدم كمنطقة انتقالية بين أنابيب الحفر والأطواق.
</p>

<div style="background: #10b98115; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">✅ مميزات HWDP:</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>تقلل تركيز الإجهاد عند نقطة الانتقال</li>
<li>توفر انتقالاً تدريجياً في الصلابة</li>
<li>أخف من الأطواق مما يقلل حمولة الخطاف</li>
<li>يمكن استخدامها في الحفر الموجه والأفقي</li>
<li>تحتوي على Wear Pad في المنتصف لحماية الجسم</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 حساب طول أطواق الحفر المطلوب</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
لحساب طول الأطواق اللازم لتوفير WOB معين مع إبقاء أنابيب الحفر تحت شد:
</p>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; text-align: center;">
<p style="font-size: 1.2rem; font-weight: bold; color: #1e3a5f; direction: ltr; margin-bottom: 1rem;">
L_DC = (WOB × SF) / (W_DC × BF)
</p>
<p style="line-height: 1.8;">
حيث: SF = عامل أمان (عادة 1.15-1.3)، W_DC = وزن الطوق/قدم، BF = عامل الطفو
</p>
</div>

<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #f97316; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">📌 مثال:</h3>
<p style="line-height: 1.8;"><strong>المعطيات:</strong> WOB = 40,000 lb، وزن الطوق = 147 lb/ft، وزن السائل = 10 ppg</p>
<p style="line-height: 1.8; margin-top: 0.5rem;"><strong>الحل:</strong></p>
<p style="line-height: 1.8; direction: ltr;">BF = 1 - (10/65.5) = 0.847</p>
<p style="line-height: 1.8; direction: ltr;">L_DC = (40,000 × 1.2) / (147 × 0.847) = 386 ft</p>
</div>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>أطواق الحفر توفر WOB وتبقي أنابيب الحفر تحت شد</li>
<li>ثلاثة أنواع: عادية، حلزونية، وغير مغناطيسية</li>
<li>HWDP توفر انتقالاً تدريجياً بين الأنابيب والأطواق</li>
<li>يجب حساب طول الأطواق بعامل أمان مناسب</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'أطواق الحفر (Drill Collars)', definition: 'أنابيب فولاذية ثقيلة سميكة الجدار توفر الوزن على رأس الحفر' },
            { term: 'HWDP', definition: 'أنابيب حفر ثقيلة تُستخدم كمنطقة انتقالية بين الأنابيب والأطواق' },
            { term: 'الأطواق الحلزونية (Spiral Collars)', definition: 'أطواق بأخاديد حلزونية لتقليل الالتصاق التفاضلي' },
            { term: 'Differential Sticking', definition: 'التصاق السلسلة بجدار الحفرة بسبب فرق الضغط' },
          ],
          practiceQuestion: {
            question: 'ما هو نوع أطواق الحفر المستخدم حول أدوات MWD لمنع التداخل المغناطيسي؟',
            options: ['الأطواق العادية', 'الأطواق الحلزونية', 'الأطواق غير المغناطيسية', 'HWDP'],
            correctAnswer: 2,
          },
        },
        en: {
          title: 'Drill Collars and Heavy Weight Drill Pipe',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Drill Collars</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
Drill collars are very heavy, thick-walled steel tubes that form the lower part of the drill string directly above the bit. Their primary function is to provide the weight necessary to apply WOB (Weight on Bit) to break rock.
</p>

<div style="background: linear-gradient(135deg, #1e3a5f15, #f9731620); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #f97316;">
<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">📌 Drill Collar Functions</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>Provide Weight on Bit (WOB) to break rock</li>
<li>Keep drill pipe in tension to prevent buckling</li>
<li>Provide BHA stiffness for hole direction control</li>
<li>Resist bending and buckling</li>
</ul>
</div>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">Types of Drill Collars</h3>

<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<p style="line-height: 1.8; margin-bottom: 1rem;"><strong style="color: #1e3a5f;">1. Standard/Slick Collars:</strong></p>
<ul style="list-style-type: circle; padding-left: 1.5rem; line-height: 1.8; margin-bottom: 1rem;">
<li>Smooth outer surface</li>
<li>Used for weight only</li>
<li>OD: 4.75" - 11"</li>
</ul>

<p style="line-height: 1.8; margin-bottom: 1rem;"><strong style="color: #1e3a5f;">2. Spiral Collars:</strong></p>
<ul style="list-style-type: circle; padding-left: 1.5rem; line-height: 1.8; margin-bottom: 1rem;">
<li>Spiral grooves on outer surface</li>
<li>Reduce contact area with hole wall</li>
<li>Reduce differential sticking risk</li>
</ul>

<p style="line-height: 1.8; margin-bottom: 1rem;"><strong style="color: #1e3a5f;">3. Non-Magnetic Collars:</strong></p>
<ul style="list-style-type: circle; padding-left: 1.5rem; line-height: 1.8;">
<li>Made from non-magnetic alloys</li>
<li>Used around MWD/LWD tools</li>
<li>Prevent interference with compass readings</li>
</ul>
</div>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">Common Drill Collar Specifications</h3>

<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<table style="width: 100%; border-collapse: collapse; text-align: center;">
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 0.75rem; border: 1px solid #ccc;">OD (inches)</th>
<th style="padding: 0.75rem; border: 1px solid #ccc;">ID (inches)</th>
<th style="padding: 0.75rem; border: 1px solid #ccc;">Weight (lb/ft)</th>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ccc;">6-1/4"</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">2-13/16"</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">83</td>
</tr>
<tr style="background: #f5f5f5;">
<td style="padding: 0.75rem; border: 1px solid #ccc;">8"</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">2-13/16"</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">147</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ccc;">9-1/2"</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">3"</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">220</td>
</tr>
</table>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Heavy Weight Drill Pipe (HWDP)</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
HWDP are pipes with thicker walls than regular drill pipe but lighter than drill collars. They serve as a transition zone between drill pipe and collars.
</p>

<div style="background: #10b98115; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">✅ HWDP Advantages:</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>Reduce stress concentration at transition point</li>
<li>Provide gradual stiffness transition</li>
<li>Lighter than collars, reducing hook load</li>
<li>Can be used in directional and horizontal drilling</li>
<li>Contains center wear pad to protect body</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Calculating Required Drill Collar Length</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
To calculate collar length needed to provide specific WOB while keeping drill pipe in tension:
</p>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; text-align: center;">
<p style="font-size: 1.2rem; font-weight: bold; color: #1e3a5f; margin-bottom: 1rem;">
L_DC = (WOB × SF) / (W_DC × BF)
</p>
<p style="line-height: 1.8;">
Where: SF = Safety Factor (typically 1.15-1.3), W_DC = collar weight/ft, BF = Buoyancy Factor
</p>
</div>

<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #f97316; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">📌 Example:</h3>
<p style="line-height: 1.8;"><strong>Given:</strong> WOB = 40,000 lb, Collar weight = 147 lb/ft, Mud weight = 10 ppg</p>
<p style="line-height: 1.8; margin-top: 0.5rem;"><strong>Solution:</strong></p>
<p style="line-height: 1.8;">BF = 1 - (10/65.5) = 0.847</p>
<p style="line-height: 1.8;">L_DC = (40,000 × 1.2) / (147 × 0.847) = 386 ft</p>
</div>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>Drill collars provide WOB and keep drill pipe in tension</li>
<li>Three types: standard, spiral, and non-magnetic</li>
<li>HWDP provides gradual transition between pipe and collars</li>
<li>Collar length must be calculated with appropriate safety factor</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Drill Collars', definition: 'Heavy thick-walled steel tubes providing weight on bit' },
            { term: 'HWDP', definition: 'Heavy Weight Drill Pipe used as transition zone between pipe and collars' },
            { term: 'Spiral Collars', definition: 'Collars with spiral grooves to reduce differential sticking' },
            { term: 'Differential Sticking', definition: 'String sticking to hole wall due to pressure differential' },
          ],
          practiceQuestion: {
            question: 'What type of drill collar is used around MWD tools to prevent magnetic interference?',
            options: ['Standard Collars', 'Spiral Collars', 'Non-Magnetic Collars', 'HWDP'],
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
          title: 'تجميعة القاع (BHA) ومكوناتها',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 تجميعة القاع (Bottom Hole Assembly - BHA)</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
تجميعة القاع (BHA) هي الجزء السفلي من سلسلة الحفر، تمتد من رأس الحفر إلى أول أنبوب حفر. تحتوي على مكونات متعددة تؤثر على أداء الحفر واتجاه الحفرة. التصميم الصحيح للـ BHA ضروري لتحقيق أهداف الحفر.
</p>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 مكونات BHA الرئيسية</h2>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">1️⃣ رأس الحفر (Drill Bit)</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
يُفتت الصخور في قاع البئر. سنتناوله بالتفصيل في درس لاحق. يجب اختياره بناءً على نوع التكوين الصخري.
</p>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">2️⃣ المثبتات (Stabilizers)</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
أدوات ذات شفرات أو لوحات بارزة تتمركز في جدار الحفرة لتثبيت الـ BHA وتوجيهها. تؤثر بشكل كبير على سلوك الحفرة (بناء أو هدم الزاوية).
</p>

<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<strong style="color: #1e3a5f;">أنواع المثبتات:</strong>
<ul style="list-style-type: circle; padding-right: 1.5rem; margin-top: 0.5rem; line-height: 2;">
<li><strong>Blade Stabilizer:</strong> شفرات مستقيمة أو حلزونية - الأكثر شيوعاً</li>
<li><strong>Sleeve Stabilizer:</strong> غلاف قابل للاستبدال</li>
<li><strong>Integral Blade:</strong> الشفرات جزء من الجسم</li>
<li><strong>Welded Blade:</strong> شفرات ملحومة قابلة للإصلاح</li>
<li><strong>Non-Rotating Stabilizer:</strong> لا يدور مع السلسلة</li>
</ul>
</div>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">3️⃣ الموسعات (Reamers)</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
تُستخدم لتوسيع الحفرة أثناء الحفر أو إعادة فتح أقسام ضيقة. تحتوي على قواطع أو أسطوانات دوارة.
</p>

<div style="background: linear-gradient(135deg, #1e3a5f15, #f9731620); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #f97316;">
<h3 style="color: #f97316; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">📌 أنواع Reamers:</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li><strong>Under-Reamer:</strong> يوسع تحت قطر رأس الحفر</li>
<li><strong>Hole Opener:</strong> يفتح الحفرة لقطر أكبر</li>
<li><strong>Near-Bit Reamer:</strong> يُركب فوق الرأس مباشرة</li>
</ul>
</div>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">4️⃣ الصدامات (Jars)</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
أدوات تُستخدم لتحرير السلسلة في حالة الالتصاق. توفر صدمة قوية للأعلى أو للأسفل لفك الالتصاق.
</p>

<div style="background: #1e3a5f10; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<strong style="color: #1e3a5f;">أنواع Jars:</strong>
<ul style="list-style-type: circle; padding-right: 1.5rem; margin-top: 0.5rem; line-height: 1.8;">
<li><strong>Mechanical Jars:</strong> تعمل بالضغط الميكانيكي</li>
<li><strong>Hydraulic Jars:</strong> تعمل بضغط الزيت - الأكثر شيوعاً</li>
<li><strong>Hydro-Mechanical Jars:</strong> مزيج من النوعين</li>
</ul>
</div>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">5️⃣ أدوات القياس أثناء الحفر (MWD/LWD)</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
أدوات إلكترونية تقيس معاملات الحفر والتكوين أثناء الحفر وترسل البيانات للسطح.
</p>

<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2; margin-bottom: 1rem;">
<li><strong>MWD (Measurement While Drilling):</strong> اتجاه، ميل، Toolface، ضغط، درجة حرارة</li>
<li><strong>LWD (Logging While Drilling):</strong> مقاومة، كثافة، مسامية، غاما</li>
</ul>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">6️⃣ Crossovers (وصلات التحويل)</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
وصلات قصيرة تربط بين مكونات ذات أحجام لولب مختلفة. ضرورية لتوافق المكونات.
</p>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">7️⃣ Float Sub / Bit Sub</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
يحتوي على صمام عدم رجوع (Float Valve) يمنع تدفق السائل العكسي عند إيقاف المضخات. يحمي أدوات MWD.
</p>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 ترتيب مكونات BHA النموذجي</h2>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; text-align: center;">
<p style="font-size: 1.1rem; font-weight: bold; color: #1e3a5f; line-height: 2;">
رأس الحفر ← Bit Sub ← Near-Bit Stabilizer ← MWD/LWD ← Non-Mag Collar ← Stabilizer ← Drill Collars ← Jars ← HWDP
</p>
</div>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>BHA تشمل جميع المكونات من الرأس لأول أنبوب حفر</li>
<li>المثبتات توجه الحفرة وتؤثر على سلوكها</li>
<li>Jars ضرورية لتحرير السلسلة من الالتصاق</li>
<li>MWD/LWD توفر بيانات الحفر والتكوين في الوقت الفعلي</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'BHA (Bottom Hole Assembly)', definition: 'الجزء السفلي من سلسلة الحفر من الرأس لأول أنبوب حفر' },
            { term: 'المثبتات (Stabilizers)', definition: 'أدوات بشفرات بارزة لتثبيت وتوجيه BHA في الحفرة' },
            { term: 'الصدامات (Jars)', definition: 'أدوات توفر صدمة قوية لتحرير السلسلة من الالتصاق' },
            { term: 'MWD/LWD', definition: 'أدوات إلكترونية لقياس معاملات الحفر والتكوين أثناء الحفر' },
          ],
          practiceQuestion: {
            question: 'ما هي الأداة المستخدمة لتحرير سلسلة الحفر في حالة الالتصاق؟',
            options: ['Stabilizer', 'Reamer', 'Jar', 'Crossover'],
            correctAnswer: 2,
          },
        },
        en: {
          title: 'Bottom Hole Assembly (BHA) and Components',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Bottom Hole Assembly (BHA)</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
The Bottom Hole Assembly (BHA) is the lower portion of the drill string, extending from the bit to the first drill pipe. It contains multiple components that affect drilling performance and hole direction. Proper BHA design is essential for achieving drilling objectives.
</p>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Main BHA Components</h2>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">1️⃣ Drill Bit</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
Breaks rock at the bottom of the well. Will be covered in detail in a later lesson. Must be selected based on formation type.
</p>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">2️⃣ Stabilizers</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
Tools with protruding blades or pads that center in the hole wall to stabilize and guide the BHA. They significantly affect hole behavior (building or dropping angle).
</p>

<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<strong style="color: #1e3a5f;">Stabilizer Types:</strong>
<ul style="list-style-type: circle; padding-left: 1.5rem; margin-top: 0.5rem; line-height: 2;">
<li><strong>Blade Stabilizer:</strong> Straight or spiral blades - most common</li>
<li><strong>Sleeve Stabilizer:</strong> Replaceable sleeve</li>
<li><strong>Integral Blade:</strong> Blades are part of body</li>
<li><strong>Welded Blade:</strong> Welded blades that can be repaired</li>
<li><strong>Non-Rotating Stabilizer:</strong> Does not rotate with string</li>
</ul>
</div>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">3️⃣ Reamers</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
Used to enlarge the hole while drilling or reopen tight sections. Contains cutters or rolling cones.
</p>

<div style="background: linear-gradient(135deg, #1e3a5f15, #f9731620); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #f97316;">
<h3 style="color: #f97316; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">📌 Reamer Types:</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li><strong>Under-Reamer:</strong> Enlarges below bit diameter</li>
<li><strong>Hole Opener:</strong> Opens hole to larger diameter</li>
<li><strong>Near-Bit Reamer:</strong> Mounted directly above bit</li>
</ul>
</div>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">4️⃣ Jars</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
Tools used to free the string when stuck. Provide strong upward or downward impact to break free.
</p>

<div style="background: #1e3a5f10; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<strong style="color: #1e3a5f;">Jar Types:</strong>
<ul style="list-style-type: circle; padding-left: 1.5rem; margin-top: 0.5rem; line-height: 1.8;">
<li><strong>Mechanical Jars:</strong> Work by mechanical pressure</li>
<li><strong>Hydraulic Jars:</strong> Work by oil pressure - most common</li>
<li><strong>Hydro-Mechanical Jars:</strong> Combination of both types</li>
</ul>
</div>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">5️⃣ MWD/LWD Tools</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
Electronic tools that measure drilling and formation parameters while drilling and transmit data to surface.
</p>

<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2; margin-bottom: 1rem;">
<li><strong>MWD (Measurement While Drilling):</strong> Direction, inclination, toolface, pressure, temperature</li>
<li><strong>LWD (Logging While Drilling):</strong> Resistivity, density, porosity, gamma</li>
</ul>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">6️⃣ Crossovers</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
Short subs connecting components with different thread sizes. Essential for component compatibility.
</p>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">7️⃣ Float Sub / Bit Sub</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
Contains a check valve (Float Valve) preventing backflow when pumps stop. Protects MWD tools.
</p>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Typical BHA Component Order</h2>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; text-align: center;">
<p style="font-size: 1.1rem; font-weight: bold; color: #1e3a5f; line-height: 2;">
Bit ← Bit Sub ← Near-Bit Stabilizer ← MWD/LWD ← Non-Mag Collar ← Stabilizer ← Drill Collars ← Jars ← HWDP
</p>
</div>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>BHA includes all components from bit to first drill pipe</li>
<li>Stabilizers guide hole and affect its behavior</li>
<li>Jars are essential for freeing stuck string</li>
<li>MWD/LWD provide real-time drilling and formation data</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'BHA (Bottom Hole Assembly)', definition: 'Lower portion of drill string from bit to first drill pipe' },
            { term: 'Stabilizers', definition: 'Tools with protruding blades to stabilize and guide BHA in hole' },
            { term: 'Jars', definition: 'Tools providing strong impact to free stuck string' },
            { term: 'MWD/LWD', definition: 'Electronic tools measuring drilling and formation parameters while drilling' },
          ],
          practiceQuestion: {
            question: 'What tool is used to free a stuck drill string?',
            options: ['Stabilizer', 'Reamer', 'Jar', 'Crossover'],
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
          title: 'تصميم BHA للآبار المختلفة',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 مبادئ تصميم BHA</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
تصميم BHA هو فن وعلم يتطلب فهماً عميقاً لسلوك الحفرة والقوى المؤثرة. الهدف هو تحقيق أداء حفر أمثل مع التحكم في اتجاه الحفرة. يعتمد التصميم على نوع البئر (عمودي، موجه، أفقي) وأهداف الحفر.
</p>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 سلوك BHA واتجاه الحفرة</h2>

<div style="background: linear-gradient(135deg, #1e3a5f15, #f9731620); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #f97316;">
<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">📌 ثلاث تصنيفات لسلوك BHA:</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li><strong>Building Assembly:</strong> تزيد زاوية الميل - تدفع الحفرة للأسفل</li>
<li><strong>Dropping Assembly:</strong> تقلل زاوية الميل - تعيد الحفرة للعمودي</li>
<li><strong>Holding Assembly:</strong> تحافظ على الزاوية والاتجاه الحاليين</li>
</ul>
</div>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">العوامل المؤثرة على سلوك BHA</h3>

<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li><strong>موقع المثبتات:</strong> القرب من الرأس يزيد التأثير</li>
<li><strong>عدد المثبتات:</strong> مثبت واحد vs اثنين vs ثلاثة</li>
<li><strong>قطر المثبتات:</strong> Full Gauge vs Under Gauge</li>
<li><strong>صلابة الأطواق:</strong> تؤثر على انحناء BHA</li>
<li><strong>WOB:</strong> وزن أعلى يزيد ميل البناء</li>
<li><strong>RPM:</strong> سرعة أعلى تميل للهدم</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 BHA للحفر العمودي</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
الهدف: الحفاظ على الحفرة عمودية قدر الإمكان مع تقليل الانحراف.
</p>

<div style="background: #10b98115; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">تصميم Packed BHA (تجميعة محشوة):</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">الأكثر فعالية للحفر العمودي - ثلاثة مثبتات متقاربة</p>
<div style="background: #1e3a5f10; padding: 1rem; border-radius: 8px;">
<p style="font-family: monospace; direction: ltr; line-height: 1.8;">
Bit → Near-Bit Stabilizer (3-6 ft) → String Stabilizer (30 ft) → String Stabilizer (60 ft) → Drill Collars
</p>
</div>
</div>

<div style="background: #f9731620; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #f97316; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">تصميم Pendulum BHA (البندول):</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">يستخدم الجاذبية لتصحيح الانحراف - مثبت واحد بعيد عن الرأس</p>
<div style="background: #1e3a5f10; padding: 1rem; border-radius: 8px;">
<p style="font-family: monospace; direction: ltr; line-height: 1.8;">
Bit → Drill Collars (60-90 ft) → Stabilizer → More Drill Collars
</p>
</div>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 BHA للحفر الموجه</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
الحفر الموجه يتطلب القدرة على تغيير اتجاه الحفرة بشكل متحكم. يُستخدم عادة:
</p>

<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #1e3a5f; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">Motor BHA مع Bent Housing:</h3>
<p style="font-family: monospace; direction: ltr; line-height: 1.8; background: #f5f5f5; padding: 1rem; border-radius: 8px;">
Bit → Bent Housing Motor (0.5-3°) → MWD → Stabilizer → Non-Mag Collars → Stabilizer → Collars → Jars → HWDP
</p>
<p style="margin-top: 1rem; line-height: 1.8;">
<strong>Sliding Mode:</strong> السلسلة ثابتة، المحرك يدور الرأس ← يبني زاوية<br/>
<strong>Rotating Mode:</strong> السلسلة والمحرك يدوران ← يحافظ على الاتجاه
</p>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 BHA للحفر الأفقي</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
الحفر الأفقي يتطلب BHA يمكنه البناء للوصول لـ 90° ثم الحفاظ على الأفقية.
</p>

<div style="background: linear-gradient(135deg, #1e3a5f15, #f9731620); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #f97316; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">اعتبارات خاصة:</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>استخدام Rotary Steerable System (RSS) للتحكم الدقيق</li>
<li>مثبتات أصغر قليلاً (Under Gauge) لسهولة الحركة</li>
<li>أطواق أقصر لتقليل Drag والاحتكاك</li>
<li>HWDP بدلاً من أطواق في بعض الأقسام</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 نظام التوجيه الدوار (RSS)</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
Rotary Steerable System هو تقنية حديثة تسمح بالتوجيه أثناء الدوران المستمر للسلسلة.
</p>

<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<strong style="color: #1e3a5f;">نوعان رئيسيان:</strong>
<ul style="list-style-type: circle; padding-right: 1.5rem; margin-top: 0.5rem; line-height: 2;">
<li><strong>Push-the-Bit:</strong> يدفع الرأس جانبياً باستخدام وسادات</li>
<li><strong>Point-the-Bit:</strong> يوجه الرأس بانحناء داخلي</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>BHA يمكن أن يبني أو يهدم أو يحافظ على زاوية الحفرة</li>
<li>Packed BHA للحفر العمودي، Pendulum للتصحيح</li>
<li>الحفر الموجه يستخدم Motor مع Bent Housing</li>
<li>RSS يسمح بالتوجيه أثناء الدوران المستمر</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Packed BHA', definition: 'تجميعة بثلاثة مثبتات متقاربة للحفاظ على الحفرة عمودية' },
            { term: 'Pendulum BHA', definition: 'تجميعة بمثبت واحد بعيد عن الرأس لتصحيح الانحراف' },
            { term: 'Building Assembly', definition: 'تجميعة تزيد زاوية ميل الحفرة' },
            { term: 'RSS (Rotary Steerable System)', definition: 'نظام توجيه حديث يسمح بالتوجيه أثناء الدوران المستمر' },
          ],
          practiceQuestion: {
            question: 'أي نوع من BHA يُستخدم للحفاظ على الحفرة عمودية باستخدام ثلاثة مثبتات متقاربة؟',
            options: ['Pendulum BHA', 'Packed BHA', 'Slick BHA', 'Motor BHA'],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'BHA Design for Different Wells',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 BHA Design Principles</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
BHA design is both an art and science requiring deep understanding of hole behavior and acting forces. The goal is achieving optimal drilling performance while controlling hole direction. Design depends on well type (vertical, directional, horizontal) and drilling objectives.
</p>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 BHA Behavior and Hole Direction</h2>

<div style="background: linear-gradient(135deg, #1e3a5f15, #f9731620); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #f97316;">
<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">📌 Three BHA Behavior Classifications:</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li><strong>Building Assembly:</strong> Increases inclination angle - pushes hole down</li>
<li><strong>Dropping Assembly:</strong> Decreases inclination angle - returns hole to vertical</li>
<li><strong>Holding Assembly:</strong> Maintains current angle and direction</li>
</ul>
</div>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">Factors Affecting BHA Behavior</h3>

<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li><strong>Stabilizer Position:</strong> Closer to bit increases effect</li>
<li><strong>Number of Stabilizers:</strong> One vs two vs three</li>
<li><strong>Stabilizer Diameter:</strong> Full Gauge vs Under Gauge</li>
<li><strong>Collar Stiffness:</strong> Affects BHA bending</li>
<li><strong>WOB:</strong> Higher weight increases building tendency</li>
<li><strong>RPM:</strong> Higher speed tends to drop</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 BHA for Vertical Drilling</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
Goal: Keep hole as vertical as possible while minimizing deviation.
</p>

<div style="background: #10b98115; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">Packed BHA Design:</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">Most effective for vertical drilling - three close stabilizers</p>
<div style="background: #1e3a5f10; padding: 1rem; border-radius: 8px;">
<p style="font-family: monospace; line-height: 1.8;">
Bit → Near-Bit Stabilizer (3-6 ft) → String Stabilizer (30 ft) → String Stabilizer (60 ft) → Drill Collars
</p>
</div>
</div>

<div style="background: #f9731620; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #f97316; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">Pendulum BHA Design:</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">Uses gravity to correct deviation - single stabilizer far from bit</p>
<div style="background: #1e3a5f10; padding: 1rem; border-radius: 8px;">
<p style="font-family: monospace; line-height: 1.8;">
Bit → Drill Collars (60-90 ft) → Stabilizer → More Drill Collars
</p>
</div>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 BHA for Directional Drilling</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
Directional drilling requires controlled hole direction changes. Typically uses:
</p>

<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #1e3a5f; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">Motor BHA with Bent Housing:</h3>
<p style="font-family: monospace; line-height: 1.8; background: #f5f5f5; padding: 1rem; border-radius: 8px;">
Bit → Bent Housing Motor (0.5-3°) → MWD → Stabilizer → Non-Mag Collars → Stabilizer → Collars → Jars → HWDP
</p>
<p style="margin-top: 1rem; line-height: 1.8;">
<strong>Sliding Mode:</strong> String stationary, motor rotates bit ← builds angle<br/>
<strong>Rotating Mode:</strong> String and motor rotate ← maintains direction
</p>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 BHA for Horizontal Drilling</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
Horizontal drilling requires BHA that can build to 90° then maintain horizontality.
</p>

<div style="background: linear-gradient(135deg, #1e3a5f15, #f9731620); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #f97316; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">Special Considerations:</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>Use Rotary Steerable System (RSS) for precise control</li>
<li>Slightly smaller stabilizers (Under Gauge) for easier movement</li>
<li>Shorter collars to reduce drag and friction</li>
<li>HWDP instead of collars in some sections</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Rotary Steerable System (RSS)</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
RSS is modern technology allowing steering while continuously rotating the string.
</p>

<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<strong style="color: #1e3a5f;">Two Main Types:</strong>
<ul style="list-style-type: circle; padding-left: 1.5rem; margin-top: 0.5rem; line-height: 2;">
<li><strong>Push-the-Bit:</strong> Pushes bit sideways using pads</li>
<li><strong>Point-the-Bit:</strong> Steers bit with internal bend</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>BHA can build, drop, or hold hole angle</li>
<li>Packed BHA for vertical drilling, Pendulum for correction</li>
<li>Directional drilling uses motor with bent housing</li>
<li>RSS allows steering while continuously rotating</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Packed BHA', definition: 'Assembly with three close stabilizers to keep hole vertical' },
            { term: 'Pendulum BHA', definition: 'Assembly with single stabilizer far from bit to correct deviation' },
            { term: 'Building Assembly', definition: 'Assembly that increases hole inclination angle' },
            { term: 'RSS (Rotary Steerable System)', definition: 'Modern steering system allowing steering while continuously rotating' },
          ],
          practiceQuestion: {
            question: 'Which BHA type is used to keep hole vertical using three close stabilizers?',
            options: ['Pendulum BHA', 'Packed BHA', 'Slick BHA', 'Motor BHA'],
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
          title: 'فحص وصيانة سلسلة الحفر',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 أهمية فحص وصيانة سلسلة الحفر</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
فحص وصيانة سلسلة الحفر من أهم متطلبات السلامة والكفاءة في عمليات الحفر. فشل أي مكون قد يؤدي لفقدان جزء من السلسلة في البئر (Fish) مما يتطلب عمليات صيد مكلفة أو حتى التخلي عن البئر.
</p>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 تصنيف حالة أنابيب الحفر</h2>

<div style="background: linear-gradient(135deg, #1e3a5f15, #f9731620); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #f97316;">
<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">📌 تصنيفات API لأنابيب الحفر:</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li><strong>Class 1 (Premium):</strong> جديدة أو بحالة ممتازة - 100% من القوة الأصلية</li>
<li><strong>Class 2:</strong> استخدام محدود، تآكل طفيف - 80% من القوة</li>
<li><strong>Class 3:</strong> استخدام كبير، تآكل واضح - 70% من القوة</li>
<li><strong>Scrap:</strong> تالفة، يجب إخراجها من الخدمة</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 طرق الفحص</h2>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">1️⃣ الفحص البصري (Visual Inspection)</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
أول وأسهل طرق الفحص، يتم في كل رحلة. يشمل البحث عن:
</p>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2; margin-bottom: 1rem;">
<li>تشققات أو شروخ ظاهرة</li>
<li>تآكل الجسم أو Tool Joints</li>
<li>تلف اللولب</li>
<li>انحناء أو تشوه</li>
<li>علامات Wash Out (تسرب سائل)</li>
</ul>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">2️⃣ الفحص بالأبعاد (Dimensional Inspection)</h3>
<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li><strong>قطر جسم الأنبوب:</strong> يجب ألا يقل عن 80% من الأصلي</li>
<li><strong>قطر Tool Joint OD:</strong> فحص التآكل الخارجي</li>
<li><strong>قطر Tool Joint ID:</strong> فحص التآكل الداخلي</li>
<li><strong>طول Tong Space:</strong> يجب أن يكون كافياً</li>
<li><strong>استقامة الأنبوب:</strong> فحص الانحناء</li>
</ul>
</div>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">3️⃣ الاختبارات غير المدمرة (NDT)</h3>

<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<p style="line-height: 1.8; margin-bottom: 1rem;"><strong style="color: #1e3a5f;">الفحص بالموجات فوق الصوتية (UT):</strong></p>
<ul style="list-style-type: circle; padding-right: 1.5rem; line-height: 1.8; margin-bottom: 1rem;">
<li>يقيس سمك الجدار بدقة</li>
<li>يكشف العيوب الداخلية</li>
<li>الأكثر شيوعاً لفحص جسم الأنبوب</li>
</ul>

<p style="line-height: 1.8; margin-bottom: 1rem;"><strong style="color: #1e3a5f;">الفحص بالجسيمات المغناطيسية (MPI):</strong></p>
<ul style="list-style-type: circle; padding-right: 1.5rem; line-height: 1.8; margin-bottom: 1rem;">
<li>يكشف الشقوق السطحية وتحت السطحية</li>
<li>يُستخدم لـ Tool Joints واللولب</li>
</ul>

<p style="line-height: 1.8; margin-bottom: 1rem;"><strong style="color: #1e3a5f;">الفحص بالتيار الدوامي (EMI):</strong></p>
<ul style="list-style-type: circle; padding-right: 1.5rem; line-height: 1.8;">
<li>سريع وفعال لفحص كميات كبيرة</li>
<li>يكشف تغيرات في سمك الجدار والعيوب</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 صيانة سلسلة الحفر</h2>

<div style="background: #10b98115; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">✅ إجراءات الصيانة الدورية:</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>تشحيم اللولب (Thread Compound) عند كل ربط</li>
<li>تنظيف اللولب من الأوساخ والحطام</li>
<li>فحص وتبديل Protectors على اللولب</li>
<li>Hard Banding على Tool Joints لمقاومة التآكل</li>
<li>تدوير الأنابيب في التخزين لمنع الانحناء</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 عزم الربط الصحيح (Make-up Torque)</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
الربط بعزم صحيح ضروري لمنع:
</p>

<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2; margin-bottom: 1rem;">
<li><strong>عزم زائد:</strong> يضعف اللولب ويسبب Over-Torque</li>
<li><strong>عزم ناقص:</strong> يسبب انفكاك الوصلة وتسرب السائل</li>
</ul>

<div style="background: #dc262615; padding: 1rem; border-radius: 8px; margin: 1rem 0; border-right: 4px solid #dc2626;">
<strong style="color: #dc2626;">⚠️ علامات خطر تتطلب إخراج الأنبوب من الخدمة:</strong>
<ul style="list-style-type: disc; padding-right: 1.5rem; margin-top: 0.5rem; line-height: 1.8;">
<li>أي شق أو كسر مرئي</li>
<li>Wash Out (ثقب من تآكل السائل)</li>
<li>سمك جدار أقل من 70% من الأصلي</li>
<li>تلف حاد في اللولب</li>
<li>انحناء يتجاوز 3° في 10 أقدام</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>أنابيب الحفر تُصنف من Premium إلى Scrap حسب الحالة</li>
<li>الفحص البصري والأبعاد يتم في كل رحلة</li>
<li>NDT (UT, MPI, EMI) للكشف عن العيوب المخفية</li>
<li>عزم الربط الصحيح ضروري لمنع الفشل</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'NDT (Non-Destructive Testing)', definition: 'اختبارات لا تدمر المادة للكشف عن العيوب' },
            { term: 'Wash Out', definition: 'ثقب في جدار الأنبوب ناتج عن تآكل سائل الحفر' },
            { term: 'Hard Banding', definition: 'طبقة صلبة تُوضع على Tool Joint لمقاومة التآكل' },
            { term: 'Make-up Torque', definition: 'عزم الربط الصحيح للوصلة حسب مواصفات الصانع' },
          ],
          practiceQuestion: {
            question: 'ما هو نوع الفحص الأكثر شيوعاً لقياس سمك جدار أنبوب الحفر بدقة؟',
            options: ['الفحص البصري', 'الفحص بالموجات فوق الصوتية (UT)', 'الفحص بالجسيمات المغناطيسية', 'الفحص بالأبعاد'],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Drill String Inspection and Maintenance',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Importance of Drill String Inspection and Maintenance</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
Drill string inspection and maintenance are among the most critical safety and efficiency requirements in drilling operations. Failure of any component can result in losing part of the string in the well (Fish), requiring costly fishing operations or even well abandonment.
</p>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Drill Pipe Condition Classification</h2>

<div style="background: linear-gradient(135deg, #1e3a5f15, #f9731620); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #f97316;">
<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">📌 API Drill Pipe Classifications:</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li><strong>Class 1 (Premium):</strong> New or excellent condition - 100% original strength</li>
<li><strong>Class 2:</strong> Limited use, slight wear - 80% strength</li>
<li><strong>Class 3:</strong> Significant use, visible wear - 70% strength</li>
<li><strong>Scrap:</strong> Damaged, must be removed from service</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Inspection Methods</h2>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">1️⃣ Visual Inspection</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
First and easiest inspection method, done every trip. Includes looking for:
</p>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2; margin-bottom: 1rem;">
<li>Visible cracks or fractures</li>
<li>Body or Tool Joint wear</li>
<li>Thread damage</li>
<li>Bending or deformation</li>
<li>Wash Out signs (fluid leakage)</li>
</ul>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">2️⃣ Dimensional Inspection</h3>
<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li><strong>Pipe Body Diameter:</strong> Must not be less than 80% of original</li>
<li><strong>Tool Joint OD:</strong> Check external wear</li>
<li><strong>Tool Joint ID:</strong> Check internal wear</li>
<li><strong>Tong Space Length:</strong> Must be sufficient</li>
<li><strong>Pipe Straightness:</strong> Check for bending</li>
</ul>
</div>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">3️⃣ Non-Destructive Testing (NDT)</h3>

<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<p style="line-height: 1.8; margin-bottom: 1rem;"><strong style="color: #1e3a5f;">Ultrasonic Testing (UT):</strong></p>
<ul style="list-style-type: circle; padding-left: 1.5rem; line-height: 1.8; margin-bottom: 1rem;">
<li>Accurately measures wall thickness</li>
<li>Detects internal defects</li>
<li>Most common for pipe body inspection</li>
</ul>

<p style="line-height: 1.8; margin-bottom: 1rem;"><strong style="color: #1e3a5f;">Magnetic Particle Inspection (MPI):</strong></p>
<ul style="list-style-type: circle; padding-left: 1.5rem; line-height: 1.8; margin-bottom: 1rem;">
<li>Detects surface and subsurface cracks</li>
<li>Used for Tool Joints and threads</li>
</ul>

<p style="line-height: 1.8; margin-bottom: 1rem;"><strong style="color: #1e3a5f;">Electromagnetic Inspection (EMI):</strong></p>
<ul style="list-style-type: circle; padding-left: 1.5rem; line-height: 1.8;">
<li>Fast and effective for large quantities</li>
<li>Detects wall thickness changes and defects</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Drill String Maintenance</h2>

<div style="background: #10b98115; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">✅ Routine Maintenance Procedures:</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>Thread compound application at each make-up</li>
<li>Thread cleaning from dirt and debris</li>
<li>Inspect and replace thread protectors</li>
<li>Hard banding on Tool Joints for wear resistance</li>
<li>Rotate pipes in storage to prevent bending</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Proper Make-up Torque</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
Correct make-up torque is essential to prevent:
</p>

<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2; margin-bottom: 1rem;">
<li><strong>Over-Torque:</strong> Weakens threads and causes damage</li>
<li><strong>Under-Torque:</strong> Causes connection loosening and fluid leakage</li>
</ul>

<div style="background: #dc262615; padding: 1rem; border-radius: 8px; margin: 1rem 0; border-left: 4px solid #dc2626;">
<strong style="color: #dc2626;">⚠️ Danger Signs Requiring Pipe Removal from Service:</strong>
<ul style="list-style-type: disc; padding-left: 1.5rem; margin-top: 0.5rem; line-height: 1.8;">
<li>Any visible crack or fracture</li>
<li>Wash Out (hole from fluid erosion)</li>
<li>Wall thickness less than 70% of original</li>
<li>Severe thread damage</li>
<li>Bending exceeding 3° in 10 feet</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>Drill pipe is classified from Premium to Scrap based on condition</li>
<li>Visual and dimensional inspection done every trip</li>
<li>NDT (UT, MPI, EMI) for detecting hidden defects</li>
<li>Proper make-up torque is essential to prevent failure</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'NDT (Non-Destructive Testing)', definition: 'Tests that do not damage material to detect defects' },
            { term: 'Wash Out', definition: 'Hole in pipe wall caused by drilling fluid erosion' },
            { term: 'Hard Banding', definition: 'Hard layer applied to Tool Joint for wear resistance' },
            { term: 'Make-up Torque', definition: 'Correct connection torque per manufacturer specifications' },
          ],
          practiceQuestion: {
            question: 'What inspection type is most common for accurately measuring drill pipe wall thickness?',
            options: ['Visual Inspection', 'Ultrasonic Testing (UT)', 'Magnetic Particle Inspection', 'Dimensional Inspection'],
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
          title: 'اختبار تصميم سلسلة الحفر و BHA',
          explanation: 'اختبر معلوماتك في تصميم سلسلة الحفر و BHA',
          keyTerms: [],
        },
        en: {
          title: 'Drill String & BHA Design Quiz',
          explanation: 'Test your knowledge on Drill String & BHA Design',
          keyTerms: [],
        },
      },
      quiz: {
        ar: [
          { question: 'أي درجة فولاذ لأنابيب الحفر لها أعلى قوة خضوع؟', options: ['Grade E', 'Grade X', 'Grade G', 'Grade S'], correctAnswer: 3 },
          { question: 'ما هو نوع أطواق الحفر المستخدم لتقليل الالتصاق التفاضلي؟', options: ['العادية', 'الحلزونية', 'غير المغناطيسية', 'HWDP'], correctAnswer: 1 },
          { question: 'ما الأداة المستخدمة لتحرير سلسلة الحفر من الالتصاق؟', options: ['Stabilizer', 'Reamer', 'Jar', 'Crossover'], correctAnswer: 2 },
          { question: 'أي تصميم BHA يستخدم ثلاثة مثبتات متقاربة للحفر العمودي؟', options: ['Pendulum', 'Packed', 'Slick', 'Motor'], correctAnswer: 1 },
          { question: 'ما هو الغرض الرئيسي من HWDP؟', options: ['توفير WOB', 'منطقة انتقالية', 'التوجيه', 'القياس'], correctAnswer: 1 },
          { question: 'أي فحص NDT الأكثر شيوعاً لقياس سمك الجدار؟', options: ['MPI', 'UT', 'EMI', 'Visual'], correctAnswer: 1 },
          { question: 'ما هو تصنيف API لأنبوب بـ 80% من قوته الأصلية؟', options: ['Premium', 'Class 2', 'Class 3', 'Scrap'], correctAnswer: 1 },
          { question: 'في Motor BHA، ما الوضع المستخدم لبناء الزاوية؟', options: ['Rotating', 'Sliding', 'Combined', 'Static'], correctAnswer: 1 },
          { question: 'ما هو RSS؟', options: ['نوع رأس حفر', 'نظام توجيه دوار', 'نوع مثبت', 'نظام فرامل'], correctAnswer: 1 },
          { question: 'ما هو Wash Out في أنابيب الحفر؟', options: ['تنظيف الأنبوب', 'ثقب من تآكل السائل', 'فحص الأنبوب', 'تشحيم اللولب'], correctAnswer: 1 },
        ],
        en: [
          { question: 'Which drill pipe steel grade has highest yield strength?', options: ['Grade E', 'Grade X', 'Grade G', 'Grade S'], correctAnswer: 3 },
          { question: 'What type of drill collar reduces differential sticking?', options: ['Standard', 'Spiral', 'Non-Magnetic', 'HWDP'], correctAnswer: 1 },
          { question: 'What tool is used to free stuck drill string?', options: ['Stabilizer', 'Reamer', 'Jar', 'Crossover'], correctAnswer: 2 },
          { question: 'Which BHA design uses three close stabilizers for vertical drilling?', options: ['Pendulum', 'Packed', 'Slick', 'Motor'], correctAnswer: 1 },
          { question: 'What is the main purpose of HWDP?', options: ['Provide WOB', 'Transition zone', 'Steering', 'Measurement'], correctAnswer: 1 },
          { question: 'Which NDT inspection is most common for measuring wall thickness?', options: ['MPI', 'UT', 'EMI', 'Visual'], correctAnswer: 1 },
          { question: 'What is API classification for pipe with 80% original strength?', options: ['Premium', 'Class 2', 'Class 3', 'Scrap'], correctAnswer: 1 },
          { question: 'In Motor BHA, what mode is used to build angle?', options: ['Rotating', 'Sliding', 'Combined', 'Static'], correctAnswer: 1 },
          { question: 'What is RSS?', options: ['Bit type', 'Rotary Steerable System', 'Stabilizer type', 'Brake system'], correctAnswer: 1 },
          { question: 'What is Wash Out in drill pipe?', options: ['Pipe cleaning', 'Hole from fluid erosion', 'Pipe inspection', 'Thread lubrication'], correctAnswer: 1 },
        ],
      },
    },
    {
      day: 7,
      type: 'project',
      content: {
        ar: {
          title: 'مشروع تصميم سلسلة الحفر و BHA',
          explanation: 'طبق ما تعلمته في هذا المشروع التطبيقي',
          keyTerms: [],
        },
        en: {
          title: 'Drill String & BHA Design Project',
          explanation: 'Apply what you learned in this practical project',
          keyTerms: [],
        },
      },
      project: {
        ar: {
          title: 'تصميم BHA لبئر موجه',
          description: 'في هذا المشروع، ستقوم بتصميم BHA كامل لبئر موجه مع جميع الحسابات والمبررات.',
          instructions: [
            'البيانات: عمق البئر المستهدف = 10,000 قدم، قطر الحفرة = 8.5 بوصة، زاوية الميل المطلوبة = 45°، الاتجاه = N30E، وزن السائل = 12 ppg، WOB المطلوب = 35,000 lb',
            'صمم BHA كامل مع ذكر كل مكون وسبب اختياره ومواصفاته',
            'احسب طول أطواق الحفر المطلوب مع عامل أمان 1.2',
            'اشرح كيف ستبني الزاوية المطلوبة (Sliding vs Rotating)',
            'ارسم مخططاً تخطيطياً بسيطاً يوضح ترتيب مكونات BHA',
            'اذكر الفحوصات التي ستجريها على السلسلة قبل الاستخدام',
          ],
          submissionType: 'text',
        },
        en: {
          title: 'BHA Design for Directional Well',
          description: 'In this project, you will design a complete BHA for a directional well with all calculations and justifications.',
          instructions: [
            'Data: Target well depth = 10,000 ft, Hole diameter = 8.5 inches, Required inclination = 45°, Azimuth = N30E, Mud weight = 12 ppg, Required WOB = 35,000 lb',
            'Design complete BHA listing each component, reason for selection, and specifications',
            'Calculate required drill collar length with 1.2 safety factor',
            'Explain how you will build the required angle (Sliding vs Rotating)',
            'Draw a simple schematic showing BHA component arrangement',
            'List inspections you will perform on string before use',
          ],
          submissionType: 'text',
        },
      },
    },
  ],
};
