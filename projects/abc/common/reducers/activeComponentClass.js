const initialState = {
  activeComponentClass: null
};

export default function activateComponent (state = initialState, action) {
  console.log('dfsdf')
  switch(action.type) {
    case 'ACTIVATE_COMPONENT':
      return Object.assign({}, state, {
        activeComponentClass: action.payload
      });
    default:
      return state;
  }
}
