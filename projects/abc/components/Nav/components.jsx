import React, { Component } from 'react';
import TileLinks from '../../common/containers/TileLinksContainer.js';
import './styles/test.scss';

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
        <h1>{headline}</h1>
        <TileLinks />
        <img className='imageCattle' src={cdnImageBase + cattleImg}></img>
        <img className='imageCattle' src={cdnImageBase + testImg}></img>
      </div>
    );
  }
}
