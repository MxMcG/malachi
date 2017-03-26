import React, { Component } from 'react';
const isBrowser = !!(typeof window !== 'undefined' && typeof navigator !== 'undefined' && window.document)
let updateCart;
if (isBrowser) {
  updateCart = require('../../common/shopify.js').updateCart;
}

export default class ProductsDisplay extends Component {

  constructor(props) {
    super(props);
  }

  addToCart(id, quantity) {
    if (isBrowser) {
      updateCart(this.props.dispatch, this.props.activeCart, id, quantity);
    }
  }

  renderProducts() {
    // const loadedProducts = this.props.loadedProducts;
    const elements = [];
    this.props.shopCollections.forEach((collection, index) => {      
      if (collection.collection_id.toString() === this.props.paramId) {
        collection.products.forEach((product, index) => {
          const imageSrc = product.attrs.images[0].src;
          const title = product.title;
          const price = product.variants[0].formatted_price;
          const id = product.selectedVariant;
          // const url = product.variants[0].checkoutUrl(1);
          const buttonText = this.props.componentContent.ctaText;
          const html = (
            <div className="product" key={index}>
              <img className="productImage" src={imageSrc}></img>
              <h6 className="productTitle">{title}</h6>
              <p className="productPrice">{price}</p>
              <button onClick={() => { this.addToCart(id, 1) }}>Add To Cart</button>
            </div>
          )
          elements.push(html);
        });
      }
    });
    return elements;
  }

  render() {
    const { headline, ctaText } = this.props.componentContent;

    return (
      <div className="productsDisplay" >
        <h2>{headline}</h2>
          { this.renderProducts() }
      </div>
    );
  }
}
