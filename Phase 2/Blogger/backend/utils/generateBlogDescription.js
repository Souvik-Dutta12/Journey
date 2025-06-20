import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const generateBlogDescription = async (title, shortDescription) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `Write a detailed 20 to 30 line paragraph wise blog description based on the following title and short description:\n\nTitle: ${title}\nShort Description: ${shortDescription}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text.trim();
  } catch (error) {
    console.error("AI generation error:", error);
    return null;
  }
};
