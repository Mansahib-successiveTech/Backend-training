
import { NextFunction, Request, Response } from "express";
import { states } from "../models/state";

export class States{

stateData=async(req:Request,res:Response,next:NextFunction)=>{
try{
console.log("sending data");
//await states.deleteMany();
const a=await states.insertMany([
    {state:"delhi"},
    {state:"ghaziabad"},
    {state:"up"},
    {state:"bihar"}     
])
console.log(a);
res.json({
    message:"data seeded"
})
}catch(err:any){
    console.log("error found duplicates",err.message);
    res.json({
        message:"duplicate data",
        details:err.message
    })
}
}
}