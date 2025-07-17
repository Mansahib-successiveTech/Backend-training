import { NextFunction, Request, Response } from "express";
import { validationRules } from "../utils/validationRules";

export const Validator=(req:Request,res:Response,next:NextFunction)=>{
const routePath=req.route.path;


const schema=validationRules[routePath];

if(!schema){
   return next()
}

const {error}=schema.validate(req.body); 
 if (error) {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      details: error.details.map((d) => d.message),
    });
  }

  next();
}