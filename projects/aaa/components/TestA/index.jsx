import React from 'react';
import { render } from 'react-dom';
import Todos from './components';

if (global.window) {
  const window = global.window;
  console.log(config);
  render(
    <Todos window={window} config={config} />,
      global.window.document.getElementById('app'));
}
