import React, { Component } from 'react';
import { Link } from 'react-router';

export default class CategorizedTiles extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.updateCollectionsWithProductTypes();
  }

  updateCollectionsWithProductTypes() {
    let collections = [];
    this.props.shopCollections.forEach((collection, index) => {
      this.props.shopProducts.forEach((product, nestedIndex) => {
        if (collection.title === product.attrs.vendor) {
          collection.product_type = product.attrs.product_type;
        }
      });
      collections.push(collection);
    });
    this.createElements(collections);
  }

  createElements(collections) {
    if (collections) {
      const newTiles = [];
      collections.forEach((collection, index) => {
        if (newTiles.indexOf(collection.product_type) === -1) {
          newTiles.push(collection.product_type);
        }
      });
      const elements = [];
      newTiles.forEach((tile, outerIndex) => {
        const innerElements = []
        collections.forEach((coll, innerIndex) => {
          if (coll.product_type === tile) {
            innerElements.push(
              <div className="tiles" key={innerIndex}>
                <Link to={`/crafters/${coll.collection_id}`} className="">
                  <img className="vendorImage" src={coll.image.src}></img>
                  <p>{coll.title}</p>
                </Link>
              </div>
            );
          }
        })
        const html = (
          <div className="category" key={outerIndex}>
            <h2>{tile}</h2>
            { innerElements }
          </div>
        )
        elements.push(html);
      });
      this.props.dispatchLoadShopTiles(elements);
      this.props.dispatchShopTilesLoaded(true);
    }
  }

  render() {
    let elements = null;
    if (this.props.shopTilesLoaded) {
      elements = this.props.loadedShopTiles;
    }
    const { tiles, categories } = this.props.componentContent;
    return (
      <div className="categorizedTiles">
        { elements }
      </div>
    );
  }
}
