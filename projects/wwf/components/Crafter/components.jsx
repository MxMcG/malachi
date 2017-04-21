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

  componentWillUpdate(nextProps, nextState){
    // if the products and collections are loaded, then fire off the function to load shop tiles.
    if (nextProps.shopCollections.length > 0) {      
      nextProps.shopCollections.forEach((collection, index) => {
       if (collection.collection_id.toString() === this.props.params.id) {
         this.props.dispatchCrafterCollection(collection);
        }
      })
    }

  }

  componentWillMount() {
    const isBrowser = !!(typeof window !== 'undefined' && typeof navigator !== 'undefined' && window.document)
    if (isBrowser) {
      queryByCollectionId(this.props.params.id)
      .then((products) => {
        this.props.dispatchLoadCrafterProducts(products);
      }).catch((error) => {
        console.log('Fetching products error!', error);
      });
      // If collections are loaded, use them
      if (this.props.shopCollections.length > 0) {
       this.props.shopCollections.forEach((collection, index) => {
        if (collection.collection_id.toString() === this.props.paramId) {
          this.props.dispatchCrafterCollection(collection);
          }
        })
      }
    }
  }

  render() {
    return (
      <div className="crafter" >
        <ImageWithEffectsContainer paramId={this.props.params.id} />
        <div className="cr_b">
          <div className="show-for-mobile"><FeaturedTextCrossContainer /></div>
          <ProductsDisplayContainer paramId={this.props.params.id} />
        </div>
      </div>
    );
  }
}
