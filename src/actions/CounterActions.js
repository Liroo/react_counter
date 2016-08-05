import alt from '../alt';

class CounterActions {
  constructor() {
    this.generateActions(
      'increment',
      'decrement'
    )
  }
}

export default alt.createActions(CounterActions);
