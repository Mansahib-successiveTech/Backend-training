// services/login.service.ts
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserRepository } from "../repository/user.repository";


const JWT_SECRET = "your_Secret_Key";

export class LoginService {
  private userRepository = new UserRepository();

  async login(username: string, password: string) {
    const existingUser = await this.userRepository.findByUsername(username);
    if (!existingUser) {
      return { status: 404, message: "User not found" };
    }

    const isPasswordMatch = await bcrypt.compare(password, existingUser.password!);
    if (!isPasswordMatch) {
      return { status: 401, message: "Incorrect password" };
    }

    const token = jwt.sign({ userId: existingUser._id }, JWT_SECRET, { expiresIn: "30h" });

    return {
      token,
      user: {
        userid: existingUser._id,
        username: existingUser.username,
        email: existingUser.email,
      },
    };
  }
}
