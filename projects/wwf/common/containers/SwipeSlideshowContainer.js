import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import SwipeSlideshow from '../../components/SwipeSlideshow/components.jsx';
import * as actions from '../actions/index';

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
  const componentContent = state.content.project.components.HomeContainer.SwipeSlideshowContainer;
  const shopCollections = state.shop.shopCollections;
  const shopProducts = state.shop.shopProducts;
  const cdnImageBase = state.urls.cdnImageBase;
  const cdnUrl = state.urls.cdnUrl;
  const slides = state.shop.fetchSlides;
  const sanityData = state.sanityData.topSlider;
  return {
    componentContent,
    cdnUrl,
    cdnImageBase,
    shopCollections,
    shopProducts,
    slides,
    sanityData,
  };
}

function mapDispatchToProps (dispatch) {
  return {
    dispatchAddLinksToSlides: (id, index) => {
      dispatch(actions.addLinksToSlides(id, index))
    },
    dispatchAddBuyButtonLinks: (href, index) => {
      dispatch(actions.addBuyLinksToSlides(href, index))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SwipeSlideshowContainer);
