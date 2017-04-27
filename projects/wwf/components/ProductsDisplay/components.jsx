import React, { Component } from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';

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
          // We will do the dropdowns on the template page instead
          // const dropdowns = [];
          // const selects = product.options.forEach((option) => {
          //   const options = [];
          //   option.attrs.values.forEach((value) => {
          //     options.push(<option value={value}>{value}</option>);
          //   })
          //   dropdowns.push(
          //     <select name={option.attrs.name}>
          //       <option selected disabled>{option.attrs.name}</option>
          //       {options}
          //     </select>
          //   );
          // });
          const formattedPrice = product.attrs.variants[0].formatted_price;
          const imageSrc = product.attrs.images[0].src;
          const title = product.title;
          const id = product.selectedVariant;
          // const url = product.variants[0].checkoutUrl(1);
          const buttonText = this.props.componentContent.ctaText;
          const html = (
          <Link to={`/products/${product.id}`} key={index}>
            <div className="product" key={index}>
              <img className="productImage" src={imageSrc}></img>
              <h6 className="productTitle">{title}</h6>

              <p className="productPrice">{formattedPrice}</p>
              <button className="button solid t_b black">View Product</button>
            </div>
          </Link>
          )
          elements.push(html);
        });
      }
    });
    return elements;
  }

  render() {
    const { headline, ctaText } = this.props.componentContent;
    let productTitle;
    let productHandle;
    this.props.shopCollections.forEach((collection, index) => {
      if (collection.collection_id.toString() === this.props.paramId) {
        productTitle = collection.attrs.title;
        productHandle = collection.attrs.handle.charAt(0).toUpperCase() + collection.attrs.handle.slice(1);
        console.log(collection)
      }
    });
    return (
      <div className="productsDisplay" >
        <Helmet
          title={`${productTitle} | ${productHandle} | WestWard`}
          meta={[
            {
              property: 'og:title',
              content: `Shop ${productTitle} online today and support global missions partners. Buy a hand-crafted item and choose your favorite charity to donate`
            }
          ]}
        />
        <h2>{headline}</h2>
          { this.renderProducts() }
      </div>
    );
  }
}
