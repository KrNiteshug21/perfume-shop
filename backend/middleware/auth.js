import User from "../models/User.js";
import jwt from "jsonwebtoken";

export const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({ message: "Authentication required" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({ message: "Authentication failed" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Authentication failed" });
  }
};
