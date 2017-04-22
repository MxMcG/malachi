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
            <h2>Created Individually With a Purpose and For a Purpose</h2>
            <p className="l"></p>
            <Link to="/missions" className="t_b button solid black">View Partners</Link>

          </div>
        </div>
        <div className="con mid words t_right hide-below-769"><h2>Hand-Crafted Goods<br></br></h2></div>
        <img src={ cdnImageBase + chilSrc } className="con mid ov"></img>
      </div>
    );
  }
}
