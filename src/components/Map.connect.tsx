import { connect } from "react-redux";

import { weatherGetAction, mapReadyAction } from "../actions"
import { RootState } from "../reducers"

import Map, { MapProps } from "./Map";

interface OwnProps {
}

const mapStateToProps = (state: RootState) => ({});

const mapDispatchToProps = (dispatch: Function, props: OwnProps) => ({
  getWeather: (payload: {}) => dispatch(weatherGetAction(payload)),
  mapReady: () => dispatch(mapReadyAction()),
});

export default connect<{}, {}, MapProps>(
  mapStateToProps,
  mapDispatchToProps,
)(Map) as React.ComponentClass<OwnProps>
