import { WeeklyLesson } from '../weeklyContent';

export const managedPressureDrillingLesson: WeeklyLesson = {
  lessonId: 'managed-pressure-drilling',
  days: [
    {
      day: 1,
      type: 'learning',
      content: {
        ar: {
          title: 'الحفر بالضغط المُدار (MPD) - اليوم الأول: النظرية المتقدمة وفيزياء التحكم بالضغط',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">🔷 الأسس الفيزيائية المتقدمة للحفر بالضغط المُدار</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="font-size: 1.25rem; margin-bottom: 1rem;">💡 فهم ديناميكية الضغط في الآبار المعقدة</h3>
<p style="line-height: 1.8;">في آبار HPHT والآبار ذات النوافذ الضيقة، يصبح التحكم بالضغط معادلة متعددة المتغيرات. يجب فهم التفاعل بين الضغط الهيدروستاتيكي، ECD الديناميكي، تأثيرات الحرارة على كثافة الطين، وسلوك الغازات تحت الضغوط العالية.</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 نموذج الضغط الديناميكي الشامل (Comprehensive Dynamic Pressure Model)</h3>
<div style="background: #1e3a5f; color: white; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<p style="font-size: 1.1rem; font-weight: bold; text-align: center; margin-bottom: 1rem;">BHP(t) = P_hydrostatic(T,P) + ΔP_friction(Q,μ,geometry) + SBP + ΔP_surge/swab + ΔP_cuttings</p>
<div style="margin-top: 1rem; font-size: 0.95rem;">
<p>• P_hydrostatic(T,P) = الضغط الهيدروستاتيكي المعدل للحرارة والضغط</p>
<p>• ΔP_friction = فقد الاحتكاك (دالة لمعدل التدفق Q، اللزوجة μ، والهندسة)</p>
<p>• ΔP_surge/swab = تأثيرات حركة الأنابيب</p>
<p>• ΔP_cuttings = تأثير تراكم الفتات على الكثافة الفعالة</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 تأثير الحرارة على كثافة الطين (Thermal Effects on Mud Density)</h3>
<div style="background: #e8f4f8; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<p style="line-height: 1.8; margin-bottom: 1rem;">في آبار HPHT، تتغير كثافة الطين بشكل ملموس مع العمق بسبب:</p>
<div style="background: white; padding: 1rem; border-radius: 8px; border-right: 4px solid #1e3a5f; margin: 0.5rem 0;">
<p style="font-weight: bold;">معادلة تصحيح الكثافة الحرارية:</p>
<p style="font-family: monospace; margin-top: 0.5rem;">ρ(T) = ρ₀ × [1 - β × (T - T₀)]</p>
<p style="font-size: 0.9rem; color: #666; margin-top: 0.5rem;">حيث β = معامل التمدد الحراري (≈ 0.0002-0.0004 /°F للطين المائي)</p>
</div>
<div style="background: #fff3cd; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
<p><strong>⚠️ مثال حرج:</strong> في بئر بعمق 20,000 ft وحرارة قاع 350°F، قد تنخفض كثافة الطين من 14.0 ppg إلى 13.2 ppg عند القاع، مما يُغير الضغط الهيدروستاتيكي بمقدار ~800 psi!</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 تحليل نافذة الضغط المتغيرة مع العمق (Variable Pressure Window Analysis)</h3>
<div style="background: #fef9e7; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<p style="line-height: 1.8; margin-bottom: 1rem;">في الآبار المعقدة، نافذة الضغط ليست ثابتة بل تتغير مع العمق:</p>
<table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
<thead>
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 12px; text-align: right; border: 1px solid #ddd;">العمق (ft)</th>
<th style="padding: 12px; text-align: right; border: 1px solid #ddd;">Pore Pressure (ppg)</th>
<th style="padding: 12px; text-align: right; border: 1px solid #ddd;">Fracture Gradient (ppg)</th>
<th style="padding: 12px; text-align: right; border: 1px solid #ddd;">نافذة الضغط (ppg)</th>
</tr>
</thead>
<tbody>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #ddd;">10,000</td>
<td style="padding: 12px; border: 1px solid #ddd;">10.5</td>
<td style="padding: 12px; border: 1px solid #ddd;">14.2</td>
<td style="padding: 12px; border: 1px solid #ddd; color: #27ae60;">3.7</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;">15,000</td>
<td style="padding: 12px; border: 1px solid #ddd;">13.8</td>
<td style="padding: 12px; border: 1px solid #ddd;">15.1</td>
<td style="padding: 12px; border: 1px solid #ddd; color: #e67e22;">1.3</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #ddd;">18,000</td>
<td style="padding: 12px; border: 1px solid #ddd;">16.2</td>
<td style="padding: 12px; border: 1px solid #ddd;">16.8</td>
<td style="padding: 12px; border: 1px solid #ddd; color: #c0392b;">0.6</td>
</tr>
</tbody>
</table>
<p style="margin-top: 1rem; line-height: 1.8;"><strong>📊 التحليل:</strong> يجب حساب ECD عند كل عمق للتأكد من البقاء ضمن النافذة المتاحة.</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 ديناميكية التحكم بالخنق (Choke Control Dynamics)</h3>
<div style="background: #e8f8f5; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<h4 style="color: #27ae60; margin-bottom: 1rem;">نظام التحكم PID المتقدم:</h4>
<div style="background: white; padding: 1rem; border-radius: 8px; border-right: 4px solid #27ae60; margin: 0.5rem 0;">
<p style="font-family: monospace; font-size: 1rem;">Choke Position = K_p × e(t) + K_i × ∫e(t)dt + K_d × de/dt</p>
<p style="margin-top: 0.5rem; line-height: 1.7;">حيث e(t) = BHP_target - BHP_actual</p>
</div>
<ul style="line-height: 2; padding-right: 1.5rem; margin-top: 1rem;">
<li><strong>K_p (Proportional):</strong> يُحدد سرعة الاستجابة الأولية</li>
<li><strong>K_i (Integral):</strong> يُصحح الخطأ المتراكم مع الزمن</li>
<li><strong>K_d (Derivative):</strong> يتنبأ بالتغييرات ويُخفف التذبذبات</li>
</ul>
<div style="background: #d4edda; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
<p><strong>⚙️ ملاحظة:</strong> ضبط معاملات PID الخاطئ يمكن أن يسبب تذبذبات خطيرة في الضغط أو استجابة بطيئة تسمح بحدوث Kick.</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 حساب Surge & Swab في MPD</h3>
<div style="background: #f5e6ff; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<p style="line-height: 1.8; margin-bottom: 1rem;">في MPD، تأثيرات حركة الأنابيب أكثر أهمية لأن النافذة ضيقة:</p>
<div style="background: white; padding: 1rem; border-radius: 8px; border-right: 4px solid #9b59b6; margin: 0.5rem 0;">
<p style="font-weight: bold;">معادلة Surge Pressure (تقريب Burkhardt):</p>
<p style="font-family: monospace; margin-top: 0.5rem;">ΔP_surge = K × ρ × V_pipe² × (D_hole² / (D_hole² - D_pipe²))²</p>
</div>
<div style="background: #fff3cd; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
<p><strong>💡 استراتيجية MPD:</strong> يُمكن تعويض Surge/Swab عبر تعديل SBP تلقائياً أثناء حركة الأنابيب باستخدام مستشعرات الحركة.</p>
</div>
</div>

<div style="background: linear-gradient(135deg, #c0392b 0%, #e74c3c 100%); color: white; padding: 1rem; margin: 1.5rem 0; border-radius: 8px;">
<h4 style="margin-bottom: 0.5rem;">🚨 تحذير متقدم</h4>
<p style="line-height: 1.7;">في آبار ERD (Extended Reach Drilling)، يكون ECD مختلفاً بشكل كبير بين TVD و MD، وتأثير Cuttings Loading يمكن أن يُضيف 0.5-1.5 ppg على ECD الفعلي!</p>
</div>

</section>`,
          keyTerms: [
            { term: 'Dynamic Pressure Model', definition: 'نموذج شامل يحسب BHP مع جميع المتغيرات الديناميكية' },
            { term: 'Thermal Expansion Coefficient (β)', definition: 'معامل تمدد الطين مع الحرارة، يؤثر على الكثافة الفعلية' },
            { term: 'PID Control System', definition: 'نظام تحكم نسبي-تكاملي-تفاضلي للخنق الآلي' },
            { term: 'Surge/Swab Compensation', definition: 'تعويض تلقائي لتأثيرات حركة الأنابيب على الضغط' },
            { term: 'Cuttings Loading Effect', definition: 'تأثير تراكم الفتات على ECD الفعلي' },
          ],
          practiceQuestion: {
            question: 'في بئر HPHT بعمق 20,000 ft، إذا كانت كثافة الطين السطحية 14.0 ppg ومعامل التمدد الحراري β = 0.0003/°F وفرق الحرارة 250°F، ما هي الكثافة التقريبية عند القاع؟',
            options: [
              '14.5 ppg',
              '13.0 ppg',
              '12.5 ppg',
              '15.0 ppg'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Managed Pressure Drilling (MPD) - Day 1: Advanced Theory and Pressure Control Physics',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">🔷 Advanced Physics of Managed Pressure Drilling</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="font-size: 1.25rem; margin-bottom: 1rem;">💡 Understanding Pressure Dynamics in Complex Wells</h3>
<p style="line-height: 1.8;">In HPHT and narrow window wells, pressure control becomes a multi-variable equation. Understanding the interaction between hydrostatic pressure, dynamic ECD, thermal effects on mud density, and gas behavior under high pressures is essential.</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Comprehensive Dynamic Pressure Model</h3>
<div style="background: #1e3a5f; color: white; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<p style="font-size: 1.1rem; font-weight: bold; text-align: center; margin-bottom: 1rem;">BHP(t) = P_hydrostatic(T,P) + ΔP_friction(Q,μ,geometry) + SBP + ΔP_surge/swab + ΔP_cuttings</p>
<div style="margin-top: 1rem; font-size: 0.95rem;">
<p>• P_hydrostatic(T,P) = Temperature and pressure corrected hydrostatic</p>
<p>• ΔP_friction = Friction loss (function of flow rate Q, viscosity μ, geometry)</p>
<p>• ΔP_surge/swab = Pipe movement effects</p>
<p>• ΔP_cuttings = Effect of cuttings accumulation on effective density</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Thermal Effects on Mud Density</h3>
<div style="background: #e8f4f8; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<div style="background: white; padding: 1rem; border-radius: 8px; border-left: 4px solid #1e3a5f; margin: 0.5rem 0;">
<p style="font-weight: bold;">Thermal Density Correction:</p>
<p style="font-family: monospace; margin-top: 0.5rem;">ρ(T) = ρ₀ × [1 - β × (T - T₀)]</p>
<p style="font-size: 0.9rem; color: #666; margin-top: 0.5rem;">where β = thermal expansion coefficient (≈ 0.0002-0.0004 /°F for water-based mud)</p>
</div>
<div style="background: #fff3cd; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
<p><strong>⚠️ Critical Example:</strong> In a 20,000 ft well with BHT of 350°F, mud density may decrease from 14.0 ppg to 13.2 ppg at bottom, changing hydrostatic pressure by ~800 psi!</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Choke Control Dynamics - Advanced PID System</h3>
<div style="background: #e8f8f5; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<div style="background: white; padding: 1rem; border-radius: 8px; border-left: 4px solid #27ae60; margin: 0.5rem 0;">
<p style="font-family: monospace; font-size: 1rem;">Choke Position = K_p × e(t) + K_i × ∫e(t)dt + K_d × de/dt</p>
<p style="margin-top: 0.5rem;">where e(t) = BHP_target - BHP_actual</p>
</div>
<ul style="line-height: 2; padding-left: 1.5rem; margin-top: 1rem;">
<li><strong>K_p (Proportional):</strong> Determines initial response speed</li>
<li><strong>K_i (Integral):</strong> Corrects accumulated error over time</li>
<li><strong>K_d (Derivative):</strong> Predicts changes and dampens oscillations</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Surge & Swab in MPD</h3>
<div style="background: #f5e6ff; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<div style="background: white; padding: 1rem; border-radius: 8px; border-left: 4px solid #9b59b6; margin: 0.5rem 0;">
<p style="font-weight: bold;">Surge Pressure (Burkhardt approximation):</p>
<p style="font-family: monospace; margin-top: 0.5rem;">ΔP_surge = K × ρ × V_pipe² × (D_hole² / (D_hole² - D_pipe²))²</p>
</div>
</div>

</section>`,
          keyTerms: [
            { term: 'Dynamic Pressure Model', definition: 'Comprehensive model calculating BHP with all dynamic variables' },
            { term: 'Thermal Expansion Coefficient (β)', definition: 'Mud expansion coefficient with temperature' },
            { term: 'PID Control System', definition: 'Proportional-Integral-Derivative control for automated choke' },
            { term: 'Surge/Swab Compensation', definition: 'Automatic compensation for pipe movement pressure effects' },
            { term: 'Cuttings Loading Effect', definition: 'Effect of cuttings accumulation on effective ECD' },
          ],
          practiceQuestion: {
            question: 'In a 20,000 ft HPHT well, if surface mud weight is 14.0 ppg, β = 0.0003/°F, and temperature difference is 250°F, what is the approximate density at bottom?',
            options: [
              '14.5 ppg',
              '13.0 ppg',
              '12.5 ppg',
              '15.0 ppg'
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
          title: 'الحفر بالضغط المُدار - اليوم الثاني: التقنيات المتقدمة وتحليل السيناريوهات المعقدة',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">🔷 التحليل المتقدم لتقنيات MPD المختلفة</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="font-size: 1.25rem; margin-bottom: 1rem;">💡 اختيار التقنية المناسبة - منهجية هندسية</h3>
<p style="line-height: 1.8;">اختيار تقنية MPD الصحيحة يعتمد على تحليل دقيق لظروف البئر، التكلفة، المخاطر، والمعدات المتاحة. القرار الخاطئ قد يكلف ملايين الدولارات ويعرض سلامة العمليات للخطر.</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 1. CBHP المتقدم - نظام التحكم الديناميكي</h3>
<div style="background: #e8f4f8; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<h4 style="color: #1e3a5f; margin-bottom: 1rem;">التحليل الرياضي للتعويض:</h4>
<div style="background: white; padding: 1rem; border-radius: 8px; border-right: 4px solid #1e3a5f; margin: 0.5rem 0;">
<p style="font-weight: bold;">معادلة التعويض الديناميكي:</p>
<p style="font-family: monospace; margin-top: 0.5rem;">SBP(t) = AFP_max - AFP(Q(t)) + ΔP_safety</p>
<p style="font-size: 0.9rem; color: #666; margin-top: 0.5rem;">حيث Q(t) = معدل الضخ الحالي، AFP_max = AFP عند أقصى معدل ضخ</p>
</div>
<h4 style="color: #1e3a5f; margin: 1rem 0 0.5rem;">جدول التعويض المتقدم (Advanced Compensation Schedule):</h4>
<table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
<thead>
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 10px; border: 1px solid #ddd;">SPM</th>
<th style="padding: 10px; border: 1px solid #ddd;">GPM</th>
<th style="padding: 10px; border: 1px solid #ddd;">AFP (psi)</th>
<th style="padding: 10px; border: 1px solid #ddd;">SBP (psi)</th>
<th style="padding: 10px; border: 1px solid #ddd;">BHP (psi)</th>
</tr>
</thead>
<tbody>
<tr style="background: #f8fafc;">
<td style="padding: 10px; border: 1px solid #ddd;">0</td>
<td style="padding: 10px; border: 1px solid #ddd;">0</td>
<td style="padding: 10px; border: 1px solid #ddd;">0</td>
<td style="padding: 10px; border: 1px solid #ddd;">450</td>
<td style="padding: 10px; border: 1px solid #ddd; color: #27ae60;">8,950</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">40</td>
<td style="padding: 10px; border: 1px solid #ddd;">280</td>
<td style="padding: 10px; border: 1px solid #ddd;">150</td>
<td style="padding: 10px; border: 1px solid #ddd;">300</td>
<td style="padding: 10px; border: 1px solid #ddd; color: #27ae60;">8,950</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 10px; border: 1px solid #ddd;">80</td>
<td style="padding: 10px; border: 1px solid #ddd;">560</td>
<td style="padding: 10px; border: 1px solid #ddd;">350</td>
<td style="padding: 10px; border: 1px solid #ddd;">100</td>
<td style="padding: 10px; border: 1px solid #ddd; color: #27ae60;">8,950</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">100</td>
<td style="padding: 10px; border: 1px solid #ddd;">700</td>
<td style="padding: 10px; border: 1px solid #ddd;">450</td>
<td style="padding: 10px; border: 1px solid #ddd;">0</td>
<td style="padding: 10px; border: 1px solid #ddd; color: #27ae60;">8,950</td>
</tr>
</tbody>
</table>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 2. Dual Gradient Drilling (DGD) - التحليل المتقدم</h3>
<div style="background: #f5e6ff; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<h4 style="color: #9b59b6; margin-bottom: 1rem;">حساب الضغط في نظام DGD:</h4>
<div style="background: white; padding: 1rem; border-radius: 8px; border-right: 4px solid #9b59b6; margin: 0.5rem 0;">
<p style="font-weight: bold;">في الحفر التقليدي العميق:</p>
<p style="font-family: monospace; margin-top: 0.5rem;">P_surface = 0.052 × MW × (Water Depth + TVD_below_mudline)</p>
<p style="font-weight: bold; margin-top: 1rem;">في DGD:</p>
<p style="font-family: monospace; margin-top: 0.5rem;">P_surface = 0.052 × ρ_seawater × Water Depth + 0.052 × MW × TVD_below_mudline</p>
</div>
<div style="background: #fff3cd; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
<p><strong>💡 مثال:</strong> في مياه بعمق 8,000 ft وTVD 5,000 ft تحت قاع البحر، باستخدام طين 14 ppg:</p>
<p style="margin-top: 0.5rem;">• الطريقة التقليدية: BHP = 0.052 × 14 × 13,000 = 9,464 psi</p>
<p>• DGD (مع ماء بحر 8.6 ppg): BHP = 0.052 × 8.6 × 8,000 + 0.052 × 14 × 5,000 = 3,578 + 3,640 = 7,218 psi</p>
<p style="color: #c0392b; font-weight: bold; margin-top: 0.5rem;">الفرق = 2,246 psi أقل! هذا يفتح نافذة ضغط أوسع بكثير.</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 3. تقنية HSE-MPD (High-Specification MPD)</h3>
<div style="background: #e8f8f5; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<p style="line-height: 1.8; margin-bottom: 1rem;">هذه تقنية متقدمة تجمع بين MPD وميزات Well Control المتقدمة:</p>
<ul style="line-height: 2; padding-right: 1.5rem;">
<li><strong>RCD عالي الضغط:</strong> يتحمل حتى 10,000 psi (مقابل 5,000 للعادي)</li>
<li><strong>نظام Managed Pressure Kill:</strong> إمكانية تنفيذ عمليات القتل دون فتح البئر</li>
<li><strong>MPD-Enhanced Well Testing:</strong> اختبار الآبار مع MPD نشط</li>
<li><strong>Dynamic Flow Check:</strong> فحص التدفق أثناء الدوران</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 4. Controlled Mud Level (CML) في DGD</h3>
<div style="background: #fef9e7; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<p style="line-height: 1.8; margin-bottom: 1rem;">تقنية CML تستخدم مضخات قاع البحر للتحكم بمستوى الطين في Riser:</p>
<div style="background: white; padding: 1rem; border-radius: 8px; border-right: 4px solid #e67e22; margin: 0.5rem 0;">
<p style="font-weight: bold;">معادلة مستوى الطين:</p>
<p style="font-family: monospace; margin-top: 0.5rem;">P_mudline = P_seawater + ρ_mud × g × h_mud_in_riser</p>
<p style="margin-top: 0.5rem;">حيث h_mud_in_riser = ارتفاع عمود الطين في Riser (يُتحكم به عبر مضخات القاع)</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 مصفوفة اختيار التقنية (Decision Matrix)</h3>
<div style="background: #f8fafc; padding: 1rem; border-radius: 8px; margin: 1rem 0; overflow-x: auto;">
<table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
<thead>
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 10px; border: 1px solid #ddd;">السيناريو</th>
<th style="padding: 10px; border: 1px solid #ddd;">CBHP</th>
<th style="padding: 10px; border: 1px solid #ddd;">MCD</th>
<th style="padding: 10px; border: 1px solid #ddd;">PMCD</th>
<th style="padding: 10px; border: 1px solid #ddd;">DGD</th>
<th style="padding: 10px; border: 1px solid #ddd;">HSE-MPD</th>
</tr>
</thead>
<tbody>
<tr style="background: #f8fafc;">
<td style="padding: 10px; border: 1px solid #ddd;">نافذة ضيقة (0.5-1.5 ppg)</td>
<td style="padding: 10px; border: 1px solid #ddd; text-align: center; color: #27ae60;">✓✓</td>
<td style="padding: 10px; border: 1px solid #ddd; text-align: center;">-</td>
<td style="padding: 10px; border: 1px solid #ddd; text-align: center;">-</td>
<td style="padding: 10px; border: 1px solid #ddd; text-align: center;">-</td>
<td style="padding: 10px; border: 1px solid #ddd; text-align: center; color: #27ae60;">✓✓✓</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">فقدان دورة كامل بدون تدفق</td>
<td style="padding: 10px; border: 1px solid #ddd; text-align: center;">-</td>
<td style="padding: 10px; border: 1px solid #ddd; text-align: center; color: #27ae60;">✓✓✓</td>
<td style="padding: 10px; border: 1px solid #ddd; text-align: center;">-</td>
<td style="padding: 10px; border: 1px solid #ddd; text-align: center;">-</td>
<td style="padding: 10px; border: 1px solid #ddd; text-align: center;">-</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 10px; border: 1px solid #ddd;">فقدان + تدفق غاز</td>
<td style="padding: 10px; border: 1px solid #ddd; text-align: center;">-</td>
<td style="padding: 10px; border: 1px solid #ddd; text-align: center;">-</td>
<td style="padding: 10px; border: 1px solid #ddd; text-align: center; color: #27ae60;">✓✓✓</td>
<td style="padding: 10px; border: 1px solid #ddd; text-align: center;">-</td>
<td style="padding: 10px; border: 1px solid #ddd; text-align: center; color: #27ae60;">✓</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">مياه عميقة (&gt;5000 ft)</td>
<td style="padding: 10px; border: 1px solid #ddd; text-align: center;">-</td>
<td style="padding: 10px; border: 1px solid #ddd; text-align: center;">-</td>
<td style="padding: 10px; border: 1px solid #ddd; text-align: center;">-</td>
<td style="padding: 10px; border: 1px solid #ddd; text-align: center; color: #27ae60;">✓✓✓</td>
<td style="padding: 10px; border: 1px solid #ddd; text-align: center;">-</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 10px; border: 1px solid #ddd;">HPHT (&gt;350°F, &gt;15,000 psi)</td>
<td style="padding: 10px; border: 1px solid #ddd; text-align: center; color: #27ae60;">✓</td>
<td style="padding: 10px; border: 1px solid #ddd; text-align: center;">-</td>
<td style="padding: 10px; border: 1px solid #ddd; text-align: center;">-</td>
<td style="padding: 10px; border: 1px solid #ddd; text-align: center;">-</td>
<td style="padding: 10px; border: 1px solid #ddd; text-align: center; color: #27ae60;">✓✓✓</td>
</tr>
</tbody>
</table>
</div>

<div style="background: linear-gradient(135deg, #c0392b 0%, #e74c3c 100%); color: white; padding: 1rem; margin: 1.5rem 0; border-radius: 8px;">
<h4 style="margin-bottom: 0.5rem;">🚨 تحذير هندسي</h4>
<p style="line-height: 1.7;">اختيار DGD في بئر لا يحتاجه (مياه ضحلة مثلاً) يُضيف تعقيداً وتكلفة غير مبررة. التحليل الاقتصادي الدقيق ضروري قبل اتخاذ القرار.</p>
</div>

</section>`,
          keyTerms: [
            { term: 'Dynamic Compensation', definition: 'تعديل SBP آلياً بناءً على معدل الضخ اللحظي' },
            { term: 'Controlled Mud Level (CML)', definition: 'التحكم بمستوى الطين في Riser باستخدام مضخات قاع البحر' },
            { term: 'HSE-MPD', definition: 'MPD عالي المواصفات يجمع بين التحكم بالضغط وميزات Well Control' },
            { term: 'Decision Matrix', definition: 'مصفوفة قرار لاختيار تقنية MPD المناسبة' },
            { term: 'Dual Gradient Advantage', definition: 'الفرق في الضغط بين DGD والحفر التقليدي في المياه العميقة' },
          ],
          practiceQuestion: {
            question: 'في بئر بحري بعمق مياه 8,000 ft وعمق حقيقي 5,000 ft تحت قاع البحر، إذا كان وزن الطين 14 ppg ووزن ماء البحر 8.6 ppg، كم يوفر نظام DGD من الضغط مقارنة بالحفر التقليدي؟',
            options: [
              '~1,000 psi',
              '~2,250 psi',
              '~3,500 psi',
              '~5,000 psi'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Managed Pressure Drilling - Day 2: Advanced Techniques and Complex Scenario Analysis',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">🔷 Advanced Analysis of MPD Techniques</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="font-size: 1.25rem; margin-bottom: 1rem;">💡 Selecting the Right Technique - Engineering Methodology</h3>
<p style="line-height: 1.8;">Choosing the correct MPD technique depends on careful analysis of well conditions, cost, risks, and available equipment. The wrong decision can cost millions and compromise safety.</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 1. Advanced CBHP - Dynamic Control System</h3>
<div style="background: #e8f4f8; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<h4 style="color: #1e3a5f; margin-bottom: 1rem;">Mathematical Compensation Analysis:</h4>
<div style="background: white; padding: 1rem; border-radius: 8px; border-left: 4px solid #1e3a5f; margin: 0.5rem 0;">
<p style="font-weight: bold;">Dynamic Compensation Equation:</p>
<p style="font-family: monospace; margin-top: 0.5rem;">SBP(t) = AFP_max - AFP(Q(t)) + ΔP_safety</p>
<p style="font-size: 0.9rem; color: #666; margin-top: 0.5rem;">where Q(t) = current pump rate, AFP_max = AFP at maximum pump rate</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 2. Dual Gradient Drilling (DGD) - Advanced Analysis</h3>
<div style="background: #f5e6ff; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<h4 style="color: #9b59b6; margin-bottom: 1rem;">DGD Pressure Calculation:</h4>
<div style="background: white; padding: 1rem; border-radius: 8px; border-left: 4px solid #9b59b6; margin: 0.5rem 0;">
<p style="font-weight: bold;">Conventional Deepwater:</p>
<p style="font-family: monospace; margin-top: 0.5rem;">P = 0.052 × MW × (Water Depth + TVD_below_mudline)</p>
<p style="font-weight: bold; margin-top: 1rem;">DGD:</p>
<p style="font-family: monospace; margin-top: 0.5rem;">P = 0.052 × ρ_seawater × Water Depth + 0.052 × MW × TVD_below_mudline</p>
</div>
<div style="background: #fff3cd; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
<p><strong>💡 Example:</strong> In 8,000 ft water depth with 5,000 ft TVD below mudline, using 14 ppg mud:</p>
<p style="margin-top: 0.5rem;">• Conventional: BHP = 0.052 × 14 × 13,000 = 9,464 psi</p>
<p>• DGD (8.6 ppg seawater): BHP = 3,578 + 3,640 = 7,218 psi</p>
<p style="color: #c0392b; font-weight: bold; margin-top: 0.5rem;">Difference = 2,246 psi less! Opens much wider pressure window.</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 3. HSE-MPD (High-Specification MPD)</h3>
<div style="background: #e8f8f5; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<ul style="line-height: 2; padding-left: 1.5rem;">
<li><strong>High-Pressure RCD:</strong> Rated up to 10,000 psi</li>
<li><strong>Managed Pressure Kill:</strong> Kill operations without opening well</li>
<li><strong>MPD-Enhanced Well Testing:</strong> Testing with active MPD</li>
<li><strong>Dynamic Flow Check:</strong> Flow checks while rotating</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 4. Controlled Mud Level (CML)</h3>
<div style="background: #fef9e7; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<div style="background: white; padding: 1rem; border-radius: 8px; border-left: 4px solid #e67e22; margin: 0.5rem 0;">
<p style="font-weight: bold;">Mud Level Equation:</p>
<p style="font-family: monospace; margin-top: 0.5rem;">P_mudline = P_seawater + ρ_mud × g × h_mud_in_riser</p>
</div>
</div>

</section>`,
          keyTerms: [
            { term: 'Dynamic Compensation', definition: 'Automatic SBP adjustment based on instantaneous pump rate' },
            { term: 'Controlled Mud Level (CML)', definition: 'Control of mud level in riser using seafloor pumps' },
            { term: 'HSE-MPD', definition: 'High-spec MPD combining pressure control with well control features' },
            { term: 'Decision Matrix', definition: 'Matrix for selecting appropriate MPD technique' },
            { term: 'Dual Gradient Advantage', definition: 'Pressure difference between DGD and conventional in deepwater' },
          ],
          practiceQuestion: {
            question: 'In a deepwater well with 8,000 ft water depth and 5,000 ft TVD below mudline, if mud weight is 14 ppg and seawater is 8.6 ppg, how much pressure does DGD save compared to conventional?',
            options: [
              '~1,000 psi',
              '~2,250 psi',
              '~3,500 psi',
              '~5,000 psi'
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
          title: 'الحفر بالضغط المُدار - اليوم الثالث: الهيدروليكا المتقدمة والنمذجة الديناميكية',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">🔷 التحليل الهيدروليكي المتقدم لـ MPD</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="font-size: 1.25rem; margin-bottom: 1rem;">💡 فهم ديناميكيات التدفق في الأنظمة المعقدة</h3>
<p style="line-height: 1.8;">الهيدروليكا المتقدمة في MPD تتطلب فهماً عميقاً لسلوك السوائل غير النيوتونية، تأثيرات الاضطراب، وتفاعل متغيرات متعددة في الوقت الحقيقي.</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 نموذج فقد الضغط الشامل (Comprehensive Pressure Loss Model)</h3>
<div style="background: #e8f4f8; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<h4 style="color: #1e3a5f; margin-bottom: 1rem;">التحليل الطبقي لفقد الضغط:</h4>
<div style="background: #1e3a5f; color: white; padding: 1rem; border-radius: 8px; text-align: center; margin: 1rem 0;">
<p style="font-weight: bold; font-size: 1.1rem;">ΔP_total = ΔP_surface + ΔP_drillstring + ΔP_bit + ΔP_annulus + ΔP_choke</p>
</div>

<div style="background: white; padding: 1rem; border-radius: 8px; border-right: 4px solid #1e3a5f; margin: 1rem 0;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">معادلة Herschel-Bulkley للسوائل غير النيوتونية:</p>
<p style="font-family: monospace; margin-top: 0.5rem;">τ = τ₀ + K × γ̇ⁿ</p>
<p style="font-size: 0.9rem; color: #666; margin-top: 0.5rem;">حيث: τ₀ = Yield Point، K = Consistency Index، n = Flow Behavior Index</p>
</div>

<table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
<thead>
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 12px; text-align: right; border: 1px solid #ddd;">القسم</th>
<th style="padding: 12px; text-align: right; border: 1px solid #ddd;">نوع التدفق</th>
<th style="padding: 12px; text-align: right; border: 1px solid #ddd;">معادلة فقد الضغط</th>
<th style="padding: 12px; text-align: right; border: 1px solid #ddd;">% من الإجمالي</th>
</tr>
</thead>
<tbody>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #ddd;">داخل الأنابيب</td>
<td style="padding: 12px; border: 1px solid #ddd;">Turbulent</td>
<td style="padding: 12px; border: 1px solid #ddd;">Fanning Equation</td>
<td style="padding: 12px; border: 1px solid #ddd;">45-55%</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;">البت (Bit)</td>
<td style="padding: 12px; border: 1px solid #ddd;">Nozzle Flow</td>
<td style="padding: 12px; border: 1px solid #ddd;">ΔP = ρQ²/12,032C²A²</td>
<td style="padding: 12px; border: 1px solid #ddd;">30-40%</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #ddd;">الحلقي (Annulus)</td>
<td style="padding: 12px; border: 1px solid #ddd;">Laminar/Transitional</td>
<td style="padding: 12px; border: 1px solid #ddd;">Power Law Model</td>
<td style="padding: 12px; border: 1px solid #ddd;">15-25%</td>
</tr>
</tbody>
</table>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 حساب Reynolds Number المعدل للسوائل غير النيوتونية</h3>
<div style="background: #fef9e7; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<div style="background: white; padding: 1rem; border-radius: 8px; border-right: 4px solid #e67e22; margin: 0.5rem 0;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">Generalized Reynolds Number (للتدفق في الأنابيب):</p>
<p style="font-family: monospace; margin-top: 0.5rem; font-size: 1rem;">Re_g = (ρ × V^(2-n) × D^n) / (K × 8^(n-1) × ((3n+1)/4n)^n)</p>
</div>
<div style="background: #fff3cd; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
<p><strong>⚠️ نقطة حرجة:</strong> عندما n < 1 (Shear Thinning)، يقل Re_g مما يعني تأخر الانتقال للتدفق المضطرب. هذا يؤثر مباشرة على حسابات فقد الضغط!</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 تحليل Bit Hydraulics المتقدم</h3>
<div style="background: #e8f8f5; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<h4 style="color: #27ae60; margin-bottom: 1rem;">تحسين HSI و Impact Force:</h4>

<div style="display: grid; gap: 1rem; margin: 1rem 0;">
<div style="background: white; padding: 1rem; border-radius: 8px; border-right: 4px solid #27ae60;">
<p style="font-weight: bold;">Hydraulic Horsepower per Square Inch (HSI):</p>
<p style="font-family: monospace; margin-top: 0.5rem;">HSI = (Q × ΔP_bit) / (1714 × A_bit)</p>
<p style="font-size: 0.9rem; color: #666; margin-top: 0.5rem;">القيمة المثالية: 2.5-5.0 hp/in²</p>
</div>

<div style="background: white; padding: 1rem; border-radius: 8px; border-right: 4px solid #27ae60;">
<p style="font-weight: bold;">Jet Impact Force:</p>
<p style="font-family: monospace; margin-top: 0.5rem;">F_j = 0.01823 × C_d × Q × √(ρ × ΔP_bit)</p>
<p style="font-size: 0.9rem; color: #666; margin-top: 0.5rem;">القيمة المستهدفة: 1,000-1,500 lbf</p>
</div>

<div style="background: white; padding: 1rem; border-radius: 8px; border-right: 4px solid #27ae60;">
<p style="font-weight: bold;">Nozzle Velocity:</p>
<p style="font-family: monospace; margin-top: 0.5rem;">V_n = Q / (3.117 × A_n)</p>
<p style="font-size: 0.9rem; color: #666; margin-top: 0.5rem;">السرعة المثالية: 250-450 ft/s</p>
</div>
</div>

<div style="background: #d4edda; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
<p><strong>💡 استراتيجية MPD:</strong> في MPD، يجب موازنة ΔP_bit مع SBP المتاح. زيادة ΔP_bit تعني تقليل المرونة في التحكم بالضغط السطحي.</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 نمذجة ECD الديناميكية في الوقت الحقيقي</h3>
<div style="background: #f5e6ff; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<h4 style="color: #9b59b6; margin-bottom: 1rem;">العوامل المؤثرة على ECD الحقيقي:</h4>

<div style="background: white; padding: 1rem; border-radius: 8px; border-right: 4px solid #9b59b6; margin: 0.5rem 0;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">ECD الشامل (مع جميع التصحيحات):</p>
<p style="font-family: monospace; margin-top: 0.5rem;">ECD_real = MW_eff(T,P) + ΔP_friction/(0.052×TVD) + ΔP_cuttings/(0.052×TVD) + ΔP_rotation/(0.052×TVD)</p>
</div>

<table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
<thead>
<tr style="background: #9b59b6; color: white;">
<th style="padding: 10px; border: 1px solid #ddd;">العامل</th>
<th style="padding: 10px; border: 1px solid #ddd;">التأثير النموذجي</th>
<th style="padding: 10px; border: 1px solid #ddd;">متى يكون حرجاً</th>
</tr>
</thead>
<tbody>
<tr style="background: #f8fafc;">
<td style="padding: 10px; border: 1px solid #ddd;">Cuttings Loading</td>
<td style="padding: 10px; border: 1px solid #ddd;">+0.2 to +0.8 ppg</td>
<td style="padding: 10px; border: 1px solid #ddd;">ROP عالي، تنظيف ضعيف</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">Thermal Effect</td>
<td style="padding: 10px; border: 1px solid #ddd;">-0.3 to -0.8 ppg</td>
<td style="padding: 10px; border: 1px solid #ddd;">آبار HPHT، عمق > 15,000 ft</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 10px; border: 1px solid #ddd;">Drillstring Rotation</td>
<td style="padding: 10px; border: 1px solid #ddd;">+0.1 to +0.3 ppg</td>
<td style="padding: 10px; border: 1px solid #ddd;">RPM > 150، فجوة ضيقة</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">Gelling (Static)</td>
<td style="padding: 10px; border: 1px solid #ddd;">Surge +50-200 psi</td>
<td style="padding: 10px; border: 1px solid #ddd;">بعد التوقف > 10 دقائق</td>
</tr>
</tbody>
</table>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 مثال حسابي متقدم</h3>
<div style="background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%); color: white; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<h4 style="margin-bottom: 1rem;">📊 سيناريو: تحسين هيدروليكا البت في بئر MPD</h4>

<p style="margin-bottom: 1rem;"><strong>المعطيات:</strong></p>
<ul style="line-height: 1.8; padding-right: 1.5rem; margin-bottom: 1rem;">
<li>معدل التدفق Q = 650 gpm</li>
<li>كثافة الطين ρ = 12.5 ppg</li>
<li>قطر البت = 8.5 in</li>
<li>عدد الفوهات = 3 × 14/32" + 2 × 12/32"</li>
<li>SBP المتاح = 0-350 psi</li>
</ul>

<p style="margin-bottom: 0.5rem;"><strong>الحل:</strong></p>
<div style="background: rgba(255,255,255,0.1); padding: 1rem; border-radius: 8px;">
<p style="margin-bottom: 0.5rem;">1. حساب المساحة الإجمالية للفوهات:</p>
<p style="font-family: monospace; margin-bottom: 1rem;">A_n = 3×(14/32)² × π/4 + 2×(12/32)² × π/4 = 0.467 in²</p>

<p style="margin-bottom: 0.5rem;">2. حساب ΔP_bit:</p>
<p style="font-family: monospace; margin-bottom: 1rem;">ΔP_bit = (12.5 × 650²) / (12,032 × 0.95² × 0.467²) = 2,480 psi</p>

<p style="margin-bottom: 0.5rem;">3. حساب HSI:</p>
<p style="font-family: monospace; margin-bottom: 1rem;">HSI = (650 × 2,480) / (1,714 × 56.7) = 16.6 hp/in² ⚠️ (مرتفع جداً!)</p>

<p style="margin-bottom: 0.5rem;">4. التوصية: تكبير الفوهات لتقليل ΔP_bit وزيادة مرونة SBP</p>
</div>
</div>

<div style="background: linear-gradient(135deg, #c0392b 0%, #e74c3c 100%); color: white; padding: 1rem; margin: 1.5rem 0; border-radius: 8px;">
<h4 style="margin-bottom: 0.5rem;">🚨 تحذير: Hydraulic Lockout</h4>
<p style="line-height: 1.7;">إذا كان ΔP_bit + ΔP_system قريباً من الضغط المتاح، تفقد القدرة على تطبيق SBP كافي. هذا يُسمى "Hydraulic Lockout" ويُعتبر فشلاً في تصميم MPD!</p>
</div>

</section>`,
          keyTerms: [
            { term: 'Herschel-Bulkley Model', definition: 'نموذج ريولوجي متقدم للسوائل غير النيوتونية يشمل Yield Point' },
            { term: 'Generalized Reynolds Number', definition: 'رقم رينولدز المعدل للسوائل ذات السلوك غير الخطي' },
            { term: 'HSI (Hydraulic Horsepower per Square Inch)', definition: 'القدرة الهيدروليكية لكل بوصة مربعة من البت' },
            { term: 'Hydraulic Lockout', definition: 'حالة فقدان المرونة في التحكم بالضغط بسبب ارتفاع فقد الضغط الهيدروليكي' },
            { term: 'Cuttings Loading Effect', definition: 'زيادة ECD الناتجة عن تراكم الفتات في الحلقي' },
          ],
          practiceQuestion: {
            question: 'إذا كان ΔP_bit = 2,500 psi والضغط الإجمالي المتاح للنظام = 3,000 psi، ما هو الحد الأقصى لـ SBP المتاح؟',
            options: [
              '500 psi',
              '1,000 psi',
              '2,500 psi',
              '3,000 psi'
            ],
            correctAnswer: 0,
          },
        },
        en: {
          title: 'Managed Pressure Drilling - Day 3: Advanced Hydraulics and Dynamic Modeling',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">🔷 Advanced Hydraulic Analysis for MPD</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="font-size: 1.25rem; margin-bottom: 1rem;">💡 Understanding Flow Dynamics in Complex Systems</h3>
<p style="line-height: 1.8;">Advanced hydraulics in MPD requires deep understanding of non-Newtonian fluid behavior, turbulence effects, and real-time multi-variable interactions.</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Comprehensive Pressure Loss Model</h3>
<div style="background: #e8f4f8; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<div style="background: #1e3a5f; color: white; padding: 1rem; border-radius: 8px; text-align: center; margin: 1rem 0;">
<p style="font-weight: bold; font-size: 1.1rem;">ΔP_total = ΔP_surface + ΔP_drillstring + ΔP_bit + ΔP_annulus + ΔP_choke</p>
</div>

<div style="background: white; padding: 1rem; border-radius: 8px; border-left: 4px solid #1e3a5f; margin: 1rem 0;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">Herschel-Bulkley Model for Non-Newtonian Fluids:</p>
<p style="font-family: monospace; margin-top: 0.5rem;">τ = τ₀ + K × γ̇ⁿ</p>
<p style="font-size: 0.9rem; color: #666; margin-top: 0.5rem;">where: τ₀ = Yield Point, K = Consistency Index, n = Flow Behavior Index</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Modified Reynolds Number for Non-Newtonian Fluids</h3>
<div style="background: #fef9e7; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<div style="background: white; padding: 1rem; border-radius: 8px; border-left: 4px solid #e67e22; margin: 0.5rem 0;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">Generalized Reynolds Number (pipe flow):</p>
<p style="font-family: monospace; margin-top: 0.5rem; font-size: 1rem;">Re_g = (ρ × V^(2-n) × D^n) / (K × 8^(n-1) × ((3n+1)/4n)^n)</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Advanced Bit Hydraulics Analysis</h3>
<div style="background: #e8f8f5; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<div style="display: grid; gap: 1rem; margin: 1rem 0;">
<div style="background: white; padding: 1rem; border-radius: 8px; border-left: 4px solid #27ae60;">
<p style="font-weight: bold;">HSI = (Q × ΔP_bit) / (1714 × A_bit)</p>
<p style="font-size: 0.9rem; color: #666; margin-top: 0.5rem;">Target: 2.5-5.0 hp/in²</p>
</div>

<div style="background: white; padding: 1rem; border-radius: 8px; border-left: 4px solid #27ae60;">
<p style="font-weight: bold;">Jet Impact Force: F_j = 0.01823 × C_d × Q × √(ρ × ΔP_bit)</p>
<p style="font-size: 0.9rem; color: #666; margin-top: 0.5rem;">Target: 1,000-1,500 lbf</p>
</div>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Real-Time Dynamic ECD Modeling</h3>
<div style="background: #f5e6ff; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<div style="background: white; padding: 1rem; border-radius: 8px; border-left: 4px solid #9b59b6; margin: 0.5rem 0;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">Comprehensive ECD (all corrections):</p>
<p style="font-family: monospace; margin-top: 0.5rem;">ECD_real = MW_eff(T,P) + ΔP_friction/(0.052×TVD) + ΔP_cuttings/(0.052×TVD) + ΔP_rotation/(0.052×TVD)</p>
</div>
</div>

<div style="background: linear-gradient(135deg, #c0392b 0%, #e74c3c 100%); color: white; padding: 1rem; margin: 1.5rem 0; border-radius: 8px;">
<h4 style="margin-bottom: 0.5rem;">🚨 Warning: Hydraulic Lockout</h4>
<p style="line-height: 1.7;">When ΔP_bit + ΔP_system approaches available pressure, you lose ability to apply sufficient SBP. This is called "Hydraulic Lockout" - a critical MPD design failure!</p>
</div>

</section>`,
          keyTerms: [
            { term: 'Herschel-Bulkley Model', definition: 'Advanced rheological model for non-Newtonian fluids including Yield Point' },
            { term: 'Generalized Reynolds Number', definition: 'Modified Reynolds number for non-linear behavior fluids' },
            { term: 'HSI', definition: 'Hydraulic Horsepower per Square Inch of bit area' },
            { term: 'Hydraulic Lockout', definition: 'Loss of pressure control flexibility due to high hydraulic pressure losses' },
            { term: 'Cuttings Loading Effect', definition: 'ECD increase from cuttings accumulation in annulus' },
          ],
          practiceQuestion: {
            question: 'If ΔP_bit = 2,500 psi and total available system pressure = 3,000 psi, what is the maximum available SBP?',
            options: [
              '500 psi',
              '1,000 psi',
              '2,500 psi',
              '3,000 psi'
            ],
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
          title: 'الحفر بالضغط المُدار - اليوم الرابع: سيناريوهات الطوارئ والاستجابة المتقدمة',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">🔷 إدارة الطوارئ في عمليات MPD</h2>

<div style="background: linear-gradient(135deg, #c0392b 0%, #e74c3c 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="font-size: 1.25rem; margin-bottom: 1rem;">⚠️ الطوارئ في MPD أكثر تعقيداً</h3>
<p style="line-height: 1.8;">في MPD، النوافذ الضيقة والأنظمة المعقدة تجعل الاستجابة للطوارئ تحدياً كبيراً. الفشل في الاستجابة الصحيحة قد يحول حادثة بسيطة إلى كارثة.</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 السيناريو الأول: فشل نظام الخنق (Choke Failure)</h3>
<div style="background: #e8f4f8; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<h4 style="color: #c0392b; margin-bottom: 1rem;">🚨 تحليل المخاطر:</h4>
<div style="background: white; padding: 1rem; border-radius: 8px; border-right: 4px solid #c0392b; margin: 0.5rem 0;">
<p style="line-height: 1.8;"><strong>فشل مفتوح (Fail Open):</strong> فقدان كامل لـ SBP → انخفاض BHP تحت Pore Pressure → Kick!</p>
<p style="line-height: 1.8; margin-top: 0.5rem;"><strong>فشل مغلق (Fail Closed):</strong> ارتفاع حاد في الضغط → كسر التكوين → Lost Circulation!</p>
</div>

<h4 style="color: #1e3a5f; margin: 1rem 0 0.5rem;">إجراءات الاستجابة:</h4>
<div style="background: #d4edda; padding: 1rem; border-radius: 8px;">
<ol style="line-height: 2; padding-right: 1.5rem;">
<li><strong>التحويل الفوري:</strong> استخدام صمام الخنق الاحتياطي (Backup Choke)</li>
<li><strong>ضبط معدل الضخ:</strong> تعديل SPM للتعويض عن فقدان SBP</li>
<li><strong>تفعيل RCD Bypass:</strong> إذا لزم الأمر للتحكم في الضغط</li>
<li><strong>زيادة كثافة الطين:</strong> إذا استمر الفشل، التحول لطريقة تقليدية</li>
</ol>
</div>

<div style="background: #1e3a5f; color: white; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">⏱️ وقت الاستجابة الحرج:</p>
<p>فشل الخنق المفتوح: < 30 ثانية للتحويل للاحتياطي</p>
<p>فشل الخنق المغلق: < 15 ثانية لفتح Bypass</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 السيناريو الثاني: فشل RCD أثناء الحفر</h3>
<div style="background: #fef9e7; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<h4 style="color: #e67e22; margin-bottom: 1rem;">علامات فشل RCD:</h4>
<ul style="line-height: 2; padding-right: 1.5rem; margin-bottom: 1rem;">
<li>انخفاض مفاجئ في SBP رغم ثبات فتحة الخنق</li>
<li>ظهور طين من حول RCD (تسريب خارجي)</li>
<li>ارتفاع حرارة RCD بشكل غير طبيعي</li>
<li>اهتزاز غير عادي أثناء الدوران</li>
</ul>

<h4 style="color: #1e3a5f; margin: 1rem 0 0.5rem;">خطة الطوارئ المتكاملة:</h4>
<table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
<thead>
<tr style="background: #e67e22; color: white;">
<th style="padding: 12px; border: 1px solid #ddd;">الخطوة</th>
<th style="padding: 12px; border: 1px solid #ddd;">الإجراء</th>
<th style="padding: 12px; border: 1px solid #ddd;">الوقت المستهدف</th>
</tr>
</thead>
<tbody>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #ddd;">1</td>
<td style="padding: 12px; border: 1px solid #ddd;">إيقاف الدوران فوراً</td>
<td style="padding: 12px; border: 1px solid #ddd;">فوري</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;">2</td>
<td style="padding: 12px; border: 1px solid #ddd;">زيادة كثافة الطين (إذا كان الوقت يسمح)</td>
<td style="padding: 12px; border: 1px solid #ddd;">5-15 دقيقة</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #ddd;">3</td>
<td style="padding: 12px; border: 1px solid #ddd;">سحب الأنابيب لموقع آمن فوق RCD</td>
<td style="padding: 12px; border: 1px solid #ddd;">حسب العمق</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;">4</td>
<td style="padding: 12px; border: 1px solid #ddd;">تركيب Annular Preventer واستبدال RCD</td>
<td style="padding: 12px; border: 1px solid #ddd;">2-4 ساعات</td>
</tr>
</tbody>
</table>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 السيناريو الثالث: Kick أثناء عملية MPD</h3>
<div style="background: #e8f8f5; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<h4 style="color: #27ae60; margin-bottom: 1rem;">الفرق بين Kick Detection التقليدي و MPD:</h4>

<div style="display: grid; gap: 1rem; margin: 1rem 0;">
<div style="background: white; padding: 1rem; border-radius: 8px; border-right: 4px solid #27ae60;">
<p style="font-weight: bold;">التقليدي:</p>
<p style="margin-top: 0.5rem; line-height: 1.7;">زيادة حجم الحفرة، زيادة معدل العائد، انخفاض ضغط المضخات</p>
</div>
<div style="background: white; padding: 1rem; border-radius: 8px; border-right: 4px solid #27ae60;">
<p style="font-weight: bold;">MPD:</p>
<p style="margin-top: 0.5rem; line-height: 1.7;">زيادة في Casing Pressure مع ثبات Choke Position، تغير في معدل الخنق (Choke Flow Rate)، PWD يُظهر زيادة BHP غير متوقعة</p>
</div>
</div>

<div style="background: #1e3a5f; color: white; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
<h4 style="margin-bottom: 0.5rem;">إجراء MPD Influx Management Envelope (IME):</h4>
<ol style="line-height: 2; padding-right: 1.5rem;">
<li>لا تُغلق البئر! استخدم زيادة SBP للتحكم</li>
<li>زيادة SBP بمقدار 100-200 psi فوراً</li>
<li>مراقبة استجابة الضغط والتدفق</li>
<li>تدوير Influx للخارج تحت ضغط محكوم</li>
<li>التحول لـ Conventional Kill إذا تجاوز حجم Kick الحدود</li>
</ol>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 السيناريو الرابع: فقدان الكهرباء الكامل</h3>
<div style="background: #f5e6ff; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<h4 style="color: #9b59b6; margin-bottom: 1rem;">التحليل:</h4>
<p style="line-height: 1.8; margin-bottom: 1rem;">فقدان الكهرباء يعني فقدان:</p>
<ul style="line-height: 2; padding-right: 1.5rem;">
<li>التحكم الآلي بالخنق</li>
<li>مراقبة الضغط والتدفق</li>
<li>مضخات الطين الرئيسية</li>
<li>أنظمة الإنذار والتسجيل</li>
</ul>

<div style="background: white; padding: 1rem; border-radius: 8px; border-right: 4px solid #9b59b6; margin: 1rem 0;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">إجراء الطوارئ المعتمد:</p>
<ol style="line-height: 2; padding-right: 1.5rem;">
<li><strong>خلال 0-30 ثانية:</strong> التحويل للتحكم اليدوي بالخنق (UPS يُغطي هذه الفترة)</li>
<li><strong>خلال 30 ثانية - 2 دقيقة:</strong> تشغيل مولد الطوارئ</li>
<li><strong>إذا فشل المولد:</strong> فتح الخنق يدوياً + مراقبة بصرية للتدفق</li>
<li><strong>الحل النهائي:</strong> إغلاق BOP وإجراء Conventional Shut-in</li>
</ol>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 شجرة القرار للطوارئ (Emergency Decision Tree)</h3>
<div style="background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%); color: white; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<div style="text-align: center;">
<p style="font-size: 1.1rem; font-weight: bold; margin-bottom: 1rem;">🔍 هل الضغط تحت السيطرة؟</p>
<div style="display: flex; justify-content: center; gap: 2rem; flex-wrap: wrap;">
<div style="background: rgba(39, 174, 96, 0.3); padding: 1rem; border-radius: 8px; min-width: 200px;">
<p style="font-weight: bold; color: #2ecc71;">نعم ✓</p>
<p style="font-size: 0.9rem; margin-top: 0.5rem;">→ استمر في MPD Mode</p>
<p style="font-size: 0.9rem;">→ أصلح المشكلة</p>
<p style="font-size: 0.9rem;">→ وثّق الحادثة</p>
</div>
<div style="background: rgba(231, 76, 60, 0.3); padding: 1rem; border-radius: 8px; min-width: 200px;">
<p style="font-weight: bold; color: #e74c3c;">لا ✗</p>
<p style="font-size: 0.9rem; margin-top: 0.5rem;">→ هل يمكن استعادة السيطرة؟</p>
<p style="font-size: 0.9rem;">→ نعم: زيادة SBP/كثافة الطين</p>
<p style="font-size: 0.9rem;">→ لا: Conventional Shut-in</p>
</div>
</div>
</div>
</div>

<div style="background: #fff3cd; border-right: 4px solid #f39c12; padding: 1rem; margin: 1.5rem 0; border-radius: 8px;">
<h4 style="color: #856404; margin-bottom: 0.5rem;">📋 قاعدة ذهبية</h4>
<p style="line-height: 1.7;">في أي طوارئ MPD: إذا شككت في قدرتك على التحكم، تحوّل فوراً للطريقة التقليدية (Conventional Well Control). السلامة أولاً!</p>
</div>

</section>`,
          keyTerms: [
            { term: 'Fail Open/Closed', definition: 'أوضاع فشل صمام الخنق - مفتوح أو مغلق' },
            { term: 'IME (Influx Management Envelope)', definition: 'إطار إدارة الدخول في MPD بدون إغلاق البئر' },
            { term: 'Emergency Decision Tree', definition: 'شجرة قرار منهجية للتعامل مع حالات الطوارئ' },
            { term: 'RCD Bypass', definition: 'مسار تجاوز RCD للتحكم في الضغط أثناء الطوارئ' },
            { term: 'Conventional Shut-in', definition: 'إجراء الإغلاق التقليدي للبئر عند فشل MPD' },
          ],
          practiceQuestion: {
            question: 'عند فشل صمام الخنق في وضع مفتوح (Fail Open)، ما هو الخطر الرئيسي؟',
            options: [
              'كسر التكوين (Formation Fracture)',
              'فقدان الدورة (Lost Circulation)',
              'دخول التكوين (Kick)',
              'تآكل الأنابيب (Pipe Corrosion)'
            ],
            correctAnswer: 2,
          },
        },
        en: {
          title: 'Managed Pressure Drilling - Day 4: Emergency Scenarios and Advanced Response',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">🔷 Emergency Management in MPD Operations</h2>

<div style="background: linear-gradient(135deg, #c0392b 0%, #e74c3c 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="font-size: 1.25rem; margin-bottom: 1rem;">⚠️ MPD Emergencies Are More Complex</h3>
<p style="line-height: 1.8;">In MPD, narrow windows and complex systems make emergency response a significant challenge. Failure to respond correctly can turn a minor incident into a disaster.</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Scenario 1: Choke System Failure</h3>
<div style="background: #e8f4f8; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<h4 style="color: #c0392b; margin-bottom: 1rem;">🚨 Risk Analysis:</h4>
<div style="background: white; padding: 1rem; border-radius: 8px; border-left: 4px solid #c0392b; margin: 0.5rem 0;">
<p style="line-height: 1.8;"><strong>Fail Open:</strong> Complete SBP loss → BHP drops below Pore Pressure → Kick!</p>
<p style="line-height: 1.8; margin-top: 0.5rem;"><strong>Fail Closed:</strong> Sharp pressure increase → Formation fracture → Lost Circulation!</p>
</div>

<div style="background: #d4edda; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
<h4 style="margin-bottom: 0.5rem;">Response Procedures:</h4>
<ol style="line-height: 2; padding-left: 1.5rem;">
<li>Immediate switch to backup choke</li>
<li>Adjust pump rate to compensate for SBP loss</li>
<li>Activate RCD bypass if necessary</li>
<li>Increase mud weight if failure persists</li>
</ol>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Scenario 2: RCD Failure During Drilling</h3>
<div style="background: #fef9e7; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<h4 style="color: #e67e22; margin-bottom: 1rem;">RCD Failure Signs:</h4>
<ul style="line-height: 2; padding-left: 1.5rem;">
<li>Sudden SBP drop despite constant choke position</li>
<li>Mud appearing around RCD (external leak)</li>
<li>Abnormal RCD temperature rise</li>
<li>Unusual vibration during rotation</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Scenario 3: Kick During MPD Operations</h3>
<div style="background: #e8f8f5; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<div style="background: #1e3a5f; color: white; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
<h4 style="margin-bottom: 0.5rem;">MPD Influx Management Envelope (IME):</h4>
<ol style="line-height: 2; padding-left: 1.5rem;">
<li>DO NOT shut in! Use SBP increase for control</li>
<li>Increase SBP by 100-200 psi immediately</li>
<li>Monitor pressure and flow response</li>
<li>Circulate influx out under controlled pressure</li>
<li>Switch to conventional kill if kick exceeds limits</li>
</ol>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Scenario 4: Complete Power Loss</h3>
<div style="background: #f5e6ff; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<div style="background: white; padding: 1rem; border-radius: 8px; border-left: 4px solid #9b59b6; margin: 1rem 0;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">Emergency Procedure:</p>
<ol style="line-height: 2; padding-left: 1.5rem;">
<li><strong>0-30 seconds:</strong> Switch to manual choke control (UPS covers this)</li>
<li><strong>30 sec - 2 min:</strong> Start emergency generator</li>
<li><strong>If generator fails:</strong> Open choke manually + visual flow monitoring</li>
<li><strong>Final solution:</strong> Close BOP and perform conventional shut-in</li>
</ol>
</div>
</div>

<div style="background: #fff3cd; border-left: 4px solid #f39c12; padding: 1rem; margin: 1.5rem 0; border-radius: 8px;">
<h4 style="color: #856404; margin-bottom: 0.5rem;">📋 Golden Rule</h4>
<p style="line-height: 1.7;">In any MPD emergency: If you doubt your ability to control, immediately switch to conventional well control. Safety first!</p>
</div>

</section>`,
          keyTerms: [
            { term: 'Fail Open/Closed', definition: 'Choke valve failure modes - open or closed position' },
            { term: 'IME (Influx Management Envelope)', definition: 'Framework for managing influx in MPD without shutting in' },
            { term: 'Emergency Decision Tree', definition: 'Systematic decision tree for handling emergencies' },
            { term: 'RCD Bypass', definition: 'RCD bypass path for pressure control during emergencies' },
            { term: 'Conventional Shut-in', definition: 'Traditional well shut-in procedure when MPD fails' },
          ],
          practiceQuestion: {
            question: 'When the choke valve fails open, what is the main risk?',
            options: [
              'Formation Fracture',
              'Lost Circulation',
              'Kick',
              'Pipe Corrosion'
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
          title: 'الحفر بالضغط المُدار - اليوم الخامس: التكامل والحسابات المتقدمة والأداء',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">🔷 التحليل المتكامل لعمليات MPD المتقدمة</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="font-size: 1.25rem; margin-bottom: 1rem;">💡 الربط بين جميع المفاهيم</h3>
<p style="line-height: 1.8;">في هذا اليوم، نجمع كل ما تعلمناه: الهيدروليكا، سيناريوهات الطوارئ، والتقنيات المختلفة في إطار عملي متكامل مع حسابات معقدة.</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 نموذج الضغط الشامل المتكامل</h3>
<div style="background: #e8f4f8; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<div style="background: #1e3a5f; color: white; padding: 1rem; border-radius: 8px; text-align: center; margin: 1rem 0;">
<p style="font-weight: bold; font-size: 1.1rem;">BHP_dynamic(t) = ρ(T,P,c) × g × TVD + ΔP_ann(Q,μ,geometry) + SBP(t) + ΔP_surge/swab(V_pipe) + ΔP_acceleration</p>
</div>

<h4 style="color: #1e3a5f; margin: 1rem 0 0.5rem;">تفصيل المتغيرات:</h4>
<table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
<thead>
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 10px; border: 1px solid #ddd;">المتغير</th>
<th style="padding: 10px; border: 1px solid #ddd;">الوصف</th>
<th style="padding: 10px; border: 1px solid #ddd;">النطاق النموذجي</th>
</tr>
</thead>
<tbody>
<tr style="background: #f8fafc;">
<td style="padding: 10px; border: 1px solid #ddd;">ρ(T,P,c)</td>
<td style="padding: 10px; border: 1px solid #ddd;">الكثافة المصححة للحرارة والضغط والفتات</td>
<td style="padding: 10px; border: 1px solid #ddd;">±0.5 ppg من السطحية</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">ΔP_ann</td>
<td style="padding: 10px; border: 1px solid #ddd;">فقد الاحتكاك الحلقي</td>
<td style="padding: 10px; border: 1px solid #ddd;">100-500 psi</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 10px; border: 1px solid #ddd;">ΔP_surge/swab</td>
<td style="padding: 10px; border: 1px solid #ddd;">تأثير حركة الأنابيب</td>
<td style="padding: 10px; border: 1px solid #ddd;">±50-300 psi</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">ΔP_acceleration</td>
<td style="padding: 10px; border: 1px solid #ddd;">تأثير تسارع التدفق</td>
<td style="padding: 10px; border: 1px solid #ddd;">10-50 psi</td>
</tr>
</tbody>
</table>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 مثال حسابي شامل ومعقد</h3>
<div style="background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%); color: white; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<h4 style="margin-bottom: 1rem;">📊 سيناريو: تصميم MPD لبئر HPHT معقد</h4>

<p style="margin-bottom: 1rem;"><strong>المعطيات:</strong></p>
<ul style="line-height: 1.8; padding-right: 1.5rem; margin-bottom: 1rem;">
<li>TVD = 18,500 ft | BHT = 380°F</li>
<li>Pore Pressure Gradient = 16.2 ppg EMW</li>
<li>Fracture Gradient = 17.1 ppg EMW</li>
<li>Surface MW = 16.8 ppg | β = 0.00035/°F</li>
<li>Q = 480 gpm | AFP at Q = 280 psi</li>
<li>Cuttings Loading = +0.3 ppg equivalent</li>
</ul>

<p style="margin-bottom: 0.5rem;"><strong>الحل المتكامل:</strong></p>
<div style="background: rgba(255,255,255,0.1); padding: 1rem; border-radius: 8px;">
<p style="margin-bottom: 0.5rem;"><strong>1. تصحيح الكثافة الحرارية:</strong></p>
<p style="font-family: monospace; margin-bottom: 0.5rem;">ΔT = 380 - 80 = 300°F</p>
<p style="font-family: monospace; margin-bottom: 1rem;">ρ_bottom = 16.8 × [1 - 0.00035 × 300] = 16.8 × 0.895 = <strong>15.04 ppg</strong></p>

<p style="margin-bottom: 0.5rem;"><strong>2. الكثافة الفعالة مع الفتات:</strong></p>
<p style="font-family: monospace; margin-bottom: 1rem;">ρ_effective = 15.04 + 0.3 = <strong>15.34 ppg</strong></p>

<p style="margin-bottom: 0.5rem;"><strong>3. الضغط الهيدروستاتيكي (متوسط الكثافة):</strong></p>
<p style="font-family: monospace; margin-bottom: 1rem;">ρ_avg ≈ (16.8 + 15.34)/2 = 16.07 ppg</p>
<p style="font-family: monospace; margin-bottom: 1rem;">P_h = 0.052 × 16.07 × 18,500 = <strong>15,459 psi</strong></p>

<p style="margin-bottom: 0.5rem;"><strong>4. حدود الضغط:</strong></p>
<p style="font-family: monospace; margin-bottom: 0.5rem;">P_pore = 0.052 × 16.2 × 18,500 = <strong>15,584 psi</strong></p>
<p style="font-family: monospace; margin-bottom: 1rem;">P_frac = 0.052 × 17.1 × 18,500 = <strong>16,449 psi</strong></p>

<p style="margin-bottom: 0.5rem;"><strong>5. تحليل النتائج:</strong></p>
<p style="font-family: monospace; margin-bottom: 0.5rem;">BHP أثناء الضخ = 15,459 + 280 = 15,739 psi ✓</p>
<p style="font-family: monospace; margin-bottom: 0.5rem;">BHP عند التوقف = 15,459 psi ⚠️ (أقل من P_pore!)</p>
<p style="font-family: monospace; margin-bottom: 1rem;"><strong>SBP المطلوب = 15,584 - 15,459 + 100 (هامش) = 225 psi</strong></p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 تحليل الحساسية (Sensitivity Analysis)</h3>
<div style="background: #fef9e7; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<p style="line-height: 1.8; margin-bottom: 1rem;">دراسة تأثير تغير المتغيرات على BHP:</p>
<table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
<thead>
<tr style="background: #e67e22; color: white;">
<th style="padding: 10px; border: 1px solid #ddd;">المتغير</th>
<th style="padding: 10px; border: 1px solid #ddd;">التغير</th>
<th style="padding: 10px; border: 1px solid #ddd;">تأثير على BHP</th>
<th style="padding: 10px; border: 1px solid #ddd;">الخطورة</th>
</tr>
</thead>
<tbody>
<tr style="background: #f8fafc;">
<td style="padding: 10px; border: 1px solid #ddd;">MW</td>
<td style="padding: 10px; border: 1px solid #ddd;">+0.1 ppg</td>
<td style="padding: 10px; border: 1px solid #ddd;">+96 psi</td>
<td style="padding: 10px; border: 1px solid #ddd; color: #27ae60;">منخفضة</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">Q (Flow Rate)</td>
<td style="padding: 10px; border: 1px solid #ddd;">+50 gpm</td>
<td style="padding: 10px; border: 1px solid #ddd;">+35 psi AFP</td>
<td style="padding: 10px; border: 1px solid #ddd; color: #27ae60;">منخفضة</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 10px; border: 1px solid #ddd;">Temperature</td>
<td style="padding: 10px; border: 1px solid #ddd;">+50°F</td>
<td style="padding: 10px; border: 1px solid #ddd;">-150 psi</td>
<td style="padding: 10px; border: 1px solid #ddd; color: #e67e22;">متوسطة</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">Cuttings Load</td>
<td style="padding: 10px; border: 1px solid #ddd;">+0.2 ppg</td>
<td style="padding: 10px; border: 1px solid #ddd;">+190 psi</td>
<td style="padding: 10px; border: 1px solid #ddd; color: #c0392b;">عالية</td>
</tr>
</tbody>
</table>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 مصفوفة اتخاذ القرار لاختيار تقنية MPD</h3>
<div style="background: #e8f8f5; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
<thead>
<tr style="background: #27ae60; color: white;">
<th style="padding: 10px; border: 1px solid #ddd;">ظروف البئر</th>
<th style="padding: 10px; border: 1px solid #ddd;">التقنية المقترحة</th>
<th style="padding: 10px; border: 1px solid #ddd;">المبرر</th>
</tr>
</thead>
<tbody>
<tr style="background: #f8fafc;">
<td style="padding: 10px; border: 1px solid #ddd;">نافذة ضيقة (< 0.5 ppg)</td>
<td style="padding: 10px; border: 1px solid #ddd;">CBHP + PWD</td>
<td style="padding: 10px; border: 1px solid #ddd;">تحكم دقيق بالضغط في الوقت الحقيقي</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">Depleted Zone + HP Zone</td>
<td style="padding: 10px; border: 1px solid #ddd;">DGD (Dual Gradient)</td>
<td style="padding: 10px; border: 1px solid #ddd;">محاكاة تدرج ضغط متعدد</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 10px; border: 1px solid #ddd;">Lost Circulation متكرر</td>
<td style="padding: 10px; border: 1px solid #ddd;">CML + Active SBP</td>
<td style="padding: 10px; border: 1px solid #ddd;">تقليل ECD أثناء الضخ</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">آبار بحرية عميقة</td>
<td style="padding: 10px; border: 1px solid #ddd;">Riser Dilution + MPD</td>
<td style="padding: 10px; border: 1px solid #ddd;">معالجة ضغط عمود الماء</td>
</tr>
</tbody>
</table>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 مؤشرات الأداء الرئيسية المتقدمة (Advanced KPIs)</h3>
<div style="background: #f5e6ff; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
<thead>
<tr style="background: #9b59b6; color: white;">
<th style="padding: 10px; border: 1px solid #ddd;">المؤشر</th>
<th style="padding: 10px; border: 1px solid #ddd;">الهدف</th>
<th style="padding: 10px; border: 1px solid #ddd;">علامة الخطر</th>
<th style="padding: 10px; border: 1px solid #ddd;">الإجراء</th>
</tr>
</thead>
<tbody>
<tr style="background: #f8fafc;">
<td style="padding: 10px; border: 1px solid #ddd;">BHP Stability (σ)</td>
<td style="padding: 10px; border: 1px solid #ddd;">< 25 psi</td>
<td style="padding: 10px; border: 1px solid #ddd;">> 50 psi</td>
<td style="padding: 10px; border: 1px solid #ddd;">ضبط PID gains</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">Connection Time</td>
<td style="padding: 10px; border: 1px solid #ddd;">< 4 min</td>
<td style="padding: 10px; border: 1px solid #ddd;">> 8 min</td>
<td style="padding: 10px; border: 1px solid #ddd;">مراجعة الإجراءات</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 10px; border: 1px solid #ddd;">NPT due to MPD</td>
<td style="padding: 10px; border: 1px solid #ddd;">< 2%</td>
<td style="padding: 10px; border: 1px solid #ddd;">> 5%</td>
<td style="padding: 10px; border: 1px solid #ddd;">صيانة وقائية</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">Kick Detection Time</td>
<td style="padding: 10px; border: 1px solid #ddd;">< 30 sec</td>
<td style="padding: 10px; border: 1px solid #ddd;">> 60 sec</td>
<td style="padding: 10px; border: 1px solid #ddd;">معايرة المستشعرات</td>
</tr>
</tbody>
</table>
</div>

<div style="background: linear-gradient(135deg, #27ae60 0%, #2ecc71 100%); color: white; padding: 1rem; margin: 1.5rem 0; border-radius: 8px;">
<h4 style="margin-bottom: 0.5rem;">✅ ملخص التكامل</h4>
<p style="line-height: 1.7;">نجاح عمليات MPD يعتمد على: (1) فهم الهيدروليكا المتقدمة، (2) الاستعداد لجميع سيناريوهات الطوارئ، (3) اختيار التقنية المناسبة، (4) المراقبة المستمرة لمؤشرات الأداء.</p>
</div>

</section>`,
          keyTerms: [
            { term: 'Sensitivity Analysis', definition: 'تحليل تأثير تغير كل متغير على النتيجة النهائية' },
            { term: 'Decision Matrix', definition: 'مصفوفة منهجية لاختيار التقنية المناسبة' },
            { term: 'NPT (Non-Productive Time)', definition: 'الوقت الضائع غير المنتج بسبب مشاكل المعدات' },
            { term: 'PID Gains', definition: 'معاملات نظام التحكم (Proportional, Integral, Derivative)' },
          ],
          practiceQuestion: {
            question: 'في بئر HPHT، إذا كانت كثافة الطين السطحية 16.5 ppg وانخفضت عند القاع بسبب الحرارة إلى 15.5 ppg، ما هو تأثير ذلك على BHP مقارنة بالحساب التقليدي (عمق 18,000 ft)؟',
            options: [
              'أعلى بـ 468 psi',
              'أقل بـ 468 psi',
              'أقل بـ 936 psi',
              'لا يوجد تأثير'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Managed Pressure Drilling - Day 5: Integration, Advanced Calculations and Performance',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">🔷 Integrated Analysis of Advanced MPD Operations</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="font-size: 1.25rem; margin-bottom: 1rem;">💡 Connecting All Concepts</h3>
<p style="line-height: 1.8;">In this day, we integrate everything learned: hydraulics, emergency scenarios, and different techniques in a practical framework with complex calculations.</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Comprehensive Integrated Pressure Model</h3>
<div style="background: #e8f4f8; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<div style="background: #1e3a5f; color: white; padding: 1rem; border-radius: 8px; text-align: center; margin: 1rem 0;">
<p style="font-weight: bold; font-size: 1.1rem;">BHP_dynamic(t) = ρ(T,P,c) × g × TVD + ΔP_ann(Q,μ,geometry) + SBP(t) + ΔP_surge/swab(V_pipe) + ΔP_acceleration</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Complex Calculation Example</h3>
<div style="background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%); color: white; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<h4 style="margin-bottom: 1rem;">📊 Scenario: MPD Design for Complex HPHT Well</h4>
<p style="margin-bottom: 1rem;">Given: TVD = 18,500 ft, BHT = 380°F, PP = 16.2 ppg, FG = 17.1 ppg, Surface MW = 16.8 ppg, β = 0.00035/°F</p>
<p style="margin-bottom: 1rem;">Solution involves thermal correction, cuttings loading, and SBP calculation to maintain BHP within the narrow pressure window.</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 MPD Technique Decision Matrix</h3>
<div style="background: #e8f8f5; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<p style="line-height: 1.8;">Selecting the right MPD technique based on well conditions: CBHP for narrow windows, DGD for multiple pressure regimes, CML for lost circulation issues.</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Advanced KPIs</h3>
<div style="background: #f5e6ff; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<p style="line-height: 1.8;">Key metrics: BHP Stability (< 25 psi), Connection Time (< 4 min), NPT due to MPD (< 2%), Kick Detection Time (< 30 sec)</p>
</div>

</section>`,
          keyTerms: [
            { term: 'Sensitivity Analysis', definition: 'Analysis of how each variable change affects the final result' },
            { term: 'Decision Matrix', definition: 'Systematic matrix for selecting appropriate technique' },
            { term: 'NPT', definition: 'Non-Productive Time due to equipment issues' },
            { term: 'PID Gains', definition: 'Control system parameters (Proportional, Integral, Derivative)' },
          ],
          practiceQuestion: {
            question: 'In an HPHT well, if surface MW is 16.5 ppg and decreases to 15.5 ppg at bottom due to temperature, what is the BHP effect compared to conventional calculation (18,000 ft depth)?',
            options: [
              'Higher by 468 psi',
              'Lower by 468 psi',
              'Lower by 936 psi',
              'No effect'
            ],
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
          title: 'اختبار الحفر بالضغط المُدار',
          explanation: 'اختبر معلوماتك حول تقنيات ومعدات MPD',
          keyTerms: [],
        },
        en: {
          title: 'Managed Pressure Drilling Quiz',
          explanation: 'Test your knowledge of MPD techniques and equipment',
          keyTerms: [],
        },
      },
      quiz: {
        ar: [
          {
            question: 'ما هو المكون الرئيسي الذي يُميز نظام MPD عن الحفر التقليدي؟',
            options: [
              'المضخة الطينية',
              'جهاز التحكم الدوار (RCD)',
              'رأس الحفر',
              'عمود الحفر'
            ],
            correctAnswer: 1
          },
          {
            question: 'ما هي تقنية CBHP؟',
            options: [
              'تقنية لزيادة سرعة الحفر',
              'تقنية للحفاظ على ضغط قاع البئر ثابتاً',
              'تقنية لتبريد رأس الحفر',
              'تقنية لتنظيف البئر'
            ],
            correctAnswer: 1
          },
          {
            question: 'عند إيقاف المضخات في نظام MPD، ماذا يحدث لـ AFP؟',
            options: [
              'يزداد',
              'يبقى ثابتاً',
              'ينخفض إلى صفر',
              'يتضاعف'
            ],
            correctAnswer: 2
          },
          {
            question: 'أي تقنية MPD تُستخدم في الحفر البحري العميق؟',
            options: [
              'CBHP',
              'MCD',
              'PMCD',
              'Dual Gradient Drilling (DGD)'
            ],
            correctAnswer: 3
          },
          {
            question: 'ما هو عمر حشوة RCD التقريبي؟',
            options: [
              '5-10 ساعات',
              '50-200 ساعة',
              '500-1000 ساعة',
              '5000+ ساعة'
            ],
            correctAnswer: 1
          },
          {
            question: 'ما هي الوظيفة الرئيسية لصمام الخنق الآلي في MPD؟',
            options: [
              'ضخ الطين',
              'التحكم بالضغط السطحي المُطبق',
              'تبريد رأس الحفر',
              'قياس العمق'
            ],
            correctAnswer: 1
          },
          {
            question: 'إذا كان AFP = 150 psi أثناء الضخ، كم يجب أن يكون SBP عند إيقاف المضخات؟',
            options: [
              '0 psi',
              '75 psi',
              '150 psi',
              '300 psi'
            ],
            correctAnswer: 2
          },
          {
            question: 'ما هي "نافذة الضغط الضيقة"؟',
            options: [
              'فتحة في BOP',
              'فرق صغير بين ضغط المسام وضغط الكسر',
              'نوع من صمامات الخنق',
              'جزء من RCD'
            ],
            correctAnswer: 1
          },
          {
            question: 'في تقنية Mud Cap Drilling، أين يذهب سائل الحفر؟',
            options: [
              'يعود للسطح',
              'يبقى في الحلقي',
              'يذهب مباشرة للتكوين',
              'يُعاد تدويره'
            ],
            correctAnswer: 2
          },
          {
            question: 'ما هي ميزة MPD الرئيسية عند حدوث Kick؟',
            options: [
              'لا حاجة لأي إجراء',
              'القدرة على زيادة الضغط فوراً دون تغيير الطين',
              'إغلاق البئر تلقائياً',
              'تقليل العمق تلقائياً'
            ],
            correctAnswer: 1
          }
        ],
        en: [
          {
            question: 'What is the main component that distinguishes MPD from conventional drilling?',
            options: [
              'Mud pump',
              'Rotating Control Device (RCD)',
              'Drill bit',
              'Drill string'
            ],
            correctAnswer: 1
          },
          {
            question: 'What is CBHP technique?',
            options: [
              'Technique to increase drilling speed',
              'Technique to maintain constant bottom hole pressure',
              'Technique to cool the drill bit',
              'Technique to clean the wellbore'
            ],
            correctAnswer: 1
          },
          {
            question: 'When pumps are stopped in MPD system, what happens to AFP?',
            options: [
              'Increases',
              'Remains constant',
              'Drops to zero',
              'Doubles'
            ],
            correctAnswer: 2
          },
          {
            question: 'Which MPD technique is used in deepwater drilling?',
            options: [
              'CBHP',
              'MCD',
              'PMCD',
              'Dual Gradient Drilling (DGD)'
            ],
            correctAnswer: 3
          },
          {
            question: 'What is the approximate lifespan of an RCD element?',
            options: [
              '5-10 hours',
              '50-200 hours',
              '500-1000 hours',
              '5000+ hours'
            ],
            correctAnswer: 1
          },
          {
            question: 'What is the main function of the automated choke in MPD?',
            options: [
              'Pump mud',
              'Control surface back pressure',
              'Cool the drill bit',
              'Measure depth'
            ],
            correctAnswer: 1
          },
          {
            question: 'If AFP = 150 psi while pumping, what should SBP be when pumps are off?',
            options: [
              '0 psi',
              '75 psi',
              '150 psi',
              '300 psi'
            ],
            correctAnswer: 2
          },
          {
            question: 'What is a "narrow pressure window"?',
            options: [
              'An opening in the BOP',
              'Small difference between pore pressure and fracture pressure',
              'A type of choke valve',
              'Part of the RCD'
            ],
            correctAnswer: 1
          },
          {
            question: 'In Mud Cap Drilling technique, where does the drilling fluid go?',
            options: [
              'Returns to surface',
              'Stays in annulus',
              'Goes directly to formation',
              'Gets recirculated'
            ],
            correctAnswer: 2
          },
          {
            question: 'What is the main MPD advantage during a kick?',
            options: [
              'No action needed',
              'Ability to increase pressure immediately without changing mud',
              'Automatic well shut-in',
              'Automatic depth reduction'
            ],
            correctAnswer: 1
          }
        ]
      }
    },
    {
      day: 7,
      type: 'project',
      content: {
        ar: {
          title: 'مشروع تطبيقي - الحفر بالضغط المُدار',
          explanation: 'طبق ما تعلمته في مشروع عملي',
          keyTerms: [],
        },
        en: {
          title: 'Practical Project - Managed Pressure Drilling',
          explanation: 'Apply what you learned in a practical project',
          keyTerms: [],
        },
      },
      project: {
        ar: {
          title: 'تصميم خطة MPD لبئر بنافذة ضغط ضيقة',
          description: `أنت مهندس حفر تعمل على بئر في حقل ناضج (Depleted Reservoir) حيث:
- العمق المستهدف: 14,000 ft TVD
- ضغط المسام المتوقع: 5,800 psi
- ضغط الكسر: 6,100 psi
- نافذة الضغط: 300 psi فقط!

مطلوب منك تصميم خطة MPD شاملة.`,
          instructions: [
            'احسب وزن الطين الأمثل وECD المتوقع',
            'حدد تقنية MPD المناسبة مع التبرير',
            'أعد جدول تعويض الضغط (SBP vs Pump Rate)',
            'حدد المعدات المطلوبة ومواصفاتها',
            'اكتب إجراءات الاتصال (Connection Procedure)',
            'حدد مؤشرات الأداء الرئيسية (KPIs) للمراقبة'
          ],
          submissionType: 'text',
        },
        en: {
          title: 'Design an MPD Plan for a Narrow Pressure Window Well',
          description: `You are a drilling engineer working on a well in a depleted reservoir where:
- Target depth: 14,000 ft TVD
- Expected pore pressure: 5,800 psi
- Fracture pressure: 6,100 psi
- Pressure window: Only 300 psi!

You are required to design a comprehensive MPD plan.`,
          instructions: [
            'Calculate optimal mud weight and expected ECD',
            'Select appropriate MPD technique with justification',
            'Prepare pressure compensation schedule (SBP vs Pump Rate)',
            'Specify required equipment and specifications',
            'Write connection procedure',
            'Define KPIs for monitoring'
          ],
          submissionType: 'text',
        },
      },
    },
  ],
};
