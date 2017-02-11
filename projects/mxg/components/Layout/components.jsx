import React, { Component } from 'react';

import FooterContainer from '../../common/containers/FooterContainer';
import NavContainer from '../../common/containers/NavContainer';

export default class Layout extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div >
        <NavContainer />
        { this.props.children }
        <FooterContainer />
      </div>
    );
  }
}
