import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Link, browserHistory } from 'react-router'
import configureStore from './store/configureStore';
import routes from './routes';
import '../styles/main.scss';
import { fetchAllCollections, fetchAllProducts } from './shopify.js';

const isBrowser = !!(typeof window !== 'undefined' && typeof navigator !== 'undefined' && window.document);
const initialState = window.__INITIAL_STATE__;
const env = window.__DEV_ENV__.env;
const store = configureStore(initialState, env);

// Fetch all active shop collections i.e. vendors
if (isBrowser) {
  store.dispatch(fetchAllCollections());
  store.dispatch(fetchAllProducts());
}

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      {routes}
    </Router>
  </Provider>, window.document.getElementById('react-view')
);
