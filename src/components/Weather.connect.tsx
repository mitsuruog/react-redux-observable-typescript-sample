import { ActionType } from 'typesafe-actions';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import * as actions from "../actions";

import { RootState } from "../reducers";

type Action = ActionType<typeof actions>;

import { Weather, WeatherProps } from "./Weather";

interface OwnProps {
}

const mapStateToProps = (state: RootState) => ({
  weather: state.weather.weather,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>, props: OwnProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
