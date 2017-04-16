import React, { Component } from 'react';

export default class MultTextImgHover extends Component {

  constructor(props) {
    super(props);
  }

  renderBlocks() {
    const blocks = this.props.componentContent.blocks;
    const blockElements = [];
    blocks.forEach((block, index) => {
      blockElements.push(
        <div key={index}>
          <div className="complexFeatureText" >
            <h2>{block.topBlock.topHeadline}</h2>
            <h6>{block.topBlock.topSubheadline}</h6>
            <p>{block.topBlock.topDescription}</p>
          </div>

          <div className="h_c">
            <img src={this.props.cdnImageBase + block.bottomBlock.lowImage.src} alt={block.bottomBlock.lowImage.alt}></img>
            <div className="hoverImageTile" >
              <div className="t_c t_b">
                <div className="tb_c t_b">
                    <h5 className="tr_u">{block.bottomBlock.lowTitle}</h5>
                    <div className="wesCross"><div className="w t_b">w</div><div className="mi t_b"></div><div className="th t_b"></div></div>
                    <h1 className="tr_u">{block.bottomBlock.lowHeadline}</h1>
                    <p className="tr_u">{block.bottomBlock.lowSubheadline}</p>
                    <a className="tr_b black button solid">{block.bottomBlock.lowCtaText}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return blockElements;
  }

  render() {
    // in here, loop through array of blocks, render each block onto the package
    // order of blocks should be complex feature text, complex image
    return (
      <div className="MultTextImgHover" >
        { this.renderBlocks() }
      </div>
    );
  }
}
