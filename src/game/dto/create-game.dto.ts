import { IsNumber, IsPositive } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateGameDto {
  @ApiProperty({
    description: "O nome do jogo",
    example: "The Sims 4"
  })
  titulo: string;
  @ApiProperty({
    description: "Descrição do jogo",
    example: "É um jogo de controlar pessoas"
  })
  descricao: string;
  @ApiProperty({
    description: "Link da Imagem/Poster do jogo",
    example: "https://s2.glbimg.com/63RyfB6MLfUIxkTtegPZZ0FOx8g=/e.glbimg.com/og/ed/f/original/2021/03/20/felicidade.jpg"
  })
  imagem: string;
  @IsPositive({
    message: "Número deve ser positivo"
  })
  @IsNumber()
  @ApiProperty({
    description: "Ano de lançamento do jogo",
    example: "2011"
  })
  ano: number;
  @IsPositive({
    message: "Número deve ser positivo"
  })
  @IsNumber()
  @ApiProperty({
    description: "Avaliação do jogo(0 a 5)",
    example: "3"
  })
  score: number;
  @ApiProperty({
    description: "Link do trailer do jogo(Youtube)",
    example: "<iframe width=560 height=315 src=https://www.youtube.com/embed/liuFhVXAlZw title=YouTube video player frameborder=0 allow=accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture allowfullscreen></iframe>"
  })
  trailer: string;
  @ApiProperty({
    description: "Link da Gameplay do jogo(Youtube)",
    example: "<iframe width=560 height=315 src=https://www.youtube.com/embed/liuFhVXAlZw title=YouTube video player frameborder=0 allow=accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture allowfullscreen></iframe>"
  })
  gameplay: string;
}
