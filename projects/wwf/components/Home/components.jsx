import React, { Component } from 'react';

export default class Home extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log("Component Content", this.props.componentContent)
    return (
      <div className="footer" >
        <h1>Hello World</h1>
      </div>
    );
  }
}
