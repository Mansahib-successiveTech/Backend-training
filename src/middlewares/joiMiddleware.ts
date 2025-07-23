import { NextFunction, Request, Response } from "express";
import joi from "joi";
import { includes } from "lodash";

const userSchema = joi.object({
  username: joi.string().alphanum().min(3).max(30).required(),
  password: joi.string().alphanum().required(),
});

const userdataSchema = joi.object({
  name: joi.string().alphanum().min(3).max(30).required(),
  email: joi.string().email().required()
});

const formSchema = joi.object({
  username: joi.string().alphanum().min(3).max(30).required(),
  password: joi.string().alphanum().required(),
  age: joi.number().required(),
  email: joi.string().email().required(),
  address: joi.string().alphanum().required(),
});

const querySchema = joi.number().required();

export class validateClass {
 validateUserData=(req:Request,res:Response,next:NextFunction)=>{
   const { error } = userdataSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    next();
  };


  validateLogin = (req: Request, res: Response, next: NextFunction) => {
    const { error } = userSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    next();
  };

  validateForm = (req: Request, res: Response, next: NextFunction) => {
    const { error } = formSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    next();
  };

  validateNumericQuery = (req: Request, res: Response, next: NextFunction) => {
    const { error } = querySchema.validate(req.params.id);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    next();
  };
}
