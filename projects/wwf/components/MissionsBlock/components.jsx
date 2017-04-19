import React, { Component } from 'react';
import { Link } from 'react-router';
export default class MissionsBlock extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    const ausSrc = this.props.componentContent.firstSrc;
    const chilSrc = this.props.componentContent.secondSrc;
    const cdnImageBase = this.props.cdnImageBase;
    return (
      <div className="missionsBlock">
        <img src={ cdnImageBase + ausSrc } className="con mid"></img>
        <div className="con mid words t_left">
          <div className="contain">
            <h2>The Global Hunger Crisis</h2>
            <p className="l">There is a global emergency that many of us don’t understand. We don’t get it because daily we're deciding what to eat for lunch, where to meet our friends for dinner, or filling our grocery basket with ingredients for our next meal. Meanwhile, one-ninth of the world’s population is going to bed hungry. And every ten seconds, a child dies of hunger related causes.</p>
            <Link to="/missions" className="t_b button solid black">View Partners</Link>

          </div>
        </div>
        <div className="con mid words t_right hide-below-769"><h2>Remember the lives<br></br> in Chile</h2></div>
        <img src={ cdnImageBase + chilSrc } className="con mid ov"></img>
      </div>
    );
  }
}
