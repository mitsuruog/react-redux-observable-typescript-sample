import { createAction } from "typesafe-actions";

import {
  WEATHER_GET,
  WEATHER_SET,
  MAP_READY,
  WEATHER_ERROR,
} from "../constants";

export const weatherGetAction = createAction(WEATHER_GET, resolve => (lat: number, lng: number) => resolve({ lat, lng }));

export const weatherSetAction = createAction(WEATHER_SET, resolve => (weather: Response) => resolve(weather));

export const weatherErrorAction = createAction(WEATHER_ERROR, resolve => (error: Error) => resolve(error));

export const mapReadyAction = createAction(MAP_READY);
