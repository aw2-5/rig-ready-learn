import { WeeklyLesson } from '../weeklyContent';

export const wellControlAdvancedLesson: WeeklyLesson = {
  lessonId: 'well-control-advanced',
  days: [
    {
      day: 1,
      type: 'learning',
      content: {
        ar: {
          title: 'التحكم المتقدم بالبئر - ديناميكيات الضغط والتكوين',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 المفاهيم المتقدمة في ديناميكيات التحكم بالبئر</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
في المستوى المتقدم من التحكم بالبئر، نتجاوز المفاهيم الأساسية لنفهم الديناميكيات المعقدة للضغط والتدفق. هذا يتطلب فهماً عميقاً للعلاقات بين الضغط الهيدروستاتيكي، ECD، ونافذة الطين (Mud Window)، بالإضافة إلى تأثير الحالات الاستثنائية مثل HPHT وآبار الغاز العميقة.
</p>

<div style="background: linear-gradient(135deg, #dc262615, #dc262610); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #dc2626;">
<h3 style="color: #dc2626; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">⚠️ نافذة الطين (Mud Window) ونطاق العمل الآمن</h3>
<p style="line-height: 1.8;">
نافذة الطين هي النطاق بين ضغط المسام (Pore Pressure) وضغط الكسر (Fracture Pressure). في الآبار HPHT، تكون هذه النافذة ضيقة جداً مما يجعل التحكم بالبئر أكثر تحدياً. تضييق النافذة بمقدار 0.5 ppg يزيد من خطر الركلة أو التكسير بشكل كبير.
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-top: 1rem; text-align: center; font-family: monospace; font-size: 1rem; color: #1e3a5f;">
Mud Window = Fracture Gradient - Pore Pressure Gradient
</div>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 MAASP - أقصى ضغط سطحي مسموح على الفتحة الحلقية</h2>

<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #059669; color: #065f46;">
<h3 style="color: #059669; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">حسابات MAASP المتقدمة</h3>
<p style="line-height: 1.8; margin-bottom: 1rem; color: #065f46;">
MAASP (Maximum Allowable Annular Surface Pressure) هو أقصى ضغط يمكن تحمله على الفتحة الحلقية دون تكسير أضعف نقطة (عادة عند الكيسنق):
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px; text-align: center; font-family: monospace; font-size: 1rem; color: #1e3a5f;">
MAASP = (Fracture Gradient - Current MW) × 0.052 × Shoe TVD
</div>
<p style="margin-top: 1rem; font-size: 0.9rem; color: #065f46;">
<strong>مثال:</strong> إذا كان Fracture Gradient = 14.2 ppg، Current MW = 12.0 ppg، Shoe TVD = 8,500 ft:<br/>
MAASP = (14.2 - 12.0) × 0.052 × 8,500 = <strong>972 psi</strong>
</p>
</div>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #2563eb; color: #1e3a8a;">
<h3 style="color: #1e40af; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">ECD وتأثيره على التحكم بالبئر</h3>
<p style="line-height: 1.8; color: #1e3a8a;">
ECD (Equivalent Circulating Density) يمثل الكثافة الفعالة أثناء الضخ ويؤثر بشكل مباشر على نافذة الطين:
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-top: 1rem; text-align: center; font-family: monospace; font-size: 1rem; color: #1e3a5f;">
ECD = MW + (Annular Pressure Loss / (0.052 × TVD))
</div>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2; margin-top: 1rem; color: #1e3a8a;">
<li><strong>أثناء الضخ:</strong> ECD > Static MW (قد يسبب تكسير)</li>
<li><strong>عند إيقاف الضخ:</strong> الضغط يعود للهيدروستاتيكي (قد يسبب ركلة)</li>
<li><strong>في الآبار الضيقة:</strong> ECD يرتفع بشكل كبير</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 سلوك الغاز متعدد الأطوار (Multi-Phase Flow)</h2>

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #f59e0b; color: #78350f;">
<h3 style="color: #92400e; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">تمدد الغاز وقانون الغازات الحقيقية</h3>
<p style="line-height: 1.8; color: #78350f;">
في الظروف العالية (HPHT)، لا يتبع الغاز قانون Boyle المثالي. نستخدم قانون الغازات الحقيقية مع معامل الانضغاطية Z:
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-top: 1rem; text-align: center; font-family: monospace; font-size: 1rem; color: #1e3a5f;">
P₁V₁/Z₁T₁ = P₂V₂/Z₂T₂
</div>
<p style="margin-top: 1rem; line-height: 1.8; color: #78350f;">
معامل Z يتراوح من 0.8-1.2 حسب الضغط والحرارة. في الضغوط العالية جداً، قد يكون Z > 1 مما يعني أن الغاز أكثر انضغاطاً من المتوقع.
</p>
</div>

<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #64748b; color: #334155;">
<h3 style="color: #475569; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">Gas Migration Rate - معدل هجرة الغاز</h3>
<p style="line-height: 1.8; margin-bottom: 1rem; color: #334155;">
الغاز يهاجر للأعلى حتى في البئر المغلق. معدل الهجرة يعتمد على:
</p>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2; color: #334155;">
<li><strong>لزوجة الطين:</strong> كلما زادت اللزوجة، قل معدل الهجرة</li>
<li><strong>حجم الفقاعة:</strong> الفقاعات الكبيرة أسرع من الصغيرة</li>
<li><strong>قطر الفتحة:</strong> الفتحات الضيقة تبطئ الهجرة</li>
<li><strong>المعدل النموذجي:</strong> 500-1000 ft/hr في الطين العادي</li>
</ul>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-top: 1rem; text-align: center; font-family: monospace; font-size: 0.9rem; color: #1e3a5f;">
زيادة الضغط السطحي بسبب الهجرة ≈ 0.1 - 0.3 psi/min (تقريباً)
</div>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 تحديد نوع السائل الداخل (Influx Type)</h2>

<div style="background: #fae8ff; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #a855f7; color: #581c87;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">تحليل الفرق بين SIDPP و SICP</h3>
<p style="line-height: 1.8; color: #581c87;">
الفرق بين الضغطين يكشف نوع السائل الداخل:
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-top: 1rem; color: #1e3a5f;">
<p style="margin-bottom: 0.5rem;"><strong>حساب كثافة السائل الداخل:</strong></p>
<p style="font-family: monospace; text-align: center;">
ρ<sub>influx</sub> = MW - ((SICP - SIDPP) / (0.052 × Kick Height))
</p>
<p style="margin-top: 1rem; font-size: 0.9rem;">
Kick Height = Pit Gain / Annular Capacity
</p>
</div>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2; margin-top: 1rem; color: #581c87;">
<li><strong>غاز:</strong> كثافة 1-3 ppg (فرق كبير بين SICP و SIDPP)</li>
<li><strong>نفط:</strong> كثافة 5-7 ppg</li>
<li><strong>ماء مالح:</strong> كثافة 8-9 ppg (فرق صغير)</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #7c3aed; color: #581c87;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2; color: #581c87;">
<li>نافذة الطين الضيقة في HPHT تتطلب دقة عالية في التحكم</li>
<li>MAASP يحدد الحد الأقصى للضغط السطحي الآمن</li>
<li>ECD يتغير أثناء الضخ ويؤثر على استقرار البئر</li>
<li>قانون الغازات الحقيقية ضروري في ظروف HPHT</li>
<li>تحليل الفرق بين SIDPP و SICP يكشف نوع الركلة</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Mud Window', definition: 'الفرق بين ضغط المسام وضغط الكسر - نطاق العمل الآمن لكثافة الطين' },
            { term: 'MAASP', definition: 'Maximum Allowable Annular Surface Pressure - أقصى ضغط سطحي مسموح دون تكسير التكوين' },
            { term: 'ECD', definition: 'Equivalent Circulating Density - الكثافة الفعالة أثناء الضخ تشمل فقدان الضغط الاحتكاكي' },
            { term: 'Z-Factor', definition: 'معامل انضغاطية الغاز الحقيقي - يحدد انحراف الغاز عن السلوك المثالي' },
            { term: 'Gas Migration', definition: 'هجرة الغاز للأعلى في البئر المغلق بمعدل 500-1000 قدم/ساعة' },
          ],
          practiceQuestion: {
            question: 'إذا كان Fracture Gradient = 15.0 ppg، MW = 11.5 ppg، Shoe TVD = 10,000 ft، ما هو MAASP؟',
            options: ['1,820 psi', '1,500 psi', '2,080 psi', '1,300 psi'],
            correctAnswer: 0,
          },
        },
        en: {
          title: 'Advanced Well Control - Pressure Dynamics & Formation Behavior',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Advanced Concepts in Well Control Dynamics</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
At the advanced level of well control, we go beyond basic concepts to understand the complex dynamics of pressure and flow. This requires a deep understanding of relationships between hydrostatic pressure, ECD, and the mud window, as well as the effects of exceptional conditions like HPHT and deep gas wells.
</p>

<div style="background: linear-gradient(135deg, #dc262615, #dc262610); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #dc2626;">
<h3 style="color: #dc2626; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">⚠️ Mud Window and Safe Operating Range</h3>
<p style="line-height: 1.8;">
The mud window is the range between pore pressure and fracture pressure. In HPHT wells, this window is very narrow, making well control more challenging. A 0.5 ppg window reduction significantly increases kick or fracture risk.
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-top: 1rem; text-align: center; font-family: monospace; font-size: 1rem; color: #1e3a5f;">
Mud Window = Fracture Gradient - Pore Pressure Gradient
</div>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 MAASP - Maximum Allowable Annular Surface Pressure</h2>

<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #059669; color: #065f46;">
<h3 style="color: #059669; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">Advanced MAASP Calculations</h3>
<p style="line-height: 1.8; margin-bottom: 1rem; color: #065f46;">
MAASP is the maximum pressure tolerable on the annulus without fracturing the weakest point (usually at the casing shoe):
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px; text-align: center; font-family: monospace; font-size: 1rem; color: #1e3a5f;">
MAASP = (Fracture Gradient - Current MW) × 0.052 × Shoe TVD
</div>
<p style="margin-top: 1rem; font-size: 0.9rem; color: #065f46;">
<strong>Example:</strong> If Fracture Gradient = 14.2 ppg, Current MW = 12.0 ppg, Shoe TVD = 8,500 ft:<br/>
MAASP = (14.2 - 12.0) × 0.052 × 8,500 = <strong>972 psi</strong>
</p>
</div>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #2563eb; color: #1e3a8a;">
<h3 style="color: #1e40af; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">ECD and Its Effect on Well Control</h3>
<p style="line-height: 1.8; color: #1e3a8a;">
ECD (Equivalent Circulating Density) represents effective density while pumping and directly affects the mud window:
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-top: 1rem; text-align: center; font-family: monospace; font-size: 1rem; color: #1e3a5f;">
ECD = MW + (Annular Pressure Loss / (0.052 × TVD))
</div>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2; margin-top: 1rem; color: #1e3a8a;">
<li><strong>While pumping:</strong> ECD > Static MW (may cause fracturing)</li>
<li><strong>When pumps stop:</strong> Pressure returns to hydrostatic (may cause kick)</li>
<li><strong>In slim holes:</strong> ECD increases significantly</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Multi-Phase Gas Behavior</h2>

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #f59e0b; color: #78350f;">
<h3 style="color: #92400e; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">Gas Expansion and Real Gas Law</h3>
<p style="line-height: 1.8; color: #78350f;">
Under HPHT conditions, gas doesn't follow ideal Boyle's Law. We use the real gas law with compressibility factor Z:
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-top: 1rem; text-align: center; font-family: monospace; font-size: 1rem; color: #1e3a5f;">
P₁V₁/Z₁T₁ = P₂V₂/Z₂T₂
</div>
<p style="margin-top: 1rem; line-height: 1.8; color: #78350f;">
Z-factor ranges from 0.8-1.2 depending on pressure and temperature. At very high pressures, Z > 1 means gas is more compressible than expected.
</p>
</div>

<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #64748b; color: #334155;">
<h3 style="color: #475569; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">Gas Migration Rate</h3>
<p style="line-height: 1.8; margin-bottom: 1rem; color: #334155;">
Gas migrates upward even in a shut-in well. Migration rate depends on:
</p>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2; color: #334155;">
<li><strong>Mud viscosity:</strong> Higher viscosity = slower migration</li>
<li><strong>Bubble size:</strong> Larger bubbles migrate faster</li>
<li><strong>Hole diameter:</strong> Narrow holes slow migration</li>
<li><strong>Typical rate:</strong> 500-1000 ft/hr in regular mud</li>
</ul>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-top: 1rem; text-align: center; font-family: monospace; font-size: 0.9rem; color: #1e3a5f;">
Surface pressure increase due to migration ≈ 0.1 - 0.3 psi/min (approximately)
</div>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Influx Type Identification</h2>

<div style="background: #fae8ff; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #a855f7; color: #581c87;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">Analyzing SIDPP vs SICP Difference</h3>
<p style="line-height: 1.8; color: #581c87;">
The difference between these pressures reveals influx type:
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-top: 1rem; color: #1e3a5f;">
<p style="margin-bottom: 0.5rem;"><strong>Influx density calculation:</strong></p>
<p style="font-family: monospace; text-align: center;">
ρ<sub>influx</sub> = MW - ((SICP - SIDPP) / (0.052 × Kick Height))
</p>
<p style="margin-top: 1rem; font-size: 0.9rem;">
Kick Height = Pit Gain / Annular Capacity
</p>
</div>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2; margin-top: 1rem; color: #581c87;">
<li><strong>Gas:</strong> 1-3 ppg density (large SICP-SIDPP difference)</li>
<li><strong>Oil:</strong> 5-7 ppg density</li>
<li><strong>Salt water:</strong> 8-9 ppg density (small difference)</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #7c3aed; color: #581c87;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2; color: #581c87;">
<li>Narrow mud window in HPHT requires high precision control</li>
<li>MAASP determines maximum safe surface pressure</li>
<li>ECD changes during pumping and affects well stability</li>
<li>Real gas law is essential in HPHT conditions</li>
<li>SIDPP vs SICP analysis reveals kick type</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Mud Window', definition: 'Difference between pore pressure and fracture pressure - safe operating range for mud weight' },
            { term: 'MAASP', definition: 'Maximum Allowable Annular Surface Pressure - max surface pressure without fracturing formation' },
            { term: 'ECD', definition: 'Equivalent Circulating Density - effective density while pumping includes frictional pressure loss' },
            { term: 'Z-Factor', definition: 'Real gas compressibility factor - determines gas deviation from ideal behavior' },
            { term: 'Gas Migration', definition: 'Gas rising in shut-in well at rate of 500-1000 ft/hr' },
          ],
          practiceQuestion: {
            question: 'If Fracture Gradient = 15.0 ppg, MW = 11.5 ppg, Shoe TVD = 10,000 ft, what is MAASP?',
            options: ['1,820 psi', '1,500 psi', '2,080 psi', '1,300 psi'],
            correctAnswer: 0,
          },
        },
      },
    },
    {
      day: 2,
      type: 'learning',
      content: {
        ar: {
          title: 'تقنيات الإغلاق المتقدمة وطرق التحكم غير التقليدية',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 تحليل متقدم لإجراءات الإغلاق</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
في هذا المستوى المتقدم، نتجاوز الإجراءات الأساسية لنفهم الديناميكيات المعقدة للإغلاق، بما في ذلك تأثير Water Hammer، وحسابات Choke Pressure، وطرق التحكم البديلة مثل Volumetric Method و Bullheading.
</p>

<div style="background: linear-gradient(135deg, #dc262615, #dc262610); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #dc2626;">
<h3 style="color: #dc2626; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">⚠️ Water Hammer Effect - تأثير صدمة الماء</h3>
<p style="line-height: 1.8;">
Water Hammer هو ارتفاع مفاجئ في الضغط عند إغلاق BOP بسرعة. يمكن أن يصل إلى 100-500 psi إضافية. في التكوينات الضعيفة، هذا الضغط الإضافي قد يسبب تكسير التكوين:
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-top: 1rem; text-align: center; font-family: monospace; font-size: 1rem; color: #1e3a5f;">
ΔP<sub>hammer</sub> = (ρ × c × Δv) / 144<br/>
حيث c = سرعة الصوت في الطين ≈ 4,000-5,000 ft/s
</div>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Volumetric Method - طريقة التحكم الحجمي</h2>

<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #059669; color: #065f46;">
<h3 style="color: #059669; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">متى تُستخدم Volumetric Method؟</h3>
<p style="line-height: 1.8; margin-bottom: 1rem; color: #065f46;">
تُستخدم عندما لا يمكن الضخ (انسداد، فشل المضخات، عدم وجود سلسلة حفر):
</p>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2; color: #065f46;">
<li>السماح للغاز بالهجرة للأعلى تدريجياً</li>
<li>تصريف كميات محسوبة من الطين للحفاظ على BHP ثابت</li>
<li>مراقبة زيادة الضغط السطحي بسبب هجرة الغاز</li>
</ul>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-top: 1rem; text-align: center; font-family: monospace; font-size: 0.95rem; color: #1e3a5f;">
حجم الطين للتصريف = (زيادة الضغط المسموحة) / (0.052 × MW × Annular Capacity)
</div>
</div>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #2563eb; color: #1e3a8a;">
<h3 style="color: #1e40af; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">خطوات Volumetric Method</h3>
<ol style="list-style-type: decimal; padding-right: 1.5rem; line-height: 2.2; color: #1e3a8a;">
<li>تحديد Work Pressure = SICP + Safety Margin (50-100 psi)</li>
<li>حساب Lubricate Pressure = ΔP المسموح (عادة 50-100 psi)</li>
<li>انتظر حتى يرتفع SICP بمقدار Lubricate Pressure</li>
<li>صرّف حجم محسوب من الطين ببطء</li>
<li>كرر حتى يصل الغاز للسطح</li>
<li>عند وصول الغاز، تحويل لطريقة قتل تقليدية</li>
</ol>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Bullheading - طريقة الضخ القسري</h2>

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #f59e0b; color: #78350f;">
<h3 style="color: #92400e; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">مفهوم Bullheading</h3>
<p style="line-height: 1.8; margin-bottom: 1rem; color: #78350f;">
الضخ القسري للطين أو السوائل لإعادة الركلة إلى التكوين بدلاً من إخراجها للسطح:
</p>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2; color: #78350f;">
<li><strong>المميزات:</strong> سريعة، تتجنب معالجة السوائل الخطرة على السطح</li>
<li><strong>العيوب:</strong> خطر تكسير التكوين، قد تدفع الغاز لمناطق أخرى</li>
<li><strong>الاستخدام:</strong> عندما يكون H₂S موجوداً، أو عند عدم وجود معدات معالجة كافية</li>
</ul>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-top: 1rem; text-align: center; font-family: monospace; font-size: 0.95rem; color: #1e3a5f;">
الضغط المطلوب للـ Bullheading = BHP + Friction Losses + Safety Margin
</div>
</div>

<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #64748b; color: #334155;">
<h3 style="color: #475569; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">حسابات Choke Pressure المتقدمة</h3>
<p style="line-height: 1.8; margin-bottom: 1rem; color: #334155;">
خلال عملية القتل، يجب التحكم بضغط الخنق للحفاظ على BHP ثابت:
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem; color: #1e3a5f;">
<p style="font-family: monospace; text-align: center; margin-bottom: 0.5rem;">
BHP = P<sub>hydrostatic</sub> + P<sub>choke</sub>
</p>
<p style="font-family: monospace; text-align: center;">
عند دخول طين ثقيل: P<sub>choke</sub> = BHP - (0.052 × MW<sub>new</sub> × TVD)
</p>
</div>
<p style="font-size: 0.9rem; color: #334155;">
كلما زاد عمود الطين الثقيل، يجب تقليل ضغط الخنق للحفاظ على BHP ثابت.
</p>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Stripping vs Snubbing</h2>

<div style="background: #fae8ff; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #a855f7; color: #581c87;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">إدخال الأنابيب تحت الضغط</h3>
<p style="line-height: 1.8; color: #581c87; margin-bottom: 1rem;">
عند الحاجة لإنزال سلسلة الحفر والبئر تحت الضغط:
</p>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2; color: #581c87;">
<li><strong>Stripping:</strong> عندما يكون وزن الأنابيب > قوة الضغط للأعلى (الأنابيب تنزل بوزنها)</li>
<li><strong>Snubbing:</strong> عندما يكون وزن الأنابيب < قوة الضغط (تحتاج قوة إضافية للإنزال)</li>
</ul>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-top: 1rem; text-align: center; font-family: monospace; font-size: 0.95rem; color: #1e3a5f;">
قوة الضغط = Wellhead Pressure × π × (OD²/4)<br/>
إذا وزن الأنابيب < قوة الضغط → Snubbing مطلوب
</div>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #7c3aed; color: #581c87;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2; color: #581c87;">
<li>Water Hammer يمكن أن يضيف 100-500 psi أثناء الإغلاق السريع</li>
<li>Volumetric Method للتحكم بدون الضخ عبر الأنابيب</li>
<li>Bullheading لإعادة الركلة للتكوين (خطر تكسير)</li>
<li>الفرق بين Stripping و Snubbing يعتمد على موازنة الوزن والضغط</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Water Hammer', definition: 'ارتفاع مفاجئ في الضغط عند الإغلاق السريع بسبب تباطؤ السائل المتحرك' },
            { term: 'Volumetric Method', definition: 'طريقة تحكم بدون ضخ - السماح للغاز بالهجرة وتصريف كميات محسوبة' },
            { term: 'Bullheading', definition: 'ضخ قسري لإعادة الركلة للتكوين بدلاً من إخراجها للسطح' },
            { term: 'Stripping', definition: 'إنزال الأنابيب تحت الضغط عندما يكون وزنها أكبر من قوة الضغط للأعلى' },
            { term: 'Snubbing', definition: 'إنزال الأنابيب تحت الضغط باستخدام قوة ميكانيكية إضافية' },
          ],
          practiceQuestion: {
            question: 'متى تُستخدم Volumetric Method؟',
            options: [
              'عند توفر ضغط عالي من المضخات',
              'عند انسداد سلسلة الحفر أو عدم القدرة على الضخ',
              'فقط في الآبار الأفقية',
              'عند وجود ركلة سائلة فقط'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Advanced Shut-In Techniques and Non-Conventional Control Methods',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Advanced Shut-In Analysis</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
At this advanced level, we go beyond basic procedures to understand complex shut-in dynamics, including Water Hammer effects, Choke Pressure calculations, and alternative control methods like Volumetric Method and Bullheading.
</p>

<div style="background: linear-gradient(135deg, #dc262615, #dc262610); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #dc2626;">
<h3 style="color: #dc2626; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">⚠️ Water Hammer Effect</h3>
<p style="line-height: 1.8;">
Water Hammer is a sudden pressure spike when BOP closes rapidly. It can add 100-500 psi. In weak formations, this extra pressure may cause fracturing:
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-top: 1rem; text-align: center; font-family: monospace; font-size: 1rem; color: #1e3a5f;">
ΔP<sub>hammer</sub> = (ρ × c × Δv) / 144<br/>
where c = speed of sound in mud ≈ 4,000-5,000 ft/s
</div>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Volumetric Method</h2>

<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #059669; color: #065f46;">
<h3 style="color: #059669; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">When to Use Volumetric Method?</h3>
<p style="line-height: 1.8; margin-bottom: 1rem; color: #065f46;">
Used when pumping is not possible (plugged pipe, pump failure, no drillstring):
</p>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2; color: #065f46;">
<li>Allow gas to migrate upward gradually</li>
<li>Bleed calculated volumes to maintain constant BHP</li>
<li>Monitor surface pressure increase from gas migration</li>
</ul>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-top: 1rem; text-align: center; font-family: monospace; font-size: 0.95rem; color: #1e3a5f;">
Bleed Volume = (Allowable Pressure Increase) / (0.052 × MW × Annular Capacity)
</div>
</div>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #2563eb; color: #1e3a8a;">
<h3 style="color: #1e40af; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">Volumetric Method Steps</h3>
<ol style="list-style-type: decimal; padding-left: 1.5rem; line-height: 2.2; color: #1e3a8a;">
<li>Determine Work Pressure = SICP + Safety Margin (50-100 psi)</li>
<li>Calculate Lubricate Pressure = Allowable ΔP (usually 50-100 psi)</li>
<li>Wait for SICP to increase by Lubricate Pressure amount</li>
<li>Slowly bleed calculated volume of mud</li>
<li>Repeat until gas reaches surface</li>
<li>When gas surfaces, switch to conventional kill method</li>
</ol>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Bullheading</h2>

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #f59e0b; color: #78350f;">
<h3 style="color: #92400e; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">Bullheading Concept</h3>
<p style="line-height: 1.8; margin-bottom: 1rem; color: #78350f;">
Forcefully pumping mud or fluids to push the kick back into formation instead of circulating out:
</p>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2; color: #78350f;">
<li><strong>Advantages:</strong> Fast, avoids handling dangerous fluids at surface</li>
<li><strong>Disadvantages:</strong> Fracture risk, may push gas to other zones</li>
<li><strong>Use:</strong> When H₂S is present, or insufficient surface handling equipment</li>
</ul>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-top: 1rem; text-align: center; font-family: monospace; font-size: 0.95rem; color: #1e3a5f;">
Bullheading Pressure Required = BHP + Friction Losses + Safety Margin
</div>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2rem 0 1rem;">🔷 Stripping vs Snubbing</h2>

<div style="background: #fae8ff; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #a855f7; color: #581c87;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">Running Pipe Under Pressure</h3>
<p style="line-height: 1.8; color: #581c87; margin-bottom: 1rem;">
When drillstring must be run with well under pressure:
</p>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2; color: #581c87;">
<li><strong>Stripping:</strong> When pipe weight > upward pressure force (pipe goes down by weight)</li>
<li><strong>Snubbing:</strong> When pipe weight < pressure force (needs additional force)</li>
</ul>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-top: 1rem; text-align: center; font-family: monospace; font-size: 0.95rem; color: #1e3a5f;">
Pressure Force = Wellhead Pressure × π × (OD²/4)<br/>
If Pipe Weight < Pressure Force → Snubbing Required
</div>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #7c3aed; color: #581c87;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2; color: #581c87;">
<li>Water Hammer can add 100-500 psi during rapid shut-in</li>
<li>Volumetric Method for control without pumping through string</li>
<li>Bullheading pushes kick back to formation (fracture risk)</li>
<li>Stripping vs Snubbing depends on weight vs pressure force balance</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Water Hammer', definition: 'Sudden pressure spike during rapid shut-in due to deceleration of moving fluid' },
            { term: 'Volumetric Method', definition: 'Control method without pumping - allowing gas migration and bleeding calculated volumes' },
            { term: 'Bullheading', definition: 'Forceful pumping to push kick back into formation instead of circulating out' },
            { term: 'Stripping', definition: 'Running pipe under pressure when pipe weight exceeds upward pressure force' },
            { term: 'Snubbing', definition: 'Running pipe under pressure using additional mechanical force' },
          ],
          practiceQuestion: {
            question: 'When is Volumetric Method used?',
            options: [
              'When high pump pressure is available',
              'When drillstring is plugged or pumping is not possible',
              'Only in horizontal wells',
              'Only for liquid kicks'
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
          title: 'تقنيات القتل غير التقليدية المتقدمة',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 تقنيات التحكم غير التقليدية (Non-Conventional Kill Techniques)</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
في الحالات التي لا تنجح فيها طرق القتل التقليدية (Driller's Method و Wait & Weight)، نلجأ لتقنيات متقدمة. هذه التقنيات تُستخدم في الظروف الاستثنائية مثل انسداد الأنابيب، عدم القدرة على الضخ، أو هجرة الغاز السريعة.
</p>

<div style="background: linear-gradient(135deg, #dc262615, #dc262610); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #dc2626;">
<h3 style="color: #dc2626; font-size: 1.3rem; font-weight: bold; margin-bottom: 1rem;">⚠️ 1. طريقة التشحيم والتنفيس (Lubricate & Bleed)</h3>
<p style="line-height: 1.8; margin-bottom: 1rem; color: #1e293b;">
تُستخدم عندما لا يمكن الضخ (انسداد الأنابيب، عطل المضخات، أو عدم وجود سلسلة حفر). تعتمد على ضخ كميات صغيرة من الطين وتنفيس الغاز بالتناوب.
</p>
<div style="background: #fff; padding: 1.25rem; border-radius: 8px; margin: 1rem 0;">
<p style="font-weight: bold; color: #dc2626; margin-bottom: 0.75rem;">خطوات التنفيذ:</p>
<ol style="padding-right: 1.5rem; line-height: 2.2; color: #1e293b;">
<li><strong>حساب حجم الطين:</strong> ضخ كمية صغيرة (عادة 5-10 براميل) عبر Kill Line</li>
<li><strong>الانتظار:</strong> السماح للطين بالاستقرار فوق الغاز (10-15 دقيقة)</li>
<li><strong>القراءة:</strong> حساب الانخفاض المتوقع في الضغط</li>
<li><strong>التنفيس:</strong> تنفيس الغاز من Choke Line حتى يصل الضغط للقيمة المتوقعة</li>
<li><strong>التكرار:</strong> تكرار العملية حتى إخراج كل الغاز</li>
</ol>
</div>
<div style="background: #fef2f2; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
<p style="font-family: monospace; text-align: center; color: #1e293b; font-size: 1rem;">
انخفاض الضغط لكل برميل = (MW × 0.052 × Annular Height per bbl)
</p>
<p style="margin-top: 0.75rem; font-size: 0.9rem; color: #dc2626;">
<strong>⚡ تحذير:</strong> عند التنفيس، لا تخفض الضغط أكثر من المحسوب لتجنب ركلة جديدة!
</p>
</div>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2.5rem 0 1rem;">🔷 2. القتل العكسي (Reverse Kill / Bullheading)</h2>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #2563eb;">
<p style="line-height: 1.8; margin-bottom: 1rem; color: #1e3a8a;">
طريقة تعتمد على ضخ الطين الثقيل من السطح لدفع السائل الداخل عائداً إلى التكوين. تُستخدم في حالات محددة جداً.
</p>
<div style="background: #fff; padding: 1.25rem; border-radius: 8px; margin: 1rem 0;">
<p style="font-weight: bold; color: #1e40af; margin-bottom: 0.75rem;">شروط الاستخدام:</p>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2; color: #1e3a8a;">
<li>تكوين قادر على استيعاب السوائل (عالي النفاذية)</li>
<li>H₂S أو غازات سامة تمنع الضخ العادي للسطح</li>
<li>خطر انفجار سطحي عالي</li>
<li>عدم وجود معدات معالجة كافية للغاز</li>
</ul>
</div>
<div style="background: #eff6ff; padding: 1rem; border-radius: 8px; margin-top: 1rem; color: #1e3a8a;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">⚠️ مخاطر Bullheading:</p>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 1.8; font-size: 0.95rem;">
<li>تكسير التكوين (Fracturing) إذا تجاوز الضغط LOT</li>
<li>Underground Blowout إذا كان التكوين ضعيفاً</li>
<li>انسداد التكوين بالحفريات والباريت</li>
</ul>
</div>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2.5rem 0 1rem;">🔷 3. الطريقة الحجمية (Volumetric Method)</h2>

<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #059669;">
<p style="line-height: 1.8; margin-bottom: 1rem; color: #065f46;">
تُستخدم عندما لا يمكن الضخ إطلاقاً. تتحكم في هجرة الغاز بالتنفيس المحسوب للحفاظ على BHP ثابت فوق ضغط التكوين.
</p>
<div style="background: #fff; padding: 1.25rem; border-radius: 8px; margin: 1rem 0;">
<p style="font-weight: bold; color: #059669; margin-bottom: 0.75rem;">مبدأ العمل:</p>
<p style="line-height: 1.8; color: #065f46;">
عند هجرة الغاز للأعلى، يزداد الضغط السطحي. نسمح بزيادة الضغط بمقدار محسوب (Safety Margin) ثم ننفس لتخفيضه. هذا يسمح للغاز بالصعود مع الحفاظ على ضغط القاع.
</p>
</div>
<div style="background: #dcfce7; padding: 1rem; border-radius: 8px; margin-top: 1rem; font-family: monospace; text-align: center; color: #065f46;">
ΔP للتنفيس = (زيادة الضغط) - (Hydrostatic من الطين المُنفَّس)
</div>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2.5rem 0 1rem;">🔷 4. مقارنة التقنيات</h2>

<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #64748b;">
<table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
<thead>
<tr style="background: #e2e8f0;">
<th style="padding: 0.75rem; border: 1px solid #cbd5e1; text-align: right; color: #1e293b;">التقنية</th>
<th style="padding: 0.75rem; border: 1px solid #cbd5e1; text-align: right; color: #1e293b;">متى تُستخدم</th>
<th style="padding: 0.75rem; border: 1px solid #cbd5e1; text-align: right; color: #1e293b;">المخاطر</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 0.75rem; border: 1px solid #cbd5e1; color: #1e293b;">Lubricate & Bleed</td>
<td style="padding: 0.75rem; border: 1px solid #cbd5e1; color: #1e293b;">انسداد أنابيب، عطل مضخات</td>
<td style="padding: 0.75rem; border: 1px solid #cbd5e1; color: #1e293b;">بطيئة، تتطلب دقة عالية</td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 0.75rem; border: 1px solid #cbd5e1; color: #1e293b;">Bullheading</td>
<td style="padding: 0.75rem; border: 1px solid #cbd5e1; color: #1e293b;">غازات سامة، خطر سطحي</td>
<td style="padding: 0.75rem; border: 1px solid #cbd5e1; color: #1e293b;">تكسير التكوين</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #cbd5e1; color: #1e293b;">Volumetric</td>
<td style="padding: 0.75rem; border: 1px solid #cbd5e1; color: #1e293b;">لا يمكن الضخ إطلاقاً</td>
<td style="padding: 0.75rem; border: 1px solid #cbd5e1; color: #1e293b;">معقدة حسابياً</td>
</tr>
</tbody>
</table>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2; color: #581c87;">
<li><strong>Lubricate & Bleed:</strong> ضخ طين صغير + تنفيس غاز بالتناوب</li>
<li><strong>Bullheading:</strong> دفع الغاز للتكوين - خطر تكسير</li>
<li><strong>Volumetric:</strong> تنفيس محسوب بدون ضخ</li>
<li>اختيار التقنية يعتمد على الظروف والمعدات المتاحة</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Lubricate & Bleed', definition: 'ضخ كميات صغيرة من الطين وتنفيس الغاز بالتناوب عند عدم القدرة على الضخ العادي' },
            { term: 'Bullheading', definition: 'دفع السائل الداخل عائداً للتكوين بالضغط العالي - يُستخدم مع الغازات السامة' },
            { term: 'Volumetric Method', definition: 'السيطرة على هجرة الغاز بالتنفيس المحسوب فقط بدون ضخ أي سوائل' },
            { term: 'Safety Margin', definition: 'هامش الضغط المسموح به قبل التنفيس (عادة 50-100 psi)' },
            { term: 'LOT (Leak-Off Test)', definition: 'اختبار لتحديد ضغط تكسير التكوين - حد أقصى لا يجب تجاوزه' },
          ],
          practiceQuestion: {
            question: 'متى تُستخدم طريقة Lubricate & Bleed بشكل أساسي؟',
            options: [
              'عند توفر مضخات قوية',
              'عند انسداد الأنابيب أو عطل المضخات',
              'فقط في الآبار البحرية',
              'عند وجود H₂S فقط'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Advanced Non-Conventional Kill Techniques',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Non-Conventional Kill Techniques</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
When conventional kill methods (Driller's Method and Wait & Weight) cannot be used, we resort to advanced techniques. These are employed in exceptional circumstances such as plugged pipe, inability to pump, or rapid gas migration.
</p>

<div style="background: linear-gradient(135deg, #dc262615, #dc262610); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #dc2626;">
<h3 style="color: #dc2626; font-size: 1.3rem; font-weight: bold; margin-bottom: 1rem;">⚠️ 1. Lubricate & Bleed Method</h3>
<p style="line-height: 1.8; margin-bottom: 1rem; color: #1e293b;">
Used when pumping is not possible (plugged pipe, pump failure, or no drillstring). It relies on pumping small volumes of mud and bleeding gas alternately.
</p>
<div style="background: #fff; padding: 1.25rem; border-radius: 8px; margin: 1rem 0;">
<p style="font-weight: bold; color: #dc2626; margin-bottom: 0.75rem;">Execution Steps:</p>
<ol style="padding-left: 1.5rem; line-height: 2.2; color: #1e293b;">
<li><strong>Calculate mud volume:</strong> Pump small quantity (typically 5-10 bbls) through Kill Line</li>
<li><strong>Wait:</strong> Allow mud to settle above the gas (10-15 minutes)</li>
<li><strong>Calculate:</strong> Compute expected pressure drop</li>
<li><strong>Bleed:</strong> Bleed gas from Choke Line until pressure reaches expected value</li>
<li><strong>Repeat:</strong> Continue until all gas is removed</li>
</ol>
</div>
<div style="background: #fef2f2; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
<p style="font-family: monospace; text-align: center; color: #1e293b; font-size: 1rem;">
Pressure drop per barrel = (MW × 0.052 × Annular Height per bbl)
</p>
<p style="margin-top: 0.75rem; font-size: 0.9rem; color: #dc2626;">
<strong>⚡ Warning:</strong> When bleeding, do not reduce pressure more than calculated to avoid a new kick!
</p>
</div>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2.5rem 0 1rem;">🔷 2. Reverse Kill / Bullheading</h2>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #2563eb;">
<p style="line-height: 1.8; margin-bottom: 1rem; color: #1e3a8a;">
A method that pumps heavy mud from surface to push the influx back into the formation. Used only in specific situations.
</p>
<div style="background: #fff; padding: 1.25rem; border-radius: 8px; margin: 1rem 0;">
<p style="font-weight: bold; color: #1e40af; margin-bottom: 0.75rem;">When to Use:</p>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2; color: #1e3a8a;">
<li>Formation capable of receiving fluids (high permeability)</li>
<li>H₂S or toxic gases preventing normal circulation to surface</li>
<li>High surface explosion risk</li>
<li>Insufficient gas handling equipment</li>
</ul>
</div>
<div style="background: #eff6ff; padding: 1rem; border-radius: 8px; margin-top: 1rem; color: #1e3a8a;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">⚠️ Bullheading Risks:</p>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 1.8; font-size: 0.95rem;">
<li>Formation fracturing if pressure exceeds LOT</li>
<li>Underground Blowout if formation is weak</li>
<li>Plugging formation with cuttings and barite</li>
</ul>
</div>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2.5rem 0 1rem;">🔷 3. Volumetric Method</h2>

<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #059669;">
<p style="line-height: 1.8; margin-bottom: 1rem; color: #065f46;">
Used when pumping is absolutely impossible. Controls gas migration through calculated bleeding to maintain BHP constant above formation pressure.
</p>
<div style="background: #fff; padding: 1.25rem; border-radius: 8px; margin: 1rem 0;">
<p style="font-weight: bold; color: #059669; margin-bottom: 0.75rem;">Working Principle:</p>
<p style="line-height: 1.8; color: #065f46;">
As gas migrates upward, surface pressure increases. We allow pressure to increase by a calculated amount (Safety Margin) then bleed to reduce it. This allows gas to rise while maintaining bottomhole pressure.
</p>
</div>
<div style="background: #dcfce7; padding: 1rem; border-radius: 8px; margin-top: 1rem; font-family: monospace; text-align: center; color: #065f46;">
ΔP to bleed = (Pressure increase) - (Hydrostatic from bled mud)
</div>
</div>

<h2 style="color: #1e3a5f; font-size: 1.4rem; font-weight: bold; margin: 2.5rem 0 1rem;">🔷 4. Technique Comparison</h2>

<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #64748b;">
<table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
<thead>
<tr style="background: #e2e8f0;">
<th style="padding: 0.75rem; border: 1px solid #cbd5e1; text-align: left; color: #1e293b;">Technique</th>
<th style="padding: 0.75rem; border: 1px solid #cbd5e1; text-align: left; color: #1e293b;">When to Use</th>
<th style="padding: 0.75rem; border: 1px solid #cbd5e1; text-align: left; color: #1e293b;">Risks</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 0.75rem; border: 1px solid #cbd5e1; color: #1e293b;">Lubricate & Bleed</td>
<td style="padding: 0.75rem; border: 1px solid #cbd5e1; color: #1e293b;">Plugged pipe, pump failure</td>
<td style="padding: 0.75rem; border: 1px solid #cbd5e1; color: #1e293b;">Slow, requires high precision</td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 0.75rem; border: 1px solid #cbd5e1; color: #1e293b;">Bullheading</td>
<td style="padding: 0.75rem; border: 1px solid #cbd5e1; color: #1e293b;">Toxic gases, surface hazard</td>
<td style="padding: 0.75rem; border: 1px solid #cbd5e1; color: #1e293b;">Formation fracturing</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #cbd5e1; color: #1e293b;">Volumetric</td>
<td style="padding: 0.75rem; border: 1px solid #cbd5e1; color: #1e293b;">No pumping possible at all</td>
<td style="padding: 0.75rem; border: 1px solid #cbd5e1; color: #1e293b;">Complex calculations</td>
</tr>
</tbody>
</table>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2; color: #581c87;">
<li><strong>Lubricate & Bleed:</strong> Small mud pumping + alternating gas bleeding</li>
<li><strong>Bullheading:</strong> Push gas back to formation - fracture risk</li>
<li><strong>Volumetric:</strong> Calculated bleeding without pumping</li>
<li>Technique selection depends on conditions and available equipment</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Lubricate & Bleed', definition: 'Pumping small mud volumes and bleeding gas alternately when normal pumping is impossible' },
            { term: 'Bullheading', definition: 'Forcing the influx back into formation with high pressure - used with toxic gases' },
            { term: 'Volumetric Method', definition: 'Controlling gas migration through calculated bleeding only without pumping any fluids' },
            { term: 'Safety Margin', definition: 'Allowable pressure increase before bleeding (typically 50-100 psi)' },
            { term: 'LOT (Leak-Off Test)', definition: 'Test to determine formation fracture pressure - maximum limit not to exceed' },
          ],
          practiceQuestion: {
            question: 'When is the Lubricate & Bleed method primarily used?',
            options: [
              'When powerful pumps are available',
              'When pipe is plugged or pumps have failed',
              'Only in offshore wells',
              'Only when H₂S is present'
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
          title: 'تقنيات القتل المتقدمة: Dynamic Kill و Off-Bottom Kill و Stripping',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 تقنيات القتل في الحالات الاستثنائية</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
في بعض الحالات المعقدة، لا تكفي الطرق التقليدية. نحتاج لتقنيات أكثر تخصصاً تعتمد على مبادئ ديناميكية.
</p>

<div style="background: linear-gradient(135deg, #05966915, #05966910); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #059669;">
<h3 style="color: #059669; font-size: 1.3rem; font-weight: bold; margin-bottom: 1rem;">🔥 1. القتل الديناميكي (Dynamic Kill)</h3>
<p style="line-height: 1.8; margin-bottom: 1rem; color: #1e293b;">
يعتمد على استخدام فقدان الضغط الاحتكاكي (Friction Pressure Loss) أثناء الضخ بمعدلات عالية للتغلب على ضغط التكوين.
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin: 1rem 0; font-family: monospace; text-align: center; color: #065f46;">
BHP = Hydrostatic + Friction Losses (AFP)
</div>
<p style="line-height: 1.8; color: #1e293b;">يُستخدم في عمليات إطفاء الانفجارات عبر آبار الإغاثة (Relief Wells).</p>
</div>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #2563eb;">
<h3 style="color: #1e40af; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">🔷 2. القتل بعيداً عن القاع (Off-Bottom Kill)</h3>
<p style="line-height: 1.8; margin-bottom: 1rem; color: #1e3a8a;">
يُستخدم عندما لا تصل سلسلة الحفر لقاع البئر. التحدي: عدم القدرة على قراءة SIDPP الحقيقي!
</p>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2; color: #1e3a8a;">
<li>استخدام Volumetric Method حتى يصل الغاز للسلسلة</li>
<li>محاولة إنزال السلسلة للقاع إذا كان آمناً (مع Stripping)</li>
</ul>
</div>

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #f59e0b;">
<h3 style="color: #92400e; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">🔷 3. التجريد والدفع (Stripping & Snubbing)</h3>
<p style="line-height: 1.8; margin-bottom: 1rem; color: #78350f;">تقنيات لإنزال أو سحب الأنابيب في بئر تحت الضغط:</p>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2; color: #78350f;">
<li><strong>Stripping:</strong> وزن السلسلة أكبر من قوة الضغط الصاعدة - تنزل بوزنها</li>
<li><strong>Snubbing:</strong> وزن السلسلة أقل - نحتاج قوة خارجية لدفعها</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2; color: #581c87;">
<li><strong>Dynamic Kill:</strong> استخدام الاحتكاك للسيطرة على التدفق العالي</li>
<li><strong>Off-Bottom Kill:</strong> قتل البئر بدون السلسلة في القاع</li>
<li><strong>Stripping vs Snubbing:</strong> الفرق في وزن السلسلة مقابل الضغط</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Dynamic Kill', definition: 'استخدام ضغط الاحتكاك من الضخ العالي للسيطرة على التدفق' },
            { term: 'Off-Bottom Kill', definition: 'قتل البئر عندما لا تكون سلسلة الحفر في قاع البئر' },
            { term: 'Stripping', definition: 'إنزال الأنابيب في بئر تحت الضغط عندما يكون وزن السلسلة أكبر من القوة الصاعدة' },
            { term: 'Snubbing', definition: 'دفع الأنابيب للأسفل ضد الضغط باستخدام وحدة خارجية' },
            { term: 'AFP', definition: 'Annular Friction Pressure - ضغط الاحتكاك في الفتحة الحلقية' },
          ],
          practiceQuestion: {
            question: 'ما الفرق الأساسي بين Stripping و Snubbing؟',
            options: [
              'Stripping للآبار البحرية فقط',
              'Snubbing يتطلب قوة خارجية لدفع الأنابيب ضد الضغط',
              'Stripping أسرع دائماً',
              'لا يوجد فرق'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Advanced Kill Techniques: Dynamic Kill, Off-Bottom Kill & Stripping',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Kill Techniques for Exceptional Situations</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
In complex situations, conventional methods are insufficient. We need specialized techniques based on dynamic principles.
</p>

<div style="background: linear-gradient(135deg, #05966915, #05966910); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #059669;">
<h3 style="color: #059669; font-size: 1.3rem; font-weight: bold; margin-bottom: 1rem;">🔥 1. Dynamic Kill</h3>
<p style="line-height: 1.8; margin-bottom: 1rem; color: #1e293b;">
Uses Friction Pressure Loss during high-rate pumping to overcome formation pressure.
</p>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin: 1rem 0; font-family: monospace; text-align: center; color: #065f46;">
BHP = Hydrostatic + Friction Losses (AFP)
</div>
<p style="line-height: 1.8; color: #1e293b;">Used in blowout killing operations via Relief Wells.</p>
</div>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #2563eb;">
<h3 style="color: #1e40af; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">🔷 2. Off-Bottom Kill</h3>
<p style="line-height: 1.8; margin-bottom: 1rem; color: #1e3a8a;">
Used when drillstring doesn't reach bottom. Challenge: cannot read true SIDPP!
</p>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2; color: #1e3a8a;">
<li>Use Volumetric Method until gas reaches the string</li>
<li>Attempt to run string to bottom if safe (with Stripping)</li>
</ul>
</div>

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid #f59e0b;">
<h3 style="color: #92400e; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">🔷 3. Stripping & Snubbing</h3>
<p style="line-height: 1.8; margin-bottom: 1rem; color: #78350f;">Techniques for running pipe in a pressurized well:</p>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2; color: #78350f;">
<li><strong>Stripping:</strong> String weight > upward pressure force - runs by its weight</li>
<li><strong>Snubbing:</strong> String weight < pressure - needs external force</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2; color: #581c87;">
<li><strong>Dynamic Kill:</strong> Using friction to control high-rate flow</li>
<li><strong>Off-Bottom Kill:</strong> Killing well without string at bottom</li>
<li><strong>Stripping vs Snubbing:</strong> Difference in string weight vs pressure</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Dynamic Kill', definition: 'Using high-rate pumping friction pressure to control flow' },
            { term: 'Off-Bottom Kill', definition: 'Killing well when drillstring is not at bottom' },
            { term: 'Stripping', definition: 'Running pipe in pressurized well when string weight exceeds upward force' },
            { term: 'Snubbing', definition: 'Forcing pipe down against pressure using external unit' },
            { term: 'AFP', definition: 'Annular Friction Pressure - friction pressure in the annulus' },
          ],
          practiceQuestion: {
            question: 'What is the fundamental difference between Stripping and Snubbing?',
            options: [
              'Stripping is for offshore wells only',
              'Snubbing requires external force to push pipe against pressure',
              'Stripping is always faster',
              'There is no difference'
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
    {
      day: 6,
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
      day: 7,
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
  ],
};
