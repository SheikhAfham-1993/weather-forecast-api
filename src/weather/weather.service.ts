import { Injectable } from "@nestjs/common";
import axios from "axios";

@Injectable({})
export class WeatherService {
    getWeatherData(city: string) {
        return axios.get(`${process.env.API_URL}/current?access_key=${process.env.API_KEY}&query=${city}`)
        .then((response) => {return response.data});
    }

    getHistoricalWeather() {
        return "Hello World!";
    }
}