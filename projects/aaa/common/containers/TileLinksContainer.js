import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import TileLinks from '../../components/TileLinks/components.jsx';

// include actions as they are needed by each component
// they are called via dispatch()

const propTypes = {

};

// in here, we determine the props to be passed down to the specific component needed
class TileLinksContainer extends Component {
  componentDidMount () {
    const { dispatch } = this.props;
  }

  render () {
    return (
      <TileLinks {...this.props} />
    );
  }
}

TileLinksContainer.propTypes = propTypes;

function mapStateToProps(state) {
  const componentContent = state.content.project.components;
  const { cdnUrl } = state;
  return {
    componentContent,
    cdnUrl
  };
}

export default connect(mapStateToProps)(TileLinksContainer);
