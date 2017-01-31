import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import FeaturedTextCross from '../../components/FeaturedTextCross/components.jsx';

// include actions as they are needed by each component
// they are called via dispatch()

const propTypes = {
  dispatch: PropTypes.func,
  content: PropTypes.object
};

// in here, we determine the props to be passed down to the specific component needed
class FeaturedTextCrossContainer extends Component {

  render () {
    return (
      <FeaturedTextCross {...this.props} />
    );
  }
}

FeaturedTextCrossContainer.propTypes = propTypes;

function mapStateToProps(state) {  
  const componentContent = state.content.project.components.CrafterContainer.FeaturedTextCrossContainer;
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

export default connect(mapStateToProps)(FeaturedTextCrossContainer);
