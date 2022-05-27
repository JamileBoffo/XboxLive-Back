import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameModule } from './game/game.module';
import { GendersModule } from './genders/genders.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { FavoriteModule } from './favorite/favorite.module';
import { ProfileModule } from './profile/profile.module';


@Module({
  imports: [GameModule, GendersModule, PrismaModule, UserModule, FavoriteModule, ProfileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
