import { Entity, Column, PrimaryGeneratedColumn,OneToMany,JoinTable} from "typeorm";
import { Veicule } from "./accounts.entity";
@Entity("users")


class User{
    @PrimaryGeneratedColumn("increment")
    id:string

    @Column()
    username:string

    @Column()
    password: string

    @OneToMany(() => Veicule,(veicule) => veicule.user)
    @JoinTable()
    veicule:Veicule[]
    

}
export {User}