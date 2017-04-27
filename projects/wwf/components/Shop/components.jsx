import React, { Component } from 'react';
import Helmet from 'react-helmet';

import CategorizedTilesContainer from '../../common/containers/CategorizedTilesContainer.js';

export default class Shop extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="categorizedTiles" >
        <Helmet
          title="Shop | WestWard - Hand-crafted Wood and Leather goods"
          meta={[
            {
              property: 'og:title',
              content: 'San Diego based small business offering craft leather & wooden goods. Shop online today and support global missions partners. Book our mobile coffee cart!'
            }
          ]}
        />
        <CategorizedTilesContainer />
      </div>
    );
  }
}
