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
        <ul>
          <li><Link to="/shop" className="" activeClassName="active">Shop</Link></li>
          <li><Link to="/about" className="" activeClassName="active">About</Link></li>
          <li><Link to="/events" className="" activeClassName="active">Events</Link></li>
        </ul>
        <div className="banner">25% goes to missionaries</div>
      </div>
    );
  }
}
