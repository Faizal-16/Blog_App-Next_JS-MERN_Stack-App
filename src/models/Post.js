import mongoose from "mongoose";

const { Schema } = mongoose;

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"], // Better error message
      trim: true, // Removes whitespace from both ends
      minlength: [3, "Title must be at least 3 characters long"], // Minimum length
    },
    desc: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
      minlength: [10, "Description must be at least 10 characters long"],
    },
    img: {
      type: String,
      required: [true, "Image URL is required"],
      validate: {
        validator: function (v) {
          // Simple URL validation (you might want a more robust check)
          return /^(https?:\/\/)/i.test(v);
        },
        message: (props) => `${props.value} is not a valid image URL!`,
      },
    },
    username: {
      type: String,
      required: [true, "Username is required"],
      trim: true,
      minlength: [3, "Username must be at least 3 characters long"],
    },
    content: {
      type: String,
      required: [true, "Content is required"],
      minlength: [20, "Content must be at least 20 characters long"],
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true }, // If you want to use virtuals
    toObject: { virtuals: true },
  }
);

// Add indexes for better query performance
postSchema.index({ title: "text", desc: "text", content: "text" });


const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

export default Post;
