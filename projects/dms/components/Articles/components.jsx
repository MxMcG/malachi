import React, { Component } from 'react';

export default class Articles extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.renderArticles();
  }

  renderArticles() {
    const articles = this.props.componentContent.articles;
    const allArticles = [];
    articles.forEach((article, outerIndex) => {
      const allParagraphs = [];
      const headline = article.headline;
      const date = article.date;
      const paragraphs = article.paragraphs
      paragraphs.forEach((paragraph, innerIndex) => {
        allParagraphs.push(<p className="paragraph" key={innerIndex}>{ paragraph }</p>)
      })
      allArticles.push(
        <div className="article" key={outerIndex}>
          <h2 className="headline">{ headline }</h2>
          <h4 className="date">{ date }</h4>
          { allParagraphs }
        </div>
      );
    });
    return allArticles[this.props.activeArticleIndex];
  }

  incrementArticle() {
    this.props.dispatchIncrementArticleIndex(this.props.activeArticleIndex + 1);
  }

  decrementArticle() {
    this.props.dispatchDecrementArticleIndex(this.props.activeArticleIndex - 1);
  }

  render() {
    return (
      <div className="articles" >
        { this.renderArticles() }
        <div className="arrows">
          <i onClick={ this.decrementArticle.bind(this) } className="fa fa-arrow-left leftArrow" aria-hidden="true"></i>
          <i onClick={ this.incrementArticle.bind(this) } className="fa fa-arrow-right rightArrow" aria-hidden="true"></i>
        </div>
      </div>
    );
  }
}
