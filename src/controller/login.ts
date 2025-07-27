import { NextFunction, Request, Response } from "express";
import { user } from "../models/users";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { LoginService } from "../services/login.service";

const JWT_SECRET = "your_Secret_Key";

export class LoginUser {
    private loginService = new LoginService();
  loginUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { username, password } = req.body;
       const result = await this.loginService.login(username, password);
      // const existingUser = await user.findOne({ username });
      // if (!existingUser) {
      //   return res.status(404).json({ message: "User not found" });
      // }

      // const isPasswordMatch = await bcrypt.compare(password, existingUser.password!);
      // if (!isPasswordMatch) {
      //   return res.status(401).json({ message: "Incorrect password" });
      // }

      // const token = jwt.sign({ userId: existingUser._id }, JWT_SECRET, { expiresIn: "30h" });

      console.log("Verified user");

      return res.status(200).json({
        message: "Login successful",
        ...result
      });
    } catch (err) {
      console.error("Login error:", err);
      return res.status(500).json({ message: "Server error" });
    }
  };
}
