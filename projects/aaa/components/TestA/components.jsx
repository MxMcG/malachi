import React from 'react';

export default class Todos extends React.Component {

  constructor() {
    super();
    this.state = {
      test: ''
    }
  }

  render() {
    const headline = this.props.config.content.project.components.TestA.headline
    const cdnBase = this.props.config.cdnUrl;
    return (
      <div>
        <h2>{headline}</h2>
        <img className="imageOne" src={cdnBase + 'projects/aaa/images/testimg2.jpg'}></img>
      </div>
    );
  }
}
