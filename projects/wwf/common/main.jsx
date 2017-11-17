/**
 * This file takes all routes and wraps them in the redux store.
 * also renders the whole front end of the app on the target id element
 */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import ReactGA from 'react-ga';
import { Router, Route, Link, browserHistory } from 'react-router'
import configureStore from './store/configureStore';
import routes from './routes';
import * as actions from './actions/index';
import '../styles/main.scss';

const isBrowser = !!(typeof window !== 'undefined' && typeof navigator !== 'undefined' && window.document);
const initialState = window.__INITIAL_STATE__;
const env = window.__DEV_ENV__.env;
const store = configureStore(initialState, env);


const frontPageSlideData = store.getState().content.project.components.HomeContainer.SwipeSlideshowContainer.slides;
store.dispatch(actions.fetchSlides(frontPageSlideData));

const fireTracking = () => {
  window.ga("send", "pageview", location.pathname)
}

render(
  <Provider store={store}>
    <Router history={browserHistory}
      onUpdate={
        () => {
          window.setTimeout(() => {
            window.scrollTo(0, 0)
          }, 20);
          fireTracking();
        }
      }
    >
      {routes}
    </Router>
  </Provider>, window.document.getElementById('react-view')
);
