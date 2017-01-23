import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import SwipeSlideshow from '../../components/SwipeSlideshow/components.jsx';

// include actions as they are needed by each component
// they are called via dispatch()

const propTypes = {

};

// in here, we determine the props to be passed down to the specific component needed
class SwipeSlideshowContainer extends Component {
  componentDidMount () {
    const { dispatch } = this.props;
  }

  render () {
    return (
      <SwipeSlideshow {...this.props} />
    );
  }
}

SwipeSlideshowContainer.propTypes = propTypes;

function mapStateToProps(state) {
  const componentContent = state.content.project.components.SwipeSlideshowContainer;
  const cdnImageBase = state.urls.cdnImageBase;
  const cdnUrl = state.urls.cdnUrl
  return {
    componentContent,
    cdnUrl,
    cdnImageBase
  };
}

export default connect(mapStateToProps)(SwipeSlideshowContainer);
