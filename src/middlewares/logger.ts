import { NextFunction, Request, Response } from "express";


export class Logger{
loggerMiddleware(req: Request, res: Response, next: NextFunction) {
  const method = req.method;
  const url = req.originalUrl;
  const timestamp = new Date().toLocaleTimeString();

  console.log(`[${timestamp}] ${method} ${url}`);

  next();
}
}
