/**
 * These actions are used to load and manage data from shopify API.
 */
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

export const shopProductsLoaded = (bool) => {
  return {
    type: 'SHOP_PRODUCTS_LOADED',
    payload: bool
  }
}

export const shopCollectionsLoaded = (bool) => {
  return {
    type: 'SHOP_COLLECTIONS_LOADED',
    payload: bool
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

export const fetchSlides = (data) => {
  return {
    type: 'FETCH_SLIDES',
    payload: data
  }
}

export const addLinksToSlides = (id, index) => {
  return {
    type: 'ADD_SLIDE_LINK',
    id,
    index
  }
}

export const addBuyLinksToSlides = (href, index) => {
  return {
    type: 'ADD_BUY_LINKS',
    href,
    index
  }
}

export const activateProduct = (product) => {
  return {
    type: 'ACTIVATE_PRODUCT',
    payload: product
  }
}

export const loadCrafterCollection = (collection) => {
  return {
    type: 'CRAFTER_COLLECTION',
    payload: collection
  }
}
