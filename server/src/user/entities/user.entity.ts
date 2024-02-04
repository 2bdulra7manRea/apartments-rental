import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  hashed_password: string;

  @Column()
  email: string;

  @Column({ default: 'CLIENT' })
  role: string;
}
