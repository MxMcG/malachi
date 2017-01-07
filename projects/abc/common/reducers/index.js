import { combineReducers } from 'redux';

import bundleUrl from './bundleUrl';
import content from './content';
import cdnUrl from './cdnUrl';
import adminReducers from './adminReducers';

const rootReducer = combineReducers({
  bundleUrl,
  content,
  cdnUrl,
  admin: adminReducers
});

export default rootReducer;
