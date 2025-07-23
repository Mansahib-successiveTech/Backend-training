import express, { NextFunction, Request, Response } from "express";

import loggerMiddleware from "./middlewares/logger.js";
import errorMiddleware from "./middlewares/error.js";
import { userRoute } from "./routes/userRoutes/userRoutes.js";
import addCustomHeader from "./middlewares/customHeaders.js";
import rateLimiter from "./middlewares/rateLimitter.js";
import createError from "http-errors";
import { customErrors } from "./routes/customErrorRoutes/customErrorsRoutes.js";
const app = express();

app.use(express.json());
app.use(addCustomHeader("by mansahib"))
app.use(rateLimiter(2,5000))
app.use(loggerMiddleware);
app.use("/customError",customErrors)
app.use("/users",userRoute);
app.get("/async-error", async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Simulate an async failure
    await new Promise((_, reject) => setTimeout(() => reject(new Error("Intentional async error!")), 500));
  } catch (err) {
    next(err); 
  }
});
app.use((req, res, next) => {
next(createError(404, 'Not Found'));
});

app.use(errorMiddleware);

app.listen(3001, () => {
  console.log("server running at http://localhost:3001 ");
});
