import { combineEpics } from "redux-observable";

import weatherEpic from "./WeatherEpic";

const epics = combineEpics(
  ...weatherEpic,
);

export default epics;
