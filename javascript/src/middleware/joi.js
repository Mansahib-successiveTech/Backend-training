import joi from "joi"
const userSchema=joi.object({
    name:joi.string().required(),
    pass:joi.string().alphanum().required()
})

export const validateUser=(req,res,next)=>{
const {error}=userSchema.validate(req.body);
if(error){
    next(error);
}
next();
}

validate
export const numericQuery=(req,res,next)=>{
const {id}=req.params;
if(isNaN(parseInt(id))){
    return res.json({
        message:"please enter numeric value"
    })
}
next();
}

const dynamicSchema={
    "/dynamicValidate":joi.object({
     name:joi.string().required(),
    pass:joi.string().alphanum().required()
    })
}
export const dynamicValidate=(req,res,next)=>{
console.log(req.path);
const schema=dynamicSchema[req.path]

if (!schema){return next();}
const {error}=schema.validate(req.body);
if(error){
  return next(error);
}
next();
}