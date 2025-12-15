import { WeeklyLesson } from '../weeklyContent';

export const hoistingAdvancedLesson: WeeklyLesson = {
  lessonId: 'hoisting-advanced',
  days: [
    {
      day: 1,
      type: 'learning',
      content: {
        ar: {
          title: 'نظام الرفع المتقدم - مقدمة ومكونات النظام',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 مقدمة في نظام الرفع (Hoisting System)</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
نظام الرفع هو أحد أهم الأنظمة الرئيسية في جهاز الحفر، ويُعتبر العمود الفقري لعمليات الحفر. يتولى هذا النظام مهمة رفع وإنزال سلسلة الحفر (Drill String) وأنابيب التغليف (Casing) والمعدات الأخرى داخل وخارج البئر. تعتمد كفاءة عمليات الحفر بشكل كبير على أداء نظام الرفع، حيث أن أي خلل فيه قد يؤدي إلى توقف العمليات وتكاليف باهظة.
</p>

<div style="background: linear-gradient(135deg, #1e3a5f15, #f9731620); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #f97316;">
<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">📌 أهمية نظام الرفع</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>رفع وإنزال سلسلة الحفر أثناء عمليات الحفر والرحلات (Tripping)</li>
<li>التحكم في الوزن على رأس الحفر (Weight on Bit - WOB)</li>
<li>إنزال وسحب أنابيب التغليف والإنتاج</li>
<li>عمليات الإنقاذ والصيد (Fishing Operations)</li>
<li>معالجة حالات الالتصاق (Stuck Pipe)</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 المكونات الرئيسية لنظام الرفع</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
يتكون نظام الرفع من عدة مكونات متكاملة تعمل معاً لتحقيق عمليات الرفع والإنزال بكفاءة وأمان:
</p>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">1️⃣ البكرة التاجية (Crown Block)</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
البكرة التاجية هي مجموعة من البكرات الثابتة المركبة في قمة برج الحفر (Derrick). تتكون من عدة بكرات (Sheaves) مرتبة بشكل أفقي، ويمر عبرها كابل الحفر. تتميز بأنها ثابتة لا تتحرك، وتعمل كنقطة ارتكاز علوية لنظام البكرات.
</p>

<div style="background: #1e3a5f10; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<strong style="color: #1e3a5f;">مواصفات البكرة التاجية:</strong>
<ul style="list-style-type: circle; padding-right: 1.5rem; margin-top: 0.5rem; line-height: 1.8;">
<li>عدد البكرات: عادة من 4 إلى 8 بكرات حسب حجم الجهاز</li>
<li>قطر البكرة: يتراوح من 36 إلى 60 بوصة</li>
<li>مادة الصنع: فولاذ عالي المقاومة مع محامل كروية (Ball Bearings)</li>
<li>السعة: تُصنف حسب الحمولة القصوى (من 350 إلى 1000+ طن)</li>
</ul>
</div>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">2️⃣ البكرة المتنقلة (Traveling Block)</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
البكرة المتنقلة هي مجموعة البكرات المتحركة التي تتصل بالخطاف وتتحرك عمودياً داخل برج الحفر. تتكون من عدة بكرات مشابهة للبكرة التاجية، وتعمل مع البكرة التاجية لتشكيل نظام البكرات المركب الذي يضاعف القوة الميكانيكية.
</p>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">3️⃣ الخطاف (Hook)</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
الخطاف هو الجزء الذي يتصل مباشرة بالبكرة المتنقلة من الأعلى وبالمحور الدوار (Swivel) أو الحمل من الأسفل. يحتوي على آلية قفل أمان لمنع السقوط العرضي للحمل، ويتم تصنيعه من الفولاذ المقوى ليتحمل الأحمال الثقيلة.
</p>

<div style="background: #dc262615; padding: 1rem; border-radius: 8px; margin: 1rem 0; border-right: 4px solid #dc2626;">
<strong style="color: #dc2626;">⚠️ تحذير أمان:</strong>
<p style="margin-top: 0.5rem; line-height: 1.8;">
يجب فحص الخطاف بشكل دوري للتأكد من سلامة آلية القفل وعدم وجود تشققات أو تآكل. أي خلل في الخطاف قد يؤدي إلى سقوط الحمل وحوادث كارثية.
</p>
</div>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">4️⃣ كابل الحفر (Drilling Line / Wire Rope)</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
كابل الحفر هو الحبل السلكي الذي يمر عبر البكرات ويربط بين رافعة الحفر والحمل. يتكون من عدة خيوط (Strands) ملفوفة حول قلب مركزي، ويُصنع من الفولاذ عالي الشد.
</p>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">5️⃣ رافعة الحفر (Drawworks)</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
رافعة الحفر هي قلب نظام الرفع، وهي عبارة عن ونش كبير يحتوي على بكرة (Drum) يُلف عليها كابل الحفر. تُزود بمحركات قوية وأنظمة فرامل للتحكم في سرعة الرفع والإنزال.
</p>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 مبدأ عمل نظام الرفع</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
يعمل نظام الرفع على مبدأ <strong>نظام البكرات المركب (Block and Tackle System)</strong>، حيث يمر كابل الحفر بين البكرة التاجية والبكرة المتنقلة عدة مرات لتضاعف القوة. كلما زاد عدد خطوط الكابل (Lines)، زادت الميزة الميكانيكية وقلت القوة المطلوبة لرفع الحمل.
</p>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>نظام الرفع مسؤول عن رفع وإنزال جميع المعدات في البئر</li>
<li>المكونات الرئيسية: البكرة التاجية، البكرة المتنقلة، الخطاف، كابل الحفر، ورافعة الحفر</li>
<li>يعمل النظام على مبدأ البكرات المركب لمضاعفة القوة</li>
<li>السلامة والصيانة الدورية ضرورية لمنع الحوادث</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'البكرة التاجية (Crown Block)', definition: 'مجموعة البكرات الثابتة في قمة برج الحفر التي يمر عبرها كابل الحفر' },
            { term: 'البكرة المتنقلة (Traveling Block)', definition: 'مجموعة البكرات المتحركة التي تتصل بالخطاف وتتحرك عمودياً' },
            { term: 'الخطاف (Hook)', definition: 'الجزء الذي يتصل بالبكرة المتنقلة ويحمل المحور الدوار أو الحمل' },
            { term: 'نظام البكرات المركب (Block and Tackle)', definition: 'نظام ميكانيكي يستخدم بكرات متعددة لمضاعفة القوة الميكانيكية' },
          ],
          practiceQuestion: {
            question: 'ما هو المكون الثابت في نظام الرفع الموجود في قمة برج الحفر؟',
            options: ['البكرة المتنقلة', 'البكرة التاجية', 'الخطاف', 'رافعة الحفر'],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Advanced Hoisting System - Introduction and Components',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Introduction to the Hoisting System</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
The hoisting system is one of the most critical systems in a drilling rig, considered the backbone of drilling operations. This system is responsible for raising and lowering the drill string, casing, and other equipment into and out of the wellbore. The efficiency of drilling operations depends heavily on the hoisting system's performance, as any malfunction can lead to operational downtime and significant costs.
</p>

<div style="background: linear-gradient(135deg, #1e3a5f15, #f9731620); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #f97316;">
<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">📌 Importance of the Hoisting System</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>Raising and lowering drill string during drilling and tripping operations</li>
<li>Controlling Weight on Bit (WOB)</li>
<li>Running and pulling casing and production tubing</li>
<li>Fishing operations</li>
<li>Handling stuck pipe situations</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Main Components of the Hoisting System</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
The hoisting system consists of several integrated components that work together to achieve efficient and safe hoisting operations:
</p>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">1️⃣ Crown Block</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
The crown block is a set of stationary sheaves mounted at the top of the derrick. It consists of multiple sheaves arranged horizontally through which the drilling line passes. It is characterized by being fixed and serves as the upper pivot point for the pulley system.
</p>

<div style="background: #1e3a5f10; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<strong style="color: #1e3a5f;">Crown Block Specifications:</strong>
<ul style="list-style-type: circle; padding-left: 1.5rem; margin-top: 0.5rem; line-height: 1.8;">
<li>Number of sheaves: Usually 4 to 8 depending on rig size</li>
<li>Sheave diameter: Ranges from 36 to 60 inches</li>
<li>Material: High-strength steel with ball bearings</li>
<li>Capacity: Rated by maximum load (350 to 1000+ tons)</li>
</ul>
</div>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">2️⃣ Traveling Block</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
The traveling block is the moving sheave assembly that connects to the hook and moves vertically within the derrick. It consists of multiple sheaves similar to the crown block and works with it to form a compound pulley system that multiplies mechanical force.
</p>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">3️⃣ Hook</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
The hook is the component that connects directly to the traveling block from above and to the swivel or load from below. It contains a safety latch mechanism to prevent accidental load drops and is manufactured from hardened steel to withstand heavy loads.
</p>

<div style="background: #dc262615; padding: 1rem; border-radius: 8px; margin: 1rem 0; border-left: 4px solid #dc2626;">
<strong style="color: #dc2626;">⚠️ Safety Warning:</strong>
<p style="margin-top: 0.5rem; line-height: 1.8;">
The hook must be inspected regularly to ensure the latch mechanism is functioning and there are no cracks or corrosion. Any defect in the hook can lead to load drops and catastrophic accidents.
</p>
</div>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">4️⃣ Drilling Line (Wire Rope)</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
The drilling line is the wire rope that passes through the sheaves and connects the drawworks to the load. It consists of multiple strands wrapped around a central core and is made of high-tensile steel.
</p>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">5️⃣ Drawworks</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
The drawworks is the heart of the hoisting system, essentially a large winch containing a drum around which the drilling line is wound. It is equipped with powerful motors and brake systems to control hoisting and lowering speeds.
</p>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Operating Principle</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
The hoisting system operates on the principle of a <strong>Block and Tackle System</strong>, where the drilling line passes between the crown block and traveling block multiple times to multiply force. The more lines strung, the greater the mechanical advantage and the less force required to lift the load.
</p>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>The hoisting system is responsible for raising and lowering all equipment in the well</li>
<li>Main components: Crown block, traveling block, hook, drilling line, and drawworks</li>
<li>The system operates on the block and tackle principle to multiply force</li>
<li>Safety and regular maintenance are essential to prevent accidents</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Crown Block', definition: 'The stationary sheave assembly at the top of the derrick through which the drilling line passes' },
            { term: 'Traveling Block', definition: 'The moving sheave assembly that connects to the hook and moves vertically' },
            { term: 'Hook', definition: 'The component connecting the traveling block to the swivel or load below' },
            { term: 'Block and Tackle', definition: 'A mechanical system using multiple pulleys to multiply mechanical force' },
          ],
          practiceQuestion: {
            question: 'What is the stationary component in the hoisting system located at the top of the derrick?',
            options: ['Traveling Block', 'Crown Block', 'Hook', 'Drawworks'],
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
          title: 'كابل الحفر - الأنواع والمواصفات',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 كابل الحفر (Drilling Line / Wire Rope)</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
كابل الحفر هو العنصر الأساسي الذي ينقل القوة في نظام الرفع. يتكون من أسلاك فولاذية مجدولة بطريقة هندسية دقيقة لتوفير أقصى قوة شد مع المرونة اللازمة للالتفاف حول البكرات. يُعتبر اختيار الكابل المناسب أمراً حيوياً لسلامة العمليات.
</p>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 تركيب كابل الحفر</h2>

<div style="background: linear-gradient(135deg, #1e3a5f15, #f9731620); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #f97316;">
<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">📌 مكونات الكابل</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li><strong>الأسلاك (Wires):</strong> وحدات البناء الأساسية، مصنوعة من الفولاذ عالي الكربون</li>
<li><strong>الخيوط (Strands):</strong> مجموعة من الأسلاك ملفوفة حلزونياً</li>
<li><strong>القلب (Core):</strong> المحور المركزي الذي تُلف حوله الخيوط - قد يكون من الألياف أو الفولاذ</li>
</ul>
</div>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">تصنيف الكابلات</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
يُرمز للكابل بأرقام تدل على تركيبته، مثل <strong>6×19</strong> حيث:
</p>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2; margin-bottom: 1rem;">
<li>الرقم الأول (6): عدد الخيوط (Strands)</li>
<li>الرقم الثاني (19): عدد الأسلاك في كل خيط (Wires per Strand)</li>
</ul>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 أنواع كابلات الحفر</h2>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">1️⃣ كابل 6×19 Class</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
يحتوي على 6 خيوط، كل خيط يتكون من 19-26 سلك. يتميز بمقاومة عالية للتآكل لكن مرونة أقل. مناسب للأحمال الثقيلة مع انحناءات قليلة.
</p>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">2️⃣ كابل 6×37 Class</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
يحتوي على أسلاك أكثر وأرفع، مما يوفر مرونة أعلى. الأكثر استخداماً في عمليات الحفر لأنه يتحمل الانحناءات المتكررة حول البكرات.
</p>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 مصطلحات كابل الحفر الأساسية</h2>

<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #1e3a5f; font-size: 1.1rem; font-weight: bold; margin-bottom: 1rem;">خطوط الكابل في نظام الرفع:</h3>

<p style="margin-bottom: 1rem; line-height: 1.8;">
<strong style="color: #f97316;">الخط السريع (Fast Line):</strong> الجزء من الكابل الممتد من بكرة رافعة الحفر إلى البكرة التاجية. يتحرك بسرعة عند تشغيل الرافعة ويتعرض لأعلى إجهاد.
</p>

<p style="margin-bottom: 1rem; line-height: 1.8;">
<strong style="color: #f97316;">الخط الميت (Dead Line):</strong> الجزء من الكابل الممتد من البكرة التاجية إلى نقطة التثبيت (Deadline Anchor). هذا الخط ثابت ولا يتحرك أثناء التشغيل.
</p>

<p style="margin-bottom: 1rem; line-height: 1.8;">
<strong style="color: #f97316;">خطوط السلسلة (String up Lines):</strong> الخطوط الممتدة بين البكرة التاجية والبكرة المتنقلة. عددها يحدد الميزة الميكانيكية للنظام.
</p>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 حساب طول الكابل المطلوب</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
لحساب الطول الإجمالي للكابل المطلوب، نستخدم المعادلة التالية:
</p>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; text-align: center;">
<p style="font-size: 1.2rem; font-weight: bold; color: #1e3a5f; direction: ltr;">
L = n × H + Drum Reserve + Dead Line
</p>
<p style="margin-top: 1rem; line-height: 1.8;">
حيث: n = عدد الخطوط، H = ارتفاع الرفع
</p>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 عوامل تآكل الكابل</h2>

<div style="background: #dc262615; padding: 1rem; border-radius: 8px; margin: 1rem 0; border-right: 4px solid #dc2626;">
<strong style="color: #dc2626;">⚠️ أسباب تلف الكابل:</strong>
<ul style="list-style-type: disc; padding-right: 1.5rem; margin-top: 0.5rem; line-height: 2;">
<li><strong>التآكل (Abrasion):</strong> الاحتكاك مع البكرات والأسطح</li>
<li><strong>إجهاد الانحناء (Bending Fatigue):</strong> الانحناء المتكرر حول البكرات</li>
<li><strong>الحمل الزائد (Overloading):</strong> تجاوز حد الشد المسموح</li>
<li><strong>التآكل الكيميائي (Corrosion):</strong> التعرض للرطوبة والمواد الكيميائية</li>
<li><strong>التلف الميكانيكي:</strong> الالتواء أو التشابك أو التعقد (Kinking)</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>كابل الحفر يتكون من أسلاك وخيوط ملفوفة حول قلب مركزي</li>
<li>أشهر أنواع الكابلات: 6×19 و 6×37</li>
<li>يجب فهم الفرق بين Fast Line و Dead Line</li>
<li>الصيانة الدورية وفحص الكابل ضروري لمنع الحوادث</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'الخط السريع (Fast Line)', definition: 'الجزء من الكابل الممتد من رافعة الحفر للبكرة التاجية، يتحرك بسرعة عند التشغيل' },
            { term: 'الخط الميت (Dead Line)', definition: 'الجزء الثابت من الكابل الممتد من البكرة التاجية لنقطة التثبيت' },
            { term: 'إجهاد الانحناء (Bending Fatigue)', definition: 'تلف الكابل الناتج عن الانحناء المتكرر حول البكرات' },
            { term: 'مرساة الخط الميت (Deadline Anchor)', definition: 'نقطة تثبيت الخط الميت، وتستخدم لقياس وزن الحمل' },
          ],
          practiceQuestion: {
            question: 'أي جزء من كابل الحفر يتعرض لأعلى إجهاد ويتحرك بسرعة عند تشغيل الرافعة؟',
            options: ['الخط الميت', 'الخط السريع', 'القلب المركزي', 'خطوط السلسلة'],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Drilling Line - Types and Specifications',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Drilling Line (Wire Rope)</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
The drilling line is the essential element that transmits force in the hoisting system. It consists of steel wires braided in a precise engineering pattern to provide maximum tensile strength with the flexibility needed to wrap around sheaves. Selecting the appropriate wire rope is vital for operational safety.
</p>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Wire Rope Construction</h2>

<div style="background: linear-gradient(135deg, #1e3a5f15, #f9731620); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #f97316;">
<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">📌 Rope Components</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li><strong>Wires:</strong> Basic building units made of high-carbon steel</li>
<li><strong>Strands:</strong> Groups of wires wound helically together</li>
<li><strong>Core:</strong> Central axis around which strands are wrapped - can be fiber or steel</li>
</ul>
</div>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">Wire Rope Classification</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
Wire ropes are designated by numbers indicating their construction, such as <strong>6×19</strong> where:
</p>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2; margin-bottom: 1rem;">
<li>First number (6): Number of strands</li>
<li>Second number (19): Number of wires per strand</li>
</ul>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Types of Drilling Wire Ropes</h2>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">1️⃣ 6×19 Class</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
Contains 6 strands with 19-26 wires each. Features high abrasion resistance but lower flexibility. Suitable for heavy loads with few bends.
</p>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">2️⃣ 6×37 Class</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
Contains more and finer wires, providing higher flexibility. Most commonly used in drilling operations as it withstands repeated bending around sheaves.
</p>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Essential Drilling Line Terminology</h2>

<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #1e3a5f; font-size: 1.1rem; font-weight: bold; margin-bottom: 1rem;">Wire Rope Lines in the Hoisting System:</h3>

<p style="margin-bottom: 1rem; line-height: 1.8;">
<strong style="color: #f97316;">Fast Line:</strong> The section of wire rope extending from the drawworks drum to the crown block. It moves rapidly when the drawworks operates and experiences the highest stress.
</p>

<p style="margin-bottom: 1rem; line-height: 1.8;">
<strong style="color: #f97316;">Dead Line:</strong> The section extending from the crown block to the anchor point. This line is stationary and does not move during operation.
</p>

<p style="margin-bottom: 1rem; line-height: 1.8;">
<strong style="color: #f97316;">String up Lines:</strong> The lines running between the crown block and traveling block. Their number determines the mechanical advantage.
</p>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Calculating Required Wire Rope Length</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
To calculate the total required wire rope length, use the following formula:
</p>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; text-align: center;">
<p style="font-size: 1.2rem; font-weight: bold; color: #1e3a5f;">
L = n × H + Drum Reserve + Dead Line
</p>
<p style="margin-top: 1rem; line-height: 1.8;">
Where: n = number of lines, H = hoisting height
</p>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Wire Rope Wear Factors</h2>

<div style="background: #dc262615; padding: 1rem; border-radius: 8px; margin: 1rem 0; border-left: 4px solid #dc2626;">
<strong style="color: #dc2626;">⚠️ Causes of Wire Rope Damage:</strong>
<ul style="list-style-type: disc; padding-left: 1.5rem; margin-top: 0.5rem; line-height: 2;">
<li><strong>Abrasion:</strong> Friction with sheaves and surfaces</li>
<li><strong>Bending Fatigue:</strong> Repeated bending around sheaves</li>
<li><strong>Overloading:</strong> Exceeding allowable tensile limits</li>
<li><strong>Corrosion:</strong> Exposure to moisture and chemicals</li>
<li><strong>Mechanical Damage:</strong> Kinking, bird-caging, or crushing</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>Drilling wire rope consists of wires and strands wound around a central core</li>
<li>Common wire rope types: 6×19 and 6×37</li>
<li>Understanding Fast Line vs Dead Line is essential</li>
<li>Regular maintenance and inspection prevents accidents</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Fast Line', definition: 'The wire rope section from drawworks to crown block that moves rapidly during operation' },
            { term: 'Dead Line', definition: 'The stationary wire rope section from crown block to the anchor point' },
            { term: 'Bending Fatigue', definition: 'Wire rope damage resulting from repeated bending around sheaves' },
            { term: 'Deadline Anchor', definition: 'The dead line attachment point, also used for measuring hook load' },
          ],
          practiceQuestion: {
            question: 'Which part of the drilling line experiences the highest stress and moves rapidly when the drawworks operates?',
            options: ['Dead Line', 'Fast Line', 'Core', 'String up Lines'],
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
          title: 'رافعة الحفر (Drawworks)',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 رافعة الحفر (Drawworks)</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
رافعة الحفر هي قلب نظام الرفع ومحركه الأساسي. وهي عبارة عن ونش ضخم يوفر القوة اللازمة لرفع وإنزال سلسلة الحفر والمعدات الأخرى. تُعتبر من أكبر وأثقل المعدات على سطح الجهاز، وتتطلب قوة هائلة للتعامل مع الأحمال الثقيلة في الآبار العميقة.
</p>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 المكونات الرئيسية لرافعة الحفر</h2>

<div style="background: linear-gradient(135deg, #1e3a5f15, #f9731620); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #f97316;">
<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">📌 المكونات الأساسية</h3>

<p style="margin-bottom: 1rem; line-height: 1.8;">
<strong>1. بكرة الكابل (Drum):</strong> أسطوانة كبيرة يُلف عليها كابل الحفر. تحتوي على أخاديد (Grooves) لتنظيم لف الكابل ومنع تشابكه.
</p>

<p style="margin-bottom: 1rem; line-height: 1.8;">
<strong>2. نظام المحركات (Power System):</strong> يوفر القوة لتدوير البكرة. قد يكون:
</p>
<ul style="list-style-type: circle; padding-right: 1.5rem; line-height: 1.8; margin-bottom: 1rem;">
<li>محركات ديزل-ميكانيكية (في الأجهزة القديمة)</li>
<li>محركات كهربائية DC أو AC (في الأجهزة الحديثة)</li>
</ul>

<p style="margin-bottom: 1rem; line-height: 1.8;">
<strong>3. صندوق التروس (Transmission / Gear Box):</strong> ينقل القوة من المحركات للبكرة مع تغيير نسب السرعة والعزم.
</p>

<p style="margin-bottom: 1rem; line-height: 1.8;">
<strong>4. نظام الفرامل (Brake System):</strong> للتحكم في سرعة الإنزال وإيقاف الحمل.
</p>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 أنظمة الفرامل في رافعة الحفر</h2>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">1️⃣ الفرامل الرئيسية (Main Brake / Band Brake)</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
فرامل احتكاكية تتكون من شريط معدني يلتف حول طارة (Brake Rim) متصلة بالبكرة. يتم التحكم بها يدوياً عبر ذراع الفرامل (Brake Lever). تُستخدم للتحكم في سرعة الإنزال وإيقاف الحمل.
</p>

<div style="background: #1e3a5f10; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<strong style="color: #1e3a5f;">مكونات الفرامل الرئيسية:</strong>
<ul style="list-style-type: circle; padding-right: 1.5rem; margin-top: 0.5rem; line-height: 1.8;">
<li>طارة الفرامل (Brake Rim)</li>
<li>شريط الفرامل (Brake Band)</li>
<li>بطانات الاحتكاك (Brake Blocks / Linings)</li>
<li>نظام التبريد بالماء (Water Cooling System)</li>
</ul>
</div>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">2️⃣ الفرامل المساعدة (Auxiliary Brake)</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
تساعد الفرامل الرئيسية في التحكم بالأحمال الثقيلة وتمنع ارتفاع حرارة الفرامل الرئيسية. الأنواع الشائعة:
</p>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2; margin-bottom: 1rem;">
<li><strong>الفرامل الكهرومغناطيسية (Electromagnetic Brake / Eddy Current Brake):</strong> تستخدم المجال المغناطيسي لإبطاء الدوران</li>
<li><strong>الفرامل الهيدروديناميكية (Hydrodynamic Brake):</strong> تستخدم مقاومة السوائل لإبطاء الدوران</li>
</ul>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">3️⃣ فرامل الطوارئ (Emergency Brake)</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
فرامل أمان تعمل تلقائياً عند فشل الفرامل الرئيسية أو انقطاع الطاقة. عادة من نوع القرص أو القابض.
</p>

<div style="background: #dc262615; padding: 1rem; border-radius: 8px; margin: 1rem 0; border-right: 4px solid #dc2626;">
<strong style="color: #dc2626;">⚠️ تحذير أمان:</strong>
<p style="margin-top: 0.5rem; line-height: 1.8;">
يجب فحص جميع أنظمة الفرامل قبل كل وردية عمل. فشل الفرامل قد يؤدي إلى سقوط الحمل بسرعة خطيرة وحوادث مميتة.
</p>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 متطلبات القوة لرافعة الحفر</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
تُصنف رافعات الحفر حسب:
</p>

<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li><strong>قدرة الرفع (Hoisting Capacity):</strong> الحمل الأقصى الذي يمكن رفعه (بالطن)</li>
<li><strong>قدرة المحرك (Input Horsepower):</strong> القوة المتاحة للتشغيل (بالحصان)</li>
<li><strong>سرعة الخط السريع (Fast Line Speed):</strong> سرعة سحب الكابل (قدم/دقيقة)</li>
<li><strong>سعة البكرة (Drum Capacity):</strong> طول الكابل الذي يمكن لفه</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 تشغيل رافعة الحفر</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
يتحكم حفار البئر (Driller) في رافعة الحفر من خلال لوحة التحكم التي تشمل:
</p>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2; margin-bottom: 1rem;">
<li>ذراع الخانق (Throttle) للتحكم في سرعة المحرك</li>
<li>ذراع الفرامل للتحكم في السرعة والإيقاف</li>
<li>مؤشرات الوزن والعمق والسرعة</li>
</ul>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>رافعة الحفر هي قلب نظام الرفع وتوفر القوة لجميع عمليات الرفع والإنزال</li>
<li>تتكون من بكرة ومحركات وصندوق تروس وأنظمة فرامل متعددة</li>
<li>أنظمة الفرامل الثلاثة (رئيسية، مساعدة، طوارئ) ضرورية للسلامة</li>
<li>تُصنف حسب قدرة الرفع وقوة المحرك وسعة البكرة</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'بكرة الكابل (Drum)', definition: 'الأسطوانة التي يُلف عليها كابل الحفر في رافعة الحفر' },
            { term: 'الفرامل الرئيسية (Band Brake)', definition: 'فرامل احتكاكية تتكون من شريط يلتف حول طارة للتحكم في سرعة الإنزال' },
            { term: 'الفرامل الكهرومغناطيسية (Eddy Current Brake)', definition: 'فرامل مساعدة تستخدم المجال المغناطيسي لإبطاء الدوران' },
            { term: 'قدرة الرفع (Hoisting Capacity)', definition: 'الحمل الأقصى الذي يمكن لرافعة الحفر رفعه بالطن' },
          ],
          practiceQuestion: {
            question: 'ما نوع الفرامل التي تعمل تلقائياً عند فشل الفرامل الرئيسية أو انقطاع الطاقة؟',
            options: ['الفرامل الرئيسية', 'الفرامل الكهرومغناطيسية', 'فرامل الطوارئ', 'الفرامل الهيدروديناميكية'],
            correctAnswer: 2,
          },
        },
        en: {
          title: 'Drawworks',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Drawworks</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
The drawworks is the heart and primary driver of the hoisting system. It is a massive winch that provides the power needed to raise and lower the drill string and other equipment. It is one of the largest and heaviest pieces of equipment on the rig floor, requiring tremendous power to handle heavy loads in deep wells.
</p>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Main Components of the Drawworks</h2>

<div style="background: linear-gradient(135deg, #1e3a5f15, #f9731620); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #f97316;">
<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">📌 Essential Components</h3>

<p style="margin-bottom: 1rem; line-height: 1.8;">
<strong>1. Drum:</strong> A large cylinder around which the drilling line is wound. It has grooves to organize the wire rope and prevent tangling.
</p>

<p style="margin-bottom: 1rem; line-height: 1.8;">
<strong>2. Power System:</strong> Provides power to rotate the drum. Can be:
</p>
<ul style="list-style-type: circle; padding-left: 1.5rem; line-height: 1.8; margin-bottom: 1rem;">
<li>Diesel-mechanical engines (in older rigs)</li>
<li>DC or AC electric motors (in modern rigs)</li>
</ul>

<p style="margin-bottom: 1rem; line-height: 1.8;">
<strong>3. Transmission / Gear Box:</strong> Transfers power from engines to the drum while changing speed and torque ratios.
</p>

<p style="margin-bottom: 1rem; line-height: 1.8;">
<strong>4. Brake System:</strong> Controls lowering speed and stops the load.
</p>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Drawworks Brake Systems</h2>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">1️⃣ Main Brake (Band Brake)</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
A friction brake consisting of a metal band wrapped around a brake rim connected to the drum. Controlled manually via the brake lever. Used to control lowering speed and stop the load.
</p>

<div style="background: #1e3a5f10; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<strong style="color: #1e3a5f;">Main Brake Components:</strong>
<ul style="list-style-type: circle; padding-left: 1.5rem; margin-top: 0.5rem; line-height: 1.8;">
<li>Brake Rim</li>
<li>Brake Band</li>
<li>Brake Blocks / Linings</li>
<li>Water Cooling System</li>
</ul>
</div>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">2️⃣ Auxiliary Brake</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
Assists the main brake in controlling heavy loads and prevents main brake overheating. Common types:
</p>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2; margin-bottom: 1rem;">
<li><strong>Electromagnetic Brake (Eddy Current Brake):</strong> Uses magnetic field to slow rotation</li>
<li><strong>Hydrodynamic Brake:</strong> Uses fluid resistance to slow rotation</li>
</ul>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">3️⃣ Emergency Brake</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;">
Safety brake that activates automatically when main brakes fail or power is lost. Usually disc or clutch type.
</p>

<div style="background: #dc262615; padding: 1rem; border-radius: 8px; margin: 1rem 0; border-left: 4px solid #dc2626;">
<strong style="color: #dc2626;">⚠️ Safety Warning:</strong>
<p style="margin-top: 0.5rem; line-height: 1.8;">
All brake systems must be inspected before each shift. Brake failure can cause the load to drop at dangerous speeds, leading to fatal accidents.
</p>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Drawworks Power Requirements</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
Drawworks are rated by:
</p>

<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li><strong>Hoisting Capacity:</strong> Maximum load that can be lifted (in tons)</li>
<li><strong>Input Horsepower:</strong> Available power for operation</li>
<li><strong>Fast Line Speed:</strong> Wire rope pulling speed (ft/min)</li>
<li><strong>Drum Capacity:</strong> Length of wire rope that can be wound</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Drawworks Operation</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
The driller controls the drawworks through a control panel that includes:
</p>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2; margin-bottom: 1rem;">
<li>Throttle for engine speed control</li>
<li>Brake lever for speed and stop control</li>
<li>Weight, depth, and speed indicators</li>
</ul>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>The drawworks is the heart of the hoisting system providing power for all hoisting operations</li>
<li>Consists of drum, engines, transmission, and multiple brake systems</li>
<li>Three brake systems (main, auxiliary, emergency) are essential for safety</li>
<li>Rated by hoisting capacity, engine power, and drum capacity</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Drum', definition: 'The cylinder around which the drilling line is wound in the drawworks' },
            { term: 'Band Brake', definition: 'Friction brake consisting of a band wrapped around a rim to control lowering speed' },
            { term: 'Eddy Current Brake', definition: 'Auxiliary brake using magnetic field to slow rotation' },
            { term: 'Hoisting Capacity', definition: 'Maximum load the drawworks can lift in tons' },
          ],
          practiceQuestion: {
            question: 'What type of brake activates automatically when main brakes fail or power is lost?',
            options: ['Main Brake', 'Electromagnetic Brake', 'Emergency Brake', 'Hydrodynamic Brake'],
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
          title: 'حسابات نظام الرفع',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 حسابات نظام الرفع</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
فهم حسابات نظام الرفع ضروري لتصميم وتشغيل الجهاز بكفاءة وأمان. تشمل هذه الحسابات الميزة الميكانيكية، حمولة الخطاف، كفاءة النظام، وقوة الشد في الكابل.
</p>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 الميزة الميكانيكية (Mechanical Advantage)</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
الميزة الميكانيكية هي نسبة القوة الناتجة (الحمل المرفوع) إلى القوة المبذولة (الشد في الخط السريع). في نظام البكرات المركب:
</p>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; text-align: center;">
<p style="font-size: 1.3rem; font-weight: bold; color: #1e3a5f; direction: ltr; margin-bottom: 1rem;">
MA = n (الميزة الميكانيكية المثالية)
</p>
<p style="line-height: 1.8;">
حيث: n = عدد الخطوط بين البكرة التاجية والبكرة المتنقلة
</p>
</div>

<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #f97316; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">📌 مثال:</h3>
<p style="line-height: 1.8;">
إذا كان عدد الخطوط = 10، فإن الميزة الميكانيكية المثالية = 10
</p>
<p style="line-height: 1.8; margin-top: 0.5rem;">
أي أن قوة 1 طن في الخط السريع يمكن أن ترفع حملاً قدره 10 طن (في الظروف المثالية)
</p>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 كفاءة نظام البكرات (Block Efficiency)</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
في الواقع، هناك فقدان في الطاقة بسبب الاحتكاك في البكرات. كفاءة كل بكرة تتراوح عادة بين 96-98%. يتم حساب الكفاءة الكلية:
</p>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; text-align: center;">
<p style="font-size: 1.2rem; font-weight: bold; color: #1e3a5f; direction: ltr; margin-bottom: 1rem;">
K = (E^n - 1) / (n × E^(n-1) × (E - 1))
</p>
<p style="line-height: 1.8;">
حيث: K = عامل الكفاءة، E = كفاءة البكرة الواحدة، n = عدد الخطوط
</p>
</div>

<p style="margin-bottom: 1rem; line-height: 1.8;">
أو يمكن استخدام الصيغة المبسطة:
</p>

<div style="background: #f9731620; padding: 1rem; border-radius: 8px; margin: 1rem 0; text-align: center;">
<p style="font-size: 1.2rem; font-weight: bold; color: #1e3a5f; direction: ltr;">
K ≈ E^(n/2)
</p>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 حمولة الخطاف (Hook Load)</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
حمولة الخطاف هي الوزن الإجمالي المعلق من الخطاف، وتشمل:
</p>

<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2; margin-bottom: 1rem;">
<li>وزن البكرة المتنقلة والخطاف والمعدات المساعدة</li>
<li>وزن سلسلة الحفر في الهواء</li>
<li>ناقص قوة الطفو (Buoyancy) من سائل الحفر</li>
</ul>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; text-align: center;">
<p style="font-size: 1.2rem; font-weight: bold; color: #1e3a5f; direction: ltr; margin-bottom: 1rem;">
Hook Load = W_air × BF + W_TB
</p>
<p style="line-height: 1.8; direction: ltr;">
BF (Buoyancy Factor) = 1 - (MW / 65.5)
</p>
<p style="line-height: 1.8; margin-top: 0.5rem;">
حيث: MW = وزن سائل الحفر (ppg)
</p>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 قوة الشد في الخط السريع (Fast Line Tension)</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
لحساب الشد الفعلي في الخط السريع مع الأخذ بالاعتبار الكفاءة:
</p>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; text-align: center;">
<p style="font-size: 1.2rem; font-weight: bold; color: #1e3a5f; direction: ltr;">
F_fast = Hook Load / (n × K)
</p>
</div>

<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #f97316; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">📌 مثال محلول:</h3>
<p style="line-height: 1.8; margin-bottom: 0.5rem;"><strong>المعطيات:</strong></p>
<ul style="list-style-type: circle; padding-right: 1.5rem; line-height: 1.8; margin-bottom: 1rem;">
<li>حمولة الخطاف = 400,000 رطل</li>
<li>عدد الخطوط (n) = 10</li>
<li>كفاءة البكرة (E) = 0.96</li>
</ul>
<p style="line-height: 1.8;"><strong>الحل:</strong></p>
<p style="line-height: 1.8; direction: ltr;">K ≈ 0.96^5 = 0.815</p>
<p style="line-height: 1.8; direction: ltr;">F_fast = 400,000 / (10 × 0.815) = 49,080 lb</p>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 الشد في الخط الميت (Dead Line Tension)</h2>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; text-align: center;">
<p style="font-size: 1.2rem; font-weight: bold; color: #1e3a5f; direction: ltr;">
F_dead = F_fast × E^n
</p>
</div>

<div style="background: #dc262615; padding: 1rem; border-radius: 8px; margin: 1rem 0; border-right: 4px solid #dc2626;">
<strong style="color: #dc2626;">⚠️ ملاحظة هامة:</strong>
<p style="margin-top: 0.5rem; line-height: 1.8;">
الخط الميت يتعرض لأقل شد في النظام، لذا يُستخدم لقياس حمولة الخطاف عبر خلية الحمل (Load Cell) المثبتة على مرساة الخط الميت.
</p>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 عامل الأمان (Safety Factor)</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
يجب دائماً حساب عامل الأمان للتأكد من أن الكابل يتحمل الحمل بأمان:
</p>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; text-align: center;">
<p style="font-size: 1.2rem; font-weight: bold; color: #1e3a5f; direction: ltr;">
SF = Breaking Strength / F_fast
</p>
<p style="margin-top: 0.5rem; line-height: 1.8;">
يجب أن يكون SF ≥ 2 للتشغيل الآمن
</p>
</div>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>الميزة الميكانيكية المثالية تساوي عدد خطوط الكابل</li>
<li>كفاءة النظام الفعلية أقل من المثالية بسبب احتكاك البكرات</li>
<li>الخط السريع يتحمل أعلى شد في النظام</li>
<li>عامل الأمان يجب أن يكون 2 أو أكثر</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'الميزة الميكانيكية (Mechanical Advantage)', definition: 'نسبة الحمل المرفوع إلى القوة المبذولة، تساوي عدد الخطوط في النظام المثالي' },
            { term: 'عامل الطفو (Buoyancy Factor)', definition: 'معامل يقلل الوزن الظاهري للمعدات المغمورة في سائل الحفر' },
            { term: 'عامل الكفاءة (K Factor)', definition: 'معامل يعبر عن فقدان الطاقة بسبب الاحتكاك في البكرات' },
            { term: 'عامل الأمان (Safety Factor)', definition: 'نسبة قوة الكسر للكابل إلى الشد الفعلي، يجب أن يكون 2 أو أكثر' },
          ],
          practiceQuestion: {
            question: 'إذا كان عدد الخطوط 8 وكفاءة كل بكرة 96%، ما هي الكفاءة التقريبية للنظام (K)؟',
            options: ['0.96', '0.85', '0.92', '0.78'],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Hoisting System Calculations',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Hoisting System Calculations</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
Understanding hoisting system calculations is essential for efficient and safe rig design and operation. These calculations include mechanical advantage, hook load, system efficiency, and wire rope tension.
</p>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Mechanical Advantage (MA)</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
Mechanical advantage is the ratio of output force (lifted load) to input force (fast line tension). In a block and tackle system:
</p>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; text-align: center;">
<p style="font-size: 1.3rem; font-weight: bold; color: #1e3a5f; margin-bottom: 1rem;">
MA = n (Ideal Mechanical Advantage)
</p>
<p style="line-height: 1.8;">
Where: n = number of lines between crown and traveling blocks
</p>
</div>

<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #f97316; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">📌 Example:</h3>
<p style="line-height: 1.8;">
If number of lines = 10, then ideal mechanical advantage = 10
</p>
<p style="line-height: 1.8; margin-top: 0.5rem;">
Meaning 1 ton of force on the fast line can lift 10 tons (under ideal conditions)
</p>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Block Efficiency</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
In reality, energy is lost due to friction in the sheaves. Each sheave efficiency typically ranges from 96-98%. Total efficiency is calculated as:
</p>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; text-align: center;">
<p style="font-size: 1.2rem; font-weight: bold; color: #1e3a5f; margin-bottom: 1rem;">
K = (E^n - 1) / (n × E^(n-1) × (E - 1))
</p>
<p style="line-height: 1.8;">
Where: K = efficiency factor, E = single sheave efficiency, n = number of lines
</p>
</div>

<p style="margin-bottom: 1rem; line-height: 1.8;">
Or use the simplified formula:
</p>

<div style="background: #f9731620; padding: 1rem; border-radius: 8px; margin: 1rem 0; text-align: center;">
<p style="font-size: 1.2rem; font-weight: bold; color: #1e3a5f;">
K ≈ E^(n/2)
</p>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Hook Load</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
Hook load is the total weight suspended from the hook, including:
</p>

<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2; margin-bottom: 1rem;">
<li>Weight of traveling block, hook, and auxiliary equipment</li>
<li>Weight of drill string in air</li>
<li>Minus buoyancy force from drilling fluid</li>
</ul>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; text-align: center;">
<p style="font-size: 1.2rem; font-weight: bold; color: #1e3a5f; margin-bottom: 1rem;">
Hook Load = W_air × BF + W_TB
</p>
<p style="line-height: 1.8;">
BF (Buoyancy Factor) = 1 - (MW / 65.5)
</p>
<p style="line-height: 1.8; margin-top: 0.5rem;">
Where: MW = mud weight (ppg)
</p>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Fast Line Tension</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
To calculate actual fast line tension considering efficiency:
</p>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; text-align: center;">
<p style="font-size: 1.2rem; font-weight: bold; color: #1e3a5f;">
F_fast = Hook Load / (n × K)
</p>
</div>

<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #f97316; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">📌 Solved Example:</h3>
<p style="line-height: 1.8; margin-bottom: 0.5rem;"><strong>Given:</strong></p>
<ul style="list-style-type: circle; padding-left: 1.5rem; line-height: 1.8; margin-bottom: 1rem;">
<li>Hook Load = 400,000 lb</li>
<li>Number of lines (n) = 10</li>
<li>Sheave efficiency (E) = 0.96</li>
</ul>
<p style="line-height: 1.8;"><strong>Solution:</strong></p>
<p style="line-height: 1.8;">K ≈ 0.96^5 = 0.815</p>
<p style="line-height: 1.8;">F_fast = 400,000 / (10 × 0.815) = 49,080 lb</p>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Dead Line Tension</h2>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; text-align: center;">
<p style="font-size: 1.2rem; font-weight: bold; color: #1e3a5f;">
F_dead = F_fast × E^n
</p>
</div>

<div style="background: #dc262615; padding: 1rem; border-radius: 8px; margin: 1rem 0; border-left: 4px solid #dc2626;">
<strong style="color: #dc2626;">⚠️ Important Note:</strong>
<p style="margin-top: 0.5rem; line-height: 1.8;">
The dead line experiences the lowest tension in the system, which is why it's used to measure hook load via a load cell mounted on the deadline anchor.
</p>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Safety Factor</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
Always calculate the safety factor to ensure the wire rope can safely handle the load:
</p>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; text-align: center;">
<p style="font-size: 1.2rem; font-weight: bold; color: #1e3a5f;">
SF = Breaking Strength / F_fast
</p>
<p style="margin-top: 0.5rem; line-height: 1.8;">
SF should be ≥ 2 for safe operation
</p>
</div>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>Ideal mechanical advantage equals the number of lines</li>
<li>Actual system efficiency is less than ideal due to sheave friction</li>
<li>Fast line experiences the highest tension in the system</li>
<li>Safety factor must be 2 or greater</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Mechanical Advantage', definition: 'Ratio of lifted load to applied force, equals number of lines in ideal system' },
            { term: 'Buoyancy Factor', definition: 'Factor reducing apparent weight of equipment submerged in drilling fluid' },
            { term: 'K Factor (Efficiency Factor)', definition: 'Factor expressing energy loss due to sheave friction' },
            { term: 'Safety Factor', definition: 'Ratio of wire rope breaking strength to actual tension, should be 2 or more' },
          ],
          practiceQuestion: {
            question: 'If the number of lines is 8 and each sheave efficiency is 96%, what is the approximate system efficiency (K)?',
            options: ['0.96', '0.85', '0.92', '0.78'],
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
          title: 'صيانة الكابل وحساب Ton-Mile',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 صيانة كابل الحفر والسلامة</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
صيانة كابل الحفر من أهم متطلبات السلامة في عمليات الحفر. الكابل التالف قد يؤدي إلى كوارث، لذا يجب اتباع برنامج صيانة صارم يشمل الفحص الدوري والتزييت وتحريك الكابل (Slip and Cut).
</p>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 فحص كابل الحفر</h2>

<div style="background: linear-gradient(135deg, #1e3a5f15, #f9731620); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #f97316;">
<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">📌 علامات تلف الكابل التي تستوجب الاستبدال:</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li><strong>الأسلاك المكسورة (Broken Wires):</strong> أكثر من 6 أسلاك مكسورة في حبل واحد أو 3 في خيط واحد</li>
<li><strong>تآكل القطر (Diameter Reduction):</strong> انخفاض أكثر من 1/32 بوصة في القطر الأصلي</li>
<li><strong>التآكل الكيميائي (Corrosion):</strong> صدأ واضح أو تغير في لون الكابل</li>
<li><strong>التعقد (Kinking):</strong> أي التواء حاد أو تشوه دائم</li>
<li><strong>انتفاخ العش (Bird Caging):</strong> انفصال الخيوط وانتفاخها للخارج</li>
<li><strong>تسطح الكابل (Flattening):</strong> فقدان الشكل الدائري</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 عملية تحريك وقطع الكابل (Slip and Cut)</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
هي عملية دورية لتوزيع التآكل على طول الكابل. تتم بتحريك الكابل بمسافة معينة ثم قطع الجزء الأكثر تآكلاً (عادة من جهة الخط الميت).
</p>

<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #1e3a5f; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">خطوات عملية Slip and Cut:</h3>
<ol style="padding-right: 1.5rem; line-height: 2;">
<li>إرخاء الكابل من مرساة الخط الميت</li>
<li>سحب كمية محددة من الكابل من بكرة رافعة الحفر</li>
<li>قطع الجزء التالف من طرف الخط الميت</li>
<li>إعادة تثبيت الكابل على المرساة</li>
<li>تسجيل العملية في سجل الكابل</li>
</ol>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 حساب Ton-Mile</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
Ton-Mile هو مقياس لكمية العمل الذي أداه الكابل، ويُستخدم لتحديد موعد عملية Slip and Cut واستبدال الكابل. يتم حسابه بضرب الحمل المرفوع (بالطن) في المسافة المقطوعة (بالأميال).
</p>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; text-align: center;">
<p style="font-size: 1.2rem; font-weight: bold; color: #1e3a5f; direction: ltr; margin-bottom: 1rem;">
Ton-Mile = Σ (Load × Distance)
</p>
</div>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">معادلات Ton-Mile لعمليات مختلفة:</h3>

<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<p style="line-height: 1.8; margin-bottom: 1rem;"><strong>1. رحلة واحدة (Round Trip):</strong></p>
<p style="direction: ltr; background: #f9731620; padding: 0.75rem; border-radius: 6px; margin-bottom: 1rem;">
T = (D/5280) × [(W_m × L_s) + (2 × W_BHA × D) + (W_dp × D²/L_s)]
</p>

<p style="line-height: 1.8; margin-bottom: 1rem;"><strong>2. حفر فترة واحدة (Drilling):</strong></p>
<p style="direction: ltr; background: #f9731620; padding: 0.75rem; border-radius: 6px; margin-bottom: 1rem;">
T = (3 × D × W_m + 2 × D × W_BHA) / (5280 × 2)
</p>

<p style="line-height: 1.8;"><strong>3. إنزال التغليف (Casing):</strong></p>
<p style="direction: ltr; background: #f9731620; padding: 0.75rem; border-radius: 6px;">
T = (D × W_casing × BF) / 10,560
</p>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 جدول Slip and Cut</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
يعتمد موعد Slip and Cut على Ton-Miles المتراكمة. القيم النموذجية:
</p>

<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<table style="width: 100%; border-collapse: collapse; text-align: center;">
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 0.75rem; border: 1px solid #ccc;">نوع العملية</th>
<th style="padding: 0.75rem; border: 1px solid #ccc;">Ton-Miles قبل Slip</th>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ccc;">الحفر العادي</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">500 - 800</td>
</tr>
<tr style="background: #f5f5f5;">
<td style="padding: 0.75rem; border: 1px solid #ccc;">إنزال التغليف</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">150 - 300</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ccc;">عمليات الصيد</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">100 - 200</td>
</tr>
</table>
</div>

<div style="background: #dc262615; padding: 1rem; border-radius: 8px; margin: 1rem 0; border-right: 4px solid #dc2626;">
<strong style="color: #dc2626;">⚠️ تحذير:</strong>
<p style="margin-top: 0.5rem; line-height: 1.8;">
يجب تسجيل جميع عمليات Ton-Mile في سجل الكابل (Wire Line Record). الإهمال في التتبع قد يؤدي إلى فشل الكابل المفاجئ.
</p>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 تزييت الكابل</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
التزييت المنتظم ضروري لحماية الكابل من التآكل والصدأ. يجب استخدام زيوت خاصة تخترق إلى قلب الكابل.
</p>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>فحص الكابل يومياً للبحث عن علامات التلف</li>
<li>عملية Slip and Cut توزع التآكل وتطيل عمر الكابل</li>
<li>Ton-Mile يقيس العمل المنجز ويحدد موعد الصيانة</li>
<li>التزييت المنتظم يحمي من الصدأ والتآكل</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Ton-Mile', definition: 'مقياس لكمية العمل الذي أداه الكابل، يُحسب بضرب الحمل بالمسافة' },
            { term: 'Slip and Cut', definition: 'عملية تحريك وقطع الكابل لتوزيع التآكل وإزالة الجزء التالف' },
            { term: 'Bird Caging', definition: 'انتفاخ الخيوط وانفصالها عن بعضها نتيجة الحمل الزائد أو التآكل' },
            { term: 'سجل الكابل (Wire Line Record)', definition: 'سجل يوثق جميع عمليات الصيانة وTon-Miles المتراكمة للكابل' },
          ],
          practiceQuestion: {
            question: 'ما هو الغرض الرئيسي من عملية Slip and Cut؟',
            options: ['زيادة طول الكابل', 'توزيع التآكل وإزالة الجزء التالف', 'زيادة قوة الشد', 'تقليل الوزن'],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Wire Rope Maintenance and Ton-Mile Calculation',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Drilling Line Maintenance and Safety</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
Wire rope maintenance is one of the most critical safety requirements in drilling operations. A damaged wire rope can lead to disasters, so a strict maintenance program including regular inspection, lubrication, and slip and cut operations must be followed.
</p>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Wire Rope Inspection</h2>

<div style="background: linear-gradient(135deg, #1e3a5f15, #f9731620); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #f97316;">
<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">📌 Wire Rope Damage Signs Requiring Replacement:</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li><strong>Broken Wires:</strong> More than 6 broken wires in one rope lay or 3 in one strand</li>
<li><strong>Diameter Reduction:</strong> More than 1/32 inch reduction from original diameter</li>
<li><strong>Corrosion:</strong> Visible rust or wire rope discoloration</li>
<li><strong>Kinking:</strong> Any sharp bends or permanent deformation</li>
<li><strong>Bird Caging:</strong> Strand separation and bulging outward</li>
<li><strong>Flattening:</strong> Loss of round cross-section</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Slip and Cut Operation</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
A periodic operation to distribute wear along the wire rope length. It involves slipping the rope a specified distance and cutting the most worn section (usually from the dead line end).
</p>

<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #1e3a5f; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">Slip and Cut Steps:</h3>
<ol style="padding-left: 1.5rem; line-height: 2;">
<li>Release wire rope from deadline anchor</li>
<li>Pull specified amount of rope from drawworks drum</li>
<li>Cut the damaged section from the dead line end</li>
<li>Re-attach wire rope to anchor</li>
<li>Record operation in wire line record</li>
</ol>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Ton-Mile Calculation</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
Ton-Mile is a measure of the work performed by the wire rope, used to determine when to perform slip and cut and wire rope replacement. It is calculated by multiplying the lifted load (in tons) by the distance traveled (in miles).
</p>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; text-align: center;">
<p style="font-size: 1.2rem; font-weight: bold; color: #1e3a5f; margin-bottom: 1rem;">
Ton-Mile = Σ (Load × Distance)
</p>
</div>

<h3 style="color: #f97316; font-size: 1.2rem; font-weight: bold; margin: 1.5rem 0 0.75rem;">Ton-Mile Equations for Different Operations:</h3>

<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<p style="line-height: 1.8; margin-bottom: 1rem;"><strong>1. Round Trip:</strong></p>
<p style="background: #f9731620; padding: 0.75rem; border-radius: 6px; margin-bottom: 1rem;">
T = (D/5280) × [(W_m × L_s) + (2 × W_BHA × D) + (W_dp × D²/L_s)]
</p>

<p style="line-height: 1.8; margin-bottom: 1rem;"><strong>2. Drilling:</strong></p>
<p style="background: #f9731620; padding: 0.75rem; border-radius: 6px; margin-bottom: 1rem;">
T = (3 × D × W_m + 2 × D × W_BHA) / (5280 × 2)
</p>

<p style="line-height: 1.8;"><strong>3. Casing:</strong></p>
<p style="background: #f9731620; padding: 0.75rem; border-radius: 6px;">
T = (D × W_casing × BF) / 10,560
</p>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Slip and Cut Schedule</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
Slip and cut timing depends on accumulated Ton-Miles. Typical values:
</p>

<div style="background: #1e3a5f10; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<table style="width: 100%; border-collapse: collapse; text-align: center;">
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 0.75rem; border: 1px solid #ccc;">Operation Type</th>
<th style="padding: 0.75rem; border: 1px solid #ccc;">Ton-Miles Before Slip</th>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ccc;">Normal Drilling</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">500 - 800</td>
</tr>
<tr style="background: #f5f5f5;">
<td style="padding: 0.75rem; border: 1px solid #ccc;">Running Casing</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">150 - 300</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ccc;">Fishing Operations</td>
<td style="padding: 0.75rem; border: 1px solid #ccc;">100 - 200</td>
</tr>
</table>
</div>

<div style="background: #dc262615; padding: 1rem; border-radius: 8px; margin: 1rem 0; border-left: 4px solid #dc2626;">
<strong style="color: #dc2626;">⚠️ Warning:</strong>
<p style="margin-top: 0.5rem; line-height: 1.8;">
All Ton-Mile operations must be recorded in the Wire Line Record. Neglecting tracking can lead to sudden wire rope failure.
</p>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Wire Rope Lubrication</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
Regular lubrication is essential to protect wire rope from wear and corrosion. Special oils that penetrate to the wire rope core should be used.
</p>

<div style="background: linear-gradient(135deg, #10b98115, #1e3a5f15); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #10b981; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>Inspect wire rope daily for damage signs</li>
<li>Slip and cut operation distributes wear and extends rope life</li>
<li>Ton-Mile measures work done and determines maintenance timing</li>
<li>Regular lubrication protects against rust and corrosion</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Ton-Mile', definition: 'Measure of work performed by wire rope, calculated by multiplying load by distance' },
            { term: 'Slip and Cut', definition: 'Operation of slipping and cutting wire rope to distribute wear and remove damaged section' },
            { term: 'Bird Caging', definition: 'Strand bulging and separation resulting from overload or wear' },
            { term: 'Wire Line Record', definition: 'Record documenting all maintenance operations and accumulated Ton-Miles' },
          ],
          practiceQuestion: {
            question: 'What is the main purpose of the Slip and Cut operation?',
            options: ['Increase wire rope length', 'Distribute wear and remove damaged section', 'Increase tensile strength', 'Reduce weight'],
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
          title: 'اختبار نظام الرفع المتقدم',
          explanation: 'اختبر معلوماتك في نظام الرفع المتقدم',
          keyTerms: [],
        },
        en: {
          title: 'Advanced Hoisting System Quiz',
          explanation: 'Test your knowledge on the Advanced Hoisting System',
          keyTerms: [],
        },
      },
      quiz: {
        ar: [
          { 
            question: 'ما هو المكون الثابت في نظام الرفع الموجود في قمة برج الحفر؟', 
            options: ['البكرة المتنقلة', 'البكرة التاجية', 'الخطاف', 'رافعة الحفر'], 
            correctAnswer: 1 
          },
          { 
            question: 'أي جزء من كابل الحفر يتعرض لأعلى شد؟', 
            options: ['الخط الميت', 'الخط السريع', 'خطوط السلسلة', 'القلب المركزي'], 
            correctAnswer: 1 
          },
          { 
            question: 'ما نوع الفرامل التي تعمل تلقائياً عند انقطاع الطاقة؟', 
            options: ['الفرامل الرئيسية', 'الفرامل الكهرومغناطيسية', 'فرامل الطوارئ', 'الفرامل الهيدروديناميكية'], 
            correctAnswer: 2 
          },
          { 
            question: 'إذا كان عدد الخطوط 10، ما هي الميزة الميكانيكية المثالية؟', 
            options: ['5', '10', '20', '100'], 
            correctAnswer: 1 
          },
          { 
            question: 'ما هو الغرض من عملية Slip and Cut؟', 
            options: ['زيادة طول الكابل', 'توزيع التآكل وإزالة الجزء التالف', 'زيادة قوة الشد', 'تقليل عدد الخطوط'], 
            correctAnswer: 1 
          },
          { 
            question: 'ما هي وحدة قياس Ton-Mile؟', 
            options: ['الحمل فقط', 'المسافة فقط', 'الحمل × المسافة', 'الحمل ÷ المسافة'], 
            correctAnswer: 2 
          },
          { 
            question: 'كم يجب أن يكون عامل الأمان كحد أدنى للتشغيل الآمن؟', 
            options: ['1', '1.5', '2', '3'], 
            correctAnswer: 2 
          },
          { 
            question: 'أي من التالي يُعتبر علامة على تلف الكابل؟', 
            options: ['لمعان السطح', 'Bird Caging', 'الشكل الدائري', 'المرونة العالية'], 
            correctAnswer: 1 
          },
          { 
            question: 'ما هو عامل الطفو (Buoyancy Factor) عندما يكون وزن سائل الحفر 10 ppg؟', 
            options: ['0.85', '0.90', '0.95', '1.0'], 
            correctAnswer: 0 
          },
          { 
            question: 'أين يتم تثبيت خلية الحمل (Load Cell) لقياس حمولة الخطاف؟', 
            options: ['على الخط السريع', 'على مرساة الخط الميت', 'على البكرة التاجية', 'على رافعة الحفر'], 
            correctAnswer: 1 
          },
        ],
        en: [
          { 
            question: 'What is the stationary component in the hoisting system located at the top of the derrick?', 
            options: ['Traveling Block', 'Crown Block', 'Hook', 'Drawworks'], 
            correctAnswer: 1 
          },
          { 
            question: 'Which part of the drilling line experiences the highest tension?', 
            options: ['Dead Line', 'Fast Line', 'String Lines', 'Core'], 
            correctAnswer: 1 
          },
          { 
            question: 'What type of brake activates automatically when power is lost?', 
            options: ['Main Brake', 'Electromagnetic Brake', 'Emergency Brake', 'Hydrodynamic Brake'], 
            correctAnswer: 2 
          },
          { 
            question: 'If the number of lines is 10, what is the ideal mechanical advantage?', 
            options: ['5', '10', '20', '100'], 
            correctAnswer: 1 
          },
          { 
            question: 'What is the purpose of the Slip and Cut operation?', 
            options: ['Increase wire rope length', 'Distribute wear and remove damaged section', 'Increase tensile strength', 'Reduce number of lines'], 
            correctAnswer: 1 
          },
          { 
            question: 'What is the unit of measurement for Ton-Mile?', 
            options: ['Load only', 'Distance only', 'Load × Distance', 'Load ÷ Distance'], 
            correctAnswer: 2 
          },
          { 
            question: 'What should be the minimum safety factor for safe operation?', 
            options: ['1', '1.5', '2', '3'], 
            correctAnswer: 2 
          },
          { 
            question: 'Which of the following is a sign of wire rope damage?', 
            options: ['Shiny surface', 'Bird Caging', 'Round shape', 'High flexibility'], 
            correctAnswer: 1 
          },
          { 
            question: 'What is the Buoyancy Factor when mud weight is 10 ppg?', 
            options: ['0.85', '0.90', '0.95', '1.0'], 
            correctAnswer: 0 
          },
          { 
            question: 'Where is the Load Cell installed to measure hook load?', 
            options: ['On the Fast Line', 'On the Deadline Anchor', 'On the Crown Block', 'On the Drawworks'], 
            correctAnswer: 1 
          },
        ],
      },
    },
    {
      day: 7,
      type: 'project',
      content: {
        ar: {
          title: 'مشروع نظام الرفع المتقدم',
          explanation: 'طبق ما تعلمته في هذا المشروع التطبيقي',
          keyTerms: [],
        },
        en: {
          title: 'Advanced Hoisting System Project',
          explanation: 'Apply what you learned in this practical project',
          keyTerms: [],
        },
      },
      project: {
        ar: {
          title: 'حساب حمولة الخطاف والميزة الميكانيكية',
          description: 'في هذا المشروع، ستقوم بحساب معاملات نظام الرفع لحالة حفر فعلية. هذه المهارة ضرورية لمهندسي الحفر لضمان التشغيل الآمن.',
          instructions: [
            'البيانات المعطاة: عمق البئر = 12,000 قدم، وزن أنابيب الحفر = 19.5 رطل/قدم، طول أطواق الحفر = 600 قدم، وزن أطواق الحفر = 147 رطل/قدم، وزن سائل الحفر = 11 ppg، عدد الخطوط = 10، كفاءة البكرة = 96%',
            'احسب: (1) عامل الطفو، (2) وزن سلسلة الحفر في السائل، (3) حمولة الخطاف الإجمالية (مع افتراض وزن TB+Hook = 25,000 رطل)',
            'احسب: (4) الشد في الخط السريع، (5) عامل الأمان إذا كانت قوة كسر الكابل = 136,000 رطل',
            'اكتب تقريراً يشمل جميع الحسابات مع شرح كل خطوة',
            'حدد هل نظام الرفع آمن للتشغيل؟ ولماذا؟',
          ],
          submissionType: 'text',
        },
        en: {
          title: 'Hook Load and Mechanical Advantage Calculation',
          description: 'In this project, you will calculate hoisting system parameters for an actual drilling scenario. This skill is essential for drilling engineers to ensure safe operations.',
          instructions: [
            'Given Data: Well depth = 12,000 ft, Drill pipe weight = 19.5 lb/ft, Drill collar length = 600 ft, Drill collar weight = 147 lb/ft, Mud weight = 11 ppg, Number of lines = 10, Sheave efficiency = 96%',
            'Calculate: (1) Buoyancy Factor, (2) Drill string weight in fluid, (3) Total Hook Load (assuming TB+Hook weight = 25,000 lb)',
            'Calculate: (4) Fast Line Tension, (5) Safety Factor if wire rope breaking strength = 136,000 lb',
            'Write a report including all calculations with explanation of each step',
            'Determine if the hoisting system is safe for operation? And why?',
          ],
          submissionType: 'text',
        },
      },
    },
  ],
};
