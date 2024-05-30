import db from "../database/db.json";
import * as interfaces from "../utils/interfaces";

const getDataWeather = (): interfaces.WeatherData[] => db;

// const clima = getDataWeather();
// console.log(clima);

// getHourlyTemperatureAndHumidity() =>
// DEBE RETORNAR UNA COLLECTION CON LOS SIGUIENTES OBJETOS:
// {time: '2023-07-21T14:00:00Z', humidity: 86, temperature: 13.26}.

const getHourlyTemperatureAndHumidity = (): interfaces.TempAndHumidity[] => {
  const weatherData = getDataWeather();

  return weatherData.map((data) => ({
    time: data.tempAndHumidity.time,
    humidity: data.tempAndHumidity.humidity,
    temperature: data.tempAndHumidity.temperature,
  }));
};

// const clima = getHourlyTemperatureAndHumidity();
// console.log(clima);


// `getPressureLevelByTemperature(temperature)` => Retorna una collection en la que la propiedad
//  `temperature` de los objetos sea igual o mayor al valor `temperature` recibido por parámetro.
//   Los objetos que conformen esta collection tienen que tener la forma `{pressureSurfaceLeve: 1009.62, temperature: 21.25}`.

const getPressureLevelByTemperature = (
  temperature: number
): interfaces.PressureByTemp[] => {
  const weatherData = getDataWeather(); 
  return weatherData
    .filter((data) => data.pressureByTemp.temperature >= temperature)
    .map((data) => ({
      pressureSurfaceLevel: data.pressureByTemp.pressureSurfaceLevel,
      temperature: data.pressureByTemp.temperature,
    }));
};

// const climaFiltrado = getPressureLevelByTemperature(20);
// console.log(climaFiltrado);

export { getHourlyTemperatureAndHumidity, getPressureLevelByTemperature };
