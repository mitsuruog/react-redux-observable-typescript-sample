import { applyMiddleware, compose, createStore } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { ActionType } from "typesafe-actions";

import * as API from "../services/Api";
import * as actions from "./actions";
import epics from "./epics";
import reducers, { RootState } from "./reducers";

export type RootStateType = RootState;
export type ActionsType = ActionType<typeof actions>;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
  }
}

const epicMiddleware = createEpicMiddleware<
  ActionsType,
  ActionsType,
  RootState
>({
  dependencies: API,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create store
function configureStore(initialState?: RootStateType) {
  // configure middlewares
  const middlewares = [epicMiddleware];
  // compose enhancers
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));
  // create store
  return createStore(reducers, initialState, enhancer);
}

const store = configureStore();

epicMiddleware.run(epics);

export { store, actions };
