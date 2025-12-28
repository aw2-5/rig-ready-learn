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
          title: 'الحفر بالضغط المُدار - اليوم الثالث: المعدات والأنظمة',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">🔷 المعدات المتخصصة لنظام MPD</h2>

<p style="margin-bottom: 1.5rem; line-height: 1.8;">نجاح عملية MPD يعتمد على معدات متخصصة عالية الجودة. سنتناول كل مكون بالتفصيل.</p>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 1. جهاز التحكم الدوار (RCD) بالتفصيل</h3>
<div style="background: #e8f4f8; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<h4 style="color: #1e3a5f; margin-bottom: 1rem;">التصميم والمكونات:</h4>
<ul style="line-height: 2; padding-right: 1.5rem;">
<li><strong>الحشوة المطاطية (Stripper Rubber):</strong> تتحمل الدوران والضغط، عمرها 50-200 ساعة حسب الظروف</li>
<li><strong>المحمل الرئيسي (Main Bearing):</strong> يتحمل أحمال تصل 500,000 رطل</li>
<li><strong>نظام التبريد:</strong> يحافظ على حرارة الحشوة ضمن الحدود الآمنة</li>
<li><strong>الإطار الداخلي (Inner Barrel):</strong> يسمح بمرور الأدوات والـ BHA</li>
</ul>

<h4 style="color: #1e3a5f; margin: 1.5rem 0 1rem;">تصنيفات RCD:</h4>
<table style="width: 100%; border-collapse: collapse;">
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 10px; border: 1px solid #ddd;">النوع</th>
<th style="padding: 10px; border: 1px solid #ddd;">ضغط العمل</th>
<th style="padding: 10px; border: 1px solid #ddd;">الاستخدام</th>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 10px; border: 1px solid #ddd;">Active RCD</td>
<td style="padding: 10px; border: 1px solid #ddd;">2,500-5,000 psi</td>
<td style="padding: 10px; border: 1px solid #ddd;">MPD/UBD مع ضغط عالي</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">Passive RCD</td>
<td style="padding: 10px; border: 1px solid #ddd;">500-1,500 psi</td>
<td style="padding: 10px; border: 1px solid #ddd;">MPD أساسي</td>
</tr>
</table>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 2. نظام صمام الخنق الآلي (Automated Choke System)</h3>
<div style="background: #fef9e7; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<h4 style="color: #e67e22; margin-bottom: 1rem;">المكونات الرئيسية:</h4>
<div style="display: grid; gap: 1rem;">
<div style="background: white; padding: 1rem; border-radius: 8px; border-right: 3px solid #e67e22;">
<strong>صمام الخنق المتغير (Variable Choke):</strong>
<p style="margin-top: 0.5rem; line-height: 1.7;">يتحكم بفتحة التدفق بشكل دقيق (0-100%). يستجيب للأوامر الإلكترونية خلال أجزاء من الثانية.</p>
</div>
<div style="background: white; padding: 1rem; border-radius: 8px; border-right: 3px solid #e67e22;">
<strong>وحدة التحكم (Control Unit):</strong>
<p style="margin-top: 0.5rem; line-height: 1.7;">كمبيوتر متخصص يحسب الضغط المطلوب ويُعدل الخنق تلقائياً. يعمل بخوارزميات PID للتحكم الدقيق.</p>
</div>
<div style="background: white; padding: 1rem; border-radius: 8px; border-right: 3px solid #e67e22;">
<strong>مستشعرات الضغط والتدفق:</strong>
<p style="margin-top: 0.5rem; line-height: 1.7;">تقيس الضغط بدقة ±0.1% وتكتشف تغييرات التدفق بحساسية 0.25 bbl/min.</p>
</div>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 3. نظام الفصل (Separation System)</h3>
<div style="background: #e8f8f5; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<p style="line-height: 1.8; margin-bottom: 1rem;">في MPD، نحتاج فاصل مضغوط يعمل تحت ضغط بدلاً من الفاصل الجوي التقليدي.</p>
<h4 style="color: #27ae60; margin: 1rem 0 0.5rem;">مكونات الفاصل المضغوط:</h4>
<ul style="line-height: 2; padding-right: 1.5rem;">
<li>وعاء ضغط مصنف لـ 500-1,500 psi</li>
<li>صمامات تصريف السوائل والغاز</li>
<li>مستشعرات مستوى السائل</li>
<li>نظام إشعال للغازات المنفصلة (Flare System)</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 4. نظام المراقبة والتحكم (SCADA/DCS)</h3>
<div style="background: #f5e6ff; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<h4 style="color: #9b59b6; margin-bottom: 1rem;">الوظائف الرئيسية:</h4>
<ul style="line-height: 2; padding-right: 1.5rem;">
<li><strong>جمع البيانات:</strong> من جميع المستشعرات بشكل لحظي</li>
<li><strong>العرض:</strong> شاشات توضح حالة البئر والضغوط والتدفقات</li>
<li><strong>الإنذارات:</strong> تنبيهات فورية عند تجاوز الحدود المحددة</li>
<li><strong>التسجيل:</strong> حفظ جميع البيانات للتحليل اللاحق</li>
<li><strong>التحكم الآلي:</strong> استجابة تلقائية للمواقف المحددة مسبقاً</li>
</ul>
</div>

