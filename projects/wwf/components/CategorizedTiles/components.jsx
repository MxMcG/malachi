import React, { Component } from 'react';

export default class CategorizedTiles extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {

  }

  handleDropDown(e) {
    e.preventDefault();
    const category = e.target.value
    this.props.dispatchActivateCategory(category);
  }

  renderDropdown() {
    // const categories = [];
    // const tiles = [];
    //
    // this.props.shopCollections.forEach((collection, index) => {
    //   if (categories.indexOf(collection.handle) === -1) {
    //     categories.push(collection.handle);
    //   }
    // });
    // // [ { category, tiles: [{},{},{}] }, ]
    // categories.forEach((category, index) => {
    //   tiles.push(
    //     <div className="tile">
    //       <h5>Category</h5>
    //
    //     </div>
    //   );
    // });
    // return tiles;
  }

  renderTiles() {

  }

  render() {
    const { tiles, categories } = this.props.componentContent;
    return (
      <div className="categorizedTiles" >
        { this.renderDropdown() }
        { this.renderTiles() }
      </div>
    );
  }
}
