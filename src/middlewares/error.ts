import { NextFunction, Request, Response } from "express";

function errorMiddleware(
  err: Error & { statusCode: number },
  req: Request,
  res: Response,
  next: NextFunction
)
 {
  console.log("middleware error handling");
  if (res.headersSent) {
    return next(err); 
  }
  const errStatus = err.statusCode || 500;
  const errMsg = err.message || "Something went wrong";
  return res.status(errStatus).json({
    message: errMsg,
    success: false,
    status: errStatus,
  });
}
export default errorMiddleware;
