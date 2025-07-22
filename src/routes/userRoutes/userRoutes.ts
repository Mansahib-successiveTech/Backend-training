import express from "express";
import { jwtUsage, middlewareAuth } from "../../middlewares/authMiddleware";
import {
  allUsers,
  createToken,
  useJwt,
  userPosts,
} from "../../controller/user-controller/userControllers";
import loggerMiddleware from "../../middlewares/logger";

const userRoute = express.Router();

userRoute.post("/users/login", middlewareAuth, createToken);
userRoute.post("/users/userPost", middlewareAuth, userPosts);
userRoute.get("/users/userAuth", middlewareAuth, allUsers);
userRoute.get("/users/userInfo",loggerMiddleware, jwtUsage, useJwt);
userRoute.get("/users", allUsers);

export { userRoute };

