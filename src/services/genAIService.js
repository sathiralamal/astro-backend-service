const { GoogleGenAI } = require("@google/genai");

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

async function callGenAI(text) {
  const client = new GoogleGenAI({
    apiKey: GEMINI_API_KEY,
    vertexai: true,
  });
  console.log("######## calling callGenAI");
  console.log("API KEY :" + GEMINI_API_KEY);

  const response = await client.models.generateContent({
    model: "gemini-2.5-flash",
    contents: text,
  });

  console.log(response.text);

  return response.text;
}

module.exports = callGenAI;
