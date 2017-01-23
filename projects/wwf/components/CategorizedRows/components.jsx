import React, { Component } from 'react';

export default class CategorizedRows extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log("Component Content", this.props.componentContent)
    return (
      <div className="CategorizedRows" >
        <h1>categorizedrows</h1>
      </div>
    );
  }
}
