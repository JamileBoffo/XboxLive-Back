import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNumber, IsString, Matches, MinLength, minLength } from "class-validator";


export class CreateUserDto {
  @IsString()
  @ApiProperty({
    description: "nome do usuario",
    example: "User da Silva"
  })
  nome: string;
  @IsString()
  @ApiProperty({
    description: "email do usuario",
    example: "user@gmail.com"
  })
  email: string;
  @IsString()
  @MinLength(6)
  @ApiProperty({
    description: "senha do usuario",
    example: "senha123"
  })
  senha: string;
  @ApiProperty({
    description: "Confirmação de senha do usuario",
    example: "senha123"
  })
  confirmsenha: string;
  @IsNumber()
  @ApiProperty({
    description: "CPF do usuario",
    example: 11111111111
  })
  cpf: number;
  @IsBoolean()
  @ApiProperty({
    description: "Usuario é Administrador?",
    example: "True"
  })
  isAdmin: boolean;
}
