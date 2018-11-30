import { ActionType, getType } from 'typesafe-actions';

import * as actions from "../actions";

type Action = ActionType<typeof actions>;

import Weather from "../shared/models/Weather";

export interface WeatherState {
  readonly loading: boolean;
  readonly weather?: Weather;
}

const initialState = {
  loading: false,
};

export const weatherReducer = (state: WeatherState = initialState, action: Action): WeatherState => {

  switch (action.type) {

    case getType(actions.weatherSetAction):
      return Object.assign({}, state, { weather: new Weather(action.payload) });

    case getType(actions.weatherErrorAction):
      console.error(action.payload.message);
      return state;

    default:
      return state;
  }
};
