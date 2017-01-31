import React, { Component } from 'react';

import NavContainer from '../../common/containers/NavContainer';
import HomeContainer from '../../common/containers/HomeContainer';
import ShopContainer from '../../common/containers/ShopContainer';
import AboutContainer from '../../common/containers/AboutContainer';
import EventsContainer from '../../common/containers/EventsContainer';
import SocialFooterContainer from '../../common/containers/SocialFooterContainer';
import DynamicImageContainer from '../../common/containers/DynamicImageContainer';
import CartContainer from '../../common/containers/CartContainer';

export default class Layout extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div >
        <NavContainer />
        <CartContainer />
        { this.props.children }
        <DynamicImageContainer />
        <SocialFooterContainer />
      </div>
    );
  }
}
