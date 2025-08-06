import { NextFunction, Request, Response } from "express";
import { user } from "../models/users";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

export class LoginUserAuth  {
  loginUserAuth = async (req: Request & { users?: string | jwt.JwtPayload }, res: Response,next:NextFunction) => {
    try {
      const { username, password } = req.body;

      const exist = await user.findOne({ username });
      if (!exist) {
        return res.status(404).json({
          message: "User not found",
        });
      }
      
      const hashedpassword=exist.password
      const passwordCompare = await bcrypt.compare(password,hashedpassword!);
      if (!passwordCompare) {
        return res.status(401).json({
          message: "Incorrect password",
        });
      }
      const data={
        username:username
      }
      req.users=data;
    
      console.log("Verified user");
      return next();
    //  return res.status(200).json({ message: "Login successful" }); // no need

    } catch (err) {
      console.error("Login error:", err);
      return res.status(500).json({ message: "Server error" });
    }
  };
}
