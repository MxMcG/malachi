import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import Cart from '../../components/Cart/components.jsx';

// include actions as they are needed by each component
// they are called via dispatch()

const propTypes = {
  dispatch: PropTypes.func,
  content: PropTypes.object
};

// in here, we determine the props to be passed down to the specific component needed
class CartContainer extends Component {

  render () {
    return (
      <Cart {...this.props} />
    );
  }
}

CartContainer.propTypes = propTypes;

function mapStateToProps(state) {
  const componentContent = state.content.project.components.CartContainer;
  const cart = state.cart;
  const cdnImageBase = state.urls.cdnImageBase;
  const cdnUrl = state.urls.cdnUrl;
  const showCart = state.cart.showCart;
  const activeCart = state.cart.activeCart;
  return {
    cart,
    componentContent,
    cdnUrl,
    cdnImageBase,
    showCart,
    activeCart
  };
}

function mapDispatchToProps (dispatch) {
  return {
    dispatchShowCart: (boolean) => {
      dispatch(actions.showCart(boolean))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
