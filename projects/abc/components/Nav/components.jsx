import React, { Component } from 'react';
import TileLinks from '../../common/containers/TileLinksContainer.js';

export default class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      test: ''
    }
  }

  render() {
    console.log('PROPS', this.props)
    const headline = this.props.componentContent.headline;
    const cdnBase = this.props.cdnUrl;
    return (
      <div className="nav" >
        <h1>{headline}</h1>
        <TileLinks />
        <img className='imageCattle' src={cdnBase + 'images/cattle.jpg'}></img>
      </div>
    );
  }
}
