import { ActionType } from 'typesafe-actions';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import * as actions from "../actions";

import { RootState } from "../reducers";

import App from "./App";

type Action = ActionType<typeof actions>;

interface OwnProps {
}

const mapStateToProps = (state: RootState) => ({
  loading: !state.map.ready,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>, props: OwnProps) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(App);