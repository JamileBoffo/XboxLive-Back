import { ApiProperty } from "@nestjs/swagger";
import { IsUUID } from "class-validator";



export class CreateFavoriteDto {
  @IsUUID(undefined, { each: true })
  @ApiProperty({
    description: "Perfil"
  })
  profileId: string;

  @IsUUID(undefined, { each: true })
  @ApiProperty({
    description: "Lista com os IDs dos jogos"
  })
  games: string[];
}
