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
        <a href={cdnImageBase + 'MaxResume.pdf'}>
          <img className="image" src={cdnImageBase + 'MaxResume.jpg'}></img>
        </a>
      </div>
    );
  }
}
