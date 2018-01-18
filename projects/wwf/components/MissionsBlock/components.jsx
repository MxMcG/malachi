import React, { Component } from 'react';
import { Link } from 'react-router';
export default class MissionsBlock extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="missionsBlock">
        <img src={ this.props.sanityUrlFor(this.props.sanityData.firstImage).url() } className="con mid"></img>
        <div className="con mid words t_left">
          <div className="contain">
            <h2>{ this.props.sanityData.firstHeadline }</h2>
            <p className="l"></p>
            <Link to="/charities" className="t_b button solid black">View Partners</Link>

          </div>
        </div>
        <div className="con mid words t_right hide-below-769"><h2>{ this.props.sanityData.secondHeadline }<br></br></h2></div>
        <img src={ this.props.sanityUrlFor(this.props.sanityData.secondImage).url() } className="con mid ov"></img>
      </div>
    );
  }
}
