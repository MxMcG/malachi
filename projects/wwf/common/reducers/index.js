import { combineReducers } from 'redux';

import urlReducers from './urls';
import contentReducers from './contentReducers';

const rootReducer = combineReducers({
  urls: urlReducers,
  content: contentReducers
});

export default rootReducer;
