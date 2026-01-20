import { WeeklyLesson } from '../weeklyContent';

export const hphtDrillingLesson: WeeklyLesson = {
  lessonId: 'hpht-drilling',
  days: [
    // ==================== Day 1: HPHT Fundamentals ====================
    {
      day: 1,
      type: 'learning',
      content: {
        ar: {
          title: 'HPHT Drilling - اليوم الأول: أساسيات الحفر في الضغط والحرارة العالية',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">🔷 تعريف بيئة HPHT</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="color: #f4a261; margin-bottom: 1rem;">📌 ما هي آبار HPHT؟</h3>
<p style="line-height: 1.8;">
<strong>HPHT (High Pressure High Temperature)</strong> تشير إلى الآبار التي تتجاوز فيها ظروف القاع العادية. هذه البيئات تفرض تحديات فريدة على المعدات والموائع والإجراءات، وتتطلب تخطيطاً دقيقاً وخبرة متخصصة. الحفر في HPHT ليس مجرد "حفر عميق" - إنه مجال متخصص يتطلب فهماً عميقاً للفيزياء والكيمياء تحت الظروف القاسية.
</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📊 تصنيفات HPHT</h3>

<div style="overflow-x: auto; margin-bottom: 1.5rem;">
<table style="width: 100%; border-collapse: collapse; font-size: 0.95rem;">
<thead>
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 1rem; text-align: center; border: 1px solid #334155;">التصنيف</th>
<th style="padding: 1rem; text-align: center; border: 1px solid #334155;">الضغط (psi)</th>
<th style="padding: 1rem; text-align: center; border: 1px solid #334155;">الحرارة (°F / °C)</th>
<th style="padding: 1rem; text-align: center; border: 1px solid #334155;">أمثلة</th>
</tr>
</thead>
<tbody>
<tr style="background: #fef3c7;">
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; text-align: center; font-weight: bold;">HPHT Tier I</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; text-align: center;">> 10,000</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; text-align: center;">> 300°F (150°C)</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">خليج المكسيك، بحر الشمال</td>
</tr>
<tr style="background: #fed7aa;">
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; text-align: center; font-weight: bold;">HPHT Tier II</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; text-align: center;">> 15,000</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; text-align: center;">> 350°F (177°C)</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">حقول عميقة</td>
</tr>
<tr style="background: #fecaca;">
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; text-align: center; font-weight: bold;">Extreme HPHT</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; text-align: center;">> 20,000</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; text-align: center;">> 400°F (204°C)</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">Ultra-deep reservoirs</td>
</tr>
<tr style="background: #fca5a5;">
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; text-align: center; font-weight: bold;">Ultra HPHT</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; text-align: center;">> 25,000</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; text-align: center;">> 450°F (232°C)</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">تحديات الحدود التقنية</td>
</tr>
</tbody>
</table>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">🌡️ تأثير الحرارة على عمليات الحفر</h3>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
<div style="background: #fef2f2; padding: 1.5rem; border-radius: 12px; border-left: 4px solid #dc2626;">
<h4 style="color: #991b1b; margin-bottom: 1rem;">🔥 تأثيرات الحرارة العالية</h4>
<ul style="margin: 0; padding-right: 1.25rem; line-height: 1.8;">
<li><strong>تدهور سوائل الحفر:</strong> تفكك البوليمرات والإضافات</li>
<li><strong>فشل الإلكترونيات:</strong> تلف MWD/LWD والحساسات</li>
<li><strong>تغير خصائص المطاط:</strong> تلف الأختام والـ Packers</li>
<li><strong>تمدد المعادن:</strong> تغير الأبعاد والتوافق</li>
<li><strong>تسريع التآكل:</strong> زيادة معدلات التآكل الكيميائي</li>
</ul>
</div>
<div style="background: #e3f2fd; padding: 1.5rem; border-radius: 12px; border-left: 4px solid #3498db;">
<h4 style="color: #3498db; margin-bottom: 1rem;">⚡ تأثيرات الضغط العالي</h4>
<ul style="margin: 0; padding-right: 1.25rem; line-height: 1.8;">
<li><strong>نافذة ضيقة:</strong> Mud Weight Window ضيقة جداً</li>
<li><strong>Well Control:</strong> تحديات السيطرة على Kick</li>
<li><strong>تصميم الـ Casing:</strong> سماكات أعلى، وزن أكبر</li>
<li><strong>BOP Rating:</strong> تصنيفات أعلى مطلوبة</li>
<li><strong>انضغاطية الطين:</strong> تغير الكثافة مع العمق</li>
</ul>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📐 Geothermal Gradient وتوقع الحرارة</h3>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<p style="margin-bottom: 1rem;">التدرج الحراري الجوفي يحدد زيادة الحرارة مع العمق:</p>

<div style="background: #fff3e0; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-family: monospace; margin: 0;">
<strong>المعادلة الأساسية:</strong><br>
BHT = Surface Temp + (Depth × Geothermal Gradient)<br><br>
<strong>مثال:</strong><br>
Surface = 70°F, Gradient = 1.5°F/100ft, Depth = 20,000 ft<br>
BHT = 70 + (20,000 × 0.015) = 370°F
</p>
</div>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-top: 1rem;">
<div style="background: #e8f5e9; padding: 1rem; border-radius: 8px; text-align: center;">
<strong style="color: #27ae60;">Normal Gradient</strong><br>
1.0-1.5°F/100ft
</div>
<div style="background: #fff3e0; padding: 1rem; border-radius: 8px; text-align: center;">
<strong style="color: #f39c12;">High Gradient</strong><br>
1.5-2.5°F/100ft
</div>
<div style="background: #fef2f2; padding: 1rem; border-radius: 8px; text-align: center;">
<strong style="color: #e74c3c;">Very High Gradient</strong><br>
> 2.5°F/100ft
</div>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">⚠️ التحديات الرئيسية في HPHT</h3>

<div style="background: #f3e5f5; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<ol style="margin: 0; padding-right: 1.25rem; line-height: 2;">
<li><strong>Narrow Pore-Frac Window:</strong> هامش ضيق بين ضغط المسام وضغط التكسير</li>
<li><strong>Equipment Limitations:</strong> حدود درجة حرارة المعدات</li>
<li><strong>Fluid Stability:</strong> ثبات سوائل الحفر في درجات حرارة عالية</li>
<li><strong>Cementing Challenges:</strong> ثبات الأسمنت وزمن التصلب</li>
<li><strong>Well Control Complexity:</strong> تعقيد السيطرة بسبب Gas Solubility</li>
<li><strong>Casing Design:</strong> متطلبات تصميم صارمة</li>
<li><strong>Formation Evaluation:</strong> تحديات القياسات في الحرارة العالية</li>
</ol>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">🌍 مناطق HPHT الرئيسية في العالم</h3>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin-bottom: 1.5rem;">
<div style="background: #e0f2f1; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #00897b; margin-bottom: 0.5rem;">🇺🇸 خليج المكسيك</h4>
<p style="font-size: 0.9rem;">Ultra-deep water, pressures > 20,000 psi</p>
</div>
<div style="background: #e0f2f1; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #00897b; margin-bottom: 0.5rem;">🇬🇧 بحر الشمال</h4>
<p style="font-size: 0.9rem;">Central Graben, temperatures > 400°F</p>
</div>
<div style="background: #e0f2f1; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #00897b; margin-bottom: 0.5rem;">🇳🇬 غرب أفريقيا</h4>
<p style="font-size: 0.9rem;">Deep offshore Nigeria, Angola</p>
</div>
<div style="background: #e0f2f1; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #00897b; margin-bottom: 0.5rem;">🇦🇪 الخليج العربي</h4>
<p style="font-size: 0.9rem;">Deep gas reservoirs, high H2S</p>
</div>
</div>

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-top: 2rem;">
<h4 style="color: #ffd700; margin-bottom: 1rem;">💡 نصيحة للمهندس</h4>
<p style="margin: 0; line-height: 1.8;">
في تخطيط بئر HPHT، ابدأ من النهاية. حدد ظروف القاع المتوقعة أولاً، ثم صمم للخلف: ما هي المعدات والموائع والإجراءات التي ستتحمل هذه الظروف؟ أي تنازل في التصميم قد يؤدي لفشل كارثي.
</p>
</div>
</section>`,
          keyTerms: [
            { term: 'HPHT', definition: 'High Pressure High Temperature - آبار تتجاوز 10,000 psi و 300°F' },
            { term: 'Geothermal Gradient', definition: 'معدل زيادة درجة الحرارة مع العمق، عادة 1-2°F/100ft' },
            { term: 'Pore-Frac Window', definition: 'الفرق بين ضغط المسام وضغط التكسير، يحدد نطاق كثافة الطين المسموح' },
            { term: 'BHT', definition: 'Bottom Hole Temperature - درجة حرارة قاع البئر' },
          ],
          practiceQuestion: {
            question: 'ما هو الحد الأدنى لدرجة الحرارة لتصنيف البئر كـ HPHT Tier I؟',
            options: [
              '250°F (121°C)',
              '300°F (150°C)',
              '350°F (177°C)',
              '400°F (204°C)'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'HPHT Drilling - Day 1: Fundamentals of High Pressure High Temperature Drilling',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">🔷 HPHT Environment Definition</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="color: #f4a261; margin-bottom: 1rem;">📌 What are HPHT Wells?</h3>
<p style="line-height: 1.8;">
<strong>HPHT (High Pressure High Temperature)</strong> refers to wells where bottomhole conditions exceed normal ranges. These environments impose unique challenges on equipment, fluids, and procedures, requiring careful planning and specialized expertise. HPHT drilling is not just "deep drilling" - it's a specialized field requiring deep understanding of physics and chemistry under extreme conditions.
</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📊 HPHT Classifications</h3>

<div style="overflow-x: auto; margin-bottom: 1.5rem;">
<table style="width: 100%; border-collapse: collapse; font-size: 0.95rem;">
<thead>
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 1rem; text-align: center; border: 1px solid #334155;">Classification</th>
<th style="padding: 1rem; text-align: center; border: 1px solid #334155;">Pressure (psi)</th>
<th style="padding: 1rem; text-align: center; border: 1px solid #334155;">Temperature (°F / °C)</th>
<th style="padding: 1rem; text-align: center; border: 1px solid #334155;">Examples</th>
</tr>
</thead>
<tbody>
<tr style="background: #fef3c7;">
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; text-align: center; font-weight: bold;">HPHT Tier I</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; text-align: center;">> 10,000</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; text-align: center;">> 300°F (150°C)</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">Gulf of Mexico, North Sea</td>
</tr>
<tr style="background: #fed7aa;">
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; text-align: center; font-weight: bold;">HPHT Tier II</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; text-align: center;">> 15,000</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; text-align: center;">> 350°F (177°C)</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">Deep fields</td>
</tr>
<tr style="background: #fecaca;">
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; text-align: center; font-weight: bold;">Extreme HPHT</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; text-align: center;">> 20,000</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; text-align: center;">> 400°F (204°C)</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">Ultra-deep reservoirs</td>
</tr>
<tr style="background: #fca5a5;">
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; text-align: center; font-weight: bold;">Ultra HPHT</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; text-align: center;">> 25,000</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; text-align: center;">> 450°F (232°C)</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">Technical frontier challenges</td>
</tr>
</tbody>
</table>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">🌡️ Temperature Effects on Drilling Operations</h3>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
<div style="background: #fef2f2; padding: 1.5rem; border-radius: 12px; border-left: 4px solid #dc2626;">
<h4 style="color: #991b1b; margin-bottom: 1rem;">🔥 High Temperature Effects</h4>
<ul style="margin: 0; padding-left: 1.25rem; line-height: 1.8;">
<li><strong>Fluid Degradation:</strong> Polymer and additive breakdown</li>
<li><strong>Electronics Failure:</strong> MWD/LWD and sensor damage</li>
<li><strong>Rubber Properties:</strong> Seal and Packer degradation</li>
<li><strong>Metal Expansion:</strong> Dimension and fit changes</li>
<li><strong>Accelerated Corrosion:</strong> Increased chemical corrosion rates</li>
</ul>
</div>
<div style="background: #e3f2fd; padding: 1.5rem; border-radius: 12px; border-left: 4px solid #3498db;">
<h4 style="color: #3498db; margin-bottom: 1rem;">⚡ High Pressure Effects</h4>
<ul style="margin: 0; padding-left: 1.25rem; line-height: 1.8;">
<li><strong>Narrow Window:</strong> Very tight Mud Weight Window</li>
<li><strong>Well Control:</strong> Kick control challenges</li>
<li><strong>Casing Design:</strong> Higher wall thickness, greater weight</li>
<li><strong>BOP Rating:</strong> Higher ratings required</li>
<li><strong>Mud Compressibility:</strong> Density change with depth</li>
</ul>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📐 Geothermal Gradient and Temperature Prediction</h3>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<p style="margin-bottom: 1rem;">The geothermal gradient determines temperature increase with depth:</p>

<div style="background: #fff3e0; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-family: monospace; margin: 0;">
<strong>Basic Equation:</strong><br>
BHT = Surface Temp + (Depth × Geothermal Gradient)<br><br>
<strong>Example:</strong><br>
Surface = 70°F, Gradient = 1.5°F/100ft, Depth = 20,000 ft<br>
BHT = 70 + (20,000 × 0.015) = 370°F
</p>
</div>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-top: 1rem;">
<div style="background: #e8f5e9; padding: 1rem; border-radius: 8px; text-align: center;">
<strong style="color: #27ae60;">Normal Gradient</strong><br>
1.0-1.5°F/100ft
</div>
<div style="background: #fff3e0; padding: 1rem; border-radius: 8px; text-align: center;">
<strong style="color: #f39c12;">High Gradient</strong><br>
1.5-2.5°F/100ft
</div>
<div style="background: #fef2f2; padding: 1rem; border-radius: 8px; text-align: center;">
<strong style="color: #e74c3c;">Very High Gradient</strong><br>
> 2.5°F/100ft
</div>
</div>
</div>

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-top: 2rem;">
<h4 style="color: #ffd700; margin-bottom: 1rem;">💡 Engineer's Tip</h4>
<p style="margin: 0; line-height: 1.8;">
In HPHT well planning, start from the end. Define expected bottomhole conditions first, then design backwards: what equipment, fluids, and procedures will withstand these conditions? Any design compromise may lead to catastrophic failure.
</p>
</div>
</section>`,
          keyTerms: [
            { term: 'HPHT', definition: 'High Pressure High Temperature - wells exceeding 10,000 psi and 300°F' },
            { term: 'Geothermal Gradient', definition: 'Rate of temperature increase with depth, typically 1-2°F/100ft' },
            { term: 'Pore-Frac Window', definition: 'Difference between pore pressure and fracture pressure, defines allowable mud weight range' },
            { term: 'BHT', definition: 'Bottom Hole Temperature - temperature at the bottom of the well' },
          ],
          practiceQuestion: {
            question: 'What is the minimum temperature threshold for HPHT Tier I classification?',
            options: [
              '250°F (121°C)',
              '300°F (150°C)',
              '350°F (177°C)',
              '400°F (204°C)'
            ],
            correctAnswer: 1,
          },
        },
      },
    },

    // ==================== Day 2: HPHT Drilling Fluids ====================
    {
      day: 2,
      type: 'learning',
      content: {
        ar: {
          title: 'HPHT Drilling - اليوم الثاني: سوائل الحفر في بيئة HPHT',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">🔷 تحديات سوائل الحفر في HPHT</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="color: #f4a261; margin-bottom: 1rem;">📌 لماذا الموائع حرجة في HPHT؟</h3>
<p style="line-height: 1.8;">
سوائل الحفر في بيئة HPHT تواجه ظروفاً قاسية تؤثر على خصائصها الريولوجية والكيميائية. الحرارة العالية تفكك البوليمرات، والضغط العالي يغير الكثافة، والمزيج من الاثنين يمكن أن يحول سائل حفر فعال إلى مادة غير قادرة على أداء وظائفها.
</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">🌡️ تأثير الحرارة على الخصائص الريولوجية</h3>

<div style="background: #fef2f2; padding: 1.5rem; border-radius: 12px; border-left: 4px solid #dc2626; margin-bottom: 1.5rem;">
<h4 style="color: #991b1b; margin-bottom: 1rem;">التغيرات الريولوجية مع الحرارة</h4>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
<div style="background: white; padding: 1rem; border-radius: 8px;">
<h5 style="color: #dc2626; margin-bottom: 0.5rem;">📉 انخفاض اللزوجة</h5>
<p style="font-size: 0.9rem; margin: 0;">PV و YP ينخفضان مع ارتفاع الحرارة مما يؤثر على تنظيف الحفرة وحمل القطع</p>
</div>
<div style="background: white; padding: 1rem; border-radius: 8px;">
<h5 style="color: #dc2626; margin-bottom: 0.5rem;">⚗️ تفكك البوليمرات</h5>
<p style="font-size: 0.9rem; margin: 0;">Xanthan Gum و PAC تتحلل فوق 300°F، Starch فوق 250°F</p>
</div>
<div style="background: white; padding: 1rem; border-radius: 8px;">
<h5 style="color: #dc2626; margin-bottom: 0.5rem;">🔄 تغير Gel Strength</h5>
<p style="font-size: 0.9rem; margin: 0;">قد تزداد أو تنخفض حسب نوع الطين والإضافات</p>
</div>
<div style="background: white; padding: 1rem; border-radius: 8px;">
<h5 style="color: #dc2626; margin-bottom: 0.5rem;">💧 زيادة Fluid Loss</h5>
<p style="font-size: 0.9rem; margin: 0;">تدهور Filter Cake مع الحرارة</p>
</div>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">🛢️ أنواع سوائل HPHT</h3>

<div style="overflow-x: auto; margin-bottom: 1.5rem;">
<table style="width: 100%; border-collapse: collapse; font-size: 0.95rem;">
<thead>
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 1rem; text-align: right; border: 1px solid #334155;">نوع السائل</th>
<th style="padding: 1rem; text-align: center; border: 1px solid #334155;">حد الحرارة</th>
<th style="padding: 1rem; text-align: right; border: 1px solid #334155;">المميزات</th>
<th style="padding: 1rem; text-align: right; border: 1px solid #334155;">القيود</th>
</tr>
</thead>
<tbody>
<tr style="background: #f8fafc;">
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; font-weight: bold;">Oil-Based Mud (OBM)</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; text-align: center;">450°F+</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">ثبات عالي، تزييت ممتاز</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">تكلفة، بيئة، تقييم التكوين</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; font-weight: bold;">Synthetic-Based Mud</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; text-align: center;">500°F+</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">ثبات أعلى، صديق للبيئة نسبياً</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">تكلفة عالية جداً</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; font-weight: bold;">High-Temp WBM</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; text-align: center;">350-400°F</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">تكلفة أقل، صديق للبيئة</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">حدود حرارة، Shale Stability</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; font-weight: bold;">Formate Brines</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; text-align: center;">400°F+</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">صديق للبيئة، كثافة عالية</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">تكلفة عالية، توافق محدود</td>
</tr>
</tbody>
</table>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">⚗️ الإضافات المقاومة للحرارة</h3>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
<div style="background: #e8f5e9; padding: 1.5rem; border-radius: 12px; border-left: 4px solid #27ae60;">
<h4 style="color: #27ae60; margin-bottom: 1rem;">✅ إضافات HPHT الشائعة</h4>
<ul style="margin: 0; padding-right: 1.25rem; line-height: 1.8;">
<li><strong>AMPS Polymers:</strong> ثابتة حتى 400°F</li>
<li><strong>Sulfonated Polymers:</strong> مقاومة حرارية عالية</li>
<li><strong>Lignite/Lignosulfonate:</strong> للـ WBM حتى 350°F</li>
<li><strong>Gilsonite:</strong> للتحكم في Fluid Loss</li>
<li><strong>Calcium Carbonate:</strong> Weighting agent مستقر</li>
</ul>
</div>
<div style="background: #fff3e0; padding: 1.5rem; border-radius: 12px; border-left: 4px solid #f39c12;">
<h4 style="color: #f39c12; margin-bottom: 1rem;">⚠️ إضافات تجنبها في HPHT</h4>
<ul style="margin: 0; padding-right: 1.25rem; line-height: 1.8;">
<li><strong>Starch:</strong> يتحلل فوق 250°F</li>
<li><strong>Guar Gum:</strong> غير مستقر في الحرارة</li>
<li><strong>CMC العادي:</strong> يفقد فعاليته</li>
<li><strong>بعض أنواع البوليمرات:</strong> تتفكك وتفقد اللزوجة</li>
</ul>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📊 ECD Considerations في HPHT</h3>

<div style="background: #e3f2fd; padding: 1.5rem; border-radius: 12px; border-left: 4px solid #3498db; margin-bottom: 1.5rem;">
<h4 style="color: #3498db; margin-bottom: 1rem;">تأثير الحرارة والضغط على الكثافة</h4>
<p style="margin-bottom: 1rem;">في HPHT، كثافة الطين تتغير مع العمق بسبب:</p>

<ul style="margin: 0; padding-right: 1.25rem; line-height: 1.8;">
<li><strong>Thermal Expansion:</strong> الحرارة تقلل الكثافة (OBM أكثر تأثراً)</li>
<li><strong>Pressure Compression:</strong> الضغط يزيد الكثافة</li>
<li><strong>Net Effect:</strong> يعتمد على نوع السائل وظروف البئر</li>
</ul>

<div style="background: white; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
<p style="font-family: monospace; margin: 0;">
<strong>مثال: OBM في 20,000 ft</strong><br>
Surface MW = 15.0 ppg<br>
At BH (400°F, 18,000 psi): MW قد يكون 14.2-14.6 ppg<br>
<span style="color: #e74c3c;">⚠️ الفرق يؤثر على التحكم بالبئر!</span>
</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">🧪 اختبارات السوائل لـ HPHT</h3>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<ul style="margin: 0; padding-right: 1.25rem; line-height: 2;">
<li><strong>Hot Roll Test:</strong> تسخين العينة لـ 16 ساعة ثم قياس الخصائص</li>
<li><strong>Static Aging:</strong> اختبار الثبات تحت ظروف ساكنة</li>
<li><strong>HTHP Filter Press:</strong> قياس Fluid Loss في حرارة وضغط عالي</li>
<li><strong>Rheology at Temperature:</strong> قياس PV/YP في درجات حرارة مختلفة</li>
<li><strong>Electrical Stability (OBM):</strong> اختبار استقرار المستحلب</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-top: 2rem;">
<h4 style="color: #ffd700; margin-bottom: 1rem;">💡 نصيحة للمهندس</h4>
<p style="margin: 0; line-height: 1.8;">
في HPHT، لا تعتمد على خصائص الطين المقاسة على السطح. استخدم برامج المحاكاة لتقدير الخصائص عند ظروف القاع، وأجرِ اختبارات Hot Roll قبل كل قسم حرج. الفرق بين السطح والقاع يمكن أن يكون كبيراً جداً.
</p>
</div>
</section>`,
          keyTerms: [
            { term: 'Hot Roll Test', definition: 'اختبار تسخين عينة الطين لـ 16 ساعة لمحاكاة ظروف البئر' },
            { term: 'AMPS Polymers', definition: 'بوليمرات مقاومة للحرارة تستخدم في سوائل HPHT' },
            { term: 'Thermal Expansion', definition: 'انخفاض كثافة السائل مع ارتفاع الحرارة' },
            { term: 'Formate Brines', definition: 'محاليل ملحية صديقة للبيئة تستخدم في HPHT' },
          ],
          practiceQuestion: {
            question: 'أي نوع من سوائل الحفر له أعلى ثبات حراري؟',
            options: [
              'Water-Based Mud مع Starch',
              'Oil-Based Mud',
              'Synthetic-Based Mud',
              'Guar-Based Fluid'
            ],
            correctAnswer: 2,
          },
        },
        en: {
          title: 'HPHT Drilling - Day 2: Drilling Fluids in HPHT Environment',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">🔷 HPHT Drilling Fluid Challenges</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="color: #f4a261; margin-bottom: 1rem;">📌 Why Are Fluids Critical in HPHT?</h3>
<p style="line-height: 1.8;">
Drilling fluids in HPHT environments face extreme conditions that affect their rheological and chemical properties. High temperature breaks down polymers, high pressure changes density, and the combination of both can turn an effective drilling fluid into a material unable to perform its functions.
</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">🌡️ Temperature Effect on Rheological Properties</h3>

<div style="background: #fef2f2; padding: 1.5rem; border-radius: 12px; border-left: 4px solid #dc2626; margin-bottom: 1.5rem;">
<h4 style="color: #991b1b; margin-bottom: 1rem;">Rheological Changes with Temperature</h4>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
<div style="background: white; padding: 1rem; border-radius: 8px;">
<h5 style="color: #dc2626; margin-bottom: 0.5rem;">📉 Viscosity Decrease</h5>
<p style="font-size: 0.9rem; margin: 0;">PV and YP decrease with temperature rise affecting hole cleaning and cuttings transport</p>
</div>
<div style="background: white; padding: 1rem; border-radius: 8px;">
<h5 style="color: #dc2626; margin-bottom: 0.5rem;">⚗️ Polymer Degradation</h5>
<p style="font-size: 0.9rem; margin: 0;">Xanthan Gum and PAC degrade above 300°F, Starch above 250°F</p>
</div>
<div style="background: white; padding: 1rem; border-radius: 8px;">
<h5 style="color: #dc2626; margin-bottom: 0.5rem;">🔄 Gel Strength Changes</h5>
<p style="font-size: 0.9rem; margin: 0;">May increase or decrease depending on mud type and additives</p>
</div>
<div style="background: white; padding: 1rem; border-radius: 8px;">
<h5 style="color: #dc2626; margin-bottom: 0.5rem;">💧 Increased Fluid Loss</h5>
<p style="font-size: 0.9rem; margin: 0;">Filter Cake deterioration with temperature</p>
</div>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">🛢️ HPHT Fluid Types</h3>

<div style="overflow-x: auto; margin-bottom: 1.5rem;">
<table style="width: 100%; border-collapse: collapse; font-size: 0.95rem;">
<thead>
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 1rem; text-align: left; border: 1px solid #334155;">Fluid Type</th>
<th style="padding: 1rem; text-align: center; border: 1px solid #334155;">Temp Limit</th>
<th style="padding: 1rem; text-align: left; border: 1px solid #334155;">Advantages</th>
<th style="padding: 1rem; text-align: left; border: 1px solid #334155;">Limitations</th>
</tr>
</thead>
<tbody>
<tr style="background: #f8fafc;">
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; font-weight: bold;">Oil-Based Mud (OBM)</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; text-align: center;">450°F+</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">High stability, excellent lubricity</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">Cost, environment, formation evaluation</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; font-weight: bold;">Synthetic-Based Mud</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; text-align: center;">500°F+</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">Higher stability, relatively eco-friendly</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">Very high cost</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; font-weight: bold;">High-Temp WBM</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; text-align: center;">350-400°F</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">Lower cost, eco-friendly</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">Temperature limits, Shale Stability</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; font-weight: bold;">Formate Brines</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0; text-align: center;">400°F+</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">Eco-friendly, high density</td>
<td style="padding: 0.75rem; border: 1px solid #e2e8f0;">High cost, limited compatibility</td>
</tr>
</tbody>
</table>
</div>

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-top: 2rem;">
<h4 style="color: #ffd700; margin-bottom: 1rem;">💡 Engineer's Tip</h4>
<p style="margin: 0; line-height: 1.8;">
In HPHT, don't rely on mud properties measured at surface. Use simulation software to estimate properties at downhole conditions, and conduct Hot Roll tests before every critical section. The difference between surface and bottom can be very significant.
</p>
</div>
</section>`,
          keyTerms: [
            { term: 'Hot Roll Test', definition: 'Mud sample heating test for 16 hours to simulate well conditions' },
            { term: 'AMPS Polymers', definition: 'Heat-resistant polymers used in HPHT fluids' },
            { term: 'Thermal Expansion', definition: 'Fluid density decrease with temperature rise' },
            { term: 'Formate Brines', definition: 'Eco-friendly salt solutions used in HPHT' },
          ],
          practiceQuestion: {
            question: 'Which type of drilling fluid has the highest thermal stability?',
            options: [
              'Water-Based Mud with Starch',
              'Oil-Based Mud',
              'Synthetic-Based Mud',
              'Guar-Based Fluid'
            ],
            correctAnswer: 2,
          },
        },
      },
    },

    // ==================== Day 3: HPHT Well Control ====================
    {
      day: 3,
      type: 'learning',
      content: {
        ar: {
          title: 'HPHT Drilling - اليوم الثالث: التحكم بالبئر في بيئة HPHT',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">🔷 تحديات التحكم بالبئر في HPHT</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="color: #f4a261; margin-bottom: 1rem;">📌 لماذا Well Control أصعب في HPHT؟</h3>
<p style="line-height: 1.8;">
التحكم بالبئر في بيئة HPHT أكثر تعقيداً بسبب عدة عوامل: ذوبانية الغاز العالية في الطين، الضغوط الهائلة، نافذة الطين الضيقة، وتأثير الحرارة على خصائص السوائل. فهم هذه التحديات واتخاذ الاحتياطات المناسبة أمر حيوي لسلامة العمليات.
</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">💨 Gas Solubility في HPHT</h3>

<div style="background: #fef2f2; padding: 1.5rem; border-radius: 12px; border-left: 4px solid #dc2626; margin-bottom: 1.5rem;">
<h4 style="color: #991b1b; margin-bottom: 1rem;">⚠️ خطر الغاز المذاب</h4>
<p style="margin-bottom: 1rem;">في ضغوط وحرارات HPHT، يذوب الغاز (خاصة في OBM) بكميات كبيرة:</p>

<ul style="margin: 0; padding-right: 1.25rem; line-height: 1.8;">
<li><strong>المشكلة:</strong> الغاز المذاب لا يُكتشف بسهولة - لا Pit Gain واضح</li>
<li><strong>الخطر:</strong> عند الصعود، ينفصل الغاز ويتمدد بسرعة هائلة</li>
<li><strong>النتيجة:</strong> Kick غير متوقع بالقرب من السطح</li>
</ul>

<div style="background: white; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
<p style="font-family: monospace; margin: 0; color: #991b1b;">
<strong>مثال خطير:</strong><br>
غاز مذاب في 18,000 psi → عند 3,000 psi ينفصل<br>
حجم الغاز يزيد 6× في وقت قصير!
</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">🛡️ متطلبات BOP لـ HPHT</h3>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem;">
<div style="background: #e8f5e9; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #27ae60; margin-bottom: 0.75rem;">✅ تصنيفات BOP المطلوبة</h4>
<ul style="margin: 0; padding-right: 1.25rem; line-height: 1.8;">
<li><strong>10K:</strong> للآبار حتى 10,000 psi</li>
<li><strong>15K:</strong> للآبار حتى 15,000 psi</li>
<li><strong>20K:</strong> للآبار Ultra-HPHT</li>
<li><strong>Temperature Rating:</strong> يجب أن يتحمل BHT</li>
</ul>
</div>
<div style="background: #fff3e0; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #f39c12; margin-bottom: 0.75rem;">⚙️ اعتبارات إضافية</h4>
<ul style="margin: 0; padding-right: 1.25rem; line-height: 1.8;">
<li><strong>Elastomers:</strong> مواد مقاومة للحرارة (HNBR, FFKM)</li>
<li><strong>Redundancy:</strong> نظامان مستقلان للتحكم</li>
<li><strong>Testing:</strong> اختبارات متكررة أكثر</li>
<li><strong>Maintenance:</strong> صيانة مكثفة</li>
</ul>
</div>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📊 Kick Detection في HPHT</h3>

<div style="background: #e3f2fd; padding: 1.5rem; border-radius: 12px; border-left: 4px solid #3498db; margin-bottom: 1.5rem;">
<h4 style="color: #3498db; margin-bottom: 1rem;">مؤشرات Kick المبكرة</h4>

<ol style="margin: 0; padding-right: 1.25rem; line-height: 2;">
<li><strong>Pit Volume Increase:</strong> أول مؤشر تقليدي (قد يكون متأخراً في OBM)</li>
<li><strong>Flow Rate Increase:</strong> زيادة التدفق من الـ Annulus</li>
<li><strong>Drilling Break:</strong> زيادة مفاجئة في ROP</li>
<li><strong>Connection Gas:</strong> غاز عند كل Connection</li>
<li><strong>Background Gas Increase:</strong> ارتفاع مستوى الغاز المستمر</li>
<li><strong>Pump Pressure Decrease:</strong> في بعض الحالات</li>
</ol>

<div style="background: white; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
<p style="margin: 0; color: #1e3a5f;"><strong>⚠️ في OBM:</strong> راقب Pit Volume بحذر شديد - الغاز المذاب قد لا يُظهر Pit Gain!</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">⚡ طرق Well Kill في HPHT</h3>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
<div style="background: #f0f9ff; padding: 1.5rem; border-radius: 12px; border-left: 4px solid #0369a1;">
<h4 style="color: #0369a1; margin-bottom: 1rem;">🔵 Driller's Method</h4>
<p style="line-height: 1.7; font-size: 0.95rem;">
<strong>الميزة:</strong> بدء سريع، لا انتظار لحسابات Kill Mud<br>
<strong>العيب:</strong> ضغط أعلى على Casing أثناء الدورة الأولى<br>
<strong>في HPHT:</strong> قد يكون مفضلاً لتقليل وقت التعرض للضغط
</p>
</div>
<div style="background: #ecfdf5; padding: 1.5rem; border-radius: 12px; border-left: 4px solid #059669;">
<h4 style="color: #059669; margin-bottom: 1rem;">🟢 Wait & Weight</h4>
<p style="line-height: 1.7; font-size: 0.95rem;">
<strong>الميزة:</strong> ضغط أقل على Casing<br>
<strong>العيب:</strong> انتظار لتجهيز Kill Mud<br>
<strong>في HPHT:</strong> مفضل إذا كان Casing margin ضيقاً
</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📐 حسابات خاصة بـ HPHT</h3>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #1e3a5f; margin-bottom: 1rem;">تصحيح Mud Weight للحرارة والضغط</h4>
<p style="margin-bottom: 1rem;">في HPHT، يجب تعديل حسابات Kill Mud للتعويض عن:</p>

<ul style="margin: 0; padding-right: 1.25rem; line-height: 2;">
<li><strong>Thermal Expansion:</strong> الطين يخف عند القاع</li>
<li><strong>Pressure Compression:</strong> الطين يزداد كثافة قليلاً</li>
<li><strong>Gas Compressibility:</strong> سلوك الغاز غير مثالي (Real Gas)</li>
<li><strong>Gas Solubility:</strong> كمية الغاز المذاب في الطين</li>
</ul>

<div style="background: #fff3e0; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
<p style="margin: 0;">
<strong>💡 نصيحة:</strong> استخدم برامج المحاكاة لحساب Kill Mud Weight بدقة - الحسابات اليدوية قد لا تكون كافية في HPHT.
</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">🎯 احتياطات خاصة</h3>

<div style="background: #e0f2f1; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<ul style="margin: 0; padding-right: 1.25rem; line-height: 2;">
<li><strong>Choke Size:</strong> استخدم Chokes أكبر لتقليل الاحتكاك</li>
<li><strong>Degasser:</strong> تأكد من كفاءة نظام إزالة الغاز</li>
<li><strong>Mud Gas Separator:</strong> سعة كافية للتعامل مع حجم الغاز المتمدد</li>
<li><strong>Crew Training:</strong> تدريب مكثف على Well Control في HPHT</li>
<li><strong>Drills:</strong> تمارين متكررة على سيناريوهات HPHT</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-top: 2rem;">
<h4 style="color: #ffd700; margin-bottom: 1rem;">💡 نصيحة للمهندس</h4>
<p style="margin: 0; line-height: 1.8;">
في HPHT مع OBM، افترض دائماً وجود غاز مذاب حتى لو لم تظهر علامات واضحة. عند السحب أو التدوير، راقب عن كثب - الغاز قد ينفصل فجأة. Slow Pump Rates أثناء Kill تعطي وقتاً أكثر للتحكم.
</p>
</div>
</section>`,
          keyTerms: [
            { term: 'Gas Solubility', definition: 'قابلية ذوبان الغاز في سائل الحفر، تزداد مع الضغط والحرارة' },
            { term: '15K BOP', definition: 'BOP مصنف لـ 15,000 psi، مطلوب لآبار HPHT Tier II' },
            { term: 'Real Gas Behavior', definition: 'سلوك الغاز الحقيقي في HPHT يختلف عن قانون الغاز المثالي' },
            { term: 'HNBR', definition: 'Hydrogenated Nitrile Rubber - مطاط مقاوم للحرارة للأختام' },
          ],
          practiceQuestion: {
            question: 'ما هو الخطر الرئيسي للغاز المذاب في OBM أثناء HPHT drilling؟',
            options: [
              'يزيد من كثافة الطين',
              'لا يُكتشف بسهولة ثم يتمدد بسرعة عند الصعود',
              'يقلل من لزوجة الطين',
              'يحسن تنظيف الحفرة'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'HPHT Drilling - Day 3: Well Control in HPHT Environment',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">🔷 HPHT Well Control Challenges</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="color: #f4a261; margin-bottom: 1rem;">📌 Why is Well Control Harder in HPHT?</h3>
<p style="line-height: 1.8;">
Well control in HPHT environment is more complex due to several factors: high gas solubility in mud, enormous pressures, narrow mud window, and temperature effects on fluid properties. Understanding these challenges and taking appropriate precautions is vital for operational safety.
</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">💨 Gas Solubility in HPHT</h3>

<div style="background: #fef2f2; padding: 1.5rem; border-radius: 12px; border-left: 4px solid #dc2626; margin-bottom: 1.5rem;">
<h4 style="color: #991b1b; margin-bottom: 1rem;">⚠️ Dissolved Gas Hazard</h4>
<p style="margin-bottom: 1rem;">At HPHT pressures and temperatures, gas (especially in OBM) dissolves in large quantities:</p>

<ul style="margin: 0; padding-left: 1.25rem; line-height: 1.8;">
<li><strong>Problem:</strong> Dissolved gas is not easily detected - no clear Pit Gain</li>
<li><strong>Hazard:</strong> When ascending, gas separates and expands rapidly</li>
<li><strong>Result:</strong> Unexpected kick near surface</li>
</ul>

<div style="background: white; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
<p style="font-family: monospace; margin: 0; color: #991b1b;">
<strong>Dangerous Example:</strong><br>
Gas dissolved at 18,000 psi → separates at 3,000 psi<br>
Gas volume increases 6× in short time!
</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">🛡️ BOP Requirements for HPHT</h3>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem;">
<div style="background: #e8f5e9; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #27ae60; margin-bottom: 0.75rem;">✅ Required BOP Ratings</h4>
<ul style="margin: 0; padding-left: 1.25rem; line-height: 1.8;">
<li><strong>10K:</strong> For wells up to 10,000 psi</li>
<li><strong>15K:</strong> For wells up to 15,000 psi</li>
<li><strong>20K:</strong> For Ultra-HPHT wells</li>
<li><strong>Temperature Rating:</strong> Must withstand BHT</li>
</ul>
</div>
<div style="background: #fff3e0; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #f39c12; margin-bottom: 0.75rem;">⚙️ Additional Considerations</h4>
<ul style="margin: 0; padding-left: 1.25rem; line-height: 1.8;">
<li><strong>Elastomers:</strong> Heat-resistant materials (HNBR, FFKM)</li>
<li><strong>Redundancy:</strong> Two independent control systems</li>
<li><strong>Testing:</strong> More frequent testing</li>
<li><strong>Maintenance:</strong> Intensive maintenance</li>
</ul>
</div>
</div>
</div>

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-top: 2rem;">
<h4 style="color: #ffd700; margin-bottom: 1rem;">💡 Engineer's Tip</h4>
<p style="margin: 0; line-height: 1.8;">
In HPHT with OBM, always assume dissolved gas is present even without clear signs. During pulling or circulation, monitor closely - gas may separate suddenly. Slow Pump Rates during Kill give more time for control.
</p>
</div>
</section>`,
          keyTerms: [
            { term: 'Gas Solubility', definition: 'Gas dissolving capability in drilling fluid, increases with pressure and temperature' },
            { term: '15K BOP', definition: 'BOP rated for 15,000 psi, required for HPHT Tier II wells' },
            { term: 'Real Gas Behavior', definition: 'Real gas behavior in HPHT differs from ideal gas law' },
            { term: 'HNBR', definition: 'Hydrogenated Nitrile Rubber - heat-resistant rubber for seals' },
          ],
          practiceQuestion: {
            question: 'What is the main hazard of dissolved gas in OBM during HPHT drilling?',
            options: [
              'It increases mud density',
              'Not easily detected then expands rapidly when ascending',
              'It reduces mud viscosity',
              'It improves hole cleaning'
            ],
            correctAnswer: 1,
          },
        },
      },
    },

    // ==================== Day 4: HPHT Equipment and Casing ====================
    {
      day: 4,
      type: 'learning',
      content: {
        ar: {
          title: 'HPHT Drilling - اليوم الرابع: المعدات وتصميم الأغلفة',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">🔷 معدات HPHT والتحديات التقنية</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="color: #f4a261; margin-bottom: 1rem;">📌 متطلبات المعدات في HPHT</h3>
<p style="line-height: 1.8;">
المعدات في بيئة HPHT يجب أن تتحمل ظروفاً قاسية لفترات طويلة. الحرارة العالية تؤثر على الإلكترونيات والأختام والمواد المطاطية، بينما الضغط العالي يتطلب تصميمات أقوى وأثقل. اختيار المعدات المناسبة أمر حاسم للنجاح.
</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📡 MWD/LWD في HPHT</h3>

<div style="background: #fef2f2; padding: 1.5rem; border-radius: 12px; border-left: 4px solid #dc2626; margin-bottom: 1.5rem;">
<h4 style="color: #991b1b; margin-bottom: 1rem;">تحديات الإلكترونيات في الحرارة العالية</h4>

<div style="overflow-x: auto;">
<table style="width: 100%; border-collapse: collapse; font-size: 0.95rem;">
<thead>
<tr style="background: #991b1b; color: white;">
<th style="padding: 1rem; text-align: right; border: 1px solid #7f1d1d;">المكون</th>
<th style="padding: 1rem; text-align: center; border: 1px solid #7f1d1d;">حد الحرارة التقليدي</th>
<th style="padding: 1rem; text-align: center; border: 1px solid #7f1d1d;">حد HPHT</th>
</tr>
</thead>
<tbody>
<tr style="background: #fef2f2;">
<td style="padding: 0.75rem; border: 1px solid #fecaca;">Standard MWD</td>
<td style="padding: 0.75rem; border: 1px solid #fecaca; text-align: center;">300°F</td>
<td style="padding: 0.75rem; border: 1px solid #fecaca; text-align: center;">-</td>
</tr>
<tr style="background: #fff;">
<td style="padding: 0.75rem; border: 1px solid #fecaca;">HPHT MWD</td>
<td style="padding: 0.75rem; border: 1px solid #fecaca; text-align: center;">-</td>
<td style="padding: 0.75rem; border: 1px solid #fecaca; text-align: center;">400°F</td>
</tr>
<tr style="background: #fef2f2;">
<td style="padding: 0.75rem; border: 1px solid #fecaca;">Ultra-HPHT MWD</td>
<td style="padding: 0.75rem; border: 1px solid #fecaca; text-align: center;">-</td>
<td style="padding: 0.75rem; border: 1px solid #fecaca; text-align: center;">450-500°F</td>
</tr>
<tr style="background: #fff;">
<td style="padding: 0.75rem; border: 1px solid #fecaca;">Batteries</td>
<td style="padding: 0.75rem; border: 1px solid #fecaca; text-align: center;">300°F</td>
<td style="padding: 0.75rem; border: 1px solid #fecaca; text-align: center;">400°F (special)</td>
</tr>
</tbody>
</table>
</div>

<div style="background: white; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
<p style="margin: 0;"><strong>💡 الحلول:</strong> استخدام Dewar Flask لعزل الإلكترونيات، بطاريات Lithium-Thionyl Chloride، دوائر مقاومة للحرارة</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">🔧 تصميم Casing لـ HPHT</h3>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #1e3a5f; margin-bottom: 1rem;">اعتبارات التصميم الحرجة</h4>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
<div style="background: #e8f5e9; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #27ae60; margin-bottom: 0.75rem;">📐 Burst & Collapse</h4>
<ul style="margin: 0; padding-right: 1.25rem; line-height: 1.8;">
<li>ضغوط أعلى تتطلب Casing أسمك</li>
<li>حساب للضغط الداخلي والخارجي</li>
<li>Safety Factor أعلى (1.1-1.25)</li>
<li>حساب للـ Thermal Effects</li>
</ul>
</div>
<div style="background: #fff3e0; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #f39c12; margin-bottom: 0.75rem;">🌡️ Thermal Stresses</h4>
<ul style="margin: 0; padding-right: 1.25rem; line-height: 1.8;">
<li>التمدد الحراري يُحدث Compressive Stress</li>
<li>التبريد المفاجئ يُحدث Tensile Stress</li>
<li>حساب Thermal Wellbore Stress</li>
<li>اختيار Connection مناسب</li>
</ul>
</div>
</div>
</div>

<h4 style="color: #2c3e50; margin: 1.5rem 0 1rem 0;">Casing Connections لـ HPHT</h4>

<div style="background: #e3f2fd; padding: 1.5rem; border-radius: 12px; border-left: 4px solid #3498db; margin-bottom: 1.5rem;">
<p style="margin-bottom: 1rem;">الوصلات في HPHT يجب أن تتحمل:</p>

<ul style="margin: 0; padding-right: 1.25rem; line-height: 1.8;">
<li><strong>Premium Connections:</strong> Metal-to-Metal seals مطلوبة</li>
<li><strong>Gas-Tight:</strong> تحمل التسرب في الضغط العالي</li>
<li><strong>Thermal Cycling:</strong> تتحمل التمدد والانكماش المتكرر</li>
<li><strong>Torque Shoulder:</strong> كتف قوي لتحمل الضغوط</li>
</ul>

<div style="background: white; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
<p style="margin: 0;"><strong>أمثلة:</strong> VAM TOP, Tenaris Blue, Grant Prideco TCS</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">🔩 Drill String لـ HPHT</h3>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
<div style="background: #f0f9ff; padding: 1.5rem; border-radius: 12px;">
<h4 style="color: #0369a1; margin-bottom: 1rem;">🔧 متطلبات Drill Pipe</h4>
<ul style="margin: 0; padding-right: 1.25rem; line-height: 1.8;">
<li><strong>Grade:</strong> S-135 أو V-150 للقوة</li>
<li><strong>Connection:</strong> Double Shoulder للغاز</li>
<li><strong>Inspection:</strong> فحص أكثر تكراراً</li>
<li><strong>Fatigue:</strong> مراقبة Cumulative Fatigue</li>
</ul>
</div>
<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px;">
<h4 style="color: #92400e; margin-bottom: 1rem;">⚠️ مخاطر Hydrogen Sulfide</h4>
<ul style="margin: 0; padding-right: 1.25rem; line-height: 1.8;">
<li>H2S شائع في HPHT reservoirs</li>
<li>Sulfide Stress Cracking خطر حقيقي</li>
<li>استخدام Sour Service materials</li>
<li>NACE MR0175 compliance مطلوب</li>
</ul>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">⚗️ الإسمنت في HPHT</h3>

<div style="background: #f3e5f5; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<h4 style="color: #8e24aa; margin-bottom: 1rem;">تحديات الإسمنت الخاصة</h4>

<ul style="margin: 0; padding-right: 1.25rem; line-height: 2;">
<li><strong>Strength Retrogression:</strong> فقدان القوة فوق 230°F إذا لم يُعالج</li>
<li><strong>Silica Addition:</strong> إضافة 35-40% Silica لمنع التدهور</li>
<li><strong>Thickening Time:</strong> ضبط دقيق لتجنب Flash Set</li>
<li><strong>Free Water:</strong> التحكم في الماء الحر منعاً للقنوات</li>
<li><strong>Gas Migration:</strong> منع هجرة الغاز أثناء التصلب</li>
</ul>

<div style="background: white; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
<p style="margin: 0; color: #8e24aa;">
<strong>معادلة تقريبية:</strong> لكل 100°F فوق 230°F، زد Silica بـ 5-10%
</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">🛠️ معدات السطح</h3>

<div style="background: #e0f2f1; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<ul style="margin: 0; padding-right: 1.25rem; line-height: 2;">
<li><strong>Rig Capacity:</strong> قدرة رفع أعلى للـ Casing الثقيل</li>
<li><strong>Mud Pumps:</strong> ضغط أعلى (7,500+ psi)</li>
<li><strong>Choke Manifold:</strong> تصنيف 15K أو 20K</li>
<li><strong>Degasser:</strong> سعة عالية للتعامل مع الغاز</li>
<li><strong>Shale Shakers:</strong> قدرة على التعامل مع كثافة عالية</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-top: 2rem;">
<h4 style="color: #ffd700; margin-bottom: 1rem;">💡 نصيحة للمهندس</h4>
<p style="margin: 0; line-height: 1.8;">
في HPHT، المعدات ليست مجرد "أدوات أقوى". كل مكون يجب أن يُصمم للعمل معاً تحت الظروف القاسية. تأكد من توافق جميع المكونات - فشل عنصر واحد يمكن أن يُفشل العملية بأكملها.
</p>
</div>
</section>`,
          keyTerms: [
            { term: 'Dewar Flask', definition: 'حاوية عازلة حرارياً تحمي الإلكترونيات في الأدوات' },
            { term: 'Strength Retrogression', definition: 'فقدان قوة الإسمنت في درجات حرارة عالية بدون Silica' },
            { term: 'Premium Connection', definition: 'وصلة Casing بختم معدني للغاز في الضغوط العالية' },
            { term: 'Sour Service', definition: 'معدات مصممة لتحمل بيئة H2S' },
          ],
          practiceQuestion: {
            question: 'لماذا تُضاف Silica إلى الإسمنت في آبار HPHT؟',
            options: [
              'لتقليل الكثافة',
              'لمنع Strength Retrogression فوق 230°F',
              'لتسريع التصلب',
              'لتقليل التكلفة'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'HPHT Drilling - Day 4: Equipment and Casing Design',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">🔷 HPHT Equipment and Technical Challenges</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="color: #f4a261; margin-bottom: 1rem;">📌 HPHT Equipment Requirements</h3>
<p style="line-height: 1.8;">
Equipment in HPHT environment must withstand extreme conditions for extended periods. High temperature affects electronics, seals, and rubber materials, while high pressure requires stronger and heavier designs. Selecting appropriate equipment is crucial for success.
</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📡 MWD/LWD in HPHT</h3>

<div style="background: #fef2f2; padding: 1.5rem; border-radius: 12px; border-left: 4px solid #dc2626; margin-bottom: 1.5rem;">
<h4 style="color: #991b1b; margin-bottom: 1rem;">Electronics Challenges in High Temperature</h4>

<div style="overflow-x: auto;">
<table style="width: 100%; border-collapse: collapse; font-size: 0.95rem;">
<thead>
<tr style="background: #991b1b; color: white;">
<th style="padding: 1rem; text-align: left; border: 1px solid #7f1d1d;">Component</th>
<th style="padding: 1rem; text-align: center; border: 1px solid #7f1d1d;">Standard Temp Limit</th>
<th style="padding: 1rem; text-align: center; border: 1px solid #7f1d1d;">HPHT Limit</th>
</tr>
</thead>
<tbody>
<tr style="background: #fef2f2;">
<td style="padding: 0.75rem; border: 1px solid #fecaca;">Standard MWD</td>
<td style="padding: 0.75rem; border: 1px solid #fecaca; text-align: center;">300°F</td>
<td style="padding: 0.75rem; border: 1px solid #fecaca; text-align: center;">-</td>
</tr>
<tr style="background: #fff;">
<td style="padding: 0.75rem; border: 1px solid #fecaca;">HPHT MWD</td>
<td style="padding: 0.75rem; border: 1px solid #fecaca; text-align: center;">-</td>
<td style="padding: 0.75rem; border: 1px solid #fecaca; text-align: center;">400°F</td>
</tr>
<tr style="background: #fef2f2;">
<td style="padding: 0.75rem; border: 1px solid #fecaca;">Ultra-HPHT MWD</td>
<td style="padding: 0.75rem; border: 1px solid #fecaca; text-align: center;">-</td>
<td style="padding: 0.75rem; border: 1px solid #fecaca; text-align: center;">450-500°F</td>
</tr>
</tbody>
</table>
</div>

<div style="background: white; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
<p style="margin: 0;"><strong>💡 Solutions:</strong> Dewar Flask for electronics insulation, Lithium-Thionyl Chloride batteries, heat-resistant circuits</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">🔧 HPHT Casing Design</h3>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #1e3a5f; margin-bottom: 1rem;">Critical Design Considerations</h4>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
<div style="background: #e8f5e9; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #27ae60; margin-bottom: 0.75rem;">📐 Burst & Collapse</h4>
<ul style="margin: 0; padding-left: 1.25rem; line-height: 1.8;">
<li>Higher pressures require thicker Casing</li>
<li>Calculate internal and external pressure</li>
<li>Higher Safety Factor (1.1-1.25)</li>
<li>Account for Thermal Effects</li>
</ul>
</div>
<div style="background: #fff3e0; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #f39c12; margin-bottom: 0.75rem;">🌡️ Thermal Stresses</h4>
<ul style="margin: 0; padding-left: 1.25rem; line-height: 1.8;">
<li>Thermal expansion causes Compressive Stress</li>
<li>Sudden cooling causes Tensile Stress</li>
<li>Calculate Thermal Wellbore Stress</li>
<li>Select appropriate Connection</li>
</ul>
</div>
</div>
</div>

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-top: 2rem;">
<h4 style="color: #ffd700; margin-bottom: 1rem;">💡 Engineer's Tip</h4>
<p style="margin: 0; line-height: 1.8;">
In HPHT, equipment is not just "stronger tools." Every component must be designed to work together under extreme conditions. Ensure all components are compatible - failure of one element can fail the entire operation.
</p>
</div>
</section>`,
          keyTerms: [
            { term: 'Dewar Flask', definition: 'Thermally insulated container protecting electronics in tools' },
            { term: 'Strength Retrogression', definition: 'Cement strength loss at high temperatures without Silica' },
            { term: 'Premium Connection', definition: 'Casing connection with metal-to-metal gas seal for high pressure' },
            { term: 'Sour Service', definition: 'Equipment designed to withstand H2S environment' },
          ],
          practiceQuestion: {
            question: 'Why is Silica added to cement in HPHT wells?',
            options: [
              'To reduce density',
              'To prevent Strength Retrogression above 230°F',
              'To accelerate setting',
              'To reduce cost'
            ],
            correctAnswer: 1,
          },
        },
      },
    },

    // ==================== Day 5: HPHT Planning and Risk Management ====================
    {
      day: 5,
      type: 'learning',
      content: {
        ar: {
          title: 'HPHT Drilling - اليوم الخامس: التخطيط وإدارة المخاطر',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">🔷 التخطيط لآبار HPHT</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="color: #f4a261; margin-bottom: 1rem;">📌 أهمية التخطيط المتكامل</h3>
<p style="line-height: 1.8;">
آبار HPHT لا تتحمل الأخطاء. التخطيط الدقيق والشامل هو الفرق بين النجاح والكارثة. كل جانب من العملية - من اختيار الموقع إلى التخلي عن البئر - يجب أن يُخطط له بعناية مع احتياطات للطوارئ.
</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📋 عناصر خطة HPHT</h3>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<ol style="margin: 0; padding-right: 1.25rem; line-height: 2;">
<li><strong>Pore Pressure Prediction:</strong> تقدير دقيق لضغط المسام من البيانات الزلزالية والآبار المجاورة</li>
<li><strong>Fracture Gradient:</strong> تحديد ضغط التكسير لتصميم نافذة الطين</li>
<li><strong>Casing Design:</strong> تصميم يتحمل الضغوط والحرارات المتوقعة</li>
<li><strong>Mud Program:</strong> اختيار نوع الطين وخصائصه لكل قسم</li>
<li><strong>Equipment Selection:</strong> MWD/LWD، BOP، أدوات الحفر المناسبة</li>
<li><strong>Well Control Plan:</strong> إجراءات Kill محددة لسيناريوهات مختلفة</li>
<li><strong>Contingency Plans:</strong> خطط بديلة للمشاكل المتوقعة</li>
</ol>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">⚠️ تقييم المخاطر (Risk Assessment)</h3>

<div style="background: #fef2f2; padding: 1.5rem; border-radius: 12px; border-left: 4px solid #dc2626; margin-bottom: 1.5rem;">
<h4 style="color: #991b1b; margin-bottom: 1rem;">المخاطر الرئيسية في HPHT</h4>

<div style="overflow-x: auto;">
<table style="width: 100%; border-collapse: collapse; font-size: 0.95rem;">
<thead>
<tr style="background: #991b1b; color: white;">
<th style="padding: 1rem; text-align: right; border: 1px solid #7f1d1d;">الخطر</th>
<th style="padding: 1rem; text-align: center; border: 1px solid #7f1d1d;">الاحتمالية</th>
<th style="padding: 1rem; text-align: center; border: 1px solid #7f1d1d;">الشدة</th>
<th style="padding: 1rem; text-align: right; border: 1px solid #7f1d1d;">التخفيف</th>
</tr>
</thead>
<tbody>
<tr style="background: #fef2f2;">
<td style="padding: 0.75rem; border: 1px solid #fecaca;">Kick / Blowout</td>
<td style="padding: 0.75rem; border: 1px solid #fecaca; text-align: center;">متوسط</td>
<td style="padding: 0.75rem; border: 1px solid #fecaca; text-align: center;">كارثي</td>
<td style="padding: 0.75rem; border: 1px solid #fecaca;">BOP عالي التصنيف، مراقبة مستمرة</td>
</tr>
<tr style="background: #fff;">
<td style="padding: 0.75rem; border: 1px solid #fecaca;">Lost Circulation</td>
<td style="padding: 0.75rem; border: 1px solid #fecaca; text-align: center;">عالي</td>
<td style="padding: 0.75rem; border: 1px solid #fecaca; text-align: center;">شديد</td>
<td style="padding: 0.75rem; border: 1px solid #fecaca;">LCM جاهز، MPD عند الحاجة</td>
</tr>
<tr style="background: #fef2f2;">
<td style="padding: 0.75rem; border: 1px solid #fecaca;">Equipment Failure</td>
<td style="padding: 0.75rem; border: 1px solid #fecaca; text-align: center;">متوسط</td>
<td style="padding: 0.75rem; border: 1px solid #fecaca; text-align: center;">شديد</td>
<td style="padding: 0.75rem; border: 1px solid #fecaca;">معدات HPHT rated، قطع غيار</td>
</tr>
<tr style="background: #fff;">
<td style="padding: 0.75rem; border: 1px solid #fecaca;">Stuck Pipe</td>
<td style="padding: 0.75rem; border: 1px solid #fecaca; text-align: center;">متوسط</td>
<td style="padding: 0.75rem; border: 1px solid #fecaca; text-align: center;">عالي</td>
<td style="padding: 0.75rem; border: 1px solid #fecaca;">تنظيف الحفرة، OBM، مراقبة T&D</td>
</tr>
<tr style="background: #fef2f2;">
<td style="padding: 0.75rem; border: 1px solid #fecaca;">H2S Exposure</td>
<td style="padding: 0.75rem; border: 1px solid #fecaca; text-align: center;">حسب الحقل</td>
<td style="padding: 0.75rem; border: 1px solid #fecaca; text-align: center;">كارثي</td>
<td style="padding: 0.75rem; border: 1px solid #fecaca;">Sour service materials، كاشفات</td>
</tr>
</tbody>
</table>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📊 Pore Pressure Prediction</h3>

<div style="background: #e3f2fd; padding: 1.5rem; border-radius: 12px; border-left: 4px solid #3498db; margin-bottom: 1.5rem;">
<h4 style="color: #3498db; margin-bottom: 1rem;">مصادر البيانات للتنبؤ</h4>

<ul style="margin: 0; padding-right: 1.25rem; line-height: 2;">
<li><strong>Seismic Velocity:</strong> بطء الموجة يشير لضغط مسام مرتفع</li>
<li><strong>Offset Wells:</strong> بيانات الآبار المجاورة</li>
<li><strong>Drilling Exponents:</strong> d-exponent و corrected d-exponent</li>
<li><strong>LWD Data:</strong> Resistivity، Sonic في الوقت الحقيقي</li>
<li><strong>RFT/MDT:</strong> قياسات مباشرة للضغط</li>
</ul>

<div style="background: white; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
<p style="margin: 0; color: #1e3a5f;">
<strong>⚠️ تحذير:</strong> في HPHT، الخطأ في تقدير ضغط المسام بـ 0.5 ppg قد يعني الفرق بين البئر الناجح والكارثة.
</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">🎯 MPD في HPHT</h3>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
<div style="background: #e8f5e9; padding: 1.5rem; border-radius: 12px; border-left: 4px solid #27ae60;">
<h4 style="color: #27ae60; margin-bottom: 1rem;">✅ لماذا MPD في HPHT؟</h4>
<ul style="margin: 0; padding-right: 1.25rem; line-height: 1.8;">
<li>نافذة الطين ضيقة للغاية</li>
<li>تحكم دقيق في BHP</li>
<li>اكتشاف مبكر للـ Kick</li>
<li>تقليل NPT من Lost Circulation</li>
</ul>
</div>
<div style="background: #fff3e0; padding: 1.5rem; border-radius: 12px; border-left: 4px solid #f39c12;">
<h4 style="color: #f39c12; margin-bottom: 1rem;">⚙️ اعتبارات MPD في HPHT</h4>
<ul style="margin: 0; padding-right: 1.25rem; line-height: 1.8;">
<li>RCD يجب أن يتحمل الحرارة</li>
<li>Choke مصنف للضغط العالي</li>
<li>نظام تحكم موثوق</li>
<li>تدريب الطاقم على MPD</li>
</ul>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">👥 متطلبات الطاقم والتدريب</h3>

<div style="background: #f3e5f5; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<h4 style="color: #8e24aa; margin-bottom: 1rem;">الكفاءات المطلوبة</h4>

<ul style="margin: 0; padding-right: 1.25rem; line-height: 2;">
<li><strong>Well Control Certification:</strong> IWCF Level 4 للمشرفين</li>
<li><strong>HPHT-Specific Training:</strong> تدريب على سيناريوهات HPHT</li>
<li><strong>Simulator Exercises:</strong> محاكاة لحالات الطوارئ</li>
<li><strong>H2S Training:</strong> إذا كان متوقعاً</li>
<li><strong>Equipment Familiarity:</strong> معرفة بالمعدات الخاصة</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📝 التوثيق والمراجعة</h3>

<div style="background: #e0f2f1; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<ul style="margin: 0; padding-right: 1.25rem; line-height: 2;">
<li><strong>Pre-Spud Review:</strong> مراجعة شاملة قبل البدء</li>
<li><strong>Casing Point Review:</strong> مراجعة عند كل نقطة Casing</li>
<li><strong>Daily Reports:</strong> توثيق تفصيلي يومي</li>
<li><strong>Lessons Learned:</strong> توثيق الدروس للآبار المستقبلية</li>
<li><strong>Post-Well Analysis:</strong> تحليل شامل بعد الانتهاء</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-top: 2rem;">
<h4 style="color: #ffd700; margin-bottom: 1rem;">💡 نصيحة للمهندس</h4>
<p style="margin: 0; line-height: 1.8;">
في HPHT، "الأمل ليس استراتيجية". خطط لكل سيناريو ممكن، حتى غير المحتمل. تكلفة التخطيط الإضافي أقل بكثير من تكلفة التعامل مع أزمة غير متوقعة في 20,000 قدم تحت السطح.
</p>
</div>
</section>`,
          keyTerms: [
            { term: 'd-exponent', definition: 'مؤشر يُستخدم لتقدير ضغط المسام من بيانات الحفر' },
            { term: 'RFT/MDT', definition: 'أدوات قياس ضغط التكوين المباشر Repeat Formation Tester' },
            { term: 'Pre-Spud Review', definition: 'مراجعة شاملة للخطة قبل بدء الحفر' },
            { term: 'IWCF Level 4', definition: 'أعلى مستوى شهادة في التحكم بالبئر' },
          ],
          practiceQuestion: {
            question: 'ما هو الهدف الرئيسي من استخدام MPD في آبار HPHT؟',
            options: [
              'تقليل تكلفة الطين',
              'زيادة ROP فقط',
              'التحكم الدقيق في BHP ضمن نافذة الطين الضيقة',
              'تقليل عدد الـ Casing strings'
            ],
            correctAnswer: 2,
          },
        },
        en: {
          title: 'HPHT Drilling - Day 5: Planning and Risk Management',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">🔷 HPHT Well Planning</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="color: #f4a261; margin-bottom: 1rem;">📌 Importance of Integrated Planning</h3>
<p style="line-height: 1.8;">
HPHT wells don't tolerate mistakes. Careful and comprehensive planning is the difference between success and disaster. Every aspect of the operation - from site selection to well abandonment - must be carefully planned with contingencies for emergencies.
</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📋 HPHT Plan Elements</h3>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<ol style="margin: 0; padding-left: 1.25rem; line-height: 2;">
<li><strong>Pore Pressure Prediction:</strong> Accurate estimate from seismic and offset well data</li>
<li><strong>Fracture Gradient:</strong> Define fracture pressure for mud window design</li>
<li><strong>Casing Design:</strong> Design to withstand expected pressures and temperatures</li>
<li><strong>Mud Program:</strong> Select mud type and properties for each section</li>
<li><strong>Equipment Selection:</strong> Appropriate MWD/LWD, BOP, drilling tools</li>
<li><strong>Well Control Plan:</strong> Specific Kill procedures for different scenarios</li>
<li><strong>Contingency Plans:</strong> Alternative plans for expected problems</li>
</ol>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">⚠️ Risk Assessment</h3>

<div style="background: #fef2f2; padding: 1.5rem; border-radius: 12px; border-left: 4px solid #dc2626; margin-bottom: 1.5rem;">
<h4 style="color: #991b1b; margin-bottom: 1rem;">Major HPHT Risks</h4>

<div style="overflow-x: auto;">
<table style="width: 100%; border-collapse: collapse; font-size: 0.95rem;">
<thead>
<tr style="background: #991b1b; color: white;">
<th style="padding: 1rem; text-align: left; border: 1px solid #7f1d1d;">Risk</th>
<th style="padding: 1rem; text-align: center; border: 1px solid #7f1d1d;">Probability</th>
<th style="padding: 1rem; text-align: center; border: 1px solid #7f1d1d;">Severity</th>
<th style="padding: 1rem; text-align: left; border: 1px solid #7f1d1d;">Mitigation</th>
</tr>
</thead>
<tbody>
<tr style="background: #fef2f2;">
<td style="padding: 0.75rem; border: 1px solid #fecaca;">Kick / Blowout</td>
<td style="padding: 0.75rem; border: 1px solid #fecaca; text-align: center;">Medium</td>
<td style="padding: 0.75rem; border: 1px solid #fecaca; text-align: center;">Catastrophic</td>
<td style="padding: 0.75rem; border: 1px solid #fecaca;">High-rated BOP, continuous monitoring</td>
</tr>
<tr style="background: #fff;">
<td style="padding: 0.75rem; border: 1px solid #fecaca;">Lost Circulation</td>
<td style="padding: 0.75rem; border: 1px solid #fecaca; text-align: center;">High</td>
<td style="padding: 0.75rem; border: 1px solid #fecaca; text-align: center;">Severe</td>
<td style="padding: 0.75rem; border: 1px solid #fecaca;">LCM ready, MPD if needed</td>
</tr>
</tbody>
</table>
</div>
</div>

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-top: 2rem;">
<h4 style="color: #ffd700; margin-bottom: 1rem;">💡 Engineer's Tip</h4>
<p style="margin: 0; line-height: 1.8;">
In HPHT, "hope is not a strategy." Plan for every possible scenario, even unlikely ones. The cost of additional planning is much less than the cost of dealing with an unexpected crisis at 20,000 feet below surface.
</p>
</div>
</section>`,
          keyTerms: [
            { term: 'd-exponent', definition: 'Index used to estimate pore pressure from drilling data' },
            { term: 'RFT/MDT', definition: 'Direct formation pressure measurement tools - Repeat Formation Tester' },
            { term: 'Pre-Spud Review', definition: 'Comprehensive plan review before drilling start' },
            { term: 'IWCF Level 4', definition: 'Highest level well control certification' },
          ],
          practiceQuestion: {
            question: 'What is the main objective of using MPD in HPHT wells?',
            options: [
              'Reduce mud cost',
              'Increase ROP only',
              'Precise BHP control within narrow mud window',
              'Reduce number of Casing strings'
            ],
            correctAnswer: 2,
          },
        },
      },
    },

    // ==================== Day 6: Quiz ====================
    {
      day: 6,
      type: 'quiz',
      content: {
        ar: {
          title: 'اختبار HPHT Drilling',
          explanation: 'اختبر معلوماتك حول الحفر في بيئة الضغط والحرارة العالية',
          keyTerms: [],
        },
        en: {
          title: 'HPHT Drilling Quiz',
          explanation: 'Test your knowledge of High Pressure High Temperature drilling',
          keyTerms: [],
        },
      },
      quiz: {
        ar: [
          {
            question: 'ما هو الحد الأدنى للضغط لتصنيف البئر كـ HPHT Tier I؟',
            options: ['5,000 psi', '10,000 psi', '15,000 psi', '20,000 psi'],
            correctAnswer: 1,
          },
          {
            question: 'لماذا تُضاف Silica إلى الإسمنت في آبار HPHT؟',
            options: ['لزيادة الكثافة', 'لمنع Strength Retrogression', 'لتقليل Thickening Time', 'لتقليل التكلفة'],
            correctAnswer: 1,
          },
          {
            question: 'ما هو الخطر الرئيسي للغاز المذاب في OBM أثناء HPHT؟',
            options: ['يزيد الكثافة', 'لا يُكتشف ثم يتمدد بسرعة', 'يقلل اللزوجة', 'يحسن ROP'],
            correctAnswer: 1,
          },
          {
            question: 'أي نوع من سوائل الحفر له أعلى ثبات حراري؟',
            options: ['Water-Based Mud', 'Oil-Based Mud', 'Synthetic-Based Mud', 'Guar-Based Fluid'],
            correctAnswer: 2,
          },
          {
            question: 'ما هو Geothermal Gradient الطبيعي؟',
            options: ['0.5-1.0°F/100ft', '1.0-1.5°F/100ft', '2.5-3.0°F/100ft', '4.0-5.0°F/100ft'],
            correctAnswer: 1,
          },
          {
            question: 'ما هي وظيفة Dewar Flask في أدوات HPHT؟',
            options: ['تبريد الطين', 'عزل الإلكترونيات حرارياً', 'قياس الضغط', 'إرسال البيانات'],
            correctAnswer: 1,
          },
          {
            question: 'أي تصنيف BOP مطلوب لآبار Ultra-HPHT؟',
            options: ['5K', '10K', '15K', '20K'],
            correctAnswer: 3,
          },
          {
            question: 'ما هو الهدف الرئيسي من MPD في HPHT؟',
            options: ['تقليل التكلفة', 'التحكم الدقيق في BHP', 'زيادة ROP فقط', 'تقليل Casing'],
            correctAnswer: 1,
          },
          {
            question: 'ما هو تأثير الحرارة على كثافة OBM عند القاع؟',
            options: ['تزيد بشكل كبير', 'تنخفض بسبب التمدد الحراري', 'لا تتغير', 'تتأرجح'],
            correctAnswer: 1,
          },
          {
            question: 'ما هو HNBR المستخدم في معدات HPHT؟',
            options: ['نوع من الإسمنت', 'مطاط مقاوم للحرارة للأختام', 'بوليمر للطين', 'معدن للـ Casing'],
            correctAnswer: 1,
          },
        ],
        en: [
          {
            question: 'What is the minimum pressure threshold for HPHT Tier I classification?',
            options: ['5,000 psi', '10,000 psi', '15,000 psi', '20,000 psi'],
            correctAnswer: 1,
          },
          {
            question: 'Why is Silica added to cement in HPHT wells?',
            options: ['To increase density', 'To prevent Strength Retrogression', 'To reduce Thickening Time', 'To reduce cost'],
            correctAnswer: 1,
          },
          {
            question: 'What is the main hazard of dissolved gas in OBM during HPHT?',
            options: ['Increases density', 'Not detected then expands rapidly', 'Reduces viscosity', 'Improves ROP'],
            correctAnswer: 1,
          },
          {
            question: 'Which drilling fluid type has the highest thermal stability?',
            options: ['Water-Based Mud', 'Oil-Based Mud', 'Synthetic-Based Mud', 'Guar-Based Fluid'],
            correctAnswer: 2,
          },
          {
            question: 'What is the normal Geothermal Gradient?',
            options: ['0.5-1.0°F/100ft', '1.0-1.5°F/100ft', '2.5-3.0°F/100ft', '4.0-5.0°F/100ft'],
            correctAnswer: 1,
          },
          {
            question: 'What is the function of Dewar Flask in HPHT tools?',
            options: ['Cooling mud', 'Thermally insulating electronics', 'Measuring pressure', 'Transmitting data'],
            correctAnswer: 1,
          },
          {
            question: 'Which BOP rating is required for Ultra-HPHT wells?',
            options: ['5K', '10K', '15K', '20K'],
            correctAnswer: 3,
          },
          {
            question: 'What is the main objective of MPD in HPHT?',
            options: ['Reduce cost', 'Precise BHP control', 'Increase ROP only', 'Reduce Casing'],
            correctAnswer: 1,
          },
          {
            question: 'What is the effect of temperature on OBM density at bottom?',
            options: ['Increases significantly', 'Decreases due to thermal expansion', 'No change', 'Oscillates'],
            correctAnswer: 1,
          },
          {
            question: 'What is HNBR used in HPHT equipment?',
            options: ['Type of cement', 'Heat-resistant rubber for seals', 'Mud polymer', 'Casing metal'],
            correctAnswer: 1,
          },
        ],
      },
    },

    // ==================== Day 7: Project ====================
    {
      day: 7,
      type: 'project',
      content: {
        ar: {
          title: 'مشروع HPHT Drilling',
          explanation: 'طبق ما تعلمته في تخطيط بئر HPHT',
          keyTerms: [],
        },
        en: {
          title: 'HPHT Drilling Project',
          explanation: 'Apply what you learned in HPHT well planning',
          keyTerms: [],
        },
      },
      project: {
        ar: {
          title: 'تصميم خطة حفر لبئر HPHT',
          description: 'أنت مهندس حفر مكلف بتخطيط بئر HPHT في حقل جديد. البئر المستهدف على عمق 22,000 قدم مع توقعات BHT = 380°F وضغط مسام يصل إلى 16,000 psi.',
          instructions: [
            'حدد تصنيف HPHT للبئر واذكر التحديات الرئيسية المتوقعة',
            'اقترح نوع سائل الحفر المناسب مع تبرير اختيارك والإضافات المطلوبة',
            'صمم برنامج Casing أساسي مع تحديد عدد الـ Strings ونوع الوصلات',
            'حدد متطلبات BOP ومعدات Well Control',
            'اقترح استخدام MPD وحدد الفوائد المتوقعة',
            'ضع قائمة بأهم 5 مخاطر مع إجراءات التخفيف',
          ],
          submissionType: 'text',
        },
        en: {
          title: 'Design an HPHT Well Drilling Plan',
          description: 'You are a drilling engineer tasked with planning an HPHT well in a new field. Target well is at 22,000 ft depth with expected BHT = 380°F and pore pressure reaching 16,000 psi.',
          instructions: [
            'Determine the HPHT classification and list main expected challenges',
            'Propose appropriate drilling fluid type with justification and required additives',
            'Design a basic Casing program specifying number of Strings and connection types',
            'Specify BOP and Well Control equipment requirements',
            'Propose MPD usage and identify expected benefits',
            'List top 5 risks with mitigation measures',
          ],
          submissionType: 'text',
        },
      },
    },
  ],
};
