import { WeeklyLesson } from '../weeklyContent';

export const drillingProblemsLesson: WeeklyLesson = {
  lessonId: 'drilling-problems',
  days: [
    {
      day: 1,
      type: 'learning',
      content: {
        ar: {
          title: 'الأنبوب العالق - الأنواع والأسباب',
          explanation: `
<h2 style="color: #1e3a5f; font-size: 1.8rem; border-bottom: 3px solid #1e3a5f; padding-bottom: 8px;">الأنبوب العالق - الأنواع والأسباب</h2>

<p style="line-height: 1.8; margin-bottom: 16px;">يُعد الأنبوب العالق (Stuck Pipe) من أخطر مشاكل الحفر وأكثرها تكلفة. تحدث عندما تفقد سلسلة الحفر قدرتها على الحركة الحرة (رفع، إنزال، أو دوران). قد تؤدي هذه المشكلة لخسائر تصل لملايين الدولارات وتعطيل العمليات لأسابيع.</p>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">الأنواع الرئيسية للأنبوب العالق:</h3>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">1. الالتصاق التفاضلي (Differential Sticking)</h4>
<p style="line-height: 1.8; margin-bottom: 12px;">أكثر أنواع العلق شيوعاً في الطبقات النفاذة:</p>
<ul style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;"><strong>السبب:</strong> فرق الضغط بين البئر والتكوين يضغط الأنبوب على كعكة الطين</li>
  <li style="margin-bottom: 8px;"><strong>الظروف:</strong> وزن طين عالي + طبقة نفاذة + توقف الحركة</li>
  <li style="margin-bottom: 8px;"><strong>العلامات:</strong> لا يمكن تحريك الأنبوب لكن الدوران ممكن أحياناً</li>
  <li style="margin-bottom: 8px;"><strong>المواقع الشائعة:</strong> أطواق الحفر والمثبتات ذات المساحة الكبيرة</li>
</ul>

<div style="background: #f0f9ff; padding: 16px; border-radius: 8px; border-right: 4px solid #0ea5e9; margin: 16px 0;">
  <p style="margin: 0; color: #166534;"><strong>قوة الالتصاق = فرق الضغط × مساحة التلامس × معامل الاحتكاك</strong></p>
</div>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">2. العلق الميكانيكي (Mechanical Sticking)</h4>
<p style="line-height: 1.8; margin-bottom: 12px;">ناتج عن عوائق فيزيائية في البئر:</p>
<ul style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;"><strong>انهيار الجدران:</strong> سقوط صخور تحبس الأنبوب</li>
  <li style="margin-bottom: 8px;"><strong>التضييق:</strong> انتفاخ الطبقات الطينية</li>
  <li style="margin-bottom: 8px;"><strong>الأسماك:</strong> قطع معدنية سقطت في البئر</li>
  <li style="margin-bottom: 8px;"><strong>الرمل:</strong> ترسب القطع حول الأنبوب</li>
</ul>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">3. حز المفتاح (Keyseating)</h4>
<ul style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;"><strong>التعريف:</strong> أخدود صغير يُحفر في جدار البئر بفعل دوران الأنبوب</li>
  <li style="margin-bottom: 8px;"><strong>السبب:</strong> تغيرات زاوية حادة (Dogleg) في مسار البئر</li>
  <li style="margin-bottom: 8px;"><strong>المشكلة:</strong> أطواق الحفر أو الوصلات تعلق في الأخدود عند السحب</li>
  <li style="margin-bottom: 8px;"><strong>الخاصية:</strong> يمكن الإنزال لكن لا يمكن السحب</li>
</ul>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">4. العلق الهندسي (Geometric Sticking)</h4>
<ul style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;"><strong>الحفرة تحت القطر:</strong> تآكل جدار البئر يُنشئ تجاويف</li>
  <li style="margin-bottom: 8px;"><strong>حز اللولب:</strong> نمط حلزوني في جدار البئر</li>
  <li style="margin-bottom: 8px;"><strong>الجيوب:</strong> تجاويف جانبية تحبس المعدات</li>
</ul>

<div style="background: #fef3c7; padding: 16px; border-radius: 8px; border-right: 4px solid #f59e0b; margin: 20px 0;">
  <h4 style="color: #92400e; margin-bottom: 8px;">⚠️ قاعدة الخمس دقائق:</h4>
  <p style="margin: 0;">لا توقف سلسلة الحفر أكثر من 5 دقائق بدون حركة في مناطق الخطر لتجنب الالتصاق التفاضلي.</p>
</div>
          `,
          keyTerms: [
            { term: 'الالتصاق التفاضلي', definition: 'علق الأنبوب بسبب فرق الضغط في الطبقات النفاذة' },
            { term: 'حز المفتاح', definition: 'أخدود في جدار البئر يحبس الأنبوب عند السحب' },
            { term: 'كعكة الطين', definition: 'طبقة رقيقة من الطين المترسب على جدار البئر' },
            { term: 'Dogleg', definition: 'تغير حاد في زاوية أو اتجاه مسار البئر' }
          ],
          practiceQuestion: {
            question: 'ما هي العلامة المميزة لحز المفتاح (Keyseating)؟',
            options: [
              'لا يمكن الإنزال أو السحب',
              'يمكن الإنزال لكن لا يمكن السحب',
              'يمكن السحب لكن لا يمكن الإنزال',
              'يمكن الدوران فقط'
            ],
            correctAnswer: 1
          }
        },
        en: {
          title: 'Stuck Pipe - Types and Causes',
          explanation: `
<h2 style="color: #1e3a5f; font-size: 1.8rem; border-bottom: 3px solid #1e3a5f; padding-bottom: 8px;">Stuck Pipe - Types and Causes</h2>

<p style="line-height: 1.8; margin-bottom: 16px;">Stuck pipe is one of the most dangerous and costly drilling problems. It occurs when the drill string loses its ability to move freely (raise, lower, or rotate). This problem can lead to losses of millions of dollars and delay operations for weeks.</p>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">Main Types of Stuck Pipe:</h3>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">1. Differential Sticking</h4>
<p style="line-height: 1.8; margin-bottom: 12px;">Most common type in permeable formations:</p>
<ul style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;"><strong>Cause:</strong> Pressure differential between wellbore and formation pushes pipe against mud cake</li>
  <li style="margin-bottom: 8px;"><strong>Conditions:</strong> High mud weight + permeable zone + stationary pipe</li>
  <li style="margin-bottom: 8px;"><strong>Signs:</strong> Cannot move pipe but rotation sometimes possible</li>
  <li style="margin-bottom: 8px;"><strong>Common locations:</strong> Drill collars and stabilizers with large surface area</li>
</ul>

<div style="background: #f0f9ff; padding: 16px; border-radius: 8px; border-left: 4px solid #0ea5e9; margin: 16px 0;">
  <p style="margin: 0; color: #166534;"><strong>Sticking Force = Pressure Differential × Contact Area × Friction Coefficient</strong></p>
</div>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">2. Mechanical Sticking</h4>
<p style="line-height: 1.8; margin-bottom: 12px;">Caused by physical obstructions in the wellbore:</p>
<ul style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;"><strong>Hole collapse:</strong> Fallen rock trapping the pipe</li>
  <li style="margin-bottom: 8px;"><strong>Swelling:</strong> Shale formation expansion</li>
  <li style="margin-bottom: 8px;"><strong>Junk:</strong> Metal pieces fallen into the well</li>
  <li style="margin-bottom: 8px;"><strong>Packoff:</strong> Cuttings settling around the pipe</li>
</ul>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">3. Keyseating</h4>
<ul style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;"><strong>Definition:</strong> Small groove cut in wellbore wall by rotating pipe</li>
  <li style="margin-bottom: 8px;"><strong>Cause:</strong> Sharp angle changes (doglegs) in well path</li>
  <li style="margin-bottom: 8px;"><strong>Problem:</strong> Drill collars or tool joints get stuck in groove when pulling</li>
  <li style="margin-bottom: 8px;"><strong>Characteristic:</strong> Can go down but cannot pull up</li>
</ul>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">4. Geometric Sticking</h4>
<ul style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;"><strong>Undergauge hole:</strong> Wellbore erosion creates cavities</li>
  <li style="margin-bottom: 8px;"><strong>Spiral grooving:</strong> Helical pattern in wellbore wall</li>
  <li style="margin-bottom: 8px;"><strong>Ledges:</strong> Side cavities that trap equipment</li>
</ul>

<div style="background: #fef3c7; padding: 16px; border-radius: 8px; border-left: 4px solid #f59e0b; margin: 20px 0;">
  <h4 style="color: #92400e; margin-bottom: 8px;">⚠️ Five-Minute Rule:</h4>
  <p style="margin: 0;">Never stop the drill string for more than 5 minutes without movement in risk zones to avoid differential sticking.</p>
</div>
          `,
          keyTerms: [
            { term: 'Differential Sticking', definition: 'Pipe stuck due to pressure differential in permeable zones' },
            { term: 'Keyseating', definition: 'Groove in wellbore wall that traps pipe when pulling' },
            { term: 'Mud Cake', definition: 'Thin layer of deposited mud on wellbore wall' },
            { term: 'Dogleg', definition: 'Sharp change in angle or direction of well path' }
          ],
          practiceQuestion: {
            question: 'What is the characteristic sign of keyseating?',
            options: [
              'Cannot lower or pull',
              'Can go down but cannot pull up',
              'Can pull but cannot go down',
              'Can only rotate'
            ],
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
          title: 'تحرير الأنبوب العالق',
          explanation: `
<h2 style="color: #1e3a5f; font-size: 1.8rem; border-bottom: 3px solid #1e3a5f; padding-bottom: 8px;">تحرير الأنبوب العالق</h2>

<p style="line-height: 1.8; margin-bottom: 16px;">عند حدوث علق للأنبوب، يجب اتخاذ إجراءات سريعة ومدروسة. التأخير يزيد صعوبة التحرير خاصة في حالات الالتصاق التفاضلي حيث تزداد قوة الالتصاق مع الوقت.</p>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">الإجراءات الفورية الأولى:</h3>
<ol style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 12px;"><strong>لا تسحب بقوة زائدة:</strong> قد تكسر الأنبوب أو تزيد المشكلة</li>
  <li style="margin-bottom: 12px;"><strong>خفف الوزن:</strong> أضف وزناً على الأنبوب (Slack Off)</li>
  <li style="margin-bottom: 12px;"><strong>حاول الدوران:</strong> قد يساعد في تحرير بعض أنواع العلق</li>
  <li style="margin-bottom: 12px;"><strong>استمر بالضخ:</strong> للحفاظ على دوران السائل</li>
  <li style="margin-bottom: 12px;"><strong>سجل عمق العلق:</strong> لتحديد موقع المشكلة</li>
</ol>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">طرق التحرير حسب نوع العلق:</h3>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">للالتصاق التفاضلي:</h4>
<ul style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;"><strong>حبة الزيت (Oil Spotting):</strong> ضخ زيت أو سائل تحرير حول نقطة العلق لتقليل الاحتكاك</li>
  <li style="margin-bottom: 8px;"><strong>تقليل وزن الطين:</strong> لتقليل فرق الضغط (بحذر)</li>
  <li style="margin-bottom: 8px;"><strong>الصدامات (Jars):</strong> ضربات متكررة لكسر قوة الالتصاق</li>
</ul>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">للعلق الميكانيكي:</h4>
<ul style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;"><strong>العمل للأعلى والأسفل:</strong> حركة متذبذبة لتحرير الأنبوب</li>
  <li style="margin-bottom: 8px;"><strong>زيادة وزن الطين:</strong> لتثبيت جدران البئر في حالة الانهيار</li>
  <li style="margin-bottom: 8px;"><strong>الضخ المكثف:</strong> لإزالة الرمل والقطع</li>
</ul>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">لحز المفتاح:</h4>
<ul style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;"><strong>الإنزال مع الدوران:</strong> لتوسيع الأخدود</li>
  <li style="margin-bottom: 8px;"><strong>استخدام موسع (Reamer):</strong> لتوسيع منطقة الأخدود</li>
</ul>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">استخدام الصدامات (Jars):</h3>
<div style="background: #f0f9ff; padding: 16px; border-radius: 8px; border-right: 4px solid #0ea5e9; margin: 16px 0;">
  <ul style="margin: 0; padding-right: 20px;">
    <li style="margin-bottom: 8px;"><strong>الصدامات الميكانيكية:</strong> تحتاج لشد أو ضغط لتفعيلها</li>
    <li style="margin-bottom: 8px;"><strong>الصدامات الهيدروليكية:</strong> تعمل بالضغط الهيدروليكي</li>
    <li style="margin-bottom: 8px;"><strong>اتجاه الضرب:</strong> للأعلى في معظم الحالات، للأسفل في حز المفتاح</li>
  </ul>
</div>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">عملية الصيد (Fishing):</h3>
<p style="line-height: 1.8; margin-bottom: 12px;">إذا فشلت محاولات التحرير وتم قطع الأنبوب:</p>
<ul style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;"><strong>الخطاف (Overshot):</strong> للإمساك بالأنبوب من الخارج</li>
  <li style="margin-bottom: 8px;"><strong>الرمح (Spear):</strong> للإمساك بالأنبوب من الداخل</li>
  <li style="margin-bottom: 8px;"><strong>المغناطيس:</strong> لاستخراج القطع المعدنية الصغيرة</li>
  <li style="margin-bottom: 8px;"><strong>السلة (Junk Basket):</strong> لجمع القطع المتناثرة</li>
</ul>

<div style="background: #fee2e2; padding: 16px; border-radius: 8px; border-right: 4px solid #ef4444; margin: 20px 0;">
  <h4 style="color: #991b1b; margin-bottom: 8px;">⚠️ تحذير:</h4>
  <p style="margin: 0;">إذا تجاوزت قوة السحب 80% من قوة شد الأنبوب، توقف فوراً لتجنب الكسر.</p>
</div>
          `,
          keyTerms: [
            { term: 'حبة الزيت', definition: 'ضخ سائل تحرير حول نقطة العلق لتقليل الاحتكاك' },
            { term: 'الصدامات', definition: 'أداة تُعطي ضربات قوية لتحرير الأنبوب العالق' },
            { term: 'الخطاف Overshot', definition: 'أداة صيد تمسك الأنبوب من الخارج' },
            { term: 'الرمح Spear', definition: 'أداة صيد تمسك الأنبوب من الداخل' }
          ],
          practiceQuestion: {
            question: 'ما هي أفضل طريقة لتحرير الالتصاق التفاضلي؟',
            options: [
              'السحب بأقصى قوة ممكنة',
              'ضخ زيت أو سائل تحرير (Oil Spotting)',
              'زيادة وزن الطين',
              'إيقاف الضخ تماماً'
            ],
            correctAnswer: 1
          }
        },
        en: {
          title: 'Freeing Stuck Pipe',
          explanation: `
<h2 style="color: #1e3a5f; font-size: 1.8rem; border-bottom: 3px solid #1e3a5f; padding-bottom: 8px;">Freeing Stuck Pipe</h2>

<p style="line-height: 1.8; margin-bottom: 16px;">When pipe becomes stuck, quick and calculated actions must be taken. Delay increases the difficulty of freeing, especially in differential sticking cases where sticking force increases with time.</p>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">Immediate First Actions:</h3>
<ol style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 12px;"><strong>Don't pull with excessive force:</strong> May break pipe or worsen the problem</li>
  <li style="margin-bottom: 12px;"><strong>Slack off weight:</strong> Add weight on the pipe</li>
  <li style="margin-bottom: 12px;"><strong>Try to rotate:</strong> May help free some types of stuck pipe</li>
  <li style="margin-bottom: 12px;"><strong>Continue pumping:</strong> To maintain fluid circulation</li>
  <li style="margin-bottom: 12px;"><strong>Record stuck depth:</strong> To identify problem location</li>
</ol>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">Freeing Methods by Stuck Type:</h3>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">For Differential Sticking:</h4>
<ul style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;"><strong>Oil Spotting:</strong> Pump oil or freeing fluid around stuck point to reduce friction</li>
  <li style="margin-bottom: 8px;"><strong>Reduce mud weight:</strong> To decrease pressure differential (carefully)</li>
  <li style="margin-bottom: 8px;"><strong>Jars:</strong> Repeated impacts to break sticking force</li>
</ul>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">For Mechanical Sticking:</h4>
<ul style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;"><strong>Work pipe up and down:</strong> Oscillating movement to free pipe</li>
  <li style="margin-bottom: 8px;"><strong>Increase mud weight:</strong> To stabilize wellbore walls in collapse cases</li>
  <li style="margin-bottom: 8px;"><strong>Intensive pumping:</strong> To remove sand and cuttings</li>
</ul>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">For Keyseating:</h4>
<ul style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;"><strong>Run down with rotation:</strong> To widen the groove</li>
  <li style="margin-bottom: 8px;"><strong>Use a reamer:</strong> To enlarge the groove area</li>
</ul>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">Using Jars:</h3>
<div style="background: #f0f9ff; padding: 16px; border-radius: 8px; border-left: 4px solid #0ea5e9; margin: 16px 0;">
  <ul style="margin: 0; padding-left: 20px;">
    <li style="margin-bottom: 8px;"><strong>Mechanical jars:</strong> Need tension or compression to activate</li>
    <li style="margin-bottom: 8px;"><strong>Hydraulic jars:</strong> Work with hydraulic pressure</li>
    <li style="margin-bottom: 8px;"><strong>Jar direction:</strong> Upward in most cases, downward for keyseating</li>
  </ul>
</div>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">Fishing Operations:</h3>
<p style="line-height: 1.8; margin-bottom: 12px;">If freeing attempts fail and pipe is cut:</p>
<ul style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;"><strong>Overshot:</strong> To grab pipe from outside</li>
  <li style="margin-bottom: 8px;"><strong>Spear:</strong> To grab pipe from inside</li>
  <li style="margin-bottom: 8px;"><strong>Magnet:</strong> To retrieve small metal pieces</li>
  <li style="margin-bottom: 8px;"><strong>Junk basket:</strong> To collect scattered debris</li>
</ul>

<div style="background: #fee2e2; padding: 16px; border-radius: 8px; border-left: 4px solid #ef4444; margin: 20px 0;">
  <h4 style="color: #991b1b; margin-bottom: 8px;">⚠️ Warning:</h4>
  <p style="margin: 0;">If pull force exceeds 80% of pipe tensile strength, stop immediately to avoid breaking.</p>
</div>
          `,
          keyTerms: [
            { term: 'Oil Spotting', definition: 'Pumping freeing fluid around stuck point to reduce friction' },
            { term: 'Jars', definition: 'Tool that delivers strong impacts to free stuck pipe' },
            { term: 'Overshot', definition: 'Fishing tool that grabs pipe from outside' },
            { term: 'Spear', definition: 'Fishing tool that grabs pipe from inside' }
          ],
          practiceQuestion: {
            question: 'What is the best method to free differential sticking?',
            options: [
              'Pull with maximum force',
              'Oil spotting with freeing fluid',
              'Increase mud weight',
              'Stop pumping completely'
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
          title: 'فقدان الدوران',
          explanation: `
<h2 style="color: #1e3a5f; font-size: 1.8rem; border-bottom: 3px solid #1e3a5f; padding-bottom: 8px;">فقدان الدوران (Lost Circulation)</h2>

<p style="line-height: 1.8; margin-bottom: 16px;">فقدان الدوران هو تسرب سائل الحفر إلى التكوين بدلاً من عودته للسطح. يُعد من أكثر المشاكل شيوعاً وتكلفة، وقد يؤدي لفقدان السيطرة على البئر إذا لم يُعالج بسرعة.</p>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">أنواع فقدان الدوران:</h3>

<div style="background: #f0f9ff; padding: 16px; border-radius: 8px; margin: 16px 0;">
  <table style="width: 100%; border-collapse: collapse;">
    <tr style="background: #0ea5e9; color: white;">
      <th style="padding: 12px; text-align: right;">النوع</th>
      <th style="padding: 12px; text-align: right;">معدل الفقد</th>
      <th style="padding: 12px; text-align: right;">الخطورة</th>
    </tr>
    <tr style="background: #f8fafc;">
      <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">ترشيح (Seepage)</td>
      <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">&lt; 10 bbl/hr</td>
      <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">منخفضة</td>
    </tr>
    <tr>
      <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">جزئي</td>
      <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">10-50 bbl/hr</td>
      <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">متوسطة</td>
    </tr>
    <tr style="background: #f8fafc;">
      <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">شديد</td>
      <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">50-200 bbl/hr</td>
      <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">عالية</td>
    </tr>
    <tr>
      <td style="padding: 10px;">كامل</td>
      <td style="padding: 10px;">لا عودة</td>
      <td style="padding: 10px;">خطيرة جداً</td>
    </tr>
  </table>
</div>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">أسباب فقدان الدوران:</h3>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">1. أسباب طبيعية:</h4>
<ul style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;"><strong>التكوينات ذات النفاذية العالية:</strong> الحجر الرملي، الحصى</li>
  <li style="margin-bottom: 8px;"><strong>الشقوق الطبيعية:</strong> في التكوينات الجيرية والبركانية</li>
  <li style="margin-bottom: 8px;"><strong>الفجوات والكهوف:</strong> في تكوينات الكارست</li>
  <li style="margin-bottom: 8px;"><strong>الصدوع:</strong> المناطق المتشققة جيولوجياً</li>
</ul>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">2. أسباب مُحدثة (Induced):</h4>
<ul style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;"><strong>تكسير التكوين:</strong> عند تجاوز وزن الطين لضغط التكسير</li>
  <li style="margin-bottom: 8px;"><strong>ضغط الصدمة (Surge):</strong> عند إنزال الأنبوب بسرعة</li>
  <li style="margin-bottom: 8px;"><strong>ECD عالي:</strong> كثافة الدوران المكافئة الزائدة</li>
</ul>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">مواد إيقاف الفقد (LCM - Lost Circulation Materials):</h3>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">حسب الشكل:</h4>
<ul style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;"><strong>المواد الحبيبية:</strong> كربونات الكالسيوم، البنتونايت</li>
  <li style="margin-bottom: 8px;"><strong>المواد الليفية:</strong> ألياف السيللوز، القش</li>
  <li style="margin-bottom: 8px;"><strong>المواد الرقائقية:</strong> الميكا، السيلوفان</li>
  <li style="margin-bottom: 8px;"><strong>المواد المختلطة:</strong> خليط من الأنواع السابقة</li>
</ul>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">حسب حجم الفتحات:</h4>
<ul style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;"><strong>ناعم:</strong> للشقوق الصغيرة (&lt; 1 مم)</li>
  <li style="margin-bottom: 8px;"><strong>متوسط:</strong> للشقوق المتوسطة (1-5 مم)</li>
  <li style="margin-bottom: 8px;"><strong>خشن:</strong> للفجوات الكبيرة (&gt; 5 مم)</li>
</ul>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">علاج فقدان الدوران:</h3>
<ol style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;">تقليل معدل الضخ وسرعة السحب/الإنزال</li>
  <li style="margin-bottom: 8px;">إضافة LCM للطين بالتركيز المناسب</li>
  <li style="margin-bottom: 8px;">ضخ حبة إسمنت إذا فشل LCM</li>
  <li style="margin-bottom: 8px;">التغليف المبكر إذا استمرت المشكلة</li>
</ol>

<div style="background: #fef3c7; padding: 16px; border-radius: 8px; border-right: 4px solid #f59e0b; margin: 20px 0;">
  <h4 style="color: #92400e; margin-bottom: 8px;">⚠️ تحذير:</h4>
  <p style="margin: 0;">فقدان الدوران الكامل يُعرض البئر لخطر التدفق (Kick) بسبب انخفاض الضغط الهيدروستاتيكي.</p>
</div>
          `,
          keyTerms: [
            { term: 'فقدان الدوران', definition: 'تسرب سائل الحفر إلى التكوين بدلاً من عودته للسطح' },
            { term: 'LCM', definition: 'مواد إيقاف فقدان الدوران المضافة للطين' },
            { term: 'تكسير التكوين', definition: 'شقوق ناتجة عن تجاوز ضغط الطين لقوة التكوين' },
            { term: 'ضغط الصدمة Surge', definition: 'ارتفاع الضغط عند إنزال الأنبوب بسرعة' }
          ],
          practiceQuestion: {
            question: 'أي مادة LCM مناسبة للشقوق الصغيرة؟',
            options: [
              'المواد الخشنة فقط',
              'المواد الناعمة مثل كربونات الكالسيوم الدقيقة',
              'الإسمنت مباشرة',
              'لا توجد مواد تناسب الشقوق الصغيرة'
            ],
            correctAnswer: 1
          }
        },
        en: {
          title: 'Lost Circulation',
          explanation: `
<h2 style="color: #1e3a5f; font-size: 1.8rem; border-bottom: 3px solid #1e3a5f; padding-bottom: 8px;">Lost Circulation</h2>

<p style="line-height: 1.8; margin-bottom: 16px;">Lost circulation is the loss of drilling fluid into the formation instead of returning to surface. It's one of the most common and costly problems, and may lead to loss of well control if not treated quickly.</p>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">Types of Lost Circulation:</h3>

<div style="background: #f0f9ff; padding: 16px; border-radius: 8px; margin: 16px 0;">
  <table style="width: 100%; border-collapse: collapse;">
    <tr style="background: #0ea5e9; color: white;">
      <th style="padding: 12px; text-align: left;">Type</th>
      <th style="padding: 12px; text-align: left;">Loss Rate</th>
      <th style="padding: 12px; text-align: left;">Severity</th>
    </tr>
    <tr style="background: #f8fafc;">
      <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">Seepage</td>
      <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">&lt; 10 bbl/hr</td>
      <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">Low</td>
    </tr>
    <tr>
      <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">Partial</td>
      <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">10-50 bbl/hr</td>
      <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">Medium</td>
    </tr>
    <tr style="background: #f8fafc;">
      <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">Severe</td>
      <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">50-200 bbl/hr</td>
      <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">High</td>
    </tr>
    <tr>
      <td style="padding: 10px;">Complete</td>
      <td style="padding: 10px;">No returns</td>
      <td style="padding: 10px;">Critical</td>
    </tr>
  </table>
</div>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">Causes of Lost Circulation:</h3>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">1. Natural Causes:</h4>
<ul style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;"><strong>High permeability formations:</strong> Sandstone, gravel</li>
  <li style="margin-bottom: 8px;"><strong>Natural fractures:</strong> In limestone and volcanic formations</li>
  <li style="margin-bottom: 8px;"><strong>Vugs and caves:</strong> In karst formations</li>
  <li style="margin-bottom: 8px;"><strong>Faults:</strong> Geologically fractured zones</li>
</ul>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">2. Induced Causes:</h4>
<ul style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;"><strong>Formation fracturing:</strong> When mud weight exceeds fracture pressure</li>
  <li style="margin-bottom: 8px;"><strong>Surge pressure:</strong> When running pipe too fast</li>
  <li style="margin-bottom: 8px;"><strong>High ECD:</strong> Excessive equivalent circulating density</li>
</ul>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">Lost Circulation Materials (LCM):</h3>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">By Shape:</h4>
<ul style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;"><strong>Granular:</strong> Calcium carbonate, bentonite</li>
  <li style="margin-bottom: 8px;"><strong>Fibrous:</strong> Cellulose fibers, straw</li>
  <li style="margin-bottom: 8px;"><strong>Flaky:</strong> Mica, cellophane</li>
  <li style="margin-bottom: 8px;"><strong>Mixed:</strong> Combination of above types</li>
</ul>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">By Opening Size:</h4>
<ul style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;"><strong>Fine:</strong> For small fractures (&lt; 1 mm)</li>
  <li style="margin-bottom: 8px;"><strong>Medium:</strong> For medium fractures (1-5 mm)</li>
  <li style="margin-bottom: 8px;"><strong>Coarse:</strong> For large voids (&gt; 5 mm)</li>
</ul>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">Treating Lost Circulation:</h3>
<ol style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;">Reduce pump rate and tripping speed</li>
  <li style="margin-bottom: 8px;">Add LCM to mud at appropriate concentration</li>
  <li style="margin-bottom: 8px;">Pump cement plug if LCM fails</li>
  <li style="margin-bottom: 8px;">Early casing if problem persists</li>
</ol>

<div style="background: #fef3c7; padding: 16px; border-radius: 8px; border-left: 4px solid #f59e0b; margin: 20px 0;">
  <h4 style="color: #92400e; margin-bottom: 8px;">⚠️ Warning:</h4>
  <p style="margin: 0;">Complete lost circulation exposes the well to kick risk due to reduced hydrostatic pressure.</p>
</div>
          `,
          keyTerms: [
            { term: 'Lost Circulation', definition: 'Loss of drilling fluid into formation instead of returning to surface' },
            { term: 'LCM', definition: 'Lost Circulation Materials added to mud to stop losses' },
            { term: 'Formation Fracturing', definition: 'Cracks caused by mud pressure exceeding formation strength' },
            { term: 'Surge Pressure', definition: 'Pressure increase when running pipe too fast' }
          ],
          practiceQuestion: {
            question: 'Which LCM is suitable for small fractures?',
            options: [
              'Coarse materials only',
              'Fine materials like fine calcium carbonate',
              'Cement directly',
              'No materials suit small fractures'
            ],
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
          title: 'عدم استقرار جدار البئر',
          explanation: `
<h2 style="color: #1e3a5f; font-size: 1.8rem; border-bottom: 3px solid #1e3a5f; padding-bottom: 8px;">عدم استقرار جدار البئر (Wellbore Instability)</h2>

<p style="line-height: 1.8; margin-bottom: 16px;">عدم استقرار جدار البئر يشمل أي تغيير غير مرغوب في شكل أو حجم فتحة البئر. قد يؤدي لمشاكل خطيرة مثل العلق وصعوبة إنزال التغليف والحاجة لإعادة الحفر.</p>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">أنواع عدم الاستقرار:</h3>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">1. انهيار الجدران (Hole Collapse)</h4>
<ul style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;"><strong>التعريف:</strong> سقوط أجزاء من جدار البئر</li>
  <li style="margin-bottom: 8px;"><strong>الأسباب:</strong> وزن طين غير كافٍ، تكوينات ضعيفة</li>
  <li style="margin-bottom: 8px;"><strong>العلامات:</strong> قطع كبيرة في الغربال، حفرة غير منتظمة</li>
  <li style="margin-bottom: 8px;"><strong>العلاج:</strong> زيادة وزن الطين، تحسين خواص الطين</li>
</ul>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">2. انتفاخ الطبقات الطينية (Shale Swelling)</h4>
<ul style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;"><strong>التعريف:</strong> تمدد الطبقات بسبب امتصاص الماء</li>
  <li style="margin-bottom: 8px;"><strong>النوع:</strong> الطين الحساس للماء (مثل المونتموريلونايت)</li>
  <li style="margin-bottom: 8px;"><strong>العلامات:</strong> ضيق الحفرة، زيادة العزم والسحب</li>
  <li style="margin-bottom: 8px;"><strong>العلاج:</strong> طين زيتي أو إضافة مثبطات</li>
</ul>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">3. التوسع (Washout)</h4>
<ul style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;"><strong>التعريف:</strong> تآكل جدار البئر ليصبح أكبر من القطر الاسمي</li>
  <li style="margin-bottom: 8px;"><strong>الأسباب:</strong> تكوينات هشة، سرعة سائل عالية</li>
  <li style="margin-bottom: 8px;"><strong>المشاكل:</strong> استهلاك زائد للإسمنت، ضعف التقييم</li>
</ul>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">العوامل المؤثرة على الاستقرار:</h3>

<div style="background: #f0f9ff; padding: 16px; border-radius: 8px; border-right: 4px solid #0ea5e9; margin: 16px 0;">
  <h4 style="color: #0369a1; margin-bottom: 8px;">العوامل الميكانيكية:</h4>
  <ul style="margin: 0; padding-right: 20px;">
    <li>إجهادات الأرض الطبيعية</li>
    <li>ضغط الطين (يجب أن يعادل إجهادات الأرض)</li>
    <li>اتجاه وميل البئر</li>
    <li>صلابة الصخور</li>
  </ul>
</div>

<div style="background: #f0fdf4; padding: 16px; border-radius: 8px; border-right: 4px solid #22c55e; margin: 16px 0;">
  <h4 style="color: #166534; margin-bottom: 8px;">العوامل الكيميائية:</h4>
  <ul style="margin: 0; padding-right: 20px;">
    <li>تفاعل الطين مع سائل الحفر</li>
    <li>نشاط الماء في سائل الحفر</li>
    <li>وجود أملاح مثبطة</li>
    <li>درجة الحرارة</li>
  </ul>
</div>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">طرق المنع والعلاج:</h3>
<ol style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;"><strong>نافذة وزن الطين:</strong> البقاء بين ضغط الانهيار وضغط التكسير</li>
  <li style="margin-bottom: 8px;"><strong>أنظمة طين مناسبة:</strong> زيتي للطبقات الحساسة</li>
  <li style="margin-bottom: 8px;"><strong>التوسيع:</strong> reaming للمحافظة على القطر</li>
  <li style="margin-bottom: 8px;"><strong>التغليف المبكر:</strong> لعزل المناطق المشكلة</li>
  <li style="margin-bottom: 8px;"><strong>التحكم بسرعة السحب/الإنزال:</strong> لتجنب الصدمات</li>
</ol>

<div style="background: #fef3c7; padding: 16px; border-radius: 8px; border-right: 4px solid #f59e0b; margin: 20px 0;">
  <h4 style="color: #92400e; margin-bottom: 8px;">⚠️ نافذة وزن الطين:</h4>
  <p style="margin: 0;">الوزن المثالي = بين ضغط المسام (الحد الأدنى) وضغط التكسير (الحد الأعلى). النافذة الضيقة تتطلب دقة عالية وربما MPD.</p>
</div>
          `,
          keyTerms: [
            { term: 'انهيار الجدران', definition: 'سقوط أجزاء من جدار البئر بسبب ضغط غير كافٍ' },
            { term: 'انتفاخ الطين', definition: 'تمدد الطبقات الطينية بامتصاص الماء من سائل الحفر' },
            { term: 'Washout', definition: 'تآكل جدار البئر ليصبح أكبر من القطر الاسمي' },
            { term: 'نافذة وزن الطين', definition: 'النطاق الآمن بين ضغط المسام وضغط التكسير' }
          ],
          practiceQuestion: {
            question: 'ما هو أفضل علاج لانتفاخ الطبقات الطينية الحساسة للماء؟',
            options: [
              'زيادة سرعة الضخ',
              'استخدام طين مائي عادي',
              'استخدام طين زيتي أو إضافة مثبطات',
              'تقليل وزن الطين'
            ],
            correctAnswer: 2
          }
        },
        en: {
          title: 'Wellbore Instability',
          explanation: `
<h2 style="color: #1e3a5f; font-size: 1.8rem; border-bottom: 3px solid #1e3a5f; padding-bottom: 8px;">Wellbore Instability</h2>

<p style="line-height: 1.8; margin-bottom: 16px;">Wellbore instability includes any undesired change in wellbore shape or size. It can lead to serious problems like stuck pipe, difficulty running casing, and need for redrilling.</p>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">Types of Instability:</h3>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">1. Hole Collapse</h4>
<ul style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;"><strong>Definition:</strong> Falling of wellbore wall sections</li>
  <li style="margin-bottom: 8px;"><strong>Causes:</strong> Insufficient mud weight, weak formations</li>
  <li style="margin-bottom: 8px;"><strong>Signs:</strong> Large cuttings on shakers, irregular hole</li>
  <li style="margin-bottom: 8px;"><strong>Treatment:</strong> Increase mud weight, improve mud properties</li>
</ul>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">2. Shale Swelling</h4>
<ul style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;"><strong>Definition:</strong> Formation expansion due to water absorption</li>
  <li style="margin-bottom: 8px;"><strong>Type:</strong> Water-sensitive clay (like montmorillonite)</li>
  <li style="margin-bottom: 8px;"><strong>Signs:</strong> Tight hole, increased torque and drag</li>
  <li style="margin-bottom: 8px;"><strong>Treatment:</strong> Oil-based mud or add inhibitors</li>
</ul>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">3. Washout</h4>
<ul style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;"><strong>Definition:</strong> Wellbore erosion making it larger than nominal</li>
  <li style="margin-bottom: 8px;"><strong>Causes:</strong> Friable formations, high fluid velocity</li>
  <li style="margin-bottom: 8px;"><strong>Problems:</strong> Excess cement consumption, poor evaluation</li>
</ul>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">Factors Affecting Stability:</h3>

<div style="background: #f0f9ff; padding: 16px; border-radius: 8px; border-left: 4px solid #0ea5e9; margin: 16px 0;">
  <h4 style="color: #0369a1; margin-bottom: 8px;">Mechanical Factors:</h4>
  <ul style="margin: 0; padding-left: 20px;">
    <li>Natural earth stresses</li>
    <li>Mud pressure (must balance earth stresses)</li>
    <li>Well direction and inclination</li>
    <li>Rock strength</li>
  </ul>
</div>

<div style="background: #f0fdf4; padding: 16px; border-radius: 8px; border-left: 4px solid #22c55e; margin: 16px 0;">
  <h4 style="color: #166534; margin-bottom: 8px;">Chemical Factors:</h4>
  <ul style="margin: 0; padding-left: 20px;">
    <li>Mud interaction with formation clay</li>
    <li>Water activity in drilling fluid</li>
    <li>Presence of inhibiting salts</li>
    <li>Temperature</li>
  </ul>
</div>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">Prevention and Treatment Methods:</h3>
<ol style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;"><strong>Mud weight window:</strong> Stay between collapse and fracture pressure</li>
  <li style="margin-bottom: 8px;"><strong>Appropriate mud systems:</strong> Oil-based for sensitive formations</li>
  <li style="margin-bottom: 8px;"><strong>Reaming:</strong> To maintain hole gauge</li>
  <li style="margin-bottom: 8px;"><strong>Early casing:</strong> To isolate problem zones</li>
  <li style="margin-bottom: 8px;"><strong>Control tripping speed:</strong> To avoid surge/swab</li>
</ol>

<div style="background: #fef3c7; padding: 16px; border-radius: 8px; border-left: 4px solid #f59e0b; margin: 20px 0;">
  <h4 style="color: #92400e; margin-bottom: 8px;">⚠️ Mud Weight Window:</h4>
  <p style="margin: 0;">Ideal weight = between pore pressure (minimum) and fracture pressure (maximum). Narrow window requires high precision and possibly MPD.</p>
</div>
          `,
          keyTerms: [
            { term: 'Hole Collapse', definition: 'Falling of wellbore wall sections due to insufficient pressure' },
            { term: 'Shale Swelling', definition: 'Clay expansion by absorbing water from drilling fluid' },
            { term: 'Washout', definition: 'Wellbore erosion making it larger than nominal diameter' },
            { term: 'Mud Weight Window', definition: 'Safe range between pore pressure and fracture pressure' }
          ],
          practiceQuestion: {
            question: 'What is the best treatment for water-sensitive shale swelling?',
            options: [
              'Increase pump rate',
              'Use regular water-based mud',
              'Use oil-based mud or add inhibitors',
              'Reduce mud weight'
            ],
            correctAnswer: 2
          }
        }
      }
    },
    {
      day: 5,
      type: 'learning',
      content: {
        ar: {
          title: 'مشاكل العزم والسحب والمشاكل الأخرى',
          explanation: `
<h2 style="color: #1e3a5f; font-size: 1.8rem; border-bottom: 3px solid #1e3a5f; padding-bottom: 8px;">مشاكل العزم والسحب والمشاكل الأخرى</h2>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">العزم والسحب الزائد (Torque and Drag):</h3>

<p style="line-height: 1.8; margin-bottom: 16px;">العزم هو مقاومة الدوران، والسحب هو مقاومة الحركة الطولية. كلاهما ناتج عن الاحتكاك بين سلسلة الحفر وجدار البئر.</p>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">أسباب الزيادة:</h4>
<ul style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;"><strong>الآبار الموجهة:</strong> زوايا عالية تزيد التلامس</li>
  <li style="margin-bottom: 8px;"><strong>Dogleg شديد:</strong> تغيرات حادة في المسار</li>
  <li style="margin-bottom: 8px;"><strong>تراكم القطع:</strong> سوء تنظيف الحفرة</li>
  <li style="margin-bottom: 8px;"><strong>كعكة طين سميكة:</strong> في الطبقات النفاذة</li>
  <li style="margin-bottom: 8px;"><strong>ضيق الحفرة:</strong> انتفاخ أو انهيار</li>
</ul>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">الحلول:</h4>
<ul style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;">إضافة مواد تشحيم للطين</li>
  <li style="margin-bottom: 8px;">تحسين تنظيف الحفرة</li>
  <li style="margin-bottom: 8px;">التوسيع (Reaming) للمناطق الضيقة</li>
  <li style="margin-bottom: 8px;">تقليل شدة الـ Dogleg</li>
</ul>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">توقف الحفر (Drilling Break):</h3>
<ul style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;"><strong>التعريف:</strong> تغير مفاجئ في معدل الاختراق</li>
  <li style="margin-bottom: 8px;"><strong>زيادة مفاجئة:</strong> قد تدل على دخول طبقة عالية الضغط (تدفق محتمل)</li>
  <li style="margin-bottom: 8px;"><strong>انخفاض مفاجئ:</strong> قد تدل على دخول طبقة صلبة</li>
  <li style="margin-bottom: 8px;"><strong>الإجراء:</strong> التوقف ومراقبة البئر</li>
</ul>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">الاهتزازات (Vibrations):</h3>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">أنواع الاهتزازات:</h4>
<ul style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;"><strong>الاهتزاز المحوري (Bit Bounce):</strong> ارتداد رأس الحفر عمودياً</li>
  <li style="margin-bottom: 8px;"><strong>الاهتزاز الجانبي (Whirl):</strong> دوران غريب الأطوار</li>
  <li style="margin-bottom: 8px;"><strong>الاهتزاز الالتوائي (Stick-Slip):</strong> توقف ودوران متقطع</li>
</ul>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">المشاكل الناتجة:</h4>
<ul style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;">تآكل مبكر لرأس الحفر</li>
  <li style="margin-bottom: 8px;">إرهاق معدني للأنابيب</li>
  <li style="margin-bottom: 8px;">انخفاض معدل الاختراق</li>
  <li style="margin-bottom: 8px;">تلف أدوات القياس MWD</li>
</ul>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">مشاكل أخرى شائعة:</h3>

<div style="background: #f0f9ff; padding: 16px; border-radius: 8px; border-right: 4px solid #0ea5e9; margin: 16px 0;">
  <h4 style="color: #0369a1; margin-bottom: 8px;">تآكل الأنبوب (Pipe Wear):</h4>
  <ul style="margin: 0; padding-right: 20px;">
    <li>التآكل الداخلي بفعل التدفق</li>
    <li>التآكل الخارجي بالاحتكاك بالتغليف</li>
    <li>الفحص الدوري ضروري</li>
  </ul>
</div>

<div style="background: #fef3c7; padding: 16px; border-radius: 8px; border-right: 4px solid #f59e0b; margin: 16px 0;">
  <h4 style="color: #92400e; margin-bottom: 8px;">غازات سامة (H₂S, CO₂):</h4>
  <ul style="margin: 0; padding-right: 20px;">
    <li>كشف مبكر بأجهزة الإنذار</li>
    <li>معدات حماية شخصية</li>
    <li>خطة إخلاء جاهزة</li>
    <li>معادلة الغاز بالكيماويات</li>
  </ul>
</div>

<div style="background: #fee2e2; padding: 16px; border-radius: 8px; border-right: 4px solid #ef4444; margin: 20px 0;">
  <h4 style="color: #991b1b; margin-bottom: 8px;">⚠️ تذكر:</h4>
  <p style="margin: 0;">الوقاية أفضل من العلاج. التخطيط الجيد ومراقبة المؤشرات باستمرار يمنعان معظم المشاكل قبل حدوثها.</p>
</div>
          `,
          keyTerms: [
            { term: 'العزم', definition: 'مقاومة دوران سلسلة الحفر بسبب الاحتكاك' },
            { term: 'السحب', definition: 'مقاومة الحركة الطولية لسلسلة الحفر' },
            { term: 'Stick-Slip', definition: 'اهتزاز التوائي بتوقف ودوران متقطع' },
            { term: 'Drilling Break', definition: 'تغير مفاجئ في معدل الاختراق' }
          ],
          practiceQuestion: {
            question: 'ما الذي يدل عليه ارتفاع مفاجئ في معدل الاختراق (Drilling Break)؟',
            options: [
              'رأس حفر جديد',
              'احتمال دخول طبقة عالية الضغط',
              'انسداد في الفوهات',
              'زيادة وزن الطين'
            ],
            correctAnswer: 1
          }
        },
        en: {
          title: 'Torque, Drag, and Other Problems',
          explanation: `
<h2 style="color: #1e3a5f; font-size: 1.8rem; border-bottom: 3px solid #1e3a5f; padding-bottom: 8px;">Torque, Drag, and Other Problems</h2>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">Excessive Torque and Drag:</h3>

<p style="line-height: 1.8; margin-bottom: 16px;">Torque is rotational resistance, and drag is axial movement resistance. Both result from friction between drill string and wellbore wall.</p>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">Causes of Increase:</h4>
<ul style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;"><strong>Directional wells:</strong> High angles increase contact</li>
  <li style="margin-bottom: 8px;"><strong>Severe dogleg:</strong> Sharp path changes</li>
  <li style="margin-bottom: 8px;"><strong>Cuttings accumulation:</strong> Poor hole cleaning</li>
  <li style="margin-bottom: 8px;"><strong>Thick mud cake:</strong> In permeable zones</li>
  <li style="margin-bottom: 8px;"><strong>Tight hole:</strong> Swelling or collapse</li>
</ul>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">Solutions:</h4>
<ul style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;">Add lubricants to mud</li>
  <li style="margin-bottom: 8px;">Improve hole cleaning</li>
  <li style="margin-bottom: 8px;">Reaming tight spots</li>
  <li style="margin-bottom: 8px;">Reduce dogleg severity</li>
</ul>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">Drilling Break:</h3>
<ul style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;"><strong>Definition:</strong> Sudden change in rate of penetration</li>
  <li style="margin-bottom: 8px;"><strong>Sudden increase:</strong> May indicate high-pressure zone (potential kick)</li>
  <li style="margin-bottom: 8px;"><strong>Sudden decrease:</strong> May indicate hard formation</li>
  <li style="margin-bottom: 8px;"><strong>Action:</strong> Stop and monitor well</li>
</ul>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">Vibrations:</h3>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">Types of Vibrations:</h4>
<ul style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;"><strong>Axial (Bit Bounce):</strong> Vertical bit bouncing</li>
  <li style="margin-bottom: 8px;"><strong>Lateral (Whirl):</strong> Eccentric rotation</li>
  <li style="margin-bottom: 8px;"><strong>Torsional (Stick-Slip):</strong> Intermittent stopping and rotating</li>
</ul>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">Resulting Problems:</h4>
<ul style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;">Premature bit wear</li>
  <li style="margin-bottom: 8px;">Pipe metal fatigue</li>
  <li style="margin-bottom: 8px;">Reduced penetration rate</li>
  <li style="margin-bottom: 8px;">MWD tool damage</li>
</ul>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">Other Common Problems:</h3>

<div style="background: #f0f9ff; padding: 16px; border-radius: 8px; border-left: 4px solid #0ea5e9; margin: 16px 0;">
  <h4 style="color: #0369a1; margin-bottom: 8px;">Pipe Wear:</h4>
  <ul style="margin: 0; padding-left: 20px;">
    <li>Internal erosion from flow</li>
    <li>External wear from casing friction</li>
    <li>Regular inspection essential</li>
  </ul>
</div>

<div style="background: #fef3c7; padding: 16px; border-radius: 8px; border-left: 4px solid #f59e0b; margin: 16px 0;">
  <h4 style="color: #92400e; margin-bottom: 8px;">Toxic Gases (H₂S, CO₂):</h4>
  <ul style="margin: 0; padding-left: 20px;">
    <li>Early detection with alarms</li>
    <li>Personal protective equipment</li>
    <li>Evacuation plan ready</li>
    <li>Gas neutralization with chemicals</li>
  </ul>
</div>

<div style="background: #fee2e2; padding: 16px; border-radius: 8px; border-left: 4px solid #ef4444; margin: 20px 0;">
  <h4 style="color: #991b1b; margin-bottom: 8px;">⚠️ Remember:</h4>
  <p style="margin: 0;">Prevention is better than cure. Good planning and continuous indicator monitoring prevent most problems before they occur.</p>
</div>
          `,
          keyTerms: [
            { term: 'Torque', definition: 'Rotational resistance of drill string due to friction' },
            { term: 'Drag', definition: 'Axial movement resistance of drill string' },
            { term: 'Stick-Slip', definition: 'Torsional vibration with intermittent stopping and rotating' },
            { term: 'Drilling Break', definition: 'Sudden change in rate of penetration' }
          ],
          practiceQuestion: {
            question: 'What does a sudden increase in ROP (Drilling Break) indicate?',
            options: [
              'New drill bit',
              'Possible high-pressure zone entry',
              'Nozzle blockage',
              'Increased mud weight'
            ],
            correctAnswer: 1
          }
        }
      }
    },
    {
      day: 6,
      type: 'quiz',
      content: {
        ar: {
          title: 'اختبار مشاكل الحفر',
          explanation: 'اختبار شامل حول مشاكل الحفر والإجراءات العلاجية',
          keyTerms: []
        },
        en: {
          title: 'Drilling Problems Quiz',
          explanation: 'Comprehensive quiz on drilling problems and remedial actions',
          keyTerms: []
        }
      },
      quiz: {
        ar: [
          {
            question: 'ما هو السبب الرئيسي للالتصاق التفاضلي؟',
            options: ['انهيار جدار البئر', 'فرق الضغط في الطبقات النفاذة', 'تآكل رأس الحفر', 'زيادة سرعة الدوران'],
            correctAnswer: 1
          },
          {
            question: 'ما هي العلامة المميزة لحز المفتاح؟',
            options: ['لا يمكن الدوران', 'يمكن الإنزال لكن لا يمكن السحب', 'زيادة ضغط المضخة', 'نقص مستوى الطين'],
            correctAnswer: 1
          },
          {
            question: 'ما هي حبة الزيت (Oil Spotting)؟',
            options: ['اختبار للطين', 'ضخ سائل تحرير حول نقطة العلق', 'تشحيم رأس الحفر', 'قياس لزوجة الطين'],
            correctAnswer: 1
          },
          {
            question: 'أي مادة LCM مناسبة للفجوات الكبيرة؟',
            options: ['المواد الناعمة فقط', 'المواد الخشنة', 'الماء فقط', 'لا توجد مواد مناسبة'],
            correctAnswer: 1
          },
          {
            question: 'ما هو سبب انتفاخ الطبقات الطينية؟',
            options: ['ارتفاع الحرارة', 'امتصاص الماء من سائل الحفر', 'انخفاض الضغط', 'زيادة سرعة الضخ'],
            correctAnswer: 1
          },
          {
            question: 'ما هو Stick-Slip؟',
            options: ['نوع من رؤوس الحفر', 'اهتزاز التوائي متقطع', 'أداة صيد', 'مادة تشحيم'],
            correctAnswer: 1
          },
          {
            question: 'ماذا يدل ارتفاع مفاجئ في معدل الاختراق؟',
            options: ['رأس حفر جديد', 'احتمال طبقة عالية الضغط', 'وزن طين مثالي', 'تحسن التنظيف'],
            correctAnswer: 1
          },
          {
            question: 'ما هي أداة Overshot؟',
            options: ['أداة قياس', 'أداة صيد تمسك من الخارج', 'نوع من الصدامات', 'مضخة إسمنت'],
            correctAnswer: 1
          },
          {
            question: 'ما هو أفضل علاج للطبقات الحساسة للماء؟',
            options: ['طين مائي عادي', 'طين زيتي أو مثبط', 'زيادة الضخ', 'تقليل الوزن'],
            correctAnswer: 1
          },
          {
            question: 'متى يجب إيقاف السحب عند محاولة تحرير أنبوب عالق؟',
            options: ['عند أي مقاومة', 'عند 50% من قوة الشد', 'عند 80% من قوة الشد', 'لا يوجد حد'],
            correctAnswer: 2
          }
        ],
        en: [
          {
            question: 'What is the main cause of differential sticking?',
            options: ['Wellbore collapse', 'Pressure differential in permeable zones', 'Bit wear', 'Increased rotation speed'],
            correctAnswer: 1
          },
          {
            question: 'What is the characteristic sign of keyseating?',
            options: ['Cannot rotate', 'Can go down but cannot pull up', 'Increased pump pressure', 'Mud level drop'],
            correctAnswer: 1
          },
          {
            question: 'What is oil spotting?',
            options: ['Mud test', 'Pumping freeing fluid around stuck point', 'Bit lubrication', 'Viscosity measurement'],
            correctAnswer: 1
          },
          {
            question: 'Which LCM is suitable for large voids?',
            options: ['Fine materials only', 'Coarse materials', 'Water only', 'No suitable materials'],
            correctAnswer: 1
          },
          {
            question: 'What causes shale swelling?',
            options: ['High temperature', 'Water absorption from drilling fluid', 'Pressure drop', 'Increased pump rate'],
            correctAnswer: 1
          },
          {
            question: 'What is Stick-Slip?',
            options: ['Type of bit', 'Intermittent torsional vibration', 'Fishing tool', 'Lubricant'],
            correctAnswer: 1
          },
          {
            question: 'What does a sudden ROP increase indicate?',
            options: ['New bit', 'Possible high-pressure zone', 'Ideal mud weight', 'Improved cleaning'],
            correctAnswer: 1
          },
          {
            question: 'What is an Overshot?',
            options: ['Measurement tool', 'Fishing tool that grabs from outside', 'Type of jar', 'Cement pump'],
            correctAnswer: 1
          },
          {
            question: 'What is the best treatment for water-sensitive formations?',
            options: ['Regular water-based mud', 'Oil-based or inhibited mud', 'Increase pumping', 'Reduce weight'],
            correctAnswer: 1
          },
          {
            question: 'When should pulling stop when freeing stuck pipe?',
            options: ['At any resistance', 'At 50% tensile strength', 'At 80% tensile strength', 'No limit'],
            correctAnswer: 2
          }
        ]
      }
    },
    {
      day: 7,
      type: 'project',
      content: {
        ar: {
          title: 'مشروع مشاكل الحفر',
          explanation: 'تطبيق عملي لتحليل ومعالجة مشاكل الحفر',
          keyTerms: []
        },
        en: {
          title: 'Drilling Problems Project',
          explanation: 'Practical application of drilling problems analysis and treatment',
          keyTerms: []
        }
      },
      project: {
        ar: {
          title: 'تحليل سيناريو مشكلة حفر',
          description: 'قم بتحليل سيناريو مشكلة حفر وضع خطة علاجية شاملة.',
          instructions: [
            'السيناريو: أثناء الحفر في طبقة رملية على عمق 8000 قدم، توقف الأنبوب فجأة. يمكنك الدوران لكن لا يمكن السحب أو الإنزال. وزن الطين 12 ppg والتكوين نفاذ.',
            'حدد نوع العلق المحتمل وبرر إجابتك',
            'اكتب الخطوات الفورية التي ستتخذها',
            'حدد طرق التحرير المناسبة بالترتيب',
            'اذكر الإجراءات الوقائية لتجنب تكرار المشكلة'
          ],
          submissionType: 'both'
        },
        en: {
          title: 'Drilling Problem Scenario Analysis',
          description: 'Analyze a drilling problem scenario and develop a comprehensive remedial plan.',
          instructions: [
            'Scenario: While drilling in a sand formation at 8000 ft depth, the pipe suddenly stopped. You can rotate but cannot pull or lower. Mud weight is 12 ppg and formation is permeable.',
            'Identify the likely stuck type and justify your answer',
            'Write immediate steps you would take',
            'Identify appropriate freeing methods in order',
            'State preventive measures to avoid recurrence'
          ],
          submissionType: 'both'
        }
      }
    }
  ]
};
