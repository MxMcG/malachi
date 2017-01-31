import React, { Component } from 'react';
import { Link } from 'react-router';

export default class SwipeSlideshow extends Component {

  constructor(props) {
    super(props);
  }

  componentDidUpdate(newProps, newState) {
    if (newProps.shopCollections !== this.props.shopCollections) {
      this.attachLinksToSlides();
    }
    if (newProps.shopProducts !== this.props.shopProducts) {
      this.attachBuyButtonLinks();
    }
  }

  attachLinksToSlides() {
    const slides = this.props.slides;
    const shopCollections = this.props.shopCollections;
    const shopProducts = this.props.shopProducts;
    slides.forEach((slide, outerIndex) => {
      shopCollections.forEach((collection, innerIndex) => {
        if (slide.vendorName === collection.title) {
          const id = collection.collection_id;
          this.props.dispatchAddLinksToSlides(id, outerIndex);
        }
      });
    });
  }

  attachBuyButtonLinks() {
    const slides = this.props.slides;
    const shopProducts = this.props.shopProducts;
    slides.forEach((slide, outerIndex) => {
      shopProducts.forEach((product, innerIndex) => {
        if (slide.productTitle === product.attrs.title) {
          this.props.dispatchAddBuyButtonLinks(product.variants[0].checkoutUrl(1), outerIndex);
        }
      });
    });
  }

  renderSlides() {
    console.log("DEV_Slides: ", this.props.slides)
    const loadedSlides = this.props.slides;
    const preRenderSlides = this.props.componentContent.slides;
    const cdnImageBase = this.props.cdnImageBase;
    if (!loadedSlides[0]) {
      return (
        <div className="swipeSlideshow" >
          <Link to={preRenderSlides[0].hrefCrafter} className="link">
            <img className="image" src={cdnImageBase + preRenderSlides[0].src}></img>
            <h2>{preRenderSlides[0].headline}</h2>
          </Link>
          <Link to={preRenderSlides[0].hrefBuy} className="link">
            {preRenderSlides[0].ctaText}
          </Link>
        </div>
      );
    } else {
      return (
        <div className="swipeSlideshow" >
          <Link to={loadedSlides[0].hrefCrafter} className="link">
            <img className="image" src={cdnImageBase + loadedSlides[0].image.src}></img>
            <h2>{loadedSlides[0].headline}</h2>
          </Link>
          <Link to={loadedSlides[0].hrefBuy} className="link" target="_blank">
            {loadedSlides[0].ctaText}
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="swipeSlideshowContainer">
        { this.renderSlides() }
      </div>
    )
  }
}
