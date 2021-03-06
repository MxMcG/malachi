import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import SocialFooter from '../../components/SocialFooter/components.jsx';

// include actions as they are needed by each component
// they are called via dispatch()

const propTypes = {
  dispatch: PropTypes.func,
  content: PropTypes.object
};

// in here, we determine the props to be passed down to the specific component needed
class SocialFooterContainer extends Component {

  render () {
    return (
      <SocialFooter {...this.props} />
    );
  }
}

SocialFooterContainer.propTypes = propTypes;

function mapStateToProps(state) {
  const componentContent = state.content.project.components.SocialFooterContainer;
  return {
    componentContent
  };
}

export default connect(mapStateToProps)(SocialFooterContainer);
