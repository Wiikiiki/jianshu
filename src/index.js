import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle1 } from './style.js';
import { GlobalStyle2 } from './statics/iconfont/iconfont.js'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle2 />
    <App />
  </React.StrictMode>
);