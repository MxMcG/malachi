import React, { Component } from 'react';

export default class DynamicImage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log('THIS PROPS', this.props)
    const cdnImageBase = this.props.cdnImageBase;
    return (
      <div className="dynamicImage" >
        <h2>DynamicImage</h2>
      </div>
    );
  }
}
