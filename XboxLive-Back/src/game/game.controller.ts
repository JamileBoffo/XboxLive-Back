import { Body, Controller, HttpCode, HttpStatus, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { GameService } from './game.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Game } from './entities/game.entity';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Game')
@UseGuards(AuthGuard())
@ApiBearerAuth()
@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get()
  @ApiOperation({
    summary: "Listar todos os jogos favoritados!"
  })
  findAll(): Promise<Game[]>{
    return this.gameService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: "Buscar um jogo favoritado por ID!"
  })
  findOne(@Param('id') id: string): Promise<Game>{
    return this.gameService.findOne(id);
  }

  @Post()
  @ApiOperation({
    summary: "Adicionar um jogo a lista de favoritos!"
  })
  create(@Body() dto: CreateGameDto): Promise<Game> {
    return this.gameService.create(dto)
  }

  @Patch(':id')
  @ApiOperation({
    summary: "Atualizar um jogo favoritado pelo ID"
  })
  update(@Param('id') id: string, @Body() dto: UpdateGameDto): Promise<Game> {
    return this.gameService.update(id, dto);
  }


  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: "Deletar um jogo da lista de favoritos pelo ID"
  })
  delete(@Param('id') id: string) {
    return this.gameService.delete(id)
  }
}
