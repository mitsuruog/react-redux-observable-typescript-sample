import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { Provider } from "react-redux";
import { ActionType } from "typesafe-actions";

import App from "./components/App.connect";

/**
 * Redux store setup
 */
import * as actions from "./actions";
import reducers, { RootState } from "./reducers";
import epics from "./epics";

type Action = ActionType<typeof actions>;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
  }
}

const composeEnhancers = (
  window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose;

const epicMiddleware = createEpicMiddleware<Action, Action, RootState>();

function configureStore(initialState?: RootState) {
  // configure middlewares
  const middlewares = [
    epicMiddleware,
  ];
  // compose enhancers
  const enhancer = composeEnhancers(
    applyMiddleware(...middlewares)
  );
  // create store
  return createStore(
    reducers,
    initialState,
    enhancer
  );
}

const store = configureStore();

epicMiddleware.run(epics);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
