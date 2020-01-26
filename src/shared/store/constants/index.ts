// NOTE
// DO NOT USE dynamic string operations(like template string) as action type property.
// see more details: https://github.com/piotrwitek/typesafe-actions#--the-actions
export const MAP_READY   = "@@map/READY";
export const WEATHER_GET = "@@weather/GET";
export const WEATHER_SET = "@@weather/SET";
export const WEATHER_ERROR = "@@weather/ERROR";
