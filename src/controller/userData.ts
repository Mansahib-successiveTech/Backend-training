import { NextFunction, Request, Response } from "express";
import { user } from "../models/users";
import { IUserDataController } from "../interfaces/IUserData";

export class userData implements IUserDataController{

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

 updateRole=async(req: Request, res: Response)=>{
   try{
    const {id}=req.params;
    const {role}=req.body;
    const result=await user.findByIdAndUpdate(id,{role},{new:true});
    res.json({
        data:result
    })
   }catch(err){
    throw err
   }
  }
}