import { combineReducers } from 'redux';

import bundleUrl from './bundleUrl';
import content from './content';
import cdnUrl from './cdnUrl';
import activateComponent from './activeComponentClass';

const rootReducer = combineReducers({
  bundleUrl,
  content,
  cdnUrl,
  activateComponent
});

export default rootReducer;
