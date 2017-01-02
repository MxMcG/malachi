import React, { Component } from 'react';

export default class Footer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      test: ''
    }
  }

  render() {
    // const headline = this.props.config.content.project.components.TestA.headline
    // const cdnBase = this.props.config.cdnUrl;
    return (
      <div className="footer" >
        <h1>FOOTER Y</h1>
      </div>
    );
  }
}
