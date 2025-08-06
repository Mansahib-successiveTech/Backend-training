import { NextFunction, Request, Response } from "express";
import { ILoggerMiddleware } from "../interfaces/ILogger";

export class Logger implements ILoggerMiddleware{
  loggerMiddleware(req: Request, res: Response, next: NextFunction) {
  
    const method = req.method;
    const url = req.originalUrl;
    const timestamp = new Date().toLocaleTimeString();

    console.log(`[${timestamp}] ${method} ${url}`);

    next();
  }
}
