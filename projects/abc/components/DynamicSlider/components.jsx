import React, { Component } from 'react';
import './styles/test.scss';

export default class DynamicSliderContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      test: ''
    }
  }

  render() {
    const headline = this.props.componentContent.headline;
    return (
      <div className="dynamicSliderContainer" >
        <h1>{headline}</h1>
      </div>
    );
  }
}
