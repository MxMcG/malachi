import ShopifyBuy from 'shopify-buy';
import * as actions from './actions/index';

const shopClient = ShopifyBuy.buildClient({
  apiKey: 'f50e172619e144d0e415b0333134ac33',
  appId: 6,
  domain: 'westward-foundation.myshopify.com'
});

export function fetchAllCollections() {
  return function (dispatch) {
    reduceCollectionsToAttributes()
      .then((collections) => {
        dispatch(actions.initializeShopCollections(collections))
      })
      .catch((error) => {
        console.log('Error', error);
      })
  }
}

const reduceCollectionsToAttributes = () => {
  return new Promise((resolve, reject) => {
    const collectionAttributes = [];
    shopClient.fetchAllCollections()
      .then((collections) => {
        collections.map((collection) => {
          collectionAttributes.push(collection.attrs);
        });
        resolve(collectionAttributes);
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
      }).catch((error) => {
        console.error(new Error('Fetching products error!'));
        reject(error);
      });
  }
}

// const queryByCollectionId = (collectionAttrs) => {
//   return new Promise((resolve, reject) => {
//     collectionAttrs.forEach((collection, index) => {
//       // fetch all products of collection
//       shopClient.fetchQueryProducts({ collection_id: collection.collection_id })
//         .then((products) => {
//           console.log('products', products)
//         }).catch((error) => {
//           console.error(new Error('Fetching products error!'));
//           reject(error);
//         });
//       // if category exists, push products into that object's collection property
//       // otherwise push in new catObj
//     })
//     // loop through categories,
//   });
// }
