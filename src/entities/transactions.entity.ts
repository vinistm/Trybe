import { Entity, Column, PrimaryGeneratedColumn,OneToMany,JoinTable,CreateDateColumn} from "typeorm";
import { Account } from "./accounts.entity";
@Entity("transactions")


class Transactions{
    @PrimaryGeneratedColumn("increment")
    id:string

    @OneToMany(() => Account,(account) => account.id)
    debitedAccount:Account

    @OneToMany(() => Account,(account) => account.id)
    creditedAccount:Account

    @Column()
    value: number;

    @CreateDateColumn()
    created_at: Date;
    

}
export {Transactions}