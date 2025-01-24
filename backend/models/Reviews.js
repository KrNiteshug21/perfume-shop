import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    image: {
      type: String,
    },
    username: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Review", reviewSchema);
