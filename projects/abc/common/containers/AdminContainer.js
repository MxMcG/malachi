import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { activateComponent, loadComponentsAdmin, componentsLoadedAdmin } from '../actions/appActions.js';
import Admin from '../../components/Admin/index.jsx';

// include actions as they are needed by each component
// they are called via dispatch()

const propTypes = {
  dispatch: PropTypes.func,
  content: PropTypes.object
};

// in here, we determine the props to be passed down to the specific component needed
class AdminContainer extends Component {
  componentDidMount () {
    const { dispatch, componentContent } = this.props;
  }

  render () {
    return (
      <Admin {...this.props} />
    );
  }
}

AdminContainer.propTypes = propTypes;

function mapStateToProps(state) {
  const componentContent = state.content.project.components;
  const loadedComponentsAdmin = state.admin.loadedComponentsAdmin;
  const componentsLoaded = state.admin.componentsLoaded;
  const activeComponentClass = state.admin.activeComponentClass;
  return {
    componentContent,
    selectedComponent: 'FooterContainer',
    loadedComponentsAdmin,
    componentsLoaded,
    activeComponentClass
  };
}

function mapDispatchToProps (dispatch) {
  return {
    dispatchActivateComponent: (component) => {
      dispatch(activateComponent(component))
    },
    dispatchLoadProjectComponents: (components) => {
      dispatch(loadComponentsAdmin(components));
      dispatch(componentsLoadedAdmin(true));
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AdminContainer);
