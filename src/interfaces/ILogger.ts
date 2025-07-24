import { NextFunction, Request, Response } from "express";

export interface IloggerMiddleware{
  loggerMiddleware(req: Request, res: Response, next: NextFunction):void
}