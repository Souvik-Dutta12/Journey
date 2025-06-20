import { Blog } from "../models/blog.model.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOncloudinary } from "../utils/cloudinary.js";
import { generateBlogDescription } from "../utils/generateBlogDescription.js";

const createBlog = asyncHandler(async (req, res) => {

  const { title, slug, shortDescription, description, authorName, useAIDescription } = req.body;

  if (
    [title, slug, shortDescription, authorName].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "Title, slug, shortDescription and authorName are required");
  }

  let finalDescription = description;

  if (useAIDescription === "true" || useAIDescription === true) {
    if (!title || !shortDescription) {
      throw new ApiError(400, "Title and shortDescription are required for AI to generate description");
    }

    finalDescription = await generateBlogDescription(title, shortDescription);
    if (!finalDescription) {
      throw new ApiError(500, "AI failed to generate description");
    }
  } else {
    if (!description?.trim()) {
      throw new ApiError(400, "Description is required if not using AI");
    }
  }

  const coverImageLocalPath = req.files?.coverImage?.[0]?.path;
  if (!coverImageLocalPath) {
    throw new ApiError(400, "Cover image file is required");
  }

  const coverImage = await uploadOnCloudinary(coverImageLocalPath);

  if (!coverImage) {
    throw new ApiError(400, "Cover image upload failed");
  }

  const blog = await Blog.create({
    title,
    slug,
    shortDescription,
    description: finalDescription,
    authorName,
    coverImage: coverImage?.url || "",
  });

  return res.status(201).json(new ApiResponse(201, blog, "Blog created successfully"));

})

const getAllBlog = asyncHandler(async (req, res) => {
  const {
    page = 1,
    limit = 12,
    tag,
    sortBy = "createdAt",
    sortType = "desc"
  } = req.query;

  const filters = {};

  if (tag) {
    filters.tags = tag; // assuming `tags` is an array of strings
  }

  const sortOptions = {};
  sortOptions[sortBy] = sortType === "asc" ? 1 : -1;

  const skip = (parseInt(page) - 1) * parseInt(limit);

  const blogs = await Blog.find(filters)
    .sort(sortOptions)
    .skip(skip)
    .limit(parseInt(limit));

  const totalBlogs = await Blog.countDocuments(filters);

  res.status(200).json(
    new ApiResponse(200, {
      blogs,
      pagination: {
        total: totalBlogs,
        page: parseInt(page),
        limit: parseInt(limit),
        totalPages: Math.ceil(totalBlogs / parseInt(limit)),
      },
    }, "Successfully fetched all blogs")
  );
});

const getBlogBySlug = asyncHandler(async (req, res) => {
  const { slug } = req.params;

  const currentBlog = await Blog.findOne({ slug });

  if (!currentBlog) {
    throw new ApiError(404, "Blog not found");
  }

  return res.status(200)
    .json(
      new ApiResponse(200, currentBlog, "Blog found successfully")
    )
})

const updateBlogDetails = asyncHandler(async (req, res) => {
  const { title, slug, shortDescription, description, authorName } = req.body;
  if (!title || !slug || !shortDescription || !description || !authorName) {
    throw new ApiError(400, "any one of the fields should upadte to update the blog")
  }

  const blog = await Blog.findOneAndUpdate(
    { slug },
    {
      $set: {
        title,
        slug,
        shortDescription,
        description,
        authorName,
      },
    },
    { new: true }
  )

  return res.status(200)
    .json(
      new ApiResponse(200, blog, "Blog updated successfully")
    )
})

const updatBlogCoverImage = asyncHandler(async (req, res) => {

  const { slug } = req.params;

  if (!slug) {
    throw new ApiError(400, "Something went wrong");
  }

  const coverImageLocalPath = req.file?.path

  if (!coverImageLocalPath) {
    throw new ApiError(400, "Cover image is required")
  }

  const coverImage = await uploadOncloudinary(coverImageLocalPath);

  if (!coverImage.url) {
    throw new ApiError(400, "Failed to upload image")
  }

  const blog = await Blog.findOneAndUpdate(
    { slug },
    {
      $set: {
        coverImage: coverImage.url
      },
    },
    { new: true }
  )

  return res.status(200)
    .json(
      new ApiResponse(200, blog, "Blog cover image updated successfully")
    )
})

const deleteBlog = asyncHandler(async (req, res) => {
  const { slug } = req.params;

  if (!slug) {
    throw new ApiError(400, "Something went wrong")
  }

  const blog = await Blog.findOneAndDelete({ slug });

  if (!blog) {
    throw new ApiError(404, "Blog not found")
  }

  return res.status(200)
    .json(
      new ApiResponse(200, blog, "Blog deleted successfully")
    )
})

const toggleStatus = asyncHandler(async (req, res) => {
  const { slug } = req.params;

  if (!slug) {
    throw new ApiError(404, "Blog slug not matched")
  }

  const blog = await Blog.findOne({ slug })

  if (!blog) {
    throw new ApiError(404, "Blog not found")
  }

  if (blog.status === "draft") {
    blog.status = "published"
  } else {
    blog.status = "draft"
  }


  return res.status(200)
    .json(
      new ApiResponse(200, blog, "Blog status updated successfully")
    )
})

const getBlogsByTags = asyncHandler(async (req, res) => {
  const { tags } = req.query;

  if (!tags) {
    throw new ApiError(400, "Tags are required in query parameters");
  }

  // Split tags into an array if it's a comma-separated string
  const tagList = tags.split(",").map(tag => tag.trim().toLowerCase());

  const blogs = await Blog.find({
    tags: { $in: tagList }
  });

  return res.status(200).json(
    new ApiResponse(200, blogs, "Blogs fetched successfully by tags")
  );
});

export {
  createBlog,
  getAllBlog,
  getBlogBySlug,
  updateBlogDetails,
  updatBlogCoverImage,
  deleteBlog,
  toggleStatus,
  getBlogsByTags
}