import React, { Component } from 'react';

export default class ComplexFeatureText extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log("Component Content", this.props.componentContent)
    return (
      <div className="complexFeatureText" >
        <h1>ComplexFeatureText</h1>
      </div>
    );
  }
}
