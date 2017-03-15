import React, { Component } from 'react';

import SwipeSlideshowContainer from '../../common/containers/SwipeSlideshowContainer.js';
import FeaturedImagesTileContainer from '../../common/containers/FeaturedImagesTileContainer.js';
import FeaturedImageSlideshowContainer from '../../common/containers/FeaturedImageSlideshowContainer.js';
import DynamicImageContainer from '../../common/containers/DynamicImageContainer.js';

export default class Home extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home" >
        <SwipeSlideshowContainer / >
        <FeaturedImagesTileContainer />
        <div className="wr_o">
          <FeaturedImageSlideshowContainer />        
        </div>
      </div>
    );
  }
}
