import { Request, Response } from "express";
import userLoginService from "../../services/user/userLogin.service";

const userLoginController = async (req: Request, res: Response) => {
    const { username, password } = req.body;
  
    const user = await userLoginService({ username, password });
  
    return res.status(200).json({ token: user});
  };
  
export default userLoginController;


