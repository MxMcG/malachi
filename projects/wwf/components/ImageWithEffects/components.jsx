import React, { Component } from 'react';

export default class ImageWithEffects extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { image } = this.props.componentContent;
    const cdnImageBase = this.props.cdnImageBase;
    return (
      <div className="imageWithEffects" >        
        <img className="image" src={cdnImageBase + image.src} alt={image.alt}></img>
      </div>
    );
  }
}
