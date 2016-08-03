// @flow
import { combineReducers } from 'redux';
import counterState from './CounterReducer';
import type { CounterReducerStateType } from '../reducers/CounterReducer';

export type AppStateType = {
  counterState: CounterReducerStateType,
}

export default combineReducers({
  counterState,
});
