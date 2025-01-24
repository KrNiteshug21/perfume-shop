import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const products = await Product.find({});
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
    });

    return res.status(201).json(product);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

export default router;
