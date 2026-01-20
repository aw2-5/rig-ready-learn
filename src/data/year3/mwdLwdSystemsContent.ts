import { WeeklyLesson } from '../weeklyContent';

export const mwdLwdSystemsLesson: WeeklyLesson = {
  lessonId: 'mwd-lwd',
  days: [
    // Day 1: Introduction to MWD & LWD Systems
    {
      day: 1,
      type: 'learning',
      content: {
        ar: {
          title: 'مقدمة في أنظمة MWD و LWD',
          explanation: `
<section style="margin-bottom: 2rem;">
  <h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; border-bottom: 3px solid #ff6b35; padding-bottom: 0.5rem;">
    🔷 مقدمة: ثورة القياس أثناء الحفر
  </h2>
  
  <div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
    <p style="font-size: 1.1rem; line-height: 1.8; margin: 0;">
      تُمثل أنظمة <strong>MWD (Measurement While Drilling)</strong> و <strong>LWD (Logging While Drilling)</strong> قفزة تقنية هائلة في صناعة الحفر، حيث تُمكّن المهندسين من الحصول على بيانات حية ودقيقة عن ظروف البئر ومسار الحفر والخصائص الجيولوجية للتكوينات - وكل ذلك في الوقت الفعلي أثناء عملية الحفر دون الحاجة لإيقاف العمليات.
    </p>
  </div>

  <h3 style="color: #ff6b35; font-size: 1.25rem; font-weight: bold; margin-top: 1.5rem; margin-bottom: 1rem;">
    📌 التعريف الأساسي والفرق بين MWD و LWD
  </h3>
  
  <div style="display: grid; gap: 1rem; margin-bottom: 1.5rem;">
    <div style="background: #e8f4f8; padding: 1.25rem; border-radius: 10px; border-right: 4px solid #1e3a5f;">
      <h4 style="color: #1e3a5f; font-weight: bold; margin-bottom: 0.75rem;">🔹 MWD - القياس أثناء الحفر</h4>
      <p style="margin: 0; line-height: 1.7;">
        نظام يوفر قياسات <strong>ميكانيكية واتجاهية</strong> في الوقت الفعلي:
      </p>
      <ul style="margin-top: 0.5rem; padding-right: 1.5rem; line-height: 1.8;">
        <li><strong>Inclination</strong> - زاوية الميل من العمودي</li>
        <li><strong>Azimuth</strong> - الاتجاه السمتي للبئر</li>
        <li><strong>Tool Face</strong> - اتجاه وجه الأداة للتوجيه</li>
        <li><strong>WOB, Torque, RPM</strong> - معاملات الحفر الميكانيكية</li>
        <li><strong>Downhole Pressure & Temperature</strong> - الضغط والحرارة في القاع</li>
      </ul>
    </div>
    
    <div style="background: #fff3e8; padding: 1.25rem; border-radius: 10px; border-right: 4px solid #ff6b35;">
      <h4 style="color: #ff6b35; font-weight: bold; margin-bottom: 0.75rem;">🔸 LWD - التسجيل أثناء الحفر</h4>
      <p style="margin: 0; line-height: 1.7;">
        نظام يوفر قياسات <strong>بتروفيزيائية وجيولوجية</strong> للتكوينات:
      </p>
      <ul style="margin-top: 0.5rem; padding-right: 1.5rem; line-height: 1.8;">
        <li><strong>Gamma Ray (GR)</strong> - أشعة جاما لتحديد الليثولوجي</li>
        <li><strong>Resistivity</strong> - المقاومة الكهربائية لتحديد نوع الموائع</li>
        <li><strong>Density (ρb)</strong> - الكثافة لحساب المسامية</li>
        <li><strong>Neutron Porosity (ΦN)</strong> - المسامية النيوترونية</li>
        <li><strong>Sonic (Δt)</strong> - السرعة الصوتية للخصائص الميكانيكية</li>
      </ul>
    </div>
  </div>

  <h3 style="color: #ff6b35; font-size: 1.25rem; font-weight: bold; margin-top: 1.5rem; margin-bottom: 1rem;">
    📌 لماذا نحتاج MWD/LWD؟ المقارنة مع Wireline
  </h3>
  
  <div style="background: #f8f9fa; padding: 1.25rem; border-radius: 10px; margin-bottom: 1.5rem;">
    <table style="width: 100%; border-collapse: collapse; font-size: 0.95rem;">
      <thead>
        <tr style="background: #1e3a5f; color: white;">
          <th style="padding: 0.75rem; text-align: right; border: 1px solid #dee2e6;">المعيار</th>
          <th style="padding: 0.75rem; text-align: center; border: 1px solid #dee2e6;">MWD/LWD</th>
          <th style="padding: 0.75rem; text-align: center; border: 1px solid #dee2e6;">Wireline</th>
        </tr>
      </thead>
      <tbody>
        <tr style="background: white;">
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; font-weight: bold;">التوقيت</td>
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; text-align: center; color: green;">بيانات حية أثناء الحفر</td>
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; text-align: center; color: #dc3545;">بعد الانتهاء من الحفر</td>
        </tr>
        <tr style="background: #f8f9fa;">
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; font-weight: bold;">زمن الرحلة (Trip Time)</td>
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; text-align: center; color: green;">لا يوجد - مدمج مع BHA</td>
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; text-align: center; color: #dc3545;">8-24 ساعة لكل رحلة</td>
        </tr>
        <tr style="background: white;">
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; font-weight: bold;">حالة البئر</td>
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; text-align: center; color: green;">قياس التكوين الأصلي</td>
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; text-align: center; color: #dc3545;">بعد تأثر التكوين بالطين</td>
        </tr>
        <tr style="background: #f8f9fa;">
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; font-weight: bold;">الآبار الأفقية</td>
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; text-align: center; color: green;">ممتاز - الطريقة الوحيدة</td>
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; text-align: center; color: #dc3545;">صعب جداً أو مستحيل</td>
        </tr>
        <tr style="background: white;">
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; font-weight: bold;">دقة القياس</td>
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; text-align: center; color: #ffc107;">جيدة</td>
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; text-align: center; color: green;">ممتازة</td>
        </tr>
        <tr style="background: #f8f9fa;">
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; font-weight: bold;">التكلفة اليومية</td>
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; text-align: center; color: #dc3545;">$15,000-50,000/يوم</td>
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; text-align: center; color: green;">$5,000-15,000/رحلة</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3 style="color: #ff6b35; font-size: 1.25rem; font-weight: bold; margin-top: 1.5rem; margin-bottom: 1rem;">
    📌 المكونات الأساسية لنظام MWD/LWD
  </h3>
  
  <div style="background: #e8f4f8; padding: 1.25rem; border-radius: 10px; margin-bottom: 1.5rem;">
    <div style="display: grid; gap: 1rem;">
      <div style="background: white; padding: 1rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <h4 style="color: #1e3a5f; font-weight: bold; margin-bottom: 0.5rem;">1️⃣ Power Section - مصدر الطاقة</h4>
        <ul style="margin: 0; padding-right: 1.5rem; line-height: 1.7;">
          <li><strong>Turbine Generator:</strong> مولد توربيني يعمل بتدفق سائل الحفر</li>
          <li><strong>Battery Pack:</strong> بطاريات ليثيوم عالية الحرارة كمصدر احتياطي</li>
          <li>الطاقة المطلوبة: 50-500 واط حسب الأدوات</li>
        </ul>
      </div>
      
      <div style="background: white; padding: 1rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <h4 style="color: #1e3a5f; font-weight: bold; margin-bottom: 0.5rem;">2️⃣ Sensor Section - قسم الحساسات</h4>
        <ul style="margin: 0; padding-right: 1.5rem; line-height: 1.7;">
          <li><strong>Directional Sensors:</strong> Accelerometers و Magnetometers ثلاثية المحاور</li>
          <li><strong>Formation Sensors:</strong> أجهزة GR, Resistivity, Density, Neutron</li>
          <li><strong>Drilling Sensors:</strong> WOB, Torque, RPM, Vibration</li>
        </ul>
      </div>
      
      <div style="background: white; padding: 1rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <h4 style="color: #1e3a5f; font-weight: bold; margin-bottom: 0.5rem;">3️⃣ Telemetry Section - قسم الإرسال</h4>
        <ul style="margin: 0; padding-right: 1.5rem; line-height: 1.7;">
          <li><strong>Mud Pulse:</strong> نبضات ضغط عبر سائل الحفر (الأكثر شيوعاً)</li>
          <li><strong>EM Telemetry:</strong> موجات كهرومغناطيسية عبر التكوينات</li>
          <li><strong>Wired Pipe:</strong> كابلات مدمجة في أنابيب الحفر (الأسرع)</li>
        </ul>
      </div>
      
      <div style="background: white; padding: 1rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <h4 style="color: #1e3a5f; font-weight: bold; margin-bottom: 0.5rem;">4️⃣ Surface System - النظام السطحي</h4>
        <ul style="margin: 0; padding-right: 1.5rem; line-height: 1.7;">
          <li><strong>Pressure Transducer:</strong> كاشف نبضات الضغط في Standpipe</li>
          <li><strong>Signal Processor:</strong> معالج الإشارات وفك التشفير</li>
          <li><strong>Software:</strong> برامج العرض والتحليل والتسجيل</li>
        </ul>
      </div>
    </div>
  </div>

  <div style="background: linear-gradient(135deg, #065f46 0%, #047857 100%); color: white; padding: 1.25rem; border-radius: 10px; margin-top: 1.5rem;">
    <h4 style="font-weight: bold; margin-bottom: 0.75rem;">💡 أهمية MWD/LWD في الحفر الحديث:</h4>
    <ul style="margin: 0; padding-right: 1.5rem; line-height: 1.8;">
      <li>توفير ساعات الرحلات لـ Wireline (Trip Time Savings)</li>
      <li>اتخاذ قرارات فورية لتحسين مسار البئر (Geosteering)</li>
      <li>تحديد الخزان في الوقت الحقيقي (Real-time Formation Evaluation)</li>
      <li>تقليل المخاطر بمعرفة الضغوط الفعلية (Pore Pressure Detection)</li>
      <li>ضرورية للحفر الاتجاهي والأفقي (Essential for Directional Drilling)</li>
    </ul>
  </div>
</section>
          `,
          keyTerms: [
            { term: 'MWD - Measurement While Drilling', definition: 'نظام القياس أثناء الحفر لتوفير بيانات اتجاهية وميكانيكية في الوقت الفعلي' },
            { term: 'LWD - Logging While Drilling', definition: 'نظام التسجيل أثناء الحفر لتوفير بيانات بتروفيزيائية وجيولوجية للتكوينات' },
            { term: 'Telemetry', definition: 'نظام نقل البيانات من القاع إلى السطح - بالنبضات الطينية أو الكهرومغناطيسية أو السلكية' },
            { term: 'Inclination', definition: 'زاوية ميل البئر من الوضع العمودي - تُقاس بالـ Accelerometers' },
            { term: 'Azimuth', definition: 'الاتجاه السمتي للبئر من الشمال المغناطيسي أو الحقيقي' },
            { term: 'Tool Face', definition: 'اتجاه وجه أداة التوجيه - مطلوب للتحكم في مسار البئر الموجه' },
          ],
          practiceQuestion: {
            question: 'ما الميزة الرئيسية لنظام MWD/LWD مقارنة بـ Wireline Logging في الآبار الأفقية؟',
            options: [
              'MWD/LWD أرخص تكلفة من Wireline',
              'MWD/LWD يوفر دقة أعلى في القياسات',
              'MWD/LWD هو الطريقة العملية الوحيدة لتسجيل الآبار الأفقية',
              'MWD/LWD لا يحتاج إلى معايرة'
            ],
            correctAnswer: 2,
          },
        },
        en: {
          title: 'Introduction to MWD & LWD Systems',
          explanation: `
<section style="margin-bottom: 2rem;">
  <h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; border-bottom: 3px solid #ff6b35; padding-bottom: 0.5rem;">
    🔷 Introduction: The While-Drilling Measurement Revolution
  </h2>
  
  <div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
    <p style="font-size: 1.1rem; line-height: 1.8; margin: 0;">
      <strong>MWD (Measurement While Drilling)</strong> and <strong>LWD (Logging While Drilling)</strong> systems represent a quantum leap in drilling technology, enabling engineers to obtain live, accurate data about wellbore conditions, drilling trajectory, and geological formation properties - all in real-time during drilling operations without stopping work.
    </p>
  </div>

  <h3 style="color: #ff6b35; font-size: 1.25rem; font-weight: bold; margin-top: 1.5rem; margin-bottom: 1rem;">
    📌 Basic Definitions and MWD vs LWD Distinction
  </h3>
  
  <div style="display: grid; gap: 1rem; margin-bottom: 1.5rem;">
    <div style="background: #e8f4f8; padding: 1.25rem; border-radius: 10px; border-left: 4px solid #1e3a5f;">
      <h4 style="color: #1e3a5f; font-weight: bold; margin-bottom: 0.75rem;">🔹 MWD - Measurement While Drilling</h4>
      <p style="margin: 0; line-height: 1.7;">
        System providing <strong>mechanical and directional</strong> measurements in real-time:
      </p>
      <ul style="margin-top: 0.5rem; padding-left: 1.5rem; line-height: 1.8;">
        <li><strong>Inclination</strong> - Angle of deviation from vertical</li>
        <li><strong>Azimuth</strong> - Wellbore direction (heading)</li>
        <li><strong>Tool Face</strong> - Tool orientation for steering</li>
        <li><strong>WOB, Torque, RPM</strong> - Mechanical drilling parameters</li>
        <li><strong>Downhole Pressure & Temperature</strong> - Bottomhole conditions</li>
      </ul>
    </div>
    
    <div style="background: #fff3e8; padding: 1.25rem; border-radius: 10px; border-left: 4px solid #ff6b35;">
      <h4 style="color: #ff6b35; font-weight: bold; margin-bottom: 0.75rem;">🔸 LWD - Logging While Drilling</h4>
      <p style="margin: 0; line-height: 1.7;">
        System providing <strong>petrophysical and geological</strong> formation measurements:
      </p>
      <ul style="margin-top: 0.5rem; padding-left: 1.5rem; line-height: 1.8;">
        <li><strong>Gamma Ray (GR)</strong> - For lithology identification</li>
        <li><strong>Resistivity</strong> - For fluid type determination</li>
        <li><strong>Density (ρb)</strong> - For porosity calculation</li>
        <li><strong>Neutron Porosity (ΦN)</strong> - Formation porosity</li>
        <li><strong>Sonic (Δt)</strong> - For mechanical properties</li>
      </ul>
    </div>
  </div>

  <h3 style="color: #ff6b35; font-size: 1.25rem; font-weight: bold; margin-top: 1.5rem; margin-bottom: 1rem;">
    📌 Why MWD/LWD? Comparison with Wireline
  </h3>
  
  <div style="background: #f8f9fa; padding: 1.25rem; border-radius: 10px; margin-bottom: 1.5rem;">
    <table style="width: 100%; border-collapse: collapse; font-size: 0.95rem;">
      <thead>
        <tr style="background: #1e3a5f; color: white;">
          <th style="padding: 0.75rem; text-align: left; border: 1px solid #dee2e6;">Criteria</th>
          <th style="padding: 0.75rem; text-align: center; border: 1px solid #dee2e6;">MWD/LWD</th>
          <th style="padding: 0.75rem; text-align: center; border: 1px solid #dee2e6;">Wireline</th>
        </tr>
      </thead>
      <tbody>
        <tr style="background: white;">
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; font-weight: bold;">Timing</td>
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; text-align: center; color: green;">Live data while drilling</td>
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; text-align: center; color: #dc3545;">After drilling complete</td>
        </tr>
        <tr style="background: #f8f9fa;">
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; font-weight: bold;">Trip Time</td>
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; text-align: center; color: green;">None - integrated in BHA</td>
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; text-align: center; color: #dc3545;">8-24 hours per run</td>
        </tr>
        <tr style="background: white;">
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; font-weight: bold;">Formation Condition</td>
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; text-align: center; color: green;">Virgin formation</td>
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; text-align: center; color: #dc3545;">After mud invasion</td>
        </tr>
        <tr style="background: #f8f9fa;">
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; font-weight: bold;">Horizontal Wells</td>
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; text-align: center; color: green;">Excellent - only method</td>
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; text-align: center; color: #dc3545;">Very difficult/impossible</td>
        </tr>
        <tr style="background: white;">
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; font-weight: bold;">Measurement Accuracy</td>
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; text-align: center; color: #ffc107;">Good</td>
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; text-align: center; color: green;">Excellent</td>
        </tr>
        <tr style="background: #f8f9fa;">
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; font-weight: bold;">Daily Cost</td>
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; text-align: center; color: #dc3545;">$15,000-50,000/day</td>
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; text-align: center; color: green;">$5,000-15,000/run</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3 style="color: #ff6b35; font-size: 1.25rem; font-weight: bold; margin-top: 1.5rem; margin-bottom: 1rem;">
    📌 MWD/LWD System Components
  </h3>
  
  <div style="background: #e8f4f8; padding: 1.25rem; border-radius: 10px; margin-bottom: 1.5rem;">
    <div style="display: grid; gap: 1rem;">
      <div style="background: white; padding: 1rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <h4 style="color: #1e3a5f; font-weight: bold; margin-bottom: 0.5rem;">1️⃣ Power Section</h4>
        <ul style="margin: 0; padding-left: 1.5rem; line-height: 1.7;">
          <li><strong>Turbine Generator:</strong> Mud-powered turbine alternator</li>
          <li><strong>Battery Pack:</strong> High-temperature lithium batteries as backup</li>
          <li>Power requirement: 50-500 watts depending on tools</li>
        </ul>
      </div>
      
      <div style="background: white; padding: 1rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <h4 style="color: #1e3a5f; font-weight: bold; margin-bottom: 0.5rem;">2️⃣ Sensor Section</h4>
        <ul style="margin: 0; padding-left: 1.5rem; line-height: 1.7;">
          <li><strong>Directional Sensors:</strong> Tri-axial accelerometers and magnetometers</li>
          <li><strong>Formation Sensors:</strong> GR, Resistivity, Density, Neutron tools</li>
          <li><strong>Drilling Sensors:</strong> WOB, Torque, RPM, Vibration</li>
        </ul>
      </div>
      
      <div style="background: white; padding: 1rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <h4 style="color: #1e3a5f; font-weight: bold; margin-bottom: 0.5rem;">3️⃣ Telemetry Section</h4>
        <ul style="margin: 0; padding-left: 1.5rem; line-height: 1.7;">
          <li><strong>Mud Pulse:</strong> Pressure pulses through drilling fluid (most common)</li>
          <li><strong>EM Telemetry:</strong> Electromagnetic waves through formations</li>
          <li><strong>Wired Pipe:</strong> Cables integrated in drill pipe (fastest)</li>
        </ul>
      </div>
      
      <div style="background: white; padding: 1rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <h4 style="color: #1e3a5f; font-weight: bold; margin-bottom: 0.5rem;">4️⃣ Surface System</h4>
        <ul style="margin: 0; padding-left: 1.5rem; line-height: 1.7;">
          <li><strong>Pressure Transducer:</strong> Pulse detector in standpipe</li>
          <li><strong>Signal Processor:</strong> Signal processing and decoding unit</li>
          <li><strong>Software:</strong> Display, analysis, and recording applications</li>
        </ul>
      </div>
    </div>
  </div>

  <div style="background: linear-gradient(135deg, #065f46 0%, #047857 100%); color: white; padding: 1.25rem; border-radius: 10px; margin-top: 1.5rem;">
    <h4 style="font-weight: bold; margin-bottom: 0.75rem;">💡 Importance of MWD/LWD in Modern Drilling:</h4>
    <ul style="margin: 0; padding-left: 1.5rem; line-height: 1.8;">
      <li>Eliminates wireline trip time (Trip Time Savings)</li>
      <li>Enables real-time wellbore trajectory optimization (Geosteering)</li>
      <li>Real-time formation evaluation and reservoir identification</li>
      <li>Risk reduction through actual pressure monitoring (Pore Pressure Detection)</li>
      <li>Essential for directional and horizontal drilling operations</li>
    </ul>
  </div>
</section>
          `,
          keyTerms: [
            { term: 'MWD - Measurement While Drilling', definition: 'System providing real-time directional and mechanical measurements while drilling' },
            { term: 'LWD - Logging While Drilling', definition: 'System providing real-time petrophysical and geological formation measurements' },
            { term: 'Telemetry', definition: 'Data transmission system from bottomhole to surface - via mud pulse, EM, or wired pipe' },
            { term: 'Inclination', definition: 'Wellbore angle from vertical - measured by accelerometers' },
            { term: 'Azimuth', definition: 'Wellbore compass direction from magnetic or true north' },
            { term: 'Tool Face', definition: 'Steering tool orientation - required for directional well control' },
          ],
          practiceQuestion: {
            question: 'What is the main advantage of MWD/LWD over Wireline Logging in horizontal wells?',
            options: [
              'MWD/LWD is cheaper than Wireline',
              'MWD/LWD provides higher accuracy measurements',
              'MWD/LWD is the only practical method for logging horizontal wells',
              'MWD/LWD does not require calibration'
            ],
            correctAnswer: 2,
          },
        },
      },
    },
    // Day 2: MWD Directional Sensors and Surveys
    {
      day: 2,
      type: 'learning',
      content: {
        ar: {
          title: 'حساسات MWD الاتجاهية والمسوحات',
          explanation: `
<section style="margin-bottom: 2rem;">
  <h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; border-bottom: 3px solid #ff6b35; padding-bottom: 0.5rem;">
    🔷 حساسات MWD الاتجاهية: قلب التحكم في مسار البئر
  </h2>
  
  <div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
    <p style="font-size: 1.1rem; line-height: 1.8; margin: 0;">
      الحساسات الاتجاهية في نظام MWD هي العيون التي تُمكّن الحفّار من معرفة موقع واتجاه رأس الحفر بدقة عالية تحت الأرض. تعتمد على مزيج من <strong>Accelerometers</strong> لقياس الجاذبية و <strong>Magnetometers</strong> لقياس المجال المغناطيسي الأرضي لحساب الميل والاتجاه في الوقت الفعلي.
    </p>
  </div>

  <h3 style="color: #ff6b35; font-size: 1.25rem; font-weight: bold; margin-top: 1.5rem; margin-bottom: 1rem;">
    📌 مبدأ عمل الحساسات الاتجاهية
  </h3>
  
  <div style="display: grid; gap: 1rem; margin-bottom: 1.5rem;">
    <div style="background: #e8f4f8; padding: 1.25rem; border-radius: 10px; border-right: 4px solid #1e3a5f;">
      <h4 style="color: #1e3a5f; font-weight: bold; margin-bottom: 0.75rem;">🔹 Accelerometers - مقاييس التسارع</h4>
      <ul style="margin: 0; padding-right: 1.5rem; line-height: 1.8;">
        <li><strong>المبدأ:</strong> قياس تسارع الجاذبية الأرضية (G = 9.81 m/s²)</li>
        <li><strong>التكوين:</strong> 3 حساسات متعامدة (Gx, Gy, Gz)</li>
        <li><strong>الاستخدام:</strong> تحديد زاوية الميل (Inclination) ووجه الأداة الجاذبي (Gravity Tool Face)</li>
        <li><strong>الدقة:</strong> ± 0.1° للميل، ± 0.5° للـ Tool Face</li>
        <li><strong>القيد:</strong> لا تعمل جيداً عند الميل المنخفض جداً (&lt;3°)</li>
      </ul>
      <div style="background: white; padding: 1rem; border-radius: 8px; margin-top: 0.75rem;">
        <p style="margin: 0; font-family: monospace; font-size: 0.9rem; color: #1e3a5f;">
          <strong>حساب الميل:</strong><br>
          Inc = arccos(Gz / √(Gx² + Gy² + Gz²))
        </p>
      </div>
    </div>
    
    <div style="background: #fff3e8; padding: 1.25rem; border-radius: 10px; border-right: 4px solid #ff6b35;">
      <h4 style="color: #ff6b35; font-weight: bold; margin-bottom: 0.75rem;">🔸 Magnetometers - مقاييس المغناطيسية</h4>
      <ul style="margin: 0; padding-right: 1.5rem; line-height: 1.8;">
        <li><strong>المبدأ:</strong> قياس المجال المغناطيسي الأرضي (25-65 μT)</li>
        <li><strong>التكوين:</strong> 3 حساسات متعامدة (Bx, By, Bz)</li>
        <li><strong>الاستخدام:</strong> تحديد الاتجاه السمتي (Azimuth) ووجه الأداة المغناطيسي</li>
        <li><strong>الدقة:</strong> ± 1-2° للـ Azimuth حسب خط العرض</li>
        <li><strong>القيد:</strong> تتأثر بالتداخل المغناطيسي من الفولاذ والتكوينات</li>
      </ul>
      <div style="background: white; padding: 1rem; border-radius: 8px; margin-top: 0.75rem;">
        <p style="margin: 0; font-family: monospace; font-size: 0.9rem; color: #ff6b35;">
          <strong>حساب الاتجاه:</strong><br>
          Azi = arctan2(By_horizontal, Bx_horizontal) + Declination
        </p>
      </div>
    </div>
  </div>

  <h3 style="color: #ff6b35; font-size: 1.25rem; font-weight: bold; margin-top: 1.5rem; margin-bottom: 1rem;">
    📌 أنواع وجه الأداة (Tool Face)
  </h3>
  
  <div style="background: #f8f9fa; padding: 1.25rem; border-radius: 10px; margin-bottom: 1.5rem;">
    <div style="display: grid; gap: 1rem;">
      <div style="background: white; padding: 1rem; border-radius: 8px; border-right: 4px solid #22c55e;">
        <h4 style="color: #22c55e; font-weight: bold; margin-bottom: 0.5rem;">GTF - Gravity Tool Face (وجه الأداة الجاذبي)</h4>
        <ul style="margin: 0; padding-right: 1.5rem; line-height: 1.7;">
          <li><strong>يُستخدم عند:</strong> ميل أكبر من 5-8°</li>
          <li><strong>المرجع:</strong> اتجاه الأعلى (High Side)</li>
          <li><strong>القيم:</strong> 0° = للأعلى، 90° = لليمين، 180° = للأسفل، 270° = لليسار</li>
          <li><strong>المزايا:</strong> دقيق ومستقل عن التداخل المغناطيسي</li>
        </ul>
      </div>
      
      <div style="background: white; padding: 1rem; border-radius: 8px; border-right: 4px solid #3b82f6;">
        <h4 style="color: #3b82f6; font-weight: bold; margin-bottom: 0.5rem;">MTF - Magnetic Tool Face (وجه الأداة المغناطيسي)</h4>
        <ul style="margin: 0; padding-right: 1.5rem; line-height: 1.7;">
          <li><strong>يُستخدم عند:</strong> ميل أقل من 5°</li>
          <li><strong>المرجع:</strong> الشمال المغناطيسي</li>
          <li><strong>القيم:</strong> 0° = شمال، 90° = شرق، 180° = جنوب، 270° = غرب</li>
          <li><strong>القيد:</strong> يتأثر بالتداخل المغناطيسي</li>
        </ul>
      </div>
    </div>
  </div>

  <h3 style="color: #ff6b35; font-size: 1.25rem; font-weight: bold; margin-top: 1.5rem; margin-bottom: 1rem;">
    📌 أخطاء القياس وتصحيحاتها
  </h3>
  
  <div style="background: #e8f4f8; padding: 1.25rem; border-radius: 10px; margin-bottom: 1.5rem;">
    <div style="display: grid; gap: 1rem;">
      <div style="background: white; padding: 1rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <h4 style="color: #dc3545; font-weight: bold; margin-bottom: 0.5rem;">🔴 Magnetic Interference - التداخل المغناطيسي</h4>
        <ul style="margin: 0; padding-right: 1.5rem; line-height: 1.7;">
          <li><strong>المصادر:</strong> Drill Collars، BHA الفولاذي، تكوينات حديدية</li>
          <li><strong>التأثير:</strong> خطأ في Azimuth يصل إلى 10° أو أكثر</li>
          <li><strong>الحل:</strong> استخدام Non-Magnetic Drill Collars (Monel, Inconel)</li>
          <li><strong>القاعدة:</strong> طول NMDC ≥ 1 قدم لكل درجة ميل حتى 30°</li>
        </ul>
      </div>
      
      <div style="background: white; padding: 1rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <h4 style="color: #f59e0b; font-weight: bold; margin-bottom: 0.5rem;">🟠 Declination - الانحراف المغناطيسي</h4>
        <ul style="margin: 0; padding-right: 1.5rem; line-height: 1.7;">
          <li><strong>التعريف:</strong> الفرق بين الشمال المغناطيسي والحقيقي</li>
          <li><strong>التغير:</strong> يختلف حسب الموقع الجغرافي (-20° إلى +20°)</li>
          <li><strong>التصحيح:</strong> True Azimuth = Magnetic Azimuth + Declination</li>
          <li><strong>المصدر:</strong> خرائط IGRF أو قياسات موقعية</li>
        </ul>
      </div>
      
      <div style="background: white; padding: 1rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <h4 style="color: #8b5cf6; font-weight: bold; margin-bottom: 0.5rem;">🟣 Dip Angle - زاوية الغطس المغناطيسي</h4>
        <ul style="margin: 0; padding-right: 1.5rem; line-height: 1.7;">
          <li><strong>التعريف:</strong> زاوية المجال المغناطيسي مع الأفق</li>
          <li><strong>التأثير:</strong> يُستخدم للتحقق من صحة القياسات (QC)</li>
          <li><strong>القيمة النموذجية:</strong> 30-70° حسب خط العرض</li>
        </ul>
      </div>
    </div>
  </div>

  <h3 style="color: #ff6b35; font-size: 1.25rem; font-weight: bold; margin-top: 1.5rem; margin-bottom: 1rem;">
    📌 Station Survey vs Continuous Survey
  </h3>
  
  <div style="background: #fff3e8; padding: 1.25rem; border-radius: 10px; margin-bottom: 1.5rem;">
    <div style="display: grid; gap: 1rem;">
      <div style="background: white; padding: 1rem; border-radius: 8px;">
        <h4 style="color: #1e3a5f; font-weight: bold; margin-bottom: 0.5rem;">📍 Static Survey (المسح الثابت)</h4>
        <ul style="margin: 0; padding-right: 1.5rem; line-height: 1.7;">
          <li>يُجرى عند كل وصلة أنابيب (كل 30 قدم تقريباً)</li>
          <li>يتطلب إيقاف الضخ لمدة 30-60 ثانية</li>
          <li>دقة أعلى (الأداة ثابتة)</li>
          <li>يُستخدم لحساب مسار البئر الرسمي</li>
        </ul>
      </div>
      
      <div style="background: white; padding: 1rem; border-radius: 8px;">
        <h4 style="color: #ff6b35; font-weight: bold; margin-bottom: 0.5rem;">📈 Continuous Survey (المسح المستمر)</h4>
        <ul style="margin: 0; padding-right: 1.5rem; line-height: 1.7;">
          <li>قياسات مستمرة أثناء الحفر (كل 15-30 ثانية)</li>
          <li>أقل دقة بسبب الاهتزازات</li>
          <li>يُستخدم للمراقبة الآنية واتخاذ قرارات التوجيه</li>
          <li>يُصحَّح لاحقاً بمقارنته مع Static Surveys</li>
        </ul>
      </div>
    </div>
  </div>

  <div style="background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%); color: white; padding: 1.25rem; border-radius: 10px; margin-top: 1.5rem;">
    <h4 style="font-weight: bold; margin-bottom: 0.75rem;">⚠️ أفضل الممارسات لدقة المسح:</h4>
    <ul style="margin: 0; padding-right: 1.5rem; line-height: 1.8;">
      <li>استخدام NMDC بطول كافٍ (30-60 قدم عادةً)</li>
      <li>إجراء Static Survey عند كل وصلة في المقاطع الحرجة</li>
      <li>مراجعة Total Field و Dip Angle للتحقق من صحة القياسات</li>
      <li>تصحيح الـ Declination بدقة حسب الموقع والتاريخ</li>
      <li>مقارنة MWD surveys مع Gyro surveys عند الحاجة لدقة عالية</li>
    </ul>
  </div>
</section>
          `,
          keyTerms: [
            { term: 'Accelerometers', definition: 'حساسات قياس التسارع الجاذبي - تُحدد الميل ووجه الأداة الجاذبي (GTF)' },
            { term: 'Magnetometers', definition: 'حساسات قياس المجال المغناطيسي - تُحدد الاتجاه السمتي ووجه الأداة المغناطيسي (MTF)' },
            { term: 'Gravity Tool Face (GTF)', definition: 'وجه الأداة المرجعي للأعلى - يُستخدم عند الميل أكبر من 5°' },
            { term: 'Magnetic Tool Face (MTF)', definition: 'وجه الأداة المرجعي للشمال المغناطيسي - يُستخدم عند الميل الصغير' },
            { term: 'NMDC - Non-Magnetic Drill Collar', definition: 'أنابيب حفر غير مغناطيسية تُستخدم حول الحساسات لتقليل التداخل' },
            { term: 'Declination', definition: 'الفرق الزاوي بين الشمال المغناطيسي والشمال الحقيقي - يختلف حسب الموقع' },
          ],
          practiceQuestion: {
            question: 'متى يجب استخدام Gravity Tool Face (GTF) بدلاً من Magnetic Tool Face (MTF)؟',
            options: [
              'عندما يكون الميل أقل من 3 درجات',
              'عندما يكون الميل أكبر من 5-8 درجات',
              'عندما يكون هناك تداخل مغناطيسي عالٍ فقط',
              'GTF و MTF متطابقان دائماً'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'MWD Directional Sensors and Surveys',
          explanation: `
<section style="margin-bottom: 2rem;">
  <h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; border-bottom: 3px solid #ff6b35; padding-bottom: 0.5rem;">
    🔷 MWD Directional Sensors: The Heart of Wellbore Trajectory Control
  </h2>
  
  <div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
    <p style="font-size: 1.1rem; line-height: 1.8; margin: 0;">
      The directional sensors in MWD systems are the eyes that enable drillers to know the exact position and direction of the bit deep underground. They rely on a combination of <strong>Accelerometers</strong> measuring gravity and <strong>Magnetometers</strong> measuring Earth's magnetic field to calculate inclination and azimuth in real-time.
    </p>
  </div>

  <h3 style="color: #ff6b35; font-size: 1.25rem; font-weight: bold; margin-top: 1.5rem; margin-bottom: 1rem;">
    📌 Directional Sensor Operating Principles
  </h3>
  
  <div style="display: grid; gap: 1rem; margin-bottom: 1.5rem;">
    <div style="background: #e8f4f8; padding: 1.25rem; border-radius: 10px; border-left: 4px solid #1e3a5f;">
      <h4 style="color: #1e3a5f; font-weight: bold; margin-bottom: 0.75rem;">🔹 Accelerometers</h4>
      <ul style="margin: 0; padding-left: 1.5rem; line-height: 1.8;">
        <li><strong>Principle:</strong> Measure Earth's gravitational acceleration (G = 9.81 m/s²)</li>
        <li><strong>Configuration:</strong> 3 orthogonal sensors (Gx, Gy, Gz)</li>
        <li><strong>Usage:</strong> Determine Inclination and Gravity Tool Face</li>
        <li><strong>Accuracy:</strong> ± 0.1° for inclination, ± 0.5° for Tool Face</li>
        <li><strong>Limitation:</strong> Poor performance at very low inclination (&lt;3°)</li>
      </ul>
      <div style="background: white; padding: 1rem; border-radius: 8px; margin-top: 0.75rem;">
        <p style="margin: 0; font-family: monospace; font-size: 0.9rem; color: #1e3a5f;">
          <strong>Inclination Calculation:</strong><br>
          Inc = arccos(Gz / √(Gx² + Gy² + Gz²))
        </p>
      </div>
    </div>
    
    <div style="background: #fff3e8; padding: 1.25rem; border-radius: 10px; border-left: 4px solid #ff6b35;">
      <h4 style="color: #ff6b35; font-weight: bold; margin-bottom: 0.75rem;">🔸 Magnetometers</h4>
      <ul style="margin: 0; padding-left: 1.5rem; line-height: 1.8;">
        <li><strong>Principle:</strong> Measure Earth's magnetic field (25-65 μT)</li>
        <li><strong>Configuration:</strong> 3 orthogonal sensors (Bx, By, Bz)</li>
        <li><strong>Usage:</strong> Determine Azimuth and Magnetic Tool Face</li>
        <li><strong>Accuracy:</strong> ± 1-2° for Azimuth depending on latitude</li>
        <li><strong>Limitation:</strong> Affected by magnetic interference from steel and formations</li>
      </ul>
      <div style="background: white; padding: 1rem; border-radius: 8px; margin-top: 0.75rem;">
        <p style="margin: 0; font-family: monospace; font-size: 0.9rem; color: #ff6b35;">
          <strong>Azimuth Calculation:</strong><br>
          Azi = arctan2(By_horizontal, Bx_horizontal) + Declination
        </p>
      </div>
    </div>
  </div>

  <h3 style="color: #ff6b35; font-size: 1.25rem; font-weight: bold; margin-top: 1.5rem; margin-bottom: 1rem;">
    📌 Tool Face Types
  </h3>
  
  <div style="background: #f8f9fa; padding: 1.25rem; border-radius: 10px; margin-bottom: 1.5rem;">
    <div style="display: grid; gap: 1rem;">
      <div style="background: white; padding: 1rem; border-radius: 8px; border-left: 4px solid #22c55e;">
        <h4 style="color: #22c55e; font-weight: bold; margin-bottom: 0.5rem;">GTF - Gravity Tool Face</h4>
        <ul style="margin: 0; padding-left: 1.5rem; line-height: 1.7;">
          <li><strong>Used when:</strong> Inclination greater than 5-8°</li>
          <li><strong>Reference:</strong> High Side direction</li>
          <li><strong>Values:</strong> 0° = Up, 90° = Right, 180° = Down, 270° = Left</li>
          <li><strong>Advantage:</strong> Accurate and immune to magnetic interference</li>
        </ul>
      </div>
      
      <div style="background: white; padding: 1rem; border-radius: 8px; border-left: 4px solid #3b82f6;">
        <h4 style="color: #3b82f6; font-weight: bold; margin-bottom: 0.5rem;">MTF - Magnetic Tool Face</h4>
        <ul style="margin: 0; padding-left: 1.5rem; line-height: 1.7;">
          <li><strong>Used when:</strong> Inclination less than 5°</li>
          <li><strong>Reference:</strong> Magnetic North</li>
          <li><strong>Values:</strong> 0° = North, 90° = East, 180° = South, 270° = West</li>
          <li><strong>Limitation:</strong> Susceptible to magnetic interference</li>
        </ul>
      </div>
    </div>
  </div>

  <h3 style="color: #ff6b35; font-size: 1.25rem; font-weight: bold; margin-top: 1.5rem; margin-bottom: 1rem;">
    📌 Measurement Errors and Corrections
  </h3>
  
  <div style="background: #e8f4f8; padding: 1.25rem; border-radius: 10px; margin-bottom: 1.5rem;">
    <div style="display: grid; gap: 1rem;">
      <div style="background: white; padding: 1rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <h4 style="color: #dc3545; font-weight: bold; margin-bottom: 0.5rem;">🔴 Magnetic Interference</h4>
        <ul style="margin: 0; padding-left: 1.5rem; line-height: 1.7;">
          <li><strong>Sources:</strong> Drill Collars, steel BHA, ferromagnetic formations</li>
          <li><strong>Effect:</strong> Azimuth error up to 10° or more</li>
          <li><strong>Solution:</strong> Use Non-Magnetic Drill Collars (Monel, Inconel)</li>
          <li><strong>Rule:</strong> NMDC length ≥ 1 foot per degree of inclination up to 30°</li>
        </ul>
      </div>
      
      <div style="background: white; padding: 1rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <h4 style="color: #f59e0b; font-weight: bold; margin-bottom: 0.5rem;">🟠 Declination</h4>
        <ul style="margin: 0; padding-left: 1.5rem; line-height: 1.7;">
          <li><strong>Definition:</strong> Difference between magnetic and true north</li>
          <li><strong>Variation:</strong> Differs by geographic location (-20° to +20°)</li>
          <li><strong>Correction:</strong> True Azimuth = Magnetic Azimuth + Declination</li>
          <li><strong>Source:</strong> IGRF maps or site-specific measurements</li>
        </ul>
      </div>
      
      <div style="background: white; padding: 1rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <h4 style="color: #8b5cf6; font-weight: bold; margin-bottom: 0.5rem;">🟣 Dip Angle</h4>
        <ul style="margin: 0; padding-left: 1.5rem; line-height: 1.7;">
          <li><strong>Definition:</strong> Angle of magnetic field with horizontal plane</li>
          <li><strong>Effect:</strong> Used for measurement quality control (QC)</li>
          <li><strong>Typical Value:</strong> 30-70° depending on latitude</li>
        </ul>
      </div>
    </div>
  </div>

  <div style="background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%); color: white; padding: 1.25rem; border-radius: 10px; margin-top: 1.5rem;">
    <h4 style="font-weight: bold; margin-bottom: 0.75rem;">⚠️ Best Practices for Survey Accuracy:</h4>
    <ul style="margin: 0; padding-left: 1.5rem; line-height: 1.8;">
      <li>Use adequate NMDC length (typically 30-60 feet)</li>
      <li>Take Static Survey at every connection in critical sections</li>
      <li>Review Total Field and Dip Angle for measurement validation</li>
      <li>Apply accurate Declination correction based on location and date</li>
      <li>Compare MWD surveys with Gyro surveys when high accuracy required</li>
    </ul>
  </div>
</section>
          `,
          keyTerms: [
            { term: 'Accelerometers', definition: 'Gravitational acceleration sensors - determine Inclination and Gravity Tool Face (GTF)' },
            { term: 'Magnetometers', definition: 'Magnetic field sensors - determine Azimuth and Magnetic Tool Face (MTF)' },
            { term: 'Gravity Tool Face (GTF)', definition: 'High-side referenced tool face - used when inclination exceeds 5°' },
            { term: 'Magnetic Tool Face (MTF)', definition: 'Magnetic north referenced tool face - used at low inclination' },
            { term: 'NMDC - Non-Magnetic Drill Collar', definition: 'Non-magnetic drill collars used around sensors to minimize interference' },
            { term: 'Declination', definition: 'Angular difference between magnetic north and true north - varies by location' },
          ],
          practiceQuestion: {
            question: 'When should Gravity Tool Face (GTF) be used instead of Magnetic Tool Face (MTF)?',
            options: [
              'When inclination is less than 3 degrees',
              'When inclination is greater than 5-8 degrees',
              'Only when there is high magnetic interference',
              'GTF and MTF are always identical'
            ],
            correctAnswer: 1,
          },
        },
      },
    },
    // Day 3: Telemetry Systems - Mud Pulse, EM, and Wired Pipe
    {
      day: 3,
      type: 'learning',
      content: {
        ar: {
          title: 'أنظمة الإرسال: Mud Pulse و EM و Wired Pipe',
          explanation: `
<section style="margin-bottom: 2rem;">
  <h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; border-bottom: 3px solid #ff6b35; padding-bottom: 0.5rem;">
    🔷 أنظمة الإرسال (Telemetry): جسر البيانات من القاع إلى السطح
  </h2>
  
  <div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
    <p style="font-size: 1.1rem; line-height: 1.8; margin: 0;">
      نظام الإرسال (Telemetry) هو الرابط الحيوي الذي ينقل البيانات من أدوات MWD/LWD في القاع إلى السطح عبر آلاف الأقدام من أنابيب الحفر وسائل الحفر. اختيار النظام المناسب يؤثر مباشرة على <strong>سرعة نقل البيانات</strong> و<strong>موثوقية الإشارة</strong> و<strong>تكلفة العمليات</strong>.
    </p>
  </div>

  <h3 style="color: #ff6b35; font-size: 1.25rem; font-weight: bold; margin-top: 1.5rem; margin-bottom: 1rem;">
    📌 1. Mud Pulse Telemetry - إرسال النبضات الطينية
  </h3>
  
  <div style="background: #e8f4f8; padding: 1.25rem; border-radius: 10px; margin-bottom: 1.5rem;">
    <p style="margin-bottom: 1rem; line-height: 1.7;">
      النظام الأكثر شيوعاً - يستخدم نبضات الضغط في سائل الحفر لنقل البيانات إلى السطح.
    </p>
    
    <div style="display: grid; gap: 1rem;">
      <div style="background: white; padding: 1rem; border-radius: 8px;">
        <h4 style="color: #1e3a5f; font-weight: bold; margin-bottom: 0.5rem;">🔹 Positive Pulse (النبضة الموجبة)</h4>
        <ul style="margin: 0; padding-right: 1.5rem; line-height: 1.7;">
          <li>صمام يُقيّد التدفق مؤقتاً → زيادة الضغط</li>
          <li>أقل تأثراً بالحطام في السائل</li>
          <li>مناسب لسوائل الحفر الثقيلة</li>
          <li>سرعة: 1-6 bits/second</li>
        </ul>
      </div>
      
      <div style="background: white; padding: 1rem; border-radius: 8px;">
        <h4 style="color: #1e3a5f; font-weight: bold; margin-bottom: 0.5rem;">🔹 Negative Pulse (النبضة السالبة)</h4>
        <ul style="margin: 0; padding-right: 1.5rem; line-height: 1.7;">
          <li>صمام يُسرّب جزء من التدفق → انخفاض الضغط</li>
          <li>استجابة أسرع من النبضة الموجبة</li>
          <li>حساس للحطام - قد يسد الصمام</li>
          <li>سرعة: 3-10 bits/second</li>
        </ul>
      </div>
      
      <div style="background: white; padding: 1rem; border-radius: 8px;">
        <h4 style="color: #1e3a5f; font-weight: bold; margin-bottom: 0.5rem;">🔹 Continuous Wave (الموجة المستمرة)</h4>
        <ul style="margin: 0; padding-right: 1.5rem; line-height: 1.7;">
          <li>دوّار يُولّد موجات جيبية في الضغط</li>
          <li>أعلى سرعة بين أنظمة النبضات</li>
          <li>أكثر تعقيداً ميكانيكياً</li>
          <li>سرعة: 6-20 bits/second</li>
        </ul>
      </div>
    </div>
    
    <div style="background: #fef3c7; padding: 1rem; border-radius: 8px; margin-top: 1rem; border-right: 4px solid #f59e0b;">
      <h4 style="color: #92400e; font-weight: bold; margin-bottom: 0.5rem;">⚠️ قيود Mud Pulse:</h4>
      <ul style="margin: 0; padding-right: 1.5rem; line-height: 1.7;">
        <li>سرعة محدودة (1-20 bps) مقارنة بالاحتياجات الحديثة</li>
        <li>لا تعمل بدون تدوير المضخات</li>
        <li>تتأثر بالغاز في السائل (Gas-Cut Mud)</li>
        <li>تضعف مع زيادة العمق (&gt;20,000 ft تحدٍّ)</li>
      </ul>
    </div>
  </div>

  <h3 style="color: #ff6b35; font-size: 1.25rem; font-weight: bold; margin-top: 1.5rem; margin-bottom: 1rem;">
    📌 2. Electromagnetic Telemetry - الإرسال الكهرومغناطيسي
  </h3>
  
  <div style="background: #fff3e8; padding: 1.25rem; border-radius: 10px; margin-bottom: 1.5rem;">
    <p style="margin-bottom: 1rem; line-height: 1.7;">
      يستخدم موجات كهرومغناطيسية تنتقل عبر التكوينات الجيولوجية إلى السطح.
    </p>
    
    <div style="display: grid; gap: 1rem;">
      <div style="background: white; padding: 1rem; border-radius: 8px;">
        <h4 style="color: #ff6b35; font-weight: bold; margin-bottom: 0.5rem;">✅ المميزات:</h4>
        <ul style="margin: 0; padding-right: 1.5rem; line-height: 1.7;">
          <li>يعمل بدون تدوير المضخات (مثالي للـ Connections)</li>
          <li>غير متأثر بالغاز في السائل</li>
          <li>سرعة عالية نسبياً: 10-100 bps</li>
          <li>مناسب للآبار الأفقية والمياه العميقة</li>
        </ul>
      </div>
      
      <div style="background: white; padding: 1rem; border-radius: 8px;">
        <h4 style="color: #dc3545; font-weight: bold; margin-bottom: 0.5rem;">❌ القيود:</h4>
        <ul style="margin: 0; padding-right: 1.5rem; line-height: 1.7;">
          <li>يتأثر بمقاومة التكوينات (Formations)</li>
          <li>لا يعمل جيداً في الطبقات الملحية عالية التوصيل</li>
          <li>محدود العمق: حتى 8,000-12,000 ft عادةً</li>
          <li>يحتاج أقطاب سطحية (Surface Electrodes)</li>
        </ul>
      </div>
    </div>
    
    <div style="background: #e8f4f8; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
      <p style="margin: 0; line-height: 1.7;">
        <strong>💡 الاستخدام الأمثل:</strong> الآبار الضحلة إلى المتوسطة، العمليات بدون ضخ مستمر، والمناطق ذات المقاومة المتوسطة إلى العالية.
      </p>
    </div>
  </div>

  <h3 style="color: #ff6b35; font-size: 1.25rem; font-weight: bold; margin-top: 1.5rem; margin-bottom: 1rem;">
    📌 3. Wired Drill Pipe - أنابيب الحفر السلكية
  </h3>
  
  <div style="background: #e8f4f8; padding: 1.25rem; border-radius: 10px; margin-bottom: 1.5rem;">
    <p style="margin-bottom: 1rem; line-height: 1.7;">
      أحدث وأسرع تقنية - كابلات مدمجة داخل أنابيب الحفر مع موصلات عند كل وصلة.
    </p>
    
    <div style="display: grid; gap: 1rem;">
      <div style="background: white; padding: 1rem; border-radius: 8px;">
        <h4 style="color: #22c55e; font-weight: bold; margin-bottom: 0.5rem;">✅ المميزات المتقدمة:</h4>
        <ul style="margin: 0; padding-right: 1.5rem; line-height: 1.7;">
          <li><strong>سرعة فائقة:</strong> حتى 57,000 bps (1 Mbps نظرياً)</li>
          <li><strong>بيانات حية:</strong> مستمرة وبدون تأخير ملموس</li>
          <li><strong>ثنائية الاتجاه:</strong> يمكن إرسال أوامر للأدوات من السطح</li>
          <li><strong>غير محدودة العمق:</strong> تعمل لأي عمق</li>
          <li><strong>لا تتأثر بظروف السائل أو التكوينات</strong></li>
        </ul>
      </div>
      
      <div style="background: white; padding: 1rem; border-radius: 8px;">
        <h4 style="color: #dc3545; font-weight: bold; margin-bottom: 0.5rem;">❌ التحديات:</h4>
        <ul style="margin: 0; padding-right: 1.5rem; line-height: 1.7;">
          <li><strong>التكلفة:</strong> أنابيب أغلى بـ 3-5 أضعاف</li>
          <li><strong>الصيانة:</strong> الموصلات حساسة للتآكل</li>
          <li><strong>التوافق:</strong> تحتاج بنية تحتية خاصة</li>
          <li><strong>التوفر:</strong> محدود في بعض المناطق</li>
        </ul>
      </div>
    </div>
    
    <div style="background: #dcfce7; padding: 1rem; border-radius: 8px; margin-top: 1rem; border-right: 4px solid #22c55e;">
      <p style="margin: 0; line-height: 1.7;">
        <strong>🚀 التطبيقات المثلى:</strong> الآبار العميقة والمعقدة، عمليات Geosteering الدقيقة، HPHT، والآبار التي تتطلب بيانات عالية الدقة في الوقت الفعلي.
      </p>
    </div>
  </div>

  <h3 style="color: #ff6b35; font-size: 1.25rem; font-weight: bold; margin-top: 1.5rem; margin-bottom: 1rem;">
    📌 مقارنة شاملة لأنظمة الإرسال
  </h3>
  
  <div style="background: #f8f9fa; padding: 1.25rem; border-radius: 10px; margin-bottom: 1.5rem; overflow-x: auto;">
    <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem; min-width: 600px;">
      <thead>
        <tr style="background: #1e3a5f; color: white;">
          <th style="padding: 0.75rem; text-align: right; border: 1px solid #dee2e6;">المعيار</th>
          <th style="padding: 0.75rem; text-align: center; border: 1px solid #dee2e6;">Mud Pulse</th>
          <th style="padding: 0.75rem; text-align: center; border: 1px solid #dee2e6;">EM</th>
          <th style="padding: 0.75rem; text-align: center; border: 1px solid #dee2e6;">Wired Pipe</th>
        </tr>
      </thead>
      <tbody>
        <tr style="background: white;">
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; font-weight: bold;">سرعة البيانات</td>
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; text-align: center;">1-20 bps</td>
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; text-align: center;">10-100 bps</td>
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; text-align: center; color: green; font-weight: bold;">57,000+ bps</td>
        </tr>
        <tr style="background: #f8f9fa;">
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; font-weight: bold;">العمق الأقصى</td>
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; text-align: center;">25,000+ ft</td>
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; text-align: center;">8,000-12,000 ft</td>
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; text-align: center; color: green; font-weight: bold;">غير محدود</td>
        </tr>
        <tr style="background: white;">
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; font-weight: bold;">العمل بدون ضخ</td>
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; text-align: center; color: #dc3545;">لا</td>
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; text-align: center; color: green;">نعم</td>
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; text-align: center; color: green;">نعم</td>
        </tr>
        <tr style="background: #f8f9fa;">
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; font-weight: bold;">التكلفة النسبية</td>
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; text-align: center; color: green;">منخفضة</td>
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; text-align: center;">متوسطة</td>
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; text-align: center; color: #dc3545;">عالية جداً</td>
        </tr>
        <tr style="background: white;">
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; font-weight: bold;">الموثوقية</td>
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; text-align: center;">جيدة</td>
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; text-align: center;">متوسطة</td>
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; text-align: center; color: green; font-weight: bold;">ممتازة</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div style="background: linear-gradient(135deg, #065f46 0%, #047857 100%); color: white; padding: 1.25rem; border-radius: 10px; margin-top: 1.5rem;">
    <h4 style="font-weight: bold; margin-bottom: 0.75rem;">💡 اختيار نظام الإرسال المناسب:</h4>
    <ul style="margin: 0; padding-right: 1.5rem; line-height: 1.8;">
      <li><strong>Mud Pulse:</strong> الخيار الافتراضي للآبار العادية - موثوق وفعال من حيث التكلفة</li>
      <li><strong>EM:</strong> للآبار الضحلة أو عند الحاجة للبيانات أثناء التوصيلات</li>
      <li><strong>Wired Pipe:</strong> للعمليات المعقدة التي تتطلب بيانات عالية السرعة والدقة</li>
      <li><strong>Hybrid:</strong> بعض العمليات تستخدم نظامين معاً للاستفادة من مزايا كل منهما</li>
    </ul>
  </div>
</section>
          `,
          keyTerms: [
            { term: 'Mud Pulse Telemetry', definition: 'نظام إرسال يستخدم نبضات الضغط في سائل الحفر لنقل البيانات - الأكثر شيوعاً' },
            { term: 'Positive Pulse', definition: 'نبضة ضغط موجبة تُنشأ بتقييد التدفق مؤقتاً' },
            { term: 'Negative Pulse', definition: 'نبضة ضغط سالبة تُنشأ بتسريب جزء من التدفق إلى الخارج' },
            { term: 'Electromagnetic (EM) Telemetry', definition: 'نظام إرسال يستخدم موجات كهرومغناطيسية عبر التكوينات الجيولوجية' },
            { term: 'Wired Drill Pipe (WDP)', definition: 'أنابيب حفر مزودة بكابلات داخلية لنقل البيانات بسرعة فائقة' },
            { term: 'Data Rate (bps)', definition: 'سرعة نقل البيانات بالـ bits في الثانية - عامل حاسم في اختيار نظام الإرسال' },
          ],
          practiceQuestion: {
            question: 'أي نظام إرسال يوفر أعلى سرعة لنقل البيانات؟',
            options: [
              'Positive Mud Pulse',
              'Electromagnetic (EM)',
              'Wired Drill Pipe',
              'Negative Mud Pulse'
            ],
            correctAnswer: 2,
          },
        },
        en: {
          title: 'Telemetry Systems: Mud Pulse, EM, and Wired Pipe',
          explanation: `
<section style="margin-bottom: 2rem;">
  <h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; border-bottom: 3px solid #ff6b35; padding-bottom: 0.5rem;">
    🔷 Telemetry Systems: The Data Bridge from Bottomhole to Surface
  </h2>
  
  <div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
    <p style="font-size: 1.1rem; line-height: 1.8; margin: 0;">
      The telemetry system is the vital link that transmits data from MWD/LWD tools at bottomhole to the surface through thousands of feet of drill pipe and drilling fluid. Selecting the right system directly impacts <strong>data transmission speed</strong>, <strong>signal reliability</strong>, and <strong>operational costs</strong>.
    </p>
  </div>

  <h3 style="color: #ff6b35; font-size: 1.25rem; font-weight: bold; margin-top: 1.5rem; margin-bottom: 1rem;">
    📌 1. Mud Pulse Telemetry
  </h3>
  
  <div style="background: #e8f4f8; padding: 1.25rem; border-radius: 10px; margin-bottom: 1.5rem;">
    <p style="margin-bottom: 1rem; line-height: 1.7;">
      The most common system - uses pressure pulses in drilling fluid to transmit data to surface.
    </p>
    
    <div style="display: grid; gap: 1rem;">
      <div style="background: white; padding: 1rem; border-radius: 8px;">
        <h4 style="color: #1e3a5f; font-weight: bold; margin-bottom: 0.5rem;">🔹 Positive Pulse</h4>
        <ul style="margin: 0; padding-left: 1.5rem; line-height: 1.7;">
          <li>Valve temporarily restricts flow → pressure increase</li>
          <li>Less affected by debris in fluid</li>
          <li>Suitable for heavy drilling fluids</li>
          <li>Speed: 1-6 bits/second</li>
        </ul>
      </div>
      
      <div style="background: white; padding: 1rem; border-radius: 8px;">
        <h4 style="color: #1e3a5f; font-weight: bold; margin-bottom: 0.5rem;">🔹 Negative Pulse</h4>
        <ul style="margin: 0; padding-left: 1.5rem; line-height: 1.7;">
          <li>Valve bleeds off portion of flow → pressure decrease</li>
          <li>Faster response than positive pulse</li>
          <li>Sensitive to debris - valve may plug</li>
          <li>Speed: 3-10 bits/second</li>
        </ul>
      </div>
      
      <div style="background: white; padding: 1rem; border-radius: 8px;">
        <h4 style="color: #1e3a5f; font-weight: bold; margin-bottom: 0.5rem;">🔹 Continuous Wave</h4>
        <ul style="margin: 0; padding-left: 1.5rem; line-height: 1.7;">
          <li>Rotator generates sinusoidal pressure waves</li>
          <li>Highest speed among pulse systems</li>
          <li>More mechanically complex</li>
          <li>Speed: 6-20 bits/second</li>
        </ul>
      </div>
    </div>
    
    <div style="background: #fef3c7; padding: 1rem; border-radius: 8px; margin-top: 1rem; border-left: 4px solid #f59e0b;">
      <h4 style="color: #92400e; font-weight: bold; margin-bottom: 0.5rem;">⚠️ Mud Pulse Limitations:</h4>
      <ul style="margin: 0; padding-left: 1.5rem; line-height: 1.7;">
        <li>Limited speed (1-20 bps) compared to modern needs</li>
        <li>Does not work without pumps running</li>
        <li>Affected by gas in fluid (Gas-Cut Mud)</li>
        <li>Signal degrades with depth (&gt;20,000 ft challenging)</li>
      </ul>
    </div>
  </div>

  <h3 style="color: #ff6b35; font-size: 1.25rem; font-weight: bold; margin-top: 1.5rem; margin-bottom: 1rem;">
    📌 2. Electromagnetic (EM) Telemetry
  </h3>
  
  <div style="background: #fff3e8; padding: 1.25rem; border-radius: 10px; margin-bottom: 1.5rem;">
    <p style="margin-bottom: 1rem; line-height: 1.7;">
      Uses electromagnetic waves that propagate through geological formations to surface.
    </p>
    
    <div style="display: grid; gap: 1rem;">
      <div style="background: white; padding: 1rem; border-radius: 8px;">
        <h4 style="color: #22c55e; font-weight: bold; margin-bottom: 0.5rem;">✅ Advantages:</h4>
        <ul style="margin: 0; padding-left: 1.5rem; line-height: 1.7;">
          <li>Works without pumps running (ideal for Connections)</li>
          <li>Unaffected by gas in fluid</li>
          <li>Relatively high speed: 10-100 bps</li>
          <li>Suitable for horizontal wells and deepwater</li>
        </ul>
      </div>
      
      <div style="background: white; padding: 1rem; border-radius: 8px;">
        <h4 style="color: #dc3545; font-weight: bold; margin-bottom: 0.5rem;">❌ Limitations:</h4>
        <ul style="margin: 0; padding-left: 1.5rem; line-height: 1.7;">
          <li>Affected by formation resistivity</li>
          <li>Poor performance in conductive salt formations</li>
          <li>Depth limited: typically up to 8,000-12,000 ft</li>
          <li>Requires surface electrodes</li>
        </ul>
      </div>
    </div>
  </div>

  <h3 style="color: #ff6b35; font-size: 1.25rem; font-weight: bold; margin-top: 1.5rem; margin-bottom: 1rem;">
    📌 3. Wired Drill Pipe (WDP)
  </h3>
  
  <div style="background: #e8f4f8; padding: 1.25rem; border-radius: 10px; margin-bottom: 1.5rem;">
    <p style="margin-bottom: 1rem; line-height: 1.7;">
      Latest and fastest technology - cables integrated inside drill pipe with connectors at each joint.
    </p>
    
    <div style="display: grid; gap: 1rem;">
      <div style="background: white; padding: 1rem; border-radius: 8px;">
        <h4 style="color: #22c55e; font-weight: bold; margin-bottom: 0.5rem;">✅ Advanced Advantages:</h4>
        <ul style="margin: 0; padding-left: 1.5rem; line-height: 1.7;">
          <li><strong>Ultra-high speed:</strong> up to 57,000 bps (1 Mbps theoretical)</li>
          <li><strong>Live data:</strong> continuous with no perceptible delay</li>
          <li><strong>Bidirectional:</strong> can send commands to tools from surface</li>
          <li><strong>Unlimited depth:</strong> works at any depth</li>
          <li><strong>Unaffected by fluid conditions or formations</strong></li>
        </ul>
      </div>
      
      <div style="background: white; padding: 1rem; border-radius: 8px;">
        <h4 style="color: #dc3545; font-weight: bold; margin-bottom: 0.5rem;">❌ Challenges:</h4>
        <ul style="margin: 0; padding-left: 1.5rem; line-height: 1.7;">
          <li><strong>Cost:</strong> Pipe 3-5x more expensive</li>
          <li><strong>Maintenance:</strong> Connectors sensitive to wear</li>
          <li><strong>Compatibility:</strong> Requires special infrastructure</li>
          <li><strong>Availability:</strong> Limited in some regions</li>
        </ul>
      </div>
    </div>
  </div>

  <h3 style="color: #ff6b35; font-size: 1.25rem; font-weight: bold; margin-top: 1.5rem; margin-bottom: 1rem;">
    📌 Comprehensive Telemetry Comparison
  </h3>
  
  <div style="background: #f8f9fa; padding: 1.25rem; border-radius: 10px; margin-bottom: 1.5rem; overflow-x: auto;">
    <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem; min-width: 600px;">
      <thead>
        <tr style="background: #1e3a5f; color: white;">
          <th style="padding: 0.75rem; text-align: left; border: 1px solid #dee2e6;">Criteria</th>
          <th style="padding: 0.75rem; text-align: center; border: 1px solid #dee2e6;">Mud Pulse</th>
          <th style="padding: 0.75rem; text-align: center; border: 1px solid #dee2e6;">EM</th>
          <th style="padding: 0.75rem; text-align: center; border: 1px solid #dee2e6;">Wired Pipe</th>
        </tr>
      </thead>
      <tbody>
        <tr style="background: white;">
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; font-weight: bold;">Data Rate</td>
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; text-align: center;">1-20 bps</td>
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; text-align: center;">10-100 bps</td>
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; text-align: center; color: green; font-weight: bold;">57,000+ bps</td>
        </tr>
        <tr style="background: #f8f9fa;">
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; font-weight: bold;">Max Depth</td>
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; text-align: center;">25,000+ ft</td>
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; text-align: center;">8,000-12,000 ft</td>
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; text-align: center; color: green; font-weight: bold;">Unlimited</td>
        </tr>
        <tr style="background: white;">
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; font-weight: bold;">Works Without Pumps</td>
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; text-align: center; color: #dc3545;">No</td>
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; text-align: center; color: green;">Yes</td>
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; text-align: center; color: green;">Yes</td>
        </tr>
        <tr style="background: #f8f9fa;">
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; font-weight: bold;">Relative Cost</td>
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; text-align: center; color: green;">Low</td>
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; text-align: center;">Medium</td>
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; text-align: center; color: #dc3545;">Very High</td>
        </tr>
        <tr style="background: white;">
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; font-weight: bold;">Reliability</td>
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; text-align: center;">Good</td>
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; text-align: center;">Medium</td>
          <td style="padding: 0.75rem; border: 1px solid #dee2e6; text-align: center; color: green; font-weight: bold;">Excellent</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div style="background: linear-gradient(135deg, #065f46 0%, #047857 100%); color: white; padding: 1.25rem; border-radius: 10px; margin-top: 1.5rem;">
    <h4 style="font-weight: bold; margin-bottom: 0.75rem;">💡 Selecting the Right Telemetry System:</h4>
    <ul style="margin: 0; padding-left: 1.5rem; line-height: 1.8;">
      <li><strong>Mud Pulse:</strong> Default choice for standard wells - reliable and cost-effective</li>
      <li><strong>EM:</strong> For shallow wells or when data needed during connections</li>
      <li><strong>Wired Pipe:</strong> For complex operations requiring high-speed, high-accuracy real-time data</li>
      <li><strong>Hybrid:</strong> Some operations use two systems to leverage advantages of each</li>
    </ul>
  </div>
</section>
          `,
          keyTerms: [
            { term: 'Mud Pulse Telemetry', definition: 'Transmission system using pressure pulses in drilling fluid to transmit data - most common' },
            { term: 'Positive Pulse', definition: 'Positive pressure pulse created by temporarily restricting flow' },
            { term: 'Negative Pulse', definition: 'Negative pressure pulse created by bleeding off portion of flow' },
            { term: 'Electromagnetic (EM) Telemetry', definition: 'Transmission system using electromagnetic waves through geological formations' },
            { term: 'Wired Drill Pipe (WDP)', definition: 'Drill pipe with internal cables for ultra-high-speed data transmission' },
            { term: 'Data Rate (bps)', definition: 'Data transmission speed in bits per second - critical factor in telemetry selection' },
          ],
          practiceQuestion: {
            question: 'Which telemetry system provides the highest data transmission speed?',
            options: [
              'Positive Mud Pulse',
              'Electromagnetic (EM)',
              'Wired Drill Pipe',
              'Negative Mud Pulse'
            ],
            correctAnswer: 2,
          },
        },
      },
    },
    // Day 4: LWD Formation Evaluation Sensors
    {
      day: 4,
      type: 'learning',
      content: {
        ar: {
          title: 'حساسات LWD لتقييم التكوينات',
          explanation: `
<section style="margin-bottom: 2rem;">
  <h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; border-bottom: 3px solid #ff6b35; padding-bottom: 0.5rem;">
    🔷 حساسات LWD: نافذتك على خصائص التكوينات أثناء الحفر
  </h2>
  
  <div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
    <p style="font-size: 1.1rem; line-height: 1.8; margin: 0;">
      توفر أدوات <strong>LWD (Logging While Drilling)</strong> قياسات بتروفيزيائية حية للتكوينات أثناء الحفر، مما يُمكّن الجيولوجيين والمهندسين من تقييم الخزان وتحديد مناطق الهيدروكربونات واتخاذ قرارات التوجيه (Geosteering) في الوقت الفعلي - قبل أن يتأثر التكوين بغزو سائل الحفر.
    </p>
  </div>

  <h3 style="color: #ff6b35; font-size: 1.25rem; font-weight: bold; margin-top: 1.5rem; margin-bottom: 1rem;">
    📌 1. Gamma Ray (GR) - أشعة جاما
  </h3>
  
  <div style="background: #e8f4f8; padding: 1.25rem; border-radius: 10px; margin-bottom: 1.5rem;">
    <div style="display: grid; gap: 1rem;">
      <div style="background: white; padding: 1rem; border-radius: 8px;">
        <h4 style="color: #1e3a5f; font-weight: bold; margin-bottom: 0.5rem;">🔬 المبدأ:</h4>
        <p style="margin: 0; line-height: 1.7;">
          قياس الإشعاع الطبيعي المنبعث من التكوينات (K⁴⁰, U²³⁸, Th²³²). الطين والصخر الطيني يحتويان على نظائر مشعة أكثر من الرمل والكربونات.
        </p>
      </div>
      
      <div style="background: white; padding: 1rem; border-radius: 8px;">
        <h4 style="color: #22c55e; font-weight: bold; margin-bottom: 0.5rem;">✅ الاستخدامات:</h4>
        <ul style="margin: 0; padding-right: 1.5rem; line-height: 1.7;">
          <li><strong>Lithology Identification:</strong> تمييز الصخر الطيني (قراءة عالية) عن الرمل/الكربونات (قراءة منخفضة)</li>
          <li><strong>Shale Volume (Vsh):</strong> حساب نسبة الطين في الخزان</li>
          <li><strong>Correlation:</strong> ربط السجلات مع الآبار المجاورة</li>
          <li><strong>Geosteering:</strong> البقاء في منطقة الخزان (Low GR zone)</li>
        </ul>
      </div>
      
      <div style="background: #fef3c7; padding: 1rem; border-radius: 8px; border-right: 4px solid #f59e0b;">
        <p style="margin: 0; line-height: 1.7;">
          <strong>⚠️ ملاحظة:</strong> الوحدة هي API units. قراءة &lt;30 API = رمل نظيف، 30-75 = رمل طيني، &gt;75 = صخر طيني.
        </p>
      </div>
    </div>
  </div>

  <h3 style="color: #ff6b35; font-size: 1.25rem; font-weight: bold; margin-top: 1.5rem; margin-bottom: 1rem;">
    📌 2. Resistivity - المقاومة الكهربائية
  </h3>
  
  <div style="background: #fff3e8; padding: 1.25rem; border-radius: 10px; margin-bottom: 1.5rem;">
    <div style="display: grid; gap: 1rem;">
      <div style="background: white; padding: 1rem; border-radius: 8px;">
        <h4 style="color: #ff6b35; font-weight: bold; margin-bottom: 0.5rem;">🔬 المبدأ:</h4>
        <p style="margin: 0; line-height: 1.7;">
          قياس قدرة التكوين على مقاومة التيار الكهربائي. الهيدروكربونات (زيت/غاز) عازلة = مقاومة عالية. الماء المالح موصل = مقاومة منخفضة.
        </p>
      </div>
      
      <div style="background: white; padding: 1rem; border-radius: 8px;">
        <h4 style="color: #1e3a5f; font-weight: bold; margin-bottom: 0.5rem;">🔹 أنواع قياسات المقاومة في LWD:</h4>
        <ul style="margin: 0; padding-right: 1.5rem; line-height: 1.7;">
          <li><strong>Shallow Resistivity (Rs):</strong> المنطقة القريبة - تتأثر بغزو الطين</li>
          <li><strong>Medium Resistivity (Rm):</strong> منطقة الانتقال</li>
          <li><strong>Deep Resistivity (Rd):</strong> المنطقة البكر - تعكس السوائل الأصلية</li>
          <li><strong>Propagation Resistivity:</strong> يستخدم موجات EM عند ترددات مختلفة</li>
        </ul>
      </div>
      
      <div style="background: white; padding: 1rem; border-radius: 8px;">
        <h4 style="color: #22c55e; font-weight: bold; margin-bottom: 0.5rem;">✅ التفسير:</h4>
        <ul style="margin: 0; padding-right: 1.5rem; line-height: 1.7;">
          <li><strong>Rt &gt; 10 Ω·m + Low GR:</strong> احتمال هيدروكربونات</li>
          <li><strong>Rt &lt; 1 Ω·m:</strong> ماء مالح أو صخر طيني</li>
          <li><strong>Separation (Rd &gt; Rs):</strong> غزو ماء الحفر = هيدروكربونات محتملة</li>
        </ul>
      </div>
    </div>
  </div>

  <h3 style="color: #ff6b35; font-size: 1.25rem; font-weight: bold; margin-top: 1.5rem; margin-bottom: 1rem;">
    📌 3. Density (ρb) - الكثافة
  </h3>
  
  <div style="background: #e8f4f8; padding: 1.25rem; border-radius: 10px; margin-bottom: 1.5rem;">
    <div style="display: grid; gap: 1rem;">
      <div style="background: white; padding: 1rem; border-radius: 8px;">
        <h4 style="color: #1e3a5f; font-weight: bold; margin-bottom: 0.5rem;">🔬 المبدأ:</h4>
        <p style="margin: 0; line-height: 1.7;">
          مصدر Cs-137 يُطلق أشعة جاما تتشتت بالتكوين. كمية التشتت تعتمد على كثافة الإلكترونات (وبالتالي كثافة الصخر).
        </p>
      </div>
      
      <div style="background: white; padding: 1rem; border-radius: 8px;">
        <h4 style="color: #22c55e; font-weight: bold; margin-bottom: 0.5rem;">✅ الاستخدامات:</h4>
        <ul style="margin: 0; padding-right: 1.5rem; line-height: 1.7;">
          <li><strong>Porosity Calculation:</strong> Φ = (ρma - ρb) / (ρma - ρf)</li>
          <li><strong>Lithology:</strong> تحديد نوع الصخر (Sandstone ≈ 2.65, Limestone ≈ 2.71, Dolomite ≈ 2.87 g/cc)</li>
          <li><strong>Overburden Gradient:</strong> حساب تدرج الحمل الفوقي لتحليل الضغط</li>
          <li><strong>Gas Detection:</strong> الغاز يُقلل الكثافة الظاهرة بشكل كبير</li>
        </ul>
      </div>
      
      <div style="background: #fef3c7; padding: 1rem; border-radius: 8px; border-right: 4px solid #f59e0b;">
        <p style="margin: 0; line-height: 1.7;">
          <strong>⚠️ قيد مهم:</strong> أداة الكثافة تحتاج اتصال جيد بجدار البئر (Pad Contact). في الآبار الموسعة أو Washouts، تكون القراءات غير موثوقة.
        </p>
      </div>
    </div>
  </div>

  <h3 style="color: #ff6b35; font-size: 1.25rem; font-weight: bold; margin-top: 1.5rem; margin-bottom: 1rem;">
    📌 4. Neutron Porosity (ΦN) - المسامية النيوترونية
  </h3>
  
  <div style="background: #fff3e8; padding: 1.25rem; border-radius: 10px; margin-bottom: 1.5rem;">
    <div style="display: grid; gap: 1rem;">
      <div style="background: white; padding: 1rem; border-radius: 8px;">
        <h4 style="color: #ff6b35; font-weight: bold; margin-bottom: 0.5rem;">🔬 المبدأ:</h4>
        <p style="margin: 0; line-height: 1.7;">
          مصدر Am-Be يُطلق نيوترونات تتباطأ بالهيدروجين (الموجود أساساً في الماء والزيت). كلما زاد الهيدروجين = زادت المسامية الظاهرة.
        </p>
      </div>
      
      <div style="background: white; padding: 1rem; border-radius: 8px;">
        <h4 style="color: #22c55e; font-weight: bold; margin-bottom: 0.5rem;">✅ الاستخدامات:</h4>
        <ul style="margin: 0; padding-right: 1.5rem; line-height: 1.7;">
          <li><strong>Porosity:</strong> قياس مباشر للمسامية (معاير على Limestone)</li>
          <li><strong>Gas Detection:</strong> مع Density في Crossplot</li>
          <li><strong>Shale Effect:</strong> الطين يزيد القراءة (Bound Water)</li>
        </ul>
      </div>
      
      <div style="background: #dcfce7; padding: 1rem; border-radius: 8px; border-right: 4px solid #22c55e;">
        <h4 style="color: #166534; font-weight: bold; margin-bottom: 0.5rem;">💡 Gas Effect - تأثير الغاز:</h4>
        <p style="margin: 0; line-height: 1.7;">
          الغاز يحتوي هيدروجين أقل من السوائل → <strong>ΦN منخفضة + ρb منخفضة</strong> = "Gas Crossover" المميز على الـ Logs.
        </p>
      </div>
    </div>
  </div>

  <h3 style="color: #ff6b35; font-size: 1.25rem; font-weight: bold; margin-top: 1.5rem; margin-bottom: 1rem;">
    📌 5. Sonic (Δt) - السرعة الصوتية
  </h3>
  
  <div style="background: #e8f4f8; padding: 1.25rem; border-radius: 10px; margin-bottom: 1.5rem;">
    <div style="display: grid; gap: 1rem;">
      <div style="background: white; padding: 1rem; border-radius: 8px;">
        <h4 style="color: #1e3a5f; font-weight: bold; margin-bottom: 0.5rem;">🔬 المبدأ:</h4>
        <p style="margin: 0; line-height: 1.7;">
          قياس زمن انتقال الموجات الصوتية عبر التكوين. الوحدة: μs/ft (Slowness). الصخر الصلب = Δt منخفض، المسامي = Δt عالٍ.
        </p>
      </div>
      
      <div style="background: white; padding: 1rem; border-radius: 8px;">
        <h4 style="color: #22c55e; font-weight: bold; margin-bottom: 0.5rem;">✅ الاستخدامات:</h4>
        <ul style="margin: 0; padding-right: 1.5rem; line-height: 1.7;">
          <li><strong>Porosity (Wyllie):</strong> Φ = (Δt - Δtma) / (Δtf - Δtma)</li>
          <li><strong>Mechanical Properties:</strong> حساب معاملات المرونة (E, ν)</li>
          <li><strong>Pore Pressure:</strong> الضغط الزائد يزيد Δt</li>
          <li><strong>Seismic Tie:</strong> ربط السجلات بالمسح السيزمي</li>
        </ul>
      </div>
      
      <div style="background: white; padding: 1rem; border-radius: 8px;">
        <h4 style="color: #3b82f6; font-weight: bold; margin-bottom: 0.5rem;">📊 قيم نموذجية:</h4>
        <ul style="margin: 0; padding-right: 1.5rem; line-height: 1.7;">
          <li>Sandstone: 55-100 μs/ft</li>
          <li>Limestone: 47-55 μs/ft</li>
          <li>Dolomite: 43-47 μs/ft</li>
          <li>Shale: 60-170 μs/ft</li>
        </ul>
      </div>
    </div>
  </div>

  <div style="background: linear-gradient(135deg, #065f46 0%, #047857 100%); color: white; padding: 1.25rem; border-radius: 10px; margin-top: 1.5rem;">
    <h4 style="font-weight: bold; margin-bottom: 0.75rem;">💡 التكامل بين القياسات للتفسير الشامل:</h4>
    <ul style="margin: 0; padding-right: 1.5rem; line-height: 1.8;">
      <li><strong>GR + Resistivity:</strong> تحديد الليثولوجي ونوع المائع</li>
      <li><strong>Density + Neutron:</strong> حساب المسامية وكشف الغاز (Crossplot)</li>
      <li><strong>Sonic + Density:</strong> الخصائص الميكانيكية والضغط</li>
      <li><strong>جميع الأدوات معاً:</strong> تقييم شامل للخزان والقرارات الفورية</li>
    </ul>
  </div>
</section>
          `,
          keyTerms: [
            { term: 'Gamma Ray (GR)', definition: 'قياس الإشعاع الطبيعي للتكوينات - يُحدد الليثولوجي ونسبة الطين' },
            { term: 'Resistivity', definition: 'مقاومة التكوين للتيار الكهربائي - يُحدد نوع السوائل (هيدروكربونات/ماء)' },
            { term: 'Bulk Density (ρb)', definition: 'كثافة التكوين الإجمالية - تُستخدم لحساب المسامية والليثولوجي' },
            { term: 'Neutron Porosity (ΦN)', definition: 'المسامية المُقاسة بتباطؤ النيوترونات بالهيدروجين في المسام' },
            { term: 'Sonic Log (Δt)', definition: 'زمن انتقال الموجات الصوتية - يُستخدم للمسامية والخصائص الميكانيكية' },
            { term: 'Gas Crossover', definition: 'ظاهرة انفصال منحنيات Density و Neutron - مؤشر قوي على وجود الغاز' },
          ],
          practiceQuestion: {
            question: 'أي أداة LWD هي الأفضل لتحديد وجود الغاز في التكوين؟',
            options: [
              'Gamma Ray وحدها',
              'الجمع بين Density و Neutron (Crossplot)',
              'Sonic وحدها',
              'Resistivity العميق فقط'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'LWD Formation Evaluation Sensors',
          explanation: `
<section style="margin-bottom: 2rem;">
  <h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; border-bottom: 3px solid #ff6b35; padding-bottom: 0.5rem;">
    🔷 LWD Sensors: Your Window to Formation Properties While Drilling
  </h2>
  
  <div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
    <p style="font-size: 1.1rem; line-height: 1.8; margin: 0;">
      <strong>LWD (Logging While Drilling)</strong> tools provide live petrophysical measurements of formations while drilling, enabling geologists and engineers to evaluate the reservoir, identify hydrocarbon zones, and make geosteering decisions in real-time - before the formation is affected by mud invasion.
    </p>
  </div>

  <h3 style="color: #ff6b35; font-size: 1.25rem; font-weight: bold; margin-top: 1.5rem; margin-bottom: 1rem;">
    📌 1. Gamma Ray (GR)
  </h3>
  
  <div style="background: #e8f4f8; padding: 1.25rem; border-radius: 10px; margin-bottom: 1.5rem;">
    <div style="display: grid; gap: 1rem;">
      <div style="background: white; padding: 1rem; border-radius: 8px;">
        <h4 style="color: #1e3a5f; font-weight: bold; margin-bottom: 0.5rem;">🔬 Principle:</h4>
        <p style="margin: 0; line-height: 1.7;">
          Measures natural radiation emitted by formations (K⁴⁰, U²³⁸, Th²³²). Shale contains more radioactive isotopes than sand and carbonates.
        </p>
      </div>
      
      <div style="background: white; padding: 1rem; border-radius: 8px;">
        <h4 style="color: #22c55e; font-weight: bold; margin-bottom: 0.5rem;">✅ Applications:</h4>
        <ul style="margin: 0; padding-left: 1.5rem; line-height: 1.7;">
          <li><strong>Lithology Identification:</strong> Distinguish shale (high reading) from sand/carbonates (low reading)</li>
          <li><strong>Shale Volume (Vsh):</strong> Calculate clay content in reservoir</li>
          <li><strong>Correlation:</strong> Correlate logs with offset wells</li>
          <li><strong>Geosteering:</strong> Stay within reservoir zone (Low GR zone)</li>
        </ul>
      </div>
      
      <div style="background: #fef3c7; padding: 1rem; border-radius: 8px; border-left: 4px solid #f59e0b;">
        <p style="margin: 0; line-height: 1.7;">
          <strong>⚠️ Note:</strong> Unit is API units. Reading &lt;30 API = clean sand, 30-75 = shaly sand, &gt;75 = shale.
        </p>
      </div>
    </div>
  </div>

  <h3 style="color: #ff6b35; font-size: 1.25rem; font-weight: bold; margin-top: 1.5rem; margin-bottom: 1rem;">
    📌 2. Resistivity
  </h3>
  
  <div style="background: #fff3e8; padding: 1.25rem; border-radius: 10px; margin-bottom: 1.5rem;">
    <div style="display: grid; gap: 1rem;">
      <div style="background: white; padding: 1rem; border-radius: 8px;">
        <h4 style="color: #ff6b35; font-weight: bold; margin-bottom: 0.5rem;">🔬 Principle:</h4>
        <p style="margin: 0; line-height: 1.7;">
          Measures formation's ability to resist electrical current. Hydrocarbons (oil/gas) are insulators = high resistivity. Salt water is conductive = low resistivity.
        </p>
      </div>
      
      <div style="background: white; padding: 1rem; border-radius: 8px;">
        <h4 style="color: #1e3a5f; font-weight: bold; margin-bottom: 0.5rem;">🔹 LWD Resistivity Measurement Types:</h4>
        <ul style="margin: 0; padding-left: 1.5rem; line-height: 1.7;">
          <li><strong>Shallow Resistivity (Rs):</strong> Near zone - affected by mud invasion</li>
          <li><strong>Medium Resistivity (Rm):</strong> Transition zone</li>
          <li><strong>Deep Resistivity (Rd):</strong> Virgin zone - reflects original fluids</li>
          <li><strong>Propagation Resistivity:</strong> Uses EM waves at different frequencies</li>
        </ul>
      </div>
      
      <div style="background: white; padding: 1rem; border-radius: 8px;">
        <h4 style="color: #22c55e; font-weight: bold; margin-bottom: 0.5rem;">✅ Interpretation:</h4>
        <ul style="margin: 0; padding-left: 1.5rem; line-height: 1.7;">
          <li><strong>Rt &gt; 10 Ω·m + Low GR:</strong> Probable hydrocarbons</li>
          <li><strong>Rt &lt; 1 Ω·m:</strong> Salt water or shale</li>
          <li><strong>Separation (Rd &gt; Rs):</strong> Mud water invasion = possible hydrocarbons</li>
        </ul>
      </div>
    </div>
  </div>

  <h3 style="color: #ff6b35; font-size: 1.25rem; font-weight: bold; margin-top: 1.5rem; margin-bottom: 1rem;">
    📌 3. Density (ρb)
  </h3>
  
  <div style="background: #e8f4f8; padding: 1.25rem; border-radius: 10px; margin-bottom: 1.5rem;">
    <div style="display: grid; gap: 1rem;">
      <div style="background: white; padding: 1rem; border-radius: 8px;">
        <h4 style="color: #1e3a5f; font-weight: bold; margin-bottom: 0.5rem;">🔬 Principle:</h4>
        <p style="margin: 0; line-height: 1.7;">
          Cs-137 source emits gamma rays that scatter in the formation. Scattering amount depends on electron density (thus rock density).
        </p>
      </div>
      
      <div style="background: white; padding: 1rem; border-radius: 8px;">
        <h4 style="color: #22c55e; font-weight: bold; margin-bottom: 0.5rem;">✅ Applications:</h4>
        <ul style="margin: 0; padding-left: 1.5rem; line-height: 1.7;">
          <li><strong>Porosity Calculation:</strong> Φ = (ρma - ρb) / (ρma - ρf)</li>
          <li><strong>Lithology:</strong> Identify rock type (Sandstone ≈ 2.65, Limestone ≈ 2.71, Dolomite ≈ 2.87 g/cc)</li>
          <li><strong>Overburden Gradient:</strong> Calculate overburden for pressure analysis</li>
          <li><strong>Gas Detection:</strong> Gas significantly reduces apparent density</li>
        </ul>
      </div>
      
      <div style="background: #fef3c7; padding: 1rem; border-radius: 8px; border-left: 4px solid #f59e0b;">
        <p style="margin: 0; line-height: 1.7;">
          <strong>⚠️ Important Limitation:</strong> Density tool requires good borehole wall contact (Pad Contact). In enlarged holes or washouts, readings are unreliable.
        </p>
      </div>
    </div>
  </div>

  <h3 style="color: #ff6b35; font-size: 1.25rem; font-weight: bold; margin-top: 1.5rem; margin-bottom: 1rem;">
    📌 4. Neutron Porosity (ΦN)
  </h3>
  
  <div style="background: #fff3e8; padding: 1.25rem; border-radius: 10px; margin-bottom: 1.5rem;">
    <div style="display: grid; gap: 1rem;">
      <div style="background: white; padding: 1rem; border-radius: 8px;">
        <h4 style="color: #ff6b35; font-weight: bold; margin-bottom: 0.5rem;">🔬 Principle:</h4>
        <p style="margin: 0; line-height: 1.7;">
          Am-Be source emits neutrons that slow down by hydrogen (mainly in water and oil). More hydrogen = higher apparent porosity.
        </p>
      </div>
      
      <div style="background: white; padding: 1rem; border-radius: 8px;">
        <h4 style="color: #22c55e; font-weight: bold; margin-bottom: 0.5rem;">✅ Applications:</h4>
        <ul style="margin: 0; padding-left: 1.5rem; line-height: 1.7;">
          <li><strong>Porosity:</strong> Direct porosity measurement (calibrated on Limestone)</li>
          <li><strong>Gas Detection:</strong> Combined with Density in Crossplot</li>
          <li><strong>Shale Effect:</strong> Clay increases reading (Bound Water)</li>
        </ul>
      </div>
      
      <div style="background: #dcfce7; padding: 1rem; border-radius: 8px; border-left: 4px solid #22c55e;">
        <h4 style="color: #166534; font-weight: bold; margin-bottom: 0.5rem;">💡 Gas Effect:</h4>
        <p style="margin: 0; line-height: 1.7;">
          Gas contains less hydrogen than liquids → <strong>Low ΦN + Low ρb</strong> = characteristic "Gas Crossover" on logs.
        </p>
      </div>
    </div>
  </div>

  <h3 style="color: #ff6b35; font-size: 1.25rem; font-weight: bold; margin-top: 1.5rem; margin-bottom: 1rem;">
    📌 5. Sonic (Δt)
  </h3>
  
  <div style="background: #e8f4f8; padding: 1.25rem; border-radius: 10px; margin-bottom: 1.5rem;">
    <div style="display: grid; gap: 1rem;">
      <div style="background: white; padding: 1rem; border-radius: 8px;">
        <h4 style="color: #1e3a5f; font-weight: bold; margin-bottom: 0.5rem;">🔬 Principle:</h4>
        <p style="margin: 0; line-height: 1.7;">
          Measures acoustic wave travel time through formation. Unit: μs/ft (Slowness). Hard rock = low Δt, porous = high Δt.
        </p>
      </div>
      
      <div style="background: white; padding: 1rem; border-radius: 8px;">
        <h4 style="color: #22c55e; font-weight: bold; margin-bottom: 0.5rem;">✅ Applications:</h4>
        <ul style="margin: 0; padding-left: 1.5rem; line-height: 1.7;">
          <li><strong>Porosity (Wyllie):</strong> Φ = (Δt - Δtma) / (Δtf - Δtma)</li>
          <li><strong>Mechanical Properties:</strong> Calculate elastic moduli (E, ν)</li>
          <li><strong>Pore Pressure:</strong> Overpressure increases Δt</li>
          <li><strong>Seismic Tie:</strong> Correlate logs with seismic surveys</li>
        </ul>
      </div>
      
      <div style="background: white; padding: 1rem; border-radius: 8px;">
        <h4 style="color: #3b82f6; font-weight: bold; margin-bottom: 0.5rem;">📊 Typical Values:</h4>
        <ul style="margin: 0; padding-left: 1.5rem; line-height: 1.7;">
          <li>Sandstone: 55-100 μs/ft</li>
          <li>Limestone: 47-55 μs/ft</li>
          <li>Dolomite: 43-47 μs/ft</li>
          <li>Shale: 60-170 μs/ft</li>
        </ul>
      </div>
    </div>
  </div>

  <div style="background: linear-gradient(135deg, #065f46 0%, #047857 100%); color: white; padding: 1.25rem; border-radius: 10px; margin-top: 1.5rem;">
    <h4 style="font-weight: bold; margin-bottom: 0.75rem;">💡 Integrating Measurements for Comprehensive Interpretation:</h4>
    <ul style="margin: 0; padding-left: 1.5rem; line-height: 1.8;">
      <li><strong>GR + Resistivity:</strong> Determine lithology and fluid type</li>
      <li><strong>Density + Neutron:</strong> Calculate porosity and detect gas (Crossplot)</li>
      <li><strong>Sonic + Density:</strong> Mechanical properties and pressure</li>
      <li><strong>All tools together:</strong> Comprehensive reservoir evaluation and real-time decisions</li>
    </ul>
  </div>
</section>
          `,
          keyTerms: [
            { term: 'Gamma Ray (GR)', definition: 'Measures natural formation radioactivity - determines lithology and shale content' },
            { term: 'Resistivity', definition: 'Formation resistance to electrical current - determines fluid type (hydrocarbons/water)' },
            { term: 'Bulk Density (ρb)', definition: 'Total formation density - used for porosity and lithology calculation' },
            { term: 'Neutron Porosity (ΦN)', definition: 'Porosity measured by neutron slowing in hydrogen in pore spaces' },
            { term: 'Sonic Log (Δt)', definition: 'Acoustic wave travel time - used for porosity and mechanical properties' },
            { term: 'Gas Crossover', definition: 'Phenomenon of Density and Neutron curve separation - strong gas indicator' },
          ],
          practiceQuestion: {
            question: 'Which LWD tool is best for identifying gas presence in the formation?',
            options: [
              'Gamma Ray alone',
              'Combination of Density and Neutron (Crossplot)',
              'Sonic alone',
              'Deep Resistivity only'
            ],
            correctAnswer: 1,
          },
        },
      },
    },
    // Day 5: Review - Geosteering and Advanced Applications
    {
      day: 5,
      type: 'learning',
      content: {
        ar: {
          title: 'المراجعة: Geosteering والتطبيقات المتقدمة',
          explanation: `
<section style="margin-bottom: 2rem;">
  <h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; border-bottom: 3px solid #ff6b35; padding-bottom: 0.5rem;">
    🔷 Geosteering: التوجيه الجيولوجي في الوقت الفعلي
  </h2>
  
  <div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
    <p style="font-size: 1.1rem; line-height: 1.8; margin: 0;">
      <strong>Geosteering</strong> هو فن وعلم توجيه مسار البئر بناءً على البيانات الجيولوجية الحية من أدوات MWD/LWD للبقاء في منطقة الخزان المستهدفة (Sweet Spot). يجمع بين معلومات التكوينات من LWD وبيانات التوجيه من MWD لاتخاذ قرارات فورية تُحسّن الإنتاجية.
    </p>
  </div>

  <h3 style="color: #ff6b35; font-size: 1.25rem; font-weight: bold; margin-top: 1.5rem; margin-bottom: 1rem;">
    📌 مبادئ Geosteering الأساسية
  </h3>
  
  <div style="background: #e8f4f8; padding: 1.25rem; border-radius: 10px; margin-bottom: 1.5rem;">
    <div style="display: grid; gap: 1rem;">
      <div style="background: white; padding: 1rem; border-radius: 8px;">
        <h4 style="color: #1e3a5f; font-weight: bold; margin-bottom: 0.5rem;">🎯 الهدف الرئيسي:</h4>
        <ul style="margin: 0; padding-right: 1.5rem; line-height: 1.7;">
          <li>إبقاء البئر في منطقة الخزان ذات الجودة الأعلى</li>
          <li>تجنب الصخر الطيني (Shale) والمناطق المشبعة بالماء</li>
          <li>تعظيم طول الاتصال مع الخزان (Reservoir Contact)</li>
          <li>تحسين معدل الإنتاج وقيمة البئر</li>
        </ul>
      </div>
      
      <div style="background: white; padding: 1rem; border-radius: 8px;">
        <h4 style="color: #22c55e; font-weight: bold; margin-bottom: 0.5rem;">📊 المؤشرات المستخدمة:</h4>
        <ul style="margin: 0; padding-right: 1.5rem; line-height: 1.7;">
          <li><strong>Gamma Ray:</strong> ارتفاع مفاجئ = خروج من الخزان للصخر الطيني</li>
          <li><strong>Resistivity:</strong> انخفاض = اقتراب من منطقة الماء (OWC/GWC)</li>
          <li><strong>Density/Neutron:</strong> تغير المسامية = تغير خصائص الخزان</li>
          <li><strong>ROP Changes:</strong> تغير سرعة الحفر = تغير الليثولوجي</li>
        </ul>
      </div>
    </div>
  </div>

  <h3 style="color: #ff6b35; font-size: 1.25rem; font-weight: bold; margin-top: 1.5rem; margin-bottom: 1rem;">
    📌 استراتيجيات Geosteering
  </h3>
  
  <div style="background: #fff3e8; padding: 1.25rem; border-radius: 10px; margin-bottom: 1.5rem;">
    <div style="display: grid; gap: 1rem;">
      <div style="background: white; padding: 1rem; border-radius: 8px; border-right: 4px solid #22c55e;">
        <h4 style="color: #22c55e; font-weight: bold; margin-bottom: 0.5rem;">1️⃣ Landing the Well (إنزال البئر)</h4>
        <ul style="margin: 0; padding-right: 1.5rem; line-height: 1.7;">
          <li>تحديد قمة الخزان (Top of Reservoir) بدقة</li>
          <li>استخدام GR للكشف عن انتقال Shale → Sand</li>
          <li>بدء بناء الزاوية للدخول الأفقي في المكان الصحيح</li>
        </ul>
      </div>
      
      <div style="background: white; padding: 1rem; border-radius: 8px; border-right: 4px solid #3b82f6;">
        <h4 style="color: #3b82f6; font-weight: bold; margin-bottom: 0.5rem;">2️⃣ Staying in Zone (البقاء في المنطقة)</h4>
        <ul style="margin: 0; padding-right: 1.5rem; line-height: 1.7;">
          <li>مراقبة مستمرة للـ GR و Resistivity</li>
          <li>تعديل الميل (Inclination) للبقاء وسط الخزان</li>
          <li>تجنب الاقتراب من Roof (السقف) أو Floor (القاعدة)</li>
        </ul>
      </div>
      
      <div style="background: white; padding: 1rem; border-radius: 8px; border-right: 4px solid #f59e0b;">
        <h4 style="color: #f59e0b; font-weight: bold; margin-bottom: 0.5rem;">3️⃣ Avoiding Water (تجنب الماء)</h4>
        <ul style="margin: 0; padding-right: 1.5rem; line-height: 1.7;">
          <li>مراقبة Deep Resistivity لأي انخفاض</li>
          <li>رفع مسار البئر عند الاقتراب من OWC/GWC</li>
          <li>استخدام نماذج الخزان لتوقع موقع تلامس الموائع</li>
        </ul>
      </div>
    </div>
  </div>

  <h3 style="color: #ff6b35; font-size: 1.25rem; font-weight: bold; margin-top: 1.5rem; margin-bottom: 1rem;">
    📌 ملخص الأسبوع: أنظمة MWD/LWD
  </h3>
  
  <div style="background: #f8f9fa; padding: 1.25rem; border-radius: 10px; margin-bottom: 1.5rem;">
    <div style="display: grid; gap: 1rem;">
      <div style="background: #e8f4f8; padding: 1rem; border-radius: 8px;">
        <h4 style="color: #1e3a5f; font-weight: bold; margin-bottom: 0.5rem;">📅 اليوم 1: المقدمة</h4>
        <ul style="margin: 0; padding-right: 1.5rem; line-height: 1.7;">
          <li>الفرق بين MWD (اتجاهي/ميكانيكي) و LWD (بتروفيزيائي)</li>
          <li>المكونات الأساسية: Power، Sensors، Telemetry، Surface</li>
          <li>مميزات القياس أثناء الحفر مقارنة بـ Wireline</li>
        </ul>
      </div>
      
      <div style="background: #fff3e8; padding: 1rem; border-radius: 8px;">
        <h4 style="color: #ff6b35; font-weight: bold; margin-bottom: 0.5rem;">📅 اليوم 2: الحساسات الاتجاهية</h4>
        <ul style="margin: 0; padding-right: 1.5rem; line-height: 1.7;">
          <li>Accelerometers للميل و GTF</li>
          <li>Magnetometers للاتجاه و MTF</li>
          <li>أخطاء القياس: التداخل المغناطيسي، Declination، Dip</li>
          <li>Static vs Continuous Surveys</li>
        </ul>
      </div>
      
      <div style="background: #e8f4f8; padding: 1rem; border-radius: 8px;">
        <h4 style="color: #1e3a5f; font-weight: bold; margin-bottom: 0.5rem;">📅 اليوم 3: أنظمة الإرسال</h4>
        <ul style="margin: 0; padding-right: 1.5rem; line-height: 1.7;">
          <li>Mud Pulse: Positive، Negative، Continuous Wave</li>
          <li>EM Telemetry: للآبار الضحلة والعمل بدون ضخ</li>
          <li>Wired Pipe: السرعة الفائقة والاتصال ثنائي الاتجاه</li>
        </ul>
      </div>
      
      <div style="background: #fff3e8; padding: 1rem; border-radius: 8px;">
        <h4 style="color: #ff6b35; font-weight: bold; margin-bottom: 0.5rem;">📅 اليوم 4: حساسات LWD</h4>
        <ul style="margin: 0; padding-right: 1.5rem; line-height: 1.7;">
          <li>Gamma Ray: الليثولوجي ونسبة الطين</li>
          <li>Resistivity: نوع السوائل والغزو</li>
          <li>Density + Neutron: المسامية وكشف الغاز</li>
          <li>Sonic: الخصائص الميكانيكية والضغط</li>
        </ul>
      </div>
    </div>
  </div>

  <h3 style="color: #ff6b35; font-size: 1.25rem; font-weight: bold; margin-top: 1.5rem; margin-bottom: 1rem;">
    📌 التطبيقات المتقدمة لـ MWD/LWD
  </h3>
  
  <div style="background: #e8f4f8; padding: 1.25rem; border-radius: 10px; margin-bottom: 1.5rem;">
    <div style="display: grid; gap: 1rem;">
      <div style="background: white; padding: 1rem; border-radius: 8px;">
        <h4 style="color: #8b5cf6; font-weight: bold; margin-bottom: 0.5rem;">🔮 Azimuthal Measurements (القياسات السمتية)</h4>
        <p style="margin: 0; line-height: 1.7;">
          قياسات في اتجاهات متعددة حول البئر تُظهر موقع حدود الطبقات (Bed Boundaries) قبل الوصول إليها - تُمكّن من Proactive Geosteering.
        </p>
      </div>
      
      <div style="background: white; padding: 1rem; border-radius: 8px;">
        <h4 style="color: #ec4899; font-weight: bold; margin-bottom: 0.5rem;">📡 Deep Resistivity for Look-Ahead</h4>
        <p style="margin: 0; line-height: 1.7;">
          أدوات مقاومة عميقة ترى 15-30 متراً حول البئر - تكشف تلامس الموائع والحدود الجيولوجية مسبقاً.
        </p>
      </div>
      
      <div style="background: white; padding: 1rem; border-radius: 8px;">
        <h4 style="color: #06b6d4; font-weight: bold; margin-bottom: 0.5rem;">🌊 Pressure While Drilling (PWD)</h4>
        <p style="margin: 0; line-height: 1.7;">
          قياس ECD الفعلي في القاع - حاسم لإدارة الضغط في MPD والآبار ذات النافذة الضيقة.
        </p>
      </div>
      
      <div style="background: white; padding: 1rem; border-radius: 8px;">
        <h4 style="color: #84cc16; font-weight: bold; margin-bottom: 0.5rem;">📸 LWD Imaging</h4>
        <p style="margin: 0; line-height: 1.7;">
          صور عالية الدقة لجدار البئر (Resistivity/Density Images) - تكشف الكسور والطبقات والبنية الجيولوجية.
        </p>
      </div>
    </div>
  </div>

  <div style="background: linear-gradient(135deg, #065f46 0%, #047857 100%); color: white; padding: 1.25rem; border-radius: 10px; margin-top: 1.5rem;">
    <h4 style="font-weight: bold; margin-bottom: 0.75rem;">💡 النقاط الرئيسية للتذكر:</h4>
    <ul style="margin: 0; padding-right: 1.5rem; line-height: 1.8;">
      <li>MWD/LWD ضروريان للحفر الموجه والأفقي الحديث</li>
      <li>Telemetry Speed يحدد كمية ونوعية البيانات المتاحة</li>
      <li>تكامل القياسات (GR + Res + Den/Neu + Sonic) يُعطي صورة كاملة</li>
      <li>Geosteering يُحوّل البيانات إلى قرارات تُعظّم قيمة البئر</li>
      <li>التقنيات المتقدمة (Azimuthal، Look-Ahead) تُمكّن من التوجيه الاستباقي</li>
    </ul>
  </div>
</section>
          `,
          keyTerms: [
            { term: 'Geosteering', definition: 'توجيه مسار البئر بناءً على بيانات LWD الحية للبقاء في منطقة الخزان المثلى' },
            { term: 'Sweet Spot', definition: 'المنطقة المثلى من الخزان ذات أفضل خصائص المسامية والنفاذية والتشبع' },
            { term: 'Azimuthal Measurements', definition: 'قياسات في اتجاهات متعددة حول البئر لتحديد موقع حدود الطبقات' },
            { term: 'Look-Ahead', definition: 'قدرة الأدوات على رؤية التكوينات قبل الوصول إليها بالحفر' },
            { term: 'PWD - Pressure While Drilling', definition: 'قياس الضغط الفعلي في القاع أثناء الحفر - حاسم لإدارة الضغط' },
            { term: 'LWD Imaging', definition: 'صور عالية الدقة لجدار البئر من أدوات LWD تكشف البنية الجيولوجية' },
          ],
          practiceQuestion: {
            question: 'ما هو الهدف الرئيسي من Geosteering في الآبار الأفقية؟',
            options: [
              'زيادة سرعة الحفر فقط',
              'إبقاء البئر في منطقة الخزان ذات الجودة الأعلى وتجنب الماء',
              'تقليل استهلاك سائل الحفر',
              'تقليل عدد Survey Stations'
            ],
            correctAnswer: 1,
          },
        },
        en: {
          title: 'Review: Geosteering and Advanced Applications',
          explanation: `
<section style="margin-bottom: 2rem;">
  <h2 style="color: #1e3a5f; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; border-bottom: 3px solid #ff6b35; padding-bottom: 0.5rem;">
    🔷 Geosteering: Real-Time Geological Guidance
  </h2>
  
  <div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
    <p style="font-size: 1.1rem; line-height: 1.8; margin: 0;">
      <strong>Geosteering</strong> is the art and science of guiding the wellbore path based on live geological data from MWD/LWD tools to stay within the target reservoir zone (Sweet Spot). It combines formation information from LWD with directional data from MWD to make real-time decisions that optimize productivity.
    </p>
  </div>

  <h3 style="color: #ff6b35; font-size: 1.25rem; font-weight: bold; margin-top: 1.5rem; margin-bottom: 1rem;">
    📌 Geosteering Principles
  </h3>
  
  <div style="background: #e8f4f8; padding: 1.25rem; border-radius: 10px; margin-bottom: 1.5rem;">
    <div style="display: grid; gap: 1rem;">
      <div style="background: white; padding: 1rem; border-radius: 8px;">
        <h4 style="color: #1e3a5f; font-weight: bold; margin-bottom: 0.5rem;">🎯 Main Objective:</h4>
        <ul style="margin: 0; padding-left: 1.5rem; line-height: 1.7;">
          <li>Keep wellbore in highest quality reservoir zone</li>
          <li>Avoid shale and water-saturated zones</li>
          <li>Maximize reservoir contact length</li>
          <li>Optimize production rate and well value</li>
        </ul>
      </div>
      
      <div style="background: white; padding: 1rem; border-radius: 8px;">
        <h4 style="color: #22c55e; font-weight: bold; margin-bottom: 0.5rem;">📊 Indicators Used:</h4>
        <ul style="margin: 0; padding-left: 1.5rem; line-height: 1.7;">
          <li><strong>Gamma Ray:</strong> Sudden increase = exiting reservoir into shale</li>
          <li><strong>Resistivity:</strong> Decrease = approaching water zone (OWC/GWC)</li>
          <li><strong>Density/Neutron:</strong> Porosity change = reservoir property change</li>
          <li><strong>ROP Changes:</strong> Drilling speed change = lithology change</li>
        </ul>
      </div>
    </div>
  </div>

  <h3 style="color: #ff6b35; font-size: 1.25rem; font-weight: bold; margin-top: 1.5rem; margin-bottom: 1rem;">
    📌 Geosteering Strategies
  </h3>
  
  <div style="background: #fff3e8; padding: 1.25rem; border-radius: 10px; margin-bottom: 1.5rem;">
    <div style="display: grid; gap: 1rem;">
      <div style="background: white; padding: 1rem; border-radius: 8px; border-left: 4px solid #22c55e;">
        <h4 style="color: #22c55e; font-weight: bold; margin-bottom: 0.5rem;">1️⃣ Landing the Well</h4>
        <ul style="margin: 0; padding-left: 1.5rem; line-height: 1.7;">
          <li>Identify Top of Reservoir precisely</li>
          <li>Use GR to detect Shale → Sand transition</li>
          <li>Start angle build for horizontal entry at correct location</li>
        </ul>
      </div>
      
      <div style="background: white; padding: 1rem; border-radius: 8px; border-left: 4px solid #3b82f6;">
        <h4 style="color: #3b82f6; font-weight: bold; margin-bottom: 0.5rem;">2️⃣ Staying in Zone</h4>
        <ul style="margin: 0; padding-left: 1.5rem; line-height: 1.7;">
          <li>Continuous monitoring of GR and Resistivity</li>
          <li>Adjust inclination to stay in reservoir center</li>
          <li>Avoid approaching Roof or Floor</li>
        </ul>
      </div>
      
      <div style="background: white; padding: 1rem; border-radius: 8px; border-left: 4px solid #f59e0b;">
        <h4 style="color: #f59e0b; font-weight: bold; margin-bottom: 0.5rem;">3️⃣ Avoiding Water</h4>
        <ul style="margin: 0; padding-left: 1.5rem; line-height: 1.7;">
          <li>Monitor Deep Resistivity for any decrease</li>
          <li>Steer wellpath up when approaching OWC/GWC</li>
          <li>Use reservoir models to predict fluid contact location</li>
        </ul>
      </div>
    </div>
  </div>

  <h3 style="color: #ff6b35; font-size: 1.25rem; font-weight: bold; margin-top: 1.5rem; margin-bottom: 1rem;">
    📌 Week Summary: MWD/LWD Systems
  </h3>
  
  <div style="background: #f8f9fa; padding: 1.25rem; border-radius: 10px; margin-bottom: 1.5rem;">
    <div style="display: grid; gap: 1rem;">
      <div style="background: #e8f4f8; padding: 1rem; border-radius: 8px;">
        <h4 style="color: #1e3a5f; font-weight: bold; margin-bottom: 0.5rem;">📅 Day 1: Introduction</h4>
        <ul style="margin: 0; padding-left: 1.5rem; line-height: 1.7;">
          <li>Difference between MWD (directional/mechanical) and LWD (petrophysical)</li>
          <li>Main components: Power, Sensors, Telemetry, Surface</li>
          <li>While-drilling measurement advantages vs Wireline</li>
        </ul>
      </div>
      
      <div style="background: #fff3e8; padding: 1rem; border-radius: 8px;">
        <h4 style="color: #ff6b35; font-weight: bold; margin-bottom: 0.5rem;">📅 Day 2: Directional Sensors</h4>
        <ul style="margin: 0; padding-left: 1.5rem; line-height: 1.7;">
          <li>Accelerometers for Inclination and GTF</li>
          <li>Magnetometers for Azimuth and MTF</li>
          <li>Measurement errors: Magnetic interference, Declination, Dip</li>
          <li>Static vs Continuous Surveys</li>
        </ul>
      </div>
      
      <div style="background: #e8f4f8; padding: 1rem; border-radius: 8px;">
        <h4 style="color: #1e3a5f; font-weight: bold; margin-bottom: 0.5rem;">📅 Day 3: Telemetry Systems</h4>
        <ul style="margin: 0; padding-left: 1.5rem; line-height: 1.7;">
          <li>Mud Pulse: Positive, Negative, Continuous Wave</li>
          <li>EM Telemetry: For shallow wells and pumps-off operation</li>
          <li>Wired Pipe: Ultra-high speed and bidirectional communication</li>
        </ul>
      </div>
      
      <div style="background: #fff3e8; padding: 1rem; border-radius: 8px;">
        <h4 style="color: #ff6b35; font-weight: bold; margin-bottom: 0.5rem;">📅 Day 4: LWD Sensors</h4>
        <ul style="margin: 0; padding-left: 1.5rem; line-height: 1.7;">
          <li>Gamma Ray: Lithology and shale content</li>
          <li>Resistivity: Fluid type and invasion</li>
          <li>Density + Neutron: Porosity and gas detection</li>
          <li>Sonic: Mechanical properties and pressure</li>
        </ul>
      </div>
    </div>
  </div>

  <h3 style="color: #ff6b35; font-size: 1.25rem; font-weight: bold; margin-top: 1.5rem; margin-bottom: 1rem;">
    📌 Advanced MWD/LWD Applications
  </h3>
  
  <div style="background: #e8f4f8; padding: 1.25rem; border-radius: 10px; margin-bottom: 1.5rem;">
    <div style="display: grid; gap: 1rem;">
      <div style="background: white; padding: 1rem; border-radius: 8px;">
        <h4 style="color: #8b5cf6; font-weight: bold; margin-bottom: 0.5rem;">🔮 Azimuthal Measurements</h4>
        <p style="margin: 0; line-height: 1.7;">
          Measurements in multiple directions around the wellbore showing bed boundary locations before reaching them - enables Proactive Geosteering.
        </p>
      </div>
      
      <div style="background: white; padding: 1rem; border-radius: 8px;">
        <h4 style="color: #ec4899; font-weight: bold; margin-bottom: 0.5rem;">📡 Deep Resistivity for Look-Ahead</h4>
        <p style="margin: 0; line-height: 1.7;">
          Deep resistivity tools that see 15-30 meters around the wellbore - detect fluid contacts and geological boundaries in advance.
        </p>
      </div>
      
      <div style="background: white; padding: 1rem; border-radius: 8px;">
        <h4 style="color: #06b6d4; font-weight: bold; margin-bottom: 0.5rem;">🌊 Pressure While Drilling (PWD)</h4>
        <p style="margin: 0; line-height: 1.7;">
          Measures actual ECD at bottomhole - critical for pressure management in MPD and narrow-window wells.
        </p>
      </div>
      
      <div style="background: white; padding: 1rem; border-radius: 8px;">
        <h4 style="color: #84cc16; font-weight: bold; margin-bottom: 0.5rem;">📸 LWD Imaging</h4>
        <p style="margin: 0; line-height: 1.7;">
          High-resolution borehole wall images (Resistivity/Density Images) - reveal fractures, bedding, and geological structure.
        </p>
      </div>
    </div>
  </div>

  <div style="background: linear-gradient(135deg, #065f46 0%, #047857 100%); color: white; padding: 1.25rem; border-radius: 10px; margin-top: 1.5rem;">
    <h4 style="font-weight: bold; margin-bottom: 0.75rem;">💡 Key Points to Remember:</h4>
    <ul style="margin: 0; padding-left: 1.5rem; line-height: 1.8;">
      <li>MWD/LWD are essential for modern directional and horizontal drilling</li>
      <li>Telemetry Speed determines quantity and quality of available data</li>
      <li>Measurement integration (GR + Res + Den/Neu + Sonic) gives complete picture</li>
      <li>Geosteering transforms data into decisions that maximize well value</li>
      <li>Advanced technologies (Azimuthal, Look-Ahead) enable proactive steering</li>
    </ul>
  </div>
</section>
          `,
          keyTerms: [
            { term: 'Geosteering', definition: 'Guiding wellbore path based on live LWD data to stay in optimal reservoir zone' },
            { term: 'Sweet Spot', definition: 'Optimal reservoir zone with best porosity, permeability, and saturation properties' },
            { term: 'Azimuthal Measurements', definition: 'Measurements in multiple directions around wellbore to locate bed boundaries' },
            { term: 'Look-Ahead', definition: 'Tool capability to see formations before drilling reaches them' },
            { term: 'PWD - Pressure While Drilling', definition: 'Real-time bottomhole pressure measurement - critical for pressure management' },
            { term: 'LWD Imaging', definition: 'High-resolution borehole wall images from LWD tools revealing geological structure' },
          ],
          practiceQuestion: {
            question: 'What is the main objective of Geosteering in horizontal wells?',
            options: [
              'Increase drilling speed only',
              'Keep wellbore in highest quality reservoir zone and avoid water',
              'Reduce drilling fluid consumption',
              'Reduce number of Survey Stations'
            ],
            correctAnswer: 1,
          },
        },
      },
    },
    // Day 6: Quiz
    {
      day: 6,
      type: 'quiz',
      content: {
        ar: {
          title: 'اختبار أنظمة MWD & LWD',
          explanation: 'اختبر معلوماتك عن أنظمة القياس والتسجيل أثناء الحفر',
          keyTerms: [],
        },
        en: {
          title: 'MWD & LWD Systems Quiz',
          explanation: 'Test your knowledge of Measurement and Logging While Drilling systems',
          keyTerms: [],
        },
      },
      quiz: {
        ar: [
          {
            question: 'ما الفرق الرئيسي بين MWD و LWD؟',
            options: [
              'MWD للقياسات الاتجاهية والميكانيكية، LWD للقياسات البتروفيزيائية',
              'MWD للآبار العميقة فقط، LWD للآبار الضحلة',
              'MWD أغلى من LWD',
              'لا يوجد فرق - المصطلحان متطابقان'
            ],
            correctAnswer: 0
          },
          {
            question: 'أي حساس يُستخدم لقياس زاوية الميل (Inclination)؟',
            options: [
              'Magnetometer',
              'Accelerometer',
              'Gamma Ray Detector',
              'Resistivity Sensor'
            ],
            correctAnswer: 1
          },
          {
            question: 'متى يُفضل استخدام Gravity Tool Face (GTF) بدلاً من Magnetic Tool Face (MTF)؟',
            options: [
              'عند ميل أقل من 3 درجات',
              'عند ميل أكبر من 5-8 درجات',
              'في جميع الحالات',
              'عند وجود تداخل كهربائي فقط'
            ],
            correctAnswer: 1
          },
          {
            question: 'ما الهدف من استخدام Non-Magnetic Drill Collars (NMDC)؟',
            options: [
              'تقليل وزن سلسلة الحفر',
              'تقليل التداخل المغناطيسي حول حساسات الاتجاه',
              'زيادة سرعة الحفر',
              'تحسين نقل البيانات'
            ],
            correctAnswer: 1
          },
          {
            question: 'أي نظام إرسال (Telemetry) يوفر أعلى سرعة لنقل البيانات؟',
            options: [
              'Positive Mud Pulse',
              'Electromagnetic (EM)',
              'Wired Drill Pipe',
              'Negative Mud Pulse'
            ],
            correctAnswer: 2
          },
          {
            question: 'ما القيد الرئيسي لنظام Mud Pulse Telemetry؟',
            options: [
              'لا يعمل في الآبار العميقة',
              'لا يعمل بدون تشغيل المضخات',
              'يحتاج أقطاب سطحية',
              'محدود بـ 1,000 قدم فقط'
            ],
            correctAnswer: 1
          },
          {
            question: 'أي أداة LWD تُستخدم لتحديد الليثولوجي (نوع الصخر)؟',
            options: [
              'Resistivity',
              'Gamma Ray',
              'Sonic',
              'Pressure Sensor'
            ],
            correctAnswer: 1
          },
          {
            question: 'ما هي ظاهرة "Gas Crossover" في سجلات LWD؟',
            options: [
              'ارتفاع Gamma Ray في وجود الغاز',
              'انفصال منحنيات Density و Neutron عند وجود الغاز',
              'انخفاض المقاومة في وجود الغاز',
              'زيادة Sonic في وجود الغاز'
            ],
            correctAnswer: 1
          },
          {
            question: 'ما الهدف الرئيسي من Geosteering؟',
            options: [
              'زيادة سرعة الحفر',
              'إبقاء البئر في منطقة الخزان المثلى وتجنب الماء',
              'تقليل استهلاك سائل الحفر',
              'تقليل عدد المسوحات'
            ],
            correctAnswer: 1
          },
          {
            question: 'أي قياس يُشير إلى الاقتراب من منطقة الماء (OWC) أثناء Geosteering؟',
            options: [
              'ارتفاع Gamma Ray',
              'انخفاض Deep Resistivity',
              'زيادة Sonic',
              'انخفاض Temperature'
            ],
            correctAnswer: 1
          }
        ],
        en: [
          {
            question: 'What is the main difference between MWD and LWD?',
            options: [
              'MWD for directional/mechanical measurements, LWD for petrophysical measurements',
              'MWD for deep wells only, LWD for shallow wells',
              'MWD is more expensive than LWD',
              'No difference - terms are identical'
            ],
            correctAnswer: 0
          },
          {
            question: 'Which sensor is used to measure Inclination?',
            options: [
              'Magnetometer',
              'Accelerometer',
              'Gamma Ray Detector',
              'Resistivity Sensor'
            ],
            correctAnswer: 1
          },
          {
            question: 'When is Gravity Tool Face (GTF) preferred over Magnetic Tool Face (MTF)?',
            options: [
              'At inclination less than 3 degrees',
              'At inclination greater than 5-8 degrees',
              'In all cases',
              'Only when there is electrical interference'
            ],
            correctAnswer: 1
          },
          {
            question: 'What is the purpose of Non-Magnetic Drill Collars (NMDC)?',
            options: [
              'Reduce drill string weight',
              'Reduce magnetic interference around directional sensors',
              'Increase drilling speed',
              'Improve data transmission'
            ],
            correctAnswer: 1
          },
          {
            question: 'Which telemetry system provides the highest data transmission speed?',
            options: [
              'Positive Mud Pulse',
              'Electromagnetic (EM)',
              'Wired Drill Pipe',
              'Negative Mud Pulse'
            ],
            correctAnswer: 2
          },
          {
            question: 'What is the main limitation of Mud Pulse Telemetry?',
            options: [
              'Does not work in deep wells',
              'Does not work without pumps running',
              'Requires surface electrodes',
              'Limited to 1,000 ft only'
            ],
            correctAnswer: 1
          },
          {
            question: 'Which LWD tool is used for lithology identification (rock type)?',
            options: [
              'Resistivity',
              'Gamma Ray',
              'Sonic',
              'Pressure Sensor'
            ],
            correctAnswer: 1
          },
          {
            question: 'What is the "Gas Crossover" phenomenon in LWD logs?',
            options: [
              'Gamma Ray increase in presence of gas',
              'Separation of Density and Neutron curves when gas is present',
              'Resistivity decrease in presence of gas',
              'Sonic increase in presence of gas'
            ],
            correctAnswer: 1
          },
          {
            question: 'What is the main objective of Geosteering?',
            options: [
              'Increase drilling speed',
              'Keep wellbore in optimal reservoir zone and avoid water',
              'Reduce drilling fluid consumption',
              'Reduce number of surveys'
            ],
            correctAnswer: 1
          },
          {
            question: 'Which measurement indicates approaching the water zone (OWC) during Geosteering?',
            options: [
              'Gamma Ray increase',
              'Deep Resistivity decrease',
              'Sonic increase',
              'Temperature decrease'
            ],
            correctAnswer: 1
          }
        ]
      }
    },
    // Day 7: Project
    {
      day: 7,
      type: 'project',
      content: {
        ar: {
          title: 'مشروع تحليل بيانات MWD/LWD وتوصيات Geosteering',
          explanation: 'طبق ما تعلمته في تحليل بيانات حقيقية واتخاذ قرارات التوجيه',
          keyTerms: [],
        },
        en: {
          title: 'MWD/LWD Data Analysis and Geosteering Recommendations Project',
          explanation: 'Apply what you learned in analyzing real data and making steering decisions',
          keyTerms: [],
        },
      },
      project: {
        ar: {
          title: 'تحليل بيانات MWD/LWD وتوصيات Geosteering',
          description: 'أنت مهندس MWD/LWD في بئر أفقي لإنتاج النفط. بناءً على البيانات التالية، حلل الوضع وقدم توصياتك.',
          instructions: [
            'حلل البيانات التالية من LWD في آخر 100 قدم محفورة:',
            '- Gamma Ray: بدأ عند 25 API وارتفع تدريجياً إلى 65 API',
            '- Deep Resistivity: انخفض من 45 Ω·m إلى 12 Ω·m',
            '- Density: 2.35 g/cc ثابتة',
            '- Neutron Porosity: 22% ثابتة',
            '- الميل الحالي: 88° والاتجاه: 275°',
            'أجب على الأسئلة التالية:',
            '1. ما الذي تُشير إليه التغيرات في Gamma Ray و Resistivity؟',
            '2. هل هناك مؤشر على وجود غاز؟ علل إجابتك.',
            '3. ما الإجراء الذي توصي به للـ Geosteering؟ (زيادة الميل/تقليله/الاستمرار)',
            '4. ما هي المخاطر المحتملة إذا استمررت في الحفر بنفس المسار؟',
            '5. ما هي أدوات LWD الإضافية التي تتمنى وجودها لاتخاذ قرار أفضل؟'
          ],
          submissionType: 'text' as const,
        },
        en: {
          title: 'MWD/LWD Data Analysis and Geosteering Recommendations',
          description: 'You are an MWD/LWD engineer on a horizontal oil production well. Based on the following data, analyze the situation and provide your recommendations.',
          instructions: [
            'Analyze the following LWD data from the last 100 ft drilled:',
            '- Gamma Ray: Started at 25 API and gradually increased to 65 API',
            '- Deep Resistivity: Decreased from 45 Ω·m to 12 Ω·m',
            '- Density: Stable at 2.35 g/cc',
            '- Neutron Porosity: Stable at 22%',
            '- Current Inclination: 88° and Azimuth: 275°',
            'Answer the following questions:',
            '1. What do the Gamma Ray and Resistivity changes indicate?',
            '2. Is there any gas indication? Explain your answer.',
            '3. What Geosteering action do you recommend? (Increase inclination/decrease/continue)',
            '4. What are the potential risks if drilling continues on the same path?',
            '5. What additional LWD tools would you wish to have for better decision-making?'
          ],
          submissionType: 'text' as const,
        },
      },
    },
  ],
};
