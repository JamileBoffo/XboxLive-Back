import { PartialType } from "@nestjs/swagger";
import { CreateGendersDto } from "./create-genders.dto";

export class UpdateGenderDto extends PartialType(CreateGendersDto) {}
