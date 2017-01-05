export const activateComponent = (componentClass) => {
  return {
    type: 'ACTIVATE_COMPONENT',
    payload: componentClass
  }
}

// <h1>ADMIN</h1>
// { React.createElement(this.props.activeComponentClass) }
