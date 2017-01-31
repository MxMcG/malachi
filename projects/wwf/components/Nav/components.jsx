import React, { Component } from 'react';
import SliderNavContainer from '../../common/containers/SliderNavContainer.js';
import PromoBannerContainer from '../../common/containers/PromoBannerContainer.js';
import { Link } from 'react-router';

export default class Nav extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.doIt();
  }

  doIt() {
    console.log("JJOOOOOOOOOOOOOO")
  }

  handleClick() {
    console.log("CLICKEDDD")
  }

  render() {
    console.log("KKKK", this.props.componentContent)
    const logo = this.props.componentContent.logo;
    const cdnImageBase = this.props.cdnImageBase;
    return (
      <div className="nav" >
        <Link to="/" className="">
          <img onClick={this.handleClick.bind(this)} src={cdnImageBase + logo} />
        </Link>
        <Link to="/shop" className="">Shop</Link>
        <Link to="/about" className="">About</Link>
        <Link to="/events" className="">Events</Link>
      </div>
    );
  }
}
