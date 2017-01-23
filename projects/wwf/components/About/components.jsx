import React, { Component } from 'react';

export default class About extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log("Component Content", this.props.componentContent)
    return (
      <div className="about" >
        <h1>about</h1>
      </div>
    );
  }
}
