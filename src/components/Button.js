// @flow

import React, { Component, PropTypes } from 'react';
import {
  View,
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
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
  },
});

type ButtonProps = {
  label: string,
  onPress: Function,
  style?: Object,
};

export default class Button extends Component {
  props: ButtonProps;

  static propTypes = {
    label: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    style: View.propTypes.style,
  };

  render() {
    const { label, style, onPress } = this.props;
    return (
      <TouchableOpacity style={[styles.container, style]} onPress={ onPress }>
        <Text style={styles.label}>{label}</Text>
      </TouchableOpacity>
    );
  }
}
