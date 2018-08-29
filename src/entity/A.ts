import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne } from 'typeorm';
import { B } from './B';

@Entity()
export class A {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToOne(
        (type: any) => B,
        (o: B) => o.a
    )
    @JoinColumn()
    public b: B;
}
