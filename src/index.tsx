import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { Provider } from "react-redux";

import App from "./components/App.connect";

/**
 * Redux store setup
 */
import reducers, { RootState } from "./reducers";
import epics from "./epics";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
  }
}

const composeEnhancers = (
  process.env.NODE_ENV === "development" &&
  window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose;

function configureStore(initialState?: RootState) {
  // configure middlewares
  const middlewares = [
    createEpicMiddleware(epics),
  ];
  // compose enhancers
  const enhancer    = composeEnhancers(
    applyMiddleware(...middlewares)
  );
  // create store
  return createStore(
    reducers,
    initialState!,
    enhancer
  );
}


const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
