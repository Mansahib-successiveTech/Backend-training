import { Request, Response } from "express";
import { user } from "../models/users";
import bcrypt from "bcrypt";


export class SignUp{

registerUser=async (req:Request,res:Response)=>{
    try{
 const {username,name,email,password}=req.body;
 const exist=await user.findOne({email});
 if(exist){
    return res.json({
        message:"user already existed"
    })
 }
 const hashedpassword=await bcrypt.hash(password,10);

 const saveduser=new user({username,name,password:hashedpassword,email});
await saveduser.save();

res.json({
    message:"user created",
    data:saveduser
})

}catch(err){
console.log("error",err);
}


}
}