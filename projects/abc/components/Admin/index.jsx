import React, { Component } from 'react';
import request from 'superagent';
// import DropZone from 'react-dropzone';

export default class Admin extends Component {

  constructor(props) {
    super(props);

  }

  componentWillMount() {
    this.loadComponents(this.props.componentContent);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.componentsLoaded === true) {
      this.activateComponent(newProps.loadedAdminComponents, newProps.selectedComponent)
    }
  }

  loadComponents(components) {
    const projectComponents = Object.keys(components);
    const componentsPayload = [];
    // take each component, push to array, once array is filled, dispatch event to update state
    projectComponents.forEach((component, index) => {
      const componentContainer = `${component}`;
      const payload = require(`../../common/containers/${componentContainer}.js`).default;
      const name = componentContainer;
      const componentData = {
        name,
        payload
      }
      componentsPayload.push(componentData);
      if (projectComponents[index + 1] === undefined) {
        this.props.dispatchLoadAdminComponents(componentsPayload);
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

  renderDropdown() {
    if (this.props.componentsLoaded === true) {
      const selectedComponent = this.props.selectedComponent;
      const options = [];
      this.props.loadedAdminComponents.forEach((component, index) => {
        options.push(<option key={index} value={component.name}>{component.name}</option>);
      });
      return (
        <select onChange={this.handleDropDown.bind(this)} value={selectedComponent} >
          { options }
        </select>
      );
    }
  }

  renderActiveComponent() {
    if (this.props.activeComponentClass !== undefined) {
      return React.createElement(this.props.activeComponentClass)
    }
  }

  renderComponentContent() {
    const selectedComponent = this.props.selectedComponent;
    const content = this.props.loadedComponentContent;
    const activeContentPoints = [];
    for (const component in content) {
      if (content.hasOwnProperty(component) && (selectedComponent === component)) {
        const activeContent = content[component];
        for (const contentPoint in activeContent) {
          if (activeContent.hasOwnProperty(contentPoint)) {
            const data = {
              key: contentPoint,
              value: activeContent[contentPoint]
            }
            activeContentPoints.push(data)
          }
        }
      }
    }
    activeContentPoints.reverse();
    return this.createInputs(activeContentPoints);
  }

  createInputs(content) {
    const inputs = [];

    content.forEach((contentPoint, index) => {
      const currentContent = content[index];
      // TODO add image dropzone and cms handling
      const html =
      (
        <div key={index}>
          <label>{currentContent.key}<br></br>
            <input type='text' onChange={this.handleChange.bind(this)}
              name={currentContent.key} value={currentContent.value} />
          </label>
        </div>
      );
      inputs.push(html);
    });

    return (
      <div className="component-inputs">
        <form onSubmit={this.handleSubmit}>
          { inputs }
        </form>
      </div>
    );
  }

  handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    this.props.dispatchEditContent(name, value, this.props.selectedComponent)
  }

  handleDropDown(e) {
    const selectedComponent = e.target.value;
    this.props.dispatchSelectComponent(selectedComponent);
  }

  handlePublish(e) {
    e.preventDefault();
    const contentState = this.props.componentContent;
    console.log(this.props.projectName)
    request.post('/api/cms/pushContent')
      .send({ content: contentState, projectName: this.props.projectName })
      .set('Accept', 'application/json')
      .end((err, res) => {
      // Calling the end function will send the request
        console.log("RESSSSSSSS", res)
      });
    // alright.
    // content.json file must be based on DB rather than file
    // do something between existing content.json and existing db content.
    // on build, take db content and create content.json file
    // take current content state and upload it to DB
  }

  render() {
    const selectedComponent = this.props.selectedComponent;
    return (
      <div className="admin" >
        <h1>ADMIN</h1>
          { this.renderDropdown() }
        <div className="component-display">
          { this.renderActiveComponent() }
          { this.renderComponentContent() }
        </div>
        <div className="buttons">
          <button onClick={this.handlePublish.bind(this)}>Publish Live</button>
        </div>
      </div>
    );
  }
}
