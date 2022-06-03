import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utils/handle-error.utils';
import { CreateFavoriteDto } from './dto/create-favorite.dto';

@Injectable()
export class FavoriteService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.favorite.findMany({
      select: {
        id: true,
        profile:{
          select: {
            titulo: true
          }
        },
        games:{
          select: {
            titulo: true,
            imagem: true,
          }
        }
      }
    })
  }

  findOne(id: string) {
    return this.prisma.favorite.findUnique({
      where: { id },
      include: {
        profile: {
          select: {
            titulo: true
          }
        },
        games: {
          select: {
            titulo: true,
            descricao: true,
            imagem: true,
            gameplay: true,
            trailer: true,
            score: true
          }
        }
      } })
  }

  create(profileId: string, dto: CreateFavoriteDto) {
    const data: Prisma.FavoriteCreateInput = {
      profile: {
        connect: {
          id: profileId,
        }
      },
      games: {
        connect: dto.games.map((gameId) => ({
          id: gameId,
        }))
      }
    }

    return this.prisma.favorite.create({ data, select: {
      id: true,
      profile: {
        select: {
          titulo: true,
        }
      },
      games: {
        select: {
          titulo: true,
        }
      }
    } }).catch(handleError)
  }
}
