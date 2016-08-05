// @flow

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increment, decrement } from '../actions/CounterActions';
import type { CounterReducerStateType, CounterReducerActionType } from '../reducers/CounterReducer';
import Counter from '../components/base/Counter';
import AppStateType from '../reducers/IndexReducer';

function getCounterState(appState: AppStateType): CounterReducerStateType {
  return {
    counterValue: appState.counterState.counterValue,
  };
}
export default connect(getCounterState)(Counter);
