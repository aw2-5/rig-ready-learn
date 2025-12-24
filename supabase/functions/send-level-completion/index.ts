import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface LevelCompletionRequest {
  email: string;
  userName: string;
  level: number;
  averageScore?: number;
  language: 'en' | 'ar';
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Received request to send-level-completion");

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    console.log("Handling CORS preflight");
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, userName, level, averageScore, language }: LevelCompletionRequest = await req.json();
    
    console.log(`Sending level completion email to ${email} for level ${level}`);

    const isArabic = language === 'ar';
    
    const levelNames = {
      1: isArabic ? 'المستوى الأول - الأساسيات' : 'Level 1 - Fundamentals',
      2: isArabic ? 'المستوى الثاني - المتوسط' : 'Level 2 - Intermediate',
      3: isArabic ? 'المستوى الثالث - المتقدم' : 'Level 3 - Advanced',
    };

    const nextLevelMessages = {
      1: isArabic 
        ? 'أنت الآن مؤهل للمستوى الثاني! استمر في رحلتك التعليمية.' 
        : 'You are now qualified for Level 2! Continue your learning journey.',
      2: isArabic 
        ? 'أنت الآن مؤهل للمستوى الثالث! أنت على وشك أن تصبح خبيراً.' 
        : 'You are now qualified for Level 3! You are on your way to becoming an expert.',
      3: isArabic 
        ? 'تهانينا! لقد أكملت جميع المستويات وأصبحت خبيراً في هندسة الحفر!' 
        : 'Congratulations! You have completed all levels and become a drilling engineering expert!',
    };

    const subject = isArabic 
      ? `🎉 تهانينا! أكملت ${levelNames[level as 1 | 2 | 3]}` 
      : `🎉 Congratulations! You completed ${levelNames[level as 1 | 2 | 3]}`;

    const scoreText = averageScore !== undefined 
      ? (isArabic ? `متوسط درجاتك: ${averageScore}%` : `Your average score: ${averageScore}%`)
      : '';

    const htmlContent = `
      <!DOCTYPE html>
      <html dir="${isArabic ? 'rtl' : 'ltr'}" lang="${language}">
      <head>
        <meta charset="UTF-8">
        <style>
          body {
            font-family: ${isArabic ? "'Segoe UI', Tahoma, Arial, sans-serif" : "'Segoe UI', Tahoma, Arial, sans-serif"};
            background-color: #f5f5f5;
            margin: 0;
            padding: 20px;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          }
          .header {
            background: linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%);
            color: white;
            padding: 40px 30px;
            text-align: center;
          }
          .trophy {
            font-size: 64px;
            margin-bottom: 16px;
          }
          .header h1 {
            margin: 0;
            font-size: 28px;
          }
          .content {
            padding: 40px 30px;
            text-align: center;
          }
          .greeting {
            font-size: 20px;
            color: #374151;
            margin-bottom: 20px;
          }
          .level-badge {
            display: inline-block;
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            color: white;
            padding: 12px 24px;
            border-radius: 30px;
            font-size: 18px;
            font-weight: bold;
            margin: 20px 0;
          }
          .score {
            font-size: 24px;
            color: #0ea5e9;
            font-weight: bold;
            margin: 20px 0;
          }
          .next-level {
            background-color: #f0fdfa;
            border-radius: 12px;
            padding: 20px;
            margin: 20px 0;
            color: #0f766e;
          }
          .footer {
            background-color: #f9fafb;
            padding: 20px;
            text-align: center;
            color: #6b7280;
            font-size: 14px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="trophy">🏆</div>
            <h1>${isArabic ? 'إنجاز رائع!' : 'Amazing Achievement!'}</h1>
          </div>
          <div class="content">
            <p class="greeting">
              ${isArabic ? `مرحباً ${userName}!` : `Hello ${userName}!`}
            </p>
            <p>
              ${isArabic 
                ? 'نحن فخورون بإعلامك أنك أكملت بنجاح:' 
                : 'We are proud to inform you that you have successfully completed:'}
            </p>
            <div class="level-badge">
              ${levelNames[level as 1 | 2 | 3]}
            </div>
            ${scoreText ? `<p class="score">${scoreText}</p>` : ''}
            <div class="next-level">
              <p>${nextLevelMessages[level as 1 | 2 | 3]}</p>
            </div>
          </div>
          <div class="footer">
            <p>${isArabic ? 'PetroLearn - منصة تعلم هندسة البترول' : 'PetroLearn - Petroleum Engineering Learning Platform'}</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const emailResponse = await resend.emails.send({
      from: "PetroLearn <onboarding@resend.dev>",
      to: [email],
      subject: subject,
      html: htmlContent,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-level-completion function:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

Deno.serve(handler);
