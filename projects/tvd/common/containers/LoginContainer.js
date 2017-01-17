import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Login from '../../components/Login/components.jsx';
import * as actions from '../actions/index';

// include actions as they are needed by each component
// they are called via dispatch()

const propTypes = {
  dispatch: PropTypes.func,
  content: PropTypes.object
};

// in here, we determine the props to be passed down to the specific component needed
class LoginContainer extends Component {

  render () {
    return (
      <Login {...this.props} />
    );
  }
}

LoginContainer.propTypes = propTypes;

function mapStateToProps(state) {
  const loginData = state.login;
  const componentContent = state.content.project.components.LoginContainer;

  return {
    componentContent,
    loginData
  };
}

function mapDispatchToProps (dispatch) {
  return {
    dispatchChangeLoginForm: (payload) => {
      dispatch(actions.changeLoginForm(payload))
    },
    dispatchSubmitLoginForm: (payload) => {
      dispatch(actions.submitLoginForm(payload))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
