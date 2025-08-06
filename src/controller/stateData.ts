
import { NextFunction, Request, Response } from "express";
import { states } from "../models/state";
import { StateService } from "../services/stateData.services";

export class States{
private stateServiceData=new StateService();
stateData=async(req:Request,res:Response)=>{
try{
console.log("sending data");
await states.deleteMany();
const result=await this.stateServiceData.statedataService();

// const a=await states.insertMany([
//     {state:"delhi"},
//     {state:"ghaziabad"},
//     {state:"up"},
//     {state:"bihar"}     
// ]) this.stateServiceData.statedataService();

// console.log(a);


res.json({
    message:"data seeded",
    data:result?.data
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