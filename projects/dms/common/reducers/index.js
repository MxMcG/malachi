import { combineReducers } from 'redux';
import contentReducers from './contentReducers';
import urlsReducers from './urlsReducers';
import articlesReducers from './articlesReducers';

const rootReducer = combineReducers({
  content: contentReducers,
  urls: urlsReducers,
  articles: articlesReducers
});

export default rootReducer;
