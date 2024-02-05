import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

// have a name, description, floor area size,
// price per month, number of rooms, valid geolocation coordinates, date added and an
// associated realtor

@Entity()
export class Apartment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column()
  coordinates: string;

  @Column({ default: 0, type: 'int' })
  number_of_rooms: number;

  @Column({ default: 0, type: 'double' })
  price_per_month: number;

  @Column({ default: 0, type: 'double' })
  floor_area_size: number;

  @Column({ default: true })
  status: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
