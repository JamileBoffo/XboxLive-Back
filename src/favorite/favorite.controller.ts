import { Controller, Get, Post, Body,  Param } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Favorite")
@Controller('favorite')
export class FavoriteController {
  constructor(private readonly prisma: PrismaService) {}


  create(@Body() createFavoriteDto: CreateFavoriteDto) {
    return this.prisma.create(createFavoriteDto);
  }


  findAll() {
    return this.prisma.findAll();
  }



  findOne(id: string) {
    return this.favoriteService.findOne(id);
  }
}
