import { WeeklyLesson } from '../weeklyContent';

export const multilateralWellsLesson: WeeklyLesson = {
  lessonId: 'multilateral-wells',
  days: [
    {
      day: 1,
      type: 'learning',
      content: {
        ar: {
          title: 'الآبار متعددة الفروع (Multilateral Wells) - المفاهيم الأساسية',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 ما هي الآبار متعددة الفروع؟</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
الآبار متعددة الفروع (Multilateral Wells - MLW) هي آبار لها أكثر من فرع جانبي (Lateral) يتفرع من البئر الرئيسي (Motherbore). هذه التقنية تسمح بالوصول لعدة مناطق أو مكامن من بئر واحد، مما يزيد الإنتاجية ويقلل التكاليف بشكل كبير.
</p>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="font-size: 1.25rem; margin-bottom: 1rem;">💡 الفكرة الأساسية</h3>
<p style="line-height: 1.8;">بدلاً من حفر عدة آبار للوصول لمناطق مختلفة من المكمن، نحفر بئراً واحداً ثم نحفر منه عدة فروع تصل لأماكن مختلفة. كل فرع يعمل كبئر مستقل للإنتاج.</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 مكونات البئر متعدد الفروع</h3>
<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #059669;">
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #059669;">1️⃣ البئر الرئيسي (Motherbore/Main Wellbore)</p>
<p style="line-height: 1.8;">البئر الأصلي الذي تتفرع منه الفروع الجانبية. عادةً يكون عمودياً أو مائلاً.</p>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #059669;">2️⃣ نقطة التقاطع (Junction)</p>
<p style="line-height: 1.8;">المكان الذي يتفرع منه الفرع الجانبي من البئر الرئيسي. هذه النقطة حرجة جداً وتحدد نوع ودرجة التعقيد.</p>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #059669;">3️⃣ الفروع الجانبية (Laterals)</p>
<p style="line-height: 1.8;">الآبار الفرعية التي تتفرع من البئر الرئيسي للوصول لمناطق مختلفة. يمكن أن تكون أفقية أو مائلة.</p>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #059669;">4️⃣ نظام العزل والتحكم (Isolation System)</p>
<p style="line-height: 1.8;">أنظمة للتحكم في التدفق من كل فرع بشكل مستقل ومنع التداخل بين الفروع.</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 مميزات الآبار متعددة الفروع</h3>
<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #2563eb;">
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background: #e2e8f0;">
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: right;">الميزة</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: right;">التفاصيل</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: right;">التوفير</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;"><strong>تقليل عدد الآبار</strong></td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">بئر واحد بدلاً من 3-5 آبار</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">40-60%</td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 12px; border: 1px solid #cbd5e1;"><strong>زيادة التعرض للمكمن</strong></td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">عدة فروع = مساحة تلامس أكبر</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">2-5x إنتاج</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;"><strong>تقليل المساحة السطحية</strong></td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">موقع واحد بدلاً من عدة مواقع</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">أثر بيئي أقل</td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 12px; border: 1px solid #cbd5e1;"><strong>تحسين الاستخلاص</strong></td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">تصريف أفضل للمكمن</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">10-20% زيادة</td>
</tr>
</tbody>
</table>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 تطبيقات الآبار متعددة الفروع</h3>
<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #f59e0b;">
<ul style="line-height: 2.2; padding-right: 1.5rem;">
<li><strong>المكامن الرقيقة المتعددة:</strong> الوصول لعدة طبقات منتجة من بئر واحد</li>
<li><strong>المكامن المتشققة:</strong> عدة فروع لاختراق أكبر عدد من الشقوق</li>
<li><strong>الحقول البحرية:</strong> تقليل عدد الـ Slots في المنصة</li>
<li><strong>المناطق المحدودة:</strong> الوصول لمناطق واسعة من موقع صغير</li>
<li><strong>تحسين الاستخلاص (EOR):</strong> فروع للحقن وفروع للإنتاج</li>
<li><strong>المكامن المعقدة:</strong> تجاوز الصدوع والحواجز الجيولوجية</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 مقارنة: آبار متعددة vs آبار منفردة</h3>
<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #64748b;">
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background: #e2e8f0;">
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: right;">السيناريو</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: right;">آبار منفردة</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: right;">بئر متعدد الفروع</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;">الوصول لـ 4 مناطق</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">4 آبار كاملة</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">1 بئر + 3 فروع</td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 12px; border: 1px solid #cbd5e1;">التكلفة التقريبية</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">$40 مليون</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">$20-25 مليون</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;">الوقت</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">120 يوم</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">60-80 يوم</td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 12px; border: 1px solid #cbd5e1;">المساحة السطحية</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">4 مواقع</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">1 موقع</td>
</tr>
</tbody>
</table>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>الآبار متعددة الفروع تتفرع من بئر رئيسي واحد</li>
<li>توفر 40-60% من تكلفة حفر آبار منفصلة</li>
<li>تزيد التعرض للمكمن والإنتاجية</li>
<li>تُستخدم في المكامن المتعددة والبحرية والمحدودة</li>
<li>نقطة التقاطع (Junction) هي العنصر الأهم والأكثر تعقيداً</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Multilateral Well', definition: 'بئر له أكثر من فرع جانبي يتفرع من البئر الرئيسي' },
            { term: 'Motherbore', definition: 'البئر الرئيسي الذي تتفرع منه الفروع الجانبية' },
            { term: 'Junction', definition: 'نقطة التقاطع حيث يتفرع الفرع الجانبي من البئر الرئيسي' },
            { term: 'Lateral', definition: 'الفرع الجانبي الذي يتفرع من البئر الرئيسي' },
            { term: 'Slot', definition: 'فتحة في المنصة البحرية لحفر بئر' },
          ],
          practiceQuestion: {
            question: 'ما هي الميزة الرئيسية للآبار متعددة الفروع؟',
            options: [
              'زيادة عمق الحفر',
              'الوصول لعدة مناطق من بئر واحد وتوفير التكلفة',
              'تقليل وقت الحفر فقط',
              'تحسين جودة الطين'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Multilateral Wells - Basic Concepts',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 What are Multilateral Wells?</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
Multilateral Wells (MLW) are wells with more than one lateral branch diverging from the main wellbore (Motherbore). This technique allows accessing multiple zones or reservoirs from a single well, significantly increasing productivity and reducing costs.
</p>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="font-size: 1.25rem; margin-bottom: 1rem;">💡 The Basic Idea</h3>
<p style="line-height: 1.8;">Instead of drilling multiple wells to reach different reservoir areas, we drill one well and then drill multiple branches reaching different locations. Each branch acts as an independent production well.</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Multilateral Well Components</h3>
<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #059669;">
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #059669;">1️⃣ Main Wellbore (Motherbore)</p>
<p style="line-height: 1.8;">The original well from which lateral branches diverge. Usually vertical or deviated.</p>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #059669;">2️⃣ Junction</p>
<p style="line-height: 1.8;">The location where the lateral branch diverges from the main wellbore. This point is critical and determines the type and complexity level.</p>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #059669;">3️⃣ Laterals</p>
<p style="line-height: 1.8;">The branch wells diverging from the main wellbore to reach different areas. Can be horizontal or deviated.</p>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #059669;">4️⃣ Isolation and Control System</p>
<p style="line-height: 1.8;">Systems to control flow from each branch independently and prevent interference between branches.</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Multilateral Well Advantages</h3>
<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #2563eb;">
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background: #e2e8f0;">
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: left;">Advantage</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: left;">Details</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: left;">Savings</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;"><strong>Reduce well count</strong></td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">One well instead of 3-5 wells</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">40-60%</td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 12px; border: 1px solid #cbd5e1;"><strong>Increase reservoir exposure</strong></td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Multiple branches = larger contact area</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">2-5x production</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;"><strong>Reduce surface footprint</strong></td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">One location instead of multiple</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Less environmental impact</td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 12px; border: 1px solid #cbd5e1;"><strong>Improve recovery</strong></td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Better reservoir drainage</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">10-20% increase</td>
</tr>
</tbody>
</table>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Multilateral Well Applications</h3>
<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #f59e0b;">
<ul style="line-height: 2.2; padding-left: 1.5rem;">
<li><strong>Multiple thin reservoirs:</strong> Accessing multiple productive layers from one well</li>
<li><strong>Fractured reservoirs:</strong> Multiple branches to penetrate maximum fractures</li>
<li><strong>Offshore fields:</strong> Reducing number of slots on platform</li>
<li><strong>Limited surface areas:</strong> Reaching wide areas from small location</li>
<li><strong>EOR (Enhanced Oil Recovery):</strong> Injection branches and production branches</li>
<li><strong>Complex reservoirs:</strong> Bypassing faults and geological barriers</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>Multilateral wells branch from a single main wellbore</li>
<li>Save 40-60% of cost vs drilling separate wells</li>
<li>Increase reservoir exposure and productivity</li>
<li>Used in multi-layer, offshore, and limited area applications</li>
<li>Junction is the most critical and complex element</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Multilateral Well', definition: 'Well with multiple lateral branches from main wellbore' },
            { term: 'Motherbore', definition: 'Main wellbore from which lateral branches diverge' },
            { term: 'Junction', definition: 'Point where lateral branch diverges from main wellbore' },
            { term: 'Lateral', definition: 'Branch well diverging from main wellbore' },
            { term: 'Slot', definition: 'Opening in offshore platform for drilling a well' },
          ],
          practiceQuestion: {
            question: 'What is the main advantage of multilateral wells?',
            options: [
              'Increase drilling depth',
              'Access multiple zones from one well and save cost',
              'Reduce drilling time only',
              'Improve mud quality'
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
          title: 'تصنيف TAML للآبار متعددة الفروع',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 نظام تصنيف TAML</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
TAML (Technology Advancement for Multilaterals) هو نظام تصنيف عالمي يصف مستوى تعقيد نقطة التقاطع (Junction) في الآبار متعددة الفروع. يتدرج من المستوى 1 (الأبسط) إلى المستوى 6 (الأكثر تعقيداً).
</p>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="font-size: 1.25rem; margin-bottom: 1rem;">💡 لماذا نحتاج TAML؟</h3>
<p style="line-height: 1.8;">اختيار مستوى TAML المناسب يعتمد على متطلبات المشروع: هل نحتاج إعادة الدخول للفروع؟ هل نحتاج عزل ميكانيكي؟ هل نحتاج سيطرة كاملة على الضغط؟ كل مستوى له تكلفته وقدراته.</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 مستويات TAML</h3>
<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #64748b;">
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 12px; border: 1px solid #cbd5e1;">المستوى</th>
<th style="padding: 12px; border: 1px solid #cbd5e1;">وصف الـ Junction</th>
<th style="padding: 12px; border: 1px solid #cbd5e1;">إعادة الدخول</th>
<th style="padding: 12px; border: 1px solid #cbd5e1;">العزل الهيدروليكي</th>
</tr>
</thead>
<tbody>
<tr style="background: #dcfce7;">
<td style="padding: 12px; border: 1px solid #cbd5e1; text-align: center;"><strong>1</strong></td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Open Hole - بدون أي تغليف أو بطانة</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">❌ لا</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">❌ لا</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1; text-align: center;"><strong>2</strong></td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">البئر الرئيسي مُغلف، الفرع Open Hole</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">❌ لا</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">❌ لا</td>
</tr>
<tr style="background: #fef3c7;">
<td style="padding: 12px; border: 1px solid #cbd5e1; text-align: center;"><strong>3</strong></td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">البئر الرئيسي مُغلف، الفرع ببطانة مُثبتة ميكانيكياً</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">✅ نعم</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">❌ لا</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1; text-align: center;"><strong>4</strong></td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Junction مُغلف بـ Casing مع عزل هيدروليكي</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">✅ نعم</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">✅ في الـ Junction</td>
</tr>
<tr style="background: #dbeafe;">
<td style="padding: 12px; border: 1px solid #cbd5e1; text-align: center;"><strong>5</strong></td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">سيطرة كاملة على الضغط بدون حاجة لإيقاف البئر</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">✅ تحت الضغط</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">✅ كامل</td>
</tr>
<tr style="background: #fee2e2;">
<td style="padding: 12px; border: 1px solid #cbd5e1; text-align: center;"><strong>6</strong></td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">سيطرة كاملة على الضغط مع إمكانية إنزال Downhole Equipment</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">✅ بدون قيود</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">✅ كامل</td>
</tr>
</tbody>
</table>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 تفاصيل كل مستوى</h3>

<div style="background: #dcfce7; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #059669;">
<h4 style="color: #059669; font-weight: bold; margin-bottom: 1rem;">🟢 TAML Level 1 & 2 - البسيط</h4>
<ul style="line-height: 2; padding-right: 1.5rem;">
<li><strong>Level 1:</strong> كلا البئر الرئيسي والفرع Open Hole - أبسط وأرخص</li>
<li><strong>Level 2:</strong> البئر الرئيسي مُغلف لكن الفرع بدون تغليف</li>
<li><strong>المميزات:</strong> تكلفة منخفضة، سريع التنفيذ</li>
<li><strong>العيوب:</strong> لا يمكن إعادة الدخول، لا عزل بين الفروع</li>
<li><strong>الاستخدام:</strong> مكامن مستقرة، لا حاجة لعمليات مستقبلية</li>
</ul>
</div>

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #f59e0b;">
<h4 style="color: #92400e; font-weight: bold; margin-bottom: 1rem;">🟡 TAML Level 3 - المتوسط</h4>
<ul style="line-height: 2; padding-right: 1.5rem;">
<li><strong>الوصف:</strong> الفرع ببطانة (Liner) مُثبتة ميكانيكياً في الـ Junction</li>
<li><strong>المميزات:</strong> إمكانية إعادة الدخول للفرع، حماية الجدار</li>
<li><strong>العيوب:</strong> لا يوجد عزل هيدروليكي كامل</li>
<li><strong>الاستخدام:</strong> عندما نحتاج عمليات مستقبلية (Workover)</li>
</ul>
</div>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #2563eb;">
<h4 style="color: #1e40af; font-weight: bold; margin-bottom: 1rem;">🔵 TAML Level 4 - المتقدم</h4>
<ul style="line-height: 2; padding-right: 1.5rem;">
<li><strong>الوصف:</strong> Junction مُغلف مع إسمنت أو Packers للعزل الهيدروليكي</li>
<li><strong>المميزات:</strong> عزل كامل عند الـ Junction، إمكانية إعادة الدخول</li>
<li><strong>العيوب:</strong> تكلفة ووقت أكثر</li>
<li><strong>الاستخدام:</strong> عندما نحتاج فصل الإنتاج بين الفروع</li>
</ul>
</div>

<div style="background: #fee2e2; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #dc2626;">
<h4 style="color: #dc2626; font-weight: bold; margin-bottom: 1rem;">🔴 TAML Level 5 & 6 - الاحترافي</h4>
<ul style="line-height: 2; padding-right: 1.5rem;">
<li><strong>Level 5:</strong> إعادة الدخول تحت الضغط (Live Well) ممكنة</li>
<li><strong>Level 6:</strong> كل قدرات Level 5 + إنزال معدات كاملة (ESPs, Valves)</li>
<li><strong>المميزات:</strong> سيطرة كاملة، مرونة تشغيلية عالية</li>
<li><strong>العيوب:</strong> تكلفة عالية جداً، تعقيد تقني</li>
<li><strong>الاستخدام:</strong> الحقول البحرية العميقة، المكامن المعقدة</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 اختيار مستوى TAML</h3>
<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #059669;">
<table style="width: 100%; border-collapse: collapse; background: #fff;">
<thead>
<tr style="background: #e2e8f0;">
<th style="padding: 10px; border: 1px solid #ddd;">المتطلب</th>
<th style="padding: 10px; border: 1px solid #ddd;">المستوى المناسب</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">بئر استكشافي، تكلفة محدودة</td>
<td style="padding: 10px; border: 1px solid #ddd;">Level 1-2</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">عمليات Workover متوقعة</td>
<td style="padding: 10px; border: 1px solid #ddd;">Level 3+</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">فصل إنتاج الفروع</td>
<td style="padding: 10px; border: 1px solid #ddd;">Level 4+</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">عمليات تحت الضغط (Live Well)</td>
<td style="padding: 10px; border: 1px solid #ddd;">Level 5-6</td>
</tr>
</tbody>
</table>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>TAML يصنف تعقيد الـ Junction من 1 إلى 6</li>
<li>Level 1-2: بسيط، رخيص، بدون إعادة دخول</li>
<li>Level 3: إعادة دخول ممكنة</li>
<li>Level 4: عزل هيدروليكي</li>
<li>Level 5-6: سيطرة كاملة تحت الضغط</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'TAML', definition: 'Technology Advancement for Multilaterals - نظام تصنيف الآبار متعددة الفروع' },
            { term: 'Hydraulic Isolation', definition: 'العزل الهيدروليكي - منع تدفق السوائل بين الفروع' },
            { term: 'Re-entry', definition: 'إعادة الدخول - القدرة على العودة للفرع لعمليات مستقبلية' },
            { term: 'Live Well', definition: 'بئر تحت الضغط - إجراء عمليات بدون إيقاف الإنتاج' },
            { term: 'Liner', definition: 'بطانة - أنبوب يُركب داخل البئر لا يصل للسطح' },
          ],
          practiceQuestion: {
            question: 'أي مستوى TAML يوفر إعادة دخول ولكن بدون عزل هيدروليكي؟',
            options: [
              'Level 1',
              'Level 2',
              'Level 3',
              'Level 5'
            ],
            correctAnswer: 2,
          },
        },
        en: {
          title: 'TAML Classification for Multilateral Wells',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 TAML Classification System</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
TAML (Technology Advancement for Multilaterals) is a global classification system describing the complexity level of the Junction in multilateral wells. It ranges from Level 1 (simplest) to Level 6 (most complex).
</p>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="font-size: 1.25rem; margin-bottom: 1rem;">💡 Why Do We Need TAML?</h3>
<p style="line-height: 1.8;">Choosing the appropriate TAML level depends on project requirements: Do we need re-entry to branches? Do we need mechanical isolation? Do we need full pressure control? Each level has its cost and capabilities.</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 TAML Levels</h3>
<div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #64748b;">
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 12px; border: 1px solid #cbd5e1;">Level</th>
<th style="padding: 12px; border: 1px solid #cbd5e1;">Junction Description</th>
<th style="padding: 12px; border: 1px solid #cbd5e1;">Re-entry</th>
<th style="padding: 12px; border: 1px solid #cbd5e1;">Hydraulic Isolation</th>
</tr>
</thead>
<tbody>
<tr style="background: #dcfce7;">
<td style="padding: 12px; border: 1px solid #cbd5e1; text-align: center;"><strong>1</strong></td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Open Hole - no casing or liner</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">❌ No</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">❌ No</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1; text-align: center;"><strong>2</strong></td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Main bore cased, lateral Open Hole</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">❌ No</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">❌ No</td>
</tr>
<tr style="background: #fef3c7;">
<td style="padding: 12px; border: 1px solid #cbd5e1; text-align: center;"><strong>3</strong></td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Main bore cased, lateral with mechanically anchored liner</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">✅ Yes</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">❌ No</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1; text-align: center;"><strong>4</strong></td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Cased junction with hydraulic isolation</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">✅ Yes</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">✅ At junction</td>
</tr>
<tr style="background: #dbeafe;">
<td style="padding: 12px; border: 1px solid #cbd5e1; text-align: center;"><strong>5</strong></td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Full pressure control without killing well</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">✅ Under pressure</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">✅ Full</td>
</tr>
<tr style="background: #fee2e2;">
<td style="padding: 12px; border: 1px solid #cbd5e1; text-align: center;"><strong>6</strong></td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Full pressure control with downhole equipment deployment</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">✅ Unrestricted</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">✅ Full</td>
</tr>
</tbody>
</table>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Level Details</h3>

<div style="background: #dcfce7; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #059669;">
<h4 style="color: #059669; font-weight: bold; margin-bottom: 1rem;">🟢 TAML Level 1 & 2 - Simple</h4>
<ul style="line-height: 2; padding-left: 1.5rem;">
<li><strong>Level 1:</strong> Both main and lateral Open Hole - simplest and cheapest</li>
<li><strong>Level 2:</strong> Main bore cased but lateral uncased</li>
<li><strong>Advantages:</strong> Low cost, quick execution</li>
<li><strong>Disadvantages:</strong> No re-entry, no isolation between branches</li>
<li><strong>Use:</strong> Stable reservoirs, no future operations needed</li>
</ul>
</div>

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #f59e0b;">
<h4 style="color: #92400e; font-weight: bold; margin-bottom: 1rem;">🟡 TAML Level 3 - Medium</h4>
<ul style="line-height: 2; padding-left: 1.5rem;">
<li><strong>Description:</strong> Lateral with liner mechanically anchored at junction</li>
<li><strong>Advantages:</strong> Re-entry possible, wall protection</li>
<li><strong>Disadvantages:</strong> No complete hydraulic isolation</li>
<li><strong>Use:</strong> When future operations (Workover) needed</li>
</ul>
</div>

<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #2563eb;">
<h4 style="color: #1e40af; font-weight: bold; margin-bottom: 1rem;">🔵 TAML Level 4 - Advanced</h4>
<ul style="line-height: 2; padding-left: 1.5rem;">
<li><strong>Description:</strong> Cased junction with cement or packers for hydraulic isolation</li>
<li><strong>Advantages:</strong> Complete isolation at junction, re-entry possible</li>
<li><strong>Disadvantages:</strong> More cost and time</li>
<li><strong>Use:</strong> When separating production between branches needed</li>
</ul>
</div>

<div style="background: #fee2e2; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #dc2626;">
<h4 style="color: #dc2626; font-weight: bold; margin-bottom: 1rem;">🔴 TAML Level 5 & 6 - Professional</h4>
<ul style="line-height: 2; padding-left: 1.5rem;">
<li><strong>Level 5:</strong> Re-entry under pressure (Live Well) possible</li>
<li><strong>Level 6:</strong> All Level 5 capabilities + full equipment deployment (ESPs, Valves)</li>
<li><strong>Advantages:</strong> Full control, high operational flexibility</li>
<li><strong>Disadvantages:</strong> Very high cost, technical complexity</li>
<li><strong>Use:</strong> Deepwater offshore, complex reservoirs</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>TAML classifies Junction complexity from 1 to 6</li>
<li>Level 1-2: Simple, cheap, no re-entry</li>
<li>Level 3: Re-entry possible</li>
<li>Level 4: Hydraulic isolation</li>
<li>Level 5-6: Full pressure control</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'TAML', definition: 'Technology Advancement for Multilaterals - classification system' },
            { term: 'Hydraulic Isolation', definition: 'Preventing fluid flow between branches' },
            { term: 'Re-entry', definition: 'Ability to return to branch for future operations' },
            { term: 'Live Well', definition: 'Well under pressure - performing operations without killing' },
            { term: 'Liner', definition: 'Pipe installed inside well that doesn\'t reach surface' },
          ],
          practiceQuestion: {
            question: 'Which TAML level provides re-entry but no hydraulic isolation?',
            options: [
              'Level 1',
              'Level 2',
              'Level 3',
              'Level 5'
            ],
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
          title: 'حفر وإنشاء الفروع الجانبية',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 تقنيات حفر الفروع الجانبية</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
حفر الفروع الجانبية يتطلب تقنيات خاصة للخروج من البئر الرئيسي المُغلف وتوجيه البت نحو الهدف الجديد. هناك عدة طرق لإنشاء نقطة الخروج (Exit Point).
</p>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 طرق إنشاء نقطة الخروج</h3>
<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #059669;">
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #059669;">1️⃣ Whipstock (الإسفين)</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li>أداة معدنية مائلة تُثبت داخل التغليف</li>
<li>توجه البت للخروج من جانب التغليف</li>
<li>الأكثر شيوعاً والأكثر موثوقية</li>
<li>يمكن استخدامه مع Retrievable أو Permanent Anchor</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #059669;">2️⃣ Casing Window (نافذة التغليف)</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li>قطع نافذة في جدار التغليف باستخدام Mills</li>
<li>تُستخدم بعد تثبيت Whipstock</li>
<li>حجم النافذة يحدد حجم الأدوات التي يمكن إنزالها</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #059669;">3️⃣ Pre-Milled Window</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li>نوافذ مُقطعة مسبقاً في التغليف قبل الإنزال</li>
<li>أسرع ولكن أقل مرونة في اختيار الموقع</li>
</ul>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 عملية Sidetracking (الحفر الجانبي)</h3>
<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #2563eb;">
<ol style="padding-right: 1.5rem; line-height: 2.5;">
<li><strong>تحديد العمق:</strong> اختيار عمق نقطة الخروج بناءً على الهدف الجيولوجي</li>
<li><strong>تنظيف البئر:</strong> ضخ وتنظيف البئر الرئيسي</li>
<li><strong>إنزال Whipstock:</strong> تثبيت الإسفين بالاتجاه والعمق المطلوب</li>
<li><strong>قطع النافذة:</strong> استخدام Mills لقطع فتحة في التغليف</li>
<li><strong>الحفر:</strong> حفر الفرع الجانبي باستخدام Motor أو RSS</li>
<li><strong>التغليف/الإكمال:</strong> تركيب بطانة أو إكمال الفرع</li>
</ol>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 أنواع الـ Whipstock</h3>
<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #f59e0b;">
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background: #fef3c7;">
<th style="padding: 12px; border: 1px solid #f59e0b; text-align: right;">النوع</th>
<th style="padding: 12px; border: 1px solid #f59e0b; text-align: right;">الوصف</th>
<th style="padding: 12px; border: 1px solid #f59e0b; text-align: right;">الاستخدام</th>
</tr>
</thead>
<tbody>
<tr style="background: #fff;">
<td style="padding: 12px; border: 1px solid #ddd;"><strong>Retrievable</strong></td>
<td style="padding: 12px; border: 1px solid #ddd;">يمكن إزالته بعد الحفر</td>
<td style="padding: 12px; border: 1px solid #ddd;">إعادة الدخول للبئر الرئيسي</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;"><strong>Permanent</strong></td>
<td style="padding: 12px; border: 1px solid #ddd;">يبقى في البئر</td>
<td style="padding: 12px; border: 1px solid #ddd;">أقوى، للفروع الدائمة</td>
</tr>
<tr style="background: #fff;">
<td style="padding: 12px; border: 1px solid #ddd;"><strong>Casing Exit</strong></td>
<td style="padding: 12px; border: 1px solid #ddd;">مصمم للخروج من التغليف</td>
<td style="padding: 12px; border: 1px solid #ddd;">الأكثر شيوعاً</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;"><strong>Open Hole</strong></td>
<td style="padding: 12px; border: 1px solid #ddd;">للخروج من الحفرة المفتوحة</td>
<td style="padding: 12px; border: 1px solid #ddd;">بدون تغليف</td>
</tr>
</tbody>
</table>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 تحديات حفر الفروع</h3>
<div style="background: #fee2e2; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #dc2626;">
<ul style="line-height: 2.2; padding-right: 1.5rem;">
<li><strong>توجيه Whipstock:</strong> يجب توجيهه بدقة نحو الاتجاه المطلوب</li>
<li><strong>حجم النافذة:</strong> نافذة صغيرة جداً تحد من الأدوات والتغليف</li>
<li><strong>Dogleg Severity:</strong> الانحناء الحاد بعد الخروج قد يسبب مشاكل</li>
<li><strong>تنظيف القطع:</strong> إزالة قطع المعدن من النافذة</li>
<li><strong>عدم الاستقرارية:</strong> منطقة الخروج قد تكون غير مستقرة</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 أدوات قطع النافذة (Mills)</h3>
<div style="background: #e8f4f8; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<ul style="line-height: 2.2; padding-right: 1.5rem;">
<li><strong>Starting Mill:</strong> يبدأ القطع ويتبع سطح Whipstock</li>
<li><strong>Window Mill:</strong> يوسع النافذة</li>
<li><strong>Watermelon Mill:</strong> ينعم حواف النافذة</li>
<li><strong>String Mill:</strong> ينظف ويوسع المسار</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>Whipstock هو الأداة الرئيسية للخروج الجانبي</li>
<li>يُستخدم Mills لقطع النافذة في التغليف</li>
<li>الخطوات: تثبيت Whipstock → قطع النافذة → الحفر</li>
<li>Retrievable Whipstock يسمح بإعادة الدخول للبئر الرئيسي</li>
<li>Dogleg Severity عند الخروج يجب أن يكون مناسباً</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Whipstock', definition: 'أداة مائلة لتوجيه البت للخروج من التغليف' },
            { term: 'Window', definition: 'فتحة تُقطع في التغليف للسماح بالخروج الجانبي' },
            { term: 'Mill', definition: 'أداة قطع لإنشاء النافذة في التغليف' },
            { term: 'Sidetrack', definition: 'حفر فرع جانبي من بئر موجود' },
            { term: 'Exit Point', definition: 'نقطة الخروج من البئر الرئيسي' },
          ],
          practiceQuestion: {
            question: 'ما هي الأداة الرئيسية المستخدمة للخروج الجانبي من التغليف؟',
            options: [
              'Drill Bit',
              'Whipstock',
              'Packer',
              'Centralizer'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Drilling and Creating Lateral Branches',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Lateral Branch Drilling Techniques</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
Drilling lateral branches requires special techniques to exit the cased main wellbore and direct the bit toward the new target. There are several methods for creating the Exit Point.
</p>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Exit Point Creation Methods</h3>
<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #059669;">
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #059669;">1️⃣ Whipstock</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li>Angled metal tool fixed inside casing</li>
<li>Directs bit to exit through casing side</li>
<li>Most common and most reliable</li>
<li>Can be used with Retrievable or Permanent Anchor</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #059669;">2️⃣ Casing Window</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li>Cutting a window in casing wall using Mills</li>
<li>Used after Whipstock installation</li>
<li>Window size determines tools that can be run</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #059669;">3️⃣ Pre-Milled Window</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li>Windows pre-cut in casing before running</li>
<li>Faster but less flexibility in location selection</li>
</ul>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Sidetracking Process</h3>
<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #2563eb;">
<ol style="padding-left: 1.5rem; line-height: 2.5;">
<li><strong>Determine Depth:</strong> Select exit point depth based on geological target</li>
<li><strong>Clean Well:</strong> Circulate and clean main wellbore</li>
<li><strong>Run Whipstock:</strong> Set whipstock at required depth and orientation</li>
<li><strong>Cut Window:</strong> Use Mills to cut opening in casing</li>
<li><strong>Drill:</strong> Drill lateral branch using Motor or RSS</li>
<li><strong>Casing/Completion:</strong> Install liner or complete branch</li>
</ol>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Whipstock Types</h3>
<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #f59e0b;">
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background: #fef3c7;">
<th style="padding: 12px; border: 1px solid #f59e0b; text-align: left;">Type</th>
<th style="padding: 12px; border: 1px solid #f59e0b; text-align: left;">Description</th>
<th style="padding: 12px; border: 1px solid #f59e0b; text-align: left;">Use</th>
</tr>
</thead>
<tbody>
<tr style="background: #fff;">
<td style="padding: 12px; border: 1px solid #ddd;"><strong>Retrievable</strong></td>
<td style="padding: 12px; border: 1px solid #ddd;">Can be removed after drilling</td>
<td style="padding: 12px; border: 1px solid #ddd;">Re-entry to main wellbore</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;"><strong>Permanent</strong></td>
<td style="padding: 12px; border: 1px solid #ddd;">Stays in well</td>
<td style="padding: 12px; border: 1px solid #ddd;">Stronger, for permanent laterals</td>
</tr>
<tr style="background: #fff;">
<td style="padding: 12px; border: 1px solid #ddd;"><strong>Casing Exit</strong></td>
<td style="padding: 12px; border: 1px solid #ddd;">Designed for casing exit</td>
<td style="padding: 12px; border: 1px solid #ddd;">Most common</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;"><strong>Open Hole</strong></td>
<td style="padding: 12px; border: 1px solid #ddd;">For open hole exit</td>
<td style="padding: 12px; border: 1px solid #ddd;">Without casing</td>
</tr>
</tbody>
</table>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Lateral Drilling Challenges</h3>
<div style="background: #fee2e2; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #dc2626;">
<ul style="line-height: 2.2; padding-left: 1.5rem;">
<li><strong>Whipstock Orientation:</strong> Must be precisely oriented toward target</li>
<li><strong>Window Size:</strong> Too small limits tools and casing</li>
<li><strong>Dogleg Severity:</strong> Sharp bend after exit may cause problems</li>
<li><strong>Swarf Cleanup:</strong> Removing metal cuttings from window</li>
<li><strong>Instability:</strong> Exit zone may be unstable</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>Whipstock is main tool for lateral exit</li>
<li>Mills used to cut window in casing</li>
<li>Steps: Set Whipstock → Cut Window → Drill</li>
<li>Retrievable Whipstock allows main wellbore re-entry</li>
<li>Dogleg Severity at exit must be appropriate</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'Whipstock', definition: 'Angled tool to direct bit to exit casing' },
            { term: 'Window', definition: 'Opening cut in casing allowing lateral exit' },
            { term: 'Mill', definition: 'Cutting tool to create window in casing' },
            { term: 'Sidetrack', definition: 'Drilling lateral branch from existing well' },
            { term: 'Exit Point', definition: 'Point of exit from main wellbore' },
          ],
          practiceQuestion: {
            question: 'What is the main tool used for lateral exit from casing?',
            options: [
              'Drill Bit',
              'Whipstock',
              'Packer',
              'Centralizer'
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
          title: 'إكمال وتشغيل الآبار متعددة الفروع',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 إكمال الآبار متعددة الفروع</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
إكمال الآبار متعددة الفروع أكثر تعقيداً من الآبار التقليدية بسبب الحاجة للتحكم في عدة فروع وضمان العزل المناسب. اختيار نظام الإكمال يعتمد على مستوى TAML ومتطلبات الإنتاج.
</p>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 أنظمة إكمال الـ Junction</h3>
<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #059669;">
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #059669;">1️⃣ Open Junction (TAML 1-2)</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li>لا يوجد معدات إكمال في نقطة التقاطع</li>
<li>الإنتاج من كل الفروع يختلط في البئر الرئيسي</li>
<li>أبسط وأرخص ولكن بدون تحكم</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #059669;">2️⃣ Mechanical Junction (TAML 3)</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li>بطانة الفرع مُثبتة ميكانيكياً في البئر الرئيسي</li>
<li>يسمح بإعادة الدخول للفرع</li>
<li>لا يوفر عزلاً هيدروليكياً كاملاً</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #059669;">3️⃣ Cemented/Sealed Junction (TAML 4+)</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li>عزل هيدروليكي باستخدام إسمنت أو Packers</li>
<li>تحكم كامل في كل فرع بشكل مستقل</li>
<li>يسمح بقياس الإنتاج من كل فرع</li>
</ul>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 معدات التحكم في التدفق</h3>
<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #2563eb;">
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background: #e2e8f0;">
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: right;">المعدة</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: right;">الوظيفة</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: right;">الموقع</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;"><strong>ICV</strong></td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">صمام تحكم ذكي (Intelligent Control Valve)</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">عند كل فرع</td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 12px; border: 1px solid #cbd5e1;"><strong>ICD</strong></td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">جهاز تحكم في التدفق (Inflow Control)</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">على طول الفرع</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;"><strong>AICD</strong></td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">ICD أوتوماتيكي يقلل الماء/الغاز</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">مناطق الإنتاج</td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 12px; border: 1px solid #cbd5e1;"><strong>Packers</strong></td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">عزل بين المناطق</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">بين الفروع أو المناطق</td>
</tr>
</tbody>
</table>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 تحديات الإنتاج</h3>
<div style="background: #fee2e2; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #dc2626;">
<ul style="line-height: 2.2; padding-right: 1.5rem;">
<li><strong>اختلاف الضغوط:</strong> فروع مختلفة قد يكون لها ضغوط مختلفة</li>
<li><strong>Cross-flow:</strong> تدفق من فرع لآخر إذا لم يكن هناك عزل</li>
<li><strong>Water/Gas Breakthrough:</strong> اختراق الماء أو الغاز في فرع واحد يؤثر على الكل</li>
<li><strong>المراقبة:</strong> صعوبة معرفة أي فرع ينتج ماذا</li>
<li><strong>العمليات:</strong> صعوبة إجراء Workover على فرع واحد</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 استراتيجيات تحسين الإنتاج</h3>
<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #f59e0b;">
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #92400e;">📊 المراقبة الذكية</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li>DTS/DAS: مراقبة الحرارة والصوت على طول كل فرع</li>
<li>Downhole Gauges: قياس الضغط والحرارة في كل فرع</li>
<li>Production Logging: تسجيل الإنتاج الدوري</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #92400e;">🎛️ التحكم الذكي</p>
<ul style="padding-right: 1.5rem; line-height: 2;">
<li>ICVs: فتح/إغلاق الفروع عن بُعد</li>
<li>موازنة الإنتاج بين الفروع</li>
<li>إغلاق الفروع ذات الماء العالي</li>
</ul>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Artificial Lift في الآبار متعددة الفروع</h3>
<div style="background: #e8f4f8; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
<ul style="line-height: 2.2; padding-right: 1.5rem;">
<li><strong>ESP:</strong> يمكن تركيبها في البئر الرئيسي لرفع إنتاج كل الفروع</li>
<li><strong>Gas Lift:</strong> حقن الغاز في البئر الرئيسي أو في كل فرع</li>
<li><strong>التحديات:</strong> حجم المعدات، الوصول للفروع، الصيانة</li>
<li><strong>TAML 5-6:</strong> يسمح بإنزال وإخراج معدات الرفع بدون إيقاف البئر</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 ملخص اليوم</h3>
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>إكمال الـ Junction يتدرج من Open إلى Sealed</li>
<li>ICV و ICD للتحكم في التدفق من كل فرع</li>
<li>Cross-flow مشكلة رئيسية بدون عزل</li>
<li>DTS/DAS للمراقبة الذكية</li>
<li>TAML العالي يسمح بمرونة تشغيلية أكبر</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'ICV', definition: 'Intelligent Control Valve - صمام تحكم ذكي يُتحكم به عن بُعد' },
            { term: 'Cross-flow', definition: 'تدفق غير مرغوب من فرع لآخر' },
            { term: 'DTS', definition: 'Distributed Temperature Sensing - مراقبة الحرارة على طول البئر' },
            { term: 'AICD', definition: 'Autonomous ICD - جهاز يقلل الماء/الغاز أوتوماتيكياً' },
            { term: 'Commingled Production', definition: 'إنتاج مختلط من عدة فروع أو طبقات' },
          ],
          practiceQuestion: {
            question: 'ما هي المشكلة الرئيسية في الآبار متعددة الفروع بدون عزل؟',
            options: [
              'زيادة التكلفة',
              'Cross-flow بين الفروع',
              'صعوبة الحفر',
              'تآكل المعدات'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Multilateral Well Completion and Operations',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Multilateral Well Completion</h2>
<p style="margin-bottom: 1rem; line-height: 1.8;">
Multilateral well completion is more complex than conventional wells due to the need to control multiple branches and ensure proper isolation. Completion system selection depends on TAML level and production requirements.
</p>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Junction Completion Systems</h3>
<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #059669;">
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #059669;">1️⃣ Open Junction (TAML 1-2)</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li>No completion equipment at junction</li>
<li>Production from all branches mixes in main wellbore</li>
<li>Simplest and cheapest but no control</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #059669;">2️⃣ Mechanical Junction (TAML 3)</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li>Lateral liner mechanically anchored in main bore</li>
<li>Allows re-entry to lateral</li>
<li>Does not provide full hydraulic isolation</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #059669;">3️⃣ Cemented/Sealed Junction (TAML 4+)</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li>Hydraulic isolation using cement or packers</li>
<li>Full independent control of each branch</li>
<li>Allows measuring production from each branch</li>
</ul>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Flow Control Equipment</h3>
<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #2563eb;">
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background: #e2e8f0;">
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: left;">Equipment</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: left;">Function</th>
<th style="padding: 12px; border: 1px solid #cbd5e1; text-align: left;">Location</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;"><strong>ICV</strong></td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Intelligent Control Valve</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">At each branch</td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 12px; border: 1px solid #cbd5e1;"><strong>ICD</strong></td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Inflow Control Device</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Along lateral</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #cbd5e1;"><strong>AICD</strong></td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Autonomous ICD reducing water/gas</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Production zones</td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 12px; border: 1px solid #cbd5e1;"><strong>Packers</strong></td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Isolation between zones</td>
<td style="padding: 12px; border: 1px solid #cbd5e1;">Between branches or zones</td>
</tr>
</tbody>
</table>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Production Challenges</h3>
<div style="background: #fee2e2; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #dc2626;">
<ul style="line-height: 2.2; padding-left: 1.5rem;">
<li><strong>Pressure Differences:</strong> Different branches may have different pressures</li>
<li><strong>Cross-flow:</strong> Flow from one branch to another without isolation</li>
<li><strong>Water/Gas Breakthrough:</strong> Breakthrough in one branch affects all</li>
<li><strong>Monitoring:</strong> Difficulty knowing which branch produces what</li>
<li><strong>Operations:</strong> Difficulty performing Workover on one branch</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Production Optimization Strategies</h3>
<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #f59e0b;">
<div style="background: #fff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
<p style="font-weight: bold; color: #92400e;">📊 Smart Monitoring</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li>DTS/DAS: Temperature and acoustic monitoring along each branch</li>
<li>Downhole Gauges: Pressure and temperature measurement in each branch</li>
<li>Production Logging: Periodic production logging</li>
</ul>
</div>
<div style="background: #fff; padding: 1rem; border-radius: 8px;">
<p style="font-weight: bold; color: #92400e;">🎛️ Smart Control</p>
<ul style="padding-left: 1.5rem; line-height: 2;">
<li>ICVs: Open/close branches remotely</li>
<li>Balance production between branches</li>
<li>Shut off high-water branches</li>
</ul>
</div>
</div>

<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #7c3aed;">
<h3 style="color: #7c3aed; font-size: 1.2rem; font-weight: bold; margin-bottom: 0.75rem;">💡 Day Summary</h3>
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>Junction completion ranges from Open to Sealed</li>
<li>ICV and ICD for flow control from each branch</li>
<li>Cross-flow is main problem without isolation</li>
<li>DTS/DAS for smart monitoring</li>
<li>Higher TAML allows greater operational flexibility</li>
</ul>
</div>
</section>`,
          keyTerms: [
            { term: 'ICV', definition: 'Intelligent Control Valve - remotely controlled valve' },
            { term: 'Cross-flow', definition: 'Unwanted flow from one branch to another' },
            { term: 'DTS', definition: 'Distributed Temperature Sensing - temperature monitoring along well' },
            { term: 'AICD', definition: 'Autonomous ICD - automatically reduces water/gas' },
            { term: 'Commingled Production', definition: 'Mixed production from multiple branches or zones' },
          ],
          practiceQuestion: {
            question: 'What is the main problem in multilateral wells without isolation?',
            options: [
              'Increased cost',
              'Cross-flow between branches',
              'Drilling difficulty',
              'Equipment corrosion'
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
          title: 'مراجعة شاملة - الآبار متعددة الفروع',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 مراجعة أسبوع الآبار متعددة الفروع</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="font-size: 1.25rem; margin-bottom: 1rem;">📚 ملخص المفاهيم الأساسية</h3>
<p style="line-height: 1.8;">الآبار متعددة الفروع (Multilateral Wells) هي آبار لها أكثر من فرع جانبي يتفرع من بئر رئيسي واحد. توفر 40-60% من التكلفة وتزيد الإنتاجية بالوصول لعدة مناطق من موقع واحد.</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 اليوم الأول: المفاهيم الأساسية</h3>
<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #059669;">
<ul style="line-height: 2.2; padding-right: 1.5rem;">
<li><strong>المكونات:</strong> Motherbore + Junction + Laterals</li>
<li><strong>التوفير:</strong> 40-60% من تكلفة آبار منفصلة</li>
<li><strong>التطبيقات:</strong> مكامن متعددة، بحرية، مساحة محدودة</li>
<li><strong>المميزات:</strong> زيادة الإنتاج، تقليل الأثر البيئي</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 اليوم الثاني: تصنيف TAML</h3>
<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #2563eb;">
<table style="width: 100%; border-collapse: collapse; background: #fff;">
<thead>
<tr style="background: #e2e8f0;">
<th style="padding: 10px; border: 1px solid #ddd;">المستوى</th>
<th style="padding: 10px; border: 1px solid #ddd;">إعادة الدخول</th>
<th style="padding: 10px; border: 1px solid #ddd;">العزل</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">1-2</td>
<td style="padding: 10px; border: 1px solid #ddd;">❌</td>
<td style="padding: 10px; border: 1px solid #ddd;">❌</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">3</td>
<td style="padding: 10px; border: 1px solid #ddd;">✅</td>
<td style="padding: 10px; border: 1px solid #ddd;">❌</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">4</td>
<td style="padding: 10px; border: 1px solid #ddd;">✅</td>
<td style="padding: 10px; border: 1px solid #ddd;">✅ Junction</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">5-6</td>
<td style="padding: 10px; border: 1px solid #ddd;">✅ Live</td>
<td style="padding: 10px; border: 1px solid #ddd;">✅ كامل</td>
</tr>
</tbody>
</table>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 اليوم الثالث: حفر الفروع</h3>
<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #f59e0b;">
<ul style="line-height: 2.2; padding-right: 1.5rem;">
<li><strong>Whipstock:</strong> الأداة الرئيسية للخروج الجانبي</li>
<li><strong>Mills:</strong> لقطع النافذة في التغليف</li>
<li><strong>الخطوات:</strong> تثبيت Whipstock → قطع → حفر</li>
<li><strong>Retrievable:</strong> يسمح بإعادة الدخول للبئر الرئيسي</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 اليوم الرابع: الإكمال والتشغيل</h3>
<div style="background: #fee2e2; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #dc2626;">
<ul style="line-height: 2.2; padding-right: 1.5rem;">
<li><strong>ICV:</strong> صمام تحكم ذكي لكل فرع</li>
<li><strong>ICD/AICD:</strong> موازنة التدفق على طول الفرع</li>
<li><strong>Cross-flow:</strong> المشكلة الرئيسية بدون عزل</li>
<li><strong>DTS/DAS:</strong> مراقبة ذكية للإنتاج</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 نقاط رئيسية للاختبار</h3>
<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-right: 4px solid #7c3aed;">
<ul style="list-style-type: disc; padding-right: 1.5rem; line-height: 2;">
<li>TAML 3 = إعادة دخول بدون عزل</li>
<li>TAML 4 = عزل هيدروليكي عند الـ Junction</li>
<li>Whipstock للخروج الجانبي</li>
<li>ICV للتحكم عن بُعد في الفروع</li>
<li>Cross-flow = تدفق غير مرغوب بين الفروع</li>
</ul>
</div>
</section>`,
          keyTerms: [],
          practiceQuestion: {
            question: 'ما هو الهدف الرئيسي من الآبار متعددة الفروع؟',
            options: [
              'زيادة عمق الحفر',
              'الوصول لعدة مناطق من بئر واحد',
              'تقليل وقت الحفر فقط',
              'تحسين جودة الإسمنت'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Comprehensive Review - Multilateral Wells',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Multilateral Wells Week Review</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="font-size: 1.25rem; margin-bottom: 1rem;">📚 Key Concepts Summary</h3>
<p style="line-height: 1.8;">Multilateral Wells are wells with multiple lateral branches from a single main wellbore. They save 40-60% of cost and increase productivity by accessing multiple zones from one location.</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Day 1: Basic Concepts</h3>
<div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #059669;">
<ul style="line-height: 2.2; padding-left: 1.5rem;">
<li><strong>Components:</strong> Motherbore + Junction + Laterals</li>
<li><strong>Savings:</strong> 40-60% vs separate wells</li>
<li><strong>Applications:</strong> Multiple reservoirs, offshore, limited space</li>
<li><strong>Advantages:</strong> Increased production, reduced environmental impact</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Day 2: TAML Classification</h3>
<div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #2563eb;">
<table style="width: 100%; border-collapse: collapse; background: #fff;">
<thead>
<tr style="background: #e2e8f0;">
<th style="padding: 10px; border: 1px solid #ddd;">Level</th>
<th style="padding: 10px; border: 1px solid #ddd;">Re-entry</th>
<th style="padding: 10px; border: 1px solid #ddd;">Isolation</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">1-2</td>
<td style="padding: 10px; border: 1px solid #ddd;">❌</td>
<td style="padding: 10px; border: 1px solid #ddd;">❌</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">3</td>
<td style="padding: 10px; border: 1px solid #ddd;">✅</td>
<td style="padding: 10px; border: 1px solid #ddd;">❌</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">4</td>
<td style="padding: 10px; border: 1px solid #ddd;">✅</td>
<td style="padding: 10px; border: 1px solid #ddd;">✅ Junction</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd;">5-6</td>
<td style="padding: 10px; border: 1px solid #ddd;">✅ Live</td>
<td style="padding: 10px; border: 1px solid #ddd;">✅ Full</td>
</tr>
</tbody>
</table>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Day 3: Lateral Drilling</h3>
<div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #f59e0b;">
<ul style="line-height: 2.2; padding-left: 1.5rem;">
<li><strong>Whipstock:</strong> Main tool for lateral exit</li>
<li><strong>Mills:</strong> Cut window in casing</li>
<li><strong>Steps:</strong> Set Whipstock → Cut → Drill</li>
<li><strong>Retrievable:</strong> Allows main bore re-entry</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Day 4: Completion and Operations</h3>
<div style="background: #fee2e2; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border: 2px solid #dc2626;">
<ul style="line-height: 2.2; padding-left: 1.5rem;">
<li><strong>ICV:</strong> Smart control valve for each branch</li>
<li><strong>ICD/AICD:</strong> Balance flow along lateral</li>
<li><strong>Cross-flow:</strong> Main problem without isolation</li>
<li><strong>DTS/DAS:</strong> Smart production monitoring</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem;">📌 Key Points for Quiz</h3>
<div style="background: linear-gradient(135deg, #7c3aed15, #7c3aed10); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border-left: 4px solid #7c3aed;">
<ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2;">
<li>TAML 3 = Re-entry without isolation</li>
<li>TAML 4 = Hydraulic isolation at Junction</li>
<li>Whipstock for lateral exit</li>
<li>ICV for remote branch control</li>
<li>Cross-flow = unwanted flow between branches</li>
</ul>
</div>
</section>`,
          keyTerms: [],
          practiceQuestion: {
            question: 'What is the main goal of multilateral wells?',
            options: [
              'Increase drilling depth',
              'Access multiple zones from one well',
              'Reduce drilling time only',
              'Improve cement quality'
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
          title: 'اختبار الآبار متعددة الفروع',
          explanation: 'اختبر معلوماتك حول الآبار متعددة الفروع',
          keyTerms: [],
        },
        en: {
          title: 'Multilateral Wells Quiz',
          explanation: 'Test your knowledge of Multilateral Wells',
          keyTerms: [],
        },
      },
      quiz: {
        ar: [
          { question: 'ما هي الآبار متعددة الفروع؟', options: ['آبار عميقة جداً', 'آبار لها فروع متعددة من بئر رئيسي', 'آبار أفقية فقط', 'آبار للحقن'], correctAnswer: 1 },
          { question: 'كم يوفر البئر متعدد الفروع مقارنة بآبار منفصلة؟', options: ['10-20%', '40-60%', '80-90%', '5-10%'], correctAnswer: 1 },
          { question: 'ما هو مستوى TAML الذي يوفر إعادة دخول بدون عزل هيدروليكي؟', options: ['Level 1', 'Level 2', 'Level 3', 'Level 5'], correctAnswer: 2 },
          { question: 'ما هي الأداة الرئيسية للخروج الجانبي من التغليف؟', options: ['Packer', 'Whipstock', 'Centralizer', 'Float Collar'], correctAnswer: 1 },
          { question: 'ما هو Cross-flow؟', options: ['تدفق عالي', 'تدفق من فرع لآخر', 'تدفق الماء فقط', 'تدفق الغاز'], correctAnswer: 1 },
          { question: 'ما هو ICV؟', options: ['صمام تحكم ذكي', 'جهاز قياس', 'نوع من Packer', 'أداة حفر'], correctAnswer: 0 },
          { question: 'أي مستوى TAML يسمح بعمليات تحت الضغط؟', options: ['Level 2', 'Level 3', 'Level 4', 'Level 5-6'], correctAnswer: 3 },
          { question: 'ما هي نقطة الـ Junction؟', options: ['نهاية البئر', 'نقطة تفرع الفرع الجانبي', 'رأس البئر', 'منطقة الإنتاج'], correctAnswer: 1 },
          { question: 'ما هو DTS؟', options: ['أداة حفر', 'مراقبة الحرارة الموزعة', 'صمام تحكم', 'نوع من الطين'], correctAnswer: 1 },
          { question: 'ما هي ميزة TAML 4 عن TAML 3؟', options: ['أرخص', 'عزل هيدروليكي عند الـ Junction', 'أسرع', 'لا فرق'], correctAnswer: 1 },
        ],
        en: [
          { question: 'What are multilateral wells?', options: ['Very deep wells', 'Wells with multiple branches from main bore', 'Horizontal wells only', 'Injection wells'], correctAnswer: 1 },
          { question: 'How much do multilateral wells save vs separate wells?', options: ['10-20%', '40-60%', '80-90%', '5-10%'], correctAnswer: 1 },
          { question: 'Which TAML level provides re-entry without hydraulic isolation?', options: ['Level 1', 'Level 2', 'Level 3', 'Level 5'], correctAnswer: 2 },
          { question: 'What is the main tool for lateral exit from casing?', options: ['Packer', 'Whipstock', 'Centralizer', 'Float Collar'], correctAnswer: 1 },
          { question: 'What is Cross-flow?', options: ['High flow', 'Flow from one branch to another', 'Water flow only', 'Gas flow'], correctAnswer: 1 },
          { question: 'What is ICV?', options: ['Intelligent Control Valve', 'Measurement device', 'Type of Packer', 'Drilling tool'], correctAnswer: 0 },
          { question: 'Which TAML level allows operations under pressure?', options: ['Level 2', 'Level 3', 'Level 4', 'Level 5-6'], correctAnswer: 3 },
          { question: 'What is the Junction point?', options: ['Well end', 'Lateral branch divergence point', 'Wellhead', 'Production zone'], correctAnswer: 1 },
          { question: 'What is DTS?', options: ['Drilling tool', 'Distributed Temperature Sensing', 'Control valve', 'Type of mud'], correctAnswer: 1 },
          { question: 'What is the advantage of TAML 4 over TAML 3?', options: ['Cheaper', 'Hydraulic isolation at Junction', 'Faster', 'No difference'], correctAnswer: 1 },
        ],
      },
    },
    {
      day: 7,
      type: 'project',
      content: {
        ar: {
          title: 'مشروع الآبار متعددة الفروع',
          explanation: 'طبق ما تعلمته في مشروع عملي',
          keyTerms: [],
        },
        en: {
          title: 'Multilateral Wells Project',
          explanation: 'Apply what you learned in a practical project',
          keyTerms: [],
        },
      },
      project: {
        ar: {
          title: 'تصميم بئر متعدد الفروع لحقل بحري',
          description: 'أنت مهندس حفر في شركة تطور حقلاً بحرياً. المنصة لها 12 slot فقط، لكن هناك 30 هدفاً جيولوجياً في 3 مكامن مختلفة. مطلوب تصميم استراتيجية آبار متعددة الفروع للوصول لأكبر عدد من الأهداف.',
          instructions: [
            'حدد عدد الآبار الرئيسية وعدد الفروع لكل بئر',
            'اختر مستوى TAML المناسب مع تبرير الاختيار',
            'اشرح كيف ستنشئ الفروع الجانبية (نوع Whipstock)',
            'صف نظام الإكمال والتحكم في الإنتاج',
            'حدد التحديات المتوقعة وخطة التعامل معها',
          ],
          submissionType: 'text',
        },
        en: {
          title: 'Design Multilateral Well for Offshore Field',
          description: 'You are a drilling engineer at a company developing an offshore field. The platform has only 12 slots, but there are 30 geological targets in 3 different reservoirs. Design a multilateral well strategy to reach maximum targets.',
          instructions: [
            'Determine number of main wells and branches per well',
            'Select appropriate TAML level with justification',
            'Explain how you will create lateral branches (Whipstock type)',
            'Describe completion and production control system',
            'Identify expected challenges and mitigation plan',
          ],
          submissionType: 'text',
        },
      },
    },
  ],
};
