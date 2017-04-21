import React, { Component } from 'react';

class FeaturedImagesTile extends Component {

  constructor(props) {
    super(props);
  }

  renderImages() {
    const images = this.props.componentContent.images;
    const cdnImageBase = this.props.cdnImageBase;
    const imageElements = [];
    images.forEach((image, index) => {      
      imageElements.push(<img className="image" src={cdnImageBase + image.src}
        alt={image.alt} key={index}></img>
      );
    });
    return imageElements;
  }

  render() {
    const { headline, images } = this.props.componentContent;
    const cdnImageBase = this.props.cdnImageBase;
    return (
      <div className="featuredImagesTile">
        <h2>{headline}</h2>
        { this.renderImages() }
      </div>
    );
  }
}

export default (FeaturedImagesTile)
