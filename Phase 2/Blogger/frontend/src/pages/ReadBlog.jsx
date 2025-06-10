import React from 'react';
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import Footer from '../components/Footer';

const ReadBlog = ({ blog }) => {
    return (
        <>
        
        <div className="max-w-4xl md:mt-43 mb-10 sm:mt-10 mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-white dark:bg-neutral-950 rounded-xl shadow-md ">
            {/* Blog Cover Image */}
            <img
                src={blog.coverImage}
                alt={blog.title}
                className="border border-zinc-600 w-full h-auto sm:h-auto md:h-auto lg:h-[400px] object-center shadow-md rounded-lg mb-6"
            />

            {/* Title */}
            <h1 className="text-4xl sm:text-4xl font-bold text-neutral-900 dark:text-white mb-2">
                {blog.title}
            </h1>

            {/* Sub-description */}
            <p className="text-lg sm:text-lg text-neutral-500 dark:text-neutral-300 mb-4">
                {blog.subDescription}
            </p>

            {/* Author and Date */}
            <div className="flex items-center justify-between sm:flex-row sm:items-center sm:justify-between  text-sm  text-neutral-400 dark:text-neutral-500 mb-6">
                <span>By {blog.author}</span>
                <span>{new Date(blog.publishedAt).toLocaleDateString()}</span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
                {blog.tags.map((tag, index) => (
                    <span
                        key={index}
                        className=" transition-all duration-300 rounded-md border border-green-400 bg-green-200 px-1.5 py-0.5 text-sm leading-none text-green-700 no-underline dark:bg-green-300/10 dark:text-green-500"
                    >
                        #{tag}
                    </span>
                ))}
            </div>

            {/* Description */}
            <div className="text-md sm:text-base md:text-lg leading-7 text-neutral-700 dark:text-neutral-200 mb-10 whitespace-pre-line">
                {blog.description}
            </div>

            {/* Comment Section */}
            <div className="mt-15">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-neutral-800 dark:text-white">Comments</h2>

                <form className="mb-6">
                    <textarea
                        placeholder="Leave a comment..."
                        className="w-full text-md font-normal px-4 py-2 border rounded-xl bg-zinc-900 border-zinc-600 focus:outline-none focus:ring-0 focus:ring-zinc-500 resize-none"
                        rows="4"
                    />
                    <HoverBorderGradient
                        containerClassName="rounded-xl mt-2"
                        as="button"
                        type="submit"
                        className=" dark:bg-black cursor-pointer bg-white text-black dark:text-white flex items-center space-x-2"
                    >

                        <span className='hover:text-[#7fcfec] duration-300 flex items-center justify-center gap-1'>Post comment</span>
                    </HoverBorderGradient>
                </form>

                {/* Dummy Comments */}
                <div className="space-y-4">
                    {blog.comments?.map((comment, i) => (
                        <div key={i} className="border-t pt-4 dark:border-gray-700 flex justify-between">
                            <div>
                                <p className="text-sm text-neutral-600 dark:text-neutral-300">
                                <strong>{comment.name}</strong> — {comment.date}
                            </p>
                            <p className="text-neutral-800 dark:text-neutral-200">{comment.text}</p>
                            </div>
                            
                        < i class="ri-heart-fill text-xl mr-5 cursor-pointer  active:text-pink-600 "></i>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        </>
    );
};

// Example blog prop (to test the component)
ReadBlog.defaultProps = {
    blog: {
        coverImage: 'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fu6hc3yknzfr5t6x89cvi.png',
        title: '🤖 I Built an AI Agent That Finds Jobs for Me 🤯',
        subDescription: 'In this current market, finding a job that suits you is Super Hard!  Recently, I was exploring the...',
        author: 'Arindam Majumder ',
        publishedAt: '2025-06-02T07:24:41Z',
        tags: ["ai",
            "python",
            "programming",
            "beginners"],
        description: `In today’s ultra-competitive job market, applying for roles can feel like a full-time job in itself. That’s exactly what inspired Arindam Majumder to build an AI agent that could automate the job hunt — from browsing listings to matching roles with his skills and preferences. In this insightful and beginner-friendly article, Arindam walks us through the step-by-step process of how he developed this intelligent job-search assistant using Python, OpenAI’s language models, web scraping tools, and APIs from job platforms. The core idea is simple yet powerful: instead of manually scrolling through job boards, the AI agent filters, analyzes, and shortlists relevant opportunities based on a user’s resume and interests. But it doesn’t stop there — the agent also provides reasoning behind each match, mimicking the kind of personal judgment a human might use. Arindam breaks down the architecture, including how the agent reads and parses job short_descriptions, assesses required skills, and ranks them using natural language processing. He shares technical challenges, design decisions, and even mistakes that helped refine the final product. What makes this article stand out is its accessibility — whether you're a beginner exploring automation or an experienced dev curious about real-world AI applications, you'll find valuable insights here. It’s not just a tutorial; it’s a compelling example of using modern tools to solve personal problems, showing how AI can shift from hype to helpful. By the end of the read, you might just be inspired to build your own career assistant — or even expand it into a full-fledged productivity tool.`,
        comments: [
            {
                name: 'Jane Doe',
                date: '2025-06-09',
                text: 'Absolutely loved this article!',
            },
            {
                name: 'John Smith',
                date: '2025-06-10',
                text: 'Very informative and calming to read.',
            },
        ],
    },
};

export default ReadBlog;
