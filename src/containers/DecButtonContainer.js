// @flow

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { decrement } from '../actions/CounterActions';
import type { CounterReducerActionType } from '../reducers/CounterReducer';
import Button from '../components/base/Button';

function getCounterActions(dispatch: Function) : CounterReducerActionType {
  return {
    actions: bindActionCreators(decrement, dispatch),
  }
}

export default connect(null, getCounterActions)(Button);
