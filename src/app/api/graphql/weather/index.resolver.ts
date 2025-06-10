import { builder } from "@/app/api/graphql/builder";
import { weatherService } from "@/app/api/graphql/weather/index.service";
import { WeatherData } from "@/app/api/graphql/weather/index.types";

const weatherRef = builder.objectRef<WeatherData>("Weather");

weatherRef.implement({
  fields: (t) => ({
    id: t.exposeInt("id"),
    condition: t.exposeString("condition"),
    description: t.exposeString("description"),
    temp: t.exposeFloat("temp"),
    feels_like: t.exposeFloat("feels_like"),
    temp_min: t.exposeFloat("temp_min"),
    temp_max: t.exposeFloat("temp_max"),
    pressure: t.exposeInt("pressure"),
    humidity: t.exposeInt("humidity"),
    sea_level: t.exposeInt("sea_level", { nullable: true }),
    ground_level: t.exposeInt("ground_level", { nullable: true }),
  }),
});

builder.queryType({
  fields: (t) => ({
    weather: t.field({
      type: weatherRef,
      args: {
        city: t.arg.string({ required: true }),
        countryCode: t.arg.string({ required: true }),
      },
      resolve: async (_parent, args) => {
        return weatherService.getWeather(args.city, args.countryCode);
      },
    }),
  }),
});
