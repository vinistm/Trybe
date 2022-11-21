import { Express } from "express";
import { userRoutes } from "./user.routes";
import { loginRoutes } from "./login.routes";

export const appRoutes = (app: Express) => {
    app.use("/user", userRoutes());
    app.use("/login",loginRoutes());
    
    };