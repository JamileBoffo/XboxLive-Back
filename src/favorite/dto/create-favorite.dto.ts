import { ApiProperty } from "@nestjs/swagger";
import { IsUUID } from "class-validator";
import { Profile } from "src/profile/entities/profile.entity";


export class CreateFavoriteDto {
  @IsUUID(undefined, { each: true })
  @ApiProperty({
    description: "Perfil"
  })
  profile: Profile[];

  @IsUUID(undefined, { each: true })
  @ApiProperty({
    description: "Lista com os IDs dos jogos"
  })
  games: string[];
}
