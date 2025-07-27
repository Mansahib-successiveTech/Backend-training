// interfaces/IUserControllers.ts
import { Request, Response, NextFunction } from "express";

interface Users {
  username: string;
}

export interface IUserControllers {
  userPosts(req: Request, res: Response): void;
  authUsers(req: Request, res: Response): void;
  useJwt(req: Request & { users?: Users }, res: Response): void;
  allUsers(req: Request, res: Response): void;
  createToken(req: Request & { users?: Users }, res: Response, next: NextFunction): void;
  displayForm(req: Request, res: Response): void;
}
