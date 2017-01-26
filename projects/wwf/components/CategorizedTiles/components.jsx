import React, { Component } from 'react';

export default class CategorizedTiles extends Component {

  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps, prevState) {

  }

  componentWillMount() {
    this.loadCategories();
  }

  setupCategories() {

  }

  loadCategories() {
    let categories = [];
    this.props.shopCollections.forEach((collection, index) => {
      const category = {};
      const collectionTitle = collection.title;
      const collectionImage = collection.image;
      category.vendor = collectionTitle;
      category.image = collectionImage;
      // gather products into collections
      this.props.shopProducts.forEach((product, nestedIndex) => {
        if (collectionTitle === product.attrs.vendor) {
          category.title = product.attrs.product_type;
        }
      });
      categories.push(category);
    });
    this.createElements(categories);
  }

  createElements(categories) {
    const elements = [];
    const tiles = [];
    const categoryList = [];
    for (var i = 0; i < categories.length; i++) {
      const category = categories[i];
      const tile = {
        vendors: [],
        title: ''
      };
      tile.title = category.title;
      tile.vendors.push({
        'name': category.vendor,
        'image': category.image
      });
      if (categoryList.indexOf(tile.title) === -1) {
        categoryList.push(tile.title);
      }
    }
    // [ 'outdoors', 'home goods', 'apparel']
    // [ {}, {}, {} ]
    // create object for each array element
    // loop through tiles and new objects
    // when tile name matches new object name
    // create a property called vendor and push tile vendor data into property
    const newTiles = [];
    categoryList.forEach((cat, index) => {
      const newTile = { categoryName: cat };
      newTiles.push(newTile);
    });
    for (let outerIndex = 0; outerIndex < newTiles.length; outerIndex++) {
      console.log('newTiles', newTiles[outerIndex].categoryName)
      
      // for (let innerIndex = 0; innerIndex < tiles.length; innerIndex++) {
      //   if (newTiles[outerIndex].categoryName === tiles[innerIndex].title) {
      //     console.log('let me know', newTiles[outerIndex].categoryName)
      //   }
      // }
    }


    // console.log('tiles', newTiles)
    // <div className="category">
    //   <h4>{category.title}</h4>
    //    {tiles}
    // </div>
  }

  render() {
    console.log(this.props.shopProducts)
    console.log(this.props.shopCollections)

    const { tiles, categories } = this.props.componentContent;
    return (
      <div className="categorizedTiles" >

      </div>
    );
  }
}
