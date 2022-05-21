import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { GendersService } from './genders.service';
import { CreateGendersDto } from './dto/create-genders.dto';
import { Gender } from './entities/genders.entity';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { UpdateGenderDto } from './dto/update-genders.dto';

@ApiTags('Gender')
@Controller('genders')
export class GendersController {
  constructor(private readonly genderService: GendersService) {}

  @Get()
  findAll(): Promise<Gender[]> {
    return this.genderService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: "Listar todos os jogos da loja!"
  })
  findOne(@Param('id') id: string):Promise<Gender>{
    return this.genderService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateGendersDto): Promise<Gender> {
    return this.genderService.create(dto);
  }

  @Patch(':id')
  @ApiOperation({
    summary: "Atualizar um jogo da loja pelo ID"
  })
  update(@Param('id') id: string, @Body() dto: UpdateGenderDto): Promise<Gender> {
    return this.genderService.update(id, dto)
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: "Deletar um jogo da loja pelo ID"
  })
  delete(@Param('id') id: string) {
    return this.genderService.delete(id)
  }
}
