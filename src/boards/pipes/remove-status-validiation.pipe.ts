import { Injectable, PipeTransform } from '@nestjs/common';
import { CreateBoardDto } from '../dto/create-board.dto';
import { BoardStatus } from '../db/board.entity';

@Injectable()
export class StatusPipe implements PipeTransform {
  transform(value: CreateBoardDto) {
    // 클라이언트가 status 값을 보내도 삭제
    if ('status' in value) {
      delete value.status;
    }

    return value;
  }
}
