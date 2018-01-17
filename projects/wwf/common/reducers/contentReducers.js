import update from 'immutability-helper';

// inherit content state from server
const initialState = {};

export default function contentReducers (state = initialState, action) {
  // updates specific content-point in given component.
  switch(action.type) {
    case 'EDIT_CONTENT_ADMIN':
      return update(state,
        { project: { components: { [action.selectedComponent]: { [action.name]: { $set: action.value } }}}
      });
    case 'UPDATE_ADMIN_CONTENT':
      return update(state,
        { $set: action.payload });
    default:
      return state;
  }
}
