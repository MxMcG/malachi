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
        <a href={cdnImageBase + 'MaxResumeFeb2017.pdf'}>
          <img className="image" src={cdnImageBase + 'MaxResumeFeb2017.png'}></img>
        </a>
      </div>
    );
  }
}
