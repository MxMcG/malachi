import React, { Component } from 'react';

export default class RootContainer extends Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }

};
