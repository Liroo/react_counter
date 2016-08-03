// @flow
import React, { Component, PropTypes } from 'react';
import {
  Text,
  StyleSheet,
  View
} from 'react-native';

const styles = StyleSheet.create({
  textCounter: {
    flex: 1,
    fontSize: 100
  },
});
type CounterProps = {
  counterValue: number,
  style?: Object,
}

export default class Counter extends Component {
  props: CounterProps;

  static propTypes = {
    counterValue: PropTypes.number,
    style: View.propTypes.style,
  };

  render() {
    const { counterValue, style } = this.props;
    return (
      <Text style={[styles.textCounter, style]}>{counterValue}</Text>
    )
  }
}
