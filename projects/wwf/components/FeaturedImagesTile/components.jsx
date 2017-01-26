import React, { Component } from 'react';

class FeaturedImagesTile extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { headline, images } = this.props.componentContent;
    const cdnImageBase = this.props.cdnImageBase;
    return (
      <div className="featuredImagesTile">
        <h2>{headline}</h2>
        <img className="image" src={cdnImageBase + "cattle.jpg"}></img>
      </div>
    );
  }
}

export default (FeaturedImagesTile)
