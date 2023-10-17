import bcrypt from "bcrypt";
import User from "../model/userModel.js";
import Password from "../model/passwordSchema.js";
import jwt from "jsonwebtoken";

export const userSignup = async (req, res, next) => {
  try {
    const { userName, email, password } = req.body;

    const userExistsByEmail = await User.findOne({ email });

    if (userExistsByEmail) {
      return res.status(400).json({ error: "Email address already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      userName,
      email,
      password: hashedPassword,
      isVerified: true,
    });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    console.log(token, "token at signup");

    res.status(200).json({ user: user.userName, token: `Bearer ${token}` });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const userLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: "Invalid email address" });
    }

    const passwordCheck = await bcrypt.compare(password, user.password);

    if (!passwordCheck) {
      return res.status(400).json({ error: "Incorrect password" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    console.log(token, "at login");
    res.status(200).json({ user: user.userName, token: `Bearer ${token}` });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const savePassword = async (req, res, next) => {
  try {
    const userId = req.userId;

    const { appName, userName, password } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(400).json({ error: "No User Found" });
    }

    const newPassword = await Password.create({
      userId,
      appName,
      userName,
      password,
    });

    res.status(200).json({ message: "Password saved successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};


export const fetchSavedData = async(req,res,next) => {
  try {
    
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
