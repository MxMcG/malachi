import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import App from '../../components/App/components.jsx';

// include actions as they are needed by each component
// they are called via dispatch()

const propTypes = {
  dispatch: PropTypes.func,
  content: PropTypes.object
};

class AppContainer extends Component {
  componentDidMount () {
    const { dispatch, content } = this.props;
    console.log('dispatch', dispatch)
    console.log('content', content)
  }

  render () {
    return (
      <App {...this.props} />
    );
  }
}

App.propTypes = propTypes;

function mapStateToProps(state) {
  const { content } = state
  return {
    content
  };
}

export default connect(mapStateToProps)(AppContainer);
