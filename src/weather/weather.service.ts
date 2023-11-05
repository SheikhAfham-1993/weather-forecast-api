import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable({})
export class WeatherService {
  constructor() {}
  async getWeatherData(city: string) {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=b68fbb2f17ba313402526ffe6c8e1285`,
    );
    return response.data;
  }

  async getWeatherForecast(city: string) {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&cnt=5&appid=b68fbb2f17ba313402526ffe6c8e1285`,
    );

    return response.data;
  }
}
