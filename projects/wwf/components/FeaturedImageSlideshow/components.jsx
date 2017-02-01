import React, { Component } from 'react';
import Slider from 'react-slick';

export default class FeaturedImageSlideshow extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const style = {
      background: 'purple',
      textAlign: 'center'

    }
    const { headline, subheadline, ctaText, images } = this.props.componentContent;
    console.log('CRAY', images)
    const cdnImageBase = this.props.cdnImageBase;
    const settings = {
      dots: true,
      infinite: true,
      centerMode: true,
      slidesToShow: 1,
      responsive: [
         {
           breakpoint: 768,
           settings: {
             arrows: false,
             centerMode: true
           }
         },
         {
           breakpoint: 480,
           settings: {
             arrows: false,
             centerMode: true
           }
         }
       ]
    };
 
    return (
      <div className="featuredImageSlideshow" >
        <Slider {...settings}>
          <div style={style}><h3>1</h3></div>
          <div style={style}><h3>1</h3></div>
          <div style={style}><h3>1</h3></div>
          <div style={style}><h3>1</h3></div>
          <div style={style}><h3>1</h3></div>
          <div style={style}><h3>1</h3></div>
          <div style={style}><h3>1</h3></div>
        </Slider>
      </div>
    );
  }
}

/*<h2>{headline}</h2>
        <h4>{subheadline}</h4>
        <img className="image" src={cdnImageBase + images[0].src}></img>
        <button>{ctaText}</button>*/