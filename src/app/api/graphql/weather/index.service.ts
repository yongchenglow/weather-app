import axios from "axios";
import { WeatherData } from "@/app/api/graphql/weather/index.types";

const API_KEY = process.env.OPENWEATHER_API_KEY;

class WeatherService {
  async getWeather(city: string, countryCode: string): Promise<WeatherData> {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${API_KEY}&units=metric`;

    const res = await axios.get(url);
    const data = res.data;

    return {
      id: data.id,
      city: data.name,
      countryCode: data.sys.country,
      condition: data.weather[0].main,
      description: data.weather[0].description,
      temp: data.main.temp,
      feels_like: data.main.feels_like,
      temp_min: data.main.temp_min,
      temp_max: data.main.temp_max,
      pressure: data.main.pressure,
      humidity: data.main.humidity,
      sea_level: data.main.sea_level,
      ground_level: data.main.grnd_level,
    };
  }
}

export const weatherService = new WeatherService();
