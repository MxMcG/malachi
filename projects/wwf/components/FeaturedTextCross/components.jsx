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
        <h2>About { crafter }</h2>);
    } else {
      return (<h2>About</h2>);
    }
  }

  render() {
    const { headline, description } = this.props.componentContent;
    return (
      <div className="featuredTextCross" >
        <div className="wesCross"><div className="w">w</div><div className="mi"></div><div className="th"></div></div>
        { this.displayCrafterTitle() }
        <p>{description}</p>
      </div>
    );
  }
}
