import React, { Component } from 'react';

import ComplexFeatureTextContainer from '../../common/containers/SwipeSlideshowContainer.js';
import HoverImageTileContainer from '../../common/containers/FeaturedImagesTileContainer.js';
import CategorizedRowsContainer from '../../common/containers/FeaturedImageSlideshowContainer.js';

export default class About extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log("Component Content", this.props.componentContent)
    return (
      <div className="about" >
        <ComplexFeatureTextContainer />
        <HoverImageTileContainer />
        <CategorizedRowsContainer />
      </div>
    );
  }
}
