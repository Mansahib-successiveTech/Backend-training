import { NextFunction, Request, Response } from "express";
import { loggerMiddleware } from "../interfaces/interfaceLogger";


export class Logger implements loggerMiddleware{
loggerMiddleware(req: Request, res: Response, next: NextFunction) {
  const method = req.method;
  const url = req.originalUrl;
  const timestamp = new Date().toLocaleTimeString();

  console.log(`[${timestamp}] ${method} ${url}`);

  next();
}
}
