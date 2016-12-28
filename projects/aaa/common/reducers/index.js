import { combineReducers } from 'redux';

import bundleUrl from './bundleUrl';
import content from './content';
import cdnUrl from './cdnUrl';

const rootReducer = combineReducers({
  bundleUrl,
  content,
  cdnUrl
});

export default rootReducer;
