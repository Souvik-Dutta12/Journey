import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const generateBlogDescription = async (title, shortDescription) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Write a detailed blog description based on the following information:

Title: ${title}
Short Description: ${shortDescription}

The output should be a coherent and well-written blog description, consisting of multiple paragraphs, each expanding on different aspects of the topic. The description must:

Be 20 to 30 lines long, written in clear, reader-friendly language.

"Be divided into 3 to 5 paragraphs (avoid single block text)."
"Expand on the core idea introduced in the short description."
"Include supporting context, relevance, benefits, and real-world implications."
"Engage the reader with informative yet natural storytelling or insight."
"Make sure the writing flows logically, with transitions between paragraphs."`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text.trim();
  } catch (error) {
    console.error("AI generation error:", error);
    return null;
  }
};
