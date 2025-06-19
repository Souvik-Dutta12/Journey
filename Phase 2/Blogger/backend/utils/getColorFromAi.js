import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const getGeminiColorForTag = async (tagName) => {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const prompt = `Suggest a Tailwind CSS color class (e.g.,blue-500, green-600, etc.) that visually represents the concept of the tag '${tagName}'. Only return color like green-500 dont give the prvious one ie,if the color text-green-500 return only green-500.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text().trim();

    // Clean unexpected output (just in case)
    const match = text.match(/text-\w+-\d{3}/);
    return match ? match[0] : "gray-500";
}