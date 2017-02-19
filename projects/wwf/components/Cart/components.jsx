import React, { Component } from 'react';
import { Link } from 'react-router';

const isBrowser = !!(typeof window !== 'undefined' && typeof navigator !== 'undefined' && window.document)
let updateVariantInCart;
if (isBrowser) {
  updateVariantInCart = require('../../common/shopify.js').updateVariantInCart;
}

export default class Cart extends Component {

  constructor(props) {
    super(props);
  }

  // componentDidUpdate(newProps, newState) {
  //   if (newProps.activeCart !== this.props.activeCart) {
  //
  //   }
  // }

  showCart(boolean) {
    this.props.dispatchShowCart(boolean);
  }

  incrementQuantity(id, quantity) {
    if (isBrowser) {
      updateVariantInCart(this.props.dispatch, this.props.activeCart, id, quantity);
    }
  }

  decrementQuantity(id, quantity) {
    if (isBrowser) {
      updateVariantInCart(this.props.dispatch, this.props.activeCart, id, quantity);
    }
  }

  renderCartItems() {
    const elements = [];
    const activeCart = this.props.cart.activeCart
    const lineItems = activeCart.lineItems;
    if (lineItems) {
      lineItems.forEach((item, index) => {        
        elements.push(
          <div className="cart-item" key={index}>
            <div className="cart-item__img" style={{ backgroundImage: 'url(' + item.image.src + ')' }}></div>
            <div className="cart-item__content">
              <div className="cart-item__content-row">
                <span className="cart-item__title">{item.title}</span>
              </div>
              <div className="cart-item__content-row">
                <div className="cart-item__quantity-container">
                  <button className="btn--seamless quantity-decrement" type="button" data-variant-id="10493405315">
                    <span onClick={() => {
                        this.decrementQuantity(item.id, (item.quantity - 1))
                      }
                    }>-</span>
                  </button>
                  <input className="cart-item__quantity" type="number" min="0" aria-label="Quantity" value={item.quantity}/>
                  <button className="btn--seamless quantity-increment" type="button" data-variant-id="10493405315">
                    <span onClick={() => {
                        this.incrementQuantity(item.id, (item.quantity + 1))
                      }
                    }>+</span>
                  </button>
                </div>
                <span className="cart-item__price">{`$${(item.price*item.quantity)}`}</span>
              </div>
            </div>
          </div>
        );
      });
    } else {
      return null;
    }
    return elements;
  }

  handleCloseCart() {
    // console.log("Closed")
  }

  render() {
    const activeCart = this.props.activeCart;
    const toggle = (this.props.showCart === true) ? 'active' : 'inactive';
    return (
      <div className="cartContainer">
        <div onClick={ () => { toggle === 'inactive' ? this.showCart(true) : this.showCart(false); }}>
          <button>TOGGLE</button>
        </div>
        <div className={`cart ${toggle}`} >
          <div className="cartTop">
            <h2 className="cart-title">Your cart</h2>
            <button onClick={() => { this.showCart(false) }} className="btn--close">×</button>
            <span className="visuallyhidden"></span>
          </div>
          <div className="cartItemContainer">
            <div className="cartItems">
              { this.renderCartItems() }
            </div>
            <div className="cart-bottom">
              <div className="priceTotal">
                <div className="total">TOTAL</div>
                <div className="subtotalContainer">
                  <div className="cad">CAD</div>
                  <div className="subtotal">${activeCart.subtotal}</div>
                </div>
              </div>
              <div className="checkout">
                <div className="checkoutDisclaimer">Shipping and discount codes are added at checkout.</div>
                <Link to={activeCart.checkoutUrl} target="_blank" className="checkoutLink">
                  <button className="checkoutLinkButton">Checkout</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
