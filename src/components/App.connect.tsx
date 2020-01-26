import { Dispatch } from "redux";
import { connect } from "react-redux";

import { ActionsType, RootStateType } from "../shared/store";

import App from "./App";

interface OwnProps {
}

const mapStateToProps = (state: RootStateType) => ({
  loading: !state.map.ready,
});

const mapDispatchToProps = (dispatch: Dispatch<ActionsType>, props: OwnProps) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
