import { WeeklyLesson } from '../weeklyContent';

export const bopSystemsLesson: WeeklyLesson = {
  lessonId: 'bop-systems',
  days: [
    {
      day: 1,
      type: 'learning',
      content: {
        ar: {
          title: 'أنظمة منع الانفجار - مقدمة ومبادئ السلامة',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 مقدمة في أنظمة منع الانفجار (BOP Systems)</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
نظام منع الانفجار (Blowout Preventer - BOP) هو أهم معدات السلامة في عمليات الحفر. يُعتبر خط الدفاع الأخير لمنع التدفق غير المسيطر عليه للسوائل والغازات من البئر إلى السطح. تم تطوير هذه الأنظمة بعد كوارث الانفجارات المبكرة في صناعة النفط، وأصبحت إلزامية في جميع عمليات الحفر حول العالم.
</p>

<div style="background: linear-gradient(135deg, #1e3a5f15, #f9731620); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #f97316;">
<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">📌 أهمية نظام BOP</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>منع الانفجارات وحماية الأرواح والممتلكات</li>
<li>السيطرة على ضغط البئر في حالات الطوارئ</li>
<li>إغلاق البئر عند حدوث تدفق (Kick)</li>
<li>السماح بعمليات التحكم في البئر (Well Control)</li>
<li>حماية البيئة من التلوث النفطي</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 ما هو الانفجار (Blowout)؟</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
الانفجار هو التدفق غير المسيطر عليه لسوائل التكوين (نفط، غاز، ماء) من البئر إلى السطح نتيجة فشل جميع أنظمة السيطرة. يحدث عندما يتجاوز ضغط التكوين ضغط عمود سائل الحفر ولا يمكن إغلاق البئر.
</p>

<div style="background: #dc262615; padding: 1rem; border-radius: 8px; margin: 1rem 0; border-right: 4px solid #dc2626;">
<strong style="color: #dc2626;">⚠️ أسباب الانفجارات:</strong>
<ul style="list-style-type: disc; padding-right: 1.5rem; margin-top: 0.5rem; line-height: 1.8;">
<li>كثافة سائل الحفر غير كافية (Underbalanced)</li>
<li>فقدان الدورة (Lost Circulation)</li>
<li>السحب الرطب (Swabbing) أثناء الرحلات</li>
<li>فشل معدات التحكم في البئر</li>
<li>خطأ بشري في التعامل مع التدفق</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 مفهوم التدفق (Kick)</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
التدفق (Kick) هو دخول غير مرغوب فيه لسوائل التكوين إلى البئر. يُعتبر التدفق المرحلة الأولى قبل الانفجار، ويمكن السيطرة عليه إذا تم اكتشافه والتعامل معه بسرعة.
</p>

<div style="background: #1e3a5f10; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<strong style="color: #1e3a5f;">علامات التدفق:</strong>
<ul style="list-style-type: circle; padding-right: 1.5rem; margin-top: 0.5rem; line-height: 1.8;">
<li>زيادة في حجم حوض السائل (Pit Gain)</li>
<li>زيادة في معدل التدفق الخارج (Flow Rate Increase)</li>
<li>انخفاض ضغط الضخ (Pump Pressure Decrease)</li>
<li>استمرار التدفق بعد إيقاف المضخات (Flow with Pumps Off)</li>
<li>تغير في خصائص السائل الخارج (Gas Cut Mud)</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 مبادئ التوازن الهيدروستاتيكي</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
يعتمد التحكم في البئر على مبدأ التوازن الهيدروستاتيكي، حيث يجب أن يكون ضغط عمود سائل الحفر أكبر من أو يساوي ضغط التكوين:
</p>

<div style="background: #10b98115; padding: 1rem; border-radius: 8px; margin: 1rem 0; border-right: 4px solid #10b981;">
<strong style="color: #10b981;">معادلة الضغط الهيدروستاتيكي:</strong>
<p style="font-family: monospace; margin-top: 0.5rem; font-size: 1.1rem;">
P = 0.052 × MW × TVD
</p>
<p style="margin-top: 0.5rem;">
حيث: P = الضغط (psi)، MW = كثافة السائل (ppg)، TVD = العمق الحقيقي العمودي (ft)
</p>
</div>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>نظام BOP هو خط الدفاع الأخير لمنع الانفجارات</li>
<li>الانفجار هو تدفق غير مسيطر عليه من البئر</li>
<li>التدفق (Kick) هو المرحلة الأولى قبل الانفجار</li>
<li>التحكم في البئر يعتمد على التوازن الهيدروستاتيكي</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'نظام منع الانفجار (BOP)', definition: 'Blowout Preventer - معدات السلامة الأساسية لإغلاق البئر ومنع التدفق غير المسيطر عليه' },
            { term: 'الانفجار (Blowout)', definition: 'التدفق غير المسيطر عليه لسوائل التكوين من البئر إلى السطح' },
            { term: 'التدفق (Kick)', definition: 'دخول غير مرغوب فيه لسوائل التكوين إلى البئر - المرحلة الأولى قبل الانفجار' },
            { term: 'الضغط الهيدروستاتيكي', definition: 'الضغط الناتج عن وزن عمود السائل في البئر' },
          ],
          practiceQuestion: {
            question: 'ما هو الفرق بين التدفق (Kick) والانفجار (Blowout)؟',
            options: ['لا يوجد فرق', 'التدفق يمكن السيطرة عليه، الانفجار لا يمكن', 'الانفجار أقل خطورة', 'التدفق يحدث في البحر فقط'],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'BOP Systems - Introduction and Safety Principles',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Introduction to BOP Systems</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
The Blowout Preventer (BOP) system is the most important safety equipment in drilling operations. It is considered the last line of defense to prevent uncontrolled flow of fluids and gases from the well to the surface. These systems were developed after early blowout disasters in the oil industry and have become mandatory in all drilling operations worldwide.
</p>

<div style="background: linear-gradient(135deg, #1e3a5f15, #f9731620); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #f97316;">
<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">📌 Importance of BOP System</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>Prevent blowouts and protect lives and property</li>
<li>Control well pressure in emergencies</li>
<li>Shut in the well when a kick occurs</li>
<li>Allow well control operations</li>
<li>Protect the environment from oil pollution</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 What is a Blowout?</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
A blowout is an uncontrolled flow of formation fluids (oil, gas, water) from the well to the surface resulting from the failure of all control systems. It occurs when formation pressure exceeds the hydrostatic pressure of the drilling fluid column and the well cannot be shut in.
</p>

<div style="background: #dc262615; padding: 1rem; border-radius: 8px; margin: 1rem 0; border-left: 4px solid #dc2626;">
<strong style="color: #dc2626;">⚠️ Causes of Blowouts:</strong>
<ul style="list-style-type: disc; padding-left: 1.5rem; margin-top: 0.5rem; line-height: 1.8;">
<li>Insufficient drilling fluid density (Underbalanced)</li>
<li>Lost Circulation</li>
<li>Swabbing during trips</li>
<li>Well control equipment failure</li>
<li>Human error in kick handling</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Understanding Kicks</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
A kick is an unwanted influx of formation fluids into the wellbore. A kick is considered the first stage before a blowout and can be controlled if detected and handled quickly.
</p>

<div style="background: #1e3a5f10; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<strong style="color: #1e3a5f;">Kick Indicators:</strong>
<ul style="list-style-type: circle; padding-left: 1.5rem; margin-top: 0.5rem; line-height: 1.8;">
<li>Pit gain (increase in mud tank volume)</li>
<li>Flow rate increase</li>
<li>Pump pressure decrease</li>
<li>Flow with pumps off</li>
<li>Gas cut mud</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Hydrostatic Balance Principles</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
Well control relies on the principle of hydrostatic balance, where the pressure of the drilling fluid column must be greater than or equal to formation pressure:
</p>

<div style="background: #10b98115; padding: 1rem; border-radius: 8px; margin: 1rem 0; border-left: 4px solid #10b981;">
<strong style="color: #10b981;">Hydrostatic Pressure Equation:</strong>
<p style="font-family: monospace; margin-top: 0.5rem; font-size: 1.1rem;">
P = 0.052 × MW × TVD
</p>
<p style="margin-top: 0.5rem;">
Where: P = Pressure (psi), MW = Mud Weight (ppg), TVD = True Vertical Depth (ft)
</p>
</div>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>BOP system is the last line of defense against blowouts</li>
<li>A blowout is an uncontrolled flow from the well</li>
<li>A kick is the first stage before a blowout</li>
<li>Well control depends on hydrostatic balance</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'BOP (Blowout Preventer)', definition: 'Essential safety equipment for shutting in the well and preventing uncontrolled flow' },
            { term: 'Blowout', definition: 'Uncontrolled flow of formation fluids from the well to the surface' },
            { term: 'Kick', definition: 'Unwanted influx of formation fluids into the wellbore - the first stage before a blowout' },
            { term: 'Hydrostatic Pressure', definition: 'Pressure created by the weight of the fluid column in the well' },
          ],
          practiceQuestion: {
            question: 'What is the difference between a kick and a blowout?',
            options: ['No difference', 'A kick can be controlled, a blowout cannot', 'A blowout is less dangerous', 'A kick only occurs offshore'],
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
          title: 'أنواع مانعات الانفجار - الحلقي والكباسي',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 أنواع مانعات الانفجار</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
تُصنف مانعات الانفجار إلى نوعين رئيسيين بناءً على آلية الإغلاق: المانع الحلقي (Annular BOP) والمانع الكباسي (Ram BOP). كل نوع له وظائف ومميزات خاصة، ويتم استخدامهما معاً في تجميعة BOP الكاملة لتوفير أقصى حماية.
</p>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 المانع الحلقي (Annular BOP)</h2>

<div style="background: linear-gradient(135deg, #1e3a5f15, #f9731620); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #f97316;">
<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">📌 خصائص المانع الحلقي</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>يحتوي على عنصر مطاطي (Packing Element) يمكنه الإغلاق حول أي شكل</li>
<li>يمكنه الإغلاق على أنابيب الحفر، أطواق الحفر، الكيلي، أو على فتحة فارغة</li>
<li>يسمح بتحريك الأنابيب أثناء الإغلاق (Stripping)</li>
<li>يُستخدم كأول خط إغلاق عند اكتشاف التدفق</li>
<li>يتحمل ضغوط أقل من المانع الكباسي</li>
</ul>
</div>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">مكونات المانع الحلقي:</h3>
<div style="background: #1e3a5f10; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<ul style="list-style-type: circle; padding-right: 1.5rem; line-height: 2;">
<li><strong>الجسم (Body):</strong> الهيكل الخارجي المصنوع من الفولاذ</li>
<li><strong>العنصر المطاطي (Packing Element):</strong> المكون المرن الذي يغلق حول الأنابيب</li>
<li><strong>المكبس (Piston):</strong> يضغط العنصر المطاطي عند التشغيل</li>
<li><strong>غرفة الإغلاق والفتح (Close/Open Chamber):</strong> لتوجيه السائل الهيدروليكي</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 المانع الكباسي (Ram BOP)</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
المانع الكباسي يستخدم كباسات (Rams) تتحرك أفقياً لإغلاق البئر. يتميز بقوة إغلاق أعلى وقدرة على تحمل ضغوط أكبر من المانع الحلقي.
</p>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">أنواع الكباسات:</h3>

<div style="background: #1e3a5f10; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<ul style="list-style-type: none; padding-right: 1rem; line-height: 2;">
<li><strong>1️⃣ كباسات الأنابيب (Pipe Rams):</strong></li>
<li style="padding-right: 2rem;">• مصممة لإغلاق حول حجم محدد من الأنابيب</li>
<li style="padding-right: 2rem;">• يجب أن يتطابق حجم الكباس مع حجم الأنبوب</li>
<li style="padding-right: 2rem;">• Variable Bore Rams يمكنها الإغلاق على أحجام متعددة</li>
</ul>
</div>

<div style="background: #1e3a5f10; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<ul style="list-style-type: none; padding-right: 1rem; line-height: 2;">
<li><strong>2️⃣ كباسات القص (Shear Rams):</strong></li>
<li style="padding-right: 2rem;">• تقطع أنابيب الحفر وتغلق البئر بالكامل</li>
<li style="padding-right: 2rem;">• تُستخدم في حالات الطوارئ القصوى</li>
<li style="padding-right: 2rem;">• Super Shear Rams يمكنها قطع أطواق الحفر</li>
</ul>
</div>

<div style="background: #1e3a5f10; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<ul style="list-style-type: none; padding-right: 1rem; line-height: 2;">
<li><strong>3️⃣ كباسات الإغلاق الكامل (Blind Rams):</strong></li>
<li style="padding-right: 2rem;">• تغلق البئر عندما لا توجد أنابيب</li>
<li style="padding-right: 2rem;">• سطح الإغلاق مسطح بالكامل</li>
</ul>
</div>

<div style="background: #dc262615; padding: 1rem; border-radius: 8px; margin: 1rem 0; border-right: 4px solid #dc2626;">
<strong style="color: #dc2626;">⚠️ تحذير مهم:</strong>
<p style="margin-top: 0.5rem; line-height: 1.8;">
يجب التأكد دائماً من أن حجم كباسات الأنابيب يتطابق مع حجم الأنابيب في البئر. إغلاق كباس على أنبوب بحجم خاطئ لن يوفر إغلاقاً محكماً.
</p>
</div>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>المانع الحلقي مرن ويمكنه الإغلاق على أي شكل</li>
<li>المانع الكباسي أقوى ويتحمل ضغوط أعلى</li>
<li>كباسات الأنابيب تغلق حول الأنابيب، والقص تقطعها</li>
<li>كباسات الإغلاق الكامل للبئر الفارغ</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'المانع الحلقي (Annular BOP)', definition: 'مانع انفجار يستخدم عنصر مطاطي مرن للإغلاق حول أي شكل' },
            { term: 'المانع الكباسي (Ram BOP)', definition: 'مانع انفجار يستخدم كباسات تتحرك أفقياً للإغلاق' },
            { term: 'كباسات القص (Shear Rams)', definition: 'كباسات تقطع أنابيب الحفر وتغلق البئر في حالات الطوارئ' },
            { term: 'العنصر المطاطي (Packing Element)', definition: 'المكون المرن في المانع الحلقي الذي يغلق حول الأنابيب' },
          ],
          practiceQuestion: {
            question: 'أي نوع من الكباسات يُستخدم لقطع أنابيب الحفر في حالات الطوارئ؟',
            options: ['كباسات الأنابيب', 'كباسات الإغلاق الكامل', 'كباسات القص', 'المانع الحلقي'],
            correctAnswer: 2,
          },
        },
        en: {
          title: 'Types of BOPs - Annular and Ram',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Types of Blowout Preventers</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
Blowout preventers are classified into two main types based on their closing mechanism: Annular BOP and Ram BOP. Each type has specific functions and features, and they are used together in a complete BOP stack to provide maximum protection.
</p>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Annular BOP</h2>

<div style="background: linear-gradient(135deg, #1e3a5f15, #f9731620); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #f97316;">
<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">📌 Annular BOP Characteristics</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>Contains a rubber packing element that can close around any shape</li>
<li>Can close on drill pipe, drill collars, kelly, or open hole</li>
<li>Allows pipe movement while closed (Stripping)</li>
<li>Used as first line of closure when kick is detected</li>
<li>Handles lower pressures than ram BOP</li>
</ul>
</div>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">Annular BOP Components:</h3>
<div style="background: #1e3a5f10; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<ul style="list-style-type: circle; padding-left: 1.5rem; line-height: 2;">
<li><strong>Body:</strong> The steel outer housing</li>
<li><strong>Packing Element:</strong> The flexible component that seals around pipe</li>
<li><strong>Piston:</strong> Compresses the packing element when activated</li>
<li><strong>Close/Open Chamber:</strong> Directs hydraulic fluid</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Ram BOP</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
The Ram BOP uses rams that move horizontally to close the well. It features higher closing force and can handle greater pressures than the annular BOP.
</p>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">Types of Rams:</h3>

<div style="background: #1e3a5f10; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<ul style="list-style-type: none; padding-left: 1rem; line-height: 2;">
<li><strong>1️⃣ Pipe Rams:</strong></li>
<li style="padding-left: 2rem;">• Designed to close around a specific pipe size</li>
<li style="padding-left: 2rem;">• Ram size must match pipe size</li>
<li style="padding-left: 2rem;">• Variable Bore Rams can close on multiple sizes</li>
</ul>
</div>

<div style="background: #1e3a5f10; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<ul style="list-style-type: none; padding-left: 1rem; line-height: 2;">
<li><strong>2️⃣ Shear Rams:</strong></li>
<li style="padding-left: 2rem;">• Cut drill pipe and completely seal the well</li>
<li style="padding-left: 2rem;">• Used in extreme emergencies</li>
<li style="padding-left: 2rem;">• Super Shear Rams can cut drill collars</li>
</ul>
</div>

<div style="background: #1e3a5f10; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<ul style="list-style-type: none; padding-left: 1rem; line-height: 2;">
<li><strong>3️⃣ Blind Rams:</strong></li>
<li style="padding-left: 2rem;">• Close the well when no pipe is present</li>
<li style="padding-left: 2rem;">• Sealing surface is completely flat</li>
</ul>
</div>

<div style="background: #dc262615; padding: 1rem; border-radius: 8px; margin: 1rem 0; border-left: 4px solid #dc2626;">
<strong style="color: #dc2626;">⚠️ Important Warning:</strong>
<p style="margin-top: 0.5rem; line-height: 1.8;">
Always ensure that pipe ram size matches the pipe size in the well. Closing a ram on incorrectly sized pipe will not provide a proper seal.
</p>
</div>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>Annular BOP is flexible and can close on any shape</li>
<li>Ram BOP is stronger and handles higher pressures</li>
<li>Pipe rams close around pipe, shear rams cut it</li>
<li>Blind rams for empty wellbore</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Annular BOP', definition: 'A BOP that uses a flexible rubber element to seal around any shape' },
            { term: 'Ram BOP', definition: 'A BOP that uses horizontally moving rams to close' },
            { term: 'Shear Rams', definition: 'Rams that cut drill pipe and seal the well in emergencies' },
            { term: 'Packing Element', definition: 'The flexible component in annular BOP that seals around pipe' },
          ],
          practiceQuestion: {
            question: 'Which type of rams is used to cut drill pipe in emergencies?',
            options: ['Pipe Rams', 'Blind Rams', 'Shear Rams', 'Annular BOP'],
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
          title: 'تجميعة BOP ونظام التحكم',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 تجميعة BOP (BOP Stack)</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
تجميعة BOP هي مجموعة من مانعات الانفجار المركبة فوق بعضها البعض لتوفير طبقات متعددة من الحماية. يختلف ترتيب وعدد المكونات حسب نوع البئر (بري أو بحري) والضغط المتوقع والمتطلبات التنظيمية.
</p>

<div style="background: linear-gradient(135deg, #1e3a5f15, #f9731620); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #f97316;">
<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">📌 ترتيب تجميعة BOP النموذجية (من الأسفل للأعلى)</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li><strong>1.</strong> رأس البئر (Wellhead)</li>
<li><strong>2.</strong> كباسات الأنابيب السفلية (Lower Pipe Rams)</li>
<li><strong>3.</strong> كباسات القص/الإغلاق الكامل (Shear/Blind Rams)</li>
<li><strong>4.</strong> كباسات الأنابيب العلوية (Upper Pipe Rams)</li>
<li><strong>5.</strong> المانع الحلقي (Annular BOP)</li>
<li><strong>6.</strong> فاصل الحفر/الإنتاج (Drilling Spool)</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 نظام التحكم الهيدروليكي</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
يتم تشغيل BOP بواسطة نظام تحكم هيدروليكي يوفر الضغط اللازم لإغلاق وفتح المانعات. يُعرف هذا النظام بوحدة تجميع التحكم (Accumulator Unit) أو "Koomey Unit".
</p>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">مكونات نظام التحكم:</h3>
<div style="background: #1e3a5f10; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<ul style="list-style-type: circle; padding-right: 1.5rem; line-height: 2;">
<li><strong>خزانات المجمع (Accumulator Bottles):</strong> تخزن السائل الهيدروليكي تحت ضغط النيتروجين</li>
<li><strong>المضخات (Pumps):</strong> تملأ المجمعات وتوفر ضغط مستمر</li>
<li><strong>لوحة التحكم (Control Panel):</strong> للتحكم في فتح وإغلاق كل مانع</li>
<li><strong>خطوط التحكم (Control Lines):</strong> أنابيب تنقل السائل الهيدروليكي للمانعات</li>
<li><strong>صمامات التحكم (Control Valves):</strong> توجه السائل لغرف الإغلاق أو الفتح</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 متطلبات السعة</h2>

<div style="background: #10b98115; padding: 1rem; border-radius: 8px; margin: 1rem 0; border-right: 4px solid #10b981;">
<strong style="color: #10b981;">متطلبات API للمجمعات:</strong>
<ul style="list-style-type: disc; padding-right: 1.5rem; margin-top: 0.5rem; line-height: 1.8;">
<li>القدرة على إغلاق وفتح جميع المانعات مرة واحدة</li>
<li>ضغط العمل: 3000 psi كحد أدنى</li>
<li>احتياطي 50% من السعة الكلية بعد الإغلاق</li>
<li>وقت الإغلاق: 30 ثانية كحد أقصى للحلقي، 45 ثانية للكباسي</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 لوحات التحكم</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
توجد عدة لوحات تحكم في مواقع مختلفة لضمان إمكانية التشغيل في أي ظرف:
</p>

<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2; margin-bottom: 1rem;">
<li><strong>لوحة التحكم الرئيسية (Main Control Panel):</strong> عند وحدة المجمعات</li>
<li><strong>لوحة الحفار (Driller's Panel):</strong> على أرضية الحفر للاستجابة السريعة</li>
<li><strong>لوحة التحكم عن بعد (Remote Panel):</strong> في موقع آمن بعيد عن البئر</li>
</ul>

<div style="background: #dc262615; padding: 1rem; border-radius: 8px; margin: 1rem 0; border-right: 4px solid #dc2626;">
<strong style="color: #dc2626;">⚠️ نقطة حرجة:</strong>
<p style="margin-top: 0.5rem; line-height: 1.8;">
يجب فحص ضغط المجمعات بشكل مستمر. انخفاض الضغط يعني عدم القدرة على إغلاق البئر بالسرعة المطلوبة في حالة الطوارئ.
</p>
</div>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>تجميعة BOP تتكون من طبقات متعددة من المانعات</li>
<li>نظام التحكم الهيدروليكي يشغل المانعات بالضغط</li>
<li>المجمعات تخزن الطاقة للإغلاق السريع</li>
<li>توجد لوحات تحكم متعددة في مواقع مختلفة</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'تجميعة BOP (BOP Stack)', definition: 'مجموعة مانعات الانفجار المركبة فوق بعضها البعض' },
            { term: 'وحدة المجمعات (Accumulator Unit)', definition: 'نظام تخزين الطاقة الهيدروليكية لتشغيل المانعات' },
            { term: 'لوحة الحفار (Driller Panel)', definition: 'لوحة التحكم على أرضية الحفر للاستجابة السريعة' },
            { term: 'ضغط الشحن (Pre-charge Pressure)', definition: 'ضغط النيتروجين في خزانات المجمع' },
          ],
          practiceQuestion: {
            question: 'ما هو الحد الأقصى لوقت إغلاق المانع الحلقي حسب معايير API؟',
            options: ['15 ثانية', '30 ثانية', '45 ثانية', '60 ثانية'],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'BOP Stack and Control System',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 BOP Stack</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
A BOP stack is a set of blowout preventers mounted on top of each other to provide multiple layers of protection. The arrangement and number of components varies depending on well type (onshore or offshore), expected pressure, and regulatory requirements.
</p>

<div style="background: linear-gradient(135deg, #1e3a5f15, #f9731620); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #f97316;">
<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">📌 Typical BOP Stack Arrangement (Bottom to Top)</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li><strong>1.</strong> Wellhead</li>
<li><strong>2.</strong> Lower Pipe Rams</li>
<li><strong>3.</strong> Shear/Blind Rams</li>
<li><strong>4.</strong> Upper Pipe Rams</li>
<li><strong>5.</strong> Annular BOP</li>
<li><strong>6.</strong> Drilling Spool</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Hydraulic Control System</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
The BOP is operated by a hydraulic control system that provides the pressure needed to close and open the preventers. This system is known as the Accumulator Unit or "Koomey Unit".
</p>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">Control System Components:</h3>
<div style="background: #1e3a5f10; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<ul style="list-style-type: circle; padding-left: 1.5rem; line-height: 2;">
<li><strong>Accumulator Bottles:</strong> Store hydraulic fluid under nitrogen pressure</li>
<li><strong>Pumps:</strong> Fill accumulators and provide continuous pressure</li>
<li><strong>Control Panel:</strong> Controls opening and closing of each preventer</li>
<li><strong>Control Lines:</strong> Pipes that carry hydraulic fluid to preventers</li>
<li><strong>Control Valves:</strong> Direct fluid to close or open chambers</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Capacity Requirements</h2>

<div style="background: #10b98115; padding: 1rem; border-radius: 8px; margin: 1rem 0; border-left: 4px solid #10b981;">
<strong style="color: #10b981;">API Accumulator Requirements:</strong>
<ul style="list-style-type: disc; padding-left: 1.5rem; margin-top: 0.5rem; line-height: 1.8;">
<li>Ability to close and open all preventers once</li>
<li>Working pressure: 3000 psi minimum</li>
<li>50% reserve capacity after closure</li>
<li>Closing time: 30 seconds max for annular, 45 seconds for rams</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Control Panels</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
Multiple control panels exist at different locations to ensure operation is possible under any circumstance:
</p>

<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2; margin-bottom: 1rem;">
<li><strong>Main Control Panel:</strong> At the accumulator unit</li>
<li><strong>Driller's Panel:</strong> On the rig floor for quick response</li>
<li><strong>Remote Panel:</strong> In a safe location away from the well</li>
</ul>

<div style="background: #dc262615; padding: 1rem; border-radius: 8px; margin: 1rem 0; border-left: 4px solid #dc2626;">
<strong style="color: #dc2626;">⚠️ Critical Point:</strong>
<p style="margin-top: 0.5rem; line-height: 1.8;">
Accumulator pressure must be continuously monitored. Low pressure means inability to close the well at required speed in an emergency.
</p>
</div>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>BOP stack consists of multiple layers of preventers</li>
<li>Hydraulic control system operates preventers with pressure</li>
<li>Accumulators store energy for rapid closure</li>
<li>Multiple control panels at different locations</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'BOP Stack', definition: 'Set of blowout preventers mounted on top of each other' },
            { term: 'Accumulator Unit', definition: 'Hydraulic energy storage system for operating preventers' },
            { term: 'Driller Panel', definition: 'Control panel on rig floor for quick response' },
            { term: 'Pre-charge Pressure', definition: 'Nitrogen pressure in accumulator bottles' },
          ],
          practiceQuestion: {
            question: 'What is the maximum closing time for annular BOP according to API standards?',
            options: ['15 seconds', '30 seconds', '45 seconds', '60 seconds'],
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
          title: 'اختبار BOP - الإجراءات والمتطلبات',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 اختبار مانعات الانفجار (BOP Testing)</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
اختبار BOP هو إجراء حيوي لضمان جاهزية نظام منع الانفجار للعمل في حالات الطوارئ. تُجرى اختبارات منتظمة للتحقق من سلامة المعدات وقدرتها على تحمل الضغوط المطلوبة. عدم إجراء الاختبارات بشكل صحيح قد يؤدي إلى كوارث.
</p>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 أنواع اختبارات BOP</h2>

<div style="background: linear-gradient(135deg, #1e3a5f15, #f9731620); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #f97316;">
<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">📌 1. اختبار الضغط (Pressure Test)</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li><strong>اختبار الضغط المنخفض:</strong> 200-300 psi للتحقق من الختم الأولي</li>
<li><strong>اختبار الضغط العالي:</strong> ضغط العمل الأقصى المصنف للمعدات</li>
<li><strong>مدة الاختبار:</strong> 5 دقائق كحد أدنى لكل اختبار</li>
<li><strong>معيار القبول:</strong> لا يُسمح بأي انخفاض في الضغط</li>
</ul>
</div>

<div style="background: #1e3a5f10; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<h3 style="color: #1e3a5f; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.5rem;">2. اختبار الوظائف (Function Test)</h3>
<ul style="list-style-type: circle; padding-right: 1.5rem; line-height: 2;">
<li>فتح وإغلاق كل مانع للتحقق من التشغيل السليم</li>
<li>التحقق من زمن الإغلاق والفتح</li>
<li>فحص مؤشرات الموقع (Position Indicators)</li>
<li>اختبار جميع لوحات التحكم</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 جدول الاختبارات</h2>

<div style="background: #1e3a5f10; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<table style="width: 100%; border-collapse: collapse;">
<tr style="background: #1e3a5f20;">
<th style="padding: 0.5rem; text-align: right; border: 1px solid #1e3a5f40;">نوع الاختبار</th>
<th style="padding: 0.5rem; text-align: right; border: 1px solid #1e3a5f40;">التكرار</th>
</tr>
<tr>
<td style="padding: 0.5rem; border: 1px solid #1e3a5f40;">اختبار الضغط الكامل</td>
<td style="padding: 0.5rem; border: 1px solid #1e3a5f40;">عند التركيب وكل 14 يوم</td>
</tr>
<tr>
<td style="padding: 0.5rem; border: 1px solid #1e3a5f40;">اختبار الوظائف</td>
<td style="padding: 0.5rem; border: 1px solid #1e3a5f40;">كل 7 أيام</td>
</tr>
<tr>
<td style="padding: 0.5rem; border: 1px solid #1e3a5f40;">فحص المجمعات</td>
<td style="padding: 0.5rem; border: 1px solid #1e3a5f40;">يومياً (كل وردية)</td>
</tr>
<tr>
<td style="padding: 0.5rem; border: 1px solid #1e3a5f40;">تدريبات الطوارئ</td>
<td style="padding: 0.5rem; border: 1px solid #1e3a5f40;">أسبوعياً</td>
</tr>
</table>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 إجراء اختبار الضغط</h2>

<ol style="padding-right: 1.5rem; line-height: 2; margin-bottom: 1rem;">
<li><strong>التحضير:</strong> تركيب أداة الاختبار وتوصيل خطوط الضغط</li>
<li><strong>اختبار الضغط المنخفض:</strong> رفع الضغط إلى 200-300 psi، الانتظار 5 دقائق</li>
<li><strong>اختبار الضغط العالي:</strong> رفع الضغط للقيمة المصنفة، الانتظار 5 دقائق</li>
<li><strong>التسجيل:</strong> توثيق القراءات والنتائج</li>
<li><strong>تحرير الضغط:</strong> تخفيف الضغط ببطء وفحص المعدات</li>
</ol>

<div style="background: #dc262615; padding: 1rem; border-radius: 8px; margin: 1rem 0; border-right: 4px solid #dc2626;">
<strong style="color: #dc2626;">⚠️ تحذيرات السلامة:</strong>
<ul style="list-style-type: disc; padding-right: 1.5rem; margin-top: 0.5rem; line-height: 1.8;">
<li>إخلاء المنطقة المحيطة بالـ BOP أثناء الاختبار</li>
<li>عدم الوقوف أمام أي صمامات أو وصلات</li>
<li>استخدام الماء وليس الهواء للاختبار</li>
<li>التأكد من إغلاق جميع الصمامات قبل الضغط</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>اختبارات BOP تشمل اختبار الضغط واختبار الوظائف</li>
<li>اختبار الضغط يتم على مرحلتين: منخفض وعالي</li>
<li>الاختبار الكامل كل 14 يوم واختبار الوظائف أسبوعياً</li>
<li>السلامة أثناء الاختبار ضرورية لتجنب الحوادث</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'اختبار الضغط (Pressure Test)', definition: 'اختبار لتحقق من قدرة المانعات على تحمل الضغط المصنف' },
            { term: 'اختبار الوظائف (Function Test)', definition: 'اختبار للتحقق من التشغيل السليم لفتح وإغلاق المانعات' },
            { term: 'ضغط العمل المصنف (Rated Working Pressure)', definition: 'أقصى ضغط يمكن للمعدات تحمله بأمان' },
            { term: 'معيار القبول (Acceptance Criteria)', definition: 'الشروط التي يجب تحقيقها لاعتبار الاختبار ناجحاً' },
          ],
          practiceQuestion: {
            question: 'كم هي فترة تكرار اختبار الضغط الكامل لـ BOP؟',
            options: ['يومياً', 'كل 7 أيام', 'كل 14 يوم', 'شهرياً'],
            correctAnswer: 2,
          },
        },
        en: {
          title: 'BOP Testing - Procedures and Requirements',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 BOP Testing</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
BOP testing is a vital procedure to ensure the blowout prevention system is ready to operate in emergencies. Regular tests are conducted to verify equipment integrity and its ability to withstand required pressures. Failure to conduct tests properly could lead to disasters.
</p>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Types of BOP Tests</h2>

<div style="background: linear-gradient(135deg, #1e3a5f15, #f9731620); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #f97316;">
<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">📌 1. Pressure Test</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li><strong>Low Pressure Test:</strong> 200-300 psi to verify initial seal</li>
<li><strong>High Pressure Test:</strong> Maximum rated working pressure</li>
<li><strong>Test Duration:</strong> 5 minutes minimum for each test</li>
<li><strong>Acceptance Criteria:</strong> No pressure drop allowed</li>
</ul>
</div>

<div style="background: #1e3a5f10; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<h3 style="color: #1e3a5f; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.5rem;">2. Function Test</h3>
<ul style="list-style-type: circle; padding-left: 1.5rem; line-height: 2;">
<li>Open and close each preventer to verify proper operation</li>
<li>Verify closing and opening times</li>
<li>Check position indicators</li>
<li>Test all control panels</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Test Schedule</h2>

<div style="background: #1e3a5f10; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<table style="width: 100%; border-collapse: collapse;">
<tr style="background: #1e3a5f20;">
<th style="padding: 0.5rem; text-align: left; border: 1px solid #1e3a5f40;">Test Type</th>
<th style="padding: 0.5rem; text-align: left; border: 1px solid #1e3a5f40;">Frequency</th>
</tr>
<tr>
<td style="padding: 0.5rem; border: 1px solid #1e3a5f40;">Full Pressure Test</td>
<td style="padding: 0.5rem; border: 1px solid #1e3a5f40;">On installation and every 14 days</td>
</tr>
<tr>
<td style="padding: 0.5rem; border: 1px solid #1e3a5f40;">Function Test</td>
<td style="padding: 0.5rem; border: 1px solid #1e3a5f40;">Every 7 days</td>
</tr>
<tr>
<td style="padding: 0.5rem; border: 1px solid #1e3a5f40;">Accumulator Check</td>
<td style="padding: 0.5rem; border: 1px solid #1e3a5f40;">Daily (each shift)</td>
</tr>
<tr>
<td style="padding: 0.5rem; border: 1px solid #1e3a5f40;">Emergency Drills</td>
<td style="padding: 0.5rem; border: 1px solid #1e3a5f40;">Weekly</td>
</tr>
</table>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Pressure Test Procedure</h2>

<ol style="padding-left: 1.5rem; line-height: 2; margin-bottom: 1rem;">
<li><strong>Preparation:</strong> Install test tool and connect pressure lines</li>
<li><strong>Low Pressure Test:</strong> Raise pressure to 200-300 psi, wait 5 minutes</li>
<li><strong>High Pressure Test:</strong> Raise pressure to rated value, wait 5 minutes</li>
<li><strong>Recording:</strong> Document readings and results</li>
<li><strong>Pressure Release:</strong> Slowly release pressure and inspect equipment</li>
</ol>

<div style="background: #dc262615; padding: 1rem; border-radius: 8px; margin: 1rem 0; border-left: 4px solid #dc2626;">
<strong style="color: #dc2626;">⚠️ Safety Warnings:</strong>
<ul style="list-style-type: disc; padding-left: 1.5rem; margin-top: 0.5rem; line-height: 1.8;">
<li>Clear area around BOP during testing</li>
<li>Do not stand in front of any valves or connections</li>
<li>Use water, not air, for testing</li>
<li>Ensure all valves are closed before pressuring</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>BOP tests include pressure tests and function tests</li>
<li>Pressure test is done in two stages: low and high</li>
<li>Full test every 14 days, function test weekly</li>
<li>Safety during testing is essential to avoid accidents</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Pressure Test', definition: 'Test to verify preventers can withstand rated pressure' },
            { term: 'Function Test', definition: 'Test to verify proper operation of opening and closing preventers' },
            { term: 'Rated Working Pressure', definition: 'Maximum pressure the equipment can safely withstand' },
            { term: 'Acceptance Criteria', definition: 'Conditions that must be met for a test to be considered successful' },
          ],
          practiceQuestion: {
            question: 'How often is a full BOP pressure test required?',
            options: ['Daily', 'Every 7 days', 'Every 14 days', 'Monthly'],
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
          title: 'التحكم في البئر - الإجراءات والطرق',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 إجراءات التحكم في البئر (Well Control Procedures)</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
عند حدوث تدفق (Kick)، يجب اتباع إجراءات محددة للسيطرة على البئر ومنع تحوله إلى انفجار. هذه الإجراءات تتطلب تدريباً مستمراً وتنسيقاً بين جميع أفراد الطاقم.
</p>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 إجراء إغلاق البئر (Shut-In Procedure)</h2>

<div style="background: linear-gradient(135deg, #1e3a5f15, #f9731620); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #f97316;">
<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">📌 خطوات الإغلاق الصلب (Hard Shut-In)</h3>
<ol style="padding-right: 1.5rem; line-height: 2;">
<li>عند اكتشاف التدفق، أوقف المضخات فوراً</li>
<li>ارفع الكيلي عن أرضية الحفر</li>
<li>أغلق المانع الحلقي أو كباسات الأنابيب</li>
<li>تأكد من إغلاق خط الخنق (Choke Line)</li>
<li>سجّل ضغط أنابيب الحفر (SIDPP) وضغط الحلقي (SICP)</li>
<li>سجّل زيادة حجم الحوض (Pit Gain)</li>
</ol>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 طرق قتل البئر (Kill Methods)</h2>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">1️⃣ طريقة الحفار (Driller's Method)</h3>
<div style="background: #1e3a5f10; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<p style="line-height: 1.8; margin-bottom: 0.5rem;"><strong>المبدأ:</strong> دورتان منفصلتان - الأولى لإخراج التدفق، الثانية لضخ سائل القتل</p>
<ul style="list-style-type: circle; padding-right: 1.5rem; line-height: 2;">
<li><strong>الدورة الأولى:</strong> ضخ السائل الأصلي لإخراج التدفق من البئر</li>
<li><strong>الدورة الثانية:</strong> ضخ سائل القتل (Kill Mud) بالكثافة المطلوبة</li>
<li><strong>المميزات:</strong> بسيطة، لا تتطلب حسابات معقدة</li>
<li><strong>العيوب:</strong> ضغوط أعلى على الحلقي، وقت أطول</li>
</ul>
</div>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">2️⃣ طريقة انتظار الوزن (Wait and Weight Method)</h3>
<div style="background: #1e3a5f10; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<p style="line-height: 1.8; margin-bottom: 0.5rem;"><strong>المبدأ:</strong> دورة واحدة بسائل القتل من البداية</p>
<ul style="list-style-type: circle; padding-right: 1.5rem; line-height: 2;">
<li>تحضير سائل القتل بالكثافة المطلوبة قبل بدء الضخ</li>
<li>ضخ سائل القتل وإخراج التدفق في دورة واحدة</li>
<li><strong>المميزات:</strong> ضغوط أقل على التكوين، وقت أقصر</li>
<li><strong>العيوب:</strong> تتطلب وقتاً لتحضير السائل، حسابات أكثر</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 حسابات التحكم في البئر</h2>

<div style="background: #10b98115; padding: 1rem; border-radius: 8px; margin: 1rem 0; border-right: 4px solid #10b981;">
<strong style="color: #10b981;">المعادلات الأساسية:</strong>
<p style="font-family: monospace; margin-top: 0.5rem; line-height: 2;">
كثافة سائل القتل = MW الأصلي + (SIDPP / 0.052 / TVD)<br/>
ضغط البدء الأولي (ICP) = SCR Pressure + SIDPP<br/>
ضغط البدء النهائي (FCP) = SCR Pressure × (KMW / OMW)
</p>
</div>

<div style="background: #dc262615; padding: 1rem; border-radius: 8px; margin: 1rem 0; border-right: 4px solid #dc2626;">
<strong style="color: #dc2626;">⚠️ نقاط حرجة:</strong>
<ul style="list-style-type: disc; padding-right: 1.5rem; margin-top: 0.5rem; line-height: 1.8;">
<li>الحفاظ على ثبات ضغط قاع البئر (BHP) طوال العملية</li>
<li>مراقبة ضغط الحلقي لتجنب تجاوز ضغط التكسير</li>
<li>السيطرة على معدل الضخ والخنق</li>
<li>التواصل المستمر بين جميع أفراد الطاقم</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>إجراء الإغلاق يتطلب سرعة ودقة في التنفيذ</li>
<li>طريقة الحفار: دورتان منفصلتان، أبسط لكن أطول</li>
<li>طريقة الانتظار: دورة واحدة، ضغوط أقل لكن تحتاج تحضيراً</li>
<li>الحفاظ على BHP ثابت هو المفتاح للسيطرة الناجحة</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'الإغلاق الصلب (Hard Shut-In)', definition: 'إغلاق البئر فوراً دون تأخير بعد اكتشاف التدفق' },
            { term: 'طريقة الحفار (Driller Method)', definition: 'طريقة قتل البئر بدورتين منفصلتين' },
            { term: 'SIDPP', definition: 'Shut-In Drill Pipe Pressure - ضغط أنابيب الحفر عند الإغلاق' },
            { term: 'SICP', definition: 'Shut-In Casing Pressure - ضغط الحلقي عند الإغلاق' },
          ],
          practiceQuestion: {
            question: 'كم دورة تتطلب طريقة الحفار (Driller Method) لقتل البئر؟',
            options: ['دورة واحدة', 'دورتان', 'ثلاث دورات', 'حسب حجم التدفق'],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Well Control - Procedures and Methods',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Well Control Procedures</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
When a kick occurs, specific procedures must be followed to control the well and prevent it from becoming a blowout. These procedures require continuous training and coordination among all crew members.
</p>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Shut-In Procedure</h2>

<div style="background: linear-gradient(135deg, #1e3a5f15, #f9731620); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #f97316;">
<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">📌 Hard Shut-In Steps</h3>
<ol style="padding-left: 1.5rem; line-height: 2;">
<li>Upon kick detection, stop pumps immediately</li>
<li>Raise kelly above rig floor</li>
<li>Close annular BOP or pipe rams</li>
<li>Ensure choke line is closed</li>
<li>Record Shut-In Drill Pipe Pressure (SIDPP) and Shut-In Casing Pressure (SICP)</li>
<li>Record pit gain</li>
</ol>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Kill Methods</h2>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">1️⃣ Driller's Method</h3>
<div style="background: #1e3a5f10; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<p style="line-height: 1.8; margin-bottom: 0.5rem;"><strong>Principle:</strong> Two separate circulations - first to remove kick, second to pump kill mud</p>
<ul style="list-style-type: circle; padding-left: 1.5rem; line-height: 2;">
<li><strong>First Circulation:</strong> Pump original mud to remove kick from well</li>
<li><strong>Second Circulation:</strong> Pump kill mud at required weight</li>
<li><strong>Advantages:</strong> Simple, no complex calculations required</li>
<li><strong>Disadvantages:</strong> Higher annular pressures, longer time</li>
</ul>
</div>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">2️⃣ Wait and Weight Method</h3>
<div style="background: #1e3a5f10; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<p style="line-height: 1.8; margin-bottom: 0.5rem;"><strong>Principle:</strong> Single circulation with kill mud from the start</p>
<ul style="list-style-type: circle; padding-left: 1.5rem; line-height: 2;">
<li>Prepare kill mud at required weight before pumping</li>
<li>Pump kill mud and remove kick in one circulation</li>
<li><strong>Advantages:</strong> Lower formation pressures, shorter time</li>
<li><strong>Disadvantages:</strong> Requires time to prepare mud, more calculations</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Well Control Calculations</h2>

<div style="background: #10b98115; padding: 1rem; border-radius: 8px; margin: 1rem 0; border-left: 4px solid #10b981;">
<strong style="color: #10b981;">Basic Equations:</strong>
<p style="font-family: monospace; margin-top: 0.5rem; line-height: 2;">
Kill Mud Weight = Original MW + (SIDPP / 0.052 / TVD)<br/>
Initial Circulating Pressure (ICP) = SCR Pressure + SIDPP<br/>
Final Circulating Pressure (FCP) = SCR Pressure × (KMW / OMW)
</p>
</div>

<div style="background: #dc262615; padding: 1rem; border-radius: 8px; margin: 1rem 0; border-left: 4px solid #dc2626;">
<strong style="color: #dc2626;">⚠️ Critical Points:</strong>
<ul style="list-style-type: disc; padding-left: 1.5rem; margin-top: 0.5rem; line-height: 1.8;">
<li>Maintain constant Bottom Hole Pressure (BHP) throughout</li>
<li>Monitor annular pressure to avoid exceeding fracture pressure</li>
<li>Control pump rate and choke</li>
<li>Continuous communication among all crew members</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>Shut-in procedure requires speed and precision</li>
<li>Driller's Method: two circulations, simpler but longer</li>
<li>Wait and Weight: one circulation, lower pressures but needs preparation</li>
<li>Maintaining constant BHP is key to successful control</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Hard Shut-In', definition: 'Immediate well closure without delay after kick detection' },
            { term: 'Driller Method', definition: 'Kill method using two separate circulations' },
            { term: 'SIDPP', definition: 'Shut-In Drill Pipe Pressure - pressure at drill pipe when shut in' },
            { term: 'SICP', definition: 'Shut-In Casing Pressure - annular pressure when shut in' },
          ],
          practiceQuestion: {
            question: 'How many circulations does the Driller Method require to kill the well?',
            options: ['One circulation', 'Two circulations', 'Three circulations', 'Depends on kick size'],
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
          title: 'اختبار الأسبوع - أنظمة منع الانفجار',
          explanation: 'اختبر معلوماتك حول أنظمة منع الانفجار واختباراتها',
          keyTerms: [],
        },
        en: {
          title: 'Weekly Quiz - BOP Systems',
          explanation: 'Test your knowledge about BOP systems and testing',
          keyTerms: [],
        },
      },
      quiz: {
        ar: [
          { question: 'ما هو الفرق بين التدفق (Kick) والانفجار (Blowout)؟', options: ['لا يوجد فرق', 'التدفق يمكن السيطرة عليه', 'الانفجار أقل خطورة', 'التدفق في البحر فقط'], correctAnswer: 1 },
          { question: 'أي نوع من الكباسات يُستخدم لقطع أنابيب الحفر؟', options: ['كباسات الأنابيب', 'كباسات الإغلاق الكامل', 'كباسات القص', 'المانع الحلقي'], correctAnswer: 2 },
          { question: 'ما هو الحد الأقصى لزمن إغلاق المانع الحلقي؟', options: ['15 ثانية', '30 ثانية', '45 ثانية', '60 ثانية'], correctAnswer: 1 },
          { question: 'كم هي فترة اختبار الضغط الكامل لـ BOP؟', options: ['يومياً', 'كل 7 أيام', 'كل 14 يوم', 'شهرياً'], correctAnswer: 2 },
          { question: 'ما هو ضغط الاختبار المنخفض لـ BOP؟', options: ['50-100 psi', '200-300 psi', '500-1000 psi', '1500-2000 psi'], correctAnswer: 1 },
          { question: 'أي طريقة قتل تتطلب دورتين منفصلتين؟', options: ['Wait and Weight', 'طريقة الحفار', 'الطريقة المحورية', 'طريقة الخنق'], correctAnswer: 1 },
          { question: 'ما هي وظيفة المجمعات (Accumulators)؟', options: ['تبريد السائل', 'تخزين الطاقة الهيدروليكية', 'قياس الضغط', 'تصفية السائل'], correctAnswer: 1 },
          { question: 'أي علامة تدل على حدوث تدفق (Kick)؟', options: ['انخفاض حجم الحوض', 'زيادة حجم الحوض', 'ثبات الضغط', 'توقف الدوران'], correctAnswer: 1 },
          { question: 'ما هو SIDPP؟', options: ['ضغط سائل الحفر', 'ضغط أنابيب الحفر عند الإغلاق', 'ضغط التكوين', 'ضغط المضخة'], correctAnswer: 1 },
          { question: 'لماذا يُستخدم الماء وليس الهواء في اختبار BOP؟', options: ['أرخص', 'أسهل', 'أكثر أماناً', 'متوفر أكثر'], correctAnswer: 2 },
        ],
        en: [
          { question: 'What is the difference between a kick and a blowout?', options: ['No difference', 'A kick can be controlled', 'A blowout is less dangerous', 'A kick only occurs offshore'], correctAnswer: 1 },
          { question: 'Which type of rams is used to cut drill pipe?', options: ['Pipe Rams', 'Blind Rams', 'Shear Rams', 'Annular BOP'], correctAnswer: 2 },
          { question: 'What is the maximum closing time for annular BOP?', options: ['15 seconds', '30 seconds', '45 seconds', '60 seconds'], correctAnswer: 1 },
          { question: 'How often is full BOP pressure test required?', options: ['Daily', 'Every 7 days', 'Every 14 days', 'Monthly'], correctAnswer: 2 },
          { question: 'What is the low pressure test value for BOP?', options: ['50-100 psi', '200-300 psi', '500-1000 psi', '1500-2000 psi'], correctAnswer: 1 },
          { question: 'Which kill method requires two separate circulations?', options: ['Wait and Weight', 'Driller Method', 'Volumetric Method', 'Choke Method'], correctAnswer: 1 },
          { question: 'What is the function of accumulators?', options: ['Cool fluid', 'Store hydraulic energy', 'Measure pressure', 'Filter fluid'], correctAnswer: 1 },
          { question: 'Which sign indicates a kick?', options: ['Pit volume decrease', 'Pit gain', 'Stable pressure', 'Rotation stop'], correctAnswer: 1 },
          { question: 'What is SIDPP?', options: ['Drilling fluid pressure', 'Shut-In Drill Pipe Pressure', 'Formation pressure', 'Pump pressure'], correctAnswer: 1 },
          { question: 'Why is water used instead of air for BOP testing?', options: ['Cheaper', 'Easier', 'Safer', 'More available'], correctAnswer: 2 },
        ],
      },
    },
    {
      day: 7,
      type: 'project',
      content: {
        ar: {
          title: 'مشروع أنظمة منع الانفجار',
          explanation: 'طبق ما تعلمته في هذا المشروع التطبيقي',
          keyTerms: [],
        },
        en: {
          title: 'BOP Systems Project',
          explanation: 'Apply what you learned in this practical project',
          keyTerms: [],
        },
      },
      project: {
        ar: {
          title: 'تحليل سيناريو تحكم في البئر',
          description: 'في هذا المشروع، ستقوم بتحليل سيناريو تدفق (Kick) وحساب المعاملات اللازمة للسيطرة على البئر.',
          instructions: [
            'البيانات المعطاة: TVD = 10,000 ft، كثافة السائل الأصلي = 10.5 ppg، SIDPP = 300 psi، SICP = 450 psi، زيادة حجم الحوض = 20 bbl',
            'احسب كثافة سائل القتل (Kill Mud Weight) باستخدام المعادلة المناسبة',
            'حدد نوع التدفق المحتمل (غاز، نفط، ماء) بناءً على الفرق بين SIDPP و SICP',
            'صف خطوات الإغلاق الصلب (Hard Shut-In) بالترتيب الصحيح',
            'قارن بين طريقة الحفار وطريقة الانتظار واختر الأنسب لهذا السيناريو مع التبرير',
          ],
          submissionType: 'text',
        },
        en: {
          title: 'Well Control Scenario Analysis',
          description: 'In this project, you will analyze a kick scenario and calculate the parameters needed to control the well.',
          instructions: [
            'Given Data: TVD = 10,000 ft, Original mud weight = 10.5 ppg, SIDPP = 300 psi, SICP = 450 psi, Pit gain = 20 bbl',
            'Calculate Kill Mud Weight using the appropriate equation',
            'Determine the probable kick type (gas, oil, water) based on the difference between SIDPP and SICP',
            'Describe the Hard Shut-In steps in correct order',
            'Compare Driller Method and Wait & Weight Method and choose the most suitable for this scenario with justification',
          ],
          submissionType: 'text',
        },
      },
    },
  ],
};
