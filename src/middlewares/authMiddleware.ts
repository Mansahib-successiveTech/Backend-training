import express, { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
const app = express();
const My_secret_key = "your_Secret_Key";
const name: string = "mansahib";
const pass: string = "123";

interface Users {
  username: string;
}

// Middleware to authenticate with username/password and attach user to request
function middlewareAuth(
  req: Request & { users?: string | jwt.JwtPayload },
  res: Response,
  next: NextFunction
) {
  try {
    console.log("middleware");
    const { username, password } = req.body;

    if (username === name && password === pass) {
      console.log("verified");

      // Generate JWT token
      const token = jwt.sign({ username }, My_secret_key, { expiresIn: "1h" });

      req.users = { username };
      next();
    } else {
      console.log("error while authentication");
      res.status(401).json({
        message: "Not authorized",
      });
    }
  } catch (err) {
    next(err);
  }
}

// Middleware to verify JWT token
function jwtUsage(
  req: Request & { users?: string | jwt.JwtPayload },
  res: Response,
  next: NextFunction
) {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: "Token not provided" });
    }

    const decoded = jwt.verify(token, My_secret_key);
    req.users = decoded;
    next();
  } catch (err) {
    console.log("JWT error:", err);
    next(err);
  }
}

export { middlewareAuth, jwtUsage };
