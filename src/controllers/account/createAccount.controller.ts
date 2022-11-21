import { Request, Response } from "express";
import createAccountService from "../../services/account/createAccount.service";

const createAccountController = async (req: Request, res: Response) => {
  const {
    userId,balance
  } = req.body;

  const debt = await createAccountService({
    userId,balance
  });

  return res.status(201).json(debt);
};

export default createAccountController;
