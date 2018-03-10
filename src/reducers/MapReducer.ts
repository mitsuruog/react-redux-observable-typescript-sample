import {
  MAP_READY,
} from "../constants";

import {
  Action,
} from "../actions";

export interface MapState {
  ready: boolean;
}

const initialState = {
  ready: false,
};

export const mapReducer = (state: MapState = initialState, action: Action): MapState => {

  switch (action.type) {

    case MAP_READY:
      return Object.assign({}, state, { ready: true });

    default:
      return state;
  }
};
