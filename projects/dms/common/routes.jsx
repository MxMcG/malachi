/**
 * All routes are contained here, include any new container and route easily.
 */

import React from 'react';
import { Route, browserHistory, Router, IndexRoute } from 'react-router';

import RootContainer from './containers/RootContainer.js';
import LayoutContainer from './containers/LayoutContainer.js';
import ArticlesContainer from './containers/ArticlesContainer.js';

Route.propTypes = {
  component: React.PropTypes.object,
  path: React.PropTypes.string
};

export default (
  <Route component={RootContainer}>
    <Route path="/" component={LayoutContainer}>
      <IndexRoute component={ArticlesContainer}/>
    </Route>
  </Route>
);
