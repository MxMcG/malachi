import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Articles from '../../components/Articles/components.jsx';

// include actions as they are needed by each component
// they are called via dispatch()

const propTypes = {

};

// in here, we determine the props to be passed down to the specific component needed
class ArticlesContainer extends Component {
  componentDidMount () {
    const { dispatch } = this.props;
  }

  render () {
    return (
      <Articles {...this.props} />
    );
  }
}

ArticlesContainer.propTypes = propTypes;

function mapStateToProps(state) {
  const componentContent = state.content.project.components.ArticlesContainer;
  const cdnImageBase = state.urls.cdnImageBase;
  const cdnUrl = state.urls.cdnUrl
  return {
    componentContent,
    cdnUrl,
    cdnImageBase
  };
}

export default connect(mapStateToProps)(ArticlesContainer);
