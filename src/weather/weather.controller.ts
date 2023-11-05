import { Controller, Get, HttpException, Param } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { WeatherLogs } from './weather.model';

@Controller('weather')
export class WeatherController {
  constructor(
    private weatherService: WeatherService,
    @InjectModel('WeatherLogs')
    private readonly weatherLogModel: Model<WeatherLogs>,
  ) {}

  @Get('/getWeather/:city')
  async getWeatherData(@Param('city') city: string) {
    try {
      const response = await this.weatherService.getWeatherData(city);
      return response;
    } catch (error) {
      const weatherLog = new this.weatherLogModel({
        city,
        apiEndpoint: `getWeather/${city}`,
        timeStamp: new Date(),
        status: error.response.status,
        errorMessage: error.response.statusText,
      });
      await weatherLog.save();
      throw new HttpException(error.response.statusText, error.response.status);
    }
  }

  @Get('/getWeatherForecast/:city')
  async getWeatherForecast(@Param('city') city) {
    try {
      const response = await this.weatherService.getWeatherForecast(city);
      return response;
    } catch (error) {
      const weatherLog = new this.weatherLogModel({
        city,
        apiEndpoint: `getWeatherForecast/${city}`,
        timeStamp: new Date(),
        status: error.response.status,
        errorMessage: error.response.statusText,
      });
      await weatherLog.save();
      throw new HttpException(error.response.statusText, error.response.status);
    }
  }
}
