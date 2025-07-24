import mongoose from "mongoose";

const connectDb=async ()=>{
    try{
       await mongoose.connect('mongodb://localhost:27017/users');
       console.log("db connected");
    }catch(err){
    console.error("connection error");
    }
}
export {connectDb};