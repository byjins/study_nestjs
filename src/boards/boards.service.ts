import { Injectable } from '@nestjs/common';
import { BoardRepository } from './db/board.repository';
import { CreateBoardDto } from './dto/create-board.dto';
import { Board } from './db/board.entity';
import { UpdateBoardDto } from './dto/update-board.dto';

@Injectable()
export class BoardsService {
  constructor(private readonly boardRepository: BoardRepository) {}

  getAllBoards() {
    return this.boardRepository.getAllBoards();
  }

  createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    return this.boardRepository.createPost(createBoardDto);
  }

  getBoardById(id: number) {
    return this.boardRepository.getPostById(id);
  }

  updateBoardById(id: number, updateData: UpdateBoardDto) {
    return this.boardRepository.updatePostById(id, updateData);
  }

  deleteBoardById(id: number) {
    return this.boardRepository.deletePostById(id);
  }
}
