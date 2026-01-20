import { WeeklyLesson } from '../weeklyContent';

export const drillingAutomationLesson: WeeklyLesson = {
  lessonId: 'drilling-automation',
  days: [
    // ==================== Day 1: Introduction to Drilling Automation ====================
    {
      day: 1,
      type: 'learning',
      content: {
        ar: {
          title: 'أتمتة الحفر - اليوم الأول: مقدمة في أتمتة الحفر',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">🔷 مفهوم أتمتة الحفر (Drilling Automation Concept)</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="color: #f4a261; margin-bottom: 1rem;">📌 ما هي أتمتة الحفر؟</h3>
<p style="line-height: 1.8;">
أتمتة الحفر (Drilling Automation) هي استخدام أنظمة التحكم الآلي والذكاء الاصطناعي والخوارزميات المتقدمة لتنفيذ عمليات الحفر بأقل تدخل بشري ممكن. تهدف الأتمتة إلى تحسين الأداء وزيادة السلامة وتقليل التكاليف التشغيلية من خلال تحويل العمليات اليدوية إلى عمليات آلية مراقبة ومحكمة.
</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">🎯 مستويات الأتمتة في الحفر (Levels of Automation)</h3>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; border-left: 4px solid #3498db; margin-bottom: 1.5rem;">
<p style="font-weight: bold; color: #1e3a5f; margin-bottom: 1rem;">تُصنّف أتمتة الحفر إلى خمسة مستويات حسب معيار SPE:</p>
<ul style="list-style: none; padding: 0;">
<li style="margin-bottom: 1rem; padding: 0.75rem; background: white; border-radius: 8px;">
<strong style="color: #3498db;">المستوى 0 - يدوي (Manual):</strong><br>
المُشغّل يتحكم في جميع العمليات يدوياً. لا يوجد أي تدخل آلي.
</li>
<li style="margin-bottom: 1rem; padding: 0.75rem; background: white; border-radius: 8px;">
<strong style="color: #27ae60;">المستوى 1 - مساعد (Assisted):</strong><br>
النظام يقدم توصيات ومعلومات للمُشغّل، لكن القرار النهائي والتنفيذ يبقى بشرياً.
</li>
<li style="margin-bottom: 1rem; padding: 0.75rem; background: white; border-radius: 8px;">
<strong style="color: #f39c12;">المستوى 2 - شبه آلي (Semi-Automated):</strong><br>
النظام ينفذ بعض المهام تلقائياً تحت إشراف بشري مستمر (مثل AutoDriller التقليدي).
</li>
<li style="margin-bottom: 1rem; padding: 0.75rem; background: white; border-radius: 8px;">
<strong style="color: #e74c3c;">المستوى 3 - آلي مع إشراف (Automated with Oversight):</strong><br>
النظام يتخذ قرارات وينفذ عمليات معقدة، مع قدرة المُشغّل على التدخل عند الحاجة.
</li>
<li style="margin-bottom: 1rem; padding: 0.75rem; background: white; border-radius: 8px;">
<strong style="color: #9b59b6;">المستوى 4 - مستقل تماماً (Fully Autonomous):</strong><br>
النظام يدير العمليات بالكامل دون تدخل بشري (هدف مستقبلي).
</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📊 تطور أتمتة الحفر (Evolution of Drilling Automation)</h3>

<div style="overflow-x: auto; margin-bottom: 1.5rem;">
<table style="width: 100%; border-collapse: collapse; font-size: 0.95rem;">
<thead>
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 1rem; text-align: right; border: 1px solid #2d5a87;">الفترة</th>
<th style="padding: 1rem; text-align: right; border: 1px solid #2d5a87;">التقنية</th>
<th style="padding: 1rem; text-align: right; border: 1px solid #2d5a87;">الوصف</th>
</tr>
</thead>
<tbody>
<tr style="background: #f8f9fa;">
<td style="padding: 0.75rem; border: 1px solid #ddd;">1970s-1980s</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">AutoDriller الميكانيكي</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">تحكم بسيط في WOB باستخدام أنظمة هيدروليكية</td>
</tr>
<tr style="background: white;">
<td style="padding: 0.75rem; border: 1px solid #ddd;">1990s</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">AutoDriller الإلكتروني</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">تحكم PID في WOB وROP مع شاشات رقمية</td>
</tr>
<tr style="background: #f8f9fa;">
<td style="padding: 0.75rem; border: 1px solid #ddd;">2000s</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Wired Drill Pipe + RTOCs</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">بيانات عالية التردد ومراكز تحكم عن بعد</td>
</tr>
<tr style="background: white;">
<td style="padding: 0.75rem; border: 1px solid #ddd;">2010s</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Closed-Loop Automation</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">أنظمة حلقة مغلقة للتحكم في متعدد المعاملات</td>
</tr>
<tr style="background: #f8f9fa;">
<td style="padding: 0.75rem; border: 1px solid #ddd;">2020s</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">AI/ML + Digital Twins</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">ذكاء اصطناعي ونماذج رقمية توأمية</td>
</tr>
</tbody>
</table>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">🏆 فوائد أتمتة الحفر (Benefits of Drilling Automation)</h3>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin-bottom: 1.5rem;">
<div style="background: #e8f5e9; padding: 1.25rem; border-radius: 10px; border-left: 4px solid #27ae60;">
<h4 style="color: #27ae60; margin-bottom: 0.75rem;">⚡ تحسين الأداء</h4>
<ul style="margin: 0; padding-right: 1.25rem;">
<li>زيادة ROP بنسبة 10-30%</li>
<li>تقليل وقت الرحلة (Trip Time)</li>
<li>تحسين استخدام الطاقة</li>
<li>تقليل تآكل المعدات</li>
</ul>
</div>
<div style="background: #fff3e0; padding: 1.25rem; border-radius: 10px; border-left: 4px solid #f39c12;">
<h4 style="color: #f39c12; margin-bottom: 0.75rem;">🛡️ تعزيز السلامة</h4>
<ul style="margin: 0; padding-right: 1.25rem;">
<li>تقليل الأخطاء البشرية</li>
<li>كشف مبكر للمشاكل</li>
<li>استجابة أسرع للطوارئ</li>
<li>تقليل التعرض للمخاطر</li>
</ul>
</div>
<div style="background: #e3f2fd; padding: 1.25rem; border-radius: 10px; border-left: 4px solid #3498db;">
<h4 style="color: #3498db; margin-bottom: 0.75rem;">💰 خفض التكاليف</h4>
<ul style="margin: 0; padding-right: 1.25rem;">
<li>تقليل NPT بنسبة 20-40%</li>
<li>إطالة عمر البت والمعدات</li>
<li>تحسين كفاءة استهلاك الوقود</li>
<li>تقليل عدد الطاقم المطلوب</li>
</ul>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">🔧 المكونات الأساسية لنظام الأتمتة</h3>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<ol style="margin: 0; padding-right: 1.5rem; line-height: 2;">
<li><strong>أجهزة الاستشعار (Sensors):</strong> جمع البيانات في الوقت الحقيقي (WOB, RPM, Torque, SPP, ROP, Vibrations)</li>
<li><strong>نظام اكتساب البيانات (Data Acquisition):</strong> تجميع ومعالجة إشارات المستشعرات</li>
<li><strong>خوارزميات التحكم (Control Algorithms):</strong> PID, Model Predictive Control (MPC), AI/ML</li>
<li><strong>واجهة المُشغّل (HMI):</strong> شاشات عرض وتفاعل مع النظام</li>
<li><strong>المُشغّلات (Actuators):</strong> تنفيذ أوامر التحكم (Drawworks, Top Drive, Mud Pumps)</li>
</ol>
</div>

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-top: 2rem;">
<h4 style="color: #ffd700; margin-bottom: 1rem;">💡 نقطة مهمة للمهندس الميداني</h4>
<p style="margin: 0; line-height: 1.8;">
أتمتة الحفر لا تعني استبدال المهندس، بل تعني تحريره من المهام الروتينية للتركيز على القرارات الاستراتيجية. المهندس الناجح يفهم كيف تعمل هذه الأنظمة ومتى يجب التدخل يدوياً وكيف يفسر توصياتها.
</p>
</div>
</section>`,
          keyTerms: [
            { term: 'أتمتة الحفر (Drilling Automation)', definition: 'استخدام أنظمة التحكم الآلي لتنفيذ عمليات الحفر بأقل تدخل بشري' },
            { term: 'حلقة التحكم المغلقة (Closed-Loop Control)', definition: 'نظام يقيس المخرجات ويعدّل المدخلات تلقائياً للحفاظ على القيم المستهدفة' },
            { term: 'RTOC (Real-Time Operations Center)', definition: 'مركز عمليات يراقب ويتحكم في الحفر عن بعد في الوقت الحقيقي' },
            { term: 'HMI (Human-Machine Interface)', definition: 'واجهة التفاعل بين المُشغّل البشري والنظام الآلي' },
          ],
          practiceQuestion: {
            question: 'ما المستوى الذي يمثل نظام AutoDriller التقليدي الذي يتحكم في WOB تحت إشراف المُشغّل؟',
            options: [
              'المستوى 0 - يدوي',
              'المستوى 1 - مساعد',
              'المستوى 2 - شبه آلي',
              'المستوى 4 - مستقل تماماً'
            ],
            correctAnswer: 2,
          },
        },
        en: {
          title: 'Drilling Automation - Day 1: Introduction to Drilling Automation',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">🔷 Drilling Automation Concept</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="color: #f4a261; margin-bottom: 1rem;">📌 What is Drilling Automation?</h3>
<p style="line-height: 1.8;">
Drilling Automation refers to the use of automated control systems, artificial intelligence, and advanced algorithms to execute drilling operations with minimal human intervention. Automation aims to improve performance, enhance safety, and reduce operational costs by converting manual operations into monitored and controlled automated processes.
</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">🎯 Levels of Automation in Drilling</h3>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; border-left: 4px solid #3498db; margin-bottom: 1.5rem;">
<p style="font-weight: bold; color: #1e3a5f; margin-bottom: 1rem;">Drilling automation is classified into five levels according to SPE standards:</p>
<ul style="list-style: none; padding: 0;">
<li style="margin-bottom: 1rem; padding: 0.75rem; background: white; border-radius: 8px;">
<strong style="color: #3498db;">Level 0 - Manual:</strong><br>
Operator controls all operations manually. No automated intervention.
</li>
<li style="margin-bottom: 1rem; padding: 0.75rem; background: white; border-radius: 8px;">
<strong style="color: #27ae60;">Level 1 - Assisted:</strong><br>
System provides recommendations and information to operator, but final decision and execution remains human.
</li>
<li style="margin-bottom: 1rem; padding: 0.75rem; background: white; border-radius: 8px;">
<strong style="color: #f39c12;">Level 2 - Semi-Automated:</strong><br>
System executes some tasks automatically under continuous human supervision (e.g., traditional AutoDriller).
</li>
<li style="margin-bottom: 1rem; padding: 0.75rem; background: white; border-radius: 8px;">
<strong style="color: #e74c3c;">Level 3 - Automated with Oversight:</strong><br>
System makes decisions and executes complex operations, with operator able to intervene when needed.
</li>
<li style="margin-bottom: 1rem; padding: 0.75rem; background: white; border-radius: 8px;">
<strong style="color: #9b59b6;">Level 4 - Fully Autonomous:</strong><br>
System manages operations completely without human intervention (future goal).
</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">🏆 Benefits of Drilling Automation</h3>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin-bottom: 1.5rem;">
<div style="background: #e8f5e9; padding: 1.25rem; border-radius: 10px; border-left: 4px solid #27ae60;">
<h4 style="color: #27ae60; margin-bottom: 0.75rem;">⚡ Performance Improvement</h4>
<ul style="margin: 0; padding-left: 1.25rem;">
<li>10-30% ROP increase</li>
<li>Reduced trip time</li>
<li>Improved energy efficiency</li>
<li>Reduced equipment wear</li>
</ul>
</div>
<div style="background: #fff3e0; padding: 1.25rem; border-radius: 10px; border-left: 4px solid #f39c12;">
<h4 style="color: #f39c12; margin-bottom: 0.75rem;">🛡️ Safety Enhancement</h4>
<ul style="margin: 0; padding-left: 1.25rem;">
<li>Reduced human errors</li>
<li>Early problem detection</li>
<li>Faster emergency response</li>
<li>Reduced hazard exposure</li>
</ul>
</div>
<div style="background: #e3f2fd; padding: 1.25rem; border-radius: 10px; border-left: 4px solid #3498db;">
<h4 style="color: #3498db; margin-bottom: 0.75rem;">💰 Cost Reduction</h4>
<ul style="margin: 0; padding-left: 1.25rem;">
<li>20-40% NPT reduction</li>
<li>Extended bit and equipment life</li>
<li>Improved fuel efficiency</li>
<li>Reduced crew requirements</li>
</ul>
</div>
</div>

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-top: 2rem;">
<h4 style="color: #ffd700; margin-bottom: 1rem;">💡 Key Point for Field Engineers</h4>
<p style="margin: 0; line-height: 1.8;">
Drilling automation doesn't mean replacing engineers; it means freeing them from routine tasks to focus on strategic decisions. Successful engineers understand how these systems work, when manual intervention is needed, and how to interpret their recommendations.
</p>
</div>
</section>`,
          keyTerms: [
            { term: 'Drilling Automation', definition: 'Use of automated control systems to execute drilling operations with minimal human intervention' },
            { term: 'Closed-Loop Control', definition: 'System that measures outputs and automatically adjusts inputs to maintain target values' },
            { term: 'RTOC (Real-Time Operations Center)', definition: 'Operations center that remotely monitors and controls drilling in real-time' },
            { term: 'HMI (Human-Machine Interface)', definition: 'Interface for interaction between human operator and automated system' },
          ],
          practiceQuestion: {
            question: 'Which level represents a traditional AutoDriller system controlling WOB under operator supervision?',
            options: [
              'Level 0 - Manual',
              'Level 1 - Assisted',
              'Level 2 - Semi-Automated',
              'Level 4 - Fully Autonomous'
            ],
            correctAnswer: 2,
          },
        },
      },
    },

    // ==================== Day 2: AutoDriller and Drilling Control Systems ====================
    {
      day: 2,
      type: 'learning',
      content: {
        ar: {
          title: 'أتمتة الحفر - اليوم الثاني: أنظمة AutoDriller والتحكم في الحفر',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">🔷 نظام الحفر الآلي (AutoDriller System)</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="color: #f4a261; margin-bottom: 1rem;">📌 مبدأ عمل AutoDriller</h3>
<p style="line-height: 1.8;">
نظام AutoDriller هو أكثر أنظمة أتمتة الحفر شيوعاً واستخداماً. يتحكم النظام تلقائياً في معدل إنزال السلسلة (Drawworks) للحفاظ على قيمة مستهدفة لأحد المتغيرات الرئيسية: WOB أو Differential Pressure أو ROP أو Torque. يستخدم النظام حلقة تحكم PID لتعديل سرعة الإنزال بشكل مستمر.
</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">⚙️ أوضاع التشغيل (Operating Modes)</h3>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
<div style="background: #e8f5e9; padding: 1.5rem; border-radius: 12px; border: 2px solid #27ae60;">
<h4 style="color: #27ae60; margin-bottom: 1rem; font-size: 1.1rem;">🎯 وضع WOB Mode</h4>
<p style="margin-bottom: 0.75rem;"><strong>الهدف:</strong> الحفاظ على وزن ثابت على البت</p>
<p style="margin-bottom: 0.75rem;"><strong>الاستخدام:</strong> التكوينات الصلبة، حماية البت من الكسر</p>
<p style="margin-bottom: 0.75rem;"><strong>المحدد:</strong> Maximum WOB Setpoint</p>
<div style="background: white; padding: 0.75rem; border-radius: 6px; margin-top: 0.5rem;">
<strong>مثال:</strong> WOB Target = 25,000 lbs ± 1,000 lbs
</div>
</div>

<div style="background: #fff3e0; padding: 1.5rem; border-radius: 12px; border: 2px solid #f39c12;">
<h4 style="color: #f39c12; margin-bottom: 1rem; font-size: 1.1rem;">📊 وضع Differential Pressure Mode</h4>
<p style="margin-bottom: 0.75rem;"><strong>الهدف:</strong> الحفاظ على فرق ضغط ثابت عبر البت</p>
<p style="margin-bottom: 0.75rem;"><strong>الاستخدام:</strong> المحركات الطينية (Mud Motors)</p>
<p style="margin-bottom: 0.75rem;"><strong>المحدد:</strong> ΔP = SPP - Off-bottom Pressure</p>
<div style="background: white; padding: 0.75rem; border-radius: 6px; margin-top: 0.5rem;">
<strong>مثال:</strong> ΔP Target = 350 psi ± 25 psi
</div>
</div>

<div style="background: #e3f2fd; padding: 1.5rem; border-radius: 12px; border: 2px solid #3498db;">
<h4 style="color: #3498db; margin-bottom: 1rem; font-size: 1.1rem;">⚡ وضع ROP Mode</h4>
<p style="margin-bottom: 0.75rem;"><strong>الهدف:</strong> الحفاظ على معدل اختراق ثابت</p>
<p style="margin-bottom: 0.75rem;"><strong>الاستخدام:</strong> التكوينات الناعمة، تجنب Overdrilling</p>
<p style="margin-bottom: 0.75rem;"><strong>المحدد:</strong> Maximum ROP Limit</p>
<div style="background: white; padding: 0.75rem; border-radius: 6px; margin-top: 0.5rem;">
<strong>مثال:</strong> ROP Target = 100 ft/hr ± 10 ft/hr
</div>
</div>

<div style="background: #fce4ec; padding: 1.5rem; border-radius: 12px; border: 2px solid #e91e63;">
<h4 style="color: #e91e63; margin-bottom: 1rem; font-size: 1.1rem;">🔄 وضع Torque Mode</h4>
<p style="margin-bottom: 0.75rem;"><strong>الهدف:</strong> تجنب تجاوز حدود Torque</p>
<p style="margin-bottom: 0.75rem;"><strong>الاستخدام:</strong> الآبار الموجهة، تجنب Stick-Slip</p>
<p style="margin-bottom: 0.75rem;"><strong>المحدد:</strong> Maximum Torque Limit</p>
<div style="background: white; padding: 0.75rem; border-radius: 6px; margin-top: 0.5rem;">
<strong>مثال:</strong> Torque Limit = 18,000 ft-lbs
</div>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">🔧 معايرة PID Controller</h3>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<p style="margin-bottom: 1rem;">يستخدم AutoDriller تحكم PID (Proportional-Integral-Derivative) لضبط سرعة الإنزال:</p>

<div style="overflow-x: auto;">
<table style="width: 100%; border-collapse: collapse; font-size: 0.95rem;">
<thead>
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 0.75rem; text-align: right; border: 1px solid #2d5a87;">المكون</th>
<th style="padding: 0.75rem; text-align: right; border: 1px solid #2d5a87;">الوظيفة</th>
<th style="padding: 0.75rem; text-align: right; border: 1px solid #2d5a87;">تأثير زيادته</th>
</tr>
</thead>
<tbody>
<tr style="background: white;">
<td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>P (Proportional)</strong></td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">استجابة فورية للخطأ الحالي</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">استجابة أسرع لكن قد يسبب تذبذب</td>
</tr>
<tr style="background: #f8f9fa;">
<td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>I (Integral)</strong></td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">تصحيح الأخطاء التراكمية</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">إزالة Steady-State Error لكن قد يسبب Overshoot</td>
</tr>
<tr style="background: white;">
<td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>D (Derivative)</strong></td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">توقع الخطأ المستقبلي</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">تقليل Overshoot لكن حساس للضوضاء</td>
</tr>
</tbody>
</table>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">⚠️ حدود الأمان (Safety Limits)</h3>

<div style="background: #ffebee; padding: 1.5rem; border-radius: 10px; border-left: 4px solid #e74c3c; margin-bottom: 1.5rem;">
<p style="font-weight: bold; color: #c62828; margin-bottom: 1rem;">يجب تعيين حدود الأمان التالية قبل تفعيل AutoDriller:</p>
<ul style="margin: 0; padding-right: 1.5rem; line-height: 2;">
<li><strong>Max WOB:</strong> لحماية البت وسلسلة الحفر</li>
<li><strong>Max Torque:</strong> لتجنب التواء سلسلة الحفر</li>
<li><strong>Max ROP:</strong> لتجنب Hole Packing والتحكم في تنظيف البئر</li>
<li><strong>Max Differential Pressure:</strong> لحماية المحرك الطيني</li>
<li><strong>Min/Max Hook Load:</strong> لكشف Stuck Pipe أو Packoff</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">🎛️ أنظمة التحكم المتقدمة</h3>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin-bottom: 1.5rem;">
<div style="background: #f3e5f5; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #8e24aa; margin-bottom: 0.75rem;">🔄 Soft Torque System</h4>
<p style="margin: 0;">يقلل Stick-Slip عن طريق تعديل سرعة Top Drive ديناميكياً استجابةً لتذبذبات Torque.</p>
</div>
<div style="background: #e0f2f1; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #00897b; margin-bottom: 0.75rem;">📈 Slide Assist</h4>
<p style="margin: 0;">يحسّن ROP أثناء Sliding عن طريق تذبذب RPM للتغلب على الاحتكاك الثابت.</p>
</div>
<div style="background: #fff8e1; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #f57c00; margin-bottom: 0.75rem;">🧹 Active Vibration Damping</h4>
<p style="margin: 0;">يكشف ويخفف الاهتزازات الضارة (Bit Bounce, Whirl) تلقائياً.</p>
</div>
</div>

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-top: 2rem;">
<h4 style="color: #ffd700; margin-bottom: 1rem;">💡 نصيحة ميدانية</h4>
<p style="margin: 0; line-height: 1.8;">
عند بدء تشغيل AutoDriller، ابدأ بإعدادات PID محافظة (Gain منخفض) ثم عدّلها تدريجياً. راقب استجابة النظام لعدة دقائق قبل الابتعاد عن الشاشة. تذكر أن AutoDriller يتفاعل مع البيانات السطحية فقط ولا يعرف ماذا يحدث في القاع.
</p>
</div>
</section>`,
          keyTerms: [
            { term: 'AutoDriller', definition: 'نظام تحكم آلي يحافظ على WOB أو ROP أو Differential Pressure ضمن القيم المستهدفة' },
            { term: 'PID Controller', definition: 'خوارزمية تحكم تستخدم المكونات التناسبية والتكاملية والتفاضلية لتعديل المخرجات' },
            { term: 'Soft Torque', definition: 'نظام يقلل Stick-Slip عن طريق تعديل سرعة Top Drive استجابةً لتذبذبات Torque' },
            { term: 'Differential Pressure Mode', definition: 'وضع تشغيل AutoDriller للحفاظ على فرق ضغط ثابت عبر المحرك الطيني' },
          ],
          practiceQuestion: {
            question: 'ما الوضع الأنسب لتشغيل AutoDriller عند استخدام محرك طيني (Mud Motor)؟',
            options: [
              'WOB Mode',
              'ROP Mode',
              'Differential Pressure Mode',
              'Torque Mode'
            ],
            correctAnswer: 2,
          },
        },
        en: {
          title: 'Drilling Automation - Day 2: AutoDriller and Drilling Control Systems',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">🔷 AutoDriller System</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="color: #f4a261; margin-bottom: 1rem;">📌 AutoDriller Operating Principle</h3>
<p style="line-height: 1.8;">
AutoDriller is the most common drilling automation system in use. It automatically controls the drawworks feed rate to maintain a target value for one of the key variables: WOB, Differential Pressure, ROP, or Torque. The system uses a PID control loop to continuously adjust the lowering speed.
</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">⚙️ Operating Modes</h3>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
<div style="background: #e8f5e9; padding: 1.5rem; border-radius: 12px; border: 2px solid #27ae60;">
<h4 style="color: #27ae60; margin-bottom: 1rem; font-size: 1.1rem;">🎯 WOB Mode</h4>
<p style="margin-bottom: 0.75rem;"><strong>Objective:</strong> Maintain constant weight on bit</p>
<p style="margin-bottom: 0.75rem;"><strong>Use:</strong> Hard formations, bit protection</p>
<p style="margin-bottom: 0.75rem;"><strong>Setpoint:</strong> Maximum WOB</p>
<div style="background: white; padding: 0.75rem; border-radius: 6px; margin-top: 0.5rem;">
<strong>Example:</strong> WOB Target = 25,000 lbs ± 1,000 lbs
</div>
</div>

<div style="background: #fff3e0; padding: 1.5rem; border-radius: 12px; border: 2px solid #f39c12;">
<h4 style="color: #f39c12; margin-bottom: 1rem; font-size: 1.1rem;">📊 Differential Pressure Mode</h4>
<p style="margin-bottom: 0.75rem;"><strong>Objective:</strong> Maintain constant ΔP across bit</p>
<p style="margin-bottom: 0.75rem;"><strong>Use:</strong> Mud motors</p>
<p style="margin-bottom: 0.75rem;"><strong>Setpoint:</strong> ΔP = SPP - Off-bottom Pressure</p>
<div style="background: white; padding: 0.75rem; border-radius: 6px; margin-top: 0.5rem;">
<strong>Example:</strong> ΔP Target = 350 psi ± 25 psi
</div>
</div>

<div style="background: #e3f2fd; padding: 1.5rem; border-radius: 12px; border: 2px solid #3498db;">
<h4 style="color: #3498db; margin-bottom: 1rem; font-size: 1.1rem;">⚡ ROP Mode</h4>
<p style="margin-bottom: 0.75rem;"><strong>Objective:</strong> Maintain constant penetration rate</p>
<p style="margin-bottom: 0.75rem;"><strong>Use:</strong> Soft formations, avoid overdrilling</p>
<p style="margin-bottom: 0.75rem;"><strong>Setpoint:</strong> Maximum ROP Limit</p>
<div style="background: white; padding: 0.75rem; border-radius: 6px; margin-top: 0.5rem;">
<strong>Example:</strong> ROP Target = 100 ft/hr ± 10 ft/hr
</div>
</div>

<div style="background: #fce4ec; padding: 1.5rem; border-radius: 12px; border: 2px solid #e91e63;">
<h4 style="color: #e91e63; margin-bottom: 1rem; font-size: 1.1rem;">🔄 Torque Mode</h4>
<p style="margin-bottom: 0.75rem;"><strong>Objective:</strong> Avoid exceeding torque limits</p>
<p style="margin-bottom: 0.75rem;"><strong>Use:</strong> Directional wells, avoid stick-slip</p>
<p style="margin-bottom: 0.75rem;"><strong>Setpoint:</strong> Maximum Torque Limit</p>
<div style="background: white; padding: 0.75rem; border-radius: 6px; margin-top: 0.5rem;">
<strong>Example:</strong> Torque Limit = 18,000 ft-lbs
</div>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">⚠️ Safety Limits</h3>

<div style="background: #ffebee; padding: 1.5rem; border-radius: 10px; border-left: 4px solid #e74c3c; margin-bottom: 1.5rem;">
<p style="font-weight: bold; color: #c62828; margin-bottom: 1rem;">The following safety limits must be set before activating AutoDriller:</p>
<ul style="margin: 0; padding-left: 1.5rem; line-height: 2;">
<li><strong>Max WOB:</strong> Protect bit and drillstring</li>
<li><strong>Max Torque:</strong> Prevent drillstring twist-off</li>
<li><strong>Max ROP:</strong> Avoid hole packing and control hole cleaning</li>
<li><strong>Max Differential Pressure:</strong> Protect mud motor</li>
<li><strong>Min/Max Hook Load:</strong> Detect stuck pipe or packoff</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-top: 2rem;">
<h4 style="color: #ffd700; margin-bottom: 1rem;">💡 Field Tip</h4>
<p style="margin: 0; line-height: 1.8;">
When starting AutoDriller, begin with conservative PID settings (low gain) then adjust gradually. Monitor system response for several minutes before stepping away from the screen. Remember that AutoDriller reacts to surface data only and doesn't know what's happening at bottom.
</p>
</div>
</section>`,
          keyTerms: [
            { term: 'AutoDriller', definition: 'Automatic control system that maintains WOB, ROP, or Differential Pressure within target values' },
            { term: 'PID Controller', definition: 'Control algorithm using proportional, integral, and derivative components to adjust outputs' },
            { term: 'Soft Torque', definition: 'System that reduces stick-slip by modifying Top Drive speed in response to torque oscillations' },
            { term: 'Differential Pressure Mode', definition: 'AutoDriller operating mode to maintain constant pressure drop across mud motor' },
          ],
          practiceQuestion: {
            question: 'What is the most appropriate AutoDriller mode when using a mud motor?',
            options: [
              'WOB Mode',
              'ROP Mode',
              'Differential Pressure Mode',
              'Torque Mode'
            ],
            correctAnswer: 2,
          },
        },
      },
    },

    // ==================== Day 3: Automated Tripping and Pipe Handling ====================
    {
      day: 3,
      type: 'learning',
      content: {
        ar: {
          title: 'أتمتة الحفر - اليوم الثالث: أتمتة عمليات الرحلة ومناولة الأنابيب',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">🔷 أتمتة عمليات الرحلة (Automated Tripping)</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="color: #f4a261; margin-bottom: 1rem;">📌 أهمية أتمتة الرحلة</h3>
<p style="line-height: 1.8;">
عمليات الرحلة (Tripping In/Out) تستهلك 20-30% من إجمالي وقت الحفر. أتمتة هذه العمليات تقلل الوقت بنسبة 15-25%، وتحسّن السلامة بتقليل التعامل اليدوي مع الأنابيب، وتضمن اتساق العمليات. تشمل الأتمتة: سرعة الرحلة، توقيت الوصلات، ومراقبة ضغوط السحب/الاحتكاك (Swab/Surge).
</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">🚀 نظام الرحلة الآلي (Auto-Trip System)</h3>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #1e3a5f; margin-bottom: 1rem;">وظائف النظام الأساسية:</h4>
<ol style="margin: 0; padding-right: 1.5rem; line-height: 2.2;">
<li><strong>التحكم في السرعة (Speed Control):</strong> تعديل سرعة السحب/الإنزال حسب عمق البئر وظروف الضغط</li>
<li><strong>إدارة Swab/Surge:</strong> حساب وتجنب تجاوز حدود ضغط الفتحة المكافئ (ECD)</li>
<li><strong>مراقبة Overpull/Drag:</strong> كشف مبكر لعلامات الانحشار أو Tight Hole</li>
<li><strong>تسلسل الوصلات (Connection Sequencing):</strong> تنسيق إيقاف/تشغيل المضخات مع حركة السلسلة</li>
<li><strong>Fill/Check Tracking:</strong> مراقبة حجم الطين أثناء الرحلة للكشف عن التدفق أو الخسائر</li>
</ol>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📊 إدارة Swab و Surge</h3>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
<div style="background: #ffebee; padding: 1.5rem; border-radius: 12px; border: 2px solid #e74c3c;">
<h4 style="color: #e74c3c; margin-bottom: 1rem;">⬇️ Swab Pressure (عند السحب)</h4>
<p style="margin-bottom: 1rem;">انخفاض الضغط الناتج عن سحب السلسلة للأعلى</p>
<ul style="margin: 0; padding-right: 1.25rem;">
<li>يقلل BHP</li>
<li>خطر: دخول تدفق من التكوين</li>
<li>الحل: تقليل سرعة السحب</li>
</ul>
</div>
<div style="background: #e3f2fd; padding: 1.5rem; border-radius: 12px; border: 2px solid #3498db;">
<h4 style="color: #3498db; margin-bottom: 1rem;">⬆️ Surge Pressure (عند الإنزال)</h4>
<p style="margin-bottom: 1rem;">زيادة الضغط الناتج عن إنزال السلسلة للأسفل</p>
<ul style="margin: 0; padding-right: 1.25rem;">
<li>يزيد BHP</li>
<li>خطر: كسر التكوين (Lost Circulation)</li>
<li>الحل: تقليل سرعة الإنزال</li>
</ul>
</div>
</div>

<div style="background: #fff3e0; padding: 1.5rem; border-radius: 10px; border-left: 4px solid #f39c12; margin-bottom: 1.5rem;">
<h4 style="color: #f39c12; margin-bottom: 1rem;">📐 معادلة سرعة الرحلة الآمنة:</h4>
<p style="font-family: monospace; background: white; padding: 0.75rem; border-radius: 6px; text-align: center;">
Max Trip Speed = f(Hole Geometry, Mud Properties, Pressure Window)
</p>
<p style="margin-top: 1rem;">النظام الآلي يحسب السرعة القصوى الآمنة بناءً على:</p>
<ul style="margin: 0.5rem 0 0 0; padding-right: 1.25rem;">
<li>هندسة البئر (Annular Clearance)</li>
<li>خصائص الطين (PV, YP, Gel Strength)</li>
<li>نافذة الضغط (Pore Pressure - Fracture Pressure)</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">🤖 أنظمة مناولة الأنابيب الآلية (Automated Pipe Handling)</h3>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin-bottom: 1.5rem;">
<div style="background: #e8f5e9; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #27ae60; margin-bottom: 0.75rem;">🔧 Iron Roughneck</h4>
<p style="margin: 0;">نظام آلي للربط والفك يتحكم في Torque والسرعة بدقة عالية. يقلل الإصابات ويضمن اتساق Makeup Torque.</p>
</div>
<div style="background: #e3f2fd; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #3498db; margin-bottom: 0.75rem;">🏗️ Pipe Racker</h4>
<p style="margin: 0;">نظام آلي لنقل المواسير من/إلى Setback. يقلل الحاجة للعمال على أرضية الحفر ويسرّع العملية.</p>
</div>
<div style="background: #fff3e0; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #f39c12; margin-bottom: 0.75rem;">📍 Fingerboard System</h4>
<p style="margin: 0;">نظام تخزين آلي للمواسير في Derrick. يتتبع موقع كل ماسورة ويسهّل الاسترجاع.</p>
</div>
<div style="background: #f3e5f5; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #8e24aa; margin-bottom: 0.75rem;">🔄 Catwalk Machine</h4>
<p style="margin: 0;">ناقل آلي للمواسير من أرض البرج إلى أرضية الحفر. يلغي الحاجة للرافعات اليدوية.</p>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">🎯 مراقبة Overpull/Drag</h3>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<p style="margin-bottom: 1rem;">النظام الآلي يراقب باستمرار الفرق بين الوزن المتوقع والفعلي:</p>

<div style="overflow-x: auto;">
<table style="width: 100%; border-collapse: collapse; font-size: 0.95rem;">
<thead>
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 0.75rem; text-align: right; border: 1px solid #2d5a87;">المؤشر</th>
<th style="padding: 0.75rem; text-align: right; border: 1px solid #2d5a87;">التعريف</th>
<th style="padding: 0.75rem; text-align: right; border: 1px solid #2d5a87;">الحد النموذجي</th>
</tr>
</thead>
<tbody>
<tr style="background: white;">
<td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Overpull</strong></td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">قوة إضافية مطلوبة للسحب</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">25,000 - 50,000 lbs تنبيه</td>
</tr>
<tr style="background: #f8f9fa;">
<td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Drag</strong></td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">مقاومة إضافية عند الإنزال</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">متغير حسب زاوية البئر</td>
</tr>
<tr style="background: white;">
<td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Friction Factor</strong></td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">معامل الاحتكاك المحسوب</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">0.2 - 0.35 طبيعي</td>
</tr>
</tbody>
</table>
</div>
</div>

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-top: 2rem;">
<h4 style="color: #ffd700; margin-bottom: 1rem;">💡 نصيحة ميدانية</h4>
<p style="margin: 0; line-height: 1.8;">
قبل تفعيل Auto-Trip، تأكد من معايرة حساسات الوزن (Weight Sensors) وتحديث نموذج T&D (Torque & Drag). راقب الفرق بين Calculated Hookload و Measured Hookload - فرق كبير يشير إلى مشكلة محتملة.
</p>
</div>
</section>`,
          keyTerms: [
            { term: 'Auto-Trip System', definition: 'نظام يتحكم آلياً في سرعة الرحلة لتجنب Swab/Surge وكشف Tight Hole' },
            { term: 'Swab Pressure', definition: 'انخفاض الضغط الناتج عن سحب السلسلة للأعلى - قد يسبب تدفق' },
            { term: 'Surge Pressure', definition: 'زيادة الضغط الناتج عن إنزال السلسلة - قد يسبب Lost Circulation' },
            { term: 'Iron Roughneck', definition: 'نظام آلي لربط وفك الوصلات مع تحكم دقيق في Torque' },
          ],
          practiceQuestion: {
            question: 'ما الخطر الرئيسي عند الإنزال بسرعة عالية جداً في بئر ذات نافذة ضغط ضيقة؟',
            options: [
              'Swab والتدفق من التكوين',
              'Surge وكسر التكوين (Lost Circulation)',
              'زيادة ROP بشكل غير مرغوب',
              'انخفاض Torque على الوصلات'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Drilling Automation - Day 3: Automated Tripping and Pipe Handling',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">🔷 Automated Tripping Operations</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="color: #f4a261; margin-bottom: 1rem;">📌 Importance of Trip Automation</h3>
<p style="line-height: 1.8;">
Tripping operations (In/Out) consume 20-30% of total drilling time. Automating these operations reduces time by 15-25%, improves safety by reducing manual pipe handling, and ensures operational consistency. Automation includes: trip speed, connection timing, and Swab/Surge pressure monitoring.
</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">🚀 Auto-Trip System</h3>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<h4 style="color: #1e3a5f; margin-bottom: 1rem;">Core System Functions:</h4>
<ol style="margin: 0; padding-left: 1.5rem; line-height: 2.2;">
<li><strong>Speed Control:</strong> Adjust pull/run speed based on well depth and pressure conditions</li>
<li><strong>Swab/Surge Management:</strong> Calculate and avoid exceeding ECD limits</li>
<li><strong>Overpull/Drag Monitoring:</strong> Early detection of stuck pipe or tight hole signs</li>
<li><strong>Connection Sequencing:</strong> Coordinate pump stop/start with string movement</li>
<li><strong>Fill/Check Tracking:</strong> Monitor mud volume during tripping for flow or losses</li>
</ol>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📊 Swab and Surge Management</h3>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
<div style="background: #ffebee; padding: 1.5rem; border-radius: 12px; border: 2px solid #e74c3c;">
<h4 style="color: #e74c3c; margin-bottom: 1rem;">⬇️ Swab Pressure (Pulling Out)</h4>
<p style="margin-bottom: 1rem;">Pressure decrease from pulling string upward</p>
<ul style="margin: 0; padding-left: 1.25rem;">
<li>Reduces BHP</li>
<li>Risk: Formation influx</li>
<li>Solution: Reduce pull speed</li>
</ul>
</div>
<div style="background: #e3f2fd; padding: 1.5rem; border-radius: 12px; border: 2px solid #3498db;">
<h4 style="color: #3498db; margin-bottom: 1rem;">⬆️ Surge Pressure (Running In)</h4>
<p style="margin-bottom: 1rem;">Pressure increase from running string downward</p>
<ul style="margin: 0; padding-left: 1.25rem;">
<li>Increases BHP</li>
<li>Risk: Formation fracture (Lost Circulation)</li>
<li>Solution: Reduce run speed</li>
</ul>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">🤖 Automated Pipe Handling Systems</h3>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin-bottom: 1.5rem;">
<div style="background: #e8f5e9; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #27ae60; margin-bottom: 0.75rem;">🔧 Iron Roughneck</h4>
<p style="margin: 0;">Automated makeup/breakout system with precise torque and speed control. Reduces injuries and ensures consistent makeup torque.</p>
</div>
<div style="background: #e3f2fd; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #3498db; margin-bottom: 0.75rem;">🏗️ Pipe Racker</h4>
<p style="margin: 0;">Automated system for moving pipe to/from setback. Reduces need for workers on drill floor and speeds up operations.</p>
</div>
<div style="background: #fff3e0; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #f39c12; margin-bottom: 0.75rem;">📍 Fingerboard System</h4>
<p style="margin: 0;">Automated pipe storage in derrick. Tracks each pipe location and facilitates retrieval.</p>
</div>
<div style="background: #f3e5f5; padding: 1.25rem; border-radius: 10px;">
<h4 style="color: #8e24aa; margin-bottom: 0.75rem;">🔄 Catwalk Machine</h4>
<p style="margin: 0;">Automated conveyor from ground to drill floor. Eliminates need for manual hoisting.</p>
</div>
</div>

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-top: 2rem;">
<h4 style="color: #ffd700; margin-bottom: 1rem;">💡 Field Tip</h4>
<p style="margin: 0; line-height: 1.8;">
Before activating Auto-Trip, ensure weight sensors are calibrated and T&D model is updated. Monitor the difference between calculated and measured hookload - a large difference indicates potential problems.
</p>
</div>
</section>`,
          keyTerms: [
            { term: 'Auto-Trip System', definition: 'System that automatically controls trip speed to avoid Swab/Surge and detect tight hole' },
            { term: 'Swab Pressure', definition: 'Pressure decrease from pulling string upward - may cause influx' },
            { term: 'Surge Pressure', definition: 'Pressure increase from running string down - may cause lost circulation' },
            { term: 'Iron Roughneck', definition: 'Automated connection makeup/breakout system with precise torque control' },
          ],
          practiceQuestion: {
            question: 'What is the main risk when running in too fast in a narrow pressure window well?',
            options: [
              'Swab and formation influx',
              'Surge and formation fracture (Lost Circulation)',
              'Undesired ROP increase',
              'Reduced connection torque'
            ],
            correctAnswer: 1,
          },
        },
      },
    },

    // ==================== Day 4: AI/ML and Advanced Automation ====================
    {
      day: 4,
      type: 'learning',
      content: {
        ar: {
          title: 'أتمتة الحفر - اليوم الرابع: الذكاء الاصطناعي والأتمتة المتقدمة',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">🔷 الذكاء الاصطناعي في الحفر (AI in Drilling)</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="color: #f4a261; margin-bottom: 1rem;">📌 دور AI/ML في أتمتة الحفر</h3>
<p style="line-height: 1.8;">
الذكاء الاصطناعي (AI) والتعلم الآلي (ML) ينقلان الأتمتة من مستوى التحكم التفاعلي إلى التحكم التنبؤي والتكيفي. بدلاً من الاستجابة للمشاكل بعد حدوثها، تتنبأ هذه الأنظمة بالمشاكل قبل وقوعها وتحسّن العمليات بشكل مستمر بناءً على البيانات التاريخية والحية.
</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">🧠 تطبيقات التعلم الآلي في الحفر</h3>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
<div style="background: #e8f5e9; padding: 1.5rem; border-radius: 12px; border-left: 4px solid #27ae60;">
<h4 style="color: #27ae60; margin-bottom: 1rem;">🔮 التنبؤ بالمشاكل (Problem Prediction)</h4>
<ul style="margin: 0; padding-right: 1.25rem; line-height: 1.8;">
<li><strong>Stuck Pipe Prediction:</strong> تحليل أنماط T&D والاهتزازات للتنبؤ بالانحشار</li>
<li><strong>Lost Circulation Prediction:</strong> كشف علامات الفقدان المبكرة</li>
<li><strong>Kick Detection:</strong> التعرف على أنماط التدفق غير الطبيعية</li>
<li><strong>Bit Failure Prediction:</strong> تقدير العمر المتبقي للبت</li>
</ul>
</div>
<div style="background: #e3f2fd; padding: 1.5rem; border-radius: 12px; border-left: 4px solid #3498db;">
<h4 style="color: #3498db; margin-bottom: 1rem;">📈 تحسين الأداء (Performance Optimization)</h4>
<ul style="margin: 0; padding-right: 1.25rem; line-height: 1.8;">
<li><strong>ROP Optimization:</strong> تعديل WOB/RPM/Flow للحصول على أفضل ROP</li>
<li><strong>MSE Minimization:</strong> تقليل الطاقة النوعية للحفر</li>
<li><strong>Hole Cleaning:</strong> تحسين معدلات التدوير والتدفق</li>
<li><strong>Bit Selection:</strong> اختيار البت الأمثل بناءً على البيانات</li>
</ul>
</div>
<div style="background: #fff3e0; padding: 1.5rem; border-radius: 12px; border-left: 4px solid #f39c12;">
<h4 style="color: #f39c12; margin-bottom: 1rem;">🎯 التوجيه الذكي (Intelligent Steering)</h4>
<ul style="margin: 0; padding-right: 1.25rem; line-height: 1.8;">
<li><strong>Auto-Geosteering:</strong> تعديل المسار تلقائياً بناءً على LWD</li>
<li><strong>Formation Detection:</strong> التعرف على التكوينات من بيانات الحفر</li>
<li><strong>Target Tracking:</strong> الحفاظ على المسار نحو الهدف الجيولوجي</li>
</ul>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">🌐 التوأم الرقمي (Digital Twin)</h3>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<p style="margin-bottom: 1rem;">التوأم الرقمي هو نموذج افتراضي للبئر يتم تحديثه بالبيانات الحية ويستخدم للتنبؤ والتحسين:</p>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
<div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #ddd;">
<h5 style="color: #1e3a5f; margin-bottom: 0.5rem;">📊 مكونات التوأم الرقمي</h5>
<ul style="margin: 0; padding-right: 1rem; font-size: 0.9rem;">
<li>نموذج هندسة البئر (Well Geometry)</li>
<li>نموذج T&D والهيدروليكا</li>
<li>نموذج التكوين الجيولوجي</li>
<li>نموذج سلوك المعدات</li>
</ul>
</div>
<div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #ddd;">
<h5 style="color: #1e3a5f; margin-bottom: 0.5rem;">🎯 استخدامات التوأم الرقمي</h5>
<ul style="margin: 0; padding-right: 1rem; font-size: 0.9rem;">
<li>محاكاة السيناريوهات "What-If"</li>
<li>تحسين المعاملات في الوقت الحقيقي</li>
<li>التنبؤ بالنتائج قبل التنفيذ</li>
<li>التدريب والمحاكاة</li>
</ul>
</div>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">🔗 مراكز التحكم عن بعد (Remote Operations Centers)</h3>

<div style="background: #f3e5f5; padding: 1.5rem; border-radius: 10px; border-left: 4px solid #8e24aa; margin-bottom: 1.5rem;">
<h4 style="color: #8e24aa; margin-bottom: 1rem;">RTOC - Real-Time Operations Center</h4>
<p style="margin-bottom: 1rem;">مركز مراقبة وتحكم مركزي يتابع عدة آبار من موقع بعيد:</p>
<ul style="margin: 0; padding-right: 1.25rem; line-height: 2;">
<li><strong>24/7 Monitoring:</strong> مراقبة مستمرة بواسطة خبراء متخصصين</li>
<li><strong>Real-Time Analytics:</strong> تحليل فوري للبيانات وتوصيات</li>
<li><strong>Advisory Support:</strong> دعم فني للطاقم الميداني</li>
<li><strong>Remote Control:</strong> تحكم مباشر في بعض العمليات (حيث مسموح)</li>
<li><strong>Multi-Well Dashboard:</strong> مقارنة أداء الآبار المتعددة</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">⚠️ تحديات الأتمتة المتقدمة</h3>

<div style="overflow-x: auto; margin-bottom: 1.5rem;">
<table style="width: 100%; border-collapse: collapse; font-size: 0.95rem;">
<thead>
<tr style="background: #1e3a5f; color: white;">
<th style="padding: 1rem; text-align: right; border: 1px solid #2d5a87;">التحدي</th>
<th style="padding: 1rem; text-align: right; border: 1px solid #2d5a87;">الوصف</th>
<th style="padding: 1rem; text-align: right; border: 1px solid #2d5a87;">الحلول</th>
</tr>
</thead>
<tbody>
<tr style="background: #f8f9fa;">
<td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>جودة البيانات</strong></td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">بيانات ناقصة أو خاطئة تؤثر على دقة AI</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Data Validation، Sensor Redundancy</td>
</tr>
<tr style="background: white;">
<td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>تأخر الاتصال</strong></td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Latency في البيانات السطحية وQAW</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">Edge Computing، Wired Drill Pipe</td>
</tr>
<tr style="background: #f8f9fa;">
<td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>ثقة المُشغّل</strong></td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">تردد في الاعتماد على توصيات الآلة</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">شفافية القرارات، التدريب</td>
</tr>
<tr style="background: white;">
<td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>الأمن السيبراني</strong></td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">مخاطر الاختراق في الأنظمة المتصلة</td>
<td style="padding: 0.75rem; border: 1px solid #ddd;">تشفير، جدران حماية، مراقبة</td>
</tr>
</tbody>
</table>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">🚀 مستقبل أتمتة الحفر</h3>

<div style="background: #e0f2f1; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<ul style="margin: 0; padding-right: 1.25rem; line-height: 2;">
<li><strong>Autonomous Drilling:</strong> آبار تُحفر بالكامل دون تدخل بشري مباشر</li>
<li><strong>Self-Healing Systems:</strong> أنظمة تشخص وتصلح أعطالها ذاتياً</li>
<li><strong>Swarm Drilling:</strong> تنسيق متعدد الآبار بواسطة AI مركزي</li>
<li><strong>Continuous Learning:</strong> أنظمة تتحسن باستمرار من كل بئر</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-top: 2rem;">
<h4 style="color: #ffd700; margin-bottom: 1rem;">💡 نصيحة للمهندس</h4>
<p style="margin: 0; line-height: 1.8;">
افهم أن AI ليس صندوقاً سحرياً - فهو يعتمد على جودة البيانات والنماذج. كمهندس، دورك هو التحقق من معقولية توصيات النظام، فهم حدوده، والتدخل عندما يكون السياق الميداني أهم من النموذج الرياضي.
</p>
</div>
</section>`,
          keyTerms: [
            { term: 'Machine Learning (ML)', definition: 'خوارزميات تتعلم من البيانات لتحسين الأداء أو التنبؤ بالنتائج' },
            { term: 'Digital Twin', definition: 'نموذج افتراضي للبئر يتم تحديثه بالبيانات الحية للتنبؤ والتحسين' },
            { term: 'RTOC', definition: 'مركز عمليات يراقب ويتحكم في عدة آبار من موقع بعيد في الوقت الحقيقي' },
            { term: 'Edge Computing', definition: 'معالجة البيانات محلياً على الجهاز بدلاً من إرسالها للسحابة' },
          ],
          practiceQuestion: {
            question: 'ما الفائدة الرئيسية للتوأم الرقمي (Digital Twin) في عمليات الحفر؟',
            options: [
              'استبدال المُشغّل البشري بالكامل',
              'محاكاة السيناريوهات وتحسين المعاملات قبل التنفيذ',
              'تقليل استهلاك الوقود فقط',
              'زيادة سرعة نقل البيانات'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Drilling Automation - Day 4: AI/ML and Advanced Automation',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">🔷 Artificial Intelligence in Drilling</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<h3 style="color: #f4a261; margin-bottom: 1rem;">📌 Role of AI/ML in Drilling Automation</h3>
<p style="line-height: 1.8;">
Artificial Intelligence (AI) and Machine Learning (ML) move automation from reactive control to predictive and adaptive control. Instead of responding to problems after they occur, these systems predict problems before they happen and continuously optimize operations based on historical and live data.
</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">🧠 Machine Learning Applications in Drilling</h3>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
<div style="background: #e8f5e9; padding: 1.5rem; border-radius: 12px; border-left: 4px solid #27ae60;">
<h4 style="color: #27ae60; margin-bottom: 1rem;">🔮 Problem Prediction</h4>
<ul style="margin: 0; padding-left: 1.25rem; line-height: 1.8;">
<li><strong>Stuck Pipe Prediction:</strong> Analyze T&D patterns and vibrations</li>
<li><strong>Lost Circulation Prediction:</strong> Detect early loss signs</li>
<li><strong>Kick Detection:</strong> Recognize abnormal flow patterns</li>
<li><strong>Bit Failure Prediction:</strong> Estimate remaining bit life</li>
</ul>
</div>
<div style="background: #e3f2fd; padding: 1.5rem; border-radius: 12px; border-left: 4px solid #3498db;">
<h4 style="color: #3498db; margin-bottom: 1rem;">📈 Performance Optimization</h4>
<ul style="margin: 0; padding-left: 1.25rem; line-height: 1.8;">
<li><strong>ROP Optimization:</strong> Adjust WOB/RPM/Flow for best ROP</li>
<li><strong>MSE Minimization:</strong> Reduce mechanical specific energy</li>
<li><strong>Hole Cleaning:</strong> Optimize circulation and rotation rates</li>
<li><strong>Bit Selection:</strong> Data-driven optimal bit choice</li>
</ul>
</div>
<div style="background: #fff3e0; padding: 1.5rem; border-radius: 12px; border-left: 4px solid #f39c12;">
<h4 style="color: #f39c12; margin-bottom: 1rem;">🎯 Intelligent Steering</h4>
<ul style="margin: 0; padding-left: 1.25rem; line-height: 1.8;">
<li><strong>Auto-Geosteering:</strong> Auto-adjust path based on LWD</li>
<li><strong>Formation Detection:</strong> Identify formations from drilling data</li>
<li><strong>Target Tracking:</strong> Maintain path to geological target</li>
</ul>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">🌐 Digital Twin</h3>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
<p style="margin-bottom: 1rem;">A Digital Twin is a virtual model of the well updated with live data, used for prediction and optimization:</p>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
<div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #ddd;">
<h5 style="color: #1e3a5f; margin-bottom: 0.5rem;">📊 Digital Twin Components</h5>
<ul style="margin: 0; padding-left: 1rem; font-size: 0.9rem;">
<li>Well Geometry Model</li>
<li>T&D and Hydraulics Model</li>
<li>Geological Formation Model</li>
<li>Equipment Behavior Model</li>
</ul>
</div>
<div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #ddd;">
<h5 style="color: #1e3a5f; margin-bottom: 0.5rem;">🎯 Digital Twin Uses</h5>
<ul style="margin: 0; padding-left: 1rem; font-size: 0.9rem;">
<li>"What-If" scenario simulation</li>
<li>Real-time parameter optimization</li>
<li>Predict outcomes before execution</li>
<li>Training and simulation</li>
</ul>
</div>
</div>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">🔗 Remote Operations Centers (RTOC)</h3>

<div style="background: #f3e5f5; padding: 1.5rem; border-radius: 10px; border-left: 4px solid #8e24aa; margin-bottom: 1.5rem;">
<h4 style="color: #8e24aa; margin-bottom: 1rem;">RTOC - Real-Time Operations Center</h4>
<p style="margin-bottom: 1rem;">Centralized monitoring and control center tracking multiple wells from a remote location:</p>
<ul style="margin: 0; padding-left: 1.25rem; line-height: 2;">
<li><strong>24/7 Monitoring:</strong> Continuous monitoring by specialized experts</li>
<li><strong>Real-Time Analytics:</strong> Instant data analysis and recommendations</li>
<li><strong>Advisory Support:</strong> Technical support for field crew</li>
<li><strong>Remote Control:</strong> Direct control of some operations (where permitted)</li>
<li><strong>Multi-Well Dashboard:</strong> Compare performance across multiple wells</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-top: 2rem;">
<h4 style="color: #ffd700; margin-bottom: 1rem;">💡 Engineer's Tip</h4>
<p style="margin: 0; line-height: 1.8;">
Understand that AI is not a magic box - it depends on data quality and models. As an engineer, your role is to verify the reasonableness of system recommendations, understand its limitations, and intervene when field context is more important than the mathematical model.
</p>
</div>
</section>`,
          keyTerms: [
            { term: 'Machine Learning (ML)', definition: 'Algorithms that learn from data to improve performance or predict outcomes' },
            { term: 'Digital Twin', definition: 'Virtual well model updated with live data for prediction and optimization' },
            { term: 'RTOC', definition: 'Operations center that monitors and controls multiple wells remotely in real-time' },
            { term: 'Edge Computing', definition: 'Processing data locally on device instead of sending to cloud' },
          ],
          practiceQuestion: {
            question: 'What is the main benefit of Digital Twin in drilling operations?',
            options: [
              'Completely replacing human operators',
              'Simulating scenarios and optimizing parameters before execution',
              'Only reducing fuel consumption',
              'Increasing data transfer speed'
            ],
            correctAnswer: 1,
          },
        },
      },
    },

    // ==================== Day 5: Weekly Review ====================
    {
      day: 5,
      type: 'learning',
      content: {
        ar: {
          title: 'أتمتة الحفر - اليوم الخامس: المراجعة الأسبوعية',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">🔷 ملخص أسبوع أتمتة الحفر</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<p style="line-height: 1.8;">
خلال هذا الأسبوع، استكشفنا عالم أتمتة الحفر من المفاهيم الأساسية إلى التطبيقات المتقدمة للذكاء الاصطناعي. فيما يلي ملخص للنقاط الرئيسية.
</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📚 ملخص اليوم الأول: مقدمة في أتمتة الحفر</h3>
<div style="background: #f8f9fa; padding: 1.25rem; border-radius: 10px; margin-bottom: 1.5rem;">
<ul style="margin: 0; padding-right: 1.25rem; line-height: 2;">
<li>مستويات الأتمتة الخمسة (0-4) من اليدوي إلى المستقل تماماً</li>
<li>تطور الأتمتة من AutoDriller الميكانيكي إلى AI/ML</li>
<li>فوائد الأتمتة: تحسين الأداء، تعزيز السلامة، خفض التكاليف</li>
<li>المكونات الأساسية: Sensors، Data Acquisition، Control Algorithms، HMI، Actuators</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📚 ملخص اليوم الثاني: أنظمة AutoDriller</h3>
<div style="background: #f8f9fa; padding: 1.25rem; border-radius: 10px; margin-bottom: 1.5rem;">
<ul style="margin: 0; padding-right: 1.25rem; line-height: 2;">
<li>أوضاع التشغيل: WOB Mode، Differential Pressure Mode، ROP Mode، Torque Mode</li>
<li>تحكم PID: P للاستجابة الفورية، I للتراكمي، D للتنبؤي</li>
<li>حدود الأمان: Max WOB، Max Torque، Max ROP، Hook Load Limits</li>
<li>أنظمة متقدمة: Soft Torque، Slide Assist، Active Vibration Damping</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📚 ملخص اليوم الثالث: أتمتة الرحلة ومناولة الأنابيب</h3>
<div style="background: #f8f9fa; padding: 1.25rem; border-radius: 10px; margin-bottom: 1.5rem;">
<ul style="margin: 0; padding-right: 1.25rem; line-height: 2;">
<li>Auto-Trip System: التحكم في سرعة الرحلة لتجنب Swab/Surge</li>
<li>Swab Pressure: انخفاض الضغط عند السحب - خطر التدفق</li>
<li>Surge Pressure: زيادة الضغط عند الإنزال - خطر الفقدان</li>
<li>أنظمة المناولة: Iron Roughneck، Pipe Racker، Fingerboard، Catwalk</li>
<li>مراقبة Overpull/Drag للكشف المبكر عن المشاكل</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📚 ملخص اليوم الرابع: AI/ML والأتمتة المتقدمة</h3>
<div style="background: #f8f9fa; padding: 1.25rem; border-radius: 10px; margin-bottom: 1.5rem;">
<ul style="margin: 0; padding-right: 1.25rem; line-height: 2;">
<li>تطبيقات ML: التنبؤ بالمشاكل، تحسين الأداء، التوجيه الذكي</li>
<li>Digital Twin: نموذج افتراضي للتنبؤ والتحسين في الوقت الحقيقي</li>
<li>RTOC: مراكز التحكم عن بعد لمراقبة عدة آبار</li>
<li>تحديات: جودة البيانات، تأخر الاتصال، ثقة المُشغّل، الأمن السيبراني</li>
<li>المستقبل: Autonomous Drilling، Self-Healing Systems</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">🎯 نقاط رئيسية للتذكر</h3>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin-bottom: 1.5rem;">
<div style="background: #e8f5e9; padding: 1.25rem; border-radius: 10px; border-left: 4px solid #27ae60;">
<h4 style="color: #27ae60; margin-bottom: 0.75rem;">✅ افعل</h4>
<ul style="margin: 0; padding-right: 1rem; font-size: 0.95rem;">
<li>ابدأ بإعدادات محافظة وعدّل تدريجياً</li>
<li>راقب استجابة النظام باستمرار</li>
<li>تحقق من معايرة الحساسات دورياً</li>
<li>افهم حدود كل نظام أتمتة</li>
</ul>
</div>
<div style="background: #ffebee; padding: 1.25rem; border-radius: 10px; border-left: 4px solid #e74c3c;">
<h4 style="color: #e74c3c; margin-bottom: 0.75rem;">❌ لا تفعل</h4>
<ul style="margin: 0; padding-right: 1rem; font-size: 0.95rem;">
<li>لا تثق بشكل أعمى في توصيات الآلة</li>
<li>لا تتجاهل حدود الأمان</li>
<li>لا تفعّل الأتمتة دون فهم النظام</li>
<li>لا تهمل السياق الميداني</li>
</ul>
</div>
</div>

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-top: 2rem;">
<h4 style="color: #ffd700; margin-bottom: 1rem;">💡 الرسالة الأساسية</h4>
<p style="margin: 0; line-height: 1.8;">
أتمتة الحفر هي أداة قوية لتحسين الكفاءة والسلامة، لكنها تتطلب مهندساً يفهم كيف تعمل هذه الأنظمة، ويعرف متى يتدخل يدوياً، ويمكنه تفسير البيانات والتوصيات بشكل نقدي. التوازن بين الأتمتة والخبرة البشرية هو مفتاح النجاح.
</p>
</div>
</section>`,
          keyTerms: [],
        },
        en: {
          title: 'Drilling Automation - Day 5: Weekly Review',
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">🔷 Drilling Automation Week Summary</h2>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
<p style="line-height: 1.8;">
This week, we explored the world of drilling automation from basic concepts to advanced AI applications. Here's a summary of the key points.
</p>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📚 Day 1 Summary: Introduction to Drilling Automation</h3>
<div style="background: #f8f9fa; padding: 1.25rem; border-radius: 10px; margin-bottom: 1.5rem;">
<ul style="margin: 0; padding-left: 1.25rem; line-height: 2;">
<li>Five automation levels (0-4) from manual to fully autonomous</li>
<li>Evolution from mechanical AutoDriller to AI/ML</li>
<li>Benefits: performance improvement, safety enhancement, cost reduction</li>
<li>Core components: Sensors, Data Acquisition, Control Algorithms, HMI, Actuators</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📚 Day 2 Summary: AutoDriller Systems</h3>
<div style="background: #f8f9fa; padding: 1.25rem; border-radius: 10px; margin-bottom: 1.5rem;">
<ul style="margin: 0; padding-left: 1.25rem; line-height: 2;">
<li>Operating modes: WOB, Differential Pressure, ROP, Torque</li>
<li>PID control: P for immediate, I for cumulative, D for predictive</li>
<li>Safety limits: Max WOB, Torque, ROP, Hook Load Limits</li>
<li>Advanced systems: Soft Torque, Slide Assist, Active Vibration Damping</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📚 Day 3 Summary: Tripping and Pipe Handling Automation</h3>
<div style="background: #f8f9fa; padding: 1.25rem; border-radius: 10px; margin-bottom: 1.5rem;">
<ul style="margin: 0; padding-left: 1.25rem; line-height: 2;">
<li>Auto-Trip System: Trip speed control to avoid Swab/Surge</li>
<li>Swab Pressure: Pressure decrease when pulling - influx risk</li>
<li>Surge Pressure: Pressure increase when running - loss risk</li>
<li>Handling systems: Iron Roughneck, Pipe Racker, Fingerboard, Catwalk</li>
<li>Overpull/Drag monitoring for early problem detection</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">📚 Day 4 Summary: AI/ML and Advanced Automation</h3>
<div style="background: #f8f9fa; padding: 1.25rem; border-radius: 10px; margin-bottom: 1.5rem;">
<ul style="margin: 0; padding-left: 1.25rem; line-height: 2;">
<li>ML applications: Problem prediction, performance optimization, intelligent steering</li>
<li>Digital Twin: Virtual model for real-time prediction and optimization</li>
<li>RTOC: Remote control centers for multi-well monitoring</li>
<li>Challenges: Data quality, latency, operator trust, cybersecurity</li>
<li>Future: Autonomous Drilling, Self-Healing Systems</li>
</ul>
</div>

<h3 style="color: #e67e22; font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 1rem 0;">🎯 Key Points to Remember</h3>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin-bottom: 1.5rem;">
<div style="background: #e8f5e9; padding: 1.25rem; border-radius: 10px; border-left: 4px solid #27ae60;">
<h4 style="color: #27ae60; margin-bottom: 0.75rem;">✅ Do</h4>
<ul style="margin: 0; padding-left: 1rem; font-size: 0.95rem;">
<li>Start with conservative settings and adjust gradually</li>
<li>Monitor system response continuously</li>
<li>Verify sensor calibration periodically</li>
<li>Understand each automation system's limits</li>
</ul>
</div>
<div style="background: #ffebee; padding: 1.25rem; border-radius: 10px; border-left: 4px solid #e74c3c;">
<h4 style="color: #e74c3c; margin-bottom: 0.75rem;">❌ Don't</h4>
<ul style="margin: 0; padding-left: 1rem; font-size: 0.95rem;">
<li>Don't blindly trust machine recommendations</li>
<li>Don't ignore safety limits</li>
<li>Don't activate automation without understanding</li>
<li>Don't neglect field context</li>
</ul>
</div>
</div>

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-top: 2rem;">
<h4 style="color: #ffd700; margin-bottom: 1rem;">💡 Core Message</h4>
<p style="margin: 0; line-height: 1.8;">
Drilling automation is a powerful tool for improving efficiency and safety, but it requires an engineer who understands how these systems work, knows when to intervene manually, and can critically interpret data and recommendations. Balance between automation and human expertise is the key to success.
</p>
</div>
</section>`,
          keyTerms: [],
        },
      },
    },

    // ==================== Day 6: Quiz ====================
    {
      day: 6,
      type: 'quiz',
      content: {
        ar: {
          title: 'اختبار أتمتة الحفر',
          explanation: 'اختبر معلوماتك في أتمتة الحفر وأنظمة التحكم الآلي',
          keyTerms: [],
        },
        en: {
          title: 'Drilling Automation Quiz',
          explanation: 'Test your knowledge in drilling automation and automated control systems',
          keyTerms: [],
        },
      },
      quiz: {
        ar: [
          {
            question: 'ما المستوى الذي يمثل نظام AutoDriller التقليدي الذي يتحكم في WOB تحت إشراف المُشغّل؟',
            options: ['المستوى 0 - يدوي', 'المستوى 1 - مساعد', 'المستوى 2 - شبه آلي', 'المستوى 4 - مستقل تماماً'],
            correctAnswer: 2,
          },
          {
            question: 'ما الوضع الأنسب لتشغيل AutoDriller عند استخدام محرك طيني (Mud Motor)؟',
            options: ['WOB Mode', 'ROP Mode', 'Differential Pressure Mode', 'Torque Mode'],
            correctAnswer: 2,
          },
          {
            question: 'ما وظيفة مكون "I" (Integral) في تحكم PID؟',
            options: ['الاستجابة الفورية للخطأ الحالي', 'تصحيح الأخطاء التراكمية', 'توقع الخطأ المستقبلي', 'تقليل سرعة الاستجابة'],
            correctAnswer: 1,
          },
          {
            question: 'ما الخطر الرئيسي عند الإنزال بسرعة عالية جداً (Surge)؟',
            options: ['دخول تدفق من التكوين', 'كسر التكوين وفقدان الدوران', 'تآكل البت', 'انخفاض ROP'],
            correctAnswer: 1,
          },
          {
            question: 'ما نظام Soft Torque؟',
            options: ['نظام لزيادة Torque تدريجياً', 'نظام لتقليل Stick-Slip عن طريق تعديل سرعة Top Drive', 'نظام لربط الوصلات بشكل ناعم', 'نظام لقياس Torque السطحي'],
            correctAnswer: 1,
          },
          {
            question: 'ما الفائدة الرئيسية للتوأم الرقمي (Digital Twin)؟',
            options: ['استبدال المُشغّل البشري', 'محاكاة السيناريوهات وتحسين المعاملات قبل التنفيذ', 'تقليل استهلاك الوقود فقط', 'زيادة سرعة نقل البيانات'],
            correctAnswer: 1,
          },
          {
            question: 'ما Iron Roughneck؟',
            options: ['نظام لنقل المواسير من Setback', 'نظام آلي لربط وفك الوصلات مع تحكم دقيق في Torque', 'نظام تخزين المواسير في Derrick', 'ناقل للمواسير من أرض البرج'],
            correctAnswer: 1,
          },
          {
            question: 'ما RTOC؟',
            options: ['نظام قياس أثناء الحفر', 'مركز عمليات يراقب ويتحكم في عدة آبار من موقع بعيد', 'خوارزمية تحكم PID متقدمة', 'نظام حماية من الانفجار'],
            correctAnswer: 1,
          },
          {
            question: 'ما التحدي الرئيسي لأنظمة AI في الحفر؟',
            options: ['سرعة الحوسبة', 'جودة البيانات والنماذج', 'حجم الأنظمة الفيزيائية', 'تكلفة الكهرباء'],
            correctAnswer: 1,
          },
          {
            question: 'عند بدء تشغيل AutoDriller، ما الإعداد الأنسب؟',
            options: ['إعدادات PID عالية للاستجابة السريعة', 'إعدادات محافظة (Gain منخفض) ثم التعديل تدريجياً', 'تفعيل جميع الأوضاع معاً', 'إيقاف جميع حدود الأمان'],
            correctAnswer: 1,
          },
        ],
        en: [
          {
            question: 'Which level represents a traditional AutoDriller system controlling WOB under operator supervision?',
            options: ['Level 0 - Manual', 'Level 1 - Assisted', 'Level 2 - Semi-Automated', 'Level 4 - Fully Autonomous'],
            correctAnswer: 2,
          },
          {
            question: 'What is the most appropriate AutoDriller mode when using a mud motor?',
            options: ['WOB Mode', 'ROP Mode', 'Differential Pressure Mode', 'Torque Mode'],
            correctAnswer: 2,
          },
          {
            question: 'What is the function of the "I" (Integral) component in PID control?',
            options: ['Immediate response to current error', 'Correcting cumulative errors', 'Predicting future error', 'Reducing response speed'],
            correctAnswer: 1,
          },
          {
            question: 'What is the main risk when running in too fast (Surge)?',
            options: ['Formation influx', 'Formation fracture and lost circulation', 'Bit wear', 'ROP decrease'],
            correctAnswer: 1,
          },
          {
            question: 'What is Soft Torque system?',
            options: ['System to gradually increase torque', 'System to reduce stick-slip by modifying Top Drive speed', 'System for gentle connection makeup', 'System for measuring surface torque'],
            correctAnswer: 1,
          },
          {
            question: 'What is the main benefit of Digital Twin?',
            options: ['Replacing human operator', 'Simulating scenarios and optimizing parameters before execution', 'Only reducing fuel consumption', 'Increasing data transfer speed'],
            correctAnswer: 1,
          },
          {
            question: 'What is Iron Roughneck?',
            options: ['System for moving pipe from setback', 'Automated makeup/breakout system with precise torque control', 'Pipe storage system in derrick', 'Pipe conveyor from ground level'],
            correctAnswer: 1,
          },
          {
            question: 'What is RTOC?',
            options: ['Measurement while drilling system', 'Operations center that monitors and controls multiple wells remotely', 'Advanced PID control algorithm', 'Blowout protection system'],
            correctAnswer: 1,
          },
          {
            question: 'What is the main challenge for AI systems in drilling?',
            options: ['Computing speed', 'Data quality and models', 'Physical system size', 'Electricity cost'],
            correctAnswer: 1,
          },
          {
            question: 'When starting AutoDriller, what is the most appropriate setting?',
            options: ['High PID settings for fast response', 'Conservative settings (low gain) then gradual adjustment', 'Activate all modes together', 'Disable all safety limits'],
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
          title: 'مشروع أتمتة الحفر',
          explanation: 'طبق ما تعلمته في مشروع عملي لتصميم نظام أتمتة',
          keyTerms: [],
        },
        en: {
          title: 'Drilling Automation Project',
          explanation: 'Apply what you learned in a practical automation system design project',
          keyTerms: [],
        },
      },
      project: {
        ar: {
          title: 'تصميم استراتيجية أتمتة لعملية حفر',
          description: `أنت مهندس حفر في مشروع لحفر بئر أفقي ممتد (ERD) بطول MD = 18,000 قدم وعمق TVD = 8,000 قدم. الإدارة تريد تطبيق أتمتة الحفر لتحسين الكفاءة وتقليل NPT.

**بيانات البئر:**
- طول Lateral: 6,000 قدم
- تكوين الخزان: حجر رملي متوسط الصلابة
- ضغط المسام: 0.45 psi/ft
- تدرج الكسر: 0.75 psi/ft
- محرك طيني + RSS متاح
- WDP (Wired Drill Pipe) متاح

**المطلوب:**
1. حدد أنظمة الأتمتة التي توصي بتطبيقها (AutoDriller, Auto-Trip, Pipe Handling, etc.)
2. اقترح إعدادات AutoDriller لكل مرحلة (Build, Lateral, Different formations)
3. صمم حدود الأمان لنظام Auto-Trip
4. اشرح كيف ستستفيد من WDP لتحسين الأتمتة
5. حدد المخاطر والتحديات المتوقعة وكيفية التعامل معها`,
          instructions: [
            'حلل متطلبات البئر وحدد أولويات الأتمتة',
            'اختر الأنظمة المناسبة لكل مرحلة من مراحل الحفر',
            'حدد الإعدادات والحدود بناءً على ظروف البئر',
            'قيّم المخاطر واقترح إجراءات التخفيف',
            'قدم توصياتك مع تبرير كل قرار',
          ],
          submissionType: 'text',
        },
        en: {
          title: 'Designing an Automation Strategy for a Drilling Operation',
          description: `You are a drilling engineer on a project to drill an Extended Reach Drilling (ERD) well with MD = 18,000 ft and TVD = 8,000 ft. Management wants to implement drilling automation to improve efficiency and reduce NPT.

**Well Data:**
- Lateral Length: 6,000 ft
- Reservoir Formation: Medium-hard sandstone
- Pore Pressure: 0.45 psi/ft
- Fracture Gradient: 0.75 psi/ft
- Mud Motor + RSS available
- WDP (Wired Drill Pipe) available

**Requirements:**
1. Identify automation systems you recommend implementing (AutoDriller, Auto-Trip, Pipe Handling, etc.)
2. Suggest AutoDriller settings for each phase (Build, Lateral, Different formations)
3. Design safety limits for Auto-Trip system
4. Explain how you would leverage WDP to improve automation
5. Identify expected risks and challenges and how to address them`,
          instructions: [
            'Analyze well requirements and prioritize automation needs',
            'Select appropriate systems for each drilling phase',
            'Define settings and limits based on well conditions',
            'Assess risks and propose mitigation measures',
            'Present recommendations with justification for each decision',
          ],
          submissionType: 'text',
        },
      },
    },
  ],
};
