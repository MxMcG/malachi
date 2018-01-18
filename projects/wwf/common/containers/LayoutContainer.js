import React, { Component, PropTypes } from 'react';
import ReactGA from 'react-ga';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import sanityConfiguredClient from '../../../../server/sanityClient';
import imageUrlBuilder from '@sanity/image-url';

const isBrowser = !!(typeof window !== 'undefined' && typeof navigator !== 'undefined' && window.document);
let fetchAllCollections, fetchAllProducts, createNewCart;
if (isBrowser) {
  fetchAllCollections = require('../shopify.js').fetchAllCollections;
  fetchAllProducts = require('../shopify.js').fetchAllProducts;
  createNewCart = require('../shopify.js').createNewCart;
}

// SANITY CMS IMAGE BUILDER IS PASSED DOWN TO APP
const sanityImageBuilder = imageUrlBuilder(sanityConfiguredClient);
const sanityUrlFor = (source) => {
  return sanityImageBuilder.image(source)
}

import Layout from '../../components/Layout/components.jsx';

// include actions as they are needed by each component
// they are called via dispatch()

const propTypes = {
  dispatch: PropTypes.func,
  content: PropTypes.object
};

// in here, we determine the props to be passed down to the specific component needed
class LayoutContainer extends Component {

  componentWillMount() {
    if (isBrowser) {
      ReactGA.initialize('UA-96472854-1');
    }
  }

  componentDidMount () {
    const { dispatch, componentContent } = this.props;
    if (isBrowser) {
      this.props.dispatch(fetchAllCollections());
      this.props.dispatch(fetchAllProducts());
      this.props.dispatch(createNewCart());
    }
  }

  render () {
    return (
      <div className="layout wwf">
        <Layout {...this.props} sanityUrlFor={sanityUrlFor} />
      </div>
    );
  }
}

LayoutContainer.propTypes = propTypes;

function mapStateToProps(state) {
  const componentContent = state.content.project.components;
  return {
    componentContent,
  };
}

export default connect(mapStateToProps)(LayoutContainer);
