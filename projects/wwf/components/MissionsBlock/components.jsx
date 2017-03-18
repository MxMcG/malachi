import React, { Component } from 'react';

export default class MissionsBlock extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const ausSrc = this.props.componentContent.aus;
    const chilSrc = this.props.componentContent.chil;
    const cdnImageBase = this.props.cdnImageBase;
    return (
      <div className="missionsBlock">
        <img src={ cdnImageBase + ausSrc }></img>
        <img src={ cdnImageBase + chilSrc }></img>
      </div>
    );
  }
}
