export const activateComponent = (componentClass) => {
  return {
    type: 'ACTIVATE_COMPONENT',
    payload: componentClass
  }
}

export const loadAdminComponents = (components) => {
  return {
    type: 'LOAD_ADMIN_COMPONENTS',
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

export const editContent = (name, value, selectedComponent) => {
  return {
    type: 'EDIT_CONTENT_ADMIN',
    name,
    value,
    selectedComponent
  }
}
