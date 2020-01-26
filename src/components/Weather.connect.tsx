import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { ActionsType, RootStateType } from "../shared/store";

import { Weather } from "./Weather";

interface OwnProps {
}

const mapStateToProps = (state: RootStateType) => ({
  weather: state.weather.weather,
});

const mapDispatchToProps = (dispatch: Dispatch<ActionsType>, props: OwnProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
