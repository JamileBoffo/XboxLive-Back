import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { GendersService } from './genders.service';
import { CreateGendersDto } from './dto/create-genders.dto';
import { Gender } from './entities/genders.entity';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { UpdateGenderDto } from './dto/update-genders.dto';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Gender')
@Controller('genders')
export class GendersController {
  constructor(private readonly genderService: GendersService) {}

  @Get()
  @ApiOperation({
    summary: "Listar todos os gêneros de jogos!"
  })
  findAll(): Promise<Gender[]> {
    return this.genderService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @ApiOperation({
    summary: "Buscar um gênero de jogos por ID!"
  })
  findOne(@Param('id') id: string):Promise<Gender>{
    return this.genderService.findOne(id);
  }

  @Post()
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @ApiOperation({
    summary: "Criar um gênero de jogos!"
  })
  create(@Body() dto: CreateGendersDto): Promise<Gender> {
    return this.genderService.create(dto);
  }

  @Patch(':id')
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @ApiOperation({
    summary: "Atualizar um gênero de jogos pelo ID"
  })
  update(@Param('id') id: string, @Body() dto: UpdateGenderDto): Promise<Gender> {
    return this.genderService.update(id, dto)
  }

  @Delete(':id')
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: "Deletar um gênero de jogos pelo ID"
  })
  delete(@Param('id') id: string) {
    return this.genderService.delete(id)
  }
}
