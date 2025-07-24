import mongoose from "mongoose";

const userSchema=new mongoose.Schema({ 
    username:String,
    name:String,
    email:String,
    password:String

})

export const user=mongoose.model("user",userSchema);
