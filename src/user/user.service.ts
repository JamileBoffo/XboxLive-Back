import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  private userSelect = {
    id: true,
    nome: true,
    email: true,
    senha: false,
    cpf: true,
    createdAt: true,
    updatedAt: true,
  };

  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<User[]> {
    return this.prisma.user.findMany({
      select: this.userSelect,
    });
  }

  async findById(id: string): Promise<User> {
    const record = await this.prisma.user.findUnique({
      where: { id },
      select: this.userSelect,
    });

    if (!record) {
      throw new NotFoundException(`Registro com o ${id}`);
    }

    return record;
  }

  async findOne(id: string): Promise<User> {
    return this.findById(id);
  }

  async create(dto: CreateUserDto): Promise<User> {
    if (dto.senha != dto.confirmsenha) {
      throw new BadRequestException('As senhas não conferem!!');
    }
    delete dto.confirmsenha;
    const data: User = { ...dto, senha: await bcrypt.hash(dto.senha, 10) };
    return this.prisma.user
      .create({ data, select: this.userSelect })
      .catch(this.handleError);
  }

  async update(id: string, dto: UpdateUserDto): Promise<User> {
    await this.findById(id);

    if (dto.senha) {
      if (dto.senha != dto.confirmsenha) {
        throw new BadRequestException('As senhas não conferem!!');
      }
    }

    delete dto.confirmsenha;
    const data: Partial<User> = { ...dto };

    if (data.senha) {
      data.senha = await bcrypt.hash(data.senha, 10);
    }

    return this.prisma.user.update({
      where: { id },
      data,
      select: this.userSelect,
    });
  }

  async delete(id: string) {
    await this.prisma.user.delete({ where: { id } });
  }

  handleError(error: Error): undefined {
    const errorlines = error.message?.split('\n');
    const lasterrorline = errorlines[errorlines.length - 1]?.trim();

    if (!lasterrorline) {
      console.error(error);
    }
    throw new UnprocessableEntityException(
      lasterrorline || 'Algum erro aconteceu ao executar a operação!',
    );
  }
}
