import React, { Component } from 'react';
import { Link } from 'react-router';

export default class SliderNav extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const logoImage = this.props.componentContent.logoImage;
    const cdnImageBase = this.props.cdnImageBase;
    return (
      <div className="nav" >
        <Link to="/" className="">
          <img className="image" src={cdnImageBase + logoImage}></img>
        </Link>
        <Link to="/shop" className="">Shop</Link>
        <Link to="/about" className="">About</Link>
        <Link to="/events" className="">Events</Link>
      </div>
    );
  }
}
