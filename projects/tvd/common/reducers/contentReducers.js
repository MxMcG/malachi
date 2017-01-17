import update from 'immutability-helper';

// inherit content state from server
const initialState = {};

export default function contentReducers (state = initialState, action) {
  // updates specific content-point in given component.
  switch(action.type) {
    case 'EDIT_CONTENT_ADMIN':
    const newState = update(state,
      { project: { components: { [action.selectedComponent]: { [action.name]: { $set: action.value } }}}
    });
    return newState;
    default:
      return state;
  }
}
