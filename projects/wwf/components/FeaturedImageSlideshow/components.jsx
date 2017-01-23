import React, { Component } from 'react';

export default class FeaturedImageSlideshow extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log('THIS PROPS', this.props)
    const cdnImageBase = this.props.cdnImageBase;
    return (
      <div className="featuredImageSlideshow" >
        <h2>FeaturedImageSlideshow</h2>
      </div>
    );
  }
}
