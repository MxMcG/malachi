import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      test: ''
    }
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
