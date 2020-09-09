import * as React from "react";
import { useSelector } from "react-redux";

import { Map } from "./Map";
import { Weather } from "./Weather";
import { RootState } from "../shared/store/reducers";

export interface AppProps {}

export const App: React.SFC<AppProps> = () => {
  const { ready } = useSelector((state: RootState) => state.map);
  return (
    <div className="app">
      {!ready && <div className="loading" />}
      <div className="header">
        <h1>Weather Map</h1>
        <small>
          (This sample application = React + redux-observable + TypeScript)
        </small>
      </div>
      <div className="main">
        <Weather />
        <Map />
      </div>
      <div className="footer">(c) 2020 mitsuru ogawa</div>
    </div>
  );
};
