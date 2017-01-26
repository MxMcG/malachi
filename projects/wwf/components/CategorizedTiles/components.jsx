import React, { Component } from 'react';

export default class CategorizedTiles extends Component {

  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps, prevState) {

  }

  componentWillMount() {
    this.updateCollectionsWithProductTypes();
  }

  setupCategories() {

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
      // console.log('CATEGPOriES', collections)
      // console.log('NewTiles', newTiles)
      const elements = [];
      newTiles.forEach((tile, outerIndex) => {
        const innerElements = []
        collections.forEach((coll, innerIndex) => {
          if (coll.product_type === tile) {
            innerElements.push(
              <div className="tiles" key={innerIndex}>
                <a href="#">
                  <img>{coll.image}</img>
                  <p>{coll.title}</p>
                </a>
              </div>
            );
          }
        })

        const html = (
          <div className="category" key={outerIndex}>
            <h4>{tile}</h4>
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
    // console.log(this.props.shopProducts)
    // console.log(this.props.shopCollections)
    console.log('BREAK', this.props)
    let elements = null;
    if (this.props.shopTilesLoaded) {
      elements = this.props.loadedShopTiles;
    }
    const { tiles, categories } = this.props.componentContent;
    return (
      <div className="categorizedTiles" >
        { elements }
      </div>
    );
  }
}

// const elements = [];
// const tiles = [];
// const categoryList = [];
// for (var i = 0; i < categories.length; i++) {
//   const category = categories[i];
//   const tile = {
//     vendors: [],
//     title: ''
//   };
//   tile.title = category.title;
//   tile.vendors.push({
//     'name': category.vendor,
//     'image': category.image
//   });
//   if (categoryList.indexOf(tile.title) === -1) {
//     categoryList.push(tile.title);
//   }
// }
// [ 'outdoors', 'home goods', 'apparel']
// [ {}, {}, {} ]
// create object for each array element
// loop through tiles and new objects
// when tile name matches new object name
// create a property called vendor and push tile vendor data into property
// const newTiles = [];
// categoryList.forEach((cat, index) => {
//   const newTile = { categoryName: cat };
//   newTiles.push(newTile);
// });
// for (let outerIndex = 0; outerIndex < newTiles.length; outerIndex++) {
//   console.log('newTiles', newTiles[outerIndex].categoryName)
// }

  // for (let innerIndex = 0; innerIndex < tiles.length; innerIndex++) {
  //   if (newTiles[outerIndex].categoryName === tiles[innerIndex].title) {
  //     console.log('let me know', newTiles[outerIndex].categoryName)
  //   }
  // }


// console.log('tiles', newTiles)
// <div className="category">
//   <h4>{category.title}</h4>
//    {tiles}
// </div>
