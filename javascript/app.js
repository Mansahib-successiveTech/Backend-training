import express from "express"
import { users } from "./src/lib/mock.js";
import { userRouter } from "./src/routes/userRoute.js";
import { auth } from "./src/middleware/auth.js";
import { logger } from "./src/middleware/logger.js";
import { errorMiddleware } from "./src/middleware/error.js";
import createError from "http-errors"
import { headersMiddleware } from "./src/middleware/customHeader.js";
import { limiter } from "./src/middleware/rateLimiter.js";
import { geoLoc } from "./src/middleware/geolocation.js";
const app=express();

app.use(express.json());
app.use(logger);
app.use(headersMiddleware("by sahib"));
app.use(limiter);
app.use(geoLoc);
app.use("/users",userRouter);



app.get("/healthCheck",(req,res)=>{
   res.json({
    message:"server running fine"
   })
})


app.get("/allusers",auth,(req,res)=>{

    res.json({
        data:users
    })
})

app.get("/cause-error", async (req, res, next) => {
  try {
    await Promise.reject(new Error("Something went wrong!!"));
  } catch (err) {
    next(err); 
  }
  })
app.use((req,res,next)=>{
next(createError(400,"no route found err"))
})
app.use(errorMiddleware);
app.listen(8680,()=>{
console.log(`server runnning at http://localhost:8080` );
})