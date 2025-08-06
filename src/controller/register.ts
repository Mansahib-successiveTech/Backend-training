import { Request, Response } from "express";
import { user } from "../models/users";
import bcrypt from "bcrypt";
import { RegisterService } from "../services/register.service";

export class SignUp {
   private registerService = new RegisterService();
  registerUser = async (req: Request, res: Response) => {
    
    try {
      const { username, name, email, password } = req.body;
      const result = await this.registerService.register({ username, name, email, password });

      // const exist = await user.findOne({ email });
      // if (exist) {
      //   return res.json({
      //     message: "user already existed",
      //   });
      // }
      // const hashedpassword = await bcrypt.hash(password, 10);

      // const saveduser = new user({
      //   username,
      //   name,
      //   password: hashedpassword,
      //   email,
      // });
      // await saveduser.save();

      res.json({
        message: "user created",
        user: result,
      });
    } catch (err) {
      console.log("error", err);
    }
  };
}
