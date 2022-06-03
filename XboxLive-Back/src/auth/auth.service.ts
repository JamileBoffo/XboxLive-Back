import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { LoginResponseDto } from './dto/login-response.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService, private readonly jwtService: JwtService) {}

  async login(loginDto: LoginDto): Promise<LoginResponseDto> {
    const {email,password } = loginDto;

    const user = await this.prisma.user.findUnique({ where: { email }})

    if(!user){
      throw new UnauthorizedException('Usuario ou senha inválidos!')
    }

    const isHashValid = await bcrypt.compare(password, user.senha);

    if(!isHashValid) {
      throw new UnauthorizedException('Usuario ou senha inválidos!')
    }

    delete user.senha;



    return {
      token: this.jwtService.sign({ email }),
      user,
    }
  }
}
