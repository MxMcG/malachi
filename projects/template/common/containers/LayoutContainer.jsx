import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Layout from '../../components/Layout/components.jsx';

// include actions as they are needed by each component
// they are called via dispatch()

const propTypes = {
  dispatch: PropTypes.func,
  content: PropTypes.object
};

// in here, we determine the props to be passed down to the specific component needed
class LayoutContainer extends Component {
  componentDidMount () {
    const { dispatch, componentContent } = this.props;
  }

  render () {
    return (
      <Layout {...this.props} />
    );
  }
}

LayoutContainer.propTypes = propTypes;

function mapStateToProps(state) {
  const componentContent = state.content.project.components;
  return {
    componentContent
  };
}

export default connect(mapStateToProps)(LayoutContainer);
