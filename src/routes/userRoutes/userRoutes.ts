import express from "express";
import { authMiddleware } from "../../middlewares/authMiddleware";

import { Logger } from "../../middlewares/logger";
import { validateClass } from "../../middlewares/joiMiddleware";
import { Validator } from "../../middlewares/validator";
import { userControllers } from "../../controller/user-controller/userControllers";
import { geolocation } from "../../middlewares/geoLocationMiddleware";

const userRoute = express.Router();

const userController=new userControllers();
const geolocations=new geolocation();
const validateMiddleware=new validateClass();
const authmiddleware=new authMiddleware();
const loggerMiddleware=new Logger();

userRoute.post("/login",Validator, authmiddleware.middlewareAuth,userController.createToken);
userRoute.post("/userPost", authmiddleware.middlewareAuth, userController.userPosts);
userRoute.get("/userAuth", authmiddleware.middlewareAuth, userController.allUsers);
userRoute.get("/userInfo",loggerMiddleware.loggerMiddleware, authmiddleware.jwtUsage, userController.useJwt);
userRoute.get("/", userController.allUsers);
userRoute.post("/form",validateMiddleware.validateForm,userController.displayForm)
userRoute.get("/validateParams/:id",validateMiddleware.validateNumericQuery,userController.displayForm)
userRoute.get("/geo",geolocations.geoLocationMiddleware,userController.allUsers)
export { userRoute };

