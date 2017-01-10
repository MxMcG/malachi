const initialState = {
  activeComponentClass: undefined,
  componentsLoaded: false,
  loadedAdminComponents: [],
  selectedComponent: 'FooterContainer'
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
    case 'LOAD_ADMIN_COMPONENTS':
      return Object.assign({}, state, {
        loadedAdminComponents: action.payload
      });
    case 'UPDATE_SELECTED_COMPONENT':
      return Object.assign({}, state, {
        selectedComponent: action.payload
      });

    default:
      return state;
  }
}
