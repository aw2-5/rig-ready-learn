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
