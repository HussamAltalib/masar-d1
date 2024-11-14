import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";
@Entity('articles')
export class Article {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    title: string;

    @Column()
    body: string;
}
