import React, { Component } from 'react';
import jquery from 'jquery';
import $ from 'jquery';
import FeaturedTextCrossContainer from '../../common/containers/FeaturedTextCrossContainer.js';

export default class ImageWithEffects extends Component {

  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);

  }

  handleScroll(e) {
    var scrollTop = $(document).scrollTop();
    $('.co .se').css({"transform" : "translate3d(0,"+scrollTop / 5+"px,0)"});

    if(scrollTop > 100) {
      return false
    } else {
      return true
    }
  }

  render() {
    const { imageBase, imageEffects } = this.props.componentContent;
    const cdnImageBase = this.props.cdnImageBase;
    const src = this.props.crafterCollection.attrs ? this.props.crafterCollection.attrs.image.src : null;
    return (
      <div className="imageWithEffects">
        <div className="co">
          <img className="image se" src={ src } ></img>
        </div>
        <div className="desk_feat"><FeaturedTextCrossContainer /></div>
      </div>
    );
  }
}

// <img className="image se" src={cdnImageBase } alt={this.props.crafterCollection.attrs.image.alt}></img>
