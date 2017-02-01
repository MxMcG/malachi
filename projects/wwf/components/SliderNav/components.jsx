import React, { Component } from 'react';
import { Link } from 'react-router';

export default class SliderNav extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const logo = this.props.componentContent.logoImage;
    const cdnImageBase = this.props.cdnImageBase;
    return (
      <div className="nav" >
        <Link to="/" className="">
          <img src={cdnImageBase + logo} />
        </Link>
        <Link to="/shop" className="">Shop</Link>
        <Link to="/about" className="">About</Link>
        <Link to="/events" className="">Events</Link>
      </div>
    );
  }
}
