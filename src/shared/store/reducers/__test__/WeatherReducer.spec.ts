import { actions } from "../..";
import { weatherReducer as reducer, initialState } from "../WeatherReducer";
import Weather from "../../../models/Weather";

describe("Test WeatherReducer", () => {
  test("should return the initial state", () => {
    // @ts-expect-error set null action
    expect(reducer(undefined, {})).toEqual({});
  });
  test("should handle actions.userGetSuccessAction", () => {
    expect(
      reducer(initialState, actions.weatherSetAction(new Weather({ id: 1 })))
    ).toEqual({
      weather: new Weather({ id: 1 }),
    });
  });
});
