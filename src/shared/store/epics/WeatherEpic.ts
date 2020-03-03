import { Epic } from "redux-observable";
import { from, of } from "rxjs";
import { exhaustMap, filter, map, catchError } from "rxjs/operators";
import { ActionType, isActionOf } from "typesafe-actions";

import * as actions from "../actions";

type Action = ActionType<typeof actions>;

import { RootState } from "../reducers";

import { getWeather } from "../../services/Api";

const weatherGetEpic: Epic<Action, Action, RootState> = (action$, store) =>
  action$.pipe(
    filter(isActionOf(actions.weatherGetAction)),
    exhaustMap(action =>
      from(getWeather(action.payload.lat, action.payload.lng)).pipe(
        map(actions.weatherSetAction),
        catchError(error => of(actions.weatherErrorAction(error)))
      ),
    )
  );

export default [
  weatherGetEpic,
];
