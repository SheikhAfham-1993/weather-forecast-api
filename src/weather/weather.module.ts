import { Module } from '@nestjs/common';
import { WeatherController } from './weather.controller';
import { WeatherService } from './weather.service';

import { MongooseModule } from '@nestjs/mongoose';
import { WeatherSchema } from './weather.model';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'WeatherLogs', schema: WeatherSchema }]),
  ],
  controllers: [WeatherController],
  providers: [WeatherService],
})
export class WeatherModule {}
