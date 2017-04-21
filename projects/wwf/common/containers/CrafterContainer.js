import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

import Crafter from '../../components/Crafter/components.jsx';

// include actions as they are needed by each component
// they are called via dispatch()

const propTypes = {
  dispatch: PropTypes.func,
  content: PropTypes.object
};

// in here, we determine the props to be passed down to the specific component needed
class CrafterContainer extends Component {

  constructor(props) {

    super(props)
  }

  render () {
    return (
      <Crafter {...this.props} />
    );
  }
}

CrafterContainer.propTypes = propTypes;

function mapStateToProps(state) {
  const shopCollectionsLoaded = state.shop.shopCollectionsLoaded;
  const componentContent = state.content.project.components.CrafterContainer;
  const loadedProducts = state.shop.loadCrafterProducts;
  const shopCollections = state.shop.shopCollections;
  const crafterCollection = state.shop.crafterCollection;
  return {
    componentContent,
    loadedProducts,
    shopCollections,
    shopCollectionsLoaded,
    crafterCollection
  };
}

function mapDispatchToProps (dispatch) {
  return {
    dispatchLoadCrafterProducts: (products) => {
      dispatch(actions.loadCrafterProducts(products))
    },
    dispatchCrafterCollection: (collection) => {
      dispatch(actions.loadCrafterCollection(collection))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CrafterContainer);
