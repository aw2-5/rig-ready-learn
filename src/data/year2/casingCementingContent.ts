import { WeeklyLesson } from '../weeklyContent';

export const casingCementingLesson: WeeklyLesson = {
  lessonId: 'casing-cementing',
  days: [
    {
      day: 1,
      type: 'learning',
      content: {
        ar: {
          title: 'أنواع أنابيب التغليف ووظائفها',
          explanation: `
<h2 style="color: #1e3a5f; font-size: 1.8rem; border-bottom: 3px solid #1e3a5f; padding-bottom: 8px;">أنواع أنابيب التغليف ووظائفها</h2>

<p style="line-height: 1.8; margin-bottom: 16px;">أنابيب التغليف (Casing) هي أنابيب فولاذية تُنزل في البئر وتُثبت بالإسمنت لحماية جدران البئر وعزل الطبقات المختلفة. تُعد عملية التغليف من أهم وأكثر العمليات تكلفة في حفر الآبار، حيث قد تصل تكلفتها إلى 20-30% من إجمالي تكلفة البئر.</p>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">أنواع أنابيب التغليف الرئيسية:</h3>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">1. أنبوب التوجيه (Conductor Casing)</h4>
<ul style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;"><strong>القطر:</strong> 20-30 بوصة</li>
  <li style="margin-bottom: 8px;"><strong>العمق:</strong> 30-150 متر</li>
  <li style="margin-bottom: 8px;"><strong>الوظيفة:</strong> حماية التكوينات السطحية الضعيفة ومنع انهيار فوهة البئر</li>
  <li style="margin-bottom: 8px;"><strong>التثبيت:</strong> قد يُدق أو يُحفر ويُسمنت</li>
</ul>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">2. أنبوب التغليف السطحي (Surface Casing)</h4>
<ul style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;"><strong>القطر:</strong> 13⅜ - 20 بوصة</li>
  <li style="margin-bottom: 8px;"><strong>العمق:</strong> 150-600 متر</li>
  <li style="margin-bottom: 8px;"><strong>الوظيفة:</strong> حماية طبقات المياه الجوفية العذبة ودعم معدات التحكم بالبئر (BOP)</li>
  <li style="margin-bottom: 8px;"><strong>التسميت:</strong> يُسمنت من القاع إلى السطح كاملاً</li>
</ul>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">3. أنبوب التغليف الوسيط (Intermediate Casing)</h4>
<ul style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;"><strong>القطر:</strong> 9⅝ - 13⅜ بوصة</li>
  <li style="margin-bottom: 8px;"><strong>العمق:</strong> 1000-4000 متر</li>
  <li style="margin-bottom: 8px;"><strong>الوظيفة:</strong> عزل مناطق الضغط غير الطبيعي والتكوينات غير المستقرة</li>
  <li style="margin-bottom: 8px;"><strong>قد يتطلب:</strong> أكثر من سلسلة وسيطة حسب ظروف البئر</li>
</ul>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">4. أنبوب التغليف الإنتاجي (Production Casing)</h4>
<ul style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;"><strong>القطر:</strong> 5½ - 9⅝ بوصة</li>
  <li style="margin-bottom: 8px;"><strong>العمق:</strong> يصل إلى العمق الكلي للبئر</li>
  <li style="margin-bottom: 8px;"><strong>الوظيفة:</strong> توفير قناة لاستخراج النفط أو الغاز وعزل المكمن</li>
  <li style="margin-bottom: 8px;"><strong>الأهمية:</strong> يجب أن يتحمل ضغوط الإنتاج طوال عمر البئر</li>
</ul>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">5. البطانة (Liner)</h4>
<ul style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;"><strong>التعريف:</strong> سلسلة تغليف لا تمتد إلى السطح بل تُعلق من التغليف السابق</li>
  <li style="margin-bottom: 8px;"><strong>الميزة:</strong> توفير في التكلفة والوزن</li>
  <li style="margin-bottom: 8px;"><strong>الاستخدام:</strong> شائعة في الآبار العميقة والأفقية</li>
</ul>

<div style="background: #fef3c7; padding: 16px; border-radius: 8px; border-right: 4px solid #f59e0b; margin: 20px 0;">
  <h4 style="color: #92400e; margin-bottom: 8px;">⚠️ نقطة مهمة:</h4>
  <p style="margin: 0;">يجب أن يكون قطر كل سلسلة تغليف أصغر من السابقة لتمر من خلالها، مما يقلل قطر البئر تدريجياً مع العمق.</p>
</div>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">وظائف التغليف الأساسية:</h3>
<ol style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;">منع انهيار جدران البئر</li>
  <li style="margin-bottom: 8px;">عزل الطبقات ذات الضغوط المختلفة</li>
  <li style="margin-bottom: 8px;">حماية المياه الجوفية من التلوث</li>
  <li style="margin-bottom: 8px;">توفير قناة للإنتاج أو الحقن</li>
  <li style="margin-bottom: 8px;">دعم معدات رأس البئر والتحكم</li>
  <li style="margin-bottom: 8px;">تحمل ضغوط التشغيل المختلفة</li>
</ol>
          `,
          keyTerms: [
            { term: 'أنبوب التوجيه', definition: 'أول وأكبر أنبوب تغليف يُركب لحماية التكوينات السطحية' },
            { term: 'التغليف السطحي', definition: 'يحمي المياه الجوفية ويدعم معدات التحكم بالبئر' },
            { term: 'البطانة', definition: 'سلسلة تغليف لا تمتد للسطح بل تُعلق من التغليف السابق' },
            { term: 'التغليف الإنتاجي', definition: 'السلسلة النهائية التي توفر قناة الإنتاج' }
          ],
          practiceQuestion: {
            question: 'ما الفرق الرئيسي بين البطانة (Liner) والتغليف التقليدي؟',
            options: [
              'البطانة أسمك من التغليف التقليدي',
              'البطانة لا تمتد إلى السطح بل تُعلق من التغليف السابق',
              'البطانة تُستخدم فقط في الآبار البحرية',
              'البطانة لا تحتاج إلى تسميت'
            ],
            correctAnswer: 1
          }
        },
        en: {
          title: 'Types of Casing and Their Functions',
          explanation: `
<h2 style="color: #1e3a5f; font-size: 1.8rem; border-bottom: 3px solid #1e3a5f; padding-bottom: 8px;">Types of Casing and Their Functions</h2>

<p style="line-height: 1.8; margin-bottom: 16px;">Casing consists of steel pipes run into the well and cemented in place to protect the wellbore and isolate different formations. The casing program is one of the most critical and expensive operations in well drilling, potentially accounting for 20-30% of total well cost.</p>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">Main Types of Casing:</h3>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">1. Conductor Casing</h4>
<ul style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;"><strong>Diameter:</strong> 20-30 inches</li>
  <li style="margin-bottom: 8px;"><strong>Depth:</strong> 30-150 meters</li>
  <li style="margin-bottom: 8px;"><strong>Function:</strong> Protect weak surface formations and prevent wellbore collapse</li>
  <li style="margin-bottom: 8px;"><strong>Installation:</strong> May be driven or drilled and cemented</li>
</ul>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">2. Surface Casing</h4>
<ul style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;"><strong>Diameter:</strong> 13⅜ - 20 inches</li>
  <li style="margin-bottom: 8px;"><strong>Depth:</strong> 150-600 meters</li>
  <li style="margin-bottom: 8px;"><strong>Function:</strong> Protect freshwater aquifers and support BOP equipment</li>
  <li style="margin-bottom: 8px;"><strong>Cementing:</strong> Cemented from bottom to surface completely</li>
</ul>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">3. Intermediate Casing</h4>
<ul style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;"><strong>Diameter:</strong> 9⅝ - 13⅜ inches</li>
  <li style="margin-bottom: 8px;"><strong>Depth:</strong> 1000-4000 meters</li>
  <li style="margin-bottom: 8px;"><strong>Function:</strong> Isolate abnormal pressure zones and unstable formations</li>
  <li style="margin-bottom: 8px;"><strong>May require:</strong> Multiple intermediate strings depending on well conditions</li>
</ul>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">4. Production Casing</h4>
<ul style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;"><strong>Diameter:</strong> 5½ - 9⅝ inches</li>
  <li style="margin-bottom: 8px;"><strong>Depth:</strong> Reaches total well depth</li>
  <li style="margin-bottom: 8px;"><strong>Function:</strong> Provide conduit for oil/gas production and isolate reservoir</li>
  <li style="margin-bottom: 8px;"><strong>Importance:</strong> Must withstand production pressures throughout well life</li>
</ul>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">5. Liner</h4>
<ul style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;"><strong>Definition:</strong> A casing string that doesn't extend to surface but hangs from previous casing</li>
  <li style="margin-bottom: 8px;"><strong>Advantage:</strong> Cost and weight savings</li>
  <li style="margin-bottom: 8px;"><strong>Usage:</strong> Common in deep and horizontal wells</li>
</ul>

<div style="background: #fef3c7; padding: 16px; border-radius: 8px; border-left: 4px solid #f59e0b; margin: 20px 0;">
  <h4 style="color: #92400e; margin-bottom: 8px;">⚠️ Important Note:</h4>
  <p style="margin: 0;">Each casing string must have a smaller diameter than the previous one to pass through it, gradually reducing wellbore diameter with depth.</p>
</div>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">Primary Functions of Casing:</h3>
<ol style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;">Prevent wellbore collapse</li>
  <li style="margin-bottom: 8px;">Isolate formations with different pressures</li>
  <li style="margin-bottom: 8px;">Protect groundwater from contamination</li>
  <li style="margin-bottom: 8px;">Provide conduit for production or injection</li>
  <li style="margin-bottom: 8px;">Support wellhead and control equipment</li>
  <li style="margin-bottom: 8px;">Withstand various operating pressures</li>
</ol>
          `,
          keyTerms: [
            { term: 'Conductor Casing', definition: 'First and largest casing installed to protect surface formations' },
            { term: 'Surface Casing', definition: 'Protects freshwater aquifers and supports BOP equipment' },
            { term: 'Liner', definition: 'Casing string that doesn\'t extend to surface but hangs from previous casing' },
            { term: 'Production Casing', definition: 'Final string providing the production conduit' }
          ],
          practiceQuestion: {
            question: 'What is the main difference between a liner and conventional casing?',
            options: [
              'Liners are thicker than conventional casing',
              'Liners don\'t extend to surface but hang from previous casing',
              'Liners are only used in offshore wells',
              'Liners don\'t require cementing'
            ],
            correctAnswer: 1
          }
        }
      }
    },
    {
      day: 2,
      type: 'learning',
      content: {
        ar: {
          title: 'تصميم أنابيب التغليف',
          explanation: `
<h2 style="color: #1e3a5f; font-size: 1.8rem; border-bottom: 3px solid #1e3a5f; padding-bottom: 8px;">تصميم أنابيب التغليف</h2>

<p style="line-height: 1.8; margin-bottom: 16px;">تصميم التغليف هو عملية هندسية دقيقة تهدف إلى اختيار الأنابيب المناسبة التي تتحمل جميع الأحمال المتوقعة خلال عمر البئر مع تحقيق التوازن بين السلامة والتكلفة.</p>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">الأحمال المؤثرة على التغليف:</h3>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">1. ضغط الانفجار (Burst Pressure)</h4>
<p style="line-height: 1.8; margin-bottom: 12px;">الضغط الداخلي الذي يميل لتمزيق الأنبوب من الداخل للخارج:</p>
<ul style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;">يحدث عندما يكون الضغط الداخلي أكبر من الخارجي</li>
  <li style="margin-bottom: 8px;">أسوأ حالة: عند اختبار الضغط أو حدوث ركلة (Kick)</li>
  <li style="margin-bottom: 8px;">أقصى ضغط انفجار عادة عند السطح</li>
</ul>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">2. ضغط الانهيار (Collapse Pressure)</h4>
<p style="line-height: 1.8; margin-bottom: 12px;">الضغط الخارجي الذي يميل لسحق الأنبوب من الخارج للداخل:</p>
<ul style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;">يحدث عندما يكون الضغط الخارجي أكبر من الداخلي</li>
  <li style="margin-bottom: 8px;">أسوأ حالة: أثناء الإنتاج عندما يكون الأنبوب فارغاً أو جزئياً</li>
  <li style="margin-bottom: 8px;">أقصى ضغط انهيار عادة عند القاع</li>
</ul>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">3. قوة الشد (Tensile Load)</h4>
<p style="line-height: 1.8; margin-bottom: 12px;">الحمل الناتج عن وزن سلسلة التغليف:</p>
<ul style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;">أقصى شد عند رأس البئر حيث تتعلق السلسلة بالكامل</li>
  <li style="margin-bottom: 8px;">يزداد مع عمق البئر</li>
  <li style="margin-bottom: 8px;">يتأثر بالطفو في سائل الحفر</li>
</ul>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">معاملات الأمان (Design Factors):</h3>
<div style="background: #f0f9ff; padding: 16px; border-radius: 8px; border-right: 4px solid #0ea5e9; margin: 16px 0;">
  <ul style="margin: 0; padding-right: 20px;">
    <li style="margin-bottom: 8px;"><strong>معامل أمان الانفجار:</strong> 1.1 - 1.25</li>
    <li style="margin-bottom: 8px;"><strong>معامل أمان الانهيار:</strong> 1.0 - 1.125</li>
    <li style="margin-bottom: 8px;"><strong>معامل أمان الشد:</strong> 1.6 - 1.8</li>
  </ul>
</div>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">خصائص أنابيب التغليف:</h3>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">درجات الصلب (Steel Grades):</h4>
<ul style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;"><strong>H-40:</strong> أضعف درجة، للآبار الضحلة</li>
  <li style="margin-bottom: 8px;"><strong>J-55 و K-55:</strong> الأكثر شيوعاً للاستخدام العام</li>
  <li style="margin-bottom: 8px;"><strong>N-80 و L-80:</strong> للآبار المتوسطة والعميقة</li>
  <li style="margin-bottom: 8px;"><strong>P-110 و Q-125:</strong> للآبار العميقة جداً وعالية الضغط</li>
</ul>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">سمك الجدار والوزن:</h4>
<p style="line-height: 1.8; margin-bottom: 12px;">يُعبر عن التغليف بالوزن لكل قدم (lb/ft) مثل:</p>
<ul style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;">9⅝" - 47 lb/ft (سمك جدار أكبر، مقاومة أعلى)</li>
  <li style="margin-bottom: 8px;">9⅝" - 40 lb/ft (سمك جدار أقل، مقاومة أقل)</li>
</ul>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">أنواع الوصلات (Connections):</h3>
<ul style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;"><strong>STC (Short Thread Coupling):</strong> للأحمال الخفيفة</li>
  <li style="margin-bottom: 8px;"><strong>LTC (Long Thread Coupling):</strong> للأحمال المتوسطة</li>
  <li style="margin-bottom: 8px;"><strong>BTC (Buttress Thread):</strong> للأحمال العالية</li>
  <li style="margin-bottom: 8px;"><strong>Premium Connections:</strong> للظروف القاسية والآبار الأفقية</li>
</ul>

<div style="background: #fef3c7; padding: 16px; border-radius: 8px; border-right: 4px solid #f59e0b; margin: 20px 0;">
  <h4 style="color: #92400e; margin-bottom: 8px;">⚠️ مبدأ التصميم المتدرج:</h4>
  <p style="margin: 0;">يمكن استخدام درجات وأوزان مختلفة في نفس السلسلة لتحسين التكلفة - أنابيب أثقل في القاع (ضغط انهيار عالي) وأخف في الأعلى (ضغط انفجار عالي).</p>
</div>
          `,
          keyTerms: [
            { term: 'ضغط الانفجار', definition: 'الضغط الداخلي الأقصى الذي يتحمله الأنبوب دون تمزق' },
            { term: 'ضغط الانهيار', definition: 'الضغط الخارجي الأقصى الذي يتحمله الأنبوب دون انسحاق' },
            { term: 'معامل الأمان', definition: 'نسبة قوة الأنبوب إلى الحمل المتوقع لضمان هامش سلامة' },
            { term: 'درجة الصلب', definition: 'تصنيف يحدد قوة الخضوع للفولاذ المستخدم' }
          ],
          practiceQuestion: {
            question: 'أين يكون أقصى ضغط انهيار عادةً على سلسلة التغليف؟',
            options: [
              'عند السطح',
              'في المنتصف',
              'عند القاع',
              'متساوٍ على طول السلسلة'
            ],
            correctAnswer: 2
          }
        },
        en: {
          title: 'Casing Design',
          explanation: `
<h2 style="color: #1e3a5f; font-size: 1.8rem; border-bottom: 3px solid #1e3a5f; padding-bottom: 8px;">Casing Design</h2>

<p style="line-height: 1.8; margin-bottom: 16px;">Casing design is a precise engineering process aimed at selecting appropriate pipes that can withstand all expected loads throughout the well's life while balancing safety and cost.</p>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">Loads Acting on Casing:</h3>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">1. Burst Pressure</h4>
<p style="line-height: 1.8; margin-bottom: 12px;">Internal pressure tending to rupture the pipe from inside out:</p>
<ul style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;">Occurs when internal pressure exceeds external pressure</li>
  <li style="margin-bottom: 8px;">Worst case: During pressure testing or kick situations</li>
  <li style="margin-bottom: 8px;">Maximum burst pressure usually at surface</li>
</ul>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">2. Collapse Pressure</h4>
<p style="line-height: 1.8; margin-bottom: 12px;">External pressure tending to crush the pipe from outside in:</p>
<ul style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;">Occurs when external pressure exceeds internal pressure</li>
  <li style="margin-bottom: 8px;">Worst case: During production when pipe is empty or partially filled</li>
  <li style="margin-bottom: 8px;">Maximum collapse pressure usually at bottom</li>
</ul>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">3. Tensile Load</h4>
<p style="line-height: 1.8; margin-bottom: 12px;">Load resulting from casing string weight:</p>
<ul style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;">Maximum tension at wellhead where entire string hangs</li>
  <li style="margin-bottom: 8px;">Increases with well depth</li>
  <li style="margin-bottom: 8px;">Affected by buoyancy in drilling fluid</li>
</ul>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">Design Factors (Safety Factors):</h3>
<div style="background: #f0f9ff; padding: 16px; border-radius: 8px; border-left: 4px solid #0ea5e9; margin: 16px 0;">
  <ul style="margin: 0; padding-left: 20px;">
    <li style="margin-bottom: 8px;"><strong>Burst Design Factor:</strong> 1.1 - 1.25</li>
    <li style="margin-bottom: 8px;"><strong>Collapse Design Factor:</strong> 1.0 - 1.125</li>
    <li style="margin-bottom: 8px;"><strong>Tension Design Factor:</strong> 1.6 - 1.8</li>
  </ul>
</div>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">Casing Properties:</h3>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">Steel Grades:</h4>
<ul style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;"><strong>H-40:</strong> Weakest grade, for shallow wells</li>
  <li style="margin-bottom: 8px;"><strong>J-55 and K-55:</strong> Most common for general use</li>
  <li style="margin-bottom: 8px;"><strong>N-80 and L-80:</strong> For intermediate and deep wells</li>
  <li style="margin-bottom: 8px;"><strong>P-110 and Q-125:</strong> For very deep and high-pressure wells</li>
</ul>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">Wall Thickness and Weight:</h4>
<p style="line-height: 1.8; margin-bottom: 12px;">Casing is expressed by weight per foot (lb/ft) such as:</p>
<ul style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;">9⅝" - 47 lb/ft (thicker wall, higher resistance)</li>
  <li style="margin-bottom: 8px;">9⅝" - 40 lb/ft (thinner wall, lower resistance)</li>
</ul>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">Connection Types:</h3>
<ul style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;"><strong>STC (Short Thread Coupling):</strong> For light loads</li>
  <li style="margin-bottom: 8px;"><strong>LTC (Long Thread Coupling):</strong> For medium loads</li>
  <li style="margin-bottom: 8px;"><strong>BTC (Buttress Thread):</strong> For high loads</li>
  <li style="margin-bottom: 8px;"><strong>Premium Connections:</strong> For severe conditions and horizontal wells</li>
</ul>

<div style="background: #fef3c7; padding: 16px; border-radius: 8px; border-left: 4px solid #f59e0b; margin: 20px 0;">
  <h4 style="color: #92400e; margin-bottom: 8px;">⚠️ Tapered String Design Principle:</h4>
  <p style="margin: 0;">Different grades and weights can be used in the same string to optimize cost - heavier pipe at bottom (high collapse) and lighter at top (high burst).</p>
</div>
          `,
          keyTerms: [
            { term: 'Burst Pressure', definition: 'Maximum internal pressure a pipe can withstand without rupturing' },
            { term: 'Collapse Pressure', definition: 'Maximum external pressure a pipe can withstand without crushing' },
            { term: 'Design Factor', definition: 'Ratio of pipe strength to expected load ensuring safety margin' },
            { term: 'Steel Grade', definition: 'Classification defining yield strength of steel used' }
          ],
          practiceQuestion: {
            question: 'Where is maximum collapse pressure usually located on a casing string?',
            options: [
              'At surface',
              'In the middle',
              'At the bottom',
              'Equal throughout the string'
            ],
            correctAnswer: 2
          }
        }
      }
    },
    {
      day: 3,
      type: 'learning',
      content: {
        ar: {
          title: 'عملية التسميت ومكوناته',
          explanation: `
<h2 style="color: #1e3a5f; font-size: 1.8rem; border-bottom: 3px solid #1e3a5f; padding-bottom: 8px;">عملية التسميت ومكوناته</h2>

<p style="line-height: 1.8; margin-bottom: 16px;">التسميت هو عملية ضخ ملاط الإسمنت في الفراغ الحلقي بين التغليف وجدار البئر لتثبيت التغليف وعزل الطبقات. تُعد هذه العملية حاسمة لنجاح البئر وسلامته طوال عمره الإنتاجي.</p>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">أهداف التسميت:</h3>
<ol style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;"><strong>العزل المناطقي:</strong> منع انتقال الموائع بين الطبقات</li>
  <li style="margin-bottom: 8px;"><strong>تثبيت التغليف:</strong> منع حركة الأنابيب</li>
  <li style="margin-bottom: 8px;"><strong>حماية التغليف:</strong> من التآكل والأحمال الخارجية</li>
  <li style="margin-bottom: 8px;"><strong>منع تدفق الغاز:</strong> عبر الفراغ الحلقي</li>
  <li style="margin-bottom: 8px;"><strong>دعم هيكلي:</strong> للتغليف والتكوينات الضعيفة</li>
</ol>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">أنواع الإسمنت البترولي (API Classes):</h3>

<div style="background: #f0f9ff; padding: 16px; border-radius: 8px; margin: 16px 0;">
  <table style="width: 100%; border-collapse: collapse;">
    <tr style="background: #0ea5e9; color: white;">
      <th style="padding: 12px; text-align: right;">الصنف</th>
      <th style="padding: 12px; text-align: right;">العمق (قدم)</th>
      <th style="padding: 12px; text-align: right;">الاستخدام</th>
    </tr>
    <tr style="background: #f8fafc;">
      <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">Class A</td>
      <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">0 - 6,000</td>
      <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">سطحي، ظروف عادية</td>
    </tr>
    <tr>
      <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">Class B</td>
      <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">0 - 6,000</td>
      <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">مقاومة للكبريتات</td>
    </tr>
    <tr style="background: #f8fafc;">
      <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">Class C</td>
      <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">0 - 6,000</td>
      <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">تصلب سريع</td>
    </tr>
    <tr>
      <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">Class G</td>
      <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">0 - 8,000</td>
      <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">الأكثر شيوعاً عالمياً</td>
    </tr>
    <tr style="background: #f8fafc;">
      <td style="padding: 10px;">Class H</td>
      <td style="padding: 10px;">0 - 8,000</td>
      <td style="padding: 10px;">مشابه لـ G، كثافة أعلى</td>
    </tr>
  </table>
</div>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">الإضافات الإسمنتية (Cement Additives):</h3>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">1. المسرعات (Accelerators)</h4>
<ul style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;"><strong>الوظيفة:</strong> تقليل زمن التصلب</li>
  <li style="margin-bottom: 8px;"><strong>الاستخدام:</strong> الآبار الباردة والضحلة</li>
  <li style="margin-bottom: 8px;"><strong>أمثلة:</strong> كلوريد الكالسيوم (CaCl₂)</li>
</ul>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">2. المبطئات (Retarders)</h4>
<ul style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;"><strong>الوظيفة:</strong> زيادة زمن الضخ</li>
  <li style="margin-bottom: 8px;"><strong>الاستخدام:</strong> الآبار العميقة والساخنة</li>
  <li style="margin-bottom: 8px;"><strong>أمثلة:</strong> الليغنوسلفونات</li>
</ul>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">3. المخففات (Extenders)</h4>
<ul style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;"><strong>الوظيفة:</strong> تقليل كثافة الملاط</li>
  <li style="margin-bottom: 8px;"><strong>الاستخدام:</strong> التكوينات الضعيفة</li>
  <li style="margin-bottom: 8px;"><strong>أمثلة:</strong> البنتونايت، الكرات الزجاجية المجوفة</li>
</ul>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">4. المثقلات (Weighting Agents)</h4>
<ul style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;"><strong>الوظيفة:</strong> زيادة كثافة الملاط</li>
  <li style="margin-bottom: 8px;"><strong>الاستخدام:</strong> مناطق الضغط العالي</li>
  <li style="margin-bottom: 8px;"><strong>أمثلة:</strong> الهيماتايت، الباريت</li>
</ul>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">5. مانعات فقدان السوائل (Fluid Loss Additives)</h4>
<ul style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;"><strong>الوظيفة:</strong> منع فقدان الماء للتكوين</li>
  <li style="margin-bottom: 8px;"><strong>الأهمية:</strong> الحفاظ على خصائص الملاط</li>
</ul>

<div style="background: #fef3c7; padding: 16px; border-radius: 8px; border-right: 4px solid #f59e0b; margin: 20px 0;">
  <h4 style="color: #92400e; margin-bottom: 8px;">⚠️ نقطة حرجة:</h4>
  <p style="margin: 0;">زمن الضخ (Thickening Time) يجب أن يكون كافياً لإكمال العملية مع هامش أمان، لكن ليس طويلاً جداً لتجنب تأخير العمليات.</p>
</div>
          `,
          keyTerms: [
            { term: 'العزل المناطقي', definition: 'منع انتقال الموائع بين طبقات التكوين المختلفة' },
            { term: 'Class G', definition: 'أكثر أنواع الإسمنت البترولي استخداماً عالمياً' },
            { term: 'المسرعات', definition: 'إضافات تقلل زمن تصلب الإسمنت' },
            { term: 'زمن الضخ', definition: 'الوقت المتاح لضخ الملاط قبل بدء التصلب' }
          ],
          practiceQuestion: {
            question: 'أي إضافة تُستخدم في الآبار العميقة والساخنة لزيادة زمن الضخ؟',
            options: [
              'المسرعات',
              'المبطئات',
              'المخففات',
              'المثقلات'
            ],
            correctAnswer: 1
          }
        },
        en: {
          title: 'Cementing Process and Components',
          explanation: `
<h2 style="color: #1e3a5f; font-size: 1.8rem; border-bottom: 3px solid #1e3a5f; padding-bottom: 8px;">Cementing Process and Components</h2>

<p style="line-height: 1.8; margin-bottom: 16px;">Cementing is the process of pumping cement slurry into the annular space between casing and wellbore to secure the casing and isolate formations. This operation is critical to well success and safety throughout its productive life.</p>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">Cementing Objectives:</h3>
<ol style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;"><strong>Zonal Isolation:</strong> Prevent fluid migration between formations</li>
  <li style="margin-bottom: 8px;"><strong>Casing Support:</strong> Prevent pipe movement</li>
  <li style="margin-bottom: 8px;"><strong>Casing Protection:</strong> From corrosion and external loads</li>
  <li style="margin-bottom: 8px;"><strong>Prevent Gas Migration:</strong> Through the annulus</li>
  <li style="margin-bottom: 8px;"><strong>Structural Support:</strong> For casing and weak formations</li>
</ol>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">API Cement Classes:</h3>

<div style="background: #f0f9ff; padding: 16px; border-radius: 8px; margin: 16px 0;">
  <table style="width: 100%; border-collapse: collapse;">
    <tr style="background: #0ea5e9; color: white;">
      <th style="padding: 12px; text-align: left;">Class</th>
      <th style="padding: 12px; text-align: left;">Depth (ft)</th>
      <th style="padding: 12px; text-align: left;">Application</th>
    </tr>
    <tr style="background: #f8fafc;">
      <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">Class A</td>
      <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">0 - 6,000</td>
      <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">Surface, normal conditions</td>
    </tr>
    <tr>
      <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">Class B</td>
      <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">0 - 6,000</td>
      <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">Sulfate resistant</td>
    </tr>
    <tr style="background: #f8fafc;">
      <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">Class C</td>
      <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">0 - 6,000</td>
      <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">High early strength</td>
    </tr>
    <tr>
      <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">Class G</td>
      <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">0 - 8,000</td>
      <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">Most common worldwide</td>
    </tr>
    <tr style="background: #f8fafc;">
      <td style="padding: 10px;">Class H</td>
      <td style="padding: 10px;">0 - 8,000</td>
      <td style="padding: 10px;">Similar to G, higher density</td>
    </tr>
  </table>
</div>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">Cement Additives:</h3>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">1. Accelerators</h4>
<ul style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;"><strong>Function:</strong> Reduce setting time</li>
  <li style="margin-bottom: 8px;"><strong>Use:</strong> Cold and shallow wells</li>
  <li style="margin-bottom: 8px;"><strong>Examples:</strong> Calcium Chloride (CaCl₂)</li>
</ul>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">2. Retarders</h4>
<ul style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;"><strong>Function:</strong> Increase pumping time</li>
  <li style="margin-bottom: 8px;"><strong>Use:</strong> Deep and hot wells</li>
  <li style="margin-bottom: 8px;"><strong>Examples:</strong> Lignosulfonates</li>
</ul>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">3. Extenders</h4>
<ul style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;"><strong>Function:</strong> Reduce slurry density</li>
  <li style="margin-bottom: 8px;"><strong>Use:</strong> Weak formations</li>
  <li style="margin-bottom: 8px;"><strong>Examples:</strong> Bentonite, hollow glass spheres</li>
</ul>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">4. Weighting Agents</h4>
<ul style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;"><strong>Function:</strong> Increase slurry density</li>
  <li style="margin-bottom: 8px;"><strong>Use:</strong> High pressure zones</li>
  <li style="margin-bottom: 8px;"><strong>Examples:</strong> Hematite, Barite</li>
</ul>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">5. Fluid Loss Additives</h4>
<ul style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;"><strong>Function:</strong> Prevent water loss to formation</li>
  <li style="margin-bottom: 8px;"><strong>Importance:</strong> Maintain slurry properties</li>
</ul>

<div style="background: #fef3c7; padding: 16px; border-radius: 8px; border-left: 4px solid #f59e0b; margin: 20px 0;">
  <h4 style="color: #92400e; margin-bottom: 8px;">⚠️ Critical Point:</h4>
  <p style="margin: 0;">Thickening time must be sufficient to complete the operation with safety margin, but not too long to avoid operational delays.</p>
</div>
          `,
          keyTerms: [
            { term: 'Zonal Isolation', definition: 'Preventing fluid migration between different formation layers' },
            { term: 'Class G', definition: 'Most commonly used petroleum cement worldwide' },
            { term: 'Accelerators', definition: 'Additives that reduce cement setting time' },
            { term: 'Thickening Time', definition: 'Time available to pump slurry before setting begins' }
          ],
          practiceQuestion: {
            question: 'Which additive is used in deep, hot wells to increase pumping time?',
            options: [
              'Accelerators',
              'Retarders',
              'Extenders',
              'Weighting agents'
            ],
            correctAnswer: 1
          }
        }
      }
    },
    {
      day: 4,
      type: 'learning',
      content: {
        ar: {
          title: 'طرق التسميت وتقنياته',
          explanation: `
<h2 style="color: #1e3a5f; font-size: 1.8rem; border-bottom: 3px solid #1e3a5f; padding-bottom: 8px;">طرق التسميت وتقنياته</h2>

<p style="line-height: 1.8; margin-bottom: 16px;">تختلف طرق التسميت حسب نوع التغليف وظروف البئر. الهدف الرئيسي هو وضع الإسمنت في المكان المطلوب بكفاءة وضمان جودة العزل.</p>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">التسميت الأولي (Primary Cementing):</h3>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">طريقة الإزاحة بالسدادتين (Two-Plug Method)</h4>
<p style="line-height: 1.8; margin-bottom: 12px;">الطريقة الأكثر شيوعاً وتشمل:</p>

<ol style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 12px;">
    <strong>تحضير البئر:</strong>
    <ul style="margin-top: 8px; padding-right: 20px;">
      <li>تنظيف البئر من القطع والرواسب</li>
      <li>تحريك التغليف (Reciprocation/Rotation) إن أمكن</li>
      <li>ضخ سوائل التنظيف (Spacers & Washes)</li>
    </ul>
  </li>
  <li style="margin-bottom: 12px;">
    <strong>إطلاق السدادة السفلية (Bottom Plug):</strong>
    <ul style="margin-top: 8px; padding-right: 20px;">
      <li>تفصل بين سائل الحفر والإسمنت</li>
      <li>تحتوي على غشاء قابل للكسر</li>
    </ul>
  </li>
  <li style="margin-bottom: 12px;">
    <strong>ضخ ملاط الإسمنت:</strong>
    <ul style="margin-top: 8px; padding-right: 20px;">
      <li>الكمية محسوبة لتغطية الفراغ الحلقي المطلوب</li>
      <li>معدل ضخ مناسب للتدفق المضطرب</li>
    </ul>
  </li>
  <li style="margin-bottom: 12px;">
    <strong>إطلاق السدادة العلوية (Top Plug):</strong>
    <ul style="margin-top: 8px; padding-right: 20px;">
      <li>تفصل بين الإسمنت وسائل الإزاحة</li>
      <li>صلبة بالكامل لا تُكسر</li>
    </ul>
  </li>
  <li style="margin-bottom: 12px;">
    <strong>الإزاحة:</strong>
    <ul style="margin-top: 8px; padding-right: 20px;">
      <li>ضخ سائل الإزاحة (عادة سائل حفر أو ماء)</li>
      <li>دفع الإسمنت للفراغ الحلقي</li>
    </ul>
  </li>
  <li style="margin-bottom: 12px;">
    <strong>الضغطة النهائية (Bump):</strong>
    <ul style="margin-top: 8px; padding-right: 20px;">
      <li>ارتطام السدادة العلوية بالسفلية على الحذاء</li>
      <li>ارتفاع مفاجئ في الضغط يؤكد وصول الإسمنت</li>
    </ul>
  </li>
</ol>

<div style="background: #f0fdf4; padding: 16px; border-radius: 8px; border-right: 4px solid #22c55e; margin: 20px 0;">
  <h4 style="color: #166534; margin-bottom: 8px;">✓ مؤشرات نجاح التسميت:</h4>
  <ul style="margin: 0; padding-right: 20px;">
    <li>ضغطة واضحة عند وصول السدادات</li>
    <li>حجم الإزاحة مطابق للحسابات</li>
    <li>عودة الإسمنت للسطح (إن كان مطلوباً)</li>
  </ul>
</div>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">التسميت العلاجي (Remedial Cementing):</h3>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">1. الضغط الإسمنتي (Squeeze Cementing)</h4>
<ul style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;"><strong>الغرض:</strong> إصلاح قنوات التسرب أو سد الثقوب</li>
  <li style="margin-bottom: 8px;"><strong>الطريقة:</strong> ضخ الإسمنت تحت ضغط عبر الثقوب</li>
  <li style="margin-bottom: 8px;"><strong>الأنواع:</strong> ضغط منخفض (Hesitation) أو عالي (Bradenhead)</li>
</ul>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">2. سدادة الإسمنت (Cement Plug)</h4>
<ul style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;"><strong>الاستخدام:</strong> سد جزء من البئر أو إغلاقه نهائياً</li>
  <li style="margin-bottom: 8px;"><strong>الطريقة:</strong> وضع كمية محددة في العمق المطلوب</li>
  <li style="margin-bottom: 8px;"><strong>التحقق:</strong> اختبار الوزن على السدادة بعد التصلب</li>
</ul>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">معدات التسميت:</h3>
<ul style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;"><strong>حذاء التغليف (Shoe):</strong> يوجه التغليف ويمنع دخول الحطام</li>
  <li style="margin-bottom: 8px;"><strong>طوق الطفو (Float Collar):</strong> يستقبل السدادات ويمنع الارتجاع</li>
  <li style="margin-bottom: 8px;"><strong>المركزات (Centralizers):</strong> تضمن توسيط التغليف</li>
  <li style="margin-bottom: 8px;"><strong>الخدوش (Scratchers):</strong> تنظف جدار البئر</li>
</ul>

<div style="background: #fef3c7; padding: 16px; border-radius: 8px; border-right: 4px solid #f59e0b; margin: 20px 0;">
  <h4 style="color: #92400e; margin-bottom: 8px;">⚠️ التوسيط أساسي:</h4>
  <p style="margin: 0;">التغليف غير المتوسط يؤدي لقنوات في الإسمنت تسمح بتسرب الموائع وفشل العزل.</p>
</div>
          `,
          keyTerms: [
            { term: 'السدادة السفلية', definition: 'تفصل سائل الحفر عن الإسمنت وتحتوي غشاء قابل للكسر' },
            { term: 'الضغطة النهائية', definition: 'ارتفاع الضغط عند ارتطام السدادات مؤكداً وصول الإسمنت' },
            { term: 'الضغط الإسمنتي', definition: 'ضخ الإسمنت تحت ضغط لإصلاح قنوات التسرب' },
            { term: 'المركزات', definition: 'أدوات تضمن توسيط التغليف في البئر' }
          ],
          practiceQuestion: {
            question: 'ما الذي يشير إليه ارتفاع الضغط المفاجئ في نهاية عملية التسميت؟',
            options: [
              'انسداد في خط الضخ',
              'فشل السدادة السفلية',
              'ارتطام السدادة العلوية بالسفلية (الضغطة النهائية)',
              'تسرب في التغليف'
            ],
            correctAnswer: 2
          }
        },
        en: {
          title: 'Cementing Methods and Techniques',
          explanation: `
<h2 style="color: #1e3a5f; font-size: 1.8rem; border-bottom: 3px solid #1e3a5f; padding-bottom: 8px;">Cementing Methods and Techniques</h2>

<p style="line-height: 1.8; margin-bottom: 16px;">Cementing methods vary depending on casing type and well conditions. The main objective is to place cement efficiently in the required location and ensure quality isolation.</p>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">Primary Cementing:</h3>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">Two-Plug Displacement Method</h4>
<p style="line-height: 1.8; margin-bottom: 12px;">The most common method includes:</p>

<ol style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 12px;">
    <strong>Well Preparation:</strong>
    <ul style="margin-top: 8px; padding-left: 20px;">
      <li>Clean wellbore of cuttings and debris</li>
      <li>Move casing (Reciprocation/Rotation) if possible</li>
      <li>Pump cleaning fluids (Spacers & Washes)</li>
    </ul>
  </li>
  <li style="margin-bottom: 12px;">
    <strong>Release Bottom Plug:</strong>
    <ul style="margin-top: 8px; padding-left: 20px;">
      <li>Separates drilling fluid from cement</li>
      <li>Contains breakable diaphragm</li>
    </ul>
  </li>
  <li style="margin-bottom: 12px;">
    <strong>Pump Cement Slurry:</strong>
    <ul style="margin-top: 8px; padding-left: 20px;">
      <li>Volume calculated to cover required annular space</li>
      <li>Pump rate suitable for turbulent flow</li>
    </ul>
  </li>
  <li style="margin-bottom: 12px;">
    <strong>Release Top Plug:</strong>
    <ul style="margin-top: 8px; padding-left: 20px;">
      <li>Separates cement from displacement fluid</li>
      <li>Solid, non-breakable</li>
    </ul>
  </li>
  <li style="margin-bottom: 12px;">
    <strong>Displacement:</strong>
    <ul style="margin-top: 8px; padding-left: 20px;">
      <li>Pump displacement fluid (usually mud or water)</li>
      <li>Push cement into annulus</li>
    </ul>
  </li>
  <li style="margin-bottom: 12px;">
    <strong>Bump:</strong>
    <ul style="margin-top: 8px; padding-left: 20px;">
      <li>Top plug lands on bottom plug at shoe</li>
      <li>Sudden pressure increase confirms cement placement</li>
    </ul>
  </li>
</ol>

<div style="background: #f0fdf4; padding: 16px; border-radius: 8px; border-left: 4px solid #22c55e; margin: 20px 0;">
  <h4 style="color: #166534; margin-bottom: 8px;">✓ Success Indicators:</h4>
  <ul style="margin: 0; padding-left: 20px;">
    <li>Clear pressure bump when plugs land</li>
    <li>Displacement volume matches calculations</li>
    <li>Cement returns to surface (if required)</li>
  </ul>
</div>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">Remedial Cementing:</h3>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">1. Squeeze Cementing</h4>
<ul style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;"><strong>Purpose:</strong> Repair leak channels or seal perforations</li>
  <li style="margin-bottom: 8px;"><strong>Method:</strong> Pump cement under pressure through perforations</li>
  <li style="margin-bottom: 8px;"><strong>Types:</strong> Low pressure (Hesitation) or high (Bradenhead)</li>
</ul>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">2. Cement Plug</h4>
<ul style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;"><strong>Use:</strong> Seal part of well or for permanent abandonment</li>
  <li style="margin-bottom: 8px;"><strong>Method:</strong> Place specific volume at required depth</li>
  <li style="margin-bottom: 8px;"><strong>Verification:</strong> Weight test on plug after setting</li>
</ul>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">Cementing Equipment:</h3>
<ul style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;"><strong>Casing Shoe:</strong> Guides casing and prevents debris entry</li>
  <li style="margin-bottom: 8px;"><strong>Float Collar:</strong> Receives plugs and prevents backflow</li>
  <li style="margin-bottom: 8px;"><strong>Centralizers:</strong> Ensure casing centralization</li>
  <li style="margin-bottom: 8px;"><strong>Scratchers:</strong> Clean wellbore wall</li>
</ul>

<div style="background: #fef3c7; padding: 16px; border-radius: 8px; border-left: 4px solid #f59e0b; margin: 20px 0;">
  <h4 style="color: #92400e; margin-bottom: 8px;">⚠️ Centralization is Critical:</h4>
  <p style="margin: 0;">Off-center casing leads to cement channels allowing fluid migration and isolation failure.</p>
</div>
          `,
          keyTerms: [
            { term: 'Bottom Plug', definition: 'Separates drilling fluid from cement with breakable diaphragm' },
            { term: 'Bump', definition: 'Pressure increase when plugs land confirming cement placement' },
            { term: 'Squeeze Cementing', definition: 'Pumping cement under pressure to repair leak channels' },
            { term: 'Centralizers', definition: 'Tools ensuring casing centralization in wellbore' }
          ],
          practiceQuestion: {
            question: 'What does sudden pressure increase at the end of cementing indicate?',
            options: [
              'Blockage in pump line',
              'Bottom plug failure',
              'Top plug landing on bottom plug (bump)',
              'Leak in casing'
            ],
            correctAnswer: 2
          }
        }
      }
    },
    {
      day: 5,
      type: 'learning',
      content: {
        ar: {
          title: 'ضمان الجودة وتقييم التسميت',
          explanation: `
<h2 style="color: #1e3a5f; font-size: 1.8rem; border-bottom: 3px solid #1e3a5f; padding-bottom: 8px;">ضمان الجودة وتقييم التسميت</h2>

<p style="line-height: 1.8; margin-bottom: 16px;">ضمان جودة عمليات التغليف والتسميت أمر حيوي لسلامة البئر وكفاءة الإنتاج. يشمل ذلك التحقق قبل وأثناء وبعد العملية، مع استخدام تقنيات متعددة لتقييم جودة الإسمنت.</p>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">فحوصات ما قبل التشغيل (Pre-Job QA):</h3>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">فحص أنابيب التغليف:</h4>
<ul style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;"><strong>الفحص البصري:</strong> التحقق من عدم وجود صدأ أو تشققات أو تشوهات</li>
  <li style="margin-bottom: 8px;"><strong>قياس الأبعاد:</strong> التحقق من القطر والسمك والطول</li>
  <li style="margin-bottom: 8px;"><strong>فحص الوصلات:</strong> سلامة اللولب والإحكام</li>
  <li style="margin-bottom: 8px;"><strong>التحقق من الدرجة:</strong> مطابقة علامات الصلب للمواصفات</li>
  <li style="margin-bottom: 8px;"><strong>العد والتتبع:</strong> تسجيل كل أنبوب (Tally)</li>
</ul>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">فحص الإسمنت:</h4>
<ul style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;"><strong>اختبار زمن التثخن:</strong> في جهاز الاتساق تحت الضغط والحرارة</li>
  <li style="margin-bottom: 8px;"><strong>اختبار الكثافة:</strong> التحقق من كثافة الملاط</li>
  <li style="margin-bottom: 8px;"><strong>اختبار فقدان السوائل:</strong> قياس كمية الماء المفقود</li>
  <li style="margin-bottom: 8px;"><strong>اختبار قوة الضغط:</strong> قوة الإسمنت المتصلب</li>
  <li style="margin-bottom: 8px;"><strong>اختبار الاستقرار:</strong> عدم فصل الماء</li>
</ul>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">تقييم جودة التسميت (Cement Evaluation):</h3>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">1. سجل الترابط الإسمنتي (CBL - Cement Bond Log)</h4>
<div style="background: #f0f9ff; padding: 16px; border-radius: 8px; border-right: 4px solid #0ea5e9; margin: 16px 0;">
  <ul style="margin: 0; padding-right: 20px;">
    <li style="margin-bottom: 8px;"><strong>المبدأ:</strong> موجات صوتية تقيس قوة الترابط</li>
    <li style="margin-bottom: 8px;"><strong>القياس:</strong> سعة الموجة المنعكسة</li>
    <li style="margin-bottom: 8px;"><strong>التفسير:</strong> سعة عالية = ترابط ضعيف، سعة منخفضة = ترابط جيد</li>
    <li style="margin-bottom: 8px;"><strong>القيود:</strong> لا يقيس الترابط مع التكوين بدقة</li>
  </ul>
</div>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">2. سجل كثافة متغيرة (VDL - Variable Density Log)</h4>
<ul style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;"><strong>المبدأ:</strong> عرض شكل الموجة الكامل</li>
  <li style="margin-bottom: 8px;"><strong>الميزة:</strong> يُظهر الترابط مع التغليف والتكوين</li>
  <li style="margin-bottom: 8px;"><strong>التفسير:</strong> الخطوط المتموجة تدل على الترابط</li>
</ul>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">3. أدوات التصوير بالموجات فوق الصوتية (USIT/Isolation Scanner)</h4>
<ul style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;"><strong>المبدأ:</strong> موجات عالية التردد تصور 360°</li>
  <li style="margin-bottom: 8px;"><strong>الميزة:</strong> تحديد القنوات وموقعها بدقة</li>
  <li style="margin-bottom: 8px;"><strong>المعلومات:</strong> سمك الإسمنت وحالته</li>
</ul>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">اختبارات الضغط:</h3>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">اختبار ضغط التغليف (Casing Pressure Test)</h4>
<ul style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;">يُجرى بعد تصلب الإسمنت</li>
  <li style="margin-bottom: 8px;">ضغط الاختبار = 80% من أقل مقاومة انفجار أو ضغط التكسير</li>
  <li style="margin-bottom: 8px;">مدة الاختبار: 10-30 دقيقة</li>
  <li style="margin-bottom: 8px;">معيار النجاح: انخفاض لا يتجاوز 5% من ضغط الاختبار</li>
</ul>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">اختبار سلامة التكوين (FIT/LOT)</h4>
<ul style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;"><strong>FIT:</strong> اختبار سلامة التكوين - التحقق من تحمل ضغط معين</li>
  <li style="margin-bottom: 8px;"><strong>LOT:</strong> اختبار ضغط التسريب - تحديد ضغط التكسير الفعلي</li>
</ul>

<div style="background: #fee2e2; padding: 16px; border-radius: 8px; border-right: 4px solid #ef4444; margin: 20px 0;">
  <h4 style="color: #991b1b; margin-bottom: 8px;">⚠️ تحذير:</h4>
  <p style="margin: 0;">فشل اختبار الضغط أو وجود قنوات في سجل الترابط يستدعي إجراءات علاجية قبل المتابعة لضمان سلامة البئر.</p>
</div>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">توثيق الجودة:</h3>
<ul style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;">تقرير عملية التغليف والتسميت</li>
  <li style="margin-bottom: 8px;">شهادات المواد والمعدات</li>
  <li style="margin-bottom: 8px;">نتائج اختبارات المختبر</li>
  <li style="margin-bottom: 8px;">سجلات التقييم وتفسيراتها</li>
  <li style="margin-bottom: 8px;">تقارير اختبارات الضغط</li>
</ul>
          `,
          keyTerms: [
            { term: 'CBL', definition: 'سجل الترابط الإسمنتي - يقيس قوة الترابط بين الإسمنت والتغليف' },
            { term: 'VDL', definition: 'سجل الكثافة المتغيرة - يُظهر شكل الموجة الكامل للتقييم' },
            { term: 'FIT', definition: 'اختبار سلامة التكوين للتحقق من تحمل ضغط محدد' },
            { term: 'LOT', definition: 'اختبار ضغط التسريب لتحديد ضغط التكسير الفعلي' }
          ],
          practiceQuestion: {
            question: 'في سجل الترابط الإسمنتي CBL، ماذا تعني السعة المنخفضة للموجة؟',
            options: [
              'ترابط ضعيف',
              'ترابط جيد',
              'عدم وجود إسمنت',
              'قناة في الإسمنت'
            ],
            correctAnswer: 1
          }
        },
        en: {
          title: 'Quality Assurance and Cement Evaluation',
          explanation: `
<h2 style="color: #1e3a5f; font-size: 1.8rem; border-bottom: 3px solid #1e3a5f; padding-bottom: 8px;">Quality Assurance and Cement Evaluation</h2>

<p style="line-height: 1.8; margin-bottom: 16px;">Quality assurance of casing and cementing operations is vital for well integrity and production efficiency. This includes verification before, during, and after operations, using multiple techniques to evaluate cement quality.</p>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">Pre-Job QA Checks:</h3>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">Casing Inspection:</h4>
<ul style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;"><strong>Visual Inspection:</strong> Check for rust, cracks, or deformations</li>
  <li style="margin-bottom: 8px;"><strong>Dimensional Measurement:</strong> Verify diameter, thickness, and length</li>
  <li style="margin-bottom: 8px;"><strong>Connection Inspection:</strong> Thread integrity and tightness</li>
  <li style="margin-bottom: 8px;"><strong>Grade Verification:</strong> Match steel markings to specifications</li>
  <li style="margin-bottom: 8px;"><strong>Count and Track:</strong> Record every joint (Tally)</li>
</ul>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">Cement Testing:</h4>
<ul style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;"><strong>Thickening Time Test:</strong> In consistometer under pressure and temperature</li>
  <li style="margin-bottom: 8px;"><strong>Density Test:</strong> Verify slurry density</li>
  <li style="margin-bottom: 8px;"><strong>Fluid Loss Test:</strong> Measure water loss amount</li>
  <li style="margin-bottom: 8px;"><strong>Compressive Strength Test:</strong> Hardened cement strength</li>
  <li style="margin-bottom: 8px;"><strong>Stability Test:</strong> No water separation</li>
</ul>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">Cement Evaluation:</h3>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">1. Cement Bond Log (CBL)</h4>
<div style="background: #f0f9ff; padding: 16px; border-radius: 8px; border-left: 4px solid #0ea5e9; margin: 16px 0;">
  <ul style="margin: 0; padding-left: 20px;">
    <li style="margin-bottom: 8px;"><strong>Principle:</strong> Sonic waves measure bond strength</li>
    <li style="margin-bottom: 8px;"><strong>Measurement:</strong> Reflected wave amplitude</li>
    <li style="margin-bottom: 8px;"><strong>Interpretation:</strong> High amplitude = poor bond, Low amplitude = good bond</li>
    <li style="margin-bottom: 8px;"><strong>Limitations:</strong> Doesn't accurately measure formation bond</li>
  </ul>
</div>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">2. Variable Density Log (VDL)</h4>
<ul style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;"><strong>Principle:</strong> Displays full waveform</li>
  <li style="margin-bottom: 8px;"><strong>Advantage:</strong> Shows bond to both casing and formation</li>
  <li style="margin-bottom: 8px;"><strong>Interpretation:</strong> Chevron patterns indicate bonding</li>
</ul>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">3. Ultrasonic Imaging Tools (USIT/Isolation Scanner)</h4>
<ul style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;"><strong>Principle:</strong> High-frequency waves image 360°</li>
  <li style="margin-bottom: 8px;"><strong>Advantage:</strong> Precisely identify channels and their location</li>
  <li style="margin-bottom: 8px;"><strong>Information:</strong> Cement thickness and condition</li>
</ul>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">Pressure Tests:</h3>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">Casing Pressure Test</h4>
<ul style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;">Performed after cement sets</li>
  <li style="margin-bottom: 8px;">Test pressure = 80% of lowest burst rating or fracture pressure</li>
  <li style="margin-bottom: 8px;">Test duration: 10-30 minutes</li>
  <li style="margin-bottom: 8px;">Success criteria: Pressure drop not exceeding 5%</li>
</ul>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">Formation Integrity Test (FIT/LOT)</h4>
<ul style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;"><strong>FIT:</strong> Formation Integrity Test - verify specific pressure tolerance</li>
  <li style="margin-bottom: 8px;"><strong>LOT:</strong> Leak-Off Test - determine actual fracture pressure</li>
</ul>

<div style="background: #fee2e2; padding: 16px; border-radius: 8px; border-left: 4px solid #ef4444; margin: 20px 0;">
  <h4 style="color: #991b1b; margin-bottom: 8px;">⚠️ Warning:</h4>
  <p style="margin: 0;">Failed pressure test or channels shown on bond log require remedial action before proceeding to ensure well integrity.</p>
</div>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">Quality Documentation:</h3>
<ul style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;">Casing and cementing operation report</li>
  <li style="margin-bottom: 8px;">Material and equipment certificates</li>
  <li style="margin-bottom: 8px;">Laboratory test results</li>
  <li style="margin-bottom: 8px;">Evaluation logs and interpretations</li>
  <li style="margin-bottom: 8px;">Pressure test reports</li>
</ul>
          `,
          keyTerms: [
            { term: 'CBL', definition: 'Cement Bond Log - measures bond strength between cement and casing' },
            { term: 'VDL', definition: 'Variable Density Log - shows full waveform for evaluation' },
            { term: 'FIT', definition: 'Formation Integrity Test to verify specific pressure tolerance' },
            { term: 'LOT', definition: 'Leak-Off Test to determine actual fracture pressure' }
          ],
          practiceQuestion: {
            question: 'In a Cement Bond Log (CBL), what does low wave amplitude indicate?',
            options: [
              'Poor bond',
              'Good bond',
              'No cement present',
              'Channel in cement'
            ],
            correctAnswer: 1
          }
        }
      }
    },
    {
      day: 6,
      type: 'quiz',
      content: {
        ar: {
          title: 'اختبار التغليف والتسميت',
          explanation: 'اختبار شامل حول التغليف والتسميت وضمان الجودة',
          keyTerms: []
        },
        en: {
          title: 'Casing and Cementing Quiz',
          explanation: 'Comprehensive quiz on casing, cementing and QA/QC',
          keyTerms: []
        }
      },
      quiz: {
        ar: [
          {
            question: 'ما هو الغرض الرئيسي من التغليف السطحي (Surface Casing)؟',
            options: ['الوصول إلى المكمن', 'حماية طبقات المياه الجوفية ودعم معدات التحكم', 'توفير قناة الإنتاج', 'عزل مناطق الضغط العالي فقط'],
            correctAnswer: 1
          },
          {
            question: 'أي نوع من الأحمال يكون عادةً أقصى عند قاع سلسلة التغليف؟',
            options: ['ضغط الانفجار', 'حمل الشد', 'ضغط الانهيار', 'الحمل الحراري'],
            correctAnswer: 2
          },
          {
            question: 'ما هو صنف الإسمنت الأكثر استخداماً عالمياً؟',
            options: ['Class A', 'Class C', 'Class G', 'Class H'],
            correctAnswer: 2
          },
          {
            question: 'ما وظيفة المبطئات (Retarders) في ملاط الإسمنت؟',
            options: ['تقليل كثافة الملاط', 'زيادة زمن الضخ', 'زيادة قوة الإسمنت', 'تقليل فقدان السوائل'],
            correctAnswer: 1
          },
          {
            question: 'في طريقة الإزاحة بالسدادتين، ما الذي يميز السدادة السفلية؟',
            options: ['أنها صلبة بالكامل', 'تحتوي على غشاء قابل للكسر', 'تُستخدم لقياس الضغط', 'تمنع حركة التغليف'],
            correctAnswer: 1
          },
          {
            question: 'ما الذي تشير إليه "الضغطة النهائية" (Bump) في عملية التسميت؟',
            options: ['بداية ضخ الإسمنت', 'انتهاء زمن الضخ المسموح', 'ارتطام السدادة العلوية بالسفلية', 'فشل في معدات الضخ'],
            correctAnswer: 2
          },
          {
            question: 'ما هو الغرض من الضغط الإسمنتي (Squeeze Cementing)؟',
            options: ['تسميت التغليف لأول مرة', 'إصلاح قنوات التسرب أو سد الثقوب', 'إزالة الإسمنت القديم', 'اختبار جودة التسميت'],
            correctAnswer: 1
          },
          {
            question: 'في سجل CBL، السعة العالية للموجة تدل على:',
            options: ['ترابط ممتاز', 'ترابط ضعيف أو غياب الإسمنت', 'سمك إسمنت كبير', 'وجود غاز في الإسمنت'],
            correctAnswer: 1
          },
          {
            question: 'ما الفرق بين FIT و LOT؟',
            options: ['FIT للتغليف و LOT للتكوين', 'FIT يتحقق من ضغط محدد و LOT يحدد ضغط التكسير', 'لا فرق بينهما', 'FIT أسرع و LOT أدق'],
            correctAnswer: 1
          },
          {
            question: 'لماذا تُعد المركزات (Centralizers) ضرورية في عملية التغليف؟',
            options: ['لزيادة سرعة الإنزال', 'لضمان توسيط التغليف ومنع قنوات الإسمنت', 'لتقليل احتكاك الأنابيب', 'لقياس عمق التغليف'],
            correctAnswer: 1
          }
        ],
        en: [
          {
            question: 'What is the main purpose of surface casing?',
            options: ['Reaching the reservoir', 'Protecting freshwater aquifers and supporting control equipment', 'Providing production conduit', 'Isolating high pressure zones only'],
            correctAnswer: 1
          },
          {
            question: 'Which type of load is usually maximum at the bottom of a casing string?',
            options: ['Burst pressure', 'Tensile load', 'Collapse pressure', 'Thermal load'],
            correctAnswer: 2
          },
          {
            question: 'Which cement class is most commonly used worldwide?',
            options: ['Class A', 'Class C', 'Class G', 'Class H'],
            correctAnswer: 2
          },
          {
            question: 'What is the function of retarders in cement slurry?',
            options: ['Reduce slurry density', 'Increase pumping time', 'Increase cement strength', 'Reduce fluid loss'],
            correctAnswer: 1
          },
          {
            question: 'In the two-plug method, what distinguishes the bottom plug?',
            options: ['It is completely solid', 'It contains a breakable diaphragm', 'It is used to measure pressure', 'It prevents casing movement'],
            correctAnswer: 1
          },
          {
            question: 'What does the "bump" indicate in cementing operations?',
            options: ['Start of cement pumping', 'End of allowed pumping time', 'Top plug landing on bottom plug', 'Failure in pumping equipment'],
            correctAnswer: 2
          },
          {
            question: 'What is the purpose of squeeze cementing?',
            options: ['Cementing casing for the first time', 'Repairing leak channels or sealing perforations', 'Removing old cement', 'Testing cement quality'],
            correctAnswer: 1
          },
          {
            question: 'In a CBL log, high wave amplitude indicates:',
            options: ['Excellent bond', 'Poor bond or absence of cement', 'Thick cement', 'Gas presence in cement'],
            correctAnswer: 1
          },
          {
            question: 'What is the difference between FIT and LOT?',
            options: ['FIT is for casing and LOT is for formation', 'FIT verifies a specific pressure and LOT determines fracture pressure', 'No difference between them', 'FIT is faster and LOT is more accurate'],
            correctAnswer: 1
          },
          {
            question: 'Why are centralizers essential in casing operations?',
            options: ['To increase running speed', 'To ensure casing centralization and prevent cement channels', 'To reduce pipe friction', 'To measure casing depth'],
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
          title: 'مشروع التغليف والتسميت',
          explanation: 'تطبيق عملي لتصميم برنامج تغليف وتسميت',
          keyTerms: []
        },
        en: {
          title: 'Casing and Cementing Project',
          explanation: 'Practical application of casing and cementing program design',
          keyTerms: []
        }
      },
      project: {
        ar: {
          title: 'تصميم برنامج تغليف وتسميت',
          description: 'صمم برنامج تغليف وتسميت لبئر بعمق 3000 متر، يتضمن اختيار أنواع التغليف وأقطارها، ونوع الإسمنت والإضافات المناسبة لكل مرحلة، مع تحديد طرق ضمان الجودة.',
          instructions: [
            'تحديد عدد سلاسل التغليف وأقطارها وأعماقها',
            'اختيار درجات الفولاذ والأوزان المناسبة',
            'تحديد نوع الإسمنت والإضافات لكل سلسلة',
            'وصف إجراءات التسميت المتبعة',
            'تحديد طرق التقييم وضمان الجودة'
          ],
          submissionType: 'both'
        },
        en: {
          title: 'Casing and Cementing Program Design',
          description: 'Design a casing and cementing program for a 3000-meter well, including casing types and sizes, appropriate cement and additives for each stage, and quality assurance methods.',
          instructions: [
            'Determine number of casing strings, diameters, and depths',
            'Select appropriate steel grades and weights',
            'Specify cement type and additives for each string',
            'Describe cementing procedures to be followed',
            'Identify evaluation and QA/QC methods'
          ],
          submissionType: 'both'
        }
      }
    }
  ]
};
