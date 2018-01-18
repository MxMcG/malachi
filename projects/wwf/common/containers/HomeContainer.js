import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Home from '../../components/Home/components.jsx';

// include actions as they are needed by each component
// they are called via dispatch()

const propTypes = {
  dispatch: PropTypes.func,
  content: PropTypes.object
};

// in here, we determine the props to be passed down to the specific component needed
class HomeContainer extends Component {

  render () {
    console.log(...this.props)
    return (
      <Home {...this.props} />
    );
  }
}

HomeContainer.propTypes = propTypes;

function mapStateToProps(state) {
  const componentContent = state.content.project.components.HomeContainer;
  return {
    componentContent,
  };
}

export default connect(mapStateToProps)(HomeContainer);
