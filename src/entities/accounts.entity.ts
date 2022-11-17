import{Entity,Column,PrimaryGeneratedColumn} from "typeorm"

@Entity("account")
export class Account{

    @PrimaryGeneratedColumn("increment")
    id:number;

    @Column({default:100})
    balance:number;

    

}