const countLimit=4;
const timeLimit=30000
const reqMap=new Map();
export const limiter=(req,res,next)=>{
const ip=req.ip;
if(!reqMap.has(ip)){
    reqMap.set(ip,{count:1,timing:Date.now()})
}

const curretReq=reqMap.get(ip);

if(Date.now()-curretReq.timing>timeLimit){
    curretReq.count=1;
    curretReq.timing=Date.now();
}

if(curretReq.count>countLimit){
    return res.status(429).json({
        message:"to many request"
    })
}
curretReq.count++;
next();
}