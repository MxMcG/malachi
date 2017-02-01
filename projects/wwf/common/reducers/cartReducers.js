import update from 'immutability-helper';

const initialState = {
  showCart: false,
  activeCart: {}
}

export default function cartReducers (state = initialState, action) {
  switch(action.type) {
    case 'SHOW_CART':
      return Object.assign({}, state, {
        showCart: action.payload
      });
    case 'CREATE_CART':
      return Object.assign({}, state, {
        activeCart: action.payload
      });
    case 'ADD_ITEM_TO_CART':    
      return Object.assign({}, state, {
        activeCart: action.payload
      });
      default:
    return state;
    }
}
