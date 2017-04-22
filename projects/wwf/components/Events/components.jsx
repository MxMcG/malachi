import React, { Component } from 'react';

import EventsHoverImageTileContainer from '../../common/containers/EventsHoverImageTileContainer.js';

export default class Events extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="events" >
        <EventsHoverImageTileContainer />
      </div>
    );
  }
}
