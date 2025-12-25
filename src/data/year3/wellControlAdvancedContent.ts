import { WeeklyLesson } from '../weeklyContent';

export const wellControlAdvancedLesson: WeeklyLesson = {
  lessonId: 'well-control-advanced',
  days: [
    {
      day: 1,
      type: 'learning',
      content: {
        ar: {
          title: 'التحكم المتقدم بالبئر - مفاهيم أساسية',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 مقدمة عن التحكم المتقدم بالبئر</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
التحكم بالبئر (Well Control) هو أحد أهم جوانب السلامة في عمليات الحفر. يتضمن مجموعة من الإجراءات والتقنيات المصممة لمنع التدفق غير المتحكم به للسوائل من التكوينات الجوفية إلى السطح، والذي يُعرف بـ "الانفجار" (Blowout). في المستوى المتقدم، نتعمق في الفهم النظري والتطبيقات العملية للتحكم بالبئر في الظروف المعقدة.
</p>

<div style="background: linear-gradient(135deg, #dc262615, #dc262610); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #dc2626;">
<h3 style="color: #dc2626; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">⚠️ أهمية التحكم بالبئر</h3>
<p style="line-height: 1.8;">
فشل التحكم بالبئر يمكن أن يؤدي إلى كوارث بيئية وخسائر بشرية ومادية ضخمة. كارثة Deepwater Horizon عام 2010 هي مثال واضح على ما يمكن أن يحدث عند فشل أنظمة التحكم بالبئر.
</p>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 المفاهيم الأساسية في التحكم بالبئر</h2>

<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #059669; color: #065f46;">
<h3 style="color: #059669; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">1️⃣ الضغط الهيدروستاتيكي (Hydrostatic Pressure)</h3>
<p style="line-height: 1.8; margin-bottom: 1rem; color: #065f46;">
الضغط الهيدروستاتيكي هو الضغط الناتج عن وزن عمود سائل الحفر. يُحسب بالمعادلة:
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px; text-align: center; font-family: monospace; font-size: 1.1rem; color: #1e3a5f;">
P<sub>h</sub> = 0.052 × ρ × TVD
</div>
<p style="margin-top: 0.5rem; font-size: 0.9rem; color: #065f46;">
حيث: P<sub>h</sub> = الضغط (psi)، ρ = كثافة الطين (ppg)، TVD = العمق الحقيقي العمودي (ft)
</p>
</div>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #2563eb; color: #1e3a8a;">
<h3 style="color: #1e40af; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">2️⃣ ضغط التكوين (Formation Pressure)</h3>
<p style="line-height: 1.8; color: #1e3a8a;">
ضغط التكوين هو الضغط الموجود في مسامات الصخور تحت السطح. يمكن أن يكون:
</p>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2; margin-top: 0.5rem; color: #1e3a8a;">
<li><strong>عادي (Normal):</strong> يساوي ضغط عمود ماء بنفس العمق (~0.465 psi/ft)</li>
<li><strong>غير طبيعي (Abnormal):</strong> أعلى من العادي</li>
<li><strong>تحت العادي (Subnormal):</strong> أقل من العادي</li>
</ul>
</div>

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #f59e0b; color: #78350f;">
<h3 style="color: #92400e; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">3️⃣ الحاجز الأولي والثانوي (Primary & Secondary Barriers)</h3>
<p style="line-height: 1.8; color: #78350f;">
<strong>الحاجز الأولي:</strong> سائل الحفر بكثافة كافية للحفاظ على الضغط الهيدروستاتيكي أعلى من ضغط التكوين.
</p>
<p style="line-height: 1.8; margin-top: 0.5rem; color: #78350f;">
<strong>الحاجز الثانوي:</strong> مانع الانفجار (BOP) الذي يُستخدم عند فشل الحاجز الأولي.
</p>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 مؤشرات الركلة (Kick Indicators)</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
الركلة (Kick) هي تدفق غير مرغوب من سوائل التكوين إلى البئر. التعرف المبكر على الركلة أمر حاسم:
</p>

<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #64748b; color: #334155;">
<h3 style="color: #475569; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">المؤشرات الإيجابية (أثناء الحفر):</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2; color: #334155;">
<li>زيادة في معدل التدفق الخارج (Flow Rate)</li>
<li>زيادة في حجم حوض الطين (Pit Volume)</li>
<li>زيادة في سرعة الاختراق (ROP)</li>
<li>انخفاض في كثافة الطين الخارج</li>
<li>زيادة في نسبة الغاز في الطين</li>
</ul>
</div>

<div style="background: #fae8ff; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #a855f7; color: #581c87;">
<h3 style="color: #7c3aed; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">المؤشرات أثناء الرحلات (Tripping):</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2; color: #581c87;">
<li>عدم ملء البئر بالحجم المتوقع عند السحب</li>
<li>تدفق السائل عند إيقاف المضخات</li>
<li>عدم قبول البئر للحجم المتوقع عند الإنزال</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #7c3aed; color: #581c87;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2; color: #581c87;">
<li>التحكم بالبئر يعتمد على موازنة الضغط الهيدروستاتيكي مع ضغط التكوين</li>
<li>الحاجز الأولي هو سائل الحفر والحاجز الثانوي هو BOP</li>
<li>التعرف المبكر على مؤشرات الركلة ضروري للسلامة</li>
<li>كثافة الطين والعمق الحقيقي عوامل أساسية في حسابات الضغط</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Hydrostatic Pressure', definition: 'الضغط الناتج عن وزن عمود سائل الحفر، ويُحسب من الكثافة والعمق' },
            { term: 'Formation Pressure', definition: 'الضغط الموجود في مسامات الصخور تحت السطح' },
            { term: 'Kick', definition: 'تدفق غير مرغوب من سوائل التكوين إلى البئر عندما يتجاوز ضغط التكوين الضغط الهيدروستاتيكي' },
            { term: 'Primary Barrier', definition: 'سائل الحفر بكثافة كافية للتحكم بضغط التكوين' },
            { term: 'Secondary Barrier', definition: 'مانع الانفجار (BOP) كخط دفاع ثاني' },
          ],
          practiceQuestion: {
            question: 'ما هو الحاجز الأولي في التحكم بالبئر؟',
            options: ['مانع الانفجار BOP', 'سائل الحفر بالكثافة المناسبة', 'أنابيب الكيسنق', 'رأس البئر'],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Advanced Well Control - Basic Concepts',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Introduction to Advanced Well Control</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
Well Control is one of the most critical safety aspects in drilling operations. It encompasses a set of procedures and techniques designed to prevent uncontrolled flow of formation fluids to the surface, known as a "Blowout". At the advanced level, we delve deeper into the theoretical understanding and practical applications of well control in complex conditions.
</p>

<div style="background: linear-gradient(135deg, #dc262615, #dc262610); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #dc2626;">
<h3 style="color: #dc2626; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">⚠️ Importance of Well Control</h3>
<p style="line-height: 1.8;">
Failure in well control can lead to environmental disasters and massive human and material losses. The Deepwater Horizon disaster in 2010 is a clear example of what can happen when well control systems fail.
</p>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Fundamental Concepts in Well Control</h2>

<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #059669; color: #065f46;">
<h3 style="color: #059669; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">1️⃣ Hydrostatic Pressure</h3>
<p style="line-height: 1.8; margin-bottom: 1rem; color: #065f46;">
Hydrostatic pressure is the pressure exerted by a column of drilling fluid. It's calculated using:
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px; text-align: center; font-family: monospace; font-size: 1.1rem; color: #1e3a5f;">
P<sub>h</sub> = 0.052 × ρ × TVD
</div>
<p style="margin-top: 0.5rem; font-size: 0.9rem; color: #065f46;">
Where: P<sub>h</sub> = Pressure (psi), ρ = Mud weight (ppg), TVD = True Vertical Depth (ft)
</p>
</div>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #2563eb; color: #1e3a8a;">
<h3 style="color: #1e40af; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">2️⃣ Formation Pressure</h3>
<p style="line-height: 1.8; color: #1e3a8a;">
Formation pressure is the pressure within rock pore spaces underground. It can be:
</p>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2; margin-top: 0.5rem; color: #1e3a8a;">
<li><strong>Normal:</strong> Equal to a water column pressure at the same depth (~0.465 psi/ft)</li>
<li><strong>Abnormal:</strong> Higher than normal</li>
<li><strong>Subnormal:</strong> Lower than normal</li>
</ul>
</div>

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #f59e0b; color: #78350f;">
<h3 style="color: #92400e; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">3️⃣ Primary & Secondary Barriers</h3>
<p style="line-height: 1.8; color: #78350f;">
<strong>Primary Barrier:</strong> Drilling fluid with sufficient density to maintain hydrostatic pressure above formation pressure.
</p>
<p style="line-height: 1.8; margin-top: 0.5rem; color: #78350f;">
<strong>Secondary Barrier:</strong> Blowout Preventer (BOP) used when the primary barrier fails.
</p>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Kick Indicators</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
A kick is an unwanted influx of formation fluids into the wellbore. Early recognition is critical:
</p>

<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #64748b; color: #334155;">
<h3 style="color: #475569; font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem;">Positive Indicators (While Drilling):</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2; color: #334155;">
<li>Increase in flow rate out</li>
<li>Increase in pit volume</li>
<li>Increase in rate of penetration (ROP)</li>
<li>Decrease in mud weight out</li>
<li>Increase in gas content</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #7c3aed; color: #581c87;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2; color: #581c87;">
<li>Well control relies on balancing hydrostatic pressure with formation pressure</li>
<li>Primary barrier is drilling fluid, secondary barrier is BOP</li>
<li>Early kick detection is essential for safety</li>
<li>Mud weight and TVD are fundamental in pressure calculations</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Hydrostatic Pressure', definition: 'Pressure exerted by the weight of a drilling fluid column' },
            { term: 'Formation Pressure', definition: 'Pressure within rock pore spaces underground' },
            { term: 'Kick', definition: 'Unwanted influx of formation fluids when formation pressure exceeds hydrostatic pressure' },
            { term: 'Primary Barrier', definition: 'Drilling fluid with adequate weight to control formation pressure' },
            { term: 'Secondary Barrier', definition: 'Blowout Preventer (BOP) as the second line of defense' },
          ],
          practiceQuestion: {
            question: 'What is the primary barrier in well control?',
            options: ['BOP', 'Drilling fluid with proper density', 'Casing', 'Wellhead'],
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
          title: 'إجراءات إغلاق البئر (Shut-In Procedures)',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 إجراءات إغلاق البئر عند حدوث ركلة</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
عند اكتشاف ركلة، يجب إغلاق البئر فوراً لمنع تفاقم الموقف. هناك طريقتان رئيسيتان للإغلاق تعتمدان على وضع سلسلة الحفر في البئر.
</p>

<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #059669; color: #065f46;">
<h3 style="color: #059669; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">1️⃣ إغلاق صعب (Hard Shut-In)</h3>
<p style="line-height: 1.8; margin-bottom: 1rem; color: #065f46;">
في هذه الطريقة، يتم إغلاق BOP مباشرة دون فتح خط الخنق (Choke Line). تُستخدم عندما يكون الوقت حرجاً ونحتاج لإيقاف التدفق فوراً.
</p>
<p style="font-weight: bold; margin-bottom: 0.5rem; color: #065f46;">الخطوات:</p>
<ol style="list-style-type: decimal; padding-right: 1.5rem; line-height: 2; color: #065f46;">
<li>رفع Kelly/Top Drive عن الأرضية</li>
<li>إيقاف المضخات</li>
<li>إغلاق BOP</li>
<li>فتح خط الخنق</li>
<li>قراءة الضغوط</li>
</ol>
</div>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #2563eb; color: #1e3a8a;">
<h3 style="color: #1e40af; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">2️⃣ إغلاق ناعم (Soft Shut-In)</h3>
<p style="line-height: 1.8; margin-bottom: 1rem; color: #1e3a8a;">
في هذه الطريقة، يتم فتح خط الخنق قبل إغلاق BOP لتجنب صدمة الضغط (Pressure Surge).
</p>
<p style="font-weight: bold; margin-bottom: 0.5rem; color: #1e3a8a;">الخطوات:</p>
<ol style="list-style-type: decimal; padding-right: 1.5rem; line-height: 2; color: #1e3a8a;">
<li>رفع Kelly/Top Drive عن الأرضية</li>
<li>إيقاف المضخات</li>
<li>فتح خط الخنق</li>
<li>إغلاق BOP</li>
<li>إغلاق خط الخنق</li>
<li>قراءة الضغوط</li>
</ol>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 قراءة الضغوط بعد الإغلاق</h2>

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #f59e0b; color: #78350f;">
<h3 style="color: #92400e; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">الضغوط المهمة:</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2; color: #78350f;">
<li><strong>SIDPP (Shut-In Drill Pipe Pressure):</strong> ضغط الإغلاق على أنبوب الحفر</li>
<li><strong>SICP (Shut-In Casing Pressure):</strong> ضغط الإغلاق على الفتحة الحلقية</li>
<li><strong>Pit Gain:</strong> الزيادة في حجم حوض الطين</li>
</ul>
</div>

<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #64748b; color: #334155;">
<h3 style="color: #475569; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">حساب كثافة القتل (Kill Mud Weight)</h3>
<div style="background: #fff; padding: 1rem; border-radius: 8px; text-align: center; font-family: monospace; font-size: 1.1rem; margin-bottom: 1rem; color: #1e3a5f;">
KMW = OMW + (SIDPP / (0.052 × TVD))
</div>
<p style="font-size: 0.9rem; color: #334155;">
حيث: KMW = كثافة طين القتل، OMW = كثافة الطين الأصلية، SIDPP = ضغط الإغلاق، TVD = العمق الحقيقي
</p>
</div>

<div style="background: linear-gradient(135deg, #dc262615, #dc262610); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #dc2626; color: #7f1d1d;">
<h3 style="color: #dc2626; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">⚠️ نقاط السلامة الحرجة</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2; color: #7f1d1d;">
<li>لا تحاول الاستمرار بالحفر بعد اكتشاف ركلة</li>
<li>تأكد من أن جميع أفراد الطاقم في مواقعهم</li>
<li>لا تغلق BOP إذا كان المفصل (Tool Joint) داخل preventers</li>
<li>سجّل الوقت والضغوط بدقة</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #7c3aed; color: #581c87;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2; color: #581c87;">
<li>Hard Shut-In أسرع لكن يسبب صدمة ضغط</li>
<li>Soft Shut-In أبطأ لكن أكثر أماناً للتكوينات الضعيفة</li>
<li>SIDPP و SICP ضروريان لحساب كثافة القتل</li>
<li>التوثيق الدقيق للأحداث والضغوط ضروري</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Hard Shut-In', definition: 'إغلاق BOP مباشرة دون فتح خط الخنق - أسرع لكن يسبب صدمة ضغط' },
            { term: 'Soft Shut-In', definition: 'فتح خط الخنق قبل إغلاق BOP - أبطأ لكن أكثر أماناً' },
            { term: 'SIDPP', definition: 'ضغط الإغلاق على أنبوب الحفر - يمثل ضغط التكوين الزائد' },
            { term: 'SICP', definition: 'ضغط الإغلاق على الفتحة الحلقية' },
            { term: 'Kill Mud Weight', definition: 'كثافة الطين المطلوبة لموازنة ضغط التكوين' },
          ],
          practiceQuestion: {
            question: 'ما الفرق الرئيسي بين Hard Shut-In و Soft Shut-In؟',
            options: [
              'Hard Shut-In أبطأ من Soft Shut-In',
              'Soft Shut-In يفتح خط الخنق قبل إغلاق BOP',
              'Hard Shut-In لا يستخدم BOP',
              'لا يوجد فرق بينهما'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Shut-In Procedures',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Well Shut-In Procedures During a Kick</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
When a kick is detected, the well must be shut in immediately to prevent escalation. There are two main shut-in methods depending on the drillstring position in the well.
</p>

<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #059669; color: #065f46;">
<h3 style="color: #059669; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">1️⃣ Hard Shut-In</h3>
<p style="line-height: 1.8; margin-bottom: 1rem; color: #065f46;">
In this method, the BOP is closed directly without opening the choke line. Used when time is critical and flow must be stopped immediately.
</p>
<p style="font-weight: bold; margin-bottom: 0.5rem; color: #065f46;">Steps:</p>
<ol style="list-style-type: decimal; padding-left: 1.5rem; line-height: 2; color: #065f46;">
<li>Raise Kelly/Top Drive off the floor</li>
<li>Stop pumps</li>
<li>Close BOP</li>
<li>Open choke line</li>
<li>Read pressures</li>
</ol>
</div>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #2563eb; color: #1e3a8a;">
<h3 style="color: #1e40af; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">2️⃣ Soft Shut-In</h3>
<p style="line-height: 1.8; margin-bottom: 1rem; color: #1e3a8a;">
In this method, the choke line is opened before closing the BOP to avoid pressure surge.
</p>
<p style="font-weight: bold; margin-bottom: 0.5rem; color: #1e3a8a;">Steps:</p>
<ol style="list-style-type: decimal; padding-left: 1.5rem; line-height: 2; color: #1e3a8a;">
<li>Raise Kelly/Top Drive off the floor</li>
<li>Stop pumps</li>
<li>Open choke line</li>
<li>Close BOP</li>
<li>Close choke line</li>
<li>Read pressures</li>
</ol>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Reading Pressures After Shut-In</h2>

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #f59e0b; color: #78350f;">
<h3 style="color: #92400e; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">Critical Pressures:</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2; color: #78350f;">
<li><strong>SIDPP (Shut-In Drill Pipe Pressure):</strong> Pressure on the drillpipe</li>
<li><strong>SICP (Shut-In Casing Pressure):</strong> Pressure on the annulus</li>
<li><strong>Pit Gain:</strong> Increase in mud pit volume</li>
</ul>
</div>

<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #64748b; color: #334155;">
<h3 style="color: #475569; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">Kill Mud Weight Calculation</h3>
<div style="background: #fff; padding: 1rem; border-radius: 8px; text-align: center; font-family: monospace; font-size: 1.1rem; margin-bottom: 1rem; color: #1e3a5f;">
KMW = OMW + (SIDPP / (0.052 × TVD))
</div>
<p style="font-size: 0.9rem; color: #334155;">
Where: KMW = Kill Mud Weight, OMW = Original Mud Weight, SIDPP = Shut-In Drill Pipe Pressure, TVD = True Vertical Depth
</p>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #7c3aed; color: #581c87;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2; color: #581c87;">
<li>Hard Shut-In is faster but causes pressure surge</li>
<li>Soft Shut-In is slower but safer for weak formations</li>
<li>SIDPP and SICP are essential for kill weight calculations</li>
<li>Accurate documentation of events and pressures is critical</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Hard Shut-In', definition: 'Closing BOP directly without opening choke - faster but causes pressure surge' },
            { term: 'Soft Shut-In', definition: 'Opening choke before closing BOP - slower but safer' },
            { term: 'SIDPP', definition: 'Shut-In Drill Pipe Pressure - represents excess formation pressure' },
            { term: 'SICP', definition: 'Shut-In Casing Pressure' },
            { term: 'Kill Mud Weight', definition: 'Mud weight required to balance formation pressure' },
          ],
          practiceQuestion: {
            question: 'What is the main difference between Hard Shut-In and Soft Shut-In?',
            options: [
              'Hard Shut-In is slower than Soft Shut-In',
              'Soft Shut-In opens the choke before closing BOP',
              'Hard Shut-In does not use BOP',
              'There is no difference'
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
          title: 'طرق قتل البئر (Well Kill Methods)',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 طرق قتل البئر الأساسية</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
بعد إغلاق البئر وقراءة الضغوط، يجب اختيار طريقة مناسبة لقتل البئر وإعادة التحكم. هناك ثلاث طرق رئيسية، كل منها له مميزاته وعيوبه.
</p>

<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #059669;">
<h3 style="color: #059669; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">1️⃣ طريقة الحفار (Driller's Method)</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
تتضمن هذه الطريقة دورتين من الضخ:
</p>
<p style="font-weight: bold; margin-bottom: 0.5rem;">الدورة الأولى:</p>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2; margin-bottom: 1rem;">
<li>ضخ الطين الأصلي لإخراج الركلة من البئر</li>
<li>الحفاظ على ضغط ثابت على أنبوب الحفر</li>
</ul>
<p style="font-weight: bold; margin-bottom: 0.5rem;">الدورة الثانية:</p>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>ضخ طين القتل الثقيل</li>
<li>استبدال الطين الخفيف بالثقيل</li>
</ul>
<div style="background: #dcfce7; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
<p><strong>المميزات:</strong> بسيطة، لا تحتاج وقت لتحضير طين القتل</p>
<p><strong>العيوب:</strong> تستغرق وقتاً أطول، ضغوط أعلى على الفتحة الحلقية</p>
</div>
</div>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #2563eb;">
<h3 style="color: #1e40af; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">2️⃣ طريقة الانتظار والتثقيل (Wait & Weight)</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
تتضمن هذه الطريقة دورة واحدة فقط:
</p>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>تحضير طين القتل أولاً (الانتظار)</li>
<li>ضخ طين القتل مباشرة لإخراج الركلة واستبدال الطين في نفس الوقت</li>
</ul>
<div style="background: #dbeafe; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
<p><strong>المميزات:</strong> أسرع، ضغوط أقل على الفتحة الحلقية</p>
<p><strong>العيوب:</strong> تحتاج وقتاً لتحضير الطين، حسابات أكثر تعقيداً</p>
</div>
</div>

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #f59e0b;">
<h3 style="color: #92400e; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">3️⃣ الطريقة المتزامنة (Concurrent Method)</h3>
<p style="line-height: 1.8;">
تجمع بين الطريقتين السابقتين:
</p>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2; margin-top: 0.5rem;">
<li>البدء بضخ الطين الأصلي فوراً</li>
<li>زيادة كثافة الطين تدريجياً أثناء الضخ</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 جدول ضغط أنبوب الحفر (Drill Pipe Pressure Schedule)</h2>

<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #64748b;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
في طريقة Wait & Weight، يجب حساب جدول الضغط لمعرفة الضغط المتوقع على أنبوب الحفر أثناء ضخ طين القتل:
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-family: monospace; text-align: center;">
الضغط الابتدائي = ICP = SIDPP + SPR
</p>
<p style="font-family: monospace; text-align: center; margin-top: 0.5rem;">
الضغط النهائي = FCP = SPR × (KMW / OMW)
</p>
</div>
<p style="font-size: 0.9rem;">
SPR = Slow Pump Rate pressure (ضغط معدل الضخ البطيء)
</p>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>Driller's Method: دورتين، بسيطة لكن أبطأ</li>
<li>Wait & Weight: دورة واحدة، أسرع وضغوط أقل</li>
<li>اختيار الطريقة يعتمد على الظروف والمعدات المتاحة</li>
<li>جدول الضغط ضروري لمراقبة عملية القتل</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Driller\'s Method', definition: 'طريقة من دورتين - إخراج الركلة ثم استبدال الطين' },
            { term: 'Wait & Weight', definition: 'طريقة من دورة واحدة - تحضير طين القتل أولاً ثم ضخه' },
            { term: 'ICP (Initial Circulating Pressure)', definition: 'الضغط الابتدائي للضخ = SIDPP + SPR' },
            { term: 'FCP (Final Circulating Pressure)', definition: 'الضغط النهائي عند وصول طين القتل للحفارة' },
            { term: 'SPR (Slow Pump Rate)', definition: 'معدل الضخ البطيء المستخدم في عمليات القتل' },
          ],
          practiceQuestion: {
            question: 'كم عدد دورات الضخ في طريقة Wait & Weight؟',
            options: ['دورة واحدة', 'دورتين', 'ثلاث دورات', 'أربع دورات'],
            correctAnswer: 0,
          },
        },
        en: {
          title: 'Well Kill Methods',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Primary Well Kill Methods</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
After shutting in the well and reading pressures, an appropriate kill method must be selected to regain control. There are three main methods, each with advantages and disadvantages.
</p>

<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #059669;">
<h3 style="color: #059669; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">1️⃣ Driller's Method</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
This method involves two circulation cycles:
</p>
<p style="font-weight: bold; margin-bottom: 0.5rem;">First Circulation:</p>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2; margin-bottom: 1rem;">
<li>Pump original mud to circulate the kick out</li>
<li>Maintain constant drill pipe pressure</li>
</ul>
<p style="font-weight: bold; margin-bottom: 0.5rem;">Second Circulation:</p>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>Pump heavy kill mud</li>
<li>Replace light mud with heavy mud</li>
</ul>
<div style="background: #dcfce7; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
<p><strong>Advantages:</strong> Simple, no time needed to prepare kill mud</p>
<p><strong>Disadvantages:</strong> Takes longer, higher annular pressures</p>
</div>
</div>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #2563eb;">
<h3 style="color: #1e40af; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">2️⃣ Wait & Weight Method</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
This method involves only one circulation:
</p>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>Prepare kill mud first (wait)</li>
<li>Pump kill mud to circulate kick out and displace mud simultaneously</li>
</ul>
<div style="background: #dbeafe; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
<p><strong>Advantages:</strong> Faster, lower annular pressures</p>
<p><strong>Disadvantages:</strong> Needs time to prepare mud, more complex calculations</p>
</div>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>Driller's Method: Two cycles, simple but slower</li>
<li>Wait & Weight: One cycle, faster with lower pressures</li>
<li>Method selection depends on conditions and available equipment</li>
<li>Pressure schedule is essential for monitoring the kill operation</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Driller\'s Method', definition: 'Two-cycle method - circulate kick out then displace mud' },
            { term: 'Wait & Weight', definition: 'Single-cycle method - prepare kill mud first then pump' },
            { term: 'ICP (Initial Circulating Pressure)', definition: 'Initial pumping pressure = SIDPP + SPR' },
            { term: 'FCP (Final Circulating Pressure)', definition: 'Final pressure when kill mud reaches the bit' },
            { term: 'SPR (Slow Pump Rate)', definition: 'Slow pump rate used during kill operations' },
          ],
          practiceQuestion: {
            question: 'How many circulation cycles does the Wait & Weight method have?',
            options: ['One cycle', 'Two cycles', 'Three cycles', 'Four cycles'],
            correctAnswer: 0,
          },
        },
      },
    },
    {
      day: 4,
      type: 'learning',
      content: {
        ar: {
          title: 'حالات خاصة في التحكم بالبئر',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 حالات التحكم بالبئر المعقدة</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
ليست كل حالات الركلة متشابهة. هناك عدة سيناريوهات معقدة تتطلب إجراءات خاصة ومعرفة متقدمة للتعامل معها بأمان.
</p>

<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #059669;">
<h3 style="color: #059669; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">1️⃣ الركلة أثناء الرحلات (Kick While Tripping)</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
عند حدوث ركلة أثناء سحب أو إنزال سلسلة الحفر، يجب:
</p>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>إيقاف الرحلة فوراً</li>
<li>تركيب الصمام الداخلي (Inside BOP) على سلسلة الحفر</li>
<li>إنزال السلسلة للقاع إذا كان ذلك آمناً</li>
<li>تطبيق إجراءات الإغلاق المناسبة</li>
</ul>
</div>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #2563eb;">
<h3 style="color: #1e40af; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">2️⃣ انسداد أنبوب الحفر (Plugged Drillstring)</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
عندما يكون أنبوب الحفر مسدوداً، لا يمكن قراءة SIDPP الحقيقي. في هذه الحالة:
</p>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>استخدام SICP لحساب كثافة القتل التقريبية</li>
<li>إضافة هامش أمان للكثافة</li>
<li>محاولة فتح الانسداد بحذر إذا كان ذلك ممكناً</li>
</ul>
</div>

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #f59e0b;">
<h3 style="color: #92400e; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">3️⃣ التدفق تحت الأرض (Underground Blowout)</h3>
<p style="line-height: 1.8;">
يحدث عندما يتدفق سائل التكوين من منطقة عالية الضغط إلى منطقة ضعيفة تحت السطح:
</p>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2; margin-top: 0.5rem;">
<li>صعوبة في السيطرة لعدم وجود تدفق على السطح</li>
<li>قد يتطلب حفر بئر إغاثة (Relief Well)</li>
<li>تقنيات خاصة للتشخيص والمعالجة</li>
</ul>
</div>

<div style="background: #fae8ff; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #a855f7;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">4️⃣ ركلة الغاز الضحل (Shallow Gas Kick)</h3>
<p style="line-height: 1.8;">
خطيرة جداً لأن الغاز يتمدد بسرعة كبيرة بالقرب من السطح:
</p>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2; margin-top: 0.5rem;">
<li>تتطلب إجراءات سريعة جداً</li>
<li>قد لا يكون هناك وقت للإغلاق التقليدي</li>
<li>استخدام Diverter لتوجيه التدفق بعيداً</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 تمدد الغاز (Gas Expansion)</h2>

<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #64748b;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
يتمدد الغاز عند صعوده في البئر وفقاً لقانون Boyle:
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px; text-align: center; font-family: monospace; font-size: 1.1rem;">
P₁V₁ = P₂V₂
</div>
<p style="margin-top: 1rem; line-height: 1.8;">
فقاعة غاز بحجم 10 براميل على عمق 10,000 قدم ستتمدد إلى حوالي 200+ برميل عند السطح!
</p>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>الركلة أثناء الرحلات تتطلب تركيب صمام داخلي</li>
<li>انسداد الأنبوب يعقد حساب كثافة القتل</li>
<li>التدفق تحت الأرض من أصعب الحالات</li>
<li>الغاز يتمدد بشكل كبير عند الصعود للسطح</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Inside BOP', definition: 'صمام يُركب داخل سلسلة الحفر لمنع التدفق من خلالها' },
            { term: 'Underground Blowout', definition: 'تدفق سوائل التكوين بين طبقات مختلفة تحت السطح' },
            { term: 'Shallow Gas', definition: 'غاز قريب من السطح يتمدد بسرعة كبيرة' },
            { term: 'Diverter', definition: 'جهاز لتوجيه التدفق بعيداً عن الجهاز في حالات الغاز الضحل' },
            { term: 'Boyle\'s Law', definition: 'قانون يصف العلاقة العكسية بين ضغط وحجم الغاز' },
          ],
          practiceQuestion: {
            question: 'ماذا يجب أن تفعل أولاً عند حدوث ركلة أثناء سحب الأنابيب؟',
            options: [
              'الاستمرار في السحب',
              'إيقاف الرحلة وتركيب الصمام الداخلي',
              'زيادة سرعة السحب',
              'تشغيل المضخات'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Special Well Control Situations',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Complex Well Control Situations</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
Not all kick situations are the same. There are several complex scenarios that require special procedures and advanced knowledge to handle safely.
</p>

<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #059669;">
<h3 style="color: #059669; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">1️⃣ Kick While Tripping</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
When a kick occurs while pulling or running drillstring:
</p>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>Stop tripping immediately</li>
<li>Install Inside BOP on the drillstring</li>
<li>Run back to bottom if safe</li>
<li>Apply appropriate shut-in procedures</li>
</ul>
</div>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #2563eb;">
<h3 style="color: #1e40af; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">2️⃣ Plugged Drillstring</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">
When the drillstring is plugged, true SIDPP cannot be read:
</p>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>Use SICP to estimate kill weight</li>
<li>Add safety margin to the density</li>
<li>Attempt to clear the blockage carefully if possible</li>
</ul>
</div>

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #f59e0b;">
<h3 style="color: #92400e; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">3️⃣ Underground Blowout</h3>
<p style="line-height: 1.8;">
Occurs when formation fluid flows from a high-pressure zone to a weak zone underground:
</p>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2; margin-top: 0.5rem;">
<li>Difficult to control as there's no surface flow</li>
<li>May require drilling a relief well</li>
<li>Special techniques for diagnosis and treatment</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Gas Expansion</h2>

<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #64748b;">
<p style="line-height: 1.8; margin-bottom: 1rem;">
Gas expands as it rises in the well according to Boyle's Law:
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px; text-align: center; font-family: monospace; font-size: 1.1rem;">
P₁V₁ = P₂V₂
</div>
<p style="margin-top: 1rem; line-height: 1.8;">
A 10-barrel gas bubble at 10,000 ft will expand to about 200+ barrels at surface!
</p>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>Kick while tripping requires installing inside BOP</li>
<li>Plugged pipe complicates kill weight calculation</li>
<li>Underground blowout is among the most difficult situations</li>
<li>Gas expands significantly as it rises to surface</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Inside BOP', definition: 'Valve installed inside drillstring to prevent flow through it' },
            { term: 'Underground Blowout', definition: 'Formation fluid flow between different layers underground' },
            { term: 'Shallow Gas', definition: 'Gas near surface that expands very rapidly' },
            { term: 'Diverter', definition: 'Device to direct flow away from the rig in shallow gas situations' },
            { term: 'Boyle\'s Law', definition: 'Law describing inverse relationship between gas pressure and volume' },
          ],
          practiceQuestion: {
            question: 'What should you do first when a kick occurs while pulling pipe?',
            options: [
              'Continue pulling',
              'Stop tripping and install inside BOP',
              'Increase pulling speed',
              'Start the pumps'
            ],
            correctAnswer: 1,
          },
        },
      },
    },
    {
      day: 5,
      type: 'quiz',
      content: {
        ar: {
          title: 'اختبار التحكم المتقدم بالبئر',
          explanation: 'اختبر معلوماتك عن التحكم المتقدم بالبئر',
          keyTerms: [],
        },
        en: {
          title: 'Advanced Well Control Quiz',
          explanation: 'Test your knowledge of Advanced Well Control',
          keyTerms: [],
        },
      },
      quiz: {
        ar: [
          {
            question: 'ما هو الحاجز الأولي في التحكم بالبئر؟',
            options: ['مانع الانفجار BOP', 'سائل الحفر', 'أنابيب الكيسنق', 'رأس البئر'],
            correctAnswer: 1,
          },
          {
            question: 'كيف تُحسب كثافة طين القتل (Kill Mud Weight)؟',
            options: [
              'KMW = OMW - (SIDPP / 0.052 × TVD)',
              'KMW = OMW × SIDPP',
              'KMW = OMW + (SIDPP / 0.052 × TVD)',
              'KMW = SIDPP / TVD'
            ],
            correctAnswer: 2,
          },
          {
            question: 'ما الفرق الرئيسي بين طريقة الحفار و Wait & Weight؟',
            options: [
              'طريقة الحفار تستخدم دورة واحدة',
              'Wait & Weight أبطأ',
              'طريقة الحفار تستخدم دورتين',
              'لا يوجد فرق'
            ],
            correctAnswer: 2,
          },
          {
            question: 'ماذا يمثل SIDPP؟',
            options: [
              'ضغط المضخات',
              'الضغط الزائد من التكوين',
              'ضغط الكيسنق',
              'ضغط السطح'
            ],
            correctAnswer: 1,
          },
          {
            question: 'ما هو أول إجراء عند اكتشاف ركلة أثناء الحفر؟',
            options: [
              'زيادة سرعة الحفر',
              'تقليل كثافة الطين',
              'رفع Kelly وإيقاف المضخات',
              'الاستمرار بالحفر'
            ],
            correctAnswer: 2,
          },
          {
            question: 'أي من التالي مؤشر إيجابي للركلة؟',
            options: [
              'انخفاض في معدل التدفق',
              'انخفاض في حجم الحوض',
              'زيادة في حجم حوض الطين',
              'انخفاض في ROP'
            ],
            correctAnswer: 2,
          },
          {
            question: 'في حالة Shallow Gas Kick، ما الجهاز المستخدم؟',
            options: [
              'BOP فقط',
              'Diverter',
              'Choke manifold',
              'Mud pump'
            ],
            correctAnswer: 1,
          },
          {
            question: 'ما سبب خطورة ركلة الغاز؟',
            options: [
              'الغاز ثقيل جداً',
              'الغاز يتمدد عند الصعود',
              'الغاز لا يتحرك',
              'الغاز يزيد كثافة الطين'
            ],
            correctAnswer: 1,
          },
          {
            question: 'ما هو ICP في عمليات القتل؟',
            options: [
              'SIDPP فقط',
              'SIDPP + SPR',
              'SICP فقط',
              'SPR فقط'
            ],
            correctAnswer: 1,
          },
          {
            question: 'ما معنى Underground Blowout؟',
            options: [
              'انفجار على السطح',
              'تدفق بين طبقات تحت الأرض',
              'انسداد في الأنبوب',
              'توقف الضخ'
            ],
            correctAnswer: 1,
          },
        ],
        en: [
          {
            question: 'What is the primary barrier in well control?',
            options: ['BOP', 'Drilling fluid', 'Casing', 'Wellhead'],
            correctAnswer: 1,
          },
          {
            question: 'How is Kill Mud Weight calculated?',
            options: [
              'KMW = OMW - (SIDPP / 0.052 × TVD)',
              'KMW = OMW × SIDPP',
              'KMW = OMW + (SIDPP / 0.052 × TVD)',
              'KMW = SIDPP / TVD'
            ],
            correctAnswer: 2,
          },
          {
            question: 'What is the main difference between Driller\'s Method and Wait & Weight?',
            options: [
              'Driller\'s Method uses one cycle',
              'Wait & Weight is slower',
              'Driller\'s Method uses two cycles',
              'There is no difference'
            ],
            correctAnswer: 2,
          },
          {
            question: 'What does SIDPP represent?',
            options: [
              'Pump pressure',
              'Excess formation pressure',
              'Casing pressure',
              'Surface pressure'
            ],
            correctAnswer: 1,
          },
          {
            question: 'What is the first action when a kick is detected while drilling?',
            options: [
              'Increase drilling speed',
              'Reduce mud weight',
              'Raise Kelly and stop pumps',
              'Continue drilling'
            ],
            correctAnswer: 2,
          },
          {
            question: 'Which is a positive kick indicator?',
            options: [
              'Decrease in flow rate',
              'Decrease in pit volume',
              'Increase in pit volume',
              'Decrease in ROP'
            ],
            correctAnswer: 2,
          },
          {
            question: 'In a Shallow Gas Kick, what device is used?',
            options: [
              'BOP only',
              'Diverter',
              'Choke manifold',
              'Mud pump'
            ],
            correctAnswer: 1,
          },
          {
            question: 'Why is a gas kick dangerous?',
            options: [
              'Gas is very heavy',
              'Gas expands as it rises',
              'Gas doesn\'t move',
              'Gas increases mud weight'
            ],
            correctAnswer: 1,
          },
          {
            question: 'What is ICP in kill operations?',
            options: [
              'SIDPP only',
              'SIDPP + SPR',
              'SICP only',
              'SPR only'
            ],
            correctAnswer: 1,
          },
          {
            question: 'What is an Underground Blowout?',
            options: [
              'Surface blowout',
              'Flow between underground layers',
              'Pipe blockage',
              'Pump failure'
            ],
            correctAnswer: 1,
          },
        ],
      },
    },
    {
      day: 6,
      type: 'project',
      content: {
        ar: {
          title: 'مشروع: تحليل حالة ركلة',
          explanation: 'طبق ما تعلمته في تحليل حالة ركلة افتراضية',
          keyTerms: [],
        },
        en: {
          title: 'Project: Kick Analysis',
          explanation: 'Apply what you learned in analyzing a hypothetical kick scenario',
          keyTerms: [],
        },
      },
      project: {
        ar: {
          title: 'تحليل حالة ركلة وحساب معلمات القتل',
          description: 'أنت مهندس حفر في موقع وحدثت ركلة. استخدم البيانات المعطاة لحساب معلمات القتل واختيار الطريقة المناسبة.',
          instructions: [
            'بيانات البئر: TVD = 12,000 ft، كثافة الطين الحالية = 10.5 ppg',
            'بعد الإغلاق: SIDPP = 520 psi، SICP = 680 psi، Pit Gain = 25 bbls',
            'احسب كثافة طين القتل (Kill Mud Weight)',
            'احسب ICP إذا كان SPR = 650 psi',
            'احسب FCP',
            'اختر طريقة القتل المناسبة وبرر اختيارك',
            'حدد نوع السائل الداخل (غاز أم سائل) بناءً على الفرق بين SIDPP و SICP'
          ],
          submissionType: 'text',
        },
        en: {
          title: 'Kick Analysis and Kill Parameters Calculation',
          description: 'You are a drilling engineer on site and a kick occurred. Use the given data to calculate kill parameters and select the appropriate method.',
          instructions: [
            'Well Data: TVD = 12,000 ft, Current mud weight = 10.5 ppg',
            'After shut-in: SIDPP = 520 psi, SICP = 680 psi, Pit Gain = 25 bbls',
            'Calculate Kill Mud Weight',
            'Calculate ICP if SPR = 650 psi',
            'Calculate FCP',
            'Select the appropriate kill method and justify your choice',
            'Determine the influx type (gas or liquid) based on SIDPP and SICP difference'
          ],
          submissionType: 'text',
        },
      },
    },
    {
      day: 7,
      type: 'learning',
      content: {
        ar: {
          title: 'مراجعة أسبوعية - التحكم المتقدم بالبئر',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 ملخص الأسبوع - التحكم المتقدم بالبئر</h2>

<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #059669;">
<h3 style="color: #059669; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">📚 اليوم الأول: المفاهيم الأساسية</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>الضغط الهيدروستاتيكي = 0.052 × ρ × TVD</li>
<li>الحاجز الأولي: سائل الحفر</li>
<li>الحاجز الثانوي: مانع الانفجار BOP</li>
<li>مؤشرات الركلة: زيادة التدفق، زيادة الحوض، زيادة ROP</li>
</ul>
</div>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #2563eb;">
<h3 style="color: #1e40af; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">📚 اليوم الثاني: إجراءات الإغلاق</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>Hard Shut-In: سريع، يسبب صدمة ضغط</li>
<li>Soft Shut-In: أبطأ، أكثر أماناً</li>
<li>KMW = OMW + (SIDPP / 0.052 × TVD)</li>
</ul>
</div>

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #f59e0b;">
<h3 style="color: #92400e; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">📚 اليوم الثالث: طرق القتل</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>Driller's Method: دورتين، بسيط</li>
<li>Wait & Weight: دورة واحدة، أسرع</li>
<li>ICP = SIDPP + SPR</li>
<li>FCP = SPR × (KMW / OMW)</li>
</ul>
</div>

<div style="background: #fae8ff; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #a855f7;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">📚 اليوم الرابع: الحالات الخاصة</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>الركلة أثناء الرحلات: تركيب Inside BOP</li>
<li>Underground Blowout: تدفق بين الطبقات</li>
<li>Shallow Gas: استخدام Diverter</li>
<li>تمدد الغاز: P₁V₁ = P₂V₂</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">🎯 النقاط الأساسية للتذكر</h3>
<ol style="list-style-type: decimal; padding-right: 1.5rem; line-height: 2;">
<li>السلامة أولاً - لا تتردد في إغلاق البئر</li>
<li>الاكتشاف المبكر للركلة يوفر الكثير من المشاكل</li>
<li>اختيار طريقة القتل يعتمد على الظروف</li>
<li>التوثيق الدقيق ضروري</li>
<li>التدريب المستمر يحافظ على الجاهزية</li>
</ol>
</div>
</section>`,
          keyTerms: [],
        },
        en: {
          title: 'Weekly Review - Advanced Well Control',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Week Summary - Advanced Well Control</h2>

<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #059669;">
<h3 style="color: #059669; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">📚 Day 1: Basic Concepts</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>Hydrostatic Pressure = 0.052 × ρ × TVD</li>
<li>Primary Barrier: Drilling Fluid</li>
<li>Secondary Barrier: BOP</li>
<li>Kick Indicators: Flow increase, pit gain, ROP increase</li>
</ul>
</div>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #2563eb;">
<h3 style="color: #1e40af; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">📚 Day 2: Shut-In Procedures</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>Hard Shut-In: Fast, causes pressure surge</li>
<li>Soft Shut-In: Slower, safer</li>
<li>KMW = OMW + (SIDPP / 0.052 × TVD)</li>
</ul>
</div>

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #f59e0b;">
<h3 style="color: #92400e; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">📚 Day 3: Kill Methods</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>Driller's Method: Two cycles, simple</li>
<li>Wait & Weight: One cycle, faster</li>
<li>ICP = SIDPP + SPR</li>
<li>FCP = SPR × (KMW / OMW)</li>
</ul>
</div>

<div style="background: #fae8ff; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #a855f7;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">📚 Day 4: Special Cases</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>Kick while tripping: Install Inside BOP</li>
<li>Underground Blowout: Flow between layers</li>
<li>Shallow Gas: Use Diverter</li>
<li>Gas Expansion: P₁V₁ = P₂V₂</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">🎯 Key Points to Remember</h3>
<ol style="list-style-type: decimal; padding-left: 1.5rem; line-height: 2;">
<li>Safety first - don't hesitate to shut in</li>
<li>Early kick detection saves many problems</li>
<li>Kill method selection depends on conditions</li>
<li>Accurate documentation is essential</li>
<li>Continuous training maintains readiness</li>
</ol>
</div>
</section>`,
          keyTerms: [],
        },
      },
    },
  ],
};
