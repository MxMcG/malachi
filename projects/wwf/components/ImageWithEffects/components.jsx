import React, { Component } from 'react';

export default class ImageWithEffects extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { imageBase, imageEffects } = this.props.componentContent;
    const cdnImageBase = this.props.cdnImageBase;
    return (
      <div className="imageWithEffects" >
        <img className="image" src={cdnImageBase + imageBase.src} alt={imageBase.alt}></img>
        <img className="image" src={cdnImageBase + imageEffects.src} alt={imageBase.alt}></img>
      </div>
    );
  }
}
