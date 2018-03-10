import { connect } from "react-redux";

import { RootState } from "../reducers";

import App, { AppProps } from "./App";

interface OwnProps {
}

const mapStateToProps = (state: RootState) => ({
  loading: !state.map.ready,
});

const mapDispatchToProps = (dispatch: Function, props: OwnProps) => ({
});

export default connect<{}, {}, AppProps>(
  mapStateToProps,
  mapDispatchToProps,
)(App) as React.ComponentClass<OwnProps>
