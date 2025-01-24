import express from "express";
import dotenv from "dotenv";
import productRoute from "./routes/productRoute.js";
import reviewRoute from "./routes/reviewsRoute.js";
import connectDB from "./config/db.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/products", productRoute);
app.use("/api/reviews", reviewRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
