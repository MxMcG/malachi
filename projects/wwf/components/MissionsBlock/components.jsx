import React, { Component } from 'react';
import { Link } from 'react-router';

export default class MissionsBlock extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const ausSrc = this.props.componentContent.aus;
    const chilSrc = this.props.componentContent.chil;
    const cdnImageBase = this.props.cdnImageBase;
    return (
      <div className="missionsBlock">
        <img src={ cdnImageBase + ausSrc } className="con mid"></img>
        <div className="con mid words t_left">
          <div className="contain">
            <h2>Spreading the Good News</h2>
            <p className="l">Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur.</p>
            <Link to="/missions" className="t_b button solid black">View Partners</Link>

          </div>
        </div>
        <div className="con mid words t_right hide-below-769"><h2>Remember the <br></br><span className="red">Jesus</span> in Chile</h2></div>
        <img src={ cdnImageBase + chilSrc } className="con mid ov"></img>
      </div>
    );
  }
}
