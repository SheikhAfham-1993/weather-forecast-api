import { Injectable } from "@nestjs/common";

@Injectable({})
export class WeatherService {
    getWeatherData() {
        return "Hello World!";
    }
}