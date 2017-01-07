import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { activateComponent, loadComponentsAdmin } from '../actions/appActions.js';
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
  console.log('STATE', state)
  return {
    componentContent,
    selectedComponent: 'FooterContainer',
    loadedComponentsAdmin
  };
}

function mapDispatchToProps (dispatch) {
  return {
    dispatchActivateComponent: (component) => {
      return (dispatch) => {
        dispatch(activateComponent(component)).then(response => {
          console.log('MASEW', response)
          // you should probably get a real id for your new todo item here,
          // and update your store, but we'll leave that to you
        }).catch(err => {
          console.log('dfsdf', err)
        // Error: handle it the way you like, undoing the optimistic update,
        //  showing a "out of sync" message, etc.
        });
      }
    },
    dispatchLoadProjectComponents: (components) => {
      console.log('UPP')
      return (dispatch) => {
        console.log('UPPsss')
        dispatch(loadComponentsAdmin(components)).then((response) => {
          console.log('MASEW', response)
          // you should probably get a real id for your new todo item here,
          // and update your store, but we'll leave that to you
        }).catch(err => {
          console.log('dfsdf', err)
        // Error: handle it the way you like, undoing the optimistic update,
        //  showing a "out of sync" message, etc.
        });
      }
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AdminContainer);
