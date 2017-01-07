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
        this.activateComponent();
      }
    });
  }

  activateComponent() {
    const selectedComponent = this.props.selectedComponent;
    this.props.loadedComponentsAdmin.forEach((component) => {
      if (component.name === selectedComponent) {
        this.props.dispatchActivateComponent(component.payload);
      }
    });
  }

  renderComponent() {
    if (this.props.activeComponentClass !== null) {
      return React.createElement(this.props.activeComponentClass)
    }
  }

  handleChange() {

  }

  renderDropDown() {
    const selectedComponent = this.props.selectedComponent;
    const options = [];
    console.log('OPTIONS BEFORE', options)
    console.log('COMPOENTNs', this.props.components)
    this.props.components.forEach((component, index) => {
      options.push(<option key={index} value={component.name}>{component.name}</option>);
    });
    console.log('OPTIONS', options)
    return options;

  }

  render() {
    console.log('PROPS', this.props)
    const selectedComponent = this.props.selectedComponent;
    return (
      <div className="admin" >
        <h1>ADMIN</h1>


      </div>
    );
  }
}
