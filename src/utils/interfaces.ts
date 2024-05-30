interface TempAndHumidity {
  humidity: number;
  temperature: number;
  time: string;
}

interface PressureByTemp {
  pressureSurfaceLevel: number;
  temperature: number;
}

interface WeatherData {
  tempAndHumidity: TempAndHumidity;
  pressureByTemp: PressureByTemp;
}

export { WeatherData, TempAndHumidity, PressureByTemp}