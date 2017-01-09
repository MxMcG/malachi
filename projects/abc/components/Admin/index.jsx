import React, { Component } from 'react';

import NavContainer from '../../common/containers/NavContainer';

export default class Admin extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.loadComponents(this.props.componentContent);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.componentsLoaded === true) {
      this.activateComponent(newProps.loadedComponentsAdmin, newProps.selectedComponent)
    }
  }

  loadComponents(components) {
    const projectComponents = Object.keys(components);
    const componentsPayload = [];
    // take each component, push to array, once array is filled, dispatch event to update state
    projectComponents.forEach((component, index) => {
      const componentContainer = `${component}Container`;
      const payload = require(`../../common/containers/${componentContainer}.js`).default;
      const name = componentContainer;
      const componentData = {
        name,
        payload
      }
      componentsPayload.push(componentData);
      if (projectComponents[index + 1] === undefined) {
        this.props.dispatchLoadProjectComponents(componentsPayload);
      }
    });
  }

  activateComponent(loadedComponents, selectedComponent) {
    const selectedComponentName = selectedComponent ? selectedComponent : this.props.selectedComponent;

    loadedComponents.forEach((component) => {
      if (component.name === selectedComponent) {
        this.props.dispatchActivateComponent(component.payload);
      }
    });
  }

  handleDropDown(e) {
    const selectedComponent = e.target.value;
    this.props.dispatchSelectComponent(selectedComponent);
  }

  renderActiveComponent() {
    if (this.props.activeComponentClass !== undefined) {
      return React.createElement(this.props.activeComponentClass)
    }
  }

  renderDropdown() {
    if (this.props.componentsLoaded === true) {
      const selectedComponent = this.props.selectedComponent;
      const options = [];
      this.props.loadedComponentsAdmin.forEach((component, index) => {
        if (component.name === selectedComponent) {
          options.push(<option key={index} value={component.name} selected>{component.name}</option>);
        } else {
          options.push(<option key={index} value={component.name}>{component.name}</option>);
        }
      });
      return options;
    }
  }

  render() {
    return (
      <div className="admin" >
        <h1>ADMIN</h1>
        <select onChange={this.handleDropDown.bind(this)} >
          { this.renderDropdown() }
        </select>
        { this.renderActiveComponent() }
      </div>
    );
  }
}
