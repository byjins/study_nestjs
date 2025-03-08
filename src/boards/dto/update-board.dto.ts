import { IsNotEmpty } from 'class-validator';
import { BoardStatus } from '../db/board.entity';

export class UpdateBoardDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  status: BoardStatus;
}
