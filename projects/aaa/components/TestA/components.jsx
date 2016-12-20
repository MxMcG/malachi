import React from 'react';

export default class Todos extends React.Component {

  constructor() {
    super();
    this.state = {
      test: ''
    }
  }

  render() {
    const headline = this.props.config.content.components.TestA.headline
    return (
      <div>
        <h2>{headline}</h2>
        <img className="imageOne" src='http://localhost:8080/projects/aaa/images/testimg.jpg'></img>
      </div>
    );
  }
}
