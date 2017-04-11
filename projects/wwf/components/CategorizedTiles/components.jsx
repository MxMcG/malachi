import React, { Component } from 'react';
import { Link } from 'react-router';

export default class CategorizedTiles extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount () {
    if ((this.props.shopProducts.length > 0) && (this.props.shopCollections.length > 0)) {
      this.updateCollectionsWithProductTypes();
    }
  }

  componentDidUpdate(nextProps, nextState){
    // if the products and collections are loaded, then fire off the function to load shop tiles.
    if (
      (this.props.shopProductsLoaded === true) &&
      (this.props.shopCollectionsLoaded === true) &&
      (this.props.shopTilesLoaded === false)
    ) { this.updateCollectionsWithProductTypes(); }
  }

  updateCollectionsWithProductTypes() {
    let collections = [];
    if (this.props.shopCollections.length === 0) { return null; }
    this.props.shopCollections.forEach((collection, index) => {
      this.props.shopProducts.forEach((product, nestedIndex) => {
        if (collection.attrs.title === product.attrs.vendor) {
          collection.attrs.product_type = product.attrs.product_type;
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
        if (newTiles.indexOf(collection.attrs.product_type) === -1) {
          newTiles.push(collection.attrs.product_type);
        }
      });
      const elements = [];
      newTiles.forEach((tile, outerIndex) => {
        const innerElements = []
        collections.forEach((coll, innerIndex) => {
          if (coll.attrs.product_type === tile) {
            innerElements.push(
              <div className="tiles" key={innerIndex}>
                <Link to={`/crafters/${coll.attrs.collection_id}`} className="">
                  <div className="prodOverlayWrap per">
                      <div className="vendorImage" style={{backgroundImage: 'url(' + coll.attrs.image.src + ')'}}></div>
                      <div className="overlayDescription t_b hov">
                        <div className="t_cen">
                            <p>{coll.attrs.title}</p>
                        </div>
                      </div>
                  </div>
                  <p>{coll.attrs.title}</p>
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

    // let elements = null;
    // if (this.props.shopTilesLoaded) {
    //   elements = this.props.loadedShopTiles;
    // }
    // return elements;
  }

  render() {
    return (
      <div className="categorizedTiles">
        { this.props.loadedShopTiles }
      </div>
    );
  }
}
