/**
 * All routes are contained here, include any new container and route easily.
 */

import React from 'react';
import { Route, browserHistory, Router, IndexRoute } from 'react-router';

import RootContainer from './containers/RootContainer.jsx';
import LayoutContainer from './containers/LayoutContainer.jsx';
import PortfolioContainer from './containers/PortfolioContainer.jsx';
import HomeContainer from './containers/HomeContainer.jsx';
import ResumeContainer from './containers/ResumeContainer.jsx';

Route.propTypes = {
  component: React.PropTypes.object,
  path: React.PropTypes.string
};

export default (
  <Route component={RootContainer}>
    <Route path="/" component={LayoutContainer}>
      <IndexRoute component={HomeContainer}/>
      <Route path="/portfolio" component={PortfolioContainer}/>
      <Route path="/resume" component={ResumeContainer}/>
    </Route>
  </Route>
);
