export const headersMiddleware=(text)=>{
return (req,res,next)=>{
res.setHeader("x-custom-header",text);
next();
}
}