import React, { Component } from 'react';
import { Link } from 'react-router';
const isBrowser = !!(typeof window !== 'undefined' && typeof navigator !== 'undefined' && window.document)
let updateCart;
let queryByProductId;
if (isBrowser) {
  updateCart = require('../../common/shopify.js').updateCart;
  queryByProductId = require('../../common/shopify.js').queryByProductId;
}

export default class ProductsView extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (isBrowser) {
      queryByProductId(this.props.paramId)
      .then((product) => {
        this.convertObjectToHtml(product);
      }).catch((error) => {
        console.log('Fetching products error!', error);
      });
    }
  }

  addToCart(id, quantity, image) {
    if (isBrowser) {
      this.props.dispatchAddToCart(this.props.activeCart, id, quantity);
    }
  }

  handleChange(select) {
    const optionName = select.target.value;
    const optionSelected = this.props.activeProduct.data.options.forEach((option) => {
      option.values.forEach((value) => {
        if (value === optionName) {
          option.selected = value;          
        };
      })
    });
  }

  convertObjectToHtml(product) {
    // We will do the dropdowns on the template page instead
    const dropdowns = [];
    const selects = product.options.forEach((option) => {
      const options = [];
      option.attrs.values.forEach((value) => {
        options.push(<option value={value} className="variantOption">{value}</option>);
      })
      dropdowns.push(
        <select name={option.attrs.name} className="variantSelect" onChange={this.handleChange.bind(this)}>
          <option selected disabled className="variantOption">{option.attrs.name}</option>
          {options}
        </select>
      );
    });
    const htmlWrapper = [];
    const variant = product.variants[0];
    const title = product.attrs.title;
    const price = variant.formattedPrice;
    const images = product.attrs.images;
    const descriptWrapper = [];
    const variants = product.attrs.variants;
    const html = (
      <div className="productsView" key="1">
        <img src={images[0].src}/>
        <h2>{title}</h2>
        <h4>Price: {price}</h4>
        { dropdowns }
        <div className="description" dangerouslySetInnerHTML={{__html: product.attrs.body_html}}></div>
        <button onClick={() => this.addToCart(product.selectedVariant, 1)} className="button solid t_b black">Add to Cart</button>
      </div>
    )
    htmlWrapper.push(html);
    this.props.dispatchActivateProduct({
      html: htmlWrapper,
      data: product
    })
  }

  render() {
    return (
      <div className="productsView">
        { this.props.activeProduct.html }
      </div>
    );
  }
}
