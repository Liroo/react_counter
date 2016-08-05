import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

import CounterContainer from '../containers/CounterContainer';
import IncButtonContainer from '../containers/IncButtonContainer';
import DecButtonContainer from '../containers/DecButtonContainer';

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
  button: {
    margin: 20,
  },
});

class AppComponent extends Component {

  render() {
    return (
      <View style={styles.container}>
        <CounterContainer />
        <View style={styles.buttonContainer}>
          <DecButtonContainer label={"Down"} style={styles.button}/>
          <IncButtonContainer label={"Up"} style={styles.button}/>
        </View>
      </View>
    );
  }
}

export default AppComponent;
