import React, { Component } from 'react';

import ComplexFeatureTextContainer from '../../common/containers/ComplexFeatureTextContainer.js';

export default class Missions extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="missions" >
        <ComplexFeatureTextContainer />
      </div>
    );
  }
}
