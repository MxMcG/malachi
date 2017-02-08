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
            <a className="link" href="https://www.tourlookup.com" target="_blank">
              <h2 className="title">Tourlookup</h2>
            </a>
            <p>Location-based Progressive Web App built with Meteor.js, Google Maps API, Songkick API, additional third-party providers. Interactive user experience combined with practical useability. Provides an alternative platform to observe tour-path of traveling musicians.</p>
            <div className="links">
              <a href="https://www.tourlookup.com" className="link" target="_blank">
                <div className="socialCircle projectImg">
                  <i className="fa fa-share-alt icon" aria-hidden="true"></i>
                </div>
              </a>
              <a href="https://github.com/MxMcG/soundtrails" className="link" target="_blank">
                <div className="socialCircle">
                  <i className="fa fa-github icon" aria-hidden="true"></i>
                </div>
              </a>
            </div>
          </div>
          <div className="project">
            <a className="link" href="#" target="_blank">
              <h2 className="title">WestWard</h2>
            </a>
            <p>Ecommerce Progressive Web Application built with custom full-stack JS platform (malachi). Custom integration of Shopify Buy Button API, MongoLabs, Custom CMS. Native-App UX and Design.</p>
            <div className="links">
              <a href="#" className="link" target="_blank">
                <div className="socialCircle projectImg">
                  <i className="fa fa-share-alt icon" aria-hidden="true"></i>
                </div>
              </a>
              <a href="https://github.com/MxMcG/malachi/tree/master/projects/wwf" className="link" target="_blank">
                <div className="socialCircle">
                  <i className="fa fa-github icon" aria-hidden="true"></i>
                </div>
              </a>
            </div>
          </div>
          <div className="project">
            <a className="link" href="https://github.com/MxMcG/malachi" target="_blank">
              <h2 className="title">Malachi</h2>
            </a>
            <p>Front-end focused platform for accelerated development of progressive web applications. Integrates MongoDB, Amazon Cloudfront. Architected utilizing latest full-stack JS technologies. Including: React.js, Redux, Webpack, Server-Side Rendering</p>
            <div className="links">
              <a href="https://github.com/MxMcG/malachi" className="link" target="_blank">
                <div className="socialCircle">
                  <i className="fa fa-github icon" aria-hidden="true"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
