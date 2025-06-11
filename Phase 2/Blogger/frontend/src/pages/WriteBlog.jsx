import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import Footer from "../components/Footer"
import { Button } from "../components/ui/moving-border";

const WriteBlog = () => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [description, setDescription] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);
  const [content, setContent] = useState("");



  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline"],
      ["code-block"],
      ["image", "link"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ align: [] }],
      ["clean"] // remove formatting button
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "code-block",
    "image",
    "link",
    "list",
    "bullet",
    "align",
  ];


  useEffect(() => {
    const generateSlug = (text) => {
      return text
        .toLowerCase()
        .trim()
        .replace(/[\s\W-]+/g, "-") // replace spaces and non-word chars with dash
        .replace(/^-+|-+$/g, "");  // remove leading/trailing dashes
    };
    setSlug(generateSlug(title));
  }, [title]);

  const handleChange = (value) => {
    setContent(value);
  };
  // Add tag when user presses Enter or comma
  const handleTagKeyDown = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      const newTag = tagInput.trim().toLowerCase();
      if (newTag && !tags.includes(newTag)) {
        setTags([...tags, newTag]);
      }
      setTagInput("");
    }
  };

  // Remove tag by index
  const removeTag = (index) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle your submit logic, e.g. send data to backend
    const blogData = { author, title, slug, shortDesc, description, coverImage, tags };
    console.log("Blog submitted:", blogData);
    alert("Blog submitted! Check console.");
  };




  return (
    <>
      <div className="w-screen md:w-screen sm:w-[85vw] mx-auto mt-0 md:mt-40 sm:mt-5 px-7 md:px-20 sm:px-5 bg-white dark:bg-black rounded shadow-md">
        <h1 className="relative z-10 text-3xl sm:text-3xl md:text-4xl lg:text-5xl  bg-clip-text h-20 text-transparent bg-gradient-to-b from-white to-neutral-500  text-center font-sans font-bold leading-tight">
          Write Your Own Blog
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6 mt-5 ">
          {/* Author Name */}
          <div className="flex flex-col gap-1 md:w-1/3 sm:w-full">
            <label htmlFor="author" className="block text-md font-bold text-white">
              Author Name
            </label>
            <input
              type="text"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
              className="w-full text-md font-normal px-4 py-2 border rounded-xl bg-zinc-900 border-zinc-600 focus:outline-none focus:ring-0 focus:ring-zinc-500"
              placeholder="Your full name"
            />
          </div>

          {/* Title */}
          <div className="flex flex-col gap-1 md:w-1/2 sm:w-full">
            <label htmlFor="title" className="block text-md font-bold text-white">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full text-md font-normal px-4 py-2 border rounded-xl bg-zinc-900 border-zinc-600 focus:outline-none focus:ring-0 focus:ring-zinc-500"
              placeholder="Enter your blog title"
            />
          </div>

          {/* Slug (readonly) */}
          <div className="flex flex-col gap-1 md:w-1/2 sm:w-full">
            <label htmlFor="slug" className="block text-md font-bold text-white">
              Slug (auto-generated)
            </label>
            <input
              type="text"
              id="slug"
              value={slug}
              readOnly
              className="w-full text-md font-normal px-4 py-2 border rounded-xl bg-zinc-700 border-zinc-600 focus:outline-none focus:ring-0 focus:ring-zinc-500 cursor-not-allowed "
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="w-full">
              <div className="flex flex-col gap-1 md:w-1/3 sm:w-full">
                <label htmlFor="coverImage" className="block text-md font-bold text-white">
                  Cover Image
                </label>
                <input
                  type="file"
                  id="coverImage"
                  accept="image/*"
                  onChange={(e) => setCoverImage(e.target.files[0])}
                  className="w-full text-md font-normal px-4 py-2 border rounded-xl bg-zinc-900 border-zinc-600 focus:outline-none focus:ring-0 focus:ring-zinc-500 cursor-pointer"
                />
              </div>

              {coverImage && (
                <img
                  src={URL.createObjectURL(coverImage)}
                  alt="Cover Preview"
                  className="mt-4 rounded-md max-h-60 object-cover"
                />
              )}
            </div>


            {/* Tags Input */}
            <div className="flex flex-col gap-1 md:w-2/3 sm:w-full mt-5 md:mt-0 sm:mt-5">
              <label htmlFor="tags" className="block text-md font-bold text-white">
                Tags (press Enter or comma to add)
              </label>
              <input
                type="text"
                id="tags"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={handleTagKeyDown}
                placeholder="Add tags"
                className="w-full text-md font-normal px-4 py-2 border rounded-xl bg-zinc-900 border-zinc-600 focus:outline-none focus:ring-0 focus:ring-zinc-500 "
              />
              <div className="flex flex-wrap gap-2 mt-2">
                {tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="flex items-center bg-zinc-600 text-white rounded px-2 py-1 text-sm cursor-pointer select-none"
                    onClick={() => removeTag(idx)}
                    title="Click to remove tag"
                  >
                    {tag} &times;
                  </span>
                ))}
              </div>
            </div>
          </div>
          {/* Short Description */}
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="shortDesc" className="block text-md font-bold text-white">
              Short Description
            </label>
            <textarea
              id="shortDesc"
              rows={3}
              value={shortDesc}
              onChange={(e) => setShortDesc(e.target.value)}
              maxLength={250}
              placeholder="A brief summary of your blog"
              className="w-full text-md font-normal px-4 py-2 border rounded-xl bg-zinc-900 border-zinc-600 focus:outline-none focus:ring-0 focus:ring-zinc-500 resize-none"
              required
            />
            <p className="text-sm dark:text-neutral-400 mt-1">
              {shortDesc.length} / 250 characters
            </p>
          </div>

          {/* Description */}
          <div className="flex flex-col gap-1 w-full relative">
            <label htmlFor="description" className="block text-md font-bold text-white">
              Description
            </label>
            <ReactQuill
              value={content}
              onChange={handleChange}
              theme="snow"
              placeholder="Write your blog content here..."
              modules={modules}
              formats={formats}
            />

            <div className="absolute bottom-5 right-3">
              <Button
              containerClassName="w-auto rounded-md hover:bg-purple-700 duration-300"
              borderRadius="1 rem"
              className=" bg-white rounded-md px-5 py-0 dark:bg-black/90 z-40 cursor-pointer text-black dark:text-white border-neutral-200 text-sm md:text-lg dark:border-slate-800  flex gap-3 hover:text-[#7fcfec] duration-300"
            >
              Generate with ai < i className="ri-bard-fill "></i>
            </Button>
            </div>

          </div>

          {/* Submit Button */}
          <div className="flex mx-auto justify-center gap-6 mt-10 mb-15">
            <div className=" flex justify-center text-center ">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="px-7 py-3 dark:bg-zinc-800 cursor-pointer bg-white text-black dark:text-white flex items-center space-x-2"
              >

                <span className='hover:text-[#7fcfec] duration-300'>Save blog</span>
              </HoverBorderGradient>
            </div>
            <div className=" flex justify-center text-center">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="px-7 py-3 dark:bg-zinc-900  cursor-pointer bg-white text-black dark:text-white flex items-center space-x-2"
              >

                <span className='hover:text-[#7fcfec] duration-300'>Post blog</span>
              </HoverBorderGradient>
            </div>
          </div>
        </form>
      </div>

      <Footer />
    </>
  )
}

export default WriteBlog
