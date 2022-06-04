import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class LoginDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({
    description: 'Email do usuario',
    example: 'user@gmail.com'
  })
  email: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Senha do usuario',
    example: 'pass123'
  })
  password: string;
}
