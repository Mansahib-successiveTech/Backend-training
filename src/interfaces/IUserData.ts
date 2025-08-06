import { Request, Response, NextFunction } from "express";

export interface IUserDataController {
  userpost(req: Request, res: Response, next?: NextFunction): Promise<void>;
}