const initialState = {
  activeCategory: 'outdoors'
}

export default function activateCategoryReducers (state = initialState, action) {
  switch(action.type) {
    case 'ACTIVATE_CATEGORY':
      return Object.assign({}, state, {
        activeCategory: action.payload
      });
      default:
      return state;
    }
}
