import { Request, Response, NextFunction } from "express";

export class customHeaders{
 addCustomHeader(headerValue: string) {
  return function (req: Request, res: Response, next: NextFunction) {
    res.setHeader("Custom-Header", headerValue);
    next();
  };
}
}