import React, { Component } from 'react';

export default class CategorizedTiles extends Component {

  constructor(props) {
    super(props);
  }

  handleDropDown(e) {
    e.preventDefault();
    const category = e.target.value
    this.props.dispatchActivateCategory(category);
  }

  renderDropdown() {
    const options = [];
    const categories = this.props.componentContent.categories;
    categories.forEach((category, index) => {
      options.push(<option key={index} value={category.title} name={category.name}>{category.title}</option>);
    });
    return (
      <select onChange={this.handleDropDown.bind(this)} value={categories[0].title} name={categories[0].name} >
        { options }
      </select>
    );
  }

  renderTiles() {

  }

  render() {
    console.log('CATEGORY', this.props.activeCategory)
    const { tiles, categories } = this.props.componentContent;
    return (
      <div className="categorizedTiles" >
        { this.renderDropdown() }
        { this.renderTiles() }
      </div>
    );
  }
}
