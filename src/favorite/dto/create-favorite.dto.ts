import { ApiProperty } from "@nestjs/swagger";
import { IsUUID } from "class-validator";


export class CreateFavoriteDto {
  @IsUUID()
  @ApiProperty({
    description: "Id do usuario esta criando um favorito"
  })
  profileId: string;

  @IsUUID(undefined, { each: true })
  @ApiProperty({
    description: "Lista com os IDs dos jogos"
  })
  gameId: string;

}
