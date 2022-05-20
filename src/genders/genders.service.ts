import { Injectable } from '@nestjs/common';
import { CreateGendersDto } from './dto/create-genders.dto';
import { Gender } from './entities/genders.entity';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GendersService {
    constructor(private readonly prisma: PrismaService){}

    findAll():Promise<Gender[]> {
        return this.prisma.gender.findMany();
    }

    findOne(id: string): Promise<Gender> {
      return this.prisma.gender.findUnique({ where: { id }})
    }

    create(dto: CreateGendersDto): Promise<Gender> {
        const data: Gender = {...dto}
        return this.prisma.gender.create({ data });
    }
}
