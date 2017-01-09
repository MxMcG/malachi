const initialState = {
  activeComponentClass: undefined,
  componentsLoaded: false,
  loadedComponentsAdmin: []
};

export default function adminReducers (state = initialState, action) {
  switch(action.type) {
    case 'ACTIVATE_COMPONENT':
      return Object.assign({}, state, {
        activeComponentClass: action.payload
      });
    case 'COMPONENTS_LOADED':
      return Object.assign({}, state, {
        componentsLoaded: action.payload
      });
    case 'LOAD_COMPONENTS_ADMIN':
      return Object.assign({}, state, {
        loadedComponentsAdmin: action.payload
      });
    default:
      return state;
  }
}
