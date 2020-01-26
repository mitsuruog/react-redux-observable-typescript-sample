import { ActionType, getType } from 'typesafe-actions';

import * as actions from "../actions";

type Action = ActionType<typeof actions>;

export interface MapState {
  readonly ready: boolean;
}

const initialState = {
  ready: false,
};

export const mapReducer = (state: MapState = initialState, action: Action): MapState => {

  switch (action.type) {

    case getType(actions.mapReadyAction):
      return Object.assign({}, state, { ready: true });

    default:
      return state;
  }
};
