import { ApiProperty } from "@nestjs/swagger";
import { IsUrl } from "class-validator";

export class CreateProfileDto {
  @ApiProperty({
    description: "Nome do perfil",
    example: "Maria"
  })
  titulo: string;
  @IsUrl()
  @ApiProperty({
    description: "Link da imagem do perfil",
    example: "https://www.reabilitybauru.com.br/wp-content/uploads/2017/01/perfil-300x300.png"
  })
  imagemURL: string
}
