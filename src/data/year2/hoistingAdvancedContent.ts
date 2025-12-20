import { WeeklyLesson } from '../weeklyContent';

export const hoistingAdvancedLesson: WeeklyLesson = {
  lessonId: 'hoisting-advanced',
  days: [
    {
      day: 1,
      type: 'learning',
      content: {
        ar: {
          title: 'نظام الرفع المتقدم - مقدمة ومكونات',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 مقدمة عن نظام الرفع</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
نظام الرفع هو أحد أهم الأنظمة في جهاز الحفر، ويُعتبر العمود الفقري لعمليات الحفر. هذا النظام مسؤول عن رفع وإنزال سلسلة الحفر، الكيسنق، والمعدات الأخرى داخل وخارج البئر. تعتمد كفاءة عمليات الحفر بشكل كبير على أداء نظام الرفع، حيث أن أي خلل فيه يمكن أن يؤدي إلى توقف العمليات وتكاليف باهظة.
</p>

<div style="background: linear-gradient(135deg, #1e3a5f15, #1e3a5f10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #1e3a5f;">
<h3 style="color: #1e3a5f; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">📌 أهمية نظام الرفع</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>رفع وإنزال سلسلة الحفر أثناء عمليات الحفر والرحلات</li>
<li>التحكم في الوزن على الحفارة (Weight on Bit - WOB)</li>
<li>إنزال وسحب الكيسنق والأنابيب الإنتاجية</li>
<li>عمليات الصيد (Fishing)</li>
<li>التعامل مع حالات العصي (Stuck Pipe)</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 المكونات الرئيسية لنظام الرفع</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
يتكون نظام الرفع من عدة مكونات متكاملة تعمل معاً لتحقيق عملية رفع كفؤة وآمنة:
</p>

<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #059669;">
<h3 style="color: #059669; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">1️⃣ Crown Block (البكرة العلوية)</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
البكرة العلوية هي مجموعة من البكرات الثابتة المركبة في قمة البرج. تتكون من عدة بكرات مرتبة أفقياً يمر من خلالها حبل الحفر. تتميز بأنها ثابتة وتعمل كنقطة ارتكاز علوية لنظام البكرات.
</p>
<p style="font-weight: bold; margin-bottom: 0.5rem;">مواصفات Crown Block:</p>
<ul style="list-style: none; padding: 0; line-height: 2;">
<li>• عدد البكرات: عادة من 4 إلى 8 حسب حجم الجهاز</li>
<li>• قطر البكرة: يتراوح من 36 إلى 60 بوصة</li>
<li>• المادة: فولاذ عالي القوة مع محامل كروية</li>
<li>• السعة: تُقاس بالحمل الأقصى (350 إلى 1000+ طن)</li>
</ul>
</div>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #2563eb;">
<h3 style="color: #1e40af; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">2️⃣ Traveling Block (البكرة المتحركة)</h3>
<p style="line-height: 1.8;">
البكرة المتحركة هي مجموعة البكرات المتحركة التي تتصل بالخطاف وتتحرك عمودياً داخل البرج. تتكون من عدة بكرات مماثلة للبكرة العلوية وتعمل معها لتشكيل نظام بكرات مركب يُضاعف القوة الميكانيكية.
</p>
</div>

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #f59e0b;">
<h3 style="color: #92400e; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">3️⃣ Hook (الخطاف)</h3>
<p style="line-height: 1.8;">
الخطاف هو المكون الذي يتصل مباشرة بالبكرة المتحركة من الأعلى وبالسويفل أو الحمل من الأسفل. يحتوي على آلية قفل أمان لمنع سقوط الأحمال بشكل عرضي، ويُصنع من الفولاذ المقسى لتحمل الأحمال الثقيلة.
</p>
</div>

<div style="background: linear-gradient(135deg, #dc262615, #dc262610); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #dc2626;">
<h3 style="color: #dc2626; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">⚠️ تحذير السلامة</h3>
<p style="line-height: 1.8;">
يجب فحص الخطاف بشكل دوري للتأكد من سلامة آلية القفل وعدم وجود شقوق أو تآكل. أي خلل في الخطاف يمكن أن يؤدي إلى سقوط الأحمال وحوادث كارثية.
</p>
</div>

<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #64748b;">
<h3 style="color: #475569; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">4️⃣ Drilling Line - حبل الحفر (Wire Rope)</h3>
<p style="line-height: 1.8;">
حبل الحفر هو الحبل السلكي الذي يمر عبر البكرات ويربط الدروركس بالحمل. يتكون من عدة خيوط ملفوفة حول قلب مركزي، ويُصنع من الفولاذ عالي الشد.
</p>
</div>

<div style="background: #fae8ff; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #a855f7;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">5️⃣ Drawworks (الدروركس)</h3>
<p style="line-height: 1.8;">
الدروركس هو قلب نظام الرفع، وهو بمثابة رافعة ضخمة تحتوي على طبلة (Drum) يُلف حولها حبل الحفر. مزود بمحركات قوية وأنظمة فرامل للتحكم في سرعة الرفع والإنزال.
</p>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 مبدأ العمل</h2>
<p style="line-height: 1.8; margin-bottom: 1rem;">
يعمل نظام الرفع على مبدأ نظام <strong>Block and Tackle</strong>، حيث يمر حبل الحفر بين البكرة العلوية والبكرة المتحركة عدة مرات لمضاعفة القوة. كلما زاد عدد الخطوط المشدودة، زادت الميزة الميكانيكية وقلت القوة المطلوبة لرفع الحمل.
</p>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>نظام الرفع مسؤول عن رفع وإنزال جميع المعدات في البئر</li>
<li>المكونات الرئيسية: Crown block، Traveling block، Hook، Drilling line، Drawworks</li>
<li>يعمل النظام على مبدأ Block and Tackle لمضاعفة القوة</li>
<li>السلامة والصيانة الدورية ضرورية لمنع الحوادث</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Crown Block', definition: 'مجموعة البكرات الثابتة في قمة البرج التي يمر من خلالها حبل الحفر' },
            { term: 'Traveling Block', definition: 'مجموعة البكرات المتحركة التي تتصل بالخطاف وتتحرك عمودياً' },
            { term: 'Hook', definition: 'المكون الذي يربط البكرة المتحركة بالسويفل أو الحمل من الأسفل' },
            { term: 'Block and Tackle', definition: 'نظام ميكانيكي يستخدم عدة بكرات لمضاعفة القوة الميكانيكية' }
          ],
          practiceQuestion: {
            question: 'ما هو المكون المسؤول عن توفير القوة اللازمة لرفع وإنزال سلسلة الحفر؟',
            options: [
              'Crown Block',
              'Traveling Block',
              'Drawworks',
              'Hook'
            ],
            correctAnswer: 2
          }
        },
        en: {
          title: 'Advanced Hoisting System - Introduction and Components',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Introduction to the Hoisting System</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
The hoisting system is one of the most critical systems in a drilling rig, considered the backbone of drilling operations. This system is responsible for raising and lowering the drill string, casing, and other equipment into and out of the wellbore. The efficiency of drilling operations depends heavily on the hoisting system's performance, as any malfunction can lead to operational downtime and significant costs.
</p>

<div style="background: linear-gradient(135deg, #1e3a5f15, #1e3a5f10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #1e3a5f;">
<h3 style="color: #1e3a5f; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">📌 Importance of the Hoisting System</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>Raising and lowering drill string during drilling and tripping operations</li>
<li>Controlling Weight on Bit (WOB)</li>
<li>Running and pulling casing and production tubing</li>
<li>Fishing operations</li>
<li>Handling stuck pipe situations</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Main Components of the Hoisting System</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
The hoisting system consists of several integrated components that work together to achieve efficient and safe hoisting operations:
</p>

<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #059669;">
<h3 style="color: #059669; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">1️⃣ Crown Block</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
The crown block is a set of stationary sheaves mounted at the top of the derrick. It consists of multiple sheaves arranged horizontally through which the drilling line passes. It is characterized by being fixed and serves as the upper pivot point for the pulley system.
</p>
<p style="font-weight: bold; margin-bottom: 0.5rem;">Crown Block Specifications:</p>
<ul style="list-style: none; padding: 0; line-height: 2;">
<li>• Number of sheaves: Usually 4 to 8 depending on rig size</li>
<li>• Sheave diameter: Ranges from 36 to 60 inches</li>
<li>• Material: High-strength steel with ball bearings</li>
<li>• Capacity: Rated by maximum load (350 to 1000+ tons)</li>
</ul>
</div>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #2563eb;">
<h3 style="color: #1e40af; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">2️⃣ Traveling Block</h3>
<p style="line-height: 1.8;">
The traveling block is the moving sheave assembly that connects to the hook and moves vertically within the derrick. It consists of multiple sheaves similar to the crown block and works with it to form a compound pulley system that multiplies mechanical force.
</p>
</div>

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #f59e0b;">
<h3 style="color: #92400e; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">3️⃣ Hook</h3>
<p style="line-height: 1.8;">
The hook is the component that connects directly to the traveling block from above and to the swivel or load from below. It contains a safety latch mechanism to prevent accidental load drops and is manufactured from hardened steel to withstand heavy loads.
</p>
</div>

<div style="background: linear-gradient(135deg, #dc262615, #dc262610); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #dc2626;">
<h3 style="color: #dc2626; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">⚠️ Safety Warning</h3>
<p style="line-height: 1.8;">
The hook must be inspected regularly to ensure the latch mechanism is functioning and there are no cracks or corrosion. Any defect in the hook can lead to load drops and catastrophic accidents.
</p>
</div>

<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #64748b;">
<h3 style="color: #475569; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">4️⃣ Drilling Line (Wire Rope)</h3>
<p style="line-height: 1.8;">
The drilling line is the wire rope that passes through the sheaves and connects the drawworks to the load. It consists of multiple strands wrapped around a central core and is made of high-tensile steel.
</p>
</div>

<div style="background: #fae8ff; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #a855f7;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">5️⃣ Drawworks</h3>
<p style="line-height: 1.8;">
The drawworks is the heart of the hoisting system, essentially a large winch containing a drum around which the drilling line is wound. It is equipped with powerful motors and brake systems to control hoisting and lowering speeds.
</p>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Operating Principle</h2>
<p style="line-height: 1.8; margin-bottom: 1rem;">
The hoisting system operates on the principle of a <strong>Block and Tackle System</strong>, where the drilling line passes between the crown block and traveling block multiple times to multiply force. The more lines strung, the greater the mechanical advantage and the less force required to lift the load.
</p>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
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
            { term: 'Block and Tackle', definition: 'A mechanical system using multiple pulleys to multiply mechanical force' }
          ],
          practiceQuestion: {
            question: 'What component is responsible for providing the power to raise and lower the drill string?',
            options: [
              'Crown Block',
              'Traveling Block',
              'Drawworks',
              'Hook'
            ],
            correctAnswer: 2
          }
        }
      }
    },
    {
      day: 2,
      type: 'learning',
      content: {
        ar: {
          title: 'حبل الحفر - الأنواع والمواصفات',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 حبل الحفر (Wire Rope)</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
حبل الحفر هو العنصر الأساسي الذي ينقل القوة في نظام الرفع. يتكون من أسلاك فولاذية مجدولة بنمط هندسي دقيق لتوفير أقصى قوة شد مع المرونة اللازمة للالتفاف حول البكرات. اختيار الحبل المناسب أمر حيوي لسلامة العمليات.
</p>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 تركيب حبل الحفر</h2>

<div style="background: linear-gradient(135deg, #1e3a5f15, #1e3a5f10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #1e3a5f;">
<h3 style="color: #1e3a5f; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">📌 مكونات الحبل</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li><strong>الأسلاك (Wires):</strong> الوحدات البنائية الأساسية مصنوعة من فولاذ عالي الكربون</li>
<li><strong>الخيوط (Strands):</strong> مجموعات من الأسلاك ملفوفة حلزونياً معاً</li>
<li><strong>القلب (Core):</strong> المحور المركزي الذي تلتف حوله الخيوط - يمكن أن يكون من الألياف أو الفولاذ</li>
</ul>
</div>

<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #059669;">
<h3 style="color: #059669; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">تصنيف حبال الحفر</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
تُصنف حبال الحفر بأرقام تدل على تركيبها، مثل 6×19 حيث:
</p>
<ul style="list-style: none; padding: 0; line-height: 2;">
<li>• <strong>الرقم الأول (6):</strong> عدد الخيوط</li>
<li>• <strong>الرقم الثاني (19):</strong> عدد الأسلاك في كل خيط</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 أنواع حبال الحفر</h2>

<div style="display: grid; gap: 1rem; margin: 1rem 0;">
<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; border: 2px solid #2563eb;">
<h4 style="color: #1e40af; font-weight: bold; margin-bottom: 0.75rem;">1️⃣ فئة 6×19</h4>
<p style="line-height: 1.8;">
يحتوي على 6 خيوط مع 19-26 سلكاً في كل منها. يتميز بمقاومة عالية للتآكل السطحي لكن مرونته أقل. مناسب للأحمال الثقيلة مع انحناءات قليلة.
</p>
</div>

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; border: 2px solid #f59e0b;">
<h4 style="color: #92400e; font-weight: bold; margin-bottom: 0.75rem;">2️⃣ فئة 6×37</h4>
<p style="line-height: 1.8;">
يحتوي على أسلاك أكثر وأنعم، مما يوفر مرونة أعلى. الأكثر استخداماً في عمليات الحفر لأنه يتحمل الانحناء المتكرر حول البكرات.
</p>
</div>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 مصطلحات حبل الحفر الأساسية</h2>

<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #64748b;">
<h3 style="color: #475569; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">خطوط حبل الحفر في نظام الرفع:</h3>
<ul style="list-style: none; padding: 0; line-height: 2.2;">
<li style="margin-bottom: 1rem;"><strong style="color: #dc2626;">Fast Line:</strong> جزء حبل الحفر الممتد من طبلة الدروركس إلى البكرة العلوية. يتحرك بسرعة عند تشغيل الدروركس ويتعرض لأعلى إجهاد.</li>
<li style="margin-bottom: 1rem;"><strong style="color: #2563eb;">Dead Line:</strong> الجزء الممتد من البكرة العلوية إلى نقطة التثبيت. هذا الخط ثابت ولا يتحرك أثناء العمل.</li>
<li><strong style="color: #059669;">String up Lines:</strong> الخطوط المارة بين البكرة العلوية والبكرة المتحركة. عددها يحدد الميزة الميكانيكية.</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 حساب طول حبل الحفر المطلوب</h2>

<div style="background: linear-gradient(135deg, #1e3a5f15, #1e3a5f10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
لحساب الطول الكلي لحبل الحفر المطلوب، نستخدم المعادلة التالية:
</p>
<p style="font-size: 1.2rem; font-weight: bold; text-align: center; color: #1e3a5f; direction: ltr; background: #fff; padding: 1rem; border-radius: 8px;">
L = n × H + Drum Reserve + Dead Line
</p>
<p style="margin-top: 1rem; font-size: 0.95rem; text-align: center;">
حيث: n = عدد الخطوط، H = ارتفاع الرفع
</p>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 عوامل تآكل حبل الحفر</h2>

<div style="background: linear-gradient(135deg, #dc262615, #dc262610); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #dc2626;">
<h3 style="color: #dc2626; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">⚠️ أسباب تلف حبل الحفر:</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li><strong>التآكل السطحي (Abrasion):</strong> الاحتكاك مع البكرات والأسطح</li>
<li><strong>إجهاد الانحناء (Bending Fatigue):</strong> الانحناء المتكرر حول البكرات</li>
<li><strong>الحمل الزائد (Overloading):</strong> تجاوز حدود الشد المسموحة</li>
<li><strong>التآكل الكيميائي (Corrosion):</strong> التعرض للرطوبة والكيماويات</li>
<li><strong>الضرر الميكانيكي:</strong> الالتواء (Kinking)، Bird-caging، أو السحق</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>حبل الحفر يتكون من أسلاك وخيوط ملفوفة حول قلب مركزي</li>
<li>أنواع الحبال الشائعة: 6×19 و 6×37</li>
<li>فهم Fast Line و Dead Line ضروري</li>
<li>الصيانة الدورية والفحص يمنع الحوادث</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Fast Line', definition: 'جزء حبل الحفر من الدروركس إلى البكرة العلوية الذي يتحرك بسرعة أثناء التشغيل' },
            { term: 'Dead Line', definition: 'جزء حبل الحفر الثابت من البكرة العلوية إلى نقطة التثبيت' },
            { term: 'Bending Fatigue', definition: 'تلف الحبل الناتج عن الانحناء المتكرر حول البكرات' },
            { term: 'Deadline Anchor', definition: 'نقطة تثبيت Dead Line، تُستخدم أيضاً لقياس الحمل على الخطاف' }
          ],
          practiceQuestion: {
            question: 'أي جزء من حبل الحفر يتعرض لأعلى إجهاد أثناء عمليات الرفع؟',
            options: [
              'Dead Line',
              'Fast Line',
              'String up Lines',
              'Core'
            ],
            correctAnswer: 1
          }
        },
        en: {
          title: 'Drilling Line - Types and Specifications',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Drilling Line (Wire Rope)</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
The drilling line is the essential element that transmits force in the hoisting system. It consists of steel wires braided in a precise engineering pattern to provide maximum tensile strength with the flexibility needed to wrap around sheaves. Selecting the appropriate wire rope is vital for operational safety.
</p>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Wire Rope Construction</h2>

<div style="background: linear-gradient(135deg, #1e3a5f15, #1e3a5f10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #1e3a5f;">
<h3 style="color: #1e3a5f; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">📌 Rope Components</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li><strong>Wires:</strong> Basic building units made of high-carbon steel</li>
<li><strong>Strands:</strong> Groups of wires wound helically together</li>
<li><strong>Core:</strong> Central axis around which strands are wrapped - can be fiber or steel</li>
</ul>
</div>

<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #059669;">
<h3 style="color: #059669; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">Wire Rope Classification</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
Wire ropes are designated by numbers indicating their construction, such as 6×19 where:
</p>
<ul style="list-style: none; padding: 0; line-height: 2;">
<li>• <strong>First number (6):</strong> Number of strands</li>
<li>• <strong>Second number (19):</strong> Number of wires per strand</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Types of Drilling Wire Ropes</h2>

<div style="display: grid; gap: 1rem; margin: 1rem 0;">
<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; border: 2px solid #2563eb;">
<h4 style="color: #1e40af; font-weight: bold; margin-bottom: 0.75rem;">1️⃣ 6×19 Class</h4>
<p style="line-height: 1.8;">
Contains 6 strands with 19-26 wires each. Features high abrasion resistance but lower flexibility. Suitable for heavy loads with few bends.
</p>
</div>

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; border: 2px solid #f59e0b;">
<h4 style="color: #92400e; font-weight: bold; margin-bottom: 0.75rem;">2️⃣ 6×37 Class</h4>
<p style="line-height: 1.8;">
Contains more and finer wires, providing higher flexibility. Most commonly used in drilling operations as it withstands repeated bending around sheaves.
</p>
</div>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Essential Drilling Line Terminology</h2>

<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #64748b;">
<h3 style="color: #475569; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">Wire Rope Lines in the Hoisting System:</h3>
<ul style="list-style: none; padding: 0; line-height: 2.2;">
<li style="margin-bottom: 1rem;"><strong style="color: #dc2626;">Fast Line:</strong> The section of wire rope extending from the drawworks drum to the crown block. It moves rapidly when the drawworks operates and experiences the highest stress.</li>
<li style="margin-bottom: 1rem;"><strong style="color: #2563eb;">Dead Line:</strong> The section extending from the crown block to the anchor point. This line is stationary and does not move during operation.</li>
<li><strong style="color: #059669;">String up Lines:</strong> The lines running between the crown block and traveling block. Their number determines the mechanical advantage.</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Calculating Required Wire Rope Length</h2>

<div style="background: linear-gradient(135deg, #1e3a5f15, #1e3a5f10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
To calculate the total required wire rope length, use the following formula:
</p>
<p style="font-size: 1.2rem; font-weight: bold; text-align: center; color: #1e3a5f; background: #fff; padding: 1rem; border-radius: 8px;">
L = n × H + Drum Reserve + Dead Line
</p>
<p style="margin-top: 1rem; font-size: 0.95rem; text-align: center;">
Where: n = number of lines, H = hoisting height
</p>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Wire Rope Wear Factors</h2>

<div style="background: linear-gradient(135deg, #dc262615, #dc262610); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #dc2626;">
<h3 style="color: #dc2626; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">⚠️ Causes of Wire Rope Damage:</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li><strong>Abrasion:</strong> Friction with sheaves and surfaces</li>
<li><strong>Bending Fatigue:</strong> Repeated bending around sheaves</li>
<li><strong>Overloading:</strong> Exceeding allowable tensile limits</li>
<li><strong>Corrosion:</strong> Exposure to moisture and chemicals</li>
<li><strong>Mechanical Damage:</strong> Kinking, bird-caging, or crushing</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
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
            { term: 'Deadline Anchor', definition: 'The dead line attachment point, also used for measuring hook load' }
          ],
          practiceQuestion: {
            question: 'Which part of the drilling line experiences the highest stress during hoisting operations?',
            options: [
              'Dead Line',
              'Fast Line',
              'String up Lines',
              'Core'
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
          title: 'الدروركس - Drawworks',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 الدروركس (Drawworks)</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
الدروركس هو قلب نظام الرفع والمحرك الرئيسي له. هو عبارة عن رافعة ضخمة توفر القوة اللازمة لرفع وإنزال سلسلة الحفر والمعدات الأخرى. يُعتبر من أكبر وأثقل القطع في أرضية الحفر، ويتطلب قوة هائلة للتعامل مع الأحمال الثقيلة في الآبار العميقة.
</p>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 المكونات الرئيسية للدروركس</h2>

<div style="background: linear-gradient(135deg, #1e3a5f15, #1e3a5f10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #1e3a5f;">
<h3 style="color: #1e3a5f; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">📌 المكونات الأساسية</h3>
<ul style="list-style: none; padding: 0; line-height: 2.2;">
<li style="margin-bottom: 1rem;"><strong>1. الطبلة (Drum):</strong> أسطوانة كبيرة يُلف حولها حبل الحفر. لها أخاديد لتنظيم لف الحبل ومنع التشابك.</li>
<li style="margin-bottom: 1rem;"><strong>2. نظام القوة (Power System):</strong> يوفر الطاقة لتدوير الطبلة. يمكن أن يكون:
<ul style="list-style-type: disc; padding-right: 1.5rem; margin-top: 0.5rem;">
<li>محركات ديزل-ميكانيكية (في الأجهزة القديمة)</li>
<li>محركات كهربائية DC أو AC (في الأجهزة الحديثة)</li>
</ul>
</li>
<li style="margin-bottom: 1rem;"><strong>3. ناقل الحركة (Transmission / Gear Box):</strong> ينقل الطاقة من المحركات إلى الطبلة مع تغيير نسب السرعة والعزم.</li>
<li><strong>4. نظام الفرامل (Brake System):</strong> يتحكم في سرعة الإنزال ويوقف الحمل.</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 أنظمة فرامل الدروركس</h2>

<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #059669;">
<h3 style="color: #059669; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">1️⃣ الفرامل الرئيسية (Band Brake)</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
فرامل احتكاكية تتكون من شريط معدني ملفوف حول حافة فرامل متصلة بالطبلة. يتم التحكم بها يدوياً عبر ذراع الفرامل. تُستخدم للتحكم في سرعة الإنزال وإيقاف الحمل.
</p>
<p style="font-weight: bold; margin-bottom: 0.5rem;">مكونات الفرامل الرئيسية:</p>
<ul style="list-style: none; padding: 0; line-height: 1.8;">
<li>• Brake Rim (حافة الفرامل)</li>
<li>• Brake Band (شريط الفرامل)</li>
<li>• Brake Blocks / Linings (بطانات الفرامل)</li>
<li>• Water Cooling System (نظام التبريد بالماء)</li>
</ul>
</div>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #2563eb;">
<h3 style="color: #1e40af; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">2️⃣ الفرامل المساعدة (Auxiliary Brake)</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
تساعد الفرامل الرئيسية في التحكم بالأحمال الثقيلة وتمنع ارتفاع حرارة الفرامل الرئيسية. الأنواع الشائعة:
</p>
<ul style="list-style: none; padding: 0; line-height: 2;">
<li>• <strong>Electromagnetic Brake (Eddy Current Brake):</strong> تستخدم المجال المغناطيسي لإبطاء الدوران</li>
<li>• <strong>Hydrodynamic Brake:</strong> تستخدم مقاومة السوائل لإبطاء الدوران</li>
</ul>
</div>

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #f59e0b;">
<h3 style="color: #92400e; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">3️⃣ فرامل الطوارئ (Emergency Brake)</h3>
<p style="line-height: 1.8;">
فرامل أمان تعمل تلقائياً عند فشل الفرامل الرئيسية أو انقطاع الطاقة. عادة ما تكون من نوع القرص أو الكلتش.
</p>
</div>

<div style="background: linear-gradient(135deg, #dc262615, #dc262610); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #dc2626;">
<h3 style="color: #dc2626; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">⚠️ تحذير السلامة</h3>
<p style="line-height: 1.8;">
يجب فحص جميع أنظمة الفرامل قبل كل وردية. فشل الفرامل يمكن أن يؤدي إلى سقوط الحمل بسرعات خطيرة، مما يتسبب في حوادث مميتة.
</p>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 متطلبات قوة الدروركس</h2>

<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #64748b;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
يُصنف الدروركس حسب:
</p>
<ul style="list-style: none; padding: 0; line-height: 2.2;">
<li>• <strong>سعة الرفع (Hoisting Capacity):</strong> أقصى حمل يمكن رفعه (بالأطنان)</li>
<li>• <strong>قوة المحركات (Input Horsepower):</strong> القوة المتاحة للتشغيل</li>
<li>• <strong>سرعة Fast Line:</strong> سرعة سحب حبل الحفر (قدم/دقيقة)</li>
<li>• <strong>سعة الطبلة (Drum Capacity):</strong> طول حبل الحفر الذي يمكن لفه</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 تشغيل الدروركس</h2>

<p style="line-height: 1.8; margin-bottom: 1rem;">
يتحكم الحفار في الدروركس من خلال لوحة تحكم تتضمن:
</p>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>Throttle للتحكم في سرعة المحرك</li>
<li>ذراع الفرامل للتحكم في السرعة والتوقف</li>
<li>مؤشرات الوزن والعمق والسرعة</li>
</ul>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>الدروركس هو قلب نظام الرفع ويوفر القوة لجميع عمليات الرفع</li>
<li>يتكون من طبلة، محركات، ناقل حركة، وأنظمة فرامل متعددة</li>
<li>ثلاثة أنظمة فرامل (رئيسية، مساعدة، طوارئ) ضرورية للسلامة</li>
<li>يُصنف حسب سعة الرفع وقوة المحركات وسعة الطبلة</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Drum', definition: 'الأسطوانة التي يُلف حولها حبل الحفر في الدروركس' },
            { term: 'Band Brake', definition: 'فرامل احتكاكية تتكون من شريط ملفوف حول حافة للتحكم في سرعة الإنزال' },
            { term: 'Eddy Current Brake', definition: 'فرامل مساعدة تستخدم المجال المغناطيسي لإبطاء الدوران' },
            { term: 'Hoisting Capacity', definition: 'أقصى حمل يمكن للدروركس رفعه بالأطنان' }
          ],
          practiceQuestion: {
            question: 'ما هو نوع الفرامل الذي يعمل تلقائياً عند فشل الفرامل الرئيسية أو انقطاع الطاقة؟',
            options: [
              'Band Brake',
              'Auxiliary Brake',
              'Emergency Brake',
              'Hydraulic Brake'
            ],
            correctAnswer: 2
          }
        },
        en: {
          title: 'Drawworks',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Drawworks</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
The drawworks is the heart and primary driver of the hoisting system. It is a massive winch that provides the power needed to raise and lower the drill string and other equipment. It is one of the largest and heaviest pieces of equipment on the rig floor, requiring tremendous power to handle heavy loads in deep wells.
</p>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Main Components of the Drawworks</h2>

<div style="background: linear-gradient(135deg, #1e3a5f15, #1e3a5f10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #1e3a5f;">
<h3 style="color: #1e3a5f; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">📌 Essential Components</h3>
<ul style="list-style: none; padding: 0; line-height: 2.2;">
<li style="margin-bottom: 1rem;"><strong>1. Drum:</strong> A large cylinder around which the drilling line is wound. It has grooves to organize the wire rope and prevent tangling.</li>
<li style="margin-bottom: 1rem;"><strong>2. Power System:</strong> Provides power to rotate the drum. Can be:
<ul style="list-style-type: disc; padding-left: 1.5rem; margin-top: 0.5rem;">
<li>Diesel-mechanical engines (in older rigs)</li>
<li>DC or AC electric motors (in modern rigs)</li>
</ul>
</li>
<li style="margin-bottom: 1rem;"><strong>3. Transmission / Gear Box:</strong> Transfers power from engines to the drum while changing speed and torque ratios.</li>
<li><strong>4. Brake System:</strong> Controls lowering speed and stops the load.</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Drawworks Brake Systems</h2>

<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #059669;">
<h3 style="color: #059669; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">1️⃣ Main Brake (Band Brake)</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
A friction brake consisting of a metal band wrapped around a brake rim connected to the drum. Controlled manually via the brake lever. Used to control lowering speed and stop the load.
</p>
<p style="font-weight: bold; margin-bottom: 0.5rem;">Main Brake Components:</p>
<ul style="list-style: none; padding: 0; line-height: 1.8;">
<li>• Brake Rim</li>
<li>• Brake Band</li>
<li>• Brake Blocks / Linings</li>
<li>• Water Cooling System</li>
</ul>
</div>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #2563eb;">
<h3 style="color: #1e40af; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">2️⃣ Auxiliary Brake</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
Assists the main brake in controlling heavy loads and prevents main brake overheating. Common types:
</p>
<ul style="list-style: none; padding: 0; line-height: 2;">
<li>• <strong>Electromagnetic Brake (Eddy Current Brake):</strong> Uses magnetic field to slow rotation</li>
<li>• <strong>Hydrodynamic Brake:</strong> Uses fluid resistance to slow rotation</li>
</ul>
</div>

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #f59e0b;">
<h3 style="color: #92400e; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">3️⃣ Emergency Brake</h3>
<p style="line-height: 1.8;">
Safety brake that activates automatically when main brakes fail or power is lost. Usually disc or clutch type.
</p>
</div>

<div style="background: linear-gradient(135deg, #dc262615, #dc262610); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #dc2626;">
<h3 style="color: #dc2626; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">⚠️ Safety Warning</h3>
<p style="line-height: 1.8;">
All brake systems must be inspected before each shift. Brake failure can cause the load to drop at dangerous speeds, leading to fatal accidents.
</p>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Drawworks Power Requirements</h2>

<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #64748b;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
Drawworks are rated by:
</p>
<ul style="list-style: none; padding: 0; line-height: 2.2;">
<li>• <strong>Hoisting Capacity:</strong> Maximum load that can be lifted (in tons)</li>
<li>• <strong>Input Horsepower:</strong> Available power for operation</li>
<li>• <strong>Fast Line Speed:</strong> Wire rope pulling speed (ft/min)</li>
<li>• <strong>Drum Capacity:</strong> Length of wire rope that can be wound</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Drawworks Operation</h2>

<p style="line-height: 1.8; margin-bottom: 1rem;">
The driller controls the drawworks through a control panel that includes:
</p>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>Throttle for engine speed control</li>
<li>Brake lever for speed and stop control</li>
<li>Weight, depth, and speed indicators</li>
</ul>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
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
            { term: 'Hoisting Capacity', definition: 'Maximum load the drawworks can lift in tons' }
          ],
          practiceQuestion: {
            question: 'What type of brake activates automatically when main brakes fail or power is lost?',
            options: [
              'Band Brake',
              'Auxiliary Brake',
              'Emergency Brake',
              'Hydraulic Brake'
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
          title: 'حسابات نظام الرفع',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 حسابات نظام الرفع</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
فهم حسابات نظام الرفع ضروري لتصميم وتشغيل جهاز الحفر بكفاءة وأمان. تشمل هذه الحسابات الميزة الميكانيكية، الحمل على الخطاف، كفاءة النظام، والشد في حبل الحفر.
</p>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 الميزة الميكانيكية (Mechanical Advantage - MA)</h2>

<div style="background: linear-gradient(135deg, #1e3a5f15, #1e3a5f10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
الميزة الميكانيكية هي نسبة القوة الخارجة (الحمل المرفوع) إلى القوة الداخلة (الشد في Fast Line). في نظام البكرات:
</p>
<p style="font-size: 1.3rem; font-weight: bold; text-align: center; color: #1e3a5f; direction: ltr; background: #fff; padding: 1rem; border-radius: 8px;">
MA = n (Ideal Mechanical Advantage)
</p>
<p style="margin-top: 1rem; font-size: 0.95rem; text-align: center;">
حيث: n = عدد الخطوط بين Crown و Traveling blocks
</p>
</div>

<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #059669;">
<h3 style="color: #059669; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">📌 مثال:</h3>
<p style="line-height: 1.8;">
إذا كان عدد الخطوط = 10، فإن الميزة الميكانيكية المثالية = 10<br/>
أي أن 1 طن من القوة على Fast Line يمكنه رفع 10 أطنان (في الظروف المثالية)
</p>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 كفاءة البكرات (Block Efficiency)</h2>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #2563eb;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
في الواقع، تُفقد طاقة بسبب الاحتكاك في البكرات. كفاءة كل بكرة عادة تتراوح بين 96-98%. تُحسب الكفاءة الإجمالية:
</p>
<p style="font-size: 1.1rem; font-weight: bold; text-align: center; color: #1e40af; direction: ltr; background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
K = (E^n - 1) / (n × E^(n-1) × (E - 1))
</p>
<p style="font-size: 0.95rem; text-align: center;">
حيث: K = معامل الكفاءة، E = كفاءة البكرة الواحدة، n = عدد الخطوط
</p>
<p style="margin-top: 1rem; text-align: center;">أو باستخدام المعادلة المبسطة:</p>
<p style="font-size: 1.1rem; font-weight: bold; text-align: center; color: #1e40af; direction: ltr; background: #fff; padding: 0.75rem; border-radius: 8px;">
K ≈ E^(n/2)
</p>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 الحمل على الخطاف (Hook Load)</h2>

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #f59e0b;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
الحمل على الخطاف هو الوزن الكلي المعلق من الخطاف، ويشمل:
</p>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2; margin-bottom: 1rem;">
<li>وزن Traveling block و Hook والمعدات المساعدة</li>
<li>وزن سلسلة الحفر في الهواء</li>
<li>ناقص قوة الطفو من سائل الحفر</li>
</ul>
<p style="font-size: 1.1rem; font-weight: bold; text-align: center; color: #92400e; direction: ltr; background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 0.5rem;">
Hook Load = W_air × BF + W_TB
</p>
<p style="font-size: 1rem; text-align: center; color: #92400e; direction: ltr; background: #fff; padding: 0.75rem; border-radius: 8px;">
BF (Buoyancy Factor) = 1 - (MW / 65.5)
</p>
<p style="margin-top: 0.75rem; font-size: 0.9rem; text-align: center;">
حيث: MW = وزن الطين (ppg)
</p>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 الشد في Fast Line</h2>

<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #64748b;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
لحساب الشد الفعلي في Fast Line مع الأخذ بعين الاعتبار الكفاءة:
</p>
<p style="font-size: 1.2rem; font-weight: bold; text-align: center; color: #475569; direction: ltr; background: #fff; padding: 1rem; border-radius: 8px;">
F_fast = Hook Load / (n × K)
</p>
</div>

<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #059669;">
<h3 style="color: #059669; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">📌 مثال محلول:</h3>
<p style="font-weight: bold; margin-bottom: 0.5rem;">المعطيات:</p>
<ul style="list-style: none; padding: 0; line-height: 1.8; margin-bottom: 1rem;">
<li>• Hook Load = 400,000 lb</li>
<li>• عدد الخطوط (n) = 10</li>
<li>• كفاءة البكرة (E) = 0.96</li>
</ul>
<p style="font-weight: bold; margin-bottom: 0.5rem;">الحل:</p>
<p style="direction: ltr; line-height: 2;">
K ≈ 0.96^5 = 0.815<br/>
F_fast = 400,000 / (10 × 0.815) = <strong style="color: #059669;">49,080 lb</strong>
</p>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 الشد في Dead Line</h2>

<div style="background: linear-gradient(135deg, #1e3a5f15, #1e3a5f10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<p style="font-size: 1.2rem; font-weight: bold; text-align: center; color: #1e3a5f; direction: ltr; background: #fff; padding: 1rem; border-radius: 8px;">
F_dead = F_fast × E^n
</p>
</div>

<div style="background: linear-gradient(135deg, #dc262615, #dc262610); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #dc2626;">
<h3 style="color: #dc2626; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">⚠️ ملاحظة مهمة:</h3>
<p style="line-height: 1.8;">
Dead Line يتعرض لأقل شد في النظام، لذلك يُستخدم لقياس الحمل على الخطاف عبر خلية قياس (Load Cell) مركبة على Deadline Anchor.
</p>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 معامل السلامة (Safety Factor)</h2>

<div style="background: #fae8ff; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #a855f7;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
دائماً احسب معامل السلامة للتأكد من أن حبل الحفر يتحمل الحمل بأمان:
</p>
<p style="font-size: 1.2rem; font-weight: bold; text-align: center; color: #7c3aed; direction: ltr; background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
SF = Breaking Strength / F_fast
</p>
<p style="text-align: center; font-weight: bold; color: #7c3aed;">
يجب أن يكون SF ≥ 2 للتشغيل الآمن
</p>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>الميزة الميكانيكية المثالية تساوي عدد الخطوط</li>
<li>كفاءة النظام الفعلية أقل من المثالية بسبب احتكاك البكرات</li>
<li>Fast Line يتعرض لأعلى شد في النظام</li>
<li>معامل السلامة يجب أن يكون 2 أو أكثر</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Mechanical Advantage', definition: 'نسبة الحمل المرفوع إلى القوة المطبقة، تساوي عدد الخطوط في النظام المثالي' },
            { term: 'Buoyancy Factor', definition: 'معامل يقلل الوزن الظاهري للمعدات المغمورة في سائل الحفر' },
            { term: 'K Factor', definition: 'معامل الكفاءة الذي يعبر عن فقدان الطاقة بسبب احتكاك البكرات' },
            { term: 'Safety Factor', definition: 'نسبة قوة كسر الحبل إلى الشد الفعلي، يجب أن تكون 2 أو أكثر' }
          ],
          practiceQuestion: {
            question: 'إذا كان Hook Load = 500,000 lb وعدد الخطوط = 12 ومعامل الكفاءة K = 0.80، ما هو الشد في Fast Line؟',
            options: [
              '52,083 lb',
              '41,667 lb',
              '62,500 lb',
              '48,000 lb'
            ],
            correctAnswer: 0
          }
        },
        en: {
          title: 'Hoisting System Calculations',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Hoisting System Calculations</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
Understanding hoisting system calculations is essential for efficient and safe rig design and operation. These calculations include mechanical advantage, hook load, system efficiency, and wire rope tension.
</p>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Mechanical Advantage (MA)</h2>

<div style="background: linear-gradient(135deg, #1e3a5f15, #1e3a5f10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
Mechanical advantage is the ratio of output force (lifted load) to input force (fast line tension). In a block and tackle system:
</p>
<p style="font-size: 1.3rem; font-weight: bold; text-align: center; color: #1e3a5f; background: #fff; padding: 1rem; border-radius: 8px;">
MA = n (Ideal Mechanical Advantage)
</p>
<p style="margin-top: 1rem; font-size: 0.95rem; text-align: center;">
Where: n = number of lines between crown and traveling blocks
</p>
</div>

<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #059669;">
<h3 style="color: #059669; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">📌 Example:</h3>
<p style="line-height: 1.8;">
If number of lines = 10, then ideal mechanical advantage = 10<br/>
Meaning 1 ton of force on the fast line can lift 10 tons (under ideal conditions)
</p>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Block Efficiency</h2>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #2563eb;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
In reality, energy is lost due to friction in the sheaves. Each sheave efficiency typically ranges from 96-98%. Total efficiency is calculated as:
</p>
<p style="font-size: 1.1rem; font-weight: bold; text-align: center; color: #1e40af; background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
K = (E^n - 1) / (n × E^(n-1) × (E - 1))
</p>
<p style="font-size: 0.95rem; text-align: center;">
Where: K = efficiency factor, E = single sheave efficiency, n = number of lines
</p>
<p style="margin-top: 1rem; text-align: center;">Or use the simplified formula:</p>
<p style="font-size: 1.1rem; font-weight: bold; text-align: center; color: #1e40af; background: #fff; padding: 0.75rem; border-radius: 8px;">
K ≈ E^(n/2)
</p>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Hook Load</h2>

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #f59e0b;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
Hook load is the total weight suspended from the hook, including:
</p>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2; margin-bottom: 1rem;">
<li>Weight of traveling block, hook, and auxiliary equipment</li>
<li>Weight of drill string in air</li>
<li>Minus buoyancy force from drilling fluid</li>
</ul>
<p style="font-size: 1.1rem; font-weight: bold; text-align: center; color: #92400e; background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 0.5rem;">
Hook Load = W_air × BF + W_TB
</p>
<p style="font-size: 1rem; text-align: center; color: #92400e; background: #fff; padding: 0.75rem; border-radius: 8px;">
BF (Buoyancy Factor) = 1 - (MW / 65.5)
</p>
<p style="margin-top: 0.75rem; font-size: 0.9rem; text-align: center;">
Where: MW = mud weight (ppg)
</p>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Fast Line Tension</h2>

<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #64748b;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
To calculate actual fast line tension considering efficiency:
</p>
<p style="font-size: 1.2rem; font-weight: bold; text-align: center; color: #475569; background: #fff; padding: 1rem; border-radius: 8px;">
F_fast = Hook Load / (n × K)
</p>
</div>

<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #059669;">
<h3 style="color: #059669; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">📌 Solved Example:</h3>
<p style="font-weight: bold; margin-bottom: 0.5rem;">Given:</p>
<ul style="list-style: none; padding: 0; line-height: 1.8; margin-bottom: 1rem;">
<li>• Hook Load = 400,000 lb</li>
<li>• Number of lines (n) = 10</li>
<li>• Sheave efficiency (E) = 0.96</li>
</ul>
<p style="font-weight: bold; margin-bottom: 0.5rem;">Solution:</p>
<p style="line-height: 2;">
K ≈ 0.96^5 = 0.815<br/>
F_fast = 400,000 / (10 × 0.815) = <strong style="color: #059669;">49,080 lb</strong>
</p>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Dead Line Tension</h2>

<div style="background: linear-gradient(135deg, #1e3a5f15, #1e3a5f10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<p style="font-size: 1.2rem; font-weight: bold; text-align: center; color: #1e3a5f; background: #fff; padding: 1rem; border-radius: 8px;">
F_dead = F_fast × E^n
</p>
</div>

<div style="background: linear-gradient(135deg, #dc262615, #dc262610); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #dc2626;">
<h3 style="color: #dc2626; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">⚠️ Important Note:</h3>
<p style="line-height: 1.8;">
The dead line experiences the lowest tension in the system, which is why it's used to measure hook load via a load cell mounted on the deadline anchor.
</p>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Safety Factor</h2>

<div style="background: #fae8ff; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #a855f7;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
Always calculate the safety factor to ensure the wire rope can safely handle the load:
</p>
<p style="font-size: 1.2rem; font-weight: bold; text-align: center; color: #7c3aed; background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
SF = Breaking Strength / F_fast
</p>
<p style="text-align: center; font-weight: bold; color: #7c3aed;">
SF should be ≥ 2 for safe operation
</p>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
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
            { term: 'Safety Factor', definition: 'Ratio of wire rope breaking strength to actual tension, should be 2 or more' }
          ],
          practiceQuestion: {
            question: 'If Hook Load = 500,000 lb, number of lines = 12, and efficiency factor K = 0.80, what is the Fast Line tension?',
            options: [
              '52,083 lb',
              '41,667 lb',
              '62,500 lb',
              '48,000 lb'
            ],
            correctAnswer: 0
          }
        }
      }
    },
    {
      day: 5,
      type: 'learning',
      content: {
        ar: {
          title: 'صيانة حبل الحفر وحساب Ton-Mile',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 صيانة حبل الحفر والسلامة</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
صيانة حبل الحفر من أهم متطلبات السلامة في عمليات الحفر. حبل الحفر التالف يمكن أن يؤدي إلى كوارث، لذلك يجب اتباع برنامج صيانة صارم يتضمن الفحص الدوري، التزييت، وعمليات Slip and Cut.
</p>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 فحص حبل الحفر</h2>

<div style="background: linear-gradient(135deg, #dc262615, #dc262610); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #dc2626;">
<h3 style="color: #dc2626; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">📌 علامات تلف حبل الحفر التي تستوجب الاستبدال:</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li><strong>الأسلاك المكسورة (Broken Wires):</strong> أكثر من 6 أسلاك مكسورة في lay واحد أو 3 في خيط واحد</li>
<li><strong>تقلص القطر (Diameter Reduction):</strong> أكثر من 1/32 بوصة من القطر الأصلي</li>
<li><strong>التآكل (Corrosion):</strong> صدأ ظاهر أو تغير لون الحبل</li>
<li><strong>الالتواء (Kinking):</strong> أي انحناءات حادة أو تشوه دائم</li>
<li><strong>Bird Caging:</strong> انفصال الخيوط وانتفاخها للخارج</li>
<li><strong>التسطح (Flattening):</strong> فقدان الشكل الدائري للمقطع</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 عملية Slip and Cut</h2>

<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #059669;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
عملية دورية لتوزيع التآكل على طول حبل الحفر. تتضمن سحب الحبل مسافة محددة وقطع الجزء الأكثر تآكلاً (عادة من طرف Dead Line).
</p>
<h4 style="color: #059669; font-weight: bold; margin-bottom: 0.75rem;">خطوات Slip and Cut:</h4>
<ol style="padding-right: 1.5rem; line-height: 2;">
<li>فك حبل الحفر من Deadline Anchor</li>
<li>سحب كمية محددة من الحبل من طبلة الدروركس</li>
<li>قطع الجزء التالف من طرف Dead Line</li>
<li>إعادة تثبيت حبل الحفر بالمرساة</li>
<li>تسجيل العملية في Wire Line Record</li>
</ol>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 حساب Ton-Mile</h2>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #2563eb;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
Ton-Mile هو مقياس للعمل المنجز بواسطة حبل الحفر، يُستخدم لتحديد موعد إجراء Slip and Cut واستبدال الحبل. يُحسب بضرب الحمل المرفوع (بالأطنان) في المسافة المقطوعة (بالأميال).
</p>
<p style="font-size: 1.2rem; font-weight: bold; text-align: center; color: #1e40af; direction: ltr; background: #fff; padding: 1rem; border-radius: 8px;">
Ton-Mile = Σ (Load × Distance)
</p>
</div>

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #f59e0b;">
<h3 style="color: #92400e; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">معادلات Ton-Mile للعمليات المختلفة:</h3>

<div style="margin-bottom: 1rem;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">1. الرحلة الكاملة (Round Trip):</p>
<p style="direction: ltr; background: #fff; padding: 0.75rem; border-radius: 8px; font-size: 0.95rem;">
T = (D/5280) × [(W_m × L_s) + (2 × W_BHA × D) + (W_dp × D²/L_s)]
</p>
</div>

<div style="margin-bottom: 1rem;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">2. الحفر (Drilling):</p>
<p style="direction: ltr; background: #fff; padding: 0.75rem; border-radius: 8px; font-size: 0.95rem;">
T = (3 × D × W_m + 2 × D × W_BHA) / (5280 × 2)
</p>
</div>

<div>
<p style="font-weight: bold; margin-bottom: 0.5rem;">3. تنزيل الكيسنق (Casing):</p>
<p style="direction: ltr; background: #fff; padding: 0.75rem; border-radius: 8px; font-size: 0.95rem;">
T = (D × W_casing × BF) / 10,560
</p>
</div>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 جدول Slip and Cut</h2>

<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #64748b;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
توقيت Slip and Cut يعتمد على Ton-Miles المتراكمة. القيم النموذجية:
</p>
<table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 12px; text-align: right;">نوع العملية</th>
<th style="padding: 12px; text-align: right;">Ton-Miles قبل Slip</th>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #e2e8f0;">الحفر العادي</td>
<td style="padding: 12px; border: 1px solid #e2e8f0;">500 - 800</td>
</tr>
<tr style="background: #ffffff;">
<td style="padding: 12px; border: 1px solid #e2e8f0;">تنزيل الكيسنق</td>
<td style="padding: 12px; border: 1px solid #e2e8f0;">150 - 300</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #e2e8f0;">عمليات الصيد</td>
<td style="padding: 12px; border: 1px solid #e2e8f0;">100 - 200</td>
</tr>
</table>
</div>

<div style="background: linear-gradient(135deg, #dc262615, #dc262610); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #dc2626;">
<h3 style="color: #dc2626; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">⚠️ تحذير:</h3>
<p style="line-height: 1.8;">
يجب تسجيل جميع عمليات Ton-Mile في Wire Line Record. إهمال التتبع يمكن أن يؤدي إلى فشل مفاجئ لحبل الحفر.
</p>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 تزييت حبل الحفر</h2>

<p style="line-height: 1.8; margin-bottom: 1rem;">
التزييت الدوري ضروري لحماية حبل الحفر من التآكل والصدأ. يجب استخدام زيوت خاصة تتغلغل حتى قلب الحبل.
</p>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>فحص حبل الحفر يومياً للكشف عن علامات التلف</li>
<li>عملية Slip and Cut توزع التآكل وتطيل عمر الحبل</li>
<li>Ton-Mile يقيس العمل المنجز ويحدد موعد الصيانة</li>
<li>التزييت الدوري يحمي من الصدأ والتآكل</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Ton-Mile', definition: 'مقياس للعمل المنجز بواسطة حبل الحفر، يُحسب بضرب الحمل في المسافة' },
            { term: 'Slip and Cut', definition: 'عملية سحب وقطع حبل الحفر لتوزيع التآكل وإزالة الجزء التالف' },
            { term: 'Bird Caging', definition: 'انتفاخ وانفصال خيوط الحبل نتيجة الحمل الزائد أو التآكل' },
            { term: 'Wire Line Record', definition: 'سجل يوثق جميع عمليات الصيانة و Ton-Miles المتراكمة' }
          ],
          practiceQuestion: {
            question: 'كم عدد الأسلاك المكسورة في خيط واحد (strand) التي تستوجب استبدال حبل الحفر؟',
            options: [
              '1 سلك',
              '2 سلك',
              '3 أسلاك',
              '6 أسلاك'
            ],
            correctAnswer: 2
          }
        },
        en: {
          title: 'Wire Rope Maintenance and Ton-Mile Calculation',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Drilling Line Maintenance and Safety</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
Wire rope maintenance is one of the most critical safety requirements in drilling operations. A damaged wire rope can lead to disasters, so a strict maintenance program including regular inspection, lubrication, and slip and cut operations must be followed.
</p>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Wire Rope Inspection</h2>

<div style="background: linear-gradient(135deg, #dc262615, #dc262610); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #dc2626;">
<h3 style="color: #dc2626; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">📌 Wire Rope Damage Signs Requiring Replacement:</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li><strong>Broken Wires:</strong> More than 6 broken wires in one rope lay or 3 in one strand</li>
<li><strong>Diameter Reduction:</strong> More than 1/32 inch reduction from original diameter</li>
<li><strong>Corrosion:</strong> Visible rust or wire rope discoloration</li>
<li><strong>Kinking:</strong> Any sharp bends or permanent deformation</li>
<li><strong>Bird Caging:</strong> Strand separation and bulging outward</li>
<li><strong>Flattening:</strong> Loss of round cross-section</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Slip and Cut Operation</h2>

<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #059669;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
A periodic operation to distribute wear along the wire rope length. It involves slipping the rope a specified distance and cutting the most worn section (usually from the dead line end).
</p>
<h4 style="color: #059669; font-weight: bold; margin-bottom: 0.75rem;">Slip and Cut Steps:</h4>
<ol style="padding-left: 1.5rem; line-height: 2;">
<li>Release wire rope from deadline anchor</li>
<li>Pull specified amount of rope from drawworks drum</li>
<li>Cut the damaged section from the dead line end</li>
<li>Re-attach wire rope to anchor</li>
<li>Record operation in wire line record</li>
</ol>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Ton-Mile Calculation</h2>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #2563eb;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
Ton-Mile is a measure of the work performed by the wire rope, used to determine when to perform slip and cut and wire rope replacement. It is calculated by multiplying the lifted load (in tons) by the distance traveled (in miles).
</p>
<p style="font-size: 1.2rem; font-weight: bold; text-align: center; color: #1e40af; background: #fff; padding: 1rem; border-radius: 8px;">
Ton-Mile = Σ (Load × Distance)
</p>
</div>

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #f59e0b;">
<h3 style="color: #92400e; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">Ton-Mile Equations for Different Operations:</h3>

<div style="margin-bottom: 1rem;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">1. Round Trip:</p>
<p style="background: #fff; padding: 0.75rem; border-radius: 8px; font-size: 0.95rem;">
T = (D/5280) × [(W_m × L_s) + (2 × W_BHA × D) + (W_dp × D²/L_s)]
</p>
</div>

<div style="margin-bottom: 1rem;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">2. Drilling:</p>
<p style="background: #fff; padding: 0.75rem; border-radius: 8px; font-size: 0.95rem;">
T = (3 × D × W_m + 2 × D × W_BHA) / (5280 × 2)
</p>
</div>

<div>
<p style="font-weight: bold; margin-bottom: 0.5rem;">3. Casing:</p>
<p style="background: #fff; padding: 0.75rem; border-radius: 8px; font-size: 0.95rem;">
T = (D × W_casing × BF) / 10,560
</p>
</div>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Slip and Cut Schedule</h2>

<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #64748b;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
Slip and cut timing depends on accumulated Ton-Miles. Typical values:
</p>
<table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 12px; text-align: left;">Operation Type</th>
<th style="padding: 12px; text-align: left;">Ton-Miles Before Slip</th>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #e2e8f0;">Normal Drilling</td>
<td style="padding: 12px; border: 1px solid #e2e8f0;">500 - 800</td>
</tr>
<tr style="background: #ffffff;">
<td style="padding: 12px; border: 1px solid #e2e8f0;">Running Casing</td>
<td style="padding: 12px; border: 1px solid #e2e8f0;">150 - 300</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #e2e8f0;">Fishing Operations</td>
<td style="padding: 12px; border: 1px solid #e2e8f0;">100 - 200</td>
</tr>
</table>
</div>

<div style="background: linear-gradient(135deg, #dc262615, #dc262610); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #dc2626;">
<h3 style="color: #dc2626; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">⚠️ Warning:</h3>
<p style="line-height: 1.8;">
All Ton-Mile operations must be recorded in the Wire Line Record. Neglecting tracking can lead to sudden wire rope failure.
</p>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Wire Rope Lubrication</h2>

<p style="line-height: 1.8; margin-bottom: 1rem;">
Regular lubrication is essential to protect wire rope from wear and corrosion. Special oils that penetrate to the wire rope core should be used.
</p>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
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
            { term: 'Wire Line Record', definition: 'Record documenting all maintenance operations and accumulated Ton-Miles' }
          ],
          practiceQuestion: {
            question: 'How many broken wires in one strand require wire rope replacement?',
            options: [
              '1 wire',
              '2 wires',
              '3 wires',
              '6 wires'
            ],
            correctAnswer: 2
          }
        }
      }
    },
    {
      day: 6,
      type: 'quiz',
      quiz: {
        ar: [
            {
              question: 'ما هو المكون الثابت في قمة البرج الذي يمر من خلاله حبل الحفر؟',
              options: ['Traveling Block', 'Crown Block', 'Hook', 'Drawworks'],
              correctAnswer: 1
            },
            {
              question: 'أي جزء من حبل الحفر يتعرض لأعلى إجهاد؟',
              options: ['Dead Line', 'Fast Line', 'Core', 'Strands'],
              correctAnswer: 1
            },
            {
              question: 'ما هو نوع الفرامل الذي يستخدم المجال المغناطيسي لإبطاء الدوران؟',
              options: ['Band Brake', 'Eddy Current Brake', 'Emergency Brake', 'Hydraulic Brake'],
              correctAnswer: 1
            },
            {
              question: 'إذا كان عدد الخطوط n = 8، ما هي الميزة الميكانيكية المثالية؟',
              options: ['4', '6', '8', '16'],
              correctAnswer: 2
            },
            {
              question: 'ما هو معامل الطفو (BF) إذا كان وزن الطين 13 ppg؟',
              options: ['0.80', '0.85', '0.90', '0.75'],
              correctAnswer: 0
            },
            {
              question: 'كم عدد الأسلاك المكسورة في rope lay واحد التي تستوجب استبدال الحبل؟',
              options: ['3', '4', '5', '6'],
              correctAnswer: 3
            },
            {
              question: 'ما هو الغرض الرئيسي من عملية Slip and Cut؟',
              options: ['زيادة طول الحبل', 'توزيع التآكل على طول الحبل', 'تقليل الحمل على الخطاف', 'زيادة سرعة الرفع'],
              correctAnswer: 1
            },
            {
              question: 'ما هو الحد الأدنى لمعامل السلامة (Safety Factor) للتشغيل الآمن؟',
              options: ['1', '1.5', '2', '3'],
              correctAnswer: 2
            },
            {
              question: 'أي نوع من حبال الحفر يوفر مرونة أعلى؟',
              options: ['6×19', '6×37', '6×7', '6×12'],
              correctAnswer: 1
            },
            {
              question: 'ما هي وحدة قياس Ton-Mile؟',
              options: ['طن فقط', 'ميل فقط', 'طن × ميل', 'طن / ميل'],
              correctAnswer: 2
            }
          ],
          en: [
            {
              question: 'What is the stationary component at the top of the derrick through which the drilling line passes?',
              options: ['Traveling Block', 'Crown Block', 'Hook', 'Drawworks'],
              correctAnswer: 1
            },
            {
              question: 'Which part of the drilling line experiences the highest stress?',
              options: ['Dead Line', 'Fast Line', 'Core', 'Strands'],
              correctAnswer: 1
            },
            {
              question: 'What type of brake uses magnetic field to slow rotation?',
              options: ['Band Brake', 'Eddy Current Brake', 'Emergency Brake', 'Hydraulic Brake'],
              correctAnswer: 1
            },
            {
              question: 'If number of lines n = 8, what is the ideal mechanical advantage?',
              options: ['4', '6', '8', '16'],
              correctAnswer: 2
            },
            {
              question: 'What is the Buoyancy Factor (BF) if mud weight is 13 ppg?',
              options: ['0.80', '0.85', '0.90', '0.75'],
              correctAnswer: 0
            },
            {
              question: 'How many broken wires in one rope lay require wire rope replacement?',
              options: ['3', '4', '5', '6'],
              correctAnswer: 3
            },
            {
              question: 'What is the main purpose of Slip and Cut operation?',
              options: ['Increase rope length', 'Distribute wear along the rope', 'Reduce hook load', 'Increase hoisting speed'],
              correctAnswer: 1
            },
            {
              question: 'What is the minimum Safety Factor for safe operation?',
              options: ['1', '1.5', '2', '3'],
              correctAnswer: 2
            },
            {
              question: 'Which type of drilling wire rope provides higher flexibility?',
              options: ['6×19', '6×37', '6×7', '6×12'],
              correctAnswer: 1
            },
            {
              question: 'What is the unit of measurement for Ton-Mile?',
              options: ['Ton only', 'Mile only', 'Ton × Mile', 'Ton / Mile'],
              correctAnswer: 2
          }
        ]
      }
    },
    {
      day: 7,
      type: 'project',
      project: {
        ar: {
          title: 'تحليل نظام الرفع',
          description: 'قم بتحليل نظام رفع لجهاز حفر وحساب المعاملات الأساسية',
          instructions: [
            'احسب معامل الكفاءة K باستخدام المعادلة المبسطة',
            'احسب الشد في Fast Line',
            'احسب معامل السلامة (Safety Factor)',
            'احسب Derrick Load وتأكد من أنه ضمن سعة البرج (650,000 lbs)',
            'حدد هل النظام آمن للتشغيل مع التبرير',
            'المعطيات: Hook Load = 350,000 lbs، عدد الخطوط = 12، كفاءة البكرة = 96%، قوة كسر الحبل = 150,000 lbs'
          ],
          submissionType: 'text'
        },
        en: {
          title: 'Hoisting System Analysis',
          description: 'Analyze a drilling rig hoisting system and calculate essential parameters',
          instructions: [
            'Calculate efficiency factor K using the simplified formula',
            'Calculate Fast Line tension',
            'Calculate Safety Factor',
            'Calculate Derrick Load and verify it is within derrick capacity (650,000 lbs)',
            'Determine if the system is safe for operation with justification',
            'Given: Hook Load = 350,000 lbs, Number of lines = 12, Sheave efficiency = 96%, Wire rope breaking strength = 150,000 lbs'
          ],
          submissionType: 'text'
        }
      }
    }
  ]
};
