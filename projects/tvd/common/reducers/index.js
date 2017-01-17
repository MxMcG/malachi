import { combineReducers } from 'redux';

import { cdnUrl, bundleUrl, cdnImageBase } from './urls';
import adminReducers from './adminReducers';
import contentReducers from './contentReducers';
import loginReducers from './loginReducers';
import content from './content';

const rootReducer = combineReducers({
  bundleUrl,
  content,
  cdnUrl,
  cdnImageBase,
  admin: adminReducers,
  content: contentReducers,
  login: loginReducers
});

export default rootReducer;
