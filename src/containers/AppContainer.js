// @flow

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increment, decrement } from '../actions/CounterActions';
import type { CounterReducerStateType, CounterReducerActionType } from '../reducers/CounterReducer';
import AppComponent from '../components/AppComponent';
import AppStateType from '../reducers/IndexReducer';

function getCounterState(appState: AppStateType): CounterReducerStateType {
  return {
    counterValue: appState.counterState.counterValue,
  };
}
function getCounterActions(dispatch: Function) : CounterReducerActionType {
  return {
    actions: bindActionCreators({ increment, decrement }, dispatch),
  };
}

export default connect(getCounterState, getCounterActions)(AppComponent);
