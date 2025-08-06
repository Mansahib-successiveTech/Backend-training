import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware";

import { Logger } from "../middlewares/logger";
import { validateClass } from "../middlewares/joiMiddleware";
import { Validator } from "../middlewares/validator";
import { userControllers } from "../controller/userControllers";
import { geolocation } from "../middlewares/geoLocationMiddleware";
import { userData } from "../controller/userData";
import { SignUp } from "../controller/register";
import { LoginUserAuth } from "../middlewares/loginAuth";
import { LoginUser } from "../controller/login";
import { authorization } from "../middlewares/authorization";

const userRoute = express.Router();

const userController=new userControllers();
const geolocations=new geolocation();
const validateMiddleware=new validateClass();
const authmiddleware=new authMiddleware();
const loggerMiddleware=new Logger();
const userPost=new userData();
const loginuserMiddleware=new LoginUserAuth();

const loginController=new LoginUser();
const RegisterUser=new SignUp();

userRoute.post("/loginAuth",Validator,loginuserMiddleware.loginUserAuth,userController.createToken);
userRoute.post("/userPost", loginuserMiddleware.loginUserAuth, userController.userPosts);
userRoute.get("/userAuth", loginuserMiddleware.loginUserAuth, userController.allUsers);
userRoute.get("/userInfo",loggerMiddleware.loggerMiddleware, authmiddleware.jwtUsage, userController.useJwt);
userRoute.get("/", userController.allUsers);
userRoute.post("/form",validateMiddleware.validateForm,userController.displayForm)
userRoute.get("/validateParams/:id",validateMiddleware.validateNumericQuery,userController.displayForm)
userRoute.get("/geo",geolocations.geoLocationMiddleware,userController.allUsers)
userRoute.post("/send-user",validateMiddleware.validateUserData,userPost.userpost)
userRoute.post("/loginMongo",loginuserMiddleware.loginUserAuth,userController.allUsers)


// register login using mongo
userRoute.post("/register",RegisterUser.registerUser)
userRoute.post("/login",loginController.loginUser)
userRoute.get("/protected",authorization,userController.allUsers)
export { userRoute };

