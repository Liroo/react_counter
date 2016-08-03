// @flow

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import AppContainer from './AppContainer';
import IndexReducer from '../reducers/IndexReducer';

class CounterProvider extends Component {

  render() {
    const store = createStore(IndexReducer, applyMiddleware(thunk));
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

export default CounterProvider;
