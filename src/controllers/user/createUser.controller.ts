import { Request,Response } from "express";
import createUserService from "../../services/user/createUser.service";

const createUserController = async (req: Request, res: Response) => {
    const{username,password} = req.body;

    const createUser = await createUserService({
        username,
        password
    })
    
    return res.status(201).json(createUser)
  };
  export default createUserController;