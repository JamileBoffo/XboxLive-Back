import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";


export class LoginDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Nicknema do usuario',
    example: 'user123'
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
