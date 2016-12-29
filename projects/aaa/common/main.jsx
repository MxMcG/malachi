import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import configureStore from './store/configureStore';
import AppContainer from './containers/AppContainer.js';

const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);

if (global.window) {
  render(
    <Provider store={store}>
      <AppContainer />
    </Provider>, global.window.document.getElementById('react-view')
  );
}
