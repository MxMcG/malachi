import React, { Component } from 'react';

import HoverImageTileContainer from '../../common/containers/HoverImageTileContainer.js';

export default class Events extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log("Component Content", this.props.componentContent)
    return (
      <div className="events" >
        <HoverImageTileContainer />
      </div>
    );
  }
}
