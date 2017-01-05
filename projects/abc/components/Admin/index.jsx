import React, { Component } from 'react';

import NavContainer from '../../common/containers/NavContainer';

export default class Admin extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.loadComponents(this.props.componentContent);
  }

  loadComponents(components) {
    const projectComponents = Object.keys(components);
    projectComponents.forEach((component) => {
      this.importComponents(`${component}Container`);
    });
    this.renderActiveComponent();
  }

  importComponents(component) {
    const payload = require(`../../common/containers/${component}.js`).default;
    const name = component;
    const componentData = {
      name,
      payload
    }
    this.props.components.push(componentData);
  }

  renderActiveComponent() {
    const selectedComponent = this.props.selectedComponent;
    this.props.components.forEach((component) => {
      if (component.name === selectedComponent) {
        this.props.activateComponent(component.payload);
      }
    });
  }

  renderComponent() {
    if (this.props.activeComponentClass !== null) {
      return React.createElement(this.props.activeComponentClass)
    }
  }

  render() {
    return (
      <div className="admin" >
        <h1>ADMIN</h1>
        { this.renderComponent() }
      </div>
    );
  }
}
