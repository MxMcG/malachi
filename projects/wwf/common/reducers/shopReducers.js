import update from 'immutability-helper';

const initialState = {
  activeCategory: 'outdoors',
  shopCollections: [],
  shopProducts: [],
  shopTilesLoaded: false,
  loadShopTiles: [],
  loadCrafterProducts: [],
  fetchSlides: []
}

export default function shopReducers (state = initialState, action) {
  switch(action.type) {
    case 'ACTIVATE_CATEGORY':
      return Object.assign({}, state, {
        activeCategory: action.payload
      });
    case 'INITIALIZE_SHOP_COLLECTIONS':
      return Object.assign({}, state, {
        shopCollections: action.payload
      });
    case 'INITIALIZE_SHOP_PRODUCTS':
      return Object.assign({}, state, {
        shopProducts: action.payload
      });
    case 'SHOP_TILES_LOADED':
      return Object.assign({}, state, {
        shopTilesLoaded: action.payload
      });
    case 'LOAD_SHOP_TILES':
      return Object.assign({}, state, {
        loadShopTiles: action.payload
      });
    case 'LOAD_CRAFTER_PRODUCTS':
      return Object.assign({}, state, {
        loadCrafterProducts: action.payload
      });
    case 'FETCH_SLIDES':
      return Object.assign({}, state, {
        fetchSlides: action.payload
      });
    case 'ADD_SLIDE_LINK':
      return update(state, {
        fetchSlides: {
          [action.index]: {
            hrefCrafter: {
              $set: `/crafters/${action.id}`
            }
          }
        }
      });
    case 'ADD_BUY_LINKS':
      console.log('href', action.href)
      console.log('index', action.index)
      return update(state, {
        fetchSlides: {
          [action.index]: {
            hrefBuy: {
              $set: action.href
            }
          }
        }
      });
    default:
    return state;
    }
}
