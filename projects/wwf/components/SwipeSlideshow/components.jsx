import React, { Component } from 'react';

export default class SwipeSlideshow extends Component {

  constructor(props) {
    super(props);
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
