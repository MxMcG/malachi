import update from 'immutability-helper';

const initialState = {
  showCart: false,
  activeCart: {},
  quantity: 0
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
        activeCart: action.payload,
        quantity: state.quantity + 1
      });
      default:
    return state;
    }
}
