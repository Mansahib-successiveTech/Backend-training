// middlewares/authorization.ts
import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { user } from "../models/users";

const JWT_SECRET = "your_Secret_Key";

export const authorization = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

//   if (!authHeader || !authHeader.startsWith("Bearer ")) {
//     return res.status(401).json({ message: "Authorization token missing" });
//   }

//   const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(authHeader!, JWT_SECRET) ;
    
    const loggedInUser  = await user.findById(decoded.userId);
    if (!loggedInUser) {
      return res.status(401).json({ message: "User not found" });
    }

    if (loggedInUser.role !== "admin") {
      return res.status(403).json({ message: "Not authorized: Admins only" });
    }
    next();
  } catch (err) {
    return res.status(403).json({ message: "Invalid or expired token" });
  }
};
