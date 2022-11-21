import { Entity, Column, PrimaryGeneratedColumn,OneToOne,JoinColumn} from "typeorm";
import { Account } from "./accounts.entity";
@Entity("users")


class User{
    @PrimaryGeneratedColumn("increment")
    id:number;

    @Column()
    username:string

    @Column()
    password: string

    @OneToOne(() => Account,(account) => account.id)
    @JoinColumn()
    account:Account;
    

}
export {User}