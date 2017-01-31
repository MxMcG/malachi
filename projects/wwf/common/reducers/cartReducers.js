import update from 'immutability-helper';

const initialState = {
  showCart: false,

}

export default function cartReducers (state = initialState, action) {
  switch(action.type) {
    case 'SHOW_CART':
      return Object.assign({}, state, {
        showCart: action.payload
      });
      default:
    return state;
    }
}
