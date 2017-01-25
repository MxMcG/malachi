const initialState = {
  activeCategory: 'outdoors',
  shopInventory: []
}

export default function shopReducers (state = initialState, action) {
  switch(action.type) {
    case 'ACTIVATE_CATEGORY':
      return Object.assign({}, state, {
        activeCategory: action.payload
      });
    case 'INITIALIZE_SHOP_INVENTORY':
      return Object.assign({}, state, {
        shopInventory: action.payload
      });
    default:
    return state;
    }
}
