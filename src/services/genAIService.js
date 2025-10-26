const { GoogleGenAI } = require("@google/genai");

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

async function callGenAI(text) {
  if (!GEMINI_API_KEY) {
    const msg = "Missing GEMINI_API_KEY";
    console.error(msg);
    return { success: false, status: 500, error: msg };
  }

  if (!text || typeof text !== "string") {
    const msg = "Invalid input: 'text' must be a non-empty string";
    console.error(msg);
    return { success: false, status: 400, error: msg };
  }

  try {
    const client = new GoogleGenAI({
      apiKey: GEMINI_API_KEY,
      vertexai: true,
    });

    console.log("######## calling callGenAI");

    const response = await client.models.generateContent({
      model: "gemini-2.5-flash",
      contents: text,
    });
    console.log("respons :", response);

    // attempt to extract text safely; keep raw response for callers
    const textResult =
      response?.text ?? response?.output?.[0]?.content?.[0]?.text ?? null;

    return {
      success: true,
      status: 200,
      data: {
        responseId: response.responseId,
        createTime: response.createTime,
        text: textResult,
      },
    };
  } catch (error) {
    console.error("Error calling GenAI:", error);
    return {
      success: false,
      status: 500,
      error: error?.message || String(error),
      details: error,
    };
  }
}

module.exports = callGenAI;
