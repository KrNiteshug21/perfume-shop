import express from "express";
import Review from "../models/Reviews.js";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const reviews = await Review.find({});
    return res.json(reviews);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { productId, username, rating, comment } = req.body;
    const review = await Review.create({
      productId,
      username,
      rating,
      comment,
    });

    return res.status(201).json(review);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

export default router;
