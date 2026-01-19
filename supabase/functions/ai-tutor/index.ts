import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages, language } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const systemPrompt = language === 'ar' 
      ? `أنت مساعد تعليمي متخصص في هندسة الحفر والنفط. مهمتك هي:
        - الإجابة على أسئلة الطلاب حول هندسة الحفر والنفط
        - شرح المفاهيم التقنية بطريقة واضحة وبسيطة
        - تقديم أمثلة عملية من الصناعة
        - استخدام المصطلحات العربية والإنجليزية عند الحاجة
        
        كن ودوداً ومشجعاً. أجب بإيجاز ووضوح. إذا كان السؤال خارج نطاق هندسة الحفر، اعتذر بلطف ووجه الطالب للسؤال عن مواضيع الحفر.`
      : `You are an educational assistant specialized in drilling and petroleum engineering. Your role is to:
        - Answer student questions about drilling and petroleum engineering
        - Explain technical concepts clearly and simply
        - Provide practical examples from the industry
        - Use both Arabic and English terminology when helpful
        
        Be friendly and encouraging. Answer concisely and clearly. If the question is outside drilling engineering, politely redirect the student to ask about drilling topics.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limits exceeded, please try again later." }), 
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Payment required, please add funds." }), 
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(
        JSON.stringify({ error: "AI gateway error" }), 
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("ai-tutor error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), 
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
