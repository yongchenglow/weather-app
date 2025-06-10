type WeatherData = {
  id: number;
  city: string;
  countryCode: string;
  condition: string;
  description: string;
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level?: number;
  ground_level?: number;
};

export type { WeatherData };
