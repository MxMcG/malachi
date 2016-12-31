import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// import App from '../../components/App/components.jsx';
import NavContainer from '../../common/containers/NavContainer';
import DynamicSliderContainer from '../../common/containers/DynamicSliderContainer';
import FooterContainer from '../../common/containers/FooterContainer';

// include actions as they are needed by each component
// they are called via dispatch()

const propTypes = {
  dispatch: PropTypes.func,
  content: PropTypes.object
};

// in here, we determine the props to be passed down to the specific component needed
class AppContainer extends Component {
  componentDidMount () {
    const { dispatch, componentContent } = this.props;
  }

  render () {
    return (
      <div>
        <NavContainer />
        <DynamicSliderContainer />
        <FooterContainer />
      </div>
    );
  }
}

AppContainer.propTypes = propTypes;

function mapStateToProps(state) {
  console.log('STATE', state)
  const componentContent = state.content.project.components;
  return {
    componentContent
  };
}

export default connect(mapStateToProps)(AppContainer);
