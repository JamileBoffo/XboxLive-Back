import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { Game } from './entities/game.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateGameDto } from './dto/update-game.dto';
import { handleError } from 'src/utils/handle-error.utils';
import { Prisma } from '@prisma/client';

@Injectable()
export class GameService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Game[]> {
    return this.prisma.game.findMany();
  }

  async findById(id: string): Promise<Game> {
    const record = await this.prisma.game.findUnique({ where: { id } });

    if (!record) {
      throw new NotFoundException(`Registro com o ${id} não encontrado`);
    }

    return record;
  }

  async findOne(id: string): Promise<Game> {
    return this.findById(id);
  }

  create(dto: CreateGameDto) {
    const data: Prisma.GameCreateInput = {
      titulo: dto.titulo,
      descricao: dto.descricao,
      imagem: dto.imagem,
      ano: dto.ano,
      score: dto.score,
      trailer: dto.trailer,
      gameplay: dto.gameplay,
      gender: {
        connect: {
          nome: dto.genderId,
        },
      },
    };
    return this.prisma.game.create({data, include: {gender: true}}).catch(handleError);
  }

  async update(id: string, dto: UpdateGameDto): Promise<Game> {
    await this.findById(id);

    const data: Prisma.GameUpdateInput = {
      titulo: dto.titulo,
      descricao: dto.descricao,
      imagem: dto.imagem,
      ano: dto.ano,
      score: dto.score,
      trailer: dto.trailer,
      gameplay: dto.gameplay,
      gender: {
        connect: {
          nome: dto.genderId,
        }
      }
    };

    return this.prisma.game.update({ where: { id }, data }).catch(handleError);
  }

  async delete(id: string) {
    await this.prisma.game.delete({ where: { id } });
  }
}
