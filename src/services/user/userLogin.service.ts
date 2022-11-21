import { User } from "../../entities/user.entity";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";
import { IUserLogin } from "../../interfaces/user";
import * as bcryptjs from "bcrypt"
import jwt from "jsonwebtoken"

const userLoginService = async ({ username, password }: IUserLogin) => {
    const userInfoRepository = AppDataSource.getRepository(User);
  
    const user = await userInfoRepository.findOneBy({ username: username });
  
    if (!user) {
      throw new AppError(400, "Wrong username/password");
    }
  
    const passwordMatch = bcryptjs.compareSync(password, user.password);
  
    if (!passwordMatch) {
      throw new AppError(400, "Wrong username/password");
    }
    
    const token = jwt.sign(
      {
        id: user!.id,
        username: user!.username,
      },
      process.env.SECRET_KEY as string,
      {
        expiresIn: "24h",
      }
    );
   
    return token;
  };
  export default userLoginService;
  