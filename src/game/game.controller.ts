import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { GameService } from './game.service';
import { CreateGameDto } from './dto/create-game.dto';
import { Game } from './entities/game.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Game')
@Controller('game')
export class GameController {
  constructor(private gameService: GameService) {}

  @Get()
  findAll(): Game[]{
    return this.gameService.findAll();
  }

  /*@Get()
  findById(): Game[]{
    return this.gameService.findById(id);
  }*/

  @Post()
  create(createGameDto: CreateGameDto): Game {
    return this.gameService.create(createGameDto)
  }

  /*@Put()
  update(updateGameDto: UpdateGameDto): Game {
    return this.gameService.update(updateGameDto)
  }*/

  /*@Delete()
  delete(deleteGameDto: DeleteGameDto): Game {
    return this.gameService.delete(deleteGameDto)
  }*/
}
