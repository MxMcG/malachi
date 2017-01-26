import React, { Component } from 'react';

export default class DynamicImage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const image = this.props.componentContent;
    const cdnImageBase = this.props.cdnImageBase;
    return (
      <div className="dynamicImage" >
        <img className="image" src={cdnImageBase + "cattle.jpg"}></img>
      </div>
    );
  }
}
