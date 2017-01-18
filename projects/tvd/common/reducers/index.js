import { combineReducers } from 'redux';

import urlReducers from './urls';
import adminReducers from './adminReducers';
import contentReducers from './contentReducers';
import loginReducers from './loginReducers';

const rootReducer = combineReducers({
  urls: urlReducers,
  admin: adminReducers,
  content: contentReducers,
  login: loginReducers
});

export default rootReducer;
