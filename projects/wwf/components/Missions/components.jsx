import React, { Component } from 'react';
import Helmet from 'react-helmet';

import MultTextImgHoverContainer from '../../common/containers/MultTextImgHoverContainer.js';

export default class Missions extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="missions" >
        <Helmet
          title="Missions | WestWard Loves Christian Partner Organizations"
          meta={[
            {
              property: 'og:title',
              content: 'As a maker of craft goods, WestWard foundation supports organizations including Christian Surfers, Youth with a Mission (YWAM), and Outside the Bowl'
            }
          ]}
        />
        <MultTextImgHoverContainer />
      </div>

    );
  }
}
