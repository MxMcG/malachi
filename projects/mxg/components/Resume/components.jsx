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
        <h2>Resume</h2>
      </div>
    );
  }
}
