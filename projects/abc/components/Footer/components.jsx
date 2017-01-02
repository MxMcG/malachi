import React, { Component } from 'react';

export default class Footer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      test: ''
    }
  }

  render() {
    const headline = this.props.componentContent.headline;
    return (
      <div className="footer" >
        <h1>{headline}</h1>
      </div>
    );
  }
}
