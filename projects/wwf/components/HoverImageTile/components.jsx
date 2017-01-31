import React, { Component } from 'react';

export default class HoverImageTile extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { ctaText, headline, subheadline, title, image } = this.props.componentContent;
    const cdnImageBase = this.props.cdnImageBase;
    return (
      <div className="hoverImageTile" >
        <h2>{headline}</h2>
        <h4>{subheadline}</h4>
        <h4>{ctaText}</h4>
        <h5>{title}</h5>
        <img src={cdnImageBase + image.src} alt={image.alt}></img>
      </div>
    );
  }
}
