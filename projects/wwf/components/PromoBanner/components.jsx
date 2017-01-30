import React, { Component } from 'react';

export default class PromoBanner extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { headline } = this.props.componentContent;
    return (
      <div className="promoBanner" >
        <h1>{headline}</h1>
      </div>
    );
  }
}
