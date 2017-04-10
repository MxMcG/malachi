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
            <p>The concept for Tourlookup began during my time at Dev Bootcamp in SF. This location-based Progressive Web App is built with Meteor.js, Google Maps API,
              Songkick API, additional third-party providers such as TicketFly. This app allows users to search an animated map interface that draws a line of tour dates
              for any band or artist traveling the world. Users can then select tour dates of interest and buy tickets on third-party sites.</p>
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
            <div className="screenshots">
              <img src={`${cdnImageBase}tour1.png`} className="tl1" ></img>
              <img src={`${cdnImageBase}tour2.png`} className="tl2"></img>
              <img src={`${cdnImageBase}tour3.png`} className="tl3"></img>
            </div>
          </div>

          <div className="project">
            <a className="link" href="https://nationsmagazine.com" target="_blank">
              <h2 className="title">Nations Foundation</h2>
            </a>
            <p>
              Nations Magazine is the first major wordpress project that I have worked on. This project has given me a newfound appreciation for the various plugins and features of Wordpress.
              I am honored to work on this project, because it is centered around an effort that I am passionate about. I was able to revisit some of the newsroom concepts I learned while writing
              for the Daily Bruin at UCLA and drew template inspiration from The Wall Street Journal, The LA Times, and The New York Times websites. I plan on continuing to optimize and build out
              new featured into this site in the months to come.
            </p>
            <div className="links">
              <a href="https://nationsmagazine.com" className="link" target="_blank">
                <div className="socialCircle projectImg">
                  <i className="fa fa-share-alt icon" aria-hidden="true"></i>
                </div>
              </a>
            </div>
            <div className="screenshots">
              <img src={`${cdnImageBase}nf1.png`} className="nf1" ></img>
              <img src={`${cdnImageBase}nf2.png`} className="nf2"></img>
            </div>
          </div>

          <div className="project">
            <a className="link" href="https://www.staging.westwardfoundation.com/" target="_blank">
              <h2 className="title">WestWard Foundation</h2>
            </a>
            <p>In early 2017, the WestWard Foundation web app is the first project that I built using my own front-end platform.
              This project features a custom integration of Shopify Buy Button SDK, and native-app UI. Our goal with this app is to
              create a native-app experience on the web. Our client is able to switch out content in the Shopify dashboard and immediately
              see the changes within the app. The app utilizes Redux, React-Router, Webpack, and Mongoose.</p>
            <div className="links">
              <a href="https://www.staging.westwardfoundation.com/" className="link" target="_blank">
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
            <div className="screenshots">
              <img src={`${cdnImageBase}wwf1.png`} className="wwf1" ></img>
              <img src={`${cdnImageBase}ww2.png`} className="wwf2"></img>              
            </div>
          </div>

          <div className="project">
            <a className="link" href="https://github.com/MxMcG/malachi" target="_blank">
              <h2 className="title">Malachi</h2>
            </a>
            <p>
              At the outset of 2017, I decided to learn various modern web technologies through my own exploratory project called Malachi.
              I built a front-end focused platform for accelerated development of progressive web applications. This project integrates MongoDB,
              AWS Cloudfront with latest full-stack JS technologies including: React.js, Redux, Webpack, Gulp, SASS. With this platform, I am able
              to quickly onboard new projects through simple Gulp tasks and deploy web apps to Ubuntu Server instances. Currently, I use NGINX on
              Digital Ocean Droplets and mlab to manage my database.
            </p>
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
