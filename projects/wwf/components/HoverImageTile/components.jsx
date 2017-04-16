import React, { Component } from 'react';

export default class HoverImageTile extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { ctaText, headline, subheadline, title, image } = this.props.componentContent;
    const cdnImageBase = this.props.cdnImageBase;
    return (
    <div className="h_c">
      <img src={cdnImageBase + image.src} alt={image.alt}></img>
        <div className="hoverImageTile" >
            <div className="t_c t_b">      
                <div className="tb_c t_b">
                    <h5 className="tr_u">{title}</h5>
                    <div className="wesCross"><div className="w t_b">w</div><div className="mi t_b"></div><div className="th t_b"></div></div>
                    <h1 className="tr_u">{headline}</h1>
                    <p className="tr_u">{subheadline}</p>
                    <a className="tr_b black button solid">{ctaText}</a>
                </div>
            </div>
        </div>
    </div>
    );
  }
}
