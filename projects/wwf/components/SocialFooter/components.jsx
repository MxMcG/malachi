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
          <a href={links[0].href} className="" target="_blank">{links[0].title}</a>
          <a href={links[1].href} className="" target="_blank">{links[1].title}</a>
          </div>
        </div>
    );
  }
}
