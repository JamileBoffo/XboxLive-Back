import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { FavoriteService } from './favorite.service';
import { LoggedUser } from 'src/auth/loggeduser.decorator';
import { User } from 'src/user/entities/user.entity';

@ApiTags("Favorite")
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
  create(@LoggedUser() user: User, @Body() dto: CreateFavoriteDto) {
    return this.favoriteService.create(user.id, dto);
  }
}
