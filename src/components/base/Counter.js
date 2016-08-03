// @flow
import React, { Component, PropTypes } from 'react';
import {
  Text,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  textCounter: {
    flex: 1,
    fontSize: 100,
  },
});
type CounterProps = {
  counterValue: number,
}

export default class Counter extends Component {
  props: CounterProps;

  static propTypes = {
    counterValue: PropTypes.number,
  };

  render() {
    const { counterValue } = this.props;
    return (
      <Text style={styles.textCounter}>{counterValue}</Text>
    );
  }
}
