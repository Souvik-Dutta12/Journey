import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema(
    {
        tittle: {
            type: String,
            required: true,
            unique: true,
        },
        slug: {
            type: String,
            required: true,
            unique: true,
        },
        short_description: {
            type: String,
            reqiured: true,
        },
        description: {
            type: String,
            required: true,
        },
        cover_image: {
            type: String, //cloudinary
            required: true,
        },
        author_name: {
            type: String,
            required: true,
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        tags:
            [
                {
                    type: Schema.Types.ObjectId,
                    ref: "Tag"
                }
            ]

    }, { timestamps: true }
)


export const Blog = mongoose.model("Blog", blogSchema);