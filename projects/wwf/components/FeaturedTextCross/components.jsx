import React, { Component } from 'react';

export default class FeaturedTextCross extends Component {

  constructor(props) {
    super(props);
  }

  displayCrafterTitle() {
    const product = this.props.loadedProducts[0];
    if (product) {
      const crafter = product.attrs.vendor;      
      return (
        <h1>About { crafter }</h1>);
    } else {
      return (<h1>About</h1>);
    }
  }

  render() {
    const { headline, description } = this.props.componentContent;
    return (
      <div className="featuredTextCross" >
        { this.displayCrafterTitle() }
        <hr></hr>
        <p>{description}</p>
      </div>
    );
  }
}
