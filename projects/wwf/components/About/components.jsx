import React, { Component } from 'react';

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
        <HoverImageTileContainer />
        <ComplexFeatureTextContainer />
      </div>
    );
  }
}
