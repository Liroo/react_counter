import CounterActions from '../actions/CounterActions'
import alt from '../alt'

class CounterStore {
  constructor() {
    this.state = {
      counterValue: 0,
    };

    this.bindActions(CounterActions);
  }

  onIncrement() {
    this.setState({
      counterValue: this.state.counterValue + 1
    })
  }

  onDecrement() {
    this.setState({
      counterValue: this.state.counterValue - 1
    })
  }
}

export default alt.createStore(CounterStore, 'CounterStore')
