import { NextFunction, Request, Response } from "express";
import { users } from "../lib/mockData";
import jwt from "jsonwebtoken";
import { IUserControllers } from "../interfaces/IUserController";
const My_secret_key = "your_Secret_Key";

interface Users {
  username: string;
}

export class userControllers implements IUserControllers {
  public userPosts(req: Request, res: Response) {
    try {
      const data = [
        
        {
          id: 4,
          name: "tej",
          role: "architec",
        },
      ];

      res.status(201).json({
        success: true,
        data: data,
      });
    } catch (err) {
      console.log("error", err);
    }
  }
  public authUsers(req: Request, res: Response) {
    try {
      res.status(200).json({
        data: users,
        message: "protected page",
        success: true,
      });
    } catch (err) {
      console.log("error", err);
    }
  }
  public useJwt(req: Request & { users?: Users }, res: Response) {
    const users = req.users;
    res.json({
      data: users,
    });
  }

  public allUsers(req: Request, res: Response) {
    res.json({
      data: users,
      success: true,
    });
  }
  public createToken(
    req: Request & { users?: Users },
    res: Response,
    next: NextFunction
  ) {
    try {
      const users = req.users;

      if (!users || !users.username) {
        return res.status(400).json({ message: "Invalid user data" });
      }

      const token = jwt.sign(users, My_secret_key, { expiresIn: "1h" });

      return res.status(200).json({
        message: "Token generated successfully",
        token,
      });
    } catch (err) {
      next(err);
    }
  }

  public displayForm(req: Request, res: Response) {
    const { username, password, age, email, address } = req.body;
    res.status(200).json({
      message: "user form data",
      data: {
        username: username,
        password: password,
        age: age,
        email: email,
        address: address,
      },
    });
  }
}
