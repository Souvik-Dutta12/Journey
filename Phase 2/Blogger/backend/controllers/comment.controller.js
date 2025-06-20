import { Blog } from "../models/blog.model.js";
import { Comment } from "../models/comment.model.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const createComment = asyncHandler(async (req,res)=>{
  const {slug} = req.params;
  const {userId} = req.user?._id;
  const {content} = req.body;
  if(!slug){
    throw new ApiError(404,"Blog not found");
  }

  if(!userId){
    throw new ApiError(401,"Unauthorized User");
  }

  if(!content){
    throw new ApiError(400,"Content is required");
  }

  const comment = await Comment.create({
    content
  });

  const createdComment = await Comment.findById(comment._id);

  if(!createdComment){
    throw new ApiError(404,"Comment not found");
  }

  return res.status(200)
  .json(
    new ApiResponse(200,createComment,"Comment created successfully")
  )
})

const getCommentsByBlog = asyncHandler(async (req,res)=>{
  const {slug} = req.params;

  if(!slug){
    throw new ApiError(404,"Blog not found");
  }

  const blog = await Blog.findOne({slug});

  if(!blog){
    throw new ApiError(404,"Blog not found");
  }

  const comments = await Comment.find({blog:blog?._id}).populate("user", "username email profileImage").sort({createdAt:-1});

  if(!comments || comments.length === 0){
    throw new ApiError(404,"No comments found for this blog")
  }

  return res.status(200)
  .json(
    new ApiResponse(200,comments,"Comments fetched successfully")
  )
})

const toggleLove = asyncHandler(async (req,res)=>{
  const {slug} = req.params;
  if(!slug){
    throw new ApiError(401,"Blog slug does not matched")
  }

  const blog = await Blog.findOne({slug});

  const blogId = blog?._id;

  if(!blogId){
    throw new ApiError(404,"Blog not found")
  }

  const userId = req.user?._id;
  if(!userId){
    throw new ApiError(400,"Unauthorised User")
  }

  const alreadyLoved = blog.loves.includes(userId);

  if(alreadyLoved){
    blog.loves = blog.loves.filter(id => id.toString() !== userId.toString());
  }else{
    blog.loves.push(userId);
  }

  await blog.save();

  return res.status(200)
  .json(
    new ApiResponse(200, { loved: !alreadyLoved, loveCount: blog.loves.length },"Love satus toggled")
  )
})

const deleteComment = asyncHandler(async (req,res)=>{
  const {userId} = req.user._id;
  if(!userId){
    throw new ApiError(401,"Unauthorised User")
  }
  const {commentId} = req.params;
  if(!commentId){
    throw new ApiError(404,"Comment not found")
  }

  const comment = await Comment.findByIdAndDelete(commentId);

  if(!comment){
    throw new ApiError(400,"Error while deleting the comment")
  }

  return res.status(200)
  .json(new ApiResponse(200,comment,"Comment delete successfully"))
})
export{
  createComment,
  getCommentsByBlog,
  toggleLove,
  deleteComment
}