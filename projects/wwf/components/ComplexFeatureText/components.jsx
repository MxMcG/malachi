import React, { Component } from 'react';

export default class ComplexFeatureText extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { headline, subheadline, description } = this.props.componentContent;
    return (
      <div className="complexFeatureText" >
        <h2>{headline}</h2>
        <h4>{subheadline}</h4>
        <p>{description}</p>
      </div>
    );
  }
}
