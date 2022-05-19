import { Body, Controller, Get, Post } from '@nestjs/common';
import { GendersService } from './genders.service';
import { CreateGendersDto } from './dto/create-genders.dto';
import { Gender } from './entities/genders.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Genders')
@Controller('genders')
export class GendersController {
  constructor(private genderService: GendersService) {}

  @Get()
  findAll(): Gender[] {
    return this.genderService.findAll();
  }

  /*@Get()
  findById(): Gender[]{
    return this.genderService.findById(id);
  }*/

  @Post()
  create(@Body() createGenderDto: CreateGendersDto): Gender {
    return this.genderService.create(createGenderDto);
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
