import React, { Component } from 'react';
import { Link } from 'react-router';

export default class SliderNav extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { headline, cattleImg, testImg } = this.props.componentContent;
    const cdnImageBase = this.props.cdnImageBase;
    return (
      <div className="nav" >
        <Link to="/" className="">
          <h2>Westward</h2>
        </Link>
        <Link to="/shop" className="">Shop</Link>
        <Link to="/about" className="">About</Link>
        <Link to="/events" className="">Events</Link>
      </div>
    );
  }
}
