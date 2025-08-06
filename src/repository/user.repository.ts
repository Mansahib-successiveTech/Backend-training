import { user } from "../models/users";

export class UserRepository {
  async findByUsername(username: string) {
    return await user.findOne({ username });
  }

  async findByEmail(email: string) {
    return await user.findOne({ email });
  }

  async createUser(userData: any) {
    const newUser = new user(userData);
    return await newUser.save();
  }

}