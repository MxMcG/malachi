export const initializeShopCollections = (attrs) => {
  return {
    type: 'INITIALIZE_SHOP_COLLECTIONS',
    payload: attrs
  }
}

export const initializeShopProducts = (attrs) => {
  return {
    type: 'INITIALIZE_SHOP_PRODUCTS',
    payload: attrs
  }
}
