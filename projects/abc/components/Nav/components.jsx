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
    // const headline = this.props.config.content.project.components.TestA.headline
    const cdnBase = this.props.cdnUrl;
    return (
      <div className="nav" >
        <TileLinks />
        <img className='imageCattle' src={cdnBase + 'images/cattle.jpg'}></img>
      </div>
    );
  }
}
