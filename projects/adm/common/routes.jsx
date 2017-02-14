import React from 'react';
import { Route, browserHistory, Router, IndexRoute } from 'react-router';

import App from './containers/App.js';
import AppContainer from './containers/AppContainer.js';
import AdminContainer from './containers/AdminContainer.js';
import LoginContainer from './containers/LoginContainer.js';

Route.propTypes = {
  component: React.PropTypes.object,
  path: React.PropTypes.string
};

export default (
  <Route path="/" component={App}>
    <IndexRoute component={AppContainer}/>
    <Route path="admin" component={AdminContainer}/>
    <Route path="/login" component={LoginContainer}/>
  </Route>
);
