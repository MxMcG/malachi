import React, { Component } from 'react';

export default class TileLinks extends Component {

  constructor(props) {
    super(props);
    this.state = {
      test: ''
    }
  }

  render() {
    const headline = this.props.componentContent.headline;
    return (
      <div className="tileLinks" >
        <a href="https://www.google.com" target="_blank">{headline}</a>
        <br></br>
        <a href="https://www.google.com" target="_blank">{headline}</a>
      </div>
    );
  }
}
