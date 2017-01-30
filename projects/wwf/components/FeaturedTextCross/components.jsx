import React, { Component } from 'react';

export default class FeaturedTextCross extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { headline, description } = this.props.componentContent;
    return (
      <div className="featuredTextCross" >
        <h1>{headline}</h1>
        <hr></hr>
        <p>{description}</p>
      </div>
    );
  }
}
