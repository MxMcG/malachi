import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import MultTextImgHover from '../../components/MultTextImgHover/components.jsx';

// include actions as they are needed by each component
// they are called via dispatch()

const propTypes = {
  dispatch: PropTypes.func,
  content: PropTypes.object
};

// in here, we determine the props to be passed down to the specific component needed
class MultTextImgHoverContainer extends Component {

  render () {
    return (
      <MultTextImgHover {...this.props} />
    );
  }
}

MultTextImgHoverContainer.propTypes = propTypes;

function mapStateToProps(state) {
  const componentContent = state.content.project.components.MissionsContainer.MultTextImgHoverContainer;
  const cdnImageBase = state.urls.cdnImageBase;
  return {
    componentContent,
    cdnImageBase
  };
}

export default connect(mapStateToProps)(MultTextImgHoverContainer);
