import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/index';

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
  const projectName = state.content.projectName;
  const loadedAdminComponents = state.admin.loadedAdminComponents;
  const componentsLoaded = state.admin.componentsLoaded;
  const activeComponentClass = state.admin.activeComponentClass;
  const selectedComponent = state.admin.selectedComponent;
  const loadedComponentContent = state.content.project.components;
  return {
    componentContent,
    projectName,
    selectedComponent,
    loadedAdminComponents,
    loadedComponentContent,
    componentsLoaded,
    activeComponentClass
  };
}

function mapDispatchToProps (dispatch) {
  return {
    dispatchActivateComponent: (component) => {
      dispatch(actions.activateComponent(component))
    },
    dispatchLoadAdminComponents: (components) => {
      dispatch(actions.loadAdminComponents(components));
      dispatch(actions.componentsLoadedAdmin(true));
    },
    dispatchSelectComponent: (component) => {
      dispatch(actions.updateSelectedComponent(component))
    },
    dispatchEditContent: (name, value, selectedComponent) => {
      dispatch(actions.editContent(name, value, selectedComponent))
    },
    dispatchLogout: () => {
      dispatch(actions.logout())
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AdminContainer);
