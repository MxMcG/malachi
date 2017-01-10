const initialState = {

};

export default function contentReducers (state = initialState, action) {
  switch(action.type) {
    case 'EDIT_CONTENT_ADMIN':
    const selectedComponent = state.project.components[action.selectedComponent];
    console.log('SE:EC', selectedComponent)
    return Object.assign({}, state, {
      project: {
        components: {
          [action.selectedComponent]: {
            [action.name]: action.value
          }
        }
      }
    });
    default:
      return state;
  }
}
