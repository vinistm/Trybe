import {Router} from "express"
import schemaValidation from "../middlewares/schemaValidation"

import createUserController from "../controllers/user/createUser.controller"
import createAccountController from "../controllers/account/createAccount.controller"
import registerSchema from "../schemas/register/register.schema"
import verifyAuthToken from "../middlewares/verifyAuthToken.middleware"

const routes = Router()
export const userRoutes = () =>{
     routes.post("/register",schemaValidation(registerSchema),createUserController)
     routes.post("/account",createAccountController,verifyAuthToken)
     return routes;
}