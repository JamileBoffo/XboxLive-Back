import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProfileService } from './profile.service';
import { Profile } from './entities/profile.entity';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Profile')
@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get()
  @ApiOperation({
    summary: "Listar todos os perfis!"
  })
  findAll(): Promise<Profile[]> {
    return this.profileService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: "Buscar um perfil por ID!"
  })
  findOne(@Param('id') id: string): Promise<Profile> {
    return this.profileService.findOne(id);
  }

  @Post()
  @ApiOperation({
    summary: "Criar um novo perfil!"
  })
  create(@Body() dto: CreateProfileDto): Promise<Profile> {
    return this.profileService.create(dto);
  }

  @Patch(':id')
  @ApiOperation({
    summary: "Atualizar um perfil!"
  })
  update(@Param('id') id: string, @Body() dto: UpdateProfileDto) {
    return this.profileService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: "Deletar um perfil!"
  })
  delete(@Param('id') id: string) {
    return this.profileService.delete(id);
  }
}
