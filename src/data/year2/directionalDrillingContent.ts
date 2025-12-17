import { WeeklyLesson } from '../weeklyContent';

export const directionalDrillingLesson: WeeklyLesson = {
  lessonId: 'directional-drilling',
  days: [
    {
      day: 1,
      type: 'learning',
      content: {
        ar: {
          title: 'مقدمة في الحفر الموجه',
          explanation: `
<h2 style="color: #1e3a5f; font-size: 1.8rem; border-bottom: 3px solid #1e3a5f; padding-bottom: 8px;">مقدمة في الحفر الموجه (Directional Drilling)</h2>

<p style="line-height: 1.8; margin-bottom: 16px;">الحفر الموجه هو علم وفن حفر بئر بمسار مخطط له للوصول إلى هدف تحت سطح الأرض لا يقع مباشرة تحت موقع الجهاز. أصبح هذا النوع من الحفر ضرورياً في صناعة النفط الحديثة.</p>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">لماذا نحتاج الحفر الموجه؟</h3>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">1. أسباب جيولوجية:</h4>
<ul style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;"><strong>الوصول لمكامن تحت عوائق:</strong> مثل قبة ملحية أو صدع</li>
  <li style="margin-bottom: 8px;"><strong>تطوير المكامن الرقيقة:</strong> بالحفر الأفقي لزيادة مساحة التلامس</li>
  <li style="margin-bottom: 8px;"><strong>تجنب مناطق المشاكل:</strong> مثل الضغط العالي أو فقدان الدوران</li>
  <li style="margin-bottom: 8px;"><strong>حفر آبار متعددة:</strong> من منصة واحدة</li>
</ul>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">2. أسباب اقتصادية وبيئية:</h4>
<ul style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;"><strong>المنصات البحرية:</strong> حفر عدة آبار من منصة واحدة</li>
  <li style="margin-bottom: 8px;"><strong>المناطق الحضرية:</strong> الحفر من خارج المنطقة المأهولة</li>
  <li style="margin-bottom: 8px;"><strong>المحميات البيئية:</strong> الوصول للمكمن دون الدخول للمحمية</li>
  <li style="margin-bottom: 8px;"><strong>تقليل التكاليف:</strong> منصة واحدة بدلاً من عدة منصات</li>
</ul>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">المصطلحات الأساسية:</h3>

<div style="background: #f0f9ff; padding: 16px; border-radius: 8px; border-right: 4px solid #0ea5e9; margin: 16px 0;">
  <ul style="margin: 0; padding-right: 20px;">
    <li style="margin-bottom: 10px;"><strong>الميل (Inclination):</strong> الزاوية بين محور البئر والخط العمودي (0° = عمودي، 90° = أفقي)</li>
    <li style="margin-bottom: 10px;"><strong>السمت (Azimuth):</strong> الاتجاه الأفقي للبئر من الشمال (0-360°)</li>
    <li style="margin-bottom: 10px;"><strong>الإزاحة (Departure):</strong> المسافة الأفقية من موقع السطح للهدف</li>
    <li style="margin-bottom: 10px;"><strong>TVD:</strong> العمق الحقيقي العمودي</li>
    <li style="margin-bottom: 10px;"><strong>MD:</strong> العمق المقاس على طول مسار البئر</li>
    <li style="margin-bottom: 10px;"><strong>KOP:</strong> نقطة بدء الانحراف (Kickoff Point)</li>
  </ul>
</div>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">أنواع الآبار الموجهة:</h3>
<ul style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;"><strong>النوع J:</strong> بناء زاوية ثم ثبات حتى الهدف</li>
  <li style="margin-bottom: 8px;"><strong>النوع S:</strong> بناء زاوية ثم إسقاط ثم ثبات</li>
  <li style="margin-bottom: 8px;"><strong>الأفقي:</strong> بناء زاوية حتى 90° ثم حفر أفقي</li>
  <li style="margin-bottom: 8px;"><strong>ERD:</strong> حفر بمدى ممتد (الإزاحة > 2 × TVD)</li>
</ul>

<div style="background: #fef3c7; padding: 16px; border-radius: 8px; border-right: 4px solid #f59e0b; margin: 20px 0;">
  <h4 style="color: #92400e; margin-bottom: 8px;">💡 معلومة:</h4>
  <p style="margin: 0;">أطول بئر أفقي في العالم تجاوز 12 كم من الإزاحة الأفقية!</p>
</div>
          `,
          keyTerms: [
            { term: 'الميل', definition: 'الزاوية بين محور البئر والخط العمودي' },
            { term: 'السمت', definition: 'الاتجاه الأفقي للبئر من الشمال' },
            { term: 'KOP', definition: 'نقطة بدء الانحراف عن المسار العمودي' },
            { term: 'TVD', definition: 'العمق الحقيقي العمودي للبئر' }
          ],
          practiceQuestion: {
            question: 'ما هو الميل (Inclination) لبئر أفقي؟',
            options: [
              '0 درجة',
              '45 درجة',
              '90 درجة',
              '180 درجة'
            ],
            correctAnswer: 2
          }
        },
        en: {
          title: 'Introduction to Directional Drilling',
          explanation: `
<h2 style="color: #1e3a5f; font-size: 1.8rem; border-bottom: 3px solid #1e3a5f; padding-bottom: 8px;">Introduction to Directional Drilling</h2>

<p style="line-height: 1.8; margin-bottom: 16px;">Directional drilling is the science and art of drilling a well along a planned path to reach a subsurface target not directly below the rig location. This type of drilling has become essential in the modern oil industry.</p>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">Why Do We Need Directional Drilling?</h3>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">1. Geological Reasons:</h4>
<ul style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;"><strong>Reaching reservoirs under obstacles:</strong> Such as salt domes or faults</li>
  <li style="margin-bottom: 8px;"><strong>Developing thin reservoirs:</strong> Horizontal drilling increases contact area</li>
  <li style="margin-bottom: 8px;"><strong>Avoiding problem zones:</strong> Such as high pressure or lost circulation</li>
  <li style="margin-bottom: 8px;"><strong>Drilling multiple wells:</strong> From single platform</li>
</ul>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">2. Economic and Environmental Reasons:</h4>
<ul style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;"><strong>Offshore platforms:</strong> Drilling multiple wells from one platform</li>
  <li style="margin-bottom: 8px;"><strong>Urban areas:</strong> Drilling from outside populated areas</li>
  <li style="margin-bottom: 8px;"><strong>Environmental reserves:</strong> Reaching reservoir without entering reserve</li>
  <li style="margin-bottom: 8px;"><strong>Cost reduction:</strong> One platform instead of several</li>
</ul>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">Basic Terminology:</h3>

<div style="background: #f0f9ff; padding: 16px; border-radius: 8px; border-left: 4px solid #0ea5e9; margin: 16px 0;">
  <ul style="margin: 0; padding-left: 20px;">
    <li style="margin-bottom: 10px;"><strong>Inclination:</strong> Angle between wellbore axis and vertical (0° = vertical, 90° = horizontal)</li>
    <li style="margin-bottom: 10px;"><strong>Azimuth:</strong> Horizontal direction of well from north (0-360°)</li>
    <li style="margin-bottom: 10px;"><strong>Departure:</strong> Horizontal distance from surface location to target</li>
    <li style="margin-bottom: 10px;"><strong>TVD:</strong> True Vertical Depth</li>
    <li style="margin-bottom: 10px;"><strong>MD:</strong> Measured Depth along wellbore path</li>
    <li style="margin-bottom: 10px;"><strong>KOP:</strong> Kickoff Point - start of deviation</li>
  </ul>
</div>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">Types of Directional Wells:</h3>
<ul style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;"><strong>J-Type:</strong> Build angle then hold to target</li>
  <li style="margin-bottom: 8px;"><strong>S-Type:</strong> Build angle, drop, then hold</li>
  <li style="margin-bottom: 8px;"><strong>Horizontal:</strong> Build to 90° then drill horizontally</li>
  <li style="margin-bottom: 8px;"><strong>ERD:</strong> Extended Reach Drilling (Departure > 2 × TVD)</li>
</ul>

<div style="background: #fef3c7; padding: 16px; border-radius: 8px; border-left: 4px solid #f59e0b; margin: 20px 0;">
  <h4 style="color: #92400e; margin-bottom: 8px;">💡 Did You Know:</h4>
  <p style="margin: 0;">The world's longest horizontal well exceeded 12 km of horizontal departure!</p>
</div>
          `,
          keyTerms: [
            { term: 'Inclination', definition: 'Angle between wellbore axis and vertical line' },
            { term: 'Azimuth', definition: 'Horizontal direction of well from north' },
            { term: 'KOP', definition: 'Kickoff Point - start of deviation from vertical' },
            { term: 'TVD', definition: 'True Vertical Depth of the well' }
          ],
          practiceQuestion: {
            question: 'What is the inclination of a horizontal well?',
            options: [
              '0 degrees',
              '45 degrees',
              '90 degrees',
              '180 degrees'
            ],
            correctAnswer: 2
          }
        }
      }
    },
    {
      day: 2,
      type: 'learning',
      content: {
        ar: {
          title: 'أدوات التوجيه وتقنيات البناء',
          explanation: `
<h2 style="color: #1e3a5f; font-size: 1.8rem; border-bottom: 3px solid #1e3a5f; padding-bottom: 8px;">أدوات التوجيه وتقنيات البناء</h2>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">أدوات الانحراف (Deflection Tools):</h3>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">1. المحرك القاعي (Mud Motor / PDM):</h4>
<ul style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;"><strong>المبدأ:</strong> يحول طاقة تدفق الطين لدوران رأس الحفر</li>
  <li style="margin-bottom: 8px;"><strong>الثني (Bend):</strong> زاوية صغيرة (0.5-3°) تُحدث الانحراف</li>
  <li style="margin-bottom: 8px;"><strong>الوضع المنزلق:</strong> الدوران من المحرك فقط (للتوجيه)</li>
  <li style="margin-bottom: 8px;"><strong>الوضع الدوار:</strong> دوران سلسلة الحفر + المحرك (للحفر المستقيم)</li>
</ul>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">2. نظام التوجيه الدوار (RSS - Rotary Steerable System):</h4>
<ul style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;"><strong>الميزة:</strong> التوجيه أثناء دوران سلسلة الحفر كاملة</li>
  <li style="margin-bottom: 8px;"><strong>النوع الدافع:</strong> يدفع رأس الحفر في الاتجاه المطلوب</li>
  <li style="margin-bottom: 8px;"><strong>النوع الموجه:</strong> يوجه رأس الحفر مباشرة</li>
  <li style="margin-bottom: 8px;"><strong>الفوائد:</strong> تنظيف أفضل، حفرة أنعم، ROP أعلى</li>
</ul>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">3. الإسفين الانحرافي (Whipstock):</h4>
<ul style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;">قطعة معدنية مائلة توضع في البئر</li>
  <li style="margin-bottom: 8px;">تُستخدم لفتح نوافذ جانبية (Sidetrack)</li>
  <li style="margin-bottom: 8px;">تُثبت ميكانيكياً أو بالإسمنت</li>
</ul>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">معدل بناء الزاوية (Build Rate):</h3>

<div style="background: #f0f9ff; padding: 16px; border-radius: 8px; border-right: 4px solid #0ea5e9; margin: 16px 0;">
  <p style="margin: 0 0 12px 0;"><strong>يُقاس بـ: درجة / 100 قدم (أو درجة / 30 متر)</strong></p>
  <ul style="margin: 0; padding-right: 20px;">
    <li style="margin-bottom: 8px;"><strong>بطيء:</strong> 1-2°/100 ft (للآبار العميقة)</li>
    <li style="margin-bottom: 8px;"><strong>متوسط:</strong> 3-6°/100 ft (الأكثر شيوعاً)</li>
    <li style="margin-bottom: 8px;"><strong>سريع:</strong> 8-15°/100 ft (للآبار القصيرة)</li>
    <li style="margin-bottom: 8px;"><strong>قصير النصف قطر:</strong> > 15°/100 ft</li>
  </ul>
</div>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">Dogleg Severity (DLS):</h3>
<ul style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;"><strong>التعريف:</strong> إجمالي التغير في المسار (ميل + سمت)</li>
  <li style="margin-bottom: 8px;"><strong>الحد الآمن:</strong> عادة 3-5°/100 ft للتغليف</li>
  <li style="margin-bottom: 8px;"><strong>المشاكل:</strong> DLS عالي يسبب تآكل وحز مفتاح</li>
</ul>

<div style="background: #fef3c7; padding: 16px; border-radius: 8px; border-right: 4px solid #f59e0b; margin: 20px 0;">
  <h4 style="color: #92400e; margin-bottom: 8px;">⚠️ تحذير:</h4>
  <p style="margin: 0;">DLS عالي يمنع إنزال التغليف ويسبب تآكل سريع في الأنابيب ومشاكل في إنزال المعدات.</p>
</div>
          `,
          keyTerms: [
            { term: 'المحرك القاعي', definition: 'أداة تحول تدفق الطين لدوران رأس الحفر' },
            { term: 'RSS', definition: 'نظام توجيه يعمل أثناء دوران سلسلة الحفر' },
            { term: 'Build Rate', definition: 'معدل زيادة زاوية الميل بالدرجة لكل 100 قدم' },
            { term: 'DLS', definition: 'إجمالي التغير في مسار البئر' }
          ],
          practiceQuestion: {
            question: 'ما ميزة نظام RSS عن المحرك القاعي؟',
            options: [
              'أرخص سعراً',
              'التوجيه أثناء دوران سلسلة الحفر كاملة',
              'لا يحتاج طين حفر',
              'أبسط في التشغيل'
            ],
            correctAnswer: 1
          }
        },
        en: {
          title: 'Steering Tools and Build Techniques',
          explanation: `
<h2 style="color: #1e3a5f; font-size: 1.8rem; border-bottom: 3px solid #1e3a5f; padding-bottom: 8px;">Steering Tools and Build Techniques</h2>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">Deflection Tools:</h3>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">1. Mud Motor (PDM - Positive Displacement Motor):</h4>
<ul style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;"><strong>Principle:</strong> Converts mud flow energy to bit rotation</li>
  <li style="margin-bottom: 8px;"><strong>Bend:</strong> Small angle (0.5-3°) that causes deflection</li>
  <li style="margin-bottom: 8px;"><strong>Slide mode:</strong> Rotation from motor only (for steering)</li>
  <li style="margin-bottom: 8px;"><strong>Rotate mode:</strong> Drill string rotation + motor (for straight drilling)</li>
</ul>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">2. Rotary Steerable System (RSS):</h4>
<ul style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;"><strong>Advantage:</strong> Steering while rotating entire drill string</li>
  <li style="margin-bottom: 8px;"><strong>Push-the-bit:</strong> Pushes bit in desired direction</li>
  <li style="margin-bottom: 8px;"><strong>Point-the-bit:</strong> Directly points bit</li>
  <li style="margin-bottom: 8px;"><strong>Benefits:</strong> Better cleaning, smoother hole, higher ROP</li>
</ul>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">3. Whipstock:</h4>
<ul style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;">Inclined metal piece placed in well</li>
  <li style="margin-bottom: 8px;">Used to open sidetrack windows</li>
  <li style="margin-bottom: 8px;">Fixed mechanically or with cement</li>
</ul>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">Build Rate:</h3>

<div style="background: #f0f9ff; padding: 16px; border-radius: 8px; border-left: 4px solid #0ea5e9; margin: 16px 0;">
  <p style="margin: 0 0 12px 0;"><strong>Measured in: degrees / 100 ft (or degrees / 30 m)</strong></p>
  <ul style="margin: 0; padding-left: 20px;">
    <li style="margin-bottom: 8px;"><strong>Slow:</strong> 1-2°/100 ft (for deep wells)</li>
    <li style="margin-bottom: 8px;"><strong>Medium:</strong> 3-6°/100 ft (most common)</li>
    <li style="margin-bottom: 8px;"><strong>Fast:</strong> 8-15°/100 ft (for short wells)</li>
    <li style="margin-bottom: 8px;"><strong>Short radius:</strong> > 15°/100 ft</li>
  </ul>
</div>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">Dogleg Severity (DLS):</h3>
<ul style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;"><strong>Definition:</strong> Total path change (inclination + azimuth)</li>
  <li style="margin-bottom: 8px;"><strong>Safe limit:</strong> Usually 3-5°/100 ft for casing</li>
  <li style="margin-bottom: 8px;"><strong>Problems:</strong> High DLS causes wear and keyseating</li>
</ul>

<div style="background: #fef3c7; padding: 16px; border-radius: 8px; border-left: 4px solid #f59e0b; margin: 20px 0;">
  <h4 style="color: #92400e; margin-bottom: 8px;">⚠️ Warning:</h4>
  <p style="margin: 0;">High DLS prevents casing running, causes rapid pipe wear, and creates equipment running problems.</p>
</div>
          `,
          keyTerms: [
            { term: 'Mud Motor', definition: 'Tool that converts mud flow to bit rotation' },
            { term: 'RSS', definition: 'Steering system that works while rotating drill string' },
            { term: 'Build Rate', definition: 'Rate of inclination increase in degrees per 100 ft' },
            { term: 'DLS', definition: 'Total change in wellbore path' }
          ],
          practiceQuestion: {
            question: 'What is the advantage of RSS over mud motor?',
            options: [
              'Cheaper price',
              'Steering while rotating entire drill string',
              'No drilling mud needed',
              'Simpler operation'
            ],
            correctAnswer: 1
          }
        }
      }
    },
    {
      day: 3,
      type: 'learning',
      content: {
        ar: {
          title: 'أدوات القياس والمسح',
          explanation: `
<h2 style="color: #1e3a5f; font-size: 1.8rem; border-bottom: 3px solid #1e3a5f; padding-bottom: 8px;">أدوات القياس والمسح (Survey Tools)</h2>

<p style="line-height: 1.8; margin-bottom: 16px;">معرفة موقع رأس الحفر بدقة أمر حيوي في الحفر الموجه. تُستخدم أدوات مسح متطورة لقياس الميل والسمت والعمق باستمرار.</p>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">أنواع أدوات المسح:</h3>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">1. MWD (Measurement While Drilling):</h4>
<ul style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;"><strong>الوظيفة:</strong> قياس الميل والسمت أثناء الحفر</li>
  <li style="margin-bottom: 8px;"><strong>المستشعرات:</strong> مقاييس تسارع + مغناطيسومتر</li>
  <li style="margin-bottom: 8px;"><strong>نقل البيانات:</strong> نبضات ضغط الطين للسطح</li>
  <li style="margin-bottom: 8px;"><strong>الميزة:</strong> بيانات لحظية للتوجيه</li>
</ul>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">2. LWD (Logging While Drilling):</h4>
<ul style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;"><strong>الوظيفة:</strong> قياس خواص التكوين أثناء الحفر</li>
  <li style="margin-bottom: 8px;"><strong>القياسات:</strong> جاما، مقاومة، كثافة، صوتي</li>
  <li style="margin-bottom: 8px;"><strong>الفائدة:</strong> توجيه جيولوجي (Geosteering)</li>
</ul>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">3. الجيروسكوب (Gyroscope):</h4>
<ul style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;"><strong>الاستخدام:</strong> حيث لا يعمل المغناطيسومتر (قرب التغليف)</li>
  <li style="margin-bottom: 8px;"><strong>المبدأ:</strong> يقيس السمت بالنسبة للشمال الحقيقي</li>
  <li style="margin-bottom: 8px;"><strong>الدقة:</strong> أعلى من المغناطيسي</li>
</ul>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">حسابات المسار:</h3>

<div style="background: #f0f9ff; padding: 16px; border-radius: 8px; border-right: 4px solid #0ea5e9; margin: 16px 0;">
  <h4 style="color: #0369a1; margin-bottom: 8px;">طريقة الانحناء الأدنى (Minimum Curvature):</h4>
  <ul style="margin: 0; padding-right: 20px;">
    <li style="margin-bottom: 8px;">الطريقة الأكثر دقة لحساب المسار</li>
    <li style="margin-bottom: 8px;">تفترض قوس دائري بين نقطتي مسح</li>
    <li style="margin-bottom: 8px;">تحسب TVD, Northing, Easting</li>
  </ul>
</div>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">التوجيه الجيولوجي (Geosteering):</h3>
<ul style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;"><strong>التعريف:</strong> تعديل مسار البئر بناءً على قراءات LWD</li>
  <li style="margin-bottom: 8px;"><strong>الهدف:</strong> البقاء داخل المكمن (Sweet Spot)</li>
  <li style="margin-bottom: 8px;"><strong>المؤشرات:</strong> قراءات جاما، مقاومة، كثافة</li>
  <li style="margin-bottom: 8px;"><strong>القرار:</strong> رفع أو خفض أو الاستمرار</li>
</ul>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">مصادر الخطأ في المسح:</h3>
<ul style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;"><strong>التداخل المغناطيسي:</strong> من سلسلة الحفر أو التكوين</li>
  <li style="margin-bottom: 8px;"><strong>خطأ الأداة:</strong> معايرة غير صحيحة</li>
  <li style="margin-bottom: 8px;"><strong>ساق الحفر:</strong> يجب استخدام سيقان غير مغناطيسية</li>
</ul>

<div style="background: #fef3c7; padding: 16px; border-radius: 8px; border-right: 4px solid #f59e0b; margin: 20px 0;">
  <h4 style="color: #92400e; margin-bottom: 8px;">💡 نصيحة:</h4>
  <p style="margin: 0;">استخدم سيقان غير مغناطيسية (NMDC) حول أدوات MWD لتجنب التداخل المغناطيسي.</p>
</div>
          `,
          keyTerms: [
            { term: 'MWD', definition: 'القياس أثناء الحفر لتحديد الميل والسمت' },
            { term: 'LWD', definition: 'تسجيل خواص التكوين أثناء الحفر' },
            { term: 'Geosteering', definition: 'توجيه البئر بناءً على قراءات جيولوجية' },
            { term: 'NMDC', definition: 'سيقان غير مغناطيسية لتجنب التداخل' }
          ],
          practiceQuestion: {
            question: 'متى نستخدم الجيروسكوب بدلاً من المغناطيسومتر؟',
            options: [
              'في الآبار العميقة',
              'قرب التغليف المعدني',
              'في الطبقات الرملية',
              'عند زيادة سرعة الحفر'
            ],
            correctAnswer: 1
          }
        },
        en: {
          title: 'Survey and Measurement Tools',
          explanation: `
<h2 style="color: #1e3a5f; font-size: 1.8rem; border-bottom: 3px solid #1e3a5f; padding-bottom: 8px;">Survey and Measurement Tools</h2>

<p style="line-height: 1.8; margin-bottom: 16px;">Knowing the bit location accurately is vital in directional drilling. Sophisticated survey tools are used to continuously measure inclination, azimuth, and depth.</p>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">Types of Survey Tools:</h3>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">1. MWD (Measurement While Drilling):</h4>
<ul style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;"><strong>Function:</strong> Measures inclination and azimuth while drilling</li>
  <li style="margin-bottom: 8px;"><strong>Sensors:</strong> Accelerometers + magnetometers</li>
  <li style="margin-bottom: 8px;"><strong>Data transmission:</strong> Mud pulse telemetry to surface</li>
  <li style="margin-bottom: 8px;"><strong>Advantage:</strong> Real-time data for steering</li>
</ul>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">2. LWD (Logging While Drilling):</h4>
<ul style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;"><strong>Function:</strong> Measures formation properties while drilling</li>
  <li style="margin-bottom: 8px;"><strong>Measurements:</strong> Gamma, resistivity, density, sonic</li>
  <li style="margin-bottom: 8px;"><strong>Benefit:</strong> Geosteering capability</li>
</ul>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">3. Gyroscope:</h4>
<ul style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;"><strong>Use:</strong> Where magnetometer doesn't work (near casing)</li>
  <li style="margin-bottom: 8px;"><strong>Principle:</strong> Measures azimuth relative to true north</li>
  <li style="margin-bottom: 8px;"><strong>Accuracy:</strong> Higher than magnetic</li>
</ul>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">Path Calculations:</h3>

<div style="background: #f0f9ff; padding: 16px; border-radius: 8px; border-left: 4px solid #0ea5e9; margin: 16px 0;">
  <h4 style="color: #0369a1; margin-bottom: 8px;">Minimum Curvature Method:</h4>
  <ul style="margin: 0; padding-left: 20px;">
    <li style="margin-bottom: 8px;">Most accurate method for path calculation</li>
    <li style="margin-bottom: 8px;">Assumes circular arc between survey points</li>
    <li style="margin-bottom: 8px;">Calculates TVD, Northing, Easting</li>
  </ul>
</div>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">Geosteering:</h3>
<ul style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;"><strong>Definition:</strong> Adjusting well path based on LWD readings</li>
  <li style="margin-bottom: 8px;"><strong>Goal:</strong> Stay within reservoir (Sweet Spot)</li>
  <li style="margin-bottom: 8px;"><strong>Indicators:</strong> Gamma, resistivity, density readings</li>
  <li style="margin-bottom: 8px;"><strong>Decision:</strong> Build up, drop, or hold</li>
</ul>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">Survey Error Sources:</h3>
<ul style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;"><strong>Magnetic interference:</strong> From drill string or formation</li>
  <li style="margin-bottom: 8px;"><strong>Tool error:</strong> Improper calibration</li>
  <li style="margin-bottom: 8px;"><strong>Drill collar:</strong> Must use non-magnetic collars</li>
</ul>

<div style="background: #fef3c7; padding: 16px; border-radius: 8px; border-left: 4px solid #f59e0b; margin: 20px 0;">
  <h4 style="color: #92400e; margin-bottom: 8px;">💡 Tip:</h4>
  <p style="margin: 0;">Use Non-Magnetic Drill Collars (NMDC) around MWD tools to avoid magnetic interference.</p>
</div>
          `,
          keyTerms: [
            { term: 'MWD', definition: 'Measurement While Drilling for inclination and azimuth' },
            { term: 'LWD', definition: 'Logging formation properties While Drilling' },
            { term: 'Geosteering', definition: 'Steering well based on geological readings' },
            { term: 'NMDC', definition: 'Non-Magnetic Drill Collars to avoid interference' }
          ],
          practiceQuestion: {
            question: 'When do we use gyroscope instead of magnetometer?',
            options: [
              'In deep wells',
              'Near metal casing',
              'In sand formations',
              'When increasing drilling speed'
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
          title: 'الحفر الأفقي',
          explanation: `
<h2 style="color: #1e3a5f; font-size: 1.8rem; border-bottom: 3px solid #1e3a5f; padding-bottom: 8px;">الحفر الأفقي (Horizontal Drilling)</h2>

<p style="line-height: 1.8; margin-bottom: 16px;">الحفر الأفقي هو نوع خاص من الحفر الموجه حيث يصل الميل إلى 90° أو أكثر. أحدث ثورة في صناعة النفط بتمكين إنتاج المكامن غير التقليدية.</p>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">مميزات الحفر الأفقي:</h3>
<ul style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;"><strong>زيادة مساحة التلامس:</strong> من أمتار لآلاف الأمتار</li>
  <li style="margin-bottom: 8px;"><strong>زيادة الإنتاج:</strong> 3-5 أضعاف البئر العمودي</li>
  <li style="margin-bottom: 8px;"><strong>تقليل المخاريط:</strong> ماء أو غاز من أسفل أو أعلى</li>
  <li style="margin-bottom: 8px;"><strong>تطوير المكامن الرقيقة:</strong> غير اقتصادية عمودياً</li>
  <li style="margin-bottom: 8px;"><strong>تقليل عدد الآبار:</strong> بئر أفقي = عدة آبار عمودية</li>
</ul>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">أقسام البئر الأفقي:</h3>

<div style="background: #f0f9ff; padding: 16px; border-radius: 8px; border-right: 4px solid #0ea5e9; margin: 16px 0;">
  <ol style="margin: 0; padding-right: 24px;">
    <li style="margin-bottom: 10px;"><strong>القسم العمودي:</strong> من السطح إلى KOP</li>
    <li style="margin-bottom: 10px;"><strong>قسم البناء (Build Section):</strong> زيادة الميل تدريجياً</li>
    <li style="margin-bottom: 10px;"><strong>القسم الماسك (Tangent):</strong> ثبات الميل (اختياري)</li>
    <li style="margin-bottom: 10px;"><strong>قسم الدخول (Landing):</strong> الوصول لـ 90°</li>
    <li style="margin-bottom: 10px;"><strong>القسم الأفقي (Lateral):</strong> الحفر داخل المكمن</li>
  </ol>
</div>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">تحديات الحفر الأفقي:</h3>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">1. تنظيف الحفرة:</h4>
<ul style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;">القطع تترسب على الجانب السفلي</li>
  <li style="margin-bottom: 8px;">تحتاج سرعة تدفق عالية ولزوجة مناسبة</li>
  <li style="margin-bottom: 8px;">دوران سلسلة الحفر يساعد التنظيف</li>
</ul>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">2. العزم والسحب:</h4>
<ul style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;">احتكاك عالي بسبب وزن الأنابيب على الجدار</li>
  <li style="margin-bottom: 8px;">صعوبة نقل الوزن لرأس الحفر</li>
  <li style="margin-bottom: 8px;">حاجة لمواد تشحيم في الطين</li>
</ul>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">3. التغليف والإكمال:</h4>
<ul style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;">صعوبة دفع التغليف</li>
  <li style="margin-bottom: 8px;">مركزة الإسمنت</li>
  <li style="margin-bottom: 8px;">اختيار نظام الإكمال المناسب</li>
</ul>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">التكسير الهيدروليكي (Hydraulic Fracturing):</h3>
<ul style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;">يُستخدم مع الآبار الأفقية في المكامن غير التقليدية</li>
  <li style="margin-bottom: 8px;">ضخ سوائل تحت ضغط عالي لتكسير الصخور</li>
  <li style="margin-bottom: 8px;">حقن رمل (Proppant) لإبقاء الشقوق مفتوحة</li>
  <li style="margin-bottom: 8px;">يُجرى على مراحل متعددة على طول القسم الأفقي</li>
</ul>

<div style="background: #fef3c7; padding: 16px; border-radius: 8px; border-right: 4px solid #f59e0b; margin: 20px 0;">
  <h4 style="color: #92400e; margin-bottom: 8px;">💡 ثورة الصخر الزيتي:</h4>
  <p style="margin: 0;">الجمع بين الحفر الأفقي والتكسير الهيدروليكي أحدث ثورة في إنتاج النفط والغاز من الصخر الزيتي.</p>
</div>
          `,
          keyTerms: [
            { term: 'Lateral', definition: 'القسم الأفقي من البئر داخل المكمن' },
            { term: 'Landing', definition: 'مرحلة الوصول للميل 90 درجة' },
            { term: 'التكسير الهيدروليكي', definition: 'تكسير الصخور بضخ سوائل تحت ضغط عالي' },
            { term: 'Proppant', definition: 'رمل يُحقن لإبقاء الشقوق مفتوحة' }
          ],
          practiceQuestion: {
            question: 'ما التحدي الرئيسي في تنظيف حفرة البئر الأفقي؟',
            options: [
              'ارتفاع الحرارة',
              'ترسب القطع على الجانب السفلي',
              'انخفاض الضغط',
              'قلة سائل الحفر'
            ],
            correctAnswer: 1
          }
        },
        en: {
          title: 'Horizontal Drilling',
          explanation: `
<h2 style="color: #1e3a5f; font-size: 1.8rem; border-bottom: 3px solid #1e3a5f; padding-bottom: 8px;">Horizontal Drilling</h2>

<p style="line-height: 1.8; margin-bottom: 16px;">Horizontal drilling is a special type of directional drilling where inclination reaches 90° or more. It revolutionized the oil industry by enabling production from unconventional reservoirs.</p>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">Advantages of Horizontal Drilling:</h3>
<ul style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;"><strong>Increased contact area:</strong> From meters to thousands of meters</li>
  <li style="margin-bottom: 8px;"><strong>Increased production:</strong> 3-5 times vertical well</li>
  <li style="margin-bottom: 8px;"><strong>Reduced coning:</strong> Water or gas from below or above</li>
  <li style="margin-bottom: 8px;"><strong>Thin reservoir development:</strong> Uneconomical vertically</li>
  <li style="margin-bottom: 8px;"><strong>Fewer wells needed:</strong> One horizontal = multiple vertical wells</li>
</ul>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">Horizontal Well Sections:</h3>

<div style="background: #f0f9ff; padding: 16px; border-radius: 8px; border-left: 4px solid #0ea5e9; margin: 16px 0;">
  <ol style="margin: 0; padding-left: 24px;">
    <li style="margin-bottom: 10px;"><strong>Vertical Section:</strong> From surface to KOP</li>
    <li style="margin-bottom: 10px;"><strong>Build Section:</strong> Gradual inclination increase</li>
    <li style="margin-bottom: 10px;"><strong>Tangent Section:</strong> Constant inclination (optional)</li>
    <li style="margin-bottom: 10px;"><strong>Landing Section:</strong> Reaching 90°</li>
    <li style="margin-bottom: 10px;"><strong>Lateral Section:</strong> Drilling within reservoir</li>
  </ol>
</div>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">Horizontal Drilling Challenges:</h3>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">1. Hole Cleaning:</h4>
<ul style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;">Cuttings settle on low side</li>
  <li style="margin-bottom: 8px;">Needs high flow rate and proper viscosity</li>
  <li style="margin-bottom: 8px;">Drill string rotation helps cleaning</li>
</ul>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">2. Torque and Drag:</h4>
<ul style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;">High friction from pipe weight on wall</li>
  <li style="margin-bottom: 8px;">Difficulty transferring weight to bit</li>
  <li style="margin-bottom: 8px;">Need for mud lubricants</li>
</ul>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">3. Casing and Completion:</h4>
<ul style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;">Difficulty pushing casing</li>
  <li style="margin-bottom: 8px;">Cement centralization</li>
  <li style="margin-bottom: 8px;">Selecting appropriate completion system</li>
</ul>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">Hydraulic Fracturing:</h3>
<ul style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;">Used with horizontal wells in unconventional reservoirs</li>
  <li style="margin-bottom: 8px;">Pumping fluids under high pressure to fracture rock</li>
  <li style="margin-bottom: 8px;">Injecting proppant to keep fractures open</li>
  <li style="margin-bottom: 8px;">Done in multiple stages along lateral</li>
</ul>

<div style="background: #fef3c7; padding: 16px; border-radius: 8px; border-left: 4px solid #f59e0b; margin: 20px 0;">
  <h4 style="color: #92400e; margin-bottom: 8px;">💡 Shale Revolution:</h4>
  <p style="margin: 0;">Combining horizontal drilling with hydraulic fracturing revolutionized oil and gas production from shale.</p>
</div>
          `,
          keyTerms: [
            { term: 'Lateral', definition: 'Horizontal section of well within reservoir' },
            { term: 'Landing', definition: 'Stage of reaching 90-degree inclination' },
            { term: 'Hydraulic Fracturing', definition: 'Fracturing rock by pumping fluids under high pressure' },
            { term: 'Proppant', definition: 'Sand injected to keep fractures open' }
          ],
          practiceQuestion: {
            question: 'What is the main challenge in horizontal wellbore cleaning?',
            options: [
              'High temperature',
              'Cuttings settling on low side',
              'Low pressure',
              'Insufficient drilling fluid'
            ],
            correctAnswer: 1
          }
        }
      }
    },
    {
      day: 5,
      type: 'learning',
      content: {
        ar: {
          title: 'الحفر بمدى ممتد والتخطيط',
          explanation: `
<h2 style="color: #1e3a5f; font-size: 1.8rem; border-bottom: 3px solid #1e3a5f; padding-bottom: 8px;">الحفر بمدى ممتد (ERD) والتخطيط</h2>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">الحفر بمدى ممتد (Extended Reach Drilling):</h3>

<p style="line-height: 1.8; margin-bottom: 16px;">الحفر الذي تتجاوز فيه الإزاحة الأفقية ضعف العمق الحقيقي (Departure > 2 × TVD). يتطلب تقنيات متقدمة ومعدات خاصة.</p>

<div style="background: #f0f9ff; padding: 16px; border-radius: 8px; border-right: 4px solid #0ea5e9; margin: 16px 0;">
  <h4 style="color: #0369a1; margin-bottom: 8px;">تصنيف ERD:</h4>
  <ul style="margin: 0; padding-right: 20px;">
    <li style="margin-bottom: 8px;"><strong>ERD-1:</strong> Departure/TVD = 2:1</li>
    <li style="margin-bottom: 8px;"><strong>ERD-2:</strong> Departure/TVD = 3:1</li>
    <li style="margin-bottom: 8px;"><strong>ERD-3:</strong> Departure/TVD > 3:1 (Ultra-ERD)</li>
  </ul>
</div>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">تحديات ERD:</h3>
<ul style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;"><strong>العزم والسحب الشديد:</strong> يحد من طول البئر</li>
  <li style="margin-bottom: 8px;"><strong>نقل الوزن:</strong> صعوبة إيصال WOB لرأس الحفر</li>
  <li style="margin-bottom: 8px;"><strong>ECD عالي:</strong> بسبب طول المسار</li>
  <li style="margin-bottom: 8px;"><strong>التغليف:</strong> صعوبة الدفع والتمركز</li>
  <li style="margin-bottom: 8px;"><strong>تآكل الأنابيب:</strong> بسبب الاحتكاك المستمر</li>
</ul>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">تخطيط البئر الموجه:</h3>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">الخطوات الأساسية:</h4>
<ol style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;"><strong>تحديد الهدف:</strong> موقع وعمق الهدف الجيولوجي</li>
  <li style="margin-bottom: 8px;"><strong>اختيار موقع السطح:</strong> بناءً على القيود البيئية والتشغيلية</li>
  <li style="margin-bottom: 8px;"><strong>تحديد KOP:</strong> عمق بدء الانحراف</li>
  <li style="margin-bottom: 8px;"><strong>اختيار نوع المسار:</strong> J, S, أو أفقي</li>
  <li style="margin-bottom: 8px;"><strong>حساب معدلات البناء:</strong> لتحقيق الهدف</li>
  <li style="margin-bottom: 8px;"><strong>تحليل العزم والسحب:</strong> للتأكد من إمكانية التنفيذ</li>
</ol>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">برامج التخطيط:</h4>
<ul style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;">حساب المسار ثلاثي الأبعاد</li>
  <li style="margin-bottom: 8px;">محاكاة العزم والسحب</li>
  <li style="margin-bottom: 8px;">تحليل التصادم مع الآبار المجاورة</li>
  <li style="margin-bottom: 8px;">تحسين التغليف والإسمنت</li>
</ul>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">تجنب التصادم (Anti-Collision):</h3>
<ul style="margin: 12px 0; padding-right: 24px;">
  <li style="margin-bottom: 8px;"><strong>مسافة الفصل:</strong> الحد الأدنى بين الآبار</li>
  <li style="margin-bottom: 8px;"><strong>القطع الناقص للخطأ:</strong> Ellipse of Uncertainty</li>
  <li style="margin-bottom: 8px;"><strong>المسح المتكرر:</strong> للتحقق من المسار</li>
  <li style="margin-bottom: 8px;"><strong>التنسيق:</strong> مع مشغلي الآبار المجاورة</li>
</ul>

<div style="background: #fee2e2; padding: 16px; border-radius: 8px; border-right: 4px solid #ef4444; margin: 20px 0;">
  <h4 style="color: #991b1b; margin-bottom: 8px;">⚠️ تحذير:</h4>
  <p style="margin: 0;">التصادم بين الآبار كارثة خطيرة قد تؤدي لتدفقات غير مسيطر عليها وخسائر بشرية ومادية كبيرة.</p>
</div>
          `,
          keyTerms: [
            { term: 'ERD', definition: 'حفر بإزاحة تتجاوز ضعف العمق الحقيقي' },
            { term: 'Ellipse of Uncertainty', definition: 'منطقة عدم اليقين لموقع البئر' },
            { term: 'Anti-Collision', definition: 'تحليل لتجنب التصادم مع آبار أخرى' },
            { term: 'Target', definition: 'الموقع الجيولوجي المراد الوصول إليه' }
          ],
          practiceQuestion: {
            question: 'ما هو التحدي الرئيسي في الحفر بمدى ممتد (ERD)؟',
            options: [
              'انخفاض الحرارة',
              'العزم والسحب الشديد',
              'قلة البيانات',
              'صغر حجم الهدف'
            ],
            correctAnswer: 1
          }
        },
        en: {
          title: 'Extended Reach Drilling and Planning',
          explanation: `
<h2 style="color: #1e3a5f; font-size: 1.8rem; border-bottom: 3px solid #1e3a5f; padding-bottom: 8px;">Extended Reach Drilling (ERD) and Planning</h2>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">Extended Reach Drilling (ERD):</h3>

<p style="line-height: 1.8; margin-bottom: 16px;">Drilling where horizontal departure exceeds twice the true vertical depth (Departure > 2 × TVD). Requires advanced techniques and special equipment.</p>

<div style="background: #f0f9ff; padding: 16px; border-radius: 8px; border-left: 4px solid #0ea5e9; margin: 16px 0;">
  <h4 style="color: #0369a1; margin-bottom: 8px;">ERD Classification:</h4>
  <ul style="margin: 0; padding-left: 20px;">
    <li style="margin-bottom: 8px;"><strong>ERD-1:</strong> Departure/TVD = 2:1</li>
    <li style="margin-bottom: 8px;"><strong>ERD-2:</strong> Departure/TVD = 3:1</li>
    <li style="margin-bottom: 8px;"><strong>ERD-3:</strong> Departure/TVD > 3:1 (Ultra-ERD)</li>
  </ul>
</div>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">ERD Challenges:</h3>
<ul style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;"><strong>Extreme torque and drag:</strong> Limits well length</li>
  <li style="margin-bottom: 8px;"><strong>Weight transfer:</strong> Difficulty delivering WOB to bit</li>
  <li style="margin-bottom: 8px;"><strong>High ECD:</strong> Due to long path</li>
  <li style="margin-bottom: 8px;"><strong>Casing:</strong> Difficulty pushing and centralizing</li>
  <li style="margin-bottom: 8px;"><strong>Pipe wear:</strong> Due to continuous friction</li>
</ul>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">Directional Well Planning:</h3>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">Basic Steps:</h4>
<ol style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;"><strong>Define target:</strong> Location and depth of geological target</li>
  <li style="margin-bottom: 8px;"><strong>Select surface location:</strong> Based on environmental and operational constraints</li>
  <li style="margin-bottom: 8px;"><strong>Determine KOP:</strong> Kickoff depth</li>
  <li style="margin-bottom: 8px;"><strong>Select path type:</strong> J, S, or horizontal</li>
  <li style="margin-bottom: 8px;"><strong>Calculate build rates:</strong> To achieve target</li>
  <li style="margin-bottom: 8px;"><strong>Torque and drag analysis:</strong> To confirm feasibility</li>
</ol>

<h4 style="color: #1e3a5f; font-size: 1.2rem; margin-top: 20px;">Planning Software:</h4>
<ul style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;">3D trajectory calculation</li>
  <li style="margin-bottom: 8px;">Torque and drag simulation</li>
  <li style="margin-bottom: 8px;">Anti-collision analysis with offset wells</li>
  <li style="margin-bottom: 8px;">Casing and cement optimization</li>
</ul>

<h3 style="color: #d97706; font-size: 1.4rem; margin-top: 24px;">Anti-Collision:</h3>
<ul style="margin: 12px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;"><strong>Separation distance:</strong> Minimum distance between wells</li>
  <li style="margin-bottom: 8px;"><strong>Ellipse of Uncertainty:</strong> Position uncertainty zone</li>
  <li style="margin-bottom: 8px;"><strong>Frequent surveys:</strong> To verify path</li>
  <li style="margin-bottom: 8px;"><strong>Coordination:</strong> With offset well operators</li>
</ul>

<div style="background: #fee2e2; padding: 16px; border-radius: 8px; border-left: 4px solid #ef4444; margin: 20px 0;">
  <h4 style="color: #991b1b; margin-bottom: 8px;">⚠️ Warning:</h4>
  <p style="margin: 0;">Well collision is a serious disaster that can lead to uncontrolled blowouts and significant human and material losses.</p>
</div>
          `,
          keyTerms: [
            { term: 'ERD', definition: 'Drilling with departure exceeding twice the TVD' },
            { term: 'Ellipse of Uncertainty', definition: 'Zone of uncertainty for well position' },
            { term: 'Anti-Collision', definition: 'Analysis to avoid collision with other wells' },
            { term: 'Target', definition: 'Geological location to be reached' }
          ],
          practiceQuestion: {
            question: 'What is the main challenge in Extended Reach Drilling (ERD)?',
            options: [
              'Low temperature',
              'Extreme torque and drag',
              'Lack of data',
              'Small target size'
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
          title: 'اختبار الحفر الموجه والأفقي',
          explanation: 'اختبار شامل حول الحفر الموجه والأفقي',
          keyTerms: []
        },
        en: {
          title: 'Directional and Horizontal Drilling Quiz',
          explanation: 'Comprehensive quiz on directional and horizontal drilling',
          keyTerms: []
        }
      },
      quiz: {
        ar: [
          {
            question: 'ما هو الميل (Inclination) لبئر عمودي؟',
            options: ['0 درجة', '45 درجة', '90 درجة', '180 درجة'],
            correctAnswer: 0
          },
          {
            question: 'ما هي KOP؟',
            options: ['نقطة القياس', 'نقطة بدء الانحراف', 'نقطة التغليف', 'نقطة الهدف'],
            correctAnswer: 1
          },
          {
            question: 'ما ميزة نظام RSS؟',
            options: ['أرخص من المحرك', 'التوجيه مع دوران كامل', 'لا يحتاج طين', 'أبسط تشغيلاً'],
            correctAnswer: 1
          },
          {
            question: 'ما وظيفة MWD؟',
            options: ['قياس خواص التكوين', 'قياس الميل والسمت', 'تكسير الصخور', 'ضخ الإسمنت'],
            correctAnswer: 1
          },
          {
            question: 'متى نستخدم الجيروسكوب؟',
            options: ['في الآبار الضحلة', 'قرب التغليف المعدني', 'في الرمال', 'عند التوقف'],
            correctAnswer: 1
          },
          {
            question: 'ما التحدي الرئيسي في تنظيف البئر الأفقي؟',
            options: ['الحرارة العالية', 'ترسب القطع', 'الضغط المنخفض', 'قلة الطين'],
            correctAnswer: 1
          },
          {
            question: 'ما هو Lateral؟',
            options: ['القسم العمودي', 'قسم البناء', 'القسم الأفقي في المكمن', 'نقطة البداية'],
            correctAnswer: 2
          },
          {
            question: 'ما هو التكسير الهيدروليكي؟',
            options: ['كسر رأس الحفر', 'تكسير الصخور بالضغط', 'كسر التغليف', 'كسر الإسمنت'],
            correctAnswer: 1
          },
          {
            question: 'ما هو ERD؟',
            options: ['حفر عمودي عميق', 'حفر بإزاحة تتجاوز 2×TVD', 'حفر بطيء', 'حفر سريع'],
            correctAnswer: 1
          },
          {
            question: 'لماذا نحتاج Anti-Collision؟',
            options: ['لزيادة السرعة', 'لتجنب التصادم مع آبار أخرى', 'لتقليل التكلفة', 'لتحسين الإنتاج'],
            correctAnswer: 1
          }
        ],
        en: [
          {
            question: 'What is the inclination of a vertical well?',
            options: ['0 degrees', '45 degrees', '90 degrees', '180 degrees'],
            correctAnswer: 0
          },
          {
            question: 'What is KOP?',
            options: ['Measurement point', 'Kickoff point', 'Casing point', 'Target point'],
            correctAnswer: 1
          },
          {
            question: 'What is the advantage of RSS?',
            options: ['Cheaper than motor', 'Steering with full rotation', 'No mud needed', 'Simpler operation'],
            correctAnswer: 1
          },
          {
            question: 'What is the function of MWD?',
            options: ['Measure formation properties', 'Measure inclination and azimuth', 'Fracture rocks', 'Pump cement'],
            correctAnswer: 1
          },
          {
            question: 'When do we use gyroscope?',
            options: ['In shallow wells', 'Near metal casing', 'In sands', 'When stopped'],
            correctAnswer: 1
          },
          {
            question: 'What is the main challenge in horizontal hole cleaning?',
            options: ['High temperature', 'Cuttings settling', 'Low pressure', 'Insufficient mud'],
            correctAnswer: 1
          },
          {
            question: 'What is the Lateral?',
            options: ['Vertical section', 'Build section', 'Horizontal section in reservoir', 'Starting point'],
            correctAnswer: 2
          },
          {
            question: 'What is hydraulic fracturing?',
            options: ['Breaking bit', 'Fracturing rock with pressure', 'Breaking casing', 'Breaking cement'],
            correctAnswer: 1
          },
          {
            question: 'What is ERD?',
            options: ['Deep vertical drilling', 'Drilling with departure > 2×TVD', 'Slow drilling', 'Fast drilling'],
            correctAnswer: 1
          },
          {
            question: 'Why do we need Anti-Collision?',
            options: ['To increase speed', 'To avoid collision with other wells', 'To reduce cost', 'To improve production'],
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
          title: 'مشروع الحفر الموجه',
          explanation: 'تطبيق عملي لتخطيط بئر موجه',
          keyTerms: []
        },
        en: {
          title: 'Directional Drilling Project',
          explanation: 'Practical application of directional well planning',
          keyTerms: []
        }
      },
      project: {
        ar: {
          title: 'تخطيط بئر أفقي',
          description: 'قم بتخطيط مسار بئر أفقي للوصول لهدف محدد.',
          instructions: [
            'الهدف: مكمن على عمق TVD = 8000 قدم، إزاحة أفقية = 5000 قدم شمالاً',
            'حدد موقع KOP المناسب (اقترح عمقاً منطقياً)',
            'اختر نوع المسار المناسب وبرر اختيارك',
            'احسب معدل البناء المطلوب للوصول لـ 90° قبل المكمن',
            'اذكر 3 تحديات متوقعة وكيفية التعامل معها',
            'حدد أدوات التوجيه والقياس المقترحة'
          ],
          submissionType: 'both'
        },
        en: {
          title: 'Horizontal Well Planning',
          description: 'Plan a horizontal well trajectory to reach a specified target.',
          instructions: [
            'Target: Reservoir at TVD = 8000 ft, horizontal departure = 5000 ft north',
            'Determine appropriate KOP location (suggest logical depth)',
            'Select appropriate trajectory type and justify your choice',
            'Calculate required build rate to reach 90° before reservoir',
            'List 3 expected challenges and how to handle them',
            'Specify suggested steering and survey tools'
          ],
          submissionType: 'both'
        }
      }
    }
  ]
};
