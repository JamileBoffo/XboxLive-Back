import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StoreModule } from './store/store.module';
import { GameModule } from './game/game.module';
import { GendersModule } from './genders/genders.module';
import { PrismaModule } from './prisma/prisma.module';


@Module({
  imports: [StoreModule, GameModule, GendersModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
