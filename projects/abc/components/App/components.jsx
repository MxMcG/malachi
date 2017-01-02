import React, { Component } from 'react';
import NavContainer from '../../common/containers/NavContainer';
import DynamicSliderContainer from '../../common/containers/DynamicSliderContainer';
import FooterContainer from '../../common/containers/FooterContainer';

export default class App extends Component {

  constructor(props) {
    super(props);
    console.log('PROPS in COMPONENT', this.props)
    this.state = {
      test: ''
    }
  }

  render() {
    // const headline = this.props.config.content.project.components.TestA.headline
    // const cdnBase = this.props.config.cdnUrl;
    return (
      <div className="app" >
        <NavContainer />
        <DynamicSliderContainer />
        <FooterContainer />
      </div>
    );
  }
}
