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
          <p>My name is Max McGee and I am a software developer living in Carlsbad, CA. I first took an interest in software development at the University of California, Los Angeles where I studied Political Science and wrote for Arts & Entertainment stories with the Daily Bruin Newspaper. In 2014, two friends and I saw an opportunity to start a peer-to-peer ticket exchange website. We were frustrated with high-fees and lack of quality in secondary ticket marketplace and went all-in to develop a solution. At the time, I had no development experience, so we took on interns to build the site. It was through this process I realized my desire to learn how to build applications. I began taking online courses between classes in the UCLA library and gleaned coding knowledge from our interns.</p>
          <br></br>
            <div className="imageWrap">
              <img className="imageFirst" src={this.props.cdnImageBase + 'maxZeetoPortrait.jpg'}></img>
            </div>
          <br></br>
          <p>In 2015, decided to graduate a year early from UCLA, moving north to San Francisco in pursuit of a software education at Dev Bootcamp. During my rigorous 4 months at Dev Bootcamp, I tool the train into town every morning, soaking in an abundance of knowledge and experience the bootcamp community had to offer. We learned core C.S. concepts, algorithms, object-oriented Ruby and JavaScript, database relationships, design, and most importantly - how to work with other developers on projects. I learned to appreciate collaboration with other developers, struggling through quite a few ugly git merge conflicts along the way.</p>
          <br></br>
          <p>Upon graduation from Dev Bootcamp, I journeyed south to San Diego and set out to land my first software job. In early 2016, I was hired by Zeeto Media in downtown San Diego as a front end developer. Zeeto offers a SAAS product enabling high-volume websites to monetize traffic through propriety algorithms. I worked on the Optimization Team, which worked on an in-house A/B testing platform built with React, Browserify, and Node.js. I quickly learned the React library and took on challenging server-side tickets in order to learn more about Node middleware. At Zeeto, I was surrounded by some of the top engineers in the city and was truly challenged to build out complex features required by our clients. </p>
          <br></br>
          <div className="imageWrap imageWrapSecond">
            <img className="imageSecond" src={this.props.cdnImageBase + 'maxBeachJoel.jpg'}></img>
          </div>
          <br></br>
          <p>After more than a year at Zeeto, I decided to leave and take on several side projects that had come my way. Throughout 2017, I have been working independently on several web applications and projects with non-profits such as Nations Foundation and WestWard Foundation. At Zeeto, I was more on the front end side of things. In the early part of 2017, I built a platform for building Progressive Web Apps, called Malachi. I dove deep into Webpack, Gulp, MongoDb, React, Redux, and Dev Ops topics. In recent months I have also done work with Wordpress and Shopify. I love working with third party API’s, writing server-side logic, and architecting front end user interfaces.</p>
          <br></br>
          <p>In the time to come, I plan on continuing to learn new areas of software development and polish my skills through a variety of projects and work.</p>
          <br></br>
          <p>Please contact me at: <a href="mailto:maxmcgeedev@gmail.com">maxmcgeedev@gmail.com</a></p>
        </div>

        <div className="image">

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
            <li><span>Wordpress</span></li>
            <li><span>Shopify</span></li>
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
