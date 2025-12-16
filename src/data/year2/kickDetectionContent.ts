import { WeeklyLesson } from '../weeklyContent';

export const kickDetectionLesson: WeeklyLesson = {
  lessonId: 'kick-detection',
  days: [
    {
      day: 1,
      type: 'learning',
      content: {
        ar: {
          title: 'مقدمة في التحكم بالبئر وكشف التدفق',
          explanation: `<section>
<h2 style="color: #1a365d;" class="text-xl font-bold mb-4">مقدمة في التحكم بالبئر وكشف التدفق</h2>

<p class="mb-4">التحكم في البئر (Well Control) هو أحد أهم جوانب عمليات الحفر وأكثرها حساسية. يشير إلى مجموعة الإجراءات والتقنيات المستخدمة لمنع التدفق غير المنضبط لسوائل التكوين إلى البئر والسيطرة عليه إذا حدث.</p>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">ما هو التدفق (Kick)؟</h3>

<p class="mb-4"><strong>التعريف:</strong> التدفق هو دخول غير مرغوب لسوائل التكوين (نفط، غاز، أو ماء) إلى البئر بسبب انخفاض الضغط الهيدروستاتيكي تحت ضغط التكوين.</p>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">أسباب حدوث التدفق</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li><strong>عدم كفاية وزن الطين:</strong> وزن طين أقل من المطلوب لموازنة ضغط التكوين</li>
<li><strong>تأثير Swab:</strong> انخفاض الضغط عند سحب الأنابيب بسرعة</li>
<li><strong>عدم ملء البئر بشكل صحيح:</strong> أثناء عمليات الرحلة</li>
<li><strong>فقدان الدورة:</strong> انخفاض مستوى الطين في البئر</li>
<li><strong>اختراق منطقة ضغط غير طبيعي:</strong> دخول تكوين بضغط أعلى من المتوقع</li>
<li><strong>تلوث الطين بالغاز:</strong> قطع الغاز الذي يقلل كثافة الطين</li>
</ul>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">أنواع سوائل التدفق</h3>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">1. تدفق الغاز (Gas Kick)</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>الأكثر خطورة بسبب قابليته للتمدد</li>
<li>يتمدد بشكل كبير عند الصعود للسطح</li>
<li>يمكن أن يتحول بسرعة إلى انفجار</li>
</ul>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">2. تدفق النفط (Oil Kick)</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>أقل خطورة من الغاز</li>
<li>قابلية تمدد محدودة</li>
<li>أسهل في السيطرة عادةً</li>
</ul>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">3. تدفق الماء المالح (Salt Water Kick)</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>الأقل خطورة</li>
<li>غير قابل للتمدد تقريباً</li>
<li>قد يحتوي على غاز H2S سام</li>
</ul>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">الفرق بين Kick و Blowout</h3>

<ul class="list-disc list-inside space-y-2 mb-4">
<li><strong>Kick (التدفق):</strong> دخول مبدئي للسوائل يمكن السيطرة عليه</li>
<li><strong>Blowout (الانفجار):</strong> تدفق غير منضبط للسوائل للسطح أو للتكوينات المجاورة</li>
</ul>

<p style="color: #c53030;" class="mb-4"><strong>قاعدة ذهبية:</strong> كل انفجار بدأ كتدفق صغير. الكشف المبكر والاستجابة السريعة هما مفتاح منع الكوارث.</p>
</section>`,
          keyTerms: [
            { term: 'التدفق (Kick)', definition: 'دخول غير مرغوب لسوائل التكوين إلى البئر' },
            { term: 'الانفجار (Blowout)', definition: 'تدفق غير منضبط للسوائل للسطح أو التكوينات' },
            { term: 'التحكم في البئر', definition: 'إجراءات منع والسيطرة على التدفقات غير المرغوبة' },
            { term: 'ضغط التكوين', definition: 'ضغط السوائل في مسام الصخور' },
            { term: 'الضغط الهيدروستاتيكي', definition: 'ضغط عمود سائل الحفر' }
          ],
          practiceQuestion: {
            question: 'ما هو أخطر أنواع التدفق ولماذا؟',
            options: ['تدفق النفط لأنه قابل للاشتعال', 'تدفق الغاز لأنه يتمدد بشكل كبير', 'تدفق الماء لأنه يسبب التآكل', 'جميعهم بنفس الخطورة'],
            correctAnswer: 1
          }
        },
        en: {
          title: 'Introduction to Well Control and Kick Detection',
          explanation: `<section>
<h2 style="color: #1a365d;" class="text-xl font-bold mb-4">Introduction to Well Control and Kick Detection</h2>

<p class="mb-4">Well Control is one of the most critical and sensitive aspects of drilling operations. It refers to the procedures and techniques used to prevent and control uncontrolled flow of formation fluids into the wellbore.</p>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">What is a Kick?</h3>

<p class="mb-4"><strong>Definition:</strong> A kick is an unwanted entry of formation fluids (oil, gas, or water) into the wellbore due to hydrostatic pressure falling below formation pressure.</p>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">Causes of Kicks</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li><strong>Insufficient Mud Weight:</strong> Mud weight lower than required to balance formation pressure</li>
<li><strong>Swab Effect:</strong> Pressure reduction when pulling pipe too fast</li>
<li><strong>Improper Hole Fill:</strong> During tripping operations</li>
<li><strong>Lost Circulation:</strong> Reduction in mud level in the well</li>
<li><strong>Penetrating Abnormal Pressure Zone:</strong> Entering formation with higher than expected pressure</li>
<li><strong>Gas-Cut Mud:</strong> Gas contamination reducing mud density</li>
</ul>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">Types of Kick Fluids</h3>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">1. Gas Kick</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>Most dangerous due to expansion capability</li>
<li>Expands significantly when rising to surface</li>
<li>Can quickly escalate to a blowout</li>
</ul>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">2. Oil Kick</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>Less dangerous than gas</li>
<li>Limited expansion capability</li>
<li>Usually easier to control</li>
</ul>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">3. Salt Water Kick</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>Least dangerous</li>
<li>Almost non-expandable</li>
<li>May contain toxic H2S gas</li>
</ul>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">Difference Between Kick and Blowout</h3>

<ul class="list-disc list-inside space-y-2 mb-4">
<li><strong>Kick:</strong> Initial controllable fluid entry</li>
<li><strong>Blowout:</strong> Uncontrolled flow of fluids to surface or adjacent formations</li>
</ul>

<p style="color: #c53030;" class="mb-4"><strong>Golden Rule:</strong> Every blowout started as a small kick. Early detection and rapid response are key to preventing disasters.</p>
</section>`,
          keyTerms: [
            { term: 'Kick', definition: 'Unwanted entry of formation fluids into the wellbore' },
            { term: 'Blowout', definition: 'Uncontrolled flow of fluids to surface or formations' },
            { term: 'Well Control', definition: 'Procedures to prevent and control unwanted flows' },
            { term: 'Formation Pressure', definition: 'Pressure of fluids in rock pores' },
            { term: 'Hydrostatic Pressure', definition: 'Pressure of drilling fluid column' }
          ],
          practiceQuestion: {
            question: 'What is the most dangerous type of kick and why?',
            options: ['Oil kick because it is flammable', 'Gas kick because it expands significantly', 'Water kick because it causes corrosion', 'All are equally dangerous'],
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
          title: 'علامات وإشارات التدفق',
          explanation: `<section>
<h2 style="color: #1a365d;" class="text-xl font-bold mb-4">علامات وإشارات التدفق المبكرة</h2>

<p class="mb-4">الكشف المبكر عن التدفق أمر حاسم لنجاح عمليات التحكم في البئر. هناك نوعان من المؤشرات: أولية (تحذيرية) وإيجابية (مؤكدة).</p>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">العلامات الأولية (التحذيرية)</h3>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">1. زيادة معدل الاختراق (Drilling Break)</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>زيادة مفاجئة في سرعة الحفر</li>
<li>قد تشير إلى دخول منطقة مسامية أو ضغط عالي</li>
<li>تتطلب اهتماماً فورياً ومراقبة دقيقة</li>
</ul>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">2. تغير في الفتات (Cuttings Changes)</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>زيادة حجم أو كمية الفتات</li>
<li>تغير في شكل أو لون الفتات</li>
<li>ظهور فتات جديدة مختلفة</li>
</ul>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">3. زيادة نسبة الغاز في الطين</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>ارتفاع قراءات كاشف الغاز</li>
<li>غاز الاتصال (Connection Gas): يظهر بعد كل اتصال</li>
<li>غاز الرحلة (Trip Gas): يظهر بعد عمليات الرحلة</li>
</ul>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">4. تغير في خصائص الطين</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>انخفاض وزن الطين الخارج</li>
<li>زيادة محتوى الكلوريدات (ماء التكوين)</li>
<li>تغير في اللزوجة</li>
</ul>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">العلامات الإيجابية (المؤكدة)</h3>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">1. زيادة في حجم الحوض (Pit Gain)</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>أهم وأوضح علامة على التدفق</li>
<li>تشير إلى دخول سوائل للبئر</li>
<li>يجب التحقق فوراً من أي زيادة غير مبررة</li>
</ul>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">2. زيادة معدل التدفق الخارج</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>تدفق خارج أكثر من الداخل</li>
<li>يُقاس بمقاييس التدفق المستمرة</li>
</ul>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">3. التدفق مع إيقاف المضخات</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>علامة قاطعة على التدفق</li>
<li>يجب إغلاق البئر فوراً</li>
</ul>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">4. عدم كفاية حجم الملء أثناء الرحلة</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>البئر يأخذ طين أقل من المتوقع</li>
<li>يشير إلى دخول سوائل تملأ المساحة</li>
</ul>

<p style="color: #c53030;" class="mb-4"><strong>تحذير:</strong> عند ملاحظة أي علامة إيجابية، يجب إيقاف العمليات فوراً والتحقق من البئر!</p>
</section>`,
          keyTerms: [
            { term: 'زيادة الاختراق (Drilling Break)', definition: 'زيادة مفاجئة في سرعة الحفر' },
            { term: 'زيادة الحوض (Pit Gain)', definition: 'زيادة في مستوى الطين في الأحواض' },
            { term: 'غاز الاتصال', definition: 'غاز يظهر في الطين بعد كل اتصال' },
            { term: 'غاز الرحلة', definition: 'غاز يظهر بعد عمليات السحب أو الإنزال' },
            { term: 'كاشف الغاز', definition: 'جهاز لقياس نسبة الغاز في الطين الخارج' }
          ],
          practiceQuestion: {
            question: 'ما هي أوضح علامة إيجابية على حدوث تدفق؟',
            options: ['زيادة معدل الاختراق', 'زيادة حجم الحوض', 'تغير لون الفتات', 'ارتفاع درجة الحرارة'],
            correctAnswer: 1
          }
        },
        en: {
          title: 'Kick Warning Signs and Indicators',
          explanation: `<section>
<h2 style="color: #1a365d;" class="text-xl font-bold mb-4">Early Kick Warning Signs and Indicators</h2>

<p class="mb-4">Early kick detection is crucial for successful well control operations. There are two types of indicators: primary (warning) and positive (confirmed).</p>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">Primary (Warning) Signs</h3>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">1. Drilling Break</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>Sudden increase in drilling rate</li>
<li>May indicate entering a porous or high-pressure zone</li>
<li>Requires immediate attention and careful monitoring</li>
</ul>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">2. Cuttings Changes</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>Increase in cuttings size or quantity</li>
<li>Change in cuttings shape or color</li>
<li>Appearance of different new cuttings</li>
</ul>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">3. Increased Gas in Mud</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>Rising gas detector readings</li>
<li>Connection Gas: appears after each connection</li>
<li>Trip Gas: appears after tripping operations</li>
</ul>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">4. Changes in Mud Properties</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>Decrease in mud weight out</li>
<li>Increase in chloride content (formation water)</li>
<li>Change in viscosity</li>
</ul>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">Positive (Confirmed) Signs</h3>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">1. Pit Gain</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>Most important and clear sign of a kick</li>
<li>Indicates fluid entry into the well</li>
<li>Any unexplained gain must be verified immediately</li>
</ul>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">2. Increased Flow Rate Out</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>More flow out than in</li>
<li>Measured by continuous flow meters</li>
</ul>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">3. Flow with Pumps Off</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>Definitive sign of a kick</li>
<li>Well must be shut in immediately</li>
</ul>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">4. Insufficient Fill Volume During Trips</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>Well takes less mud than expected</li>
<li>Indicates fluid entry filling the space</li>
</ul>

<p style="color: #c53030;" class="mb-4"><strong>Warning:</strong> Upon observing any positive sign, stop operations immediately and check the well!</p>
</section>`,
          keyTerms: [
            { term: 'Drilling Break', definition: 'Sudden increase in drilling rate' },
            { term: 'Pit Gain', definition: 'Increase in mud level in the pits' },
            { term: 'Connection Gas', definition: 'Gas appearing in mud after each connection' },
            { term: 'Trip Gas', definition: 'Gas appearing after pulling or running operations' },
            { term: 'Gas Detector', definition: 'Device to measure gas percentage in return mud' }
          ],
          practiceQuestion: {
            question: 'What is the clearest positive sign of a kick?',
            options: ['Increased drilling rate', 'Pit gain', 'Change in cuttings color', 'Temperature rise'],
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
          title: 'إجراءات إغلاق البئر',
          explanation: `<section>
<h2 style="color: #1a365d;" class="text-xl font-bold mb-4">إجراءات إغلاق البئر (Shut-In Procedures)</h2>

<p class="mb-4">عند تأكيد حدوث تدفق، يجب إغلاق البئر فوراً لمنع دخول المزيد من سوائل التكوين. هناك طريقتان رئيسيتان للإغلاق.</p>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">معدات التحكم في البئر (BOP)</h3>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">مكونات منظومة BOP</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li><strong>السدادات الحلقية (Annular Preventer):</strong> تغلق حول أي شكل أو حجم</li>
<li><strong>سدادات الماسورة (Pipe Rams):</strong> تغلق حول حجم محدد من الأنابيب</li>
<li><strong>سدادات القص (Shear Rams):</strong> تقطع الأنابيب وتغلق البئر</li>
<li><strong>سدادات العمى (Blind Rams):</strong> تغلق البئر المفتوح</li>
</ul>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">طريقة الإغلاق الناعم (Soft Shut-In)</h3>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">الخطوات:</h4>
<ol class="list-decimal list-inside space-y-2 mb-4">
<li>رفع Kelly/Top Drive فوق الطاولة</li>
<li>إيقاف المضخات</li>
<li>فتح صمام الخط الخنقي (Choke Line Valve)</li>
<li>إغلاق BOP (عادة الحلقي)</li>
<li>إغلاق صمام الخنق (Choke) ببطء</li>
<li>قراءة وتسجيل الضغوط</li>
</ol>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">مميزات الإغلاق الناعم:</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>يقلل صدمات الضغط على التكوين</li>
<li>أقل احتمالية للتسبب في تكسير إضافي</li>
<li>يسمح بقراءة دقيقة للضغوط</li>
</ul>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">طريقة الإغلاق الصلب (Hard Shut-In)</h3>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">الخطوات:</h4>
<ol class="list-decimal list-inside space-y-2 mb-4">
<li>رفع Kelly/Top Drive فوق الطاولة</li>
<li>إيقاف المضخات</li>
<li>إغلاق BOP فوراً (مع خط الخنق مغلق)</li>
<li>قراءة وتسجيل الضغوط</li>
</ol>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">مميزات الإغلاق الصلب:</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>أسرع من الإغلاق الناعم</li>
<li>يقلل حجم التدفق الداخل</li>
<li>مفضل في معظم الحالات حالياً</li>
</ul>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">قراءة الضغوط بعد الإغلاق</h3>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">الضغوط المقاسة:</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li><strong>SIDPP:</strong> ضغط سلسلة الحفر المغلقة (Shut-In Drill Pipe Pressure)</li>
<li><strong>SICP:</strong> ضغط التغليف المغلق (Shut-In Casing Pressure)</li>
<li><strong>زيادة الحوض:</strong> حجم التدفق الداخل</li>
</ul>

<p style="color: #c53030;" class="mb-4"><strong>هام:</strong> انتظر حتى تستقر الضغوط (10-15 دقيقة عادةً) قبل التسجيل.</p>
</section>`,
          keyTerms: [
            { term: 'الإغلاق الناعم', definition: 'إغلاق البئر مع فتح خط الخنق أولاً' },
            { term: 'الإغلاق الصلب', definition: 'إغلاق البئر مباشرة مع خط الخنق مغلق' },
            { term: 'SIDPP', definition: 'ضغط سلسلة الحفر المغلقة' },
            { term: 'SICP', definition: 'ضغط التغليف المغلق' },
            { term: 'BOP', definition: 'مانع الانفجار - معدات إغلاق البئر' }
          ],
          practiceQuestion: {
            question: 'ما هي ميزة طريقة الإغلاق الصلب عن الإغلاق الناعم؟',
            options: ['أقل ضغطاً على التكوين', 'أسرع ويقلل حجم التدفق', 'أرخص تكلفة', 'لا تتطلب معدات BOP'],
            correctAnswer: 1
          }
        },
        en: {
          title: 'Well Shut-In Procedures',
          explanation: `<section>
<h2 style="color: #1a365d;" class="text-xl font-bold mb-4">Well Shut-In Procedures</h2>

<p class="mb-4">When a kick is confirmed, the well must be shut in immediately to prevent further entry of formation fluids. There are two main shut-in methods.</p>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">Well Control Equipment (BOP)</h3>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">BOP Stack Components</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li><strong>Annular Preventer:</strong> Closes around any shape or size</li>
<li><strong>Pipe Rams:</strong> Close around specific pipe size</li>
<li><strong>Shear Rams:</strong> Cut pipe and seal the well</li>
<li><strong>Blind Rams:</strong> Close an open hole</li>
</ul>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">Soft Shut-In Method</h3>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">Steps:</h4>
<ol class="list-decimal list-inside space-y-2 mb-4">
<li>Raise Kelly/Top Drive above rotary table</li>
<li>Stop pumps</li>
<li>Open choke line valve</li>
<li>Close BOP (usually annular)</li>
<li>Slowly close the choke</li>
<li>Read and record pressures</li>
</ol>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">Advantages of Soft Shut-In:</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>Reduces pressure shocks on formation</li>
<li>Less likely to cause additional fracturing</li>
<li>Allows accurate pressure readings</li>
</ul>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">Hard Shut-In Method</h3>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">Steps:</h4>
<ol class="list-decimal list-inside space-y-2 mb-4">
<li>Raise Kelly/Top Drive above rotary table</li>
<li>Stop pumps</li>
<li>Close BOP immediately (with choke line closed)</li>
<li>Read and record pressures</li>
</ol>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">Advantages of Hard Shut-In:</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>Faster than soft shut-in</li>
<li>Minimizes influx volume</li>
<li>Currently preferred in most situations</li>
</ul>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">Reading Pressures After Shut-In</h3>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">Measured Pressures:</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li><strong>SIDPP:</strong> Shut-In Drill Pipe Pressure</li>
<li><strong>SICP:</strong> Shut-In Casing Pressure</li>
<li><strong>Pit Gain:</strong> Volume of influx</li>
</ul>

<p style="color: #c53030;" class="mb-4"><strong>Important:</strong> Wait until pressures stabilize (usually 10-15 minutes) before recording.</p>
</section>`,
          keyTerms: [
            { term: 'Soft Shut-In', definition: 'Closing the well with choke line open first' },
            { term: 'Hard Shut-In', definition: 'Closing the well directly with choke line closed' },
            { term: 'SIDPP', definition: 'Shut-In Drill Pipe Pressure' },
            { term: 'SICP', definition: 'Shut-In Casing Pressure' },
            { term: 'BOP', definition: 'Blowout Preventer - well closure equipment' }
          ],
          practiceQuestion: {
            question: 'What is the advantage of hard shut-in over soft shut-in?',
            options: ['Less pressure on formation', 'Faster and minimizes influx', 'Cheaper cost', 'Does not require BOP equipment'],
            correctAnswer: 1
          }
        }
      }
    },
    {
      day: 4,
      type: 'learning',
      content: {
        ar: {
          title: 'طرق قتل البئر',
          explanation: `<section>
<h2 style="color: #1a365d;" class="text-xl font-bold mb-4">طرق قتل البئر (Well Kill Methods)</h2>

<p class="mb-4">بعد إغلاق البئر وتسجيل الضغوط، يجب قتل البئر عن طريق استبدال الطين الخفيف بطين أثقل يوازن ضغط التكوين.</p>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">حساب وزن الطين المطلوب (Kill Mud Weight)</h3>

<p style="background-color: #f0f4f8; padding: 10px; border-radius: 5px; direction: ltr;" class="mb-4">
KMW = Original MW + (SIDPP / (0.052 × TVD))
</p>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">مثال:</h4>
<p class="mb-2">وزن الطين الأصلي = 10 ppg، SIDPP = 520 psi، العمق = 10,000 ft</p>
<p style="background-color: #e6fffa; padding: 10px; border-radius: 5px; direction: ltr;" class="mb-4">
KMW = 10 + (520 / (0.052 × 10,000)) = 10 + 1.0 = 11.0 ppg
</p>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">طريقة Driller's Method</h3>

<p class="mb-4">طريقة من دورتين: الأولى لإخراج التدفق والثانية لضخ طين القتل.</p>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">الدورة الأولى:</h4>
<ol class="list-decimal list-inside space-y-2 mb-4">
<li>ضخ الطين الأصلي بمعدل قتل ثابت</li>
<li>الحفاظ على ضغط سلسلة الحفر ثابتاً (ICP)</li>
<li>إخراج التدفق عبر الخنق</li>
<li>إيقاف الضخ عند عودة الطين الأصلي</li>
</ol>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">الدورة الثانية:</h4>
<ol class="list-decimal list-inside space-y-2 mb-4">
<li>تجهيز طين القتل</li>
<li>ضخ طين القتل</li>
<li>تقليل ضغط الخنق تدريجياً</li>
<li>الإغلاق والتحقق من الضغوط</li>
</ol>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">طريقة Wait and Weight</h3>

<p class="mb-4">طريقة من دورة واحدة: ضخ طين القتل مباشرة.</p>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">الخطوات:</h4>
<ol class="list-decimal list-inside space-y-2 mb-4">
<li>تجهيز طين القتل (الانتظار)</li>
<li>ضخ طين القتل داخل سلسلة الحفر</li>
<li>اتباع جدول الضغط المحسوب</li>
<li>إخراج التدفق مع طين القتل</li>
</ol>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">مقارنة الطريقتين</h3>

<table style="width: 100%; border-collapse: collapse; margin: 10px 0;">
<tr style="background-color: #2c5282; color: white;">
<th style="border: 1px solid #ddd; padding: 8px;">المعيار</th>
<th style="border: 1px solid #ddd; padding: 8px;">Driller's</th>
<th style="border: 1px solid #ddd; padding: 8px;">Wait & Weight</th>
</tr>
<tr>
<td style="border: 1px solid #ddd; padding: 8px;">سرعة البدء</td>
<td style="border: 1px solid #ddd; padding: 8px;">أسرع</td>
<td style="border: 1px solid #ddd; padding: 8px;">أبطأ (انتظار تجهيز الطين)</td>
</tr>
<tr style="background-color: #f7fafc;">
<td style="border: 1px solid #ddd; padding: 8px;">ضغط الحلقي</td>
<td style="border: 1px solid #ddd; padding: 8px;">أعلى</td>
<td style="border: 1px solid #ddd; padding: 8px;">أقل</td>
</tr>
<tr>
<td style="border: 1px solid #ddd; padding: 8px;">عدد الدورات</td>
<td style="border: 1px solid #ddd; padding: 8px;">دورتان</td>
<td style="border: 1px solid #ddd; padding: 8px;">دورة واحدة</td>
</tr>
</table>

<p style="color: #c53030;" class="mb-4"><strong>اختيار الطريقة:</strong> يعتمد على حجم التدفق، نافذة وزن الطين، وتوفر طين القتل.</p>
</section>`,
          keyTerms: [
            { term: 'طين القتل (Kill Mud)', definition: 'طين بوزن كافٍ لموازنة ضغط التكوين' },
            { term: 'Driller\'s Method', definition: 'طريقة قتل من دورتين' },
            { term: 'Wait and Weight', definition: 'طريقة قتل من دورة واحدة' },
            { term: 'ICP', definition: 'ضغط الدورة الابتدائي' },
            { term: 'FCP', definition: 'ضغط الدورة النهائي' }
          ],
          practiceQuestion: {
            question: 'إذا كان SIDPP = 400 psi والعمق 8,000 ft ووزن الطين 9 ppg، ما هو وزن طين القتل؟',
            options: ['9.5 ppg', '9.96 ppg', '10.5 ppg', '11.0 ppg'],
            correctAnswer: 1
          }
        },
        en: {
          title: 'Well Kill Methods',
          explanation: `<section>
<h2 style="color: #1a365d;" class="text-xl font-bold mb-4">Well Kill Methods</h2>

<p class="mb-4">After shutting in the well and recording pressures, the well must be killed by replacing the lighter mud with heavier mud that balances formation pressure.</p>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">Kill Mud Weight Calculation</h3>

<p style="background-color: #f0f4f8; padding: 10px; border-radius: 5px;" class="mb-4">
KMW = Original MW + (SIDPP / (0.052 × TVD))
</p>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">Example:</h4>
<p class="mb-2">Original MW = 10 ppg, SIDPP = 520 psi, Depth = 10,000 ft</p>
<p style="background-color: #e6fffa; padding: 10px; border-radius: 5px;" class="mb-4">
KMW = 10 + (520 / (0.052 × 10,000)) = 10 + 1.0 = 11.0 ppg
</p>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">Driller's Method</h3>

<p class="mb-4">A two-circulation method: first to remove the kick, second to pump kill mud.</p>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">First Circulation:</h4>
<ol class="list-decimal list-inside space-y-2 mb-4">
<li>Pump original mud at constant kill rate</li>
<li>Maintain constant drill pipe pressure (ICP)</li>
<li>Circulate out the kick through choke</li>
<li>Stop pumping when original mud returns</li>
</ol>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">Second Circulation:</h4>
<ol class="list-decimal list-inside space-y-2 mb-4">
<li>Prepare kill mud</li>
<li>Pump kill mud</li>
<li>Gradually reduce choke pressure</li>
<li>Shut in and verify pressures</li>
</ol>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">Wait and Weight Method</h3>

<p class="mb-4">A one-circulation method: pump kill mud directly.</p>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">Steps:</h4>
<ol class="list-decimal list-inside space-y-2 mb-4">
<li>Prepare kill mud (wait)</li>
<li>Pump kill mud into drill pipe</li>
<li>Follow calculated pressure schedule</li>
<li>Circulate out kick with kill mud</li>
</ol>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">Method Comparison</h3>

<table style="width: 100%; border-collapse: collapse; margin: 10px 0;">
<tr style="background-color: #2c5282; color: white;">
<th style="border: 1px solid #ddd; padding: 8px;">Criteria</th>
<th style="border: 1px solid #ddd; padding: 8px;">Driller's</th>
<th style="border: 1px solid #ddd; padding: 8px;">Wait & Weight</th>
</tr>
<tr>
<td style="border: 1px solid #ddd; padding: 8px;">Start Speed</td>
<td style="border: 1px solid #ddd; padding: 8px;">Faster</td>
<td style="border: 1px solid #ddd; padding: 8px;">Slower (wait for mud prep)</td>
</tr>
<tr style="background-color: #f7fafc;">
<td style="border: 1px solid #ddd; padding: 8px;">Annular Pressure</td>
<td style="border: 1px solid #ddd; padding: 8px;">Higher</td>
<td style="border: 1px solid #ddd; padding: 8px;">Lower</td>
</tr>
<tr>
<td style="border: 1px solid #ddd; padding: 8px;">Circulations</td>
<td style="border: 1px solid #ddd; padding: 8px;">Two</td>
<td style="border: 1px solid #ddd; padding: 8px;">One</td>
</tr>
</table>

<p style="color: #c53030;" class="mb-4"><strong>Method Selection:</strong> Depends on kick size, mud weight window, and kill mud availability.</p>
</section>`,
          keyTerms: [
            { term: 'Kill Mud', definition: 'Mud heavy enough to balance formation pressure' },
            { term: 'Driller\'s Method', definition: 'Two-circulation kill method' },
            { term: 'Wait and Weight', definition: 'One-circulation kill method' },
            { term: 'ICP', definition: 'Initial Circulating Pressure' },
            { term: 'FCP', definition: 'Final Circulating Pressure' }
          ],
          practiceQuestion: {
            question: 'If SIDPP = 400 psi, depth is 8,000 ft, and mud weight is 9 ppg, what is the kill mud weight?',
            options: ['9.5 ppg', '9.96 ppg', '10.5 ppg', '11.0 ppg'],
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
          title: 'الوقاية والتدريب على التحكم بالبئر',
          explanation: `<section>
<h2 style="color: #1a365d;" class="text-xl font-bold mb-4">الوقاية والتدريب على التحكم بالبئر</h2>

<p class="mb-4">الوقاية من التدفق أفضل بكثير من التعامل معه. يتطلب ذلك تخطيطاً دقيقاً وتدريباً مستمراً وانضباطاً تشغيلياً صارماً.</p>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">إجراءات الوقاية</h3>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">1. التصميم الصحيح لوزن الطين</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>استخدام بيانات ضغط التكوين الدقيقة</li>
<li>إضافة هامش أمان مناسب (Trip Margin)</li>
<li>مراقبة وزن الطين باستمرار</li>
</ul>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">2. مراقبة البئر المستمرة</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>مراقبة مستوى الحوض على مدار الساعة</li>
<li>استخدام أجهزة كشف التدفق الآلية</li>
<li>تسجيل حجم الملء أثناء الرحلات</li>
</ul>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">3. التحكم في سرعة الرحلة</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>سرعات محسوبة لتجنب Swab/Surge</li>
<li>التوقف الدوري لمراقبة البئر</li>
<li>ملء البئر بانتظام عند السحب</li>
</ul>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">تمارين التحكم بالبئر (Well Control Drills)</h3>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">أنواع التمارين:</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li><strong>تمرين إغلاق البئر:</strong> محاكاة إغلاق سريع</li>
<li><strong>تمرين الإخلاء:</strong> إجراءات الطوارئ</li>
<li><strong>تمرين الحريق:</strong> الاستجابة لحرائق المنصة</li>
<li><strong>تمرين H2S:</strong> التعامل مع الغاز السام</li>
</ul>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">شهادات التحكم بالبئر</h3>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">IWCF (International Well Control Forum)</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>المستوى 2: للحفارين ومساعديهم</li>
<li>المستوى 3: للمشرفين</li>
<li>المستوى 4: للمهندسين والمديرين</li>
</ul>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">IADC WellSharp</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>برنامج معتمد من IADC</li>
<li>تدريب عملي ونظري شامل</li>
<li>يغطي جميع مستويات الطاقم</li>
</ul>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">ثقافة السلامة</h3>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>كل فرد مسؤول عن التحكم بالبئر</li>
<li>الإبلاغ الفوري عن أي مؤشرات غير طبيعية</li>
<li>عدم التردد في إيقاف العمليات عند الشك</li>
<li>التعلم من الحوادث والحوادث القريبة</li>
</ul>

<p style="color: #c53030;" class="mb-4"><strong>مبدأ أساسي:</strong> "عند الشك، أغلق البئر!" - من الأفضل الإغلاق والتحقق ثم الفتح بدلاً من المخاطرة بانفجار.</p>
</section>`,
          keyTerms: [
            { term: 'IWCF', definition: 'المنتدى الدولي للتحكم بالبئر - جهة اعتماد التدريب' },
            { term: 'WellSharp', definition: 'برنامج تدريب IADC للتحكم بالبئر' },
            { term: 'تمرين الإغلاق', definition: 'محاكاة لإجراءات إغلاق البئر' },
            { term: 'ثقافة السلامة', definition: 'التزام جماعي بأولوية السلامة' },
            { term: 'هامش الرحلة', definition: 'وزن طين إضافي لمواجهة تأثيرات Swab' }
          ],
          practiceQuestion: {
            question: 'ما هو المبدأ الأساسي في التحكم بالبئر عند الشك؟',
            options: ['استمر في الحفر ومراقبة', 'استشر المهندس أولاً', 'أغلق البئر وتحقق', 'زد سرعة الضخ'],
            correctAnswer: 2
          }
        },
        en: {
          title: 'Prevention and Well Control Training',
          explanation: `<section>
<h2 style="color: #1a365d;" class="text-xl font-bold mb-4">Prevention and Well Control Training</h2>

<p class="mb-4">Preventing kicks is far better than dealing with them. This requires careful planning, continuous training, and strict operational discipline.</p>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">Prevention Measures</h3>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">1. Proper Mud Weight Design</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>Use accurate formation pressure data</li>
<li>Add appropriate safety margin (Trip Margin)</li>
<li>Continuously monitor mud weight</li>
</ul>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">2. Continuous Well Monitoring</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>24/7 pit level monitoring</li>
<li>Use automatic kick detection devices</li>
<li>Record fill volumes during trips</li>
</ul>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">3. Tripping Speed Control</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>Calculated speeds to avoid Swab/Surge</li>
<li>Periodic stops to monitor well</li>
<li>Regular hole fill when pulling</li>
</ul>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">Well Control Drills</h3>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">Types of Drills:</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li><strong>Shut-in Drill:</strong> Fast shut-in simulation</li>
<li><strong>Evacuation Drill:</strong> Emergency procedures</li>
<li><strong>Fire Drill:</strong> Platform fire response</li>
<li><strong>H2S Drill:</strong> Toxic gas handling</li>
</ul>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">Well Control Certifications</h3>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">IWCF (International Well Control Forum)</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>Level 2: For drillers and assistants</li>
<li>Level 3: For supervisors</li>
<li>Level 4: For engineers and managers</li>
</ul>

<h4 style="color: #2c5282;" class="font-semibold mt-4 mb-2">IADC WellSharp</h4>
<ul class="list-disc list-inside space-y-2 mb-4">
<li>IADC-accredited program</li>
<li>Comprehensive practical and theoretical training</li>
<li>Covers all crew levels</li>
</ul>

<h3 style="color: #ed8936;" class="text-lg font-semibold mt-6 mb-3">Safety Culture</h3>

<ul class="list-disc list-inside space-y-2 mb-4">
<li>Everyone is responsible for well control</li>
<li>Immediate reporting of any abnormal indicators</li>
<li>No hesitation in stopping operations when in doubt</li>
<li>Learning from incidents and near-misses</li>
</ul>

<p style="color: #c53030;" class="mb-4"><strong>Fundamental Principle:</strong> "When in doubt, shut it in!" - It's better to shut in and check then open, rather than risk a blowout.</p>
</section>`,
          keyTerms: [
            { term: 'IWCF', definition: 'International Well Control Forum - training certification body' },
            { term: 'WellSharp', definition: 'IADC well control training program' },
            { term: 'Shut-in Drill', definition: 'Simulation of well shut-in procedures' },
            { term: 'Safety Culture', definition: 'Collective commitment to safety priority' },
            { term: 'Trip Margin', definition: 'Additional mud weight to counter Swab effects' }
          ],
          practiceQuestion: {
            question: 'What is the fundamental principle in well control when in doubt?',
            options: ['Continue drilling and monitor', 'Consult the engineer first', 'Shut in and check', 'Increase pump rate'],
            correctAnswer: 2
          }
        }
      }
    },
    {
      day: 6,
      type: 'quiz',
      content: {
        ar: {
          title: 'اختبار كشف التدفق والتحكم بالبئر',
          explanation: 'اختبر معلوماتك حول كشف التدفق وإجراءات التحكم بالبئر',
          keyTerms: []
        },
        en: {
          title: 'Kick Detection & Well Control Quiz',
          explanation: 'Test your knowledge of kick detection and well control procedures',
          keyTerms: []
        }
      },
      quiz: {
        ar: [
          {
            question: 'ما هو التدفق (Kick)؟',
            options: ['تسرب الطين للتكوين', 'دخول سوائل التكوين للبئر', 'توقف المضخات', 'كسر سلسلة الحفر'],
            correctAnswer: 1
          },
          {
            question: 'أي نوع من التدفق هو الأخطر؟',
            options: ['تدفق النفط', 'تدفق الماء', 'تدفق الغاز', 'جميعهم متساوون'],
            correctAnswer: 2
          },
          {
            question: 'ما هي أوضح علامة على حدوث تدفق؟',
            options: ['زيادة معدل الاختراق', 'زيادة حجم الحوض', 'ارتفاع الحرارة', 'تغير لون الطين'],
            correctAnswer: 1
          },
          {
            question: 'في الإغلاق الصلب، ما هو وضع صمام الخنق؟',
            options: ['مفتوح', 'مغلق', 'نصف مفتوح', 'غير مهم'],
            correctAnswer: 1
          },
          {
            question: 'ما هو SIDPP؟',
            options: ['ضغط المضخة', 'ضغط سلسلة الحفر المغلقة', 'ضغط التكوين', 'ضغط التغليف'],
            correctAnswer: 1
          },
          {
            question: 'كم دورة تتطلب طريقة Driller\'s Method؟',
            options: ['دورة واحدة', 'دورتان', 'ثلاث دورات', 'أربع دورات'],
            correctAnswer: 1
          },
          {
            question: 'ما هي معادلة وزن طين القتل؟',
            options: ['KMW = MW × SIDPP', 'KMW = MW + SIDPP/(0.052×TVD)', 'KMW = SIDPP/TVD', 'KMW = MW - SIDPP'],
            correctAnswer: 1
          },
          {
            question: 'ما هي ميزة طريقة Wait and Weight؟',
            options: ['أسرع بدء', 'ضغط حلقي أقل', 'لا تحتاج طين قتل', 'تحتاج دورتين'],
            correctAnswer: 1
          },
          {
            question: 'ما هو المبدأ الأساسي عند الشك في حدوث تدفق؟',
            options: ['استمر ومراقبة', 'زد وزن الطين', 'أغلق البئر وتحقق', 'أوقف المضخات فقط'],
            correctAnswer: 2
          },
          {
            question: 'ما هي شهادة IWCF المستوى 4؟',
            options: ['للحفارين', 'للمساعدين', 'للمشرفين', 'للمهندسين والمديرين'],
            correctAnswer: 3
          }
        ],
        en: [
          {
            question: 'What is a Kick?',
            options: ['Mud loss to formation', 'Formation fluid entry to wellbore', 'Pump shutdown', 'Drillstring break'],
            correctAnswer: 1
          },
          {
            question: 'Which type of kick is most dangerous?',
            options: ['Oil kick', 'Water kick', 'Gas kick', 'All are equal'],
            correctAnswer: 2
          },
          {
            question: 'What is the clearest sign of a kick?',
            options: ['Increased ROP', 'Pit gain', 'Temperature rise', 'Mud color change'],
            correctAnswer: 1
          },
          {
            question: 'In hard shut-in, what is the choke valve position?',
            options: ['Open', 'Closed', 'Half open', 'Not important'],
            correctAnswer: 1
          },
          {
            question: 'What is SIDPP?',
            options: ['Pump pressure', 'Shut-In Drill Pipe Pressure', 'Formation pressure', 'Casing pressure'],
            correctAnswer: 1
          },
          {
            question: 'How many circulations does Driller\'s Method require?',
            options: ['One', 'Two', 'Three', 'Four'],
            correctAnswer: 1
          },
          {
            question: 'What is the kill mud weight equation?',
            options: ['KMW = MW × SIDPP', 'KMW = MW + SIDPP/(0.052×TVD)', 'KMW = SIDPP/TVD', 'KMW = MW - SIDPP'],
            correctAnswer: 1
          },
          {
            question: 'What is the advantage of Wait and Weight method?',
            options: ['Faster start', 'Lower annular pressure', 'No kill mud needed', 'Requires two circulations'],
            correctAnswer: 1
          },
          {
            question: 'What is the fundamental principle when suspecting a kick?',
            options: ['Continue and monitor', 'Increase mud weight', 'Shut in and check', 'Stop pumps only'],
            correctAnswer: 2
          },
          {
            question: 'What is IWCF Level 4 certification for?',
            options: ['Drillers', 'Assistants', 'Supervisors', 'Engineers and managers'],
            correctAnswer: 3
          }
        ]
      }
    },
    {
      day: 7,
      type: 'project',
      content: {
        ar: {
          title: 'مشروع التحكم بالبئر',
          explanation: 'تطبيق عملي لإجراءات كشف التدفق والتحكم بالبئر',
          keyTerms: []
        },
        en: {
          title: 'Well Control Project',
          explanation: 'Practical application of kick detection and well control procedures',
          keyTerms: []
        }
      },
      project: {
        ar: {
          title: 'سيناريو تدفق وخطة استجابة',
          description: 'قم بتحليل سيناريو تدفق افتراضي وضع خطة استجابة كاملة.',
          instructions: [
            'السيناريو: أثناء الحفر على عمق 12,000 ft بوزن طين 11 ppg، لاحظت زيادة في الحوض 15 برميل وSIDPP = 450 psi',
            'احسب وزن طين القتل المطلوب',
            'حدد طريقة القتل المناسبة وبرر اختيارك',
            'اكتب الخطوات التفصيلية لقتل البئر',
            'حدد المخاطر المحتملة وكيفية التعامل معها'
          ],
          submissionType: 'both'
        },
        en: {
          title: 'Kick Scenario and Response Plan',
          description: 'Analyze a hypothetical kick scenario and develop a complete response plan.',
          instructions: [
            'Scenario: While drilling at 12,000 ft with 11 ppg mud, you observe a 15 bbl pit gain and SIDPP = 450 psi',
            'Calculate required kill mud weight',
            'Select appropriate kill method and justify your choice',
            'Write detailed steps for killing the well',
            'Identify potential risks and how to handle them'
          ],
          submissionType: 'both'
        }
      }
    }
  ]
};
