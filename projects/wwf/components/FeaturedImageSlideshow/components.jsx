import React, { Component } from 'react';

export default class FeaturedImageSlideshow extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { headline, subheadline, ctaText, images } = this.props.componentContent;
    const cdnImageBase = this.props.cdnImageBase;
    return (
      <div className="featuredImageSlideshow" >
        <h2>{headline}</h2>
        <h4>{subheadline}</h4>
        <img className="image" src={cdnImageBase + "cattle.jpg"}></img>
        <button>{ctaText}</button>
      </div>
    );
  }
}
