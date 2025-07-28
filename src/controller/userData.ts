import { NextFunction, Request, Response } from "express";
import { user } from "../models/users";

export class userData{

userpost=async(req:Request,res:Response)=>{
    try{
    const {name,email}=req.body;
const userdata=new user({name,email});
await userdata.save(); 

res.status(201).json({
    message:"user added "
})
  
}
catch(err:any){
res.status(500).json({
    message:err.message
})
}  
}
}