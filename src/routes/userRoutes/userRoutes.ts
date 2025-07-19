import express from "express";
import { jwtUsage, middlewareAuth } from "../../middlewares/authMiddleware";
import displayForm, {
  allUsers,
  createToken,
  useJwt,
  userPosts,
} from "../../controller/user-controller/userControllers";
import loggerMiddleware from "../../middlewares/logger";
import { validateForm, validateNumericQuery } from "../../middlewares/joiMiddleware";
import { geoLocationMiddleware } from "../../middlewares/geoLocationMiddleware";
import { Validator } from "../../middlewares/validator";

const userRoute = express.Router();

userRoute.post("/login",Validator, middlewareAuth, createToken);
userRoute.post("/userPost", middlewareAuth, userPosts);
userRoute.get("/userAuth", middlewareAuth, allUsers);
userRoute.get("/userInfo",loggerMiddleware, jwtUsage, useJwt);
userRoute.get("/", allUsers);
userRoute.post("/form",validateForm,displayForm)
userRoute.get("/validateParams/:id",validateNumericQuery,displayForm)
userRoute.get("/geo",geoLocationMiddleware,allUsers)
export { userRoute };

