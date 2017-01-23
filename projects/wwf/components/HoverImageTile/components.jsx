import React, { Component } from 'react';

export default class HoverImageTile extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log("Component Content", this.props.componentContent)
    return (
      <div className="hoverImageTile" >
        <h1>HoverImageTile</h1>
      </div>
    );
  }
}
