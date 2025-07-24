
import mongoose from "mongoose";

const stateSchema=new mongoose.Schema(
{
   state:{
    type:String,
    required:true,
    unique:true
   }
}
)

export const states=mongoose.model("state",stateSchema) 