import React, { Component } from 'react';
import GSAP from 'react-gsap-enhancer';


class DynamicSlider extends Component {

  constructor(props) {
    super(props);
  }

  handleClick() {
    const controller = this.addAnimation(this.animationSource);
  }

  animationSource(utils) {
    return TweenMax.to(utils.target, 1, {x: '+=123'})
  }

  render() {
    const headline = this.props.componentContent.headline;
    return (
      <div className="dynamicSliderContainer" >
        <h1 onClick={this.handleClick.bind(this)}>{headline}</h1>
      </div>
    );
  }
}

export default GSAP()(DynamicSlider)
