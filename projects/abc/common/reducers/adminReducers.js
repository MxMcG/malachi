const initialState = {
  activeComponentClass: null,
  loadedComponentsAdmin: []
};

export default function adminReducers (state = initialState, action) {
  switch(action.type) {
    case 'ACTIVATE_COMPONENT':
      return Object.assign({}, state, {
        activeComponentClass: action.payload
      });
    case 'LOAD_COMPONENTS_ADMIN':
      return Object.assign({}, state, {
        loadedComponentsAdmin: action.payload
      });
    default:
      return state;
  }
}
