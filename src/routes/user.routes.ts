import {Router} from "express"
import schemaValidation from "../middlewares/schemaValidation"

import createUserController from "../controllers/user/createUser.controller"
import registerSchema from "../schemas/register/register.schema"

const routes = Router()
export const userRoutes = () =>{
     routes.post("/register",schemaValidation(registerSchema),createUserController)
     return routes;
}