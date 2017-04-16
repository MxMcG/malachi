import React, { Component } from 'react';
import jquery from 'jquery';
import $ from 'jquery';

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
    $('#first').css({"opacity" : scrollTop / 200});

    if(scrollTop > 600) {
      $('.co .image').hide();
    } else {
      $('.co .image').show();
    }
  }

  render() {
    const { imageBase, imageEffects } = this.props.componentContent;
    const cdnImageBase = this.props.cdnImageBase;
    return (
      <div className="imageWithEffects">
        <div className="co">
          <img className="image fi" id="first" style={{opacity: 0}} src={cdnImageBase + imageEffects.src} alt={imageBase.alt}></img>
          <img className="image se" src={cdnImageBase + imageBase.src} alt={imageBase.alt}></img>
        </div>
      </div>
    );
  }
}
