import Weather from "../shared/models/Weather";

import {
  WEATHER_SET,
} from "../constants";

import {
  Action,
} from "../actions";

export interface WeatherState {
  loading: boolean;
  weather?: Weather;
}

const initialState = {
  loading: false,
};

export const weatherReducer = (state: WeatherState = initialState, action: Action): WeatherState => {

  switch (action.type) {

    case WEATHER_SET:
      return Object.assign({}, state, { weather: new Weather(action.payload) });

    default:
      return state;
  }
};
