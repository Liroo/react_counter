// @flow
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import AltContainer from 'alt-container';

import Button from './Button'
import Counter from './components/Counter'
import CounterActions from './actions/CounterActions'
import CounterStore from './stores/CounterStore'

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

export default class CounterController extends Component {

  render() {
    return (
      <View style={styles.container}>
        <AltContainer stores={{
            counterValue: () => {
              return {
                store: CounterStore,
                value: CounterStore.getState().counterValue
              }
          }}}>
          <Counter counterValue={0}/>
        </AltContainer>
        <View style={styles.buttonContainer}>
          <Button label='down' onPress={CounterActions.decrement}/>
          <Button label='up' onPress={CounterActions.increment}/>
        </View>
      </View>
    );
  }
}
