import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum BoardStatus {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}

@Entity('board')
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({
    default: BoardStatus.PUBLIC,
  })
  status: BoardStatus;
}
