import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGendersDto } from './dto/create-genders.dto';
import { Gender } from './entities/genders.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateGenderDto } from './dto/update-genders.dto';

@Injectable()
export class GendersService {
  genders: Gender[] = [];
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Gender[]> {
    return this.prisma.gender.findMany();
  }

  async findById(id: string): Promise<Gender> {
    const record= await this.prisma.gender.findUnique({ where: { id } });

    if(!record) {
      throw new NotFoundException("Registro com o ${id}")
    }

    return record;
  }

  async findOne(id: string): Promise<Gender> {
    return this.findById(id)
  }

  create(dto: CreateGendersDto): Promise<Gender> {
    const data: Gender = { ...dto };
    return this.prisma.gender.create({ data });
  }

  async update(id: string, dto: UpdateGenderDto): Promise<Gender> {
    await this.findById(id)
    const data: Partial<Gender> = { ...dto };
    return this.prisma.gender.update({ where: { id }, data });
  }

  async delete(id: string) {
    await this.prisma.gender.delete({ where: { id }})
  }
}
