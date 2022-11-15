import { IUserRequest,IUser } from "../../interfaces/user";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors";
import { hash } from "bcrypt";


const createUserService = async ({ username, password}: IUserRequest) :Promise<IUser>=> {

    const userRepository = AppDataSource.getRepository(User)

    const findUser = await userRepository.findOne({
        where: {
          username: username,
        },
      });
    
      if (findUser) {
        throw new AppError(400,"User already exists");
      }
    const hashedPassword = await hash(password, 10)

    const user = userRepository.create({
        username,
        password: hashedPassword        
    })

    await userRepository.save(user)
    
    const userReturn: IUser={
      id:user.id,
      username:user.username,
      
    }
    return userReturn

}

export default createUserService