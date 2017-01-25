const initialState = {
  activeCategory: 'outdoors',
  shopCollections: [],
  shopProducts: []
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
    default:
    return state;
    }
}
