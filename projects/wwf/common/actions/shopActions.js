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

export const shopTilesLoaded = (bool) => {
  return {
    type: 'SHOP_TILES_LOADED',
    payload: bool
  }
}

export const loadShopTiles = (elements) => {
  return {
    type: 'LOAD_SHOP_TILES',
    payload: elements
  }
}

export const loadCrafterProducts = (products) => {
  return {
    type: 'LOAD_CRAFTER_PRODUCTS',
    payload: products
  }
}
