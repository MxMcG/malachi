// inherit content state from server
const initialState = {
  activeArticleIndex: 0
};

export default function contentReducers (state = initialState, action) {
  // updates specific content-point in given component.
  switch(action.type) {
    case 'INCREMENT_ARTICLE_INDEX':
      return Object.assign({}, state, {
        activeArticleIndex: action.payload
      });
    case 'DECREMENT_ARTICLE_INDEX':
      return Object.assign({}, state, {
        activeArticleIndex: action.payload
      });
    default:
      return state;
  }
}
