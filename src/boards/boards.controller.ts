import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { StatusPipe } from './pipes/remove-status-validiation.pipe';

@Controller('boards')
@UseGuards(AuthGuard())
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get('/')
  getAllBoard() {
    return this.boardsService.getAllBoards();
  }

  @Post('/')
  createBoard(@Body(StatusPipe) createBoardDto: CreateBoardDto) {
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
