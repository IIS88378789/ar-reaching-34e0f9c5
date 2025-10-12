import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          {
            role: "system",
            content: "你是一位專業的航空科技產業文案撰寫專家，擅長撰寫品質政策相關的專業內容。"
          },
          {
            role: "user",
            content: `請為航空科技公司撰寫四個品質政策的專業說明文案。每個政策需要2-3句話，約40-60字，語氣專業且具體。

政策主題：
1. 教育訓練 - 關於員工能力提升和風險預防
2. 服務熱忱 - 關於完善服務和精度可靠
3. 品質保固 - 關於專業用心和保固放心
4. 永續經營 - 關於不斷提升和客戶滿意

請以 JSON 格式回覆，格式如下：
{
  "policies": [
    {
      "title": "教育訓練",
      "content": "專業文案內容"
    },
    {
      "title": "服務熱忱",
      "content": "專業文案內容"
    },
    {
      "title": "品質保固",
      "content": "專業文案內容"
    },
    {
      "title": "永續經營",
      "content": "專業文案內容"
    }
  ]
}`
          }
        ],
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "已達使用限制，請稍後再試。" }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "需要充值額度，請前往 Lovable 工作區設定。" }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(JSON.stringify({ error: "AI 服務錯誤" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;
    
    if (!content) {
      throw new Error("AI 回應格式錯誤");
    }

    // Parse the JSON response from AI
    const parsedContent = JSON.parse(content);
    
    return new Response(JSON.stringify(parsedContent), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("generate-quality-policy error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "未知錯誤" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
