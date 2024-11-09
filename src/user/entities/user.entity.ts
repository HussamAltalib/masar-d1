import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Users')
export class User {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name: string;

    @Column()
    age: number;

}
