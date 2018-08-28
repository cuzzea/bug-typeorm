import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne } from 'typeorm';
import { B } from './B';

@Entity()
export class A {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToOne(() => B, async (o: B) => o.a, { cascade: true })
  @JoinColumn()
  public b: Promise<B>;
}
