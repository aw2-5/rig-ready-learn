import { WeeklyLesson } from '../weeklyContent';

export const offshoreDrillingSystemsLesson: WeeklyLesson = {
  lessonId: 'offshore-drilling-systems',
  days: [
    {
      day: 1,
      type: 'learning',
      content: {
        ar: {
          title: 'أنظمة الحفر البحري - اليوم الأول: مقدمة ومنصات Jackup',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 تصنيف بيئات الحفر البحري</h2>

<div style="background: linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 100%); padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem; border-right: 4px solid #0284c7;">
<h3 style="color: #0369a1; font-size: 1.2rem; margin-bottom: 1rem;">📊 تصنيف عمق المياه</h3>
<table style="width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden;">
<tr style="background: #0284c7; color: white;">
<th style="padding: 12px; text-align: center;">التصنيف</th>
<th style="padding: 12px; text-align: center;">عمق المياه</th>
<th style="padding: 12px; text-align: center;">نوع المنصة المناسب</th>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 10px; text-align: center; font-weight: bold;">Shallow Water</td>
<td style="padding: 10px; text-align: center;">0 - 400 ft</td>
<td style="padding: 10px; text-align: center;">Jackup, Fixed Platform</td>
</tr>
<tr>
<td style="padding: 10px; text-align: center; font-weight: bold;">Intermediate</td>
<td style="padding: 10px; text-align: center;">400 - 1,500 ft</td>
<td style="padding: 10px; text-align: center;">Jackup (Max), TLP, Spar</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 10px; text-align: center; font-weight: bold;">Deep Water</td>
<td style="padding: 10px; text-align: center;">1,500 - 5,000 ft</td>
<td style="padding: 10px; text-align: center;">Semisubmersible, TLP</td>
</tr>
<tr>
<td style="padding: 10px; text-align: center; font-weight: bold;">Ultra-Deep</td>
<td style="padding: 10px; text-align: center;">> 5,000 ft</td>
<td style="padding: 10px; text-align: center;">Drillship, Semisubmersible</td>
</tr>
</table>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 منصات Jackup - الهيكل والتصميم</h2>

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem; border-right: 4px solid #f59e0b;">
<h3 style="color: #b45309; font-size: 1.2rem; margin-bottom: 1rem;">🏗️ مكونات Jackup الأساسية</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;"><strong>Hull (البدن):</strong> منصة عائمة مثلثة أو مستطيلة الشكل تحمل جميع معدات الحفر والإقامة. تصميم المثلث (Triangular Hull) أكثر شيوعاً لأنه يوزع الأحمال بالتساوي على الأرجل الثلاثة.</p>
<p style="margin-bottom: 1rem; line-height: 1.8;"><strong>Legs (الأرجل):</strong> ثلاثة أو أربعة أرجل فولاذية قابلة للرفع والإنزال. تخترق قاع البحر لتثبيت المنصة. طول الأرجل يحدد أقصى عمق ماء للتشغيل.</p>
<p style="margin-bottom: 1rem; line-height: 1.8;"><strong>Spud Cans:</strong> قواعد دائرية ضخمة في أسفل كل رجل تعمل على توزيع الوزن على مساحة أكبر من قاع البحر لمنع الغرز الزائد.</p>
<p style="line-height: 1.8;"><strong>Cantilever (الذراع الممتد):</strong> ذراع أفقي يحمل برج الحفر ويمتد خارج البدن ليتمركز فوق فتحة البئر مباشرة.</p>
</div>

<h3 style="color: #ea580c; font-size: 1.25rem; margin-bottom: 1rem;">⚙️ أنواع أرجل Jackup</h3>

<div style="display: grid; gap: 1rem; margin-bottom: 1.5rem;">
<div style="background: #ecfdf5; padding: 1.25rem; border-radius: 10px; border-right: 4px solid #10b981;">
<h4 style="color: #047857; margin-bottom: 0.75rem; font-size: 1.1rem;">1. Independent Leg (أرجل مستقلة)</h4>
<ul style="margin: 0; padding-right: 1.25rem; line-height: 1.8;">
<li>كل رجل ترتفع وتنخفض بشكل منفصل</li>
<li>مناسبة للأسطح غير المستوية (Uneven Seabed)</li>
<li>أكثر مرونة في التشغيل</li>
<li>تستخدم في معظم منصات Jackup الحديثة</li>
</ul>
</div>

<div style="background: #fef2f2; padding: 1.25rem; border-radius: 10px; border-right: 4px solid #ef4444;">
<h4 style="color: #b91c1c; margin-bottom: 0.75rem; font-size: 1.1rem;">2. Mat-Supported (قاعدة موحدة)</h4>
<ul style="margin: 0; padding-right: 1.25rem; line-height: 1.8;">
<li>جميع الأرجل متصلة بقاعدة واحدة كبيرة</li>
<li>مناسبة للتربة الناعمة جداً (Soft Clay)</li>
<li>توزيع أفضل للوزن لكن أقل مرونة</li>
<li>نادرة الاستخدام حالياً</li>
</ul>
</div>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 عمليات Jacking - الرفع والتثبيت</h2>

<div style="background: linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%); padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<h3 style="color: #166534; font-size: 1.2rem; margin-bottom: 1rem;">📋 تسلسل تثبيت Jackup في الموقع</h3>
<ol style="padding-right: 1.25rem; line-height: 2;">
<li><strong>السحب (Towing):</strong> سحب المنصة عائمة إلى الموقع بواسطة قاطرات (Tugs) بسرعة 4-6 عقدة</li>
<li><strong>تثبيت الموقع (Positioning):</strong> استخدام GPS وAnchors للوصول للإحداثيات الدقيقة</li>
<li><strong>إنزال الأرجل (Lowering Legs):</strong> إنزال الأرجل ببطء حتى تلامس قاع البحر</li>
<li><strong>Preloading:</strong> ضخ مياه البحر في خزانات البدن لزيادة الوزن واختبار تحمل التربة</li>
<li><strong>رفع البدن (Elevating Hull):</strong> رفع البدن فوق الأمواج بمسافة آمنة (Air Gap)</li>
<li><strong>تمديد Cantilever:</strong> تمديد الذراع ليتمركز برج الحفر فوق البئر</li>
</ol>
</div>

<div style="background: #fef2f2; padding: 1.25rem; border-radius: 10px; border-right: 4px solid #ef4444; margin-bottom: 1.5rem;">
<h3 style="color: #b91c1c; font-size: 1.1rem; margin-bottom: 0.75rem;">⚠️ Air Gap - الفراغ الهوائي</h3>
<p style="margin-bottom: 0.75rem; line-height: 1.8;">المسافة بين أعلى موجة متوقعة وأسفل البدن. يجب أن تكون كافية لتجنب Wave Slamming:</p>
<ul style="margin: 0; padding-right: 1.25rem; line-height: 1.8;">
<li><strong>الخليج العربي:</strong> 40-50 ft (أمواج معتدلة)</li>
<li><strong>بحر الشمال:</strong> 80-100 ft (أمواج عالية)</li>
<li><strong>خليج المكسيك:</strong> 60-80 ft (احتمال أعاصير)</li>
</ul>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 تقييم قاع البحر (Seabed Assessment)</h2>

<div style="background: #f5f3ff; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem; border-right: 4px solid #7c3aed;">
<h3 style="color: #5b21b6; font-size: 1.2rem; margin-bottom: 1rem;">🔍 الفحوصات المطلوبة قبل التثبيت</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;"><strong>Geotechnical Survey:</strong> فحص عينات التربة لتحديد قوة التحمل (Bearing Capacity) ونوع التربة (Clay, Sand, Rock).</p>
<p style="margin-bottom: 1rem; line-height: 1.8;"><strong>Bathymetric Survey:</strong> مسح طبوغرافي لقاع البحر لتحديد العمق الدقيق والميول.</p>
<p style="margin-bottom: 1rem; line-height: 1.8;"><strong>Side Scan Sonar:</strong> كشف العوائق مثل الأنابيب والحطام والكابلات تحت البحر.</p>
<p style="line-height: 1.8;"><strong>Magnetometer Survey:</strong> كشف الأجسام المعدنية المدفونة مثل الذخائر القديمة (UXO).</p>
</div>

<div style="background: linear-gradient(135deg, #fdf4ff 0%, #faf5ff 100%); padding: 1.5rem; border-radius: 12px; border-right: 4px solid #a855f7;">
<h3 style="color: #7e22ce; font-size: 1.1rem; margin-bottom: 0.75rem;">📐 حساب Spud Can Penetration</h3>
<p style="line-height: 1.8;">عمق اختراق Spud Can يعتمد على: وزن المنصة ÷ قوة تحمل التربة × مساحة Spud Can. التربة الطينية الناعمة قد تسمح باختراق 30-50 ft، بينما الرملية المتماسكة 5-10 ft فقط.</p>
</div>

<div style="background: #dbeafe; padding: 1rem; border-radius: 8px; margin-top: 1.5rem;">
<p style="color: #1e40af; font-weight: 500; margin: 0;">💡 <strong>ملاحظة مهمة:</strong> Punch-Through هو الخطر الأكبر عندما تخترق Spud Can طبقة صلبة فوق طبقة ناعمة فجأة مما يسبب ميل المنصة.</p>
</div>
</section>`,
          keyTerms: [
            { term: 'Jackup', definition: 'منصة حفر بحرية ذاتية الرفع بأرجل قابلة للإنزال تثبت في قاع البحر' },
            { term: 'Spud Can', definition: 'القاعدة الدائرية أسفل أرجل Jackup لتوزيع الوزن على التربة' },
            { term: 'Cantilever', definition: 'الذراع الممتد الذي يحمل برج الحفر ويتمركز فوق البئر' },
            { term: 'Air Gap', definition: 'المسافة بين أسفل البدن وأعلى موجة متوقعة' },
            { term: 'Preloading', definition: 'اختبار تحمل التربة بزيادة وزن المنصة بضخ مياه البحر' },
          ],
          practiceQuestion: {
            question: 'ما هو خطر Punch-Through في عمليات تثبيت Jackup؟',
            options: [
              'اختراق مفاجئ لطبقة صلبة فوق طبقة ناعمة يسبب ميل المنصة',
              'تسرب الماء إلى البدن',
              'كسر في ذراع Cantilever',
              'فشل نظام الرفع'
            ],
            correctAnswer: 0,
          },
        },
        en: {
          title: 'Offshore Drilling Systems - Day 1: Introduction and Jackup Platforms',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Offshore Drilling Environment Classification</h2>

<div style="background: linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 100%); padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem; border-left: 4px solid #0284c7;">
<h3 style="color: #0369a1; font-size: 1.2rem; margin-bottom: 1rem;">📊 Water Depth Classification</h3>
<table style="width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden;">
<tr style="background: #0284c7; color: white;">
<th style="padding: 12px; text-align: center;">Classification</th>
<th style="padding: 12px; text-align: center;">Water Depth</th>
<th style="padding: 12px; text-align: center;">Suitable Platform Type</th>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 10px; text-align: center; font-weight: bold;">Shallow Water</td>
<td style="padding: 10px; text-align: center;">0 - 400 ft</td>
<td style="padding: 10px; text-align: center;">Jackup, Fixed Platform</td>
</tr>
<tr>
<td style="padding: 10px; text-align: center; font-weight: bold;">Intermediate</td>
<td style="padding: 10px; text-align: center;">400 - 1,500 ft</td>
<td style="padding: 10px; text-align: center;">Jackup (Max), TLP, Spar</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 10px; text-align: center; font-weight: bold;">Deep Water</td>
<td style="padding: 10px; text-align: center;">1,500 - 5,000 ft</td>
<td style="padding: 10px; text-align: center;">Semisubmersible, TLP</td>
</tr>
<tr>
<td style="padding: 10px; text-align: center; font-weight: bold;">Ultra-Deep</td>
<td style="padding: 10px; text-align: center;">> 5,000 ft</td>
<td style="padding: 10px; text-align: center;">Drillship, Semisubmersible</td>
</tr>
</table>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Jackup Platforms - Structure and Design</h2>

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem; border-left: 4px solid #f59e0b;">
<h3 style="color: #b45309; font-size: 1.2rem; margin-bottom: 1rem;">🏗️ Main Jackup Components</h3>
<p style="margin-bottom: 1rem; line-height: 1.8;"><strong>Hull:</strong> A floating platform (triangular or rectangular) that carries all drilling equipment and living quarters. Triangular hull design is most common as it distributes loads evenly across three legs.</p>
<p style="margin-bottom: 1rem; line-height: 1.8;"><strong>Legs:</strong> Three or four steel legs that can be raised and lowered. They penetrate the seabed to fix the platform. Leg length determines maximum operating water depth.</p>
<p style="margin-bottom: 1rem; line-height: 1.8;"><strong>Spud Cans:</strong> Large circular foundations at the bottom of each leg that distribute weight over a larger seabed area to prevent excessive penetration.</p>
<p style="line-height: 1.8;"><strong>Cantilever:</strong> A horizontal arm carrying the drilling derrick that extends beyond the hull to position directly over the wellhead.</p>
</div>

<h3 style="color: #ea580c; font-size: 1.25rem; margin-bottom: 1rem;">⚙️ Jackup Leg Types</h3>

<div style="display: grid; gap: 1rem; margin-bottom: 1.5rem;">
<div style="background: #ecfdf5; padding: 1.25rem; border-radius: 10px; border-left: 4px solid #10b981;">
<h4 style="color: #047857; margin-bottom: 0.75rem; font-size: 1.1rem;">1. Independent Leg</h4>
<ul style="margin: 0; padding-left: 1.25rem; line-height: 1.8;">
<li>Each leg raises and lowers independently</li>
<li>Suitable for uneven seabeds</li>
<li>More operational flexibility</li>
<li>Used in most modern Jackup platforms</li>
</ul>
</div>

<div style="background: #fef2f2; padding: 1.25rem; border-radius: 10px; border-left: 4px solid #ef4444;">
<h4 style="color: #b91c1c; margin-bottom: 0.75rem; font-size: 1.1rem;">2. Mat-Supported</h4>
<ul style="margin: 0; padding-left: 1.25rem; line-height: 1.8;">
<li>All legs connected to one large base mat</li>
<li>Suitable for very soft clay soils</li>
<li>Better weight distribution but less flexibility</li>
<li>Rarely used today</li>
</ul>
</div>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Jacking Operations - Elevation and Fixing</h2>

<div style="background: linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%); padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<h3 style="color: #166534; font-size: 1.2rem; margin-bottom: 1rem;">📋 Jackup Installation Sequence</h3>
<ol style="padding-left: 1.25rem; line-height: 2;">
<li><strong>Towing:</strong> Tow platform floating to location using tugs at 4-6 knots</li>
<li><strong>Positioning:</strong> Use GPS and anchors to reach precise coordinates</li>
<li><strong>Lowering Legs:</strong> Slowly lower legs until they touch the seabed</li>
<li><strong>Preloading:</strong> Pump seawater into hull tanks to increase weight and test soil bearing capacity</li>
<li><strong>Elevating Hull:</strong> Raise hull above waves to safe distance (Air Gap)</li>
<li><strong>Cantilever Extension:</strong> Extend arm to position derrick over the well</li>
</ol>
</div>

<div style="background: #fef2f2; padding: 1.25rem; border-radius: 10px; border-left: 4px solid #ef4444; margin-bottom: 1.5rem;">
<h3 style="color: #b91c1c; font-size: 1.1rem; margin-bottom: 0.75rem;">⚠️ Air Gap</h3>
<p style="margin-bottom: 0.75rem; line-height: 1.8;">Distance between highest expected wave crest and bottom of hull. Must be sufficient to avoid Wave Slamming:</p>
<ul style="margin: 0; padding-left: 1.25rem; line-height: 1.8;">
<li><strong>Arabian Gulf:</strong> 40-50 ft (moderate waves)</li>
<li><strong>North Sea:</strong> 80-100 ft (high waves)</li>
<li><strong>Gulf of Mexico:</strong> 60-80 ft (hurricane potential)</li>
</ul>
</div>

<div style="background: #dbeafe; padding: 1rem; border-radius: 8px; margin-top: 1.5rem;">
<p style="color: #1e40af; font-weight: 500; margin: 0;">💡 <strong>Key Note:</strong> Punch-Through is the greatest hazard when Spud Can suddenly penetrates a hard layer over a soft layer, causing platform tilt.</p>
</div>
</section>`,
          keyTerms: [
            { term: 'Jackup', definition: 'Self-elevating drilling platform with retractable legs that fix to the seabed' },
            { term: 'Spud Can', definition: 'Circular foundation at leg bottom to distribute weight on soil' },
            { term: 'Cantilever', definition: 'Extended arm carrying drilling derrick positioned over the well' },
            { term: 'Air Gap', definition: 'Distance between hull bottom and highest expected wave' },
            { term: 'Preloading', definition: 'Testing soil bearing capacity by increasing platform weight with seawater' },
          ],
          practiceQuestion: {
            question: 'What is the Punch-Through hazard in Jackup installation operations?',
            options: [
              'Sudden penetration of hard layer over soft layer causing platform tilt',
              'Water leakage into the hull',
              'Cantilever arm breakage',
              'Jacking system failure'
            ],
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
          title: 'أنظمة الحفر البحري - اليوم الثاني: المنصات الثابتة (Fixed Platforms)',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 المنصات الثابتة - نظرة عامة</h2>

<div style="background: linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 100%); padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem; border-right: 4px solid #0284c7;">
<h3 style="color: #0369a1; font-size: 1.2rem; margin-bottom: 1rem;">🏭 تعريف المنصة الثابتة</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">المنصة الثابتة (Fixed Platform) هي هيكل فولاذي أو خرساني مثبت بشكل دائم في قاع البحر. تستخدم للحفر والإنتاج في المياه الضحلة والمتوسطة (حتى 1,500 ft). تتميز بالاستقرار الكامل ولا تتأثر بحركة الأمواج مما يجعلها مثالية للعمليات طويلة الأمد.</p>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 أنواع الهياكل الثابتة</h2>

<div style="display: grid; gap: 1.25rem; margin-bottom: 1.5rem;">
<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; border-right: 4px solid #f59e0b;">
<h3 style="color: #b45309; font-size: 1.2rem; margin-bottom: 1rem;">1. Steel Jacket Platform</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;"><strong>الهيكل:</strong> إطار فولاذي أنبوبي (Tubular Frame) يُصنع على الشاطئ ثم يُنقل ويُثبت في الموقع.</p>
<ul style="padding-right: 1.25rem; line-height: 1.8;">
<li><strong>Jacket:</strong> الهيكل الفولاذي السفلي المغمور تحت الماء</li>
<li><strong>Piles:</strong> أوتاد فولاذية تُدق في قاع البحر لتثبيت الجاكت</li>
<li><strong>Topsides/Deck:</strong> الطوابق العلوية التي تحمل المعدات والسكن</li>
<li><strong>العمق:</strong> حتى 1,000 ft عادةً، بعضها يصل 1,500 ft</li>
<li><strong>الاستخدام:</strong> الأكثر شيوعاً عالمياً - خليج المكسيك، بحر الشمال، الخليج العربي</li>
</ul>
</div>

<div style="background: #ecfdf5; padding: 1.5rem; border-radius: 12px; border-right: 4px solid #10b981;">
<h3 style="color: #047857; font-size: 1.2rem; margin-bottom: 1rem;">2. Gravity Based Structure (GBS)</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;"><strong>الهيكل:</strong> منصة خرسانية ضخمة تعتمد على وزنها الهائل للثبات بدون أوتاد.</p>
<ul style="padding-right: 1.25rem; line-height: 1.8;">
<li><strong>Base Cells:</strong> خلايا خرسانية في القاعدة للتخزين والطفو</li>
<li><strong>Shafts:</strong> أعمدة خرسانية تربط القاعدة بالأسطح</li>
<li><strong>الوزن:</strong> قد يصل إلى مليون طن</li>
<li><strong>الميزة:</strong> تخزين النفط في القاعدة - مقاومة ممتازة للجليد</li>
<li><strong>الاستخدام:</strong> بحر الشمال، المناطق القطبية</li>
</ul>
</div>

<div style="background: #f5f3ff; padding: 1.5rem; border-radius: 12px; border-right: 4px solid #7c3aed;">
<h3 style="color: #5b21b6; font-size: 1.2rem; margin-bottom: 1rem;">3. Compliant Tower</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;"><strong>الهيكل:</strong> برج فولاذي مرن يتمايل مع الأمواج بدلاً من مقاومتها.</p>
<ul style="padding-right: 1.25rem; line-height: 1.8;">
<li><strong>التصميم:</strong> أخف من Jacket التقليدي لنفس العمق</li>
<li><strong>Flex Elements:</strong> عناصر مرنة تسمح بالتمايل المحدود</li>
<li><strong>العمق:</strong> 1,000 - 3,000 ft</li>
<li><strong>الميزة:</strong> تكلفة أقل من Jacket لنفس العمق</li>
<li><strong>الاستخدام:</strong> خليج المكسيك</li>
</ul>
</div>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 تركيب Steel Jacket Platform</h2>

<div style="background: linear-gradient(135deg, #fff7ed 0%, #fffbeb 100%); padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<h3 style="color: #c2410c; font-size: 1.2rem; margin-bottom: 1rem;">📋 مراحل التركيب</h3>
<ol style="padding-right: 1.25rem; line-height: 2;">
<li><strong>التصنيع (Fabrication):</strong> بناء الجاكت في الورشة على الشاطئ - قد يستغرق 18-24 شهر</li>
<li><strong>Load-Out:</strong> نقل الجاكت من الورشة إلى البارجة (Barge)</li>
<li><strong>النقل البحري (Transportation):</strong> سحب البارجة للموقع</li>
<li><strong>الإطلاق (Launch):</strong> إنزال الجاكت من البارجة للماء</li>
<li><strong>التعديل (Upending):</strong> قلب الجاكت ليصبح عمودياً</li>
<li><strong>التثبيت (Piling):</strong> دق الأوتاد في قاع البحر عبر أرجل الجاكت</li>
<li><strong>تركيب الأسطح (Topsides Installation):</strong> رفع الأسطح بواسطة رافعات ضخمة</li>
</ol>
</div>

<h3 style="color: #ea580c; font-size: 1.25rem; margin-bottom: 1rem;">🔩 نظام التثبيت بالأوتاد (Piling)</h3>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem; border-right: 4px solid #3b82f6;">
<p style="line-height: 1.8; margin-bottom: 1rem;"><strong>أوتاد الدق (Driven Piles):</strong> أنابيب فولاذية قطرها 36-96 بوصة تُدق بمطارق هيدروليكية. عمق الدق 150-400 ft حسب التربة.</p>
<p style="line-height: 1.8; margin-bottom: 1rem;"><strong>Skirt Piles:</strong> أوتاد تُدق خارج الجاكت وتُربط به بواسطة Grout (خرسانة سائلة).</p>
<p style="line-height: 1.8;"><strong>Insert Piles:</strong> أوتاد تُدق داخل أرجل الجاكت نفسها ثم تُملأ بالخرسانة.</p>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 نظام Wellhead على المنصة الثابتة</h2>

<div style="background: #fef2f2; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem; border-right: 4px solid #ef4444;">
<h3 style="color: #b91c1c; font-size: 1.2rem; margin-bottom: 1rem;">🛢️ Surface Wellhead vs Subsea Wellhead</h3>
<table style="width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden;">
<tr style="background: #ef4444; color: white;">
<th style="padding: 12px; text-align: center;">العنصر</th>
<th style="padding: 12px; text-align: center;">Surface Wellhead</th>
<th style="padding: 12px; text-align: center;">Subsea Wellhead</th>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 10px; text-align: center;">الموقع</td>
<td style="padding: 10px; text-align: center;">على سطح المنصة</td>
<td style="padding: 10px; text-align: center;">في قاع البحر</td>
</tr>
<tr>
<td style="padding: 10px; text-align: center;">الوصول</td>
<td style="padding: 10px; text-align: center;">سهل ومباشر</td>
<td style="padding: 10px; text-align: center;">يتطلب ROV</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 10px; text-align: center;">الصيانة</td>
<td style="padding: 10px; text-align: center;">بسيطة وسريعة</td>
<td style="padding: 10px; text-align: center;">معقدة ومكلفة</td>
</tr>
<tr>
<td style="padding: 10px; text-align: center;">التكلفة الأولية</td>
<td style="padding: 10px; text-align: center;">أقل</td>
<td style="padding: 10px; text-align: center;">أعلى بكثير</td>
</tr>
</table>
</div>

<div style="background: linear-gradient(135deg, #ecfdf5 0%, #f0fdf4 100%); padding: 1.5rem; border-radius: 12px;">
<h3 style="color: #166534; font-size: 1.1rem; margin-bottom: 0.75rem;">🎯 Conductor Slots</h3>
<p style="line-height: 1.8;">المنصات الثابتة تحتوي على 24-48 فتحة (Slot) لرؤوس الآبار. يمكن حفر آبار متعددة من نفس المنصة باستخدام Directional Drilling للوصول لمناطق مختلفة من المكمن.</p>
</div>
</section>`,
          keyTerms: [
            { term: 'Steel Jacket', definition: 'الهيكل الفولاذي الأنبوبي المغمور الذي يحمل المنصة' },
            { term: 'GBS', definition: 'Gravity Based Structure - منصة خرسانية تعتمد على وزنها للثبات' },
            { term: 'Piles', definition: 'أوتاد فولاذية تُدق في قاع البحر لتثبيت الهيكل' },
            { term: 'Topsides', definition: 'الأسطح العلوية التي تحمل معدات الحفر والإنتاج' },
            { term: 'Compliant Tower', definition: 'برج مرن يتمايل مع الأمواج بدلاً من مقاومتها' },
          ],
          practiceQuestion: {
            question: 'ما الفرق الرئيسي بين Steel Jacket و GBS؟',
            options: [
              'Jacket فولاذي يثبت بالأوتاد، GBS خرساني يثبت بوزنه',
              'Jacket للمياه العميقة فقط',
              'GBS لا يمكنه تخزين النفط',
              'لا يوجد فرق جوهري'
            ],
            correctAnswer: 0,
          },
        },
        en: {
          title: 'Offshore Drilling Systems - Day 2: Fixed Platforms',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Fixed Platforms - Overview</h2>

<div style="background: linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 100%); padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem; border-left: 4px solid #0284c7;">
<h3 style="color: #0369a1; font-size: 1.2rem; margin-bottom: 1rem;">🏭 Fixed Platform Definition</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">A Fixed Platform is a steel or concrete structure permanently fixed to the seabed. Used for drilling and production in shallow to intermediate waters (up to 1,500 ft). Features complete stability and is unaffected by wave motion, making it ideal for long-term operations.</p>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Types of Fixed Structures</h2>

<div style="display: grid; gap: 1.25rem; margin-bottom: 1.5rem;">
<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; border-left: 4px solid #f59e0b;">
<h3 style="color: #b45309; font-size: 1.2rem; margin-bottom: 1rem;">1. Steel Jacket Platform</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;"><strong>Structure:</strong> Tubular steel frame fabricated onshore then transported and installed at location.</p>
<ul style="padding-left: 1.25rem; line-height: 1.8;">
<li><strong>Jacket:</strong> Lower steel structure submerged underwater</li>
<li><strong>Piles:</strong> Steel piles driven into seabed to fix the jacket</li>
<li><strong>Topsides/Deck:</strong> Upper decks carrying equipment and quarters</li>
<li><strong>Depth:</strong> Usually up to 1,000 ft, some reach 1,500 ft</li>
<li><strong>Usage:</strong> Most common worldwide - GOM, North Sea, Arabian Gulf</li>
</ul>
</div>

<div style="background: #ecfdf5; padding: 1.5rem; border-radius: 12px; border-left: 4px solid #10b981;">
<h3 style="color: #047857; font-size: 1.2rem; margin-bottom: 1rem;">2. Gravity Based Structure (GBS)</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;"><strong>Structure:</strong> Massive concrete platform relying on its enormous weight for stability without piles.</p>
<ul style="padding-left: 1.25rem; line-height: 1.8;">
<li><strong>Base Cells:</strong> Concrete cells at base for storage and buoyancy</li>
<li><strong>Shafts:</strong> Concrete columns connecting base to topsides</li>
<li><strong>Weight:</strong> Can reach 1 million tons</li>
<li><strong>Advantage:</strong> Oil storage in base - excellent ice resistance</li>
<li><strong>Usage:</strong> North Sea, Arctic regions</li>
</ul>
</div>

<div style="background: #f5f3ff; padding: 1.5rem; border-radius: 12px; border-left: 4px solid #7c3aed;">
<h3 style="color: #5b21b6; font-size: 1.2rem; margin-bottom: 1rem;">3. Compliant Tower</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;"><strong>Structure:</strong> Flexible steel tower that sways with waves rather than resisting them.</p>
<ul style="padding-left: 1.25rem; line-height: 1.8;">
<li><strong>Design:</strong> Lighter than conventional Jacket for same depth</li>
<li><strong>Flex Elements:</strong> Flexible elements allowing limited sway</li>
<li><strong>Depth:</strong> 1,000 - 3,000 ft</li>
<li><strong>Advantage:</strong> Lower cost than Jacket for same depth</li>
<li><strong>Usage:</strong> Gulf of Mexico</li>
</ul>
</div>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Steel Jacket Installation</h2>

<div style="background: linear-gradient(135deg, #fff7ed 0%, #fffbeb 100%); padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<h3 style="color: #c2410c; font-size: 1.2rem; margin-bottom: 1rem;">📋 Installation Phases</h3>
<ol style="padding-left: 1.25rem; line-height: 2;">
<li><strong>Fabrication:</strong> Build jacket at onshore yard - may take 18-24 months</li>
<li><strong>Load-Out:</strong> Transfer jacket from yard to barge</li>
<li><strong>Transportation:</strong> Tow barge to location</li>
<li><strong>Launch:</strong> Lower jacket from barge into water</li>
<li><strong>Upending:</strong> Rotate jacket to vertical position</li>
<li><strong>Piling:</strong> Drive piles into seabed through jacket legs</li>
<li><strong>Topsides Installation:</strong> Lift topsides using heavy lift cranes</li>
</ol>
</div>

<div style="background: #dbeafe; padding: 1rem; border-radius: 8px; margin-top: 1.5rem;">
<p style="color: #1e40af; font-weight: 500; margin: 0;">💡 <strong>Key Note:</strong> Fixed platforms contain 24-48 conductor slots. Multiple wells can be drilled from same platform using directional drilling to access different reservoir areas.</p>
</div>
</section>`,
          keyTerms: [
            { term: 'Steel Jacket', definition: 'Tubular steel structure submerged that supports the platform' },
            { term: 'GBS', definition: 'Gravity Based Structure - concrete platform relying on weight for stability' },
            { term: 'Piles', definition: 'Steel piles driven into seabed to fix the structure' },
            { term: 'Topsides', definition: 'Upper decks carrying drilling and production equipment' },
            { term: 'Compliant Tower', definition: 'Flexible tower swaying with waves instead of resisting them' },
          ],
          practiceQuestion: {
            question: 'What is the main difference between Steel Jacket and GBS?',
            options: [
              'Jacket is steel fixed by piles, GBS is concrete fixed by its weight',
              'Jacket is for deep water only',
              'GBS cannot store oil',
              'No fundamental difference'
            ],
            correctAnswer: 0,
          },
        },
      },
    },
    {
      day: 3,
      type: 'learning',
      content: {
        ar: {
          title: 'أنظمة الحفر البحري - اليوم الثالث: منصات TLP و Spar',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Tension Leg Platform (TLP)</h2>

<div style="background: linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 100%); padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem; border-right: 4px solid #0284c7;">
<h3 style="color: #0369a1; font-size: 1.2rem; margin-bottom: 1rem;">🏗️ مفهوم TLP</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">TLP هي منصة عائمة مثبتة بواسطة كابلات (Tendons) مشدودة عمودياً من قاع البحر. الشد المستمر يمنع المنصة من التحرك رأسياً (Heave) لكنها تتحرك أفقياً مع الأمواج.</p>
<p style="line-height: 1.8;"><strong>العمق التشغيلي:</strong> 1,500 - 5,000 ft | <strong>أول TLP:</strong> Hutton في بحر الشمال 1984</p>
</div>

<h3 style="color: #ea580c; font-size: 1.25rem; margin-bottom: 1rem;">⚙️ مكونات TLP الرئيسية</h3>

<div style="display: grid; gap: 1rem; margin-bottom: 1.5rem;">
<div style="background: #fef3c7; padding: 1.25rem; border-radius: 10px; border-right: 4px solid #f59e0b;">
<h4 style="color: #b45309; margin-bottom: 0.75rem; font-size: 1.1rem;">1. Hull (البدن)</h4>
<ul style="margin: 0; padding-right: 1.25rem; line-height: 1.8;">
<li><strong>التصميم:</strong> أربعة أعمدة (Columns) مرتبطة بـ Pontoons</li>
<li><strong>الطفو:</strong> الأعمدة توفر طفو زائد (Excess Buoyancy)</li>
<li><strong>الطفو الزائد:</strong> يجب أن يكون أكبر من شد الكابلات</li>
<li><strong>Wet Deck:</strong> السطح السفلي المعرض للأمواج</li>
</ul>
</div>

<div style="background: #ecfdf5; padding: 1.25rem; border-radius: 10px; border-right: 4px solid #10b981;">
<h4 style="color: #047857; margin-bottom: 0.75rem; font-size: 1.1rem;">2. Tendons (كابلات الشد)</h4>
<ul style="margin: 0; padding-right: 1.25rem; line-height: 1.8;">
<li><strong>المادة:</strong> أنابيب فولاذية عالية الشد أو ألياف كربونية</li>
<li><strong>العدد:</strong> 12-16 tendon عادةً (3-4 لكل زاوية)</li>
<li><strong>الشد:</strong> Pre-tensioned بقوة 500-2000 ton لكل tendon</li>
<li><strong>الوظيفة:</strong> منع Heave والحفاظ على ثبات المنصة</li>
</ul>
</div>

<div style="background: #f5f3ff; padding: 1.25rem; border-radius: 10px; border-right: 4px solid #7c3aed;">
<h4 style="color: #5b21b6; margin-bottom: 0.75rem; font-size: 1.1rem;">3. Foundation Template</h4>
<ul style="margin: 0; padding-right: 1.25rem; line-height: 1.8;">
<li><strong>الموقع:</strong> مثبت في قاع البحر</li>
<li><strong>الوظيفة:</strong> نقطة ربط الـ Tendons ورؤوس الآبار</li>
<li><strong>التثبيت:</strong> بواسطة Suction Piles أو Driven Piles</li>
</ul>
</div>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 ديناميكية TLP</h2>

<div style="background: #fef2f2; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem; border-right: 4px solid #ef4444;">
<h3 style="color: #b91c1c; font-size: 1.2rem; margin-bottom: 1rem;">📊 حركات TLP</h3>
<table style="width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden;">
<tr style="background: #ef4444; color: white;">
<th style="padding: 12px; text-align: center;">الحركة</th>
<th style="padding: 12px; text-align: center;">الاتجاه</th>
<th style="padding: 12px; text-align: center;">الاستجابة</th>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 10px; text-align: center;">Surge</td>
<td style="padding: 10px; text-align: center;">أمام/خلف</td>
<td style="padding: 10px; text-align: center;">مسموحة (Compliant)</td>
</tr>
<tr>
<td style="padding: 10px; text-align: center;">Sway</td>
<td style="padding: 10px; text-align: center;">يمين/يسار</td>
<td style="padding: 10px; text-align: center;">مسموحة (Compliant)</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 10px; text-align: center;">Yaw</td>
<td style="padding: 10px; text-align: center;">دوران أفقي</td>
<td style="padding: 10px; text-align: center;">مسموحة (Compliant)</td>
</tr>
<tr>
<td style="padding: 10px; text-align: center; font-weight: bold; color: #b91c1c;">Heave</td>
<td style="padding: 10px; text-align: center;">أعلى/أسفل</td>
<td style="padding: 10px; text-align: center; font-weight: bold;">ممنوعة (Restrained)</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 10px; text-align: center; font-weight: bold; color: #b91c1c;">Roll/Pitch</td>
<td style="padding: 10px; text-align: center;">ميل</td>
<td style="padding: 10px; text-align: center; font-weight: bold;">محدودة جداً</td>
</tr>
</table>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Spar Platform</h2>

<div style="background: linear-gradient(135deg, #fdf4ff 0%, #faf5ff 100%); padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem; border-right: 4px solid #a855f7;">
<h3 style="color: #7e22ce; font-size: 1.2rem; margin-bottom: 1rem;">🔵 مفهوم Spar</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">Spar هي منصة عائمة تتكون من أسطوانة عمودية ضخمة (Hull) مثبتة بواسطة Mooring Lines. الجزء السفلي مملوء بمواد ثقيلة لخفض مركز الجاذبية وتوفير الاستقرار.</p>
<p style="line-height: 1.8;"><strong>العمق التشغيلي:</strong> 2,000 - 10,000 ft | <strong>أول Spar:</strong> Neptune في خليج المكسيك 1996</p>
</div>

<h3 style="color: #ea580c; font-size: 1.25rem; margin-bottom: 1rem;">🏛️ أنواع Spar</h3>

<div style="display: grid; gap: 1rem; margin-bottom: 1.5rem;">
<div style="background: #dbeafe; padding: 1.25rem; border-radius: 10px; border-right: 4px solid #3b82f6;">
<h4 style="color: #1e40af; margin-bottom: 0.75rem; font-size: 1.1rem;">1. Classic Spar</h4>
<p style="margin: 0; line-height: 1.8;">أسطوانة واحدة متصلة. قطر 65-140 ft، طول 500-700 ft. الأبسط تصميماً لكن الأكبر حجماً.</p>
</div>

<div style="background: #fef3c7; padding: 1.25rem; border-radius: 10px; border-right: 4px solid #f59e0b;">
<h4 style="color: #b45309; margin-bottom: 0.75rem; font-size: 1.1rem;">2. Truss Spar</h4>
<p style="margin: 0; line-height: 1.8;">الجزء السفلي عبارة عن إطار فولاذي (Truss) بدلاً من أسطوانة صلبة. أخف وأقل تكلفة من Classic.</p>
</div>

<div style="background: #ecfdf5; padding: 1.25rem; border-radius: 10px; border-right: 4px solid #10b981;">
<h4 style="color: #047857; margin-bottom: 0.75rem; font-size: 1.1rem;">3. Cell Spar</h4>
<p style="margin: 0; line-height: 1.8;">مكون من عدة أسطوانات صغيرة متصلة. أسهل في التصنيع والنقل. الأكثر شيوعاً حالياً.</p>
</div>
</div>

<div style="background: linear-gradient(135deg, #ecfdf5 0%, #f0fdf4 100%); padding: 1.5rem; border-radius: 12px;">
<h3 style="color: #166534; font-size: 1.1rem; margin-bottom: 0.75rem;">⚓ نظام Mooring في Spar</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;"><strong>Catenary Mooring:</strong> خطوط متدلية على شكل قوس تصل للمراسي في قاع البحر. 9-12 خط mooring عادةً.</p>
<p style="line-height: 1.8;"><strong>Taut Leg Mooring:</strong> خطوط مشدودة بزاوية من القاع. بصمة أصغر على قاع البحر.</p>
</div>
</section>`,
          keyTerms: [
            { term: 'TLP', definition: 'Tension Leg Platform - منصة عائمة مثبتة بكابلات مشدودة عمودياً' },
            { term: 'Tendons', definition: 'الكابلات المشدودة التي تربط TLP بقاع البحر' },
            { term: 'Spar', definition: 'منصة عائمة أسطوانية مثبتة بخطوط الرسو' },
            { term: 'Heave', definition: 'الحركة الرأسية للمنصة (أعلى/أسفل) مع الأمواج' },
            { term: 'Catenary Mooring', definition: 'نظام رسو بخطوط متدلية على شكل قوس' },
          ],
          practiceQuestion: {
            question: 'ما الميزة الرئيسية لـ TLP مقارنة بالمنصات العائمة الأخرى؟',
            options: [
              'منع الحركة الرأسية (Heave) مما يسمح باستخدام Surface Wellheads',
              'تكلفة أقل بكثير',
              'عدم الحاجة لأي تثبيت',
              'مناسبة للمياه الضحلة فقط'
            ],
            correctAnswer: 0,
          },
        },
        en: {
          title: 'Offshore Drilling Systems - Day 3: TLP and Spar Platforms',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Tension Leg Platform (TLP)</h2>

<div style="background: linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 100%); padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem; border-left: 4px solid #0284c7;">
<h3 style="color: #0369a1; font-size: 1.2rem; margin-bottom: 1rem;">🏗️ TLP Concept</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">TLP is a floating platform secured by vertically tensioned cables (Tendons) from the seabed. The constant tension prevents vertical movement (Heave) while allowing horizontal movement with waves.</p>
<p style="line-height: 1.8;"><strong>Operating Depth:</strong> 1,500 - 5,000 ft | <strong>First TLP:</strong> Hutton in North Sea 1984</p>
</div>

<h3 style="color: #ea580c; font-size: 1.25rem; margin-bottom: 1rem;">⚙️ Main TLP Components</h3>

<div style="display: grid; gap: 1rem; margin-bottom: 1.5rem;">
<div style="background: #fef3c7; padding: 1.25rem; border-radius: 10px; border-left: 4px solid #f59e0b;">
<h4 style="color: #b45309; margin-bottom: 0.75rem; font-size: 1.1rem;">1. Hull</h4>
<ul style="margin: 0; padding-left: 1.25rem; line-height: 1.8;">
<li><strong>Design:</strong> Four columns connected by pontoons</li>
<li><strong>Buoyancy:</strong> Columns provide excess buoyancy</li>
<li><strong>Excess Buoyancy:</strong> Must exceed tendon tension</li>
<li><strong>Wet Deck:</strong> Lower surface exposed to waves</li>
</ul>
</div>

<div style="background: #ecfdf5; padding: 1.25rem; border-radius: 10px; border-left: 4px solid #10b981;">
<h4 style="color: #047857; margin-bottom: 0.75rem; font-size: 1.1rem;">2. Tendons</h4>
<ul style="margin: 0; padding-left: 1.25rem; line-height: 1.8;">
<li><strong>Material:</strong> High-tensile steel tubes or carbon fiber</li>
<li><strong>Count:</strong> Usually 12-16 tendons (3-4 per corner)</li>
<li><strong>Tension:</strong> Pre-tensioned with 500-2000 tons per tendon</li>
<li><strong>Function:</strong> Prevent Heave and maintain platform stability</li>
</ul>
</div>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 TLP Dynamics</h2>

<div style="background: #fef2f2; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem; border-left: 4px solid #ef4444;">
<h3 style="color: #b91c1c; font-size: 1.2rem; margin-bottom: 1rem;">📊 TLP Motions</h3>
<table style="width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden;">
<tr style="background: #ef4444; color: white;">
<th style="padding: 12px; text-align: center;">Motion</th>
<th style="padding: 12px; text-align: center;">Direction</th>
<th style="padding: 12px; text-align: center;">Response</th>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 10px; text-align: center;">Surge</td>
<td style="padding: 10px; text-align: center;">Fore/Aft</td>
<td style="padding: 10px; text-align: center;">Allowed (Compliant)</td>
</tr>
<tr>
<td style="padding: 10px; text-align: center;">Sway</td>
<td style="padding: 10px; text-align: center;">Port/Starboard</td>
<td style="padding: 10px; text-align: center;">Allowed (Compliant)</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 10px; text-align: center; font-weight: bold; color: #b91c1c;">Heave</td>
<td style="padding: 10px; text-align: center;">Up/Down</td>
<td style="padding: 10px; text-align: center; font-weight: bold;">Restrained</td>
</tr>
</table>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Spar Platform</h2>

<div style="background: linear-gradient(135deg, #fdf4ff 0%, #faf5ff 100%); padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem; border-left: 4px solid #a855f7;">
<h3 style="color: #7e22ce; font-size: 1.2rem; margin-bottom: 1rem;">🔵 Spar Concept</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">Spar is a floating platform consisting of a large vertical cylinder (Hull) secured by Mooring Lines. The lower portion is filled with heavy materials to lower the center of gravity and provide stability.</p>
<p style="line-height: 1.8;"><strong>Operating Depth:</strong> 2,000 - 10,000 ft | <strong>First Spar:</strong> Neptune in GOM 1996</p>
</div>

<h3 style="color: #ea580c; font-size: 1.25rem; margin-bottom: 1rem;">🏛️ Spar Types</h3>

<div style="display: grid; gap: 1rem; margin-bottom: 1.5rem;">
<div style="background: #dbeafe; padding: 1.25rem; border-radius: 10px; border-left: 4px solid #3b82f6;">
<h4 style="color: #1e40af; margin-bottom: 0.75rem; font-size: 1.1rem;">1. Classic Spar</h4>
<p style="margin: 0; line-height: 1.8;">Single continuous cylinder. Diameter 65-140 ft, length 500-700 ft. Simplest design but largest size.</p>
</div>

<div style="background: #fef3c7; padding: 1.25rem; border-radius: 10px; border-left: 4px solid #f59e0b;">
<h4 style="color: #b45309; margin-bottom: 0.75rem; font-size: 1.1rem;">2. Truss Spar</h4>
<p style="margin: 0; line-height: 1.8;">Lower section is steel truss instead of solid cylinder. Lighter and lower cost than Classic.</p>
</div>

<div style="background: #ecfdf5; padding: 1.25rem; border-radius: 10px; border-left: 4px solid #10b981;">
<h4 style="color: #047857; margin-bottom: 0.75rem; font-size: 1.1rem;">3. Cell Spar</h4>
<p style="margin: 0; line-height: 1.8;">Made of several small connected cylinders. Easier to fabricate and transport. Most common today.</p>
</div>
</div>

<div style="background: #dbeafe; padding: 1rem; border-radius: 8px; margin-top: 1.5rem;">
<p style="color: #1e40af; font-weight: 500; margin: 0;">💡 <strong>Key Note:</strong> TLP's main advantage is preventing heave motion, allowing use of surface wellheads instead of subsea systems.</p>
</div>
</section>`,
          keyTerms: [
            { term: 'TLP', definition: 'Tension Leg Platform - floating platform secured by vertically tensioned tendons' },
            { term: 'Tendons', definition: 'Tensioned cables connecting TLP to seabed' },
            { term: 'Spar', definition: 'Cylindrical floating platform secured by mooring lines' },
            { term: 'Heave', definition: 'Vertical platform motion (up/down) with waves' },
            { term: 'Catenary Mooring', definition: 'Mooring system with arc-shaped drooping lines' },
          ],
          practiceQuestion: {
            question: 'What is the main advantage of TLP compared to other floating platforms?',
            options: [
              'Prevents vertical motion (Heave) allowing use of surface wellheads',
              'Much lower cost',
              'No anchoring required',
              'Suitable for shallow water only'
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
          title: 'أنظمة الحفر البحري - اليوم الرابع: FPSO و Subsea Systems',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 FPSO - وحدة الإنتاج والتخزين العائمة</h2>

<div style="background: linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 100%); padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem; border-right: 4px solid #0284c7;">
<h3 style="color: #0369a1; font-size: 1.2rem; margin-bottom: 1rem;">🚢 تعريف FPSO</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;"><strong>Floating Production Storage and Offloading:</strong> سفينة أو منصة عائمة تستقبل النفط من الآبار البحرية، تعالجه، تخزنه، ثم تنقله لناقلات النفط (Shuttle Tankers).</p>
<p style="line-height: 1.8;"><strong>الميزة الرئيسية:</strong> لا تحتاج لأنابيب تصدير للشاطئ مما يجعلها مثالية للحقول البعيدة والمعزولة.</p>
</div>

<h3 style="color: #ea580c; font-size: 1.25rem; margin-bottom: 1rem;">🏗️ أنواع FPSO</h3>

<div style="display: grid; gap: 1rem; margin-bottom: 1.5rem;">
<div style="background: #fef3c7; padding: 1.25rem; border-radius: 10px; border-right: 4px solid #f59e0b;">
<h4 style="color: #b45309; margin-bottom: 0.75rem; font-size: 1.1rem;">1. Converted Tanker</h4>
<ul style="margin: 0; padding-right: 1.25rem; line-height: 1.8;">
<li>ناقلة نفط قديمة معدلة لتصبح FPSO</li>
<li>التكلفة: أقل من البناء الجديد</li>
<li>الوقت: 18-24 شهر للتحويل</li>
<li>العمر: محدود بعمر الناقلة الأصلية</li>
</ul>
</div>

<div style="background: #ecfdf5; padding: 1.25rem; border-radius: 10px; border-right: 4px solid #10b981;">
<h4 style="color: #047857; margin-bottom: 0.75rem; font-size: 1.1rem;">2. Purpose-Built FPSO</h4>
<ul style="margin: 0; padding-right: 1.25rem; line-height: 1.8;">
<li>مصممة ومبنية خصيصاً كـ FPSO</li>
<li>التكلفة: أعلى بكثير</li>
<li>العمر: 25-30 سنة</li>
<li>الأداء: أفضل لظروف البحر القاسية</li>
</ul>
</div>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 نظام Turret Mooring</h2>

<div style="background: #f5f3ff; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem; border-right: 4px solid #7c3aed;">
<h3 style="color: #5b21b6; font-size: 1.2rem; margin-bottom: 1rem;">🔄 مفهوم Turret</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">Turret هو برج دوار يسمح للسفينة بالدوران 360° حول نقطة ثابتة (Weathervaning) مع بقاء Risers والخطوط ثابتة.</p>

<div style="display: grid; gap: 1rem;">
<div style="background: white; padding: 1rem; border-radius: 8px;">
<h4 style="color: #5b21b6; margin-bottom: 0.5rem;">Internal Turret</h4>
<p style="margin: 0; line-height: 1.6;">مدمج داخل بدن السفينة. أفضل للبحار الهائجة. يستخدم في بحر الشمال.</p>
</div>
<div style="background: white; padding: 1rem; border-radius: 8px;">
<h4 style="color: #5b21b6; margin-bottom: 0.5rem;">External Turret</h4>
<p style="margin: 0; line-height: 1.6;">مثبت خارج السفينة (أمام أو خلف). أسهل في الصيانة. للبحار المعتدلة.</p>
</div>
</div>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Subsea Production Systems</h2>

<div style="background: linear-gradient(135deg, #fff7ed 0%, #fffbeb 100%); padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<h3 style="color: #c2410c; font-size: 1.2rem; margin-bottom: 1rem;">🛢️ مكونات النظام البحري</h3>

<div style="display: grid; gap: 1rem;">
<div style="background: white; padding: 1.25rem; border-radius: 10px; border-right: 3px solid #f97316;">
<h4 style="color: #ea580c; margin-bottom: 0.75rem;">1. Subsea Wellhead</h4>
<p style="line-height: 1.8;">رأس البئر المثبت في قاع البحر. يحتوي على Casing Hangers وواجهات الاتصال بالـ BOP.</p>
</div>

<div style="background: white; padding: 1.25rem; border-radius: 10px; border-right: 3px solid #f97316;">
<h4 style="color: #ea580c; margin-bottom: 0.75rem;">2. Subsea Christmas Tree</h4>
<p style="line-height: 1.8;">نظام صمامات التحكم بالإنتاج. Vertical Tree أو Horizontal Tree. يتحكم في تدفق النفط والغاز.</p>
</div>

<div style="background: white; padding: 1.25rem; border-radius: 10px; border-right: 3px solid #f97316;">
<h4 style="color: #ea580c; margin-bottom: 0.75rem;">3. Manifold</h4>
<p style="line-height: 1.8;">محطة تجميع تستقبل الإنتاج من عدة آبار وتوجهه لخط واحد نحو المنصة أو FPSO.</p>
</div>

<div style="background: white; padding: 1.25rem; border-radius: 10px; border-right: 3px solid #f97316;">
<h4 style="color: #ea580c; margin-bottom: 0.75rem;">4. Flowlines & Risers</h4>
<p style="line-height: 1.8;"><strong>Flowlines:</strong> أنابيب على قاع البحر تنقل الإنتاج. <strong>Risers:</strong> أنابيب رأسية ترفع الإنتاج للسطح.</p>
</div>

<div style="background: white; padding: 1.25rem; border-radius: 10px; border-right: 3px solid #f97316;">
<h4 style="color: #ea580c; margin-bottom: 0.75rem;">5. Umbilicals</h4>
<p style="line-height: 1.8;">كابلات متعددة الوظائف تنقل الطاقة الكهربائية والهيدروليكية وإشارات التحكم والكيماويات للمعدات البحرية.</p>
</div>
</div>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Subsea Tieback</h2>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem; border-right: 4px solid #3b82f6;">
<h3 style="color: #1e40af; font-size: 1.2rem; margin-bottom: 1rem;">🔗 ربط الآبار بالمنصات</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;"><strong>Subsea Tieback:</strong> ربط آبار بحرية بمنصة أو FPSO موجودة بدلاً من بناء منصة جديدة. يوفر مليارات الدولارات للحقول الصغيرة والمتوسطة.</p>

<table style="width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden;">
<tr style="background: #3b82f6; color: white;">
<th style="padding: 12px; text-align: center;">المسافة</th>
<th style="padding: 12px; text-align: center;">التصنيف</th>
<th style="padding: 12px; text-align: center;">التحديات</th>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 10px; text-align: center;">< 10 km</td>
<td style="padding: 10px; text-align: center;">Short Tieback</td>
<td style="padding: 10px; text-align: center;">بسيطة نسبياً</td>
</tr>
<tr>
<td style="padding: 10px; text-align: center;">10-40 km</td>
<td style="padding: 10px; text-align: center;">Medium Tieback</td>
<td style="padding: 10px; text-align: center;">Flow Assurance</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 10px; text-align: center;">> 40 km</td>
<td style="padding: 10px; text-align: center;">Long Tieback</td>
<td style="padding: 10px; text-align: center;">Hydrates, Wax, Cooling</td>
</tr>
</table>
</div>

<div style="background: #fef2f2; padding: 1.25rem; border-radius: 10px; border-right: 4px solid #ef4444;">
<h3 style="color: #b91c1c; font-size: 1.1rem; margin-bottom: 0.75rem;">⚠️ تحديات Flow Assurance</h3>
<ul style="margin: 0; padding-right: 1.25rem; line-height: 1.8;">
<li><strong>Hydrates:</strong> تكون جليد الغاز في الأنابيب الباردة - يُمنع بالعزل والتسخين والكيماويات</li>
<li><strong>Wax Deposition:</strong> ترسب الشمع عند انخفاض الحرارة - يُعالج بالكشط الدوري (Pigging)</li>
<li><strong>Asphaltenes:</strong> ترسب مواد ثقيلة - يُمنع بحقن المذيبات</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'FPSO', definition: 'وحدة إنتاج وتخزين عائمة تعالج النفط وتنقله للناقلات' },
            { term: 'Turret', definition: 'نظام رسو دوار يسمح للسفينة بالدوران حول نقطة ثابتة' },
            { term: 'Subsea Tree', definition: 'نظام صمامات التحكم بالإنتاج المثبت في قاع البحر' },
            { term: 'Manifold', definition: 'محطة تجميع الإنتاج من عدة آبار بحرية' },
            { term: 'Umbilical', definition: 'كابل متعدد الوظائف ينقل الطاقة والتحكم للمعدات البحرية' },
          ],
          practiceQuestion: {
            question: 'ما هي الميزة الرئيسية لاستخدام FPSO بدلاً من منصة ثابتة؟',
            options: [
              'لا تحتاج أنابيب تصدير للشاطئ ومناسبة للحقول البعيدة',
              'أرخص دائماً من المنصات الثابتة',
              'يمكنها الحفر مباشرة',
              'لا تحتاج أي صيانة'
            ],
            correctAnswer: 0,
          },
        },
        en: {
          title: 'Offshore Drilling Systems - Day 4: FPSO & Subsea Systems',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 FPSO - Floating Production Storage and Offloading</h2>

<div style="background: linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 100%); padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem; border-left: 4px solid #0284c7;">
<h3 style="color: #0369a1; font-size: 1.2rem; margin-bottom: 1rem;">🚢 FPSO Definition</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;"><strong>Floating Production Storage and Offloading:</strong> A ship or floating platform that receives oil from subsea wells, processes it, stores it, then transfers to shuttle tankers.</p>
<p style="line-height: 1.8;"><strong>Main Advantage:</strong> No need for export pipelines to shore, making it ideal for remote and isolated fields.</p>
</div>

<h3 style="color: #ea580c; font-size: 1.25rem; margin-bottom: 1rem;">🏗️ FPSO Types</h3>

<div style="display: grid; gap: 1rem; margin-bottom: 1.5rem;">
<div style="background: #fef3c7; padding: 1.25rem; border-radius: 10px; border-left: 4px solid #f59e0b;">
<h4 style="color: #b45309; margin-bottom: 0.75rem; font-size: 1.1rem;">1. Converted Tanker</h4>
<ul style="margin: 0; padding-left: 1.25rem; line-height: 1.8;">
<li>Old oil tanker converted to FPSO</li>
<li>Cost: Lower than newbuild</li>
<li>Time: 18-24 months for conversion</li>
<li>Life: Limited by original tanker age</li>
</ul>
</div>

<div style="background: #ecfdf5; padding: 1.25rem; border-radius: 10px; border-left: 4px solid #10b981;">
<h4 style="color: #047857; margin-bottom: 0.75rem; font-size: 1.1rem;">2. Purpose-Built FPSO</h4>
<ul style="margin: 0; padding-left: 1.25rem; line-height: 1.8;">
<li>Designed and built specifically as FPSO</li>
<li>Cost: Much higher</li>
<li>Life: 25-30 years</li>
<li>Performance: Better for harsh sea conditions</li>
</ul>
</div>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Subsea Production Systems</h2>

<div style="background: linear-gradient(135deg, #fff7ed 0%, #fffbeb 100%); padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
<h3 style="color: #c2410c; font-size: 1.2rem; margin-bottom: 1rem;">🛢️ Subsea System Components</h3>

<div style="display: grid; gap: 1rem;">
<div style="background: white; padding: 1.25rem; border-radius: 10px; border-left: 3px solid #f97316;">
<h4 style="color: #ea580c; margin-bottom: 0.75rem;">1. Subsea Wellhead</h4>
<p style="line-height: 1.8;">Wellhead fixed on seabed. Contains Casing Hangers and BOP connection interfaces.</p>
</div>

<div style="background: white; padding: 1.25rem; border-radius: 10px; border-left: 3px solid #f97316;">
<h4 style="color: #ea580c; margin-bottom: 0.75rem;">2. Subsea Christmas Tree</h4>
<p style="line-height: 1.8;">Production control valve system. Vertical or Horizontal Tree. Controls oil and gas flow.</p>
</div>

<div style="background: white; padding: 1.25rem; border-radius: 10px; border-left: 3px solid #f97316;">
<h4 style="color: #ea580c; margin-bottom: 0.75rem;">3. Manifold</h4>
<p style="line-height: 1.8;">Collection station receiving production from multiple wells and routing to single line toward platform or FPSO.</p>
</div>

<div style="background: white; padding: 1.25rem; border-radius: 10px; border-left: 3px solid #f97316;">
<h4 style="color: #ea580c; margin-bottom: 0.75rem;">4. Umbilicals</h4>
<p style="line-height: 1.8;">Multi-function cables carrying electrical power, hydraulics, control signals, and chemicals to subsea equipment.</p>
</div>
</div>
</div>

<div style="background: #dbeafe; padding: 1rem; border-radius: 8px; margin-top: 1.5rem;">
<p style="color: #1e40af; font-weight: 500; margin: 0;">💡 <strong>Key Note:</strong> Subsea Tieback connects subsea wells to existing platform/FPSO, saving billions for small and medium fields.</p>
</div>
</section>`,
          keyTerms: [
            { term: 'FPSO', definition: 'Floating production and storage unit that processes oil and transfers to tankers' },
            { term: 'Turret', definition: 'Rotating mooring system allowing vessel to weathervane around fixed point' },
            { term: 'Subsea Tree', definition: 'Production control valve system installed on seabed' },
            { term: 'Manifold', definition: 'Collection station for production from multiple subsea wells' },
            { term: 'Umbilical', definition: 'Multi-function cable carrying power and control to subsea equipment' },
          ],
          practiceQuestion: {
            question: 'What is the main advantage of using FPSO instead of fixed platform?',
            options: [
              'No need for export pipelines to shore, suitable for remote fields',
              'Always cheaper than fixed platforms',
              'Can drill directly',
              'No maintenance required'
            ],
            correctAnswer: 0,
          },
        },
      },
    },
    {
      day: 5,
      type: 'learning',
      content: {
        ar: {
          title: 'أنظمة الحفر البحري - اليوم الخامس: اختيار المنصة والاعتبارات الاقتصادية',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 معايير اختيار نوع المنصة</h2>

<div style="background: linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 100%); padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem; border-right: 4px solid #0284c7;">
<h3 style="color: #0369a1; font-size: 1.2rem; margin-bottom: 1rem;">📊 العوامل المحددة لاختيار المنصة</h3>
<table style="width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden;">
<tr style="background: #0284c7; color: white;">
<th style="padding: 12px; text-align: center;">العامل</th>
<th style="padding: 12px; text-align: center;">التأثير على الاختيار</th>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 10px; font-weight: bold;">عمق المياه</td>
<td style="padding: 10px;">العامل الأهم - يحدد الخيارات المتاحة مباشرة</td>
</tr>
<tr>
<td style="padding: 10px; font-weight: bold;">حجم المكمن</td>
<td style="padding: 10px;">حقل كبير = منصة ثابتة، صغير = Subsea Tieback</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 10px; font-weight: bold;">ظروف البحر</td>
<td style="padding: 10px;">بحار هائجة تتطلب تصميمات أقوى ومكلفة</td>
</tr>
<tr>
<td style="padding: 10px; font-weight: bold;">البنية التحتية</td>
<td style="padding: 10px;">وجود منصات قريبة يشجع Tieback</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 10px; font-weight: bold;">عمر الحقل</td>
<td style="padding: 10px;">حقل طويل العمر يبرر استثمار منصة ثابتة</td>
</tr>
</table>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 مصفوفة اختيار المنصة حسب العمق</h2>

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem; border-right: 4px solid #f59e0b;">
<h3 style="color: #b45309; font-size: 1.2rem; margin-bottom: 1rem;">🗺️ خريطة الاختيار</h3>
<table style="width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden; font-size: 0.95rem;">
<tr style="background: #f59e0b; color: white;">
<th style="padding: 10px; text-align: center;">العمق (ft)</th>
<th style="padding: 10px; text-align: center;">الحفر</th>
<th style="padding: 10px; text-align: center;">الإنتاج</th>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 8px; text-align: center; font-weight: bold;">0-400</td>
<td style="padding: 8px; text-align: center;">Jackup</td>
<td style="padding: 8px; text-align: center;">Fixed Platform, Jackup</td>
</tr>
<tr>
<td style="padding: 8px; text-align: center; font-weight: bold;">400-1,500</td>
<td style="padding: 8px; text-align: center;">Jackup (Max), Semi</td>
<td style="padding: 8px; text-align: center;">Fixed, TLP, Spar</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 8px; text-align: center; font-weight: bold;">1,500-5,000</td>
<td style="padding: 8px; text-align: center;">Semisubmersible</td>
<td style="padding: 8px; text-align: center;">TLP, Spar, FPSO</td>
</tr>
<tr>
<td style="padding: 8px; text-align: center; font-weight: bold;">5,000-10,000</td>
<td style="padding: 8px; text-align: center;">Drillship, Semi</td>
<td style="padding: 8px; text-align: center;">Spar, FPSO, Subsea</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 8px; text-align: center; font-weight: bold;">> 10,000</td>
<td style="padding: 8px; text-align: center;">Drillship</td>
<td style="padding: 8px; text-align: center;">FPSO + Subsea</td>
</tr>
</table>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 التكاليف المقارنة</h2>

<div style="background: #ecfdf5; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem; border-right: 4px solid #10b981;">
<h3 style="color: #047857; font-size: 1.2rem; margin-bottom: 1rem;">💰 تكاليف CAPEX التقريبية (2024)</h3>
<table style="width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden;">
<tr style="background: #10b981; color: white;">
<th style="padding: 12px; text-align: center;">نوع المنصة</th>
<th style="padding: 12px; text-align: center;">التكلفة (مليون $)</th>
<th style="padding: 12px; text-align: center;">وقت البناء</th>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 10px; text-align: center;">Jackup (حفر)</td>
<td style="padding: 10px; text-align: center;">200 - 350</td>
<td style="padding: 10px; text-align: center;">18-24 شهر</td>
</tr>
<tr>
<td style="padding: 10px; text-align: center;">Steel Jacket</td>
<td style="padding: 10px; text-align: center;">300 - 800</td>
<td style="padding: 10px; text-align: center;">24-36 شهر</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 10px; text-align: center;">TLP</td>
<td style="padding: 10px; text-align: center;">800 - 1,500</td>
<td style="padding: 10px; text-align: center;">30-42 شهر</td>
</tr>
<tr>
<td style="padding: 10px; text-align: center;">Spar</td>
<td style="padding: 10px; text-align: center;">1,000 - 2,000</td>
<td style="padding: 10px; text-align: center;">36-48 شهر</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 10px; text-align: center;">FPSO (جديد)</td>
<td style="padding: 10px; text-align: center;">1,500 - 3,500</td>
<td style="padding: 10px; text-align: center;">36-48 شهر</td>
</tr>
<tr>
<td style="padding: 10px; text-align: center;">Drillship</td>
<td style="padding: 10px; text-align: center;">600 - 900</td>
<td style="padding: 10px; text-align: center;">24-36 شهر</td>
</tr>
</table>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 أسعار الإيجار اليومية (Day Rates)</h2>

<div style="background: #f5f3ff; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem; border-right: 4px solid #7c3aed;">
<h3 style="color: #5b21b6; font-size: 1.2rem; margin-bottom: 1rem;">📈 معدلات السوق ($/يوم)</h3>
<table style="width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden;">
<tr style="background: #7c3aed; color: white;">
<th style="padding: 12px; text-align: center;">نوع الحفارة</th>
<th style="padding: 12px; text-align: center;">السوق المنخفض</th>
<th style="padding: 12px; text-align: center;">السوق المرتفع</th>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 10px; text-align: center;">Jackup (Premium)</td>
<td style="padding: 10px; text-align: center;">80,000</td>
<td style="padding: 10px; text-align: center;">150,000</td>
</tr>
<tr>
<td style="padding: 10px; text-align: center;">Jackup (Standard)</td>
<td style="padding: 10px; text-align: center;">50,000</td>
<td style="padding: 10px; text-align: center;">100,000</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 10px; text-align: center;">Semisubmersible</td>
<td style="padding: 10px; text-align: center;">200,000</td>
<td style="padding: 10px; text-align: center;">450,000</td>
</tr>
<tr>
<td style="padding: 10px; text-align: center;">Drillship (7th Gen)</td>
<td style="padding: 10px; text-align: center;">300,000</td>
<td style="padding: 10px; text-align: center;">500,000+</td>
</tr>
</table>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 دراسة حالة: اختيار منصة لحقل جديد</h2>

<div style="background: linear-gradient(135deg, #fef2f2 0%, #fff1f2 100%); padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem; border-right: 4px solid #ef4444;">
<h3 style="color: #b91c1c; font-size: 1.2rem; margin-bottom: 1rem;">📋 سيناريو: حقل بحر الشمال</h3>
<div style="background: white; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="line-height: 1.8;"><strong>المعطيات:</strong></p>
<ul style="padding-right: 1.25rem; line-height: 1.8;">
<li>عمق المياه: 350 ft</li>
<li>الاحتياطي: 150 مليون برميل</li>
<li>عمر الحقل المتوقع: 15 سنة</li>
<li>ظروف البحر: قاسية (بحر الشمال)</li>
<li>بنية تحتية قريبة: منصة إنتاج على بعد 25 km</li>
</ul>
</div>

<div style="background: white; padding: 1rem; border-radius: 8px;">
<p style="line-height: 1.8;"><strong>الخيارات المتاحة:</strong></p>
<ol style="padding-right: 1.25rem; line-height: 2;">
<li><strong>Jackup للحفر + Fixed Platform للإنتاج:</strong> CAPEX ~$600M، استقلالية كاملة</li>
<li><strong>Jackup للحفر + Subsea Tieback:</strong> CAPEX ~$350M، أقل تكلفة لكن تعتمد على المنصة القريبة</li>
<li><strong>Jackup للحفر والإنتاج:</strong> CAPEX ~$300M، مناسبة للحقول الصغيرة</li>
</ol>
<p style="margin-top: 1rem; font-weight: bold; color: #166534;">✅ القرار: الخيار 2 (Subsea Tieback) لأن وجود منصة قريبة يوفر $250M+ في CAPEX.</p>
</div>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 اعتبارات إزالة التركيب (Decommissioning)</h2>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; border-right: 4px solid #3b82f6;">
<h3 style="color: #1e40af; font-size: 1.2rem; margin-bottom: 1rem;">🔄 تكاليف نهاية العمر</h3>
<p style="line-height: 1.8; margin-bottom: 1rem;">يجب احتساب تكاليف Decommissioning ضمن الجدوى الاقتصادية من البداية:</p>
<ul style="padding-right: 1.25rem; line-height: 1.8;">
<li><strong>Steel Jacket:</strong> 10-15% من CAPEX الأصلي</li>
<li><strong>GBS:</strong> صعبة جداً - قد تُترك في مكانها</li>
<li><strong>TLP/Spar:</strong> 15-20% من CAPEX</li>
<li><strong>FPSO:</strong> يمكن إعادة استخدامها في حقل آخر</li>
<li><strong>Subsea:</strong> الأقل تكلفة - إزالة الأشجار والأنابيب</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'CAPEX', definition: 'Capital Expenditure - التكاليف الرأسمالية للبناء والتركيب' },
            { term: 'Day Rate', definition: 'سعر إيجار الحفارة باليوم' },
            { term: 'Tieback', definition: 'ربط آبار بحرية بمنصة موجودة بدلاً من بناء جديد' },
            { term: 'Decommissioning', definition: 'إزالة المنصة في نهاية عمر الحقل' },
            { term: 'Field Life', definition: 'العمر الإنتاجي المتوقع للحقل' },
          ],
          practiceQuestion: {
            question: 'لماذا قد يكون Subsea Tieback الخيار الأفضل لحقل صغير قرب منصة موجودة؟',
            options: [
              'يوفر تكاليف CAPEX الضخمة لبناء منصة جديدة',
              'لأنه الأسرع في التركيب دائماً',
              'لا يحتاج أي معدات بحرية',
              'يوفر إنتاج أعلى من المنصة الثابتة'
            ],
            correctAnswer: 0,
          },
        },
        en: {
          title: 'Offshore Drilling Systems - Day 5: Platform Selection and Economic Considerations',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Platform Selection Criteria</h2>

<div style="background: linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 100%); padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem; border-left: 4px solid #0284c7;">
<h3 style="color: #0369a1; font-size: 1.2rem; margin-bottom: 1rem;">📊 Key Selection Factors</h3>
<table style="width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden;">
<tr style="background: #0284c7; color: white;">
<th style="padding: 12px; text-align: center;">Factor</th>
<th style="padding: 12px; text-align: center;">Impact on Selection</th>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 10px; font-weight: bold;">Water Depth</td>
<td style="padding: 10px;">Most important - directly determines available options</td>
</tr>
<tr>
<td style="padding: 10px; font-weight: bold;">Reservoir Size</td>
<td style="padding: 10px;">Large field = Fixed platform, Small = Subsea Tieback</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 10px; font-weight: bold;">Sea Conditions</td>
<td style="padding: 10px;">Harsh seas require stronger, expensive designs</td>
</tr>
<tr>
<td style="padding: 10px; font-weight: bold;">Infrastructure</td>
<td style="padding: 10px;">Nearby platforms encourage Tieback</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 10px; font-weight: bold;">Field Life</td>
<td style="padding: 10px;">Long life justifies fixed platform investment</td>
</tr>
</table>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Platform Selection Matrix by Depth</h2>

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem; border-left: 4px solid #f59e0b;">
<h3 style="color: #b45309; font-size: 1.2rem; margin-bottom: 1rem;">🗺️ Selection Map</h3>
<table style="width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden;">
<tr style="background: #f59e0b; color: white;">
<th style="padding: 10px; text-align: center;">Depth (ft)</th>
<th style="padding: 10px; text-align: center;">Drilling</th>
<th style="padding: 10px; text-align: center;">Production</th>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 8px; text-align: center; font-weight: bold;">0-400</td>
<td style="padding: 8px; text-align: center;">Jackup</td>
<td style="padding: 8px; text-align: center;">Fixed Platform, Jackup</td>
</tr>
<tr>
<td style="padding: 8px; text-align: center; font-weight: bold;">1,500-5,000</td>
<td style="padding: 8px; text-align: center;">Semisubmersible</td>
<td style="padding: 8px; text-align: center;">TLP, Spar, FPSO</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 8px; text-align: center; font-weight: bold;">> 10,000</td>
<td style="padding: 8px; text-align: center;">Drillship</td>
<td style="padding: 8px; text-align: center;">FPSO + Subsea</td>
</tr>
</table>
</div>

<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Comparative Costs</h2>

<div style="background: #ecfdf5; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem; border-left: 4px solid #10b981;">
<h3 style="color: #047857; font-size: 1.2rem; margin-bottom: 1rem;">💰 Approximate CAPEX (2024)</h3>
<table style="width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden;">
<tr style="background: #10b981; color: white;">
<th style="padding: 12px; text-align: center;">Platform Type</th>
<th style="padding: 12px; text-align: center;">Cost ($M)</th>
<th style="padding: 12px; text-align: center;">Build Time</th>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 10px; text-align: center;">Jackup (drilling)</td>
<td style="padding: 10px; text-align: center;">200 - 350</td>
<td style="padding: 10px; text-align: center;">18-24 months</td>
</tr>
<tr>
<td style="padding: 10px; text-align: center;">Steel Jacket</td>
<td style="padding: 10px; text-align: center;">300 - 800</td>
<td style="padding: 10px; text-align: center;">24-36 months</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 10px; text-align: center;">TLP</td>
<td style="padding: 10px; text-align: center;">800 - 1,500</td>
<td style="padding: 10px; text-align: center;">30-42 months</td>
</tr>
<tr>
<td style="padding: 10px; text-align: center;">FPSO (newbuild)</td>
<td style="padding: 10px; text-align: center;">1,500 - 3,500</td>
<td style="padding: 10px; text-align: center;">36-48 months</td>
</tr>
</table>
</div>

<div style="background: #dbeafe; padding: 1rem; border-radius: 8px; margin-top: 1.5rem;">
<p style="color: #1e40af; font-weight: 500; margin: 0;">💡 <strong>Key Note:</strong> Subsea Tieback to existing platform can save $250M+ in CAPEX for small/medium fields near existing infrastructure.</p>
</div>
</section>`,
          keyTerms: [
            { term: 'CAPEX', definition: 'Capital Expenditure - costs for construction and installation' },
            { term: 'Day Rate', definition: 'Daily rental rate for drilling rig' },
            { term: 'Tieback', definition: 'Connecting subsea wells to existing platform instead of new build' },
            { term: 'Decommissioning', definition: 'Platform removal at end of field life' },
            { term: 'Field Life', definition: 'Expected productive life of the field' },
          ],
          practiceQuestion: {
            question: 'Why might Subsea Tieback be the best choice for a small field near existing platform?',
            options: [
              'Saves massive CAPEX for building new platform',
              'Because it is always fastest to install',
              'No subsea equipment required',
              'Provides higher production than fixed platform'
            ],
            correctAnswer: 0,
          },
        },
      },
    },
    {
      day: 6,
      type: 'quiz',
      content: {
        ar: {
          title: 'اختبار أنظمة الحفر البحري',
          explanation: 'اختبر معرفتك بأنواع منصات الحفر البحري وأنظمة الإنتاج',
          keyTerms: [],
        },
        en: {
          title: 'Offshore Drilling Systems Quiz',
          explanation: 'Test your knowledge of offshore drilling platform types and production systems',
          keyTerms: [],
        },
      },
      quiz: {
        ar: [
          {
            question: 'ما هو الخطر الرئيسي أثناء تثبيت منصة Jackup؟',
            options: ['Punch-Through عند اختراق طبقة صلبة فوق ناعمة', 'تسرب النفط', 'انهيار البرج', 'فشل المحركات'],
            correctAnswer: 0,
          },
          {
            question: 'ما هو Air Gap في منصة Jackup؟',
            options: ['المسافة بين البدن وأعلى موجة متوقعة', 'المسافة بين الأرجل', 'عمق اختراق Spud Can', 'ارتفاع البرج'],
            correctAnswer: 0,
          },
          {
            question: 'ما الفرق الرئيسي بين Steel Jacket و GBS؟',
            options: ['Jacket يثبت بالأوتاد، GBS يثبت بوزنه', 'لا يوجد فرق', 'GBS أرخص دائماً', 'Jacket للمياه العميقة فقط'],
            correctAnswer: 0,
          },
          {
            question: 'لماذا تُستخدم TLP في المياه العميقة؟',
            options: ['لأنها تمنع حركة Heave وتسمح باستخدام Surface Wellheads', 'لأنها أرخص من Jackup', 'لأنها لا تحتاج كابلات', 'لأنها ثابتة تماماً'],
            correctAnswer: 0,
          },
          {
            question: 'ما هو Turret في FPSO؟',
            options: ['نظام رسو دوار يسمح للسفينة بالدوران حول نقطة ثابتة', 'خزان تخزين', 'نظام الحفر', 'محرك السفينة'],
            correctAnswer: 0,
          },
          {
            question: 'ما هي وظيفة Manifold في الأنظمة البحرية؟',
            options: ['تجميع الإنتاج من عدة آبار وتوجيهه لخط واحد', 'التحكم بالضغط', 'منع التسرب', 'توليد الطاقة'],
            correctAnswer: 0,
          },
          {
            question: 'أي نوع منصة مناسب لعمق 8000 ft للحفر؟',
            options: ['Drillship', 'Jackup', 'Fixed Platform', 'Steel Jacket'],
            correctAnswer: 0,
          },
          {
            question: 'ما هو Subsea Tieback؟',
            options: ['ربط آبار بحرية بمنصة موجودة', 'نوع من الكابلات', 'نظام BOP', 'طريقة حفر'],
            correctAnswer: 0,
          },
          {
            question: 'ما هي تحديات Flow Assurance في الأنابيب البحرية؟',
            options: ['Hydrates والشمع والأسفلتين', 'الضغط العالي فقط', 'الحرارة العالية', 'سرعة التدفق'],
            correctAnswer: 0,
          },
          {
            question: 'لماذا Decommissioning مهم في الاعتبارات الاقتصادية؟',
            options: ['لأن تكاليف إزالة المنصة يجب احتسابها من البداية', 'لا يُحتسب أبداً', 'لأنه مجاني', 'فقط للمنصات الصغيرة'],
            correctAnswer: 0,
          },
        ],
        en: [
          {
            question: 'What is the main hazard during Jackup installation?',
            options: ['Punch-Through when penetrating hard layer over soft', 'Oil spill', 'Derrick collapse', 'Engine failure'],
            correctAnswer: 0,
          },
          {
            question: 'What is Air Gap in a Jackup platform?',
            options: ['Distance between hull and highest expected wave', 'Distance between legs', 'Spud Can penetration depth', 'Derrick height'],
            correctAnswer: 0,
          },
          {
            question: 'What is the main difference between Steel Jacket and GBS?',
            options: ['Jacket is fixed by piles, GBS by its weight', 'No difference', 'GBS is always cheaper', 'Jacket for deep water only'],
            correctAnswer: 0,
          },
          {
            question: 'Why is TLP used in deep water?',
            options: ['Prevents Heave motion allowing Surface Wellheads', 'Cheaper than Jackup', 'No cables needed', 'Completely fixed'],
            correctAnswer: 0,
          },
          {
            question: 'What is Turret in FPSO?',
            options: ['Rotating mooring system allowing vessel weathervaning', 'Storage tank', 'Drilling system', 'Ship engine'],
            correctAnswer: 0,
          },
          {
            question: 'What is the function of Manifold in subsea systems?',
            options: ['Collect production from multiple wells to single line', 'Pressure control', 'Leak prevention', 'Power generation'],
            correctAnswer: 0,
          },
          {
            question: 'Which platform type is suitable for 8000 ft drilling?',
            options: ['Drillship', 'Jackup', 'Fixed Platform', 'Steel Jacket'],
            correctAnswer: 0,
          },
          {
            question: 'What is Subsea Tieback?',
            options: ['Connecting subsea wells to existing platform', 'Type of cable', 'BOP system', 'Drilling method'],
            correctAnswer: 0,
          },
          {
            question: 'What are Flow Assurance challenges in subsea pipelines?',
            options: ['Hydrates, wax, and asphaltenes', 'High pressure only', 'High temperature', 'Flow speed'],
            correctAnswer: 0,
          },
          {
            question: 'Why is Decommissioning important in economic considerations?',
            options: ['Removal costs must be calculated from the start', 'Never calculated', 'It is free', 'Only for small platforms'],
            correctAnswer: 0,
          },
        ],
      },
    },
    {
      day: 7,
      type: 'project',
      content: {
        ar: {
          title: 'مشروع أنظمة الحفر البحري',
          explanation: 'طبق معرفتك في اختيار منصة الحفر المناسبة',
          keyTerms: [],
        },
        en: {
          title: 'Offshore Drilling Systems Project',
          explanation: 'Apply your knowledge in selecting appropriate drilling platform',
          keyTerms: [],
        },
      },
      project: {
        ar: {
          title: 'مشروع تطبيقي - اختيار منصة لتطوير حقل بحري',
          description: 'أنت مهندس حفر في شركة نفطية واكتشفت حقلاً جديداً. قم بتحليل المعطيات واختيار نوع المنصة المناسب.',
          instructions: [
            'المعطيات: عمق المياه 2,500 ft، الاحتياطي 200 مليون برميل، ظروف بحر معتدلة، لا توجد بنية تحتية قريبة، عمر الحقل المتوقع 20 سنة',
            'حلل الخيارات المتاحة للحفر (Semisubmersible vs Drillship) واذكر مزايا وعيوب كل خيار',
            'حلل الخيارات المتاحة للإنتاج (TLP vs Spar vs FPSO) واذكر مزايا وعيوب كل خيار',
            'قدم توصيتك النهائية مع تبرير الاختيار اقتصادياً وتشغيلياً',
            'اذكر التحديات المتوقعة وكيفية التعامل معها (Flow Assurance، Weather، Logistics)',
          ],
          submissionType: 'text',
        },
        en: {
          title: 'Practical Project - Platform Selection for Offshore Field Development',
          description: 'You are a drilling engineer at an oil company that discovered a new field. Analyze the data and select the appropriate platform type.',
          instructions: [
            'Given: Water depth 2,500 ft, Reserves 200 million barrels, moderate sea conditions, no nearby infrastructure, expected field life 20 years',
            'Analyze drilling options (Semisubmersible vs Drillship) and mention advantages and disadvantages of each',
            'Analyze production options (TLP vs Spar vs FPSO) and mention advantages and disadvantages of each',
            'Provide your final recommendation with economic and operational justification',
            'Mention expected challenges and how to address them (Flow Assurance, Weather, Logistics)',
          ],
          submissionType: 'text',
        },
      },
    },
  ],
};
