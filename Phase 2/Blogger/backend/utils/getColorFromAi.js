import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const getGeminiColorForTag = async (tagName) => {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const prompt = `You are a Tailwind CSS assistant.
Given a tag name (like "JavaScript", "React", "MongoDB", etc.), return only the most suitable Tailwind CSS text color (just the color name like yellow-500, blue-600, etc.) that best represents the tag based on its usual branding or theme.
Do not include text- prefix or any extra text. Only return the color value like yellow-500.

For example:

JavaScript → yellow-500

React → sky-400

MongoDB → green-600

Now, give the color for: ${tagName}
`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text().trim();

    return text;
}