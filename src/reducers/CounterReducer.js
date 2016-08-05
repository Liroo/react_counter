// @flow
import { INCREMENT, DECREMENT } from '../types/CounterTypes';

export type CounterReducerStateType = {
  counterValue: number,
}
export type CounterReducerActionType = {
  type?: typeof INCREMENT | typeof DECREMENT,
  increment?: Function,
  decrement?: Function,
}

const initialState = {
  counterValue: 0,
};
function CounterReducer(state: CounterReducerStateType = initialState, action: CounterReducerActionType = {}) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counterValue: state.counterValue + 1 };
    case DECREMENT:
      return { ...state, counterValue: state.counterValue - 1 };
    default:
      return state;
  }
}

export default CounterReducer;
