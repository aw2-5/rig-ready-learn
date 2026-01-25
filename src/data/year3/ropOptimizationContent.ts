import { WeeklyLesson } from '../weeklyContent';

export const ropOptimizationLesson: WeeklyLesson = {
  lessonId: 'rop-optimization',
  days: [
    {
      day: 1,
      type: 'learning',
      content: {
        ar: {
          title: 'أساسيات معدل الاختراق (ROP) والعوامل المؤثرة',
          explanation: `<section style="margin-bottom: 2rem;">
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; border-bottom: 3px solid #ff6b35; padding-bottom: 0.5rem;">🔷 مقدمة في Rate of Penetration (ROP)</h2>

<p style="margin-bottom: 1rem; line-height: 1.8; text-align: justify;">
معدل الاختراق <strong>Rate of Penetration (ROP)</strong> هو المقياس الأساسي لكفاءة عملية الحفر ويُعرَّف بأنه المسافة المحفورة لكل وحدة زمنية، ويُقاس عادةً بـ <strong>ft/hr</strong> أو <strong>m/hr</strong>. يُعتبر تحسين ROP من أهم أهداف مهندس الحفر لأنه يؤثر مباشرة على التكلفة الإجمالية للبئر وزمن إنجاز المشروع.
</p>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; box-shadow: 0 4px 15px rgba(0,0,0,0.2);">
<h3 style="color: #ff6b35; font-size: 1.2rem; margin-bottom: 1rem;">📊 الأهمية الاقتصادية لـ ROP</h3>
<p style="margin-bottom: 0.5rem;">• زيادة ROP بنسبة 10% قد توفر ملايين الدولارات في مشاريع الآبار العميقة</p>
<p style="margin-bottom: 0.5rem;">• تكلفة اليوم الواحد للحفر البحري قد تصل إلى <strong>$500,000-$1,000,000</strong></p>
<p style="margin-bottom: 0.5rem;">• تحسين ROP يقلل زمن التعرض للمخاطر الجيولوجية (Exposure Time)</p>
<p>• زيادة الكفاءة تُحسِّن العائد على الاستثمار (ROI) للشركة</p>
</div>
</section>

<section style="margin-bottom: 2rem;">
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; border-bottom: 3px solid #ff6b35; padding-bottom: 0.5rem;">🔷 تصنيف العوامل المؤثرة في ROP</h2>

<h3 style="color: #ff6b35; font-size: 1.2rem; margin-bottom: 0.75rem;">1️⃣ العوامل القابلة للتحكم (Controllable Parameters)</h3>

<div style="background: #f0fdf4; border-right: 4px solid #22c55e; padding: 1rem; margin: 1rem 0; border-radius: 8px;">
<p style="margin-bottom: 0.5rem; color: #065f46;"><strong>أ) Weight on Bit (WOB):</strong> الوزن المطبق على رأس الحفارة</p>
<p style="margin-bottom: 0.5rem; color: #065f46;">• زيادة WOB تزيد ROP حتى نقطة معينة (Flounder Point)</p>
<p style="margin-bottom: 0.5rem; color: #065f46;">• WOB الزائد يسبب تلف الـ Bit ومشاكل الاستقرارية</p>
<p style="color: #065f46;">• النطاق الأمثل يعتمد على نوع الصخور ونوع الـ Bit</p>
</div>

<div style="background: #eff6ff; border-right: 4px solid #3b82f6; padding: 1rem; margin: 1rem 0; border-radius: 8px;">
<p style="margin-bottom: 0.5rem; color: #1e3a8a;"><strong>ب) Rotary Speed (RPM):</strong> سرعة دوران عمود الحفر</p>
<p style="margin-bottom: 0.5rem; color: #1e3a8a;">• العلاقة الطردية مع ROP لها حدود قصوى</p>
<p style="margin-bottom: 0.5rem; color: #1e3a8a;">• RPM العالي يزيد الاهتزازات (Vibrations) ويقلل عمر الـ Bit</p>
<p style="color: #1e3a8a;">• التوازن بين WOB و RPM ضروري للأداء الأمثل</p>
</div>

<div style="background: #fef3c7; border-right: 4px solid #f59e0b; padding: 1rem; margin: 1rem 0; border-radius: 8px;">
<p style="margin-bottom: 0.5rem; color: #78350f;"><strong>ج) Hydraulic Parameters:</strong> المعاملات الهيدروليكية</p>
<p style="margin-bottom: 0.5rem; color: #78350f;">• Flow Rate (GPM): معدل تدفق سائل الحفر</p>
<p style="margin-bottom: 0.5rem; color: #78350f;">• Bit Hydraulic Horsepower (HSI): القدرة الحصانية للفوهات</p>
<p style="color: #78350f;">• Jet Impact Force: قوة تأثير النوافث على القاع</p>
</div>

<h3 style="color: #ff6b35; font-size: 1.2rem; margin-bottom: 0.75rem; margin-top: 1.5rem;">2️⃣ العوامل غير القابلة للتحكم (Uncontrollable Parameters)</h3>

<ul style="list-style-type: none; padding: 0; margin: 1rem 0;">
<li style="padding: 0.75rem; background: #f8fafc; margin-bottom: 0.5rem; border-radius: 8px; border-right: 3px solid #64748b;">
<strong>🪨 خصائص التكوين الصخري (Formation Properties):</strong>
<ul style="margin-top: 0.5rem; padding-right: 1rem;">
<li>• Compressive Strength: مقاومة الانضغاط</li>
<li>• Abrasiveness: قابلية التآكل</li>
<li>• Plasticity: اللدونة</li>
<li>• Pore Pressure: ضغط المسام</li>
</ul>
</li>
<li style="padding: 0.75rem; background: #f8fafc; margin-bottom: 0.5rem; border-radius: 8px; border-right: 3px solid #64748b;">
<strong>🌡️ ظروف القاع (Bottomhole Conditions):</strong>
<ul style="margin-top: 0.5rem; padding-right: 1rem;">
<li>• Temperature: درجة الحرارة</li>
<li>• Differential Pressure: الضغط التفاضلي</li>
<li>• Overbalance: زيادة ضغط سائل الحفر عن ضغط التكوين</li>
</ul>
</li>
</ul>
</section>

<section style="margin-bottom: 2rem;">
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; border-bottom: 3px solid #ff6b35; padding-bottom: 0.5rem;">🔷 معادلات ROP الأساسية</h2>

<div style="background: linear-gradient(to left, #f0f9ff, #e0f2fe); padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<h3 style="color: #0369a1; font-size: 1.1rem; margin-bottom: 1rem;">نموذج Bourgoyne-Young (الأكثر شيوعاً)</h3>

<div style="background: white; padding: 1rem; border-radius: 8px; text-align: center; margin-bottom: 1rem;">
<p style="font-size: 1.2rem; font-weight: bold; color: #1e3a5f;">
ln(ROP) = a₁ + Σ(aᵢ × xᵢ)
</p>
</div>

<p style="margin-bottom: 0.5rem; color: #0c4a6e;">حيث أن <strong>aᵢ</strong> هي معاملات تُحدد من البيانات الميدانية</p>
<p style="margin-bottom: 0.5rem; color: #0c4a6e;"><strong>x₁:</strong> تأثير قوة التكوين (Formation Strength)</p>
<p style="margin-bottom: 0.5rem; color: #0c4a6e;"><strong>x₂:</strong> تأثير عمق التماسك (Depth of Compaction)</p>
<p style="margin-bottom: 0.5rem; color: #0c4a6e;"><strong>x₃:</strong> تأثير ضغط المسام (Pore Pressure)</p>
<p style="margin-bottom: 0.5rem; color: #0c4a6e;"><strong>x₄:</strong> تأثير الضغط التفاضلي (Differential Pressure)</p>
<p style="margin-bottom: 0.5rem; color: #0c4a6e;"><strong>x₅:</strong> تأثير WOB و Bit Diameter</p>
<p style="margin-bottom: 0.5rem; color: #0c4a6e;"><strong>x₆:</strong> تأثير RPM</p>
<p style="color: #0c4a6e;"><strong>x₇:</strong> تأثير Bit Wear</p>
</div>

<div style="background: #fef2f2; border: 2px solid #ef4444; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
<p style="color: #991b1b; font-weight: bold;">⚠️ ملاحظة عملية مهمة:</p>
<p style="color: #991b1b;">النموذج الرياضي يُستخدم للتخطيط والتحليل، لكن القرارات الميدانية تعتمد بشكل كبير على الخبرة والمراقبة الفورية لاستجابة البئر.</p>
</div>
</section>

<section style="margin-bottom: 2rem;">
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; border-bottom: 3px solid #ff6b35; padding-bottom: 0.5rem;">🔷 مفهوم Flounder Point</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
<strong>Flounder Point</strong> هي النقطة التي تتوقف عندها زيادة ROP رغم زيادة WOB. هذه الظاهرة تحدث بسبب:
</p>

<ul style="list-style-type: disc; padding-right: 1.5rem; margin-bottom: 1rem;">
<li style="margin-bottom: 0.5rem;">عدم كفاءة تنظيف القاع (Poor Bit Cleaning)</li>
<li style="margin-bottom: 0.5rem;">Bit Balling: تراكم الفتاتات على سطح الـ Bit</li>
<li style="margin-bottom: 0.5rem;">تجاوز قدرة النظام الهيدروليكي</li>
<li style="margin-bottom: 0.5rem;">الوصول لحدود القوة الميكانيكية للـ Bit</li>
</ul>

<div style="background: linear-gradient(135deg, #065f46 0%, #047857 100%); color: white; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<h3 style="color: #34d399; font-size: 1.1rem; margin-bottom: 0.75rem;">✅ كيفية تحديد Flounder Point</h3>
<p style="margin-bottom: 0.5rem;">1. ابدأ بـ WOB منخفض وسجل ROP</p>
<p style="margin-bottom: 0.5rem;">2. زد WOB تدريجياً بزيادات ثابتة (مثلاً 2,000 lbs)</p>
<p style="margin-bottom: 0.5rem;">3. راقب متى تتوقف زيادة ROP رغم زيادة WOB</p>
<p>4. هذه النقطة هي Flounder Point - WOB الأمثل أقل منها بقليل</p>
</div>
</section>`,
          keyTerms: [
            { term: 'Rate of Penetration (ROP)', definition: 'معدل الاختراق - المسافة المحفورة لكل وحدة زمنية، يُقاس بـ ft/hr أو m/hr' },
            { term: 'Weight on Bit (WOB)', definition: 'الوزن المطبق على رأس الحفارة، عامل رئيسي في التحكم بـ ROP' },
            { term: 'Flounder Point', definition: 'النقطة التي تتوقف عندها زيادة ROP رغم زيادة WOB بسبب عدم كفاءة تنظيف القاع' },
            { term: 'Controllable Parameters', definition: 'العوامل التي يمكن للمهندس التحكم بها مثل WOB, RPM, والمعاملات الهيدروليكية' },
            { term: 'Formation Strength', definition: 'قوة التكوين الصخري - عامل غير قابل للتحكم يؤثر بشكل كبير على ROP' },
          ],
          practiceQuestion: {
            question: 'ما هو Flounder Point؟',
            options: [
              'النقطة التي يتوقف عندها الـ Bit عن الدوران',
              'النقطة التي تتوقف عندها زيادة ROP رغم زيادة WOB',
              'أقصى سرعة دوران ممكنة للـ Bit',
              'الحد الأدنى من ضغط سائل الحفر'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'ROP Fundamentals and Influencing Factors',
          explanation: `<section style="margin-bottom: 2rem;">
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; border-bottom: 3px solid #ff6b35; padding-bottom: 0.5rem;">🔷 Introduction to Rate of Penetration (ROP)</h2>

<p style="margin-bottom: 1rem; line-height: 1.8; text-align: justify;">
<strong>Rate of Penetration (ROP)</strong> is the fundamental measure of drilling efficiency, defined as the distance drilled per unit time, typically measured in <strong>ft/hr</strong> or <strong>m/hr</strong>. Optimizing ROP is one of the most critical objectives for drilling engineers as it directly impacts total well cost and project completion time.
</p>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; box-shadow: 0 4px 15px rgba(0,0,0,0.2);">
<h3 style="color: #ff6b35; font-size: 1.2rem; margin-bottom: 1rem;">📊 Economic Importance of ROP</h3>
<p style="margin-bottom: 0.5rem;">• A 10% ROP increase can save millions of dollars in deep well projects</p>
<p style="margin-bottom: 0.5rem;">• Daily offshore drilling costs can reach <strong>$500,000-$1,000,000</strong></p>
<p style="margin-bottom: 0.5rem;">• Improved ROP reduces geological hazard exposure time</p>
<p>• Increased efficiency improves Return on Investment (ROI)</p>
</div>
</section>

<section style="margin-bottom: 2rem;">
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; border-bottom: 3px solid #ff6b35; padding-bottom: 0.5rem;">🔷 Classification of Factors Affecting ROP</h2>

<h3 style="color: #ff6b35; font-size: 1.2rem; margin-bottom: 0.75rem;">1️⃣ Controllable Parameters</h3>

<div style="background: #f0fdf4; border-left: 4px solid #22c55e; padding: 1rem; margin: 1rem 0; border-radius: 8px;">
<p style="margin-bottom: 0.5rem; color: #065f46;"><strong>a) Weight on Bit (WOB):</strong> Force applied to the drill bit</p>
<p style="margin-bottom: 0.5rem; color: #065f46;">• Increasing WOB increases ROP up to a certain point (Flounder Point)</p>
<p style="margin-bottom: 0.5rem; color: #065f46;">• Excessive WOB causes bit damage and stability problems</p>
<p style="color: #065f46;">• Optimal range depends on rock and bit type</p>
</div>

<div style="background: #eff6ff; border-left: 4px solid #3b82f6; padding: 1rem; margin: 1rem 0; border-radius: 8px;">
<p style="margin-bottom: 0.5rem; color: #1e3a8a;"><strong>b) Rotary Speed (RPM):</strong> Drill string rotation speed</p>
<p style="margin-bottom: 0.5rem; color: #1e3a8a;">• Direct relationship with ROP has upper limits</p>
<p style="margin-bottom: 0.5rem; color: #1e3a8a;">• High RPM increases vibrations and reduces bit life</p>
<p style="color: #1e3a8a;">• Balance between WOB and RPM is essential for optimal performance</p>
</div>

<div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 1rem; margin: 1rem 0; border-radius: 8px;">
<p style="margin-bottom: 0.5rem; color: #78350f;"><strong>c) Hydraulic Parameters:</strong></p>
<p style="margin-bottom: 0.5rem; color: #78350f;">• Flow Rate (GPM): Drilling fluid flow rate</p>
<p style="margin-bottom: 0.5rem; color: #78350f;">• Bit Hydraulic Horsepower (HSI): Nozzle horsepower</p>
<p style="color: #78350f;">• Jet Impact Force: Force of jets on bottomhole</p>
</div>

<h3 style="color: #ff6b35; font-size: 1.2rem; margin-bottom: 0.75rem; margin-top: 1.5rem;">2️⃣ Uncontrollable Parameters</h3>

<ul style="list-style-type: none; padding: 0; margin: 1rem 0;">
<li style="padding: 0.75rem; background: #f8fafc; margin-bottom: 0.5rem; border-radius: 8px; border-left: 3px solid #64748b;">
<strong>🪨 Formation Properties:</strong>
<ul style="margin-top: 0.5rem; padding-left: 1rem;">
<li>• Compressive Strength</li>
<li>• Abrasiveness</li>
<li>• Plasticity</li>
<li>• Pore Pressure</li>
</ul>
</li>
<li style="padding: 0.75rem; background: #f8fafc; margin-bottom: 0.5rem; border-radius: 8px; border-left: 3px solid #64748b;">
<strong>🌡️ Bottomhole Conditions:</strong>
<ul style="margin-top: 0.5rem; padding-left: 1rem;">
<li>• Temperature</li>
<li>• Differential Pressure</li>
<li>• Overbalance</li>
</ul>
</li>
</ul>
</section>

<section style="margin-bottom: 2rem;">
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; border-bottom: 3px solid #ff6b35; padding-bottom: 0.5rem;">🔷 Basic ROP Equations</h2>

<div style="background: linear-gradient(to right, #f0f9ff, #e0f2fe); padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<h3 style="color: #0369a1; font-size: 1.1rem; margin-bottom: 1rem;">Bourgoyne-Young Model (Most Common)</h3>

<div style="background: white; padding: 1rem; border-radius: 8px; text-align: center; margin-bottom: 1rem;">
<p style="font-size: 1.2rem; font-weight: bold; color: #1e3a5f;">
ln(ROP) = a₁ + Σ(aᵢ × xᵢ)
</p>
</div>

<p style="margin-bottom: 0.5rem; color: #0c4a6e;">Where <strong>aᵢ</strong> are coefficients determined from field data</p>
<p style="margin-bottom: 0.5rem; color: #0c4a6e;"><strong>x₁:</strong> Formation strength effect</p>
<p style="margin-bottom: 0.5rem; color: #0c4a6e;"><strong>x₂:</strong> Depth of compaction effect</p>
<p style="margin-bottom: 0.5rem; color: #0c4a6e;"><strong>x₃:</strong> Pore pressure effect</p>
<p style="margin-bottom: 0.5rem; color: #0c4a6e;"><strong>x₄:</strong> Differential pressure effect</p>
<p style="margin-bottom: 0.5rem; color: #0c4a6e;"><strong>x₅:</strong> WOB and bit diameter effect</p>
<p style="margin-bottom: 0.5rem; color: #0c4a6e;"><strong>x₆:</strong> RPM effect</p>
<p style="color: #0c4a6e;"><strong>x₇:</strong> Bit wear effect</p>
</div>
</section>

<section style="margin-bottom: 2rem;">
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; border-bottom: 3px solid #ff6b35; padding-bottom: 0.5rem;">🔷 Flounder Point Concept</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
<strong>Flounder Point</strong> is the point where ROP stops increasing despite increasing WOB. This phenomenon occurs due to:
</p>

<ul style="list-style-type: disc; padding-left: 1.5rem; margin-bottom: 1rem;">
<li style="margin-bottom: 0.5rem;">Poor bit cleaning</li>
<li style="margin-bottom: 0.5rem;">Bit balling: Cuttings accumulation on bit surface</li>
<li style="margin-bottom: 0.5rem;">Exceeding hydraulic system capacity</li>
<li style="margin-bottom: 0.5rem;">Reaching bit mechanical strength limits</li>
</ul>

<div style="background: linear-gradient(135deg, #065f46 0%, #047857 100%); color: white; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<h3 style="color: #34d399; font-size: 1.1rem; margin-bottom: 0.75rem;">✅ How to Identify Flounder Point</h3>
<p style="margin-bottom: 0.5rem;">1. Start with low WOB and record ROP</p>
<p style="margin-bottom: 0.5rem;">2. Increase WOB gradually in fixed increments (e.g., 2,000 lbs)</p>
<p style="margin-bottom: 0.5rem;">3. Monitor when ROP stops increasing despite WOB increase</p>
<p>4. This point is Flounder Point - optimal WOB is slightly below it</p>
</div>
</section>`,
          keyTerms: [
            { term: 'Rate of Penetration (ROP)', definition: 'Distance drilled per unit time, measured in ft/hr or m/hr' },
            { term: 'Weight on Bit (WOB)', definition: 'Force applied to the drill bit, a key factor in controlling ROP' },
            { term: 'Flounder Point', definition: 'Point where ROP stops increasing despite WOB increase due to poor bottomhole cleaning' },
            { term: 'Controllable Parameters', definition: 'Factors that engineers can control such as WOB, RPM, and hydraulic parameters' },
            { term: 'Formation Strength', definition: 'Rock formation strength - uncontrollable factor that significantly affects ROP' },
          ],
          practiceQuestion: {
            question: 'What is Flounder Point?',
            options: [
              'The point where the bit stops rotating',
              'The point where ROP stops increasing despite increasing WOB',
              'Maximum possible rotation speed for the bit',
              'Minimum drilling fluid pressure'
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
          title: 'تحسين المعاملات الميكانيكية (WOB & RPM)',
          explanation: `<section style="margin-bottom: 2rem;">
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; border-bottom: 3px solid #ff6b35; padding-bottom: 0.5rem;">🔷 تحسين Weight on Bit (WOB)</h2>

<p style="margin-bottom: 1rem; line-height: 1.8; text-align: justify;">
الوزن على رأس الحفارة <strong>Weight on Bit (WOB)</strong> هو القوة الرأسية المطبقة على الـ Bit لإحداث الاختراق في الصخور. تحسين WOB يتطلب فهم العلاقة المعقدة بين الوزن ومعدل الاختراق وعمر الـ Bit.
</p>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #ff6b35; font-size: 1.2rem; margin-bottom: 1rem;">📐 مناطق أداء WOB</h3>

<p style="margin-bottom: 0.75rem;"><strong>المنطقة 1 - Low WOB Zone:</strong></p>
<p style="margin-bottom: 0.5rem; padding-right: 1rem;">• ROP منخفض جداً</p>
<p style="margin-bottom: 1rem; padding-right: 1rem;">• الـ Bit لا يخترق بكفاءة (Bit Foundation Threshold)</p>

<p style="margin-bottom: 0.75rem;"><strong>المنطقة 2 - Optimal Zone:</strong></p>
<p style="margin-bottom: 0.5rem; padding-right: 1rem;">• علاقة طردية بين WOB و ROP</p>
<p style="margin-bottom: 1rem; padding-right: 1rem;">• أفضل كفاءة حفر وعمر Bit متوازن</p>

<p style="margin-bottom: 0.75rem;"><strong>المنطقة 3 - Flounder Zone:</strong></p>
<p style="margin-bottom: 0.5rem; padding-right: 1rem;">• ROP يتوقف عن الزيادة أو ينخفض</p>
<p style="padding-right: 1rem;">• تلف متسارع للـ Bit ومشاكل استقرارية</p>
</div>

<h3 style="color: #ff6b35; font-size: 1.2rem; margin-bottom: 0.75rem;">حساب WOB الأمثل</h3>

<div style="background: #f0f9ff; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<p style="margin-bottom: 0.75rem; color: #0c4a6e;"><strong>للـ PDC Bits:</strong></p>
<p style="margin-bottom: 1rem; padding-right: 1rem; color: #0c4a6e;">WOB Range: 1,000 - 4,000 lbs per inch of bit diameter</p>

<p style="margin-bottom: 0.75rem; color: #0c4a6e;"><strong>للـ Roller Cone Bits:</strong></p>
<p style="margin-bottom: 1rem; padding-right: 1rem; color: #0c4a6e;">WOB Range: 3,000 - 8,000 lbs per inch of bit diameter</p>

<div style="background: white; padding: 1rem; border-radius: 8px; text-align: center;">
<p style="font-weight: bold; color: #1e3a5f;">مثال: Bit 8.5" PDC</p>
<p style="color: #1e3a5f;">WOB = 8.5 × (2,000 to 3,000) = 17,000 to 25,500 lbs</p>
</div>
</div>
</section>

<section style="margin-bottom: 2rem;">
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; border-bottom: 3px solid #ff6b35; padding-bottom: 0.5rem;">🔷 تحسين Rotary Speed (RPM)</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
سرعة الدوران <strong>Rotary Speed (RPM)</strong> تؤثر على كمية الصخور المحفورة لكل دورة وعلى ديناميكيات عمود الحفر. التحسين يتطلب موازنة ROP مع الاهتزازات وعمر الـ Bit.
</p>

<h3 style="color: #ff6b35; font-size: 1.2rem; margin-bottom: 0.75rem;">نطاقات RPM حسب نوع الـ Bit</h3>

<table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
<thead>
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 0.75rem; text-align: right; border: 1px solid #ddd;">نوع الـ Bit</th>
<th style="padding: 0.75rem; text-align: center; border: 1px solid #ddd;">RPM Range</th>
<th style="padding: 0.75rem; text-align: right; border: 1px solid #ddd;">ملاحظات</th>
</tr>
</thead>
<tbody>
<tr style="background: #f8fafc;">
<td style="padding: 0.75rem; border: 1px solid #ddd;">PDC Bit</td>
<td style="padding: 0.75rem; text-align: center; border: 1px solid #ddd;">60-250 RPM</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">يتحمل RPM عالي</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Roller Cone (Milled Tooth)</td>
<td style="padding: 0.75rem; text-align: center; border: 1px solid #ddd;">60-100 RPM</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">للتكوينات الناعمة</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 0.75rem; border: 1px solid #ddd;">Roller Cone (Insert)</td>
<td style="padding: 0.75rem; text-align: center; border: 1px solid #ddd;">40-80 RPM</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">للتكوينات الصلبة</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Diamond/Impreg</td>
<td style="padding: 0.75rem; text-align: center; border: 1px solid #ddd;">200-500 RPM</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">يتطلب Motor/Turbine</td>
</tr>
</tbody>
</table>

<div style="background: #fef2f2; border: 2px solid #ef4444; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<p style="color: #991b1b; font-weight: bold;">⚠️ تحذير: Critical RPM</p>
<p style="color: #991b1b;">يجب تجنب Critical RPM للـ Drillstring والذي يسبب Resonance واهتزازات مدمرة. استخدم معادلات حساب الترددات الطبيعية لتحديد النطاقات الممنوعة.</p>
</div>
</section>

<section style="margin-bottom: 2rem;">
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; border-bottom: 3px solid #ff6b35; padding-bottom: 0.5rem;">🔷 العلاقة بين WOB و RPM</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
العلاقة بين WOB و RPM ليست مستقلة - تغيير أحدهما يؤثر على الأداء الأمثل للآخر:
</p>

<div style="background: #f0fdf4; border-right: 4px solid #22c55e; padding: 1rem; margin: 1rem 0; border-radius: 8px;">
<p style="color: #065f46; font-weight: bold; margin-bottom: 0.5rem;">✅ قاعدة التوازن:</p>
<p style="color: #065f46;">• WOB عالي → يتطلب RPM منخفض (لتقليل Torque والاهتزازات)</p>
<p style="color: #065f46;">• WOB منخفض → يسمح بـ RPM عالي (لتعويض نقص القوة)</p>
</div>

<h3 style="color: #ff6b35; font-size: 1.2rem; margin-bottom: 0.75rem;">Depth of Cut (DOC) Concept</h3>

<p style="margin-bottom: 1rem; line-height: 1.8;">
<strong>Depth of Cut</strong> هو عمق الاختراق لكل دورة من الـ Bit:
</p>

<div style="background: white; border: 2px solid #1e3a5f; padding: 1rem; border-radius: 8px; text-align: center; margin: 1rem 0;">
<p style="font-size: 1.2rem; font-weight: bold; color: #1e3a5f;">
DOC = ROP ÷ RPM
</p>
<p style="color: #64748b; margin-top: 0.5rem;">وحدة القياس: inches per revolution</p>
</div>

<div style="background: #eff6ff; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<h3 style="color: #1e40af; font-size: 1.1rem; margin-bottom: 0.75rem;">📊 DOC الأمثل حسب نوع التكوين</h3>
<p style="margin-bottom: 0.5rem; color: #1e3a8a;">• التكوينات الناعمة (Soft): DOC = 0.1 - 0.3 in/rev</p>
<p style="margin-bottom: 0.5rem; color: #1e3a8a;">• التكوينات المتوسطة (Medium): DOC = 0.05 - 0.15 in/rev</p>
<p style="color: #1e3a8a;">• التكوينات الصلبة (Hard): DOC = 0.01 - 0.05 in/rev</p>
</div>
</section>

<section style="margin-bottom: 2rem;">
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; border-bottom: 3px solid #ff6b35; padding-bottom: 0.5rem;">🔷 تقنيات الـ Drill-Off Tests</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
<strong>Drill-Off Test</strong> هي تقنية ميدانية لتحديد WOB و RPM الأمثل عن طريق مراقبة سلوك الحفر في الوقت الفعلي:
</p>

<div style="background: linear-gradient(135deg, #065f46 0%, #047857 100%); color: white; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<h3 style="color: #34d399; font-size: 1.1rem; margin-bottom: 0.75rem;">خطوات إجراء Drill-Off Test</h3>
<p style="margin-bottom: 0.5rem;">1. ثبّت RPM عند قيمة معينة</p>
<p style="margin-bottom: 0.5rem;">2. ضع WOB أعلى من المتوقع الأمثل</p>
<p style="margin-bottom: 0.5rem;">3. أوقف الـ Drawworks واترك الـ Bit يحفر (Drill-Off)</p>
<p style="margin-bottom: 0.5rem;">4. راقب تغير WOB مع الوقت وسجل ROP</p>
<p style="margin-bottom: 0.5rem;">5. حلل منحنى WOB vs Time لتحديد نقاط الكفاءة</p>
<p>6. كرر العملية مع RPM مختلفة للحصول على الصورة الكاملة</p>
</div>

<div style="background: #fef3c7; border-right: 4px solid #f59e0b; padding: 1rem; margin: 1rem 0; border-radius: 8px;">
<p style="color: #78350f; font-weight: bold;">💡 نصيحة عملية:</p>
<p style="color: #78350f;">قم بإجراء Drill-Off Tests عند دخول تكوين صخري جديد أو عند تغيير الـ Bit لتحديد المعاملات المثلى للظروف الجديدة.</p>
</div>
</section>`,
          keyTerms: [
            { term: 'Bit Foundation Threshold', definition: 'الحد الأدنى من WOB اللازم لبدء اختراق الصخور بكفاءة' },
            { term: 'Critical RPM', definition: 'سرعة الدوران التي تسبب Resonance واهتزازات مدمرة في عمود الحفر' },
            { term: 'Depth of Cut (DOC)', definition: 'عمق الاختراق لكل دورة من الـ Bit، يُحسب بـ ROP ÷ RPM' },
            { term: 'Drill-Off Test', definition: 'تقنية ميدانية لتحديد WOB و RPM الأمثل عن طريق مراقبة سلوك الحفر' },
            { term: 'Optimal Zone', definition: 'منطقة WOB التي تحقق أفضل توازن بين ROP وعمر الـ Bit' },
          ],
          practiceQuestion: {
            question: 'ما هي العلاقة الصحيحة بين WOB و RPM للحصول على أداء أمثل؟',
            options: [
              'WOB عالي يتطلب RPM عالي دائماً',
              'WOB عالي يتطلب RPM منخفض لتقليل الاهتزازات',
              'WOB و RPM مستقلان تماماً',
              'يجب تثبيت WOB و RPM عند نفس القيمة'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Mechanical Parameter Optimization (WOB & RPM)',
          explanation: `<section style="margin-bottom: 2rem;">
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; border-bottom: 3px solid #ff6b35; padding-bottom: 0.5rem;">🔷 Weight on Bit (WOB) Optimization</h2>

<p style="margin-bottom: 1rem; line-height: 1.8; text-align: justify;">
<strong>Weight on Bit (WOB)</strong> is the vertical force applied to the bit to achieve rock penetration. WOB optimization requires understanding the complex relationship between weight, penetration rate, and bit life.
</p>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #ff6b35; font-size: 1.2rem; margin-bottom: 1rem;">📐 WOB Performance Zones</h3>

<p style="margin-bottom: 0.75rem;"><strong>Zone 1 - Low WOB Zone:</strong></p>
<p style="margin-bottom: 0.5rem; padding-left: 1rem;">• Very low ROP</p>
<p style="margin-bottom: 1rem; padding-left: 1rem;">• Bit doesn't penetrate efficiently (Bit Foundation Threshold)</p>

<p style="margin-bottom: 0.75rem;"><strong>Zone 2 - Optimal Zone:</strong></p>
<p style="margin-bottom: 0.5rem; padding-left: 1rem;">• Direct relationship between WOB and ROP</p>
<p style="margin-bottom: 1rem; padding-left: 1rem;">• Best drilling efficiency and balanced bit life</p>

<p style="margin-bottom: 0.75rem;"><strong>Zone 3 - Flounder Zone:</strong></p>
<p style="margin-bottom: 0.5rem; padding-left: 1rem;">• ROP stops increasing or decreases</p>
<p style="padding-left: 1rem;">• Accelerated bit damage and stability problems</p>
</div>

<h3 style="color: #ff6b35; font-size: 1.2rem; margin-bottom: 0.75rem;">Optimal WOB Calculation</h3>

<div style="background: #f0f9ff; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<p style="margin-bottom: 0.75rem; color: #0c4a6e;"><strong>For PDC Bits:</strong></p>
<p style="margin-bottom: 1rem; padding-left: 1rem; color: #0c4a6e;">WOB Range: 1,000 - 4,000 lbs per inch of bit diameter</p>

<p style="margin-bottom: 0.75rem; color: #0c4a6e;"><strong>For Roller Cone Bits:</strong></p>
<p style="margin-bottom: 1rem; padding-left: 1rem; color: #0c4a6e;">WOB Range: 3,000 - 8,000 lbs per inch of bit diameter</p>

<div style="background: white; padding: 1rem; border-radius: 8px; text-align: center;">
<p style="font-weight: bold; color: #1e3a5f;">Example: 8.5" PDC Bit</p>
<p style="color: #1e3a5f;">WOB = 8.5 × (2,000 to 3,000) = 17,000 to 25,500 lbs</p>
</div>
</div>
</section>

<section style="margin-bottom: 2rem;">
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; border-bottom: 3px solid #ff6b35; padding-bottom: 0.5rem;">🔷 Rotary Speed (RPM) Optimization</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
<strong>Rotary Speed (RPM)</strong> affects the amount of rock drilled per revolution and drillstring dynamics. Optimization requires balancing ROP with vibrations and bit life.
</p>

<h3 style="color: #ff6b35; font-size: 1.2rem; margin-bottom: 0.75rem;">RPM Ranges by Bit Type</h3>

<table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
<thead>
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Bit Type</th>
<th style="padding: 0.75rem; text-align: center; border: 1px solid #ddd;">RPM Range</th>
<th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Notes</th>
</tr>
</thead>
<tbody>
<tr style="background: #f8fafc;">
<td style="padding: 0.75rem; border: 1px solid #ddd;">PDC Bit</td>
<td style="padding: 0.75rem; text-align: center; border: 1px solid #ddd;">60-250 RPM</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Tolerates high RPM</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Roller Cone (Milled Tooth)</td>
<td style="padding: 0.75rem; text-align: center; border: 1px solid #ddd;">60-100 RPM</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">For soft formations</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 0.75rem; border: 1px solid #ddd;">Roller Cone (Insert)</td>
<td style="padding: 0.75rem; text-align: center; border: 1px solid #ddd;">40-80 RPM</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">For hard formations</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Diamond/Impreg</td>
<td style="padding: 0.75rem; text-align: center; border: 1px solid #ddd;">200-500 RPM</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Requires Motor/Turbine</td>
</tr>
</tbody>
</table>

<div style="background: #fef2f2; border: 2px solid #ef4444; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<p style="color: #991b1b; font-weight: bold;">⚠️ Warning: Critical RPM</p>
<p style="color: #991b1b;">Avoid drillstring Critical RPM which causes resonance and destructive vibrations. Use natural frequency calculation equations to determine forbidden ranges.</p>
</div>
</section>

<section style="margin-bottom: 2rem;">
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; border-bottom: 3px solid #ff6b35; padding-bottom: 0.5rem;">🔷 WOB and RPM Relationship</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
The relationship between WOB and RPM is not independent - changing one affects optimal performance of the other:
</p>

<div style="background: #f0fdf4; border-left: 4px solid #22c55e; padding: 1rem; margin: 1rem 0; border-radius: 8px;">
<p style="color: #065f46; font-weight: bold; margin-bottom: 0.5rem;">✅ Balance Rule:</p>
<p style="color: #065f46;">• High WOB → Requires low RPM (to reduce torque and vibrations)</p>
<p style="color: #065f46;">• Low WOB → Allows high RPM (to compensate for reduced force)</p>
</div>

<h3 style="color: #ff6b35; font-size: 1.2rem; margin-bottom: 0.75rem;">Depth of Cut (DOC) Concept</h3>

<div style="background: white; border: 2px solid #1e3a5f; padding: 1rem; border-radius: 8px; text-align: center; margin: 1rem 0;">
<p style="font-size: 1.2rem; font-weight: bold; color: #1e3a5f;">
DOC = ROP ÷ RPM
</p>
<p style="color: #64748b; margin-top: 0.5rem;">Unit: inches per revolution</p>
</div>

<div style="background: #eff6ff; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<h3 style="color: #1e40af; font-size: 1.1rem; margin-bottom: 0.75rem;">📊 Optimal DOC by Formation Type</h3>
<p style="margin-bottom: 0.5rem; color: #1e3a8a;">• Soft formations: DOC = 0.1 - 0.3 in/rev</p>
<p style="margin-bottom: 0.5rem; color: #1e3a8a;">• Medium formations: DOC = 0.05 - 0.15 in/rev</p>
<p style="color: #1e3a8a;">• Hard formations: DOC = 0.01 - 0.05 in/rev</p>
</div>
</section>

<section style="margin-bottom: 2rem;">
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; border-bottom: 3px solid #ff6b35; padding-bottom: 0.5rem;">🔷 Drill-Off Test Techniques</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
<strong>Drill-Off Test</strong> is a field technique to determine optimal WOB and RPM by monitoring drilling behavior in real-time:
</p>

<div style="background: linear-gradient(135deg, #065f46 0%, #047857 100%); color: white; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<h3 style="color: #34d399; font-size: 1.1rem; margin-bottom: 0.75rem;">Drill-Off Test Steps</h3>
<p style="margin-bottom: 0.5rem;">1. Fix RPM at a specific value</p>
<p style="margin-bottom: 0.5rem;">2. Set WOB higher than expected optimum</p>
<p style="margin-bottom: 0.5rem;">3. Stop drawworks and let bit drill off</p>
<p style="margin-bottom: 0.5rem;">4. Monitor WOB change over time and record ROP</p>
<p style="margin-bottom: 0.5rem;">5. Analyze WOB vs Time curve to identify efficiency points</p>
<p>6. Repeat with different RPM values for complete picture</p>
</div>
</section>`,
          keyTerms: [
            { term: 'Bit Foundation Threshold', definition: 'Minimum WOB required to start efficient rock penetration' },
            { term: 'Critical RPM', definition: 'Rotation speed that causes resonance and destructive vibrations in the drillstring' },
            { term: 'Depth of Cut (DOC)', definition: 'Penetration depth per bit revolution, calculated as ROP ÷ RPM' },
            { term: 'Drill-Off Test', definition: 'Field technique to determine optimal WOB and RPM by monitoring drilling behavior' },
            { term: 'Optimal Zone', definition: 'WOB range that achieves best balance between ROP and bit life' },
          ],
          practiceQuestion: {
            question: 'What is the correct relationship between WOB and RPM for optimal performance?',
            options: [
              'High WOB always requires high RPM',
              'High WOB requires low RPM to reduce vibrations',
              'WOB and RPM are completely independent',
              'WOB and RPM should always be equal'
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
          title: 'تحسين المعاملات الهيدروليكية',
          explanation: `<section style="margin-bottom: 2rem;">
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; border-bottom: 3px solid #ff6b35; padding-bottom: 0.5rem;">🔷 أهمية الهيدروليكيات في ROP</h2>

<p style="margin-bottom: 1rem; line-height: 1.8; text-align: justify;">
النظام الهيدروليكي للحفر يلعب دوراً حاسماً في تحسين ROP من خلال ثلاث وظائف أساسية: <strong>تنظيف القاع</strong> من الفتاتات، <strong>تبريد الـ Bit</strong>، و<strong>المساعدة في كسر الصخور</strong>. تحسين الهيدروليكيات يمكن أن يرفع ROP بنسبة تتراوح بين 20-50%.
</p>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #ff6b35; font-size: 1.2rem; margin-bottom: 1rem;">📊 المعاملات الهيدروليكية الرئيسية</h3>
<p style="margin-bottom: 0.5rem;">• <strong>Flow Rate (Q):</strong> معدل تدفق سائل الحفر (GPM)</p>
<p style="margin-bottom: 0.5rem;">• <strong>Bit Pressure Drop (ΔPbit):</strong> فقد الضغط عبر فوهات الـ Bit (psi)</p>
<p style="margin-bottom: 0.5rem;">• <strong>Hydraulic Horsepower (HHP):</strong> القدرة الحصانية الهيدروليكية</p>
<p style="margin-bottom: 0.5rem;">• <strong>HSI:</strong> Hydraulic Horsepower per Square Inch of bit area</p>
<p>• <strong>Jet Impact Force:</strong> قوة تأثير النوافث على القاع</p>
</div>
</section>

<section style="margin-bottom: 2rem;">
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; border-bottom: 3px solid #ff6b35; padding-bottom: 0.5rem;">🔷 حسابات الهيدروليكيات الأساسية</h2>

<h3 style="color: #ff6b35; font-size: 1.2rem; margin-bottom: 0.75rem;">1️⃣ سرعة النافثة (Jet Velocity)</h3>

<div style="background: #f0f9ff; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<div style="background: white; padding: 1rem; border-radius: 8px; text-align: center; margin-bottom: 1rem;">
<p style="font-size: 1.2rem; font-weight: bold; color: #1e3a5f;">
Vn = 417.2 × Q ÷ An
</p>
</div>
<p style="color: #0c4a6e;"><strong>Vn:</strong> سرعة النافثة (ft/sec)</p>
<p style="color: #0c4a6e;"><strong>Q:</strong> معدل التدفق (GPM)</p>
<p style="color: #0c4a6e;"><strong>An:</strong> المساحة الكلية للفوهات (in²)</p>
</div>

<h3 style="color: #ff6b35; font-size: 1.2rem; margin-bottom: 0.75rem;">2️⃣ فقد الضغط عبر الفوهات</h3>

<div style="background: #eff6ff; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<div style="background: white; padding: 1rem; border-radius: 8px; text-align: center; margin-bottom: 1rem;">
<p style="font-size: 1.2rem; font-weight: bold; color: #1e3a5f;">
ΔPbit = (ρ × Q²) ÷ (10,858 × Cd² × An²)
</p>
</div>
<p style="color: #1e3a8a;"><strong>ρ:</strong> كثافة سائل الحفر (ppg)</p>
<p style="color: #1e3a8a;"><strong>Cd:</strong> معامل التصريف (عادة 0.95)</p>
</div>

<h3 style="color: #ff6b35; font-size: 1.2rem; margin-bottom: 0.75rem;">3️⃣ القدرة الحصانية الهيدروليكية</h3>

<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<div style="background: white; padding: 1rem; border-radius: 8px; text-align: center; margin-bottom: 1rem;">
<p style="font-size: 1.2rem; font-weight: bold; color: #1e3a5f;">
HHP = (ΔP × Q) ÷ 1714
</p>
</div>
<p style="color: #065f46;"><strong>HHP:</strong> القدرة الحصانية الهيدروليكية (HP)</p>
<p style="color: #065f46;"><strong>ΔP:</strong> فقد الضغط (psi)</p>
<p style="color: #065f46;"><strong>Q:</strong> معدل التدفق (GPM)</p>
</div>

<h3 style="color: #ff6b35; font-size: 1.2rem; margin-bottom: 0.75rem;">4️⃣ HSI (Hydraulic Horsepower per Square Inch)</h3>

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<div style="background: white; padding: 1rem; border-radius: 8px; text-align: center; margin-bottom: 1rem;">
<p style="font-size: 1.2rem; font-weight: bold; color: #1e3a5f;">
HSI = HHP_bit ÷ (π × Dbit² ÷ 4)
</p>
</div>
<p style="color: #78350f;"><strong>Dbit:</strong> قطر الـ Bit (inches)</p>
<p style="color: #78350f; margin-top: 0.5rem;">القيمة المثلى: <strong>2.5 - 5.0 HSI</strong> للتكوينات الناعمة والمتوسطة</p>
</div>
</section>

<section style="margin-bottom: 2rem;">
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; border-bottom: 3px solid #ff6b35; padding-bottom: 0.5rem;">🔷 معايير تحسين الهيدروليكيات</h2>

<h3 style="color: #ff6b35; font-size: 1.2rem; margin-bottom: 0.75rem;">معيار Maximum Bit Hydraulic Horsepower</h3>

<div style="background: #f0fdf4; border-right: 4px solid #22c55e; padding: 1rem; margin: 1rem 0; border-radius: 8px;">
<p style="color: #065f46; font-weight: bold; margin-bottom: 0.5rem;">الهدف: تحقيق أقصى قدرة هيدروليكية عند الـ Bit</p>
<p style="color: #065f46; margin-bottom: 0.5rem;">• يُستخدم في التكوينات الناعمة حيث التنظيف هو العامل المحدد</p>
<p style="color: #065f46; margin-bottom: 0.5rem;">• القاعدة: ΔPbit = 65% من Standpipe Pressure</p>
<p style="color: #065f46;">• يُعطي أفضل تنظيف للقاع</p>
</div>

<h3 style="color: #ff6b35; font-size: 1.2rem; margin-bottom: 0.75rem;">معيار Maximum Jet Impact Force</h3>

<div style="background: #eff6ff; border-right: 4px solid #3b82f6; padding: 1rem; margin: 1rem 0; border-radius: 8px;">
<p style="color: #1e3a8a; font-weight: bold; margin-bottom: 0.5rem;">الهدف: تحقيق أقصى قوة تأثير للنوافث على القاع</p>
<p style="color: #1e3a8a; margin-bottom: 0.5rem;">• يُستخدم في التكوينات الصلبة حيث المساعدة الميكانيكية ضرورية</p>
<p style="color: #1e3a8a; margin-bottom: 0.5rem;">• القاعدة: ΔPbit = 48-49% من Standpipe Pressure</p>
<p style="color: #1e3a8a;">• يُساعد في كسر الصخور الصلبة</p>
</div>

<div style="background: white; border: 2px solid #1e3a5f; padding: 1rem; border-radius: 8px; text-align: center; margin: 1rem 0;">
<p style="font-size: 1.1rem; font-weight: bold; color: #1e3a5f;">
Jet Impact Force = 0.01823 × Cd × Q × √(ρ × ΔPbit)
</p>
</div>
</section>

<section style="margin-bottom: 2rem;">
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; border-bottom: 3px solid #ff6b35; padding-bottom: 0.5rem;">🔷 اختيار حجم الفوهات (Nozzle Selection)</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
اختيار حجم الفوهات الصحيح هو جزء أساسي من تحسين الهيدروليكيات. يجب الموازنة بين:
</p>

<ul style="list-style-type: none; padding: 0; margin: 1rem 0;">
<li style="padding: 0.75rem; background: #f8fafc; margin-bottom: 0.5rem; border-radius: 8px; border-right: 3px solid #22c55e;">
<strong style="color: #065f46;">فوهات صغيرة:</strong>
<ul style="margin-top: 0.5rem; padding-right: 1rem;">
<li>• سرعة نافثة عالية وقوة تأثير أكبر</li>
<li>• ضغط أعلى على المضخات</li>
<li>• خطر الانسداد أعلى</li>
</ul>
</li>
<li style="padding: 0.75rem; background: #f8fafc; margin-bottom: 0.5rem; border-radius: 8px; border-right: 3px solid #3b82f6;">
<strong style="color: #1e3a8a;">فوهات كبيرة:</strong>
<ul style="margin-top: 0.5rem; padding-right: 1rem;">
<li>• تدفق أعلى وتنظيف أفضل</li>
<li>• ضغط أقل على المضخات</li>
<li>• قوة تأثير أقل</li>
</ul>
</li>
</ul>

<div style="background: linear-gradient(135deg, #065f46 0%, #047857 100%); color: white; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<h3 style="color: #34d399; font-size: 1.1rem; margin-bottom: 0.75rem;">✅ إرشادات اختيار الفوهات</h3>
<p style="margin-bottom: 0.5rem;">• الحد الأدنى للقطر: 9/32" (لتجنب الانسداد)</p>
<p style="margin-bottom: 0.5rem;">• سرعة النافثة المثلى: 250-450 ft/sec</p>
<p style="margin-bottom: 0.5rem;">• Total Flow Area (TFA) يُحسب حسب معدل التدفق المطلوب</p>
<p>• استخدم 3-4 فوهات للتوزيع المتساوي</p>
</div>

<div style="background: #fef2f2; border: 2px solid #ef4444; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<p style="color: #991b1b; font-weight: bold;">⚠️ تحذير: Extended Nozzles</p>
<p style="color: #991b1b;">Extended Nozzles تُقرّب النوافث من القاع وتزيد كفاءة التنظيف، لكنها تتعرض للتآكل السريع في التكوينات الكاشطة.</p>
</div>
</section>

<section style="margin-bottom: 2rem;">
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; border-bottom: 3px solid #ff6b35; padding-bottom: 0.5rem;">🔷 تحسين تنظيف القاع (Bottomhole Cleaning)</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
تنظيف القاع الفعال هو العامل الأهم في الاستفادة من الهيدروليكيات لتحسين ROP:
</p>

<div style="background: #eff6ff; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<h3 style="color: #1e40af; font-size: 1.1rem; margin-bottom: 0.75rem;">🔄 آلية تنظيف القاع</h3>
<p style="margin-bottom: 0.5rem; color: #1e3a8a;">1. النوافث تُزيل الفتاتات من تحت الـ Cutters</p>
<p style="margin-bottom: 0.5rem; color: #1e3a8a;">2. التدفق يحمل الفتاتات بعيداً عن منطقة القطع</p>
<p style="margin-bottom: 0.5rem; color: #1e3a8a;">3. السرعة في الـ Annulus تنقل الفتاتات للسطح</p>
<p style="color: #1e3a8a;">4. Chip Hold-Down يُقلل عندما يكون التنظيف فعالاً</p>
</div>

<div style="background: #fef3c7; border-right: 4px solid #f59e0b; padding: 1rem; margin: 1rem 0; border-radius: 8px;">
<p style="color: #78350f; font-weight: bold;">💡 مؤشرات ضعف تنظيف القاع:</p>
<p style="color: #78350f;">• ROP لا يستجيب لزيادة WOB (Flounder)</p>
<p style="color: #78350f;">• Torque عالي ومتذبذب</p>
<p style="color: #78350f;">• Bit Balling عند سحب الـ Bit</p>
</div>
</section>`,
          keyTerms: [
            { term: 'HSI (Hydraulic Horsepower per Square Inch)', definition: 'مقياس كثافة القدرة الهيدروليكية على مساحة الـ Bit، القيمة المثلى 2.5-5.0' },
            { term: 'Jet Impact Force', definition: 'قوة تأثير النوافث على القاع، مهمة في التكوينات الصلبة' },
            { term: 'TFA (Total Flow Area)', definition: 'المساحة الكلية لجميع فوهات الـ Bit، تحدد سرعة النافثة' },
            { term: 'Bottomhole Cleaning', definition: 'عملية إزالة الفتاتات من منطقة القطع لضمان كفاءة الحفر' },
            { term: 'Chip Hold-Down', definition: 'قوة الضغط التفاضلي التي تُبقي الفتاتات على القاع وتُقلل ROP' },
          ],
          practiceQuestion: {
            question: 'ما هي نسبة ΔPbit المثلى من Standpipe Pressure لتحقيق Maximum Bit Hydraulic Horsepower؟',
            options: [
              '35%',
              '48-49%',
              '65%',
              '80%'
            ],
            correctAnswer: 2,
          },
        },
        en: {
          title: 'Hydraulic Parameter Optimization',
          explanation: `<section style="margin-bottom: 2rem;">
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; border-bottom: 3px solid #ff6b35; padding-bottom: 0.5rem;">🔷 Importance of Hydraulics in ROP</h2>

<p style="margin-bottom: 1rem; line-height: 1.8; text-align: justify;">
The drilling hydraulic system plays a crucial role in ROP optimization through three fundamental functions: <strong>bottomhole cleaning</strong> of cuttings, <strong>bit cooling</strong>, and <strong>assisting in rock breaking</strong>. Hydraulics optimization can increase ROP by 20-50%.
</p>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #ff6b35; font-size: 1.2rem; margin-bottom: 1rem;">📊 Key Hydraulic Parameters</h3>
<p style="margin-bottom: 0.5rem;">• <strong>Flow Rate (Q):</strong> Drilling fluid flow rate (GPM)</p>
<p style="margin-bottom: 0.5rem;">• <strong>Bit Pressure Drop (ΔPbit):</strong> Pressure loss across bit nozzles (psi)</p>
<p style="margin-bottom: 0.5rem;">• <strong>Hydraulic Horsepower (HHP):</strong> Hydraulic power</p>
<p style="margin-bottom: 0.5rem;">• <strong>HSI:</strong> Hydraulic Horsepower per Square Inch of bit area</p>
<p>• <strong>Jet Impact Force:</strong> Force of jets on bottomhole</p>
</div>
</section>

<section style="margin-bottom: 2rem;">
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; border-bottom: 3px solid #ff6b35; padding-bottom: 0.5rem;">🔷 Basic Hydraulic Calculations</h2>

<h3 style="color: #ff6b35; font-size: 1.2rem; margin-bottom: 0.75rem;">1️⃣ Jet Velocity</h3>

<div style="background: #f0f9ff; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<div style="background: white; padding: 1rem; border-radius: 8px; text-align: center; margin-bottom: 1rem;">
<p style="font-size: 1.2rem; font-weight: bold; color: #1e3a5f;">
Vn = 417.2 × Q ÷ An
</p>
</div>
<p style="color: #0c4a6e;"><strong>Vn:</strong> Jet velocity (ft/sec)</p>
<p style="color: #0c4a6e;"><strong>Q:</strong> Flow rate (GPM)</p>
<p style="color: #0c4a6e;"><strong>An:</strong> Total nozzle area (in²)</p>
</div>

<h3 style="color: #ff6b35; font-size: 1.2rem; margin-bottom: 0.75rem;">2️⃣ Pressure Drop Across Nozzles</h3>

<div style="background: #eff6ff; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<div style="background: white; padding: 1rem; border-radius: 8px; text-align: center; margin-bottom: 1rem;">
<p style="font-size: 1.2rem; font-weight: bold; color: #1e3a5f;">
ΔPbit = (ρ × Q²) ÷ (10,858 × Cd² × An²)
</p>
</div>
<p style="color: #1e3a8a;"><strong>ρ:</strong> Mud weight (ppg)</p>
<p style="color: #1e3a8a;"><strong>Cd:</strong> Discharge coefficient (typically 0.95)</p>
</div>

<h3 style="color: #ff6b35; font-size: 1.2rem; margin-bottom: 0.75rem;">3️⃣ Hydraulic Horsepower</h3>

<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<div style="background: white; padding: 1rem; border-radius: 8px; text-align: center; margin-bottom: 1rem;">
<p style="font-size: 1.2rem; font-weight: bold; color: #1e3a5f;">
HHP = (ΔP × Q) ÷ 1714
</p>
</div>
</div>

<h3 style="color: #ff6b35; font-size: 1.2rem; margin-bottom: 0.75rem;">4️⃣ HSI (Hydraulic Horsepower per Square Inch)</h3>

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<div style="background: white; padding: 1rem; border-radius: 8px; text-align: center; margin-bottom: 1rem;">
<p style="font-size: 1.2rem; font-weight: bold; color: #1e3a5f;">
HSI = HHP_bit ÷ (π × Dbit² ÷ 4)
</p>
</div>
<p style="color: #78350f;">Optimal value: <strong>2.5 - 5.0 HSI</strong> for soft and medium formations</p>
</div>
</section>

<section style="margin-bottom: 2rem;">
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; border-bottom: 3px solid #ff6b35; padding-bottom: 0.5rem;">🔷 Hydraulic Optimization Criteria</h2>

<h3 style="color: #ff6b35; font-size: 1.2rem; margin-bottom: 0.75rem;">Maximum Bit Hydraulic Horsepower Criterion</h3>

<div style="background: #f0fdf4; border-left: 4px solid #22c55e; padding: 1rem; margin: 1rem 0; border-radius: 8px;">
<p style="color: #065f46; font-weight: bold; margin-bottom: 0.5rem;">Goal: Achieve maximum hydraulic power at the bit</p>
<p style="color: #065f46; margin-bottom: 0.5rem;">• Used in soft formations where cleaning is limiting</p>
<p style="color: #065f46; margin-bottom: 0.5rem;">• Rule: ΔPbit = 65% of Standpipe Pressure</p>
<p style="color: #065f46;">• Provides best bottomhole cleaning</p>
</div>

<h3 style="color: #ff6b35; font-size: 1.2rem; margin-bottom: 0.75rem;">Maximum Jet Impact Force Criterion</h3>

<div style="background: #eff6ff; border-left: 4px solid #3b82f6; padding: 1rem; margin: 1rem 0; border-radius: 8px;">
<p style="color: #1e3a8a; font-weight: bold; margin-bottom: 0.5rem;">Goal: Achieve maximum jet impact force on bottomhole</p>
<p style="color: #1e3a8a; margin-bottom: 0.5rem;">• Used in hard formations where mechanical assistance is necessary</p>
<p style="color: #1e3a8a; margin-bottom: 0.5rem;">• Rule: ΔPbit = 48-49% of Standpipe Pressure</p>
<p style="color: #1e3a8a;">• Helps break hard rock</p>
</div>
</section>

<section style="margin-bottom: 2rem;">
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; border-bottom: 3px solid #ff6b35; padding-bottom: 0.5rem;">🔷 Nozzle Selection</h2>

<div style="background: linear-gradient(135deg, #065f46 0%, #047857 100%); color: white; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<h3 style="color: #34d399; font-size: 1.1rem; margin-bottom: 0.75rem;">✅ Nozzle Selection Guidelines</h3>
<p style="margin-bottom: 0.5rem;">• Minimum diameter: 9/32" (to avoid plugging)</p>
<p style="margin-bottom: 0.5rem;">• Optimal jet velocity: 250-450 ft/sec</p>
<p style="margin-bottom: 0.5rem;">• TFA calculated based on required flow rate</p>
<p>• Use 3-4 nozzles for even distribution</p>
</div>
</section>`,
          keyTerms: [
            { term: 'HSI (Hydraulic Horsepower per Square Inch)', definition: 'Measure of hydraulic power density on bit area, optimal value 2.5-5.0' },
            { term: 'Jet Impact Force', definition: 'Force of jets on bottomhole, important in hard formations' },
            { term: 'TFA (Total Flow Area)', definition: 'Total area of all bit nozzles, determines jet velocity' },
            { term: 'Bottomhole Cleaning', definition: 'Process of removing cuttings from cutting zone to ensure drilling efficiency' },
            { term: 'Chip Hold-Down', definition: 'Differential pressure force keeping cuttings on bottomhole, reducing ROP' },
          ],
          practiceQuestion: {
            question: 'What is the optimal ΔPbit percentage of Standpipe Pressure for Maximum Bit Hydraulic Horsepower?',
            options: [
              '35%',
              '48-49%',
              '65%',
              '80%'
            ],
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
          title: 'تأثير خصائص التكوين وسائل الحفر على ROP',
          explanation: `<section style="margin-bottom: 2rem;">
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; border-bottom: 3px solid #ff6b35; padding-bottom: 0.5rem;">🔷 تأثير خصائص التكوين الصخري</h2>

<p style="margin-bottom: 1rem; line-height: 1.8; text-align: justify;">
خصائص التكوين الصخري هي عوامل غير قابلة للتحكم لكنها تؤثر بشكل كبير على ROP. فهم هذه الخصائص يساعد في اختيار الـ Bit المناسب وتحديد المعاملات المثلى للحفر.
</p>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #ff6b35; font-size: 1.2rem; margin-bottom: 1rem;">📊 الخصائص الميكانيكية للصخور</h3>

<p style="margin-bottom: 0.75rem;"><strong>1. Compressive Strength (UCS):</strong></p>
<p style="margin-bottom: 0.5rem; padding-right: 1rem;">• مقاومة الصخر للانضغاط، تتراوح من 1,000 psi (طين) إلى 40,000 psi (جرانيت)</p>
<p style="margin-bottom: 1rem; padding-right: 1rem;">• كلما زادت UCS، انخفض ROP بشكل كبير</p>

<p style="margin-bottom: 0.75rem;"><strong>2. Abrasiveness:</strong></p>
<p style="margin-bottom: 0.5rem; padding-right: 1rem;">• قدرة الصخر على تآكل الـ Bit</p>
<p style="margin-bottom: 1rem; padding-right: 1rem;">• صخور السيليكا عالية الكوارتز هي الأكثر كاشطية</p>

<p style="margin-bottom: 0.75rem;"><strong>3. Plasticity:</strong></p>
<p style="margin-bottom: 0.5rem; padding-right: 1rem;">• قدرة الصخر على التشوه دون التكسر</p>
<p style="padding-right: 1rem;">• الأطيان اللدنة تسبب Bit Balling</p>
</div>

<h3 style="color: #ff6b35; font-size: 1.2rem; margin-bottom: 0.75rem;">تصنيف قابلية الحفر (Drillability Classification)</h3>

<table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
<thead>
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 0.75rem; text-align: right; border: 1px solid #ddd;">نوع التكوين</th>
<th style="padding: 0.75rem; text-align: center; border: 1px solid #ddd;">UCS (psi)</th>
<th style="padding: 0.75rem; text-align: center; border: 1px solid #ddd;">ROP المتوقع</th>
<th style="padding: 0.75rem; text-align: right; border: 1px solid #ddd;">Bit المفضل</th>
</tr>
</thead>
<tbody>
<tr style="background: #f0fdf4;">
<td style="padding: 0.75rem; border: 1px solid #ddd;">ناعم (Soft)</td>
<td style="padding: 0.75rem; text-align: center; border: 1px solid #ddd;">&lt;5,000</td>
<td style="padding: 0.75rem; text-align: center; border: 1px solid #ddd;">عالي جداً</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">PDC, Milled Tooth</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ddd;">متوسط (Medium)</td>
<td style="padding: 0.75rem; text-align: center; border: 1px solid #ddd;">5,000-15,000</td>
<td style="padding: 0.75rem; text-align: center; border: 1px solid #ddd;">متوسط</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">PDC, Insert</td>
</tr>
<tr style="background: #fef2f2;">
<td style="padding: 0.75rem; border: 1px solid #ddd;">صلب (Hard)</td>
<td style="padding: 0.75rem; text-align: center; border: 1px solid #ddd;">15,000-30,000</td>
<td style="padding: 0.75rem; text-align: center; border: 1px solid #ddd;">منخفض</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Insert, Diamond</td>
</tr>
<tr style="background: #fef2f2;">
<td style="padding: 0.75rem; border: 1px solid #ddd;">صلب جداً (Very Hard)</td>
<td style="padding: 0.75rem; text-align: center; border: 1px solid #ddd;">&gt;30,000</td>
<td style="padding: 0.75rem; text-align: center; border: 1px solid #ddd;">منخفض جداً</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Diamond, Impreg</td>
</tr>
</tbody>
</table>
</section>

<section style="margin-bottom: 2rem;">
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; border-bottom: 3px solid #ff6b35; padding-bottom: 0.5rem;">🔷 تأثير الضغط التفاضلي (Differential Pressure Effect)</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
الفرق بين ضغط سائل الحفر وضغط مسام التكوين يُسمى <strong>Overbalance</strong> ويؤثر سلباً على ROP:
</p>

<div style="background: #fef2f2; border-right: 4px solid #ef4444; padding: 1rem; margin: 1rem 0; border-radius: 8px;">
<p style="color: #991b1b; font-weight: bold; margin-bottom: 0.5rem;">⚠️ تأثير Overbalance على ROP:</p>
<p style="color: #991b1b; margin-bottom: 0.5rem;">• يضغط الفتاتات على القاع (Chip Hold-Down Effect)</p>
<p style="color: #991b1b; margin-bottom: 0.5rem;">• يُقوّي الصخر بشكل مصطنع (Confining Pressure Effect)</p>
<p style="color: #991b1b;">• يُقلل ROP بنسبة تصل إلى 50% في بعض التكوينات</p>
</div>

<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<h3 style="color: #065f46; font-size: 1.1rem; margin-bottom: 0.75rem;">✅ استراتيجيات تقليل تأثير Overbalance</h3>
<p style="margin-bottom: 0.5rem; color: #065f46;">• استخدام أقل كثافة طين ممكنة (ضمن حدود السلامة)</p>
<p style="margin-bottom: 0.5rem; color: #065f46;">• تحسين الهيدروليكيات لمقاومة Chip Hold-Down</p>
<p style="margin-bottom: 0.5rem; color: #065f46;">• استخدام تقنيات Managed Pressure Drilling (MPD)</p>
<p style="color: #065f46;">• اختيار Bit مناسب للظروف الضاغطة</p>
</div>
</section>

<section style="margin-bottom: 2rem;">
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; border-bottom: 3px solid #ff6b35; padding-bottom: 0.5rem;">🔷 تأثير خصائص سائل الحفر</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
خصائص سائل الحفر تؤثر بشكل مباشر وغير مباشر على ROP:
</p>

<h3 style="color: #ff6b35; font-size: 1.2rem; margin-bottom: 0.75rem;">1️⃣ كثافة الطين (Mud Weight)</h3>

<div style="background: #eff6ff; border-right: 4px solid #3b82f6; padding: 1rem; margin: 1rem 0; border-radius: 8px;">
<p style="color: #1e3a8a; margin-bottom: 0.5rem;">• زيادة الكثافة تزيد Overbalance وتُقلل ROP</p>
<p style="color: #1e3a8a; margin-bottom: 0.5rem;">• كل 1 ppg زيادة قد تُقلل ROP بنسبة 5-15%</p>
<p style="color: #1e3a8a;">• التوازن ضروري بين سلامة البئر و ROP</p>
</div>

<h3 style="color: #ff6b35; font-size: 1.2rem; margin-bottom: 0.75rem;">2️⃣ اللزوجة والخصائص الريولوجية</h3>

<div style="background: #f0fdf4; border-right: 4px solid #22c55e; padding: 1rem; margin: 1rem 0; border-radius: 8px;">
<p style="color: #065f46; margin-bottom: 0.5rem;"><strong>Plastic Viscosity (PV):</strong></p>
<p style="color: #065f46; margin-bottom: 0.75rem; padding-right: 1rem;">• PV عالي يزيد ECD ويُقلل ROP</p>

<p style="color: #065f46; margin-bottom: 0.5rem;"><strong>Yield Point (YP):</strong></p>
<p style="color: #065f46; margin-bottom: 0.75rem; padding-right: 1rem;">• YP مناسب ضروري لنقل الفتاتات</p>

<p style="color: #065f46; margin-bottom: 0.5rem;"><strong>Gel Strength:</strong></p>
<p style="color: #065f46; padding-right: 1rem;">• Gel عالي يُصعّب بدء الدوران ويزيد Surge Pressures</p>
</div>

<h3 style="color: #ff6b35; font-size: 1.2rem; margin-bottom: 0.75rem;">3️⃣ محتوى المواد الصلبة (Solids Content)</h3>

<div style="background: #fef3c7; border-right: 4px solid #f59e0b; padding: 1rem; margin: 1rem 0; border-radius: 8px;">
<p style="color: #78350f; margin-bottom: 0.5rem;">• المواد الصلبة الزائدة تُقلل ROP بشكل ملحوظ</p>
<p style="color: #78350f; margin-bottom: 0.5rem;">• LGS (Low Gravity Solids) هي الأكثر ضرراً</p>
<p style="color: #78350f; margin-bottom: 0.5rem;">• استخدم معدات التحكم في المواد الصلبة بكفاءة</p>
<p style="color: #78350f;">• حافظ على نسبة المواد الصلبة أقل من 6% (حجم)</p>
</div>
</section>

<section style="margin-bottom: 2rem;">
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; border-bottom: 3px solid #ff6b35; padding-bottom: 0.5rem;">🔷 نوع سائل الحفر و ROP</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #ff6b35; font-size: 1.2rem; margin-bottom: 1rem;">مقارنة أنواع سوائل الحفر</h3>

<p style="margin-bottom: 0.75rem;"><strong>Water-Based Mud (WBM):</strong></p>
<p style="margin-bottom: 1rem; padding-right: 1rem;">• ROP أعلى عموماً في التكوينات الناعمة</p>

<p style="margin-bottom: 0.75rem;"><strong>Oil-Based Mud (OBM):</strong></p>
<p style="margin-bottom: 0.5rem; padding-right: 1rem;">• ROP أقل بنسبة 20-40% مقارنة بـ WBM</p>
<p style="margin-bottom: 1rem; padding-right: 1rem;">• يُستخدم لاستقرار الطبقات التفاعلية (Reactive Shales)</p>

<p style="margin-bottom: 0.75rem;"><strong>Synthetic-Based Mud (SBM):</strong></p>
<p style="padding-right: 1rem;">• أداء مشابه لـ OBM مع فوائد بيئية</p>
</div>

<div style="background: #f0fdf4; border-right: 4px solid #22c55e; padding: 1rem; margin: 1rem 0; border-radius: 8px;">
<p style="color: #065f46; font-weight: bold;">💡 نصيحة: ROP Enhancement Additives</p>
<p style="color: #065f46;">يمكن استخدام إضافات خاصة لتحسين ROP في OBM مثل ROP Enhancers و Lubricants التي تُقلل احتكاك الـ Bit.</p>
</div>
</section>`,
          keyTerms: [
            { term: 'Compressive Strength (UCS)', definition: 'مقاومة الصخر للانضغاط، العامل الأهم في تحديد صعوبة الحفر' },
            { term: 'Chip Hold-Down Effect', definition: 'تأثير الضغط التفاضلي الذي يضغط الفتاتات على القاع ويُقلل ROP' },
            { term: 'Overbalance', definition: 'الفرق بين ضغط سائل الحفر وضغط مسام التكوين' },
            { term: 'LGS (Low Gravity Solids)', definition: 'المواد الصلبة منخفضة الكثافة في سائل الحفر، تُقلل ROP بشكل ملحوظ' },
            { term: 'Confining Pressure Effect', definition: 'تأثير الضغط المحيط الذي يُقوّي الصخر ويجعله أصعب للحفر' },
          ],
          practiceQuestion: {
            question: 'كيف يؤثر زيادة Overbalance على ROP؟',
            options: [
              'يزيد ROP بسبب زيادة القوة',
              'لا يؤثر على ROP',
              'يُقلل ROP بسبب Chip Hold-Down Effect',
              'يزيد ROP في التكوينات الصلبة فقط'
            ],
            correctAnswer: 2,
          },
        },
        en: {
          title: 'Formation and Drilling Fluid Effects on ROP',
          explanation: `<section style="margin-bottom: 2rem;">
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; border-bottom: 3px solid #ff6b35; padding-bottom: 0.5rem;">🔷 Formation Properties Effect</h2>

<p style="margin-bottom: 1rem; line-height: 1.8; text-align: justify;">
Rock formation properties are uncontrollable factors but significantly affect ROP. Understanding these properties helps in selecting the appropriate bit and determining optimal drilling parameters.
</p>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #ff6b35; font-size: 1.2rem; margin-bottom: 1rem;">📊 Rock Mechanical Properties</h3>

<p style="margin-bottom: 0.75rem;"><strong>1. Compressive Strength (UCS):</strong></p>
<p style="margin-bottom: 0.5rem; padding-left: 1rem;">• Rock resistance to compression, ranges from 1,000 psi (clay) to 40,000 psi (granite)</p>
<p style="margin-bottom: 1rem; padding-left: 1rem;">• Higher UCS significantly reduces ROP</p>

<p style="margin-bottom: 0.75rem;"><strong>2. Abrasiveness:</strong></p>
<p style="margin-bottom: 0.5rem; padding-left: 1rem;">• Rock ability to wear the bit</p>
<p style="margin-bottom: 1rem; padding-left: 1rem;">• High-quartz silica rocks are most abrasive</p>

<p style="margin-bottom: 0.75rem;"><strong>3. Plasticity:</strong></p>
<p style="margin-bottom: 0.5rem; padding-left: 1rem;">• Rock ability to deform without fracturing</p>
<p style="padding-left: 1rem;">• Plastic clays cause bit balling</p>
</div>

<h3 style="color: #ff6b35; font-size: 1.2rem; margin-bottom: 0.75rem;">Drillability Classification</h3>

<table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
<thead>
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Formation Type</th>
<th style="padding: 0.75rem; text-align: center; border: 1px solid #ddd;">UCS (psi)</th>
<th style="padding: 0.75rem; text-align: center; border: 1px solid #ddd;">Expected ROP</th>
<th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Preferred Bit</th>
</tr>
</thead>
<tbody>
<tr style="background: #f0fdf4;">
<td style="padding: 0.75rem; border: 1px solid #ddd;">Soft</td>
<td style="padding: 0.75rem; text-align: center; border: 1px solid #ddd;">&lt;5,000</td>
<td style="padding: 0.75rem; text-align: center; border: 1px solid #ddd;">Very High</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">PDC, Milled Tooth</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Medium</td>
<td style="padding: 0.75rem; text-align: center; border: 1px solid #ddd;">5,000-15,000</td>
<td style="padding: 0.75rem; text-align: center; border: 1px solid #ddd;">Medium</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">PDC, Insert</td>
</tr>
<tr style="background: #fef2f2;">
<td style="padding: 0.75rem; border: 1px solid #ddd;">Hard</td>
<td style="padding: 0.75rem; text-align: center; border: 1px solid #ddd;">15,000-30,000</td>
<td style="padding: 0.75rem; text-align: center; border: 1px solid #ddd;">Low</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Insert, Diamond</td>
</tr>
<tr style="background: #fef2f2;">
<td style="padding: 0.75rem; border: 1px solid #ddd;">Very Hard</td>
<td style="padding: 0.75rem; text-align: center; border: 1px solid #ddd;">&gt;30,000</td>
<td style="padding: 0.75rem; text-align: center; border: 1px solid #ddd;">Very Low</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Diamond, Impreg</td>
</tr>
</tbody>
</table>
</section>

<section style="margin-bottom: 2rem;">
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; border-bottom: 3px solid #ff6b35; padding-bottom: 0.5rem;">🔷 Differential Pressure Effect</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
The difference between drilling fluid pressure and formation pore pressure is called <strong>Overbalance</strong> and negatively affects ROP:
</p>

<div style="background: #fef2f2; border-left: 4px solid #ef4444; padding: 1rem; margin: 1rem 0; border-radius: 8px;">
<p style="color: #991b1b; font-weight: bold; margin-bottom: 0.5rem;">⚠️ Overbalance Effect on ROP:</p>
<p style="color: #991b1b; margin-bottom: 0.5rem;">• Presses cuttings onto bottomhole (Chip Hold-Down Effect)</p>
<p style="color: #991b1b; margin-bottom: 0.5rem;">• Artificially strengthens rock (Confining Pressure Effect)</p>
<p style="color: #991b1b;">• Can reduce ROP by up to 50% in some formations</p>
</div>

<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<h3 style="color: #065f46; font-size: 1.1rem; margin-bottom: 0.75rem;">✅ Strategies to Reduce Overbalance Effect</h3>
<p style="margin-bottom: 0.5rem; color: #065f46;">• Use minimum possible mud weight (within safety limits)</p>
<p style="margin-bottom: 0.5rem; color: #065f46;">• Optimize hydraulics to counter Chip Hold-Down</p>
<p style="margin-bottom: 0.5rem; color: #065f46;">• Use Managed Pressure Drilling (MPD) techniques</p>
<p style="color: #065f46;">• Select appropriate bit for pressurized conditions</p>
</div>
</section>

<section style="margin-bottom: 2rem;">
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; border-bottom: 3px solid #ff6b35; padding-bottom: 0.5rem;">🔷 Drilling Fluid Properties Effect</h2>

<h3 style="color: #ff6b35; font-size: 1.2rem; margin-bottom: 0.75rem;">1️⃣ Mud Weight</h3>

<div style="background: #eff6ff; border-left: 4px solid #3b82f6; padding: 1rem; margin: 1rem 0; border-radius: 8px;">
<p style="color: #1e3a8a; margin-bottom: 0.5rem;">• Increased weight increases Overbalance and reduces ROP</p>
<p style="color: #1e3a8a; margin-bottom: 0.5rem;">• Each 1 ppg increase may reduce ROP by 5-15%</p>
<p style="color: #1e3a8a;">• Balance between well safety and ROP is essential</p>
</div>

<h3 style="color: #ff6b35; font-size: 1.2rem; margin-bottom: 0.75rem;">2️⃣ Viscosity and Rheological Properties</h3>

<div style="background: #f0fdf4; border-left: 4px solid #22c55e; padding: 1rem; margin: 1rem 0; border-radius: 8px;">
<p style="color: #065f46; margin-bottom: 0.5rem;"><strong>Plastic Viscosity (PV):</strong></p>
<p style="color: #065f46; margin-bottom: 0.75rem; padding-left: 1rem;">• High PV increases ECD and reduces ROP</p>

<p style="color: #065f46; margin-bottom: 0.5rem;"><strong>Yield Point (YP):</strong></p>
<p style="color: #065f46; margin-bottom: 0.75rem; padding-left: 1rem;">• Appropriate YP is necessary for cuttings transport</p>

<p style="color: #065f46; margin-bottom: 0.5rem;"><strong>Gel Strength:</strong></p>
<p style="color: #065f46; padding-left: 1rem;">• High Gel makes rotation difficult and increases Surge Pressures</p>
</div>

<h3 style="color: #ff6b35; font-size: 1.2rem; margin-bottom: 0.75rem;">3️⃣ Solids Content</h3>

<div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 1rem; margin: 1rem 0; border-radius: 8px;">
<p style="color: #78350f; margin-bottom: 0.5rem;">• Excess solids significantly reduce ROP</p>
<p style="color: #78350f; margin-bottom: 0.5rem;">• LGS (Low Gravity Solids) are most harmful</p>
<p style="color: #78350f; margin-bottom: 0.5rem;">• Use solids control equipment efficiently</p>
<p style="color: #78350f;">• Keep solids ratio below 6% (volume)</p>
</div>
</section>`,
          keyTerms: [
            { term: 'Compressive Strength (UCS)', definition: 'Rock resistance to compression, most important factor in determining drilling difficulty' },
            { term: 'Chip Hold-Down Effect', definition: 'Differential pressure effect that presses cuttings onto bottomhole and reduces ROP' },
            { term: 'Overbalance', definition: 'Difference between drilling fluid pressure and formation pore pressure' },
            { term: 'LGS (Low Gravity Solids)', definition: 'Low-density solids in drilling fluid that significantly reduce ROP' },
            { term: 'Confining Pressure Effect', definition: 'Surrounding pressure effect that strengthens rock and makes it harder to drill' },
          ],
          practiceQuestion: {
            question: 'How does increasing Overbalance affect ROP?',
            options: [
              'Increases ROP due to increased force',
              'Does not affect ROP',
              'Reduces ROP due to Chip Hold-Down Effect',
              'Increases ROP in hard formations only'
            ],
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
          title: 'تقنيات المراقبة والتحسين الفوري لـ ROP',
          explanation: `<section style="margin-bottom: 2rem;">
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; border-bottom: 3px solid #ff6b35; padding-bottom: 0.5rem;">🔷 أنظمة المراقبة الفورية للحفر</h2>

<p style="margin-bottom: 1rem; line-height: 1.8; text-align: justify;">
التحسين الفوري لـ ROP يعتمد على مراقبة دقيقة ومستمرة لمعاملات الحفر. أنظمة المراقبة الحديثة توفر بيانات في الوقت الحقيقي تمكّن المهندس من اتخاذ قرارات سريعة لتعظيم الكفاءة.
</p>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #ff6b35; font-size: 1.2rem; margin-bottom: 1rem;">📊 المعاملات المراقبة في الوقت الفعلي</h3>

<table style="width: 100%; border-collapse: collapse; margin: 0.5rem 0;">
<tr>
<td style="padding: 0.5rem; color: #93c5fd;">• <strong>ROP</strong></td>
<td style="padding: 0.5rem;">معدل الاختراق الفوري</td>
</tr>
<tr>
<td style="padding: 0.5rem; color: #93c5fd;">• <strong>WOB</strong></td>
<td style="padding: 0.5rem;">الوزن على الـ Bit</td>
</tr>
<tr>
<td style="padding: 0.5rem; color: #93c5fd;">• <strong>RPM</strong></td>
<td style="padding: 0.5rem;">سرعة الدوران (Surface + Downhole)</td>
</tr>
<tr>
<td style="padding: 0.5rem; color: #93c5fd;">• <strong>Torque</strong></td>
<td style="padding: 0.5rem;">عزم الدوران</td>
</tr>
<tr>
<td style="padding: 0.5rem; color: #93c5fd;">• <strong>SPP</strong></td>
<td style="padding: 0.5rem;">Standpipe Pressure</td>
</tr>
<tr>
<td style="padding: 0.5rem; color: #93c5fd;">• <strong>Flow Rate</strong></td>
<td style="padding: 0.5rem;">معدل التدفق</td>
</tr>
<tr>
<td style="padding: 0.5rem; color: #93c5fd;">• <strong>MSE</strong></td>
<td style="padding: 0.5rem;">Mechanical Specific Energy</td>
</tr>
</table>
</div>
</section>

<section style="margin-bottom: 2rem;">
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; border-bottom: 3px solid #ff6b35; padding-bottom: 0.5rem;">🔷 Mechanical Specific Energy (MSE)</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
<strong>MSE</strong> هو المفهوم الأهم في تحسين ROP الفوري. يُمثل الطاقة المستهلكة لحفر وحدة حجم من الصخر:
</p>

<div style="background: #f0f9ff; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<div style="background: white; padding: 1rem; border-radius: 8px; text-align: center; margin-bottom: 1rem;">
<p style="font-size: 1.2rem; font-weight: bold; color: #1e3a5f;">
MSE = (WOB/Ab) + (120π × RPM × T) / (Ab × ROP)
</p>
</div>
<p style="color: #0c4a6e;"><strong>Ab:</strong> مساحة الـ Bit (in²)</p>
<p style="color: #0c4a6e;"><strong>T:</strong> Torque (ft-lbs)</p>
<p style="color: #0c4a6e;"><strong>وحدة MSE:</strong> psi</p>
</div>

<div style="background: #f0fdf4; border-right: 4px solid #22c55e; padding: 1rem; margin: 1rem 0; border-radius: 8px;">
<p style="color: #065f46; font-weight: bold; margin-bottom: 0.5rem;">✅ تفسير قيم MSE:</p>
<p style="color: #065f46; margin-bottom: 0.5rem;">• MSE قريب من UCS: حفر كفء (Efficient Drilling)</p>
<p style="color: #065f46; margin-bottom: 0.5rem;">• MSE >> UCS: طاقة مهدرة (Founder أو Vibrations)</p>
<p style="color: #065f46;">• الهدف: تقليل MSE مع الحفاظ على ROP عالي</p>
</div>

<h3 style="color: #ff6b35; font-size: 1.2rem; margin-bottom: 0.75rem;">أسباب ارتفاع MSE</h3>

<ul style="list-style-type: none; padding: 0; margin: 1rem 0;">
<li style="padding: 0.75rem; background: #fef2f2; margin-bottom: 0.5rem; border-radius: 8px; border-right: 3px solid #ef4444;">
<strong style="color: #991b1b;">1. Founder (Bit Balling):</strong>
<p style="color: #991b1b; margin-top: 0.5rem;">WOB زائد + تنظيف ضعيف = طاقة مهدرة في ضغط الفتاتات</p>
</li>
<li style="padding: 0.75rem; background: #fef2f2; margin-bottom: 0.5rem; border-radius: 8px; border-right: 3px solid #ef4444;">
<strong style="color: #991b1b;">2. Vibrations:</strong>
<p style="color: #991b1b; margin-top: 0.5rem;">الاهتزازات تُحوّل الطاقة لحركة غير مفيدة</p>
</li>
<li style="padding: 0.75rem; background: #fef2f2; margin-bottom: 0.5rem; border-radius: 8px; border-right: 3px solid #ef4444;">
<strong style="color: #991b1b;">3. Bit Wear:</strong>
<p style="color: #991b1b; margin-top: 0.5rem;">تآكل الـ Cutters يُقلل كفاءة القطع</p>
</li>
<li style="padding: 0.75rem; background: #fef2f2; margin-bottom: 0.5rem; border-radius: 8px; border-right: 3px solid #ef4444;">
<strong style="color: #991b1b;">4. Whirl:</strong>
<p style="color: #991b1b; margin-top: 0.5rem;">دوران غير متمركز للـ Bit يُهدر الطاقة</p>
</li>
</ul>
</section>

<section style="margin-bottom: 2rem;">
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; border-bottom: 3px solid #ff6b35; padding-bottom: 0.5rem;">🔷 تقنية Real-Time Optimization</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
التحسين الفوري يتبع منهجية منظمة لتعظيم ROP مع تقليل MSE:
</p>

<div style="background: linear-gradient(135deg, #065f46 0%, #047857 100%); color: white; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<h3 style="color: #34d399; font-size: 1.1rem; margin-bottom: 0.75rem;">خطوات التحسين الفوري</h3>
<p style="margin-bottom: 0.5rem;"><strong>1. Baseline:</strong> سجّل ROP و MSE الحالية</p>
<p style="margin-bottom: 0.5rem;"><strong>2. Adjust WOB:</strong> غيّر WOB بزيادات صغيرة وراقب MSE</p>
<p style="margin-bottom: 0.5rem;"><strong>3. Adjust RPM:</strong> اضبط RPM لتقليل MSE</p>
<p style="margin-bottom: 0.5rem;"><strong>4. Monitor Vibrations:</strong> تأكد من عدم وجود اهتزازات مدمرة</p>
<p style="margin-bottom: 0.5rem;"><strong>5. Optimize Hydraulics:</strong> تحقق من كفاية تنظيف القاع</p>
<p><strong>6. Iterate:</strong> كرر حتى الوصول للحالة المثلى</p>
</div>
</section>

<section style="margin-bottom: 2rem;">
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; border-bottom: 3px solid #ff6b35; padding-bottom: 0.5rem;">🔷 أنظمة التحكم الآلي في الحفر</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
التطور التكنولوجي أتاح أنظمة تحكم آلي تُحسّن ROP بشكل مستمر:
</p>

<h3 style="color: #ff6b35; font-size: 1.2rem; margin-bottom: 0.75rem;">1️⃣ AutoDriller</h3>

<div style="background: #eff6ff; border-right: 4px solid #3b82f6; padding: 1rem; margin: 1rem 0; border-radius: 8px;">
<p style="color: #1e3a8a; margin-bottom: 0.5rem;">• يُحافظ على WOB ثابت تلقائياً</p>
<p style="color: #1e3a8a; margin-bottom: 0.5rem;">• يُعوّض تغيرات التكوين بسرعة</p>
<p style="color: #1e3a8a;">• يُقلل الأخطاء البشرية في التحكم بـ WOB</p>
</div>

<h3 style="color: #ff6b35; font-size: 1.2rem; margin-bottom: 0.75rem;">2️⃣ Drilling Advisory Systems</h3>

<div style="background: #f0fdf4; border-right: 4px solid #22c55e; padding: 1rem; margin: 1rem 0; border-radius: 8px;">
<p style="color: #065f46; margin-bottom: 0.5rem;">• تُحلل البيانات وتُقدم توصيات فورية</p>
<p style="color: #065f46; margin-bottom: 0.5rem;">• تستخدم AI و Machine Learning للتنبؤ</p>
<p style="color: #065f46;">• تُقارن الأداء مع Offset Wells</p>
</div>

<h3 style="color: #ff6b35; font-size: 1.2rem; margin-bottom: 0.75rem;">3️⃣ Closed-Loop Drilling Systems</h3>

<div style="background: #fef3c7; border-right: 4px solid #f59e0b; padding: 1rem; margin: 1rem 0; border-radius: 8px;">
<p style="color: #78350f; margin-bottom: 0.5rem;">• تتحكم آلياً في WOB, RPM, والهيدروليكيات</p>
<p style="color: #78350f; margin-bottom: 0.5rem;">• تُراقب MSE وتُعدّل لتحقيق الحد الأدنى</p>
<p style="color: #78350f;">• تتطلب بنية تحتية متقدمة وتدريب مكثف</p>
</div>
</section>

<section style="margin-bottom: 2rem;">
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; border-bottom: 3px solid #ff6b35; padding-bottom: 0.5rem;">🔷 تحليل أداء الحفر (Drilling Performance Analysis)</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #ff6b35; font-size: 1.2rem; margin-bottom: 1rem;">📈 مؤشرات الأداء الرئيسية (KPIs)</h3>

<p style="margin-bottom: 0.75rem;"><strong>1. Cost per Foot ($/ft):</strong></p>
<p style="margin-bottom: 1rem; padding-right: 1rem;">Cost/ft = (Bit Cost + Trip Cost + Drilling Cost) ÷ Footage</p>

<p style="margin-bottom: 0.75rem;"><strong>2. Connection Time:</strong></p>
<p style="margin-bottom: 1rem; padding-right: 1rem;">الوقت المستغرق لإضافة Stand جديد</p>

<p style="margin-bottom: 0.75rem;"><strong>3. Drilling Efficiency:</strong></p>
<p style="margin-bottom: 1rem; padding-right: 1rem;">نسبة الوقت الفعلي للحفر من إجمالي الوقت</p>

<p style="margin-bottom: 0.75rem;"><strong>4. Bit Life:</strong></p>
<p style="padding-right: 1rem;">المسافة المحفورة بالـ Bit الواحد</p>
</div>

<div style="background: #fef2f2; border: 2px solid #ef4444; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<p style="color: #991b1b; font-weight: bold;">⚠️ تذكر:</p>
<p style="color: #991b1b;">تحسين ROP ليس الهدف الوحيد - يجب موازنته مع سلامة البئر وعمر الـ Bit وتكلفة الإجمالية.</p>
</div>
</section>`,
          keyTerms: [
            { term: 'MSE (Mechanical Specific Energy)', definition: 'الطاقة المستهلكة لحفر وحدة حجم من الصخر، مؤشر رئيسي لكفاءة الحفر' },
            { term: 'AutoDriller', definition: 'نظام تحكم آلي يُحافظ على WOB ثابت ويُعوّض تغيرات التكوين' },
            { term: 'Drilling Advisory System', definition: 'نظام ذكي يُحلل بيانات الحفر ويُقدم توصيات لتحسين الأداء' },
            { term: 'Cost per Foot', definition: 'مقياس اقتصادي للتكلفة لكل قدم محفور، يشمل تكاليف الـ Bit والرحلات والحفر' },
            { term: 'Closed-Loop Drilling', definition: 'نظام حفر آلي متكامل يتحكم في جميع المعاملات لتحقيق أداء مثالي' },
          ],
          practiceQuestion: {
            question: 'ماذا يعني ارتفاع MSE مقارنة بـ UCS للتكوين؟',
            options: [
              'الحفر كفء جداً',
              'الـ Bit جديد وحاد',
              'هناك طاقة مهدرة (Founder أو Vibrations)',
              'معدل التدفق منخفض'
            ],
            correctAnswer: 2,
          },
        },
        en: {
          title: 'Real-Time ROP Monitoring and Optimization Techniques',
          explanation: `<section style="margin-bottom: 2rem;">
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; border-bottom: 3px solid #ff6b35; padding-bottom: 0.5rem;">🔷 Real-Time Drilling Monitoring Systems</h2>

<p style="margin-bottom: 1rem; line-height: 1.8; text-align: justify;">
Real-time ROP optimization depends on accurate and continuous monitoring of drilling parameters. Modern monitoring systems provide real-time data enabling engineers to make quick decisions to maximize efficiency.
</p>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="color: #ff6b35; font-size: 1.2rem; margin-bottom: 1rem;">📊 Real-Time Monitored Parameters</h3>

<table style="width: 100%; border-collapse: collapse; margin: 0.5rem 0;">
<tr>
<td style="padding: 0.5rem; color: #93c5fd;">• <strong>ROP</strong></td>
<td style="padding: 0.5rem;">Instantaneous penetration rate</td>
</tr>
<tr>
<td style="padding: 0.5rem; color: #93c5fd;">• <strong>WOB</strong></td>
<td style="padding: 0.5rem;">Weight on bit</td>
</tr>
<tr>
<td style="padding: 0.5rem; color: #93c5fd;">• <strong>RPM</strong></td>
<td style="padding: 0.5rem;">Rotation speed (Surface + Downhole)</td>
</tr>
<tr>
<td style="padding: 0.5rem; color: #93c5fd;">• <strong>Torque</strong></td>
<td style="padding: 0.5rem;">Rotational torque</td>
</tr>
<tr>
<td style="padding: 0.5rem; color: #93c5fd;">• <strong>SPP</strong></td>
<td style="padding: 0.5rem;">Standpipe Pressure</td>
</tr>
<tr>
<td style="padding: 0.5rem; color: #93c5fd;">• <strong>Flow Rate</strong></td>
<td style="padding: 0.5rem;">Fluid flow rate</td>
</tr>
<tr>
<td style="padding: 0.5rem; color: #93c5fd;">• <strong>MSE</strong></td>
<td style="padding: 0.5rem;">Mechanical Specific Energy</td>
</tr>
</table>
</div>
</section>

<section style="margin-bottom: 2rem;">
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; border-bottom: 3px solid #ff6b35; padding-bottom: 0.5rem;">🔷 Mechanical Specific Energy (MSE)</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
<strong>MSE</strong> is the most important concept in real-time ROP optimization. It represents energy consumed to drill a unit volume of rock:
</p>

<div style="background: #f0f9ff; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<div style="background: white; padding: 1rem; border-radius: 8px; text-align: center; margin-bottom: 1rem;">
<p style="font-size: 1.2rem; font-weight: bold; color: #1e3a5f;">
MSE = (WOB/Ab) + (120π × RPM × T) / (Ab × ROP)
</p>
</div>
<p style="color: #0c4a6e;"><strong>Ab:</strong> Bit area (in²)</p>
<p style="color: #0c4a6e;"><strong>T:</strong> Torque (ft-lbs)</p>
<p style="color: #0c4a6e;"><strong>MSE unit:</strong> psi</p>
</div>

<div style="background: #f0fdf4; border-left: 4px solid #22c55e; padding: 1rem; margin: 1rem 0; border-radius: 8px;">
<p style="color: #065f46; font-weight: bold; margin-bottom: 0.5rem;">✅ MSE Value Interpretation:</p>
<p style="color: #065f46; margin-bottom: 0.5rem;">• MSE close to UCS: Efficient drilling</p>
<p style="color: #065f46; margin-bottom: 0.5rem;">• MSE >> UCS: Wasted energy (Founder or Vibrations)</p>
<p style="color: #065f46;">• Goal: Minimize MSE while maintaining high ROP</p>
</div>

<h3 style="color: #ff6b35; font-size: 1.2rem; margin-bottom: 0.75rem;">Causes of High MSE</h3>

<ul style="list-style-type: none; padding: 0; margin: 1rem 0;">
<li style="padding: 0.75rem; background: #fef2f2; margin-bottom: 0.5rem; border-radius: 8px; border-left: 3px solid #ef4444;">
<strong style="color: #991b1b;">1. Founder (Bit Balling):</strong>
<p style="color: #991b1b; margin-top: 0.5rem;">Excessive WOB + poor cleaning = energy wasted compressing cuttings</p>
</li>
<li style="padding: 0.75rem; background: #fef2f2; margin-bottom: 0.5rem; border-radius: 8px; border-left: 3px solid #ef4444;">
<strong style="color: #991b1b;">2. Vibrations:</strong>
<p style="color: #991b1b; margin-top: 0.5rem;">Vibrations convert energy to non-useful motion</p>
</li>
<li style="padding: 0.75rem; background: #fef2f2; margin-bottom: 0.5rem; border-radius: 8px; border-left: 3px solid #ef4444;">
<strong style="color: #991b1b;">3. Bit Wear:</strong>
<p style="color: #991b1b; margin-top: 0.5rem;">Cutter wear reduces cutting efficiency</p>
</li>
<li style="padding: 0.75rem; background: #fef2f2; margin-bottom: 0.5rem; border-radius: 8px; border-left: 3px solid #ef4444;">
<strong style="color: #991b1b;">4. Whirl:</strong>
<p style="color: #991b1b; margin-top: 0.5rem;">Off-center bit rotation wastes energy</p>
</li>
</ul>
</section>

<section style="margin-bottom: 2rem;">
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; border-bottom: 3px solid #ff6b35; padding-bottom: 0.5rem;">🔷 Real-Time Optimization Technique</h2>

<div style="background: linear-gradient(135deg, #065f46 0%, #047857 100%); color: white; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<h3 style="color: #34d399; font-size: 1.1rem; margin-bottom: 0.75rem;">Real-Time Optimization Steps</h3>
<p style="margin-bottom: 0.5rem;"><strong>1. Baseline:</strong> Record current ROP and MSE</p>
<p style="margin-bottom: 0.5rem;"><strong>2. Adjust WOB:</strong> Change WOB in small increments and monitor MSE</p>
<p style="margin-bottom: 0.5rem;"><strong>3. Adjust RPM:</strong> Adjust RPM to minimize MSE</p>
<p style="margin-bottom: 0.5rem;"><strong>4. Monitor Vibrations:</strong> Ensure no destructive vibrations</p>
<p style="margin-bottom: 0.5rem;"><strong>5. Optimize Hydraulics:</strong> Verify adequate bottomhole cleaning</p>
<p><strong>6. Iterate:</strong> Repeat until optimal state is reached</p>
</div>
</section>

<section style="margin-bottom: 2rem;">
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; border-bottom: 3px solid #ff6b35; padding-bottom: 0.5rem;">🔷 Automated Drilling Control Systems</h2>

<h3 style="color: #ff6b35; font-size: 1.2rem; margin-bottom: 0.75rem;">1️⃣ AutoDriller</h3>

<div style="background: #eff6ff; border-left: 4px solid #3b82f6; padding: 1rem; margin: 1rem 0; border-radius: 8px;">
<p style="color: #1e3a8a; margin-bottom: 0.5rem;">• Automatically maintains constant WOB</p>
<p style="color: #1e3a8a; margin-bottom: 0.5rem;">• Quickly compensates for formation changes</p>
<p style="color: #1e3a8a;">• Reduces human errors in WOB control</p>
</div>

<h3 style="color: #ff6b35; font-size: 1.2rem; margin-bottom: 0.75rem;">2️⃣ Drilling Advisory Systems</h3>

<div style="background: #f0fdf4; border-left: 4px solid #22c55e; padding: 1rem; margin: 1rem 0; border-radius: 8px;">
<p style="color: #065f46; margin-bottom: 0.5rem;">• Analyze data and provide real-time recommendations</p>
<p style="color: #065f46; margin-bottom: 0.5rem;">• Use AI and Machine Learning for prediction</p>
<p style="color: #065f46;">• Compare performance with offset wells</p>
</div>

<h3 style="color: #ff6b35; font-size: 1.2rem; margin-bottom: 0.75rem;">3️⃣ Closed-Loop Drilling Systems</h3>

<div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 1rem; margin: 1rem 0; border-radius: 8px;">
<p style="color: #78350f; margin-bottom: 0.5rem;">• Automatically control WOB, RPM, and hydraulics</p>
<p style="color: #78350f; margin-bottom: 0.5rem;">• Monitor MSE and adjust to achieve minimum</p>
<p style="color: #78350f;">• Require advanced infrastructure and extensive training</p>
</div>
</section>`,
          keyTerms: [
            { term: 'MSE (Mechanical Specific Energy)', definition: 'Energy consumed to drill a unit volume of rock, key indicator of drilling efficiency' },
            { term: 'AutoDriller', definition: 'Automatic control system that maintains constant WOB and compensates for formation changes' },
            { term: 'Drilling Advisory System', definition: 'Intelligent system that analyzes drilling data and provides performance optimization recommendations' },
            { term: 'Cost per Foot', definition: 'Economic measure of cost per drilled foot, including bit, trip, and drilling costs' },
            { term: 'Closed-Loop Drilling', definition: 'Integrated automated drilling system that controls all parameters for optimal performance' },
          ],
          practiceQuestion: {
            question: 'What does high MSE compared to formation UCS indicate?',
            options: [
              'Very efficient drilling',
              'Bit is new and sharp',
              'Energy is being wasted (Founder or Vibrations)',
              'Flow rate is low'
            ],
            correctAnswer: 2,
          },
        },
      },
    },
    {
      day: 6,
      type: 'quiz',
      content: {
        ar: {
          title: 'اختبار تحسين معدل الاختراق (ROP)',
          explanation: 'اختبر معلوماتك حول تقنيات تحسين ROP والعوامل المؤثرة',
          keyTerms: [],
        },
        en: {
          title: 'ROP Optimization Quiz',
          explanation: 'Test your knowledge on ROP optimization techniques and influencing factors',
          keyTerms: [],
        },
      },
      quiz: {
        ar: [
          {
            question: 'ما هي العلاقة بين زيادة WOB و ROP عند الوصول لـ Flounder Point؟',
            options: [
              'ROP يستمر في الزيادة',
              'ROP يتوقف عن الزيادة أو ينخفض',
              'ROP يتضاعف',
              'لا توجد علاقة'
            ],
            correctAnswer: 1,
          },
          {
            question: 'ما هي نسبة ΔPbit المثلى من SPP لتحقيق Maximum Bit Hydraulic Horsepower؟',
            options: [
              '35%',
              '48-49%',
              '65%',
              '80%'
            ],
            correctAnswer: 2,
          },
          {
            question: 'ماذا يُمثل MSE (Mechanical Specific Energy)؟',
            options: [
              'سرعة الدوران القصوى',
              'الطاقة المستهلكة لحفر وحدة حجم من الصخر',
              'الوزن الأقصى على الـ Bit',
              'ضغط سائل الحفر'
            ],
            correctAnswer: 1,
          },
          {
            question: 'ما هو تأثير زيادة Overbalance على ROP؟',
            options: [
              'يزيد ROP',
              'لا يؤثر',
              'يُقلل ROP بسبب Chip Hold-Down',
              'يُحسّن تنظيف القاع'
            ],
            correctAnswer: 2,
          },
          {
            question: 'ما هو Depth of Cut (DOC)؟',
            options: [
              'عمق البئر الكلي',
              'عمق الاختراق لكل دورة من الـ Bit',
              'قطر الـ Bit',
              'طول عمود الحفر'
            ],
            correctAnswer: 1,
          },
          {
            question: 'ما هو الحد الأدنى المُوصى به لقطر الفوهات لتجنب الانسداد؟',
            options: [
              '5/32"',
              '7/32"',
              '9/32"',
              '11/32"'
            ],
            correctAnswer: 2,
          },
          {
            question: 'ماذا يعني ارتفاع MSE بشكل كبير مقارنة بـ UCS للتكوين؟',
            options: [
              'حفر كفء جداً',
              'طاقة مهدرة (Founder أو Vibrations)',
              'الـ Bit جديد',
              'التكوين ناعم جداً'
            ],
            correctAnswer: 1,
          },
          {
            question: 'ما هي وظيفة AutoDriller؟',
            options: [
              'تحديد موقع البئر',
              'الحفاظ على WOB ثابت تلقائياً',
              'قياس عمق البئر',
              'تحليل عينات الصخور'
            ],
            correctAnswer: 1,
          },
          {
            question: 'أي نوع من سوائل الحفر يُعطي عادةً ROP أعلى في التكوينات الناعمة؟',
            options: [
              'Oil-Based Mud (OBM)',
              'Water-Based Mud (WBM)',
              'Synthetic-Based Mud (SBM)',
              'جميعها متساوية'
            ],
            correctAnswer: 1,
          },
          {
            question: 'ما هو الغرض من Drill-Off Test؟',
            options: [
              'اختبار قوة التكوين',
              'تحديد WOB و RPM الأمثل',
              'قياس كثافة الطين',
              'فحص الـ Bit للتآكل'
            ],
            correctAnswer: 1,
          },
        ],
        en: [
          {
            question: 'What is the relationship between increasing WOB and ROP when reaching Flounder Point?',
            options: [
              'ROP continues to increase',
              'ROP stops increasing or decreases',
              'ROP doubles',
              'No relationship'
            ],
            correctAnswer: 1,
          },
          {
            question: 'What is the optimal ΔPbit percentage of SPP for Maximum Bit Hydraulic Horsepower?',
            options: [
              '35%',
              '48-49%',
              '65%',
              '80%'
            ],
            correctAnswer: 2,
          },
          {
            question: 'What does MSE (Mechanical Specific Energy) represent?',
            options: [
              'Maximum rotation speed',
              'Energy consumed to drill a unit volume of rock',
              'Maximum weight on bit',
              'Drilling fluid pressure'
            ],
            correctAnswer: 1,
          },
          {
            question: 'What is the effect of increasing Overbalance on ROP?',
            options: [
              'Increases ROP',
              'No effect',
              'Reduces ROP due to Chip Hold-Down',
              'Improves bottomhole cleaning'
            ],
            correctAnswer: 2,
          },
          {
            question: 'What is Depth of Cut (DOC)?',
            options: [
              'Total well depth',
              'Penetration depth per bit revolution',
              'Bit diameter',
              'Drillstring length'
            ],
            correctAnswer: 1,
          },
          {
            question: 'What is the minimum recommended nozzle diameter to avoid plugging?',
            options: [
              '5/32"',
              '7/32"',
              '9/32"',
              '11/32"'
            ],
            correctAnswer: 2,
          },
          {
            question: 'What does significantly high MSE compared to formation UCS indicate?',
            options: [
              'Very efficient drilling',
              'Wasted energy (Founder or Vibrations)',
              'Bit is new',
              'Very soft formation'
            ],
            correctAnswer: 1,
          },
          {
            question: 'What is the function of AutoDriller?',
            options: [
              'Determine well location',
              'Automatically maintain constant WOB',
              'Measure well depth',
              'Analyze rock samples'
            ],
            correctAnswer: 1,
          },
          {
            question: 'Which drilling fluid type typically gives higher ROP in soft formations?',
            options: [
              'Oil-Based Mud (OBM)',
              'Water-Based Mud (WBM)',
              'Synthetic-Based Mud (SBM)',
              'All are equal'
            ],
            correctAnswer: 1,
          },
          {
            question: 'What is the purpose of a Drill-Off Test?',
            options: [
              'Test formation strength',
              'Determine optimal WOB and RPM',
              'Measure mud weight',
              'Inspect bit for wear'
            ],
            correctAnswer: 1,
          },
        ],
      },
    },
    {
      day: 7,
      type: 'project',
      content: {
        ar: {
          title: 'مشروع تحسين معدل الاختراق (ROP)',
          explanation: 'طبق ما تعلمته في تحليل وتحسين أداء الحفر',
          keyTerms: [],
        },
        en: {
          title: 'ROP Optimization Project',
          explanation: 'Apply what you learned in analyzing and optimizing drilling performance',
          keyTerms: [],
        },
      },
      project: {
        ar: {
          title: 'تحليل وتحسين أداء حفر بئر استكشافي',
          description: `أنت مهندس حفر مسؤول عن تحسين أداء حفر بئر استكشافي. البيانات الميدانية تُظهر أن ROP أقل من المتوقع بناءً على آبار Offset مشابهة. مهمتك هي تحليل المعاملات الحالية وتقديم خطة تحسين شاملة.

**بيانات البئر:**
- العمق الحالي: 8,500 ft (في تكوين حجر رملي متوسط الصلابة)
- Bit: 8.5" PDC Bit
- WOB الحالي: 35,000 lbs
- RPM (Surface): 120 RPM
- Flow Rate: 650 GPM
- SPP: 3,200 psi
- ΔPbit: 800 psi
- ROP الحالي: 45 ft/hr
- ROP المتوقع (من Offset Wells): 85 ft/hr
- Torque: مستقر لكن عالي
- MSE المحسوب: 32,000 psi
- UCS للتكوين (تقديري): 12,000 psi`,
          instructions: [
            'حلل البيانات المعطاة وحدد أسباب انخفاض ROP عن المتوقع',
            'احسب HSI الحالي وقارنه بالقيم المثلى',
            'حدد ما إذا كان WOB الحالي مناسباً لـ 8.5" PDC Bit',
            'حلل نسبة ΔPbit من SPP وحدد معيار التحسين المناسب',
            'فسّر قيمة MSE العالية مقارنة بـ UCS وحدد السبب المحتمل',
            'قدم خطة تحسين تتضمن تعديلات على WOB, RPM, والهيدروليكيات',
            'اقترح Drill-Off Test لتأكيد التوصيات',
          ],
          submissionType: 'text',
        },
        en: {
          title: 'Drilling Performance Analysis and Optimization for an Exploration Well',
          description: `You are a drilling engineer responsible for optimizing drilling performance of an exploration well. Field data shows that ROP is lower than expected based on similar offset wells. Your task is to analyze current parameters and provide a comprehensive optimization plan.

**Well Data:**
- Current Depth: 8,500 ft (in medium-hard sandstone formation)
- Bit: 8.5" PDC Bit
- Current WOB: 35,000 lbs
- RPM (Surface): 120 RPM
- Flow Rate: 650 GPM
- SPP: 3,200 psi
- ΔPbit: 800 psi
- Current ROP: 45 ft/hr
- Expected ROP (from Offset Wells): 85 ft/hr
- Torque: Stable but high
- Calculated MSE: 32,000 psi
- Formation UCS (estimated): 12,000 psi`,
          instructions: [
            'Analyze the given data and identify causes for ROP being lower than expected',
            'Calculate current HSI and compare it to optimal values',
            'Determine if current WOB is appropriate for 8.5" PDC Bit',
            'Analyze ΔPbit to SPP ratio and determine appropriate optimization criterion',
            'Interpret high MSE value compared to UCS and identify probable cause',
            'Provide optimization plan including adjustments to WOB, RPM, and hydraulics',
            'Suggest a Drill-Off Test to confirm recommendations',
          ],
          submissionType: 'text',
        },
      },
    },
  ],
};
