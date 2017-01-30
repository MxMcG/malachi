import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import CategorizedTiles from '../../components/CategorizedTiles/components.jsx';
import * as actions from '../actions/index';

// include actions as they are needed by each component
// they are called via dispatch()

const propTypes = {
  dispatch: PropTypes.func,
  content: PropTypes.object
};

// in here, we determine the props to be passed down to the specific component needed
class CategorizedTilesContainer extends Component {

  render () {
    return (
      <CategorizedTiles {...this.props} />
    );
  }
}

CategorizedTilesContainer.propTypes = propTypes;

function mapStateToProps(state) {
  const componentContent = state.content.project.components.ShopContainer.CategorizedTilesContainer;
  const cdnImageBase = state.urls.cdnImageBase;
  const cdnUrl = state.urls.cdnUrl;
  const shopCollections = state.shop.shopCollections;
  const shopProducts = state.shop.shopProducts;
  const shopTilesLoaded = state.shop.shopTilesLoaded;
  const loadedShopTiles = state.shop.loadShopTiles;
  return {
    shopCollections,
    loadedShopTiles,
    shopProducts,
    shopTilesLoaded,
    componentContent,
    cdnUrl,
    cdnImageBase
  };
}

function mapDispatchToProps (dispatch) {
  return {
    dispatchShopTilesLoaded: (boolean) => {
      dispatch(actions.shopTilesLoaded(boolean))
    },
    dispatchLoadShopTiles: (elements) => {
      dispatch(actions.loadShopTiles(elements))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategorizedTilesContainer);
