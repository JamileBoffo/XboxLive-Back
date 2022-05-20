import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { GendersService } from './genders.service';
import { CreateGendersDto } from './dto/create-genders.dto';
import { Gender } from './entities/genders.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Gender')
@Controller('genders')
export class GendersController {
  constructor(private readonly genderService: GendersService) {}

  @Get()
  findAll(): Promise<Gender[]> {
    return this.genderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string):Promise<Gender>{
    return this.genderService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateGendersDto): Promise<Gender> {
    return this.genderService.create(dto);
  }

  /*@Put()
  update(updateGenderDto: UpdateGenderDto): Gender {
    return this.genderService.update(updateGenderDto)
  }*/

  /*@Delete()
  delete(deleteGenderDto: DeleteGenderDto): Gender {
    return this.genderService.delete(deleteGenderDto)
  }*/
}
