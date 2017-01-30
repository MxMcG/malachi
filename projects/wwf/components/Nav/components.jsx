import React, { Component } from 'react';
import SliderNavContainer from '../../common/containers/SliderNavContainer.js';
import PromoBannerContainer from '../../common/containers/PromoBannerContainer.js';
import { Link } from 'react-router';

export default class Nav extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="nav">
        <SliderNavContainer />
        <PromoBannerContainer />
      </div>
    );
  }
}
