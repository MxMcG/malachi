import React, { Component } from 'react';

export default class SwipeSlideshow extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log('THIS PROPS', this.props)
    const cdnImageBase = this.props.cdnImageBase;
    return (
      <div className="swipeSlideshow" >
        <h2>SwipeSlideshow</h2>
      </div>
    );
  }
}
