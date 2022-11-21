import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";
import { IAccountRequest } from "../../interfaces/account";
import { Account } from "../../entities/accounts.entity";



const createAccountService = async ({
  balance
}: IAccountRequest) => {
  const accountRepository = AppDataSource.getRepository(Account);
 
  const account = new Account();
  account.balance = balance;
  

  accountRepository.create(account);

  await accountRepository.save(account);

  return account;
};

export default createAccountService;
