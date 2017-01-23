import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import FeaturedImagesTile from '../../components/FeaturedImagesTile/components.jsx';

// include actions as they are needed by each component
// they are called via dispatch()

const propTypes = {
  dispatch: PropTypes.func,
  content: PropTypes.object
};

// in here, we determine the props to be passed down to the specific component needed
class FeaturedImagesTileContainer extends Component {
  componentDidMount () {
    const { dispatch, content } = this.props;
  }

  render () {
    return (
      <FeaturedImagesTile {...this.props} />
    );
  }
}

FeaturedImagesTileContainer.propTypes = propTypes;

function mapStateToProps(state) {
  const componentContent = state.content.project.components.HomeContainer.FeaturedImagesTileContainer;
  const cdnImageBase = state.urls.cdnImageBase;
  const cdnUrl = state.urls.cdnUrl
  return {
    componentContent,
    cdnUrl,
    cdnImageBase
  };
}

export default connect(mapStateToProps)(FeaturedImagesTileContainer);
