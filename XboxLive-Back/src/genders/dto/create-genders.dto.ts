import { ApiProperty } from "@nestjs/swagger";

export class CreateGendersDto {
    @ApiProperty({
    description: "O nome do gênero",
    example: "Ação"
    })
    nome: string;
}