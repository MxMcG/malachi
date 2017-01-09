export const activateComponent = (componentClass) => {
  return {
    type: 'ACTIVATE_COMPONENT',
    payload: componentClass
  }
}

export const loadComponentsAdmin = (components) => {
  return {
    type: 'LOAD_COMPONENTS_ADMIN',
    payload: components
  }
}

export const componentsLoadedAdmin = (bool) => {
  return {
    type: 'COMPONENTS_LOADED',
    payload: bool
  }
}

export const updateSelectedComponent = (componentName) => {
  return {
    type: 'UPDATE_SELECTED_COMPONENT',
    payload: componentName
  }
}
