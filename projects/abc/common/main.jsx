import '../styles/main.scss'
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import configureStore from './store/configureStore';
import AppContainer from './containers/appContainer.js';

const initialState = window.__INITIAL_STATE__;
const env = window.__DEV_ENV__.env;
const store = configureStore(initialState, env);

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>, window.document.getElementById('react-view')
);
