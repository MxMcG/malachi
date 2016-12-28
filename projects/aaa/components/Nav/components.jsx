import React, { Component } from 'react';

export default class Nav extends Component {

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
      <div className="nav" >
        <h1>NAV</h1>
      </div>
    );
  }
}
