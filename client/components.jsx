import { Component } from 'react';

export default class Todos extends Component {

  constructor(props) {
    super(props);
    this.state = {
      test: 'HIII'
    }
  }

  render() {
    return (
      <ul>
        <li>{this.state.test}</li>
        <li>hello 2</li>
        <li>hello 44</li>
      </ul>
    );
  }
}
