import mongoose from "mongoose";

const userSchema=new mongoose.Schema({ 
  username: { type: String, unique: true },
  name:     { type: String },
  email:    { type: String, unique: true },
  password: { type: String },
  role:     { type: String, default: "user" } 
})

export const user=mongoose.model("user",userSchema);
