import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

import Button from '../components/Button';
import Counter from '../components/Counter';
import type { CounterReducerActionType } from '../reducers/indexReducer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

type AppContainerProps = {
  counterValue: number,
  actions: CounterReducerActionType,
};

class AppComponent extends Component {
  props: AppContainerProps;

  constructor(props) {
    super(props);
  }
  render() {
    const { counterValue, actions } = this.props;
    return (
      <View style={styles.container}>
        <Counter counterValue={counterValue} />
        <View style={styles.buttonContainer}>
          <Button label={"Down"} onPress={actions.decrement} />
          <Button label={"Up"} onPress={actions.increment} />
        </View>
      </View>
    );
  }
}

export default AppComponent;
