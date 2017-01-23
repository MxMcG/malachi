import React, { Component } from 'react';

export default class Events extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log("Component Content", this.props.componentContent)
    return (
      <div className="events" >
        <h1>Events</h1>
      </div>
    );
  }
}
