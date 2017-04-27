import React, { Component } from 'react';
import Helmet from 'react-helmet';

import EventsHoverImageTileContainer from '../../common/containers/EventsHoverImageTileContainer.js';

export default class Events extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="events" >
        <Helmet
          title="Events | Invite the WestWard Table to an event"
          meta={[
            {
              property: 'og:title',
              content: 'The WestWard Table serves local cold brew coffee at Christian charity events around San Diego. Buy quality gifts made of craft wood and leather'
            }
          ]}
        />
        <EventsHoverImageTileContainer />
      </div>
    );
  }
}
