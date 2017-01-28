import React, { Component } from 'react';

export default class SwipeSlideshow extends Component {

  constructor(props) {
    super(props);
  }

  componentDidUpdate(newProps, newState) {
    if (newProps.shopCollections !== this.props.shopCollections) {
      this.attachLinksToSlides();
    }
  }

  attachLinksToSlides() {
    const slides = this.props.slides;
    const shopCollections = this.props.shopCollections;
    slides.forEach((slide, outerIndex) => {
      shopCollections.forEach((collection, innerIndex) => {
        if (slide.vendorName === collection.title) {
          const id = collection.collection_id;
          this.props.dispatchAddLinksToSlides(id, outerIndex);
        }
      });
    });
  }

  render() {
    const { slides } = this.props.componentContent;
    const cdnImageBase = this.props.cdnImageBase;
    return (
      <div className="swipeSlideshow" >
        <img className="image" src={cdnImageBase + 'cattle.jpg'} alt={slides[0].alt} ></img>
        <h2>{slides[0].headline}</h2>
        <button>{slides[0].ctaText}</button>
      </div>
    );
  }
}
