import React, { Component } from 'react';

export default class ProductsDisplay extends Component {

  constructor(props) {
    super(props);
  }

  renderProducts() {
    const loadedProducts = this.props.loadedProducts;
    const elements = [];
    loadedProducts.forEach((product, index) => {
      const imageSrc = product.attrs.images[0].src;
      const title = product.title;
      const price = product.variants[0].formatted_price;
      const url = product.variants[0].checkoutUrl(1);
      const buttonText = this.props.componentContent.ctaText;
      const html = (
        <div className="product" key={index}>
          <img className="productImage" src={imageSrc}></img>
          <h4 className="productTitle">{title}</h4>
          <p className="productPrice">{price}</p>
          <a href={url}>{buttonText}</a>
        </div>
      )
      elements.push(html);
    });
    return elements;
  }

  render() {
    const { headline, ctaText } = this.props.componentContent;

    return (
      <div className="productsDisplay" >
        <h1>{headline}</h1>
        { this.renderProducts() }
      </div>
    );
  }
}
