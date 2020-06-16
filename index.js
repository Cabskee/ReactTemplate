// Polyfills
import 'core-js/stable/promise';
import 'regenerator-runtime/runtime';

// React
import React from 'react';
import {render} from 'react-dom';

// Base CSS
import 'normalize.css';

// Add app to DOM
import App from './src/App';
render(<App />, document.getElementById('app'));
