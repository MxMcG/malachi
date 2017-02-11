import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Nav extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const cdnImageBase = this.props.cdnImageBase;
    return (
      <div className="nav" >
        <div className="navBar">
          <h1 className="headline">DAILY MESSIAH</h1>
        </div>
      </div>
    );
  }
}
