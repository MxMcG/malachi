import React from 'react';
import { render } from 'react-dom';
import Todos from './components';

if (global.window) {
  const window = global.window;
  render(
    <Todos window={window} content={content} />,
      global.window.document.getElementById('app'));
}
