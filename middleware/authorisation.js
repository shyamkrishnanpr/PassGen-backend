import User from "../model/userModel.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const verifyUser = async (req, res, next) => {
  const tokenData = req.header("Authorization");

  if (!tokenData) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const token = tokenData.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded) {
      const userId = decoded.userId;
      console.log(userId);
      req.userId = userId;
      const user = await User.findById({ _id: userId });
      if (!user) {
        return res.status(403).json({ message: "User not found" });
      }

      next();
    }
  } catch (error) {
    console.log(error);
  }
};

export default verifyUser;
