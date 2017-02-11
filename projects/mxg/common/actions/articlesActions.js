export const incrementArticleIndex = (index) => {
  return {
    type: 'INCREMENT_ARTICLE_INDEX',
    payload: index
  }
}

export const decrementArticleIndex = (index) => {
  return {
    type: 'DECREMENT_ARTICLE_INDEX',
    payload: index
  }
}
