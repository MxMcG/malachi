/**
 * Custom methods to utilize shopify-buy-sdk
 * note: due to lack of support in safari, currently
 * use cdn script in <head> instead of npm package.
 */

import * as actions from './actions/index';

const shopClient = ShopifyBuy.buildClient({
  accessToken: 'f50e172619e144d0e415b0333134ac33',
  appId: 6,
  domain: 'westward-foundation.myshopify.com'
});

export function fetchAllCollections() {
  return function (dispatch) {
    reduceCollectionsToAttributes(dispatch)
      .then((collections) => {
        dispatch(actions.initializeShopCollections(collections))
      })
      .catch((error) => {
        console.log('Error', error);
      })
  }
}

const reduceCollectionsToAttributes = (dispatch) => {
  return new Promise((resolve, reject) => {
    const collectionAttributes = [];
    shopClient.fetchAllCollections()
      .then((collections) => {
        const collectionCount = collections.length;
        let counter = 0;
        collections.forEach((collection, index) => {
          queryByCollectionId(collection.attrs.collection_id).then((products) => {
            collectionAttributes.push({
              collection_id: collection.attrs.collection_id,
              attrs: collection.attrs,
              products
            });
            counter++;
            if ((counter === collectionCount)) {
              dispatch(actions.shopCollectionsLoaded(true));
              resolve(collectionAttributes)
            }
          });
        });
      }).catch((error) => {
        console.error(new Error('Fetching products error!'));
        reject(error);
      });
  });
}

export function fetchAllProducts() {
  return function (dispatch) {
    shopClient.fetchAllProducts()
      .then((products) => {
        dispatch(actions.initializeShopProducts(products));
        dispatch(actions.shopProductsLoaded(true));
      }).catch((error) => {
        console.error(new Error('Fetching products error!'));
        reject(error);
      });
  }
}

export function queryByCollectionId(collection_id) {
  return new Promise((resolve, reject) => {
    // fetch all products of collection
    shopClient.fetchQueryProducts({ collection_id })
      .then((products) => {
        resolve(products);
      }).catch((error) => {
        console.error(new Error('Fetching products error!'));
        reject(error);
      });
  });
}

export function queryByProductId(product_id) {
  return new Promise((resolve, reject) => {
    // fetch all products of collection
    shopClient.fetchProduct(product_id)
      .then((product) => {
        resolve(product);
      }).catch((error) => {
        console.error(new Error('Fetching products error!'));
        reject(error);
      });
  });
}

export function createNewCart() {
  return function (dispatch) {
    return new Promise((resolve, reject) => {
      // fetch all products of collection
      shopClient.createCart()
        .then((cart) => {
          dispatch(actions.createCart(cart));
        }).catch((error) => {
          console.error(new Error('Error Creating Cart!'));
          reject(error);
        });
    });
  }
}

export function updateCart(dispatch, activeCart, productId, quantity) {
  return new Promise((resolve, reject) => {
    activeCart.createLineItemsFromVariants({ variant: productId, quantity})
      .then((cart) => {
        dispatch(actions.addItemToCart(activeCart, quantity));
      }).catch((error) => {
        console.error(new Error('Error Adding to Cart!'));
        reject(error);
      });
  });
}

export function updateVariantInCart(dispatch, cart, productId, quantity) {
  return new Promise((resolve, reject) => {
    cart.updateLineItem(productId, quantity)
      .then((cart) => {
        dispatch(actions.addItemToCart(cart, quantity));
      }).catch((error) => {
        console.error(new Error('Error Adding to Cart!'));
        reject(error);
      });
  });
}
