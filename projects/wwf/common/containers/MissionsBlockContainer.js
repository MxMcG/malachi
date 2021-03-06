import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import MissionsBlock from '../../components/MissionsBlock/components.jsx';

// include actions as they are needed by each component
// they are called via dispatch()

const propTypes = {
  dispatch: PropTypes.func,
  content: PropTypes.object
};

// in here, we determine the props to be passed down to the specific component needed
class MissionsBlockContainer extends Component {
  componentDidMount () {
    const { dispatch, content } = this.props;
  }

  render () {
    return (
      <MissionsBlock {...this.props} />
    );
  }
}

MissionsBlockContainer.propTypes = propTypes;

function mapStateToProps(state) {
  const componentContent = state.content.project.components.HomeContainer.MissionsBlockContainer;
  const cdnImageBase = state.urls.cdnImageBase;
  const cdnUrl = state.urls.cdnUrl;
  const sanityData = state.sanityData.missionsBlock;
  return {
    componentContent,
    cdnUrl,
    cdnImageBase,
    sanityData,
  };
}

export default connect(mapStateToProps)(MissionsBlockContainer);
