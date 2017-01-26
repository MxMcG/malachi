import React, { Component } from 'react';

export default class CategorizedTiles extends Component {

  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps, prevState) {

  }

  componentWillMount() {

  }

  setupCategories() {

  }

  renderTiles() {

  }

  render() {
    console.log("INVENT", this.props.shopCollections)
    console.log("INVENT3", this.props.shopProducts)
    const { tiles, categories } = this.props.componentContent;
    return (
      <div className="categorizedTiles" >
        { this.renderTiles() }
      </div>
    );
  }
}
