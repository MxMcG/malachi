import React, { Component } from 'react';
import SliderNavContainer from '../../common/containers/SliderNavContainer.js';
import PromoBannerContainer from '../../common/containers/PromoBannerContainer.js';
import { Link } from 'react-router';
import CartContainer from '../../common/containers/CartContainer.js';
import jquery from 'jquery';
import $ from 'jquery';


export default class Nav extends Component {


  constructor(props) {
    super(props);
    this.shrinkScroll = this.shrinkScroll.bind(this);

  }

  componentDidMount() {
    window.addEventListener("scroll", this.shrinkScroll);
  }

  scrollRight(e) {
    const leftPos = $(".scroller").scrollLeft();
    $('.scroller').animate({scrollLeft : leftPos + 56}, 300);
  }

  scrollLeft(e) {
    const leftPos = $(".scroller").scrollLeft();
    $('.scroller').animate({scrollLeft : leftPos - 56}, 300);
  }


  shrinkScroll(e) {
    const scrollTop = e.srcElement.body.scrollTop;
    const nav = document.getElementsByClassName("nav")[0];
    nav.classList.toggle("sh", scrollTop > 0);
  }

  render() {
    const logo = this.props.componentContent.logo;
    const cdnImageBase = this.props.cdnImageBase;
    return (
      <div className="nav t_b">
        <Link to="/">
          <img src={cdnImageBase + logo} className="t_b"/>
        </Link>
        <ul className="scroller">
          <li className="t_b sr" onClick={this.scrollLeft.bind(this)}><Link to="/shop" className="n_l t_b" activeClassName="act">Shop</Link></li>
          <li className="t_b sr" onClick={this.scrollLeft.bind(this)}><Link to="/about" className="n_l t_b" activeClassName="act">About</Link></li>
          <li className="t_b sr" onClick={this.scrollRight.bind(this)}><Link to="/charities" className="n_l t_b" activeClassName="act">Charities</Link></li>
        </ul>
        <CartContainer {...this.props} />
        <div className="banner">Goods for the Good - Free Shipping On Us <span className="hideMobile"></span></div>
      </div>
    );
  }
}
