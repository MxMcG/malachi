import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ImageWithEffects from '../../components/ImageWithEffects/components.jsx';

// include actions as they are needed by each component
// they are called via dispatch()

const propTypes = {
  dispatch: PropTypes.func,
  content: PropTypes.object
};

// in here, we determine the props to be passed down to the specific component needed
class ImageWithEffectsContainer extends Component {

  render () {
    return (
      <ImageWithEffects {...this.props} />
    );
  }
}

ImageWithEffectsContainer.propTypes = propTypes;

function mapStateToProps(state) {
  const componentContent = state.content.project.components.CrafterContainer.ImageWithEffectsContainer;
  const loadedProducts = state.shop.loadCrafterProducts;
  const cdnImageBase = state.urls.cdnImageBase;
  const cdnUrl = state.urls.cdnUrl
  return {
    componentContent,
    loadedProducts,
    cdnImageBase,
    cdnUrl
  };
}

export default connect(mapStateToProps)(ImageWithEffectsContainer);
