import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import ProductsDisplay from '../../components/ProductsDisplay/components.jsx';

// include actions as they are needed by each component
// they are called via dispatch()

const propTypes = {
  dispatch: PropTypes.func,
  content: PropTypes.object
};

// in here, we determine the props to be passed down to the specific component needed
class ProductsDisplayContainer extends Component {

  render () {
    return (
      <ProductsDisplay {...this.props} />
    );
  }
}

ProductsDisplayContainer.propTypes = propTypes;

function mapStateToProps(state) {
  const componentContent = state.content.project.components.CrafterContainer.ProductsDisplayContainer;
  const loadedProducts = state.shop.loadCrafterProducts;
  const cdnImageBase = state.urls.cdnImageBase;
  const cdnUrl = state.urls.cdnUrl
  const activeCart = state.cart.activeCart;
  return {
    componentContent,
    loadedProducts,
    cdnImageBase,
    cdnUrl,
    activeCart
  };
}
//
// function mapDispatchToProps (dispatch) {
//   return {
//     dispatchAddItemToCart: (boolean) => {
//       dispatch(actions.updateCart(boolean))
//     }
//   }
// }

export default connect(mapStateToProps)(ProductsDisplayContainer);
