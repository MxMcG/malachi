import React, { Component } from 'react';

export default class TileLinks extends Component {

  constructor(props) {
    super(props);
    this.state = {
      test: ''
    }
  }

  render() {
    // const headline = this.props.config.content.project.components.TestA.headline
    // const cdnBase = this.props.config.cdnUrl;
    return (
      <div className="tileLinks" >
        <a href="https://www.google.com" target="_blank">Lnk</a>
        <a href="https://www.google.com" target="_blank">Lnk</a>
      </div>
    );
  }
}
