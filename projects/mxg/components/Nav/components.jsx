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

        <div className="navTop">
          <Link to="/" className="link">
            <h2 className="title">
              <span className="blue">M</span>
              <span className="green">x</span>
              <span className="orange">M</span>
              <span className="green">c</span>
              <span className="pink">G</span>
            </h2>
          </Link>
          <div className="socialLinks">
            <a href="https://www.linkedin.com/in/mxmcg" className="link" target="_blank">
              <div className="socialCircle linkedIn">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </div>
            </a>
            <a href="https://github.com/MxMcG" className="link" target="_blank">
              <div className="socialCircle github">
                <i className="fa fa-github" aria-hidden="true"></i>
              </div>
            </a>
          </div>
        </div>

        <div className="navLinks">
          <Link to="/portfolio" className="link">.portfolio</Link>
          <Link to="/resume" className="link">.resume</Link>
        </div>

      </div>
    );
  }
}
