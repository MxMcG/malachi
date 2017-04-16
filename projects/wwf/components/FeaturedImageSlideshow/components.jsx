import React, { Component } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router';

export default class FeaturedImageSlideshow extends Component {

  constructor(props) {
    super(props);

  }

  renderImages() {
    const loadedImages = this.props.componentContent.images;
    const cdnImageBase = this.props.cdnImageBase;
    const Imageelements = [];
    if (!loadedImages[0]) {
      return (
        <div className="wr_o">
          <div className="featuredImageSlide" >
              <img className="image" src={cdnImageBase + loadedImages[0].src}></img>
          </div>
        </div>
      );
    } else {
      loadedImages.forEach((images, index) => {
        Imageelements.push( 
          <div className="featuredImageSlide" style={{backgroundImage: 'url(' + cdnImageBase + images.src + ')'}} key={index}>
          </div>  
        )
      }); 
    }
    return Imageelements;
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
         }
       ]
    };

    return (
      <div className="featuredImageSlideshow">
      <div className="feat_con">
        <h2>Events</h2>
        <h6>Want Westward Cold Brew?</h6>
      </div>
        <a href="" className="t_b button black solid">Learn More</a>
        <Slider {...settings}>
            { this.renderImages() }  
        </Slider>

      </div>
    );
  }
}
