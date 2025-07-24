import { NextFunction, Request, Response } from "express";

export interface geoLocationMiddleware{
  geoLocationMiddleware:(req: Request,
  res: Response,
  next: NextFunction)=>void
}