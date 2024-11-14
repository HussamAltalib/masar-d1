import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Users')
export class User {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    Username: string;

    @Column()
    Password: string;


}
