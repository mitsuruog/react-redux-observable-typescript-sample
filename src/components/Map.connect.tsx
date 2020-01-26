import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";

import { ActionsType, RootStateType, actions } from "../shared/store";

import Map from "./Map";

interface OwnProps {
}

const mapStateToProps = (state: RootStateType) => ({});

const mapDispatchToProps = (dispatch: Dispatch<ActionsType>, props: OwnProps) => bindActionCreators({
  getWeather: (lat: number, lng: number) => actions.weatherGetAction(lat, lng),
  mapReady: () => actions.mapReadyAction(),
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Map);
