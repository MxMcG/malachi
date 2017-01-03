import rootReducer from '../reducers/index';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export default function configureStore (initialState, environment) {
  let store;
  if (global.window !== undefined && environment === 'development') {
    store = createStoreWithMiddleware(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  } else {
    store = createStoreWithMiddleware(rootReducer, initialState);
  }
  return store;
}
