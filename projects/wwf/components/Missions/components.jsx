import React, { Component } from 'react';

import MultTextImgHoverContainer from '../../common/containers/MultTextImgHoverContainer.js';

export default class Missions extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="missions" >
        <MultTextImgHoverContainer />
      </div>

    );
  }
}
