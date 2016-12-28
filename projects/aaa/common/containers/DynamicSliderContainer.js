import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import DynamicSlider from '../../components/DynamicSlider/components.jsx';

// include actions as they are needed by each component
// they are called via dispatch()

const propTypes = {
  dispatch: PropTypes.func,
  content: PropTypes.object
};

// in here, we determine the props to be passed down to the specific component needed
class DynamicSliderContainer extends Component {
  componentDidMount () {
    const { dispatch, content } = this.props;
  }

  render () {
    return (
      <DynamicSlider {...this.props} />
    );
  }
}

DynamicSlider.propTypes = propTypes;

function mapStateToProps(state) {
  const { content } = state
  return {
    content
  };
}

export default connect(mapStateToProps)(DynamicSliderContainer);
