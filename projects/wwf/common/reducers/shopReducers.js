const initialState = {
  activeCategory: 'outdoors',
  shopCollections: [],
  shopProducts: [],
  shopTilesLoaded: false,
  loadShopTiles: [],
  loadCrafterProducts: []
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
    default:
    return state;
    }
}
