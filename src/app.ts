import  express, { Request, Response }  from "express";
import { users } from "./lib/mockData.js";

const app=express();

app.get("/users",(req:Request,res:Response)=>{
    res.json({
        data:users,
        success:true
    })
})

app.listen(3001,()=>{
console.log("server running at http://localhost:3001 ");
})