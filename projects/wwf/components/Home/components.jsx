import React, { Component } from 'react';
import Helmet from 'react-helmet';

import SwipeSlideshowContainer from '../../common/containers/SwipeSlideshowContainer.js';
import FeaturedImagesTileContainer from '../../common/containers/FeaturedImagesTileContainer.js';
import FeaturedImageSlideshowContainer from '../../common/containers/FeaturedImageSlideshowContainer.js';
import DynamicImageContainer from '../../common/containers/DynamicImageContainer.js';
import MissionsBlockContainer from '../../common/containers/MissionsBlockContainer.js';

export default class Home extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home" >
        <Helmet
          title="Westward Makers | Hand-crafted wood and leather goods"
          meta={[
            {
              property: 'og:title',
              content: 'Support missions and local crafters. Our hand-crafted leather and wood goods are created in San Diego, CA. WestWard donates 25% of proceeds missions partners'
            }
          ]}
        />
        <SwipeSlideshowContainer />
        <FeaturedImagesTileContainer />
        <MissionsBlockContainer />
        <div className="wr_o">
          <FeaturedImageSlideshowContainer />
        </div>
      </div>
    );
  }
}
