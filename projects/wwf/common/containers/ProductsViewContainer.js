import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import ProductsView from '../../components/ProductsView/components.jsx';

// include actions as they are needed by each component
// they are called via dispatch()

const propTypes = {
  dispatch: PropTypes.func,
  content: PropTypes.object
};

// in here, we determine the props to be passed down to the specific component needed
class ProductsViewContainer extends Component {

  render () {
    console.log("FDFD",this.props)
    return (
      <ProductsView {...this.props} paramId={this.props.params.id}/>
    );
  }
}

ProductsViewContainer.propTypes = propTypes;

function mapStateToProps(state) {
  const componentContent = state.content.project.components.CrafterContainer.ProductsViewContainer;
  const loadedProducts = state.shop.loadCrafterProducts;
  const shopCollections = state.shop.shopCollections;
  const activeProduct = state.shop.activeProduct;
  const cdnImageBase = state.urls.cdnImageBase;
  const cdnUrl = state.urls.cdnUrl
  const activeCart = state.cart.activeCart;
  return {
    componentContent,
    loadedProducts,
    cdnImageBase,
    cdnUrl,
    activeCart,
    shopCollections,
    activeProduct
  };
}

function mapDispatchToProps (dispatch) {
  return {
    dispatchActivateProduct: (product) => {
      dispatch(actions.activateProduct(product))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsViewContainer);
