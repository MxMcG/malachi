/**
 * These actions are used to load and manage data from shopify API.
 */
export const showCart = (bool) => {
  return {
    type: 'SHOW_CART',
    payload: bool
  }
}

export const createCart = (cart) => {
  return {
    type: 'CREATE_CART',
    payload: cart
  }
}

export const addItemToCart = (cart, quantity) => {
  return {
    type: 'ADD_ITEM_TO_CART',
    payload: cart,
    quantity: quantity
  }
}
