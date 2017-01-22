import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Events from '../../components/Events/components.jsx';

// include actions as they are needed by each component
// they are called via dispatch()

const propTypes = {
  dispatch: PropTypes.func,
  content: PropTypes.object
};

// in here, we determine the props to be passed down to the specific component needed
class EventsContainer extends Component {

  render () {
    return (
      <Events {...this.props} />
    );
  }
}

EventsContainer.propTypes = propTypes;

function mapStateToProps(state) {
  const componentContent = state.content.project.components.EventsContainer;
  return {
    componentContent
  };
}

export default connect(mapStateToProps)(EventsContainer);
