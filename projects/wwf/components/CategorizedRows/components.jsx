import React, { Component } from 'react';

export default class CategorizedRows extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { ctaText } = this.props.componentContent;
    return (
      <div className="categorizedRows" >
        <h1>{ctaText}</h1>
      </div>
    );
  }
}
