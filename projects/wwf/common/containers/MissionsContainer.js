import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Missions from '../../components/Missions/components.jsx';

// include actions as they are needed by each component
// they are called via dispatch()

const propTypes = {
  dispatch: PropTypes.func,
  content: PropTypes.object
};

// in here, we determine the props to be passed down to the specific component needed
class MissionsContainer extends Component {

  render () {
    return (
      <Missions {...this.props} />
    );
  }
}

MissionsContainer.propTypes = propTypes;

function mapStateToProps(state) {
  const componentContent = state.content.project.components.MissionsContainer;
  return {
    componentContent
  };
}

export default connect(mapStateToProps)(MissionsContainer);
