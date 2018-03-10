import { connect } from "react-redux";

import { RootState } from "../reducers"

import { Weather, WeatherProps } from "./Weather";

interface OwnProps {
}

const mapStateToProps = (state: RootState) => ({
  weather: state.weather.weather,
});

const mapDispatchToProps = (dispatch: Function, props: OwnProps) => ({});

export default connect<{}, {}, WeatherProps>(
  mapStateToProps,
  mapDispatchToProps,
)(Weather) as React.ComponentClass<OwnProps>
