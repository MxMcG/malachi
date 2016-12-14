import React from 'react';

export default class Todos extends React.Component {

  constructor(props) {
    super(props);
    console.log('te');
    this.state = {
      test: ''
    }
  }

  render() {
    return (
      <div>
        <h2>Test B</h2>
      </div>
    );
  }
}
