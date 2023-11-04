import { Controller, Get, Req } from '@nestjs/common';
import { WeatherService } from './weather.service';


@Controller("weather")
export class WeatherController {
  constructor(private weatherService: WeatherService) {}

  @Get('/getWeather')
  getWeatherData(@Req() req) {
    return this.weatherService.getWeatherData(req.body.city);
  }

  @Get('/getHistoricalWeather')
  getHistoricalWeather(@Req() req) {
    return this.weatherService.getHistoricalWeather();
  }
}
