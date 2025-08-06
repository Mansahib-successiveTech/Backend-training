import { NextFunction, Request, Response } from "express";

export interface ILoggerMiddleware{
  loggerMiddleware(req: Request, res: Response, next: NextFunction):void
}