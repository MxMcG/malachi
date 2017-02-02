/**
 * Important place where store is created with redux middleware.{}
 */

import rootReducer from '../reducers/index';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

const logger = createLogger();

export default function configureStore (initialState, environment) {
  let createStoreWithMiddleware;
  if (environment === 'development') {
    createStoreWithMiddleware = applyMiddleware(thunkMiddleware, logger)(createStore);
  } else {
    // eliminate logger on production build
    createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
  }

  let store;

  const global = global ? global : { window: null }
  if (environment === 'development' && global.window) {
    store = createStoreWithMiddleware(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  } else {
    store = createStoreWithMiddleware(rootReducer, initialState);
  }

  return store;
}
