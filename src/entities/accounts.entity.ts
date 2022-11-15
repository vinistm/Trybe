import{
    Entity,Column,PrimaryGeneratedColumn,ManyToOne
} from "typeorm"
import { User } from "./user.entity";

@Entity("veicule")
export class Veicule{

    @PrimaryGeneratedColumn("increment")
    id:number;

    @Column()
    balance:number;

    @ManyToOne(()=> User,(user)=> user.id)
    user:User;
    

}