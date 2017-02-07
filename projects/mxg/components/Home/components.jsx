import React, { Component } from 'react';

export default class Home extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {

  }

  render() {
    return (
      <div className="home" >

        <div className="aboutSect">
          <p>@MxMcG has experience working on SaaS products and a variety of web applications. Full-stack JavaScript developer. Gradaute of UCLA and DevBootcamp S.F. Enjoys process of collaboration with developers and translation with non-technical specialists. Works out of San Diego, CA.</p>
        </div>

        <div className="image">
          <img src={this.props.cdnImageBase + 'maxZeetoPortrait.jpg'}></img>
        </div>

        <div className="skillSect">
          <h3>Skillset</h3>
          <ul>
            <li><span>React.js</span></li>
            <li><span>Express.js</span></li>
            <li><span>MongoDB</span></li>
            <li><span>Redux</span></li>
            <li><span>Webpack</span></li>
            <li><span>Gulp | PM2</span></li>
            <li><span>Sass | CSS</span></li>
            <li><span>AWS | DO</span></li>
            <li><span>Git | Linux</span></li>
            <li><span>Meteor.js</span></li>
            <li><span>Mongoose</span></li>
            <li><span>GA | GTM</span></li>
            <li><span>A/B Testing</span></li>
            <li><span>ES6</span></li>
          </ul>
        </div>

      </div>
    );
  }
}


// <h4>Skillset</h4>
// <ul>
//   <li><span>React.js</span></li>
//   <li><span>Express.js</span></li>
//   <li><span>MongoDB</span></li>
//   <li><span>Redux</span></li>
//   <li><span>Webpack</span></li>
//   <li><span>Gulp | PM2</span></li>
//   <li><span>Sass | CSS</span></li>
//   <li><span>AWS | DO</span></li>
//   <li><span>Git | Linux</span></li>
//   <li><span>Meteor.js</span></li>
//   <li><span>Mongoose</span></li>
//   <li><span>GA | GTM</span></li>
//   <li><span>Split Tests</span></li>
//   <li><span>ES6</span></li>
// </ul>
// https://coolors.co/f7b267-ef798a-ffe8d1-42cafd-00a676
