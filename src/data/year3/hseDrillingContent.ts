import { WeeklyLesson } from '../weeklyContent';

export const hseDrillingLesson: WeeklyLesson = {
  lessonId: 'drilling-hse',
  days: [
    {
      day: 1,
      type: 'learning',
      content: {
        ar: {
          title: 'السلامة والصحة والبيئة في عمليات الحفر - اليوم الأول: أساسيات نظام HSE',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 مقدمة في نظام HSE لعمليات الحفر</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
نظام <strong>Health, Safety & Environment (HSE)</strong> يمثل الإطار المتكامل لإدارة المخاطر في صناعة الحفر. تُعد عمليات الحفر من أكثر الأنشطة الصناعية خطورة، حيث تتضمن ضغوطاً عالية، ومواد كيميائية خطرة، ومعدات ثقيلة متحركة، والعمل في بيئات معزولة. الهدف الأساسي من HSE هو تحقيق <strong>Zero Harm</strong> - صفر إصابات وصفر حوادث بيئية.
</p>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="font-size: 1.2rem; margin-bottom: 1rem;">🎯 الأهداف الاستراتيجية لـ HSE</h3>
<ul style="list-style: none; padding: 0;">
<li style="margin-bottom: 0.75rem;">✅ حماية صحة وسلامة جميع العاملين والمتعاقدين</li>
<li style="margin-bottom: 0.75rem;">✅ منع التلوث البيئي وتقليل البصمة الكربونية</li>
<li style="margin-bottom: 0.75rem;">✅ ضمان الامتثال للتشريعات المحلية والدولية</li>
<li style="margin-bottom: 0.75rem;">✅ تحقيق التحسين المستمر في الأداء HSE</li>
</ul>
</div>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">📊 هرم الحوادث (Heinrich's Pyramid)</h3>

<p style="margin-bottom: 1rem; line-height: 1.8;">
نظرية <strong>Heinrich's Triangle</strong> توضح العلاقة بين الحوادث البسيطة والخطيرة:
</p>

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 8px; border-right: 4px solid #d97706; margin: 1rem 0;">
<p style="margin-bottom: 0.75rem;"><strong>1 Fatality / Major Injury</strong> = حادث وفاة أو إصابة خطيرة</p>
<p style="margin-bottom: 0.75rem;"><strong>30 Minor Injuries</strong> = إصابات بسيطة تحتاج علاج</p>
<p style="margin-bottom: 0.75rem;"><strong>300 Near Misses</strong> = حوادث وشيكة (كادت تقع)</p>
<p style="margin-bottom: 0;"><strong>3,000 Unsafe Acts/Conditions</strong> = تصرفات وظروف غير آمنة</p>
</div>

<p style="margin-bottom: 1rem; line-height: 1.8;">
<span style="color: #dc2626; font-weight: bold;">المبدأ الأساسي:</span> التركيز على منع التصرفات غير الآمنة في قاعدة الهرم يمنع الحوادث الكبرى في القمة. لذلك تركز برامج HSE الحديثة على <strong>Leading Indicators</strong> (المؤشرات الاستباقية) بدلاً من <strong>Lagging Indicators</strong> (المؤشرات اللاحقة).
</p>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">⚖️ الإطار التنظيمي والتشريعي</h3>

<table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 12px; text-align: right; border: 1px solid #ddd;">الجهة/المعيار</th>
<th style="padding: 12px; text-align: right; border: 1px solid #ddd;">النطاق</th>
<th style="padding: 12px; text-align: right; border: 1px solid #ddd;">التطبيق</th>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #ddd;"><strong>OSHA</strong></td>
<td style="padding: 12px; border: 1px solid #ddd;">الولايات المتحدة</td>
<td style="padding: 12px; border: 1px solid #ddd;">معايير السلامة المهنية</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;"><strong>IOGP</strong></td>
<td style="padding: 12px; border: 1px solid #ddd;">عالمي</td>
<td style="padding: 12px; border: 1px solid #ddd;">إرشادات صناعة النفط والغاز</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #ddd;"><strong>ISO 45001</strong></td>
<td style="padding: 12px; border: 1px solid #ddd;">عالمي</td>
<td style="padding: 12px; border: 1px solid #ddd;">نظام إدارة السلامة والصحة المهنية</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;"><strong>ISO 14001</strong></td>
<td style="padding: 12px; border: 1px solid #ddd;">عالمي</td>
<td style="padding: 12px; border: 1px solid #ddd;">نظام الإدارة البيئية</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #ddd;"><strong>NORSOK</strong></td>
<td style="padding: 12px; border: 1px solid #ddd;">النرويج/بحر الشمال</td>
<td style="padding: 12px; border: 1px solid #ddd;">معايير السلامة البحرية</td>
</tr>
</table>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">🏗️ عناصر نظام إدارة HSE</h3>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin: 1rem 0;">
<div style="background: #ecfdf5; padding: 1rem; border-radius: 8px; border-top: 4px solid #10b981;">
<h4 style="color: #065f46; margin-bottom: 0.5rem;">1. القيادة والالتزام</h4>
<p style="font-size: 0.9rem; margin: 0;">التزام الإدارة العليا وتوفير الموارد اللازمة لتحقيق أهداف HSE</p>
</div>
<div style="background: #eff6ff; padding: 1rem; border-radius: 8px; border-top: 4px solid #3b82f6;">
<h4 style="color: #1e40af; margin-bottom: 0.5rem;">2. تقييم المخاطر</h4>
<p style="font-size: 0.9rem; margin: 0;">تحديد وتقييم والسيطرة على المخاطر المحتملة في جميع العمليات</p>
</div>
<div style="background: #fef3c7; padding: 1rem; border-radius: 8px; border-top: 4px solid #f59e0b;">
<h4 style="color: #92400e; margin-bottom: 0.5rem;">3. التدريب والكفاءة</h4>
<p style="font-size: 0.9rem; margin: 0;">ضمان تأهيل جميع العاملين للقيام بمهامهم بأمان</p>
</div>
<div style="background: #fce7f3; padding: 1rem; border-radius: 8px; border-top: 4px solid #ec4899;">
<h4 style="color: #9d174d; margin-bottom: 0.5rem;">4. التواصل والتشاور</h4>
<p style="font-size: 0.9rem; margin: 0;">تبادل المعلومات HSE بين جميع المستويات والتشاور مع العمال</p>
</div>
</div>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">📈 مؤشرات الأداء الرئيسية (KPIs)</h3>

<div style="background: #f1f5f9; padding: 1.5rem; border-radius: 8px; margin: 1rem 0;">
<h4 style="color: #1e3a5f; margin-bottom: 1rem;">Lagging Indicators (المؤشرات اللاحقة):</h4>
<ul style="margin-bottom: 1rem;">
<li><strong>TRIR</strong> (Total Recordable Incident Rate) = معدل الحوادث المسجلة لكل 200,000 ساعة عمل</li>
<li><strong>LTIF</strong> (Lost Time Injury Frequency) = معدل إصابات فقدان وقت العمل</li>
<li><strong>FAR</strong> (Fatal Accident Rate) = معدل الحوادث المميتة لكل 100 مليون ساعة</li>
</ul>
<h4 style="color: #1e3a5f; margin-bottom: 1rem;">Leading Indicators (المؤشرات الاستباقية):</h4>
<ul style="margin: 0;">
<li>عدد ملاحظات السلامة (Safety Observations)</li>
<li>نسبة إتمام التدريبات</li>
<li>عدد عمليات التدقيق المنفذة</li>
<li>نسبة إغلاق الإجراءات التصحيحية</li>
</ul>
</div>

<div style="background: #fee2e2; padding: 1rem; border-radius: 8px; border-right: 4px solid #dc2626; margin: 1.5rem 0;">
<p style="margin: 0; color: #7f1d1d;"><strong>⚠️ تحذير:</strong> في صناعة الحفر، يُعتبر أي TRIR أعلى من 1.0 مؤشراً على ضعف أداء السلامة. الشركات الرائدة تستهدف TRIR أقل من 0.5.</p>
</div>

</section>`,
          keyTerms: [
            { term: 'HSE', definition: 'Health, Safety & Environment - نظام إدارة الصحة والسلامة والبيئة المتكامل' },
            { term: 'TRIR', definition: 'Total Recordable Incident Rate - معدل الحوادث المسجلة لكل 200,000 ساعة عمل' },
            { term: 'Near Miss', definition: 'الحادث الوشيك - حدث كان يمكن أن يسبب إصابة أو ضرر لكنه لم يحدث' },
            { term: 'Leading Indicators', definition: 'المؤشرات الاستباقية التي تتنبأ بالأداء المستقبلي للسلامة' },
          ],
          practiceQuestion: {
            question: 'ما هو المبدأ الأساسي من هرم Heinrich للحوادث؟',
            options: [
              'التركيز على التحقيق في الحوادث الكبرى فقط',
              'منع التصرفات غير الآمنة في قاعدة الهرم يمنع الحوادث الكبرى',
              'الحوادث الكبرى لا يمكن منعها',
              'Near Misses غير مهمة في تحليل السلامة'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'HSE in Drilling Operations - Day 1: HSE System Fundamentals',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Introduction to HSE System for Drilling Operations</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
The <strong>Health, Safety & Environment (HSE)</strong> system represents the integrated framework for risk management in the drilling industry. Drilling operations are among the most hazardous industrial activities, involving high pressures, hazardous chemicals, heavy moving equipment, and work in isolated environments. The primary goal of HSE is to achieve <strong>Zero Harm</strong> - zero injuries and zero environmental incidents.
</p>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h3 style="font-size: 1.2rem; margin-bottom: 1rem;">🎯 Strategic HSE Objectives</h3>
<ul style="list-style: none; padding: 0;">
<li style="margin-bottom: 0.75rem;">✅ Protect health and safety of all workers and contractors</li>
<li style="margin-bottom: 0.75rem;">✅ Prevent environmental pollution and reduce carbon footprint</li>
<li style="margin-bottom: 0.75rem;">✅ Ensure compliance with local and international regulations</li>
<li style="margin-bottom: 0.75rem;">✅ Achieve continuous improvement in HSE performance</li>
</ul>
</div>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">📊 Heinrich's Accident Pyramid</h3>

<p style="margin-bottom: 1rem; line-height: 1.8;">
<strong>Heinrich's Triangle</strong> theory illustrates the relationship between minor and major incidents:
</p>

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 8px; border-left: 4px solid #d97706; margin: 1rem 0;">
<p style="margin-bottom: 0.75rem;"><strong>1 Fatality / Major Injury</strong></p>
<p style="margin-bottom: 0.75rem;"><strong>30 Minor Injuries</strong> requiring treatment</p>
<p style="margin-bottom: 0.75rem;"><strong>300 Near Misses</strong> (close calls)</p>
<p style="margin-bottom: 0;"><strong>3,000 Unsafe Acts/Conditions</strong></p>
</div>

<p style="margin-bottom: 1rem; line-height: 1.8;">
<span style="color: #dc2626; font-weight: bold;">Core Principle:</span> Focusing on preventing unsafe acts at the pyramid base prevents major accidents at the top. Modern HSE programs focus on <strong>Leading Indicators</strong> rather than <strong>Lagging Indicators</strong>.
</p>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">⚖️ Regulatory Framework</h3>

<table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Authority/Standard</th>
<th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Scope</th>
<th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Application</th>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #ddd;"><strong>OSHA</strong></td>
<td style="padding: 12px; border: 1px solid #ddd;">United States</td>
<td style="padding: 12px; border: 1px solid #ddd;">Occupational safety standards</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;"><strong>IOGP</strong></td>
<td style="padding: 12px; border: 1px solid #ddd;">Global</td>
<td style="padding: 12px; border: 1px solid #ddd;">Oil and gas industry guidelines</td>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #ddd;"><strong>ISO 45001</strong></td>
<td style="padding: 12px; border: 1px solid #ddd;">Global</td>
<td style="padding: 12px; border: 1px solid #ddd;">OH&S management system</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;"><strong>ISO 14001</strong></td>
<td style="padding: 12px; border: 1px solid #ddd;">Global</td>
<td style="padding: 12px; border: 1px solid #ddd;">Environmental management system</td>
</tr>
</table>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">📈 Key Performance Indicators (KPIs)</h3>

<div style="background: #f1f5f9; padding: 1.5rem; border-radius: 8px; margin: 1rem 0;">
<h4 style="color: #1e3a5f; margin-bottom: 1rem;">Lagging Indicators:</h4>
<ul style="margin-bottom: 1rem;">
<li><strong>TRIR</strong> (Total Recordable Incident Rate) = per 200,000 man-hours</li>
<li><strong>LTIF</strong> (Lost Time Injury Frequency)</li>
<li><strong>FAR</strong> (Fatal Accident Rate) = per 100 million hours</li>
</ul>
<h4 style="color: #1e3a5f; margin-bottom: 1rem;">Leading Indicators:</h4>
<ul style="margin: 0;">
<li>Number of Safety Observations</li>
<li>Training completion rates</li>
<li>Audits conducted</li>
<li>Corrective action closure rate</li>
</ul>
</div>

<div style="background: #fee2e2; padding: 1rem; border-radius: 8px; border-left: 4px solid #dc2626; margin: 1.5rem 0;">
<p style="margin: 0; color: #7f1d1d;"><strong>⚠️ Warning:</strong> In drilling industry, TRIR above 1.0 indicates poor safety performance. Leading companies target TRIR below 0.5.</p>
</div>

</section>`,
          keyTerms: [
            { term: 'HSE', definition: 'Health, Safety & Environment - Integrated management system for health, safety, and environment' },
            { term: 'TRIR', definition: 'Total Recordable Incident Rate - Number of recordable incidents per 200,000 man-hours' },
            { term: 'Near Miss', definition: 'An event that could have caused injury or damage but did not occur' },
            { term: 'Leading Indicators', definition: 'Proactive metrics that predict future safety performance' },
          ],
          practiceQuestion: {
            question: 'What is the core principle of Heinrich\'s Accident Pyramid?',
            options: [
              'Focus only on investigating major accidents',
              'Preventing unsafe acts at the base prevents major accidents at the top',
              'Major accidents cannot be prevented',
              'Near misses are not important in safety analysis'
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
          title: 'السلامة والصحة والبيئة - اليوم الثاني: إدارة المخاطر وتصاريح العمل',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 إدارة المخاطر في عمليات الحفر</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
إدارة المخاطر <strong>(Risk Management)</strong> هي العملية المنهجية لتحديد وتحليل والسيطرة على المخاطر المحتملة. في بيئة الحفر، تتنوع المخاطر من الميكانيكية إلى الكيميائية إلى البيئية، وتتطلب نهجاً شاملاً للتحكم فيها.
</p>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">🎯 تحليل المخاطر (Risk Assessment)</h3>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h4 style="margin-bottom: 1rem;">خطوات تحليل المخاطر:</h4>
<ol style="padding-right: 1.5rem;">
<li style="margin-bottom: 0.75rem;"><strong>Hazard Identification</strong> - تحديد المخاطر المحتملة في كل نشاط</li>
<li style="margin-bottom: 0.75rem;"><strong>Risk Evaluation</strong> - تقييم الاحتمالية والخطورة</li>
<li style="margin-bottom: 0.75rem;"><strong>Control Measures</strong> - تحديد وسائل التحكم والحماية</li>
<li style="margin-bottom: 0.75rem;"><strong>Implementation</strong> - تطبيق الإجراءات الوقائية</li>
<li style="margin-bottom: 0;"><strong>Monitoring</strong> - المتابعة والمراجعة المستمرة</li>
</ol>
</div>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">📊 مصفوفة المخاطر (Risk Matrix)</h3>

<table style="width: 100%; border-collapse: collapse; margin: 1rem 0; text-align: center;">
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 10px; border: 1px solid #ddd;">الاحتمالية / الخطورة</th>
<th style="padding: 10px; border: 1px solid #ddd;">منخفضة</th>
<th style="padding: 10px; border: 1px solid #ddd;">متوسطة</th>
<th style="padding: 10px; border: 1px solid #ddd;">عالية</th>
<th style="padding: 10px; border: 1px solid #ddd;">كارثية</th>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd; background: #f1f5f9;"><strong>متكرر</strong></td>
<td style="padding: 10px; border: 1px solid #ddd; background: #fef08a;">متوسط</td>
<td style="padding: 10px; border: 1px solid #ddd; background: #fed7aa;">عالي</td>
<td style="padding: 10px; border: 1px solid #ddd; background: #fca5a5;">خطير</td>
<td style="padding: 10px; border: 1px solid #ddd; background: #dc2626; color: white;">غير مقبول</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd; background: #f1f5f9;"><strong>محتمل</strong></td>
<td style="padding: 10px; border: 1px solid #ddd; background: #bbf7d0;">منخفض</td>
<td style="padding: 10px; border: 1px solid #ddd; background: #fef08a;">متوسط</td>
<td style="padding: 10px; border: 1px solid #ddd; background: #fed7aa;">عالي</td>
<td style="padding: 10px; border: 1px solid #ddd; background: #fca5a5;">خطير</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd; background: #f1f5f9;"><strong>نادر</strong></td>
<td style="padding: 10px; border: 1px solid #ddd; background: #bbf7d0;">منخفض</td>
<td style="padding: 10px; border: 1px solid #ddd; background: #bbf7d0;">منخفض</td>
<td style="padding: 10px; border: 1px solid #ddd; background: #fef08a;">متوسط</td>
<td style="padding: 10px; border: 1px solid #ddd; background: #fed7aa;">عالي</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid #ddd; background: #f1f5f9;"><strong>غير محتمل</strong></td>
<td style="padding: 10px; border: 1px solid #ddd; background: #bbf7d0;">منخفض</td>
<td style="padding: 10px; border: 1px solid #ddd; background: #bbf7d0;">منخفض</td>
<td style="padding: 10px; border: 1px solid #ddd; background: #bbf7d0;">منخفض</td>
<td style="padding: 10px; border: 1px solid #ddd; background: #fef08a;">متوسط</td>
</tr>
</table>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">🔐 نظام تصاريح العمل (Permit to Work - PTW)</h3>

<p style="margin-bottom: 1rem; line-height: 1.8;">
نظام تصاريح العمل هو نظام رسمي مكتوب للتحكم في الأعمال الخطرة. يضمن أن يتم تقييم المخاطر واتخاذ الاحتياطات اللازمة قبل بدء العمل.
</p>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin: 1rem 0;">
<div style="background: #fef3c7; padding: 1rem; border-radius: 8px; border-top: 4px solid #f59e0b;">
<h4 style="color: #92400e; margin-bottom: 0.5rem;">🔥 Hot Work Permit</h4>
<p style="font-size: 0.9rem; margin: 0;">للأعمال التي تنتج شرارات أو لهب: اللحام، القطع، الطحن. يتطلب Gas Test وFire Watch</p>
</div>
<div style="background: #fee2e2; padding: 1rem; border-radius: 8px; border-top: 4px solid #ef4444;">
<h4 style="color: #991b1b; margin-bottom: 0.5rem;">🚧 Confined Space Entry</h4>
<p style="font-size: 0.9rem; margin: 0;">للدخول إلى أماكن مغلقة: خزانات، أوعية. يتطلب Atmospheric Testing وStandby Person</p>
</div>
<div style="background: #dbeafe; padding: 1rem; border-radius: 8px; border-top: 4px solid #3b82f6;">
<h4 style="color: #1e40af; margin-bottom: 0.5rem;">⚡ Electrical Isolation</h4>
<p style="font-size: 0.9rem; margin: 0;">لعزل المعدات الكهربائية: يتطلب LOTO وVerification of Dead</p>
</div>
<div style="background: #ecfdf5; padding: 1rem; border-radius: 8px; border-top: 4px solid #10b981;">
<h4 style="color: #065f46; margin-bottom: 0.5rem;">🏗️ Working at Height</h4>
<p style="font-size: 0.9rem; margin: 0;">للعمل فوق 1.8 متر: يتطلب Fall Protection وRescue Plan</p>
</div>
</div>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">🔒 نظام العزل والقفل (LOTO)</h3>

<p style="margin-bottom: 1rem; line-height: 1.8;">
<strong>Lockout/Tagout (LOTO)</strong> هو إجراء أمان حيوي لضمان عزل مصادر الطاقة الخطرة أثناء أعمال الصيانة.
</p>

<div style="background: #f1f5f9; padding: 1.5rem; border-radius: 8px; margin: 1rem 0;">
<h4 style="color: #1e3a5f; margin-bottom: 1rem;">خطوات LOTO:</h4>
<ol style="padding-right: 1.5rem;">
<li style="margin-bottom: 0.5rem;"><strong>Notify</strong> - إخطار جميع المتأثرين بالعزل</li>
<li style="margin-bottom: 0.5rem;"><strong>Identify</strong> - تحديد جميع مصادر الطاقة</li>
<li style="margin-bottom: 0.5rem;"><strong>Isolate</strong> - عزل جميع مصادر الطاقة</li>
<li style="margin-bottom: 0.5rem;"><strong>Lock & Tag</strong> - تركيب الأقفال والبطاقات الشخصية</li>
<li style="margin-bottom: 0.5rem;"><strong>Verify</strong> - التحقق من نجاح العزل (Try Start)</li>
<li style="margin-bottom: 0;"><strong>Release</strong> - إزالة الطاقة المتبقية (Stored Energy)</li>
</ol>
</div>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">📋 تحليل سلامة المهام (JSA/JHA)</h3>

<p style="margin-bottom: 1rem; line-height: 1.8;">
<strong>Job Safety Analysis (JSA)</strong> أو <strong>Job Hazard Analysis (JHA)</strong> هو أسلوب لتحديد المخاطر المرتبطة بكل خطوة من خطوات العمل.
</p>

<table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 12px; text-align: right; border: 1px solid #ddd;">خطوة العمل</th>
<th style="padding: 12px; text-align: right; border: 1px solid #ddd;">المخاطر المحتملة</th>
<th style="padding: 12px; text-align: right; border: 1px solid #ddd;">إجراءات التحكم</th>
</tr>
<tr style="background: #f8fafc;">
<td style="padding: 12px; border: 1px solid #ddd;">تحريك مواسير الحفر</td>
<td style="padding: 12px; border: 1px solid #ddd;">سقوط، انحشار، اصطدام</td>
<td style="padding: 12px; border: 1px solid #ddd;">منطقة حمراء، إشارات، PPE</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;">تحضير سائل الحفر</td>
<td style="padding: 12px; border: 1px solid #ddd;">تعرض كيميائي، استنشاق</td>
<td style="padding: 12px; border: 1px solid #ddd;">MSDS، تهوية، قناع وجه</td>
</tr>
</table>

<div style="background: #fee2e2; padding: 1rem; border-radius: 8px; border-right: 4px solid #dc2626; margin: 1.5rem 0;">
<p style="margin: 0; color: #7f1d1d;"><strong>⚠️ قاعدة ذهبية:</strong> STOP WORK AUTHORITY - كل عامل له الحق والواجب في إيقاف العمل إذا لاحظ خطراً محدقاً دون خوف من العقوبات.</p>
</div>

</section>`,
          keyTerms: [
            { term: 'PTW', definition: 'Permit to Work - نظام التصاريح الرسمي للتحكم في الأعمال الخطرة' },
            { term: 'LOTO', definition: 'Lockout/Tagout - إجراء عزل وقفل مصادر الطاقة أثناء الصيانة' },
            { term: 'JSA', definition: 'Job Safety Analysis - تحليل سلامة المهام خطوة بخطوة' },
            { term: 'Risk Matrix', definition: 'مصفوفة المخاطر - أداة لتقييم الاحتمالية مقابل الخطورة' },
          ],
          practiceQuestion: {
            question: 'ما هو الغرض الرئيسي من نظام LOTO؟',
            options: [
              'تسجيل حوادث العمل',
              'ضمان عزل مصادر الطاقة أثناء الصيانة',
              'تدريب العمال الجدد',
              'مراقبة جودة العمل'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'HSE in Drilling - Day 2: Risk Management and Work Permits',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Risk Management in Drilling Operations</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
<strong>Risk Management</strong> is the systematic process of identifying, analyzing, and controlling potential hazards. In drilling environments, risks range from mechanical to chemical to environmental, requiring a comprehensive approach for control.
</p>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">🎯 Risk Assessment</h3>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h4 style="margin-bottom: 1rem;">Risk Assessment Steps:</h4>
<ol style="padding-left: 1.5rem;">
<li style="margin-bottom: 0.75rem;"><strong>Hazard Identification</strong> - Identify potential hazards in each activity</li>
<li style="margin-bottom: 0.75rem;"><strong>Risk Evaluation</strong> - Assess probability and severity</li>
<li style="margin-bottom: 0.75rem;"><strong>Control Measures</strong> - Determine control and protection methods</li>
<li style="margin-bottom: 0.75rem;"><strong>Implementation</strong> - Apply preventive measures</li>
<li style="margin-bottom: 0;"><strong>Monitoring</strong> - Continuous follow-up and review</li>
</ol>
</div>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">🔐 Permit to Work System (PTW)</h3>

<p style="margin-bottom: 1rem; line-height: 1.8;">
The Permit to Work system is a formal written system for controlling hazardous work, ensuring risks are assessed and precautions taken before work begins.
</p>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin: 1rem 0;">
<div style="background: #fef3c7; padding: 1rem; border-radius: 8px; border-top: 4px solid #f59e0b;">
<h4 style="color: #92400e; margin-bottom: 0.5rem;">🔥 Hot Work Permit</h4>
<p style="font-size: 0.9rem; margin: 0;">For spark/flame producing work: welding, cutting, grinding. Requires Gas Test and Fire Watch</p>
</div>
<div style="background: #fee2e2; padding: 1rem; border-radius: 8px; border-top: 4px solid #ef4444;">
<h4 style="color: #991b1b; margin-bottom: 0.5rem;">🚧 Confined Space Entry</h4>
<p style="font-size: 0.9rem; margin: 0;">For entering enclosed spaces: tanks, vessels. Requires Atmospheric Testing and Standby Person</p>
</div>
<div style="background: #dbeafe; padding: 1rem; border-radius: 8px; border-top: 4px solid #3b82f6;">
<h4 style="color: #1e40af; margin-bottom: 0.5rem;">⚡ Electrical Isolation</h4>
<p style="font-size: 0.9rem; margin: 0;">For isolating electrical equipment: requires LOTO and Verification of Dead</p>
</div>
<div style="background: #ecfdf5; padding: 1rem; border-radius: 8px; border-top: 4px solid #10b981;">
<h4 style="color: #065f46; margin-bottom: 0.5rem;">🏗️ Working at Height</h4>
<p style="font-size: 0.9rem; margin: 0;">For work above 1.8m: requires Fall Protection and Rescue Plan</p>
</div>
</div>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">🔒 Lockout/Tagout (LOTO) System</h3>

<div style="background: #f1f5f9; padding: 1.5rem; border-radius: 8px; margin: 1rem 0;">
<h4 style="color: #1e3a5f; margin-bottom: 1rem;">LOTO Steps:</h4>
<ol style="padding-left: 1.5rem;">
<li style="margin-bottom: 0.5rem;"><strong>Notify</strong> - Inform all affected personnel</li>
<li style="margin-bottom: 0.5rem;"><strong>Identify</strong> - Identify all energy sources</li>
<li style="margin-bottom: 0.5rem;"><strong>Isolate</strong> - Isolate all energy sources</li>
<li style="margin-bottom: 0.5rem;"><strong>Lock & Tag</strong> - Apply personal locks and tags</li>
<li style="margin-bottom: 0.5rem;"><strong>Verify</strong> - Verify isolation success (Try Start)</li>
<li style="margin-bottom: 0;"><strong>Release</strong> - Remove stored energy</li>
</ol>
</div>

<div style="background: #fee2e2; padding: 1rem; border-radius: 8px; border-left: 4px solid #dc2626; margin: 1.5rem 0;">
<p style="margin: 0; color: #7f1d1d;"><strong>⚠️ Golden Rule:</strong> STOP WORK AUTHORITY - Every worker has the right and duty to stop work if they observe imminent danger without fear of reprisal.</p>
</div>

</section>`,
          keyTerms: [
            { term: 'PTW', definition: 'Permit to Work - Formal system for controlling hazardous work' },
            { term: 'LOTO', definition: 'Lockout/Tagout - Procedure for isolating energy sources during maintenance' },
            { term: 'JSA', definition: 'Job Safety Analysis - Step-by-step task hazard analysis' },
            { term: 'Risk Matrix', definition: 'Tool for assessing probability vs. severity of hazards' },
          ],
          practiceQuestion: {
            question: 'What is the primary purpose of the LOTO system?',
            options: [
              'Recording work incidents',
              'Ensuring energy sources are isolated during maintenance',
              'Training new workers',
              'Monitoring work quality'
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
          title: 'السلامة والصحة والبيئة - اليوم الثالث: مخاطر الحفر النوعية ومعدات الحماية',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 المخاطر النوعية في عمليات الحفر</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
تتميز عمليات الحفر بمخاطر فريدة ناتجة عن طبيعة العمل مع الضغوط العالية، والمواد الكيميائية، والمعدات الثقيلة. فهم هذه المخاطر والتحكم فيها أمر حيوي لسلامة الطاقم.
</p>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">⚠️ المناطق الحمراء (Red Zones)</h3>

<div style="background: #fee2e2; padding: 1.5rem; border-radius: 12px; border: 2px solid #dc2626; margin: 1.5rem 0;">
<h4 style="color: #991b1b; margin-bottom: 1rem;">المناطق الأكثر خطورة على منصة الحفر:</h4>
<ul style="list-style: none; padding: 0;">
<li style="margin-bottom: 0.75rem;">🔴 <strong>V-Door Area</strong> - منطقة دخول المواسير (خطر السقوط والاصطدام)</li>
<li style="margin-bottom: 0.75rem;">🔴 <strong>Rotary Table Area</strong> - منطقة الطاولة الدوارة (خطر الانحشار)</li>
<li style="margin-bottom: 0.75rem;">🔴 <strong>Cat Walk</strong> - ممر المواسير (خطر التدحرج)</li>
<li style="margin-bottom: 0.75rem;">🔴 <strong>Drawworks Area</strong> - منطقة الونش الرئيسي</li>
<li style="margin-bottom: 0;">🔴 <strong>Pipe Deck</strong> - منصة تخزين المواسير</li>
</ul>
</div>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">💀 غاز كبريتيد الهيدروجين (H₂S)</h3>

<p style="margin-bottom: 1rem; line-height: 1.8;">
غاز <strong>H₂S</strong> هو أحد أخطر المخاطر في صناعة الحفر. غاز سام، عديم اللون، أثقل من الهواء، رائحة البيض الفاسد (تختفي عند التركيزات العالية بسبب شلل حاسة الشم).
</p>

<table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 12px; text-align: right; border: 1px solid #ddd;">التركيز (ppm)</th>
<th style="padding: 12px; text-align: right; border: 1px solid #ddd;">التأثير</th>
<th style="padding: 12px; text-align: right; border: 1px solid #ddd;">الإجراء</th>
</tr>
<tr style="background: #bbf7d0;">
<td style="padding: 12px; border: 1px solid #ddd;">0.1 - 10</td>
<td style="padding: 12px; border: 1px solid #ddd;">رائحة كريهة</td>
<td style="padding: 12px; border: 1px solid #ddd;">مراقبة مستمرة</td>
</tr>
<tr style="background: #fef08a;">
<td style="padding: 12px; border: 1px solid #ddd;">10 (TWA)</td>
<td style="padding: 12px; border: 1px solid #ddd;">حد التعرض المسموح (8 ساعات)</td>
<td style="padding: 12px; border: 1px solid #ddd;">PPE إلزامي</td>
</tr>
<tr style="background: #fed7aa;">
<td style="padding: 12px; border: 1px solid #ddd;">15 (STEL)</td>
<td style="padding: 12px; border: 1px solid #ddd;">حد التعرض القصير (15 دقيقة)</td>
<td style="padding: 12px; border: 1px solid #ddd;">إجلاء غير طارئ</td>
</tr>
<tr style="background: #fca5a5;">
<td style="padding: 12px; border: 1px solid #ddd;">50 - 100</td>
<td style="padding: 12px; border: 1px solid #ddd;">تهيج العيون، صداع، غثيان</td>
<td style="padding: 12px; border: 1px solid #ddd;">إجلاء فوري + SCBA</td>
</tr>
<tr style="background: #dc2626; color: white;">
<td style="padding: 12px; border: 1px solid #ddd;">> 100</td>
<td style="padding: 12px; border: 1px solid #ddd;">فقدان الوعي، وفاة سريعة</td>
<td style="padding: 12px; border: 1px solid #ddd;">IDLH - خطر فوري على الحياة</td>
</tr>
</table>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">🛡️ معدات الحماية الشخصية (PPE)</h3>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin: 1rem 0;">
<div style="background: #ecfdf5; padding: 1rem; border-radius: 8px;">
<h4 style="color: #065f46; margin-bottom: 0.75rem;">🪖 حماية الرأس</h4>
<ul style="margin: 0; font-size: 0.9rem;">
<li>Hard Hat (خوذة صلبة) - Class E</li>
<li>Face Shield عند الحاجة</li>
<li>يجب استبدالها كل 5 سنوات</li>
</ul>
</div>
<div style="background: #eff6ff; padding: 1rem; border-radius: 8px;">
<h4 style="color: #1e40af; margin-bottom: 0.75rem;">👓 حماية العيون</h4>
<ul style="margin: 0; font-size: 0.9rem;">
<li>Safety Glasses (نظارات سلامة)</li>
<li>Goggles للكيميائيات</li>
<li>Welding Shield للحام</li>
</ul>
</div>
<div style="background: #fef3c7; padding: 1rem; border-radius: 8px;">
<h4 style="color: #92400e; margin-bottom: 0.75rem;">👂 حماية السمع</h4>
<ul style="margin: 0; font-size: 0.9rem;">
<li>Ear Plugs (NRR 25-33 dB)</li>
<li>Ear Muffs للضوضاء العالية</li>
<li>إلزامي فوق 85 dB</li>
</ul>
</div>
<div style="background: #fce7f3; padding: 1rem; border-radius: 8px;">
<h4 style="color: #9d174d; margin-bottom: 0.75rem;">😷 حماية التنفس</h4>
<ul style="margin: 0; font-size: 0.9rem;">
<li>Dust Mask للغبار</li>
<li>Half-Face Respirator</li>
<li>SCBA للغازات السامة</li>
</ul>
</div>
<div style="background: #f1f5f9; padding: 1rem; border-radius: 8px;">
<h4 style="color: #475569; margin-bottom: 0.75rem;">🧤 حماية اليدين</h4>
<ul style="margin: 0; font-size: 0.9rem;">
<li>Leather Gloves للأعمال الميكانيكية</li>
<li>Chemical Gloves للكيميائيات</li>
<li>Anti-Vibration للأدوات</li>
</ul>
</div>
<div style="background: #fef2f2; padding: 1rem; border-radius: 8px;">
<h4 style="color: #991b1b; margin-bottom: 0.75rem;">👢 حماية القدمين</h4>
<ul style="margin: 0; font-size: 0.9rem;">
<li>Steel Toe Boots (ASTM F2413)</li>
<li>Metatarsal Guards للأحمال الثقيلة</li>
<li>Chemical Resistant عند الحاجة</li>
</ul>
</div>
</div>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">🔥 السلامة من الحرائق</h3>

<div style="background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%); color: white; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h4 style="margin-bottom: 1rem;">مثلث الحريق (Fire Triangle):</h4>
<ul style="list-style: none; padding: 0;">
<li style="margin-bottom: 0.5rem;">🔺 <strong>Fuel</strong> - الوقود (غاز، زيت، كيميائيات)</li>
<li style="margin-bottom: 0.5rem;">🔺 <strong>Oxygen</strong> - الأكسجين (الهواء)</li>
<li style="margin-bottom: 0.5rem;">🔺 <strong>Heat</strong> - الحرارة (شرارة، لهب)</li>
<li style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid rgba(255,255,255,0.3);">إزالة أي عنصر = إطفاء الحريق</li>
</ul>
</div>

<h4 style="color: #1e3a5f; margin: 1rem 0;">أنواع طفايات الحريق:</h4>
<table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 10px; border: 1px solid #ddd;">الفئة</th>
<th style="padding: 10px; border: 1px solid #ddd;">نوع الحريق</th>
<th style="padding: 10px; border: 1px solid #ddd;">وسيلة الإطفاء</th>
</tr>
<tr style="background: #bbf7d0;">
<td style="padding: 10px; border: 1px solid #ddd;"><strong>Class A</strong></td>
<td style="padding: 10px; border: 1px solid #ddd;">مواد صلبة (خشب، ورق)</td>
<td style="padding: 10px; border: 1px solid #ddd;">ماء، رغوة</td>
</tr>
<tr style="background: #fef08a;">
<td style="padding: 10px; border: 1px solid #ddd;"><strong>Class B</strong></td>
<td style="padding: 10px; border: 1px solid #ddd;">سوائل قابلة للاشتعال</td>
<td style="padding: 10px; border: 1px solid #ddd;">رغوة، CO₂، مسحوق</td>
</tr>
<tr style="background: #dbeafe;">
<td style="padding: 10px; border: 1px solid #ddd;"><strong>Class C</strong></td>
<td style="padding: 10px; border: 1px solid #ddd;">كهربائي</td>
<td style="padding: 10px; border: 1px solid #ddd;">CO₂، مسحوق جاف</td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 10px; border: 1px solid #ddd;"><strong>Class D</strong></td>
<td style="padding: 10px; border: 1px solid #ddd;">معادن قابلة للاشتعال</td>
<td style="padding: 10px; border: 1px solid #ddd;">مسحوق خاص</td>
</tr>
</table>

<div style="background: #fee2e2; padding: 1rem; border-radius: 8px; border-right: 4px solid #dc2626; margin: 1.5rem 0;">
<p style="margin: 0; color: #7f1d1d;"><strong>⚠️ تحذير:</strong> لا تستخدم الماء أبداً على حرائق الزيوت أو الحرائق الكهربائية - يزيد من انتشار النار ويسبب صعق كهربائي.</p>
</div>

</section>`,
          keyTerms: [
            { term: 'H₂S', definition: 'كبريتيد الهيدروجين - غاز سام عديم اللون برائحة البيض الفاسد' },
            { term: 'SCBA', definition: 'Self-Contained Breathing Apparatus - جهاز التنفس المستقل' },
            { term: 'Red Zone', definition: 'المنطقة الحمراء - منطقة خطر عالي تتطلب احتياطات خاصة' },
            { term: 'IDLH', definition: 'Immediately Dangerous to Life or Health - خطر فوري على الحياة' },
          ],
          practiceQuestion: {
            question: 'ما هو التصرف الصحيح عند اكتشاف تسرب H₂S بتركيز 50 ppm؟',
            options: [
              'الاستمرار في العمل مع ارتداء قناع غبار',
              'الإجلاء الفوري واستخدام SCBA',
              'فتح النوافذ للتهوية',
              'الانتظار حتى تختفي الرائحة'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'HSE in Drilling - Day 3: Drilling-Specific Hazards and PPE',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Drilling-Specific Hazards</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
Drilling operations have unique hazards arising from working with high pressures, chemicals, and heavy equipment. Understanding and controlling these hazards is vital for crew safety.
</p>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">⚠️ Red Zones</h3>

<div style="background: #fee2e2; padding: 1.5rem; border-radius: 12px; border: 2px solid #dc2626; margin: 1.5rem 0;">
<h4 style="color: #991b1b; margin-bottom: 1rem;">Most Dangerous Areas on the Drilling Platform:</h4>
<ul style="list-style: none; padding: 0;">
<li style="margin-bottom: 0.75rem;">🔴 <strong>V-Door Area</strong> - Pipe entry zone (fall and struck-by hazards)</li>
<li style="margin-bottom: 0.75rem;">🔴 <strong>Rotary Table Area</strong> - Rotating equipment (pinch points)</li>
<li style="margin-bottom: 0.75rem;">🔴 <strong>Cat Walk</strong> - Pipe rack walkway (rolling hazards)</li>
<li style="margin-bottom: 0.75rem;">🔴 <strong>Drawworks Area</strong> - Main winch zone</li>
<li style="margin-bottom: 0;">🔴 <strong>Pipe Deck</strong> - Pipe storage platform</li>
</ul>
</div>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">💀 Hydrogen Sulfide (H₂S)</h3>

<p style="margin-bottom: 1rem; line-height: 1.8;">
<strong>H₂S</strong> is one of the most dangerous hazards in drilling. It's a toxic, colorless gas, heavier than air, with a rotten egg smell (disappears at high concentrations due to olfactory paralysis).
</p>

<table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Concentration (ppm)</th>
<th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Effect</th>
<th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Action</th>
</tr>
<tr style="background: #bbf7d0;">
<td style="padding: 12px; border: 1px solid #ddd;">0.1 - 10</td>
<td style="padding: 12px; border: 1px solid #ddd;">Foul odor detectable</td>
<td style="padding: 12px; border: 1px solid #ddd;">Continuous monitoring</td>
</tr>
<tr style="background: #fef08a;">
<td style="padding: 12px; border: 1px solid #ddd;">10 (TWA)</td>
<td style="padding: 12px; border: 1px solid #ddd;">8-hour exposure limit</td>
<td style="padding: 12px; border: 1px solid #ddd;">PPE mandatory</td>
</tr>
<tr style="background: #fca5a5;">
<td style="padding: 12px; border: 1px solid #ddd;">50 - 100</td>
<td style="padding: 12px; border: 1px solid #ddd;">Eye irritation, headache, nausea</td>
<td style="padding: 12px; border: 1px solid #ddd;">Immediate evacuation + SCBA</td>
</tr>
<tr style="background: #dc2626; color: white;">
<td style="padding: 12px; border: 1px solid #ddd;">> 100</td>
<td style="padding: 12px; border: 1px solid #ddd;">Loss of consciousness, rapid death</td>
<td style="padding: 12px; border: 1px solid #ddd;">IDLH - Immediate danger to life</td>
</tr>
</table>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">🛡️ Personal Protective Equipment (PPE)</h3>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin: 1rem 0;">
<div style="background: #ecfdf5; padding: 1rem; border-radius: 8px;">
<h4 style="color: #065f46; margin-bottom: 0.75rem;">🪖 Head Protection</h4>
<ul style="margin: 0; font-size: 0.9rem;">
<li>Hard Hat - Class E rated</li>
<li>Face Shield when needed</li>
<li>Replace every 5 years</li>
</ul>
</div>
<div style="background: #eff6ff; padding: 1rem; border-radius: 8px;">
<h4 style="color: #1e40af; margin-bottom: 0.75rem;">👓 Eye Protection</h4>
<ul style="margin: 0; font-size: 0.9rem;">
<li>Safety Glasses</li>
<li>Goggles for chemicals</li>
<li>Welding Shield for welding</li>
</ul>
</div>
<div style="background: #fef3c7; padding: 1rem; border-radius: 8px;">
<h4 style="color: #92400e; margin-bottom: 0.75rem;">👂 Hearing Protection</h4>
<ul style="margin: 0; font-size: 0.9rem;">
<li>Ear Plugs (NRR 25-33 dB)</li>
<li>Ear Muffs for high noise</li>
<li>Mandatory above 85 dB</li>
</ul>
</div>
<div style="background: #fce7f3; padding: 1rem; border-radius: 8px;">
<h4 style="color: #9d174d; margin-bottom: 0.75rem;">😷 Respiratory Protection</h4>
<ul style="margin: 0; font-size: 0.9rem;">
<li>Dust Mask for particulates</li>
<li>Half-Face Respirator</li>
<li>SCBA for toxic gases</li>
</ul>
</div>
</div>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">🔥 Fire Safety</h3>

<div style="background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%); color: white; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h4 style="margin-bottom: 1rem;">Fire Triangle:</h4>
<ul style="list-style: none; padding: 0;">
<li style="margin-bottom: 0.5rem;">🔺 <strong>Fuel</strong> - Gas, oil, chemicals</li>
<li style="margin-bottom: 0.5rem;">🔺 <strong>Oxygen</strong> - From air</li>
<li style="margin-bottom: 0.5rem;">🔺 <strong>Heat</strong> - Spark, flame</li>
<li style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid rgba(255,255,255,0.3);">Remove any element = Extinguish fire</li>
</ul>
</div>

<div style="background: #fee2e2; padding: 1rem; border-radius: 8px; border-left: 4px solid #dc2626; margin: 1.5rem 0;">
<p style="margin: 0; color: #7f1d1d;"><strong>⚠️ Warning:</strong> Never use water on oil fires or electrical fires - it spreads the fire and causes electrocution.</p>
</div>

</section>`,
          keyTerms: [
            { term: 'H₂S', definition: 'Hydrogen Sulfide - Toxic colorless gas with rotten egg smell' },
            { term: 'SCBA', definition: 'Self-Contained Breathing Apparatus - Independent breathing device' },
            { term: 'Red Zone', definition: 'High-hazard area requiring special precautions' },
            { term: 'IDLH', definition: 'Immediately Dangerous to Life or Health' },
          ],
          practiceQuestion: {
            question: 'What is the correct action when H₂S at 50 ppm is detected?',
            options: [
              'Continue work with a dust mask',
              'Immediate evacuation and use SCBA',
              'Open windows for ventilation',
              'Wait until the smell disappears'
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
          title: 'السلامة والصحة والبيئة - اليوم الرابع: الاستجابة للطوارئ والحماية البيئية',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 التخطيط والاستجابة للطوارئ</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
خطة الاستجابة للطوارئ <strong>(Emergency Response Plan - ERP)</strong> هي الوثيقة الحيوية التي تحدد الإجراءات المطلوبة للتعامل مع حالات الطوارئ المختلفة. في بيئة الحفر، يمكن أن تتحول الحوادث الصغيرة إلى كوارث في ثوانٍ.
</p>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">🚨 أنواع حالات الطوارئ</h3>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin: 1rem 0;">
<div style="background: #fee2e2; padding: 1rem; border-radius: 8px; border-top: 4px solid #dc2626;">
<h4 style="color: #991b1b; margin-bottom: 0.5rem;">🔥 حالات الحريق</h4>
<p style="font-size: 0.9rem; margin: 0;">حرائق المعدات، تسرب الوقود، حرائق منطقة الـ Shale Shaker</p>
</div>
<div style="background: #fef3c7; padding: 1rem; border-radius: 8px; border-top: 4px solid #f59e0b;">
<h4 style="color: #92400e; margin-bottom: 0.5rem;">⚡ Well Control Events</h4>
<p style="font-size: 0.9rem; margin: 0;">Kick، Blowout، فقدان السيطرة على البئر</p>
</div>
<div style="background: #dbeafe; padding: 1rem; border-radius: 8px; border-top: 4px solid #3b82f6;">
<h4 style="color: #1e40af; margin-bottom: 0.5rem;">💨 تسرب الغازات</h4>
<p style="font-size: 0.9rem; margin: 0;">تسرب H₂S، تسرب غاز طبيعي، نقص الأكسجين</p>
</div>
<div style="background: #ecfdf5; padding: 1rem; border-radius: 8px; border-top: 4px solid #10b981;">
<h4 style="color: #065f46; margin-bottom: 0.5rem;">🌊 حالات بحرية</h4>
<p style="font-size: 0.9rem; margin: 0;">Man Overboard، غرق، طوارئ جوية</p>
</div>
</div>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">📢 نظام الإنذار وإشارات الطوارئ</h3>

<table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 12px; text-align: right; border: 1px solid #ddd;">الإنذار</th>
<th style="padding: 12px; text-align: right; border: 1px solid #ddd;">الصوت/الإشارة</th>
<th style="padding: 12px; text-align: right; border: 1px solid #ddd;">الإجراء المطلوب</th>
</tr>
<tr style="background: #fee2e2;">
<td style="padding: 12px; border: 1px solid #ddd;"><strong>General Alarm</strong></td>
<td style="padding: 12px; border: 1px solid #ddd;">7 صفارات قصيرة + واحدة طويلة</td>
<td style="padding: 12px; border: 1px solid #ddd;">التوجه لنقاط التجمع - Muster Stations</td>
</tr>
<tr style="background: #fef3c7;">
<td style="padding: 12px; border: 1px solid #ddd;"><strong>Fire Alarm</strong></td>
<td style="padding: 12px; border: 1px solid #ddd;">صفارة متواصلة</td>
<td style="padding: 12px; border: 1px solid #ddd;">إخلاء المنطقة + فرق الإطفاء</td>
</tr>
<tr style="background: #dbeafe;">
<td style="padding: 12px; border: 1px solid #ddd;"><strong>Abandon Platform</strong></td>
<td style="padding: 12px; border: 1px solid #ddd;">صفارة مستمرة (أكثر من 10 ثوان)</td>
<td style="padding: 12px; border: 1px solid #ddd;">التوجه لقوارب النجاة - Lifeboats</td>
</tr>
<tr style="background: #ecfdf5;">
<td style="padding: 12px; border: 1px solid #ddd;"><strong>All Clear</strong></td>
<td style="padding: 12px; border: 1px solid #ddd;">صفارة واحدة طويلة</td>
<td style="padding: 12px; border: 1px solid #ddd;">انتهاء الطوارئ - العودة للعمل</td>
</tr>
</table>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">🏥 الإسعافات الأولية والإخلاء الطبي</h3>

<div style="background: #f1f5f9; padding: 1.5rem; border-radius: 8px; margin: 1rem 0;">
<h4 style="color: #1e3a5f; margin-bottom: 1rem;">إجراءات DRSABCD:</h4>
<ul style="list-style: none; padding: 0;">
<li style="margin-bottom: 0.5rem;"><strong>D</strong>anger - تأكد من عدم وجود خطر عليك</li>
<li style="margin-bottom: 0.5rem;"><strong>R</strong>esponse - تحقق من استجابة المصاب</li>
<li style="margin-bottom: 0.5rem;"><strong>S</strong>end for help - اطلب المساعدة</li>
<li style="margin-bottom: 0.5rem;"><strong>A</strong>irway - افتح مجرى الهواء</li>
<li style="margin-bottom: 0.5rem;"><strong>B</strong>reathing - تحقق من التنفس</li>
<li style="margin-bottom: 0.5rem;"><strong>C</strong>PR - الإنعاش القلبي الرئوي إذا لزم</li>
<li style="margin-bottom: 0;"><strong>D</strong>efibrillator - استخدم AED إذا توفر</li>
</ul>
</div>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">🌍 الحماية البيئية</h3>

<p style="margin-bottom: 1rem; line-height: 1.8;">
تلتزم صناعة الحفر بحماية البيئة من خلال <strong>Environmental Management System (EMS)</strong> المبني على معيار <strong>ISO 14001</strong>. الهدف هو تقليل البصمة البيئية وحماية النظم الإيكولوجية.
</p>

<div style="background: linear-gradient(135deg, #065f46 0%, #059669 100%); color: white; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h4 style="margin-bottom: 1rem;">🌱 المبادئ البيئية الأساسية:</h4>
<ul style="list-style: none; padding: 0;">
<li style="margin-bottom: 0.75rem;">♻️ <strong>Reduce</strong> - تقليل استهلاك الموارد والنفايات</li>
<li style="margin-bottom: 0.75rem;">♻️ <strong>Reuse</strong> - إعادة استخدام المواد قدر الإمكان</li>
<li style="margin-bottom: 0.75rem;">♻️ <strong>Recycle</strong> - إعادة تدوير النفايات</li>
<li style="margin-bottom: 0;">♻️ <strong>Recover</strong> - استرداد الطاقة من النفايات</li>
</ul>
</div>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">🛢️ إدارة الانسكابات النفطية</h3>

<table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 12px; text-align: right; border: 1px solid #ddd;">تصنيف الانسكاب</th>
<th style="padding: 12px; text-align: right; border: 1px solid #ddd;">الكمية</th>
<th style="padding: 12px; text-align: right; border: 1px solid #ddd;">الاستجابة</th>
</tr>
<tr style="background: #bbf7d0;">
<td style="padding: 12px; border: 1px solid #ddd;"><strong>Tier 1</strong></td>
<td style="padding: 12px; border: 1px solid #ddd;">< 1 برميل</td>
<td style="padding: 12px; border: 1px solid #ddd;">استجابة الموقع (Spill Kit)</td>
</tr>
<tr style="background: #fef08a;">
<td style="padding: 12px; border: 1px solid #ddd;"><strong>Tier 2</strong></td>
<td style="padding: 12px; border: 1px solid #ddd;">1-100 برميل</td>
<td style="padding: 12px; border: 1px solid #ddd;">موارد الشركة + متعاقدين محليين</td>
</tr>
<tr style="background: #fca5a5;">
<td style="padding: 12px; border: 1px solid #ddd;"><strong>Tier 3</strong></td>
<td style="padding: 12px; border: 1px solid #ddd;">> 100 برميل</td>
<td style="padding: 12px; border: 1px solid #ddd;">استجابة إقليمية/دولية (OSRL)</td>
</tr>
</table>

<h4 style="color: #1e3a5f; margin: 1rem 0;">تقنيات احتواء الانسكاب:</h4>
<ul style="margin-bottom: 1rem;">
<li><strong>Boom</strong> - حواجز عائمة لاحتواء الزيت على سطح الماء</li>
<li><strong>Skimmers</strong> - أجهزة شفط الزيت من السطح</li>
<li><strong>Dispersants</strong> - مواد كيميائية لتفتيت الزيت (تستخدم بحذر)</li>
<li><strong>Absorbents</strong> - مواد ماصة للانسكابات الصغيرة</li>
</ul>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">📊 إدارة النفايات</h3>

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 8px; border-right: 4px solid #d97706; margin: 1rem 0;">
<h4 style="margin-bottom: 1rem;">تصنيف النفايات:</h4>
<ul style="margin: 0;">
<li><strong>قصاصات الحفر (Drill Cuttings)</strong> - تُعالج حسب نوع سائل الحفر</li>
<li><strong>سوائل الحفر المستهلكة</strong> - يُعاد تدويرها أو تُعالج</li>
<li><strong>نفايات خطرة</strong> - تُخزن وتُنقل لمرافق معتمدة</li>
<li><strong>نفايات عامة</strong> - تُفصل للتدوير أو الطمر</li>
</ul>
</div>

<div style="background: #fee2e2; padding: 1rem; border-radius: 8px; border-right: 4px solid #dc2626; margin: 1.5rem 0;">
<p style="margin: 0; color: #7f1d1d;"><strong>⚠️ قانوني:</strong> التخلص غير القانوني من النفايات يعرض الشركة لغرامات ضخمة وملاحقة جنائية. يجب توثيق جميع عمليات نقل النفايات بـ Waste Manifest.</p>
</div>

</section>`,
          keyTerms: [
            { term: 'ERP', definition: 'Emergency Response Plan - خطة الاستجابة للطوارئ المكتوبة' },
            { term: 'Muster Station', definition: 'نقطة التجمع المحددة في حالات الطوارئ' },
            { term: 'MEDEVAC', definition: 'Medical Evacuation - الإخلاء الطبي بالطائرة العمودية' },
            { term: 'Spill Kit', definition: 'عدة احتواء الانسكابات الصغيرة' },
          ],
          practiceQuestion: {
            question: 'ما هو الإجراء الصحيح عند سماع إنذار General Alarm؟',
            options: [
              'البقاء في مكان العمل وانتظار التعليمات',
              'التوجه فوراً لنقاط التجمع Muster Stations',
              'مغادرة المنصة مباشرة',
              'الاتصال بالمشرف أولاً'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'HSE in Drilling - Day 4: Emergency Response and Environmental Protection',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Emergency Planning and Response</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
The <strong>Emergency Response Plan (ERP)</strong> is the vital document defining procedures for handling various emergencies. In drilling environments, small incidents can escalate to disasters in seconds.
</p>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">🚨 Types of Emergencies</h3>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin: 1rem 0;">
<div style="background: #fee2e2; padding: 1rem; border-radius: 8px; border-top: 4px solid #dc2626;">
<h4 style="color: #991b1b; margin-bottom: 0.5rem;">🔥 Fire Emergencies</h4>
<p style="font-size: 0.9rem; margin: 0;">Equipment fires, fuel spills, Shale Shaker area fires</p>
</div>
<div style="background: #fef3c7; padding: 1rem; border-radius: 8px; border-top: 4px solid #f59e0b;">
<h4 style="color: #92400e; margin-bottom: 0.5rem;">⚡ Well Control Events</h4>
<p style="font-size: 0.9rem; margin: 0;">Kick, Blowout, loss of well control</p>
</div>
<div style="background: #dbeafe; padding: 1rem; border-radius: 8px; border-top: 4px solid #3b82f6;">
<h4 style="color: #1e40af; margin-bottom: 0.5rem;">💨 Gas Releases</h4>
<p style="font-size: 0.9rem; margin: 0;">H₂S leak, natural gas release, oxygen deficiency</p>
</div>
<div style="background: #ecfdf5; padding: 1rem; border-radius: 8px; border-top: 4px solid #10b981;">
<h4 style="color: #065f46; margin-bottom: 0.5rem;">🌊 Marine Emergencies</h4>
<p style="font-size: 0.9rem; margin: 0;">Man Overboard, drowning, weather emergencies</p>
</div>
</div>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">📢 Alarm System and Emergency Signals</h3>

<table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Alarm</th>
<th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Sound/Signal</th>
<th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Required Action</th>
</tr>
<tr style="background: #fee2e2;">
<td style="padding: 12px; border: 1px solid #ddd;"><strong>General Alarm</strong></td>
<td style="padding: 12px; border: 1px solid #ddd;">7 short + 1 long blast</td>
<td style="padding: 12px; border: 1px solid #ddd;">Proceed to Muster Stations</td>
</tr>
<tr style="background: #fef3c7;">
<td style="padding: 12px; border: 1px solid #ddd;"><strong>Fire Alarm</strong></td>
<td style="padding: 12px; border: 1px solid #ddd;">Continuous siren</td>
<td style="padding: 12px; border: 1px solid #ddd;">Evacuate area + Fire teams respond</td>
</tr>
<tr style="background: #dbeafe;">
<td style="padding: 12px; border: 1px solid #ddd;"><strong>Abandon Platform</strong></td>
<td style="padding: 12px; border: 1px solid #ddd;">Continuous (>10 seconds)</td>
<td style="padding: 12px; border: 1px solid #ddd;">Proceed to Lifeboats</td>
</tr>
</table>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">🌍 Environmental Protection</h3>

<p style="margin-bottom: 1rem; line-height: 1.8;">
The drilling industry commits to environmental protection through an <strong>Environmental Management System (EMS)</strong> based on <strong>ISO 14001</strong>. The goal is to minimize environmental footprint and protect ecosystems.
</p>

<div style="background: linear-gradient(135deg, #065f46 0%, #059669 100%); color: white; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h4 style="margin-bottom: 1rem;">🌱 Core Environmental Principles:</h4>
<ul style="list-style: none; padding: 0;">
<li style="margin-bottom: 0.75rem;">♻️ <strong>Reduce</strong> - Minimize resource consumption and waste</li>
<li style="margin-bottom: 0.75rem;">♻️ <strong>Reuse</strong> - Reuse materials where possible</li>
<li style="margin-bottom: 0.75rem;">♻️ <strong>Recycle</strong> - Recycle waste materials</li>
<li style="margin-bottom: 0;">♻️ <strong>Recover</strong> - Recover energy from waste</li>
</ul>
</div>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">🛢️ Oil Spill Management</h3>

<table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Tier</th>
<th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Volume</th>
<th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Response</th>
</tr>
<tr style="background: #bbf7d0;">
<td style="padding: 12px; border: 1px solid #ddd;"><strong>Tier 1</strong></td>
<td style="padding: 12px; border: 1px solid #ddd;">< 1 barrel</td>
<td style="padding: 12px; border: 1px solid #ddd;">On-site response (Spill Kit)</td>
</tr>
<tr style="background: #fef08a;">
<td style="padding: 12px; border: 1px solid #ddd;"><strong>Tier 2</strong></td>
<td style="padding: 12px; border: 1px solid #ddd;">1-100 barrels</td>
<td style="padding: 12px; border: 1px solid #ddd;">Company resources + local contractors</td>
</tr>
<tr style="background: #fca5a5;">
<td style="padding: 12px; border: 1px solid #ddd;"><strong>Tier 3</strong></td>
<td style="padding: 12px; border: 1px solid #ddd;">> 100 barrels</td>
<td style="padding: 12px; border: 1px solid #ddd;">Regional/international response (OSRL)</td>
</tr>
</table>

<div style="background: #fee2e2; padding: 1rem; border-radius: 8px; border-left: 4px solid #dc2626; margin: 1.5rem 0;">
<p style="margin: 0; color: #7f1d1d;"><strong>⚠️ Legal:</strong> Illegal waste disposal exposes the company to massive fines and criminal prosecution. All waste transfers must be documented with a Waste Manifest.</p>
</div>

</section>`,
          keyTerms: [
            { term: 'ERP', definition: 'Emergency Response Plan - Written emergency response procedures' },
            { term: 'Muster Station', definition: 'Designated assembly point during emergencies' },
            { term: 'MEDEVAC', definition: 'Medical Evacuation - Helicopter medical evacuation' },
            { term: 'Spill Kit', definition: 'Equipment for containing small spills' },
          ],
          practiceQuestion: {
            question: 'What is the correct action when hearing a General Alarm?',
            options: [
              'Stay at workstation and wait for instructions',
              'Proceed immediately to Muster Stations',
              'Leave the platform directly',
              'Call the supervisor first'
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
          title: 'السلامة والصحة والبيئة - اليوم الخامس: ثقافة السلامة والتحقيق في الحوادث',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 بناء ثقافة السلامة</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
<strong>ثقافة السلامة (Safety Culture)</strong> هي القيم والمعتقدات والسلوكيات المشتركة التي تحدد كيف تتعامل المنظمة مع السلامة. الثقافة القوية تجعل السلامة جزءاً لا يتجزأ من كل قرار وكل إجراء.
</p>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">🏆 مراحل نضج ثقافة السلامة</h3>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h4 style="margin-bottom: 1rem;">Bradley Curve - منحنى برادلي:</h4>
<ol style="padding-right: 1.5rem;">
<li style="margin-bottom: 1rem;">
<strong>Reactive (تفاعلي)</strong><br/>
<span style="font-size: 0.9rem;">السلامة بالغريزة الطبيعية فقط. لا توجد أنظمة. معدل حوادث مرتفع جداً.</span>
</li>
<li style="margin-bottom: 1rem;">
<strong>Dependent (معتمد)</strong><br/>
<span style="font-size: 0.9rem;">السلامة تعتمد على القواعد والإشراف. الامتثال بسبب الخوف من العقوبات.</span>
</li>
<li style="margin-bottom: 1rem;">
<strong>Independent (مستقل)</strong><br/>
<span style="font-size: 0.9rem;">الأفراد يتحملون مسؤولية سلامتهم الشخصية. معرفة وتطبيق ذاتي.</span>
</li>
<li style="margin-bottom: 0;">
<strong>Interdependent (متداخل)</strong><br/>
<span style="font-size: 0.9rem;">الفرق تهتم بسلامة بعضها. ثقافة "أخي حارسي". أقل معدل حوادث.</span>
</li>
</ol>
</div>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">🗣️ التواصل والملاحظات السلوكية</h3>

<p style="margin-bottom: 1rem; line-height: 1.8;">
برنامج <strong>Behavioral Based Safety (BBS)</strong> يركز على ملاحظة السلوكيات الآمنة وغير الآمنة وتقديم التغذية الراجعة البناءة.
</p>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin: 1rem 0;">
<div style="background: #ecfdf5; padding: 1rem; border-radius: 8px; border-top: 4px solid #10b981;">
<h4 style="color: #065f46; margin-bottom: 0.5rem;">✅ Safety Observation</h4>
<p style="font-size: 0.9rem; margin: 0;">ملاحظة سلوك آمن أو غير آمن وتوثيقه. الهدف تعزيز السلوكيات الإيجابية.</p>
</div>
<div style="background: #eff6ff; padding: 1rem; border-radius: 8px; border-top: 4px solid #3b82f6;">
<h4 style="color: #1e40af; margin-bottom: 0.5rem;">💬 Toolbox Talk</h4>
<p style="font-size: 0.9rem; margin: 0;">اجتماع قصير (5-10 دقائق) قبل بدء العمل لمناقشة مخاطر المهمة.</p>
</div>
<div style="background: #fef3c7; padding: 1rem; border-radius: 8px; border-top: 4px solid #f59e0b;">
<h4 style="color: #92400e; margin-bottom: 0.5rem;">🎯 Safety Stand-Down</h4>
<p style="font-size: 0.9rem; margin: 0;">إيقاف جميع الأعمال لمناقشة قضية سلامة مهمة أو بعد حادث.</p>
</div>
</div>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">🔍 التحقيق في الحوادث</h3>

<p style="margin-bottom: 1rem; line-height: 1.8;">
التحقيق في الحوادث ليس للوم، بل لتحديد الأسباب الجذرية ومنع التكرار. يجب أن يبدأ التحقيق فوراً بعد تأمين الموقع وعلاج المصابين.
</p>

<div style="background: #f1f5f9; padding: 1.5rem; border-radius: 8px; margin: 1rem 0;">
<h4 style="color: #1e3a5f; margin-bottom: 1rem;">خطوات التحقيق:</h4>
<ol style="padding-right: 1.5rem;">
<li style="margin-bottom: 0.5rem;"><strong>تأمين الموقع</strong> - الحفاظ على الأدلة كما هي</li>
<li style="margin-bottom: 0.5rem;"><strong>جمع المعلومات</strong> - مقابلات، صور، وثائق</li>
<li style="margin-bottom: 0.5rem;"><strong>تحليل الأسباب</strong> - استخدام أدوات التحليل</li>
<li style="margin-bottom: 0.5rem;"><strong>تحديد الإجراءات التصحيحية</strong> - CAPA</li>
<li style="margin-bottom: 0;"><strong>المتابعة والتحقق</strong> - ضمان فعالية الإجراءات</li>
</ol>
</div>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">🧩 تحليل الأسباب الجذرية (Root Cause Analysis)</h3>

<h4 style="color: #1e3a5f; margin: 1rem 0;">تقنية 5 Whys:</h4>
<div style="background: #fef3c7; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<p style="margin-bottom: 0.5rem;"><strong>الحادث:</strong> عامل سقط من السلم</p>
<p style="margin-bottom: 0.5rem;">لماذا؟ → السلم انزلق</p>
<p style="margin-bottom: 0.5rem;">لماذا؟ → الأرضية زلقة</p>
<p style="margin-bottom: 0.5rem;">لماذا؟ → تسرب زيت</p>
<p style="margin-bottom: 0.5rem;">لماذا؟ → جوان تالف</p>
<p style="margin-bottom: 0;"><strong>السبب الجذري:</strong> → لم تُنفذ الصيانة الوقائية</p>
</div>

<h4 style="color: #1e3a5f; margin: 1rem 0;">مخطط السبب والنتيجة (Fishbone/Ishikawa):</h4>
<div style="background: #eff6ff; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<p style="margin-bottom: 1rem;">تحليل الأسباب تحت 6 فئات رئيسية:</p>
<ul style="margin: 0;">
<li><strong>Man</strong> - العامل البشري (تدريب، إرهاق، إهمال)</li>
<li><strong>Machine</strong> - المعدات (عطل، تصميم)</li>
<li><strong>Method</strong> - الإجراء (غير واضح، غير محدث)</li>
<li><strong>Material</strong> - المواد (جودة، مواصفات)</li>
<li><strong>Measurement</strong> - القياس (معايرة، دقة)</li>
<li><strong>Environment</strong> - البيئة (طقس، إضاءة)</li>
</ul>
</div>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">📊 الإجراءات التصحيحية والوقائية (CAPA)</h3>

<table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 12px; text-align: right; border: 1px solid #ddd;">النوع</th>
<th style="padding: 12px; text-align: right; border: 1px solid #ddd;">الهدف</th>
<th style="padding: 12px; text-align: right; border: 1px solid #ddd;">مثال</th>
</tr>
<tr style="background: #fee2e2;">
<td style="padding: 12px; border: 1px solid #ddd;"><strong>Immediate</strong></td>
<td style="padding: 12px; border: 1px solid #ddd;">إيقاف الخطر فوراً</td>
<td style="padding: 12px; border: 1px solid #ddd;">عزل المعدات التالفة</td>
</tr>
<tr style="background: #fef3c7;">
<td style="padding: 12px; border: 1px solid #ddd;"><strong>Corrective</strong></td>
<td style="padding: 12px; border: 1px solid #ddd;">منع تكرار نفس الحادث</td>
<td style="padding: 12px; border: 1px solid #ddd;">إصلاح العيب، تحديث الإجراء</td>
</tr>
<tr style="background: #ecfdf5;">
<td style="padding: 12px; border: 1px solid #ddd;"><strong>Preventive</strong></td>
<td style="padding: 12px; border: 1px solid #ddd;">منع حوادث مماثلة</td>
<td style="padding: 12px; border: 1px solid #ddd;">تغيير تصميم، تدريب إضافي</td>
</tr>
</table>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">📈 تقارير وإحصائيات السلامة</h3>

<div style="background: #f1f5f9; padding: 1.5rem; border-radius: 8px; margin: 1rem 0;">
<h4 style="color: #1e3a5f; margin-bottom: 1rem;">حسابات مؤشرات السلامة:</h4>
<p style="margin-bottom: 0.75rem;"><strong>TRIR</strong> = (عدد الحوادث المسجلة × 200,000) ÷ إجمالي ساعات العمل</p>
<p style="margin-bottom: 0.75rem;"><strong>LTIF</strong> = (إصابات فقدان الوقت × 1,000,000) ÷ إجمالي ساعات العمل</p>
<p style="margin-bottom: 0;"><strong>Severity Rate</strong> = (أيام العمل المفقودة × 200,000) ÷ إجمالي ساعات العمل</p>
</div>

<div style="background: #ecfdf5; padding: 1rem; border-radius: 8px; border-right: 4px solid #10b981; margin: 1.5rem 0;">
<p style="margin: 0; color: #065f46;"><strong>💡 أفضل الممارسات:</strong> مشاركة الدروس المستفادة (Lessons Learned) مع جميع المواقع والشركاء لمنع تكرار الحوادث في أماكن أخرى.</p>
</div>

</section>`,
          keyTerms: [
            { term: 'Safety Culture', definition: 'ثقافة السلامة - القيم والسلوكيات المشتركة حول السلامة في المنظمة' },
            { term: 'BBS', definition: 'Behavioral Based Safety - نظام السلامة القائم على السلوك' },
            { term: 'RCA', definition: 'Root Cause Analysis - تحليل الأسباب الجذرية للحوادث' },
            { term: 'CAPA', definition: 'Corrective and Preventive Actions - الإجراءات التصحيحية والوقائية' },
          ],
          practiceQuestion: {
            question: 'ما هو الهدف الرئيسي من التحقيق في الحوادث؟',
            options: [
              'معاقبة المسؤولين عن الحادث',
              'تحديد الأسباب الجذرية ومنع التكرار',
              'إعداد التقارير للجهات الرقابية فقط',
              'تحديد تكلفة الأضرار المالية'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'HSE in Drilling - Day 5: Safety Culture and Incident Investigation',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">🔷 Building a Safety Culture</h2>

<p style="margin-bottom: 1rem; line-height: 1.8;">
<strong>Safety Culture</strong> is the shared values, beliefs, and behaviors that determine how an organization approaches safety. A strong culture makes safety an integral part of every decision and action.
</p>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">🏆 Safety Culture Maturity Stages</h3>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
<h4 style="margin-bottom: 1rem;">Bradley Curve:</h4>
<ol style="padding-left: 1.5rem;">
<li style="margin-bottom: 1rem;">
<strong>Reactive</strong><br/>
<span style="font-size: 0.9rem;">Safety by natural instinct only. No systems. Very high incident rate.</span>
</li>
<li style="margin-bottom: 1rem;">
<strong>Dependent</strong><br/>
<span style="font-size: 0.9rem;">Safety relies on rules and supervision. Compliance due to fear of punishment.</span>
</li>
<li style="margin-bottom: 1rem;">
<strong>Independent</strong><br/>
<span style="font-size: 0.9rem;">Individuals take responsibility for their own safety. Self-knowledge and application.</span>
</li>
<li style="margin-bottom: 0;">
<strong>Interdependent</strong><br/>
<span style="font-size: 0.9rem;">Teams care about each other's safety. "My brother's keeper" culture. Lowest incident rate.</span>
</li>
</ol>
</div>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">🗣️ Communication and Behavioral Observations</h3>

<p style="margin-bottom: 1rem; line-height: 1.8;">
<strong>Behavioral Based Safety (BBS)</strong> program focuses on observing safe and unsafe behaviors and providing constructive feedback.
</p>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin: 1rem 0;">
<div style="background: #ecfdf5; padding: 1rem; border-radius: 8px; border-top: 4px solid #10b981;">
<h4 style="color: #065f46; margin-bottom: 0.5rem;">✅ Safety Observation</h4>
<p style="font-size: 0.9rem; margin: 0;">Observe and document safe or unsafe behavior. Goal is reinforcing positive behaviors.</p>
</div>
<div style="background: #eff6ff; padding: 1rem; border-radius: 8px; border-top: 4px solid #3b82f6;">
<h4 style="color: #1e40af; margin-bottom: 0.5rem;">💬 Toolbox Talk</h4>
<p style="font-size: 0.9rem; margin: 0;">Short meeting (5-10 min) before work to discuss task hazards.</p>
</div>
<div style="background: #fef3c7; padding: 1rem; border-radius: 8px; border-top: 4px solid #f59e0b;">
<h4 style="color: #92400e; margin-bottom: 0.5rem;">🎯 Safety Stand-Down</h4>
<p style="font-size: 0.9rem; margin: 0;">Stop all work to discuss important safety issues or after incidents.</p>
</div>
</div>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">🔍 Incident Investigation</h3>

<p style="margin-bottom: 1rem; line-height: 1.8;">
Incident investigation is not about blame, but about identifying root causes and preventing recurrence. Investigation must begin immediately after securing the scene and treating injured.
</p>

<div style="background: #f1f5f9; padding: 1.5rem; border-radius: 8px; margin: 1rem 0;">
<h4 style="color: #1e3a5f; margin-bottom: 1rem;">Investigation Steps:</h4>
<ol style="padding-left: 1.5rem;">
<li style="margin-bottom: 0.5rem;"><strong>Secure the Scene</strong> - Preserve evidence as-is</li>
<li style="margin-bottom: 0.5rem;"><strong>Gather Information</strong> - Interviews, photos, documents</li>
<li style="margin-bottom: 0.5rem;"><strong>Analyze Causes</strong> - Use analysis tools</li>
<li style="margin-bottom: 0.5rem;"><strong>Identify Corrective Actions</strong> - CAPA</li>
<li style="margin-bottom: 0;"><strong>Follow-up and Verify</strong> - Ensure effectiveness</li>
</ol>
</div>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">🧩 Root Cause Analysis (RCA)</h3>

<h4 style="color: #1e3a5f; margin: 1rem 0;">5 Whys Technique:</h4>
<div style="background: #fef3c7; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<p style="margin-bottom: 0.5rem;"><strong>Incident:</strong> Worker fell from ladder</p>
<p style="margin-bottom: 0.5rem;">Why? → Ladder slipped</p>
<p style="margin-bottom: 0.5rem;">Why? → Floor was slippery</p>
<p style="margin-bottom: 0.5rem;">Why? → Oil leak</p>
<p style="margin-bottom: 0.5rem;">Why? → Damaged gasket</p>
<p style="margin-bottom: 0;"><strong>Root Cause:</strong> → Preventive maintenance not performed</p>
</div>

<h4 style="color: #1e3a5f; margin: 1rem 0;">Fishbone/Ishikawa Diagram:</h4>
<div style="background: #eff6ff; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
<p style="margin-bottom: 1rem;">Analyze causes under 6 main categories:</p>
<ul style="margin: 0;">
<li><strong>Man</strong> - Human factor (training, fatigue, negligence)</li>
<li><strong>Machine</strong> - Equipment (failure, design)</li>
<li><strong>Method</strong> - Procedure (unclear, outdated)</li>
<li><strong>Material</strong> - Materials (quality, specifications)</li>
<li><strong>Measurement</strong> - Measurement (calibration, accuracy)</li>
<li><strong>Environment</strong> - Environment (weather, lighting)</li>
</ul>
</div>

<h3 style="color: #d97706; font-size: 1.3rem; font-weight: bold; margin: 1.5rem 0 1rem;">📊 Corrective and Preventive Actions (CAPA)</h3>

<table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Type</th>
<th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Goal</th>
<th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Example</th>
</tr>
<tr style="background: #fee2e2;">
<td style="padding: 12px; border: 1px solid #ddd;"><strong>Immediate</strong></td>
<td style="padding: 12px; border: 1px solid #ddd;">Stop hazard immediately</td>
<td style="padding: 12px; border: 1px solid #ddd;">Isolate damaged equipment</td>
</tr>
<tr style="background: #fef3c7;">
<td style="padding: 12px; border: 1px solid #ddd;"><strong>Corrective</strong></td>
<td style="padding: 12px; border: 1px solid #ddd;">Prevent same incident recurrence</td>
<td style="padding: 12px; border: 1px solid #ddd;">Fix defect, update procedure</td>
</tr>
<tr style="background: #ecfdf5;">
<td style="padding: 12px; border: 1px solid #ddd;"><strong>Preventive</strong></td>
<td style="padding: 12px; border: 1px solid #ddd;">Prevent similar incidents</td>
<td style="padding: 12px; border: 1px solid #ddd;">Design change, additional training</td>
</tr>
</table>

<div style="background: #ecfdf5; padding: 1rem; border-radius: 8px; border-left: 4px solid #10b981; margin: 1.5rem 0;">
<p style="margin: 0; color: #065f46;"><strong>💡 Best Practice:</strong> Share Lessons Learned with all sites and partners to prevent incident recurrence elsewhere.</p>
</div>

</section>`,
          keyTerms: [
            { term: 'Safety Culture', definition: 'Shared values and behaviors around safety in an organization' },
            { term: 'BBS', definition: 'Behavioral Based Safety - Safety system based on behavior observation' },
            { term: 'RCA', definition: 'Root Cause Analysis - Analyzing fundamental causes of incidents' },
            { term: 'CAPA', definition: 'Corrective and Preventive Actions' },
          ],
          practiceQuestion: {
            question: 'What is the main objective of incident investigation?',
            options: [
              'Punishing those responsible for the incident',
              'Identifying root causes and preventing recurrence',
              'Preparing reports for regulatory bodies only',
              'Determining financial damage costs'
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
          title: 'اختبار السلامة والصحة والبيئة في عمليات الحفر',
          explanation: 'اختبر معلوماتك في مفاهيم HSE المتقدمة',
          keyTerms: [],
        },
        en: {
          title: 'HSE in Drilling Operations Quiz',
          explanation: 'Test your knowledge of advanced HSE concepts',
          keyTerms: [],
        },
      },
      quiz: {
        ar: [
          {
            question: 'ما هو المبدأ الأساسي من هرم Heinrich للحوادث؟',
            options: ['التركيز على التحقيق في الحوادث الكبرى فقط', 'منع التصرفات غير الآمنة في قاعدة الهرم يمنع الحوادث الكبرى', 'الحوادث الكبرى لا يمكن منعها', 'Near Misses غير مهمة'],
            correctAnswer: 1
          },
          {
            question: 'ما هو TRIR وكيف يُحسب؟',
            options: ['معدل الحوادث لكل 1000 عامل', 'عدد الحوادث المسجلة لكل 200,000 ساعة عمل', 'عدد أيام العمل المفقودة', 'تكلفة الحوادث السنوية'],
            correctAnswer: 1
          },
          {
            question: 'ما هو التركيز الذي يتطلب إجلاء فوري واستخدام SCBA لغاز H₂S؟',
            options: ['10 ppm', '25 ppm', '50 ppm وأعلى', '5 ppm'],
            correctAnswer: 2
          },
          {
            question: 'ما هو الغرض الرئيسي من نظام LOTO؟',
            options: ['تسجيل ساعات العمل', 'عزل مصادر الطاقة أثناء الصيانة', 'تحديد مواقع المعدات', 'مراقبة جودة الإنتاج'],
            correctAnswer: 1
          },
          {
            question: 'ما هو الإجراء الصحيح عند سماع General Alarm؟',
            options: ['الاستمرار في العمل', 'التوجه لنقاط التجمع Muster Stations', 'الاتصال بالمشرف', 'مغادرة المنصة فوراً'],
            correctAnswer: 1
          },
          {
            question: 'ما هي أعلى مرحلة في منحنى Bradley لثقافة السلامة؟',
            options: ['Reactive', 'Dependent', 'Independent', 'Interdependent'],
            correctAnswer: 3
          },
          {
            question: 'أي نوع من طفايات الحريق مناسب للحرائق الكهربائية؟',
            options: ['ماء', 'رغوة', 'CO₂ أو مسحوق جاف', 'ماء + رغوة'],
            correctAnswer: 2
          },
          {
            question: 'ما هو الهدف من تقنية 5 Whys في التحقيق؟',
            options: ['تحديد 5 مشتبه بهم', 'الوصول للسبب الجذري للحادث', 'إجراء 5 مقابلات', 'كتابة 5 تقارير'],
            correctAnswer: 1
          },
          {
            question: 'ما هي المنطقة الحمراء Red Zone على منصة الحفر؟',
            options: ['منطقة الراحة', 'منطقة خطر عالي تتطلب احتياطات خاصة', 'منطقة التخزين', 'منطقة الإدارة'],
            correctAnswer: 1
          },
          {
            question: 'ما هو Stop Work Authority؟',
            options: ['صلاحية المدير فقط لإيقاف العمل', 'حق وواجب كل عامل لإيقاف العمل عند الخطر', 'إيقاف العمل للاستراحة', 'صلاحية HSE فقط'],
            correctAnswer: 1
          }
        ],
        en: [
          {
            question: 'What is the core principle of Heinrich\'s Accident Pyramid?',
            options: ['Focus only on major accidents', 'Preventing unsafe acts at the base prevents major accidents', 'Major accidents cannot be prevented', 'Near misses are not important'],
            correctAnswer: 1
          },
          {
            question: 'What is TRIR and how is it calculated?',
            options: ['Incident rate per 1000 workers', 'Recordable incidents per 200,000 man-hours', 'Lost workdays count', 'Annual incident cost'],
            correctAnswer: 1
          },
          {
            question: 'What H₂S concentration requires immediate evacuation and SCBA use?',
            options: ['10 ppm', '25 ppm', '50 ppm and above', '5 ppm'],
            correctAnswer: 2
          },
          {
            question: 'What is the main purpose of the LOTO system?',
            options: ['Recording work hours', 'Isolating energy sources during maintenance', 'Locating equipment', 'Monitoring production quality'],
            correctAnswer: 1
          },
          {
            question: 'What is the correct action when hearing a General Alarm?',
            options: ['Continue working', 'Proceed to Muster Stations', 'Call supervisor', 'Leave platform immediately'],
            correctAnswer: 1
          },
          {
            question: 'What is the highest stage in the Bradley Curve for safety culture?',
            options: ['Reactive', 'Dependent', 'Independent', 'Interdependent'],
            correctAnswer: 3
          },
          {
            question: 'Which fire extinguisher type is suitable for electrical fires?',
            options: ['Water', 'Foam', 'CO₂ or dry powder', 'Water + foam'],
            correctAnswer: 2
          },
          {
            question: 'What is the goal of the 5 Whys technique in investigation?',
            options: ['Identify 5 suspects', 'Reach the root cause of the incident', 'Conduct 5 interviews', 'Write 5 reports'],
            correctAnswer: 1
          },
          {
            question: 'What is a Red Zone on a drilling platform?',
            options: ['Rest area', 'High-hazard area requiring special precautions', 'Storage area', 'Management area'],
            correctAnswer: 1
          },
          {
            question: 'What is Stop Work Authority?',
            options: ['Manager-only authority to stop work', 'Every worker\'s right and duty to stop work when danger exists', 'Stopping work for breaks', 'HSE-only authority'],
            correctAnswer: 1
          }
        ],
      },
    },
    {
      day: 7,
      type: 'project',
      content: {
        ar: {
          title: 'مشروع السلامة والصحة والبيئة في عمليات الحفر',
          explanation: 'طبق معرفتك في تحليل HSE',
          keyTerms: [],
        },
        en: {
          title: 'HSE in Drilling Operations Project',
          explanation: 'Apply your knowledge in HSE analysis',
          keyTerms: [],
        },
      },
      project: {
        ar: {
          title: 'تطوير خطة HSE لعملية حفر',
          description: 'قم بتطوير خطة HSE شاملة لعملية حفر بئر استكشافي في منطقة صحراوية نائية، مع التركيز على المخاطر الخاصة بالموقع وإجراءات الطوارئ.',
          instructions: [
            'حدد المخاطر الرئيسية المرتبطة بالحفر في منطقة صحراوية نائية (الحرارة، العواصف الرملية، بُعد المرافق الطبية)',
            'صمم مصفوفة مخاطر Risk Matrix للمخاطر الخمس الأكثر خطورة مع تحديد الاحتمالية والشدة',
            'حدد معدات PPE المطلوبة لكل منطقة عمل على المنصة',
            'ضع خطة استجابة للطوارئ تشمل: حريق، تسرب H₂S، إصابة خطيرة، Well Kick',
            'صمم برنامج Toolbox Talks أسبوعي يغطي المخاطر الموسمية والتشغيلية',
            'حدد مؤشرات الأداء Leading Indicators التي ستتابعها وأهدافها',
            'قدم توصياتك لتحقيق ثقافة سلامة Interdependent'
          ],
          submissionType: 'text',
        },
        en: {
          title: 'Developing an HSE Plan for a Drilling Operation',
          description: 'Develop a comprehensive HSE plan for an exploratory well drilling operation in a remote desert area, focusing on site-specific hazards and emergency procedures.',
          instructions: [
            'Identify main hazards associated with drilling in a remote desert area (heat, sandstorms, distance from medical facilities)',
            'Design a Risk Matrix for the five most critical hazards with probability and severity ratings',
            'Specify required PPE for each work zone on the platform',
            'Develop an emergency response plan covering: fire, H₂S release, serious injury, Well Kick',
            'Design a weekly Toolbox Talks program covering seasonal and operational hazards',
            'Define the Leading Indicators you will track and their targets',
            'Provide recommendations for achieving an Interdependent safety culture'
          ],
          submissionType: 'text',
        },
      },
    },
  ],
};
