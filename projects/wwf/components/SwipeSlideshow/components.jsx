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
    const slideData = this.props.sanityData;
    const loadedSlides = this.props.sanityData || this.props.slides;
    const sanityUrlFor = this.props.sanityUrlFor;
    const elements = [];
    loadedSlides.forEach((slide, index) => {
      elements.push(
        <div className="swipeSlideshow" style={{backgroundImage: 'url(' + sanityUrlFor(slide.image).url() + ')'}} key={index}>
          <Link to={`/crafters/${slide.collectionId}`} className="link">
            <div className="o_lay"></div>
          </Link>
          <div className="swipeContent">
            <div className="wesCross"><div className="w tx_s">w</div><div className="mi bx_s"></div><div className="th bx_s"></div></div>
              <h2 className="tx_s">{slide.headline}</h2>
              <p className="tx_s">{slide.subheadline}</p>
            <Link to={`/products/${slide.productId}`} className="link cta t_b bx_s">
              BUY NOW
            </Link>
          </div>
        </div>
      )
    });
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
