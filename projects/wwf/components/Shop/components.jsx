import React, { Component } from 'react';

export default class Shop extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log("Component Content", this.props.componentContent)
    return (
      <div className="footer" >
        <h1>Shop</h1>
      </div>
    );
  }
}
