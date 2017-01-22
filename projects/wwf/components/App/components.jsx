import React, { Component } from 'react';

import NavContainer from '../../common/containers/NavContainer';
import HomeContainer from '../../common/containers/HomeContainer';
import ShopContainer from '../../common/containers/ShopContainer';
import AboutContainer from '../../common/containers/AboutContainer';
import EventsContainer from '../../common/containers/EventsContainer';
import FooterContainer from '../../common/containers/FooterContainer';

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  renderContent() {
    const { path } = this.props;
    switch ('shop') {
      case 'home':
        return <HomeContainer />;
      case 'shop':
        return <ShopContainer />;
      case 'about':
        return <AboutContainer />;
      case 'events':
        return <EventsContainer />;
      default:
      return null;
    }
  }

  render() {
    return (
      <div >
        <NavContainer />
        { this.renderContent() }
        <FooterContainer />
      </div>
    );
  }
}
