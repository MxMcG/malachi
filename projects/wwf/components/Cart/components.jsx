import React, { Component } from 'react';
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
        console.log('LINE ITEM', item)
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
                    <span className="visuallyhidden"></span>
                  </button>
                  <input className="cart-item__quantity" type="number" min="0" aria-label="Quantity" value={item.quantity} />
                  <button className="btn--seamless quantity-increment" type="button" data-variant-id="10493405315">
                    <span onClick={() => {
                        this.incrementQuantity(item.id, (item.quantity + 1))
                      }
                    }>+</span>
                    <span className="visuallyhidden"></span>
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

  render() {
    const activeCart = this.props.activeCart;
    const toggle = (this.props.showCart === true) ? 'active' : 'inactive';
    return (
      <div>
        <div onClick={
            () => {
              toggle === 'inactive' ? this.showCart(true) : this.showCart(false);
            }
        }>
          <button>TOGGLE</button>
        </div>

        <div className={`cart ${toggle}`} >
          <div className="">
            <h2 className="">Your cart</h2>
            <button className="">
              <span>x</span>
              <span className="">Close</span>
            </button>
          </div>

          <div className="cartItemContainer">
            <div className="">
              { this.renderCartItems() }
            </div>

            <div className="">
              <div className="">Total</div>
              <div className="">
                <span className="">CAD</span>
                <span className="">${activeCart.subtotal}</span>
              </div>
              <div className="">
                <div className="">Shipping and discount codes are added at checkout.</div>
                <input type="submit" className="" value="Checkout"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
