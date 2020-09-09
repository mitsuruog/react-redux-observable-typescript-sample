import { TestScheduler } from "rxjs/testing";
import { actions } from "../..";
import * as epics from "../WeatherEpic";
import { getType } from "typesafe-actions";

const testScheduler = new TestScheduler((actual, expected) => {
  return expect(actual).toEqual(expected);
});

describe("Test WeatherEpic", () => {
  beforeEach(() => {
    testScheduler.frame = 0;
  });
  describe("should handle actions.weatherGetAction", () => {
    test("success case", () => {
      testScheduler.run(({ hot, cold, expectObservable }) => {
        const action$ = hot("-a", {
          a: actions.weatherGetAction(1, 2),
        });
        const state$ = {};
        const dependencies = {
          getWeather: () => cold("--a", { a: { id: 1 } }),
        };
        const output$ = epics.weatherGetEpic(
          // @ts-expect-error HotObservable can't pass into the ActionsObservable
          action$,
          state$,
          dependencies
        );
        expectObservable(output$).toBe("---a", {
          a: { type: getType(actions.weatherSetAction), payload: { id: 1 } },
        });
      });
    });
    test("failure case", () => {
      testScheduler.run(({ hot, cold, expectObservable }) => {
        const action$ = hot("-a", {
          a: actions.weatherGetAction(1, 2),
        });
        const state$ = {};
        const dependencies = {
          getWeather: () => cold("--#"),
        };
        const output$ = epics.weatherGetEpic(
          // @ts-expect-error HotObservable can't pass into the ActionsObservable
          action$,
          state$,
          dependencies
        );
        expectObservable(output$).toBe("---a", {
          a: {
            type: getType(actions.weatherErrorAction),
            payload: "error",
          },
        });
      });
    });
  });
});
