import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Footer from '../../components/Footer/components.jsx';

// include actions as they are needed by each component
// they are called via dispatch()

const propTypes = {
  dispatch: PropTypes.func,
  content: PropTypes.object
};

// in here, we determine the props to be passed down to the specific component needed
class FooterContainer extends Component {

  render () {
    return (
      <Footer {...this.props} />
    );
  }
}

FooterContainer.propTypes = propTypes;

function mapStateToProps(state) {
  const componentContent = state.content.project.components.FooterContainer;
  return {
    componentContent
  };
}

export default connect(mapStateToProps)(FooterContainer);
