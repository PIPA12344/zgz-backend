import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DamController } from './dam/dam.controller';
import {DamService} from "./dam/dam.service";

@Module({
  imports: [],
  controllers: [AppController, DamController],
  providers: [AppService, DamService],
})
export class AppModule {}
