import { ActionType } from 'typesafe-actions';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from "../actions";

import { RootState } from "../reducers";

type Action = ActionType<typeof actions>;

import Map from "./Map";

interface OwnProps {
}

const mapStateToProps = (state: RootState) => ({});

const mapDispatchToProps = (dispatch: Dispatch<Action>, props: OwnProps) => bindActionCreators({
  getWeather: (lat: number, lng: number) => actions.weatherGetAction(lat, lng),
  mapReady: () => actions.mapReadyAction(),
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Map);