import React, { Component } from 'react';
import { Link } from 'react-router';

export default class FeaturedImageSlideshow extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { headline, subheadline, ctaText, images } = this.props.componentContent;
    const cdnImageBase = this.props.cdnImageBase;
    console.log("DEV_EVENTS_SLIDESHOW: ", images)
    return (
      <div className="featuredImageSlideshow" >
        <h2>{headline}</h2>
        <h4>{subheadline}</h4>
        <img className="image" src={cdnImageBase + images[0].src}></img>
        <Link to="/events" className="link">                    
          <button>{ctaText}</button>
        </Link>
      </div>
    );
  }
}
