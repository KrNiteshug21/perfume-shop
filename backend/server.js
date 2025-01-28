import express from "express";
import dotenv from "dotenv";
import productRoute from "./routes/productRoute.js";
import reviewRoute from "./routes/reviewsRoute.js";
import authRoute from "./routes/authRoute.js";
import connectDB from "./config/db.js";
import cors from "cors";
import { logger } from "./logger/logger.js";
import { auth } from "./middleware/auth.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(cors());
app.use(express.json());

connectDB();
app.use(logger);
app.use("/api/auth", authRoute);
app.use(auth);
app.use("/api/products", productRoute);
app.use("/api/reviews", reviewRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
