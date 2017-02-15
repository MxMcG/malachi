import React, { Component } from 'react';
const request = require('superagent');
const path = require('path');

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
    const projectName = this.props.projectName;
    const componentsPayload = [];

    // take each component, push to array, once array is filled, dispatch event to update state
    require('../../../../projects/' + projectName + '/styles/main.scss');
    projectComponents.forEach((component, index) => {
      const componentContainer = `${component}`;
      // This guy is the problem
      const payload = require('../../../../projects/' + projectName + '/common/containers/' + componentContainer + '.js').default;
      const name = componentContainer;
      const componentData = {
        name,
        payload
      }
      componentsPayload.push(componentData);
      if (projectComponents[index + 1] === undefined) {
        // adds components to state of admin component
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

  dataPointType(dataPoint) {
    // if contentPoint is an image, always include 'image' in prefix of content point name.
    if (dataPoint.indexOf('image') !== -1) {
      return 'image';
    } else {
      return 'text';
    }
  }

  /**
   * createContentPoint
   * parameters:
   * key => {string}: label text of content point
   * value => {string}: content that is displayed to user
   * type => {string}: ex: 'image', 'text'
   * nestLevel => {string}: number that determines level of input field nest
   */
  createContentPoint(key, value, type, nestLevel, path) {
    const data = {
      key,
      value,
      type,
      nestLevel,
      path
    };
    return data;
  }

  renderComponentContent() {
    const selectedComponent = this.props.selectedComponent;
    const content = this.props.loadedComponentContent;
    const ACTIVE_CONTENT_POINTS = [];

    const traverseArray = (array, level, key) => {
      // console.log(level + "<array>");
      array.forEach((element, index) => {
        traverse(element, level + 1, key);
      });
    }

    const traverseObject = (obj, level, name) => {
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          traverse(obj[key], level + 1, key);
        }
      }
    }

    const traverse = (componentContent, level, key) => {
      if (Array.isArray(componentContent)) {
        traverseArray(componentContent, level, key);
      } else if ((typeof componentContent === 'object') && (componentContent !== null)) {
        traverseObject(componentContent, level, key);
      } else {
        ACTIVE_CONTENT_POINTS.push(
          this.createContentPoint(key, componentContent, this.dataPointType(componentContent), level)
        );
      }
    }

    for (const component in content) {
      if (content.hasOwnProperty(component) && (selectedComponent === component)) {
        const activeContent = content[component];
        console.log('Initial Content Obj', activeContent)
        traverse(activeContent, 1, component);
      }
    }
    console.log('active', ACTIVE_CONTENT_POINTS);
    // [
    //   { name, value, nestLevel, type },
    //   { name, value, nestLevel, type },
    //   { name, value, nestLevel, type }
    // ]
    return this.createInputs(ACTIVE_CONTENT_POINTS.reverse());
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
        if (err) { return console.log('add error message here')}
      // Calling the end function will send the request
        console.log('Publish was a success!', res)
      });
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.dispatchLogout();
  }

  render() {
    const currentProject = this.props.projectName;
    const selectedComponent = this.props.selectedComponent;
    return (
      <div className={`admin ${currentProject}`} >
        <a href="#" className="" onClick={this.handleLogout.bind(this)}>Logout</a>
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
