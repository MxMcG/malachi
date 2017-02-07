import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Portfolio extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const cdnImageBase = this.props.cdnImageBase;
    return (
      <div className="portfolio" >
        <div className="projects">
          <div className="project">
            <h2>Tourlookup</h2>
            <p>Location-based Progressive Web App built with Meteor.js, Google Maps API, Songkick API, additional third-party providers. Interactive user experience combined with practical useability. Provides an alternative platform to observe tour-path of traveling musicians.</p>
            <div className="links">
              <a href="https://github.com/MxMcG" className="link" target="_blank">
                <div className="socialCircle">
                  <i className="fa fa-github" aria-hidden="true"></i>
                </div>
              </a>
              <a href="https://github.com/MxMcG" className="link" target="_blank">
                <div className="socialCircle">
                  <i className="fa fa-github" aria-hidden="true"></i>
                </div>
              </a>
            </div>
          </div>
          <div className="project">
            <h2>WestWard</h2>
            <p>Ecommerce Progressive Web Application built with custom full-stack JS platform (malachi). Custom integration of Shopify Buy Button API, MongoLabs, Custom CMS. Native-App UX and Design.</p>
            <div className="links">
              <a href="https://github.com/MxMcG" className="link" target="_blank">
                <div className="socialCircle">
                  <i className="fa fa-github" aria-hidden="true"></i>
                </div>
              </a>
              <a href="https://github.com/MxMcG" className="link" target="_blank">
                <div className="socialCircle">
                  <i className="fa fa-github" aria-hidden="true"></i>
                </div>
              </a>
            </div>            
          </div>
          <div className="project">
            <h2>Malachi</h2>
            <p>Front-end focused platform for accelerated development of progressive web applications. Integrates MongoDB, Amazon Cloudfront. Architected utilizing latest full-stack JS technologies. Including: React.js, Redux, Webpack, Server-Side Rendering</p>
            <div className="links">
              <a href="https://github.com/MxMcG" className="link" target="_blank">
                <div className="socialCircle">
                  <i className="fa fa-github" aria-hidden="true"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
