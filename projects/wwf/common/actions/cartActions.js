/**
 * These actions are used to load and manage data from shopify API.
 */
export const showCart = (bool) => {
  return {
    type: 'SHOW_CART',
    payload: bool
  }
}
