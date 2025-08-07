import jwt from "jsonwebtoken"
const username="mansahib";
const password="123";
export const createjwt=(req,res)=>{
const {name,pass}=req.body;
try{
    if(name!==username && pass!==password){
        res.status(400).json({
            message:"credential not match"
        })
    }

    const token=jwt.sign({username:username},"SECRET",{expiresIn:"30h"});

    res.status(200).json({
        message:"user verified",
        data:token
    })

}catch(err){
    throw err;
}

}