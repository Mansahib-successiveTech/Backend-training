import { NextFunction, Request, Response } from "express";

export interface IgeoLocationMiddleware{
  geoLocationMiddleware:(req: Request,
  res: Response,
  next: NextFunction)=>void
}