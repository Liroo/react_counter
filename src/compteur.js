// @flow
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import Button from './Button';

const styles = StyleSheet.create({
  textCounter: {
    flex: 1,
    fontSize: 100
  },
});

type State = {
  counter: number,
};

export default class Counter extends Component {
  state: State;
  increment: Function;
  decrement: Function;

  constructor() {
    super()
    this.state = {counter: 0};
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  decrement() {
    this.setState({
      counter: this.state.counter - 1
    })
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <Text style={styles.textCounter}>{this.state.counter}</Text>

        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
          <Button label='down' onPress={this.decrement}/>
          <Button label='up' onPress={this.increment}/>
        </View>

      </View>
    );
  }
}
