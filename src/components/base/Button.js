// @flow

import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'rgb(161, 235, 208)',
    // margin: 3,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    minWidth: 100,
  },
  label: {
    fontSize: 16,
  },
});

type ButtonProps = {
  label?: string,
  actions: Function,
  style?: Object,
};

export default class Button extends Component {
  props: ButtonProps;

  render() {
    const { label, actions, style } = this.props;
    return (
      <TouchableOpacity style={[styles.container, style]} onPress={ actions }>
        <Text style={styles.label}>{label}</Text>
      </TouchableOpacity>
    );
  }
}
