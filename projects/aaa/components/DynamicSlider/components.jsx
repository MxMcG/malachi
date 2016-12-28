import React, { Component } from 'react';
// import subcomponents here

export default class DynamicSliderContainer extends Component {

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
      <div className="dynamicSliderContainer" >
        <h1>SLIDER</h1>
      </div>
    );
  }
}
