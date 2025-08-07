export const errorMiddleware=(err,req,res,next)=>{
const errMessage=err.message || "error";
const errStatus=err.status   || 400;
res.status(errStatus).json({
    message:errMessage
})
}