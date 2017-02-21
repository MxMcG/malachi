import React, { Component } from 'react';
import { Link } from 'react-router';

export default class SocialFooter extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { title, links} = this.props.componentContent;
    return (
      <div className="socialFooter" >
        <h2>{title}</h2>
          <div>
          <Link to={links[0].href} className="">{links[0].title}</Link>
          <Link to={links[1].href} className="">{links[1].title}</Link>
          </div>      
        </div>
    );
  }
}
