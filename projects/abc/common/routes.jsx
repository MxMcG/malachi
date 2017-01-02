import React from 'react';
import { Route } from 'react-router';
import App from '../components/App/components.jsx';
console.log(App)

Route.propTypes = {
  component: React.PropTypes.object,
  path: React.PropTypes.string
};

export default (
  <Route path="/" component={App}/>
);
