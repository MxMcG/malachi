import React, { Component } from 'react';

export default class App extends Component {

  constructor(props) {
    super(props);
    console.log(this.props)
    this.state = {
      test: ''
    }
  }

  render() {
    // const headline = this.props.config.content.project.components.TestA.headline
    // const cdnBase = this.props.config.cdnUrl;
    return (
      <div>
        <h2>HI</h2>
      </div>
    );
  }
}
