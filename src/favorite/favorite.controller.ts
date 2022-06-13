import { Controller, Get, Post, Body, Param,UseGuards  } from '@nestjs/common';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { ApiOperation, ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { FavoriteService } from './favorite.service';
import { AuthGuard } from '@nestjs/passport';

@ApiTags("Favorite")
@UseGuards(AuthGuard())
@ApiBearerAuth()
@Controller('favorite')
export class FavoriteController {
  constructor(private readonly favoriteService: FavoriteService) {}

  @Get()
  @ApiOperation({
    summary: "Listar todos os favoritos!"
  })
  findAll() {
    return this.favoriteService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: "Buscar um jogo favorito por ID!"
  })
  findOne(@Param('id') id: string) {
    return this.favoriteService.findOne(id);
  }

  @Post()
  @ApiOperation({
    summary: "Criar um novo favorito!"
  })
  create(@Body() dto: CreateFavoriteDto) {
    return this.favoriteService.create( dto );
  }
}
