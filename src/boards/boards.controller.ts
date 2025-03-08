import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UsePipes,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';
import { StatusPipe } from './pipes/remove-status-validiation.pipe';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get('/')
  getAllBoard() {
    return this.boardsService.getAllBoards();
  }

  @Post('/')
  createBoard(@Body(new StatusPipe()) createBoardDto: CreateBoardDto) {
    return this.boardsService.createBoard(createBoardDto);
  }

  @Get('/:id')
  getBoardById(@Param('id', ParseIntPipe) id: number) {
    return this.boardsService.getBoardById(id);
  }

  @Patch('/:id')
  updateBoardById(@Param('id', ParseIntPipe) id: number, @Body() updateData: UpdateBoardDto) {
    return this.boardsService.updateBoardById(id, updateData);
  }

  @Delete('/:id')
  deleteBoardById(@Param('id', ParseIntPipe) id: number) {
    return this.boardsService.deleteBoardById(id);
  }
}
