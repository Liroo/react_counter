// @flow

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import AppComponent from '../components/AppComponent';
import IndexReducer from '../reducers/IndexReducer';

class CounterProvider extends Component {

  render() {
    const store = createStore(IndexReducer, applyMiddleware(thunk));
    return (
      <Provider store={store}>
        <AppComponent />
      </Provider>
    );
  }
}

export default CounterProvider;
