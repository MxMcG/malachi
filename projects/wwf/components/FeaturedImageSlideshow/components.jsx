import React, { Component } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router';

export default class FeaturedImageSlideshow extends Component {

  constructor(props) {
    super(props);

  }

  renderImages() {
    const loadedImages = this.props.sanityData.images || this.props.componentContent.images;
    const sanityUrlFor = this.props.sanityUrlFor;
    const imageElements = [];
    loadedImages.forEach((object, index) => {
      imageElements.push(
        <div className="featuredImageSlide" style={{ backgroundImage: 'url(' + sanityUrlFor(object.image).url() + ')' }} key={index} />
      )
    });
    return imageElements;
  }


  render() {
    const settings = {
      dots: false,
      infinite: true,
      centerMode: true,
      slidesToShow: 1,
      arrows: true,

      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            slidesToShow: 1,
            centerMode: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: true,
            slidesToShow: 1,
            centerMode: true
          }
        },
      ],
    };

    return (
      <div className="featuredImageSlideshow">
      <div className="feat_con">
        <h2>{ this.props.sanityData.headline }</h2>
        <h6></h6>
      </div>
        <Slider {...settings}>
          { this.renderImages() }
        </Slider>

      </div>
    );
  }
}

// <Link to="/events" className="t_b button black solid">Learn More</Link>
