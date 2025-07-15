import { NextFunction, Request, Response } from "express";


function rateLimiter(requestsLimit:number=3,timeLimit:number){
    const requestMap=new Map();
    return function(req:Request,res:Response,next:NextFunction){
        const ip=req?.ip;
        if(!requestMap.has(ip)){
            requestMap.set(ip,{count:1,prevTime:Date.now()});
        }

        const currentReq=requestMap.get(ip);
        if((Date.now()- currentReq.prevTime)>timeLimit){
            currentReq.count=1;
            currentReq.prevTime=Date.now();
        }

        if(currentReq.count>requestsLimit){
            console.log("false exceded");
            return res.status(400).json({
                message:"too many request"
            });
        
        }
        currentReq.count++;
        next();

    }

}

export default rateLimiter