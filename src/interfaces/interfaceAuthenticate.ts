import express, { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";


interface Users {
  username: string;
}
export interface authenticate{
  middlewareAuth(  req: Request & { users?: string | jwt.JwtPayload },res: Response,next: NextFunction):void
  jwtUsage(req: Request & { users?: string | jwt.JwtPayload },res: Response,next: NextFunction):void
}