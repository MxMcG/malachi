import { combineReducers } from 'redux';

import content from './content';
import { cdnUrl, bundleUrl, cdnImageBase } from './urls';
import adminReducers from './adminReducers';
import contentReducers from './contentReducers';

const rootReducer = combineReducers({
  bundleUrl,
  content,
  cdnUrl,
  cdnImageBase,
  admin: adminReducers,
  content: contentReducers
});

export default rootReducer;
