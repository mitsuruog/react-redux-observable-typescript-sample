import { createAction } from "typesafe-actions";

import {
  WEATHER_GET,
  WEATHER_SET,
  MAP_READY,
} from "../constants";

export interface Action {
  type: string;
  payload?: {};
  params?: {};
}

export interface WeatherAction extends Action {
  params: {
    lat: number;
    lng: number;
  };
}

export const weatherGetAction = createAction(WEATHER_GET, (params = {}) => ({
  type: WEATHER_GET,
  params,
}));

export const weatherSetAction = createAction(WEATHER_SET, (payload = {}) => ({
  type: WEATHER_SET,
  payload,
}));

export const mapReadyAction = createAction(MAP_READY, () => ({
  type: MAP_READY
}));
