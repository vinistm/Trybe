import{Entity,Column,PrimaryGeneratedColumn,ManyToOne,OneToOne} from "typeorm"
import { Transactions } from "./transactions.entity";
import { User } from "./user.entity";

@Entity("account")
export class Account{

    @PrimaryGeneratedColumn("increment")
    id:number;

    @Column({default:100})
    balance:number;

    @OneToOne(() => User,(users) => users.id)

    @ManyToOne(() => Transactions, (transactions) => transactions.id)
    transactions: Transactions;

    

}