/**
 * Combine all reducer functions and export them to be used in store creation.
 */

import { combineReducers } from 'redux';

import urlReducers from './urls';
import contentReducers from './contentReducers';
import shopReducers from './shopReducers';
import cartReducers from './cartReducers';

const rootReducer = combineReducers({
  urls: urlReducers,
  content: contentReducers,
  shop: shopReducers,
  cart: cartReducers
});

export default rootReducer;
