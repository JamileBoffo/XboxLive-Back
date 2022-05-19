import { IsNumber, IsPositive } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateGameDto {
  @ApiProperty({
    description: "O nome do jogo",
    example: "The Sims 4"
  })
  nome: string;
  @ApiProperty({
    description: "Descrição do jogo",
    example: "É um jogo de controlar pessoas"
  })
  descricao: string;
  @IsPositive({
    message: "Número deve ser positivo"
  })
  @IsNumber()
  @ApiProperty({
    description: "Tamanho do jogo(somente numero)",
    example: "40GB"
  })
  tamanho: number;
  @IsPositive({
    message: "Número deve ser positivo"
  })
  @IsNumber()
  @ApiProperty({
    description: "Valor do jogo",
    example: "R$79"
  })
  valor: number;
}
