import { Gender } from "src/genders/entities/genders.entity";

export class Game {
  id?: string;
  titulo: string;
  descricao: string;
  imagem: string;
  ano: number;
  score: number;
  trailer: string;
  gameplay: string;
  createdAt?: Date;
  updatedAt?: Date;
  gender?: Gender[];
}
