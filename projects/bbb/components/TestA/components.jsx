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
        <h2>Test A</h2>
        <img className="imageOne" src='http://localhost:8080/projects/aaa/components/TestA/images/testimg.jpg'></img>
      </div>
    );
  }
}
