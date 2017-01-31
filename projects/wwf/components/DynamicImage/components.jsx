import React, { Component } from 'react';

export default class DynamicImage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const image = this.props.componentContent.image;
    const cdnImageBase = this.props.cdnImageBase;
    return (
      <div className="dynamicImage" >
        <img className="image" src={cdnImageBase + image.src}></img>
      </div>
    );
  }
}
