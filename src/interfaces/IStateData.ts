import { Request, Response, NextFunction } from "express";

export interface IStatesController {
  stateData(req: Request, res: Response, next?: NextFunction): Promise<void>;
}