import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const products = await Product.find({}).populate("reviews");
    return res.json(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { title, description, price, size, images } = req.body;

    const duplicateProduct = await Product.findOne({ title: title });
    if (duplicateProduct) {
      return res.status(400).json({ message: "Product already exists" });
    }

    const product = await Product.create({
      title,
      description,
      price,
      size,
      images,
      reviews: [],
    });

    return res.status(201).json(product);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { review } = req.body;

    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    product.reviews.push(review);
    const updatedProduct = await product.save();
    return res.status(200).json(updatedProduct);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    await product.deleteOne();

    return res.status(200).json({ message: "Product deleted" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

export default router;
