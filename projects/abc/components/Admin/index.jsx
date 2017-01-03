import React, { Component } from 'react';

export default class Admin extends Component {

  constructor(props) {
    super(props);
    console.log(this.props)
    this.state = {
      test: ''
    }
  }

  render() {
    return (
      <div className="admin" >
        <h1>ADMIN</h1>
      </div>
    );
  }
}
