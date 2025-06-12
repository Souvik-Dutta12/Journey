import mongoose,{Schema} from "mongoose";

const commentSchema = new Schema(
    {
        blog:{
            type:Schema.Types.ObjectId,
            ref:"Blog",
        },
        user:{
            type:Schema.Types.ObjectId,
            ref:"User",
        },
        content:{
            type:String,
            required:true,
        },
        love:[
            {
                type:Schema.Types.ObjectId,
                ref:"User",
            }
        ]
    },{timestamps:true}
)

export const Comment = mongoose.model("Comment", commentSchema); 