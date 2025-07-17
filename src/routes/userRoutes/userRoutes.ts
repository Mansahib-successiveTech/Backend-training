import express from "express";
import { jwtUsage, middlewareAuth } from "../../middlewares/authMiddleware";
import displayForm, {
  allUsers,
  createToken,
  useJwt,
  userPosts,
} from "../../controller/user-controller/userControllers";
import loggerMiddleware from "../../middlewares/logger";
import { validateForm, validateLogin, validateNumericQuery } from "../../middlewares/joiMiddleware";
import { geoLocationMiddleware } from "../../middlewares/geoLocationMiddleware";
import { Validator } from "../../middlewares/validator";

const userRoute = express.Router();

userRoute.post("/users/login",Validator, middlewareAuth, createToken);
userRoute.post("/users/userPost", middlewareAuth, userPosts);
userRoute.get("/users/userAuth", middlewareAuth, allUsers);
userRoute.get("/users/userInfo",loggerMiddleware, jwtUsage, useJwt);
userRoute.get("/users", allUsers);
userRoute.post("/users/form",validateForm,displayForm)
userRoute.get("/users/validateParams/:id",validateNumericQuery,displayForm)
userRoute.get("/users/geo",geoLocationMiddleware,allUsers)
export { userRoute };

