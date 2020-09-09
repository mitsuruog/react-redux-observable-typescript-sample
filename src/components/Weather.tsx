import * as React from "react";
import { useSelector } from "react-redux";

import { RootState } from "../shared/store/reducers";

export interface WeatherProps {}

export const Weather: React.SFC<WeatherProps> = () => {
  const { weather } = useSelector((state: RootState) => state.weather);
  if (!weather) {
    return null;
  }
  return (
    <div className="weather">
      <h2>{weather.name}</h2>
      <dl>
        <dt>Weather</dt>
        <dd>
          {weather.weather[0].main}
          <small>({weather.weather[0].description})</small>
        </dd>
        <dt>Temperature(Max/Min)</dt>
        <dd>
          {weather.main.temp_max}℃ / {weather.main.temp_min}℃
        </dd>
      </dl>
    </div>
  );
};
