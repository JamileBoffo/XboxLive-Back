import { Game } from "src/game/entities/game.entity";
import { Profile } from "src/game/entities/profile.entity"


export class Favorite {
  id: string;
  game?: Game;
  profile?: Profile;
  createdAt: Date;
  updatedAt: Date
}
