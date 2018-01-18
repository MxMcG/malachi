import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import FeaturedImageSlideshow from '../../components/FeaturedImageSlideshow/components.jsx';

// include actions as they are needed by each component
// they are called via dispatch()

const propTypes = {

};

// in here, we determine the props to be passed down to the specific component needed
class FeaturedImageSlideshowContainer extends Component {
  componentDidMount () {
    const { dispatch } = this.props;
  }

  render () {
    return (
      <FeaturedImageSlideshow {...this.props} />
    );
  }
}

FeaturedImageSlideshowContainer.propTypes = propTypes;

function mapStateToProps(state) {
  const componentContent = state.content.project.components.HomeContainer.FeaturedImageSlideshowContainer;
  const cdnImageBase = state.urls.cdnImageBase;
  const cdnUrl = state.urls.cdnUrl
  const sanityData = state.sanityData.featuredImagesSlideshow;
  return {
    componentContent,
    cdnUrl,
    cdnImageBase,
    sanityData,
  };
}

export default connect(mapStateToProps)(FeaturedImageSlideshowContainer);
