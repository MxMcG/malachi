import { combineReducers } from 'redux';

import bundleUrl from './bundleUrl';
import content from './content';
import cdnUrl from './cdnUrl';
import adminReducers from './adminReducers';
import contentReducers from './contentReducers';

const rootReducer = combineReducers({
  bundleUrl,
  content,
  cdnUrl,
  admin: adminReducers,
  content: contentReducers
});

export default rootReducer;
