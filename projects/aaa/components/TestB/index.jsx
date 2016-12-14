import React from 'react';
import { render } from 'react-dom';
import Todos from './components';

if (global.window) {
  render(
    <Todos />, global.window.document.getElementById('app2'));
}
