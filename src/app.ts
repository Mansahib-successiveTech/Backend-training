import express from "express";

import loggerMiddleware from "./middlewares/logger.js";
import errorMiddleware from "./middlewares/error.js";
import { userRoute } from "./routes/userRoutes/userRoutes.js";
import addCustomHeader from "./middlewares/customHeaders.js";
const app = express();

app.use(express.json());
app.use(addCustomHeader("by mansahib"))
app.use(loggerMiddleware);
app.use(userRoute);

app.use(errorMiddleware);

app.listen(3001, () => {
  console.log("server running at http://localhost:3001 ");
});
