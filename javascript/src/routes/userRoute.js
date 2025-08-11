import express from "express"
import { createjwt } from "../controllers/createToken.js";
import { dynamicValidate, numericQuery, validateUser } from "../middleware/joi.js";

const userRouter=express.Router();
userRouter.post("/verify",validateUser,createjwt);
userRouter.get("/numericQuery/:id",numericQuery,(req,res)=>{
res.json({
    message:"numeric query working fine"
})
})
userRouter.post("/dynamicValidate",dynamicValidate,(req,res)=>{
res.json({
    message:"dynamic joi working fine"
})
})
export {userRouter}