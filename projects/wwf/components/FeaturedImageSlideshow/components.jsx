import React, { Component } from 'react';

export default class FeaturedImageSlideshow extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { headline, subheadline, ctaText, images } = this.props.componentContent;
    console.log('CRAY', images)
    const cdnImageBase = this.props.cdnImageBase;
    return (
      <div className="featuredImageSlideshow" >
        <h2>{headline}</h2>
        <h4>{subheadline}</h4>
        <img className="image" src={cdnImageBase + images[0].src}></img>
        <button>{ctaText}</button>
      </div>
    );
  }
}
