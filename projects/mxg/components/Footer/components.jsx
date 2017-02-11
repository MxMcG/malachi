import React, { Component } from 'react';


export default class Footer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="footer">
        <div className="socialLinks">
          <a href="https://www.linkedin.com/in/mxmcg" className="link" target="_blank">
            <div className="socialCircle linkedIn">
              <i className="fa fa-linkedin icon" aria-hidden="true"></i>
            </div>
          </a>
          <a href="https://github.com/MxMcG" className="link" target="_blank">
            <div className="socialCircle github">
              <i className="fa fa-github icon" aria-hidden="true"></i>
            </div>
          </a>
        </div>
      </div>
    );
  }
}
