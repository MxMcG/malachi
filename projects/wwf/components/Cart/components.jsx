import React, { Component } from 'react';

export default class Cart extends Component {

  constructor(props) {
    super(props);
  }

  showCart(boolean) {
    this.props.dispatchShowCart(boolean);
  }

  render() {
    console.log("cart props: ", this.props.activeCart)
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
          <div className="cart-section cart-section--top">
            <h2 className="cart-title">Your cart</h2>
            <button className="btn--close">
              <span>x</span>
              <span className="visuallyhidden">Close</span>
            </button>
          </div>

          <div className="cart-form">
            <div className="cart-item-container cart-section">

            </div>

            <div className="cart-bottom">
              <div className="cart-info clearfix cart-section">
                <div className="type--caps cart-info__total cart-info__small">Total</div>
                <div className="cart-info__pricing">
                  <span className="cart-info__small cart-info__total">CAD</span>
                  <span className="pricing pricing--no-padding"></span>
                </div>
              </div>
              <div className="cart-actions-container cart-section type--center">
                <div className="cart-discount-notice cart-info__small">Shipping and discount codes are added at checkout.</div>
                <input type="submit" className="btn btn--cart-checkout" id="checkout" name="checkout" value="Checkout"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
