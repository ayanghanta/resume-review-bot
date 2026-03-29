import { GoogleGenAI } from "@google/genai";
import fs from "fs";

const RESPONCE_SCHEMA = {
  type: "object",
  properties: {
    summary: { type: "string" },
    strengths: { type: "array", items: { type: "string" } },
    weaknesses: { type: "array", items: { type: "string" } },
    suggestions: { type: "array", items: { type: "string" } },
    ats_score: { type: "number" },
    overall_score: { type: "number" },
  },
  required: [
    "summary",
    "strengths",
    "weaknesses",
    "suggestions",
    "ats_score",
    "overall_score",
  ],
};

export async function useGeminiAi(resumeContnet) {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GRMINI_API_KEY });

    const prompt = `You are an expert resume reviewer and ATS evaluator.

    Analyze the following resume and provide:
    - A professional summary (evaluation) of the resume's overall impact.
    - Key strengths of the resume
    - Weaknesses and areas of improvement
    - Suggestions to improve ATS compatibility and relevance for the job role
    - A score out of 10 based on overall quality

    Evaluation Criteria:
      1. Impact: Does the user use the STAR method? Are there quantifiable metrics?
      2. Skills: Are technical skills clearly categorized and relevant?
      3. ATS Compatibility: Is the structure logical for a parser?
      4. Professionalism: Is the tone appropriate and the grammar perfect?

    Be specific, constructive, and avoid generic feedback.The summary should be 2-3 sentence overview of the resume's quality and the candidate's professional standing.

    Resume Content:
    ${resumeContnet}`;

    const config = {
      responseMimeType: "application/json",
      responseSchema: RESPONCE_SCHEMA,
      temperature: +process.env.GEMINI_MODEL_TEMPERATURE,
    };

    const contents = [
      {
        role: "user",
        parts: [{ text: prompt }],
      },
    ];
    const response = await ai.models.generateContent({
      model: process.env.GEMINI_MODEL,
      contents,
      config,
    });

    const actualResponse = response?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!actualResponse) throw new Error("Inavlid JSON from AI");

    const data = JSON.parse(actualResponse);
    // fs.writeFileSync("./res.json", JSON.stringify(actualResponse));

    // console.log(responce);

    return data;
  } catch (err) {
    throw new Error(err.message || "AI Model is not avaialable currently!");
  }
}
