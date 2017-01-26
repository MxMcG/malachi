import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Crafter from '../../components/Crafter/components.jsx';

// include actions as they are needed by each component
// they are called via dispatch()

const propTypes = {
  dispatch: PropTypes.func,
  content: PropTypes.object
};

// in here, we determine the props to be passed down to the specific component needed
class CrafterContainer extends Component {

  render () {
    return (
      <Crafter {...this.props} />
    );
  }
}

CrafterContainer.propTypes = propTypes;

function mapStateToProps(state) {
  const componentContent = state.content.project.components.CrafterContainer;
  return {
    componentContent
  };
}

export default connect(mapStateToProps)(CrafterContainer);
