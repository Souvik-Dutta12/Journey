import { Tag } from "../models/tag.model.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import {getGeminiColorForTag} from "../utils/getColorFromAi.js"
import { Blog } from "../models/blog.model.js"; 

const createTag = asyncHandler(async (req,res)=>{

  const { slug } = req.params;
  if(!slug){
    throw new ApiError (400, "slug is required");
  }

  const blog = await Blog.findOne({slug});
  const blogId = blog?._id;

  const { name } = req.body;

  if (!name) {
    throw new ApiError(400, "Tag name is required");
  }

  const cleanName = name.trim().toLowerCase();

  const existingTag = await Tag.findOne({ name: cleanName });
  if (existingTag) {
    throw new ApiError(409, "Tag with this name already exists");
  }

  const color = await getGeminiColorForTag(cleanName);

  const tag = await Tag.create({ name: cleanName, color });

  tag.blogs.push(blogId);

  await tag.save();
  blog.tags.push(tag._id);
  await blog.save();
  
  return res.status(201).json(
    new ApiResponse(201, tag, "Tag created with Gemini-generated color")
  );
})
const getAllTags = asyncHandler(async (req,res)=>{
  const tags = await Tag.find().sort("name");

  if(!tags || tags.length === 0){
    throw new ApiError(404, "No tags found")
  }

  return res.status(200)
  .json(
    new ApiResponse(200,tags,"Tags fetched successfully")
  )
})

export {
  createTag,
  getAllTags
}