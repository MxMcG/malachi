import React, { Component } from 'react';
import { queryByCollectionId } from '../../common/shopify.js';

import ImageWithEffectsContainer from '../../common/containers/ImageWithEffectsContainer.js';
import FeaturedTextCrossContainer from '../../common/containers/FeaturedTextCrossContainer.js';
import ProductsDisplayContainer from '../../common/containers/ProductsDisplayContainer.js';

export default class Crafter extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    queryByCollectionId(this.props.params.id)
      .then((products) => {
        this.props.dispatchLoadCrafterProducts(products);
      }).catch((error) => {
        console.log('Fetching products error!', error);
      });;
  }



  render() {
    console.log('CRADTER', this.props.loadedProducts)
    return (
      <div className="crafter" >
        <ImageWithEffectsContainer />
        <FeaturedTextCrossContainer />
        <ProductsDisplayContainer />
      </div>
    );
  }
}
