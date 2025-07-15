import { Request, Response, NextFunction } from "express";

function addCustomHeader(headerValue: string) {
  return function (req: Request, res: Response, next: NextFunction) {
    res.setHeader("Custom-Header", headerValue);
    next();
  };
}

export default addCustomHeader;