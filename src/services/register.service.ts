// services/register.service.ts
import bcrypt from "bcrypt";
import { UserRepository } from "../repository/user.repository";


export class RegisterService {
  private userRepository = new UserRepository();

  async register(userData: { username: string; name: string; email: string; password: string }) {
    const { username, name, email, password } = userData;

    const existingEmail = await this.userRepository.findByEmail(email);
    if (existingEmail) {
      return { status: 409, message: "Email already in use" };
    }

    const existingUsername = await this.userRepository.findByUsername(username);
    if (existingUsername) {
      return { status: 409, message: "Username already taken" };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const createdUser = await this.userRepository.createUser({
      username,
      name,
      email,
      password: hashedPassword,
    });

    return {
      status: 201,
      message: "User registered successfully",
      user: {
        id: createdUser._id,
        username: createdUser.username,
        email: createdUser.email,
      },
    };
  }
}
