import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import { Epic } from "redux-observable";

import { RootState } from "../reducers";

import {
  Action,
  WeatherAction,
  weatherSetAction,
} from "../actions";

import {
  WEATHER_GET,
} from "../constants";

import { getWeather } from "../shared/services/Api";

const weatherGetEpic: Epic<Action, RootState> = (action$, state) =>
  action$.ofType(WEATHER_GET)
    .mergeMap(async (action: WeatherAction) => {
      const weather = await getWeather(action.params.lat, action.params.lng);
      return weatherSetAction(weather);
    });

export default [
  weatherGetEpic,
];
