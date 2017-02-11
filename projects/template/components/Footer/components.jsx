import React, { Component } from 'react';


export default class Footer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="footer" >
        <div className="">SOCIAL</div>
        <a href="">Facebook.</a><a href="">Instagram.</a>
      </div>
    );
  }
}
