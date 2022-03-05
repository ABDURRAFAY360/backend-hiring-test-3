import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VolumeModule } from './volume/volume.module';

@Module({
  imports: [VolumeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
