import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import CategorizedRows from '../../components/CategorizedRows/components.jsx';

// include actions as they are needed by each component
// they are called via dispatch()

const propTypes = {
  dispatch: PropTypes.func,
  content: PropTypes.object
};

// in here, we determine the props to be passed down to the specific component needed
class CategorizedRowsContainer extends Component {

  render () {
    return (
      <CategorizedRows {...this.props} />
    );
  }
}

CategorizedRowsContainer.propTypes = propTypes;

function mapStateToProps(state) {
  const componentContent = state.content.project.components.AboutContainer.CategorizedRowsContainer;
  const cdnImageBase = state.urls.cdnImageBase;
  const cdnUrl = state.urls.cdnUrl
  return {
    componentContent,
    cdnUrl,
    cdnImageBase
  };
}

export default connect(mapStateToProps)(CategorizedRowsContainer);
