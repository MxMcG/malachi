import update from 'immutability-helper';

// inherit content state from server
const initialState = {};

export default function sanityDataReducers(state = initialState, action) {
  // updates specific content-point in given component.
  switch (action.type) {
    default:
      return state;
  }
}
