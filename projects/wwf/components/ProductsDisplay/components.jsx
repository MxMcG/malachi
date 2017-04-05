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
          const dropdowns = [];
          const selects = product.options.forEach((option) => {
            const options = [];
            console.log(option)
            option.attrs.values.forEach((value) => {
              options.push(<option value={value}>{value}</option>);
            })
            dropdowns.push(
              <select name={option.attrs.name}>
                <option selected disabled>{option.attrs.name}</option>
                {options}
              </select>
            );
          });
          const formattedPrice = product.attrs.variants[0].formatted_price;
          const imageSrc = product.attrs.images[0].src;
          const title = product.title;
          const id = product.selectedVariant;
          // const url = product.variants[0].checkoutUrl(1);
          const buttonText = this.props.componentContent.ctaText;
          const html = (
            <div className="product" key={index}>
              <img className="productImage" src={imageSrc}></img>
              <h6 className="productTitle">{title}</h6>
              { dropdowns }
              <p className="productPrice">{formattedPrice}</p>
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
