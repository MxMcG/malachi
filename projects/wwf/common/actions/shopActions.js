export const activateCategory = (category) => {
  return {
    type: 'ACTIVATE_CATEGORY',
    payload: category
  }
}

export const initializeShopInventory = (attrs) => {
  return {
    type: 'INITIALIZE_SHOP_INVENTORY',
    payload: attrs
  }
}
