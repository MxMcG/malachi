import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Portfolio from '../../components/Portfolio/components.jsx';

// include actions as they are needed by each component
// they are called via dispatch()

const propTypes = {

};

// in here, we determine the props to be passed down to the specific component needed
class PortfolioContainer extends Component {
  componentDidMount () {
    const { dispatch } = this.props;
  }

  render () {
    return (
      <Portfolio {...this.props} />
    );
  }
}

PortfolioContainer.propTypes = propTypes;

function mapStateToProps(state) {
  const componentContent = state.content.project.components.PortfolioContainer;
  const cdnImageBase = state.urls.cdnImageBase;
  const cdnUrl = state.urls.cdnUrl
  return {
    componentContent,
    cdnUrl,
    cdnImageBase
  };
}

export default connect(mapStateToProps)(PortfolioContainer);
