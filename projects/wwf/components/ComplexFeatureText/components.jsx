import React, { Component } from 'react';

export default class ComplexFeatureText extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { headline, subheadline, description, header1, header2, description1, description2 } = this.props.componentContent;
    if (this.props.componentContent.style === "1") {
      return (
        <div className="complexFeatureText" >
          <h2>{headline}</h2>
          <h6>{subheadline}</h6>
          <h3>{header1}</h3>
          <p>{description1}</p>
          <h3>{header2}</h3>
          <p>{description2}</p>
        </div>
      );
    }
    return (
      <div className="complexFeatureText" >
        <h2 className="paddingTop">{headline}</h2>
        <h6>{subheadline}</h6>
        <p>{description}</p>        
      </div>
    );
  }
}
