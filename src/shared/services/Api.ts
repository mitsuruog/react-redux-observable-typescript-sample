import "rxjs/add/observable/from";
import { Observable } from "rxjs/Observable";

const getWeather = (lat: number, lon: number) => {
  const request = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&APPID=49f8541c5e9d0758175574596d1f532e`)
    .then(response => response.json());
  return Observable.from(request);
};

export {
  getWeather,
};
