import React, { Component } from 'react';
import { Link } from 'react-router';
import TileLinks from '../../common/containers/TileLinksContainer.js';

export default class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      test: ''
    }
  }

  render() {
    const { headline, cattleImg, testImg } = this.props.componentContent;
    const cdnImageBase = this.props.cdnImageBase;
    return (
      <div className="nav" >
        <h1>Westward</h1>
      </div>
    );
  }
}
