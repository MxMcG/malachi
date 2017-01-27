import React, { Component } from 'react';

const isBrowser = !!(typeof window !== 'undefined' && typeof navigator !== 'undefined' && window.document)
let queryByCollectionId;
if (isBrowser) {
  queryByCollectionId = require('../../common/shopify.js').queryByCollectionId;
}

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
