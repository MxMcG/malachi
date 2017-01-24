import { combineReducers } from 'redux';

import urlReducers from './urls';
import contentReducers from './contentReducers';
import activateCategoryReducers from './activateCategoryReducers';

const rootReducer = combineReducers({
  urls: urlReducers,
  content: contentReducers,
  activeCategory: activateCategoryReducers
});

export default rootReducer;
