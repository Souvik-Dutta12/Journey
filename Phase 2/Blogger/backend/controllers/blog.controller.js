import { Blog } from "../models/blog.model.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOncloudinary } from "../utils/cloudinary.js";
import { generateBlogDescription } from "../utils/generateBlogDescription.js";
import { User } from "../models/user.model.js";
import { Tag } from "../models/tag.model.js";
import { getGeminiColorForTag } from "../utils/getColorFromAi.js";


const createBlog = asyncHandler(async (req, res) => {
  try {
    const {
      title,
      slug,
      shortDescription,
      description,
      authorName,
      status = "draft"
    } = req.body;

    // ✅ Normalize tag names
    let rawTags = req.body.tags;
    const tagNames = Array.isArray(rawTags)
      ? rawTags
      : rawTags
        ? [rawTags]
        : [];

    if ([title, slug, shortDescription, authorName].some(field => field?.trim() === "")) {
      throw new ApiError(400, "Title, slug, shortDescription and authorName are required");
    }


    // ✅ Upload cover image
    const coverImageLocalPath = req.file?.path;
    if (!coverImageLocalPath) {
      throw new ApiError(400, "Cover image file is required");
    }

    const coverImage = await uploadOncloudinary(coverImageLocalPath);
    if (!coverImage) {
      throw new ApiError(400, "Cover image upload failed");
    }

    // ✅ Convert tag names to ObjectIds
    const tagIds = [];
    for (const tagName of tagNames) {
      const cleanName = tagName.trim().toLowerCase();

      // ✅ Check if tag already exists
      let tag = await Tag.findOne({ name: cleanName });

      if (!tag) {
        // ✅ Create new tag if it doesn't exist
        const color = await getGeminiColorForTag(cleanName);
        tag = await Tag.create({ name: cleanName, color });
      }

      tagIds.push(tag._id); // ✅ Always push the _id, new or existing
    }


    // ✅ Create blog
    const blog = await Blog.create({
      title,
      slug,
      shortDescription,
      description,
      authorName,
      coverImage: coverImage?.url || "",
      user: req.user?._id,
      status: status === "published" ? "published" : "draft",
      tags: tagIds
    });

    // ✅ Update user
    const user = await User.findById(req.user?._id);
    if (user) {
      user.blogs.push(blog._id);
      await user.save();
    }

    return res.status(201).json(
      new ApiResponse(201, blog, "Blog created successfully")
    );
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message
    });
  }
});

const generateAIDescriptionOnly = asyncHandler(async (req, res) => {
  const { title, shortDescription } = req.body;

  if (!title || !shortDescription) {
    throw new ApiError(400, "Title and shortDescription are required");
  }

  const description = await generateBlogDescription(title, shortDescription);

  if (!description) {
    throw new ApiError(500, "Failed to generate description");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, { description }, "AI description generated"));
});



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

  const currentBlog = await Blog.findOne({ slug }).populate("tags");

  if (!currentBlog) {
    throw new ApiError(404, "Blog not found");
  }

  return res.status(200)
    .json(
      new ApiResponse(200, currentBlog, "Blog found successfully")
    )
})

const updateBlogDetails = asyncHandler(async (req, res) => {

  const { slug } = req.params
  if (!slug) {
    throw new ApiError(404, "blog not found")
  }
  const { title, newSlug, shortDescription, description, authorName } = req.body;
  if (!title && !newSlugslug && !shortDescription && !description && !authorName) {
    throw new ApiError(400, "any one of the fields should upadte to update the blog")
  }

  const blog = await Blog.findOneAndUpdate(
    { slug },
    {
      $set: {
        title,
        slug: newSlug,
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
  const { tags, page = 1, limit = 12, status } = req.query;

  const filter = {};

  // If tags are provided and valid
  if (tags && typeof tags === "string") {
    const tagNames = tags.split(",").map(tag => tag.trim().toLowerCase());
    const tagDocs = await Tag.find({ name: { $in: tagNames } });
    const tagIds = tagDocs.map(tag => tag._id);

    filter.tags = { $in: tagIds };
  }

  // Always filter by status if provided
  if (status) {
    filter.status = status;
  } else if (!tags) {
    // When no tags are provided, default to published blogs only
    filter.status = "published";
  }

  const skip = (parseInt(page) - 1) * parseInt(limit);

  const blogs = await Blog.find(filter)
    .skip(skip)
    .limit(parseInt(limit))
    .sort({ createdAt: -1 });

  const total = await Blog.countDocuments(filter);

  return res.status(200).json(
    new ApiResponse(200, blogs, "Blogs fetched successfully", total)
  );
});



export {
  createBlog,
  getAllBlog,
  getBlogBySlug,
  updateBlogDetails,
  updatBlogCoverImage,
  generateAIDescriptionOnly,
  deleteBlog,
  toggleStatus,
  getBlogsByTags
}