import React, { Component } from 'react';
import { Link } from 'react-router';
import Slider from 'react-slick';

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
    const loadedSlides = this.props.slides;
    const preRenderSlides = this.props.componentContent.slides;
    const cdnImageBase = this.props.cdnImageBase;
    const elements = [];
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
      loadedSlides.forEach((slide, index) => {
        elements.push(
          <div className="swipeSlideshow" style={{backgroundImage: 'url(' + cdnImageBase + slide.image.src + ')'}} key={index}>
            <div className="o_lay"></div>
            <div className="swipeContent">
              <div className="wesCross"><div className="w">w</div><div className="mi"></div><div className="th"></div></div>
              <Link to={slide.hrefCrafter} className="link">
                <h2>{slide.headline}</h2>
                <p>{slide.paragraph}</p>
              </Link>
              <Link to={slide.hrefBuy} className="link cta t_b" target="_blank">
                {slide.ctaText}
              </Link>
            </div>
          </div>
        )
      });
    }
    return elements;
  }

  render() {

    const settings = {
      dots: true,
      infinite: true,
      centerMode: true,
      arrows: true,
      slidesToShow: 1,
      autoplay: false,
      autoplaySpeed: 4000,
      responsive: [
         {
           breakpoint: 768,
           settings: {
             arrows: false,
             slidesToShow: 1,
             centerPadding: '0',
             centerMode: true
           }
         },
         {
           breakpoint: 480,
           settings: {
             slidesToShow: 1,
             arrows: false,
             centerPadding: '0',
             centerMode: true
           }
         }
       ]
    };

    return (
      <div className="swipeSlideshowContainer">
        <Slider {...settings}>
          { this.renderSlides() }
        </Slider>
      </div>
    )
  }
}
