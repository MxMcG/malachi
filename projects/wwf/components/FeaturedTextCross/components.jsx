import React, { Component } from 'react';

export default class FeaturedTextCross extends Component {

  constructor(props) {
    super(props);
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.crafterCollection.attrs) {

    }
  }

  displayCrafterTitle() {
    if (this.props.crafterCollection.attrs !== undefined) {
      const title = this.props.crafterCollection.attrs.title;
      const body = this.props.crafterCollection.attrs.body_html;
      return (
        <div>
          <h2>About { title }</h2>
          <p dangerouslySetInnerHTML={{__html: body}}></p>
        </div>
      );
    }
  }

  render() {
    const { headline, description } = this.props.componentContent;
    return (
      <div className="featuredTextCross" >
        { this.displayCrafterTitle() }
      </div>
    );
  }
}
