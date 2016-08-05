// @flow

import { INCREMENT, DECREMENT } from '../types/CounterTypes';

export type CounterActionType = {
  type: string,
};

export function increment(): CounterActionType {
  return { type: INCREMENT };
}

export function decrement() {
  return { type: DECREMENT };
}
