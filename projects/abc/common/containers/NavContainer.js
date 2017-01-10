import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Nav from '../../components/Nav/components.jsx';

// include actions as they are needed by each component
// they are called via dispatch()

const propTypes = {

};

// in here, we determine the props to be passed down to the specific component needed
class NavContainer extends Component {
  componentDidMount () {
    const { dispatch } = this.props;
  }

  render () {
    return (
      <Nav {...this.props} />
    );
  }
}

Nav.propTypes = propTypes;

function mapStateToProps(state) {
  const componentContent = state.content.project.components.NavContainer;
  const { cdnUrl, cdnImageBase } = state;
  return {
    componentContent,
    cdnUrl,
    cdnImageBase
  };
}

export default connect(mapStateToProps)(NavContainer);
