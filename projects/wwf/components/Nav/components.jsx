import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      test: ''
    }
  }

  render() {
    const { headline, cattleImg, testImg } = this.props.componentContent;
    const cdnImageBase = this.props.cdnImageBase;
    return (
      <div className="nav" >
        <Link to="/home" className="">
          <h2>Westward</h2>
        </Link>
        <Link to="/shop" className="">Shop</Link>
        <Link to="/about" className="">About</Link>
        <Link to="/events" className="">Events</Link>
      </div>
    );
  }
}
