import React, { Component } from 'react';
import Helmet from 'react-helmet';

import ComplexFeatureTextContainer from '../../common/containers/ComplexFeatureTextContainer.js';
import HoverImageTileContainer from '../../common/containers/HoverImageTileContainer.js';
import CategorizedRowsContainer from '../../common/containers/CategorizedRowsContainer.js';

export default class About extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="about" >
        <Helmet
          title="About | San Diego-based Wood and Leather Craft Goods"
          meta={[
            {
              property: 'og:title',
              content: 'WestWard Foundation is a Christian small business out of San Diego, California. Specialized in wood & leather craft goods, adventure apparel, and coffee.'
            }
          ]}
        />
        <HoverImageTileContainer componentContent={this.props.hoverImageTileContainerA} />
        <ComplexFeatureTextContainer componentContent={this.props.complexFeatureTextContainerA} />
        <HoverImageTileContainer componentContent={this.props.hoverImageTileContainerB}/>
        <ComplexFeatureTextContainer componentContent={this.props.complexFeatureTextContainerB} />

      </div>
    );
  }
}
