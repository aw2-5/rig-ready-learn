import { WeeklyLesson } from '../weeklyContent';

export const hydraulicsFlowLesson: WeeklyLesson = {
  lessonId: 'hydraulics-flow',
  days: [
    {
      day: 1,
      type: 'learning',
      content: {
        ar: {
          title: 'الهيدروليكا وتدفق سلسلة الحفر - اليوم الأول: أساسيات هيدروليكا الحفر',
          explanation: `<section>
<h2 style="color: #1e3a5f;" class="text-xl font-bold mb-4">🔷 مقدمة في هيدروليكا الحفر</h2>
<p class="mb-4">هيدروليكا الحفر هي دراسة تدفق سائل الحفر عبر نظام الدوران بأكمله. الفهم الصحيح للهيدروليكا ضروري لتحسين معدل الاختراق، تنظيف الحفرة، والتحكم في ضغط قاع البئر.</p>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); padding: 20px; border-radius: 12px; margin: 20px 0; color: white;">
<h3 style="color: #fbbf24;" class="font-bold mb-2">💡 أهمية الهيدروليكا</h3>
<p>التصميم الهيدروليكي الأمثل يمكن أن يحسن ROP بنسبة 20-40% ويقلل مشاكل تنظيف الحفرة بشكل كبير.</p>
</div>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 نظام الدوران الهيدروليكي (Hydraulic Circulation System)</h3>
<p class="mb-4">مسار تدفق سائل الحفر:</p>

<ol class="list-decimal pr-6 mb-4 space-y-2">
<li><strong>المضخات الطينية (Mud Pumps):</strong> توفر الطاقة لدفع السائل</li>
<li><strong>خط السطح (Surface Lines):</strong> من المضخة للمنصة</li>
<li><strong>الرافع (Standpipe):</strong> أنبوب عمودي على المنصة</li>
<li><strong>الخرطوم (Rotary Hose):</strong> مرن، يربط الرافع بالسويفل</li>
<li><strong>السويفل والكيلي (Swivel & Kelly):</strong> يسمح بالدوران مع التدفق</li>
<li><strong>سلسلة الحفر (Drill String):</strong> المسار الداخلي للأسفل</li>
<li><strong>فتحات الرأس (Bit Nozzles):</strong> أعلى فقدان ضغط</li>
<li><strong>الفراغ الحلقي (Annulus):</strong> المسار الصاعد للسطح</li>
</ol>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 أنواع التدفق (Flow Regimes)</h3>

<div style="background: #f8fafc; padding: 16px; border-radius: 8px; margin: 16px 0;">
<h4 style="color: #1e3a5f;" class="font-bold mb-2">1. التدفق الصفائحي (Laminar Flow)</h4>
<ul class="list-disc pr-6 space-y-1">
<li>طبقات متوازية منتظمة</li>
<li>رقم رينولدز (Re) < 2100</li>
<li>فقدان ضغط أقل</li>
<li>شائع في الفراغ الحلقي</li>
</ul>
</div>

<div style="background: #f8fafc; padding: 16px; border-radius: 8px; margin: 16px 0;">
<h4 style="color: #1e3a5f;" class="font-bold mb-2">2. التدفق المضطرب (Turbulent Flow)</h4>
<ul class="list-disc pr-6 space-y-1">
<li>حركة عشوائية فوضوية</li>
<li>رقم رينولدز (Re) > 4000</li>
<li>فقدان ضغط أعلى</li>
<li>تنظيف أفضل للحفرة</li>
<li>شائع داخل سلسلة الحفر</li>
</ul>
</div>

<div style="background: #fef3c7; padding: 16px; border-radius: 8px; border-right: 4px solid #f59e0b; margin: 16px 0;">
<h4 style="color: #92400e;" class="font-bold mb-2">3. التدفق الانتقالي (Transitional Flow)</h4>
<p>2100 < Re < 4000 - منطقة غير مستقرة، يجب تجنبها في التصميم</p>
</div>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 رقم رينولدز (Reynolds Number)</h3>
<p class="mb-4">يحدد نوع التدفق:</p>

<div style="background: #f0fdf4; padding: 16px; border-radius: 8px; border-right: 4px solid #22c55e; margin: 16px 0;">
<p class="font-mono text-center mb-2"><strong>Re = (928 × ρ × V × D) / μ</strong></p>
<ul class="list-disc pr-6 space-y-1">
<li>ρ = كثافة السائل (ppg)</li>
<li>V = سرعة التدفق (ft/s)</li>
<li>D = القطر (in)</li>
<li>μ = اللزوجة (cP)</li>
</ul>
</div>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 معادلات فقدان الضغط الأساسية</h3>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">للتدفق الصفائحي في الأنبوب:</h4>
<p class="font-mono mb-4">ΔP = (PV × L × V) / (1500 × D²) + (YP × L) / (225 × D)</p>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">للتدفق المضطرب:</h4>
<p class="font-mono mb-4">ΔP = (ρ⁰·⁷⁵ × V¹·⁷⁵ × μ⁰·²⁵ × L) / (1800 × D¹·²⁵)</p>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 توزيع فقدان الضغط في النظام</h3>

<table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 12px; border: 1px solid #ddd;">المكون</th>
<th style="padding: 12px; border: 1px solid #ddd;">النسبة التقريبية</th>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #ddd;">فتحات الرأس (Bit Nozzles)</td>
<td style="padding: 12px; border: 1px solid #ddd;">50-65%</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;">سلسلة الحفر (Drill String)</td>
<td style="padding: 12px; border: 1px solid #ddd;">15-25%</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #ddd;">الفراغ الحلقي (Annulus)</td>
<td style="padding: 12px; border: 1px solid #ddd;">10-20%</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;">معدات السطح</td>
<td style="padding: 12px; border: 1px solid #ddd;">5-10%</td>
</tr>
</table>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); padding: 20px; border-radius: 12px; margin: 20px 0; color: white;">
<h3 style="color: #fbbf24;" class="font-bold mb-2">💡 مبدأ التصميم الهيدروليكي</h3>
<p>الهدف هو تعظيم الطاقة الهيدروليكية عند الرأس مع الحفاظ على سرعة كافية في الفراغ الحلقي للتنظيف، دون تجاوز حدود ECD.</p>
</div>
</section>`,
          keyTerms: [
            { term: 'رقم رينولدز (Reynolds Number)', definition: 'رقم بلا وحدة يحدد نوع التدفق - صفائحي أو مضطرب' },
            { term: 'التدفق الصفائحي (Laminar Flow)', definition: 'تدفق منتظم في طبقات متوازية، يحدث عند Re < 2100' },
            { term: 'التدفق المضطرب (Turbulent Flow)', definition: 'تدفق فوضوي عشوائي، يحدث عند Re > 4000' },
            { term: 'فقدان الضغط (Pressure Loss)', definition: 'الطاقة المفقودة بسبب الاحتكاك أثناء تدفق السائل' },
          ],
          practiceQuestion: {
            question: 'أي جزء من نظام الدوران يستهلك أكبر نسبة من فقدان الضغط؟',
            options: ['سلسلة الحفر', 'فتحات الرأس', 'الفراغ الحلقي', 'معدات السطح'],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Hydraulics & Drillstring Flow - Day 1: Drilling Hydraulics Fundamentals',
          explanation: `<section>
<h2 style="color: #1e3a5f;" class="text-xl font-bold mb-4">🔷 Introduction to Drilling Hydraulics</h2>
<p class="mb-4">Drilling hydraulics is the study of drilling fluid flow through the entire circulation system. Proper understanding of hydraulics is essential for optimizing rate of penetration, hole cleaning, and bottomhole pressure control.</p>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); padding: 20px; border-radius: 12px; margin: 20px 0; color: white;">
<h3 style="color: #fbbf24;" class="font-bold mb-2">💡 Importance of Hydraulics</h3>
<p>Optimal hydraulic design can improve ROP by 20-40% and significantly reduce hole cleaning problems.</p>
</div>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 Hydraulic Circulation System</h3>
<p class="mb-4">Drilling fluid flow path:</p>

<ol class="list-decimal pl-6 mb-4 space-y-2">
<li><strong>Mud Pumps:</strong> Provide energy to push fluid</li>
<li><strong>Surface Lines:</strong> From pump to rig floor</li>
<li><strong>Standpipe:</strong> Vertical pipe on rig floor</li>
<li><strong>Rotary Hose:</strong> Flexible, connects standpipe to swivel</li>
<li><strong>Swivel & Kelly:</strong> Allows rotation with flow</li>
<li><strong>Drill String:</strong> Internal path downward</li>
<li><strong>Bit Nozzles:</strong> Highest pressure loss</li>
<li><strong>Annulus:</strong> Return path to surface</li>
</ol>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 Flow Regimes</h3>

<div style="background: #f8fafc; padding: 16px; border-radius: 8px; margin: 16px 0;">
<h4 style="color: #1e3a5f;" class="font-bold mb-2">1. Laminar Flow</h4>
<ul class="list-disc pl-6 space-y-1">
<li>Orderly parallel layers</li>
<li>Reynolds Number (Re) < 2100</li>
<li>Lower pressure loss</li>
<li>Common in annulus</li>
</ul>
</div>

<div style="background: #f8fafc; padding: 16px; border-radius: 8px; margin: 16px 0;">
<h4 style="color: #1e3a5f;" class="font-bold mb-2">2. Turbulent Flow</h4>
<ul class="list-disc pl-6 space-y-1">
<li>Random chaotic movement</li>
<li>Reynolds Number (Re) > 4000</li>
<li>Higher pressure loss</li>
<li>Better hole cleaning</li>
<li>Common inside drill string</li>
</ul>
</div>

<div style="background: #fef3c7; padding: 16px; border-radius: 8px; border-left: 4px solid #f59e0b; margin: 16px 0;">
<h4 style="color: #92400e;" class="font-bold mb-2">3. Transitional Flow</h4>
<p>2100 < Re < 4000 - Unstable region, should be avoided in design</p>
</div>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 Reynolds Number</h3>
<p class="mb-4">Determines flow type:</p>

<div style="background: #f0fdf4; padding: 16px; border-radius: 8px; border-left: 4px solid #22c55e; margin: 16px 0;">
<p class="font-mono text-center mb-2"><strong>Re = (928 × ρ × V × D) / μ</strong></p>
<ul class="list-disc pl-6 space-y-1">
<li>ρ = Fluid density (ppg)</li>
<li>V = Flow velocity (ft/s)</li>
<li>D = Diameter (in)</li>
<li>μ = Viscosity (cP)</li>
</ul>
</div>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 Basic Pressure Loss Equations</h3>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">For Laminar Flow in Pipe:</h4>
<p class="font-mono mb-4">ΔP = (PV × L × V) / (1500 × D²) + (YP × L) / (225 × D)</p>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">For Turbulent Flow:</h4>
<p class="font-mono mb-4">ΔP = (ρ⁰·⁷⁵ × V¹·⁷⁵ × μ⁰·²⁵ × L) / (1800 × D¹·²⁵)</p>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 Pressure Loss Distribution in System</h3>

<table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 12px; border: 1px solid #ddd;">Component</th>
<th style="padding: 12px; border: 1px solid #ddd;">Approximate %</th>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #ddd;">Bit Nozzles</td>
<td style="padding: 12px; border: 1px solid #ddd;">50-65%</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;">Drill String</td>
<td style="padding: 12px; border: 1px solid #ddd;">15-25%</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #ddd;">Annulus</td>
<td style="padding: 12px; border: 1px solid #ddd;">10-20%</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;">Surface Equipment</td>
<td style="padding: 12px; border: 1px solid #ddd;">5-10%</td>
</tr>
</table>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); padding: 20px; border-radius: 12px; margin: 20px 0; color: white;">
<h3 style="color: #fbbf24;" class="font-bold mb-2">💡 Hydraulic Design Principle</h3>
<p>The goal is to maximize hydraulic horsepower at the bit while maintaining sufficient annular velocity for cleaning, without exceeding ECD limits.</p>
</div>
</section>`,
          keyTerms: [
            { term: 'Reynolds Number', definition: 'Dimensionless number that determines flow type - laminar or turbulent' },
            { term: 'Laminar Flow', definition: 'Orderly flow in parallel layers, occurs at Re < 2100' },
            { term: 'Turbulent Flow', definition: 'Chaotic random flow, occurs at Re > 4000' },
            { term: 'Pressure Loss', definition: 'Energy lost due to friction during fluid flow' },
          ],
          practiceQuestion: {
            question: 'Which part of the circulation system consumes the highest percentage of pressure loss?',
            options: ['Drill String', 'Bit Nozzles', 'Annulus', 'Surface Equipment'],
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
          title: 'الهيدروليكا وتدفق سلسلة الحفر - اليوم الثاني: حسابات المضخات والقدرة الهيدروليكية',
          explanation: `<section>
<h2 style="color: #1e3a5f;" class="text-xl font-bold mb-4">🔷 المضخات الطينية والقدرة الهيدروليكية</h2>
<p class="mb-4">المضخات الطينية هي قلب نظام الدوران. فهم خصائصها وحساباتها ضروري لتصميم برنامج هيدروليكي فعال.</p>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 أنواع المضخات الطينية</h3>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">1. المضخة ثلاثية المكابس (Triplex Pump)</h4>
<div style="background: #f0fdf4; padding: 16px; border-radius: 8px; border-right: 4px solid #22c55e; margin: 16px 0;">
<ul class="list-disc pr-6 space-y-1">
<li>الأكثر استخداماً حالياً</li>
<li>3 مكابس تعمل بالتناوب</li>
<li>تدفق أكثر انتظاماً (أقل نبضات)</li>
<li>وزن أخف وصيانة أسهل</li>
<li>كفاءة حجمية: 90-98%</li>
</ul>
</div>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">2. المضخة مزدوجة المكابس (Duplex Pump)</h4>
<div style="background: #f8fafc; padding: 16px; border-radius: 8px; margin: 16px 0;">
<ul class="list-disc pr-6 space-y-1">
<li>مكبسان يعملان بالتناوب</li>
<li>تعمل بالدفع المزدوج (Double-Acting)</li>
<li>نبضات أكثر في التدفق</li>
<li>أقل استخداماً في المنصات الحديثة</li>
</ul>
</div>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 حسابات إزاحة المضخة (Pump Output)</h3>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">للمضخة الثلاثية:</h4>
<div style="background: #f8fafc; padding: 16px; border-radius: 8px; margin: 16px 0;">
<p class="font-mono text-center mb-2"><strong>Q = 0.0102 × D² × S × SPM × Ev</strong></p>
<ul class="list-disc pr-6 space-y-1">
<li>Q = معدل التدفق (gpm)</li>
<li>D = قطر البطانة (in)</li>
<li>S = طول الشوط (in)</li>
<li>SPM = عدد الأشواط/دقيقة</li>
<li>Ev = الكفاءة الحجمية (عادة 0.95)</li>
</ul>
</div>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">للمضخة المزدوجة (Double-Acting):</h4>
<p class="font-mono mb-4">Q = 0.0068 × (2D² - d²) × S × SPM × Ev</p>
<p class="text-sm mb-4">حيث d = قطر ذراع المكبس</p>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 القدرة الهيدروليكية (Hydraulic Horsepower)</h3>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); padding: 20px; border-radius: 12px; margin: 20px 0; color: white;">
<h4 style="color: #fbbf24;" class="font-bold mb-2">المعادلة الأساسية:</h4>
<p class="font-mono text-center text-lg mb-2">HHP = (P × Q) / 1714</p>
<ul class="pr-6 space-y-1">
<li>HHP = القدرة الهيدروليكية (حصان)</li>
<li>P = الضغط (psi)</li>
<li>Q = معدل التدفق (gpm)</li>
</ul>
</div>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">القدرة عند الرأس (Bit Hydraulic Horsepower):</h4>
<p class="font-mono mb-2">HHP_bit = (ΔP_bit × Q) / 1714</p>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">القدرة لكل بوصة مربعة (HSI):</h4>
<p class="font-mono mb-4">HSI = HHP_bit / A_bit</p>
<p class="text-sm mb-4">حيث A_bit = مساحة الرأس (in²)</p>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 معايير التصميم الهيدروليكي</h3>

<table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 12px; border: 1px solid #ddd;">المعيار</th>
<th style="padding: 12px; border: 1px solid #ddd;">القيمة المستهدفة</th>
<th style="padding: 12px; border: 1px solid #ddd;">الاستخدام</th>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #ddd;">HSI (حصان/بوصة²)</td>
<td style="padding: 12px; border: 1px solid #ddd;">2.5 - 5.0</td>
<td style="padding: 12px; border: 1px solid #ddd;">التشكيلات الناعمة-المتوسطة</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;">قوة النفث (IF)</td>
<td style="padding: 12px; border: 1px solid #ddd;">1000 - 1500 lb</td>
<td style="padding: 12px; border: 1px solid #ddd;">التشكيلات الصلبة</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #ddd;">سرعة النفث (Vn)</td>
<td style="padding: 12px; border: 1px solid #ddd;">250 - 450 ft/s</td>
<td style="padding: 12px; border: 1px solid #ddd;">تنظيف الرأس</td>
</tr>
</table>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 حساب فقدان الضغط عبر الفتحات</h3>

<div style="background: #f8fafc; padding: 16px; border-radius: 8px; margin: 16px 0;">
<p class="font-mono text-center mb-2"><strong>ΔP_bit = (ρ × Q²) / (12042 × Cd² × TFA²)</strong></p>
<ul class="list-disc pr-6 space-y-1">
<li>ρ = كثافة السائل (ppg)</li>
<li>Q = معدل التدفق (gpm)</li>
<li>Cd = معامل التصريف (0.95 نموذجياً)</li>
<li>TFA = إجمالي مساحة الفتحات (in²)</li>
</ul>
</div>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">حساب TFA:</h4>
<p class="font-mono mb-4">TFA = N × (π × d²/4) / 1296</p>
<p class="text-sm mb-4">حيث N = عدد الفتحات، d = قطر الفتحة (1/32 in)</p>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 قوة النفث (Jet Impact Force)</h3>

<div style="background: #f0fdf4; padding: 16px; border-radius: 8px; border-right: 4px solid #22c55e; margin: 16px 0;">
<p class="font-mono text-center mb-2"><strong>IF = 0.01823 × Cd × Q × √(ρ × ΔP_bit)</strong></p>
<p class="text-center">أو بشكل مبسط:</p>
<p class="font-mono text-center mb-2"><strong>IF = V_n × Q × ρ / 1930</strong></p>
</div>

<div style="background: #fef3c7; padding: 16px; border-radius: 8px; border-right: 4px solid #f59e0b; margin: 16px 0;">
<h4 style="color: #92400e;" class="font-bold mb-2">⚠️ ملاحظة مهمة</h4>
<p>سرعة النفث العالية جداً (> 450 ft/s) قد تسبب تآكل الفتحات وتلف التشكيلات الناعمة.</p>
</div>
</section>`,
          keyTerms: [
            { term: 'المضخة الثلاثية (Triplex Pump)', definition: 'مضخة ذات 3 مكابس تعمل بالدفع الأحادي، الأكثر شيوعاً في الحفر الحديث' },
            { term: 'HHP (Hydraulic Horsepower)', definition: 'القدرة الهيدروليكية - مقياس للطاقة المتاحة في نظام الدوران' },
            { term: 'HSI', definition: 'القدرة الهيدروليكية لكل بوصة مربعة من مساحة الرأس' },
            { term: 'TFA (Total Flow Area)', definition: 'إجمالي مساحة فتحات الرأس المتاحة للتدفق' },
          ],
          practiceQuestion: {
            question: 'ما هي نسبة الكفاءة الحجمية النموذجية للمضخة الثلاثية؟',
            options: ['70-80%', '80-85%', '90-98%', '99-100%'],
            correctAnswer: 2,
          },
        },
        en: {
          title: 'Hydraulics & Drillstring Flow - Day 2: Pump Calculations and Hydraulic Power',
          explanation: `<section>
<h2 style="color: #1e3a5f;" class="text-xl font-bold mb-4">🔷 Mud Pumps and Hydraulic Power</h2>
<p class="mb-4">Mud pumps are the heart of the circulation system. Understanding their characteristics and calculations is essential for designing an effective hydraulic program.</p>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 Types of Mud Pumps</h3>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">1. Triplex Pump</h4>
<div style="background: #f0fdf4; padding: 16px; border-radius: 8px; border-left: 4px solid #22c55e; margin: 16px 0;">
<ul class="list-disc pl-6 space-y-1">
<li>Most commonly used today</li>
<li>3 pistons working alternately</li>
<li>More uniform flow (less pulsation)</li>
<li>Lighter weight and easier maintenance</li>
<li>Volumetric efficiency: 90-98%</li>
</ul>
</div>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">2. Duplex Pump</h4>
<div style="background: #f8fafc; padding: 16px; border-radius: 8px; margin: 16px 0;">
<ul class="list-disc pl-6 space-y-1">
<li>Two pistons working alternately</li>
<li>Double-acting operation</li>
<li>More pulsation in flow</li>
<li>Less common in modern rigs</li>
</ul>
</div>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 Pump Output Calculations</h3>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">For Triplex Pump:</h4>
<div style="background: #f8fafc; padding: 16px; border-radius: 8px; margin: 16px 0;">
<p class="font-mono text-center mb-2"><strong>Q = 0.0102 × D² × S × SPM × Ev</strong></p>
<ul class="list-disc pl-6 space-y-1">
<li>Q = Flow rate (gpm)</li>
<li>D = Liner diameter (in)</li>
<li>S = Stroke length (in)</li>
<li>SPM = Strokes per minute</li>
<li>Ev = Volumetric efficiency (typically 0.95)</li>
</ul>
</div>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">For Duplex Pump (Double-Acting):</h4>
<p class="font-mono mb-4">Q = 0.0068 × (2D² - d²) × S × SPM × Ev</p>
<p class="text-sm mb-4">where d = piston rod diameter</p>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 Hydraulic Horsepower (HHP)</h3>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); padding: 20px; border-radius: 12px; margin: 20px 0; color: white;">
<h4 style="color: #fbbf24;" class="font-bold mb-2">Basic Equation:</h4>
<p class="font-mono text-center text-lg mb-2">HHP = (P × Q) / 1714</p>
<ul class="pl-6 space-y-1">
<li>HHP = Hydraulic Horsepower</li>
<li>P = Pressure (psi)</li>
<li>Q = Flow rate (gpm)</li>
</ul>
</div>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">Bit Hydraulic Horsepower:</h4>
<p class="font-mono mb-2">HHP_bit = (ΔP_bit × Q) / 1714</p>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">Horsepower per Square Inch (HSI):</h4>
<p class="font-mono mb-4">HSI = HHP_bit / A_bit</p>
<p class="text-sm mb-4">where A_bit = bit area (in²)</p>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 Hydraulic Design Criteria</h3>

<table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 12px; border: 1px solid #ddd;">Criterion</th>
<th style="padding: 12px; border: 1px solid #ddd;">Target Value</th>
<th style="padding: 12px; border: 1px solid #ddd;">Application</th>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #ddd;">HSI (hp/in²)</td>
<td style="padding: 12px; border: 1px solid #ddd;">2.5 - 5.0</td>
<td style="padding: 12px; border: 1px solid #ddd;">Soft-Medium formations</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;">Impact Force (IF)</td>
<td style="padding: 12px; border: 1px solid #ddd;">1000 - 1500 lb</td>
<td style="padding: 12px; border: 1px solid #ddd;">Hard formations</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #ddd;">Nozzle Velocity (Vn)</td>
<td style="padding: 12px; border: 1px solid #ddd;">250 - 450 ft/s</td>
<td style="padding: 12px; border: 1px solid #ddd;">Bit cleaning</td>
</tr>
</table>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 Bit Pressure Loss Calculation</h3>

<div style="background: #f8fafc; padding: 16px; border-radius: 8px; margin: 16px 0;">
<p class="font-mono text-center mb-2"><strong>ΔP_bit = (ρ × Q²) / (12042 × Cd² × TFA²)</strong></p>
<ul class="list-disc pl-6 space-y-1">
<li>ρ = Fluid density (ppg)</li>
<li>Q = Flow rate (gpm)</li>
<li>Cd = Discharge coefficient (typically 0.95)</li>
<li>TFA = Total Flow Area (in²)</li>
</ul>
</div>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">TFA Calculation:</h4>
<p class="font-mono mb-4">TFA = N × (π × d²/4) / 1296</p>
<p class="text-sm mb-4">where N = number of nozzles, d = nozzle diameter (1/32 in)</p>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 Jet Impact Force</h3>

<div style="background: #f0fdf4; padding: 16px; border-radius: 8px; border-left: 4px solid #22c55e; margin: 16px 0;">
<p class="font-mono text-center mb-2"><strong>IF = 0.01823 × Cd × Q × √(ρ × ΔP_bit)</strong></p>
<p class="text-center">Or simplified:</p>
<p class="font-mono text-center mb-2"><strong>IF = V_n × Q × ρ / 1930</strong></p>
</div>

<div style="background: #fef3c7; padding: 16px; border-radius: 8px; border-left: 4px solid #f59e0b; margin: 16px 0;">
<h4 style="color: #92400e;" class="font-bold mb-2">⚠️ Important Note</h4>
<p>Very high nozzle velocity (> 450 ft/s) may cause nozzle erosion and soft formation damage.</p>
</div>
</section>`,
          keyTerms: [
            { term: 'Triplex Pump', definition: 'A 3-piston single-acting pump, most common in modern drilling' },
            { term: 'HHP (Hydraulic Horsepower)', definition: 'Measure of energy available in the circulation system' },
            { term: 'HSI', definition: 'Hydraulic horsepower per square inch of bit area' },
            { term: 'TFA (Total Flow Area)', definition: 'Total area of bit nozzles available for flow' },
          ],
          practiceQuestion: {
            question: 'What is the typical volumetric efficiency of a triplex pump?',
            options: ['70-80%', '80-85%', '90-98%', '99-100%'],
            correctAnswer: 2,
          },
        },
      },
    },
    {
      day: 3,
      type: 'learning',
      content: {
        ar: {
          title: 'الهيدروليكا وتدفق سلسلة الحفر - اليوم الثالث: سرعة التدفق الحلقي وتنظيف الحفرة',
          explanation: `<section>
<h2 style="color: #1e3a5f;" class="text-xl font-bold mb-4">🔷 سرعة التدفق الحلقي وتنظيف الحفرة</h2>
<p class="mb-4">تنظيف الحفرة الفعال ضروري لمنع مشاكل الحفر الخطيرة. السرعة الحلقية وقدرة حمل الفتات هما المحددان الرئيسيان لكفاءة التنظيف.</p>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 السرعة الحلقية (Annular Velocity)</h3>

<div style="background: #f8fafc; padding: 16px; border-radius: 8px; margin: 16px 0;">
<p class="font-mono text-center mb-2"><strong>AV = (24.5 × Q) / (Dh² - Dp²)</strong></p>
<ul class="list-disc pr-6 space-y-1">
<li>AV = السرعة الحلقية (ft/min)</li>
<li>Q = معدل التدفق (gpm)</li>
<li>Dh = قطر الحفرة (in)</li>
<li>Dp = قطر الأنبوب (in)</li>
</ul>
</div>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">القيم المستهدفة للسرعة الحلقية:</h4>
<table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 12px; border: 1px solid #ddd;">الحالة</th>
<th style="padding: 12px; border: 1px solid #ddd;">AV المستهدفة</th>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #ddd;">الحد الأدنى للتنظيف</td>
<td style="padding: 12px; border: 1px solid #ddd;">90-120 ft/min</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;">التنظيف الجيد</td>
<td style="padding: 12px; border: 1px solid #ddd;">120-180 ft/min</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #ddd;">التنظيف الممتاز</td>
<td style="padding: 12px; border: 1px solid #ddd;">> 180 ft/min</td>
</tr>
</table>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 سرعة الترسب (Slip Velocity)</h3>
<p class="mb-4">سرعة سقوط الفتات في السائل الساكن:</p>

<div style="background: #f8fafc; padding: 16px; border-radius: 8px; margin: 16px 0;">
<h4 style="color: #1e3a5f;" class="font-bold mb-2">للجسيمات الكروية (قانون ستوكس):</h4>
<p class="font-mono text-center mb-2">Vs = (ρs - ρf) × g × d² / (18 × μ)</p>

<h4 style="color: #1e3a5f;" class="font-bold mb-2 mt-4">معادلة مور المبسطة:</h4>
<p class="font-mono text-center mb-2">Vs = 175 × dp × √((ρs - ρf) / ρf)</p>
<ul class="list-disc pr-6 space-y-1 mt-2">
<li>dp = قطر الجسيم (in)</li>
<li>ρs = كثافة الصخر (ppg) - عادة 21-22</li>
<li>ρf = كثافة السائل (ppg)</li>
</ul>
</div>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 سرعة النقل الصافية (Net Transport Velocity)</h3>

<div style="background: #f0fdf4; padding: 16px; border-radius: 8px; border-right: 4px solid #22c55e; margin: 16px 0;">
<p class="font-mono text-center text-lg mb-2"><strong>Vt = AV - Vs</strong></p>
<p class="text-center">يجب أن تكون Vt موجبة وكافية لنقل الفتات للسطح</p>
</div>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">نسبة حمل الفتات (Carrying Capacity Ratio):</h4>
<p class="font-mono mb-4">CCR = (AV - Vs) / AV = Vt / AV</p>
<p class="mb-4">الهدف: CCR > 0.5 (أي Vt > 50% من AV)</p>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 العوامل المؤثرة على تنظيف الحفرة</h3>

<div style="background: #f8fafc; padding: 16px; border-radius: 8px; margin: 16px 0;">
<h4 style="color: #1e3a5f;" class="font-bold mb-2">1. خصائص السائل:</h4>
<ul class="list-disc pr-6 space-y-1">
<li>اللزوجة العالية تقلل Vs</li>
<li>YP العالي يحسن التعليق</li>
<li>الكثافة العالية تقلل الفرق (ρs - ρf)</li>
</ul>
</div>

<div style="background: #f8fafc; padding: 16px; border-radius: 8px; margin: 16px 0;">
<h4 style="color: #1e3a5f;" class="font-bold mb-2">2. معلمات التشغيل:</h4>
<ul class="list-disc pr-6 space-y-1">
<li>معدل التدفق (يحدد AV)</li>
<li>دوران الأنابيب (يحسن التنظيف بـ 20-30%)</li>
<li>ROP (يحدد كمية الفتات المتولدة)</li>
</ul>
</div>

<div style="background: #f8fafc; padding: 16px; border-radius: 8px; margin: 16px 0;">
<h4 style="color: #1e3a5f;" class="font-bold mb-2">3. هندسة الحفرة:</h4>
<ul class="list-disc pr-6 space-y-1">
<li>زاوية الميل (الآبار الأفقية أصعب)</li>
<li>نسبة القطر Dh/Dp</li>
<li>انتظام جدار الحفرة</li>
</ul>
</div>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 تحديات التنظيف في الآبار المائلة والأفقية</h3>

<div style="background: #fef2f2; padding: 16px; border-radius: 8px; border-right: 4px solid #ef4444; margin: 16px 0;">
<h4 style="color: #991b1b;" class="font-bold mb-2">المناطق الحرجة:</h4>
<ul class="list-disc pr-6 space-y-2">
<li><strong>30-60°:</strong> "زاوية الترسب" - الفتات تميل للتراكم على الجانب السفلي</li>
<li><strong>> 60°:</strong> تكوين سرير الفتات (Cuttings Bed) محتمل جداً</li>
<li><strong>الأفقي:</strong> يتطلب سرعات عالية جداً أو تقنيات خاصة</li>
</ul>
</div>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">استراتيجيات التنظيف للآبار المائلة:</h4>
<ul class="list-disc pr-6 mb-4 space-y-2">
<li>زيادة معدل التدفق للحد الأقصى الآمن</li>
<li>استخدام سوائل ذات YP و LSYP عاليين</li>
<li>دوران مستمر للأنابيب (> 100 RPM)</li>
<li>التدوير العكسي الدوري (Back-reaming)</li>
<li>استخدام أدوات تنظيف ميكانيكية</li>
</ul>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); padding: 20px; border-radius: 12px; margin: 20px 0; color: white;">
<h3 style="color: #fbbf24;" class="font-bold mb-2">💡 قاعدة عملية</h3>
<p>في الآبار المائلة > 45°، يجب أن يكون معدل التدفق كافياً لتحقيق AV > 150 ft/min في أضيق نقطة من الفراغ الحلقي.</p>
</div>
</section>`,
          keyTerms: [
            { term: 'السرعة الحلقية (Annular Velocity)', definition: 'سرعة تدفق السائل في الفراغ بين الأنابيب وجدار الحفرة' },
            { term: 'سرعة الترسب (Slip Velocity)', definition: 'سرعة سقوط الفتات في السائل الساكن بفعل الجاذبية' },
            { term: 'سرير الفتات (Cuttings Bed)', definition: 'تراكم الفتات على الجانب السفلي للحفرة في الآبار المائلة' },
            { term: 'CCR', definition: 'نسبة حمل الفتات - مؤشر لكفاءة نقل الفتات للسطح' },
          ],
          practiceQuestion: {
            question: 'ما هو نطاق السرعة الحلقية للتنظيف الجيد للحفرة؟',
            options: ['60-90 ft/min', '90-120 ft/min', '120-180 ft/min', '> 200 ft/min'],
            correctAnswer: 2,
          },
        },
        en: {
          title: 'Hydraulics & Drillstring Flow - Day 3: Annular Velocity and Hole Cleaning',
          explanation: `<section>
<h2 style="color: #1e3a5f;" class="text-xl font-bold mb-4">🔷 Annular Velocity and Hole Cleaning</h2>
<p class="mb-4">Effective hole cleaning is essential to prevent serious drilling problems. Annular velocity and cuttings carrying capacity are the main determinants of cleaning efficiency.</p>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 Annular Velocity (AV)</h3>

<div style="background: #f8fafc; padding: 16px; border-radius: 8px; margin: 16px 0;">
<p class="font-mono text-center mb-2"><strong>AV = (24.5 × Q) / (Dh² - Dp²)</strong></p>
<ul class="list-disc pl-6 space-y-1">
<li>AV = Annular Velocity (ft/min)</li>
<li>Q = Flow rate (gpm)</li>
<li>Dh = Hole diameter (in)</li>
<li>Dp = Pipe diameter (in)</li>
</ul>
</div>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">Target Annular Velocity Values:</h4>
<table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 12px; border: 1px solid #ddd;">Condition</th>
<th style="padding: 12px; border: 1px solid #ddd;">Target AV</th>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #ddd;">Minimum Cleaning</td>
<td style="padding: 12px; border: 1px solid #ddd;">90-120 ft/min</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;">Good Cleaning</td>
<td style="padding: 12px; border: 1px solid #ddd;">120-180 ft/min</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #ddd;">Excellent Cleaning</td>
<td style="padding: 12px; border: 1px solid #ddd;">> 180 ft/min</td>
</tr>
</table>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 Slip Velocity</h3>
<p class="mb-4">Rate at which cuttings fall in stationary fluid:</p>

<div style="background: #f8fafc; padding: 16px; border-radius: 8px; margin: 16px 0;">
<h4 style="color: #1e3a5f;" class="font-bold mb-2">For Spherical Particles (Stokes Law):</h4>
<p class="font-mono text-center mb-2">Vs = (ρs - ρf) × g × d² / (18 × μ)</p>

<h4 style="color: #1e3a5f;" class="font-bold mb-2 mt-4">Moore Simplified Equation:</h4>
<p class="font-mono text-center mb-2">Vs = 175 × dp × √((ρs - ρf) / ρf)</p>
<ul class="list-disc pl-6 space-y-1 mt-2">
<li>dp = Particle diameter (in)</li>
<li>ρs = Rock density (ppg) - typically 21-22</li>
<li>ρf = Fluid density (ppg)</li>
</ul>
</div>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 Net Transport Velocity</h3>

<div style="background: #f0fdf4; padding: 16px; border-radius: 8px; border-left: 4px solid #22c55e; margin: 16px 0;">
<p class="font-mono text-center text-lg mb-2"><strong>Vt = AV - Vs</strong></p>
<p class="text-center">Vt must be positive and sufficient to transport cuttings to surface</p>
</div>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">Carrying Capacity Ratio (CCR):</h4>
<p class="font-mono mb-4">CCR = (AV - Vs) / AV = Vt / AV</p>
<p class="mb-4">Target: CCR > 0.5 (i.e., Vt > 50% of AV)</p>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 Factors Affecting Hole Cleaning</h3>

<div style="background: #f8fafc; padding: 16px; border-radius: 8px; margin: 16px 0;">
<h4 style="color: #1e3a5f;" class="font-bold mb-2">1. Fluid Properties:</h4>
<ul class="list-disc pl-6 space-y-1">
<li>High viscosity reduces Vs</li>
<li>High YP improves suspension</li>
<li>High density reduces difference (ρs - ρf)</li>
</ul>
</div>

<div style="background: #f8fafc; padding: 16px; border-radius: 8px; margin: 16px 0;">
<h4 style="color: #1e3a5f;" class="font-bold mb-2">2. Operating Parameters:</h4>
<ul class="list-disc pl-6 space-y-1">
<li>Flow rate (determines AV)</li>
<li>Pipe rotation (improves cleaning by 20-30%)</li>
<li>ROP (determines cuttings volume generated)</li>
</ul>
</div>

<div style="background: #f8fafc; padding: 16px; border-radius: 8px; margin: 16px 0;">
<h4 style="color: #1e3a5f;" class="font-bold mb-2">3. Hole Geometry:</h4>
<ul class="list-disc pl-6 space-y-1">
<li>Inclination angle (horizontal wells hardest)</li>
<li>Diameter ratio Dh/Dp</li>
<li>Hole wall regularity</li>
</ul>
</div>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 Cleaning Challenges in Deviated and Horizontal Wells</h3>

<div style="background: #fef2f2; padding: 16px; border-radius: 8px; border-left: 4px solid #ef4444; margin: 16px 0;">
<h4 style="color: #991b1b;" class="font-bold mb-2">Critical Zones:</h4>
<ul class="list-disc pl-6 space-y-2">
<li><strong>30-60°:</strong> "Angle of repose" - cuttings tend to accumulate on low side</li>
<li><strong>> 60°:</strong> Cuttings bed formation very likely</li>
<li><strong>Horizontal:</strong> Requires very high velocities or special techniques</li>
</ul>
</div>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">Cleaning Strategies for Deviated Wells:</h4>
<ul class="list-disc pl-6 mb-4 space-y-2">
<li>Increase flow rate to maximum safe limit</li>
<li>Use fluids with high YP and LSYP</li>
<li>Continuous pipe rotation (> 100 RPM)</li>
<li>Periodic back-reaming</li>
<li>Use mechanical cleaning tools</li>
</ul>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); padding: 20px; border-radius: 12px; margin: 20px 0; color: white;">
<h3 style="color: #fbbf24;" class="font-bold mb-2">💡 Practical Rule</h3>
<p>In deviated wells > 45°, flow rate must be sufficient to achieve AV > 150 ft/min at the narrowest point of the annulus.</p>
</div>
</section>`,
          keyTerms: [
            { term: 'Annular Velocity', definition: 'Speed of fluid flow in the space between pipe and hole wall' },
            { term: 'Slip Velocity', definition: 'Rate at which cuttings fall in stationary fluid due to gravity' },
            { term: 'Cuttings Bed', definition: 'Accumulation of cuttings on the low side of hole in deviated wells' },
            { term: 'CCR', definition: 'Carrying Capacity Ratio - indicator of cuttings transport efficiency to surface' },
          ],
          practiceQuestion: {
            question: 'What is the annular velocity range for good hole cleaning?',
            options: ['60-90 ft/min', '90-120 ft/min', '120-180 ft/min', '> 200 ft/min'],
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
          title: 'الهيدروليكا وتدفق سلسلة الحفر - اليوم الرابع: ECD وإدارة الضغط',
          explanation: `<section>
<h2 style="color: #1e3a5f;" class="text-xl font-bold mb-4">🔷 كثافة الدوران المكافئة (ECD) وإدارة الضغط</h2>
<p class="mb-4">ECD هي الكثافة الفعلية التي يشعر بها قاع البئر أثناء الدوران. فهم وإدارة ECD ضروري لتجنب مشاكل فقدان الدوران وعدم استقرار جدار الحفرة.</p>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 مفهوم ECD</h3>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); padding: 20px; border-radius: 12px; margin: 20px 0; color: white;">
<h4 style="color: #fbbf24;" class="font-bold mb-2">المعادلة الأساسية:</h4>
<p class="font-mono text-center text-lg mb-2">ECD = ρ_mud + (ΔP_annulus / (0.052 × TVD))</p>
<ul class="pr-6 space-y-1">
<li>ECD = كثافة الدوران المكافئة (ppg)</li>
<li>ρ_mud = كثافة السائل الساكن (ppg)</li>
<li>ΔP_annulus = فقدان الضغط الحلقي (psi)</li>
<li>TVD = العمق الحقيقي الرأسي (ft)</li>
</ul>
</div>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">العوامل المؤثرة على ECD:</h4>
<ul class="list-disc pr-6 mb-4 space-y-2">
<li><strong>كثافة السائل:</strong> المكون الرئيسي</li>
<li><strong>الريولوجيا:</strong> PV, YP تحدد فقدان الضغط</li>
<li><strong>معدل التدفق:</strong> علاقة طردية مع ΔP</li>
<li><strong>هندسة الحفرة:</strong> الفراغ الحلقي الضيق يزيد ECD</li>
<li><strong>تركيز الفتات:</strong> يزيد الكثافة الفعلية</li>
</ul>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 حساب ECD التفصيلي</h3>

<div style="background: #f8fafc; padding: 16px; border-radius: 8px; margin: 16px 0;">
<h4 style="color: #1e3a5f;" class="font-bold mb-2">للتدفق الصفائحي في الفراغ الحلقي:</h4>
<p class="font-mono text-center mb-2">ΔP = (PV × L × V) / (60000 × (Dh-Dp)²) + (YP × L) / (200 × (Dh-Dp))</p>
</div>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">مثال حسابي:</h4>
<div style="background: #f0fdf4; padding: 16px; border-radius: 8px; border-right: 4px solid #22c55e; margin: 16px 0;">
<p class="mb-2"><strong>المعطيات:</strong></p>
<ul class="list-disc pr-6 space-y-1 mb-3">
<li>كثافة السائل = 12.0 ppg</li>
<li>TVD = 10,000 ft</li>
<li>فقدان الضغط الحلقي = 400 psi</li>
</ul>
<p class="font-mono">ECD = 12.0 + (400 / (0.052 × 10000))</p>
<p class="font-mono">ECD = 12.0 + 0.77 = <strong>12.77 ppg</strong></p>
</div>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 نافذة التشغيل الآمنة (Operating Window)</h3>

<table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 12px; border: 1px solid #ddd;">الحد</th>
<th style="padding: 12px; border: 1px solid #ddd;">الوصف</th>
<th style="padding: 12px; border: 1px solid #ddd;">النتيجة إذا تجاوز</th>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #ddd;">ضغط المسام (Pp)</td>
<td style="padding: 12px; border: 1px solid #ddd;">الحد الأدنى</td>
<td style="padding: 12px; border: 1px solid #ddd;">كيك (Well Control Event)</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;">ضغط الانهيار (Pc)</td>
<td style="padding: 12px; border: 1px solid #ddd;">الحد الأدنى للاستقرار</td>
<td style="padding: 12px; border: 1px solid #ddd;">انهيار جدار الحفرة</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #ddd;">ضغط التكسير (Pfrac)</td>
<td style="padding: 12px; border: 1px solid #ddd;">الحد الأقصى</td>
<td style="padding: 12px; border: 1px solid #ddd;">فقدان دوران</td>
</tr>
</table>

<div style="background: #fef3c7; padding: 16px; border-radius: 8px; border-right: 4px solid #f59e0b; margin: 16px 0;">
<h4 style="color: #92400e;" class="font-bold mb-2">⚠️ تحذير: النافذة الضيقة</h4>
<p>في بعض التشكيلات، الفرق بين Pp و Pfrac قد يكون < 1 ppg، مما يتطلب تقنيات متقدمة مثل MPD.</p>
</div>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 تأثير الرحلات على الضغط (Surge & Swab)</h3>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">Surge (عند الإنزال):</h4>
<ul class="list-disc pr-6 mb-4 space-y-2">
<li>زيادة في ضغط قاع البئر</li>
<li>قد يسبب تكسير التشكيل وفقدان دوران</li>
<li>يعتمد على سرعة الإنزال وهندسة الأنابيب</li>
</ul>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">Swab (عند الرفع):</h4>
<ul class="list-disc pr-6 mb-4 space-y-2">
<li>انخفاض في ضغط قاع البئر</li>
<li>قد يسبب تدفق من التشكيل (كيك)</li>
<li>أكثر خطورة من Surge</li>
</ul>

<div style="background: #f8fafc; padding: 16px; border-radius: 8px; margin: 16px 0;">
<h4 style="color: #1e3a5f;" class="font-bold mb-2">حساب Surge/Swab التقريبي:</h4>
<p class="font-mono text-center mb-2">ΔP_surge = K × ρ × V_pipe² / (Dh² - Dp²)</p>
<p class="text-sm text-center">حيث K = ثابت يعتمد على الهندسة (عادة 0.015-0.025)</p>
</div>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 استراتيجيات التحكم في ECD</h3>

<ol class="list-decimal pr-6 mb-4 space-y-3">
<li><strong>تحسين الريولوجيا:</strong> خفض PV و YP قدر الإمكان مع الحفاظ على التنظيف</li>
<li><strong>تحسين معدل التدفق:</strong> إيجاد التوازن بين التنظيف و ECD</li>
<li><strong>التحكم في المواد الصلبة:</strong> إزالة الفتات بكفاءة</li>
<li><strong>إدارة سرعة الرحلات:</strong> إنزال/رفع بطيء في المناطق الحساسة</li>
<li><strong>تقنيات MPD:</strong> للنوافذ الضيقة جداً</li>
</ol>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); padding: 20px; border-radius: 12px; margin: 20px 0; color: white;">
<h3 style="color: #fbbf24;" class="font-bold mb-2">💡 أفضل الممارسات</h3>
<p>احسب ECD قبل كل تغيير كبير في معدل التدفق أو خصائص السائل. تأكد من بقاء ECD ضمن النافذة الآمنة في جميع الظروف.</p>
</div>
</section>`,
          keyTerms: [
            { term: 'ECD', definition: 'كثافة الدوران المكافئة - الكثافة الفعلية عند قاع البئر أثناء الدوران' },
            { term: 'Surge Pressure', definition: 'زيادة الضغط الناتجة عن إنزال الأنابيب في البئر' },
            { term: 'Swab Pressure', definition: 'انخفاض الضغط الناتج عن رفع الأنابيب من البئر' },
            { term: 'نافذة التشغيل', definition: 'النطاق الآمن للضغط بين ضغط المسام وضغط التكسير' },
          ],
          practiceQuestion: {
            question: 'إذا كانت كثافة السائل 11.5 ppg و ECD = 12.2 ppg عند عمق 8000 ft، ما هو فقدان الضغط الحلقي التقريبي؟',
            options: ['200 psi', '290 psi', '400 psi', '520 psi'],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Hydraulics & Drillstring Flow - Day 4: ECD and Pressure Management',
          explanation: `<section>
<h2 style="color: #1e3a5f;" class="text-xl font-bold mb-4">🔷 Equivalent Circulating Density (ECD) and Pressure Management</h2>
<p class="mb-4">ECD is the effective density experienced at the bottom of the well during circulation. Understanding and managing ECD is essential to avoid lost circulation and wellbore instability problems.</p>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 ECD Concept</h3>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); padding: 20px; border-radius: 12px; margin: 20px 0; color: white;">
<h4 style="color: #fbbf24;" class="font-bold mb-2">Basic Equation:</h4>
<p class="font-mono text-center text-lg mb-2">ECD = ρ_mud + (ΔP_annulus / (0.052 × TVD))</p>
<ul class="pl-6 space-y-1">
<li>ECD = Equivalent Circulating Density (ppg)</li>
<li>ρ_mud = Static mud density (ppg)</li>
<li>ΔP_annulus = Annular pressure loss (psi)</li>
<li>TVD = True Vertical Depth (ft)</li>
</ul>
</div>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">Factors Affecting ECD:</h4>
<ul class="list-disc pl-6 mb-4 space-y-2">
<li><strong>Mud density:</strong> Main component</li>
<li><strong>Rheology:</strong> PV, YP determine pressure loss</li>
<li><strong>Flow rate:</strong> Direct relationship with ΔP</li>
<li><strong>Hole geometry:</strong> Narrow annulus increases ECD</li>
<li><strong>Cuttings concentration:</strong> Increases effective density</li>
</ul>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 Detailed ECD Calculation</h3>

<div style="background: #f8fafc; padding: 16px; border-radius: 8px; margin: 16px 0;">
<h4 style="color: #1e3a5f;" class="font-bold mb-2">For Laminar Flow in Annulus:</h4>
<p class="font-mono text-center mb-2">ΔP = (PV × L × V) / (60000 × (Dh-Dp)²) + (YP × L) / (200 × (Dh-Dp))</p>
</div>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">Calculation Example:</h4>
<div style="background: #f0fdf4; padding: 16px; border-radius: 8px; border-left: 4px solid #22c55e; margin: 16px 0;">
<p class="mb-2"><strong>Given:</strong></p>
<ul class="list-disc pl-6 space-y-1 mb-3">
<li>Mud density = 12.0 ppg</li>
<li>TVD = 10,000 ft</li>
<li>Annular pressure loss = 400 psi</li>
</ul>
<p class="font-mono">ECD = 12.0 + (400 / (0.052 × 10000))</p>
<p class="font-mono">ECD = 12.0 + 0.77 = <strong>12.77 ppg</strong></p>
</div>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 Safe Operating Window</h3>

<table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 12px; border: 1px solid #ddd;">Limit</th>
<th style="padding: 12px; border: 1px solid #ddd;">Description</th>
<th style="padding: 12px; border: 1px solid #ddd;">Result if Exceeded</th>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #ddd;">Pore Pressure (Pp)</td>
<td style="padding: 12px; border: 1px solid #ddd;">Minimum limit</td>
<td style="padding: 12px; border: 1px solid #ddd;">Kick (Well Control Event)</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;">Collapse Pressure (Pc)</td>
<td style="padding: 12px; border: 1px solid #ddd;">Minimum for stability</td>
<td style="padding: 12px; border: 1px solid #ddd;">Wellbore collapse</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #ddd;">Fracture Pressure (Pfrac)</td>
<td style="padding: 12px; border: 1px solid #ddd;">Maximum limit</td>
<td style="padding: 12px; border: 1px solid #ddd;">Lost circulation</td>
</tr>
</table>

<div style="background: #fef3c7; padding: 16px; border-radius: 8px; border-left: 4px solid #f59e0b; margin: 16px 0;">
<h4 style="color: #92400e;" class="font-bold mb-2">⚠️ Warning: Narrow Window</h4>
<p>In some formations, the difference between Pp and Pfrac may be < 1 ppg, requiring advanced techniques like MPD.</p>
</div>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 Trip Effects on Pressure (Surge & Swab)</h3>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">Surge (While Running In):</h4>
<ul class="list-disc pl-6 mb-4 space-y-2">
<li>Increase in bottomhole pressure</li>
<li>May cause formation fracture and lost circulation</li>
<li>Depends on running speed and pipe geometry</li>
</ul>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">Swab (While Pulling Out):</h4>
<ul class="list-disc pl-6 mb-4 space-y-2">
<li>Decrease in bottomhole pressure</li>
<li>May cause formation influx (kick)</li>
<li>More dangerous than surge</li>
</ul>

<div style="background: #f8fafc; padding: 16px; border-radius: 8px; margin: 16px 0;">
<h4 style="color: #1e3a5f;" class="font-bold mb-2">Approximate Surge/Swab Calculation:</h4>
<p class="font-mono text-center mb-2">ΔP_surge = K × ρ × V_pipe² / (Dh² - Dp²)</p>
<p class="text-sm text-center">where K = constant depending on geometry (typically 0.015-0.025)</p>
</div>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 ECD Control Strategies</h3>

<ol class="list-decimal pl-6 mb-4 space-y-3">
<li><strong>Optimize rheology:</strong> Reduce PV and YP as much as possible while maintaining cleaning</li>
<li><strong>Optimize flow rate:</strong> Find balance between cleaning and ECD</li>
<li><strong>Solids control:</strong> Remove cuttings efficiently</li>
<li><strong>Manage trip speeds:</strong> Slow tripping in sensitive zones</li>
<li><strong>MPD techniques:</strong> For very narrow windows</li>
</ol>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); padding: 20px; border-radius: 12px; margin: 20px 0; color: white;">
<h3 style="color: #fbbf24;" class="font-bold mb-2">💡 Best Practices</h3>
<p>Calculate ECD before any major change in flow rate or fluid properties. Ensure ECD stays within the safe window under all conditions.</p>
</div>
</section>`,
          keyTerms: [
            { term: 'ECD', definition: 'Equivalent Circulating Density - effective density at bottom of well during circulation' },
            { term: 'Surge Pressure', definition: 'Pressure increase caused by running pipe into the well' },
            { term: 'Swab Pressure', definition: 'Pressure decrease caused by pulling pipe out of well' },
            { term: 'Operating Window', definition: 'Safe pressure range between pore pressure and fracture pressure' },
          ],
          practiceQuestion: {
            question: 'If mud density is 11.5 ppg and ECD = 12.2 ppg at 8000 ft depth, what is the approximate annular pressure loss?',
            options: ['200 psi', '290 psi', '400 psi', '520 psi'],
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
          title: 'الهيدروليكا وتدفق سلسلة الحفر - اليوم الخامس: تحسين الهيدروليكا والتطبيقات العملية',
          explanation: `<section>
<h2 style="color: #1e3a5f;" class="text-xl font-bold mb-4">🔷 تحسين الهيدروليكا والتطبيقات العملية</h2>
<p class="mb-4">تحسين البرنامج الهيدروليكي يتطلب موازنة عدة عوامل متعارضة. الهدف هو تحقيق أفضل أداء حفر ممكن ضمن القيود التشغيلية.</p>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 طرق التحسين الهيدروليكي</h3>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">1. تعظيم القدرة عند الرأس (Maximize Bit HHP)</h4>
<div style="background: #f8fafc; padding: 16px; border-radius: 8px; margin: 16px 0;">
<p class="mb-2">الشرط: ΔP_bit = 65% من إجمالي ضغط المضخة</p>
<p class="mb-2">الاستخدام: التشكيلات الناعمة إلى المتوسطة</p>
<p class="font-mono">TFA_opt = Q × √(ρ / (12042 × 0.65 × Ps × Cd²))</p>
</div>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">2. تعظيم قوة النفث (Maximize Impact Force)</h4>
<div style="background: #f8fafc; padding: 16px; border-radius: 8px; margin: 16px 0;">
<p class="mb-2">الشرط: ΔP_bit = 48% من إجمالي ضغط المضخة</p>
<p class="mb-2">الاستخدام: التشكيلات الصلبة</p>
<p class="font-mono">TFA_opt = Q × √(ρ / (12042 × 0.48 × Ps × Cd²))</p>
</div>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">3. تعظيم سرعة النفث (Maximize Nozzle Velocity)</h4>
<div style="background: #f8fafc; padding: 16px; border-radius: 8px; margin: 16px 0;">
<p class="mb-2">استخدام أصغر فتحات ممكنة ضمن حدود الضغط</p>
<p class="mb-2">الاستخدام: تنظيف الرأس في التشكيلات اللزجة</p>
</div>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 اختيار حجم الفتحات (Nozzle Selection)</h3>

<table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 12px; border: 1px solid #ddd;">قطر الفتحة (1/32")</th>
<th style="padding: 12px; border: 1px solid #ddd;">المساحة (in²)</th>
<th style="padding: 12px; border: 1px solid #ddd;">الاستخدام النموذجي</th>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #ddd;">8</td>
<td style="padding: 12px; border: 1px solid #ddd;">0.0491</td>
<td style="padding: 12px; border: 1px solid #ddd;">سرعة عالية جداً</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;">10</td>
<td style="padding: 12px; border: 1px solid #ddd;">0.0767</td>
<td style="padding: 12px; border: 1px solid #ddd;">تشكيلات صلبة</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #ddd;">12</td>
<td style="padding: 12px; border: 1px solid #ddd;">0.1104</td>
<td style="padding: 12px; border: 1px solid #ddd;">متوسطة</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;">14</td>
<td style="padding: 12px; border: 1px solid #ddd;">0.1503</td>
<td style="padding: 12px; border: 1px solid #ddd;">تشكيلات ناعمة</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #ddd;">16</td>
<td style="padding: 12px; border: 1px solid #ddd;">0.1963</td>
<td style="padding: 12px; border: 1px solid #ddd;">تدفق عالي</td>
</tr>
</table>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 خطوات التحسين العملي</h3>

<ol class="list-decimal pr-6 mb-4 space-y-3">
<li><strong>تحديد القيود:</strong>
  <ul class="list-disc pr-6 mt-1">
    <li>أقصى ضغط للمضخة</li>
    <li>أقصى/أدنى معدل تدفق</li>
    <li>حدود ECD</li>
    <li>متطلبات التنظيف</li>
  </ul>
</li>
<li><strong>حساب فقدان الضغط في النظام:</strong> باستثناء الرأس</li>
<li><strong>تحديد ΔP المتاح للرأس:</strong> Ps - ΔP_system</li>
<li><strong>اختيار طريقة التحسين:</strong> حسب نوع التشكيل</li>
<li><strong>حساب TFA الأمثل</strong></li>
<li><strong>اختيار تركيبة الفتحات:</strong> أقرب مجموعة متاحة</li>
<li><strong>التحقق من جميع المعايير</strong></li>
</ol>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 مثال تطبيقي شامل</h3>

<div style="background: #f0fdf4; padding: 16px; border-radius: 8px; border-right: 4px solid #22c55e; margin: 16px 0;">
<h4 style="color: #166534;" class="font-bold mb-2">المعطيات:</h4>
<ul class="list-disc pr-6 space-y-1 mb-3">
<li>رأس قطر 8.5"، 3 فتحات</li>
<li>كثافة السائل = 11.0 ppg</li>
<li>معدل التدفق = 400 gpm</li>
<li>أقصى ضغط للمضخة = 3000 psi</li>
<li>فقدان ضغط النظام = 1200 psi</li>
</ul>

<h4 style="color: #166534;" class="font-bold mb-2">الحل (تعظيم HHP):</h4>
<ol class="list-decimal pr-6 space-y-1">
<li>ΔP_bit المستهدف = 0.65 × 3000 = 1950 psi</li>
<li>ΔP_bit المتاح = 3000 - 1200 = 1800 psi ✓</li>
<li>TFA = 400 × √(11 / (12042 × 0.95² × 1800)) = 0.297 in²</li>
<li>لـ 3 فتحات: مساحة كل فتحة = 0.099 in²</li>
<li>أقرب حجم = 12/32" (0.1104 in²)</li>
<li>TFA الفعلي = 3 × 0.1104 = 0.331 in²</li>
</ol>
</div>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 أدوات المحاكاة الهيدروليكية</h3>

<div style="background: #f8fafc; padding: 16px; border-radius: 8px; margin: 16px 0;">
<h4 style="color: #1e3a5f;" class="font-bold mb-2">البرامج الشائعة:</h4>
<ul class="list-disc pr-6 space-y-1">
<li>Schlumberger - Drilling Office</li>
<li>Halliburton - Landmark</li>
<li>Pegasus Vertex - HYDRA</li>
<li>OLGA (للتدفق متعدد الأطوار)</li>
</ul>
</div>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">مخرجات المحاكاة:</h4>
<ul class="list-disc pr-6 mb-4 space-y-2">
<li>ملف ECD على طول البئر</li>
<li>توزيع فقدان الضغط</li>
<li>سرعات التدفق في كل قسم</li>
<li>تأثير Surge/Swab</li>
<li>تحليل حساسية المتغيرات</li>
</ul>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); padding: 20px; border-radius: 12px; margin: 20px 0; color: white;">
<h3 style="color: #fbbf24;" class="font-bold mb-2">💡 نصيحة الخبراء</h3>
<p>لا تعتمد على التحسين النظري فقط. راقب أداء الحفر الفعلي وعدّل البرنامج حسب الحاجة. المعادلات تقريبية والظروف الميدانية قد تختلف.</p>
</div>

<div style="background: #fef3c7; padding: 16px; border-radius: 8px; border-right: 4px solid #f59e0b; margin: 16px 0;">
<h4 style="color: #92400e;" class="font-bold mb-2">⚠️ اعتبارات السلامة</h4>
<ul class="list-disc pr-6 space-y-1">
<li>لا تتجاوز 85% من ضغط المضخة المصنف</li>
<li>راقب تآكل الفتحات (يزيد TFA مع الوقت)</li>
<li>احسب ECD عند كل تغيير</li>
<li>احتفظ بهامش أمان في النافذة التشغيلية</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'تعظيم HHP', definition: 'طريقة تحسين تستهدف توجيه 65% من ضغط المضخة للرأس' },
            { term: 'تعظيم IF', definition: 'طريقة تحسين تستهدف توجيه 48% من ضغط المضخة للرأس لأقصى قوة نفث' },
            { term: 'TFA', definition: 'إجمالي مساحة الفتحات - المتغير الرئيسي في التحسين الهيدروليكي' },
            { term: 'المحاكاة الهيدروليكية', definition: 'استخدام برامج حاسوبية للتنبؤ بسلوك النظام الهيدروليكي' },
          ],
          practiceQuestion: {
            question: 'لتعظيم القدرة الهيدروليكية عند الرأس، ما نسبة ضغط المضخة التي يجب توجيهها للرأس؟',
            options: ['48%', '55%', '65%', '75%'],
            correctAnswer: 2,
          },
        },
        en: {
          title: 'Hydraulics & Drillstring Flow - Day 5: Hydraulic Optimization and Practical Applications',
          explanation: `<section>
<h2 style="color: #1e3a5f;" class="text-xl font-bold mb-4">🔷 Hydraulic Optimization and Practical Applications</h2>
<p class="mb-4">Optimizing the hydraulic program requires balancing several conflicting factors. The goal is to achieve the best possible drilling performance within operational constraints.</p>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 Hydraulic Optimization Methods</h3>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">1. Maximize Bit HHP</h4>
<div style="background: #f8fafc; padding: 16px; border-radius: 8px; margin: 16px 0;">
<p class="mb-2">Condition: ΔP_bit = 65% of total pump pressure</p>
<p class="mb-2">Use: Soft to medium formations</p>
<p class="font-mono">TFA_opt = Q × √(ρ / (12042 × 0.65 × Ps × Cd²))</p>
</div>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">2. Maximize Impact Force</h4>
<div style="background: #f8fafc; padding: 16px; border-radius: 8px; margin: 16px 0;">
<p class="mb-2">Condition: ΔP_bit = 48% of total pump pressure</p>
<p class="mb-2">Use: Hard formations</p>
<p class="font-mono">TFA_opt = Q × √(ρ / (12042 × 0.48 × Ps × Cd²))</p>
</div>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">3. Maximize Nozzle Velocity</h4>
<div style="background: #f8fafc; padding: 16px; border-radius: 8px; margin: 16px 0;">
<p class="mb-2">Use smallest possible nozzles within pressure limits</p>
<p class="mb-2">Use: Bit cleaning in sticky formations</p>
</div>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 Nozzle Selection</h3>

<table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 12px; border: 1px solid #ddd;">Nozzle Dia (1/32")</th>
<th style="padding: 12px; border: 1px solid #ddd;">Area (in²)</th>
<th style="padding: 12px; border: 1px solid #ddd;">Typical Use</th>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #ddd;">8</td>
<td style="padding: 12px; border: 1px solid #ddd;">0.0491</td>
<td style="padding: 12px; border: 1px solid #ddd;">Very high velocity</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;">10</td>
<td style="padding: 12px; border: 1px solid #ddd;">0.0767</td>
<td style="padding: 12px; border: 1px solid #ddd;">Hard formations</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #ddd;">12</td>
<td style="padding: 12px; border: 1px solid #ddd;">0.1104</td>
<td style="padding: 12px; border: 1px solid #ddd;">Medium</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;">14</td>
<td style="padding: 12px; border: 1px solid #ddd;">0.1503</td>
<td style="padding: 12px; border: 1px solid #ddd;">Soft formations</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #ddd;">16</td>
<td style="padding: 12px; border: 1px solid #ddd;">0.1963</td>
<td style="padding: 12px; border: 1px solid #ddd;">High flow</td>
</tr>
</table>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 Practical Optimization Steps</h3>

<ol class="list-decimal pl-6 mb-4 space-y-3">
<li><strong>Identify constraints:</strong>
  <ul class="list-disc pl-6 mt-1">
    <li>Maximum pump pressure</li>
    <li>Max/min flow rate</li>
    <li>ECD limits</li>
    <li>Cleaning requirements</li>
  </ul>
</li>
<li><strong>Calculate system pressure loss:</strong> Excluding bit</li>
<li><strong>Determine available ΔP for bit:</strong> Ps - ΔP_system</li>
<li><strong>Select optimization method:</strong> Based on formation type</li>
<li><strong>Calculate optimal TFA</strong></li>
<li><strong>Select nozzle combination:</strong> Closest available set</li>
<li><strong>Verify all criteria</strong></li>
</ol>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 Comprehensive Example</h3>

<div style="background: #f0fdf4; padding: 16px; border-radius: 8px; border-left: 4px solid #22c55e; margin: 16px 0;">
<h4 style="color: #166534;" class="font-bold mb-2">Given:</h4>
<ul class="list-disc pl-6 space-y-1 mb-3">
<li>8.5" bit with 3 nozzles</li>
<li>Mud density = 11.0 ppg</li>
<li>Flow rate = 400 gpm</li>
<li>Max pump pressure = 3000 psi</li>
<li>System pressure loss = 1200 psi</li>
</ul>

<h4 style="color: #166534;" class="font-bold mb-2">Solution (Maximize HHP):</h4>
<ol class="list-decimal pl-6 space-y-1">
<li>Target ΔP_bit = 0.65 × 3000 = 1950 psi</li>
<li>Available ΔP_bit = 3000 - 1200 = 1800 psi ✓</li>
<li>TFA = 400 × √(11 / (12042 × 0.95² × 1800)) = 0.297 in²</li>
<li>For 3 nozzles: Area per nozzle = 0.099 in²</li>
<li>Nearest size = 12/32" (0.1104 in²)</li>
<li>Actual TFA = 3 × 0.1104 = 0.331 in²</li>
</ol>
</div>

<h3 style="color: #ff6b35;" class="text-lg font-bold mb-3 mt-6">🔸 Hydraulic Simulation Tools</h3>

<div style="background: #f8fafc; padding: 16px; border-radius: 8px; margin: 16px 0;">
<h4 style="color: #1e3a5f;" class="font-bold mb-2">Common Software:</h4>
<ul class="list-disc pl-6 space-y-1">
<li>Schlumberger - Drilling Office</li>
<li>Halliburton - Landmark</li>
<li>Pegasus Vertex - HYDRA</li>
<li>OLGA (for multiphase flow)</li>
</ul>
</div>

<h4 style="color: #1e3a5f;" class="font-bold mb-2">Simulation Outputs:</h4>
<ul class="list-disc pl-6 mb-4 space-y-2">
<li>ECD profile along wellbore</li>
<li>Pressure loss distribution</li>
<li>Flow velocities in each section</li>
<li>Surge/Swab effects</li>
<li>Sensitivity analysis of variables</li>
</ul>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); padding: 20px; border-radius: 12px; margin: 20px 0; color: white;">
<h3 style="color: #fbbf24;" class="font-bold mb-2">💡 Expert Tip</h3>
<p>Do not rely on theoretical optimization alone. Monitor actual drilling performance and adjust the program as needed. Equations are approximate and field conditions may vary.</p>
</div>

<div style="background: #fef3c7; padding: 16px; border-radius: 8px; border-left: 4px solid #f59e0b; margin: 16px 0;">
<h4 style="color: #92400e;" class="font-bold mb-2">⚠️ Safety Considerations</h4>
<ul class="list-disc pl-6 space-y-1">
<li>Do not exceed 85% of rated pump pressure</li>
<li>Monitor nozzle wear (TFA increases over time)</li>
<li>Calculate ECD at every change</li>
<li>Maintain safety margin in operating window</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Maximize HHP', definition: 'Optimization method targeting 65% of pump pressure to bit' },
            { term: 'Maximize IF', definition: 'Optimization method targeting 48% of pump pressure to bit for maximum jet impact' },
            { term: 'TFA', definition: 'Total Flow Area - main variable in hydraulic optimization' },
            { term: 'Hydraulic Simulation', definition: 'Using computer software to predict hydraulic system behavior' },
          ],
          practiceQuestion: {
            question: 'To maximize bit hydraulic horsepower, what percentage of pump pressure should be directed to the bit?',
            options: ['48%', '55%', '65%', '75%'],
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
          title: 'اختبار الهيدروليكا وتدفق سلسلة الحفر',
          explanation: 'اختبر معلوماتك في هيدروليكا الحفر وتدفق السوائل',
          keyTerms: [],
        },
        en: {
          title: 'Hydraulics & Drillstring Flow Quiz',
          explanation: 'Test your knowledge on drilling hydraulics and fluid flow',
          keyTerms: [],
        },
      },
      quiz: {
        ar: [
          { question: 'أي جزء من النظام يستهلك أكبر نسبة من فقدان الضغط؟', options: ['سلسلة الحفر', 'الفراغ الحلقي', 'فتحات الرأس', 'معدات السطح'], correctAnswer: 2 },
          { question: 'ما هو رقم رينولدز الذي يحدد بداية التدفق المضطرب؟', options: ['Re > 2100', 'Re > 3000', 'Re > 4000', 'Re > 5000'], correctAnswer: 2 },
          { question: 'ما هي الكفاءة الحجمية النموذجية للمضخة الثلاثية؟', options: ['70-80%', '80-85%', '90-98%', '99-100%'], correctAnswer: 2 },
          { question: 'لتعظيم HHP عند الرأس، ما نسبة الضغط المستهدفة؟', options: ['48%', '55%', '65%', '75%'], correctAnswer: 2 },
          { question: 'ما هو نطاق السرعة الحلقية للتنظيف الجيد؟', options: ['60-90 ft/min', '90-120 ft/min', '120-180 ft/min', '> 200 ft/min'], correctAnswer: 2 },
          { question: 'ماذا يسمى تراكم الفتات في الآبار المائلة؟', options: ['التلبد', 'سرير الفتات', 'الترسب', 'التكتل'], correctAnswer: 1 },
          { question: 'أي زاوية تُعتبر الأصعب لتنظيف الحفرة؟', options: ['0-15°', '15-30°', '30-60°', '> 60°'], correctAnswer: 3 },
          { question: 'ما هو Swab؟', options: ['زيادة الضغط عند الإنزال', 'انخفاض الضغط عند الرفع', 'ضغط المضخة', 'ضغط التشكيل'], correctAnswer: 1 },
          { question: 'ما المعادلة الصحيحة لـ HHP؟', options: ['P × Q / 1714', 'P × Q / 1500', 'P / Q × 1714', 'P + Q / 1714'], correctAnswer: 0 },
          { question: 'ما القيمة المستهدفة لـ HSI في التشكيلات الناعمة؟', options: ['0.5 - 1.5', '1.5 - 2.5', '2.5 - 5.0', '5.0 - 8.0'], correctAnswer: 2 },
        ],
        en: [
          { question: 'Which part of the system consumes the highest pressure loss?', options: ['Drill String', 'Annulus', 'Bit Nozzles', 'Surface Equipment'], correctAnswer: 2 },
          { question: 'What Reynolds number marks the start of turbulent flow?', options: ['Re > 2100', 'Re > 3000', 'Re > 4000', 'Re > 5000'], correctAnswer: 2 },
          { question: 'What is the typical volumetric efficiency of a triplex pump?', options: ['70-80%', '80-85%', '90-98%', '99-100%'], correctAnswer: 2 },
          { question: 'To maximize bit HHP, what target pressure percentage is used?', options: ['48%', '55%', '65%', '75%'], correctAnswer: 2 },
          { question: 'What is the annular velocity range for good cleaning?', options: ['60-90 ft/min', '90-120 ft/min', '120-180 ft/min', '> 200 ft/min'], correctAnswer: 2 },
          { question: 'What is cuttings accumulation in deviated wells called?', options: ['Flocculation', 'Cuttings Bed', 'Sedimentation', 'Aggregation'], correctAnswer: 1 },
          { question: 'Which angle is considered hardest for hole cleaning?', options: ['0-15°', '15-30°', '30-60°', '> 60°'], correctAnswer: 3 },
          { question: 'What is Swab?', options: ['Pressure increase when running in', 'Pressure decrease when pulling out', 'Pump pressure', 'Formation pressure'], correctAnswer: 1 },
          { question: 'What is the correct HHP equation?', options: ['P × Q / 1714', 'P × Q / 1500', 'P / Q × 1714', 'P + Q / 1714'], correctAnswer: 0 },
          { question: 'What is the target HSI value for soft formations?', options: ['0.5 - 1.5', '1.5 - 2.5', '2.5 - 5.0', '5.0 - 8.0'], correctAnswer: 2 },
        ],
      },
    },
    {
      day: 7,
      type: 'project',
      content: {
        ar: {
          title: 'مشروع الهيدروليكا وتدفق سلسلة الحفر',
          explanation: 'طبق ما تعلمته عن هيدروليكا الحفر في هذا المشروع التطبيقي',
          keyTerms: [],
        },
        en: {
          title: 'Hydraulics & Drillstring Flow Project',
          explanation: 'Apply what you learned about drilling hydraulics in this practical project',
          keyTerms: [],
        },
      },
      project: {
        ar: {
          title: 'تصميم برنامج هيدروليكي لمقطع حفر',
          description: 'صمم برنامجاً هيدروليكياً كاملاً لحفر مقطع 8.5" على عمق 12,000 ft باستخدام سائل كثافته 13.0 ppg.',
          instructions: [
            'احسب معدل التدفق المطلوب لتحقيق سرعة حلقية 150 ft/min',
            'اختر حجم الفتحات الأمثل لتعظيم HHP',
            'احسب ECD وتأكد من بقائه ضمن النافذة الآمنة',
            'قدم توصيات للتعامل مع أي تحديات محتملة',
          ],
          submissionType: 'both',
        },
        en: {
          title: 'Design a Hydraulic Program for a Drilling Section',
          description: 'Design a complete hydraulic program for drilling an 8.5" section at 12,000 ft depth using 13.0 ppg mud.',
          instructions: [
            'Calculate required flow rate to achieve 150 ft/min annular velocity',
            'Select optimal nozzle sizes to maximize HHP',
            'Calculate ECD and ensure it stays within safe window',
            'Provide recommendations for handling potential challenges',
          ],
          submissionType: 'both',
        },
      },
    },
  ],
};