<div style="background: #fff3cd; border-right: 4px solid #f39c12; padding: 1rem; margin: 1.5rem 0; border-radius: 8px;">
<h4 style="color: #856404; margin-bottom: 0.5rem;">⚠️ الصيانة الحرجة</h4>
<p style="line-height: 1.7;">حشوات RCD تحتاج فحص كل 8-12 ساعة من العمل المتواصل. صمامات الخنق تحتاج معايرة يومية. أي إهمال قد يؤدي لفشل النظام بالكامل.</p>
</div>

</section>`,
          keyTerms: [
            { term: 'Stripper Rubber', definition: 'الحشوة المطاطية في RCD التي تُغلق حول عمود الحفر' },
            { term: 'PID Control', definition: 'نظام تحكم آلي يستخدم النسبي-التكاملي-التفاضلي' },
            { term: 'Pressurized Separator', definition: 'فاصل يعمل تحت ضغط لفصل السوائل والغازات' },
            { term: 'SCADA', definition: 'نظام التحكم الإشرافي وجمع البيانات' },
          ],
          practiceQuestion: {
            question: 'كم يبلغ عمر حشوة RCD التقريبي قبل الحاجة للاستبدال؟',
            options: [
              '10-20 ساعة',
              '50-200 ساعة',
              '500-1000 ساعة',
              '2000+ ساعة'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Managed Pressure Drilling - Day 3: Equipment and Systems',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">🔷 Specialized MPD Equipment</h2>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 1. Rotating Control Device (RCD) in Detail</h3>
<div style="background: #e8f4f8; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<h4 style="color: #1e3a5f; margin-bottom: 1rem;">Design and Components:</h4>
<ul style="line-height: 2; padding-left: 1.5rem;">
<li><strong>Stripper Rubber:</strong> Handles rotation and pressure, 50-200 hour lifespan</li>
<li><strong>Main Bearing:</strong> Supports loads up to 500,000 lbs</li>
<li><strong>Cooling System:</strong> Maintains rubber temperature within safe limits</li>
<li><strong>Inner Barrel:</strong> Allows tools and BHA passage</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 2. Automated Choke System</h3>
<div style="background: #fef9e7; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<p style="line-height: 1.8;">Variable choke with electronic control, response time in fractions of a second. Control unit uses PID algorithms for precise pressure management.</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 3. Pressurized Separation System</h3>
<div style="background: #e8f8f5; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<p style="line-height: 1.8;">Pressure vessel rated for 500-1,500 psi with liquid/gas discharge valves, level sensors, and flare system for separated gases.</p>
</div>

</section>`,
          keyTerms: [
            { term: 'Stripper Rubber', definition: 'RCD rubber element that seals around drill string' },
            { term: 'PID Control', definition: 'Proportional-Integral-Derivative control system' },
            { term: 'Pressurized Separator', definition: 'Separator operating under pressure' },
            { term: 'SCADA', definition: 'Supervisory Control and Data Acquisition' },
          ],
          practiceQuestion: {
            question: 'What is the approximate lifespan of an RCD stripper rubber before replacement?',
            options: [
              '10-20 hours',
              '50-200 hours',
              '500-1000 hours',
              '2000+ hours'
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
          title: 'الحفر بالضغط المُدار - اليوم الرابع: التخطيط والحسابات',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">🔷 التخطيط لعملية MPD</h2>

<p style="margin-bottom: 1.5rem; line-height: 1.8;">التخطيط الدقيق لعملية MPD يتطلب فهماً عميقاً لظروف البئر والحسابات الهيدروليكية المعقدة.</p>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 1. تحديد نافذة الضغط (Pressure Window)</h3>
<div style="background: #e8f4f8; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<p style="line-height: 1.8; margin-bottom: 1rem;">الخطوة الأولى في التخطيط هي تحديد الحدود الآمنة للضغط:</p>
<div style="background: #1e3a5f; color: white; padding: 1rem; border-radius: 8px; text-align: center; margin: 1rem 0;">
<p style="font-weight: bold;">الحد الأدنى = ضغط المسام (Pore Pressure) + هامش أمان (عادة 100-200 psi)</p>
<p style="margin-top: 0.5rem;">الحد الأعلى = ضغط الكسر (Fracture Pressure) - هامش أمان</p>
</div>
<div style="background: #fff3cd; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
<p><strong>💡 مثال:</strong> إذا كان ضغط المسام = 3,500 psi وضغط الكسر = 3,800 psi، فالنافذة = 300 psi فقط! هذا يتطلب MPD للتحكم الدقيق.</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 2. حساب ECD والضغط المكافئ</h3>
<div style="background: #fef9e7; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<h4 style="color: #e67e22; margin-bottom: 1rem;">معادلات أساسية:</h4>

<div style="background: white; padding: 1rem; border-radius: 8px; margin: 1rem 0; border-right: 3px solid #e67e22;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">الضغط الهيدروستاتيكي (Hydrostatic Pressure):</p>
<p style="font-family: monospace; font-size: 1.1rem;">P_h = 0.052 × MW × TVD</p>
<p style="font-size: 0.9rem; color: #666; margin-top: 0.5rem;">حيث MW = وزن الطين (ppg)، TVD = العمق الحقيقي (ft)</p>
</div>

<div style="background: white; padding: 1rem; border-radius: 8px; margin: 1rem 0; border-right: 3px solid #e67e22;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">كثافة الدورة المكافئة (ECD):</p>
<p style="font-family: monospace; font-size: 1.1rem;">ECD = MW + (AFP / (0.052 × TVD))</p>
<p style="font-size: 0.9rem; color: #666; margin-top: 0.5rem;">حيث AFP = ضغط الاحتكاك الحلقي (psi)</p>
</div>

<div style="background: white; padding: 1rem; border-radius: 8px; margin: 1rem 0; border-right: 3px solid #e67e22;">
<p style="font-weight: bold; margin-bottom: 0.5rem;">الضغط الكلي في قاع البئر (BHP) في MPD:</p>
<p style="font-family: monospace; font-size: 1.1rem;">BHP = P_h + AFP + SBP</p>
<p style="font-size: 0.9rem; color: #666; margin-top: 0.5rem;">حيث SBP = الضغط السطحي المُطبق</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 3. مثال حسابي شامل</h3>
<div style="background: #e8f8f5; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<h4 style="color: #27ae60; margin-bottom: 1rem;">المعطيات:</h4>
<ul style="line-height: 1.8; padding-right: 1.5rem; margin-bottom: 1rem;">
<li>العمق الحقيقي (TVD) = 12,000 ft</li>
<li>وزن الطين (MW) = 10.5 ppg</li>
<li>ضغط الاحتكاك الحلقي (AFP) عند الضخ = 180 psi</li>
<li>ضغط المسام = 6,550 psi</li>
<li>ضغط الكسر = 6,800 psi</li>
</ul>

<h4 style="color: #27ae60; margin-bottom: 0.5rem;">الحل:</h4>
<div style="background: white; padding: 1rem; border-radius: 8px;">
<p style="margin-bottom: 0.5rem;"><strong>1. الضغط الهيدروستاتيكي:</strong></p>
<p style="font-family: monospace; margin-bottom: 1rem;">P_h = 0.052 × 10.5 × 12,000 = 6,552 psi</p>

<p style="margin-bottom: 0.5rem;"><strong>2. BHP أثناء الضخ:</strong></p>
<p style="font-family: monospace; margin-bottom: 1rem;">BHP = 6,552 + 180 = 6,732 psi ✓ (ضمن النافذة)</p>

<p style="margin-bottom: 0.5rem;"><strong>3. عند إيقاف المضخات (بدون SBP):</strong></p>
<p style="font-family: monospace; margin-bottom: 1rem;">BHP = 6,552 psi ✗ (أقل من ضغط المسام!)</p>

<p style="margin-bottom: 0.5rem;"><strong>4. SBP المطلوب عند إيقاف المضخات:</strong></p>
<p style="font-family: monospace;">SBP ≥ 6,550 - 6,552 + هامش أمان = 100 psi على الأقل</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 4. جدول تعويض الضغط (Pressure Compensation Schedule)</h3>
<div style="background: #f5e6ff; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<p style="line-height: 1.8; margin-bottom: 1rem;">يجب إعداد جدول مسبق يوضح SBP المطلوب لكل معدل ضخ:</p>
<table style="width: 100%; border-collapse: collapse;">
<tr style="background: #9b59b6; color: white;">
<th style="padding: 10px; border: 1px solid #ddd;">معدل الضخ (gpm)</th>
<th style="padding: 10px; border: 1px solid #ddd;">AFP (psi)</th>
<th style="padding: 10px; border: 1px solid #ddd;">SBP المطلوب (psi)</th>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 10px; text-align: center; border: 1px solid #ddd;">0 (متوقف)</td>
<td style="padding: 10px; text-align: center; border: 1px solid #ddd;">0</td>
<td style="padding: 10px; text-align: center; border: 1px solid #ddd;">180</td>
</tr>
<tr>
<td style="padding: 10px; text-align: center; border: 1px solid #ddd;">200</td>
<td style="padding: 10px; text-align: center; border: 1px solid #ddd;">90</td>
<td style="padding: 10px; text-align: center; border: 1px solid #ddd;">90</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 10px; text-align: center; border: 1px solid #ddd;">400</td>
<td style="padding: 10px; text-align: center; border: 1px solid #ddd;">180</td>
<td style="padding: 10px; text-align: center; border: 1px solid #ddd;">0</td>
</tr>
</table>
</div>

</section>`,
          keyTerms: [
            { term: 'Pressure Window', definition: 'الفرق بين ضغط المسام وضغط الكسر' },
            { term: 'ECD - Equivalent Circulating Density', definition: 'كثافة الدورة المكافئة التي تشمل تأثير الاحتكاك' },
            { term: 'Compensation Schedule', definition: 'جدول يوضح SBP المطلوب لكل معدل ضخ' },
          ],
          practiceQuestion: {
            question: 'إذا كان AFP = 200 psi أثناء الضخ، كم يجب أن يكون SBP عند إيقاف المضخات للحفاظ على نفس BHP؟',
            options: [
              '0 psi',
              '100 psi',
              '200 psi',
              '400 psi'
            ],
            correctAnswer: 2,
          },
        },
        en: {
          title: 'Managed Pressure Drilling - Day 4: Planning and Calculations',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">🔷 MPD Planning</h2>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Key Equations</h3>
<div style="background: #fef9e7; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<div style="background: white; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<p style="font-weight: bold;">Hydrostatic Pressure: P_h = 0.052 × MW × TVD</p>
<p style="font-weight: bold; margin-top: 1rem;">ECD = MW + (AFP / (0.052 × TVD))</p>
<p style="font-weight: bold; margin-top: 1rem;">BHP (MPD) = P_h + AFP + SBP</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Pressure Compensation Schedule</h3>
<p style="line-height: 1.8;">A pre-calculated table showing required SBP for each pump rate to maintain constant BHP throughout drilling operations.</p>

</section>`,
          keyTerms: [
            { term: 'Pressure Window', definition: 'Difference between pore pressure and fracture pressure' },
            { term: 'ECD', definition: 'Equivalent Circulating Density including friction effects' },
            { term: 'Compensation Schedule', definition: 'Table showing required SBP for each pump rate' },
          ],
          practiceQuestion: {
            question: 'If AFP = 200 psi while pumping, what should SBP be when pumps are off to maintain the same BHP?',
            options: [
              '0 psi',
              '100 psi',
              '200 psi',
              '400 psi'
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
          title: 'الحفر بالضغط المُدار - اليوم الخامس: التشغيل والتحديات',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">🔷 تشغيل نظام MPD والتحديات العملية</h2>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 إجراءات بدء التشغيل (Start-up Procedures)</h3>
<div style="background: #e8f4f8; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<ol style="line-height: 2; padding-right: 1.5rem;">
<li><strong>فحص المعدات:</strong> التأكد من سلامة RCD، صمامات الخنق، والمستشعرات</li>
<li><strong>اختبار الضغط:</strong> فحص تحمل الخطوط للضغط المتوقع + 500 psi</li>
<li><strong>معايرة الأجهزة:</strong> ضبط مستشعرات الضغط والتدفق</li>
<li><strong>برمجة النظام:</strong> إدخال جدول التعويض وحدود الإنذار</li>
<li><strong>اختبار وظيفي:</strong> تشغيل النظام بدون ضغط للتأكد من الاستجابة</li>
</ol>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 عمليات الاتصال والفصل (Connections)</h3>
<div style="background: #fef9e7; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<p style="line-height: 1.8; margin-bottom: 1rem;">عملية إضافة أنبوب جديد (Connection) هي الأكثر حساسية في MPD لأنها تتطلب إيقاف المضخات.</p>
<h4 style="color: #e67e22; margin: 1rem 0 0.5rem;">خطوات الاتصال الآمن:</h4>
<ol style="line-height: 2; padding-right: 1.5rem;">
<li>خفض معدل الضخ تدريجياً (ramp down)</li>
<li>زيادة SBP بالتناسب مع انخفاض الضخ</li>
<li>إيقاف المضخات مع الوصول لـ SBP الكامل</li>
<li>إجراء الاتصال مع مراقبة الضغط</li>
<li>استئناف الضخ مع خفض SBP تدريجياً</li>
</ol>
<div style="background: #fff3cd; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
<p><strong>⚠️ تحذير:</strong> أي تأخير في زيادة SBP عند إيقاف المضخات قد يسبب Kick!</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 التحديات الشائعة والحلول</h3>
<div style="display: grid; gap: 1rem; margin: 1rem 0;">
<div style="background: #ffebee; padding: 1rem; border-radius: 8px; border-right: 4px solid #c0392b;">
<h4 style="color: #c0392b; margin-bottom: 0.5rem;">1️⃣ تآكل حشوة RCD</h4>
<p style="line-height: 1.7;"><strong>الأعراض:</strong> تسرب حول عمود الحفر، صعوبة الحفاظ على الضغط</p>
<p style="line-height: 1.7;"><strong>الحل:</strong> استبدال الحشوة، استخدام أنواع مقاومة للتآكل، تقليل سرعة الدوران</p>
</div>
<div style="background: #fff3e0; padding: 1rem; border-radius: 8px; border-right: 4px solid #e67e22;">
<h4 style="color: #e67e22; margin-bottom: 0.5rem;">2️⃣ انسداد صمام الخنق</h4>
<p style="line-height: 1.7;"><strong>الأعراض:</strong> عدم استجابة الضغط للأوامر</p>
<p style="line-height: 1.7;"><strong>الحل:</strong> التبديل للخنق الاحتياطي، تنظيف الفلاتر، تحسين نظافة الطين</p>
</div>
<div style="background: #e3f2fd; padding: 1rem; border-radius: 8px; border-right: 4px solid #1976d2;">
<h4 style="color: #1976d2; margin-bottom: 0.5rem;">3️⃣ فشل المستشعرات</h4>
<p style="line-height: 1.7;"><strong>الأعراض:</strong> قراءات غير منطقية أو ثابتة</p>
<p style="line-height: 1.7;"><strong>الحل:</strong> التبديل للمستشعر الاحتياطي، إعادة المعايرة، التحقق من الأسلاك</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 الاستجابة للطوارئ</h3>
<div style="background: #e8f8f5; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<h4 style="color: #27ae60; margin-bottom: 1rem;">في حالة الـ Kick:</h4>
<ol style="line-height: 2; padding-right: 1.5rem;">
<li>زيادة SBP فوراً لوقف التدفق</li>
<li>إيقاف المضخات إذا لزم الأمر</li>
<li>تقييم حجم الـ Kick من بيانات التدفق</li>
<li>البدء بإجراءات القتل المناسبة</li>
</ol>
<div style="background: #c8e6c9; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
<p><strong>✅ ميزة MPD:</strong> القدرة على زيادة الضغط فوراً دون انتظار تغيير وزن الطين!</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 مؤشرات الأداء الرئيسية (KPIs)</h3>
<table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
<thead>
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 12px; text-align: right; border: 1px solid #ddd;">المؤشر</th>
<th style="padding: 12px; text-align: right; border: 1px solid #ddd;">الهدف</th>
<th style="padding: 12px; text-align: right; border: 1px solid #ddd;">علامة الخطر</th>
</tr>
</thead>
<tbody>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #ddd;">تذبذب BHP</td>
<td style="padding: 12px; border: 1px solid #ddd;">±25 psi</td>
<td style="padding: 12px; border: 1px solid #ddd;">&gt;50 psi</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;">زمن استجابة الخنق</td>
<td style="padding: 12px; border: 1px solid #ddd;">&lt;2 ثانية</td>
<td style="padding: 12px; border: 1px solid #ddd;">&gt;5 ثواني</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #ddd;">عمر حشوة RCD</td>
<td style="padding: 12px; border: 1px solid #ddd;">&gt;100 ساعة</td>
<td style="padding: 12px; border: 1px solid #ddd;">&lt;50 ساعة</td>
</tr>
</tbody>
</table>

</section>`,
          keyTerms: [
            { term: 'Ramp Down/Up', definition: 'تغيير تدريجي لمعدل الضخ مع تعويض الضغط' },
            { term: 'Connection Procedure', definition: 'إجراءات إضافة أنبوب جديد أثناء MPD' },
            { term: 'KPI - Key Performance Indicator', definition: 'مؤشرات قياس أداء العملية' },
          ],
          practiceQuestion: {
            question: 'ما هو أهم إجراء عند إيقاف المضخات لإضافة أنبوب جديد في نظام MPD؟',
            options: [
              'تقليل وزن الطين',
              'زيادة SBP لتعويض فقدان AFP',
              'إغلاق BOP',
              'إيقاف الدوران فقط'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Managed Pressure Drilling - Day 5: Operations and Challenges',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">🔷 MPD Operations and Practical Challenges</h2>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Connection Procedure</h3>
<div style="background: #fef9e7; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<ol style="line-height: 2; padding-left: 1.5rem;">
<li>Ramp down pump rate gradually</li>
<li>Increase SBP proportionally as pumping decreases</li>
<li>Stop pumps with full SBP applied</li>
<li>Make connection while monitoring pressure</li>
<li>Resume pumping while gradually reducing SBP</li>
</ol>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Common Challenges</h3>
<p style="line-height: 1.8;">RCD element wear, choke plugging, and sensor failures are the most common issues requiring backup systems and preventive maintenance.</p>

</section>`,
          keyTerms: [
            { term: 'Ramp Down/Up', definition: 'Gradual pump rate change with pressure compensation' },
            { term: 'Connection Procedure', definition: 'Steps to add new pipe during MPD' },
            { term: 'KPI', definition: 'Key Performance Indicator for operation monitoring' },
          ],
          practiceQuestion: {
            question: 'What is the most important action when stopping pumps to make a connection in MPD?',
            options: [
              'Reduce mud weight',
              'Increase SBP to compensate for AFP loss',
              'Close BOP',
              'Stop rotation only'
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
