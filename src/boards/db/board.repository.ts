import { Repository } from 'typeorm';
import { Board } from './board.entity';
import {
  BadRequestException,
  HttpCode,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBoardDto } from '../dto/create-board.dto';
import { UpdateBoardDto } from '../dto/update-board.dto';

@Injectable()
export class BoardRepository {
  constructor(
    @InjectRepository(Board)
    private readonly boardRepository: Repository<Board>
  ) {}

  async getAllBoards(): Promise<Board[]> {
    return await this.boardRepository.find();
  }

  async createPost(createBoardDto: CreateBoardDto): Promise<Board> {
    const board = this.boardRepository.create(createBoardDto);
    return this.boardRepository.save(board);
  }

  async getPostById(id: number): Promise<Board> {
    const found = await this.boardRepository.findOne({ where: { id } });

    if (!found) {
      throw new NotFoundException('Board Not Found');
    }

    return found;
  }

  async updatePostById(id: number, updateData: UpdateBoardDto) {
    const found = await this.getPostById(id);

    if (!found) {
      throw new NotFoundException('Board Not Found');
    }

    if (!updateData.title || !updateData.description) {
      // 400 Bad Request 에러 발생
      throw new BadRequestException('Title and description are required');
    }

    await this.boardRepository.update(id, {
      ...updateData,
    });

    return {
      message: 'Board Update Successfully',
      data: updateData,
    };
  }

  async deletePostById(id: number) {
    const found = await this.getPostById(id);

    if (!found) {
      throw new NotFoundException('Board Not Found');
    }

    await this.boardRepository.delete(id);

    return {
      message: 'Board Delete Successfully',
    };
  }
}
