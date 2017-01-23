import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import CategorizedTiles from '../../components/CategorizedTiles/components.jsx';

// include actions as they are needed by each component
// they are called via dispatch()

const propTypes = {
  dispatch: PropTypes.func,
  content: PropTypes.object
};

// in here, we determine the props to be passed down to the specific component needed
class CategorizedTilesContainer extends Component {

  render () {
    return (
      <CategorizedTiles {...this.props} />
    );
  }
}

CategorizedTilesContainer.propTypes = propTypes;

function mapStateToProps(state) {
  const componentContent = state.content.project.components.CategorizedTilesContainer;
  return {
    componentContent
  };
}

export default connect(mapStateToProps)(CategorizedTilesContainer);
