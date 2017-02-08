import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Resume extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const cdnImageBase = this.props.cdnImageBase;
    return (
      <div className="resume" >
        <a href={cdnImageBase + 'mxmcgResume2.pdf'}>
          <img className="image" src={cdnImageBase + 'mxmcgResume.png'}></img>
        </a>
      </div>
    );
  }
}