// @flow

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { decrement } from '../actions/CounterActions';
import type { CounterReducerStateType, CounterReducerActionType } from '../reducers/CounterReducer';
import Button from '../components/base/Button';
import AppStateType from '../reducers/IndexReducer';

function getCounterActions(dispatch: Function) : CounterReducerActionType {
  return {
    actions: bindActionCreators(decrement, dispatch),
  }
}

export default connect(null, getCounterActions)(Button);
