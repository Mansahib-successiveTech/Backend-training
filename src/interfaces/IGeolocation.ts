import { NextFunction, Request, Response } from "express";

export interface IGeoLocationMiddleware{
  geoLocationMiddleware:(req: Request,
  res: Response,
  next: NextFunction)=>void
}