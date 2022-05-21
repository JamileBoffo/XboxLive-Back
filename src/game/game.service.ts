import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { Game } from './entities/game.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateGameDto } from './dto/update-game.dto';

@Injectable()
export class GameService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Game[]> {
    return this.prisma.game.findMany()
  }

  async findOne(id: string): Promise<Game> {
    const record = await this.prisma.game.findUnique({ where: { id }})

    if(!record) {
      throw new NotFoundException(`Registro com o ${id} não encontrado`)
    }

    return record;
  }

  create(dto: CreateGameDto): Promise<Game> {
    const data: Game = { ...dto };
    return this.prisma.game.create({ data });
  }

  update(id: string, dto: UpdateGameDto): Promise<Game> {
    const data: Partial<Game> = { ...dto };
    return this.prisma.game.update({ where: { id }, data });
  }

  async delete(id: string) {
    await this.prisma.game.delete({ where: { id }})
  }
}
