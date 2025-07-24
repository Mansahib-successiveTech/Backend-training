import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware";

import { Logger } from "../middlewares/logger";
import { validateClass } from "../middlewares/joiMiddleware";
import { Validator } from "../middlewares/validator";
import { userControllers } from "../controller/userControllers";
import { geolocation } from "../middlewares/geoLocationMiddleware";
import { userData } from "../controller/userData";
import { SignUp } from "../controller/register";
import { LoginUser } from "../middlewares/login";

const userRoute = express.Router();

const userController=new userControllers();
const geolocations=new geolocation();
const validateMiddleware=new validateClass();
const authmiddleware=new authMiddleware();
const loggerMiddleware=new Logger();
const userPost=new userData();
const RegisterUser=new SignUp();
const loginuser=new LoginUser();
userRoute.post("/login",Validator,loginuser.loginUser,userController.createToken);
userRoute.post("/userPost", loginuser.loginUser, userController.userPosts);
userRoute.get("/userAuth", loginuser.loginUser, userController.allUsers);
userRoute.get("/userInfo",loggerMiddleware.loggerMiddleware, authmiddleware.jwtUsage, userController.useJwt);
userRoute.get("/", userController.allUsers);
userRoute.post("/form",validateMiddleware.validateForm,userController.displayForm)
userRoute.get("/validateParams/:id",validateMiddleware.validateNumericQuery,userController.displayForm)
userRoute.get("/geo",geolocations.geoLocationMiddleware,userController.allUsers)
userRoute.post("/send-user",validateMiddleware.validateUserData,userPost.userpost)
userRoute.post("/register",RegisterUser.registerUser)
userRoute.post("/loginMongo",loginuser.loginUser,userController.allUsers)

export { userRoute };

