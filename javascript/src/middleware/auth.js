import jwt from "jsonwebtoken"
export const auth=(req,res,next)=>{
const headers=req.headers.authorization;
console.log(headers);
if(!headers){
    res.json({
        message:"no token found"
    })
}
const token=headers.split(" ")[1];
const decoded=jwt.verify(token,"SECRET");
console.log(decoded);
if(decoded.username!=="mansahib"){
   return res.status(403).json({
    message:"not authorized"
   })
}
next();

}