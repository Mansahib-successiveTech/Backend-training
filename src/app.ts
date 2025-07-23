
import express, { NextFunction, Request, Response } from "express";
import errorMiddleware from "./middlewares/error.js";
import { userRoute } from "./routes/userRoutes.js";
import { customHeaders } from "./middlewares/customHeaders.js";
import createError from "http-errors";
import { customErrors } from "./routes/customErrorsRoutes.js";
import { Logger } from "./middlewares/logger.js";
import { RateLimiter } from "./middlewares/rateLimitter.js";
import { connectDb } from "./config/db.js";
import { countryRoute } from "./routes/seedCountry.js";
const app = express();
connectDb();
const loggerMiddleware=new Logger();
const CustomHeader=new customHeaders();
const rateLimiterMiddleware=new RateLimiter();

app.use(express.json());
app.use(CustomHeader.addCustomHeader("by mansahib"))
app.use(rateLimiterMiddleware.rateLimiter(2,5000))
app.use(loggerMiddleware.loggerMiddleware);
app.use("/customError",customErrors)
app.use("/users",userRoute);
app.use("/seed", countryRoute);
app.get("/async-error", async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Simulate an async failure
    await new Promise((_, reject) => setTimeout(() => reject(new Error("Intentional async error!")), 500));
  } catch (err) {
    next(err); 
  }
});


app.get("/healthCheck",(req:Request,res:Response)=>{
return res.json({
  message:"server working fine"
})
})


app.use((req:Request, res:Response, next:NextFunction) => {
next(createError(404, 'Not Found'));
});

app.use(errorMiddleware);

app.listen(3001, () => {
  console.log("server running at http://localhost:3001 ");
});
