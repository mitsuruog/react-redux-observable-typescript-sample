import { actions } from "../..";
import { getType } from "typesafe-actions";
import Weather from "../../../models/Weather";

test("should create an action to get a weather", () => {
  const expectedAction = {
    type: getType(actions.weatherGetAction),
    payload: { lat: 1, lng: 2 },
  };
  expect(actions.weatherGetAction(1, 2)).toEqual(expectedAction);
});

test("should create an action to set a weather", () => {
  const expectedAction = {
    type: getType(actions.weatherSetAction),
    payload: { id: 1 },
  };
  expect(actions.weatherSetAction(new Weather({ id: 1 }))).toEqual(
    expectedAction
  );
});

test("should create an action to set an error", () => {
  const expectedAction = {
    type: getType(actions.weatherErrorAction),
    payload: new Error("error"),
  };
  expect(actions.weatherErrorAction(new Error("error"))).toEqual(
    expectedAction
  );
});
