import React, { Component } from 'react';

export default class TileLinks extends Component {

  constructor(props) {
    super(props);
    this.state = {
      test: ''
    }
  }

  render() {
    // should have comonent content available as tiles
    // div, headline, subheadline, 2 images, description, a link.
    // array of tiles
    const { tiles, headline, subheadline, dropdown } = this.props.componentContent;
    const cdnImageBase = this.props.cdnImageBase;
    return (
      <div className="tileLinks" >
        <h1>{headline}</h1>
        <h3>{subheadline}</h3>
        <h4>{dropdown.headline}</h4>
        {
          tiles.map((tile, index) => {
            return (
              <div key={index} >
                <h2>{tile.headline}</h2>
                <h4>{tile.subheadline}</h4>
                <img className='tileImage' src={cdnImageBase + tile.images[0].src} />
                <img className='tileImage' src={cdnImageBase + tile.images[1].src} />
                <a href={tile.link} target="_blank">LINK</a>
                <p>{tile.description}</p>
              </div>
            )
          })
        }
      </div>
    );
  }
}
