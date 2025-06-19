import { Blog } from "../models/blog.model.js";
import { Love } from "../models/love.model.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const getLoveCount = asyncHandler(async (req,res)=>{
  const {slug} = req.params;
  const blog = await Blog.findOne({slug});

  if(!blog){
    return new ApiError(404,"Blog not found");
  }

  const loveCount = blog.loves?.length || 0;

  return res.status(200)
  .json(
    new ApiResponse(200,{loveCount},"Love count fetched successfully")
  )

})

export {
  getLoveCount
}