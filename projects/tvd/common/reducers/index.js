import { combineReducers } from 'redux';

import { cdnUrl, bundleUrl, cdnImageBase } from './urls';
import adminReducers from './adminReducers';
import contentReducers from './contentReducers';
import loginReducers from './loginReducers';

const rootReducer = combineReducers({
  bundleUrl,  
  cdnUrl,
  cdnImageBase,
  admin: adminReducers,
  content: contentReducers,
  login: loginReducers
});

export default rootReducer;
