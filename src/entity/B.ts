import {Entity, PrimaryGeneratedColumn, Column, OneToOne} from "typeorm";
import { A } from './A';

@Entity()
export class B {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToOne(
        (type: any) => A,
        async (o: A) => await o.b)
    a: Promise<A>;
  
}
