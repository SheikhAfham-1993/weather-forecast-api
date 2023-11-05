import { Controller, Get, HttpException, Param } from '@nestjs/common';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private weatherService: WeatherService) {}

  @Get('/getWeather/:city')
  async getWeatherData(@Param('city') city: string) {
    try {
      return await this.weatherService.getWeatherData(city);
    } catch (error) {
      throw new HttpException(error, error.response.status);
    }
  }

  @Get('/getWeatherForecast/:city')
  async getWeatherForecast(@Param('city') city) {
    try {
      const response = await this.weatherService.getWeatherForecast(city);
      return response;
    } catch (error) {
      throw new HttpException(error, error.response.status);
    }
  }
}
